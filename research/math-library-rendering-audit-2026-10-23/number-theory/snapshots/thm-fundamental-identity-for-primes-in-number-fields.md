---
id: thm-fundamental-identity-for-primes-in-number-fields
kind: theorem
title: "The fundamental identity for primes"
status: published
origin: pipeline
deps: [def-prime-above-and-residue-degree, def-ramification-index, thm-number-field-integral-ideal-factorisation-in-zf]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Theorem 3.34"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

For finite $L/K$ and nonzero $\mathfrak p\subseteq\mathcal O_K$,
$$\sum_{\mathfrak P\mid\mathfrak p}e(\mathfrak P/\mathfrak p)f(\mathfrak P/\mathfrak p)=[L:K].$$

## Proof

**Given:** the finite factorisation of $\mathfrak p\mathcal O_L$.

1.1 Localise $\mathcal O_L$ at $\mathfrak p$. It is a finite torsion-free module over the DVR $(\mathcal O_K)_{\mathfrak p}$, hence free of rank $[L:K]$. Filtering its reduction modulo $\mathfrak p$ by the finite prime-power factors, the $e(\mathfrak P/\mathfrak p)$ layers at $\mathfrak P$ are copies of its residue field. [given, algebra]

2.1 Taking dimensions over $\mathcal O_K/\mathfrak p$ gives the left side, while the free rank in step 1.1 gives $[L:K]$ for the same quotient. [step 1.1, algebra] ∎
