---
id: "prop-existence-and-lower-semicontinuity-of-optimal-couplings"
kind: proposition
title: "Optimal quadratic couplings exist and their cost is weakly lower semicontinuous"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-wasserstein-two-space-and-couplings", "def-weak-convergence-of-borel-probability-measures", "def-polish-space", "thm-prokhorov-tightness-theorem-on-polish-spaces", "cor-weakly-convergent-sequences-are-tight", "thm-monotone-convergence-for-the-integral", "def-axiom-of-choice", "thm-choice-implies-dependent-implies-countable-choice", "def-countable-choice", "def-tight-family-of-probability-measures", "cor-weak-limits-are-unique", "def-product-measure-on-sigma-finite-spaces", "thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique", "def-expectation-of-a-nonnegative-or-integrable-random-variable", "thm-tonelli-theorem-for-sigma-finite-product-spaces"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "AC supplies a sequence of approximate minimizers and the Prokhorov subsequence extractions; Prokhorov's Countable Choice use is inherited from AC."
sources:
  references:
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §§5.1–5.3, PDF pp. 161–178"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport, Appendix A.1, PDF pp. 12–13"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Assume the Axiom of Choice. For every pair $\mu,\nu\in\mathcal P_2(\mathbb R^d)$, the infimum of $\int|x-y|^2d\pi(x,y)$ over couplings $\pi$ of $\mu$ and $\nu$ is finite and is attained. If $\mu_n,\nu_n,\mu,\nu\in\mathcal P_2(\mathbb R^d)$, $\mu_n$ converges narrowly to $\mu$, and $\nu_n$ converges narrowly to $\nu$, then
$$W_2(\mu,\nu)^2\le\liminf_{n\to\infty}W_2(\mu_n,\nu_n)^2.$$

## Statement references

[[def-wasserstein-two-space-and-couplings]]

[[def-weak-convergence-of-borel-probability-measures]]

[[def-polish-space]]

[[thm-prokhorov-tightness-theorem-on-polish-spaces]]

[[cor-weakly-convergent-sequences-are-tight]]

[[thm-monotone-convergence-for-the-integral]]

[[def-axiom-of-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]

[[def-countable-choice]]

[[def-tight-family-of-probability-measures]]

[[cor-weak-limits-are-unique]]

[[def-product-measure-on-sigma-finite-spaces]]

[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[Santambrogio, *Optimal Transport for Applied Mathematicians*, Chapter 5](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

[Chizat and Bach, Appendix A.1](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC; for the attainment claim, $\mu,\nu\in\mathcal P_2(\mathbb R^d)$; for the lower-semicontinuity claim, $\mu_n,\nu_n,\mu,\nu\in\mathcal P_2(\mathbb R^d)$ with narrowly convergent sequences $\mu_n\Rightarrow\mu$ and $\nu_n\Rightarrow\nu$.

[F1] A product of two Borel probabilities is a Borel probability with the specified marginals; $\mathbb R^{2d}$ is Polish. [[def-product-measure-on-sigma-finite-spaces]] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] [[def-polish-space]]

[F2] A narrowly convergent sequence of Borel probabilities on a Polish space is tight. A tight sequence on a Polish space has a weakly convergent subsequence under AC. [[cor-weakly-convergent-sequences-are-tight]] [[def-tight-family-of-probability-measures]] [[thm-prokhorov-tightness-theorem-on-polish-spaces]] [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]]

[F3] Coordinate projections are continuous, so weak convergence of joint laws implies weak convergence of their coordinate marginals; a probability law is determined by its values on measurable rectangles. [[def-weak-convergence-of-borel-probability-measures]] [[cor-weak-limits-are-unique]]

[F4] For a nonnegative measurable function, integrals of an increasing sequence converge to the integral of its pointwise limit. [[thm-monotone-convergence-for-the-integral]] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]

[F5] The product coupling has finite quadratic cost because $|x-y|^2\le2|x|^2+2|y|^2$ and both marginals have finite second moment. The corresponding iterated integrals are justified by Tonelli. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Proof
1.1 The product probability $\mu\otimes\nu$ is a coupling by [F1]. The inequality in [F5] gives its cost at most $2\int|x|^2d\mu+2\int|y|^2d\nu<\infty$. Thus the coupling set is nonempty and its cost infimum $c$ is finite and nonnegative. [given, F1, F5]

2.1 By AC choose couplings $\pi_n$ with $\int|x-y|^2d\pi_n\le c+1/n$. Their marginals are the fixed probabilities $\mu,\nu$. For any $\varepsilon>0$, tightness of each marginal supplies compact sets $K_1,K_2$ with $\mu(K_1^c)<\varepsilon/2$ and $\nu(K_2^c)<\varepsilon/2$. Then $\pi_n((K_1\times K_2)^c)\le\mu(K_1^c)+\nu(K_2^c)<\varepsilon$ for every $n$. Hence $(\pi_n)$ is tight on the Polish space $\mathbb R^{2d}$; [F2] gives a subsequence $\pi_{n_j}\Rightarrow\pi$. By [F3] its marginals are $\mu,\nu$. [given, F1, F2, F3, step 1.1]

3.1 For $N\ge1$, the function $c_N(x,y)=\min\{|x-y|^2,N\}$ is bounded and continuous. Weak convergence therefore gives $\int c_Nd\pi=\lim_j\int c_Nd\pi_{n_j}\le\liminf_j\int|x-y|^2d\pi_{n_j}\le c$. Letting $N\uparrow\infty$ and using [F4] yields $\int|x-y|^2d\pi\le c$. Since $\pi$ is a coupling and $c$ is the infimum, equality holds; the infimum is attained. [F1, F3, F4, step 2.1]

4.1 Put $L=\liminf_nW_2(\mu_n,\nu_n)^2$. If $L=+\infty$, the asserted inequality is immediate. Otherwise choose a subsequence, still indexed $n_j$, along which the costs converge to $L$, and choose by AC couplings $\sigma_j$ with costs at most $W_2(\mu_{n_j},\nu_{n_j})^2+1/j$. The marginal sequences are tight by [F2]; choosing compact sets for each coordinate and applying the same union bound as in step 2.1 proves $(\sigma_j)$ is tight on $\mathbb R^{2d}$. A further subsequence converges weakly to a probability $\sigma$, whose marginals are $\mu,\nu$ by [F3]. For every $N$, bounded continuity of $c_N$ gives $\int c_Nd\sigma\le L$. Monotone convergence [F4] then gives $\int|x-y|^2d\sigma\le L$. The definition of $W_2$ and the coupling property imply $W_2(\mu,\nu)^2\le L$. [given, F1, F2, F3, F4, step 2.1] ∎
