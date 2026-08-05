# Citation-precision audit — everything that cites `prop-of-reciprocal-order`

## The target, as it actually stands on disk

`items/prop-of-reciprocal-order.md` — proposition — Reciprocals and order: $1/r$ against $1$

#### Statement

Let $F$ be an ordered field and let $r \in F$ with $r > 0$. Then:

$$0 < r < 1 \iff \tfrac{1}{r} > 1, \qquad r > 1 \iff 0 < \tfrac{1}{r} < 1, \qquad r = 1 \iff \tfrac{1}{r} = 1.$$

Here $\tfrac{1}{r}$ denotes the multiplicative inverse $r^{-1}$.

## The 3 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L5] Order: $10 > 1 > 0$, so $0 < 1/10 < 1$ ([[prop-of-reciprocal-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]); and $|t| = t$ for $t \ge 0$ ([[lem-of-abs-value]]).

### `ex-contractive-sequence-fixed-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

- [L2] Order and arithmetic: $1 > 0$, so $3 = 1+1+1 > 1 > 0$; a positive has a positive inverse; and $0 < r < 1$ exactly when $1/r > 1$, so $0 < 1/3 < 1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[prop-of-reciprocal-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- [L6] Reciprocals: $a > 0$ gives $a^{-1} > 0$; $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); and $0 < t < 1$ exactly when $1/t > 1$ ([[prop-of-reciprocal-order]]).
