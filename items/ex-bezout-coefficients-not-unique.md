---
id: ex-bezout-coefficients-not-unique
kind: example
title: "Bézout coefficients are not unique: $1071 \\cdot (-3) + 462 \\cdot 7 = 21$ and $1071 \\cdot 19 + 462 \\cdot (-44) = 21$, and for nonzero $a, b$ every solution has the form $(x_0 + t b/d,\\; y_0 - t a/d)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-bezout-identity, ex-euclidean-algorithm-worked, cor-gcd-quotients-coprime, lem-coprime-divides-product, lem-gcd-basic-values, def-common-divisor-and-gcd, def-coprime, def-divides-in-z, lem-int-cancellation, thm-int-comm-ring, def-int-operations, lem-nat-embeds-int, def-integers]
justified_by: []
aliases: []
landmark: false
short: "the family of Bézout pairs"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Bézout's identity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity"
    - title: "Diophantine equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Diophantine_equation"
pipeline_run: null
---

## Example

[[thm-bezout-identity]] asserts that $ax + by = \gcd(a,b)$ has a solution; it does
not assert that the solution is unique, and it is not. For $a = 1071$ and
$b = 462$, where $\gcd(a,b) = 21$ ([[ex-euclidean-algorithm-worked]]),

$$1071 \cdot (-3) + 462 \cdot 7 \;=\; 21 \qquad \text{and} \qquad 1071 \cdot 19 + 462 \cdot (-44) \;=\; 21 .$$

The general statement, for $a$ and $b$ **both nonzero**, is this. Put
$d = \gcd(a,b)$, $a' = a/d$ and $b' = b/d$ ([[cor-gcd-quotients-coprime]]), and
let $(x_0, y_0)$ be any solution of $ax + by = d$. Then the solutions of that
equation are exactly the pairs

$$(x,\,y) \;=\; (x_0 + t\,b',\; y_0 - t\,a') \;=\; \bigl(x_0 + t\,b/d,\; y_0 - t\,a/d\bigr), \qquad t \in \mathbb{Z} .$$

For the pair above, $d = 21$, $a' = 51$ and $b' = 22$, and $t = 1$ carries
$(-3, 7)$ to $(19, -44)$.

**Numerals.** For $k \in \mathbb{N}$ the symbol $k$ written inside $\mathbb{Z}$
means $\iota(k)$, the embedding of [[lem-nat-embeds-int]]; every numerical
identity below is the image of the corresponding identity in $\mathbb{N}$.

## Facts & Assumptions

**Given:** Nonzero integers $a$ and $b$, $d := \gcd(a,b)$, and a solution $(x_0,y_0)$ of $ax + by = d$; and, for the numerical part, $a = 1071$, $b = 462$, $d = 21$.

[L1] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x \cdot 1 = x$, $x \cdot 0 = 0$, multiplication distributes over addition, and every $x$ has an additive inverse; we write $u - v$ for $u + (-v)$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L3] If $d = \gcd(a,b) \ne 0$ then $a = d a'$ and $b = d b'$ for unique integers $a' = a/d$ and $b' = b/d$, and $\gcd(a',b') = 1$ ([[cor-gcd-quotients-coprime]], [[def-common-divisor-and-gcd]], [[def-coprime]]).

[L4] $\gcd(u,v) = \gcd(v,u)$ ([[lem-gcd-basic-values]]).

[L5] If $\gcd(u,v) = 1$ and $u \mid vw$ then $u \mid w$ ([[lem-coprime-divides-product]]).

[L6] $u \mid v$ means $v = uk$ for some $k$ ([[def-divides-in-z]]).

[L7] If $xz = yz$ and $z \ne 0$ then $x = y$; and a product of nonzero integers is nonzero ([[lem-int-cancellation]]).

[L8] $\gcd(1071,462) = 21$ ([[ex-euclidean-algorithm-worked]]).

## Verification

**Proof technique:** direct.

1.1 Since $a \ne 0$ and $b \ne 0$ we have $(a,b) \ne (0,0)$, so $d \ge 1$ and in particular $d \ne 0$; fix $a', b'$ with $a = d a'$, $b = d b'$ and $\gcd(a',b') = 1$. Both $a'$ and $b'$ are nonzero, since $d a' = a \ne 0$ and $d b' = b \ne 0$. [given, L1, L3]

2.1 Every pair of the stated form is a solution: for $t \in \mathbb{Z}$, $a(x_0 + t b') + b(y_0 - t a') = (a x_0 + b y_0) + t(a b' - b a') = d + t\bigl((d a')b' - (d b')a'\bigr) = d + t \cdot 0 = d$. [step 1.1, given, L1]

2.2 Conversely, let $(x,y)$ satisfy $ax + by = d$. Subtracting $a x_0 + b y_0 = d$ gives $a(x - x_0) = -\,b(y - y_0)$, that is $d a'(x - x_0) = -\,d b'(y - y_0)$; cancelling $d \ne 0$ gives $a'(x - x_0) = -\,b'(y - y_0)$. [step 1.1, given, L1, L7]

2.3 The numerical instance. Here $d = 21$ by [L8], and $21 \cdot 51 = 1071$, $21 \cdot 22 = 462$, so $a' = 51$ and $b' = 22$. The pair $(-3,7)$ is a solution, since $1071 \cdot (-3) + 462 \cdot 7 = -3213 + 3234 = 21$. [step 1.1, L1, L8, algebra]

3.1 Hence $b' \mid a'(x - x_0)$, and $\gcd(b',a') = \gcd(a',b') = 1$, so $b' \mid x - x_0$ by [L5]: write $x - x_0 = t b'$ for some $t \in \mathbb{Z}$. [step 2.2, L4, L5, L6]

4.1 Substituting into step 2.2, $a' t b' = -\,b'(y - y_0)$; cancelling $b' \ne 0$ gives $a' t = -(y - y_0)$, that is $y = y_0 - t a'$. So $(x,y) = (x_0 + t b',\, y_0 - t a')$. [step 1.1, step 2.2, step 3.1, L1, L7]

5.1 With step 2.1 this shows the solutions are exactly the pairs $(x_0 + t b', y_0 - t a')$, $t \in \mathbb{Z}$. [step 2.1, step 4.1]

6.1 Taking $t = 1$ in step 5.1 gives $(-3 + 22,\; 7 - 51) = (19, -44)$, and directly $1071 \cdot 19 + 462 \cdot (-44) = 20349 - 20328 = 21$. So the same equation has at least the two solutions $(-3,7)$ and $(19,-44)$, and they are distinct because $-3 \ne 19$. [step 5.1, step 2.3, L1, algebra] ∎

## Remarks

- **The family is infinite.** Distinct values of $t$ give distinct pairs, since $b' \ne 0$ and $x_0 + t b' = x_0 + t' b'$ forces $t = t'$ by cancellation. So a Bézout equation with $a, b$ both nonzero never has a unique solution.

- **Why the statement is restricted to $a, b$ both nonzero.** With $b = 0$ and $a \ne 0$ the quotient $b/d$ is $0$ and the family collapses to $(x_0,\, y_0 - t a/d)$, which is still the complete solution set but for a different reason: $x$ is then forced and $y$ is free. The uniform statement above is the one used elsewhere, and the degenerate case is recorded here so that its absence from the claim is deliberate rather than an oversight.
