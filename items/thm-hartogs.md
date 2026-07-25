---
id: thm-hartogs
kind: theorem
title: "Hartogs: an ordinal that does not inject into a given set"
status: published
origin: session
deps: [thm-mostowski-collapse, def-ordinal, lem-ordinal-trichotomy, def-well-order, lem-ordinal-basics, def-order-isomorphism, def-initial-segment]
justified_by: []
aliases: [thm-hartogs-number, hartogs-number]
landmark: true
short: "$\\aleph(A)$: least ordinal not injecting into $A$, choice free"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Hartogs number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hartogs_number"
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
pipeline_run: null
---

## Statement

For every set $A$ there is an ordinal ([[def-ordinal]]) that does not inject
into $A$, that is, admits no injective function into $A$. The least such
ordinal is the **Hartogs number** $\aleph(A)$, and it is exactly

$$\aleph(A) = \{\mathrm{ot}(S, R) : S \subseteq A \text{ and } R \text{ well-orders } S\},$$

the set of order types ([[thm-mostowski-collapse]]) of the well-ordered subsets
of $A$.

**The proof is choice free.** That is the whole point of the theorem: in ZF
alone, with no assumption that $A$ can be well ordered, one still gets an
ordinal too long to be laid inside $A$.

## Facts & Assumptions

**Given:** A set $A$ and the axioms of ZF, in particular Power Set, Separation, Union and Replacement. No choice principle is assumed. "$X$ injects into $A$" abbreviates "there is an injective function $X \to A$".

[A1] Power Set, Separation, Union and Replacement are available.

[L1] Every well-order is order isomorphic to a unique ordinal, its order type, and the isomorphism is unique ([[thm-mostowski-collapse]]).

[L2] An ordinal is a transitive set on which $\in$ is a strict well-order ([[def-ordinal]]).

[L3] Every element of an ordinal is an ordinal, no ordinal is a member of itself, and $\alpha \subseteq \beta$ if and only if $\alpha \in \beta$ or $\alpha = \beta$ ([[lem-ordinal-basics]]).

[L4] Any two ordinals satisfy exactly one of $\alpha \in \beta$, $\alpha = \beta$, $\beta \in \alpha$, and every set of ordinals is well ordered by $\in$ ([[lem-ordinal-trichotomy]]).

[L5] A well-order is a total order in which every nonempty subset has a least element ([[def-well-order]]); an order isomorphism carries the initial segment below a point onto the initial segment below its image ([[def-order-isomorphism]], [[def-initial-segment]]).

## Proof

**Proof technique:** contradiction.

1.1 By Power Set and Separation the collection $\mathcal{W} = \{(S, R) \in \mathcal{P}(A) \times \mathcal{P}(A \times A) : R \text{ well-orders } S\}$ is a set, since every well-order of a subset of $A$ is a subset of $A \times A$. [A1, L5, construct]

2.1 Each $(S, R) \in \mathcal{W}$ has a unique order type $\mathrm{ot}(S, R)$ by [L1], so the assignment is given by a formula and Replacement makes $H = \{\mathrm{ot}(S, R) : (S, R) \in \mathcal{W}\}$ a set of ordinals; uniqueness is what makes this a definable function, so nothing is selected. [step 1.1, L1, A1, construct]

3.1 $H$ is a transitive set: let $\alpha = \mathrm{ot}(S, R) \in H$ with order isomorphism $g$ from $\alpha$ onto $(S, R)$, and let $\beta \in \alpha$; then $\beta$ is an ordinal with $\beta \subseteq \alpha$, so $\beta$ is the initial segment of $\alpha$ below $\beta$, and $g$ carries it onto an $R$-initial segment $S' \subseteq S$, which $R' = R \cap (S' \times S')$ well-orders with order type $\beta$; hence $(S', R') \in \mathcal{W}$ and $\beta \in H$. [step 2.1, L1, L3, L5]

3.2 Every $\alpha \in H$ injects into $A$: writing $\alpha = \mathrm{ot}(S, R)$, the order isomorphism from $\alpha$ onto $S$ is in particular an injection of $\alpha$ into $S \subseteq A$. [step 2.1, L1]

4.1 $H$ is an ordinal: it is transitive by step 3.1 and $\in$ strictly well-orders it by [L4], since it is a set of ordinals. [step 3.1, step 2.1, L2, L4]

5.1 Suppose, for contradiction, that the ordinal $H$ of step 4.1 injects into $A$, say by an injective $j : H \to A$. [step 4.1, assume-contra]

6.1 Put $S = j[H] \subseteq A$ and $R = \{(j(\xi), j(\eta)) : \xi \in \eta \in H\} \subseteq A \times A$; then $j$ is a bijection of $H$ onto $S$ carrying membership to $R$, so $R$ well-orders $S$ and $j$ is an order isomorphism from $(H, \in)$ onto $(S, R)$. [step 5.1, step 4.1, L5, construct]

7.1 Hence $(S, R) \in \mathcal{W}$ and $\mathrm{ot}(S, R) = H$ by the uniqueness in [L1], so $H \in H$, which no ordinal satisfies; therefore $H$ does not inject into $A$, and since every member of $H$ does inject into $A$ by step 3.2, trichotomy leaves $H \le \gamma$ for every ordinal $\gamma$ that fails to inject, so $H = \aleph(A)$ is the least such ordinal. [step 6.1, step 1.1, step 2.1, step 3.2, step 4.1, L1, L3, L4, discharge-contradiction] ∎

## Remarks

**Where choice would have crept in, and why it does not.** A careless proof says "for each well-orderable subset of $A$ choose a well-ordering of it", which is a genuine use of choice. The construction above never chooses: it collects all pairs $(S, R)$, so the well-ordering is part of the datum, and it then maps each pair to its order type, which is unique by [[thm-mostowski-collapse]]. The passage from a class of well-orders to a set of ordinals is Replacement, not choice.

**What the theorem does and does not say.** It does not say $A$ can be well ordered, and it gives no injection of $A$ into an ordinal. It says only that the ordinals run out of room to sit inside $A$. Under the Axiom of Choice, $A$ is well orderable ([[thm-well-ordering-theorem]]) and $\aleph(A)$ is the least ordinal strictly larger than the cardinality of $A$; without choice, $\aleph(A)$ may be incomparable with $A$ in size, and that is still enough for the applications.

**The ZF substitute for cardinal comparability.** "Any two sets are comparable in size" is equivalent to the Axiom of Choice, so it is unavailable here. What survives is this theorem together with [[lem-well-order-comparability]]: well-orders are always comparable, and every set has an ordinal it cannot absorb. Hartogs proved in 1915 that cardinal comparability implies the well-ordering theorem, and this construction is the engine of that proof.

**A crude bound is not enough.** [[thm-burali-forti]] already shows that the ordinals are not a set, so no set can contain them all, but that alone does not produce a *single* ordinal failing to inject into a *given* $A$. The content here is that the failure happens at a definable, and indeed least, place.
