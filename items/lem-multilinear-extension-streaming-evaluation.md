---
id: lem-multilinear-extension-streaming-evaluation
kind: lemma
title: "Streaming evaluation from a full cube table"
status: draft
origin: pipeline
deps: [thm-existence-and-uniqueness-of-multilinear-extension]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct calculation
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Justin Thaler, Proofs, Arguments, and Zero-Knowledge (2023), Lemma 3.7, pp.30\u201331"
      url: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf"
---

## Statement

Let $F$ be a field, let $n\geq1$ and $N=2^n$, and let a stream supply each indexed pair $(b,f(b))$ for a table $f:\{0,1\}^n\to F$ exactly once, in any order. Given $r\in F^n$, the multilinear extension can be evaluated at $r$ in one pass with $O(nN)$ field operations and $O(n)$ field-element working storage, plus an $O(n)$-bit current index. The input is the full table, not a succinct description.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] The unique extension is the sum of table values times the product basis weights ([[thm-existence-and-uniqueness-of-multilinear-extension]]).

## Proof

1.1 For each record compute $w_b=\prod_i(b_ir_i+(1-b_i)(1-r_i))$ and add $f(b)w_b$ to an accumulator initially zero. The interpolation formula says that after all records the accumulator equals $\widetilde f(r)$. This uses no divisions, even if a weight or table entry is zero. [F1, algebra]

2.1 Computing each weight costs $O(n)$ operations; multiplying by its table value and accumulating costs $O(1)$. There are $N$ records. Store $r$, the accumulator, the current value and one running product, using $n+O(1)=O(n)$ field elements since $n\geq1$. Endpoints $r_i=0,1$ and $n=1$ require the same procedure. The work bound is exponential in $n$ and gives no polynomial-time evaluator from a succinct table specification. [step 1.1, given, algebra] ∎
