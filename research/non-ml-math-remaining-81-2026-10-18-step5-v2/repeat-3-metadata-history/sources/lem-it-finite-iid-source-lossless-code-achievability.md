---
id: lem-it-finite-iid-source-lossless-code-achievability
kind: lemma
title: "Finite-IID lossless source coding above entropy"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the typical sets and all codebooks are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yury Polyanskiy, MIT OpenCourseWare 6.441 Information Theory, Chapter 20: Advanced Channel Coding and Source-Channel Separation"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/dfddd4345fee8dd49420be583be2b952_MIT6_441S16_chapter_20.pdf"
      locator: "§20.5, printed pp. 215–216 / PDF pp. 9–10; source coding rate and block-error premise in Theorem 20.3's achievability."
    - title: "Robert M. Gray, Entropy and Information Theory, author-hosted full text"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 11, §§11.3–11.4, printed pp. 229–233; stationary/ergodic source-coding theorem."
verification:
  precheck: pass
---

## Statement

Let $P_S$ be a probability vector on a finite nonempty alphabet $\mathcal S$, and define its entropy in nats by

$$H(P_S):=-\sum_{s:P_S(s)>0}P_S(s)\ln P_S(s).$$

For every $R>H(P_S)$, there are deterministic fixed-length codes $f_k:\mathcal S^k\to[M_k]$, $g_k:[M_k]\to\mathcal S^k$ for the IID source $P_S^{\otimes k}$ such that $\Pr[g_k(f_k(S^k))\ne S^k]\to0$ and $\limsup_{k\to\infty}k^{-1}\ln M_k<R$.

## Facts & Assumptions

**Given:** A finite nonempty alphabet $\mathcal S$, a probability vector $P_S$, and a rate $R>H(P_S)$.

[A1] The letters $S_1,S_2,\ldots$ are IID with law $P_S$; $S^k=(S_1,\ldots,S_k)$.

## Proof

1.1 Choose $\delta$ with $0<\delta<R-H(P_S)$. On the support of $P_S$, let $Z_i=-\ln P_S(S_i)$. This is a finite-valued IID sequence with mean $H(P_S)$ and finite variance $\sigma^2$. For $\overline Z_k=k^{-1}\sum_{i=1}^kZ_i$, independence gives $\mathbb E(\overline Z_k-H(P_S))^2=\sigma^2/k$; the pointwise bound $\mathbf1_{\{|\overline Z_k-H(P_S)|\ge\delta\}}\le (\overline Z_k-H(P_S))^2/\delta^2$ therefore yields $\Pr[\overline Z_k>H(P_S)+\delta]\le\sigma^2/(k\delta^2)\to0$. [A1, given, choose, algebra]

2.1 Define $T_k:=\{s^k:P_S^{\otimes k}(s^k)>0,\ -k^{-1}\ln P_S^{\otimes k}(s^k)\le H(P_S)+\delta\}$. By step 1.1, $P_S^{\otimes k}(T_k)\to1$. Every $s^k\in T_k$ has probability at least $e^{-k(H(P_S)+\delta)}$, so $|T_k|e^{-k(H(P_S)+\delta)}\le\sum_{s^k\in T_k}P_S^{\otimes k}(s^k)\le1$; hence $|T_k|\le e^{k(H(P_S)+\delta)}$. [A1, step 1.1, algebra]

3.1 Put $M_k=\lceil e^{k(H(P_S)+\delta)}\rceil$ and inject the finite set $T_k$ into $[M_k]$. Encode each $s^k\in T_k$ by its assigned message and every other source word by message $1$; decode an assigned message to its unique word and unused messages to a fixed word of $\mathcal S^k$. This defines deterministic maps, and decoding is correct on $T_k$, so the block-error probability is at most $P_S^{\otimes k}(T_k^c)\to0$. [A1, step 2.1, construct]

4.1 Since $\lceil e^x\rceil\le2e^x$ for $x\ge0$, $k^{-1}\ln M_k\le H(P_S)+\delta+k^{-1}\ln2$. Its limsup is at most $H(P_S)+\delta<R$, proving the rate claim. [given, step 3.1, algebra] ∎
