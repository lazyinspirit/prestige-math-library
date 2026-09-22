---
id: lem-ordered-rational-automorphism-stabilizers-are-extremely-amenable
kind: lemma
title: "Finite stabilizers in Aut(Q,<) are extremely amenable"
status: published
origin: pipeline
deps: [thm-extreme-amenability-yields-bpi-in-finite-support-models, thm-finite-ramsey-for-uniform-subsets, def-ramsey-colouring-and-arrow-notation, def-natural-numbers]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  scraped: []
  references:
    - title: "Kechris, Pestov, and Todorcevic, Fraïssé limits, Ramsey theory, and topological dynamics of automorphism groups"
      url: "https://arxiv.org/pdf/math/0305241"
      locator: "Theorem 4.7 and the finite-linear-order example"
    - title: "Andreas Blass, Partitions and Permutation Groups"
      url: "https://janos.cs.technion.ac.il/RESEARCH/AMS-Book-files/pdfs/11_Blass.pdf"
      locator: "Definition 2.1, Theorems 5.1-5.2, pp. 2 and 12-14"
---

## Statement

$\operatorname{Aut}(\mathbb{Q},<)$, with the topology of pointwise convergence,
is extremely amenable, and so is the pointwise stabiliser of every finite subset
of $\mathbb{Q}$: every continuous action of such a group on a nonempty compact
Hausdorff space has a fixed point.

## Facts & Assumptions

**Given:** A finite subset $E \subseteq \mathbb{Q}$ and a continuous action of $\operatorname{fix}(E)$ on a nonempty compact Hausdorff space.

[F1] Finite Ramsey for colourings of $k$-element subsets: for all positive $k, c, r$ there is $N$ with $N \to (r)^k_c$ ([[thm-finite-ramsey-for-uniform-subsets]], [[def-ramsey-colouring-and-arrow-notation]], [[def-natural-numbers]]).

[F2] The KPT correspondence: for a Fraïssé structure with rigid finite
substructures and the Ramsey property, the automorphism group is extremely
amenable. This is Kechris--Pestov--Todorcevic, Theorem 4.7; its finite-linear-
order instance is the one used here. The Ramsey hypothesis for that instance,
but not the KPT fixed-point conclusion itself, is supplied by
[[thm-finite-ramsey-for-uniform-subsets]].

[L1] A finite point stabiliser of $\operatorname{Aut}(\mathbb{Q},<)$ is the direct product of the automorphism groups of the finitely many open intervals cut out by the support, each of which is order-isomorphic to $\mathbb{Q}$; a finite product of extremely amenable groups is extremely amenable, because fixed points can be taken one factor at a time: an action of $G_1 \times G_2$ on a compact space has a fixed point for $G_1$ by extreme amenability of $G_1$, the fixed-point set is compact and invariant under $G_2$, and extreme amenability of $G_2$ supplies a point fixed by both. [given]

## Proof

**Proof technique:** direct.

1.1 The age of $(\mathbb{Q},<)$ consists of the finite linear orders, each of which is rigid, and the Ramsey property required by the KPT correspondence is precisely finite Ramsey for colourings of $k$-element subsets, since a colouring of embeddings of the $a$-element order into an $N$-element order is a colouring of $a$-element subsets of $N$ and a homogeneous $b$-element subset is a monochromatic copy. [F1]

1.2 For the stabiliser of a finite $E$: the points of $E$ cut $\mathbb{Q}$ into finitely many open intervals, each order-isomorphic to $\mathbb{Q}$, and $\operatorname{fix}(E)$ is the direct product of the automorphism groups of those intervals. [given, L1]

2.1 By [F2] applied to the age of $(\mathbb{Q},<)$ described in step 1.1, $\operatorname{Aut}(\mathbb{Q},<)$ is extremely amenable. [step 1.1, F2]

3.1 By step 2.1 and [L1], applied factor by factor to the finitely many interval automorphism groups of step 1.2, $\operatorname{fix}(E)$ is extremely amenable: the fixed-point set of an action is computed one factor at a time, and each factor contributes a fixed point because it is an automorphism group of a copy of $\mathbb{Q}$ and hence extremely amenable by step 2.1. [step 2.1, step 1.2, L1]

4.1 Thus $\operatorname{Aut}(\mathbb{Q},<)$ and each of its finite point stabilisers is extremely amenable, which is the assertion of the statement; the argument used the ZF theorem of [F1] and the fixed-point criterion of [F2] only. [step 2.1, step 3.1, F1, F2] ∎

## Remarks

- **Why the finite-linear-order instance suffices here.** The permutation model of this pair uses only the rational-ordered atom set of [[def-brunner-ordered-lauchli-permutation-models]], whose automorphism group is $\operatorname{Aut}(\mathbb{Q},<)$; the finite stabiliser form of the statement is what the BPI theorem consumes.

- **The product argument is where "finite" is used.** A finite product of extremely amenable groups is extremely amenable by the one-factor-at-a-time argument; an infinite product need not be, and no such claim is made.
