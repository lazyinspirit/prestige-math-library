---
id: cor-division-algorithm-nonzero-divisor
kind: corollary
title: "Division with remainder for any nonzero divisor: for $a \\in \\mathbb{Z}$ and $b \\ne 0$ there are unique $q, r \\in \\mathbb{Z}$ with $a = qb + r$ and $0 \\le r < |b|$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-division-algorithm-in-z, def-int-abs, lem-int-abs-properties, def-divides-in-z, def-integers, def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring]
justified_by: []
aliases: []
landmark: false
short: "$a = qb + r$, $0 \\le r < |b|$"
proof_strategy: cases
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
    - title: "Euclidean division (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_division"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{Z}$ with $b \ne 0$. Then there is exactly one pair $(q,r)$
of integers with

$$a \;=\; qb + r, \qquad 0 \le r < |b|,$$

the absolute value being that of [[def-int-abs]]. Moreover $b \mid a$
([[def-divides-in-z]]) holds exactly when $r = 0$.

## Facts & Assumptions

**Given:** Integers $a$ and $b$ with $b \ne 0$.

[L1] For $a \in \mathbb{Z}$ and $b' > 0$ there is exactly one pair $(Q,r)$ of integers with $a = Q b' + r$ and $0 \le r < b'$ ([[thm-division-algorithm-in-z]]).

[L2] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x + 0 = x$, $x \cdot 1 = x$, multiplication distributes over addition, and every $x$ has an additive inverse $-x$, with $-(-x) = x$ and $(-x)(-y) = xy$ ([[thm-int-comm-ring]], [[def-int-operations]]).

[L3] The order on $\mathbb{Z}$ is total, antisymmetric and transitive; $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L4] $|x| = x$ when $x \ge 0$ and $|x| = -x$ when $x \le 0$ ([[def-int-abs]]); $|x| \ge 0$, and $|x| = 0$ exactly when $x = 0$ ([[lem-int-abs-properties]]).

[L5] $b \mid a$ means $a = bs$ for some $s \in \mathbb{Z}$ ([[def-divides-in-z]]).

## Proof

**Proof technique:** cases.

1.1 $0 < |b|$: indeed $|b| \ge 0$, and $|b| \ne 0$ because $b \ne 0$. [L4, given]

1.2 Case $b > 0$: put $\varepsilon := 1$. Then $|b| = b$, so $\varepsilon |b| = b$, and $\varepsilon^{2} = 1$. [assume-case pos, L2, L4]

1.3 Case $b < 0$: put $\varepsilon := -1$. Then $|b| = -b$, so $\varepsilon |b| = -(-b) = b$, and $\varepsilon^{2} = (-1)(-1) = 1$. [assume-case neg, L2, L4]

2.1 Since $b \ne 0$, totality gives $0 \le b$ or $b \le 0$, hence $b > 0$ or $b < 0$; so in either case there is an integer $\varepsilon$ with $b = \varepsilon|b|$ and $\varepsilon^{2} = 1$. [step 1.2, step 1.3, L3, given, cases]

2.2 By [L1] applied to $a$ and the positive integer $|b|$, there is exactly one pair $(Q,r)$ of integers with $a = Q|b| + r$ and $0 \le r < |b|$. [step 1.1, L1]

3.1 Existence. Put $q := \varepsilon Q$. Then $qb = \varepsilon Q \cdot \varepsilon |b| = \varepsilon^{2} Q |b| = Q|b|$, so $a = qb + r$ with $0 \le r < |b|$. [step 2.1, step 2.2, L2]

3.2 Uniqueness. Suppose $a = q_1 b + r_1 = q_2 b + r_2$ with $0 \le r_i < |b|$ for $i = 1, 2$. Since $b = \varepsilon|b|$, this reads $a = (\varepsilon q_1)|b| + r_1 = (\varepsilon q_2)|b| + r_2$, two representations of the form required by [L1] for the divisor $|b|$; hence $\varepsilon q_1 = \varepsilon q_2$ and $r_1 = r_2$. Multiplying the first equation by $\varepsilon$ and using $\varepsilon^{2} = 1$ gives $q_1 = q_2$. [step 2.1, step 2.2, L1, L2]

4.1 The remainder test. If $r = 0$ then $a = qb$, so $b \mid a$. Conversely, if $b \mid a$, say $a = bs$, then $a = sb + 0$ and $0 \le 0 < |b|$ by step 1.1, so this is a representation of the required form and uniqueness forces $r = 0$. [step 1.1, step 3.1, step 3.2, L2, L5]

5.1 Existence is step 3.1, uniqueness is step 3.2, and the remainder test is step 4.1, which is the full statement. [step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **What this discharges.** [[thm-division-algorithm-in-z]] is stated for a
  positive divisor, and its own Remarks record that "the version for $b \ne 0$,
  with $0 \le r < |b|$, follows once absolute values are in hand". Absolute
  values on $\mathbb{Z}$ arrive on this page ([[def-int-abs]]), so the promise is
  discharged here.

- **The remainder is still taken nonnegative, and that is a choice.** With
  $a = -7$ and $b = -3$ the statement above gives $-7 = 3 \cdot (-3) + 2$, so
  $q = 3$ and $r = 2$, whereas truncating the quotient toward zero would give
  $q = 2$ and $r = -1$, which the constraint $0 \le r$ excludes. The clause
  $0 \le r < |b|$ is the one every use below makes, and no other convention is
  introduced anywhere on this page.
