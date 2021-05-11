import Vue from 'vue'

Vue.directive('observer', {
	bind(el) {
		el.classList.add('before-enter');
		elObserver.observe(el);
	}
})
const elObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('enter');
			elObserver.unobserve(entry.target)
		}
	})
});
