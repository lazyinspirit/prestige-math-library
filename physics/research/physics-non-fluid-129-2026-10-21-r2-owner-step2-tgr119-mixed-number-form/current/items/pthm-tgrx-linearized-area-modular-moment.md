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
  reference null hypersurface in the adopted Einstein-Hilbert model, with all
  model inputs in the supplied model-instance domain below E_cut, a common
  differentiable metric and cut family, an affinely normalized future
  generator, a fixed future boundary condition, and an absolutely integrable
  stress moment. The result has no sign conclusion and makes no entropy,
  modular-Hamiltonian, QNEC, QFC, generalized-second-law, or empirical claim.
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

Use natural units $c=\hbar=k_B=1$, metric signature $(-,+,+,+)$, and
$[\lambda]=L$. Write $G_N$ for the Newton constant $G$ in the supplied
semiclassical equation after setting $c=\hbar=k_B=1$; then $G_N>0$ and
$[G_N]=L^2$. Take a model instance of the adopted Einstein-Hilbert focusing
postulate, with all its inputs restricted to the model-instance admissible
domain below the supplied effective cutoff $E_{\mathrm{cut}}$. The numerical
cutoff and admissible domain are supplied with that instance.

Let $M$ be the common smooth four-manifold of the family of smooth
time-oriented Lorentzian metrics $g_\epsilon$ of signature $(-,+,+,+)$, and
let $H_\epsilon\subset M$ be smooth embedded null hypersurfaces whose induced
metrics have one-dimensional radicals. Their smooth nowhere-zero future null
generator fields $k_\epsilon$ span those radicals and are affine,
$\nabla^{g_\epsilon}_{k_\epsilon}k_\epsilon=0$. Use the postulate's global-hyperbolicity convention: strong causality, meaning
that every point has arbitrarily small neighborhoods met by each causal curve
in a connected parameter interval, and compact causal diamonds
$J^+(p)\cap J^-(q)$.
Let $C$ be a nonempty compact smooth two-manifold and $\lambda_0\in\mathbb R$.
For dimensionless $\epsilon$ in an open interval about $0$, take the supplied
family
$$\Phi_\epsilon:[\lambda_0,\infty)\times C\to H_\epsilon,\qquad \partial_\lambda\Phi_\epsilon=k_\epsilon\circ\Phi_\epsilon,$$
with every $\Phi_{\epsilon,\lambda}:C\to H_\epsilon$ an embedding with
spacelike image and with fixed generator labels and affine normalization
across $\epsilon$. The metric and embedding families have the postulate's
corresponding $\epsilon$-regularity on their common ambient manifold. The
pulled-back metric, area density, screen deformation form, expansion, and
shear are jointly $C^1$ in $(\epsilon,\lambda)$ and smooth in $y$ on each
finite parameter slab, with the spatial regularity needed to define them.

At $p\in H_\epsilon$, use the screen quotient
$\mathcal S_{\epsilon,p}=k_\epsilon^\perp/\mathbb Rk_\epsilon$ with positive
metric $\bar g_\epsilon([X],[Y])=g_\epsilon(X,Y)$. Its deformation form and
expansion are
$$B_\epsilon([X],[Y])=g_\epsilon(\nabla^{g_\epsilon}_Xk_\epsilon,Y),\qquad \theta_\epsilon=\operatorname{tr}_{\bar g_\epsilon}B_\epsilon.$$
Assume the reference geometry is stationary in this model in the specified
sense $B_0=0$ along every generator, so $\theta_0$ and the shear
$\sigma_0=B_0-\frac12\theta_0\bar g_0$ vanish. Put
$$q_{\epsilon,\lambda}:=\Phi_{\epsilon,\lambda}^*g_\epsilon$$
for the positive-definite induced metric on $C$, and let
$\mu_{\epsilon,\lambda}$ be its Riemannian area density. Define
$$A_\epsilon(\lambda):=\int_C\mu_{\epsilon,\lambda},\qquad \delta A(\lambda):=\left.\partial_\epsilon A_\epsilon(\lambda)\right|_0,\qquad dA_0:=\mu_{0,\lambda_0}.$$

For each $\epsilon$, the supplied state $\omega_\epsilon$ is a positive
normalized linear functional; its two-point distribution $W_\epsilon$ is a
bisolution of the selected Klein-Gordon operator with Hadamard wavefront relation $\mathcal C^+_{g_\epsilon}$: its paired future-null covectors are related by parallel propagation along a future-directed null geodesic, with common positive scale and opposite sign in the second slot, including coincidence.
Use the postulate's single fixed local stress prescription
$$T^{\mathrm{ren},\epsilon}_{ab}(x)=\lim_{x'\to x}D^\epsilon_{ab}(x,x')\bigl(W_\epsilon-H_{\mu,\epsilon}\bigr)(x,x')+C_{ab}[g_\epsilon;\mu,\mathbf c](x),$$
where $W_\epsilon-H_{\mu,\epsilon}$ is smooth, $D^\epsilon_{ab}$ is the
supplied finite-order bidifferential operator, and $C_{ab}$ is the fixed
state-independent local curvature correction. Define
$$\delta\theta(\lambda,y):=\left.\partial_\epsilon\theta_\epsilon(\lambda,y)\right|_0,\qquad F_\epsilon(\lambda,y):=(T^{\mathrm{ren},\epsilon}_{ab}k_\epsilon^ak_\epsilon^b)\bigl(\Phi_\epsilon(\lambda,y)\bigr),\qquad \delta T_{kk}(\lambda,y):=\left.\partial_\epsilon F_\epsilon(\lambda,y)\right|_0.$$
Assume $F_\epsilon$ has the postulate's joint $C^1$ dependence in $\epsilon$ and
continuous dependence on $(\lambda,y)$ on each finite parameter slab. Then $[k_\epsilon]=1$, $[\delta T_{kk}]=L^{-4}$, and
$[\delta\theta]=L^{-1}$.

Assume $\delta T_{kk}$ is continuous, has an absolutely integrable tail on
each generator, and satisfies the absolute first-moment bound
$$\int_C dA_0\int_{\lambda_0}^{\infty}(v-\lambda_0)|\delta T_{kk}(v,y)|\,dv<\infty.$$
The postulate adopts, only to first order in $\epsilon$, the signed linearized
focusing equation and future boundary condition
$$\partial_\lambda\delta\theta(\lambda,y)=-8\pi G_N\delta T_{kk}(\lambda,y),\qquad \lim_{\lambda\to\infty}\delta\theta(\lambda,y)=0.$$
Then the finite limit $\delta A_\infty:=\lim_{R\to\infty}\delta A(R)$ exists
and, for every $\lambda\ge\lambda_0$,
$$\delta A_\infty-\delta A(\lambda)=8\pi G_N\int_C dA_0\int_\lambda^{\infty}(v-\lambda)\delta T_{kk}(v,y)\,dv.$$
Consequently, if
$$M_\lambda:=\int_C dA_0\int_\lambda^{\infty}(v-\lambda)\delta T_{kk}(v,y)\,dv,$$
then
$$\frac{\delta A_\infty-\delta A(\lambda)}{4G_N}=2\pi M_\lambda.$$
Here $[\delta A]=L^2$ and $M_\lambda$ is dimensionless. The quotient by
$4G_N$ is only a geometric normalization; it is not an entropy
identification.

## Statement references

[[post-tgrx-linearized-horizon-model]]

[[def-tgr-horizon-screen-family]]

[Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices](https://arxiv.org/pdf/1105.3445)

[Harvey Reall, Part III Black Holes](https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf)

## Facts & Assumptions

**Given:** The smooth compact generator-flow family and first-order quantities in the Statement, the fixed affine normalization, the reference condition $B_0=0$, the signed linearized focusing equation with its future boundary condition, and the absolutely integrable first stress moment.

[F1] [[post-tgrx-linearized-horizon-model]] adopts $\partial_\lambda\delta\theta=-8\pi G_N\delta T_{kk}$ with $\delta\theta(\infty,y)=0$ in natural units, for a common differentiable compact-cut family over $[\lambda_0,\infty)$ whose model inputs lie in the supplied $E_{\mathrm{cut}}$-admissible domain; it assumes $B_0=0$, identifies $G_N$ with the supplier's $G$ at $c=\hbar=k_B=1$, and permits either sign of $\delta T_{kk}$.

[F2] [[def-tgr-horizon-screen-family]] defines a smooth null hypersurface by its one-dimensional metric radical, a smooth future affine null generator $k$ with $\nabla_k k=0$, the screen quotient $k^\perp/\mathbb Rk$, its positive screen metric, and the expansion $\theta=\operatorname{tr}_{\bar g}B$ for $B([X],[Y])=g(\nabla_Xk,Y)$. A spacelike cut transverse to $k$ identifies its tangent plane isometrically with that screen quotient.

[A1] The maps $\Phi_\epsilon$ are jointly $C^1$ in $\epsilon$ and smooth in $(\lambda,y)$ on each finite parameter slab, have compact domain $C$, and keep each induced cut metric positive definite; the pulled-back area data have the same joint regularity. Their coordinate vector fields are pushforwards of commuting parameter fields. The reference density is $dA_0:=\mu_{0,\lambda_0}$.

[A2] $\delta T_{kk}$ has an absolutely convergent tail on each generator and the displayed transverse first absolute moment is finite.

## Proof

1.1 In a local chart $y^A$ on $C$, write $E_A=d\Phi_\epsilon(\partial_{y^A})$ and $q_{AB}=g_\epsilon(E_A,E_B)$. The flow coordinates give $[k_\epsilon,E_A]=0$, so torsion freedom yields $\nabla_{k_\epsilon}E_A=\nabla_{E_A}k_\epsilon$. Metric compatibility then gives $\partial_\lambda q_{AB}=B_{AB}+B_{BA}$, where $B_{AB}=g_\epsilon(\nabla_{E_A}k_\epsilon,E_B)$ is evaluated on the screen. The cut is spacelike and transverse, so its tangent plane maps isometrically onto the screen quotient in [F2], and $q^{AB}B_{AB}=\theta_\epsilon$. Differentiating the positive determinant explicitly gives $\partial_\lambda\sqrt{\det q}=\frac12\sqrt{\det q}\,q^{AB}\partial_\lambda q_{AB}=\theta_\epsilon\sqrt{\det q}$. At $\epsilon=0$, $B_0=0$ makes $\partial_\lambda q_{0,AB}=0$, so $\mu_{0,\lambda}=dA_0$ for every $\lambda$. Integrate the density identity from $\lambda_0$ to $\lambda$ on any finite slab; joint $C^1$ dependence and compactness of $C$ permit differentiation under this finite integral in $\epsilon$. At $\epsilon=0$, $\theta_0=0$ and $\mu_{0,u}=dA_0$, writing $\delta\mu_\lambda:=\left.\partial_\epsilon\mu_{\epsilon,\lambda}\right|_0$ for the varied area density, we obtain the density identity $\delta\mu_\lambda-\delta\mu_{\lambda_0}=\int_{\lambda_0}^{\lambda}\delta\theta(u,\cdot)\,dA_0\,du$ on $C$. Thus $\partial_\lambda\delta\mu_\lambda=\delta\theta(\lambda,\cdot)\,dA_0$, and differentiating its integral over compact $C$ gives $\delta A'(\lambda)=\int_C\delta\theta(\lambda,y)\,dA_0(y)$. [given, F1, F2, A1, algebra]

1.2 For fixed $y\in C$, integrate [F1] from $\lambda$ to $R>\lambda$: $\delta\theta(R,y)-\delta\theta(\lambda,y)=-8\pi G_N\int_\lambda^R\delta T_{kk}(v,y)\,dv$. Letting $R\to\infty$ is justified by [F1] and [A2], and the future boundary condition gives $\delta\theta(\lambda,y)=8\pi G_N\int_\lambda^\infty\delta T_{kk}(v,y)\,dv$. [given, F1, A2, algebra]

2.1 Substitute step 1.2 into the area variation from step 1.1. The resulting absolutely convergent integral is $\delta A'(u)=8\pi G_N\int_C dA_0(y)\int_u^\infty\delta T_{kk}(v,y)\,dv$. [given, A1, A2, step 1.1, step 1.2, algebra]

3.1 By [A2] and step 2.1, $\int_\lambda^\infty|\delta A'(u)|\,du\le8\pi G_N\int_CdA_0\int_\lambda^\infty(v-\lambda)|\delta T_{kk}(v,y)|\,dv<\infty$. Thus $\delta A(R)$ has a finite limit as $R\to\infty$. Fubini's theorem applies to the absolute first moment in [A2], so integrating step 2.1 from $u=\lambda$ to $\infty$ and reversing the order of integration gives $\delta A_\infty-\delta A(\lambda)=8\pi G_N\int_CdA_0\int_\lambda^\infty\delta T_{kk}(v,y)\bigl(\int_\lambda^vdu\bigr)dv=8\pi G_NM_\lambda$. [given, A2, step 2.1, algebra]

4.1 Since $G_N>0$, divide the equality in step 3.1 by $4G_N$ to obtain $(\delta A_\infty-\delta A(\lambda))/(4G_N)=2\pi M_\lambda$. This is an identity for the signed first-order stress moment; no positivity or entropy interpretation follows. [given, step 3.1, algebra] ∎

## Remarks

The proof derives the cut-area variation locally and uses absolute integrability only for the future limit and Fubini step. The model does not identify $M_\lambda$ with a modular generator; such an identification would require a separate algebraic bridge. It does not infer monotonicity when $\delta T_{kk}$ changes sign.
