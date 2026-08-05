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

# Citation-precision audit — everything that cites `cex-nested-open-intervals-empty`

## The target, as it actually stands on disk

`items/cex-nested-open-intervals-empty.md` — counterexample — The nested open intervals $(0, 1/k)$ have empty intersection

#### Statement refuted

**Refuted claim:** a nested sequence of nonempty bounded **open** intervals has
nonempty intersection ([[fs-nested-open-intervals-nonempty]],
[[def-interval]]).

The witness is $J_k = (0, 1/k)$ for $k \ge 1$: each is a nonempty bounded open
interval, the family is nested, and

$$\bigcap_{k \ge 1}\Big(0, \frac{1}{k}\Big) = \emptyset .$$

The refutation is carried out in full in
[[fs-nested-open-intervals-nonempty]] and is recorded here as the named
counterexample. The comparison worth keeping in view is the closed family $[0, 1/k]$, which
differs only by the inclusion of the left endpoint and intersects in $\{0\}$;
that computation is the preceding example on this page.

## The 2 citing use(s), quoted verbatim from the citing items

### `fs-nested-open-intervals-nonempty` (forward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a nested sequence of nonempty bounded open intervals has nonempty intersection

- [[cex-nested-open-intervals-empty]].

### `thm-nested-interval-property` (forward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- [[cex-nested-open-intervals-empty]], which keeps boundedness and drops


---

# Citation-precision audit — everything that cites `ex-two-subsequential-limits`

## The target, as it actually stands on disk

`items/ex-two-subsequential-limits.md` — example — The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

#### Example

For $k \ge 1$ let

$$x_k = (-1)^k\Big(1 + \frac{1}{k}\Big).$$

Then $(x_k)$ is bounded, with $1 < |x_k| \le 2$ at every index, it does not
converge, and its subsequential limit set ([[def-subsequential-limit]]) is
exactly

$$\operatorname{SL}(x) = \{-1, 1\}.$$

The example separates two things that a first reading of Bolzano-Weierstrass can
run together. A bounded sequence must have a subsequential limit; it may have
several; and having several is exactly what stops it converging. Here there are
two, and neither is a value of the sequence, since $|x_k| > 1$ always.

**Indexing and the sign.** Written on $\mathbb{N}$ the sequence is
$u_j := t_j\big(1 + 1/(j+1)\big)$ for $j \in \mathbb{N}$, where $t_j := -s_j$
and $(s_k)$ is the alternating sequence of [[lem-alternating-sequence]]. Since
$s_{\sigma(j)} = -s_j$, the sequence $(t_j)$ is $j \mapsto s_{j+1}$, so
$u_j = x_{j+1}$ and $(u_j)$ is the family above under the substitution
$k = j+1$. The verification uses $(u_j)$.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-subsequential-limit` (forward, page monotone-sequences-and-cauchy-completeness)

Title: Subsequential limit of a real sequence, and the subsequential limit set

- [[ex-two-subsequential-limits]] carries out that computation for a sequence

### `lem-alternating-sequence` (forward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [[ex-two-subsequential-limits]] multiplies $s$ by a null perturbation to get a


---

# Citation-precision audit — everything that cites `prop-of-multiply-inequalities`

## The target, as it actually stands on disk

`items/prop-of-multiply-inequalities.md` — proposition — Multiplying inequalities of positives

#### Statement

Let $F$ be an ordered field. If $0 < a < b$ and $0 < c < d$ then $ac < bd$. If $0 \le a \le b$ and $0 \le c \le d$ then $ac \le bd$.

## The 2 citing use(s), quoted verbatim from the citing items

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- [L9] Multiplying inequalities of nonnegatives: $0 \le a \le b$ and $0 \le c \le d$ give $ac \le bd$ ([[prop-of-multiply-inequalities]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L6] Multiplying inequalities of nonnegatives: $0 \le a \le b$ and $0 \le e \le f$ give $ae \le bf$ ([[prop-of-multiply-inequalities]]).


---

# Citation-precision audit — everything that cites `ex-contractive-sequence-fixed-point`

## The target, as it actually stands on disk

`items/ex-contractive-sequence-fixed-point.md` — example — The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

#### Example

Fix any $a \in \mathbb{R}$ and let $(x_k)$ be the sequence with $x_0 = a$ and

$$x_{k+1} = \frac{x_k + 1}{3} \qquad (k \in \mathbb{N}).$$

Then $(x_k)$ is contractive with contraction constant $c = 1/3$
([[def-contractive-sequence]]), and

$$\lim_{k} x_k = \frac{1}{2},$$

**whatever the starting value $a$ is**. Moreover
[[thm-contractive-implies-cauchy]] supplies the error bound
$|1/2 - x_k| \le 3^{\,-(k-1)}|x_2 - x_1|/(1 - 1/3)$ for $k \ge 1$, which is
computable from the first three terms alone.

The limit $1/2$ is the unique solution of $L = (L+1)/3$, that is the unique fixed
point of the map $u \mapsto (u+1)/3$. This is the smallest honest instance of the
Banach fixed point theorem: a contraction on $\mathbb{R}$ has one fixed point,
and every orbit converges to it.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-contractive-sequence` (forward, page monotone-sequences-and-cauchy-completeness)

Title: Contractive sequence: $|x_{k+2} - x_{k+1}| \\le c\\,|x_{k+1} - x_k|$ for a fixed $0 < c < 1$

- [[ex-contractive-sequence-fixed-point]] is the simplest instance.

### `thm-contractive-implies-cauchy` (forward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [[ex-contractive-sequence-fixed-point]] carries out the arithmetic on a
