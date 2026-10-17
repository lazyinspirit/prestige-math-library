---
id: ex-finite-basis-projector-optimization-on-grassmann
kind: example
title: Complex finite-basis PC-VAR optimization on Grassmann
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps:
  - def-stiefel-grassmann-optimization-conventions
  - thm-stiefel-grassmann-tangent-projections
  - prop-stiefel-grassmann-riemannian-gradient-formulas
  - alg-riemannian-trust-region
  - thm-stiefel-retractions-are-first-order
  - thm-gram-schmidt-orthonormalisation
  - def-complex-stiefel-grassmann-optimization-conventions
  - thm-complex-stiefel-grassmann-tangent-projections
  - prop-complex-stiefel-grassmann-are-compact
  - prop-complex-grassmann-projector-energy-gradient
  - def-complex-grassmann-polar-retraction
  - thm-complex-grassmann-polar-retraction-is-first-order
  - thm-riemannian-trust-region-first-order-complexity
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-extreme-value-metric
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - def-finite-basis-projector-energy-model
  - prop-finite-projector-energy-reality-and-gradient
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 3 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf"
    locator: "Complete 37-page chapter, §§3.3.2, 3.4.4, 3.5.7, 3.6.2 and 3.6.4: Stiefel/Grassmann structures, tangent and horizontal spaces, Frobenius projections and gradients."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §§3.6–3.8, 7.3 and 9.16: embedded metrics, gradients, Stiefel frames and Grassmann quotient geometry."
  - title: "Nicholas D. S. Manton, Optimization algorithms exploiting unitary constraints, IEEE Transactions on Signal Processing 50 (2002), §§IV and VI"
    url: "https://cseweb.ucsd.edu/classes/sp24/cse291-e/papers/StiefelManifold/UnitaryConstraints.pdf"
    locator: "Complete 16-page article, §§IV and VI: complex Stiefel frames and the complex Grassmann unitary quotient."
verification:
  precheck: n/a
---

## Example

Take the complex finite-basis PC-VAR energy $E(P)$ and Hermitian gradient
$F(P)$ from [[def-finite-basis-projector-energy-model]] and
[[prop-finite-projector-energy-reality-and-gradient]]. The model's domain is
the rank-$r$ Hermitian projector set, with $1\le r<n$. A complex orthonormal
frame $X\in\operatorname{St}_{\mathbb C}(n,r)$ represents $P=XX^*$, and
unitary frame changes preserve $P$. The model-specific Grassmann gradient is
$$\operatorname{grad}E([X])=2(I-P)F(P)X.$$

Start from any $X_0\in\operatorname{St}_{\mathbb C}(n,r)$ and set
$x_0=[X_0]$. Choose $0<\eta_1<\eta_2<1$,
$0<\gamma_{\rm dec}<1<\gamma_{\rm inc}$, $0<\theta_C\le1$,
$\Delta_{\max}>0$, $0<\Delta_0\le\Delta_{\max}$, and
$0<\varepsilon\le1$; use an outer cap at least the bound in
[[thm-riemannian-trust-region-first-order-complexity]].

Use the complex polar retraction and the finite-budget trust-region method of
[[alg-riemannian-trust-region]], with the inner subproblem routine returning
failure immediately so the method uses its explicit Cauchy fallback. Since
$M_B=0$, the small-radius safeguard also selects the Cauchy step at every
positive radius. The polar map preserves the projector's Hermitian, idempotent,
rank-$r$ constraints at every trial; rejected trials
leave the current projector unchanged. Because the finite-basis energy is
$C^2$ on a neighborhood and the complex Grassmannian is compact, its pullback
gradients are uniformly Lipschitz on every fixed bounded tangent disk. Choose
the zero self-adjoint model operator, which is uniformly bounded. Thus the
hypotheses of [[thm-riemannian-trust-region-first-order-complexity]] hold, and
its first-order target is reached within the theorem's explicit
$O(\varepsilon^{-2})$ accepted and rejected outer-trial bound when the finite
cap is chosen accordingly. This is a finite-dimensional optimization
guarantee; no claim is made that an arbitrary selected exchange-correlation
functional models exact continuum physics.

## Facts & Assumptions

**Given:** The finite-basis PC-VAR model of [[def-finite-basis-projector-energy-model]], its real-valued $C^2$ energy and Hermitian Frobenius gradient ([[prop-finite-projector-energy-reality-and-gradient]]), $1\le r<n$, and an initial frame $X_0\in\operatorname{St}_{\mathbb C}(n,r)$ defining $x_0=[X_0]$.

[F1] The model defines $E(P)=\operatorname{tr}(hP)+\tfrac12\operatorname{tr}(PG(P))+E_{xc}(P)$ on rank-$r$ Hermitian projectors ([[def-finite-basis-projector-energy-model]]).

[F2] The real-valued $C^2$ energy has Hermitian Frobenius gradient $F(P)$ ([[prop-finite-projector-energy-reality-and-gradient]]).

[F3] The complex Grassmann tangent is represented by $X^*Z=0$ and projects by $(I-XX^*)G$ ([[thm-complex-stiefel-grassmann-tangent-projections]]).

[F4] The gradient of a Hermitian projector energy with gradient $K(P)$ is $2(I-XX^*)K(P)X$ ([[prop-complex-grassmann-projector-energy-gradient]]).

[F5] Complex Grassmann is compact, and its polar map is defined on horizontal vectors, maps to orthonormal frames, is smooth, and has frame differential $D R_X^{\rm pol}(0)[\eta]=\eta$ ([[prop-complex-stiefel-grassmann-are-compact]], [[def-complex-grassmann-polar-retraction]], [[thm-complex-grassmann-polar-retraction-is-first-order]]).

[F6] The trust-region method uses a retracted trial, leaves the current point on rejection, and has the proved first-order count under its pullback hypotheses ([[alg-riemannian-trust-region]], [[thm-riemannian-trust-region-first-order-complexity]]).

[F7] Every finite-dimensional complex inner-product subspace has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F8] Closed bounded subsets of a finite-dimensional Euclidean space are compact ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F9] A continuous real-valued function on a compact metric space attains its maximum ([[thm-extreme-value-metric]]).

## Proof

**Proof technique:** identify the PC-VAR projector domain with the unitary quotient, compute its gradient, and verify trust-region regularity.

1.1 If $X^*X=I_r$, then $P=XX^*$ is Hermitian and $P^2=X(X^*X)X^*=P$, with range equal to the column space of $X$ and therefore rank $r$. For unitary $Q$, $(XQ)(XQ)^*=XQQ^*X^*=P$. Thus $E(XX^*)$ is unitary-invariant and descends to complex Grassmann by [F1]. [F1, given, algebra]

2.1 For every horizontal $Z$, [F2] and [F4] yield the complex Grassmann gradient $2(I-P)F(P)X$. This formula uses the real derivative of the Hermitian-matrix energy, as required for a real-valued objective on complex coordinates. [F2, F3, F4, given, step 1.1, algebra]

2.2 Conversely, let $P$ be any rank-$r$ orthogonal projector. Choose an orthonormal basis of its $r$-dimensional range by [F7] and collect its vectors as the columns of $X$. Then $X^*X=I_r$ and $XX^*=P$, so the parameterization covers exactly the model's projector domain. By [F5], the polar-retracted trial remains a complex orthonormal frame, so its projector remains Hermitian, idempotent, and rank $r$; rejection leaves the old projector unchanged by [F6]. [F5, F6, F7, given, step 1.1, construct, algebra]

3.1 Fix any finite $\Delta_{\max}>0$. The set of pairs $(X,\eta)$ with $X^*X=I_r$, $X^*\eta=0$, and $\|\eta\|_F\le\Delta_{\max}$ is closed and bounded in a finite-dimensional real coordinate space, hence compact by [F8]. The polar retraction is smooth on it, and [F1]–[F2] make the pullback energy $C^2$ along the horizontal tangent bundle. Its fiber Hessian is continuous on this compact set, so its operator norm has a finite maximum by [F9]. Integrating this Hessian along each fiber segment gives a uniform Lipschitz bound for the pullback gradient. Choose the model operator $B_x=0$, which is self-adjoint and uniformly bounded by $M_B=0$. Hence all regularity and model hypotheses in [F6] hold, and a finite cap at least the theorem's trial bound suffices. [F1, F2, F5, F6, F8, F9, given, step 2.2, algebra] ∎
