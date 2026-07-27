---
id: lem-order-characterisation
kind: lemma
title: "If $\\operatorname{ord}(g) = n$ then $g^{k} = e$ iff $k$ is an integer multiple of $n$, the powers $g^{0}, \\dots, g^{n-1}$ are distinct, and $\\langle g \\rangle$ has exactly $n$ elements; if $g$ has infinite order then $g^{j} = g^{k}$ only for $j = k$"
status: published
origin: session
deps: [def-order-in-a-group, def-group-power, lem-group-power-laws, lem-group-cancellation, lem-group-inverse-laws, lem-cyclic-subgroup-is-the-set-of-powers, thm-division-algorithm-in-z, thm-induction-principle, def-countable, def-equinumerous, def-injection-surjection-bijection, lem-pigeonhole, def-integers, def-int-order, thm-int-comm-ring, thm-int-ordered-ring, lem-nat-embeds-int, lem-nat-order-is-membership, def-nat-order, lem-nat-trichotomy]
justified_by: []
aliases: [lem-order-divides]
landmark: true
short: "$g^{k}=e \\iff \\operatorname{ord}(g) \\mid k$"
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
    - title: "Order (group theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_(group_theory)"
    - title: "Cyclic group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cyclic_group"
pipeline_run: null
---

## Statement

Let $G$ be a group, $g \in G$, and let orders be as in [[def-order-in-a-group]].
Throughout, a natural number written where an integer is expected means its image
under the embedding $\iota : \mathbb{N} \to \mathbb{Z}$ of [[lem-nat-embeds-int]].

**Finite order.** Suppose $\operatorname{ord}(g) = n$ with $n \in \mathbb{N}$,
$n \ge 1$. Then:

1. for every $k \in \mathbb{Z}$, $g^{k} = e$ if and only if $k = qn$ for some
   $q \in \mathbb{Z}$, that is, if and only if $n \mid k$
   ([[thm-division-algorithm-in-z]]);
2. the powers $g^{0}, g^{1}, \dots, g^{n-1}$ are pairwise distinct: if
   $i, j \in \mathbb{N}$ with $i < n$, $j < n$ and $g^{i} = g^{j}$, then $i = j$;
3. $\langle g \rangle = \{\, g^{s} : s \in \mathbb{N},\ s < n \,\}$ and
   $\langle g \rangle \approx n$; so $\langle g \rangle$ is finite with
   $|\langle g \rangle| = n = \operatorname{ord}(g)$.

**Infinite order.** If $\operatorname{ord}(g) = \infty$ then for $j, k \in \mathbb{Z}$,
$g^{j} = g^{k}$ implies $j = k$; so the integer powers of $g$ are pairwise
distinct and $\langle g \rangle$ is not finite.

## Facts & Assumptions

**Given:** A group $G$ with identity $e$ and an element $g \in G$; $S_g = \{\, k \in \mathbb{N} : k \ge 1,\ g^{k} = e \,\}$, and $\operatorname{ord}(g) = \min S_g$ when $S_g \ne \varnothing$, $\operatorname{ord}(g) = \infty$ otherwise ([[def-order-in-a-group]]).

[L1] Exponent laws: $g^{x+y} = g^{x}g^{y}$, $g^{-x} = (g^{x})^{-1}$ and $(g^{x})^{y} = g^{xy}$ for all $x, y \in \mathbb{Z}$; the first also holds for natural exponents in any monoid ([[lem-group-power-laws]], [[def-group-power]]).

[L2] $\langle g \rangle = \{\, g^{x} : x \in \mathbb{Z} \,\}$ ([[lem-cyclic-subgroup-is-the-set-of-powers]]).

[L3] Division with remainder: for $k \in \mathbb{Z}$ and $b > 0$ there are unique $q, r \in \mathbb{Z}$ with $k = qb + r$ and $0 \le r < b$ ([[thm-division-algorithm-in-z]]).

[L4] $\iota$ is injective, preserves addition, multiplication and order, and its image is exactly the nonnegative integers; $\iota(0) = 0$, $\iota(1) = 1$ ([[lem-nat-embeds-int]]). The order on $\mathbb{Z}$ is total and antisymmetric and $\mathbb{Z}$ is a commutative ring ([[thm-int-ordered-ring]], [[thm-int-comm-ring]], [[def-int-order]], [[def-integers]]).

[L5] Cancellation in a group ([[lem-group-cancellation]]); $e^{-1} = e$ and $(u^{-1})^{-1} = u$ ([[lem-group-inverse-laws]]).

[L6] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L7] On $\mathbb{N}$: the order is membership, so $n = \{\, s \in \mathbb{N} : s < n \,\}$ ([[lem-nat-order-is-membership]]); $i \le j$ means $i + t = j$ for some $t$ ([[def-nat-order]]); exactly one of $i<j$, $i=j$, $j<i$ holds ([[lem-nat-trichotomy]]).

[L8] Finiteness and counting: $A$ is finite when $A \approx m$ for some $m \in \mathbb{N}$, and that $m$ is unique ([[def-countable]], [[def-equinumerous]], [[lem-pigeonhole]]); a bijection is an injective and surjective map ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 $e^{x} = e$ for every $x \in \mathbb{Z}$. For natural exponents the set of $t$ with $e^{t} = e$ contains $0$, since $e^{0} = e$, and is closed under $\sigma$, since $e^{\sigma(t)} = e^{t} e = e\,e = e$; induction gives it for all naturals. For $x < 0$ write $-x = \iota(k)$; then $e^{x} = (e^{k})^{-1} = e^{-1} = e$. [given, L1, L4, L5, L6]

1.2 Assume $\operatorname{ord}(g) = n$ with $n \ge 1$. Then $n \in S_g$, so $g^{n} = e$, and no natural $s$ with $1 \le s < n$ satisfies $g^{s} = e$, since $n$ is the least element of $S_g$. Also $\iota(n) > 0$, because $n \ge 1$ and $\iota$ preserves the order. [given, L4]

1.3 Infinite order. Assume $S_g = \varnothing$ and suppose $g^{j} = g^{k}$ with $j, k \in \mathbb{Z}$ and $j \ne k$. Put $x := j - k$, so $x \ne 0$ and $g^{x} = g^{j} g^{-k} = g^{j}(g^{k})^{-1} = e$. Also $g^{-x} = (g^{x})^{-1} = e^{-1} = e$. By totality one of $x$ and $-x$ is positive; call it $y$, so $g^{y} = e$ and $y = \iota(s)$ with $s \in \mathbb{N}$ and $s \ne 0$, hence $s \ge 1$. Then $s \in S_g$, contradicting $S_g = \varnothing$. [given, L1, L4, L5]

2.1 The "if" half of claim 1: if $k = q\iota(n)$ for some $q \in \mathbb{Z}$, then $g^{k} = g^{\iota(n) q} = (g^{\iota(n)})^{q} = (g^{n})^{q} = e^{q} = e$. [step 1.1, step 1.2, L1, L4]

2.2 The "only if" half. Suppose $g^{k} = e$. Divide: $k = q\iota(n) + r$ with $0 \le r < \iota(n)$, legitimate since $\iota(n) > 0$. Then $e = g^{k} = g^{q\iota(n)} g^{r} = (g^{n})^{q} g^{r} = e^{q} g^{r} = g^{r}$. Since $0 \le r$, we have $r = \iota(s)$ for a unique $s \in \mathbb{N}$, and $\iota(s) < \iota(n)$ forces $s < n$, because otherwise $n \le s$ and $\iota$ would give $\iota(n) \le \iota(s)$, contradicting antisymmetry. So $g^{s} = e$ with $s < n$. [step 1.1, step 1.2, L1, L3, L4, L7]

2.3 Claim 2. Let $i, j \in \mathbb{N}$ with $i < n$, $j < n$ and $g^{i} = g^{j}$. By trichotomy we may assume $i \le j$, interchanging the names if necessary, and then $i + t = j$ for some $t \in \mathbb{N}$. Now $g^{i} g^{t} = g^{i+t} = g^{j} = g^{i} = g^{i} e$, so $g^{t} = e$ by cancellation. Moreover $t \le j$, since $t + i = j$, and $j < n$, so $t < n$. If $t \ge 1$ then $t \in S_g$ with $t < n$, impossible; so $t = 0$ and $i = j$. [step 1.2, L1, L5, L7]

2.4 Therefore in the infinite-order case $g^{j} = g^{k}$ forces $j = k$. Moreover $\langle g \rangle$ is then not finite: a bijection $\psi : \langle g \rangle \to m$ with $m \in \mathbb{N}$ would make $k \mapsto \psi(g^{\iota(k)})$ a map $\sigma(m) \to m$, and that map is injective, since $\iota$ is injective, distinct integer exponents give distinct powers by step 1.3, and $\psi$ is injective; but claim 1 of the pigeonhole principle forbids an injection $\sigma(m) \to m$. [step 1.3, L2, L4, L8]

3.1 In step 2.2 the case $s \ge 1$ is impossible, since it would put $s$ in $S_g$ below its least element; hence $s = 0$, so $r = 0$ and $k = q\iota(n)$. With step 2.1 this is claim 1. [step 1.2, step 2.1, step 2.2, L4]

3.2 Every integer power of $g$ is one of $g^{0}, \dots, g^{n-1}$: given $x \in \mathbb{Z}$, divide $x = q\iota(n) + r$ with $0 \le r < \iota(n)$, write $r = \iota(s)$ with $s \in \mathbb{N}$ and $s < n$ as in step 2.2, and compute $g^{x} = (g^{n})^{q} g^{r} = e^{q} g^{s} = g^{s}$. [step 1.1, step 1.2, step 2.2, L1, L3, L4]

4.1 Claim 3. By [L2] and step 3.2, $\langle g \rangle = \{\, g^{s} : s \in \mathbb{N},\ s < n \,\}$. The map $\varphi : n \to \langle g \rangle$ with $\varphi(s) = g^{s}$ is well defined, the elements of the natural number $n$ being exactly the naturals $s < n$; it is surjective by the displayed description and injective by step 2.3. So $\varphi$ is a bijection, $\langle g \rangle \approx n$, and $\langle g \rangle$ is finite with $|\langle g \rangle| = n = \operatorname{ord}(g)$, the value $|\langle g \rangle|$ being the unique natural equinumerous with $\langle g \rangle$. [step 2.3, step 3.2, L2, L7, L8]

5.1 Claims 1, 2 and 3 are steps 3.1, 2.3 and 4.1, and the infinite-order statement is steps 1.3 and 2.4. [step 3.1, step 2.3, step 4.1, step 1.3, step 2.4] ∎

## Remarks

- **The division algorithm is exactly what is needed and nothing more.** Claim 1 reduces an arbitrary integer exponent to a remainder in $\{0,\dots,n-1\}$; that reduction is the only place where arithmetic in $\mathbb{Z}$ beyond the ring laws enters, and it is why [[thm-division-algorithm-in-z]] is proved on this page.

- **The count in claim 3 starts at exponent $0$.** The $n$ distinct powers are $g^{0} = e, g^{1}, \dots, g^{n-1}$; there are $n$ of them because $n$, as a von Neumann natural, *is* the set $\{0,1,\dots,n-1\}$ of exponents used ([[lem-nat-order-is-membership]]). Reading the list as starting at $g^{1}$ would give a count off by one.

- The identity $|\langle g \rangle| = \operatorname{ord}(g)$ is what makes the order of an element a statement about a subgroup, and is the step on which the later result that the order of an element divides the order of the group rests.
