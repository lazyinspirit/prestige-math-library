# Citation-precision audit — everything that cites `thm-one-point-compactification-properties`

## The target, as it actually stands on disk

`items/thm-one-point-compactification-properties.md` — theorem — $X^{*}$ is compact and contains $X$ as an open subspace; $X$ is dense in $X^{*}$ exactly when $X$ is not compact; and $X^{*}$ is Hausdorff exactly when $X$ is locally compact and Hausdorff

#### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$(X^{*}, \mathcal{T}^{*})$ be its one-point compactification, with added point
$\infty$ ([[def-one-point-compactification]]). Then:

1. **$X^{*}$ is compact** ([[def-compact-space]]).
2. **$X$ is an open subspace of $X^{*}$**: $X \in \mathcal{T}^{*}$, and the
   subspace topology that $X$ inherits from $X^{*}$
   ([[def-subspace-topology-top]]) is $\mathcal{T}$ itself.
3. **$X$ is dense in $X^{*}$** ([[def-dense-top]]) **if and only if $X$ is not
   compact.**
4. **$X^{*}$ is Hausdorff** ([[def-hausdorff-space]]) **if and only if $X$ is
   locally compact** ([[def-locally-compact-space]]) **and Hausdorff.**

In particular, a locally compact Hausdorff space is an open subspace of a compact
Hausdorff space, which is the reason the construction is made. **No choice
principle is used**: the only cover thinned below is thinned by the indexed form
of [[lem-compactness-of-a-subspace-is-ambient]], which returns its own indices.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-cardinal-functions-of-a-one-point-compactification` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: The one-point compactification of the discrete real line is compact and Lindelöf but is neither first countable nor separable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-lindelofness-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: Lindelöfness is hereditary

- [L1] The one-point compactification $D^*$ is compact and contains $D$ as an open subspace ([[thm-one-point-compactification-properties]]).
