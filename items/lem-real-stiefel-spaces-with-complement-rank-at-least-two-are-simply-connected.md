---
id: lem-real-stiefel-spaces-with-complement-rank-at-least-two-are-simply-connected
kind: lemma
title: Real Stiefel spaces with complement rank at least two are simply connected
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
- def-countable-choice
- def-simply-connected
- thm-higher-dimensional-spheres-are-simply-connected
- thm-constant-rank-theorem-for-manifolds
- thm-relative-whitney-approximation-for-manifold-valued-maps
- lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
- thm-smooth-dependence-of-ode-solutions-on-parameters
justified_by: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Milnor and James Stasheff, Characteristic Classes, §5
    url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
    locator: Stiefel connectivity; a direct disk/projection proof is supplied here.
dependency_level: 0
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume $\mathrm{AC}_\omega$. For integers $1\le k\le N-2$, the space $V_k(\mathbb R^N)=\{F\in\mathbb R^{N\times k}:F^TF=I_k\}$, with its Euclidean subspace topology, is nonempty, path connected, and simply connected. In particular, $V_{N-r}(\mathbb R^N)$ is simply connected whenever $N>r\ge2$. Countable choice is used only through relative smooth approximation.

## Facts & Assumptions

[A1] Countable choice is assumed. [[def-countable-choice]]

[F1] For $d\ge2$, the sphere $S^d$ is nonempty, path connected, and simply connected. A space is simply connected if it is nonempty and path connected and has trivial fundamental group at every basepoint. [[thm-higher-dimensional-spheres-are-simply-connected]], [[def-simply-connected]]

[F2] A smooth map with surjective derivative along a level set gives that level set its embedded manifold structure. [[thm-constant-rank-theorem-for-manifolds]]

[F3] Under [A1], a continuous manifold-valued map smooth on a neighbourhood of a closed subset can be smoothly approximated through a homotopy fixed on a smaller neighbourhood of that subset. [[thm-relative-whitney-approximation-for-manifold-valued-maps]]

[F4] A linear matrix ODE with continuous coefficients has a unique solution on any given compact interval. For smooth coefficients depending smoothly on parameters, solutions depend smoothly on those parameters locally in time; uniqueness and finitely many overlapping time intervals give this dependence along an entire compact solution interval. [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]

## Proof

**Given:** Countable choice and integers $N\ge k+2$, $k\ge1$. Frames are ordered, with no orientation imposed. All matrix sets have ordinary subspace topology.

1.1 The constraint map $\Phi(F)=F^TF-I_k$ takes values in symmetric $k$-by-$k$ matrices. Its derivative at an orthonormal frame is $A\mapsto F^TA+A^TF$, which is onto: for symmetric $B$, choose $A=FB/2$. Thus [F2] makes $V_k(\mathbb R^N)$ an embedded smooth manifold. Every based continuous loop can be represented by a smooth based loop: first reparametrize it to be constant on an arc about the basepoint, using a degree-one circle reparametrization based-homotopic to the identity, then use [F3] relative to a closed smaller arc. A continuous disk filling a smooth boundary loop can likewise be made smooth while keeping its boundary values: first compress the original filling radially into a smaller disk and use the boundary loop, constant in the radial variable, on the remaining annulus. Extend this map outside the unit circle by the same radial-constant formula and apply [F3] on $\mathbb R^2$ relative to a closed exterior annulus contained in its smooth region. Restrict to the disk. The formula is smooth near the unit circle, so no manifold-with-boundary version of approximation is needed. These operations use [A1] only through [F3]. [A1, F2, F3, construct, algebra]

1.2 We record the needed explicit complement construction. Let $P(z)$ be any smooth family of orthogonal projections of fixed rank on a disk, and set $P_z(t)=P(tz)$ for $0\le t\le1$. Define $A_z(t)=\dot P_z(t)P_z(t)-P_z(t)\dot P_z(t)$, and solve $U_z'=A_zU_z$, $U_z(0)=I_N$ using [F4]. The coefficient is skew symmetric, so differentiating $U_z^TU_z$ makes it constant, equal to $I_N$. Differentiating $P_z^2=P_z$ gives $P_z\dot P_zP_z=0$ and $\dot P_zP_z+P_z\dot P_z=\dot P_z$, hence $[A_z,P_z]=\dot P_z$. Therefore $Q_z=U_zP(0)U_z^T$ and $P_z$ solve the same linear matrix equation $Q_z'=[A_z,Q_z]$ with the same initial value. Uniqueness, applying [F4] in the coordinate array of matrices, gives $Q_z=P_z$. Consequently transporting an orthonormal basis of $\operatorname{im}P(0)$ by $U_z(1)$ gives an orthonormal basis of $\operatorname{im}P(z)$. These transported vectors depend smoothly on $z$ by [F4], including at $z=0$ since $P(tz)$ is jointly smooth there. Smoothness up to the disk boundary follows by extending the smooth projection a little beyond that boundary. This construction uses unique solutions, not a choice of a solution for each parameter. [F4, construct, algebra]

1.3 For path connectivity, take two frames and extend each to an orthonormal basis of $\mathbb R^N$, choosing the last complementary vector so the full matrix has determinant one. Such a finite completion exists by ordinary finite-dimensional orthogonal-complement algebra. Every matrix in $SO(N)$ is joined to $I_N$ by plane rotations: rotate its first column to $e_1$ within the plane it spans with $e_1$, using an auxiliary coordinate direction in the antipodal case, then restrict to the orthogonal complement of $e_1$ and repeat. Each rotation has a continuous path from the identity, fixes the previously aligned columns, and has determinant one; at the final one-dimensional stage determinant one forces the last entry to be $1$. Concatenating these finitely many rotation paths joins the two full matrices, and their first $k$ columns give a path between the original frames. The standard frame proves nonemptiness. [given, construct, algebra]

2.1 Induct on $k$, simultaneously for all $N\ge k+2$. For $k=1$, the constraint space is $S^{N-1}$, so [F1] proves simple connectivity because $N-1\ge2$. Suppose $k\ge2$ and the result holds for $k-1$ in every allowed ambient dimension. By step 1.1 it suffices to fill a smooth loop $\gamma=(v_1,\ldots,v_k)$ in $V_k(\mathbb R^N)$. Its first column is a smooth sphere loop, which bounds a continuous disk by [F1]. Make this filling smooth, with the same boundary values, by step 1.1, and denote it $f_1:D^2\to S^{N-1}$. Apply step 1.2 to $P(z)=I_N-f_1(z)f_1(z)^T$. It gives a smooth isometric frame $C(z):\mathbb R^{N-1}\to f_1(z)^\perp$ throughout the disk. On the boundary the remaining columns have coordinates $w_i=C^Tv_i$, $2\le i\le k$, giving a loop in $V_{k-1}(\mathbb R^{N-1})$. Since $(N-1)-(k-1)=N-k\ge2$, induction supplies a continuous disk filling $(\widetilde w_2,\ldots,\widetilde w_k)$ of that loop. Then $(f_1,C\widetilde w_2,\ldots,C\widetilde w_k)$ is a continuous disk of orthonormal $k$-frames with boundary exactly $\gamma$. Thus every loop extends over a disk and is nullhomotopic. For the original continuous based loop, attach its basepoint-fixed smoothing homotopy to this disk filling. Disk extension is the usual loop nullhomotopy criterion; contracting the disk towards its chosen boundary basepoint gives a based nullhomotopy. [F1, step 1.1, step 1.2, base, ih, construct]

3.1 Step 2.1 applies at every basepoint and proves that each fundamental group is trivial. Together with step 1.3 this establishes simple connectivity for all $N\ge k+2$. For $N>r\ge2$, take $k=N-r\ge1$; then $N-k=r\ge2$, which is exactly the permitted range. No fibration, numerability theorem, general bundle classification, or arbitrary choice is used. [F1, step 1.3, step 2.1, discharge-induction] ∎
