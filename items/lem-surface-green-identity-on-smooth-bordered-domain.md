---
id: lem-surface-green-identity-on-smooth-bordered-domain
kind: lemma
title: "Green's second identity on a compact bordered domain of a Riemann surface"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-countable-choice
  - def-riemann-surface-and-holomorphic-atlas
  - def-harmonic-and-subharmonic-riemann-surface-functions
  - def-embedded-smooth-submanifold-with-boundary
  - def-smooth-manifold
  - thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts
  - thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold
  - thm-euclidean-inverse-function-theorem
  - def-compact-space
  - lem-compactness-of-a-subspace-is-ambient
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - prop-topological-manifolds-are-locally-compact-and-locally-path-connected
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-bounded-piecewise-c-one-euclidean-domain
  - def-classical-normal-derivative
  - def-plane-harmonic-function
  - cor-second-green-identity-on-a-bounded-c-one-domain
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - thm-c2-holomorphic-function-has-holomorphic-derivative
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - lem-finite-choice
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF p.15, Comment 5: the symmetry of the Green function can also be proved via Green's theorem on Riemann surfaces; the chartwise second-identity details are supplied here and are not in the source."
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.5, Theorem 2.23, printed p. 32 (PDF p. 38): planar second Green identity, applied chartwise here."
---

## Statement

Assume Countable Choice, written $\mathrm{AC}_\omega$. Let $X$ be a Riemann
surface ([[def-riemann-surface-and-holomorphic-atlas]]). A **compact bordered
domain** in $X$ means a compact embedded $2$-submanifold with boundary
$\Omega'\subseteq X$ ([[def-embedded-smooth-submanifold-with-boundary]]) with
$\Omega'=\overline{\operatorname{int}\Omega'}$, the interior being taken in
$X$; thus $\Omega'$ is the closure of its interior and its boundary
$\partial\Omega'$ is a genuine boundary of the region. It need not be
connected and its boundary may be empty. All functions below are real.

1. **Second identity.** Let $\Omega'\subseteq X$ be a compact bordered domain
   and let $u,v$ be functions on an open neighbourhood of $\Omega'$ whose chart
   expressions in every holomorphic chart are of class $C^2$. In each chart
   write $z=x+iy$, $\Delta=\partial_x^2+\partial_y^2$ and $dA=dx\,dy$; let $ds$
   be Euclidean arclength along the chart image of $\partial\Omega'$ and let
   $\nu$ be the outward conormal of $\Omega'$. Then, both sides being evaluated
   chartwise,
   $$\int_{\Omega'}\bigl(u\Delta v-v\Delta u\bigr)\,dA=\int_{\partial\Omega'}\bigl(u\,\partial_\nu v-v\,\partial_\nu u\bigr)\,ds,$$
   and the two integrands are independent of the holomorphic chart (proof,
   steps 2.1 and 3.1); on the boundary the chartwise expression is summed over the
   finitely many chart pieces, their corner points carrying no arclength.

2. **Punctured form.** Let $\Omega\subseteq X$ be a connected domain whose
   closure is a compact bordered domain with $\partial\Omega\neq\varnothing$
   and $\Omega=\operatorname{int}\overline\Omega$. Let $D_1,\dots,D_m\subseteq
   \Omega$ be pairwise disjoint closed coordinate discs, that is,
   $D_j=\varphi_j^{-1}\bigl(\overline{B(w_j,r_j)}\bigr)$ for holomorphic charts
   $\varphi_j$ and radii $r_j>0$, with
   $\overline{D_1\cup\cdots\cup D_m}\subseteq\Omega$, and put
   $\Omega_K:=\Omega\setminus(D_1^\circ\cup\cdots\cup D_m^\circ)$. Then
   $\overline{\Omega_K}$ is a compact bordered domain with
   $\partial\Omega_K=\partial\Omega\sqcup\partial D_1\sqcup\cdots\sqcup\partial
   D_m$ and, whenever $u,v$ have $C^2$ chart expressions near
   $\overline{\Omega_K}$, are harmonic on $\operatorname{int}\Omega_K$
   ([[def-harmonic-and-subharmonic-riemann-surface-functions]]) and satisfy
   $u=v=0$ on $\partial\Omega$, one has, with each $\partial D_j$ carrying the
   outward conormal of $\Omega_K$,
   $$\sum_{j=1}^{m}\int_{\partial D_j}\bigl(u\,\partial_\nu v-v\,\partial_\nu u\bigr)\,ds=0 .$$

## Facts & Assumptions
**Given:** Countable Choice; a Riemann surface $X$; the compact bordered domain $\Omega'$ and the $C^2$ functions $u,v$ of part 1; the connected domain $\Omega$, the pairwise disjoint closed coordinate discs $D_1,\dots,D_m$, the punctured domain $\Omega_K$ and the harmonic functions $u,v$ of part 2 with $u=v=0$ on $\partial\Omega$. In part 2 the same letters $u,v$ denote the functions near $\overline{\Omega_K}$, restricted from a neighbourhood of it.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] A Riemann surface is a connected Hausdorff second countable space with a holomorphic atlas; transition maps between holomorphic charts are biholomorphic, hence smooth, and a holomorphic transition has a nonzero complex derivative at each point, which realizes its real derivative as multiplication by that complex number ([[def-riemann-surface-and-holomorphic-atlas]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]], [[thm-c2-holomorphic-function-has-holomorphic-derivative]]).

[F2] Chartwise harmonicity and Laplacians: a function is harmonic on an open set when all its chart expressions are plane harmonic ([[def-plane-harmonic-function]]). For a $C^2$ function use $\Delta=\partial_x^2+\partial_y^2$ separately in each chart. Under a holomorphic transition $\tau$ one has $\Delta(u_\psi)=|\tau'|^{2}\,(\Delta u_\varphi)\circ\tau$ with $|\tau'|>0$. Thus vanishing is chart independent and characterizes harmonicity; the unweighted chart expressions themselves need not agree ([[def-harmonic-and-subharmonic-riemann-surface-functions]]).

[F3] Plane second Green identity: assume $\mathrm{AC}_\omega$; for a bounded $C^1$ domain in $\mathbb R^n$, $n\ge2$, or a domain with a specified finite piecewise $C^1$ presentation, and real $u,v\in C^2(\overline\Omega)$, $$\int_\Omega(v\Delta u-u\Delta v)\,dx=\int_{\partial\Omega}(v\partial_\nu u-u\partial_\nu v)\,dS,$$ every normal outward from $\Omega$, including normals on holes, with the face convention that each face is counted once off the edge set and all integrals are finite ([[cor-second-green-identity-on-a-bounded-c-one-domain]]).

[F4] A finite piecewise $C^1$ presentation of a bounded plane domain consists of finitely many compact faces covering the boundary, each a compact Borel subset of a regular $C^1$ hypersurface patch, and a compact edge set $E$ containing the face boundaries and all overlaps, such that outside $E$ the boundary is locally a single $C^1$ graph with the domain on one side ([[def-bounded-piecewise-c-one-euclidean-domain]]).

[F5] A bounded $C^1$ domain is a nonempty bounded open set whose boundary is locally a $C^1$ graph, connectedness is not required, and $C^2(\overline\Omega)$ means continuous differentiability in the interior with derivatives through order two extending continuously to the closure; the classical normal derivative is $\partial_\nu u=Du\cdot\nu$ on the boundary faces ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], [[def-classical-normal-derivative]]).

[F6] If $S^k$ is an embedded manifold with boundary in a boundaryless $n$-manifold, interior points have ordinary slice charts and boundary points have charts with $S=\{x^{k+1}=\cdots=x^n=0,\ x^k\ge0\}$; the boundary of a manifold with boundary is a closed embedded smooth boundaryless $(n-1)$-manifold, so for a compact $S$ the boundary is compact ([[thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts]], [[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]], [[def-embedded-smooth-submanifold-with-boundary]]).

[F7] The holomorphic atlas of a Riemann surface is a smooth atlas of $\mathbb R^2$-valued charts, so $X$ carries the smooth surface structure it generates, and a chart of that structure composed with a plane diffeomorphism is again a chart of it ([[def-smooth-manifold]]); a $C^1$ map of an open subset of $\mathbb R^2$ with invertible derivative at a point restricts to a diffeomorphism between neighbourhoods of that point and of its image ([[thm-euclidean-inverse-function-theorem]]); and a subset $S\subseteq X$ that carries a manifold-with-boundary structure whose inclusion into $X$ is a smooth embedding is an embedded smooth submanifold with boundary, its boundary being described by half-space charts ([[def-embedded-smooth-submanifold-with-boundary]], [[thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts]]).

[F8] Compactness: every open cover of a compact space has a finite subcover; a closed subset of a compact space is compact; a compact subset of a Hausdorff space is closed; topological manifolds are locally compact ([[def-compact-space]], [[lem-compactness-of-a-subspace-is-ambient]], [[thm-closed-subspace-of-a-compact-space-is-compact]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]]).

[F9] For a compact set inside an open set of a smooth manifold there is a smooth bump that equals $1$ near the compact set and is supported in the open set; every finite indexed family of nonempty sets has a choice function, so finitely many such choices may be made ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]], [[lem-finite-choice]]).

[F10] The chain rule for total derivatives and the algebra of derivatives: derivatives are linear, the product rule holds, and gradients transform by the transpose of the total derivative ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]]).



**Proof technique:** finite chart localization.

## Proof

1.1 Let $W$ be an open neighbourhood of $\Omega'$ on which $u,v$ have $C^2$ chart expressions. By [F6] the boundary $\partial\Omega'$ is a compact embedded $1$-submanifold of $X$, possibly empty, and every $x\in\partial\Omega'$ has a half-slice chart $(V,\varphi)$ with $\varphi(\Omega'\cap V)=\varphi(V)\cap\{y\ge0\}$ and $\varphi(\partial\Omega'\cap V)=\varphi(V)\cap\{y=0\}$. For part 2 fix $j$ and a point $x\in\partial D_j$, write $\varphi_j(x)=w_j+r_je^{i\alpha}$, and put $G(\zeta):=(r_j-|\zeta|,\operatorname{Im}\zeta)$ for $\zeta$ near $r_j$ and $\Psi:=G\circ(\zeta\mapsto e^{-i\alpha}(\zeta-w_j))\circ\varphi_j$. The rotation is a plane diffeomorphism and $G$ is smooth near $r_j$ with $DG(r_j)=\begin{pmatrix}-1&0\\0&1\end{pmatrix}$ invertible, so $\Psi$ restricts to a chart of the smooth structure of $X$ near $x$, with $\Psi(x)=0$, in which $D_j=\{\Psi_1\ge0\}$ and $X\setminus D_j=\{\Psi_1<0\}$; hence each $D_j$ is an embedded submanifold with boundary and its boundary points have half-slice charts with the disc on the side $\{\Psi_1\ge0\}$ [F7]. Since $D_j$ has positive distance from $\partial\Omega$ (as $\overline{D_j}$ is compact and lies in the open set $\Omega$) and $\Omega$ is open, $\Omega$ agrees with $X$ near $\partial D_j$, so $\Omega_K$ is locally $\{\Psi_1\le0\}$ at every point of $\partial D_j$, agrees with $\Omega$ near $\partial\Omega$, where the half-slice charts of the bordered domain $\overline\Omega$ from [F6] present it as a half-space, and is locally all of $X$ at its remaining points; moreover $\overline{\Omega_K}=\overline\Omega\setminus(D_1^\circ\cup\cdots\cup D_m^\circ)$ is the closure of its interior, since $\Omega=\operatorname{int}\overline\Omega$ and each $D_j^\circ$ is an open disc meeting $\Omega$. Therefore $\overline{\Omega_K}$ is a compact bordered domain with $\partial\Omega_K=\partial\Omega\sqcup\partial D_1\sqcup\cdots\sqcup\partial D_m$; it is compact because it is closed in the compact space $\overline\Omega$ [F8], and the hypothesis gives $C^2$ chart expressions for $u,v$ near it. [given, F6, F7, F8]

2.1 Let $\varphi,\psi$ be holomorphic charts with coordinates $z=x+iy$ and $w=u+iv$ on their overlap and transition $h=\varphi\circ\psi^{-1}$, so that $z=h(w)$; then $h$ is holomorphic with $h'\neq0$ on the overlap by [F1]. For a $C^2$ function $f$ one has $f_\varphi\circ h=f_\psi$, so the chain rule in [F10] applied to the transformation law of [F2] gives $\Delta(f_\varphi)(h(w))=|h'(w)|^{-2}\Delta(f_\psi)(w)$; since $dz=h'(w)\,dw$ and $dx\wedge dy=\tfrac{i}{2}dz\wedge d\bar z$, one has $dx\wedge dy=|h'(w)|^{2}\,du\wedge dv$. Multiplying the two identities, $u_\varphi\Delta(v_\varphi)\,dx\wedge dy=u_\psi\Delta(v_\psi)\,du\wedge dv$ on the overlap, so $(u\Delta v-v\Delta u)\,dA$ is a well-defined continuous $2$-form on the neighbourhood $W$ of $\Omega'$. [F1, F2, F10, step 1.1, algebra]

2.2 For every $x\in\partial\Omega'$ choose a holomorphic coordinate chart centred at $x$. The embedded-boundary condition of step 1.1 makes the boundary image a smooth curve. Rotate the coordinate so its tangent at $x$ is horizontal. By the inverse function theorem [F7], after shrinking, the boundary is a smooth graph $y=\gamma(x)$ and the interior of $\Omega'$ lies on one side, say $y>\gamma(x)$. Choose a small coordinate rectangle $R_x$ with closure inside the holomorphic chart domain and the neighbourhood $W$ whose vertical sides meet that graph transversely and whose horizontal sides avoid it. Then the interior region $R_x\cap\operatorname{int}\Omega'$ is a bounded piecewise $C^1$ planar domain with the graph as one boundary face. Compactness of $\partial\Omega'$ gives finitely many such holomorphic rectangles $R_1,\ldots,R_\ell$ covering it. [F1, F6, F7, F8, step 1.1, choose]
3.1 With $h$ as in step 2.1 write $h'(w)=\lambda e^{i\theta}$, $\lambda>0$; the real derivative of $h$ is multiplication by the complex number $h'(w)$, that is, $Dh(w)=\lambda R_\theta$ for the rotation $R_\theta$ by $\theta$, which is conformal and orientation preserving by [F1] and [F10]. Hence at corresponding boundary points the unit tangent vectors satisfy $\tau_z=R_\theta\tau_w$ and the outward unit conormals satisfy $\nu_z=R_\theta\nu_w$, while arclengths satisfy $ds_z=\lambda\,ds_w$. Transposing the chain rule $Df_\psi(w)=Df_\varphi(h(w))\,Dh(w)$ gives $\nabla_wf_\psi=\lambda R_{-\theta}\nabla_zf_\varphi$, hence $\partial_{\nu_z}v_\varphi=\lambda^{-1}\partial_{\nu_w}v_\psi$ and $\partial_{\nu_z}v_\varphi\,ds_z=\partial_{\nu_w}v_\psi\,ds_w$. With the chart-independent values of $u$, the pairing $u\,\partial_\nu v\,ds$ is therefore chart-independent along $\partial\Omega'$. [F1, F10, step 2.1, algebra]

3.2 The set $L:=\Omega'\setminus(R_1\cup\cdots\cup R_\ell)$ is compact and disjoint from $\partial\Omega'$ by [F8] and step 2.2. Each $y\in L$ lies in the open complement of $\partial\Omega'$, so there is a chart ball $B$ about $y$ with closure in a larger holomorphic chart domain inside $W$ and $\overline B\cap\partial\Omega'=\varnothing$; these balls cover $L$, so by [F8] finitely many of them, say $B_{\ell+1},\dots,B_N$, cover $L$. Then $U_1:=R_1,\dots,U_\ell:=R_\ell,U_{\ell+1}:=B_{\ell+1},\dots,U_N:=B_N$ are holomorphic coordinate domains covering $\Omega'$. [F1, F8, step 2.2, choose]

4.1 Steps 2.1 and 3.1 show that both integrands of part 1 are intrinsic: the left-hand side is the integral over the compact set $\Omega'$ of the continuous $2$-form $(u\Delta v-v\Delta u)\,dA$, and the right-hand side is the arclength integral of the continuous density $u\,\partial_\nu v-v\,\partial_\nu u$ over the compact boundary, evaluated on any finite chart cover of $\partial\Omega'$, the finitely many corner points contributing zero arclength by [F5]. [F5, F8, step 2.1, step 3.1]

4.2 For each $j$ put $W_j:=U_j\cap\operatorname{int}\Omega'$. For $j\le\ell$, step 2.2 makes its chart image a bounded piecewise $C^1$ domain with graph and rectangle faces. For $j>\ell$, the ball $B_j$ is connected and disjoint from $\partial\Omega'$, and it meets $L\subseteq\operatorname{int}\Omega'$, so it lies wholly in the interior and $W_j=B_j$ is a bounded smooth planar domain. Thus every $W_j$ is an open domain admissible for the planar Green identity. [F3, F4, step 2.2, step 3.2, cases]
4.3 The finite family $\{U_1,\dots,U_N\}$ is an open cover of the compact set $\Omega'$; by local compactness [F8] and compactness there are compact sets $K_j\subseteq U_j$ covering $\Omega'$. By [F9] choose smooth bumps $b_j$ with $b_j=1$ on $K_j$ and $\operatorname{supp}b_j\Subset U_j$; then $\Sigma:=\sum_jb_j$ is positive on a neighbourhood of $\Omega'$, and another application of [F9] gives a smooth $\psi$ equal to $1$ near $\Omega'$ with $\operatorname{supp}\psi\subseteq\{\Sigma>0\}$. The functions $\rho_j:=\psi b_j/\Sigma$, extended by zero, are smooth, satisfy $\operatorname{supp}\rho_j\Subset U_j$, and obey $\sum_j\rho_j=1$ on a neighbourhood of $\Omega'$. [F8, F9, step 3.2, construct]

5.1 Fix $j$ and let $\theta$ be the larger holomorphic chart containing $\overline{U_j}$ chosen in steps 2.2 and 3.2. On a neighbourhood of $\overline{W_j}$ the functions $f_j:=\rho_j u$ and $g:=v$ have $C^2$ chart expressions: $u$ and $v$ do by the hypothesis, $\rho_j$ is smooth, and products and scalar multiples of $C^2$ functions are $C^2$ by [F10]. [F10, given, step 4.2, step 4.3]

6.1 Fix $j$. The plane domain $\theta(W_j)$ is admissible for [F3] by step 4.2, and the functions $f_j,g$ are $C^2$ up to its closure by step 5.1, so the plane second Green identity gives $\int_{W_j}\bigl(g\Delta f_j-f_j\Delta g\bigr)\,dA=\int_{\partial W_j}\bigl(g\,\partial_\nu f_j-f_j\,\partial_\nu g\bigr)\,ds$, with every normal outward and with the faces of the piecewise presentation counted once off the edge set. [A1, F3, F4, F5, step 4.2, step 5.1]

7.1 Every face of $W_j$ contained in $\partial U_j$ lies in the complement of $\operatorname{supp}\rho_j$ by step 4.3, so there $\rho_j=0$ and $\partial\rho_j=0$; hence $f_j=\rho_ju$ and its conormal derivative vanish on such a face, which therefore contributes zero to the boundary integral of step 6.1. The remaining faces lie in $\partial\Omega'$, and on their interior points $W_j$ coincides with $\Omega'$, so the outward normal of $W_j$ is the outward conormal of $\Omega'$ there. [F10, step 4.2, step 4.3, step 6.1]

8.1 Summing the identities of step 6.1 over $j$ and inserting step 7.1 gives the equality of $\sum_j\int_{W_j}\bigl(v\Delta(\rho_ju)-\rho_ju\Delta v\bigr)\,dA$ with $\sum_j\int_{\partial\Omega'\cap U_j}\bigl(v\,\partial_\nu(\rho_ju)-\rho_ju\,\partial_\nu v\bigr)\,ds$. [step 6.1, step 7.1]

9.1 For the volume sum, each integrand $v\Delta(\rho_ju)-\rho_ju\Delta v$ is supported in $\overline{W_j}$ by step 4.3, so summing over $j$ and applying the linearity of $\Delta$ from [F2] and [F10] together with $\sum_j\rho_j=1$ near $\Omega'$ gives $\sum_j\bigl(v\Delta(\rho_ju)-\rho_ju\Delta v\bigr)=v\Delta u-u\Delta v$ on a neighbourhood of $\Omega'$; and the boundary has area zero, hence the volume sum equals $\int_{\Omega'}\bigl(v\Delta u-u\Delta v\bigr)\,dA$. [F2, F10, step 4.3, step 8.1, algebra]

9.2 For the boundary sum, $\sum_j\bigl(v\,\partial_\nu(\rho_ju)-\rho_ju\,\partial_\nu v\bigr)=v\,\partial_\nu u-u\,\partial_\nu v$ on $\partial\Omega'$: the sum is finite, $\sum_j\rho_j=1$ near $\partial\Omega'$ by step 4.3, and the same conormal and arclength density are used for every $j$ by the chart independence of step 3.1; the finitely many corner points carry no arclength. Hence the boundary sum equals $\int_{\partial\Omega'}\bigl(v\,\partial_\nu u-u\,\partial_\nu v\bigr)\,ds$. [F5, step 3.1, step 4.3, step 7.1, step 8.1, algebra]

10.1 Combining steps 8.1, 9.1 and 9.2 gives $\int_{\Omega'}(v\Delta u-u\Delta v)\,dA=\int_{\partial\Omega'}(v\,\partial_\nu u-u\,\partial_\nu v)\,ds$ and hence, after multiplying both sides by $-1$, the displayed identity of part 1. [step 9.1, step 9.2, algebra]

11.1 **Part 2.** Apply part 1 to the compact bordered domain $\overline{\Omega_K}$ of step 1.1. The volume integrand $u\Delta v-v\Delta u$ vanishes identically, because $u$ and $v$ are harmonic on $\operatorname{int}\Omega_K$ and hence have vanishing chartwise Laplacian there by [F2]; continuity of their second derivatives extends this vanishing to $\overline{\Omega_K}$. On the boundary component $\partial\Omega$ both functions vanish identically, and their conormal derivatives are finite there because $u,v$ have $C^2$ chart expressions near $\overline{\Omega_K}$; hence the integrand $u\,\partial_\nu v-v\,\partial_\nu u$ is pointwise zero on $\partial\Omega$. Since $\partial\Omega_K$ is the disjoint union of $\partial\Omega$ and the circles $\partial D_1,\dots,\partial D_m$ by step 1.1, the identity of part 1 reduces exactly to $\sum_{j=1}^{m}\int_{\partial D_j}(u\,\partial_\nu v-v\,\partial_\nu u)\,ds=0$. The case $m=0$ gives the empty sum, and if $\partial\Omega'$ is empty in part 1 both sides vanish because the empty boundary contributes zero. [A1, given, F2, step 1.1, step 10.1, algebra, cases] ∎



## Source notes

Marshall, *The Uniformization Theorem*, PDF p.15 (Comment 5), observes that the symmetry of the Green function can be proved via Green's theorem on Riemann surfaces and that the details are more work; this item supplies the chartwise second identity that those details require. The planar second Green identity used in each chart is Hunter, *Notes on Partial Differential Equations*, §2.5, Theorem 2.23, printed p. 32 (PDF p. 38), in the uniform form recorded at [[cor-second-green-identity-on-a-bounded-c-one-domain]]. The conformal invariance of the chartwise Laplacian and of the conormal pairing is verified here from the chain rule rather than quoted.
