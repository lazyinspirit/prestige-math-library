---
id: pthm-tgrx-linearized-area-modular-moment
kind: physics-theorem
title: Linearized horizon area deficit is a weighted null moment
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 7
deps:
  - post-tgrx-linearized-horizon-model
  - def-tgr-horizon-screen-family
dependency_roles:
  post-tgrx-linearized-horizon-model: physical-assumption
  def-tgr-horizon-screen-family: mathematical-premise
physical_scope: >
  A first-order geometric identity for a smooth compact cut of the stationary
  reference null hypersurface in the adopted Einstein-Hilbert model, with an
  affinely normalized future generator, fixed future boundary condition and
  absolutely integrable stress moment. The result has no sign conclusion and
  makes no entropy, modular-Hamiltonian, QNEC, QFC, generalized-second-law, or
  empirical claim.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices, Physical Review D 85, 104049 (2012), arXiv:1105.3445v6"
      url: "https://arxiv.org/pdf/1105.3445"
      locator: "Complete 44-page article; §2.2, equations (16)–(23), for the first-order null focusing law, expansion/area relation, future boundary condition and transverse integral. The proof below supplies the local argument under its stated integrability assumptions."
    - title: "Harvey Reall, Part III Black Holes, University of Cambridge lecture notes (2024)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
      locator: "Complete 149-page lecture notes; §§4.6 and 4.8, equations (4.26)–(4.40), for the screen deformation, area expansion and exact null Raychaudhuri equation. No area theorem or entropy identification is imported."
verification:
  precheck: pending
---

## Statement

Use natural units $c=\hbar=k_B=1$. Let $C$ be a nonempty compact smooth
two-manifold, $\lambda_0\in\mathbb R$, and let
$\Phi_\epsilon:[\lambda_0,\infty)\times C\to H_\epsilon$ be a smooth family
of embeddings into smooth null hypersurfaces in time-oriented Lorentzian
four-manifolds of signature $(-,+,+,+)$. Assume
$\partial_\lambda\Phi_\epsilon=k_\epsilon\circ\Phi_\epsilon$ for smooth
future affine generators $k_\epsilon$, with a fixed generator identification
and affine normalization across the dimensionless perturbation parameter
$\epsilon$. Let
$q_{\epsilon,\lambda}:=\Phi_{\epsilon,\lambda}^*g_\epsilon$ be positive
definite, define the area density $\mu_{\epsilon,\lambda}$ by
$\sqrt{\det(q_{\epsilon,\lambda,AB})}|dy^1dy^2|$, and put
$A_\epsilon(\lambda):=\int_C\mu_{\epsilon,\lambda}$ and
$\delta A(\lambda):=\left.\partial_\epsilon A_\epsilon(\lambda)\right|_0$.
Assume the reference geometry $\epsilon=0$ has screen deformation form
$B_0=0$ along every generator, so its screen expansion and shear vanish. Let
$\delta\theta$ and $\delta T_{kk}$ be the first variations of expansion and
renormalized null stress in the adopted linearized future horizon focusing
model, satisfying
$$\partial_\lambda\delta\theta=-8\pi G_N\delta T_{kk},\qquad
\lim_{\lambda\to\infty}\delta\theta(\lambda,y)=0.$$
Assume $\delta T_{kk}$ is continuous, integrable on each generator, and
$$\int_C dA_0\int_{\lambda_0}^{\infty}(v-\lambda_0)
|\delta T_{kk}(v,y)|\,dv<\infty,$$
where $dA_0:=\mu_{0,\lambda}$ and $G_N>0$ has natural-unit dimension $L^2$.
Then the finite limit $\delta A_\infty:=\lim_{R\to\infty}\delta A(R)$ exists
and, for every $\lambda\ge\lambda_0$,
$$\delta A_\infty-\delta A(\lambda)=8\pi G_N
\int_C dA_0\int_\lambda^{\infty}(v-\lambda)\delta T_{kk}(v,y)\,dv.$$
Consequently, if
$$M_\lambda:=\int_C dA_0\int_\lambda^{\infty}(v-\lambda)
\delta T_{kk}(v,y)\,dv,$$
then
$$\frac{\delta A_\infty-\delta A(\lambda)}{4G_N}=2\pi M_\lambda.$$
Here $[\lambda]=L$, $[\delta T_{kk}]=L^{-4}$, $[\delta A]=L^2$, and
$M_\lambda$ is dimensionless. The quotient by $4G_N$ is only a geometric
normalization; it is not an entropy identification.

## Statement references

[[post-tgrx-linearized-horizon-model]]

[[def-tgr-horizon-screen-family]]

[Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices](https://arxiv.org/pdf/1105.3445)

[Harvey Reall, Part III Black Holes](https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf)

## Facts & Assumptions

**Given:** The smooth compact generator-flow family and first-order quantities in the Statement, the fixed affine normalization, the stationary reference screen metric, the signed linearized focusing equation with its future boundary condition, and the absolutely integrable first stress moment.

[F1] [[post-tgrx-linearized-horizon-model]] adopts $\partial_\lambda\delta\theta=-8\pi G_N\delta T_{kk}$ with $\delta\theta(\infty,y)=0$ in natural units, for a smooth compact cut family over $[\lambda_0,\infty)$; the stationary reference screen metric is independent of $\lambda$, and $\delta T_{kk}$ may have either sign.

[F2] [[def-tgr-horizon-screen-family]] defines a smooth null hypersurface by its one-dimensional metric radical, a smooth future affine null generator $k$ with $\nabla_k k=0$, the screen quotient $k^\perp/\mathbb Rk$, its positive screen metric, and the expansion $\theta=\operatorname{tr}_{\bar g}B$ for $B([X],[Y])=g(\nabla_Xk,Y)$. A spacelike cut transverse to $k$ identifies its tangent plane isometrically with that screen quotient.

[A1] The maps $\Phi_\epsilon$ are smooth on each compact parameter slab, have compact domain $C$, and keep each induced cut metric positive definite. Their coordinate vector fields are pushforwards of commuting parameter fields, and $dA_0$ is the $\lambda$-independent reference density.

[A2] $\delta T_{kk}$ has an absolutely convergent tail on each generator and the displayed transverse first absolute moment is finite.

## Proof

1.1 In a local chart $y^A$ on $C$, write $E_A=d\Phi_\epsilon(\partial_{y^A})$ and $q_{AB}=g_\epsilon(E_A,E_B)$. The flow coordinates give $[k_\epsilon,E_A]=0$, so torsion freedom yields $\nabla_{k_\epsilon}E_A=\nabla_{E_A}k_\epsilon$. Metric compatibility then gives $\partial_\lambda q_{AB}=B_{AB}+B_{BA}$, where $B_{AB}=g_\epsilon(\nabla_{E_A}k_\epsilon,E_B)$ is evaluated on the screen. The cut is spacelike and transverse, so its tangent plane maps isometrically onto the screen quotient in [F2], and $q^{AB}B_{AB}=\theta_\epsilon$. Differentiating the positive determinant explicitly gives $\partial_\lambda\sqrt{\det q}=\frac12\sqrt{\det q}\,q^{AB}\partial_\lambda q_{AB}=\theta_\epsilon\sqrt{\det q}$. Smoothness and compactness allow integration in finitely many charts and differentiation under each compact integral. Differentiating this density identity at $\epsilon=0$ and using $\theta_0=0$ gives $\partial_\lambda\delta\mu=\delta\theta\,dA_0$ and hence $\delta A'(\lambda)=\int_C\delta\theta(\lambda,y)\,dA_0(y)$. [given, F1, F2, A1, algebra]

1.2 For fixed $y\in C$, integrate [F1] from $\lambda$ to $R>\lambda$: $\delta\theta(R,y)-\delta\theta(\lambda,y)=-8\pi G_N\int_\lambda^R\delta T_{kk}(v,y)\,dv$. Letting $R\to\infty$ is justified by [F1] and [A2], and the future boundary condition gives $\delta\theta(\lambda,y)=8\pi G_N\int_\lambda^\infty\delta T_{kk}(v,y)\,dv$. [given, F1, A2, algebra]

1.3 Substitute step 1.2 into the area variation from step 1.1. The resulting absolutely convergent integral is $\delta A'(u)=8\pi G_N\int_C dA_0(y)\int_u^\infty\delta T_{kk}(v,y)\,dv$. [given, A1, A2, step 1.1, step 1.2, algebra]

2.1 By [A2] and step 1.3, $\int_\lambda^\infty|\delta A'(u)|\,du\le8\pi G_N\int_CdA_0\int_\lambda^\infty(v-\lambda)|\delta T_{kk}(v,y)|\,dv<\infty$. Thus $\delta A(R)$ has a finite limit as $R\to\infty$. Fubini's theorem applies to the absolute first moment in [A2], so integrating step 1.3 from $u=\lambda$ to $\infty$ and reversing the order of integration gives $\delta A_\infty-\delta A(\lambda)=8\pi G_N\int_CdA_0\int_\lambda^\infty\delta T_{kk}(v,y)\bigl(\int_\lambda^vdu\bigr)dv=8\pi G_NM_\lambda$. [given, A2, step 1.3, algebra]

2.2 Since $G_N>0$, divide the equality in step 2.1 by $4G_N$ to obtain $(\delta A_\infty-\delta A(\lambda))/(4G_N)=2\pi M_\lambda$. This is an identity for the signed first-order stress moment; no positivity or entropy interpretation follows. [given, step 2.1, algebra] ∎

## Remarks

The proof derives the cut-area variation locally and uses absolute integrability only for the future limit and Fubini step. The model does not identify $M_\lambda$ with a modular generator; such an identification would require a separate algebraic bridge. It does not infer monotonicity when $\delta T_{kk}$ changes sign.
