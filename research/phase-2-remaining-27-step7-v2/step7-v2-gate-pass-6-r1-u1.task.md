# Step 7 repair: gate-pass-6, round 1, unit 1

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/gate-pass-6-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-6-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

Step 7.9 permits no new items.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"phase-2-remaining-27",phase:"gate-pass-6",round:1,unit:"1",input_sha256:"c24766f2e0946388e740ddf569034f83396ecf360377c89f7e28e1cc25df1dd4",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

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
  "cex-a-compact-operator-can-have-nondense-range",
  "thm-rank-two-root-system-classification",
  "cex-a-cycle-graph-fails-finite-type-positive-definiteness",
  "def-natural-and-usual-augmented-brownian-filtrations",
  "thm-brownian-future-path-markov-property",
  "def-elementary-predictable-brownian-integrand",
  "def-germ-sigma-algebra-at-zero",
  "thm-blumenthal-zero-one-law",
  "cex-a-nonadapted-step-integrand-breaks-the-ito-isometry",
  "def-killing-dual-vector-of-a-root",
  "cor-opposite-root-spaces-pair-nondegenerately",
  "prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra",
  "lem-killing-length-of-a-root-is-nonzero",
  "def-coroot-of-a-lie-algebra-root",
  "thm-root-sl-two-triple",
  "thm-root-string-property",
  "cor-cartan-integers-are-integral",
  "cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root",
  "def-root-reflection-from-a-coroot",
  "thm-root-reflections-preserve-the-root-set",
  "thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional",
  "thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system",
  "prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra",
  "prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system",
  "def-partial-order-on-weights",
  "def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra",
  "def-highest-weight-vector-and-highest-weight-module",
  "def-integral-dominant-and-strictly-dominant-weights",
  "ex-verma-modules-for-sl-two",
  "cex-a-nondominant-integral-verma-quotient-that-is-infinite-dimensional",
  "def-hilbert-space",
  "cex-an-inner-product-space-need-not-be-complete",
  "lem-elementary-ito-integral-is-independent-of-the-step-representation",
  "def-ito-integral-of-an-elementary-predictable-process",
  "thm-density-of-elementary-predictable-processes-in-predictable-l2",
  "thm-ito-isometry-for-elementary-integrands",
  "def-ito-integral-for-square-integrable-predictable-processes",
  "def-locally-square-integrable-predictable-brownian-integrand",
  "lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative",
  "lem-cross-ito-isometry",
  "thm-ito-isometry-and-linearity-in-predictable-l2",
  "thm-ito-integral-process-has-a-continuous-martingale-version",
  "thm-doob-maximal-bound-for-the-ito-integral",
  "thm-localized-ito-integral",
  "def-continuous-brownian-ito-process",
  "lem-adapted-continuous-processes-are-progressively-measurable",
  "thm-stopping-an-ito-integral",
  "thm-quadratic-variation-of-an-ito-integral",
  "thm-quadratic-covariation-of-brownian-ito-processes",
  "thm-ito-formula-one-dimensional",
  "cor-exponential-brownian-martingale",
  "lem-brownian-transition-semigroup-property",
  "lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times",
  "thm-strong-markov-property-of-brownian-motion",
  "thm-brownian-reflection-principle",
  "cor-law-of-the-brownian-maximum",
  "thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity",
  "cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability",
  "cor-distribution-of-a-one-sided-brownian-hitting-time",
  "cor-one-dimensional-brownian-motion-hits-every-point-almost-surely",
  "ex-density-and-infinite-mean-of-a-one-sided-hitting-time",
  "cex-brownian-hitting-time-is-almost-surely-finite-but-not-integrable",
  "thm-projection-onto-a-nonempty-closed-convex-set",
  "thm-orthogonal-decomposition-by-a-closed-subspace",
  "lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums",
  "thm-bessel-inequality-for-an-arbitrary-orthonormal-family",
  "lem-only-countably-many-fourier-coefficients-are-nonzero",
  "thm-parseval-equivalences-for-a-complete-orthonormal-family",
  "thm-hilbert-space-fourier-expansion",
  "thm-spectral-theorem-for-compact-self-adjoint-operators",
  "lem-positive-square-root-of-a-compact-positive-operator",
  "def-absolute-value-and-singular-values-of-a-compact-operator",
  "thm-singular-value-decomposition-for-compact-operators",
  "def-trace-class-operator",
  "lem-nuclear-series-characterizes-trace-norm",
  "def-trace-of-a-trace-class-operator",
  "thm-hilbert-schmidt-norm-is-basis-independent",
  "thm-trace-is-absolutely-convergent-and-basis-independent",
  "ex-diagonal-schatten-class-criteria-on-ell-two",
  "cex-compact-does-not-imply-hilbert-schmidt",
  "cex-identity-is-compact-iff-the-space-is-finite-dimensional",
  "cex-compactness-is-not-preserved-by-strong-operator-limits",
  "cex-hilbert-schmidt-does-not-imply-trace-class",
  "cex-kelley-cofinite-set-is-not-closed",
  "cex-nearest-point-map-to-a-convex-set-need-not-be-linear",
  "cex-product-measure-ae-equality-is-not-pointwise-equality-of-integrands",
  "def-brownian-motion-started-at-x",
  "cex-strong-markov-fails-at-a-nonstopping-random-time",
  "thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part",
  "thm-every-element-of-a-compact-connected-lie-group-lies-in-a-maximal-torus",
  "thm-analytic-and-root-system-weyl-groups-agree",
  "def-root-datum-of-a-compact-connected-lie-group",
  "def-dominant-integrable-highest-weight-cyclic-module",
  "thm-triangular-decomposition-of-a-complex-semisimple-lie-algebra",
  "lem-highest-weight-modules-have-weights-below-the-top-weight",
  "def-serre-lie-algebra-of-a-finite-type-cartan-matrix",
  "prop-dimension-formula-from-roots",
  "thm-serre-presentation-theorem",
  "lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives",
  "lem-a-dominant-cyclic-highest-weight-module-has-a-unique-simple-quotient",
  "prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces",
  "lem-every-finite-dimensional-irreducible-representation-has-a-highest-weight-vector",
  "lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral",
  "prop-a-finite-dimensional-irreducible-module-is-generated-by-any-highest-weight-vector",
  "prop-dominant-integral-weights-are-nonnegative-combinations-of-fundamental-weights",
  "lem-simple-root-integrability-bounds-the-dominant-cyclic-module",
  "thm-finite-dimensionality-of-lambda-highest-weight-simple-modules-for-dominant-integral-lambda",
  "lem-integrability-relations-for-a-dominant-highest-weight",
  "prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional",
  "thm-simple-highest-weight-modules-are-classified-by-their-highest-weight",
  "thm-highest-weight-classification-of-finite-dimensional-irreducible-representations",
  "prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group",
  "thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix",
  "thm-existence-theorem-for-complex-semisimple-lie-algebras",
  "thm-isomorphism-theorem-for-complex-semisimple-lie-algebras",
  "thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems",
  "thm-compact-connected-lie-groups-are-classified-by-root-data",
  "prop-central-quotients-correspond-to-intermediate-character-lattices",
  "ex-character-lattices-of-su-two-and-so-three",
  "cex-su-two-and-so-three-share-a-root-system-but-are-not-isomorphic",
  "def-unbounded-linear-operator-domain-and-graph",
  "def-densely-defined-closed-and-closable-operator",
  "thm-closable-iff-adjoint-domain-is-dense",
  "cex-symmetric-need-not-be-self-adjoint",
  "prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram",
  "lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching",
  "prop-root-systems-of-the-classical-complex-lie-algebras",
  "ex-standard-and-dual-representations-of-sl-n-by-highest-weights",
  "ex-symmetric-powers-as-highest-weight-modules",
  "cex-the-full-weight-lattice-does-not-integrate-to-every-central-quotient-group",
  "cex-the-natural-filtration-need-not-be-right-continuous-before-augmentation",
  "cor-brownian-square-martingale",
  "cex-the-ordinary-chain-rule-fails-for-brownian-motion",
  "ex-rank-one-operator-adjoint-norm-and-trace",
  "thm-hilbert-schmidt-operators-are-compact",
  "thm-hilbert-schmidt-operators-form-a-two-sided-ideal",
  "thm-trace-class-iff-product-of-two-hilbert-schmidt-operators",
  "thm-trace-class-is-a-two-sided-banach-operator-ideal",
  "thm-cyclicity-of-the-trace",
  "cex-trace-of-products-is-not-cyclic-without-summability",
  "lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t",
  "lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two",
  "thm-brownian-filtration-martingale-representation",
  "cor-brownian-filtration-local-martingales-have-continuous-versions",
  "cor-brownian-law-of-the-iterated-logarithm-at-zero",
  "thm-brownian-zero-set-has-no-isolated-points",
  "cor-brownian-zero-set-is-uncountable",
  "lem-singular-values-equal-approximation-numbers",
  "cor-compact-operator-iff-approximation-numbers-tend-to-zero",
  "thm-cartan-killing-classification-of-complex-simple-lie-algebras",
  "cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams",
  "cor-critical-holder-boundary-at-zero-from-the-brownian-lil",
  "cor-deterministic-ito-integrals-are-gaussian",
  "lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces"
]


