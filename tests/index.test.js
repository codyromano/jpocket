const { handler } = require("../index");

let mockIsLucky = false;
let mockIsWithinWakingHours = false;
let mockTwilioCreate;
let mockTwilioDone;

jest.mock("../src/isWithinWakingHours", () => () => mockIsWithinWakingHours);
jest.mock("../src/isLucky", () => () => mockIsLucky);
jest.mock("twilio", () => () => ({
  messages: {
    create: mockTwilioCreate
  }
}));

const ERROR_MSG_REFUSE_SMS_WAKING_HOURS =
  "Refusing to send SMS because it is outside waking hours";

const ERROR_MSG_RANDOM_CHANCE = "Refusing to send SMS because of random chance";

describe("lambda handler", () => {
  let callback;
  let event;
  let context;

  beforeEach(() => {
    mockIsWithinWakingHours = false;
    event = {};
    context = {};
    callback = jest.fn();
    mockTwilioDone = jest.fn();
    mockTwilioCreate = () => ({
      then: () => ({
        done: mockTwilioDone
      })
    });
  });

  describe("outside of waking hours", () => {
    it("refuses to send SMS", () => {
      handler(event, context, callback);
      expect(callback).toHaveBeenCalledWith(
        null,
        ERROR_MSG_REFUSE_SMS_WAKING_HOURS
      );
      expect(mockTwilioDone).not.toHaveBeenCalled();
    });
  });

  describe("within waking hours", () => {
    beforeEach(() => {
      mockIsWithinWakingHours = true;
    });

    it("does not refuse to send SMS due to waking hours violation", async () => {
      handler(event, context, callback);
      await Promise.resolve();
      expect(callback).not.toHaveBeenCalledWith(
        null,
        ERROR_MSG_REFUSE_SMS_WAKING_HOURS
      );
      expect(mockTwilioDone).not.toHaveBeenCalled();
    });

    describe("without random chance", () => {
      it("refuses to send SMS", () => {
        mockIsLucky = false;
        handler(event, context, callback);
        expect(callback).toHaveBeenCalledWith(null, ERROR_MSG_RANDOM_CHANCE);
        expect(mockTwilioDone).not.toHaveBeenCalled();
      });
    });

    describe("without random chance", () => {
      it("sends SMS", () => {
        mockIsLucky = true;
        handler(event, context, callback);
        expect(mockTwilioDone).toHaveBeenCalled();
      });
    });
  });
});
