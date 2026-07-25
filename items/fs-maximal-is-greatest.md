---
id: fs-maximal-is-greatest
kind: false-statement
title: "FALSE: every maximal element is a greatest element"
status: published
origin: session
deps: [def-maximal-element, def-partial-order]
justified_by: []
aliases: []
landmark: false
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
which is where most intuition about order is formed. What defeats it is a
maximal element that is not above everything, which only a partial order permits;
and since Zorn's lemma delivers maximal elements and nothing more, believing this
is the standard way to misapply it.

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

- The counterexample is as small as it can be. The empty poset has no maximal element and satisfies the claim vacuously; a one-element poset satisfies it outright, since its single element is maximal and is greatest by reflexivity. So two elements is the minimum, and the antichain above achieves it.
- **Incomparability alone is not what refutes the claim.** A poset can contain incomparable elements and still have a greatest one: take $P = \{a, b, c\}$ with $a < c$ and $b < c$ and nothing else, where $a$ and $b$ are incomparable while $c$ is above everything. What a refutation needs is a maximal element that is not greatest, which is a strictly stronger demand than the presence of an incomparable pair.
- The same phenomenon at scale: ordering the proper subsets of a set by inclusion, every subset missing exactly one point is maximal, and when the set has at least two points there are several such subsets and no greatest one.
- **Why this matters for Zorn.** [[thm-zorn]] concludes that a maximal element exists. Applications must therefore be arranged so that maximality alone is decisive, typically by making "nothing is strictly above it" mean "it cannot be extended". Reading the conclusion as "there is a greatest element" is not a harmless slip: it is a strictly stronger claim that the lemma does not support.
- A greatest element, when one exists, **is** maximal and is unique. Only the converse fails.
