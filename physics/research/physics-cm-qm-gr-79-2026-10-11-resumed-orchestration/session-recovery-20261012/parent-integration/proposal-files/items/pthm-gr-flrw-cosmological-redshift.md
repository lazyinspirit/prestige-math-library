---
id: pthm-gr-flrw-cosmological-redshift
kind: physics-theorem
title: "Cosmological redshift: the observer-energy ratio of a null geodesic between comoving observers is the inverse scale-factor ratio"
status: draft
origin: session
domain: physics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [post-gr-flrw-homogeneous-cosmological-model, post-gr-ideal-clocks-and-free-fall, def-gr-flrw-model-data, lem-gr-flrw-metric-and-comoving-data, lem-gr-flrw-christoffel-symbols, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-christoffel-symbols-of-an-affine-connection, prop-coordinate-geodesic-equation, def-geodesic-of-an-affine-connection, def-gr-observer-relative-energy-and-momentum, lem-gr-observer-pairing-with-future-causal-vectors, def-causal-classification-of-lorentz-vectors, def-gr-inverse-metric-and-musical-isomorphisms, def-derivative, thm-chain-rule, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant]
dependency_roles:
  cor-zero-derivative-implies-constant: mathematical-premise
  post-gr-flrw-homogeneous-cosmological-model: physical-assumption
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  def-gr-flrw-model-data: mathematical-premise
  lem-gr-flrw-metric-and-comoving-data: mathematical-premise
  lem-gr-flrw-christoffel-symbols: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-gr-observer-relative-energy-and-momentum: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
physical_scope: "Conditional prediction of the adopted homogeneous cosmological model: the ratio of the observer energies of a specified future null geodesic measured by comoving observers at two events is the inverse ratio of the scale factor at those cosmic times, and the redshift parameter so defined satisfies 1+z = a(t_R)/a(t_E). The statement is an exact consequence of the model metric, the null-geodesic light-ray rule and the observer-energy definition; it asserts no observed redshift, no spectral line, no distant-velocity interpretation and no measurement, and it excludes non-geometric-optics propagation, dispersion and any apparatus or analysis model."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8 (8.61)-(8.67): the Killing-tensor constant of null geodesics, omega_0/omega_1 = a_1/a_0 and the redshift definition z = a_0/a_1 - 1, printed pp. 228-229 (PDF pp. 235-236)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019 revision), section 1.1.3: null paths in the Robertson-Walker metric and the redshift parameter (1.18)-(1.21), printed pp. 14-15 (PDF pp. 20-21)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/cosmo/cosmo.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.6.2: the geodesic motion of light in the FRW metric, printed pp. 203-204 (PDF pp. 210-211)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the homogeneous cosmological model of
[[post-gr-flrw-homogeneous-cosmological-model]] with an FLRW model datum
$(I,\Sigma,\gamma,k,a)$ and metric $g=-c^2dt^2+a(t)^2\gamma$
([[def-gr-flrw-model-data]]), let $\nabla$ be its metric-selected connection
([[def-gr-metric-selected-connection]]), and adopt the light-ray rule that
ideal light rays are future null geodesics of $\nabla$
([[post-gr-ideal-clocks-and-free-fall]] clause (iii)). Let
$\eta:J\to M$, $s\mapsto\eta(s)$, be such a ray: a $C^2$ curve on an interval
$J$ with tangent $V:=\eta'$, $g(V,V)=0$, $V$ future-directed, and
$\nabla_VV=0$ ([[def-geodesic-of-an-affine-connection]],
[[def-causal-classification-of-lorentz-vectors]]). Let $s_E,s_R\in J$ with
$s_E<s_R$, let $t_E:=t(\eta(s_E))$ and $t_R:=t(\eta(s_R))$ be the cosmic times
of the two events, and for each $s\in J$ define the **observer energy** of the
ray at $\eta(s)$ relative to the comoving observer by

$$E(s):=-c\,g_{\eta(s)}\bigl(V(s),n(\eta(s))\bigr),\qquad n=c^{-1}\partial_t .$$

the value $E_n(V)$ of the observer-energy definition for the unit observer
$n$ ([[def-gr-observer-relative-energy-and-momentum]] clause (a)). Then:

**(a)** $a\bigl(t(\eta(s))\bigr)V^t(s)$ is constant along $J$, where
$V^t=dt(V)$; in particular
$a(t_R)V^t(s_R)=a(t_E)V^t(s_E)$.

**(b)** $E(s)>0$ along the ray and

$$\frac{E(s_R)}{E(s_E)}=\frac{a(t_E)}{a(t_R)} .$$

**(c)** If the **redshift parameter** of the pair of events is defined by
$z:=\dfrac{E(s_E)}{E(s_R)}-1$, that is, by $1+z=E(s_E)/E(s_R)$, then

$$1+z=\frac{a(t_R)}{a(t_E)} .$$

The ratio in (b) and (c) is unchanged if $V$ is replaced by $\mu V$ with a
nonzero constant $\mu$: a null ray determines its tangent only up to scale,
and only the ratio of energies is asserted. No observed wavelength, spectral
line, distance, velocity or measurement enters the statement.

## Facts & Assumptions

**Given:** The adopted model with FLRW datum $(I,\Sigma,\gamma,k,a)$, its metric $g$, its comoving congruence $n=c^{-1}\partial_t$, its metric-selected connection $\nabla$, a future null geodesic $\eta:J\to M$ with tangent $V$, events $s_E<s_R$ in $J$, and the energies $E(s)$ of the statement.

[L1] In a product chart $(x^0,x^1,x^2,x^3)$ with $x^0=t$ the metric components are $g_{00}=-c^2$, $g_{0i}=0$, $g_{ij}=a(t)^2\gamma_{ij}$, the comoving congruence is $n=c^{-1}\partial_t$, and the Christoffel symbols of $\nabla$ are $\Gamma^0{}_{00}=\Gamma^0{}_{0i}=\Gamma^i{}_{00}=0$, $\Gamma^0{}_{ij}=a\dot a\gamma_{ij}/c^2$ and $\Gamma^i{}_{0j}=H\delta^i{}_j$ with $H=\dot a/a$ ([[lem-gr-flrw-metric-and-comoving-data]], [[lem-gr-flrw-christoffel-symbols]]).

[L2] A curve $\eta$ is a geodesic with affine parameter $s$ when $\nabla_VV=0$, equivalently in a chart $\dot V^a+\sum_{b,c}\Gamma^a{}_{bc}V^bV^c=0$ for $a=0,1,2,3$ ([[def-geodesic-of-an-affine-connection]], [[def-christoffel-symbols-of-an-affine-connection]], [[prop-coordinate-geodesic-equation]]).

[L3] A nonzero causal vector $V$ is future-directed when $g(V,N)<0$ for the time orientation $N=\partial_t$; with the components of [L1] this is $-c^2V^t<0$, so $V^t>0$ ([[def-gr-smooth-lorentzian-objects]], [[def-causal-classification-of-lorentz-vectors]]).

[L4] The observer energy of a tangent vector $P$ relative to an observer $n$ is $E_n(P)=-c\,g(P,n)$ ([[def-gr-observer-relative-energy-and-momentum]] clause (a)); for a nonzero future causal $P$ it is positive ([[lem-gr-observer-pairing-with-future-causal-vectors]], [[def-gr-observer-relative-energy-and-momentum]]). The ideal light ray of the model is a future null geodesic, and its tangent is determined only up to positive scale ([[post-gr-ideal-clocks-and-free-fall]] clause (iii)).

[L5] Differentiable functions of the parameter satisfy the chain and product rules ([[def-derivative]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]). A function continuous on an interval and with zero derivative at its interior points is constant on the whole interval ([[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** reduce the time-component geodesic equation using nullness, differentiate the conserved product, and read the energies off the metric.

1.1 (Geodesic equation for $V^t$.) In a product chart around a point of the ray, [L2] gives $\dot V^0+\sum_{b,c}\Gamma^0{}_{bc}V^bV^c=0$; by [L1] every symbol $\Gamma^0{}_{bc}$ vanishes except $\Gamma^0{}_{ij}=a\dot a\gamma_{ij}/c^2$ with both lower indices spatial, so $\dot V^0+\frac{a\dot a}{c^2}\sum_{i,j}\gamma_{ij}V^iV^j=0$. Since $V^0=V^t=dt(V)$, this is $\dot V^t+\frac{a\dot a}{c^2}\gamma_{ij}V^iV^j=0$. [L1, L2, algebra]

2.1 (Nullness gives a conserved product.) Nullness and [L1] give $0=-c^2(V^t)^2+a^2\gamma_{ij}V^iV^j$, so $\gamma_{ij}V^iV^j=c^2(V^t)^2/a^2$. Substitution in step 1.1 yields $\dot V^t+H(V^t)^2=0$. By the product and chain rules [L5], $\frac{d}{ds}(a(t(\eta(s)))V^t(s))=\dot a(t(\eta(s)))(V^t(s))^2+a(t(\eta(s)))\dot V^t(s)=aH(V^t)^2-aH(V^t)^2=0$. This calculation holds in a product chart near each ray point; the product is the globally defined $C^1$ function $a(t\circ\eta)\,dt(\eta')$, so its derivative vanishes everywhere in the interior of $J$. It is continuous on $J$, including any endpoints present. Since $J$ is an interval, [L5] makes this product constant on all of $J$, proving (a) and its endpoint evaluation. [L1, L5, step 1.1, algebra]

3.1 (Observer energies and the redshift ratio.) By [L4], $E(s)=-c\,g(V(s),n(\eta(s)))$; since $n=c^{-1}\partial_t$ has components $n^0=c^{-1}$, $n^i=0$ and $n_0=g_{00}n^0=-c$, the pairing is $g(V,n)=n_0V^0=-cV^t$, so $E(s)=c^2V^t(s)>0$ along the ray. Hence $\frac{E(s_R)}{E(s_E)}=\frac{V^t(s_R)}{V^t(s_E)}=\frac{a(t_E)}{a(t_R)}$ by the constant of step 2.1, which is claim (b). Defining $z$ by $1+z=E(s_E)/E(s_R)$ and inverting the ratio gives $1+z=a(t_R)/a(t_E)$, which is claim (c). Finally, replacing $V$ by $\mu V$ with $\mu\neq0$ replaces every $E(s)$ by $\mu E(s)$, leaving the ratios in (b) and (c) unchanged; this is the scale-independence asserted in the statement. [L1, L3, L4, step 2.1, algebra] ∎

## Remarks

- **Model prediction, not an observation.** The theorem compares two ideal
  observer energies of one ideal null geodesic in the adopted model. A
  reported redshift is a measured quantity with an emission line, a
  spectrograph, calibration, resolution and uncertainty; identifying the two
  requires an apparatus and analysis model, and the comparison is the subject
  of [[rem-gr-flrw-observation-and-model-dependence]] and of future experiment
  items. In particular the theorem does not by itself assign a relative
  velocity to the emitter and does not establish that an observed redshift is
  produced by expansion.

- **Where each assumption entered.** The metric form and its Christoffel
  symbols produced the conservation law of claim (a); the null-geodesic light
  rule of the framework entered through the identification of the ideal ray
  with a future null geodesic; the observer-energy definition entered through
  $E_n(P)=-cg(P,n)$. No field equation, no equation of state and no matter
  model was used, so the result holds in every FLRW model datum, vacuum or
  fluid-filled, irrespective of the spatial curvature parameter $k$.
