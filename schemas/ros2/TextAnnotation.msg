# foxglove_msgs/msg/TextAnnotation
# A text label on a 2D image

# Generated by https://github.com/foxglove/foxglove-sdk

# Timestamp of annotation
builtin_interfaces/Time timestamp

# Bottom-left origin of the text label in 2D image coordinates (pixels).
# The coordinate uses the top-left corner of the top-left pixel of the image as the origin.
foxglove_msgs/Point2 position

# Text to display
string text

# Font size in pixels
float64 font_size

# Text color
foxglove_msgs/Color text_color

# Background fill color
foxglove_msgs/Color background_color
