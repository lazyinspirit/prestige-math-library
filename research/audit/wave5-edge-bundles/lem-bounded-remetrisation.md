# Citation-precision audit — everything that cites `lem-bounded-remetrisation`

## The target, as it actually stands on disk

`items/lem-bounded-remetrisation.md` — lemma — $\\min(d,1)$ and $d/(1+d)$ are metrics uniformly equivalent to $d$, so every metric space carries a bounded metric with the same topology

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and define, for
$x, y \in X$,

$$d'(x,y) := \min\{\, d(x,y),\ 1 \,\}, \qquad d''(x,y) := \frac{d(x,y)}{1 + d(x,y)} .$$

Both are well defined: $d(x,y) \ge 0$ ([[lem-metric-nonnegativity]]), so
$1 + d(x,y) > 0$ and is invertible, and the minimum of a two-element set of
reals exists ([[lem-finite-set-has-max]], [[def-max-min]]). Then:

1. $d'$ and $d''$ are metrics on $X$.
2. $d'(x,y) \le 1$ and $d''(x,y) < 1$ for all $x,y$; hence $(X,d')$ and
   $(X,d'')$ are bounded metric spaces
   ([[def-metric-bounded-diameter]]), and if $X \ne \emptyset$ then
   $\operatorname{diam}(X) \le 1$ for both.
3. $d'$ and $d''$ are each uniformly equivalent to $d$, hence topologically
   equivalent to it ([[def-equivalent-metrics]],
   [[thm-metric-equivalence-hierarchy]]).

**Consequently every metric space carries a bounded metric with exactly the same
topology**, so boundedness cannot be read off the topology alone.

## The 8 citing use(s), quoted verbatim from the citing items

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L6] $\bar d \le d$; $\bar d(u,v) = |u-v|$ whenever $|u-v| \le 1$; $\bar\rho(f,h)$ is the least upper bound of $\{\, \bar d(f(x),h(x)) : x \in \mathbb{R} \,\}$; and convergence in $\bar\rho$ is uniform convergence ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-uniform-convergence-in-the-uniform-metric]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- [L4] $\bar d \le d$ and $\bar d \le 1$; if $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$; $\bar\rho(f,g) = \sup\{\, \bar d(f(t),g(t)) : t \in I \,\}$ is an upper bound of that set and the least one ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]]).

### `ex-the-moving-spike-family-in-the-three-topologies` (published-backward, page function-space-topologies-examples)

Title: The moving spikes on $[0,1]$ converge pointwise to $0$, do not converge uniformly, and do not converge in the topology of compact convergence

- [L3] $\bar d(u,v) = \min\{|u-v|, 1\}$ equals $|u-v|$ whenever $|u-v| \le 1$, and $\bar\rho(g,h)$ is the least upper bound of $\{\, \bar d(g(t),h(t)) : t \in I \,\}$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `lem-uniform-convergence-in-the-uniform-metric` (published-backward, page function-space-topologies)

Title: Convergence in the uniform metric is exactly uniform convergence: one $N$ serving every point

- [L1] $\bar d(u,v) \le d(u,v)$ and $\bar d(u,v) \le 1$ for all $u,v \in Y$, the minimum of a two-element set of reals being a lower bound of both elements and one of them ([[lem-bounded-remetrisation]], [[lem-finite-set-has-max]], [[def-max-min]]).
- [L2] If $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$: the minimum $\min\{d(u,v),1\}$ is one of its two arguments, and it is not $1$, so it is $d(u,v)$ ([[lem-finite-set-has-max]], [[def-max-min]], [[lem-bounded-remetrisation]]).

### `lem-uniform-metric-on-a-function-space` (published-backward, page function-space-topologies)

Title: For a nonempty set $X$ and a metric space $(Y,d)$ the uniform metric $\\bar\\rho(f,g) = \\sup_{x} \\min\\{d(f(x),g(x)), 1\\}$ is a metric on $Y^{X}$

- ([[lem-bounded-remetrisation]], claims 1 and 2). For $f, g \in Y^{X}$
- [L1] $\bar d = \min\{d,1\}$ is a metric on $Y$: it satisfies (M1), (M2) and (M3) of [[def-metric-space]], and $0 \le \bar d(u,v) \le 1$ for all $u,v$ ([[lem-bounded-remetrisation]], claims 1 and 2, [[lem-metric-nonnegativity]]).
- - **Truncation is what removes the boundedness hypothesis, and it is topologically free.** $\min\{d,1\}$ is uniformly equivalent to $d$, hence topologically equivalent to it ([[lem-bounded-remetrisation]], claim 3), so nothing about the topology of $Y$ is changed by the truncation. What *is* changed is the numerical value of the distance, and every statement below that compares $\bar\rho$ with an untruncated distance says at which threshold the two agree.

### `thm-comparison-of-the-three-function-space-topologies` (published-backward, page function-space-topologies)

Title: On $C(X,Y)$ with $X$ and $Y$ metric, uniform convergence is finer than compact convergence, which is finer than pointwise convergence

- [L7] $\bar d \le d$ and $\bar d \le 1$; if $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$; and $\bar d(g(x),h(x)) \le \bar\rho(g,h)$ for every $x$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]]).

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- [L1] $\bar d \le d$ and $\bar d \le 1$; if $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$; and $\bar d(u(x),v(x)) \le \bar\rho(u,v)$ for every $x \in X$, while any real bounding all the values $\bar d(u(x),v(x))$ above bounds $\bar\rho(u,v)$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-complete-ordered-field]], [[lem-sup-unique]]).
- [L5] The triangle inequality (M3) for $\bar d$ ([[lem-bounded-remetrisation]], [[def-metric-space]]).

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- [L7] $\bar d \le d$ and $\bar d \le 1$; if $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$; and $\bar d(u(x),v(x)) \le \bar\rho(u,v)$ for every $x \in X$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]]).
