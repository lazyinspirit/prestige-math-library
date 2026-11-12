---
id: lem-author-9f61e4df2141-tail-splitting
kind: lemma
title: Graded pieces of a direct-sum tail tower
status: published
domain: mathematics
deps:
  - def-stable-spectra-interface
  - def-decreasing-filtered-spectrum
  - lem-author-9f61e4df2141-split-spectral-cofiber
  - math:def-axiom-of-choice
dependency_roles:
  def-stable-spectra-interface: mathematical-premise
  def-decreasing-filtered-spectrum: mathematical-premise
  lem-author-9f61e4df2141-split-spectral-cofiber: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 5
formulation_deps:
  - def-stable-spectra-interface
  - def-decreasing-filtered-spectrum
  - math:def-axiom-of-choice
argument_deps:
  - def-stable-spectra-interface
  - def-decreasing-filtered-spectrum
  - lem-author-9f61e4df2141-split-spectral-cofiber
  - math:def-axiom-of-choice
---

## Statement
Assume the Axiom of Choice and the fixed compatible universe and smallness conventions of the stable spectra interface. Let $(G_j)_{j\geq0}$ be spectra and put $T^q=\bigoplus_{j\geq q}G_j$ for $q\geq0$, with $T^q=T^0$ for $q\leq0$. Give these spectra the canonical tail inclusions and augmentation to $T^0$. Then $\operatorname{gr}^qT\simeq G_q$ for $q\geq0$, the connecting map $G_q\to T^{q+1}[1]$ is zero, and $\operatorname{gr}^qT\simeq0$ for $q<0$. The identifications are natural in maps of families $(G_j)$.

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and the fixed compatible universe and smallness conventions of [[def-stable-spectra-interface]]. These retain the ZFC and nested-universe premises of its stable enhancement whenever its spectra, coherent diagrams, limits, cofibers and homotopy groups are used below. Existence of the required universes is a separate size assumption, not a consequence of Choice. The finite formal arguments introduce no additional selection principle.

**Given:** The family of spectra and its augmented tail tower. Work under [A1].

**Goal:** Compute its graded pieces and connecting maps.

[F1] [[def-decreasing-filtered-spectrum]] defines the associated graded as a cofiber.

[F2] [[lem-author-9f61e4df2141-split-spectral-cofiber]] computes the cofiber and connecting map of a summand inclusion.

[F3] [[def-stable-spectra-interface]] supplies spectra, coherent diagrams, small colimits, the zero object, cofibers and suspension. Here $\bigoplus$ means the coproduct, the colimit of the discrete family. Use the foundational and smallness conventions of that interface.

## Proof
1.1 By [F3], the small coproducts exist, and inclusions of their tail index sets induce the coherent transition maps and augmentation. For $q\geq0$, the universal property of coproducts gives a natural equivalence $T^q\simeq T^{q+1}\oplus G_q$ carrying the transition map to the first-summand inclusion. Applying [F2] gives the stated graded piece and zero connecting map. [A1, F1, F2, F3, given, construct]

2.1 For $q<0$ the transition map is the identity of $T^0$, whose cofiber is zero. The coproduct decompositions, inclusions and projections commute with maps of families, so the identifications are natural. [A1, F1, F3, given, step 1.1] ∎
