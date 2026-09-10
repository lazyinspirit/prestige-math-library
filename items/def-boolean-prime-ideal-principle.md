---
id: def-boolean-prime-ideal-principle
kind: definition
title: The Boolean prime ideal principle
status: draft
origin: pipeline
deps: [def-boolean-ideals-filters-and-primality]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, 2.2.11 and 2.3.3 (existence and prime-filter conventions)"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
---

## Definition

The **Boolean prime ideal principle (BPI)** asserts that every nontrivial Boolean algebra has a [[def-boolean-ideals-filters-and-primality|prime ideal]]. Properness is part of primality.

The **set ultrafilter lemma (UFL)** asserts that for every set $S$, every proper filter of subsets of $S$ extends to a maximal proper filter of subsets of $S$. Here a set filter contains $S$, excludes $\varnothing$, is upward closed within $\mathcal P(S)$ and is closed under finite intersections.

These are principles considered over ZF. Naming either principle is not assuming it or asserting a ZF proof of it. On $S=\varnothing$ there is no proper set filter, so the corresponding UFL instance is vacuous. BPI excludes the trivial algebra from its existence assertion.
