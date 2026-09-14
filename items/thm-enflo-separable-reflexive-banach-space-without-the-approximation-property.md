---
id: thm-enflo-separable-reflexive-banach-space-without-the-approximation-property
kind: theorem
title: "A separable reflexive Banach space without the approximation property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-enflo-quantitative-trace-obstruction-to-the-approximation-property, lem-enflo-symmetry-averaging-and-block-assembly, thm-reflexive-approximation-property-implies-metric-approximation-property, thm-coordinate-functionals-of-a-schauder-basis-are-bounded, thm-schauder-basis-implies-bounded-approximation-property]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Per Enflo, A counterexample to the approximation problem in Banach spaces"
      url: "https://projecteuclid.org/journals/acta-mathematica/volume-130/issue-none/A-counterexample-to-the-approximation-problem-in-Banach-spaces/10.1007/BF02392270.pdf"
      locator: "Theorem 1 and introduction, pp.309-310; the AP conclusion explicitly invokes Grothendieck, reference [1], p.181 Corollary 2"
pipeline_run: phase-2-next-18
---

## Statement

Assume AC. There exists a separable reflexive real Banach space $B$ without
the approximation property. Consequently $B$ has no Schauder basis.

## Facts & Assumptions

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[L1] The Walsh-block assembly produces a separable reflexive space $B$ whose
finite-rank operators satisfy Enflo's logarithmic lower bound
([[lem-enflo-symmetry-averaging-and-block-assembly]]).

[L2] That lower bound excludes every finite BAP constant
([[lem-enflo-quantitative-trace-obstruction-to-the-approximation-property]]).

[L3] Under AC, a reflexive space with AP has MAP
([[thm-reflexive-approximation-property-implies-metric-approximation-property]]).

[L4] Under DC, every Schauder basis has a finite basis constant, and a space
with such a basis has BAP
([[thm-coordinate-functionals-of-a-schauder-basis-are-bounded]],
[[thm-schauder-basis-implies-bounded-approximation-property]]).

## Proof

**Proof technique:** contradiction through Grothendieck's tensor criterion.

**Given:** AC.

1.1 Take the separable reflexive space $B$ supplied by [L1]. [A1, L1]

1.2 The logarithmic lower bound and [L2] show that $B$ has no BAP. [L1, L2]

2.1 Rule out AP using the reflexive MAP theorem. [L3, step 1.2]
If $B$ had AP, its reflexivity and [L3] would give MAP, hence BAP,
contradicting step 1.2. Therefore $B$ has no AP.

2.2 Rule out a Schauder basis and close the boundary cases. [A1, L1, L4, step 1.2]
If $B$ had a Schauder basis, AC would supply DC and [L4] would give BAP,
again contradicting step 1.2. Thus $B$ has no Schauder basis. The zero-space
case is irrelevant because the constructed space has a nonempty independent
generator; real scalars are part of [L1]. ∎
