# Citation-precision audit — everything that cites `def-compactness-variants`

## The target, as it actually stands on disk

`items/def-compactness-variants.md` — definition — Countably compact, Lindel\\\"of, sequentially compact, limit point compact and $\\sigma$-compact spaces, and relatively compact subsets

#### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
open covers, subcovers, finiteness and compactness as in [[def-compact-space]],
and *finite*, *at most countable* and *uncountable* as in [[def-countable]].

- $(X, \mathcal{T})$ is **countably compact** when every open cover of $X$ that
  is at most countable has a finite subcover.
- $(X, \mathcal{T})$ is **Lindel&ouml;f** when every open cover of $X$ has an at
  most countable subcover.
- $(X, \mathcal{T})$ is **sequentially compact** when every sequence $(x_k)$ in
  $X$, that is every function $x : \mathbb{N} \to X$
  ([[def-sequence-convergence-top]]), has a subsequence $(x_{n_j})$ converging to
  a point of $X$, the index map $n : \mathbb{N} \to \mathbb{N}$ being strictly
  increasing ([[def-sequence]], [[lem-index-map-grows]]).
- $(X, \mathcal{T})$ is **limit point compact** when every infinite subset
  $A \subseteq X$ has a limit point in $X$, that is a point $p \in X$ every
  neighbourhood $N$ of which satisfies $N \cap (A \setminus \{p\}) \ne \varnothing$
  ([[def-interior-closure-boundary-top]]). Here *infinite* means not finite in
  the sense of [[def-countable]].
- $(X, \mathcal{T})$ is **$\sigma$-compact** when there is an at most countable
  family $\mathcal{K}$ of compact subsets of $X$ with $X = \bigcup \mathcal{K}$.
- A subset $A \subseteq X$ is **relatively compact in $X$** when its closure
  $\overline{A}$ ([[def-interior-closure-boundary-top]]) is a compact subset of
  $X$.

A subset $A \subseteq X$ is called countably compact, Lindel&ouml;f,
sequentially compact, limit point compact or $\sigma$-compact when the subspace
$(A, \mathcal{T}_A)$ is ([[def-subspace-topology-top]]), exactly as for
compactness. **Relative compactness is the exception and is deliberately not of
that form**: it is a statement about $A$ *inside* $X$, since $\overline{A}$ is
computed in $X$, and a set may be relatively compact in one space and not in
another that contains it. Every other notion on this list is intrinsic to the
subspace.

**The countable covers may be listed.** A nonempty at most countable family
$\mathcal{U}$ admits a surjection $\mathbb{N} \to \mathcal{U}$
([[lem-countable-iff-surjection-from-n]]), so countable compactness says: for
every sequence $(U_n)_{n \in \mathbb{N}}$ of open sets with
$X = \bigcup_{n \in \mathbb{N}} U_n$ there are finitely many indices whose sets
already cover $X$. That surjection is produced from the countability assumption
alone and no choice principle is involved; the empty family covers only the empty
space, which is compact anyway.

**Indexing starts at $0$.** A sequence here is a function on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-sequence]]), so a subsequence is
$(x_{n_j})_{j \in \mathbb{N}}$ with $n_0 < n_1 < \cdots$ and $n_j \ge j$
([[lem-index-map-grows]]). An index range taken from a text that starts at $1$
must be shifted before it is used here.

**Agreement with the metric definitions.** Let $(X,d)$ be a metric space carrying
its metric topology $\mathcal{T}_d$ ([[def-metric-topology]],
[[def-metrizable-space]]). Then the three notions that
[[def-metric-compactness-variants]] defines metrically are the three defined
above, read in $(X, \mathcal{T}_d)$:

- *Countably compact.* The open sets used there are the members of
  $\mathcal{T}_d$, so the at most countable open covers are the same families and
  the condition is the same condition, exactly as for compactness itself
  ([[thm-compactness-agrees-with-metric-compactness]]).
- *Sequentially compact.* Convergence of a sequence in the metric sense and in
  the sense of [[def-sequence-convergence-top]] agree on a metric topology,
  because the balls around a point are a neighbourhood base at it
  ([[def-metrizable-space]]); the subsequences quantified over are the same.
- *Limit point compact.* A point $p$ is a limit point of $A$ in the metric sense
  when every ball around $p$ meets $A \setminus \{p\}$, and in the sense above
  when every neighbourhood does; the same neighbourhood base makes the two
  conditions one ([[def-metrizable-space]],
  [[def-interior-closure-boundary-top]]).

So no statement below about a metrizable space introduces a second notion, and
every theorem of the metric development about these three properties may be
quoted here once a metric inducing the topology is named. Lindel&ouml;fness,
$\sigma$-compactness and relative compactness have no metric counterpart in this
library and are defined here for the first time.

## The 10 citing use(s), quoted verbatim from the citing items

### `cor-cardinal-functions-detect-countability-axioms` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, the five cardinal functions recover first countability, second countability, separability, Lindelöfness, and ccc at the $\\aleph_0$ threshold

- [L2] First countability means a countable local base at every point, second countability means a countable basis, separability means a countable dense subset, ccc means that every pairwise-disjoint family of nonempty open sets is countable, and Lindelöfness means that every open cover has a countable subcover ([[def-first-countable-top]], [[def-second-countable-space]], [[def-separable-space]], [[def-countable-chain-condition]], [[def-compactness-variants]]).

### `cor-euclidean-compactness-equivalence-chart` (published-backward, page the-topology-of-euclidean-space)

Title: Assuming $\\mathrm{AC}_\\omega$ and $\\mathrm{DC}$, compactness, sequential compactness, countable compactness, limit point compactness, completeness and total boundedness, pseudocompactness, closedness and boundedness, and the extreme-value property are equivalent for nonempty subsets of $\\mathbb{R}^n$ with $n\\ge1$

- [L3] The topological and metric readings of compactness for a Euclidean subspace agree ([[thm-compactness-agrees-with-metric-compactness]]); the named topological variants have the meanings of [[def-compactness-variants]].

### `cor-rn-is-locally-compact-and-sigma-compact` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{R}^n$ is locally compact and $\\sigma$-compact

- [L2] A space is locally compact when every point has a compact neighbourhood, and it is $\sigma$-compact when it is a countable union of compact subsets ([[def-locally-compact-space]], [[def-compactness-variants]]).

### `ex-cardinal-functions-of-a-one-point-compactification` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: The one-point compactification of the discrete real line is compact and Lindelöf but is neither first countable nor separable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-countability-profile-of-omega-one` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: Assuming countable choice, $\\omega_1$ is first countable and countably compact but is not separable or Lindelöf

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-countability-profile-of-the-lower-limit-plane` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: Assuming choice, the lower-limit plane is first countable, separable, and ccc, but not second countable or Lindelöf

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-lindelofness-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: Lindelöfness is hereditary

- [L2] Compactness gives a finite subcover for every open cover, Lindelöfness gives an at most countable subcover, and a property is hereditary when every subspace has it ([[def-compactness-variants]], [[def-hereditary-property]]).

### `fs-lindelofness-is-productive` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, refuted: Lindelöfness is productive

- [L3] Lindelöfness means that every open cover has an at most countable subcover ([[def-compactness-variants]]).

### `thm-metric-countability-equivalences` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, a metrizable space is second countable if and only if it is separable if and only if it is Lindelöf

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-second-countable-implies-lindelof` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, every second countable space is Lindelöf

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.
