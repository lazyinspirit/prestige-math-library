---
id: def-convergents-of-regular-continued-fraction
kind: definition
title: "Convergents of a regular continued fraction"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-continued-fraction, def-rationals, def-rat-operations, thm-recursion]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "William Stein, Elementary Number Theory: Primes, Congruences, and Secrets"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Definition

Let $a_0,a_1,\ldots$ be the digit sequence of a regular continued fraction
([[def-regular-continued-fraction]]), terminating at $a_N$ in the finite case.
Define integers
$p_n,q_n$ by
$$p_{-2}=0,\quad p_{-1}=1,\quad q_{-2}=1,\quad q_{-1}=0,$$
and, for every index $n\ge0$ for which the digit $a_n$ exists,
$$p_n = a_n p_{n-1} + p_{n-2},\qquad q_n = a_n q_{n-1} + q_{n-2}.$$

The denominators are positive at every digit index: $q_0=1$, and if the digit
$a_1$ exists then $q_1=a_1>0$; thereafter
$q_n=a_nq_{n-1}+q_{n-2}>0$ by induction because $a_n>0$ and the preceding
denominators are nonnegative. Thus the quotient below is defined in
$\mathbb Q$.

The rational number $p_n/q_n$ is the **$n$-th convergent**. The initial labels
$-2$ and $-1$ belong only to this recurrence convention; they do not extend the
digit sequence itself to negative indices.
