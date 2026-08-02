---
id: ex-distance-functions-form-a-compact-family-in-c01
kind: example
title: "Under the Axiom of Countable Choice and the Axiom of Dependent Choice, the family $x\\mapsto|x-a|$, $a\\in[0,1]$, is compact in $C([0,1])$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-arzela-ascoli-for-real-ck, thm-metric-compactness-equivalences, thm-bolzano-weierstrass, def-countable-choice, def-dependent-choice]
aliases: []
landmark: false
proof_strategy: sequential
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "The Ascoli--Arzelà Theorem (MIT)"
      url: "https://math.mit.edu/~rbm/18.100B/Ascoli-Arzela.pdf"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice ([[def-countable-choice]]) and the Axiom of Dependent Choice ([[def-dependent-choice]]).** The family $\mathcal D=\{d_a:a\in[0,1]\}\subseteq C([0,1],\mathbb R)$, where $d_a(x)=|x-a|$, is compact in the supremum metric.

## Facts & Assumptions
**Given:** The Axiom of Countable Choice, the Axiom of Dependent Choice, and $d_a(x)=|x-a|$ for $a,x\in[0,1]$.

[L1] Every sequence in $[0,1]$ has a convergent subsequence ([[thm-bolzano-weierstrass]]).

[L2] Assuming the Axiom of Countable Choice and the Axiom of Dependent Choice, sequential compactness and compactness are equivalent for a metric space ([[thm-metric-compactness-equivalences]]).

## Proof

**Proof technique:** sequential.

1.1 The reverse triangle inequality gives $|d_a(x)-d_b(x)|\le|a-b|$ for every $x$; evaluating at $x=0$ gives $\lVert d_a-d_b\rVert_\infty=|a-b|$. [given, algebra]

2.1 Given a sequence $d_{a_n}$ in $\mathcal D$, use [L1] to choose $a_{n_j}\to a\in[0,1]$. Step 1.1 then gives $d_{a_{n_j}}\to d_a$ uniformly. [L1, step 1.1, choose]

3.1 Thus $\mathcal D$ is sequentially compact, and it is compact by [L2]. [step 2.1, L2, algebra] ∎
