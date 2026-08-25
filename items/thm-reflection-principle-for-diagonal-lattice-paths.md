---
id: thm-reflection-principle-for-diagonal-lattice-paths
kind: theorem
title: "The reflection principle: paths from $(0,a)$ to $(n,b)$ staying strictly above level $c$ are counted by a difference of two binomial coefficients"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-reflection-at-the-first-visit-to-a-level-is-a-bijection, cor-diagonal-lattice-paths-with-a-prescribed-endpoint-are-counted-by-a-binomial-coefficient, lem-a-diagonal-path-that-changes-side-of-a-level-meets-it, def-diagonal-lattice-path-and-its-height, thm-sum-rule, def-finite-cardinality, thm-subset-of-a-finite-set, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.3, Theorem 10.3.1'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

Let $c\in\mathbb{Z}$, let $n\in\mathbb{N}$ and let $a,b\in\mathbb{Z}$ with $a>c$
and $b>c$. Write $\mathcal{A}$ for the set of diagonal paths
$v\in\mathcal{W}((0,a),(n,b))$ that stay strictly above the level $c$, that is
$h(i)>c$ for every $i$ with $0\le i\le n$
([[def-diagonal-lattice-path-and-its-height]]).

1. $\mathcal{A}$ is finite and

   $$\lvert\mathcal{A}\rvert + \lvert\mathcal{W}((0,2c-a),(n,b))\rvert = \lvert\mathcal{W}((0,a),(n,b))\rvert .$$

2. Suppose $2$ divides $n+b-a$ and $b-a\ge -n$, and let $u\in\mathbb{N}$ be the
   natural number with $2u=n+b-a$. Then $u+a-c$ is a natural number and

   $$\lvert\mathcal{A}\rvert + \binom{n}{u+a-c} = \binom{n}{u}, \qquad\text{so}\qquad \lvert\mathcal{A}\rvert = \binom{n}{u}-\binom{n}{u+a-c}.$$

3. If $2$ does not divide $n+b-a$, or $b-a<-n$, or $b-a>n$, then all three sets
   above are empty and all three counts are $0$.

## Facts & Assumptions

**Given:** an integer $c$, a natural number $n$, integers $a>c$ and $b>c$, and the set $\mathcal{A}$ of the statement.

[F1] The height function of a diagonal path of length $n$ from $(0,a)$ satisfies $h(0)=a$ and $h(i)-h(i-1)\in\{1,-1\}$; the path touches the level $c$ when $h(i)=c$ for some $i\le n$, and stays strictly above $c$ when $h(i)>c$ for every $i\le n$; and the restriction of the path to $\{0,\dots,k\}$ is a diagonal path of length $k$ ([[def-diagonal-lattice-path-and-its-height]]).

[L1] If a diagonal path of length $n$ has $h(0)\le c\le h(n)$ or $h(n)\le c\le h(0)$, then $h(i)=c$ for some $i$ with $0\le i\le n$ ([[lem-a-diagonal-path-that-changes-side-of-a-level-meets-it]]).

[L2] If $A$ and $B$ are finite and disjoint, then $A \cup B$ is finite and $\lvert A \cup B\rvert = \lvert A\rvert + \lvert B\rvert$ ([[thm-sum-rule]], clause 1).

[L3] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$; and a finite set has cardinality $0$ exactly when it is empty ([[def-finite-cardinality]]).

[L4] For $a>c$ and $b>c$, reflecting the initial segment at the first visit to level $c$ is a bijection from the set of $v\in\mathcal{W}((0,a),(n,b))$ that touch the level $c$ onto $\mathcal{W}((0,2c-a),(n,b))$ ([[lem-reflection-at-the-first-visit-to-a-level-is-a-bijection]]).

[L5] $\mathcal{W}((0,\alpha),(n,\beta))$ is finite; if $2$ divides $n+\beta-\alpha$ and $-n\le \beta-\alpha\le n$ then its cardinality is $\binom{n}{u}$ for the natural number $u$ with $2u=n+\beta-\alpha$, and otherwise the set is empty ([[cor-diagonal-lattice-paths-with-a-prescribed-endpoint-are-counted-by-a-binomial-coefficient]]).

[L6] A subset of a finite set is finite ([[thm-subset-of-a-finite-set]], clause 1).

[L7] $\binom{n}{k}=0$ for $k>n$ ([[def-binomial-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 A path $v\in\mathcal{W}((0,a),(n,b))$ fails to touch the level $c$ if and only if it stays strictly above $c$. If it stays strictly above $c$ then no height equals $c$. Conversely, if $h(k)<c$ for some $k$, then the restriction of $v$ to $\{0,\dots,k\}$ is a diagonal path whose height at the last index is $h(k)\le c\le a$, the height at index $0$, so [L1] gives an index $i\le k$ with $h(i)=c$ and $v$ touches $c$; hence a path that does not touch $c$ has every height $\ge c$ and, none being equal to $c$, every height $>c$. [F1, L1]

2.1 Therefore $\mathcal{W}((0,a),(n,b))$ is the union of the set $\mathcal{T}$ of paths that touch $c$ and the set $\mathcal{A}$, and these are disjoint. Both are subsets of the finite set $\mathcal{W}((0,a),(n,b))$, hence finite by [L5] and [L6], so [L2] gives $\lvert\mathcal{T}\rvert+\lvert\mathcal{A}\rvert=\lvert\mathcal{W}((0,a),(n,b))\rvert$. [L2, L5, L6, step 1.1]

3.1 By [L4] the set $\mathcal{T}$ is in bijection with $\mathcal{W}((0,2c-a),(n,b))$, so the two have the same cardinality by [L3], and substituting into step 2.1 gives clause 1. [L3, L4, step 2.1]

4.1 For clause 2, put $u':=u+a-c$, a natural number because $a-c\ge 1$; then $2u'=n+b-a+2(a-c)=n+b-(2c-a)$, so $u'$ is the natural number attached by [L5] to the endpoint data of $\mathcal{W}((0,2c-a),(n,b))$. If $u'\le n$ then [L5] gives $\lvert\mathcal{W}((0,2c-a),(n,b))\rvert=\binom{n}{u'}$; if $u'>n$ then $b-(2c-a)>n$, so [L5] makes the set empty and [L7] makes $\binom{n}{u'}$ equal to $0$ as well. The same two readings apply to $\lvert\mathcal{W}((0,a),(n,b))\rvert$ and $\binom{n}{u}$, and clause 1 then reads as the displayed identity, whose subtracted form follows because the identity holds in $\mathbb{N}$. For clause 3, [L5] makes $\mathcal{W}((0,a),(n,b))$ empty in each of the three listed cases, so its cardinality is $0$ by [L3] and clause 1 forces both summands to be $0$, hence both those sets to be empty as well. As a check, $n=0$ with $a=b$ gives $u=0$, $\lvert\mathcal{A}\rvert=1$ and $\binom{0}{a-c}=0$ since $a-c\ge1$. [L3, L5, L7, step 3.1, algebra] ∎

## Remarks

- **Where the two hypotheses are spent.** The hypothesis $a>c$ is what makes the
  reflected starting height lie strictly below $c$, so that every reflected path
  meets $c$ and the correspondence is onto; the hypothesis $b>c$ is what keeps
  the first visit strictly before the last index, so that reflection preserves the
  endpoint. Neither is a normalisation.

- **The identity is stated as a sum, and only then as a difference.** The
  counting argument produces "touching plus avoiding equals all" in $\mathbb{N}$,
  and the difference form is legitimate only because that identity has already
  been proved; written the other way round the subtraction would need its own
  justification whenever the second coefficient vanishes.
