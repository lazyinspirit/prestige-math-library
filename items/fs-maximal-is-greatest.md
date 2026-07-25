---
id: fs-maximal-is-greatest
kind: false-statement
title: "FALSE: every maximal element is a greatest element"
status: draft
origin: session
deps: [def-maximal-element, def-partial-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Maximal and minimal elements (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximal_and_minimal_elements"
    - title: "Partially ordered set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partially_ordered_set"
pipeline_run: null
---

## Statement

**FALSE.** In every poset, a maximal element is a greatest element: if $m$ has
nothing strictly above it, then every element is below $m$
([[def-maximal-element]]).

The statement is plausible because it is true in every **totally** ordered set,
which is where most intuition about order is formed. It fails as soon as two
elements are incomparable, and since Zorn's lemma delivers only maximal elements,
believing this is the standard way to misapply it.

## Facts & Assumptions

**Given:** The definitions of maximal and greatest element in a poset.

[A1] $m$ is maximal when there is no $x$ with $m < x$; $m$ is greatest when $x \le m$ for every $x$ ([[def-maximal-element]]).

[L1] A partial order is a reflexive, antisymmetric, transitive relation, and it need not make every two elements comparable ([[def-partial-order]]).

## Refutation

**Proof technique:** direct.

1.1 Let $P = \{a, b\}$ with $a \ne b$, and let $\le$ relate each element only to itself, so that the relation is $\{(a,a), (b,b)\}$. [construct]

2.1 This relation is reflexive by construction, antisymmetric because $u \le v$ and $v \le u$ only occur when $u = v$, and transitive because $u \le v$ and $v \le w$ only occur when $u = v = w$; so $(P, \le)$ is a poset. [step 1.1, L1]

2.2 But $b \le a$ fails, so $a$ is not greatest; and $a \le b$ fails, so $b$ is not greatest. [step 1.1, A1]

3.1 There is no $x \in P$ with $a < x$: the only $x$ with $a \le x$ is $a$ itself, and $a < a$ is false. So $a$ is maximal, and by the same argument so is $b$. [step 1.1, step 2.1, A1]

4.1 So $(P, \le)$ has maximal elements and no greatest element, refuting the claim. [step 3.1, step 2.2] ∎

## Remarks

- The counterexample is as small as it can be. In a poset with at most one
  element the claim holds vacuously, and any poset with two incomparable elements
  refutes it, so two elements is the minimum.
- The same phenomenon at scale: ordering the proper subsets of a set by
  inclusion, every subset missing exactly one point is maximal, and when the set
  has at least two points there are several such subsets and no greatest one.
- **Why this matters for Zorn.** [[thm-zorn]] concludes that a maximal element
  exists. Applications must therefore be arranged so that maximality alone is
  decisive, typically by making "nothing is strictly above it" mean "it cannot be
  extended". Reading the conclusion as "there is a greatest element" is not a
  harmless slip: it is a strictly stronger claim that the lemma does not support.
- A greatest element, when one exists, **is** maximal and is unique. Only the
  converse fails.
