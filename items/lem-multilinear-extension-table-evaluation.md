---
id: lem-multilinear-extension-table-evaluation
kind: lemma
title: "Linear-time evaluation from a full cube table"
status: draft
origin: pipeline
deps: [thm-existence-and-uniqueness-of-multilinear-extension]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct calculation
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Justin Thaler, Proofs, Arguments, and Zero-Knowledge (2023), Lemma 3.8, pp.31\u201332"
      url: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf"
---

## Statement

For every field $F$, $n\geq0$, full table $f:\{0,1\}^n\to F$, and $r\in F^n$, one can compute $\widetilde f(r)$ in $O(2^n)$ field operations and $O(2^n+n)$ storage, measured in field elements with indexed array access.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] The unique extension is the finite weighted sum in the Boolean interpolation formula ([[thm-existence-and-uniqueness-of-multilinear-extension]]).

## Proof

1.1 Start with the one-entry array $W_0(())=1$. At stage $i$, replace each entry $W_{i-1}(b)$ by entries $W_i(b,0)=W_{i-1}(b)(1-r_i)$ and $W_i(b,1)=W_{i-1}(b)r_i$. After stage $i$ each entry is the product of the appropriate first $i$ factors, directly by this recurrence. This remains valid for zero or unit coordinates. [given, algebra]

2.1 After stage $n$, return $\sum_b f(b)W_n(b)$. The weights equal the interpolation basis evaluated at $r$, so this is $\widetilde f(r)$. Zero tables or zero weights need no separate treatment. [F1, step 1.1, algebra]

3.1 The weight construction costs $O(\sum_{i=1}^n2^i)=O(2^n)$ operations, and the final weighted sum costs $O(2^n)$. Holding the table, two successive weight arrays and $r$ uses $O(2^n+n)$ storage. For $n=0$, return the sole table entry; for $n=1$, the construction returns $(1-r_1)f(0)+r_1f(1)$. The input still has $2^n$ values. [step 1.1, step 2.1, algebra] ∎
