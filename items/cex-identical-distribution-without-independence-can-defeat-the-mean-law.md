---
id: cex-identical-distribution-without-independence-can-defeat-the-mean-law
kind: counterexample
title: Identical distribution without independence can defeat the mean law
deps: ["def-strong-law-of-large-numbers-for-a-sequence", "def-probability-measure", "def-expectation-of-a-nonnegative-or-integrable-random-variable"]
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
verification:
  audited: 2026-09-10
origin: pipeline
proof_strategy: direct
---

## Statement refuted

Identical integrable marginals alone do not imply the strong mean law: on $\{0,1\}$ with equal masses, set $X(\omega)=\omega$ and $X_n=X$ for every n.

## Counterexample

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 The law gives each atom mass 1/2 and has total mass one. Every coordinate has this same law, and $\mathbb EX_n=0/2+1/2=1/2$. It is integrable since |$X_n$|<=1. [given, algebra]

2.1 For every n, $S_n/n=X$ at both points. Hence $|S_n/n-\mathbb EX_1|=1/2$ everywhere, and convergence to the common mean fails on the whole space. Independence fails as well: $P(X_1=1,X_2=1)=1/2\ne(1/2)^2$. [given, algebra] ∎
