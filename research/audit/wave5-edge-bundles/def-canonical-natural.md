# Citation-precision audit — everything that cites `def-canonical-natural`

## The target, as it actually stands on disk

`items/def-canonical-natural.md` — definition — The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field

#### Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## The 16 citing use(s), quoted verbatim from the citing items

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- $\iota$ being the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]),
- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `cex-pointwise-bounded-but-not-equicontinuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: a pointwise bounded family of continuous functions is equicontinuous. The spikes are bounded by $1$ everywhere and are not equicontinuous at $0$

- $a_k := 1/\iota(k+2)$ ([[def-canonical-natural]]),
- [L1] Each $f_k$ is a well-defined continuous function $I \to \mathbb{R}$, $f_k(0) = 0$, $f_k(a_k) = 1$, and $0 < a_k \le 1/2$, so $a_k \in I$ ([[fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets]], [[lem-continuity-is-local-and-pastes]], [[def-canonical-natural]], [[def-metrizable-space]], [[def-metric-space]]).
- [L4] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \eta$; $\iota$ is strictly increasing with $\iota(n) > 0$ for $n \ge 1$; and $0 < u \le v$ gives $0 < 1/v \le 1/u$ ([[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[def-canonical-natural]]).

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- $a_k := 1/\iota(k+2)$ ([[def-canonical-natural]]), so that $0 < a_k \le 1/2$,
- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$; hence $0 < a_k \le 1/\iota(2) = 1/2$ and $1/2 \le 1 - a_k < 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `def-g-delta-and-f-sigma-in-a-topological-space` (published-backward, page separation-axioms)

Title: $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

- [[def-canonical-natural]]); and $\{0\}$ is not open because every bounded open

### `def-zero-sets-and-cozero-sets` (published-backward, page separation-axioms)

Title: Zero sets and cozero sets of continuous real-valued functions

- canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]), so that $1/(n+1)$

### `ex-a-uniformly-equicontinuous-family-of-lipschitz-functions` (published-backward, page function-space-topologies-examples)

Title: The $1$-Lipschitz maps of a metric space into $\\mathbb{R}$ form a uniformly equicontinuous family, and the distance functions $x \\mapsto d(x,A)$ all belong to it

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (published-backward, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- ([[def-canonical-natural]]). Let $A \subseteq \mathbb{R}$ be nonempty and closed,
- - **The index starts at $n = 0$**, where the radius is $1/(0+1) = 1$, so the first set in each intersection is $(-1, 2)$ for $[0,1]$ and $(-1,1)$ for $\{0\}$. Writing $1/n$ instead would divide by zero ([[def-canonical-natural]]).

### `ex-dini-on-the-unit-interval` (published-backward, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- $a_k := 1/\iota(k+2)$ ([[def-canonical-natural]]), so $0 < a_k \le 1/2$ and
- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$; hence $0 < a_{k+1} \le a_k \le 1/2$ and $1/2 \le 1 - a_k \le 1 - a_{k+1} < 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (published-backward, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- ([[def-interval]], [[def-canonical-natural]]). Then:
- [L3] For every real $x$ there is a natural $m \ge 1$ with $x < \iota(m)$, and $\iota$ is strictly increasing with $\iota(m) > 0$ for $m \ge 1$ ([[thm-of-archimedean]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- **Given:** $\mathbb{R}$ with $d(s,t) = |s-t|$; the product $\mathbb{R} \times \mathbb{R}$ with the product topology; the map $f(x,z) = xz$ and its transpose $F$; and for a natural $m \ge 1$ the interval $[-m,m] = \{\, t : -\iota(m) \le t \le \iota(m) \,\}$ ([[def-interval]], [[def-canonical-natural]]).
- [L6] For every real $x$ there is a natural $m \ge 1$ with $|x| + 1 < \iota(m)$, and $\iota(m) \ge 1 > 0$ for $m \ge 1$ ([[thm-of-archimedean]], [[lem-of-naturals-positive]], [[cor-archimedean-reciprocal]], [[def-canonical-natural]]).

### `ex-the-moving-spike-family-in-the-three-topologies` (published-backward, page function-space-topologies-examples)

Title: The moving spikes on $[0,1]$ converge pointwise to $0$, do not converge uniformly, and do not converge in the topology of compact convergence

- $a_k := 1/\iota(k+2)$ for $k \in \mathbb{N}$ ([[def-canonical-natural]]), and let
- [L1] Each $f_k$ is a well-defined continuous function $I \to \mathbb{R}$, $(f_k)$ converges pointwise to $\mathbf{0}$, $f_k(a_k) = 1$, and $0 < a_k \le 1/2$ ([[fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets]], steps of its refutation, [[lem-continuity-is-local-and-pastes]], [[def-canonical-natural]], [[cor-archimedean-reciprocal]], [[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]], [[def-isometry-and-metric-embedding]]).

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (published-backward, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- **Given:** The interval $X := [0,1] = \{\, t \in \mathbb{R} : 0 \le t \le 1 \,\}$ ([[def-interval]]) with the metric $d(s,t) = |s-t|$ inherited from $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), the target $Y := \mathbb{R}$ with the same metric, the reals $a_k := 1/\iota(k+2)$ for $k \in \mathbb{N}$ ([[def-canonical-natural]]), and the constant function $\mathbf{0} : X \to \mathbb{R}$ with value $0$.
- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ and $\iota(n) > 0$ for $n \ge 1$, so $0 < a_k \le 1/\iota(2) = 1/2$ and $0 < 2a_k \le 1$ for every $k \in \mathbb{N}$, and $m \le n$ gives $a_n \le a_m$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `lem-convergence-in-the-pointwise-topology` (published-backward, page function-space-topologies)

Title: A sequence converges in the topology of pointwise convergence exactly when it converges at every point

- **Given:** A set $X$, a topological space $(Y,\mathcal{T}_Y)$, the space $Y^{X}$ with the topology of pointwise convergence, a sequence $(f_k)$ in $Y^{X}$ and a point $f \in Y^{X}$; $\iota$ is the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]).
- [L6] For $n \ge 1$ and natural numbers $k_0, \dots, k_{n-1}$ there is an index $j^{\ast} < n$ with $k_j \le k_{j^{\ast}}$ for every $j < n$: the nonempty finite set of reals $\{\iota(k_0), \dots, \iota(k_{n-1})\}$ has a maximum, attained at some index, and $\iota$ is strictly increasing on $\mathbb{N}$, hence reflects the order ([[lem-finite-set-has-max]], [[def-max-min]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (published-backward, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- ([[def-canonical-natural]]), so that $1/(n+1)$ abbreviates the inverse of
- - **The index shift is not cosmetic.** $\mathbb{N}$ contains $0$ ([[def-canonical-natural]]), so the set is written $\{1/(n+1) : n \in \mathbb{N}\}$ and its largest element is $1$; writing $\{1/n : n \in \mathbb{N}\}$ would divide by zero.

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- **Given:** A compact metric space $(X,d)$, continuous functions $f_k : X \to \mathbb{R}$ with $f_k(x) \le f_{k+1}(x)$ for all $k$ and $x$, a continuous $f : X \to \mathbb{R}$ with $f_k(x) \to f(x)$ for every $x \in X$, and $\iota$ the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]).
- [L7] For $n \ge 1$ and natural numbers $k_0, \dots, k_{n-1}$ there is $j^{\ast} < n$ with $k_j \le k_{j^{\ast}}$ for every $j < n$: the nonempty finite set of reals $\{\iota(k_0), \dots, \iota(k_{n-1})\}$ has a maximum, attained at some index, and $\iota$ is strictly increasing on $\mathbb{N}$, hence reflects the order ([[lem-finite-set-has-max]], [[def-max-min]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- natural $\iota(n+1)$ of $\mathbb{R}$ ([[def-canonical-natural]]). Then:
- [L5] For every real $\varepsilon > 0$ there is a natural $k \ge 1$ with $1/k < \varepsilon$, and every nonzero natural is a successor, so $k = n+1$ for some $n \in \mathbb{N}$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]], [[def-canonical-natural]]).
