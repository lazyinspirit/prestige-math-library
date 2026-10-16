---
id: lem-qa-common-kernel-repetition-bound
kind: lemma
title: Chernoff repetition bound for common-kernel recovery
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps:
  - lem-qa-annihilator-restriction-cut
  - def-qa-finite-abelian-subgroup-annihilator
  - lem-chernoff-bound-for-independent-bernoulli-trials
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew Aspnes, Notes on Randomized Algorithms, §§5.2.1–5.2.4 and H.2.2"
      url: "https://cs.yale.edu/homes/aspnes/classes/469/notes.pdf"
---

## Statement

Let $G$ be a finite abelian group with $N:=|G|\ge2$, let $H\le G$, and start with a current subgroup $K_0$ satisfying $H\le K_0\le G$. At each of $M$ fresh independent trials, if the current subgroup $K_{t-1}$ strictly contains $H$, draw a uniform $\chi_t\in H^\perp$ and replace $K_{t-1}$ by $K_t=K_{t-1}\cap\ker\chi_t$; after reaching $H$, leave the subgroup equal to $H$. Each cut reduces the current order by a factor of at least two. For $0<\delta<1$, put
$$s:=\left\lceil\log_2 N\right\rceil,\qquad M:=\left\lceil4s+16\ln(1/\delta)\right\rceil.$$
Then the failure event $K_M\ne H$ has probability at most $\delta$. If $H=K_0$, the failure probability is zero.

## Facts & Assumptions

**Given:** The finite adaptive process in the Statement; every fresh sample is independent of earlier trials.

[F1] The annihilator is $H^\perp=\{\chi\in\widehat G:\chi(h)=1\text{ for every }h\in H\}$ ([[def-qa-finite-abelian-subgroup-annihilator]]). Whenever $K_{t-1}>H$, a uniform sample from this set cuts $K_{t-1}$ with conditional probability at least $1/2$, preserves $H$, and reduces its order by a factor of at least two ([[lem-qa-annihilator-restriction-cut]]).

[F2] For $X\sim\mathrm{Bin}(M,1/2)$ with mean $\mu=M/2$, $\mathbb P(X\le(1-\eta)\mu)\le e^{-\mu\eta^2/2}$ for $0\le\eta\le1$. ([[lem-chernoff-bound-for-independent-bernoulli-trials]])

## Proof

1.1 If $s$ cuts have occurred, repeated halving gives $|K|\le N/2^s\le1$. Since $H\le K$ and a subgroup contains the identity, this forces $K=H$. Consequently, on the event $K_M\ne H$, the process remained strictly above $H$ for all $M$ trials and fewer than $s$ actual cuts occurred. [given, F1, algebra]

1.2 Couple each trial, while $K_{t-1}>H$, by first drawing its cut indicator $C_t$ with conditional probability $p_t\ge1/2$ and then drawing $\chi_t$ from the uniform distribution conditioned on that indicator. If $C_t=1$, draw an auxiliary $Y_t\in\{0,1\}$ with conditional probability $\mathbb P(Y_t=1\mid C_t=1,\text{past})=1/(2p_t)$; if $C_t=0$, set $Y_t=0$. Then $Y_t\le C_t$ and $\mathbb P(Y_t=1\mid\text{past})=1/2$. After the process reaches $H$, draw fresh independent $Y_t\sim\mathrm{Bernoulli}(1/2)$. Thus the $Y_t$ are independent Bernoulli$(1/2)$ variables, and on every failure outcome $\sum_tY_t\le\sum_tC_t<s$. [given, F1, construct]

2.1 Let $X:=\sum_{t=1}^M Y_t$ and $\mu=M/2$. The coupling and Step 1.1 give $\mathbb P(K_M\ne H)\le\mathbb P(X<s)$. Since $\mu\ge2s+8\ln(1/\delta)$, we have $s\le\mu/2$, so $\{X<s\}\subseteq\{X\le\mu/2\}$. [step 1.1, step 1.2, algebra]

3.1 Apply [F2] with $\eta=1/2$ to obtain $\mathbb P(X\le\mu/2)\le e^{-\mu/8}$. The bound on $\mu$ implies $e^{-\mu/8}\le e^{-\ln(1/\delta)}=\delta$. Hence $\mathbb P(K_M\ne H)\le\delta$. If $H=K_0$, the process stays at $H$ by definition, giving the stated zero failure probability. [F2, step 2.1, algebra] ∎

## Remarks

The failure event is stated as $K_M\ne H$. “Fewer than $s$ cuts before reaching $H$” would incorrectly count early successful termination as failure.
