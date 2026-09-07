---
id: def-promise-problem
kind: definition
title: "Promise problem"
status: published
origin: pipeline
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Goldreich, On Promise Problems; §1.1 Definition1.1 and §1.2 Definition1.2, pp2–4."
      url: "https://www.wisdom.weizmann.ac.il/~oded/PSX/prpr-r.pdf"
---

## Definition

A **promise problem** is a pair $(Y,N)$ of disjoint subsets of $\{0,1\}^*$. Its promise is $Y\cup N$. A deterministic solver must accept every word of $Y$ and reject every word of $N$, with either answer allowed elsewhere. The pair belongs to $\mathrm{PromiseP}$ if such a solver has a polynomial time bound on every input.

It belongs to $\mathrm{PromiseNP}$ if there are a polynomial $p$ and a deterministic polynomial-time predicate $V(x,w)$ such that every $x\in Y$ has some $w$ with $|w|\le p(|x|)$ and $V(x,w)=1$, whereas for every $x\in N$ every such $w$ has $V(x,w)=0$. The promise need not be decidable; either side or both sides may be empty. When $Y\cup N=\{0,1\}^*$, this is the ordinary language decision convention.
