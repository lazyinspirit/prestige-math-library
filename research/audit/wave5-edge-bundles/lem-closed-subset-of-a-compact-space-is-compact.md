# Citation-precision audit — everything that cites `lem-closed-subset-of-a-compact-space-is-compact`

## The target, as it actually stands on disk

`items/lem-closed-subset-of-a-compact-space-is-compact.md` — lemma — A closed subset of a compact metric space is compact

#### Statement

Let $(X,d)$ be a compact metric space ([[def-metric-compactness]],
[[def-metric-space]]) and let $F \subseteq X$ be closed in $X$
([[def-metric-topology]]). Then $F$ is a compact subset of $X$: the metric
subspace $(F, d_F)$ is a compact metric space
([[def-isometry-and-metric-embedding]]).

No choice principle is used.

## The 2 citing use(s), quoted verbatim from the citing items

### `lem-compact-closed-balls-in-a-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: In a locally compact metric space every point has arbitrarily small compact closed balls, hence a neighbourhood base of compact sets

- [L4] A closed subset of a compact metric space is a compact subset of it ([[lem-closed-subset-of-a-compact-space-is-compact]]).
- - **Where local compactness is spent.** Once, at step 1.1, to produce a single compact set with nonempty interior around $x$. Everything after that is the hereditary behaviour of compactness: a closed subset of a compact space is compact ([[lem-closed-subset-of-a-compact-space-is-compact]]), and closed balls are closed ([[thm-metric-open-set-algebra]]).

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L7] $\bar B(a,r)$ is closed and $B(a,r)$ is open in $(X,d_X)$; relative openness in a subspace is tracing, so a closed subset of $X$ traces to a closed subset of any metric subspace, and a closed subset of a compact metric space is compact ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[lem-compactness-is-intrinsic]], [[lem-closed-subset-of-a-compact-space-is-compact]], [[def-metric-ball]], [[def-metric-compactness]]).
- - **The second half is a covering argument and is where the compact-open topology earns its subbasis.** A single set $S(K,V)$ cannot control $g$ uniformly on $K$; what does is a finite family of sets $S(K_j,V_j)$ on which $g$ varies by less than a quarter of the slack. That the pieces $K_j$ are again compact is [[lem-closed-subset-of-a-compact-space-is-compact]] applied inside $K$.
