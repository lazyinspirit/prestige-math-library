---
id: thm-proper-varieties-admit-smooth-projective-hyperresolutions
kind: theorem
title: "Smooth projective proper hyperresolutions"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-chow-lemma-proper-noetherian, thm-resolution-of-singularities-in-characteristic-zero, def-fibre-product-schemes-universal-property, def-axiom-of-choice]
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Statement

Assume AC. Every proper complex algebraic variety $Y$ admits a split simplicial proper hypercover $a:Y_\bullet\to Y$ with every $Y_p$ smooth projective. Here proper hypercover means that $Y_0\to Y$ and each map $Y_p\to(\operatorname{cosk}_{p-1}Y_\bullet)_p$ is proper and surjective. Two such systems admit a third smooth projective proper hypercover mapping to both over $Y$. Every morphism between proper varieties can be lifted to a morphism between such hypercovers after refining the source. Degree-$n$ cohomology uses only the finite skeleton through degree $n+1$.

## Facts & Assumptions

**Given:** Proper reduced finite-type separated complex varieties and AC [[def-axiom-of-choice]]. Chow's lemma [[lem-chow-lemma-proper-noetherian]] produces a proper surjection from a projective scheme; resolve its finitely many reduced components with [[thm-resolution-of-singularities-in-characteristic-zero]]. Matching objects are finite limits in schemes ([[def-fibre-product-schemes-universal-property]]); the target's separatedness makes their equality conditions closed.

## Proof

1.1 For every proper finite-type scheme $T$, discard nilpotents and apply Chow to obtain a projective proper surjection $T'\to T$. Resolve each reduced irreducible component of $T'$ and take their finite disjoint union. This is smooth projective and maps properly surjectively to $T$. In particular it supplies $Y_0\to Y$. Given the split simplicial object through degree $p-1$, its degree-$p$ matching object $M_p$ is a closed subscheme of a finite product of the previous projective terms: its equations impose equality of faces over the separated target and the existing simplicial identities. Hence $M_p$ is projective. Choose a smooth projective proper surjection $N_p\to M_p$ by the just-proved construction. Define $Y_p$ as the disjoint union of $N_p$ and all degenerate copies of lower nondegenerate terms indexed by order-preserving surjections $[p]\twoheadrightarrow[q]$, $q<p$. Faces of $N_p$ are the matching projections; faces and degeneracies on the other summands are determined by factoring ordinal maps uniquely into a surjection followed by an injection. These factorizations verify the simplicial identities, and the summand $N_p$ makes the matching map surjective. This inductively constructs the required split hypercover. [given, construct, algebra]

2.1 To construct a comparison over a prescribed morphism of bases, choose the degree-zero source cover mapping to the fiber product of the base with the target's degree-zero cover. At each successive degree impose the prescribed previous faces and the proposed map to the target's degree-$p$ term. The relative matching object is the corresponding fiber product of the two finite matching diagrams. It is proper; its projection onto the source matching object is surjective because the target is a hypercover and hence all prescribed compatible boundaries lift after its proper matching cover. Apply the smooth projective cover construction of step 1.1 to this relative matching object, and add degenerate summands as before. The resulting source is a proper hypercover and maps to the target. For common refinement, use the product of the two target diagrams; their matching covers remain proper surjective after fiber products, so the same induction maps to both. [step 1.1, construct, algebra]

3.1 In the normalized cochain simple complex, terms from simplicial degree $p$ have total degree at least $p$, since ordinary derived global sections have degrees $q\ge0$. Thus degrees through $n$ and their incoming/outgoing differentials involve only simplicial degrees through $n+1$. Construction through that stage suffices for $H^n$; the infinite construction is the compatible union of its finite stages under AC. [step 1.1, step 2.1, algebra] ∎
## Source notes

Deligne III 6.2.1–6.2.8 actually read, including split degeneracies and the matching-object construction. This theorem constructs the geometric hypercover; it does not assert cohomological descent, which has its own proved supplier.
