---
id: thm-continued-fraction-algorithm-for-real-numbers
kind: theorem
title: "The continued-fraction algorithm for real numbers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-continued-fraction-complete-quotients, lem-continued-fraction-complete-quotient-formula, lem-continued-fraction-determinant-identity, thm-convergence-of-infinite-regular-continued-fractions]
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

Let $\alpha$ be a real number. The complete-quotient algorithm of
[[def-continued-fraction-complete-quotients]] either terminates with a finite
regular continued fraction equal to $\alpha$, or produces an infinite regular
continued fraction whose convergents converge to $\alpha$.

## Facts & Assumptions

**Given:** A real number $\alpha$, its complete quotients $\alpha_n$, its digits
$a_n$, and its convergents $p_n/q_n$.

[F1] Whenever $\alpha_{n+1}$ is defined,
$$\alpha = \frac{\alpha_{n+1}p_n+p_{n-1}}{\alpha_{n+1}q_n+q_{n-1}}.$$
([[lem-continued-fraction-complete-quotient-formula]]).

[F2] Consecutive convergents satisfy
$p_nq_{n-1}-p_{n-1}q_n=(-1)^{n-1}$.
([[lem-continued-fraction-determinant-identity]]).

[F3] Every infinite regular continued fraction has a unique value, namely the
common limit of its even and odd convergent subsequences.
([[thm-convergence-of-infinite-regular-continued-fractions]]).

## Proof

**Proof technique:** direct.

1.1 If $\alpha_N=a_N$ for some $N$, then repeated substitution of the identities $\alpha_n=a_n+1/\alpha_{n+1}$ for $n<N$ yields. [given, algebra]
$$\alpha=[a_0; a_1,\ldots,a_N].$$
For $N\ge1$ the last digit $a_N=\alpha_N$ is positive because every complete
quotient after the first is greater than $1$, so the output is a finite regular
continued fraction. [given, algebra]

1.2 Suppose the algorithm never terminates. Then every $\alpha_{n+1}$ is defined and satisfies $\alpha_{n+1}>a_{n+1}\ge1$, so [F1] and [F2] give. [F1, F2, algebra]
$$\alpha-\frac{p_n}{q_n} = \frac{p_{n-1}q_n-p_nq_{n-1}}{q_n(\alpha_{n+1}q_n+q_{n-1})} = \frac{(-1)^n}{q_n(\alpha_{n+1}q_n+q_{n-1})}.$$
Hence
$$\left|\alpha-\frac{p_n}{q_n}\right| < \frac{1}{q_n(a_{n+1}q_n+q_{n-1})} = \frac{1}{q_nq_{n+1}}.$$ [F1, F2, algebra]

2.1 The infinite digit sequence $a_0,a_1,\ldots$ is therefore a regular continued fraction, so by [F3] its convergents $p_n/q_n$ converge to some real number $x$. [F3, step 1.2, algebra]
Step 1.2 shows $\alpha-p_n/q_n\to0$, and therefore
$$|\alpha-x| \le \left|\alpha-\frac{p_n}{q_n}\right| + \left|\frac{p_n}{q_n}-x\right|\to0.$$
Thus $\alpha=x$. [F3, step 1.2, algebra]

3.1 Step 1.1 handles the terminating case and step 2.1 the nonterminating case,
so the algorithm always reconstructs the original real number. [step 1.1, step 2.1] ∎
