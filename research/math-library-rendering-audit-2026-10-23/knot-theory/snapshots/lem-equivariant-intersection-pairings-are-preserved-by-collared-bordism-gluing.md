---
id: lem-equivariant-intersection-pairings-are-preserved-by-collared-bordism-gluing
kind: lemma
title: Equivariant intersections under collared bordism gluing
status: published
origin: pipeline
deps:
  - thm-compact-collared-manifold-local-coefficient-lefschetz-duality-in-zf
  - lem-involutive-twisted-chain-duals-realize-local-coefficient-duality
  - thm-excision-and-mayer-vietoris-with-local-coefficients
  - def-cup-and-cap-products-with-local-coefficient-pairings
  - lem-canonical-twisted-fundamental-classes-over-compact-subsets
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Cha and Kim, Iterated satellite operators on the knot concordance group
      url: https://arxiv.org/pdf/2402.04629v2
      locator: Lemma4.13, first assertion of its proof
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $W,X$ be compact oriented topological four-manifolds with supplied boundary collars and decompositions $\partial W=A\sqcup D$, $\partial X=A\sqcup B$. Glue their copies of $A$ by a supplied orientation-reversing identification, obtaining $Y=W\cup_A X$ with $\partial Y=D\sqcup B$. Supply one ambient rank-one right-$R$ local system on $Y$, where $R$ is an involutive unital ring. On each connected component supply a base-fiber identification with $R$ and unitary monodromy, and use its transported standard Hermitian form. Use its restrictions and the induced orientations on $W,X$.

For the intersection pairings defined by inverse relative cap duality, passage to absolute cohomology and evaluation,
$$\lambda_Y(i_*p,i_*q)=\lambda_W(p,q)\qquad(p,q\in H_2(W;R)).$$
In particular all isotropic and dual-pair identities for homology classes in $W$ persist under their inclusion in $Y$. The result applies to topological manifolds and requires no geometric surface transversality or choice principle.

## Facts & Assumptions

**Given:** The collared gluing, compatible orientations, single ambient coefficient system and parallel form.

[F1] Relative duality identifies $\overline{H_2(W;R)}$ with $H^2(W,\partial W;\mathcal R^\vee)$, and likewise for $Y$. The dual-system identification is relative to the supplied form and is compatible with restriction. [[thm-compact-collared-manifold-local-coefficient-lefschetz-duality-in-zf]], [[lem-involutive-twisted-chain-duals-realize-local-coefficient-duality]]

[F2] Local excision holds with actual small-chain homotopy inverses. Support and relative cap commute with those maps by their face formulas, and orientation classes are characterized by their local images. These facts apply to the underlying abelian-group systems at base ring $\mathbb Z$, retaining the right or left actions commuting with transport. [[thm-excision-and-mayer-vietoris-with-local-coefficients]], [[def-cup-and-cap-products-with-local-coefficient-pairings]], [[lem-canonical-twisted-fundamental-classes-over-compact-subsets]]

## Proof

1.1 Put $T=X\cup D\subset Y$. This contains $\partial Y$. Restriction induces an isomorphism $$H^2(Y,T;\mathcal R^\vee)\xrightarrow{\sim}H^2(W,A\cup D;\mathcal R^\vee).$$ To see the actual excision condition, remove from $X$ a closed core outside a short open collar of its seam $A$. That core is closed in $Y$ and lies in $\operatorname{int}_Y T$, because it misses the seam. Excision [F2] then leaves $W$ together with that short seam collar, and the remaining relative subspace is $D$ together with the collar. Pushing the collar to $A$ is a homotopy equivalence of pairs with $(W,A\cup D)$. Coefficient transports along the collar give its local-system comparison. This proves the isomorphism; it is restriction and commutes with forgetting relative conditions. [F2, given, construct, algebra]

2.1 Let $u_p\in H^2(W,\partial W;\mathcal R^\vee)$ be the dual of $\bar p$, and let $v_p$ be its inverse image under step 1.1. Map $v_p$ into $H^2(Y,\partial Y;\mathcal R^\vee)$ since $\partial Y\subset T$. Its cap with $[Y,\partial Y]$ is $\overline{i_*p}$. Indeed the image of the orientation class in the excised pair restricts to $[W,\partial W]$, since their pointwise orientation images on the interior of $W$ agree. The support/relative cap comparison of [F2] therefore identifies the cap with $u_p$ on $W$, followed by inclusion in $Y$. On representatives one may first apply the image-preserving small-chain operator: the portion in $X$ caps to zero because $v_p$ vanishes on $T$, and the portion on the remaining collar core gives precisely the cap on $W$. Changes of the orientation representatives are a boundary plus a chain in the relative subspace; the cap boundary identity makes their caps a boundary plus zero. Thus this is the actual cap map, not an unsupported geometric push of cycles. [F1, F2, step 1.1, construct, algebra]

3.1 Relative duality [F1] now says that the class in step 2.1 is the relative dual of $\overline{i_*p}$. Its absolute cohomology image restricts to the absolute image of $u_p$ on $W$, by the last sentence of step 1.1. Naturality of evaluation gives $$\lambda_Y(i_*p,i_*q)=\langle j_Yv_p,i_*q\rangle=\langle i^*j_Yv_p,q\rangle=\langle j_Wu_p,q\rangle=\lambda_W(p,q).$$ Here each cochain system uses the restriction of the same ambient parallel Hermitian form, so no unrestricted frame change or independent coefficient identification is being inserted. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 The displayed equality immediately preserves any finite list of zero self-pairings and unit dual-pairings. Empty seam or empty outer boundary causes no change in the restriction and relative maps; a disconnected gluing is treated on its finitely many compact components with the supplied coefficient systems. Every collar core and representative comparison is chosen for one finite calculation, and the small-chain operators are fixed formulas. Thus the full stated topological and coefficient scope uses no choice axiom. [F1, F2, step 1.1, step 2.1, step 3.1, algebra] ∎
