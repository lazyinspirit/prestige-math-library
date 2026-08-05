# Citation-precision audit — everything that cites `def-real-limit`

## The target, as it actually stands on disk

`items/def-real-limit.md` — definition — Limits and Cauchy sequences of reals

#### Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## The 20 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L7] Squeeze theorem ([[thm-squeeze]]) and the algebra of limits ([[thm-algebra-of-limits]]); a constant sequence converges to its value ([[def-sequence]], [[def-real-limit]]).

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- [[def-real-limit]]).

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- [L7] Divergence to $+\infty$ ([[def-divergence-to-infinity]]); a convergent sequence is bounded ([[lem-convergent-implies-bounded]]); convergence ([[def-real-limit]]).

### `cex-unbounded-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $1, 1, 2, 1, 3, 1, 4, \\dots$ is unbounded and has a convergent subsequence

- [L4] Boundedness of a sequence and of a subset of $\mathbb{R}$ ([[def-sequence]], [[def-bounded-set]]); a constant sequence converges to its value ([[def-real-limit]]); and every convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

### `def-subsequential-limit` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Subsequential limit of a real sequence, and the subsequential limit set

- in the sense of [[def-real-limit]]. The **subsequential limit set** of $(x_k)$ is
- *converges* is [[def-real-limit]]. Nothing about $(x_k)$ itself is assumed; in

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L7] Monotone convergence: a nonincreasing sequence whose range is bounded below converges, to the infimum of its range ([[thm-monotone-convergence]], [[def-real-limit]]).

### `ex-contractive-sequence-fixed-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

- [L6] Every contractive sequence is Cauchy and converges, with the stated error bound for $k \ge 1$ ([[thm-contractive-implies-cauchy]], [[def-real-limit]]).

### `ex-nested-intervals-single-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested intervals $[0, 1/k]$ intersect in exactly $\\{0\\}$

- [L7] Convergence of a sequence of reals to $0$; it suffices to test a real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

### `ex-recursive-sqrt-two-plus-x` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$

- [L7] Monotone convergence: a nondecreasing sequence whose range is bounded above converges, to the supremum of its range ([[thm-monotone-convergence]], [[def-real-limit]]).

### `ex-two-subsequential-limits` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

- [L7] Convergence and boundedness of a sequence of reals; it suffices to test a real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

### `fs-consecutive-differences-null-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [[def-real-limit]]), then $(x_k)$ is Cauchy.
- [L9] Convergence to $0$, boundedness, and the Cauchy condition; it suffices to test a real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

### `fs-convergent-subsequence-implies-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a sequence with a convergent subsequence is bounded (the converse of Bolzano-Weierstrass)

- [L5] A constant sequence converges to its value, and a sequence is bounded when some real $M$ satisfies $|y_n| \le M$ at every index ([[def-sequence]], [[def-real-limit]]).

### `lem-cauchy-sequence-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every Cauchy sequence of reals is bounded

- ([[def-real-limit]]) then there is $M \in \mathbb{R}$ with $|x_k| \le M$ for every
- [A1] Cauchy condition: for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$ ([[def-real-limit]]).

### `lem-cauchy-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A Cauchy sequence with a convergent subsequence converges, to that subsequence’s limit

- Let $(x_k)$ be a Cauchy sequence of reals ([[def-real-limit]]) and suppose some
- [A1] Cauchy condition: for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$ ([[def-real-limit]]).
- [A2] Convergence of the subsequence: for every rational $\varepsilon > 0$ there is $J$ with $|x_{n_j} - L| < \varepsilon$ for all $j \ge J$ ([[def-real-limit]], [[def-subsequential-limit]], [[def-sequence]]).
- [L5] Convergence: $(x_k)$ converges to $L$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - L| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- ([[def-real-limit]]).
- [L11] Convergence to $0$ and divergence to $+\infty$ for a sequence of reals; a rational test value $\varepsilon > 0$ is in particular a real one ([[def-real-limit]], [[def-divergence-to-infinity]], [[def-sequence]]).

### `thm-cauchy-criterion-via-lub` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The Cauchy criterion from the least-upper-bound property: in a complete ordered field every Cauchy sequence converges

- Every Cauchy sequence of reals converges to a real ([[def-real-limit]]).
- [L4] Convergence of a sequence of reals to a real ([[def-real-limit]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- 2. **Convergence.** $(x_k)$ is Cauchy ([[def-real-limit]]) and therefore
- [L12] Cauchy condition and convergence; it suffices to test a real $\varepsilon > 0$, since every positive rational is a positive real ([[def-real-limit]], [[def-sequence]]).

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- $x \in X$ ([[def-real-limit]]) with the limit function $f : X \to \mathbb{R}$

### `thm-monotone-convergence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum

- above ([[def-bounded-set]]), then $(x_k)$ converges ([[def-real-limit]]) and
- [L6] Convergence, tested against a real $\varepsilon$: $(x_k)$ converges to $x$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and producing such a $K$ for every *real* $\varepsilon > 0$ establishes this, since every positive rational is a positive real ([[def-real-limit]], [[def-sequence]]).

### `thm-nested-interval-property` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- if $\ell_k \to 0$ ([[def-real-limit]]).
