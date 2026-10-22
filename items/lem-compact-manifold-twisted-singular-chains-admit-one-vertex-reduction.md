---
id: lem-compact-manifold-twisted-singular-chains-admit-one-vertex-reduction
kind: lemma
title: A compact manifold's twisted singular chains admit a one-vertex reduction
  without choice
status: draft
origin: pipeline
deps:
  - def-singular-and-cellular-chain-complexes-with-local-coefficients
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Hatcher, Algebraic Topology, singular chains and local coefficients,
        Chapters2 and3.H
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
---

## Statement

Let $M$ be a compact connected Hausdorff manifold, $o\in M$, and $R$ a unital ring. One can construct paths $\gamma_x$ from $o$ to every $x\in M$, with $\gamma_o$ constant, by fixed rules from one finite atlas and finitely many connecting paths. Let $\mathcal R$ be a right-$R$ local system with a supplied identification $\mathcal R_o=R$ and transport given by left multiplication by units, with monodromy image $H\le R^\times$. Its twisted singular complex has an explicit chain decomposition $C_*(M;\mathcal R)=C'_*\oplus Q_*$ after a change of free bases, where $C'_0=R$, $C'_* $ is free, and $Q_*$ is contractible with its only nonzero differential an identity from degree one to degree zero. Moreover
$$\operatorname{im}(d'_1)=\sum_{h\in H}(h-1)R.$$
The decomposition and its dual cochain homotopy equivalences require no choice principle. In particular this image is principal if $H$ is cyclic, if it equals $R$, or if every right ideal of $R$ is principal.

## Facts & Assumptions

**Given:** The compact connected manifold, point, coefficient system, and base fiber identification.

[F1] A right-$R$ local system here means a functor from the fundamental groupoid to unital right-$R$ modules with right-linear transport isomorphisms. Forgetting the right action gives an abelian-group local system; the intrinsic first-vertex construction of [[def-singular-and-cellular-chain-complexes-with-local-coefficients]] applies with commutative base ring $\mathbb Z$. The additional arbitrary-ring linearity and square-zero calculation are supplied directly in step 1.1 below.

## Proof

1.1 For a singular simplex $\sigma:[v_0,\ldots,v_n]\to M$, put its coefficient in $\mathcal R_{\sigma(v_0)}$ and take the direct sum of those right modules over all singular simplices. For $n\ge1$ define $d(c\sigma)=T_{01}(c)\,\sigma[1,\ldots,n]+\sum_{i=1}^n(-1)^i c\,\sigma[0,\ldots,\widehat i,\ldots,n]$, and let the degree-zero differential be zero. Every face map is right-linear because transport is, so this defines right-$R$ linear differentials without assuming that $R$ is commutative. To check $d^2=0$, pair the two terms deleting vertices $i<j$. Their signs are $(-1)^{i+j-1}$ and $(-1)^{i+j}$. If $i>0$, both coefficients are $c$. If $i=0<1<j$, both coefficients are $T_{01}(c)$. If $(i,j)=(0,1)$, the coefficients are $T_{12}T_{01}(c)$ and $T_{02}(c)$, which agree because the two-edge path is endpoint-fixed homotopic to the direct edge in the simplex and transport is a groupoid functor. Thus every pair cancels. This includes degenerate simplices and degree one, where the next differential is zero. These are the underlying abelian local chains of [F1], now equipped with their verified right-$R$ structure. [F1, given, construct, algebra]

1.2 Choose a finite cover by coordinate balls $U_1,\ldots,U_m$ with charts onto convex Euclidean balls, including a ball centered at $o$. This uses compactness and only a finite selection. Their intersection graph is connected: otherwise the unions belonging to different graph components would be disjoint nonempty open sets partitioning connected $M$. For each edge choose one point in the intersection, a finite selection; join it to each chart center by its straight coordinate segment. Choose a spanning tree by the finite index order and concatenate these segments to get paths from $o$ to every chart center. For $x\in M$, take the least-index chart containing it and follow its center path by the straight segment to $x$; at $o$ use the constant path. Denote this explicitly prescribed path by $\gamma_x$. This defines paths for all points from one finite list of charts and edge points, rather than selecting an infinite family of paths. [given, construct, algebra]

2.1 Transport the supplied basis $1\in\mathcal R_o$ along $\gamma_x$ to obtain a basis at each $x$. Thus [F1] makes every $C_j$ the free right $R$-module on its actual singular $j$-simplices. Write $e_x$ for the degree-zero basis and $e_\sigma$ for the degree-one basis of a path $\sigma:x\to y$. The degree-one boundary is $d_1e_\sigma=e_y g_\sigma-e_x$, where $g_\sigma\in H$ is the transition unit obtained by transporting first along $\gamma_x$, then along $\sigma$, and back along $\gamma_y$. For $x\ne o$, the path $\gamma_x$ is itself one singular one-simplex; denote its basis element by $p_x$. These basis elements are distinct because their terminal points are distinct, and $d_1p_x=e_x-e_o$. Put $p_o=0$. [F1, step 1.2, construct, algebra]

3.1 Change the degree-zero basis to $e_o$ and $b_x=e_x-e_o$ for $x\ne o$. This is invertible even with infinitely many vertices: the inverse is $e_x=b_x+e_o$, and every vector has finite support. Retain the degree-one basis elements $p_x$. For every other one-simplex $\sigma:x\to y$, replace its basis element by $q_\sigma=e_\sigma-p_y g_\sigma+p_x$. This is another invertible basis change, with inverse $e_\sigma=q_\sigma+p_y g_\sigma-p_x$. Direct substitution gives $d_1q_\sigma=e_o(g_\sigma-1)$, whereas $d_1p_x=b_x$. [step 2.1, construct, algebra]

4.1 Let $Q_1$ be free on the $p_x$, $Q_0$ free on the $b_x$, and $Q_j=0$ in other degrees, with differential $p_x\mapsto b_x$. Let $C'_1$ be free on the remaining $q_\sigma$, $C'_0=Re_o$, and $C'_j=C_j$ for $j\ge2$. The differential of a degree-two chain has zero $p_x$ coefficient for every $x$: applying $d_1$ would otherwise give a nonzero corresponding $b_x$ coefficient, contrary to $d_1d_2=0$ proved in step 1.1. Thus $d_2$ lands in $C'_1$, and higher differentials already stay in $C'$. This proves the claimed direct sum of complexes. Its contractible summand has the explicit homotopy $b_x\mapsto p_x$, zero on all other degrees. Dualizing this actual homotopy gives the cochain equivalences for any coefficient module; no exactness assertion about an infinite product or choice of primitives is needed. [step 3.1, construct, algebra]

5.1 The image of $d'_1$ is the right ideal generated by the elements $g_\sigma-1$. All transition units belong to $H$, so this ideal is contained in $\sum_{h\in H}(h-1)R$. Conversely every $h\in H$ is realized by transport along a based loop at $o$. That loop is one singular one-simplex and is not one of the removed $p_x$, whose endpoints differ. Its reduced boundary is $e_o(h-1)$. Thus every generator of the displayed ideal occurs, and equality follows. [F1, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 If $H=\langle t\rangle$ is cyclic, $t^k-1$ is a right multiple of $t-1$ for every integer $k$: use the finite geometric sum for $k>0$, zero for $k=0$, and $t^{-k}-1=-t^{-k}(t^k-1)$ for negative powers. Since powers of $t$ commute with $t-1$, this last expression is also a right multiple. The ideal is therefore $(t-1)R$, including $H=\{1\}$ with zero ideal. The other two sufficient conditions for principality are literal. All basis changes and homotopies were explicit finite-support formulas, and the only initial choices were finite. This proves the stated choice scope. [step 1.2, step 3.1, step 4.1, step 5.1, algebra] ∎
