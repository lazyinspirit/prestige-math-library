---
id: ex-gr-kruskal-cone-and-radial-values
kind: example
title: "Explicit causal-cone and radial-derivative checks in the Kruskal model at the horizon point (U,V) = (0,1) for s = 1"
status: draft
origin: session
domain: mathematics
dependency_level: 17
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-kruskal-model-data, lem-gr-kruskal-model-properties, lem-gr-kruskal-causal-escape-and-trapping, def-gr-smooth-lorentzian-objects, def-causal-classification-of-lorentz-vectors, def-derivative, thm-algebra-of-derivatives, def-rational-power, def-interval]
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
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.74)-(7.85): the Kruskal diagram, the light-cone structure of the Kruskal coordinates and the null horizon at U = 0, printed pp. 186-190 (PDF pp. 193-197)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), section 2.3.2: the Kruskal-Szekeres extension, its null axes and the causal structure of the four regions, printed pp. 21-23"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
verification:
  precheck: pass
---

## Example

Fix the Kruskal model datum of [[def-gr-kruskal-model-data]] with
Schwarzschild radius $s=1$, that is, with mass parameter
$m_*=\dfrac{c^{2}}{2G_N}$; this is a choice of one datum, not a measurement.
Let $r$, $g_{\mathcal K}$ and $N_{\mathcal K}=\partial_U+\partial_V$ be the
radial function, metric and time orientation of the datum
([[lem-gr-kruskal-model-properties]]) and let
$A=4s^{3}e^{-r/s}/r=4e^{-r}/r$ be the coefficient of
[[lem-gr-kruskal-causal-escape-and-trapping]] clause (a). Take the point

$$p_0:=(U,V,\omega)=(0,1,\omega_0)\in\mathcal K .$$

Then:

1. **The radius and the cone coefficient at $p_0$.** $U(p_0)V(p_0)=0$, so
   $r(p_0)=1=s$ (the point lies on the horizon) and
   $A(p_0)=4e^{-1}$. The future causal criterion of
   [[lem-gr-kruskal-causal-escape-and-trapping]] clause (a) at $p_0$ reads:
   $X$ is future-directed causal if and only if
   $X^{U}\ge0$, $X^{V}\ge0$, $X^{U}+X^{V}>0$ and
   $\frac{4}{e}\,X^{U}X^{V}\ \ge\ \gamma_{p_0}(X^{\omega},X^{\omega})$.
2. **Four explicit tangent vectors at $p_0$.**
   - $X_1=\partial_U+\partial_V$: $X_1^{U}X_1^{V}=1\ge0$ and
     $\frac4e\cdot1\ge0=\gamma(0,0)$, so $X_1$ is future causal; indeed
     $g_{\mathcal K}(X_1,X_1)=2g_{UV}=-A(p_0)=-\frac4e<0$, timelike.
   - $X_2=\partial_U$: $X_2^{U}=1$, $X_2^{V}=0$, so the inequality reads
     $0\ge0$ and $X_2$ is future causal; moreover
     $g_{\mathcal K}(X_2,X_2)=0$, so $\partial_U$ is future null at $p_0$,
     consistent with $\partial_U$ being tangent to the horizon generator.
   - $X_3=\partial_V$: likewise $g_{\mathcal K}(X_3,X_3)=0$,
     $g_{\mathcal K}(X_3,N_{\mathcal K})=-\frac{A(p_0)}{2}<0$, future null.
   - $X_4=\partial_U-\partial_V$: $X_4^{U}X_4^{V}=-1<0$ violates the
     criterion, and indeed $g_{\mathcal K}(X_4,X_4)=A(p_0)=\frac4e>0$,
     spacelike.
3. **Angular cut-off.** For
   $X_5=\partial_U+\partial_V+\omega$ with purely angular part $\omega$ one
   has $g_{\mathcal K}(X_5,X_5)=-\frac4e+\gamma_{p_0}(\omega,\omega)$, so
   $X_5$ is future causal exactly when
   $\gamma_{p_0}(\omega,\omega)\le\frac4e$. In the chart with round
   components $\gamma_{22}=1$, $\gamma_{33}=\sin^{2}\vartheta$, the choices
   $\omega=(1,0)$ and $\omega=(2,0)$ give $\gamma=1<\frac4e$ (causal) and
   $\gamma=4>\frac4e$ (spacelike), because $1<e<4$; the cut-off is the exact
   inequality, not a numerical approximation.
4. **Radial derivatives at $p_0$.** By clause (c) of the causal lemma,
   $\partial_Ur=-\dfrac{s^{2}Ve^{-r/s}}{r}$ and
   $\partial_Vr=-\dfrac{s^{2}Ue^{-r/s}}{r}$; at $p_0$ with $s=1$, $r=1$,
   $U=0$, $V=1$ this gives
   $\partial_Ur(p_0)=-e^{-1}<0$ and $\partial_Vr(p_0)=0$. The value
   $\partial_Ur(p_0)=-e^{-1}$ agrees with implicit differentiation of
   $UV=-(r-1)e^{r}$: at $(0,1)$ one has $V\,dU+U\,dV=-r e^{r}\,dr$, that is
   $dU=-e\,dr$, so $\partial_Ur=-e^{-1}$ and $\partial_Vr=0$.
   Consequently the areal radius decreases along the future null direction
   $\partial_U$ at the horizon, in accordance with the decreasing-radius
   clause of the causal lemma.

## Facts & Assumptions

**Given:** The Kruskal datum with $s=1$, the point $p_0=(0,1,\omega_0)$, the radial function $r$ with $r(p_0)=1$, the coefficient $A=4e^{-r}/r$, the vectors $X_1,\dots,X_5$, and the time orientation $N_{\mathcal K}=\partial_U+\partial_V$.

[L1] The Kruskal model datum has $r=s$ exactly on the axes $UV=0$, and $r=s=1$ at $p_0$; the metric in a Kruskal chart is $g_{UV}=g_{VU}=-A/2$ with $A=4s^{3}e^{-r/s}/r$, $g_{\vartheta\vartheta}=r^{2}$, $g_{\varphi\varphi}=r^{2}\sin^{2}\vartheta$, all other components zero; $N_{\mathcal K}$ is a time orientation with $g_{\mathcal K}(N_{\mathcal K},N_{\mathcal K})<0$ ([[def-gr-kruskal-model-data]], [[lem-gr-kruskal-model-properties]] clauses (a)-(b), [[def-gr-smooth-lorentzian-objects]]).

[L2] At every point and for every tangent vector $X$ with chart components $(X^{U},X^{V},X^{\omega})$: $X$ is causal and future-directed if and only if $X^{U}\ge0$, $X^{V}\ge0$, $X^{U}+X^{V}>0$ and $A\,X^{U}X^{V}\ge r^{2}\gamma(X^{\omega},X^{\omega})$; and for purely angular $\omega$, $g_{\mathcal K}(\partial_U+\partial_V+\omega,\partial_U+\partial_V+\omega)=-A+r^{2}\gamma(\omega,\omega)$ ([[lem-gr-kruskal-causal-escape-and-trapping]] clause (a), [[def-causal-classification-of-lorentz-vectors]]).

[L3] At every point of $\mathcal K$, $\partial_Ur=-\frac{s^{2}Ve^{-r/s}}{r}$ and $\partial_Vr=-\frac{s^{2}Ue^{-r/s}}{r}$ ([[lem-gr-kruskal-causal-escape-and-trapping]] clause (c)).

[L4] For the specialization $s=1$: $A(p_0)=4e^{-1}$, $e^{-1}>0$, $1<e<4$ as exact inequalities, $\gamma(\omega,\omega)=(\omega^{2})^{2}+\sin^{2}\vartheta\,(\omega^{3})^{2}$ in a Kruskal chart, and the coordinate fields $\partial_U,\partial_V,\partial_\vartheta,\partial_\varphi$ are a basis of each tangent space in the chart ([[def-derivative]], [[thm-algebra-of-derivatives]], [[def-rational-power]], [[def-interval]]).

## Proof

**Proof technique:** direct; evaluate the radius, coefficient, metric pairings and criterion of the cited lemma at the explicit point $p_0$ with $s=1$.

1.1 (Radius and coefficient.) At $p_0$, $U(p_0)V(p_0)=0$, so by [L1] $r(p_0)=s=1$; then $A(p_0)=4s^{3}e^{-r(p_0)/s}/r(p_0)=4e^{-1}$, and the criterion of [L2] takes the displayed form. This is clause 1. [L1, L2, L4, algebra]

1.2 (The four tangent vectors.) For $X_1$: $g_{\mathcal K}(X_1,X_1)=2g_{UV}(p_0)=-A(p_0)=-\frac4e<0$ by [L1]; the criterion's numerical conditions are $1\ge0$, $1\ge0$, $2>0$ and $\frac4e\ge0$, all true. For $X_2$: $g_{\mathcal K}(X_2,X_2)=g_{UU}=0$ and $g_{\mathcal K}(X_2,N_{\mathcal K})=g_{UU}+g_{UV}=-\frac{A(p_0)}{2}<0$, so $X_2$ is future null; the conditions are $1\ge0$, $0\ge0$, $1>0$, $\frac4e\cdot0\ge0$. For $X_3$ the symmetric computation gives $g_{\mathcal K}(X_3,X_3)=0$, $g_{\mathcal K}(X_3,N_{\mathcal K})=-\frac{A(p_0)}2<0$, and $X_3^{U}X_3^{V}=0$. For $X_4$: $X_4^{U}X_4^{V}=(1)(-1)=-1<0$, so the criterion fails; directly $g_{\mathcal K}(X_4,X_4)=g_{UU}-2g_{UV}+g_{VV}=A(p_0)=\frac4e>0$, spacelike. This is clause 2. [L1, L2, L4, algebra]

1.3 (Angular cut-off.) With $X_5=\partial_U+\partial_V+\omega$, [L2] gives $g_{\mathcal K}(X_5,X_5)=-A(p_0)+r(p_0)^{2}\gamma(\omega,\omega)=-\frac4e+\gamma(\omega,\omega)$; the criterion of [L2] with $X_5^{U}=X_5^{V}=1$ reads $\frac4e\ge\gamma(\omega,\omega)$. For $\omega=(1,0)$ in a chart with $\sin^{2}\vartheta$ angular metric, $\gamma=1$ and $1<\frac4e$ because $e<4$; for $\omega=(2,0)$, $\gamma=4$ and $4>\frac4e$ because $e>1$; both comparisons are exact by [L4]. This is clause 3. [L2, L4, algebra]

2.1 (Radial derivatives.) By [L3] with $s=1$, $r(p_0)=1$, $U(p_0)=0$, $V(p_0)=1$: $\partial_Ur(p_0)=-1\cdot1\cdot e^{-1}/1=-e^{-1}$ and $\partial_Vr(p_0)=-1\cdot0\cdot e^{-1}/1=0$. The implicit relation $UV=-(r-1)e^{r}$ at $s=1$ has differential $V\,dU+U\,dV=-re^{r}\,dr$; evaluating the differentials at $(U,V)=(0,1)$ gives $dU=-e\,dr$, hence $\partial_Ur=-e^{-1}$ and $\partial_Vr=0$, in agreement. This is clause 4. [L3, L4, algebra] ∎

## Remarks

- **What the example checks.** The example instantiates the cone criterion and the radial derivatives of the lemma at one explicit point of the Kruskal model with $s=1$; the specialization $s=1$ fixes the datum's mass parameter as $m_*=c^{2}/(2G_N)$ and asserts no measurement, no numerical value of $G_N$ or $c$ and no property of any observed system. The comparisons $1<4/e<4$ are exact inequalities in the constant $e$.
