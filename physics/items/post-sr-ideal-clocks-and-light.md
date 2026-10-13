---
id: post-sr-ideal-clocks-and-light
kind: postulate
title: "Adopted ideal-clock and ideal-vacuum-light interpretation"
status: published
origin: session
domain: physics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sr-affine-minkowski-model, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-sr-si-units-and-coordinate-conventions, def-ck-and-multi-index-notation-in-several-variables, lem-timelike-cone-has-two-convex-components, def-inertial-frame-and-inertial-chart, thm-continuous-implies-integrable, post-sr-inertial-covariance]
dependency_roles:
  def-sr-affine-minkowski-model: formulation-prerequisite
  def-causal-classification-of-lorentz-vectors: formulation-prerequisite
  def-time-orientation-and-future-causal-sets: formulation-prerequisite
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-ck-and-multi-index-notation-in-several-variables: formulation-prerequisite
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-inertial-frame-and-inertial-chart: formulation-prerequisite
  thm-continuous-implies-integrable: mathematical-premise
  post-sr-inertial-covariance: formulation-prerequisite
physical_scope: "Ideal clocks and ideal vacuum light rays in flat classical spacetime, in the geometric optics regime with ideal apparatus. Excludes dispersive media, gravitational effects, quantum effects, and any claim that real clocks or light rays are exactly ideal; experimental agreement would be evidence about the specified model, not a proof of these postulates."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 and 25-27, especially equation (1.97) and its clock interpretation (PDF pp. 9-14 and 32-34)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "B. Crowell, Special Relativity, rev. 2020-12-10, sections 1.3-1.4 pp. 23-31 and Ch. 2 pp. 43-51 (signature (+---) converted to (-+++))"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Postulate

Adopt as physical assumptions of the special-relativity framework the following
two statements, with the SI coordinate and unit conventions of
[[def-sr-si-units-and-coordinate-conventions]].

**(i) Ideal clocks.** Let $I\subseteq\mathbb R$ be a nondegenerate interval and
$\gamma:I\to A$ a curve. Choose an inertial chart $\chi$ with
$E(u)=\sum_au^ae_a$ as in [[def-inertial-frame-and-inertial-chart]]. Require
$y:=\chi\circ\gamma:I\to\mathbb R^4$ to be $C^1$ on the interior of $I$,
with its derivative extending continuously to any included endpoints, where
it is the one-sided derivative. Define the displacement-valued derivative by
$\dot\gamma(s):=E(y'(s))\in V$ and require $\dot\gamma(s)\in C^+$ everywhere,
including such endpoints. This derivative is chart-independent: a second
chart has coordinates $\widetilde y=M^{-1}(y-\chi(o'))$, so its
parameter derivative is $M^{-1}\mathrm dy/\mathrm ds$, while its basis map
is $E'=EM$; their product is $E\,\mathrm dy/\mathrm ds$.

An **ideal clock on this curve** has a reading map $\sigma:I\to\mathbb R$
in seconds, specified up to an additive constant, with, for all $a<b$ in $I$,

$$\sigma(b)-\sigma(a)=c^{-1}\int_a^b\sqrt{-\eta\bigl(\dot\gamma(s),\dot\gamma(s)\bigr)}\,\mathrm ds .$$

The integrand is positive and continuous on $[a,b]$: the coordinate derivatives
are continuous, $\eta$ is a finite bilinear expression, and the square root
is continuous at every positive argument, as follows from
$|\sqrt r-\sqrt q|=|r-q|/(\sqrt r+\sqrt q)$ for $r,q>0$.
Thus [[thm-continuous-implies-integrable]] applies to this compact interval
and gives a well-defined Riemann integral. The reading rule contains no
additional acceleration-dependent correction (**clock hypothesis**); it does
not require $C^2$ regularity or an acceleration to exist. This is an adopted
physical interpretation of the length integral, not a proof about real clocks.

**(ii) Ideal light.** In vacuum, the **ideal light rays** are the oriented
straight lines parametrized by $\ell:\mathbb R\to A$,
$\ell(\lambda)=p+\lambda v$, where $p\in A$ and $v\in V$ is future null;
increasing $\lambda$ specifies their future direction. In an inertial chart
$\chi$ their coordinate map is

$$\chi(\ell(\lambda))=\chi(p)+\lambda\,(v^0,v^1,v^2,v^3).$$

Since the chart's time-axis vector is future, the cone description of
[[lem-timelike-cone-has-two-convex-components]] gives
$v^0=\lvert v_{\mathrm{vec}}\rvert>0$. With $t=\chi^0/c$ the spatial
coordinate velocity is $c(v^1,v^2,v^3)/v^0$ and has Euclidean magnitude $c$
in every inertial chart. The conversion constant is the same across charts;
its exact SI numerical value is a unit convention as specified in
[[def-sr-si-units-and-coordinate-conventions]], while the ideal-vacuum-light
interpretation is an adopted, empirically testable model assumption.

## Scope, status and limitations

- **Adopted, not proved.** Both clauses are adopted assumptions of the
  framework, with the physical interpretation fixed by
  [[post-sr-inertial-covariance]]. They are not experimentally proved here, and
  they carry no claim that real clocks or real light are exactly ideal.
- **Ideal apparatus, complete vacuum, geometric ray regime.** The light clause
  concerns ideal light in complete vacuum in the geometric (nondispersive) ray
  regime. No dispersive or refractive medium is described, and the ray model
  carries no wave-optics, coherence or intensity structure.
- **No quantum photon model.** No photon is assumed, and in particular the
  frequency of the ideal light is not identified with an energy by a factor
  $\hbar$ anywhere in this framework's primitive layer.
- **Later development.** Parametrization invariance of the clock reading, the
  proper-time function along general worldlines, four-velocity and
  four-acceleration are developed on the later worldlines-and-clocks page from
  its own items; the present item states the reading rule and the ray
  interpretation for the model and does not derive that theory here.
- **Empirical status.** Agreement of an experiment with predictions of this
  model would be evidence about the specified model and its auxiliary
  assumptions; it would not be a proof of this postulate, and a finite dataset
  cannot establish its exact validity.
