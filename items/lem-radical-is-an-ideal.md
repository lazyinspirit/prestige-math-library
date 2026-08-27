---
id: lem-radical-is-an-ideal
kind: lemma
title: "The radical of an ideal is an ideal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-radical-of-an-ideal, thm-binomial-theorem-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §2 Ideals"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §2 Ideals"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $I\trianglelefteq R$ be an ideal. Then $\sqrt{I}$ is an ideal of $R$ containing $I$. If $J\trianglelefteq R$ is another ideal with $I\subseteq J$, then $\sqrt{I}\subseteq\sqrt{J}$. Moreover,
$$
\sqrt{\sqrt{I}}=\sqrt{I}.
$$

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I\trianglelefteq R$, and, for the order-preservation clause, an ideal $J\trianglelefteq R$ with $I\subseteq J$.

[L1] An element lies in $\sqrt{I}$ exactly when some positive power lies in $I$ ([[def-radical-of-an-ideal]]).

[L2] In a commutative ring, $(x+y)^n=\sum_{k=0}^n \binom{n}{k}x^ky^{n-k}$ for every natural number $n$ ([[thm-binomial-theorem-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 If $a\in I$, then $a^1\in I$, so $a\in\sqrt{I}$ by [L1]. Thus $I\subseteq\sqrt{I}$. If $r\in R$ and $x\in\sqrt{I}$, choose $n\ge 1$ with $x^n\in I$. Then $(rx)^n=r^n x^n\in I$, so $rx\in\sqrt{I}$. [L1, given, algebra]

1.2 Let $x,y\in\sqrt{I}$. Choose $m,n\ge 1$ with $x^m\in I$ and $y^n\in I$, and set $N=m+n$. By [L2], every term of $(x+y)^N$ has the form $\binom{N}{k}x^ky^{N-k}$. For each $k$, either $k\ge m$ or $N-k\ge n$; otherwise $k\le m-1$ and $N-k\le n-1$, which would force $N\le m+n-2$. Hence each term lies in $I$, so $(x+y)^N\in I$ and $x+y\in\sqrt{I}$. [L1, L2, choose, algebra]

2.1 Steps 1.1 and 1.2 show that $\sqrt{I}$ is an ideal containing $I$. If $I\subseteq J$ and $x\in\sqrt{I}$, any power of $x$ lying in $I$ also lies in $J$, so $x\in\sqrt{J}$. Thus radical is order-preserving. [step 1.1, step 1.2, L1]

3.1 If $x\in\sqrt{\sqrt{I}}$, choose $m\ge 1$ with $x^m\in\sqrt{I}$, and then choose $n\ge 1$ with $x^{mn}\in I$. By [L1], this means $x\in\sqrt{I}$. Together with step 2.1 applied to $I\subseteq\sqrt{I}$, this proves $\sqrt{\sqrt{I}}=\sqrt{I}$. [L1, step 2.1, choose, algebra]

4.1 The radical construction therefore sends ideals to radical ideals, contains the original ideal, and is order-preserving and idempotent. [step 2.1, step 3.1] ∎
