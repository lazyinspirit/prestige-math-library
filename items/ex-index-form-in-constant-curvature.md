---
id: ex-index-form-in-constant-curvature
kind: example
title: Index form in constant curvature
status: draft
origin: pipeline
deps:
  - cor-pi-is-the-first-positive-sine-zero
  - def-constant-sectional-curvature-and-space-form
  - def-countable-choice
  - def-covariant-derivative-along-a-curve
  - def-index-form-of-a-geodesic-segment
  - def-jacobi-field
  - def-parallel-section-along-a-curve
  - def-riemannian-metric-and-riemannian-manifold
  - ex-jacobi-fields-in-constant-sectional-curvature
  - lem-integration-by-parts-for-the-index-form
  - prop-curvature-tensor-of-constant-sectional-curvature
  - thm-chain-rule
  - thm-linearity-of-the-integral
  - thm-monotonicity-of-the-integral
  - thm-nonnegative-continuous-with-zero-integral-vanishes
  - thm-sine-and-cosine-derivatives
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Equation (10.15) and the index-form discussion, printed p.186 / PDF label P203; the curvature term of the index form is the constant-curvature term computed here."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§21.2, the index form, printed pp.156–157; §23.1–23.3, positivity and conjugate points, printed pp.165–169. Datar's sign convention agrees with the local one."
---

## Example

Assume exactly $\mathrm{AC}_\omega$ through the declared dependencies. Let
$(M,g)$ be a finite-dimensional Riemannian manifold without boundary of
constant sectional curvature $K\in\mathbb R$, let $a<b$, and let
$\gamma:[a,b]\to M$ be a unit-speed affinely parametrized geodesic. Write
$T=\dot\gamma$ and, for a field $V$ along $\gamma$,
$$V_\perp:=V-g(V,T)T.$$

(a) For all continuous piecewise $C^1$ fields $V,W$ along $\gamma$,
$$I_\gamma(V,W)=\int_a^b\bigl(g(D_tV,D_tW)-K\,g(V_\perp,W_\perp)\bigr)\,dt,$$
and in particular $I_\gamma(V,V)=\int_a^b\bigl(g(D_tV,D_tV)-K|V_\perp|^2\bigr)\,dt$.
On the fixed-endpoint subspace this is the formula
$I_\gamma(V,V)=\int_a^b(|D_tV|^2-K|V_\perp|^2)\,dt$.

(b) Suppose $K>0$, put $L:=\pi/\sqrt K$, let $\gamma:[0,L]\to M$ be a
unit-speed affinely parametrized geodesic, and let $E$ be a parallel normal
field along $\gamma$ with $g(E,E)=1$. Such a field $E$ is data of the example
and no existence claim is made here. Put
$$s_K(t)=\frac{\sin(\sqrt K\,t)}{\sqrt K},\qquad J(t):=s_K(t)E(t).$$
Then $J$ is a nonzero Jacobi field with $J(0)=J(L)=0$, and
$I_\gamma(J,W)=0$ for every $W\in\mathcal X_0(\gamma)$; in particular
$I_\gamma(J,J)=0$, so the fixed-endpoint index form on $[0,L]$ is degenerate.

(c) With the same data and any $L>\pi/\sqrt K$, the field
$W(t)=\sin(\pi t/L)E(t)$ is smooth, lies in $\mathcal X_0(\gamma)$, and
$$I_\gamma(W,W)=\Bigl(\frac{\pi^2}{L^2}-K\Bigr)\int_0^L\sin^2\Bigl(\frac{\pi t}{L}\Bigr)dt<0.$$
So on a unit-speed geodesic segment of length $L>\pi/\sqrt K$ the
fixed-endpoint index form is negative on a field and is not positive
semidefinite.

## Facts & Assumptions

**Given:** The constant-curvature manifold $(M,g)$, the unit-speed affine
geodesic $\gamma$ on its nondegenerate interval, a field $V$ as in (a), the
positive curvature $K>0$ and the length $L=\pi/\sqrt K$ in (b), and, in (b)
and (c), a parallel normal unit field $E$ along $\gamma$.

[A1] Countable choice is the assumption $\mathrm{AC}_\omega$ of
[[def-countable-choice]]. It is inherited here through the index-form and
constant-curvature interfaces
([[def-index-form-of-a-geodesic-segment]],
[[prop-curvature-tensor-of-constant-sectional-curvature]],
[[ex-jacobi-fields-in-constant-sectional-curvature]]). The pointwise algebra,
the trigonometric computations and the two test fields use no further choice,
and no full Axiom of Choice is assumed.

[F1] Constant sectional curvature $K$ means that every tangent two-plane has
sectional curvature $K$; in dimensions zero and one the predicate is vacuous
for every $K$ ([[def-constant-sectional-curvature-and-space-form]]).

[F2] Under this hypothesis the curvature operator is
$$R(X,Y)Z=K\bigl(g(Y,Z)X-g(X,Z)Y\bigr)$$
([[prop-curvature-tensor-of-constant-sectional-curvature]]).

[F3] The index form of a geodesic segment on the space of continuous
piecewise $C^1$ fields is the finite sum of the integrals of
$g(D_tV,D_tW)-g(R(V,\dot\gamma)\dot\gamma,W)$, and
$\mathcal X_0(\gamma)$ is its fixed-endpoint subspace
([[def-index-form-of-a-geodesic-segment]]).

[F4] The metric $g$ is symmetric, bilinear and positive definite, so
$|U|^2=g(U,U)\ge0$ with equality exactly for $U=0$
([[def-riemannian-metric-and-riemannian-manifold]]).

[F5] $D_t$ and $D_t^2$ are the covariant derivatives along $\gamma$, with
one-sided values at an included endpoint
([[def-covariant-derivative-along-a-curve]]).

[F6] A parallel field satisfies $D_tE=0$, and $E$ is normal when
$g(E,T)=0$ ([[def-parallel-section-along-a-curve]]).

[F7] For $K>0$ the normal Jacobi fields $J$ along a unit-speed geodesic with
$J(0)=0$ are exactly the fields $s_K(t)E(t)$ with $E$ a parallel normal field;
the exponential factor is $s_K(t)=\sin(\sqrt K\,t)/\sqrt K$
([[ex-jacobi-fields-in-constant-sectional-curvature]]).

[F8] A Jacobi field satisfies $D_t^2J+R(J,T)T=0$ on the interval
([[def-jacobi-field]]).

[F9] If $V$ is $C^2$ and $W$ is $C^1$ on the pieces of a finite subdivision,
then $I_\gamma(V,W)=[g(D_tV,W)]_a^b$ minus the derivative-jump terms minus
$\int_a^b g(D_t^2V+R(V,T)T,W)\,dt$, the jumps being absent when both fields are
smooth ([[lem-integration-by-parts-for-the-index-form]]).

[F10] $\sin\pi=0$, and $\sin x>0$ for $0<x<\pi$
([[cor-pi-is-the-first-positive-sine-zero]]).

[F11] $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$ and $\sin0=0$
([[thm-sine-and-cosine-derivatives]]); the chain rule gives the derivatives of
$t\mapsto\sin(\alpha t)$ for constant $\alpha$ ([[thm-chain-rule]]).

[F12] For an integrable $h$ and real $\lambda$,
$\int_a^b\lambda h=\lambda\int_a^b h$ ([[thm-linearity-of-the-integral]]).

[F13] A nonnegative integrable function has nonnegative integral
([[thm-monotonicity-of-the-integral]]).

[F14] A continuous nonnegative function on $[a,b]$ with integral $0$ vanishes
identically ([[thm-nonnegative-continuous-with-zero-integral-vanishes]]).

## Verification

**Proof technique:** insert the constant-curvature operator into the index
form, then evaluate the sine solution and a sine test field explicitly.

1.1 For every field $V$ along $\gamma$ and every $t$ one has $g(V_\perp,T)=0$ and $R(V,T)T=KV_\perp$. [F2, F4, given]
By definition of $V_\perp$ and bilinearity of $g$, $g(V_\perp,T)=g(V,T)-g(V,T)g(T,T)=0$ because $\gamma$ has unit speed, $g(T,T)=1$. Then [F2] gives $R(V,T)T=K(g(T,T)V-g(V,T)T)=K(V-g(V,T)T)=KV_\perp$.

1.2 In the setting of (b), the field $J(t)=s_K(t)E(t)$ is a nonzero Jacobi field with $J(0)=J(L)=0$. [F6, F7, F10, F11]
The field $E$ is parallel and normal by [F6], so [F7] identifies $s_KE$ as a normal Jacobi field with $J(0)=0$. Since $s_K(0)=\sin0/\sqrt K=0$ and $s_K(L)=\sin(\pi)/\sqrt K=0$ by [F11] and [F10], both endpoint values vanish; and $s_K(t)>0$ for $0<t<L$ by [F10] while $|E(t)|=1$, so $J$ is not the zero field.

1.3 Let $\varphi(t)=\sin(\pi t/L)$ for $0\le t\le L$. Then $\varphi$ is smooth with $\varphi(0)=\varphi(L)=0$ and $\varphi''(t)=-(\pi/L)^2\varphi(t)$. [F10, F11]
The chain rule [F11] gives $\varphi'(t)=(\pi/L)\cos(\pi t/L)$ and $\varphi''(t)=-(\pi/L)^2\sin(\pi t/L)$. The endpoints use $\sin0=0$ and $\sin\pi=0$.

2.1 For all continuous piecewise $C^1$ fields $V,W$ along $\gamma$, the index form is $I_\gamma(V,W)=\int_a^b(g(D_tV,D_tW)-Kg(V_\perp,W_\perp))dt$, and on the diagonal $I_\gamma(V,V)=\int_a^b(g(D_tV,D_tV)-K|V_\perp|^2)dt$. [F3, F4, step 1.1]
By step 1.1, $R(V,T)T=KV_\perp$ at every $t$; moreover $g(V_\perp,W)=g(V_\perp,W_\perp)$ because $W-W_\perp=g(W,T)T$ is parallel to $T$ and $g(V_\perp,T)=0$. Substituting into the defining sum of [F3] and using the diagonal identification $g(V_\perp,V_\perp)=|V_\perp|^2$ of [F4] gives both displayed identities, in particular on $\mathcal X_0(\gamma)$.

2.2 $I_\gamma(J,W)=0$ for every $W\in\mathcal X_0(\gamma)$. [F5, F8, F9, step 1.2]
Both $J$ and $W$ are continuous on $[0,L]$, with $J$ smooth and $W$ piecewise $C^1$, so [F9] applies with no derivative jumps: the boundary term $[g(D_tJ,W)]_0^L$ vanishes because $W(0)=W(L)=0$, and the integral term vanishes pointwise because $D_t^2J+R(J,T)T=0$ by [F8] and step 1.2. Since $J$ is a nonzero element of the subspace $\mathcal X_0(\gamma)$, the fixed-endpoint index form on $[0,L]$ is degenerate.

2.3 In the setting of (c), $W(t)=\varphi(t)E(t)$ lies in $\mathcal X_0(\gamma)$ and $I_\gamma(W,W)=((\pi/L)^2-K)\int_0^L\varphi^2dt$. [F2, F5, F6, F9, F12, step 1.3]
The field $W$ is smooth because $\varphi$ and $E$ are, and $W(0)=W(L)=0$ by step 1.3, so $W\in\mathcal X_0(\gamma)$. Since $D_tE=0$ by [F6], one has $D_tW=\varphi'E$ and $D_t^2W=\varphi''E$; and $R(W,T)T=K(g(T,T)W-g(W,T)T)=K\varphi E$ by [F2], because $g(E,T)=0$ and $g(T,T)=1$. So $D_t^2W+R(W,T)T=(\varphi''+K\varphi)E$, and the pairing with $W$ is $(\varphi''+K\varphi)\varphi$. Applying [F9] with $V=W$ and no jumps, the boundary term is $[g(D_tW,W)]_0^L=[\varphi'\varphi|E|^2]_0^L=0$ because $\varphi(0)=\varphi(L)=0$, hence $I_\gamma(W,W)=-\int_0^L(\varphi''+K\varphi)\varphi\,dt$. Step 1.3 gives $\varphi''+K\varphi=(K-(\pi/L)^2)\varphi$, so the last integral equals $(K-(\pi/L)^2)\int_0^L\varphi^2dt$ by [F12], and its negative is the displayed value.

2.4 In the setting of (c), $\int_0^L\varphi^2dt>0$. [F10, F13, F14, step 1.3]
The function $\varphi^2$ is continuous and nonnegative on $[0,L]$. At the midpoint $t=L/2$ one has $\varphi(L/2)=\sin(\pi/2)>0$ by [F10], so $\varphi^2$ is not identically zero; if its integral vanished, [F14] would force $\varphi\equiv0$, a contradiction. Therefore the integral is nonzero, and it is $\ge0$ by [F13]; hence it is strictly positive.

3.1 If $L>\pi/\sqrt K$ then $I_\gamma(W,W)<0$. [step 2.3, step 2.4, algebra]
By step 2.3, $I_\gamma(W,W)=((\pi/L)^2-K)\int_0^L\varphi^2dt$. The assumption $L>\pi/\sqrt K$ makes $(\pi/L)^2-K<0$, and step 2.4 makes the second factor positive, so the product is negative. Therefore the fixed-endpoint index form on a unit-speed segment of length $L>\pi/\sqrt K$ is not positive semidefinite.

4.1 Boundary, degeneracy and choice audit. [A1, F1, F3, F5, F9, step 1.1, step 2.1, step 2.2, step 3.1]
The interval $[a,b]$ of (a) is nondegenerate and included endpoints carry the one-sided derivatives of [F5]. In (b) and (c) the length $L>0$ is fixed and $0$ is an included endpoint; at the critical length $L=\pi/\sqrt K$ the case (c) is excluded and case (b) shows only degeneracy, not negativity. The formulas are vacuous in the empty manifold and in dimension zero, where no unit-speed geodesic exists; in dimension one every field is parallel to $T$, so $V_\perp=0$, part (a) reduces to $I_\gamma(V,V)=\int|D_tV|^2dt$, and parts (b) and (c) are vacuous because no normal direction exists. For $K=0$ part (a) gives the flat formula $I_\gamma(V,W)=\int g(D_tV,D_tW)dt$, while (b) and (c) require $K>0$. The zero field has zero index form, and the nonzero field $J$ of step 2.2 is the explicit degeneracy witness. Assumption [A1] is inherited from the index-form and constant-curvature suppliers; the two test fields are given by explicit formulas and no selection is made. The example asserts identities and one-way implications and claims no equivalence.
$\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, equation (10.15) and the surrounding index-form discussion, printed p.186 / PDF label P203, states the index form on proper normal fields and computes its curvature term in constant curvature; Datar, *Lectures on Riemannian Geometry*, §21.2 (printed pp.156–157) and §23.1–23.3 (printed pp.165–169), treats the same form and its positivity below the first conjugate point. The reduction to $K g(V_\perp,W_\perp)$, the sine zero mode and the negative sine test field are computed above rather than quoted.
