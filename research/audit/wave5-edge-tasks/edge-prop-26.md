# Citation-precision audit — do these citing items state their target correctly?

You are reading a **published legacy corpus** of this library. Below are one or
more TARGET items, each quoted as it actually stands on disk, followed by every
place in this audit wave that cites it.

**The one question for every citing line:** does the citing text state the
target's own proposition — same domain, same quantifiers, same hypotheses, same
direction, same strength — or does it state something the target does not
actually give? A fact that quietly drops a hypothesis, flips an implication,
promotes an implication to a biconditional, or widens a domain is a **FATAL**
defect of the incorrect-dependency-citation class. It is this library's single
most common confirmed defect, and it is only visible by reading the two texts
against each other, which is what this file lets you do.

Do NOT report: a concise but faithful shortening (that is the required house
style); a paraphrase that preserves content; wording you would have chosen
differently; missing URLs; prose style. A citing line reading as a shortened
but faithful version of the target is CORRECT and must not be flagged.

Where a citing line says a dependency is declared but never cited in the body,
say whether that looks like a stale declaration or a use that lost its citation
— that one is NONFATAL either way.

For every finding use the block format from the brief, and finish with the
`N fatal, M nonfatal` line. If every citation is faithful, say so plainly and
name the targets you checked.

---

# Citation-precision audit — everything that cites `lem-subsequence-inherits-limit`

## The target, as it actually stands on disk

`items/lem-subsequence-inherits-limit.md` — lemma — Subsequences inherit the limit

#### Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]), and let $n : \mathbb{N} \to \mathbb{N}$
be strictly increasing. Then the subsequence $(x_{n_k})$ converges to $x$.

**Divergence test.** Consequently, if two subsequences of $(x_k)$ converge to
different limits, then $(x_k)$ does not converge.

## The 1 citing use(s), quoted verbatim from the citing items

### `ex-two-subsequential-limits` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

- [L6] Algebra of limits ([[thm-algebra-of-limits]]); subsequences inherit the limit ([[lem-subsequence-inherits-limit]]); the absolute value is compatible with limits ([[lem-limit-abs]]); limits are unique ([[lem-limit-unique]]).


---

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


---

# Citation-precision audit — everything that cites `fs-sqrt2-rational`

## The target, as it actually stands on disk

`items/fs-sqrt2-rational.md` — false-statement — FALSE: some rational number squares to 2

#### Statement

**False claim:** there exists $x \in \mathbb{Q}$ with $x^2 = 2$.

## The 1 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L9] No rational squares to $2$ ([[fs-sqrt2-rational]]).


---

# Citation-precision audit — everything that cites `lem-convergent-implies-cauchy`

## The target, as it actually stands on disk

`items/lem-convergent-implies-cauchy.md` — lemma — Every convergent sequence is Cauchy

#### Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]). Then $(x_k)$ is Cauchy
([[def-real-limit]]).

## The 1 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L8] Every convergent sequence of reals is Cauchy ([[lem-convergent-implies-cauchy]]); every Cauchy sequence of reals converges ([[thm-cauchy-criterion-via-lub]]); limits are unique ([[lem-limit-unique]]).
