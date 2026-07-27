---
id: thm-gcd-lcm-product
kind: theorem
title: "Every common multiple of $a$ and $b$ is a multiple of $\\operatorname{lcm}(a,b)$, and $\\gcd(a,b) \\cdot \\operatorname{lcm}(a,b) = |ab|$"
status: draft
origin: session
deps: [def-lcm, def-common-divisor-and-gcd, lem-gcd-basic-values, cor-gcd-quotients-coprime, lem-coprime-divides-product, lem-divisibility-basic, lem-divisor-bound, def-divides-in-z, def-int-abs, lem-int-abs-properties, lem-int-cancellation, thm-int-comm-ring, def-int-operations, thm-int-ordered-ring, def-int-order]
justified_by: []
forward_refs: [fs-gcd-times-lcm-equals-the-product]
aliases: []
landmark: true
short: "$\\gcd \\cdot \\operatorname{lcm} = |ab|$"
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Least common multiple (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least_common_multiple"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{Z}$, and write $d = \gcd(a,b)$
([[def-common-divisor-and-gcd]]) and $\ell = \operatorname{lcm}(a,b)$
([[def-lcm]]). Then:

1. every common multiple of $a$ and $b$ is a multiple of $\ell$, that is,
   $\ell \mid m$ whenever $a \mid m$ and $b \mid m$;
2. $d \cdot \ell = |ab|$.

Both hold for every pair, including the pairs with $a = 0$ or $b = 0$, where the
two sides of clause 2 are $0$.

## Facts & Assumptions

**Given:** Integers $a$ and $b$, $d := \gcd(a,b)$ and $\ell := \operatorname{lcm}(a,b)$.

[L1] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x \cdot 1 = x$, $x \cdot 0 = 0$, $x \cdot (-1) = -x$, multiplication distributes over addition, and every $x$ has an additive inverse, with $-(-x) = x$ ([[thm-int-comm-ring]], [[def-int-operations]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive; $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] For $a, b$ both nonzero, $\ell$ is the least positive common multiple of $a$ and $b$; if $a = 0$ or $b = 0$ then the only common multiple is $0$ and $\ell = 0$ ([[def-lcm]]).

[L4] $d \ge 1$ when $(a,b) \ne (0,0)$, $\gcd(0,0) = 0$, and $d$ is a common divisor of $a$ and $b$ ([[def-common-divisor-and-gcd]]).

[L5] If $d \ne 0$ then $a = d a'$ and $b = d b'$ for unique integers $a' = a/d$, $b' = b/d$, and $\gcd(a',b') = 1$ ([[cor-gcd-quotients-coprime]]).

[L6] $\gcd(u,v) = \gcd(v,u)$ ([[lem-gcd-basic-values]]).

[L7] If $\gcd(u,v) = 1$ and $u \mid vw$ then $u \mid w$ ([[lem-coprime-divides-product]]).

[L8] Divisibility is reflexive and transitive; $u \mid v$ implies $u \mid vw$, $-u \mid v$ and $u \mid -v$; and $d \mid u$ means $u = dq$ for some $q$ ([[lem-divisibility-basic]], [[def-divides-in-z]]).

[L9] If $u \mid v$ and $v \ne 0$ then $|u| \le |v|$ ([[lem-divisor-bound]]).

[L10] $|x| \ge 0$; $|x| = 0$ exactly when $x = 0$; $|x| = x$ when $x \ge 0$; $|xy| = |x|\,|y|$; and $x$ is $|x|$ or $-|x|$ ([[def-int-abs]], [[lem-int-abs-properties]]).

[L11] A product of two nonzero integers is nonzero, and $xz = yz$ with $z \ne 0$ gives $x = y$ ([[lem-int-cancellation]]).

## Proof

**Proof technique:** cases.

1.1 Case $a = 0$ or $b = 0$. Then $\ell = 0$ and the only common multiple of $a$ and $b$ is $0$, so clause 1 reads $0 \mid 0$, which holds. And $ab = 0$, so $|ab| = 0 = d \cdot 0 = d\ell$: clause 2 holds. [assume-case degenerate, L1, L3, L8, L10]

1.2 Case $a \ne 0$ and $b \ne 0$. Then $(a,b) \ne (0,0)$, so $d \ge 1$; in particular $d \ne 0$ and $d \ge 0$, so $|d| = d$. Fix $a' , b'$ with $a = d a'$, $b = d b'$ and $\gcd(a',b') = 1$. [assume-case generic, L2, L4, L5, L10]

2.1 In the case of step 1.2 put $M := d\,|a'b'|$. Both $a'$ and $b'$ are nonzero, since $a = da' \ne 0$ and $b = db' \ne 0$; hence $a'b' \ne 0$, so $|a'b'| \ge 0$ and $|a'b'| \ne 0$, and $M \ne 0$. [step 1.2, L1, L10, L11]

3.1 $M$ is a common multiple of $a$ and $b$. Indeed $d a' b' = (d a')b' = ab'$ and $d a' b' = (d b')a' = ba'$, so $a \mid d a' b'$ and $b \mid d a' b'$; and $M = d|a'b'|$ equals $d a'b'$ or $-(d a'b')$, since $|a'b'|$ is $a'b'$ or $-(a'b')$. So $a \mid M$ and $b \mid M$. [step 1.2, step 2.1, L1, L8, L10]

3.2 $M > 0$: $d \ge 1 > 0$ and $|a'b'| \ge 0$ with $|a'b'| \ne 0$, so $|a'b'| > 0$ and the product of two positives is positive. [step 1.2, step 2.1, L2, L10]

3.3 Every common multiple $m$ of $a$ and $b$ is a multiple of $M$. Write $m = as = d a' s$. From $b \mid m$, that is $d b' \mid d a' s$, we get $d a' s = d b' t$ for some $t$, and cancelling $d \ne 0$ gives $a' s = b' t$, so $b' \mid a' s$. Since $\gcd(b',a') = \gcd(a',b') = 1$, [L7] gives $b' \mid s$, say $s = b'u$; then $m = d a' b' u$, so $d a' b' \mid m$ and hence $M \mid m$, because $M$ is $d a'b'$ or $-(d a'b')$. [step 1.2, step 2.1, L1, L6, L7, L8, L10, L11]

4.1 $M = \ell$. By steps 3.1 and 3.2, $M$ is a positive common multiple. If $p$ is any positive common multiple, then $M \mid p$ by step 3.3 and $p \ne 0$, so $|M| \le |p|$ by [L9], that is $M \le p$ since both are positive. So $M$ is the least positive common multiple, which is $\ell$. [step 3.1, step 3.2, step 3.3, L3, L9, L10]

5.1 Clause 1 in this case now follows from step 3.3, since $\ell = M$. [step 3.3, step 4.1]

5.2 Clause 2 in this case: $d\ell = d \cdot d\,|a'b'| = |d|\,|d|\,|a'|\,|b'| = |d a'|\,|d b'| = |(da')(db')| = |ab|$, using $|d| = d$ and multiplicativity of the absolute value throughout. [step 1.2, step 4.1, L1, L10]

6.1 The two cases of steps 1.1 and 1.2 are exhaustive, so clauses 1 and 2 hold for every pair $a, b$. [step 1.1, step 5.1, step 5.2, cases-exhaustive] ∎

## Remarks

- **Clause 1 is the clause later pages use.** "Least positive common multiple" is
  how $\operatorname{lcm}$ was defined, but the useful property is that it divides
  every common multiple, which is what identifies
  $a\mathbb{Z} \cap b\mathbb{Z}$ with $\operatorname{lcm}(a,b)\mathbb{Z}$ in
  [[thm-gcd-generates-the-subgroup]].

- **The absolute value in clause 2 is not decorative.** The unsigned form
  $\gcd(a,b)\operatorname{lcm}(a,b) = ab$ is false, and $(-2,3)$ refutes it:
  the companion page records this as
  [[fs-gcd-times-lcm-equals-the-product]].

- **Where coprimality enters.** The only substantial step is step 3.1, and what
  it uses is that $a/d$ and $b/d$ are coprime
  ([[cor-gcd-quotients-coprime]]) together with the coprime divisibility lemma
  ([[lem-coprime-divides-product]]). Without those the argument gives only that
  $M$ is *a* common multiple, not the least one.
