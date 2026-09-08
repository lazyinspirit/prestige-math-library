---
id: cor-arbitrarily-large-finite-models-give-infinite-model
kind: corollary
title: "Arbitrarily large finite models imply an infinite model"
status: draft
origin: pipeline
deps: [thm-countable-first-order-compactness]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Corollary 1J.2 p44; Weiss–D’Mello, Theorem 2 pp14–15, constant-inequality proof."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In ZF, a sentence theory in an explicitly countable language with arbitrarily large finite models has an infinite model. “Arbitrarily large” means that for every natural number $m$ it has a finite model of size at least $m$.

## Facts & Assumptions

**Given:** The stated countable language and finite-model hypothesis.

[F1] Finite satisfiability in an explicitly countable language implies existence of a nonempty model. ([[thm-countable-first-order-compactness]])

## Proof

1.1 Add distinct new constant symbols $c_n$ for $n<\omega$ and put $S=T\cup\{c_i\ne c_j:i<j<\omega\}$. This language remains explicitly countable by tagging old symbol codes and the indices of the new constants. A finite subset of $S$ mentions only finitely many new constants, say $m$ distinct ones. Take a finite model of $T$ of size at least $\max(1,m)$, interpret these constants by $m$ distinct elements, and interpret unused constants at one fixed element. The resulting expansion satisfies the fragment. This uses only one finite model and finitely many choices for this fragment. [given]

2.1 F1 gives a model $N\models S$. Its interpretation map $n\mapsto c_n^N$ is injective, because every inequality is in $S$. Thus its carrier is infinite. The reduct to the original language still satisfies every sentence of $T$, and has the same carrier, so it is the required infinite model. [F1, step 1.1] ∎
