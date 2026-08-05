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

# Citation-precision audit — everything that cites `thm-compactness-agrees-with-metric-compactness`

## The target, as it actually stands on disk

`items/thm-compactness-agrees-with-metric-compactness.md` — theorem — For a metric space with its metric topology, compactness in the topological sense is compactness in the metric sense, and the two notions of compact subset coincide

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $\mathcal{T}_d$ be
its metric topology ([[def-metric-topology]]), so that $(X, \mathcal{T}_d)$ is a
topological space ([[def-topological-space]]) and is metrizable
([[def-metrizable-space]]). Then:

1. $(X,d)$ is a compact metric space ([[def-metric-compactness]]) **if and only
   if** $(X, \mathcal{T}_d)$ is a compact topological space
   ([[def-compact-space]]).
2. For every $A \subseteq X$: $A$ is a compact subset of the metric space
   $(X,d)$ if and only if $A$ is a compact subset of the topological space
   $(X, \mathcal{T}_d)$, the two readings of "compact subset" being the metric
   subspace $(A, d_A)$ ([[def-isometry-and-metric-embedding]]) and the topological
   subspace $(A, (\mathcal{T}_d)_A)$ ([[def-subspace-topology-top]]).

**Nothing here is a coincidence and nothing is transported.** The open-cover
condition of [[def-metric-compactness]] quantifies over families of subsets open
in $(X,d)$, and by [[def-metric-topology]] those are exactly the members of
$\mathcal{T}_d$; so the two conditions are not merely equivalent, they are the
same condition written twice. No choice principle is used.

## The 3 citing use(s), quoted verbatim from the citing items

### `cor-euclidean-compactness-equivalence-chart` (published-backward, page the-topology-of-euclidean-space)

Title: Assuming $\\mathrm{AC}_\\omega$ and $\\mathrm{DC}$, compactness, sequential compactness, countable compactness, limit point compactness, completeness and total boundedness, pseudocompactness, closedness and boundedness, and the extreme-value property are equivalent for nonempty subsets of $\\mathbb{R}^n$ with $n\\ge1$

- [L3] The topological and metric readings of compactness for a Euclidean subspace agree ([[thm-compactness-agrees-with-metric-compactness]]); the named topological variants have the meanings of [[def-compactness-variants]].

### `def-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: Locally compact metric space: every point has a compact neighbourhood

- [[thm-compactness-agrees-with-metric-compactness]], which discharges the

### `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values` (published-backward, page the-topology-of-euclidean-space)

Title: For a nonempty subset of $\\mathbb{R}^n$ with $n\\ge1$, compactness, closedness and boundedness, pseudocompactness, and attainment of extrema by every continuous real-valued function are equivalent

- [L5] Compactness for the Euclidean metric and for its metric topology is the same condition ([[thm-compactness-agrees-with-metric-compactness]]).


---

# Citation-precision audit — everything that cites `thm-componentwise-limits-and-continuity`

## The target, as it actually stands on disk

`items/thm-componentwise-limits-and-continuity.md` — theorem — A vector-valued function has a limit, or is continuous, if and only if each of its components does; with the algebra of continuous vector-valued functions

#### Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, with vector-valued functions, their
components $f_i = \pi_i \circ f$, their limits and their continuity as in
[[def-vector-valued-functions-limits-and-continuity]].

1. **Continuity is componentwise.** Let $(X,d_X)$ be a metric space, $A \subseteq X$,
   $f : A \to \mathbb{R}^{m}$ and $a \in A$. Then $f$ is continuous at $a$ if and
   only if every component $f_i : A \to \mathbb{R}$ $(i<m)$ is continuous at $a$.
2. **Limits are componentwise.** Let $A \subseteq \mathbb{R}$, let $c$ be a limit
   point of $A$ ([[def-limit-point-r]]), let $f : A \to \mathbb{R}^{m}$ and let
   $L \in \mathbb{R}^{m}$. Then $\lim_{x\to c} f(x) = L$ if and only if
   $\lim_{x\to c} f_i(x) = L_i$ for every $i<m$ ([[def-function-limit]]).
3. **Algebra.** Let $(X,d_X)$, $A$, $a$ be as in clause 1, let
   $f, g : A \to \mathbb{R}^{m}$ be continuous at $a$ and let $\lambda \in \mathbb{R}$.
   Then $f + g$ and $\lambda f$ (defined pointwise) are continuous at $a$; the
   real-valued function $x \mapsto \langle f(x), g(x)\rangle$ is continuous at
   $a$ ([[def-euclidean-inner-product]]); and for every norm $N$ on
   $\mathbb{R}^{m}$ the real-valued function $x \mapsto N(f(x))$ is continuous at
   $a$ ([[def-norm-and-normed-space]]).

**Where $m \ge 1$ is spent.** The "if" direction of clauses 1 and 2 divides
$\varepsilon$ by $\iota(m)$, which requires $\iota(m) \ne 0$; and clause 3's last
part quotes a bound available only for $m \ge 1$. The "only if" directions hold
for every $m$ but say nothing at $m = 0$, there being no index $i < 0$.

## The 3 citing use(s), quoted verbatim from the citing items

### `lem-euclidean-polygonal-paths-are-continuous` (published-backward, page the-topology-of-euclidean-space)

Title: A finite concatenation of straight segments in $\\mathbb{R}^n$ is a continuous path

- [L3] A map into $\mathbb{R}^n$ is continuous if and only if all of its coordinate functions are continuous ([[thm-componentwise-limits-and-continuity]], clause 1).

### `lem-radial-normalisation-is-continuous` (published-backward, page the-topology-of-euclidean-space)

Title: Radial normalisation $x\\mapsto x/\\lVert x\\rVert_2$ is continuous on $\\mathbb{R}^n\\setminus\\{0\\}$

- [L2] Componentwise continuity gives continuity into $\mathbb R^n$, and the subspace criterion gives continuity into a subspace when the image lies there ([[thm-componentwise-limits-and-continuity]], [[def-vector-valued-functions-limits-and-continuity]]).

### `thm-radial-straight-line-map-on-punctured-rn` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge1$, the map $H(x,t)=((1-t)+t/\\lVert x\\rVert_2)x$ is continuous on $(\\mathbb{R}^n\\setminus\\{0\\})\\times[0,1]$, starts at $x$, ends at radial normalisation, fixes the unit sphere, and never reaches $0$

- [L4] Sums, products, and quotients with nowhere-zero denominator of continuous real-valued functions are continuous, and a vector-valued map is continuous exactly when its coordinate functions are continuous ([[thm-algebra-of-continuous-functions]], [[thm-componentwise-limits-and-continuity]]).


---

# Citation-precision audit — everything that cites `lem-standard-basis-of-f-n`

## The target, as it actually stands on disk

`items/lem-standard-basis-of-f-n.md` — lemma — The standard list $e : n \\to F^{n}$ with $e_i(i) = 1_F$ and $e_i(j) = 0_F$ for $j \\ne i$ is an ordered basis of $F^{n}$; hence $\\dim_F F^{n} = n$, and $F^{0}$ is the zero space with basis $\\varnothing$ and dimension $0$

#### Statement

Let $F$ be a field ([[def-field]]), let $n \in \mathbb{N}$ and let $F^{n}$ be the
function space on the von Neumann natural $n = \{0, \dots, n-1\}$, with the
pointwise operations ([[def-function-space]], [[def-natural-numbers]],
[[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector**
$e_i \in F^{n}$ by

$$e_i(i) = 1_F, \qquad e_i(j) = 0_F \ \text{ for } j < n \text{ with } j \ne i .$$

Then:

1. **Finite sums in a function space are pointwise.** For every set $X$, every
   $p \in \mathbb{N}$, every list $u : p \to F^{X}$ and every $j \in X$,
   $$\Bigl(\sum_{k<p} u_k\Bigr)(j) \;=\; \sum_{k<p} u_k(j),$$
   the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary
   $X$ because the companion page needs it at $X = \mathbb{N}$.)
2. $e : n \to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in
   particular $e$ is injective and its image $e[n] = \{\, e_i : i < n \,\}$ is a
   basis of $F^{n}$ with $e[n] \approx n$ ([[def-equinumerous]]);
3. for every $\lambda : n \to F$ and every $j < n$,
   $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \lambda_j$; equivalently the
   coordinate list of $x \in F^{n}$ with respect to the ordered basis $e$
   ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is
   $i \mapsto x(i)$;
4. $F^{n}$ is finite-dimensional over $F$ with $\dim_F F^{n} = n$
   ([[def-dimension]]);
5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function,
   so $F^{0}$ is the zero space, the empty list is its ordered basis,
   $\varnothing$ is its basis and $\dim_F F^{0} = 0$.

Every index runs from $0$, so the coordinates of an element of $F^{n}$ are
$x_0, \dots, x_{n-1}$ and no statement above is restricted to $n \ge 1$.

## The 3 citing use(s), quoted verbatim from the citing items

### `cex-closed-unbounded-euclidean-subset-not-compact` (published-backward, page the-topology-of-euclidean-space-examples)

Title: $\\mathbb{R}^n$ is closed and unbounded and is not compact for $n\\ge1$

- [L2] The standard vector $e_0$ has Euclidean norm $1$ ([[lem-standard-basis-of-f-n]]).

### `cex-open-bounded-euclidean-subset-not-compact` (published-backward, page the-topology-of-euclidean-space-examples)

Title: The open unit ball in $\\mathbb{R}^n$ is bounded and not compact

- [L2] The unit vector $e_0$ exists and has Euclidean norm $1$ ([[lem-standard-basis-of-f-n]]).

### `lem-punctured-rn-is-polygonally-connected` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge2$, the punctured space $\\mathbb{R}^n\\setminus\\{0\\}$ is polygonally connected

- [L1] The standard unit vectors form a basis of $\mathbb R^n$, so a one-dimensional span is a proper subspace when $n\ge2$ ([[lem-standard-basis-of-f-n]], [[def-linear-combination-and-span]]).


---

# Citation-precision audit — everything that cites `thm-metric-continuity-characterisations`

## The target, as it actually stands on disk

`items/thm-metric-continuity-characterisations.md` — theorem — For a map of metric spaces the following agree: $\\varepsilon$-$\\delta$ continuity everywhere, preimages of open sets are open, preimages of closed sets are closed, sequential continuity, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$

#### Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function, with images and preimages written $f[\,\cdot\,]$
and $f^{-1}[\,\cdot\,]$ ([[def-injection-surjection-bijection]]). The following
five statements are equivalent.

- **(a)** $f$ is continuous at every point of $X$ in the $\varepsilon$-$\delta$
  sense ([[def-metric-continuity]]).
- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$
  ([[def-metric-topology]]).
- **(c)** $f^{-1}[G]$ is closed in $X$ for every closed $G \subseteq Y$.
- **(d)** $f$ is **sequentially continuous**: whenever $x_k \to x$ in $(X,d_X)$,
  also $f(x_k) \to f(x)$ in $(Y,d_Y)$ ([[def-metric-convergence]]).
- **(e)** $f[\overline{A}] \subseteq \overline{f[A]}$ for every $A \subseteq X$
  ([[def-metric-interior-closure-boundary]]).

**Where choice is used.** Only the implication (d) $\Rightarrow$ (e) uses a
choice principle, and it uses it only through
[[thm-metric-sequential-closure]], whose forward direction spends the Axiom of
Countable Choice ([[def-countable-choice]]). The cycle
(a) $\Rightarrow$ (b) $\Rightarrow$ (c) $\Rightarrow$ (e) $\Rightarrow$ (a) and
the implication (a) $\Rightarrow$ (d) are choice free.

## The 3 citing use(s), quoted verbatim from the citing items

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- [L4] Continuity of $h : X \to \mathbb{R}$ at $a$: for every real $\eta > 0$ there is a real $\delta > 0$ with $|h(x) - h(a)| < \eta$ whenever $d(x,a) < \delta$ ([[def-metric-continuity]], [[thm-metric-continuity-characterisations]], [[lem-real-line-is-a-metric-space]], [[def-abs-value]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- [L3] A map between metric spaces satisfying an inequality $|g(x) - g(y)| \le L\, d(x,y)$ with $L > 0$ is continuous in the $\varepsilon$-$\delta$ sense, by $\delta := \varepsilon / L$, and is therefore continuous as a map of topological spaces ([[def-metric-continuity]], [[thm-metric-continuity-characterisations]], clause (b), [[def-metrizable-space]]).
