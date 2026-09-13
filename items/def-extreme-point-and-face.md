---
id: def-extreme-point-and-face
kind: definition
title: Extreme point and face
status: draft
origin: pipeline
deps: ["def-locally-convex-topological-vector-space"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "§3.5, Definition 3.45, p. 148"
    - title: "Hanche-Olsen, Topological vector spaces"
      url: "https://hanche.folk.ntnu.no/notes/topvec/topvec-a4.pdf"
      locator: "p. 13, paragraph beginning ‘Let K be a convex set’"
---

## Definition

Let $K$ be a convex subset of a real or complex vector space, where convex
combinations always use real coefficients as in
[[def-locally-convex-topological-vector-space]].  A point $x\in K$ is an
**extreme point** of $K$ if

$$
x=(1-t)y+tz,\qquad y,z\in K,\quad 0<t<1,
$$

implies $y=z=x$.  The set of extreme points is denoted
$\operatorname{ext}K$.

A **face** of $K$ is a nonempty convex subset $F\subseteq K$ such that

$$
(1-t)y+tz\in F,\qquad y,z\in K,\quad 0<t<1,
$$

implies $y,z\in F$.  Thus $x$ is extreme exactly when the singleton $\{x\}$
is a face.  Neither definition requires a topology.  A face need not be
exposed by a continuous linear functional; “face” below always means the
intrinsic endpoint condition just stated.

For $K=\varnothing$ there are no extreme points and no faces.  If $K=\{x\}$,
then $x$ is extreme and $K$ is its unique face.  The strict restriction
$0<t<1$ is essential: at $t=0$ or $t=1$ the displayed equality contains no
information about the unused endpoint.
