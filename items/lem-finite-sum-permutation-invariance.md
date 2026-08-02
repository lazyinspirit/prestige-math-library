---
id: lem-finite-sum-permutation-invariance
kind: lemma
title: "A finite sum is unchanged by a permutation of its index range: $\\sum_{k<n} a_{\\pi(k)} = \\sum_{k<n} a_k$ for every bijection $\\pi : n \\to n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-finite-sum, lem-finite-sum-laws, def-nat-finite-sum-and-product, def-injection-surjection-bijection,
       thm-induction-principle, thm-omega-is-peano-system, def-natural-numbers,
       lem-nat-order-is-membership, lem-nat-nonzero-is-successor, lem-nat-discrete,
       def-nat-order, lem-nat-add-associative, lem-nat-add-commutative,
       lem-nat-mult-associative, lem-nat-mult-commutative, lem-nat-add-identity,
       lem-nat-mult-identity, def-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Permutation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Permutation"
    - title: "Summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Summation"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $\pi : n \to n$ be a bijection
([[def-injection-surjection-bijection]]). Then:

1. for every list $a : n \to \mathbb{R}$,
   $\displaystyle\sum_{k<n} a_{\pi(k)} = \sum_{k<n} a_k$ and
   $\displaystyle\prod_{k<n} a_{\pi(k)} = \prod_{k<n} a_k$ ([[def-finite-sum]]);
2. for every list $a : n \to \mathbb{N}$,
   $\displaystyle\sum_{k<n} a_{\pi(k)} = \sum_{k<n} a_k$ and
   $\displaystyle\prod_{k<n} a_{\pi(k)} = \prod_{k<n} a_k$
   ([[def-nat-finite-sum-and-product]]).

**This is not in [[lem-finite-sum-laws]].** That item proves additivity,
scaling, splitting, monotonicity, telescoping and the product laws, and states no
invariance clause; the same is true of the $\mathbb{N}$-valued list on this page.
Permutation invariance is exactly what makes a sum over a finite *set* of indices
well posed, which is the next item, so it is proved here first.

## Facts & Assumptions

**Given:** A natural number $n$, a bijection $\pi : n \to n$, and a list $a$ of length $n$. Throughout, $\sigma(n) = n \cup \{n\}$, $n = \{\, k : k < n\,\}$, and $\ast$ denotes any **one** of the four operations $(\mathbb{R},+)$, $(\mathbb{R},\cdot)$, $(\mathbb{N},+)$, $(\mathbb{N},\cdot)$, with $e$ the corresponding identity element $0$, $1$, $0$, $1$. Write $\bigstar_{k<n} c_k$ for the associated iterated operation, that is, for $\sum_{k<n} c_k$ in the two additive cases and $\prod_{k<n} c_k$ in the two multiplicative ones.

[L1] Induction ([[thm-induction-principle]]).

[L2] The four iterated operations obey the **same two recursion clauses**: $\bigstar_{k<0} c_k = e$ and $\bigstar_{k<\sigma(n)} c_k = \big(\bigstar_{k<n} c_k\big) \ast c_n$ ([[def-finite-sum]], [[def-nat-finite-sum-and-product]]).

[L3] Each of the four operations is associative and commutative on its set and has $e$ as a two-sided identity ([[def-field]], [[def-ordered-field]] for $\mathbb{R}$; [[lem-nat-add-associative]], [[lem-nat-add-commutative]], [[lem-nat-mult-associative]], [[lem-nat-mult-commutative]], [[lem-nat-add-identity]], [[lem-nat-mult-identity]] for $\mathbb{N}$). **These three properties are the only facts about $\ast$ used below**, which is why one argument proves all four clauses.

[L4] Order and membership: $k < n \iff k \in n$, $n = \{\, k : k < n\,\}$, $k < \sigma(n) \iff k \le n$, $n \notin n$, and $\sigma(n) \setminus \{n\} = n$ ([[lem-nat-order-is-membership]], [[def-natural-numbers]], [[def-nat-order]]).

[L5] Discreteness and successors: $m < n \iff \sigma(m) \le n$; every nonzero natural is $\sigma(s)$ for a unique $s$ ([[lem-nat-discrete]], [[lem-nat-nonzero-is-successor]], [[thm-omega-is-peano-system]]).

[L6] Maps: a composite of bijections is a bijection; a bijection restricted to a subset of its domain is a bijection onto the image of that subset ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** induction.

1.1 For $n \in \mathbb{N}$ and $j \le n$ define $d^{n}_{j} : n \to \sigma(n)$ by $d^{n}_{j}(k) = k$ for $k < j$ and $d^{n}_{j}(k) = \sigma(k)$ for $j \le k < n$; this is the increasing enumeration of $\sigma(n) \setminus \{j\}$. It is a bijection of $n$ onto $\sigma(n) \setminus \{j\}$: its values lie in $\sigma(n)$ and avoid $j$, since $k < j$ in the first clause and $\sigma(k) > k \ge j$ in the second; it is injective, being strictly increasing on each clause and satisfying $k < j \le \sigma(k')$ across them; and it is surjective, since $t \in \sigma(n)$ with $t < j$ has $t < n$ and $d^{n}_{j}(t) = t$, while $t > j$ is nonzero, so $t = \sigma(s)$ with $j \le s$ by [L5] and $s < n$ because $\sigma(s) \le n$, giving $d^{n}_{j}(s) = t$. [L4, L5, L6, construct]

1.2 Claim $(A)$ at $n = 0$: for a list $c$ of length $\sigma(0) = 1$ and the only admissible index $j = 0$, both sides of $(A)$ read $c_0$, since $\bigstar_{k<1} c_k = e \ast c_0 = c_0$ and $\big(\bigstar_{k<0} c_{d^{0}_{0}(k)}\big) \ast c_0 = e \ast c_0 = c_0$. [base, L2, L3]

1.3 Inductive hypothesis for $(A)$: fix $n$ and assume that for every list $c$ of length $\sigma(n)$ and every $j \le n$ one has $\bigstar_{k<\sigma(n)} c_k = \big(\bigstar_{k<n} c_{d^{n}_{j}(k)}\big) \ast c_j$. [ih]

1.4 The main claim at $n = 0$: the only bijection $0 \to 0$ is the empty map and both sides are the empty iterate $e$. [L2]

2.1 Inductive step for $(A)$. Let $c$ be a list of length $\sigma(\sigma(n))$ and let $j \le \sigma(n)$. If $j = \sigma(n)$ then $d^{\sigma(n)}_{j}$ is the identity of $\sigma(n)$, so the right-hand side is $\big(\bigstar_{k<\sigma(n)} c_k\big) \ast c_{\sigma(n)}$, which is the left-hand side by [L2]. If instead $j \le n$, apply the hypothesis of step 1.3 to the restriction of $c$ to $\sigma(n)$ to get $\bigstar_{k<\sigma(n)} c_k = \big(\bigstar_{k<n} c_{d^{n}_{j}(k)}\big) \ast c_j$; hence $\bigstar_{k<\sigma(\sigma(n))} c_k = \big(\big(\bigstar_{k<n} c_{d^{n}_{j}(k)}\big) \ast c_j\big) \ast c_{\sigma(n)} = \big(\big(\bigstar_{k<n} c_{d^{n}_{j}(k)}\big) \ast c_{\sigma(n)}\big) \ast c_j$ by [L3]. Finally $d^{\sigma(n)}_{j}$ agrees with $d^{n}_{j}$ on $n$ and sends $n$ to $\sigma(n)$, because $j \le n$, so the inner bracket is $\bigstar_{k<\sigma(n)} c_{d^{\sigma(n)}_{j}(k)}$ by [L2], which is the right-hand side at $\sigma(n)$. [step 1.3, L2, L3]

3.1 Claim $(A)$ therefore holds for every $n$: for every list $c$ of length $\sigma(n)$ and every $j \le n$, $\bigstar_{k<\sigma(n)} c_k = \big(\bigstar_{k<n} c_{d^{n}_{j}(k)}\big) \ast c_j$. Informally, any single entry may be moved to the end without changing the value. [step 1.2, step 2.1, L1]

4.1 Inductive step for the main claim. Assume it at $n$, for every list of length $n$ and every bijection of $n$. Let $\pi : \sigma(n) \to \sigma(n)$ be a bijection, let $a$ be a list of length $\sigma(n)$, and put $j := \pi^{-1}(n) \le n$. Applying $(A)$ to the list $c_k := a_{\pi(k)}$ at the index $j$ gives $\bigstar_{k<\sigma(n)} a_{\pi(k)} = \big(\bigstar_{k<n} a_{\rho(k)}\big) \ast a_{\pi(j)}$ with $\rho := \pi \circ d^{n}_{j}$ and $a_{\pi(j)} = a_n$. Now $\rho$ is a bijection of $n$ onto $n$: $d^{n}_{j}$ is a bijection of $n$ onto $\sigma(n)\setminus\{j\}$ by step 1.1, and $\pi$ restricts to a bijection of $\sigma(n)\setminus\{j\}$ onto $\sigma(n)\setminus\{n\} = n$. So the inductive hypothesis applies to $\rho$ and gives $\bigstar_{k<n} a_{\rho(k)} = \bigstar_{k<n} a_k$, whence $\bigstar_{k<\sigma(n)} a_{\pi(k)} = \big(\bigstar_{k<n} a_k\big) \ast a_n = \bigstar_{k<\sigma(n)} a_k$. [step 1.1, step 3.1, assume-hyp, L2, L4, L6]

5.1 By induction the main claim holds for every $n \in \mathbb{N}$, every list of length $n$ and every bijection $\pi : n \to n$. [step 1.4, step 4.1, L1]

6.1 Since $\ast$ was any one of the four operations of the Given, and [L3] holds for each of them, step 5.1 is exactly clauses 1 and 2. [step 5.1, L3, discharge-induction] ∎

## Remarks

- **Where the deletion map earns its keep.** The usual textbook proof says "move
  the term $a_n$ to the end and delete it", and leaves the resulting map on the
  shorter index range unexamined. That map is $d^{n}_{j}$ composed with $\pi$,
  and checking that it really is a bijection of $n$ onto $n$ is the only place
  where anything can go wrong; step 1.1 writes it down and verifies it in both
  directions.

- **One proof, four statements.** Only associativity, commutativity, the identity
  and the two recursion clauses are used, so the argument is indifferent to which
  of the four operations is meant. The same observation is what later licenses
  the identical statement in an arbitrary monoid, where it belongs; nothing here
  needs that generality.

- **No choice is used.** The index $j = \pi^{-1}(n)$ is determined, not selected,
  because $\pi$ is a bijection.
