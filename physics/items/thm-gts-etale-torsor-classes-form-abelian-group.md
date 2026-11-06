---
id: thm-gts-etale-torsor-classes-form-abelian-group
kind: theorem
title: "Étale torsor classes form an abelian group"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC is inherited from the site and its declared sheaf and torsor constructions."
deps:
  - def-gts-etale-torsors-and-contracted-product
  - def-gts-presheaf-and-sheaf-on-a-site
  - lem-gts-etale-coverings-form-a-grothendieck-site
  - thm-gts-presheaf-sheafification-exists
  - def-axiom-of-choice
dependency_roles:
  def-gts-etale-torsors-and-contracted-product: mathematical-premise
  def-gts-presheaf-and-sheaf-on-a-site: mathematical-premise
  lem-gts-etale-coverings-form-a-grothendieck-site: mathematical-premise
  thm-gts-presheaf-sheafification-exists: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I"
      url: "https://www.jmilne.org/math/CourseNotes/LEC.pdf"
      locator: "§11, printed pp. 76–77; torsors, cocycles, and the abelian group law when the structure group is commutative."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the full Axiom of Choice. Let $J$ be a commutative group scheme over a scheme $B$, and let $\operatorname{Sha}_{\mathrm{et}}(J/B)$ and $P\times^JQ$ have the meanings in [[def-gts-etale-torsors-and-contracted-product]]. Contracted product is a well-defined operation on isomorphism classes of étale right $J$-torsors, and it makes $\operatorname{Sha}_{\mathrm{et}}(J/B)$ an abelian group. The identity is the class of $J$; the inverse of $P$ is the torsor with the same underlying sheaf and action $p\star g=p\cdot g^{-1}$.

## Statement references

[[def-gts-etale-torsors-and-contracted-product]]

## Facts & Assumptions

**Given:** Full AC, a scheme $B$, a commutative group scheme $J/B$, and étale right $J$-torsors.

[A1] Full AC is the choice-function principle of [[def-axiom-of-choice]].

[F1] A torsor is a sheaf with a right $J$-action that becomes equivariantly isomorphic to $J$ on a declared cover; contracted product is the associated sheaf of the anti-diagonal orbit presheaf ([[def-gts-etale-torsors-and-contracted-product]]).

[F2] The declared covers are stable under pullback and composition. Every presheaf $F$ has an associated sheaf $aF$ universal for maps from $F$ to sheaves ([[lem-gts-etale-coverings-form-a-grothendieck-site]], [[thm-gts-presheaf-sheafification-exists]]). Compatibility with restriction to slices is verified in step 1.2, using the supplier's concrete matching-family construction.

[F3] Since $J$ is commutative, its sectionwise group operation is associative, has identity, and has an inverse on every object, compatibly with restriction ([[def-gts-etale-torsors-and-contracted-product]]).

## Proof

**Proof technique:** check the operation after a common étale trivializing cover.

1.1 A morphism of torsors $P\to P'$ and $Q\to Q'$ induces a map of their product presheaves commuting with the anti-diagonal $J$-action. The universal property in [F2] therefore induces a map $P\times^JQ\to P'\times^JQ'$, so the product depends only on the isomorphism classes. [F1, F2, given]

1.2 Write $F^+(V)$ for matching families in $F$ on covers of $V$, modulo agreement on a common covering refinement, as constructed in the proof of the sheafification supplier in [F2]. For any object $V\to U$ of the slice over $U$, every declared cover of $V$ in the original site has a unique lift to this slice by composition with $V\to U$. Conversely every slice cover is such a cover of $V$; its overlaps, refinement maps, and $F$-values are the same. Thus $(F|_U)^+(V\to U)=F^+(V)$, compatibly with restriction, and applying this twice gives $(aF)|_U\cong a(F|_U)$. A sheaf is fixed by this construction because each matching family has a unique amalgamation. Now choose covers trivializing $P,Q$ and form a common refinement by [F2]. On each member the orbit presheaf $H=(P\times Q)/J$ becomes $(J\times J)/J$. In additive notation, $(a,b)\sim(a+g,b-g)$, and sum induces a bijection of this quotient with $J$: two pairs with equal sum differ by $g=a'-a$. Hence $(aH)|_U\cong J|_U$. The formula $[p,q]\cdot h=[p\cdot h,q]$ respects the orbit relation by commutativity. It extends to $aH$ by acting on local representatives: every double-plus section locally comes from $H$ after composing the two representing covers, and equivalent representatives agree after refinement. Restricting $h$ to those covers gives compatible sections, which glue uniquely in $aH$. The action laws hold on representatives and therefore globally by sheaf uniqueness. In the local sum coordinate the action is translation by $h$, so $P\times^JQ=aH$ is a right $J$-torsor. [A1, F1, F2, F3, given, construct]

2.1 On a common cover trivializing $P,Q,R$, the two iterated contracted products have sum coordinates $(a+b)+c$ and $a+(b+c)$. The identity between these coordinates is an equivariant isomorphism. Replacing the three chosen origins translates their coordinates by sections $t_P,t_Q,t_R$; both total coordinates change by $t_P+t_Q+t_R$. Thus the local associators agree on overlaps. For a section over any object, pull back the trivializing cover and glue its local images by the target sheaf condition; overlap agreement gives existence and uniqueness, hence a global sheaf map. Gluing the local inverses proves it is an isomorphism. The same argument shows that local equivariant isomorphisms agreeing on overlaps glue in the subsequent steps. On four factors every composition of associators is the identity on the total sum coordinate, proving coherence. [F1, F2, F3, step 1.2, construct]

3.1 Swapping the two factors respects the orbit relation, since an anti-diagonal translation by $g$ becomes one by $-g$. It induces a presheaf map and hence a sheaf map by [F2]; swapping twice is the identity. In the sum coordinates of step 1.2 this map is the identity on $J$, hence is equivariant and gives commutativity. The action maps $(p,h)\mapsto p\cdot h$ and $(h,p)\mapsto p\cdot h$ are invariant under the respective anti-diagonal actions and induce maps $P\times^J J\to P$ and $J\times^J P\to P$. Locally these maps are addition in $J$, hence isomorphisms; their inverses glue by step 2.1. Therefore the class of $J$ is a two-sided identity. [F1, F2, F3, step 1.2, step 2.1]

3.2 Give the same sheaf $P$ the inverse action $p\star g=p\cdot g^{-1}$ and call it $P^{-1}$. If $p=e\cdot a$ in a trivialization of $P$, then the coordinate $-a$ identifies $P^{-1}$ equivariantly with $J$, so it is a torsor. In $P\times^J P^{-1}$ the anti-diagonal action on the two underlying $P$ coordinates is simultaneous translation $(a,b)\mapsto(a+g,b+g)$. Therefore $a-b$ is invariant and gives a local equivariant isomorphism to $J$; the residual action translates the first coordinate. Changing the common origin of $P$ translates both $a,b$ equally, so their difference is unchanged. These local maps and their inverses glue by step 2.1. Thus $[P^{-1}]$ is the inverse class. [F1, F2, F3, step 1.2, step 2.1]

4.1 For size, use the ambient universe convention of the site: its objects and declared covers form sets. A choice of local origins $e_i$ for a torsor determines sections $t_{ij}\in J(U_i\times_B U_j)$ by $e_j=e_i\cdot t_{ij}$, in additive notation. On triple overlaps $t_{ij}+t_{jk}=t_{ik}$. The cover and these transition sections range over a set of data. They determine the torsor up to isomorphism: over any $T$, its sections are exactly tuples $a_i\in J(T\times_B U_i)$ satisfying $a_i=t_{ij}+a_j$ on overlaps, by the sheaf condition applied to the local sections $e_i\cdot a_i$. This formula constructs a representative from the data, so the isomorphism classes form a set. Steps 1.1–3.2 give a well-defined operation and the associative, commutative, identity, and inverse laws on this set. Thus $\operatorname{Sha}_{\mathrm{et}}(J/B)$ is an abelian group, without an identification with derived cohomology. [A1, F1, F2, F3, step 1.1, step 1.2, step 2.1, step 3.1, step 3.2] ∎
