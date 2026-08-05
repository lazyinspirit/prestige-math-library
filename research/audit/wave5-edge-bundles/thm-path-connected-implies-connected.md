# Citation-precision audit — everything that cites `thm-path-connected-implies-connected`

## The target, as it actually stands on disk

`items/thm-path-connected-implies-connected.md` — theorem — Every path-connected space is connected, and every path component lies inside a component

#### Statement

Let $X$ be a topological space, with subsets carrying the subspace topology
([[def-subspace-topology-top]]). Then:

1. **The unit interval is connected.** $I = [0,1]$ is a connected subset of
   $\mathbb{R}$, hence a connected space.
2. **Path-connected implies connected.** If $X$ is path-connected
   ([[def-path-connected]]) then $X$ is connected ([[def-connected-space]]). The
   same holds for a subset: a path-connected subset of $X$ is a connected subset
   of $X$.
3. **Path components refine components.** For every $x \in X$,
   $$P(x) \;\subseteq\; C(x),$$
   the path component inside the component
   ([[def-connected-component-and-quasicomponent]]). So every component is a
   union of path components.

**No converse is claimed.** Claim 2 is one-directional and claim 3 is an
inclusion; the question of when a connected space is path-connected is not
settled here.

**No choice principle is used.** The proof takes the union over the **set of all**
paths issuing from a fixed point rather than selecting one path per endpoint,
which is what an appeal to the Axiom of Choice would be. The point at which the
temptation arises is flagged in the remarks.

## The 4 citing use(s), quoted verbatim from the citing items

### `cor-euclidean-spheres-are-path-connected` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge2$, the sphere $S^{n-1}$ is path-connected and connected

- [L3] A path-connected space is connected ([[thm-path-connected-implies-connected]]).

### `cor-rn-is-polygonally-connected-and-locally-path-connected` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{R}^n$ is polygonally connected, connected, locally path-connected and locally connected

- [L3] Every path-connected space is connected, and every locally path-connected space is locally connected ([[thm-path-connected-implies-connected]], [[def-locally-connected]]).

### `thm-open-connected-subsets-of-rn-are-polygonally-connected` (published-backward, page the-topology-of-euclidean-space)

Title: For an open subset of $\\mathbb{R}^n$, connectedness, path-connectedness and polygonal connectedness are equivalent

- [L2] A polygonal path is a path, and every path-connected space is connected ([[def-polygonal-path-and-polygonal-connectedness]], [[thm-path-connected-implies-connected]]).

### `thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{R}$ is not homeomorphic to $\\mathbb{R}^n$ for any $n\\ge2$

- [L1] The punctured space $\mathbb R^n\setminus\{0\}$ is polygonally connected, hence connected ([[lem-punctured-rn-is-polygonally-connected]], [[thm-path-connected-implies-connected]]).
