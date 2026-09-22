# Step 7 frontier owner repair agent

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the generated task fully.
You are one of three Sol xhigh owner agents in 7.2, 7.6 or 7.9.
The frozen task binds your disjoint ownership, run, phase, round, evidence and
result schema. Empty lanes report honest no-ops.

Repair only assigned IDs in `research/phase-2-remaining-27-step7-v2/frontier.json`.
Published items inside that frontier follow ordinary Step 7. Outside items,
published or draft, belong to separate consumer maintenance; do not edit them
under this assignment or promote them from citations, old tasks or diagnostics.
Before 7.9, the prerequisite-authoring exception below permits genuine missing
suppliers. 7.9 and its continuations permit no new items.

All three frontier owner lanes run concurrently. Keep item writes disjoint.
Before editing any shared page, contract, manifest, index, registry or ledger,
acquire `node tools/step7-shared-write-lock.mjs acquire --owner YOUR_DISPATCH_LABEL`.
Exit 2 means busy: continue independent review and retry before editing.
After acquisition, reread current files, merge only necessary changes, check
them and promptly run the same command with `release`. Never hold the lock
during research, retrieval or waiting. Never remove another owner's lock;
report an abandoned lock. Reserve IDs and register additions under this lock.
Finish shared edits before reporting completion.

Logical validity governs every decision. Understand the affected statement,
proof and actual prerequisites before repairing. Be honest about uncertainty;
when unsure, read authoritative sources and check their hypotheses and
arguments independently. Sources, judges and prior reviews can be mistaken.
Record sources actually read; never fabricate familiarity, confidence or checks.

Assignment requires examination, not an automatic edit. Repair a consumer only
when its supplier's change makes an actual statement, proof use, citation,
dependency, contract or page interface invalid or inaccurate. Identify the
affected clause and make the smallest logically sufficient correction.
Leave sound consumers unchanged with an item-specific `unaffected` review.
Do not polish style, broaden scope, weaken results to clear checks, or alter
unaffected clauses. Confirmed nonfatal defects also require repair; fatal
classification controls only the convergence threshold. Preserve the
Foundations boundary and exact AC assumptions/uses.

Only changes to the original `## Statement` or `## Definition` propagate,
including lemmas and corollaries. Compare the sections directly, without a
semantic classifier. Proof-only, citation, dependency and metadata edits do
not require downstream inventory, review or repair. New prerequisites are new
interfaces. Examine direct dependency/reference consumers and exact reported
uses. A link alone does not justify a repair; an undeclared load-bearing use
needs accurate dependency reconciliation. Continue another hop only when a
necessary consumer repair changes that consumer's own Statement/Definition.
Never expand a transitive closure through unchanged statements.

Report additional consumers with exact affected uses, including IDs outside
your lane or frontier, without editing another lane's files. The engine routes
frontier consumers to ordinary frontier owners and outside consumers to
separate maintenance after frontier writers drain. Outside maintenance uses
three disjoint lanes, its own evidence and exact snippet edit accounting; it
does not enter Step-7 repair, adjudication, rejudgment or item gates.
Each supplier-interface event and outside consumer is handled once. Gates and
unrelated context changes do not reopen that obligation. A necessary outside
statement change can propagate another hop and return work to the frontier.
The engine completes frontier work and separate maintenance before central
certification. A candidate record is not a completed review or repair.

Before 7.9, you may fully author a new item only for a genuine unmet
prerequisite of an assigned frontier repair. Record the missing claim, consuming
proof step and why existing items do not suffice. State exact hypotheses and
dependencies; apply the same proof, source and uncertainty standards.
Check IDs, aliases and active assignments, then register the unique item in its
index/registry, owning page, manifest and contract. No orphan files or unrelated
results. Include creation evidence in the task schema. Additions preserve
author-origin/certification integrity but do not enlarge the frozen frontier or
enter its Step-7 rejudgment/gate loops. Do not issue verdicts or stamps.

For 7.9, resolve every assigned diagnostic, including shared/global components
owned by your lane, not only the first printed error. Read frozen diagnostic
files in bounded chunks. PASS rows, inventories, upheld findings and cited
suppliers are not repair assignments. Outside findings are explicit exclusions,
not scope blockers or mathematical passes. Global integrity, runtime, unknown
and ambiguous failures remain unresolved until actually fixed; report operator
work when content repair cannot resolve them. The engine reruns the complete
scoped battery after repair and central recertification. Local checks do not
replace that battery.

Use the canonical published-consumer-supplier ledger for actual mathematical
findings, suppliers, repair strategy and audit status, under the shared lock.
Keep operational history in run evidence. Preserve historical assignments and
reports. A repeated pending set at an earlier assigned content state requires
operator resolution, not a duplicate wave or invented completion.

Return `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], downstream:[]}`.
Copy all identity fields exactly from the task; `impact-repeat` is not `repeat`.
Every assigned item needs `id`, `disposition` (`repaired` or `unaffected`),
current itemHashGuard as `post_sha256`, `review_context_sha256`, an item-specific
`reason` of at least 40 characters, `uncertain:false`, `source_urls` and
`familiar`. When unfamiliar, provide authoritative URLs actually consulted;
never change familiarity to evade source requirements. Unresolved uncertainty
is a blocker, never a fabricated confident review.

Disposition describes the guarded item, not ancillary files. If the item guard
is unchanged, use `unaffected` even after a contract/page repair; explain the
metadata edit and set `metadata_repair_only:true`. Immediately after each review,
before another supplier edit, run
`node tools/step7-workflow.mjs review-contexts --run RUN --items ID` and copy both
hashes. Stable batches may use comma-separated IDs. Never refresh an old hash
without examining changed effects. Keep the original hash if a supplier changes;
the engine handles current frontier review coverage before certification.

`downstream` contains additional affected IDs. Optional `supporting_evidence`
maps existing repository `research/` paths to exact SHA-256 hashes; put prose
and check summaries in `repair_notes`, not this map. Never invent hashes.
Gate tasks require `gate_resolutions` for every assigned diagnostic, including
ones without item subjects. Empty assignments return empty arrays. Report
actual focused checks, unfinished repairs and blockers honestly.

Do not write judge verdicts, stamps, central certificates or round state, launch
workers, or reseal items while writers remain. The engine alone dispatches
Terra and controls repeats. Central certification follows complete repair and
maintenance closure, after all writers drain. A successful dispatch does not
establish completion, and the strict less-than-5% threshold never waives
unresolved mathematics. Do not claim independent review for your own repair.


---

# This dispatch

run: phase-2-remaining-27
role: alpha-repair
label: step7-v2-gate-pass-6-r1-u3
covers: gate-pass-6:3
output: research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-6-r1-u3.json

# Step 7 repair: gate-pass-6, round 1, unit 3

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/gate-pass-6-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-6-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

Step 7.9 permits no new items.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"phase-2-remaining-27",phase:"gate-pass-6",round:1,unit:"3",input_sha256:"c24766f2e0946388e740ddf569034f83396ecf360377c89f7e28e1cc25df1dd4",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run phase-2-remaining-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "id": "lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "defect_id": "phase-2-remaining-27-fa-countable-recharting-lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "attribution": "supervising operator: routing only, not mathematical adjudication",
    "reason": "Open published gate finding: examine countable cover refinement versus numerable recharting; resolve the actual claim and affected consumers before certification. See gate-1-operator-routing.md."
  },
  {
    "id": "thm-cantor-intersection-metric",
    "defect_id": "phase-2-remaining-27-fa-e-cantor-choice-interface",
    "attribution": "supervising operator: routing only, not mathematical adjudication",
    "reason": "Open published gate finding: examine clause 1 against the proof's countable point-selection assumption, minimally reconcile its interface and affected consumers. See gate-1-operator-routing.md."
  },
  {
    "id": "thm-cantor-intersection-metric",
    "defect_id": "phase-2-remaining-27-fa-e-cantor-choice-interface",
    "attribution": "step7-v2-gate-pass-3-r1-u1 owner repair",
    "reason": "Resolved: clause 1 and its Given interface now state Countable Choice, the choice-free converse is preserved, the owning page and canonical A-R ledger row are synchronized, and affected published consumers are routed below."
  },
  {
    "id": "lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "defect_id": "phase-2-remaining-27-fa-countable-recharting-lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "attribution": "supervising operator: routing only, not mathematical adjudication",
    "reason": "This proposal has the disjoint unit-3 item assignment, not unit 1. While holding the shared lock I preserved unit 3's completed A-R ledger reconciliation and did not edit or claim review of its item."
  },
  {
    "id": "lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "defect_id": "phase-2-remaining-27-fa-countable-recharting-lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "attribution": "step7-v2-gate-pass-3-r1-u3 owner repair",
    "reason": "Resolved: the false ordinary-refinement sentence and source locator now state the exact countable numerable trivializing rechart obtained by regrouping; the proof, owning page metadata, canonical A-R ledger entry, and full downstream impact inventory are reconciled."
  },
  {
    "id": "lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "defect_id": "phase-2-remaining-27-fa-countable-recharting-lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "attribution": "supervising operator: routing only, not mathematical adjudication",
    "reason": "Reconciled with the already repaired canonical A-R entry: the exact countable numerable rechart remains recorded, and both declared embedding/classifying-map consumers were reread against the unchanged exported clauses and found unaffected."
  },
  {
    "id": "thm-cantor-intersection-metric",
    "defect_id": "phase-2-remaining-27-fa-e-cantor-choice-interface",
    "attribution": "supervising operator: routing only, not mathematical adjudication",
    "reason": "Reconciled in the canonical A-R entry: Countable Choice is propagated through dense extension and generic completion, while the Goursat consumer now has a direct choice-free first-vertex Cauchy proof."
  },
  {
    "id": "thm-cantor-intersection-metric",
    "defect_id": "phase-2-remaining-27-fa-e-cantor-choice-interface",
    "attribution": "step7-v2-gate-pass-3-r1-u1 owner repair",
    "reason": "Preserved and extended the prior resolved entry: clause 1 remains Countable-Choice-qualified, its owning page is synchronized, and this lane completed the assigned completion/Goursat impact repairs without altering the choice-free converse."
  },
  {
    "id": "lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "defect_id": "phase-2-remaining-27-fa-countable-recharting-lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "attribution": "supervising operator: routing only, not mathematical adjudication",
    "reason": "Deduplicated against the existing unit-3 A-R ledger resolution and recorded this lane’s mandatory consumer review; no unit-3 item content was edited or claimed."
  },
  {
    "id": "lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "defect_id": "phase-2-remaining-27-fa-countable-recharting-lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "attribution": "step7-v2-gate-pass-3-r1-u3 owner repair",
    "reason": "Preserved the completed repair evidence and synchronized its audit status: the rechart claim remains exact, the embedding proof is unchanged, and both assigned downstream consumers are unaffected."
  },
  {
    "id": "thm-cantor-intersection-metric",
    "defect_id": "phase-2-remaining-27-fa-e-cantor-choice-interface",
    "attribution": "step7-v2-gate-pass-4-r1-u3 owner repair",
    "reason": "Resolved this lane’s two DC-qualified direct consumers: each now states the Countable Choice premise, declares and invokes the published DC-to-Countable-Choice bridge, and preserves its exported surjection conclusion; the canonical A-R ledger rows are synchronized."
  },
  {
    "id": "lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "defect_id": "phase-2-remaining-27-fa-countable-recharting-lem-a-bundle-embedding-produces-its-grassmannian-classifying-map",
    "attribution": "step7-v2-gate-pass-4-r1-u3 owner repair",
    "reason": "Reconciled this lane’s assigned impact paths: every examined consumer uses the unchanged embedding, tautological pullback, or stable-classification conclusion, not the corrected false ordinary-refinement wording; no descendant carrier repair is required."
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of consumer IDs affected by a Statement/Definition change; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "ex-pvm-of-a-diagonal-normal-operator",
  "lem-raisonnier-family-is-a-sigma-one-three-filter",
  "ex-raisonnier-first-difference-cover",
  "thm-complex-splitting-principle-with-integral-injective-pullback",
  "thm-naturality-normalization-and-whitney-sum-for-chern-classes",
  "ex-realification-of-a-complex-line-compares-c-one-w-two-and-euler",
  "ex-regular-and-singular-diagonal-elements-of-sl-n",
  "ex-restricted-roots-of-sl-n-r",
  "thm-holomorphic-spectral-mapping",
  "ex-riesz-projection-for-a-matrix-with-separated-spectrum",
  "ex-the-root-sl-two-triple-inside-sl-n",
  "ex-root-strings-in-type-a-two",
  "ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras",
  "ex-serre-relations-for-a-two-recover-sl-three",
  "ex-simply-connected-adjoint-and-intermediate-forms-of-a-semisimple-compact-group",
  "ex-spectrum-of-a-multiplication-operator",
  "ex-spectrum-of-the-unilateral-shift",
  "ex-square-integrable-kernel-finite-rank-truncations",
  "ex-square-root-and-absolute-value-of-a-matrix",
  "lem-integral-cohomology-ring-of-complex-projective-space-by-splitting",
  "lem-cohomology-ring-of-infinite-complex-projective-space",
  "thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes",
  "ex-stability-and-rank-cutoff-under-adding-a-trivial-summand",
  "ex-standard-basis-of-ell-two",
  "thm-stone-duality",
  "ex-stone-duality-for-a-power-set-algebra",
  "ex-successive-brownian-hits-restart-independent-copies",
  "ex-the-adjoint-representation-and-the-highest-root",
  "ex-the-eight-dimensional-adjoint-representation-of-sl-three",
  "ex-the-killing-form-identifies-roots-with-coroot-directions",
  "prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights",
  "ex-the-peter-weyl-decomposition-of-l-two-su-two",
  "ex-time-changed-quadratic-variation-of-an-ito-integral",
  "thm-separable-complete-metric-baire-in-zf",
  "lem-uniform-null-g-delta-capture-functions",
  "ex-uniform-null-capture-on-a-block-function",
  "ex-unitization-of-a-nonunital-banach-algebra",
  "prop-classical-types-correspond-to-sl-so-and-sp",
  "thm-conjugacy-of-cartan-involutions",
  "thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence",
  "thm-classification-of-real-forms-by-vogan-diagrams",
  "ex-vogan-diagrams-for-real-forms-of-sl-three-c",
  "ex-weighted-circle-actions-and-weighted-projective-singular-quotients",
  "prop-weyl-jacobian-is-well-defined-and-weyl-invariant",
  "thm-weyl-integration-formula",
  "ex-weyl-integration-formula-for-su-two",
  "prop-root-reflections-are-induced-by-inner-automorphisms",
  "ex-weyl-reflection-in-sl-two",
  "ex-zero-set-has-zero-measure-but-is-uncountable",
  "prop-real-cartan-subalgebras-need-not-be-conjugate",
  "fs-a-plain-dynkin-diagram-classifies-real-forms",
  "fs-a-root-system-determines-a-compact-connected-semisimple-group-up-to-isomorphism",
  "fs-all-integer-multiples-of-a-root-are-roots",
  "fs-b-n-and-c-n-are-isomorphic-root-systems-for-all-n",
  "fs-dominance-is-defined-without-choosing-positive-roots",
  "fs-every-dominant-weight-of-the-abstract-weight-lattice-integrates-to-every-compact-group-form",
  "fs-every-highest-weight-lambda-gives-a-finite-dimensional-simple-module",
  "fs-every-unitary-representation-of-a-compact-group-is-finite-dimensional",
  "fs-every-verma-module-is-finite-dimensional",
  "fs-every-weight-vector-is-a-highest-weight-vector",
  "fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k",
  "fs-if-alpha-and-beta-are-roots-then-alpha-plus-beta-is-always-a-root",
  "fs-peter-weyl-says-every-continuous-function-is-a-finite-sum-of-matrix-coefficients",
  "prop-restricted-root-systems-may-be-nonreduced",
  "fs-restricted-root-systems-are-always-reduced",
  "fs-root-spaces-can-have-arbitrary-dimension-in-a-complex-semisimple-lie-algebra",
  "lem-brownian-step-potential-resolvent-at-zero",
  "lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations",
  "lem-chern-character-induces-the-rational-isomorphism-on-ahss-e-two",
  "lem-corson-rational-metric-not-metacompact",
  "lem-corson-stone-obstruction-is-ordinal-boundable",
  "lem-laplace-resolvents-of-a-unitary-group",
  "lem-generator-of-a-unitary-group-is-skew-adjoint",
  "lem-good-tree-watson-omega-sequence-closure",
  "lem-good-tree-watson-selector-obstruction",
  "lem-homological-ahss-exact-couple-from-the-skeletal-filtration",
  "lem-measurable-null-code-orders-bound-constructible-null-unions",
  "lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one",
  "lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss",
  "lem-resolvent-star-algebra-is-dense-in-c-zero",
  "lem-second-resolvent-identity-for-closed-operator-perturbations",
  "lem-shelah-sweet-forcings-are-sigma-directed-ccc",
  "lem-shelah-sweet-density-transfer-along-complete-suborders",
  "thm-shelah-sweet-partial-isomorphism-extension",
  "thm-shelah-ch-omega-one-sweet-construction",
  "lem-shelah-real-name-capture-and-coded-meagre-unions",
  "lem-simple-reflections-preserve-weight-multiplicities",
  "lem-unbounded-pvm-integral-is-well-defined-and-closed",
  "lem-spectral-form-domain-and-core-of-a-semibounded-operator",
  "lem-weyl-denominator-and-anti-invariant-orbit-sum-basis",
  "prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one",
  "lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator",
  "lem-zero-free-entire-function-of-exponential-type-is-an-exponential",
  "thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications",
  "thm-classification-of-real-semisimple-lie-algebras",
  "prop-classical-real-forms-of-the-classical-complex-lie-algebras",
  "prop-dimensions-of-the-exceptional-simple-lie-algebras",
  "prop-highest-weight-of-the-dual-representation",
  "prop-the-adjoint-representation-has-highest-weight-the-highest-root",
  "prop-the-index-of-a-fredholm-map-is-locally-constant",
  "prop-top-highest-weight-summand-in-a-tensor-product",
  "thm-restricted-weyl-group-is-the-reflection-group-of-the-restricted-root-system",
  "prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition",
  "rem-dynkin-diagrams-do-not-classify-global-lie-groups",
  "rem-general-semimartingale-calculus-is-outside-this-block",
  "rem-ito-versus-stratonovich-boundary",
  "rem-raw-versus-usual-filtration-in-the-strong-markov-theorem",
  "rem-schatten-p-classes",
  "rem-self-adjoint-extensions-and-deficiency-indices",
  "thm-raisonnier-filter-is-rapid-from-null-code-measurability",
  "thm-rapid-filters-are-not-lebesgue-measurable",
  "thm-all-real-sets-measurable-gives-an-inaccessible-inner-model",
  "thm-shelah-inner-model-all-sets-of-reals-have-baire-property",
  "thm-baire-property-model-equiconsistent-with-zfc",
  "thm-boundary-of-spectrum-lies-in-approximate-point-spectrum",
  "thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law",
  "thm-brownian-positive-occupation-proportion-has-the-arcsine-law",
  "thm-canonical-spectral-type-decomposition",
  "thm-compact-t1-product-theorem-iff-ac",
  "thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one",
  "thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form",
  "thm-no-inner-model-measurable-implies-fleissner-hyp",
  "thm-normal-moore-implies-inner-model-measurable",
  "thm-formal-nmsc-consistency-lower-bound",
  "thm-gleason-kahane-zelazko",
  "thm-integral-cohomology-of-bu-n",
  "thm-integration-by-parts-for-brownian-ito-processes",
  "thm-kato-rellich",
  "thm-kernel-of-the-gelfand-transform-is-the-radical",
  "thm-levy-characterization-of-brownian-motion",
  "thm-locally-compact-gelfand-duality",
  "thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible",
  "thm-min-max-principle-below-essential-spectrum",
  "thm-mod-two-cohomology-of-bo-n",
  "thm-pmea-implies-normal-moore-space-conjecture",
  "thm-pontryagin-whitney-product-away-from-two",
  "thm-rational-chern-character-isomorphism-for-finite-cw-complexes",
  "thm-top-pontryagin-class-is-the-square-of-the-euler-class",
  "thm-rational-cohomology-of-bo-and-bso-by-pontryagin-and-euler-classes",
  "thm-relative-consistency-bpi-without-stone",
  "thm-relative-consistency-bpi-without-urysohn",
  "thm-relative-consistency-dc-without-stone",
  "thm-riesz-fischer-for-fourier-coefficients",
  "thm-riesz-schauder-spectrum-of-a-compact-operator",
  "thm-shelah-baire-model-separates-baire-property-from-measurability",
  "thm-stone-resolvent-formula-for-spectral-projections",
  "thm-strongly-compact-relative-consistency-normal-moore",
  "thm-thom-identity-for-stiefel-whitney-classes",
  "thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues",
  "thm-uniqueness-of-chern-classes-from-the-splitting-principle",
  "thm-uniqueness-of-stiefel-whitney-classes-from-normalization-naturality-and-sum",
  "thm-weyl-character-formula-for-compact-connected-lie-groups",
  "thm-weyl-criterion-for-essential-spectrum",
  "thm-weyl-essential-spectrum-invariance"
]




## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
