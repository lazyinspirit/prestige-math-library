# Citation-precision audit — everything that cites `def-field`

## The target, as it actually stands on disk

`items/def-field.md` — definition — Field

#### Definition

A **field** is a set $F$ equipped with two binary operations $+$ (addition) and
$\cdot$ (multiplication) and two distinguished elements $0 \ne 1$ of $F$,
satisfying:

- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is
  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an
  additive inverse $-x$ with $x + (-x) = 0$.
- **(M)** Multiplication is associative and commutative **on all of $F$**, and
  $x \cdot 1 = x$ for every $x \in F$; moreover $(F \setminus \{0\}, \cdot)$ is an
  abelian group with identity $1$, so every $x \ne 0$ has a multiplicative inverse
  $x^{-1}$ with $x \cdot x^{-1} = 1$.
- **(D)** Multiplication distributes over addition: $x \cdot (y + z) = x\cdot y + x\cdot z$.

We write $x - y := x + (-y)$ and $x/y := x \cdot y^{-1}$ (for $y \ne 0$), and
abbreviate $x \cdot y$ as $xy$.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-contractive-sequence-fixed-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

- [L3] Field arithmetic: $(u+1)/3 - (v+1)/3 = (u - v)/3$, and $3L = L + 1$ is equivalent to $2L = 1$ ([[def-field]]).

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L5] Absolute value and field arithmetic: $|-u| = |u|$ ([[lem-of-abs-value]]); $|v| = v$ whenever $v \ge 0$ ([[def-abs-value]], [[def-real-order]]); and $-(-u) = u$ ([[def-field]]).
