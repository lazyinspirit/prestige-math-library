---
id: lem-coset-equinumerous-with-subgroup
kind: lemma
title: "Every left or right coset of $H$ is equinumerous with $H$"
status: published
origin: session
deps: [def-coset, lem-group-cancellation, def-injection-surjection-bijection, def-equinumerous]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Cosets and Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
pipeline_run: null
---

## Statement

If $H\le G$ and $g\in G$, then the maps

$$H\longrightarrow gH,\quad h\longmapsto gh,$$

and

$$H\longrightarrow Hg,\quad h\longmapsto hg,$$

are bijections. Thus every left and right coset of $H$ is equinumerous with
$H$.

## Facts & Assumptions

**Given:** A group $G$, a subgroup $H\le G$, and $g\in G$.

[F1] The cosets are $gH=\{gh:h\in H\}$ and $Hg=\{hg:h\in H\}$ ([[def-coset]]).

[F2] A map is bijective when it is injective and surjective; two sets are equinumerous when a bijection between them exists ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L1] Left and right cancellation hold in a group ([[lem-group-cancellation]]).

## Proof

**Proof technique:** direct.

1.1 The map $\lambda_g:H\to gH$, $h\mapsto gh$, is surjective by the definition of $gH$ and injective because $gh_1=gh_2$ implies $h_1=h_2$ by left cancellation. [F1, L1]

1.2 The map $\rho_g:H\to Hg$, $h\mapsto hg$, is surjective by the definition of $Hg$ and injective by right cancellation. [F1, L1]

2.1 Both maps are bijections, so $H$, $gH$ and $Hg$ are pairwise equinumerous. [step 1.1, step 1.2, F2] ∎
