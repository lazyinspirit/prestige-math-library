---
id: thm-tdmath-grand-response-covariance
kind: theorem
title: "Grand-response derivatives are covariances"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: ["thm-arithmetic-and-lattice-operations-preserve-measurability","thm-composition-with-borel-functions-preserves-measurability","cor-mean-value-theorem","def-natural-logarithm","def-real-exponential-function-and-e","def-tdmath-measure-integral","thm-algebra-of-derivatives","thm-chain-rule","thm-derivative-of-exponential","thm-logarithm-derivative-and-integral","thm-tdmath-dominated-convergence"]
justified_by: []
dependency_roles: {"thm-arithmetic-and-lattice-operations-preserve-measurability":"mathematical-premise","thm-composition-with-borel-functions-preserves-measurability":"mathematical-premise","cor-mean-value-theorem":"mathematical-premise","def-natural-logarithm":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise","def-tdmath-measure-integral":"mathematical-premise","thm-algebra-of-derivatives":"mathematical-premise","thm-chain-rule":"mathematical-premise","thm-derivative-of-exponential":"mathematical-premise","thm-logarithm-derivative-and-integral":"mathematical-premise","thm-tdmath-dominated-convergence":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete HTML chapter text"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "Full author-hosted HTML chapter text read; canonical/grand-canonical ensembles §§1.3–1.4 pp.17–30; two-state model §1.2.3 pp.11–14; 1D Ising §5.3.1 pp.156–157."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; ensembles and traces §§4.2–4.6 pp.192–217; Bose/Fermi models §§5.6–5.7 pp.277–303; 1D Ising §6.2.2 pp.330–333."
    - title: "Terence Tao, 245A Notes 3: Integration on Abstract Measure Spaces and the Convergence Theorems, full author-hosted lecture text"
      url: "https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/"
      locator: "Complete HTML lecture text read; abstract measure spaces, integration, Fatou, monotone convergence, dominated convergence, and the L1 convergence argument."
    - title: "MIT OpenCourseWare 18.102 Spring 2021, complete lecture notes (Lecture 12 on Lebesgue Integration and Dominated Convergence)"
      url: "https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
      locator: "Complete full lecture-notes PDF retrieved and read; Lecture 12, definitions 120–121, Propositions 122–123, and Theorem 125 with its Fatou-based dominated-convergence proof, lecture pp.59–62."
---

## Statement

Let $(X,\Sigma,\mu)$ be a measure space, let $w:X\to[0,\infty)$ and $X_a:X\to\mathbb R$ ($1\le a\le r$) be measurable, and let $U\subseteq\mathbb R^r$ be open. For $\theta=(\theta_1,\ldots,\theta_r)$, define $\theta\cdot X(x):=\sum_{a=1}^r\theta_aX_a(x)$. Set $Z(\theta):=\int w\exp(\theta\cdot X)\,d\mu$ and assume $0<Z(\theta)<\infty$ on $U$. Suppose for every compact $K\subset U$ there is an integrable $G_K\ge0$ such that $w e^{\theta\cdot X}(1+\sum_a|X_a|^2)\le G_K$ pointwise for all $\theta\in K$. For the normalized density $p_\theta=w e^{\theta\cdot X}/Z(\theta)$, define $\mathbb E_\theta Y:=\int Yp_\theta\,d\mu$ when integrable and $\operatorname{Cov}_\theta(X_a,X_b):=\mathbb E_\theta[(X_a-\mathbb E_\theta X_a)(X_b-\mathbb E_\theta X_b)]$. Then $\partial_a\log Z=\mathbb E_\theta X_a$ and $\partial_b\mathbb E_\theta X_a=\operatorname{Cov}_\theta(X_a,X_b)$. Thus the Hessian of $\log Z$ is positive semidefinite. This is a mathematical model identity; it assumes no independence or absence of correlations.

## Facts & Assumptions

**Given:** As stated in the item.

[A1] $(X,\Sigma,\mu)$ is a measure space; $w$ is finite-valued nonnegative measurable and each $X_a$ is real-valued measurable; $U$ is open, $Z$ is positive finite, and the displayed compact-parameter envelope is integrable.

[F1] [[def-tdmath-measure-integral]]: measurable integrals and densities use the fixed reference measure $\mu$.

[F2] [[thm-tdmath-dominated-convergence]]: a measurable pointwise-limit representative of measurable functions dominated by an integrable envelope is integrable, and the limit passes through the integral. On a noncomplete measure space the named representative must be measurable; the canonical measurable representative always exists. The limits used below are measurable by [F7].

[F3] [[def-real-exponential-function-and-e]] and [[thm-derivative-of-exponential]]: exponential weights are differentiable, with derivative equal to the exponential.

[F4] [[def-natural-logarithm]] and [[thm-logarithm-derivative-and-integral]]: $\log Z$ differentiates as $Z'/Z$ when $Z>0$.

[F5] [[cor-mean-value-theorem]]: scalar difference quotients of the exponential are bounded by intermediate derivatives.

[F6] [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]: the parameterized exponential and quotient have the usual derivative rules.

[F7] [[thm-arithmetic-and-lattice-operations-preserve-measurability]] and [[thm-composition-with-borel-functions-preserves-measurability]]: finite sums/products and composition with continuous scalar functions are measurable.

## Proof

**Given:** The parameterized measure model and its compact-parameter integrable envelopes.

1.1 For each fixed parameter, measurable energy/observable coordinates and [F7] make every finite linear combination, exponential weight, weighted first/second moment and parameter difference quotient measurable; their displayed pointwise derivative limits are the same measurable compositions. For a coordinate direction $a$, the difference quotient of $w e^{\theta\cdot X}$ tends pointwise to $wX_a e^{\theta\cdot X}$. On a compact neighborhood $K'$ of $\theta$, the mean-value theorem [F5] bounds its absolute value by $w|X_a|e^{\eta\cdot X}$ for an intermediate parameter $\eta\in K'$, at most $G_{K'}$. Dominated convergence [F2] therefore gives $\partial_aZ=\int wX_a e^{\theta\cdot X}d\mu$. Applying the same argument to the first-moment numerator gives $\partial_b\int wX_a e^{\theta\cdot X}d\mu=\int wX_aX_b e^{\theta\cdot X}d\mu$; the same envelope controls this quotient because $|X_aX_b|\le1+\sum_c|X_c|^2$. [A1, F1, F2, F3, F5, F6, F7]

2.1 Divide the first derivative by $Z>0$ and use [F4] to obtain $\partial_a\log Z=\mathbb E_\theta X_a$. The quotient rule for the normalized first moment gives $\partial_b\mathbb E_\theta X_a=\mathbb E_\theta(X_aX_b)-\mathbb E_\theta X_a\mathbb E_\theta X_b$, the covariance. [A1, F1, F4, step 1.1]

3.1 For any $v\in\mathbb R^r$, $v^T(\nabla^2\log Z)v=\mathbb E_\theta[(v\cdot X-\mathbb E_\theta(v\cdot X))^2]\ge0$. This proves positive semidefiniteness without any independence assumption. [A1, step 2.1] ∎
