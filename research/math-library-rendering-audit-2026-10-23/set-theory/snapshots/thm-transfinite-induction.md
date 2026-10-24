---
id: thm-transfinite-induction
kind: theorem
title: "Transfinite induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-well-order, def-initial-segment]
justified_by: []
aliases: [transfinite-induction]
landmark: false
short: "$W_{<a}\\subseteq S\\Rightarrow a\\in S$ for all $a$, then $S=W$"
proof_strategy: contradiction
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
    - title: "Transfinite induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Transfinite_induction"
    - title: "Well-order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-order"
    - title: "A. Marks, Set Theory"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
pipeline_run: null
---

## Statement

Let $(W, <)$ be a well-order ([[def-well-order]]) and let $S \subseteq W$
satisfy the following: for every $a \in W$, if $W_{<a} \subseteq S$ then
$a \in S$ ([[def-initial-segment]]). Then $S = W$.

In property form: if a property $P$ of elements of $W$ satisfies "whenever
$P(x)$ holds for every $x < a$, it holds at $a$", then $P(a)$ holds for every
$a \in W$.

**This is a theorem of ZF.** No form of the Axiom of Choice is used. Choice is
perfectly available at this point in the library, since Zorn's lemma is proved
from it on the previous page; the claim made here is about this proof, which
never invokes it.

## Facts & Assumptions

**Given:** A well-order $(W, <)$ and a subset $S \subseteq W$ with the stated closure property. No base case is assumed separately: the hypothesis applied to the least element of $W$, where the initial segment below it is empty, supplies it.

[A1] For every $a \in W$: if $W_{<a} \subseteq S$ then $a \in S$.

[L1] Every nonempty subset of $W$ has a least element, and the order is total ([[def-well-order]]).

[L2] $W_{<a} = \{x \in W : x < a\}$ ([[def-initial-segment]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $S \ne W$. [assume-contra]

2.1 Since $S \subseteq W$, the set $C = W \setminus S$ is then nonempty. [step 1.1]

3.1 Let $a = \min C$, the least element of $C$ in the order of $W$, which exists because $C$ is a nonempty subset of $W$. [step 2.1, L1, choose]

4.1 Every $x \in W$ with $x < a$ satisfies $x \notin C$, by minimality of $a$, hence $x \in S$; that is, $W_{<a} \subseteq S$. [step 3.1, L2]

5.1 The hypothesis on $S$ therefore applies at $a$ and gives $a \in S$. [step 4.1, A1]

6.1 But $a \in C = W \setminus S$ gives $a \notin S$, which is impossible; hence $W \setminus S$ is empty and $S = W$. [step 5.1, step 3.1, discharge-contradiction] ∎

## Remarks

**Where the well-ordering is used.** Only once, to produce the least element of $W \setminus S$. Nothing else about $W$ enters the argument, so the same proof establishes the statement for an arbitrary well-founded relation once that notion is available.

**No separate base case.** Applying the hypothesis at $a = \min W$, when $W$ is nonempty, forces $\min W \in S$, because the initial segment below $\min W$ is empty and is therefore contained in $S$ vacuously. This is why transfinite induction is stated with a single clause where ordinary induction has two, and it is also why the statement holds vacuously for $W = \emptyset$.

**Successors and limits.** The scheme that looks stronger, with one clause for the least element, one for successors and one for limits, is the specialisation of this theorem to a well-order in which those three kinds of element are distinguished. Nothing is gained by assuming it separately, and the three-clause form is what gets used once ordinals are available.

**Least counterexample.** The dual reading is often the useful one: if $S \ne W$ then the hypothesis must fail somewhere, so there is a least $a$ with $a \notin S$ and every $x < a$ in $S$. Steps 2.1 to 5.1 are precisely the construction of that least counterexample.
