---
id: def-nufft-finite-array-norms
kind: definition
title: Finite complex-array norms used by the NUFFT certificates
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: nonuniform-fast-fourier-transforms
dependency_level: 0
deps:
  - def-finite-sum-in-a-commutative-monoid
  - def-intervals-rectangles-and-complex-balls
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - lem-nonnegative-square-root-exists-and-unique
  - def-complete-ordered-real-field
  - thm-induction-principle
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: This finite definition uses no choice principle.
sources:
  references:
    - title: Sheldon Axler, Linear Algebra Done Right, fourth edition
      url: https://linear.axler.net/LADR4e.pdf
      locator: "Section 6A, printed pp. 182–186: complex Euclidean norm and counting
        inner product, Example 6.3(a), Definition 6.7 and Example 6.8(a). The
        local finite-index/empty-index, l1 and maximum conventions and finite
        well-definedness proof are supplied explicitly here."
verification:
  precheck: pass
---

## Definition

For a finite index set $E$ and a complex array $z=(z_e)_{e\in E}$, define
$$\|z\|_1=\sum_{e\in E}|z_e|,\qquad \|z\|_2=\left(\sum_{e\in E}|z_e|^2\right)^{1/2},\qquad \|z\|_\infty=\max_{e\in E}|z_e|.$$
For $z,w\in\mathbb C^E$, define the counting inner product by $\langle z,w\rangle_E=\sum_{e\in E}z_e\overline{w_e}$. By [[lem-complex-conjugation-and-modulus-laws]], $\langle z,z\rangle_E=\sum_{e\in E}|z_e|^2$, so $\|z\|_2=\sqrt{\langle z,z\rangle_E}$. For $E=\varnothing$, all three norms and this inner product are defined to be zero. For nonempty finite $E$, the maximum exists by repeated comparison in the real order. Complex modulus is as in [[def-intervals-rectangles-and-complex-balls]], conjugation as in [[def-complex-conjugate-real-imaginary-part-and-modulus]], finite sums as in [[def-finite-sum-in-a-commutative-monoid]], and the square root is the unique nonnegative root.

## Facts & Assumptions

**Given:** A finite set $E$ and a complex array $z\in\mathbb C^E$.

[F1] [[def-finite-sum-in-a-commutative-monoid]]: a finite indexed sum is formed from finitely many terms and the empty sum is zero.

[F2] [[def-intervals-rectangles-and-complex-balls]]: complex modulus is a finite nonnegative real number.

[F3] [[lem-nonnegative-square-root-exists-and-unique]]: every nonnegative real has a unique nonnegative square root.

[F4] [[def-complete-ordered-real-field]]: the real order is total, so any two real numbers are comparable.

[F5] [[thm-induction-principle]]: a statement proved at the first finite list length and preserved when one entry is added holds for every finite list length.

## Proof

1.1 For $E=\varnothing$ all three values are stipulated as zero. If $E$ is nonempty finite, enumerate its elements and induct on the number of entries. A one-entry list of real moduli has a maximum; given a maximum for the first $n$ entries, compare it with the $(n+1)$st modulus using [F2] and [F4] and keep the larger. Induction [F5] constructs the maximum of the finite modulus list. The finite sum formulas in [F1] are well-defined. [given, F1, F2, F4, F5, induction]

2.1 Every term $|z_e|^2$ is nonnegative by [F2], so the finite sum in the Euclidean norm is nonnegative; [F3] supplies its unique nonnegative square root. Thus all three displayed values are defined, including the separately stipulated empty-array case. [F1, F2, F3, step 1.1, algebra] ∎