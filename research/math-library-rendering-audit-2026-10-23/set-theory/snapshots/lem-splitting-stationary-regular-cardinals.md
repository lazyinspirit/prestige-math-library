---
id: lem-splitting-stationary-regular-cardinals
kind: lemma
title: "Splitting a stationary set concentrated on regular cardinals"
status: published
origin: pipeline
deps: ["lem-stationary-set-minus-its-trace", "thm-diagonal-intersection-of-clubs", "lem-closure-points-on-regular-cardinals", "thm-clubs-and-normal-enumerations", "lem-unbounded-stationary-fibres-yield-a-partition"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lietz, Theorem 5.14 case 2 and Claim 5.18, pp.44–45, with the domain restricted to the stationary set"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
---

## Statement

In ZFC, if $\kappa$ is regular uncountable and $S$ is a stationary subset of the regular uncountable cardinals below $\kappa$, then $S$ has a partition into $\kappa$ stationary sets.

## Facts & Assumptions

[F1] [[lem-stationary-set-minus-its-trace]]: Removing its trace from a stationary set preserves stationarity.

[F2] [[thm-clubs-and-normal-enumerations]]: Clubs on regular uncountable cardinals have normal increasing enumerations of full cardinal length.

[F3] [[thm-diagonal-intersection-of-clubs]]: The diagonal intersection of kappa clubs is club.

[F4] [[lem-closure-points-on-regular-cardinals]]: Every self-map of kappa has a club of closure points.

[F5] [[lem-unbounded-stationary-fibres-yield-a-partition]]: Stationary tails of a regressive map yield kappa stationary pieces.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Let $T=S\setminus\operatorname{Tr}(S)$, stationary. For each $\alpha\in T$ use AC to choose a club $D_\alpha\subseteq\alpha$ disjoint from $S\cap\alpha$, and let $c^\alpha:\alpha\to D_\alpha$ be its normal enumeration. Such clubs exist since alpha is regular uncountable and is not in the trace. [F1, F2]

2.1 For each coordinate $\xi<\kappa$ consider the domain $T_\xi=\{\alpha\in T:\xi<\alpha\}$. Suppose no coordinate has stationary sets $\{\alpha\in T_\xi:c^\alpha(\xi)\ge b\}$ for every $b<\kappa$. Choose a failing threshold $b_\xi$ and avoiding club $C_\xi$, so $c^\alpha(\xi)<b_\xi$ whenever $\alpha\in T_\xi\cap C_\xi$. [step 1.1]

3.1 Let $D=\mathop{\triangle}_{\xi<\kappa}C_\xi$ and let $E$ be the club of closure points of $\xi\mapsto b_\xi$. Choose $\alpha\in T\cap E$ and then $\gamma\in T\cap D$ above alpha. For every $\xi<\alpha$, diagonal membership of gamma and closure at alpha give $c^\gamma(\xi)<b_\xi<\alpha$. Since alpha is a nonzero limit, continuity gives $c^\gamma(\alpha)\le\alpha$. Strict increase implies $c^\gamma(\xi)\ge\xi$ by ordinal induction, so in fact $c^\gamma(\alpha)=\alpha$. This contradicts $D_\gamma\cap S=\varnothing$, since $\alpha\in T\subseteq S$. [F2, F3, F4, step 2.1]

4.1 Consequently some $\xi$ has all stationary tail domains. Its coordinate map on $T_\xi$ is regressive and the fibre lemma partitions $T_\xi$ into kappa stationary sets. Add $S\setminus T_\xi$ to one piece; this preserves stationarity and disjointness and gives the desired partition of S. [F5, step 3.1] ∎
