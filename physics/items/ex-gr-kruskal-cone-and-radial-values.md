---
id: ex-gr-kruskal-cone-and-radial-values
kind: example
title: "Explicit causal-cone and radial-derivative checks in the Kruskal model
  at the horizon for s = 1 m"
status: published
origin: session
domain: mathematics
dependency_level: 17
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-kruskal-model-data
  - lem-gr-kruskal-model-properties
  - lem-gr-kruskal-causal-escape-and-trapping
  - def-gr-smooth-lorentzian-objects
  - def-causal-classification-of-lorentz-vectors
  - def-derivative
  - thm-algebra-of-derivatives
  - def-rational-power
  - def-interval
  - cor-two-less-than-e-less-than-three
  - ex-the-round-metric-on-the-sphere-as-an-induced-metric
  - thm-coordinate-derivations-form-a-basis-of-the-tangent-space
dependency_roles:
  def-gr-kruskal-model-data: mathematical-premise
  lem-gr-kruskal-model-properties: mathematical-premise
  lem-gr-kruskal-causal-escape-and-trapping: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-rational-power: mathematical-premise
  def-interval: mathematical-premise
  cor-two-less-than-e-less-than-three: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity,
        arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.74)-(7.85): the Kruskal diagram,
        the light-cone structure of the Kruskal coordinates and the null horizon
        at U = 0, printed pp. 186-190 (PDF pp. 193-197)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), section
        2.3.2: the Kruskal-Szekeres extension, its null axes and the causal
        structure of the four regions, printed pp. 21-23"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
verification:
  precheck: pass
---

## Example

Fix the Kruskal datum of [[def-gr-kruskal-model-data]] with length scale
$L_0:=1\,\mathrm m$ and Schwarzschild radius $s=L_0$; this sets the model
parameter $m_*=c^2L_0/(2G_N)$ and is a normalization choice, not a
measurement. Write $\bar r:=r/L_0$, $\bar g:=g_{\mathcal K}/L_0^2$, and
$\bar A:=A/L_0^2=4e^{-\bar r}/\bar r$, where
$A=4s^3e^{-r/s}/r$ is the coefficient of
[[lem-gr-kruskal-causal-escape-and-trapping]] clause (a). The coordinates
$U,V$ and angular coordinates are dimensionless. Fix $\omega_0$ in a
spherical-polar chart with $0<\vartheta_0<\pi$, and let
$N_{\mathcal K}=\partial_U+\partial_V$ be the time orientation
([[lem-gr-kruskal-model-properties]]). Take the point

$$p_0:=(U,V,\omega)=(0,1,\omega_0)\in\mathcal K .$$

Then:

1. **The radius and the cone coefficient at $p_0$.** $U(p_0)V(p_0)=0$, so
   $\bar r(p_0)=1$ and $r(p_0)=L_0=s$ (the point lies on the horizon); thus
   $\bar A(p_0)=4e^{-1}$ and $A(p_0)=4L_0^2/e$. Dividing the future causal
   criterion of [[lem-gr-kruskal-causal-escape-and-trapping]] clause (a) by
   $L_0^2$, its normalized form at $p_0$ reads:
   $X$ is future-directed causal if and only if
   $X^{U}\ge0$, $X^{V}\ge0$, $X^{U}+X^{V}>0$ and
   $\frac{4}{e}\,X^{U}X^{V}\ \ge\ \gamma_{p_0}(X^{\omega},X^{\omega})$.
2. **Four explicit tangent vectors at $p_0$.**
   - $X_1=\partial_U+\partial_V$: $X_1^{U}X_1^{V}=1\ge0$ and
     $\frac4e\cdot1\ge0=\gamma(0,0)$, so $X_1$ is future causal; indeed
     $\bar g(X_1,X_1)=2\bar g_{UV}=-\bar A(p_0)=-\frac4e<0$, timelike.
   - $X_2=\partial_U$: $X_2^{U}=1$, $X_2^{V}=0$, so the inequality reads
     $0\ge0$ and $X_2$ is future causal; moreover
     $\bar g(X_2,X_2)=0$, so $\partial_U$ is future null at $p_0$; it is
     transverse to $U=0$, whose horizon generator direction is $\partial_V$.
   - $X_3=\partial_V$: likewise $\bar g(X_3,X_3)=0$,
     $\bar g(X_3,N_{\mathcal K})=-\frac{\bar A(p_0)}{2}<0$; it is future null
     and tangent to the horizon generator.
   - $X_4=\partial_U-\partial_V$: $X_4^{U}X_4^{V}=-1<0$ violates the
     criterion, and indeed $\bar g(X_4,X_4)=\bar A(p_0)=\frac4e>0$,
     spacelike.
3. **Angular cut-off.** For
   $X_5=\partial_U+\partial_V+\omega$ with purely angular part $\omega$ one
   has $\bar g(X_5,X_5)=-\frac4e+\gamma_{p_0}(\omega,\omega)$, so
   $X_5$ is future causal exactly when
   $\gamma_{p_0}(\omega,\omega)\le\frac4e$. In the chart with round
   components $\gamma_{22}=1$, $\gamma_{33}=\sin^{2}\vartheta$, the choices
   $\omega=(1,0)$ and $\omega=(2,0)$ give $\gamma=1<\frac4e$ (causal) and
   $\gamma=4>\frac4e$ (spacelike), because $1<e<4$; the cut-off is the exact
   inequality, not a numerical approximation.
4. **Radial derivatives at $p_0$.** By clause (c) of the causal lemma,
   $\partial_U\bar r=-\dfrac{Ve^{-\bar r}}{\bar r}$ and
   $\partial_V\bar r=-\dfrac{Ue^{-\bar r}}{\bar r}$ under the normalization
   $s=L_0$; at $p_0$ this gives $\partial_U\bar r=-e^{-1}<0$ and
   $\partial_V\bar r=0$, equivalently $\partial_Ur=-L_0e^{-1}$ and
   $\partial_Vr=0$. The normalized formula agrees with differentiating
   $UV=-(\bar r-1)e^{\bar r}$: at $(0,1)$,
   $V\,dU+U\,dV=-\bar r e^{\bar r}\,d\bar r$, so $dU=-e\,d\bar r$.
   Consequently the areal radius decreases along the future null direction
   $\partial_U$ at the horizon, in accordance with the decreasing-radius
   clause of the causal lemma.

## Facts & Assumptions

**Given:** The Kruskal datum with $s=L_0=1\,\mathrm m$, the point $p_0=(0,1,\omega_0)$, the dimensionless radius $\bar r$ with $\bar r(p_0)=1$, the normalized coefficients $\bar g=g_{\mathcal K}/L_0^2$ and $\bar A=A/L_0^2=4e^{-\bar r}/\bar r$, the vectors $X_1,\dots,X_5$, and $N_{\mathcal K}=\partial_U+\partial_V$.

[L1] The Kruskal datum has $r=s=L_0$ exactly on the axes $UV=0$ and $\bar r=1$ at $p_0$; in a polar chart the normalized metric coefficients at the point have $\bar g_{UV}=-\bar A/2$, $\bar g_{\vartheta\vartheta}=\bar r^2$, $\bar g_{\varphi\varphi}=\bar r^2\sin^2\vartheta$, with $\bar A=4e^{-\bar r}/\bar r$, and $N_{\mathcal K}$ is future timelike ([[def-gr-kruskal-model-data]], [[lem-gr-kruskal-model-properties]] clauses (a)-(b), [[def-gr-smooth-lorentzian-objects]]).

[L2] At every point and for every tangent vector $X$ with chart components $(X^{U},X^{V},X^{\omega})$: $X$ is causal and future-directed if and only if $X^{U}\ge0$, $X^{V}\ge0$, $X^{U}+X^{V}>0$ and $A\,X^{U}X^{V}\ge r^{2}\gamma(X^{\omega},X^{\omega})$; and for purely angular $\omega$, $g_{\mathcal K}(\partial_U+\partial_V+\omega,\partial_U+\partial_V+\omega)=-A+r^{2}\gamma(\omega,\omega)$ ([[lem-gr-kruskal-causal-escape-and-trapping]] clause (a), [[def-causal-classification-of-lorentz-vectors]]).

[L3] At every point of $\mathcal K$, $\partial_Ur=-\frac{s^{2}Ve^{-r/s}}{r}$ and $\partial_Vr=-\frac{s^{2}Ue^{-r/s}}{r}$; hence for $s=L_0$, $\partial_U\bar r=-Ve^{-\bar r}/\bar r$ and $\partial_V\bar r=-Ue^{-\bar r}/\bar r$ ([[lem-gr-kruskal-causal-escape-and-trapping]] clause (c)).

[L4] The exponential constant satisfies $2<e<3$ and therefore $1<e<4$ ([[cor-two-less-than-e-less-than-three]]); the round metric in the chosen polar chart has $\gamma(\omega,\omega)=(\omega^2)^2+\sin^2\vartheta\,(\omega^3)^2$, and coordinate fields form a basis there ([[ex-the-round-metric-on-the-sphere-as-an-induced-metric]], [[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

## Proof

**Proof technique:** direct; evaluate the radius, coefficient, normalized metric pairings and criterion of the cited lemma at $p_0$ with the model normalization $s=L_0=1\,\mathrm m$.

1.1 (Radius and coefficient.) At $p_0$, $U(p_0)V(p_0)=0$, so by [L1] $r(p_0)=s=L_0$ and $\bar r(p_0)=1$; then $A(p_0)=4s^{3}e^{-r(p_0)/s}/r(p_0)=4L_0^2e^{-1}$ and $\bar A(p_0)=4/e$. Dividing the criterion of [L2] by $L_0^2$ gives exactly the displayed normalized form. This is clause 1. [L1, L2, L4, algebra]

1.2 (The four tangent vectors.) Use the normalized metric $\bar g=g_{\mathcal K}/L_0^2$. For $X_1$: $\bar g(X_1,X_1)=2\bar g_{UV}(p_0)=-\bar A(p_0)=-\frac4e<0$ by [L1]; the criterion's conditions are $1\ge0$, $1\ge0$, $2>0$ and $\frac4e\ge0$, all true. For $X_2$: $\bar g(X_2,X_2)=\bar g_{UU}=0$ and $\bar g(X_2,N_{\mathcal K})=\bar g_{UU}+\bar g_{UV}=-\frac{\bar A(p_0)}{2}<0$, so $X_2$ is future null; the conditions are $1\ge0$, $0\ge0$, $1>0$, $\frac4e\cdot0\ge0$. For $X_3$ the symmetric computation gives $\bar g(X_3,X_3)=0$, $\bar g(X_3,N_{\mathcal K})=-\frac{\bar A(p_0)}2<0$, and $X_3^{U}X_3^{V}=0$. For $X_4$: $X_4^{U}X_4^{V}=(1)(-1)=-1<0$, so the criterion fails; directly $\bar g(X_4,X_4)=\bar g_{UU}-2\bar g_{UV}+\bar g_{VV}=\bar A(p_0)=\frac4e>0$, spacelike. This is clause 2. [L1, L2, L4, algebra]

1.3 (Angular cut-off.) With $X_5=\partial_U+\partial_V+\omega$, [L2] gives $\bar g(X_5,X_5)=-\bar A(p_0)+\bar r(p_0)^2\gamma(\omega,\omega)=-\frac4e+\gamma(\omega,\omega)$; the criterion of [L2] with $X_5^{U}=X_5^{V}=1$ reads $\frac4e\ge\gamma(\omega,\omega)$. For $\omega=(1,0)$ in the stipulated polar chart, $\gamma=1$ and $1<\frac4e$ because $e<4$; for $\omega=(2,0)$, $\gamma=4$ and $4>\frac4e$ because $e>1$; both comparisons are exact by [L4]. This is clause 3. [L2, L4, algebra]

2.1 (Radial derivatives.) By [L3] with $s=L_0$, $\bar r(p_0)=1$, $U(p_0)=0$, $V(p_0)=1$: $\partial_U\bar r(p_0)=-e^{-1}$ and $\partial_V\bar r(p_0)=0$, equivalently $\partial_Ur(p_0)=-L_0e^{-1}$ and $\partial_Vr(p_0)=0$. The dimensionless implicit relation $UV=-(\bar r-1)e^{\bar r}$ has differential $V\,dU+U\,dV=-\bar r e^{\bar r}\,d\bar r$; at $(U,V)=(0,1)$ this gives $dU=-e\,d\bar r$, hence the same derivatives. This proves clause 4. [L3, L4, algebra] ∎

## Remarks

- **What the example checks.** The example instantiates the cone criterion and the radial derivatives at one explicit point with the model normalization $s=L_0=1\,\mathrm m$; accordingly its mass parameter is $m_*=c^{2}(1\,\mathrm m)/(2G_N)$. This is a choice of units and model parameter, not a measurement, and asserts no numerical value of $G_N$ or $c$ and no property of any observed system. The comparisons $1<4/e<4$ are exact inequalities in the constant $e$.
