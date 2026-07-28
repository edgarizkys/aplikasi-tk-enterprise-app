const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/appController');
const payCtrl = require('../controllers/paymentController');
const auth = require('../middleware/auth');

router.get('/analytics', auth, ctrl.getAnalytics);
router.post('/payment/qris', auth, payCtrl.createQris);
router.post('/payment/va', auth, payCtrl.createVa);
router.post('/payment/webhook', payCtrl.handleWebhook);

router.get('/siswa', auth, ctrl.getAllSiswa);
router.post('/siswa', auth, ctrl.createSiswa);
router.delete('/siswa/:id', auth, ctrl.deleteSiswa);
router.get('/guru', auth, ctrl.getAllGuru);
router.post('/guru', auth, ctrl.createGuru);
router.delete('/guru/:id', auth, ctrl.deleteGuru);
router.get('/pembayaran', auth, ctrl.getAllPembayaran);
router.post('/pembayaran', auth, ctrl.createPembayaran);
router.delete('/pembayaran/:id', auth, ctrl.deletePembayaran);

module.exports = router;