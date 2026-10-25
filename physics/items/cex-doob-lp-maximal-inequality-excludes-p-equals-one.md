---
id: cex-doob-lp-maximal-inequality-excludes-p-equals-one
kind: counterexample
title: Doob Lp maximal inequality excludes p equals one
status: published
origin: pipeline
deps: [lem-conditional-expectation-process-is-a-martingale, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-axiom-of-choice]
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, §2.9, pp. 22–24", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. There is no universal $C$ such that
$$\mathbb E\max_{0\le k\le n}|M_k|\le C\mathbb E|M_n|$$
for every integrable martingale and horizon $n$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[lem-conditional-expectation-process-is-a-martingale]] makes finite conditional-expectation processes martingales.

[F2] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] evaluates the shell-simple functions below.

[F3] [[def-axiom-of-choice]] is inherited from conditional expectation.

## Counterexample

1.1 Fix $n$. On $[0,1]$ put $A_k=(0,2^{-k}]$ for $1\le k\le n$, $A_0=[0,1]$, and $\mathcal F_k=\sigma(A_1,\ldots,A_k)$. For $X=2^n1_{A_n}$, direct averaging on $A_k$ gives $$M_k:=\mathbb E[X\mid\mathcal F_k]=2^k1_{A_k}\quad(0\le k\le n)$$ up to the null endpoint. F1 verifies the martingale, and $\mathbb E|M_n|=2^n2^{-n}=1$. [F1, F2]

2.1 On the shell $A_j\setminus A_{j+1}$ for $0\le j<n$, the maximum is $2^j$ and the shell has measure $2^{-(j+1)}$. On $A_n$ the maximum is $2^n$ and the measure is $2^{-n}$. Therefore $$\mathbb E\max_{k\le n}|M_k| =\sum_{j=0}^{n-1}2^j2^{-(j+1)}+2^n2^{-n} =\frac n2+1.$$ [F2, step 1.1]

3.1 If a horizon-independent $C$ existed, step 1.1, step 2.1 would give $n/2+1\le C$ for every $n$, impossible. Thus the $p>1$ restriction cannot be extended to this strong $L^1$ form. AC has exactly the inherited role in F3. [F3, step 1.1, step 2.1] ∎