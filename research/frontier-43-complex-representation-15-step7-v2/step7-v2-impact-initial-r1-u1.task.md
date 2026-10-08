# Step 7 repair: impact-initial, round 1, unit 1

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/impact-initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/step7-v2-impact-initial-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"frontier-43-complex-representation-15",phase:"impact-initial",round:1,unit:"1",input_sha256:"21d00dacbf71e7b9877d9f19713cf4b8bd88723844fc398bde50994f69f1a1d8",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-43-complex-representation-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "f43-step7-initial-r1-u1-1",
    "id": "lem-closed-witness-codings-and-measured-projections",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "undefined-notation",
    "location": "proof-step",
    "caught_at_stage": "7-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "reason": "The Borel-envelope bound and closed distance superlevel sets used 1/n at n=0. Replaced these by 1/(n+1) and reindexed the closed-projection point pairs from zero. The infimum-envelope argument, null exceptional tree argument, closed coding closure, and sigma-finite localization remain valid; Statement is byte-identical.",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u1.json",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "f43-step7-initial-r1-u1-2",
    "id": "lem-l-one-of-a-second-countable-group-is-separable",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-missing",
    "location": "proof-step",
    "caught_at_stage": "7-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "reason": "The two finite subcovers are covers by ambient open subsets, requiring lem-compactness-of-a-subspace-is-ambient rather than the intrinsic definition alone. Added its dependency and F3 citation; expanded the finite-union compactness justification and handled empty support and empty partition cells explicitly. The countable Boolean algebra, rational simple approximation, and Cc density argument preserve the Statement.",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u1.json",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "f43-step7-initial-r1-u1-3",
    "id": "lem-measurable-fields-of-nonempty-compact-sets-have-measurable-dense-selections",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "ill-typed-claim",
    "location": "statement",
    "caught_at_stage": "7-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "reason": "The dense input and output sequences omitted their zeroth terms. Reindexed all dense-point indices and the output enumeration by N, retaining explicitly positive reciprocal-radius indices. Closed-target hits follow from compact FIP, measurable least indices preserve the nonempty nested zero fibers, and their shrinking diameters give unique Borel limits and dense selections. No choice beyond the supplied dense sequence is used.",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u1.json",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "f43-step7-initial-r1-u1-4",
    "id": "lem-measurable-gram-schmidt-and-constant-field-trivializations",
    "severity": "fatal",
    "class": "accuracy",
    "subclass": "invalid-inference",
    "location": "statement",
    "caught_at_stage": "7-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "reason": "On the one-point field C with xi_0=1 and all later xi_k=0, the original S_x={0}, whereas Gram-Schmidt gives h_0=1 and the localization span includes xi_0. This is a false closed-span claim, a logic defect. Included every k in N in S_x and corrected the finite-span induction to f_0,...,f_n. Measurable normalization, dimension counts, Parseval transport, and orthogonality to bounded localized generators now prove the stated subfield equality. Also corrected positive rational density to (0,infinity).",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u1.json",
    "source_urls": [],
    "familiar": true,
    "uncertain": false,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "f43-step7-initial-r1-u1-5",
    "id": "lem-borel-relations-admit-conull-borel-uniformizations",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "location": "facts-block",
    "caught_at_stage": "7-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "reason": "F5 falsely called positive rationals dense in all reals; no positive rational lies in (-2,-1). It now states density of all rationals in R and of positive rationals in (0,infinity). Scalar superlevel Borel versions use all rational levels, whereas the nested balls use only positive radii, so both uses are licensed. Added c_0=c_1 and w_0=w_1 to make the convergent witness sequences total on N. Closed witnesses, Borel prefix cells, shrinking complete-metric balls and conull localization prove the unchanged Statement.",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u1.json",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "f43-step7-initial-r1-u1-6",
    "id": "lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations",
    "severity": "fatal",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "location": "facts-block",
    "caught_at_stage": "7-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "reason": "F3 attributed finite-tuple density for arbitrary unital star-algebras to a theorem whose Statement assumes WOT closedness. This unsupported dependency invocation was load-bearing in Steps 2.1 and 6.1. Proved density locally using the projection onto the closure of the diagonal algebra orbit: its matrix entries lie in the commutant, so a bicommutant operator preserves the orbit closure. Added the actual orthogonal-decomposition supplier and derived the matrix-amplification bicommutant equality from this argument. Resolvent/clipping density, norm-summable self-adjoint corrections and the pure-state transitivity arguments retain all original claims.",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u1.json",
    "source_urls": [
      "https://bruceblackadar.com/Mathematics/Cycr.pdf"
    ],
    "familiar": true,
    "uncertain": false,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "f43-step7-initial-r1-u1-7",
    "id": "lem-polar-decomposition-and-nonzero-partial-isometries-in-factors",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "undefined-notation",
    "location": "proof-step",
    "caught_at_stage": "7-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "reason": "The regularizer used 1/n at the unrestricted natural index zero. Replaced it throughout Step 3.2 by 1/(n+1): every inverse exists on the positive spectrum, the contractions converge on range(a)+ker(a), and their uniform bound extends convergence to H. Multiplication by the locally constructed partial isometry gives a strong limit inside M. The central-support projection argument proves pMq is nonzero in a factor, with the interchanged corner giving the requested initial and final projections. Statement unchanged.",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u1.json",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "f43-step7-initial-r1-u1-8",
    "id": "lem-second-countable-group-c-star-algebra-has-a-sequential-approximate-identity",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "ill-typed-claim",
    "location": "statement",
    "caught_at_stage": "7-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "reason": "The sequence and local-basis enumeration were indexed only by positive integers, leaving u_0 undefined under the library convention. Both now start at zero, with V_n the intersection of B_0 through B_n and u_n=e_(V_n). Cofinality, positivity, mass one and shrinking supports are unchanged. The normalized L1 approximate-identity net proves both convolution limits; the dense canonical image and uniform representation bound extend convergence from its nondegenerate generating span to every vector.",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u1.json",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "f43-step7-initial-r1-u1-9",
    "id": "lem-self-commensurating-cyclic-subgroups-and-trivial-conjugate-intersections-in-the-free-group-of-rank-two",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "false-or-overstrong-title",
    "location": "title",
    "caught_at_stage": "7-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "reason": "The display title asserted a property of all free factors; the trivial factor has commensurator F and refutes that wording. Retitled the item to the two cyclic basis factors and their cross-conjugate intersections. The Statement already specifies only A=<a> and B=<b>; its normal-form proof gives same-factor malnormality, the factor retractions give cross-factor trivial intersections, and infinitude excludes any other commensurator elements. No Statement or Definition changed.",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u1.json",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "f43-step7-initial-r1-u1-10",
    "id": "lem-local-analytic-separation-and-saturated-borel-quotients",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-truncated",
    "location": "facts-block",
    "caught_at_stage": "7-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "reason": "F6 omitted the no-common-zero/unital hypothesis: functions vanishing at 0 on [0,1] separate points but are not dense. Restored the unital compact-Hausdorff statement actually used in Step 1.3. Applied it to the complex distance-function algebra, then approximated its finite coefficient lists by rational-complex coefficients to obtain separability. Also licensed the compact exhaustion and finite-subcover assertion with the actual local-compactness, Lindelof and ambient-compactness suppliers. Closed-witness analytic separation and the Borel GNS/vector-state and integrated correspondence arguments preserve the Statement.",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u1.json",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "f43-step7-initial-r1-u1-11",
    "id": "lem-gcr-kernel-and-mackey-borel-characterizations",
    "severity": "fatal",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "location": "facts-block",
    "caught_at_stage": "7-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "reason": "The cited obstruction supplier Statement asserts neither compact-ideal uniqueness nor matrix-unit amplification, although its proof contains related arguments. These missing dependency interfaces were load-bearing in original Steps 1.1 and 4.1. Replaced them with local proofs: a spectral finite-rank cutoff and finite-dimensional corner give every compact in an irreducible image; matrix units realize any nondegenerate compact-operator representation as a direct sum of arbitrary multiplicity, and computing both commutants proves its generated type-I factor. Ideal approximate-unit limits extend equal-kernel irreducible equivalence and identify the factor algebra. No separability is imposed on the multiplicity carrier; Statement unchanged.",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u1.json",
    "source_urls": [
      "https://bruceblackadar.com/Mathematics/Cycr.pdf"
    ],
    "familiar": true,
    "uncertain": false,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "frontier-43-complex-representation-15-step7-r1-u10-projective-holomorphy",
    "run": "frontier-43-complex-representation-15",
    "at": "2026-10-08T07:12:43.505629+00:00",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "severity": "fatal",
    "location": "definition",
    "subject": "def-complex-projective-space-and-holomorphic-charts",
    "caught_at_stage": "7-adjudicate",
    "caught_by_role": "group-alpha",
    "disposition": "fixed",
    "description": "The one-variable scalar chain rule was invoked for multidimensional projective chart transitions, with no explicit vector holomorphy convention. The local definition and ratio derivative argument repair that unsupported use; target surface-chart changes now use scalar quotient rules.",
    "adjudication_ref": [
      "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u10.json#decisions/0"
    ],
    "item_sha256": "f075bf77cbff31af4e1339d43261a369ead16071cd512ad21d07fd2edf72eace",
    "repair_cost": "inline-fix",
    "uncertain": false,
    "source_urls": [
      "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "frontier-43-complex-representation-15-step7-r1-u10-principal-part",
    "run": "frontier-43-complex-representation-15",
    "at": "2026-10-08T07:12:43.505629+00:00",
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "severity": "nonfatal",
    "location": "facts-block",
    "subject": "thm-residue-pairing-for-line-bundle-cohomology",
    "caught_at_stage": "7-adjudicate",
    "caught_by_role": "group-alpha",
    "disposition": "fixed",
    "description": "F14 imposed finiteness on every isolated-singularity principal part, contrary to the supplier. F14 now allows an infinite general Laurent negative part and restricts finiteness to the meromorphic differentials actually used; the residue proof and Statement remain unchanged.",
    "adjudication_ref": [
      "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u10.json#decisions/1"
    ],
    "item_sha256": "51c47e1416e8e0c0597aa85488b7c100d5f9577285ccb4c7226cdc1c4f6e8db1",
    "repair_cost": "inline-fix",
    "uncertain": false,
    "source_urls": [
      "https://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_closed_defect",
    "run": "frontier-43-complex-representation-15",
    "stage": "7.1-adjudicate",
    "unit": "11",
    "id": "lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "affected_use": "Facts F8 and Proof step 1.2",
    "reason": "F8 falsely included the identically zero meromorphic function, whose zero germs have infinite order. The main proof does not require F8: in step 1.2 equal local coordinate powers cancel and the quotient is a smooth unit. Removed the unused false fact and cited the given weak-solution behavior. Checked the cutoff model, clockwise inner-circle sign, O(1/r) integrability, finite product and canceled endpoints; the Statement is unchanged.",
    "adjudication_ref": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u11.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_closed_defect",
    "run": "frontier-43-complex-representation-15",
    "stage": "7.1-adjudicate",
    "unit": "11",
    "id": "lem-dbar-solvability-criterion-for-a-smooth-zero-one-form",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "affected_use": "Facts F3 and Proof step 2.1 choice bookkeeping",
    "reason": "The general Stokes supplier explicitly assumes countable choice. Full AC is already a Statement/Given assumption, so the solvability theorem remains sound: d(g omega)=dbar g wedge omega and duality for E=O gives injectivity, including the zero-dimensional case. Corrected F3 and step 2.1 to include inherited Stokes choice rather than claiming the Stokes calculation is choice-free. The Statement is unchanged.",
    "adjudication_ref": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u11.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_closed_defect",
    "run": "frontier-43-complex-representation-15",
    "stage": "7.1-adjudicate",
    "unit": "11",
    "id": "def-period-pairing-and-period-lattice",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "affected_use": "Frontmatter title; Definition explicitly defers lattice properties",
    "reason": "The Definition correctly constructs only the image subgroup using unique integer coordinates and linear path integrals; it explicitly defers discreteness and fullness. Its title nevertheless calls that object a lattice. Renamed the title to period subgroup, preserving the Definition, period matrix and genus-zero conventions. This is a nonfatal presentation defect with no interface change.",
    "adjudication_ref": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u11.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_closed_defect",
    "run": "frontier-43-complex-representation-15",
    "stage": "7.1-adjudicate",
    "unit": "11",
    "id": "lem-abel-jacobi-map-is-well-defined-and-base-point-independent",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "affected_use": "Frontmatter title; Statement clause 3 and Proof step 1.3",
    "reason": "Step 1.3 gives u_q0(p)=u_p0(p)-u_p0(q0); the shift generally persists for points and cancels for a divisor precisely through its degree. Clause 3 already limits independence to degree-zero divisors. Changed only the title to name the degree-zero extension. Checked path-period differences, the local primitive lift and derivative, finite divisor additivity and evaluation modulo Lambda_omega; the Statement is unchanged.",
    "adjudication_ref": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u11.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_closed_defect",
    "run": "frontier-43-complex-representation-15",
    "stage": "7.1-adjudicate",
    "unit": "11",
    "id": "thm-jacobi-inversion",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "affected_use": "Facts F1; Proof step 1.1 handles g=0 separately",
    "reason": "The supplied separation lemma assumes g>=1, whereas F1 stated nonzero evaluation at every point for g>=0. Qualified F1 by g>=1. Step 1.1 already disposes of genus zero before invoking evaluations or the inverse theorem, so this inaccurate dependency restatement is nonfatal. Checked the transposed evaluation matrix, local inverse image ball, division by N and the separate Riemann-Roch effective degree-g representative; the Statement is unchanged.",
    "adjudication_ref": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u11.json",
    "uncertain": false,
    "source_urls": [
      "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_closed_defect",
    "run": "frontier-43-complex-representation-15",
    "stage": "7.1-adjudicate",
    "unit": "11",
    "id": "ex-abel-image-in-its-jacobian",
    "severity": "fatal",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "defect_type": "logic",
    "affected_use": "Statement clause 3 and Verification step 1.2",
    "reason": "Clause 3 named X_0 but asserted Jac(X)=C^2/Lambda for arbitrary positive-genus X, contradicting the genus-one dimension. This is a fatal logic defect in the Statement. Replaced those two occurrences by X_0 and explicitly specialized the verification to X=X_0 with any base point. The positive-genus embedding supplier and the pentagon supplier then give the compact curve in its two-dimensional Jacobian; divisor surjectivity gives generation. General claims 1, 2 and 4 are preserved.",
    "adjudication_ref": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u11.json",
    "uncertain": false,
    "source_urls": [
      "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "lem-riemann-maps-of-jordan-domains-extend-homeomorphically",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "F2 omitted unboundedness of the connected plane complement.",
    "evidence": "The exterior disk counterexample disproves the unqualified F2. Its actual uses in step 3.1 concern the bounded domains Omega and V, whose plane complements are connected and unbounded. Added unboundedness to F2 and explicitly verified it in step 3.1; the index vanishes on that complement by local constancy and its far-away value. The Statement is unchanged, and the crosscut, reflection, exterior-coordinate and uniqueness arguments remain sound under the stated AC assumption."
  },
  {
    "ledger": "defect",
    "id": "ex-affine-quasiconformal-ellipse-map",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "finding": "Statement(c) described every allowed annulus as a ring between two ellipses despite zero/infinite radii.",
    "evidence": "Confirmed a false Statement at allowed endpoint radii: A(1,infinity) maps to an ellipse exterior and has no second boundary ellipse, while A(0,R) has a puncture. Kept all annuli 0<=r<R<=infinity and both distortion inequalities; now states two homothetic ellipses only for finite positive radii, identifies puncture/infinity components and specifies the already-proved annular end-path convention. Step 3.1 uses the proper bi-Lipschitz affine map to transport all ends; F4 limits the finite numerical formula to 0<r<R<infinity, and the example A(1,e^{2pi}) remains unchanged. The inverse, axes, coefficients and restrictions are valid. This is a local repair, not an independent audit."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-area-and-l2-derivative-bounds-for-quasiconformal-maps",
    "finding": "The alleged missing total-differentiability supplier is a false positive; core Proof 1.1 and auxiliary Remark explicitly prove it. The contract instead has a confirmed nonfatal citation-selection defect: F4 quotes only the modulus Statement.",
    "severity": "nonfatal",
    "disposition": "fixed",
    "repair": "Changed only the F4 contract citation to source_section Remark with the exact first Remark paragraph. Item guard and claim are unchanged.",
    "path": "research/frontier-43-complex-representation-15-batch-13.proof-contracts.json",
    "uncertain": false,
    "source_urls": [
      "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-measurable-riemann-mapping-sphere",
    "finding": "Proof 1.2 uses the undefined epsilon_0=1/0 under the library convention 0 in N.",
    "severity": "nonfatal",
    "disposition": "fixed",
    "repair": "Use epsilon_n=1/(n+1) for all n in N; synchronize contract derivation 1.2. Statement and downstream interfaces are unchanged.",
    "path": "items/thm-measurable-riemann-mapping-sphere.md",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-constant-coefficients-and-affine-solutions",
    "finding": "The claimed full weak-solution classification and normalized uniqueness in Statement (b) are false: z squared is a normalized sphere weak solution for nu=0 and is not a homeomorphism or Mobius map.",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "repair": "Specify orientation-preserving quasiconformal homeomorphic solutions in Statement (b), F8 and Proof 3.1, and synchronize their owning manifest and contract. No direct item consumer exists.",
    "path": "items/ex-constant-coefficients-and-affine-solutions.md",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-constant-coefficients-and-affine-solutions",
    "finding": "Nonfatal owning metadata defects: the manifest omitted the existing thm-acl-characterisation-of-w-one-p dependency and the double-quoted source locator decoded mathematical backslashes as YAML control escapes.",
    "severity": "nonfatal",
    "disposition": "fixed",
    "repair": "Mirror the actual ACL dependency and use a single-quoted item locator plus the exact literal source-locator manifest text. Neither changes Statement or proof mathematics.",
    "path": "research/frontier-43-complex-representation-15-batch-13.pages.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-zero-length-sets-are-removable-for-continuous-analytic-functions",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "F2 called outer measure a measure on all subsets. Only monotonicity, countable subadditivity and rectangle area are needed in 1.1 and 5.1; the exact outer-measure theorem now supplies them. The finite square cover, bounded total cell perimeter, continuity estimate and Liouville conclusion remain valid under Countable Choice.",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u14.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-ahlfors-extension-of-line-quasisymmetric-maps",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "F10 omitted measurability from finite Lebesgue measure. All actual integration domains in 5.1 are compact rectangles, which the supplied proposition explicitly makes measurable with finite measure; correcting F10 suffices. Derivative formulas give J=PS+QR>0 and the stated energy bound, tail estimates give properness, and the one-sheeted covering and smooth-line gluing suppliers complete the extension.",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u14.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_closed_defect",
    "run": "frontier-43-complex-representation-15",
    "stage": "7.1-adjudicate",
    "unit": "15",
    "id": "lem-ball-hardy-traces-and-evaluation-bound",
    "severity": "fatal",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "defect_type": "dependency_citation",
    "affected_use": "Proof step 1.2 ambient ball cover",
    "reason": "Step 1.2 uses an ambient Euclidean ball cover, whereas def-metric-compactness defines only intrinsic covers and explicitly requires lem-compactness-is-intrinsic for the ambient implication. That proved, choice-free dependency was missing. Added it to deps, F7 and step 1.2, with the owning manifest and exact Statement quotation in the contract. The finite minimum radius delta still gives |y-a_i|<2 epsilon_i; homogeneous Cauchy bounds, radial density, sphere weights, evaluation and Riesz then establish the unchanged claim under AC_omega.",
    "adjudication_ref": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u15.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_closed_defect",
    "run": "frontier-43-complex-representation-15",
    "stage": "7.1-adjudicate",
    "unit": "15",
    "id": "lem-monomial-bases-of-bergman-spaces-of-disc-ball-and-polydisc",
    "severity": "fatal",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "defect_type": "dependency_citation",
    "affected_use": "Proof step 1.3 ambient polydisc cover",
    "reason": "Step 1.3 takes a finite subcover of K_t from ambient centered polydiscs, while def-metric-compactness licenses intrinsic covers and expressly requires the missing ambient-cover theorem. Added the proved choice-free lem-compactness-is-intrinsic to deps, F9, step 1.3, the owning manifest and contract. The cover is all admissible polydiscs, with no arbitrary selection. For the ball, |a|<=t<1 permits radii rho_j>|a_j| with sum rho_j^2<1. Common coefficients and finite uniform cutoffs justify the two dominated-convergence passages, whose positive diagonal moments force every coefficient to vanish; rotations and Hilbert zero-complement then prove the unchanged complete normalized bases.",
    "adjudication_ref": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u15.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_closed_defect",
    "run": "frontier-43-complex-representation-15",
    "stage": "7.1-adjudicate",
    "unit": "15",
    "id": "ex-polydisc-bergman-product-and-distinguished-torus-kernel",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "defect_type": "other",
    "affected_use": "Facts & Assumptions F1, used in Verification step 1.1",
    "reason": "F1 falsely calls the unnormalized Bergman monomials orthonormal: its own displayed norms give ||1||^2=pi on the disc and pi^m on the polydisc. The supplier instead asserts orthogonality and completeness after normalization. This is nonfatal because step 1.1 already uses the reciprocal squared-norm weights correctly and the Example kernels are correct. Replaced F1 with complete orthogonal systems and explicit division by each norm. Checked the coefficient orientation in the first-variable-linear pairing, Haar mass-one torus section convergence, Cauchy-Schwarz tails and local holomorphic extension, and the m=1 versus m>=2 boundary caveat; all claims and dependencies remain unchanged.",
    "adjudication_ref": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u15.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "frontier-43-complex-representation-15-step7-initial-r1-u2-1",
      "run": "frontier-43-complex-representation-15",
      "at": "2026-10-08T07:14:55.426243+00:00",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "The zero-based threshold family had an undefined E_0. Replacing 1/n by 1/(n+1) and the measure bound by (n+1) times the integral preserves its union A intersect {f>0}. This is a nonfatal indexing error; the compact-detection equivalence and retained globally infinite locally-null counterexample remain valid under the stipulated Radon convention.",
      "source": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u2.json",
      "batch": "2",
      "item_sha256": "7e9e5343b7d3e4fcbcf4e299ca7e76c8f68f5d33ac47af064ddf5d73450de88a"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "frontier-43-complex-representation-15-step7-initial-r1-u2-2",
      "run": "frontier-43-complex-representation-15",
      "at": "2026-10-08T07:14:55.426243+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-restricted-regular-representation-is-weakly-contained-in-subgroup-regular-representation",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "F4 overstated the inversion theorem for complex inputs: the necessary assumption is integrability of Delta(y^-1)|u(y)|, not merely |u|. Every actual complex use in 3.1 is compactly supported continuous, and 5.1 uses a nonnegative compactly supported function, so the argument remains valid. F4 now states the exact weighted hypothesis and applies also to H; 3.1 verifies it. The additional missing ambient-compactness citation in 4.1 is supplied for both Q and T.",
      "source": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u2.json",
      "batch": "2",
      "item_sha256": "6ab3b9b47fbfe75f951e0e420140e28800d1ef1d365d1c8c5d51dd43cdde49d8"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "frontier-43-complex-representation-15-step7-initial-r1-u2-3",
      "run": "frontier-43-complex-representation-15",
      "at": "2026-10-08T07:14:55.426243+00:00",
      "class": "accuracy",
      "subclass": "citation-misattributed",
      "severity": "nonfatal",
      "location": "contract-row",
      "subject": "lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "The owning contract mapped F20 to the UCB supplier Statement, which does not assert closure of probability densities under convolution. Its actual Remark explicitly states that closure, and its complete steps 1.1, 2.3 and 3.2 prove it using nonnegative Cc approximants and L1 convergence. The defect is a nonfatal contract-interface miscitation, corrected to the exact Remark; no missing mathematical supplier is needed. Additional nonfatal ambient-cover citations are repaired in 3.2 and 8.1.",
      "source": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u2.json",
      "batch": "2",
      "item_sha256": "24645b2f7f75345b488312fd9d08daf94e9571ff927a556d518da81be9e6c1aa"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "frontier-43-complex-representation-15-step7-initial-r1-u2-4",
      "run": "frontier-43-complex-representation-15",
      "at": "2026-10-08T07:14:55.426243+00:00",
      "class": "accuracy",
      "subclass": "citation-misattributed",
      "severity": "nonfatal",
      "location": "contract-row",
      "subject": "lem-an-invariant-mean-produces-a-reiter-net",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "F10 is true and explicitly proved and stated in the UCB supplier Remark, but its contract quoted the unrelated Statement. Correcting source_section to Remark and quoting its exact probability-convolution assertion repairs this nonfatal interface miscitation. The supplier proof obtains positivity and unit mass by nonnegative Cc approximants, compact Radon integration and norm convergence, valid without sigma-compactness. The additional ambient-cover citation for compactness of Q union {e} is repaired locally in F7 and 3.1.",
      "source": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u2.json",
      "batch": "2",
      "item_sha256": "2f2187c47482b93a48a3dc32c0e547e471d438225ae5a2fb9da51247f78c27e9"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "frontier-43-complex-representation-15-step7-initial-r1-u2-5",
      "run": "frontier-43-complex-representation-15",
      "at": "2026-10-08T07:14:55.426243+00:00",
      "class": "accuracy",
      "subclass": "citation-missing",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "cor-folner-sequences-for-second-countable-compactly-generated-groups",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "Step 2.1 used compactness of Q for the ambient open cover by interiors of K_(2n), contrary to the intrinsic compactness interface without its bridge lemma. F4 now cites the ambient-compactness theorem, the proof explicitly extracts a finite subcover and takes its largest index, and Q empty is handled by n_0=1. This is a nonfatal missing dependency citation; compact exhaustion, countable witness choice and the 1/n defect estimate remain mathematically valid.",
      "source": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u2.json",
      "batch": "2",
      "item_sha256": "a4f712f8227d4106863528cbce80b54861dca00c7a56ad0c30f96be1b7b6b7e7"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "frontier-43-complex-representation-15-step7-initial-r1-u2-ambient-2",
      "run": "frontier-43-complex-representation-15",
      "at": "2026-10-08T07:14:55.426243+00:00",
      "class": "accuracy",
      "subclass": "citation-missing",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-restricted-regular-representation-is-weakly-contained-in-subgroup-regular-representation",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "Added F11 and the existing ambient-compactness supplier for both Q and T covers in restricted-representation step 4.1.",
      "source": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u2.json",
      "batch": "2"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "frontier-43-complex-representation-15-step7-initial-r1-u2-ambient-3",
      "run": "frontier-43-complex-representation-15",
      "at": "2026-10-08T07:14:55.426243+00:00",
      "class": "accuracy",
      "subclass": "citation-missing",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "Added the ambient-compactness supplier to F27 for the coset cover in 3.2 and norm-ball cover in 8.1.",
      "source": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u2.json",
      "batch": "2"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "frontier-43-complex-representation-15-step7-initial-r1-u2-ambient-4",
      "run": "frontier-43-complex-representation-15",
      "at": "2026-10-08T07:14:55.426243+00:00",
      "class": "accuracy",
      "subclass": "citation-missing",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-an-invariant-mean-produces-a-reiter-net",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "Added the ambient-compactness supplier to F7 for adjoining e to compact Q in 3.1.",
      "source": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u2.json",
      "batch": "2"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_frontier_owner_finding",
    "id": "lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean",
    "route": "frontier-owner",
    "disposition": "open",
    "severity": "nonfatal",
    "path": "items/lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean.md",
    "proof_steps": "2.1",
    "snippet": "Since $y\\mapsto L_y\\psi$ is sup-norm continuous and $K$ is compact, a finite open cover of $K$ gives a finite Borel partition",
    "item_raw_sha256": "0e47718055d8b1482e129fe08d7ff356cefd42858acb8f435806b5e744dbaaa7",
    "affected_use": "F7 and step 2.1 use an ambient finite open cover of K without linking lem-compactness-of-a-subspace-is-ambient. Its complete proof/Remark does correctly establish probability-convolution closure, so the F20/F10 repairs do not require changing this supplier.",
    "invalidated_claim": "No mathematical Statement is invalidated: the finite-subcover inference is valid by the existing bridge lemma, but the required direct citation is absent. This is a read-only citation finding, not a Step 7 judgment or item-gate obligation for the published supplier.",
    "minimality": "Add the existing ambient-compactness dependency and its exact citation at the cover use; preserve the Statement, Remark and convolution-closure proof.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "proposed_maintenance_finding",
    "id": "lem-compactly-supported-kernels-admit-commuting-radon-integrals",
    "route": "separate-published-maintenance",
    "disposition": "open",
    "severity": "nonfatal",
    "path": "items/lem-compactly-supported-kernels-admit-commuting-radon-integrals.md",
    "proof_steps": "2.1/3.1",
    "snippet": "Take finitely many covering $K_X$ and intersect their $y$-neighbourhoods.",
    "item_raw_sha256": "e7dc7e05a03f3fa1167579863ca0917519c688166e64160a60f364365ad993e4",
    "affected_use": "The published kernel proof takes finitely many ambient rectangles covering compact K_X in 2.1 and finitely many neighbourhoods covering L_Y in 3.1, but its dependencies and Facts do not cite the required ambient-compactness bridge.",
    "invalidated_claim": "No mathematical Statement is invalidated: the finite-subcover inference is valid by the existing bridge lemma, but the required direct citation is absent. This is a read-only citation finding, not a Step 7 judgment or item-gate obligation for the published supplier.",
    "minimality": "Add the existing ambient-compactness dependency and cite it at both finite-cover extractions; preserve the continuous-kernel commutation Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "proposed_maintenance_finding",
    "id": "lem-closed-subgroup-quotient-averaging-and-compact-lifts",
    "route": "separate-published-maintenance",
    "disposition": "open",
    "severity": "nonfatal",
    "path": "items/lem-closed-subgroup-quotient-averaging-and-compact-lifts.md",
    "proof_steps": "2.1/3.1",
    "snippet": "For compact $Q\\subseteq X$, cover $Q$ by sets $p(U_q)$ where each $U_q$ is relatively compact and open. A finite subcover exists",
    "item_raw_sha256": "11c29b6eab97c87d0b9f6f2e776c691fd3ab12d933e0da10947dcff61b70b269",
    "affected_use": "The published quotient proof extracts ambient finite subcovers in 2.1 and 3.1 without citing lem-compactness-of-a-subspace-is-ambient, despite the explicit restriction in def-compact-space.",
    "invalidated_claim": "No mathematical Statement is invalidated: the finite-subcover inference is valid by the existing bridge lemma, but the required direct citation is absent. This is a read-only citation finding, not a Step 7 judgment or item-gate obligation for the published supplier.",
    "minimality": "Add the existing ambient-compactness dependency and cite it at the compact-lift and averaging cover extractions; preserve the quotient/lift/surjectivity Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-irreducible-c-star-representations-separate-arbitrary-c-star-algebras",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "The original local definition allowed the zero Hilbert space, whose zero representation is nondegenerate and has no nonzero proper closed invariant subspace. Thus the zero-algebra empty-family assertion was false. Added the nonzero-Hilbert-space requirement to irreducibility, matching the group irreducibility interface. The existing proof constructs H≠{0}, so separation by nonzero irreducible representations is preserved; for A={0}, nondegeneracy forces H={0}, now excluded. The norm-attaining face, extreme-state GNS projection argument, nonunital restriction and declared AC prerequisites are sound.",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u4.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-sl-n-r-is-boundedly-generated-by-elementary-root-subgroups",
    "severity": "fatal",
    "defect_type": "other",
    "disposition": "fixed",
    "reason": "The original Statement permits index n while the matrix suppliers have domain {0,...,n-1}, so e_{i,n} and E_{i,n} have no supplied meaning. Added the explicit bijection i maps to i-1 for all row/column labels; the matrix operations and determinant are transported through it. Checked column pivot repair, isolation of each row and column, the six-transvection diagonal identity, and the conservative bound 2(n²-1)+6(n-1)≤2n²+6n, including n=2 and negative pivots. No choice is required.",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u4.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-sl2-r-has-no-invariant-probability-on-the-projective-line",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The title is overbroad: the two upper unipotents with parameters 1 and 2 share the fixed line at infinity and preserve its Dirac probability. This is a nonfatal title defect because the Statement, Given, Proof 1.1 and final caveat already require distinct fixed lines. Added that hypothesis to the title and manifest mirror. The proof correctly conjugates the two lines to axes, forces zero mass on all translated half-open intervals, and contradicts the second unipotent moving the remaining point mass into the finite chart. Also corrected the source locator: BDV Example A.6.4(ii), printed pp. 327–328, supports the probability conclusion, but its unrestricted no-nonzero-Borel-measure wording fails for counting measure and needs local finiteness.",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u4.json",
    "source_urls": [
      "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-property-t-implies-compact-generation",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "Proof 2.1 takes a finite subcover by ambient open subgroups, while def-compact-space explicitly requires citing the ambient-subspace equivalence. Added lem-compactness-of-a-subspace-is-ambient to deps and F5, also used at 5.1. Added the finite-union supplier to F5 and corrected the finite-index paragraph’s unrelated F4 citation. The set of open compactly generated subgroups covers G, finite unions of their compact generators contain every compact test set, the quasi-regular sum has almost invariant unit vectors, and a nonzero invariant coordinate forces finite index and compact generation. AC and the discrete case are preserved.",
    "source_urls": [
      "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
    ],
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u4.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "f43-step7-initial-r1-u5-1",
      "run": "frontier-43-complex-representation-15",
      "at": "2026-10-08",
      "class": "accuracy",
      "subclass": "contract-mismatch",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-k-finite-and-smooth-vectors-for-sl2-r",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "batch": "5",
      "source": "judge-sol",
      "evidence": [
        {
          "path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u5.json",
          "note": "The Definition and its H^infinity Lie-action proof are mathematically valid, and the downstream density/stability lemma step 5.1 already proves preservation of V. Nevertheless the title and page promise an associated (g,K)-module which this Definition did not define or state with its compatibilities. This is a nonfatal completeness defect, repaired by adding the restriction to V, conjugation covariance, the finite-dimensional image of g_C tensor the finite K-orbit span, and agreement on Lie(K), without a finite-multiplicity assumption."
        },
        {
          "path": "items/def-k-finite-and-smooth-vectors-for-sl2-r.md",
          "note": "Current itemHashGuard 044942934e8ded7999f5c58b35d898faee2e364e76ad5b97d3cbadea8a6d881c; local repair review, no independent audit."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u5.json",
          "obligation": "def-k-finite-and-smooth-vectors-for-sl2-r / gpt-6.1-sol / 98cbd80f7bf9b016de537a8b1f7ef0db35d3e8c523a58ab86546ca796e07ca09"
        }
      ],
      "observed_item_sha256": "272d37dd25044dee07c57f47da25f2f8b42bd48681d07f6fe37f00ee9b17afbd",
      "observed_context_sha256": "98cbd80f7bf9b016de537a8b1f7ef0db35d3e8c523a58ab86546ca796e07ca09"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "f43-step7-initial-r1-u5-2",
      "run": "frontier-43-complex-representation-15",
      "at": "2026-10-08",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-the-weighted-area-form-is-sl2-r-invariant",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "batch": "5",
      "source": "judge-sol",
      "evidence": [
        {
          "path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u5.json",
          "note": "F1 and F5 overstate the quoted Statement interfaces: neither quote asserts norm-smooth G-orbits. However the model supplier Verification 2.3 explicitly proves that fact, so the mathematics is established in the cited item and this is a nonfatal interface/citation defect. Removed the overstatements and supplied a local Cayley rational-function calculation proving norm continuity, then used the dense span and isometries."
        },
        {
          "path": "items/lem-the-weighted-area-form-is-sl2-r-invariant.md",
          "note": "Current itemHashGuard f1829bbf264a2a33c8cc1d16866df1f658731edab92abca91f140e90e1530ff1; local repair review, no independent audit."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u5.json",
          "obligation": "lem-the-weighted-area-form-is-sl2-r-invariant / gpt-6.1-sol / 93dfff0e7bb9e93ddd08d0028d58f6188e9f7b9ec023d009e093aa67a42ea516"
        }
      ],
      "observed_item_sha256": "7331afc75e4bb8c8bd3f42368f7741d0860047df7886660859dd94494eaa3476",
      "observed_context_sha256": "93dfff0e7bb9e93ddd08d0028d58f6188e9f7b9ec023d009e093aa67a42ea516"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "f43-step7-initial-r1-u5-3",
      "run": "frontier-43-complex-representation-15",
      "at": "2026-10-08",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-square-integrability-of-sl2-r-discrete-series-matrix-coefficients",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "batch": "5",
      "source": "judge-sol",
      "evidence": [
        {
          "path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u5.json",
          "note": "F2 attributed Q_jk and Q_j0=(-r)^j to an interface asserting only the extremal coefficient and enveloping-algebra decay. The supplier Proof 1.1 and 2.1 actually derive Q_jk, so this is a nonfatal contract/citation mismatch. Added the Cayley substitution, uniformly convergent binomial expansion and angular coefficient extraction locally, including the norm beta constants used in the isometry. The KAK integral, dense extension, a.e. coefficient identification and antiunitary conjugation preserve the full theorem."
        },
        {
          "path": "items/thm-square-integrability-of-sl2-r-discrete-series-matrix-coefficients.md",
          "note": "Current itemHashGuard 5a3b884a878b7103a880e56b3d8e7aab7652b1424547c73e0b497d51377c1566; local repair review, no independent audit."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u5.json",
          "obligation": "thm-square-integrability-of-sl2-r-discrete-series-matrix-coefficients / gpt-6.1-sol / 79077dd9f8a686a98df90ebb212cc86c35c37c68a0407b2ce05d85a7cda15a54"
        }
      ],
      "observed_item_sha256": "ce0cbb719c52ec763203e35c4760acdc64a82930ba77e40c6fccb83e2f83e1a2",
      "observed_context_sha256": "79077dd9f8a686a98df90ebb212cc86c35c37c68a0407b2ce05d85a7cda15a54"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "f43-step7-initial-r1-u5-4",
      "run": "frontier-43-complex-representation-15",
      "at": "2026-10-08",
      "class": "accuracy",
      "subclass": "ill-typed-claim",
      "severity": "fatal",
      "location": "statement",
      "subject": "ex-parameter-identifications-in-the-sl2-r-unitary-dual",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "batch": "5",
      "source": "judge-sol",
      "evidence": [
        {
          "path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u5.json",
          "note": "The Statement equated the Hilbert group representations D_n^-/D_n^+ with the algebraic modules M^+_{-n}/M^-_n. Their actual interfaces identify only the algebraic K-finite spans; an infinite Hilbert completion is not its algebraic direct sum. Corrected Statement, F5 and step 3.1 to identify those K-finite modules and to name the weighted Hilbert completions separately, preserving every parameter, parity, endpoint and sign identification."
        },
        {
          "path": "items/ex-parameter-identifications-in-the-sl2-r-unitary-dual.md",
          "note": "Current itemHashGuard c970cf7837ac32a536ac204677c6823d3ac40e8f9e3ad6c09c1acd8a00d173b2; local repair review, no independent audit."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u5.json",
          "obligation": "ex-parameter-identifications-in-the-sl2-r-unitary-dual / gpt-6.1-sol / b26130a20cb8d3e29ecfe197fa0cf4433d73c005d7d09d75b84d61d5010a572b"
        }
      ],
      "observed_item_sha256": "fe5b195ca2cac86836ba71da6c7376f4fd050ec63bdcdefcb9bba88c7381a339",
      "observed_context_sha256": "b26130a20cb8d3e29ecfe197fa0cf4433d73c005d7d09d75b84d61d5010a572b"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "f43-step7-initial-r1-u5-5",
      "run": "frontier-43-complex-representation-15",
      "at": "2026-10-08",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "cor-the-unitary-dual-of-sl2-r-is-non-discrete-and-non-hausdorff-at-the-stated-limits",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "batch": "5",
      "source": "judge-sol",
      "evidence": [
        {
          "path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u5.json",
          "note": "F6 falsely attributes complementary/trivial distinctness to a Statement asserting convergence only. The supplier Proof 3.2 does establish distinctness via nontrivial K-types, so the issue is a nonfatal citation-interface mismatch. Restricted F6 to convergence and added the positive complementary norm a_2(r)=(1-r)/(1+r) and K-character of f_2 as an explicit prerequisite; the nonzero weight-two vector rules out a trivial intertwiner. Also made the odd-parameter convergence argument apply to all sufficiently small positive s, preserving the full stated limit rather than proving only a selected sequence."
        },
        {
          "path": "items/cor-the-unitary-dual-of-sl2-r-is-non-discrete-and-non-hausdorff-at-the-stated-limits.md",
          "note": "Current itemHashGuard 3fb1420f70aff9201fd8bd861a9ebec3e89eca0cf415cd14df793b648c0a35a2; local repair review, no independent audit."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u5.json",
          "obligation": "cor-the-unitary-dual-of-sl2-r-is-non-discrete-and-non-hausdorff-at-the-stated-limits / gpt-6.1-sol / 397f39790f119e798881f5cdbc5deb396c0b1d015f600fb0d70d11839631ac07"
        }
      ],
      "observed_item_sha256": "fbd291a6f56aceba72f4e2337ba1415c8da5a5492a474d892cca00bc1df3e533",
      "observed_context_sha256": "397f39790f119e798881f5cdbc5deb396c0b1d015f600fb0d70d11839631ac07"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "All five assigned items and all twelve direct item consumers of the changed Definition are draft members of the frozen frontier. The changed example has no direct item consumer. No published or outside-frontier consumer defect was discovered in this scoped examination; no published audit or repair is claimed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_resolved_defect",
    "id": "def-lie-bialgebra-and-root-graded-manin-triple",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "finding": "The missing bracket homogeneity is a fatal logical defect. On a=direct sum_{n>=0} k e_n, set [e_0,e_n]=e_0 for n>=1, extend by skew symmetry, and set all positive-positive brackets to zero. Jacobi on e_0,e_i,e_j gives e_0-e_0=0; triples with repeated entries or all positive entries also give zero. The zero cobracket makes a a Lie bialgebra. With c the abelian restricted dual in nonpositive degrees, both supports have finite degree decompositions and the evaluation pairing is degreewise perfect. Yet the bracket transpose of e_0^* evaluates to 1 on e_0 wedge e_n for every n>=1, so it cannot belong to the ordinary exterior square of c. Explicit degree preservation is therefore necessary for the stated automatic transpose construction.",
    "correction": "Added both degree-preserving bracket inclusions and specified Q as an additive abelian group. For x of degree gamma, pairing orthogonality leaves only opposite-side degree pairs alpha+beta=-gamma. Same-side finite decompositions leave finitely many such pairs; their finite-dimensional tensor and exterior determinant pairings give a unique representative in (Lambda^2 a)_gamma. Swapping the sides gives the other transpose, and finite homogeneous support allows linear extension. General Lie bialgebra axioms, duality identities, same-side finiteness, and the root-graded Manin-triple contract are preserved. No choice is introduced. Synchronized the owning manifest and its definition boundary evidence. This is the repair author's local review, not an independent audit.",
    "adjudication_ref": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u6.json",
    "uncertain": false,
    "source_urls": [
      "https://categorified.net/LieQuantumGroups.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update_required",
    "id": "def-lie-bialgebra-and-root-graded-manin-triple",
    "reason": "The direct dependency/reference search found exactly two draft frontier consumers and their draft owning page; no published or outside-frontier item directly consumes this changed definition. Both existing root-graded uses satisfy the explicit homogeneous-bracket requirement. No published defect was discovered or repaired.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-bruhat-order-basic-properties-for-permutations",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "Statement (e) falsely asserts its decomposition for noncomparable endpoints: in S_2, y=(0 1), w=id give [y,w]=empty, no eligible cover, and right side {y}. This is a logical falsehood, not a citation defect. Retained finiteness for all intervals and made only the decomposition conditional on y<=w; Proof 5.1 now explicitly uses y in [y,w].",
    "evidence_path": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u7.json",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "f43-step7-initial-r1-u8-semistandard-positions",
      "run": "frontier-43-complex-representation-15",
      "at": "2026-10-08T07:16:42.795936+00:00",
      "class": "accuracy",
      "subclass": "false-computation",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "ex-littlewood-richardson-coefficient-greater-than-one-for-outer-induction",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "finding": "Step 2.1 falsely allows the unique 2 at (1,4) for (4,1,1,1)/(2,1), leaving equal 1s at (3,1) and (4,1). The same error occurs at (1,3) for (3,2,2)/(2,1) and (3,2,1,1)/(2,1), leaving equal 1s at (2,2),(3,2) and (3,1),(4,1), respectively. This is nonfatal: all three erroneous candidates start their reading word with 2 and were already excluded in Step 3.1, so the LR counts and complete Statement remain correct. Removed all three candidates and explained the forced lower-column positions.",
      "adjudication_ref": "research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u8.json",
      "repair_cost": "inline-fix"
    }
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points",
  "def-holomorphic-and-antiholomorphic-discrete-series-models",
  "thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series",
  "cor-the-unitary-dual-of-sl2-r-is-non-discrete-and-non-hausdorff-at-the-stated-limits",
  "def-bruhat-interval-and-r-polynomials",
  "thm-r-polynomial-recursion-and-degree-bounds",
  "thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis",
  "def-inverse-kazhdan-lusztig-polynomials",
  "ex-beltrami-coefficient-of-an-inverse-map",
  "ex-hyperelliptic-canonical-divisors",
  "thm-kazhdan-lusztig-basis-multiplication-formula",
  "ex-kazhdan-lusztig-bases-for-s-two-and-s-three",
  "lem-the-weighted-discrete-series-space-is-a-hilbert-space",
  "thm-irreducibility-and-k-types-of-the-discrete-series",
  "ex-lowest-k-types-of-the-first-holomorphic-discrete-series"
]


