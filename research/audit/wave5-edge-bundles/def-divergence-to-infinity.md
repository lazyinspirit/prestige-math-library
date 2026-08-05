# Citation-precision audit — everything that cites `def-divergence-to-infinity`

## The target, as it actually stands on disk

`items/def-divergence-to-infinity.md` — definition — Divergence to $+\\infty$ and to $-\\infty$

#### Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]].

- $(x_k)$ **diverges to $+\infty$**, written $x_k \to +\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k > M$ for all
  $k \ge K$.
- $(x_k)$ **diverges to $-\infty$**, written $x_k \to -\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k < M$ for all
  $k \ge K$.

Equivalently, in the language of [[def-sequence]]: $x_k \to +\infty$ when the
property $x_k > M$ holds eventually, for every real $M$.

## The 4 citing use(s), quoted verbatim from the citing items

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- ([[def-divergence-to-infinity]]).
- [L8] Divergence to $+\infty$: for every real $M$ there is $K$ with $x_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- ([[def-divergence-to-infinity]]). Since a contractive sequence converges
- [L7] Divergence to $+\infty$ ([[def-divergence-to-infinity]]); a convergent sequence is bounded ([[lem-convergent-implies-bounded]]); convergence ([[def-real-limit]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- ([[def-divergence-to-infinity]]).
- [L11] Convergence to $0$ and divergence to $+\infty$ for a sequence of reals; a rational test value $\varepsilon > 0$ is in particular a real one ([[def-real-limit]], [[def-divergence-to-infinity]], [[def-sequence]]).

### `lem-monotone-unbounded-diverges` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence that is not bounded above diverges to $+\\infty$

- ([[def-divergence-to-infinity]]): for every $M \in \mathbb{R}$ there is
- [L4] Divergence to $+\infty$: $x_k \to +\infty$ when for every $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).
- - **$+\infty$ is not a limit.** [[def-divergence-to-infinity]] is deliberately
