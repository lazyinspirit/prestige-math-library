---
id: ex-preperiodic-points-zero-canonical-height
kind: example
title: Preperiodic points have zero canonical height
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-preperiodic-point-of-a-self-map
  - thm-dynamical-canonical-height-zero-iff-preperiodic
  - thm-northcott-finiteness-of-preperiodic-points
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Joseph H. Silverman, Lecture Notes on Arithmetic Dynamics, Arizona Winter School 2010, §§5.1–5.2, Theorems 15 and 17, printed pp. 12–15"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical heights on varieties with morphisms, Corollary 1.1.1, printed p. 168"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
---

## Example

Assume the Axiom of Choice. On the projective line over $\mathbb Q$, let $\phi([X:Y])=[X^2-Y^2:Y^2]$. Then $[0:1]$ and $[-1:1]$ form a two-cycle, each has canonical height zero, and the set of $\mathbb Q$-rational points preperiodic for $\phi$ is finite.

## Example references

[[def-preperiodic-point-of-a-self-map|Preperiodic means finite forward orbit]]

[[thm-dynamical-canonical-height-zero-iff-preperiodic|Zero-height characterization]]

[[thm-northcott-finiteness-of-preperiodic-points|Northcott finiteness of preperiodic points]]

[Silverman, §§5.1–5.2, Theorems 15 and 17, printed pp. 12–15](https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf)

[Call and Silverman, Corollary 1.1.1, printed p. 168](https://www.numdam.org/item/CM_1993__89_2_163_0.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice; the map $\phi([X:Y])=[X^2-Y^2:Y^2]$; and the points $[0:1]$ and $[-1:1]$.

[A1] Choice is assumed in the absolute number-field height inputs. [[def-axiom-of-choice]]

[F1] A point is preperiodic exactly when its forward orbit is finite. [[def-preperiodic-point-of-a-self-map]]

[F2] Canonical height vanishes exactly at preperiodic points for a degree-at-least-two map over a number field. [[thm-dynamical-canonical-height-zero-iff-preperiodic]]

[F3] The set of rational preperiodic points of a degree-at-least-two map over a fixed number field is finite. [[thm-northcott-finiteness-of-preperiodic-points]]

## Verification

1.1 The homogeneous coordinate pair has no common zero on the projective line. Direct evaluation gives $\phi([0:1])=[-1:1]$ and $\phi([-1:1])=[0:1]$. Thus both points have finite forward orbit and are preperiodic by [F1]. [given, A1, F1, algebra]

2.1 Applying [F2] to the two preperiodic points gives canonical height zero for each. Applying [F3] to $K=\mathbb Q$ shows that the full set of rational preperiodic points is finite. [given, A1, F2, F3, step 1.1] ∎
