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

# Citation-precision audit — everything that cites `lem-omega-least-limit-ordinal`

## The target, as it actually stands on disk

`items/lem-omega-least-limit-ordinal.md` — lemma — $\\omega$ is the least limit ordinal

#### Statement

Let $\mathbb{N} = \omega$ be the natural numbers ([[def-natural-numbers]]) with
their usual order ([[def-nat-order]]). Then:

**(i)** for all $m, n \in \mathbb{N}$, $m \in n$ if and only if $m < n$;

**(ii)** every natural number is an ordinal ([[def-ordinal]]), and $\omega$ is an
ordinal;

**(iii)** $\omega$ is a limit ordinal ([[def-limit-ordinal]]);

**(iv)** every ordinal $\alpha \in \omega$ is $0$ or a successor ordinal, and
consequently $\omega$ is the **least** limit ordinal: $\omega \subseteq \gamma$,
that is $\omega \le \gamma$, for every limit ordinal $\gamma$.

So the natural numbers are exactly the ordinals below $\omega$, and $\omega$ is
the first ordinal at which induction acquires a limit clause.

**Everything here is a theorem of ZF, and no choice principle is used.** The
only axiom beyond the basic ones that any of it needs is Infinity, which is what
makes $\omega$ a set at all ([[lem-omega-smallest-inductive]]).

## The 3 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L1] $\alpha + 1 = \alpha^{+}$; $\omega$ and $\omega_1$ are limit ordinals; $\omega_1$ is uncountable and every ordinal below it is at most countable ([[def-ordinal-addition]], [[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).

### `def-order-topology-on-an-ordinal` (published-backward, page separation-axioms)

Title: The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

- $\omega$, the least limit ordinal ([[lem-omega-least-limit-ordinal]]), is the

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- ([[lem-omega-least-limit-ordinal]]). Then:
- [L1] $\omega$ is an ordinal and a limit ordinal, every element of $\omega$ is $0$ or a successor, and $m \in n$ is $m < n$ for naturals ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[lem-ordinal-basics]]).


---

# Citation-precision audit — everything that cites `lem-nat-discrete`

## The target, as it actually stands on disk

`items/lem-nat-discrete.md` — lemma — Discreteness: $\\sigma(n)$ is the immediate successor

#### Statement

For all $m, n \in \mathbb{N}$: $m < n \iff \sigma(m) \le n$ ([[def-nat-order]]). Consequently there is no $k$ with $n < k < \sigma(n)$: the successor $\sigma(n)$ is the immediate successor of $n$.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-monotone-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

- definitions, using $k < \sigma(k)$ ([[lem-nat-discrete]]). For the converse,
- have $k < j < \sigma(k)$, which [[lem-nat-discrete]] excludes, so $j \le k$ by

### `lem-peak-monotone-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every real sequence has a monotone subsequence (the peak / rising-sun lemma)

- [L7] Discreteness: $N < \sigma(N)$ for every $N \in \mathbb{N}$ ([[lem-nat-discrete]]).


---

# Citation-precision audit — everything that cites `lem-inf-epsilon`

## The target, as it actually stands on disk

`items/lem-inf-epsilon.md` — lemma — Epsilon characterisation of the infimum

#### Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below, and let $\ell$ be a
lower bound of $S$ ([[def-bounded-set]]). Then

$$\ell = \inf S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } s < \ell + \varepsilon.$$

In words: among the lower bounds of $S$, the infimum is exactly the one that
cannot be raised by any positive amount and still bound $S$ from below.

## The 2 citing use(s), quoted verbatim from the citing items

### `thm-monotone-convergence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum

- [L4] Epsilon characterisation of the infimum: if $\ell$ is a lower bound of a nonempty $T$, then $\ell = \inf T$ exactly when for every $\varepsilon > 0$ there is $t \in T$ with $t < \ell + \varepsilon$ ([[lem-inf-epsilon]]).
- out because it is no longer, and because it puts [[lem-inf-epsilon]] to work in

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- [L6] If $\inf S = 0$ and $\eta > 0$ is real, then some $s \in S$ satisfies $s < \eta$ ([[lem-inf-epsilon]], [[def-infimum]]).


---

# Citation-precision audit — everything that cites `ex-nested-intervals-single-point`

## The target, as it actually stands on disk

`items/ex-nested-intervals-single-point.md` — example — The nested intervals $[0, 1/k]$ intersect in exactly $\\{0\\}$

#### Example

For $k \ge 1$ let $I_k := [0, 1/k]$, a nonempty closed bounded interval
([[def-interval]]). The family is nested, its lengths tend to $0$, and

$$\bigcap_{k \ge 1} \Big[0, \frac{1}{k}\Big] = \{0\}.$$

This is the standard instance of the single-point case of
[[thm-nested-interval-property]], and the intersection is computed twice over:
once by the theorem, which says the intersection *is* a single point, and once by
inspection, which says that point is $0$.

**Indexing.** Written on $\mathbb{N}$, the family is $J_j := [0, 1/(j+1)]$ for
$j \in \mathbb{N}$, which is the same family under the substitution $k = j+1$
([[def-sequence]]). The verification uses $(J_j)$.

## The 2 citing use(s), quoted verbatim from the citing items

### `fs-nested-open-intervals-nonempty` (forward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a nested sequence of nonempty bounded open intervals has nonempty intersection

- $[0, 1/(k+1)]$ is $\{0\}$ ([[ex-nested-intervals-single-point]]), which is the

### `thm-nested-interval-property` (forward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- [[ex-nested-intervals-single-point]].
