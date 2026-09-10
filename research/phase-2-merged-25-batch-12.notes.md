# Batch 12 — One-Tape Simulation Normal Forms

Status: Step-5 authoring complete for five draft items and both pages. Required scoped checks pass after canonical phase repair and supplying the plan validator’s required path. See the Step-5 section for exact evidence and limitations. Historical source/review receipts below remain preserved. No result was dropped.

Supervisor recovery, 2026-09-09: root reran the real fetch-stamp tool with
working networking. Checkoway and Savage now verify; the UNSW lecture URL
returns HTTP 403, rather than the worker's historical DNS failure. Retain
that source obligation for normal recovery routing; no source was dropped,
no liveness evidence invented, and no mathematical gate waived.

Root recovery check, 2026-09-09 around 09:09 UTC: the original UNSW PDF
remains readable through the web reader (22 pages; relevant complete slides
10–11 reread). Direct retrieval of the 2017 lecture-8 version, the `www.cse`
alias of the 2019 original, and the original with `?download=1` each returns
HTTP 403. The response explicitly reports an unreadable server `.htaccess`
file; this is not a mathematical defect. An Internet Archive dated lookup
returns HTTP 404. Searches for the author's name with “Stay put TMs” and
the exact filename with “Turing” and “4141” returned no additional copies.
These attempts do not establish permanent open-web absence, so the source
is retained without a fabricated fetch stamp or drop decision.

## Scope and plan comparison

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, briefs/beta-scaffold.md, the generated beta-12 and beta-batch tasks, frontier-dependency-ledger instructions, the complete design section at research/plan-computability-theory-track.md lines 3094–3126, the current plan and owned manifest. Runtime status file identifies phase-2-catchup-24; HEAD observed 209eaa2f1. The shared working tree contains extensive other work; only this batch's manifest, coverage and notes were written.

Orders 598.2/598.4, category, A title and requires agree with the current plan. The design's B title uses an em dash while the plan uses a colon; retained the plan title. Design lists the theorem and two examples while the current plan has empty inventories: populated the owned manifest for later engine splice, without editing the shared plan. Added a necessary explicit extended-machine/run definition and a macro lemma before the theorem. No new prerequisite pair or page split is necessary (3 A items, limit 60). No useful claim was dropped.

## Mathematical contracts and proof closure

Full statement and proof routes are in each manifest item's `statement` and `proof_plan` fields. Every item has an explicit deps array, source references, component provenance and justified_by: []. The two generated B items are leaves. No source or reference is treated as an undeclared proof axiom.

1. `def-stay-put-one-tape-machine-and-run-interface` depends on the raw ordinary tuple and step definitions only to specify the exact extension: S is new and fixes the head. The earlier boundary interface has an L/R-only domain, so it is not applied verbatim to an S tuple. Its configuration-set and initial-tape construction are repeated with the enlarged direction codomain; neither uses delta. Total updates preserve finite support. To justify adjoining a point to a finite set F, use a bijection n→F: if h is absent extend it at n with value h; if present F union {h}=F. Subset closure then applies. Identity extension at halting states is solely a device for applying recursion, not a divergent computation. A nonempty set of halting indices has a least member by the bounded finite-search induction, supplied inline. This avoids silently using a run existence theorem on the published page.
2. `lem-stay-put-right-left-macro-simulation` uses the preceding S interface, the exact ordinary one-step clauses, finite cardinality and ordered pairs. Q×{0,1} gives disjoint marked and unmarked copies without assumptions about the underlying state objects. Inductively append two tagged points per enumerated original state to prove this set finite. Tagged designated states are distinct; marked copies of accepting/rejecting states are nonhalting. All state-symbol entries required by totality are supplied. Right first guarantees the return is from a positive cell; successor injectivity gives its predecessor exactly h. Every symbol at the neighbor is preserved, including blank. The converse is inspection of the transition table, not an assumed inverse simulation theorem.
3. `thm-stay-put-elimination-with-explicit-simulation-interface` uses the macro lemma for each segment and natural recursion/induction for runs and boundary times. Its recursion is on a fixed set of configuration/counter tuples, with total identity extensions after halting. It proves the exact time equation k_i=i+s_i, bounds i≤k_i≤i+i, and that each interior time has a marked nonhalting state. Unbounded boundary times ensure no simulator time is omitted on an infinite run. Finite maximal runs terminate in the corresponding accepting/rejecting state with identical entire tape and head. Thus divergence preservation is two-way, and the final transition into a halting state is included. The ordinary-machine inclusion in the extended model is the case with no S entries. Language and tape-output consequences are stated through these explicit run predicates, not through a later machine theorem.
4. `ex-eliminating-a-stay-put-transition` calculates a complete three-state machine on a and epsilon, including the marked accepting state, zero boundary and neighbor preservation.
5. `cex-deleting-stay-put-moves-does-not-preserve-computation` separates an invalid deletion from a valid but inequivalent total replacement; its four-state witness enumerates every nonhalting entry. The two-step acceptance/rejection traces are direct calculations. The L-then-R warning is another explicit head-coordinate calculation.

## Transitive prerequisite audit

Read the actual statement/definition and relevant proof bodies in the following dependency census, including the primitive set constructions, Peano construction, induction/recursion, arithmetic/order and finite-set results. Exact direct and transitive declarations are recorded below with content hashes. All are published; no in-run unpublished supplier is required. The proof uses the triple form of configurations, not the optional untagged configuration-word encoding. It uses finite-word function domains, not factor avoidance or prefix-state counting. It uses the subset/finiteness part of finite-set closure; no arbitrary-index selection is involved.

The page requires closure has 50 pages. Both direct prerequisites are earlier (596.2 and 597). Natural recursion and finite counting are already in that closure; the legacy natural-numbers page has an empty plan inventory but its published files and page homes resolve. A temporary plan with this owned manifest overlaid validates item order, B-leaf status, closure and IDs. The rest of the prerequisite pages are structural ancestors, not automatically mathematical suppliers. None of the actual item dependencies reaches the deferred-set-theory-beyond-choice catalogue. The finite Cartesian-product orientation pointer to Choice and finite-cardinality orientation pointer to general cardinals occur in Remarks and are not proof uses. Likewise the Infinity and omega ordinal orientation references are not premises. All justified_by arrays in the audited supplier closure are empty.

Axiom strength: the construction is valid in ZF without AC. Some legacy foundational headers say ZFC, but their displayed constructions here use only the named set axioms, natural induction and finite bijections; the audit does not borrow any choice-dependent clause. Finite enumerations are finitely many existential witnesses for fixed finite sets, not an indexed choice family. Recursion's intersection construction is supported by the earlier product/power-set/separation/nonempty-intersection machinery already in this census. The natural-order arguments use cancellation and successor laws; no later ordinal result is needed.

## Published-consumer ledger reconciliation

The existing ledger already maps `thm-stay-put-elimination-with-explicit-simulation-interface` to the old draft `thm-stay-put-moves-can-be-eliminated` and its historical published consumer `thm-multitape-machines-have-one-tape-simulations`. Its current Astra-5 item-7 A-R entry says that consumer now supplies its own right-left macro and no longer needs this planned supplier. Preserve that current disposition; do not reopen it merely because the historical impact table still lists the old dependency. This batch does not consume either theorem, `lem-multitape-simulation-has-quadratic-time-overhead`, universal simulation, or any other co-resident published theorem. No new confirmed published-consumer defect was identified in this narrowly scoped audit. This is not an audit of all such consumers. The independent new normal-form supplier remains commissioned.

Cross-batch bookkeeping: there are no same-frontier page or item dependencies for batch 12; both direct pages are already published. The Step-1 task authorizes only manifest/coverage/notes, so no separate cross-batch file or shared ledger was written. The Step-3 consumer owner should emit [] and refresh the unified ledger as required by briefs/tasks/frontier-dependency-ledger.md. This does not authorize broader writes here.

## Sources and recovery

Coverage records 14 dispositions across three active independent sources, including Savage's textbook. Checkoway supplies the explicit marked-state proof, UNSW independently gives the right-left route, and Savage supplies a separate finite-control/tape treatment. Complete relevant sections were read in the web PDF reader; sources are not inferred from snippets. Locators and model differences are recorded in coverage. Local examples are explicitly labeled as local instances of actual source headings, not source-authored examples. No source was dropped.

The shell source-fetch-check --stamp failed for every original URL with EAI_AGAIN, producing zero stamps. Shell URL liveness likewise failed DNS resolution for all three. Recovery searches checked the author/institutional originals and Brown's book index. Full relevant text remains accessible in the web reader: Checkoway 117 PDF pages (animation overlays; relevant pp.2–19), Savage 28 pages (relevant printed pp.210–211), UNSW 22 pages (relevant pp.10–11). Recovery stops on recovered text, so there is no basis for five invented failed web retries or an unavailable-source drop. Web reading is not a tool-produced fetch stamp. The environment-level mechanical gate remains blocked until the exact checker can download the originals. No mathematical uncertainty or source-absence claim is asserted.

## Checks actually run

- `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-12.coverage.json --require-destination`: exit 0, 1 page, 14 harvest rows, 0 errors/warnings.
- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-*.pages.json`: exit 0; at this concurrent snapshot 5 planned items, 0 normalized, 0 errors. No --write used.
- `node tools/content-policy.mjs --manifest-only research/phase-2-catchup-24-batch-*.pages.json`: exit 0; 5 scoped items, 0 errors/warnings at that snapshot.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; current plan passes with existing global warnings.
- `node tools/validate-plan.mjs /tmp/b12-plan.json`: exit 0; current plan plus owned manifest passes; 3569 global warnings, not certified as repaired by this batch.
- `node tools/extcheck.mjs --quiet`: exit 0; existing informational published/unproved notices remain; no boundary failure.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-12.coverage.json --stamp`: exit 1, all three EAI_AGAIN, zero verified.
- `node tools/url-sweep.mjs --coverage research/phase-2-catchup-24-batch-12.coverage.json --out /tmp/b12-url-liveness.json --fail-on-dead`: exit 1, 0/3 live through shell, each curl error 6. Full result retained under coverage.checks.
- `node tools/source-backing.mjs --coverage research/phase-2-catchup-24-batch-12.coverage.json --liveness /tmp/b12-url-liveness.json --require-verified`: exit 1, all 5 new items backing-lost as a consequence of missing mechanical fetch/liveness evidence.

No authoring, precheck, renderer or judge checks were claimed. Temporary logs and merged plan are diagnostic only; the durable evidence is these notes, the manifest and coverage.

## Next action / handoff

Reread the current three owned files, source locators and prerequisite interfaces. Retry source-fetch-check --stamp and URL/source backing in an environment with working DNS; keep blocked until they pass. Do not manufacture fetch receipts or drop available sources. Then send the complete scaffold to the engine's independent Step-3 review. Do not edit published content or shared plan files.

## Supplier census (content-hash snapshot)

- `cor-nat-addition-well-defined` [9dcaff96d8395536]: deps=["thm-recursion", "def-natural-numbers", "thm-omega-is-peano-system"].
- `def-axiom-of-extensionality` [a9f82459c338e2fb]: deps=["def-language-of-set-theory"].
- `def-axiom-of-infinity` [d49d23347c1dee36]: deps=["def-language-of-set-theory"].
- `def-axiom-of-pairing` [babc31679ef39ed9]: deps=["def-language-of-set-theory"].
- `def-axiom-of-power-set` [441dc8618aaf0062]: deps=["def-language-of-set-theory"].
- `def-axiom-of-union` [f4860b86309b9360]: deps=["def-language-of-set-theory"].
- `def-axiom-schema-of-separation` [c32df994ac5af3d2]: deps=["def-language-of-set-theory"].
- `def-cartesian-product` [6c5baf077fa803b5]: deps=["lem-ordered-pairs-lie-in-the-double-power-set", "def-axiom-schema-of-separation", "def-ordered-pair", "def-power-set", "def-union-of-a-set-and-binary-union"].
- `def-computation-alphabet-and-word-convention` [913d9a5435242b99]: deps=["def-finite-words-factor-avoidance-and-prefix-states", "def-the-set-of-functions-from-one-set-to-another", "def-indexed-union-and-intersection"].
- `def-countable` [2b247279db3517d8]: deps=["def-equinumerous", "def-natural-numbers", "def-nat-order", "lem-nat-order-is-membership", "lem-pigeonhole"].
- `def-deterministic-one-tape-turing-machine` [c99b7ae74b604218]: deps=["def-computation-alphabet-and-word-convention", "def-function", "def-finite-cardinality"].
- `def-equinumerous` [766b0a6b24e426a3]: deps=["def-injection-surjection-bijection"].
- `def-finite-cardinality` [8ca319ada621a75a]: deps=["def-countable", "lem-pigeonhole", "def-equinumerous", "def-injection-surjection-bijection", "def-natural-numbers", "lem-nat-order-is-membership", "def-nat-order"].
- `def-finite-words-factor-avoidance-and-prefix-states` [314a1aa128880d8e]: deps=["def-natural-numbers"].
- `def-function` [260a96bd79516f95]: deps=["def-relation-domain-range-and-field", "def-cartesian-product", "def-ordered-pair", "thm-the-characterising-property-of-ordered-pairs", "def-subset-and-proper-subset"].
- `def-image-and-preimage-under-a-relation` [3ca7f167f06fa034]: deps=["def-relation-domain-range-and-field", "def-axiom-schema-of-separation", "def-inverse-relation-composition-and-restriction", "def-ordered-pair"].
- `def-indexed-family` [ea850cb6773f5e59]: deps=["def-function", "def-relation-domain-range-and-field"].
- `def-indexed-union-and-intersection` [31c8651394552096]: deps=["def-indexed-family", "def-union-of-a-set-and-binary-union", "def-intersection-of-a-set-and-binary-intersection", "lem-the-intersection-of-a-nonempty-set-is-a-set", "def-relation-domain-range-and-field", "thm-the-empty-set-exists-and-is-unique"].
- `def-inductive-set` [b85e64e7beca23a6]: deps=["def-axiom-of-pairing", "def-axiom-of-union", "def-unordered-pair-and-singleton"].
- `def-injection-surjection-bijection` [4bc08b74210719a7]: deps=["def-function", "def-image-and-preimage-under-a-relation"].
- `def-intersection-of-a-set-and-binary-intersection` [6ca0dc28fd092da6]: deps=["lem-the-intersection-of-a-nonempty-set-is-a-set", "def-unordered-pair-and-singleton", "thm-the-empty-set-exists-and-is-unique"].
- `def-inverse-relation-composition-and-restriction` [4b8cd86a7dae0520]: deps=["lem-inverse-relations-composites-and-restrictions-are-sets", "def-relation-domain-range-and-field", "def-ordered-pair"].
- `def-language-of-set-theory` [c126305560c86492]: deps=[].
- `def-nat-addition` [836b54413f9b84ee]: deps=["def-natural-numbers", "thm-recursion", "cor-nat-addition-well-defined"].
- `def-nat-order` [0e07290db91e0604]: deps=["def-natural-numbers", "def-nat-addition"].
- `def-natural-numbers` [ee444aa89a6d31b3]: deps=["def-inductive-set", "lem-omega-smallest-inductive", "def-peano-system", "def-axiom-of-infinity", "def-axiom-schema-of-separation"].
- `def-one-step-configuration-relation` [5784561efdf4acae]: deps=["def-turing-machine-configuration"].
- `def-ordered-pair` [5c76b61a68627dea]: deps=["def-unordered-pair-and-singleton", "def-axiom-of-pairing"].
- `def-peano-system` [1ea11f405d082d5f]: deps=["def-function", "def-subset-and-proper-subset"].
- `def-power-set` [55f9f10b5d0ae7fb]: deps=["lem-the-power-set-of-a-set-is-a-set", "def-subset-and-proper-subset"].
- `def-relation-domain-range-and-field` [fcfabecc085125da]: deps=["lem-the-domain-and-range-of-a-relation-are-sets", "def-ordered-pair", "def-cartesian-product", "def-union-of-a-set-and-binary-union", "def-subset-and-proper-subset"].
- `def-subset-and-proper-subset` [7e32f62e8130ebbc]: deps=["def-axiom-of-extensionality", "def-axiom-schema-of-separation", "def-language-of-set-theory"].
- `def-tape-finite-support-convention` [b2d54993b06c1b3b]: deps=["def-deterministic-one-tape-turing-machine", "def-function", "def-natural-numbers", "def-finite-cardinality"].
- `def-the-set-of-functions-from-one-set-to-another` [3c9f5170eb407a2b]: deps=["lem-the-set-of-functions-between-two-sets-is-a-set", "def-function"].
- `def-turing-machine-configuration` [6cdf739da87c45e9]: deps=["def-deterministic-one-tape-turing-machine", "def-tape-finite-support-convention", "def-natural-numbers"].
- `def-turing-machine-initial-and-halting-configuration-interface` [f5ca88a1b4950d31]: deps=["def-computation-alphabet-and-word-convention", "def-function", "def-the-set-of-functions-from-one-set-to-another", "def-natural-numbers", "def-finite-cardinality", "thm-subset-of-a-finite-set", "def-cartesian-product", "def-axiom-schema-of-separation"].
- `def-union-of-a-set-and-binary-union` [cfdb418c5665fde8]: deps=["def-axiom-of-union", "def-axiom-of-extensionality", "def-unordered-pair-and-singleton"].
- `def-unordered-pair-and-singleton` [6cca8d47e2f4259f]: deps=["def-axiom-of-pairing", "def-axiom-of-extensionality"].
- `lem-a-relation-is-included-in-the-product-of-its-domain-and-range` [f0f79f0f21119b13]: deps=["def-relation-domain-range-and-field", "def-cartesian-product", "def-subset-and-proper-subset", "thm-the-characterising-property-of-ordered-pairs"].
- `lem-inverse-relations-composites-and-restrictions-are-sets` [0f088650a8edc9f7]: deps=["def-relation-domain-range-and-field", "def-cartesian-product", "def-axiom-schema-of-separation", "lem-a-relation-is-included-in-the-product-of-its-domain-and-range", "def-ordered-pair", "def-subset-and-proper-subset"].
- `lem-nat-add-associative` [664b513dcc841873]: deps=["def-nat-addition", "thm-induction-principle"].
- `lem-nat-add-cancellative` [76e48706354a4c4a]: deps=["def-nat-addition", "thm-omega-is-peano-system", "thm-induction-principle"].
- `lem-nat-add-commutative` [37a451a2146dbc9c]: deps=["def-nat-addition", "lem-nat-add-identity", "lem-nat-add-successor-left", "thm-induction-principle"].
- `lem-nat-add-identity` [b73b9de71a4d554a]: deps=["def-nat-addition", "thm-induction-principle"].
- `lem-nat-add-successor-left` [304425d946a7c411]: deps=["def-nat-addition", "thm-induction-principle"].
- `lem-nat-discrete` [23291252cd587b13]: deps=["def-nat-order", "def-nat-addition", "lem-nat-nonzero-is-successor", "lem-nat-add-successor-left", "lem-nat-add-cancellative", "lem-nat-add-commutative", "thm-omega-is-peano-system"].
- `lem-nat-nonzero-is-successor` [fee322e5f3568bff]: deps=["def-natural-numbers", "thm-induction-principle"].
- `lem-nat-order-add-compatible` [2f15701b9b3781ae]: deps=["def-nat-order", "def-nat-addition", "lem-nat-add-associative", "lem-nat-add-commutative", "lem-nat-add-cancellative"].
- `lem-nat-order-is-membership` [166fb92aaac1683f]: deps=["def-natural-numbers", "def-nat-order", "def-nat-addition", "thm-induction-principle", "lem-nat-add-identity", "lem-nat-trichotomy", "thm-nat-linear-order", "lem-nat-discrete", "lem-nat-transitive-irreflexive", "lem-nat-successor-neq-self"].
- `lem-nat-successor-neq-self` [c005a3a1a90fdfea]: deps=["def-natural-numbers", "thm-omega-is-peano-system", "thm-induction-principle"].
- `lem-nat-transitive-irreflexive` [ef00241ac282c465]: deps=["def-natural-numbers", "thm-induction-principle"].
- `lem-nat-trichotomy` [580714869a5474e4]: deps=["def-nat-order", "def-nat-addition", "lem-nat-add-identity", "lem-nat-add-successor-left", "lem-nat-add-associative", "lem-nat-add-commutative", "lem-nat-add-cancellative", "lem-nat-nonzero-is-successor", "thm-omega-is-peano-system", "thm-induction-principle"].
- `lem-omega-smallest-inductive` [5ea171119b52780e]: deps=["def-inductive-set", "def-axiom-of-infinity", "def-axiom-schema-of-separation", "def-axiom-of-extensionality"].
- `lem-ordered-pairs-lie-in-the-double-power-set` [b776dd8af7f77d12]: deps=["def-ordered-pair", "def-power-set", "def-union-of-a-set-and-binary-union", "lem-unions-and-intersections-of-small-families", "def-subset-and-proper-subset", "def-unordered-pair-and-singleton"].
- `lem-pigeonhole` [a09450782d4faac7]: deps=["def-natural-numbers", "def-nat-order", "thm-induction-principle", "lem-nat-order-is-membership", "lem-nat-trichotomy", "lem-nat-nonzero-is-successor", "lem-nat-transitive-irreflexive", "def-injection-surjection-bijection", "def-equinumerous"].
- `lem-the-domain-and-range-of-a-relation-are-sets` [f101d4664c59c623]: deps=["def-ordered-pair", "def-union-of-a-set-and-binary-union", "def-axiom-schema-of-separation", "def-unordered-pair-and-singleton", "def-subset-and-proper-subset"].
- `lem-the-intersection-of-a-nonempty-set-is-a-set` [b69462b3d6030f4d]: deps=["def-axiom-schema-of-separation", "def-axiom-of-extensionality", "thm-the-empty-set-exists-and-is-unique", "def-subset-and-proper-subset"].
- `lem-the-power-set-of-a-set-is-a-set` [92959d0f92c89b35]: deps=["def-axiom-of-power-set", "def-axiom-schema-of-separation", "def-axiom-of-extensionality", "def-subset-and-proper-subset"].
- `lem-the-set-of-functions-between-two-sets-is-a-set` [b2c53183863267de]: deps=["def-function", "def-cartesian-product", "def-power-set", "def-axiom-schema-of-separation", "def-subset-and-proper-subset", "lem-a-relation-is-included-in-the-product-of-its-domain-and-range"].
- `lem-unions-and-intersections-of-small-families` [d12eeab6eb68652f]: deps=["def-union-of-a-set-and-binary-union", "def-intersection-of-a-set-and-binary-intersection", "def-unordered-pair-and-singleton", "thm-the-empty-set-exists-and-is-unique", "def-axiom-of-extensionality"].
- `lem-unordered-pair-equality` [6f4eb059f1bb1986]: deps=["def-unordered-pair-and-singleton", "def-axiom-of-extensionality"].
- `thm-induction-principle` [2ab4f86bcfc5663f]: deps=["def-natural-numbers", "def-inductive-set", "lem-omega-smallest-inductive"].
- `thm-nat-linear-order` [7da594fb43f4b975]: deps=["def-nat-order", "def-nat-addition", "lem-nat-add-identity", "lem-nat-add-associative", "lem-nat-add-commutative", "lem-nat-add-cancellative", "lem-nat-nonzero-is-successor", "lem-nat-trichotomy", "thm-omega-is-peano-system"].
- `thm-omega-is-peano-system` [9c6245981626c3e8]: deps=["def-natural-numbers", "def-peano-system", "thm-induction-principle", "lem-nat-transitive-irreflexive"].
- `thm-recursion` [f94afd7ad48ea026]: deps=["def-peano-system", "def-natural-numbers", "thm-induction-principle"].
- `thm-subset-of-a-finite-set` [c00b7c6839289bbb]: deps=["def-finite-cardinality", "def-countable", "def-equinumerous", "def-injection-surjection-bijection", "def-natural-numbers", "lem-nat-order-is-membership", "def-nat-order", "def-nat-addition", "thm-induction-principle", "lem-nat-add-cancellative", "lem-nat-order-add-compatible", "lem-nat-discrete", "thm-well-ordering-principle"].
- `thm-the-characterising-property-of-ordered-pairs` [314157d19d05d310]: deps=["def-ordered-pair", "lem-unordered-pair-equality", "def-unordered-pair-and-singleton"].
- `thm-the-empty-set-exists-and-is-unique` [ad1ce6c3f80d39f4]: deps=["def-language-of-set-theory", "def-axiom-schema-of-separation", "def-axiom-of-extensionality"].
- `thm-well-ordering-principle` [9d84f435538051e9]: deps=["def-natural-numbers", "def-nat-order", "thm-induction-principle", "lem-nat-discrete", "lem-nat-trichotomy", "thm-omega-is-peano-system", "lem-nat-add-successor-left", "lem-nat-add-identity"].

## Source gates — current recovery receipt, 2026-09-09

Subjects: `url-liveness`, `source-fetch-check` and source-backing overlaps. Read current batch-12 coverage/notes, exact original and prior root recovery attempts; read batch-16 source locators and prior complete-reading receipts. New browser open of https://cgi.cse.unsw.edu.au/~cs4141/19s1/lectures/lecture07.pdf returned HTTP 403. Reuse historical successful complete slides 10–11 reading and genuine alternate-host/version/download-query/archive/search attempts recorded in batch-12 notes. This does not prove open-web absence and does not justify removing the independent source. No mathematics or source disposition changed.

Ran the real `source-fetch-check.mjs --stamp --timeout-sec 12` on batch12 and16 coverage. Result: 4/8 already verified, 0 newly stamped, four EAI_AGAIN failures (UNSW; Martin purely_inductive.pdf; Martin Determinacy draft; Lietz Lecture_Notes.pdf). The two Martin URLs and Lietz opened in the browser; the 6-page scanned Martin source is identified by prior full screenshot-reading receipts, not new text extraction. Browser access is not a checker-produced stamp. This environment's DNS failures supersede neither historical HTTP403 evidence nor prior full mathematical reading. Preserve all existing stamps; no fabricated receipt. Haar's owner escalation remains as recorded separately. Current mechanical source gates remain blocked.

Changed files: owning batch12/16 notes and the repair report only for this receipt. Next action requires successful actual fetch-check access for the unstamped sources; source unavailability cannot settle the unresolved mathematical contracts.


### Reconcile-3 final check checkpoint — 2026-09-09

See `research/phase-2-catchup-24-scaffold-repair-3.notes.md`, final verification receipt, for exact current checks, artifact hashes and all remaining obligations. Whole-run manifest-deps passes (667 items); content policy and full plan overlay retain the four missing theorem suppliers; coverage retains Haar and four SET-10 rows; fetch/liveness remain blocked. Scope identities and declared Foundations/Recorded boundaries pass. The A609 declared prerequisite was repaired but its six suppliers are draft, not published. No worker exit constitutes acceptance; preserve this batch's unresolved mathematics and historical dated evidence.

## Reconcile-4 source findings — 2026-09-09

Gate `url-liveness`, subject UNSW Lecture 7: BLOCKED. Read the exact batch-12 stay-put interface, right-then-left macro proof and simulation theorem, and the actual published deterministic one-tape machine/configuration contracts. Preserve the existing right-infinite tape, left-clamp, tagged nonhalting intermediate states and acceptance/rejection/divergence conventions. Dependencies remain `def-deterministic-one-tape-turing-machine`, `def-one-step-configuration-relation` and the explicit dependency arrays of `def-stay-put-one-tape-machine-and-run-interface`, `lem-stay-put-right-left-macro-simulation`, `thm-stay-put-elimination-with-explicit-simulation-interface`; no outside-run supplier requested. Reused genuine prior initial/five-retry, alternate-version/host/query/archive attempts and complete slides 10–11 reading recorded in batch-12 notes. This dispatch's browser open of https://cgi.cse.unsw.edu.au/~cs4141/19s1/lectures/lecture07.pdf returned 403. Search indexing is not a complete fetched source. Existing Checkoway/Savage backing and local proof remain; neither temporary 403 nor local DNS failure proves open-web absence. No source was dropped and no owner-escalation or waiver was invented.

Gate `source-fetch-check`, same UNSW subject: BLOCKED. The actual command `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-12.coverage.json,research/phase-2-catchup-24-batch-16.coverage.json --stamp --timeout-sec 12` returned 7/11 fetch-verified, zero new stamps, four EAI_AGAIN failures: UNSW, Hachtman–Palumbo, Ciesielski and Martin's 2003 paper. Genuine checker-generated recovery_attempts are retained in the two coverage files. The latter three were read through the browser, as located above, but browser readings do not replace fetch stamps. All other live mathematical findings were processed despite these source failures. Next required action is an actual successful source verification or a justified recovery/disposition under the brief; this worker cannot certify either from the current transport failures.

Fresh affected URL sweep (`node tools/url-sweep.mjs --coverage research/phase-2-catchup-24-batch-12.coverage.json,research/phase-2-catchup-24-batch-16.coverage.json --out /tmp/reconcile4-url-liveness.json --timeout-sec 5 --fail-on-dead`) returned 0/11 live, all curl code 6 host-resolution failures. Note: this tool accepts `--timeout-ms`, not `--timeout-sec`; the supplied unrecognized timeout option did not change its default, and all requests failed immediately. No recovery receipt is inferred from that option. `source-backing.mjs --coverage` with those same two files, this fresh liveness file and `--require-verified` reports 68 authored results without mechanically verified open backing. This is a transport-based blocker, not a finding that their mathematics or browser-read sources vanished. Frozen run liveness evidence was not overwritten.

Changed files for these source findings: batch-12/16 coverage recovery records and notes, plus this report. Mathematics and supplier IDs in batch12 remain unchanged. Historical round-3 failures/counts remain explicitly historical.

## Reconcile-4 final validation checkpoint — 2026-09-09T11:20:39.815883+00:00

- `coverage`: PASS: affected12/16: 126 harvested rows, 0 errors/warnings; whole16 with --require-destination: 24 pages,1193 rows,0 errors,2 low-yield warnings in batches2/13.
- `manifest_deps`: PASS: whole16 manifests,690 items,0 normalized/errors.
- `content_policy`: PASS: whole16 manifests --manifest-only,690 items,0 errors/warnings.
- `validate_plan`: PASS: canonical and full16-manifest overlay /tmp/reconcile4-plan-overlay.json with --max-items60. Existing redundant-prerequisite warnings; page-only inventories remain uncertified at item level.
- `extcheck`: PASS: canonical and full16 overlay repository;0 errors,61 existing published-consequence warnings. Declared Foundations boundary passes; no semantic certification.
- `source_fetch`: BLOCKED: affected12/16 --stamp --timeout-sec12:7/11 verified,0 new stamps,4 EAI_AGAIN failures (UNSW,Hachtman,Ciesielski,Martin2003).
- `url_liveness`: BLOCKED: fresh affected sweep0/11,all DNS failures; browser UNSW403 separately observed.
- `source_backing`: BLOCKED: fresh affected liveness --require-verified:68 results without mechanically open backing.
- `cross_batch_scan`: PASS: frontier-dependency-ledger refresh --run phase-2-catchup-24 --require-reviewed. Batch16 input remains empty; new suppliers local or earlier published, not another batch.
- `scope`: PASS:48pages/24pairs retain exact batch and kind against frozen scope ledger; canonical/manifest order,category,companion agree. No added pair or Phase2 count change.

Canonical validation initially exposed the missing earlier `measurable-functions-and-simple-approximation` page edge for the Hamel conclusion; that edge was repaired in manifest, prose and canonical plan before the passing checks above. Final SET-10 inventory is A60/B5, nine added local items; no new pair, no empty supplier, no Phase-2 scope expansion. Supplier ledger retains every classification count and distinguishes published inputs from scaffolded conclusions. Full mathematical contracts and prerequisite lists are in the manifest and SET-10 prose. Existing pair and batch identities are unchanged. Cross-batch merged ledger was refreshed by its prescribed tool, not hand-edited.

All live packet findings have outcomes recorded. The four coverage diagnostics have complete proposed local contracts and proof arguments; source gates remain blocked. These structural checks do not complete the transitive semantic audit or independent Step 3. No engine transition, published edit, build, agent, waiver or gate acceptance is claimed. Next action belongs to source recovery and the engine's independent full gate/review battery.

## Root source resolution — 2026-09-09

The repeated full-text HTTP403 failures, alternate-host/version/query checks and unsuccessful archive/mirror recovery now justify treating the original as currently unavailable. Permanent future absence is not asserted. This is not based on the worker's DNS outage; root has working downloads for Checkoway/Savage and the new determinacy sources. The retained source_resolution records all three included/inline obligations with the current complete arguments and exact deps. Root reread all five local contracts, the actual three published machine interfaces, and Checkoway's full relevant slides2–10. Complete confidence in the finite tagged right-left simulation permits the source drop under the brief; the original source/history remains in coverage, while manifest/plan active references use the available alternatives. No item, boundary convention, outcome, pair, or independent review is dropped. Earlier dated no-drop decisions above are superseded as a current source disposition, not erased as evidence.

## Step-3 fix pass

- **Finding set / disposition:** No finding ID was issued for batch 12: the stable group-f review and verdict entry mark `one-tape-simulation-normal-forms` and its B companion **sufficient** with `missing: []`. This is a rebuttal/closure receipt, not a mathematical change.
- **Evidence checked:** The review identifies the exact local chain `def-stay-put-one-tape-machine-and-run-interface` → `lem-stay-put-right-left-macro-simulation` → `thm-stay-put-elimination-with-explicit-simulation-interface`; its stated interface, finite-support, tagged-state, left-boundary, macro-time, outcome, and ZF arguments match the current five manifest contracts. The current per-batch cross-frontier input is `[]`: all actual suppliers are earlier published items, not another selected batch.
- **Changed record:** `research/phase-2-catchup-24-batch-12.notes.md` only. The manifest, coverage record, cross-batch input, published content, and shared plan remain unchanged because the review found no defect to repair.
- **Checks run:** `coverage-checklist --require-destination` (1 page, 14 harvest rows, 0 errors/warnings); whole-run `manifest-deps` (691 items, 0 normalized, 0 errors); manifest-only content policy (5 scoped items, 0 errors/warnings); `validate-plan` (pass; no cycles, forward item edges, B-page dependencies, or unresolved IDs among itemized pages); `extcheck --quiet` (pass; 57 unrelated existing published/unproved warnings); and `source-fetch-check --stamp` (2/3 fetch-verified, 3/3 resolved, with the one documented UNSW source drop and no new stamp).
- **Remaining blocker:** None for this batch’s scaffold. The documented UNSW drop is resolved by the recorded alternatives and does not block batch 12.


## Final group-f adjudication — 2026-09-09

Accepted mathematically with confidence 1; no manifest or coverage repair required. See `research/phase-2-catchup-24-alpha-f-step3-scaffold-recheck.md` for item-level arguments, independent source reading, scope-ID corrections, dependency and consumer-debt reconciliation, and exact checks. Source-fetch resolves all owned source records, but the fresh shell URL sweep fails with host-resolution errors and source-backing therefore fails. These transport gates remain outstanding; this decision does not waive them or authorize publication.

## Step-5 authoring

2026-09-10: All dispatch inputs found; proof-contract file absent and will be created. Current plan contains all five manifest IDs; no scope conflict beyond the historical B-title punctuation difference. Step-3 group f says sufficient with no missing inputs. Current source reading: Checkoway printed slides 2–10, PDF pp. 2–19, complete lines 4–162; Savage §5.1 before §5.1.1, printed pp. 210–211, complete lines 25–90. Existing UNSW drop and independent reviews preserved.

Checkpoint 1: authored def-stay-put-one-tape-machine-and-run-interface. Exact conventions: total nonhalting transition, S fixes head, L clamps at zero, finite-support tape, two distinct outcomes, first halt ends run. Verification derives sethood, finite adjunction/support, unique successor, total identity extension solely for recursion, bounded least-index argument and maximal-run uniqueness. Empty/one input, blank-only alphabet, and zero-step arbitrary halting start covered. Dependencies remain the six manifest IDs; no cross-batch supplier. No checks run yet; next: finite tagged-state macro and its contract.

Checkpoint 2: authored lem-stay-put-right-left-macro-simulation. State product is finite by an explicit append-two-bijections induction, tags disjoint by pair equality; all required transition entries enumerated by disjoint cases. Steps 2.1/2.2 calculate L/R and R-then-L, including h=0, arbitrary neighbor, and marked halting target. Step 3.1 proves the next-unmarked converse. Source: Checkoway printed slide 9 final overlay/PDF p.18; Savage is only finite-control context. Seven manifest dependencies unchanged, no cross-batch edge. No checks yet; next: global timing and outcomes.

Checkpoint 3: authored thm-stay-put-elimination-with-explicit-simulation-interface. Steps 1.1–1.2 construct counters on a fixed set and concatenate unique finite segments. Steps 2.1–2.2 derive k_i=i+s_i and bounds, including addition in its correct argument. Steps 3.1–3.3 prove coverage of every simulator time, first-halting time, and divergence; 4.1 proves reverse outcomes, 4.2 both language-class inclusions and equal output. Added explicit earlier published suppliers lem-nat-add-successor-left, lem-nat-add-identity, lem-nat-discrete to owned manifest: their actual statements justify successor arithmetic and integer interval partition. No scope change and no cross-frontier dependency; consumer input remains []. Source: Checkoway slides 8–10/PDF pp.14–19 and Savage §5.1 pp.210–211 (conventions compared). No proof checks yet; next: worked witnesses and contracts.

Checkpoint 4: authored ex-eliminating-a-stay-put-transition. Two-entry original and eight-entry simulator are complete; explicit traces on a and empty input give exact times one/two and head 0,1,0, and an aa tape verifies nonblank neighbor preservation. This is an AI-generated leaf example of Checkoway slide 9, not attributed to the source as its own instance. Both dependencies unchanged. No checks yet; next: deletion and replacement counterexamples.

Checkpoint 5: authored cex-deleting-stay-put-moves-does-not-preserve-computation. Legal two-entry original accepts empty input; deletion violates totality, while the explicitly hypothetical missing-entry rejection convention changes that outcome. A separate complete four-entry machine accepts a in two steps, and its legal S-to-R replacement rejects a in two steps. Left-then-right on blank tape at zero ends at one. Generated leaf provenance retained; dependencies unchanged; Checkoway slides 9–10 locate the construction being tested. No mathematical gaps found; next: format frontmatter/pages, derive citation and per-step evidence contracts from these completed proofs, then run required checks.

### Final authored state and evidence

Completed items:
- `def-stay-put-one-tape-machine-and-run-interface`
- `lem-stay-put-right-left-macro-simulation`
- `thm-stay-put-elimination-with-explicit-simulation-interface`
- `ex-eliminating-a-stay-put-transition`
- `cex-deleting-stay-put-moves-does-not-preserve-computation`

Completed draft pages: `library/computability-theory/one-tape-simulation-normal-forms.md` and `library/computability-theory/one-tape-simulation-normal-forms-examples.md`. IDs and promised scope are retained. The manifest remains `research/phase-2-catchup-24-batch-12.pages.json`, with the three additional explicit arithmetic suppliers recorded at checkpoint 3. The plan and published content were not edited.

Created `research/phase-2-catchup-24-batch-12.proof-contracts.json` in the format of `tools/proof-contract.mjs`. It maps all 34 numbered steps exactly once to individually written claims and concrete inputs, maps every local fact citation to its exact current Definition/Statement excerpt and actual uses, and gives eight item-specific boundary dispositions per item. Source-reading records contain exact external locators, short excerpts and precise source-use distinctions. Scripts formatted already-written arguments, canonical numbering and the individually specified evidence rows; no scaffold strategy was converted into proof text.

Canonical phase repairs supersede the preliminary step numbers in checkpoints above. Current verification locations:
- Interface: 1.1 sethood/update graph; 2.1 support/finite adjunction; 3.1 successor; 4.1 recursion; 5.1 least halt; 6.1 unique maximal run; 7.1 input and zero/one/empty boundaries.
- Macro: 1.1 tags; 2.1 finite product; 3.1 complete legal table; 4.1 L/R; 4.2 S including zero and halting target; 5.1 converse.
- Theorem: 1.1 counters; 2.1 boundary simulation; 2.2 exact time; 3.1 bounds; 3.2 partition; 4.1 finite outcomes; 4.2 infinite runs; 5.1 converse outcomes; 6.1 initial embedding, output and both language inclusions.
- Example: 1.1 original table legality; 2.1 simulator table; 2.2 original on a; 3.1 simulator on a; 3.2 empty input; 4.1 nonblank neighbor.
- Counterexample: 1.1 legal deletion witness; 1.2 legal replacement witness; 2.1 deletion failure; 2.2 original acceptance; 3.1 replacement rejection; 4.1 reversed macro boundary failure.

### Checks actually run

- Required `node tools/tsx-run.mjs tools/precheck.mts` with all five explicit `items/ID.md` paths: initial exit 1, all five required canonical phase repair. Added the actual ambient-sequence dependency to the least-halting-index step before applying canonical repairs. Applied the normative checker's order/number/reference repair, preserving headings and proof text. Rerun exit 0: 5 checked, 0 failing. Only the local `verification.precheck: pass` receipt is recorded; no judge/audit/publication stamps.
- Required bare `node tools/validate-plan.mjs`: exit 2, usage requires a plan path. Corrected to `node tools/validate-plan.mjs research/plan-spec.json`: exit 0, acyclic and consistent; no item-level cycles, forward references, B dependencies or unresolved IDs among the 978 itemized pages in this concurrent snapshot. Existing repository-wide warnings and 641 unitemized planned pages remain outside this batch's certification.
- Required `node tools/content-policy.mjs research/phase-2-catchup-24-batch-12.pages.json`: exit 0, 5 scoped items, 0 errors/warnings.
- Required `node tools/proof-contract.mjs research/phase-2-catchup-24-batch-12.proof-contracts.json --strict`: exit 0, 5/5 items, 0 errors/warnings, including after source-reading evidence was added.
- Dependency bookkeeping: existing consumer-batch input is `research/phase-2-catchup-24-batch-12.cross-batch-dependencies.json`, exactly `[]`. All new arithmetic suppliers are earlier published items, not another batch. `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-catchup-24` after the manifest dependency edit: exit 0, refreshed and deduplicated. No direct edit to the unified ledger.
- Additional scoped `node tools/rendercheck.mjs` with the five owned item paths and two owned page paths: exit 0, all 7 files parse with the real KaTeX and renderer YAML parser, no delimiter or wikilink-in-math errors.
- Incidental `node tools/rendercheck.mjs --help` was treated by that tool as an unscoped run, not help. Exit 1: five wikilink-in-math errors across 17,020 files, all outside batch 12: `lem-pbw-for-countably-presented-kac-moody-lie-algebras` (one), `prop-kac-moody-root-spaces-are-finite-dimensional` (one), `thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra` (three). These files were not changed. The explicit owned-path render run above is clean.

### Provenance and remaining obligations

The definition, lemma and theorem retain `ai-altered` statement/proof provenance: the source construction is adapted to the exact right-infinite, clamped, total-nonhalting-domain model and strengthened by locally supplied set/run/time arguments. The worked example and counterexample retain `ai-generated` statement/proof provenance and their matching generation roles; they remain dependency leaves. Checkoway is the active macro source; Savage supplies independent model/acceptance/output context, with differences stated. The existing UNSW source drop and all independent reviews and recovery history are preserved; no new source drop, fetch stamp or source-gate waiver is claimed.

No unresolved mathematical gap or proposed scope narrowing/removal was found for these five items. No new prerequisite for Alpha is requested. Structural checks support formatting and declarations only; they do not constitute independent mathematical judgment. Historical whole-run source transport failures were not rerun or declared resolved by this Step-5 authoring. The next action is the engine-owned review of these authored drafts; this author did not change workflow state or authorize publication.
