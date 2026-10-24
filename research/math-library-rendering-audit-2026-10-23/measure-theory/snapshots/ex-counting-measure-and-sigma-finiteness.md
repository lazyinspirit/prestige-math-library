---
id: ex-counting-measure-and-sigma-finiteness
kind: example
title: "Assuming countable choice, counting measure is sigma-finite exactly on countable sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-counting-measure, prop-counting-measure-is-a-measure, def-finite-sigma-finite-and-semifinite-measures, def-countable-choice, thm-countable-union-of-countable, thm-r-uncountable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, §2C"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Example

Assume the Axiom of Countable Choice. For a set $X$, counting measure on $(X,\mathcal P(X))$ is sigma-finite if and only if $X$ is at most countable. In particular, counting measure on $\mathbb R$ is not sigma-finite.

## Facts & Assumptions

**Given:** A set $X$, its counting measure $\#$, and the Axiom of Countable Choice.

[L1] Counting measure assigns finite measure exactly to finite sets ([[def-counting-measure]]) and is a measure ([[prop-counting-measure-is-a-measure]]).

[L2] Sigma-finiteness means that the whole space is a countable union of measurable finite-measure sets ([[def-finite-sigma-finite-and-semifinite-measures]]).

[L3] Under countable choice, a countable union of at most countable sets is at most countable ([[def-countable-choice]], [[thm-countable-union-of-countable]]).

[L4] The real line is uncountable ([[thm-r-uncountable]]).

## Verification

**Proof technique:** direct.

1.1 For the forward implication, suppose counting measure on $X$ is sigma-finite. By [L2], $X=\bigcup_nE_n$ with $\#(E_n)<+\infty$, so every $E_n$ is finite by [L1] and $X$ is at most countable by [L3]. [given, L1, L2, L3]

1.2 For the reverse implication when $X$ is finite, the constant cover $E_n=X$ has finite counting measure; when $X$ is countably infinite, a bijection $e:\mathbb N\to X$ gives finite initial sets $E_n=\{e(k):k<n\}$ with union $X$. The empty set is covered by the constant empty sequence. [given, L1, L2]

2.1 Steps 1.1 and 1.2 prove the equivalence. Since $\mathbb R$ is uncountable by [L4], the forward implication shows that its counting measure is not sigma-finite. [step 1.1, step 1.2, L4] ∎
