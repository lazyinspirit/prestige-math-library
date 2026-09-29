# Step 7 repair: impact-repeat, round 1, unit 2

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/impact-repeat-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/step7-v2-impact-repeat-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"frontier-36-complete",phase:"impact-repeat",round:1,unit:"2",input_sha256:"65f89a14b981ee07080e2cc7983fd7c0ebd4ffc5bce2e3682d9fa9d19c73a950",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-36-complete --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-ltwo-fourier-multiplier-bound",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Corrected the inaccurate exclusive Countable Choice attribution in A1/6.1 and the contract nonempty-choice boundary. F6, F7 and the Lebesgue-measure part of F8 explicitly require the already-assumed axiom. The exported Statement, norm identity and dependency list are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-conjugate-points-are-critical-values-of-the-exponential-map-along-the-geodesic",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "A1 omitted the two AC-omega suppliers in F9, used for smooth local inversion in 5.1 and initial velocity in 6.1. The Statement already assumes AC-omega and both dependencies are declared, so the kernel/Jacobi-space isomorphism and inverse-function argument remain valid. Added the missing F9 inheritance to A1.",
    "evidence": "research/frontier-36-complete-step7-v2/step7-v2-repeat-r1-u14.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-cut-locus-of-a-point-is-closed",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The audit radius 1/n is undefined at n=0 under the library convention. Replaced it by 1/(n+1), also in the owning contract endpoint row. This is nonfatal because step 5.1 already invokes the correct sequential-closure theorem; its proof explicitly uses positive radii 1/(n+1). No main inference or hypothesis changes.",
    "evidence": "research/frontier-36-complete-step7-v2/step7-v2-repeat-r1-u14.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The title omits the base-point exclusion: on the real line Cut(0) is empty but distance |x| has no derivative at zero. The actual Statement restricts to 0<t<c_p(v), and F1/F2 and step 4.1 explicitly exclude p, so its formula and proof are sound. Corrected only the title to say off the base point and the cut locus; the stable ID is retained.",
    "evidence": "research/frontier-36-complete-step7-v2/step7-v2-repeat-r1-u14.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface",
    "outcome": "false_positive",
    "reason": "The rejection overlooks the explicit proof citation in F2. The planar supplier proof 2.2 constructs crosscuts entering strict free sectors; 5.1 chooses a hub on a straight crosscut; 6.1 successively cuts off triangles with one old boundary edge each; 7.1 verifies full-edge/vertex intersections. These arguments apply to any marked Jordan face, including new subdivision marks with angle pi, and justify theorem 4.1 and 5.1 without strengthening the supplier Statement. No item or contract edit is necessary."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-hyperbolic-geodesic-triangle-area-defect",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "The local text invoked a disk-region hypothesis at 2.2 without defining compact geodesic triangle to supply it. Compactness by itself permits three collinear vertices with zero area and cannot imply the strict inequality. The Example now explicitly uses a compact regular disk with three embedded geodesic sides, ordinary non-antipodal corners and the induced orientation. This supplies exactly F4's premises and excludes the degenerate triples, while preserving the intended area-defect claim and the existing contract. The defect is a missing logical premise, not a wrong citation or curvature computation."
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "updates": [],
    "reason": "No published item was repaired or found defective during this assigned review."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-sl2-flag-variety-line-bundles",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "The original statement identified the root-parameter charts with the standard line coordinates without fixing the root homomorphism. Conjugation by diag(2,1/2) satisfies the cited interface with e_alpha=4E12 and f_alpha=E21/4, but sends the lower chart to C(e1+(z/4)e2), so t=z and the displayed matrix equalities are false for allowed data. This is a logical normalization defect, not a defect in the root-homomorphism supplier. The repair explicitly chooses E12, E21, diag(1,-1) and the identity homomorphism, whose brackets and matrices verify the supplier hypotheses; it preserves all three intended conclusions.",
    "uncertain": false,
    "source_urls": [
      "https://people.math.harvard.edu/~lurie/papers/bwb.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-measurable-and-decomposable-operator-fields",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Boundary example omitted index zero; specified zero fundamental vectors for every natural index except 1, restoring exactly its scalar matrix-coefficient assertion. No exported Definition changed."
  },
  {
    "ledger": "defect-ledger",
    "id": "thm-alphabet-reduction-step",
    "model": "gpt-6-sol",
    "context_sha256": "f37fc258410a7de7db60c1917463a56523e22d68eb5dfe7aa5815a07ee57f875",
    "outcome": "false_positive",
    "reason": "The general assignment-tester interface permits arity zero, but H is built from the specific deterministic tester of thm-two-piece-pcp-of-proximity, not an arbitrary tester. Its proof steps 1.2 and 2.3 explicitly list BLR triples (arity 3), tensor six-tuples (6), equation pairs (2), corrected slice quadruples (4), and raw-bit comparison triples (3). Step 3.2 pads by duplicating rows, without adding empty tuples. The composition definition maps every tuple coordinatewise and retains repetitions, including loops, so each resulting constraint still has arity between 2 and 6. Thus the conversion lemma's 1 <= k_i <= 6 premise holds. For an edgeless input there are no constraints and the premise is vacuous. The claimed zero-arity gap is a false positive against this concrete construction."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-hom-pairing-over-a-nonsplit-field",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "F3 omitted nontriviality in its division-ring definition. Added 1 != 0, matching def-division-ring V1. The actual C example already satisfies that axiom through F1 and the field clause of F3, so its claims and calculation remain valid."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-riemann-surface-and-holomorphic-atlas",
    "outcome": "false_positive",
    "reason": "The rejection omits the explicit sentence \"The one-dimensional complex structure is the additional datum $\\mathcal A$.\" Thus X carries specified structure, not merely an existential atlas. The maximal-atlas paragraph fixes A and proves uniqueness only among atlases extending A; its final union criterion distinguishes the identity and conjugation atlases on C, whose transition is not holomorphic. These are different structures on the same underlying space, not a contradiction. The contract nonempty-choice row likewise says space together with an atlas. No edit is mathematically necessary.",
    "status": "false-positive-no-repair",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-meromorphic-differential-on-a-riemann-surface",
    "outcome": "confirmed_nonfatal",
    "reason": "F5 incorrectly attributes a primitive on an entire prescribed disc to a corollary whose Statement guarantees a primitive on some neighbourhood of the point. This is a nonfatal citation-scope defect: step 4.1 already asks only for a local primitive of the regular Laurent part H, which has a convergent power series at 0. Narrowed F5 to that exact analytic-at-a-point/local-neighbourhood assertion. The proved order and residue invariance need no stronger primitive claim and are unchanged.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-tangent-spaces-general-and-special-linear-groups",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "F3 overstates the coordinate-ring description for arbitrary targets: the distinct constant maps Spec(D) to P^1_k induce the same map k to D on global functions. This is nonfatal to the example because SL_n=Spec(S) and GL_n=Spec(T) are affine, and steps 1.2, 2.2 and 3.1 already cite F4 as well as F3. Removed the false extra clause; F3 now states only the base-compatibility definition."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-dominant-map-generic-differential-surjectivity-char-zero",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "F2 omits the affine-overlap separation condition from the claimed equivalence. Gluing two copies of A^1 along G_m gives an integral finite-type scheme whose overlap ring k[t,t^-1] is not the image of k[t] tensor_k k[t], so it violates that condition. The rejection is correct, but nonfatal to this proof: X and Y are already classical varieties and their associated schemes satisfy the condition. Restored it in F2 and made the algebraically closed base explicit; no mathematical conclusion or proof step changes."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-relative-dimension-smooth-morphism",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "The global equivalence omits smoothness: over an algebraically closed field, k[e]/(e^2) has one point of local dimension zero, but its local ring has dimension zero and embedding dimension one and is not regular. Thus pure-dimensional geometric fibres alone do not give the smooth morphism required by the preceding clause. Restored the smoothness conjunct in the equivalence; the pointwise invariant and claims are preserved.",
    "evidence": "research/frontier-36-complete-step7-v2/step7-v2-repeat-r1-u6.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "cex-flat-not-smooth-nodal-family",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "F10 incorrectly quantifies over polynomial algebras with arbitrarily many variables. A finite set of polynomials involves only finitely many variables, so k[x_1,x_2,...] is not even finitely generated over k. Added the finite-variable qualification. Nonfatal because step 2.3 applies it only to k[t][x,y], a two-variable algebra, and the claimed presentation has one relation; no conclusion or load-bearing inference changes.",
    "evidence": "research/frontier-36-complete-step7-v2/step7-v2-repeat-r1-u6.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published-item defect was discovered in this scoped review. Direct consumers are inventoried for the supplier event; none needs a mathematical repair from this change."
  },
  {
    "ledger": "canonical_defect_ledger",
    "id": "def-symmetric-algebra-qc-module",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed nonfatal Choice-accounting defect: the definition already assumes AC and declares both AC and affine equivalence as dependencies, so its construction is valid in the stated theory. But its exclusive attribution to associated-sheaf machinery omits the compactness of Spec A used in thm-affine-quasi-coherent-equivalence, Proof 2.1 and 8.1. Corrected the opening and Choice paragraph to name that inherited use without changing the algebraic construction or strengthening assumptions."
  },
  {
    "ledger": "canonical_defect_ledger",
    "id": "lem-symmetric-algebra-qc-and-base-change",
    "status": "owner_repair_needed",
    "reason": "Facts F1 and Proof 1.1, 3.1-3.3 use the affine model, universal property and canonical restriction identifications; those are unchanged and AC is already assumed. However Statement opening and F7 list only associated-sheaf and gluing machinery, and Proof 4.1 calls F7 the only inherited AC. F2 invokes affine equivalence, whose compactness use should also be named. Propose adding affine equivalence (including its finite-principal-cover compactness step) to the opening and F7; no algebraic claim needs weakening. This unassigned frontier accounting repair is for the owner lane."
  },
  {
    "ledger": "defect",
    "id": "def-relative-proj-quasi-coherent-graded-algebra",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "The No finiteness remark incorrectly makes finite generation necessary for invertible twists. Degree-one charts cover Proj for a degree-one generated algebra, even with infinitely many generators, and multiplication by x^n trivializes each twist on D_+(x). The relative assertion follows on affine-base restrictions. This is a nonfatal explanatory-remark defect: the construction and Definition are sound and unchanged."
  },
  {
    "ledger": "defect",
    "id": "def-ample-invertible-sheaf",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "The final remark promises a cohomological characterization, but thm-serre-criterion-ampleness states and proves eventual global generation of coherent twists on Noetherian schemes. It also contains no remark recording the arbitrary qcqs version. Corrected both unsupported pointers and the corresponding contract explanation. This nonfatal citation-scope error does not alter the affine-nonvanishing definition or any proof of it."
  },
  {
    "ledger": "defect",
    "id": "def-very-ample-invertible-sheaf-relative",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "The remark correctly starts with qc morphism plus qc base implies qc source, but its conclusion that the definition applies to quasi-compact X suggests the invalid converse. Let A=k[x_1,x_2,...] and glue two copies of Spec A along W=union D(x_i). The base is a union of two qc affines and the first chart is qc, but its inclusion pulls the second chart back to W, which is not qc: for any finite index set F the prime (x_i:i in F) lies in W and outside every D(x_i) with i in F. Clarified the implication without altering the correct morphism hypothesis in the Definition. This is a nonfatal misleading remark, not a defect in the defined notion."
  },
  {
    "ledger": "published",
    "id": "def-quasi-compact-and-quasi-separated-scheme",
    "classification": "U-C",
    "status": "maintenance_required",
    "finding": "Source locator mismatch only: the item labels https://stacks.math.columbia.edu/tag/01KV as Schemes Section 19, but that URL is Lemma 26.21.13 on cancellation for separated/quasi-separated morphisms. Section 26.19 is Tag 01K2. The inspected quasi-compactness definitions themselves are sound.",
    "required_repair": "Reconcile the source title and URL in separate published maintenance, with a separation-axioms reference for the quasi-separated clause; no Statement/Definition repair established.",
    "source_urls": [
      "https://stacks.math.columbia.edu/tag/01KV",
      "https://stacks.math.columbia.edu/tag/01K2"
    ],
    "uncertain": false,
    "familiar": true,
    "audit_scope": "Source-locator finding only; no claim of complete published audit or new supplier dependency.",
    "suppliers": []
  },
  {
    "ledger": "published",
    "id": "def-quasi-compact-and-quasi-separated-morphism",
    "classification": "U-C",
    "status": "maintenance_required",
    "finding": "Source locator mismatch only: the item labels https://stacks.math.columbia.edu/tag/01KV as Schemes Section 19, but that URL is Lemma 26.21.13 on cancellation for separated/quasi-separated morphisms. Section 26.19 is Tag 01K2. The inspected quasi-compactness definitions themselves are sound.",
    "required_repair": "Reconcile the source title and URL in separate published maintenance, with a separation-axioms reference for the quasi-separated clause; no Statement/Definition repair established.",
    "source_urls": [
      "https://stacks.math.columbia.edu/tag/01KV",
      "https://stacks.math.columbia.edu/tag/01K2"
    ],
    "uncertain": false,
    "familiar": true,
    "audit_scope": "Source-locator finding only; no claim of complete published audit or new supplier dependency.",
    "suppliers": []
  },
  {
    "ledger": "canonical defect ledger",
    "id": "ex-cohomology-o-d-projective-line-all-d",
    "status": "repaired",
    "defect_type": "dependency_citation",
    "reason": "F5 used invertibility to establish coherence and hence the defined Euler characteristic in 1.1, but cited only definitions. Repaired the missing justification locally: multiplication by x_i^d is an invertible degree-shifting map on each standard chart, compatible with restriction, for all integer d."
  },
  {
    "ledger": "canonical defect ledger",
    "id": "rem-base-change-is-not-automatic",
    "status": "repaired",
    "defect_type": "logic",
    "reason": "The only-when direction is false. For A=k[a,b]/(ab), the same gluing equations give H^0(E)=ann(a)=(b), including after localisation. At m=(a,b), (b)/m(b)=(b)/(b^2) has dimension one; E_m splits and H^0(E_m)=k. The comparison sends a section beta*v_i with beta in (b) to zero modulo m. Thus equal dimensions coexist with the zero comparison map. Changed only-when to whenever, and qualified the final rank warning as a failure of a general inference."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "status": "no_update",
    "reason": "No published-item mathematical defect was found in the assigned repair review; both repaired targets are draft frontier items."
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "def-vector-bundle-scheme",
  "ex-projective-bundle-trivial-rank-r",
  "ex-rank-zero-locally-free-sheaf",
  "lem-affine-local-dimension-residue-transcendence",
  "lem-coprime-polynomial-factorization-lifts-etale-locally",
  "thm-smooth-morphisms-stable-base-change-composition",
  "lem-etale-stable-base-change-composition",
  "lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness"
]


