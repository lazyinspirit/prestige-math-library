---
id: cex-hilbert-monoid-factorisation-not-unique
kind: counterexample
title: "In the multiplicative monoid $H = \\{1, 4, 7, 10, \\dots\\}$ of positive integers one more than a multiple of $3$, the element $100$ has two genuinely different factorisations into irreducibles, $4 \\cdot 25$ and $10 \\cdot 10$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-prime, thm-euclids-lemma, thm-fundamental-theorem-of-arithmetic,
       thm-prime-factorisation-exists, lem-every-integer-above-one-has-a-prime-divisor,
       def-semigroup-and-monoid, def-binary-operation, def-identity-element,
       lem-units-of-z, def-monoid-finite-product, def-symmetric-group,
       def-divides-in-z, lem-divisibility-basic, lem-divisor-bound,
       thm-division-algorithm-in-z, lem-int-cancellation, thm-int-comm-ring,
       thm-int-ordered-ring, def-int-operations, def-int-order, def-integers,
       lem-nat-embeds-int, lem-nat-discrete, def-natural-numbers, def-nat-order]
justified_by: []
aliases: [cex-hilbert-monoid]
landmark: false
short: "$100 = 4 \\cdot 25 = 10 \\cdot 10$ in $H$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Hilbert number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hilbert_number"
    - title: "Fundamental theorem of arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic"
    - title: "San Diego State University notes: Introduction to factorisation"
      url: "https://vadim.sdsu.edu/intro-factorization.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim.** Let $(M,\cdot,1)$ be a commutative monoid
([[def-semigroup-and-monoid]]) whose underlying set consists of integers $\ge 1$,
contains $1$, and is closed under the multiplication of $\mathbb{Z}$
([[def-binary-operation]], [[def-identity-element]]). Call $h \in M$ with $h > 1$
**irreducible in $M$** when there are no $u, v \in M$ with $u > 1$, $v > 1$ and
$h = uv$. Then factorisation into irreducibles of $M$ is unique up to order: if

$$\prod_{i<r} h_i \;=\; \prod_{j<s} h'_j$$

with every $h_i$ and $h'_j$ irreducible in $M$, then $r = s$ and
$h'_i = h_{\pi(i)}$ for every $i < r$, for some $\pi \in \operatorname{Sym}(r)$
([[def-symmetric-group]], [[def-monoid-finite-product]]).

**Witness.** Take

$$H \;:=\; \{\, h \in \mathbb{Z} \;:\; h \ge 1 \ \text{ and } \ 3 \mid h - 1 \,\} \;=\; \{1, 4, 7, 10, 13, \dots\},$$

with the multiplication of $\mathbb{Z}$ ([[def-divides-in-z]]). Then $4$, $10$ and
$25$ are irreducible in $H$, and

$$100 \;=\; 4 \cdot 25 \;=\; 10 \cdot 10 ,$$

two lists of irreducibles of $H$ that no permutation matches, since
$10 \ne 4$ and $10 \ne 25$.

**Numerals.** For $k \in \mathbb{N}$ the symbol $k$ inside $\mathbb{Z}$ means
$\iota(k)$, the embedding of [[lem-nat-embeds-int]].

## Facts & Assumptions

**Given:** The set $H$ above and the integers $4$, $5$, $10$, $25$, $100$.

[L1] A monoid is a set with an associative binary operation and a two-sided identity, and is commutative when the operation is ([[def-semigroup-and-monoid]], [[def-binary-operation]], [[def-identity-element]]).

[L2] $(\mathbb{Z},\cdot,1)$ is a commutative monoid ([[lem-units-of-z]]); $\mathbb{Z}$ is a commutative ring with $x \cdot 1 = x$ and distributivity ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L3] $\prod_{i<0} g_i = e$ and $\prod_{i<\sigma(m)} g_i = \bigl(\prod_{i<m} g_i\bigr) g_m$ ([[def-monoid-finite-product]]).

[L4] $d \mid u$ means $u = dc$ for some $c \in \mathbb{Z}$; divisibility is reflexive and transitive and is linear ([[def-divides-in-z]], [[lem-divisibility-basic]]).

[L5] For $a \in \mathbb{Z}$ and $b > 0$ there is exactly one pair $(q,r)$ with $a = qb + r$ and $0 \le r < b$, and $b \mid a$ exactly when $r = 0$ ([[thm-division-algorithm-in-z]]).

[L6] If $d \mid a$ and $a \ne 0$ then $|d| \le |a|$ ([[lem-divisor-bound]]).

[L7] Every integer $> 1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]); a prime $q$ satisfies $q > 1$ and has only $1$ and $q$ as positive divisors ([[def-prime]]).

[L8] If $q$ is prime and $q \mid uv$ then $q \mid u$ or $q \mid v$ ([[thm-euclids-lemma]]).

[L9] A product of two nonzero integers is nonzero, and $xz = yz$ with $z \ne 0$ gives $x = y$ ([[lem-int-cancellation]]).

[L10] The order on $\mathbb{Z}$ is total, antisymmetric and transitive, is compatible with addition, and positives are closed under multiplication ([[thm-int-ordered-ring]], [[def-int-order]]); $\iota$ is injective and order preserving with image the nonnegative integers ([[lem-nat-embeds-int]], [[def-natural-numbers]], [[def-nat-order]], [[lem-nat-discrete]]).

## Counterexample

**Proof technique:** direct.

1.1 $0 < 1$ in $\mathbb{Z}$, and every integer $y > 0$ satisfies $y \ge 1$: $y = \iota(t)$ with $t \ne 0$, so $1 \le y$ because $\iota$ preserves the order. Consequently $y > c$ implies $y \ge c+1$. [L10]

1.2 $H$ is a commutative monoid under the multiplication of $\mathbb{Z}$. It contains $1$, since $1 \ge 1$ and $1 - 1 = 0 = 3 \cdot 0$. It is closed: if $h - 1 = 3a$ and $h' - 1 = 3b$ then $hh' - 1 = (3a+1)(3b+1) - 1 = 3(3ab + a + b)$, so $3 \mid hh' - 1$; and $h, h' \ge 1$ give $hh' \ge 1$. Associativity, commutativity and the identity are inherited from $\mathbb{Z}$. [L1, L2, L4, L10]

1.3 $4$, $10$, $25$ and $100$ lie in $H$: $4 - 1 = 3 = 3 \cdot 1$, $10 - 1 = 9 = 3 \cdot 3$, $25 - 1 = 24 = 3 \cdot 8$ and $100 - 1 = 99 = 3 \cdot 33$, and all four exceed $1$. And $5 \notin H$: $5 - 1 = 4 = 1 \cdot 3 + 1$, whose remainder $1$ is nonzero, so $3 \nmid 4$ by [L5]. [L4, L5, algebra]

2.1 Every $h \in H$ with $h > 1$ satisfies $h \ge 4$. Indeed $h - 1 > 0$ and $h - 1 = 3t$ for some $t$, so $t > 0$ and hence $t \ge 1$ by step 1.1, giving $h - 1 \ge 3$ and $h \ge 4$. [step 1.1, L4, L10]

2.2 $5$ is prime. It exceeds $1$; a positive divisor $d$ of $5$ satisfies $1 \le d \le 5$ by [L6] and step 1.1, and the intermediate candidates are ruled out by their remainders: $5 = 2 \cdot 2 + 1$, $5 = 1 \cdot 3 + 2$ and $5 = 1 \cdot 4 + 1$. So the only positive divisors are $1$ and $5$. [step 1.1, L5, L6, L7, algebra]

3.1 $4$ and $10$ are irreducible in $H$. If $4 = uv$ or $10 = uv$ with $u, v \in H$ both $> 1$, then $u \ge 4$ and $v \ge 4$ by step 2.1, so $uv \ge 16$ by monotonicity of multiplication by a positive factor; but $16 > 10 > 4$. [step 2.1, L10, algebra]

3.2 $25$ is irreducible in $H$. Suppose $25 = uv$ with $u, v \in H$ and $u, v > 1$. Each of $u$ and $v$ has a prime divisor by [L7]; if $q \mid u$ then $q \mid 25 = 5 \cdot 5$, so $q \mid 5$ by [L8], and $q$ being a positive divisor of the prime $5$ with $q > 1$ forces $q = 5$. Hence $5 \mid u$, and symmetrically $5 \mid v$; write $u = 5w$, $v = 5y$. [step 2.1, step 2.2, L4, L7, L8]

4.1 Then $25 \cdot 1 = 25 = uv = 25(wy)$, and $25 \ne 0$, so $wy = 1$ by cancellation. Since $u = 5w > 0$ and $5 > 0$ we get $w > 0$, hence $w \ge 1$; likewise $y \ge 1$; and $wy = 1$ with both $\ge 1$ forces $w = y = 1$, since $w \ge 2$ would give $wy \ge 2$. So $u = v = 5$, contradicting $5 \notin H$ from step 1.3. [step 1.1, step 1.3, step 3.2, L2, L9, L10, algebra]

5.1 The two factorisations. $4 \cdot 25 = 100$ and $10 \cdot 10 = 100$, and by [L3] the lists $h = (4,25)$ and $h' = (10,10)$ of length $2$ have $\prod_{i<2} h_i = (1 \cdot 4) \cdot 25 = 100$ and $\prod_{i<2} h'_i = (1 \cdot 10) \cdot 10 = 100$. All four entries are irreducible in $H$ by steps 3.1 and 4.1. [step 3.1, step 4.1, L2, L3, algebra]

6.1 No permutation matches them. For $\pi \in \operatorname{Sym}(2)$ the value $h_{\pi(0)}$ is $4$ or $25$, and $h'_0 = 10$ differs from both. So the refuted claim fails for $M = H$ at the element $100$, with $r = s = 2$: the lists have the same length and still no permutation carries one to the other. [step 1.2, step 5.1, L1] ∎

## Remarks

- **Existence is not the issue; uniqueness is.** Every element of $H$ greater than $1$ does factor into irreducibles of $H$, by exactly the descent that proves [[thm-prime-factorisation-exists]] in $\mathbb{Z}$: a smallest factor above $1$ is irreducible, and the quotient is smaller. What fails in $H$ is the second half of [[thm-fundamental-theorem-of-arithmetic]].

- **What fails is Euclid's lemma.** In $H$, $10$ is irreducible and $100 = 4 \cdot 25$ is a product of two elements of $H$ that $10$ divides inside $H$, since $100 = 10 \cdot 10$; yet $10 \nmid 4$ and $10 \nmid 25$, because $4 = 0 \cdot 10 + 4$ and $25 = 2 \cdot 10 + 5$ have nonzero remainders. So the analogue of [[thm-euclids-lemma]] is false in $H$, and by [[cor-prime-iff-euclid-property]] that property, and not indecomposability, is what unique factorisation actually needs.

- **The example needs nothing beyond $\mathbb{Z}$ and divisibility.** The classical witness for this phenomenon uses algebraic integers, which are not available at this point in the reading order; $H$ is a subset of $\mathbb{Z}$ closed under multiplication, and every claim above is a statement about integers.
