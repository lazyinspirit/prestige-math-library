---
id: lem-qa-35-log-tangent-bound
kind: lemma
title: "The logarithm tangent inequality"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
---

## Statement

For every $t>0$, $\ln t\le t-1$, with equality exactly when $t=1$.

## Facts & Assumptions

**Given:** $t>0$.

## Proof

**Proof technique:** direct.

1.1 If $t\ge1$, then $1/u\le1$ for $u\in[1,t]$. Thus $\ln t=\int_1^t du/u\le t-1$, with strict inequality for $t>1$ because $1/u<1$ on the nonempty interval $(1,t)$. [given, algebra]

2.1 If $0<t<1$, then $1/u>1$ on $(t,1)$, so $\ln t=-\int_t^1du/u<-(1-t)=t-1$. At $t=1$ both sides are zero. This proves the claim and equality case. [given, algebra] ∎
