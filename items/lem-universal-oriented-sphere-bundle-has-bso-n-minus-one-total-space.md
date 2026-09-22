---
id: lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space
kind: lemma
title: The universal oriented sphere-bundle total space has the homotopy type of BSO(n-1)
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-oriented-grassmannian-and-tautological-oriented-bundle", "def-stiefel-space-grassmannian-and-tautological-bundle", "thm-stable-stiefel-space-is-contractible", "thm-schubert-cells-give-the-stable-grassmannian-cw-structure", "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type", "thm-numerable-fiber-bundles-are-hurewicz-fibrations", "prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish", "thm-naturality-orientation-sign-and-whitney-product-for-euler-classes", "def-real-and-complex-topological-vector-bundle", "def-oriented-real-vector-bundle-and-oriented-frame-bundle", "def-axiom-of-choice"]
proof_strategy: direct
axiom_strength: "ZF + AC; used for numerations, the compact-fiber CW-type comparison and Euler-class suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lectures 35-36"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Universal oriented sphere bundles and the BSO induction, printed pp.130-137"
    - title: "Hatcher, Vector Bundles & K-Theory, Theorem 3.16 proof"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "The oriented sphere/complement projection, printed p.95; graph charts, Lemma 1.15 pp.28-29; parity embeddings p.30; compact-exhaustion paracompactness, Proposition 1.19 p.36"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC and let $n\ge2$. In the oriented Grassmannian model $B_n=\operatorname{Gr}_n^+(\mathbb R^\infty)$ let $\gamma_n^+\to B_n$ be the tautological oriented bundle with its Euclidean metric, and put $S_n=S(\gamma_n^+)$ with projection $p:S_n\to B_n$.

1. The actual sphere bundle $S^{n-1}\to S_n\xrightarrow{p}B_n$ is a Hurewicz fibration. The complement map
$$r:S_n\longrightarrow B_{n-1},\qquad (V,o,v)\longmapsto v^\perp\cap V$$
is a homotopy equivalence. Orient its target plane $W=v^\perp\cap V$ so that $(v,w_1,\ldots,w_{n-1})$ is positive in $(V,o)$ whenever $(w_1,\ldots,w_{n-1})$ is positive in $W$. Thus the notation $S^{n-1}\to B\operatorname{SO}(n-1)\to B\operatorname{SO}(n)$ denotes this fibration with a homotopy-equivalent model for its total space, not a literal replacement by a homeomorphic Grassmannian.
2. On the actual total space, the orientation-preserving ordered splitting is
$$p^*\gamma_n^+\cong\varepsilon^1\oplus r^*\gamma_{n-1}^+,$$
where the positive generator of the first summand is the tautological unit vector $v$. Interchanging the two factors changes the ordered orientation by $(-1)^{n-1}$.
3. With integral coefficients, $p^*e(\gamma_n^+)=0$.

## Facts & Assumptions

**Given:** The stable weak direct-limit models and the Euclidean metrics in the statement.

[A1] AC is assumed for the paracompact numerations, CW-type comparison and Euler-class results below. ([[def-axiom-of-choice]]).

[F1] The finite Stiefel space consists of orthonormal frames; its Grassmannian quotient has graph charts locally trivializing the tautological bundle. Stable models carry the weak topology of the finite stages. The oriented model is the quotient by $\operatorname{SO}(n)$; for positive rank its orientation-forgetting map to the ordinary real Grassmannian is a double cover. The ordinary stable Grassmannian is a CW complex. ([[def-stiefel-space-grassmannian-and-tautological-bundle]], [[def-oriented-grassmannian-and-tautological-oriented-bundle]], [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]).

[F2] Stable Stiefel spaces are contractible. For the even-coordinate embedding $P(e_j)=e_{2j}$, the Gram-normalized injective paths $L_t=(1-t)I+tP$ give a continuous homotopy of orthonormal frames from the identity to $P$. ([[thm-stable-stiefel-space-is-contractible]]).

[F3] A numerable bundle with compact Hausdorff fiber over a paracompact Hausdorff base has paracompact Hausdorff total space; if the base is compactly generated, then the total space is compactly generated and hence CGWH, and if base and fiber have CW type then so does the total space. A numerable fiber bundle is a Hurewicz fibration. ([[lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type]], [[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]).

[F4] An increasing compact-Hausdorff exhaustion with the weak direct-limit topology is paracompact, with support-subordinate locally finite partitions of unity for its open covers (Hatcher, *Vector Bundles & K-Theory*, Proposition 1.19, printed p.36, with the convention on p.35). Applied to the finite Grassmannian stages, this supplies numerations of their stable bundle charts.

[F5] A vector bundle has continuous linear local charts; an orientation is a continuous choice of fiber orientations. Euler classes are natural on numerable oriented bundles over paracompact Hausdorff CGWH bases of CW type, and a nowhere-zero section of a positive-rank bundle in that scope forces its Euler class to vanish. The ordered-sum swap has sign $(-1)^{ab}$ for ranks $a,b$. ([[def-real-and-complex-topological-vector-bundle]], [[def-oriented-real-vector-bundle-and-oriented-frame-bundle]], [[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]], [[prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish]]).

## Proof

**Proof technique:** construct explicit homotopy inverses and the splitting.

1.1 Local charts and admissibility. Finite Stiefel spaces are closed bounded subsets of finite matrix spaces and hence compact Hausdorff; quotienting orthonormal frames by the compact orthogonal or special orthogonal group gives compact Hausdorff Grassmannians, with closed coordinate inclusions. Their stable weak topologies satisfy [F4]. The graph charts of [F1] lift to the two oriented sheets; orthonormalizing the graph frame gives continuous oriented isometric bundle charts, compatible in the finite stages. They trivialize the sphere bundle with fiber $S^{n-1}$ and the orientation cover with fiber two points. Their numerations exist by [F4]. The ordinary Grassmannian is a CW complex by [F1], hence is compactly generated and CGWH. Applying the compact-fiber result [F3] to the orientation cover makes $B_n$ paracompact Hausdorff, CGWH, and of CW type. Applying it again to $p$ makes $S_n$ paracompact Hausdorff, CGWH, and of CW type. The numerable sphere bundle is a Hurewicz fibration by [F3]. Thus both bases needed below lie in the Euler-class scope of [F5]. [A1, F1, F3, F4, F5]

1.2 Adapted frames and the complement. The continuous map from $V_n(\mathbb R^\infty)$ sending an oriented orthonormal frame $(v,w_1,\ldots,w_{n-1})$ to $(V,o,v)$ identifies $S_n$ with the quotient by the subgroup $\operatorname{diag}(1,\operatorname{SO}(n-1))$. To check the topology and local sections, in any oriented isometric bundle chart and near a fixed unit vector, project a fixed basis of its perpendicular plane onto the varying perpendicular plane and apply finite Gram orthonormalization; independence persists on an open neighborhood, and the orientation sign is constant there. This supplies adapted-frame charts and proves the quotient identification. Dropping the first vector therefore induces the continuous complement map $r:S_n\to B_{n-1}$ with exactly the displayed orientation. [F1, F5, algebra]

2.1 Define a candidate inverse. Fix the first standard vector $e_1$, orthogonal to the image of $P$. For an oriented $(n-1)$-plane $(W,o_W)$ put $$s(W,o_W)=(\mathbb R e_1\oplus P W,\ (e_1,P o_W),\ e_1).$$ On frames this is the continuous map $(w_1,\ldots,w_{n-1})\mapsto(e_1,Pw_1,\ldots,Pw_{n-1})$, equivariant for the frame changes defining the quotients, so it induces a continuous map $s:B_{n-1}\to S_n$. Its composite $rs$ is the even-coordinate embedding on oriented planes. [F1, F2, step 1.2]

3.1 Descent of the parity homotopies. Write a frame as a column matrix $A$ and the homotopy in [F2] as $K_t(A)=L_tA(A^{\mathsf T}L_t^{\mathsf T}L_tA)^{-1/2}$. If $Q$ is orthogonal, the positive Gram matrix for $AQ$ is $Q^{\mathsf T}(A^{\mathsf T}L_t^{\mathsf T}L_tA)Q$, whose inverse square root is its conjugate by $Q$; this follows from uniqueness of the positive square root. Hence $K_t(AQ)=K_t(A)Q$. In rank $n-1$, the homotopy descends to oriented planes and gives $\operatorname{id}_{B_{n-1}}\simeq rs$. In rank $n$, it descends by the subgroup in step 1.2 to a homotopy from $\operatorname{id}_{S_n}$ to $(V,o,v)\mapsto(PV,Po,Pv)$. There is no continuity inference merely from pointwise formulas: [F2] gives continuity on stable frames times the interval, and the orbit quotient is open (the saturation of an open set is a union of translates). Its product with the identity of the interval is therefore also an open quotient, so both equivariant homotopies descend continuously. [F1, F2, step 1.2, step 2.1, algebra]

4.1 Complete the homotopy on $S_n$. For a point represented by the adapted frame $(v,w_1,\ldots,w_{n-1})$, rotate its even-coordinate frame through $$(\cos\theta\,Pv+\sin\theta\,e_1,\ Pw_1,\ldots,Pw_{n-1}),\qquad 0\le\theta\le\pi/2.$$ These vectors are orthonormal: $e_1$ is perpendicular to all even coordinates and $Pv\perp Pw_j$. The formula is equivariant for $\operatorname{SO}(n-1)$ on the last columns and is continuous on the stable frame space (addition and scalar multiplication here are the finite-stage operations used in [F2]); the same open-quotient argument as in step 3.1 gives a continuous homotopy on $S_n$. At the final endpoint this is $(\mathbb R e_1\oplus PW,(e_1,Po_W),e_1)=sr(V,o,v)$. Concatenate with step 3.1 to get $\operatorname{id}_{S_n}\simeq sr$. Together with $rs\simeq\operatorname{id}$ this proves the homotopy equivalence, with an explicit inverse. [F1, F2, step 1.2, step 2.1, step 3.1, algebra]

5.1 Splitting and Euler vanishing. Over $(V,o,v)$ the map $(a,w)\mapsto av+w$ is a linear isometric isomorphism $\mathbb R\oplus(v^\perp\cap V)\to V$; its inverse sends $z$ to $(\langle z,v\rangle,z-\langle z,v\rangle v)$. Both vary continuously in the charts of step 1.1. The chosen complement orientation makes this isomorphism orientation preserving with the trivial line first. The factor-swap sign is $(-1)^{n-1}$ by [F5]. The section $(V,o,v)\mapsto v$ never vanishes. The pullback bundle is numerable by pulling back the numeration of $\gamma_n^+$, and both its base and the original base are paracompact Hausdorff CGWH spaces of CW type by step 1.1. Thus [F5] gives $p^*e(\gamma_n^+)=e(p^*\gamma_n^+)=0$ with integral coefficients. [F5, step 1.1, step 1.2, step 4.1, algebra]

6.1 Boundary and model conventions. For $n=2$, the complement has rank one and $B_1=\operatorname{Gr}_1^+(\mathbb R^\infty)=V_1(\mathbb R^\infty)$, since $\operatorname{SO}(1)$ is trivial. It is the contractible infinite unit sphere by [F2], not literally a point. Step 4.1 consequently makes $S_2$ contractible; the actual fibration retains its circle fiber. The bases are nonempty and ranks zero and one are outside the assertion's n-range. The coefficient ring is $\mathbb Z$ throughout. No assertion identifies the fixed Grassmannian total-space model homeomorphically with $S_n$; the fibration and splitting are on $S_n$, and $r$ is the explicit homotopy equivalence carrying its complement bundle. [F1, F2, step 1.1, step 4.1, step 5.1] ∎
