---
id: def-hereditary-property
kind: definition
title: "Hereditary, open-hereditary and closed-hereditary properties of topological spaces"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-subspace-topology-top, def-homeomorphism-and-open-maps, def-topological-space]
justified_by: []
aliases: [def-hereditary, def-open-hereditary, def-closed-hereditary]
landmark: true
short: "hereditary property"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Hereditary property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hereditary_property"
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "J. Munkres, Topology, 2nd ed., §16"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A **property of topological spaces** is a condition $P$ that is either true or
false of each space, as in [[def-homeomorphism-and-open-maps]]; a **topological
property** is one whose truth value is the same for homeomorphic spaces. Every
subset of a space is regarded as a space by giving it the subspace topology
([[def-subspace-topology-top]]).

Let $P$ be a property of topological spaces. Then $P$ is

- **hereditary** if, whenever a space $X$ has $P$, every subspace of $X$ has $P$;
- **open-hereditary** if, whenever $X$ has $P$, every subspace $S \subseteq X$
  with $S$ open in $X$ has $P$;
- **closed-hereditary** if, whenever $X$ has $P$, every subspace $S \subseteq X$
  with $S$ closed in $X$ has $P$.

A hereditary property is both open-hereditary and closed-hereditary, since the
condition on $S$ is only a restriction of the range of subspaces quantified over.
Neither of the two weaker notions implies the other, and neither implies
heredity.

**The definition is stable under the route by which a subspace is reached.** If
$S \subseteq T \subseteq X$ then the topology $S$ inherits from the subspace $T$
is the topology $S$ inherits from $X$, transitivity being discharged in
[[def-subspace-topology-top]]. So "every subspace of $X$" is unambiguous, and a
hereditary property automatically passes from $X$ to a subspace of a subspace,
with no separate induction.

**Heredity is a statement about a property, not about a space.** It quantifies
over all spaces having $P$ and all their subspaces, so a single space whose
subspaces all inherit $P$ says nothing; and a single space with one subspace
lacking $P$ refutes heredity outright. That asymmetry is why the failures are
recorded here as counterexamples and the successes as theorems.

**Only topological properties are worth asking about.** Taking $S = X$ shows that
a hereditary property holds of $X$ itself, and the subspace topology on $X$ is
$\mathcal{T}$ ([[def-subspace-topology-top]], with $U \cap X = U$), so the
definition is not vacuous at the top. But a condition that is not invariant under
homeomorphism can be hereditary for uninteresting reasons, since a subspace is
only determined up to the identification of its topology
([[def-topological-space]]); every property named hereditary in this library is
a topological property, and it is said so where it is proved.

## Remarks

- **The three notions separate in practice.** Metrizability and first
  countability are hereditary, and that is proved in the next item. "Has a
  countable dense subset" is open-hereditary, by claim 4 of
  [[thm-subspace-closure-and-interior]], and is *not* hereditary; the witness is
  worked on the companion page, where an uncountable discrete subspace is
  exhibited inside a space that has a countable dense subset.

- **What is deliberately not settled here.** Whether the separation properties
  beyond the Hausdorff condition of [[def-hausdorff-space]] are hereditary is a
  question about axioms that are not available at this point in the reading
  order, and no claim about them is made on this page.

- **Products have their own word.** A property preserved by arbitrary products is
  usually called *productive*, and the same three-way refinement (finite
  products, countable products, arbitrary products) applies to it. No item on
  this page uses that word, because the productive theorems it would organise are
  not available at this point in the reading order.
