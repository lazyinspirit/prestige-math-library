---
id: thm-quotient-canonical-factorisation
kind: theorem
title: "Every quotient map $q : X \\to Y$ induces a homeomorphism from $X$ modulo the relation \"$q$ agrees\" onto $Y$, so up to homeomorphism the quotient maps out of $X$ are exactly the canonical projections"
status: published
origin: session
deps: [def-quotient-topology, thm-quotient-universal-property, def-homeomorphism-and-open-maps,
       lem-homeomorphism-criteria, def-injection-surjection-bijection, def-continuous-map-top]
justified_by: []
aliases: []
landmark: true
short: "canonical factorisation of a quotient map"
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
    - title: "Isomorphism theorems (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isomorphism_theorems"
    - title: "J. Munkres, Topology, 2nd ed., §22"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $q : X \to Y$ be a quotient map ([[def-quotient-topology]]) and define a
relation on $X$ by

$$x \sim_q x' \quad :\Longleftrightarrow \quad q(x) = q(x') .$$

Then $\sim_q$ is an equivalence relation, and the induced map

$$\bar q : X/\!\sim_q \;\longrightarrow\; Y, \qquad \bar q([x]) := q(x)$$

is a **homeomorphism** ([[def-homeomorphism-and-open-maps]]), where $X/\!\sim_q$
carries the quotient topology of its canonical projection $\pi$
([[def-quotient-topology]]). Moreover $\bar q \circ \pi = q$.

So every quotient map out of $X$ is, up to a homeomorphism of its target, the
canonical projection of $X$ onto one of its identification spaces: the target of
a quotient map carries no information beyond the partition of $X$ into fibres.

## Facts & Assumptions

**Given:** A quotient map $q : X \to Y$, the relation $\sim_q$ above, the quotient set $Q := X/\!\sim_q$ with its canonical projection $\pi : X \to Q$ and the quotient topology of $\pi$, and the map $\bar q$ of the statement.

[A1] $q$ is a surjection and $V \subseteq Y$ is open exactly when $q^{-1}[V]$ is open in $X$; $\pi$ is a surjection and $V \subseteq Q$ is open exactly when $\pi^{-1}[V]$ is open in $X$; both $q$ and $\pi$ are continuous ([[def-quotient-topology]], [[def-continuous-map-top]]).

[A2] Equality is reflexive, symmetric and transitive, and $[x] = \{\, x' : q(x') = q(x) \,\}$ ([[def-quotient-topology]]).

[L1] For a quotient map $r$ and a continuous map $f$ constant on the fibres of $r$, there is exactly one $\bar f$ with $\bar f \circ r = f$, and it is continuous; and a map out of the target of $r$ is continuous exactly when its composite with $r$ is ([[thm-quotient-universal-property]], claims 1 and 2).

[L2] A homeomorphism is a continuous bijection with continuous inverse; a bijection has a unique two-sided inverse ([[def-homeomorphism-and-open-maps]], [[def-injection-surjection-bijection]]).

[L3] Homeomorphy is an equivalence relation on spaces ([[lem-homeomorphism-criteria]], claim 2).

## Proof

**Proof technique:** direct.

1.1 $\sim_q$ is an equivalence relation, being the relation "$q$ takes the same value", and equality is reflexive, symmetric and transitive. [A2]

1.2 $q$ is constant on the fibres of $\pi$: if $\pi(x) = \pi(x')$ then $x \sim_q x'$, that is $q(x) = q(x')$. [A2]

1.3 $\pi$ is constant on the fibres of $q$: if $q(x) = q(x')$ then $x \sim_q x'$, so $[x] = [x']$ and $\pi(x) = \pi(x')$. [A2]

2.1 By step 1.2 and [L1] applied to the quotient map $\pi$ and the continuous map $q$, there is exactly one $\bar q : Q \to Y$ with $\bar q \circ \pi = q$, and $\bar q$ is continuous; it satisfies $\bar q([x]) = q(x)$. [step 1.2, A1, L1]

2.2 By step 1.3 and [L1] applied to the quotient map $q$ and the continuous map $\pi$, there is exactly one $\bar\pi : Y \to Q$ with $\bar\pi \circ q = \pi$, and $\bar\pi$ is continuous. [step 1.3, A1, L1]

3.1 $\bar q \circ \bar\pi = \mathrm{id}_Y$: composing with the surjection $q$ gives $\bar q \circ \bar\pi \circ q = \bar q \circ \pi = q = \mathrm{id}_Y \circ q$, and a surjection may be cancelled on the right. [step 2.1, step 2.2, A1]

3.2 $\bar\pi \circ \bar q = \mathrm{id}_Q$: composing with the surjection $\pi$ gives $\bar\pi \circ \bar q \circ \pi = \bar\pi \circ q = \pi = \mathrm{id}_Q \circ \pi$, and a surjection may be cancelled on the right. [step 2.1, step 2.2, A1]

4.1 By steps 3.1 and 3.2 the maps $\bar q$ and $\bar\pi$ are mutually inverse bijections, and both are continuous by steps 2.1 and 2.2; so $\bar q$ is a homeomorphism with inverse $\bar\pi$, and $\bar q \circ \pi = q$ by step 2.1. With step 1.1 this proves the theorem. [step 1.1, step 2.1, step 2.2, step 3.1, step 3.2, L2, L3] ∎

## Remarks

- **This is the topological analogue of the first isomorphism theorem.** A
  surjective homomorphism of groups factors through the quotient by its kernel
  and induces an isomorphism; a quotient map of spaces factors through the
  quotient by the partition into its fibres and induces a homeomorphism. In both
  cases the content is that the target is determined by the equivalence relation
  the map induces on the source.

- **The hypothesis that $q$ is a quotient map is not decorative.** For a mere
  continuous surjection the induced $\bar q$ is still a continuous bijection,
  built by claim 2 of [[thm-quotient-universal-property]] applied to $\pi$, but
  its inverse need not be continuous: that is exactly the failure recorded at
  level 8 in [[fs-continuous-bijection-is-a-homeomorphism]]. What the quotient
  hypothesis buys is step 2.2, which manufactures the inverse as a *continuous*
  map.

- **A practical consequence, used on the companion page.** To identify an
  explicitly described gluing $X/\!\sim$ with a known space $Z$, it suffices to
  produce a quotient map $X \to Z$ whose fibres are exactly the classes of
  $\sim$; the theorem then supplies the homeomorphism, and no map between
  equivalence classes ever has to be written down.
