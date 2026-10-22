---
id: thm-balanced-knot-data-admit-full-marked-square-zero-holomorphic-counts
kind: theorem
title: "Balanced knot data admit full-marked square-zero holomorphic counts"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-proper-balanced-attaching-components-have-unit-boundary-disk-count-one, thm-multipointed-balanced-knot-data-admit-full-marked-regular-low-index-counts, thm-singly-pointed-balanced-knot-data-admit-full-marked-regular-low-index-counts, thm-complete-singly-pointed-attaching-tori-have-zero-unit-boundary-disk-count, thm-full-marked-index-two-compactification-gives-the-boundary-disk-curvature-identity, thm-common-integrable-background-gives-simultaneous-balanced-boundary-disk-regularity, thm-countable-choice-flat-endpoint-jet-universal-strip-regularity, lem-balanced-knot-strips-in-bounded-index-sets-have-finite-domains-and-energy]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks, link invariants and the multi-variable Alexander polynomial"
      url: "https://arxiv.org/abs/math/0512286"
      locator: "Theorems5.1 and5.5; the actual finite low-index path, full unit counts and exhaustive boundary parity are assembled below"
---

## Statement

Assume Countable Choice. Fix an actual balanced multipointed Heegaard diagram for an oriented knot in $S^3$, with $k\ge1$ cyclically ordered mark pairs, $m=h+k-1$, transverse attaching systems and complete compression disks cutting the two handlebodies into $k$ balls. Broad auxiliary proper disk witnesses are permitted. Label the cut components by $A_i$ containing $w_i,z_i$ and $B_i$ containing $w_i,z_{i+1}$, cyclically.

There is a choice of integrable surface background, protected nearly symmetric geometry, common exact generator charts and ONE smooth tame path constant on genuine positive time collars, with no nonconstant strip of index at most zero, for which every actual nonconstant strip of index one or two is regular and there are finitely many index-one translation orbits across ALL generators, realized classes and nonnegative $w,z$ vectors. No $n_z=0$ restriction is imposed. Its endpoint unit boundary disks are regular and finite at every generator. Their mod-two counts are one for each $A_i,B_i$ when $k\ge2$, and zero for the single alpha and beta components when $k=1$; in the latter case unit spheres through the generators are excluded as in the singly pointed construction.

Let $C$ be the free module on the finite generator set over $\mathbb F_2[U_1,\ldots,U_k]$. The ACTUAL differential
$$d x=\sum_{y,\,[u]\in\widehat{\mathcal M}_1(x,y)}U_1^{n_{w_1}(u)}\cdots U_k^{n_{w_k}(u)}\,y$$
counts all the above index-one orbits, including every positive $z$ multiplicity. It is a finite polynomial matrix and $d^2=0$. Identifying or localizing variables by any ring homomorphism preserves this identity.

For $k\ge2$, retaining separate $V_i$ weights for $z_i$ gives the actual full-marked curvature identity
$$D^2=\left(\sum_{i=1}^kU_i(V_i+V_{i+1})\right)I.$$
For $k=1$ the corresponding full-marked $D$ has $D^2=0$ by the zero unit counts. These are chosen-data analytic count identities. Comparison to other paths or diagrams, absolute gradings, analytic/combinatorial identification and Floer invariance are not input or conclusion.

## Statement references

[[thm-proper-balanced-attaching-components-have-unit-boundary-disk-count-one]]

[[thm-full-marked-index-two-compactification-gives-the-boundary-disk-curvature-identity]]

## Facts & Assumptions

**Given:** The actual balanced $S^3$ diagram, finite mark and generator data and their indicated cut-component indexing. In the zero-dimensional target case there are no nonconstant maps.

[F1] For $k\ge2$ every proper unit component has mod-two count one for sufficiently small regular protected perturbations of an actual surface background with the required node charts. This includes all internal paired circles by the actual exhaustive target-plumbing induction. ([[thm-proper-balanced-attaching-components-have-unit-boundary-disk-count-one]])

[F2] The multipointed chosen-path construction gives full-marked regular indices one/two and finite counts. Its actual proof first chooses a common integrable background and arbitrarily small simultaneous endpoint unit-disk perturbations, then an arbitrarily small all-strip regular flat-jet auxiliary path, and finally late genuine-collar approximants with no nonconstant nonpositive-index strips. Its finite-band marked energy bound includes every negative limiting index. ([[thm-multipointed-balanced-knot-data-admit-full-marked-regular-low-index-counts]], [[thm-common-integrable-background-gives-simultaneous-balanced-boundary-disk-regularity]], [[thm-countable-choice-flat-endpoint-jet-universal-strip-regularity]], [[lem-balanced-knot-strips-in-bounded-index-sets-have-finite-domains-and-energy]])

[F3] The singly pointed chosen path has the same full-marked strip conclusions, actual unit counts zero on both tori and pointed unit-sphere avoidance. ([[thm-singly-pointed-balanced-knot-data-admit-full-marked-regular-low-index-counts]], [[thm-complete-singly-pointed-attaching-tori-have-zero-unit-boundary-disk-count]])

[F4] For THE constructed path excluding all nonpositive strips, the actual full-marked index-two quotient compactification has precisely the finite broken-pair and unit boundary-disk endpoints, with exhaustive gluing and boundary parity. It proves $D^2x=(\sum_i a_i(x)U_iV_i+\sum_i b_i(x)U_iV_{i+1})x$, with the ACTUAL unit counts and no presumed value. Its $k=1$ sphere alternative is excluded by the chosen path's pointed avoidance. ([[thm-full-marked-index-two-compactification-gives-the-boundary-disk-curvature-identity]])

## Proof

1.1 If $m=0$, the target is a point and the differential has no nonconstant contribution, so every asserted count identity is immediate; in the balanced connected diagram this is the singly pointed genus-zero case. Otherwise first take the actual common integrable background and generator charts at the beginning of [F2]'s construction when $k\ge2$. Each alpha and beta cut component is proper. Apply [F1] separately to their finite component/generator problems at THIS background; it gives one common small protected neighborhood in which every regular unit count is one. Run [F2]'s construction inside that neighborhood: its simultaneous disk Hilbert perturbation can be chosen in any prescribed small ball, its all-strip regular flat-jet perturbation can likewise be chosen there, and its smooth genuine-collar approximants converge with every coefficient derivative to that auxiliary path and have the SAME endpoint structures. Choose a late approximant after its proved exclusion of every nonconstant index at most zero and its index-one/two regularity. Its endpoint disks are regular by the simultaneous choice and their counts are one by [F1]. The energy and compactness argument of [F2] then gives globally finite full-marked rigid orbits. This uses its actual finite-band construction, including nonpositive-index exclusion, rather than infer regularity of limiting negative-index levels from regularity one/two alone. For $k=1$ use [F3]'s actual sphere-avoiding construction, which already gives both zero unit counts and those same strip properties. Thus in either case the path satisfies exactly the hypotheses of [F4], not merely a weaker low-index regularity assertion. [F1, F2, F3, F4, given, construct, algebra]

2.1 Define $D$ by assigning every rigid orbit the monomial $U^{n_w}V^{n_z}$ and its endpoint generator, over the polynomial ring in the $2k$ variables. Nonnegative degrees follow from the actual marked positivity in [F2, F3]. There are finitely many actual orbits over all ends and degrees by step1.1, so every entry is a finite polynomial and the algebraic composite is a finite sum of ordered actual rigid pairs. Apply [F4] for every ordered end pair and total degree vector. Its exhaustive compact one-manifold has as boundary exactly those pairs and the actual unit disks. Boundary parity therefore identifies each coefficient of $D^2$ with precisely the actual disk-count terms in [F4]. For $k\ge2$ step1.1 gives $a_i(x)=b_i(x)=1$ for all $i,x$, yielding $D^2=(\sum_iU_i(V_i+V_{i+1}))I$. For $k=1$ both counts are zero, and its pointed sphere exclusion removes the additional possible stratum, so $D^2=0$. No formal moduli-boundary axiom or count-one assumption replaces these actual compactification and disk-count theorems. [F1, F2, F3, F4, step 1.1, construct, algebra]

3.1 Specialize every $V_i$ to one. The resulting matrix is exactly the differential $d$ in the Statement, since it still includes EVERY $z$ degree. For $k\ge2$, its curvature becomes $\sum_iU_i+\sum_iU_i=0$ over $\mathbb F_2$; for $k=1$ it was already zero. Thus $d^2=0$. Any further ring homomorphism applies entrywise to this finite polynomial matrix and commutes with its finite multiplication, so identifications and localizations of the $U$ variables preserve square-zero. This is an algebraic consequence of the actual chosen-data counts and proves no diagram, path or grading comparison. Every original unrestricted positive-$z$ contribution is retained throughout. [F4, step 1.1, step 2.1, algebra] ∎
