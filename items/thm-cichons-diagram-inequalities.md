---
id: thm-cichons-diagram-inequalities
kind: theorem
title: The ZFC inequalities of Cichoń's diagram
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-basic-ideal-cardinal-inequalities, lem-basic-bounding-and-dominating-relations, lem-null-meagre-tukey-inequalities, lem-cichon-cross-and-bounding-inequalities, def-eventual-domination-bounding-and-dominating-numbers, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Tomek Bartoszyński, Invariants of Measure and Category, Theorem 3.11, printed p.8"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  precheck: pending
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

In ZFC, the ten cardinals
$\operatorname{add}(\mathcal N)$,
$\operatorname{cov}(\mathcal N)$,
$\operatorname{non}(\mathcal N)$,
$\operatorname{cof}(\mathcal N)$,
$\operatorname{add}(\mathcal M)$,
$\operatorname{cov}(\mathcal M)$,
$\operatorname{non}(\mathcal M)$,
$\operatorname{cof}(\mathcal M)$,
$\mathfrak b$, and $\mathfrak d$ satisfy the standard Cichoń-diagram
inequalities: the elementary ideal arrows, the null-to-meagre arrows, the
cross-ideal arrows, the eventual-domination arrows stated below, and all
their transitive consequences. No independence or completeness assertion is
part of this theorem.

## Facts & Assumptions

**Given:** The null and meagre ideals and eventual-domination cardinals in ZFC.

[F1] For $\mathcal I=\mathcal N,\mathcal M$,
$\operatorname{add}(\mathcal I)\le\operatorname{cov}(\mathcal I)$,
$\operatorname{add}(\mathcal I)\le\operatorname{non}(\mathcal I)$,
$\operatorname{cov}(\mathcal I)\le\operatorname{cof}(\mathcal I)$, and
$\operatorname{non}(\mathcal I)\le\operatorname{cof}(\mathcal I)$.
([[lem-basic-ideal-cardinal-inequalities]])

[F2] $\operatorname{add}(\mathcal N)\le
\operatorname{add}(\mathcal M)$ and
$\operatorname{cof}(\mathcal M)\le\operatorname{cof}(\mathcal N)$.
([[lem-null-meagre-tukey-inequalities]])

[F3] $\operatorname{cov}(\mathcal N)\le
\operatorname{non}(\mathcal M)$,
$\operatorname{cov}(\mathcal M)\le
\operatorname{non}(\mathcal N)$,
$\operatorname{add}(\mathcal M)\le\mathfrak b\le
\operatorname{non}(\mathcal M)$, and
$\operatorname{cov}(\mathcal M)\le\mathfrak d\le
\operatorname{cof}(\mathcal M)$.
([[lem-cichon-cross-and-bounding-inequalities]])

[F4] $\mathfrak b\le\mathfrak d$; their definitions and the ideal minima
are evaluated in ZFC, where AC supplies cardinal comparison.
([[lem-basic-bounding-and-dominating-relations]],
[[def-eventual-domination-bounding-and-dominating-numbers]],
[[def-axiom-of-choice]])

## Proof

**Proof technique:** assemble proved generating inequalities.

1.1 Draw the ten named cardinals as nodes. For each of $\mathcal N$ and $\mathcal M$, insert the four elementary arrows of [F1]. Insert the two null-to-meagre arrows of [F2], the six cross and bounding arrows of [F3], and $\mathfrak b\le\mathfrak d$ from [F4]. Every inserted arrow is an inequality already proved under the same ZFC conventions. [F1, F2, F3, F4]
2.1 If $a\le b$ and $b\le c$ are among these arrows, ordinal/cardinal order transitivity gives $a\le c$. Repeated application yields exactly the transitive consequences asserted in the Statement. The statement makes no claim that an omitted arrow is independent of ZFC or that a diagram drawing captures every possible relation. AC is used in the cited supplier proofs and in regarding the ten minima as comparable cardinals; no additional selection occurs in this assembly. ∎ [step 1.1, F4]
