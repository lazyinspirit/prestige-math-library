---
id: lem-span-is-the-set-of-linear-combinations
kind: lemma
title: "$\\operatorname{span}(S)$ is exactly the set of linear combinations of finite lists of elements of $S$, and $\\operatorname{span}(\\varnothing) = \\{0_V\\}$"
status: draft
origin: session
deps: [def-linear-combination-and-span, def-monoid-finite-product, lem-linear-subspace-criterion, def-linear-subspace, def-vector-space, lem-vector-space-elementary-consequences, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership, def-field]
justified_by: []
aliases: []
landmark: true
short: "$\\operatorname{span}(S)$ from inside"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Linear span (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_span"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and let
$S \subseteq V$. Write

$$L(S) \;:=\; \Bigl\{\, \sum_{i<n} \lambda_i v_i \;:\; n \in \mathbb{N},\ \lambda : n \to F,\ v : n \to S \,\Bigr\}$$

for the set of linear combinations of elements of $S$
([[def-linear-combination-and-span]]). Then

$$\operatorname{span}(S) \;=\; L(S).$$

In particular $\operatorname{span}(\varnothing) = \{0_V\}$, and for every
$S \subseteq V$ the span of $S$ contains $0_V$ as the empty linear combination.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, and a subset $S \subseteq V$.

[L1] $\operatorname{span}(S)$ is a linear subspace of $V$, it contains $S$, and it is contained in every linear subspace of $V$ that contains $S$ ([[def-linear-combination-and-span]]).

[L2] Finite sums in $(V,+,0_V)$, written additively: $\sum_{i<0} u_i = 0_V$; $\sum_{i<\sigma(n)} u_i = \bigl(\sum_{i<n} u_i\bigr) + u_n$; and the value of $\sum_{i<n} u_i$ depends only on $u_0, \dots, u_{n-1}$, so a list $u : n \to V$ determines it ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L3] Induction on $\mathbb{N}$: a property holding at $0$ and passing from $n$ to $\sigma(n)$ holds at every natural number ([[thm-induction-principle]]).

[L4] The vector space axioms ([[def-vector-space]]): $(V,+,0_V)$ is an abelian group, so $+$ is associative and commutative and $0_V$ is a two-sided identity; (V2) $\lambda(u+w) = \lambda u + \lambda w$; (V4) $(\lambda\mu)w = \lambda(\mu w)$; (V5) $1_F w = w$.

[L5] $\lambda 0_V = 0_V$ for every $\lambda \in F$ ([[lem-vector-space-elementary-consequences]]).

[L6] A linear subspace satisfies (W1) $0_V \in W$, (W2) closure under $+$, (W3) closure under scalar multiplication; and a nonempty $T \subseteq V$ with $\lambda u + v \in T$ for all $\lambda \in F$, $u, v \in T$ is a linear subspace ([[def-linear-subspace]], [[lem-linear-subspace-criterion]]).

[L7] $\sigma(n) = n \cup \{n\}$ and $n \notin n$; $n = \{\, m \in \mathbb{N} : m < n \,\}$; and $0 \in n$ whenever $n \ne 0$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]).

## Proof

**Proof technique:** direct.

1.1 $L(S) \subseteq V$ by construction, and $0_V \in L(S)$: take $n = 0$, whose only lists are the empty ones, and whose sum is the empty sum $0_V$. In particular $L(S)$ is nonempty. [L2]

1.2 $S \subseteq L(S)$: for $w \in S$ take $n = 1$ with $\lambda_0 = 1_F$ and $v_0 = w$, so that $\sum_{i<1} \lambda_i v_i = 0_V + 1_F w = 1_F w = w$, using the recursion at $\sigma(0) = 1$, the identity law and (V5). [L2, L4]

1.3 Extending a list. Let $A$ be a set, $n \in \mathbb{N}$, $u : n \to A$ and $x \in A$. Since $\sigma(n) = n \cup \{n\}$ and $n \notin n$, there is exactly one $u' : \sigma(n) \to A$ with $u'(i) = u(i)$ for $i < n$ and $u'(n) = x$; and when $A = V$, the recursion gives $\sum_{i<\sigma(n)} u'_i = \bigl(\sum_{i<n} u_i\bigr) + x$. [L2, L7]

1.4 Scalars pass through a finite sum: for every $\mu \in F$, every $n \in \mathbb{N}$ and every list $u : n \to V$, $\mu \sum_{i<n} u_i = \sum_{i<n} \mu u_i$. By induction on $n$: at $n = 0$ both sides are $0_V$, since $\mu 0_V = 0_V$; and if the identity holds at $n$, then for a list on $\sigma(n)$ we get $\mu \sum_{i<\sigma(n)} u_i = \mu\bigl(\sum_{i<n} u_i + u_n\bigr) = \mu \sum_{i<n} u_i + \mu u_n = \sum_{i<n} \mu u_i + \mu u_n = \sum_{i<\sigma(n)} \mu u_i$, by (V2), the inductive hypothesis and the recursion. [L2, L3, L4, L5]

1.5 A linear subspace $W$ with $S \subseteq W$ contains every linear combination of elements of $S$. By induction on $n$: at $n = 0$ the sum is $0_V \in W$ by (W1); and if every such combination of length $n$ lies in $W$, then for lists $\lambda : \sigma(n) \to F$ and $v : \sigma(n) \to S$ we have $\sum_{i<\sigma(n)} \lambda_i v_i = \bigl(\sum_{i<n} \lambda_i v_i\bigr) + \lambda_n v_n$, whose first summand lies in $W$ by the inductive hypothesis and whose second lies in $W$ by (W3) applied to $v_n \in S \subseteq W$, so the whole lies in $W$ by (W2). [L2, L3, L6]

1.6 The only function $v : n \to \varnothing$ has $n = 0$: if $n \ne 0$ then $0 \in n$, and $v(0)$ would be an element of $\varnothing$. So the only linear combination of elements of $\varnothing$ is the empty sum, and $L(\varnothing) = \{0_V\}$. [L2, L7]

2.1 $L(S)$ is closed under scalar multiplication: if $w = \sum_{i<n} \lambda_i v_i$ with $\lambda : n \to F$ and $v : n \to S$, and $\mu \in F$, then $\mu w = \sum_{i<n} \mu(\lambda_i v_i) = \sum_{i<n} (\mu\lambda_i) v_i$ by (V4), and $i \mapsto \mu\lambda_i$ is a list $n \to F$, so $\mu w \in L(S)$. [step 1.4, L4]

2.2 $L(S)$ is closed under addition. Fix $x \in L(S)$; we show by induction on $n$ that $x + \sum_{i<n} \mu_i v_i \in L(S)$ for all lists $\mu : n \to F$ and $v : n \to S$. At $n = 0$ the sum is $0_V$ and $x + 0_V = x \in L(S)$. Assume it at $n$ and let $\mu : \sigma(n) \to F$, $v : \sigma(n) \to S$; then $x + \sum_{i<\sigma(n)} \mu_i v_i = \bigl(x + \sum_{i<n} \mu_i v_i\bigr) + \mu_n v_n$ by the recursion and associativity, and $y := x + \sum_{i<n} \mu_i v_i$ lies in $L(S)$ by the inductive hypothesis, say $y = \sum_{i<m} \nu_i w_i$ with $\nu : m \to F$ and $w : m \to S$; extending $\nu$ by $\mu_n$ and $w$ by $v_n$ as in step 1.3 gives lists on $\sigma(m)$ whose combination is $y + \mu_n v_n$, so $x + \sum_{i<\sigma(n)} \mu_i v_i \in L(S)$. [step 1.3, L2, L3, L4]

2.3 $L(S) \subseteq \operatorname{span}(S)$: the span is a linear subspace of $V$ containing $S$, so by step 1.5 it contains every linear combination of elements of $S$. [step 1.5, L1]

3.1 $L(S)$ is a linear subspace of $V$: it is nonempty, and for $\lambda \in F$ and $u, v \in L(S)$ we have $\lambda u \in L(S)$ and then $\lambda u + v \in L(S)$, so the one-step test applies. [step 1.1, step 2.1, step 2.2, L6]

4.1 $\operatorname{span}(S) \subseteq L(S)$: by steps 1.2 and 3.1 the set $L(S)$ is a linear subspace of $V$ containing $S$, and the span is contained in every such subspace. [step 1.2, step 3.1, L1]

5.1 Combining the two inclusions, $\operatorname{span}(S) = L(S)$. [step 2.3, step 4.1]

6.1 Taking $S = \varnothing$ and using step 1.6 gives $\operatorname{span}(\varnothing) = L(\varnothing) = \{0_V\}$; and for arbitrary $S$, the empty combination shows $0_V \in L(S) = \operatorname{span}(S)$. [step 1.1, step 1.6, step 5.1] ∎

## Remarks

- **Two descriptions of one object.** The definition of
  $\operatorname{span}(S)$ is from outside, cutting down from all linear subspaces
  containing $S$; this lemma describes it from inside, as the vectors actually
  built from $S$. The same pair of descriptions appears for the subgroup generated
  by a set ([[def-generated-subgroup]],
  [[lem-cyclic-subgroup-is-the-set-of-powers]]), and the proof has the same shape:
  the inside set is shown to be a linear subspace containing $S$, which gives one
  inclusion, and every linear subspace containing $S$ is shown closed under the
  construction, which gives the other.

- **$\operatorname{span}(\varnothing) = \{0_V\}$ is a consequence, not a
  convention.** It comes from the empty sum being $0_V$, which is itself forced by
  the recursion defining finite products ([[def-monoid-finite-product]]). Nothing
  is stipulated at the empty set, and $n = 0$ is a genuine case of every induction
  above.

- **No finiteness assumption on $S$.** The set $S$ may be infinite; what is finite
  is each individual list. So a vector lies in $\operatorname{span}(S)$ exactly
  when it is built from finitely many elements of $S$, however large $S$ is. The
  companion page uses this for $S$ an infinite subset of a function space.
