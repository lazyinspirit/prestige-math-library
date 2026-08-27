---
id: cor-continued-fraction-convergents-are-reduced
kind: corollary
title: "Convergents are reduced fractions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-continued-fraction-determinant-identity, thm-bezout-identity]
justified_by: []
aliases: []
landmark: false
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
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "William Stein, Elementary Number Theory: Primes, Congruences, and Secrets"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

Every convergent $p_n/q_n$ of a regular continued fraction is in lowest terms.
Moreover, for each $n \ge 0$ the two vectors
$$(q_n,p_n),\qquad (q_{n+1},p_{n+1})$$
form a $\mathbb{Z}$-basis of $\mathbb{Z}^2$.

## Facts & Assumptions

**Given:** A regular continued fraction and its convergents $p_n/q_n$.

[F1] Consecutive convergents satisfy
$p_nq_{n-1}-p_{n-1}q_n=(-1)^{n-1}$ for $n \ge 0$.
([[lem-continued-fraction-determinant-identity]]).

[F2] If integers $a,b$ are not both $0$, then $\gcd(a,b)$ is an integer linear
combination of $a$ and $b$ ([[thm-bezout-identity]]).

## Proof

**Proof technique:** direct.

1.1 Let $d$ be a common divisor of $p_n$ and $q_n$. [F1, F2, given]
Then $d$ divides every
integer linear combination of $p_n$ and $q_n$, in particular
$p_nq_{n-1}-p_{n-1}q_n=(-1)^{n-1}$ by [F1]. Hence $d$ divides $1$, so $d=1$ and
$p_n/q_n$ is reduced. [F1, F2, given]

1.2 The determinant of the matrix with columns $(q_n,p_n)$ and $(q_{n+1},p_{n+1})$ is. [F1, algebra]
$$q_n p_{n+1} - p_n q_{n+1} = (-1)^n$$
by [F1]. Therefore
$$\begin{pmatrix}u\\v\end{pmatrix} = (-1)^n(up_{n+1}-vq_{n+1})\begin{pmatrix}q_n\\p_n\end{pmatrix} + (-1)^n(vq_n-up_n)\begin{pmatrix}q_{n+1}\\p_{n+1}\end{pmatrix}$$
for every $(u,v)\in\mathbb{Z}^2$, so the two columns span $\mathbb{Z}^2$ over
$\mathbb{Z}$. [F1, algebra]

2.1 Steps 1.1 and 1.2 are exactly the two assertions. [step 1.1, step 1.2] ∎
