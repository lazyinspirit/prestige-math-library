---
id: lem-coprime-divides-product
kind: lemma
title: "If $\\gcd(a,b) = 1$ and $a \\mid bc$ then $a \\mid c$; and if $a \\mid c$, $b \\mid c$ and $\\gcd(a,b) = 1$ then $ab \\mid c$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-coprime, lem-coprime-criterion, lem-gcd-basic-values, def-common-divisor-and-gcd, lem-divisibility-basic, def-divides-in-z, thm-int-comm-ring, def-int-operations]
justified_by: []
forward_refs: [cex-divides-a-product-without-dividing-a-factor]
aliases: [lem-gauss-lemma-in-z]
landmark: false
short: "coprime and $a \\mid bc$ give $a \\mid c$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Euclid's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclid%27s_lemma"
    - title: "Coprime integers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Coprime_integers"
pipeline_run: null
---

## Statement

Let $a, b, c \in \mathbb{Z}$.

1. If $\gcd(a,b) = 1$ and $a \mid bc$, then $a \mid c$.
2. If $a \mid c$, $b \mid c$ and $\gcd(a,b) = 1$, then $ab \mid c$.

## Facts & Assumptions

**Given:** Integers $a, b, c$.

[L1] $a$ and $b$ are coprime exactly when $\gcd(a,b) = 1$, and this holds exactly when $ax + by = 1$ for some $x, y \in \mathbb{Z}$ ([[def-coprime]], [[lem-coprime-criterion]], [[def-common-divisor-and-gcd]]).

[L2] $\gcd(a,b) = \gcd(b,a)$ ([[lem-gcd-basic-values]]).

[L3] Divisibility is reflexive and transitive; if $d \mid u$ and $d \mid v$ then $d \mid ux + vy$ for all $x, y$; and $d \mid u$ implies $d \mid uw$ ([[lem-divisibility-basic]]).

[L4] $d \mid u$ means $u = dq$ for some $q \in \mathbb{Z}$ ([[def-divides-in-z]]).

[L5] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x \cdot 1 = x$, and multiplication distributes over addition ([[thm-int-comm-ring]], [[def-int-operations]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1. Assume $\gcd(a,b) = 1$ and $a \mid bc$, and fix $x, y$ with $ax + by = 1$. [L1, choose]

1.2 Claim 2. Assume $a \mid c$, $b \mid c$ and $\gcd(a,b) = 1$. Write $c = as$ with $s \in \mathbb{Z}$. [L4, choose]

2.1 Multiplying $ax + by = 1$ by $c$ gives $a(xc) + (bc)y = c$, using associativity, commutativity and distributivity. [step 1.1, L5]

3.1 Now $a \mid a$, hence $a \mid a(xc)$ by [L3]; and $a \mid bc$, hence $a \mid (bc)y$ by [L3]. Applying linearity to these two with coefficients $1$ and $1$ gives $a \mid a(xc) + (bc)y = c$. [step 1.1, step 2.1, L3, L5]

4.1 Then $b \mid c = as$, and $\gcd(b,a) = \gcd(a,b) = 1$ by [L2], so claim 1 applied with $b$, $a$, $s$ in place of $a$, $b$, $c$ gives $b \mid s$. [step 3.1, step 1.2, L2]

5.1 Write $s = bt$; then $c = as = a(bt) = (ab)t$, so $ab \mid c$. [step 1.2, step 4.1, L4, L5] ∎

## Remarks

- **No primality is used.** Claim 1 is exactly the statement usually met as
  Euclid's lemma with $a$ prime; what the proof needs is coprimality of $a$ with
  $b$, and primality of $a$ enters only later, as a way of *guaranteeing* that
  coprimality. This is why the lemma is homed here rather than with the primes.

- **Coprimality is essential in both claims.** Without it, $6 \mid 4 \cdot 9$
  while $6$ divides neither factor
  ([[cex-divides-a-product-without-dividing-a-factor]]); and $2 \mid 4$,
  $4 \mid 4$ but $2 \cdot 4 = 8 \nmid 4$.
