---
id: lem-characteristic-and-additive-order
kind: lemma
title: "The characteristic of a ring is the additive order of $1_R$, with $0$ recording infinite order; $n \\cdot 1_R = 0$ holds exactly when $\\operatorname{char}(R) \\mid n$; and in an integral domain every nonzero element has the same additive order as $1_R$"
status: draft
origin: session
deps: [def-ring-characteristic, def-commutative-ring, def-zero-divisor-and-integral-domain, lem-integer-multiples-in-a-ring, lem-ring-elementary-consequences, def-order-in-a-group, lem-order-characterisation, def-group-power, def-group, def-divides-in-z, def-ring, thm-int-comm-ring, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: false
short: "char = additive order of $1$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "Order (group theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_(group_theory)"
pipeline_run: null
---

## Statement

Let $R$ be a ring ([[def-ring]]) and let $\operatorname{ord}(1_R)$ be the order
of $1_R$ in the abelian group $(R,+,0_R)$ ([[def-order-in-a-group]]), with
$\operatorname{ord}(1_R) = \infty$ when no $n \ge 1$ satisfies
$n \cdot 1_R = 0_R$. Throughout, a natural number written where an integer is
expected means its image under the embedding $\iota_{\mathbb{Z}} : \mathbb{N} \to \mathbb{Z}$
of [[lem-nat-embeds-int]]. Then:

1. if $\operatorname{ord}(1_R)$ is finite then
   $\operatorname{char}(R) = \operatorname{ord}(1_R)$
   ([[def-ring-characteristic]]), and if $\operatorname{ord}(1_R) = \infty$ then
   $\operatorname{char}(R) = 0$; so the characteristic is the additive order of
   $1_R$, with the value $0$ recording infinite order;
2. for every $n \in \mathbb{Z}$, the equation $n \cdot 1_R = 0_R$ holds if and
   only if $\operatorname{char}(R)$ divides $n$ in $\mathbb{Z}$, divisibility
   being the relation of [[def-divides-in-z]];
3. if $R$ is an integral domain
   ([[def-zero-divisor-and-integral-domain]]) then for every $a \in R$ with
   $a \ne 0_R$ and every $n \in \mathbb{Z}$,
   $n a = 0_R$ if and only if $n \cdot 1_R = 0_R$; consequently every nonzero
   element of $R$ has the same additive order as $1_R$.

## Facts & Assumptions

**Given:** A ring $R$ with zero $0_R$ and identity $1_R$; multiples $ma$ for $m \in \mathbb{Z}$, $a \in R$, as in [[lem-integer-multiples-in-a-ring]]; and $\operatorname{char}(R)$ as in [[def-ring-characteristic]].

[L1] $\operatorname{char}(R)$ is the least $n \in \mathbb{N}$ with $n \ge 1$ and $n \cdot 1_R = 0_R$ when such an $n$ exists, and is $0$ otherwise ([[def-ring-characteristic]]).

[L2] $\operatorname{ord}(g)$, for $g$ in a group, is the least $k \in \mathbb{N}$ with $k \ge 1$ and $g^{k} = e$ when such a $k$ exists, and is $\infty$ otherwise; read additively in $(R,+,0_R)$ this is the least $k \ge 1$ with $k \cdot 1_R = 0_R$ ([[def-order-in-a-group]], [[def-group-power]], [[def-group]]).

[L3] If $\operatorname{ord}(g) = n$ with $n \ge 1$, then for $k \in \mathbb{Z}$ we have $g^{k} = e$ if and only if $n \mid k$; and if $\operatorname{ord}(g) = \infty$ then $g^{j} = g^{k}$ implies $j = k$ ([[lem-order-characterisation]]).

[L4] $(ma)b = m(ab) = a(mb)$ and $ma = (m\,1_R)a$ for all $m \in \mathbb{Z}$, $a, b \in R$ ([[lem-integer-multiples-in-a-ring]]).

[L5] $0_R \cdot b = 0_R = b \cdot 0_R$ for every $b \in R$ ([[lem-ring-elementary-consequences]]).

[L6] In an integral domain, $xy = 0$ implies $x = 0$ or $y = 0$ ([[def-zero-divisor-and-integral-domain]], [[def-commutative-ring]]).

[L7] $\mathbb{Z}$ is a commutative ring, so $0 \cdot q = 0$ for every integer $q$; and $d \mid a$ means $a = dq$ for some $q \in \mathbb{Z}$ ([[thm-int-comm-ring]], [[def-divides-in-z]]). The embedding $\iota_{\mathbb{Z}}$ is injective and preserves addition, multiplication and order, its image being the nonnegative integers ([[lem-nat-embeds-int]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1. Read additively in the abelian group $(R,+,0_R)$, the set $S_{1_R}$ of [L2] is $\{\, k \in \mathbb{N} : k \ge 1,\ k \cdot 1_R = 0_R \,\}$, which is the set $T_R$ of [L1]. So the two definitions take the minimum of the same set: if that set is nonempty both $\operatorname{ord}(1_R)$ and $\operatorname{char}(R)$ equal its least element, and if it is empty then $\operatorname{ord}(1_R) = \infty$ while $\operatorname{char}(R) = 0$. [L1, L2]

1.2 Claim 3. Let $R$ be an integral domain, $a \ne 0_R$ and $n \in \mathbb{Z}$. By [L4], $na = (n\,1_R)a$. If $n \cdot 1_R = 0_R$ then $na = 0_R \cdot a = 0_R$ by [L5]. Conversely if $na = 0_R$ then $(n\,1_R)a = 0_R$, so by [L6] either $n \cdot 1_R = 0_R$ or $a = 0_R$; the second is excluded, so $n \cdot 1_R = 0_R$. [L4, L5, L6]

2.1 Claim 2, the case $\operatorname{char}(R) = c$ with $c \ge 1$. By step 1.1, $\operatorname{ord}(1_R) = c$, so [L3] read additively in $(R,+,0_R)$ gives, for every $n \in \mathbb{Z}$: $n \cdot 1_R = 0_R$ if and only if $c \mid n$. [step 1.1, L3, L7]

2.2 Claim 2, the case $\operatorname{char}(R) = 0$. By step 1.1, $\operatorname{ord}(1_R) = \infty$, so [L3] gives that $n \cdot 1_R = m \cdot 1_R$ forces $n = m$; taking $m = 0$ and using $0 \cdot 1_R = 0_R$, we get $n \cdot 1_R = 0_R$ if and only if $n = 0$. On the other side, $0 \mid n$ means $n = 0 \cdot q$ for some integer $q$, and $0 \cdot q = 0$ in $\mathbb{Z}$, so $0 \mid n$ holds exactly when $n = 0$. The two conditions therefore agree. [step 1.1, L3, L7]

3.1 Claim 2 follows from steps 2.1 and 2.2, since $\operatorname{char}(R)$ is either $0$ or at least $1$. [step 2.1, step 2.2, L1]

4.1 Consequently, for $a \ne 0_R$ in an integral domain the set $\{\, k \in \mathbb{N} : k \ge 1,\ ka = 0_R \,\}$ equals the set $T_R$ of step 1.1, so the two have the same least element when nonempty and are empty together: $\operatorname{ord}(a) = \operatorname{ord}(1_R)$, finite or infinite alike. With steps 1.1, 3.1 and 1.2 all three claims are established. [step 1.1, step 3.1, step 1.2, L2] ∎

## Remarks

- **The convention $\operatorname{char} = 0$ is what makes claim 2 a single
  statement.** With $\infty$ in place of $0$ the right-hand side would have to be
  split into two cases, since $\infty$ is not an integer and
  "$\infty \mid n$" has no meaning. With $0$, the divisibility relation of
  [[def-divides-in-z]] does the work in both cases, because $0 \mid n$ holds
  exactly for $n = 0$.

- **Claim 3 is where the ring structure enters.** Claims 1 and 2 are statements
  about the additive group alone, and would be true in any abelian group with a
  distinguished element. Claim 3 uses $na = (n\,1_R)a$, which is
  [[lem-integer-multiples-in-a-ring]], and then the absence of zero divisors.
  Without the domain hypothesis the argument breaks at a named place: the step
  deducing $n \cdot 1_R = 0_R$ from $(n\,1_R)a = 0_R$ is an appeal to the absence
  of zero divisors, and nothing on this page replaces it for a ring that has
  them.

- **$\operatorname{char}(R)$ is a natural number and $n$ is an integer**, so the
  divisibility in claim 2 is a statement in $\mathbb{Z}$ about
  $\iota_{\mathbb{Z}}(\operatorname{char}(R))$ and $n$, as the Statement says.
  The two are not the same kind of object, and reading the claim without the
  embedding would be a category error rather than an abbreviation.
