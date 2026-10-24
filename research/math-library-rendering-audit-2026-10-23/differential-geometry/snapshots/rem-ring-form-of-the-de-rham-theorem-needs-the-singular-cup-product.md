---
id: "rem-ring-form-of-the-de-rham-theorem-needs-the-singular-cup-product"
kind: "remark"
title: "The ring form of de Rham’s theorem needs the singular cup product"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: direct
deps: ["thm-de-rham-theorem","lem-de-rham-integration-respects-wedge-and-cup-in-cohomology"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Joel W. Robbin, The de Rham Theorem
      url: https://people.math.wisc.edu/~jwrobbin/751dir/deRham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Remark

The vector-space comparison alone does not establish the ring form of the de Rham theorem. The ring result uses the exact front/back cup convention and the explicit wedge–cup comparison homotopy. No compactness hypothesis on the manifold is needed for that result. Multiplicativity itself is choice-free; countable choice enters the proved global bijectivity.

## Facts & Assumptions

[F1] [[thm-de-rham-theorem]] proves the unital graded-algebra isomorphism under countable choice for manifolds possibly with boundary, without compactness.

[F2] [[lem-de-rham-integration-respects-wedge-and-cup-in-cohomology]] constructs $K$ with $I(\alpha\wedge\beta)-I\alpha\smile I\beta=\delta K(\alpha,\beta)$ for closed forms, using the front/back cup formula and no choice.

## Verification

**Given:** The two comparison results [F1] and [F2], with their stated conventions.

1.1 A linear bijection does not by itself preserve multiplication: $T:\mathbb R\to\mathbb R$, $T(x)=2x$, is linear with inverse $x\mapsto x/2$, but $T(1\cdot1)=2$ while $T(1)T(1)=4$. It also fails to preserve the unit. This calculation identifies the logical information missing from bare vector-space bijectivity, without claiming that the actual integration map has this defect. [given, algebra]

2.1 For the actual comparison, [F2] supplies the missing product equation by a specific coboundary. Its front/back cut has no extra cochain sign; the signed shuffle integral and simplex Stokes produce that equation. In [F1] restriction preserves this same cup formula, so injectivity of restriction transports the equation to continuous singular cohomology. The vertex integral separately supplies the unit. Thus the product and unit information used in the ring assertion is explicit. [F1, F2, step 1.1]

3.1 The hypotheses of [F1] include neither compactness nor connectedness. Its empty-manifold case is the zero unital algebra; the point and degree-zero unit are covered by vertex evaluation. [F2] includes degree-zero and degree-one endpoints, boundary targets and degenerate simplices, and needs no choice. The countable-choice assumption of [F1] is confined to the global comparison isomorphisms; the distinction in step 1.1 does not supply or remove that assumption. [F1, F2, step 2.1] ∎
