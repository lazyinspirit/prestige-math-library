---
id: lem-author-13e6fe931c45-weight-one-external
kind: lemma
title: Elmanto–Morrow weight-one comparison input
status: draft
domain: mathematics
external_input: true
deps:
  - lem-author-b747b28c359f-elmanto-morrow-complexes
dependency_roles:
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/html/2309.08463v1
      locator: Theorem 1.1(6); Corollary 7.11 and its proof; comparison map (5.1)
      statement: For every qcqs scheme X over a prime field F, the natural comparison
        RΓ_Nis(X,G_m)[-1] → Z(1)_mot(X) has cofiber supported in cohomological
        degrees greater than 3.
      hypotheses: F is Q or F_p for a prime p; X is quasi-compact and quasi-separated
        over F; the motivic complex and comparison map are those constructed by
        Elmanto and Morrow.
      reading_limits: The introduction, Theorem 1.1(6), and the statement and short
        proof of Corollary 7.11 were read. The underlying construction of map
        (5.1), Corollary 7.10, and their substantial proofs were not
        reconstructed or independently checked.
proof_strategy: direct
dependency_level: 8
---

## Statement
Let $F$ be $\mathbb Q$ or $\mathbb F_p$ for a prime $p$, and let $X$ be a quasi-compact quasi-separated $F$-scheme. There is a natural comparison map
$$R\Gamma_{\rm Nis}(X,\mathbb G_m)[-1]\longrightarrow\mathbb Z(1)_{\rm mot}(X)$$
whose cofiber has zero cohomology in every degree at most three. The target is the Elmanto–Morrow complex of [[lem-author-b747b28c359f-elmanto-morrow-complexes]], and $\mathbb G_m$ is the small-Nisnevich sheaf of units.

## External input
The existence of this particular natural map and the cofiber bound are imported from Elmanto–Morrow, Corollary 7.11, with its map from (5.1). Their proof is not reconstructed here.

## Facts & Assumptions

**Given:** A prime field $F$ and a qcqs $F$-scheme $X$.

**Goal:** State and apply the imported comparison under its exact hypotheses.

[F1] The cited corollary supplies the comparison map and cofiber bound for every qcqs $F$-scheme.

## Proof

1.1 The given $F$ and $X$ satisfy the hypotheses in [F1]. [F1, given]

2.1 Applying that external input gives the displayed map, naturality, and the stated cofiber bound. This step invokes the published result and does not constitute a local proof of it. [F1, given, step 1.1] ∎
