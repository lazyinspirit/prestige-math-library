# Erdős cycle 1 — judge adjudication

## Context-integrity rerun — 2026-07-31

The first two paired calls were made before `tools/judge.mts` froze the assembled
prompt. Its mutable de-duplication set could make the second concurrent request
omit page context. These are not valid paired verdicts and do not count toward
judge coverage or mathematical adjudication. The ledger retains them as an
operational diagnostic.

The harness now assembles one prompt before either request, supplies that exact
prompt to both GLM 5.2 and DeepSeek v4 Pro, and records its SHA-256 digest on
both verdicts. GLM was re-run on the affected items. The owner subsequently
stopped the incomplete DeepSeek lane; its remaining reviews follow the
documented fallback protocol below rather than being represented as matched
cross-family pairs.

## `thm-uniform-cauchy-criterion-real-functions` — confirmed proof-scope error

DeepSeek v4 Pro rejected the pre-repair text: its forward implication chose
`N` and used a limit function `f`, but the proof introduced the converse
uniform-Cauchy assumption before completing that implication. The later triangle
inequality step consequently used forward-branch variables in the converse
scope. Inspection from disk confirmed the objection.

Disposition: restated and re-stratified the proof, keeping each implication in
its own scoped subargument. The repaired theorem first completes uniform
convergence implies uniform Cauchyness, then constructs the pointwise limit
under the converse assumption and proves uniformity with its own `N`. Targeted
`precheck` passes. This was the theorem's second repair (after Beta's
rational/real-error repair), so the orchestrator performed the required
twice-touched personal audit: dropping it would break its function-series
Cauchy corollary and the sup-metric completeness theorem; the repaired true
statement retains both uses. It awaits a new complete, matched-context paired
verdict before any `verification.judge` pass is recorded.

## `thm-uniform-derivative-limit-on-a-closed-interval` — confirmed and repaired

DeepSeek v4 Pro identified [L3]: `thm-ftc-second-part` is stated for ordered
endpoints, whereas [L3] asserts the Newton--Leibniz identity for every pair of
endpoints. The oriented-integral definition reverses the sign after an integral
is defined, but does not by itself establish integrability of a derivative on a
proper subinterval. The repair adds the established subinterval-integrability
and restriction facts to the dependency closure, states the ordered FTC-II form
faithfully, and derives the arbitrary-endpoint identity by a complete $x<c$,
$x=c$, $c<x$ analysis using oriented integrals. Targeted precheck and depcheck
pass; the owner-directed GPT-5.6-Sol fallback replay accepted the repaired
current context.

## Owner-directed Sol fallback — 2026-07-31

The owner stopped the incomplete DeepSeek lane and directed that its fifteen
missing current-context reviews be completed by GPT-5.6 Sol through the Codex
subscription. The resulting current-context verdicts are in
`research/erdos-cycle-1-sol-fallback-judge.jsonl`. This is a documented
fallback review, not a cross-family paired verdict: no `verification.judge`
field is added on its basis.

### `thm-uniform-abel-test-for-function-series` — confirmed citation-fidelity defect

The fallback reviewer found that [L2] replaced the cited Abel identity with a
generic description while step 3.1 used its indexed boundary-term formula. The
identity itself was correct. The repair quotes the exact published formula and
writes the shifted sequences and their partial sums before applying it.
Precheck passes and a replay of the repaired context accepted the result.

### `cex-shrinking-rectangles-have-integral-one` — confirmed citation-fidelity defect

The fallback reviewer found that [L5] named pointwise and uniform convergence
without stating the quantifiers used in steps 1.3--1.4. The repair states both
quantified definitions and makes the non-uniformity witness defeat every
proposed threshold. Precheck passes and a replay of the repaired context
accepted the result.

## Resumed Step 8 reconciliation — 2026-07-31

I read every current target and the cited items needed for each objection. The
paired rejections below all refer to a superseded context hash: the current A/B
pages contain the stated repair. The owner subsequently directed the replacement
review to rejudge only the auditor-modified items, each against its current A/B
context, rather than replaying unchanged siblings. These are fixes, not inferred
judge passes.

| Item | Judge finding | Orchestrator disposition from current disk text |
|---|---|---|
| `cex-a-maximal-antichain-that-is-not-maximum` | Maximality fact was only a meta-description. | **Repaired.** `[F1]` now states maximal and maximum antichains and width exactly; steps 1.1–1.2 use it directly. |
| `cor-sperner-theorem-with-equality-cases` | The equality proof invoked Johnson-graph connectivity without support. | **Repaired.** Step 5.1 gives the element-replacement path between arbitrary k-sets and derives the closure conclusion. |
| `def-graded-poset-and-rank` | It used undefined order vocabulary and overclaimed a rank-level property. | **Restated.** The definition now defines minimal elements and covers locally and makes no unproved antichain claim. |
| `lem-binomial-coefficients-symmetric-and-unimodal` | The complementation/double-counting use was not licensed by its fact. | **Repaired.** The proof now gives the two explicit counting descriptions and cites the closed formula for the identity. |
| `lem-finite-lattice-join-irreducible-decomposition` | Strict decrease of principal ideals lacked a finite-cardinality dependency. | **Repaired.** `[L1]` states proper subsets of a finite set have smaller cardinality, and steps 1.1 and 4.2 cite it. |
| `lem-join-irreducible-is-join-prime` | The order-to-meet equivalence was absent from the cited fact. | **Repaired.** `[F1]` now gives both the equivalence and distributivity before both uses. |
| `lem-maximal-chains-of-the-boolean-lattice` | The maximal-chain rank assertion lacked its definition. | **Repaired.** `def-chain` is now a dependency and `[F1]` states maximality before the rank/order reconstruction. |
| `lem-sunflower-maximal-disjoint-subfamily` | The assertion is false at k = 0. | **Restated.** The theorem and Given clause now require k at least 1. |
| `lem-uniform-integral-error-bound` | A non-strict absolute-value equivalence was stronger than its source. | **Repaired.** `[L3]` uses the source's two-sided inequality, from which step 2.1 derives the needed non-strict bounds. |
| `thm-erdos-rado-sunflower-lemma` | The power recursion was used without a dependency. | **Repaired.** `def-nat-power` and its exact zero/successor identities are now in `[L3]`. |
| `thm-local-lym-inequality` | The extension count lacked proof. | **Repaired.** Steps 1.1–1.2 give the extension and deletion bijections before the pair count. |
| `thm-mirsky-finite-posets` | The chain definition was missing. | **Repaired.** `def-chain` is a dependency and `[F1]` states the chain and antichain clauses used in the proof. |
| `thm-uniform-limit-interchanges-riemann-integration` | It used boundedness of an integrable function without a cited statement. | **Repaired.** `[L1]` explicitly gives that boundedness together with the Riemann criterion. |

The earlier Step-8 rejections of
`thm-uniform-cauchy-criterion-real-functions` and
`thm-uniform-derivative-limit-on-a-closed-interval` were already recorded
above; both repaired texts are also part of the fresh A/B-pair replay.

The Sol fallback also found and repaired two further citation-fidelity defects:
`thm-uniform-abel-test-for-function-series` now quotes the indexed Abel identity
used in step 3.1, and `cex-shrinking-rectangles-have-integral-one` now states
the quantified pointwise and uniform convergence clauses used in its refutation.
Both are included in the fresh A/B-pair replay.

### Owner-directed limited replacement review

The owner superseded the full-pair replay and required rejudging only the exact
post-audit delta. The completed scoped set is the 16 ids in
`research/erdos-cycle-1-step8-glm.jsonl` and
`research/erdos-cycle-1-step8-sol.md`. GLM 5.2 passed all 16 on their current
frozen contexts, and GPT-5.6 Sol, through the Codex subscription and with
read-only access, independently passed all 16. There are no scoped rejections
or nulls.

The partial full-pair sweep was interrupted as soon as this direction arrived.
Its historical entries remain in `research/erdos-cycle-1-judge-paired.jsonl`
for transport and cost honesty, but no conclusion from an unchanged item is
used by this limited replacement review. This is an owner-directed GLM/Sol
review, not the ordinary GLM/DeepSeek paired-judge configuration, so it writes
no `verification.judge` metadata.

### Required personal audits of twice-touched proofs

- `thm-uniform-cauchy-criterion-real-functions`: the second repair closed a
  genuine scope error, not a cosmetic concern. Its two consumers are
  `cor-uniform-cauchy-criterion-function-series` and
  `thm-c-k-complete-in-the-sup-metric`; dropping it would remove both the
  function-series Cauchy corollary and the completeness route. The current
  two-implication proof is sound, and no weaker replacement is needed.
- `thm-uniform-derivative-limit-on-a-closed-interval`: the second repair was a
  genuine incorrect dependency use. The repaired ordered/reversed/equal-endpoint
  proof correctly establishes the full stated theorem; dropping it would lose
  the page's derivative-limit result, while a weaker ordered-endpoint statement
  would not match its intended application. The final text is retained.
- `lem-finite-lattice-join-irreducible-decomposition`: the second repair was a
  genuine missing finite-cardinality license. It is used by
  `thm-birkhoff-representation-finite-distributive-lattices` and as the
  definition-justification target of `def-join-irreducible-element`; dropping it
  would leave Birkhoff's representation chain without its decomposition. The
  repaired principal-ideal induction is sound, so the full statement is
  retained.
