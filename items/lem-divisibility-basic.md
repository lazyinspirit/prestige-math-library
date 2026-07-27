---
id: lem-divisibility-basic
kind: lemma
title: "Divisibility is reflexive and transitive on $\\mathbb{Z}$, and is linear: if $d \\mid a$ and $d \\mid b$ then $d \\mid ax + by$ for all integers $x, y$; also $d \\mid a$ implies $d \\mid ac$, $-d \\mid a$ and $d \\mid -a$"
status: published
origin: session
deps: [def-divides-in-z, def-integers, def-int-operations, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: false
short: "reflexive, transitive, linear"
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
    - title: "Divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divisor"
pipeline_run: null
---

## Statement

Let $a, b, c, d, x, y \in \mathbb{Z}$ and let $\mid$ be divisibility
([[def-divides-in-z]]). Then

1. **reflexivity**: $a \mid a$;
2. **transitivity**: $d \mid a$ and $a \mid b$ imply $d \mid b$;
3. **linearity**: $d \mid a$ and $d \mid b$ imply $d \mid ax + by$; in particular
   $d \mid a + b$ and $d \mid a - b$;
4. $d \mid a$ implies $d \mid ac$;
5. $d \mid a$ implies $-d \mid a$ and $d \mid -a$.

Consequently the four statements $d \mid a$, $-d \mid a$, $d \mid -a$ and
$-d \mid -a$ are equivalent.

## Facts & Assumptions

**Given:** Integers $a, b, c, d, x, y$.

[L1] $d \mid a$ means $a = dq$ for some $q \in \mathbb{Z}$; $a = a \cdot 1$ exhibits $a \mid a$ ([[def-divides-in-z]]).

[L2] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x + 0 = x$, $x \cdot 1 = x$, multiplication distributes over addition, and every $x$ has an additive inverse $-x$, with $-(-x) = x$, $(-x)y = -(xy)$ and $(-x)(-y) = xy$; we write $u - v$ for $u + (-v)$ ([[thm-int-comm-ring]], [[def-int-operations]]).

## Proof

**Proof technique:** direct.

1.1 Reflexivity: $a = a \cdot 1$, so $a \mid a$. [L1, L2]

1.2 Transitivity: suppose $a = dm$ and $b = an$. Then $b = (dm)n = d(mn)$ by associativity, so $d \mid b$. [L1, L2]

1.3 Linearity: suppose $a = dm$ and $b = dn$. Then $ax + by = (dm)x + (dn)y = d(mx + ny)$ by associativity, commutativity and distributivity, so $d \mid ax + by$. [L1, L2]

1.4 Clause 4: suppose $a = dm$. Then $ac = (dm)c = d(mc)$, so $d \mid ac$. [L1, L2]

1.5 Clause 5: suppose $a = dm$. Then $a = (-d)(-m)$, so $-d \mid a$; and $-a = -(dm) = d(-m)$, so $d \mid -a$. [L1, L2]

2.1 The two special cases in clause 3: taking $x = y = 1$ gives $d \mid a + b$, and taking $x = 1$, $y = -1$ gives $d \mid a \cdot 1 + b \cdot (-1) = a - b$. [step 1.3, L2]

2.2 The four equivalent forms: clause 5 gives $d \mid a \Rightarrow -d \mid a$ and $d \mid a \Rightarrow d \mid -a$; applying each to $-d$ in place of $d$, or to $-a$ in place of $a$, and using $-(-x) = x$, gives the reverse implications, so all four statements are equivalent. [step 1.5, L2]

3.1 Clauses 1 to 5 and the two consequences are established. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1, step 2.2] ∎

## Remarks

- **Linearity is the workhorse of the whole page.** Every later argument that a
  common divisor of $a$ and $b$ divides some combination of them — Bézout's
  identity, the Euclidean step, the coprimality criterion — is clause 3 applied
  once.

- **Divisibility ignores signs, and that is why $\gcd$ can be normalised.**
  Clause 5 says the divisors of $a$ and of $-a$ are the same set, so
  $d \mid a$ holds exactly when $d \mid |a|$, whichever of the two values $|a|$
  takes ([[def-int-abs]]). That is the observation behind
  $\gcd(a,b) = \gcd(|a|,|b|)$ in [[lem-gcd-basic-values]].
