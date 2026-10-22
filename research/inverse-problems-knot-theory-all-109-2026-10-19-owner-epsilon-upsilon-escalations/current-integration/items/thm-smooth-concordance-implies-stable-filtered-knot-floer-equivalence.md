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

2.1 Apply the exact stable form of [A1] to the slice knots $K\#(-J)$ and $J\#(-J)$. Write $C_L=CFK^\infty(L)$. It gives acyclic complexes $A_0,B_0,A_1,B_1$ with $C_{K\#(-J)}\oplus A_0\simeq\Lambda\oplus B_0$ and $C_{J\#(-J)}\oplus A_1\simeq\Lambda\oplus B_1$. It does not supply an unstabilized direct-sum splitting of either slice complex, and none is assumed. These equivalences remain conditional on the unresolved annulus and analytic comparisons [A1], [A3]–[A5]. [given, A1, A3, A4, A5, step 1.1, algebra]

3.1 Tensor the first equivalence with $C_J$ and the second with $C_K$. Under the geometric tensor comparison [A2], their three-factor terms are filtered-equivalent to the same complex $X=C_K\otimes C_{-J}\otimes C_J$, by associativity and the graded flip, which is sign-free over $\mathbb F_2$. Put $P=A_0\otimes C_J$, $Q=B_0\otimes C_J$, $P'=A_1\otimes C_K$ and $Q'=B_1\otimes C_K$. Then $X\oplus P\simeq C_J\oplus Q$ and $X\oplus P'\simeq C_K\oplus Q'$. Each of $P,Q,P',Q'$ has zero total homology. Indeed a finite free graded acyclic Laurent complex, after translating generators to degrees zero and one, has a finite acyclic parity matrix over $\mathbb F_2$. Splitting its cycles and boundaries in these finite vector spaces gives a contraction; inserting the required $U$ or $U^{-1}$ degree shifts gives a Laurent-linear contraction. Tensoring with any free complex is still a contraction, because the cross terms cancel in characteristic two. No filtration-preserving contraction is claimed or required. [given, A1, A2, step 2.1, algebra]

4.1 Add $P'$ to the first equivalence of step 3.1 and $P$ to the second. The common middle term is $X\oplus P\oplus P'$, so composing and permuting direct summands gives $C_J\oplus(Q\oplus P')\simeq C_K\oplus(Q'\oplus P)$. All added factors are finite-rank free and totally acyclic by step 3.1, and every equivalence preserves both filtrations and Maslov grading. This proves exactly the original stable Statement conditional on [A1] and [A2], without strengthening the slice supplier or cancelling a common complex by an unjustified cancellation law. [given, A1, A2, step 3.1, algebra] ∎

## Unresolved proof obligations

The proof is conditional on the escalated slice-complex statement [A1] and the incomplete filtered tensor supplier [A2]. The batch-94 large-surgery item [A3] states a tau estimate only; it does not prove the stable splitting. Batch-92 grid/Heegaard identification [A4] and disk analysis [A5] also remain unproved. No stable-equivalence readiness is claimed.
