---
id: "def-module-finite-affine-classical-map"
kind: "definition"
title: "Module-finite affine maps for the quasi-finite comparison"
deps: ["thm-classical-affine-morphisms-coordinate-ring-antiequivalence", "def-classical-affine-coordinate-ring", "def-finite-type-and-module-finite-algebras", "def-axiom-of-choice"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  precheck: n/a
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (def-module-finite-affine-classical-map). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Milne §8c Definition 8.17, affine case, p.181"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
---

## Definition

For affine classical algebraic sets $X,Y$, a morphism $f:X\to Y$ induces a unital $k$-algebra homomorphism $f^*:k[Y]\to k[X]$ by pullback ([[thm-classical-affine-morphisms-coordinate-ring-antiequivalence]], [[def-classical-affine-coordinate-ring]]). Call $f$ **module-finite** when $k[X]$ is finitely generated as a $k[Y]$-module for the action $a\cdot b=f^*(a)b$ ([[def-finite-type-and-module-finite-algebras]]). This is the affine module criterion. Empty affine sets are allowed, with zero coordinate ring; the definition does not assert a global affine-preimage criterion for arbitrary varieties.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice inherited from the pullback dictionary ([[def-axiom-of-choice]]). Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.
