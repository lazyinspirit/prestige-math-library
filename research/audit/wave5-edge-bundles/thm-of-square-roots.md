# Citation-precision audit — everything that cites `thm-of-square-roots`

## The target, as it actually stands on disk

`items/thm-of-square-roots.md` — theorem — Square roots exist: a unique $\\sqrt{a} \\ge 0$ with $(\\sqrt{a})^2 = a$; the positives are $\\{x^2 : x \\neq 0\\}$

#### Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every
$a \in F$ with $a \ge 0$ has a **unique** $s \in F$ with $s \ge 0$ and $s^2 = a$;
we write $s = \sqrt{a}$. Consequently the positive elements of $F$ are exactly the
nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \neq 0$.

## The 5 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- **Given:** For $n \in \mathbb{N}$ the rational $s_n = k_n/10^n$, where $k_n$ is the largest natural with $k_n^2 \le 2 \cdot 10^{2n}$, together with the properties established for it in [[fs-rationals-complete]]; and the real $\sqrt 2$ ([[thm-of-square-roots]]). Rationals are identified with their images in $\mathbb{R}$ under the embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), so $(s_n)$ is also a sequence of reals ([[def-sequence]]).
- [L3] Square roots: $\sqrt 2 \ge 0$ is the unique nonnegative real with $(\sqrt 2)^2 = 2$ ([[thm-of-square-roots]], [[def-integer-power]]).

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- **Given:** The sequence $(x_k)$ of reals with $x_k := \sqrt k$, where $k$ denotes the canonical natural $k \cdot 1_{\mathbb{R}}$ ([[def-sequence]], [[thm-of-square-roots]]).
- [L2] Square roots, and the factorisation $b^2 - a^2 = (b-a)(b+a)$ ([[thm-of-square-roots]], [[lem-power-difference-factorisation]], [[def-integer-power]]).

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L2] Square roots: every $a \ge 0$ has a unique $s \ge 0$ with $s^2 = a$; in particular $(\sqrt 2)^2 = 2$ ([[thm-of-square-roots]], [[def-integer-power]]).

### `ex-recursive-sqrt-two-plus-x` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$

- [L2] Square roots: every $a \ge 0$ has a unique $s \ge 0$ with $s^2 = a$ ([[thm-of-square-roots]], [[def-integer-power]]).

### `fs-consecutive-differences-null-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [L1] Square roots: every $a \ge 0$ has a unique $s \ge 0$ with $s^2 = a$, written $\sqrt a$ ([[thm-of-square-roots]], [[def-integer-power]]).
