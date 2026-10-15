---
id: thm-em-observed-log-likelihood-is-nondecreasing
kind: theorem
title: "EM does not decrease the observed log likelihood"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-expectation-maximization
  - def-axiom-of-choice
  - def-kullback-leibler-divergence
  - def-latent-variable-joint-and-observed-data-factorization
  - def-measure-with-density
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-integral-over-a-null-set-vanishes
  - thm-integration-against-a-density
  - thm-kullback-leibler-is-nonnegative
  - thm-observed-density-is-latent-marginal-under-tonelli
  - thm-of-archimedean
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "A. P. Dempster, N. M. Laird and D. B. Rubin, Maximum likelihood from incomplete data via the EM algorithm"
      url: "https://www.maths.usyd.edu.au/u/jchan/GLM/Dempster1977EM.pdf"
      locator: "§2, equation (2.17), and §3, Lemma 1 and Theorem 1, printed pp. 6–8"
    - title: "Mario A. T. Figueiredo, Lecture Notes on the EM Algorithm (2004)"
      url: "https://www2.stat.duke.edu/courses/Spring06/sta376/Support/EM/EM.Mixtures.Figueiredo.2004.pdf"
      locator: "§2, likelihood-monotonicity derivation and generalized EM discussion, PDF pp. 2–5"
---

## Statement

Assume the Axiom of Choice. Let $p(\theta,x,z)$ be a jointly measurable normalized complete-data density as in [[def-latent-variable-joint-and-observed-data-factorization]], and fix observed data $x$. Put $m_\theta(x)=\int p(\theta,x,z)\,\mu(dz)$. Let $\theta_t$ and $\theta$ satisfy $0<m_{\theta_t}(x),m_\theta(x)<\infty$. Define $q_t(z)=p(\theta_t,x,z)/m_{\theta_t}(x)$ and $q_\theta^x(z)=p(\theta,x,z)/m_\theta(x)$. Assume
$$q_t\mu\ll q_\theta^x\mu,\qquad \int q_t(z)\bigl(|\log p(\theta_t,x,z)|+|\log p(\theta,x,z)|\bigr)\,\mu(dz)<\infty,$$
and $D(q_t\mu\|q_\theta^x\mu)<\infty$. Use $\log0=-\infty$ and set $q_t|\log p|=0$ wherever $q_t=0$. Then, with $Q(\theta\mid\theta_t)=\int q_t(z)\log p(\theta,x,z)\,\mu(dz)$,
$$\ell_x(\theta)-\ell_x(\theta_t) =Q(\theta\mid\theta_t)-Q(\theta_t\mid\theta_t) +D(q_t\mu\|q_\theta^x\mu).$$
Consequently, any admissible update with $Q(\theta\mid\theta_t)\ge Q(\theta_t\mid\theta_t)$ does not decrease $\ell_x$. An exact M-step has this property when its maximum is attained over an admissible candidate set containing $\theta_t$. No equality-of-parameter conclusion is asserted when the KL divergence is zero.

## Facts & Assumptions

**Given:** Assume AC, the supplied measurable spaces and density, a fixed observation $x$, current and candidate parameters with positive finite observed marginals, the stated absolute integrability and support conditions, and finite directional KL divergence.

[A1] [[def-axiom-of-choice]]: AC is assumed by the finite-valued Radon–Nikodym representative in the KL definition, the nonnegativity theorem, and uniqueness of Radon–Nikodym densities.

[F1] [[def-latent-variable-joint-and-observed-data-factorization]]: $p$ is one jointly measurable nonnegative function normalized on every parameter fiber; $m_\theta(x)=\int p(\theta,x,z)\,\mu(dz)$ and $q_\theta^x=p/m_\theta(x)$ is defined only on a positive finite fiber.

[F2] [[thm-observed-density-is-latent-marginal-under-tonelli]]: $q_t$ and $q_\theta^x$ are probability densities on the positive finite fibers in the statement.

[F3] [[def-measure-with-density]]: $q\,\mu$ is the measure $A\mapsto\int_Aq\,d\mu$.

[F4] [[def-kullback-leibler-divergence]]: under AC and $P\ll Q$, the divergence is $\int\log r\,dP$ for a finite-valued Radon–Nikodym representative $r=dP/dQ$.

[F5] [[thm-integration-against-a-density]]: for nonnegative measurable $f,g$, $\int g\,d(f\mu)=\int gf\,d\mu$.

[F6] [[thm-kullback-leibler-is-nonnegative]]: under AC and the stated directional convention, $D(P\|Q)\ge0$.

[F7] [[alg-expectation-maximization]]: generalized mode requires nondecreasing $Q$, and exact mode selects an attained maximizer over an admissible set containing the current iterate.

[F8] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: pointwise order and multiplication by a positive finite scalar pass to nonnegative integrals.

[F9] [[thm-of-archimedean]]: the positive integers are unbounded in $\mathbb R$.

[F10] [[cor-integral-over-a-null-set-vanishes]]: a nonnegative measurable function integrates to zero over a measurable null set.

[F11] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]: under AC, a finite absolutely continuous measure has a density unique up to almost-everywhere equality when the positive reference measure is sigma-finite.

## Proof

1.1 By [F2] and [F3], $P:=q_t\mu$ and $Q:=q_\theta^x\mu$ are probability measures. For $u=q_t$ and $u=q_\theta^x$, $n\mathbf1_{\{u=\infty\}}\le u$ and $\int u\,d\mu=1$, so [F8] gives $n\mu\{u=\infty\}\le1$ for every positive integer $n$; [F9] forces both infinite-value sets to be $\mu$-null. Let $N$ be their union. By [F10], $P(N)=Q(N)=0$. Also $P\{q_\theta^x=0\}=0$, since $Q\{q_\theta^x=0\}=0$ and $P\ll Q$. Finally $P\{q_t=0\}=0$ by the definition of $P$. Thus $q_t$ and $q_\theta^x$ are finite and strictly positive on a $P$-full set. [given, F2, F3, F8, F9, F10]

2.1 By [A1] and [F4], choose a finite-valued Radon–Nikodym derivative $r=dP/dQ$. Define $\widetilde r=rq_\theta^x$ off $N$ and $\widetilde r=0$ on $N$, and define $\widetilde q_t=q_t$ off $N$ and $\widetilde q_t=0$ on $N$. These are finite-valued measurable functions. For every measurable $A$, [F5] and [F10] give $$\int_A\widetilde r\,d\mu=\int_A rq_\theta^x\,d\mu=\int_A r\,dQ=P(A)=\int_Aq_t\,d\mu=\int_A\widetilde q_t\,d\mu.$$ Since $\mu$ is sigma-finite and $P$ is finite, a sigma-finite exhaustion for $\mu$ is also finite for $P$. Uniqueness [F11] therefore gives $\widetilde r=\widetilde q_t$ $\mu$-almost everywhere. On the $P$-full set from step 1.1, $r=q_t/q_\theta^x$ and $$\log r=\log p(\theta_t,x,z)-\log m_{\theta_t}(x)-\log p(\theta,x,z)+\log m_\theta(x).$$ The stated absolute-integrability conditions make these log terms integrable. Integrating this equality with respect to $P=q_t\mu$ and using [F4] yields $$D(P\|Q)=Q(\theta_t\mid\theta_t)-Q(\theta\mid\theta_t)+\ell_x(\theta)-\ell_x(\theta_t),$$ which rearranges to the claimed identity. [given, A1, F1, F2, F4, F5, F10, F11, algebra]

3.1 By [F6], the KL term in the identity is nonnegative, so the observed log-likelihood difference is at least the Q difference. A generalized admissible update has nonnegative Q difference by [F7]. An attained exact maximizer over a set containing $\theta_t$ has the same property. Hence either update does not decrease the observed log likelihood. [given, F6, F7, step 2.1, algebra] ∎
