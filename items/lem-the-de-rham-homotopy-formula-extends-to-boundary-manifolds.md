---
id: "lem-the-de-rham-homotopy-formula-extends-to-boundary-manifolds"
kind: "lemma"
title: "The de Rham homotopy formula extends to boundary manifolds"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary","def-integration-along-the-unit-interval-for-a-differential-form","thm-differentiation-under-the-integral-sign-on-a-compact-rectangle","thm-newton-leibniz-with-interior-derivative","def-the-standard-smooth-step-function","thm-heine-borel-rn","thm-heine-cantor-metric"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Nigel Hitchin, Differentiable Manifolds (2014), de Rham homotopy operator
      url: https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $M,N$ be smooth manifolds, possibly with boundary. Suppose $H:M\times[0,1]\to N$ is smooth in the local coordinate-extension sense, including at both time endpoints and at boundary points of $M$. For a $k$-form $\omega$ on $N$, define, when $k\ge1$,
$$ (L_H\omega)_x(v_1,\ldots,v_{k-1})=\int_0^1(H^*\omega)_{(x,t)}(\partial_t,(v_1,0),\ldots,(v_{k-1},0))\,dt,$$
and put $L_H=0$ in degree zero and negative degrees. Then $L_H\omega$ is a smooth $(k-1)$-form and
$$H_1^*-H_0^*=dL_H+L_Hd.$$
Here forms on the parameter product mean locally extendible coordinate forms; no general theory of manifolds with corners is invoked. In particular the endpoint pullbacks induce equal de Rham cohomology maps. The assertion is choice-free.

## Facts & Assumptions

[F1] [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]] gives local-extension exterior calculus, its naturality and the quotient convention at a boundary.

[F2] [[def-integration-along-the-unit-interval-for-a-differential-form]] specifies the decomposition $\theta=\alpha_t+dt\wedge\beta_t$ and the interval integral $K\theta=\int_0^1\beta_t\,dt$.

[F3] [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]] permits each parameter derivative through an integral with a continuous derivative integrand on a compact rectangle.

[F4] [[thm-newton-leibniz-with-interior-derivative]] integrates a continuous time derivative on $[0,1]$ to its endpoint difference.

[F5] [[def-the-standard-smooth-step-function]] supplies a smooth function $s$ equal to zero for arguments at most zero and one for arguments at least one, with values in $[0,1]$.

[F6] [[thm-heine-borel-rn]] supplies finite subcovers for closed bounded Euclidean rectangles, in particular the interval $[0,1]$.

[F7] [[thm-heine-cantor-metric]] makes continuous coefficient derivatives uniformly continuous on compact rectangles.

## Proof

**Given:** The homotopy $H$ and a smooth form $\omega$, with the local-extension convention in the statement.

1.1 At a point $(x,t)$ choose source and target coordinates and local Euclidean extensions of the map and the finitely many form coefficients. Shrink the map domain so it lies in the domain of the extended coefficients. The ordinary Euclidean pullback then restricts to a locally extendible form $\theta=H^*\omega$ on the parameter product. Derivatives are uniquely determined there: they agree on the dense set where the spatial half-space coordinate and the time coordinate are both interior, hence everywhere by continuity. The Euclidean formula for $d$ and naturality restrict to this product just as in [F1], giving $d\theta=H^*d\omega$. [F1, given]

2.1 Fix a spatial chart point $x_0$. Each coefficient of $\theta$ has smooth extensions on product neighbourhoods of $(x_0,t)$. There are finitely many coefficients; intersect their neighbourhoods at one $t$. Consider the family of all nested time intervals $J\Subset I$ for which a coefficient extension exists on $W\times I$ for some Euclidean neighbourhood $W$ of $x_0$. These inner intervals cover $[0,1]$, by the local extension property at each one time; no interval or extension is chosen as a function of time. By [F6], finitely many $J_i$ cover $[0,1]$. For these finitely many members only, take corresponding $I_i,W_i$ and extensions. For each, take numbers $a_i<b_i<c_i<d_i$ inside $I_i$ with $J_i\cap[0,1]\subseteq[b_i,c_i]$ and put $$\rho_i(t)=s\!\left(\frac{t-a_i}{b_i-a_i}\right)s\!\left(\frac{d_i-t}{d_i-c_i}\right).$$ It is one on $[b_i,c_i]$, zero off $[a_i,d_i]$ and smooth by [F5]. Thus $R=\sum_i\rho_i$ is positive on an open neighbourhood $J$ of $[0,1]$. Put $\psi_i=\rho_i/R$ on $J$. Their sum is one and each is supported away from the endpoints of $I_i$. [F5, F6, step 1.1]

3.1 On the finite intersection $W=\bigcap_iW_i$, multiply the $i$th coefficient extension by $\psi_i(t)$ and extend that product by zero outside $I_i$. Its support condition makes the extension smooth on $W\times J$. Summing the finitely many products gives a smooth coefficient extension on $W\times J$ of the original coefficient on $(W\cap M)\times[0,1]$, since every original coefficient equals each extension there and $\sum_i\psi_i=1$. This construction is used only to prove local smoothness at the one point $x_0$; it selects no families over all points of $M$. [step 2.1]

4.1 Decompose $\theta=\alpha_t+dt\wedge\beta_t$ as in [F2]. Integrate each extended coefficient of $\beta$ from step 3.1 over $[0,1]$. On any smaller closed spatial rectangle in $W$, repeated use of [F3] gives $$\partial_x^I\int_0^1 b(x,t)\,dt=\int_0^1\partial_x^I b(x,t)\,dt.$$ Each right side is continuous: [F7] bounds its change by the uniform change of the integrand times the interval length. Thus these integrals define a smooth Euclidean extension near $x_0$. A spatial coordinate change multiplies the coefficient vector of $\beta_t$ by an exterior-power transition matrix depending on $x$ only; moving this finite matrix through the integral proves that the restrictions patch as a form. Consequently $K\theta=L_H\omega$ is well defined and smooth, including at $\partial M$. [F2, F3, F7, step 3.1]

5.1 The coordinate formula of [F1], applied on the extensions and restricted back, gives $$d\theta=d_M\alpha_t+dt\wedge(\partial_t\alpha_t-d_M\beta_t).$$ The minus sign comes from moving $d_M$ past $dt$. By [F4], $\int_0^1\partial_t\alpha_t\,dt=\alpha_1-\alpha_0$ coefficientwise. Step 4.1 also gives $d_MK\theta=\int_0^1d_M\beta_t\,dt$. Therefore $$d_MK\theta+Kd\theta=\alpha_1-\alpha_0.$$ Using $d\theta=H^*d\omega$ from step 1.1 and $\alpha_t=H_t^*\omega$, this is the asserted homotopy identity. [F1, F2, F4, step 1.1, step 4.1]

6.1 For a closed form, step 5.1 says $H_1^*\omega-H_0^*\omega=d(L_H\omega)$, so the endpoint classes agree in the quotient of [F1]. In degree zero $\beta=0$ and $K\theta=0$, while $Kd\theta$ is the integral of the time derivative; [F4] gives the same identity. In degree one $L_H\omega$ is an ordinary smooth function, including at the spatial boundary. Zero forms, negative degrees, constant homotopies and empty source or target cases satisfy the same formula with the appropriate zero spaces. Both time endpoints were included in steps 2.1–5.1. Only finitely many extensions at one specified point and explicit interval cutoffs were used, so no choice axiom is needed. [F1, F4, step 2.1, step 4.1, step 5.1] ∎
