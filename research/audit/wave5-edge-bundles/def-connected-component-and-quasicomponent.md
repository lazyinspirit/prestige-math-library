# Citation-precision audit — everything that cites `def-connected-component-and-quasicomponent`

## The target, as it actually stands on disk

`items/def-connected-component-and-quasicomponent.md` — definition — Connected components, quasicomponents, and totally disconnected spaces

#### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
subsets carrying the subspace topology ([[def-subspace-topology-top]]) and
connectedness as in [[def-connected-space]]. Let $x \in X$.

- The **connected component of $x$** is
  $$C(x) \;:=\; \bigcup \{\, A \subseteq X : x \in A \text{ and } A \text{ is connected} \,\} .$$
  A **component of $X$** is a set of the form $C(x)$ for some $x \in X$.
- The **quasicomponent of $x$** is
  $$Q(x) \;:=\; \bigcap \{\, K \subseteq X : x \in K \text{ and } K \text{ is clopen in } X \,\} .$$
  A **quasicomponent of $X$** is a set of the form $Q(x)$.
- $X$ is **totally disconnected** when $C(x) = \{x\}$ for every $x \in X$.

**Both are well posed, and the obligations are discharged here.** The family
united in the definition of $C(x)$ is nonempty, since the singleton $\{x\}$ is
connected: a singleton admits no separation, a separation requiring two disjoint
nonempty pieces. Every member of that family contains $x$, so
[[thm-unions-of-connected-sets]] claim 1 applies and **$C(x)$ is connected**;
being a union of every connected set through $x$, it contains each of them, so
$C(x)$ is *the largest connected subset of $X$ containing $x$*. The family
intersected in the definition of $Q(x)$ is nonempty as well, since $X$ itself is
clopen ([[def-topological-space]]), so the intersection is a set; it contains
$x$, every member doing so.

**Both notions are defined by a property of $X$, not of an ambient space.** A
component of a subspace $S \subseteq X$ means a component of the space $S$, and
is written $C_S(y)$ when the space needs naming. The same holds for
quasicomponents.

**Totally disconnected, spelled out.** $X$ is totally disconnected exactly when
every connected subset of $X$ has at most one point: if some connected $A$ had
two points $x \ne y$ then $A \subseteq C(x)$ would give $C(x) \ne \{x\}$, and
conversely if $C(x) \ne \{x\}$ then $C(x)$ is a connected set with at least two
points. The empty space is totally disconnected, having no point to test.

**A discrete space is totally disconnected.** Let $X$ carry the discrete topology
([[def-standard-topologies]]) and let $A \subseteq X$ have two distinct points
$x, y$. Every subset of $A$ is open in $A$, so $(\{x\}, A \setminus \{x\})$ is a
pair of open, disjoint, nonempty sets covering $A$, that is a separation. Hence
no connected subset has two points and every component is a singleton. The
converse fails: total disconnectedness does not force the topology to be
discrete.

## The 1 citing use(s), quoted verbatim from the citing items

### `cor-components-of-open-subsets-of-rn-are-polygonally-connected` (published-backward, page the-topology-of-euclidean-space)

Title: Every connected component of an open subset of $\\mathbb{R}^n$ is open and polygonally connected

- [L2] A component is the largest connected subset containing each of its points ([[def-connected-component-and-quasicomponent]]).
