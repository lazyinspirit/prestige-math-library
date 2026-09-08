---
id: def-lower-central-generators-and-weighted-coordinate-length
kind: definition
title: Lower-central generators, residue coordinates and weighted length
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Druţu–Kapovich, Geometric Group Theory (837-page edition)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf
      locator: Definitions 14.18–14.19 and Proposition 14.25, printed pp.504–505,510–511
status: published
origin: pipeline
deps: ["lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian", "def-bass-guivarch-dimension", "def-word-length-with-respect-to-a-generating-set", "lem-hall-malcev-integer-abelian-structure-and-rank"]
justified_by: ["lem-finite-lower-central-coordinate-systems-exist"]
---
## Definition

Let $G$ be finitely generated nilpotent with $\gamma_{c+1}=1$. Choose, in each finitely generated abelian factor $\gamma_i/\gamma_{i+1}$, an ordered cyclic decomposition, and lift its generators to elements $u_{ij}\in\gamma_i$. Infinite cyclic factors use exponents $a_{ij}\in\mathbb Z$; a finite cyclic factor of order $d_{ij}>1$ uses $a_{ij}\in\{0,\ldots,d_{ij}-1\}$. All factors exist by [[lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian]] and [[lem-hall-malcev-integer-abelian-structure-and-rank]]. Order products by increasing $i$, then increasing $j$. Assign $u_{ij}$ weight $i$.

For a normalized tuple $a$, its **integer weighted coordinate length** is the least integer $R\ge0$ such that $|a_{ij}|\le R^i$ on every infinite factor and $R\ge1$ whenever a residue coordinate is nonzero. The zero tuple has length zero. For real $R\ge1$ let $Q(R)$ consist of all ordered products with $|a_{ij}|\le\lfloor R^i\rfloor$ on infinite factors and every allowed finite residue. The number of infinite coordinates in layer $i$ is $r_i$ of [[def-bass-guivarch-dimension]]. Unique parametrization of group elements is justified by [[lem-finite-lower-central-coordinate-systems-exist]].

For any finite labelled alphabet whose weight-$i$ letters represent elements of $\gamma_i$, a word has **weighted word counts** $(N_1,\ldots,N_c)$ if it has $N_i$ letters of assigned weight $i$; inverse letters retain that weight. These are counts before normalization, distinct from coordinate exponents and from the minimal ordinary word length of [[def-word-length-with-respect-to-a-generating-set]]. Identity letters may be deleted. An lcs generating alphabet means its letters of weights at least $i$ generate $\gamma_i$.

Integral coordinates from a central cyclic refinement and mixed lower-central coordinates are different constructions. Even in a torsion-free group, finite cyclic lower-central factors must keep their residue coordinates. For a group with torsion, use $G/T(G)$ before invoking a torsion-free integral model; keep finite kernel representatives when lifting back.

## Source notes

[Druţu–Kapovich, Geometric Group Theory (837-page edition)](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), Definitions 14.18–14.19 and Proposition 14.25, printed pp.504–505,510–511. Revised Definitions 14.18–14.19 provide lcs alphabets and weighted word counts. The mixed tuple conventions match Proposition 14.25.
