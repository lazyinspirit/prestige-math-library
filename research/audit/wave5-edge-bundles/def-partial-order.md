# Citation-precision audit — everything that cites `def-partial-order`

## The target, as it actually stands on disk

`items/def-partial-order.md` — definition — Partial order and partially ordered set

#### Definition

Let $P$ be a set. A **partial order** on $P$ is a binary relation $\le$ on $P$
such that, for all $x, y, z \in P$:

- **(R)** *reflexivity*: $x \le x$;
- **(A)** *antisymmetry*: if $x \le y$ and $y \le x$, then $x = y$;
- **(T)** *transitivity*: if $x \le y$ and $y \le z$, then $x \le z$.

The pair $(P, \le)$ is a **partially ordered set**, abbreviated **poset**. When
the order is clear we write $P$ for the pair.

The associated **strict order** is defined by
$$x < y \quad :\Longleftrightarrow \quad x \le y \text{ and } x \ne y.$$

Two elements $x, y \in P$ are **comparable** if $x \le y$ or $y \le x$, and
**incomparable** otherwise. A partial order in which every two elements are
comparable is a **total order** (equivalently a **linear order**), and $(P, \le)$
is then a **totally ordered set**.

## The 1 citing use(s), quoted verbatim from the citing items

### `def-directed-set-and-net` (published-backward, page nets-and-filters)

Title: Directed preorders and nets

- A **directed preorder** is a nonempty set $D$ with a reflexive, transitive relation $\le$ such that every $d,e\in D$ have a common upper bound: some $f\in D$ satisfies $d\le f$ and $e\le f$. Antisymmetry is not required; thus this is a preorder obtained by omitting antisymmetry from the partial-order axioms of [[def-partial-order]].
