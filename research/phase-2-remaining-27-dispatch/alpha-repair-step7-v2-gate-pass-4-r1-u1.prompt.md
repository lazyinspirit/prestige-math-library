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
label: step7-v2-gate-pass-4-r1-u1
covers: gate-pass-4:1
output: research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-4-r1-u1.json

# Step 7 repair: gate-pass-4, round 1, unit 1

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/gate-pass-4-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-4-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Read all cited suppliers and relevant consumers. Repair confirmed fatal defects fully. Identify all downstream consumers, including published items.

Examine every assigned downstream item, including published items. Assignment requires impact review, not an edit. Leave a sound consumer byte-for-byte unchanged and explain why it is unaffected. Repair only when the supplier change makes the consumer logically invalid or inaccurate, and then make the smallest logically sufficient change without stylistic or unrelated rewriting. Work supplier-before-consumer. Necessary published repairs are authorized by the owner for this impact wave. Reconcile only proof contracts, dependencies, page metadata and publication audit evidence actually invalidated by a necessary repair. Reference-only candidates require examination of the actual cited clause, not automatic transitive propagation; declare genuine missing load-bearing dependencies and report downstream effects of necessary repairs.

Return JSON {run:"phase-2-remaining-27",phase:"gate-pass-4",round:1,unit:"1",input_sha256:"a084455b75b57bc44f55b4f30c38bf11f366aa1fcf0762e4c2d69e3c0db55f97",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

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
  "def-complete-metric-space",
  "def-metric-completion",
  "lem-metric-convergent-implies-cauchy",
  "thm-uniform-continuity-preserves-cauchy",
  "cex-continuous-map-destroying-cauchyness",
  "def-metric-uniform-continuity",
  "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
  "def-uniform-continuity-real",
  "def-cauchy-in-metric",
  "cex-cantor-intersection-needs-vanishing-diameters",
  "lem-metric-cauchy-bounded",
  "lem-goursat-nested-triangle-selection",
  "thm-goursat-triangle-theorem",
  "thm-goursat-theorem-one-exceptional-point",
  "thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain",
  "thm-cauchy-integral-formula-circle",
  "thm-cauchy-integral-formula-higher-derivatives",
  "def-taylor-series-holomorphic-function",
  "def-order-of-zero-holomorphic-function",
  "thm-taylor-expansion-holomorphic-function",
  "thm-zero-order-factorization-holomorphic-function",
  "lem-locally-zero-locus-clopen-holomorphic-function",
  "thm-identity-theorem-holomorphic-functions",
  "thm-isolated-zeros-holomorphic-function",
  "def-local-degree-holomorphic-map",
  "thm-holomorphic-primitive-on-star-shaped-domain",
  "lem-local-holomorphic-logarithm-nonvanishing-function-on-disc",
  "cor-local-holomorphic-roots-nonvanishing-function",
  "cor-holomorphic-functions-are-real-analytic-and-smooth",
  "lem-nonzero-derivative-gives-local-biholomorphism",
  "thm-local-normal-form-holomorphic-map",
  "cor-local-multiplicity-count-holomorphic-map",
  "thm-open-mapping-theorem-holomorphic-functions",
  "lem-logarithm-branch-for-a-linear-factor-on-a-disc",
  "thm-continuous-logarithms-exist-along-a-contour",
  "def-continuous-argument-and-holomorphic-logarithm-branches",
  "thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment",
  "thm-winding-number-is-integer",
  "prop-winding-number-under-reversal-and-concatenation",
  "thm-winding-number-chain-laws",
  "thm-winding-number-of-a-cycle-is-integer",
  "def-null-homologous-and-homologous-complex-cycles",
  "cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace",
  "thm-morera-triangle-theorem",
  "lem-continuous-function-holomorphic-off-a-point-is-holomorphic",
  "lem-holomorphic-difference-quotient-segment-formula",
  "lem-holomorphic-difference-quotient-is-jointly-continuous",
  "lem-holomorphic-difference-quotient-is-holomorphic-in-each-variable",
  "lem-cauchy-estimates-on-concentric-subdiscs",
  "thm-weierstrass-convergence-holomorphic-functions",
  "thm-contour-parameter-integrals-are-holomorphic",
  "lem-dixon-entire-gluing",
  "cor-cauchy-inequalities",
  "thm-liouville-bounded-entire-function",
  "thm-global-cauchy-integral-formula-homology",
  "cor-global-cauchy-theorem-homology",
  "thm-winding-number-locally-constant",
  "thm-winding-number-zero-unbounded-component",
  "thm-winding-number-circle-traversed-k-times",
  "thm-laurent-expansion-annulus",
  "thm-laurent-coefficient-formula-and-uniqueness",
  "thm-laurent-regular-principal-decomposition",
  "thm-removable-singularity-characterizations",
  "cex-a-biholomorphism-between-the-disc-and-the-punctured-disc-cannot-exist",
  "thm-power-series-define-holomorphic-functions-in-several-variables",
  "def-real-analytic-germ-in-several-variables",
  "lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation",
  "lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form",
  "thm-cauchy-integral-formula-on-a-polydisc",
  "thm-power-series-expansion-in-several-complex-variables",
  "thm-osgood-lemma-in-several-complex-variables",
  "cor-holomorphic-functions-in-several-variables-are-smooth",
  "cor-uniqueness-of-multivariable-power-series-coefficients",
  "thm-holomorphic-inverse-function-theorem-several-variables",
  "thm-real-analytic-inverse-and-implicit-function-theorems",
  "lem-analytic-noncharacteristic-hypersurfaces-flatten-to-a-coordinate-hyperplane",
  "thm-cauchy-estimates-on-a-polydisc",
  "lem-an-analytic-germ-has-a-rational-geometric-majorant",
  "lem-analytic-ordinary-differential-systems-by-coefficient-majorants",
  "lem-normal-form-pde-determines-a-unique-formal-taylor-series",
  "lem-a-positive-majorant-system-dominates-the-formal-cauchy-recursion",
  "lem-the-goursat-majorant-equation-has-a-convergent-positive-power-series-solution",
  "thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form",
  "lem-higher-order-analytic-normal-form-reduces-to-a-first-order-system",
  "thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem",
  "cex-a-characteristic-analytic-surface-does-not-determine-the-normal-jet",
  "thm-identity-theorem-in-several-complex-variables",
  "cex-a-domain-of-holomorphy-need-not-be-convex",
  "thm-pole-characterizations",
  "thm-isolated-singularity-trichotomy",
  "thm-casorati-weierstrass",
  "cex-exp-one-over-z-is-essential-and-omits-zero",
  "cex-a-laurent-series-on-a-punctured-disc-can-have-infinitely-many-negative-terms",
  "def-homologically-simply-connected-complex-domain",
  "thm-primitives-homologically-simply-connected-domains",
  "thm-holomorphic-logarithms-homologically-simply-connected-domains",
  "cor-holomorphic-roots-homologically-simply-connected-domains",
  "prop-star-shaped-plane-domains-are-homologically-simply-connected",
  "lem-holomorphic-logarithms-for-two-omitted-values",
  "def-admissible-cycle-for-residue-theorem",
  "def-weighted-zero-and-pole-counts-on-cycle",
  "lem-finiteness-support-residue-sum",
  "lem-logarithmic-derivative-order-residue",
  "cor-contour-integrals-homologous-cycles",
  "cor-laurent-coefficients-independent-of-radius",
  "def-residue-isolated-singularity",
  "cor-residue-contour-integral-formula",
  "thm-residue-theorem-null-homologous-cycle",
  "thm-argument-principle-null-homologous-cycle",
  "cor-argument-principle-counts-preimages",
  "cor-winding-number-is-the-normalized-argument-increment",
  "thm-argument-principle-as-image-winding-number",
  "thm-rouche-theorem",
  "thm-local-maximum-modulus-principle",
  "thm-maximum-modulus-principle-with-boundary-and-infinity-control",
  "thm-unit-disc-schwarz-lemma-with-rigidity",
  "lem-quantitative-univalence-from-controlled-derivative",
  "thm-bloch-theorem",
  "thm-schottky-theorem",
  "thm-little-picard-theorem",
  "cor-meromorphic-little-picard-theorem",
  "cex-a-meromorphic-function-on-the-plane-can-omit-two-sphere-values",
  "def-euler-beta-function",
  "thm-holomorphic-parameter-riemann-integral",
  "thm-euler-gamma-function-is-holomorphic",
  "thm-complex-gamma-restricts-to-the-real-gamma-function",
  "thm-beta-gamma-identity",
  "thm-euler-limit-formula-for-gamma",
  "thm-gamma-weierstrass-product",
  "cor-gamma-function-has-no-zeros",
  "thm-riemann-zeta-meromorphic-continuation",
  "thm-principal-dirichlet-l-factorization",
  "thm-dirichlet-series-absolute-half-plane-holomorphy",
  "thm-dirichlet-series-half-plane-convergence",
  "thm-landau-dirichlet-series",
  "lem-positive-log-dirichlet-series-nonvanishing",
  "thm-product-dirichlet-l-nonvanishing-line-one",
  "lem-nonreal-dirichlet-l-nonzero-at-one",
  "lem-real-dirichlet-l-nonzero-at-one",
  "thm-dirichlet-l-nonzero-at-one",
  "thm-mertens-primes-arithmetic-progressions",
  "thm-dirichlet-primes-arithmetic-progressions",
  "cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion",
  "def-c-star-algebra",
  "def-unital-banach-algebra",
  "def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra",
  "def-spectrum-and-resolvent-set-in-a-banach-algebra",
  "thm-spectrum-is-nonempty-compact-and-norm-bounded",
  "def-spectral-radius",
  "thm-fundamental-theorem-of-algebra-liouville-proof",
  "thm-polynomial-spectral-mapping",
  "thm-spectral-radius-formula",
  "lem-c-star-spectral-radius-equals-norm-for-normal-elements",
  "thm-gelfand-mazur",
  "thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra",
  "thm-maximal-ideal-space-is-compact-hausdorff",
  "thm-spectrum-as-character-values",
  "def-gelfand-transform",
  "thm-gelfand-transform-is-a-contractive-unital-homomorphism",
  "thm-commutative-gelfand-naimark",
  "lem-spectral-permanence-for-unital-c-star-subalgebras",
  "lem-character-space-of-generated-normal-algebra-is-operator-spectrum",
  "cor-normal-operator-norm-equals-spectral-radius",
  "lem-polynomial-calculus-is-isometric-for-self-adjoint-operators",
  "thm-continuous-functional-calculus-for-bounded-self-adjoint-operators",
  "thm-continuous-functional-calculus-for-bounded-normal-operators",
  "thm-spectral-mapping-for-continuous-normal-functional-calculus",
  "thm-continuous-functional-calculus-properties",
  "lem-continuous-functional-calculus-produces-a-regular-pvm",
  "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
  "def-borel-functional-calculus-for-a-bounded-normal-operator",
  "thm-borel-functional-calculus-for-bounded-normal-operators",
  "thm-self-adjoint-norm-and-spectrum-extrema",
  "cor-spectral-projections-and-resolution-of-the-identity",
  "ex-pvm-of-a-multiplication-operator",
  "cex-a-normal-operator-need-not-have-any-eigenvectors",
  "cor-normal-operator-with-zero-spectrum-is-zero",
  "cex-a-quasinilpotent-operator-need-not-be-zero",
  "lem-connected-spherical-complement-implies-null-homology",
  "thm-holomorphic-inverse-function-theorem",
  "cor-injective-holomorphic-derivative-nonzero",
  "cor-derivative-operators-are-continuous-for-local-uniform-convergence",
  "lem-riemann-map-extremal-family-is-nonempty",
  "lem-riemann-map-extremal-derivatives-are-positive-and-bounded",
  "cor-holomorphic-functions-are-closed-for-local-uniform-convergence",
  "lem-locally-bounded-holomorphic-families-are-locally-equicontinuous",
  "thm-montel-theorem-for-holomorphic-functions",
  "lem-riemann-map-extremal-derivative-is-attained",
  "cor-local-zero-count-via-rouche",
  "thm-continuity-of-zeros-locally-uniform-convergence",
  "thm-hurwitz-zero-free-limit",
  "lem-nonconstant-local-uniform-limits-of-univalent-functions-are-univalent",
  "lem-riemann-map-extremizer-is-univalent",
  "lem-riemann-map-extremizer-is-surjective",
  "thm-riemann-mapping-theorem",
  "lem-null-homology-gives-the-plane-or-disc-alternative",
  "lem-null-homology-implies-connected-spherical-complement",
  "cor-cauchy-theorem-star-shaped-domain",
  "thm-homotopy-invariance-of-holomorphic-line-integrals",
  "cor-cauchy-theorem-for-null-homotopic-loops",
  "thm-homological-simple-connectivity-equivalences",
  "lem-trivial-fundamental-group-implies-null-homology-for-plane-domains",
  "rem-analytic-equivalences-from-global-cauchy-theory",
  "thm-harmonic-conjugate-on-homologically-simply-connected-domains",
  "thm-null-homology-is-equivalent-to-global-harmonic-conjugates",
  "thm-grand-equivalence-for-simply-connected-plane-domains",
  "cex-a-round-annulus-is-connected-but-not-simply-connected",
  "ex-lipschitz-extension-from-the-rationals",
  "thm-uniformly-continuous-extension-from-dense",
  "thm-metric-completion-unique",
  "ex-completion-of-q-is-r",
  "thm-metric-completion-exists",
  "lem-completion-operations-are-well-defined",
  "thm-metric-completion-carries-a-unique-banach-space-structure",
  "thm-completion-universal-property-for-bounded-linear-maps",
  "cor-normed-space-completions-are-uniquely-linearly-isometric",
  "ex-finite-sequences-c00-with-standard-norms",
  "cex-an-incomplete-subspace-need-not-be-closed",
  "thm-local-holomorphic-potential-for-harmonic-functions",
  "thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions",
  "cex-an-unbounded-harmonic-function-need-not-extend-across-a-puncture",
  "thm-completed-riemann-zeta-functional-equation",
  "def-riemann-xi-function",
  "def-riemann-zeta-zero-counting",
  "thm-boundary-maximum-modulus-principle",
  "thm-normal-convergence-of-holomorphic-products",
  "thm-canonical-product-convergence-from-exponent-sum",
  "cor-cauchy-estimates-taylor-coefficients",
  "thm-entire-polynomial-growth-is-polynomial",
  "thm-weierstrass-product-theorem-on-the-complex-plane",
  "thm-weierstrass-factorization-for-entire-functions",
  "thm-jensen-formula-on-a-disc",
  "cor-jensen-zero-counting-bound",
  "thm-zero-exponent-is-bounded-by-entire-order",
  "thm-hadamard-factorization-for-finite-order-entire-functions",
  "thm-stirling-formula-gamma",
  "thm-riemann-xi-is-entire-of-order-one",
  "thm-sine-has-its-weierstrass-product",
  "thm-euler-reflection-formula",
  "thm-gauss-multiplication-formula",
  "thm-legendre-duplication-formula",
  "thm-riemann-zeta-functional-equation",
  "thm-trivial-zeros-and-critical-strip",
  "thm-hadamard-product-for-riemann-xi",
  "thm-riemann-von-mangoldt-zero-counting",
  "cor-zeta-zero-count-unit-interval",
  "lem-local-logarithmic-derivative-zeta",
  "lem-logarithmic-derivative-zeta-left-half-plane",
  "lem-von-mangoldt-explicit-formula-residues",
  "thm-von-mangoldt-explicit-formula-smoothed",
  "thm-von-mangoldt-explicit-formula-truncated",
  "cex-an-unordered-infinite-zero-sum-is-not-a-formula",
  "cex-analytic-elliptic-cauchy-solutions-lack-smooth-continuous-dependence",
  "rem-cauchy-kovalevskaya-is-an-analytic-not-smooth-well-posedness-theorem",
  "cex-analytic-heat-data-can-have-divergent-time-taylor-series",
  "cex-annulus-is-connected-but-not-homologically-simply-connected",
  "lem-grid-cycle-for-runge-approximation",
  "lem-cauchy-riemann-sums-give-rational-approximation",
  "thm-runge-approximation-with-prescribed-poles",
  "cex-annulus-needs-a-pole-in-each-bounded-complementary-component",
  "cex-boundary-accumulation-does-not-force-holomorphic-identity",
  "cex-boundary-convergent-power-series-no-larger-holomorphic-disc",
  "rem-biholomorphisms-are-conformal-with-holomorphic-inverse",
  "cex-complex-conjugation-preserves-unoriented-angles-but-is-not-conformal",
  "cex-conditionally-convergent-euler-product-rearrangement",
  "ex-functional-calculus-for-a-multiplication-operator",
  "cex-continuous-calculus-does-not-contain-discontinuous-spectral-projections",
  "ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function",
  "cex-continuous-functional-calculus-cannot-produce-every-spectral-projection",
  "lem-zeta-reciprocal-zero-sum-bound",
  "lem-zeta-logarithmic-derivative-zero-bound",
  "thm-riemann-zeta-classical-zero-free-region",
  "lem-zeta-explicit-formula-zero-free-error-balance",
  "lem-zeta-horizontal-logarithmic-derivative-comparison",
  "thm-zeta-bounds-in-classical-zero-free-region",
  "thm-chebyshev-psi-prime-number-theorem-error",
  "cor-chebyshev-theta-prime-number-theorem-error",
  "thm-prime-number-theorem-logarithmic-integral",
  "cor-prime-number-theorem",
  "thm-primes-residue-class-dirichlet-density",
  "cex-dirichlet-density-alone-does-not-give-a-counting-asymptotic",
  "cex-dirichlet-density-does-not-mean-integer-natural-density",
  "thm-chordal-limit-theorem-for-meromorphic-functions",
  "cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane",
  "cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle",
  "thm-meromorphic-functions-riemann-sphere-are-rational",
  "cex-e-to-z-is-meromorphic-on-c-but-not-on-the-riemann-sphere",
  "def-degree-rational-map-riemann-sphere",
  "thm-rational-map-fibre-count-degree",
  "thm-biholomorphic-self-maps-riemann-sphere-are-mobius",
  "cor-entire-biholomorphisms-are-affine",
  "thm-automorphisms-punctured-plane",
  "cex-exponential-is-a-holomorphic-surjection-of-c-onto-c-times-not-an-automorphism",
  "cex-flat-smooth-function-has-no-holomorphic-extension",
  "thm-completion-of-an-absolutely-valued-field",
  "thm-number-field-places-classification",
  "def-completion-of-a-number-field-at-a-prime",
  "lem-number-field-completions-as-local-polynomial-factors",
  "thm-decomposition-group-and-completion",
  "lem-lifting-residue-frobenius-by-galois-conjugates",
  "thm-decomposition-inertia-exact-sequence",
  "cor-orders-of-decomposition-and-inertia-groups",
  "lem-good-polynomial-reduction-kills-inertia",
  "def-arithmetic-frobenius-coset",
  "thm-unramified-frobenius-element-exists-uniquely",
  "thm-frobenius-elements-above-a-prime-are-conjugate",
  "thm-frobenius-cycle-type-and-prime-splitting",
  "cex-frobenius-cycle-type-needs-good-reduction",
  "cex-gelfand-transform-of-a-banach-algebra-need-not-be-isometric",
  "cex-holomorphic-zero-set-in-two-variables-is-neither-isolated-nor-bounded",
  "lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely",
  "thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians"
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
