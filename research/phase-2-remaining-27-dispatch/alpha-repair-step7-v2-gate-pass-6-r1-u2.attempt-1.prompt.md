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
label: step7-v2-gate-pass-6-r1-u2
covers: gate-pass-6:2
output: research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-6-r1-u2.json

# Step 7 repair: gate-pass-6, round 1, unit 2

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/gate-pass-6-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-6-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

Step 7.9 permits no new items.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"phase-2-remaining-27",phase:"gate-pass-6",round:1,unit:"2",input_sha256:"c24766f2e0946388e740ddf569034f83396ecf360377c89f7e28e1cc25df1dd4",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

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
  "thm-schur-orthogonality-for-compact-lie-groups",
  "thm-peter-weyl-for-compact-lie-groups",
  "cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group",
  "cor-finite-dimensional-unitary-representations-separate-points-of-a-compact-lie-group",
  "cor-every-compact-lie-group-is-isomorphic-to-a-closed-matrix-lie-group",
  "cor-every-finite-dimensional-representation-is-a-direct-sum-of-highest-weight-modules",
  "cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators",
  "thm-brownian-markov-property",
  "cor-heat-semigroup-martingale",
  "def-fredholm-operator-cokernel-and-index",
  "thm-fredholm-index-is-additive",
  "thm-fredholm-index-is-locally-constant",
  "thm-fredholm-index-is-stable-under-compact-perturbations",
  "cor-lambda-identity-minus-compact-has-index-zero",
  "def-cartan-involution-of-a-real-semisimple-lie-algebra",
  "def-compact-real-form-of-a-complex-semisimple-lie-algebra",
  "def-split-real-form",
  "lem-chevalley-basis-and-real-structure-constants",
  "thm-existence-of-a-compact-real-form",
  "prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero",
  "thm-conjugacy-of-compact-real-forms",
  "thm-existence-of-a-cartan-involution",
  "thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group",
  "cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group",
  "cor-one-dimensional-brownian-motion-is-recurrent",
  "cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator",
  "def-regular-root-hyperplanes",
  "prop-centralizer-dimension-from-vanishing-roots",
  "cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra",
  "thm-highest-weight-classification-for-a-compact-connected-lie-group",
  "cor-representation-ring-has-the-dominant-character-basis",
  "thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set",
  "def-resolvent-and-spectrum-of-a-closed-unbounded-operator",
  "thm-self-adjoint-resolvent-estimate",
  "thm-self-adjointness-range-criterion",
  "def-cayley-transform-of-a-self-adjoint-operator",
  "thm-von-neumann-self-adjoint-extension-parameterization",
  "cor-self-adjoint-extension-exists-iff-deficiency-indices-agree",
  "cor-separable-infinite-dimensional-hilbert-space-is-ell-two",
  "cor-square-integrable-brownian-terminal-variables-have-ito-representations",
  "lem-finite-tori-are-compact-hausdorff-character-spaces",
  "cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions",
  "cor-v-equals-l-refutes-normal-moore-space-conjecture",
  "cor-vector-levy-characterization",
  "thm-relative-consistency-countable-choice-without-urysohn",
  "cor-zf-does-not-prove-urysohn-lemma",
  "thm-multidimensional-ito-formula-for-brownian-driven-processes",
  "thm-space-time-harmonic-functions-yield-brownian-local-martingales",
  "def-brownian-generator",
  "def-cayley-transform-of-a-theta-stable-cartan-subalgebra",
  "def-coefficient-groups-of-a-generalized-cohomology-theory",
  "def-complex-projective-bundle-and-tautological-complex-line",
  "lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator",
  "thm-integral-complex-projective-bundle-theorem",
  "def-complex-flag-bundle-and-chern-roots",
  "def-corson-ordered-rational-permutation-model",
  "def-good-tree-watson-symmetric-stone-model",
  "def-infinitesimal-generator-of-a-unitary-group",
  "def-riemannian-symmetric-pair-of-noncompact-type",
  "thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k",
  "def-maximal-split-abelian-subspace-and-real-rank",
  "def-norm-and-strong-resolvent-convergence",
  "def-restricted-root-and-restricted-root-space",
  "thm-restricted-root-space-decomposition",
  "def-positive-restricted-roots-and-nilpotent-n-algebra",
  "def-reduced-generalized-homology-theory",
  "def-restricted-weyl-group",
  "thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification",
  "def-vogan-diagram",
  "def-satake-diagram",
  "def-shelah-universal-meagre-forcing",
  "prop-reduced-and-unreduced-generalized-cohomology-theories-correspond",
  "def-skeletal-filtration-for-generalized-cohomology",
  "def-weyl-jacobian-on-a-maximal-torus",
  "ex-a-nonreduced-bc-root-system-from-a-real-form",
  "ex-a-projection-with-finite-dimensional-kernel-is-fredholm",
  "ex-a-regular-level-set-in-a-banach-space",
  "lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets",
  "ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets",
  "thm-two-sided-exit-probability-for-brownian-motion",
  "ex-brownian-hitting-probability-from-an-exponential-martingale",
  "thm-brownian-quadratic-variation-along-dyadic-partitions",
  "ex-brownian-path-p-variation-threshold",
  "ex-cartan-subalgebras-of-a-direct-sum",
  "ex-classical-root-systems-in-euclidean-coordinates",
  "thm-complexification-dichotomy-for-a-real-simple-lie-algebra",
  "ex-complex-simple-lie-algebra-viewed-as-a-real-simple-algebra",
  "ex-continuous-functions-form-a-commutative-banach-algebra",
  "ex-covariance-of-two-deterministic-ito-integrals",
  "ex-development-stars-form-a-countable-local-base",
  "ex-dynkin-diagram-duality-of-b-n-and-c-n",
  "ex-exit-side-probability-from-an-interval",
  "thm-dynkin-formula-for-bounded-brownian-stopping",
  "ex-expected-exit-time-from-an-interval-via-ito-formula",
  "ex-exponential-martingale-and-a-brownian-tail-bound",
  "ex-exterior-powers-and-fundamental-weights-of-sl-n",
  "lem-trigonometric-characters-are-orthonormal",
  "lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori",
  "thm-l-two-fourier-series-converges-in-mean-square",
  "thm-parseval-identity-for-fourier-series",
  "ex-fourier-series-of-a-sawtooth",
  "ex-fourier-series-of-a-square-wave",
  "thm-fourier-basis-and-parseval-on-the-n-torus",
  "ex-fourier-series-on-a-torus-as-peter-weyl",
  "ex-fredholm-alternative-for-an-integral-equation",
  "lem-bounded-hilbert-operators-form-a-c-star-algebra",
  "thm-characters-on-a-unital-banach-algebra-are-continuous",
  "lem-characters-on-a-commutative-c-star-algebra-preserve-star",
  "thm-resolvent-is-banach-valued-holomorphic",
  "lem-submultiplicative-root-limit",
  "lem-spectrum-of-a-self-adjoint-operator-is-real",
  "ex-functional-calculus-for-a-diagonal-operator",
  "ex-harmonic-functions-of-planar-brownian-motion",
  "ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two",
  "prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k",
  "thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space",
  "ex-hyperbolic-space-as-so-zero-n-one-mod-so-n",
  "ex-integral-of-a-deterministic-step-function-against-brownian-motion",
  "thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes",
  "ex-integral-of-brownian-motion-against-itself-preview",
  "ex-integral-of-the-indicator-of-a-stopping-interval",
  "thm-completion-of-an-inner-product-space-is-hilbert",
  "ex-integral-operator-trace-under-a-valid-diagonal-hypothesis",
  "ex-ito-formula-for-brownian-powers",
  "thm-iwasawa-decomposition-on-the-lie-algebra-level",
  "thm-global-iwasawa-decomposition",
  "ex-iwasawa-decomposition-of-sl-two-r",
  "ex-lil-rules-out-a-global-square-root-time-bound",
  "ex-logarithm-of-geometric-brownian-motion",
  "ex-root-systems-a-two-b-two-and-g-two",
  "ex-root-system-a-one",
  "ex-low-rank-dynkin-coincidences",
  "ex-matrix-coefficients-of-the-standard-su-two-representation",
  "ex-maximal-tori-and-weyl-groups-of-u-n-and-su-n",
  "ex-maximal-torus-and-weyl-group-of-so-three",
  "ex-maximum-crossing-probability-before-a-fixed-time",
  "lem-reduction-of-the-integral-bockstein-is-the-first-steenrod-square",
  "lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients",
  "prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory",
  "lem-the-ahss-first-differential-is-the-cellular-coboundary",
  "thm-cohomological-atiyah-hirzebruch-spectral-sequence",
  "thm-homological-atiyah-hirzebruch-spectral-sequence",
  "thm-naturality-and-edge-maps-of-the-ahss",
  "lem-ku-representability-and-skeletal-postnikov-d-three-comparison",
  "thm-first-possible-complex-k-ahss-differential-is-integral-sq-three",
  "ex-nonzero-d-three-in-the-k-ahss-for-rp-two-times-rp-four",
  "lem-planar-brownian-annular-exit-probability",
  "ex-planar-brownian-coordinate-hitting-versus-point-hitting-boundary",
  "lem-pmea-three-quarter-separation-estimate",
  "ex-pmea-three-quarter-event-calculation",
  "ex-polar-cartan-decomposition-of-sl-n-r",
  "thm-polar-decomposition-for-bounded-operators",
  "ex-polar-decomposition-of-the-unilateral-shift",
  "ex-positive-roots-and-highest-root-of-g-two"
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
