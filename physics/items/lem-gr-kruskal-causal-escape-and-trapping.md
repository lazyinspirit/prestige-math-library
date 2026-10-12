---
id: lem-gr-kruskal-causal-escape-and-trapping
kind: lemma
title: "The causal cone, the escape horizon and decreasing areal radius in the
  Kruskal model"
status: draft
origin: session
domain: mathematics
dependency_level: 16
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-kruskal-model-data
  - lem-gr-kruskal-model-properties
  - def-gr-smooth-lorentzian-objects
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - def-gr-metric-selected-connection
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-christoffel-symbols-of-an-affine-connection
  - def-geodesic-of-an-affine-connection
  - prop-coordinate-geodesic-equation
  - thm-gr-local-geodesics-and-exponential-map
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - def-derivative
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-interval
  - def-rational-power
  - def-countable-choice
  - ex-the-round-metric-on-the-sphere-as-an-induced-metric
  - def-real-exponential-function-and-e
  - thm-derivative-of-exponential
  - thm-picard-lindelof-local-existence-and-uniqueness
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
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-interval: mathematical-premise
  def-rational-power: mathematical-premise
  def-countable-choice: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos,
        Michaelmas 2019), section 6.1.4: the Kruskal-Szekeres coordinates
        (6.12)-(6.15), the null horizon surfaces U = 0 and V = 0, the
        singularity at UV = 1, and the statement that future-directed paths in
        the interior move towards decreasing r, printed pp. 245-248 (PDF pp.
        252-255)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong\
        /gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity,
        arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.74)-(7.83): the Kruskal diagram,
        its four regions, the light cones and the statement that every
        future-directed path in region II hits r = 0, printed pp. 186-190 (PDF
        pp. 193-197)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), sections
        2.3.2-2.3.3: Kruskal-Szekeres coordinates, the maximal analytic
        extension and its four regions, printed pp. 19-25"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
verification:
  precheck: pass
---

## Statement

Let $(\mathcal K,r,g_{\mathcal K},N_{\mathcal K})$ be the Kruskal model datum of
mass parameter $m_*>0$ with Schwarzschild radius $s=2G_Nm_*/c^2>0$
([[def-gr-kruskal-model-data]], [[lem-gr-kruskal-model-properties]]), let
$(U,V,\xi^2,\xi^3)$ be any Kruskal product chart, and let $\gamma_{ij}$ be
the round-sphere components in its angular chart. In a spherical-polar
Kruskal chart, $(\xi^2,\xi^3)=(\vartheta,\varphi)$ and
$\gamma_{ij}=\operatorname{diag}(1,\sin^2\vartheta)$. Define
$A:\mathcal K\to(0,\infty)$ by

$$A:=\frac{4s^3e^{-r/s}}{r},$$

so that in a product chart $g_{UV}=g_{VU}=-A/2$, $g_{ij}=r^2\gamma_{ij}$ and
the mixed base-angular components vanish. In a spherical-polar chart this
reads $g_{\vartheta\vartheta}=r^2$,
$g_{\varphi\varphi}=r^2\sin^2\vartheta$. For a
$C^1$ curve $\eta:J\to\mathcal K$ with $J$ a nonempty interval write
$\dot\eta=(\dot U,\dot V,\dot\xi^2,\dot\xi^3)$ for its coordinate
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
$(U_0,V_0,\omega_0)\in\mathcal K$ there is a unique maximal solution
$\lambda\mapsto(U(\lambda),V_0,\omega_0)$ of
$\dfrac{dU}{d\lambda}=\dfrac{1}{A(U(\lambda),V_0)}$, $U(0)=U_0$; it is an
affinely parametrized null geodesic of $g_{\mathcal K}$ with
$g(\dot\eta,\dot\eta)=0$. The same holds for
$\lambda\mapsto(U_0,V(\lambda),\omega_0)$ with
$\dfrac{dV}{d\lambda}=\dfrac{1}{A(U_0,V(\lambda))}$. Both are
future-directed, and $\lambda$ increases strictly with $U$, respectively with
$V$, because $A>0$. Moreover $\partial_U r=-\dfrac{s^2Ve^{-r/s}}{r}$ and
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
   null $C^1$ curve, it stays in
   $\{U<0,V>0\}$ for $t>1+|V(p)|$ and satisfies
   $r(\eta_p(t))\to+\infty$ as $t\to+\infty$.

Consequently the exact nonescaping set of the datum is $\{U\ge0\}$ with
boundary the null surface $\{U=0\}$, and the past-directed dual statement
singles out $\{V=0\}$ as the boundary of the region reachable from the left
exterior.

**(e) Decreasing areal radius.** If $U(p)>0$ and $V(p)>0$, then along both
future directions of the radial null geodesics of (c) through $p$ the function
$r$ is strictly decreasing as their affine parameter $\lambda$ increases:
on $\lambda\mapsto(U_0,V(\lambda),\omega_0)$ and on
$\lambda\mapsto(U(\lambda),V_0,\omega_0)$.

**(f) Scope.** All statements are geometric properties of the smooth Kruskal
datum on $\mathcal K$; no maximality, geodesic completeness or uniqueness is
claimed, the set $\{UV=1\}$ (where $r=0$) is not part of $\mathcal K$, and no
statement is made about the physical interpretation of any curve. The escape
notion of (d) is defined by the displayed conditions on $U,V$ and $r$ and does
not presuppose a conformal infinity.

## Facts & Assumptions

**Given:** The Kruskal model datum with $s>0$, a Kruskal chart, the function $A=4s^3e^{-r/s}/r>0$, and the component assignments $g_{UV}=g_{VU}=-A/2$, $g_{\vartheta\vartheta}=r^2$, $g_{\varphi\varphi}=r^2\sin^2\vartheta$.

[L1] $\mathcal K=\{(U,V):UV<1\}\times S^2$ is a smooth four-manifold without boundary; $r:\mathcal K\to(0,\infty)$ is the unique smooth function with $UV=-(r/s-1)e^{r/s}$, the metric $g_{\mathcal K}$ is smooth Lorentzian of signature $(-,+,+,+)$, and $N_{\mathcal K}=\partial_U+\partial_V$ is a time orientation with $g_{\mathcal K}(N_{\mathcal K},N_{\mathcal K})=-A<0$ ([[def-gr-kruskal-model-data]], [[lem-gr-kruskal-model-properties]] clauses (a)-(b)).

[L2] The metric-selected connection of $g_{\mathcal K}$ exists, is unique and has Christoffel symbols $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$ in a product chart; a curve is a geodesic with affine parameter $\lambda$ precisely when its coordinate components satisfy $\ddot x^a+\sum_{b,c}\Gamma^a{}_{bc}\dot x^b\dot x^c=0$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-metric-selected-connection]], [[def-christoffel-symbols-of-an-affine-connection]], [[def-geodesic-of-an-affine-connection]], [[prop-coordinate-geodesic-equation]]).

[L3] A tangent vector $X$ is causal when $g_{\mathcal K}(X,X)\le0$, future-directed when $g_{\mathcal K}(X,N_{\mathcal K})<0$ and past-directed when $g_{\mathcal K}(X,N_{\mathcal K})>0$ ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]], [[def-gr-smooth-lorentzian-objects]]).

[L4] The inverse of the $2\times2$ block $\begin{pmatrix}0&-A/2\\-A/2&0\end{pmatrix}$ is $\begin{pmatrix}0&-2/A\\-2/A&0\end{pmatrix}$, and the inverse metric has no mixed $U$-angular or $V$-angular entries; the round metric is positive definite on the angular directions ([[lem-gr-kruskal-model-properties]], [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]).

[L5] The function $F(r):=(1-r/s)e^{r/s}$ satisfies $F'(r)=-(r/s^2)e^{r/s}<0$ on $r>0$ and is a smooth strictly decreasing bijection onto $(-\infty,1)$ with smooth inverse; consequently $UV\to-\infty$ holds exactly when $r\to+\infty$, and implicit differentiation of $UV=F(r)$ gives $\partial_Ur=-s^2Ve^{-r/s}/r$, $\partial_Vr=-s^2Ue^{-r/s}/r$ ([[lem-gr-kruskal-model-properties]] clause (a), [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], [[thm-chain-rule]], [[def-derivative]], [[def-rational-power]]).

[L6] A $C^1$ function on an interval whose derivative is $\ge0$ everywhere is nondecreasing, and a $C^1$ function with derivative $>0$ is strictly increasing; the chain, product and quotient rules hold ([[def-derivative]], [[thm-algebra-of-derivatives]], [[def-interval]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L7] The exponential function is smooth and satisfies $\partial_r e^{r/s}=s^{-1}e^{r/s}$; the displayed functions involving $r$ are smooth on $\mathcal K$ because $r$ is smooth and $r>0$ ([[lem-gr-kruskal-model-properties]], [[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[def-rational-power]], [[def-countable-choice]]).

## Proof

**Proof technique:** evaluate the metric on a general tangent vector to get the cone criterion, compute the Christoffel symbols along the coordinate fields, differentiate the defining relation of $r$, read monotonicity off the sign of the tangent components, and verify the geodesic, escape and trapping claims directly.

1.1 (Cone criterion.) Writing $X=X^U\partial_U+X^V\partial_V+X^\omega$ with $X^\omega$ angular and using the components of [L1], $g_{\mathcal K}(X,X)=-AX^UX^V+r^2\gamma(X^\omega,X^\omega)$ and $g_{\mathcal K}(N_{\mathcal K},X)=g_{\mathcal K}(\partial_U+\partial_V,X)=-\tfrac{A}{2}(X^U+X^V)$. By [L3] $X$ is causal and future-directed exactly when $-AX^UX^V+r^2\gamma(X^\omega,X^\omega)\le0$ and $X^U+X^V>0$. The causal inequality gives $AX^UX^V\ge r^2\gamma(X^\omega,X^\omega)\ge0$, hence $X^UX^V\ge0$; if one of $X^U,X^V$ were negative the other would be $\le0$ and $X^U+X^V\le0$, contradicting $X^U+X^V>0$, so both are $\ge0$ and one is positive. Conversely, $X^U,X^V\ge0$ with $X^U+X^V>0$ and $AX^UX^V\ge r^2\gamma(X^\omega,X^\omega)$ give both required inequalities. This proves (a). [L1, L3, L4, algebra]

1.2 (Christoffel symbols along the radial coordinate fields.) The inverse $U,V$ block is $g^{UV}=g^{VU}=-2/A$. Since $g_{UV}=-A/2$ and $g_{UU}=0$, the Christoffel formula of [L2] gives
$\Gamma^U{}_{UU}=\frac12g^{UV}(\partial_Ug_{VU}+\partial_Ug_{UV})=(-2/A)(-\tfrac12\partial_UA)=\partial_UA/A$;
similarly $\Gamma^V{}_{VV}=\partial_VA/A$. The same substitution gives $\Gamma^U{}_{VV}=\Gamma^V{}_{UU}=0$, all angular components of $\nabla_{\partial_U}\partial_U$ and $\nabla_{\partial_V}\partial_V$ equal zero, and $\Gamma^U{}_{UV}=\Gamma^V{}_{UV}=0$. Thus $\nabla_{\partial_U}\partial_U=(\partial_UA/A)\partial_U$ and $\nabla_{\partial_V}\partial_V=(\partial_VA/A)\partial_V$. [L2, L4, L5, L7, algebra]

1.3 (Radial derivatives of $r$.) The relation $UV=F(r)$ with $F(r)=(1-r/s)e^{r/s}$ of [L5] has $F'(r)=-(r/s^2)e^{r/s}\ne0$ on $r>0$, so implicit differentiation gives $V=F'(r)\partial_Ur$, that is, $\partial_Ur=-s^2Ve^{-r/s}/r$, and $U=F'(r)\partial_Vr$, that is, $\partial_Vr=-s^2Ue^{-r/s}/r$. This proves the derivative formulas of (c). [L5, algebra]

2.1 (Monotonicity.) If $\eta$ is future-directed causal, then by step 1.1 its tangent has $\dot U\ge0$ and $\dot V\ge0$ at every parameter; by [L6] applied to subintervals, $U\circ\eta$ and $V\circ\eta$ are nondecreasing. For past-directed causal curves the same argument with $N_{\mathcal K}$ replaced by $-N_{\mathcal K}$ gives $\dot U\le0$, $\dot V\le0$ and hence nonincreasing functions. This proves (b). [step 1.1, L3, L6, algebra]

2.2 (Radial null geodesics and maximality.) The supplier [[thm-gr-local-geodesics-and-exponential-map]] gives the unique maximal geodesic through $p$ with initial tangent $A(U_0,V_0)^{-1}\partial_U$. On the open scalar domain $\{U:UV_0<1\}$, the smooth equation $U'=1/A(U,V_0)$ has a unique local solution at every initial value by [[thm-picard-lindelof-local-existence-and-uniqueness]]. Fixing $V=V_0$ and the sphere point, this solution satisfies all geodesic equations: by step 1.2,
$$U''+\Gamma^U{}_{UU}(U')^2=-A^{-3}\partial_UA+(\partial_UA/A)A^{-2}=0,$$
and all other component equations vanish. Uniqueness makes it agree locally with the maximal geodesic. On the latter's connected parameter interval, the set where $V=V_0$, the sphere point is $\omega_0$, $V'=0$, the angular tangent vanishes, and $U'=1/A(U,V_0)$ is nonempty, closed by continuity, and open by this same local construction and geodesic uniqueness. Thus the conditions hold throughout that interval. This yields a scalar solution on the whole maximal geodesic domain. Conversely, any scalar extension would give a geodesic extension by the verified equations, contradicting maximality; hence the scalar and geodesic domains are both maximal. The curve is null because $g(\partial_U,\partial_U)=0$, future-directed by step 1.1, and its affine parameter $\lambda$ increases with $U$ because $1/A>0$. Exchanging $U,V$ proves the second family, in any angular chart including pole charts. [step 1.1, step 1.2, L2, L6, algebra]

3.1 (Decreasing radius in the interior quadrant.) If $U(p)>0$ and $V(p)>0$, then step 1.3 gives $\partial_Vr=-s^2Ue^{-r/s}/r<0$ and $\partial_Ur=-s^2Ve^{-r/s}/r<0$ at $p$; by smoothness of the right-hand sides and [L6], $r$ is strictly decreasing along the geodesics of step 2.2 through $p$ in the directions of increasing $V$, respectively increasing $U$, which are the future directions in the affine parameters of step 2.2. This proves (e). [step 1.3, step 2.2, L5, L6, algebra]

3.2 (Escape and nonescape.) Let $\eta$ be future-directed causal with $U(\eta(0))=U(p)\ge0$. By step 2.1, $U\circ\eta\ge U(p)\ge0$; hence $\eta$ never enters the quadrant $\{U<0,V>0\}$ and cannot escape to the right exterior, proving (d)1. Conversely let $U(p)<0$ and consider $\eta_p(t):=(U(p),V(p)+t,\omega(p))$ for $t>0$. Since $U(p)<0$, its product $U(p)(V(p)+t)$ decreases from a value below $1$ and remains below $1$, so this $C^1$ curve stays in $\mathcal K$ for all $t>0$. Its tangent is $(0,1,0,0)$; by step 1.1 it is future-directed null. Since $U$ is constant and negative, the curve is in $\{U<0\}$, and for $t>1+|V(p)|$ it is in $\{U<0,V>0\}$. Along it $UV=U(p)(V(p)+t)\to-\infty$, so by [L5] $r\to+\infty$. This proves (d)2 and identifies the nonescaping set as $\{U\ge0\}$ with boundary $\{U=0\}$, a null surface because $\partial_V$ is null there. Reversing the time orientation swaps the roles of $U,V$ and gives the past-directed dual statement. [step 1.1, step 2.1, L1, L5, algebra]

4.1 (Conclusion.) Step 1.1 proves (a), step 2.1 proves (b), steps 1.3 and 2.2 prove (c), step 3.1 proves (e), and step 3.2 proves (d). Clause (f) records that all statements are geometric, that maximality and completeness are not claimed and that the escape notion is the explicit one of the statement. [step 1.1, step 1.3, step 2.1, step 2.2, step 3.1, step 3.2, given] ∎

## Remarks

- **One-way membrane, not a singularity.** The nonescape statement uses only $\dot U\ge0,\dot V\ge0$ along future causal curves; the metric and its curvature remain smooth at $U=0$ by the Kruskal properties lemma of this page, so the horizon's one-way character is a global causal property of the smooth model, not a defect of the metric at the surface.

- **Trapping without the expansion machinery.** Clause (e) states the strictly decreasing areal radius along both future radial null directions at points with $U,V>0$, which is the geometric content of the statement that the spheres $r=$ const in that quadrant are future-trapping; the phrase of the sources is not used as a definition, since the expansion of a null congruence is not defined on this page.
