---
id: thm-laurent-lafforgue-ramanujan-petersson-for-function-field-gl-r
kind: theorem
title: "Ramanujan–Petersson for cuspidal GL_r over a function field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
  - thm-laurent-lafforgue-global-langlands-for-gl-r-over-function-fields
  - thm-deligne-weight-bound-for-compactly-supported-cohomology
  - def-tempered-unitary-representation
  - def-axiom-of-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-supplied
axiom_use: >-
  AC and Countable Choice are inherited through the global correspondence and
  cohomological suppliers. No weaker axiom branch is asserted.
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Chapter VI, Theorem VI.10(i), printed pp. 158–159."
    - title: "Gérard Laumon, La correspondance de Langlands sur les corps de fonctions"
      url: "https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf"
      locator: "§1.3, Ramanujan–Petersson consequence of the main correspondence."
---

## Statement

Assume AC and Countable Choice, and fix the coefficient-field isomorphism $\iota$ used in the global correspondence. Let $F=\mathbb F_q(X)$ be the function field of a smooth projective geometrically connected curve over $\mathbb F_q$. For every $r\ge1$ and every irreducible cuspidal automorphic representation $\pi$ of $\mathrm{GL}_r(\mathbb A_F)$ with finite-order central character, every local component $\pi_v$ is tempered. In particular, at every unramified place $v$, each normalized Satake eigenvalue satisfies $|z_i(\pi_v)|=1$ in $\mathbb C$.

## Statement references

[Laurent Lafforgue, Theorem VI.10(i)](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Gérard Laumon, §1.3](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)

## Proof obligations

No complete local proof is supplied. The unramified clause requires the purity/weight argument for the attached Galois sheaf; the all-place temperedness clause also uses the local-factor comparison and the global trace/cohomology construction. The current Deligne weight item is a draft with `proof: not-supplied`, and the global correspondence item above remains escalated.
