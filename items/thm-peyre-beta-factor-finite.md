---
id: thm-peyre-beta-factor-finite
kind: theorem
title: "Finiteness of Peyre beta"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-peyre-admissibility-conditions
  - def-peyre-beta-factor
  - lem-continuous-h1-finite-for-finite-rank-galois-lattice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §3.3"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
    - title: "Jakob Glas, Counting rational points over function fields, PhD thesis, §2.3 (2024)"
      url: "https://research-explorer.ista.ac.at/download/18132/18140/example-phd.pdf"
      locator: "Chapter 2, §2.3, printed pp. 10–11 / PDF pp. 21–22: the beta factor is the cardinality of first Galois cohomology of the geometric Picard group."
verification: {}
---

## Statement

Let $K$ be a number field and let $X/K$ satisfy the Peyre almost-Fano admissibility conditions. Then the Peyre beta factor $\beta(X)=\#H^1_{\mathrm{cts}}(G_K,\operatorname{Pic}(X_{\overline K}))$ is a finite positive integer.

## Statement references

[[def-peyre-beta-factor]]

## Facts & Assumptions

**Given:** The Peyre admissibility hypotheses on $X/K$ and the definition of $\beta(X)$.

[F1] Under these hypotheses, $M=\operatorname{Pic}(X_{\overline K})$ is a finite-rank free abelian group with continuous discrete $G_K$-action, and $\beta(X)$ is the cardinality of $H^1_{\mathrm{cts}}(G_K,M)$. ([[def-peyre-admissibility-conditions]], [[def-peyre-beta-factor]])

[F2] For any profinite group acting continuously on a finite-rank free discrete lattice, its first continuous cohomology is finite. ([[lem-continuous-h1-finite-for-finite-rank-galois-lattice]])

## Proof

1.1 Apply [F2] to $G_K$ and $M$ from [F1]. It follows that the set whose cardinality defines $\beta(X)$ is finite. [given, F1, F2, construct]

1.2 The zero cocycle represents a cohomology class, so this finite set is nonempty and its cardinality is a positive integer. [given, F1, step 1.1, algebra] ∎
