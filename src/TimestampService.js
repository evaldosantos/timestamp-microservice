class TimestampService {
  static instance;

  static getInstance = () => TimestampService.instance || new TimestampService();

  handle = (req, res) => {
    const { date_string } = req.params;
    const date = new Date(date_string);
    res.json({ unix: date.getTime() });
  };
}

export default TimestampService.getInstance();
