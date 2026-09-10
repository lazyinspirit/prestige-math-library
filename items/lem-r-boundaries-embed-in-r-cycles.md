---
id: lem-r-boundaries-embed-in-r-cycles
kind: lemma
title: R boundaries embed in r cycles
deps: ["def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

For every filtered chain complex, $B^r_{p,q}\subseteq Z^r_{p,q}$ for all $p,q\in\mathbb Z$ and $r\ge0$.

## Facts & Assumptions

**Given:** A filtered chain complex and integers p,q with r≥0.

[F1] The numerator is $A^r_{p,n}$ and the denominator is the displayed sum of lower approximate cycles and differential images ([[def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex]]).

## Proof

**Proof technique:** direct.

1.1 For $r=0$, the assertion is $F_{p-1}C_n\subseteq F_pC_n$. For $r\ge1$, $A^{r-1}_{p-1,n}\subseteq F_{p-1}C_n\subseteq F_pC_n$ and its differential lies in $F_{(p-1)-(r-1)}C_{n-1}=F_{p-r}C_{n-1}$. It therefore factors through $A^r_{p,n}$. [F1, algebra]

2.1 For the other summand, $d(A^{r-1}_{p+r-1,n+1})\subseteq F_pC_n$, and applying $d_n$ to it gives zero since $d_nd_{n+1}=0$. It too lies in $A^r_{p,n}$. The sum lies there by the least-upper-bound property of the image sum in [F1]. This proves the assertion for every r, including r=1. [F1, step 1.1, algebra] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.
