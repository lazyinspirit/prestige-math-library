---
id: lem-lambda-system-with-finite-intersections-is-sigma
kind: lemma
title: "A lambda-system closed under finite intersections is a sigma-algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lambda-system, def-sigma-algebra]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "A. Dembo, Probability Theory lecture notes, Proposition 1.1.37"
      url: "https://adembo.su.domains/stat-310b/lnotes.pdf"
pipeline_run: null
---

## Statement

If a lambda-system $\mathcal D$ on $X$ is closed under binary intersections,
then $\mathcal D$ is a sigma-algebra on $X$.

## Facts & Assumptions

**Given:** A lambda-system $\mathcal D$ on $X$ that is closed under binary intersections.

[L1] A lambda-system contains $X$, is closed under relative differences, and is closed under increasing countable unions ([[def-lambda-system]]).

[L2] A sigma-algebra is an algebra closed under countable unions ([[def-sigma-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Since $X\in\mathcal D$, [L1] gives $X\setminus A\in\mathcal D$ for every $A\in\mathcal D$. [L1]

2.1 For $A,B\in\mathcal D$, step 1.1 and intersection closure give $A\cup B=X\setminus((X\setminus A)\cap(X\setminus B))\in\mathcal D$. Thus every finite union of members belongs to $\mathcal D$. [step 1.1, given, algebra]

3.1 For a sequence $(A_n)$ in $\mathcal D$, the partial unions $B_n:=\bigcup_{k\le n}A_k$ lie in $\mathcal D$ by step 2.1 and increase, so [L1] gives $\bigcup_nA_n=\bigcup_nB_n\in\mathcal D$. Together with steps 1.1 and 2.1, this is the sigma-algebra criterion [L2]. [step 1.1, step 2.1, L1, L2] ∎
