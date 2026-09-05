---
id: cor-second-borel-cantelli-lemma-under-pairwise-independence
kind: corollary
title: "Second Borel-Cantelli lemma under pairwise independence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limsup-and-infinitely-often-event, thm-pairwise-independent-borel-cantelli-frequency-law]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 2.3.7 and Theorem 2.3.9"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
---

## Statement

Let $(A_n)_{n\in\mathbb N}$ be pairwise independent events with
$$\sum_{n=0}^\infty \mathbb P(A_n)=+\infty.$$
Then
$$\mathbb P(A_n\ \mathrm{i.o.})=1.$$

## Facts & Assumptions

**Given:** Pairwise independent events $(A_n)_{n\in\mathbb N}$ with
$\sum_{n=0}^\infty \mathbb P(A_n)=+\infty$.

[L1] The frequency law gives
$$\frac{\sum_{k=0}^n\mathbf 1_{A_k}}{\sum_{k=0}^n\mathbb P(A_k)}\to1$$
almost surely. ([[thm-pairwise-independent-borel-cantelli-frequency-law]])

[L2] The event $\{A_n\ \mathrm{i.o.}\}$ is the event that infinitely many of the
$A_n$ occur. ([[def-limsup-and-infinitely-often-event]])

## Proof

**Proof technique:** direct.

1.1 Let $S_n:=\sum_{k=0}^n\mathbf 1_{A_k}$ and $a_n:=\sum_{k=0}^n\mathbb P(A_k)$. The divergence hypothesis makes $a_n\to+\infty$, and [L1] gives $S_n/a_n\to1$ almost surely. Therefore on a full-probability event there is $N$ such that $S_n\ge a_n/2$ for every $n\ge N$, hence $S_n\to+\infty$. [given, L1]

2.1 The partial counts $S_n(\omega)$ diverge to $+\infty$ exactly when the event $A_n$ occurs for infinitely many indices $n$. By [L2], this is precisely the event $A_n\ \mathrm{i.o.}$. Since step 1.1 shows it has probability $1$, the second Borel-Cantelli conclusion follows. [step 1.1, L2] ∎
