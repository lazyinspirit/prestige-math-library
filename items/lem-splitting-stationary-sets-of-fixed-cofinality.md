---
id: lem-splitting-stationary-sets-of-fixed-cofinality
kind: lemma
title: "Splitting stationary sets of fixed smaller cofinality"
status: draft
origin: pipeline
deps: ["thm-fodor-pressing-down", "def-cofinality-strata-and-stationary-trace", "thm-small-intersections-of-clubs", "lem-unbounded-stationary-fibres-yield-a-partition"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lietz, Claim 5.17 and first splitting case, p.44"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
    - title: "Vasey, Lemmas 15.5–15.7, pp.84–85"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Statement

In ZFC, if $\kappa$ is regular uncountable, $\lambda<\kappa$ is infinite regular, and $S\subseteq E^\kappa_\lambda$ is stationary, then $S$ has a partition into $\kappa$ stationary sets.

## Facts & Assumptions

[F1] [[def-cofinality-strata-and-stationary-trace]]: Every point of the stratum has cofinality lambda.

[F2] [[thm-small-intersections-of-clubs]]: Fewer than kappa clubs intersect to a club on regular uncountable kappa.

[F3] [[lem-unbounded-stationary-fibres-yield-a-partition]]: A regressive function with stationary tail domains at every threshold yields the required partition.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Use AC to choose for each $\alpha\in S$ an increasing cofinal sequence $c^\alpha:\lambda\to\alpha$. Suppose every coordinate $\xi<\lambda$ has a threshold $b_\xi<\kappa$ for which $\{\alpha\in S:c^\alpha(\xi)\ge b_\xi\}$ is nonstationary; choose an avoiding club $C_\xi$. [F1]

2.1 The intersection $C=\bigcap_{\xi<\lambda}C_\xi$ is club, and $b=\sup_{\xi<\lambda}b_\xi<\kappa$ by regularity. Take $\alpha\in S\cap C$ above b (the intersection is unbounded, by testing it against additional tails). Then $c^\alpha(\xi)<b_\xi\le b$ for every $\xi$, contradicting cofinality in $\alpha>b$. [F2, step 1.1]

3.1 Therefore some fixed coordinate $\xi$ has stationary tail domains at every threshold. The map $g(\alpha)=c^\alpha(\xi)$ is regressive on all S. The fibre-partition lemma applies. [F3, step 2.1] ∎
