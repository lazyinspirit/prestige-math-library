---
id: lem-qa-29-dyadic-parameters-terminate
kind: lemma
title: "Finite termination of the dyadic estimator parameter searches"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - thm-of-archimedean
  - lem-bernoulli-inequality
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the witnesses are obtained by one Archimedean bound and a finite search."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $a>0$ and $C>0$ be rational and let $k\ge1$ be an integer. Each of the following exact rational searches terminates:

1. increase an integer $j\ge0$ until $2^j a\ge1$;
2. after fixing $k$, increase an integer $m\ge0$ until $2^{2m}a^2\ge Ck$.

The first successful exponent is the least one satisfying its comparison. The second returns the least power of two $M=2^m$ with $M^2a^2\ge Ck$.

## Facts & Assumptions

**Given:** Positive rationals $a,C$ and integer $k\ge1$.

[F1] [[thm-of-archimedean]]: for every real $x$ there is a natural number $n$ with $x<n$.

[F2] [[lem-bernoulli-inequality]]: if $x\ge-1$ and $n$ is natural, then $(1+x)^n\ge1+nx$.

## Proof

1.1 Apply [F1] to $1/a$ and obtain a natural $n>1/a$. Then [F2] at $x=1$ gives $2^n=(1+1)^n\ge1+n>1/a$, so $2^na>1$. Thus the first search has a successful exponent no larger than $n$. [given, F1, F2, algebra]

1.2 After $k$ is fixed, apply [F1] to $Ck/(2a^2)$ and obtain a natural $m>Ck/(2a^2)$. By [F2] at exponent $2m$, $2^{2m}=(1+1)^{2m}\ge1+2m>Ck/a^2$, hence $(2^m)^2a^2>Ck$. Thus the second search has a successful exponent no larger than $m$. [given, F1, F2, algebra]

2.1 Each tested comparison is between rationals and is decided by finite integer arithmetic. Since step 1.1 or step 1.2 supplies a successful exponent, incrementing from zero reaches one after finitely many tests; returning at the first successful test returns the least such exponent. [given, step 1.1, step 1.2, construct] ∎
