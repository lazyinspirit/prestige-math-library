# Citation-precision audit — everything that cites `lem-compactness-is-intrinsic`

## The target, as it actually stands on disk

`items/lem-compactness-is-intrinsic.md` — lemma — A subset of a metric space is open in the subspace metric exactly when it is the trace of an open set of the ambient space, and it is compact as a metric space in its own right exactly when every family of open subsets of the ambient space covering it, indexed or not, has finitely many members covering it

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ and let
$(A,d_A)$ be the metric subspace ([[def-isometry-and-metric-embedding]]). Then:

1. **Relative openness is a trace.** A set $V \subseteq A$ is open in $(A,d_A)$
   ([[def-metric-topology]]) if and only if $V = U \cap A$ for some $U$ open in
   $(X,d)$.
2. **Compactness read in the ambient space.** $A$ is a compact subset of $X$
   ([[def-metric-compactness]]), that is $(A,d_A)$ is a compact metric space, if
   and only if for every family $\mathcal{U}$ of open subsets of $X$ with
   $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and
   $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$,
   or else $A = \emptyset$.
3. **The same in indexed form.** $A$ is a compact subset of $X$ if and only if
   for every set $I$ and every family $(U_i)_{i \in I}$ of open subsets of $X$
   with $A \subseteq \bigcup_{i \in I} U_i$ there are $n \in \mathbb{N}$ and
   indices $i_0, \dots, i_n \in I$ with
   $A \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, or else $A = \emptyset$.

Claim 3 is the form used by almost every later proof on this page, because a
cover is usually produced by a rule that attaches an open set to each point or to
each index, and a set of open sets forgets that rule. No choice principle is used
anywhere below; the one place a selection is made is over a finite index set, and
[[lem-finite-choice]] is a theorem of ZF.

## The 11 citing use(s), quoted verbatim from the citing items

### `def-compact-open-topology` (published-backward, page function-space-topologies)

Title: The compact-open topology on $C(X,Y)$ for a metric domain $X$, with subbasis $S(K,V) = \\{f : f[K] \\subseteq V\\}$

- [[lem-compactness-is-intrinsic]], and it is cited at every step that uses it.

### `def-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: Locally compact metric space: every point has a compact neighbourhood

- of open subsets of the ambient $X$ is [[lem-compactness-is-intrinsic]] and is
- [[lem-compactness-is-intrinsic]] are literally the members of $\mathcal{T}_d$.

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- by [[lem-compactness-is-intrinsic]] (claim 3) either $K_m = \varnothing$, and we
- [[lem-compactness-is-intrinsic]] again, $K_1 \cup K_2$ is compact. Nothing is

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L3] $K \subseteq X$ is compact exactly when every family of open subsets of $X$ covering $K$ has finitely many members covering $K$, or $K = \varnothing$; and every set listed as $\{x_0,\dots,x_n\}$ is compact ([[def-metric-compactness]], [[lem-compactness-is-intrinsic]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L1] A compact subset of a metric space is closed in it and bounded; compactness of a subset is a property of the subspace metric alone, so a compact subset of $\mathbb{Q}$ is a compact subset of $\mathbb{R}$ ([[thm-compact-subset-is-closed-and-bounded]], [[def-metric-compactness]], [[lem-compactness-is-intrinsic]], [[def-isometry-and-metric-embedding]]).

### `lem-compact-closed-balls-in-a-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: In a locally compact metric space every point has arbitrarily small compact closed balls, hence a neighbourhood base of compact sets

- [L3] A subset of a metric subspace is open in that subspace exactly when it is the trace on it of a set open in the ambient space ([[lem-compactness-is-intrinsic]], claim 1).

### `lem-tube-lemma-for-a-compact-metric-factor` (published-backward, page function-space-topologies)

Title: Tube lemma: if $K$ is a compact subset of a metric space $X$, $Z$ is a topological space and $N$ is open in $X \\times Z$ with $K \\times \\{z_0\\} \\subseteq N$, then $K \\times W \\subseteq N$ for some open $W \\ni z_0$

- [L2] $K$ is a compact subset of $X$ exactly when for every set $I$ and every family $(U_i)_{i \in I}$ of open subsets of $X$ with $K \subseteq \bigcup_{i \in I} U_i$ there are $n \in \mathbb{N}$ and $i_0, \dots, i_n \in I$ with $K \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, or else $K = \varnothing$ ([[lem-compactness-is-intrinsic]], claim 3).
- - **Why the pairs and not the open sets.** A single open $U \subseteq X$ may be the first entry of many admissible pairs, and recovering a suitable $W$ from $U$ alone would be a selection over an infinite family. Indexing the cover by the *pairs* rather than by the sets is what makes the second entries come back with the indices, and it is the same device the ambient form of compactness uses ([[lem-compactness-is-intrinsic]]).
- - **The general tube lemma, for a compact factor in an arbitrary topological product, is now available in this library, on an earlier page** ([[lem-tube-lemma-for-a-compact-factor]]). The proof above is the metric special case of that general lemma, narrowed to a metric factor $X$ and written independently of it: nothing above cites the general statement, and nothing needs to, since compactness of a metric-space subset is the same notion under either reading ([[lem-compactness-is-intrinsic]]).

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- compactness ([[lem-compactness-is-intrinsic]]) returns everything that is needed.
- [L7] $\bar B(a,r)$ is closed and $B(a,r)$ is open in $(X,d_X)$; relative openness in a subspace is tracing, so a closed subset of $X$ traces to a closed subset of any metric subspace, and a closed subset of a compact metric space is compact ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[lem-compactness-is-intrinsic]], [[lem-closed-subset-of-a-compact-space-is-compact]], [[def-metric-ball]], [[def-metric-compactness]]).
- [L8] $K$ compact and $(U_i)_{i \in I}$ open in $X$ with $K \subseteq \bigcup_i U_i$ give $n \in \mathbb{N}$ and indices $i_0, \dots, i_n \in I$ with $K \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, unless $K = \varnothing$ ([[lem-compactness-is-intrinsic]], claim 3).

### `thm-comparison-of-the-three-function-space-topologies` (published-backward, page function-space-topologies)

Title: On $C(X,Y)$ with $X$ and $Y$ metric, uniform convergence is finer than compact convergence, which is finer than pointwise convergence

- [L5] A one-point subset of a metric space is compact, the one-point metric space being compact ([[def-metric-compactness]], [[lem-compactness-is-intrinsic]], [[def-isometry-and-metric-embedding]]).

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- ([[lem-compactness-is-intrinsic]]).
- [L6] $X$ is a compact subset of itself, so every family $(U_i)_{i \in I}$ of open subsets of $X$ with $X = \bigcup_i U_i$ has $n \in \mathbb{N}$ and indices $i_0, \dots, i_n \in I$ with $X = U_{i_0} \cup \dots \cup U_{i_n}$, unless $X = \varnothing$ ([[lem-compactness-is-intrinsic]], claim 3, [[def-metric-compactness]]).

### `thm-exponential-correspondence-is-continuous` (published-backward, page function-space-topologies)

Title: If $f : X \\times Z \\to Y$ is continuous then its transpose $F : Z \\to C(X,Y)$, $F(z)(x) = f(x,z)$, is continuous for the compact-open topology, with no hypothesis on $X$ beyond being metric

- [L6] The sets $S(K,V) = \{\, g \in C(X,Y) : g[K] \subseteq V \,\}$, for compact $K \subseteq X$ and open $V \subseteq Y$, are a subbasis for the compact-open topology on $C(X,Y)$ ([[def-compact-open-topology]], [[def-metric-compactness]], [[lem-compactness-is-intrinsic]]).
