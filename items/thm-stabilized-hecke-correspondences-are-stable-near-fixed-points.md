---
id: thm-stabilized-hecke-correspondences-are-stable-near-fixed-points
kind: theorem
title: "Stabilized Hecke correspondences are stable near shtuka fixed points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - thm-grothendieck-lefschetz-fixed-point-formula-for-unstable-shtuka-opens
  - thm-compactification-and-boundary-strata-of-drinfeld-shtuka-stacks
  - def-partial-frobenius-and-hecke-correspondences-for-shtukas
  - def-axiom-of-choice
  - def-countable-choice
  - thm-existence-hardernarasimhan-truncation-for-drinfeld-shtukas
provenance:
  statement: literature-derived
  proof: not-supplied
axiom_use: >-
  AC and Countable Choice are carried through the global Hecke and moduli
  context. No weaker axiom branch is asserted.
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Chapter V, Theorems V.14(ii) and V.19, printed pp. 133–149."
    - title: "Gérard Laumon, La correspondance de Langlands sur les corps de fonctions"
      url: "https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf"
      locator: "§§3–5, global and local stabilization of Hecke correspondences."
---

## Statement

Assume AC and Countable Choice. Let $X/\mathbb F_q$, $r\ge2$, and a finite level $N$ be as in the shtuka definitions, let $f$ be a level-$N$ Hecke function with finite support set $T_f$, and let $s,u\in\mathbb Z_{\ge0}$. For every truncation polygon $p$ sufficiently convex as a function of $X,N$, there is an open $X'\subset X\setminus T_f$, sufficiently small as a function of $N$, $\operatorname{supp}(f)$, and $t=u-s$, such that the correspondence $f\times\operatorname{Frob}_\infty^s\times\operatorname{Frob}_0^u$ on the quotient of the $p$-truncated shtuka stack by the degree-one-idele action stabilizes that open in neighborhoods of its fixed points. The corresponding open in $X'\times X'$ contains the intersection with the partial-Frobenius locus $\Lambda$ and depends only on $\operatorname{supp}(f)$ and $t$.

## Statement references

[Laurent Lafforgue, Theorems V.14 and V.19](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Gérard Laumon, §5](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)

## Proof obligations

The source's proof uses degenerators of iterated shtukas, the 1998 compactification and its iterated-lattice construction, and the fixed-point formula for the unstable open. No complete local proof of these stability arguments is supplied; the large-Frobenius and level-support hypotheses must be recovered from the full statements before this item can be ready.
