---
id: ex-gr-flrw-redshift-conservation-check
kind: example
title: "An explicit null geodesic in an exponentially expanding flat FLRW datum: constant aV^t and the observer-energy ratio"
status: draft
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-flrw-model-data, lem-gr-flrw-metric-and-comoving-data, lem-gr-flrw-christoffel-symbols, def-gr-metric-selected-connection, def-geodesic-of-an-affine-connection, prop-coordinate-geodesic-equation, def-gr-observer-relative-energy-and-momentum, def-causal-classification-of-lorentz-vectors, def-gr-smooth-lorentzian-objects, def-derivative, thm-algebra-of-derivatives, thm-chain-rule, def-real-exponential-function-and-e, thm-derivative-of-exponential, def-natural-logarithm, thm-logarithm-derivative-and-integral]
dependency_roles:
  def-gr-flrw-model-data: mathematical-premise
  lem-gr-flrw-metric-and-comoving-data: mathematical-premise
  lem-gr-flrw-christoffel-symbols: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  def-gr-observer-relative-energy-and-momentum: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8 (8.61)-(8.67): the conserved quantity along null geodesics, the frequency ratio and the redshift definition, printed pp. 228-229 (PDF pp. 235-236)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019 revision), sections 1.1.3 and 1.3.3: null paths in the Robertson-Walker metric, the redshift parameter, and the de Sitter model, printed pp. 13-15 and 40-43 (PDF pp. 19-21 and 46-49)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/cosmo/cosmo.pdf"
verification:
  precheck: pass
---

## Example

Fix real constants $c>0$, $A>0$, $H>0$, $t_0\in\mathbb R$, $r_0\in\mathbb R$.
Let $(I,\Sigma,\gamma,k,a)$ be the FLRW model datum with $I=\mathbb R$,
$\Sigma=\mathbb R^3$ carrying the standard Euclidean metric $\gamma$ in the
standard coordinates $x=(x^1,x^2,x^3)$, $k=0$ and
$a(t):=A\exp\bigl(H(t-t_0)\bigr)$
([[def-gr-flrw-model-data]], [[def-gr-smooth-lorentzian-objects]]). On the
spacetime $M=I\times\Sigma$ define the curve $\eta:(0,\infty)\to M$,

$$\eta(s):=\Bigl(t(s),\ \Bigl(r_0+\frac{c}{AH^2s},\,0,\,0\Bigr)\Bigr),\qquad t(s):=t_0+\frac1H\log(Hs),$$

and let $V:=\eta'$ with components $V^t=dt/ds$, $V^1,V^2,V^3$. Then:

1. The curve $\eta$ is smooth and its tangent $V$ is a future-directed null
   vector, $g(V,V)=0$ and $V^t>0$, at every point of $(0,\infty)$; moreover
   $\eta$ is a geodesic of the metric-selected connection with affine
   parameter $s$, in the sense of [[def-geodesic-of-an-affine-connection]].
2. Along $\eta$ the product $a\bigl(t(s)\bigr)V^t(s)$ is the constant $A$; in
   particular $aV^t$ is preserved by the flow of the null geodesic.
3. For $0<s_E<s_R$ let $t_E=t(s_E)$, $t_R=t(s_R)$, let $n=c^{-1}\partial_t$
   be the comoving congruence of the datum and let
   $E(s):=-c\,g_{\eta(s)}\bigl(V(s),n(\eta(s))\bigr)$ be the observer energy of
   [[def-gr-observer-relative-energy-and-momentum]] clause (a). Then
   $E(s)=c^2/(Hs)>0$ and

$$\frac{E(s_R)}{E(s_E)}=\frac{a(t_E)}{a(t_R)}=\frac{s_E}{s_R}.$$

## Facts & Assumptions

**Given:** The constants $c,A,H,t_0,r_0$ with $c>0$, $A>0$, $H>0$, the FLRW model datum of the example, its spacetime $M=\mathbb R\times\mathbb R^3$, metric $g$, comoving congruence $n=c^{-1}\partial_t$ and metric-selected connection $\nabla$, and the curve $\eta$ with tangent $V$.

[L1] In the product chart $(x^0,x^1,x^2,x^3)=(t,x^1,x^2,x^3)$ the Christoffel symbols of $\nabla$ are $\Gamma^0{}_{ij}=(a\dot a/c^2)\gamma_{ij}$, $\Gamma^i{}_{0j}=\Gamma^i{}_{j0}=H_{FL}\delta^i{}_j$ with $H_{FL}=\dot a/a$, $\Gamma^i{}_{jk}={}^{(3)}\Gamma^i{}_{jk}$, and all others vanish; here $\gamma$ is the Euclidean metric in the standard coordinates, so ${}^{(3)}\Gamma^i{}_{jk}=0$ ([[lem-gr-flrw-christoffel-symbols]], [[def-gr-metric-selected-connection]]).

[L2] In a chart a smooth curve is a geodesic with affine parameter $s$ if and only if $\dot V^a+\sum_{b,c}\Gamma^a{}_{bc}V^bV^c=0$ for $a=0,1,2,3$ on every parameter subinterval lying in the chart ([[prop-coordinate-geodesic-equation]], [[def-geodesic-of-an-affine-connection]]).

[L3] The comoving congruence $n=c^{-1}\partial_t$ is a smooth future-directed unit timelike field, $g(n,n)=-1$; a nonzero vector $V$ is future-directed exactly when $g(V,\partial_t)<0$, and null exactly when $g(V,V)=0$ ([[lem-gr-flrw-metric-and-comoving-data]], [[def-causal-classification-of-lorentz-vectors]], [[def-gr-smooth-lorentzian-objects]]).

[L4] The observer energy is $E_n(P)=-c\,g_p(P,n_p)$, and for the unit field $n=c^{-1}\partial_t$ the pairing with a vector $V$ is $g(V,n)=-cV^t$, where $V^t=dt(V)$ in the product chart ([[def-gr-observer-relative-energy-and-momentum]], [[lem-gr-flrw-metric-and-comoving-data]]).

[L5] On $(0,\infty)$ the functions $s\mapsto 1/(Hs)$ and $s\mapsto r_0+c/(AH^2s)$ are smooth with derivatives $-1/(Hs^2)$ and $-c/(AH^2s^2)$. The exponential is smooth with $\exp'=\exp$ and the natural logarithm is its inverse on $(0,\infty)$ with $\log'(x)=1/x$ ([[def-derivative]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]]).



## Verification
1.1 (Tangents.) By [L5] the curve $\eta$ is smooth on $(0,\infty)$ and its tangent has components $$V^t(s)=\frac{1}{Hs}>0,\qquad V^1(s)=-\frac{c}{AH^2s^2},\qquad V^2(s)=V^3(s)=0 .$$ [L5, algebra]

2.1 (Nullness and future direction.) By [L5], $a(t(s))=A\exp(H(t(s)-t_0))=A\cdot Hs$, so $a(t(s))V^1(s)=AHs\cdot\bigl(-c/(AH^2s^2)\bigr)=-c/(Hs)=-cV^t(s)$. Hence $a^2(V^1)^2=c^2(V^t)^2$, and since $V^2=V^3=0$ the metric pairing is $g(V,V)=-c^2(V^t)^2+a^2(V^1)^2=0$: $V$ is null. Since $V^t(s)>0$, [L3] gives $g(V,\partial_t)=-c^2V^t<0$, so $V$ is future-directed. [L3, L5, step 1.1, algebra]

2.2 (Geodesic equations.) By [L1] the nonvanishing symbol families in the product chart are $\Gamma^0{}_{ij}=a\dot a\,\delta_{ij}/c^2$ and $\Gamma^i{}_{0j}=\Gamma^i{}_{j0}=H_{FL}\delta^i{}_j$, where $\dot a=Ha$ gives $H_{FL}=H$. Since $V^2=V^3=0$, only $\Gamma^0{}_{11}=Ha^2/c^2$ contributes to the time-component equation, while the two symmetric mixed symbols give the factor $2$ in the spatial equations. The $t$-equation of [L2] reads $\dot V^t+\frac{Ha^2}{c^2}(V^1)^2=0$: by step 1.1 and [L5], $\dot V^t=-1/(Hs^2)$ and $\frac{Ha^2}{c^2}(V^1)^2=\frac{H(AHs)^2}{c^2}\cdot\frac{c^2}{A^2H^4s^4}=\frac{1}{Hs^2}$, so the equation holds. The $x^1$-equation reads $\dot V^1+2H V^tV^1=0$: by step 1.1, $\dot V^1=2c/(AH^2s^3)$ and $2HV^tV^1=2H\frac{1}{Hs}\bigl(-\frac{c}{AH^2s^2}\bigr)=-\frac{2c}{AH^2s^3}$, so the equation holds. For $a=2$ the equation of [L2] reads $\dot V^2+2H V^tV^2=0$, and it holds because $V^2=0$ and $\dot V^2=0$; the $a=3$ equation is identical with $V^3=0$. Hence $\eta$ is a geodesic with affine parameter $s$. [L1, L2, L5, step 1.1, algebra]

3.1 (The conserved product.) By step 1.1 and the identity $a(t(s))=AHs$ of [L5], $a(t(s))V^t(s)=AHs\cdot\frac{1}{Hs}=A$ for every $s\in(0,\infty)$: $aV^t$ is constant along the ray with value $A$. This proves claims 1 and 2. [L5, step 1.1, step 2.1, step 2.2, algebra]

4.1 (Observer energies and their ratio.) By [L4], $E(s)=-c\,g(V(s),n)=-c\cdot(-cV^t(s))=c^2V^t(s)=\frac{c^2}{Hs}>0$. Hence $\frac{E(s_R)}{E(s_E)}=\frac{s_E}{s_R}$, and since $a(t(s))=AHs$ we also have $\frac{a(t_E)}{a(t_R)}=\frac{s_E}{s_R}$; combining the two equalities proves the displayed energy ratio. [L4, step 1.1, step 3.1, algebra]

5.1 (Conclusion.) Steps 1.1, 2.1 and 2.2 exhibit a smooth future-directed null geodesic with affine parameter $s$, step 3.1 verifies the conservation law $aV^t=\text{constant}$ in this explicit family, and step 4.1 verifies the observer-energy ratio $\frac{E(s_R)}{E(s_E)}=\frac{a(t_E)}{a(t_R)}$ between comoving observers. The verification used only the metric, its Christoffel symbols and the observer-energy definition; no field equation and no matter model was used, and no physical claim about a measured wavelength is made. [step 1.1, step 2.1, step 2.2, step 3.1, step 4.1] ∎



## Remarks
- **Independence from the field equations.** The family $\eta$ exists for every
  exponential scale factor, whatever the matter content or the value of the
  cosmological parameter, because the computation uses only the metric
  geometry. It is a special case of the general conservation law of the A
  page, verified here by explicit coordinates.

- **Physical reading.** The relation $\frac{E(s_R)}{E(s_E)}=\frac{a(t_E)}{a(t_R)}$
  is a model prediction about ideal observer energies of an ideal null
  geodesic; identifying $E$ with an observed frequency requires the light
  propagation and measurement model of the framework, and no such
  identification or measurement is asserted here.

- **Choice of zero.** The parameter $s$ ranges over $(0,\infty)$ and
  $t(s)\to\pm\infty$ as $s\to0^+,\infty$; the ray is defined on the whole
  cosmic time axis. Only the ratio of energies is asserted, so the additive
  freedom in the affine parameter and the constant $r_0$ do not enter.
