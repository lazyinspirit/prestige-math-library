# Citation-precision audit — everything that cites `def-sequence-convergence-top`

## The target, as it actually stands on disk

`items/def-sequence-convergence-top.md` — definition — Convergence and cluster points of a sequence in a topological space, sequential continuity, and the sequential closure

#### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
neighbourhoods as in [[def-neighbourhood-top]].

A **sequence in $X$** is a function $x : \mathbb{N} \to X$, written $(x_k)$ with
$x_k := x(k)$. As everywhere in this library $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and a sequence is indexed from $0$
([[def-sequence]]); an index range copied from a text that starts at $1$ must be
shifted before it is used here. The **range** of $(x_k)$ is
$\{\, x_k : k \in \mathbb{N} \,\}$. Following [[def-sequence]], a property of
indices holds **eventually** if it holds for all $k \ge K$ for some
$K \in \mathbb{N}$, and **frequently** if for every $K$ it holds for some
$k \ge K$; that vocabulary is used here for sequences in an arbitrary set.

Let $(x_k)$ be a sequence in $X$ and let $p \in X$.

- $(x_k)$ **converges to $p$**, written $x_k \to p$, if for every neighbourhood
  $N$ of $p$ one has $x_k \in N$ eventually. The point $p$ is then called **a
  limit of $(x_k)$**.
- $p$ is a **cluster point** of $(x_k)$ if for every neighbourhood $N$ of $p$ one
  has $x_k \in N$ frequently.
- For $A \subseteq X$, the **sequential closure** of $A$ is
  $$\operatorname{seqcl}(A) := \{\, p \in X : x_k \to p \text{ for some sequence } (x_k) \text{ with } x_k \in A \text{ for all } k \,\} .$$
- A function $f : X \to Y$ into a topological space $Y$ is **sequentially
  continuous at $p$** if $x_k \to p$ in $X$ implies $f(x_k) \to f(p)$ in $Y$, and
  **sequentially continuous** if it is sequentially continuous at every point of
  $X$ ([[def-continuous-map-top]] for the ordinary notion).

**The notation $\lim_k x_k$ is not available at this generality, and the reason
is not fastidiousness.** In a general topological space a sequence may converge
to more than one point, so there is no function taking a convergent sequence to
"its" limit, and a symbol $\lim_k x_k$ would not denote. In the indiscrete
topology on a set with at least two points the only neighbourhood of any point is
$X$, so **every** sequence converges to **every** point; in the cofinite topology
on an infinite set every injective sequence converges to every point. Both
witnesses are on the companion page. Accordingly this library writes "$p$ is *a*
limit of $(x_k)$" and "$(x_k)$ converges to $p$", never "*the* limit" and never
$\lim_k x_k$, for a sequence in a space that has not been given a hypothesis
restoring uniqueness.

**Where the notation becomes legitimate again.** Uniqueness of limits is what
licenses the symbol, exactly as it does for sequences of reals
([[lem-limit-unique]]) and in a metric space ([[lem-metric-limits-unique]]): in a
metric space a sequence has at most one limit and $\lim_k x_k$ is unambiguous.
Every metrizable space therefore admits the notation, and so does every space in
which distinct points have disjoint neighbourhoods; where this page uses a
metrizable space, and only there, the usual notation is used without further
comment. The general reading of "$x_k \to p$" above never presupposes it.

**Convergence agrees with the metric notion on a metric topology.** For a metric
space the balls around $p$ are a neighbourhood base at $p$
([[lem-metric-ball-neighbourhood-base]]), so "eventually in every neighbourhood
of $p$" and "eventually in every ball around $p$" are the same condition, and the
latter is [[def-metric-convergence]]. The identification is carried out where
metrizable spaces are defined, later on this page.

## The 10 citing use(s), quoted verbatim from the citing items

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- [L5] A sequence converges in the topology of pointwise convergence exactly when it converges at every point ([[lem-convergence-in-the-pointwise-topology]], [[def-sequence-convergence-top]]).

### `def-frechet-urysohn-and-sequential-spaces` (published-backward, page nets-and-filters)

Title: Fréchet–Urysohn spaces and sequential spaces

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-arens-space-is-sequential-not-frechet-urysohn` (published-backward, page nets-and-filters-examples)

Title: Arens space $S_2$ is sequential but not Fréchet–Urysohn

- [L1] Closure is characterized by meeting every neighbourhood, and convergence by eventual membership in every neighbourhood ([[thm-closure-characterisation-top]], [[def-sequence-convergence-top]]).

### `ex-cocountable-closure-detected-by-a-net-not-a-sequence` (published-backward, page nets-and-filters-examples)

Title: In the cocountable topology on $\\mathbb{R}$, a closure point outside $[0,1]$ is reached by a net in $[0,1]$ but by no sequence in $[0,1]$

- [L3] A sequence converges only if it is eventually in every neighbourhood of its proposed limit ([[def-sequence-convergence-top]]).

### `ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence` (published-backward, page nets-and-filters-examples)

Title: The coordinate-reading sequence in a compact binary cube has a convergent subnet but no convergent subsequence

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-the-cocountable-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal

- most one limit ([[def-sequence-convergence-top]]).
- [A2] $x_k \to p$ means: for every neighbourhood $N$ of $p$ there is $K \in \mathbb{N}$ with $x_k \in N$ for all $k \ge K$; an open set containing $p$ is such a neighbourhood ([[def-sequence-convergence-top]]).

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- ([[def-sequence-convergence-top]]), and it converges to no other point of
- [L2] $x_k \to p$ means: for every neighbourhood $N$ of $p$ there is $K$ with $x_k \in N$ for all $k \ge K$; an open set containing $p$ is such a neighbourhood ([[def-sequence-convergence-top]]).

### `fs-every-subnet-of-a-sequence-is-a-subsequence` (published-backward, page nets-and-filters)

Title: FALSE: every subnet of a sequence is a subsequence

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-unique-sequential-limits-imply-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: a space in which every sequence has at most one limit is Hausdorff

- ([[def-sequence-convergence-top]]), then the space is Hausdorff
- **This is why [[def-sequence-convergence-top]] refuses the notation
- [A2] $x_k \to p$ means that for every neighbourhood $N$ of $p$ there is $K \in \mathbb{N}$ with $x_k \in N$ for all $k \ge K$; an open set containing $p$ is such a neighbourhood ([[def-sequence-convergence-top]]).
- - **What a countability hypothesis would change is not settled here.** Whether adding first countability to the hypothesis rescues the claim is a question this library does not address, and nothing above asserts an answer. What *is* recorded is the metrizable case, where limits are unique and the space is Hausdorff for reasons independent of each other ([[def-sequence-convergence-top]], [[def-metrizable-space]]).

### `lem-convergence-in-the-pointwise-topology` (published-backward, page function-space-topologies)

Title: A sequence converges in the topology of pointwise convergence exactly when it converges at every point

- convergence being that of [[def-sequence-convergence-top]] on both sides.
- ([[def-sequence-convergence-top]]). No choice principle is used: the only
- [L3] $g_k \to g$ in a topological space means: for every neighbourhood $N$ of $g$ there is $K \in \mathbb{N}$ with $g_k \in N$ for every $k \ge K$ ([[def-sequence-convergence-top]]).
