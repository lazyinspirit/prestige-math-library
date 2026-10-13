---
id: ex-sr-boost-makes-spacelike-events-simultaneous
kind: example
title: "Worked boost family on the spacelike pair $(11,13,0,0)$: simultaneity at $b=11/13$ and both time orders"
status: published
origin: pipeline
domain: mathematics
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [lem-sr-spacelike-pairs-have-frame-dependent-time-order, def-lorentz-boost, def-lorentz-map-and-lorentz-group, lem-lorentz-map-preserves-metric-and-causal-structure, def-spatial-euclidean-structure-of-an-inertial-frame, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, def-causal-classification-of-lorentz-vectors]
dependency_roles:
  lem-sr-spacelike-pairs-have-frame-dependent-time-order: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
dependency_level: 9
aliases: []
sources:
  references:
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision): Sections 2.1-2.3 pp. 25-30 (Minkowski metric (2.6) and inertial frames; timelike, null, spacelike and causal vectors with the light-cone double cone and its two disconnected causal sets; timelike and causal curves; proper time (2.19); curves of extremal proper time, straight lines in inertial frames and the unproved maximization statement); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "R. C. Tolman, The Theory of the Relativity of Motion (University of California Press, Berkeley, 1917): Chapter V, Sections 45-52 pp. 49-55 (kinematical rate of a clock, the idea of simultaneity, velocities greater than that of light with the order-of-cause-and-effect reversal formula (28)-(29), and the blocks caveat that kinematic patterns without causal connection are not restricted); Internet Archive full text of the 1917 printing"
      url: "https://archive.org/download/theoryrelativmot00tolmrich/theoryrelativmot00tolmrich_djvu.txt"
---

## Example

Worked computation in the chart $x$ of an inertial frame of an affine Minkowski
space ([[def-sr-affine-minkowski-model]], [[def-inertial-frame-and-inertial-chart]])
with $\eta_0=\operatorname{diag}(-1,1,1,1)$. Let
$p:=x^{-1}(0,0,0,0)$ and $q:=x^{-1}(11,13,0,0)$; then
$D:=x(q)-x(p)=(11,13,0,0)$ has
$$\eta(D,D)=-11^2+13^2=-121+169=48>0,$$
so $q-p$ is spacelike and $|D^0|=11<13=|D_s|$, in accordance with clause (a)
of [[lem-sr-spacelike-pairs-have-frame-dependent-time-order]].

**(a) Simultaneity at $b_0=11/13$.** With $e:=D_s/|D_s|=e_1$ and
$b_0:=D^0/|D_s|=11/13$, so that $|b_0|<1$, the chart $x_{b_0}$ of the inertial
frame built from the passive boost $B(b_0e_1)$ by clause (d) of the same lemma
satisfies
$$x_{b_0}^0(q)-x_{b_0}^0(p)=\gamma_{b_0}\Bigl(11-\tfrac{11}{13}\cdot 13\Bigr)=0, \qquad \gamma_{b_0}=\Bigl(1-\tfrac{121}{169}\Bigr)^{-1/2}=\frac{13}{\sqrt{48}}:$$
the two events are simultaneous in that frame.

**(b) Below $b_0$: positive time difference.** With $b=3/5$ one has
$\gamma_b=(1-9/25)^{-1/2}=5/4$ and
$$x_b^0(q)-x_b^0(p)=\frac54\Bigl(11-\frac35\cdot 13\Bigr)=\frac54\cdot\frac{16}{5}=4>0 .$$

**(c) Above $b_0$: negative time difference.** With $b=12/13$ one has
$\gamma_b=(1-144/169)^{-1/2}=13/5$ and
$$x_b^0(q)-x_b^0(p)=\frac{13}{5}\Bigl(11-\frac{12}{13}\cdot 13\Bigr)=\frac{13}{5}(-1)=-\frac{13}{5}<0 .$$

**(d) The spatial separation in the three frames.** The boost in the
$(0,1)$-plane acts by $x'^0=\gamma(x^0-bx^1)$, $x'^1=\gamma(x^1-bx^0)$
([[def-lorentz-boost]]), so the spatial difference of the pair in the boosted
chart is $x_b^1(q)-x_b^1(p)=\gamma_b(13-11b)$. It equals $\sqrt{48}$ for
$b=b_0$, $8$ for $b=3/5$ and $37/5$ for $b=12/13$; in each case it is nonzero
and $|x_b^0(q)-x_b^0(p)|<|x_b^1(q)-x_b^1(p)|$. The displacement stays spacelike
because a boost is a Lorentz map and preserves $\eta$
([[lem-lorentz-map-preserves-metric-and-causal-structure]],
[[def-lorentz-map-and-lorentz-group]]), so the three charts are charts of three
inertial frames related to $x$ by passive boosts and the time-order sign of a
spacelike-separated pair is an artifact of the chart, not of the pair. No
physical synchronization procedure is asserted; simultaneity means equality of
the chart's time coordinate.

## Facts & Assumptions

**Given:** An inertial frame with chart $x$ and $\eta_0=\operatorname{diag}(-1,1,1,1)$, the events $p=x^{-1}(0,0,0,0)$ and $q=x^{-1}(11,13,0,0)$, the displacement $D=(11,13,0,0)$ with spatial part $D_s=(13,0,0)$ and Euclidean norm $|D_s|=13$.

[L1] For a spacelike pair the lemma gives $|D^0|<|D_s|$ in every inertial chart, and for every $|b|<1$ the chart $x_b$ of the inertial frame with ordered basis $e'_a=B(be)^{-1}e_a$, where $e=D_s/|D_s|$, satisfies $x_b^0(q)-x_b^0(p)=\gamma_b(D^0-b|D_s|)$ with $\gamma_b=(1-b^2)^{-1/2}$ ([[lem-sr-spacelike-pairs-have-frame-dependent-time-order]]).

[L2] For $\beta=be_1$ with $|b|<1$ the passive boost acts in coordinates by $x'^0=\gamma(x^0-bx^1)$, $x'^1=\gamma(x^1-bx^0)$, $x'^2=x^2$, $x'^3=x^3$, with $\gamma=(1-b^2)^{-1/2}>0$ ([[def-lorentz-boost]]).

[L3] A vector $v$ is spacelike exactly when $\eta(v,v)>0$; a linear Lorentz map preserves $\eta$, hence preserves the causal character of every nonzero vector, and the boosts are proper orthochronous Lorentz maps ([[def-causal-classification-of-lorentz-vectors]], [[lem-lorentz-map-preserves-metric-and-causal-structure]], [[def-lorentz-map-and-lorentz-group]]).

[L4] In a fixed inertial frame the spatial coordinates carry the Euclidean norm $|(u^1,u^2,u^3)|=\sqrt{(u^1)^2+(u^2)^2+(u^3)^2}$ ([[def-spatial-euclidean-structure-of-an-inertial-frame]]).

## Verification

**Proof technique:** direct.

1.1 The displacement is $D=(11,13,0,0)$, so $\eta(D,D)=-121+169=48>0$, the pair is spacelike, and $|D^0|=11<13=|D_s|$. [given, L3, L4, algebra]

2.1 With $b_0=11/13$ one has $|b_0|<1$, and the chart of clause (d) of [L1] gives $x_{b_0}^0(q)-x_{b_0}^0(p)=\gamma_{b_0}(11-(11/13)13)=0$ with $\gamma_{b_0}=(1-121/169)^{-1/2}=(48/169)^{-1/2}=13/\sqrt{48}>0$; this is (a). [step 1.1, L1, algebra]

2.2 With $b=3/5$ one has $|b|<1$, $\gamma_b=(1-9/25)^{-1/2}=(16/25)^{-1/2}=5/4$ and $x_b^0(q)-x_b^0(p)=(5/4)(11-(3/5)13)=(5/4)(16/5)=4>0$; this is (b). [step 1.1, L1, algebra]

2.3 With $b=12/13$ one has $|b|<1$, $\gamma_b=(1-144/169)^{-1/2}=(25/169)^{-1/2}=13/5$ and $x_b^0(q)-x_b^0(p)=(13/5)(11-(12/13)13)=(13/5)(-1)=-13/5<0$; this is (c). [step 1.1, L1, algebra]

3.1 The spatial difference in the boosted chart is $x_b^1(q)-x_b^1(p)=\gamma_b(13-11b)$ by [L2] applied to $D$, and the three values are $\gamma_{b_0}(13-121/13)=(13/\sqrt{48})(48/13)=\sqrt{48}$, $(5/4)(13-33/5)=(5/4)(32/5)=8$ and $(13/5)(13-132/13)=(13/5)(37/13)=37/5$, all nonzero; the corresponding time differences are $0$, $4$ and $-13/5$, so $|x_b^0(q)-x_b^0(p)|<|x_b^1(q)-x_b^1(p)|$ holds in all three charts, and the spacelike character is preserved because $\eta(Bv,Bv)=\eta(v,v)$ by [L3]; this is (d). [step 1.1, step 2.1, step 2.2, step 2.3, L2, L3, algebra]

4.1 By [L1] the three charts $x_{b_0}$, $x_{3/5}$ and $x_{12/13}$ are charts of inertial frames related to $x$ by passive boosts, and steps 2.1, 2.2 and 2.3 give time differences $0$, $4$ and $-13/5$; hence the time order of the spacelike-separated pair $(p,q)$ is simultaneity for $b_0=11/13$, positive for $3/5<b_0$ and negative for $12/13>b_0$, and is therefore an artifact of the inertial chart and not a property of the pair. Only equality of the chart's time coordinate is used for simultaneity, and no choice principle is used. [step 3.1, step 2.1, step 2.2, step 2.3, L1] ∎
