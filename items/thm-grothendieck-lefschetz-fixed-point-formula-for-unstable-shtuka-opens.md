---
id: thm-grothendieck-lefschetz-fixed-point-formula-for-unstable-shtuka-opens
kind: theorem
title: "Fixed-point formula for Hecke correspondences on unstable shtuka opens"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - thm-compactification-and-boundary-strata-of-drinfeld-shtuka-stacks
  - thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves
  - def-axiom-of-choice
  - def-countable-choice
  - thm-existence-hardernarasimhan-truncation-for-drinfeld-shtukas
provenance:
  statement: literature-derived
  proof: not-supplied
axiom_use: >-
  AC and Countable Choice are inherited from the shtuka compactification and
  adelic Hecke context. The fixed-point argument is not asserted in a weaker
  axiom branch.
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Chapter IV, Theorem IV.12, printed pp. 110–112."
    - title: "Gérard Laumon, La correspondance de Langlands sur les corps de fonctions"
      url: "https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf"
      locator: "§§2–3, use of the fixed-point formula on non-proper shtuka opens."
---

## Statement

Assume AC and Countable Choice. Let $S$ be a scheme over a finite field, let $\varphi:S\to S$ be proper, let $\mathcal X\to S$ be a smooth algebraic stack that is not assumed proper, and let $\Gamma\subset\mathcal X\times_{S,\varphi}\mathcal X$ be a geometric correspondence whose second projection is proper. Suppose the coarse moduli space of $\mathcal X$ is an open dense subspace of a proper algebraic space over $S$ that is a scheme after finite base extension; suppose an open $\mathcal X^\circ$ is Deligne–Mumford; and suppose over an open $S'\subseteq S$ that $\Gamma$ stabilizes $\mathcal X^\circ$ in neighborhoods of its fixed points and the first projection of the restricted correspondence is étale. Then, for every sufficiently large Frobenius power fixing a closed point $x\in S'$, the stack-weighted fixed-point Lefschetz number on $\mathcal X^\circ_x$ equals the trace on $H_c^*(\mathcal X_x,\mathbb Q_\ell)$ plus the alternating sum of the corresponding traces on the boundary strata $\mathcal X_{I,x}$, with sign $(-1)^{|I|}$ for each nonempty boundary index set $I$. Here the Lefschetz number is the intersection multiplicity of the restricted correspondence with the Frobenius graph, weighted by automorphism groups of the fixed stack points.

## Statement references

[Laurent Lafforgue, Theorem IV.12](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Gérard Laumon, §3](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)

## Proof obligations

The source proves a fixed-point formula under the stated properness, compactification, Deligne–Mumford, local-stability, and étaleness hypotheses. No local proof is supplied. The construction of the boundary correspondences, the extension of cohomological maps, and the passage from stack fixed points to the alternating boundary traces remain unresolved. Its draft trace-formula dependency `thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves` currently has `proof: not-supplied`.
