# Citation-precision audit — everything that cites `lem-of-inverse-positive`

## The target, as it actually stands on disk

`items/lem-of-inverse-positive.md` — lemma — Inverses of positives are positive, and reciprocation reverses order

#### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

## The 18 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L5] Order: $10 > 1 > 0$, so $0 < 1/10 < 1$ ([[prop-of-reciprocal-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]); and $|t| = t$ for $t \ge 0$ ([[lem-of-abs-value]]).

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `cex-nested-open-intervals-empty` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested open intervals $(0, 1/k)$ have empty intersection

- [L2] Canonical naturals are positive and strictly increasing in the index ([[lem-of-naturals-positive]]); reciprocals of positives are positive and reciprocation reverses the order ([[lem-of-inverse-positive]]).

### `cex-pointwise-bounded-but-not-equicontinuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: a pointwise bounded family of continuous functions is equicontinuous. The spikes are bounded by $1$ everywhere and are not equicontinuous at $0$

- [L4] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \eta$; $\iota$ is strictly increasing with $\iota(n) > 0$ for $n \ge 1$; and $0 < u \le v$ gives $0 < 1/v \le 1/u$ ([[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[def-canonical-natural]]).

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- [L4] Canonical naturals: positive for $n \ge 1$, and strictly increasing in the index ([[lem-of-naturals-positive]]); reciprocals of positives are positive and reciprocation reverses the order ([[lem-of-inverse-positive]]).

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- [L2] Order and arithmetic: $1 > 0$, so $2 = 1 + 1 > 0$; sums of positives are positive; adding a constant preserves the order; a positive has a positive inverse, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]).
- ([[lem-of-inverse-positive]]). So this sequence is also a witness for

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$; hence $0 < a_k \le 1/\iota(2) = 1/2$ and $1/2 \le 1 - a_k < 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L5] Order and arithmetic: $1 > 0$, hence $2 = 1 + 1 > 0$ and $2 > 1$; sums of positives are positive; adding a constant preserves the order; a positive has a positive inverse, and a quotient of positives is positive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `ex-contractive-sequence-fixed-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

- [L2] Order and arithmetic: $1 > 0$, so $3 = 1+1+1 > 1 > 0$; a positive has a positive inverse; and $0 < r < 1$ exactly when $1/r > 1$, so $0 < 1/3 < 1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[prop-of-reciprocal-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `ex-dini-on-the-unit-interval` (published-backward, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$; hence $0 < a_{k+1} \le a_k \le 1/2$ and $1/2 \le 1 - a_k \le 1 - a_{k+1} < 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `ex-nested-intervals-single-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested intervals $[0, 1/k]$ intersect in exactly $\\{0\\}$

- [L4] Reciprocals: $a > 0$ gives $1/a > 0$, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

### `ex-two-subsequential-limits` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

- [L3] Reciprocals: $a > 0$ gives $1/a > 0$, and $0 < a \le b$ gives $0 < 1/b \le 1/a$ ([[lem-of-inverse-positive]]).

### `fs-consecutive-differences-null-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [L5] Reciprocals: $a > 0$ gives $1/a > 0$, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

### `fs-nested-open-intervals-nonempty` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a nested sequence of nonempty bounded open intervals has nonempty intersection

- [L3] Reciprocals: if $a > 0$ then $1/a > 0$, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (published-backward, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ and $\iota(n) > 0$ for $n \ge 1$, so $0 < a_k \le 1/\iota(2) = 1/2$ and $0 < 2a_k \le 1$ for every $k \in \mathbb{N}$, and $m \le n$ gives $a_n \le a_m$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- [L6] Reciprocals: $a > 0$ gives $a^{-1} > 0$; $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); and $0 < t < 1$ exactly when $1/t > 1$ ([[prop-of-reciprocal-order]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (published-backward, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- [L4] For $n \ge 1$ the canonical natural $\iota(n)$ is positive and $n \mapsto \iota(n)$ is strictly increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]); and $0 < u < v$ implies $0 < 1/v < 1/u$ ([[lem-of-inverse-positive]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L7] Reciprocals of positives are positive ([[lem-of-inverse-positive]]).
