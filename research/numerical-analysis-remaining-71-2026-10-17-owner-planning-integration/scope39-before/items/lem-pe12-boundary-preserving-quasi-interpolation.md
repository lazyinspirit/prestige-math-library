---
id: lem-pe12-boundary-preserving-quasi-interpolation
kind: lemma
title: Boundary-preserving quasi-interpolation is stable and strongly approximating
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [lem-pe12-quasiuniform-mass-inverse-decay, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, lem-zero-extension-from-w-one-p-zero, thm-zero-boundary-piecewise-polynomials-in-w10p, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, lem-mollification-commutes-with-weak-derivatives-in-the-interior, thm-holder-inequality-for-integrals, cor-vector-valued-ftc-and-lipschitz-bound, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, lem-smooth-bump-between-concentric-euclidean-balls, prop-mollifier-families-are-l-one-approximate-identities, thm-l-one-approximate-identities-converge-in-l-p, thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset, thm-lebesgue-measure-of-a-box-of-every-kind, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lars Diening, Johannes Storn, and Tabea Tscherpel, On the Sobolev and Lp-Stability of the L2-Projection, arXiv:2008.01801v2"
      url: https://arxiv.org/pdf/2008.01801v2
      locator: "§4.3–4.4, PDF pp. 24–25: zero-boundary L2-projector stability and its use of approximation operators. Their Scott–Zhang operator is not imported; the local mollified construction below is proved directly."
    - title: "Christian Clason, Introduction to Finite Element Methods, arXiv:1709.08618v2"
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12 §12.1, PDF pp. 102–103: conforming finite-element spaces and the associated L2 projection."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Use either mesh branch and the nodal space defined
in [[lem-pe12-quasiuniform-mass-inverse-decay]]. For $d\ge2$, assume
$\Omega$ is a bounded polyhedral open set whose boundary is locally a graph
of a Lipschitz function with $\Omega$ on one side; for $d=1$, use a bounded
nonempty interval or a finite nonempty union of bounded intervals with
pairwise disjoint closures. Let $1\le p<\infty$. There is a linear map
$$
Q_h:W_0^{1,p}(\Omega)\longrightarrow V_h
$$
with the following construction. Fix a nonnegative $\rho\in C_c^\infty(B(0,1))$
with $\int\rho=1$, let $E_0$ be extension by zero, and set
$S_hv=\rho_h*E_0v$ with $\rho_h(x)=h^{-d}\rho(x/h)$. The degree-$k$
coefficient of $Q_hv$ at every interior node $z$ is $S_hv(z)$; every
boundary-node coefficient is zero. For all sufficiently fine meshes,
$$\|v-Q_hv\|_{L^p(\Omega)}\le Ch\|\nabla v\|_{L^p(\Omega)},\qquad \|\nabla Q_hv\|_{L^p(\Omega)}\le C\|\nabla v\|_{L^p(\Omega)}.$$
Consequently $Q_hv\to v$ in $W^{1,p}(\Omega)$ for each
$v\in W_0^{1,p}(\Omega)$. Constants are uniform over the fixed mesh family
and may depend on $d,k,p,\Omega,\theta,\sigma$ and $\rho$. The operator
$Q_h$ is not asserted to be a projector.

## Facts & Assumptions

**Given:** Countable Choice, one mesh branch of
[[lem-pe12-quasiuniform-mass-inverse-decay]], its nodal space $V_h$, a fixed
$1\le p<\infty$, and $v\in W_0^{1,p}(\Omega)$.

[F1] On each cell, the Lagrange coefficient estimates scale like
$h_K^{d/p}$ in $L^p$ and like $h_K^{d/p-1}$ for gradients; the local basis
reproduces constants and affine polynomials. Globally the coefficient
estimates scale like $h^{d/p}$; graph balls have polynomial growth and the
mesh families have the stated $\theta,\sigma$ bounds
([[lem-pe12-quasiuniform-mass-inverse-decay]]).

[F2] For every open $\Omega$, zero extension maps $W_0^{1,p}(\Omega)$ into
$W^{1,p}(\mathbb R^d)$ and preserves the function and weak-gradient norms
([[lem-zero-extension-from-w-one-p-zero]]).

[F3] On a matching simplex mesh, a continuous piecewise polynomial with
zero polynomial trace on every boundary facet belongs to $W_0^{1,p}$ for
finite $p$ ([[thm-zero-boundary-piecewise-polynomials-in-w10p]]). The
one-dimensional interval case is proved locally below.

[F4] A unit-mass smooth bump generates a smooth convolution and derivatives
pass under the integral; its mollifier family is an $L^1$ approximate
identity, and convolution by it converges in every finite $L^p$
([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]],
[[lem-mollification-commutes-with-weak-derivatives-in-the-interior]],
[[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]],
[[prop-mollifier-families-are-l-one-approximate-identities]],
[[thm-l-one-approximate-identities-converge-in-l-p]]).

[F5] Hölder's inequality bounds convolution evaluation against an $L^p$
function by the $L^{p'}$ norm of the kernel
([[thm-holder-inequality-for-integrals]]).

[F6] A differentiable curve on a compact interval satisfies its integral
fundamental theorem, and compactly supported $W^{1,p}(\mathbb R^d)$ functions
can be approximated by compactly supported smooth functions
([[cor-vector-valued-ftc-and-lipschitz-bound]],
[[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]).

[F7] The support of a convolution is contained in the closure of the sum of
the supports ([[thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset]]).

[F8] $W_0^{1,p}$ is the norm closure of $C_c^\infty(\Omega)$ and its norm
uses the function and first weak derivatives
([[def-wkp-zero-as-a-sobolev-closure]],
[[def-sobolev-space-wkp-and-its-norm]]).

[F9] The smooth bump lemma supplies a nonnegative compactly supported
$\rho_0$ equal to one on an inner ball; its integral is finite and positive
because its support is bounded and it is one on a ball containing a box of
positive volume. Thus $\rho=\rho_0/\int\rho_0$ is an admissible unit-mass
bump ([[lem-smooth-bump-between-concentric-euclidean-balls]],
[[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[A1] Countable Choice is assumed in the zero-extension, mollification,
Sobolev-closure, and approximation interfaces cited above
([[def-countable-choice]]).

## Proof

1.1 The coefficients define a linear map into the algebraic conforming piecewise-polynomial space: shared-face nodes coincide, so the face polynomials have identical nodal data and hence identical traces; all boundary coefficients are zero, so each boundary-facet polynomial vanishes. For $d\ge2$, [F3] therefore gives $V_h\subset W_0^{1,p}(\Omega)$. For $d=1$, write a mesh function as $w$, let $M$ bound its finitely many piecewise derivatives, and extend it by zero. It is continuous at every mesh node and at every component endpoint. Integrating the derivative on each of the finitely many subintervals between two points using the fundamental theorem in [F6] shows $|w(x)-w(y)|\le M|x-y|$ on $\mathbb R$; integration by parts on those subintervals shows that the zero extension has the piecewise derivative as its weak derivative. Thus it is compactly supported in $W^{1,p}(\mathbb R)$. [A1, F1, F3, F6, F8, given, construct]

1.2 Let $u=E_0v$. For a cell $K$, choose a cube $C_K$ of side $Rh$ centered at an interior point of $K$, where the fixed $R$ is large enough that $K$, every radius-$h$ ball centered at one of its nodes, and every radius-$2h$ ball centered at a point of $K$ lie in $C_K$. The cubes have bounded overlap: if $x\in C_K$, then $K\subset B(x,C_Rh)$; the cells have disjoint interiors and volume at least $c h^d$, so only uniformly many can meet that ball. For smooth $u$ on a cube $C$, the segment fundamental theorem, Hölder, Jensen's inequality, and a change of variables on the two ranges $t\le1/2$ and $t\ge1/2$ give $$ \|u-u_C\|_{L^p(C)}\le C_d\operatorname{diam}(C)\|\nabla u\|_{L^p(C)}, \qquad u_C=|C|^{-1}\int_Cu. $$ Indeed, Jensen's inequality and $u(x)-u(y)=\int_0^1\nabla u(tx+(1-t)y)\cdot(x-y)\,dt$ give $$ \|u-u_C\|_{L^p(C)}^p\le\frac{\operatorname{diam}(C)^p}{|C|} \int_C\int_C\int_0^1|\nabla u(tx+(1-t)y)|^p\,dt\,dy\,dx. $$ For $t\ge1/2$ change the $x$ variable, and for $t\le1/2$ change the $y$ variable; both inverse Jacobians are at most $2^d$ and the images stay in $C$. This proves the displayed Poincaré estimate. Since $u=E_0v$ is compactly supported in $W^{1,p}(\mathbb R^d)$, [F6] approximates it by smooth functions in that norm, so the same cube estimate holds for $u$. [A1, F6, given, algebra]

2.1 In the one-dimensional branch, for $x$ in a component interval choose the nearer endpoint; integrating the derivative from that endpoint by [F6] gives $|w(x)|\le M\operatorname{dist}(x,\mathbb R\setminus\Omega)$. Because there are finitely many distinct endpoints, choose $\varepsilon$ smaller than one quarter of their minimum separation. Translate and rescale the bump from [F9] at each endpoint to obtain $\chi_{a,\varepsilon}$ equal to one within $\varepsilon$ of $a$ and zero outside distance $2\varepsilon$. The endpoint supports are disjoint; the product $\eta_\varepsilon=\prod_{a\in\partial\Omega}(1-\chi_{a,\varepsilon})$ is smooth, vanishes within distance $\varepsilon$ of each endpoint, equals one at distance at least $2\varepsilon$, and satisfies $|\eta_\varepsilon'|\le C/\varepsilon$. Thus $w-\eta_\varepsilon w$ and its weak derivative are supported in a boundary layer of measure $O_\Omega(\varepsilon)$ and bounded there by $C_\Omega M$. On each partition interval $\eta_\varepsilon w$ is smooth times polynomial, is continuous at nodes, and vanishes near component endpoints; integration by parts on the finitely many intervals cancels all interior endpoint terms. Its zero extension therefore belongs to $W^{1,p}(\mathbb R)$ with derivative $\eta_\varepsilon'w+ \eta_\varepsilon w'$ on the pieces. Hence $\eta_\varepsilon w\to w$ in $W^{1,p}(\mathbb R)$. Each cutoff product has compact support a positive distance from $\mathbb R\setminus\Omega$; convolving it with a sufficiently small mollifier gives a function in $C_c^\infty(\Omega)$ by [F4] and [F7], and the convolution converges in $W^{1,p}$ by [F4]. This proves $w\in W_0^{1,p}(\Omega)$ by [F8] and completes the range assertion in $d=1$. [A1, F4, F6, F7, F8, F9, step 1.1, given, algebra]

2.2 If $K$ has no boundary node, put $c_K=u_{C_K}$. If it has a boundary node, put $c_K=0$. In $d\ge2$, compactness of the boundary gives a finite subcover of its Lipschitz graph charts; taking the largest chart Lipschitz constant and the smallest chart radius yields uniform $\eta,r_0>0$ such that each boundary point $z$ and $0<r\le r_0$ have an exterior cone sector in $B(z,r)$ of measure at least $\eta r^d$: in a chart $x_d>g(x')$ with Lipschitz constant $L$, the cone $x_d<g(z')-L|x'-z'|$ is exterior, and a fixed smaller cone has that volume. For sufficiently small $h$, a boundary node $z$ of $K$ therefore gives $|C_K\setminus\Omega|\ge\eta'|C_K|$. In $d=1$, at a boundary endpoint the exterior interval inside $C_K$ has a fixed positive fraction of its length; for finitely many separated components take $h$ smaller than their minimum gap divided by $2R$. In the boundary case $u=0$ on $C_K\setminus\Omega$, so $$ |u_{C_K}|\,|C_K\setminus\Omega|^{1/p} \le\|u-u_{C_K}\|_{L^p(C_K\setminus\Omega)}. $$ The cube estimate of step 1.2 then gives, in either case, $$ \|u-c_K\|_{L^p(C_K)}\le Ch\|\nabla u\|_{L^p(C_K)}. $$ [A1, step 1.2, given, algebra]

2.3 Fix $\psi\in C_c^\infty(\Omega)$ and let $\delta=\operatorname{dist}(\operatorname{supp}\psi,\partial\Omega)>0$. For $h<\delta/2$, $S_h\psi$ is zero on every cell with a boundary node: every point of such a cell is within distance $h$ of the boundary, while the convolution samples only a radius-$h$ ball. Thus $Q_h\psi=0=S_h\psi$ on those cells. Every other cell has only interior nodes, so $Q_h\psi$ is the ordinary nodal interpolant of $S_h\psi$ there. Since $k\ge1$, this interpolant reproduces affine polynomials. Taylor's formula about a cell vertex and the local coefficient estimates in [F1] give $$ \|Q_h\psi-S_h\psi\|_{L^p(K)}\le Ch^2|K|^{1/p}\|D^2\psi\|_\infty, \qquad \|\nabla(Q_h\psi-S_h\psi)\|_{L^p(K)} \le Ch|K|^{1/p}\|D^2\psi\|_\infty. $$ The nonnegative unit-mass kernel gives $S_h\psi\to\psi$ in $W^{1,p}(\Omega)$ and $\|D^2S_h\psi\|_\infty\le\|D^2\psi\|_\infty$. Summing cell bounds proves $Q_h\psi\to\psi$ in $W^{1,p}$. [F1, F4, step 1.1, given, algebra]

3.1 For each interior node $z$ of $K$, Hölder [F5] gives $$ |S_hv(z)-c_K|\le\|\rho_h\|_{L^{p'}(\mathbb R^d)} \|u-c_K\|_{L^p(B(z,h))} \le Ch^{-d/p}\|u-c_K\|_{L^p(C_K)}. $$ At a boundary node both the coefficient and $c_K$ are zero in the boundary case. If $K$ has no boundary node, every local node is interior and the local nodal basis reproduces the constant $c_K$. Applying the local coefficient estimate of [F1] to the coefficients of $Q_hv-c_K$, and using step 2.2, gives $$ \|Q_hv-c_K\|_{L^p(K)}\le Ch\|\nabla u\|_{L^p(C_K)},\qquad \|\nabla Q_hv\|_{L^p(K)}\le C\|\nabla u\|_{L^p(C_K)}. $$ The boundary-node case uses $c_K=0$; the no-boundary-node case uses $\sum_{z\in K}\phi_z=1$. [F1, F5, step 2.2, given, algebra]

4.1 Since $v=u$ on $K$, step 2.2 and the first estimate of step 3.1 imply $$ \|v-Q_hv\|_{L^p(K)}\le Ch\|\nabla u\|_{L^p(C_K)}. $$ Raise this and the gradient estimate of step 3.1 to the $p$th power, sum over cells, and use the bounded overlap from step 1.2 and the norm preservation in [F2]. This proves both global estimates in the Statement. Also $\|Q_hw\|_{W^{1,p}}\le C\|w\|_{W^{1,p}}$ for every $w\in W_0^{1,p}$ and all sufficiently small $h$, by the gradient bound and $\|Q_hw\|_p\le\|w\|_p+Ch\|\nabla w\|_p$. [F1, F2, step 1.2, step 3.1, given, algebra]

5.1 For arbitrary $v\in W_0^{1,p}(\Omega)$ and $\varepsilon>0$, [F8] provides $\psi\in C_c^\infty(\Omega)$ with $\|v-\psi\|_{W^{1,p}}<\varepsilon$. The uniform bound in step 4.1 and the smooth convergence in step 2.3 imply $$ \limsup_{h\to0}\|Q_hv-v\|_{W^{1,p}} \le(C+1)\|v-\psi\|_{W^{1,p}}<(C+1)\varepsilon. $$ Letting $\varepsilon\downarrow0$ proves strong convergence for every $v\in W_0^{1,p}(\Omega)$. [F8, step 4.1, step 2.3, given, algebra] ∎
