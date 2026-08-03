---
id: thm-well-ordering-implies-ac
kind: theorem
title: "The well-ordering theorem implies the Axiom of Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-well-order, def-choice-function, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
short: "well-order the union, take least elements"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Well-ordering theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_theorem"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "The Well-Ordering Problem (Open Logic Project)"
      url: "https://builds.openlogicproject.org/content/set-theory/choice/wellorderingproblem.pdf"
    - title: "Formalization of the Axiom of Choice and its Equivalent Theorems"
      url: "https://arxiv.org/abs/1906.03930"
pipeline_run: null
---

## Statement

Work in ZF and assume that **every set can be well ordered**
([[def-well-order]]). Then the Axiom of Choice holds
([[def-axiom-of-choice]]): every family of nonempty sets has a choice function
([[def-choice-function]]).

## Facts & Assumptions

**Given:** The axioms of ZF together with the hypothesis that every set carries a well-order. Let $\mathcal{F}$ be an arbitrary family of nonempty sets.

[A1] By the Given, every set carries a well-order.

[L1] A choice function for $\mathcal{F}$ is a function $g$ on $\mathcal{F}$ with $g(S) \in S$ for every $S \in \mathcal{F}$ ([[def-choice-function]]).

[L2] The Axiom of Choice is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L3] In a well-order every nonempty subset has a least element, and that least element is unique ([[def-well-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $U = \bigcup \mathcal{F}$, which is a set by the Union axiom of ZF, available by the Given, and note that every member of $\mathcal{F}$ is a subset of $U$. [given, construct]

2.1 By hypothesis there is a well-order $<$ on $U$; fix one. [step 1.1, A1, choose]

3.1 Every $S \in \mathcal{F}$ is a nonempty subset of $U$, so it has a least element with respect to $<$, and that element is unique. [step 2.1, step 1.1, L3]

4.1 Hence $g = \{(S, y) \in \mathcal{F} \times U : y \text{ is the } < \text{-least element of } S\}$ is a function on $\mathcal{F}$ with $g(S) \in S$ for every $S$, since uniqueness in step 3.1 gives exactly one $y$ for each $S$. [step 3.1, L1]

5.1 So $g$ is a choice function for $\mathcal{F}$, and since $\mathcal{F}$ was an arbitrary family of nonempty sets, the Axiom of Choice holds. [step 4.1, L1, L2] ∎

## Remarks

**One well-order, then no more choosing.** The single act of naming a well-order of $U$ in step 2.1 is an existential instantiation, not a choice principle: one object is named, not one per member of $\mathcal{F}$. After that, the rule "take the least element" is canonical, and the resulting $g$ is a set by Separation on $\mathcal{F} \times U$. That is the entire content of the implication, and it is why "well order the union" is the standard way to manufacture choice functions.

**The same trick, free of charge, on $\mathbb{N}$.** Nothing above needs the hypothesis when $U$ already carries a canonical well-order. Every family of nonempty subsets of $\mathbb{N}$ has the explicit choice function $S \mapsto \min S$, by [[thm-well-ordering-principle]], with no axiom at all. The Axiom of Choice is exactly the assertion that this convenience is always available.

**Direction matters.** This item proves one implication only. The converse, that the Axiom of Choice yields a well-order of every set, is [[thm-well-ordering-theorem]] and is the harder half; the two together give the equivalence recorded in [[cor-ac-iff-well-ordering]].
