---
id: lem-neural-operator-kernel-riemann-sums-uniform-on-compact-inputs
kind: lemma
title: "Kernel Riemann sums converge uniformly on compact continuous-input sets"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-discretization-invariant-operator-family
  - def-neural-operator
  - thm-compact-implies-complete-and-totally-bounded
  - def-totally-bounded
  - thm-heine-borel-rn
  - thm-finite-products-of-compact-spaces
  - def-product-topology
  - def-continuous-real-functions-on-a-compact-metric-space
  - cor-compact-domain-maps-are-uniformly-continuous
  - thm-extreme-value-metric
  - thm-continuous-image-of-a-compact-space-is-compact
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: "https://arxiv.org/pdf/2108.08481"
      locator: "Appendix E, compact-uniform Riemann approximation"
---

## Statement

Let $d,d'\in\mathbb N$ with $d,d'\ge1$, let $D\subset\mathbb R^d$ be nonempty, bounded, and Jordan measurable, let $D'\subset\mathbb R^{d'}$ be nonempty and bounded, let $\kappa\in C(\bar D'\times\bar D)$ be scalar-valued, and let $K\subset C(\bar D)$ be nonempty and compact in the supremum norm. Give products of metric spaces the max metric. Let $Q_n:C(\bar D)\to\mathbb R$ be bounded linear quadrature functionals with $\sup_n\|Q_n\|<\infty$ and $Q_n f\to\int_D f(y)\,dy$ for every $f\in C(\bar D)$. Then
$$\sup_{a\in K}\sup_{x\in\bar D'}\left|Q_n\bigl(\kappa(x,\cdot)a(\cdot)\bigr)-\int_D\kappa(x,y)a(y)\,dy\right|\longrightarrow0.$$
This conclusion is in the supremum norm on the output variable. It does not by itself establish convergence in an arbitrary Banach output norm $U$.

## Statement references
[Kovachki et al., Appendix E: compact-uniform approximation of the integral layers](https://arxiv.org/pdf/2108.08481)

[Kovachki et al., Appendix E: Riemann sums on compact families of integrands](https://arxiv.org/pdf/2108.08481)

## Facts & Assumptions

**Given:** The compact set $K$, the continuous kernel $\kappa$, and the quadrature functionals in the Statement.

[F1] A compact metric space is totally bounded, so for every $\delta>0$ it has a finite $\delta$-net ([[thm-compact-implies-complete-and-totally-bounded]], [[def-totally-bounded]]).

[F2] The hypotheses give pointwise convergence $Q_n f\to\int_D f$ on $C(\bar D)$ and a uniform bound on the operator norms of $Q_n$.

[F3] Heine–Borel makes $\bar D$ and $\bar D'$ compact. Finite products are compact in the product topology, which agrees with the topology of the max product metric because its balls are products of factor balls and such rectangles form a basis. The kernel is bounded and uniformly continuous on the compact metric product $\bar D'\times\bar D$, and each $a\in C(\bar D)$ is bounded on $\bar D$ ([[thm-heine-borel-rn]], [[thm-finite-products-of-compact-spaces]], [[def-product-topology]], [[cor-compact-domain-maps-are-uniformly-continuous]], [[thm-extreme-value-metric]], [[def-continuous-real-functions-on-a-compact-metric-space]]).

[F4] The continuous image of a compact metric space is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]).

## Proof

**Proof strategy:** direct finite-net argument.

1.1 Define $\Phi(x,a)=\kappa(x,\cdot)a(\cdot)$ on $\bar D'\times K$. For $(x,a),(x',a')$ in this product,
$$\|\Phi(x',a')-\Phi(x,a)\|_\infty\le\|\kappa\|_\infty\|a'-a\|_\infty+\|a\|_\infty\sup_{y\in\bar D}|\kappa(x',y)-\kappa(x,y)|.$$
The constants are finite by [F3]. Given $\eta>0$, uniform continuity of $\kappa$ on $\bar D'\times\bar D$ gives a positive $\delta_1$ making the second term less than $\eta/2$ when $|x'-x|<\delta_1$; choosing $\delta_2>0$ with $\|\kappa\|_\infty\delta_2<\eta/2$ bounds the first term whenever $\|a'-a\|_\infty<\delta_2$ (if $\|\kappa\|_\infty=0$, that term is zero). Thus $\Phi$ is continuous for the max product metric. The domain is compact by [F3], so [F4] makes its image $S$ compact. [given, F3, F4, algebra]

1.2 Put $M=1+\sup_n\|Q_n\|+|D|>0$. For any $f,g\in C(\bar D)$,
$$\left|Q_n(f)-\int_Df-Q_n(g)+\int_Dg\right|\le M\|f-g\|_\infty,$$
since $|\int_D(f-g)|\le |D|\|f-g\|_\infty$. [given, F2, algebra]

2.1 Fix $\varepsilon>0$. Put $M=1+\sup_n\|Q_n\|+|D|>0$. By [F1] and step 1.1, choose a finite $\varepsilon/(3M)$-net $f_1,\dots,f_J$ for $S$. For each $j$, [F2] gives an index $n_j$ such that $|Q_n(f_j)-\int_Df_j|<\varepsilon/3$ whenever $n\ge n_j$. [step 1.1, F1, F2, choose]

2.2 Let $n\ge\max_j n_j$ and $f\in S$. Choose $j$ with $\|f-f_j\|_\infty<\varepsilon/(3M)$. By [step 1.2] and the bound from [step 2.1],
$$|Q_n(f)-\int_Df|\le M\|f-f_j\|_\infty+|Q_n(f_j)-\int_Df_j|+M\|f_j-f\|_\infty<\varepsilon.$$
Every $f\in S$ has this bound, so taking the supremum over $a\in K$ and $x\in\bar D'$ proves the assertion. [step 1.2, step 2.1, algebra] ∎

