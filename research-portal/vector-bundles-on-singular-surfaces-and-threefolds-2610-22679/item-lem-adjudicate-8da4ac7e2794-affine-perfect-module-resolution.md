---
title: A perfect affine module sheaf admits a finite projective resolution
status: draft
research_item: lem-adjudicate-8da4ac7e2794-affine-perfect-module-resolution
dependency_level: 6
---

PDF p. 1: Introduction: Murthy critical-rank splitting criterion; PDF p. 17: Corollary 6.10 proof: final Murthy splitting application

## Prerequisites

- [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence)
- [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring)
- [math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme)
- [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module)
- [math:def-generated-cyclic-finitely-generated-and-free-modules](https://alphabetamath.cc/item/def-generated-cyclic-finitely-generated-and-free-modules)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:def-exact-and-short-exact-sequences-of-modules](https://alphabetamath.cc/item/def-exact-and-short-exact-sequences-of-modules)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)


## Statement
Assume the Axiom of Choice and fix compatible Grothendieck universes containing $\omega$, the commutative unital ring $A$, the affine scheme $X=\operatorname{Spec}A$ and the module data, with larger universes for the supplied derived categories. Universe existence is a separate assumption. Let $M$ be an $A$-module and let $\widetilde M$ be its associated sheaf. If $\widetilde M[0]$ is perfect, then $M$ admits a finite projective resolution: an exact sequence $0\to P_d\to\cdots\to P_0\to M\to0$ with $d\geq0$ and each $P_i$ finitely generated projective. No noetherianity or regularity of $A$ is required.

Here $[0]$ places a module or sheaf in cochain degree zero. A cochain complex has maps $d^i:C^i\to C^{i+1}$ with $d^{i+1}d^i=0$ and cohomology $H^i(C)=\ker d^i/\operatorname{im}d^{i-1}$; bounded means zero outside a finite interval. Perfectness on $X$ means locally equivalent to a bounded complex of finite locally free sheaves, where finite locally free means locally a finite direct sum of copies of the structure sheaf.

## Facts & Assumptions
**Given:** The ring, module, perfect associated sheaf, AC and universe assumptions in the Statement.

**Goal:** Produce the stated finite projective resolution.

[A1] AC and the compatible universe closure convention are inherited by the affine derived equivalence. Universe existence and inclusion of $\omega$ are explicitly assumed. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[F1] Degreewise associated sheaf is a fully faithful derived equivalence on affine schemes and identifies the perfect objects with bounded complexes of finite projective modules. Thus the given perfect sheaf has a representative $\widetilde Q$ with $Q$ such a bounded complex, and this actual functor also takes $M[0]$ to $\widetilde M[0]$. [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence), [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring), [math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme)

[F2] Finite projective means finitely generated and having the lifting property through surjective module maps. A direct summand of a finite projective module is finite projective: restrict a lift from the ambient module to prove projectivity, and project a finite generating list to prove finite generation. [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module), [math:def-generated-cyclic-finitely-generated-and-free-modules](https://alphabetamath.cc/item/def-generated-cyclic-finitely-generated-and-free-modules)

[F3] Use the cochain convention in the Statement and the derived category obtained by inverting quasi-isomorphisms. Quasi-isomorphisms induce cohomology isomorphisms; consequently a zigzag of them preserves every cohomology module. Exact module sequences have image equal to kernel at each term. [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category), [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category), [math:def-exact-and-short-exact-sequences-of-modules](https://alphabetamath.cc/item/def-exact-and-short-exact-sequences-of-modules), [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring)

## Proof
1.1 By [F1] choose a bounded finite-projective complex $Q$ whose associated sheaf complex represents $\widetilde M[0]$. Full faithfulness reflects this equivalence to $Q\simeq M[0]$ in the module derived category. By [F3], $H^0(Q)\cong M$ and $H^i(Q)=0$ for $i\ne0$. If the greatest nonzero degree $N$ is positive, vanishing of $H^N(Q)$ says $d^{N-1}:Q^{N-1}\to Q^N$ is onto. Lift the identity of $Q^N$ through this surjection by [F2], obtaining a section $s$. The kernel $K$ is a direct summand: the maps $Q^{N-1}\to K\oplus Q^N$, $u\mapsto(u-sd^{N-1}u,d^{N-1}u)$, and $(v,w)\mapsto v+s(w)$ are inverse. Hence $K$ is finite projective. The preceding differential lands in $K$ because consecutive differentials compose to zero. Replace $Q^{N-1}$ by $K$ and discard $Q^N$; the removed summand is the two-term identity complex $Q^N\to Q^N$, so cohomology is unchanged. Repeat finitely many times to obtain a bounded finite-projective complex $R$ concentrated in degrees at most zero, still with only $H^0(R)\cong M$. If there were no positive terms, take $R=Q$. The zero complex is allowed. [A1, F1, F2, F3, given, construct]

2.1 Since $R^1=0$, the quotient map $R^0\to H^0(R)\cong M$ is onto with kernel $\operatorname{im}d^{-1}$. For each negative degree, vanishing cohomology gives $\ker d^i=\operatorname{im}d^{i-1}$. At the leftmost nonzero degree $-d<0$ the preceding term is zero, so its differential is injective. Thus, putting $P_i=R^{-i}$ and adding zero terms if needed, the augmented sequence $0\to P_d\to\cdots\to P_0\to M\to0$ is exact and finite, with finite projective terms. If $R$ is concentrated in degree zero this is the length-zero resolution; if $M=0$ the all-zero resolution is permitted. AC and the universe assumptions enter through [F1]; splitting each of the finitely many surjections uses only the projective lifting property. This proves the claim without additional ring hypotheses. [A1, F2, F3, step 1.1, construct] ∎
