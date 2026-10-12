---
id: lem-gr-kruskal-causal-escape-and-trapping
kind: lemma
title: "The causal cone, the escape horizon and decreasing areal radius in the Kruskal model"
status: draft
origin: session
domain: mathematics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-kruskal-model-data, lem-gr-kruskal-model-properties, def-gr-smooth-lorentzian-objects, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-christoffel-symbols-of-an-affine-connection, def-geodesic-of-an-affine-connection, prop-coordinate-geodesic-equation, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, def-derivative, thm-chain-rule, thm-algebra-of-derivatives, def-c-r-and-smooth-maps-between-smooth-manifolds, def-interval, def-rational-power, def-countable-choice, ex-the-round-metric-on-the-sphere-as-an-induced-metric]
dependency_roles:
  def-gr-kruskal-model-data: mathematical-premise
  lem-gr-kruskal-model-properties: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-interval: mathematical-premise
  def-rational-power: mathematical-premise
  def-countable-choice: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.1.4: the Kruskal-Szekeres coordinates (6.12)-(6.15), the null horizon surfaces U = 0 and V = 0, the singularity at UV = 1, and the statement that future-directed paths in the interior move towards decreasing r, printed pp. 245-248 (PDF pp. 252-255)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.74)-(7.83): the Kruskal diagram, its four regions, the light cones and the statement that every future-directed path in region II hits r = 0, printed pp. 186-190 (PDF pp. 193-197)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), sections 2.3.2-2.3.3: Kruskal-Szekeres coordinates, the maximal analytic extension and its four regions, printed pp. 19-25"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
verification:
  precheck: pass
---

## Statement

Let $(\mathcal K,r,g_{\mathcal K},N_{\mathcal K})$ be the Kruskal model datum of
mass parameter $m_*>0$ with Schwarzschild radius $s=2G_Nm_*/c^2>0$
([[def-gr-kruskal-model-data]], [[lem-gr-kruskal-model-properties]]), let
$(U,V,\vartheta,\varphi)$ be a Kruskal chart, let
$\gamma_{ij}$ be the round-sphere components in that chart, and define
$A:\mathcal K\to(0,\infty)$ by

$$A:=\frac{4s^3e^{-r/s}}{r},$$

so that in the chart $g_{UV}=g_{VU}=-A/2$, $g_{\vartheta\vartheta}=r^2$,
$g_{\varphi\varphi}=r^2\sin^2\vartheta$ and all other components vanish. For a
$C^1$ curve $\eta:J\to\mathcal K$ with $J$ a nonempty interval write
$\dot\eta=(\dot U,\dot V,\dot\vartheta,\dot\varphi)$ for its coordinate
components, and call $\eta$ **future-directed causal** when
$g_{\mathcal K}(\dot\eta,\dot\eta)\le0$ and
$g_{\mathcal K}(\dot\eta,N_{\mathcal K})<0$ at every parameter value. Then:

**(a) Causal cone criterion.** At every $p\in\mathcal K$ and for every
$X\in T_p\mathcal K$ with chart components $(X^U,X^V,X^\omega)$ one has:
$X$ is causal and future-directed if and only if

$$X^U\ge0,\qquad X^V\ge0,\qquad X^U+X^V>0,\qquad A(p)\,X^UX^V\ \ge\ r(p)^2\,\gamma_p(X^\omega,X^\omega),$$

where $\gamma_p(X^\omega,X^\omega)$ is the round-sphere squared norm of the
angular part. In particular every future-directed causal tangent has both
$X^U\ge0$ and $X^V\ge0$.

**(b) Monotonicity.** Along every future-directed causal $C^1$ curve the
functions $U$ and $V$ are nondecreasing, and along every past-directed causal
$C^1$ curve (where $g(\dot\eta,\dot\eta)\le0$ and
$g(\dot\eta,N_{\mathcal K})>0$) they are nonincreasing.

**(c) Radial null geodesics and their affine parameters.** For every
$(U_0,V_0,\omega_0)\in\mathcal K$ the curve $s\mapsto(U(U_0,V_0,\omega_0;s),V_0,\omega_0)$
defined implicitly by $\dfrac{dU}{ds}(s)=\dfrac{1}{A(U(s),V_0)}$, $U(0)=U_0$,
is a null geodesic of $g_{\mathcal K}$ on its maximal interval, with
$g(\dot\eta,\dot\eta)=0$ and affinely parametrized; the same holds for
$s\mapsto(U_0,V(s),\omega_0)$ with $\dfrac{dV}{ds}=\dfrac{1}{A(U_0,V(s))}$.
Both are future-directed, and $s$ is strictly increasing with $U$, respectively
with $V$, because $A>0$. Moreover $\partial_U r=-\dfrac{s^2Ve^{-r/s}}{r}$ and
$\partial_Vr=-\dfrac{s^2Ue^{-r/s}}{r}$ at every point of $\mathcal K$.

**(d) Escape horizon.** Call a future-directed causal $C^1$ curve $\eta$
**escaping to the right exterior** when there is a parameter value after which
$\eta$ stays in the open quadrant $\{U<0,\ V>0\}$ and
$r(\eta(t))\to+\infty$ as $t\to+\infty$ (a point with $U\ge0$ cannot reach the
quadrant $\{U<0,V>0\}$ at all, by (b), and this is the sense in which the
horizon is a one-way membrane here). Then:

1. no future-directed causal curve issued at a point $p$ with $U(p)\ge0$
   escapes to the right exterior;
2. every point $p$ with $U(p)<0$ admits such a curve: for
   $t>0$ the curve $\eta_p(t):=(U(p),\,V(p)+t,\,\omega(p))$ is a future-directed
   null geodesic (in the parametrization of (c)), it stays in
   $\{U<0,V>0\}$ for $t>1+|V(p)|$ and satisfies
   $r(\eta_p(t))\to+\infty$ as $t\to+\infty$.

Consequently the exact nonescaping set of the datum is $\{U\ge0\}$ with
boundary the null surface $\{U=0\}$, and the past-directed dual statement
singles out $\{V=0\}$ as the boundary of the region reachable from the left
exterior.

**(e) Decreasing areal radius.** If $U(p)>0$ and $V(p)>0$, then along both
future directions of the radial null geodesics of (c) through $p$ the function
$r$ is strictly decreasing: on $s\mapsto(U_0,V(s),\omega_0)$ and on
$s\mapsto(U(s),V_0,\omega_0)$ with $s$ increasing.

**(f) Scope.** All statements are geometric properties of the smooth Kruskal
datum on $\mathcal K$; no maximality, geodesic completeness or uniqueness is
claimed, the set $\{UV=1\}$ (where $r=0$) is not part of $\mathcal K$, and no
statement is made about the physical interpretation of any curve. The escape
notion of (d) is defined by the displayed conditions on $U,V$ and $r$ and does
not presuppose a conformal infinity.

## Facts & Assumptions

**Given:** The Kruskal model datum with $s>0$, a Kruskal chart, the function $A=4s^3e^{-r/s}/r>0$, and the component assignments $g_{UV}=g_{VU}=-A/2$, $g_{\vartheta\vartheta}=r^2$, $g_{\varphi\varphi}=r^2\sin^2\vartheta$.

[L1] $\mathcal K=\{(U,V):UV<1\}\times S^2$ is a smooth four-manifold without boundary; $r:\mathcal K\to(0,\infty)$ is the unique smooth function with $UV=-(r/s-1)e^{r/s}$, the metric $g_{\mathcal K}$ is smooth Lorentzian of signature $(-,+,+,+)$, and $N_{\mathcal K}=\partial_U+\partial_V$ is a time orientation with $g_{\mathcal K}(N_{\mathcal K},N_{\mathcal K})=-A<0$ ([[def-gr-kruskal-model-data]], [[lem-gr-kruskal-model-properties]] clauses (a)-(b)).

[L2] The metric-selected connection of $g_{\mathcal K}$ exists, is unique and has Christoffel symbols $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$ in the Kruskal chart; a curve is a geodesic with affine parameter $s$ precisely when its coordinate components satisfy $\ddot x^a+\sum_{b,c}\Gamma^a{}_{bc}\dot x^b\dot x^c=0$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-metric-selected-connection]], [[def-christoffel-symbols-of-an-affine-connection]], [[def-geodesic-of-an-affine-connection]], [[prop-coordinate-geodesic-equation]]).

[L3] A tangent vector $X$ is causal when $g_{\mathcal K}(X,X)\le0$, future-directed when $g_{\mathcal K}(X,N_{\mathcal K})<0$ and past-directed when $g_{\mathcal K}(X,N_{\mathcal K})>0$ ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]], [[def-gr-smooth-lorentzian-objects]]).

[L4] The inverse of the $2\times2$ block $\begin{pmatrix}0&-A/2\\-A/2&0\end{pmatrix}$ is $\begin{pmatrix}0&-2/A\\-2/A&0\end{pmatrix}$, and the inverse metric has no mixed $U$-angular or $V$-angular entries; the round metric is positive definite on the angular directions ([[lem-gr-kruskal-model-properties]], [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]).

[L5] The function $F(r):=(1-r/s)e^{r/s}$ satisfies $F'(r)=-(r/s^2)e^{r/s}<0$ on $r>0$ and is a smooth strictly decreasing bijection onto $(-\infty,1)$ with smooth inverse; consequently $UV\to-\infty$ holds exactly when $r\to+\infty$, and implicit differentiation of $UV=F(r)$ gives $\partial_Ur=-s^2Ve^{-r/s}/r$, $\partial_Vr=-s^2Ue^{-r/s}/r$ ([[lem-gr-kruskal-model-properties]] clause (a), [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], [[thm-chain-rule]], [[def-derivative]], [[def-rational-power]]).

[L6] A $C^1$ function on an interval whose derivative is $\ge0$ everywhere is nondecreasing, and a $C^1$ function with derivative $>0$ is strictly increasing; the chain, product and quotient rules hold ([[def-derivative]], [[thm-algebra-of-derivatives]], [[def-interval]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L7] The exponential and logarithmic functions are smooth and satisfy $e^{a+b}=e^ae^b$ and $\partial_r e^{r/s}=s^{-1}e^{r/s}$; the displayed functions involving $r$ are smooth on $\mathcal K$ because $r$ is smooth and $r>0$ ([[lem-gr-kruskal-model-properties]], [[def-rational-power]], [[def-countable-choice]]).

## Proof

**Proof technique:** evaluate the metric on a general tangent vector to get the cone criterion, compute the Christoffel symbols along the coordinate fields, differentiate the defining relation of $r$, read monotonicity off the sign of the tangent components, and verify the geodesic, escape and trapping claims directly.

1.1 (Cone criterion.) Writing $X=X^U\partial_U+X^V\partial_V+X^\omega$ with $X^\omega$ angular and using the components of [L1], $g_{\mathcal K}(X,X)=-AX^UX^V+r^2\gamma(X^\omega,X^\omega)$ and $g_{\mathcal K}(N_{\mathcal K},X)=g_{\mathcal K}(\partial_U+\partial_V,X)=-\tfrac{A}{2}(X^U+X^V)$. By [L3] $X$ is causal and future-directed exactly when $-AX^UX^V+r^2\gamma(X^\omega,X^\omega)\le0$ and $X^U+X^V>0$. The causal inequality gives $AX^UX^V\ge r^2\gamma(X^\omega,X^\omega)\ge0$, hence $X^UX^V\ge0$; if one of $X^U,X^V$ were negative the other would be $\le0$ and $X^U+X^V\le0$, contradicting $X^U+X^V>0$, so both are $\ge0$ and one is positive. Conversely, $X^U,X^V\ge0$ with $X^U+X^V>0$ and $AX^UX^V\ge r^2\gamma(X^\omega,X^\omega)$ give both required inequalities. This proves (a). [L1, L3, L4, algebra]

1.2 (Christoffel symbols along the coordinate fields.) In the Kruskal chart the only nonzero components of the inverse metric are $g^{UV}=g^{VU}=-2/A$, $g^{\vartheta\vartheta}=r^{-2}$ and $g^{\varphi\varphi}=r^{-2}\sin^{-2}\vartheta$ by [L4]; all components of $g$ are independent of $U$ and $V$ except through $A$ and $r$, which depend on them through $r$, and the angular components depend on $\vartheta$ only through the explicit $\sin^2\vartheta$. Substituting into the Christoffel formula of [L2] gives $\Gamma^U{}_{UU}=\tfrac12g^{UV}\partial_Ug_{UV}=(1/2)(2/A)\partial_UA=\partial_U\log A$, $\Gamma^V{}_{VV}=\partial_V\log A$, $\Gamma^U{}_{VV}=\Gamma^V{}_{UU}=0$, $\Gamma^\vartheta{}_{UU}=\Gamma^\varphi{}_{UU}=\Gamma^\vartheta{}_{VV}=\Gamma^\varphi{}_{VV}=0$, and $\Gamma^U{}_{UV}=\Gamma^V{}_{UV}=0$; moreover $\Gamma^U{}_{UU}$ and $\Gamma^V{}_{VV}$ are the expressions of [L5]. Hence $\nabla_{\partial_U}\partial_U=(\partial_U\log A)\partial_U$ and $\nabla_{\partial_V}\partial_V=(\partial_V\log A)\partial_V$. [L2, L4, L5, L7, algebra]

1.3 (Radial derivatives of $r$.) The relation $UV=F(r)$ with $F(r)=(1-r/s)e^{r/s}$ of [L5] has $F'(r)=-(r/s^2)e^{r/s}\ne0$ on $r>0$, so implicit differentiation gives $V=F'(r)\partial_Ur$, that is, $\partial_Ur=-s^2Ve^{-r/s}/r$, and $U=F'(r)\partial_Vr$, that is, $\partial_Vr=-s^2Ue^{-r/s}/r$. This proves the derivative formulas of (c). [L5, algebra]

2.1 (Monotonicity.) If $\eta$ is future-directed causal, then by step 1.1 its tangent has $\dot U\ge0$ and $\dot V\ge0$ at every parameter; by [L6] applied to subintervals, $U\circ\eta$ and $V\circ\eta$ are nondecreasing. For past-directed causal curves the same argument with $N_{\mathcal K}$ replaced by $-N_{\mathcal K}$ gives $\dot U\le0$, $\dot V\le0$ and hence nonincreasing functions. This proves (b). [step 1.1, L3, L6, algebra]

2.2 (Radial null geodesics and their affine parameters.) Let $X=k\,\partial_U$ with $k=1/A$ along the curve $U\mapsto(U,V_0,\omega_0)$; by step 1.2 and the chain rule, $\nabla_XX=k^2\nabla_{\partial_U}\partial_U+kk'\partial_U=(k^2\partial_U\log A+kk')\partial_U$, and $k^2\partial_U\log A+kk'=A^{-2}\partial_U\log A-A^{-2}\partial_U\log A=0$ because $k'=-A^{-2}\partial_UA=-k\,\partial_U\log A$. Hence $X$ is parallel along the curve and the curve is a geodesic with tangent $X$, affinely parametrized by the parameter $s$ in which $dU/ds=k=1/A$; this is exactly the parametrization displayed in (c), which is defined on the maximal interval of the autonomous equation $dU/ds=1/A(U,V_0)$ because $A>0$ is smooth there. The curve is null because $g(\partial_U,\partial_U)=0$ by [L1], and future-directed because its tangent has components $(1/A,0,0,0)$ with $X^U+X^V>0$, using the criterion of step 1.1. The same computation with $U,V$ exchanged and $k=1/A$ along $U=U_0$ gives the second family; $s$ is strictly increasing in $U$, respectively in $V$, because $1/A>0$. [step 1.1, step 1.2, L2, L6, algebra]

3.1 (Decreasing radius in the interior quadrant.) If $U(p)>0$ and $V(p)>0$, then step 1.3 gives $\partial_Vr=-s^2Ue^{-r/s}/r<0$ and $\partial_Ur=-s^2Ve^{-r/s}/r<0$ at $p$; by smoothness of the right-hand sides and [L6], $r$ is strictly decreasing along the geodesics of step 2.2 through $p$ in the directions of increasing $V$, respectively increasing $U$, which are the future directions in the affine parameters of step 2.2. This proves (e). [step 1.3, step 2.2, L5, L6, algebra]

3.2 (Escape and nonescape.) Let $\eta$ be future-directed causal with $U(\eta(0))=U(p)\ge0$. By step 2.1, $U\circ\eta\ge U(p)\ge0$; hence $\eta$ never enters the quadrant $\{U<0,V>0\}$ and cannot escape to the right exterior, proving (d)1. Conversely let $U(p)<0$ and consider $\eta_p(t):=(U(p),V(p)+t,\omega(p))$ for $t>0$, which by $UV<1$ at $p$ remains in $\mathcal K$ on some interval; its tangent is $(0,1,0,0)$ with $X^U+X^V=1>0$, so it is future-directed and null by step 1.1, and it is exactly the geodesic of step 2.2 in the $V$-direction with the affine parametrization $dU/ds=1/A$ (reparametrized in $t$). Since $U$ is constant and negative, the curve is in $\{U<0\}$, and for $t>1+|V(p)|$ one has $V(p)+t>0$, so it is in $\{U<0,V>0\}$. Along it $UV=U(p)(V(p)+t)\to-\infty$, so by [L5] $r\to+\infty$; this proves (d)2 and identifies the nonescaping set as $\{U\ge0\}$ with boundary $\{U=0\}$, which is a null surface because $\partial_V$ is null there. Reversing the time orientation replaces $N_{\mathcal K}$ by $-N_{\mathcal K}$ and the roles of $U,V$, so the same argument with past-directed curves singles out $\{V=0\}$. [step 1.1, step 2.1, step 2.2, L1, L5, algebra]

4.1 (Conclusion.) Step 1.1 proves (a), step 2.1 proves (b), steps 1.3 and 2.2 prove (c), step 3.1 proves (e), and step 3.2 proves (d). Clause (f) records that all statements are geometric, that maximality and completeness are not claimed and that the escape notion is the explicit one of the statement. [step 1.1, step 1.3, step 2.1, step 2.2, step 3.1, step 3.2, given] ∎

## Remarks

- **One-way membrane, not a singularity.** The nonescape statement uses only $\dot U\ge0,\dot V\ge0$ along future causal curves; the metric and its curvature remain smooth at $U=0$ by the Kruskal properties lemma of this page, so the horizon's one-way character is a global causal property of the smooth model, not a defect of the metric at the surface.

- **Trapping without the expansion machinery.** Clause (e) states the strictly decreasing areal radius along both future radial null directions at points with $U,V>0$, which is the geometric content of the statement that the spheres $r=$ const in that quadrant are future-trapping; the phrase of the sources is not used as a definition, since the expansion of a null congruence is not defined on this page.
