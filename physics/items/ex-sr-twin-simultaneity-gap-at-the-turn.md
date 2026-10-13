---
id: ex-sr-twin-simultaneity-gap-at-the-turn
kind: example
title: "Worked simultaneity gap of the traveler's two momentary rest frames at the turn"
status: published
origin: pipeline
domain: mathematics
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [lem-sr-boost-time-length-and-velocity-formulas, lem-collinear-boost-composition-and-velocity-addition, def-sr-simultaneity-slice-and-rest-distance, def-inertial-frame-and-inertial-chart, def-lorentz-boost, def-lorentz-map-and-lorentz-group, def-sr-proper-time, def-sr-piecewise-proper-time, thm-of-square-roots, lem-of-square-monotone, def-ordered-field, lem-boost-is-proper-orthochronous-with-inverse]
dependency_roles:
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  lem-sr-boost-time-length-and-velocity-formulas: mathematical-premise
  lem-collinear-boost-composition-and-velocity-addition: mathematical-premise
  def-sr-simultaneity-slice-and-rest-distance: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-piecewise-proper-time: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  def-ordered-field: mathematical-premise
dependency_level: 13
aliases: []
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook): section 1.3.3 'The gamma factor' pp. 25-26 (figure s, the reunion discussion and the symmetry/asymmetry discussion); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3 pp. 71-72 (the twin remark and the role of simultaneity conventions)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022), sections 2.1-2.3 pp. 25-30 (inertial frames, Lorentz transformations and the straight-line maximum); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Example

Fix reals $c>0$, $T>0$, $v=3c/5$ and $\gamma=5/4$.
This is a mathematical proper-time computation: the inertial chart $x$ has metric
$\operatorname{diag}(-1,1,1,1)$ and $x^0=ct$; the stay-at-home worldline is
$y_{\mathrm{stay}}(t)=x^{-1}(ct,0,0,0)$ for $t\in[0,2T]$;
the traveler is $y_{\mathrm{travel}}(t)=x^{-1}(ct,vt,0,0)$ on $[0,T]$
and $y_{\mathrm{travel}}(t)=x^{-1}(ct,v(2T-t),0,0)$ on $[T,2T]$.
All clock readings below mean the based mathematical proper-time values
of these curves, initialized to zero at $t=0$
([[def-sr-proper-time]], [[def-sr-piecewise-proper-time]]),
so the stay-at-home reading equals $t$; the turn event is
$r:=x^{-1}(cT,3cT/5,0,0)$; the two momentary inertial rest frames of the
traveler are the charts $x'$ and $x''$ of the boosts with velocities $+3c/5$ and
$-3c/5$, both with the same origin $p=x^{-1}(0,0,0,0)$ as $x$.
Explicitly their bases are $e'_a=B(-\frac35e_1)e_a$ and
$e''_a=B(\frac35e_1)e_a$ for $a=0,1,2,3$; the two charts
are defined from these bases and origin by [[def-inertial-frame-and-inertial-chart]].

**(a) Outbound rest frame.** The chart $x'$ has
$x'^0=\frac54\bigl(x^0-\frac35x^1\bigr)$; at $r$ this is
$\frac54\bigl(cT-\frac35\cdot\frac{3cT}{5}\bigr)
=\frac54\bigl(cT-\frac{9cT}{25}\bigr)=\frac54\cdot\frac{16cT}{25}=\frac{4cT}{5}$,
so the slice $x'^0=\frac{4cT}{5}$ through $r$ meets the stay-at-home worldline
$x^1=0$ at $\frac54x^0=\frac{4cT}{5}$, that is $x^0=\frac{16cT}{25}$, i.e.
coordinate time $t=\frac{16T}{25}=T\bigl(1-\frac{9}{25}\bigr)$.

**(b) Inbound rest frame.** The chart $x''$ has
$x''^0=\frac54\bigl(x^0+\frac35x^1\bigr)$; at $r$ this is
$\frac54\bigl(cT+\frac{9cT}{25}\bigr)=\frac54\cdot\frac{34cT}{25}
=\frac{17cT}{10}$, so the slice $x''^0=\frac{17cT}{10}$ through $r$ meets the
stay-at-home worldline at $\frac54x^0=\frac{17cT}{10}$, that is
$x^0=\frac{34cT}{25}$, i.e. coordinate time $t=\frac{34T}{25}
=T\bigl(1+\frac{9}{25}\bigr)$.

**(c) The gap.** The two momentary frames assign to the stay-at-home clock
'at the time of the turn' the two different readings $\frac{16T}{25}$ and
$\frac{34T}{25}$; their difference is $\frac{18T}{25}=\frac{2Tv^2}{c^2}$, the
simultaneity gap.

**(d) Reconciliation.** The traveler's own clock reads $\frac45T=\frac{20T}{25}$
at the turn and $\frac85T=\frac{40T}{25}$ at the reunion; during each leg his
momentary frame assigns to the stay-at-home clock the advance
$\frac{16T}{25}$ (outbound from $0$ to $\frac{16T}{25}$; inbound from
$\frac{34T}{25}$ to $2T=\frac{50T}{25}$); with the gap $\frac{18T}{25}$ the total
assignment is $\frac{16T}{25}+\frac{18T}{25}+\frac{16T}{25}=\frac{50T}{25}=2T$,
the stay-at-home reading at the reunion, while the traveler reads
$\frac85T=\frac{40T}{25}$; the two readings differ by $\frac{2T}{5}
=\frac{10T}{25}$.

**(e) The two rest frames are distinct.** Their relative boost parameter is the
collinear composition
$\frac{2\cdot(3/5)}{1+9/25}=\frac{6/5}{34/25}=\frac{15}{17}\ne0$, so the
traveler's momentary inertial frame changes at the turn.

## Facts & Assumptions

**Given:** An inertial frame with chart $x$, metric $\operatorname{diag}(-1,1,1,1)$ and $x^0=ct$; $T>0$, $v=3c/5$, $\gamma=5/4$; the two explicitly parametrized worldlines and mathematical proper-time readings of the Example, the turn event $r=x^{-1}(cT,3cT/5,0,0)$, the reunion event $q=x^{-1}(2cT,0,0,0)$, and the boost charts $x'$, $x''$ of the lemma [[lem-sr-boost-time-length-and-velocity-formulas]] for velocities $+3c/5$ and $-3c/5$, both with origin $p=x^{-1}(0,0,0,0)$.

[L1] Boost chart transitions ([[lem-sr-boost-time-length-and-velocity-formulas]]): for inertial frames with a common origin whose bases are related by a boost of velocity $v$ with $|v|<c$ along a common spatial direction one has $x'^0=\gamma(x^0-\frac vc x^1)$, $x'^1=\gamma(x^1-\frac vc x^0)$ with $\gamma=(1-v^2/c^2)^{-1/2}$; and along the worldline at rest in $x'$ the clock rate is $\mathrm d\tau/\mathrm dt=1/\gamma$.

[L2] Simultaneity slices ([[def-sr-simultaneity-slice-and-rest-distance]], [[def-inertial-frame-and-inertial-chart]]): for a future unit timelike vector $n$ the slice through an event $p$ is $\{u:\eta(n,u-p)=0\}$; in a chart the slice of constant $x'^0$ through an event consists of the events with that coordinate, and coordinate differences of events are the coordinates of their displacements.

[L3] Boosts ([[def-lorentz-boost]], [[lem-boost-is-proper-orthochronous-with-inverse]], [[def-lorentz-map-and-lorentz-group]]): for $|\beta|<1$ the passive boost $B(\beta e)$ is a proper orthochronous Lorentz map, so it maps inertial bases to inertial bases and its charts are inertial charts.

[L4] Collinear composition ([[lem-collinear-boost-composition-and-velocity-addition]]): $B(\beta_1e)B(\beta_2e)=B\bigl(\frac{\beta_1+\beta_2}{1+\beta_1\beta_2}e\bigr)$.

[L5] Proper times ([[def-sr-proper-time]], [[def-sr-piecewise-proper-time]]): a straight leg with constant tangent $(c,\pm v,0,0)$ over a parameter interval of length $T$ has proper time $T/\gamma$, and the two-leg total is $2T/\gamma$; the stay-at-home worldline has tangent $(c,0,0,0)$, so its based proper time is $c^{-1}\int_0^t c\,du=t$. This identifies the mathematical reading, without any physical-clock assumption.

[L6] Arithmetic, roots and order ([[thm-of-square-roots]], [[lem-of-square-monotone]], [[def-ordered-field]]): all the rational evaluations below are exact; $(5/4)^{-1}=4/5$ and $(3/5)^2=9/25$.

## Verification

**Proof technique:** direct.

1.1 By [L1] with $v/c=3/5$ and $\gamma=5/4$ the outbound chart is $x'^0=\frac54(x^0-\frac35x^1)$ and the inbound chart is $x''^0=\frac54(x^0+\frac35x^1)$; both are inertial charts by [L3], and the stay-at-home worldline has $x^1=0$ with clock reading the coordinate time $t=x^0/c$ by [L5]. [given, L1, L3, L5]

2.1 For (a): the turn event has $x^0(r)=cT$ and $x^1(r)=3cT/5$, so $x'^0(r)=\frac54\bigl(cT-\frac35\cdot\frac{3cT}{5}\bigr)=\frac54\cdot\frac{16cT}{25}=\frac{4cT}{5}$; the slice $x'^0=\frac{4cT}{5}$ meets $x^1=0$ at $\frac54x^0=\frac{4cT}{5}$, that is $x^0=\frac{16cT}{25}$ and clock reading $t=\frac{16T}{25}$. [step 1.1, L2, L6, algebra]

2.2 For (b): $x''^0(r)=\frac54\bigl(cT+\frac35\cdot\frac{3cT}{5}\bigr)=\frac54\cdot\frac{34cT}{25}=\frac{17cT}{10}$; the slice $x''^0=\frac{17cT}{10}$ meets $x^1=0$ at $\frac54x^0=\frac{17cT}{10}$, that is $x^0=\frac{34cT}{25}$ and clock reading $t=\frac{34T}{25}$. [step 1.1, L2, L6, algebra]

2.3 For (e): the outbound frame is obtained from $x$ by a boost of dimensionless parameter $3/5$ and the inbound frame by one of parameter $-3/5$; the boost from the inbound to the outbound momentary frame is therefore the collinear composition of parameters $3/5$ and $3/5$ in the composed description, whose parameter is $\frac{3/5+3/5}{1+(3/5)(3/5)}=\frac{6/5}{34/25}=\frac{15}{17}$ by [L4]; since $\frac{15}{17}\ne0$, the two momentary inertial frames are distinct. [step 1.1, L4, L6, algebra]

3.1 For (c): the two readings differ by $\frac{34T}{25}-\frac{16T}{25}=\frac{18T}{25}$, and $\frac{2Tv^2}{c^2}=2T\cdot\frac{9}{25}=\frac{18T}{25}$, so the gap equals $\frac{2Tv^2}{c^2}$. [step 2.1, step 2.2, L6, algebra]

4.1 For (d): by [L5] the traveler's clock reads $T/\gamma=\frac45T=\frac{20T}{25}$ at the turn and $2T/\gamma=\frac85T=\frac{40T}{25}$ at the reunion; the outbound frame assigns to the stay-at-home clock the advance from $t=0$ to $t=\frac{16T}{25}$, namely $\frac{16T}{25}$, the inbound frame assigns the advance from $t=\frac{34T}{25}$ to $t=2T=\frac{50T}{25}$, again $\frac{16T}{25}$, so with the gap the total assigned reading is $\frac{16T}{25}+\frac{18T}{25}+\frac{16T}{25}=\frac{50T}{25}=2T$, equal to the stay-at-home clock reading at the reunion, while the traveler reads $\frac{40T}{25}$; the readings differ by $\frac{10T}{25}=\frac{2T}{5}$. [step 3.1, L1, L5, algebra]

5.1 All the numbers of (a)-(e) are exact rational evaluations of the model's chart transitions, slices and proper-time values: the simultaneity gap of the traveler's two momentary frames at the turn is $\frac{18T}{25}=\frac{2Tv^2}{c^2}$, and the leg-by-leg assignment $\frac{16T}{25}+\frac{18T}{25}+\frac{16T}{25}=2T$ reproduces the stay-at-home reading. The example makes no empirical claim; it displays a reconciliation of the traveler's momentary-frame accounts within the model. [step 2.1, step 2.2, step 3.1, step 4.1, step 2.3, L1, L2, L4, L5] ∎
