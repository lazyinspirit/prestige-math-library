---
id: thm-smooth-concordance-implies-stable-filtered-knot-floer-equivalence
kind: theorem
title: "Smooth concordance implies stable filtered equivalence of knot Floer complexes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-smooth-knot-concordance
  - thm-knot-concordance-is-an-abelian-group
  - def-knot-connected-sum-and-prime-knot
  - def-reverse-mirror-of-oriented-knot
  - lem-knot-floer-duality-and-filtration-swap
  - def-admissible-pointed-heegaard-floer-data
  - def-grid-diagram-for-an-oriented-knot
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-knot-floer-filtration-and-tau
  - lem-tau-connected-sum-filtered-tensor-product
  - lem-knot-floer-large-surgery-and-filtered-cobordism-input
  - lem-slice-knot-floer-complex-stably-equivalent-to-unknot
  - def-countable-choice
  - def-axiom-of-choice
dependency_level: 10
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The filtered cobordism and large-surgery construction uses the actual analytic ACω branch. Full AC is retained separately as a planned dependency and is not inferred from countable choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance, Theorem 1 and §3.2"
      url: "https://arxiv.org/pdf/1512.00383"
      locator: "Theorem 1, PDF pp.1 and 13; concordant complexes become filtered-chain-homotopy equivalent after adding totally acyclic complexes"
    - title: "Jennifer Hom, The knot Floer complex and the smooth concordance group, §§2–3"
      url: "https://arxiv.org/pdf/1111.6635"
      locator: "§§2–3, connected-sum tensor product, duality, and the slice-complex criterion used in stable equivalence"
---

## Statement

Let $K,J\subset S^3$ be smooth oriented knots that cobound a smooth properly embedded annulus in $S^3\times[0,1]$. Then there are finite-rank free $\mathbb F_2[U,U^{-1}]$ bifiltered chain complexes $A$ and $B$ with zero total homology such that
$$ \mathrm{CFK}^{\infty}(K)\oplus A\simeq\mathrm{CFK}^{\infty}(J)\oplus B, $$
where $\simeq$ denotes a Maslov-graded chain homotopy equivalence whose maps and chain homotopies do not increase either filtration. The complexes $A$ and $B$ are acyclic after the filtrations are forgotten; they need not be acyclic in either associated-graded complex.

## Statement references

[[def-smooth-knot-concordance|Smooth annulus concordance and its direction conventions]]

[[lem-slice-knot-floer-complex-stably-equivalent-to-unknot|The local slice-complex stable-splitting input; its proof is escalated]]

[[thm-grid-homology-independent-of-grid-and-equals-knot-floer|The current grid/Heegaard identification statement; proof not supplied]]

[Hom, *A survey on Heegaard Floer homology and concordance*, Theorem 1 and §3.2](https://arxiv.org/pdf/1512.00383)

[Hom, *The knot Floer complex and the smooth concordance group*, §§2–3](https://arxiv.org/pdf/1111.6635)

## Facts & Assumptions

**Given:** A smooth annulus concordance from $K$ to $J$, the filtered connected-sum tensor convention, and the normalized knot Floer complex of each boundary knot.

[F1] [[thm-knot-concordance-is-an-abelian-group]]: the smooth concordance classes form an abelian group with inverse represented by reverse mirror; the smooth proof branch is present and complete. The topological branch is not used.

[A1] [[lem-slice-knot-floer-complex-stably-equivalent-to-unknot]] (present, proof escalated): its Statement is exactly the slice-complex stable-splitting input needed below; its Proof identifies the missing annulus-map, reverse-map, and composition-homotopy arguments.

[A2] [[lem-tau-connected-sum-filtered-tensor-product]] (present, proof incomplete): its Statement gives the filtered tensor product, but its Proof leaves the neck-stretching/Künneth comparison open.

[A3] [[lem-knot-floer-large-surgery-and-filtered-cobordism-input]] (present, proof incomplete): its current Statement gives a tau genus shift only and does not prove the stronger stable splitting in [A1].

[A4] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] (present, proof not supplied): the grid/Heegaard identification is asserted, but its comparison proof is absent.

[A5] [[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]] (present, proof not supplied): the analytic disk-count foundation needed by the comparison remains unproved.

## Proof

1.1 In the smooth concordance group, the annulus gives $[K]=[J]$, so $K\#(-J)$ is smoothly slice. Also $J\#(-J)$ is slice by the group inverse law. [given, F1]

1.2 Apply [A1] to the slice knots $K\#(-J)$ and $J\#(-J)$. It gives acyclic complexes $A_0,B_0$ with
$$ \mathrm{CFK}^{\infty}(K\#(-J))\simeq\Lambda\oplus A_0, \qquad \mathrm{CFK}^{\infty}(J\#(-J))\simeq\Lambda\oplus B_0. $$
This use is conditional: [A1] has no complete local annulus-map proof, the batch-94 tau cobordism statement [A3] is weaker, and the normalized knot-model comparison [A4]–[A5] is not proved. [given, A1, A3, A4, A5]

2.1 Tensor the first equivalence from step 1.2 with $\mathrm{CFK}^{\infty}(J)$ and the second with $\mathrm{CFK}^{\infty}(K)$, using [A2]. By associativity and commutativity of connected sum, the two three-factor complexes are filtered-chain-homotopy equivalent, so
$$ \mathrm{CFK}^{\infty}(J)\oplus(A_0\otimes\mathrm{CFK}^{\infty}(J))\simeq \mathrm{CFK}^{\infty}(K)\oplus(B_0\otimes\mathrm{CFK}^{\infty}(K)). $$
Tensoring a totally acyclic complex of free modules with a free knot complex preserves zero total homology. Indeed, $\Lambda=\mathbb F_2[U,U^{-1}]$ is a PID, so each cycle module of the finite free acyclic complex is free; each short exact sequence of cycles, chains, and boundaries splits, giving a chain contraction. Tensoring the contraction with the knot complex preserves zero total homology. The tensor factors remain finite-rank free and inherit the bifiltration. This is the asserted stable equivalence, conditional on [A1] and [A2]. [given, A1, A2, step 1.2, algebra]

## Unresolved proof obligations

The proof is conditional on the escalated slice-complex statement [A1] and the incomplete filtered tensor supplier [A2]. The batch-94 large-surgery item [A3] states a tau estimate only; it does not prove the stable splitting. Batch-92 grid/Heegaard identification [A4] and disk analysis [A5] also remain unproved. No stable-equivalence readiness is claimed.
