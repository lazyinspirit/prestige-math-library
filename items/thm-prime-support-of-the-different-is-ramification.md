---
id: thm-prime-support-of-the-different-is-ramification
kind: theorem
title: "The prime support of the different is ramification"
status: draft
origin: pipeline
deps: [def-different-of-a-number-field, def-ramification-index, def-prime-ideal-valuations-on-fractional-ideals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Keith Conrad, The Different Ideal, Theorem 4.13"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
---

## Statement

A nonzero prime $\mathfrak P$ of $\mathcal O_K$ lying over the rational prime
$p$ divides $\mathfrak D_K$ if and only if
$e(\mathfrak P/p)>1$, that is, if and only if $\mathfrak P$ itself ramifies.

## Facts & Assumptions

**Given:** $\mathfrak P\mid p$ and $e=e(\mathfrak P/p)$.

[L1] Theorem 4.13 in the cited source says that the exponent of $\mathfrak P$ in the different is $e-1$ when $p\nmid e$, and is at least $e$ when $p\mid e$.

## Proof

1.1 Put $d=v_{\mathfrak P}(\mathfrak D_K)$.  The prime $\mathfrak P$ divides the different exactly when $d>0$. [given, algebra]

2.1 If $e=1$, then $p\nmid e$ and [L1] gives $d=e-1=0$.  If $e>1$, then [L1] gives either $d=e-1>0$ or $d\ge e>0$, according as $p\nmid e$ or $p\mid e$.  This proves the stated local equivalence. [L1, step 1.1, cases] ∎
