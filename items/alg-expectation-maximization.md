---
id: alg-expectation-maximization
kind: algorithm
title: "Expectation-maximization"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-kullback-leibler-divergence
  - def-latent-variable-joint-and-observed-data-factorization
  - def-likelihood-density
  - thm-observed-density-is-latent-marginal-under-tonelli
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "A. P. Dempster, N. M. Laird and D. B. Rubin, Maximum likelihood from incomplete data via the EM algorithm"
      url: "https://www.maths.usyd.edu.au/u/jchan/GLM/Dempster1977EM.pdf"
      locator: "§2, equation (2.17), and §3, equation (3.2), printed pp. 6–7"
    - title: "Mario A. T. Figueiredo, Lecture Notes on the EM Algorithm (2004)"
      url: "https://www2.stat.duke.edu/courses/Spring06/sta376/Support/EM/EM.Mixtures.Figueiredo.2004.pdf"
      locator: "§1 E-step/M-step definition, PDF pp. 1–2"
---

## Definition

**Inputs.** Supply a measurable parameter space $(\Theta,\mathcal T)$, sigma-finite measure spaces $(\mathsf X,\mathcal A,\nu)$ and $(\mathsf Z,\mathcal C,\mu)$, and a jointly measurable complete-data density $p(\theta,x,z)$ relative to $\nu\otimes\mu$ that integrates to one on each parameter fiber, as in [[def-latent-variable-joint-and-observed-data-factorization]]. This joint measurability is supplied explicitly and is not inferred from separate likelihood-density versions ([[def-likelihood-density]]). Also supply fixed observed data $x$, an initial value $\theta_0$, a mode `exact` or `generalized`, and a candidate selector that returns either a candidate or `unavailable` in finite time at each call. Require $0<m_{\theta_0}(x)<\infty$ and
$$\int q_{\theta_0}^x(z)\,|\log p(\theta_0,x,z)|\,\mu(dz)<\infty.$$

Write
$$m_\theta(x):=\int_{\mathsf Z}p(\theta,x,z)\,\mu(dz),\qquad q_\theta^x(z):=\frac{p(\theta,x,z)}{m_\theta(x)}$$
only when $0<m_\theta(x)<\infty$. By [[thm-observed-density-is-latent-marginal-under-tonelli]], $m_\theta$ is the observed-data density and $q_\theta^x$ is a probability density on every such fiber. The observed log likelihood is $\ell_x(\theta):=\log m_\theta(x)$ on those fibers.

At each valid iterate $\theta_t$, set $q_t:=q_{\theta_t}^x$ and define
$$Q(\theta\mid\theta_t):=\int_{\mathsf Z}\log p(\theta,x,z)\,q_t(z)\,\mu(dz)$$
only for candidates where this integral is finite. Use $\log0=-\infty$ and set $q_t|\log p|=0$ wherever $q_t=0$. The Q integral itself is choice-free. To test finite KL when $q_t\mu\ll q_\theta^x\mu$, assume AC as required by [[def-axiom-of-choice]] and [[def-kullback-leibler-divergence]]; when absolute continuity fails, $D=+\infty$ by that definition without AC. An **admissible candidate** $\theta$ also satisfies $0<m_\theta(x)<\infty$, $q_t\mu\ll q_\theta^x\mu$, and
$$D(q_t\mu\|q_\theta^x\mu)<\infty,$$
where the direction of $D$ is that of [[def-kullback-leibler-divergence]]. Require $\int q_t|\log p(\theta,x,\cdot)|\,d\mu<\infty$ for each candidate and $\int q_t|\log p(\theta_t,x,\cdot)|\,d\mu<\infty$ for the current iterate.

**Output.** Emit the iterate sequence beginning with $\theta_0$. If a stopping condition occurs after $T$ successful updates, return the finite list $(\theta_0,\ldots,\theta_T)$ and a status recording the first unavailable condition or selector result; do not append a failed candidate. If no stopping condition occurs, the emitted sequence is infinite and there is no finite stopping status.

**Procedure.** For $t=0,1,2,\ldots$, check that $0<m_{\theta_t}(x)<\infty$; if not, return the current list with status `stopped: invalid current marginal`. Form $q_t$ and $Q(\cdot\mid\theta_t)$ on admissible candidates. If $Q(\theta_t\mid\theta_t)$ is not finite, return with status `stopped: current Q is not finite`. Call the supplied selector. In **exact mode**, its candidate set must consist of admissible candidates and contain $\theta_t$; it returns an attained maximizer of $Q$ on that set, or `unavailable` if no attained maximum is available. In **generalized mode**, it returns any admissible $\theta_{t+1}$ with $Q(\theta_{t+1}\mid\theta_t)\ge Q(\theta_t\mid\theta_t)$, or `unavailable` if no such update is supplied. If the selector returns `unavailable`, return with status `stopped: no required update supplied`; otherwise append its candidate and continue. The procedure asserts no convergence or global-optimality property and makes no assertion for a candidate that loses current latent support.
