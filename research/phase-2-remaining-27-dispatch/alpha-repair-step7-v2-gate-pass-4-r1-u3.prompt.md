# Step 7 owner repair agent

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the generated task fully.
You are one of exactly three Sol xhigh owner repair agents in 7.2 or 7.6, or
an assigned owner repair agent resolving final gate failures in 7.9.
The task defines your disjoint ownership, current round, evidence, authorized
findings and structured output. An empty lane reports an honest no-op.

All three Step 7 owner agents run in parallel, including continuation and gate
repair waves. This supersedes serial-owner wording in older generated tasks.
Keep item writes disjoint. Before editing ANY shared file (pages, batch
contracts/manifests, registry/index, ledger), acquire the shared metadata lock:
`node tools/step7-shared-write-lock.mjs acquire --owner YOUR_DISPATCH_LABEL`.
Exit 2 means busy: continue independent review and retry before shared edits.
After acquiring, reread the shared file from disk, merge only your necessary
changes, check them, then promptly release with the same command using `release`.
Never hold the lock during mathematical research, source retrieval, or waiting
for another agent. Never remove another owner's lock; report an abandoned lock
to the supervisor. Reserve/check new IDs and register additions under this lock.
Finish all required shared edits before reporting completion. Supplier changes
may invalidate a parallel review: retain its original context hash so the engine
assigns a fresh review before certification.

Logical validity is the ground truth. Understand every affected statement,
proof and dependency before repairing it. State uncertainty honestly, consult
authoritative sources when unsure, and check their actual arguments: sources,
judges and prior reviewers can be mistaken. Record exact claims and URLs read.
Never fabricate confidence, proof completion or checks.

Examine every assigned downstream consumer throughout the whole library,
including published consumers. Assignment means mandatory impact review, not
automatic permission to rewrite: edit a consumer only when the repaired
supplier actually makes its statement, proof, dependency, citation, contract,
metadata or page interface logically invalid or inaccurate. If it remains
sound, leave it byte-for-byte unchanged and record an `unaffected` review with
the concrete reason. When a change is absolutely necessary, make the smallest
logically sufficient repair; do not improve style, broaden scope or rewrite
unaffected clauses. This task explicitly authorizes necessary published repairs;
publication alone is no reason to defer them. Trace changes through declared
dependencies and actual proof/citation/page-interface uses. Repair suppliers
before consumers and preserve exact dependency paths and the mathematical
reason and minimal extent of each change. Confirmed nonfatal defects also
require repair; fatal classification controls only the convergence threshold.
Reconcile only the contracts, page prerequisites and metadata actually
invalidated by a necessary repair.

The impact graph distinguishes declared load-bearing dependencies from body
links and external references. Declared dependencies propagate transitively;
reference-only edges require examination but do not automatically propagate
past an unchanged reference consumer. Examine the actual cited clause: explain
why it is unaffected, or minimally repair it and identify its consumers. If a
reference is genuinely load-bearing but undeclared, reconcile the necessary
dependency metadata and downstream effects. Never dismiss a real proof use
merely because it was discovered through a body link. A repaired candidate
becomes a new propagation source before certification.

Discover and report additional affected consumers, including ones outside the
initial closure. Route another lane's items through the task's integration
mechanism; never write another agent's files. Missing ownership or a shared-file
collision must be reconciled before closure. Do not weaken results merely to
clear a check.
Preserve the Foundations boundary and actual AC contracts.

All three owner repair agents and the batch adjudicators may author new items
only to satisfy genuine unmet prerequisites of assigned repairs. Identify the
precise missing claim, its consuming proof step and why existing items cannot
supply it. Do not add unrelated results or assume an unproved prerequisite.
Fully author the definition or proof, state exact hypotheses and dependency
uses, and apply the same logical and source-evidence standard as to repairs.
Choose unique IDs after checking existing IDs, aliases and current assignments;
resolve an ownership or ID collision before writing. Register each addition in
the canonical registry/index, owning page, applicable manifest and proof contract
under the shared metadata lock. Do not leave orphan item files.
Include new items and creation evidence in the generated task's result schema.
Declare dependency edges and discover every affected downstream consumer,
including published consumers. New downstream work continues within the repair
phase until complete before certification. New items enter the central
certification inventory and complete gate battery; they do not change the frozen
original-frontier denominator or authorize self-issued verdicts or stamps.

For 7.9, resolve every assigned full-battery failure, not only the first printed
error. Distinguish mathematical defects from detector/runtime defects and name
any operator work required. A check that cannot run remains unresolved.
Read your frozen assignment and lane diagnostic files in bounded chunks. For a
diagnostic shared across lanes, resolve only your scoped subjects; global
components belong to its designated owner. PASS rows, inventories and cited
suppliers are not additional repair assignments. Preserve and report every
assigned diagnostic obligation, even when it has no item subjects.
The engine reruns the complete battery after collection and recertification;
your focused checks do not replace it.

Maintain the canonical published-consumer-supplier ledger through the assigned
shared metadata lock, with findings, suppliers, repair strategy and audit
status. Keep workflow history in run evidence. Report changed items, examined
consumers, evidence, checks and blockers in the prescribed schema.
Return `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], downstream:[]}`.
Copy `input_sha256` from the generated task to bind the exact assignment.
Optional `supporting_evidence` maps existing repository `research/` file paths
to their exact SHA-256 hashes. It is not a container for prose, check summaries,
or arrays of findings; put those in `repair_notes` instead. Never invent hashes.
Copy the exact `run`, `phase`, `round` and `unit` too: `impact-repeat` is not
`repeat`. Disposition describes changes to the item carrier, not its ancillary
files. If itemHashGuard is unchanged from the assignment's `before` hash, use
`unaffected` even when repairing a contract or page. Record those metadata edits
explicitly in the reason with `metadata_repair_only:true`; do not claim an item
repair that did not occur. When `familiar:false`, supply authoritative source
URLs you actually consulted. An empty source list is not sufficient, and
changing familiarity merely to satisfy a check is forbidden.
Each assigned item requires a review with `id`, `disposition` (`repaired` or
`unaffected`), current itemHashGuard as `post_sha256`, `review_context_sha256`, an item-specific `reason`
of at least 40 characters, `uncertain:false`, `source_urls` and `familiar`.
`downstream` lists additional affected item IDs. Report unresolved uncertainty
as a blocker, never a fabricated confident review. Empty assignments return
empty arrays. Follow the task's integration rules for shared ledger findings.
Immediately after completing each review, before editing another supplier, run
`node tools/step7-workflow.mjs review-contexts --run RUN --items ID` and copy both
hashes into that review. Stable batches may use comma-separated IDs. Never
refresh an old review's hash after a supplier changes without examining its
new effects. The engine uses these records to continue repairs before the
single certification pass. Gate tasks also require `gate_resolutions` for
every assigned diagnostic, including diagnostics with no item IDs.
Do not claim independent review for your own repair.

Do not produce judge verdicts, stamps, certification or round-state edits.
Do not reseal items while other writers remain active. The orchestrator
recertifies the complete stable state once after all writers drain in 7.3/7.7,
and recertifies changed items after 7.9. Only the engine dispatches Terra and
controls repeats. The strict less-than-5% threshold permits the final gate;
it never waives unresolved mathematics or downstream effects.
ALL necessary repairs among the examined assignments, including newly discovered
relevant downstream effects, must be complete before certification. Sound
consumers require evidenced `unaffected` reviews, not edits. Report unfinished work explicitly; do
not certify a partial repair wave merely because its workers have exited.
If repairs reveal additional consumers, the engine continues this repair phase
with fresh disjoint ownership until the additional work and its downstream
effects are complete. Certification waits for that entire closure.


---

# This dispatch

run: phase-2-remaining-27
role: alpha-repair
label: step7-v2-gate-pass-4-r1-u3
covers: gate-pass-4:3
output: research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-4-r1-u3.json

# Step 7 repair: gate-pass-4, round 1, unit 3

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/gate-pass-4-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-4-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Read all cited suppliers and relevant consumers. Repair confirmed fatal defects fully. Identify all downstream consumers, including published items.

Examine every assigned downstream item, including published items. Assignment requires impact review, not an edit. Leave a sound consumer byte-for-byte unchanged and explain why it is unaffected. Repair only when the supplier change makes the consumer logically invalid or inaccurate, and then make the smallest logically sufficient change without stylistic or unrelated rewriting. Work supplier-before-consumer. Necessary published repairs are authorized by the owner for this impact wave. Reconcile only proof contracts, dependencies, page metadata and publication audit evidence actually invalidated by a necessary repair. Reference-only candidates require examination of the actual cited clause, not automatic transitive propagation; declare genuine missing load-bearing dependencies and report downstream effects of necessary repairs.

Return JSON {run:"phase-2-remaining-27",phase:"gate-pass-4",round:1,unit:"3",input_sha256:"a084455b75b57bc44f55b4f30c38bf11f366aa1fcf0762e4c2d69e3c0db55f97",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run phase-2-remaining-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Owner repair units run in parallel with disjoint item ownership. Follow the shared metadata lock protocol in briefs/step7-owner-repair.md before editing pages, contracts, manifests, registry/index or the published-consumer-supplier ledger; reread shared files after acquiring the lock and release promptly. Maintain the canonical deduplicated classification index and exact supplier/evidence links. Resolve supplied ledger proposals; do not silently discard them. Do not write judge verdicts or shared adjudication JSONL. Unit 1 also reconciles initial-adjudicator ledger proposals whose item has no downstream owner assignment. Record unresolved ledger work honestly in your report; it blocks the final gate.

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
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of item IDs; include consumers reached through changed intermediate items.

Assigned input:
[
  "ex-every-convex-plane-domain-is-simply-connected",
  "ex-every-star-shaped-plane-domain-is-simply-connected",
  "ex-exp-one-over-z-shows-great-picard-is-sharp",
  "ex-finite-bad-place-test-for-a-ternary-form",
  "ex-from-psi-to-the-logarithmic-integral",
  "ex-functional-calculus-for-a-diagonal-operator",
  "ex-gamma-values-at-half-integers-and-negative-half-integers",
  "ex-goursat-triangle-integral-of-z-squared",
  "ex-harnack-inequality-for-a-poisson-kernel",
  "ex-hasse-minkowski-for-a-quaternary-form",
  "ex-hausdorff-young-endpoint-exponent-arithmetic",
  "lem-germ-neighborhoods-form-a-riemann-surface-basis",
  "thm-germ-projection-is-a-local-biholomorphism",
  "thm-principal-logarithm-biholomorphism-to-the-principal-strip",
  "thm-principal-exponential-biholomorphism-from-principal-strip",
  "thm-riemann-surface-of-the-logarithm",
  "ex-helicoid-model-of-the-logarithm-surface",
  "ex-hilbert-one-place-principle",
  "ex-hilbert-symbol-at-an-odd-prime",
  "ex-hilbert-symbol-over-the-reals",
  "ex-holomorphy-of-integral-of-t-to-z",
  "ex-hopf-line-bundle-over-the-two-sphere-by-clutching",
  "ex-hurwitz-preserves-a-simple-zero-under-local-uniform-convergence",
  "thm-completion-of-an-inner-product-space-is-hilbert",
  "ex-integral-operator-trace-under-a-valid-diagonal-hypothesis",
  "ex-interpolation-of-an-integral-averaging-operator",
  "ex-jensen-formula-for-a-polynomial",
  "thm-branch-power-agrees-with-integer-powers",
  "thm-slit-plane-root-branch-biholomorphism-to-a-sector",
  "thm-joukowski-biholomorphism-outside-unit-disc",
  "ex-joukowski-sends-circles-to-ellipses",
  "lem-keyhole-branch-boundary-values",
  "thm-keyhole-residue-formula-mellin-rational-integrals",
  "ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x",
  "thm-koebe-distortion-theorem",
  "thm-koebe-growth-theorem",
  "ex-koebe-function-realizes-the-quarter-disc-bound",
  "ex-local-mapping-of-complex-squaring-at-zero-and-one",
  "ex-local-obstruction-to-a-rational-conic",
  "ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i",
  "ex-lp-banach-space-dictionary",
  "ex-majorising-a-two-variable-analytic-germ-by-a-geometric-series",
  "ex-maximal-ideal-space-of-the-disc-algebra",
  "ex-maximum-modulus-bound-for-a-polynomial-on-the-unit-disc",
  "thm-maximum-modulus-principle-in-several-complex-variables",
  "ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc",
  "thm-c-two-levi-criterion-for-plurisubharmonicity",
  "ex-minus-log-boundary-distance-is-plurisubharmonic-on-a-half-space",
  "thm-mittag-leffler-theorem-on-the-plane",
  "ex-mittag-leffler-function-with-double-poles-at-the-integers",
  "thm-dirichlet-l-nonvanishing-line-one",
  "lem-dirichlet-character-chebyshev-laplace-transform",
  "lem-newman-damped-contour-estimates",
  "thm-newman-zagier-tauberian-theorem",
  "ex-newman-tauberian-prime-number-theorem",
  "ex-no-square-root-of-p-in-qp",
  "ex-nonabelian-frobenius-conjugacy-class",
  "lem-ku-representability-and-skeletal-postnikov-d-three-comparison",
  "ex-nonzero-d-three-in-the-k-ahss-for-rp-two-times-rp-four",
  "thm-upper-half-plane-automorphisms-are-real-mobius-maps",
  "ex-normalized-riemann-map-for-a-horizontal-strip",
  "thm-sector-power-map-is-biholomorphic-on-narrow-sectors",
  "ex-normalized-riemann-map-for-a-sector-with-branch-choice",
  "ex-normalized-riemann-map-for-the-slit-plane",
  "ex-normalized-riemann-map-for-the-upper-half-plane-at-i",
  "ex-one-over-one-minus-z-one-z-two-extends-from-a-hartogs-figure",
  "ex-one-over-z-not-polynomially-approximable-on-unit-circle",
  "ex-optimizing-the-prime-number-theorem-contour-height",
  "ex-p-adic-expansion-of-minus-one",
  "ex-p-adic-geometric-series",
  "ex-p-adic-hensel-lifting-a-simple-root",
  "ex-periods-of-a-holomorphic-function-on-an-annulus",
  "ex-perron-solution-on-an-annulus-with-radial-data",
  "ex-poisson-integral-of-cos-theta",
  "ex-poisson-modification-of-a-radial-quadratic-on-a-disc",
  "thm-polar-decomposition-for-bounded-operators",
  "ex-polar-decomposition-of-the-unilateral-shift",
  "ex-polynomials-are-not-complete-in-the-supremum-norm",
  "ex-power-map-sends-a-sector-to-a-half-plane",
  "ex-power-series-expansion-of-a-geometric-quotient-in-two-variables",
  "thm-prime-number-theorem-arithmetic-progressions",
  "ex-prime-number-theorem-in-a-small-progression",
  "ex-principal-dirichlet-l-missing-euler-factors",
  "ex-principal-logarithm-breaks-additivity-at-minus-one",
  "ex-principal-square-root-breaks-multiplicativity-at-minus-one",
  "ex-product-of-one-plus-z-over-two-to-n-is-entire-and-zero-free",
  "ex-pvm-of-a-diagonal-normal-operator",
  "ex-realification-of-a-complex-line-compares-c-one-w-two-and-euler",
  "ex-reflection-formula-at-one-half",
  "lem-indented-arc-residue-limit",
  "lem-jordans-lemma-rational-functions",
  "thm-residue-evaluation-rational-fourier-integrals",
  "ex-residue-evaluates-cos-over-one-plus-x-squared",
  "thm-residue-evaluation-rational-real-integrals",
  "ex-residue-evaluates-int-one-over-one-plus-x-fourth",
  "ex-residue-evaluates-int-one-over-one-plus-x-squared",
  "ex-residue-evaluates-sine-over-x-principal-value",
  "ex-residue-evaluates-the-basel-sum",
  "ex-residue-evaluates-the-gaussian-cosine-integral-by-a-rectangle",
  "ex-residue-of-exp-over-z-cubed-by-derivative-formula",
  "ex-residue-of-p-over-q-at-a-simple-zero",
  "thm-holomorphic-spectral-mapping",
  "thm-riesz-spectral-projection-properties",
  "ex-riesz-projection-for-a-matrix-with-separated-spectrum",
  "ex-schottky-bound-for-a-map-with-center-value-one-half",
  "ex-selecting-an-admissible-contour-height",
  "ex-sign-and-positive-negative-parts-of-a-self-adjoint-operator",
  "ex-sine-minus-z-zero-of-order-three",
  "ex-sine-product-recovers-the-basel-sum",
  "thm-sine-biholomorphism-from-upper-half-strip",
  "ex-sine-sends-a-half-strip-to-the-upper-half-plane",
  "ex-singularities-at-infinity-for-polynomials-and-reciprocals",
  "ex-smoothed-versus-sharp-explicit-formula",
  "ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection",
  "ex-splitting-the-theta-mellin-integral-isolates-the-two-polar-terms",
  "ex-square-root-and-absolute-value-of-a-matrix",
  "thm-branch-discrepancies-for-logarithm-and-complex-powers",
  "ex-square-root-continuation-around-the-origin-changes-sign",
  "ex-square-root-of-minus-one-in-q5",
  "thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes",
  "ex-stability-and-rank-cutoff-under-adding-a-trivial-summand",
  "ex-stirling-approximation-to-ten-factorial",
  "ex-strip-to-disc-biholomorphism-by-exponential-and-cayley",
  "ex-symmetric-finite-zero-products-model-the-xi-hadamard-product",
  "ex-the-complex-plane-satisfies-all-grand-equivalence-clauses",
  "ex-the-exponential-function-omits-exactly-zero-and-shows-little-picard-is-sharp",
  "ex-the-holomorphic-hull-of-a-circle-in-c-is-the-filled-disc",
  "ex-the-holomorphic-hull-of-a-product-torus-in-the-bidisc-is-the-polydisc",
  "thm-holomorphic-inverse-contour-formula",
  "ex-the-inverse-contour-formula-recovers-a-local-inverse-value",
  "ex-the-same-sequence-in-real-and-p-adic-metrics",
  "ex-the-slit-plane-is-simply-connected-by-the-principal-logarithm",
  "ex-the-unit-ball-family-is-normal-on-any-domain",
  "thm-holomorphic-implicit-function-theorem",
  "ex-the-unit-circle-is-a-holomorphic-graph-near-zero-one",
  "ex-the-unit-disc-extremal-problem-is-solved-by-the-identity",
  "ex-the-unit-disc-satisfies-all-grand-equivalence-clauses",
  "ex-third-mertens-product-numerics",
  "thm-trigonometric-integral-unit-circle-substitution",
  "ex-trigonometric-integral-one-over-a-plus-cos-theta",
  "ex-trivial-zeros-of-a-dirichlet-l-function",
  "ex-two-adic-hilbert-symbol",
  "ex-two-adic-square-test",
  "thm-riemann-surface-of-an-nth-root",
  "ex-two-sheeted-model-of-the-square-root-surface",
  "ex-unitization-corresponds-to-one-point-compactification",
  "ex-von-mangoldt-residue-table",
  "thm-weierstrass-division-theorem",
  "ex-weierstrass-division-of-z-one-by-z-two-squared-minus-z-one",
  "ex-winding-number-of-a-figure-eight-cycle",
  "ex-winding-number-of-the-unit-circle-traversed-three-times",
  "ex-winding-numbers-of-a-keyhole-contour",
  "ex-z-five-plus-three-z-plus-one-has-four-zeros-in-the-annulus-one-to-two",
  "ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc",
  "ex-z-one-over-one-minus-z-one-z-two-extends-across-the-punctured-bidisc",
  "ex-z-one-squared-minus-z-two-prepares-to-z-two-minus-z-one-squared",
  "ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane",
  "ex-zero-free-region-parameter-balance",
  "ex-zeta-four-equals-pi-to-the-four-over-ninety",
  "ex-zeta-minus-two-vanishes-by-the-sine-factor",
  "ex-zeta-zero-equals-minus-one-half",
  "fs-a-chordal-limit-of-holomorphic-functions-cannot-be-identically-infinity",
  "fs-a-locally-uniform-limit-of-injective-holomorphic-functions-is-injective",
  "fs-a-nonconstant-meromorphic-function-on-the-plane-omits-at-most-one-sphere-value",
  "thm-zero-set-has-no-isolated-points-in-several-complex-variables",
  "fs-a-nonconstant-scalar-holomorphic-function-in-dimension-at-least-two-can-have-an-isolated-zero",
  "fs-arzela-ascoli-alone-proves-montel",
  "fs-boundary-maximum-modulus-principle-on-unbounded-domains",
  "fs-cauchy-implies-convergent-in-every-metric-space",
  "fs-completeness-is-a-topological-property",
  "fs-conformal-maps-preserve-euclidean-lengths",
  "fs-connected-complement-in-c-implies-simple-connectivity",
  "fs-continuation-along-same-endpoint-paths-always-agrees",
  "fs-degree-drop-by-one-is-enough-for-rational-real-integral-convergence",
  "fs-entire-bounded-on-real-axis-is-constant",
  "fs-entire-order-equals-canonical-genus",
  "fs-every-bounded-plane-domain-has-a-dirichlet-solution",
  "fs-every-cycle-in-a-connected-plane-domain-is-null-homologous",
  "fs-every-domain-in-c-n-is-a-domain-of-holomorphy",
  "fs-every-domain-in-c-two-is-a-domain-of-holomorphy",
  "fs-every-germ-is-regular-in-the-last-variable-without-a-coordinate-change",
  "fs-every-holomorphic-function-on-a-domain-continues-past-its-boundary",
  "fs-every-metrizable-space-is-cech-complete",
  "fs-every-mobius-self-map-restricts-to-an-entire-biholomorphism",
  "fs-goursats-theorem-requires-continuity-of-the-derivative",
  "fs-injective-real-differentiable-map-has-nonzero-jacobian",
  "fs-little-picard-needs-a-boundedness-hypothesis",
  "fs-maximum-modulus-principle-without-connectedness",
  "fs-meromorphic-function-equals-the-naive-sum-of-its-principal-parts",
  "fs-minimum-modulus-principle-without-nonvanishing",
  "fs-normality-means-sequential-limits-stay-inside-the-family",
  "fs-one-variable-isolated-singularity-theory-has-a-several-variable-analogue",
  "fs-punctured-domain-functions-must-be-unbounded",
  "fs-residue-theorem-applies-to-any-cycle-in-the-domain",
  "fs-riemann-map-is-unique-without-normalization",
  "fs-riemann-zeta-is-entire",
  "fs-runge-gives-polynomial-approximation-on-any-compact-set",
  "fs-schwarz-lemma-holds-without-a-fixed-point-at-zero",
  "thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables",
  "lem-local-boundedness-of-separately-holomorphic-functions",
  "fs-separate-holomorphy-can-fail-to-imply-local-boundedness",
  "fs-separately-real-analytic-functions-are-jointly-continuous",
  "fs-several-variable-identity-theorem-from-an-accumulation-point",
  "fs-simply-connected-plane-domains-are-convex",
  "fs-simply-connected-plane-domains-are-star-shaped",
  "fs-the-argument-principle-counts-zeros-without-multiplicity",
  "fs-the-functional-equation-alone-characterizes-zeta",
  "fs-the-holomorphic-inverse-function-theorem-is-global",
  "fs-the-perron-envelope-always-attains-the-boundary-data",
  "fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic",
  "fs-the-riemann-surface-of-a-multivalued-function-is-always-a-subset-of-c-squared",
  "fs-the-union-of-two-domains-of-holomorphy-is-a-domain-of-holomorphy",
  "fs-weierstrass-factorization-is-unique",
  "fs-weierstrass-preparation-is-unique-without-the-unit-condition",
  "fs-winding-number-depends-only-on-the-trace",
  "rem-dirichlet-series-continuation-and-regularized-sums",
  "fs-zeta-minus-one-is-the-ordinary-sum-one-plus-two-plus-three-and-so-on",
  "lem-bounded-punctured-slice-has-holomorphic-parameter-extension",
  "lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations",
  "lem-chern-character-induces-the-rational-isomorphism-on-ahss-e-two",
  "lem-local-hartogs-extension-across-polydisc-shells",
  "thm-uniqueness-in-weierstrass-preparation",
  "lem-prepared-factorizations-and-irreducibility",
  "lem-propagation-and-gluing-of-hartogs-extensions",
  "lem-spectral-form-domain-and-core-of-a-semibounded-operator",
  "lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension",
  "lem-weierstrass-quotient-is-a-finite-module",
  "thm-holomorphic-if-and-only-if-analytic",
  "lem-zero-free-entire-function-of-exponential-type-is-an-exponential",
  "rem-agreement-between-classical-and-nevanlinna-picard-theorems",
  "thm-mittag-leffler-theorem-on-plane-domains",
  "thm-runge-approximation-on-plane-domains",
  "rem-choice-strength-of-runge-and-mittag-leffler",
  "rem-choice-strength-of-the-riemann-mapping-proof",
  "rem-choice-strength-of-the-grand-equivalence",
  "rem-complete-metrizability-is-the-topological-shadow",
  "rem-complex-versus-banach-open-mapping-theorems",
  "rem-covering-maps-among-complete-analytic-functions",
  "thm-unitary-equivalence-classified-by-measure-class-and-multiplicity",
  "rem-direct-integrals-and-general-multiplicity-theory",
  "rem-fundamental-theorem-of-algebra-via-liouville",
  "rem-fundamental-theorem-of-algebra-via-rouche",
  "rem-homological-simple-connectivity-conventions",
  "rem-local-degree-argument-principle-agreement",
  "rem-monodromy-corollary-agrees-with-the-earlier-simply-connected-logarithm-theorems",
  "rem-open-mapping-theorem-via-argument-principle",
  "rem-positive-square-root-and-covariance-matrices",
  "thm-harmonic-and-holomorphic-schwarz-reflection-principles",
  "rem-schwarz-reflection-as-analytic-continuation",
  "rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases",
  "rem-several-variable-conventions-and-the-identity-theorem-gap",
  "rem-simply-connected-convention-for-plane-domains",
  "rem-taylor-coefficient-formula-agreement",
  "rem-the-classical-zeta-region-is-not-a-uniform-dirichlet-l-region",
  "rem-the-winding-number-and-the-planar-vortex-field",
  "rem-three-lines-and-complex-interpolation",
  "thm-boundary-of-spectrum-lies-in-approximate-point-spectrum",
  "thm-bounded-normal-operator-abstract-spectral-theorem",
  "thm-canonical-spectral-type-decomposition",
  "thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space",
  "thm-cauchy-riemann-characterization-in-several-complex-variables",
  "thm-commutative-gelfand-duality",
  "thm-complex-pythagorean-identity-by-identity-theorem",
  "thm-conformal-transport-of-plane-dirichlet-solutions",
  "thm-continuity-principle-for-domains-of-holomorphy",
  "thm-cosecant-residue-alternating-summation-rational-functions",
  "thm-cotangent-residue-summation-rational-functions",
  "thm-decomposition-and-inertia-fixed-fields",
  "thm-dirichlet-series-abscissa-gap",
  "thm-domains-of-holomorphy-are-hartogs-pseudoconvex",
  "thm-stability-operations-for-plurisubharmonic-functions",
  "thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity",
  "thm-every-commutative-c-star-algebra-has-an-approximate-unit",
  "thm-every-nonempty-polish-space-is-a-continuous-image-of-baire-space",
  "thm-hankel-representation-for-reciprocal-gamma",
  "thm-hartogs-extension-across-compact-holes",
  "thm-hartogs-separate-holomorphy",
  "thm-holomorphic-constant-rank-theorem",
  "thm-holomorphic-germ-ring-is-a-ufd",
  "thm-holomorphic-germ-ring-is-noetherian",
  "thm-holomorphic-pullback-of-plurisubharmonic-functions",
  "thm-identity-principle-for-plane-harmonic-functions",
  "thm-integral-cohomology-of-bu-n",
  "thm-kato-rellich",
  "thm-kernel-of-the-gelfand-transform-is-the-radical",
  "thm-landau-theorem",
  "thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains",
  "thm-locally-compact-gelfand-duality",
  "thm-min-max-principle-below-essential-spectrum",
  "thm-mod-two-cohomology-of-bo-n",
  "thm-nonsingleton-boundary-component-is-regular",
  "thm-numerical-radius-is-an-equivalent-operator-norm",
  "thm-open-mapping-theorem-for-scalar-holomorphic-functions-in-several-variables",
  "thm-plane-harmonic-functions-are-smooth-and-real-analytic",
  "thm-poincare-distance-formula-and-disc-automorphism-invariance",
  "thm-pontryagin-whitney-product-away-from-two",
  "thm-principal-branch-power-agrees-with-positive-real-power",
  "thm-rational-chern-character-isomorphism-for-finite-cw-complexes",
  "thm-top-pontryagin-class-is-the-square-of-the-euler-class",
  "thm-rational-cohomology-of-bo-and-bso-by-pontryagin-and-euler-classes",
  "thm-residue-evaluation-principal-value-real-poles",
  "thm-riemann-extension-across-a-coordinate-hyperplane",
  "thm-schwarz-pick-lemma-on-the-unit-disc",
  "thm-stone-resolvent-formula-for-spectral-projections",
  "thm-the-sphere-the-plane-and-the-disc-are-pairwise-nonbiholomorphic",
  "thm-thom-identity-for-stiefel-whitney-classes",
  "thm-uniqueness-of-stiefel-whitney-classes-from-normalization-naturality-and-sum",
  "thm-upper-envelope-theorem-for-plurisubharmonic-functions",
  "thm-vitali-porter-convergence-theorem",
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
