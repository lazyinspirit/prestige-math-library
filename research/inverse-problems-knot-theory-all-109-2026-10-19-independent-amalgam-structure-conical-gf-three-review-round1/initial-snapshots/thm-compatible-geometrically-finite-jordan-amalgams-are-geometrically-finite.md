---
id: thm-compatible-geometrically-finite-jordan-amalgams-are-geometrically-finite
kind: theorem
title: Compatible geometrically finite Jordan amalgams are geometrically finite
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-bounded-seam-parabolics-make-new-amalgam-limit-points-conical
  - thm-blocked-jordan-amalgams-have-the-prescribed-conformal-boundary-gluing
  - thm-geometrically-finite-kleinian-groups-have-separated-standard-cusps-and-finite-dirichlet-limit-vertices
  - thm-conical-bounded-parabolic-kleinian-groups-have-finite-convex-neighborhood-volume
  - thm-finite-convex-neighborhood-volume-implies-conical-bounded-parabolic-limit-set
  - thm-geometrically-finite-subgroup-cusp-clear-sets-have-null-coset-translates
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Liulan Li, Ken'ichi Ohshika and Xiantao Wang, On Klein–Maskit combination theorem in space I
      url: https://ir.library.osaka-u.ac.jp/repo/ouka/all/5261/ojm46_04_1097.pdf
      locator: Actual published Theorem 4.2(10), forward proof printed pp. 1128–1130, including its Claim 10
---

## Statement

Assume AC and all the blocked Jordan amalgam hypotheses and the explicit seam-parabolic compatibility of [[thm-bounded-seam-parabolics-make-new-amalgam-limit-points-conical]]. Assume in addition that each factor $G_i$ is elementary or nonelementary geometrically finite. Then $G=\langle G_1,G_2\rangle$ is nonelementary geometrically finite: every positive-radius neighborhood of its convex hull has finite quotient volume.

Every parabolic point of $G$ is a translate of a parabolic point of one of the factors and is bounded parabolic. At a factor parabolic point outside all translates in that factor of the gluing circle, a rank-one factor stabilizer remains the full ambient stabilizer and has a precisely invariant ideal peak contained in the retained conformal piece. At seam parabolics rank enlargement from one to two is allowed, subject to the stated compatibility when the final rank remains one. No closed-disc disjointness, absence of new parabolic elements, finite-sided polyhedron or unproved general geometrical-finiteness combination theorem is assumed.

Compatibility remains an actual application hypothesis; this theorem does not establish it for a given peripheral gluing.

## Facts & Assumptions

**Given:** AC, the full blocked amalgam data, elementary or geometrically finite factors, and the explicit seam-parabolic compatibility.

[A1] Full choice is [[def-axiom-of-choice]].

[F1] Every new limit point outside the translated factor limit sets is conical under exactly the given compatibility. [[thm-bounded-seam-parabolics-make-new-amalgam-limit-points-conical]]

[F2] The group is a discrete torsion-free faithful amalgam. Its retained regions $R_i$ are contained in $\Omega(G)$ and are precisely invariant under their factor groups, in the pointwise sense that translates by elements outside that factor are disjoint. Local outgoing closed discs have disjoint interiors, shrink over distinct factor cosets of $J$, and can accumulate only in the factor limit set. [[thm-blocked-jordan-amalgams-have-the-prescribed-conformal-boundary-gluing]]

[F3] A nonelementary geometrically finite factor has all limit points conical or bounded parabolic and has precisely invariant standard ideal peaks at rank-one cusps. Conversely a nonelementary discrete torsion-free group all of whose limit points are conical or bounded parabolic has finite quotient volume for every positive-radius convex neighborhood. [[thm-finite-convex-neighborhood-volume-implies-conical-bounded-parabolic-limit-set]], [[thm-geometrically-finite-kleinian-groups-have-separated-standard-cusps-and-finite-dirichlet-limit-vertices]], [[thm-conical-bounded-parabolic-kleinian-groups-have-finite-convex-neighborhood-volume]]

[F4] Arbitrary discrete torsion-free elementary groups are cyclic loxodromic or parabolic translation lattices (including the trivial group), and full parabolic stabilizers are translation lattices of rank at most two. [[lem-local-thin-components-of-torsion-free-kleinian-quotients]]

[F5] The null-coset proof supplies the direct Shimizu height bound at every ambient parabolic point: with a translation $\ell$ and base height $Y_0$, all orbit heights are at most $\max(Y_0,\ell^2/Y_0)$. It also supplies rank-one matrix convergence with exceptional and attracting points in the actual group limit set. [[thm-geometrically-finite-subgroup-cusp-clear-sets-have-null-coset-translates]]

## Proof

1.1 Choose $a\in G_1\setminus J$ and $b\in G_2\setminus J$. Their commutator is an alternating reduced word of length four, hence is nonidentity by [F2]. Thus $G$ is nonabelian and therefore nonelementary by [F4]. A parabolic fixed point of any such $G$ cannot be conical. Normalize it to infinity. By [F5] its model orbit has height bounded above by a fixed $H$. A ray towards infinity has height tending to infinity, and the distance from its point of height $Y$ to every orbit point is at least $\log(Y/H)$, from the upper half-space metric. This diverges, excluding conicality. Conicality for a subgroup passes to the ambient group simply by using the same orbit sequence and ray. Every nonparabolic factor limit point is conical, either by [F3] or directly on the axis for an elementary loxodromic group. [F2, F3, F4, F5, given, construct, algebra]

2.1 Let $p$ be a factor parabolic point. If it belongs to a factor translate $hS$, the block equality gives $h^{-1}p\in\Lambda_J$. That point cannot be conical for $J$, because it is parabolic in $G$ by step 1.1; for nonelementary geometrically finite $J$ it is therefore parabolic in $J$, and the elementary cases give the same conclusion. Its ambient stabilizer is a translation lattice. If its rank is one, the explicit compatibility bounds the transverse coordinate of $\Lambda_G$; its quotient by the real translation is then a closed subset of a compact cylinder and is compact. If its rank is two, $(\Lambda_G\setminus\{p\})/G_p$ is a closed subset of the compact plane lattice quotient and is again compact. Thus every seam parabolic is bounded, with rank enlargement allowed. [F3, F4, step 1.1, given, construct, algebra]

3.1 Suppose now $p\in\Lambda_{G_i}$ is parabolic but lies on no $G_i$ translate of $S$. If its factor stabilizer has rank two, its ambient stabilizer also has rank two and boundedness follows as in step 2.1. Consider rank one, normalizing $p=\infty$ and $H=(G_i)_p$ as real translations of period $\ell$. There is a precisely invariant factor peak $P=\{|\operatorname{Im}z|>R\}\subset\Omega(G_i)$, by [F3]; for an elementary rank-one parabolic factor it is immediate from its translation action and its unique limit point. The compact disc $B_i$ excludes $p$, since $B_i\cap\Lambda_{G_i}=\Lambda_J\subset S$ and $p\notin S$. It therefore has bounded finite coordinates in this normalization. The $H$ translates of $B_i$ have a uniform transverse bound. We claim that all $G_i$ translates have one uniform transverse bound as well. [F2, F3, F4, step 2.1, given, construct, algebra]

4.1 Otherwise choose $g_n\in G_i$ with some point of $g_nB_i$ having imaginary part unbounded in absolute value. They cannot eventually belong to $H$. Fix $y_0\in P$. For $g_n\notin H$, precise invariance of $P$ implies $g_ny_0\notin P$, so these imaginary coordinates are bounded by $R$. Left-multiply by $t_n\in H$ to put their real coordinates in $[0,\ell]$. Then $t_ng_ny_0$ remains in a fixed finite compact rectangle, while the discs $t_ng_nB_i$ still have unbounded transverse extent. Their right cosets modulo $J$ cannot belong to a finite set, because each fixed translate of $B_i$ excludes infinity: $p$ lies on no factor translate of $S$ and no factor translate of $\Lambda_J$, so it cannot belong to any factor translate of $B_i$ by the block equality. Each such fixed disc is compact in the finite plane and has bounded transverse coordinate. Pass to distinct cosets. The shrinking-disc assertion in [F2], together with a point in each disc escaping to infinity, forces every point of each disc to approach infinity spherically. In particular the images of three fixed distinct points in $B_i$ approach infinity. Matrix convergence in [F5] then has attracting point infinity and exceptional point in $\Lambda_{G_i}$. Since $y_0\in\Omega(G_i)$, it is not exceptional, so $t_ng_ny_0\to\infty$, contradicting its fixed finite rectangle. This proves the claim. [F2, F5, step 3.1, construct, algebra]

5.1 Enlarge $R$ to $R'$ exceeding that uniform bound and its original value. The smaller peak $P'=\{|\operatorname{Im}z|>R'\}$ is contained in $\Omega(G_i)$ and avoids every outgoing closed disc, hence lies in the retained region $R_i$. By [F2], $gP'\cap P'=\varnothing$ for $g\notin G_i$; within $G_i$ its precise invariance under $H$ follows from $P'\subset P$ and the translation invariance of both. Any ambient element fixing infinity is a translation by [F4], and its image of the two-tail region $P'$ necessarily intersects $P'$ (already sufficiently large positive imaginary parts lie in both). Thus no such element lies outside $G_i$, and the full ambient stabilizer is exactly $H$. Also $P'\subset\Omega(G)$ by [F2], so $\Lambda_G\setminus\{p\}$ has bounded transverse coordinate. Its quotient by $H$ is closed in a compact cylinder, proving $p$ bounded parabolic and the asserted precisely invariant peak and stabilizer conclusions. [F2, F4, step 3.1, step 4.1, construct, algebra]

6.1 Every ambient parabolic point belongs to a translated factor limit set: otherwise [F1] makes it conical, contradicted by step 1.1. Translate it into a factor limit set. If it were not parabolic for that factor, its conicality from step 1.1 would again contradict ambient parabolicity. Hence it is a factor parabolic point and steps 2.1–5.1 show it bounded. Finally every ambient limit point in a translated factor limit set is either a conical factor point or a now-bounded factor parabolic point. Every remaining limit point is conical by [F1]. Thus every point of $\Lambda_G$ is conical or bounded parabolic. The actual forward criterion [F3] proves finite volume of every positive-radius convex neighborhood of $C(\Lambda_G)/G$, completing all assertions. [F1, F2, F3, step 1.1, step 2.1, step 5.1, algebra] ∎

## Actual source reading and application boundary

The actual published Space I forward combination proof, including Claim 10, was read in full. Its PDF SHA256 is 9a90e6bb93ea5d579c5a2cb62fdb2341539e4542a3ae4d9f03ee63c962b0b873. Every declared actual local supplier proof was read. The transverse-bound argument makes the full two-tail peak, factor saturation and fixed regular test point explicit. Elementary factors and elementary edge groups are retained.

This proves the forward geometric-finiteness implication under a precise additional seam-parabolic condition, including rank-one to rank-two enlargement. The finite peripheral gluing argument establishing that condition, the HNN counterpart, and the full original generic hyperbolization proof remain separate obligations. No original approved Statement is replaced by this prerequisite's hypotheses.
