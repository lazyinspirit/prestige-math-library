---
id: ex-model-jacobi-fields-in-positive-zero-and-negative-curvature
kind: example
title: Model jacobi fields in positive zero and negative curvature
status: draft
origin: pipeline
deps:
  - def-comparison-sine-cosine-and-cotangent-functions
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-radial-jacobi-tensor
  - def-constant-sectional-curvature-and-space-form
  - prop-curvature-tensor-of-constant-sectional-curvature
  - prop-half-space-model-geometry
  - prop-round-sphere-model-geometry
  - def-countable-choice
  - def-parallel-section-along-a-curve
  - prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
  - def-jacobi-field
  - def-covariant-derivative-along-a-curve
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§24.1, pp.173–176: the model spaces, their curvature and the model Jacobi fields"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§2, pp.6–11: Jacobi fields in constant curvature and the three sign branches"
---

## Example

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M^n,g)$, $n\ge2$, be a Riemannian manifold of constant sectional curvature
$k\in\mathbb R$, let $\gamma:I\to M$ be a unit-speed geodesic on an interval
$I\subseteq\mathbb R$ with $0\in I$, write $T=\dot\gamma$, let $P_t$ denote
parallel transport along $\gamma$, and let $E$ be a vector of the normal space
$N_0=\{X\in T_{\gamma(0)}M:g(X,T(0))=0\}$. Let $J$ be the unique Jacobi field
along $\gamma$ with
$$J(0)=0,\qquad D_tJ(0)=E.$$
Then, for every $t\in I$,
$$J(t)=\operatorname{sn}_k(t)\,P_tE=A(t)E,$$
where $A$ is the radial Jacobi tensor. When $E\ne0$, the three signs of $k$
give the following separation behaviours:

- $k>0$: $J(t)=\dfrac{\sin(\sqrt k\,t)}{\sqrt k}P_tE$ — the sine branch, whose
  first positive zero is $t=\pi/\sqrt k$; if this time belongs to $I$, then
  $J$ vanishes there and the radial field refocuses;
- $k=0$: $J(t)=t\,P_tE$ — the linear branch, with no zero other than $t=0$;
- $k<0$: $J(t)=\dfrac{\sinh(\sqrt{-k}\,t)}{\sqrt{-k}}P_tE$ — the hyperbolic-sine
  branch, positive and strictly increasing in length for $t>0$, with no
  positive zero.

For $E=0$ the field is identically zero. All zero-time claims concern only
times contained in $I$.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1], a real number $k$, a Riemannian manifold $(M^n,g)$ of constant sectional curvature $k$ with $n\ge2$, a unit-speed geodesic $\gamma:I\to M$ with $0\in I$, parallel transport $P_t$ along $\gamma$, a normal vector $E\in N_0$, and the unique Jacobi field $J$ with $J(0)=0$, $D_tJ(0)=E$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), entering through the constant-curvature interface [[def-constant-sectional-curvature-and-space-form]]; the Jacobi initial-value construction used in [[def-radial-jacobi-tensor]] requires no choice.

[F1] Constant curvature: a Riemannian manifold has constant sectional curvature $k$ exactly when $R(X,Y)Z=k\bigl(g(Y,Z)X-g(X,Z)Y\bigr)$ ([[prop-curvature-tensor-of-constant-sectional-curvature]]); the predicate and the space-form terminology are those of [[def-constant-sectional-curvature-and-space-form]].

[F2] The comparison sine: $\operatorname{sn}_k$ is the piecewise function of [[def-comparison-sine-cosine-and-cotangent-functions]] with $\operatorname{sn}_k(0)=0$ and $\operatorname{sn}_k'(0)=1$, positive on $(0,\pi/\sqrt k)$ when $k>0$, with $\operatorname{sn}_k(\pi/\sqrt k)=0$, and with no positive zero when $k\le0$. It satisfies $\operatorname{sn}_k''+k\operatorname{sn}_k=0$ ([[prop-model-functions-solve-the-constant-curvature-jacobi-equation]]).

[F3] Jacobi fields and radial data: a Jacobi field along $\gamma$ solves $D_t^2J+R(J,T)T=0$ ([[def-jacobi-field]], [[def-covariant-derivative-along-a-curve]]); for every $w\in N_0$ the unique Jacobi field $J_w$ with $J_w(0)=0$ and $D_tJ_w(0)=w$ has $A(t)w=J_w(t)$ and is normal, $g(J_w(t),T(t))=0$ ([[def-radial-jacobi-tensor]]).

[F4] Parallel transport: $P_t$ is characterized by $P_0=\mathrm{id}$ and $D_t(P_tE)=0$ for every $E$ ([[def-parallel-section-along-a-curve]]), and it preserves the metric, hence preserves inner products and normality ([[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]).

[F5] Realizations: the round sphere $S^n_R$ of [[prop-round-sphere-model-geometry]] is a complete Riemannian manifold of constant sectional curvature $1/R^2$ for every $R>0$, and the half-space model of [[prop-half-space-model-geometry]] is a complete Riemannian manifold of constant sectional curvature $-a^2$ for every $a>0$.

## Verification

**Proof technique:** direct: the curvature of a constant-curvature manifold acts as $k$ times the identity on normal vectors, so the explicit field $\operatorname{sn}_k(t)P_tE$ satisfies the Jacobi equation with the prescribed initial data, and uniqueness identifies it with $A(t)E$; the three signs are then read off the comparison functions.

1.1 On normal vectors the curvature endomorphism is $k$ times the identity. [F1, F3, given]
Let $X$ be a vector field along $\gamma$ with $X(t)\perp T(t)$ for every $t$. Since $g(T,T)\equiv1$, the formula of [F1] gives $$R(X,T)T=k\bigl(g(T,T)X-g(X,T)T\bigr)=kX.$$ The computation is pointwise, so it applies at every $t\in I$ and for every normal vector there. [F1, F3, given]

2.1 The field $F(t)=\operatorname{sn}_k(t)P_tE$ is a Jacobi field with the initial data of $J$. [F2, F3, F4, step 1.1]
Because $D_t(P_tE)=0$ by [F4], the covariant derivative along $\gamma$ acts on the scalar multiple by $$D_tF=\operatorname{sn}_k'(t)P_tE,\qquad D_t^2F=\operatorname{sn}_k''(t)P_tE =-k\operatorname{sn}_k(t)P_tE,$$ where the last equality is the differential equation of [F2]. The parallel field $P_tE$ remains normal to $T$ by the metric preservation in [F4], so step 1.1 applies to the field $F$ and gives $R(F,T)T=kF=k\operatorname{sn}_k(t)P_tE$. Adding the two displays, $D_t^2F+R(F,T)T=0$: the field $F$ is a Jacobi field along $\gamma$. At $t=0$ the initial data of [F2] give $F(0)=\operatorname{sn}_k(0)P_0E=0$ and $D_tF(0)=\operatorname{sn}_k'(0)E=E$, because $P_0$ is the identity. [F2, F3, F4, step 1.1]

3.1 The model field is the radial field of $E$. [F3, step 2.1]
By [F3] the Jacobi field with $J(0)=0$ and $D_tJ(0)=E$ is unique, and $A(t)E$ is by definition that field. Since $F$ of step 2.1 is a Jacobi field with exactly these initial data, $F=J$, that is $$J(t)=A(t)E=\operatorname{sn}_k(t)P_tE$$ for every $t\in I$. Both sides are normal fields along $\gamma$ by [F3] and [F4]. [F3, step 2.1]

4.1 The three sign branches and their zero sets. [F2, step 3.1]
Inserting the piecewise formula for $\operatorname{sn}_k$ from [F2] into step 3.1 gives the three displays of the statement. Since $P_t$ preserves lengths, $|J(t)|=|\operatorname{sn}_k(t)|\,|E|$. For $E\ne0$, the zeros on $I$ are exactly the multiples of $\pi/\sqrt k$ lying in $I$ when $k>0$, and only $t=0$ when $k\le0$. In particular the first positive spherical zero occurs at $\pi/\sqrt k$ if that time lies in $I$. For $k<0$ the scalar profile is positive and strictly increasing on $t>0$; the field grows without bound only if $I$ contains arbitrarily large positive times. For $E=0$ the field vanishes identically. [F2, F4, step 3.1]

5.1 Cases, realizations and consistency. [F3, F5, step 1.1, step 3.1, step 4.1]
The case $E=0$ gives the zero field in step 3.1, and the case $t=0$ gives $J(0)=0$; the formula is linear in $E$, so it exhibits $A(t)$ as a linear map $N_0\to N_t$ as asserted in [F3]. For $k>0$ the value $k$ is realized by the round sphere $S^n_R$ of [F5] with $R=1/\sqrt k$, and the refocusing time $\pi/\sqrt k=\pi R$ is exactly the cut time of [[prop-round-sphere-model-geometry]], so the radial field refocuses at the antipode; for $k<0$ the half-space model of [F5] with $a=\sqrt{-k}$ realizes the hyperbolic-sine branch. In particular no curvature sign is excluded and no upper bound on the domain $I$ is needed: the identity of step 3.1 holds on all of $I$, including beyond a zero when $k>0$. Only the inherited [A1] choice is used; the parallel fields, the geodesic and the model functions are explicit. [F3, F5, step 1.1, step 3.1, step 4.1] ∎

## Source locator

Datar §24.1, pp.173–176, computes the model Jacobi fields of the constant curvature spaces and their curvature; Eschenburg §2, pp.6–11, records the three sign branches. The derivation above is carried out locally from the published constant-curvature tensor identity and the in-run comparison-function and radial-tensor items.
