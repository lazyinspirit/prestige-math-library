---
id: cor-integral-extension-lifts-finite-prime-chains
kind: corollary
title: "Integral extensions lift finite prime chains from the base"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-going-up]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 7.7"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (14.3)(4)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $f:A\to B$ be an integral ring map, let
$$
\mathfrak p_0\subseteq\mathfrak p_1\subseteq\cdots\subseteq\mathfrak p_n
$$
be a finite chain of prime ideals in $A$, and let $\mathfrak q_0$ be a prime ideal of $B$ with $f^{-1}(\mathfrak q_0)=\mathfrak p_0$. Then there exist prime ideals
$$
\mathfrak q_0\subseteq\mathfrak q_1\subseteq\cdots\subseteq\mathfrak q_n
$$
of $B$ such that $f^{-1}(\mathfrak q_i)=\mathfrak p_i$ for every $i$.

## Facts & Assumptions

**Given:** An integral ring map $f:A\to B$, a finite prime chain $\mathfrak p_0\subseteq\cdots\subseteq\mathfrak p_n$ in $A$, and a prime $\mathfrak q_0$ of $B$ over $\mathfrak p_0$.

[L1] Assuming the Axiom of Choice, the going-up theorem lifts one prime extension step at a time ([[thm-going-up]]).

## Proof

**Proof technique:** induction on the chain length.

1.1 For $n=0$, the given prime $\mathfrak q_0$ already lifts the chain. [L1, base, given]

1.2 Fix $n\ge 0$ and assume the statement for chains of length $n$. Let $\mathfrak p_0\subseteq\cdots\subseteq\mathfrak p_n\subseteq\mathfrak p_{n+1}$ be a chain of length $n+1$. By the induction hypothesis, there are primes $\mathfrak q_0\subseteq\cdots\subseteq\mathfrak q_n$ over $\mathfrak p_0,\ldots,\mathfrak p_n$. [ih, given]

2.1 Apply [L1] to the inclusion $\mathfrak p_n\subseteq\mathfrak p_{n+1}$ and the prime $\mathfrak q_n$. This yields a prime $\mathfrak q_{n+1}\supseteq\mathfrak q_n$ with contraction $\mathfrak p_{n+1}$. [L1, step 1.2]

3.1 Step 1.1 is the base case, and steps 1.2 and 2.1 provide the induction step. Therefore every finite prime chain in $A$ lifts to one in $B$ once the first prime upstairs is fixed. [step 1.1, step 1.2, step 2.1, discharge-induction] ∎
