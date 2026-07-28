---
id: thm-euclids-lemma
kind: theorem
title: "Euclid's lemma: if $p$ is prime and $p \\mid ab$ then $p \\mid a$ or $p \\mid b$"
status: published
origin: session
deps: [def-prime, lem-prime-not-dividing-is-coprime, lem-coprime-divides-product,
       def-coprime, def-common-divisor-and-gcd, def-divides-in-z,
       lem-divisibility-basic, def-integers, def-int-operations, thm-int-comm-ring]
justified_by: []
aliases: [thm-euclid-lemma]
landmark: true
short: "$p \\mid ab \\Rightarrow p \\mid a$ or $p \\mid b$"
proof_strategy: cases
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Euclid's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclid%27s_lemma"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]) and let $a, b \in \mathbb{Z}$. If
$p \mid ab$ ([[def-divides-in-z]]) then

$$p \mid a \qquad \text{or} \qquad p \mid b .$$

## Facts & Assumptions

**Given:** A prime $p$ and integers $a, b$ with $p \mid ab$.

[L1] For a prime $p$ and any integer $u$: if $p \nmid u$ then $\gcd(p,u) = 1$ ([[lem-prime-not-dividing-is-coprime]], [[def-common-divisor-and-gcd]]).

[L2] If $\gcd(u,v) = 1$ and $u \mid vw$ then $u \mid w$, for all integers $u, v, w$ ([[lem-coprime-divides-product]]).

[L3] $u$ and $v$ are coprime exactly when $\gcd(u,v) = 1$ ([[def-coprime]]).

[L4] $d \mid u$ means $u = dq$ for some $q \in \mathbb{Z}$; divisibility is reflexive and transitive ([[def-divides-in-z]], [[lem-divisibility-basic]]).

[L5] $\mathbb{Z}$ is a commutative ring; in particular multiplication is commutative and associative ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L6] $p > 1$, and every positive divisor of $p$ is $1$ or $p$ ([[def-prime]]).

## Proof

**Proof technique:** cases.

1.1 Suppose $p \mid a$. Then the disjunction $p \mid a$ or $p \mid b$ holds on its first alternative, and there is nothing further to prove. [assume-case div]

1.2 Suppose instead $p \nmid a$. Then $\gcd(p,a) = 1$, so $p$ and $a$ are coprime. [assume-case nodiv, L1, L3, L6]

2.1 Apply [L2] with $u := p$, $v := a$ and $w := b$. Its two hypotheses are exactly $\gcd(p,a) = 1$, which is step 1.2, and $p \mid ab$, which is given; its conclusion is $p \mid b$. [assume-case nodiv, step 1.2, L2, L4, L5]

3.1 Either $p \mid a$ or $p \nmid a$, so the two cases are exhaustive; in the first $p \mid a$ and in the second $p \mid b$, which is the assertion. [step 1.1, step 2.1, cases-exhaustive] ∎

## Remarks

- **This is a two-line consequence, and that is the point.** The work was done one page earlier: [[lem-coprime-divides-product]] proves that $\gcd(u,v) = 1$ together with $u \mid vw$ forces $u \mid w$, and its own Remarks record that "no primality is used" in it — the proof is pure Bézout. The summary of the page carrying it says in as many words that "primes, Euclid's lemma and unique factorisation are **not** proved here; they belong to a later page". This is that page, and the only new ingredient is [[lem-prime-not-dividing-is-coprime]], which converts primality into the coprimality that lemma actually consumes.

- **The hypothesis cannot be weakened to $p > 1$.** For a composite modulus the conclusion fails, and the published witness is [[cex-divides-a-product-without-dividing-a-factor]]: $6 \mid 4 \cdot 9$ while $6 \nmid 4$ and $6 \nmid 9$. Its Remarks identify the failure as exactly the failure of coprimality, which is what primality supplies here.

- **The converse holds too.** For $p > 1$ the property proved here characterises primality; that is [[cor-prime-iff-euclid-property]], next on this page.
