---
id: ex-explicit-enumeration-of-the-rationals
kind: example
title: "An explicit enumeration of the rationals, with repetitions and then without them"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [thm-n-cross-n-countable, def-integers, def-int-operations, def-int-order,
       lem-nat-embeds-int, def-rationals, lem-rat-positive-denominator,
       lem-int-embeds-rat, thm-int-ordered-ring, lem-subset-of-countable,
       def-natural-numbers, def-nat-order, lem-nat-nonzero-is-successor,
       lem-nat-order-is-membership, thm-omega-is-peano-system,
       def-injection-surjection-bijection,
       thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse,
       def-countable, def-equinumerous, lem-pigeonhole, thm-well-ordering-principle, thm-recursion,
       thm-induction-principle, def-function, def-cartesian-product,
       def-axiom-schema-of-separation, def-axiom-schema-of-replacement, def-power-set]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (complete author-hosted lecture notes)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "§1.6 Proposition 1.44 and Proposition 1.45, printed pp. 16–17; §2.2 proof of Theorem 2.5, printed p. 25: these enumerate products and quotients and delete repeated enumeration values; the explicit J triple formula below is the local adaptation"
---

## Example

Writing $\mathbb{N}$ from $0$ and $J_0(m,n) = 2^m(2n+1)$ for the bijection
$\mathbb{N} \times \mathbb{N} \to \mathbb{N} \setminus \{0\}$ of
[[thm-n-cross-n-countable]], the map
$$J(m,n) = 2^m(2n+1) - 1,$$
the composition of $J_0$ with the inverse of the successor bijection
$\sigma : \mathbb{N} \to \mathbb{N} \setminus \{0\}$, is a bijection
$\mathbb{N} \times \mathbb{N} \to \mathbb{N}$ ([[thm-omega-is-peano-system]],
[[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]). For
$n \in \mathbb{N}$ decode $n$ twice, writing $J^{-1}(n) = (u,c)$ and
$J^{-1}(u) = (a,b)$, let $z(u) = [(a,b)]$ be the integer of the difference-pair
construction of [[def-integers]], write $\overline{k} := [(k,0)] \in \mathbb{Z}$ for
the image of $k \in \mathbb{N}$ under the canonical embedding of
[[lem-nat-embeds-int]], and put
$$q(n) = \bigl[\,\bigl(z(u),\, \overline{c+1}\bigr)\,\bigr] \in \mathbb{Q}.$$
This is a completely specified surjection $\mathbb{N} \to \mathbb{Q}$ with
$q(0) = 0$, $q(1) = 1$, $q(2) = 0$, $q(3) = -1$
([[def-rationals]]). Its least-first-occurrence subsequence
$j \mapsto q(e(j))$ is a bijection $\mathbb{N} \to \mathbb{Q}$. No
lowest-terms convention, no gcd, no choice from an infinite family and no
unspecified enumeration is used.

## Facts & Assumptions

**Given:** The naturals with $0 = \varnothing$ and successor $\sigma$ ([[def-natural-numbers]]), the integers $\mathbb{Z} = (\mathbb{N} \times \mathbb{N})/{\sim}$ with classes $[(a,b)]$ ([[def-integers]]), the map $k \mapsto \overline{k} = [(k,0)]$ of $\mathbb{N}$ into $\mathbb{Z}$ ([[lem-nat-embeds-int]]), the rationals $\mathbb{Q}$ as classes $[(p,v)]$ of pairs of integers with $v \ne 0$ ([[def-rationals]]), and the pairing $J_0(m,n) = 2^m(2n+1)$ ([[thm-n-cross-n-countable]]).

[F1] $J_0$ is a bijection $\mathbb{N} \times \mathbb{N} \to \mathbb{N} \setminus \{0\}$ and $\sigma$ is a bijection $\mathbb{N} \to \mathbb{N} \setminus \{0\}$; hence $\sigma^{-1}$ exists, is a bijection, and $J(m,n) = 2^m(2n+1) - 1 = \sigma^{-1}(J_0(m,n))$ is a bijection $\mathbb{N} \times \mathbb{N} \to \mathbb{N}$ ([[thm-n-cross-n-countable]], [[thm-omega-is-peano-system]], [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]], [[def-injection-surjection-bijection]]). In particular $J^{-1}(n)$ is the unique pair with $J(J^{-1}(n)) = n$.

[F2] Every integer is a class $[(a,b)]$ with $a,b \in \mathbb{N}$, since $\mathbb{Z}$ is the quotient of $\mathbb{N} \times \mathbb{N}$; the class $[(0,0)]$ is the zero of $\mathbb{Z}$ ([[def-integers]], [[def-int-operations]]).

[F3] The map $k \mapsto \overline{k} := [(k,0)]$ is injective and preserves addition, multiplication and order; its image is exactly the set of nonnegative integers, so the integers $v > 0$ are exactly the $\overline{k}$ with $k \ne 0$ ([[lem-nat-embeds-int]]).

[F4] Every rational has a representative $(p,v)$ with $v > 0$: if the second component is positive one takes it as it is, and otherwise $(p,v) \sim (-p,-v)$ has positive second component ([[lem-rat-positive-denominator]]). A class $[(p,v)]$ with $v \ne 0$ is a rational ([[def-rationals]]).

[F5] $[-]$ is a class: equal rationals have equal representatives up to the relation, so writing "the" class of a computed pair is legitimate ([[def-rationals]]); and $\mathbb{Q}$ contains an injective copy of $\mathbb{N}$: the composite $n \mapsto [(\overline{n},1)]$ of the embeddings $k \mapsto \overline{k}$ and $j(k) = [(k,1)]$ is injective ([[lem-nat-embeds-int]], [[lem-int-embeds-rat]]).

[F6] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]); no injection $\sigma(t) \to t$ exists, so $\mathbb{N}$ is not equinumerous with any natural number ([[lem-pigeonhole]]).

[F7] A subset of $\mathbb{N}$ that is bounded above by some $b \in \mathbb{N}$ is finite, and an unbounded one is countably infinite, enumerated increasingly: there is a bijection $e : \mathbb{N} \to S$ with $e(i) < e(j)$ whenever $i < j$ ([[lem-subset-of-countable]]). Here $m \le b$ means $m \subseteq b$, so a subset bounded above by $b$ is a subset of $\sigma(b)$ ([[lem-nat-order-is-membership]]).

[F8] $Q$ is countably infinite when $Q \approx \mathbb{N}$, and $A \approx B$ means a bijection exists ([[def-countable]], [[def-equinumerous]]); a composite of bijections is a bijection, and a function with domain $\mathbb{N}$ and a rule is defined by the rule ([[def-function]], [[def-injection-surjection-bijection]]).

## Verification

**Proof technique:** direct.

1.1 $J$ is a bijection $\mathbb{N} \times \mathbb{N} \to \mathbb{N}$: by [F1], $J = \sigma^{-1} \circ J_0$ is a composite of the bijection $J_0$ with the bijection $\sigma^{-1}$, and $2^m(2n+1) - 1$ is exactly its value, $-1$ being the value of $\sigma^{-1}$ on $\mathbb{N} \setminus \{0\}$. Hence for every $n \in \mathbb{N}$ the pair $J^{-1}(n)$ is defined and unique, and same for iterated decoding. [F1]

2.1 The map $q$ is a well-defined function $\mathbb{N} \to \mathbb{Q}$ with the displayed rule. For $n \in \mathbb{N}$, step 1.1 gives unique $u, c \in \mathbb{N}$ with $J(u,c) = n$, then unique $a, b$ with $J(a,b) = u$, so $z(u) := [(a,b)]$ is a well-defined integer by [F2]. Since $c + 1 = \sigma(c) \ne 0$ by [F1] and the embedding $k \mapsto \overline{k}$ is injective, $\overline{c+1}$ is a nonzero integer, so $(z(u), \overline{c+1})$ is a legitimate pair of integers with nonzero second component and $q(n) := [(z(u), \overline{c+1})]$ is a rational, the class being formed by [[def-rationals]]; all clauses are given by formulas, so $q$ is a function. [step 1.1, F2, F3, F4]

2.2 The first values: $J^{-1}(0) = (0,0)$ because $J(0,0) = 2^0 \cdot 1 - 1 = 0$, so $q(0) = [(z(0), \overline{1})]$ where $z(0) = [(0,0)] = 0$ and $\overline{1} = 1$, giving $q(0) = 0$. Next $J(1,0) = 2 - 1 = 1$, so $J^{-1}(1) = (1,0)$ and $z(1) = [(1,0)] = 1$, giving $q(1) = [(1,1)] = 1$. Next $J(0,1) = 3 - 1 = 2$, so $J^{-1}(2) = (0,1)$, $z(0) = 0$ and $q(2) = [(0,\overline{2})] = 0$. Next $J(2,0) = 4 - 1 = 3$, so $J^{-1}(3) = (2,0)$, and $J^{-1}(2) = (0,1)$ gives $z(2) = [(0,1)] = -1$, so $q(3) = [(-1,\overline{1})] = -1$. [step 1.1, F2, F3]

3.1 $q$ is surjective. Let $x \in \mathbb{Q}$. By [F4] fix a representative $(p,v)$ of $x$ with $v > 0$; by [F2] write $p = [(a,b)]$ with $a, b \in \mathbb{N}$; by [F3] write $v = \overline{k}$ with $k \in \mathbb{N}$, and $k \ne 0$ because $v > 0 = \overline{0}$ and $k \mapsto \overline{k}$ preserves order. Then $k = \sigma(c)$ for some $c \in \mathbb{N}$ ([[lem-nat-nonzero-is-successor]]), so $c + 1 = k$. Put $u := J(a,b)$ and $n := J(u,c)$; then $J^{-1}(n) = (u,c)$ and $J^{-1}(u) = (a,b)$, so $z(u) = [(a,b)] = p$ and $q(n) = [(p, \overline{c+1})] = [(p,v)] = x$. Hence every rational is a value of $q$. [step 1.1, step 2.1, F2, F3, F4]

4.1 Let $M := \{\, n \in \mathbb{N} : \text{for all } k < n,\ q(k) \ne q(n) \,\}$, the set of first occurrences of values of $q$, a subset of $\mathbb{N}$ by Separation. Then $M$ is infinite. Indeed, by [F5] the map $f(i) := [(\overline{i},1)]$ is an injection $\mathbb{N} \to \mathbb{Q}$; for each $i$ the set $A_i := \{\, n \in \mathbb{N} : q(n) = f(i) \,\}$ is nonempty by step 3.1 and has a least element $m_i$ by [F6]. Each $m_i$ lies in $M$, since for $k < m_i$ minimality gives $q(k) \ne f(i) = q(m_i)$; and $i \mapsto m_i$ is injective because $f$ is. An injection $\mathbb{N} \to M$ rules out $M \approx t$ for any $t \in \mathbb{N}$: composing it with a bijection $M \to t$ would be an injection $\mathbb{N} \to t$, whose restriction to $\sigma(t)$ would be an injection $\sigma(t) \to t$, which [F6] forbids. [step 3.1, F5, F6]

5.1 $M$ is unbounded in $\mathbb{N}$. If $M$ were bounded above by some $b \in \mathbb{N}$, then $M \subseteq \sigma(b)$ by [F7] and $M$ would be finite by [F7], contradicting step 4.1. [step 4.1, F7]

6.1 By step 5.1 and [F7] there is an increasing bijection $e : \mathbb{N} \to M$: it is the increasing enumeration of the unbounded set $M$, with $e(i) < e(j)$ whenever $i < j$. [step 5.1, F7]

7.1 The composite $j \mapsto q(e(j))$ is injective. If $i < j$ then $e(i) < e(j)$ by step 6.1, and $e(j) \in M$ means $q(k) \ne q(e(j))$ for every $k < e(j)$; taking $k = e(i)$ gives $q(e(i)) \ne q(e(j))$. [step 6.1]

7.2 The composite $j \mapsto q(e(j))$ is surjective. Let $x \in \mathbb{Q}$; by step 3.1 there is $n$ with $q(n) = x$, and $k := \min\{\, n : q(n) = x \,\}$ exists by [F6]. Then $k \in M$, because any $k' < k$ has $q(k') \ne x = q(k)$ by minimality, and $e$ is onto $M$ by step 6.1, so $k = e(j)$ for some $j$ and $x = q(k) = q(e(j))$. [step 3.1, step 6.1, F6]

8.1 Therefore $j \mapsto q(e(j))$ is a bijection $\mathbb{N} \to \mathbb{Q}$ by steps 7.1 and 7.2, so $\mathbb{Q} \approx \mathbb{N}$ and $\mathbb{Q}$ is countably infinite by [F8]. Every object was built by an explicit formula — the pairing $J$, the decoded pairs, the classes, the least elements and the increasing enumeration of $M$ — so no choice principle is used. [step 7.1, step 7.2, F8] ∎

## Remarks

- The two stages are visible in the two constructions: $q$ is an explicit enumeration with repetitions, and $M$ records the positions at which a value genuinely appears for the first time, so that $q \circ e$ is the same enumeration with repetitions deleted. The deletion uses the least element of a nonempty set of naturals at each stage, never an arbitrary choice.

- The numerator $z(u)$ is not reduced with respect to the denominator, and no gcd is introduced anywhere: representatives are used as they come out of the difference-pair construction of $\mathbb{Z}$ and the positive-denominator form of $\mathbb{Q}$. This is all the enumeration needs.
