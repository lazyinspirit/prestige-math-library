---
id: def-radial-jacobi-tensor
kind: definition
title: Radial Jacobi tensor
status: draft
origin: pipeline
deps:
  - def-jacobi-field
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-existence-and-uniqueness-of-parallel-sections
  - def-covariant-derivative-along-a-curve
  - def-levi-civita-connection
  - def-riemann-curvature-four-tensor
  - def-curvature-of-an-affine-connection
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§26.1–26.2 and 28.1, pp.191–197, 205–209: the radial Jacobi tensor A(t) and its frame matrix"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§2–4, pp.6–16: the same tensor in the matrix Riccati calculus"
---

## Definition

Let $(M,g)$ be a Riemannian manifold of dimension $n\ge2$ and let
$\gamma:I\to M$ be a **unit-speed** geodesic on an interval $I\subseteq\mathbb R$
with nonempty interior and $0\in I$; write $p:=\gamma(0)$ and
$T(t):=\dot\gamma(t)$, so that $g(T,T)\equiv1$ and $D_tT=0$. The **normal space**
at time $t$ is
$$N_t:=\{X\in T_{\gamma(t)}M:g_{\gamma(t)}(X,T(t))=0\},$$
an $(n-1)$-dimensional subspace, and $N_0\subseteq T_pM$ is its initial model.

For $w\in N_0$, let $J_w$ be the unique Jacobi field along $\gamma$ with
$$J_w(0)=0,\qquad D_tJ_w(0)=w,$$
as supplied by
[[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]; the
derivative at the included endpoint $0$ is one-sided when $I$ has $0$ as an
endpoint, and $J_w$ solves $D_t^2J+R(J,T)T=0$ in the conventions of
[[def-jacobi-field]]. Then $J_w$ is **normal**, $g(J_w(t),T(t))=0$ for every
$t\in I$: the function $u(t):=g(J_w(t),T(t))$ has
$u'(t)=g(D_tJ_w(t),T(t))$ and $u''(t)=g(D_t^2J_w(t),T(t))=-\operatorname{Rm}(J_w,T,T,T)=0$
by metric compatibility of the Levi-Civita connection
([[def-levi-civita-connection]], [[def-covariant-derivative-along-a-curve]]),
the curvature convention $\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$
([[def-riemann-curvature-four-tensor]]) and the following local metric-compatibility calculation. For smooth local
fields $X,Y,Z,W$, expand
$XYg(Z,W)-YXg(Z,W)-[X,Y]g(Z,W)=0$ twice by metric compatibility.
The mixed first-derivative terms cancel, leaving
$$g(R(X,Y)Z,W)+g(Z,R(X,Y)W)=0,$$
with the curvature commutator of [[def-curvature-of-an-affine-connection]].
Taking $Z=W=T$ gives $g(R(X,Y)T,T)=0$, without invoking the
countable-choice-dependent full curvature-symmetry theorem. Thus $u^{\prime\prime}=0$, while
$u(0)=0$ and $u'(0)=g(w,T(0))=0$ because $w\perp T(0)$; hence $u\equiv0$.

**The radial Jacobi tensor** of $\gamma$ is the family of linear maps
$$A(t):N_0\longrightarrow N_t,\qquad A(t)w:=J_w(t),$$
defined for $t\in I$. It is well defined by the existence and uniqueness of
$J_w$, it is linear in $w$ because $J_{\lambda w+\mu w'}-\lambda J_w-\mu J_{w'}$
is a Jacobi field with both initial data zero and therefore vanishes by
uniqueness, and it is smooth in $t$ because the coefficients of the Jacobi
equation depend smoothly on $t$. Its initial values are $A(0)=0$ and, in the
parallel identification introduced next, $\bar A'(0)=\operatorname{id}_{N_0}$.

**Parallel identification.** Let $E_1,\dots,E_{n-1}$ be an orthonormal basis of
$N_0$ and let $P_t:T_pM\to T_{\gamma(t)}M$ be parallel transport along $\gamma$,
which exists uniquely for every $t\in I$ by
[[thm-existence-and-uniqueness-of-parallel-sections]] and maps $N_0$ onto
$N_t$, because $g(P_tw,T(t))=g(w,T(0))=0$ for $w\in N_0$ is constant in $t$ by
metric compatibility. Composing with $P_t$ represents $A$ by the smooth matrix
family
$$\bar A(t):=P_t^{-1}\circ A(t)\in\operatorname{End}(N_0),$$
with $\bar A(0)=0$ and $\bar A'(0)=\operatorname{id}_{N_0}$: differentiating
$\bar A(t)w=P_t^{-1}J_w(t)$ at $t=0$ gives $(\bar A'(0))w=D_tJ_w(0)=w$ for
every $w\in N_0$. In the parallel orthonormal frame $(P_tE_j)$ the tensor $A$ is
recovered from $\bar A$, and the matrix satisfies the **Jacobi equation**
$\bar A''+R_\gamma\bar A=0$, where
$R_\gamma(t)\in\operatorname{End}(N_0)$ is defined by
$R_\gamma(t)w:=P_t^{-1}\bigl(R(P_tw,T(t))T(t)\bigr)$. This matrix description is
a representation of the same tensor, not a second definition: it depends on the
chosen parallel frame only through conjugation by the (constant) change of
orthonormal basis of $N_0$, so invariance under conjugation transports
statements about invertibility, self-adjointness, positivity and trace of
$\bar A$ to $A$.

The tensor is used only up to the first conjugate instant in the results that
follow; no claim about $A(t)$ beyond such an instant is part of this
definition.
