---
id: lem-boundary-and-truncation-shtuka-cohomology-is-lower-rank-negligible
kind: lemma
title: "Boundary and truncation cohomology is negligible for rank-r Langlands extraction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - thm-compactification-and-boundary-strata-of-drinfeld-shtuka-stacks
  - thm-deligne-weight-bound-for-compactly-supported-cohomology
  - thm-stabilized-hecke-correspondences-are-stable-near-fixed-points
  - def-r-negligible-and-essential-shtuka-cohomology
  - def-axiom-of-choice
  - def-countable-choice
  - thm-existence-hardernarasimhan-truncation-for-drinfeld-shtukas
provenance:
  statement: literature-derived
  proof: not-supplied
axiom_use: >-
  AC and Countable Choice are inherited from the moduli/adelic inputs. The
  lower-rank argument is not asserted in a weaker axiom branch.
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Chapter VI §2(c) and §2(e), especially Proposition VI.15, printed pp. 168–180."
    - title: "Gérard Laumon, La correspondance de Langlands sur les corps de fonctions"
      url: "https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf"
      locator: "§§2–3, separation of essential and negligible cohomology."
---

## Statement

Assume AC and Countable Choice. Let $r\ge2$, let $p$ be a sufficiently convex Harder–Narasimhan truncation polygon, and let a rank-$r$ shtuka stack and its compactification have the boundary stratification stated above. Then every irreducible constituent of the compactly supported $\ell$-adic cohomology of each boundary stratum is $r$-negligible: it is a constituent of an exterior tensor product of lisse sheaves of ranks strictly less than $r$ pulled back from the two curve factors. The same is true of the correction classes between the cohomology of the full compactification and the truncated open. Consequently those boundary and truncation classes contribute zero to the essential cohomology defined above.

## Statement references

[Laurent Lafforgue, Proposition VI.15](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Gérard Laumon, §§2–3](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)

## Proof obligations

The proof uses the lower-rank boundary factorization, the compact-support trace and weight formalism, and the stable local behavior of Hecke correspondences. The current Deligne weight supplier `thm-deligne-weight-bound-for-compactly-supported-cohomology` is a draft with `proof: not-supplied`; the compactification and stabilization proofs are also absent. The claimed negligibility of every correction class is therefore held, not accepted.
