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

# Citation-precision audit — everything that cites `thm-r-uncountable`

## The target, as it actually stands on disk

`items/thm-r-uncountable.md` — theorem — $\\mathbb{R}$ is uncountable (Cantor's nested intervals, 1874)

#### Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).
Then $\mathbb{R}$ is **uncountable** ([[def-countable]]): there is no surjection
$\mathbb{N} \to \mathbb{R}$, so $\mathbb{R}$ is neither finite nor countably
infinite.

The proof is Cantor's original argument of 1874, not the decimal diagonal.
Assuming a surjection $f : \mathbb{N} \to \mathbb{R}$, one builds nested closed
intervals $[a_n, b_n]$ with $a_n < b_n$ and $f(n) \notin [a_{n+1}, b_{n+1}]$, and
then $\sup\{a_n\}$ is a real number that $f$ misses. **The decimal diagonal is
deliberately avoided**: decimal expansions are infinite series, which this
library has not yet constructed, so a diagonal proof here would rest on machinery
that does not exist. The diagonal argument survives in its non-circular form, on
power sets, as Cantor's theorem earlier on this page; see the remarks below.

**The construction uses no choice, and that is what the thirds are for.** Given
$[a_n, b_n]$ of length $d$, its three closed thirds
$[a_n, a_n + d/3]$, $[a_n + d/3, a_n + 2d/3]$, $[a_n + 2d/3, b_n]$ cannot all
contain $f(n)$, because the first and the third are disjoint; the rule takes the
**first one in that fixed order** which does not contain $f(n)$. That is a
definition by cases, so the whole construction is a single application of the
recursion theorem ([[thm-recursion]]) to one explicitly given function. A version
of the argument that says "pick a third avoiding $f(n)$" would be using dependent
choice, silently and unnecessarily.

## The 12 citing use(s), quoted verbatim from the citing items

### `ex-cardinal-functions-of-a-one-point-compactification` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: The one-point compactification of the discrete real line is compact and Lindelöf but is neither first countable nor separable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-cardinal-functions-of-the-lower-limit-line` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: For the lower-limit line, $\\chi=d=L=c=\\aleph_0$ and $w=2^{\\aleph_0}$ under choice

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-countability-profile-of-the-lower-limit-plane` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: Assuming choice, the lower-limit plane is first countable, separable, and ccc, but not second countable or Lindelöf

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-the-cocountable-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal

- [L4] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]), so in particular it has at least three distinct points.

### `fs-every-t1-space-is-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: every $T_1$ space is Hausdorff

- [L3] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]), and every finite set is at most countable ([[def-countable]]); so $\mathbb{R}$ is not finite.
- - **Any infinite set would do.** $\mathbb{R}$ is chosen because its infinitude is already a theorem here ([[thm-r-uncountable]]); nothing in the argument uses the order or the arithmetic of $\mathbb{R}$.

### `fs-first-countable-spaces-are-second-countable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: every first countable space is second countable

- [L3] The real line is uncountable ([[thm-r-uncountable]]).

### `fs-lindelofness-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: Lindelöfness is hereditary

- [L3] The real line is uncountable and every subset of a discrete space is open ([[thm-r-uncountable]], [[def-standard-topologies]]).

### `fs-lindelofness-is-productive` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, refuted: Lindelöfness is productive

- [L2] The rationals are at most countable and dense in the real line, the real line is uncountable, and a set injecting into an at most countable set is at most countable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]], [[lem-countable-iff-surjection-from-n]]).

### `fs-separability-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: separability is hereditary

- [L2] The rational numbers are at most countable and dense in the real line, and the real line is uncountable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]]).

### `fs-separable-spaces-are-second-countable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: every separable space is second countable

- [L1] The rational numbers are at most countable and dense in the real line, and the real line is uncountable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]]).

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L8] Assuming the Axiom of Countable Choice, a union over $\mathbb{N}$ of at most countable sets is at most countable; a subset of an at most countable set is at most countable; and $\mathbb{R}$ is uncountable ([[thm-countable-union-of-countable]], [[def-countable-choice]], [[lem-subset-of-countable]], [[thm-r-uncountable]], [[def-countable]]).

### `fs-unique-sequential-limits-imply-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: a space in which every sequence has at most one limit is Hausdorff

- [L3] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]).


---

# Citation-precision audit — everything that cites `thm-closure-characterisation-top`

## The target, as it actually stands on disk

`items/thm-closure-characterisation-top.md` — theorem — A point lies in the closure of $A$ iff every basic neighbourhood of it meets $A$; the closure is the smallest closed superset and equals $A$ together with its derived set

#### Statement

Let $(X, \mathcal{T})$ be a topological space, let $\mathcal{B}$ be a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]), let $A \subseteq X$ and let
$x \in X$. Closure, derived set and limit points are as in
[[def-interior-closure-boundary-top]]. Then:

1. The following four conditions are equivalent.
   - (a) $x \in \overline{A}$;
   - (b) $N \cap A \ne \varnothing$ for every neighbourhood $N$ of $x$
     ([[def-neighbourhood-top]]);
   - (c) $U \cap A \ne \varnothing$ for every open $U$ with $x \in U$;
   - (d) $B \cap A \ne \varnothing$ for every $B \in \mathcal{B}$ with $x \in B$.
2. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$; so it is the smallest closed superset of
   $A$, and $A$ is closed if and only if $A = \overline{A}$.
3. $\overline{A} = A \cup A'$.

Claim 2 is recorded here for reference and is discharged in
[[def-interior-closure-boundary-top]], where it is what makes the definition of
$\overline{A}$ well posed; claims 1 and 3 are proved below. Claim 1 is the form in
which the closure is used everywhere afterwards, and clause (d) is what makes a
closure computable from a basis rather than from all open sets.

## The 12 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L6] Normality: two disjoint closed sets have disjoint open supersets. Hausdorff: distinct points have disjoint open neighbourhoods. A set is closed exactly when its complement is open ([[def-normal-and-t4-spaces]], [[def-hausdorff-space]], [[def-topological-space]], [[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]]).

### `def-frechet-urysohn-and-sequential-spaces` (published-backward, page nets-and-filters)

Title: Fréchet–Urysohn spaces and sequential spaces

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `def-separated-sets` (published-backward, page separation-axioms)

Title: Separated sets: $\\overline{A} \\cap B = A \\cap \\overline{B} = \\varnothing$

- ([[thm-closure-characterisation-top]], claim 2).
- ([[thm-closure-characterisation-top]], claim 2), so both displayed
- [[thm-closure-characterisation-top]]; hence $\overline{U} \cap V = \varnothing$,

### `ex-arens-space-is-sequential-not-frechet-urysohn` (published-backward, page nets-and-filters-examples)

Title: Arens space $S_2$ is sequential but not Fréchet–Urysohn

- [L1] Closure is characterized by meeting every neighbourhood, and convergence by eventual membership in every neighbourhood ([[thm-closure-characterisation-top]], [[def-sequence-convergence-top]]).

### `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` (published-backward, page separation-axioms-examples)

Title: A discrete space satisfies every axiom in the chain; an indiscrete space with two points is regular, completely regular, normal, completely normal and perfectly normal, and fails $T_0$

- [L3] $\overline{A} = A$ when $A$ is closed, and $\overline{A}$ is the smallest closed superset of $A$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

### `ex-the-particular-point-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The particular-point topology is $T_0$ and not $T_1$, it is not regular once the set has at least two points, and it is not normal once the set has at least three

- - **Closures here are as large as they can be.** For $A \ne \varnothing$ with $p \notin A$ one has $\overline{A} = A$, since $A$ is already closed; but $\overline{\{p\}} = X$, because the only closed set containing $p$ is $X$ ([[thm-closure-characterisation-top]]). So the particular point is dense, and a single point can be dense in a space with any number of points at all.

### `lem-normality-via-shrinking` (published-backward, page separation-axioms)

Title: A space is normal if and only if every closed $A$ inside an open $U$ admits an open $V$ with $A \\subseteq V \\subseteq \\overline{V} \\subseteq U$

- [L1] $\overline{V}$ is the smallest closed superset of $V$: it is closed, contains $V$, and is contained in every closed set containing $V$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

### `lem-pseudocompact-euclidean-subset-is-closed` (published-backward, page the-topology-of-euclidean-space)

Title: A pseudocompact subset of $\\mathbb{R}^n$ is closed

- [L1] A set is closed if and only if it equals its closure; and $p\in\overline A$ means every open neighbourhood of $p$ meets $A$ ([[thm-closure-characterisation-top]]).

### `lem-regularity-via-closed-neighbourhoods` (published-backward, page separation-axioms)

Title: A space is regular if and only if every point has a neighbourhood base of closed neighbourhoods, if and only if $x \\in U$ open gives an open $V$ with $x \\in V \\subseteq \\overline{V} \\subseteq U$

- [L2] $\overline{V}$ is the smallest closed superset of $V$: it is closed, contains $V$, and is contained in every closed set containing $V$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

### `thm-closure-characterised-by-nets` (published-backward, page nets-and-filters)

Title: A point lies in the closure of a set if and only if a net in the set converges to it

- [L1] $p\in\overline A$ exactly when every neighbourhood of $p$ meets $A$ ([[thm-closure-characterisation-top]]).

### `thm-completely-normal-implies-normal` (published-backward, page separation-axioms)

Title: Every completely normal space is normal, and every perfectly normal space is normal

- [L2] A set is closed exactly when it equals its own closure ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

### `thm-perfectly-normal-implies-completely-normal` (published-backward, page separation-axioms)

Title: Assuming countable choice, every perfectly normal space is completely normal: separated sets in a normal space whose open sets are all $F_\\sigma$ can be separated by disjoint open sets

- [L2] $\overline{S}$ is closed and contains $S$; a set is closed exactly when it equals its closure; a set is closed exactly when its complement is open ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]], [[def-topological-space]]).


---

# Citation-precision audit — everything that cites `lem-rat-embeds-dense`

## The target, as it actually stands on disk

`items/lem-rat-embeds-dense.md` — lemma — The rationals embed densely in the reals

#### Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

## The 11 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- **Given:** For $n \in \mathbb{N}$ the rational $s_n = k_n/10^n$, where $k_n$ is the largest natural with $k_n^2 \le 2 \cdot 10^{2n}$, together with the properties established for it in [[fs-rationals-complete]]; and the real $\sqrt 2$ ([[thm-of-square-roots]]). Rationals are identified with their images in $\mathbb{R}$ under the embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), so $(s_n)$ is also a sequence of reals ([[def-sequence]]).
- [L2] The embedding $q \mapsto \hat q$ is an injective, order-preserving field homomorphism of $\mathbb{Q}$ into $\mathbb{R}$, so every identity and inequality between rationals holds between their images and conversely ([[lem-rat-embeds-dense]], [[def-rationals]]).

### `ex-cardinal-functions-of-the-lower-limit-line` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: For the lower-limit line, $\\chi=d=L=c=\\aleph_0$ and $w=2^{\\aleph_0}$ under choice

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-lindelofness-is-productive` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, refuted: Lindelöfness is productive

- [L2] The rationals are at most countable and dense in the real line, the real line is uncountable, and a set injecting into an at most countable set is at most countable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]], [[lem-countable-iff-surjection-from-n]]).

### `fs-separability-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: separability is hereditary

- [L2] The rational numbers are at most countable and dense in the real line, and the real line is uncountable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]]).

### `fs-separable-spaces-are-second-countable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: every separable space is second countable

- [L1] The rational numbers are at most countable and dense in the real line, and the real line is uncountable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L3] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]).

### `lem-cauchy-sequence-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every Cauchy sequence of reals is bounded

- [L3] The rational $1$ is positive, and the embedding of $\mathbb{Q}$ in $\mathbb{R}$ carries it to $1 \in \mathbb{R}$, so $\varepsilon = 1$ is an admissible test value in [A1] ([[lem-rat-embeds-dense]]).

### `lem-cauchy-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A Cauchy sequence with a convergent subsequence converges, to that subsequence’s limit

- [L3] Halving a rational: if $\varepsilon$ is a positive rational then so is $\varepsilon/2$, and the embedding of $\mathbb{Q}$ in $\mathbb{R}$ is a field embedding, so the image of $\varepsilon/2$ is half the image of $\varepsilon$ and the two halves sum to $\varepsilon$ ([[lem-rat-embeds-dense]]).

### `lem-uniform-convergence-in-the-uniform-metric` (published-backward, page function-space-topologies)

Title: Convergence in the uniform metric is exactly uniform convergence: one $N$ serving every point

- [L4] $g_k \to g$ in a metric space means: for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with the distance from $g_k$ to $g$ below $\varepsilon$ for every $k \ge K$; and the test with a **real** $\varepsilon > 0$ is equivalent, since below every positive real lies a positive rational ([[def-metric-convergence]], [[lem-rat-embeds-dense]], [[def-metric-ball]]).

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- [L2] $(x_k)$ is Cauchy in a metric space when for every real $\varepsilon > 0$ there is $K$ with the distance between $x_m$ and $x_n$ below $\varepsilon$ for all $m, n \ge K$; the rational and real tests agree ([[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).
- [L4] $x_k \to p$ in a metric space means: for every real $\varepsilon > 0$ there is $K$ with the distance from $x_k$ to $p$ below $\varepsilon$ for every $k \ge K$ ([[def-metric-convergence]], [[def-metric-ball]], [[lem-rat-embeds-dense]]).

### `thm-metric-weight-equals-density` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, every metrizable space has $w(X)=d(X)$

- [L2] The rationals are countably infinite and lie densely between reals ([[thm-rationals-countable]], [[lem-rat-embeds-dense]]).


---

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
