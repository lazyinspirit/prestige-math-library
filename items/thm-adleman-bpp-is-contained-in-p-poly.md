---
id: thm-adleman-bpp-is-contained-in-p-poly
kind: theorem
title: "Adleman's theorem: BPP is contained in P/poly"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-rp-corp-zpp-bpp-and-pp, thm-bpp-amplification-to-exponentially-small-error, thm-finite-union-bound]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 15. P vs. BPP"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/P-and-BPP"
---

## Statement

If $L\in\mathrm{BPP}$, then there exist a deterministic polynomial-time machine $D$ and advice strings $a_n$ of polynomial length such that $D(x,a_{|x|})$ decides $L$. Equivalently, $L\in\mathrm{P}/\mathrm{poly}$.

## Facts & Assumptions

**Given:** a language $L\in\mathrm{BPP}$.

[L1] BPP error can be reduced to exponentially small error while staying in probabilistic polynomial time ([[thm-bpp-amplification-to-exponentially-small-error]]).

[L2] The finite union bound says that the probability of a finite union is at most the sum of the individual probabilities ([[thm-finite-union-bound]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], for each input length $n$ there is a probabilistic polynomial-time machine $M_n$ deciding $L$ on length-$n$ inputs with error at most $2^{-(n+2)}$. Let $m(n)$ be the number of random bits used by $M_n$; this is polynomial in $n$. [L1, given]

2.1 For each word $x\in\{0,1\}^n$, let $B_x$ be the event that the random string $r\in\{0,1\}^{m(n)}$ makes $M_n$ err on $x$. Then $\mathbb P(B_x)\le 2^{-(n+2)}$. By [L2], $\mathbb P(\bigcup_{x\in\{0,1\}^n} B_x)\le 2^n\cdot 2^{-(n+2)}=1/4<1$. So there exists some random string $r_n$ for which no event $B_x$ occurs: that one string makes $M_n$ correct on every length-$n$ input simultaneously. [L2, step 1.1, algebra]

3.1 Use $a_n:=r_n$ as advice. The deterministic advice machine $D$ for input $x$ of length $n$ simulates $M_n$ on $(x,a_n)$ with the randomness tape fixed to $a_n$. By step 2.1 this simulation is correct on every length-$n$ input, and the advice length is $m(n)=\mathrm{poly}(n)$. Therefore $L$ has polynomial advice and hence lies in $\mathrm{P}/\mathrm{poly}$. [step 2.1, construct] ∎
