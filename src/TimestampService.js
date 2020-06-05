class TimestampService {
  static instance;

  static getInstance = () => TimestampService.instance || new TimestampService();

  handle = (req, res) => {
    let date;
    const { date_string } = req.params;

    if (/\d{4}-\d{2}-\d{2}/.test(date_string)) {
      date = new Date(date_string);
    } else if (/\d{10}/.test(date_string)) {
      const unixdate = parseInt(date_string, 10);
      date = new Date(unixdate);
    }

    res.json({ unix: date.getTime(), utc: date.toUTCString() });
  };
}

export default TimestampService.getInstance();
