# Citation-precision audit — everything that cites `cex-strictly-decreasing-gaps-no-limit`

## The target, as it actually stands on disk

`items/cex-strictly-decreasing-gaps-no-limit.md` — counterexample — $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

#### Statement refuted

**Refuted claim:** a sequence whose consecutive gaps are strictly decreasing,

$$|x_{k+2} - x_{k+1}| < |x_{k+1} - x_k| \quad \text{for every } k,$$

is contractive, or at least converges ([[def-contractive-sequence]],
[[thm-contractive-implies-cauchy]]).

The witness is $x_1 = 1$, $x_{k+1} = x_k + 1/x_k$. Its gaps are
$x_{k+1} - x_k = 1/x_k$, strictly decreasing because $(x_k)$ is strictly
increasing; and the sequence **diverges to $+\infty$**
([[def-divergence-to-infinity]]). Since a contractive sequence converges
([[thm-contractive-implies-cauchy]]), no contraction constant $c < 1$ can exist
for it: the ratios of consecutive gaps are all below $1$ but have no bound below
$1$ that works at every index.

**Indexing.** Written on $\mathbb{N}$ the sequence is $(g_j)$ with $g_0 = 1$ and
$g_{j+1} = g_j + 1/g_j$, and $x_k := g_{k-1}$ for $k \ge 1$ ([[def-sequence]]).

## The 3 citing use(s), quoted verbatim from the citing items

### `def-contractive-sequence` (forward, page monotone-sequences-and-cauchy-completeness)

Title: Contractive sequence: $|x_{k+2} - x_{k+1}| \\le c\\,|x_{k+1} - x_k|$ for a fixed $0 < c < 1$

- [[cex-strictly-decreasing-gaps-no-limit]]: its consecutive gaps strictly

### `fs-consecutive-differences-null-implies-cauchy` (forward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [[cex-strictly-decreasing-gaps-no-limit]].

### `thm-contractive-implies-cauchy` (forward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- fails outright ([[cex-strictly-decreasing-gaps-no-limit]]).
