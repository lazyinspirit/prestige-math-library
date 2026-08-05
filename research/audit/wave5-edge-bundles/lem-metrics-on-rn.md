# Citation-precision audit — everything that cites `lem-metrics-on-rn`

## The target, as it actually stands on disk

`items/lem-metrics-on-rn.md` — lemma — $\\mathbb{R}^n$ as the set of functions $n \\to \\mathbb{R}$, and $d_1$, $d_2$, $d_\\infty$ are metrics on it

#### Statement

Let $n \in \mathbb{N}$ with $n \ge 1$. A von Neumann natural is the set of its
predecessors, $n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so it can be
used directly as an index set. Define

$$\mathbb{R}^n := \{\, x : x \text{ is a function } n \to \mathbb{R} \,\},$$

and write $x_k$ for $x(k)$, $k < n$. Two elements of $\mathbb{R}^n$ are equal
exactly when they agree at every $k < n$, functions being equal when they have
the same values. For $x, y \in \mathbb{R}^n$ put

$$d_1(x,y) := \sum_{k<n} |x_k - y_k|, \qquad d_2(x,y) := \sqrt{\ \sum_{k<n} (x_k - y_k)^2\ }, \qquad d_\infty(x,y) := \max\{\, |x_k - y_k| : k < n \,\}.$$

All three are well defined: the finite sums are those of [[def-finite-sum]]; the
sum of squares is nonnegative ([[lem-finite-sum-laws]], [[lem-of-square-positive]])
so it has a unique nonnegative square root ([[thm-of-square-roots]]); and
$\{|x_k - y_k| : k < n\}$ is a nonempty finite subset of $\mathbb{R}$, because
$n \ge 1$, so it has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]).

**Then $d_1$, $d_2$ and $d_\infty$ are metrics on $\mathbb{R}^n$**
([[def-metric-space]]).

**Why $n \ge 1$.** For $n = 0$ the set $\mathbb{R}^0$ has exactly one element,
the empty function, and $d_1$ and $d_2$ are the empty sum $0$ and its root; but
$d_\infty$ would be the maximum of the empty set, which does not exist. The
hypothesis $n \ge 1$ is therefore not decoration, and it is carried by every
statement about $d_\infty$ in this library.

## The 4 citing use(s), quoted verbatim from the citing items

### `def-euclidean-spheres-and-closed-balls` (published-backward, page the-topology-of-euclidean-space)

Title: Euclidean spheres and closed balls as subspaces of $\\mathbb{R}^n$

- Let $n \in \mathbb{N}$ with $n \ge 1$. Give $\mathbb{R}^n$ its Euclidean norm $\lVert\cdot\rVert_2$ and its induced Euclidean metric $d_2$ ([[lem-metrics-on-rn]], [[def-norm-and-normed-space]]). For $c \in \mathbb{R}^n$ and $r>0$, put

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L1] The product topology on $\mathbb{R} \times \mathbb{R} = \prod_{k<2}\mathbb{R}$ is the metric topology of $d_\infty\big((x,z),(x',z')\big) = \max\{|x-x'|, |z-z'|\}$ ([[lem-product-topology-on-rn]], [[lem-metrics-on-rn]], [[def-product-topology]], [[def-metric-topology]], [[def-metrizable-space]], [[def-max-min]], [[lem-finite-set-has-max]]).

### `lem-polygonally-reachable-set-is-clopen` (published-backward, page the-topology-of-euclidean-space)

Title: The points polygonally reachable from a fixed point form a clopen subset of every open subset of $\\mathbb{R}^n$

- [L2] A straight segment between two points of an Euclidean ball stays in that ball, by the triangle inequality for the Euclidean norm ([[lem-metrics-on-rn]]).

### `lem-pseudocompact-euclidean-subset-is-closed` (published-backward, page the-topology-of-euclidean-space)

Title: A pseudocompact subset of $\\mathbb{R}^n$ is closed

- [L2] Euclidean open sets are the sets that contain a Euclidean ball about each of their points ([[def-metric-topology]], [[lem-metrics-on-rn]]).
