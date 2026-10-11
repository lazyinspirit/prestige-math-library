---
id: cor-hook-divisibility-defect-zero-vanishing-criterion
kind: corollary
title: "The hook-divisibility vanishing criterion"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [cor-no-removable-cycle-length-strip-forces-a-character-zero,
       cor-order-of-a-permutation-from-its-cycle-lengths,
       cor-prime-iff-euclid-property,
       cor-euclids-lemma-for-finite-products,
       lem-int-cancellation,
       thm-hook-length-formula,
       def-hook-arm-leg-and-hook-length,
       def-prime,
       def-order-in-a-group,
       def-permutation-support-disjoint-cycles-and-cycle-type,
       def-column-antisymmetrizer-polytabloid-and-specht-module,
       def-finite-symmetric-group-and-permutation-notation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978 (complete author-hosted scan, 161 pp.)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§21.6 Corollary and Remark, printed p. 83: if no hook length is divisible by p then χ^λ is zero on all permutations whose order is divisible by p, and the hypothesis is equivalent to p not dividing |S_n|/deg χ^λ by the hook formula"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (complete author-hosted scan, 486 pp.)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §3, Example 5 and §7, Example 5, printed pp. 49 and 117: the border-strip form of the rule underlying the vanishing, with the hook-length formula of Chapter I §3"
---

## Statement

Let $p$ be a prime ([[def-prime]]) and $\lambda\vdash n$. If no hook length of
$\lambda$ ([[def-hook-arm-leg-and-hook-length]]) is divisible by $p$, then
$$\chi^\lambda(\sigma)=0$$
for every $p$-singular permutation $\sigma\in S_n$, i.e. every $\sigma$ whose
order is divisible by $p$ ([[def-order-in-a-group]]). By the hook length formula
$f^\lambda=\dim S^\lambda=n!/\prod_{x\in[\lambda]}h(x)$
([[thm-hook-length-formula]]), the hypothesis is equivalent to
$p\nmid |S_n|/f^\lambda$. No converse and no modular block classification is
claimed. No choice principle is used.

## Facts & Assumptions

**Given:** A prime $p$, a partition $\lambda\vdash n$, and a $p$-singular permutation $\sigma\in S_n$, with $\chi^\lambda$ the character of the complex Specht module $S^\lambda$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F1] Order and cycle lengths: if the disjoint cycles of $\sigma$ have lengths $d_1,\dots,d_r$, then the order of $\sigma$ is the least positive natural number divisible by every $d_i$; in particular each $d_i$ divides the order ([[cor-order-of-a-permutation-from-its-cycle-lengths]], [[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F2] Euclid's property of a prime: for $p>1$, $p$ is prime if and only if $p\mid ab$ implies $p\mid a$ or $p\mid b$; and if $p\mid\prod_{i<n}a_i$ then $p\mid a_i$ for some $i$ ([[cor-prime-iff-euclid-property]], [[cor-euclids-lemma-for-finite-products]]).

[F3] Cancellation in $\mathbb{Z}$: $pa=pb$ implies $a=b$ for integers $a,b$ and $p\ne0$ ([[lem-int-cancellation]]).

[F4] Hook lengths and vanishing: the removable border strips of $\lambda$ of size $r$ are exactly the hooks of length $r$; if no hook length of $\lambda$ equals $r$, then $\chi^\lambda(\rho)=0$ for every $\rho\in S_n$ whose cycle type contains a part $r$ ([[cor-no-removable-cycle-length-strip-forces-a-character-zero]], [[def-hook-arm-leg-and-hook-length]]).

[F5] Hook length formula: $f^\lambda=\dim S^\lambda=n!/\prod_{x\in[\lambda]}h(x)$, so $|S_n|/f^\lambda=\prod_{x\in[\lambda]}h(x)$ ([[thm-hook-length-formula]]).

## Proof

**Proof technique:** direct.

1.1 Let $m$ be the order of the $p$-singular permutation $\sigma$, so $p\mid m$, and let $d_1,\dots,d_r$ be its cycle lengths, each dividing $m$ by [F1]. Then some $d_i$ is divisible by $p$: otherwise $p\nmid d_i$ for every $i$, and writing $m=p\,m'$ with $m'=m/p\ge1$ and $m'<m$, fix $i$; from $d_i\mid m=p\,m'$ write $p\,m'=d_i k$; by [F2] the divisibility $p\mid d_i k$ together with $p\nmid d_i$ gives $p\mid k$, say $k=p\,k'$, and cancelling $p$ by [F3] gives $m'=d_i k'$, so $d_i\mid m'$. Thus $m'$ would be a positive integer, smaller than the order $m$, divisible by every cycle length $d_i$, contradicting the minimality in [F1]. Hence $\sigma$ contains a cycle of some length $r=d_i$ with $p\mid r$. [given, F1, F2, F3, algebra]

1.2 By the hook length formula [F5], $|S_n|/f^\lambda=\prod_{x\in[\lambda]}h(x)$; since $p$ is prime, $p\mid\prod_x h(x)$ holds if and only if $p\mid h(x)$ for at least one node $x$, by the finite-product form of Euclid's property [F2], while the converse divisibility is immediate from a product being a multiple of each factor. Hence $p\nmid |S_n|/f^\lambda$ if and only if no hook length of $\lambda$ is divisible by $p$. [F2, F5, algebra]

2.1 Assume no hook length of $\lambda$ is divisible by $p$, and let $r$ be the cycle length of $\sigma$ with $p\mid r$ found in step 1.1. Then no hook length of $\lambda$ equals $r$, since such a hook length would be divisible by $p$; by [F4] the character vanishes, $\chi^\lambda(\sigma)=0$. Step 1.2 identifies this hypothesis with $p\nmid |S_n|/f^\lambda$, so the criterion holds in both equivalent forms. [step 1.1, step 1.2, F4, given, algebra] ∎

## Remarks

- **What is not claimed.** The converse fails and no block theory is used: membership in a block of defect zero is a statement about the decomposition matrix, which this corollary does not construct. The criterion here is only the implication from the absence of a $p$-divisible hook length to vanishing on $p$-singular classes.

- **The one number-theoretic input.** Step 1.1 is the only place where arithmetic enters: a prime dividing the order of a permutation divides one of its cycle lengths, proved there by the minimality of the order. Everything else is the hook-length chain of the pair.
