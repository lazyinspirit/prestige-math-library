---
id: thm-generalised-associativity
kind: theorem
title: "Generalised associativity: in a monoid the product of a finite list does not depend on the bracketing, and in a commutative monoid it does not depend on the order of the factors either"
status: published
origin: session
deps: [def-monoid-finite-product, def-semigroup-and-monoid, thm-induction-principle, def-symmetric-group, def-natural-numbers, def-nat-order, def-nat-addition, def-injection-surjection-bijection, lem-nat-add-commutative, lem-nat-add-associative, lem-nat-add-cancellative, lem-nat-order-add-compatible, lem-nat-order-is-membership, lem-nat-discrete, lem-nat-nonzero-is-successor, lem-nat-trichotomy]
justified_by: []
aliases: [thm-general-associativity, thm-general-commutativity]
landmark: true
short: "bracketing and order do not matter"
proof_strategy: induction
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
    - title: "Associative property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Associative_property"
    - title: "Monoid (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monoid"
    - title: "N. Bourbaki, Algebra I, Ch. I §1.3 (associativity theorem)"
      url: "https://link.springer.com/book/9783540642435"
pipeline_run: null
---

## Statement

Let $(M,\cdot,e)$ be a monoid and let $g : \mathbb{N} \to M$, with finite products
$\prod_{i<n} g_i$ as in [[def-monoid-finite-product]].

1. **Splitting law.** For all $m, n \in \mathbb{N}$,

   $$\prod_{i<m+n} g_i \;=\; \Bigl(\prod_{i<m} g_i\Bigr) \cdot \Bigl(\prod_{j<n} g_{m+j}\Bigr).$$

2. **Regrouping law (bracketing does not matter).** Let $s : \mathbb{N} \to \mathbb{N}$
   satisfy $s_0 = 0$ and $s_j \le s_{\sigma(j)}$ for every $j$, and for each $j$
   let $c_j$ be the unique natural number with $s_j + c_j = s_{\sigma(j)}$. Put
   $B_j := \prod_{l<c_j} g_{s_j + l}$, the product of the $j$-th block of
   consecutive factors. Then for every $r \in \mathbb{N}$,

   $$\prod_{j<r} B_j \;=\; \prod_{i<s_r} g_i .$$

   In words: cut the list $g_0, \dots, g_{s_r - 1}$ into consecutive blocks in any
   way whatever, multiply out each block, and multiply the results in order; the
   answer is the product of the whole list.

3. **Commutative case (order does not matter).** Suppose in addition that $M$ is
   commutative. Let $n \in \mathbb{N}$ and let $\pi \in \operatorname{Sym}(n)$ be a
   permutation of the von Neumann natural $n = \{0,\dots,n-1\}$
   ([[def-symmetric-group]]). Let $h : \mathbb{N} \to M$ be any family with
   $h_i = g_{\pi(i)}$ for every $i < n$. Then

   $$\prod_{i<n} h_i \;=\; \prod_{i<n} g_i .$$

## Facts & Assumptions

**Given:** A monoid $(M,\cdot,e)$, a family $g : \mathbb{N} \to M$, and the products of [[def-monoid-finite-product]], which satisfy $\prod_{i<0} u_i = e$ and $\prod_{i<\sigma(n)} u_i = \bigl(\prod_{i<n} u_i\bigr) \cdot u_n$ for every family $u : \mathbb{N} \to M$, and whose value $\prod_{i<n} u_i$ depends only on $u_0, \dots, u_{n-1}$.

[L1] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] The monoid laws: $\cdot$ is associative and $e$ is a two-sided identity ([[def-semigroup-and-monoid]]).

[L3] Addition on $\mathbb{N}$: $m + 0 = m$ and $m + \sigma(n) = \sigma(m+n)$, so in particular $m + 1 = \sigma(m)$ ([[def-nat-addition]]); addition is commutative and associative ([[lem-nat-add-commutative]], [[lem-nat-add-associative]]) and cancellative ([[lem-nat-add-cancellative]]).

[L4] Order on $\mathbb{N}$: $m \le n$ means $m + k = n$ for some $k \in \mathbb{N}$, and $m < n$ means $m \le n$ with $m \ne n$ ([[def-nat-order]]); $m \le n \iff m + k \le n + k$ and $m < n \iff m + k < n + k$ ([[lem-nat-order-add-compatible]]); exactly one of $m < n$, $m = n$, $n < m$ holds ([[lem-nat-trichotomy]]); $m < n \iff \sigma(m) \le n$ ([[lem-nat-discrete]]); and every $n \ne 0$ is a successor ([[lem-nat-nonzero-is-successor]]).

[L5] On $\mathbb{N}$ the order is membership: $m < n \iff m \in n$, so $n = \{\, m : m < n \,\}$; and $m < \sigma(n) \iff m \le n$; and $n \notin n$ ([[lem-nat-order-is-membership]], [[def-natural-numbers]]).

[L6] A permutation of $n$ is a bijection $n \to n$; bijections are injective and surjective, and composites of injections are injective ([[def-symmetric-group]], [[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** induction.

1.1 Splitting law, base $n = 0$: the left side is $\prod_{i<m+0} g_i = \prod_{i<m} g_i$, and the right side is $\bigl(\prod_{i<m} g_i\bigr) \cdot \prod_{j<0} g_{m+j} = \bigl(\prod_{i<m} g_i\bigr) \cdot e = \prod_{i<m} g_i$; so the two agree, for every $m$. [base, given, L2, L3]

1.2 Splitting law, inductive hypothesis: fix $n$ and assume $\prod_{i<m+n} g_i = \bigl(\prod_{i<m} g_i\bigr) \cdot \bigl(\prod_{j<n} g_{m+j}\bigr)$ for every $m$ and every family $g$. [ih]

1.3 Write $u_j := g_{m+j}$, a family $\mathbb{N} \to M$, so that $\prod_{j<n} g_{m+j} = \prod_{j<n} u_j$ and $u_n = g_{m+n}$. [given]

1.4 In claim 2 the natural $c_j$ exists because $s_j \le s_{\sigma(j)}$, and it is unique by cancellation, so $B_j$ is well defined for every $j$ and $B : \mathbb{N} \to M$ is a family. [given, L3, L4]

1.5 Regrouping law, base $r = 0$: the left side is $\prod_{j<0} B_j = e$ and the right side is $\prod_{i<s_0} g_i = \prod_{i<0} g_i = e$. [base, given]

1.6 Regrouping law, inductive hypothesis: assume $\prod_{j<r} B_j = \prod_{i<s_r} g_i$ for this $r$. [ih]

1.7 Commutative case, base $n = 0$: both products are empty, hence both equal $e$. [base, given]

1.8 Commutative case, inductive hypothesis: fix $n$ and assume that for every family $g$, every $\pi \in \operatorname{Sym}(n)$ and every family $h$ with $h_i = g_{\pi(i)}$ for $i<n$, one has $\prod_{i<n} h_i = \prod_{i<n} g_i$. [ih]

1.9 Successor step, the data. Let $\pi \in \operatorname{Sym}(\sigma(n))$ and let $h$ satisfy $h_i = g_{\pi(i)}$ for every $i < \sigma(n)$. Put $k := \pi^{-1}(n)$, so $k < \sigma(n)$, that is $k \le n$, and let $r$ be the natural with $k + r = n$; then $k + \sigma(r) = \sigma(k+r) = \sigma(n)$. [given, L3, L4, L5, L6, choose]

1.10 The skip map. Define $\delta : \mathbb{N} \to \mathbb{N}$ by $\delta(i) = i$ when $i < k$ and $\delta(i) = \sigma(i)$ when $k \le i$; the two clauses are exhaustive and mutually exclusive by trichotomy, so $\delta$ is a function. It is injective: two arguments below $k$ with equal images are equal; two arguments at least $k$ have equal images only if their successors agree, hence only if they agree; and if $i < k \le j$ then $\delta(i) = i < k \le j < \sigma(j) = \delta(j)$. [L4, L5, construct]

2.1 Splitting law, successor step: $m + \sigma(n) = \sigma(m+n)$, so $\prod_{i<m+\sigma(n)} g_i = \prod_{i<\sigma(m+n)} g_i = \bigl(\prod_{i<m+n} g_i\bigr) \cdot g_{m+n}$; applying the hypothesis and then associativity, this equals $\bigl(\bigl(\prod_{i<m} g_i\bigr) \cdot \prod_{j<n} u_j\bigr) \cdot u_n = \bigl(\prod_{i<m} g_i\bigr) \cdot \bigl(\bigl(\prod_{j<n} u_j\bigr) \cdot u_n\bigr) = \bigl(\prod_{i<m} g_i\bigr) \cdot \prod_{j<\sigma(n)} u_j$, which is the claim at $\sigma(n)$. [step 1.2, step 1.3, given, L2, L3]

2.2 $\delta$ maps $n$ into $\sigma(n) \setminus \{k\}$, and onto it. If $i < k$ then $\delta(i) = i \ne k$ and $i < k \le n < \sigma(n)$. If $k \le i < n$ then $\delta(i) = \sigma(i)$ with $k \le i < \sigma(i)$, so $\delta(i) \ne k$, and $i < n$ gives $\sigma(i) < \sigma(n)$ by compatibility of the order with adding $1$. Conversely let $y < \sigma(n)$ with $y \ne k$. If $y < k$ then $y < k \le n$, so $y < n$ and $y = \delta(y)$. If $k < y$ then $y \ne 0$, so $y = \sigma(x)$ for some $x$; from $k < \sigma(x)$ we get $k \le x$, and from $\sigma(x) < \sigma(n)$ we get $x < n$, so $y = \sigma(x) = \delta(x)$ with $x < n$. [step 1.9, step 1.10, L4, L5]

3.1 By induction the splitting law holds for all $m, n \in \mathbb{N}$; this is claim 1. [step 1.1, step 2.1, L1]

3.2 The reduced permutation. Set $\pi' := \pi \circ \delta$ restricted to $n$. By step 2.2 it maps $n$ into $\pi[\sigma(n) \setminus \{k\}]$, and since $\pi$ is a bijection of $\sigma(n)$ with $\pi(k) = n$, that image set is $\sigma(n) \setminus \{n\} = n$; the same step gives surjectivity onto it, and $\pi'$ is injective as a composite of injections. So $\pi' \in \operatorname{Sym}(n)$. [step 1.9, step 2.2, L5, L6]

4.1 Regrouping law, successor step: $\prod_{j<\sigma(r)} B_j = \bigl(\prod_{j<r} B_j\bigr) \cdot B_r = \bigl(\prod_{i<s_r} g_i\bigr) \cdot \prod_{l<c_r} g_{s_r+l}$ by the hypothesis, and the splitting law with $m = s_r$ and $n = c_r$ turns the right-hand side into $\prod_{i<s_r + c_r} g_i = \prod_{i<s_{\sigma(r)}} g_i$. By induction claim 2 holds for every $r$. [step 3.1, step 1.4, step 1.5, step 1.6, given, L1]

4.2 Splitting the permuted product. By step 1.9 and the splitting law, $\prod_{i<\sigma(n)} h_i = \prod_{i<k+\sigma(r)} h_i = \bigl(\prod_{i<k} h_i\bigr) \cdot \bigl(\prod_{j<\sigma(r)} h_{k+j}\bigr)$; and since $\sigma(r) = 1 + r$, a second application of the splitting law to the family $j \mapsto h_{k+j}$ gives $\prod_{j<\sigma(r)} h_{k+j} = \bigl(\prod_{j<1} h_{k+j}\bigr) \cdot \bigl(\prod_{l<r} h_{k+1+l}\bigr) = h_k \cdot \prod_{l<r} h_{k+\sigma(l)}$. [step 3.1, step 1.9, given, L3]

4.3 Recognising the shorter permuted product. Let $w_i := h_{\delta(i)}$. For $i<k$ one has $w_i = h_i$, and for $l<r$ one has $w_{k+l} = h_{\sigma(k+l)} = h_{k+\sigma(l)}$; so the splitting law at $m = k$, $n = r$ gives $\prod_{i<n} w_i = \bigl(\prod_{i<k} h_i\bigr) \cdot \prod_{l<r} h_{k+\sigma(l)}$. Moreover $w_i = h_{\delta(i)} = g_{\pi(\delta(i))} = g_{\pi'(i)}$ for every $i<n$, by step 2.2 and step 3.2. [step 3.1, step 1.9, step 1.10, step 2.2, step 3.2, L3]

5.1 Moving the removed factor to the end. $h_k = g_{\pi(k)} = g_n$, and $M$ is commutative, so $\bigl(\prod_{i<k} h_i\bigr) \cdot \bigl(h_k \cdot \prod_{l<r} h_{k+\sigma(l)}\bigr) = \bigl(\bigl(\prod_{i<k} h_i\bigr) \cdot \prod_{l<r} h_{k+\sigma(l)}\bigr) \cdot g_n$, using commutativity to exchange $h_k$ with the block to its right and associativity to regroup. [step 1.9, step 4.2, given, L2]

6.1 Applying the hypothesis. The family $w$ satisfies $w_i = g_{\pi'(i)}$ for $i<n$ with $\pi' \in \operatorname{Sym}(n)$, so the inductive hypothesis gives $\prod_{i<n} w_i = \prod_{i<n} g_i$; combining with steps 4.2, 5.1 and 4.3, $\prod_{i<\sigma(n)} h_i = \bigl(\prod_{i<n} g_i\bigr) \cdot g_n = \prod_{i<\sigma(n)} g_i$, which is the claim at $\sigma(n)$. [step 1.8, step 3.2, step 4.2, step 5.1, step 4.3, given]

7.1 By induction claim 3 holds for every $n$; with claims 1 and 2 already established, the theorem is proved. [step 3.1, step 4.1, step 1.7, step 6.1, L1, discharge-induction] ∎

## Remarks

- **What "does not depend on the bracketing" means here, exactly.** The library introduces no formal syntax of bracketed expressions, so the claim is made in the equivalent working form of claim 2: any way of cutting the list into consecutive blocks, multiplying each block out, and multiplying the block values in order returns the same element. Every bracketing of $g_0 g_1 \cdots g_{n-1}$ is obtained by iterating that cut, so claim 2 is what is used whenever one drops brackets in a long product.

- **The order of the factors is a separate question from the bracketing.** Claim 2 holds in any monoid and never moves a factor past another; claim 3 does move factors, and is false without commutativity. In $\operatorname{Sym}(\{1,2,3\})$ the two transpositions $(1\,2)$ and $(2\,3)$ already give $\tau\rho \ne \rho\tau$ ([[lem-symmetric-group-is-a-group]]).

- **The empty product carries the induction.** Both inductions start at $n = 0$ with the value $e$; $\mathbb{N}$ contains $0$, so this is a real base case and not a degenerate convention.
