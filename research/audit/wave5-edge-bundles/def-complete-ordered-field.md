# Citation-precision audit — everything that cites `def-complete-ordered-field`

## The target, as it actually stands on disk

`items/def-complete-ordered-field.md` — definition — Complete ordered field (least-upper-bound property)

#### Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

## The 33 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L5] Order: $10 > 1 > 0$, so $0 < 1/10 < 1$ ([[prop-of-reciprocal-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]); and $|t| = t$ for $t \ge 0$ ([[lem-of-abs-value]]).

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L6] $\bar d \le d$; $\bar d(u,v) = |u-v|$ whenever $|u-v| \le 1$; $\bar\rho(f,h)$ is the least upper bound of $\{\, \bar d(f(x),h(x)) : x \in \mathbb{R} \,\}$; and convergence in $\bar\rho$ is uniform convergence ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-uniform-convergence-in-the-uniform-metric]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `cex-nested-open-intervals-empty` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested open intervals $(0, 1/k)$ have empty intersection

- [L4] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

### `cex-nested-unbounded-closed-empty` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested closed unbounded sets $[k, \\infty)$ have empty intersection, so boundedness cannot be dropped

- [L4] Trichotomy and transitivity of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- [L9] Trichotomy and transitivity of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- [L2] Order and arithmetic: $1 > 0$, so $2 = 1 + 1 > 0$; sums of positives are positive; adding a constant preserves the order; a positive has a positive inverse, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `cex-unbounded-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $1, 1, 2, 1, 3, 1, 4, \\dots$ is unbounded and has a convergent subsequence

- [L6] Absolute value: $|t| = t$ for $t \ge 0$ ([[lem-of-abs-value]]); trichotomy of the order ([[def-complete-ordered-field]], [[def-ordered-field]]).

### `def-interval` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length

- ([[def-complete-ordered-field]], [[def-ordered-field]]) with its order

### `def-monotone-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

- as in [[def-real-order]] and [[def-complete-ordered-field]], and with

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L5] Order and arithmetic: $1 > 0$, hence $2 = 1 + 1 > 0$ and $2 > 1$; sums of positives are positive; adding a constant preserves the order; a positive has a positive inverse, and a quotient of positives is positive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- [L3] $d_\infty(f,g) = \sup\{\, |f(t)-g(t)| : t \in I \,\}$ is a metric on the bounded real functions on a nonempty set, and the supremum is an upper bound of its set and the least one ([[lem-sup-metric-is-a-metric]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `ex-contractive-sequence-fixed-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

- [L2] Order and arithmetic: $1 > 0$, so $3 = 1+1+1 > 1 > 0$; a positive has a positive inverse; and $0 < r < 1$ exactly when $1/r > 1$, so $0 < 1/3 < 1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[prop-of-reciprocal-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `ex-nested-intervals-single-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested intervals $[0, 1/k]$ intersect in exactly $\\{0\\}$

- [L8] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

### `ex-recursive-sqrt-two-plus-x` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$

- [L4] Order and arithmetic: $1 > 0$, so $2 = 1 + 1 > 0$ and $4 = 2 \cdot 2$; adding a constant preserves the order, and inequalities may be added ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `ex-the-moving-spike-family-in-the-three-topologies` (published-backward, page function-space-topologies-examples)

Title: The moving spikes on $[0,1]$ converge pointwise to $0$, do not converge uniformly, and do not converge in the topology of compact convergence

- [L3] $\bar d(u,v) = \min\{|u-v|, 1\}$ equals $|u-v|$ whenever $|u-v| \le 1$, and $\bar\rho(g,h)$ is the least upper bound of $\{\, \bar d(g(t),h(t)) : t \in I \,\}$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `ex-two-subsequential-limits` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

- [L9] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

### `fs-consecutive-differences-null-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [L10] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

### `fs-convergent-subsequence-implies-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a sequence with a convergent subsequence is bounded (the converse of Bolzano-Weierstrass)

- [L7] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

### `fs-nested-open-intervals-nonempty` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a nested sequence of nonempty bounded open intervals has nonempty intersection

- [L5] Trichotomy, so $x < y$ and $y < x$ cannot both hold ([[def-complete-ordered-field]], [[def-ordered-field]]).

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L6] Order in $\mathbb{R}$: $0 < 1$ ([[cor-of-one-positive]]), sums of positives are positive and adding a constant preserves the order ([[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]), so $1 - (-1) = 1 + 1 > 0$ and hence $-1 < 1$; in particular $1 \ne -1$.

### `lem-cauchy-sequence-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every Cauchy sequence of reals is bounded

- [L4] Order arithmetic in $\mathbb{R}$: translation invariance, $a < b \Rightarrow a + c < b + c$ ([[lem-of-add-order]]); and the mixed transitivity $a \le b < c \Rightarrow a < c$, immediate from the reading of $a \le b$ as "$a < b$ or $a = b$" together with transitivity of $<$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- [L10] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

### `lem-monotone-unbounded-diverges` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence that is not bounded above diverges to $+\\infty$

- [L3] Trichotomy: for reals $s$ and $M$, exactly one of $s < M$, $s = M$, $s > M$ holds, so the failure of $s \le M$ is $s > M$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

### `lem-peak-monotone-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every real sequence has a monotone subsequence (the peak / rising-sun lemma)

- [L8] Trichotomy in $\mathbb{R}$: for reals $s, t$ exactly one of $s < t$, $s = t$, $s > t$ holds, so the failure of $x_m \le x_n$ is $x_m > x_n$, and $x_n > x_n$ is impossible ([[def-real-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

### `lem-uniform-convergence-in-the-uniform-metric` (published-backward, page function-space-topologies)

Title: Convergence in the uniform metric is exactly uniform convergence: one $N$ serving every point

- [L3] $\bar\rho(g,h)$ is an upper bound of $\{\, \bar d(g(x),h(x)) : x \in X \,\}$ and is the least one; in particular $\bar d(g(x),h(x)) \le \bar\rho(g,h)$ for every $x \in X$, and any real bounding all these values above bounds $\bar\rho(g,h)$ ([[lem-uniform-metric-on-a-function-space]], [[def-complete-ordered-field]], [[lem-sup-unique]]).
- [L5] The minimum of two positive reals is positive, and halving a positive real gives a positive real strictly below it ([[lem-finite-set-has-max]], [[def-max-min]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `lem-uniform-metric-on-a-function-space` (published-backward, page function-space-topologies)

Title: For a nonempty set $X$ and a metric space $(Y,d)$ the uniform metric $\\bar\\rho(f,g) = \\sup_{x} \\min\\{d(f(x),g(x)), 1\\}$ is a metric on $Y^{X}$

- bound of it, so the least upper bound exists ([[def-complete-ordered-field]]) and
- [L2] Least-upper-bound property: a nonempty subset of $\mathbb{R}$ bounded above has a least upper bound, which is an upper bound lying below every upper bound, and it is unique ([[def-complete-ordered-field]], [[lem-sup-unique]], [[def-bounded-set]]).
- [L3] Order arithmetic: inequalities may be added and a constant added to both sides, in the strict form of [[lem-of-add-order]] and, with the case of equality settled by totality of the order, in the nonstrict form; and $a \le 0$ together with $a \ge 0$ gives $a = 0$ ([[def-ordered-field]], [[def-complete-ordered-field]]).

### `rem-completeness-routes` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Two independent proofs that $\\mathbb{R}$ is Cauchy complete, and why the library records both

- ([[def-complete-ordered-field]]). It goes through boundedness of Cauchy

### `thm-cauchy-criterion-via-lub` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The Cauchy criterion from the least-upper-bound property: in a complete ordered field every Cauchy sequence converges

- ([[def-complete-ordered-field]]), every Cauchy sequence converges. The proof
- [L5] $\mathbb{R}$ is a complete ordered field, and this is the only property of it used, through [L2] ([[def-complete-ordered-field]]).

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- [L2] A convergent sequence of reals is bounded, and a nondecreasing sequence bounded above converges to the supremum of its range; limits of real sequences are unique ([[lem-convergent-implies-bounded]], [[thm-monotone-convergence]], [[lem-limit-unique]], [[def-bounded-set]], [[def-complete-ordered-field]], [[lem-sup-unique]]).
- [L3] A supremum is an upper bound of its set ([[def-complete-ordered-field]], [[lem-sup-unique]]).

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- [L1] $\bar d \le d$ and $\bar d \le 1$; if $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$; and $\bar d(u(x),v(x)) \le \bar\rho(u,v)$ for every $x \in X$, while any real bounding all the values $\bar d(u(x),v(x))$ above bounds $\bar\rho(u,v)$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `thm-monotone-convergence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum

- the least-upper-bound property ([[def-complete-ordered-field]]) supplies the
- [L1] Least-upper-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ that is bounded above has a unique supremum, which is an upper bound of it ([[def-complete-ordered-field]], [[lem-sup-unique]]).

### `thm-nested-interval-property` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- [L2] Least-upper-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ bounded above has a unique supremum; the supremum is an upper bound and is $\le$ every upper bound ([[def-complete-ordered-field]], [[lem-sup-unique]]).
