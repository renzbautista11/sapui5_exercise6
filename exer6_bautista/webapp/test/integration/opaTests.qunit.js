/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/training/exer6_bautista/test/integration/AllJourneys"
], function () {
	QUnit.config.autostart = false;
	QUnit.start();
});
