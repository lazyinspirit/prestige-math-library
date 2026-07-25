---
id: lem-finite-subsets-listable
kind: lemma
title: "The nonempty finite subsets of $\\mathbb{R}$ are exactly the listable ones"
status: published
origin: session
deps: [def-countable, def-equinumerous, thm-induction-principle, lem-nat-order-is-membership, lem-nat-transitive-irreflexive, def-injection-surjection-bijection, def-natural-numbers, def-nat-order, lem-nat-nonzero-is-successor, def-complete-ordered-field, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: false
short: "finite iff listable as $\\{a_0,\\dots,a_n\\}$"
proof_strategy: induction
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
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]) and
let $F \subseteq \mathbb{R}$ be nonempty. Then $F$ is finite
([[def-countable]]) **if and only if** there are $n \in \mathbb{N}$ and
$a_0, a_1, \dots, a_n \in \mathbb{R}$ with

$$F = \{a_0, a_1, \dots, a_n\}.$$

Here $\{a_0, \dots, a_n\}$ means the image $a[\sigma(n)]$ of a function
$a : \sigma(n) \to \mathbb{R}$, where $\sigma(n) = \{\, i \in \mathbb{N} : i \le n \,\}$
([[def-natural-numbers]], [[lem-nat-order-is-membership]]).

**Consequently every nonempty finite subset of $\mathbb{R}$ has a maximum and a
minimum** ([[def-max-min]]), since [[lem-finite-set-has-max]] proves exactly that
for sets presented as $\{a_0, \dots, a_n\}$.

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$ and a nonempty subset $F \subseteq \mathbb{R}$. For $n \in \mathbb{N}$ and a function $a : \sigma(n) \to \mathbb{R}$, write $\{a_0, \dots, a_n\} := a[\sigma(n)]$, and call a set of this form **listable**.

[L1] $F$ is finite when $F \approx m$ for some $m \in \mathbb{N}$, where $m = \{\, i \in \mathbb{N} : i < m \,\}$; and $F \approx 0 = \varnothing$ only for $F = \varnothing$ ([[def-countable]], [[def-natural-numbers]]).

[L2] Bijections and their images, and the symmetry and transitivity of $\approx$ ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L3] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(\sigma(n))$ for every $n$, then $P(n)$ holds for every $n \in \mathbb{N}$ ([[thm-induction-principle]]).

[L4] For the additive order of [[def-nat-order]]: $i < \sigma(n) \iff i \le n$, and every natural number is exactly the set of the naturals below it, so $\sigma(n) = \{\, i : i \le n \,\} = n \cup \{n\}$ ([[lem-nat-order-is-membership]], [[def-natural-numbers]]); and every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]).

[L5] For every $n \in \mathbb{N}$ and all $a_0, \dots, a_n \in \mathbb{R}$ the set $\{a_0, \dots, a_n\}$ has a maximum and a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L6] Membership is irreflexive on $\mathbb{N}$: $k \notin k$ for every $k \in \mathbb{N}$ ([[lem-nat-transitive-irreflexive]]).

## Proof

**Proof technique:** induction.

1.1 Base case of the listable-implies-finite direction: for $n = 0$ a listable set is $a[\sigma(0)] = \{a(0)\}$, and $i \mapsto a(0)$ is a bijection from $\sigma(0) = \{0\}$ onto it, so it is finite. [base, L1, L2, L4]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume every set of the form $a[\sigma(n)]$, for a function $a : \sigma(n) \to \mathbb{R}$, is finite. [ih]

1.3 The finite-implies-listable direction needs no induction: if $F$ is nonempty and finite there is a bijection $\psi : m \to F$ with $m \in \mathbb{N}$, and $m \ne 0$ because $F \ne \varnothing$, so $m = \sigma(n)$ for some $n$ by [L4]; putting $a := \psi$ gives $F = \psi[\sigma(n)] = \{a_0, \dots, a_n\}$, a listable set. [given, L1, L2, L4]

2.1 Inductive step: let $b : \sigma(\sigma(n)) \to \mathbb{R}$ and put $G = b[\sigma(n)]$ and $H = b[\sigma(\sigma(n))] = G \cup \{b(\sigma(n))\}$, using [L4]. By the inductive hypothesis applied to the restriction of $b$ to $\sigma(n)$, there is a bijection $u : G \to k$ for some $k \in \mathbb{N}$. If $b(\sigma(n)) \in G$ then $H = G$ is finite. Otherwise extend $u$ to $H$ by $u(b(\sigma(n))) := k$; since $k \notin k$ by [L6], this is a bijection $H \to k \cup \{k\} = \sigma(k)$, so $H$ is finite. In both cases $H$ is finite, so the claim holds at $\sigma(n)$. [step 1.2, L1, L2, L4, L6]

3.1 By [L3] every listable subset of $\mathbb{R}$ is finite, and by step 1.3 every nonempty finite subset of $\mathbb{R}$ is listable, which is the stated equivalence; combining it with [L5], every nonempty finite $F \subseteq \mathbb{R}$ is of the form $\{a_0, \dots, a_n\}$ and therefore has a maximum and a minimum. [step 1.1, step 1.3, step 2.1, L3, L5, discharge-induction] ∎

## Remarks

- **This lemma discharges the one stipulation left open in [[lem-finite-set-has-max]].** That lemma proves, by induction on $n$, that every set $\{a_0, \dots, a_n\}$ of reals has a maximum and a minimum, and then adopts as a working convention, explicitly not proved there, that the nonempty finite subsets of $\mathbb{R}$ are exactly the sets of that form. The convention could not be proved at the time because the library had no definition of finiteness. With [[def-countable]] available, it is proved above, and the usual reading of that lemma, "every nonempty finite subset of $\mathbb{R}$ has a maximum and a minimum", is now a theorem rather than a stipulation.

- Nonemptiness is needed only for the finite-implies-listable direction: a list $a_0, \dots, a_n$ always has at least the entry $a_0$, whereas $\varnothing$ is finite and not listable in this sense.

- Nothing in the argument uses the order or the arithmetic of $\mathbb{R}$; the same proof shows that in any set the nonempty finite subsets are exactly the images of the naturals $\sigma(n)$. Only the consequence about maxima and minima uses that $\mathbb{R}$ is ordered.
