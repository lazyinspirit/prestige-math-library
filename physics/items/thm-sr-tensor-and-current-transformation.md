---
id: thm-sr-tensor-and-current-transformation
kind: theorem
title: Transformation of tensor, covector, derivative and current components under affine Lorentz maps
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 9
deps: [def-ck-tensor-field-on-minkowski-space,
       lem-inertial-chart-transitions-are-affine-lorentz,
       def-lorentz-map-and-lorentz-group,
       lem-lorentz-map-preserves-metric-and-causal-structure,
       def-lorentz-boost, lem-boost-is-proper-orthochronous-with-inverse,
       def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model,
       def-oriented-minkowski-volume-form,
       def-type-r-s-tensor-on-a-finite-dimensional-vector-space,
       def-algebraic-dual-and-linear-functional,
       def-contraction-of-a-mixed-tensor,
       lem-contraction-is-independent-of-the-basis-formula,
       def-alternating-k-linear-map, def-derivative,
       thm-chain-rule-for-total-derivatives,
       def-matrix-product-and-identity-matrix, def-linear-map,
       thm-algebra-of-derivatives,
       lem-timelike-cone-has-two-convex-components,
       lem-tangent-space-of-affine-minkowski-space-is-v,
       def-dual-family-associated-to-a-basis]
dependency_roles:
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  lem-inertial-chart-transitions-are-affine-lorentz: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-oriented-minkowski-volume-form: mathematical-premise
  def-type-r-s-tensor-on-a-finite-dimensional-vector-space: mathematical-premise
  def-algebraic-dual-and-linear-functional: mathematical-premise
  def-contraction-of-a-mixed-tensor: mathematical-premise
  lem-contraction-is-independent-of-the-basis-formula: mathematical-premise
  def-alternating-k-linear-map: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  lem-tangent-space-of-affine-minkowski-space-is-v: mathematical-premise
  def-dual-family-associated-to-a-basis: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 'Lorentzian signature' pp. 26-28 (PDF pp. 27-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Let $(A,V,\eta,C^+)$ be the affine Minkowski space, let $x$ and $x'$ be
inertial charts whose transition is the affine map $x'(p)=\Lambda x(p)+b$ with
linear part $\Lambda$ (a proper orthochronous Lorentz matrix by
[[lem-inertial-chart-transitions-are-affine-lorentz]]), and let
$\Omega\subseteq A$ be an open subset. Fix $\ell\in\mathbb N\cup\{\infty\}$ and $r,s\in\mathbb N$. Let $J:\Omega\to V$, $k:\Omega\to V^*$ and $T:\Omega\to T^{r,s}(V)$ be a
$\mathcal C^\ell$ vector field, a $\mathcal C^\ell$ covector field and a
$\mathcal C^\ell$ type-$(r,s)$ tensor field on $\Omega$ in the sense of
[[def-ck-tensor-field-on-minkowski-space]], with components $J^a$, $k_a$ and
$T^{a_1\dots a_r}{}_{b_1\dots b_s}$ in the chart $x$, and primed components in
the chart $x'$. Use indices $a,b\in\{0,1,2,3\}$ and $i\in\{1,2,3\}$, summing every repeated upper/lower index. All component identities compare the same event $p$; as coordinate functions their arguments are $u=x(p)$ and $u\prime=x\prime(p)=\Lambda u+b$. Then:

(i) $J'^a=\Lambda^a{}_bJ^b$: a contravariant index gains the factor
$\Lambda^a{}_b$, that is, components transform by multiplication with the
transition matrix;

(ii) $k'_a=(\Lambda^{-1})^b{}_ak_b$: a covariant index gains the factor
$(\Lambda^{-1})^b{}_a$. If $\theta(p)=k_ax^a(p)+\theta_0$ is an affine scalar
function with constant covector $k$ and constant $\theta_0$, then
$\theta(p)=k'_ax'^a(p)+\theta'_0$ with $k'$ as above and
$\theta'_0:=\theta_0-k'_ab^a$, so the phase function is invariant when the
constant term is transformed together with the covector;

(iii) $T'^{a_1\dots a_r}{}_{b_1\dots b_s}
=\Lambda^{a_1}{}_{c_1}\cdots\Lambda^{a_r}{}_{c_r}
(\Lambda^{-1})^{d_1}{}_{b_1}\cdots(\Lambda^{-1})^{d_s}{}_{b_s}
T^{c_1\dots c_r}{}_{d_1\dots d_s}$: every contravariant index gains a factor
$\Lambda$ and every covariant index a factor $\Lambda^{-1}$, and the law is
consistent with the multilinear evaluation of $T(p)$ after substituting the
transformed basis. Every contraction of one contravariant with one covariant
index is invariant, and the metric components satisfy
$\eta'_{ab}=\eta_{ab}$;

(iv) the coordinate partial-derivative operators satisfy
$\partial'_a=(\Lambda^{-1})^b{}_a\partial_b$ when applied to scalar functions
at points where their coordinate representations are totally differentiable.
Consequently, at every event where the component functions of $J$ are totally
differentiable, the divergence is invariant,
$\partial'_aJ'^a=\partial_aJ^a$. These total differentials exist at every
event if $\ell\ge1$; for $\ell=0$ this clause applies only at events where the
specified components are totally differentiable, and does not assert
covariance from the existence of separate partial derivatives alone. For a
$\mathcal C^1$ type-$(2,0)$ field $T$ one has
$\partial'_aT'^{ab}=\Lambda^b{}_c\partial_aT^{ac}$;

(v) alternating covariant tensor fields transform by the covariant law on each
slot; the oriented volume form of the model satisfies
$\epsilon'_{abcd}=\epsilon_{abcd}$, since $\det\Lambda=+1$, whereas a general
Lorentz matrix with $\det=-1$ changes its sign;

(vi) let $J$ be a $\mathcal C^1$ vector field with components
$(J^0,J^1,J^2,J^3)$ in an inertial chart, and write the spatial block as
$J_{\mathrm{cov}}:=(J^1,J^2,J^3)$ and denote by $\partial_i$ the spatial
partial derivatives in the chart. Then the continuity equation
$\partial_aJ^a=0$ is equivalent to
$\partial_0J^0+\sum_i\partial_iJ^i=0$, and under the passive boost with
parameter $\boldsymbol\beta$ ($\Lambda=B(\boldsymbol\beta)$,
$\Lambda^{-1}=B(-\boldsymbol\beta)$) the components transform as
$J'^0=\gamma(J^0-\boldsymbol\beta\cdot J_{\mathrm{cov}})$ and
$J'_{\mathrm{cov}}=J_{\mathrm{cov}}
+\frac{\gamma-1}{|\boldsymbol\beta|^2}(\boldsymbol\beta\cdot J_{\mathrm{cov}})\boldsymbol\beta
-\gamma\boldsymbol\beta J^0$;

(vii) if $U$ is a $\mathcal C^1$ future timelike vector field and $\rho_0$ a
$\mathcal C^1$ scalar field, then $J:=\rho_0U$ is a $\mathcal C^1$ vector field
and its first component is $J^0=\rho_0U^0$. Future timelikeness gives $U^0>0$
in every inertial chart, so one may define the normalized chart direction
$u:=U/U^0$ and the coordinate density $\rho:=J^0$. Then $u^0=1$,
$u^i=U^i/U^0$, $\rho=\rho_0U^0$, and $J=\rho u$ pointwise. The coordinate
density $\rho$ and scalar multiplier $\rho_0$ are different objects:
$\rho=\rho_0$ if and only if $\rho_0(U^0-1)=0$; at points where
$\rho_0\neq0$ equality holds exactly when $U^0=1$. The vector $u$ is a
normalized chart direction; it is not assumed to have unit or four-velocity
normalization. In an $x^0=ct$ convention the associated spatial coordinate
velocity, if interpreted as such, has components $cu^i$; physical
current/density identification requires its own model premise.

**Interpretation boundary.** The identification of a physical charge-current
with a vector field, and of $\rho$ with a measured charge density, is a model
premise of the electromagnetic framework; this item is a statement about the
transformation of components of specified fields and does not by itself assert
that any physical current transforms as a vector.

## Facts & Assumptions

**Given:** The regularity index $\ell\in\mathbb N\cup\{\infty\}$ and ranks $r,s\in\mathbb N$, the affine Minkowski space with inertial charts $x,x'$ related by $x'(p)=\Lambda x(p)+b$, the open set $\Omega\subseteq A$, and the fields $J,k,T$ of the Statement with their components in both charts.

[L1] The transition of two inertial charts is affine with linear part $\Lambda=M^{-1}$, where $M$ is the matrix of the proper orthochronous linear Lorentz map $L$ with $Le_a=e'_a$ and $\Lambda$ is the matrix of $L^{-1}$; the linear parts of transitions are exactly the proper orthochronous Lorentz matrices and their inverses ([[lem-inertial-chart-transitions-are-affine-lorentz]]).

[L2] A linear Lorentz map is a linear isomorphism preserving $\eta$; its matrix in an orthonormal basis satisfies the metric condition; it is proper when its determinant is $+1$ and orthochronous when it maps $C^+$ onto $C^+$; the affine Lorentz maps form a group ([[def-lorentz-map-and-lorentz-group]], [[lem-lorentz-map-preserves-metric-and-causal-structure]]).

[L3] A $\mathcal C^\ell$ type-$(r,s)$ tensor field on $\Omega$ assigns to $p\in\Omega$ a multilinear $T(p):(V^*)^r\times V^s\to\mathbb R$, with components $T^{a_1\dots a_r}{}_{b_1\dots b_s}(p)=T(p)(e^{*a_1},\dots,e_{b_1},\dots)$ in a frame, and regularity is chart-independent ([[def-ck-tensor-field-on-minkowski-space]], [[def-type-r-s-tensor-on-a-finite-dimensional-vector-space]]).

[L4] A type-$(1,0)$ tensor is a vector and a type-$(0,1)$ tensor a covector $V\to\mathbb R$; a basis $(e_a)$ of $V$ has a dual basis $(e^{*a})$ of $V^*$ with $e^{*a}(e_b)=\delta^a_b$ ([[def-type-r-s-tensor-on-a-finite-dimensional-vector-space]], [[def-algebraic-dual-and-linear-functional]]).

[L5] The contraction of the first contravariant slot with the first covariant slot of a type-$(r,s)$ tensor with $r,s\ge1$ is the type-$(r-1,s-1)$ tensor $\operatorname{ctr}(T)(\alpha_2,\dots,v_2,\dots)=\sum_iT(e^i,\alpha_2,\dots,e_i,\dots)$, and the value is independent of the basis used ([[def-contraction-of-a-mixed-tensor]], [[lem-contraction-is-independent-of-the-basis-formula]]).

[L6] An alternating $k$-linear map is a $k$-linear map vanishing whenever two arguments coincide ([[def-alternating-k-linear-map]]); the oriented volume form of the model is $\epsilon(v_0,\dots,v_3)=\det([v_j^a])$ in an inertial frame, an alternating $4$-linear form with $\epsilon_{0123}=+1$ ([[def-oriented-minkowski-volume-form]]).

[L7] For a proper linear Lorentz map $L$ the oriented volume form satisfies $\epsilon(Lv_0,\dots,Lv_3)=\epsilon(v_0,\dots,v_3)$, and for $\det L=-1$ the two sides differ by the sign $-1$ ([[lem-lorentz-map-preserves-metric-and-causal-structure]]).

[L8] At $\boldsymbol\beta=\mathbf0$ the boost is the identity; the quotient expressions in clause (vi) and the proof are used only for nonzero $\boldsymbol\beta$, with their spatial correction interpreted as zero at $\boldsymbol\beta=\mathbf0$. The passive boost with parameter $\boldsymbol\beta$ has the coordinate action and matrix displayed in [[def-lorentz-boost]], with inverse $B(-\boldsymbol\beta)$, and $\gamma=(1-|\boldsymbol\beta|^2)^{-1/2}$ ([[lem-boost-is-proper-orthochronous-with-inverse]]).

[L9] In an inertial chart, $x(p)=E^{-1}(p-o)$ with $E$ the coordinate isomorphism and $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ ([[def-inertial-frame-and-inertial-chart]]). For the conditional coordinate-velocity interpretation in clause (vii), fix a real constant $c>0$ and define the reparametrized coordinate $t:=x^0/c$. This is a mathematical rescaling; no SI unit or physical-clock identification is assumed.

[L10] The affine model $(A,V,\eta,C^+)$ has interval $I(p,q)=\eta(q-p,q-p)$ and its events and displacements carry no additional structure ([[def-sr-affine-minkowski-model]]).

[L11] In an $\eta$-orthonormal basis the timelike set has components described by $T_+=\{x:x^0>|x_{\mathrm{vec}}|\}$ and $T_-=\{x:x^0<-|x_{\mathrm{vec}}|\}$, in particular every future timelike vector has strictly positive time coordinate ([[lem-timelike-cone-has-two-convex-components]]).

[L12] Partial derivatives satisfy the chain rule: if $g$ is totally differentiable at $a$ and $f$ at $g(a)$, then $D(f\circ g)(a)=Df(g(a))\circ Dg(a)$ ([[thm-chain-rule-for-total-derivatives]], [[def-derivative]]); sums, scalar multiples and products of differentiable functions obey the algebra of derivatives ([[thm-algebra-of-derivatives]]), and matrix multiplication has the usual index rule ([[def-matrix-product-and-identity-matrix]], [[def-linear-map]]).



[L13] Under $T_pA=V$, $\partial_a|_p$ denotes the coordinate tangent vector corresponding to $e_a$; $dx^a|_p$ denotes its dual covector, characterized by $dx^a(\partial_b)=\delta^a_b$. This is the canonical tangent identification of [[lem-tangent-space-of-affine-minkowski-space-is-v]] and the finite dual-basis construction of [[def-dual-family-associated-to-a-basis]], not an additional regularity assumption.

## Proof

**Proof technique:** direct.

1.1 Write the transition as $x'^a=\Lambda^a{}_cx^c+b^a$ with $\Lambda$ invertible, $\det\Lambda=+1$ and $\Lambda$ orthochronous by [L1] and [L2]; the inverse relation is $x^c=(\Lambda^{-1})^c{}_a(x'^a-b^a)$. At a point where the scalar coordinate representation is totally differentiable, the affine coordinate maps are differentiable, so the total chain rule [L12] gives $\partial_c=\frac{\partial x'^a}{\partial x^c}\partial'_a=\Lambda^a{}_c\partial'_a$ and $\partial'_a=\frac{\partial x^c}{\partial x'^a}\partial_c=(\Lambda^{-1})^c{}_a\partial_c$, and the two matrices are inverse: $\Lambda^a{}_c(\Lambda^{-1})^c{}_d=\delta^a_d$ and $(\Lambda^{-1})^c{}_a\Lambda^a{}_d=\delta^c_d$ by [L12]. [L1, L2, L12, algebra, L10]

1.2 For (vii), let $U$ be $\mathcal C^1$ future timelike and $\rho_0$ a $\mathcal C^1$ scalar; then $J=\rho_0U$ has components $J^a=\rho_0U^a$ and is $\mathcal C^1$ by the product rule of [L12]. In an inertial chart the future timelike vectors are the coordinate set $C^+=\{x:x^0>|x_{\mathrm{vec}}|\}$ by [L11] and [L9], so $U^0>0$ and $u:=U/U^0$ is well defined with $u^0=1$ and $u^i=U^i/U^0$; moreover $\rho:=J^0=\rho_0U^0$ and $J=\rho_0U=\rho_0U^0(U/U^0)=\rho u$. Since $\rho-\rho_0=\rho_0(U^0-1)$, one has $\rho=\rho_0$ exactly when $\rho_0(U^0-1)=0$, and when $\rho_0\neq0$ this is equivalent to $U^0=1$. The vector $u$ has first component $1$ but is not asserted to satisfy any unit or four-velocity normalization; with the convention $x^0=ct$ of [L9], a curve whose coordinate tangent is proportional to $U$ has $\mathrm dx^i/\mathrm dt=c\,U^i/U^0=cu^i$. No identification of $J$ with a physical current is made: the Interpretation boundary of the Statement records that this requires a model premise. This proves (vii). [L9, L11, L12, algebra]

2.1 For the vector field, [L3] and [L4] write $J=J^c\partial_c$ in the chart $x$ and $J=J'^a\partial'_a$ in the chart $x'$; substituting $\partial_c=\Lambda^a{}_c\partial'_a$ from step 1.1 gives $J=J^c\Lambda^a{}_c\partial'_a$, and comparing coefficients in the basis $(\partial'_a)$ of the tangent space gives $J'^a=\Lambda^a{}_cJ^c$; this proves (i). [L3, L4, L13, step 1.1, algebra]

2.2 For the covector field, write $k=k_b\,dx^b$ and $k=k'_a\,dx'^a$; since $x^c=(\Lambda^{-1})^c{}_a(x'^a-b^a)$, the chain rule [L12] gives $dx^c=(\Lambda^{-1})^c{}_a\,dx'^a$, so $k=k_b(\Lambda^{-1})^b{}_a\,dx'^a$ and comparing coefficients gives $k'_a=(\Lambda^{-1})^b{}_ak_b$. For the phase function, substitute the inverse relation: $k_ax^a+\theta_0=k_a(\Lambda^{-1})^a{}_c(x'^c-b^c)+\theta_0=k'_cx'^c+\theta_0-k'_cb^c$, where the last step uses $k'_c=k_a(\Lambda^{-1})^a{}_c$; hence $\theta=k'_ax'^a+\theta'_0$ with $\theta'_0=\theta_0-k'_ab^a$, and the phase function has the same value at every event in both charts. This proves (ii). [L4, L12, L13, step 1.1, algebra]

2.3 For the tensor law, [L1] gives $e'_a=Le_a$ with $L$ proper orthochronous and matrix $M$ satisfying $e'_a=M^b{}_ae_b$ with $M=\Lambda^{-1}$; consequently the dual bases satisfy $e'^{*a}=\Lambda^a{}_be^{*b}$ (both sides pair with $e'_c=\sum_b(\Lambda^{-1})^b{}_ce_b$ to give $\delta^a_c$ by [L4] and the inverse relations of step 1.1). By the component definition of [L3] and multilinearity of $T(p)$, $T'^{a_1\dots a_r}{}_{b_1\dots b_s}=T(p)(e'^{*a_1},\dots,e'_{b_1},\dots)=\Lambda^{a_1}{}_{c_1}\cdots(\Lambda^{-1})^{d_1}{}_{b_1}\cdots T^{c_1\dots c_r}{}_{d_1\dots d_s}$, which is the displayed law. Contracting the first contravariant with the first covariant index in the transformed components gives $\Lambda^{a}{}_{c}(\Lambda^{-1})^{d}{}_{a}\cdots=\delta^d{}_c\cdots$, which is the contraction of the untransformed components; the remaining free indices retain their respective transformation factors, yielding precisely the component law of the same type-$(r-1,s-1)$ tensor $\operatorname{ctr}(T)$. Thus contraction is invariant as an intrinsic operation, as [L5] states; a fully contracted scalar has the same numerical value in both charts. For the metric, its components are $\eta_{ab}=\eta(e_a,e_b)$ in any frame, and by [L2] and [L1] $\eta'_{ab}=\eta(e'_a,e'_b)=\eta(Le_a,Le_b)=\eta(e_a,e_b)=\eta_{ab}=\operatorname{diag}(-1,1,1,1)_{ab}$ in every inertial frame. This proves (iii). [L1, L2, L3, L4, L5, step 1.1, algebra]

3.1 At an event where all coordinate components of $J$ are totally differentiable, linear combinations and affine precomposition preserve total differentiability by [L12]; this is automatic for $\ell\ge1$ and is the additional pointwise hypothesis for $\ell=0$. For the derivative law on a totally differentiable scalar, step 1.1 gives $\partial'_a=(\Lambda^{-1})^b{}_a\partial_b$. For the divergence, (i) gives $J'^a=\Lambda^a{}_cJ^c$, so $\partial'_aJ'^a=(\Lambda^{-1})^b{}_a\partial_b(\Lambda^a{}_cJ^c)=\delta^b{}_c\partial_bJ^c=\partial_aJ^a$, using the inverse relations of step 1.1 and the index rule of [L12]. For a $C^1$ type-$(2,0)$ field all components are totally differentiable; (iii) gives $T'^{ab}=\Lambda^a{}_c\Lambda^b{}_dT^{cd}$, hence $\partial'_aT'^{ab}=(\Lambda^{-1})^e{}_a\partial_e(\Lambda^a{}_c\Lambda^b{}_dT^{cd})=\delta^e{}_c\Lambda^b{}_d\partial_eT^{cd}=\Lambda^b{}_d\partial_aT^{ad}$. This proves (iv). [L12, step 1.1, step 2.3, algebra]

3.2 An alternating covariant tensor field is a covariant tensor field by [L6], so the covariant law of (iii) applies on each slot and no further structure is involved. For the oriented volume form, its components in the two frames are $\epsilon_{abcd}=\epsilon(e_a,e_b,e_c,e_d)$ and $\epsilon'_{abcd}=\epsilon(e'_a,e'_b,e'_c,e'_d)$ by [L6]; since $e'_a=Le_a$ with $L$ proper by [L1], [L7] gives $\epsilon'_{abcd}=\epsilon(Le_a,Le_b,Le_c,Le_d)=\det(L)\,\epsilon(e_a,e_b,e_c,e_d)=\epsilon_{abcd}$, while for $\det L=-1$ the same computation gives the opposite sign. This proves (v). [L1, L6, L7, step 2.3, algebra]

4.1 For $\boldsymbol\beta=\mathbf0$, [L8] gives $J'=J$ directly; the spatial correction in (vi) is zero by that convention. For nonzero $\boldsymbol\beta$, clause (vi) is the special case of (i) and (iv) for the passive boost: the continuity equation is the component expansion $\partial_aJ^a=\partial_0J^0+\sum_i\partial_iJ^i$, and substituting $\Lambda=B(\boldsymbol\beta)$, $\Lambda^{-1}=B(-\boldsymbol\beta)$ into $J'^a=\Lambda^a{}_bJ^b$ and reading the matrix entries of [L8] gives $J'^0=\gamma(J^0-\boldsymbol\beta\cdot J_{\mathrm{cov}})$ and $J'_{\mathrm{cov}}=J_{\mathrm{cov}}+\frac{\gamma-1}{|\boldsymbol\beta|^2}(\boldsymbol\beta\cdot J_{\mathrm{cov}})\boldsymbol\beta-\gamma\boldsymbol\beta J^0$. [L8, step 2.1, step 3.1, algebra]

5.1 Clause (i) is step 2.1, clause (ii) is step 2.2, clause (iii) is step 2.3, clause (iv) is step 3.1, clause (v) is step 3.2, clause (vi) is step 4.1 and clause (vii) is step 1.2; the Interpretation boundary is a restriction on the reading of the components and is not used as a premise anywhere. This proves every clause of the statement. [step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, step 4.1, step 1.2] ∎
