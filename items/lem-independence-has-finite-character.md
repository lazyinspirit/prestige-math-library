---
id: lem-independence-has-finite-character
kind: lemma
title: "$S \\subseteq V$ is linearly independent if and only if every finite subset of $S$ is; consequently the union of a nonempty chain of linearly independent subsets of $V$, ordered by inclusion, is linearly independent"
status: published
origin: session
deps: [def-linear-independence, lem-independent-list-is-injective, def-partial-order, def-chain, def-vector-space, def-field, def-linear-combination-and-span, def-countable, def-equinumerous, def-injection-surjection-bijection, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: [lem-independence-finite-character]
landmark: false
short: "independence has finite character"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Matroid (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Matroid"
    - title: "Linear independence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_independence"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

1. **Finite character.** A subset $S \subseteq V$ is linearly independent
   ([[def-linear-independence]]) **if and only if** every finite subset of $S$
   ([[def-countable]]) is linearly independent.
2. **Chains.** Let $\mathcal{C}$ be a **nonempty** chain ([[def-chain]]) in the
   poset of subsets of $V$ ordered by inclusion ([[def-partial-order]]), every
   member of which is a linearly independent subset of $V$. Then
   $\bigcup\mathcal{C}$ is linearly independent.

## Facts & Assumptions

**Given:** A field $F$ and a vector space $V$ over $F$.

[L1] A subset $S \subseteq V$ is linearly independent when every injective finite list $v : n \to S$ is linearly independent ([[def-linear-independence]]).

[L2] Every subset of a linearly independent subset of $V$ is linearly independent; and a linearly independent list $v : n \to V$ is injective with $v[n] \approx n$ ([[lem-independent-list-is-injective]], claims 6 and 7).

[L3] An injective $v : n \to A$ is a bijection onto its image, so $v[n] \approx n$ and $v[n]$ is finite ([[def-injection-surjection-bijection]], [[def-equinumerous]], [[def-countable]]).

[L4] Inclusion is a partial order on the subsets of $V$, and a chain is a subset of a poset any two of whose elements are comparable ([[def-partial-order]], [[def-chain]]).

[L5] Induction on $\mathbb{N}$, whose elements are the von Neumann naturals with $\sigma(n) = n \cup \{n\}$ ([[thm-induction-principle]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]).

[L6] Finite sums of vectors, and hence the vanishing condition defining independence, are computed in $(V,+,0_V)$ and do not depend on which subset of $V$ a list is read as landing in ([[def-linear-combination-and-span]], [[def-field]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1, from left to right. If $S$ is independent then every subset of $S$ is independent, and in particular every finite subset of $S$ is. [L2]

1.2 Claim 1, from right to left. Suppose every finite subset of $S$ is independent and let $v : n \to S$ be an injective finite list. Its image $v[n]$ is a subset of $S$ with $v[n] \approx n$, hence a finite subset of $S$, so $v[n]$ is independent by hypothesis; and $v$, read as a function $n \to v[n]$, is an injective finite list into $v[n]$, hence independent. As $v$ was an arbitrary injective finite list into $S$, the set $S$ is independent. [L1, L3, L6]

1.3 In claim 2, for every $n \in \mathbb{N}$ and every list $v : n \to \bigcup\mathcal{C}$ there is $A \in \mathcal{C}$ with $v[n] \subseteq A$. By induction on $n$. At $n = 0$ the image is empty and any member of $\mathcal{C}$ will do, $\mathcal{C}$ being nonempty; this is the only place the nonemptiness hypothesis is used. Assume the statement at $n$ and let $v : \sigma(n) \to \bigcup\mathcal{C}$; the restriction of $v$ to $n$ gives some $A \in \mathcal{C}$ with $v[n] \subseteq A$, and $v_n$ lies in some $B \in \mathcal{C}$ by the definition of the union. Since $\mathcal{C}$ is a chain, any two of its members are comparable under inclusion, so either $A \subseteq B$ or $B \subseteq A$; in the first case $B$ contains $v[n] \cup \{v_n\} = v[\sigma(n)]$, and in the second case $A$ does. [L4, L5]

2.1 Claim 2. Let $v : m \to \bigcup\mathcal{C}$ be an injective finite list. By step 1.3 there is $A \in \mathcal{C}$ with $v[m] \subseteq A$, so $v$ is an injective finite list into $A$; since $A$ is independent, $v$ is independent. As $v$ was arbitrary, $\bigcup\mathcal{C}$ is independent. [step 1.3, L1, L6]

3.1 Claim 1 is steps 1.1 and 1.2 together, and claim 2 is step 2.1. [step 1.1, step 1.2, step 2.1] ∎

## Remarks

- **Where the chain hypothesis is spent.** Only in step 1.3, and only through comparability of two members at a time. That is exactly what an arbitrary family of independent sets does not give: a union of two independent sets is in general dependent, as the companion page records as a false statement. A chain is precisely a family for which the finite-character argument goes through.

- **Finite character is what "finite" is doing here.** Independence is by definition a condition on finite lists, so no condition on $S$ can be violated without being violated inside a finite subset. Claim 1 makes that observation formal, and claim 2 is its standard consequence; the same two-step shape proves that any property of finite character satisfies the hypothesis of Zorn's lemma on the poset of sets having it.

- **Nonemptiness of the chain is not removable from claim 2 as stated.** The union of the empty chain is $\varnothing$, which is independent, so the conclusion happens to survive; what fails is the inductive argument above, which has no member of $\mathcal{C}$ to name at $n = 0$. Claim 2 is what makes Zorn's lemma applicable to a poset of linearly independent subsets, and the empty chain is handled separately where that matters, in [[thm-every-independent-set-extends-to-a-basis]], because [[thm-zorn]] as proved here quantifies over every chain, the empty one included.
