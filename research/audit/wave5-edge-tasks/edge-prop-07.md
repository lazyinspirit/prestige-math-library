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

# Citation-precision audit — everything that cites `thm-induction-principle`

## The target, as it actually stands on disk

`items/thm-induction-principle.md` — theorem — The principle of mathematical induction

#### Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## The 7 citing use(s), quoted verbatim from the citing items

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- [L1] Recursion theorem ([[thm-recursion]]) and induction principle ([[thm-induction-principle]]).

### `def-monotone-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

- on $k$ ([[thm-induction-principle]]) that $x_j \le x_k$ for every $j \le k$. For

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L1] Recursion theorem ([[thm-recursion]]) and the induction principle ([[thm-induction-principle]]).

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L2] Induction principle ([[thm-induction-principle]]).

### `lem-finite-powers-of-countable-sets-are-countable` (published-backward, page the-topology-of-euclidean-space)

Title: Every finite power of an at most countable set is at most countable

- [L3] A finite set is at most countable, and induction holds on $\mathbb N$ ([[def-countable]], [[thm-induction-principle]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- [L2] Induction principle ([[thm-induction-principle]]), and the recursion clauses $a^0 = 1$, $a^{k+1} = a^k a$ defining integer powers ([[def-integer-power]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L2] Induction principle ([[thm-induction-principle]]).


---

# Citation-precision audit — everything that cites `thm-algebra-of-limits`

## The target, as it actually stands on disk

`items/thm-algebra-of-limits.md` — theorem — Algebra of limits: sums, scalar multiples, products and quotients

#### Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]), and let $c \in \mathbb{R}$. Then

$$x_k + y_k \to x + y, \qquad c\,x_k \to c\,x, \qquad x_k - y_k \to x - y, \qquad x_k y_k \to x y,$$

and if in addition $y \ne 0$ and $y_k \ne 0$ for every $k \in \mathbb{N}$, then

$$\frac{1}{y_k} \to \frac{1}{y} \qquad \text{and} \qquad \frac{x_k}{y_k} \to \frac{x}{y}.$$

The quotient case rests on an eventual lower bound for $|y_k|$, proved below
rather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.

## The 7 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L7] Squeeze theorem ([[thm-squeeze]]) and the algebra of limits ([[thm-algebra-of-limits]]); a constant sequence converges to its value ([[def-sequence]], [[def-real-limit]]).

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L8] Algebra of limits, including the quotient case when the denominators and the limit are nonzero ([[thm-algebra-of-limits]]); limits preserve non-strict inequalities ([[lem-limit-preserves-order]]); a sequence and its tails have the same limits ([[lem-limit-of-tail]]); limits are unique ([[lem-limit-unique]]).
- [[thm-algebra-of-limits]] requires it, and it is supplied by step 4.1, not

### `ex-contractive-sequence-fixed-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

- [L7] Algebra of limits ([[thm-algebra-of-limits]]); a sequence and its tails have the same limits ([[lem-limit-of-tail]]); limits are unique ([[lem-limit-unique]]).

### `ex-recursive-sqrt-two-plus-x` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$

- [L8] Algebra of limits ([[thm-algebra-of-limits]]); limits preserve non-strict inequalities ([[lem-limit-preserves-order]]); a sequence and its tails have the same limits ([[lem-limit-of-tail]]); limits are unique ([[lem-limit-unique]]).

### `ex-two-subsequential-limits` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

- [L6] Algebra of limits ([[thm-algebra-of-limits]]); subsequences inherit the limit ([[lem-subsequence-inherits-limit]]); the absolute value is compatible with limits ([[lem-limit-abs]]); limits are unique ([[lem-limit-unique]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L14] Limits: a sequence and each of its tails converge to the same limit ([[lem-limit-of-tail]]); the algebra of limits ([[thm-algebra-of-limits]]); compatibility of the absolute value with limits ([[lem-limit-abs]]); and preservation of non-strict inequalities in the limit ([[lem-limit-preserves-order]]).

### `thm-nested-interval-property` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- [L6] Algebra of limits: if $u_k \to u$ and $v_k \to v$ then $u_k - v_k \to u - v$ ([[thm-algebra-of-limits]]).


---

# Citation-precision audit — everything that cites `lem-limit-unique`

## The target, as it actually stands on disk

`items/lem-limit-unique.md` — lemma — A sequence has at most one limit

#### Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $x, y \in
\mathbb{R}$. If $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$
([[def-real-limit]]), then $x = y$. A sequence therefore has at most one limit,
and when a limit exists it may be denoted $\lim_{k} x_k$.

## The 7 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L8] Every convergent sequence of reals is Cauchy ([[lem-convergent-implies-cauchy]]); every Cauchy sequence of reals converges ([[thm-cauchy-criterion-via-lub]]); limits are unique ([[lem-limit-unique]]).

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L8] Algebra of limits, including the quotient case when the denominators and the limit are nonzero ([[thm-algebra-of-limits]]); limits preserve non-strict inequalities ([[lem-limit-preserves-order]]); a sequence and its tails have the same limits ([[lem-limit-of-tail]]); limits are unique ([[lem-limit-unique]]).

### `ex-contractive-sequence-fixed-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

- [L7] Algebra of limits ([[thm-algebra-of-limits]]); a sequence and its tails have the same limits ([[lem-limit-of-tail]]); limits are unique ([[lem-limit-unique]]).

### `ex-recursive-sqrt-two-plus-x` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$

- [L8] Algebra of limits ([[thm-algebra-of-limits]]); limits preserve non-strict inequalities ([[lem-limit-preserves-order]]); a sequence and its tails have the same limits ([[lem-limit-of-tail]]); limits are unique ([[lem-limit-unique]]).

### `ex-two-subsequential-limits` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

- [L6] Algebra of limits ([[thm-algebra-of-limits]]); subsequences inherit the limit ([[lem-subsequence-inherits-limit]]); the absolute value is compatible with limits ([[lem-limit-abs]]); limits are unique ([[lem-limit-unique]]).

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- [L2] A convergent sequence of reals is bounded, and a nondecreasing sequence bounded above converges to the supremum of its range; limits of real sequences are unique ([[lem-convergent-implies-bounded]], [[thm-monotone-convergence]], [[lem-limit-unique]], [[def-bounded-set]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `thm-nested-interval-property` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- [L7] A sequence of reals has at most one limit ([[lem-limit-unique]]).


---

# Citation-precision audit — everything that cites `lem-of-add-order`

## The target, as it actually stands on disk

`items/lem-of-add-order.md` — lemma — Order is preserved by adding a constant and by adding inequalities

#### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c, d \in F$.

1. **Translation invariance.** If $a < b$ then $a + c < b + c$.
2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.

## The 7 citing use(s), quoted verbatim from the citing items

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- [L2] Order and arithmetic: $1 > 0$, so $2 = 1 + 1 > 0$; sums of positives are positive; adding a constant preserves the order; a positive has a positive inverse, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L5] Order and arithmetic: $1 > 0$, hence $2 = 1 + 1 > 0$ and $2 > 1$; sums of positives are positive; adding a constant preserves the order; a positive has a positive inverse, and a quotient of positives is positive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `ex-contractive-sequence-fixed-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

- [L2] Order and arithmetic: $1 > 0$, so $3 = 1+1+1 > 1 > 0$; a positive has a positive inverse; and $0 < r < 1$ exactly when $1/r > 1$, so $0 < 1/3 < 1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[prop-of-reciprocal-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `ex-recursive-sqrt-two-plus-x` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$

- [L4] Order and arithmetic: $1 > 0$, so $2 = 1 + 1 > 0$ and $4 = 2 \cdot 2$; adding a constant preserves the order, and inequalities may be added ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L6] Order in $\mathbb{R}$: $0 < 1$ ([[cor-of-one-positive]]), sums of positives are positive and adding a constant preserves the order ([[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]), so $1 - (-1) = 1 + 1 > 0$ and hence $-1 < 1$; in particular $1 \ne -1$.

### `lem-cauchy-sequence-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every Cauchy sequence of reals is bounded

- [L4] Order arithmetic in $\mathbb{R}$: translation invariance, $a < b \Rightarrow a + c < b + c$ ([[lem-of-add-order]]); and the mixed transitivity $a \le b < c \Rightarrow a < c$, immediate from the reading of $a \le b$ as "$a < b$ or $a = b$" together with transitivity of $<$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

### `lem-uniform-metric-on-a-function-space` (published-backward, page function-space-topologies)

Title: For a nonempty set $X$ and a metric space $(Y,d)$ the uniform metric $\\bar\\rho(f,g) = \\sup_{x} \\min\\{d(f(x),g(x)), 1\\}$ is a metric on $Y^{X}$

- [L3] Order arithmetic: inequalities may be added and a constant added to both sides, in the strict form of [[lem-of-add-order]] and, with the case of equality settled by totality of the order, in the nonstrict form; and $a \le 0$ together with $a \ge 0$ gives $a = 0$ ([[def-ordered-field]], [[def-complete-ordered-field]]).
