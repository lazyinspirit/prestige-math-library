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
