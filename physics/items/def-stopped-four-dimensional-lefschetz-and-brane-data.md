---
id: def-stopped-four-dimensional-lefschetz-and-brane-data
kind: definition
title: Stopped four-dimensional Lefschetz data and exact conical branes
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: differential-geometry
dependency_level: 0
deps:
  - def-symplectic-form-and-symplectic-manifold
  - def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds
  - def-spin-lift-of-oriented-orthonormal-frame-bundle
  - def-koszul-sign-rule-for-graded-tensors
  - def-function
dependency_roles:
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
  def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds: mathematical-premise
  def-spin-lift-of-oriented-orthonormal-frame-bundle: mathematical-premise
  def-koszul-sign-rule-for-graded-tensors: mathematical-premise
  def-function: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Cieliebak and Eliashberg, Flexible Weinstein manifolds
      url: https://library.slmath.org/books/Book62/files/eliashberg.pdf
      locator: §1A, pp. 1–3, Morse, gradient-like inequality and cylindrical completion conventions; definitions only.
    - title: Paul Seidel, Lectures on Categorical Dynamics and Symplectic Topology
      url: https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf
      locator: Lecture 6, exact symplectic and Liouville manifolds; Lecture 10, exact graded branes and local systems. The notes explicitly flag incompleteness and errors in Lectures 13–16; those lectures are not used here.
    - title: Ganatra, Pardon, and Shende, Sectorial descent for wrapped Fukaya categories
      url: https://arxiv.org/pdf/1809.03427v2
      locator: §1.5 and §3.3, stopped-sector and linking-disk conventions; no theorem from those sections is substituted for the data defined here.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Use the complex orientation on $\mathbb C^2$, cohomological grading, and the Koszul sign convention of the algebraic conventions fixed on the same A page. A **finite four-dimensional Weinstein datum** is a connected smooth real four-manifold $M$ without boundary, a smooth one-form $\lambda$, the symplectic form $\omega=d\lambda$, its Liouville vector field $Z$ defined by $\iota_Z\omega=\lambda$, and a proper bounded-below Morse function $\phi:M\to\mathbb R$. Here $\phi$ is smooth, proper means that inverse images of compact sets are compact, and bounded below means $\inf_M\phi> -\infty$. Its critical set is $\{x:d\phi_x=0\}$; Morse means that at each such point the Hessian matrix in local coordinates is nonsingular. The field $Z$ is complete for positive time, meaning its flow is defined on $[0,\infty)\times M$, and $d\phi(Z)>0$ away from the critical set. The local gradient-like condition means that near each critical point there are a smooth Riemannian metric $g$ and a positive continuous function $c$ such that $d\phi(Z)\ge c(\lVert Z\rVert_g^2+\lVert d\phi\rVert_{g^{-1}}^2)$. In particular $Z$ vanishes at every critical point. The datum is finite type when $\phi$ has finitely many critical points and, for some regular value $a$ above all of them, the complement of $\{\phi<a\}$ has a specified identification with a finite disjoint union of $[0,\infty)\times Y_j$. Each $Y_j$ is a closed smooth three-manifold with a smooth one-form $\alpha_j$ such that $\alpha_j\wedge d\alpha_j$ is nowhere zero; the identification sends $\lambda$ to $e^r\alpha_j$ and $Z$ to $\partial_r$. This is the cylindrical Liouville end convention. The contact boundary at infinity is the disjoint union of these $Y_j$, with contact planes $\ker\alpha_j$; a Legendrian curve is a smooth embedded one-dimensional submanifold tangent to those planes.

A **finite exact Lefschetz fibration** on this datum is a smooth map $\pi:M\to\mathbb C$ with finitely many critical points and critical values, such that away from those values it is a submersion, each regular fibre is a symplectic surface for $\omega|_{\ker d\pi}$, and the horizontal planes induce the positive orientation on the base. Explicitly, at every regular point $x$, put $H_x=(\ker d\pi_x)^\omega$; for $z=u+iv$ on $\mathbb C$ require $\omega_x(\widetilde{\partial_u},\widetilde{\partial_v})>0$, where the tildes denote the unique lifts to $H_x$ under $d\pi_x|_{H_x}$. This condition also applies when the critical-point set is empty. Require that $\omega$-orthogonal parallel transport along every chosen finite path exists on the specified finite-type fibre data. At a critical point there are complex coordinates $z_k=p_k+iq_k$, $k=1,2$, in which $\pi=\sum_k z_k^2$, $\omega=\sum_k dp_k\wedge dq_k$, and the actual primitive is $\lambda_H=\sum_k(2p_k\,dq_k+q_k\,dp_k)$. The primitive and transition potentials on all regular product and suspension charts are part of the datum.

Fix a regular reference value and identify its fibre with a finite-type Weinstein surface $F$. Here this means a (possibly disconnected) smooth real two-manifold without boundary, with the restricted exact symplectic data $\lambda_F=\lambda|_F$ and $\omega_F=d\lambda_F$ nondegenerate, and Liouville field $Z_F$ determined by $\iota_{Z_F}\omega_F=\lambda_F$. Choose a proper bounded-below Morse function $\phi_F:F\to\mathbb R$ with finitely many critical points, positive-time complete $Z_F$, $d\phi_F(Z_F)>0$ off its critical set, and the local gradient-like inequality from the preceding four-dimensional definition. For a regular value $a$ above all critical values, the complement of $\{\phi_F<a\}$ is specified as a finite disjoint union of cylindrical ends $[0,\infty)\times Y_j$, where each $Y_j$ is a closed one-manifold with a nowhere-zero one-form $\alpha_j$ and $\lambda_F=e^r\alpha_j$, $Z_F=\partial_r$. The specified compact core is a compact codimension-zero submanifold $K\subset F$ with $F=K\cup_{\partial K}([0,\infty)\times\partial K)$ in the specified end charts; all product/suspension charts and primitive transition functions are part of the data.

A parametrized exact vanishing circle along a smooth path $\gamma_j:[0,1]\to\mathbb C$ from the regular reference value to a critical value $w_j$ consists of a smooth embedding $\nu_j:S^1\hookrightarrow F$, a specified primitive $h_j:S^1\to\mathbb R$ with $\nu_j^*\lambda_F=dh_j$, and the condition that its $\omega$-orthogonal parallel transports along $\gamma_j|_{[0,t]}$ are embedded for $t<1$ and collapse smoothly in the critical chart to the selected critical point as $t\to1$. The associated thimble $\Delta_j$ is the image of these transported circles together with that critical point. Its orientation, primitive $h_{\Delta_j}$ satisfying $\lambda|_{\Delta_j}=dh_{\Delta_j}$, grading, relative Spin lift, and flat coefficient system are specified brane data; no existence of such decorations is inferred from the word “thimble.”

The chosen suspension chart identifies a neighborhood of a negative base angle $\theta_-$ in the contact boundary at infinity with a neighborhood in $F\times S^1$. The **base core stop** is the subset $S=K\times\{\theta_-\}$ under this identification. In particular it is the actual specified core times the negative angle, not the whole fibre slice $F\times\{\theta_-\}$. Any temporary smooth attaching stop used in a local construction is recorded as separate data and is not silently added to $S$.

For the brane grading, fix as part of the datum an $\omega$-compatible almost-complex structure $J$ and a nowhere-zero smooth section $\Omega$ of the complex line bundle $\Lambda^2_{\mathbb C}(T^*M,J)$. Here compatibility means $J^2=-1$, $\omega(Jv,Jw)=\omega(v,w)$, and $g_J(v,w)=\omega(v,Jw)$ is positive definite. These are the almost-complex and volume-form choices meant by the grading data below; no integrability or holomorphic-volume assertion is made. For a real Lagrangian plane $\ell\subset T_xM$, choose a $g_J$-orthonormal basis $(v_1,v_2)$ and put
$$\alpha_\Omega(\ell)=\frac{\Omega(v_1,v_2)^2}{|\Omega(v_1,v_2)|^2}\in U(1).$$
The evaluation is nonzero because a real Lagrangian plane is totally real; changing its orthonormal basis changes the evaluation by a real sign, so the squared phase is independent of that basis. The fixed Maslov cover is the pullback of $\mathbb R\to U(1)$, $t\mapsto e^{2\pi it}$, along $\alpha_\Omega$ on the bundle of Lagrangian planes. Explicitly its points are $(x,\ell,t)$ with $e^{2\pi it}=\alpha_\Omega(\ell)$. A grading of $L$ is a continuous real lift $\widetilde\alpha_L:L\to\mathbb R$ of $x\mapsto\alpha_\Omega(T_xL)$. Grading transport along a specified brane isotopy means the continuous lift of its Gauss-map path starting at this chosen lift; all integer deck shifts remain part of the data.

A **finite-type exact conical brane** is a properly embedded oriented Lagrangian surface $i:L\hookrightarrow M$ with finitely many components and finitely many ends, satisfying $i^*\omega=0$ and $i^*\lambda=dh_L$ for a specified primitive $h_L$. Outside a compact subset, each end is invariant under the Liouville flow and is the cone over a specified Legendrian curve in the contact boundary. Write $\Lambda_L$ for the union of these limiting Legendrian curves. In the stopped datum a brane is required to satisfy $\Lambda_L\cap S=\varnothing$; compact branes have $\Lambda_L=\varnothing$. Allowed brane isotopies retain this disjointness at every time. The limiting value of $h_L$ on every end is specified separately; no end constant may be reset during a continuation or gluing. A grading is a lift of the squared-phase map of $TL$ to the fixed Maslov cover determined by the chosen nowhere-zero complex volume form on $M$. A relative Spin datum, for a fixed oriented background bundle $E_{\rm bg}\to M$, is a specified Spin lift of the oriented orthonormal frame bundle of $TL\oplus i^*E_{\rm bg}$. A flat coefficient system is a finite-rank complex vector bundle on $L$ with a flat connection; no Hermitian or unitary condition is imposed.

The **generation subclass** consists of data for which the compact core $K$ is diffeomorphic to $T^2\setminus\operatorname{int}(D^2)$ and $F$ is its cylindrical Liouville completion, as above. Specify a smooth filling $\overline K=K\cup_{\partial K}D^2\cong T^2$, a nowhere-zero smooth vector field $Y_{\overline K}$ on that filled torus, and a diffeomorphism $\kappa:F\to\operatorname{int}(K)$ compressing the cylindrical end into a boundary collar. Put $Y_F(x)=(D\kappa_x)^{-1}Y_{\overline K}(\kappa(x))$. This is the reference for the peripheral grading: for an oriented parametrized embedded circle $\nu:S^1\to F$, a grading is a homotopy through nowhere-zero sections of $TF|_{\nu(S^1)}$ from its positive tangent vector $\dot\nu$ to $Y_F|_{\nu(S^1)}$, modulo homotopy fixing both endpoints. Thus “filled-torus peripheral grading” means this explicit filling and extending vector-field data. It is an auxiliary grading structure for curves in $F$, distinct from the ambient brane grading defined by $\Omega$ above; no comparison between them is implicit. The cylindrical product ends and their actual primitive transitions are those of the specified completion; no extension of the exact symplectic form over the filling disk is required. This analytic fibre remains smooth; a nodal compactification on a separate complex-geometric side is not substituted for it. The choices of cohomological shifts, orientation lines, finite parameter spaces, domain collars, and their boundary identifications are also part of a datum.

## Definition references

[[def-symplectic-form-and-symplectic-manifold]]

[[def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds]]

[[def-spin-lift-of-oriented-orthonormal-frame-bundle]]

[[def-koszul-sign-rule-for-graded-tensors]]

[[def-function]]

## Remarks

The cotangent sign is fixed explicitly. With base coordinate $p$, fibre coordinate $q$, and tautological form $\lambda_{\rm taut}=\sum_k q_k\,dp_k$, the mathematical convention is $\omega_{\rm can}=-d\lambda_{\rm taut}=\sum_k dp_k\wedge dq_k$. The critical-chart primitive satisfies
$$\lambda_H=-\lambda_{\rm taut}+2\,d\!\left(\sum_k p_kq_k\right).$$
All action and end-primitive calculations use $\lambda_H$ and retain this exact gauge term.

This item defines geometric and brane data only. It does not assert that Floer operations are defined, regular, compact, or unital, and it does not assert generation.
