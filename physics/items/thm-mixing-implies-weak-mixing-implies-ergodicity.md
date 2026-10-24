---
id: thm-mixing-implies-weak-mixing-implies-ergodicity
kind: theorem
title: Mixing implies weak mixing, which implies ergodicity
deps: [def-strong-and-weak-mixing, def-ergodic-measure-preserving-system]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: E–W §2.7 pp.49–50; Sarig Proposition 1.2
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Every strongly mixing probability system is weakly mixing, and every weakly mixing probability system is ergodic.

## Facts & Assumptions

[F1] Strong mixing is convergence of set correlations; weak mixing is convergence of their absolute Cesaro averages [[def-strong-and-weak-mixing]].

[F2] In a probability system ergodicity means invariant sets have mass zero or one [[def-ergodic-measure-preserving-system]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For a fixed measurable pair let $d_n=\mu(A\cap T^{-n}B)-\mu(A)\mu(B)$. Strong mixing says $d_n\to0$. Given $\varepsilon>0$, choose m so that $|d_n|<\varepsilon$ for $n\ge m$. For $N>m$, $N^{-1}\sum_{n<N}|d_n|\le N^{-1}\sum_{n<m}|d_n|+\varepsilon$. The first term tends to zero because it is a fixed finite sum divided by N. As $\varepsilon$ is arbitrary, weak mixing follows. [F1]

2.1 For a strictly invariant E, $T^{-n}E=E$ for every n. Thus its weak-mixing average against itself is exactly $|\mu(E)-\mu(E)^2|$. A constant sequence tends to zero only if that constant is zero. Since $0\le\mu(E)\le1$, this gives $\mu(E)=0$ or $1$, which is ergodicity. [F1, F2] ∎
