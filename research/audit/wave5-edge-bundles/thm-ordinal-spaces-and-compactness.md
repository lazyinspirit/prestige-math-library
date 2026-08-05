# Citation-precision audit — everything that cites `thm-ordinal-spaces-and-compactness`

## The target, as it actually stands on disk

`items/thm-ordinal-spaces-and-compactness.md` — theorem — Every successor ordinal is compact in its order topology and every limit ordinal is not; and, assuming countable choice, $\\omega_1$ is countably compact and sequentially compact while $\\omega_1 + 1$ is compact

#### Statement

Every ordinal carries the order topology of the membership order on it
([[def-ordinal]], [[def-order-topology-on-a-linearly-ordered-set]]), with the
clopen basis $\mathcal{B}_\gamma$ of
[[lem-the-order-topology-on-an-ordinal]]. Then:

1. **Successors are compact.** For every ordinal $\delta$ the successor ordinal
   $\delta^{+}$ is compact ([[def-compact-space]]).
2. **Limits are not.** No limit ordinal ([[def-limit-ordinal]]) is compact.
3. **Assuming the Axiom of Countable Choice** ([[def-countable-choice]]): the
   first uncountable ordinal $\omega_1$ ([[def-first-uncountable-ordinal]]) is
   sequentially compact and countably compact ([[def-compactness-variants]]),
   and it is not compact; while $\omega_1 + 1$ is compact
   ([[def-ordinal-addition]]).

Claims 1 and 2 are theorems of ZF. Claim 3 spends countable choice twice, both
times through cited results that carry the hypothesis in their own statements:
[[thm-countable-subsets-of-omega-one-are-bounded]], which supplies the
boundedness of at most countable subsets of $\omega_1$, and claim 2 of
[[thm-compactness-variants-hierarchy]], which converts sequential compactness
into countable compactness; the extraction of a subsequence below selects
nothing, taking least elements throughout.

## The 1 citing use(s), quoted verbatim from the citing items

### `ex-countability-profile-of-omega-one` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: Assuming countable choice, $\\omega_1$ is first countable and countably compact but is not separable or Lindelöf

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.
