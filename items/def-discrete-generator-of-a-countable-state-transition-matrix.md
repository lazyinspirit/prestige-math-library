---
id: def-discrete-generator-of-a-countable-state-transition-matrix
kind: definition
title: "Discrete generator of a countable-state transition matrix"
status: published
origin: pipeline
deps: [def-measure-kernel-and-probability-kernel]
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Roch, Markov Chains: Martingale Methods, Note 24, Section 1"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf"
      locator: "Definition 24.1 and equation (24.1), printed pp. 1-2"
---

## Definition

Let $S$ be countable with sigma-algebra $2^S$, and let $p=(p(x,y))_{x,y\in S}$
be a transition matrix. For bounded $f:S\to\mathbb R$, write
$$ Pf(x)=\sum_{y\in S}p(x,y)f(y) $$ and define the **discrete generator** $$ Lf(x)=Pf(x)-f(x) =\sum_{y\in S}p(x,y)\bigl(f(y)-f(x)\bigr). $$ The last series is absolutely convergent, since $$ \sum_y p(x,y)|f(y)-f(x)| \le2\lVert f\rVert_\infty\sum_y p(x,y) =2\lVert f\rVert_\infty. $$
All functions on $(S,2^S)$ are measurable. Constant functions have generator
zero; in particular $L0=L1=0$. On an empty $S$ every assertion is vacuous.
No choice is used.

