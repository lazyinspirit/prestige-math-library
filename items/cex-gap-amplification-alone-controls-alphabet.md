---
id: cex-gap-amplification-alone-controls-alphabet
kind: counterexample
title: "A powered graph whose alphabet grows"
status: published
origin: pipeline
deps:
  - fs-gap-amplification-alone-controls-alphabet
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5.1, Lemma 18.31, printed pp. 371–372"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
proof_strategy: counterexample
generation:
  role: counterexample
---

## Statement refuted

Local-view powering does not preserve the input alphabet on every graph and
every positive parameter. The one-vertex graph below has base unsatisfaction
$1/2$, while its $t=1$ local-view alphabet has size $2^{64}$ rather than $2$.

## Facts & Assumptions

[F1] The universal claim under examination is that the local-view powering
step keeps the input alphabet unchanged for every graph and every positive
powering parameter. ([[fs-gap-amplification-alone-controls-alphabet]])

## Counterexample

**Given:** Let $G$ have one vertex $v$, base alphabet $\Sigma=\{0,1\}$, and
two loop edges $e_0,e_1$ with relations $R_{e_0}=\{(0,0)\}$ and
$R_{e_1}=\{(1,1)\}$.

1.1 The only vertex labels are $0$ and $1$. Label $0$ passes $e_0$ and fails $e_1$; label $1$ passes $e_1$ and fails $e_0$. Thus every labeling violates exactly one of the two edges and $\operatorname{UNSAT}(G)=1/2$. Each loop has two incidence slots, so the one-vertex graph is $d=4$ regular. [given, algebra]

2.1 Set $t=1$, so $R=t+\lceil\sqrt t\rceil=2$. In the local-view convention, a powered label assigns an element of $\Sigma$ to each length-$R$ lazy-step pattern, hence the pattern set has size $(2d)^R=8^2=64$ and the view alphabet has size $|\Sigma|^{64}=2^{64}$. [step 1.1, algebra]

3.1 Since $2^{64}>2=|\Sigma|$, this explicit power does not preserve the alphabet, contradicting the universal assertion in [F1]. The witness uses a positive parameter and has the claimed base unsatisfaction $1/2$; it makes no claim that every graph or every parameter yields alphabet growth. [F1, step 1.1, step 2.1, algebra] ∎
