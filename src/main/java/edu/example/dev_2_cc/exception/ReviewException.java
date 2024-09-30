package edu.example.dev_2_cc.exception;

public enum ReviewException {
    NOT_FOUND("Review NOT_FOUND", 404),
    NOT_CREATED("Review Not Created", 400),
    NOT_UPDATED("Review Not Updated", 400),
    NOT_DELETED("Review Not Deleted", 400);

    private ReviewTaskException reviewTaskException;

    ReviewException(String message, int code) {
        reviewTaskException = new ReviewTaskException(message, code);
    }

    public ReviewTaskException get(){
        return reviewTaskException;
    }
}
