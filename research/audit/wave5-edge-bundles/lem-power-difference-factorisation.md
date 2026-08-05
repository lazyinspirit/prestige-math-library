# Citation-precision audit — everything that cites `lem-power-difference-factorisation`

## The target, as it actually stands on disk

`items/lem-power-difference-factorisation.md` — lemma — Factorisation of $b^n - a^n$, and the resulting Lipschitz estimate

#### Statement

Let $a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$ with $n \ge 1$, with powers
as in [[def-integer-power]] and finite sums as in [[def-finite-sum]]. Then

$$b^n - a^n = (b - a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}.$$

**Lipschitz estimate.** If $0 \le a \le b \le M$ then

$$0 \le b^n - a^n \le n M^{\,n-1} (b - a),$$

where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$
([[lem-of-naturals-positive]], [[lem-of-q-embeds]]). This estimate is the form in
which the factorisation is used, later on this page, to prove that $n$-th roots
exist.

## The 3 citing use(s), quoted verbatim from the citing items

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- [L2] Square roots, and the factorisation $b^2 - a^2 = (b-a)(b+a)$ ([[thm-of-square-roots]], [[lem-power-difference-factorisation]], [[def-integer-power]]).

### `fs-consecutive-differences-null-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [L3] Factorisation at $n = 2$: $b^2 - a^2 = (b-a)(b+a)$ ([[lem-power-difference-factorisation]]); and $(uv)^n = u^n v^n$, so $(1/t)^2 = 1/t^2$ for $t \ne 0$ ([[lem-power-laws]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L10] Factorisation: $1 - c^{\,n} = (1 - c)\sum_{i<n} c^{\,i}$, the case $b = 1$, $a = c$ of $b^n - a^n = (b-a)\sum_{i=0}^{n-1} a^i b^{\,n-1-i}$ together with $1^m = 1$; at $n = 0$ both sides are $0$ ([[lem-power-difference-factorisation]], [[lem-power-monotone]]).
