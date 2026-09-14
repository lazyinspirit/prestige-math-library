---
id: ex-k-theory-of-a-point-and-the-empty-space
kind: example
title: K-theory of a point and the empty space
status: draft
origin: pipeline
deps: [def-complex-topological-k-zero-by-grothendieck-completion, def-reduced-complex-k-theory, thm-complex-bott-periodicity, cor-complex-k-theory-of-spheres, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §§2.1–2.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Point, reduced, and periodic coefficient groups, printed pp.39–40 and 54–58"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §§1–2"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "KU coefficient groups, printed pp.203–208"
---

## Example

Choice-free,

$$K^0(*)\cong\mathbb Z,\qquad K^0(\varnothing)=0,\qquad\widetilde K^0(*)=0.$$

Assuming AC for the periodic assertion,
$K^{2k}(*)\cong\mathbb Z$ and $K^{2k+1}(*)=0$ for every integer $k$.

## Facts & Assumptions

**Given:** the point, the empty space, and AC only for the graded conclusion.

[F1] $K^0$ is the Grothendieck completion of the Whitney-sum monoid
([[def-complex-topological-k-zero-by-grothendieck-completion]]).

[F2] Reduced $K^0$ is the kernel of restriction to the basepoint
([[def-reduced-complex-k-theory]]).

[F3] Under AC, Bott multiplication extends the coefficient grading with
period two ([[thm-complex-bott-periodicity]]).

[F4] Under AC, $\widetilde K^0(S^1)=0$
([[cor-complex-k-theory-of-spheres]]).

[A1] AC is used only in step 3.1 through [F3] and [F4].

## Verification

**Proof technique:** direct.

1.1 A complex bundle over a point is a finite-dimensional complex vector space, classified by its dimension. Whitney sum adds dimensions, so [F1] completes $\mathbb N$ to $\mathbb Z$, with the trivial line representing $1$. [F1, algebra]

2.1 Over $\varnothing$, every bundle has empty total space and all are isomorphic, so the bundle monoid has one element and [F1] gives the zero group. For the point, the restriction map in [F2] is the identity of $K^0(*)$, so its kernel is zero. These calculations make no choices. [F1, F2, step 1.1]

3.1 By [F3], the degree-zero group in step 1.1 repeats in every even degree. By [F4], $K^{-1}(*)=\widetilde K^0(S^1)=0$, and [F3] repeats this zero group in every odd degree. Thus the stated graded groups follow under AC. [F3, F4, A1, step 1.1, step 2.1] ∎
