---
id: lem-smolyak-dyadic-tensor-simpson-convergence
kind: lemma
title: Convergence of dyadic tensor composite-Simpson rules
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity
dependency_level: 2
deps:
  - def-smolyak-univariate-level-hierarchy
  - alg-composite-simpson-rule
  - def-multidimensional-darboux-integral
  - def-multidimensional-grid-partition
  - def-multidimensional-darboux-sums
  - thm-multidimensional-riemann-criterion
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
  - thm-extreme-value-metric
  - lem-finite-sum-laws
  - lem-geometric-sequence-null
  - lem-power-laws
  - def-real-limit
  - lem-rat-embeds-dense
  - thm-of-square-roots
  - lem-of-naturals-positive
  - lem-of-inverse-positive
  - lem-of-sign-rules
justified_by: []
proof_strategy: direct
axiom_use: None. Compactness, finite weighted sums, and the Darboux argument are choice-free.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "T. Gerstner and M. Griebel, Sparse Grids, Encyclopedia of Quantitative Finance, §Numerical integration"
      url: "https://ins.uni-bonn.de/media/public/publication-media/sparsegrids_j8NLaMi.pdf?name=sparsegrids.pdf"
    - title: "N. Zabaras, Sparse Grid Collocation Methods, lecture notes, slides 17–21"
      url: "https://web.ics.purdue.edu/~ibilion/www.zabaras.com/Courses/UQ/Smolyak.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6"
      url: "https://fncbook.com/integration/"
---

## Statement

Let $d\ge1$ and let $f:[0,1]^d\to\mathbb R$ be continuous. For the dyadic
composite-Simpson hierarchy of [[def-smolyak-univariate-level-hierarchy]],
the tensor product $Q_L^{\otimes d}$ converges to the multiple Riemann
integral:
$$\lim_{L\to\infty} Q_L^{\otimes d}(f)=I_d(f).$$

## Facts & Assumptions

**Given:** $d\ge1$ and a continuous $f:[0,1]^d\to\mathbb R$.

[F1] [[def-smolyak-univariate-level-hierarchy]]: $Q_L$ is composite Simpson with $2^{L+1}$ equal panels. Regrouping into $2^L$ two-panel blocks gives each block length $H=2^{-L}$ and weights $H(1,4,1)/6$ at its left endpoint, midpoint, and right endpoint.

[F2] [[thm-heine-borel-rn]]: every closed box in Euclidean $\mathbb R^d$, including $[0,1]^d$, is compact.

[F3] [[thm-heine-cantor-metric]]: a continuous map from a compact metric space to a metric space is uniformly continuous.

[F4] [[thm-continuous-on-a-rectangle-is-riemann-integrable]] and [[thm-multidimensional-riemann-criterion]]: a continuous function on the cube is Riemann integrable, and its integral lies between each lower and upper Darboux sum.

[F5] [[def-multidimensional-grid-partition]]: the uniform partition into side-$H$ boxes covers the cube, has disjoint interiors, and its cell volumes sum to one.

[F6] [[def-multidimensional-darboux-sums]] and [[def-multidimensional-darboux-integral]]: for each cell $C$, the lower and upper contributions are $(\inf_C f)\operatorname{vol}(C)$ and $(\sup_C f)\operatorname{vol}(C)$.

[F7] [[alg-composite-simpson-rule]]: every two-panel Simpson block has coefficients proportional to $1,4,1$, which are nonnegative and sum to $6$.

[F8] [[lem-finite-sum-laws]]: finite sums distribute and may be regrouped.

[F9] [[thm-extreme-value-metric]]: a continuous function on a nonempty compact metric space has finite maximum and minimum, so its Darboux cell extrema are finite.

[F10] [[lem-geometric-sequence-null]] and [[def-real-limit]]: for every positive rational $\rho$, all sufficiently large $L$ satisfy $(1/2)^L<\rho$; [[lem-power-laws]] gives $(1/2)^L=2^{-L}$.

[F11] [[lem-rat-embeds-dense]]: below every positive real lies a positive rational.

[F12] [[lem-of-naturals-positive]] and [[thm-of-square-roots]]: the canonical natural $d\ge1$ is positive, so its nonnegative square root $\sqrt d$ is nonzero and hence positive; [[lem-of-inverse-positive]] makes $1/\sqrt d$ positive, and [[lem-of-sign-rules]] makes $\delta/\sqrt d$ positive.

## Proof

1.1 Fix $\varepsilon>0$. By [F2] and [F3], $f$ is uniformly continuous on $[0,1]^d$. Choose $\delta>0$ such that $\|x-y\|_2<\delta$ implies $|f(x)-f(y)|<\varepsilon$. By [F12], $\delta/\sqrt d>0$; use [F11] to choose a positive rational $\rho<\delta/\sqrt d$, then [F10] to choose $L$ with $H=2^{-L}<\rho$. Thus $\sqrt d\,H<\delta$, and every cell of the uniform $d$-dimensional grid has diameter $\sqrt d\,H$. [given, F2, F3, F10, F11, F12, choose]

2.1 For the $L$ chosen in step 1.1, the tensor Simpson rule is the sum over grid cells of their tensor two-panel block rules: each cell contributes $H^d$ times a weighted average of its $3^d$ endpoint/midpoint tensor nodes, with coefficients $\prod_{j=1}^d(1,4,1)_{i_j}/6^d$. These coefficients are nonnegative and sum to one by [F7]. Each closed cell is compact and nonempty, so [F9] gives finite infimum and supremum of $f$ there. Every node lies in its cell and its value lies between those extrema. Regrouping finite sums by [F8] gives $L(f,P_L)\le Q_L^{\otimes d}(f)\le U(f,P_L)$, with the factors $H^d$ equal to cell volumes. [given, F1, F5, F6, F7, F8, F9, step 1.1, algebra]

3.1 By step 1.1, the oscillation of $f$ on each cell is at most $\varepsilon$. Thus [F5]–[F6] give $U(f,P_L)-L(f,P_L)\le\varepsilon\sum_C\operatorname{vol}(C)=\varepsilon$. By [F4], $I_d(f)$ lies between these Darboux sums; step 2.1 places the tensor-Simpson value between them as well. Therefore $|Q_L^{\otimes d}(f)-I_d(f)|\le\varepsilon$. This holds for sufficiently large $L$ for each $\varepsilon>0$, proving convergence. [given, F4, F5, F6, step 1.1, step 2.1, algebra] ∎
