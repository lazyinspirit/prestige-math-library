# Citation-precision audit — everything that cites `fs-rationals-complete`

## The target, as it actually stands on disk

`items/fs-rationals-complete.md` — false-statement — FALSE: the rationals are complete

#### Statement

**False claim:** every Cauchy sequence of rationals converges to a rational
(where $(a_n) \to q$ means $(a_n - q)$ is null).

This is precisely the defect the construction of $\mathbb{R}$ repairs.

## The 1 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- equivalently, $\mathbb{Q}$ is complete ([[fs-rationals-complete]],
- full in [[fs-rationals-complete]] and is not repeated here.
- **Given:** For $n \in \mathbb{N}$ the rational $s_n = k_n/10^n$, where $k_n$ is the largest natural with $k_n^2 \le 2 \cdot 10^{2n}$, together with the properties established for it in [[fs-rationals-complete]]; and the real $\sqrt 2$ ([[thm-of-square-roots]]). Rationals are identified with their images in $\mathbb{R}$ under the embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), so $(s_n)$ is also a sequence of reals ([[def-sequence]]).
- [L1] The construction and its properties: $s_n \ge 0$, $s_n^2 \le 2 < (s_n + 10^{-n})^2$, and $(s_n)$ is a Cauchy sequence of rationals with no rational limit ([[fs-rationals-complete]]).
- - **Note which completeness is which.** [[fs-rationals-complete]] refutes Cauchy
