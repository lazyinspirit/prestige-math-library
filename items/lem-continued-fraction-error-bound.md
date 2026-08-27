---
id: lem-continued-fraction-error-bound
kind: lemma
title: "Convergent error bound"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergents-of-regular-continued-fraction, def-continued-fraction-complete-quotients, lem-continued-fraction-determinant-identity, lem-continued-fraction-complete-quotient-formula, thm-continued-fraction-algorithm-for-real-numbers, thm-rational-continued-fraction-termination]
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

Let $\alpha$ be an irrational real number, and let $p_n/q_n$ be its continued-
fraction convergents. Then, for every $n\ge0$,
$$\left|\alpha-\frac{p_n}{q_n}\right| < \frac{1}{q_nq_{n+1}} \le \frac{1}{q_n^2}.$$
Moreover,
$$\alpha-\frac{p_n}{q_n}$$
has sign $(-1)^n$, so the convergents alternate around $\alpha$.

## Facts & Assumptions

**Given:** An irrational real number $\alpha$, its continued-fraction digits
$a_n$, its complete quotients $\alpha_n$, and its convergents $p_n/q_n$.

[F1] An irrational real does not terminate under the continued-fraction
algorithm, so every complete quotient $\alpha_{n+1}$ is defined and
$$\alpha = \frac{\alpha_{n+1}p_n+p_{n-1}}{\alpha_{n+1}q_n+q_{n-1}}.$$
([[thm-rational-continued-fraction-termination]],
[[lem-continued-fraction-complete-quotient-formula]]).

[F2] Consecutive convergents satisfy
$p_nq_{n-1}-p_{n-1}q_n=(-1)^{n-1}$.
([[lem-continued-fraction-determinant-identity]]).

[F3] The convergent denominators satisfy $q_{-1}=0$, are positive for every
index $n\ge0$, and obey
$q_{n+1}=a_{n+1}q_n+q_{n-1}$
([[def-convergents-of-regular-continued-fraction]]).

[F4] For irrational $\alpha$, the algorithm does not terminate, so
$\alpha_{n+1}\ne a_{n+1}$; the defining floor inequality therefore gives
$1\le a_{n+1}<\alpha_{n+1}$
([[thm-rational-continued-fraction-termination]],
[[def-continued-fraction-complete-quotients]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2]. [F1, F2, F3, F4, algebra]
$$\alpha-\frac{p_n}{q_n} = \frac{q_n(\alpha_{n+1}p_n+p_{n-1})-p_n(\alpha_{n+1}q_n+q_{n-1})} {q_n(\alpha_{n+1}q_n+q_{n-1})} = \frac{(-1)^n}{q_n(\alpha_{n+1}q_n+q_{n-1})}.$$
The denominator is positive by [F3] and [F4], so the sign is $(-1)^n$.
[F1, F2, F3, F4, algebra]

2.1 Fact [F4] gives $\alpha_{n+1}>a_{n+1}$, and [F3] gives. [step 1.1, F3, F4, algebra]
$$\alpha_{n+1}q_n+q_{n-1} > a_{n+1}q_n+q_{n-1} = q_{n+1}.$$
Taking absolute values in step 1.1 yields
$$\left|\alpha-\frac{p_n}{q_n}\right| < \frac{1}{q_nq_{n+1}}.$$
[step 1.1, F3, F4, algebra]

3.1 Facts [F3] and [F4] give $q_{n+1}\ge q_n>0$, so the second inequality is immediate. [F3, F4, step 2.1, algebra]
$$\frac{1}{q_nq_{n+1}}\le \frac{1}{q_n^2}$$
[F3, F4, step 2.1, algebra] ∎
