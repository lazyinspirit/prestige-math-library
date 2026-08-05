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


---

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


---

# Citation-precision audit — everything that cites `thm-metric-closure-characterisation`

## The target, as it actually stands on disk

`items/thm-metric-closure-characterisation.md` — theorem — The closure of a nonempty $A$ is $\\{x : d(x,A) = 0\\}$, equals $A$ together with its limit points, and is the smallest closed superset

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \subseteq X$,
with closure, derived set and limit points as in
[[def-metric-interior-closure-boundary]]. Then:

1. If $A \ne \emptyset$, then $\overline{A} = \{\, x \in X : d(x,A) = 0 \,\}$,
   where $d(x,A)$ is the distance from a point to a nonempty set
   ([[def-metric-bounded-diameter]]).
2. $\overline{A} = A \cup A'$.
3. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$. So $\overline{A}$ is the smallest closed
   superset of $A$, and $A$ is closed if and only if $A = \overline{A}$.

Claims 2 and 3 hold for every $A$, the empty set included: $\overline{\emptyset}$
is empty because no ball meets $\emptyset$, and $\emptyset$ is closed because $X$
is open ([[def-metric-topology]]). Claim 1 carries the hypothesis $A \ne \emptyset$
because $d(x,A)$ is defined only for nonempty $A$
([[def-metric-bounded-diameter]]).

## The 4 citing use(s), quoted verbatim from the citing items

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L4] For nonempty $A$ the closure is $\overline{A} = \{\, x : d(x,A) = 0 \,\}$, a closed set equals its closure and contains it, and $d(x,A) \ge 0$ with $d(x,A) \le d(x,a)$ for every $a \in A$; $d(x,A) = 0$ when $x \in A$ ([[thm-metric-closure-characterisation]], [[def-metric-bounded-diameter]], [[def-infimum]]).

### `thm-metric-spaces-are-completely-normal` (published-backward, page separation-axioms)

Title: In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

- [L2] For nonempty $S \subseteq X$, $\overline{S} = \{\, x \in X : d(x,S) = 0 \,\}$ ([[thm-metric-closure-characterisation]], claim 1).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- [L1] For nonempty $S \subseteq X$ the distance $d(x,S)$ is defined, is $\ge 0$, and $\overline{S} = \{\, x : d(x,S) = 0 \,\}$ ([[def-metric-bounded-diameter]], [[thm-metric-closure-characterisation]], claim 1).
- [L4] A set is closed exactly when it equals its closure ([[thm-metric-closure-characterisation]], claim 3); $\varnothing$ and $X$ are open ([[def-metric-topology]], [[def-topological-space]]).

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- [L5] For nonempty $A \subseteq Y^{X}$ the closure in $(Y^{X},\bar\rho)$ is $\overline{A} = \{\, u : \bar\rho(u,A) = 0 \,\}$, a set is closed exactly when it equals its closure, and $\varnothing$ is closed ([[thm-metric-closure-characterisation]], [[def-metric-bounded-diameter]], [[def-metric-topology]]).


---

# Citation-precision audit — everything that cites `lem-nat-nonzero-is-successor`

## The target, as it actually stands on disk

`items/lem-nat-nonzero-is-successor.md` — lemma — Every nonzero natural number is a successor

#### Statement

For every $n \in \mathbb{N}$ with $n \neq 0$, there exists $m \in \mathbb{N}$ with $n = \sigma(m)$. Equivalently, every natural number is either $0$ or a successor.

## The 4 citing use(s), quoted verbatim from the citing items

### `def-g-delta-and-f-sigma-in-a-topological-space` (published-backward, page separation-axioms)

Title: $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

- successor $n+1$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]],

### `def-zero-sets-and-cozero-sets` (published-backward, page separation-axioms)

Title: Zero sets and cozero sets of continuous real-valued functions

- $k = n+1$ with $n \in \mathbb{N}$ ([[lem-nat-nonzero-is-successor]]), so

### `lem-the-k-topology-is-hausdorff-and-not-regular` (published-backward, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- [L3] For every real $\varepsilon > 0$ there is a natural $k \ge 1$ with $1/k < \varepsilon$; every nonzero natural is a successor; and for every real $x$ there is a natural $k \ge 1$ with $x < k$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]], [[thm-of-archimedean]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- [L5] For every real $\varepsilon > 0$ there is a natural $k \ge 1$ with $1/k < \varepsilon$, and every nonzero natural is a successor, so $k = n+1$ for some $n \in \mathbb{N}$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]], [[def-canonical-natural]]).
