---
id: cex-sr-bounded-record-does-not-identify-the-parameter
kind: counterexample
domain: physics
title: "Counterexample: a bounded one-point record need not determine the parameter of an operational model"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
deps:
  - def-sr-experiment-interface-vocabulary
  - pthm-sr-null-wave-doppler-and-aberration
  - def-sr-null-wave-covector-and-observer-frequency
  - def-lorentz-boost
  - def-inertial-frame-and-inertial-chart
  - def-rational-power
  - lem-rational-power-monotone
  - lem-rational-power-laws
  - lem-of-sign-rules
  - def-sr-si-units-and-coordinate-conventions
  - post-sr-ideal-plane-wave-model
  - lem-sr-null-covector-frame-data
  - def-sr-affine-phase-and-wave-covector
  - lem-boost-is-proper-orthochronous-with-inverse
dependency_roles:
  def-sr-experiment-interface-vocabulary: formulation-prerequisite
  pthm-sr-null-wave-doppler-and-aberration: physical-result
  def-sr-null-wave-covector-and-observer-frequency: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-monotone: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  lem-of-sign-rules: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  post-sr-ideal-plane-wave-model: physical-assumption
  lem-sr-null-covector-frame-data: mathematical-premise
  def-sr-affine-phase-and-wave-covector: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
physical_scope: "Conceptual counterexample inside the flat special-relativity framework: it shows that a declared bounded record of the operational vocabulary need not determine a unique parameter of an operational model, using the framework's own Doppler prediction and declared illustrative values. It asserts no measurement, no statistical inference and no empirical conclusion about any model or postulate."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages; the author's lightandmatter.com page links this Archive upload); signature (+---) converted to (-+++) and c = 1 formulas restored to x^0 = c t; Sections 1.3 'Measurement' and 1.4 'The Lorentz transformation', pp. 23-31 (operational definition of time, the metric, time dilation) and Sections 3.2-3.3 pp. 55-59 (the stretch factor as Doppler shift)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special Relativity and Flat Spacetime' printed pp. 1-5: the operational construction of an inertial coordinate system, the definition of an event, the interval and the metric"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
proof_strategy: direct
dependency_level: 17
---

## Statement refuted

A declared one-point data record of the vocabulary with positive declared uncertainty determines the parameter of an operational model uniquely: if a record $R$ of clause (c) of [[def-sr-experiment-interface-vocabulary]] is consistent with two parameters $\beta_1,\beta_2$ of one operational model $M$, then $\beta_1=\beta_2$.

## Facts & Assumptions

**Given:** An inertial frame $(o;e_0,e_1,e_2,e_3)$ of the oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ with its inertial chart $x$, a real number $\omega>0$, and the illustrative record $R$ with $N=1$, $z_1=9/10$, $\varepsilon_1=1/100$ and annotation "longitudinal Doppler ratio of the moving observer in the propagation direction". These are declared illustrative values, not measurements.

[F1] The experimental-interface vocabulary: an operational model is a tuple $M=(S,\Theta,\theta,D,F)$ with $S$ nonempty, $\Theta\subseteq\mathbb R^m$ nonempty, $\theta:S\to\Theta$ surjective, $D$ assigning run descriptions and $F:\Theta\to\mathbb R^d$ a prediction map whose components are required, by the declared interpretation $(*)$, to be numbers the framework assigns to $D(s)$ with every intermediate quantity, frame, event, sign and unit declared; a data record $R=(N,z,\varepsilon,a)$ declares that each value lies in the closed box $\prod_j[z_{k,j}-\varepsilon_{k,j},z_{k,j}+\varepsilon_{k,j}]$ in the declared units; and clause (f) makes a consistency or comparison claim between a record and a model a separate claim requiring an explicitly declared comparison rule ([[def-sr-experiment-interface-vocabulary]]).

[F2] Doppler theorem clauses (i) and (ii): for inertial charts whose transition is $x'=B(\beta)x+b$ with $\beta\in\mathbb R^3$, $|\beta|<1$, the same future null wave covector $k$ with frame-$x$ data $(\omega,s)$ has frame-$x'$ data $(\omega',s')$ with $\omega'=\gamma(1-\beta\cdot s)\omega$, where $\gamma=(1-|\beta|^2)^{-1/2}$; and the rest observers of $x$ and $x'$, of four-velocities $c e_0$ and $c e'_0$, read the angular frequencies $\omega=-c k(e_0)$ and $\omega'=-c k(e'_0)$ ([[pthm-sr-null-wave-doppler-and-aberration]]).

[F3] Observer angular frequency and wave data: the observer of four-velocity $U_o=c n$, with $\eta(n,n)=-1$ and $n$ future, reads $\omega_n:=-c k(n)=-k(U_o)$ in the SI convention $x^0=ct$; a future null wave covector has frame components $k_a=(-\omega/c,(\omega/c)s_1,(\omega/c)s_2,(\omega/c)s_3)$ with $\omega>0$ and $|s|=1$ ([[def-sr-null-wave-covector-and-observer-frequency]]).

[F4] For a covector $k$, the affine phase $p\mapsto k(p-o)$ has differential $k$ by [[def-sr-affine-phase-and-wave-covector]] (a). Frame-data lemma clauses (a),(b),(e): for a future null wave covector in a frame, $\varpi:=-k(e_0)>0$ and $|s|=1$; conversely, a covector whose frame components are $(-\varpi,\varpi s_1,\varpi s_2,\varpi s_3)$ with $\varpi>0$ and $|s|=1$ is a future null wave covector ([[lem-sr-null-covector-frame-data]]).

[F5] Passive boost: for $\beta$ with $|\beta|<1$ the map $B(\beta)$ is defined in an inertial frame's coordinates by $x'^0=\gamma(x^0-\beta\cdot x)$ and $x'=x+((\gamma-1)/|\beta|^2)(\beta\cdot x)\beta-\gamma\beta x^0$ for $\beta\neq0$, with $B(0)$ the identity, so that in the axis case $\beta=\beta e_1$ one has $x'^0=\gamma(x^0-\beta x^1)$, $x'^1=\gamma(x^1-\beta x^0)$ ([[def-lorentz-boost]]); it is a proper orthochronous Lorentz map, $B(\beta)^{-1}=B(-\beta)$, and $B(\beta)e_0=\gamma(e_0-\beta_1 e_1-\beta_2 e_2-\beta_3 e_3)$ ([[lem-boost-is-proper-orthochronous-with-inverse]]).

[F6] Inertial frame and chart: an inertial frame $(o;e_0,e_1,e_2,e_3)$ consists of an event $o\in A$ and an ordered basis of $V$ that is $\eta$-orthonormal, future and positively oriented; its chart is $x(p)=E^{-1}(p-o)$ with $E(u)=\sum_a u^a e_a$ ([[def-inertial-frame-and-inertial-chart]]).

[A1] Adopted ideal plane-wave model: an ideal monochromatic light wave in vacuum is modeled in any inertial chart by a dimensionless affine phase with future null wave covector, and an ideal observer of four-velocity $U_o=c n$ receiving this wave reads the frequency $\omega_n=-c k(n)$ ([[post-sr-ideal-plane-wave-model]]).

[F7] SI conventions: in every inertial chart $x^0=ct$ with $c>0$ in metres per second, spatial coordinates in metres, and the matrix of $\eta$ equal to $\mathrm{diag}(-1,1,1,1)$ ([[def-sr-si-units-and-coordinate-conventions]]).

[F8] Rational powers and their laws: $a^r:=(a^{1/n})^m$ for $a>0$ and $r=m/n$, and $(a^r)^s=a^{rs}$, $(ab)^r=a^r b^r$, $a^{r+s}=a^r a^s$, $a^r>0$ ([[def-rational-power]], [[lem-rational-power-laws]]).

[F9] Strict monotonicity in the base: for rational $r>0$ the map $a\mapsto a^r$ is strictly increasing on the positive reals ([[lem-rational-power-monotone]] claim 2); and in an ordered field, if $c>0$ then $a<b$ if and only if $ac<bc$ ([[lem-of-sign-rules]] claim 4).

## Counterexample

**Proof technique:** direct.

1.1 Fix $\omega>0$ and let $k$ be the covector whose frame-$x$ components are $(-\omega/c,\omega/c,0,0)$, so $\varpi=\omega/c>0$ and $s=e_1$ with $|s|=1$; by [F4] the covector $k$ is a future null wave covector with frame-$x$ data $(\omega,e_1)$; equip it with the affine phase $\theta(p):=k(p-o)$, whose differential is $k$. For each real $\beta\in(-1,1)$ put $x':=B(\beta e_1)\circ x$ and $f_a:=B(\beta e_1)^{-1}e_a$; by [F5] the map $B(\beta e_1)$ is proper orthochronous with inverse $B(-\beta e_1)$, and [F5] applied to $-\beta e_1$ gives that $B(-\beta e_1)$ also preserves $\eta$, the future cone and the orientation, so the ordered basis $(f_0,f_1,f_2,f_3)=(B(-\beta e_1)e_0,\dots,B(-\beta e_1)e_3)$ is again $\eta$-orthonormal, future and positively oriented and $(o;f_0,f_1,f_2,f_3)$ is an inertial frame by [F6]; its chart is $x'$, because the frame isomorphism $E_f=E\circ B(\beta e_1)^{-1}$ gives $E_f^{-1}(p-o)=B(\beta e_1)(E^{-1}(p-o))=x'(p)$, and $f_0$ is future unit timelike. [construct, F4, F5, F6, F7]

1.2 The transition between the inertial charts $x$ and $x'$ is $x'=B(\beta e_1)x$ with parameter $\beta e_1$ of modulus $|\beta|<1$; [F2] clause (i) with $s=e_1$ therefore gives the frame-$x'$ data $(\omega',s')$ of the same covector $k$ with $\omega'=\gamma_\beta(1-\beta)\omega$, where $\gamma_\beta=(1-\beta^2)^{-1/2}$; and $\gamma_\beta(1-\beta)=(1-\beta)^{1/2}(1+\beta)^{-1/2}=((1-\beta)/(1+\beta))^{1/2}$ by [F8], so the dimensionless ratio $F(\beta):=\omega'/\omega$ is the positive real number displayed. [F2, F8, algebra]

1.3 The map $F$ is strictly decreasing on $(-1,1)$: for $-1<\beta_a<\beta_b<1$ the difference of the two radicands is $\frac{1-\beta_a}{1+\beta_a}-\frac{1-\beta_b}{1+\beta_b}=\frac{2(\beta_b-\beta_a)}{(1+\beta_a)(1+\beta_b)}>0$, since the numerator and both denominator factors are positive by [F9], and applying the strictly increasing map $u\mapsto u^{1/2}$ of [F9] to that positive difference gives $F(\beta_a)>F(\beta_b)$. [F8, F9, algebra]

1.4 For every real $r>0$ the equation $F(\beta)=r$ is equivalent to $\frac{1-\beta}{1+\beta}=r^2$, because $u\mapsto u^{1/2}$ is injective on positives and $(u^{1/2})^2=u$ by [F8]; solving, $\beta=\frac{1-r^2}{1+r^2}=:\beta(r)$, which lies in $(-1,1)$ because $1+\beta(r)=\frac{2}{1+r^2}>0$ and $1-\beta(r)=\frac{2r^2}{1+r^2}>0$; and $F(\beta(r))=r$ again by [F8]. Thus $F$ is a strictly decreasing bijection of $(-1,1)$ onto $(0,\infty)$ with inverse $\beta(\cdot)$. [F8, F9, algebra]

2.1 Let $S:=\Theta:=(-1,1)$, $\theta:=\mathrm{id}$, and let $D(\beta)$ be the finite run description comprising the frames $x$ and $x'$ with their charts, the real boost parameter $\beta$, the wave covector $k$ with its affine phase, and the observer vector $f_0$ with reception event $o$; let $F$ be the map of step 1.2. Then $M=(S,\Theta,\theta,D,F)$ is an operational model in the sense of [F1] with $d=1$: each component of $F(\beta)$ is the rest-observer frequency ratio $F(\beta)=-c\,k(f_0)/\omega$ in the sense of [F3], assigned to $D(\beta)$ by clauses (i) and (ii) of [F2] under the adopted idealization [A1], with the frame, sign and unit conventions declared, so condition $(*)$ holds. [A1, F1, F2, F3, step 1.2]

2.2 Declare the comparison rule that a parameter $\beta$ is consistent with the one-point record $R$ exactly when its prediction $F(\beta)$ lies in the record's declared closed interval $[z_1-\varepsilon_1,z_1+\varepsilon_1]$; by [F1] clause (f) such a rule must be declared separately, and this is the declared rule of the present algebraic reading. By strict decrease and the inverse of steps 1.3 and 1.4, the consistency set is $C(R,M)=\{\beta\in(-1,1):F(\beta)\in[z_1-\varepsilon_1,z_1+\varepsilon_1]\}=[\beta(z_1+\varepsilon_1),\beta(z_1-\varepsilon_1)]$, a nonempty closed interval. [F1, step 1.3, step 1.4]

3.1 With $z_1=9/10$ and $\varepsilon_1=1/100$ the declared interval is $[89/100,91/100]$, and the two distinct parameters $\beta_1:=\beta(91/100)=1719/18281$ and $\beta_2:=\beta(89/100)=2079/17921$ satisfy $F(\beta_1)=91/100$ and $F(\beta_2)=89/100$ by step 1.4, hence both lie in $C(R,M)$; they are distinct because $\beta_2-\beta_1=\frac{2079\cdot18281-1719\cdot17921}{17921\cdot18281}=\frac{7200000}{327613801}>0$, the denominator being positive and the numerator a positive integer difference. Since $R$ is a one-point data record of [F1] clause (c) with positive declared uncertainty, the uniqueness assertion of the Statement refuted is false: a declared bounded one-point record need not determine the parameter of an operational model. This is an algebraic consistency computation on declared illustrative values; it asserts no measurement, calibration, probability model, statistical inference or empirical conclusion about any model or postulate. [F1, F8, F9, step 1.4, algebra] ∎
