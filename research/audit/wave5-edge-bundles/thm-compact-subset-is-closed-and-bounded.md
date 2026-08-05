# Citation-precision audit — everything that cites `thm-compact-subset-is-closed-and-bounded`

## The target, as it actually stands on disk

`items/thm-compact-subset-is-closed-and-bounded.md` — theorem — A compact subset of a metric space is closed and bounded

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $K \subseteq X$ be a
compact subset ([[def-metric-compactness]]). Then $K$ is closed in $X$
([[def-metric-topology]]) and bounded ([[def-metric-bounded-diameter]]).

No choice principle is used: both covers below are given by a rule, and the
indexed form of [[lem-compactness-is-intrinsic]] returns indices rather than
sets.

**The converse is false in general.** A closed and bounded subset of an arbitrary
metric space need not be compact
([[fs-closed-and-bounded-implies-compact-in-every-metric-space]]); it is exactly
in $\mathbb{R}^n$ that the converse holds ([[thm-heine-borel-rn]]).

## The 1 citing use(s), quoted verbatim from the citing items

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L1] A compact subset of a metric space is closed in it and bounded; compactness of a subset is a property of the subspace metric alone, so a compact subset of $\mathbb{Q}$ is a compact subset of $\mathbb{R}$ ([[thm-compact-subset-is-closed-and-bounded]], [[def-metric-compactness]], [[lem-compactness-is-intrinsic]], [[def-isometry-and-metric-embedding]]).
