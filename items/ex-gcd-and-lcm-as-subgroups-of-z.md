---
id: ex-gcd-and-lcm-as-subgroups-of-z
kind: example
title: "$12\\mathbb{Z} + 18\\mathbb{Z} = 6\\mathbb{Z}$ and $12\\mathbb{Z} \\cap 18\\mathbb{Z} = 36\\mathbb{Z}$, the arithmetic of $\\gcd$ and $\\operatorname{lcm}$ read off the subgroups of $(\\mathbb{Z},+)$"
status: published
origin: session
deps: [thm-gcd-generates-the-subgroup, lem-subgroups-of-z-are-cyclic, thm-gcd-lcm-product, def-lcm, def-common-divisor-and-gcd, cor-common-divisor-divides-gcd, lem-divisibility-basic, def-divides-in-z, def-subgroup, def-generated-subgroup, def-group, lem-int-cancellation, def-int-abs, lem-int-abs-properties, thm-int-comm-ring, def-int-operations, lem-nat-embeds-int, def-integers]
justified_by: []
aliases: []
landmark: false
short: "$12\\mathbb{Z} + 18\\mathbb{Z} = 6\\mathbb{Z}$"
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
    - title: "Cyclic group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cyclic_group"
pipeline_run: null
---

## Example

Take $a = 12$ and $b = 18$. Then $\gcd(12,18) = 6$ and
$\operatorname{lcm}(12,18) = 36$, and [[thm-gcd-generates-the-subgroup]] turns
these two numbers into two statements about subgroups of $(\mathbb{Z},+)$:

$$12\mathbb{Z} + 18\mathbb{Z} \;=\; 6\mathbb{Z}, \qquad 12\mathbb{Z} \cap 18\mathbb{Z} \;=\; 36\mathbb{Z} .$$

The first says that the integers expressible as $12x + 18y$ are exactly the
multiples of $6$; the smallest positive one is $6 = 12 \cdot (-1) + 18 \cdot 1$.
The second says that the integers divisible by both $12$ and $18$ are exactly the
multiples of $36$. The product check is
$\gcd \cdot \operatorname{lcm} = 6 \cdot 36 = 216 = |12 \cdot 18|$.

**Numerals.** For $k \in \mathbb{N}$ the symbol $k$ inside $\mathbb{Z}$ means
$\iota(k)$, the embedding of [[lem-nat-embeds-int]].

## Facts & Assumptions

**Given:** The integers $12$, $18$, $6$, $36$ and $216$, and $g\mathbb{Z} = \{\, gk : k \in \mathbb{Z} \,\}$.

[L1] $\mathbb{Z}$ is a commutative ring: multiplication is associative and commutative, $x \cdot 1 = x$, $x \cdot (-1) = -x$, and multiplication distributes over addition ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L2] $d = \gcd(u,v)$ exactly when $d \ge 0$, $d \mid u$, $d \mid v$ and every common divisor of $u$ and $v$ divides $d$ ([[cor-common-divisor-divides-gcd]], [[def-common-divisor-and-gcd]]).

[L3] If $d \mid u$ and $d \mid v$ then $d \mid ux + vy$ for all $x, y$ ([[lem-divisibility-basic]]); $d \mid u$ means $u = dq$ for some $q$ ([[def-divides-in-z]]).

[L4] $\gcd(u,v)\operatorname{lcm}(u,v) = |uv|$, and every common multiple of $u$ and $v$ is a multiple of $\operatorname{lcm}(u,v)$ ([[thm-gcd-lcm-product]], [[def-lcm]]).

[L5] $|x| = x$ for $x \ge 0$, and $|xy| = |x|\,|y|$ ([[def-int-abs]], [[lem-int-abs-properties]]).

[L6] If $xz = yz$ and $z \ne 0$ then $x = y$ ([[lem-int-cancellation]]).

[L7] $a\mathbb{Z} + b\mathbb{Z} = \gcd(a,b)\mathbb{Z}$ and $a\mathbb{Z} \cap b\mathbb{Z} = \operatorname{lcm}(a,b)\mathbb{Z}$, and these are subgroups of $(\mathbb{Z},+)$ ([[thm-gcd-generates-the-subgroup]], [[def-subgroup]], [[def-group]], [[def-generated-subgroup]]).

[L8] Every subgroup of $(\mathbb{Z},+)$ has exactly one nonnegative generator ([[lem-subgroups-of-z-are-cyclic]]).

## Verification

**Proof technique:** direct.

1.1 $\gcd(12,18) = 6$. Indeed $6 \ge 0$; $12 = 6 \cdot 2$ and $18 = 6 \cdot 3$, so $6 \mid 12$ and $6 \mid 18$; and $12 \cdot (-1) + 18 \cdot 1 = -12 + 18 = 6$, so every common divisor of $12$ and $18$ divides $6$ by [L3]. By [L2] this characterises $\gcd(12,18)$. [L1, L2, L3, algebra]

2.1 $\operatorname{lcm}(12,18) = 36$. By [L4], $\gcd(12,18)\operatorname{lcm}(12,18) = |12 \cdot 18| = |216| = 216$; with step 1.1 this reads $6 \cdot \operatorname{lcm}(12,18) = 216$. Since $6 \cdot 36 = 216$ and $6 \ne 0$, cancellation gives $\operatorname{lcm}(12,18) = 36$. [step 1.1, L1, L4, L5, L6, algebra]

3.1 Applying [L7] with $a = 12$ and $b = 18$: $12\mathbb{Z} + 18\mathbb{Z} = \gcd(12,18)\mathbb{Z} = 6\mathbb{Z}$ and $12\mathbb{Z} \cap 18\mathbb{Z} = \operatorname{lcm}(12,18)\mathbb{Z} = 36\mathbb{Z}$. [step 1.1, step 2.1, L7]

4.1 Both right-hand sides are written with their canonical generator: $6 \ge 0$ and $36 \ge 0$, and by [L8] no other nonnegative integer generates the same subgroup, so the two identities pin the subgroups down rather than merely exhibiting one description of each. [step 3.1, L8]

5.1 The two statements read concretely: an integer is of the form $12x + 18y$ exactly when it is a multiple of $6$ — with $6 = 12 \cdot (-1) + 18 \cdot 1$ the smallest positive such value — and an integer is divisible by both $12$ and $18$ exactly when it is a multiple of $36$, which is the divisibility clause of [L4] instantiated here. [step 1.1, step 3.1, L3, L4] ∎

## Remarks

- **The example is the seam in miniature.** On the left of each identity is a
  construction in the group $(\mathbb{Z},+)$ — a sum of subgroups, an
  intersection of subgroups — and on the right is a number computed by
  arithmetic. [[thm-gcd-generates-the-subgroup]] is what makes the two sides the
  same object.

- **$36 = 12 \cdot 3 = 18 \cdot 2$**, so $36$ is visibly a common multiple; what
  is not visible without the theorem is that *every* common multiple is a
  multiple of it, which is why $12\mathbb{Z} \cap 18\mathbb{Z}$ is exactly
  $36\mathbb{Z}$ and not merely contains it.
