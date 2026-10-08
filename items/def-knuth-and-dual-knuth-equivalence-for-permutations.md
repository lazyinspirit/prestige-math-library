---
id: def-knuth-and-dual-knuth-equivalence-for-permutations
kind: definition
title: Knuth and dual Knuth equivalence for permutations
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [def-weyl-group-and-length-for-finite-gl-n, def-finite-symmetric-group-and-permutation-notation, def-row-insertion-and-bumping-route]
dependency_level: 0
justified_by: [thm-knuth-equivalence-classes-are-insertion-tableau-fibers]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific J. Math. 34 (1970), 709–727"
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§6, equations (6.6)–(6.7) and Theorem 6, printed pp. 723–724: the elementary transformations and their characterization of equal insertion tableaux; for distinct letters, the two displayed Knuth moves are the ones used here."
    - title: "Susumu Ariki, Robinson–Schensted correspondence and left cells, arXiv:math/9910117 (18 pp.) — the direct proof of the Kazhdan–Lusztig cell classification in type A via Knuth relations and transported Kazhdan–Lusztig graph edges"
      url: "https://arxiv.org/pdf/math/9910117"
      locator: "§§2.1–2.2 (printed pp. 3–7: RSK, Kazhdan–Lusztig polynomials, and cells, including Lemma 2.7); §§3.1–3.3 (pp. 7–9: Knuth relations, Lemma 3.4, Propositions 3.5–3.7); §3.4 (pp. 10–11: Proposition 3.8 and the complete proof of Theorem A)"
    - title: "Lars Thorge Jensen, p-Kazhdan–Lusztig Theory (Bonn dissertation 2017/18), — the star operations, their action on structure coefficients, and the transfer of the type-A classification; his normalization is translated to the one of this page"
      url: "https://d-nb.info/1162953020/34"
      locator: "§2.2 (pp. 13–14: the Hecke algebra); §5.0–5.1 (pp. 44–56: Definition 5.1, Lemmas 5.2–5.3, Corollaries 5.7, 5.9, 5.11, Theorem 5.12); §5.3 (pp. 58–62: Lemma 5.29, Theorems 5.30–5.32, Corollary 5.33)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Fix $n\ge1$. Use $S_n=\operatorname{Sym}(\{1,\ldots,n\})$ and its one-line notation from [[def-weyl-group-and-length-for-finite-gl-n]]. The zero-based realization in [[def-finite-symmetric-group-and-permutation-notation]] is identified with this one by the order-preserving relabelling $i\mapsto i-1$ on inputs and values; this relabelling preserves the comparisons below.

For a permutation $x\in S_n$, write its one-line word as $x_1x_2\cdots x_n$, where $x_i=x(i)$. For $a<b<c$, an **elementary Knuth move** replaces a contiguous three-letter factor $bca$ by $bac$, or $cab$ by $acb$, with all letters before and after that factor unchanged; either replacement may be reversed. These moves keep the word a permutation of $\{1,\ldots,n\}$.

The **insertion tableau** $P(x)$ is obtained by starting with the empty tableau and successively row-inserting $x_1,\ldots,x_n$ as in [[def-row-insertion-and-bumping-route]]. Two permutations $x,y\in S_n$ are **Knuth equivalent**, written $x\sim_K y$, if a finite sequence of elementary Knuth moves transforms $x$ into $y$; a sequence of length zero is allowed. They are **dual Knuth equivalent**, written $x\sim_{dK} y$, if and only if $x^{-1}\sim_K y^{-1}$. The relation $\sim_K$ is an equivalence relation because length-zero sequences give reflexivity, each move is reversible, and move sequences concatenate. Since inversion is a bijection of $S_n$, $\sim_{dK}$ is also an equivalence relation. Each elementary Knuth move preserves $P$; more precisely, two permutations are Knuth equivalent if and only if their insertion tableaux agree, as proved in [[thm-knuth-equivalence-classes-are-insertion-tableau-fibers]].
