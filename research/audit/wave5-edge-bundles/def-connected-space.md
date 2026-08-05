# Citation-precision audit — everything that cites `def-connected-space`

## The target, as it actually stands on disk

`items/def-connected-space.md` — definition — Separation of a topological space, connected and disconnected spaces, clopen sets, and connected subsets

#### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- A **separation** of $X$ is an ordered pair $(U, V)$ of **open**, **nonempty**,
  **disjoint** subsets of $X$ with $U \cup V = X$.
- $X$ is **disconnected** when a separation of $X$ exists, and **connected** when
  none does.
- A subset $A \subseteq X$ is a **connected subset** of $X$ when the space
  $(A, \mathcal{T}_A)$ is connected, $\mathcal{T}_A$ being the subspace topology
  ([[def-subspace-topology-top]]). "Disconnected subset" is read the same way.

Since $U$ and $V$ are complementary in $X$, each of them is closed as well as
open; so a separation is the same thing as a partition of $X$ into two nonempty
clopen pieces ([[def-topological-space]]). The **clopen** subsets of $X$ are
those that are both open and closed, and $\varnothing$ and $X$ are always among
them.

**The empty space and the one-point space are connected in this library.**
Neither admits a separation: a separation requires two nonempty disjoint sets
whose union is the whole space, and neither $\varnothing$ nor a singleton can be
written as such a union. So both are connected under the definition above,
without any special clause. **This is a live convention fork** and the competing
choice is recorded in [[rem-connectedness-conventions]]; nothing on this page
depends on which is taken except the reading of the word "connected" applied to
those two spaces.

**Connectedness is a property of a space, not of an ambient pair.** The condition
above mentions only $(X,\mathcal{T})$. When it is applied to $A \subseteq X$ it
is applied to the space $(A, \mathcal{T}_A)$, so it does not change if $A$ is
regarded as a subspace of some other space inducing the same topology on $A$; in
particular a subset of $A$ is connected as a subset of $A$ exactly when it is
connected as a subset of $X$, by transitivity of the subspace topology
([[def-subspace-topology-top]]). This is why "connected" may be used of a subset
with no ambient space named.

**Spelled out for a subset.** $A \subseteq X$ is disconnected exactly when there
are open $U, V \subseteq X$ with

$$A \subseteq U \cup V, \qquad U \cap A \ne \varnothing, \qquad V \cap A \ne \varnothing, \qquad U \cap V \cap A = \varnothing,$$

because the open sets of $(A,\mathcal{T}_A)$ are precisely the traces $U \cap A$.
Note the last condition: it asks $U$ and $V$ to be disjoint **on $A$**, not in
$X$. Requiring $U \cap V = \varnothing$ outright is a strictly stronger demand
and is a different notion.

**The two-point discrete space.** Write $\mathbf{2} := \{0,1\}$ with the discrete
topology ([[def-standard-topologies]]), in which every subset is open. A
separation of $X$ is the same datum as a surjective continuous map
$X \to \mathbf{2}$ ([[def-continuous-map-top]]): given $(U,V)$, the map sending
$U$ to $0$ and $V$ to $1$ is continuous because the preimage of each of the four
open subsets of $\mathbf{2}$ is one of $\varnothing$, $U$, $V$, $X$; given a
surjective continuous $\chi : X \to \mathbf{2}$, the pair
$(\chi^{-1}[\{0\}], \chi^{-1}[\{1\}])$ is a separation. This reformulation is
proved as a theorem on this page and is recorded here only to name $\mathbf{2}$.

**Separated sets.** Two subsets $A_1, A_2 \subseteq X$ are **separated in $X$**
when

$$\overline{A_1} \cap A_2 = \varnothing \qquad \text{and} \qquad A_1 \cap \overline{A_2} = \varnothing,$$

closures taken in $X$ ([[def-interior-closure-boundary-top]],
[[thm-closure-characterisation-top]]). Separated sets are disjoint, since
$A_1 \subseteq \overline{A_1}$; the converse fails. This is verbatim the
condition [[def-connected-r]] uses on the real line, transported to an arbitrary
space, and the theorem relating it to the definition above is the next lemma on
this page.

**Totally disconnected spaces, and the empty case.** The vocabulary for a space
all of whose connected subsets are single points is fixed later on this page,
together with the components; it is not defined here because it is stated in
terms of components.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-punctured-line-versus-punctured-plane` (published-backward, page the-topology-of-euclidean-space-examples)

Title: $GL_1(\\mathbb{R})=\\mathbb{R}\\setminus\\{0\\}$ is disconnected, whereas $\\mathbb{R}^2\\setminus\\{0\\}$ is polygonally connected

- The invertible $1\times1$ real matrices are the nonzero real numbers, so $GL_1(\mathbb R)=\mathbb R\setminus\{0\}$. This set is disconnected: it contains $-1$ and $1$ but not the intermediate point $0$, so it is not order-convex and cannot be connected by [[cor-connected-subsets-of-the-line]]. In contrast, [[lem-punctured-rn-is-polygonally-connected]] gives polygonal connectedness of $\mathbb R^2\setminus\{0\}$. Connectedness is understood through [[def-connected-space]].

### `thm-open-connected-subsets-of-rn-are-polygonally-connected` (published-backward, page the-topology-of-euclidean-space)

Title: For an open subset of $\\mathbb{R}^n$, connectedness, path-connectedness and polygonal connectedness are equivalent

- [L3] A connected space has no nonempty proper clopen subset ([[def-connected-space]]).
