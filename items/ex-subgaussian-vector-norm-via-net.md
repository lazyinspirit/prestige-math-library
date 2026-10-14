---
id: ex-subgaussian-vector-norm-via-net
kind: example
title: "A sub-Gaussian vector norm bound"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-subgaussian-variable-and-vector
  - thm-finite-subgaussian-maximum-and-epsilon-net
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 1, Lemma 1.18 and Theorem 1.19"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 4, sub-Gaussian vector convention"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
---

## Example

Let $d\ge1$ and let $Z\in\mathbb R^d$ be a centered sub-Gaussian vector with proxy $\sigma^2>0$. Choosing $\epsilon=1/2$ in the net reduction gives, for every $t>0$,
$$\mathbb P(\|Z\|_2\ge t)\le2\cdot5^d e^{-t^2/(8\sigma^2)}.$$
If $\sigma^2=0$, the same probability is $0$.

## Facts & Assumptions

**Given:** A centered sub-Gaussian vector $Z\in\mathbb R^d$, with $d\ge1$ and proxy $\sigma^2\ge0$.

[F1] A centered vector with proxy $\sigma^2$ has each projection $\langle u,Z\rangle$ sub-Gaussian with proxy $\sigma^2\|u\|_2^2$ ([[def-subgaussian-variable-and-vector]]).

[F2] For $0<\epsilon<1$, the net reduction gives $\mathbb P(\|Z\|_2\ge t)\le2(1+2/\epsilon)^d\exp(-(1-\epsilon)^2t^2/(2\sigma^2))$ when $\sigma^2>0$, and zero tail when $\sigma^2=0$ ([[thm-finite-subgaussian-maximum-and-epsilon-net]]).

## Verification

1.1 The choice $\epsilon=1/2$ is in $(0,1)$ and gives the finite-net factor $(1+2/\epsilon)^d=5^d$. [given, algebra]

2.1 By [F1], $Z$ satisfies the centered projection condition required by [F2]. Apply [F2] with the value from step 1.1. Since $(1-1/2)^2/(2\sigma^2)=1/(8\sigma^2)$, the stated positive-proxy bound follows; the zero-proxy clause of [F2] gives the boundary case. [F1, F2, step 1.1, algebra] ∎

