---
id: def-total-steenrod-square
kind: definition
title: Total Steenrod square
status: published
origin: pipeline
deps: ["thm-cartan-formula-for-steenrod-squares", "prop-steenrod-square-normalization-instability-and-top-square", "thm-steenrod-squares-are-well-defined-and-natural"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Section 4.L, printed pages 497--499
    - title: Mosher and Tangora, Cohomology Operations and Applications in Homotopy Theory
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/moshtang.pdf
      locator: Chapter 3, definition and ring-homomorphism proof for the total square, printed page 25
---

## Definition

Write ordinary total mod-two cohomology as the graded direct sum

$$H^*(X;\mathbb F_2)=\bigoplus_{n\geq0}H^n(X;\mathbb F_2).$$

For a homogeneous class $x\in H^n(X;\mathbb F_2)$, its **total Steenrod
square** is

$$Sq(x):=\sum_{i=0}^{n}Sq^i(x).$$

For an arbitrary element $x=\sum_nx_n$ of the graded direct sum, define
$Sq(x)=\sum_nSq(x_n)$. Both sums are finite: the first by instability and
the second by the definition of direct sum. Thus this definition takes
values in the same ordinary direct sum; it does not use a completed product.
It is generally not degree-preserving.

## Facts & Assumptions

**Given:** A space $X$ and a finite-support element of
$H^*(X;\mathbb F_2)$.

[F1] Every square is additive and natural
([[thm-steenrod-squares-are-well-defined-and-natural]]).

[F2] Squares vanish above the degree of their input and $Sq^0$ is the
identity
([[prop-steenrod-square-normalization-instability-and-top-square]]).

[F3] Squares satisfy the internal Cartan formula, with only finitely many
nonzero terms
([[thm-cartan-formula-for-steenrod-squares]]).

## Verification

**Proof technique:** sum the finite Cartan identities.

1.1 The definition is well-defined, additive, and natural. [given, F1, F2]
For each homogeneous component, [F2] leaves only indices
$0\leq i\leq n$. An element of the direct sum has only finitely many
homogeneous components, so its total image again has finite degree support.
Termwise additivity and naturality follow from [F1]. No rearrangement of an
infinite family is involved.

2.1 The total square is multiplicative. [F3, step 1.1]
For homogeneous $x,y$, all sums below are finite, and [F3] gives

$$Sq(x\smile y)=\sum_kSq^k(x\smile y)=\sum_{i,j}Sq^i(x)\smile Sq^j(y)=Sq(x)\smile Sq(y).$$

Distributivity and the finite homogeneous support in step 1.1 extend this to
arbitrary total classes.

2.2 It preserves the unit. [F2, step 1.1]
The unit $1\in H^0(X;\mathbb F_2)$ satisfies $Sq^0(1)=1$, and every
$Sq^i(1)$ with $i>0$ vanishes by instability. Hence $Sq(1)=1$.

3.1 The total square sends zero to zero and is unique on the empty-space cohomology group. [F1, F2, F3, step 1.1, step 2.1, step 2.2]
For the empty space the total group is zero; for the zero class the defining
sum is zero. On a point only degree zero survives, and step 2.2 makes the
operation the identity, including on the elements zero and one. The endpoints
$i=0$ and $i=n$ are included, while every $i>n$ is zero before summing.
Degenerate singular simplices are inherited unchanged from the already
well-defined component operations. The construction makes only finite sums
and uses no choices, so it assumes no AC. It asserts neither a degreewise
endomorphism nor a biconditional. ∎
