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

The following two related claims both fail, but they are not equivalent instances
of one claim:

1. in the cofinite space on an infinite set $A$, every infinite subset with
   infinite complement is closed; and
2. the coordinate set $A$ is closed in the cofinite topology on
   $A\cup\{\infty\}$ when $A$ is infinite
   ([[def-standard-topologies]], [[def-topological-space]]).

## Counterexample

Take $A=\mathbb{N}$ with the cofinite topology
([[def-natural-numbers]], [[def-countable]]) and let $E\subseteq\mathbb{N}$ be
the set of even naturals. For the second claim, give
$Y=\mathbb{N}\cup\{\infty\}$ its cofinite topology.

## Facts & Assumptions

**Given:** The cofinite spaces on $A=\mathbb{N}$ and $Y=\mathbb{N}\cup\{\infty\}$, and the set $E$ of even naturals.

[F1] In the cofinite topology on a set $S$, the open sets are $\varnothing$ and the sets with finite complement, and the closed sets are $S$ and the finite subsets; hence every finite set, in particular every singleton, is closed ([[def-standard-topologies]], [[thm-t1-iff-singletons-are-closed]], [[def-t0-and-t1-spaces]]).

[F2] The repaired coordinate of [[lem-isolated-point-kelley-repair]] is a different space: there $A$ is closed because the added point is isolated, which is why the cofinite presentation on $A \cup \{\infty\}$ is not the coordinate used in the product argument.

## Verification

1.1 $E$ is infinite: the map $k \mapsto 2k$ is injective from $\mathbb{N}$ onto $E$, so $E$ is countably infinite. [given, F1]

1.2 $\mathbb{N} \setminus E$, the set of odd naturals, is infinite: $k \mapsto 2k+1$ is injective from $\mathbb{N}$ into it, so it is not finite. [given]

1.3 In the cofinite space $Y$, the coordinate set $A=\mathbb{N}$ is not closed. Indeed, its complement is the singleton $\{\infty\}$; this set is nonempty but is not open because its complement $A$ is infinite. [given, F1]

2.1 $E$ is not closed: if $E$ were closed then its complement $\mathbb{N} \setminus E$ would be open. It is nonempty because $1$ is odd, and it is not cofinite because its complement $E$ is infinite by step 1.1. Thus $\mathbb{N} \setminus E$ is neither empty nor cofinite, contrary to [F1]. [step 1.1, step 1.2, F1]

3.1 Step 2.1 refutes the first claim using an infinite subset whose complement is infinite, whereas step 1.3 separately refutes the coordinate claim using a subset whose complement is finite. The isolated-point repair of [F2] meets the latter closedness obligation by making $\{\infty\}$ open. [step 2.1, step 1.3, F2] ∎
