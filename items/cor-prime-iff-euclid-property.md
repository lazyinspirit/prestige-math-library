---
id: cor-prime-iff-euclid-property
kind: corollary
title: "For an integer $p > 1$: $p$ is prime if and only if, for all integers $a$ and $b$, $p \\mid ab$ implies $p \\mid a$ or $p \\mid b$"
status: draft
origin: session
deps: [thm-euclids-lemma, def-prime, def-divides-in-z, lem-divisibility-basic,
       lem-associates-characterisation, lem-units-of-z, lem-int-cancellation,
       def-int-abs, lem-int-abs-properties, def-integers, def-int-operations,
       def-int-order, thm-int-comm-ring, thm-int-ordered-ring, def-natural-numbers,
       lem-nat-embeds-int]
justified_by: []
forward_refs: [cex-hilbert-monoid-factorisation-not-unique]
aliases: []
landmark: false
short: "prime iff the Euclid property"
proof_strategy: direct
verification:
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
    - title: "Prime number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Prime_number"
pipeline_run: null
---

## Statement

Let $p \in \mathbb{Z}$ with $p > 1$. The following are equivalent:

1. $p$ is prime ([[def-prime]]);
2. for all $a, b \in \mathbb{Z}$, $p \mid ab$ implies $p \mid a$ or $p \mid b$
   ([[def-divides-in-z]]).

## Facts & Assumptions

**Given:** An integer $p$ with $p > 1$.

[L1] $p$ is prime exactly when $p > 1$ and every positive divisor $d$ of $p$ satisfies $d = 1$ or $d = p$ ([[def-prime]]).

[L2] If $q$ is prime and $q \mid uv$ then $q \mid u$ or $q \mid v$ ([[thm-euclids-lemma]]).

[L3] $u \mid v$ and $v \mid u$ together hold exactly when $|u| = |v|$, and exactly when $v = wu$ for a unit $w \in \{1,-1\}$ ([[lem-associates-characterisation]], [[lem-units-of-z]]).

[L4] $u \mid 1$ exactly when $u = 1$ or $u = -1$ ([[lem-units-of-z]]).

[L5] If $xz = yz$ and $z \ne 0$ then $x = y$ ([[lem-int-cancellation]]).

[L6] $d \mid u$ means $u = dq$ for some $q \in \mathbb{Z}$; divisibility is reflexive ([[def-divides-in-z]], [[lem-divisibility-basic]]).

[L7] $\mathbb{Z}$ is a commutative ring: multiplication is associative and commutative, $x \cdot 1 = x$, and every $x$ has an additive inverse $-x$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L8] The order on $\mathbb{Z}$ is total, antisymmetric and transitive and is compatible with addition; $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L9] The embedding $\iota : \mathbb{N} \to \mathbb{Z}$ is injective, preserves the order, and has as image exactly the nonnegative integers, with $\iota(0) = 0$ and $\iota(1) = 1$; and $0 \ne 1$ in $\mathbb{N}$ ([[lem-nat-embeds-int]], [[def-natural-numbers]]).

[L10] $|x| = x$ when $x \ge 0$ and $|x| = -x$ when $x < 0$; $|x| \ge 0$ ([[def-int-abs]], [[lem-int-abs-properties]]).

## Proof

**Proof technique:** direct.

1.1 $0 < 1$: $1 = \iota(1)$ lies in the image of $\iota$, so $1 \ge 0$, and $1 \ne 0$ because $\iota$ is injective and $0 \ne 1$ in $\mathbb{N}$. Adding $-1$ throughout gives $-1 < 0$. [L7, L8, L9]

1.2 Claim 1 implies claim 2: if $p$ is prime this is exactly [L2]. [L2]

1.3 Assume claim 2, and let $d$ be a positive divisor of $p$; fix $c \in \mathbb{Z}$ with $p = dc$. [L6, choose]

2.1 $p > 1 > 0$, so $p > 0$ and $p \ne 0$. [step 1.1, L8]

2.2 Then $p \mid dc$, since $p \mid p$ and $p = dc$; so claim 2 applied with $a := d$ and $b := c$ gives $p \mid d$ or $p \mid c$. [step 1.3, L6]

3.1 Suppose $p \mid d$. Since also $d \mid p$, [L3] gives $|d| = |p|$, hence $d = wp$ for a unit $w \in \{1,-1\}$. If $w = -1$ then $d = -p < 0$, contradicting $d > 0$; so $w = 1$ and $d = p$. [step 2.1, step 1.3, step 2.2, L3, L7, L8, L10]

3.2 Suppose instead $p \mid c$, and fix $e$ with $c = pe$. Then $1 \cdot p = p = dc = d(pe) = (de) \cdot p$, and $p \ne 0$, so cancellation gives $de = 1$. Hence $d \mid 1$, so $d = 1$ or $d = -1$, and $d > 0 > -1$ leaves $d = 1$. [step 1.1, step 2.1, step 1.3, step 2.2, L4, L5, L6, L7, L8]

4.1 By step 2.2 one of the two cases occurs, so every positive divisor $d$ of $p$ satisfies $d = 1$ or $d = p$; together with the standing hypothesis $p > 1$ this says $p$ is prime, so claim 2 implies claim 1. [step 2.2, step 3.1, step 3.2, L1]

5.1 The two implications of steps 1.2 and 4.1 give the equivalence. [step 1.2, step 4.1] ∎

## Remarks

- **Both directions need $p > 1$, and it is a standing hypothesis rather than part of either claim.** Claim 2 alone does not force primality: $p = 1$ satisfies it vacuously, since $1 \mid a$ for every $a$, and so does $p = 0$, because $0 \mid ab$ forces $ab = 0$ and hence $a = 0$ or $b = 0$ ([[lem-int-cancellation]]). Neither is prime, and the clause $p > 1$ of [[def-prime]] is what excludes them.

- **The two halves of the equivalence are the two notions a general theory keeps apart.** Claim 1 says $p$ cannot be split into smaller positive factors; claim 2 says $p$, when it divides a product, already divides a factor. In $\mathbb{Z}$ they coincide, and that coincidence is what makes unique factorisation work; the counterexample [[cex-hilbert-monoid-factorisation-not-unique]] on the companion page shows what fails in a setting where the analogue of claim 1 holds and the analogue of claim 2 does not.
