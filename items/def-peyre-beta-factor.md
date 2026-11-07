---
id: def-peyre-beta-factor
kind: definition
title: "Peyre beta factor"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-peyre-admissibility-conditions
  - def-geometric-picard-rank
  - def-picard-group-scheme
  - def-absolute-galois-group-of-a-global-field
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §3.3"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
    - title: "Jakob Glas, Counting rational points over function fields, PhD thesis, §2.3 (2024)"
      url: "https://research-explorer.ista.ac.at/download/18132/18140/example-phd.pdf"
      locator: "Chapter 2, §2.3, printed pp. 10–11 / PDF pp. 21–22: Manin–Peyre conjecture, alpha-beta-tau factors, thin sets, and accumulating lines on cubic surfaces."
verification: {}
---

## Definition

Let $K$ be a number field, let $X/K$ satisfy the Peyre almost-Fano admissibility conditions, let $\overline K$ be an algebraic closure, and let $G_K=\operatorname{Gal}(\overline K/K)$ act continuously on the discrete lattice $M:=\operatorname{Pic}(X_{\overline K})$. Define the **Peyre beta factor** by
$$
\beta(X):=\# H^1_{\mathrm{cts}}(G_K,M),
$$
where $H^1_{\mathrm{cts}}$ is the cohomology of continuous inhomogeneous cochains with this action. At this point $\#H^1$ denotes cardinality; finiteness is the separate conclusion of the beta-finiteness theorem under the stated finite-rank lattice hypotheses.

## Definition references

[[def-peyre-admissibility-conditions]]

[[def-geometric-picard-rank]]

[[def-picard-group-scheme]]

[[def-absolute-galois-group-of-a-global-field]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]
