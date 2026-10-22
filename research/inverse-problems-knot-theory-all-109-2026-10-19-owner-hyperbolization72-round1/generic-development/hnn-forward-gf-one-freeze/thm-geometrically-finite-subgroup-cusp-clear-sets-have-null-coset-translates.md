---
id: thm-geometrically-finite-subgroup-cusp-clear-sets-have-null-coset-translates
kind: theorem
title: Cusp-clear invariant sets for geometrically finite subgroups have null coset translates
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
  - thm-finite-convex-neighborhood-volume-implies-conical-bounded-parabolic-limit-set
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
  - lem-hyperbolic-three-space-quasi-isometry-has-quasiconformal-boundary
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Liulan Li, Ken'ichi Ohshika and Xiantao Wang, On Klein–Maskit combination theorem in space I
      url: https://ir.library.osaka-u.ac.jp/repo/ouka/all/5261/ojm46_04_1097.pdf
      locator: Actual published Section 3, printed pp. 1109–1113, and all of Sections 2–4 read; the direct height-normalization proof below replaces the isometric-sphere argument and its ambient-conical citation gap
---

## Statement

Assume AC. Let $\Gamma\le\mathrm{PSL}_2(\mathbb C)$ be discrete and torsion-free, and let $J\le\Gamma$. Assume $J$ is elementary, or is nonelementary and geometrically finite in the finite-positive-radius-convex-neighborhood-volume sense. Write $\Lambda_\Gamma,\Lambda_J$ for their actual limit sets. Supply a compact $J$-invariant set $B\subset\widehat{\mathbb C}$ such that
$$B\cap\Lambda_\Gamma\subseteq\Lambda_J.$$
At every parabolic fixed point of $J$ whose full stabilizer in $J$ has rank one, impose cusp clearance: in a coordinate taking that point to infinity and its generator to $z\mapsto z+\ell$, $\ell>0$, the finite part of $B$ has $|\operatorname{Im}z|\le R_B$ for some $R_B<\infty$ depending on that point. Equivalently $B$ avoids a sufficiently small strict standard ideal peak domain there; it may contain the point infinity itself. No clearance assumption is imposed at rank-two cusps.

Then for every sequence of pairwise distinct right cosets $g_nJ$ in $\Gamma$, the spherical diameters satisfy
$$\operatorname{diam}_{\mathrm{sph}}(g_nB)\longrightarrow0.$$
This is independent of the coset representatives because $JB=B$. The conclusion includes trivial, cyclic loxodromic, cyclic parabolic and rank-two parabolic subgroups, as well as arbitrary nonelementary geometrically finite $J$. The ambient group is not assumed geometrically finite or finitely generated. It may have larger parabolic stabilizers than $J$.

## Facts & Assumptions

**Given:** AC, the ambient and subgroup data, the compact invariant set and its limit-set and cusp-clearance conditions.

[A1] Full choice is [[def-axiom-of-choice]]. It supplies coset normalizations and subsequences.

[F1] Discrete torsion-free subgroups act freely and properly on the model, whose compact balls contain only finitely many points of an orbit. Point stabilizers in the ambient model isometry group are compact. Full parabolic stabilizers are translation lattices of rank one or two. The elementary matrix and thin-component assertions have no finite-volume hypothesis. [[lem-local-thin-components-of-torsion-free-kleinian-quotients]]

[F2] A nonelementary geometrically finite subgroup has every limit point conical or bounded parabolic. [[thm-finite-convex-neighborhood-volume-implies-conical-bounded-parabolic-limit-set]]

[F3] The upper half-space metric, distance formula, Hermitian matrix model, Möbius extensions and compact closed-ball compactification hold. In particular $m_{z_0,Y_0}(z)=(z-z_0)/Y_0$ sends the model point $(z_0,Y_0)$ to $(0,1)$. [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]], [[lem-hyperbolic-three-space-quasi-isometry-has-quasiconformal-boundary]]

## Proof

1.1 Fix an orbit basepoint $o$ and a closed Dirichlet domain $D_J(o)$ for $J$. Distances to the $J$ orbit attain minima by [F1], so for each coset replace $g_n$ by $g_nj_n$, $j_n\in J$, so that $x_n=(g_nj_n)^{-1}o\in D_J(o)$. This leaves $g_nB$ unchanged; henceforth rename $g_nj_n$ as $g_n$, so $x_n=g_n^{-1}o$. The normalized group elements remain distinct because their right cosets are distinct. The points $x_n$ escape every compact set: otherwise properness and the trivial stabilizer of $o$ would permit only finitely many such matrices. Every subsequence therefore has a further subsequence with $x_n$ tending to some ideal point $b\in\Lambda_\Gamma\cap\overline{D_J(o)}$. The Dirichlet domain contains no conical ideal point of $J$. Indeed its comparisons are hyperbolic half-spaces, making it convex and containing $o$. A ray from $o$ to any of its ideal points stays in it. A conical orbit sequence within bounded distance of that ray would force its points to remain a bounded distance from $o$ by the defining Dirichlet inequalities, contradicting escape. Changing the orbit basepoint or its asymptotic ray changes distances by a fixed bound, as follows from the vertical-ray distance formula. [A1, F1, F3, given, construct, algebra]

1.2 We record uniform ambient orbit heights at any parabolic point, without assuming boundedness of that point for $\Gamma$. Normalize a nontrivial parabolic translation in $J$ as $T_\ell:z\mapsto z+\ell$, $\ell>0$. The complex Shimizu estimate is $|\ell c|\ge1$ for any determinant-one ambient group matrix with $c\ne0$. To check it, scale $\ell$ to one and iterate $h_{k+1}=h_kT_1h_k^{-1}$ if $0<|c_0|<1$. Direct multiplication gives $c_{k+1}=-c_k^2$, $a_{k+1}=1-a_kc_k$, $b_{k+1}=a_k^2$, $d_{k+1}=1+a_kc_k$. The numbers $|c_k|=|c_0|^{2^k}$ decrease strictly, $a_k$ stays bounded by $\max(|a_0|,(1-|c_0|)^{-1})$ and tends to one, and the matrices tend to $T_1$, contradicting discreteness. Scaling back gives the bound. For a fixed model point $o=(z_0,Y_0)$ the height of its image by an ambient matrix with $c\ne0$ is $Y_0/(|cz_0+d|^2+|c|^2Y_0^2)\le\ell^2/Y_0$, by the Hermitian action. If $c=0$, that matrix fixes the parabolic point and lies in its full ambient translation stabilizer from [F1], so it leaves height equal to $Y_0$. All points of $\Gamma o$ therefore have height at most $H=\max(Y_0,\ell^2/Y_0)$. [F1, F3, construct, algebra]

2.1 If the ideal accumulation point $b$ from step 1.1 does not lie in $\Lambda_J$, the limit-set condition makes $b\notin B$. Make a fixed Möbius coordinate in which $b=0$. Then $x_n=(z_n,Y_n)$ has $z_n\to0$, $Y_n\to0$. Compactness and $0\notin B$ give $|z|\ge d>0$ for all finite $z\in B$ in this coordinate; the possible point infinity is harmless. The maps $m_n(z)=(z-z_n)/Y_n$ send $x_n$ to $i=(0,1)$, and send all finite points of $B$ outside the Euclidean disc of radius $d/(2Y_n)$ for large $n$, while fixing infinity. Hence $\operatorname{diam}_{\mathrm{sph}}m_n(B)\to0$. The isometries $k_n=g_nm_n^{-1}$ take $i$ to the one fixed point $o$ and belong to a compact coset of its stabilizer, by [F1]. A compact family of sphere Möbius maps is uniformly equicontinuous: its joint evaluation map is continuous on the product with the compact sphere, and a finite subcover gives a common modulus of continuity. Thus $\operatorname{diam}_{\mathrm{sph}}g_nB=\operatorname{diam}_{\mathrm{sph}}k_nm_nB\to0$. [F1, F3, step 1.1, given, construct, algebra]

2.2 Suppose instead that $b\in\Lambda_J$. If $J$ is nonelementary, [F2] and step 1.1 show that $b$ is parabolic. The elementary cases give the same alternative or exclude it. To verify them directly, a torsion-free discrete group has no nontrivial elliptics, since an elliptic has finite order or powers accumulating at identity. If its limit set is empty, every nonidentity element would give a parabolic or loxodromic ideal orbit limit, so the group is trivial. If that set has one point, all elements fix it and are translations, giving the rank-one or rank-two lattice of [F1]. If it has two points, the group preserves that pair; an interchange is order two, so it fixes both. It is diagonal and cyclic: logarithms of absolute multipliers have trivial kernel and form a discrete additive subgroup of $\mathbb R$, because a sequence of bounded multipliers would lie in a compact annulus and violate discreteness. Its two limit points are conical, by the orbit on its axis, so step 1.1 excludes them from $\overline D_J$. A finite limit set of size at least three cannot occur: the group action on that finite set has finite image, and its kernel fixes three points and hence is trivial, making the group finite and therefore trivial. Thus in every remaining case $b$ is a parabolic point of $J$. [F1, F2, F3, step 1.1, construct, algebra]

3.1 Normalize that point to infinity and use its stabilizer translations in the Dirichlet inequalities. If $o=(z_0,Y_0)$, comparison with $o+v$ gives $2\operatorname{Re}((z-z_0)\bar v)\le|v|^2$ on $D_J$. For a rank-two stabilizer the two signs of two independent lattice generators bound both horizontal coordinates. Step 1.2 bounds the heights of the orbit points $x_n$ as well. These three bounds contradict $x_n\to\infty$, so the rank-two case cannot occur. For rank one rotate its generator to be real. The two signs bound $\operatorname{Re}z_n$. Heights remain bounded by $H$ from step 1.2. Therefore $x_n\to\infty$ forces $|\operatorname{Im}z_n|\to\infty$. Cusp clearance puts every finite point of $B$ in a fixed strip $|\operatorname{Im}z|\le R_B$. Consequently for $m_n(z)=(z-z_n)/Y_n$ one has $|m_n(z)|\ge(|\operatorname{Im}z_n|-R_B)/Y_n\ge(|\operatorname{Im}z_n|-R_B)/H\to\infty$ uniformly over the finite part of $B$; infinity again maps to infinity. Thus its image diameter tends to zero, and the compact stabilizer-coset argument of step 2.1 transfers this to $g_nB$. This also covers rank enlargement of the ambient parabolic stabilizer, since step 1.2 used its full translation lattice and did not assume it equaled the subgroup stabilizer. Finally, if the full sequence of diameters failed to tend to zero, take a subsequence bounded below by a positive constant, then an ideal-accumulation subsequence from step 1.1. Steps 2.1–3.1 contradict that lower bound in every case. This proves the full asserted limit. [F1, F3, step 1.1, step 1.2, step 2.1, step 2.2, given, algebra] ∎

## Actual source reading and source precision

All declared actual supplier proofs were read in full during the preceding geometry development. The actual published Space I paper was read through PDF pp. 2–39, printed pp. 1097–1134, including its entire Section 3 proof and the complete main combination proof; later applications and references are not counted. Its raw PDF SHA256 is 9a90e6bb93ea5d579c5a2cb62fdb2341539e4542a3ae4d9f03ee63c962b0b873. In the source's Section 3 Claim 4, ambient-group conicality is contradicted by citing the subgroup Dirichlet-domain lemma; that citation alone does not supply the contradiction. The direct ambient height bound and compact stabilizer normalization above avoid that gap and every isometric-sphere distortion import.

This theorem supplies the full cusp-clear null-family step needed to study translated gluing boundaries, including elementary edge groups and both parabolic ranks. It does not assert the remaining Bass–Serre nested-boundary structure, conformal quotient gluing or geometrical finiteness of an amalgam or HNN extension.
