---
id: lem-nat-order-is-membership
kind: lemma
title: "On $\\mathbb{N}$ the order is membership: $m < n \\iff m \\in n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, def-nat-addition, thm-induction-principle,
       lem-nat-add-identity, lem-nat-trichotomy, thm-nat-linear-order, lem-nat-discrete,
       lem-nat-transitive-irreflexive, lem-nat-successor-neq-self]
justified_by: []
forward_refs: [def-ordinal, lem-omega-least-limit-ordinal]
aliases: []
landmark: false
short: "$m<n\\iff m\\in n$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. Zapletal, Set Theory Notes"
      url: "https://people.clas.ufl.edu/zapletal/files/notesset3.pdf"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
    - title: "T. Tao, Analysis I, 3rd ed., §2.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $\mathbb{N} = \omega$ be the von Neumann naturals, with $0 = \varnothing$ and
$\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]), and let $\le$ and $<$ be
the order defined additively by $m \le n \iff \exists k \in \mathbb{N}\ (m + k = n)$
and $m < n \iff (m \le n$ and $m \ne n)$ ([[def-nat-order]]). Then $\mathbb{N}$ is
a **transitive set**: every element of a natural number is itself a natural
number. Moreover, for all $m, n \in \mathbb{N}$:

1. $m < n \iff m \in n$;
2. $m \le n \iff m \subseteq n$;
3. $n < \sigma(n)$, and $m < \sigma(n) \iff m \le n$;
4. $0 \le n$, and $0 \in n$ whenever $n \ne 0$.

Consequently $n = \{\, m \in \mathbb{N} : m < n \,\}$ for every $n$: a natural
number is exactly the set of the naturals below it.

**Why this is proved here.** [[def-nat-order]] defines the order additively and
records the identification with membership only as an orienting remark, without
proof. The countability arguments on this page use that identification as a
working fact, so it is established here, from the additive order and induction
alone. Nothing below uses ordinals or any later material.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ with $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]); $m \le n \iff \exists k \in \mathbb{N}\ (m + k = n)$ and $m < n \iff (m \le n \text{ and } m \ne n)$ ([[def-nat-order]]). Note that $<$ is irreflexive by this definition alone, since $m < m$ would require $m \ne m$.

[L1] Induction: if $P(0)$ holds and $P(n)$ implies $P(\sigma(n))$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$ ([[thm-induction-principle]]).

[L2] Addition: $m + 0 = m$ and $m + \sigma(k) = \sigma(m + k)$ ([[def-nat-addition]]); and $0 + n = n$ for every $n$ ([[lem-nat-add-identity]]).

[L3] $\le$ is a linear order on $\mathbb{N}$: reflexive, antisymmetric, transitive and total ([[thm-nat-linear-order]]); and exactly one of $m < n$, $m = n$, $n < m$ holds, so the failure of $m \le n$ is exactly $n < m$ ([[lem-nat-trichotomy]]).

[L4] Discreteness: $m < n \iff \sigma(m) \le n$ ([[lem-nat-discrete]]).

[L5] Every natural number is a transitive set and satisfies $n \notin n$ ([[lem-nat-transitive-irreflexive]]).

[L6] $n \ne \sigma(n)$ for every $n \in \mathbb{N}$ ([[lem-nat-successor-neq-self]]).

## Proof

**Proof technique:** direct.

1.1 $\mathbb{N}$ is a transitive set. Let $P(n)$ be "$n \subseteq \mathbb{N}$". $P(0)$ holds because $0 = \varnothing$ has no elements. If $n \subseteq \mathbb{N}$ then, since $n$ is itself an element of $\mathbb{N}$, the set $\sigma(n) = n \cup \{n\}$ is also a subset of $\mathbb{N}$, so $P(\sigma(n))$ holds. By induction $n \subseteq \mathbb{N}$ for every $n \in \mathbb{N}$, which is the transitivity of $\mathbb{N}$. [given, L1]

1.2 For every $n \in \mathbb{N}$ one has $n \in \sigma(n)$ and $n < \sigma(n)$. Indeed $n \in n \cup \{n\} = \sigma(n)$ directly; and taking $k = \sigma(0)$ gives $n + \sigma(0) = \sigma(n + 0) = \sigma(n)$, so $n \le \sigma(n)$, while $n \ne \sigma(n)$, whence $n < \sigma(n)$. [given, L2, L6]

1.3 Mixed transitivity, in both directions. (i) If $m \le n$ and $n < p$ then $m < p$: transitivity of $\le$ gives $m \le p$; if $m = p$ then $p \le n$, and $n \le p$ holds because $n < p$, so antisymmetry gives $n = p$, contradicting $n \ne p$. Hence $m \ne p$ and $m < p$. (ii) If $m < n$ and $n \le p$ then $m < p$: transitivity of $\le$ again gives $m \le p$; if $m = p$ then $n \le p = m$, and $m \le n$ holds because $m < n$, so antisymmetry gives $m = n$, contradicting $m \ne n$. Hence $m \ne p$ and $m < p$. [given, L3]

1.4 No natural number satisfies $m < 0$. For every $m$ one has $0 + m = m$, so $0 \le m$; if also $m \le 0$ then antisymmetry gives $m = 0$, and $m < 0$ additionally demands $m \ne 0$. [given, L2, L3]

2.1 For all $m, n \in \mathbb{N}$: $m < \sigma(n) \iff m \le n$. If $m \le n$ then, with $n < \sigma(n)$ from step 1.2, step 1.3(i) gives $m < \sigma(n)$. Conversely assume $m < \sigma(n)$ and suppose $m \le n$ fails; then $n < m$ by trichotomy, so $\sigma(n) \le m$ by discreteness, and step 1.3(i) applied to $\sigma(n) \le m$ and $m < \sigma(n)$ gives $\sigma(n) < \sigma(n)$, which irreflexivity forbids. Hence $m \le n$. [step 1.2, step 1.3, given, L3, L4]

2.2 Membership implies order: for every $n \in \mathbb{N}$, every $m \in n$ satisfies $m < n$. Let $P(n)$ be that statement; $P(0)$ is vacuous since $0 = \varnothing$. Assume $P(n)$ and let $m \in \sigma(n) = n \cup \{n\}$. If $m \in n$ then $m < n$ by $P(n)$, and $n < \sigma(n)$ by step 1.2, so $m < \sigma(n)$ by step 1.3(i), whose hypothesis $m \le n$ follows from $m < n$. If $m = n$ then $m < \sigma(n)$ by step 1.2. So $P(\sigma(n))$ holds, and by induction $P(n)$ holds for every $n$; the elements $m$ involved are natural numbers by step 1.1, so the statement is about $\mathbb{N}$ throughout. [step 1.1, step 1.2, step 1.3, given, L1]

3.1 Order implies membership: for every $n \in \mathbb{N}$, every $m \in \mathbb{N}$ with $m < n$ satisfies $m \in n$. Let $Q(n)$ be that statement; $Q(0)$ holds vacuously by step 1.4. Assume $Q(n)$ and let $m < \sigma(n)$. By step 2.1, $m \le n$, that is $m < n$ or $m = n$. In the first case $m \in n$ by $Q(n)$; in the second $m \in \{n\}$. Either way $m \in n \cup \{n\} = \sigma(n)$, so $Q(\sigma(n))$ holds, and by induction $Q(n)$ holds for every $n$. [step 1.4, step 2.1, given, L1]

4.1 Steps 2.2 and 3.1 together give $m < n \iff m \in n$ for all $m, n \in \mathbb{N}$, which is claim 1; and since every element of $n$ is a natural number by step 1.1, this says exactly $n = \{\, m \in \mathbb{N} : m < n \,\}$. [step 1.1, step 2.2, step 3.1]

5.1 If $m \le n$ then $m \subseteq n$: let $x \in m$; then $x \in \mathbb{N}$ by step 1.1 and $x < m$ by step 4.1, so $x < n$ by step 1.3(ii) applied to $x < m$ and $m \le n$, whence $x \in n$ by step 4.1. [step 1.1, step 1.3, step 4.1]

5.2 If $m \subseteq n$ then $m \le n$: suppose $m \le n$ fails; then $n < m$ by trichotomy, so $n \in m$ by step 4.1, and $m \subseteq n$ would give $n \in n$, which is impossible. Hence $m \le n$. [step 4.1, L3, L5]

5.3 For every $n \in \mathbb{N}$ one has $0 \le n$ by step 1.4; if in addition $n \ne 0$ then $0 < n$, hence $0 \in n$ by step 4.1. [step 1.4, step 4.1, given]

6.1 The transitivity of $\mathbb{N}$ is step 1.1, claim 1 is step 4.1, claim 2 is steps 5.1 and 5.2 together, claim 3 is steps 1.2 and 2.1, and claim 4 is step 5.3; the description $n = \{\, m \in \mathbb{N} : m < n \,\}$ is part of step 4.1. [step 1.1, step 1.2, step 2.1, step 4.1, step 5.1, step 5.2, step 5.3] ∎

## Remarks

- Nothing here is circular. The order used throughout is the additive one of [[def-nat-order]], and every fact quoted about it, linearity ([[thm-nat-linear-order]]), trichotomy ([[lem-nat-trichotomy]]) and discreteness ([[lem-nat-discrete]]), is proved on the naturals page from addition and induction, with no appeal to membership. The two set-theoretic inputs, that each $n$ is transitive with $n \notin n$ ([[lem-nat-transitive-irreflexive]]), are likewise proved there by induction on the von Neumann encoding alone.

- Step 5.2 is where irreflexivity of membership does real work: without $n \notin n$ the inclusion $m \subseteq n$ would not exclude $n < m$.

- **The duplication with the ordinals page is deliberate.** There, membership is made the order by fiat: [[def-ordinal]] *defines* $\alpha < \beta$ to mean $\alpha \in \beta$, and [[lem-omega-least-limit-ordinal]] then re-derives claim 1 while identifying $\mathbb{N}$ with the ordinals below $\omega$. That page comes far later in the library, so nothing here may cite it without circularity, and building the ordinals would be a very expensive way to obtain a fact this page needs only for the naturals. The two proofs are independent and agree.
