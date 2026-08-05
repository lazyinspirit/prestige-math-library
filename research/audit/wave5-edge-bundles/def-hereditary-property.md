# Citation-precision audit — everything that cites `def-hereditary-property`

## The target, as it actually stands on disk

`items/def-hereditary-property.md` — definition — Hereditary, open-hereditary and closed-hereditary properties of topological spaces

#### Definition

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
subspaces all inherit $P$ says nothing; and a single space that **has** $P$ and
has one subspace lacking $P$ refutes heredity outright. A space that lacks $P$
refutes nothing, however its subspaces behave. That asymmetry is why the failures are
recorded here as counterexamples and the successes as theorems.

**Only topological properties are worth asking about.** Taking $S = X$ shows that
a hereditary property holds of $X$ itself, and the subspace topology on $X$ is
$\mathcal{T}$ ([[def-subspace-topology-top]], with $U \cap X = U$), so the
definition is not vacuous at the top. But a condition that is not invariant under
homeomorphism can be hereditary for uninteresting reasons, since a subspace is
only determined up to the identification of its topology
([[def-topological-space]]); every property named hereditary in this library is
a topological property, and it is said so where it is proved.

## The 3 citing use(s), quoted verbatim from the citing items

### `fs-lindelofness-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: Lindelöfness is hereditary

- [L2] Compactness gives a finite subcover for every open cover, Lindelöfness gives an at most countable subcover, and a property is hereditary when every subspace has it ([[def-compactness-variants]], [[def-hereditary-property]]).

### `fs-separability-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: separability is hereditary

- [L3] Separability is the existence of an at most countable dense subset, and a property is hereditary when every subspace has it ([[def-separable-space]], [[def-hereditary-property]]).

### `prop-second-countability-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Second countability is hereditary

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.
