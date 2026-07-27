---
id: lem-int-bounded-above-has-greatest
kind: lemma
title: "A nonempty set of integers bounded above has a greatest element, and a nonempty set of integers bounded below has a least element"
status: draft
origin: session
deps: [def-integers, def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring, lem-nat-embeds-int, thm-well-ordering-principle, def-natural-numbers, def-nat-order]
justified_by: []
forward_refs: [cex-common-divisors-of-zero-have-no-greatest-element]
aliases: []
landmark: false
short: "greatest element in $\\mathbb{Z}$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{Z}$ be nonempty. Call $b \in \mathbb{Z}$ an **upper
bound** for $S$ when $s \le b$ for every $s \in S$, and a **lower bound** when
$b \le s$ for every $s \in S$; call $m$ a **greatest element** of $S$ when
$m \in S$ and $s \le m$ for every $s \in S$, and a **least element** when
$m \in S$ and $m \le s$ for every $s \in S$.

If $S$ has an upper bound, it has a greatest element. If $S$ has a lower bound,
it has a least element. In each case the element is unique.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{Z}$, and the embedding $\iota : \mathbb{N} \to \mathbb{Z}$, $\iota(k) = [(k,0)]$, of [[lem-nat-embeds-int]].

[L1] $\mathbb{Z}$ is a commutative ring: addition is associative and commutative, $x + 0 = x$, and every $x$ has an additive inverse $-x$, with $-(-x) = x$; we write $u - v$ for $u + (-v)$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive, and is compatible with addition: $x \le y$ implies $x + z \le y + z$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] $\iota$ is injective, preserves addition, multiplication and order, and its image is exactly the set of nonnegative integers, so every $x \ge 0$ is $\iota(k)$ for a unique $k \in \mathbb{N}$ ([[lem-nat-embeds-int]], [[def-natural-numbers]]).

[L4] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]], [[def-nat-order]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $b$ is an upper bound for $S$. For every $s \in S$ we have $s \le b$, and adding $-s$ gives $0 \le b - s$; so $b - s$ is nonnegative and therefore equals $\iota(k)$ for a unique $k \in \mathbb{N}$. [given, L1, L2, L3]

1.2 Now suppose instead that $c$ is a lower bound for $S$, and put $S' := \{\, -s : s \in S \,\}$, a nonempty subset of $\mathbb{Z}$. For $s \in S$, adding $-s - c$ to $c \le s$ gives $-s \le -c$, so $-c$ is an upper bound for $S'$. [given, L1, L2]

2.1 Put $T := \{\, k \in \mathbb{N} : b - \iota(k) \in S \,\}$. It is nonempty: choosing $s \in S$ and the $k$ of step 1.1 with $\iota(k) = b - s$, we get $b - \iota(k) = b - (b - s) = s \in S$, so $k \in T$. [step 1.1, L1, given]

3.1 By well-ordering let $k_0$ be the least element of $T$, and put $m := b - \iota(k_0)$, so that $m \in S$. [step 2.1, L4, choose]

4.1 Let $s \in S$. By step 1.1 there is $k \in \mathbb{N}$ with $\iota(k) = b - s$, and then $b - \iota(k) = s \in S$, so $k \in T$ and hence $k_0 \le k$. [step 1.1, step 2.1, step 3.1, L1]

5.1 Applying $\iota$, which preserves the order, gives $\iota(k_0) \le \iota(k) = b - s$; adding $s - \iota(k_0)$ to this inequality gives $s \le b - \iota(k_0) = m$. [step 3.1, step 4.1, L1, L2, L3]

6.1 So $m \in S$ and $s \le m$ for every $s \in S$: $m$ is a greatest element of $S$. If $m'$ were another one, then $m \le m'$ and $m' \le m$, so $m = m'$ by antisymmetry. [step 3.1, step 5.1, L2]

7.1 By the first part $S'$ has a greatest element, which has the form $-\ell$ with $\ell \in S$; then for every $s \in S$ we have $-s \le -\ell$, and adding $s + \ell$ gives $\ell \le s$. So $\ell$ is a least element of $S$, and it is unique by antisymmetry as in step 6.1. [step 6.1, step 1.2, L1, L2] ∎

## Remarks

- **Why this has to be proved rather than quoted.** The well-ordering principle
  ([[thm-well-ordering-principle]]) gives a *least* element of a nonempty set of
  *naturals*. What the greatest common divisor needs is a *greatest* element of a
  set of *integers* bounded above, and neither the direction nor the ambient set
  matches. The bridge is the reflection $k \mapsto b - \iota(k)$, which turns
  "large elements of $S$ below $b$" into "small naturals".

- **Both hypotheses are needed.** $\mathbb{Z}$ itself is nonempty and has no
  greatest element, and $\varnothing$ is bounded above by every integer and has
  no greatest element because it has no element at all. The first of these is
  exactly what makes the common divisors of $(0,0)$ have no greatest element
  ([[cex-common-divisors-of-zero-have-no-greatest-element]]).
