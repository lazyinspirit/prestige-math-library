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

# Citation-precision audit — everything that cites `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`

## The target, as it actually stands on disk

`items/lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric.md` — lemma — The finite and reverse triangle inequalities for a norm; and for $n \\ge 1$ every norm $N$ on $\\mathbb{R}^n$ satisfies $N(x) \\le C\\lVert x\\rVert_1$ and is Lipschitz, hence continuous, for $d_2$

#### Statement

**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about
$\mathbb{R}^{n}$ with $n \ge 1$.**

1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over
   $\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every
   $p \in \mathbb{N}$ and every list $u : p \to V$
   ([[def-linear-combination-and-span]]),
   $$N\Bigl(\sum_{j<p} u_j\Bigr) \;\le\; \sum_{j<p} N(u_j),$$
   and for all $u, w \in V$,
   $$\bigl|N(u) - N(w)\bigr| \;\le\; N(u - w).$$

Now let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^{n}$ carry the norms of
[[def-p-norms-on-rn]] and write $\iota$ for the canonical natural
([[def-canonical-natural]]).

2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on
   $\mathbb{R}^{n}$ and put $C := \max\{\, N(e_k) : k<n \,\}$, a maximum over a
   nonempty finite set of reals ([[lem-standard-basis-of-f-n]],
   [[lem-finite-set-has-max]]). Then $C \ge 0$ and
   $$N(x) \;\le\; C\,\lVert x\rVert_1 \qquad \text{for every } x \in \mathbb{R}^{n}.$$
3. **The comparison chain.** For every $x \in \mathbb{R}^{n}$,
   $$\lVert x\rVert_\infty \;\le\; \lVert x\rVert_2 \;\le\; \lVert x\rVert_1 \;\le\; \iota(n)\,\lVert x\rVert_\infty , \qquad \lVert x\rVert_1 \;\le\; \sqrt{\iota(n)}\;\lVert x\rVert_2 .$$
   In particular $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_2$ and
   $\lVert\cdot\rVert_\infty$ are pairwise equivalent norms on $\mathbb{R}^{n}$,
   with the constants displayed ([[def-equivalent-norms]]).
4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in
   clause 2, $N : (\mathbb{R}^{n}, d_2) \to (\mathbb{R}, d_{\mathbb{R}})$ is
   Lipschitz with constant $C\sqrt{\iota(n)}$
   ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]],
   [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and
   continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]).

**Where $n \ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to
exist, and clause 3 mentions $\lVert\cdot\rVert_\infty$; at $n = 0$ each is a
maximum over the empty index set and does not exist, exactly as in
[[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis
on the dimension and no hypothesis on the space.

## The 5 citing use(s), quoted verbatim from the citing items

### `cor-euclidean-closed-balls-and-spheres-are-compact` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge1$, every Euclidean closed ball and every Euclidean sphere of positive radius is compact

- [L2] The Euclidean norm is continuous and satisfies $|\lVert u\rVert_2-\lVert v\rVert_2|\le\lVert u-v\rVert_2$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

### `lem-pseudocompact-euclidean-subset-is-bounded` (published-backward, page the-topology-of-euclidean-space)

Title: A pseudocompact subset of $\\mathbb{R}^n$ is bounded

- [L1] The Euclidean norm $x\mapsto\lVert x\rVert_2$ is continuous from $(\mathbb{R}^n,d_2)$ to $\mathbb{R}$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

### `lem-pseudocompact-euclidean-subset-is-closed` (published-backward, page the-topology-of-euclidean-space)

Title: A pseudocompact subset of $\\mathbb{R}^n$ is closed

- [L3] The reverse triangle inequality gives $|\lVert u\rVert_2-\lVert v\rVert_2|\le\lVert u-v\rVert_2$, and the Euclidean norm is continuous ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

### `lem-radial-normalisation-is-continuous` (published-backward, page the-topology-of-euclidean-space)

Title: Radial normalisation $x\\mapsto x/\\lVert x\\rVert_2$ is continuous on $\\mathbb{R}^n\\setminus\\{0\\}$

- [L1] The Euclidean norm is continuous and satisfies $|\lVert u\rVert_2-\lVert v\rVert_2|\le\lVert u-v\rVert_2$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

### `thm-radial-straight-line-map-on-punctured-rn` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge1$, the map $H(x,t)=((1-t)+t/\\lVert x\\rVert_2)x$ is continuous on $(\\mathbb{R}^n\\setminus\\{0\\})\\times[0,1]$, starts at $x$, ends at radial normalisation, fixes the unit sphere, and never reaches $0$

- [L3] The Euclidean norm is positive away from $0$ and the unit sphere consists of its norm-one points ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[def-euclidean-spheres-and-closed-balls]]).


---

# Citation-precision audit — everything that cites `lem-subset-of-countable`

## The target, as it actually stands on disk

`items/lem-subset-of-countable.md` — lemma — Every subset of an at most countable set is at most countable

#### Statement

Let $A$ be at most countable ([[def-countable]]) and let $B \subseteq A$. Then
$B$ is at most countable.

The proof establishes the sharper statement about subsets of $\mathbb{N}$ from
which this follows: **a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above, and countably infinite if it is not.**

**No choice principle is used.** This is the point of the lemma rather than a
footnote to it. The enumeration of an unbounded $S \subseteq \mathbb{N}$ is built
by always taking the *least* element of $S$ above the previous one, and the least
element of a nonempty set of naturals is canonical
([[thm-well-ordering-principle]]): it is determined by $S$, not selected from it.
Replacing "least" by "some" would turn the construction into an appeal to
dependent choice.

## The 5 citing use(s), quoted verbatim from the citing items

### `ex-the-cocountable-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal

- [L2] The range of a sequence is nonempty and at most countable, and a subset of an at most countable set is at most countable ([[lem-countable-iff-surjection-from-n]], [[lem-subset-of-countable]]).

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L8] Assuming the Axiom of Countable Choice, a union over $\mathbb{N}$ of at most countable sets is at most countable; a subset of an at most countable set is at most countable; and $\mathbb{R}$ is uncountable ([[thm-countable-union-of-countable]], [[def-countable-choice]], [[lem-subset-of-countable]], [[thm-r-uncountable]], [[def-countable]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L5] Every nondegenerate open interval of $\mathbb{R}$ is uncountable, $\mathbb{Q}$ is at most countable, and a subset of an at most countable set is at most countable ([[cor-interval-uncountable]], [[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]]).

### `fs-unique-sequential-limits-imply-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: a space in which every sequence has at most one limit is Hausdorff

- [L1] The range $\{\, x_k : k \in \mathbb{N} \,\}$ of a sequence is nonempty and at most countable, the sequence itself being a surjection of $\mathbb{N}$ onto it; and a subset of an at most countable set is at most countable ([[lem-countable-iff-surjection-from-n]], [[lem-subset-of-countable]], [[def-countable]]).

### `thm-rational-points-and-boxes-in-rn` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{Q}^n$ is a countable dense subset of $\\mathbb{R}^n$, and rational open boxes form a countable basis

- [L5] Finite choices may be assembled into a tuple, and a subset of an at most countable set is at most countable ([[lem-finite-choice]], [[lem-subset-of-countable]]).


---

# Citation-precision audit — everything that cites `thm-metric-open-set-algebra`

## The target, as it actually stands on disk

`items/thm-metric-open-set-algebra.md` — theorem — Arbitrary unions and finite intersections of open sets are open, open balls are open and closed balls are closed

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), with open and closed sets
as in [[def-metric-topology]] and balls as in [[def-metric-ball]]. Then:

1. **Balls are open.** $B(x,r)$ is open, for every $x \in X$ and every $r > 0$.
2. **Arbitrary unions.** If $\mathcal{U}$ is any collection of open subsets of
   $X$, then $\bigcup \mathcal{U}$ is open.
3. **Finite intersections.** If $n \ge 1$ and $U_0, \dots, U_{n-1}$ are open,
   then $U_0 \cap \dots \cap U_{n-1}$ is open.
4. **Closed balls are closed.** $\bar B(x,r)$ is closed, for every $x \in X$ and
   every $r > 0$.

Together with the fact that $\emptyset$ and $X$ are open, recorded already in
[[def-metric-topology]], claims 2 and 3 say that $\mathcal{T}_d$ has exactly the
closure properties that the word *topology* names.

## The 5 citing use(s), quoted verbatim from the citing items

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L2] A union of two closed subsets of a metric space is closed, its complement being an intersection of two open sets; iterating covers any finite list, and $\varnothing$ is closed ([[thm-metric-open-set-algebra]], [[def-metric-topology]]).

### `lem-compact-closed-balls-in-a-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: In a locally compact metric space every point has arbitrarily small compact closed balls, hence a neighbourhood base of compact sets

- ball is already closed ([[thm-metric-open-set-algebra]]). No choice principle is
- [L1] $\bar B(x,r)$ is closed in $(X,d)$ for every real $r > 0$, and a set is closed exactly when its complement is open ([[thm-metric-open-set-algebra]], [[def-metric-topology]]).
- - **Where local compactness is spent.** Once, at step 1.1, to produce a single compact set with nonempty interior around $x$. Everything after that is the hereditary behaviour of compactness: a closed subset of a compact space is compact ([[lem-closed-subset-of-a-compact-space-is-compact]]), and closed balls are closed ([[thm-metric-open-set-algebra]]).

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L7] $\bar B(a,r)$ is closed and $B(a,r)$ is open in $(X,d_X)$; relative openness in a subspace is tracing, so a closed subset of $X$ traces to a closed subset of any metric subspace, and a closed subset of a compact metric space is compact ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[lem-compactness-is-intrinsic]], [[lem-closed-subset-of-a-compact-space-is-compact]], [[def-metric-ball]], [[def-metric-compactness]]).
- [L9] The minimum of a two-element set of reals exists and is one of the two elements; balls are open and $y \in B(y,s)$ ([[lem-finite-set-has-max]], [[def-max-min]], [[thm-metric-open-set-algebra]], [[def-metric-ball]], [[def-metrizable-space]]).

### `thm-evaluation-is-continuous-on-a-locally-compact-metric-domain` (published-backward, page function-space-topologies)

Title: If $X$ is a locally compact metric space then the evaluation map is continuous for the compact-open topology

- [L5] A subset $W \subseteq X$ is open exactly when each of its points has a ball around it inside $W$; balls are open; $B(x,r) \subseteq \bar B(x,r)$; and $\bar B(x,r) \subseteq B(x,s)$ whenever $0 < r < s$ ([[def-metric-topology]], [[thm-metric-open-set-algebra]], [[def-metric-ball]], [[def-metrizable-space]]).

### `thm-metric-spaces-are-completely-normal` (published-backward, page separation-axioms)

Title: In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

- [L3] Open balls are open and an arbitrary union of open sets is open; $\varnothing$ and $X$ are open ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[def-topological-space]]).


---

# Citation-precision audit — everything that cites `lem-distance-to-set-is-lipschitz`

## The target, as it actually stands on disk

`items/lem-distance-to-set-is-lipschitz.md` — lemma — $|d(x,A) - d(y,A)| \\le d(x,y)$, so the distance to a fixed nonempty set is $1$-Lipschitz

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ be
nonempty and let $x, y \in X$. Then

$$|d(x,A) - d(y,A)| \le d(x,y),$$

with $d(\cdot,A)$ the distance to a nonempty set ([[def-metric-bounded-diameter]]).
Thus the real-valued function $u \mapsto d(u,A)$ changes by at most $d(u,v)$
between $u$ and $v$: it is **$1$-Lipschitz**.

## The 5 citing use(s), quoted verbatim from the citing items

### `ex-a-uniformly-equicontinuous-family-of-lipschitz-functions` (published-backward, page function-space-topologies-examples)

Title: The $1$-Lipschitz maps of a metric space into $\\mathbb{R}$ form a uniformly equicontinuous family, and the distance functions $x \\mapsto d(x,A)$ all belong to it

- [L3] For nonempty $A \subseteq X$ the function $x \mapsto d(x,A)$ is defined and satisfies $|d(x,A) - d(x',A)| \le d(x,x')$ ([[lem-distance-to-set-is-lipschitz]], [[def-metric-bounded-diameter]]).

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (published-backward, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- [L1] In a metric space every nonempty closed set $A$ satisfies $A = Z(d(\cdot,A))$ and $A = \bigcap_n \{x : d(x,A) < 1/(n+1)\}$, and $d(\cdot,A)$ is continuous ([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]], claims 1 and 2, [[lem-distance-to-set-is-lipschitz]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L6] For nonempty $A \subseteq \mathbb{Q}$ the map $s \mapsto d(s,A)$ is $1$-Lipschitz, so $s \mapsto c\, d(s,A)$ is Lipschitz with constant $c$ for a real $c > 0$, hence continuous ([[lem-distance-to-set-is-lipschitz]], [[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-abs-value]]).
- - **The bump function is built from a distance and needs no maximum or truncation.** Taking $g(s) = (2/\eta)\,d(s,A)$ with $A$ the set of rationals at distance at least $\eta$ from $q$ makes $g$ Lipschitz by [[lem-distance-to-set-is-lipschitz]] alone, vanish on $A$ and hence on $K$, and take a value at least $2$ at $q$. Nothing about its exact shape matters.

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L5] For nonempty $A \subseteq Y$ the distance $y \mapsto d(y,A)$ is defined, is $1$-Lipschitz and hence continuous, and satisfies $d(y,A) \le d(y,z)$ for every $z \in A$ ([[def-metric-bounded-diameter]], [[lem-distance-to-set-is-lipschitz]], [[thm-metric-regularity-hierarchy]], [[def-lipschitz-holder-contraction]], [[def-infimum]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- [L2] $|d(x,S) - d(y,S)| \le d(x,y)$ for nonempty $S$ ([[lem-distance-to-set-is-lipschitz]]).
