# Citation-precision audit — everything that cites `thm-compact-iff-fip`

## The target, as it actually stands on disk

`items/thm-compact-iff-fip.md` — theorem — A space is compact exactly when every family of closed subsets with the finite intersection property has nonempty intersection

#### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). For a
family $\mathcal{A}$ of subsets of $X$ write

$$\bigcap \mathcal{A} \;:=\; \{\, x \in X : x \in A \text{ for every } A \in \mathcal{A} \,\},$$

so that $\bigcap \varnothing = X$, matching the convention for the empty finite
intersection in [[def-finite-intersection-property]]. Then:

1. $(X, \mathcal{T})$ is compact ([[def-compact-space]]) **if and only if** every
   family $\mathcal{A}$ of closed subsets of $X$ with the finite intersection
   property ([[def-finite-intersection-property]]) satisfies
   $\bigcap \mathcal{A} \ne \varnothing$.
2. Equivalently: $(X, \mathcal{T})$ is compact if and only if every family of
   closed subsets of $X$ that is contained in some filter on $X$
   ([[def-filter]]) has nonempty intersection, a family of subsets of $X$ lying
   in a filter exactly when it has the finite intersection property
   ([[lem-fip-generates-filter]]).

No choice principle is used in either direction: complementation is a canonical
bijection, so no member of a family ever has to be selected.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-compactness-via-nets-filters-and-ultrafilters` (published-backward, page nets-and-filters)

Title: Assuming the ultrafilter lemma, compactness is equivalent to every net having a cluster point, every net having a convergent subnet, every filter having a cluster point, and every ultrafilter converging

- [L1] Compactness is equivalent to every family of closed sets with the finite-intersection property having nonempty intersection; moreover, a family of subsets of $X$ has the finite-intersection property exactly when it is contained in a filter on $X$ ([[thm-compact-iff-fip]], clauses 1 and 2).
