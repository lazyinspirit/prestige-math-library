---
id: thm-burali-forti
kind: theorem
title: "Burali-Forti: there is no set of all ordinals"
status: draft
origin: session
deps: [lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal]
justified_by: []
aliases: [burali-forti-paradox, thm-ordinals-proper-class]
landmark: false
short: "the ordinals form a proper class"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Burali-Forti paradox (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Burali-Forti_paradox"
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
pipeline_run: null
---

## Statement

There is no set whose members are exactly the ordinals ([[def-ordinal]]). More
strongly, no set has every ordinal as a member: the ordinals form a **proper
class**.

## Facts & Assumptions

**Given:** The axioms of ZF, in particular the Separation schema. No choice principle is used.

[A1] Separation: for every set $X$ and every formula $\varphi$, the collection $\{x \in X : \varphi(x)\}$ is a set.

[L1] An ordinal is a transitive set on which $\in$ is a strict well-order ([[def-ordinal]]).

[L2] Every element of an ordinal is an ordinal, and $\alpha \notin \alpha$ for every ordinal $\alpha$ ([[lem-ordinal-basics]]).

[L3] Any two ordinals satisfy exactly one of $\alpha \in \beta$, $\alpha = \beta$, $\beta \in \alpha$, and every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that some set $X$ has every ordinal as a member. [assume-contra]

2.1 By Separation, $\Omega = \{x \in X : x \text{ is an ordinal}\}$ is a set, and by the supposition its members are exactly the ordinals. [step 1.1, A1]

3.1 $\Omega$ is a transitive set: if $\alpha \in \Omega$ and $x \in \alpha$ then $x$ is an ordinal, hence $x \in \Omega$; so $\alpha \subseteq \Omega$. [step 2.1, L2]

3.2 The relation $\in$ is a strict well-order of $\Omega$: it is irreflexive there because $\alpha \notin \alpha$ for ordinals, transitive there because $x \in y \in z$ with $z$ an ordinal gives $y \subseteq z$ and so $x \in z$, trichotomous there by [L3], and every nonempty subset of $\Omega$ is a nonempty set of ordinals and so has an $\in$-least element. [step 2.1, L1, L2, L3]

4.1 Hence $\Omega$ is an ordinal, so $\Omega \in \Omega$ by step 2.1, contradicting $\Omega \notin \Omega$; therefore no set has every ordinal as a member, and in particular there is no set of all ordinals. [step 3.1, step 3.2, step 2.1, L1, L2, discharge-contradiction] ∎

## Remarks

**Why this is a theorem and not a paradox.** In naive set theory the same computation is a contradiction, because unrestricted comprehension guarantees that the ordinals form a set. In ZF, Separation only carves subsets out of sets already given, so the argument instead refutes the assumption that some set collects them all. The historical statement, Burali-Forti 1897, predates that distinction, which is why it is remembered as a paradox.

**Nothing about size is being said.** The obstruction is not that there are "too many" ordinals in any measurable sense; it is that the supposed set would be transitive and well ordered by membership, which are exactly the two clauses of [[def-ordinal]], so it would have to be one of its own members. The same shape of argument shows there is no set of all sets.

**Consequences used later.** Since no set contains all ordinals, for any set $A$ there must be ordinals lying outside every construction indexed by $A$, which is the crude form of the fact sharpened by [[thm-hartogs]]. The false statement this theorem refutes is recorded as [[fs-ordinals-form-a-set]].
