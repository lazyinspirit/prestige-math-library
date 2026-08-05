# Citation-precision audit — everything that cites `cex-sqrt-k-differences-null-not-cauchy`

## The target, as it actually stands on disk

`items/cex-sqrt-k-differences-null-not-cauchy.md` — counterexample — $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

#### Statement refuted

**Refuted claim:** a sequence of reals whose consecutive differences tend to $0$
is Cauchy ([[fs-consecutive-differences-null-implies-cauchy]],
[[def-real-limit]]).

The witness is $x_k = \sqrt k$ for $k \in \mathbb{N}$. Its consecutive
differences satisfy

$$x_{k+1} - x_k \;=\; \sqrt{k+1} - \sqrt{k} \;=\; \frac{1}{\sqrt{k+1} + \sqrt{k}} \;\longrightarrow\; 0,$$

while the sequence itself is unbounded, hence not Cauchy
([[lem-cauchy-sequence-bounded]]). The refutation is carried out in full in
[[fs-consecutive-differences-null-implies-cauchy]]; this item records the witness
and adds the sharper statement that $\sqrt k$ diverges to $+\infty$
([[def-divergence-to-infinity]]).

## The 1 citing use(s), quoted verbatim from the citing items

### `fs-consecutive-differences-null-implies-cauchy` (forward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [[cex-sqrt-k-differences-null-not-cauchy]], which adds the sharper statement
