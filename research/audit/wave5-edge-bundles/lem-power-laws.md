# Citation-precision audit — everything that cites `lem-power-laws`

## The target, as it actually stands on disk

`items/lem-power-laws.md` — lemma — Laws of integer exponents

#### Statement

Let $a, b$ be elements of a field ([[def-field]]) and let integer powers be as in
[[def-integer-power]].

1. For all $m, n \in \mathbb{N}$: $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$.
2. If $a \ne 0$ then $a^n \ne 0$ for every $n \in \mathbb{N}$, and $a^{-m} = (a^m)^{-1}$ for every $m \in \mathbb{Z}$ ([[def-int-operations]]).
3. If $a \ne 0$ and $b \ne 0$ then all three identities of claim 1 hold for all $m, n \in \mathbb{Z}$.

## The 4 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L4] Powers and order: for $a, b \ge 0$, $a \le b$ exactly when $a^2 \le b^2$, and $a < b$ exactly when $a^2 < b^2$ ([[lem-power-monotone]]); and $(1/t)^n = 1/t^n = t^{-n}$ for $t \ne 0$ ([[lem-power-laws]]).

### `fs-consecutive-differences-null-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [L3] Factorisation at $n = 2$: $b^2 - a^2 = (b-a)(b+a)$ ([[lem-power-difference-factorisation]]); and $(uv)^n = u^n v^n$, so $(1/t)^2 = 1/t^2$ for $t \ne 0$ ([[lem-power-laws]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- [L4] Power laws: $(ab)^n = a^n b^n$, and $a^n \ne 0$ when $a \ne 0$ ([[lem-power-laws]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L3] Integer powers: $a^0 = 1$, $a^{k+1} = a^k a$; and the law $a^{m+n} = a^m a^n$ ([[def-integer-power]], [[lem-power-laws]]).
