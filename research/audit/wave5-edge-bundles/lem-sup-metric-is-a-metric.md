# Citation-precision audit — everything that cites `lem-sup-metric-is-a-metric`

## The target, as it actually stands on disk

`items/lem-sup-metric-is-a-metric.md` — lemma — The supremum metric $d_\\infty(f,g) = \\sup_x |f(x) - g(x)|$ is a metric on the bounded real-valued functions on a nonempty set

#### Statement

Let $S$ be a nonempty set. Call a function $f : S \to \mathbb{R}$ **bounded** when
its range $f[S] = \{f(s) : s \in S\}$ is a bounded subset of $\mathbb{R}$
([[def-bounded-set]]), and write

$$\mathcal{B}(S) := \{\, f : f \text{ is a bounded function } S \to \mathbb{R} \,\}.$$

For $f, g \in \mathcal{B}(S)$ put $D(f,g) := \{\, |f(s) - g(s)| : s \in S \,\}$ and

$$d_\infty(f,g) := \sup D(f,g).$$

This is well defined: $D(f,g)$ is nonempty because $S$ is, and it is bounded
above (step 1.1 below), so its least upper bound exists
([[def-complete-ordered-field]]) and is unique ([[lem-sup-unique]]).

**Then $d_\infty$ is a metric on $\mathcal{B}(S)$** ([[def-metric-space]]), the
**supremum metric** (also called the uniform metric).

The hypotheses ensure that the formula is a finite real-valued metric for every
pair in the stated function space. Boundedness of $f$ and $g$ makes $D(f,g)$
bounded above, and nonemptiness of $S$ makes it nonempty. Some unbounded pairs
can still have a finite supremum, but allowing all real-valued functions would
not give a finite-valued metric: for example, on $S=\mathbb{R}$ the functions
$f(s)=s$ and $g(s)=0$ make $D(f,g)$ unbounded above
([[rem-sup-conventions]]).

## The 4 citing use(s), quoted verbatim from the citing items

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- of [[lem-sup-metric-is-a-metric]]. Then:
- [L3] $d_\infty(f,g) = \sup\{\, |f(t)-g(t)| : t \in I \,\}$ is a metric on the bounded real functions on a nonempty set, and the supremum is an upper bound of its set and the least one ([[lem-sup-metric-is-a-metric]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `lem-uniform-metric-on-a-function-space` (published-backward, page function-space-topologies)

Title: For a nonempty set $X$ and a metric space $(Y,d)$ the uniform metric $\\bar\\rho(f,g) = \\sup_{x} \\min\\{d(f(x),g(x)), 1\\}$ is a metric on $Y^{X}$

- - **This replaces the published supremum metric here; it does not generalise it.** [[lem-sup-metric-is-a-metric]] is the metric $d_\infty(f,g) = \sup_x |f(x)-g(x)|$ on the **bounded real-valued** functions on a nonempty set, and its Statement is about that set of functions and that target. It cannot carry $C(X,Y)$ for a metric target $Y$, and it cannot carry unbounded functions at all. The metric above is defined on all of $Y^{X}$, for an arbitrary metric target, at the cost of truncating distances at $1$. Where both are defined the two are different functions: they disagree at every pair whose distance somewhere exceeds $1$. The companion page verifies, on $C([0,1],\mathbb{R})$, that they are nevertheless uniformly equivalent there and so induce the same topology; no wider claim than that is made here.

### `rem-function-space-conventions` (published-backward, page function-space-topologies)

Title: Standing hypotheses on this page: a metric domain, where the target must be metric, and why the compact-open topology is built from metric compactness

- metric. [[lem-sup-metric-is-a-metric]] is stated for the **bounded real-valued**

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- - **The classical special case.** With $Y = \mathbb{R}$ this says that the bounded-or-not real functions on a nonempty set are complete in the uniform metric, and that the continuous ones form a closed, hence complete, subspace. The companion page works $C([0,1],\mathbb{R})$ explicitly and compares the uniform metric there with the supremum metric of [[lem-sup-metric-is-a-metric]].
