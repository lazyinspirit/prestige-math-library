---
id: thm-countably-enumerated-group-bar-cohomology-primitive-duality
kind: theorem
title: Countable group bar cohomology and rational primitive homology
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: constructive
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Armand Borel, Stable real cohomology of arithmetic groups
      url: https://numdam.org/item/10.24033/asens.1269.pdf
      locator: Section 11.1, printed page 266, finite-dimensional stable group-cohomology context; the local countable-chain proof is supplied below.
---

## Statement

Let $G$ be a discrete group with a supplied enumeration $\mathbb N\twoheadrightarrow G$. Compute rational group homology from the normalized inhomogeneous bar chains $C_*(G;\mathbb Q)$ and real group cohomology from the dual real bar cochains, with trivial coefficients. Suppose $H^j(G;\mathbb R)$ is finite-dimensional over $\mathbb R$ for every $j\ge0$. Then every $H_j(G;\mathbb Q)$ is finite-dimensional and, for each $n\ge1$,
$$\dim_{\mathbb Q} P H_n(G;\mathbb Q)=\dim_{\mathbb R}\frac{H^n(G;\mathbb R)}{\sum_{i+j=n\atop i,j>0}H^i(G;\mathbb R)H^j(G;\mathbb R)}.$$
Here $P$ is the primitive subspace for the bar diagonal and the denominator is the span of cup products of positive-degree classes. The proof uses the one supplied enumeration and no axiom of choice.

## Facts & Assumptions

**Given:** The enumerated group and finite-dimensional real bar-cohomology hypothesis in the Statement.

## Proof

**Proof technique:** Canonical greedy bases of countable rational bar chains and finite-dimensional diagonal duality.

1.1 The normalized degree-j rational bar chain group C_j is free on finite j-tuples of nonidentity elements of G. The supplied enumeration, the usual explicit pairing of natural numbers, and an enumeration of Q give a single enumeration of every finite rational bar chain and hence of the total set of chain-degree pairs. Duplicate entries are allowed. The bar differential is a finite alternating sum of tuple deletions and adjacent products, so its value on each enumerated chain is explicit. A chain is a cycle exactly when its finite rational coordinate vector has zero differential. [given, construct, algebra]

2.1 For each j enumerate all boundaries in C_j as d(v) with v running through the degree-(j+1) chain enumeration. Build a basis for B_j by keeping a boundary exactly when it is outside the span of the finitely many boundaries previously kept; finite rational linear equations determine that test. Enumerate the cycles in C_j and, in order, retain a cycle exactly when it is outside the span of the entire already defined B_j together with the finitely many earlier retained cycles. The latter membership is a definite predicate; the rule defines the set of retained indices by recursion and makes no existential selection. The retained cycle classes form a basis H_j for Z_j/B_j: finite induction gives independence, and every enumerated cycle is either retained or in the required span. For each retained boundary basis vector in B_(j−1), select its least-index preimage in the fixed C_j enumeration. These preimages form a basis S_j mapping isomorphically to B_(j−1). Thus, by explicit maps, C_j=B_j⊕H_j⊕S_j and d identifies S_j with B_(j−1), with d=0 on B_j⊕H_j. These rules apply uniformly to j and never select an arbitrary family of vector-space complements. [step 1.1, construct, algebra]

3.1 The normalized real bar cochain complex is Hom_Q(C_*(G;Q),R): the integral bar chain group is free on tuples, so any real-valued bar cochain is exactly a linear functional on the rational chain group. Transposing the explicit splitting of step 2.1 gives an explicit cochain contraction on the paired S/B summands and leaves Hom_Q(H_j,R) in degree j. Therefore H^j(G;R) is naturally Hom_Q(H_j(G;Q),R), for this supplied enumeration, without invoking arbitrary-dimensional duality or injectivity of R. If H_j had infinitely many basis elements, for every positive integer m the first m coordinate functionals would be R-linearly independent. The finite-dimensional cohomology hypothesis therefore makes H_j finite-dimensional. This is one fixed-degree argument; no basis is chosen for a family of unrelated groups. [given, step 2.1, construct, algebra]

4.1 In degree n the bar diagonal has finitely many bidegrees i+j=n and makes the finite-dimensional rational homology a graded coalgebra. The Alexander–Whitney formula is a finite sum of tuple front and back faces; its dual is exactly the bar cup product. By step 3.1 the real degree-n cohomology is the real dual of the rational degree-n homology, and the degreewise Künneth pairing is perfect because each of the finitely many rational homology spaces is finite-dimensional. Consequently the annihilator of the span of all positive-degree cup products is exactly the kernel of the reduced diagonal on H_n, namely P H_n. For finite-dimensional spaces the dual of a quotient is its annihilator, so their dimensions agree after scalar extension Q→R. Naturality of the finite bar formulas identifies the asserted pairing independently of the displayed enumeration. The cases n=1 and a zero primitive space are included. Retain the explicit countable splitting of step 3.1. [given, step 3.1, construct, algebra, discharge-construct] ∎
