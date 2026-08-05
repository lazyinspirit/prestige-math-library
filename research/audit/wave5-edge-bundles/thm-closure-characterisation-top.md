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
