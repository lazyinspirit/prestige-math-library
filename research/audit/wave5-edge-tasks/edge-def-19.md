# Citation-precision audit — do these citing items state their target correctly?

You are reading a **published legacy corpus** of this library. Below are one or
more TARGET items, each quoted as it actually stands on disk, followed by every
place in this audit wave that cites it.

**The one question for every citing line:** does the citing text state the
target's own proposition — same domain, same quantifiers, same hypotheses, same
direction, same strength — or does it state something the target does not
actually give? A fact that quietly drops a hypothesis, flips an implication,
promotes an implication to a biconditional, or widens a domain is a **FATAL**
defect of the incorrect-dependency-citation class. It is this library's single
most common confirmed defect, and it is only visible by reading the two texts
against each other, which is what this file lets you do.

Do NOT report: a concise but faithful shortening (that is the required house
style); a paraphrase that preserves content; wording you would have chosen
differently; missing URLs; prose style. A citing line reading as a shortened
but faithful version of the target is CORRECT and must not be flagged.

Where a citing line says a dependency is declared but never cited in the body,
say whether that looks like a stale declaration or a use that lost its citation
— that one is NONFATAL either way.

For every finding use the block format from the brief, and finish with the
`N fatal, M nonfatal` line. If every citation is faithful, say so plainly and
name the targets you checked.

---

# Citation-precision audit — everything that cites `def-path-connected`

## The target, as it actually stands on disk

`items/def-path-connected.md` — definition — Paths, path-connected spaces and path components

#### Definition

Throughout, $I := [0,1] = \{\, t \in \mathbb{R} : 0 \le t \le 1 \,\}$
([[def-interval]]) carries the subspace topology inherited from $\mathbb{R}$ with
its usual topology ([[def-subspace-topology-top]],
[[lem-real-line-is-a-metric-space]], [[def-metric-topology]],
[[def-metrizable-space]]). It is called the **unit interval**.

Let $X$ be a topological space ([[def-topological-space]]) and let
$x, y \in X$.

- A **path in $X$ from $x$ to $y$** is a continuous map $\gamma : I \to X$
  ([[def-continuous-map-top]]) with $\gamma(0) = x$ and $\gamma(1) = y$. Its
  **image** is $\gamma[I]$.
- $X$ is **path-connected** when for every pair $x, y \in X$ there is a path in
  $X$ from $x$ to $y$. A subset $A \subseteq X$ is a **path-connected subset**
  when the space $A$ with its subspace topology is path-connected; equivalently,
  when any two of its points are joined by a path whose image lies in $A$, by the
  characteristic property of a map into a subspace
  ([[def-subspace-topology-top]]).
- Write $x \sim y$ when a path in $X$ from $x$ to $y$ exists. The **path
  component** of $x$ is its equivalence class
  $$P(x) \;:=\; \{\, y \in X : x \sim y \,\} .$$
- The empty space is path-connected, the defining condition quantifying over no
  pair of points, and so is every one-point space, the constant path joining its
  point to itself.

**$\sim$ is an equivalence relation on $X$, and the obligation is discharged
here**, so that "equivalence class" above denotes.

*Reflexive.* The constant map $\gamma(t) = x$ is continuous, every preimage being
$\varnothing$ or $I$ ([[def-continuous-map-top]]), and joins $x$ to $x$.

*Symmetric.* If $\gamma$ joins $x$ to $y$, put $\bar\gamma(t) := \gamma(1-t)$.
The map $r : I \to I$, $r(t) = 1 - t$, is continuous: for $s, t \in I$ one has
$|r(s) - r(t)| = |s - t|$, so a ball of radius $\varepsilon$ around $r(t)$ pulls
back to contain the ball of radius $\varepsilon$ around $t$
([[def-metric-ball]], [[def-metrizable-space]]). Hence
$\bar\gamma = \gamma \circ r$ is continuous ([[lem-continuity-is-local-and-pastes]],
claim 1) and joins $y$ to $x$.

*Transitive.* Let $\gamma_1$ join $x$ to $y$ and $\gamma_2$ join $y$ to $z$.
Define $\delta : I \to X$ by

$$\delta(t) \;:=\; \begin{cases} \gamma_1(2t), & 0 \le t \le 1/2, \\ \gamma_2(2t - 1), & 1/2 \le t \le 1. \end{cases}$$

The two clauses agree at $t = 1/2$, both giving $\gamma_1(1) = y = \gamma_2(0)$,
so $\delta$ is a well-defined function. The sets $[0,1/2]$ and $[1/2,1]$ are
closed in $I$ and cover it, and there are **two** of them, so the finite closed
form of the pasting lemma applies ([[lem-continuity-is-local-and-pastes]],
claim 3). On $[0,1/2]$ the map $\delta$ is $\gamma_1 \circ a_1$ with
$a_1(t) = 2t$, and on $[1/2,1]$ it is $\gamma_2 \circ a_2$ with
$a_2(t) = 2t - 1$; each $a_k$ is continuous into $I$, since
$|a_k(s) - a_k(t)| = 2|s-t|$, so the ball of radius $\varepsilon/2$ around $t$
maps into the ball of radius $\varepsilon$ around $a_k(t)$
([[def-metric-ball]], [[def-metrizable-space]],
[[def-subspace-topology-top]]). So both restrictions are continuous by
[[lem-continuity-is-local-and-pastes]] claim 1, hence $\delta$ is continuous, and
it joins $x$ to $z$.

**The path components partition $X$**, being the classes of an equivalence
relation, and each is a path-connected subset of $X$: two points of $P(x)$ are
joined to $x$, hence to each other by the transitivity construction above, and
the resulting path has image inside $P(x)$: if $\delta$ is a path from $x$ and
$s \in I$, then $t \mapsto \delta(st)$ is a path from $x$ to $\delta(s)$,
continuous because $t \mapsto st$ satisfies $|st_1 - st_2| \le |t_1 - t_2|$ and
is therefore continuous into $I$ by the ball criterion used above, so every point
of the image is itself joined to $x$.

## The 1 citing use(s), quoted verbatim from the citing items

### `def-polygonal-path-and-polygonal-connectedness` (published-backward, page the-topology-of-euclidean-space)

Title: Polygonal paths and polygonally connected subsets of $\\mathbb{R}^n$

- Let $A\subseteq\mathbb{R}^n$. A **polygonal path in $A$** from $x$ to $y$ is a path $\gamma:[0,1]\to A$ ([[def-path-connected]], [[def-interval]]) for which there are a finite list of vertices $v_0,\ldots,v_m\in A$ and a partition $0=t_0<t_1<\cdots<t_m=1$ such that $v_0=x$, $v_m=y$, and


---

# Citation-precision audit — everything that cites `def-vector-space`

## The target, as it actually stands on disk

`items/def-vector-space.md` — definition — Vector space over a field

#### Definition

Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative
identity $1_F$, and the field axioms as stated there. A **vector space over $F$**,
also called an **$F$-vector space**, consists of

- a set $V$, whose elements are called **vectors**;
- a binary operation $+ : V \times V \to V$ on $V$ ([[def-binary-operation]]),
  the **vector addition**;
- an element $0_V \in V$, the **zero vector**;
- a map $\cdot \,:\, F \times V \to V$, the **scalar multiplication**, written
  $\lambda v := \cdot(\lambda, v)$;

subject to the following axioms, in which $u, v \in V$ and $\lambda, \mu \in F$
are arbitrary.

- **(V1)** $(V, +, 0_V)$ is an abelian group ([[def-group]]): $+$ is associative
  and commutative, $0_V$ is a two-sided identity for $+$
  ([[def-identity-element]]), and every $v \in V$ has an additive inverse
  ([[def-invertible-element]]).
- **(V2)** $\lambda(u + v) = \lambda u + \lambda v$.
- **(V3)** $(\lambda + \mu)v = \lambda v + \mu v$.
- **(V4)** $(\lambda\mu)v = \lambda(\mu v)$.
- **(V5)** $1_F v = v$.

The elements of $F$ are called **scalars**. When several vector spaces are in
play we write $0_V$ for the zero of $V$, and we write $-v$ for the additive
inverse of $v$ and $u - v := u + (-v)$.

**The notation $0_V$ and $-v$ is legitimate.** Axiom (V1) asserts only that some
two-sided identity and some additive inverses exist. That there is at most one
two-sided identity for $+$ is [[lem-identity-unique]], and that an invertible
element of a monoid has exactly one inverse is [[lem-inverse-unique]]; both are
proved before [[def-group]] and are inherited here with the group structure. So
$0_V$ and $-v$ denote well-defined elements, and nothing below re-derives them.

**What (V1) buys, and why it is not restated.** Associativity, commutativity, the
identity law $v + 0_V = v = 0_V + v$, the inverse law $v + (-v) = 0_V$,
cancellation ([[lem-group-cancellation]]) and the inverse identities
([[lem-group-inverse-laws]]) are facts about abelian groups. They are quoted from
the group page wherever they are used and are never proved again for vectors.

## The 1 citing use(s), quoted verbatim from the citing items

### `def-polygonal-path-and-polygonal-connectedness` (published-backward, page the-topology-of-euclidean-space)

Title: Polygonal paths and polygonally connected subsets of $\\mathbb{R}^n$

- The formula uses only scalar multiplication and vector addition in $\mathbb{R}^n$ ([[def-vector-space]]). The finite list is indexed by a natural number ([[def-finite-cardinality]]).


---

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


---

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
