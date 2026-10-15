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
  - def-conditional-expectation-as-an-ae-class
  - def-kullback-leibler-divergence
  - def-latent-variable-joint-and-observed-data-factorization
  - def-likelihood-density
  - thm-conditional-density-formula
  - thm-conditional-expectation-exists-by-radon-nikodym
  - thm-conditional-jensen-inequality
  - thm-integration-against-a-density
  - thm-kullback-leibler-is-nonnegative
  - thm-observed-density-is-latent-marginal-under-tonelli
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
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
$$
q_t\mu\ll q_\theta^x\mu,\qquad \int q_t(z)\bigl(|\log p(\theta_t,x,z)|+|\log p(\theta,x,z)|\bigr)\,\mu(dz)<\infty,
$$
and $D(q_t\mu\|q_\theta^x\mu)<\infty$. Use $\log0=-\infty$ and set $q_t|\log p|=0$ wherever $q_t=0$. Then, with $Q(\theta\mid\theta_t)=\int q_t(z)\log p(\theta,x,z)\,\mu(dz)$,
$$
\ell_x(\theta)-\ell_x(\theta_t) =Q(\theta\mid\theta_t)-Q(\theta_t\mid\theta_t) +D(q_t\mu\|q_\theta^x\mu).
$$
Consequently, any admissible update with $Q(\theta\mid\theta_t)\ge Q(\theta_t\mid\theta_t)$ does not decrease $\ell_x$. An exact M-step has this property when its maximum is attained over an admissible candidate set containing $\theta_t$. No equality-of-parameter conclusion is asserted when the KL divergence is zero.

## Facts & Assumptions

**Given:** Assume AC, the supplied measurable spaces and density, a fixed observation $x$, current and candidate parameters with positive finite observed marginals, the stated absolute integrability and support conditions, and finite directional KL divergence.

[A1] [[def-axiom-of-choice]]: AC supplies the Radon–Nikodym representative in the KL definition and nonnegativity theorem, and is assumed by the conditional-expectation and Jensen results below.

[F1] [[def-latent-variable-joint-and-observed-data-factorization]]: $p$ is one jointly measurable nonnegative function normalized on every parameter fiber; $m_\theta(x)=\int p(\theta,x,z)\,\mu(dz)$ and $q_\theta^x=p/m_\theta(x)$ is defined only on a positive finite fiber.

[F2] [[def-likelihood-density]]: a likelihood density is a representative for each fixed parameter; separate representatives do not themselves give joint parameter measurability. Joint measurability is separately assumed here.

[F3] [[thm-observed-density-is-latent-marginal-under-tonelli]]: $m_\theta$ is measurable and normalized, and $q_\theta^x$ is a probability density whenever $0<m_\theta(x)<\infty$.

[F4] [[thm-conditional-density-formula]]: for a joint density and a supplied filler probability, the quotient density is a conditional law on every positive finite marginal fiber.

[F5] [[def-conditional-expectation-as-an-ae-class]]: conditional expectations are classes characterized by their event integrals; on the trivial sigma-algebra the class is the constant expectation.

[F6] [[thm-conditional-expectation-exists-by-radon-nikodym]]: under AC, every integrable real variable has a conditional-expectation version for a supplied sub-sigma-algebra.

[F7] [[thm-conditional-jensen-inequality]]: for a finite convex $\phi$ and integrable $Y,\phi(Y)$, $\phi(E[Y\mid\mathcal G])\le E[\phi(Y)\mid\mathcal G]$ almost surely under AC.

[F8] [[def-kullback-leibler-divergence]]: under AC, $D(P\|Q)$ is directional; it is $+\infty$ if $P\not\ll Q$, and otherwise integrates the logarithm of the Radon–Nikodym derivative $dP/dQ$.

[F9] [[thm-integration-against-a-density]]: for nonnegative measurable $f,g$, $\int g\,d(f\mu)=\int gf\,d\mu$.

[F10] [[thm-kullback-leibler-is-nonnegative]]: $D(P\|Q)\ge0$ under its stated directional KL convention.

[F11] [[alg-expectation-maximization]]: exact mode selects an attained Q maximizer over an admissible set containing the current iterate, while generalized mode accepts an admissible candidate with nondecreasing Q.

[F12] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: a nonnegative product-measurable density has equal product and iterated integrals on sigma-finite product spaces.

## Proof

1.1 By [F3], $q_t\mu$ and $q_\theta^x\mu$ are probability measures. The support assumption makes $p(\theta,x,z)>0$ for $q_t\mu$-almost every $z$. [given, F3]

1.2 Regard $(z,x)\mapsto p(\theta_t,x,z)$ as the transposed density on $\mathsf Z\times\mathsf X$. Tonelli's theorem [F12] and the normalization in [F1] make it a joint probability density. Apply [F4] with the supplied filler probability $q_t\mu$; on the valid fiber $x$ the conditional law of $z$ is exactly $q_t\mu$. The jointly measurable density is explicit in the hypotheses; [F2] does not supply such measurability for separate pointwise versions. [given, F1, F2, F3, F4, F12]

1.3 Define $r(z)=q_t(z)/q_\theta^x(z)$ where $q_\theta^x(z)>0$ and $r(z)=0$ otherwise. Absolute continuity gives $q_t=0$ $\mu$-almost everywhere on $\{q_\theta^x=0\}$. For every measurable $A\subseteq\mathsf Z$, [F9] gives $\int_A r q_\theta^x\,d\mu=\int_A q_t\,d\mu$, so $r$ is a Radon–Nikodym derivative of $q_t\mu$ with respect to $q_\theta^x\mu$. By [F8], $D(q_t\mu\|q_\theta^x\mu)=\int q_t(z)\log\frac{q_t(z)}{q_\theta^x(z)}\,\mu(dz)=Q(\theta_t\mid\theta_t)-Q(\theta\mid\theta_t)+\ell_x(\theta)-\ell_x(\theta_t)$, because $\log q_t=\log p(\theta_t,x,z)-\log m_{\theta_t}(x)$ and $\log q_\theta^x=\log p(\theta,x,z)-\log m_\theta(x)$ on the $q_t$-full support. The absolute integrability assumptions make these log integrals finite; rearranging proves the identity. [given, A1, F1, F3, F8, F9, algebra]

2.1 On a $q_t\mu$-full set, define $Y(z)=\log p(\theta,x,z)-\log p(\theta_t,x,z)$ and set $Y=0$ on its null complement. The assumptions make $Y$ integrable, and [given, step 1.1] gives $p(\theta,x,z)>0$ there. Using $q_t=p(\theta_t,x,\cdot)/m_{\theta_t}(x)$ from [F1], [F9] gives $E_{q_t}e^Y=m_{\theta_t}(x)^{-1}\int_{\{p(\theta_t,x,z)>0\}}p(\theta,x,z)\,\mu(dz)\le m_\theta(x)/m_{\theta_t}(x)$. This expectation is positive because $e^Y>0$ $q_t\mu$-almost everywhere, and finite by the displayed bound. Since $q_t\mu$ is the conditional law at $x$ by step 1.2, [F5]–[F6] give the scalar conditional expectations on the trivial sigma-algebra. The assumptions make $e^Y$ integrable, so [F7] with $\phi(y)=e^y$ yields $Q(\theta\mid\theta_t)-Q(\theta_t\mid\theta_t)=E_{q_t}Y\le\log E_{q_t}e^Y\le\ell_x(\theta)-\ell_x(\theta_t)$. [given, A1, F1, F3, F5, F6, F7, F9, step 1.1, step 1.2]

3.1 The divergence in step 1.3 is nonnegative by [F10] under [A1]. Thus the exact identity also yields the likelihood lower bound in step 2.1 and identifies its nonnegative gap; it does not identify parameter labels. [A1, F10, step 1.3, step 2.1]

4.1 For an admissible generalized update the Q difference is nonnegative by its definition in [F11]. An attained exact maximizer over a set containing $\theta_t$ has Q at least $Q(\theta_t\mid\theta_t)$ for the same reason. Step 2.1 therefore gives $\ell_x(\theta)\ge\ell_x(\theta_t)$ in either case. [given, F11, step 2.1] ∎
