---
id: def-coprime
kind: definition
title: "Coprime integers: $\\gcd(a,b) = 1$"
status: draft
origin: session
deps: [def-common-divisor-and-gcd, lem-gcd-basic-values, lem-units-of-z, def-int-abs, lem-int-abs-properties]
justified_by: []
aliases: [def-relatively-prime]
landmark: true
short: "$\\gcd(a,b) = 1$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Coprime integers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Coprime_integers"
pipeline_run: null
---

## Definition

Integers $a$ and $b$ are **coprime**, or **relatively prime**, when

$$\gcd(a,b) \;=\; 1$$

([[def-common-divisor-and-gcd]]). The relation is symmetric, since
$\gcd(a,b) = \gcd(b,a)$ ([[lem-gcd-basic-values]]), and unchanged by signs, since
$\gcd(a,b) = \gcd(|a|,|b|)$.

**Boundary values.** $\mathbb{N}$ contains $0$ and $\mathbb{Z}$ contains $0$ and
$1$, so the three degenerate pairs are recorded explicitly, each read off
[[lem-gcd-basic-values]]:

- $a$ and $1$ are coprime for **every** integer $a$, since $\gcd(a,1) = 1$;
  in particular $0$ and $1$ are coprime.
- $0$ and $b$ are coprime exactly when $b = 1$ or $b = -1$. Indeed
  $\gcd(0,b) = \gcd(b,0) = |b|$, so coprimality says $|b| = 1$, and by
  [[lem-int-abs-properties]] together with the case split of [[def-int-abs]] this
  holds exactly for $b = 1$ and $b = -1$, the two units of $\mathbb{Z}$
  ([[lem-units-of-z]]).
- $0$ and $0$ are **not** coprime, since $\gcd(0,0) = 0$ by the convention of
  [[def-common-divisor-and-gcd]], and $0 \ne 1$: if $1$ were $0$ then
  $-1 = -0 = 0 = 1$, contradicting the two units being distinct
  ([[lem-units-of-z]]).

## Remarks

- **Coprime is a statement about the pair, not about either integer.** Neither
  $a$ nor $b$ need be prime, and primality is not defined anywhere on this page:
  $4$ and $9$ are coprime and neither is prime. What coprimality says is that the
  only common divisors are the units $1$ and $-1$
  ([[lem-coprime-criterion]]).

- **Why it is worth a name before primes appear.** The lemma that carries the
  weight in elementary number theory — if $a \mid bc$ and $a$ is coprime to $b$
  then $a \mid c$ ([[lem-coprime-divides-product]]) — needs coprimality and no
  primality at all. Primes enter later, and their key property is a special case
  of that lemma rather than an independent fact.
