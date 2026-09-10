# Batch 7 — Step 1 construction evidence

Run: `phase-2-next-20`. Role: beta. Outcome: **escalated; not mathematically approved**.

## Authority and scope

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, beta scaffold instructions, the assigned batch task, frontier dependency-ledger instructions, current plan and run planning/drift evidence. Active status was checked against `.autopilot/` through the status command and git history, not historical RESUME claims.

The complete HA-16 design in `research/plan-homological-algebra-track.md`, lines 3573–3742, controls the mathematical inventory subject to `research/plan-spec.json`. Line 3573 begins the A section; line 3699 begins its B section. These are complementary locations in the same design, not competing designs. The current plan agrees on the selected pair, A order 365.067, B order 365.068, category and the three prerequisites (`spectral-sequences`, `mapping-cones-cylinders-and-chain-triangles`, `long-exact-sequences-in-homology`). Its item arrays were empty. No pair-level design/plan conflict was found and no shared plan was changed.

Construction retains all 35 numbered A entries, six A false statements and eight B examples, adding three necessary local lemmas: countable sequence groups/tails, the countable completion obstruction, and filtered-isomorphism lifting. Final inventory: 44 A, 8 B. Every item was constructed once in the manifest and immediately recorded through `step1-decisions.mjs record` as escalated before constructing the next. There were no unchanged ready records to preserve. All 52 records have `owner: false`; none has been overwritten or cleared.

Only owned scaffold/evidence/readiness files and the consumer-batch dependency input were written. The prescribed frontier-ledger refresh was run. No published item, page, plan, verdict or engine transition was edited. Step 3 review and owner/operator reconciliation remain necessary.

## Convention and design reconciliation

- Anticommuting horizontal and vertical homological maps use total differential dh+dv. Commuting source conventions require the explicit (-1)^p vertical twist.
- Row filtration means q<=s. Its spectral coordinates transpose the double-complex coordinates: E0[p,q]=C[q,p], E1 is horizontal homology and E2 is vertical homology. Column filtration p<=s has vertical E1 and horizontal E2. The two pages need not coincide although finite-diagonal total homology does.
- Infinite sums/products require their existence; finite diagonals use biproducts. No arbitrary abelian category is silently assumed complete or cocomplete. Countable module constructions are stated separately.
- Homological acyclic assembly uses a projection to column H0 when higher column homology vanishes. A completely acyclic column gives no surviving edge. No unsupported inclusion of H0 representatives is used.
- Exact-couple maps have specified bidegrees. At page r, j has degree (1-r,r-1), so deriving a couple does not leave all grading data unchanged. The derived-map well-definedness and all three exactness chases are supplied as strategies despite source omissions.
- The design's two-sided use of “regular” differs from the outgoing-only meaning in Weibel/Stacks and the existing stabilization proposition. The manifest explicitly names the stronger two-sided condition and distinguishes outgoing regularity and incoming coregularity. Owner terminology reconciliation remains open; no source theorem is silently strengthened to match a word.
- Design item 27 (lim-one definition) was moved before item 26 (complete convergence), with the completion lemma immediately after it. This repairs a construction-order conflict without changing scope.
- Comparison requires a specified compatible map of filtered abutments and appropriate finite or complete, exhaustive, separated filtrations. E-infinity alone does not recover an arbitrary target. Finite projective splitting is noncanonical and needs only finite choices.
- Strict filtered short exact sequences produce compatible exact couples, not an asserted short exact sequence of homology couples.
- The cohomological five-term route and its homological direction were checked separately. The two-step Z/4 example is bounded but not first quadrant in its displayed bidegrees.
- AC is explicitly attached to countable representative selection in the completion obstruction and to the unresolved complete-convergence branch, with `def-axiom-of-choice` declared. Finite-diagonal convergence, finite splitting and filtered-isomorphism lifting do not acquire gratuitous AC. No Recorded result is used to prove its replacement.

## Substantial proof escalation: complete convergence

Affected item: `thm-complete-exhaustive-filtered-complex-convergence-criterion`. Its original useful claims and hypotheses are retained, but the strategy explicitly says it is incomplete. Elementary completeness of a filtered module does not by itself prove convergence of the homology filtration.

Full-text evidence: Weibel, Chapter 5, Complete Convergence Theorem 5.5.10 (pp.139–141), using 5.5.8–5.5.9, reduces the Boardman approximate-cycle obstruction to a double-tower argument. Its dependency route reaches 5.8.7 and the Grothendieck spectral sequence 5.8.3. The planned later HA-17 page `grothendieck-spectral-sequences-and-computations` is a consumer of HA-16. Importing that theorem here creates a forward/circular supplier route; it is not an available published prerequisite. OCR of some convergence equations was also incomplete. Neither a source citation nor the local elementary completion lemma closes this gap.

Owner proposal, not certified additional inventory: insert the following local results in A, after `def-lim-one-obstruction-to-completeness` and its elementary completion lemma, before the complete-convergence theorem:

1. `def-countable-tower-mittag-leffler-condition`.
2. `lem-countable-tower-six-term-limit-sequence`.
3. `lem-milnor-sequence-for-surjective-towers-of-complexes`.
4. `lem-two-by-two-delta-complex-for-a-double-tower`.
5. `lem-boardman-approximate-cycle-obstruction-sequence`.
6. `lem-complete-approximate-cycle-obstructions-have-zero-inverse-limit`.

Proposed dependency chain: countable Delta-map and snake argument, with declared AC for simultaneous lifts, to the six-term sequence and Milnor sequence; a two-by-two Delta bicomplex with the already finite row/column comparison to double-tower interchange; explicit approximate-cycle exact sequences to vanishing inverse-limit obstruction; outgoing stationarity to weak convergence; bounded-above finite windows and Mittag-Leffler control to separated complete target convergence. Exact tower hypotheses and all maps must be constructed and audited before these proposed IDs are accepted. This is an owner escalation, not a confident alternative proof.

Placement would keep A at order 365.067 with 50 items and B at order 365.068 with its existing eight examples. No new pair or page split is requested. Sources are Weibel 5.5.8–10 and 5.8.7 with an independent elementary Delta-complex proof still required. Do not replace this work by consuming the later HA-17 supplier. The finite first-quadrant branch does not depend on the unresolved complete-convergence theorem.

## Sources and recovery evidence

Original sources retained in coverage:

- Weibel, *An Introduction to Homological Algebra*, Chapter 5: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf . Relevant locators: 5.5.1–11, pp.135–141; 5.6.1–2, pp.141–143; 5.8.7 and 5.9.1–4, pp.153–156.
- Stacks Project, *Homology*: https://stacks.math.columbia.edu/download/homology.pdf . Relevant sections: 12.18, 12.21, 12.24 and 12.25; exact harvested lemma locators and HTML recovery locations are in coverage.

The initial `source-fetch-check --stamp` invocation performed the initial attempt plus five retries for each URL. Every attempt failed with EAI_AGAIN; genuine URLs/timestamps/outcomes are retained verbatim in coverage `recovery_attempts` and `source_resolution.attempts`. Recovery searches and accessible alternative locations are recorded there. The six-attempt allowance is exhausted and must not be restarted in another dispatch. No fetch_verified stamp was fabricated.

Browser retrieval exposed the complete 40-page Weibel chapter and 82-page Stacks chapter, with relevant HTML for Stacks. Relevant finite-filtration, double-complex and exact-couple arguments were inspected; source “exercise”/omitted chases are not represented as supplied proofs. Some convergence formula extraction remained inadequate. Browser availability does not satisfy the required local stamp and is not evidence of permanent unavailability. Both sources are `source_resolution.status: owner-escalation`; no certain drop or complete substitute for every harvested claim is asserted.

Coverage retains 64 individually named harvested results with included/inline/deferred/out-of-scope dispositions and exact supporting locators. All 52 local constructions are separately mapped. Adjacent Tor balancing, Kunneth/base-change and universal-coefficient results retain destinations; stronger complete nonconvergence and comparison exercises retain owner-decision explanations. Rotman and Hilton–Stammbach are design bibliography, not claimed inspected full text. The low-yield warning (18/64 counted as included by the checker) needs owner assessment against the explicit inline and deferred dispositions; it was not silenced by padding the inventory.

## Dependency audit and published-ledger handoff

The direct external interfaces below were examined through statements/proofs as applicable. In particular the subquotient construction, bounded convergence, connecting-map signs/naturality, edge definitions, cohomological reindexing and E-infinity existence restrictions were read. This is **not** a completed transitive proof audit. A declared-deps graph walk found 32 direct external interfaces and 373 external ancestors, with no missing ID and no `proved_here: false` Recorded ancestor. That graph does not establish mathematical adequacy, capture every implicit proof use, or certify the Foundations prerequisite/justification closure. Many of the 373 ancestors have not been reread. Every readiness record remains escalated for this reason as well as source uncertainty.

Published-page integrity finding for owner/canonical-ledger reconciliation: `library/homological-algebra/spectral-sequences.md` says published, whereas the 31 exact item IDs listed below are still `status: draft`, `pipeline_run: phase-2-catchup-24`, in `items/<ID>.md`. Example actual dependency chains are row/column construction -> `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology` -> filtered-homology/subquotient suppliers; exact-couple identification -> `def-r-page-of-the-spectral-sequence-of-a-filtered-complex` -> r-cycle/r-boundary suppliers; five-term cohomological sequence -> `thm-the-cohomological-filtered-complex-construction` -> bounded construction. These are actual mathematical interfaces, not a page-membership proxy.

This is a publication-state mismatch and incomplete audit, **not a demonstrated fatal error in those proofs**. Do not classify all 31 as confirmed mathematical defects. Recommended repair: owner inspect the previous-run review and actual dependency proofs, reconcile their intended publication state and page header, and resolve any resulting proof defects individually. Existing draft suppliers are not to be represented as already published; no new replacement supplier has been certified by this batch. The local finite strategies do not prove unrelated published consumers correct. No published content or canonical ledger was edited under this dispatch; this owned note is the exact handoff requested for that ledger.

### Direct interfaces examined

- `cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects` — draft
- `def-abelian-category` — published
- `def-abutment-to-a-filtered-object` — draft
- `def-additive-category` — published
- `def-axiom-of-choice` — published
- `def-chain-complex-in-an-abelian-category` — published
- `def-cohomological-spectral-sequence` — draft
- `def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence` — draft
- `def-exhaustive-separated-bounded-and-finite-filtration` — draft
- `def-filtered-chain-complex` — draft
- `def-filtered-chain-map` — draft
- `def-homological-spectral-sequence` — draft
- `def-homology-object-of-a-chain-complex` — published
- `def-induced-filtration-on-homology` — draft
- `def-limit-and-colimit-of-a-diagram` — published
- `def-limiting-cycles-boundaries-and-e-infinity` — draft
- `def-morphism-of-spectral-sequences` — draft
- `def-products-and-coproducts` — published
- `def-projective-module` — published
- `def-quasi-isomorphism` — published
- `def-r-page-of-the-spectral-sequence-of-a-filtered-complex` — draft
- `lem-abelian-group-model-for-spectral-sequence-computations` — draft
- `lem-spectral-sequence-subquotient-and-local-lifting-calculus` — draft
- `lem-the-filtered-differential-induces-d-r-on-the-r-page` — draft
- `prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences` — draft
- `prop-degree-reasons-force-stabilization-in-a-bounded-region` — draft
- `prop-elementwise-formula-for-the-connecting-map-in-module-categories` — published
- `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology` — draft
- `thm-long-exact-sequence-in-homology` — published
- `thm-naturality-of-the-homology-connecting-morphism` — published
- `thm-the-cohomological-filtered-complex-construction` — draft
- `thm-the-next-page-is-the-homology-of-the-current-page` — draft

### Draft ancestors behind the published prerequisite page

- `thm-the-cohomological-filtered-complex-construction`
- `prop-e-one-is-homology-of-the-associated-graded-complex`
- `lem-the-filtered-differential-induces-d-r-on-the-r-page`
- `lem-spectral-sequence-subquotient-and-local-lifting-calculus`
- `prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex`
- `def-filtered-chain-complex`
- `def-increasing-and-decreasing-filtration-of-an-object`
- `lem-associated-graded-quotients-are-well-defined-subquotients`
- `def-associated-graded-object-of-a-filtered-object`
- `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`
- `lem-r-boundaries-embed-in-r-cycles`
- `def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex`
- `prop-e-zero-is-the-associated-graded-complex`
- `thm-the-next-page-is-the-homology-of-the-current-page`
- `lem-the-rth-differential-squares-to-zero`
- `prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences`
- `def-limiting-cycles-boundaries-and-e-infinity`
- `def-morphism-of-spectral-sequences`
- `def-cohomological-spectral-sequence`
- `def-homological-spectral-sequence`
- `def-filtered-chain-map`
- `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`
- `def-abutment-to-a-filtered-object`
- `def-spectral-sequence-stabilization-at-a-bidegree`
- `prop-degree-reasons-force-stabilization-in-a-bounded-region`
- `lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data`
- `def-induced-filtration-on-homology`
- `def-exhaustive-separated-bounded-and-finite-filtration`
- `cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects`
- `lem-abelian-group-model-for-spectral-sequence-computations`
- `def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence`

## Dependency-input ownership

`phase-2-next-20-batch-7.cross-batch-dependencies.json` is `[]`: this batch's consumers use earlier existing interfaces or earlier local A items, not another selected batch's proposed suppliers. The frontier-ledger refresh succeeded. Other batches' consumption of HA-16 belongs to their consumer inputs. The forbidden prospective HA-17 route is escalated above, not inserted as an authorized edge.

## Actual validation results

These are construction-time snapshots; concurrent workers changed other batches during the checks.

| Check | Actual result |
| --- | --- |
| Whole-run `manifest-deps.mjs research/phase-2-next-20-batch-*.pages.json` | Passed at 397 items; zero missing deps arrays/errors. Structural only. |
| Whole-run `content-policy.mjs --manifest-only` | Failed: 22 unresolved references in other batches' Lie/Fourier scaffolds (batches 10/5); no owned batch-7 error. No edits made to others. |
| Owned manifest content-policy | Passed, 52 items, zero errors/warnings. |
| `coverage-checklist.mjs` | Failed: 55 coverage-source-resolution errors for unresolved original sources/uncertified alternatives; one low-yield warning, 18/64. No fabricated drops to clear them. |
| `source-fetch-check.mjs --coverage ... --stamp` | Failed, zero of two sources verified; six EAI_AGAIN attempts each. |
| Source check without stamp | Failed, zero verified and zero documented valid drops; owner-escalation is intentionally unresolved. |
| Canonical `validate-plan.mjs research/plan-spec.json` | Passed; 978 pages with item lists, 641 empty; existing redundant-prerequisite warnings. |
| Own manifest overlaid on plan in a temporary file | Passed; 980 pages with lists, 639 empty, no owned item cycle/forward/B dependency error; existing redundant-prerequisite warnings. Shared plan untouched. |
| `extcheck.mjs --quiet` | Passed with existing unproved-on-published warnings; does not certify unauthored scaffold proof bodies. |
| Frontier dependency-ledger refresh | Passed. |
| `step1-decisions.mjs check --run phase-2-next-20` | Exit 1, run not closed (435 items/41 ready at snapshot); all 52 owned decisions escalated. |

The whole-run policy failures concern missing root-system/Weyl/highest-weight suppliers and Fourier/Schwartz/Plancherel suppliers in concurrently constructed unowned manifests. They are not waivers for batch 7. The owner must rerun whole-run checks after construction and reconciliation.

## Required next action

Owner/operator must resolve the source evidence and publication-state mismatch, complete actual transitive prerequisite reading, and settle the independent complete-convergence tower proof. Preserve all escalation records until authorized reconciliation; a worker exit or this inventory is not independent approval. No claim of Step-1 gate clearance, source clearance, complete mathematical proof or Step-3 approval is made.
