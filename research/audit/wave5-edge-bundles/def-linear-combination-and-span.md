# Citation-precision audit — everything that cites `def-linear-combination-and-span`

## The target, as it actually stands on disk

`items/def-linear-combination-and-span.md` — definition — Linear combination of a finite list, and the span $\\operatorname{span}(S)$ as the smallest linear subspace containing $S$

#### Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

### Finite sums of vectors

By axiom (V1) the triple $(V, +, 0_V)$ is an abelian group ([[def-group]]), hence
in particular a commutative monoid ([[def-semigroup-and-monoid]]). So the finite
products of [[def-monoid-finite-product]] are available in it, and we write them
**additively**: for $n \in \mathbb{N}$ and a finite list $u : n \to V$, that is a
function on the von Neumann natural $n = \{0, \dots, n-1\}$
([[def-natural-numbers]], [[lem-nat-order-is-membership]]),

$$\sum_{i<n} u_i \;:=\; \prod_{i<n} u_i \quad \text{computed in } (V,+,0_V),$$

so that $\sum_{i<0} u_i = 0_V$ and $\sum_{i<\sigma(n)} u_i = \bigl(\sum_{i<n} u_i\bigr) + u_n$,
and the value depends only on $u_0, \dots, u_{n-1}$.

### Linear combinations

A **linear combination in $V$** is a vector of the form

$$\sum_{i<n} \lambda_i v_i$$

where $n \in \mathbb{N}$, $\lambda : n \to F$ is a finite list of scalars and
$v : n \to V$ is a finite list of vectors; the sum is the finite sum just
described, of the list $i \mapsto \lambda_i v_i$. For $S \subseteq V$, a vector
$w \in V$ is a **linear combination of elements of $S$** when there are
$n \in \mathbb{N}$, $\lambda : n \to F$ and $v : n \to S$ with
$w = \sum_{i<n} \lambda_i v_i$.

**The empty case is a real case.** $\mathbb{N}$ contains $0$
([[def-natural-numbers]]), and at $n = 0$ the sum is the empty sum, which is
$0_V$. So $0_V$ is a linear combination of elements of every subset of $V$,
including $S = \varnothing$. The lists are indexed from $0$, so a linear
combination of length $n$ is $\lambda_0 v_0 + \dots + \lambda_{n-1}v_{n-1}$; no
statement here is restricted to $n \ge 1$.

### The span

Let $S \subseteq V$. The set of linear subspaces of $V$ containing $S$ is
nonempty, since $V$ itself is one, so its intersection is a linear subspace of
$V$ by [[lem-intersection-of-linear-subspaces]]. That intersection is the **span
of $S$**,

$$\operatorname{span}(S) \;:=\; \bigcap \{\, W \;:\; W \text{ is a linear subspace of } V \text{ and } S \subseteq W \,\} .$$

It contains $S$, being an intersection of sets each of which contains $S$, and it
is contained in every linear subspace of $V$ that contains $S$. So it is the
**smallest** linear subspace of $V$ containing $S$, and those two properties
determine it uniquely: if $W$ and $W'$ both contain $S$ and are each contained in
every linear subspace containing $S$, then each is contained in the other. This
is what licenses the definite article.

A subset $S \subseteq V$ **spans** $V$, or is a **spanning set** of $V$, when
$\operatorname{span}(S) = V$.

## The 1 citing use(s), quoted verbatim from the citing items

### `lem-punctured-rn-is-polygonally-connected` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge2$, the punctured space $\\mathbb{R}^n\\setminus\\{0\\}$ is polygonally connected

- [L1] The standard unit vectors form a basis of $\mathbb R^n$, so a one-dimensional span is a proper subspace when $n\ge2$ ([[lem-standard-basis-of-f-n]], [[def-linear-combination-and-span]]).
- [L2] A vector outside $\operatorname{span}\{x\}$ cannot lie on a segment from $x$ to $0$, except at no point; the corresponding statement holds for $y$, by the vector-space axioms ([[def-linear-combination-and-span]], [[def-norm-and-normed-space]]).
