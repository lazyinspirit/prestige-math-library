# Citation-precision audit — everything that cites `thm-extreme-value-metric`

## The target, as it actually stands on disk

`items/thm-extreme-value-metric.md` — theorem — A continuous real-valued function on a nonempty compact metric space is bounded and attains a greatest and a least value

#### Statement

Let $(X,d)$ be a nonempty compact metric space ([[def-metric-compactness]],
[[def-metric-space]]) and let $f : X \to \mathbb{R}$ be continuous
([[def-metric-continuity]]), $\mathbb{R}$ carrying its usual metric
$d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]). Then the
image $f[X]$ is bounded above and below ([[def-bounded-set]]), and it has a
maximum and a minimum ([[def-max-min]]): there are points
$x_{\max}, x_{\min} \in X$ with

$$f(x_{\min}) \;\le\; f(x) \;\le\; f(x_{\max}) \qquad \text{for every } x \in X,$$

and then $f(x_{\max}) = \sup f[X]$ and $f(x_{\min}) = \inf f[X]$
([[def-complete-ordered-field]], [[def-infimum]]).

Nonemptiness of $X$ is a hypothesis and not an oversight: for $X = \emptyset$ the
image is empty and has neither a supremum nor a maximum. No choice principle is
used.

## The 4 citing use(s), quoted verbatim from the citing items

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- space ([[def-metric-compactness]]); so [[thm-extreme-value-metric]] gives a point

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- [L2] A continuous real function on a nonempty compact metric space is bounded and attains a greatest and a least value ([[thm-extreme-value-metric]], [[def-bounded-set]]).

### `lem-uniform-metric-on-a-function-space` (published-backward, page function-space-topologies)

Title: For a nonempty set $X$ and a metric space $(Y,d)$ the uniform metric $\\bar\\rho(f,g) = \\sup_{x} \\min\\{d(f(x),g(x)), 1\\}$ is a metric on $Y^{X}$

- - **The supremum need not be attained**, so $\bar\rho(f,g)$ is a supremum and not a maximum. It is attained when $X$ is a nonempty compact metric space and $f, g$ are continuous, by the extreme value theorem ([[thm-extreme-value-metric]]); nothing below assumes it in general.

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L6] A continuous real-valued function on a nonempty compact metric space attains a least and a greatest value, and the restriction of a continuous map to a metric subspace is continuous ([[thm-extreme-value-metric]], [[def-metric-continuity]], [[def-isometry-and-metric-embedding]], [[lem-real-line-is-a-metric-space]]).
