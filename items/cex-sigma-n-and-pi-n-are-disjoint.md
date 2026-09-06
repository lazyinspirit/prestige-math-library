---
id: cex-sigma-n-and-pi-n-are-disjoint
kind: counterexample
title: "A set lying in both Sigma_n^0 and Pi_n^0"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sigma-n-pi-n-and-delta-n-sets, cor-delta-one-sets-are-exactly-decidable, fs-sigma-n-and-pi-n-are-disjoint]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, §5.2"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement refuted

The assertion that $\Sigma_n^0\cap\Pi_n^0$ is empty for positive $n$.

## Facts & Assumptions

**Given:** a positive finite level $n$.

## Counterexample

**Proof technique:** direct.

1.1 The set $E$ of even natural numbers has the decidable predicate $x=2q$ for some $q$, and its complement has the decidable predicate $x=2q+1$ for some $q$. [given, construct]

2.1 Therefore $E$ is $\Delta_1^0$ and is in both $\Sigma_n^0$ and $\Pi_n^0$ after padding for every $n\ge1$. It witnesses overlap, not equality of the two classes. [step 1.1] ∎
