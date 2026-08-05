# Citation-precision audit — everything that cites `thm-compactness-agrees-with-metric-compactness`

## The target, as it actually stands on disk

`items/thm-compactness-agrees-with-metric-compactness.md` — theorem — For a metric space with its metric topology, compactness in the topological sense is compactness in the metric sense, and the two notions of compact subset coincide

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $\mathcal{T}_d$ be
its metric topology ([[def-metric-topology]]), so that $(X, \mathcal{T}_d)$ is a
topological space ([[def-topological-space]]) and is metrizable
([[def-metrizable-space]]). Then:

1. $(X,d)$ is a compact metric space ([[def-metric-compactness]]) **if and only
   if** $(X, \mathcal{T}_d)$ is a compact topological space
   ([[def-compact-space]]).
2. For every $A \subseteq X$: $A$ is a compact subset of the metric space
   $(X,d)$ if and only if $A$ is a compact subset of the topological space
   $(X, \mathcal{T}_d)$, the two readings of "compact subset" being the metric
   subspace $(A, d_A)$ ([[def-isometry-and-metric-embedding]]) and the topological
   subspace $(A, (\mathcal{T}_d)_A)$ ([[def-subspace-topology-top]]).

**Nothing here is a coincidence and nothing is transported.** The open-cover
condition of [[def-metric-compactness]] quantifies over families of subsets open
in $(X,d)$, and by [[def-metric-topology]] those are exactly the members of
$\mathcal{T}_d$; so the two conditions are not merely equivalent, they are the
same condition written twice. No choice principle is used.

## The 3 citing use(s), quoted verbatim from the citing items

### `cor-euclidean-compactness-equivalence-chart` (published-backward, page the-topology-of-euclidean-space)

Title: Assuming $\\mathrm{AC}_\\omega$ and $\\mathrm{DC}$, compactness, sequential compactness, countable compactness, limit point compactness, completeness and total boundedness, pseudocompactness, closedness and boundedness, and the extreme-value property are equivalent for nonempty subsets of $\\mathbb{R}^n$ with $n\\ge1$

- [L3] The topological and metric readings of compactness for a Euclidean subspace agree ([[thm-compactness-agrees-with-metric-compactness]]); the named topological variants have the meanings of [[def-compactness-variants]].

### `def-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: Locally compact metric space: every point has a compact neighbourhood

- [[thm-compactness-agrees-with-metric-compactness]], which discharges the

### `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values` (published-backward, page the-topology-of-euclidean-space)

Title: For a nonempty subset of $\\mathbb{R}^n$ with $n\\ge1$, compactness, closedness and boundedness, pseudocompactness, and attainment of extrema by every continuous real-valued function are equivalent

- [L5] Compactness for the Euclidean metric and for its metric topology is the same condition ([[thm-compactness-agrees-with-metric-compactness]]).
