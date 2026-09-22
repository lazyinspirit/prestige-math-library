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
label: step7-v2-gate-pass-4-r1-u2
covers: gate-pass-4:2
output: research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-4-r1-u2.json

# Step 7 repair: gate-pass-4, round 1, unit 2

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/gate-pass-4-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-4-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Read all cited suppliers and relevant consumers. Repair confirmed fatal defects fully. Identify all downstream consumers, including published items.

Examine every assigned downstream item, including published items. Assignment requires impact review, not an edit. Leave a sound consumer byte-for-byte unchanged and explain why it is unaffected. Repair only when the supplier change makes the consumer logically invalid or inaccurate, and then make the smallest logically sufficient change without stylistic or unrelated rewriting. Work supplier-before-consumer. Necessary published repairs are authorized by the owner for this impact wave. Reconcile only proof contracts, dependencies, page metadata and publication audit evidence actually invalidated by a necessary repair. Reference-only candidates require examination of the actual cited clause, not automatic transitive propagation; declare genuine missing load-bearing dependencies and report downstream effects of necessary repairs.

Return JSON {run:"phase-2-remaining-27",phase:"gate-pass-4",round:1,unit:"2",input_sha256:"a084455b75b57bc44f55b4f30c38bf11f366aa1fcf0762e4c2d69e3c0db55f97",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

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
  "thm-first-chern-class-classifies-complex-line-bundles",
  "prop-first-chern-class-of-tensor-dual-and-conjugate-lines",
  "prop-complexification-is-conjugation-invariant",
  "cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion",
  "def-pontryagin-classes-by-complexification",
  "def-tautological-degree-one-class-on-a-real-projective-bundle",
  "lem-tautological-degree-one-class-is-well-defined-and-fiber-generating",
  "thm-mod-two-real-projective-bundle-theorem",
  "def-stiefel-whitney-classes-from-the-projective-bundle-relation",
  "def-real-flag-bundle-and-stiefel-whitney-roots",
  "thm-naturality-of-stiefel-whitney-classes",
  "thm-real-splitting-principle-with-mod-two-injective-pullback",
  "thm-whitney-sum-formula-for-stiefel-whitney-classes",
  "prop-first-stiefel-whitney-class-classifies-orientability",
  "thm-mod-two-euler-class-is-the-top-stiefel-whitney-class",
  "thm-mod-two-reduction-of-chern-classes",
  "lem-integral-powers-of-the-complexified-universal-real-line",
  "cex-integral-total-pontryagin-multiplicativity-cannot-ignore-two-torsion",
  "def-field-of-p-adic-numbers",
  "thm-p-adic-completion-is-a-field",
  "thm-p-adic-completion-agrees-with-the-fraction-field-of-zp",
  "cor-zp-is-the-valuation-ring-of-qp",
  "cor-p-adic-simple-root-lifting",
  "thm-p-adic-newton-criterion",
  "cex-local-global-fails-for-a-cubic-curve",
  "cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane",
  "lem-residue-simple-pole",
  "cor-global-cauchy-formula-higher-derivatives",
  "thm-residue-pole-derivative-formula",
  "cex-misidentifying-a-double-pole-gives-the-wrong-residue",
  "cex-morera-without-continuity",
  "thm-minimum-modulus-principle",
  "cor-constant-boundary-modulus-forces-zero-or-constancy",
  "cex-nonconstant-blaschke-factor-has-constant-boundary-modulus",
  "cex-nonvanishing-holomorphic-function-with-no-holomorphic-logarithm",
  "cex-norm-need-not-equal-spectral-radius",
  "ex-stiefel-whitney-class-of-the-universal-real-line",
  "ex-total-stiefel-whitney-class-of-a-sum-of-universal-lines",
  "cex-odd-rank-euler-class-need-not-vanish-with-two-torsion-coefficients",
  "cor-principal-logarithm-is-holomorphic-on-the-slit-plane",
  "def-standard-residue-contours",
  "lem-large-semicircle-vanishing",
  "fs-large-arc-vanishing-follows-from-pointwise-decay-alone",
  "cex-one-over-z-defeats-the-large-semicircle-estimate",
  "cex-one-over-z-has-a-nonremovable-puncture-in-one-variable",
  "thm-frobenius-order-is-residue-degree",
  "ex-decomposition-inertia-in-a-quadratic-field",
  "ex-gaussian-and-eisenstein-frobenius",
  "cex-ramified-frobenius-has-no-canonical-lift",
  "def-rational-local-fields",
  "def-hilbert-symbol-over-a-rational-completion",
  "lem-equivalent-definitions-of-the-hilbert-symbol",
  "lem-hilbert-symbol-depends-only-on-square-classes",
  "thm-square-criterion-in-qp-for-odd-p",
  "thm-odd-p-hilbert-symbol-formula",
  "thm-real-hilbert-symbol-formula",
  "thm-square-criterion-in-q2",
  "thm-two-adic-hilbert-symbol-formula",
  "thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate",
  "lem-binary-quadratic-representation-via-hilbert-symbol",
  "cor-ternary-isotropy-via-hilbert-symbol",
  "thm-hilbert-reciprocity-over-the-rationals",
  "cor-ternary-hilbert-one-place-principle",
  "lem-global-square-class-approximation",
  "thm-hasse-minkowski-for-ternary-forms-over-q",
  "thm-local-isotropy-at-almost-all-primes",
  "thm-hasse-minkowski-over-the-rationals",
  "cex-rational-isotropy-is-not-integral-representation",
  "thm-third-mertens-theorem-for-primes",
  "cex-shoups-product-bound-does-not-determine-mertens-constant",
  "cex-sine-one-over-z-is-essential",
  "cex-smooth-nonanalytic-data-need-not-have-an-analytic-solution",
  "cex-spectrum-can-shrink-in-a-larger-banach-algebra",
  "thm-support-and-uniqueness-of-the-spectral-measure",
  "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
  "thm-unbounded-borel-functional-calculus",
  "ex-unbounded-multiplication-operator-and-its-domain",
  "lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group",
  "ex-position-operator-on-l-two-of-r",
  "cex-strongly-continuous-unitary-group-need-not-be-norm-continuous",
  "thm-circle-of-convergence-contains-a-singular-point",
  "thm-pringsheim-theorem",
  "cex-sum-z-to-n-over-n-squared-is-continuous-on-the-closed-disc-but-singular-at-one",
  "lem-cauchy-estimates-propagate-to-holomorphic-hulls",
  "thm-cartan-thullen-boundary-radius-theorem",
  "thm-cartan-thullen-theorem",
  "lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz",
  "thm-locally-bounded-separate-holomorphy",
  "thm-removability-of-a-puncture-in-several-complex-variables",
  "cex-the-bidisc-minus-the-origin-is-not-holomorphically-convex",
  "thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary",
  "cex-the-factorial-gap-series-has-the-unit-circle-as-a-natural-boundary",
  "thm-stone-one-parameter-unitary-groups",
  "ex-periodic-derivative-and-its-unitary-translation-group",
  "cex-the-minimal-derivative-is-symmetric-not-self-adjoint",
  "cor-maximum-principle-real-part-holomorphic-function",
  "thm-maximum-and-minimum-principles-for-plane-harmonic-functions",
  "cor-uniqueness-for-the-bounded-plane-dirichlet-problem",
  "thm-conformal-invariance-of-plane-harmonicity",
  "cor-holomorphic-mean-value-property",
  "thm-mean-value-property-for-plane-harmonic-functions",
  "lem-poisson-integrals-are-harmonic",
  "lem-poisson-kernel-properties-on-the-disc",
  "lem-poisson-kernel-is-a-boundary-approximate-identity",
  "thm-poisson-integral-solves-the-disc-dirichlet-problem",
  "thm-harmonic-majorant-characterization-of-plane-subharmonicity",
  "thm-c-two-characterization-of-plane-subharmonicity",
  "thm-plane-subharmonic-functions-are-locally-integrable",
  "lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity",
  "lem-gluing-lemma-for-plane-subharmonic-functions",
  "thm-converse-mean-value-property-for-plane-functions",
  "thm-poisson-representation-for-disc-harmonic-functions",
  "thm-harnack-inequality-on-a-disc",
  "thm-harnack-convergence-principle-for-plane-harmonic-functions",
  "thm-poisson-modification-preserves-subharmonicity-and-majorizes",
  "def-poisson-modification-of-a-subharmonic-function",
  "thm-upper-envelope-theorem-for-plane-subharmonic-functions",
  "thm-perron-envelope-is-harmonic",
  "thm-barrier-characterization-of-regular-boundary-points",
  "thm-perron-solves-dirichlet-on-regular-plane-domains",
  "cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum",
  "cex-the-punctured-disc-is-connected-but-not-simply-connected",
  "cor-spherical-complement-characterization-of-plane-simple-connectivity",
  "thm-winding-number-equals-circle-degree",
  "cor-winding-number-classifies-loops-in-the-punctured-plane",
  "cex-the-punctured-plane-separates-c-complement-from-spherical-complement",
  "ex-tautological-real-and-complex-lines-over-projective-space",
  "cex-the-tautological-line-over-rp-infinity-has-no-finite-rank-complement",
  "cex-vector-bundle-classification-without-numerability-can-fail",
  "cex-weak-boundary-inequality-does-not-suffice-for-rouche",
  "thm-hurwitz-injective-limit",
  "cex-z-over-n-shows-why-hurwitz-needs-the-or-constant-clause",
  "cex-zero-residue-does-not-force-a-removable-singularity",
  "thm-p-adic-digit-expansion",
  "cex-zp-is-not-the-integral-closure-of-z-in-qp",
  "cor-basel-sum-by-residues",
  "thm-euler-totient-summatory-estimate",
  "thm-coprime-pair-counting-asymptotic",
  "cor-asymptotic-density-of-coprime-pairs",
  "thm-divisor-sum-summatory-estimate",
  "cor-average-order-of-divisor-sum-function",
  "cor-average-order-of-euler-totient",
  "thm-area-theorem-for-exterior-univalent-functions",
  "cor-bieberbach-second-coefficient-bound",
  "cor-cauchy-theorem-convex-domain",
  "cor-complete-splitting-and-trivial-frobenius",
  "lem-bounded-strip-maximum-principle",
  "thm-hadamard-three-lines",
  "lem-riesz-thorin-bound-on-the-finite-simple-core",
  "cor-complex-interpolation-extensions-agree-on-intersections",
  "lem-determinant-classifies-loops-in-complex-general-linear-groups",
  "thm-hopf-line-calculation-of-k-zero-of-the-two-sphere",
  "lem-linear-clutching-splits-into-eigenbundles",
  "lem-negative-laurent-powers-are-cleared-by-hopf-line-stabilization",
  "thm-fundamental-product-theorem-for-complex-k-theory",
  "thm-complex-bott-periodicity",
  "cor-complex-k-theory-of-spheres",
  "cor-continuous-extension-from-a-dense-subset-r",
  "cor-convex-domains-are-domains-of-holomorphy",
  "thm-primitive-dirichlet-l-analytic-continuation",
  "thm-primitive-dirichlet-l-functional-equation",
  "cor-dirichlet-l-root-number-unit-modulus",
  "cor-dirichlet-l-trivial-zeros",
  "cor-euler-prime-product-tends-to-zero",
  "thm-decomposition-and-inertia-in-towers",
  "cor-frobenius-compatibility-in-finite-towers",
  "cor-gamma-one-half-value",
  "cor-goursat-rectangle-theorem",
  "lem-holomorphic-dependence-of-slice-laurent-coefficients",
  "lem-vanishing-of-negative-laurent-coefficients-on-a-hartogs-figure",
  "thm-hartogs-figure-extension",
  "cor-hartogs-figure-obstruction-to-domain-of-holomorphy",
  "cor-holomorphic-function-ring-integral-domain",
  "cor-holomorphic-functional-calculus-in-the-wiener-algebra",
  "cor-holomorphic-functions-on-a-domain-form-an-integral-domain",
  "cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime",
  "cor-liouville-theorem-for-plane-harmonic-functions",
  "cor-liouville-theorem-in-several-complex-variables",
  "lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular",
  "lem-stability-of-slice-zero-count-under-holomorphic-parameters",
  "thm-weighted-argument-principle",
  "lem-holomorphic-power-sums-of-slice-zeros",
  "lem-newton-identities-for-slice-roots",
  "thm-weierstrass-preparation-theorem",
  "thm-riemann-extension-across-hypersurface-zero-sets",
  "cor-locally-bounded-meromorphic-poles-are-removable",
  "cor-locally-uniformly-convergent-holomorphic-series",
  "thm-log-modulus-of-a-holomorphic-function-is-subharmonic",
  "cor-log-modulus-of-a-holomorphic-function-is-plurisubharmonic",
  "cor-logarithmic-derivative-of-a-normally-convergent-product",
  "cor-maximal-ideal-and-residue-field-of-zp",
  "cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc",
  "thm-zero-divisor-theorem-on-plane-domains",
  "cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients",
  "cor-meromorphic-functions-on-a-domain-form-a-field",
  "cor-meromorphic-functions-on-the-plane-are-entire-quotients",
  "thm-chordal-arzela-ascoli-criterion-for-meromorphic-families",
  "thm-montel-caratheodory-theorem",
  "lem-two-omitted-values-rule-out-an-essential-singularity",
  "thm-great-picard-theorem",
  "cor-meromorphic-great-picard-theorem",
  "thm-metrizable-cech-complete-spaces-are-completely-metrizable",
  "cor-metrizable-cech-complete-iff-completely-metrizable",
  "cor-modulus-powers-of-holomorphic-functions-are-subharmonic",
  "cor-no-isolated-holomorphic-singularities-in-several-complex-variables",
  "cor-nonconstant-entire-function-has-dense-image",
  "cor-nonintegral-entire-order-bounds-canonical-genus",
  "cor-nth-prime-asymptotic",
  "lem-p-adic-balls-are-clopen",
  "cor-p-adic-field-is-locally-compact-and-totally-disconnected",
  "thm-mittag-leffler-expansion-of-pi-cotangent",
  "cor-partial-fraction-expansion-of-pi-squared-cosecant-squared",
  "thm-koebe-one-quarter-theorem",
  "cor-quarter-disc-inclusion-for-univalent-functions",
  "cor-residue-quotient-simple-zero",
  "cor-residue-theorem-circle",
  "cor-runge-polynomial-approximation",
  "lem-local-subharmonic-peak-function-globalizes",
  "lem-weak-local-subharmonic-peak-function-implies-regularity",
  "lem-boundary-point-whose-complementary-component-contains-another-point-is-regular",
  "cor-simply-connected-proper-plane-domains-are-regular",
  "thm-end-germ-of-path-continuation-is-independent-of-the-chain",
  "thm-uniqueness-of-analytic-continuation",
  "thm-monodromy-theorem",
  "cor-single-valued-continuation-on-simply-connected-domains",
  "cor-uniqueness-of-the-normalized-riemann-map",
  "thm-continuous-functional-calculus-under-resolvent-convergence",
  "cor-unitary-groups-converge-under-strong-resolvent-convergence",
  "cor-zeta-zero-count-near-the-one-line",
  "thm-positive-square-root",
  "def-absolute-value-of-a-bounded-operator",
  "def-algebraic-unitization-of-a-star-algebra",
  "def-approximate-unit-and-proper-c-star-morphism",
  "thm-oriented-real-vector-bundles-are-classified-by-bso",
  "def-characteristic-class-as-a-universal-natural-bundle-class",
  "def-complete-analytic-function",
  "rem-holomorphic-logarithm-and-principal-power-dictionary",
  "def-complex-power-from-holomorphic-logarithm-branch",
  "lem-canonical-banach-complexification-of-a-real-banach-space",
  "def-complexification-and-spectrum-of-a-real-operator",
  "def-cyclic-vector-and-cyclic-normal-operator",
  "def-discrete-and-essential-spectrum-of-a-self-adjoint-operator",
  "thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero",
  "thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory",
  "def-graded-chern-character-by-suspension-and-bott-periodicity",
  "lem-admissible-cycle-around-a-compact-plane-set",
  "def-holomorphic-functional-calculus",
  "def-jacobson-radical-and-semisimple-commutative-banach-algebra",
  "def-principal-part-at-an-isolated-point",
  "def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces",
  "def-relative-compactness-with-respect-to-an-operator",
  "def-riemann-surface-of-a-complete-analytic-function",
  "lem-banach-valued-cauchy-integral-vanishes",
  "lem-holomorphic-functional-calculus-is-contour-independent",
  "thm-holomorphic-functional-calculus-homomorphism",
  "def-riesz-spectral-projection",
  "def-runge-approximation-on-a-plane-domain",
  "lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces",
  "thm-cyclic-spectral-representation",
  "thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem",
  "def-spectral-multiplicity-function-in-the-separable-case",
  "ex-a-convex-domain-is-a-domain-of-holomorphy",
  "ex-a-cubic-image-curve-has-winding-number-three-about-the-origin",
  "ex-a-dumbbell-domain-is-simply-connected-but-not-star-shaped",
  "ex-a-shear-makes-z-one-z-two-regular-in-z-two",
  "thm-exterior-disc-and-exterior-cone-points-are-regular",
  "ex-a-square-corner-has-an-explicit-barrier",
  "ex-ahlfors-proof-yields-the-explicit-bloch-bound-sqrt-three-over-four",
  "ex-basic-plane-subharmonic-functions",
  "ex-beta-one-half-one-half-equals-pi",
  "ex-bidisc-minus-the-origin-is-not-a-domain-of-holomorphy",
  "thm-minimal-c-star-unitization",
  "thm-character-space-of-the-unitization-is-one-point-compactification",
  "thm-nonunital-commutative-gelfand-naimark",
  "ex-c-zero-of-a-locally-compact-space",
  "ex-canonical-product-for-zeros-at-the-squares",
  "ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum",
  "ex-cauchy-estimates-computed-on-a-bidisc",
  "ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc",
  "ex-cauchy-integral-formula-computed-on-a-bidisc",
  "ex-cauchy-integral-formula-cosine-third-order-pole",
  "ex-cauchy-integral-formula-exponential-over-z-minus-one",
  "ex-cauchy-kovalevskaya-for-a-second-order-normal-form",
  "ex-cauchy-kovalevskaya-for-an-analytic-transport-equation",
  "ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space",
  "lem-universal-complex-flag-bundle-is-bt-n",
  "ex-chern-classes-of-a-sum-of-universal-complex-lines",
  "ex-complex-k-ahss-for-a-closed-oriented-surface",
  "ex-complex-k-ahss-for-complex-projective-space",
  "ex-complex-k-ahss-for-real-projective-space",
  "ex-complex-k-ring-of-the-two-sphere",
  "ex-k-theory-of-a-point-and-the-empty-space",
  "ex-complex-k-theory-of-even-and-odd-spheres",
  "ex-complex-k-ring-of-complex-projective-space",
  "ex-complex-line-bundles-over-the-two-sphere-by-clutching-degree",
  "ex-continuous-argument-along-a-spiralling-contour",
  "ex-cotangent-expansion-computes-sum-of-one-over-n-squared-plus-a-squared",
  "ex-frobenius-in-a-small-cyclotomic-field",
  "ex-decomposition-groups-in-a-tower",
  "ex-diagonal-extraction-on-a-disc-for-montels-theorem",
  "ex-dirichlet-density-of-primes-in-a-small-progression",
  "ex-dirichlet-series-abscissa-boundaries",
  "thm-disc-automorphisms-are-rotated-blaschke-factors",
  "ex-disc-automorphism-swapping-two-points",
  "ex-index-of-the-boundary-cycle-of-a-round-annulus",
  "ex-dixon-gluing-traced-on-an-annulus-cycle",
  "ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc",
  "ex-endpoint-interpolation-for-a-finite-matrix",
  "ex-euler-class-of-the-universal-oriented-two-plane",
  "thm-special-values-of-riemann-zeta-at-integers",
  "ex-euler-product-numerically-approximates-zeta-at-two",
  "ex-even-and-odd-character-theta-kernels"
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
