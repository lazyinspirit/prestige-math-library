---
id: lem-gcd-basic-values
kind: lemma
title: "$\\gcd$ is symmetric and unchanged by signs: $\\gcd(a,b) = \\gcd(b,a) = \\gcd(|a|,|b|)$; moreover $\\gcd(a,0) = |a|$, $\\gcd(a,1) = 1$, $\\gcd(a,a) = |a|$, and $\\gcd(a,b) \\ge 1$ unless $a = b = 0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-common-divisor-and-gcd, def-divides-in-z, lem-divisibility-basic, lem-divisor-bound, lem-units-of-z, def-int-abs, lem-int-abs-properties, def-int-order, thm-int-ordered-ring, thm-int-comm-ring, def-int-operations]
justified_by: []
aliases: []
landmark: false
short: "basic values of $\\gcd$"
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
    - title: "Greatest common divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Greatest_common_divisor"
pipeline_run: null
---

## Statement

For all $a, b \in \mathbb{Z}$, with $\gcd$ as in [[def-common-divisor-and-gcd]]:

1. $\gcd(a,b) = \gcd(b,a)$;
2. $\gcd(a,b) = \gcd(|a|,|b|)$;
3. $\gcd(a,0) = |a|$, and in particular $\gcd(0,0) = 0$;
4. $\gcd(a,1) = 1$;
5. $\gcd(a,a) = |a|$;
6. $\gcd(a,b) \ge 1$ unless $a = b = 0$, in which case $\gcd(a,b) = 0$.

## Facts & Assumptions

**Given:** Integers $a$ and $b$, and the set $D(a,b) = \{\, d : d \mid a \text{ and } d \mid b \,\}$ of common divisors ([[def-common-divisor-and-gcd]]).

[L1] For $(a,b) \ne (0,0)$, $\gcd(a,b)$ is the unique greatest element of $D(a,b)$ and satisfies $\gcd(a,b) \ge 1$; and $\gcd(0,0) = 0$ by convention ([[def-common-divisor-and-gcd]]).

[L2] $d \mid a$ means $a = dq$ for some $q$; every $d$ satisfies $d \mid 0$; $0 \mid a$ only for $a = 0$; and $1 \mid a$, $a \mid a$ for every $a$ ([[def-divides-in-z]]).

[L3] $d \mid a$, $d \mid -a$, $-d \mid a$ and $-d \mid -a$ are equivalent ([[lem-divisibility-basic]]).

[L4] If $d \mid a$ and $a \ne 0$ then $d \le |a|$ ([[lem-divisor-bound]]).

[L5] $u \mid 1$ exactly when $u = 1$ or $u = -1$, and $1 \ne -1$ ([[lem-units-of-z]]).

[L6] $|x| = x$ when $x \ge 0$ and $|x| = -x$ when $x \le 0$ ([[def-int-abs]]); $|x| \ge 0$ and $|x| = 0$ exactly when $x = 0$ ([[lem-int-abs-properties]]).

[L7] $\mathbb{Z}$ is a commutative ring with $x \cdot 1 = x$, $x \cdot (-1) = -x$ and $-(-x) = x$; its order is total, antisymmetric, transitive and compatible with addition, and positives are closed under multiplication ([[thm-int-comm-ring]], [[def-int-operations]], [[thm-int-ordered-ring]], [[def-int-order]]).

## Proof

**Proof technique:** direct.

1.1 $1 \ne 0$ and $-1 \le 0 \le 1$. If $1 = 0$ then $-1 = -0 = 0 = 1$, contradicting $1 \ne -1$. By totality $0 \le 1$ or $1 \le 0$; in the second case adding $-1$ gives $0 \le -1$, and $-1 \ne 0$, so $0 < -1$ and hence $0 < (-1)(-1) = 1$, contradicting $1 \le 0$ by antisymmetry. So $0 \le 1$, and adding $-1$ gives $-1 \le 0$. [L5, L7]

1.2 $|x| \mid x$ for every $x$: by totality $x \ge 0$, when $x = |x| = |x| \cdot 1$, or $x \le 0$, when $|x| = -x$ and so $x = -(-x) = -|x| = |x| \cdot (-1)$. [L6, L7]

1.3 For every $d$ and $x$: $d \mid x$ if and only if $d \mid |x|$, because $|x|$ is $x$ or $-x$ and the two conditions $d \mid x$, $d \mid -x$ are equivalent. [L3, L6]

1.4 Claim 1. The condition defining $D(a,b)$ is unchanged when $a$ and $b$ are interchanged, so $D(a,b) = D(b,a)$; and $(a,b) = (0,0)$ exactly when $(b,a) = (0,0)$. Hence the two greatest elements coincide in the first case, and both values are $0$ in the second. [L1]

1.5 Claim 5. $D(a,a) = \{\, d : d \mid a \,\} = D(a,0)$, and $(a,a) = (0,0)$ exactly when $(a,0) = (0,0)$, so $\gcd(a,a) = \gcd(a,0)$. [L1, L2]

1.6 Claim 6 is [L1] restated: for $(a,b) \ne (0,0)$ the value $\gcd(a,b)$ is $\ge 1$ because $1$ is a common divisor and $\gcd(a,b)$ is greatest, and at $(0,0)$ the value is $0$ by convention. [L1, L2]

2.1 Claim 2. By step 1.3, $D(a,b) = D(|a|,|b|)$; and $|a| = 0$ exactly when $a = 0$, so $(a,b) = (0,0)$ exactly when $(|a|,|b|) = (0,0)$. Hence the values agree in both cases. [step 1.3, L1, L6]

2.2 Claim 3. $D(a,0) = \{\, d : d \mid a \,\}$, since every $d$ divides $0$. If $a = 0$ this is $\mathbb{Z}$ and $\gcd(0,0) = 0 = |0|$ by the convention. If $a \ne 0$, then $|a| \in D(a,0)$ by step 1.2, and every $d \in D(a,0)$ satisfies $d \le |a|$ by [L4], so $|a|$ is the greatest element of $D(a,0)$ and $\gcd(a,0) = |a|$. [step 1.2, L1, L2, L4, L6]

2.3 Claim 4. Every $d \in D(a,1)$ satisfies $d \mid 1$, hence $d = 1$ or $d = -1$; and $1 \in D(a,1)$ since $1 \mid a$ and $1 \mid 1$. Also $(a,1) \ne (0,0)$ because $1 \ne 0$. Since $-1 \le 1$ by step 1.1, the greatest element of $D(a,1)$ is $1$, so $\gcd(a,1) = 1$. [step 1.1, L1, L2, L5, L7]

3.1 Claim 3's second half and claim 5 now read off: $\gcd(0,0) = 0 = |0|$, and $\gcd(a,a) = \gcd(a,0) = |a|$. [step 2.2, step 1.5]

4.1 Claims 1 to 6 are established. [step 1.4, step 2.1, step 2.2, step 2.3, step 3.1, step 1.6] ∎

## Remarks

- **Claim 2 is what lets every later argument assume the arguments are
  nonnegative**, and claim 1 lets it assume they are in either order. Both are
  used without comment below.

- **Every clause is checked at the boundary.** Claim 3 covers $a = 0$, where it
  returns the convention $\gcd(0,0) = 0$ rather than contradicting it; claim 4
  holds at $a = 0$, giving $\gcd(0,1) = 1$; and claim 5 holds at $a = 0$, giving
  $\gcd(0,0) = 0$. There is no pair at which a clause above is silent.
