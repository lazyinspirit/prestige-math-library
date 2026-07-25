---
id: rem-vitali-non-measurable-set
kind: remark
title: "The Vitali set: a non-measurable subset of $\\mathbb{R}$"
status: published
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral]
justified_by: []
forward_refs: [def-axiom-of-choice, rem-choice-ledger]
aliases: [rem-vitali-set]
landmark: true
short: "A choice set for R/Q is not Lebesgue measurable, and choice beyond ZF+DC is required"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Vitali set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vitali_set"
    - title: "Non-measurable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Non-measurable_set"
    - title: "Solovay model (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Solovay_model"
    - title: "M. Foreman and F. Wehrung, The Hahn-Banach theorem implies the existence of a non-Lebesgue measurable set, Fund. Math. 138 (1991) 13-19"
      url: "https://eudml.org/doc/211870"
pipeline_run: null
---

## Statement

Let $V \subseteq [0,1]$ contain exactly one element of each coset of
$\mathbb{Q}$ in $\mathbb{R}$, that is, one representative of each class of the
equivalence relation $x \sim y \iff x - y \in \mathbb{Q}$. Such a $V$ exists by
the Axiom of Choice. Then $V$ is not Lebesgue measurable.

Indeed, enumerate the rationals of $[-1,1]$ as $q_1, q_2, \dots$ and put
$V_k = V + q_k$. The $V_k$ are pairwise disjoint by the choice of one
representative per class, and

$$[0,1] \subseteq \bigcup_{k \ge 1} V_k \subseteq [-1, 2].$$

If $V$ were measurable then so would each $V_k$ be, with
$\lambda(V_k) = \lambda(V)$ by translation invariance, and countable additivity
would give $1 \le \sum_{k} \lambda(V) \le 3$. The sum is $0$ if
$\lambda(V) = 0$ and $+\infty$ otherwise, so neither case is possible.

**The construction needs more than ZF + DC.** By Solovay's theorem, if ZFC
together with "there exists an inaccessible cardinal" is consistent, then there
is a model of ZF + DC in which every subset of $\mathbb{R}$ is Lebesgue
measurable. On that hypothesis ZF + DC does not prove that a Vitali set exists.
The large-cardinal assumption is part of the claim and not a technicality: it is
what Solovay's construction consumes, and by Shelah it cannot be removed.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** The countable additivity and translation invariance of
Lebesgue measure ([[rem-lebesgue-measure-and-integral]]), plus a choice function
on the family of cosets ([[def-axiom-of-choice]]). The argument itself is three
lines; the measure it argues about is what this library lacks.

**Which page it serves.** The order, Zorn and the Axiom of Choice page and its
examples page, where the cost of choice is tracked result by result, and the
Cantor set, Baire and measure zero page, which shows how badly a set can behave
while remaining elementary. The Vitali set is the standard answer to "why is
Lebesgue measure not defined on all of $\mathcal{P}(\mathbb{R})$", and it cannot
be stated at all until a measure exists.

**Where it sits in the choice ledger.** It needs a choice principle strictly
beyond dependent choice, which is a strong statement in a library that otherwise
tracks choice carefully ([[rem-choice-ledger]]). The relevant facts, all
external here, are Solovay's model of ZF + DC in which every set of reals is
Lebesgue measurable and has the Baire property, and Shelah's refinement, which
shows that the inaccessible cardinal is genuinely needed for the measurability
half though not for the Baire property half. Weaker principles than full choice
already suffice: the Boolean prime ideal theorem yields a non-measurable set, by
way of the Hahn-Banach theorem.
