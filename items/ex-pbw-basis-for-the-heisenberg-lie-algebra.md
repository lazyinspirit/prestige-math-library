---
id: ex-pbw-basis-for-the-heisenberg-lie-algebra
kind: example
title: PBW basis for the Heisenberg Lie algebra
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-poincare-birkhoff-witt]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, PBW examples in §13.1, printed pp. 74–75"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §5.2, printed pp. 72–75"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Example

Let $\mathfrak h$ have basis $x,y,z$ with $[x,y]=z$ and $z$ central. For the
order $x<y<z$, the elements

$$x^ay^bz^c\qquad(a,b,c\geq0)$$

form a basis of $U(\mathfrak h)$.

## Facts & Assumptions

**Given:** The Heisenberg Lie algebra with the displayed supplied ordered
basis.

[L1] PBW gives a basis of weakly increasing monomials for any supplied ordered
basis ([[thm-poincare-birkhoff-witt]]).

## Verification

**Proof technique:** direct PBW specialization.

1.1 A weakly increasing word in the order $x<y<z$ consists uniquely of $a$ copies of $x$, then $b$ copies of $y$, then $c$ copies of $z$, and is therefore $x^ay^bz^c$. [given, algebra]

1.2 The enveloping relation is $yx=xy-z$, while centrality gives $zx=xz$ and $zy=yz$. These formulas concretely move every inversion toward the ordered form. [given, algebra]

2.1 By [L1], the ordered forms identified in step 1.1 are linearly independent as well as spanning, so they are a basis; step 1.2 is the corresponding reordering rule. [step 1.1, step 1.2, L1] ∎
