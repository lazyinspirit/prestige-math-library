---
id: lem-continued-fraction-determinant-identity
kind: lemma
title: "Determinant identity for consecutive convergents"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergents-of-regular-continued-fraction, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Let $p_n/q_n$ be the convergents of a regular continued fraction. Then for every
$n \ge 0$,
$$p_n q_{n-1} - p_{n-1} q_n = (-1)^{n-1}.$$
Consequently, for every $n \ge 1$,
$$\frac{p_n}{q_n} - \frac{p_{n-1}}{q_{n-1}} = \frac{(-1)^{n-1}}{q_n q_{n-1}}.$$

## Facts & Assumptions

**Given:** A regular continued fraction with convergent sequences $p_n,q_n$.

[F1] The convergents satisfy
$p_{-2}=0$, $p_{-1}=1$, $q_{-2}=1$, $q_{-1}=0$, and
$p_n=a_n p_{n-1}+p_{n-2}$, $q_n=a_n q_{n-1}+q_{n-2}$ for $n \ge 0$.
([[def-convergents-of-regular-continued-fraction]]).

[F2] If a subset of $\mathbb{N}$ contains $0$ and is closed under successor,
then it is all of $\mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 At $n=0$ one has. [given, F1, base, algebra]
$$p_0q_{-1}-p_{-1}q_0 = a_0\cdot 0 - 1 \cdot 1 = -1 = (-1)^{-1}.$$
[given, F1, base, algebra]

1.2 If $D_n:=p_nq_{n-1}-p_{n-1}q_n$, then the recurrences of [F1] give. [F1, induction, algebra]
$$D_{n+1} = (a_{n+1}p_n+p_{n-1})q_n - p_n(a_{n+1}q_n+q_{n-1}) = -D_n.$$
So the sign flips at each successor step. [F1, induction, algebra]

2.1 Steps 1.1 and 1.2 imply by induction that. [F2, step 1.1, step 1.2, discharge-induction]
$$D_n = (-1)^{n-1}$$
for every $n \ge 0$. [F2, step 1.1, step 1.2, discharge-induction]

3.1 For $n \ge 1$. [step 2.1, algebra]
$$\frac{p_n}{q_n}-\frac{p_{n-1}}{q_{n-1}} = \frac{p_nq_{n-1}-p_{n-1}q_n}{q_nq_{n-1}} = \frac{(-1)^{n-1}}{q_nq_{n-1}}$$
by step 2.1. [step 2.1, algebra] ∎
