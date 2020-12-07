class BaseController {
  async index(req, res) {
    return res.json({ ok: 'ok' });
  }

  async store(req, res) {
    return res.json({ ok: 'ok' });
  }

  async update(req, res) {
    return res.json({ ok: 'ok' });
  }

  async delete(req, res) {
    return res.json({ ok: 'ok' });
  }
}

export default new BaseController();
