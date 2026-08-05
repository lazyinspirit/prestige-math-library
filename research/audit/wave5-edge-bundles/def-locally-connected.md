# Citation-precision audit — everything that cites `def-locally-connected`

## The target, as it actually stands on disk

`items/def-locally-connected.md` — definition — Locally connected and locally path-connected spaces: a neighbourhood base of open connected, respectively open path-connected, sets at every point

#### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$x \in X$. Subsets carry the subspace topology
([[def-subspace-topology-top]]); connectedness is [[def-connected-space]] and
path-connectedness is [[def-path-connected]].

- $X$ is **locally connected at $x$** when for every open $U$ with $x \in U$
  there is an **open connected** $V$ with $x \in V \subseteq U$.
- $X$ is **locally connected** when it is locally connected at every point.
- $X$ is **locally path-connected at $x$** when for every open $U$ with
  $x \in U$ there is an **open path-connected** $V$ with $x \in V \subseteq U$;
  and **locally path-connected** when this holds at every point.

**The neighbourhood-base reading.** $X$ is locally connected at $x$ exactly when
the open connected sets containing $x$ form a neighbourhood base at $x$
([[def-neighbourhood-top]]). Indeed a neighbourhood $N$ of $x$ contains an open
$U$ with $x \in U \subseteq N$, and an open connected $V$ with
$x \in V \subseteq U$ is then a member of that family inside $N$; conversely a
base member inside an open $U \ni x$ is exactly what the displayed condition
asks. The same sentence with "path-connected" in place of "connected" gives the
reading for local path-connectedness. Recall that in this library a neighbourhood
need not be open ([[def-neighbourhood-top]]), which is why "open" is written out
in both clauses above.

**Openness in the clauses is not removable and is a live fork.** Asking only for
a *connected neighbourhood* inside every open $U \ni x$ — with no openness
demanded of the connected set — defines an a priori weaker condition at a single
point, called *connectedness im kleinen at $x$* in the literature. This library
takes the definition above, with openness, and **no statement here asserts that
the two agree**, at a point or globally.

**Local and global connectedness are independent conditions, and neither clause
above mentions the other.** A two-point discrete space
([[def-standard-topologies]]) is locally connected, every singleton being open
and connected, and is not connected, the two singletons separating it. So local
connectedness does not imply connectedness. The reverse implication is not
asserted here either.

**Both notions are properties of the space, not of an ambient pair.** "A locally
connected subset $A \subseteq X$" means that the space $A$ with its subspace
topology is locally connected, and the open sets tested are then the sets open in
$A$.

## The 1 citing use(s), quoted verbatim from the citing items

### `cor-rn-is-polygonally-connected-and-locally-path-connected` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{R}^n$ is polygonally connected, connected, locally path-connected and locally connected

- [L3] Every path-connected space is connected, and every locally path-connected space is locally connected ([[thm-path-connected-implies-connected]], [[def-locally-connected]]).
