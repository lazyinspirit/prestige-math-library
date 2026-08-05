# Citation-precision audit — everything that cites `def-filter`

## The target, as it actually stands on disk

`items/def-filter.md` — definition — Filter on a set

#### Definition

Let $X$ be a set. A family $\mathcal{F} \subseteq \mathcal{P}(X)$ of subsets of
$X$ is a **filter on $X$** when it satisfies:

- **(F1)** *nontriviality*: $X \in \mathcal{F}$;
- **(F2)** *properness*: $\emptyset \notin \mathcal{F}$;
- **(F3)** *closure under pairwise intersection*: if $A, B \in \mathcal{F}$ then
  $A \cap B \in \mathcal{F}$;
- **(F4)** *upward closure in $X$*: if $A \in \mathcal{F}$ and
  $A \subseteq B \subseteq X$ then $B \in \mathcal{F}$.

The set of all filters on $X$ is written $\mathrm{Filt}(X)$. It is a subset of
$\mathcal{P}(\mathcal{P}(X))$, hence a set, and it is ordered by inclusion:
$\mathcal{F} \subseteq \mathcal{G}$ is read "$\mathcal{G}$ is **finer** than
$\mathcal{F}$", and $\mathcal{F}$ is **coarser** than $\mathcal{G}$.

**Convention: filters are proper.** Condition (F2) is part of the definition
throughout this library, so "filter" always means "proper filter". The competing
convention drops (F2), calls the resulting objects filters, and says **proper
filter** for one that omits $\emptyset$. The two conventions differ by exactly one
object, since (F4) forces any family satisfying (F1), (F3) and (F4) that contains
$\emptyset$ to be all of $\mathcal{P}(X)$: if $\emptyset \in \mathcal{F}$ then
$\emptyset \subseteq B \subseteq X$ gives $B \in \mathcal{F}$ for every
$B \subseteq X$. That single extra object is the **improper filter**
$\mathcal{P}(X)$. This library follows the more widely adopted convention, in
which the improper filter is not a filter; a reader arriving from the other
convention should read every unqualified "filter" below as "proper filter".

## The 4 citing use(s), quoted verbatim from the citing items

### `def-filter-convergence-and-cluster-point` (published-backward, page nets-and-filters)

Title: Convergence and cluster points of a filter on a topological space

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `def-net-derived-from-a-filter` (published-backward, page nets-and-filters)

Title: The canonical net indexed by the pairs $(A,x)$ with $A$ in a filter and $x\\in A$

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `def-tail-filter-of-a-net` (published-backward, page nets-and-filters)

Title: The tail filter of a net

- Thus $A\in\mathcal F_x$ exactly when the net is eventually in $A$. The preceding filter-base verification makes this a well-defined filter in the sense of [[def-filter]].

### `ex-free-ultrafilter-converging-in-a-convergent-sequence-space` (published-backward, page nets-and-filters-examples)

Title: Assuming the ultrafilter lemma, a free ultrafilter on $\\mathbb{N}$ converges to the added point in the one-point convergent-sequence space

- [L3] A filter contains its whole set, omits the empty set, and is closed under intersections and supersets ([[def-filter]]).
