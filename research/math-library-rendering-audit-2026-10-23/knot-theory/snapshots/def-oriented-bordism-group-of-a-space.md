---
id: def-oriented-bordism-group-of-a-space
kind: definition
title: Oriented bordism groups of maps to a space
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Charles Livingston and Swatee Naik, Introduction to Knot Concordance
      url: https://chuck-livingston.github.io/math/Concordance_Book.pdf
      locator: §8.4.2, pp. 169–170; complete bordism-of-a-space definition read
---

## Definition

Let $X$ be a path-connected CW space. The oriented bordism set $\Omega_n^{SO}(X)$ consists of classes of pairs $(M,f)$, where $M$ is a closed smooth oriented $n$-manifold and $f:M\to X$. Two pairs are bordant when there is a compact oriented $(n+1)$-manifold $W$ with $\partial W=M_0\sqcup(-M_1)$ and a map $F:W\to X$ restricting to $f_0$ and $f_1$ on the boundary. Disjoint union defines the operation. For a group $G$, $K(G,1)$ denotes a connected CW space with fundamental group $G$ and contractible universal cover.

## Definition references

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, §8.4.2, pp. 169–170](https://chuck-livingston.github.io/math/Concordance_Book.pdf)
