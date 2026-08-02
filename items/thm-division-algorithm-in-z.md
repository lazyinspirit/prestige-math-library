---
id: thm-division-algorithm-in-z
kind: theorem
title: "Division with remainder in $\\mathbb{Z}$: for $a \\in \\mathbb{Z}$ and $b > 0$ there are unique $q, r \\in \\mathbb{Z}$ with $a = qb + r$ and $0 \\le r < b$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-integers, def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring, lem-nat-embeds-int, thm-well-ordering-principle, def-natural-numbers, def-nat-order, lem-nat-nonzero-is-successor, lem-nat-trichotomy, lem-nat-add-commutative]
justified_by: []
aliases: [thm-euclidean-division, thm-division-with-remainder]
landmark: true
short: "$a = qb + r$, $0 \\le r < b$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Euclidean division (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_division"
    - title: "T. Tao, Analysis I, 3rd ed., §4.1 (the integers)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{Z}$ ([[def-integers]]) with $b > 0$. Then there exist
integers $q$ and $r$ with

$$a \;=\; qb + r, \qquad 0 \le r < b,$$

and the pair $(q,r)$ with these two properties is unique.

We say $b$ **divides** $a$, written $b \mid a$, when $a = qb$ for some
$q \in \mathbb{Z}$; by the above, for $b > 0$ this holds exactly when the
remainder $r$ is $0$.

## Facts & Assumptions

**Given:** Integers $a$ and $b$ with $b > 0$, and the embedding $\iota : \mathbb{N} \to \mathbb{Z}$, $\iota(k) = [(k,0)]$, of [[lem-nat-embeds-int]].

[L1] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x + 0 = x$, $x \cdot 1 = x$, multiplication distributes over addition, and every $x$ has an additive inverse $-x$; we write $u - v$ for $u + (-v)$ ([[thm-int-comm-ring]], [[def-int-operations]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive, is compatible with addition ($x \le y$ implies $x + z \le y + z$), and positives are closed under multiplication ($0 < x$ and $0 < y$ imply $0 < xy$) ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] $\iota$ is injective, preserves addition, multiplication and order, and its image is exactly the set of nonnegative integers; $\iota(0) = 0$ and $\iota(1) = 1$ ([[lem-nat-embeds-int]], [[def-int-operations]]).

[L4] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] On $\mathbb{N}$: every $k \ne 0$ is a successor $\sigma(j)$ ([[lem-nat-nonzero-is-successor]]); $\sigma(j) = j + 1 = 1 + j$ ([[def-natural-numbers]], [[lem-nat-add-commutative]]); $m \le n$ means $m + t = n$ for some $t \in \mathbb{N}$ ([[def-nat-order]]); and exactly one of $m < n$, $m = n$, $n < m$ holds ([[lem-nat-trichotomy]]).

## Proof

**Proof technique:** direct.

1.1 Sums and products of nonnegative integers are nonnegative: if $0 \le u$ and $0 \le v$ then $u \le u + v$ by compatibility with addition, so $0 \le u + v$ by transitivity; and if either factor is $0$ then $uv = 0$, while if both are positive then $0 < uv$. [L1, L2]

1.2 Discreteness: if $0 < x$ in $\mathbb{Z}$ then $1 \le x$. Indeed $x$ is nonnegative, so $x = \iota(k)$ for some $k \in \mathbb{N}$, and $k \ne 0$ because $\iota(0) = 0 \ne x$; hence $k = \sigma(j) = 1 + j$ for some $j$, so $1 \le k$ in $\mathbb{N}$, and applying $\iota$, which preserves the order, gives $1 = \iota(1) \le \iota(k) = x$. [L3, L5]

1.3 $\iota$ reflects the order: if $\iota(m) < \iota(n)$ then $m < n$. For otherwise trichotomy on $\mathbb{N}$ gives $n \le m$, whence $\iota(n) \le \iota(m)$ because $\iota$ preserves the order, and this together with $\iota(m) < \iota(n)$ contradicts antisymmetry. [L2, L3, L5]

1.4 Write $a = \iota(a_1) - \iota(a_2)$ with $a_1, a_2 \in \mathbb{N}$, which is possible because $a = [(a_1,a_2)]$ for some naturals and $[(a_1,a_2)] = [(a_1,0)] + [(0,a_2)] = \iota(a_1) - \iota(a_2)$. [L1, L3, given]

1.5 Uniqueness. Suppose $a = q_1 b + r_1 = q_2 b + r_2$ with $0 \le r_i < b$ for $i = 1, 2$, and set $d := q_1 - q_2$. Ring arithmetic gives $d b = r_2 - r_1$. [L1, given]

2.1 From $0 < b$ and step 1.2, $1 \le b$, so $0 \le b - 1$ by compatibility with addition. [step 1.2, L1, L2]

2.2 Put $q_0 := -\iota(a_2)$. Then $a - q_0 b = a + \iota(a_2) b = \bigl(\iota(a_1) - \iota(a_2)\bigr) + \iota(a_2) b = \iota(a_1) + \iota(a_2)(b - 1)$, by ring arithmetic. [step 1.4, L1]

2.3 If $0 < d$ then $1 \le d$ by step 1.2, so $0 \le d - 1$ and hence $0 \le (d-1)b$ by step 1.1, that is $b \le db$; but $r_1 \ge 0$ gives $r_2 - r_1 \le r_2 < b$, so $b \le db = r_2 - r_1 < b$, contradicting antisymmetry. [step 1.1, step 1.2, step 1.5, L1, L2]

2.4 If $d < 0$ then $0 < -d$, and the same computation with the roles of the two pairs interchanged, using $(-d)b = r_1 - r_2$, gives $b \le r_1 - r_2 < b$, again a contradiction. [step 1.1, step 1.2, step 1.5, L1, L2]

3.1 The integer $a - q_0 b$ is nonnegative: $\iota(a_1) \ge 0$ and $\iota(a_2) \ge 0$ because both lie in the image of $\iota$, $b - 1 \ge 0$ by step 2.1, and sums and products of nonnegative integers are nonnegative. [step 1.1, step 2.1, step 2.2, L3]

3.2 Hence $d = 0$ by totality, so $q_1 = q_2$, and then $r_1 = a - q_1 b = a - q_2 b = r_2$. [step 1.5, step 2.3, step 2.4, L1, L2]

4.1 Hence the set $T := \{\, k \in \mathbb{N} : \iota(k) = a - qb \text{ for some } q \in \mathbb{Z} \,\}$ is nonempty, since $a - q_0 b$ is a nonnegative integer and therefore equals $\iota(k)$ for some $k \in \mathbb{N}$. [step 3.1, L3]

5.1 By well-ordering let $r_0$ be the least element of $T$, choose $q \in \mathbb{Z}$ with $\iota(r_0) = a - qb$, and set $r := \iota(r_0)$. Then $a = qb + r$ and $0 \le r$. [step 4.1, L1, L3, L4, choose]

6.1 Suppose $b \le r$. Then $0 \le r - b$ by compatibility with addition, and $r - b = (a - qb) - b = a - (q+1)b$ by ring arithmetic, so $r - b = \iota(k')$ for some $k' \in \mathbb{N}$ with $k' \in T$. Also $-b < 0$, since $0 < b$, so $r - b < r$, that is $\iota(k') < \iota(r_0)$, whence $k' < r_0$ by step 1.3. This contradicts the minimality of $r_0$. [step 1.3, step 5.1, L1, L2, L3, given]

7.1 Therefore $b \le r$ fails, and by totality of the order $r < b$; with step 5.1 this establishes existence of a pair $(q,r)$ with $a = qb + r$ and $0 \le r < b$. [step 5.1, step 6.1, L2]

8.1 Existence is step 7.1 and uniqueness is step 3.2, so for every $a \in \mathbb{Z}$ and every $b > 0$ there is exactly one pair $(q,r)$ of integers with $a = qb + r$ and $0 \le r < b$. [step 7.1, step 3.2] ∎

## Remarks

- **Stated for a positive divisor only.** Nothing here needs an absolute value on $\mathbb{Z}$, and none is available at this point in the reading order. The version for $b \ne 0$, with $0 \le r < |b|$, follows once absolute values are in hand and is not needed by anything on this page.

- **Why it is proved here.** The characterisation of the order of an element, $g^{k} = e$ exactly when $\operatorname{ord}(g)$ divides $k$, and the count $|\langle g \rangle| = \operatorname{ord}(g)$, are both unprovable without division with remainder ([[lem-order-characterisation]]). No earlier page in the library supplies it.

- **This is not a theory of divisibility.** The relation $b \mid a$ is defined here for use on this page and its companion; greatest common divisors, primes and unique factorisation are developed on a later page, and that page must record that its general divisibility in a ring restricts on $\mathbb{Z}$ to the relation defined here, rather than introduce a second notion silently.

- **A published claim this theorem falsified.** A published example on the metric spaces companion page used to record in its Remarks that this library had no divisibility theory at all in which to state or prove Euclid's lemma. That was true when it was written; the present item, which is earlier in the reading order, made it false, and the sentence has since been narrowed to say that the example itself neither establishes nor assumes that lemma. Nothing here depends on that example, and nothing here supplies Euclid's lemma either: what is proved above is division with remainder, and no more.
