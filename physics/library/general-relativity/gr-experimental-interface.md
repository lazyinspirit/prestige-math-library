---
requires:
  - gr-homogeneous-cosmology
  - gr-linearized-waves
  - gr-spherical-vacuum-model
  - further-trigonometric-identities-and-inverses
  - gr-framework-and-geometry
  - gr-connections-and-free-fall
  - gr-tensors-and-observers
page: gr-experimental-interface
title: "Experimental Interface"
status: draft
library: physics
items:
  - def-gr-observation-and-analysis-architecture
  - lem-gr-reciprocal-ratio-window
  - rem-gr-primary-report-research-queue
examples: []
---

This page fixes the vocabulary in which the framework's empirical layer is
stated and records the primary-report research queue of the source design. It
defines model configurations built from the framework's own objects, the
readouts assigned to them (frequency ratio and redshift, radar round-trip
proper time, deflection angle, azimuthal increment and perihelion advance,
arrival times, and the ideal-detector strain), operational models with a
declared interpretation obligation, hard-bound data records, calibration
declarations and declared uncertainty bounds, and it keeps comparison claims
separate from all of these. One elementary mathematical lemma supplies the
exact window analysis of the reciprocal ratio map used by the companion
examples, and a scope remark records the six report families whose primary
sources remain to be retrieved and read. No experiment item is authored here;
the primary-report and analysis layer (research label M20) is unsupplied, and
no measured value occurs anywhere on the page.

**The architecture.** [[def-gr-observation-and-analysis-architecture]] fixes
the objects. A model configuration is a finite tuple of framework entries —
the smooth time-oriented Lorentzian datum with its metric-selected connection,
$C^1$ future timelike worldlines parametrized by proper time, observers and
observer congruences, smooth curves $\eta:J\to M$ on intervals $J$ with
nonempty interior that are future-directed null geodesics of the connection:
they are affinely parametrized with $\nabla_{\eta'}\eta'=0$ and satisfy
$g(\eta',\eta')=0$ (under [[def-geodesic-of-an-affine-connection]] and
[[def-causal-classification-of-lorentz-vectors]]), smooth charts, ideal
two-body detector data and declared parameters. Its
readouts are determined by those entries: the frequency ratio
$E_R/E_E=g(W_R,U_R)/g(W_E,U_E)$ and the redshift $z=E_E/E_R-1$; the radar
proper-time increment between emission and reception; the deflection angle
$\arccos\kappa$ built from the rest-space directions of the ray at two events
under a declared isometric identification; the chart azimuthal increment and
the perihelion advance $\Delta\varphi-2\pi$; the receiver arrival-time tuple of
a finite family of rays; and the strain of the ideal two-body detector. An
operational model attaches to these readouts a parameter set, a prediction map
and the declared interpretation obligation $(*)$; a data record declares
closed boxes with no probability space, sampling law or coverage statement;
and a comparison claim requires its own rule, its own record and, for reported
data, the primary-report layer.

**The window analysis.** [[lem-gr-reciprocal-ratio-window]] proves the exact
facts used when a monotone prediction map of reciprocal form is confronted
with a bounded record: $a\mapsto a_*/a$ is a strictly decreasing bijection of
$(0,\infty)$ onto $(0,\infty)$ with inverse $u\mapsto a_*/u$, and the preimage
of a closed interval $[u_1,u_2]$, $0<u_1\le u_2$, is the closed interval
$[a_*/u_2,a_*/u_1]$ of exact length $a_*(u_2-u_1)/(u_1u_2)$, so that a
positive-width record leaves a positive-length window of parameters.

**The queue.** [[rem-gr-primary-report-research-queue]] records the six
families of published reports named by the source design — redshift and clock
comparisons, light-propagation delay, light deflection, perihelion advance,
binary-system timing and interferometric strain — together with the
model-side prediction content each comparison would consume and the
obligations that remain. The restricted redshift theorems
`pthm-gr-schwarzschild-stationary-redshift` and
`pthm-gr-flrw-cosmological-redshift` supply the redshift slot, and the ideal
detector definition `def-gr-linearized-wave-regime-and-detector-coupling`
with the response theorem `pthm-gr-plane-wave-tidal-detector-response`
supplies the strain slot; the delay, deflection, advance and arrival-time
slots have no in-framework prediction theorem yet. These are nonlogical status
pointers, not premises.

The companion examples page [[gr-experimental-interface-examples]] works the
vocabulary on the framework's own cosmological redshift prediction with
explicitly illustrative values, and exhibits two distinct parameters
consistent with one bounded record.
