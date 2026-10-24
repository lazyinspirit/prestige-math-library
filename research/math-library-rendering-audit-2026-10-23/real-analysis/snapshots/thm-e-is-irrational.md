---
id: thm-e-is-irrational
kind: theorem
title: "The number $e$ is irrational"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-exponential-factorial-tail-bound, def-real-exponential-function-and-e, def-rationals, def-integers, def-factorial-and-falling-factorial, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, lem-rat-positive-denominator, lem-nat-embeds-int, lem-int-embeds-rat, lem-of-q-embeds, thm-binomial-closed-formula, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "MIT Proofs in Analysis and Probability, Lecture 2 notes"
      url: "https://math.mit.edu/classes/proofsiap/notes/Lecture2.pdf"
    - title: "LSU MATH 7230, Homework 1"
      url: "https://www.math.lsu.edu/~mahlburg/teaching/handouts/2018-7230/HW1.pdf"
pipeline_run: null
---

## Statement

The number $e$ is irrational.

## Facts & Assumptions

**Given:** The series definition of $e$ ([[def-real-exponential-function-and-e]]).

[L1] Factorials are nonzero naturals and obey their recurrence. If $k\le n$, then $\binom nk k!(n-k)!=n!$, so $k!$ divides $n!$ ([[def-factorial-and-falling-factorial]], [[thm-binomial-closed-formula]]). Every positive natural has a positive, hence nonzero, canonical real image, and the canonical map preserves products ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L2] The exponential factorial tail is bounded by [[lem-exponential-factorial-tail-bound]].

[L3] Every rational has an integer representative $p/q$ with positive denominator; every positive integer is the image of a unique natural $q\ge1$. The embeddings $\mathbb N\hookrightarrow\mathbb Z\hookrightarrow\mathbb Q\hookrightarrow\mathbb R$ are injective, preserve arithmetic and order, and the integers are closed under finite sums and differences ([[lem-rat-positive-denominator]], [[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-of-q-embeds]], [[thm-int-comm-ring]]).

## Proof

**Proof technique:** contradiction.

1.1 Assume $e\in\mathbb Q$. By [L3], write $e=p/q$ in $\mathbb R$ with $p\in\mathbb Z$ and $q\in\mathbb N$, $q\ge1$, using the canonical embeddings. Choose a natural $n\ge\max\{q,2\}$ ([[thm-of-archimedean]]).  [assume-contra, L3, choose]

2.1 Put $A:=\iota(n!)\left(e-\sum_{k=0}^{n}1/\iota(k!)\right)$. Every tail term is positive, so $A>0$. Applying [L2] with $x=1$ and $N=n$, then using the factorial recurrence, gives $$ A\le \frac{2\iota(n!)}{\iota((n+1)!)} =\frac2{\iota(n+1)} \le\frac23<1 $$ because $n\ge2$.  [step 1.1, L1, L2, algebra]

3.1 The number $A$ from step 2.1 is an embedded integer. Indeed, for each $0\le k\le n$, [L1] gives a natural $s_k$ with $n!=k!s_k$. Also $q!=m!q$ for the natural $m$ with $q=m+1$, and [L1] at $k=q$ gives $q!\mid n!$; hence $n!=qr$ for some natural $r$. By [L3] and multiplicativity of the embeddings, $$\iota(n!)e=\widehat{pr},\qquad \frac{\iota(n!)}{\iota(k!)}=\iota(s_k),$$ where $\widehat{pr}$ is the real image of the integer $pr$. Therefore $A$ is a difference of embedded integers and is itself an embedded integer.  [step 1.1, L1, L3, algebra]

4.1 Since the embedding preserves order, no embedded integer lies strictly between $0$ and $1$, contradicting steps 3.1 and 2.1. Therefore $e\notin\mathbb Q$.  [step 3.1, step 2.1, L3, discharge-contradiction] ∎
