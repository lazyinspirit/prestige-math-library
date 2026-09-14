---
id: ex-rank-map-on-a-disconnected-compact-space
kind: example
title: The rank map on a disconnected compact space
status: published
origin: pipeline
deps: [def-grothendieck-ring-structure-and-rank-map, def-whitney-sum-monoid-of-complex-vector-bundles]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §1"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Rank and Grothendieck-group conventions, printed pp.203–204"
    - title: "Hatcher, Vector Bundles & K-Theory, beginning of §2.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Bundle monoid and dimension map, printed pp.39–40"
---

## Example

Let $X$ be compact Hausdorff and let $X=X_1\amalg X_2$, where $X_1$ and
$X_2$ are nonempty clopen subspaces. The bundle that is $\varepsilon^1$ on
$X_1$ and $\varepsilon^2$ on
$X_2$ has rank class

$$(1_{X_1},2_{X_2})\in H^0(X_1;\mathbb Z)\times H^0(X_2;\mathbb Z)\cong H^0(X;\mathbb Z).$$

Thus the rank map on a disconnected compact space is genuinely a locally
constant function and cannot in general be replaced by one integer.

## Facts & Assumptions

**Given:** the stated compact Hausdorff space and clopen decomposition with
both pieces nonempty.

[F1] The rank homomorphism sends a bundle to its integer-valued fiber-dimension
function, viewed in $H^0$, and respects virtual differences
([[def-grothendieck-ring-structure-and-rank-map]]).

[F2] Bundles of locally constant finite rank, including rank zero, are admitted
componentwise in the Whitney-sum monoid
([[def-whitney-sum-monoid-of-complex-vector-bundles]]).

## Verification

**Proof technique:** direct construction and calculation.

1.1 Form $E=(X_1\times\mathbb C)\amalg(X_2\times\mathbb C^2)$ with projection to $X$. Since $X_1$ and $X_2$ are disjoint open subsets, these product charts make $E$ a complex vector bundle whose fiber dimension is $1$ on $X_1$ and $2$ on $X_2$. [F2, construct]

2.1 Degree-zero cohomology of a disjoint union is the product of the degree-zero groups, and the fiber-dimension function in step 1.1 corresponds to $(1_{X_1},2_{X_2})$. Therefore [F1] gives the displayed rank class. [F1, step 1.1]

3.1 If this class came from one integer $m$, its restrictions to both nonempty pieces would be the same constant $m$. Step 2.1 would force simultaneously $m=1$ and $m=2$, a contradiction. Hence a single global integer cannot encode rank in general. [step 2.1, algebra] ∎
