---
id: cex-cellwise-vanishing-obstructions-with-incompatible-choices-need-not-give-a-global-extension
kind: counterexample
title: Incompatible choices do not define one global obstruction problem
status: published
origin: pipeline
deps: ["lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere", "prop-degree-laws-for-circle-loops", "cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero", "prop-standard-circle-loops-have-their-integer-degrees", "def-primary-cellular-obstruction-cochain"]
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
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Sections 7.1--7.4, one-cell extension and cellular obstruction cochains, printed pages 165--174
---

## Claim

There are a finite CW pair $(X,A)$, a fixed map $A\to S^1$, and two $2$-cells such that each cell separately can be filled after a suitable choice of the map on one common $1$-cell, but no single choice fills both. This does not contradict cellular obstruction theory: for one fixed map on the entire $1$-skeleton, zero obstruction on every cell does glue to a global extension.

## Facts & Assumptions

[F1] Degrees of based circle loops add under concatenation and satisfy $\deg(\gamma^m)=m\deg(\gamma)$ ([[prop-degree-laws-for-circle-loops]]).

[F2] A based circle loop is nullhomotopic exactly when its degree is zero ([[cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero]]), and standard loops realize every integer degree ([[prop-standard-circle-loops-have-their-integer-degrees]]).

[F3] A map over one attached $2$-cell extends exactly when the image of its attaching loop is nullhomotopic ([[lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere]]).

## Verification

**Given:** Let $X^1=S^1_a\vee S^1_b$, let $A=S^1_b$, and attach two $2$-cells along the based words $ab$ and $ab^2$. Fix on $A$ a based map $f_b:S^1_b\to S^1$ of degree $1$.

1.1 A based map $f_a:S^1_a\to S^1$ has an integer degree $k$, and every $k$ occurs by [F2]. Under the combined map on $X^1$, [F1] gives [F1, F2]

$$ \deg f(ab)=k+1,\qquad \deg f(ab^2)=k+2. $$

[F1, F2]

2.1 For the first $2$-cell alone choose $k=-1$; its image attaching loop has degree zero and extends by [F2, F3]. For the second alone choose $k=-2$ and obtain the same conclusion. A simultaneous extension for one map on $X^1$ would force both $k+1=0$ and $k+2=0$, which is impossible. The two separately vanishing values therefore came from different choices of $f_a$, not from one obstruction cochain. [F2, F3, step 1.1]

3.1 For contrast, fix one map $h:X^1\to Y$ and suppose its attaching loop on every $2$-cell is nullhomotopic. By [F3], choose a disk filling for each cell and use the CW pushout to glue the fillings to $h$. This gives a map on all of $X^2$. Only two choices occur in the displayed example; an arbitrary cell family would require the separately declared choice principle. Thus the original fixed-map counterexample is false, and the example establishes only the corrected quantifier claim. $\square$ [F3, step 2.1]
