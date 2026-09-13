# Step 8 lead review — phase-2-next-21

The scoped review is complete; independent Step-8 certification and 12 scope owner decisions remain open. No judge verdict, stamp, publication, snapshot, routing change or stage transition was written.

## Authority and frozen boundary

Followed `briefs/tasks/frontier-dependency-ledger.md` and `research/phase-2-next-21-step8-mathematical-review.task.md`. The immutable post-Step-7 snapshot is dated 2026-09-13T17:58:35.025Z; the Step-8 inventory/scope snapshot already existed at 2026-09-13T17:58:36.455Z before the staged replacements were applied. Existing item IDs and page order are retained. No item or page was added or deleted.

## Scope dispositions

Reviewed the 41 pending declines; 29 stand and 12 are `owner-decision`. Preserved the other 29 exact carried decisions. All 70 current rows pass `scope-decisions refresh --all` and `check` with zero pending or invalid records. An `owner-decision` is an unresolved scope question, not approval of its original reason.

The owning group JSON rows carry item-specific evidence, current page path/status, plan order, closure size, source/cache locator and destination relationship. These are source-scope checks, not independent reproofs of entire chapters or page closures. Current in-flight pages are draft; the check did not treat an existing plan entry as a published supplier. In particular, a destination's existence is not evidence that it contains the promised result.

The 12 owner decisions are:

| Group / batch | Decline | Exact issue |
|---|---|---|
| a / 8 | Etingof Lemma 13.11 and refinements | Lemma 13.11 is the PBW ordered-monomial map and its proof; Duflo is Remark 13.9. Split/correct the conflated source row. |
| a / 10 | Cannas da Silva Arnold–Liouville part (b) | The retrieved edition has Theorem 18.12, §18.4, pp. 110–111, not Lecture 20. The included action-angle theorem is retained. |
| b / 5 | Mosher–Tangora Serre theorem | The source explicitly needs its later Serre computation for that proof of Adem; the selected proof uses another route, and the named Postnikov destination does not contain the full polynomial-cohomology theorem. |
| b / 9 | Meierfrankenfeld Corollary 6.7.16 | The corollary concerns general p-sections, not just the identity section provided by the named example. |
| a / 7 | Palais–Terng fundamental theorem | The theorem is §2.3; §2.2 is totally umbilic submanifolds. |
| c / 2 | Extreme boundary noncompactness | Source is Example 3.47, not Exercise; the reflexivity destination exists in this frontier but lacks the exact example. |
| a / 7 | Gallier principal logarithms | Corollary 3.5 is an existence result without negative eigenvalues; the following uniqueness discussion is a distinct result, not the stated section. |
| b / 5 | May cohomology of K(Z2,q) | Universal-class representability on the destination does not supply the polynomial cohomology computation by admissible squares. |
| a / 10 | Tangent space to Sympl | Source §9.3 also gives a C1-neighbourhood chart; the destination's vector-field/H1 quotient is not that full claim. |
| a / 7 | Lee space-form classification | Available source gives Corollary 11.13 while introductory prose retains Chapter 9 wording; exact edition/locator needs reconciliation. |
| a / 7 | Calegari second variation | §2.3 is calibrations; second variation begins later with Proposition 3.1. |
| a / 7 | Merry Lectures 49 onward | The supplied contents end at Lecture 48; holonomy appears earlier at 32, 34 and 42. |

No decline was silently removed, no result was added to satisfy these questions, and no new forward dependency or reading-order change was made. Source-locator/destination corrections remain with the owner through those exact decision rows.

## Supervising mathematical review and repairs

Eight item files changed:

1. `lem-basic-cohen-symmetric-construction-is-uniformly-formalizable` — narrowed to an externally fixed finite-fragment model-existence assertion. The title now reflects that strength; its stable ID is unchanged.
2. `thm-formal-consistency-of-zf-with-failure-of-choice` — now derives external relative consistency from a separately fixed finite contradiction support and model proof.
3. `cor-formal-negative-consistency-of-ch-and-gch` — applied the staged fixed-fragment replacement.
4. `cor-formal-consistency-of-ma-and-not-ch` — applied the staged fixed-fragment replacement.
5. `fs-ma-implies-ch` — applied the staged relative-nonprovability replacement, with the explicit F2 proof tag included in its final step.
6. `def-boundable-sentence-over-an-atom-set` — retained general relative-rank boundability and added the explicit warning that it alone gives no atom-to-set transfer. Distinguished finite stacks over supplied parameters from ordinal height over bare atoms.
7. `thm-optional-stopping-with-a-dominating-integrable-variable` — defines the zero cemetery value, proves measurability and uses one full-measure event for convergence and all bounds.
8. `cor-gamblers-ruin-hitting-probability-from-optional-stopping` — defines the zero cemetery value and retains the same exit and expectation argument.

The old basic-Cohen steps 7.1–8.1 merely named output triples and checker inductions; they did not supply the exact formula-indexed proof blocks, schema certificates or line-reference maps demanded by the task. Old step 6.1 also treated fixed-finite reflection/hull proofs as a uniform constructor. F4 expressly describes fixed external fragments and F6 requires verified constructors as a hypothesis. The terminal owner decision repaired only the G/G_0 collision. Retaining the PA conclusion would therefore exceed the evidence; this review used the expressly authorized fallback.

The revised Cohen argument separates the obligations:

- Steps 1.1–2.1: fixed-formula forcing arguments, strict ground rank bounds, invariant HS containers and only bounded direct cuts.
- Step 2.2: distinct coordinates, the finite-supported-range branch, and the decided outside value followed by a fresh swap whose condition is compatible with its image. Both branches rule out an injection from omega into the infinite coordinate set.
- Step 3.1: the eight operations; atomic/Boolean cases; all least-rank witness sets and omega-stage closure for the existential case; ambient functional image bound followed by generated internal Separation for Replacement.
- Steps 4.1–5.1: collect the finite support of the separately fixed set-theoretic proofs, use fixed-finite reflection/hull/collapse, and construct a set model of that target fragment. Name-rank and omega inductions stay inside the object theory. No numeric ordinal search or PA-total selector is claimed.

Read Jech Theorem 3.2 and Lemma 3.3 through the end of the argument, printed pp. 35–38 (`/tmp/jech.txt`, PDF pages 40–43), and Karagila Theorem 10.17 with its complete proof and footnote, followed by the complete Theorem 10.25 two-branch proof (`/tmp/karagila-forcing-2023.txt`, printed pp. 49–50). Both source URLs were opened successfully in this dispatch: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf and https://karagila.org/files/Forcing-2023.pdf. These sources establish the semantic ingredients; this report does not attribute a proof-code compiler to them.

The current `lem-jech-sochor-socks-transfer-is-uniformly-formalizable` was already narrowed in Step 7 and was left unchanged. Read it with `thm-second-fraenkel-model-countable-pairs-without-choice`, `thm-jech-sochor-first-embedding`, the conditional typed transfer theorem and its direct corollary. Its step 1.1 swaps a pair outside finite support; 1.2 distinguishes tagged atoms/sets and uses height omega+omega, which includes the pure omega and all intermediate graph codes; 1.3 distinguishes unbounded Separation/Replacement from direct bounded cuts; 2.1 transports the designated no-choice sequence before inferring the existential socks sentence; 3.1 chooses the finite source support externally. Jech printed p. 95 Problem 4 identifies the socks application. The direct corollary's two steps use finite-model soundness and external source consistency, with no remaining uniform PA assertion. This is the scoped interface review requested here, not a new independent verdict on the entire embedding proof.

The stopped-variable repair adds no probability hypothesis. The countable union description gives a measurable representative; all expectation equalities and endpoint probabilities are unchanged by the null-set value. The biased-walk consumer uses the exponential martingale's representative only almost surely in its expectation calculation, so its formula remains licensed.

## Independent evidence retained

Read the relevant existing rows in `research/phase-2-next-21-judge.jsonl`, without changing them:

- Basic Cohen: the latest paid rejudge at 2026-09-13T17:00:10.332Z rejected the G/G_0 collision (context `82f61f2fb4c6c00954df113a499d3e86fdf0d6635c95684b53140f4585744465`). Its first rejection had already identified unsupported PA templates. The later terminal owner repair is historical evidence, not a pass on this new narrowing.
- Socks supplier: the latest paid rejudge at 2026-09-13T17:00:14.416Z rejected the uniform reflection/hull inference (context `a185cdc91d9ee228e1dd49d84cc81e9e89d7a5b299aec9a055b133899bd9b7c2`); the owner then narrowed the item.
- Socks corollary: the latest rejudge at 2026-09-13T16:55:42.517Z rejected the claimed PA upgrade; current external wording postdates that rejection.
- Failure-of-Choice theorem: its earlier acceptance assumed the supplier's PA interface. It is not current evidence for the newly narrowed theorem.

No new judgment was initiated: the engine owns changed-item judgments and closure. `step8-uniform-formalization-certification` remains the SAME open blocking obligation. The owner can close it only after independent changed-item recertification and the required closure gates. No duplicate obligation was created and no self-stamp was issued.

## Carrier and impact reconciliation

Updated only the affected item rows in Batch-4, Batch-11 and Batch-12 manifests and `plan-spec.json`, their direct proof contracts, the merged contract, and the relevant foundation page prose. No inventory/order change occurred. Exact source quotes and derivations now match the edited arguments. The strict-contract detector required adopting the canonical Cohen phase ordering; final numbering is as documented above.

Additional contract-only changes (no item edits):

- `cor-gamblers-ruin-expected-duration`, `ex-gamblers-ruin-probability-for-a-biased-walk`, and `cex-optional-stopping-fails-for-unbounded-simple-random-walk-hitting-time`: current exact source quotes after the null-event interface change.
- `cor-zf-countable-family-of-pairs-without-choice`: anchored four pre-existing boundary notes to its actual Statement and proof steps.

`research/phase-2-next-21-step8-impact-review.json` records all 14 computed consumers of the eight changed interfaces against post-Step-7 and current files. Every consumer was read; each disposition names its actual use. Scoped evidence was also attached to those same affected rows in the existing `impact.json`, preserving the historical receipt's window and prior notes. This mathematical interface receipt is separate from the engine's certification and frozen-window closure.

The final whole-run splice verification reports an OUT-OF-SCOPE mismatch on `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`: `thm-moser-stability-theorem`, `thm-symplectic-neighborhood-theorem`, and `prop-lagrangian-neighborhood-germ-is-not-canonical` differ between Batch-10 manifest and plan. These are not licensed repairs in this dispatch. The owner/engine must reconcile them. The check was not claimed to pass.

## Frontier and run ledgers

Refreshed and read the unified frontier ledger before scope/impact review, then reconciled its two unreviewed declared edges in the owning input files:

- Batch 12: `def-basic-cohen-symmetric-system` → `def-cohen-collapse-and-levy-collapse-forcings`. At kappa=lambda=omega the supplier is exactly finite partial maps omega×omega to 2, with reverse inclusion, largest empty condition and compatible union.
- Batch 8: `lem-the-smooth-structure-on-g-mod-h-is-independent-of-the-local-complement` → `thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero`. Both retain AC_omega; the consumer uses only smoothness and identity differential for its product chart and chart transitions.

The sole removed review, subgroup/subalgebra correspondence → exponential naturality, has no current declaration or occurrence in the consumer. No missing batch inputs or orphaned reviews remain. The strict refresh succeeds: 49 rows, including 48 declared reviewed edges and one evidenced removal. Existing verified notes were retained as prior bounded interface reviews, not promoted to new proof certificates.

Inspected the canonical defect ledger's current-run rows: 262 rows, none open; validation reports zero errors. No duplicate defect row was appended. Historical basic-Cohen defect `phase-2-next-21-step7-d-073` and boundability defect `phase-2-next-21-step7-d-054` remain historical repair evidence; the stronger current limitations are documented here, not disguised as their old certification. The one open run obligation is explicitly deferred on that same ID as required above. No ledger status was changed, so no changed defect-ledger view required regeneration.

## Checks and remaining action

Passed checks actually run:

- Focused precheck on seven proof-bearing changed items; after adopting the one requested canonical ordering, all passed.
- Rendercheck on the eight changed items and three edited foundation pages: 11 files, zero errors.
- Strict proof contracts: changed set 8/8; complete affected batches 4, 11 and 12 (53, 42 and 35 checked), all zero errors after quote/boundary reconciliation.
- Scope decisions: 70 current declines, zero invalid/pending rows; the 12 owner decisions remain substantively unresolved.
- Frontier refresh with `--require-reviewed`: success.
- Post-Step-7/current impact receipt: eight changed interfaces, 14 affected consumers, zero errors/warnings.
- Current-run defect-ledger validation: 262 rows, zero errors.

The whole-run splice check failed only on the three Batch-10 rows identified above. The engine's Step-8 changed-item judgments, exact-hash closure, stamps and recertification have NOT been run by this lead. Next action: owner resolves the 12 source-scope decisions and foreign splice mismatch; engine performs its authorized certification sequence; only then may the owner close the existing blocking formalization obligation.
