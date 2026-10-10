---
id: ex-sr-operational-record-arithmetic-worked
kind: example
domain: physics
title: "Worked instance of the operational vocabulary: an illustrative bounded record for the longitudinal Doppler ratio and its parameter window"
status: draft
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
  - def-sr-regular-causal-curve-and-worldline
  - def-sr-proper-time
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
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
physical_scope: "Worked arithmetic instance inside the flat special-relativity framework: it instantiates the operational vocabulary on the framework's own longitudinal Doppler prediction with a declared, explicitly illustrative record. It asserts no apparatus, no measurement, no calibration correctness, no sampling model, no statistical inference and no empirical support or refutation of the Doppler theorem or of any postulate."
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

## Example

Adopt the SI conventions of [[def-sr-si-units-and-coordinate-conventions]], the vocabulary of [[def-sr-experiment-interface-vocabulary]] and the ideal plane-wave model of [[post-sr-ideal-plane-wave-model]]. Consider the longitudinal configuration of [[pthm-sr-null-wave-doppler-and-aberration]]: inertial charts $x$ and $x'$ whose transition is $x'=B(\beta e_1)\,x$ for a real $\beta\in(-1,1)$, where $B(\cdot)$ is the passive boost of [[def-lorentz-boost]], so that the frame $x'$ moves with velocity $c\beta e_1$ relative to $x$; an ideal emitter history, meaning the $C^\infty$ rest worldline $h:\mathbb R\to A$, $h(\rho)=o+\rho e_0$, with length parameter $\rho$, future unit tangent $e_0$ and proper-time function $\tau_h(\rho)=\rho/c$ based at $0$ (no emission dynamics is stipulated); an ideal plane wave whose frame-$x$ data are $(\omega,s)$ with angular frequency $\omega>0$ and $s=e_1$; and the rest observer of $x'$, whose four-velocity is $c f_0$ for the future unit timelike vector $f_0$ constructed below. By clauses (i) and (ii) of that theorem this observer reads $\omega_o(\beta)=\gamma_\beta(1-\beta)\omega$ with $\gamma_\beta=(1-\beta^2)^{-1/2}$, so the *Doppler ratio* is

$$F(\beta):=\frac{\omega_o(\beta)}{\omega}=\sqrt{\frac{1-\beta}{1+\beta}},\qquad \beta\in(-1,1),$$

the rational power being that of [[def-rational-power]].

(a) Let $S:=\Theta:=(-1,1)$, $\theta:=\mathrm{id}$, let $D(\beta)$ be the run description comprising the inertial charts $x$ and $x'$, the emitter's straight rest curve, the future null wave covector with frame-$x$ data $(\omega,e_1)$ and its affine phase, its proper-time function $\tau_h$, and the observer's rest vector $f_0$ with reception event $o$, and let $F$ be as displayed. Then $M:=(S,\Theta,\theta,D,F)$ is an operational model for the dimensionless ratio $\omega_o/\omega$ in the sense of clause (b) of [[def-sr-experiment-interface-vocabulary]]: condition $(*)$ holds with the prediction supplied by the cited Doppler theorem, and $d=1$. The map $F$ is strictly decreasing on $(-1,1)$, and for every real $r>0$ there is exactly one $\beta\in(-1,1)$ with $F(\beta)=r$, namely

$$\beta(r)=\frac{1-r^2}{1+r^2};$$

consequently $F$ is a strictly decreasing bijection of $(-1,1)$ onto $(0,\infty)$.

(b) Let $z\in(0,1]$ and $\varepsilon\in[0,z)$ be real, so that $0<z-\varepsilon\le z+\varepsilon$, and let $R$ be the declared one-point record with $N=1$, $z_1=z$, $\varepsilon_1=\varepsilon$ and condition annotation "longitudinal Doppler ratio for observer velocity $c\beta e_1$, with signed $\beta\in(-1,1)$ and wave propagation direction $e_1$" in the sense of clause (c) of the vocabulary. Then the set of parameters consistent with $R$ and $M$,

$$C(R,M):=\{\beta\in(-1,1):F(\beta)\in[z-\varepsilon,z+\varepsilon]\},$$

equals the closed interval $[\beta(z+\varepsilon),\beta(z-\varepsilon)]$; it is nonempty, and every element of it satisfies the declared bound of $R$. If $\varepsilon=0$, it is the singleton $\{\beta(z)\}$. If $\varepsilon>0$, its endpoints are strictly ordered and its exact positive length is

$$\beta(z-\varepsilon)-\beta(z+\varepsilon)=\frac{8z\varepsilon}{[1+(z-\varepsilon)^2][1+(z+\varepsilon)^2]}>0.$$

Thus the strict inequality between the record endpoints and the positive-length conclusion apply exactly when the declared uncertainty is positive. The condition annotation fixes collinearity and permits either sign of the velocity, including rest at $\beta=0$: $\beta>0$ means motion along the propagation direction, $\beta<0$ means motion opposite to it. Every parameter in $C(R,M)$ is nonnegative exactly when $z+\varepsilon\le1$, and every parameter is strictly positive exactly when $z+\varepsilon<1$.

(c) Illustrative instance (declared illustrative values, not a measurement report): $z=9/10$ and $\varepsilon=1/100$. Then $\beta(91/100)=1719/18281\approx0.094032$ and $\beta(89/100)=2079/17921\approx0.116009$, and $C(R,M)=[1719/18281,\ 2079/17921]$, an interval of exact length $7200000/327613801$ in $\beta$, whose endpoints satisfy $F(1719/18281)=91/100$ and $F(2079/17921)=89/100$.

(d) Scope. Every number in (c) is a declared illustrative value supplied to instantiate the vocabulary's clauses and their arithmetic; the example asserts no apparatus, no calibration correctness, no measurement, no sampling model, no statistical inference and no empirical support or refutation of the Doppler theorem or of any postulate.

## Facts & Assumptions

**Given:** An inertial frame $(o;e_0,e_1,e_2,e_3)$ of the oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ with its inertial chart $x$, a real number $\omega>0$, real numbers $z\in(0,1]$ and $\varepsilon\in[0,z)$, and the illustrative one-point record $R$ with $N=1$, $z_1=z$, $\varepsilon_1=\varepsilon$ and annotation "longitudinal Doppler ratio for observer velocity $c\beta e_1$, with signed $\beta\in(-1,1)$ and wave propagation direction $e_1$".

[F1] The experimental-interface vocabulary: an operational model is a tuple $M=(S,\Theta,\theta,D,F)$ with $S$ nonempty, $\Theta\subseteq\mathbb R^m$ nonempty, $\theta:S\to\Theta$ surjective, $D$ assigning run descriptions and $F:\Theta\to\mathbb R^d$ a prediction map whose components are required, by the declared interpretation $(*)$, to be numbers the framework assigns to $D(s)$ with every intermediate quantity, frame, event, sign and unit declared; a data record $R=(N,z,\varepsilon,a)$ declares that each value lies in the closed box $\prod_j[z_{k,j}-\varepsilon_{k,j},z_{k,j}+\varepsilon_{k,j}]$ in the declared units ([[def-sr-experiment-interface-vocabulary]]).

[F2] Doppler theorem clauses (i) and (ii): for inertial charts whose transition is $x'=B(\beta)x+b$ with $\beta\in\mathbb R^3$, $|\beta|<1$, the same future null wave covector $k$ with frame-$x$ data $(\omega,s)$ has frame-$x'$ data $(\omega',s')$ with $\omega'=\gamma(1-\beta\cdot s)\omega$, where $\gamma=(1-|\beta|^2)^{-1/2}$; and the rest observers of $x$ and $x'$, of four-velocities $c e_0$ and $c e'_0$, read the angular frequencies $\omega=-c k(e_0)$ and $\omega'=-c k(e'_0)$ ([[pthm-sr-null-wave-doppler-and-aberration]]).

[F3] Observer angular frequency and wave data: the observer of four-velocity $U_o=c n$, with $\eta(n,n)=-1$ and $n$ future, reads $\omega_n:=-c k(n)=-k(U_o)$ in the SI convention $x^0=ct$; a future null wave covector has frame components $k_a=(-\omega/c,(\omega/c)s_1,(\omega/c)s_2,(\omega/c)s_3)$ with $\omega>0$ and $|s|=1$ ([[def-sr-null-wave-covector-and-observer-frequency]]).

[F4] For a covector $k$, the affine phase $p\mapsto k(p-o)$ has differential $k$ by [[def-sr-affine-phase-and-wave-covector]] (a). Frame-data lemma clauses (a),(b),(e): for a future null wave covector in a frame, $\varpi:=-k(e_0)>0$ and $|s|=1$; conversely, a covector whose frame components are $(-\varpi,\varpi s_1,\varpi s_2,\varpi s_3)$ with $\varpi>0$ and $|s|=1$ is a future null wave covector ([[lem-sr-null-covector-frame-data]]).

[F5] Passive boost: for $\beta$ with $|\beta|<1$ the map $B(\beta)$ is defined in an inertial frame's coordinates by $x'^0=\gamma(x^0-\beta\cdot x)$ and $x'=x+((\gamma-1)/|\beta|^2)(\beta\cdot x)\beta-\gamma\beta x^0$ for $\beta\neq0$, with $B(0)$ the identity, so that in the axis case $\beta=\beta e_1$ one has $x'^0=\gamma(x^0-\beta x^1)$, $x'^1=\gamma(x^1-\beta x^0)$ ([[def-lorentz-boost]]); it is a proper orthochronous Lorentz map, $B(\beta)^{-1}=B(-\beta)$, and $B(\beta)e_0=\gamma(e_0-\beta_1 e_1-\beta_2 e_2-\beta_3 e_3)$ ([[lem-boost-is-proper-orthochronous-with-inverse]]).

[F6] The worldline and proper-time definitions are [[def-sr-regular-causal-curve-and-worldline]] and [[def-sr-proper-time]]; in particular a $C^1$ curve with everywhere future timelike derivative is a worldline and its proper time is the integral of $c^{-1}\sqrt{-\eta(h',h')}$. Inertial frame and chart: an inertial frame $(o;e_0,e_1,e_2,e_3)$ consists of an event $o\in A$ and an ordered basis of $V$ that is $\eta$-orthonormal, future and positively oriented; its chart is $x(p)=E^{-1}(p-o)$ with $E(u)=\sum_a u^a e_a$ ([[def-inertial-frame-and-inertial-chart]]).

[A1] Adopted ideal plane-wave model: an ideal monochromatic light wave in vacuum is modeled in any inertial chart by a dimensionless affine phase with future null wave covector, and an ideal observer of four-velocity $U_o=c n$ receiving this wave reads the frequency $\omega_n=-c k(n)$ ([[post-sr-ideal-plane-wave-model]]).

[F7] SI conventions: in every inertial chart $x^0=ct$ with $c>0$ in metres per second, spatial coordinates in metres, and the matrix of $\eta$ equal to $\mathrm{diag}(-1,1,1,1)$ ([[def-sr-si-units-and-coordinate-conventions]]).

[F8] Rational powers and their laws: $a^r:=(a^{1/n})^m$ for $a>0$ and $r=m/n$, and $(a^r)^s=a^{rs}$, $(ab)^r=a^r b^r$, $a^{r+s}=a^r a^s$, $a^r>0$ ([[def-rational-power]], [[lem-rational-power-laws]]).

[F9] Strict monotonicity in the base: for rational $r>0$ the map $a\mapsto a^r$ is strictly increasing on the positive reals ([[lem-rational-power-monotone]] claim 2); and in an ordered field, if $c>0$ then $a<b$ if and only if $ac<bc$ ([[lem-of-sign-rules]] claim 4).

## Verification

**Proof technique:** direct.

1.1 Fix $\omega>0$ and let $k$ be the covector whose frame-$x$ components are $(-\omega/c,\omega/c,0,0)$, so $\varpi=\omega/c>0$ and $s=e_1$ with $|s|=1$; by [F4] the covector $k$ is a future null wave covector with frame-$x$ data $(\omega,e_1)$; equip it with the affine phase $\theta(p):=k(p-o)$, whose differential is $k$. For each real $\beta\in(-1,1)$ put $x':=B(\beta e_1)\circ x$ and $f_a:=B(\beta e_1)^{-1}e_a$; by [F5] the map $B(\beta e_1)$ is proper orthochronous with inverse $B(-\beta e_1)$, and [F5] applied to $-\beta e_1$ gives that $B(-\beta e_1)$ also preserves $\eta$, the future cone and the orientation, so $(f_0,f_1,f_2,f_3)=(B(-\beta e_1)e_0,\dots,B(-\beta e_1)e_3)$ is again $\eta$-orthonormal, future and positively oriented and $(o;f_0,f_1,f_2,f_3)$ is an inertial frame by [F6], with chart $x'$ because $E_f=E\circ B(\beta e_1)^{-1}$ gives $E_f^{-1}(p-o)=x'(p)$. The transition is $x'=B(\beta e_1)x$ with parameter $\beta e_1$ of modulus $|\beta|<1$, so [F2] clause (i) with $s=e_1$ gives the frame-$x'$ data $(\omega',s')$ of the same covector $k$ with $\omega'=\gamma_\beta(1-\beta)\omega$ and $\gamma_\beta=(1-\beta^2)^{-1/2}$, this being the reading of the rest observer of $x'$ by clause (ii); and $\gamma_\beta(1-\beta)=(1-\beta)^{1/2}(1+\beta)^{-1/2}=((1-\beta)/(1+\beta))^{1/2}$ by [F8], the positive square root. Hence the dimensionless ratio $F(\beta):=\omega'/\omega$ equals $((1-\beta)/(1+\beta))^{1/2}$ for every $\beta\in(-1,1)$. [construct, A1, F2, F3, F4, F5, F6, F7, F8]

1.2 The map $F$ is strictly decreasing on $(-1,1)$: for $-1<\beta_a<\beta_b<1$ the difference of the two radicands is $\frac{1-\beta_a}{1+\beta_a}-\frac{1-\beta_b}{1+\beta_b}=\frac{2(\beta_b-\beta_a)}{(1+\beta_a)(1+\beta_b)}>0$, since the numerator and both denominator factors are positive by [F9], and applying the strictly increasing map $u\mapsto u^{1/2}$ of [F9] to the two positive radicands gives $F(\beta_a)>F(\beta_b)$. [F8, F9, algebra]

1.3 For every real $r>0$ the equation $F(\beta)=r$ is equivalent to $\frac{1-\beta}{1+\beta}=r^2$, because $u\mapsto u^{1/2}$ is injective on positives and $(u^{1/2})^2=u$ by [F8]; solving, $\beta=\frac{1-r^2}{1+r^2}=:\beta(r)$, which lies in $(-1,1)$ because $1+\beta(r)=\frac{2}{1+r^2}>0$ and $1-\beta(r)=\frac{2r^2}{1+r^2}>0$; and $F(\beta(r))=r$ again by [F8]. Thus $F$ is a strictly decreasing bijection of $(-1,1)$ onto $(0,\infty)$ with inverse $\beta(\cdot)$, and $\beta(\cdot)$ is itself strictly decreasing on $(0,\infty)$. [F8, F9, algebra]

2.1 Let $S:=\Theta:=(-1,1)$, $\theta:=\mathrm{id}$, and let $D(\beta)$ comprise the frames $x$ and $x'$ with their charts, the real boost parameter $\beta$, the wave covector $k$ with its affine phase, the worldline $h:\mathbb R\to A$, $h(\rho)=o+\rho e_0$, with proper time $\tau_h(\rho)=\rho/c$, and the observer vector $f_0$ with reception event $o$; the worldline is $C^\infty$, its derivative is the future unit vector $e_0$, and the proper-time integral is $c^{-1}\int_0^\rho 1\,du=\rho/c$; then $M=(S,\Theta,\theta,D,F)$ with the map $F$ of step 1.1 is an operational model in the sense of [F1] with $d=1$, because each component of $F(\beta)$ is assigned to $D(\beta)$ by [F2] clauses (i) and (ii) under the adopted idealization [A1], with the frame, sign and unit conventions declared, so condition $(*)$ holds. This is the model claimed in part (a) of the Example. [A1, F1, F2, F6, F7, step 1.1]

2.2 Since $F$ is strictly decreasing with inverse $\beta(\cdot)$ by steps 1.2 and 1.3, $F(\beta)\in[z-\varepsilon,z+\varepsilon]$ holds if and only if $\beta\in[\beta(z+\varepsilon),\beta(z-\varepsilon)]$; the set is nonempty because $z-\varepsilon>0$ puts $z\pm\varepsilon$ in the range $(0,\infty)$ of $F$, and every element of it satisfies the declared bound of the record $R$ because its prediction lies in the declared closed interval, so $C(R,M)=[\beta(z+\varepsilon),\beta(z-\varepsilon)]$ as claimed in part (b). For $\varepsilon=0$ the two endpoints run together and $C(R,M)=\{\beta(z)\}$ by step 1.3, the singleton claimed; for $\varepsilon>0$ we have $0<z-\varepsilon<z+\varepsilon$ and strict decrease of $\beta(\cdot)$ in step 1.3 gives the strict endpoint order $\beta(z-\varepsilon)>\beta(z+\varepsilon)$, with length $\beta(z-\varepsilon)-\beta(z+\varepsilon)=\frac{1-(z-\varepsilon)^2}{1+(z-\varepsilon)^2}-\frac{1-(z+\varepsilon)^2}{1+(z+\varepsilon)^2}=\frac{2(z+\varepsilon)^2-2(z-\varepsilon)^2}{[1+(z-\varepsilon)^2][1+(z+\varepsilon)^2]}=\frac{8z\varepsilon}{[1+(z-\varepsilon)^2][1+(z+\varepsilon)^2]}>0$, where the numerator identity is algebra and the final sign uses $z>0$, $\varepsilon>0$ and the positivity of the two denominator factors by [F9]. For $r>0$, the positive denominator in $\beta(r)=(1-r^2)/(1+r^2)$ shows that $\beta(r)$ is positive, zero or negative according as $r<1$, $r=1$ or $r>1$; because $\beta(z+\varepsilon)$ is the minimum of $C(R,M)$, the whole consistency interval is nonnegative exactly when $z+\varepsilon\le1$ and strictly positive exactly when $z+\varepsilon<1$. These are precisely the sign qualifications in part (b); no sign restriction is imposed by its signed-velocity annotation. [F1, F8, F9, step 1.2, step 1.3, algebra]

3.1 For the illustrative values $z=9/10$ and $\varepsilon=1/100$ we have $z+\varepsilon=91/100$ and $z-\varepsilon=89/100$, so by step 1.3 $\beta(91/100)=\frac{1-8281/10000}{1+8281/10000}=\frac{1719}{18281}$ and $\beta(89/100)=\frac{1-7921/10000}{1+7921/10000}=\frac{2079}{17921}$, both in $(-1,1)$, and $F(\beta(91/100))=91/100$, $F(\beta(89/100))=89/100$; the consistency set is $[1719/18281,2079/17921]$ by step 2.2, and its length is $\frac{8\cdot(9/10)\cdot(1/100)}{[1+7921/10000][1+8281/10000]}=\frac{7200000}{327613801}$ by step 2.2, using $17921\cdot18281=327613801$. This is exact rational arithmetic on declared illustrative values; no measurement, probability model, sampling assumption or statistical inference is used. [F8, step 1.3, step 2.2, algebra] ∎
