---
id: thm-bonnet-conjugate-radius-theorem
kind: theorem
title: Bonnet conjugate radius theorem
status: published
origin: pipeline
deps:
  - thm-index-lemma
  - def-index-form-of-a-geodesic-segment
  - def-sectional-curvature
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-countable-choice
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-riemann-curvature-four-tensor
  - def-comparison-sine-cosine-and-cotangent-functions
  - thm-existence-and-uniqueness-of-parallel-sections
  - prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
  - thm-ftc-second-part
  - thm-algebra-of-derivatives
  - def-radial-jacobi-tensor
  - thm-hopf-rinow
  - def-riemannian-metric-and-riemannian-manifold
  - def-geodesic-of-an-affine-connection
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§27.1, printed pp.199–200: the conjugate radius under a positive curvature bound"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§12, pp.59–62: Bonnet's conjugate-point theorem and Myers' theorem"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold of dimension
$n\ge2$, let $k>0$ be a real number, and suppose that every tangent two-plane
$\sigma$ satisfies $K(\sigma)\ge k$ for the sectional curvature
([[def-sectional-curvature]]). Let $\gamma:\mathbb R\to M$ be a unit-speed
geodesic, $T:=\dot\gamma$, and let
$b:=\pi/\sqrt k$. Then there exists an instant $t\in(0,b]$ such that
$\gamma(0)$ and $\gamma(t)$ are conjugate along $\gamma|_{[0,t]}$
([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]).

Equivalently: on such a manifold every unit-speed geodesic
$\gamma:\mathbb R\to M$ has a conjugate instant to its start no later than
$\pi/\sqrt k$. The proof is the index-lemma test-field
argument of Bonnet; it uses $n\ge2$ to obtain one normal direction, $k>0$ so
that the model sine $\operatorname{sn}_k$ vanishes at $b$, and the lower bound
$K\ge k$ only through the sign of the pointwise integrand. Completeness enters
only so that every maximal geodesic is defined on all of $\mathbb R$
([[thm-hopf-rinow]]); the conjugacy conclusion itself is local along
$[0,b]$. No minimizing hypothesis is needed.

## Facts & Assumptions

**Given:** The complete connected boundaryless Riemannian $n$-manifold $(M,g)$ with $n\ge2$, the constant $k>0$ with $K\ge k$ on every tangent two-plane, the unit-speed geodesic $\gamma:\mathbb R\to M$, and the inherited $\mathrm{AC}_\omega$ of [A1].

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the index-form, parallel-transport and Hopf–Rinow suppliers used below; the test field constructed below is a single explicit field and adds no selection.

[F1] Index lemma: let $a<b$ and let $\gamma$ be an affinely parametrized geodesic along which no $t\in(a,b]$ makes $\gamma(a)$ and $\gamma(t)$ conjugate; for $u\in T_{\gamma(a)}M$, $w\in T_{\gamma(b)}M$ there is exactly one Jacobi field $J$ with $J(a)=u$, $J(b)=w$, and for every continuous field $V$ that is $C^1$ piecewise on a finite subdivision with $V(a)=u$, $V(b)=w$ one has $I_\gamma(J,J)\le I_\gamma(V,V)$, with equality if and only if $V=J$ ([[thm-index-lemma]]).

[F2] The index form is $I_\gamma(V,W)=\sum_k\int_{t_{k-1}}^{t_k}(g(D_tV,D_tW)-g(R(V,\dot\gamma)\dot\gamma,W))\,dt$ on any common finite subdivision, and $\mathcal X_0(\gamma)=\{V:V(a)=V(b)=0\}$ ([[def-index-form-of-a-geodesic-segment]]); the curvature four-tensor is $\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$ ([[def-riemann-curvature-four-tensor]]).

[F3] For an orthonormal pair $(X,Y)$ the sectional curvature is $K(\operatorname{span}\{X,Y\})=\operatorname{Rm}(X,Y,Y,X) =g(R(X,Y)Y,X)$ ([[def-sectional-curvature]], [[def-riemann-curvature-four-tensor]]).

[F4] For $k>0$ the model sine satisfies $\operatorname{sn}_k''+k\operatorname{sn}_k=0$, $\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=1$ and $\operatorname{sn}_k(\pi/\sqrt k)=0$, with $\operatorname{sn}_k>0$ on $(0,\pi/\sqrt k)$ ([[prop-model-functions-solve-the-constant-curvature-jacobi-equation]], [[def-comparison-sine-cosine-and-cotangent-functions]]).

[F5] Newton–Leibniz: if $G$ is differentiable on $[a,b]$ with integrable derivative then $\int_a^bG'=G(b)-G(a)$ ([[thm-ftc-second-part]]); the product rule gives $(\varphi\varphi')'=\varphi'^2+\varphi\varphi''$ ([[thm-algebra-of-derivatives]]).

[F6] Parallel sections exist and are unique for prescribed initial data, and $g$-parallel transport preserves inner products ([[thm-existence-and-uniqueness-of-parallel-sections]], [[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]). The normal space $N_0=\{X\in T_{\gamma(0)}M:g(X,T(0))=0\}$ is $(n-1)$-dimensional ([[def-radial-jacobi-tensor]]), so $n\ge2$ gives a unit vector $e\in N_0$; unit vectors satisfy $g(e,e)=1$ ([[def-riemannian-metric-and-riemannian-manifold]]).

[F7] Completeness makes maximal geodesics defined on all of $\mathbb R$ ([[thm-hopf-rinow]]); $g(T,T)\equiv1$ and $D_tT=0$ for a unit-speed geodesic ([[def-geodesic-of-an-affine-connection]]).

## Proof

1.1 The test field. [F4, F6, F7, given]
Put $b:=\pi/\sqrt k$ and let $e\in N_0$ be a unit normal vector, which exists because $\dim N_0=n-1\ge1$ by [F6]. Let $E$ be the parallel field along $\gamma|_{[0,b]}$ with $E(0)=e$, and put $V(t):=\operatorname{sn}_k(t)E(t)$ for $t\in[0,b]$. By [F6] $|E|\equiv1$, and metric compatibility of the Levi-Civita connection makes $g(E,T)$ constant along $\gamma$; its value $g(e,T(0))=0$ at $t=0$ shows $E(t)\perp T(t)$ for every $t$, with $(E(t),T(t))$ orthonormal. Since $\operatorname{sn}_k$ is smooth with $\operatorname{sn}_k(0)=\operatorname{sn}_k(b)=0$ by [F4], the field $V$ is smooth and belongs to $\mathcal X_0(\gamma|_{[0,b]})$; and $V\ne0$, because $\operatorname{sn}_k(b/2)>0$ while $|E(b/2)|=1$. [F4, F6, F7, given]

1.2 The index form of the test field is nonpositive. [F2, F3, F4, F5, given]
Because $E$ is parallel, $D_tV=\operatorname{sn}_k'E$, so $g(D_tV,D_tV)=\operatorname{sn}_k'^2$; and the quadratic term is $$g(R(V,T)T,V)=\operatorname{sn}_k^2\,g(R(E,T)T,E)=\operatorname{sn}_k^2\,K(\operatorname{span}\{E,T\}),$$ where [F3] was used with the orthonormal pair $(E,T)$ and the four-tensor identity of [F2]. By the hypothesis $K\ge k$ of the Given and $\operatorname{sn}_k^2\ge0$, the integrand is pointwise at most $\operatorname{sn}_k'^2-k\operatorname{sn}_k^2$, so $$I_\gamma(V,V)\le\int_0^b\bigl(\operatorname{sn}_k'^2-k\,\operatorname{sn}_k^2\bigr)dt.$$ By the model equation of [F4] and the product rule in [F5], $\bigl(\operatorname{sn}_k\operatorname{sn}_k'\bigr)' =\operatorname{sn}_k'^2+\operatorname{sn}_k\operatorname{sn}_k'' =\operatorname{sn}_k'^2-k\operatorname{sn}_k^2$; Newton–Leibniz in [F5] therefore evaluates the integral as $$\bigl[\operatorname{sn}_k\operatorname{sn}_k'\bigr]_0^b=\operatorname{sn}_k(b)\operatorname{sn}_k'(b)-\operatorname{sn}_k(0)\operatorname{sn}_k'(0)=0-0=0,$$ using $\operatorname{sn}_k(0)=\operatorname{sn}_k(b)=0$ from [F4]. Hence $I_\gamma(V,V)\le0$. [F2, F3, F4, F5, given]

2.1 The index lemma with zero endpoint values bounds the same integral from below. [F1, F2, step 1.1]
Suppose, toward the conjugacy conclusion, that no $t\in(0,b]$ makes $\gamma(0)$ and $\gamma(t)$ conjugate along $\gamma|_{[0,t]}$. Then the hypothesis of [F1] holds on $[0,b]$, and applying [F1] with $u=w=0\in T_{\gamma(0)}M$ (respectively $T_{\gamma(b)}M$) produces a unique Jacobi field $J$ along $\gamma|_{[0,b]}$ with $J(0)=J(b)=0$, together with the inequality $I_\gamma(J,J)\le I_\gamma(V,V)$ for the admissible field $V$ of step 1.1, with equality if and only if $V=J$. By the assumed absence of conjugacy there is no nonzero such $J$, so $J=0$ and $I_\gamma(J,J)=I_\gamma(0,0)=0$. Thus $0\le I_\gamma(V,V)$. [F1, F2, step 1.1]

3.1 Equality is forced and contradicts the nontriviality of the test field. [step 1.2, step 2.1]
Step 1.2 gives $I_\gamma(V,V)\le0$ and step 2.1 gives $0\le I_\gamma(V,V)$, so $I_\gamma(V,V)=0$ and the inequality of [F1] is an equality. By the equality clause of the index lemma quoted in [F1] this forces $V=J$; but $J=0$ and $V\ne0$ by step 1.1. This contradiction shows that the assumption "no $t\in(0,b]$ makes $\gamma(0)$ and $\gamma(t)$ conjugate" is false, so there is $t\in(0,b]$ with $\gamma(0)$ and $\gamma(t)$ conjugate along $\gamma|_{[0,t]}$, as claimed. [step 1.2, step 2.1]

4.1 Scope of the hypotheses and boundary cases. [step 3.1, F4, F7]
The dimension hypothesis $n\ge2$ is exactly what [F6] needs to produce one unit normal vector; in dimension $1$ the normal space is zero and no test field exists. This theorem assumes $k>0$ and makes no assertion for $k\le0$: the model sine then has no positive zero, so the test-field argument in step 1.2 gives no conjugacy conclusion. The case $t=b$ is included, so the bound is "by $\pi/\sqrt k$" and not "before $\pi/\sqrt k$"; the round sphere of constant curvature $k$ realizes conjugacy exactly at $b$, so the bound cannot be improved. Completeness is used only through [F7] to have the geodesic defined on the closed interval $[0,b]$, and no minimizing hypothesis, no cut-locus hypothesis and no upper curvature bound are used. The argument selects one unit normal vector and one parallel field, both explicitly, and spends no choice beyond [A1]. [step 3.1, F4, F7] ∎
