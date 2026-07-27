---
id: def-linear-subspace
kind: definition
title: "Linear subspace of a vector space"
status: draft
origin: session
deps: [def-vector-space, def-subgroup, def-group, lem-vector-space-elementary-consequences]
justified_by: []
aliases: [def-linear-subspace-of-a-vector-space]
landmark: true
short: "linear subspace $W \\le V$"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). A subset
$W \subseteq V$ is a **linear subspace** of $V$ when

- **(W1)** $0_V \in W$;
- **(W2)** $W$ is closed under the vector addition: $u, v \in W$ implies
  $u + v \in W$;
- **(W3)** $W$ is closed under scalar multiplication: $\lambda \in F$ and
  $v \in W$ imply $\lambda v \in W$.

Every vector space $V$ has the two **trivial linear subspaces** $\{0_V\}$ and $V$
itself; a linear subspace $W$ with $W \ne V$ is called **proper**.

**The restricted operations are the required data, and $W$ is a vector space.**
By (W2) the vector addition of $V$ restricts to a binary operation
$W \times W \to W$, and by (W3) the scalar multiplication restricts to a map
$F \times W \to W$. With these and the element $0_V$, the set $W$ is a vector
space over $F$:

- axioms (V2)–(V5) are equations required of elements of $W$, which are in
  particular elements of $V$, so they are inherited from $V$; likewise
  associativity and commutativity of the restricted addition;
- $0_V$ lies in $W$ by (W1) and is a two-sided identity for the restricted
  addition, since it is one in $V$;
- for $v \in W$ the vector $(-1_F)v$ lies in $W$ by (W3), and
  $(-1_F)v = -v$ ([[lem-vector-space-elementary-consequences]]), so $-v \in W$
  and $v + (-v) = 0_V$ holds in $W$.

So $(W,+,0_V)$ is an abelian group, which is axiom (V1), and $W$ is a vector
space over $F$ **whose zero vector and whose additive inverses are those of
$V$**. In the language of [[def-subgroup]], the three displayed conditions
(S1) $0_V \in W$, (S2) closure under addition and (S3) closure under additive
inverses all hold, so $W$ is a subgroup of the abelian group $(V,+,0_V)$
([[def-group]]); that reading, and its converse, are recorded as
[[lem-linear-subspace-is-a-subgroup]] and are cited from there rather than
re-argued below.

## Remarks

- **"Linear subspace", never bare "subspace", in this library.** The word
  *subspace* is already in use here for the topological notion, a subset of a
  topological space carrying the induced topology, which is an unrelated idea.
  The names on this page therefore all say *linear*: `def-linear-subspace`,
  `lem-linear-subspace-criterion`, `lem-intersection-of-linear-subspaces`,
  `lem-linear-subspace-is-a-subgroup`, `def-sum-of-linear-subspaces`. Where the
  ambient vector space is fixed and no confusion is possible, the surrounding
  prose still writes the full phrase.

- **Closure under negatives is not a fourth condition.** It follows from (W3),
  because the additive inverse of a vector is the scalar multiple $(-1_F)v$. This
  is why the definition asks for three conditions where the definition of a
  subgroup asks for three of its own, and why the one-step test
  ([[lem-linear-subspace-criterion]]) can compress them into one.

- **(W1) cannot be replaced by "$W \ne \varnothing$" while dropping the others.**
  It can be replaced by nonemptiness *given* (W3), since a nonempty $W$ closed
  under scalar multiplication contains $0_F v = 0_V$
  ([[lem-vector-space-elementary-consequences]]) for any of its elements $v$.
  Stated with (W1) the definition is checkable one condition at a time, and the
  economical single test is [[lem-linear-subspace-criterion]].

- **The field matters.** A subset of $V$ may be closed under the scalars of a
  subfield $K \subseteq F$ without being closed under all of $F$, so "linear
  subspace" always means "linear subspace over the field named". Restriction of
  scalars ([[lem-restriction-of-scalars]]) is what makes that distinction
  possible.
