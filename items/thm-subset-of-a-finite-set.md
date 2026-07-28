---
id: thm-subset-of-a-finite-set
kind: theorem
title: "A subset of a finite set is finite, with $\\lvert B\\rvert \\le \\lvert A\\rvert$, and equality holds if and only if $B = A$"
status: draft
origin: session
deps: [def-finite-cardinality, def-countable, def-equinumerous, def-injection-surjection-bijection,
       def-natural-numbers, lem-nat-order-is-membership, def-nat-order, def-nat-addition,
       thm-induction-principle, lem-nat-add-cancellative, lem-nat-order-add-compatible,
       lem-nat-discrete, thm-well-ordering-principle]
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
sources:
  scraped: []
  references:
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "Dedekind-infinite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dedekind-infinite_set"
    - title: "P. Halmos, Naive Set Theory, §13"
      url: "https://en.wikipedia.org/wiki/Naive_Set_Theory_(book)"
pipeline_run: null
---

## Statement

Let $A$ be a finite set ([[def-countable]]) and let $B \subseteq A$. Then:

1. $B$ is finite;
2. $\lvert B\rvert \le \lvert A\rvert$ ([[def-finite-cardinality]]);
3. $\lvert B\rvert = \lvert A\rvert$ if and only if $B = A$;
4. every injection $f : A \to A$ is a bijection, and every surjection
   $f : A \to A$ is a bijection.

Clause 3 is the finite form of the Dedekind statement: a finite set is not
equinumerous with a proper subset of itself. Clause 4 is its working form, and
**finiteness is exactly the hypothesis that fails in general**: the successor map
is an injection of $\mathbb{N}$ into itself that is not surjective, which is the
false statement recorded on this page's companion.

## Facts & Assumptions

**Given:** A finite set $A$, its cardinality $n := \lvert A\rvert$, and a subset $B \subseteq A$. Throughout, $\sigma(n) = n \cup \{n\}$ and $\sigma(n) = n + 1$, the latter because $n + \sigma(0) = \sigma(n + 0) = \sigma(n)$ ([[def-nat-addition]]).

[L1] Induction: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L2] On $\mathbb{N}$ the order is membership: $m < n \iff m \in n$, $m \le n \iff m \subseteq n$, and $n = \{\, m \in \mathbb{N} : m < n \,\}$; also $m < \sigma(n) \iff m \le n$ ([[lem-nat-order-is-membership]], [[def-nat-order]], [[def-natural-numbers]]). By the definition of the strict order, $m < m$ is impossible.

[L3] Cardinality ([[def-finite-cardinality]]): $\lvert A\rvert$ is the unique natural with $A \approx \lvert A\rvert$; $\lvert n\rvert = n$; $\lvert\varnothing\rvert = 0$; and if $A$ is finite and $A \approx B$ then $B$ is finite with $\lvert B\rvert = \lvert A\rvert$ (transport).

[L4] Maps and equinumerosity ([[def-injection-surjection-bijection]], [[def-equinumerous]], [[def-countable]]): $A$ is finite when $A \approx m$ for some $m \in \mathbb{N}$; the restriction of an injection to a subset of its domain is an injection; an injection is a bijection onto its image; inverses and composites of bijections are bijections; and $f^{-1}[f[S]] = S$ for a bijection $f$ and $S$ contained in its domain.

[L5] Order and successor: $k \le n$ implies $\sigma(k) \le \sigma(n)$, and $\sigma(k) = \sigma(n)$ implies $k = n$ ([[lem-nat-order-add-compatible]], [[lem-nat-add-cancellative]], with $\sigma(m) = m + 1$).

[L6] Discreteness: $m < n \iff \sigma(m) \le n$ ([[lem-nat-discrete]]).

[L7] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** induction.

1.1 The whole theorem rests on the special case where the ambient set is a natural number, which we call $(\ast)$: for every $n \in \mathbb{N}$ and every $B \subseteq n$, the set $B$ is finite, $\lvert B\rvert \le n$, and $\lvert B\rvert = n$ implies $B = n$. It is proved by induction on $n$. [given]

1.2 Base case $n = 0$. Since $0 = \varnothing$, a subset $B \subseteq 0$ satisfies $B = \varnothing = 0$; so $B$ is finite with $\lvert B\rvert = 0 \le 0$, and $\lvert B\rvert = 0$ indeed gives $B = 0$. [base, L3, L2]

1.3 Inductive hypothesis. Fix $n \in \mathbb{N}$ and assume $(\ast)$ holds for $n$: every $C \subseteq n$ is finite with $\lvert C\rvert \le n$, and $\lvert C\rvert = n$ implies $C = n$. [ih]

2.1 Let $B \subseteq \sigma(n) = n \cup \{n\}$ and put $B' := B \cap n$, so that $B' \subseteq n$, and $B = B'$ when $n \notin B$ while $B = B' \cup \{n\}$ with $n \notin B'$ when $n \in B$. By the inductive hypothesis of step 1.3 the set $B'$ is finite; write $k := \lvert B'\rvert$, so $k \le n$, and $k = n$ forces $B' = n$. [step 1.3, L2]

3.1 Case $n \notin B$. Here $B = B'$ is finite with $\lvert B\rvert = k \le n$, and $k \le n \le \sigma(n)$ gives $\lvert B\rvert \le \sigma(n)$; moreover $\lvert B\rvert = \sigma(n)$ is impossible, since $\sigma(n) = k \le n$ would give $n < n$ by [L6], so the third assertion of $(\ast)$ holds vacuously in this case. [step 2.1, L2, L6]

3.2 Case $n \in B$. Choose a bijection $g : k \to B'$, which exists because $\lvert B'\rvert = k$, and define $h : \sigma(k) \to B$ by $h(i) = g(i)$ for $i \in k$ and $h(k) = n$; the two clauses do not conflict, since $k \notin k$. Then $h$ is injective, because $g$ is injective and takes its values in $B' \subseteq n$, so no value $g(i)$ equals $n$; and $h$ is surjective onto $B = B' \cup \{n\}$. Hence $B \approx \sigma(k)$, so $B$ is finite with $\lvert B\rvert = \sigma(k)$. [step 2.1, L3, L4, construct]

4.1 In the case $n \in B$ we therefore have $\lvert B\rvert = \sigma(k) \le \sigma(n)$, because $k \le n$; and if $\lvert B\rvert = \sigma(n)$ then $\sigma(k) = \sigma(n)$, so $k = n$, so $B' = n$ and therefore $B = n \cup \{n\} = \sigma(n)$. [step 2.1, step 3.2, L5]

5.1 The two cases are exhaustive, so $(\ast)$ holds at $\sigma(n)$ whenever it holds at $n$; with the base case this gives $(\ast)$ for every $n \in \mathbb{N}$. [step 1.2, step 1.3, step 3.1, step 4.1, L1]

6.1 Clauses 1 and 2 in general. Fix a bijection $u : A \to n$, available since $n = \lvert A\rvert$. Then $u[B] \subseteq n$, and the restriction of $u$ to $B$ is a bijection of $B$ onto $u[B]$, so $B \approx u[B]$. By $(\ast)$ the set $u[B]$ is finite with $\lvert u[B]\rvert \le n$, hence $B$ is finite with $\lvert B\rvert = \lvert u[B]\rvert \le n = \lvert A\rvert$. [step 5.1, L3, L4]

7.1 Clause 3. If $B = A$ then $\lvert B\rvert = \lvert A\rvert$. Conversely assume $\lvert B\rvert = \lvert A\rvert = n$. Then $\lvert u[B]\rvert = \lvert B\rvert = n$ by transport, so $u[B] = n$ by $(\ast)$, and therefore $B = u^{-1}[u[B]] = u^{-1}[n] = A$, because $u$ is a bijection of $A$ onto $n$. [step 5.1, step 6.1, L3, L4]

8.1 Clause 4, the injective half. Let $f : A \to A$ be injective. Then $f$ is a bijection of $A$ onto its image $f[A] \subseteq A$, so $\lvert f[A]\rvert = \lvert A\rvert$ by transport, and clause 3 gives $f[A] = A$. Thus $f$ is surjective, hence a bijection. [step 7.1, L3, L4]

9.1 Clause 4, the surjective half. Let $f : A \to A$ be surjective. For each $b \in A$ the set $u[f^{-1}[\{b\}]] \subseteq n$ is nonempty, so it has a least element by [L7]; let $g(b)$ be the value of $u^{-1}$ at that least element. No choice principle is used, since each $g(b)$ is determined by $b$ rather than selected. By construction $g(b) \in f^{-1}[\{b\}]$, that is $f(g(b)) = b$ for every $b$; and $g$ is injective, since $g(b) = g(b')$ gives $b = f(g(b)) = f(g(b')) = b'$. So $g$ is a bijection by step 8.1. [step 6.1, step 8.1, L4, L7, construct]

10.1 Composing $f \circ g = \mathrm{id}_A$ on the right with $g^{-1}$ gives $f = g^{-1}$, which is a bijection; so a surjection of $A$ onto itself is a bijection, and in particular an injection. [step 9.1, L4]

11.1 Clauses 1 and 2 are step 6.1, clause 3 is step 7.1, and clause 4 is steps 8.1 and 10.1, each resting on the induction that establishes $(\ast)$. [step 5.1, step 6.1, step 7.1, step 8.1, step 10.1, discharge-induction] ∎

## Remarks

- **Where finiteness is spent.** Only in $(\ast)$, and there only through the base
  case $0 = \varnothing$ and the fact that removing the top point of $\sigma(n)$
  leaves $n$. Clause 4 then follows formally, which is why the failure of clause 4
  for $\mathbb{N}$ is a failure of finiteness and of nothing else.

- **The surjective half needs no choice.** The obvious argument, "pick a preimage
  of each $b$", would need a choice function on the fibres. Transporting the
  fibres into $\mathbb{N}$ and taking least elements replaces the choice by a
  determination, which is what [[thm-well-ordering-principle]] is for.

- **Clause 2 is not the pigeonhole principle restated.** [[lem-pigeonhole]] is
  about injections between natural numbers, and it is what makes
  [[def-finite-cardinality]] well posed in the first place; clause 2 compares the
  cardinalities of a set and a subset, and is proved here by induction directly.
