# Citation-precision audit — everything that cites `thm-heine-borel-rn`

## The target, as it actually stands on disk

`items/thm-heine-borel-rn.md` — theorem — Heine-Borel in $\\mathbb{R}^n$: with the Euclidean metric a subset of $\\mathbb{R}^n$ is compact if and only if it is closed and bounded, and the proof by bisection uses no choice principle; the same holds on the real line

#### Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^n$ be the set of functions
$n \to \mathbb{R}$ and let $d_2$ be the Euclidean metric on it
([[lem-metrics-on-rn]]). Then:

1. **Closed boxes are compact.** For reals $a_k \le b_k$ $(k < n)$ the box
   $Q = \{\, x \in \mathbb{R}^n : a_k \le x_k \le b_k \text{ for every } k < n \,\}$
   is a compact subset of $(\mathbb{R}^n, d_2)$ ([[def-metric-compactness]]).
2. **Heine-Borel.** A subset $K \subseteq \mathbb{R}^n$ is a compact subset of
   $(\mathbb{R}^n, d_2)$ if and only if $K$ is closed in $\mathbb{R}^n$
   ([[def-metric-topology]]) and bounded
   ([[def-metric-bounded-diameter]]).
3. **The real line.** A subset $K \subseteq \mathbb{R}$ is a compact subset of
   $(\mathbb{R}, d_{\mathbb{R}})$, the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   ([[lem-real-line-is-a-metric-space]]), if and only if $K$ is closed in
   $\mathbb{R}$ and bounded.

**No choice principle is used.** The bisection below halves one coordinate at a
time and takes the **left** half whenever the left half still fails to be finitely
covered, the right half otherwise: a rule with two outcomes, decided by a
property of the box, not a selection. That is the whole reason the theorem is
available in ZF, while the general "complete and totally bounded implies compact"
([[thm-complete-and-totally-bounded-implies-compact]]) is not.

The hypothesis $n \ge 1$ is inherited from [[lem-metrics-on-rn]], which defines
$\mathbb{R}^n$ and its metrics only there; the last remark below records what
happens at $n = 0$.

## The 10 citing use(s), quoted verbatim from the citing items

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L4] A compact subset of $\mathbb{R}$ is closed and bounded, and a bounded subset lies in some ball $B(0,r)$, so $|x| < r$ for all its points ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[def-metric-ball]], [[def-metric-topology]], [[def-interval]]).

### `def-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: Locally compact metric space: every point has a compact neighbourhood

- compact ([[thm-heine-borel-rn]]), which is the hypothesis discharged. For

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- [L1] $I$ is a nonempty compact metric space: it is bounded, lying in $B(0,2)$, and closed in $\mathbb{R}$, so it is a compact subset of $\mathbb{R}$ ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-topology]], [[def-metric-ball]], [[def-interval]]).

### `ex-dini-on-the-unit-interval` (published-backward, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- [L5] $I$ is a compact metric space, being closed in $\mathbb{R}$ and bounded ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]]).

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (published-backward, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- [L1] A subset of $\mathbb{R}$ is a compact subset exactly when it is closed in $\mathbb{R}$ and bounded, and a bounded subset lies in a ball $B(0,r)$, so $|t| < r$ for each of its points ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[def-metric-ball]]).
- - **Local compactness of $\mathbb{R}$ is where Heine-Borel is spent.** In a general metric space a closed ball need not be compact, and then nothing above survives; what makes $\mathbb{R}$ work is that closed bounded sets are compact ([[thm-heine-borel-rn]]). The contrast is $\mathbb{Q}$, where the evaluation map is not continuous at all.

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L5] $[-m,m]$ is a compact subset of $\mathbb{R}$ for every natural $m \ge 1$, and every compact subset of $\mathbb{R}$ lies in some $[-m,m]$; the sets $B_K(g,\varepsilon)$ centred at $g$ are a neighbourhood base at $g$ in the compact-open topology on $C(\mathbb{R},\mathbb{R})$ ([[thm-heine-borel-rn]], [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[thm-compact-open-equals-compact-convergence]], [[def-topology-of-compact-convergence]], fact (U4), [[def-compact-open-topology]]).

### `ex-the-moving-spike-family-in-the-three-topologies` (published-backward, page function-space-topologies-examples)

Title: The moving spikes on $[0,1]$ converge pointwise to $0$, do not converge uniformly, and do not converge in the topology of compact convergence

- [L7] $I$ is a compact subset of $\mathbb{R}$ and the sets $B_K(g,\varepsilon)$ centred at $g$ are a neighbourhood base at $g$ in the topology of compact convergence ([[thm-heine-borel-rn]], [[def-metric-compactness]], [[def-topology-of-compact-convergence]], fact (U4), [[def-metric-ball]], [[def-metric-topology]]).

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (published-backward, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- [L5] A subset of $\mathbb{R}$ is a compact subset exactly when it is closed in $\mathbb{R}$ and bounded ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]]).

### `lem-compact-closed-balls-in-a-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: In a locally compact metric space every point has arbitrarily small compact closed balls, hence a neighbourhood base of compact sets

- - **Compactness of every closed ball is a strictly stronger property.** The lemma asserts compactness of the *small* closed balls at each point, with the threshold depending on the point. In $\mathbb{R}^{n}$ every closed ball is compact ([[thm-heine-borel-rn]]), but that is a feature of $\mathbb{R}^{n}$ and not a consequence of local compactness.

### `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values` (published-backward, page the-topology-of-euclidean-space)

Title: For a nonempty subset of $\\mathbb{R}^n$ with $n\\ge1$, compactness, closedness and boundedness, pseudocompactness, and attainment of extrema by every continuous real-valued function are equivalent

- [L1] In Euclidean space, a subset is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).
