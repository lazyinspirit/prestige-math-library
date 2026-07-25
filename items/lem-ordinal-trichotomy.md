---
id: lem-ordinal-trichotomy
kind: lemma
title: "Trichotomy and well-ordering of the ordinals"
status: published
origin: session
deps: [lem-ordinal-basics, def-ordinal, thm-transfinite-induction, def-well-order, def-partial-order]
justified_by: []
aliases: [lem-ordinals-linearly-ordered]
landmark: false
short: "exactly one of $\\alpha\\in\\beta$, $\\alpha=\\beta$, $\\beta\\in\\alpha$"
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
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
    - title: "Well-order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-order"
pipeline_run: null
---

## Statement

For ordinals $\alpha$ and $\beta$ ([[def-ordinal]]), **exactly one** of

$$\alpha \in \beta, \qquad \alpha = \beta, \qquad \beta \in \alpha$$

holds. Moreover every nonempty **set** $A$ of ordinals has an $\in$-least
element, and consequently $A$ ordered by
$\alpha \le \beta :\iff \alpha \subseteq \beta$ is a well-order
([[def-well-order]]) whose strict part is membership.

So the ordinals are linearly ordered by $\in$, every set of them is well
ordered, and [[thm-transfinite-induction]] is available on any such set. No
choice principle is used.

## Facts & Assumptions

**Given:** Ordinals $\alpha$, $\beta$, and a nonempty set $A$ whose members are all ordinals.

[A1] An ordinal is a transitive set on which $\in$ is a strict well-order ([[def-ordinal]]).

[L1] Every element of an ordinal is an ordinal; $\alpha \notin \alpha$; $\alpha \subseteq \beta$ if and only if $\alpha \in \beta$ or $\alpha = \beta$; and any two ordinals are comparable under inclusion ([[lem-ordinal-basics]]).

[L2] A partial order is a reflexive, antisymmetric and transitive relation; a total order is a partial order any two of whose elements are comparable; and the strict part of $\le$ is $x < y :\iff (x \le y$ and $x \ne y)$ ([[def-partial-order]]).

[L3] A well-order is a total order in which every nonempty subset has a least element ([[def-well-order]]).

[L4] Transfinite induction holds on every well-order ([[thm-transfinite-induction]]).

## Proof

**Proof technique:** direct.

1.1 At least one alternative holds: by [L1] either $\alpha \subseteq \beta$ or $\beta \subseteq \alpha$, and in the first case [L1] gives $\alpha \in \beta$ or $\alpha = \beta$, in the second $\beta \in \alpha$ or $\beta = \alpha$. [L1]

2.1 At most one alternative holds: $\alpha \in \beta$ together with $\alpha = \beta$ gives $\alpha \in \alpha$; $\beta \in \alpha$ together with $\alpha = \beta$ gives $\alpha \in \alpha$; and $\alpha \in \beta$ together with $\beta \in \alpha$ gives $\beta \subseteq \alpha$ by transitivity of $\alpha$ and hence $\alpha \in \alpha$; each contradicts [L1]. [step 1.1, A1, L1]

3.1 Least elements: fix $\alpha \in A$; if $\alpha \cap A = \emptyset$ then $\alpha$ is $\in$-least in $A$, because $\beta \in A$ with $\beta \in \alpha$ would lie in $\alpha \cap A$, so trichotomy leaves $\alpha \in \beta$ or $\alpha = \beta$; otherwise $\alpha \cap A$ is a nonempty subset of $\alpha$ and has an $\in$-least element $\gamma$ there, and $\gamma$ is $\in$-least in $A$, because $\beta \in A$ with $\beta \in \gamma$ would satisfy $\beta \in \alpha$ by transitivity of $\alpha$ and so lie in $\alpha \cap A$ strictly below $\gamma$, and trichotomy again leaves $\gamma \in \beta$ or $\gamma = \beta$. [step 1.1, step 2.1, A1, L1]

4.1 On $A$ the relation $\alpha \le \beta :\iff \alpha \subseteq \beta$ satisfies the three axioms of [L2], since inclusion is reflexive, antisymmetric by extensionality, and transitive, so it is a partial order; it is total by [L1] and step 1.1; its strict part in the sense of [L2] is membership, since $\alpha \subseteq \beta$ with $\alpha \ne \beta$ is $\alpha \in \beta$ by [L1]; and every nonempty subset of $A$ has a least element by step 3.1, so $(A, \subseteq)$ is a well-order in the sense of [L3] and [L4] applies to it. [step 1.1, step 3.1, L1, L2, L3, L4]

5.1 Exactly one of the three alternatives holds, every nonempty set of ordinals has an $\in$-least element, and every set of ordinals is well ordered by inclusion. [step 2.1, step 3.1, step 4.1] ∎

## Remarks

**Why this is not circular.** The trichotomy of $\in$ on a single ordinal is part of [[def-ordinal]]; what is proved here is trichotomy between arbitrary ordinals, which is a statement about the whole class and not about any one set. The bridge is inclusion comparability, proved in [[lem-ordinal-basics]] by intersecting the two ordinals, and the intersection argument is where the two levels meet.

**The class of ordinals behaves like a well-order without being a set.** Every nonempty *set* of ordinals has a least element, and in fact so does every nonempty definable collection of them: if $\varphi(\alpha)$ holds for some $\alpha$, apply the statement to the set $\{\xi \in \alpha^{+} : \varphi(\xi)\}$, which is nonempty. That the collection of all ordinals is nevertheless not a set is [[thm-burali-forti]].

**A set of ordinals need not be an ordinal.** Well-ordering by $\in$ is only half of the definition; transitivity is the other half. The set $\{1, 3\}$, that is $\{\{\emptyset\}, \{\emptyset, \{\emptyset\}, \{\emptyset, \{\emptyset\}\}\}\}$, is well ordered by membership but is not transitive, so it is not an ordinal. A *transitive* set of ordinals is one, which is the form in which this lemma gets used in [[thm-mostowski-collapse]] and [[thm-hartogs]].
