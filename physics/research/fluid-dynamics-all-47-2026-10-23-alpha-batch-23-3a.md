# Batch 23 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; group: `batch-23`.

## Completed level 2 review

`prop-fd-viscous-entropy-passage`: accepted reader repair. Current item raw SHA256 matches the post-reader snapshot (11e1beef9e56d939addd5d14c247cd7f57975a9540a9c04c0714bf643bf07bf9); pre-reader hash differs. Read the complete current proof and its four exact cited supplier statements. Continuity up to zero gives the approximate initial bound; initial L1 convergence and the explicit compact exhaustion give the limiting initial bound. Chain rule, convexity and two spatial integrations by parts give the stated sign. For tests meeting t=0, split their support into t>=delta and 0<t<delta; uniform boundedness controls the latter by C delta and interior convergence controls the former. This immediately supplies the implicit boundary-strip argument in step 3.1. No existence, compactness, boundary condition or empirical observation is asserted. Complete risk review recorded in the batch contract before proceeding higher.

Next: independently resolve the Rankine–Hugoniot normalization finding, then its consumers in routed order; review published presentation obligations and write decisions/checks.

## Completed Rankine–Hugoniot review

`refuter:23:1`: confirmed fatal, locally repaired with confidence 1. Imported `def-hausdorff-measure` and `def-hausdorff-content-at-scale-delta` explicitly use unnormalised diameter costs. Fremlin, Measure Theory 264I, printed p.41 (PDF page 40 zero-based), proves lambda_r = 2^(-r) beta_r H^r; 264A–C define precisely that convention. Read the complete 264I proof, which establishes both inequalities via ball covers and the isodiametric estimate. URL: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf . For r=2 the factor is pi/4. The refuter's zero-flux moving indicator is therefore a valid counterexample to the original coefficient normalization.

The repaired Statement defines plane measure directly by an isometric pushforward of Lebesgue measure, with singleton mass one in dimension zero. Step 1.1 proves independence of the chosen orthonormal coordinates using the already cited change-of-variables result; the residual and iff jump condition follow by the original integration-by-parts proof. No imported measure supplier was changed. Complete risk review recorded. Direct/reference item consumers found: `prop-fd-entropy-jump`, `thm-fd-convex-scalar-riemann`, `ex-fd-burgers-shock`, and `cex-fd-expansion-shock`; all belong to batch 23. The A page only inventories this theorem. Entropy-jump requires an explicit matching convention; the other consumers will be checked in their ordered reviews.

`cex-fd-shock-point-values`: all three steps checked; complete risk review. The nonzero spacetime normal gives nullity, measurable finite reassignments preserve every integrable composition a.e., and open-side fields fix traces regardless of assigned values. No edit or decision is owed.

## Completed level 4 review

`prop-fd-entropy-jump`: surgical normalization clarification makes the inherited plane measure explicitly identical to repaired Rankine–Hugoniot. Its bulk chain-rule identity and scalar normal-coordinate calculation prove the residual; continuity and positive patch tests prove both directions of its sign criterion, including an empty interface. Complete risk review recorded. Its only item consumers are the owned scalar Riemann theorem and expansion-shock counterexample. No off-batch consumer repair is needed.

## Completed level 5 review

`thm-fd-convex-scalar-riemann`: accepted reader repair. Raw current hash equals post-reader hash 4eed1e06289cc1019d0bd5f54bd278f6788ec32c7c6b874b2e1fce184ffa8e53; pre-reader hash differs. All eleven steps were read against their eight exact supplier statements. The inverse fan is C1 with the explicit endpoint extensions; the shock coefficient has the correct orientation. The chord integral is nonpositive for every smooth convex entropy. Kružkov pairs are treated directly by splitting at their kink, including endpoint and outside-range k, and are not improperly substituted into a smooth entropy lemma. Initial cutoff limits follow from the explicit order-t trace estimates and bounded time strips. The d=1 plane measure remains singleton mass one, so repaired suppliers do not change any use. Complete risk review recorded before reviewing level 6 consumers.

## Completed level 6 reviews and consumer closure

`cex-fd-expansion-shock`: the positive residual is (b-a)^3/12; weak initial identity and fan comparison are fully conditional and correct. `ex-fd-burgers-fan`: inverse profile, both entropy equalities and the interval [min(0,at),max(0,bt)] give the stated trace estimate. `ex-fd-burgers-shock`: a>b implies b<(a+b)/2<a; Kružkov coefficient is (k-a)(k-b)<=0 between states, zero outside, including endpoints. Complete individual risk reviews recorded. All actual uses of the two changed supplier Statements are unchanged in d=1, where the plane measure has mass one. The Riemann test-space ordering clarification likewise preserves its consumer uses. Full-text item/reference search finds no outside item consumers of these changed interfaces; no consumer Statement change is required beyond the explicit entropy-jump convention. Pages retain empty bodies and compact-v1. No assigned TikZ/tikzcd diagrams occur, and these elementary normal-coordinate arguments require none.

## Additional published alert (not a routed decision)

In `thm-cm-burgers-riemann-shock-and-rarefaction` proof step 1.2 and again step 4.1, the claimed initial-difference support only between u_L epsilon and u_R epsilon is false if both states have the same nonzero sign. E.g. u_L=1,u_R=2: on 0<x<epsilon, the fan equals 1 while the initial datum equals 2. This is nonfatal to the conclusion: replace the support interval by [min(0,u_L epsilon),max(0,u_R epsilon)] of length <=(|u_L|+|u_R|)epsilon, retaining boundedness and the zero limit. The owned Riemann supplier step 4.2 and Burgers-fan example already use this correct interval; no owned repair is necessary. Published/imported bytes remain read-only; owner maintenance is recorded in the published ledger.

## Published routed findings

Independently read all eleven published carriers and their relevant definitions or proof statements. For each, the current canonical hash equals the scope pre_sha256. Findings 1–5 and 7–11 are confirmed nonfatal: actual inline links interrupt their complete statements/definitions, while the mathematics used remains valid. Finding 6 is **false positive**: unchanged `thm-linear-change-of-variables-for-lebesgue-measure` already has all four wikilinks in its immediately following Statement references, with no link in its Statement. No unnecessary edit was made. Each finding has exactly one closed ledger disposition, and all ten true presentation defects have published-maintenance records and deduplicated index entries. The additional published support-estimate alert has its own nonfatal-recorded row and no invented routed decision.

## Final carrier dispositions

The reader's two local repairs are accepted mathematically; their decisions are `amended_repair` because this adjudication also synchronizes each stale manifest Statement to its actual post-reader bytes. Item raw bytes remain identical to post-reader snapshots. The Rankine–Hugoniot fatal defect is fixed with confidence 1, including its entropy-jump consumer convention. All eight HIGH/CRITICAL risk reviews are complete. No unresolved substantive prerequisite, off-batch consumer repair, or proposed withdrawal remains. Published maintenance is explicitly nonfatal-recorded and remains for its owner. No judge, stamp, certification, engine transition, or gate battery is claimed.

## Local validation and reading limits

- Reflow: Rankine–Hugoniot reflowed; entropy-jump unchanged. The final batched `node tools/physics-support/proof-layout.mjs items/thm-fd-rankine-hugoniot.md items/prop-fd-entropy-jump.md items/prop-fd-viscous-entropy-passage.md items/thm-fd-convex-scalar-riemann.md` reports **4 items, 20 steps, 0 defects**. No item edits followed.
- Precheck through `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` passes all four reader/locally edited items; the two reformatted/edited items pass again after reflow. A preliminary direct Node invocation on the .mts helper was unsupported by this runtime; the documented tsx wrapper resolved it. No content defect or ledger row was invented for that invocation failure.
- Rendercheck passes those four items and both pages (6 files), and the two edited items again after reflow.
- Strict batch proof-contract check passes **9/9**, 0 errors/warnings. Its first local run exposed three stale quotations of the reader-reordered Riemann Statement; those quotation records were synchronized to its complete current Statement and the check then passed. This was mechanical citation-record synchronization, not a new mathematical defect.
- Risk report ran before reviews and again with `--require-reviewed`; final result **0 errors**, with all eight HIGH/CRITICAL reviews complete.
- Exact routed coverage and ledger-reference inspection passes: **14 decisions**, each of the 12 findings references exactly one closed row. The additional published estimate alert is separately recorded without adding an unowed decision. All 12 owned complete claim sections were checked for uninterrupted wording and contain no hyperlinks.

Read the current routed items, their exact direct cited dependency statements, distribution-topology inputs, the complete published Burgers argument and relevant surface/divergence definitions. This is not an audit of the full 952-item transitive closure. Fremlin 264I is an external diagnostic for the old normalization; the repaired theorem itself proves its coordinate-measure formula locally from its existing suppliers. Immutable pre/post hashes show the two reader-touched carriers; no reconstruction of unavailable full pre-reader source bytes is claimed. Their current post-reader proofs were independently checked. Native decision hashing, acceptance gates and engine transitions remain the engine's responsibility.
