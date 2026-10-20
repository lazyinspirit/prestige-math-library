---
id: def-euclidean-inner-product
kind: definition
title: "The Euclidean inner product $\\langle x,y\\rangle = \\sum_{k<n} x_k y_k$ on $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-function-space, def-vector-space, lem-standard-basis-of-f-n, def-finite-sum, lem-finite-sum-laws, lem-metrics-on-rn, lem-of-square-positive, thm-of-square-roots, def-natural-numbers, lem-nat-order-is-membership, def-integer-power, lem-power-laws]
justified_by: []
aliases: []
landmark: false
verification:
  repair: research/statistical-models-experiments-62-published-euclidean-scope-note-repair.json
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Dot product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dot_product"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$. A natural number is a von Neumann natural, that is a set,
and $n = \{0, 1, \dots, n-1\}$ (The natural numbers $\mathbb{N}$ (von Neumann),
On $\mathbb{N}$ the order is membership: $m < n \iff m \in n$), so

$$\mathbb{R}^{n} \;=\; \{\, x \;:\; x \text{ is a function } n \to \mathbb{R} \,\}$$

is the function space of The vector space $F^{X}$ of all functions $X \to F$ with pointwise operations, and $F^{n}$ as the case $X = n = \{0, 1, \dots, n-1\}$ at $F = \mathbb{R}$ and $X = n$,
a vector space over $\mathbb{R}$ under the pointwise operations
(Vector space over a field). We write $x_k := x(k)$ for $k < n$, and two elements of
$\mathbb{R}^{n}$ are equal exactly when they agree at every $k < n$. This is the
same set that $\mathbb{R}^n$ as the set of functions $n \to \mathbb{R}$, and $d_1$, $d_2$, $d_\infty$ are metrics on it calls $\mathbb{R}^{n}$.

The **Euclidean inner product** of $x, y \in \mathbb{R}^{n}$ is the real number

$$\langle x, y\rangle \;:=\; \sum_{k<n} x_k\,y_k ,$$

the finite sum of Finite sums and finite products, by recursion applied to the list $k \mapsto x_k y_k$
(extended by $0$ beyond $n$, as every finite list in this library is). The
**Euclidean norm** of $x$ is

$$\lVert x\rVert_2 \;:=\; \sqrt{\langle x, x\rangle},$$

which is defined because $\langle x,x\rangle = \sum_{k<n} x_k^{2} \ge 0$ (a sum
of nonnegative terms, Laws of finite sums and finite products clause 4 and
Squares of nonzero elements are positive, the case $x_k = 0$ giving $x_k^2 = 0$ by
Integer powers $a^m$) and every nonnegative real has a unique nonnegative square
root (Square roots exist: a unique $\sqrt{a} \ge 0$ with $(\sqrt{a})^2 = a$; the positives are $\{x^2 : x \neq 0\}$).

### Both are defined for every $n$, including $n = 0$

At $n = 0$ the set $\mathbb{R}^{0}$ has exactly one element, the empty function,
and it is the zero vector space (The standard list $e : n \to F^{n}$ with $e_i(i) = 1_F$ and $e_i(j) = 0_F$ for $j \ne i$ is an ordered basis of $F^{n}$; hence $\dim_F F^{n} = n$, and $F^{0}$ is the zero space with basis $\varnothing$ and dimension $0$ clause 5); the sum
above is the empty sum, so $\langle x,y\rangle = 0$ and $\lVert x\rVert_2 = 0$.
**This is the first place on this page where the two index regimes diverge, and
the divergence is deliberate.** The published metrics $d_1$, $d_2$, $d_\infty$ of
$\mathbb{R}^n$ as the set of functions $n \to \mathbb{R}$, and $d_1$, $d_2$, $d_\infty$ are metrics on it are defined only for $n \ge 1$, because $d_\infty$ would
otherwise be a maximum over the empty index set; the algebra above needs no such
restriction. The boundary in this page runs between the algebra and the metric,
not where a reader would guess, and Conventions of this page, the standing $n \ge 1$ hypothesis, and what is taken up elsewhere in the reading order lists
exactly which items inherit $n \ge 1$.

### The algebra of the inner product

For all $x, y, z \in \mathbb{R}^{n}$ and $\lambda \in \mathbb{R}$:

1. **Symmetry.** $\langle x,y\rangle = \langle y,x\rangle$, since $x_ky_k = y_kx_k$
   termwise.
2. **Additivity in the first argument.**
   $\langle x + y, z\rangle = \langle x,z\rangle + \langle y,z\rangle$: the list
   $k \mapsto (x_k+y_k)z_k$ is the termwise sum of $k \mapsto x_kz_k$ and
   $k \mapsto y_kz_k$, so Laws of finite sums and finite products clause 1 applies.
3. **Homogeneity in the first argument.**
   $\langle \lambda x, y\rangle = \lambda\langle x,y\rangle$, by
   Laws of finite sums and finite products clause 2.
4. **Bilinearity.** Clauses 2 and 3 together with symmetry give the same two laws
   in the second argument.
5. **Positive definiteness.** $\langle x,x\rangle \ge 0$, and
   $\langle x,x\rangle = 0$ if and only if $x = 0$. Indeed a vanishing sum of
   nonnegative terms has every term $0$ (Laws of finite sums and finite products clause 4), so
   $x_k^{2} = 0$ for every $k < n$, and a nonzero real has a positive square
   (Squares of nonzero elements are positive), whence $x_k = 0$ for every $k < n$ and $x = 0$.
6. **Agreement with the published Euclidean metric.** For $n \ge 1$ and
   $x, y \in \mathbb{R}^{n}$,
   $\lVert x - y\rVert_2 = \sqrt{\sum_{k<n}(x_k-y_k)^{2}} = d_2(x,y)$, the two
   sides being the same expression ($\mathbb{R}^n$ as the set of functions $n \to \mathbb{R}$, and $d_1$, $d_2$, $d_\infty$ are metrics on it). In particular
   $\lVert x\rVert_2 = d_2(x, 0)$.

That $\lVert\cdot\rVert_2$ is a norm in the sense of A norm on a real vector space, the induced metric, and the dictionary with the metric axioms
is proved in Cauchy-Schwarz $\lvert\langle x,y\rangle\rvert \le \lVert x\rVert_2\lVert y\rVert_2$ with its equality case, the triangle inequality for $\lVert\cdot\rVert_2$, the parallelogram law and polarisation, where the triangle
inequality is obtained from the Cauchy-Schwarz inequality; it is not assumed
here.

## Definition references

[[def-natural-numbers]]

[[lem-nat-order-is-membership]]

[[def-function-space]]

[[def-vector-space]]

[[lem-metrics-on-rn]]

[[def-finite-sum]]

[[lem-finite-sum-laws]]

[[lem-of-square-positive]]

[[def-integer-power]]

[[thm-of-square-roots]]

[[lem-standard-basis-of-f-n]]

[[rem-rn-conventions-and-scope]]

[[def-norm-and-normed-space]]

[[thm-cauchy-schwarz-and-the-euclidean-norm]]

## Remarks

- **Scope: the concrete form only.** What is defined above is the Euclidean inner
  product on $\mathbb{R}^{n}$ and nothing more. The general theory of inner
  product spaces — abstract inner products, orthonormal bases, Gram-Schmidt,
  orthogonal projection and orthogonal complements of arbitrary subspaces — is
  developed elsewhere in this library. No item on this page claims anything about abstract inner
  product spaces, and no item on this page introduces the general notion.

- **The standard basis and coordinates.** For $i < n$ the standard unit vector
  $e_i \in \mathbb{R}^{n}$ has $e_i(i) = 1$ and $e_i(j) = 0$ for $j \ne i$
  ([[lem-standard-basis-of-f-n]]). Then $\langle x, e_i\rangle = x_i$: the list
  $k \mapsto x_k (e_i)_k$ vanishes except at $k = i$, where its value is $x_i$,
  and a list vanishing off one index sums to its value there
  ([[lem-finite-sum-laws]] clause 3, splitting the range at $i$). So the
  coordinates of $x$ are recovered by testing against the standard basis, which
  is the form used repeatedly below.

- **Powers here are integer powers.** $x_k^{2}$ means the integer power of
  [[def-integer-power]], and $\lVert x\rVert_2^{2} = \langle x,x\rangle$ by
  [[thm-of-square-roots]] and [[lem-power-laws]].
