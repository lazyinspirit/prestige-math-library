# Citation-precision audit — everything that cites `def-norm-and-normed-space`

## The target, as it actually stands on disk

`items/def-norm-and-normed-space.md` — definition — A norm on a real vector space, the induced metric, and the dictionary with the metric axioms

#### Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) constructed in this library, in particular a
field, so that "vector space" below always means vector space over $\mathbb{R}$
([[def-vector-space]]).

Let $V$ be a vector space over $\mathbb{R}$, with zero vector $0_V$. A **norm on
$V$** is a function $N : V \to \mathbb{R}$ such that for all $u, v \in V$ and all
$\lambda \in \mathbb{R}$:

- **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$.
- **(N2) Absolute homogeneity.** $N(\lambda v) = |\lambda|\,N(v)$, the absolute
  value being that of [[def-abs-value]].
- **(N3) Triangle inequality.** $N(u + v) \le N(u) + N(v)$.

A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over
$\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write
$\lVert v\rVert$ for $N(v)$; when several are, the norm is always named.

**The values of a norm are real numbers.** The codomain is $\mathbb{R}$, so
$N(v)$ is an honest element of the complete ordered field and no infinite value
is permitted. This is the same convention [[rem-metric-axiom-conventions]]
records for metrics.

### Nonnegativity is a theorem, not an axiom

Many texts add a fourth condition $N(v) \ge 0$. It is redundant. Applying (N2)
with $\lambda = -1$ gives $N(-v) = |-1|\,N(v) = N(v)$ ([[lem-of-abs-value]],
[[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3)
with $u = v$ and $-v$ gives

$$0 \;=\; N(0_V) \;=\; N\bigl(v + (-v)\bigr) \;\le\; N(v) + N(-v) \;=\; N(v) + N(v),$$

where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \ge 0$, and if $N(v) < 0$ then
$N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids
([[def-complete-ordered-field]]). Hence $N(v) \ge 0$ for every $v \in V$.

**Consequently the verification of a candidate norm has three things to check and
not four**, exactly as the verification of a candidate metric has three and not
four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this
library assumes nonnegativity of a norm before the argument above.

### The induced metric

Let $N$ be a norm on $V$ and define

$$d_N(u,v) \;:=\; N(u - v) \qquad (u, v \in V),$$

where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on
$V$** ([[def-metric-space]]), and the three axioms are the three conditions
above, in order:

- **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$,
  that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$.
- **(M2)** $d_N(v,u) = N(v-u) = N\bigl((-1)(u-v)\bigr) = |-1|\,N(u-v) = d_N(u,v)$,
  by (N2), [[lem-of-abs-value]] and $(-1)w = -w$
  ([[lem-vector-space-elementary-consequences]]).
- **(M3)** $d_N(u,w) = N\bigl((u-v) + (v-w)\bigr) \le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$,
  by (N3).

A normed space is therefore a metric space, and every notion defined for metric
spaces — open set ([[def-metric-topology]]), convergence, Cauchyness,
continuity, compactness — is available in it with no further definition. **This
library never introduces a second notion of any of them for normed spaces.**

### Two properties an arbitrary metric need not have

The metric $d_N$ satisfies, for all $u, v, w \in V$ and $\lambda \in \mathbb{R}$:

- **translation invariance**, $d_N(u + w, v + w) = N\bigl((u+w)-(v+w)\bigr) = N(u-v) = d_N(u,v)$;
- **absolute homogeneity**, $d_N(\lambda u, \lambda v) = N\bigl(\lambda(u-v)\bigr) = |\lambda|\,d_N(u,v)$, by (N2).

**Not every metric on a vector space arises from a norm**, and homogeneity is
what fails. The published bounded remetrisation [[lem-bounded-remetrisation]]
replaces a metric $d$ by $d' = \min\{d, 1\}$, a metric with the same topology
whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with
$d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute
homogeneity would force $d'(\lambda v, 0_V) = |\lambda|\,d'(v, 0_V)$, which is
unbounded in $\lambda$, while $d'$ is bounded by $1$. So the passage from norms
to metrics is not reversible, and a statement about a metric on a vector space is
strictly weaker than the corresponding statement about a norm.

## The 6 citing use(s), quoted verbatim from the citing items

### `cor-components-of-open-subsets-of-rn-are-polygonally-connected` (published-backward, page the-topology-of-euclidean-space)

Title: Every connected component of an open subset of $\\mathbb{R}^n$ is open and polygonally connected

- [L1] A Euclidean ball is path-connected, hence connected: the norm triangle inequality keeps every straight segment in the ball, the segment is continuous, and every path-connected space is connected ([[def-metric-ball]], [[def-norm-and-normed-space]], [[lem-euclidean-polygonal-paths-are-continuous]], [[thm-path-connected-implies-connected]]).

### `cor-rn-is-polygonally-connected-and-locally-path-connected` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{R}^n$ is polygonally connected, connected, locally path-connected and locally connected

- [L4] The norm triangle inequality keeps a segment joining two points of an open ball inside that ball ([[def-norm-and-normed-space]]).

### `def-euclidean-spheres-and-closed-balls` (published-backward, page the-topology-of-euclidean-space)

Title: Euclidean spheres and closed balls as subspaces of $\\mathbb{R}^n$

- Let $n \in \mathbb{N}$ with $n \ge 1$. Give $\mathbb{R}^n$ its Euclidean norm $\lVert\cdot\rVert_2$ and its induced Euclidean metric $d_2$ ([[lem-metrics-on-rn]], [[def-norm-and-normed-space]]). For $c \in \mathbb{R}^n$ and $r>0$, put

### `ex-open-euclidean-ball-is-polygonally-connected` (published-backward, page the-topology-of-euclidean-space-examples)

Title: The straight segment between two points of an open Euclidean ball stays in the ball

- So the segment from $x$ to $y$ stays in the ball. By [[lem-euclidean-polygonal-paths-are-continuous]] it is a polygonal path, and $B_2(c,r)$ is polygonally connected in the sense of [[def-polygonal-path-and-polygonal-connectedness]]. The norm and ball conventions are those of [[def-norm-and-normed-space]] and [[def-metric-ball]].

### `fs-connected-subsets-of-rn-are-polygonally-connected` (published-backward, page the-topology-of-euclidean-space)

Title: FALSE: every connected subset of $\\mathbb{R}^n$ is polygonally connected

- [L3] If distinct unit vectors $u,v$ are joined by a segment, its midpoint has squared Euclidean norm $\lVert(u+v)/2\rVert_2^2=1-\lVert u-v\rVert_2^2/4<1$ ([[def-euclidean-inner-product]], [[def-norm-and-normed-space]]).

### `lem-punctured-rn-is-polygonally-connected` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge2$, the punctured space $\\mathbb{R}^n\\setminus\\{0\\}$ is polygonally connected

- [L2] A vector outside $\operatorname{span}\{x\}$ cannot lie on a segment from $x$ to $0$, except at no point; the corresponding statement holds for $y$, by the vector-space axioms ([[def-linear-combination-and-span]], [[def-norm-and-normed-space]]).
