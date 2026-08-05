# Citation-precision audit — everything that cites `lem-power-monotone`

## The target, as it actually stands on disk

`items/lem-power-monotone.md` — lemma — Monotonicity of $x \\mapsto x^n$ and of $n \\mapsto a^n$

#### Statement

Let $\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let
$a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$, with powers as in
[[def-integer-power]].

1. **Signs.** If $a \ge 0$ then $a^n \ge 0$, and if $a > 0$ then $a^n > 0$.
2. **Strict monotonicity in the base.** If $0 \le a < b$ and $n \ge 1$ then $a^n < b^n$. Consequently, for $a, b \ge 0$ and $n \ge 1$: $a < b \iff a^n < b^n$ and $a \le b \iff a^n \le b^n$, and $x \mapsto x^n$ is injective on $\{x \in \mathbb{R} : x \ge 0\}$.
3. **Comparison with the base.** If $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; if $a > 1$ and $n \ge 1$ then $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1$.
4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.

## The 8 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L4] Powers and order: for $a, b \ge 0$, $a \le b$ exactly when $a^2 \le b^2$, and $a < b$ exactly when $a^2 < b^2$ ([[lem-power-monotone]]); and $(1/t)^n = 1/t^n = t^{-n}$ for $t \ne 0$ ([[lem-power-laws]]).

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- [L3] Powers and order: for $a, b \ge 0$ and $n \ge 1$, $a < b$ exactly when $a^n < b^n$ ([[lem-power-monotone]]).

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- [L3] Powers: $(u + v)^2 = u^2 + 2uv + v^2$ and $u \cdot (1/u) = 1$, so $(u + 1/u)^2 = u^2 + 2 + 1/u^2$; and for $a, b \ge 0$, $a < b$ exactly when $a^2 < b^2$ ([[def-integer-power]], [[lem-power-monotone]]).

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L3] Powers and order: for $a, b \ge 0$, $a < b$ exactly when $a^2 < b^2$ ([[lem-power-monotone]]).

### `ex-recursive-sqrt-two-plus-x` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$

- [L3] Powers and order: for $a, b \ge 0$, $a < b$ exactly when $a^2 < b^2$, and $a \le b$ exactly when $a^2 \le b^2$ ([[lem-power-monotone]]).

### `fs-consecutive-differences-null-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [L2] Powers and order: for $a, b \ge 0$ and $n \ge 1$, $a < b$ exactly when $a^n < b^n$, and $a \le b$ exactly when $a^n \le b^n$; and $a \ge 0$ gives $a^n \ge 0$ ([[lem-power-monotone]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- [L5] Powers and order: $a \ge 0$ gives $a^n \ge 0$ and $a > 0$ gives $a^n > 0$; $1^n = 1$ for every $n$ ([[lem-power-monotone]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L4] Powers and order: $a \ge 0$ gives $a^n \ge 0$; $1^n = 1$ for every $n$ ([[lem-power-monotone]]).
- [L10] Factorisation: $1 - c^{\,n} = (1 - c)\sum_{i<n} c^{\,i}$, the case $b = 1$, $a = c$ of $b^n - a^n = (b-a)\sum_{i=0}^{n-1} a^i b^{\,n-1-i}$ together with $1^m = 1$; at $n = 0$ both sides are $0$ ([[lem-power-difference-factorisation]], [[lem-power-monotone]]).
