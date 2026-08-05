# Citation-precision audit — everything that cites `thm-ultrafilter-characterisation`

## The target, as it actually stands on disk

`items/thm-ultrafilter-characterisation.md` — theorem — Characterisation of ultrafilters: every set or its complement

#### Statement

Let $X$ be a set and $\mathcal{U}$ a filter on $X$ ([[def-filter]]). The following
are equivalent:

1. $\mathcal{U}$ is an ultrafilter on $X$ ([[def-ultrafilter]]);
2. for every $A \subseteq X$, either $A \in \mathcal{U}$ or
   $X \setminus A \in \mathcal{U}$.

Moreover, for any filter the two alternatives are exclusive: never both
$A \in \mathcal{U}$ and $X \setminus A \in \mathcal{U}$. So an ultrafilter decides
every subset of $X$, containing exactly one of $A$ and $X \setminus A$.

## The 4 citing use(s), quoted verbatim from the citing items

### `ex-free-ultrafilter-converging-in-a-convergent-sequence-space` (published-backward, page nets-and-filters-examples)

Title: Assuming the ultrafilter lemma, a free ultrafilter on $\\mathbb{N}$ converges to the added point in the one-point convergent-sequence space

- [L5] A filter is an ultrafilter exactly when for every subset it contains that subset or its complement ([[def-ultrafilter]], [[thm-ultrafilter-characterisation]]).

### `lem-every-net-has-a-universal-subnet` (published-backward, page nets-and-filters)

Title: Assuming the ultrafilter lemma, every net has a universal subnet

- [L2] An ultrafilter contains every subset or its complement ([[thm-ultrafilter-characterisation]]).

### `lem-ultrafilter-cluster-points-are-limits` (published-backward, page nets-and-filters)

Title: Every cluster point of an ultrafilter is a limit of that ultrafilter

- [A2] For every subset $S$, an ultrafilter contains $S$ or its complement ([[thm-ultrafilter-characterisation]]).

### `thm-universal-nets-and-ultrafilters-correspond` (published-backward, page nets-and-filters)

Title: A net is universal exactly when its tail filter is an ultrafilter, and the canonical net of an ultrafilter is universal

- [A2] A filter is an ultrafilter exactly when, for every $S\subseteq X$, it contains $S$ or $X\setminus S$ ([[thm-ultrafilter-characterisation]]).
