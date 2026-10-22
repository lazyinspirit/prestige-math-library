---
id: thm-smooth-concordance-implies-stable-filtered-knot-floer-equivalence
kind: theorem
title: "Smooth concordance implies stable filtered equivalence of knot Floer complexes"
status: published
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
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

For the knot-level assertions, assume the Axiom of Countable Choice. Let $K,J\subset S^3$ be smooth oriented knots that cobound a smooth properly embedded annulus in $S^3\times[0,1]$. Then there are finite-rank free $\mathbb F_2[U,U^{-1}]$ bifiltered chain complexes $A$ and $B$ with zero total homology such that
$$ \mathrm{CFK}^{\infty}(K)\oplus A\simeq\mathrm{CFK}^{\infty}(J)\oplus B, $$
where $\simeq$ denotes a Maslov-graded chain homotopy equivalence whose maps and chain homotopies do not increase either filtration. The complexes $A$ and $B$ are acyclic after the filtrations are forgotten; they need not be acyclic in either associated-graded complex.

## Statement references

[[def-smooth-knot-concordance|Smooth annulus concordance and its direction conventions]]

[[lem-slice-knot-floer-complex-stably-equivalent-to-unknot|The slice-complex splitting with its explicit external Hom input]]

[[thm-grid-homology-independent-of-grid-and-equals-knot-floer|The supplied normalized grid/analytic identification]]

[Hom, *A survey on Heegaard Floer homology and concordance*, Theorem 1 and §3.2](https://arxiv.org/pdf/1512.00383)

[Hom, *The knot Floer complex and the smooth concordance group*, §§2–3](https://arxiv.org/pdf/1111.6635)

## Facts & Assumptions

**Given:** A smooth annulus concordance from $K$ to $J$, the filtered connected-sum tensor convention, and the normalized knot Floer complex of each boundary knot. Countable Choice is assumed for the knot-level constructions and geometric comparisons; finite algebra on the stated supplied complexes and maps requires no further choice.

[F1] [[thm-knot-concordance-is-an-abelian-group]]: the smooth concordance classes form an abelian group with inverse represented by reverse mirror; the smooth proof branch is present and complete. The topological branch is not used.

[F5] The slice-complex stable-splitting lemma supplies exactly the finite-rank free totally acyclic stabilizations and filtered graded equivalence needed below. Its geometric slice input is explicitly external Hom, with the fixed finite/countable specialization stated there; no local movie theorem is inferred. [[lem-slice-knot-floer-complex-stably-equivalent-to-unknot]]

[F2] The supplied full connected-sum comparison is a Maslov-graded bifiltered Laurent chain homotopy equivalence, with inverse and filtered homotopies, and yields the actual tensor complex. [[lem-tau-connected-sum-filtered-tensor-product]]

[F3] The full normalized grid/analytic filtered comparison is supplied. [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]]

[F4] The actual chosen-data full-filtered disk analysis is supplied on its stated knot scope. [[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]]

## Proof

1.1 In the smooth concordance group, the annulus gives $[K]=[J]$, so $K\#(-J)$ is smoothly slice. Also $J\#(-J)$ is slice by the group inverse law. [given, F1]

2.1 Apply the exact stable form of [F5] to the slice knots $K\#(-J)$ and $J\#(-J)$. Write $C_L=CFK^\infty(L)$. It gives acyclic complexes $A_0,B_0,A_1,B_1$ with $C_{K\#(-J)}\oplus A_0\simeq\Lambda\oplus B_0$ and $C_{J\#(-J)}\oplus A_1\simeq\Lambda\oplus B_1$. It does not supply an unstabilized direct-sum splitting of either slice complex, and none is assumed. These equivalences are supplied by the exact slice stable-splitting input [F5]. The supplied model and disk comparisons [F3]–[F4] do not replace the geometric slice input. [given, F5, F3, F4, step 1.1, algebra]

3.1 Tensor the first equivalence with $C_J$ and the second with $C_K$. Under the supplied geometric tensor comparison [F2], their three-factor terms are filtered-equivalent to the same complex $X=C_K\otimes C_{-J}\otimes C_J$, by associativity and the graded flip, which is sign-free over $\mathbb F_2$. Put $P=A_0\otimes C_J$, $Q=B_0\otimes C_J$, $P'=A_1\otimes C_K$ and $Q'=B_1\otimes C_K$. Then $X\oplus P\simeq C_J\oplus Q$ and $X\oplus P'\simeq C_K\oplus Q'$. Each of $P,Q,P',Q'$ has zero total homology. Indeed a finite free graded acyclic Laurent complex, after translating generators to degrees zero and one, has a finite acyclic parity matrix over $\mathbb F_2$. Splitting its cycles and boundaries in these finite vector spaces gives a contraction; inserting the required $U$ or $U^{-1}$ degree shifts gives a Laurent-linear contraction. Tensoring with any free complex is still a contraction, because the cross terms cancel in characteristic two. No filtration-preserving contraction is claimed or required. [given, F5, F2, step 2.1, algebra]

4.1 Add $P'$ to the first equivalence of step 3.1 and $P$ to the second. The common middle term is $X\oplus P\oplus P'$, so composing and permuting direct summands gives $C_J\oplus(Q\oplus P')\simeq C_K\oplus(Q'\oplus P)$. All added factors are finite-rank free and totally acyclic by step 3.1, and every equivalence preserves both filtrations and Maslov grading. This proves exactly the original stable Statement, without strengthening the slice supplier or cancelling a common complex by an unjustified cancellation law. [given, F5, F2, step 3.1, algebra] ∎

## External-input boundary

The original Statement is proved using the explicitly external Hom slice splitting recorded in [F5], together with the preserved accepted tensor/model interfaces and local finite stabilization algebra. No whole decorated-map or movie-invariance construction is claimed. The original ACω branch uses the fixed finite/countable specialization stated in the slice supplier.
