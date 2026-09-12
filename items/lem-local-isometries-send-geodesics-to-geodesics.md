---
id: "lem-local-isometries-send-geodesics-to-geodesics"
kind: "lemma"
title: "Local isometries send geodesics to geodesics"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-riemannian-isometry-and-local-isometry","def-affine-connection-on-a-smooth-manifold","thm-fundamental-theorem-of-riemannian-geometry","def-covariant-derivative-along-a-curve","def-geodesic-of-an-affine-connection"]
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Chapter 20, p. 148
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "transport the Levi-Civita connection locally"
---

## Statement

Let $F:(M,g)\to(N,h)$ be a local Riemannian isometry between smooth Riemannian manifolds without boundary. For every $p\in M$, there are open neighborhoods $U\ni p$ and $V\ni F(p)$ such that $f=F|_U:U\to V$ is a diffeomorphism and
$$df\bigl(\nabla^M_XY\bigr)=\nabla^N_{f_*X}(f_*Y)\circ f$$
for all smooth vector fields $X,Y$ on $U$, where $\nabla^M$ and $\nabla^N$ are the Levi-Civita connections.

Consequently, if $I\subseteq\mathbb R$ is an interval with nonempty interior, $\gamma:I\to M$ is smooth, and $W$ is a smooth vector field along $\gamma$, then
$$D_t^N\bigl(dF_{\gamma(t)}W(t)\bigr)=dF_{\gamma(t)}\bigl(D_t^M W(t)\bigr).$$
In particular, $F\circ\gamma$ is an affinely parametrized geodesic whenever $\gamma$ is. No completeness, connectedness, surjectivity, or length-minimizing hypothesis is required.

## Facts & Assumptions

**Given:** The manifolds, local isometry, interval, curve, and vector field in the statement.

[F1] [[def-riemannian-isometry-and-local-isometry]] makes $F$ a smooth local diffeomorphism satisfying $F^*h=g$.

[F2] [[def-affine-connection-on-a-smooth-manifold]] gives the connection axioms used below, and [[thm-fundamental-theorem-of-riemannian-geometry]] gives each Riemannian metric a unique torsion-free metric-compatible affine connection.

[F3] [[def-covariant-derivative-along-a-curve]] supplies the local coefficient rule for $D_t$ and [[def-geodesic-of-an-affine-connection]] defines an affinely parametrized geodesic by $D_t\gamma'=0$ on an interval with nonempty interior, with one-sided interpretation at an included endpoint.

## Proof

1.1 Fix $p\in M$. By [F1], there are open sets $p\in U\subseteq M$ and $F(p)\in V\subseteq N$ for which $f=F|_U:U\to V$ is a diffeomorphism. Shrinking $U$ to a coordinate neighborhood of $p$ and replacing $V$ by its image preserves this property. The pullback identity restricts to $f^*(h|_V)=g|_U$, so $f$ is an isometry between these neighborhoods. [F1, given]

2.1 For vector fields $X,Y$ on $U$, define $$\overline\nabla_XY=(f^{-1})_*\bigl(\nabla^N_{f_*X}(f_*Y)\bigr).$$ This is well defined because a diffeomorphism sends vector fields on $U$ bijectively to vector fields on $V$. For $a\in C^\infty(U)$ one has $f_*(aX)=(a\circ f^{-1})f_*X$, $f_*(aY)=(a\circ f^{-1})f_*Y$, and $(f_*X)(a\circ f^{-1})=X(a)\circ f^{-1}$. The connection axioms for $\nabla^N$ therefore give $C^\infty(U)$-linearity in $X$, real-linearity in $Y$, and $\overline\nabla_X(aY)=X(a)Y+a\overline\nabla_XY$. Thus $\overline\nabla$ is an affine connection on $U$. [F1, F2, step 1.1]

3.1 Diffeomorphisms preserve brackets: for every $u\in C^\infty(V)$, $$[f_*X,f_*Y](u)=\bigl([X,Y](u\circ f)\bigr)\circ f^{-1},$$ so $[f_*X,f_*Y]=f_*[X,Y]$. Since $\nabla^N$ is torsion free, $$f_*\bigl(\overline\nabla_XY-\overline\nabla_YX-[X,Y]\bigr)=\nabla^N_{f_*X}(f_*Y)-\nabla^N_{f_*Y}(f_*X)-[f_*X,f_*Y]=0.$$ The differential of $f$ is invertible, hence $\overline\nabla$ is torsion free. [F2, step 2.1]

3.2 Because $g(Y,Z)=h(f_*Y,f_*Z)\circ f$, the chain rule and metric compatibility of $\nabla^N$ give $$X\bigl(g(Y,Z)\bigr)=g(\overline\nabla_XY,Z)+g(Y,\overline\nabla_XZ).$$ Indeed, after composing this scalar identity with $f^{-1}$ and using step 2.1, it is exactly $$(f_*X)h(f_*Y,f_*Z)=h(\nabla^N_{f_*X}f_*Y,f_*Z)+h(f_*Y,\nabla^N_{f_*X}f_*Z).$$ Thus $\overline\nabla$ is compatible with $g|_U$. [F1, F2, step 1.1, step 2.1]

4.1 The connection $\overline\nabla$ and the restriction of $\nabla^M$ to $U$ are both torsion free and compatible with $g|_U$. Uniqueness in [F2] gives $\overline\nabla=\nabla^M|_U$. Applying $f_*$ to the definition in step 2.1 yields the asserted local intertwining identity. [F2, step 2.1, step 3.1, step 3.2]

5.1 Fix $t_0\in I$ and use step 1.1 at $\gamma(t_0)$. On a relative interval $J\subseteq I$ about $t_0$ with $\gamma(J)\subseteq U$, take the coordinate frame $E_1,\ldots,E_n$ on $U$ and write $W(t)=w^i(t)E_i|_{\gamma(t)}$. The defining coefficient rule for covariant differentiation along a curve and step 4.1 give $$\begin{aligned}D_t^N(dF(W))&=(w^i)'f_*E_i+w^i\nabla^N_{(f\circ\gamma)'}(f_*E_i)\\&=df\bigl((w^i)'E_i+w^i\nabla^M_{\gamma'}E_i\bigr)=df(D_t^M W).\end{aligned}$$ on $J$. Since $t_0$ was arbitrary, the identity holds on all of $I$. [F1, F3, step 1.1, step 4.1]

6.1 Apply step 5.1 to $W=\gamma'$. Then $dF(\gamma')=(F\circ\gamma)'$, and if $\gamma$ is geodesic, [F3] gives $$D_t^N(F\circ\gamma)'=dF(D_t^M\gamma')=dF(0)=0.$$ Therefore $F\circ\gamma$ is an affinely parametrized geodesic. This uses only the local connection identity, so none of completeness, connectedness, surjectivity, or global injectivity enters. [F3, step 5.1]

7.1 Constant curves are covered because their velocity and acceleration are zero. If $M$ is empty there are no curves to check; in dimension zero every curve from an interval is locally constant, and the same conclusion holds. The proof is unchanged in dimension one. At an included endpoint, step 5.1 is read on a one-sided relative interval and [F3] supplies the one-sided covariant derivative. Each neighborhood is used only after fixing one supplied point or parameter value; no simultaneous selection of neighborhoods is made, so the argument uses no form of the Axiom of Choice. The claim is one-way rather than an equivalence, and it concerns affine parametrization, not preservation of minimizing behavior. [F1, F3, step 1.1, step 5.1, step 6.1] ∎

## Source locator

Datar, Chapter 20, immediately before the proof of Theorem 20.1.1 on printed p. 148, lists among the consequences of a local isometry that “$\phi$ takes geodesics to geodesics”; the geodesic-lifting step on pp. 148–149 uses that consequence. The source does not spell out the local connection-transport calculation there, so steps 1.1–6.1 supply it from Levi-Civita uniqueness.
