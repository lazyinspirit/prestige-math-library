---
id: thm-bounded-seam-parabolics-make-new-amalgam-limit-points-conical
kind: theorem
title: Bounded seam parabolics make new amalgam limit points conical
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-blocked-jordan-amalgams-have-the-prescribed-conformal-boundary-gluing
  - thm-geometrically-finite-kleinian-groups-have-separated-standard-cusps-and-finite-dirichlet-limit-vertices
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
  - thm-limit-set-conjugacies-preserve-geometric-finiteness-in-hyperbolic-three-space
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Liulan Li, Ken'ichi Ohshika and Xiantao Wang, On Klein–Maskit combination theorem in space I
      url: https://ir.library.osaka-u.ac.jp/repo/ouka/all/5261/ojm46_04_1097.pdf
      locator: Actual published Theorem 4.2(9), full proof printed pp. 1127–1128; the separation argument below avoids the stronger unneeded distance comparison in that proof
---

## Statement

Assume AC and all the hypotheses of [[thm-blocked-jordan-amalgams-have-the-prescribed-conformal-boundary-gluing]], with its notation $G,G_i,J,S$. Impose the following seam-parabolic compatibility: if $p$ is a parabolic point of $J$ and its full stabilizer in $G$ has rank one, then in the coordinate making that stabilizer a real translation lattice there is $R_p<\infty$ such that
$$\Lambda_G\setminus\{p\}\subset\{|\operatorname{Im}z|\le R_p\}.$$
No additional condition is imposed if the full ambient stabilizer has rank two. In particular rank-one subgroup cusps may enlarge to rank two. Then every point of
$$\Lambda_G\setminus G(\Lambda_{G_1}\cup\Lambda_{G_2})$$
is a conical limit point of $G$.

The subgroup $J$ may be trivial, cyclic loxodromic, cyclic parabolic, rank-two parabolic, or nonelementary geometrically finite. The factor groups need not be geometrically finite. Compatibility is an explicit additional interface to be proved in an application; geometric finiteness of $G$ is not assumed or asserted here.

## Facts & Assumptions

**Given:** AC, the full blocked Jordan amalgam data and the seam-parabolic compatibility.

[A1] Full choice is [[def-axiom-of-choice]].

[F1] The amalgam is discrete and torsion-free; $S\cap\Lambda_G=\Lambda_J$; every new limit point is enclosed by an infinite nonbacktracking path of nested gluing discs whose diameters tend to zero. Their edges are distinct right cosets. [[thm-blocked-jordan-amalgams-have-the-prescribed-conformal-boundary-gluing]]

[F2] A nonelementary geometrically finite torsion-free group admits a closed Dirichlet domain whose ideal closure has finitely many limit points, all parabolic, with compactified standard-cusp truncation disjoint from the limit set. At a rank-one cusp its ideal points satisfy a bounded parallel-coordinate condition; at rank two both horizontal coordinates are bounded. [[thm-geometrically-finite-kleinian-groups-have-separated-standard-cusps-and-finite-dirichlet-limit-vertices]]

[F3] Full parabolic stabilizers of arbitrary discrete torsion-free Kleinian groups are translation lattices of rank one or two. The elementary cyclic/translation alternatives follow from the local matrix classifier, without a finite-volume hypothesis. [[lem-local-thin-components-of-torsion-free-kleinian-quotients]]

[F4] A point is conical if and only if some sequence of group elements sends it to one limit and every other boundary point to a different common limit. This equivalence is proved by the rank-one matrix and bounded-distance geodesic argument. [[thm-limit-set-conjugacies-preserve-geometric-finiteness-in-hyperbolic-three-space]]

[F5] The model, closed-ball compactification and Möbius distance and derivative formulas hold. [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]]

## Proof

1.1 Fix a new limit point $x$. From [F1] take nested forward discs enclosing $x$. By passing to a subsequence of edge types write them $h_nB$, with one fixed $B\in\{B_1,B_2\}$ and $h_nS$ their boundaries. The discs shrink to $x$ and omit each fixed point $y\ne x$ eventually. Put $y_n=h_n^{-1}x$. None belongs to $\Lambda_J$, since otherwise $x$ belongs to a translated factor limit set. They belong to $\Lambda_G$, by invariance. We shall construct $j_n\in J$ and either no further normalization or a parabolic translation $q_n\in G$ such that the spherical distance from $q_nj_ny_n$ to every point of $q_nS$ is at least a fixed $\delta>0$. Fixed coordinate changes in finitely many cusp frames do not affect this assertion, since their sphere maps and inverses are uniformly continuous. [A1, F1, given, construct, algebra]

1.2 We justify ideal Dirichlet representatives when $J$ is nonelementary. In the ball model centered at a chosen Dirichlet center $o$, a regular point $y\in\Omega(J)$ has a representative in the ideal boundary of $D_J(o)$. To see this, the spherical conformal scale of $j$ at $y$ tends to zero as $j$ escapes $J$: normalize its matrices to rank one as in [F1]'s proof. Its kernel point belongs to $\Lambda_J$ by applying the same normalization to the inverse matrices and evaluating at an interior point. Since $y$ is outside that closed limit set, the matrix denominator is bounded away from zero on a small neighborhood of $y$, while the normalized determinant tends to zero. The fractional-linear derivative formula therefore gives scale tending to zero. Thus the scale attains its positive maximum at some $j$. At $z=jy$, every $a\in J$ has scale at most one, by the derivative chain rule and maximality. The ideal Dirichlet inequality $d(w,o)\le d(w,a^{-1}o)$ on a ray $w\to z$ is exactly the boundary scale inequality $|a'(z)|_{\rm sph}\le1$: take the limit of the hyperbolic distance difference using the ball distance formula, or equivalently its Poisson factor $(1-|a^{-1}o|^2)/|z-a^{-1}o|^2$. Hence $z\in\overline D_J(o)$. This proves the needed representative assertion instead of assuming coverage of the ideal boundary from model-domain coverage alone. [F1, F5, construct, algebra]

2.1 Suppose first that $J$ is nonelementary. Choose $j_n$ as in step 1.2 and put $z_n=j_ny_n\in\overline D_J(o)$. These points still lie in $\Lambda_G\setminus\Lambda_J$. If their distances from $S$ have a positive lower bound along a subsequence, take $q_n=1$ there and obtain the target separation. Otherwise pass to a subsequence $z_n\to p\in S$. Closedness of $\Lambda_G$ and [F1] give $p\in\Lambda_J$, and [F2] makes $p$ one of finitely many parabolic vertices of the Dirichlet domain. At a rank-two $J$ cusp the two parallel-coordinate bounds on ideal points of $D_J$ prevent $z_n\to\infty$ in that cusp frame, since these are finite ideal points. Therefore $J_p$ has rank one. Normalize its generator as $z\mapsto z+\ell$, $\ell>0$. Its Dirichlet inequalities bound $\operatorname{Re}z_n$, while $z_n\to\infty$ forces $|\operatorname{Im}z_n|\to\infty$. If $G_p$ has rank one, the given compatibility bounds $\operatorname{Im}z_n$ on $\Lambda_G$, a contradiction. [F1, F2, F3, step 1.1, step 1.2, given, construct, algebra]

3.1 The remaining case is rank-one $J_p$ and rank-two $G_p$. In the same cusp coordinate, $S\setminus\{p\}$ has $|\operatorname{Im}z|\le R_S$ by the original clearance. Choose a second lattice vector $v$ of $G_p$ with $\operatorname{Im}v\ne0$. Real multiples of $\ell$ and integer multiples of $v$ reduce every $z_n$ into a fixed bounded parallelogram; explicitly first reduce the imaginary coordinate modulo $\operatorname{Im}v$, then its real coordinate modulo $\ell$. Let $q_n$ be the corresponding ambient translation. Its imaginary part tends in absolute value to infinity, with the opposite sign to $\operatorname{Im}z_n$. Thus $q_nz_n$ stays in a fixed finite compact set, whereas every finite point of $q_nS$ has imaginary part tending uniformly to infinity in absolute value; its possible point infinity is unchanged. Consequently $q_nS\to\{p\}$ uniformly in spherical diameter, with every point tending to $p$, and its distance from $q_nz_n$ has a fixed positive lower bound. This proves the required separation in this case as well. Since the preceding alternatives cover every subsequence that fails the unmodified separation, they suffice in constructing a conical subsequence. No bound on a new rank-two cusp's transverse limit set was required. [F3, step 2.1, given, construct, algebra]

4.1 For completeness handle every elementary $J$ directly. If $J$ is trivial, take $j_n=q_n=1$: compactness and $S\cap\Lambda_G=\varnothing$ separate all $y_n\in\Lambda_G$ from $S$. If $J$ is loxodromic cyclic, put its fixed points at $0,\infty$ and its generator in the form $z\mapsto az$, $|a|>1$. Integer powers put each $z_n=j_ny_n$ in $1\le|z|\le|a|$. That compact annulus avoids $\Lambda_J$; a limit of its points in $\Lambda_G$ cannot belong to $S$ by [F1]. Hence there is again uniform separation with $q_n=1$. If $J$ is rank-two parabolic, translations put $z_n$ in a fixed finite closed parallelogram, away from its only limit point infinity, giving the same argument. If $J$ is rank-one parabolic, real translations put $\operatorname{Re}z_n$ in a bounded interval. A bounded-imaginary subsequence lies in a finite compact set and is separated from $S$. If imaginary parts are unbounded, the ambient rank-one compatibility rules this out when $G_p$ has rank one, while rank two is handled exactly by step 3.1. These are all elementary possibilities: torsion-free discreteness excludes elliptics, a preserved limit pair admits no interchange of order two and hence gives a diagonal cyclic group, and a unique limit point gives a translation lattice. A finite limit set of size at least three makes the group finite by its faithful permutation action, hence trivial. [F1, F3, step 1.1, step 3.1, given, construct, algebra]

5.1 On the subsequence supplied by steps 2.1–4.1 set $k_n=q_nj_nh_n^{-1}\in G$. The circle $k_n(h_nS)=q_nS$ has distance at least $\delta$ from $k_nx$. Because $h_nS$ separates $x$ from every fixed $y\ne x$ for sufficiently large $n$, $q_nS$ separates $k_nx$ from $k_ny$. The spherical ball of radius $\delta$ about $k_nx$ misses $q_nS$ and lies in its one complementary component. Therefore $d_{\rm sph}(k_nx,k_ny)\ge\delta$ for every fixed $y\ne x$ and all sufficiently large $n$. This uses separation by a Jordan circle, not the stronger unsupported claim that a sphere distance increases to every transformed boundary point. The matrices $k_n$ escape compact sets: otherwise a compact subsequence and its sphere equicontinuity would send $h_nS\to\{x\}$ to circles approaching $k_nx$, contradicting the same lower distance bound. Normalize their matrices and take a rank-one subsequence. Its kernel point must be $x$: if it were another point, $k_nx$ and $k_ny$ for a fixed point avoiding both it and $x$ would have the same image limit, contrary to their separation. Thus every boundary point other than $x$ has one common image limit, whereas a further subsequence of $k_nx$ has a limit at distance at least $\delta$ from it. Criterion [F4] proves $x$ conical. Every possible elementary and nonelementary normalization case was covered, completing the assertion. [F1, F4, step 1.1, step 2.1, step 3.1, step 4.1, construct, algebra] ∎

## Actual source reading and remaining interface

The complete actual published Space I combination proof was read, including printed pp. 1127–1128; its PDF SHA256 is 9a90e6bb93ea5d579c5a2cb62fdb2341539e4542a3ae4d9f03ee63c962b0b873. The complete actual structural, standard-cusp, local-classifier and intrinsic-conical suppliers were read. The source's stronger comparison of distances to arbitrary transformed points is not needed: the valid conclusion follows from separation by the transformed Jordan circle and a uniform ball around the image of $x$.

The remaining application obligation is genuine: the rank-one ambient boundedness at seam parabolics must be established from the particular finite peripheral gluing data. It is not a consequence of a mere algebraic amalgam assertion, and is not assumed covertly as geometric finiteness. This theorem by itself neither proves the full geometric-finiteness combination theorem nor resolves original generic hyperbolization.
