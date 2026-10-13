---
id: ex-gr-cosmological-redshift-interface-record-window
kind: example
title: "Worked instance of the interface vocabulary on the cosmological redshift slot: an explicit de Sitter ray family, an operational model and the exact window of an illustrative bounded record"
status: published
origin: session
domain: physics
physical_scope: "Worked instance inside the classical gravitational framework: it instantiates the model-configuration, readout and operational-model clauses of the experiment interface on the framework's cosmological redshift prediction for the flat vacuum de Sitter solution with $a(t)=A\\exp(H(t-t_0))$ and $\\Lambda=3H^2/c^2$, using the explicit future null geodesic family of the example's verification and an explicitly illustrative one-point record. It asserts no measurement, no apparatus, no calibration correctness, no sampling model, no statistical inference and no empirical support or refutation of the model or of any postulate; every numerical value in the record is declared illustrative, and the model is adopted only as a hypothetical solution of the framework's postulates."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observation-and-analysis-architecture, pthm-gr-flrw-cosmological-redshift, pthm-gr-flrw-de-sitter-solutions, post-gr-flrw-homogeneous-cosmological-model, def-gr-flrw-model-data, def-gr-si-unit-and-coordinate-conventions, lem-gr-flrw-metric-and-comoving-data, lem-gr-flrw-christoffel-symbols, def-gr-metric-selected-connection, def-geodesic-of-an-affine-connection, prop-coordinate-geodesic-equation, def-gr-observer-relative-energy-and-momentum, def-causal-classification-of-lorentz-vectors, def-gr-smooth-lorentzian-objects, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, post-gr-ideal-clocks-and-free-fall, lem-gr-reciprocal-ratio-window, def-real-exponential-function-and-e, thm-derivative-of-exponential, def-natural-logarithm, thm-logarithm-derivative-and-integral, def-derivative, thm-algebra-of-derivatives, thm-chain-rule]
dependency_roles:
  def-gr-observation-and-analysis-architecture: formulation-prerequisite
  pthm-gr-flrw-cosmological-redshift: physical-result
  pthm-gr-flrw-de-sitter-solutions: physical-result
  post-gr-flrw-homogeneous-cosmological-model: physical-assumption
  def-gr-flrw-model-data: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  lem-gr-flrw-metric-and-comoving-data: mathematical-premise
  lem-gr-flrw-christoffel-symbols: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  def-gr-observer-relative-energy-and-momentum: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  lem-gr-reciprocal-ratio-window: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8 (8.61)-(8.67): the conserved quantity along null geodesics, the frequency ratio omega_0/omega_1 = a_1/a_0 and the redshift definition z = a_0/a_1 - 1, printed pp. 228-229 (PDF pp. 235-236); Ch. 8 (8.1)-(8.7) on the FLRW metric and the comoving family, printed pp. 217-219 (PDF pp. 224-226)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019 revision), section 1.1.3: radial null paths in the FRW metric and cosmological redshift from emitted and observed wave-crest intervals, equations (1.18)-(1.21), printed pp. 13-15"
      url: "https://davidtong.org/pdfs/teaching/cosmology/cosmo1.pdf"
verification:
  precheck: pass
dependency_level: 17
---

## Example

Fix real constants $c>0$, $A>0$, $H>0$, $t_0\in\mathbb R$, $r_0\in\mathbb R$ and
use the FLRW unit convention of [[def-gr-flrw-model-data]]: $c$ is measured in
$\mathrm{m\,s^{-1}}$, $A$ and $a(t)$ in metres, $H$ in $\mathrm{s^{-1}}$,
$t,t_0$ in seconds, and the standard Euclidean spatial coordinates and $r_0$
are dimensionless. Choose the affine parameter $s$ in seconds. Scale-factor
values such as $a_E$ and $a_R$ are in metres, while the redshift values are
dimensionless. Thus
$H(t-t_0)$ and $Hs$ are dimensionless, and $c/(AH^2s)$ is dimensionless; in
particular $a_E/(AH)$ has units of seconds and the logarithm below has a
positive dimensionless argument. Set the model's cosmological parameter to
$\Lambda:=3H^2/c^2>0$, with SI dimension $\mathrm{m^{-2}}$ under
[[def-gr-si-unit-and-coordinate-conventions]]. Adopt the homogeneous
cosmological model of
[[post-gr-flrw-homogeneous-cosmological-model]] in its vacuum sector, with the
FLRW model datum $(I,\Sigma,\gamma,k,a)$ given by $I=\mathbb R$, the standard
Euclidean $\mathbb R^3$ in its standard coordinates, $k=0$ and
$a(t):=A\exp\bigl(H(t-t_0)\bigr)$ ([[def-gr-flrw-model-data]]). Let $g$ be the
metric, $\nabla$ its metric-selected connection, $n=c^{-1}\partial_t$ the
comoving congruence and $\gamma_x(t):=(t,x)$ the comoving worldline through
$x\in\mathbb R^3$ ([[lem-gr-flrw-metric-and-comoving-data]],
[[def-gr-metric-selected-connection]]). The point of the example is the
interface arithmetic of
[[def-gr-observation-and-analysis-architecture]], not the datum. For this
$\Lambda$, [[pthm-gr-flrw-de-sitter-solutions]] applies with
$H_\Lambda=c\sqrt{\Lambda/3}=H$ and establishes that the displayed flat,
vacuum FLRW datum satisfies the adopted field law; this remains a hypothetical
model construction and supplies no observational claim.

**(a) An explicit ray family.** For $s\in(0,\infty)$ define

$$\eta(s):=\Bigl(t_0+\frac1H\log(Hs),\ \Bigl(r_0+\frac{c}{AH^2s},\,0,\,0\Bigr)\Bigr).$$

Then $\eta$ is a smooth curve in $M=\mathbb R\times\mathbb R^3$; its tangent
$W=\eta'$ has components

$$W^t(s)=\frac{1}{Hs}>0,\qquad W^1(s)=-\frac{c}{AH^2s^2},\qquad W^2(s)=W^3(s)=0,$$

and $W$ is future-directed and null; moreover $\eta$ is a geodesic with affine
parameter $s$, and along it

$$a\bigl(t(s)\bigr)=AHs .$$

By clause (iii) of [[post-gr-ideal-clocks-and-free-fall]] the model assigns
$\eta$ to an ideal light ray.

**(b) The operational model.** Let $s_R>0$ and put $t_R:=t(s_R)$,
$p_R:=\eta(s_R)$, $a_R:=a(t_R)=AHs_R$. For each $a_E\in(0,a_R)$ put
$s_E:=a_E/(AH)$, $t_E:=t(s_E)$ and $p_E:=\eta(s_E)$. Define
$S:=\Theta:=(0,a_R)$, $\theta:=\mathrm{id}$, and let $D(a_E)$ be the model
configuration of clause (a) of [[def-gr-observation-and-analysis-architecture]]
whose entries are: the comoving congruence $n$; the comoving receiver worldline
through $p_R$ and the comoving emitter worldline through $p_E$, each
parametrized by cosmic time; the ray $\eta$ with the parameter values
$s_E<s_R$ and the events $p_E=\eta(s_E)$, $p_R=\eta(s_R)$; and the annotation
declaring that the readout to be computed is the redshift readout of clause
(b)1; the ambient datum, metric and connection are those of the Example. Let
$F:\Theta\to(0,\infty)$ be that redshift readout itself, $F(a_E):=z(a_E)$. Then
$M_{\mathrm{op}}:=(S,\Theta,\theta,D,F)$ is an operational model for the
redshift readout $z$ in the sense of clause (c) of
[[def-gr-observation-and-analysis-architecture]] with the prediction

$$F(a_E)=\frac{a_R}{a_E}-1=\frac{s_R}{s_E}-1,$$

and $F$ is a strictly decreasing bijection of $(0,a_R)$ onto $(0,\infty)$.

**(c) An illustrative record and its exact window.** Declare the one-point data
record $R$ of clause (d) of [[def-gr-observation-and-analysis-architecture]]
with $N=1$, $d=1$, $z_1=5/8$ and $\varepsilon_1=1/8$, and with condition
annotation "cosmological redshift readout of the de Sitter configuration with
fixed $a_R$", so that the record's declared closed box is
$[z_1-\varepsilon_1,z_1+\varepsilon_1]=[1/2,3/4]$;
these are *declared illustrative values*, not a measurement, and the condition
annotation identifies them as such. Declare the comparison rule of clause (g)
of [[def-gr-observation-and-analysis-architecture]] that a parameter
$a_E\in\Theta$ is *consistent* with $R$ exactly when $z(a_E)=F(a_E)$ lies in
the record's closed box $[1/2,3/4]$, equivalently when
$1+z(a_E)=a_R/a_E\in[3/2,7/4]$. Then the consistency set is

$$C(R,M_{\mathrm{op}})=\Bigl[\frac{a_R}{7/4},\ \frac{a_R}{3/2}\Bigr]=\Bigl[\frac47a_R,\ \frac23a_R\Bigr],$$

a nonempty closed interval of exact length $\frac{2}{21}a_R$; its endpoints
satisfy $F(4a_R/7)=7/4-1=3/4$ and $F(2a_R/3)=3/2-1=1/2$, and both lie strictly
inside $(0,a_R)$. For the declared illustrative normalisation $a_R=1$ in the
length unit of the datum the window is $[4/7,2/3]$ with length $2/21$ in that
unit.

**(d) Scope.** Every number in (c) is a declared illustrative value supplied to
instantiate the vocabulary; the example asserts no apparatus, no calibration
correctness, no measurement, no sampling model, no statistical inference and no
empirical support or refutation of the cosmological redshift theorem or of any
postulate. The model of (b) is the hypothetical flat vacuum de Sitter solution with the
declared parameter $\Lambda=3H^2/c^2$, as verified by [A2]; no observation or
reported dataset enters.

## Facts & Assumptions

**Given:** The constants $c>0$, $A>0$, $H>0$, $t_0,r_0\in\mathbb R$; the FLRW datum of the Example with $I=\mathbb R$, the standard Euclidean $\mathbb R^3$, $k=0$ and $a(t)=A\exp(H(t-t_0))$; its metric $g=-c^2dt^2+a(t)^2\gamma$ in the product chart $(t,x^1,x^2,x^3)$, its metric-selected connection $\nabla$ and comoving congruence $n=c^{-1}\partial_t$; the curve $\eta$ of (a) with tangent $W$; the declared constants $s_R>0$, $a_R=AHs_R$ and, for each $a_E\in(0,a_R)$, the values $s_E=a_E/(AH)$ and events $p_E,p_R$; and the declared illustrative record $R$ and comparison rule of (c).

[A1] Adopted model: the spacetime geometry of the homogeneous cosmological model is an FLRW model datum with metric $g=-c^2dt^2+a(t)^2\gamma$ and comoving congruence $n=c^{-1}\partial_t$, and in the vacuum sector no matter is present ([[post-gr-flrw-homogeneous-cosmological-model]] clauses (i) and (ii)). The ideal light-ray rule is clause (iii) of [[post-gr-ideal-clocks-and-free-fall]]: ideal light rays are future null geodesics.

[A2] The declared cosmological parameter is $\Lambda=3H^2/c^2>0$, so $H_\Lambda:=c\sqrt{\Lambda/3}=H$ because $H,c>0$. The flat vacuum de Sitter result [[pthm-gr-flrw-de-sitter-solutions]] clause (a), applied with this $\Lambda$, $I=\mathbb R$, $k=0$, $A>0$, and $t_0\in\mathbb R$, establishes that the FLRW datum of the Example satisfies the adopted field law.

[L1] In the product chart the Christoffel symbols of $\nabla$ are $\Gamma^0{}_{ij}=(a\dot a/c^2)\gamma_{ij}$, $\Gamma^i{}_{0j}=\Gamma^i{}_{j0}=(\dot a/a)\delta^i{}_j$ and $\Gamma^i{}_{jk}={}^{(3)}\Gamma^i{}_{jk}$, all others zero; on the standard Euclidean $\mathbb R^3$ one has $\gamma_{ij}=\delta_{ij}$ and ${}^{(3)}\Gamma^i{}_{jk}=0$, so with $\dot a=Ha$ the nonzero symbol families are $\Gamma^0{}_{ij}=Ha^2\delta_{ij}/c^2$ and $\Gamma^i{}_{0j}=\Gamma^i{}_{j0}=H\delta^i{}_j$ ([[lem-gr-flrw-christoffel-symbols]], [[def-gr-metric-selected-connection]]).

[L2] A smooth curve is a geodesic with affine parameter $s$ exactly when, in a chart, $\dot V^a+\sum_{b,c}\Gamma^a{}_{bc}V^bV^c=0$ for $a=0,1,2,3$ on every parameter subinterval lying in the chart, where $V$ is the tangent ([[def-geodesic-of-an-affine-connection]], [[prop-coordinate-geodesic-equation]]).

[L3] The metric components in the product chart are $g_{00}=-c^2$, $g_{0i}=0$, $g_{ij}=a(t)^2\gamma_{ij}$; a nonzero causal vector is future-directed exactly when $g(V,\partial_t)<0$, and a nonzero vector is null exactly when $g(V,V)=0$; the comoving curve $\gamma_x(t)=(t,x)$ is a future timelike worldline with four-velocity $U=\partial_t=cn$, $g(U,U)=-c^2$, and its parameter $t$ is its proper time up to an additive constant ([[lem-gr-flrw-metric-and-comoving-data]] clauses (a)-(b), [[def-gr-timelike-worldline-and-proper-time]], [[lem-gr-proper-time-reparametrization-and-four-velocity]], [[def-causal-classification-of-lorentz-vectors]], [[def-gr-smooth-lorentzian-objects]]).

[L4] The exponential is smooth on $\mathbb R$ with $\exp'=\exp$, the natural logarithm is differentiable on $(0,\infty)$ with $\log'(\xi)=1/\xi$ and $\exp(\log \xi)=\xi$, and the chain and product rules apply ([[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], [[def-derivative]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]]).

[L5] Redshift theorem: for the adopted model with an FLRW datum and a future null geodesic $\eta:J\to M$ on which the observer energies $E(s)=-c\,g_{\eta(s)}(V(s),n(\eta(s)))$, $V=\eta'$, $n=c^{-1}\partial_t$, satisfy $E(s)>0$, and for $s_E<s_R$, one has $E(s_R)/E(s_E)=a(t_E)/a(t_R)$ and, with $1+z:=E(s_E)/E(s_R)$, $1+z=a(t_R)/a(t_E)$ ([[pthm-gr-flrw-cosmological-redshift]] clauses (b)-(c)).

[L6] Interface vocabulary: a readout is defined for a model configuration carrying the required entries; an operational model is a tuple $(S,\Theta,\theta,D,F)$ with $F$ subject to the interpretation $(*)$; a data record declares that the readout lies in the closed box $\prod_j[z_{1,j}-\varepsilon_{1,j},z_{1,j}+\varepsilon_{1,j}]$ and contains no probability space, sampling law or coverage statement; and a comparison claim requires a separately declared rule ([[def-gr-observation-and-analysis-architecture]] clauses (b)1, (c), (d), (g)).

[L7] The observer energy of clause (a) of [[def-gr-observer-relative-energy-and-momentum]] for the unit observer $U/c$ is $E=-c\,g(W,U/c)=-g(W,U)$; for the comoving worldlines $U=\partial_t$ this is $-g(W,\partial_t)$.

[L8] Reciprocal ratio windows: for $a_*>0$ the map $u\mapsto a_*/u$ has strictly decreasing inverse $a\mapsto a_*/a$, and for $0<u_1\le u_2$ the preimage of $[u_1,u_2]$ is $[a_*/u_2,a_*/u_1]$, an interval of length $a_*(u_2-u_1)/(u_1u_2)$ ([[lem-gr-reciprocal-ratio-window]] claims 2-4).

## Verification

1.1 (The ray family.) The quotient rule in [L4], starting from $(\xi)'=1$ and $(1)'=0$ directly from the difference quotient, gives $(\xi^{-m})'=-m\xi^{-m-1}$ for every integer $m\ge1$ by induction using products of $\xi^{-1}$. Consequently $\log^{(m)}(\xi)=(-1)^{m-1}(m-1)!\xi^{-m}$ for every $m\ge1$, starting from $\log'(\xi)=1/\xi$. Each derivative is continuous on $(0,\infty)$: the rational powers in this formula are differentiable by the same quotient rule, and differentiability implies continuity because $f(\xi+h)-f(\xi)=h\bigl(f'(\xi)+o(1)\bigr)$ as $h\to0$. Thus $\log$ is smooth there. Repeated chain and algebra rules now show that the curve $\eta$ is smooth on $(0,\infty)$ with the displayed tangent components $W^t=1/(Hs)$, $W^1=-c/(AH^2s^2)$ and $W^2=W^3=0$; by [L4], $a(t(s))=A\exp\bigl(H(t(s)-t_0)\bigr)=A\cdot Hs$ for every $s>0$. Hence $a(t(s))W^1(s)=AHs\cdot(-c/(AH^2s^2))=-c/(Hs)=-cW^t(s)$, so $a^2(W^1)^2=c^2(W^t)^2$ and, with $W^2=W^3=0$, the pairing $g(W,W)=-c^2(W^t)^2+a^2(W^1)^2$ vanishes; since $W^t>0$, [L3] gives $g(W,\partial_t)=-c^2W^t<0$, so $W$ is future-directed and null. For the geodesic equations, the nonzero symbol families of [L1] are $\Gamma^0{}_{ij}=Ha^2\delta_{ij}/c^2$ and $\Gamma^i{}_{0j}=\Gamma^i{}_{j0}=H\delta^i{}_j$; since $W^2=W^3=0$, only $\Gamma^0{}_{11}$ contributes to the time equation, and the symmetric mixed terms contribute twice to each spatial equation: the $t$-equation of [L2] reads $\dot W^t+\frac{Ha^2}{c^2}(W^1)^2=0$, and by [L4] and $a(t(s))=AHs$ its two terms are $-1/(Hs^2)$ and $\frac{H(AHs)^2}{c^2}\cdot\frac{c^2}{A^2H^4s^4}=1/(Hs^2)$; the $x^1$-equation reads $\dot W^1+2HW^tW^1=0$, and by [L4] its terms are $2c/(AH^2s^3)$ and $-2c/(AH^2s^3)$; the $x^2$- and $x^3$-equations read $\dot W^2+2HW^tW^2=0$ and $\dot W^3+2HW^tW^3=0$ and hold because $W^2=W^3=0$. All equations hold on $(0,\infty)$, so [L2] makes $\eta$ a geodesic with affine parameter $s$, and [A1] assigns it to an ideal light ray. [A1, L1, L2, L3, L4, algebra]

2.1 (The operational model and its prediction.) For every $a_E\in(0,a_R)$ the tuple $D(a_E)$ of (b) is a model configuration in the sense of clause (a) of [L6]: its worldline entries are the comoving curves through $p_E$ and $p_R$, which by [L3] are $C^\infty$ future timelike worldlines with four-velocity $\partial_t$ and proper time equal to the cosmic-time parameter up to the additive constant of the clock zero; its observer entry is the comoving congruence $n$; its ray entry is $\eta$ with the parameter values $s_E=a_E/(AH)<s_R$ and the incidence conditions $p_E=\eta(s_E)=\gamma_{\vec x_E}(t_E)$, $p_R=\eta(s_R)=\gamma_{\vec x_R}(t_R)$; and its annotation declares the redshift readout of clause (b)1 of [L6]. By [A2] the ambient datum is a solution of the adopted flat vacuum cosmological model. The sets $S=\Theta=(0,a_R)$ are nonempty and $\theta=\mathrm{id}$ is surjective. For the readout, [L7] identifies the observer energies of clause (b)1 of [L6] with those of [L5] because $U_E=U_R=\partial_t$ and $n=\partial_t/c$; by step 1.1 the ray is a future null geodesic with $s_E<s_R$, so [L5] applies and gives $1+F(a_E)=1+z=E_E/E_R=a(t_R)/a(t_E)=AHs_R/(AHs_E)=a_R/a_E$, where the use of $F$ as the redshift readout is the declaration of (b) and the last equality uses $s_E=a_E/(AH)$ and $a_R=AHs_R$; hence $F(a_E)=a_R/a_E-1$. By [L8], $a_E\mapsto a_R/a_E$ is strictly decreasing, and subtracting $1$ preserves strict decrease, so $F$ is strictly decreasing on $(0,a_R)$. For each $y>0$, $a_E=a_R/(1+y)$ lies in $(0,a_R)$ and satisfies $F(a_E)=y$; conversely, solving $F(a_E)=y$ gives this unique value. Thus $F:(0,a_R)\to(0,\infty)$ is a bijection with inverse $F^{-1}(y)=a_R/(1+y)$, as asserted in (b). Hence each component of $F$ is the value the framework assigns to the declared redshift readout of $D(a_E)$, that is, condition $(*)$ of [L6] holds, and $M_{\mathrm{op}}$ is an operational model with $d=1$ for the redshift readout $z$. [A2, L3, L5, L6, L7, L8, step 1.1, algebra]

3.1 (The consistency window.) The declared record of (c) has closed box $[1/2,3/4]$ on the redshift readout $z$, and the declared comparison rule asks for $\{a_E\in(0,a_R):z(a_E)\in[1/2,3/4]\}$, equivalently, since $z(a_E)=F(a_E)=a_R/a_E-1$ by step 2.1, for the preimage under the map $a_E\mapsto a_R/a_E$ of $[3/2,7/4]$. Applying [L8] with $a_*=a_R$, $u_1=3/2$, $u_2=7/4$ gives $C(R,M_{\mathrm{op}})=[a_R/(7/4),a_R/(3/2)]=[4a_R/7,2a_R/3]$, a nonempty closed interval of length $a_R(7/4-3/2)/\bigl((3/2)(7/4)\bigr)=a_R(1/4)/(21/8)=2a_R/21$. The endpoint values are $F(4a_R/7)=a_R\cdot7/(4a_R)-1=3/4$ and $F(2a_R/3)=a_R\cdot3/(2a_R)-1=1/2$; both endpoints lie strictly inside $(0,a_R)$ because $4/7>0$ and $2/3<1$. For the declared illustrative normalisation $a_R=1$ in the length unit of the datum, the window is $[4/7,2/3]$ with length $2/21$ in that unit. [L6, L8, step 2.1, algebra]

4.1 (Conclusion and scope.) Steps 1.1, 2.1 and 3.1 exhibit a smooth future null geodesic on $(0,\infty)$, verify that the tuple of (b) is an operational model for the redshift readout $z$ satisfying condition $(*)$ with prediction $F(a_E)=a_R/a_E-1$, and compute the exact consistency window of the declared illustrative record under the declared comparison rule. All numerical values are declared illustrative values: the step uses no probability space, no sampling law, no coverage statement, no apparatus and no observation, the record is not a reported dataset, and every conclusion is conditional on the adopted model postulate, on the ideal light-ray rule and on the declared comparison rule. [A1, A2, L5, L6, step 1.1, step 2.1, step 3.1, given] ∎

## Remarks

- **Why the affine parameter is not the physical parameter.** The model's parameter is the emitter's scale factor $a_E$, a declared framework quantity with the datum's length unit; the affine parameter $s_E=a_E/(AH)$ of the ray is an intermediate quantity, and the map between them is the strictly increasing linear map recorded in (b). The prediction $F(a_E)=a_R/a_E-1$ uses only the ratio of scale factors, so it is unchanged if every $a$ is rescaled by a common constant; the illustrative normalisation $a_R=1$ fixes that freedom.

- **What the window does and does not say.** The window is an exact set-theoretic preimage of a declared closed box under a strictly monotone prediction map; it is not a confidence set, it carries no probability interpretation, and it uses the hard-bound reading of the record. A record whose entries were instead source-reported estimates with standard-uncertainty scales would require a separate comparison rule and would not assert the closed box used here.
