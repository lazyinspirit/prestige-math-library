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

# Citation-precision audit — everything that cites `lem-convergent-implies-bounded`

## The target, as it actually stands on disk

`items/lem-convergent-implies-bounded.md` — lemma — Every convergent sequence is bounded

#### Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]). Then $(x_k)$ is bounded: there is
$M \in \mathbb{R}$ with $|x_k| \le M$ for every $k \in \mathbb{N}$.

## The 4 citing use(s), quoted verbatim from the citing items

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- [L7] Divergence to $+\infty$ ([[def-divergence-to-infinity]]); a convergent sequence is bounded ([[lem-convergent-implies-bounded]]); convergence ([[def-real-limit]]).

### `cex-unbounded-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $1, 1, 2, 1, 3, 1, 4, \\dots$ is unbounded and has a convergent subsequence

- [L4] Boundedness of a sequence and of a subset of $\mathbb{R}$ ([[def-sequence]], [[def-bounded-set]]); a constant sequence converges to its value ([[def-real-limit]]); and every convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

### `cor-monotone-converges-iff-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A monotone sequence converges if and only if it is bounded

- [[lem-convergent-implies-bounded]]. What monotonicity buys is the converse, which
- [L3] Every convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- [L2] A convergent sequence of reals is bounded, and a nondecreasing sequence bounded above converges to the supremum of its range; limits of real sequences are unique ([[lem-convergent-implies-bounded]], [[thm-monotone-convergence]], [[lem-limit-unique]], [[def-bounded-set]], [[def-complete-ordered-field]], [[lem-sup-unique]]).


---

# Citation-precision audit — everything that cites `cex-unbounded-with-convergent-subsequence`

## The target, as it actually stands on disk

`items/cex-unbounded-with-convergent-subsequence.md` — counterexample — The sequence $1, 1, 2, 1, 3, 1, 4, \\dots$ is unbounded and has a convergent subsequence

#### Statement refuted

**Refuted claim:** a sequence of reals with a convergent subsequence is bounded,
which is the converse of [[thm-bolzano-weierstrass]]
([[fs-convergent-subsequence-implies-bounded]], [[def-sequence]]).

The witness is the interleaving

$$1,\; 1,\; 2,\; 1,\; 3,\; 1,\; 4,\; \dots$$

whose terms at even indices are $1, 2, 3, \dots$ and whose terms at odd indices
are all $1$. It is unbounded, and its odd-indexed subsequence is constant, hence
convergent. The refutation is carried out in full in
[[fs-convergent-subsequence-implies-bounded]]; this item records the witness and
adds the computation of its subsequential limit set.

## The 4 citing use(s), quoted verbatim from the citing items

### `def-subsequential-limit` (forward, page monotone-sequences-and-cauchy-completeness)

Title: Subsequential limit of a real sequence, and the subsequential limit set

- [[cex-unbounded-with-convergent-subsequence]] shows.

### `fs-convergent-subsequence-implies-bounded` (forward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a sequence with a convergent subsequence is bounded (the converse of Bolzano-Weierstrass)

- [[cex-unbounded-with-convergent-subsequence]], which also computes its

### `lem-alternating-sequence` (forward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [[cex-unbounded-with-convergent-subsequence]] is the witness for the first of

### `thm-bolzano-weierstrass` (forward, page monotone-sequences-and-cauchy-completeness)

Title: Bolzano-Weierstrass: every bounded real sequence has a convergent subsequence

- [[cex-unbounded-with-convergent-subsequence]]: a wildly unbounded sequence can


---

# Citation-precision audit — everything that cites `thm-well-ordering-principle`

## The target, as it actually stands on disk

`items/thm-well-ordering-principle.md` — theorem — The well-ordering principle

#### Statement

Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$.

## The 4 citing use(s), quoted verbatim from the citing items

### `ex-arens-space-is-sequential-not-frechet-urysohn` (published-backward, page nets-and-filters-examples)

Title: Arens space $S_2$ is sequential but not Fréchet–Urysohn

- [L2] Finite subsets of $\mathbb N$ have maxima, nonempty subsets have least members, and recursion produces sequences from uniquely specified successive terms ([[lem-finite-set-has-max]], [[thm-well-ordering-principle]], [[thm-recursion]]).

### `ex-sequential-fan-is-frechet-urysohn-not-first-countable` (published-backward, page nets-and-filters-examples)

Title: The sequential fan is Fréchet–Urysohn and not first countable

- [L1] Every nonempty finite subset of $\mathbb N$ has a maximum, every nonempty subset of $\mathbb N$ has a least member, and recursion defines sequences from uniquely specified successive terms ([[lem-finite-set-has-max]], [[thm-well-ordering-principle]], [[thm-recursion]]).

### `lem-convergence-in-the-pointwise-topology` (published-backward, page function-space-topologies)

Title: A sequence converges in the topology of pointwise convergence exactly when it converges at every point

- [L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

### `lem-peak-monotone-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every real sequence has a monotone subsequence (the peak / rising-sun lemma)

- [L2] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).
- the well-ordering principle ([[thm-well-ordering-principle]]), so the functions


---

# Citation-precision audit — everything that cites `lem-of-triangle-inequality`

## The target, as it actually stands on disk

`items/lem-of-triangle-inequality.md` — lemma — The triangle inequality

#### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$. Then

$$|x + y| \le |x| + |y|.$$

## The 4 citing use(s), quoted verbatim from the citing items

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- ([[lem-of-triangle-inequality]], [[def-abs-value]]) applied after inserting and

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L2] $|uv| = |u||v|$, $|u+v| \le |u|+|v|$, and $|u| \ge 0$ ([[lem-of-abs-value]], [[lem-of-triangle-inequality]], [[def-abs-value]]).

### `lem-cauchy-sequence-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every Cauchy sequence of reals is bounded

- [L1] Triangle inequality: $|x| = |(x - y) + y| \le |x - y| + |y|$ for all reals $x, y$ ([[lem-of-triangle-inequality]]).

### `lem-cauchy-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A Cauchy sequence with a convergent subsequence converges, to that subsequence’s limit

- [L1] Triangle inequality: $|x - L| = |(x - y) + (y - L)| \le |x - y| + |y - L|$ ([[lem-of-triangle-inequality]]).
