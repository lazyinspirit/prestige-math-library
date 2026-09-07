---
id: lem-stationary-set-minus-its-trace
kind: lemma
title: "Removing the trace preserves a stationary remainder"
status: draft
origin: pipeline
deps: ["def-cofinality-strata-and-stationary-trace", "lem-limit-points-of-unbounded-sets", "prop-basic-stationary-set-calculus"]
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
    - title: "Lietz, Lemma 5.16, p.43"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
---

## Statement

In ZFC, if $S\subseteq\kappa$ is stationary and $\kappa$ is regular uncountable, then $S\setminus\operatorname{Tr}(S)$ is stationary.

## Facts & Assumptions

[F1] [[def-cofinality-strata-and-stationary-trace]]: Trace membership requires uncountable cofinality and stationarity of the initial restriction.

[F2] [[lem-limit-points-of-unbounded-sets]]: Limit points of an unbounded subset form a club when the ambient cofinality is uncountable.

[F3] [[prop-basic-stationary-set-calculus]]: A stationary set meets each club; intersecting it with a club preserves stationarity.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Suppose a club $C$ avoids $S\setminus\operatorname{Tr}(S)$. Since $\operatorname{acc}(C)$ is club, let $\alpha$ be the least point of $S\cap\operatorname{acc}(C)$. Closure of C gives $\alpha\in C$, so avoidance forces $\alpha\in\operatorname{Tr}(S)$. In particular $\operatorname{cf}(\alpha)>\omega$. [F1, F2, F3]

2.1 Now $C\cap\alpha$ is unbounded in $\alpha$, so $\operatorname{acc}_\alpha(C\cap\alpha)=\operatorname{acc}_\kappa(C)\cap\alpha$ is a club in $\alpha$. By minimality of $\alpha$ it is disjoint from $S\cap\alpha$. This contradicts trace membership. [F1, F2, step 1.1] ∎
