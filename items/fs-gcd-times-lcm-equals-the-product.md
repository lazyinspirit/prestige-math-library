---
id: fs-gcd-times-lcm-equals-the-product
kind: false-statement
title: "FALSE: For all integers $a$ and $b$, $\\gcd(a,b) \\cdot \\operatorname{lcm}(a,b) = ab$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-gcd-lcm-product, def-lcm, def-common-divisor-and-gcd, cor-common-divisor-divides-gcd, lem-divisibility-basic, def-divides-in-z, def-int-abs, lem-int-abs-properties, lem-int-cancellation, thm-int-comm-ring, thm-int-ordered-ring, def-int-operations, def-int-order, lem-nat-embeds-int, def-integers]
justified_by: []
aliases: []
landmark: false
short: "FALSE: $\\gcd \\cdot \\operatorname{lcm} = ab$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Least common multiple (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least_common_multiple"
    - title: "Greatest common divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Greatest_common_divisor"
pipeline_run: null
---

## Statement

**False claim:** for all integers $a$ and $b$,

$$\gcd(a,b) \cdot \operatorname{lcm}(a,b) \;=\; ab$$

([[def-common-divisor-and-gcd]], [[def-lcm]]).

The true statement is [[thm-gcd-lcm-product]], with an absolute value on the
right: $\gcd(a,b)\operatorname{lcm}(a,b) = |ab|$. The two differ as soon as $ab$
is negative, and $(a,b) = (-2,3)$ is a witness: there
$\gcd(-2,3) = 1$ and $\operatorname{lcm}(-2,3) = 6$, so the left side is $6$,
while $ab = -6$.

**Numerals.** For $k \in \mathbb{N}$ the symbol $k$ inside $\mathbb{Z}$ means
$\iota(k)$, the embedding of [[lem-nat-embeds-int]].

## Facts & Assumptions

**Given:** The integers $-2$, $3$ and $6$.

[L1] $\mathbb{Z}$ is a commutative ring: multiplication is associative and commutative, $x \cdot 1 = x$, $x \cdot (-1) = -x$, multiplication distributes over addition, and every $x$ has an additive inverse ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive and is compatible with addition ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] $\gcd(a,b)\operatorname{lcm}(a,b) = |ab|$ for all $a, b$ ([[thm-gcd-lcm-product]], [[def-lcm]]).

[L4] $d = \gcd(u,v)$ exactly when $d \ge 0$, $d \mid u$, $d \mid v$, and every common divisor of $u$ and $v$ divides $d$ ([[cor-common-divisor-divides-gcd]]).

[L5] If $d \mid u$ and $d \mid v$ then $d \mid ux + vy$ for all $x, y$; and $1 \mid u$ for every $u$ ([[lem-divisibility-basic]], [[def-divides-in-z]]).

[L6] $|x| = x$ for $x \ge 0$ and $|x| = -x$ for $x \le 0$; $|x| \ge 0$ ([[def-int-abs]], [[lem-int-abs-properties]]).

[L7] If $xz = yz$ and $z \ne 0$ then $x = y$ ([[lem-int-cancellation]]).

[L8] $\iota$ is injective with image the nonnegative integers, and preserves addition and multiplication ([[lem-nat-embeds-int]]).

[L9] The refuted claim: $\gcd(a,b)\operatorname{lcm}(a,b) = ab$ for all integers $a, b$.

## Refutation

**Proof technique:** direct.

1.1 $\gcd(-2,3) = 1$. Indeed $1 \ge 0$, and $1 \mid -2$ and $1 \mid 3$ by [L5]; and $(-2) \cdot 1 + 3 \cdot 1 = 1$, so every common divisor of $-2$ and $3$ divides $1$ by [L5]. By [L4] this characterises $\gcd(-2,3)$. [L1, L4, L5, L8, algebra]

1.2 $(-2) \cdot 3 = -6$, and $|-6| = 6$ since $-6 \le 0$ and $-(-6) = 6$. [L1, L2, L6, L8, algebra]

1.3 $6 \ne -6$: otherwise $6 + 6 = 0$, that is $\iota(12) = 0 = \iota(0)$, whence $12 = 0$ in $\mathbb{N}$, contradicting injectivity of $\iota$. [L1, L8, algebra]

2.1 By [L3], $\gcd(-2,3)\operatorname{lcm}(-2,3) = |(-2) \cdot 3| = 6$; with step 1.1 this reads $1 \cdot \operatorname{lcm}(-2,3) = 6$, so $\operatorname{lcm}(-2,3) = 6$ by cancellation of the nonzero factor $1$. [step 1.1, step 1.2, L1, L3, L7]

3.1 Therefore $\gcd(-2,3)\operatorname{lcm}(-2,3) = 1 \cdot 6 = 6$, while $(-2) \cdot 3 = -6$, and these differ: [L9] is false at $(a,b) = (-2,3)$. [step 1.1, step 1.2, step 2.1, step 1.3, L1, L9] ∎

## Remarks

- **Every pair with $ab < 0$ refutes it**, not just this one: $\gcd$ and $\operatorname{lcm}$ are both nonnegative by construction ([[def-common-divisor-and-gcd]], [[def-lcm]]), so their product is nonnegative, while $ab$ is negative. The witness above is simply a small instance.

- **The claim is true when $a$ and $b$ are both nonnegative**, which is why it is a natural slip: in that case $|ab| = ab$ and the two statements coincide. [[thm-gcd-lcm-product]] is the version that holds for all integers.

- **The absolute value is not the only convention doing work.** At $a = 0$ the true identity reads $\gcd(0,b) \cdot 0 = 0 = |0 \cdot b|$, which holds only because $\operatorname{lcm}(0,b) = 0$ was fixed in [[def-lcm]].
