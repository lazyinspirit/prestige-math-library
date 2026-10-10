---
id: pthm-sr-guided-ring-sagnac-delay
kind: physics-theorem
title: "The guided-ring Sagnac delay: return times and receiver proper-time difference for counter-propagating guided signals on a rotating ring"
status: draft
origin: pipeline
domain: physics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [post-sr-inertial-covariance, post-sr-ideal-clocks-and-light, def-sr-si-units-and-coordinate-conventions, thm-sr-fermi-walker-and-rigid-observer-examples, thm-sr-local-congruence-adapted-charts-and-frobenius, def-sr-observer-congruence-and-kinematics, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, def-sr-regular-causal-curve-and-worldline, def-sr-four-velocity-and-four-acceleration, thm-sr-proper-time-and-observer-decomposition, def-sr-proper-time, lem-sr-proper-time-parametrization, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, thm-sine-and-cosine-derivatives, thm-chain-rule, def-derivative, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-and-cosine-addition-formulas, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-zero-sets-and-fundamental-period, lem-sr-future-causal-sums-and-inertial-coordinate-criterion]
dependency_roles:
  post-sr-inertial-covariance: physical-assumption
  post-sr-ideal-clocks-and-light: physical-assumption
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  thm-sr-fermi-walker-and-rigid-observer-examples: mathematical-premise
  thm-sr-local-congruence-adapted-charts-and-frobenius: mathematical-premise
  def-sr-observer-congruence-and-kinematics: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-proper-time: mathematical-premise
  lem-sr-proper-time-parametrization: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-derivative: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
proof_strategy: direct
physical_scope: "Conditional kinematic computation in flat classical special relativity for an ideal rigidly rotating circular ring, an adopted ideal circular guide carrying two counter-propagating guided signals with inertial tangential speed c, and an ideal clock detector on the ring. The guide and detector models are explicit idealizations, not consequences of the special-relativistic postulates; the item excludes real optical fibers, refractive and dispersive media, apparatus, finite resolution, interference and wave optics, gravitation and quantum effects, and it makes no measurement, statistical or empirical claim."
sources:
  references:
    - title: "Wikipedia, 'Sagnac effect' (encyclopedia article consulted as a secondary treatment): the basic circular case with return times t_1 = 2 pi R/(c - R omega) and t_2 = 2 pi R/(c + R omega) and the time difference Delta t = 4 pi R^2 omega/(c^2 - R^2 omega^2), its small-velocity limit 4 A omega/c^2, and the guided-wave description of a closed optical path"
      url: "https://en.wikipedia.org/wiki/Sagnac_effect"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 8.1.1-8.1.3 pp. 165-166 (no Einstein synchronization in a rotating frame, the synchronization discrepancy accumulating around a closed circuit, and the Sagnac effect of a rotating ring, with the time shift 2 A omega/c^2 and the ring-laser and fiber-gyroscope examples); signature (+---) converted to (-+++), c = 1 formulas restored to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
aliases: []
---

## Statement

Adopt [[post-sr-inertial-covariance]] and [[post-sr-ideal-clocks-and-light]] and the SI conventions of [[def-sr-si-units-and-coordinate-conventions]] ($x^0 = c t$). Let $x = (x^0,x^1,x^2,x^3)$ be the chart of an inertial frame ([[def-inertial-frame-and-inertial-chart]]). Fix $R > 0$, a real $\Omega$ with $|\Omega| R < c$, a real $x^3_0$ and a real $\phi_0$, and put $\gamma := (1 - \Omega^2 R^2/c^2)^{-1/2}$. A rigidly rotating circular ring of radius $R$ and height $x^3_0$ about the $x^3$-axis, with angular velocity $\Omega$, has material worldlines

$$W_{\phi_0}(t) := x^{-1}(c t,\; R \cos(\phi_0 + \Omega t),\; R \sin(\phi_0 + \Omega t),\; x^3_0),\qquad t \in \mathbb R.$$

(i) **The ring worldline and the ring congruence.** $W_{\phi_0}$ is a $C^\infty$ future timelike worldline with unit observer

$$n = \gamma\,\bigl(1,\;-(\Omega R/c)\sin(\phi_0+\Omega t),\;(\Omega R/c)\cos(\phi_0+\Omega t),\;0\bigr) = (\gamma/c)\,\partial_t|_{\varphi},$$

$\eta(n,n) = -1$, and four-velocity $U = c n = \gamma\,\partial_t|_{\varphi}$, $\eta(U,U) = -c^2$, where $\varphi := \phi - \Omega t$ is the rotating angular label of the ring material points; it is an unparametrized flow line of the rigid-rotation congruence $n = \gamma(r)\,[\partial_0 + (\Omega/c)(-x^2\partial_1 + x^1\partial_2)]$ restricted to $r = R$, and its proper time $\tau$ and the chart time $t$ satisfy $d\tau = dt/\gamma$, so $\tau = t/\gamma + \tau_0$ for an arbitrary proper-time origin $\tau_0$ on this worldline ([[thm-sr-fermi-walker-and-rigid-observer-examples]] (c), [[def-sr-proper-time]], [[lem-sr-proper-time-parametrization]]).

(ii) **The guided-signal model.** Adopt, as an explicit model assumption of an ideal circular guide attached to the ring and of the signal and detector model below, and not as a consequence of the postulates: two ideal signals are emitted at the common emission event $W_{\phi_0}(0)$ into the guide, one in the positive angular direction and one in the negative angular direction (respectively co-rotating and counter-rotating for $\Omega > 0$, with these roles reversed for $\Omega < 0$), and in the inertial chart they follow the curves $C_+$ and $C_-$ given by $\phi_+(t) = \phi_0 + c t/R$ and $\phi_-(t) = \phi_0 - c t/R$ with radius $R$ and height $x^3_0$, i.e. each guided signal has chart angular rate $+c/R$ or $-c/R$ along the guide ('inertial tangential speed $c$ along the guide'); the detector is an ideal clock carried by the ring material point labelled $\varphi = \phi_0$. Each of $C_+$ and $C_-$ is a future null curve of the chart: its tangent has time component $c$ and spatial part of Euclidean length $c$, so the tangent has $\eta$-norm $0$ and positive time component ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]).

(iii) **Return times and differences.** The displayed guided curves have all-real mathematical extensions; emitted signals are their restrictions $t \ge 0$. On those extensions $C_+$ meets the worldline $W_{\phi_0}$ exactly at the chart times $2 \pi k R/(c - \Omega R)$, $k \in \mathbb Z$, and $C_-$ exactly at the chart times $2 \pi k R/(c + \Omega R)$, $k \in \mathbb Z$; the smallest positive meeting times are $t_1 := 2 \pi R/(c - \Omega R) > 0$ and $t_2 := 2 \pi R/(c + \Omega R) > 0$. Hence the two counter-propagating signals emitted at the same event reunite with the emitting material point at the reception events $W_{\phi_0}(t_1)$ and $W_{\phi_0}(t_2)$, each having gained exactly one circuit relative to that material point, and the chart-time difference of the two reunions is $t_1 - t_2 = 4 \pi \Omega R^2/(c^2 - \Omega^2 R^2) > 0$ for $\Omega > 0$. The proper-time difference measured by the detector ideal clock is $(t_1 - t_2)/\gamma = 4 \pi \Omega R^2/(c^2 \sqrt{1 - \Omega^2R^2/c^2})$. For $\Omega = 0$ (inertial ring) $t_1 = t_2 = 2 \pi R/c$ and both differences vanish; for $\Omega < 0$ the sign of the first difference reverses and the roles of $C_+$ and $C_-$ are interchanged.

(iv) **Relation to the ring rest-synchronization holonomy.** On the fixed-height timelike cylinder $C = \{r = R,\ x^3 = x^3_0\}$, material worldlines have constant rotating label. Its rest lines instead vary $\varphi$ on an angular lift and satisfy $dt/d\varphi = \Omega R^2/(c^2 - \Omega^2R^2)$, being integral curves of $\partial_\varphi + [\Omega R^2/(c^2 - \Omega^2R^2)]\,\partial_t$; for $\Omega = 0$ they are $t = \text{constant}$ circles; one circuit $\varphi \to \varphi + 2 \pi$ has the chart-time holonomy $\Delta t_h = 2 \pi \Omega R^2/(c^2 - \Omega^2R^2) = (t_1 - t_2)/2$ and the receiver proper-time holonomy $\Delta \tau_h = \Delta t_h/\gamma = 2 \pi \Omega R^2/(c^2 \sqrt{1 - \Omega^2R^2/c^2}) = (1/2)(t_1 - t_2)/\gamma$, exactly half of the detector proper-time difference of (iii); for $\Omega = 0$ both holonomies vanish. The ambient three-dimensional rest distribution of the rotating congruence is nowhere integrable for $\Omega \neq 0$, so no ambient rest-simultaneity hypersurface exists, while the one-dimensional rest distribution restricted to the fixed-height cylinder $C$ is locally integrable and has the global holonomy just computed, nonvanishing exactly when $\Omega \neq 0$; the return-time computation of (iii) uses only the guided null curves and the material worldline and does not use either integrability property ([[thm-sr-fermi-walker-and-rigid-observer-examples]] (c), [[thm-sr-local-congruence-adapted-charts-and-frobenius]]).

(v) **Scope.** All quantities are conditional model computations for the specified ring, guide, signal and detector idealizations. The guided-signal curves are an adopted device model: the ideal vacuum light rays of [[post-sr-ideal-clocks-and-light]] are straight future null lines and do not circulate around the ring by themselves, and no assertion is made about optical fibers, refractive media, dispersion, absorption, finite resolution, apparatus calibration, interference phase or wave optics, or about one-way synchronization conventions between distinct ring observers; no measurement outcome, statistical inference or empirical claim is made, the values of $R$ and $\Omega$ are parameters and not measured quantities, and no choice principle is used.

## Facts & Assumptions

**Given:** $c>0$; an inertial chart $x$ with $x^0=ct$ and $\eta=\operatorname{diag}(-1,1,1,1)$ in the orthonormal frame; $R>0$, real $\Omega$ with $|\Omega|R<c$, real $x^3_0,\phi_0$, and $\gamma=(1-\Omega^2R^2/c^2)^{-1/2}$; the ring worldlines $W_{\phi_0}(t)=x^{-1}(ct,R\cos(\phi_0+\Omega t),R\sin(\phi_0+\Omega t),x^3_0)$; the guided curves $C_\pm$ of clause (ii), adopted as the explicit device model of the statement; and the detector ideal clock carried by the material point $\varphi=\phi_0$.

[L1] Ideal clocks read the proper time of their worldline, and ideal vacuum light rays are the future null straight lines with coordinate speed $c$ in every inertial chart ([[post-sr-ideal-clocks-and-light]]).

[L2] In every inertial chart the coordinates are $x^0=ct$, the matrix of $\eta$ is $\operatorname{diag}(-1,1,1,1)$ with dimensionless entries, and the interval carries $\mathrm m^2$ ([[def-sr-si-units-and-coordinate-conventions]], [[def-inertial-frame-and-inertial-chart]]).

[L3] Points of $A$ are determined by their inertial coordinates, and vector components are read in the orthonormal basis $(e_a)$ ([[def-inertial-frame-and-inertial-chart]], [[def-sr-affine-minkowski-model]]).

[L4] A curve $x:I\to A$ is differentiable precisely when its coordinate representation is, its tangent is the corresponding $V$-vector, and it is $C^k$ when that representation is; at a regular point the causal character and future direction of the curve are those of its tangent ([[def-sr-regular-causal-curve-and-worldline]] (a),(b)).

[L5] Causal classification: timelike means $\eta(v,v)<0$, null means $v\neq0$ and $\eta(v,v)=0$, and each nonzero causal vector is future or past but not both; $C^+=\{v:v^0>|v_s|\}$ and $\bar C^+=\{v:v^0\ge|v_s|\}$ in every inertial chart ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]], [[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]] (a)).

[L6] Four-velocity: $U=x'/\tau'=cx'/\sqrt{-\eta(x',x')}$ with $\eta(U,U)=-c^2$ along a $C^1$ future timelike worldline, and for a congruence flow line with tangent $x'=cn$ the four-velocity is $cn$ ([[def-sr-four-velocity-and-four-acceleration]] (a),(c), [[thm-sr-proper-time-and-observer-decomposition]] (a)).

[L7] Proper time: for a $C^1$ future timelike worldline, $\tau(b)-\tau(a)=c^{-1}\int_a^b\sqrt{-\eta(x',x')}\,du$, and the proper-time reparametrization is $C^1$ with tangent $x'/\tau'$ ([[def-sr-proper-time]], [[lem-sr-proper-time-parametrization]] (i),(iii),(iv)).

[L8] Derivatives: $(\sin t)'=\cos t$, $(\cos t)'=-\sin t$, and the chain rule differentiates composites with affine inner maps ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[def-derivative]]).

[L9] Trigonometric identities: $\sin^2t+\cos^2t=1$, parity, addition formulas, quarter-turn shifts $\sin(t+\pi)=-\sin t$, $\cos(t+\pi)=-\cos t$, and $\sin t=0$ iff $t=m\pi$ ($m\in\mathbb Z$), with both sine and cosine $2\pi$-periodic ([[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-and-cosine-addition-formulas]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L10] Rigid rotation and the ring: on the timelike region $r^2<c^2/\Omega^2$ the field $n=\gamma(r)[\partial_0+(\Omega/c)(-x^2\partial_1+x^1\partial_2)]$ is a smooth future unit timelike Born-rigid congruence with nowhere-zero vorticity for $\Omega\neq0$; on the ring cylinder $r=R$, $x^3=\text{const}$, the induced metric is $-(c^2-\Omega^2R^2)dt^2+2\Omega R^2\,dt\,d\varphi+R^2d\varphi^2$, the ring observer $\phi=\phi_0+\Omega t$ has $n=\gamma(R)(1,-(\Omega R/c)\sin\phi,(\Omega R/c)\cos\phi,0)$, the one-dimensional rest distribution is locally integrable with $dt/d\varphi=\Omega R^2/(c^2-\Omega^2R^2)$, one positive circuit has signed chart-time offset $\Delta t=2\pi\Omega R^2/(c^2-\Omega^2R^2)$, and for $\Omega=0$ the ring is inertial with rest lines $t=\text{const}$ ([[thm-sr-fermi-walker-and-rigid-observer-examples]] (c)).

[L11] Frobenius: the ambient rest distribution of an observer congruence is integrable on an open set exactly where its vorticity vanishes; a locally integrable rank-one cylinder distribution is unaffected by the ambient obstruction ([[thm-sr-local-congruence-adapted-charts-and-frobenius]] (iii), [[def-sr-observer-congruence-and-kinematics]] (c),(d)).

## Proof

**Proof technique:** direct.

1.1 (Tangent and invariants of the ring worldline.) With $\phi:=\phi_0+\Omega t$, the coordinate functions of $W_{\phi_0}$ are $t\mapsto ct$, $t\mapsto R\cos\phi$, $t\mapsto R\sin\phi$ and the constant $x^3_0$; differentiating with [L8] gives $\dot W=(c,-\Omega R\sin\phi,\Omega R\cos\phi,0)$, and by [L2] and [L9], $\eta(\dot W,\dot W)=-c^2+\Omega^2R^2(\sin^2\varphi+\cos^2\varphi)=-c^2(1-\Omega^2R^2/c^2)=-c^2/\gamma^2<0$, while the time component is $\dot W^0=c>0$ and the spatial part has Euclidean norm $|\Omega| R<c$. [L2, L3, L8, L9, algebra]

1.2 (The guided curves are future null.) With $\phi_\pm:=\phi_0\pm ct/R$ the curves $C_\pm$ have coordinate functions $t\mapsto ct$, $t\mapsto R\cos\phi_\pm$, $t\mapsto R\sin\phi_\pm$; differentiating gives tangents $(c,\mp c\sin\phi_\pm,\pm c\cos\phi_\pm,0)$, whose $\eta$-square is $-c^2+c^2(\sin^2+\cos^2)=0$ by [L2] and [L9], so the tangent is nonzero null, with time component $c$ equal to the Euclidean norm of its spatial part; hence each tangent lies in $\bar C^+\setminus\{0\}$ by [L5], so each of $C_\pm$ is a future null curve. [L5, L8, L9, algebra]

1.3 (Rest-synchronization data on the cylinder.) By [L10] the induced metric on the cylinder is $-(c^2-\Omega^2R^2)dt^2+2\Omega R^2dt\,d\varphi+R^2d\varphi^2$ with $c^2-\Omega^2R^2>0$ by $|\Omega|R<c$, and the one-dimensional rest distribution is locally integrable with $dt/d\varphi=\Omega R^2/(c^2-\Omega^2R^2)$; one positive circuit $\varphi\mapsto\varphi+2\pi$ has chart-time offset $\Delta t_h=2\pi\Omega R^2/(c^2-\Omega^2R^2)$, and for $\Omega=0$ the rest lines are $t=\text{const}$. For $\Omega\neq0$ the ambient rest distribution has nowhere-zero vorticity, so by [L11] it is nowhere integrable and admits no local rest-simultaneity hypersurface; the rank-one cylinder distribution is a separate locally integrable object, and no global single-valued rest time on the cylinder exists when $\Delta t_h\neq0$. [L10, L11, algebra]

1.4 (Agreement of sine and cosine pairs.) For real angles $\alpha,\beta$: if $\cos\alpha=\cos\beta$ and $\sin\alpha=\sin\beta$, then the addition formulas give $\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta=\cos^2\alpha+\sin^2\alpha=1$ and $\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta=0$ by [L9]; the zero-set statement puts $\alpha-\beta\in\pi\mathbb Z$, and the quarter-turn shifts give $\cos(m\pi)=(-1)^m$, so $\cos(\alpha-\beta)=1$ forces $m$ even, i.e. $\alpha-\beta=2\pi k$ for some $k\in\mathbb Z$. Conversely $\alpha-\beta=2\pi k$ implies $\cos\alpha=\cos\beta$ and $\sin\alpha=\sin\beta$ by the $2\pi$-periodicity of [L9]. [L9, algebra]

2.1 (Congruence data and proper time on the ring.) By [L10] the field $n=\gamma(R)(1,-(\Omega R/c)\sin\phi,(\Omega R/c)\cos\phi,0)$ is the unit observer of the ring material point and $W_{\phi_0}$ is its flow line; direct substitution with [L9] gives $\eta(n,n)=\gamma^2(-1+(\Omega^2R^2/c^2)(\sin^2+\cos^2))=\gamma^2(-1+\Omega^2R^2/c^2)=-1$, and $U:=cn=c\gamma(1,-(\Omega R/c)\sin\phi,(\Omega R/c)\cos\phi,0)=\gamma\dot W$, coinciding with $\gamma\,\partial_t|_{\varphi}$ evaluated along the material line and with the four-velocity of [L6]. Since $\eta(\dot W,\dot W)=-c^2/\gamma^2$ by step 1.1, the proper-time integrand of [L7] is $c^{-1}\sqrt{-\eta(\dot W,\dot W)}=1/\gamma$, so $d\tau=dt/\gamma$ and $\tau=t/\gamma+\tau_0$. [L6, L7, L9, L10, step 1.1, algebra]

2.2 (The meeting sets of the guided curves with the material worldline.) The guided signal $C_+$ meets $W_{\phi_0}$ at chart time $t$ exactly when the material point and the guided point coincide, i.e. exactly when $\cos(\phi_0+ct/R)=\cos(\phi_0+\Omega t)$ and $\sin(\phi_0+ct/R)=\sin(\phi_0+\Omega t)$; by step 1.4, applied to $\alpha=\phi_0+ct/R$ and $\beta=\phi_0+\Omega t$, this is equivalent to $(c/R-\Omega)t\in2\pi\mathbb Z$, i.e. to $t=2\pi kR/(c-\Omega R)$ for some $k\in\mathbb Z$. Similarly $C_-$ meets $W_{\phi_0}$ exactly when $-(c/R+\Omega)t\in2\pi\mathbb Z$, i.e. $t=2\pi kR/(c+\Omega R)$, $k\in\mathbb Z$. The angular labels of the two curves at a common meeting time differ by exactly one winding per unit of $k$ by construction. [L2, step 1.2, step 1.4, given]

3.1 (The ring worldline is a future timelike worldline and a congruence flow line.) By step 1.1 the coordinate functions are smooth compositions of affine maps with sine and cosine, so $W_{\phi_0}$ is $C^\infty$ by [L4]; its tangent is timelike with positive time component exceeding the spatial norm, so it is future timelike and regular by [L5], and $W_{\phi_0}$ is a future timelike worldline. By step 2.1 it is a flow line of the unit field $n$ of the rigid-rotation congruence restricted to $r=R$, with four-velocity $U=cn$ and $\eta(U,U)=-c^2$ in agreement with [L6], and its proper time is $\tau=t/\gamma+\tau_0$ by step 2.1. [L4, L5, L6, step 1.1, step 2.1]

4.1 (Return times and the differences.) Since $|\Omega|R<c$, both $c-\Omega R>0$ and $c+\Omega R>0$; hence the smallest positive members of the two meeting sets of step 2.2 are $t_1=2\pi R/(c-\Omega R)$ and $t_2=2\pi R/(c+\Omega R)$, both positive, and the emitted signals reunite with the emitting material point at $W_{\phi_0}(t_1)$ and $W_{\phi_0}(t_2)$ after exactly one circuit relative to it. Their chart-time difference is $t_1-t_2=2\pi R\bigl[(c+\Omega R)-(c-\Omega R)\bigr]/((c-\Omega R)(c+\Omega R))=4\pi\Omega R^2/(c^2-\Omega^2R^2)$, which is positive for $\Omega>0$ and negative for $\Omega<0$. By step 3.1 the two receptions correspond to proper times $\tau=t_1/\gamma+\tau_0$ and $\tau=t_2/\gamma+\tau_0$ of the detector ideal clock, so the detector reads the proper-time difference $(t_1-t_2)/\gamma=4\pi\Omega R^2/(c^2\sqrt{1-\Omega^2R^2/c^2})$ by [L1] and step 2.1. [L1, L2, step 2.1, step 3.1, step 2.2, algebra]

5.1 (Holonomy and the factor-two relation.) By step 1.3 the chart-time holonomy of the ring rest lines over one circuit is $\Delta t_h=2\pi\Omega R^2/(c^2-\Omega^2R^2)$; comparing with step 4.1 gives $t_1-t_2=2\Delta t_h$, i.e. $\Delta t_h=(t_1-t_2)/2$. Dividing by $\gamma$ using $d\tau=dt/\gamma$ of step 2.1 gives the receiver proper-time holonomy $\Delta\tau_h=\Delta t_h/\gamma=(1/2)(t_1-t_2)/\gamma$, exactly half the detector proper-time difference of step 4.1; explicitly $\Delta\tau_h=2\pi\Omega R^2/(c^2\sqrt{1-\Omega^2R^2/c^2})$. [L10, step 2.1, step 1.3, step 4.1, algebra]

6.1 (Inertial limit and reversed rotation.) If $\Omega=0$ then $\gamma=1$, the meeting sets of step 2.2 are both $2\pi kR/c$, so $t_1=t_2=2\pi R/c$ and both differences of step 4.1 and both holonomies of step 5.1 vanish; the rest lines are the $t=\text{const}$ circles of step 1.3. If $\Omega<0$, the factor $4\pi\Omega R^2/(c^2-\Omega^2R^2)$ of step 4.1 is negative, so the sign of $t_1-t_2$ is reversed, and the labels 'co-rotating' and 'counter-rotating' are interchanged because the material angular rate $\Omega$ now has the opposite sign to that of $C_+$. [L10, step 1.3, step 4.1, step 5.1, algebra]

7.1 (Scope.) The computation used only: the inertial chart and the adopted guided curves and detector of clauses (ii) and (iii); the rigid-rotation data of the ring cylinder; the proper time and four-velocity suppliers; and the trigonometric suppliers. The adopted guided-signal model is not a consequence of the ideal-light postulate, whose rays are straight; no claim is made about media, apparatus, interference or measurement, and no choice principle was used in any step. [L1, L6, L10, step 2.2, step 4.1, step 5.1, step 6.1] ∎

## Remarks

- **The two differences are distinct quantities.** The detector proper-time difference of (iii) is the difference of the two reunion times of the counter-propagating signals at the emitting material point; the holonomy of (iv) is the synchronization offset accumulated around one circuit of the ring rest lines. They differ by exactly a factor two, and the factor-two relation is proved, not assumed.
- **The ambient Frobenius obstruction is not needed for the delay.** The return-time computation proceeds along the two guided null curves and the single material worldline and uses neither the nonintegrability of the ambient rest distribution nor the local integrability of the cylinder rest lines; those facts serve only to interpret clause (iv).
