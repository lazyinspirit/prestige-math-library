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

# Citation-precision audit — everything that cites `cor-connected-subsets-of-the-line`

## The target, as it actually stands on disk

`items/cor-connected-subsets-of-the-line.md` — corollary — The connected subspaces of $\\mathbb{R}$ with its usual topology are exactly the order-convex subsets, the published characterisation transported by the identification of the two descriptions of \"open in $\\mathbb{R}$\"

#### Statement

Give $\mathbb{R}$ its usual topology, the metric topology of
$d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]],
[[def-metric-topology]], [[def-metrizable-space]]), and let $E \subseteq
\mathbb{R}$ carry the subspace topology ([[def-subspace-topology-top]]). Then $E$
is a connected subset of $\mathbb{R}$ ([[def-connected-space]]) if and only if
$E$ is **order-convex** ([[def-interval]],
[[def-order-topology-on-a-linearly-ordered-set]]), that is

$$x, z \in E \text{ and } x \le w \le z \;\Longrightarrow\; w \in E .$$

In particular each of the nine interval forms of [[def-interval]] is connected,
and so are $\varnothing$ and every singleton.

**What has to be checked, and it is not the mathematics.** The characterisation
itself is the published [[thm-connected-subsets-of-r-are-intervals]], which is
stated for the connectedness of [[def-connected-r]] — a condition phrased with
the open sets of [[def-open-and-closed-in-r]] and the closure of
[[def-interior-closure-boundary-r]]. The present corollary says the same thing
for the connectedness of [[def-connected-space]] in the topological space
$\mathbb{R}$. What licenses the transport is that the two descriptions of "open
in $\mathbb{R}$" are the same condition word for word, which is unfolded in the
proof rather than quoted.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-punctured-line-versus-punctured-plane` (published-backward, page the-topology-of-euclidean-space-examples)

Title: $GL_1(\\mathbb{R})=\\mathbb{R}\\setminus\\{0\\}$ is disconnected, whereas $\\mathbb{R}^2\\setminus\\{0\\}$ is polygonally connected

- The invertible $1\times1$ real matrices are the nonzero real numbers, so $GL_1(\mathbb R)=\mathbb R\setminus\{0\}$. This set is disconnected: it contains $-1$ and $1$ but not the intermediate point $0$, so it is not order-convex and cannot be connected by [[cor-connected-subsets-of-the-line]]. In contrast, [[lem-punctured-rn-is-polygonally-connected]] gives polygonal connectedness of $\mathbb R^2\setminus\{0\}$. Connectedness is understood through [[def-connected-space]].

### `thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{R}$ is not homeomorphic to $\\mathbb{R}^n$ for any $n\\ge2$

- [L3] A connected subset of $\mathbb R$ is order-convex ([[cor-connected-subsets-of-the-line]]).


---

# Citation-precision audit — everything that cites `lem-closed-subset-of-a-compact-space-is-compact`

## The target, as it actually stands on disk

`items/lem-closed-subset-of-a-compact-space-is-compact.md` — lemma — A closed subset of a compact metric space is compact

#### Statement

Let $(X,d)$ be a compact metric space ([[def-metric-compactness]],
[[def-metric-space]]) and let $F \subseteq X$ be closed in $X$
([[def-metric-topology]]). Then $F$ is a compact subset of $X$: the metric
subspace $(F, d_F)$ is a compact metric space
([[def-isometry-and-metric-embedding]]).

No choice principle is used.

## The 2 citing use(s), quoted verbatim from the citing items

### `lem-compact-closed-balls-in-a-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: In a locally compact metric space every point has arbitrarily small compact closed balls, hence a neighbourhood base of compact sets

- [L4] A closed subset of a compact metric space is a compact subset of it ([[lem-closed-subset-of-a-compact-space-is-compact]]).
- - **Where local compactness is spent.** Once, at step 1.1, to produce a single compact set with nonempty interior around $x$. Everything after that is the hereditary behaviour of compactness: a closed subset of a compact space is compact ([[lem-closed-subset-of-a-compact-space-is-compact]]), and closed balls are closed ([[thm-metric-open-set-algebra]]).

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L7] $\bar B(a,r)$ is closed and $B(a,r)$ is open in $(X,d_X)$; relative openness in a subspace is tracing, so a closed subset of $X$ traces to a closed subset of any metric subspace, and a closed subset of a compact metric space is compact ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[lem-compactness-is-intrinsic]], [[lem-closed-subset-of-a-compact-space-is-compact]], [[def-metric-ball]], [[def-metric-compactness]]).
- - **The second half is a covering argument and is where the compact-open topology earns its subbasis.** A single set $S(K,V)$ cannot control $g$ uniformly on $K$; what does is a finite family of sets $S(K_j,V_j)$ on which $g$ varies by less than a quarter of the slack. That the pieces $K_j$ are again compact is [[lem-closed-subset-of-a-compact-space-is-compact]] applied inside $K$.


---

# Citation-precision audit — everything that cites `thm-continuous-image-of-a-compact-space-is-compact`

## The target, as it actually stands on disk

`items/thm-continuous-image-of-a-compact-space-is-compact.md` — theorem — The image of a compact metric space under a continuous map is compact, and so is the image of any compact subset

#### Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be continuous ([[def-metric-continuity]]). Then:

1. If $(X,d_X)$ is compact ([[def-metric-compactness]]), the image
   $f[X] \subseteq Y$ is a compact subset of $Y$.
2. More generally, if $K \subseteq X$ is a compact subset of $X$, then $f[K]$ is
   a compact subset of $Y$.

No choice principle is used.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-compact-open-topology` (published-backward, page function-space-topologies)

Title: The compact-open topology on $C(X,Y)$ for a metric domain $X$, with subbasis $S(K,V) = \\{f : f[K] \\subseteq V\\}$

- ([[thm-continuous-image-of-a-compact-space-is-compact]]), which is false for a

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L4] The continuous image of a compact subset is compact ([[thm-continuous-image-of-a-compact-space-is-compact]], claim 2).


---

# Citation-precision audit — everything that cites `lem-metric-nonnegativity`

## The target, as it actually stands on disk

`items/lem-metric-nonnegativity.md` — lemma — Nonnegativity of a metric is a consequence of the other axioms, not an axiom

#### Statement

Let $X$ be a set and let $p : X \times X \to \mathbb{R}$ satisfy the reflexivity
axiom (M1') $p(x,x) = 0$ and the symmetry axiom (M2) $p(x,y) = p(y,x)$ of
[[def-metric-space]]. Then:

1. If $p$ satisfies the triangle inequality (M3), then $p(x,y) \ge 0$ for all
   $x, y \in X$.
2. If $p$ satisfies the strong triangle inequality (M3'), then
   $p(x,y) \ge 0$ for all $x, y \in X$.

In particular every metric, every pseudometric and every ultrametric
([[def-metric-space]]) takes only nonnegative values. Nonnegativity is therefore
a theorem about the axiom list this library uses, not a fourth axiom, and no
statement on this page needs to assume it separately.

## The 2 citing use(s), quoted verbatim from the citing items

### `lem-uniform-metric-on-a-function-space` (published-backward, page function-space-topologies)

Title: For a nonempty set $X$ and a metric space $(Y,d)$ the uniform metric $\\bar\\rho(f,g) = \\sup_{x} \\min\\{d(f(x),g(x)), 1\\}$ is a metric on $Y^{X}$

- [L1] $\bar d = \min\{d,1\}$ is a metric on $Y$: it satisfies (M1), (M2) and (M3) of [[def-metric-space]], and $0 \le \bar d(u,v) \le 1$ for all $u,v$ ([[lem-bounded-remetrisation]], claims 1 and 2, [[lem-metric-nonnegativity]]).

### `thm-metric-spaces-are-completely-normal` (published-backward, page separation-axioms)

Title: In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

- [L1] For nonempty $S \subseteq X$ and $x \in X$ the distance $d(x,S) = \inf\{\, d(x,s) : s \in S \,\}$ exists in $\mathbb{R}$, is a lower bound of that set, and satisfies $d(x,S) \ge 0$ ([[def-metric-bounded-diameter]], [[def-infimum]], [[thm-infimum-property]], [[lem-metric-nonnegativity]]).
