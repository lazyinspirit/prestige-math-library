---
id: lem-continued-fraction-complete-quotient-formula
kind: lemma
title: "Complete-quotient tail formula"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-continued-fraction-complete-quotients, lem-continued-fraction-convergent-recurrence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
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

Let $\alpha$ be a real number, let $a_n$ and $\alpha_n$ be its continued-fraction
digits and complete quotients, and let $p_n/q_n$ be the convergents attached to
$a_0,a_1,\ldots$. Whenever $\alpha_{n+1}$ is defined,
$$\alpha = \frac{\alpha_{n+1}p_n + p_{n-1}}{\alpha_{n+1}q_n + q_{n-1}}.$$

## Facts & Assumptions

**Given:** A real number $\alpha$, its complete quotients $\alpha_n$, and its
continued-fraction digits $a_n$.

[F1] The complete quotients satisfy
$\alpha_n = a_n + 1/\alpha_{n+1}$ whenever $\alpha_{n+1}$ is defined.
([[def-continued-fraction-complete-quotients]]).

[F2] For every $t>0$,
$$[a_0; a_1,\ldots,a_n,t] = \frac{t p_n + p_{n-1}}{t q_n + q_{n-1}}.$$
([[lem-continued-fraction-convergent-recurrence]]).

## Proof

**Proof technique:** direct.

1.1 Repeatedly substituting the identities of [F1] yields. [given, F1, algebra]
$$\alpha = [a_0; a_1,\ldots,a_n,\alpha_{n+1}]$$
whenever $\alpha_{n+1}$ is defined. [given, F1, algebra]

2.1 Since every complete quotient after the first is $>1$, in particular $\alpha_{n+1}>0$. [step 1.1, F1, F2]
So step 1.1 and [F2] give
$$\alpha = \frac{\alpha_{n+1}p_n + p_{n-1}}{\alpha_{n+1}q_n + q_{n-1}}.$$
[step 1.1, F1, F2] ∎
