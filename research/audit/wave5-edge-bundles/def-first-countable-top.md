# Citation-precision audit — everything that cites `def-first-countable-top`

## The target, as it actually stands on disk

`items/def-first-countable-top.md` — definition — First countable space: a countable neighbourhood base at every point

#### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is **first
countable** if every point of $X$ has an at most countable neighbourhood base:
for each $x \in X$ there is a family
$\mathcal{B}_x \subseteq \mathcal{N}(x)$ that is at most countable
([[def-countable]], [[def-equinumerous]]) and such that every neighbourhood of
$x$ contains a member of $\mathcal{B}_x$ ([[def-neighbourhood-top]]).

**"Countable" here means "at most countable"**, as everywhere in this library
([[def-countable]]), so a *finite* neighbourhood base is permitted. That is not a
degenerate case: in a discrete space the one-element family $\{\{x\}\}$ is a
neighbourhood base at $x$, so every discrete space is first countable, and in an
indiscrete space $\{X\}$ is a neighbourhood base at every point.

**The base may be taken to consist of open sets, and it may be taken
decreasing.** If $\mathcal{B}_x$ is an at most countable neighbourhood base at
$x$, then replacing each $N \in \mathcal{B}_x$ by an open $U_N$ with
$x \in U_N \subseteq N$ gives an at most countable neighbourhood base of open
sets. Making the base decreasing, that is arranging
$M_0 \supseteq M_1 \supseteq \dots$, requires enumerating it and forming the
running finite intersections; both operations are carried out inside the proof of
the theorem that uses them, the next item, where the enumeration and the
recursion are cited explicitly rather than assumed here.

**First countability is a topological property**
([[def-homeomorphism-and-open-maps]]): a homeomorphism $h : X \to Y$ carries a
neighbourhood base at $x$ to a neighbourhood base at $h(x)$, since
$N \mapsto h[N]$ is a bijection between the neighbourhood filters preserving
inclusion, and a bijection preserves at most countability
([[def-equinumerous]]).

## The 9 citing use(s), quoted verbatim from the citing items

### `cor-cardinal-functions-detect-countability-axioms` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, the five cardinal functions recover first countability, second countability, separability, Lindelöfness, and ccc at the $\\aleph_0$ threshold

- [L2] First countability means a countable local base at every point, second countability means a countable basis, separability means a countable dense subset, ccc means that every pairwise-disjoint family of nonempty open sets is countable, and Lindelöfness means that every open cover has a countable subcover ([[def-first-countable-top]], [[def-second-countable-space]], [[def-separable-space]], [[def-countable-chain-condition]], [[def-compactness-variants]]).

### `ex-cardinal-functions-of-a-one-point-compactification` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: The one-point compactification of the discrete real line is compact and Lindelöf but is neither first countable nor separable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-countability-profile-of-omega-one` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: Assuming countable choice, $\\omega_1$ is first countable and countably compact but is not separable or Lindelöf

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-sequential-fan-is-frechet-urysohn-not-first-countable` (published-backward, page nets-and-filters-examples)

Title: The sequential fan is Fréchet–Urysohn and not first countable

- [A1] A space is Fréchet–Urysohn when closure points are limits of sequences from the set, and first countability means a countable local base ([[def-frechet-urysohn-and-sequential-spaces]], [[def-first-countable-top]]).

### `fs-first-countable-spaces-are-second-countable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: every first countable space is second countable

- [L2] A space is first countable when every point has an at most countable local base, and second countable when it has an at most countable global basis ([[def-first-countable-top]], [[def-second-countable-space]]).

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L5] A metrizable space is first countable ([[def-metrizable-space]], [[def-first-countable-top]]).

### `lem-countable-local-bases-can-be-open-and-decreasing` (published-backward, page countability-axioms-and-cardinal-functions)

Title: A countable local base can be chosen open and decreasing

- **Given:** A countable local base at $x$ ([[def-first-countable-top]]).

### `thm-countable-products-of-first-countable-spaces` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, a countable product of first countable spaces is first countable

- [F1] Basic neighbourhoods in the product topology restrict only finitely many coordinates ([[def-product-topology]], [[def-first-countable-top]]).

### `thm-second-countable-implies-first-countable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Every second countable space is first countable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.
