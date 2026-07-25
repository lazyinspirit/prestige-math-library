---
id: ex-russells-socks
kind: example
title: "Russell's shoes and socks"
status: draft
origin: session
deps: [def-axiom-of-choice, def-choice-function]
justified_by: []
external_refs: [rem-cohen-forcing-ac-independent, rem-cohen-first-model]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "The Axiom of Choice (Stanford Encyclopedia of Philosophy)"
      url: "https://plato.stanford.edu/entries/axiom-choice/"
    - title: "B. Russell, Introduction to Mathematical Philosophy (1919), Ch. 12"
      url: "https://en.wikipedia.org/wiki/Introduction_to_Mathematical_Philosophy"
pipeline_run: null
---

## Example

Russell's illustration. Given infinitely many pairs of shoes and asked for one
shoe from each pair, there is a rule: take the left shoe. It selects one member
of every pair at once, it is written down once and for all, and it needs no
axiom. Given infinitely many pairs of socks the rule is gone. The two socks of a
pair are alike, nothing in the data distinguishes one of them, and the assertion
that a function selecting one sock from each pair exists is an instance of the
Axiom of Choice ([[def-axiom-of-choice]]).

The difference is not about footwear. It is that the shoe family comes with a
distinguished member in each pair, supplied in advance by the data, whereas a
family of two element sets in general comes with nothing of the kind. Below, the
shoe half is proved: a distinguishing set makes the choice function explicit,
whatever the size of the family. The sock half is **not** proved here and is not
provable here: it is the standard independence result that ZF alone, if
consistent, does not prove that every countable family of two element sets has a
choice function. That is quoted on the authority of the references, since it is
established either by forcing, or by a permutation model of set theory with
atoms together with a theorem transferring the conclusion to ZF, and this
library develops neither.

## Facts & Assumptions

**Given:** A family $\mathcal{F}$ of two element sets. In the shoe case the data also includes a set $L$, the left shoes, such that $S \cap L$ has exactly one element for every $S \in \mathcal{F}$. In the sock case the data is $\mathcal{F}$ alone.

[A1] **External result, quoted and not proved here.** If ZF is consistent, then ZF does not prove that every countable family of two element sets has a choice function. The classical witness is a permutation model of ZFA, set theory with atoms, in which a countable family of pairs of atoms has no choice function (Fraenkel 1922, Mostowski); such a model is **not** a model of ZF, and the conclusion is carried over to ZF proper by the Jech-Sochor embedding theorem, or reached directly by Cohen's symmetric submodels of a forcing extension (1963). This library records no result of exactly this strength; the nearest it records are [[rem-cohen-forcing-ac-independent]] and [[rem-cohen-first-model]], neither of which implies it, so [A1] is quoted on the authority of the references alone. Nothing below is used to establish this, and it is used only in the final step.

[L1] A choice function for $\mathcal{F}$ is a function $g$ with domain $\mathcal{F}$ such that $g(S) \in S$ for every $S \in \mathcal{F}$ ([[def-choice-function]]).

[L2] The Axiom of Choice is the assertion that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 Shoe case. For every $S \in \mathcal{F}$ the set $S \cap L$ has exactly one element, so "the unique element of $S \cap L$" describes one element of $S$, and it does so by a formula whose only free variable is $S$. [given]

2.1 Hence $g = \{(S, x) \in \mathcal{F} \times \bigcup \mathcal{F} : S \cap L = \{x\}\}$ is a set by Separation; it is total on $\mathcal{F}$ and single valued because each $S \cap L$ is a singleton, so it is a function with domain $\mathcal{F}$, and $g(S) \in S \cap L \subseteq S$. [step 1.1, construct]

3.1 So in the shoe case $\mathcal{F}$ has a choice function, built from the given data $\mathcal{F}$ and $L$ alone, no matter how many pairs there are: the family may be infinite and no axiom of choice is used. [step 2.1, L1]

4.1 Sock case. The data is a family of two element sets and nothing else, so there is no set $L$ to feed into step 2.1 and that construction cannot begin; asserting a choice function for such a family is exactly an instance of [L2]. [step 3.1, step 2.1, L1, L2]

5.1 The failure to find a rule is not itself the point, since no search establishes an impossibility; what settles the sock case is [A1], by which ZF alone does not prove that every countable family of two element sets has a choice function. So the two halves of the illustration really do differ in strength, the first being a theorem and the second an axiom. [step 4.1, A1] ∎

## Remarks

- **What is proved and what is quoted.** Steps 1.1 to 3.1 are a complete ZF
  argument: a distinguishing set turns infinitely many choices into one formula.
  Step 5.1 rests on [A1], an external independence result. The honest reading is
  that the sock half is unavailable in ZF, not that it has been refuted here.

- **Where [A1] sits in this library's record of unproved results.** [A1] is about
  countable families of two element sets, a choice principle strictly weaker than
  the Axiom of Choice, and this library records no external result at exactly
  that strength. The nearest entries it does record are
  [[rem-cohen-forcing-ac-independent]], that ZF does not prove the Axiom of
  Choice, and [[rem-cohen-first-model]], that ZF is consistent with an infinite
  set of reals having no countably infinite subset. Neither of them implies
  [A1], which is therefore quoted on the authority of the references alone. The
  standard Fraenkel-Mostowski "socks" model witnesses it in **ZFA**, set theory
  with atoms, where the two socks of a pair are atoms and a permutation
  exchanging them is an automorphism; a permutation model is not a model of ZF,
  and the passage to ZF is the Jech-Sochor embedding theorem, which this library
  does not contain either.

- **Boundedly many pairs of socks are free.** Whenever the pairs can be listed
  as the values $F(0), \dots, F(n-1)$ of a function $F$ with domain a natural
  number $n$, a choice function exists outright by [[lem-finite-choice]], with
  the picks made one at a time. That lemma is stated over such an indexed family
  and deliberately does *not* say "finitely many": no definition of finiteness is
  available at this point in the library, and the identification of the finite
  families with the listable ones is nowhere made there. Russell's contrast is a genuinely infinite
  phenomenon, which is why he stated it for infinitely many pairs.

- The shoe argument never used that the pairs are pairwise disjoint, or that
  they are indexed by $\mathbb{N}$, or that they have two elements. All it used
  is that some formula picks out one element of each member, which is the general
  reason a concrete family can have an explicit choice function
  ([[ex-canonical-choice-on-naturals]] is the same phenomenon with "least
  element" in place of "left shoe").

- Russell's own phrasing concerns a millionaire with denumerably many pairs of
  boots and of socks. "Shoes" is the usual modern retelling, and the
  mathematical content is unchanged: what matters is only that one member of
  each pair is singled out in advance.
