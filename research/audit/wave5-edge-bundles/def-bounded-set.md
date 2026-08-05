# Citation-precision audit — everything that cites `def-bounded-set`

## The target, as it actually stands on disk

`items/def-bounded-set.md` — definition — Lower bound, bounded below, bounded set

#### Definition

Throughout, $\mathbb{R}$ denotes the complete ordered field
([[def-complete-ordered-field]]) and $S \subseteq \mathbb{R}$ is a subset of it.

The notions **upper bound** and **bounded above** are already fixed by
[[def-complete-ordered-field]] and are only recalled here, never redefined:
$u \in \mathbb{R}$ is an *upper bound* of $S$ if $s \le u$ for all $s \in S$, and
$S$ is *bounded above* if it has at least one upper bound. The dual notions are:

- $\ell \in \mathbb{R}$ is a **lower bound** of $S$ if $\ell \le s$ for all $s \in S$.
- $S$ is **bounded below** if it has at least one lower bound.
- $S$ is **bounded** if it is both bounded above and bounded below, that is, if
  there are $\ell, u \in \mathbb{R}$ with $\ell \le s \le u$ for every $s \in S$.

## The 14 citing use(s), quoted verbatim from the citing items

### `cex-unbounded-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $1, 1, 2, 1, 3, 1, 4, \\dots$ is unbounded and has a convergent subsequence

- [L4] Boundedness of a sequence and of a subset of $\mathbb{R}$ ([[def-sequence]], [[def-bounded-set]]); a constant sequence converges to its value ([[def-real-limit]]); and every convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

### `cor-monotone-converges-iff-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A monotone sequence converges if and only if it is bounded

- [L4] A sequence is bounded when some $M$ satisfies $|x_k| \le M$ for every $k$; its range is bounded above by $u$ when $x_k \le u$ for every $k$, and bounded below by $\ell$ when $\ell \le x_k$ for every $k$ ([[def-sequence]], [[def-bounded-set]]).

### `def-interval` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length

- **Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly

### `def-monotone-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

- bounded above, bounded below or bounded in the sense of [[def-bounded-set]]

### `def-pseudocompact-space` (published-backward, page the-topology-of-euclidean-space)

Title: Pseudocompact space: every continuous real-valued function has bounded image

- A topological space $X$ is **pseudocompact** when every continuous map $f:X\to\mathbb{R}$ ([[def-continuous-map-top]]) has bounded image: there are reals $\ell,u$ with $\ell\le f(x)\le u$ for every $x\in X$ ([[def-bounded-set]]).

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L6] Monotone sequences, with consecutive comparisons sufficing ([[def-monotone-sequence]]), and boundedness below of a subset of $\mathbb{R}$ ([[def-bounded-set]]).

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- [L2] A continuous real function on a nonempty compact metric space is bounded and attains a greatest and a least value ([[thm-extreme-value-metric]], [[def-bounded-set]]).

### `ex-recursive-sqrt-two-plus-x` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$

- [L6] Monotone sequences, with consecutive comparisons sufficing ([[def-monotone-sequence]]); boundedness above of a subset of $\mathbb{R}$ ([[def-bounded-set]]).

### `lem-monotone-unbounded-diverges` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence that is not bounded above diverges to $+\\infty$

- bounded above ([[def-bounded-set]]). Then $(x_k)$ diverges to $+\infty$
- [L2] Bounded above: $S$ is bounded above exactly when some $M \in \mathbb{R}$ satisfies $s \le M$ for every $s \in S$ ([[def-bounded-set]]).

### `lem-pseudocompact-euclidean-subset-is-bounded` (published-backward, page the-topology-of-euclidean-space)

Title: A pseudocompact subset of $\\mathbb{R}^n$ is bounded

- [L3] A subset of a metric space is bounded when it is empty or lies in some open ball ([[def-metric-bounded-diameter]]); a bounded set of reals has an upper bound ([[def-bounded-set]]).

### `lem-uniform-metric-on-a-function-space` (published-backward, page function-space-topologies)

Title: For a nonempty set $X$ and a metric space $(Y,d)$ the uniform metric $\\bar\\rho(f,g) = \\sup_{x} \\min\\{d(f(x),g(x)), 1\\}$ is a metric on $Y^{X}$

- [L2] Least-upper-bound property: a nonempty subset of $\mathbb{R}$ bounded above has a least upper bound, which is an upper bound lying below every upper bound, and it is unique ([[def-complete-ordered-field]], [[lem-sup-unique]], [[def-bounded-set]]).

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- [L2] A convergent sequence of reals is bounded, and a nondecreasing sequence bounded above converges to the supremum of its range; limits of real sequences are unique ([[lem-convergent-implies-bounded]], [[thm-monotone-convergence]], [[lem-limit-unique]], [[def-bounded-set]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `thm-monotone-convergence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum

- above ([[def-bounded-set]]), then $(x_k)$ converges ([[def-real-limit]]) and
- [L8] Bounded above and bounded below, for a subset of $\mathbb{R}$ ([[def-bounded-set]]).

### `thm-nested-interval-property` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- [L8] Bounded above and bounded below, for a subset of $\mathbb{R}$ ([[def-bounded-set]]).
