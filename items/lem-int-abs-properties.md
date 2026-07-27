---
id: lem-int-abs-properties
kind: lemma
title: "Absolute value in $\\mathbb{Z}$: $|a| \\ge 0$; $|a| = 0$ exactly when $a = 0$; $|-a| = |a|$; $|ab| = |a|\\,|b|$; $-|a| \\le a \\le |a|$; and $|a| \\le c$ exactly when $-c \\le a \\le c$"
status: published
origin: session
deps: [def-int-abs, def-integers, def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring]
justified_by: []
aliases: []
landmark: false
short: "properties of $|a|$ in $\\mathbb{Z}$"
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
    - title: "Absolute value (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_value"
pipeline_run: null
---

## Statement

Let $a, b, c \in \mathbb{Z}$ and let $|\cdot|$ be as in [[def-int-abs]]. Then

1. $|a| \ge 0$;
2. $|a| = 0$ if and only if $a = 0$;
3. $|-a| = |a|$;
4. $|ab| = |a|\,|b|$;
5. $-|a| \le a \le |a|$;
6. $|a| \le c$ if and only if $-c \le a \le c$.

## Facts & Assumptions

**Given:** Integers $a, b, c$, and the absolute value of [[def-int-abs]].

[L1] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x + 0 = x$, $x \cdot 1 = x$, multiplication distributes over addition, and every $x$ has an additive inverse $-x$; we write $u - v$ for $u + (-v)$. Its standard consequences are used freely: $-(-x) = x$, $(-x)y = -(xy)$, $(-x)(-y) = xy$, $x \cdot 0 = 0$ and $-0 = 0$ ([[thm-int-comm-ring]], [[def-int-operations]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive, is compatible with addition ($x \le y$ implies $x + z \le y + z$), and positives are closed under multiplication ($0 < x$ and $0 < y$ imply $0 < xy$); $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] $|x| = x$ when $x \ge 0$, and $|x| = -x$ when $x \le 0$; the second clause covers $x = 0$ as well, since $-0 = 0$ ([[def-int-abs]]).

## Proof

**Proof technique:** cases.

1.1 For every $x$: $0 \le x$ if and only if $-x \le 0$, and $x \le 0$ if and only if $0 \le -x$. Adding $-x$ to $0 \le x$ gives $-x \le 0$, and adding $x$ to $-x \le 0$ gives back $0 \le x$; the second equivalence is the same computation with $x$ and $-x$ interchanged, using $-(-x) = x$. [L1, L2]

1.2 If $0 \le u$ and $0 \le v$ then $0 \le uv$. If $u = 0$ or $v = 0$ then $uv = 0$; otherwise $0 < u$ and $0 < v$, so $0 < uv$ because positives are closed under multiplication. [L1, L2]

1.3 By totality, at least one of $0 \le a$ and $a \le 0$ holds, and correspondingly $|a| = a$ or $|a| = -a$; this is the case split used throughout, and it is exhaustive. [L2, L3, cases-exhaustive]

1.4 Case $a \ge 0$: $|a| = a \ge 0$. [assume-case nonneg, L3]

2.1 Case $a \le 0$: $|a| = -a$, and $0 \le -a$ by step 1.1, so $|a| \ge 0$. [assume-case nonpos, step 1.1, L3]

2.2 If $a = 0$ then $|a| = 0$ by the first clause. Conversely, if $|a| = 0$ then in the case $a \ge 0$ we get $a = |a| = 0$, and in the case $a \le 0$ we get $-a = |a| = 0$, whence $a = -(-a) = -0 = 0$. This is claim 2. [step 1.3, L1, L3]

2.3 Claim 3. If $a \ge 0$ then $-a \le 0$ by step 1.1, so $|-a| = -(-a) = a = |a|$. If $a \le 0$ then $0 \le -a$ by step 1.1, so $|-a| = -a = |a|$. [step 1.1, L1, L3]

2.4 Claim 4, case $a \ge 0$ and $b \ge 0$: $ab \ge 0$ by step 1.2, so $|ab| = ab = |a|\,|b|$. [assume-case pospos, step 1.2, L3]

2.5 Claim 4, case $a \ge 0$ and $b \le 0$: $0 \le -b$ by step 1.1, so $0 \le a(-b) = -(ab)$ by step 1.2, hence $ab \le 0$ by step 1.1 again; therefore $|ab| = -(ab) = a(-b) = |a|\,|b|$. [assume-case posneg, step 1.1, step 1.2, L1, L3]

2.6 Claim 4, case $a \le 0$ and $b \ge 0$: the same computation with the factors interchanged, using commutativity of multiplication, gives $|ab| = (-a)b = |a|\,|b|$. [assume-case negpos, step 1.1, step 1.2, L1, L3]

2.7 Claim 4, case $a \le 0$ and $b \le 0$: $0 \le -a$ and $0 \le -b$ by step 1.1, so $0 \le (-a)(-b) = ab$ by step 1.2, hence $|ab| = ab = (-a)(-b) = |a|\,|b|$. [assume-case negneg, step 1.1, step 1.2, L1, L3]

2.8 Claim 5. If $a \ge 0$ then $|a| = a$, so $a \le |a|$; and $-|a| = -a \le 0 \le a$ by step 1.1, so $-|a| \le a$ by transitivity. If $a \le 0$ then $|a| = -a$ and $0 \le -a$ by step 1.1, so $a \le 0 \le |a|$ by transitivity; and $-|a| = -(-a) = a \le a$. [step 1.1, step 1.3, L1, L2, L3]

2.9 Claim 6, from right to left: suppose $-c \le a \le c$. If $a \ge 0$ then $|a| = a \le c$. If $a \le 0$ then $|a| = -a$, and adding $c - a$ to $-c \le a$ gives $-a \le c$, that is $|a| \le c$. [step 1.3, L1, L2, L3]

3.1 Claim 1 holds: $|a| \ge 0$ in both cases. [step 1.3, step 1.4, step 2.1, cases]

3.2 The four sign combinations of step 2.4 to step 2.7 exhaust the possibilities by totality, so claim 4 holds for all $a, b$. [step 1.3, step 2.4, step 2.5, step 2.6, step 2.7, cases]

3.3 Claim 6, from left to right: suppose $|a| \le c$. Then $a \le |a| \le c$ by step 2.8 and transitivity. Adding $-c - |a|$ to $|a| \le c$ gives $-c \le -|a|$, and $-|a| \le a$ by step 2.8, so $-c \le a$ by transitivity. [step 2.8, L1, L2]

4.1 Every one of the six claims is now established, claim 6 by its two halves. [step 3.1, step 2.2, step 2.3, step 3.2, step 2.8, step 3.3, step 2.9] ∎

## Remarks

- Claim 6 is stated with $\le$ on both sides deliberately, and the strict form
  follows from it: $|a| < c$ holds exactly when $-c < a < c$. From left to right,
  $a \le |a| < c$ and $-c < -|a| \le a$ by claim 5. From right to left,
  $-c < a < c$ gives $|a| \le c$ by claim 6, and $|a| = c$ is impossible, since
  $|a|$ is $a$ or $-a$ and both $a = c$ and $-a = c$ are excluded by the two
  strict inequalities.

- The list does **not** include the triangle inequality, which is not used
  anywhere on this page. What the proofs below actually reach for is claim 1,
  claim 2, claim 4 and the bound $a \le |a|$ of claim 5; claim 3 is used once, in
  the identification of the associate classes, and claim 6 is recorded for
  completeness rather than because something later needs it.
