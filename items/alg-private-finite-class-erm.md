---
id: alg-private-finite-class-erm
kind: algorithm
title: "Finite-class empirical-risk selection with exponential weights"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-exponential-reciprocal-and-positivity
  - def-measurable-rectangle
  - def-measurable-space
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-real-exponential-function-and-e
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-exponential-is-strictly-increasing
  - thm-threshold-characterisations-of-real-and-extended-real-measurability
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the range is finite.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy, Chapter 3 §3.4 and Chapter 11 §11.1"
      url: "https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf"
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript, §4.2"
      url: "https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf"
---

## Definition

Let $(\mathcal X,\Sigma_X)$ be a nonempty measurable space, let the binary label set $\{0,1\}$ carry its power-set sigma-algebra, and let $\mathcal C$ be a finite nonempty class of measurable maps $h:\mathcal X\to\{0,1\}$. Fix an integer $n\ge1$ and a parameter $\varepsilon>0$. On an ordered labeled sample $S=((x_1,y_1),\ldots,(x_m,y_m))$ with $m\ge n$, or on its underlying finite multiset, define
$$\widehat L_S(h)=\frac1m\sum_{i=1}^m\mathbf 1\{h(x_i)\ne y_i\},\qquad w_S(h)=\exp\!\left(-\frac{\varepsilon n}{2}\widehat L_S(h)\right).$$
Output $h\in\mathcal C$ with probability $w_S(h)/\sum_{g\in\mathcal C}w_S(g)$. This formula is invariant under permutations of the sample. For the statistical input, the ordered sample space has its finite product sigma-algebra. For the private-database input, the same formula is defined on finite-support record-count functions of size at least $n$, with the power-set sigma-algebra; privacy is proved separately.

## Definition references

[[def-product-sigma-algebra-and-finite-product-sigma-algebras|Finite product sigma-algebras for samples]]

[[def-real-exponential-function-and-e|The real exponential function]]

[[def-measure-kernel-and-probability-kernel|Probability kernels for randomized selection]]

Cynthia Dwork and Aaron Roth, *The Algorithmic Foundations of Differential Privacy*, Definition 3.4 and Chapter 11 §11.1: [full text](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf).

Salil Vadhan, *The Complexity of Differential Privacy*, Proposition 4.2: [full text](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf).

## Facts & Assumptions

**Given:** The measurable binary class, $n\ge1$, $\varepsilon>0$, and a finite sample or multiset with at least $n$ records.

[F1] A measurable space is a set with a sigma-algebra; measurable rectangles generate the finite product sigma-algebra. [[def-measurable-space]], [[def-measurable-rectangle]], [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[F2] The real exponential is finite and strictly positive on every real input. [[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]]

[F3] The exponential is continuous, continuous real maps have Borel preimages, and composition with a Borel measurable outer map preserves measurability. [[thm-exponential-is-strictly-increasing]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-composition-with-borel-functions-preserves-measurability]]

[F4] Finite sums, scalar multiples, and products of measurable real functions are measurable. [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

[F5] A real function is measurable exactly when its strict threshold sets are measurable. [[thm-threshold-characterisations-of-real-and-extended-real-measurability]]

[F6] A probability measure has total mass one; a probability kernel has probability-measure sections and measurable event evaluations. [[def-probability-measure]], [[def-measure-kernel-and-probability-kernel]]

## Verification

**Given:** The hypotheses and procedure in the Definition.

1.1 For each $h\in\mathcal C$, its mismatch set is $(h^{-1}\{0\}\times\{1\})\cup(h^{-1}\{1\}\times\{0\})$, a finite union of measurable rectangles by [F1]. Thus each sample loss indicator and the finite average $\widehat L_S(h)$ are measurable in the ordered sample. By [F2]–[F4], the weight $w_S(h)$ is finite, positive, and measurable in $S$. [given, F1, F2, F3, F4, construct]

2.1 Since $\mathcal C$ is finite and nonempty, $Z_S:=\sum_{g\in\mathcal C}w_S(g)$ is finite, measurable, and strictly positive. For $a\le0$, $\{S:1/Z_S>a\}$ is the whole sample space; for $a>0$, it is $\{S:Z_S<1/a\}$, which is measurable by [F5]. Hence $1/Z_S$, and then each $p_S(h):=w_S(h)/Z_S$, is measurable by [F4]. These probabilities sum to one. Define $K(S,A)=\sum_{h\in A}p_S(h)$ for $A\subseteq\mathcal C$; it is countably additive because a disjoint family of subsets of finite $\mathcal C$ has only finitely many nonempty members, and $K(S,\mathcal C)=1$. For each $A$, $S\mapsto K(S,A)$ is measurable as a finite sum of measurable functions; on the power-set private-database domain every event evaluation is also measurable. Thus [F6] gives the probability-kernel conditions. [F2, F4, F5, F6, step 1.1, algebra] ∎

## Source notes

The scale $1/n$ is used as a sensitivity upper bound. The private theorem proves its add/remove validity on the restricted size-at-least-$n$ domain and derives privacy and utility directly; no exact attained-maximum convention is assumed here.
