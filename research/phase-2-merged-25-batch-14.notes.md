# Current local prerequisite closure — 2026-09-09

B14-DEP-1 is repaired at the scaffold level: lem-certified-syntax-coding-operations-are-primitive-recursive supplies sentinel-code operations, with the published complete PR definition in def-bounded-arithmetic-formula. Four direct draft edges reaching six A609 items have been removed, not relabelled published. Canonical plan, SET-3 prose and this manifest agree. No pair, draft home, publication or verdict changed. Both full Sutner PDFs were recovered, relevant complete passages read, and the local bounded-search, quotient and sentinel formulas passed 66962 finite tests. Independent Step 3 and the final source/structural checks remain required. Full contracts/research: research/phase-2-catchup-24-local-syntax-contracts.json. Historical statements below about waiting for A609 are superseded for this consumer only.

# Batch 14 — Step-1 scaffold evidence

Run: `phase-2-catchup-24`; role beta; scope: the two assigned Foundations pairs only.

**Disposition: BLOCKED / not ready for publication or a closure certificate.** The inventory and source harvest are reviewable, but the prerequisite closure is invalid under the current plan, fetch stamps are unavailable in this environment, and the complete transitive semantic audit is not certified. Passing shape checks below does not clear these findings.

## Authorized changes and controlling inputs

Only this batch's `.pages.json`, `.coverage.json`, and `.notes.md` were written in the repository. No item, library page, plan, prose design, shared ledger, or run state was modified. Scratch scripts and check receipts are in `/tmp`.

Read `CLAUDE.md`, README, SCHEMA, WORKFLOW, the generated task, beta scaffold/task instructions, the frontier dependency ledger instructions, current plan and SET-3/SET-5 design sections. The latter prescribe arithmetization through formal relative-consistency transfer, and finite reflection through collapse, with the two named false statements. Page IDs, category, orders 659/660 and 663/664, and requires match the current plan. No design/plan scope conflict was found; the mathematical prerequisite omission below is an additional structural finding, not license to edit the plan.

The current disk status was recomputed with `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run phase-2-catchup-24 --state-dir .autopilot/phase-2-catchup-24`: running, started 2026-09-09T06:21:18Z, update 06:35:52.595Z, scaffold 0/16, no in-flight job. Git head inspected was `209eaa2f1` (Phase-2 wave-1 publication); prior heads included `92b292bfe`, `3a3ced783`. RESUME files were not treated as live-run authority. The driver was not advanced.

Scaffold counts: arithmetization A27/B5; reflection A18/B5; total55. Every item has an explicit deps array, statement, proof route, axiom context and source locator. Interpretation and proof translation precede interpreted incompleteness uses. The named false-statement IDs are preserved. Neither A page exceeds the plan's 60-item limit.

## FATAL B14-DEP-1 — missing structural prerequisite

`arithmetization-incompleteness-and-relative-consistency` currently requires only `deduction-soundness-completeness-and-compactness`. Four actual item edges leave that closure:

- `def-effective-theory-and-certified-godel-numbering` → `def-primitive-recursive-function` (home `primitive-recursive-and-partial-computable-functions`).
- `def-effective-theory-and-certified-godel-numbering` → `def-natural-number-coding-of-finite-sequences` (home `primitive-recursive-and-partial-computable-functions`).
- `lem-primitive-recursive-syntax-and-proof-checking` → `thm-sequence-length-and-coordinate-functions-are-primitive-recursive` (home `primitive-recursive-and-partial-computable-functions`).
- `lem-primitive-recursive-syntax-and-proof-checking` → `prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive` (home `primitive-recursive-and-partial-computable-functions`).

Their mathematical uses are concrete: the definition fixes the PR class and sentinel/self-delimiting finite-sequence serialization; the syntax lemma uses PR coordinate decoding, arithmetic bounds and bounded quantification to check tokens, substitutions and annotated proofs. Removing these edges would leave those operations unproved. The arithmetic proof checker supplies c.e. axiom certificates instead of assuming the axiom set decidable.

Required reconciliation: add existing A609 `primitive-recursive-and-partial-computable-functions` to the arithmetization A page's requires in both controlling prose and plan, retaining its existing B610 companion and prerequisite closure (`robust-machine-models-and-universal-computation`, `construction-of-the-natural-numbers`). This is an existing pair, so no duplicate prerequisite pair or invented ID inventory is proposed. Six actually reached items on that pair remain **draft** on disk:

- `items/prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive.md`
- `items/def-primitive-recursive-function.md`
- `items/def-composition-and-primitive-recursion-schemes.md`
- `items/def-initial-arithmetic-functions.md`
- `items/thm-sequence-length-and-coordinate-functions-are-primitive-recursive.md`
- `items/def-natural-number-coding-of-finite-sequences.md`

Their exact statements were read, including the initial-function and primitive-recursion definitions. Publish/reconcile the needed suppliers under their own authority before clearing this consumer. Co-resident Ackermann domination, Kleene normal form, and lambda-calculus equivalence are not dependencies of the owned proofs. No demand to repair them is made. This dispatch cannot edit prose/plan or their item files, so this finding remains fatal.

## Mathematical contracts and source-sensitive repairs

- Q is the seven-axiom theory, not PA. The order witness is a left addend because commutativity is not a Q theorem. Numeralwise unique representation is separated from uniform PA totality.
- The beta/history route includes division, Euclidean/Bezout and finite CRT arguments locally; those are not hidden imports from an unrelated number-theory page. For recursion the history formula uses **existential** adjacent coordinates at each bounded stage, plus initial and terminal coordinates. Universal implications alone could be vacuous when Q cannot establish total decoding for arbitrary code parameters. Least-output strengthening identifies repeated coordinate occurrences when one is a numeral. Detailed expansion of this corrected formula and its PA verification remains an explicit review obligation; the source's variable errors are not copied.
- Moschovakis 4B.12 has inconsistent/free displayed variables. Avigad's minimization display also requires care about its bound variable. The proposed primitive-recursion route is stated independently in the manifest. Avigad explicitly assumes derivability-condition verification; the uniform bounded-truth proof-certificate lemma supplies a concrete local route using Moschovakis 4C.13. This is not a claim that either book has already verified the library's particular six-scheme/three-rule encoding.
- Godel's G sentence uses consistency for unprovability/truth and omega-consistency for the opposite unprovability. Rosser's two finite cases give the consistency-only incompleteness theorem. Lob precedes G2, avoiding a circular proof.
- ZF's PA interpretation on omega is explicit, including effective schema/proof translation and the standard certified predicate. Internal `Con(T)` and external no-refutation assertions are distinguished. A semantic CTM implication is not promoted to formal relative consistency without a base-theory verification of a total proof reduction.
- The CTM false implication is refuted **relative to external Con(ZFC+Con(ZFC))**: a transitive ZFC model satisfies Con(ZFC), hence supplies a model of S=ZFC+Con(ZFC); G2 for S and deduction give consistency of S+not-TM(ZFC). It does not claim that Con(ZFC) alone establishes that countermodel.
- Delta0 absoluteness is for transitive domains; ordinal absoluteness uses the ambient Foundation convention. Omega is characterized as a **nonzero** limit ordinal with no nonzero limit predecessors. Rank agreement and `x in V_alpha` agreement do not assert equality of internal power sets or V stages.
- The bounded-closure version of Sigma1 needs Collection to convert to an existential Delta0 matrix. Both models must satisfy the equivalence axioms when this conversion is used. Marks 18.8/18.9/18.13 was separately read and added as direct backing; Freiburg's Delta0 section alone is not claimed to prove this hierarchy normalization.
- Finite reflection uses least witness **ranks**, Replacement and a definable omega sequence, without Choice or a truth predicate for V. Countable elementary hulls use the published ZFC LS theorem with explicit `def-axiom-of-choice`. Actual restricted membership has external well-foundedness by Foundation; elementarity supplies restricted extensionality before collapse. An arbitrary internally well-founded model is not substituted.
- Condensation is an interface to the planned constructible-hierarchy page; Shoenfield is orientation only. Kamensky's analytic hierarchy and entire printed Shoenfield sketch were read, including its explicitly omitted coding argument. No Shoenfield theorem or catalogue item is used as a proof supplier.

## Dependency evidence and limits

Direct owned IDs resolve; no direct forward edge or local item cycle was found. A read-only graph walk including deps, justified_by, and body wikilinks before Remarks reached 259 external records (253 published, six draft). It found no `proved_here:false` record or item homed on `deferred-set-theory-beyond-choice`. The owned page-requires closure also avoids that page. These are mechanical observations, **not** a completed semantic audit of all259 records. Remarks and external_refs are not silently promoted to suppliers, but their exclusion still requires checking their actual role where ambiguous.

The detailed supplier readings included:

| Supplier | Exact use and checked limitation |
|---|---|
| `def-set-coded-formal-derivation` | Six logical schemes, MP/UG/restricted existential elimination; certified arithmetic checking must retain each eigenvariable and premise-order condition. |
| `thm-first-order-sentence-deduction` | Sentence assumptions; all three rule cases, especially existential elimination, support the consistency countermodel deduction. |
| `thm-set-language-first-order-soundness` | Both model-to-consistency and finite-refutation impossibility use the full six-scheme/three-rule proof, nonempty carriers. |
| `thm-countable-first-order-completeness` | External ZF, explicitly countable language, at most countable nonempty Henkin model; no transitivity or AC conclusion. |
| `def-coded-first-order-zf-theory` | Exact axiom/schema serialization; implication-only Power Set and von Neumann Infinity, Choice an additional sentence. |
| `prop-minimum-rank-selection-and-collection` | Choice-free least-rank witness collection via Replacement and a V-stage bound. |
| `thm-membership-rank-and-hierarchy-levels` | `rank(x)<alpha iff x in V_alpha`; not equality of inner/external stages. |
| `thm-mostowski-collapse-for-extensional-relations` | Well-founded, setlike, extensional relation; set-domain map and image are sets; no ambient Foundation needed once well-foundedness is supplied. |
| `lem-extensional-collapse-is-injective` | Induction on maximum of both parent ranks, so both predecessor ranks decrease. |
| `def-extensional-relation-and-collapse-map` / `thm-recursion-on-well-founded-setlike-relations` | Definable class schema, set-valued totalized rule, unique restrictions by Replacement. |
| `lem-compatible-well-founded-recursion-attempts` | Predecessor-closed domains, agreement on overlaps, uniquely collected attempts; no choice. |
| `lem-finite-predecessor-closure-is-a-set` / `thm-induction-on-well-founded-relations` | Omega construction of set cones, minimal counterexample in a cone; class induction does not choose a descending sequence. |
| `thm-downward-lowenheim-skolem-with-parameters` / `lem-skolem-hull-size-and-elementarity` | Infinite set structure, finite-arity language, kappa at least language size; AC selects witnesses and the hull size witnesses. |
| `thm-elementary-ordinal-chain-union` | Nonempty set-ordinal chain, no continuity assumption; finite tuples share a stage. |
| `prop-isomorphism-invariance-of-satisfaction` | Equality needs injectivity; existential reverse direction needs surjectivity; collapse gives both. |
| `def-relativization-to-a-definable-class` | Fresh binders, guard insertion, formula-by-formula class shorthand; no universe satisfaction set. |
| `thm-hartogs` | Choice-free uncountable ordinal Hartogs(omega); all well-ordered subsets are collected, no selection of one order per subset. |

**B14-AUDIT-2, remaining closure obligation:** the walk is broader than a proof DAG and found fourteen definition/justification/body-reference cycles below. They are not automatically mathematical circularities (e.g. a definition points to its well-definedness proof), but their roles must be semantically classified before a full closure certificate. No declared edge was deleted merely to obtain an acyclic graph. The initial 747-record discovery also followed orientation links and was not a semantic audit. The remaining transitive records have not all received an exact-statement/hypothesis/proof-use audit in this dispatch. Both this obligation and B14-DEP-1 prevent calling the scaffold ready.

- `def-union-of-a-set-and-binary-union` → `lem-unions-and-intersections-of-small-families` → `def-union-of-a-set-and-binary-union`
- `lem-the-power-set-of-a-set-is-a-set` → `def-axiom-of-power-set` → `lem-the-power-set-of-a-set-is-a-set`
- `def-ordinal-multiplication` → `lem-ordinal-product-as-an-order-type` → `def-ordinal-multiplication`
- `def-field` → `lem-of-inverse-unique` → `def-field`
- `lem-sup-unique` → `def-infimum` → `lem-sup-unique`
- `def-integers` → `lem-int-equivalence` → `def-integers`
- `def-int-operations` → `lem-int-add-well-defined` → `def-int-operations`
- `def-int-operations` → `lem-int-mul-well-defined` → `def-int-operations`
- `def-rationals` → `lem-rat-equivalence` → `def-rationals`
- `thm-int-ordered-ring` → `def-int-order` → `thm-int-ordered-ring`
- `def-rat-operations` → `lem-rat-ops-well-defined` → `def-rat-operations`
- `def-rat-operations` → `lem-rat-inverse-well-defined` → `def-rat-operations`
- `def-rat-order` → `lem-rat-positive-denominator` → `def-rat-order`
- `def-integer-power` → `lem-power-laws` → `def-integer-power`

## Frontier and published-consumer bookkeeping

This Step-1 batch can write only its three artifacts; reconciliation into shared ledgers is pending. Incoming dependency: the six draft PR items listed above, at existing A609, supply numerical syntax and representation to A659. Outgoing interfaces: `thm-finite-fragment-relative-consistency-transfer` and `thm-formal-relative-consistency-from-verified-proof-reduction` supply the planned forcing-transfer page A681 and consistency applications at A677; `thm-montague-levy-finite-reflection`, finite-fragment corollaries and collapse items supply planned inner models A675 and forcing models A679. These are proposed contracts, not accepted cross-batch proofs.

`items/rem-continuum-hypothesis.md` was read as a potential published consumer. It explicitly records independence as external orientation; it is not used by any owned proof. Its later conversion to proved CH/GCH relative-consistency statements needs the actual constructibility/forcing suppliers plus the two transfer items above. This remains later consumer work, not a blocker on reflection or incompleteness. The shared ledger already records its orientation-only classification. No new confirmed published-consumer defect was established and no existing ledger finding was cleared. Other co-resident published content was not required to pass a semantic audit merely because it shares a page.

## Source access, harvest, and actual failures

The coverage file is the durable item-to-source map: final80 harvest rows, all55 item IDs mapped, nine active source records for six distinct URLs. Full lecture-note PDFs were available through browser text extraction. Exact selected headings/locators, local adaptations, and every harvested disposition are recorded there. Source exercises are identified as exercises, and a sketch is not called a complete proof of an omitted lemma.

Searches performed included Godel incompleteness/representability/derivability lecture notes; set theory reflection/absoluteness/finite-fragment consistency notes; Logic Matters IGT2; Avigad CMU notes; and Berkeley Marks Shoenfield/Sigma1/rank notes. They recovered author/institution-hosted full texts, not only abstracts. Original URLs remain active because browser retrieval succeeded. A network DNS failure is not evidence of absence from the open web.

Local curl first failed for Avigad and Geschke with exit6 (DNS). `source-fetch-check --stamp` then made an initial request plus five real retries for each of the seven initial records; every attempt returned `EAI_AGAIN`. Those exact timestamps and outcomes are preserved by the tool in coverage. Marks was added later and fetched through `/tmp/b14-new-source.coverage.json --stamp`; its six actual attempts also failed, and the same attempt evidence is reused for its identical URL on both pages. No fetch stamp, read stamp, dropped source, invented archive failure, or `confidence:certain` replacement was manufactured. Browser originals already supplied recovery of readable text, so further archive hunting would not cure the local DNS transport failure.

Additional source caveats: Freiburg 3.5.11 omits a consistency qualification in its finite-axiomatizability assertion; that corollary is not imported. Its last omega formula must exclude zero. Its basic-operation absoluteness statements need transitive models. The source's three axiom-removal examples are out of the assigned scope; they are not incorrectly assigned to the constructibility page.

## Checks actually run

Commands below are read-only except for the authorized coverage fetch stamp operation and /tmp receipts.

| Check | Actual result |
|---|---|
| `coverage-checklist ...batch-14.coverage.json --require-destination` | Final PASS: 2 pages,80 harvests,0 errors/warnings. |
| `manifest-deps research/phase-2-catchup-24-batch-*.pages.json` | PASS at observed run snapshot:616 items,0 normalized/errors. |
| `content-policy ...batch-14.pages.json --manifest-only` | Final PASS:55 scoped items,0 errors/warnings. |
| `validate-plan research/plan-spec.json` | Exit0,1624 pages;683 lacked inventories. This does not include the new owned manifest inventories. Existing redundant-prerequisite warnings were printed. |
| `validate-plan /tmp/b14-overlay-plan.json` | Exit1: exactly one undeclared-prereq error for A659→A609. Temporary overlay inserts owned inventories without editing the plan. |
| `extcheck --quiet` | Exit0 with61 existing published unproved-material warnings. It reads disk/current plan, not an acceptance of the unspliced owned draft. |
| `url-sweep --coverage ...batch-14.coverage.json --out /tmp/b14-url-liveness.json --fail-on-dead` | Final exit1:0/6 live by local client; all six fail hostname resolution. |
| `source-backing --coverage ... --liveness /tmp/b14-url-liveness.json --require-verified` | Exit1: no locally verified open source backing; full final output in /tmp/b14-backing-final.txt. |
| `source-fetch-check --coverage ...batch-14.coverage.json --stamp` | Initial exit1:0/7 verified, seven failures, six attempts per record. Marks later checked separately with the same tool. |
| `source-fetch-check --coverage ...batch-14.coverage.json` | Final exit1:0/9 verified, nine unstamped records, zero documented drops. |
| Custom direct-order/closure/graph inspection |55 local items,0 unresolved direct IDs,0 direct forward edges; four actual edges outside page closure;259 external graph records; no detected deferred-ledger/proved-here-false node;14 unclassified reference cycles. |

No publication, model judgment, rendered-item check, full proof verification, or final acceptance is claimed. Next reconciliation must resolve the plan edge and draft supply, finish the transitive semantic audit and corrected encoding proof review, and obtain real full-text fetch stamps in a working network environment. Preserve all mathematics and all source history while doing so.

Final owned-file checks: JSON parse and55 unique IDs passed; no existing item ID collision; `git diff --check -- <three owned files>` exited0. All three artifacts were untracked at handoff; no commit was made.

## Overlay reconciliation — B14-DEP-1 (2026-09-09)

The whole-run overlay rediscovered the batch's existing structural finding. Read both exact consumer contracts and full statements/proofs of `def-primitive-recursive-function`, `def-natural-number-coding-of-finite-sequences`, `thm-sequence-length-and-coordinate-functions-are-primitive-recursive`, and `prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive`, plus the initial-function and recursion-scheme definitions. Added the existing A609 `primitive-recursive-and-partial-computable-functions` backward page edge to the manifest, SET-3 prose and canonical plan; synchronized the batch's existing inventories without changing them. This fixes declaration closure, not publication: all six suppliers named in B14-DEP-1 are **draft**, including the two theorems/operations used for sentinel-code scans. The preliminary progress message calling these published was incorrect; current item frontmatter is authoritative. The owning supplier needs its own review/publication authority before consumer acceptance. No item-file edits, extra pair, scope-count change or proof weakening. Checks in the final report receipt. This report and batch-14 notes record the new overlay finding.


### Reconcile-3 final check checkpoint — 2026-09-09

See `research/phase-2-catchup-24-scaffold-repair-3.notes.md`, final verification receipt, for exact current checks, artifact hashes and all remaining obligations. Whole-run manifest-deps passes (667 items); content policy and full plan overlay retain the four missing theorem suppliers; coverage retains Haar and four SET-10 rows; fetch/liveness remain blocked. Scope identities and declared Foundations/Recorded boundaries pass. The A609 declared prerequisite was repaired but its six suppliers are draft, not published. No worker exit constitutes acceptance; preserve this batch's unresolved mathematics and historical dated evidence.

## Step-3 fix pass

- **Finding set / disposition:** No batch-14 finding ID was issued. The stable group-g review and verdict records mark both `arithmetization-incompleteness-and-relative-consistency` and `reflection-absoluteness-and-elementary-submodels` (and their B companions) **sufficient**, each with `missing: []`. This is a no-change rebuttal receipt, not a new mathematical claim.
- **Historical B14-DEP-1 / disposition:** Resolved by the current contracts, rather than by accepting the six draft A609 suppliers. `def-effective-theory-and-certified-godel-numbering` now uses published `def-bounded-arithmetic-formula` and is justified by local `lem-certified-syntax-coding-operations-are-primitive-recursive`; the latter has only that definition, the certified-code definition, and published bounded-quantifier closure as its direct inputs. The syntax-checking lemma depends on that local lemma. Thus none of the old six A609 IDs is a declared or proposed proof supplier. The local sentinel-code proof explicitly supplies bounded search, parsing, fixed-state recursion, and finite-history operations; the coverage records 66,962 finite formula checks. This is the exact reroute accepted in the group review, not a removal of an unused declaration.
- **Dependency and plan evidence:** A659 has exactly the earlier page requirements A657 `deduction-soundness-completeness-and-compactness` and A613 `the-arithmetical-hierarchy-and-posts-theorem`; A663 has A657 and earlier A661 `well-founded-relations-rank-and-the-cumulative-hierarchy`; each B page requires only its A companion. The four current plan inventories agree with the manifest, except that the two B manifests omit the semantically empty `forwardRefs: []` field that the plan writes explicitly. All 28 A659, five B660, 18 A663, and five B664 contracts have explicit dependency arrays. Their nonlocal direct suppliers are published; the owned cross-frontier input remains `[]`, since no actual proof use reaches another selected batch. `extcheck` found no owned Foundations path to the Recorded catalogue.
- **Source evidence:** The coverage records complete fetch-verified PDFs for all 11 active source records: the independent Moschovakis/Avigad and Sutner treatments support A659; Geschke/Freiburg, with Marks and Kamensky for the stated hierarchy/orientation limits, support A663. The group review's exact locators remain aligned to the manifest contracts. The fresh source check below retained all 11 receipts and added no invented stamp or source drop.
- **Changed record:** `research/phase-2-catchup-24-batch-14.notes.md` only. The manifest, coverage, cross-batch input, shared plan, items, library pages, and published-consumer ledger remain unchanged: the current review supplied no defect needing a repair in any of them.
- **Checks run:** `coverage-checklist --require-destination` (2 pages, 82 harvested results, 0 errors/warnings); whole-run `manifest-deps` (691 items, 0 normalized, 0 errors); manifest-only content policy (56 scoped items, 0 errors/warnings); `validate-plan` (exit 0; declared page order acyclic and consistent, with no item-level cycle, forward edge, B-page dependency, or unresolved ID among itemized pages); `extcheck --quiet` (exit 0, 57 unrelated existing published/unproved-material warnings); and `source-fetch-check --stamp` (11/11 fetch-verified and resolved, 0 newly stamped, 0 documented drops). The live-run status was also recomputed with the repository TypeScript wrapper; it reports Step 3 in progress and no in-flight job.
- **Remaining blocker:** None for this batch's Step-3 scaffold. Normal engine recheck/final-resolution and later author/judge/publication stages remain outside this no-change repair dispatch; this note does not waive them or claim publication.


## Final group-g adjudication — 2026-09-09

The arithmetization pair is repaired: four strategies now explicitly discharge Q numeral uniqueness and distinguish PA-Sigma1 equivalence from Q certification, including the fixed-proof translation for D3. Reflection is accepted. No inventories, dependency arrays or axiom bases changed.

Current evidence, exact dependency uses, scope dispositions and executed checks: [group final recheck](phase-2-catchup-24-alpha-g-recheck.md). All current owned cross-batch input arrays remain empty after declared-edge and proof-use reconciliation. Terminal records bind the current scaffold bytes. This receipt supersedes conflicting prior proposed repair instructions; published files were not edited.


## Current final adjudication — scaffold-final-g-7d70f31f45c71ce5

The current decision and executed-check evidence are in `research/phase-2-catchup-24-alpha-g-recheck.md`. Earlier missing-inventory and missing-construction findings are superseded for the current bytes. Both pairs are accepted; no mathematical edit in this dispatch.

## Step-5 authoring

2026-09-10. All 56 item files initially absent. Current group-g Step-3 decisions and final recheck read; inventories retained. All assigned content now has authored drafts; source-evidence completion is qualified below, and no mathematical review stamp is inferred from scaffolds. Cross-batch consumer input remains empty; published prerequisites are read-only.

- Checkpoint `def-set-theoretic-levy-hierarchy-and-absoluteness`: authored definition/orientation; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-set-coded-terms-and-formulas, def-relativization-to-a-definable-class. Sources: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf Definition 18.8, Levy hierarchy, p76. Provenance: ai-altered/not-applicable. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-delta-zero-absoluteness-for-transitive-sets`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-set-theoretic-levy-hierarchy-and-absoluteness, thm-structural-recursion-on-set-coded-syntax. Sources: https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf Proposition 3.5.5, p51. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `lem-bounded-definitions-of-basic-set-operations`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-delta-zero-absoluteness-for-transitive-sets. Sources: https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf Propositions 3.5.6/3.5.8 and Lemma 3.5.7 pp51–52. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-ordinals-and-omega-are-absolute-in-transitive-models`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-delta-zero-absoluteness-for-transitive-sets, lem-bounded-definitions-of-basic-set-operations, def-ordinal. Sources: https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf §3.5 final ordinal/omega examples, p55. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-rank-and-hierarchy-membership-absoluteness`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-ordinals-and-omega-are-absolute-in-transitive-models, lem-bounded-definitions-of-basic-set-operations, def-membership-rank-of-a-set, thm-membership-rank-and-hierarchy-levels. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf §3 end pp9–10, hierarchy-membership absoluteness; local explicit rank induction. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `lem-levy-sigma-one-existential-normal-form`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-set-theoretic-levy-hierarchy-and-absoluteness, prop-minimum-rank-selection-and-collection, lem-bounded-definitions-of-basic-set-operations. Sources: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf Exercise 18.9, bounded quantifier closure, p76. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-sigma-one-upward-and-pi-one-downward-absoluteness`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-delta-zero-absoluteness-for-transitive-sets, lem-levy-sigma-one-existential-normal-form. Sources: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf Proposition 18.13, upward and downward absoluteness, p78. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `lem-finite-formula-witness-criterion`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-set-theoretic-levy-hierarchy-and-absoluteness, thm-structural-recursion-on-set-coded-syntax. Sources: https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf Proposition 3.5.9 pp52–53; Geschke Lemma 4.1 p10. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `lem-finite-formula-witness-rank-bounds`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: lem-finite-formula-witness-criterion, prop-minimum-rank-selection-and-collection, thm-membership-rank-and-hierarchy-levels. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf Theorem 4.3 proof pp10–11. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-montague-levy-finite-reflection`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: lem-finite-formula-witness-rank-bounds, lem-finite-formula-witness-criterion, def-cumulative-hierarchy-stages, prop-cumulative-hierarchy-transitivity-and-growth, thm-recursion. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf Theorem 4.3, complete proof pp10–11; Freiburg Theorem 3.5.10 pp53–54. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `cor-transitive-models-of-each-finite-zf-fragment`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-montague-levy-finite-reflection, def-coded-first-order-zf-theory, def-axiom-of-choice. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf Theorem 4.3 application p11. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-collapse-of-elementary-membership-submodels`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-elementary-set-structure-embedding, thm-mostowski-collapse-for-extensional-relations, prop-isomorphism-invariance-of-satisfaction. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf Theorem 4.5 and Corollary 4.6 pp11–12. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `lem-collapse-fixes-transitive-parts-and-orders-ordinals`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-collapse-of-elementary-membership-submodels, def-ordinal. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf Exercise 4.7 p12, with complete local induction and ordinal calculation. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-countable-elementary-submodels-and-transitive-collapses`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-collapse-of-elementary-membership-submodels, thm-downward-lowenheim-skolem-with-parameters, def-axiom-of-choice. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf Theorem 4.4 and Corollary 4.6 pp11–12. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `cor-countable-transitive-models-of-fixed-zfc-fragments`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: cor-transitive-models-of-each-finite-zf-fragment, thm-countable-elementary-submodels-and-transitive-collapses, def-axiom-of-choice. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf Corollary 4.6 pp11–12. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `cor-elementary-membership-chains-and-collapse-compatibility`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-elementary-ordinal-chain-union, thm-collapse-of-elementary-membership-submodels. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf §4 elementary-submodel and collapse interface pp10–12; chain union supplied by published SET-2 theorem. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `rem-condensation-requires-additional-constructible-structure`: authored definition/orientation; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: lem-collapse-fixes-transitive-parts-and-orders-ordinals, thm-collapse-of-elementary-membership-submodels. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf §4 Exercise 4.7 p12; §5 constructibility boundary p13. Provenance: ai-altered/not-applicable. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `rem-shoenfield-absoluteness-scope-orientation`: authored definition/orientation; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-set-theoretic-levy-hierarchy-and-absoluteness, thm-sigma-one-upward-and-pi-one-downward-absoluteness. Sources: https://mkamensky.github.io/teaching/2012f/set-theory/notes.pdf §5.2 Definition 5.2.3 and Remark 5.2.4 p46; Theorem 5.2.8 and proof sketch p47, orientation only. Provenance: ai-altered/not-applicable. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `ex-bounded-set-formulas-and-witness-direction`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-delta-zero-absoluteness-for-transitive-sets, thm-sigma-one-upward-and-pi-one-downward-absoluteness, lem-bounded-definitions-of-basic-set-operations. Sources: https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf Propositions 3.5.6/3.5.8 pp51–52. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `ex-internal-power-set-can-miss-an-external-subset`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-rank-and-hierarchy-membership-absoluteness, lem-bounded-definitions-of-basic-set-operations, thm-ordinals-and-omega-are-absolute-in-transitive-models. Sources: https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf §3.5 distinction between bounded operation graphs and unbounded power-set quantification, local diagonal example. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `ex-reflection-of-two-formulas-with-parameters`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-montague-levy-finite-reflection, cor-transitive-models-of-each-finite-zf-fragment. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf Theorem 4.3 pp10–11. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `fs-a-countable-elementary-submodel-is-a-transitive-subset`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-countable-elementary-submodels-and-transitive-collapses, lem-collapse-fixes-transitive-parts-and-orders-ordinals, def-axiom-of-choice, thm-hartogs. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf §4 Theorem 4.4 and Exercise 4.7 pp11–12, local counterexample. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `ex-collapse-chain-maps-need-not-be-inclusions`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: cor-elementary-membership-chains-and-collapse-compatibility, lem-collapse-fixes-transitive-parts-and-orders-ordinals. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf §4 collapse interface pp11–12; published chain theorem. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `def-robinson-q-and-peano-arithmetic`: authored definition/orientation; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-set-coded-formal-derivation. Sources: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf §4B.5 pp147 and §4B pp145–149; Avigad §4.3 pp90–91. Provenance: ai-altered/not-applicable. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `def-effective-theory-and-certified-godel-numbering`: authored definition/orientation; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-bounded-arithmetic-formula, def-set-coded-formal-derivation. Sources: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf §4A.2–4A.9 pp140–144; c.e. certificate variant is local. Provenance: ai-altered/not-applicable. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `lem-certified-syntax-coding-operations-are-primitive-recursive`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-effective-theory-and-certified-godel-numbering, def-bounded-arithmetic-formula, lem-bounded-quantifiers-preserve-primitive-recursiveness. Sources: https://www.cs.cmu.edu/~cdm/resources/00-primrec.pdf Printed slides 13–38, 42–59; bounded-search exercise supplied by the local formula; https://www.cs.cmu.edu/~cdm/resources/02-coding.pdf Printed slides 9–35; coding/state recursion framework, with the sentinel variant proved locally. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `lem-q-numeral-calculation-and-bounded-cases`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-robinson-q-and-peano-arithmetic. Sources: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf Lemmas 4B.6–4B.10, p147. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `lem-godel-beta-coding-and-q-remainder`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-robinson-q-and-peano-arithmetic, lem-q-numeral-calculation-and-bounded-cases. Sources: https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf §4.3 Lemmas 4.3.4 and Theorem 4.3.7, pp93–96; Moschovakis Lemma 4B.8 p147. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `def-numeralwise-representability-and-arithmetic-sigma-one`: authored definition/orientation; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-robinson-q-and-peano-arithmetic. Sources: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf Definition 4B.1 pp145–146 and §4C.11 p154. Provenance: ai-altered/not-applicable. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-primitive-recursive-numeralwise-representability`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-effective-theory-and-certified-godel-numbering, lem-q-numeral-calculation-and-bounded-cases, lem-godel-beta-coding-and-q-remainder, def-numeralwise-representability-and-arithmetic-sigma-one. Sources: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf Lemmas 4B.3–4B.4, 4B.11–4B.12 and Theorem 4B.13, pp146–148; Proposition 4C.12 p155. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `lem-primitive-recursive-syntax-and-proof-checking`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-effective-theory-and-certified-godel-numbering, lem-certified-syntax-coding-operations-are-primitive-recursive. Sources: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf Lemma 4A.3 pp140–141 and Lemma 4A.9 p144. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `def-effective-interpretation-and-proof-translation`: authored definition/orientation; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-set-coded-formal-derivation, lem-primitive-recursive-syntax-and-proof-checking. Sources: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf Definition 4C.1 pp150–151, strengthened local domain/quotient interface. Provenance: ai-altered/not-applicable. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `lem-interpretation-translates-finite-derivations`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-effective-interpretation-and-proof-translation, def-set-coded-formal-derivation, thm-first-order-sentence-deduction, lem-hilbert-propositional-and-equality-rules, lem-derivation-finite-support-and-concatenation. Sources: https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf Lemma 3.5.12 p54; Moschovakis Definition 4C.1 p150; full proof-map refinement local. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `def-arithmetic-provability-and-consistency`: authored definition/orientation; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-primitive-recursive-numeralwise-representability, lem-primitive-recursive-syntax-and-proof-checking. Sources: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf Definition 4A.8 p144; Definition 4C.6 p152; Proposition 4C.13 p155. Provenance: ai-altered/not-applicable. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-arithmetic-diagonal-lemma`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-primitive-recursive-numeralwise-representability, lem-primitive-recursive-syntax-and-proof-checking. Sources: https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf Lemma 4.5.1 and complete proof, pp108–109. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-first-incompleteness-with-explicit-soundness`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-arithmetic-diagonal-lemma, def-arithmetic-provability-and-consistency, lem-q-numeral-calculation-and-bounded-cases. Sources: https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf Theorem 4.6.1 and proof, pp110–111. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-rosser-incompleteness-for-effective-theories`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-arithmetic-diagonal-lemma, def-arithmetic-provability-and-consistency, lem-q-numeral-calculation-and-bounded-cases, lem-interpretation-translates-finite-derivations. Sources: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf Theorem 4C.4, complete proof pp151–152. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `lem-pa-uniform-bounded-truth-proof-certificates`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: lem-q-numeral-calculation-and-bounded-cases, lem-godel-beta-coding-and-q-remainder, thm-primitive-recursive-numeralwise-representability, lem-primitive-recursive-syntax-and-proof-checking, def-arithmetic-provability-and-consistency. Sources: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf Proposition 4C.13(2), proof pp155–156, with all bounded constructor cases supplied locally. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-hilbert-bernays-lob-derivability-conditions`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: lem-pa-uniform-bounded-truth-proof-certificates, def-arithmetic-provability-and-consistency, lem-primitive-recursive-syntax-and-proof-checking, lem-interpretation-translates-finite-derivations. Sources: https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf §4.7 pp113–115 conditions 1–3 (source omits verification); local verification backed by Moschovakis Proposition 4C.13. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-lob-from-derivability-conditions`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-arithmetic-diagonal-lemma, thm-hilbert-bernays-lob-derivability-conditions, lem-interpretation-translates-finite-derivations. Sources: https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf Theorem 4.8.1, pp115–116, complete formal derivation. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-second-incompleteness-for-standard-provability`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-lob-from-derivability-conditions, def-arithmetic-provability-and-consistency, thm-hilbert-bernays-lob-derivability-conditions. Sources: https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf Theorems 4.7.1–4.7.2 pp114–115 and Theorem 4.8.1 p116. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-tarski-arithmetic-truth-undefinability`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-arithmetic-diagonal-lemma, def-robinson-q-and-peano-arithmetic, thm-set-language-first-order-soundness. Sources: https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf Theorem 4.9.5 and complete proof, p118. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-explicit-definitions-give-conservative-extensions`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-first-order-syntactic-consistency, def-effective-interpretation-and-proof-translation, lem-interpretation-translates-finite-derivations. Sources: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf §4C.1 interpretation framework; conservative extension already defined in published def-first-order-syntactic-consistency. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `lem-zf-arithmetic-interpretation-and-effective-axioms`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-robinson-q-and-peano-arithmetic, def-effective-interpretation-and-proof-translation, lem-primitive-recursive-syntax-and-proof-checking, def-coded-first-order-zf-theory, thm-recursion, thm-induction-principle, thm-hilbert-bernays-lob-derivability-conditions. Sources: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf Proposition 4C.3 p150 (statement only); local proof via earlier ω recursion and induction. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-model-existence-versus-syntactic-consistency`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-countable-first-order-completeness, thm-set-language-first-order-soundness, def-arithmetic-provability-and-consistency. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf §3 pp8–9 and §5.1 p13, model/consistency conventions. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `def-countable-transitive-model-and-fragment-transfer`: authored definition/orientation; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-theories-models-and-semantic-consequence, def-relativization-to-a-definable-class, def-coded-first-order-zf-theory. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf §4 pp10–12, especially paragraph before Lemma 4.1 and Corollary 4.6. Provenance: ai-altered/not-applicable. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `lem-transitive-zf-models-have-correct-proof-codes`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-countable-transitive-model-and-fragment-transfer, lem-zf-arithmetic-interpretation-and-effective-axioms, lem-primitive-recursive-syntax-and-proof-checking. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf §5.1 pp12–13 (standard versus internal codes); local restricted arithmetic proof, not later general rank absoluteness. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-consistency-does-not-supply-a-transitive-zfc-model`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: lem-transitive-zf-models-have-correct-proof-codes, thm-second-incompleteness-for-standard-provability, thm-model-existence-versus-syntactic-consistency, lem-zf-arithmetic-interpretation-and-effective-axioms, thm-first-order-sentence-deduction. Sources: https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf §4.7 second incompleteness; local application using the transitive-proof-code lemma; https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf Exercise 18.15, consistency versus well-founded models, p79. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-finite-fragment-relative-consistency-transfer`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-countable-transitive-model-and-fragment-transfer, thm-model-existence-versus-syntactic-consistency, lem-derivation-finite-support-and-concatenation. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf §4 paragraph preceding Lemma 4.1 pp10–11, corrected explicit formalization hypotheses. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `thm-formal-relative-consistency-from-verified-proof-reduction`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-finite-fragment-relative-consistency-transfer, lem-interpretation-translates-finite-derivations, def-arithmetic-provability-and-consistency. Sources: https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf Lemma 3.5.12 p54; formal proof-map refinement of its finite derivation argument. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `rem-semantic-ctm-versus-formal-relative-consistency`: authored definition/orientation; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: def-countable-transitive-model-and-fragment-transfer, thm-finite-fragment-relative-consistency-transfer, thm-formal-relative-consistency-from-verified-proof-reduction, thm-consistency-does-not-supply-a-transitive-zfc-model. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf §4 pp10–12, finite-fragment discussion. Provenance: ai-altered/not-applicable. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `ex-godel-diagonal-substitution-calculation`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-arithmetic-diagonal-lemma. Sources: https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf Lemma 4.5.1 proof p109. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `ex-consistent-theory-with-an-internal-false-proof`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-second-incompleteness-for-standard-provability, thm-model-existence-versus-syntactic-consistency, thm-first-order-sentence-deduction, def-robinson-q-and-peano-arithmetic. Sources: https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf §4.7 pp114–115, local application. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `ex-explicit-function-definition-is-conservative`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-explicit-definitions-give-conservative-extensions, def-robinson-q-and-peano-arithmetic. Sources: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf §4C.1 interpretation framework, local worked instance. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `fs-con-zfc-implies-a-transitive-model-of-zfc`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-consistency-does-not-supply-a-transitive-zfc-model. Sources: https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf §4.7 second incompleteness, applied by the owned strength-gap theorem. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

- Checkpoint `ex-finite-proof-support-in-relative-consistency`: authored argument; exact claim/conventions and boundary calculations are in the item and matching contract. Dependencies: thm-finite-fragment-relative-consistency-transfer, thm-formal-relative-consistency-from-verified-proof-reduction. Sources: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf §4 pp10–11 finite-fragment transfer paragraph. Provenance: ai-altered/ai-altered. Final batch checks passed as recorded below; no judge stamp. Next: address the source-evidence limitation below during owning Alpha review.

### Final authoring checkpoint — 2026-09-10

Draft content and contracts have been written for all 56 assigned IDs and all four pages. The inventory, page IDs and promised scope are retained. Each proof-bearing item contains a numbered argument; contracts map its actual numbered claims, cited local statements and eight boundary cases. Definition/remark contracts give item-specific boundary and applicability decisions. These are authoring records, not independent acceptance or certification. The complete item inventory follows.

- Page `library/foundations/arithmetization-incompleteness-and-relative-consistency.md` (28 items):

  - `def-robinson-q-and-peano-arithmetic`
  - `def-effective-theory-and-certified-godel-numbering`
  - `lem-certified-syntax-coding-operations-are-primitive-recursive`
  - `lem-q-numeral-calculation-and-bounded-cases`
  - `lem-godel-beta-coding-and-q-remainder`
  - `def-numeralwise-representability-and-arithmetic-sigma-one`
  - `thm-primitive-recursive-numeralwise-representability`
  - `lem-primitive-recursive-syntax-and-proof-checking`
  - `def-effective-interpretation-and-proof-translation`
  - `lem-interpretation-translates-finite-derivations`
  - `def-arithmetic-provability-and-consistency`
  - `thm-arithmetic-diagonal-lemma`
  - `thm-first-incompleteness-with-explicit-soundness`
  - `thm-rosser-incompleteness-for-effective-theories`
  - `lem-pa-uniform-bounded-truth-proof-certificates`
  - `thm-hilbert-bernays-lob-derivability-conditions`
  - `thm-lob-from-derivability-conditions`
  - `thm-second-incompleteness-for-standard-provability`
  - `thm-tarski-arithmetic-truth-undefinability`
  - `thm-explicit-definitions-give-conservative-extensions`
  - `lem-zf-arithmetic-interpretation-and-effective-axioms`
  - `thm-model-existence-versus-syntactic-consistency`
  - `def-countable-transitive-model-and-fragment-transfer`
  - `lem-transitive-zf-models-have-correct-proof-codes`
  - `thm-consistency-does-not-supply-a-transitive-zfc-model`
  - `thm-finite-fragment-relative-consistency-transfer`
  - `thm-formal-relative-consistency-from-verified-proof-reduction`
  - `rem-semantic-ctm-versus-formal-relative-consistency`

- Page `library/foundations/arithmetization-incompleteness-and-relative-consistency-examples.md` (5 items):

  - `ex-godel-diagonal-substitution-calculation`
  - `ex-consistent-theory-with-an-internal-false-proof`
  - `ex-explicit-function-definition-is-conservative`
  - `fs-con-zfc-implies-a-transitive-model-of-zfc`
  - `ex-finite-proof-support-in-relative-consistency`

- Page `library/foundations/reflection-absoluteness-and-elementary-submodels.md` (18 items):

  - `def-set-theoretic-levy-hierarchy-and-absoluteness`
  - `thm-delta-zero-absoluteness-for-transitive-sets`
  - `lem-bounded-definitions-of-basic-set-operations`
  - `thm-ordinals-and-omega-are-absolute-in-transitive-models`
  - `thm-rank-and-hierarchy-membership-absoluteness`
  - `lem-levy-sigma-one-existential-normal-form`
  - `thm-sigma-one-upward-and-pi-one-downward-absoluteness`
  - `lem-finite-formula-witness-criterion`
  - `lem-finite-formula-witness-rank-bounds`
  - `thm-montague-levy-finite-reflection`
  - `cor-transitive-models-of-each-finite-zf-fragment`
  - `thm-collapse-of-elementary-membership-submodels`
  - `lem-collapse-fixes-transitive-parts-and-orders-ordinals`
  - `thm-countable-elementary-submodels-and-transitive-collapses`
  - `cor-countable-transitive-models-of-fixed-zfc-fragments`
  - `cor-elementary-membership-chains-and-collapse-compatibility`
  - `rem-condensation-requires-additional-constructible-structure`
  - `rem-shoenfield-absoluteness-scope-orientation`

- Page `library/foundations/reflection-absoluteness-and-elementary-submodels-examples.md` (5 items):

  - `ex-bounded-set-formulas-and-witness-direction`
  - `ex-internal-power-set-can-miss-an-external-subset`
  - `ex-reflection-of-two-formulas-with-parameters`
  - `fs-a-countable-elementary-submodel-is-a-transitive-subset`
  - `ex-collapse-chain-maps-need-not-be-inclusions`

### Checks actually run

- `node tools/tsx-run.mjs tools/precheck.mts` with all 56 explicit `items/ID.md` paths from this manifest: final exit 0; **46 checked, 0 failing**. The ten definitions/remarks are not proof-bearing precheck inputs. Initial failures were corrected by the canonical repair format (including phase order) and the supported final proof marker. The beta argument needed a second phase-order repair. No precheck or judge stamp was added to item frontmatter.
- The requested bare `node tools/validate-plan.mjs` prints usage because it requires a file argument. The executable check `node tools/validate-plan.mjs research/plan-spec.json` was then run: final exit 0, acyclic and consistent for 978 pages with inventories. It notes 641 planned pages with no inventories and existing redundant-prerequisite warnings. This is a structural result, not a mathematical assertion about those pages. No plan was edited.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-14.pages.json`: final exit 0, **56 scoped items, 0 errors, 0 warnings**. Initial YAML formatting problems were repaired using the schema-compatible block mappings, inline dependency arrays and reference entries recognized by the tools.
- `node tools/proof-contract.mjs research/phase-2-catchup-24-batch-14.proof-contracts.json --strict`: final exit 0, **56/56 checked, 0 errors, 0 warnings**. Citation displays and step references were reconciled with actual arguments and source statements; full source quotes remain in contracts.
- Additional `node tools/rendercheck.mjs` over all 56 explicit item paths and all four page paths, with `--quiet`: final exit 0, **60 files clean**. Replaced unsupported `\dotminus` notation with a KaTeX-supported dotted subtraction symbol; the arithmetic claim is unchanged.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-catchup-24`: succeeded after the final dependency edit. The owned consumer input is `[]`: the added suppliers are an earlier owned A-page theorem and published Hartogs/AC, so no same-frontier cross-batch edge was introduced. The aggregate was updated only by the required tool.

### Mathematical and provenance decisions

Statements retain their manifest provenance; supplied proofs are `ai-altered`, and definitions/orientation remarks have proof provenance `not-applicable`. No generated statement was used as a supplier. No recorded beyond-choice catalogue result enters a Foundations dependency. Prior independent Step-3 review and source-retrieval receipts were preserved rather than rewritten as new evidence.

The arithmetic proofs use the accepted local certified syntax route, including the Q order convention with a left-addend witness, numeralwise unique-value representation, PA proof of equivalence with computation-form Sigma1 formulas, and a uniform bounded-truth certificate argument before D3. Lob precedes second incompleteness, avoiding a circular appeal to consistency equivalences. Internal Con implications require a verified total proof reduction; external finite-fragment consistency transfer is separately stated. Actual transitive models are distinguished from arbitrary coded models with nonstandard proof codes.

The beta PA proof now establishes existence of a common multiple above a bound using the explicit induction invariant “there is C>B divisible by every positive t<=j”; its successor witness is C(j+1). Thus it does not presuppose an arithmetized factorial history while proving sequence coding. Contracts were synchronized with the final proof paragraphs.

Reflection is for each fixed external finite formula family, closed under subformulas, with all parameter tuples; least witness-rank bounds avoid an arbitrary witness-choice function. Rank/hierarchy membership agreement is an intersection assertion, not equality of internal and external power sets. Omega's bounded definition includes the nonzero condition. Full syntax is interpreted only over set structures; no truth predicate for V is inferred. Shoenfield remains an orientation boundary, not an imported proof result.

The final example `ex-collapse-chain-maps-need-not-be-inclusions` retains the general conjugation/coherence calculation and now gives an actual ZFC witness: kappa is Hartogs(omega), theta=kappa+omega, and a countable X elementary in V_theta contains kappa. Its collapse sends kappa to the countable ordinal tau; the transported map sends tau back to kappa, so it moves tau and cannot be inclusion. Its added dependencies are `thm-countable-elementary-submodels-and-transitive-collapses`, `thm-hartogs`, and `def-axiom-of-choice`; AC is explicitly used in obtaining X. Manifest and item dependencies agree. This elaborates the promised example and proposes no scope removal.

### Source passages and remaining evidence obligation

Primary-source passages read in bounded chunks for this authoring include Moschovakis, *Lecture Notes in Logic*, printed pp140–156 (the relevant 4B–4C proofs, especially 4B.8, 4B.11–12 and 4C.12–13); Sutner, *Primitive Recursion*, printed slides13–38 and42–59, and *Coding*, slides9–35; Geschke, *Models of Set Theory*, sections3–4, especially Lemma4.1, Theorems4.3–4.5, Corollary4.6 and Exercise4.7, pp10–12; the Freiburg notes section3.5, pp50–55; Marks, *Set Theory*, Theorems18.8–18.9 and18.13–18.15, pp76–79; and Kamensky section5.2, pp45–47 (orientation only). Sutner's author PDFs were available as cached documents even though new direct URL requests timed out; this is source reading, not substitution of another run's task artifacts. Source typographical conventions were not silently imported: the local proofs spell out corrected variables, Q order and nonzero omega assumptions.

**Outstanding source-evidence limitation:** the full text of Avigad's author-hosted `https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf` could not be recovered in this authoring session. Direct HTTPS, reopened search result, HTTP and query-string recovery returned retrieval/safety errors; local network retrieval failed DNS, a local PDF search found no copy, and author-site alternative searches found no usable full text. Search snippets and third-party copies were not treated as complete primary-source passages. Existing Step-3 retrieval evidence was preserved, but it does not establish a new complete reading in this session. The exact retained locators and affected IDs are:

- `lem-godel-beta-coding-and-q-remainder`: §4.3 Lemmas 4.3.4 and Theorem 4.3.7, pp93–96; Moschovakis Lemma 4B.8 p147.
- `thm-arithmetic-diagonal-lemma`: Lemma 4.5.1 and complete proof, pp108–109.
- `thm-first-incompleteness-with-explicit-soundness`: Theorem 4.6.1 and proof, pp110–111.
- `thm-hilbert-bernays-lob-derivability-conditions`: §4.7 pp113–115 conditions 1–3 (source omits verification); local verification backed by Moschovakis Proposition 4C.13.
- `thm-lob-from-derivability-conditions`: Theorem 4.8.1, pp115–116, complete formal derivation.
- `thm-second-incompleteness-for-standard-provability`: Theorems 4.7.1–4.7.2 pp114–115 and Theorem 4.8.1 p116.
- `thm-tarski-arithmetic-truth-undefinability`: Theorem 4.9.5 and complete proof, p118.
- `thm-consistency-does-not-supply-a-transitive-zfc-model`: §4.7 second incompleteness; local application using the transitive-proof-code lemma.
- `ex-godel-diagonal-substitution-calculation`: Lemma 4.5.1 proof p109.
- `ex-consistent-theory-with-an-internal-false-proof`: §4.7 pp114–115, local application.
- `fs-con-zfc-implies-a-transitive-model-of-zfc`: §4.7 second incompleteness, applied by the owned strength-gap theorem.

The arguments at those IDs are drafted in full using the declared local supplier chain; no missing source is represented as a proved step or a retrieved quotation. The remaining obligation is to recover and compare those exact Avigad passages, or have the owning Alpha record the applicable alternative-proof/source disposition. No mathematical result, item or page is proposed for deletion or narrowing, and no unproved lemma is being hidden behind the passing format checks. Because this full-text verification requirement remains unmet, this checkpoint does not claim unqualified Step-5 evidence completion. Next action for owning Alpha: resolve that source-evidence disposition while retaining the authored scope.
## Owner source handoff — 2026-09-09, 17:34 UTC

The final author's Avigad-reading limitation below is preserved honestly.
Root resolved the handoff using full relevant passages of the already covered
Moschovakis source and a bounded comparison of all eleven affected drafts;
see `phase-2-catchup-24-step5-logic-source-reconciliation.md`. Exact independent
references were added to draft items, manifest and plan. No fresh Avigad
reading, source drop, independent verdict or published repair is claimed.
Step6 adjudication remains required.
