# Citation-precision audit — everything that cites `lem-of-triangle-inequality`

## The target, as it actually stands on disk

`items/lem-of-triangle-inequality.md` — lemma — The triangle inequality

#### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$. Then

$$|x + y| \le |x| + |y|.$$

## The 4 citing use(s), quoted verbatim from the citing items

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- ([[lem-of-triangle-inequality]], [[def-abs-value]]) applied after inserting and

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L2] $|uv| = |u||v|$, $|u+v| \le |u|+|v|$, and $|u| \ge 0$ ([[lem-of-abs-value]], [[lem-of-triangle-inequality]], [[def-abs-value]]).

### `lem-cauchy-sequence-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every Cauchy sequence of reals is bounded

- [L1] Triangle inequality: $|x| = |(x - y) + y| \le |x - y| + |y|$ for all reals $x, y$ ([[lem-of-triangle-inequality]]).

### `lem-cauchy-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A Cauchy sequence with a convergent subsequence converges, to that subsequence’s limit

- [L1] Triangle inequality: $|x - L| = |(x - y) + (y - L)| \le |x - y| + |y - L|$ ([[lem-of-triangle-inequality]]).
