(function () {
  var tabs = document.querySelector('.tabs');
  if (!tabs) return;

  tabs.addEventListener('click', function (e) {
    var btn = e.target.closest('.tab-btn');
    if (!btn) return;

    var tabId = btn.getAttribute('data-tab');
    if (!tabId) return;

    tabs.querySelectorAll('.tab-btn').forEach(function (b) {
      b.classList.remove('active');
    });
    tabs.querySelectorAll('.tab-panel').forEach(function (p) {
      p.classList.remove('active');
    });

    btn.classList.add('active');
    var panel = document.getElementById('tab-' + tabId);
    if (panel) panel.classList.add('active');
  });
})();
