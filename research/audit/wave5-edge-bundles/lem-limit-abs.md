# Citation-precision audit — everything that cites `lem-limit-abs`

## The target, as it actually stands on disk

`items/lem-limit-abs.md` — lemma — The absolute value is compatible with limits

#### Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]). Then $(|x_k|)$ converges to $|x|$.

In the single case $x = 0$ the implication reverses: $|x_k| \to 0$ if and only if
$x_k \to 0$. Whether the implication can be reversed for $x \ne 0$ is taken up in
the remarks below; it is no part of what the proof establishes.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-two-subsequential-limits` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

- [L6] Algebra of limits ([[thm-algebra-of-limits]]); subsequences inherit the limit ([[lem-subsequence-inherits-limit]]); the absolute value is compatible with limits ([[lem-limit-abs]]); limits are unique ([[lem-limit-unique]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L14] Limits: a sequence and each of its tails converge to the same limit ([[lem-limit-of-tail]]); the algebra of limits ([[thm-algebra-of-limits]]); compatibility of the absolute value with limits ([[lem-limit-abs]]); and preservation of non-strict inequalities in the limit ([[lem-limit-preserves-order]]).
