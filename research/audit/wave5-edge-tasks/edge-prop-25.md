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

# Citation-precision audit — everything that cites `thm-reals-cauchy-complete`

## The target, as it actually stands on disk

`items/thm-reals-cauchy-complete.md` — theorem — The reals are complete

#### Statement

Every Cauchy sequence of real numbers ([[def-real-limit]]) converges to a real
number. Together with [[thm-reals-ordered-field]], this completes the
construction: $\mathbb{R}$ is a complete totally ordered field.

## The 1 citing use(s), quoted verbatim from the citing items

### `rem-completeness-routes` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Two independent proofs that $\\mathbb{R}$ is Cauchy complete, and why the library records both

- **Route 1: from the construction.** [[thm-reals-cauchy-complete]] lives on the


---

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


---

# Citation-precision audit — everything that cites `lem-of-square-positive`

## The target, as it actually stands on disk

`items/lem-of-square-positive.md` — lemma — Squares of nonzero elements are positive

#### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$. For
every $a \in F$ with $a \neq 0$ we have $a^2 > 0$, where $a^2 = a \cdot a$. In
particular, every nonzero square is positive.

## The 1 citing use(s), quoted verbatim from the citing items

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L4] A nonzero square is positive: $t \ne 0$ gives $t^2 > 0$ ([[lem-of-square-positive]]).


---

# Citation-precision audit — everything that cites `lem-of-no-zero-divisors`

## The target, as it actually stands on disk

`items/lem-of-no-zero-divisors.md` — lemma — A field has no zero divisors: $ab = 0 \\Rightarrow a = 0$ or $b = 0$

#### Statement

In any field $F$ ([[def-field]]), if $a, b \in F$ satisfy $ab = 0$, then $a = 0$ or $b = 0$.

## The 1 citing use(s), quoted verbatim from the citing items

### `ex-recursive-sqrt-two-plus-x` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$

- [L5] A field has no zero divisors: $uv = 0$ forces $u = 0$ or $v = 0$ ([[lem-of-no-zero-divisors]]).
