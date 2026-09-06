---
id: cex-wiener-inversion-needs-nonvanishing
kind: counterexample
title: "Wiener inversion needs nonvanishing"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-wiener-algebra-of-the-circle, lem-absolutely-summable-fourier-coefficients-give-uniform-convergence]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement refuted

Assume the Axiom of Countable Choice. Every $f\in A(\mathbb T)$ has a reciprocal in $A(\mathbb T)$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $f=1-e_1$, and the definition [[def-wiener-algebra-of-the-circle]].

[L1] Under the stated Axiom of Countable Choice, every member of $A(\mathbb T)$ has the continuous representative supplied by [[lem-absolutely-summable-fourier-coefficients-give-uniform-convergence]].

## Counterexample

1.1 The two nonzero Fourier coefficients of $f$ are $1$ and $-1$, so $f\in A(\mathbb T)$. [given, algebra]

1.2 At the identity $0\in\mathbb T$, $f(0)=1-e^{0}=0$. [given, algebra]

2.1 A pointwise reciprocal would be unbounded near this zero and cannot be continuous; [L1] says that every member of $A(\mathbb T)$ is represented by a continuous function. Thus no reciprocal belongs to $A(\mathbb T)$. [L1, step 1.1, step 1.2, algebra] ∎
