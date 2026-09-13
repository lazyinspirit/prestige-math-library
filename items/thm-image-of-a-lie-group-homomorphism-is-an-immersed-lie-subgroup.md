---
id: thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup
kind: theorem
title: Images are immersed Lie subgroups
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, thm-kernel-of-a-lie-group-homomorphism-is-a-closed-embedded-normal-lie-subgroup, thm-lie-group-homomorphisms-have-constant-rank, thm-constant-rank-theorem-for-manifolds, def-quotient-topology, thm-quotient-universal-property, lem-open-or-closed-surjection-is-quotient]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Theorem 21.27 and proof, printed page 556
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Proposition 4.7 and Corollary 9.5, printed pages 29 and 53–54
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. The image of a smooth Lie-group homomorphism
$F:G\to H$ has a unique immersed Lie-subgroup structure for which the
corestriction $\bar F:G\to\operatorname{im}F$ is a surjective submersion.
Its Lie algebra is $\operatorname{im}(dF_e)$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth Lie-group homomorphism
$F:G\to H$; put $K=\ker F$ and $B=G/K$ as a set of left cosets.

[A1] $K$ is a closed embedded normal Lie subgroup and
$T_eK=\ker dF_e$. [[def-countable-choice]],
[[thm-kernel-of-a-lie-group-homomorphism-is-a-closed-embedded-normal-lie-subgroup]].

[F1] $F$ has constant rank and local form $(u,v)\mapsto(u,0)$.
[[thm-lie-group-homomorphisms-have-constant-rank]],
[[thm-constant-rank-theorem-for-manifolds]].

[F2] Quotient topology and its universal property characterize continuous
maps constant on quotient fibres. [[def-quotient-topology]],
[[thm-quotient-universal-property]],
[[lem-open-or-closed-surjection-is-quotient]].

## Proof

**Proof technique:** construct the final immersed structure from constant-rank slices.

1.1 Give $B=G/K$ the quotient topology and let $q:G\to B$ be the coset map. It is open because $q^{-1}(q(O))=OK$ is a union of right translates of an open set $O$. It is Hausdorff: the equivalence relation is the closed set $R=\{(g,h):g^{-1}h\in K\}$, and if $(g,h)\notin R$, a product neighborhood $U\times V$ disjoint from $R$ gives disjoint open quotient neighborhoods $q(U)$ and $q(V)$. Images under the open map $q$ of a countable basis of $G$ form a countable basis of $B$. [A1, F2, algebra]

2.1 In a constant-rank product chart from [F1], choose the transverse slice $S$ obtained by setting the kernel coordinates to zero. The restriction $q|_S$ is bijective onto $q(U)$: points have the same $F$-value exactly when they differ by an element of $K$, and the normal form makes each local fibre meet $S$ once. It is a homeomorphism because an open subset of $S$ thickens in the kernel coordinates to an open subset of $U$ with the same $q$-image. These charts make $B$ a Hausdorff second-countable smooth manifold and make $q$ locally the projection $(u,v)\mapsto u$, hence a surjective submersion. Their changes are smooth because each has the smooth local section supplied by its slice. [F1, step 1.1, construct]

3.1 Normality of $K$ gives $B$ its quotient group law. Multiplication and inversion are smooth: near any arguments, choose the smooth local sections from step 2.1 and express the descended maps as $q(s_1(x)s_2(y))$ and $q(s(x)^{-1})$. Thus $B$ is a Lie group and $q$ is a smooth homomorphism. [A1, F2, step 2.1, algebra]

4.1 Define $j:B\to H$ by $j(gK)=F(g)$. Algebraically this is a well-defined injective homomorphism with image $\operatorname{im}F$. In the local coordinates of step 2.1 and the target constant-rank chart, $j$ is $u\mapsto(u,0)$, so it is a smooth immersion. Therefore $j(B)$ with the transported intrinsic structure is an immersed Lie subgroup, and $F=j\circ q$. [F1, step 2.1, step 3.1]

5.1 At the identity, $dF_e=dj_{eK}\circ dq_e$. The differential $dq_e$ is surjective with kernel $T_eK=\ker dF_e$ by the local projection and [A1], while $dj_{eK}$ is injective. Hence $dj_{eK}(T_{eK}B)=\operatorname{im}dF_e$, which is the tangent algebra of the immersed image. [A1, step 2.1, step 4.1, algebra]

6.1 If another manifold structure on the same image makes the corestriction from $G$ a surjective submersion, its local smooth sections show that the identity map in either direction is locally a composite of that corestriction with a local section for the other structure. Thus the identity is a diffeomorphism and the structure is unique. Rank zero, trivial image, noninjective $F$, and disconnected groups are included. Nothing in the construction identifies the intrinsic topology with the subspace topology of $H$; no embeddedness or closedness conclusion is asserted. Choice is inherited only through [A1]. [A1, step 2.1, step 4.1, step 5.1] ∎
