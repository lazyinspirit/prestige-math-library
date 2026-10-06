---
id: rem-finite-group-noether-theorem-does-not-supply-the-reductive-finiteness-theorem
kind: remark
title: The finite-group Noether theorem does not supply invariant finite generation for positive-dimensional groups
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-noether-finiteness-theorem-for-invariants, def-reductive-and-linearly-reductive-over-c, lem-invariant-polynomials-of-the-hyperbolic-gm-action-on-the-plane]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
---

## Remark

Noether's finiteness theorem for invariants of a finite group
([[thm-noether-finiteness-theorem-for-invariants]]) requires the acting group
to be finite. It therefore does not supply the finite generation of invariant
rings of positive-dimensional groups: applied to the action of
$\mathbf G_m=\mathbb C^\times$ on $\mathbb C^2$ of
[[lem-invariant-polynomials-of-the-hyperbolic-gm-action-on-the-plane]] the
hypothesis fails, since $\mathbf G_m$ is not finite
([[def-reductive-and-linearly-reductive-over-c]]), even though the invariant
ring there is $\mathbb C[xy]$; and no argument on this page reduces a reductive
group action to a finite-group action. The finite-group theorem is thus not a
substitute for the Reynolds-operator proof of finite generation for complex
reductive groups given by the bridge theorem of this page.

The remark is a hypothesis comparison, not a proof step: it records the design
caveat that the finite-group Noether bound is not invoked anywhere in the
finite-generation argument for reductive $G$, where the Reynolds operator and
the graded ideal argument do all the work. No reduction of a $\mathbf G_m$- or
reductive action to a finite-group action is asserted or used.
