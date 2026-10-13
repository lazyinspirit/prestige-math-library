---
id: rem-sr-twin-acceleration-and-synchronization-caveats
kind: remark
title: "Acceleration is not an aging term, and the twin comparison is not symmetric: scope caveats"
status: published
origin: pipeline
domain: physics
physical_scope: "Interpretation and delimitation of the proper-time comparison in the flat classical special-relativity model: the absence of an acceleration term in the ideal clock hypothesis, the geometric asymmetry of the two histories, and the simultaneity bookkeeping of the traveler's two momentary inertial rest frames. Conditional on the named postulates; excludes real-clock error models, apparatus, gravity and quantum effects, and asserts no measured outcome."
deps: [texp-sr-piecewise-inertial-twin-reunion, pthm-sr-same-endpoint-clock-comparison, thm-sr-endpoint-proper-time-bound-and-flat-maximum, def-sr-piecewise-proper-time, lem-sr-boost-time-length-and-velocity-formulas, def-sr-simultaneity-slice-and-rest-distance, lem-inertial-chart-transitions-are-affine-lorentz, def-sr-four-velocity-and-four-acceleration, post-sr-ideal-clocks-and-light, post-sr-free-trajectories-and-clock-hypothesis, def-sr-si-units-and-coordinate-conventions]
dependency_roles:
  texp-sr-piecewise-inertial-twin-reunion: physical-result
  pthm-sr-same-endpoint-clock-comparison: physical-result
  thm-sr-endpoint-proper-time-bound-and-flat-maximum: mathematical-premise
  def-sr-piecewise-proper-time: mathematical-premise
  lem-sr-boost-time-length-and-velocity-formulas: mathematical-premise
  def-sr-simultaneity-slice-and-rest-distance: mathematical-premise
  lem-inertial-chart-transitions-are-affine-lorentz: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  post-sr-ideal-clocks-and-light: physical-assumption
  post-sr-free-trajectories-and-clock-hypothesis: physical-assumption
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook): section 1.3.3 'The gamma factor' pp. 25-26 ('Time dilation is symmetrical ... the asymmetry comes about because a and c are parallel, but b and d are not', and the reunion discussion); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3 pp. 71-72 (timelike geodesics maximize proper time; the twin remark; the 'locally' caveat)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022), section 2.3 'Curves of extremal proper time' pp. 28-30 (Minkowski example: straight lines are extremal and maximize); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
dependency_level: 14
aliases: []
---

## Scope caveats for the twin reunion

This remark delimits the interpretation of the proper-time comparison of the
twin reunion ([[texp-sr-piecewise-inertial-twin-reunion]]) in the adopted model, with the ideal clock assumptions of [[post-sr-ideal-clocks-and-light]] and
[[post-sr-free-trajectories-and-clock-hypothesis]] and the SI conventions of
[[def-sr-si-units-and-coordinate-conventions]]. It proves nothing new; it
records what the earlier items do and do not assert.

## Acceleration is not an additional aging term

In the model the reading of an ideal clock between two events of its history is
the proper-time integral of its worldline, by clause (i) of
[[post-sr-ideal-clocks-and-light]] for $C^1$ histories and by clause (ii) of
[[post-sr-free-trajectories-and-clock-hypothesis]] for the weak piecewise $C^1$
class ([[def-sr-piecewise-proper-time]]); no term depending on the
four-acceleration ([[def-sr-four-velocity-and-four-acceleration]]) or on any
higher derivative of the history appears, and the clock hypothesis is precisely
the exclusion of such terms. The corner of the piecewise inertial history is an
idealization: a physical turnaround occupies a finite parameter interval, the
worldline is then $C^1$ or smooth there, and its proper time is still the
integral. The endpoint bound and strictness clause of
[[thm-sr-endpoint-proper-time-bound-and-flat-maximum]] apply to every weak
piecewise future timelike history with the same endpoints $p,q$. Thus any
smoothing of the corner that remains in that class, preserves $p,q$, and
retains at least one event outside the straight segment still gives a strictly
smaller reading than the stay-at-home clock. No existence or convergence
claim for a smoothing family, or equality with the sharp-turn value
$2T/\gamma$, is asserted.

## The comparison is not symmetric in the model

One history of the reunion is the straight segment from $p$ to $q$; the other
contains the corner event $r$ of [[texp-sr-piecewise-inertial-twin-reunion]], and
the three events $p,r,q$ are not collinear: in the chart of that item their
coordinate columns are $(0,0,0,0)$, $(cT,vT,0,0)$ and $(2cT,0,0,0)$ with
$vT\ne0$. Every change of inertial chart is an affine bijection
([[lem-inertial-chart-transitions-are-affine-lorentz]]) and maps collinear
triples to collinear triples, so no change of inertial frame maps the image of
the stay-at-home history onto the image of the traveler's history, nor fixes both
endpoints and exchanges the two histories. The two twins are therefore not
related by an inertial change of description, and the difference of readings is
a model consequence of the different histories, not a consequence of who is
'really moving': the symmetric time-dilation relation of
[[lem-sr-boost-time-length-and-velocity-formulas]] (i) concerns the two frames,
while the reunion comparison concerns the two clock readings at the single
common event $q$.

## Synchronization bookkeeping at the turn

In each momentary inertial rest frame of the traveler the stay-at-home clock runs
slow by the factor $1/\gamma$, and the traveler may legitimately apply the
time-dilation relation using successive pairs of simultaneous events, one
on each clock history in that momentary frame ([[lem-sr-boost-time-length-and-velocity-formulas]] (i),
[[def-sr-simultaneity-slice-and-rest-distance]]). But the two legs use different
inertial frames. With $\gamma=(1-v^2/c^2)^{-1/2}$ and the turn event $r$ of
[[texp-sr-piecewise-inertial-twin-reunion]], choose both rest-frame charts with origin $p$ as in
[[texp-sr-piecewise-inertial-twin-reunion]]; the outbound chart
$x'$ then satisfies $x'^0=\gamma\bigl(x^0-\frac vc x^1\bigr)$, so its slice through
$r$ has $x'^0=\gamma cT(1-v^2/c^2)=cT/\gamma$ and meets the stay-at-home
worldline $x^1=0$ at $x^0=\frac{1}{\gamma}\cdot\frac{cT}{\gamma}=cT(1-v^2/c^2)$,
that is at coordinate time $t=T(1-v^2/c^2)=T/\gamma^2$; the inbound rest frame's
chart $x''$ satisfies $x''^0=\gamma\bigl(x^0+\frac vc x^1\bigr)$, and its slice
through $r$ meets the same worldline at $x^0=cT(1+v^2/c^2)$, that is at
coordinate time $t=T(1+v^2/c^2)$. The two slices differ by
$2Tv^2/c^2$ in coordinate time, and the identity
$$2T=\frac{T}{\gamma^2}+\frac{2Tv^2}{c^2}+\frac{T}{\gamma^2},$$
which only uses $1/\gamma^2=1-v^2/c^2$, inserts this gap into the traveler's two
leg-by-leg accounts and reproduces the stay-at-home reading $2T$ at the reunion,
in agreement with the conditional comparison result
[[pthm-sr-same-endpoint-clock-comparison]]. The naive reciprocity statement
'each twin judges the other's clock to run slow' therefore compares different
pairs of events for the two travelers — events simultaneous in different
momentary frames — and does not apply to the reunion comparison, which concerns
the two clock readings at the single common event $q$.

## Empirical qualification

Everything above is a conditional statement about ideal clocks in the adopted
model: the clocks are ideal with no acceleration-dependent reading term, the
histories are prescribed, spacetime is flat and $c$ is fixed
([[post-sr-free-trajectories-and-clock-hypothesis]],
[[post-sr-ideal-clocks-and-light]]). No measurement, apparatus, calibration,
sampling or uncertainty model is involved, and no claim is made about real
clocks or about nature; real clock comparisons would additionally require
apparatus and uncertainty analysis and are outside this remark.
