---
id: cex-kelley-cofinite-set-is-not-closed
kind: counterexample
title: "Kelley's cofinite set is not closed"
status: draft
origin: pipeline
deps: [lem-isolated-point-kelley-repair, def-standard-topologies, thm-t1-iff-singletons-are-closed, def-t0-and-t1-spaces, def-topological-space, def-natural-numbers, def-countable]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Kyriakos Keremedis and Eleftherios Tachtsis, Wallman Compactifications and Tychonoff's Compactness Theorem in ZF"
      url: "https://topology.nipissingu.ca/tp/reprints/v42/tp42021.pdf"
      locator: "Discussion before Proposition 2.13, journal p. 282"
---

## Statement refuted

The claim that in the cofinite space on an infinite set $A$ every infinite subset
with infinite complement is closed; equivalently, the claim that the coordinate
set $A$ is closed in the cofinite topology on $A \cup \{\infty\}$ when $A$ is
infinite ([[def-standard-topologies]], [[def-topological-space]]).

## Counterexample

Take $A = \mathbb{N}$ with the cofinite topology
([[def-natural-numbers]], [[def-countable]]) and let $E \subseteq \mathbb{N}$ be
the set of even naturals.

## Facts & Assumptions

**Given:** The cofinite space $A_c$ on $A = \mathbb{N}$ and the set $E$ of even naturals.

[F1] In the cofinite topology the open sets are $\varnothing$ and the sets with finite complement, and the closed sets are $A$ and the finite subsets; hence every finite set, in particular every singleton, is closed ([[def-standard-topologies]], [[thm-t1-iff-singletons-are-closed]], [[def-t0-and-t1-spaces]]).

[F2] The repaired coordinate of [[lem-isolated-point-kelley-repair]] is a different space: there $A$ is closed because the added point is isolated, which is why the cofinite presentation on $A \cup \{\infty\}$ is not the coordinate used in the product argument.

## Verification

1.1 $E$ is infinite: the map $k \mapsto 2k$ is injective from $\mathbb{N}$ onto $E$, so $E$ is countably infinite. [given, F1]

1.2 $\mathbb{N} \setminus E$, the set of odd naturals, is infinite: $k \mapsto 2k+1$ is injective from $\mathbb{N}$ into it, so it is not finite. [given]

2.1 $E$ is not closed: if $E$ were closed then its complement $\mathbb{N} \setminus E$ would be open, hence by [F1] either empty or cofinite; it is not empty because $1 \setminus 0 = 1 \in E$? — rather, $0 \in E$ so the complement is nonempty, and it is infinite by step 1.2, so it is neither empty nor cofinite, a contradiction. [step 1.2, F1]

3.1 Thus an infinite subset of an infinite cofinite space with infinite complement need not be closed, which refutes the displayed claim; this is exactly the closedness obligation that the cofinite presentation of $A \cup \{\infty\}$ fails, and which the isolated-point repair of [F2] meets by making $\{\infty\}$ open. [step 2.1, F1, F2] ∎
