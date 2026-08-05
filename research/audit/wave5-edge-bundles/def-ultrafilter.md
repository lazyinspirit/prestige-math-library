# Citation-precision audit — everything that cites `def-ultrafilter`

## The target, as it actually stands on disk

`items/def-ultrafilter.md` — definition — Ultrafilter

#### Definition

Let $X$ be a set and let $\mathrm{Filt}(X)$ be the set of all filters on $X$
([[def-filter]]). Since every filter is a subset of $\mathcal{P}(X)$, the family
$\mathrm{Filt}(X)$ is a subset of $\mathcal{P}(\mathcal{P}(X))$ and is therefore a
set, carved out by Separation. Inclusion is a partial order on it
([[def-partial-order]]): $\subseteq$ is reflexive, antisymmetric by
extensionality, and transitive.

An **ultrafilter on $X$** is a filter on $X$ that is a **maximal element** of
$(\mathrm{Filt}(X), \subseteq)$ ([[def-maximal-element]]): a filter $\mathcal{U}$
on $X$ such that no filter on $X$ strictly contains $\mathcal{U}$, equivalently
such that every filter $\mathcal{G}$ on $X$ with $\mathcal{U} \subseteq
\mathcal{G}$ satisfies $\mathcal{G} = \mathcal{U}$.

An ultrafilter is **principal** if it is of the form
$\{\, A \subseteq X : x \in A \,\}$ for some $x \in X$, and **free**, or
**non-principal**, otherwise.

## The 3 citing use(s), quoted verbatim from the citing items

### `ex-free-ultrafilter-converging-in-a-convergent-sequence-space` (published-backward, page nets-and-filters-examples)

Title: Assuming the ultrafilter lemma, a free ultrafilter on $\\mathbb{N}$ converges to the added point in the one-point convergent-sequence space

- [L5] A filter is an ultrafilter exactly when for every subset it contains that subset or its complement ([[def-ultrafilter]], [[thm-ultrafilter-characterisation]]).

### `lem-ultrafilter-cluster-points-are-limits` (published-backward, page nets-and-filters)

Title: Every cluster point of an ultrafilter is a limit of that ultrafilter

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-universal-nets-and-ultrafilters-correspond` (published-backward, page nets-and-filters)

Title: A net is universal exactly when its tail filter is an ultrafilter, and the canonical net of an ultrafilter is universal

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.
