# Citation-precision audit — everything that cites `lem-standard-basis-of-f-n`

## The target, as it actually stands on disk

`items/lem-standard-basis-of-f-n.md` — lemma — The standard list $e : n \\to F^{n}$ with $e_i(i) = 1_F$ and $e_i(j) = 0_F$ for $j \\ne i$ is an ordered basis of $F^{n}$; hence $\\dim_F F^{n} = n$, and $F^{0}$ is the zero space with basis $\\varnothing$ and dimension $0$

#### Statement

Let $F$ be a field ([[def-field]]), let $n \in \mathbb{N}$ and let $F^{n}$ be the
function space on the von Neumann natural $n = \{0, \dots, n-1\}$, with the
pointwise operations ([[def-function-space]], [[def-natural-numbers]],
[[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector**
$e_i \in F^{n}$ by

$$e_i(i) = 1_F, \qquad e_i(j) = 0_F \ \text{ for } j < n \text{ with } j \ne i .$$

Then:

1. **Finite sums in a function space are pointwise.** For every set $X$, every
   $p \in \mathbb{N}$, every list $u : p \to F^{X}$ and every $j \in X$,
   $$\Bigl(\sum_{k<p} u_k\Bigr)(j) \;=\; \sum_{k<p} u_k(j),$$
   the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary
   $X$ because the companion page needs it at $X = \mathbb{N}$.)
2. $e : n \to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in
   particular $e$ is injective and its image $e[n] = \{\, e_i : i < n \,\}$ is a
   basis of $F^{n}$ with $e[n] \approx n$ ([[def-equinumerous]]);
3. for every $\lambda : n \to F$ and every $j < n$,
   $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \lambda_j$; equivalently the
   coordinate list of $x \in F^{n}$ with respect to the ordered basis $e$
   ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is
   $i \mapsto x(i)$;
4. $F^{n}$ is finite-dimensional over $F$ with $\dim_F F^{n} = n$
   ([[def-dimension]]);
5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function,
   so $F^{0}$ is the zero space, the empty list is its ordered basis,
   $\varnothing$ is its basis and $\dim_F F^{0} = 0$.

Every index runs from $0$, so the coordinates of an element of $F^{n}$ are
$x_0, \dots, x_{n-1}$ and no statement above is restricted to $n \ge 1$.

## The 3 citing use(s), quoted verbatim from the citing items

### `cex-closed-unbounded-euclidean-subset-not-compact` (published-backward, page the-topology-of-euclidean-space-examples)

Title: $\\mathbb{R}^n$ is closed and unbounded and is not compact for $n\\ge1$

- [L2] The standard vector $e_0$ has Euclidean norm $1$ ([[lem-standard-basis-of-f-n]]).

### `cex-open-bounded-euclidean-subset-not-compact` (published-backward, page the-topology-of-euclidean-space-examples)

Title: The open unit ball in $\\mathbb{R}^n$ is bounded and not compact

- [L2] The unit vector $e_0$ exists and has Euclidean norm $1$ ([[lem-standard-basis-of-f-n]]).

### `lem-punctured-rn-is-polygonally-connected` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge2$, the punctured space $\\mathbb{R}^n\\setminus\\{0\\}$ is polygonally connected

- [L1] The standard unit vectors form a basis of $\mathbb R^n$, so a one-dimensional span is a proper subspace when $n\ge2$ ([[lem-standard-basis-of-f-n]], [[def-linear-combination-and-span]]).
