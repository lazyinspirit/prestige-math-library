---
id: thm-tdmath-measurable-canonical-identities
kind: theorem
title: "Measurable canonical normalization and identities"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: ["thm-linearity-of-the-lebesgue-integral-on-l-one","prop-order-and-scalar-rules-for-the-nonnegative-integral","lem-tdmath-measure-integral-agrees-with-root-lebesgue-integral","thm-arithmetic-and-lattice-operations-preserve-measurability","thm-composition-with-borel-functions-preserves-measurability","cor-mean-value-theorem","def-natural-logarithm","def-real-exponential-function-and-e","def-tdmath-measure-integral","thm-chain-rule","thm-derivative-of-exponential","thm-logarithm-derivative-and-integral","thm-natural-logarithm-laws","thm-tdmath-dominated-convergence"]
justified_by: []
dependency_roles: {"thm-linearity-of-the-lebesgue-integral-on-l-one":"mathematical-premise","prop-order-and-scalar-rules-for-the-nonnegative-integral":"mathematical-premise","lem-tdmath-measure-integral-agrees-with-root-lebesgue-integral":"mathematical-premise","thm-arithmetic-and-lattice-operations-preserve-measurability":"mathematical-premise","thm-composition-with-borel-functions-preserves-measurability":"mathematical-premise","cor-mean-value-theorem":"mathematical-premise","def-natural-logarithm":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise","def-tdmath-measure-integral":"mathematical-premise","thm-chain-rule":"mathematical-premise","thm-derivative-of-exponential":"mathematical-premise","thm-logarithm-derivative-and-integral":"mathematical-premise","thm-natural-logarithm-laws":"mathematical-premise","thm-tdmath-dominated-convergence":"mathematical-premise"}
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

Let $(X,\Sigma,\mu)$ be a measure space, let $E:X\to\mathbb R$ be measurable, and let $J\subset\mathbb R$ be open. Suppose $Z(\beta):=\int e^{-\beta E}\,d\mu$ satisfies $0<Z(\beta)<\infty$ on $J$, and for every compact interval $K\subset J$ there is $G_K\in L^1(\mu)$ with $(1+|E|^2)e^{-\beta E}\le G_K$ pointwise for every $\beta\in K$. Define $p_\beta=e^{-\beta E}/Z(\beta)$, $\langle Y\rangle_\beta:=\int Yp_\beta\,d\mu$ for integrable $Y$, and $\operatorname{Var}_\beta(E):=\int(E-\langle E\rangle_\beta)^2p_\beta\,d\mu$. Then $Z\in C^2(J)$, $Z'=-\int E e^{-\beta E}d\mu$, $Z''=\int E^2e^{-\beta E}d\mu$, and $-\partial_\beta\log Z=\langle E\rangle_\beta$, $\partial_\beta^2\log Z=\operatorname{Var}_\beta(E)$. The reference-relative entropy $-\int p_\beta\log p_\beta\,d\mu$ is finite and equals $\log Z+\beta\langle E\rangle_\beta$.

## Facts & Assumptions

**Given:** As stated in the item.

[A1] $(X,\Sigma,\mu)$, $E$, $J$, positivity/finiteness of $Z$, and the local integrable envelope are the hypotheses of this statement.

[F1] [[def-tdmath-measure-integral]] defines the reference integral and signed/complex conventions. [[lem-tdmath-measure-integral-agrees-with-root-lebesgue-integral]] identifies its nonnegative integral with the shared Lebesgue integral; subtraction of the identical positive and negative integrals gives the same agreement for integrable real functions. Consequently [[thm-linearity-of-the-lebesgue-integral-on-l-one]] supplies linearity here, and [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] supplies nonnegative monotonicity and homogeneity.

[F2] [[thm-tdmath-dominated-convergence]]: a measurable pointwise-limit representative of measurable functions dominated by an integrable envelope is integrable, and the limit passes through the integral. On a noncomplete measure space the named representative must be measurable; the canonical measurable representative always exists. The limits used below are measurable by [F7].

[F3] [[def-real-exponential-function-and-e]] defines the exponential; [[thm-derivative-of-exponential]] gives its derivative as itself; [[def-natural-logarithm]] identifies it as the bijection $\exp:\mathbb R\to(0,\infty)$ inverse to $\log$, so its values are positive.

[F4] [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], and [[thm-logarithm-derivative-and-integral]]: logarithms convert positive products to sums, are continuous on positive reals, and differentiate as $1/x$.

[F5] [[cor-mean-value-theorem]]: scalar difference quotients of the exponential are bounded by intermediate derivatives.

[F6] [[thm-chain-rule]]: the derivative of $e^{-\beta E(x)}$ in the parameter $\beta$ is obtained by composition with the exponential.

[F7] [[thm-arithmetic-and-lattice-operations-preserve-measurability]] and [[thm-composition-with-borel-functions-preserves-measurability]]: finite sums/products and composition with continuous scalar functions are measurable.

## Proof

**Given:** A measure space, a measurable real energy $E$, a positive finite partition function, and the compact-interval envelope.

1.1 For each fixed parameter, measurable energy/observable coordinates and [F7] make every finite linear combination, exponential weight, weighted first/second moment and parameter difference quotient measurable; their displayed pointwise derivative limits are the same measurable compositions. For $\beta$ in the interior of a compact interval $K\subset J$, the difference quotient of $e^{-\beta E(x)}$ tends pointwise to $-E(x)e^{-\beta E(x)}$. The mean-value theorem [F5] bounds its absolute value, for small $h$, by $|E|e^{-\theta E}$ for an intermediate $\theta\in K$; this is at most $G_K$ because $|E|\le1+|E|^2$. Dominated convergence [F2] therefore gives $Z'=-\int E e^{-\beta E}d\mu$. Applying the same argument to $-E e^{-\beta E}$, dominated by $G_K$, gives $Z''=\int E^2e^{-\beta E}d\mu$; dominated convergence also gives continuity of both derivatives. [A1, F1, F2, F3, F5, F6, F7]

2.1 The density $p_\beta$ is nonnegative and integrates to one. The envelope makes its first and second energy moments finite. Differentiating $\log Z$ using [F4] gives $-Z'/Z=\int E p_\beta d\mu$ and $Z''/Z-(Z'/Z)^2=\int E^2p_\beta d\mu-(\int Ep_\beta d\mu)^2$. The latter is the variance by expanding its defining square. [A1, F1, F3, F4, F6, step 1.1]

3.1 Since $\log p_\beta=-\beta E-\log Z$ almost everywhere and $\int |E|p_\beta d\mu<\infty$, the entropy integrand is absolutely integrable. Substitution and normalization yield $-\int p_\beta\log p_\beta d\mu=\beta\langle E\rangle_\beta+\log Z$. This entropy depends on the chosen reference measure $\mu$. [A1, F1, F3, F4, step 2.1] ∎
