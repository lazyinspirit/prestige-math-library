# Citation-precision audit — everything that cites `lem-sup-unique`

## The target, as it actually stands on disk

`items/lem-sup-unique.md` — lemma — Suprema and infima are unique

#### Statement

Let $S \subseteq \mathbb{R}$. If $u_1$ and $u_2$ are both least upper bounds of
$S$ ([[def-complete-ordered-field]]), then $u_1 = u_2$. If $\ell_1$ and $\ell_2$
are both greatest lower bounds of $S$ ([[def-infimum]]), then
$\ell_1 = \ell_2$.

Consequently a set has at most one supremum and at most one infimum, and the
notations $\sup S$ and $\inf S$ denote single, well-determined real numbers
whenever they exist.

## The 9 citing use(s), quoted verbatim from the citing items

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L6] $\bar d \le d$; $\bar d(u,v) = |u-v|$ whenever $|u-v| \le 1$; $\bar\rho(f,h)$ is the least upper bound of $\{\, \bar d(f(x),h(x)) : x \in \mathbb{R} \,\}$; and convergence in $\bar\rho$ is uniform convergence ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-uniform-convergence-in-the-uniform-metric]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- [L3] $d_\infty(f,g) = \sup\{\, |f(t)-g(t)| : t \in I \,\}$ is a metric on the bounded real functions on a nonempty set, and the supremum is an upper bound of its set and the least one ([[lem-sup-metric-is-a-metric]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `ex-the-moving-spike-family-in-the-three-topologies` (published-backward, page function-space-topologies-examples)

Title: The moving spikes on $[0,1]$ converge pointwise to $0$, do not converge uniformly, and do not converge in the topology of compact convergence

- [L3] $\bar d(u,v) = \min\{|u-v|, 1\}$ equals $|u-v|$ whenever $|u-v| \le 1$, and $\bar\rho(g,h)$ is the least upper bound of $\{\, \bar d(g(t),h(t)) : t \in I \,\}$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `lem-uniform-convergence-in-the-uniform-metric` (published-backward, page function-space-topologies)

Title: Convergence in the uniform metric is exactly uniform convergence: one $N$ serving every point

- [L3] $\bar\rho(g,h)$ is an upper bound of $\{\, \bar d(g(x),h(x)) : x \in X \,\}$ and is the least one; in particular $\bar d(g(x),h(x)) \le \bar\rho(g,h)$ for every $x \in X$, and any real bounding all these values above bounds $\bar\rho(g,h)$ ([[lem-uniform-metric-on-a-function-space]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `lem-uniform-metric-on-a-function-space` (published-backward, page function-space-topologies)

Title: For a nonempty set $X$ and a metric space $(Y,d)$ the uniform metric $\\bar\\rho(f,g) = \\sup_{x} \\min\\{d(f(x),g(x)), 1\\}$ is a metric on $Y^{X}$

- is unique ([[lem-sup-unique]]).
- [L2] Least-upper-bound property: a nonempty subset of $\mathbb{R}$ bounded above has a least upper bound, which is an upper bound lying below every upper bound, and it is unique ([[def-complete-ordered-field]], [[lem-sup-unique]], [[def-bounded-set]]).

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- [L2] A convergent sequence of reals is bounded, and a nondecreasing sequence bounded above converges to the supremum of its range; limits of real sequences are unique ([[lem-convergent-implies-bounded]], [[thm-monotone-convergence]], [[lem-limit-unique]], [[def-bounded-set]], [[def-complete-ordered-field]], [[lem-sup-unique]]).
- [L3] A supremum is an upper bound of its set ([[def-complete-ordered-field]], [[lem-sup-unique]]).

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- [L1] $\bar d \le d$ and $\bar d \le 1$; if $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$; and $\bar d(u(x),v(x)) \le \bar\rho(u,v)$ for every $x \in X$, while any real bounding all the values $\bar d(u(x),v(x))$ above bounds $\bar\rho(u,v)$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `thm-monotone-convergence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum

- ([[lem-sup-unique]]).
- [L1] Least-upper-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ that is bounded above has a unique supremum, which is an upper bound of it ([[def-complete-ordered-field]], [[lem-sup-unique]]).
- [L2] Greatest-lower-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ that is bounded below has a unique infimum, which is a lower bound of it ([[thm-infimum-property]], [[lem-sup-unique]]).

### `thm-nested-interval-property` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- [L2] Least-upper-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ bounded above has a unique supremum; the supremum is an upper bound and is $\le$ every upper bound ([[def-complete-ordered-field]], [[lem-sup-unique]]).
- [L3] Greatest-lower-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ bounded below has a unique infimum; the infimum is a lower bound and is $\ge$ every lower bound ([[thm-infimum-property]], [[lem-sup-unique]]).
