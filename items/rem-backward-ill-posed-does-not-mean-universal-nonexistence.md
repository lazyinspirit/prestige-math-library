---
id: rem-backward-ill-posed-does-not-mean-universal-nonexistence
kind: remark
title: Backward ill-posedness does not mean universal nonexistence
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - lem-backward-uniqueness-for-the-heat-equation-on-a-bounded-interval
  - thm-backward-heat-solution-map-is-unbounded
  - lem-ltwo-normalisation-of-sine-modes-on-the-interval
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §5.1.3, printed pp. 131–132 (irreversibility and loss of continuous dependence, with the remark that backward uniqueness can still hold)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§3.2, Remark 3.2.3(c), printed pp. 111–112 (negative-time IVP is ill-posed)"
---

## Remark

**Orientation only.** Assume Countable Choice and fix $T>0$.
[[thm-backward-heat-solution-map-is-unbounded]] shows that the terminal-to-initial
map on the terminal profiles of $C^{4,2}$ interval Dirichlet heat solutions is
unbounded with respect to the $L^2(0,\pi)$ norms; this is a statement
about continuity and stability, not about existence. The terminal data
$\sin(k\cdot)$, for integers $k\ge1$, do have backward solutions (the modes $u_k$ of
[[thm-backward-heat-solution-map-is-unbounded]]), and so does every finite sine
sum, by finite linear combination of these solutions. More generally, whenever
a forward interval Dirichlet heat solution $u$ exists on $[0,T]$ with initial
profile $f$, its terminal profile $g=u(\cdot,T)$ admits a backward extension
on that interval: the same $u$, with initial profile $f$. This range description
asserts no existence for arbitrary initial or terminal data. The failure is therefore
that arbitrarily small terminal perturbations can correspond to order-one
initial states ([[thm-backward-heat-solution-map-is-unbounded]]), and on general
domains the backward solution operator need not be surjective onto any given
data class. No claim of universal nonexistence and no well-posedness claim is
made here.

The well-definedness half of the picture is also worth recording: on the $C^{4,2}$
class with zero lateral data the terminal data determine the solution, by
[[lem-backward-uniqueness-for-the-heat-equation-on-a-bounded-interval]], so
ill-posedness here is exactly the failure of a uniform norm bound, with the
amplification ratio $e^{k^2T}$ of the $k$-th sine mode
([[lem-ltwo-normalisation-of-sine-modes-on-the-interval]]) measuring that
failure; no further existence or regularity claim is made.
