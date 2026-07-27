---
id: thm-quotient-universal-property
kind: theorem
title: "For a quotient map $q : X \\to Y$, a map out of $Y$ is continuous iff its composite with $q$ is; a continuous map on $X$ constant on the fibres of $q$ factors uniquely through $q$; and a composite of quotient maps is a quotient map"
status: published
origin: session
deps: [def-quotient-topology, thm-initial-and-final-characteristic-properties,
       def-continuous-map-top, thm-continuity-characterisations-top,
       def-injection-surjection-bijection, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "universal property of the quotient"
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
    - title: "Quotient space (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_space_(topology)"
    - title: "Universal property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Universal_property"
    - title: "J. Munkres, Topology, 2nd ed., §22"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $q : X \to Y$ be a quotient map ([[def-quotient-topology]]). Then:

1. **Characteristic property.** For every space $W$ and every function
   $k : Y \to W$,
   $$k \text{ is continuous } \iff k \circ q \text{ is continuous} .$$
2. **Factorisation.** Let $f : X \to W$ be continuous and **constant on the
   fibres of $q$**, that is $q(x) = q(x')$ implies $f(x) = f(x')$. Then there is
   exactly one function $\bar f : Y \to W$ with $\bar f \circ q = f$, and it is
   continuous.
3. **Composites.** If $q : X \to Y$ and $p : Y \to Z$ are quotient maps then
   $p \circ q : X \to Z$ is a quotient map.

## Facts & Assumptions

**Given:** A quotient map $q : X \to Y$, a space $W$, a function $k : Y \to W$, a continuous $f : X \to W$ constant on the fibres of $q$, and a further quotient map $p : Y \to Z$.

[A1] $q$ is a surjection and $V \subseteq Y$ is open exactly when $q^{-1}[V]$ is open in $X$; the topology of $Y$ is the final topology of the one-element family $(q)$ ([[def-quotient-topology]], [[def-injection-surjection-bijection]]).

[A2] The same holds for $p : Y \to Z$ ([[def-quotient-topology]]).

[L1] For a final topology of a family $(g_i)$, a map $k$ out of the space is continuous exactly when every $k \circ g_i$ is ([[thm-initial-and-final-characteristic-properties]], claim 4; [[def-continuous-map-top]]).

[L2] A map of spaces is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], clause (b)).

[L3] Preimages compose: $(u \circ v)^{-1}[T] = v^{-1}[u^{-1}[T]]$; a composite of surjections is a surjection ([[def-injection-surjection-bijection]]).

[L4] A topology on a set is a family of subsets of it ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 By [A1] the topology of $Y$ is a final topology of the one-element family $(q)$, so [L1] gives claim 1 at once. [A1, L1]

1.2 Define $\bar f := \{\, (y,w) : \text{there is } x \in X \text{ with } q(x) = y \text{ and } f(x) = w \,\}$. It is total on $Y$, since $q$ is surjective by [A1]; and it is single valued, since $q(x) = q(x')$ implies $f(x) = f(x')$ by hypothesis. So $\bar f$ is a function $Y \to W$ with $\bar f \circ q = f$. [given, A1]

1.3 Any $g : Y \to W$ with $g \circ q = f$ equals $\bar f$: for $y \in Y$ pick $x$ with $q(x) = y$, available by surjectivity, and then $g(y) = f(x) = \bar f(y)$. [given, A1]

1.4 $p \circ q$ is a surjection, being a composite of surjections. [A1, A2, L3]

1.5 For $V \subseteq Z$: $(p \circ q)^{-1}[V] = q^{-1}[p^{-1}[V]]$ by [L3]. [L3]

2.1 By step 1.2 the map $\bar f$ exists with $\bar f \circ q = f$ continuous, so $\bar f$ is continuous by step 1.1; with step 1.3 this is claim 2. [step 1.1, step 1.2, step 1.3]

2.2 Let $V \subseteq Z$. If $V$ is open in $Z$ then $p^{-1}[V]$ is open in $Y$ by [L2] and [A2], hence $q^{-1}[p^{-1}[V]]$ is open in $X$ by [A1]; by step 1.5 that set is $(p \circ q)^{-1}[V]$. [step 1.5, A1, A2, L2]

2.3 Conversely, if $(p \circ q)^{-1}[V]$ is open in $X$, then $q^{-1}[p^{-1}[V]]$ is open in $X$ by step 1.5, so $p^{-1}[V]$ is open in $Y$ by [A1], so $V$ is open in $Z$ by [A2]. [step 1.5, A1, A2]

3.1 By steps 1.4, 2.2 and 2.3 the map $p \circ q$ is a surjection for which $V$ is open in $Z$ exactly when $(p \circ q)^{-1}[V]$ is open in $X$; that is claim 3. With steps 1.1 and 2.1 all three claims are proved. [step 1.1, step 1.4, step 2.1, step 2.2, step 2.3, A1, L4] ∎

## Remarks

- **Claim 2 is how every quotient space in this library is identified.** To
  produce a continuous map out of an identification space one never works with
  equivalence classes directly: one writes a continuous map on the original
  space, checks that it does not distinguish identified points, and quotes claim
  2. Both examples of gluing on the companion page are exactly this move.

- **Uniqueness in claim 2 uses only surjectivity, and continuity of $\bar f$ uses
  only claim 1.** Neither uses a choice principle: step 1.3 picks a preimage for
  a *single* $y$ inside a proof of an equation, which is an instance of
  existential instantiation and not a selection over an index set.

- **Claim 3 has no analogue for open maps or for closed maps in the direction one
  wants here.** A composite of quotient maps is a quotient map, and that is what
  makes iterated identifications well behaved; whether a *product* of quotient
  maps is a quotient map is a different question, and it is not settled at this
  point in the reading order (see [[rem-constructions-this-page-stops-short-of]]).
