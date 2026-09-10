---
id: thm-flat-dimension-at-most-n-iff-higher-tor-vanishes
title: "Flat dimension at most n is equivalent to the prescribed higher Tor vanishing"
kind: theorem
status: published
origin: pipeline
deps: ["def-flat-dimension-of-a-module", "prop-tor-dimension-shifting", "def-balanced-tor-bifunctor", "thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes", "thm-long-exact-tor-sequence-in-the-left-module-variable"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
---

## Statement

Assume the Axiom of Dependent Choice and supplied projective-resolution data.
For a left $R$-module $M$ and $n\ge0$, $\operatorname{fd}_R M\le n$ if and only if $\operatorname{Tor}^R_i(N,M)=0$ for every right module $N$ and every $i>n$.

## Proof

**Given:** the definition of flat dimension and arbitrary right modules $N$.

1.1 If $F$ is flat, the Tor-one criterion gives $\operatorname{Tor}_1^R(N,F)=0$ for every right $N$, and dimension shifting in a projective resolution of $N$ gives $\operatorname{Tor}_i^R(N,F)=0$ for all $i>0$. [given]

2.1 Suppose $0\to F_n\to\cdots\to F_0\to M\to0$ is a flat resolution of length $n$. Break it into short exact sequences of successive kernels. The long exact Tor sequence and step 1.1 shift every $\operatorname{Tor}_i(N,M)$ with $i>n$ to a positive Tor group of $F_n$, hence to zero. [step 1.1, algebra]

3.1 Conversely, take a projective resolution and put $K_0=M$ and $K_j=\ker(P_{j-1}\to P_{j-2})$ for $j\ge1$, with $P_{-1}=M$. Repeated dimension shifting identifies $\operatorname{Tor}_1^R(N,K_n)$ with $\operatorname{Tor}_{n+1}^R(N,M)$; for $n=0$ this is the identity. The assumed vanishing makes $K_n$ flat by the Tor-one criterion. Truncating at $K_n$ gives a length-$n$ flat resolution, including the case $n=0$. [step 2.1, algebra] ∎
