---
id: thm-dimension-of-a-linear-subspace
kind: theorem
title: "If $\\dim_F V = n$ and $U$ is a linear subspace of $V$, then $U$ is finite-dimensional, $\\dim_F U \\le n$, and $\\dim_F U = n$ if and only if $U = V$"
status: draft
origin: session
deps: [def-dimension, cor-independent-set-is-no-larger-than-a-finite-spanning-set, lem-adjoining-a-vector-outside-the-span, def-linear-basis, def-linear-independence, def-linear-subspace, def-linear-combination-and-span, lem-span-monotone-and-idempotent, def-vector-space, def-field, thm-well-ordering-principle, def-countable, def-equinumerous, def-injection-surjection-bijection, lem-pigeonhole, def-natural-numbers, lem-nat-order-is-membership, def-nat-order, thm-nat-linear-order, lem-nat-nonzero-is-successor]
justified_by: []
aliases: [thm-subspace-dimension]
landmark: true
short: "$\\dim_F U \\le \\dim_F V$, with equality only at $U = V$"
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
    - title: "Dimension (vector space) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dimension_(vector_space)"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) that is
finite-dimensional with $\dim_F V = n$ ([[def-dimension]]), and let $U$ be a
linear subspace of $V$ ([[def-linear-subspace]]). Then

1. $U$ is finite-dimensional over $F$ and $\dim_F U \le n$;
2. $\dim_F U = n$ **if and only if** $U = V$;
3. **Extension, with no choice principle.** Every linearly independent
   $A_0 \subseteq U$ is contained in a basis of $U$: there is a basis $B$ of $U$
   with $A_0 \subseteq B \subseteq U$. Claim 1 is the case $A_0 = \varnothing$.
   Since $V$ is itself a linear subspace of $V$ ([[def-linear-subspace]]), claim 3
   applies with $V$ in place of $U$, and hence to **any** finite-dimensional
   vector space over $F$ in place of the pair $(V, U)$.

**Nothing above uses a choice principle**, and claim 3 in particular is the
finite-dimensional substitute for the Zorn-based extension theorem stated earlier
on this page. In finite dimension the extension terminates on its own, because
[[cor-independent-set-is-no-larger-than-a-finite-spanning-set]] bounds the size
of an independent set and [[thm-well-ordering-principle]] then supplies a largest
one; no selection is made anywhere.

**Finiteness is essential in claim 2.** Without it the equality case fails: the
companion page exhibits a
proper linear subspace of an infinite-dimensional space whose basis is
equinumerous with a basis of the whole space.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$ with $\dim_F V = n$, and a linear subspace $U$ of $V$.

[L1] $\dim_F V = n$ means $V$ has a basis $B$ with $B \approx n$, and a basis is a linearly independent spanning subset ([[def-dimension]], [[def-linear-basis]], [[def-linear-independence]], [[def-linear-combination-and-span]]).

[L2] If $V$ has a spanning subset with $p$ elements, then every linearly independent subset of $V$ is finite with at most $p$ elements ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

[L3] For $A \subseteq U$, linear independence computed in $U$ and in $V$ is the same condition, and $\operatorname{span}_U(A) = \operatorname{span}_V(A)$; so $A$ is a basis of $U$ exactly when $A$ is linearly independent and $\operatorname{span}(A) = U$ ([[def-linear-basis]], section on bases of a linear subspace, [[def-linear-subspace]]).

[L4] If $A$ is linearly independent and $w \notin \operatorname{span}(A)$, then $w \notin A$ and $A \cup \{w\}$ is linearly independent ([[lem-adjoining-a-vector-outside-the-span]], claim 2).

[L5] $\operatorname{span}(A)$ is a linear subspace of $V$ containing $A$ and contained in every linear subspace of $V$ containing $A$ ([[def-linear-combination-and-span]], [[lem-span-monotone-and-idempotent]]).

[L6] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]); $\le$ is a total order; $m < \sigma(p) \iff m \le p$; every $p \ne 0$ is a successor; and $\sigma(p) = p \cup \{p\}$ with $p \notin p$ ([[thm-nat-linear-order]], [[def-nat-order]], [[lem-nat-order-is-membership]], [[lem-nat-nonzero-is-successor]], [[def-natural-numbers]]).

[L7] A finite set is equinumerous with exactly one natural number ([[lem-pigeonhole]], claim 3); $\varnothing \approx 0$, and $X \approx Y$ means a bijection exists ([[def-equinumerous]], [[def-countable]], [[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 Fix a basis $B$ of $V$ with $B \approx n$. It spans $V$ and is finite of size $n$, so every linearly independent subset of $V$ is finite with at most $n$ elements. [L1, L2]

1.2 A subset $A \subseteq U$ is linearly independent as a subset of $U$ exactly when it is linearly independent as a subset of $V$, and its span is the same set computed in either space; so "basis of $U$" is unambiguous, and every linearly independent subset of $U$ is a linearly independent subset of $V$. [L3]

1.3 A nonempty $K \subseteq \mathbb{N}$ with an upper bound has a greatest element. Let $M$ be the set of upper bounds of $K$ in $\mathbb{N}$, nonempty by hypothesis, and let $j_0$ be its least element. If $j_0 = 0$ then every $k \in K$ satisfies $k \le 0$, hence $k = 0$, and $K$ is nonempty, so $0 \in K$. If $j_0 \ne 0$, write $j_0 = \sigma(p)$ and suppose $j_0 \notin K$; then every $k \in K$ satisfies $k \le j_0$ and $k \ne j_0$, hence $k < \sigma(p)$, hence $k \le p$, so $p \in M$ with $p < j_0$, contradicting leastness. Either way $j_0 \in K$, and $j_0$ is an upper bound, so it is the greatest element of $K$. [L6]

2.1 Fix a linearly independent $A_0 \subseteq U$, possibly empty, and let $K := \{\, p \in \mathbb{N} : \text{some linearly independent } A \text{ with } A_0 \subseteq A \subseteq U \text{ has } A \approx p \,\}$. Then $K$ is nonempty: by step 1.2 the set $A_0$ is a linearly independent subset of $V$, so it is finite by step 1.1, say $A_0 \approx a_0$, and $A_0$ itself witnesses $a_0 \in K$. And every $p \in K$ satisfies $p \le n$, since the witnessing $A$ is likewise a linearly independent subset of $V$ and step 1.1 bounds its size, the size being unique. So $K$ is nonempty and bounded by $n$, and step 1.3 gives it a greatest element $d \le n$; fix a linearly independent $A$ with $A_0 \subseteq A \subseteq U$ and $A \approx d$. [step 1.1, step 1.2, step 1.3, L7]

3.1 That $A$ is a basis of $U$ containing $A_0$. Suppose some $w \in U$ had $w \notin \operatorname{span}(A)$. Then $A \cup \{w\}$ is linearly independent and $w \notin A$, and $A_0 \subseteq A \cup \{w\} \subseteq U$; moreover a bijection $d \to A$ extends to a bijection $\sigma(d) \to A \cup \{w\}$ by sending $d$ to $w$, so $A \cup \{w\} \approx \sigma(d)$ and $\sigma(d) \in K$, contradicting the maximality of $d$ in $K$. Hence $U \subseteq \operatorname{span}(A)$; and $\operatorname{span}(A) \subseteq U$ because $U$ is a linear subspace of $V$ containing $A$. So $\operatorname{span}(A) = U$ and $A$ is a basis of $U$ with $A_0 \subseteq A$. [step 2.1, L3, L4, L5, L6, L7]

4.1 Claim 1. Run steps 2.1 and 3.1 at $A_0 = \varnothing$, which is linearly independent and contained in $U$. They produce a basis $A$ of $U$ with $A \approx d$, so $U$ is finite-dimensional with $\dim_F U = d$, and $d \le n$ by step 2.1. [step 2.1, step 3.1, L1]

4.2 Claim 3. For an arbitrary linearly independent $A_0 \subseteq U$, steps 2.1 and 3.1 produce a basis $A$ of $U$ with $A_0 \subseteq A \subseteq U$, which is the assertion. Every selection made along the way is a single existential instantiation from a nonempty set, and the greatest element supplied by step 1.3 is determined by $K$ rather than chosen from it, so no choice principle is used. Applying this with $V$ in the roles of both $V$ and $U$, which is legitimate because $V$ is a linear subspace of itself, gives the statement for an arbitrary finite-dimensional vector space over $F$. [step 2.1, step 3.1, L3, L6]

5.1 Claim 2. If $U = V$ then $\dim_F U = \dim_F V = n$. Conversely suppose $\dim_F U = n$; then $d = n$ by step 4.1, so the basis $A$ produced at $A_0 = \varnothing$ in step 3.1 is a linearly independent subset of $V$ with $A \approx n$ and $\operatorname{span}(A) = U$. If $U \ne V$, pick $w \in V \setminus U = V \setminus \operatorname{span}(A)$; then $A \cup \{w\}$ is a linearly independent subset of $V$ with $A \cup \{w\} \approx \sigma(n)$, and $\sigma(n) \le n$ by step 1.1, which is impossible since $n < \sigma(n)$. So $U = V$. [step 1.1, step 3.1, step 4.1, L4, L6, L7]

6.1 Claim 1 is step 4.1, claim 2 is step 5.1 and claim 3 is step 4.2. [step 4.1, step 4.2, step 5.1] ∎

## Remarks

- **No choice principle is used, and claim 3 is why that matters.** The basis of $U$ is obtained by taking a linearly independent subset of $U$ of greatest size among those containing a given $A_0$, which exists because the sizes form a nonempty set of naturals bounded by $n$ ([[thm-well-ordering-principle]]); Zorn's lemma is not invoked, and [[thm-every-independent-set-extends-to-a-basis]] is not used here. In finite dimension the existence of bases, and the extension of a given independent set to one, are both free. Claim 3 is the form [[thm-dimension-formula]] uses, which is what keeps that theorem choice-free.

- **Why the equality case is a real theorem.** In finite dimension "same dimension" and "equal" coincide for a subspace and its ambient space, and the proof of that is the observation that a basis of a proper subspace can always be enlarged inside the bigger space. Both halves of the argument fail without finiteness, and the companion page carries the witness.

- **The span is the same computed in $U$ or in $V$**, which is why the statement can mix the two freely. That agreement is proved once, in [[def-linear-basis]], rather than repeated here; it rests on the fact that a linear subspace carries the addition, the zero and the scalar multiplication of the ambient space ([[def-linear-subspace]]).
