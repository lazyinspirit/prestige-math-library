---
id: lem-continued-fraction-convergent-recurrence
kind: lemma
title: "Convergents are given by the standard recurrences and tail formula"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergents-of-regular-continued-fraction, def-regular-continued-fraction, def-rat-operations, thm-recursion, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
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

Let $[a_0; a_1,\ldots,a_n]$ be a finite regular continued fraction, and let
$p_k,q_k$ be its convergent numerators and denominators as in
[[def-convergents-of-regular-continued-fraction]]. Then
$$[a_0; a_1,\ldots,a_n] = \frac{p_n}{q_n}.$$

More generally, for every real $t > 0$ one has
$$[a_0; a_1,\ldots,a_n,t] = \frac{t p_n + p_{n-1}}{t q_n + q_{n-1}},$$
where $[a_0; a_1,\ldots,a_n,t]$ means the finite continued fraction obtained by
appending the last tail $t$.

## Facts & Assumptions

**Given:** A finite regular continued fraction $[a_0; a_1,\ldots,a_n]$, the
convergent recurrences for $p_k,q_k$, and a real parameter $t > 0$.

[F1] A finite regular continued fraction is evaluated recursively by
$[a_n]=a_n$ and
$[a_0; a_1,\ldots,a_n]=a_0+1/[a_1;\ldots,a_n]$, while the convergents satisfy
$p_{-2}=0$, $p_{-1}=1$, $q_{-2}=1$, $q_{-1}=0$, and
$p_k=a_kp_{k-1}+p_{k-2}$, $q_k=a_kq_{k-1}+q_{k-2}$ for $k \ge 0$.
([[def-regular-continued-fraction]],
[[def-convergents-of-regular-continued-fraction]]).

[F2] If a subset of $\mathbb{N}$ contains $0$ and is closed under successor,
then it is all of $\mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 For $n=0$ one has. [given, F1, base, algebra]
$$[a_0,t] = a_0 + \frac{1}{t} = \frac{ta_0+1}{t} = \frac{tp_0+p_{-1}}{tq_0+q_{-1}},$$
because $p_0=a_0$, $q_0=1$, $p_{-1}=1$, and $q_{-1}=0$ by [F1]. [given, F1, base, algebra]

2.1 Assume the tail formula holds for a fixed length $n$. [step 1.1, F1, induction, algebra]
Put
$u:=a_{n+1}+1/t>0$. Then
$$[a_0; a_1,\ldots,a_{n+1},t] = [a_0; a_1,\ldots,a_n,u] = \frac{u p_n + p_{n-1}}{u q_n + q_{n-1}}$$
by the induction hypothesis, and multiplying numerator and denominator by $t$
gives
$$\frac{(a_{n+1}t+1)p_n+tp_{n-1}}{(a_{n+1}t+1)q_n+tq_{n-1}} = \frac{tp_{n+1}+p_n}{tq_{n+1}+q_n}$$
by the recurrences of [F1]. [step 1.1, F1, induction, algebra]

3.1 Steps 1.1 and 2.1 show, by induction on the length, that. [F2, step 1.1, step 2.1, discharge-induction]
$$[a_0; a_1,\ldots,a_n,t] = \frac{t p_n + p_{n-1}}{t q_n + q_{n-1}}$$
for every $n \ge 0$ and every $t>0$. [F2, step 1.1, step 2.1, discharge-induction]

4.1 Setting $t=a_{n+1}$ in step 3.1 yields. [step 3.1, F1, algebra]
$$[a_0; a_1,\ldots,a_{n+1}] = \frac{a_{n+1}p_n+p_{n-1}}{a_{n+1}q_n+q_{n-1}} = \frac{p_{n+1}}{q_{n+1}},$$
and renaming the index proves the finite-convergent formula. [step 3.1, F1, algebra] ∎
