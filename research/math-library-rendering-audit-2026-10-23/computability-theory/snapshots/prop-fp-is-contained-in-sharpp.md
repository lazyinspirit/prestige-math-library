---
id: prop-fp-is-contained-in-sharpp
kind: proposition
title: "FP is contained in Sharp-P"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sharpp-and-gap-p-functions, def-fp-function-class]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

$\mathrm{FP}\subseteq\#\mathrm P$ for the page's nonnegative integer-valued
function convention.

## Facts & Assumptions

**Given:** $f\in\mathrm{FP}$.

[L1] An FP function is total, nonnegative, binary-valued, and computable in polynomial time, by [[def-fp-function-class]].

[L2] A $\#\mathrm P$ function counts accepting paths of a binary-branching polynomial-time nondeterministic machine, by [[def-sharpp-and-gap-p-functions]].

## Proof

**Proof technique:** direct.

1.1 On input $x$, compute $m=f(x)$ using [L1] and let $k=\max(1,|\operatorname{bin}(m)|)$. Make exactly $k$ binary nondeterministic choices, producing one path for every integer $u\in[0,2^k)$. Accept iff $u<m$. [L1, given, construct]

2.1 Exactly the $m$ values $u=0,\ldots,m-1$ accept; all power-of-two padding values reject. This remains correct at $m=0$, when no path accepts. The output length and hence $k$ are polynomially bounded by the running time in [L1]. [step 1.1, algebra]

3.1 The constructed machine runs in polynomial time and has accepting-path count $f(x)$, so $f\in\#\mathrm P$ by [L2]. [L2, step 2.1] ∎
