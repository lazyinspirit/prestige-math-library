---
id: lem-monoid-units-form-a-group
kind: lemma
title: "The invertible elements of a monoid form a group under the restricted operation"
status: published
origin: session
deps: [def-semigroup-and-monoid, def-invertible-element, lem-inverse-unique, def-group, def-binary-operation]
justified_by: []
aliases: [lem-unit-group]
landmark: false
short: "$M^{\\times}$ is a group"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Unit (ring theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unit_(ring_theory)"
    - title: "Monoid (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monoid"
pipeline_run: null
---

## Statement

Let $(M,*,e)$ be a monoid ([[def-semigroup-and-monoid]]) and let $M^{\times}$ be
its set of invertible elements ([[def-invertible-element]]). Then $M^{\times}$
contains $e$, is closed under $*$ and under inversion, and $(M^{\times}, *, e)$ is
a group ([[def-group]]), called the **group of units** of $M$.

Moreover $M$ is itself a group exactly when $M^{\times} = M$.

## Facts & Assumptions

**Given:** A monoid $(M,*,e)$ and its set of units $M^{\times} = \{\, g \in M : g \text{ has a two-sided inverse in } M \,\}$ ([[def-invertible-element]]).

[L1] $*$ is associative and $e$ is a two-sided identity for it ([[def-semigroup-and-monoid]]).

[L2] An invertible $g$ has exactly one two-sided inverse $g^{-1}$ ([[lem-inverse-unique]]).

[L3] A group is a monoid in which every element is invertible ([[def-group]]).

[L4] If a subset of $M$ is closed under $*$, the restriction of $*$ to it is a binary operation on it, and associativity is inherited ([[def-binary-operation]]).

## Proof

**Proof technique:** direct.

1.1 $e \in M^{\times}$, since $e * e = e$ exhibits $e$ as a two-sided inverse of itself. [L1]

1.2 Let $g, h \in M^{\times}$ with inverses $g^{-1}, h^{-1}$. Then $(g * h) * (h^{-1} * g^{-1}) = g * (h * h^{-1}) * g^{-1} = g * e * g^{-1} = g * g^{-1} = e$ and $(h^{-1} * g^{-1}) * (g * h) = h^{-1} * (g^{-1} * g) * h = h^{-1} * e * h = h^{-1} * h = e$, the regroupings being licensed by associativity. So $h^{-1} * g^{-1}$ is a two-sided inverse of $g * h$ in $M$, whence $g * h \in M^{\times}$. [L1, L2]

1.3 Let $g \in M^{\times}$. The equations $g^{-1} * g = e = g * g^{-1}$ read with $g^{-1}$ as the element being inverted say that $g$ is a two-sided inverse of $g^{-1}$; hence $g^{-1} \in M^{\times}$. [L2]

1.4 If $M^{\times} = M$ then $M$ is a monoid in which every element is invertible, that is a group; conversely if $M$ is a group then every element of $M$ is invertible, so $M \subseteq M^{\times}$, and $M^{\times} \subseteq M$ always, giving $M^{\times} = M$. [L3, given]

2.1 By step 1.2 the set $M^{\times}$ is closed under $*$, so $*$ restricts to a binary operation on $M^{\times}$, associative because it is associative on $M$. [step 1.2, L1, L4]

3.1 By step 1.1 the element $e$ lies in $M^{\times}$, and $e * x = x = x * e$ holds for every $x \in M^{\times}$ because it holds for every $x \in M$; so $(M^{\times}, *, e)$ is a monoid. [step 1.1, step 2.1, L1]

4.1 Every $g \in M^{\times}$ is invertible **in $M^{\times}$**: its inverse $g^{-1}$ lies in $M^{\times}$ by step 1.3, and the two equations $g^{-1} * g = e = g * g^{-1}$ are equations between elements of $M^{\times}$. Hence $(M^{\times},*,e)$ is a group. [step 1.3, step 3.1, L3]

5.1 The units of $M$ form a group under the restricted operation, with the same identity, and this group is all of $M$ exactly when $M$ is a group. [step 3.1, step 4.1, step 1.4] ∎

## Remarks

- The point of step 4.1 is that invertibility is a condition relative to a containing structure: $g$ is a unit of $M^{\times}$ because the witness $g^{-1}$ was shown to lie in $M^{\times}$, not merely in $M$. Skipping step 1.3 would leave a genuine gap.

- The lemma is the source of most of the small examples of groups: the units of $(\mathbb{Z},\cdot)$ are $\{1,-1\}$, and the units of a field under multiplication are exactly the nonzero elements.
