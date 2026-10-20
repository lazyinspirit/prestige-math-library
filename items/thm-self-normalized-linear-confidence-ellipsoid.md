---
id: thm-self-normalized-linear-confidence-ellipsoid
kind: theorem
title: The ridge estimate lies in a time-uniform linear confidence ellipsoid
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
verification:
  precheck: pass
deps: [cor-markov-inequality-for-random-variables,
       cor-triangle-inequality-for-inner-product-norm,
       def-axiom-of-choice,
       def-countable-choice,
       def-inner-product-norm,
       def-linear-contextual-bandit-model,
       def-natural-logarithm,
       def-real-and-complex-inner-product-space,
       def-sigma-algebra,
       lem-linucb-gaussian-mixture-supermartingale,
       lem-linucb-ridge-information-matrix,
       lem-linucb-ridge-estimates-are-measurable,
       thm-arithmetic-and-lattice-operations-preserve-measurability,
       thm-natural-logarithm-laws,
       thm-determinant-of-a-triangular-matrix,
       thm-optional-sampling-for-bounded-stopping-times]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC is used by the conditional-expectation, supermartingale, and bounded optional-sampling interfaces. Countable Choice is used in the Gaussian-mixture integral; the authoring model already assumes the stronger AC branch, and the exact supplier use remains explicit."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§20.1, Theorems 20.4–20.5 and their complete Gaussian-mixture proof."
    - title: "Yasin Abbasi-Yadkori, Dávid Pál, and Csaba Szepesvári, Online Least Squares Estimation with Self-Normalized Processes: An Application to Bandit Problems"
      url: "https://arxiv.org/pdf/1102.2670"
      locator: "Theorem 3, Corollary 1, and Corollary 10, PDF pp. 2–3 and 8."
---

## Statement

Assume AC and Countable Choice and the finite-dimensional linear contextual bandit model. For $\delta\in(0,1)$ and $1\le t\le n$, set

$$\rho_t=\sqrt\lambda\,m_2+\sqrt{2\log(1/\delta)+\log\!\left(\frac{\det V_{t-1}}{\lambda^d}\right)},\qquad C_t=\left\{\theta\in\mathbb R^d:\|\theta-\widehat\theta_{t-1}\|_{V_{t-1}}^2\le\rho_t^2\right\}.$$

Then

$$\mathbb P\{\theta^*\in C_t\text{ for every }1\le t\le n\}\ge1-\delta.$$

## Statement references

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, Theorems 20.4–20.5](https://tor-lattimore.com/downloads/book/book.pdf)

[Abbasi-Yadkori, Pál, and Szepesvári, Theorem 3 and Corollary 10](https://arxiv.org/pdf/1102.2670)

## Facts & Assumptions

**Given:** AC, Countable Choice, the model's deterministic $\theta^*$ with $\|\theta^*\|_2\le m_2$, predictable feature vectors, reward equation, and conditional MGF bound.

[A1] [[def-axiom-of-choice]]: conditional-expectation versions exist under the supplied AC branch; the optional-sampling interface assumes AC.

[A2] [[def-countable-choice]]: the Gaussian-integral supplier assumes Countable Choice.

[F1] [[def-linear-contextual-bandit-model]]: $X_t=\langle\theta^*,A_t\rangle+\eta_t$, $b_t=\sum_{s\le t}A_sX_s$, $V_t=\lambda I+\sum_{s\le t}A_sA_s^{\mathsf T}$, and $\|\theta^*\|_2\le m_2$.

[F2] [[lem-linucb-ridge-information-matrix]]: each $V_t$ is symmetric positive definite, $\det(V_t)\ge\lambda^d>0$, and $x^{\mathsf T}V_t^{-1}x\le\lambda^{-1}\|x\|_2^2$.

[F3] [[lem-linucb-gaussian-mixture-supermartingale]]: $Z_s=\sqrt{\det(V_0)/\det(V_s)}\exp(\frac12S_s^{\mathsf T}V_s^{-1}S_s)$ is a nonnegative integrable supermartingale with $Z_0=1$.

[F4] [[thm-optional-sampling-for-bounded-stopping-times]]: for an integrable supermartingale and stopping times $\sigma\le\tau$ bounded by a deterministic integer, $\mathbb E[Z_\tau]\le\mathbb E[Z_\sigma]$.

[F5] [[cor-markov-inequality-for-random-variables]]: if $Y\ge0$ and $a>0$, then $\mathbb P(Y\ge a)\le\mathbb E[Y]/a$.

[F6] [[def-real-and-complex-inner-product-space]], [[def-inner-product-norm]], and [[cor-triangle-inequality-for-inner-product-norm]]: a symmetric positive-definite bilinear form is a real inner product; its induced norm satisfies Cauchy–Schwarz and the triangle inequality.

[F7] [[thm-determinant-of-a-triangular-matrix]]: $\det(\lambda I_d)=\lambda^d$ for $\lambda>0$.

[F8] [[lem-linucb-ridge-estimates-are-measurable]]: $V_t$, $\det(V_t)$, $b_t$, and $\widehat\theta_t$ are measurable through time $t+1$, so the confidence-ellipsoid events and radii are measurable.

[F9] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: $\log$ is defined on positive reals, continuous, and strictly increasing there.

[F10] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: finite sums and products of real-valued measurable functions are measurable.

[F11] [[def-sigma-algebra]]: a sigma-algebra is closed under complements and countable unions, so finite intersections follow by De Morgan's law.

## Proof

1.1 Since $V_0=\lambda I_d$ is diagonal, [F7] gives $\det V_0=\lambda^d>0$. On $\mathcal H_s=\mathcal F_{s+1}$, define $\sigma$ as the first $s\in\{0,\ldots,n\}$ with $Z_s\ge1/\delta$, and set $\sigma=n$ if there is no such $s$. For $k<n$, $\{\sigma\le k\}=\bigcup_{s=0}^k\{Z_s\ge1/\delta\}\in\mathcal H_k$, while $\{\sigma\le n\}=\Omega$. Hence $\sigma$ is a stopping time bounded by $n$. [F1, F3, F7, construct]

1.2 For each $0\le s<n$, the model reward equation gives $b_s=G_s\theta^*+S_s=(V_s-\lambda I_d)\theta^*+S_s$. Therefore $$\widehat\theta_s-\theta^*=V_s^{-1}S_s-\lambda V_s^{-1}\theta^*.$$ [F1, algebra]

1.3 For fixed $s$, define $\langle x,y\rangle_{V_s}=x^{\mathsf T}V_sy$. By [F2] this form is symmetric and positive definite, so [F6] gives its induced norm triangle inequality. Also $\|V_s^{-1}S_s\|_{V_s}^2=S_s^{\mathsf T}V_s^{-1}S_s$ and $$\|\lambda V_s^{-1}\theta^*\|_{V_s}^2=\lambda^2(\theta^*)^{\mathsf T}V_s^{-1}\theta^*\le\lambda\|\theta^*\|_2^2\le\lambda m_2^2.$$ [F1, F2, F6, algebra]

2.1 By [F4], $\mathbb E[Z_\sigma]\le\mathbb E[Z_0]=1$. On the event that some $Z_s$ crosses $1/\delta$ by time $n$, the definition of $\sigma$ gives $Z_\sigma\ge1/\delta$. Thus [F5] yields $\mathbb P\{\exists s\le n:Z_s\ge1/\delta\}\le\delta$. [step 1.1, A1, A2, F3, F4, F5, algebra]

3.1 Outside the crossing event bounded in step 2.1, every $0\le s\le n$ has $Z_s<1/\delta$. Taking logarithms in [F3]'s formula and using $\det V_0=\lambda^d$ from step 1.1 gives $$S_s^{\mathsf T}V_s^{-1}S_s<2\log(1/\delta)+\log\!\left(\frac{\det V_s}{\lambda^d}\right).$$ All logarithm arguments are positive by [F2]. [step 1.1, step 2.1, F2, F3, F9, algebra]

4.1 Apply the triangle inequality from step 1.3 to step 1.2, then use step 3.1. For $t=s+1$ this yields $$\|\widehat\theta_{t-1}-\theta^*\|_{V_{t-1}}\le\sqrt{S_{t-1}^{\mathsf T}V_{t-1}^{-1}S_{t-1}}+\sqrt\lambda m_2\le\rho_t.$$ The radius $\rho_t$ is measurable: its determinant input is measurable by [F8], the logarithm is continuous by [F9], and $x\mapsto\sqrt{x}$ is continuous on $[0,\infty)$ since $|\sqrt{x}-\sqrt y|^2\le|x-y|$ there; the radicand is nonnegative by [F2] and $\delta\in(0,1)$. By [F8] and [F10], the quadratic form defining $C_t$ is measurable. The finite intersection of these events is measurable by [F11], so $\{\theta^*\in C_t\text{ for every }1\le t\le n\}$ is measurable. Its probability is at least $1-\delta$ by step 2.1. [step 3.1, step 1.2, step 1.3, F1, F2, F8, F9, F10, F11, algebra] ∎
