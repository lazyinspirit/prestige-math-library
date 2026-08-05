# Citation-precision audit — everything that cites `cex-cauchy-rationals-no-rational-limit`

## The target, as it actually stands on disk

`items/cex-cauchy-rationals-no-rational-limit.md` — counterexample — The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

#### Statement refuted

**Refuted claim:** every Cauchy sequence of rationals converges to a rational;
equivalently, $\mathbb{Q}$ is complete ([[fs-rationals-complete]],
[[def-rationals]]).

The witness is the sequence of **truncated decimal approximations of $\sqrt 2$**,
$s_0 = 1$, $s_1 = 1.4$, $s_2 = 1.41$, $s_3 = 1.414$, and so on: $s_n = k_n/10^n$
where $k_n$ is the largest natural number with $k_n^2 \le 2 \cdot 10^{2n}$. That
this sequence is Cauchy in $\mathbb{Q}$ and has no rational limit is proved in
full in [[fs-rationals-complete]] and is not repeated here.

What this item adds is the view from $\mathbb{R}$, which is what makes the
witness informative rather than merely negative: **the same sequence converges in
$\mathbb{R}$, and its limit is $\sqrt 2$.** So the defect is not in the sequence
but in $\mathbb{Q}$, and the contrast is exactly
[[thm-cauchy-criterion-via-lub]], which says that a Cauchy sequence of reals
never behaves this way.

## The 1 citing use(s), quoted verbatim from the citing items

### `lem-geometric-sequence-null` (forward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- $\sqrt 2$ ([[cex-cauchy-rationals-no-rational-limit]]).
