---
id: thm-gr-dust-local-evolution
kind: theorem
title: "Local Einstein-dust evolution: smooth constrained data with prescribed velocity admit a smooth local development, unique up to a data-fixing isometry"
status: draft
origin: session
domain: mathematics
dependency_level: 23
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-dust-matter-model, def-gr-dust-reduction-variables-and-gauge, def-gr-dust-electric-magnetic-weyl-variables-and-schouten, lem-gr-dust-reduced-evolution-equations, lem-gr-dust-symmetric-hyperbolic-reduction, thm-gr-dust-subsidiary-and-residual-vanishing, lem-gr-dust-initial-data-and-tilted-initialization, thm-gr-local-symmetric-hyperbolic-well-posedness, thm-gr-periodic-symmetric-hyperbolic-existence, thm-gr-periodic-symmetric-hyperbolic-smooth-persistence, thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability, def-countable-choice, thm-fundamental-theorem-on-flows, thm-flowout-theorem, lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it, lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking, thm-smooth-partitions-of-unity-exist-on-manifolds, lem-gr-finite-speed-independence-of-extension, lem-gr-local-cauchy-neighborhood, thm-gr-cauchy-surface-implies-globally-hyperbolic, def-dependent-choice]
dependency_roles:
  def-gr-dust-matter-model: mathematical-premise
  def-gr-dust-reduction-variables-and-gauge: mathematical-premise
  def-gr-dust-electric-magnetic-weyl-variables-and-schouten: mathematical-premise
  lem-gr-dust-reduced-evolution-equations: mathematical-premise
  lem-gr-dust-symmetric-hyperbolic-reduction: mathematical-premise
  thm-gr-dust-subsidiary-and-residual-vanishing: mathematical-premise
  lem-gr-dust-initial-data-and-tilted-initialization: mathematical-premise
  thm-gr-local-symmetric-hyperbolic-well-posedness: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-smooth-persistence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-fundamental-theorem-on-flows: mathematical-premise
  thm-flowout-theorem: mathematical-premise
  lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it: mathematical-premise
  lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  lem-gr-finite-speed-independence-of-extension: mathematical-premise
  lem-gr-local-cauchy-neighborhood: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.1 (Local Existence Theorems for the Einstein Equations): harmonic-map gauge, the reduced initial data constructed from (h,chi), the propagation of the gauge by the homogeneous wave system for the gauge residual Delta^alpha, and the local existence theorem"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---


## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and Dependent Choice ([[def-dependent-choice]]). Fix constants $c>0$, $\kappa>0$ and $\Lambda\in\mathbb R$. Let $\Sigma$ be a smooth three-manifold with smooth Riemannian metric $h$, smooth symmetric tensor $K$ and a smooth mass-normalized density $\rho_0\ge0$. Specify initial velocity as a smooth section $U_0$ of $\mathcal V=\mathbb RN\oplus T\Sigma$, with the bundle metric $g_0(aN+X,bN+Y)=-ab+h(X,Y)$, satisfying $g_0(U_0,U_0)=-1$ and positive $N$ coefficient. Thus the velocity need not be normal and does not presuppose a spacetime development. Put $\varepsilon_0=\rho_0c^2$ and require the constraints of [[thm-gr-constraint-equations-in-normal-frame]] for $T_0=\varepsilon_0U_0^{\flat_{g_0}}\otimes U_0^{\flat_{g_0}}$. On $\{\rho_0>0\}$ this is exactly the dust supplier with density parameter $\varepsilon_0$, rather than $\rho_0$ ([[def-gr-dust-matter-model]]); zero regions have independently prescribed velocity.

Then there is a smooth local development: a smooth time-oriented Lorentzian metric $g$, density $\rho\ge0$ and future unit timelike field $u$ near an embedded copy of $\Sigma$, solving
$$G_{ab}+\Lambda g_{ab}=\kappa\rho c^2u_au_b,\qquad \nabla_uu=0,\qquad u(\rho)+\rho\nabla\!\cdot u=0.$$
The induced geometric and matter data are $(h,K,\rho_0,U_0)$, with $\mathcal V$ identified by $aN+X\mapsto an+i_*X$ using the future unit normal $n$. The initial surface lies in the interior of its domain of dependence; restriction to its Cauchy neighborhood gives a local Cauchy development. Every two such developments agree near $\Sigma$ by a data-fixing time-orientation-preserving isometry matching $\rho,u$. No division by density is used, so smooth empty regions are admitted. The neighborhood may have position-dependent time width; no uniform noncompact slab or continuation past flow crossings is asserted.

## Facts & Assumptions

**Given:** Countable and Dependent Choice, constants and smooth constrained data as in the Statement, including prescribed velocity through zero-density regions.

[L1] The mathematical mass-to-energy conversion, tentative frame and parallel-comoving gauge, prescribed Schouten/Weyl tensor, corrected projected evolution and positive time matrix on every spacelike conormal are supplied by [[def-gr-dust-reduction-variables-and-gauge]], [[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]], [[lem-gr-dust-reduced-evolution-equations]] and [[lem-gr-dust-symmetric-hyperbolic-reduction]].

[L2] The explicit initial curvature/connection construction gives zero initial residuals for exactly the scaled stress tensor $T_0$ above. The subsidiary system propagates these errors and recovers the full equations, with prescribed geodesic velocity even at zero density ([[lem-gr-dust-initial-data-and-tilted-initialization]], [[thm-gr-dust-subsidiary-and-residual-vanishing]]).

[L3] For any chosen integer $s\ge5$, periodic smooth data lie in $H^s$ and the symmetric hyperbolic existence theorem gives a classical solution on compact admissible coefficient ranges; smooth persistence and finite-speed uniqueness supply the corresponding local statement after extension to a torus ([[thm-gr-local-symmetric-hyperbolic-well-posedness]], [[thm-gr-periodic-symmetric-hyperbolic-existence]], [[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]], [[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]], [[lem-gr-finite-speed-independence-of-extension]]). Their Countable Choice hypothesis is assumed here; Dependent Choice is carried for the causal-curve calculus used in the Cauchy-neighborhood supplier.

[L4] A smooth vector field has a smooth maximal flow, and an embedded codimension-one surface transverse to it has a variable-width flowout embedding under Countable Choice ([[thm-fundamental-theorem-on-flows]], [[thm-flowout-theorem]]).

[L5] Under Countable Choice, an open cover of a smooth manifold has a countable relatively compact coordinate-ball refinement and a countable locally finite shrinking $\overline{W_i}\subset V_i\subset\overline{V_i}\subset O_i$. Every indexed open cover admits a subordinate locally finite smooth partition of unity ([[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]], [[lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[L6] On a relatively compact chart whose time conormal is timelike, causal spatial speed per time is bounded. A sufficiently narrow cone neighborhood of its initial spacelike slice is in its domain of dependence, and the interior Cauchy neighborhood has the initial slice as a Cauchy surface ([[lem-gr-local-cauchy-neighborhood]], [[thm-gr-cauchy-surface-implies-globally-hyperbolic]]).



**Proof technique:** direct.

## Proof

1.1 (Local initial variables.) On a small coordinate patch choose a local oriented orthonormal frame, boost it to $U_0$ and use the explicit initialization in [L2]. It gives the tentative frame, connection, $E,B$ and $r_0=\rho_0c^2=\varepsilon_0$, with all constrained errors initially zero. At a tilted surface the conormal time matrix is positive by [L1]; on a relatively compact smaller patch continuity gives a uniform positive lower bound, and the initial frame stays in the open set of invertible frames. The magnetic orientation is local only; no global frame or orientability is imposed. [given, L1, L2, algebra]

2.1 (Exact analytic prerequisite transfer.) Choose an integer $s\ge5$. Shrink the patch so its initial values lie in a small compact admissible coefficient neighborhood; a smooth cutoff to constant values then extends the data to a periodic torus without leaving the open set where the frame is invertible and the time matrix positive. Extend the symmetric coefficient matrices by smooth interpolation to constant symmetric matrices, with the positive time matrices interpolated inside their convex positive cone. These smooth periodic data have finite $H^s$ norm on the compact torus. Thus [L3], with the assumed Countable Choice for its countable Galerkin extraction, gives a smooth local reduced solution by smooth persistence. The finite-speed comparison makes its restriction independent of the extension on a smaller initial cone. No optimal finite-regularity claim is inferred: this supplies exactly the smooth data branch. [step 1.1, L3, algebra]

3.1 (Full system and density.) Initial errors vanish by [L2], and the corrected subsidiary theorem propagates them on the smaller local domain of determination. Consequently the tentative metric connection is Levi-Civita and its actual curvature equals the prescribed curvature; the reconstructed metric solves $G(g)+\Lambda g=\kappa r u^\flat\otimes u^\flat$. Density transport is $\partial_s r=-r\chi$, so $r(s,p)=r_0(p)\exp(-\int_0^s\chi(t,p)\,dt)$ is nonnegative and remains zero when $r_0(p)=0$. Recover $\rho=r/c^2$; since $c>0$ is constant, its continuity equation is exactly the displayed one. The parallel gauge gives $\nabla_uu=0$ independently of $r$. Thus the smooth zero-density branch and every $c>0$ are retained. [step 1.1, step 2.1, L1, L2, algebra]

4.1 (Direct common-gauge uniqueness.) For two full developments, use [L4] to pull them back by their unit dust flows $F_A(s,p)$ from the same embedded data. They are transverse to the initial slice, and $s$ is unit proper length with $u=\partial_s$. Use the same initial bundle tetrad and extend it by parallel transport in both metrics. Smooth linear ODE uniqueness and metric compatibility preserve the initial orthonormality and identify its timelike member with $u$. Both resulting gauges are parallel and comoving; initial frame, connection, Weyl and energy-coefficient data agree by [L2]. They solve the same corrected reduced system, so on every relatively compact comparison patch [L3] gives equality on a genuine open cone neighborhood of each initial point. Equality of frame components gives equality of the metrics, densities and velocity. Therefore $F_2\circ F_1^{-1}$ is the required data-fixing isometry on a neighborhood of the initial slice. This proof uses the dust frame system itself and does not assume that it satisfies a harmonic metric-first-derivative matter hypothesis. [step 3.1, L1, L2, L3, L4, algebra]

5.1 (Actual overlap identifications.) For local construction patches, initial coordinates change by $(s,x)\mapsto(s,y(x))$. Initial spatial frames with the same observer differ on an oriented overlap by a smooth $SO(3)$ rotation $R(p)$; extend it with $\partial_sR=0$. Its connection transforms as $\widetilde\omega=R^{-1}\omega R+R^{-1}dR$, whose time component remains zero, and its curvature transforms tensorially. Thus each locally constructed full solution can be put into the other's parallel-comoving gauge, with identical initial variables. Step 4.1 gives equality of the reconstructed geometric tensors on an actual open overlap. On an orientation-reversing overlap compare in one common local orientation; the magnetic representative changes sign together with its volume tensor, while the full curvature, metric and density remain ordinary tensors. Hence no global orientation is required, and the coordinate/frame transition cocycles give agreement on triple overlaps. [step 4.1, L1, L2, L3, algebra]

6.1 (Noncompact patching.) Apply [L5] to all admissible local existence patches, obtaining $W_i,V_i,O_i$ as stated and $K_i=\overline{W_i}$ compact. Each $K_i$ meets only finitely many $K_j$, because $K_j\subset V_j$ and $(V_j)$ is locally finite. Compactness gives a positive solution width $t_i$ over $K_i$, and step 5.1 gives a positive equality width $t_{ij}$ over every compact $K_i\cap K_j$. Countable Choice selects these widths for the countable set of pairs. Set $\delta_i=\tfrac12\min(\{t_i\}\cup\{t_{ij}:K_i\cap K_j\ne\varnothing\})>0$, a finite minimum. The solutions then agree on every overlap of the tubes $(-\delta_i,\delta_i)\times W_i$, and glue on their literal open union in $\mathbb R\times\Sigma$. For a subordinate partition $(\psi_i)$ put $\alpha(p)=\tfrac12\sum_i\delta_i\psi_i(p)>0$. At each point the finite weighted average is at most the largest active $\delta_i$, whose $W_i$ contains that point; hence $\{|s|<\alpha(p)\}$ is inside the union. This supplies a smooth positive variable-width collar, with no positive lower bound required on noncompact $\Sigma$. [step 5.1, L5, algebra]

7.1 (Causal neighborhood.) The conormal $ds$ is timelike initially and remains so after further positive pointwise shrinking of the collar; the same locally finite construction realizes this shrink smoothly. Hence $s$ is strictly increasing on future causal curves and the initial level is acausal. In a compact coordinate cylinder around each initial point, choose a bound $K$ on causal spatial displacement per unit $s$ by [L6]. Points with $|x-x_0|+K|s|<R$ for a ball of radius $R$ cannot escape that cylinder in the direction of the initial slice before meeting it: otherwise their causal graph would converge at a positive time to an interior point and could be extended, or would hit its spatial boundary with displacement at least $R-|x-x_0|>K|s|$, contradicting the speed bound. This supplies an open domain-of-dependence neighborhood around every point of $\Sigma$, as in the corrected local Cauchy lemma. Restricting to the interior of the domain of dependence gives its Cauchy neighborhood; [L6] supplies the Cauchy and global-hyperbolicity conclusion. All this is local in the variable-width solution and needs no uniform slab. [step 6.1, L6, algebra]

8.1 (Conclusion.) Steps 3.1 and 6.1 give the full smooth solution with the specified initial data and nonnegative density; step 7.1 gives the causal neighborhood and step 4.1 gives the data-fixing uniqueness for any two developments, including separately prescribed geodesic velocities on vacuum regions. These are exactly the asserted local conclusions. [step 3.1, step 4.1, step 6.1, step 7.1, algebra] ∎


## Remarks

On positive-density regions the supplier density is the energy coefficient $\varepsilon=\rho c^2$. The mass-normalized field here is $\rho=\varepsilon/c^2$; this constant conversion preserves both stress tensors and all initial constraints. The geodesic equation is separately required through vacuum. The construction stops before flow crossings, shocks or free boundaries and imposes no global frame, orientation or uniform noncompact existence time.
