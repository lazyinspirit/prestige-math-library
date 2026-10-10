---
id: ex-sr-observer-split-worked
kind: example
title: "Worked example: splitting a four-velocity in an observer's rest frame"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 12
deps:
  - thm-sr-proper-time-and-observer-decomposition
  - def-sr-four-velocity-and-four-acceleration
  - def-inertial-frame-and-inertial-chart
  - def-spatial-euclidean-structure-of-an-inertial-frame
  - def-lorentz-form-and-inertia
dependency_roles:
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Worked computation. In an inertial chart with $\eta_0 =
\operatorname{diag}(-1,1,1,1)$ let the observer be $n = e_0 = (1,0,0,0)$ and
let $u = (5/4,3/4,0,0)$, a future unit timelike vector:
$\eta(u,u) = -25/16+9/16 = -1$. Then $\gamma = -\eta(n,u) = 5/4 \ge 1$,
$h(u) = u+\eta(n,u)n = u-(5/4)(1,0,0,0) = (0,3/4,0,0)$ lies in
$n^{\perp} = \operatorname{span}(e_1,e_2,e_3)$, and the relative velocity is
$w = c\,h(u)/\gamma = (0,3c/5,0,0)$. One checks
$u = \gamma(n+w/c) = (5/4)(1,3/5,0,0)$ and
$|w|^{2} = 9c^{2}/25 = c^{2}(1-\gamma^{-2}) = c^{2}(1-16/25)$. Also
$h(h(u)) = h(u)$ and $\eta(n,h(u)) = 0$. This four-velocity is the one of the
clock with coordinate velocity $(3c/5,0,0)$ in
[[ex-sr-proper-time-of-a-straight-worldline]].

## Facts & Assumptions

**Given:** An inertial chart with $\eta_0 = \operatorname{diag}(-1,1,1,1)$, the observer $n = e_0 = (1,0,0,0)$ and the vector $u = (5/4,3/4,0,0)$.

[L1] Decomposition ([[thm-sr-proper-time-and-observer-decomposition]]): for future unit timelike $n,u$ the projection is $h(v) = v+\eta(n,v)n$ with image $n^{\perp}$ and $h \circ h = h$ and $\eta(n,h(v)) = 0$; $\gamma = -\eta(n,u) \ge 1$, $w = c\,h(u)/\gamma \in n^{\perp}$, $u = \gamma(n+w/c)$, $|w|^{2} = c^{2}(1-\gamma^{-2}) < c^{2}$, and $\gamma = 1 \iff u = n$.

[L2] Chart ([[def-inertial-frame-and-inertial-chart]], [[def-spatial-euclidean-structure-of-an-inertial-frame]]): the chart's observer is $e_0$, and $n^{\perp} = \operatorname{span}(e_1,e_2,e_3)$ is the Euclidean spatial space of the frame with $|w| = \sqrt{\delta(w,w)}$.

[L3] Bilinearity ([[def-lorentz-form-and-inertia]]): in the chart, $\eta(v,z) = -v^{0}z^{0}+v^{1}z^{1}+v^{2}z^{2}+v^{3}z^{3}$.

[L4] Observer clause ([[def-sr-four-velocity-and-four-acceleration]]): the four-velocity of the observer's own worldline with future unit timelike $n$ is $cn$.

## Verification

**Proof technique:** direct.

1.1 By [L3], $\eta(u,u) = -25/16+9/16 = -1$ and $\eta(n,n) = -1$, so both $n$ and $u$ are unit timelike; both are future because their first coordinates are positive and $u^{0} = 5/4 > |u_{\mathrm{sp}}| = 3/4$, $n^{0} = 1 > 0$; hence [L1] applies. [given, L1, L3]

2.1 Direct computation in the chart: $\gamma = -\eta(n,u) = 5/4$, and $h(u) = u+\eta(n,u)n = u-(5/4)(1,0,0,0) = (0,3/4,0,0)$. [step 1.1, L1, L3]

3.1 The vector $h(u) = (0,3/4,0,0)$ lies in $\operatorname{span}(e_1,e_2,e_3) = n^{\perp}$ by [L2], and $\eta(n,h(u)) = -1\cdot 0+0 = 0$ by [L3]; idempotence $h(h(u)) = h(u)$ holds because $h(u) \in n^{\perp}$ is fixed by $h$ by [L1]. [step 2.1, L1, L2, L3]

4.1 The relative velocity is $w = c\,h(u)/\gamma = (0,3c/5,0,0)$ with $|w|^{2} = 9c^{2}/25$ by [L2]; the split identity gives $u = \gamma(n+w/c) = (5/4)(1,3/5,0,0) = (5/4,3/4,0,0)$ and the Lorentz-factor identity $|w|^{2} = c^{2}(1-\gamma^{-2}) = c^{2}(1-16/25) = 9c^{2}/25$, both by [L1]. [step 2.1, step 3.1, L1, L2]

5.1 By [L4] the observer's four-velocity is $c\,n = (c,0,0,0)$; since $\gamma = 5/4 \ne 1$, the criterion of [L1] gives $u \ne n$, so the clock's four-velocity $cu$ differs from the observer's and the split is nondegenerate. [step 4.1, L1, L4] ∎

## Remarks

- **The split is algebraic, not dynamic.** The computation uses only the projection $h$, the inner product and the definitions of $\gamma$ and $w$; no differentiation, no dynamics and no physical measurement is involved.

- **Companion clock.** The dimensionless four-velocity $u = (5/4,3/4,0,0)$ is
  the one of the straight clock with coordinate velocity $(3c/5,0,0)$ worked out
  in [[ex-sr-proper-time-of-a-straight-worldline]]; the split above re-derives
  that clock's relative velocity without using its worldline.
