---
id: lem-finite-products-of-probability-kernels
kind: lemma
title: "Finite products of probability kernels are probability kernels"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-measure-kernel-and-probability-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-dynkin-pi-lambda
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "The products are finite and the factors are probability measures; no choice axiom is used."
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Theorem 5.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory, Proposition 1.7.11"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Let $(S,\Sigma)$ and $(T_i,\Tau_i)$ for $i<n$ be measurable spaces, with
$n<\infty$, and let $K_i:S\to T_i$ be probability kernels with the same
source. There is a unique probability kernel
$$K:S\to\prod_{i<n}T_i$$
whose evaluation on every measurable rectangle is
$$K(s,\prod_{i<n}B_i)=\prod_{i<n}K_i(s,B_i).$$
For $n=0$, the target is the empty-product singleton and $K$ is its point
mass. For $n>0$, the product sigma-algebra is the recursive finite product
sigma-algebra.

## Facts & Assumptions

**Given:** The finite family of probability kernels and the stated product-space conventions.

[F1] The product of two probability measures exists, is a probability
measure, and has the rectangle formula.
[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F2] Measurable rectangles generate the finite product sigma-algebra.
[[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[F3] Finite measures agreeing on a generating pi-system agree everywhere.
[[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]

[F4] A lambda-system containing a generating pi-system contains its
generated sigma-algebra. [[thm-dynkin-pi-lambda]]

## Proof
**Proof technique:** define the product measure at each source point, then prove evaluation measurability on the rectangle generators.

**Given:** The hypotheses in the statement.

1.1 If $n=0$, use the point mass on the empty-product singleton; if $n=1$, use $K_0(s)$. For $n\ge2$, fix $s\in S$ and build the product recursively: start with $K_0(s)$, and at stage $j+1$ apply [F1] to the probability measure already constructed on the first $j$ factors and the probability measure $K_j(s)$. This constructs a probability measure on the recursively defined first $j+1$ factors, with the product rectangle formula. Finite induction gives $K(s,\cdot)=\bigotimes_{i<n}K_i(s,\cdot)$ and its formula for every $s$. [given, F1, F2, construct]

2.1 For a rectangle $R=\prod_{i<n}B_i$, step 1.1 gives $s\mapsto K(s,R)=\prod_{i<n}K_i(s,B_i)$, a finite product of measurable real functions, hence measurable. Let $\mathcal D$ be the product-measurable sets $E$ for which $s\mapsto K(s,E)$ is measurable. The class contains the whole space and all rectangles. If $E\in\mathcal D$, then $K(s,E^c)=1-K(s,E)$ is measurable. For pairwise disjoint $E_j\in\mathcal D$, countable additivity gives $K(s,\bigcup_jE_j)=\lim_{N\to\infty}\sum_{j\le N}K(s,E_j)$, a pointwise limit of measurable functions. Thus $\mathcal D$ is a lambda-system. Rectangles form a pi-system and generate the product sigma-algebra by [F2], so [F4] gives $\mathcal D=\bigotimes_{i<n}\Tau_i$. Hence $K$ is a probability kernel. [given, step 1.1, F2, F4, algebra]

3.1 Any other probability kernel with the rectangle formula agrees with $K(s,\cdot)$ on the generating rectangle pi-system for each fixed $s$. The measures are finite, so uniqueness [F3] gives equality on the full product sigma-algebra at every $s$. This proves uniqueness, including the empty product case. [step 1.1, step 2.1, F3] ∎