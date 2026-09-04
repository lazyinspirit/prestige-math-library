---
id: thm-bpp-amplification-to-exponentially-small-error
kind: theorem
title: "BPP amplification to exponentially small error"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-rp-corp-zpp-bpp-and-pp, lem-chernoff-bound-for-bernoulli-trials]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 14. Randomized Computation"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/probabilistic"
---

## Statement

If $L\in\mathrm{BPP}$ and $r$ is a positive polynomial, then $L$ has a probabilistic polynomial-time decider whose error on length-$n$ inputs is at most $2^{-r(n)}$.

## Facts & Assumptions

**Given:** a language $L\in\mathrm{BPP}$ and a positive polynomial $r$.

[L1] A BPP machine is correct with probability at least $2/3$ on every input ([[def-rp-corp-zpp-bpp-and-pp]]).

[L2] If $S$ is the sum of independent Bernoulli$(p)$ trials and $0<\alpha<1$, then $\mathbb P(S\le (1-\alpha)pk)\le \exp(-\alpha^2 pk/2)$ ([[lem-chernoff-bound-for-bernoulli-trials]]).

## Proof

**Proof technique:** direct.

1.1 Let $M$ be a BPP machine for $L$. On input $x$, run $M$ independently $k$ times and output the majority answer. For the correctness indicators $X_1,\dots,X_k$, [L1] gives a Bernoulli parameter $p_x\ge 2/3$. [L1, given, construct]

2.1 If the majority vote is wrong, then $X_1+\cdots+X_k\le k/2\le (3/4)p_xk$ because $p_x\ge 2/3$. Thus the bad event is contained in the lower-tail event from [L2] with $\alpha=1/4$, and therefore $\mathbb P(\text{majority is wrong on }x)\le \exp(-(1/4)^2p_xk/2)\le \exp(-k/48)$. [L1, L2, step 1.1, algebra]

3.1 Choose $k$ to be a sufficiently large multiple of $r(|x|)$, for example $k=\lceil 48(\log 2)\,r(|x|)\rceil$. Then step 2.1 gives error at most $2^{-r(|x|)}$. Since $k$ is polynomial in $|x|$, the amplified machine is still probabilistic polynomial-time. [step 2.1, choose, algebra] ∎
