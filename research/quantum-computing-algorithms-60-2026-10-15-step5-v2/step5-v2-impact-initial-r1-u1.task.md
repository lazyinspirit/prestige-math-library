# Step 5 repair: impact-initial, round 1, unit 1

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/impact-initial-1.json.



Owner-confirmed Step-4 reader concerns assigned for genuine current review and smallest necessary repair (these are not judge rejections or downstream claims):
[
  {
    "id": "lem-qc-positive-choi-matrix-yields-kraus-operators",
    "batch": "5",
    "concern_index": 0,
    "concern": {
      "id": "lem-qc-positive-choi-matrix-yields-kraus-operators",
      "concern": "Proof 2.1 first discusses the '(i,α),(j,β) entry' of the Choi operator and then says 'The same entry of Σ_a K_a E_ij K_a†'. The latter operator acts on K and has indices (α,β), rather than product indices (i,α),(j,β). The displayed coefficient calculation is correct, but the entry comparison is mistyped; it should compare that Choi entry with the (α,β) entry of the Kraus output.",
      "severity": "presentation"
    },
    "before_guard_sha256": "1a90b4303ec4073a7aa12f13416a3fed430932507a3be8dcc704356ee8c22cf3",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-16T04:53:39.021352+00:00",
      "reason": "The two operators act on different spaces. A Choi entry has paired input/output indices, while K_a E_ij K_a dagger is an output-space operator. Its alpha,beta entry equals that Choi coefficient. The argument is sound after explicitly typing this entry; current Proof2.1 says the same entry without that distinction.",
      "evidence_file": "research/quantum-computing-algorithms-60-2026-10-15-owner-step4-concern-review/root-reviewed-candidates-1.json",
      "proposed_edits": [
        {
          "source_excerpt": "The same entry of $\\sum_aK_aE_{ij}K_a^\\dagger$ is",
          "proposed_replacement": "The $(\\alpha,\\beta)$ entry of $\\sum_aK_aE_{ij}K_a^\\dagger$ is"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-5-step5-context.json"
  },
  {
    "id": "thm-qc-diamond-norm-ancilla-dimension-bound",
    "batch": "6",
    "concern_index": 1,
    "concern": {
      "id": "thm-qc-diamond-norm-ancilla-dimension-bound",
      "concern": "Proof 1.2 introduces compressed Schmidt vectors x′,y′ and immediately uses 'each map I⊗V_x and I⊗V_y', but never defines V_x,V_y or their domains. The intended isometries C^m→Z sending the standard basis to the respective padded ancilla Schmidt families immediately close the argument. Their definition should precede the displayed compression identity.",
      "severity": "gap-a-reader-closes"
    },
    "before_guard_sha256": "cb5e9070105b9404577507214708ebbcc085be9603c7921546a4e99a8cfb1e86",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-16T04:53:39.021592+00:00",
      "reason": "Schmidt compression uses two distinct isometric ancilla embeddings. Current1.2 never defines V_x or V_y, although the following displayed equation uses both. Define V_x,V_y:C^m->Z by sending each standard basis vector to its respective padded orthonormal ancilla Schmidt vector, and define xprime,yprime from corresponding coefficients and H-side vectors. m<=min(dimH,dimZ) ensures the padding and embeddings exist. No statement change is needed.",
      "evidence_file": "research/quantum-computing-algorithms-60-2026-10-15-owner-step4-concern-review/root-reviewed-candidates-1.json",
      "proposed_edits": [
        {
          "source_excerpt": "obtaining $x',y'\\in H\\otimes\\mathbb C^m$. The tensor-map",
          "proposed_replacement": "obtaining $x',y'\\in H\\otimes\\mathbb C^m$. Define $V_x,V_y:\\mathbb C^m\\to Z$ to send the standard basis to the respective padded orthonormal ancilla Schmidt families, so $x=(I_H\\otimes V_x)x'$ and $y=(I_H\\otimes V_y)y'$. The tensor-map"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-6-step5-context.json"
  },
  {
    "id": "thm-qa-25-sparse-hamiltonian-block-encoding-correctness",
    "batch": "49",
    "concern_index": 0,
    "concern": {
      "id": "thm-qa-25-sparse-hamiltonian-block-encoding-correctness",
      "concern": "Facts [F5] attributes to def-qc-dirac-notation-conversion the formula that |u⟩⟨v| contributes matrix entry ⟨e_i,u⟩⟨v,e_j⟩. Under the explicitly stated root convention, linear in the first argument, this equals conjugate(u_i) v_j, whereas the cited definition gives u_i conjugate(v_j). For example, u=i e_1 and v=e_1 make [F5] give −i instead of i. Proof 2.1 uses the correct overlap order, so the theorem's conclusion survives, but the Facts block contains a false coordinate identity and misstates its supplier.",
      "severity": "would-be-fatal"
    },
    "before_guard_sha256": "d033cb9ec244248ad09246714b63fc8d830bc7c77bb4b15459b882518dcb3193",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-16T05:02:27.348Z",
      "reason": "Read complete sparse-block theorem and the explicit root linear-first pairing. For u=i e1,v=e1, the F5 expression gives-i while the rank-one operator matrix entry is i. Replace its coordinate ordering by <u,e_i><e_j,v>, which equals u_i conjugate(v_j). The actual overlap in2.1 already uses the right order, so no Statement or normalization change follows.",
      "evidence_file": "research/quantum-computing-algorithms-60-2026-10-15-owner-step4-concern-review/root-reviewed-candidates-5.json",
      "proposed_edits": [
        {
          "source_excerpt": "$\\langle e_i,u\\rangle\\langle v,e_j\\rangle$",
          "proposed_replacement": "$\\langle u,e_i\\rangle\\langle e_j,v\\rangle$"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-49-step5-context.json"
  },
  {
    "id": "thm-qa-28-matrix-function-error-cost",
    "batch": "52",
    "concern_index": 0,
    "concern": {
      "id": "thm-qa-28-matrix-function-error-cost",
      "concern": "The resource paragraph says, “Inside a single LCU SELECT call, the worst-path base-signal query count is max_{j∈J} d_j”; Proof 4.1 justifies this by considering one selected component. Clarify that this is a component-branch length, rather than the implemented circuit's oracle-occurrence count. The algorithm permits supplied or compiled SELECT implementations, and def-qa-22-block-encoding-access-model explicitly distinguishes them. A serial implementation using separately controlled component circuits can contain the sum of their signal-call counts even though each index sector activates only its own component. The existing separately charged SELECT-cost qualification protects the broader accounting, but the undefined “worst-path” query coordinate remains easy to confuse with the circuit query coordinate.",
      "severity": "presentation"
    },
    "before_guard_sha256": "2e6a5ad91e1c574dd5970d07ee88d79916033de603e8d58d209103ec36c55c38",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-16T05:02:27.348Z",
      "reason": "Read full matrix-function resource proof. Its max_j d_j counts the length of a selected component branch, whereas an implemented serial controlled SELECT can contain sum_j d_j signal occurrences. The existing separately charged implementation qualification must remain. Rename this component-branch length and explicitly distinguish actual implementation oracle occurrences in both Statement and4.1, retaining all error estimates and supplied access costs.",
      "evidence_file": "research/quantum-computing-algorithms-60-2026-10-15-owner-step4-concern-review/root-reviewed-candidates-5.json",
      "proposed_edits": [
        {
          "source_excerpt": "the worst-path base-signal query count is $\\max_{j\\in J} d_j$",
          "proposed_replacement": "the maximum selected-component branch length is $\\max_{j\\in J} d_j$; this is not an implementation oracle-occurrence count, which is charged by the supplied SELECT circuit and may equal the sum of separately controlled component counts"
        },
        {
          "source_excerpt": "so no path uses more than $\\max_{j\\in J}d_j$ base signal calls in that SELECT.",
          "proposed_replacement": "so its selected-component branch has at most $\\max_{j\\in J}d_j$ signal calls. The implemented SELECT circuit may contain the sum of separately controlled component occurrences; its actual oracle-occurrence count remains separately charged."
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-52-step5-context.json"
  },
  {
    "id": "def-qa-16-input-mismatch-matrices",
    "batch": "40",
    "concern_index": 3,
    "concern": {
      "id": "def-qa-16-input-mismatch-matrices",
      "concern": "The definition is headed '## Statement' rather than the prescribed '## Definition'.",
      "severity": "presentation"
    },
    "before_guard_sha256": "e15527384986f173b35e26c296084cf031450a25c2b0142ad2feb46559156baf",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-16T05:03:39.895Z",
      "reason": "Read actual frontmatter and body headings. This source is kind definition and has a def- identity, but its defining object is headed Statement. SCHEMA requires Definition for that class. Change only that heading, preserving every defining word, proof, dependency and identity. This is a mechanical source classification correction, not a mathematical rereview.",
      "evidence_file": "research/quantum-computing-algorithms-60-2026-10-15-owner-step4-concern-review/root-reviewed-candidates-6.json",
      "proposed_edits": [
        {
          "source_excerpt": "## Statement",
          "proposed_replacement": "## Definition"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-40-step5-context.json"
  },
  {
    "id": "def-qa-16-query-address-projectors",
    "batch": "40",
    "concern_index": 4,
    "concern": {
      "id": "def-qa-16-query-address-projectors",
      "concern": "The definition is headed '## Statement' rather than the prescribed '## Definition'.",
      "severity": "presentation"
    },
    "before_guard_sha256": "e7362501f317d0f08e49131fbac78adbb2f19678a8efc647b25ec15eb5d3ce95",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-16T05:03:39.896Z",
      "reason": "Read actual frontmatter and body headings. This source is kind definition and has a def- identity, but its defining object is headed Statement. SCHEMA requires Definition for that class. Change only that heading, preserving every defining word, proof, dependency and identity. This is a mechanical source classification correction, not a mathematical rereview.",
      "evidence_file": "research/quantum-computing-algorithms-60-2026-10-15-owner-step4-concern-review/root-reviewed-candidates-6.json",
      "proposed_edits": [
        {
          "source_excerpt": "## Statement",
          "proposed_replacement": "## Definition"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-40-step5-context.json"
  },
  {
    "id": "def-qa-16-general-adversary-bound",
    "batch": "40",
    "concern_index": 6,
    "concern": {
      "id": "def-qa-16-general-adversary-bound",
      "concern": "The definition is headed '## Statement' rather than the prescribed '## Definition'.",
      "severity": "presentation"
    },
    "before_guard_sha256": "048dc600f2cb6119f8cf9d14c4e3949ee288e4bd5f2868c45f36989f00edface",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-16T05:03:39.896Z",
      "reason": "Read actual frontmatter and body headings. This source is kind definition and has a def- identity, but its defining object is headed Statement. SCHEMA requires Definition for that class. Change only that heading, preserving every defining word, proof, dependency and identity. This is a mechanical source classification correction, not a mathematical rereview.",
      "evidence_file": "research/quantum-computing-algorithms-60-2026-10-15-owner-step4-concern-review/root-reviewed-candidates-6.json",
      "proposed_edits": [
        {
          "source_excerpt": "## Statement",
          "proposed_replacement": "## Definition"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-40-step5-context.json"
  },
  {
    "id": "alg-qa-23-polynomial-root-isolation",
    "batch": "47",
    "concern_index": 0,
    "concern": {
      "id": "alg-qa-23-polynomial-root-isolation",
      "concern": "Instruction 6 says: “Test common-root membership by a gcd followed by the same certified rectangle count.” Admissibility for q does not imply admissibility for that gcd. For a concrete rational example put ε=1/16, p(z)=(z²+1)²((z-ε)²+4), and q(z)=(z²+1)((z-ε)²+4). The rectangle R=(0,1/8)+i(15/8,17/8) contains exactly the simple root ε+2i, has diameter²=5/64<1/4, and is admissible for q: its boundary contains none of q's four roots, all four vertex imaginary values are nonzero, and no edge imaginary restriction is identically zero. At m=1, gcd(q,p')=z²+1. On R's left edge z=iy, this gcd is real throughout, so its imaginary restriction is identically zero and both left-vertex imaginary values vanish. The stipulated rectangle-count routine therefore cannot be invoked there. Root-free boundaries alone do pass to a divisor, but the additional imaginary-part conditions do not. Nonzero constant gcds likewise need a zero-count branch. I have not established that this particular rectangle is selected by the deterministic schedule; it disproves the unstated inheritance implication needed by instruction 6. Neither that instruction nor thm-qa-23-polynomial-root-isolation-correctness supplies a new admissibility procedure for these gcd recounts. This leaves multiplicity correctness/termination unsupported as written, and the bounded-grid algorithm inherits the same multiplicity test.",
      "severity": "would-be-fatal"
    },
    "before_guard_sha256": "0e4fa71e5472576722a2675212361f19be0f70b40e5ff1295f8c3f7bcbd2a9e1",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-16T05:12:03.352492+00:00",
      "reason": "Root read actual ROOTS coefficient model and instruction6, the complete advisor symbolic witness and finite nine-scalar proof. A divisor of q inherits boundary root-freeness but not nonzero imaginary vertices or nonidentically-zero edge imaginary parts. The witness confirms the unsupported inheritance. For nonconstant gcd h, each of four vertex and four edge conditions forbids at most one real t in (1+it)h, so nine integer candidates suffice; a constant gcd has zero roots. This keeps exact algebraic access, unchanged isolators and polynomial rational arithmetic. Native owner must check actual ROOTS/GRID-ROOTS suppliers, resource proofs and full affected consumers after applying the proposal.",
      "evidence_file": "research/quantum-computing-algorithms-60-2026-10-15-owner-step4-concern-review/root-reviewed-candidates-8.json",
      "candidate_patch_file": "research/quantum-computing-algorithms-60-2026-10-15-owner-step4-concern-review/root-gcd-gap/candidate.patch"
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-47-step5-context.json"
  }
]. Review the bound original digest and individual owner evidence; repair confirmed presentation defects as well as mathematical defects. Return ordinary reviews, with no adjudication decision for these concerns. Only actual Statement/Definition changes propagate consumer examinations.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"impact-initial",round:1,unit:"1",input_sha256:"ded3131180e20538696e136acdfffe7eb154416c983d217194d72e4865bab2f4",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "defect",
    "id": "alg-qc-two-level-unitary-elimination",
    "classification": "false_positive",
    "status": "dismissed",
    "locus": "claimed absence of separate correctness supplier",
    "finding": "The already present thm-qc-two-level-unitary-elimination-correct proves elimination, diagonality, reconstruction and termination. No item or metadata edit is necessary."
  },
  {
    "ledger": "defect",
    "id": "thm-qc-one-qubit-euler-decomposition",
    "classification": "nonfatal",
    "status": "fixed",
    "locus": "facts-block and proof step 3.1",
    "finding": "F3 incorrectly ascribed sign statements to a supplier stating only monotonicity and ranges. Added the actual quarter-turn supplier and derived positivity on (0,pi), negativity on (pi,2pi), and the cosine sign cutoff from the stated monotonicity and endpoint values. Determinant normalization, orthogonal second column, exact ZYZ multiplication and zero-coordinate phases check directly. Statement unchanged; this is a nonfatal elementary citation/derivation repair."
  },
  {
    "ledger": "defect",
    "id": "thm-qc-multicontrolled-ancilla-resource-tradeoff",
    "classification": "nonfatal",
    "status": "fixed",
    "locus": "F3 and proof step 1.1",
    "finding": "Polar form does not itself state a square-root theorem. F3 now quotes polar form accurately and step 1.1 constructs mu=cos(t/2)+i sin(t/2), proves mu^2=lambda using the cited addition formulas, and obtains unit modulus from |mu|^2=|lambda|. The clean-bit identity, borrowed-target use, recursion exponent b-(b XOR A)+A=2Ab, and disconnected-component lower bound remain sound. This is a nonfatal routine derivation repair; the Statement and its ancilla hypotheses are unchanged."
  },
  {
    "ledger": "defect",
    "id": "alg-qc-two-level-gate-to-elementary-gates",
    "classification": "fatal",
    "defect_type": "other",
    "status": "fixed",
    "locus": "Definition, omitted multicontrol expansion instructions",
    "finding": "The original Definition requested a literal output but did not identify executable multicontrol expansions. Added explicit S and Toffoli lists, finite borrowed ladders, balanced borrowed-wire calls, decreasing-control square-root recursion and clean compute/apply/uncompute, with admissible exact operations and fixed inverse choices. This repairs an incomplete procedure (fatal other), while preserving the ordered Gray path, phase and exact resource convention. These routine constructions use existing suppliers; no new prerequisite item is needed."
  },
  {
    "ledger": "defect",
    "id": "thm-qc-two-level-gate-synthesis-correct",
    "classification": "nonfatal",
    "status": "fixed",
    "locus": "F8/F9 and proof steps 1.2-2.3",
    "finding": "F8 and F9 overstated their quoted Statement interfaces, although their full local proofs contain the listed constructions and the exact numbers are correct. Replaced those fact claims with the actual interfaces. The expanded algorithm Definition now supplies literal lists; the proof directly verifies their control branches, XOR ladder invariant, borrowed-wire identity, recursion, termination and E/B/Q/K counts. Clean-workspace reasoning now explicitly concerns input work bit zero. This nonfatal citation/proof-presentation repair preserves every Statement formula and bound."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qc-fixed-dimension-interval-arithmetic",
    "action": "record-adjudication",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "defect_type": "dependency_citation",
    "reason": "Confirmed unsupported representation/time inference: the published abstract effective decoder supplies no computational guarantee. Specified signed binary numerator/positive-denominator output with a fixed delimiter and charged complete output length, and clarified F1. The O(L) scan plus O(q^2) shortened division now follows directly; the numerical bounds, zero square root, conditioned normalization, series tails and fixed-degree algebraic bisection remain valid.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u12.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "alg-qc-solovay-kitaev-unitary-compiler",
    "action": "record-adjudication",
    "outcome": "false_positive",
    "status": "false-positive",
    "defect_type": null,
    "reason": "False positive: algorithm Definition step 2 expressly invokes the Pauli-coordinate construction in lem-qc-su2-balanced-commutator. That proof 1.1 chooses the smallest minimizing coordinate k, forms u=v/|v| and e=(u cross e_k)/|u cross e_k|, and defines a=sqrt(|v|/2)e, b=-sqrt(|v|/2)(u cross e); proof 2.1 sets V=exp(i a.sigma), W=exp(i b.sigma). This is a deterministic selection, not an appeal to bare existence. Its zero branch, norm bounds and error estimate apply at every recursive residual. No item edit.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u12.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qc-solovay-kitaev-error-and-resource-bound",
    "action": "record-adjudication",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "defect_type": "dependency_citation",
    "reason": "Confirmed domain mismatch: the original theorem quantified real epsilon while its Given and the algorithm top-level interface permitted only rational tolerances. Preserved the real guarantee by specifying direct execution of the existing Compile(U,J) subroutine, with J selected by ideal exact-real comparisons. Proof 3.1 supplies a finite least J for every positive real tolerance; the levelwise error induction and resource recurrences are independent of its rationality. O(J+1) level-selection work is absorbed in O(3^J).",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u12.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qc-controlled-phase-approximation",
    "action": "record-adjudication",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "defect_type": "logic",
    "reason": "Confirmed false necessity claim: diag(1,mu) on the outer control multiplies C(W) to C(mu W), and the difference from C(CP_theta) is diag(0,CP_theta-mu W), whose norm equals the two-qubit error. Replaced must-compile-the-three-qubit-block with two sufficient routes, proved the corrected approximation explicitly, and retained the supplied seven-phase/ten-CNOT full-block factorization. Stated 0<epsilon<1/2 from the fixed-arity supplier and kept controlled access and phase-gate availability/cost caveats.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u12.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record-no-published-repair",
    "reason": "All directly examined item consumers of the three changed interfaces are draft frozen-frontier items. No published item was edited or found to depend directly on these changed interfaces; no published-repair receipt or Step-5 adjudication/gate is proposed for published carriers."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qc-solovay-kitaev-bit-complexity",
    "action": "route-unassigned-owner-concern",
    "status": "owner-followup",
    "affected_use": "Proof 5.1 claims additive guard precision across derived-name square-root layers, citing interval F4.",
    "reason": "Unassigned owner follow-up from the rejection-blind Step-4 digest, independently checked against current proof: thm-qc-solovay-kitaev-bit-complexity proof 5.1 adds guard precision through square roots, whereas its F4 proof 2.1 uses twice the input precision. In the balanced branch x=r/2>tau_j/2; require a positive approximation y>=x/2. Then |sqrt(x)-sqrt(y)|=|x-y|/(sqrt(x)+sqrt(y))<=|x-y|/sqrt(x), so b+O(log(1/tau_j))+O(1) input bits suffice. State and use this conditioned estimate before summing branch guard bits. No edit/adjudication of this unassigned item; its owner receives exact affected uses in downstream_reviews."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_false_positive_closure",
    "ids": [
      "lem-qc-dyadic-cyclotomic-unit-circle",
      "alg-qc-rz-efficient-scaled-grid-iterator",
      "thm-qc-cyclotomic-norm-equation-decision",
      "cor-qc-cyclotomic-prime-norm-solvability",
      "thm-qc-factored-cyclotomic-norm-equation-efficient",
      "thm-qc-rz-efficient-scaled-grid-enumeration",
      "alg-qc-cyclotomic-scaled-grid-and-norm-solver",
      "alg-qc-exact-single-qubit-clifford-t-synthesis",
      "thm-qc-exact-clifford-t-synthesis-optimality"
    ],
    "reason": "Preserve every original rejected tuple and close these nine objections as false positives using the item-specific mathematical evidence in decisions. No item edit or independent judgment is asserted for any of these unchanged carriers.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_adjudication",
    "id": "lem-qc-rz-candidate-norm-integer",
    "model": "gpt-6-luna",
    "context_sha256": "d42922ae9e28685dedfb02a5c96ea21f1e2fc7fc3af454d12182e31f10a1810e",
    "outcome": "confirmed_nonfatal",
    "resolution": "fixed",
    "reason": "F3 omits the nonzero restriction on k and imprecisely describes the linked coefficient result. The proof itself uses k only for nonzero u in step 4.1; zero is handled separately with n=1. Qualified F3 explicitly by u nonzero, stated its actual nonnegative-exponent/coefficient interface, and retained sde(0)=-infinity. The delta-parity proof and all conclusions are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_adjudication",
    "id": "lem-qc-rz-scaled-grid-growth",
    "model": "gpt-6-luna",
    "context_sha256": "0fd9a46dc9d2214def5f215bbb5f09973340e139fcd1a765defc413e73aae56b",
    "outcome": "confirmed_nonfatal",
    "resolution": "fixed",
    "reason": "The statement leaves theta and the general grid exponent k implicit. Explicitly quantified theta as real and k as integer, preserving every bound and the proof. Unit-power rounding works for every integer k, and interpolation gives the same infinite sequence and k_j bounds. This is a quantifier clarification, with no lost or strengthened mathematical content.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no_update",
    "reason": "Neither assigned repair changes a published supplier or affects a published consumer. Growth has exactly two direct item consumers, both draft frontier items with unchanged valid uses; no published mathematics defect was discovered in the consulted prerequisite interfaces.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_owner_route",
    "id": "thm-qc-single-qubit-exact-clifford-t-characterization",
    "resolution": "open-outside-assignment",
    "reason": "The F4 ring-unit wording is false: 2 belongs to D and has inverse 1/2, but is not a root of unity. The actual application has |lambda|=1 by unitarity and is sound. Change F4 to unit-modulus elements of D (or state lambda times its conjugate equals 1); no theorem Statement or downstream mathematics needs changing. Item is unassigned and was not edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "row": {
      "defect_id": "qc60-step5-initial-r1-u14-acceptance-pairing",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-qc-quantum-acceptance-probability",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "14",
      "repair_cost": "inline-fix",
      "reason": "The tensor-register supplier names the complete register pairing with subscript tensor, whereas root names the coordinate/factor pairing. The acceptance Definition did not explicitly identify its root symbol with that complete-register pairing. This is a recoverable notation defect, not an incorrect Born weight: the ordered orthonormal product basis and linear-first convention uniquely determine the intended pairing, and the trace formula already specifies the same probabilities. Added the explicit local alias root := tensor on the reordered complete register. The amplitudes are now typed on the supplied space, including empty registers; no probability, predicate, or hypothesis changes.",
      "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u14.json",
      "post_sha256": "88eb44b4c090c46182cc3a6f4a1c94394239f4e73e76d915dcefce5cd937301e"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u15-pauli-justification",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "at": "2026-10-16T05:30:02.656798+00:00",
    "class": "accuracy",
    "subclass": "citation-missing",
    "severity": "nonfatal",
    "location": "frontmatter",
    "subject": "def-qc-phase-aware-n-qubit-pauli-group",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "batch": "15",
    "reason": "The missing declaration is a nonfatal justification-metadata defect: thm-qc-pauli-product-and-adjoint already proves the advertised properties from this definition, one-qubit anticommutation, and tensor composition/adjoints. Its steps 1.1–3.2 give closure, identity and inverses; step 4.1 forces every central label to have x=z=0 by commuting with each X_j and Z_j. SCHEMA.md requires this reverse well-definedness link in justified_by, not deps, which would create a cycle. Added that justified_by target to the item and its owning manifest without changing the Definition.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u15.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u16-projector-citation",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:34:13.301140+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-qc-pauli-measurement-projectors",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "correction": "F2 asserts multiplication laws not stated by its linked definition; step 1.1 now expands the row-by-column finite sum. Step 2.2 explicitly verifies self-adjointness of the nonnegative sandwich.",
      "before_guard_sha256": "bd24c6246d91dfbfb93b39ecd66c6e8279995a2ebee0bf82f62bb07bd9ef52fe",
      "post_guard_sha256": "8313e4786628299a6771812d19904d99b7cb3f80a31039ee1f2a47847930cbb7",
      "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u16.json"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u16-subgroup-discharge",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:34:13.301140+00:00",
      "class": "accuracy",
      "subclass": "frontmatter-schema",
      "severity": "nonfatal",
      "location": "frontmatter",
      "subject": "def-qc-stabilizer-subgroup",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "correction": "The label-space-and-order lemma is a later discharge of the advertised consequences, with a dependency on this definition. It is now registered in justified_by, preserving the acyclic deps graph.",
      "before_guard_sha256": "46e3db64190f5339d4d1cb907b8c149eb23f57e89def1bd3362abef5b4601f55",
      "post_guard_sha256": "0b1b95c1768da79f3db9049099b2e3d1f29e400664bbf6e4cf6926a77310202c",
      "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u16.json"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u16-tensor-normalization",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:34:13.301140+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-qc-computational-basis-stabilizer-tableau",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "correction": "F4 supplies orthonormality of each Q_2, not of its tensor power. Added F10 and the existing tensor-register dependency; the product pairing proves full-register normalization, including the empty tensor. Explicit Hermitian involutions and subset-product reduction establish the tableau conditions.",
      "before_guard_sha256": "d686647339a2466785dbadfe13b645de6a797e875fe41dea07127448619ca516",
      "post_guard_sha256": "af3942f01b6ee515c3d7e5f89654d12e6d288aa6f0120e0dc543e9f847404cbc",
      "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u16.json"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No Statement or Definition changed, no published item was edited, and this review identified no potentially defective published consumer. The inspected published matrix, trace, and positivity suppliers suffice for their exact stated interfaces; attribution repairs belong to the assigned draft consumers."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "subject": "thm-qc-computational-basis-orthonormal",
    "severity": "nonfatal",
    "location": "facts-block",
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "disposition": "fixed",
    "description": "F3 named only the positive-dimensional Q_d convention although Proof 3.1 invoked the distinct empty-factor convention. The cited definition explicitly supplies that convention, so this is a nonfatal fact-scope omission. F3 now includes C with basis {1} for zero qubits; step 3.1 now correctly distinguishes it from C^0. Steps 1.1–2.1 still compute Kronecker-delta pairings and invoke the standard-basis lemma. The Statement is unchanged.",
    "evidence": [
      {
        "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u2.json",
        "anchor": "decisions[1] and reviews[1]"
      }
    ],
    "reason": "F3 named only the positive-dimensional Q_d convention although Proof 3.1 invoked the distinct empty-factor convention. The cited definition explicitly supplies that convention, so this is a nonfatal fact-scope omission. F3 now includes C with basis {1} for zero qubits; step 3.1 now correctly distinguishes it from C^0. Steps 1.1–2.1 still compute Kronecker-delta pairings and invoke the standard-basis lemma. The Statement is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "subject": "def-qc-tensor-map",
    "severity": "nonfatal",
    "location": "facts-block",
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "disposition": "fixed",
    "description": "The original mathematics is supported by the supplier’s generic Facts F6 and by F2’s universal property. However, the F1 proof contract binds only def-qc-tensor-register-and-permutation’s Definition, whose interface requires specified inner products and orthonormal bases. This is a nonfatal citation-contract mismatch, not an unsatisfied algebraic prerequisite. F1 now cites the general tensor construction and complex-module structure directly; Proof 2.1 explicitly handles zero source and target factors and empty-family uniqueness. The Definition is unchanged.",
    "evidence": [
      {
        "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u2.json",
        "anchor": "decisions[2] and reviews[2]"
      }
    ],
    "reason": "The original mathematics is supported by the supplier’s generic Facts F6 and by F2’s universal property. However, the F1 proof contract binds only def-qc-tensor-register-and-permutation’s Definition, whose interface requires specified inner products and orthonormal bases. This is a nonfatal citation-contract mismatch, not an unsatisfied algebraic prerequisite. F1 now cites the general tensor construction and complex-module structure directly; Proof 2.1 explicitly handles zero source and target factors and empty-family uniqueness. The Definition is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "subject": "def-qc-register-and-computational-basis",
    "disposition": "false-positive",
    "description": "The references “below” resolve within the owning page registers-tensor-products-and-partial-trace: def-qc-tensor-register-and-permutation supplies the later construction, and lem-qc-tensor-product-basis-and-dimension proves the product-basis assertion. The definition already fixes the algebraic tensor product and empty unit through its published suppliers. No local theorem is missing from the page and no mathematical claim requires alteration.",
    "reason": "The references “below” resolve within the owning page registers-tensor-products-and-partial-trace: def-qc-tensor-register-and-permutation supplies the later construction, and lem-qc-tensor-product-basis-and-dimension proves the product-basis assertion. The definition already fixes the algebraic tensor product and empty unit through its published suppliers. No local theorem is missing from the page and no mathematical claim requires alteration.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No published mathematical defect or supplier-interface change was found in this assignment. All suppliers remained read-only. The digest alert concerns a draft outside this lane; its current proof already handles the zero-dimensional case explicitly. No published repair is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "phase": "5-adjudicate",
    "round": 1,
    "unit": "20",
    "item": "def-qc-css-code-from-nested-binary-codes",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Confirmed a nonfatal dependency-citation gap: Q_d orthonormality alone does not equip the algebraic n-qubit tensor product with its pairing. F3 now explicitly applies def-qc-tensor-register-and-permutation and lem-qc-tensor-product-basis-and-dimension to the orthonormal Q_2 factors. Disjoint cosets then give unit, orthogonal sums; finite basis extension gives 2^k labels including k=0, without AC. Definition unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u20.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "phase": "5-adjudicate",
    "round": 1,
    "unit": "20",
    "item": "lem-qc-binary-dual-dimension",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Confirmed nonfatal indexing defect: the coordinate dot product uses positions 0,...,n-1, whereas step 1.1 named e_1,...,e_n and asserted a nonexistent y_n. Reindexed both bases to e_0,...,e_(n-1) with explicit 0<=i<n. J is now the coordinate-duality isomorphism; finite basis extension makes restriction onto C*, and rank-nullity gives dim C-perp=n-dim C, also for C=0 and C=F_2^n, without AC. Statement unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u20.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "phase": "5-adjudicate",
    "round": 1,
    "unit": "20",
    "item": "alg-qc-stabilizer-encoder-by-symplectic-elimination",
    "outcome": "false_positive",
    "severity": null,
    "disposition": "false-positive",
    "reason": "False positive for the assigned algorithm: the separate thm-qc-stabilizer-encoder-correctness already states and proves DG_iD*=+Z_i and the encoded logical basis. The listed termination discharge also proves the pivot invariant in steps 1.1-2.1. Exact H/S-adjoint/CNOT phase rules, invertible generator row operations, and zero-based-to-one-based wire translation preserve the signed input products; r=0 returns empty data. The final logical label basis specifies the procedure output. Missing this additional theorem in justified_by is not a missing proof of the procedure or a required new result. Carrier unchanged; a separate citation defect in the unassigned correctness theorem is routed below.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u20.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "phase": "5-adjudicate",
    "round": 1,
    "unit": "20",
    "item": "thm-qc-stabilizer-distance-detection-and-correction",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Confirmed nonfatal omitted k=0 qualification in F1: the finite minimum applies for k>0, while k=0 has d=+infinity and N(S)=Z_nS. The repaired compression proof separates these cases explicitly. Also repaired the Step-4 concern: unscaled Pauli errors are not channel Kraus operators; E_a/sqrt(m) define a trace-preserving random-unitary channel, and the cited KL off-diagonal formula gives one recovery for every individual Pauli. Explicit conjugate-coefficient expansion proves scalar compression for the actual channel Kraus span. Nonzero code follows from the projector theorem, including k=0. Statement unchanged; all gaps are routine qualifications/normalization, with no new substantive prerequisite.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u20.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "phase": "5-adjudicate",
    "round": 1,
    "unit": "20",
    "item": "thm-qc-stabilizer-distance-detection-and-correction",
    "severity": "nonfatal",
    "disposition": "fixed",
    "locus": "proof-step 2.1",
    "reason": "Step-4 batch-20 digest concern 0 is confirmed: the unscaled Pauli family is generally not trace-preserving. The repaired proof applies the channel-only KL theorem to E_a/sqrt(m) and uses its off-diagonal recovery formula to recover each individual unscaled unitary error.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u20.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "phase": "5-adjudicate",
    "round": 1,
    "unit": "20",
    "item": "thm-qc-stabilizer-encoder-correctness",
    "status": "draft",
    "severity": "nonfatal",
    "disposition": "open",
    "route": "frontier owner; unassigned item, no edit by this unit",
    "path": "items/thm-qc-stabilizer-encoder-correctness.md",
    "source_excerpt": "[F9] [[thm-qc-computational-basis-orthonormal]]: the ordered computational\nbasis of each finite qubit register is orthonormal.",
    "affected_use": "Proof 4.1 invokes F9 for the n-qubit physical basis and the (n-r)-qubit logical basis, although the linked theorem states orthonormality only for Q_d coordinate registers.",
    "invalidated_claim": "The cited interface does not directly justify orthonormality for the algebraic tensor register. The conclusion remains true under the existing ordered tensor inner product.",
    "minimality": "Add the existing tensor-register pairing and product-basis lemma to deps and qualify F9, as in the assigned CSS repair; no Statement change or new result is needed. This finding does not invalidate the encoder procedure or the separate signed-check proof in correctness steps 1.1-3.1.",
    "reason": "Separate unassigned citation gap found while checking whether the alleged absent correctness theorem exists. The complete local proof was inspected; owner reconciliation is required, without treating this report as an adjudication of that item.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u20.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "No published carrier was edited and no defective published consumer was established. The additional encoder-correctness citation finding concerns an unassigned draft frontier item and belongs to owner work, not the published ledger.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "entry": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u21-1",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "invalid-inference",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "lem-qc-t1-truncated-exrec-witness-reduction",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "subclass_note": "Step-5 initial round 1 unit 21: confirmed_fatal. Full mathematical evidence and exact repaired step are in decisions/reviews/repair_notes for lem-qc-t1-truncated-exrec-witness-reduction in the referenced report; this proposal records a local repair, not independent acceptance.",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u21.json",
          "anchor": "lem-qc-t1-truncated-exrec-witness-reduction"
        }
      ],
      "item_sha256": "7ec45a30edca9b0a1bc0a639aa2688b14a063ac5a663506a1e8dae4c539f2d63"
    },
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "entry": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u21-2",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-qc-planar-mw-recovery-failure-yields-half-error-path",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "subclass_note": "Step-5 initial round 1 unit 21: confirmed_nonfatal. Full mathematical evidence and exact repaired step are in decisions/reviews/repair_notes for lem-qc-planar-mw-recovery-failure-yields-half-error-path in the referenced report; this proposal records a local repair, not independent acceptance.",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u21.json",
          "anchor": "lem-qc-planar-mw-recovery-failure-yields-half-error-path"
        }
      ],
      "item_sha256": "3e88d90fe6b7bba928a37c473408d7e2179da239c45b4879bb54dc17acb3eb76"
    },
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "entry": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u21-3",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-qc-ft-gadget-and-proper-code-contract",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "subclass_note": "Step-5 initial round 1 unit 21: confirmed_nonfatal. Full mathematical evidence and exact repaired step are in decisions/reviews/repair_notes for def-qc-ft-gadget-and-proper-code-contract in the referenced report; this proposal records a local repair, not independent acceptance.",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u21.json",
          "anchor": "def-qc-ft-gadget-and-proper-code-contract"
        }
      ],
      "item_sha256": "9a2db3577dd831f4c3587f366e4bdd81c9589a7ad4d1f96ce10f82afc078490a"
    },
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_false_positive",
    "subject": "lem-qc-verified-steane-magic-state-and-injection",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "phase": "initial",
    "round": 1,
    "unit": "21",
    "reason": "The cited supplier Proof explicitly contains the rejected construction; exact proof-step locators and mathematical checks are recorded in this report for lem-qc-verified-steane-magic-state-and-injection. No item edit.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u21.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "entry": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u21-5",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-qc-level-r-good-and-bad-rectangles",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "subclass_note": "Step-5 initial round 1 unit 21: confirmed_nonfatal. Full mathematical evidence and exact repaired step are in decisions/reviews/repair_notes for def-qc-level-r-good-and-bad-rectangles in the referenced report; this proposal records a local repair, not independent acceptance.",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u21.json",
          "anchor": "def-qc-level-r-good-and-bad-rectangles"
        }
      ],
      "item_sha256": "3d8da126f8a8b8547e5be7e37351fb0d97952c749a235eae5d98bba293ca4187"
    },
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_false_positive",
    "subject": "lem-qc-verified-steane-initialization-and-readout",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "phase": "initial",
    "round": 1,
    "unit": "21",
    "reason": "The cited supplier Proof explicitly contains the rejected construction; exact proof-step locators and mathematical checks are recorded in this report for lem-qc-verified-steane-initialization-and-readout. No item edit.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u21.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "entry": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u21-7",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "false-or-overstrong-statement",
      "severity": "fatal",
      "location": "statement",
      "subject": "lem-qc-recursive-bad-rectangle-probability",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "subclass_note": "Step-5 initial round 1 unit 21: confirmed_fatal. Full mathematical evidence and exact repaired step are in decisions/reviews/repair_notes for lem-qc-recursive-bad-rectangle-probability in the referenced report; this proposal records a local repair, not independent acceptance.",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u21.json",
          "anchor": "lem-qc-recursive-bad-rectangle-probability"
        }
      ],
      "item_sha256": "bbbabb329fed3b59e8c8fce6dd0d7250c14becc71852101f150dbcb36e9cc6d1"
    },
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_false_positive",
    "subject": "thm-qc-explicit-proper-code-and-universal-gadgets",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "phase": "initial",
    "round": 1,
    "unit": "21",
    "reason": "The cited supplier Proof explicitly contains the rejected construction; exact proof-step locators and mathematical checks are recorded in this report for thm-qc-explicit-proper-code-and-universal-gadgets. No item edit.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u21.json",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record_no_published_repair",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "reason": "All assigned subjects and every direct consumer of the three changed interfaces are draft members of the frozen frontier. No published item was edited or given adjudication/gate obligations; no outside consumer was discovered in the exact ID dependency/reference search.",
    "subjects": [
      "lem-qc-t1-truncated-exrec-witness-reduction",
      "lem-qc-planar-mw-recovery-failure-yields-half-error-path",
      "def-qc-ft-gadget-and-proper-code-contract",
      "lem-qc-verified-steane-magic-state-and-injection",
      "def-qc-level-r-good-and-bad-rectangles",
      "lem-qc-verified-steane-initialization-and-readout",
      "lem-qc-recursive-bad-rectangle-probability",
      "thm-qc-explicit-proper-code-and-universal-gadgets"
    ],
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u21.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-qc-adaptive-measurement-pattern",
    "status": "fixed",
    "severity": "nonfatal",
    "stage": "5-adjudicate",
    "finding": "Confirmed nonfatal citation defect: def-qc-elementary-circuit-resources defines gate size, declared depth, all-wire width and optional costs, but never a measurement-occurrence convention. The pattern already lists exactly the q distinct vertices of V\\O and measures each once, so q is a literal finite count, including q=0; no mathematical conclusion or prerequisite theorem is missing. The repair states this counting convention locally and limits the resource citation to width |V|.",
    "evidence": "items/def-qc-adaptive-measurement-pattern.md#Definition; items/def-qc-elementary-circuit-resources.md#Definition",
    "adjudication_ref": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u22.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qc-pattern-is-measurement-circuit",
    "status": "open",
    "severity": "nonfatal",
    "finding": "Branch/instrument equivalence remains sound, but Statement and F5 independently repeat the same unsupported measurement-accounting attribution. Proof 1.1 already counts one occurrence per listed vertex. Cite the repaired pattern definition for q, retain the elementary-resource citation for width/gate/suffix costs, and adjust F5 accordingly. This is an existing nonfatal citation defect, not a changed branch interface.",
    "affected_use": "[F5] The resource convention counts declared gate occurrences, wires, and measurement occurrences as separate coordinates ([[def-qc-elementary-circuit-resources]]).",
    "invalidated_claim": "Attribution of a measurement-occurrence coordinate to def-qc-elementary-circuit-resources, which defines no such coordinate.",
    "minimality": "Change only the resource citation/qualification in the Statement and F5; keep every count and the branch-equivalence proof. Statement text would change, requiring its ordinary next direct hop only in its owner lane.",
    "route": "frontier owner lane"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "All five discovered direct item consumers are draft frozen-frontier items. No published direct consumer or published defect was found in this interface examination."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposal",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "subject": "def-qc-bqtisp-model",
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "severity": "nonfatal",
    "location": "definition",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "group-alpha",
    "disposition": "fixed",
    "evidence": "VMW §2.3.1 assigns current operations to the control state; scanned symbols and the current measurement outcome select the next state and moves. Corrected this source-fidelity defect without changing operation families or resource accounting.",
    "adjudication_ref": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u23.json",
    "item_sha256": "48017d211bef99484049c3154add69c3dd419e2d1a4722c24ac57bb25a65dc24",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposal",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "subject": "lem-qc-bounded-space-virtual-input-simulation",
    "class": "accuracy",
    "subclass": "invalid-inference",
    "severity": "fatal",
    "location": "proof-step",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "group-alpha",
    "disposition": "fixed",
    "evidence": "The range-OR loop ran its body on an initially empty interval: M=4,l=r=1 starts L=R=5 and selects spurious nodes. A pre-tested L<R loop with zero accumulator returns zero immediately and partitions every nonempty interval into disjoint tree nodes. The statement is unchanged.",
    "adjudication_ref": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u23.json",
    "item_sha256": "57b5290e5739da4843e4300dc2e28c1683ed12f73bfdd2cebf734b0b2328f65f",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposal",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "subject": "lem-qc-uniform-probabilistic-clocked-simulation",
    "class": "accuracy",
    "subclass": "missing-case",
    "severity": "fatal",
    "location": "proof-step",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "group-alpha",
    "disposition": "fixed",
    "evidence": "If the start state halts and there are no nonhalting states, a valid empty transition table need not bound binary-encoded tape/head counts by polynomial description length. The original per-head initialization could violate the claimed time bound. Validation now counts actual fields, treats zero expected rows without exponent expansion, and returns the initial outcome before allocating per-head data. Nonhalting starts still force an explicit row, proving all parameter bounds.",
    "adjudication_ref": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u23.json",
    "item_sha256": "b61e03c3a7718d5c55d0b76a08e99417f48c6afbb3d7c6166f1cf5316ee71ca9",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposal",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "subject": "lem-qc-vmw-fh-density-and-base-net",
    "class": "accuracy",
    "subclass": "false-or-overstrong-statement",
    "severity": "fatal",
    "location": "statement",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "group-alpha",
    "disposition": "fixed",
    "evidence": "A four-element subset cannot itself be dense in SU(2). The corrected statement asserts density of its generated subgroup, exactly as proved in 2.1 and required by the gate-package definition. The monic-polynomial argument proves irrationality, the two axes generate SU(2) after closure, and the finite mesh plus certified word search proves the stated base net. Gate entries and the phase-erasure map are unchanged.",
    "adjudication_ref": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u23.json",
    "item_sha256": "b82aca729128f910a760460d8b2c1c7790ecc01b41ad6b838c6bdeee4c56def0",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposal",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "subject": "thm-qc-bqtisp-to-ptisp-simulation",
    "class": "accuracy",
    "subclass": "false-or-overstrong-title",
    "severity": "nonfatal",
    "location": "title",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "group-alpha",
    "disposition": "fixed",
    "evidence": "The original title omitted the derived-basis access restriction and suggested an unqualified PTISP simulation. Renamed it to BQTISP to Derived-Basis PrTISP Simulation, preserving the complete Statement. Also corrected proof 3.1’s numerator cross-reference from 2.1 to 2.2. Reviewed fixed-factor compilation, orthogonal measurement-history rephasing, signed path pairs, exact native queries on separate rows, and fixed-length choice counting; all preserve the stated basis-profile time and operand extent.",
    "adjudication_ref": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u23.json",
    "item_sha256": "892520628418cbd3788d926dd4f789a6bb2131263432e999f148c14d26ad7ec8",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record_interface_review",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "subjects": [
      "def-qc-bqtisp-model",
      "lem-qc-vmw-fh-density-and-base-net"
    ],
    "audit_status": "Assigned draft repairs; no independent review claimed and no published item edited.",
    "affected_use": "The only direct item consumers are thm-qc-bqtisp-to-ptisp-simulation and lem-qc-vmw-finite-precision-sk-compiler. Their exact uses and soundness dispositions are recorded in repair_notes. No published direct consumer was found in dependency/reference or actual item/page-use searches.",
    "invalidated_claim": "The original model operation-selection description and the literal density of a finite set.",
    "minimality": "Current-state operation scheduling and generated-subgroup density retain all consumer requirements; no consumer Statement or Definition change is needed. Reconcile the unassigned compiler contract’s supplier quote through its owner.",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "route_frontier_owner_alert",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "subject": "lem-qc-ninefold-nearest-neighbor-multiplexor-routing",
    "status": "draft, in frozen frontier, outside this assignment; not edited or adjudicated",
    "source": "research/quantum-computing-algorithms-60-2026-10-15-batch-23-step5-context.json concerns[0], independently checked against current proof 2.1",
    "source_excerpt": "For the opposite ordered orientation, reflect the wire labels $j\\mapsto k-j$ in this construction and reverse every adjacent CNOT arrow.",
    "affected_use": "items/thm-qc-nearest-neighbor-cnot-overhead.md F1 and proof 1.1 apply this local routing construction to every multiplexed rotation.",
    "invalidated_claim": "For k=2 the doubly reversed sequence (1->2,0->1) squared fixes 001, whereas the claimed CNOT 2->0 sends 001 to 101. Thus the written opposite-orientation construction is incorrect.",
    "minimality": "Delete the extra instruction to reverse arrows; label reflection alone conjugates the proved remote-CNOT network to the opposite direction, with unchanged gate count and Statement. Refer to the frontier owner for the authorized proof-only repair; no Step 5 review or repair of this unassigned item is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "row": {
      "defect_id": "qc60-step5-initial-r1-u24-1",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:36:45.679974Z",
      "class": "accuracy",
      "subclass": "invalid-inference",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "thm-qc-projective-chart-dimension",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "24",
      "repair_cost": "repair+rejudge",
      "item_sha256": "b131a9687d53b412cd9606c5a467ac6a1fd6e12281cc113ce339ba7b5b5bafe2",
      "adjudication_ref": [
        "thm-qc-projective-chart-dimension|gpt-6-luna|cdfbe7968cf0acd05d664fcfcf01ebddbd48f3560bece8452cb824e5c95a9438"
      ],
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u24.json",
          "locus": "Proof 2.1"
        }
      ],
      "reason": "Step 2.1 uses coordinate ratios on the entire punctured space, where z_j may vanish. Repaired the missing continuity argument on the open set O_j and explicitly proved that its restriction onto U_j is quotient. The inverse and smooth overlap formulas, D=1 case and properness for D>=2 remain valid.",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "row": {
      "defect_id": "qc60-step5-initial-r1-u24-2",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:36:45.679974Z",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "fatal",
      "location": "facts-block",
      "subject": "thm-qc-amplitude-table-precision-and-compilation",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "24",
      "repair_cost": "repair+rejudge",
      "item_sha256": "8c8e5434ddbdb536a1bce2c20c2c9a2660dc6052fe687b2755196aa4ebd883f9",
      "adjudication_ref": [
        "thm-qc-amplitude-table-precision-and-compilation|gpt-6-luna|8d103a9f228879d8a8e2547b640dbd497b65923245735df5f856861511768ac0"
      ],
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u24.json",
          "locus": "Facts A1 and Proof 1.2"
        }
      ],
      "reason": "The QSD proof does contain the four-child recursion, but the contracted Statement supplies only an exact circuit and CNOT bound; the two-qubit contracted Statement likewise omits the ten-factor count. Thus A1 overstates its declared interfaces. Repaired without new suppliers: step 1.2 scans the guaranteed finite circuit, combines pending one-qubit products and flushes only a CNOT support before each CNOT, then all wires at the end. This gives at most r+2c factors, hence uniform C_k=4^k and M_k=k+2C_k. The compiler count follows with the unchanged Statement.",
      "uncertain": false,
      "source_urls": [
        "https://arxiv.org/pdf/quant-ph/0406176"
      ],
      "familiar": false
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "row": {
      "defect_id": "qc60-step5-initial-r1-u24-3",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:36:45.679974Z",
      "class": "accuracy",
      "subclass": "citation-missing",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "ex-qc-amplitude-table-state-preparation-cost",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "24",
      "repair_cost": "repair+rejudge",
      "item_sha256": "b5c3c6e5cb0a6bb189105af7114d8cb5f411897b8338167362e7066c15210b97",
      "adjudication_ref": [
        "ex-qc-amplitude-table-state-preparation-cost|gpt-6-luna|6877605a6ed7684e1e81747f40fd2443f5120d6e782d39bcb0c4764e5109616c"
      ],
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u24.json",
          "locus": "Facts F1 and Verification 2.1"
        }
      ],
      "reason": "The cited rotation-cost Statement guarantees exact preparation and costs, but it does not state the subtree-angle formula used in step 2.1. Added the existing algorithm as a direct dependency and F2, with explicit radii, atan2 angles, R_y first column and reference-subtracted phase rule; steps 2.1-4.1 now cite that procedure. For the four entries the radii are 1, 1/sqrt(2), and 1/2 at the three depths, yielding three pi/2 rotations. The first nonzero leaf 00 has phase zero and only 01 has relative phase pi/2. The resulting vector and 8b fixed-width input charge are correct.",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No assigned published item was edited or adjudicated, no published-consumer defect was identified, and all original Statement/Definition sections are unchanged. No published maintenance repair or audit classification is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-qa-expected-query-cost",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "definition",
    "finding": "Confirmed nonfatal padding error: an at-most-K round need not end at elementary step KR. Verification 6.1 already inserts idle padding and proves cofinality of the resulting endpoints. The Definition now explicitly pads every bounded round to exactly K steps. Deterministic padding makes no calls and preserves all round-outcome weights, so the expected-query supremum and content contract are preserved.",
    "path": "research/defect-ledger.jsonl",
    "operation": "proposed finding for controller reconciliation",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "phase": "initial",
    "round": 1,
    "unit": "25",
    "post_sha256": "b786ecfc07143798bd227aa5a1a81eaa3940d9b9428cb50e2626a37eef0c8b94",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u25.json"
  },
  {
    "ledger": "defect",
    "id": "def-qa-quantum-query-algorithm",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "locus": "definition",
    "finding": "The preparation exception allowed a nonstandard root while the cited finite-branch law requires the standard public-input basis root and zero work registers. This is a dependency-domain mismatch, not a failure of Born normalization itself. Repaired by making every supplied preparation a finite charged unitary/instrument prefix from that standard root; the cited law now applies to the entire tree. The oracle-only independence clause is explicitly scoped to that model, retaining separately declared instance-dependent access.",
    "path": "research/defect-ledger.jsonl",
    "operation": "proposed finding for controller reconciliation",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "phase": "initial",
    "round": 1,
    "unit": "25",
    "post_sha256": "d19778e3f675088cf03f2e5449b10d0783bf2d2eaf7e0e1b583b81074891cafd",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u25.json"
  },
  {
    "ledger": "defect",
    "id": "def-qa-classical-bit-cost",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "definition",
    "finding": "Confirmed nonfatal underspecification: the unqualified input-encoding-work clause named an abstract injective label map without an executable encoder or readable hidden input. Transition-count cost itself is valid. Clarified that any encoding work actually executed on declared public data or received replies is charged, whereas the abstract encoding supplies only the size parameter and no hidden-data access or encoder. Fixed-alphabet multitape and fair-bit transition conventions are retained.",
    "path": "research/defect-ledger.jsonl",
    "operation": "proposed finding for controller reconciliation",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "phase": "initial",
    "round": 1,
    "unit": "25",
    "post_sha256": "619c9f6c5a9b90988c27b8e177bcdd24fdb91ed4aa1636f98a7edb0ef5787256",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u25.json"
  },
  {
    "ledger": "defect",
    "id": "ex-qa-promise-and-cost-models",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "facts-block and proof-step 1.1",
    "finding": "Confirmed nonfatal incomplete fact and inference: F8 omitted polynomial time, and step 1.1 used totality plus promise images alone. The same example already supplied linear-time copying in step 3.1. F8 now states the full prerequisite; step 1.1 proves O(|x|+1) copying before concluding that r is a reduction, and step 3.1 cites that result without duplicating its argument. No example claim or interface is weakened.",
    "path": "research/defect-ledger.jsonl",
    "operation": "proposed finding for controller reconciliation",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "phase": "initial",
    "round": 1,
    "unit": "25",
    "post_sha256": "bba6fe6ce9ccf9315e01bbd4c342827dd5ce452f5120ed004555b2d53a34f323",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u25.json"
  },
  {
    "ledger": "published_consumer",
    "path": "research/published-consumer-supplier-ledger.md",
    "operation": "no_update_required",
    "reason": "No examined consumer is published; the one outside-frontier draft is routed to separate maintenance without a repair."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u26-register-order",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:32:40.712688+00:00",
      "class": "accuracy",
      "subclass": "ill-typed-claim",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "ex-qa-oracle-conversion-and-uncomputation",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "26",
      "subclass_note": "Verification 2.2 silently displayed x,r,y tensors for an x,y,r input. The labeled circuit calculation was correct after a permutation; both equations now retain x,y,r throughout. This corrects notation, without changing the algorithm, Example, hypotheses, or probability claims.",
      "item_sha256": "30f3512cb6cbe672e0238c5cecefe6af281907a0fccb759cd1c6c933011d8d08"
    },
    "reason": "Proposed new nonfatal register-order record for controller merge; no shared ledger was edited."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "id": "def-qa-deutsch-promise",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "ill-typed-construction",
    "location": "definition",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "group-alpha",
    "disposition": "fixed",
    "reason": "The original promise sets contained functions instead of encoded inputs. The existing Verification already supplied the four truth-table encodings; made that bijection explicit in the Definition and used binary-string YES and NO sets without altering the promised task."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "All four discovered direct item consumers are draft members of the frozen frontier. Their mathematical uses remain sound; no published or outside consumer defect was discovered."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-qa-finite-abelian-character-dual",
    "proposed_outcome": "false_positive",
    "status": "dismissed",
    "reason": "The title names the standard dual construction; its Definition explicitly supplies only the character set and pointwise operations and defers the group axioms. The later local group theorem proves closure, identity, inverses and commutativity pointwise and finiteness from dual cardinality, without circular dependence. No false assertion or repair is required.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qa-finite-character-values-have-unit-modulus",
    "proposed_outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The proof is valid for additive characters: positive element order n gives chi(x)^n=1, and the root enumeration and imaginary-exponential modulus yield modulus one, including x=0. The title omitted additive and finite abelian, allowing the representation-character interpretation explicitly distinguished by its published definition. Corrected only the title; Statement, proof and contract remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qa-finite-abelian-dual-character-orthogonality",
    "proposed_outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F10 inaccurately attributes a pointwise group law to a Definition that explicitly defers the group axioms. This is nonfatal because step 1.1 uses only the character set and pullback bijections; the remaining proof factors cyclic root sums and never uses a dual group operation. Replaced F10 with the exact set interface and specified additive finite-abelian characters in F4. Checked distinct roots, nonzero geometric-sum denominator, finite factorization, and trivial group. Statement and proof steps are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qa-finite-abelian-subgroup-annihilator-cardinality",
    "proposed_outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The bijection proved in steps 1.2-2.1 is inflation psi -> psi composed with the quotient map and descent chi -> (g+H -> chi(g)). It is not restriction to a quotient, and restriction to H is trivial. Corrected restriction to descent in the Statement. This is a nonfatal terminology defect: the original proof already constructs the right inverse maps and proves representative independence, and all cardinality claims are unchanged. Normality, finite abelian quotient, positive |H| and the cases H={0}, H=G, G trivial all satisfy the actual dependencies; no choice of representatives is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qa-finite-abelian-double-annihilator",
    "status": "owner_action_required",
    "route": "ordinary frozen-frontier owner work; not published maintenance",
    "locus": "proof 2.1",
    "affected_use": "|A||H^\\perp|=|\\widehat G|=|G|, the last equality following from [F1].",
    "invalidated_claim": "F1 identifies G with its double dual and does not directly assert |dual G|=|G|.",
    "minimality": "Change the attribution of the last cardinality equality from F1 to F3; its linked group theorem explicitly states |dual G|=|G|. No Statement change or downstream expansion is needed.",
    "reason": "Confirmed the rejection-blind digest concern against proof 2.1 and the actual F1 and F3 suppliers. Both suppliers are already declared; the equality is available, but the cited justification is inaccurate. This unassigned draft was not edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qa-tensor-extension-preserves-operator-norm",
    "locus": "proof-step",
    "location": "3.1",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The original proof inferred norm one for a unitary on any finite tensor register, including the zero space. Added the zero-domain branch, retained the nonzero argument, and corrected the owning contract boundaries and F3 use. Both Statement clauses are unchanged.",
    "adjudication_ref": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u30.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-qa-eigenphase-estimation-model",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Confirmed nonfatal citation error: the syntax supplier explicitly defines finite data only and defers global gate action; it supplies no measurement law. The eigenphase equation, big-endian weights, controlled-power versus repeated-controlled-U promise and separate inverse-access promise are already explicit and sound. Replaced the attribution by the actual syntax, denotational-semantics and projective-outcome definitions, and added the latter two direct deps; no capability, cost or phase convention changes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "alg-qa-quantum-phase-estimation",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Confirmed nonfatal dependency declaration error: instruction 4 composes the exact binary QFT gate list, but deps omitted alg-qa-exact-binary-qft-circuit. The already-declared correctness theorem names that algorithm and proves its positive-sign action and adjoint reversal, so the mathematical procedure was supported transitively. Added the required direct procedure dependency; the entire Definition and Remarks remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_entry_required",
    "reason": "The Definition source-attribution change has ten direct item consumers, all draft frozen-frontier members; no published or outside-frontier consumer was discovered. No published mathematical finding or maintenance repair is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "id": "def-qa-rational-phase-reconstruction",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "locus": "definition",
    "reason": "The original final Definition paragraph duplicated an executable Euclidean search under kind definition. Replaced that paragraph by the unique candidate value or FAIL, preserving the entire predicate and terminal convergent. The separate existing alg-qa-rational-reconstruction-from-phase-sample retains the instructions. No false mathematical claim or missing prerequisite was found.",
    "evidence": "items/def-qa-rational-phase-reconstruction.md; items/alg-qa-rational-reconstruction-from-phase-sample.md; SCHEMA.md Algorithms",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_rejection_disposition",
    "id": "alg-qa-modular-order-finding",
    "outcome": "false_positive",
    "reason": "thm-qa-modular-arithmetic-cost proof step 1.2 establishes the exact inverse loop invariant, termination, inverse output, O(n^3) bit cost and repeated-squaring inverse constants; the rejected dependency citation is accurate. No defect row or repair is proposed.",
    "evidence": "items/thm-qa-modular-arithmetic-cost.md, Proof 1.2",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update_required",
    "reason": "The only changed interface belongs to a draft frontier definition. Its direct item consumers are the three draft batch-32 carriers in downstream; the owning pages are draft. Every exact use remains sound, and no published or outside-frontier consumer was found by searching current items and library references. No published repair or maintenance route is required.",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "alg-qa-shor-uniform-residue-sampler",
    "classification": "false_positive",
    "status": "dismissed",
    "reason": "The existing separate same-page sampler theorem proves exact uniformity and almost-sure termination; the algorithm instructions need no mathematical repair."
  },
  {
    "ledger": "defect",
    "id": "lem-qa-even-order-square-root",
    "classification": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Confirmed nonfatal notation/type defect: the Given declared x to be a residue class but then applied the integer class constructor [x^(q/2)]_N to it. Repaired only Given and proof step 2.1 by taking integer x with unit class [x]_N and applying order characterisation to that class. Squaring gives [x^q]_N=[1]_N; the true-order case excludes an identity half-power since 0<q/2<q. The original Statement is byte-identical; q=2 and N=2 boundaries remain sound."
  },
  {
    "ledger": "defect",
    "id": "thm-qa-shor-factoring-success",
    "classification": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "Confirmed fatal dependency-citation defect: F7 dropped the cited definition's finite-space hypothesis and step 3.1 invoked it on infinite tape events. Repaired by constructing each attempt's finite terminal space (residue a, finite measurement transcript y) with normalized weights mu_a(y)/(N-1), restricting F7 to finite spaces, and applying finite coordinate independence to T terminal records. Unit conditioning now occurs only in the finite space; its good-unit mass >=1/2 and pointwise exact-order bound >=3/4 imply per-attempt success >=3/8, including immediate nonunit success. A finite union of null sampler nontermination events has zero mass. The Statement and CC/DC assumptions are unchanged."
  },
  {
    "ledger": "defect",
    "id": "lem-qa-crt-sign-vector-factorization",
    "classification": "confirmed_nonfatal",
    "status": "owner_route_required",
    "route": "frontier owner; outside this assignment",
    "affected_use": "items/lem-qa-crt-sign-vector-factorization.md, Fact F3 and proof step 1.1",
    "reason": "Verified the existing Step-4 digest concern against F3: it states g^t=1 iff M divides t for a cyclic group of order M without saying g is a generator. This is false for the identity in C2 at t=1. Step 1.1 actually chooses generators g_i, so its use and the consuming factoring proofs remain sound. Minimal repair: qualify g as a generator in F3; no assigned item repair depends on changing that item. No edit or adjudication of the unassigned carrier was made.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "alg-qa-finite-abelian-hidden-subgroup-reconstruction",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "status": "fixed",
    "reason": "The declared hiding instance provides the function and encoding, but not the exact preparation and full-register QFT circuits demanded by the sampling input. Thus the repeated calls were underspecified on the declared domain. Added P_G, O_F and Q_G with the sample procedure's exact access/cost/workspace/action contracts and explicitly pass them to each fresh call. The N=1 return, M repetitions and implicit-kernel output are unchanged; no AC or new supplier is required."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qa-hidden-coset-state-law",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F4 incompletely quotes nonnegativity: its supplier also requires self-adjointness. The coset-mixture identity and quadratic forms are correct; the missing rank-one adjoint identity is a routine local omission. Added the explicit root-pairing equality <P_C u,v>=<u,P_C v> and showed the positive real weighted sum is self-adjoint with nonnegative quadratic form. Trace normalization uses h>0 and N/h cosets, including N=h=1 and empty encoded registers. Statement unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qa-finite-abelian-hidden-subgroup-cost",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The theorem Statement and proof 1.1 already restrict M samples to N>=2 and explicitly return without queries for N=1. F1/F5 nevertheless stated these operations without that qualification. This is a nonfatal fact-interface overstatement, not a false resource conclusion. Qualified both facts, explicitly retained N>=2 through steps 1.2/1.3, included the discard in F5, and cited the immediate empty-list branch in 2.1. The inequality b<=log2 N+r<=2 log2 N and all additive cost coordinates remain valid. Statement unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "record": {
      "defect_id": "qa60-step5-initial-r1-u35-1",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:40:15.363782Z",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-qa-11-good-bad-decomposition",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "35",
      "basis": "The equal-positive-amplitude meaning of uniform state was implicit and absent from its supplied definitions. The existing finite-sum decomposition is correct once this notation is explicit; Given now fixes it without changing the claim.",
      "uncertain": false,
      "source_urls": [],
      "familiar": true,
      "adjudication_ref": [
        {
          "id": "lem-qa-11-good-bad-decomposition",
          "model": "gpt-6-luna",
          "context_sha256": "848c2b1d5c6a72395c5df0a9aea30d28c65919dc0ea16be03d3c86d1a116cecf",
          "item_sha256": "81d0d0591c355a782e43cdc939b3b9bd2489415ee0144855dd3822c671c8f96c"
        }
      ],
      "pre_sha256": "270811088d3946a901af1546b32f68246a48e6958a42e2da75d8b54549c38f1f",
      "post_sha256": "b7f775f2a74eea964a2bea639a73c4da9e5315ea35f022665362828714c76da6",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u35.json"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "record": {
      "defect_id": "qa60-step5-initial-r1-u35-2",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:40:15.363782Z",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "prop-qa-11-known-count-random-selection-bit-cost",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "false-positive",
      "batch": "35",
      "basis": "False positive: lem-of-square-monotone states u<=v iff u^2<=v^2 for nonnegative u,v. By the supplied square-root theorem, u=sqrt(N/t), v=sqrt(N) are nonnegative with squares N/t<=N because t>=1. Thus F5 is an immediate specialization, not an unsupported premise. The binary-search invariant, O(n) halvings on O(n)-bit operands, O(n^3) schoolbook work and separate nine-round bookkeeping are valid, including n=0.",
      "uncertain": false,
      "source_urls": [],
      "familiar": true,
      "adjudication_ref": [
        {
          "id": "prop-qa-11-known-count-random-selection-bit-cost",
          "model": "gpt-6-luna",
          "context_sha256": "b7cfdd5d9a14d34d7218d83527e67883015e8b58e9cdc1de91de343283504876",
          "item_sha256": "97f361640a6ead510248e10c23bebc9003f9ed75d86dae60cdac224131225159"
        }
      ],
      "pre_sha256": "9ddfb4b7f82765737fffa90a1c95d43dda2f4cce7958fdc6c28e922912006663",
      "post_sha256": "9ddfb4b7f82765737fffa90a1c95d43dda2f4cce7958fdc6c28e922912006663",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u35.json"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "record": {
      "defect_id": "qa60-step5-initial-r1-u35-3",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:40:15.363782Z",
      "class": "accuracy",
      "subclass": "citation-truncated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-qa-11-integer-iteration-regime",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "35",
      "basis": "F1 omitted the cited theorem restriction 0<t<N and failed to distinguish its t=N endpoint. The endpoint conclusion was correct but its fact restatement was inaccurate. F1 and step 4.1 now use the explicit endpoint probability 1; the interior rounding argument is unchanged in substance.",
      "uncertain": false,
      "source_urls": [],
      "familiar": true,
      "adjudication_ref": [
        {
          "id": "thm-qa-11-integer-iteration-regime",
          "model": "gpt-6-luna",
          "context_sha256": "530dc1f9795284847b78336149690d8c60952bb7c520fca569341de2bacb8533",
          "item_sha256": "b4e44f24a3de0d78423e682e938054b00a429242c70509db2dcef5b5a04919ac"
        }
      ],
      "pre_sha256": "5390d74ca32809e6372f65eac46d88b1ae5d8e26a131ce73b4b50de4c9258d23",
      "post_sha256": "f47daa8f29b3befe4146253e896dd236a5699fdc499cd5e2354e042629ddb614",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u35.json"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "record": {
      "defect_id": "qa60-step5-initial-r1-u35-4",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:40:15.363782Z",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "fatal",
      "location": "facts-block",
      "subject": "thm-qa-11-known-count-success-bound",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "35",
      "basis": "F4 attributed the recurrence-to-sine identity to the preprocessing proposition although its Statement supplies only the recurrence and cost. Without that identity, maximizing the rational list does not establish the claimed success bound. Repaired by a local induction from cosine addition, parity, cos(0)=1 and power reduction, showing T_m(q)=cos(2m theta) and r_k=p_k, before comparing candidates.",
      "uncertain": false,
      "source_urls": [],
      "familiar": true,
      "adjudication_ref": [
        {
          "id": "thm-qa-11-known-count-success-bound",
          "model": "gpt-6-luna",
          "context_sha256": "7964c79d6f1c3495df33b751927409338cc5c249a0afedc14d25b74724c55617",
          "item_sha256": "a4ccad7d0450633d21024a3b0ec258ed2ad85bbdfbbaaed7a89665f3b4560de9"
        }
      ],
      "pre_sha256": "2d6dd2fae5abb3351d4a651c1b87433f14e258e1718048f40e49cbaa43ae5274",
      "post_sha256": "b101b633c944a388a64c79e4bff1ce425b9adcbf641fa4333e4719a02dfbf305",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u35.json"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "record": {
      "defect_id": "qa60-step5-initial-r1-u35-5",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:40:15.363782Z",
      "class": "accuracy",
      "subclass": "citation-truncated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-qa-11-known-count-query-cost",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "35",
      "basis": "F1 omitted the actual algorithm Definition clause returning none with no query at t=0, although step 3.1 attributed that clause to F1; F4 establishes only the output. The no-query fact is already explicit in the actual dependency. Added it to F1 and separated the two justifications in step 3.1.",
      "uncertain": false,
      "source_urls": [],
      "familiar": true,
      "adjudication_ref": [
        {
          "id": "thm-qa-11-known-count-query-cost",
          "model": "gpt-6-luna",
          "context_sha256": "9cf505ff72a7f572b2b21ea1d0e8bb44efd1bd113fe8b9ca282dbd9168267bff",
          "item_sha256": "ebb1b1fda9539a555907393fe0b200a53aeb9380820103ed59e739aed3d17fa9"
        }
      ],
      "pre_sha256": "f60dcbff4d50b944ea69095fa5ec0bb657e618ba9bd8d2b9206a62b53c95af50",
      "post_sha256": "77dfd3c5d3bac0c9d65162549bcdccfe9105987e4deafc332a8b11174d4daa97",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u35.json"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "record": {
      "defect_id": "qa60-step5-initial-r1-u35-contract-f4",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:40:15.363782Z",
      "class": "accuracy",
      "subclass": "contract-mismatch",
      "severity": "nonfatal",
      "location": "contract-row",
      "subject": "prop-qa-11-known-count-random-selection-bit-cost",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "35",
      "basis": "After inspecting the concurrent clarification to def-qa-classical-bit-cost, confirmed all arithmetic uses public N,t, random labels and measured addresses. The proposition stays sound and unchanged; only the exact F4 contract quotation needed synchronization. This is separate from the false-positive square-root-order rejection.",
      "uncertain": false,
      "source_urls": [],
      "familiar": true,
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u35.json"
        },
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-batch-35.proof-contracts.json"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No assigned item Statement or Definition changed, no published item was edited, and no potentially defective published use was discovered in the examined interfaces. No maintenance event is generated by these proof, fact-restatement and metadata repairs.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-qa-12-amplitude-access-cost-accounting",
    "locus": "statement",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "The factorization and all call counts are correct, including k=0. However, the unqualified prepared-state reflection name conflicts with the cited rank-one R-sign convention: AS_0A†=I−2|ψ><ψ|=S_ψ=−R_ψ. This is a nonfatal sign-label ambiguity, not an erroneous count or a use of controlled sign equivalence. The Statement and step 2.1 now identify both signs explicitly and retain exact-interface controlled access."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-qa-12-phase-mismatch-robustness",
    "locus": "statement",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "finding": "The original citation supplies a unique phase in [0,2π), whereas the theorem identifies it as lying in (−π,π) and calls a procedure admitting only [0,2π) inputs. At a=3/4 and φ=2π/3 the matching tangent is −√3/2, so the supplier phase exceeds π. Without the missing lift the dependency interface cannot be applied as stated. Repaired by defining the signed representative from the canonical matched phase and canonically lifting both signed phase labels at every algorithm call; periodicity is proved in step 1.1. The guarantees and full parameter range are preserved.",
    "source_urls": [
      "https://arxiv.org/pdf/quant-ph/0006031"
    ]
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qa-12-prepared-success-subspace",
    "action": "route_to_frontier_owner",
    "locus": "definition",
    "severity": "nonfatal",
    "status": "reported_outside_assignment",
    "affected_use": "items/def-qa-12-prepared-success-subspace.md, Definition: Reflection about the prepared state is the composite $A S_0 A^\\dagger$, with its component calls charged unless a separate direct-reflection access is supplied.",
    "finding": "The supplier has the same unqualified reflection wording as the repaired proposition. Its explicit S_0=I−2|0><0| makes the operator sound, but the rank-one R-sign interface warrants saying S-sign prepared-state reflection. No supplier edit or adjudication was performed in this unit.",
    "minimality": "Add the S-sign qualifier or name AS_0A†=S_ψ=−R_ψ; preserve all access requirements and mathematical claims.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no_update",
    "reason": "Both assigned items and their two direct item consumers are draft. No published consumer or outside-frontier consumer was found using either changed Statement."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-qa-13-amplitude-estimation-task",
    "classification": "nonfatal",
    "status": "fixed",
    "reason": "Confirmed a nonfatal notation collision: H denotes the ambient space and the one-qubit gate in the counting clause. F6 and the uniform-state calculation determine the intended Hadamard unambiguously, so this is not a failed counting theorem. The gate is now explicitly H_Had with its matrix; step 1.3 uses that name. The signed iterate, a=t/N (including n=0), access modes and resource charges are identical.",
    "action": "proposed_adjudication_record"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "alg-qa-13-iterative-likelihood-amplitude-estimation",
    "classification": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "The cited prepared-success-subspace Definition supplies only A, its inverse and the two reflections. Its discussion of probabilities under a projection does not grant measurement access. For an arbitrary instance-dependent projection this omission is a fatal dependency/access-contract restatement. The algorithm now separately requires and charges the two-outcome projective measurement. The finite K,S,J loops, residues, real cyclotomic likelihoods, 0^0 convention and least-label comparison rule remain valid, including a=0, a=1 and J=1. Suzuki et al. sections 2 and 3.1 explicitly measure the good flag before forming the likelihood; that restricted flag model does not itself supply an arbitrary projector instrument.",
    "action": "proposed_adjudication_record"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qa-13-certified-count-output-rounding",
    "classification": "nonfatal",
    "status": "fixed",
    "reason": "Confirmed a nonfatal algorithm-carrier violation: the lemma contained a Definition of an executable procedure and its property proof. A new alg- supplier now defines the exact r and enclosure-index loops, y=0 branch and rational ceiling output. The lemma retains its original Statement byte-for-byte and proves termination and |q-z|<=2/3 using that supplier (F11). For accepted h, the cosine tail plus polynomial perturbation encloses z; NR_r<1/24 and ND_r*rho<1/24-NR_r give width<1/24. An integer within 1/2 of z makes the eligible interval nonempty; its least integer is ceil(v-2/3). Even M=2, N=1 and y=M/2 are included; no polynomial bit-cost bound or choice axiom is introduced.",
    "action": "proposed_adjudication_record"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qa-13-pi-rational-bounds",
    "classification": "false_positive",
    "status": "no_item_edit",
    "reason": "The title describes the intended use of the inequalities; the Statement asserts only 3<pi<22/7. The eight-term arctangent partial sum is 33976/45045>3/4, and polynomial division evaluates the strictly positive integral to 22/7-pi. The cited local arctangent and alternating-series Statements supply the needed identities. No scheduling claim is asserted or missing.",
    "action": "proposed_adjudication_record"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qa-13-counting-zero-outcome-kernel",
    "classification": "false_positive",
    "status": "no_item_edit",
    "reason": "The Statement explicitly restricts the sine quotient to 0<t<N and treats t=0 separately; its title does not assert an additional t=N formula. The proof correctly mixes the two nonintegral eigenphases and uses the sine zero set for the all-domain zero-label iff raw-zero assertion. At t=N the prepared vector has phase 1/2, so even L gives the deterministic nonzero label L/2 and raw count N; this satisfies that equivalence and contradicts no stated probability claim. The L=2 interior quotient is cos^2(theta). No extension or cosmetic edit is required.",
    "action": "proposed_adjudication_record"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No changed or potentially defective published consumer was identified. All eighteen direct dependency/reference consumers in the examination inventory are frontier drafts or the newly authored prerequisite. The separate amplification-supplier alert is a draft frontier owner route, not published maintenance."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_outside_lane_finding",
    "id": "alg-qa-12-amplitude-amplification",
    "owner_batch": "36",
    "status": "owner_review_required",
    "reason": "The actual prepared-success-subspace access clause read supplies only A, A dagger, S_good and S_0. Its later probability-under-measurement clause does not explicitly supply or charge that arbitrary instrument. The likelihood enclosing algorithm now supplies it independently, so its repair is complete without editing this outside-lane supplier.",
    "affected_use": "Apply $Q$ exactly $k$ times. Then apply the projective instrument $\\{\\Pi_{\\mathrm{good}},I-\\Pi_{\\mathrm{good}}\\}$.",
    "invalidated_claim": "The declared uncontrolled unitary/reflection access alone does not explicitly grant or price the arbitrary good/bad projective instrument executed here.",
    "minimality": "Owner should check whether to add an explicit charged instrument input to this procedure. This is a separate supplier-contract alert, not a claim that the new likelihood input remains deficient.",
    "source_urls": [
      "https://arxiv.org/pdf/1904.10246"
    ],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "row": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u38-search-witness-encoding",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:37:42.248976+00:00",
      "subject": "def-qa-14-search-promise",
      "batch": "38",
      "class": "accuracy",
      "subclass": "ill-formed",
      "severity": "nonfatal",
      "location": "definition",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u38.json",
          "note": "Original coordinate/sentinel outputs omitted required binary witness encoding. Repaired by an explicit fixed-length binary relation; finite label conversion preserves the complete original finding problem and query budget."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u38.json",
          "id": "def-qa-14-search-promise",
          "model": "gpt-6-luna",
          "context_sha256": "b7fb2b79f5c074ae9760bf61b6bcb9052c022267c7cd5bd0fe1bfed0f63cf68b"
        }
      ],
      "pre_sha256": "c335cfbbb0b75c3281cde32cebbd909ae7643fde7439fa1c87a8b107bbc129b5",
      "post_sha256": "a9d5139fb1937b4016c7847a0613431320a4bb500cae258f64fde6f5a1ffd407"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "The only changed interface is the draft search-promise Definition. All six direct item dependency/reference consumers are draft frozen-frontier items, and the owning page remains sound. No published consumer or outside-frontier consumer was discovered for this change; there is no published repair or audit assertion to add."
  },
  {
    "defect_ledger": [
      {
        "id": "thm-qa-15-acceptance-degree-bound",
        "locus": "statement",
        "severity": "nonfatal",
        "status": "fixed",
        "finding": "The query-complexity notation is defined only for 0<=epsilon<1/2, but the original consequence omitted that restriction. This is a nonfatal domain qualification: the full-cube polynomial bound and the approximate-degree consequence for every epsilon>=0 are sound, and the ceiling inequality is sound throughout the defined query-complexity domain. The Statement, Given, F4 and step 3.1 now make those ranges explicit without restricting the polynomial conclusion."
      }
    ],
    "published_ledger": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "qc60-step5-initial-r1-u4-naimark-label-index",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "thm-qc-finite-naimark-isometric-compression",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "description": "Step 1.1 incorrectly treats an arbitrary outcome label a as a numeric register index. Since |a⟩=e_{j(a)}, its action and self-adjointness formulas must use δ_{j(a),c}, e_{j(a)}, and δ_{j(a),d}. This is a nonfatal indexing slip: the given bijection supplies the immediate correction, and step 2.1 already uses e_{j(b)} correctly. Both formulas have been corrected without changing the Statement.",
      "source": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u4.json",
      "adjudication_ref": [
        {
          "file": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u4.json",
          "id": "thm-qc-finite-naimark-isometric-compression",
          "model": "gpt-6-luna",
          "context_sha256": "a88bef97d3a131f826af4c0e74ca003f17e5d83f467b35412fe0e42e0db4b91f"
        }
      ],
      "item_sha256": "d5ae5ec3da869967a5f530605bccc88298efdacab3d8252f68f374354633688f"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "def-qa-16-boolean-query-domain",
    "severity": "fatal",
    "classification": "dependency_citation",
    "locus": "definition",
    "finding": "F2 defines XOR queries only for total functions on bit-string addresses. For N=3 the local three-address action does not by itself specify F2 on the fourth word, so the original invocation of F2 lacks an encoding and total function. Added the i-1 binary encoding, zero extension on unused words, and invariant active C^N restriction; the oracle remains the same on all N legal addresses.",
    "status": "fixed",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u40.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "def-qa-16-filtered-gamma2",
    "severity": "fatal",
    "classification": "logic",
    "locus": "definition",
    "finding": "The literal defining sentence permits an empty finite D and unspecified Boolean masks; maxima over empty D are undefined. Its proof also needs actual coordinate-mismatch masks to assert that every off-diagonal pair is covered. The intended query setting is clear from F1 and the contract but must be explicit in the Definition. Added that setting, corrected the nonfatal Dirac-linearity wording, and made the conjugate-row construction and span bound explicit.",
    "status": "fixed",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u40.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "thm-qa-16-controlled-consistency-reflection-correct",
    "severity": "nonfatal",
    "classification": "dependency attribution without an essential inference gap",
    "locus": "facts-block",
    "finding": "The original F25 incorrectly credits the register definition with the algorithm-specific mode decomposition. Step 1.1 already obtains that decomposition and the unit orthogonal start vector from the algorithm input and uses F25 only for the standard coordinate pairing. Thus the projection and circuit proof are sound, but the factual attribution needs repair. F25 now separates the two sources explicitly.",
    "status": "fixed",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u40.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "thm-qa-16-general-adversary-tightness",
    "severity": "nonfatal",
    "classification": "dependency attribution without an essential inference gap",
    "locus": "facts-block",
    "finding": "F2 omits its supplier nonconstancy hypothesis and is cited in the constant branch. This is an inaccurate extra identification, but the tightness argument itself already follows from the nonconstant lower bound, attained certificate/evaluator upper bound, and zero conventions for constants. Qualified F2, moved it to the nonconstant branch, and cited def-qa-16-general-adversary-bound directly for the constant zero value.",
    "status": "fixed",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u40.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "def-qa-16-filtered-gamma2",
    "severity": "nonfatal",
    "locus": "proof-step",
    "finding": "Original step 1.1 said the Dirac cross pairing is linear in each vector factor; it is conjugate-linear in u and linear in v. The repair corrects the wording and gives the explicit conjugate-row construction.",
    "status": "fixed",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u40.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_unassigned_frontier_finding_to_owner",
    "id": "lem-qa-16-adversary-progress-endpoints",
    "severity": "fatal",
    "classification": "logic",
    "locus": "statement",
    "affected_use": "The Statement quantifies Gamma and its principal unit eigenvector without requiring Gamma to vanish on equal-output pairs; proof step 1.1 uses: Since Γ has only cross-output blocks, write Γ=[[0,B],[B^T,0]].",
    "invalidated_claim": "The standalone final endpoint bound is false for arbitrary real symmetric Gamma: for N=1, D={0,1}, f(x)=x, an exact one-query algorithm, Gamma=I_2 and alpha=(1,0), W_0=W_T=1 but 2sqrt(epsilon(1-epsilon))||Gamma||=0 at epsilon=0.",
    "minimality": "Add the intended admissible adversary-matrix hypothesis to the Statement, retaining the current proof. Its Facts/Given already state that hypothesis. Do not edit this unassigned carrier in unit 40.",
    "route": "ordinary frontier-owner lane, separate from this assigned adjudication",
    "status": "owner_action_required",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record_no_published_consumer_effect",
    "suppliers": [
      "def-qa-16-boolean-query-domain",
      "def-qa-16-filtered-gamma2"
    ],
    "reason": "All 17 direct supplier/consumer events examined above involve draft items in the frozen frontier, covering 16 unique consumers. No direct outside-frontier or published consumer was found in the current dependency/reference inventory; no published item was edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "qca60-b42-step5-r1-cex-cnot-availability",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "cex-qa-18-query-cost-is-not-gate-cost",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "Proof 2.1 used an exact m-CNOT implementation and CNOT copying without declaring CNOT availability. The parity lower bound was already valid. Explicitly chose the CNOT-containing alphabet for the constructive upper bounds.",
      "repair_cost": "inline-fix",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u42.json",
          "anchor": "cex-qa-18-query-cost-is-not-gate-cost"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "qca60-b42-step5-r1-johnson-endpoint-maps",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "ill-typed-construction",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-qa-18-johnson-walk-spectrum",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "Proof 1.1 implicitly declared maps beyond V_r; restricted up maps and commutators to k<r, supplied zero L_0, bounded the raising induction, and handled H_r directly. Spectrum Statement unchanged.",
      "repair_cost": "inline-fix",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u42.json",
          "anchor": "lem-qa-18-johnson-walk-spectrum"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "qca60-b42-step5-r1-skip-list-top-occupancy",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "missing-case",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "thm-qa-18-element-distinctness-qr-access-gate-cost",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "Original proof 3.3 controlled consecutive promotion runs below H but not total occupancy at H. New proof 4.1 proves Pr(X_H>=s)<=binom(r,s)q^-s<=2^(1-s) and the traversal cap. Proof 5.1 includes the new bad event; the hybrid rate and Statement remain valid. The separate compiler-count objection is false because supplier proof 5.1 supplies the exact decomposition.",
      "repair_cost": "inline-fix",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u42.json",
          "anchor": "thm-qa-18-element-distinctness-qr-access-gate-cost"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "qca60-b42-step5-r1-exclusive-collision-pairs",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "ex-qa-18-johnson-walk-parameters",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "The exact two-pair marked fraction need not equal 2/5 when other collision pairs exist: four equal values give 16/20. Specified that the named pairs are all collision pairs, including the one-pair examples, and explained the general lower-bound interpretation.",
      "repair_cost": "inline-fix",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u42.json",
          "anchor": "ex-qa-18-johnson-walk-parameters"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "none",
    "reason": "No published carrier was changed, no Statement/Definition interface changed, and no potentially defective published consumer was found in the assigned dependency/use review."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_new_finding",
    "id": "cex-qa-19-adjacency-laplacian-sign-conventions",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "phase": "initial",
    "round": 1,
    "unit": "43",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "locus": "facts-block",
    "location": "F10 / Counterexample step 2.1",
    "status": "fixed",
    "reason": "F10 originally cites only the density-operator trace law, which neither identifies the unit-vector state with its rank-one density operator nor evaluates the trace as a squared coordinate. This is a missing dependency at step 2.1, not a failure of the calculated witness. Replaced F10 and its dependency by thm-qa-19-measurement-distribution, whose proof constructs the basis PVM and evaluates tr(P_phi P_y). The hypotheses hold: both graph generators are Hermitian and the input is unit. The sign witness has p_+(1)-p_-(1)=2 sin(1) cos(1)>=5/6; the irregular path has transfer times pi/sqrt(2) and pi. No refuted statement changes.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u43.json",
    "post_sha256": "7c0a452eba66145aad83cef03e06302bf30b4f3b0c3fca3bab745f5b15c625aa",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_new_finding",
    "id": "ex-qa-19-complete-graph-search-matrix",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "phase": "initial",
    "round": 1,
    "unit": "43",
    "outcome": "confirmed_nonfatal",
    "locus": "facts-block",
    "location": "F5 / Verification step 5.2",
    "status": "fixed",
    "reason": "F5 and step 5.2 attribute the invariant block to the cited theorem, while the contract quotes only its Statement of exact/approximate success. The theorem proof does compute the same block in step 1.1, and the example independently establishes orthonormality, invariance, every matrix entry, K^2=I/N, and the gap 2/sqrt(N) in steps 1.1-4.1; thus this is a nonfatal citation-scope defect, not a circular or invalid matrix derivation. Reworded F5 to the theorem's actual exact-success conclusion and step 5.2 to apply that conclusion to the uniform input, retaining the local derivation. N=2 gives [[-1,-1/2],[-1/2,0]] and gap sqrt(2); the n=1,2 Hadamard preparations are correct. The Example and all Statement/Definition interfaces remain unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u43.json",
    "post_sha256": "f3e42da0debf5bb4aedb3a18234f4b9e0c940c2b6936df99655ae3adc3096581",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published supplier or consumer defect was identified in this assigned review. The two repairs change Facts/dependencies and a Verification step only; every original statement/definition interface is unchanged, so no consumer-maintenance event is generated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_current_round_finding",
    "id": "def-qa-20-simulation-error-and-cost-model",
    "model": "gpt-6-luna",
    "context_sha256": "ba552732a8da41ed53fbd09578e84e01aa2f344b29a14f2c8677500ae7599aa5",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The target Hilbert space was not explicitly identified with V. This is a nonfatal typing omission in the intended common-system error convention; the repair declares that identification as input data, so W and U_H(t) are endomorphisms of the same inner-product space. Exact clean/dirty target-unitary contracts and all resource coordinates are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_current_round_finding",
    "id": "rem-qa-20-higher-order-formula-proof-obligations",
    "model": "gpt-6-luna",
    "context_sha256": "574e52d3b9d41f4336217d75917d05953c187452b2420be34731518ba9cfa8e0",
    "outcome": "false_positive",
    "severity": "false_positive",
    "status": "rejected_concern",
    "reason": "The owning page library/quantum-algorithms/hamiltonian-simulation-and-product-formulas.md lists alg-qa-20-suzuki-recursive-product-formula, lem-qa-20-suzuki-order-cancellation and thm-qa-20-suzuki-conservative-error-and-resources. Their complete local arguments supply the five-copy recursion, odd-degree cancellation plus inverse symmetry, and the Taylor-remainder norm bound with expanded-call accounting. This remark is page-scope prose, not a logical use of an absent supplier; adding later same-page results as deps is unnecessary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_current_round_finding",
    "id": "alg-qa-20-suzuki-recursive-product-formula",
    "model": "gpt-6-luna",
    "context_sha256": "75cd3ac154caad3c171099497c0f256c622565c6609ded2e69895106e7dfb39f",
    "outcome": "false_positive",
    "severity": "false_positive",
    "status": "rejected_concern",
    "reason": "The admissibility paragraph already requires support for every actual signed code and a declared implementation, per-call costs and approximation-error record. A time-reversed implementation must satisfy that same signed-call promise: exact exp(-isH_j), or a certified unitary approximation to it. It is not inferred from forward access and is not an extra free oracle. The term-list interface permits arbitrary declared signed-code providers; separately declared inverse access is another licensed route. The five-copy recursion, coefficient signs, right-to-left chronological execution and zero-time branch are consistent with the actual suppliers. No unsupported branch is licensed, so no edit is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_current_round_finding",
    "id": "ex-qa-20-noncommuting-pauli-error",
    "model": "gpt-6-luna",
    "context_sha256": "e3a9bd15555bc8d3f4a0236f144077e4c5b04e5b90f356d2ae4c0342cde10f73",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "status": "fixed",
    "reason": "Verification 4.1 divides by an undeclared epsilon and its unbounded-threshold assertion needs fixed nonzero t and positive epsilon. At epsilon=0 the quotient is undefined, and a negative tolerance cannot bound a nonnegative error. Added epsilon>0 to Given and fixed t!=0, epsilon>0 for the growth assertion. Also corrected the nonfatal inner-product convention to <u,v>=v* u (linear in the first argument); conjugate-transpose adjoints, norms, [X,Z]=-2iY and the certificate lambda t^2/r are unchanged. This is a logic defect in the unrestricted threshold claim, repaired without changing the Example section.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "All nine direct consumers of the only changed Definition are draft frozen-frontier items. No potentially defective published consumer or outside-frontier consumer was identified; no published audit status or repair is asserted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "row": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u46-D001",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-qa-22-block-compression-contraction",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "item_sha256": "71becd8a083c04e029e24423153c55500c8709b5188c823cab4eee8cf1b05cae",
      "subclass_note": "F1 and Proof 2.1 replaced the padded exact block by rectangular A/alpha. Corrected to widehat A/alpha and applied the padding norm identity already established in supplier Proof 3.1. The original Statement is byte-for-byte unchanged.",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u46.json",
          "anchor": "lem-qa-22-block-compression-contraction"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "row": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u46-D002",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "ill-typed-construction",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-qa-22-block-encoding-access-model",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "item_sha256": "ae857e8bb5ea47bd643e73dba385215344a891c246d1928309f99e30f964ceba",
      "subclass_note": "A family may contain scalar-target encodings with a_0=0 and a_1=1, so the original SELECT branches have incompatible dimensions. Added explicit common-target extensions, ordered unused ancillas, system-identification requirements, identity completion on unused selector labels and their implementation costs. Fatal type other records an ill-defined interface.",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u46.json",
          "anchor": "def-qa-22-block-encoding-access-model"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "All eight direct item consumers found by dependency/reference search are draft frozen-frontier items. No published item is a direct consumer of the changed access-model Definition, and the compression lemma Statement is unchanged. No published repair or maintenance claim is made."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_record",
    "id": "lem-qa-23-polynomial-interval-sign-certificate",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "facts-block",
    "finding": "F2 omitted the permitted zero remainder; corrected without changing the Statement.",
    "audit_status": "Focused adjudicator repair; independent rejudgment is engine-owned.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_record",
    "id": "lem-qa-23-hermitian-signal-convention-conversion",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "proof-step",
    "finding": "Proof 4.1 omitted the controlled-call access condition; corrected.",
    "audit_status": "Focused adjudicator repair; independent rejudgment is engine-owned.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_record",
    "id": "lem-qa-23-positive-polynomial-complement-factorization",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "facts-block",
    "finding": "F8 overstated the field interface and F4 omitted zero remainders; corrected.",
    "audit_status": "Focused adjudicator repair; independent rejudgment is engine-owned.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1806.01838"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_record",
    "id": "thm-qa-23-qsp-phase-factorization",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "proof-step",
    "finding": "Proof 3.1 omitted the available reflection/SU(2) induction transport; supplied explicitly.",
    "audit_status": "Focused adjudicator repair; independent rejudgment is engine-owned.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1806.01838"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_record",
    "id": "lem-qa-23-qsp-completion-peel-arithmetic-cost",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "proof-step",
    "finding": "Proof 3.3 used a radical condition before its local proof; moved that proof before use.",
    "audit_status": "Focused adjudicator repair; independent rejudgment is engine-owned.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published item was changed or found defective in the assigned mathematical reviews. The cited published field, division, root-existence and scalar interfaces are sufficient; no changed Statement/Definition creates a published-consumer event.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qa-25-parity-path-transfer",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "evidence": "F2 overstates the spectral theorem by including the norm formula. Replaced that attribution with its actual eigenbasis interface and proved norm preservation directly from the bit-flip basis permutation, then bounded J on each vector. Prefix-XOR conjugation, normalized Hamming-layer counts and the explicit sign eigenbasis establish the unchanged transfer and norm statement without AC."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-qa-25-hamiltonian-simulation-polynomial",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "evidence": "The Chebyshev recurrence at k=0 referred to undefined T_{-1}. Restricted that recurrence to k>=1 while retaining k>=0 for the absolutely convergent Bessel series. Initial values, scalar target and normalization are unchanged; the defect is an indexing error rather than a failed simulation claim."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qa-25-qubitization-signal-sequence",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "evidence": "Step 1.2 mislabeled the scalar matrix-entry supplier as F4. F5 explicitly supplies the full polynomial matrix with determinant (-1)^d; corrected that reference and tag. Direct multiplication verifies F^2=I, clean compression K/alpha, the qubiterate rotation, paired-space QSP order and controlled i^d convention; no statement or phase convention changed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qa-25-bounded-error-parity-query-lower-bound",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "evidence": "F2 incorrectly attributes query-model conventions to a circuit encoding. Declared the input-independent initial state, inter-query unitaries and final measured output bit locally, checked against Beals et al. section 3.2 and complete Lemmas 4.1-4.2 proofs. The amplitude degree induction and Boolean-character orthogonality prove the unchanged n/2 bound, including n=0; no uniformity premise is used."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-qa-25-parity-no-fast-forwarding",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "evidence": "The exact n=2 weights 1/sqrt(2) and normalization sqrt(2) are correct, as is the eigenvalue calculation giving exp(-i*pi*H0)|0>=-|2>. F3 and step 2.1 falsely identified this matrix with the rounded lower-bound family, whose n=2 weights are 23/32. Corrected the distinction and scoped the lower bound to row-location/value XOR access, leaving the exact example intact."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "alg-qa-25-small-time-aware-simulator",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "evidence": "The nontrivial branch could receive only a block matrix and one comparison, although OP4 requires actual inverse/controlled access, circuit and cost declarations, scalar interval routines and rational epsilon. This left an algorithm call undefined on declared admissible inputs. Added all exact-mode OP4 prerequisites explicitly for that branch, preserving identity behavior, failure propagation and every cost coordinate."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qa-25-qubitized-simulation-correctness",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "evidence": "The original title implied an optimality result beyond the correctness statement. Renamed it Qubitized simulation correctness, and removed the extra functional-calculus attribution from F8 while spelling out the diagonal scalar-to-operator norm estimate. Checked the 3rho+2delta+8d sqrt(epsilon_BE) budget, 10sqrt(eta) OAA leakage bound, remaining epsilon/64 telescoping allowance and trace-distance supplier. The mathematical statement remains unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qa-25-sparse-hamiltonian-block-encoding-correctness",
    "status": "proposed-owner-repair",
    "evidence": {
      "id": "thm-qa-25-sparse-hamiltonian-block-encoding-correctness",
      "status": "draft",
      "route": "frontier-owner",
      "path": "items/thm-qa-25-sparse-hamiltonian-block-encoding-correctness.md",
      "affected_use": "Facts F5 reverses root-coordinate conjugations; Proof 2.1 has the correct root pairing and its block conclusion survives.",
      "snippet": "$|u\\rangle\\langle v|$ contributes the matrix entry $\\langle e_i,u\\rangle\\langle v,e_j\\rangle$",
      "invalidated_claim": "With the declared inner product linear in the first argument, this expression is conjugate(u_i)*v_j rather than u_i*conjugate(v_j). For u=i e_1 and v=e_1 the stated expression is -i, but the rank-one map entry is i.",
      "minimality": "Replace the F5 product by <u,e_i>_root <e_j,v>_root, or directly by u_i conjugate(v_j). Keep the Statement and actual proof pairing unchanged. This unassigned frontier item was inspected but not edited or adjudicated.",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qa-25-qubitized-simulation-resource-bound",
    "outcome": "false_positive",
    "status": "no-item-repair",
    "evidence": "F1 explicitly invokes OP4 through the wrapper. The invoked algorithm Definition steps 3-4 specify two real QSVT extractions, and step 5 explicitly gives -W R W* R W. Hence F3 per-sequence counts sum to 3(d_E+d_O) signal positions and 6(d_E+d_O+2) controlled reflections; odd-degree selection replaces one signal per odd sequence with its controlled version. The actual interface supplies the allegedly absent structure, so no edit is needed."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "none",
    "reason": "No changed supplier reaches a published direct consumer in the examined inventory; the unrelated conjugation finding is an unassigned draft frontier item and is routed to its frontier owner. No published item was edited or adjudicated."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-qc-isometric-stinespring-representation",
    "outcome": "false_positive",
    "severity": "none",
    "status": "dismissed",
    "locus": "Definition",
    "reason": "False positive: def-qc-partial-trace declares thm-qc-partial-trace-characterization-and-basis-independence as its well-definedness justification. Its proof 1.1–3.1 constructs in arbitrary orthonormal bases and uniquely characterizes the operator by the basis-free trace-pairing identity; 4.1 verifies environment-basis independence. Uniqueness also removes output-coordinate dependence. Finite bases exist, including empty bases. Thus Tr_E(VXV†) is a uniquely defined complex-linear map, and bases need not be representation data.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qc-finite-kraus-choi-stinespring-equivalence",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "Facts & Assumptions [F4]",
    "reason": "F4 omitted the complete-positivity hypothesis of thm-qc-choi-trace-preservation-condition. This is nonfatal: proof 1.1 has CP from condition 1 in the forward direction and obtains CP from F2 before applying F4 in the reverse direction. Added the missing hypothesis to F4. The numbered proof and Statement remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u50-prefix-positive-tolerance",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:43:58.276649+00:00",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "statement",
      "subject": "lem-qa-26-hhl-prefix-table-synthesis-error",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "50",
      "item_sha256": "8ebb739ca2ffdae8d8408ec644252a68e9307a7cfbaaba30f36c08db1021ffdb",
      "adjudication_ref": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u50.json",
          "obligation": "lem-qa-26-hhl-prefix-table-synthesis-error|gpt-6-luna|8f855c8caf424c835d183d83e20c3c8e1c6b3a540e55dc7dc48e3c462dfe50f0"
        }
      ],
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u50.json",
          "note": "At epsilon_Psi=0 the asserted strict inequality is 0<0, which is false. Require epsilon_Psi>0 for the OP5 specialization, preserving its strict error guarantee. The prefix induction gives sqrt(w_tau/(T/2)); complemented leaf labels preserve these amplitudes by sine reflection. Unitary telescoping gives (T-1)epsilon_Psi/(100T)<epsilon_Psi/100, also for the inverse. No choice axiom is used."
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "Check actual input domains, zero spectral support, executable algorithm instructions and the complete cited proof."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u50-controlled-simulation-calls",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:43:58.276679+00:00",
      "class": "accuracy",
      "subclass": "ill-typed-construction",
      "severity": "fatal",
      "location": "definition",
      "subject": "alg-qa-26-hhl-phase-estimation",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "50",
      "item_sha256": "8d482d7ddc2050cc4849696487d9d90cc150aae5afe75241e646ebbb3c2a70db",
      "adjudication_ref": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u50.json",
          "obligation": "alg-qa-26-hhl-phase-estimation|gpt-6-luna|7e07c0dfab1ce53074a435769f6e49b174f66e85c10bf47ee458676431bc58ab"
        }
      ],
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u50.json",
          "note": "Step 2 allocated simulation tolerances without executing the controlled evolutions, so the literal procedure had no H-dependent phase. Added each forward call controlled on q_j: with this carrier’s explicitly declared order q_(L-1)...q_0, tau=sum_j 2^j x_j, yielding exp(+i H tau t0/T). The digest’s suggested q_(L-1-j) would reverse significance under this carrier’s wire names. Actual circuit adjoints remain the reverse calls. Extended the rational accuracy input to 0<p_epsilon<=q_epsilon; kernel, perturbation, normalization and 4epsilon/(4096 kappa) implementation bounds all cover epsilon=1. Also corrected the prefix-mass formula citation to its actual supplier lemma."
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "Check actual input domains, zero spectral support, executable algorithm instructions and the complete cited proof."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u50-supported-reciprocal-sums",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:43:58.276684+00:00",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-qa-26-hhl-success-amplitude",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "50",
      "item_sha256": "0cffaac2354deb8faec53cd07488f667e869ac1a42809ca5bce1d61c8a7c81a5",
      "adjudication_ref": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u50.json",
          "obligation": "lem-qa-26-hhl-success-amplitude|gpt-6-luna|2675a18d6f88125a76934692306dbbe1d03e7bff40d7e4e5fed46456fbfe480e"
        }
      ],
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u50.json",
          "note": "Zero eigenvalues are admissible off the input support, so summing beta_j/lambda_j over the full basis contains undefined 0/0 terms. Restricted only the reciprocal and probability sums to J={j:beta_j!=0}; on J the support promise gives 1/kappa<=|lambda_j|<=1 and the squared coefficients still sum to one. The Penrose construction in step 1.1 already defines the pseudoinverse correctly on the kernel. The convex-average probability bounds and normalized target are unchanged; this is a nonfatal explicit-support notation repair."
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "Check actual input domains, zero spectral support, executable algorithm instructions and the complete cited proof."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u50-amplification-per-type-false-positive",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:43:58.276687+00:00",
      "class": "accuracy",
      "subclass": "invalid-inference",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "thm-qa-26-hhl-amplified-postselection-cost",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "false-positive",
      "batch": "50",
      "item_sha256": "953f9ed35f69fb423f0c9bc5cd61200a441135ac6fd4f8df6f500aaefc887062",
      "adjudication_ref": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u50.json",
          "obligation": "thm-qa-26-hhl-amplified-postselection-cost|gpt-6-luna|80f8cbc62aa7345dd53f37e2fa4d6f5a59850b2b472a07a9b7180f48db769859"
        }
      ],
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u50.json",
          "note": "The rejection overlooks both this item’s F1, which explicitly gives K calls of each type per round, and the cited capped-amplification proof step 3.1. An accepted draw j<K uses j+1<=K calls to V and j<=K-1 calls to V-adjoint; a rejected draw uses none. Summing R rounds proves the separate RK caps. K<=5kappa and R<=16ln(1/rho)+17 give the asserted order; each V contains one B and each inverse one B-adjoint. No item edit is needed."
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "Check actual input domains, zero spectral support, executable algorithm instructions and the complete cited proof."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u50-diagonal-title",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:43:58.276691+00:00",
      "class": "accuracy",
      "subclass": "false-or-overstrong-title",
      "severity": "nonfatal",
      "location": "title",
      "subject": "ex-qa-26-diagonal-hhl",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "50",
      "item_sha256": "88b2972fb757d4ea53f23a1a0716be640a55efc19df121e5b0b3b9117bd3109d",
      "adjudication_ref": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u50.json",
          "obligation": "ex-qa-26-diagonal-hhl|gpt-6-luna|57de76c89633443fe6da4547f696a02ac70655a07cb256c839bf4e316024e32e"
        }
      ],
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u50.json",
          "note": "At kappa=1 both eigenvalues coincide, so the title incorrectly promises two distinct eigenvalues throughout the stated domain. Retitled to Two-dimensional diagonal HHL inversion, retaining kappa>=1. Direct inversion gives (|0>+kappa|1>)/sqrt(1+kappa^2); its ideal probability (1+kappa^2)/(8kappa^2) lies in (1/8,1/4], including p=1/4 at kappa=1. The grid spacing is pi epsilon/(1024kappa), with no hard tail cutoff asserted. Example and verification content remain unchanged."
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "Check actual input domains, zero spectral support, executable algorithm instructions and the complete cited proof."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "quantum-computing-algorithms-60-2026-10-15-step5-initial-r1-u50-accuracy-endpoint-interface",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:43:58.276696+00:00",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "thm-qa-26-hhl-state-correctness",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "50",
      "item_sha256": "2f3a8b6bbf43ebbcc5b8c5e5a4cc28f51abd560dcac41499029964df20db4154",
      "adjudication_ref": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u50.json",
          "obligation": "thm-qa-26-hhl-state-correctness|gpt-6-luna|b6d193e0cbc15aab5a826b1461b6e04100bb25fd7ce03590a84cc4874aa07cea"
        }
      ],
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u50.json",
          "note": "The theorem advertises epsilon=1 while its supplying algorithm originally excluded that rational input. This nonfatal interface inconsistency is repaired in the assigned supplier by permitting p_epsilon=q_epsilon; the theorem carrier needs no change. The kernel supplier and perturbation proof cover 0<epsilon<=1. Their relative kernel error is at most 10sqrt(300)epsilon/2048; the four implementation budgets add at most epsilon/512 relative error. Their sum is below 0.09epsilon, giving norm(u)>1/(4kappa), the amplification lower bound and normalized distance <epsilon also at epsilon=1. The domain-tag projection fixes the ideal dilation target and contracts the error; actual adjoints are covered by the clean-subspace hybrid. Successful branches preserve the actual good ray, not an independent fresh preparation."
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "Check actual input domains, zero spectral support, executable algorithm instructions and the complete cited proof."
      }
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No changed interface has a published or outside-frontier item consumer in the current dependency/reference inventory; no published mathematical defect was discovered. The unchanged QA25 sparse-access reference to normalized HHL uses only ||H||<=1, and the QA27 page requirement uses unchanged QLSP interfaces."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qa-27-variable-time-model",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "fixed",
    "reason": "The production paragraph left its finite certificate inequalities unspecified and did not restrict the displayed ratio to positive prior mass. This is an interface omission rather than a false VTAA bound: the consuming VTAA theorem already states positive success and exactly these inequalities. The Definition now supplies initialization, positive masses, surviving floor, loss inequality and final rational enclosure explicitly; finite certificate acquisition remains charged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qa-27-block-encoded-qlsp",
    "outcome": "false_positive",
    "defect_type": null,
    "status": "false_positive",
    "reason": "The Definition explicitly includes the QLSP state-output data of def-qa-26-qlsp-task. That supplier requires the support gap to be supplied rationally or exactly represented, so this data requirement is inherited; the later prose does not revoke it. The block-encoding supplier also explicitly requires alpha at least the operator norm, even for approximate encodings. On the supported left singular space the target (gamma/2)A+ has the correct domain and nonzero normalization. No repair is needed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-qa-27-lcu-projected-block-identity",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The frozen lemma permits distinct ancilla widths but forms a sum of component unitaries without specifying common-register extensions. Confirmed a typing gap in its stated SELECT identity. Set a=max a_j and use I tensor U_j on the common register, preserving each zero block; weighted compression is then exactly sum beta_j A_j/Lambda. The current access supplier independently specifies this convention, but its guard has changed since the frozen pack; the lemma now states the extension explicitly. CKS already embeds all component work in one common register."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-qa-27-pseudoinverse-polynomial-degree",
    "outcome": "false_positive",
    "defect_type": null,
    "status": "false_positive",
    "reason": "The rejection confuses adjoint and pseudoinverse. The track defines M dagger as conjugate transpose (def-qc-dirac-notation-conversion and def-qa-22-block-encoding); its pseudoinverse is M+. If bar A=sum sigma_j |u_j><v_j|, then pSV(bar A dagger)=sum p(sigma_j)|v_j><u_j|, approximating (delta/2)bar A+ with error at most e on supported left singular vectors. No reciprocal singular value is fed to p. The algorithm explicitly swaps the projectors and executes the adjoint encoding. Checked the local OP1A reciprocal truncation, erf interpolation, even cutoff and certificate-margin argument; they do not change this orientation."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "alg-qa-27-cks-variable-time-linear-solver",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "The admitted rho need not have an encoding or be rational, but rho/(16n) is passed to an estimator requiring rational beta. This violates a called dependency interface. The input now specifies rational rho. Also confirmed the Step-4 decoded-support counterexample and unrestricted-precision resource defect: require decoded support within the location lists and fix eta_I, dyadic zeta=eta_S, scalar stage errors, simulator tolerances and slot tolerances, retaining all access and construction costs. Least admissible scales/degrees at these tolerances have logarithmic precision length. The common-register LCU supplier is satisfied by the Fourier mode explicit idle-wire embeddings."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-qa-27-cks-stopping-time-instantiation",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The proof uses one-based intervals but initializes index minus one, leaving r_0 and s_0 undefined at its first recurrence. Set r_0=s_0=1 at the prepared all-unfinished state; then q_1=s_1>=p and the induction floor follows. Rechecked q_i>=p/(16n)>=1/(64n alpha^2)>p_min, both estimate branches and the final 1/(18n) floor. The decoded support promise now justifies the exact sparse compression. The RMS perturbation is bounded with one stopping-time-squared observable, and residual internal-work error remains covered by the final projection. The Statement is unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "alg-qa-27-cks-variable-time-linear-solver",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "Step-4 support counterexample confirmed: A=(1/2)I_2, diagonal-only lists, decoded Atilde=(1/2)I_2+tau X has arbitrarily small norm error but omitted off-diagonal compression. Require support coverage; the new explicit premise repairs the construction."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "alg-qa-27-cks-variable-time-linear-solver",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "Step-4 precision concern confirmed: an upper bound on zeta permits zeta=2^-L at fixed problem parameters, with arbitrarily many QPE repetitions. The constructor now fixes tolerances and requests least admissible scales/degrees, preserving its polylogarithmic quantum resource objective."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-qa-27-cks-linear-condition-guarantee",
    "status": "open-owner-route",
    "defect_type": "logic",
    "reason": "Direct consumer Proof 2.1 uses one-based sums and v_m but initializes r_-1=s_-1=1. Its initial r_0=s_0=1 and v_0=0 should be stated; route to frontier consumer owner. The precision defect is addressed by the repaired algorithm; add its concrete logarithmic precision calculation without changing the theorem claim."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "status": "no-published-consumer-affected",
    "reason": "Complete item/reference search for the three changed interfaces found only five draft frontier consumers, all inventoried in downstream. The sole page listing is draft. No published repair or outside-consumer maintenance was performed or proposed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-qa-28-two-level-spectral-estimate",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "facts-block",
    "reason": "F4 falsely states the alternating-series remainder rule without requiring magnitudes to tend to zero: the constant magnitudes in 1-1+1-... disprove it. This is nonfatal for the worked example because F3 already supplies convergence of the sine series at 4, hence its terms tend to zero; the decreasing tail therefore does satisfy the actual supplier hypotheses. Restored the missing F4 hypothesis and made its verification explicit in step 1.2.",
    "affected_use": "Facts F4 and Verification 1.2 invoke the first-omitted-term bound for the convergent sine series at 4.",
    "minimality": "Restore the null-sequence hypothesis and explicitly discharge it from the existing F3 convergence supplier; preserve the Example and dependencies.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "id": "lem-sine-positive-and-cosine-decreasing-on-zero-two",
    "status": "maintenance-proposed",
    "severity": "nonfatal",
    "path": "items/lem-sine-positive-and-cosine-decreasing-on-zero-two.md",
    "source_excerpt": "[L2] An alternating series with decreasing nonnegative terms has its sum between consecutive partial sums ([[thm-alternating-series-test]]).",
    "affected_use": "Published Facts L2 omits the null-sequence hypothesis; Proof 1.1 uses L2 to bound sine from below and Proof 1.2 uses it to bound cos(2) from above.",
    "invalidated_claim": "The unrestricted general L2 paraphrase is false for constant magnitudes. The lemma conclusions are not invalidated: L1 cites def-sine-and-cosine-by-power-series, whose Definition explicitly discharges convergence everywhere through lem-sine-and-cosine-series-converge-everywhere.",
    "minimality": "Separate maintenance may add terms tending to zero to L2 and make that already available convergence explicit at its uses. No published item edited or adjudicated; no Statement change proposed and no consumer propagation licensed by this proof-only observation.",
    "reason": "Report the same confirmed fact-block omission in a published supplier to owner maintenance. Its sine and cosine applications have convergence available locally, so this does not invalidate the assigned example or require a frontier repair to that published carrier.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qa-29-certified-natural-logarithm-series",
    "status": "fixed",
    "severity": "nonfatal",
    "defect_type": null,
    "reason": "The analytic remainder and termination argument are valid, but executable search instructions had no separate algorithm carrier. Extracted the exact rational loop to alg-qa-29-certified-natural-logarithm-enclosure; the lemma now proves its bound, termination and interval width. Also defined H on (-1,1) before restriction, so differentiation does not invoke a derivative on the singleton [0,0]. The finite integral remainder and geometric decay preserve every prior enclosure claim.",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u53.json",
    "uncertain": false,
    "source_urls": [
      "https://www.jirka.org/ra/html/sec_logandexp.html"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qa-29-classical-mc-chebyshev-baseline",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "reason": "Confirmed a load-bearing dependency-citation gap: the old F10 assumes a finite underlying space, whereas finite-valued independent variables may live on an infinite probability space. Replaced that bridge with the general expectation definition and the proved simple-integral formula: Y positive and negative parts are simple, giving E[Y]=sum_t t Pr(Y=t), finite first and second moments, and every later law/variance identification. The midpoint bound, zero covariances, Chebyshev event containment and sample costs remain valid. Statement unchanged.",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u53.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qa-29-counting-is-indicator-expectation",
    "status": "fixed",
    "severity": "nonfatal",
    "defect_type": null,
    "reason": "The finite weighted sum correctly proves mu=|S|/|X|, including S empty and S=X. The final probability notation used the set X as a random outcome; replaced Pr(X in S) by the event probability Pr(S) licensed by F2. This nonfatal notation defect does not affect the theorem Statement or its cardinality argument.",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u53.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "alg-qa-29-amplitude-counting-consumer",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "Confirmed wrong output target: the former return was the count estimate t-tilde although the declared expectation is |S|/N. Return the existing QA13 exact fraction estimate t-tilde/N=sin^2(pi y/M), retain the count only as an explicitly distinguished optional output, and divide the proved count-error radius by N. No new QAE routine or quantum query is introduced.",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u53.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "alg-qa-29-quantum-expectation-estimation",
    "status": "false_positive",
    "severity": "none",
    "defect_type": null,
    "reason": "The Input explicitly requires a finite expectation-estimation task. Its Definition requires finite rational bounds a,b, and the coherent-sampler Definition independently requires the same. Hence eta=epsilon/(b-a) is a positive rational at most one when a<b; b=sqrt(2) is inadmissible. The flag probability is the finite weighted mean of q(x), and affine postprocessing targets mu. The a=b branch avoids division. No repair is licensed.",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u53.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "alg-qa-29-variance-aware-monte-carlo",
    "status": "false_positive",
    "severity": "none",
    "defect_type": null,
    "reason": "The omitted tail is intentional and proved in lem-qa-29-positive-mean-dyadic-estimator step 1.1: T=E[h 1_(h>=2^k)] <=2^(-k)E[h^2]<=a s^2. Its claimed error is a(1+s)^2, not an absolute a bound for unnormalized h. For the proposed constant h=2^(k+1), a>=2^(-k) gives a h^2>=2h, so even returning zero satisfies the bound. Conditional on a good coarse sample, ||B/4||_2<1 supplies the needed normalized regime in the outer guarantee. The confidence schedules and fresh conditional calls are sound; no overflow bin or new bound is needed.",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u53.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qa-29-quantum-expectation-error-cost",
    "status": "false_positive",
    "severity": "none",
    "defect_type": null,
    "reason": "The Statement says for rational 0<epsilon<=b-a and 0<delta<1: rational qualifies both coordinated parameters. The named estimator, expectation task and QA13 median interfaces all explicitly require rational delta. Subsequent for-all-delta cost clauses retain this input scope. Checked affine flag probability, one-run radius, independent median with c=5625/29282 and 8c>1, logarithmic threshold, repeated r(M-1) versus supplied rm query counts, and constant branch. No real-delta extension is claimed or needed.",
    "evidence_report": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u53.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "status": "no_published_consumer_effect",
    "supplier_ids": [
      "lem-qa-29-certified-natural-logarithm-series",
      "alg-qa-29-amplitude-counting-consumer"
    ],
    "reason": "Exact dependency/reference searches found no published direct item consumer of either changed interface. The owning draft page remains accurate; the logarithm consumers retain every enclosure/termination conclusion. No published repair or historical judgment is asserted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "lem-qa-30-membership-height-geometry",
    "status": "owner_repair_required",
    "reason": "Unassigned draft: last Statement allows a<0 and b<0. Step 6.1 uses -a||y||>=-aR and division by ||(-v,1)||>=1 requiring nonnegative total error. Digest counterexample K=[-1,1]^2,r=1,R=2,epsilon=1/100,x=(0,-1),v=0,a=-1,b=1 satisfies premise but claimed bound is -1/25 whereas LHS=-1. Minimal interface repair requires a,b>=0 (or a suitable more general bound); check all direct consumers. Assigned theorem uses positive a,b and is sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl",
    "proposed_action": "route_to_frontier_owner"
  },
  {
    "ledger": "defect",
    "path": "research/defect-ledger.jsonl",
    "proposed_action": "record_adjudication",
    "id": "def-qa-30-sdp-reference-state-access",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The general-dimension access clause did not require the supplied unitary to prepare Phi_d. Added its exact clean-ancilla preparation equation, zero amplitude on unused labels, and complete-unitary inverse convention. The tensor Hadamard/CNOT verification also covers d=1 with no gates. No choice or general-dimension synthesis theorem is inferred.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "other"
  },
  {
    "ledger": "defect",
    "path": "research/defect-ledger.jsonl",
    "proposed_action": "record_adjudication",
    "id": "lem-qa-30-finite-grid-quantum-subgradient",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "Uniformity of a grid does not specify a uniform random center. Added one uniform draw with b independent fair bits per coordinate, held fixed during the median repetitions. The integrated second-difference expectation and finite Markov bound then license step 2.1; conditional independent runs, the QFT tail, phase perturbation, median bound and subgradient transfer yield the displayed error and failure below rho.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "defect",
    "path": "research/defect-ledger.jsonl",
    "proposed_action": "record_adjudication",
    "id": "thm-qa-30-quantum-membership-separation-cost",
    "outcome": "false_positive",
    "status": "false_positive",
    "reason": "False positive: the cited algorithm OP7 Deterministic precision budget explicitly bounds address error by min(epsilon/1000,delta/(1000L)), per-run operator error by 1/1000, and rotation/emitted direction slack by eta/100; OP7.6 repeats the output budget. These imply the height displacement and separator slack used in steps 2.1 and 4.1. OP7.4 already samples a uniform fixed center, meeting the repaired grid interface. The height-lemma unrestricted-a defect is real but this invocation has a=eta/(2R)>0,b=eta/3>0.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "path": "research/defect-ledger.jsonl",
    "proposed_action": "record_adjudication",
    "id": "thm-qa-30-smooth-fourier-approximation",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Confirmed nonfatal certification error in step 5.1: 1+e/8 need not be rational for real e. Replaced that assertion by the exact normalization and its correct conditional rationality. The Statement, truncation errors (e/16+e/32+e/512<e/8), coefficient norm, rounding bound, frequency count and evolution-time estimates are unchanged. LCU permits supplied complex amplitudes; finite synthesis errors remain explicitly charged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "path": "research/defect-ledger.jsonl",
    "proposed_action": "record_adjudication",
    "id": "thm-qa-30-flagged-trace-error-and-cost",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "RelProb requires rational c and failure budgets; theta/36 was invalid for irrational theta. Supply rational theta/72<c_rel<=theta/36 and rational confidence budgets, use inequalities in step 5.1, and retain the inverse-tolerance cost since c_rel>Theta(theta). The operator-product error <=(5/2)e, probability perturbation <=15e, floors, ratio bias <=3theta/100, and final rounding still give error below theta. No restriction to rational theta is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "defect",
    "path": "research/defect-ledger.jsonl",
    "proposed_action": "record_adjudication",
    "id": "lem-qa-30-mmw-to-sdp-feasibility",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "Confirmed missing finite-input hypotheses: the two-sparse supplier requires rational alpha,r,theta,b_j, and the claimed exact rational output also requires e/R rational. Made b_j,R,r,e and alpha explicitly rationally encoded, as already required by the consuming SDP solver input. Then theta=e/(24Rr) is rational and c_rel=theta/36 is a valid flagged-trace choice. Ideal eta and matrices remain real with all implementation errors budgeted. The MMW contraction, regret rearrangement and identity shift give the unchanged reserve e/(2R) and objective alpha+e.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "defect",
    "path": "research/defect-ledger.jsonl",
    "proposed_action": "record_adjudication",
    "id": "thm-qa-30-sdp-matrix-expectation-cost",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "Confirmed that QA29 and the sampler procedure accept rational precision/confidence inputs, while the theorem allowed real tau and delta. Preserve those real targets by supplying rational tau/2<t<=tau and delta/2<beta<=delta and invoking the existing algorithm at (t,beta). Its estimator tolerance t/2 is rational, at most tau/2 and greater than tau/4, preserving the query order. The unit-vector expansion bounds expectation bias by 2xi<=tau/2, so total error is at most tau with failure at most delta.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "defect",
    "path": "research/defect-ledger.jsonl",
    "proposed_action": "record_adjudication",
    "id": "thm-qa-30-quantum-sdp-solver-cost",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Confirmed nonfatal citation-interface overstatement: the resource supplier proves the disputed intermediate estimates in proof steps 1.1,2.2,6.1,6.2, but exports only aggregate query bounds and a gate ledger in its Statement. Repaired F3 and steps 1.1,2.1,3.1 to invoke those exported aggregate bounds directly. Added the existing Fourier theorem as a direct dependency and derived the retained factory count locally: Taylor length O~(K_t), degree O~(K_t^2), direct convolutions O~(K_t^5), summed O~(T+eta^5 T^6)=O~(Q^7). No advertised query/gate-boundary or reference-cost claim changes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published",
    "path": "research/published-consumer-supplier-ledger.md",
    "proposed_action": "no_change",
    "reason": "No published supplier or consumer defect was discovered in these assigned repairs. All ten examined direct consumers are draft frozen-frontier items. The height-lemma alert is an unassigned draft frontier finding routed separately; no published repair, audit or certification is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "alg-qa-finite-cyclic-discrete-logarithm",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "locus": "definition",
    "finding": "Unsupported access previously fell through to an oracle-dependent sampler. The explicit early return repairs this missing branch.",
    "repair": "Check for complete power-evaluation profile 2 before constructing f; return UNSUPPORTED_ACCESS when absent."
  },
  {
    "ledger": "defect-ledger",
    "id": "alg-qa-dihedral-hidden-subgroup-sieve",
    "outcome": "false_positive",
    "status": "dismissed",
    "finding": "The current deps list does not contain thm-qa-dihedral-sieve-scope, and justified_by is empty. Its terminal link describes where the properties are proved; it is not a prerequisite used to execute the sieve. The theorem depends on the algorithm in the correct direction. The supplied Fourier and CNOT identities give the specified phase and difference branches; the parity recursion uses the explicit injective coordinate maps and strictly lowers r."
  },
  {
    "ledger": "defect-ledger",
    "id": "thm-qa-cyclic-group-power-evaluation-correctness",
    "outcome": "false_positive",
    "status": "dismissed",
    "finding": "Step 1.1 explicitly defines u_j and v_j by their significance expansions u=sum_j u_j 2^j and v=sum_j v_j 2^j; these are not declared to be the ordered word coordinates in the encoding definition. For a big-endian physical word b, u_j=b_(L-1-j). Thus q=4 and u=2 has physical word 10 but significance digits u_0=0,u_1=1: the loop applies g_1=g^2, not g_0. The accumulator induction and clean compute-copy-uncompute argument are valid, with 2L forward calls, 4L wrapper calls and at most 3w extra flips/copies. No text asserts that digit subscript j is physical wire j."
  },
  {
    "ledger": "defect-ledger",
    "id": "thm-qa-finite-cyclic-discrete-logarithm-correctness-success-cost",
    "status": "owner_route",
    "route": "frontier-owner",
    "finding": "The repaired procedure now explicitly returns UNSUPPORTED_ACCESS before any sample on an uncontrolled-only profile without f. The theorem must distinguish such profiles from the supported profiles to which its sampling/success guarantee applies.",
    "affected_use": "Statement: For every valid access profile ... every returned value is verified and equals the unique a; success at least 1-delta. Fact F1 assumes t exact samples are performed.",
    "minimality": "Qualify the success guarantee and Fact F1 with availability of a direct total f oracle or the complete supported power-evaluation fallback; restrict returned-value wording to exponent outputs. No change to the sample law, success calculation or resource bounds for supported executions is needed."
  },
  {
    "ledger": "defect",
    "id": "lem-qa-32-indexed-to-full-list-conversion",
    "severity": "nonfatal",
    "location": "proof-step",
    "disposition": "fixed",
    "finding": "Step 2.1 enumerated at most q(n) nodes although that bounds only non-input nodes. Input locations and labels were omitted.",
    "repair": "Enumerate N_n <= n+q(n) actual nodes, retaining input labels and constant values; step 3.1 now checks all records.",
    "evidence": "items/lem-qa-32-indexed-to-full-list-conversion.md, F1 and steps 2.1–3.1; supplier items/def-logspace-uniform-circuit-family.md, Definition."
  },
  {
    "ledger": "defect",
    "id": "lem-qa-32-exact-clifford-t-boolean-circuit-embedding",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "finding": "F4 described the syntax supplier as defining a plain ordered gate list, although it defines chronological disjoint-support layers.",
    "repair": "State layered syntax faithfully and explicitly assign every emitted gate to a singleton layer before QC14 full-list serialization.",
    "evidence": "items/lem-qa-32-exact-clifford-t-boolean-circuit-embedding.md, F4 and step 6.1; items/def-qc-circuit-syntax-and-register-order.md, Definition; items/def-qc-uniform-circuit-family.md, gate records."
  },
  {
    "ledger": "defect",
    "id": "ex-qa-32-simon-small-instance",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "finding": "F2 attributed a uniform sample law to a definition permitting arbitrary nonnegative weights summing to one. The needed uniformity and independence were already correctly given elsewhere.",
    "repair": "F2 now states only weights and event summation. F1 supplies uniform YES law; 2.1 derives the 1/256 tuple weight from independent runs before summing.",
    "evidence": "items/ex-qa-32-simon-small-instance.md, F1–F2 and step 2.1; items/def-finite-probability-space-and-event.md, Definition; items/thm-qa-32-simon-sample-rank-correctness.md, Statement and proof 2.1, 3.2; items/alg-qa-32-simon-query-rank-test.md, independent runs."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-qa-33-effective-finite-matrix-encoding",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "The original per-member quantifier permitted arbitrary hard-coded, noncomputable sequences. One fixed index-to-description algorithm now witnesses uniformity. The fixed entry evaluator, exact-matrix promises, and per-instance encoding interface are preserved. Direct consumers use the entry evaluator rather than per-member advice.",
    "status": "fixed"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-qa-33-witness-verifier-interface",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "Polynomial bounds alone did not make the witness/workspace split computable: even a fixed total width can conceal an uncomputable split. The fixed unary-length generator now emits both widths and the complete circuit/output specification; one fixed algorithm evaluates acceptance. Workspace is explicitly initialized to zero without imposing the stronger exact clean-return contract. The isometry J_x and acceptance effect are unchanged.",
    "status": "fixed"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qa-33-finite-dimensional-unitary-synthesis",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "For ordered pair (g_{d-1},y) with target bits (1,0), the native gate acts in reversed order, so the original construction implemented XVX instead of V. The final native block is now XVX precisely in that branch. Gray-path conjugation, determinant one, conditioned Cauchy evaluation, error budgets, and exact workspace uncomputation then remain valid. Statement unchanged.",
    "status": "fixed"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qa-33-uniform-programmed-circuit-interpreter",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "L(n) counts records rather than bits. The proof now computes all B(n)=L(n)r(n) bits, with three type bits and two logarithmic-width address fields. This supplies every comparison in step 2.1 with its complete program record. Polynomial enumeration, exact reversible Boolean computation, fixed-arity controlled templates, and telescoping operator error are preserved; Statement unchanged.",
    "status": "fixed"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "alg-qa-33-qma-parallel-majority-amplification",
    "outcome": "confirmed_nonfatal",
    "reason": "The verifier interface is used explicitly in the inputs but omitted from direct deps, although already supplied transitively by the promise-class definition. Added its direct edge and clarified that each verifier receives zero-initialized workspace. Input copying uses only a classical basis string; blocks, workspaces, and measured tuples are disjoint, and exact rational rounding implements the midpoint threshold.",
    "status": "fixed"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-qa-33-feynman-kitaev-history-hamiltonian",
    "outcome": "confirmed_nonfatal",
    "reason": "The clock summands are mutually orthogonal, so the displayed history has squared norm N^{-1} sum_t ||U_t...U_1 phi||^2=||phi||^2. The formula is retained for every vector, and the word normalized is now restricted exactly to unit initial vectors. This preserves the linear history map needed by kernel and compression arguments. Local windows, weights, and tensor ordering are unchanged.",
    "status": "fixed"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qa-33-feynman-propagation-path-gap",
    "outcome": "confirmed_nonfatal",
    "reason": "The computation-first convention makes the conjugation identity I_comp tensor L_T, as direct multiplication of V_t^* U_t V_{t-1} verifies. Corrected the swapped factors and clarified history normalization. The cosine eigenvectors, endpoint equations, first nonzero eigenvalue, and sine chord bound establish the same kernel and gap; Statement unchanged.",
    "status": "fixed"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qa-33-kkr-legal-clock-restriction",
    "outcome": "confirmed_nonfatal",
    "reason": "The projection estimate holds for every qualifying integer but polynomial resources require an explicit bounded choice. The proof now chooses floor(2K+4K^2/g)+1 and bounds its magnitude and encoding length. Counting inverted clock pairs proves the legal kernel and unit illegal-clock gap; the strict penalty inequality then gives error below g/4. Statement unchanged.",
    "status": "fixed"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qa-33-kkr-initial-state-restriction",
    "outcome": "confirmed_nonfatal",
    "reason": "The endpoint identities are valid for arbitrary T>=1, but the original unconditional restatement of the padded KKR supplier obscured that generality. Defined S_prop directly by the linear full-history map, made the KKR identification conditional, and proved R*R=I and both endpoint compressions directly. This preserves the universal claim, including empty A, and yields the stated input gap and rejection-energy bounds without importing padding assumptions.",
    "status": "fixed"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qa-33-2-local-hamiltonian-qma-complete",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "The cited approximate interpreter did not justify exact predicate compilation. Replaced that use by the Boolean-circuit supplier and an explicit exact compute/copy/uncompute construction with the synthesis lemma’s exact Toffoli word; therefore the original 3/4 and 1/4 bounds hold with zero compilation error. Also corrected padding to L-1 one-qubit steps while keeping the four Z steps adjacent to CZ. Four errors below 1/64 give NO>11/16 and YES<=1/4 before rationalization.",
    "status": "fixed"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "All discovered direct consumers of the five changed interfaces are draft items in the frozen frontier. The consulted published Chernoff supplier already contains the disputed bounds in proof steps 6.1 and 7.1; no published defect or repair is proposed.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qa-33-unary-clock-locality",
    "action": "owner_route",
    "outcome": "confirmed_nonfatal",
    "reason": "Proof 2.1 does not upper-bound an arbitrary integer J_clock satisfying its lower bound, although the Statement correctly claims only existence of a polynomial choice.",
    "status": "open-outside-assignment",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication_and_repair",
    "id": "def-qa-34-heralded-verification-contract",
    "outcome": "confirmed_nonfatal",
    "finding": "The branch positivity and trace bound follow from the complete-positivity argument and normalized outcome weights in thm-qc-instrument-outcome-law-normalizes; thm-qc-instrument-conditional-state-is-density proves positivity and trace one after division by positive p_s. Added these actual theorem dependencies; Definition is byte-for-byte unchanged. This repairs omitted proof suppliers, without changing a mathematically valid contract.",
    "resolution": "fixed_in_assigned_draft",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u58.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication_and_repair",
    "id": "alg-qa-34-error-budget-allocation",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "finding": "The original compiler list permits incompatible adjacent interfaces, making chronological composition undefined. Added declared interfaces T_0,...,T_L, matching input/output requirements at every admissible budget, and the composite output interface. The empty case now specifies the identity and its records. Rational budgets and terminating calls still give a finite procedure; no compiler accuracy is inferred from a request.",
    "resolution": "fixed_in_assigned_draft",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u58.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication_and_repair",
    "id": "lem-qa-34-modfkv-sampling-gram-bound",
    "outcome": "confirmed_nonfatal",
    "finding": "F1 incorrectly attributed the assumed arbitrary q_i law to squared-norm sample/query access. Replaced it by the finite-law definition and explicitly noted that q_i=0 forces a zero matrix row. The statement already supplies independent samples from q. Direct expansion gives E X=M^T M, E||X||_F^2<=||M||_F^4/alpha; centered cross terms vanish and Markov gives the tail. Neither the statement nor its column analogue changed.",
    "resolution": "fixed_in_assigned_draft",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u58.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication_and_repair",
    "id": "thm-qa-34-adaptive-failure-union-bound",
    "outcome": "confirmed_nonfatal",
    "finding": "The Statement already supplies stage-failure events and positive-history conditional bounds. A heralded-procedure definition does not imply that every stage is heralded. Removed that unsupported F5 invocation and based the first-failure partition on the given model. Disjoint first failures, finite conditional-history sums, independent miss probabilities, and the capped geometric tail-sum formula establish all assertions, including unreachable stages and p=0 or p=1 where applicable.",
    "resolution": "fixed_in_assigned_draft",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u58.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication_and_repair",
    "id": "ex-qa-34-heralded-success-branch",
    "outcome": "confirmed_nonfatal",
    "finding": "F2 misquoted the four contract coordinates by substituting a separate failure-probability field for an unconditional guarantee. Corrected that citation and explicitly computed failure probability 1-p. Scalar nonnegative amplifications are CP, the two traces sum to tr X, and p_s=p. For p>0 the normalized branch is rho; at p=0 the specified branch is bottom. The Example itself is unchanged.",
    "resolution": "fixed_in_assigned_draft",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u58.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication_and_repair",
    "id": "thm-qa-34-error-budget-allocation-correctness",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "finding": "Confirmed the counterexample: auxiliary gates on a before and b after a two-wire stage have isolated auxiliary depth 1 and stage depth 1, but combined depth 3. The repaired interface retains chronological auxiliary blocks B_0,...,B_L and defines d_aux as the sum of their separate depths. Concatenating minimum block and stage schedules respects all cross-block precedences and proves the same additive form. Matching channel interfaces, finite histories, local budgets, disjoint count records, and disjoint workspace allocations establish the remaining guarantees.",
    "resolution": "fixed_in_assigned_draft",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u58.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication_and_repair",
    "id": "thm-qa-34-linear-combination-sampler-correct-and-cost",
    "outcome": "confirmed_nonfatal",
    "finding": "The O(kR) entry-query count is correct, and the original sentence already charges mixture/sample access separately. Its following unqualified query-cost phrase nevertheless conflates that count with declared operation costs. This is a nonfatal accounting ambiguity. Clarified the entry, mixture, and sample counts and supplied B_setup+R(kQ+B_mix+B_samp) when uniform per-call upper bounds exist. Independently checked P(i)a_i=Q(i)/(kC), kC>=1, the capped miss bound, and the expected-trial limit kC; all probabilistic claims are unchanged.",
    "resolution": "fixed_in_assigned_draft",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u58.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_out_of_assignment",
    "id": "prop-qa-34-sample-inner-product-estimator",
    "route": "frontier owner / controller Step-4 concern route",
    "affected_use": "Statement supplies x norm and sample access only; proof 1.1 computes Z=||x||^2 y_I/x_I.",
    "invalidated_claim": "An estimator from only those interfaces cannot uniformly recover a signed inner product: x=(1) and x=(-1), y=(1), have identical norm and sample laws but disjoint epsilon=1/2 success intervals.",
    "minimality": "Require x entry-query access in the Statement, as supplied by the Tang consumer; do not alter the finite variance or median argument. This item is a draft frozen-frontier concern outside unit 58 rejected assignments; no edit or adjudication was made here."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_out_of_assignment",
    "id": "thm-qa-34-tang-recommendation-sampler",
    "route": "frontier owner / controller Step-4 concern route",
    "affected_use": "Proof 1.1 tests b=0 or k=0 before running ModFKV and obtaining its retained rank k.",
    "invalidated_claim": "The described execution tests an uninitialized sketch-dependent output k.",
    "minimality": "Keep the b=0 test first; obtain the sketch and its k before testing k=0. This is separate from the examined sampler-theorem interface; no consumer edit is authorized in this unit."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_out_of_assignment",
    "id": "thm-qc-channel-composition-hybrid-bound",
    "route": "current draft frontier owner / controller",
    "affected_use": "Statement permits finite-dimensional channel spaces without requiring H_0,H_1,H_2 nonzero; Given requires nonzero spaces and def-qc-diamond-norm Definition excludes zero input/output spaces.",
    "invalidated_claim": "For H_0=H_1=0 and H_2=C the channel maps exist by vacuous CP and trace preservation, but the cited diamond quantities are outside their definition.",
    "minimality": "Make the nonzero-space requirement explicit in its Statement. The batch-58 hybrid theorem already assumes nonzero H_j, so its use is valid. Current status is draft, not published; no published-repair route is asserted."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record_scope_observation_only",
    "reason": "All five direct consumers of the three changed interfaces are current draft frozen-frontier items. No published or outside consumer is affected. The Step-4 digest alert naming thm-qc-channel-composition-hybrid-bound was checked against its actual current draft carrier and routed to its frontier owner, rather than represented as a published repair. No published item was edited or adjudicated."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-qa-35-finite-probability-entropy-and-stochastic-matrices",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "statement",
    "description": "Acceptance dot product used k-coordinate p and m-coordinate X without matching dimensions. Explicit probability row p and row X on [m], with sum_i p_i X_i, now repairs this notational defect; common-set divergence is explicit.",
    "evidence_path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u59.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-qa-35-smp-prior-message-decomposition",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "statement",
    "description": "X_j was called a column while multiplied as X_j^T on the right of a row. Statement and Proof 2.1 now define it as the row transpose of column j, preserving all quantities and bounds. Entropy-drop F1 requires the same wording in its owner lane.",
    "evidence_path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u59.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-qa-35-trace-norm-tensor-density-identity",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "facts-block",
    "description": "F4 omitted the nonnegativity hypothesis of the diagonalization characterization; F7 similarly omitted the square-root hypothesis. Both restored. The proof uses only valid instances and the Statement is unchanged.",
    "evidence_path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u59.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "alg-qa-35-swap-test-fingerprint",
    "disposition": "false-positive",
    "location": "statement",
    "description": "The definition asserts no general error bound. Positive distance and a sufficient repetition count are explicit hypotheses/choices of the separate correctness theorem; the high-error example contradicts neither interface. Carrier unchanged.",
    "evidence_path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u59.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-qa-35-swap-test-effect",
    "severity": "fatal",
    "disposition": "open",
    "route": "frontier-owner lane; item is unassigned here",
    "location": "statement",
    "description": "Verified digest concern in current Definition: Let H be a finite-dimensional complex inner-product space includes H=0, yet its final sentence promises a projective measurement, whose actual supplier def-qc-projective-measurement explicitly requires nonzero H. Restrict the measurement domain to nonzero H; inspect direct consumers after that Definition change. The assigned algorithm uses a 2^L-dimensional register with L>=1 and is unaffected. No edit or adjudication of this unassigned item is claimed.",
    "affected_use": "items/def-qa-35-swap-test-effect.md Definition first sentence and final projective-measurement promise; items/def-qc-projective-measurement.md Definition first sentence.",
    "minimality": "Add nonzero to H in the supplier Definition; projections remain defined on zero space algebraically, but are not measurements under the library definition.",
    "evidence_path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u59.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison",
    "disposition": "already_recorded_local_published_repair",
    "route": "owner/maintenance; preserve existing ledger marker, no new repair",
    "affected_use": "The digest alert concerns Proof 1.4 factorization of UAV; the current file has (UU_0)Sigma(V_0^*V)=(UU_0)Sigma(V^*V_0)^*, the correct factorization.",
    "invalidated_claim": "The historical incorrect factorization identified by the digest is absent from the current file. The existing local-published-repair marker names its proof-only correction and the frontmatter links the matching receipt. No published consumer is newly found defective here.",
    "minimality": "Do not duplicate or edit the already recorded published repair; the assigned trace-distance lemma does not use this published norm theorem, and its Frobenius lower-bound consumer uses the separate formula. No Statement/Definition change is observed.",
    "evidence_path": "research/quantum-computing-algorithms-60-2026-10-15-owner-step4-published-alerts/unitary-invariance/repair-receipt.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "rows": [
      {
        "run": "quantum-computing-algorithms-60-2026-10-15",
        "at": "2026-10-16",
        "class": "accuracy",
        "severity": "nonfatal",
        "caught_at_stage": "5-adjudicate",
        "caught_by_role": "group-alpha",
        "disposition": "fixed",
        "repair_cost": "inline-fix",
        "evidence": [
          {
            "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u6.json",
            "anchor": "decisions, reviews, repair_notes"
          }
        ],
        "defect_id": "qca60-step5-initial-r1-u6-unitary-compactness-citation",
        "subclass": "citation-missing",
        "location": "proof-step",
        "subject": "thm-qc-unitary-group-compact",
        "description": "Step 2.1 omitted the declared bridge between metric and topological compactness. Added the exact equivalence supplier to deps/F1 and the proof, with manifest/contract synchronization; the same open-cover condition makes the omission nonfatal.",
        "item_sha256": "6e34c9d770b16c3a557b224efb96ffdba8816dafecb31bae76f5cc651c046330"
      },
      {
        "run": "quantum-computing-algorithms-60-2026-10-15",
        "at": "2026-10-16",
        "class": "accuracy",
        "severity": "nonfatal",
        "caught_at_stage": "5-adjudicate",
        "caught_by_role": "group-alpha",
        "disposition": "fixed",
        "repair_cost": "inline-fix",
        "evidence": [
          {
            "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u6.json",
            "anchor": "decisions, reviews, repair_notes"
          }
        ],
        "defect_id": "qca60-step5-initial-r1-u6-cloner-zero-boundary",
        "subclass": "false-boundary-disposition",
        "location": "contract-row",
        "subject": "lem-qc-optimal-cloner-attains-bound",
        "description": "Contract zero-boundary evidence incorrectly said m=n implies E=I-Pi_sym,n=0. For d=2 and n=m=2, E fixes the nonzero antisymmetric vector. Replaced this with the correct n=1 or d=1 zero-complement cases; the item already treats general m=n correctly.",
        "item_sha256": "097cca28a014f64f689bb408a8d5ce534f9d48bb753b93ccdf55c1b584eeab37"
      },
      {
        "run": "quantum-computing-algorithms-60-2026-10-15",
        "at": "2026-10-16",
        "class": "accuracy",
        "severity": "nonfatal",
        "caught_at_stage": "5-adjudicate",
        "caught_by_role": "group-alpha",
        "disposition": "fixed",
        "repair_cost": "inline-fix",
        "evidence": [
          {
            "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u6.json",
            "anchor": "decisions, reviews, repair_notes"
          }
        ],
        "defect_id": "qca60-step5-initial-r1-u6-cloner-haar-use",
        "subclass": "contract-mismatch",
        "location": "contract-row",
        "subject": "lem-qc-optimal-cloner-attains-bound",
        "description": "Contract Axiom of Choice row named nonexistent proof step 1.2; the actual Haar moment is applied in step 2.1. Corrected uses to [2.1], with no claim or assumption change.",
        "item_sha256": "097cca28a014f64f689bb408a8d5ce534f9d48bb753b93ccdf55c1b584eeab37"
      }
    ]
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published carrier was edited or found defective. All assigned Statements are unchanged, and no new prerequisite interface was created, so this review produces no published-consumer maintenance event."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposal",
    "row": {
      "defect_id": "qa60-step5-initial-r1-u60-real-time",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:47:17.228079+00:00",
      "batch": "60",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-qa-36-finite-adiabatic-path-model",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "source": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
      "subclass_note": "With V=C, H(s)=I and unrestricted T=i, U_T(s)=exp(s), so U_T is not unitary and the evolved scalar density has trace exp(2). Declaring T real makes (U_T*U_T)'=iT U_T*H U_T-iT U_T*H U_T=0. Real negative and zero parameters remain mathematically valid; simulation consumers separately require nonnegative or positive real times.",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
          "note": "With V=C, H(s)=I and unrestricted T=i, U_T(s)=exp(s), so U_T is not unitary and the evolved scalar density has trace exp(2). Declaring T real makes (U_T*U_T)'=iT U_T*H U_T-iT U_T*H U_T=0. Real negative and zero parameters remain mathematically valid; simulation consumers separately require nonnegative or positive real times."
        },
        {
          "path": "items/def-qa-36-finite-adiabatic-path-model.md",
          "anchor": "definition"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
          "obligation": "def-qa-36-finite-adiabatic-path-model:gpt-6-luna:d730d9ebf1dbd53dbbf806ba3753afdbe9837558eb43fa3a53775c2389b2515b"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposal",
    "row": {
      "defect_id": "qa60-step5-initial-r1-u60-wrapper-costs",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:47:17.228079+00:00",
      "batch": "60",
      "class": "accuracy",
      "subclass": "other",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-qa-36-adiabatic-resource-model",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "false-positive",
      "repair_cost": "none",
      "source": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
      "subclass_note": "The Definition expressly adopts the finite term-list access interface, whose Definition requires Q_wrap and G_wrap as separate composition/generation costs. Its own resource list also separates queries, gates, description bits and generator time and says an unavailable coordinate is not zero. The list does not waive the incorporated wrapper charges or assert those charges vanish; failing to repeat the supplier symbols is not a contradictory access contract. No mathematical or accounting repair is necessary.",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
          "note": "The Definition expressly adopts the finite term-list access interface, whose Definition requires Q_wrap and G_wrap as separate composition/generation costs. Its own resource list also separates queries, gates, description bits and generator time and says an unavailable coordinate is not zero. The list does not waive the incorporated wrapper charges or assert those charges vanish; failing to repeat the supplier symbols is not a contradictory access contract. No mathematical or accounting repair is necessary."
        },
        {
          "path": "items/def-qa-36-adiabatic-resource-model.md",
          "anchor": "definition"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
          "obligation": "def-qa-36-adiabatic-resource-model:gpt-6-luna:7e8fe065d42ca60d450197ab84ac4de6fc67aea94ec41aeaf7c24046c1274ad1"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposal",
    "row": {
      "defect_id": "qa60-step5-initial-r1-u60-zero-domain",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:47:17.228079+00:00",
      "batch": "60",
      "class": "accuracy",
      "subclass": "citation-truncated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-qa-36-jrs-finite-band-estimates",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "source": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
      "subclass_note": "F3 states the maximum-on-unit-vectors formula without its nonzero-domain qualification, although the inherited model permits ran Q=0. This is a nonfatal fact restatement defect: F5 already assigns zero norm to maps with a zero space, P=I is constant, and all reduced blocks and derivative bounds then vanish. Added the zero-domain convention to F3; the Statement and complete proof steps are unchanged.",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
          "note": "F3 states the maximum-on-unit-vectors formula without its nonzero-domain qualification, although the inherited model permits ran Q=0. This is a nonfatal fact restatement defect: F5 already assigns zero norm to maps with a zero space, P=I is constant, and all reduced blocks and derivative bounds then vanish. Added the zero-domain convention to F3; the Statement and complete proof steps are unchanged."
        },
        {
          "path": "items/lem-qa-36-jrs-finite-band-estimates.md",
          "anchor": "facts-block"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
          "obligation": "lem-qa-36-jrs-finite-band-estimates:gpt-6-luna:603198800826ab91cdac105ce6c158081bf53b743f6ef56b29519f155049983a"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposal",
    "row": {
      "defect_id": "qa60-step5-initial-r1-u60-operator-certificate",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:47:17.228079+00:00",
      "batch": "60",
      "class": "accuracy",
      "subclass": "other",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "alg-qa-36-discretized-path-simulation",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "false-positive",
      "repair_cost": "none",
      "source": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
      "subclass_note": "The Input explicitly says that if any required coefficient, call, or certificate is unavailable, the algorithm returns no circuit; Step 2 explicitly requests a combined operator-error certificate. Scalar coefficient certificates alone do not establish that operator bound, but the procedure never claims they do or promises success without the combined certificate. Its correctness consumer likewise assumes the certificates required by the simulator in Given and uses the certified operator bound in Proof 2.1. Thus missing term-norm data legitimately selects the documented no-circuit branch rather than violating a claimed unconditional error guarantee.",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
          "note": "The Input explicitly says that if any required coefficient, call, or certificate is unavailable, the algorithm returns no circuit; Step 2 explicitly requests a combined operator-error certificate. Scalar coefficient certificates alone do not establish that operator bound, but the procedure never claims they do or promises success without the combined certificate. Its correctness consumer likewise assumes the certificates required by the simulator in Given and uses the certified operator bound in Proof 2.1. Thus missing term-norm data legitimately selects the documented no-circuit branch rather than violating a claimed unconditional error guarantee."
        },
        {
          "path": "items/alg-qa-36-discretized-path-simulation.md",
          "anchor": "definition"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
          "obligation": "alg-qa-36-discretized-path-simulation:gpt-6-luna:8c022b59adfc531536f48960ac9ec4e3f4dd6984f7f5113ecf97d76a10e80249"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposal",
    "row": {
      "defect_id": "qa60-step5-initial-r1-u60-nonnegative-title",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:47:17.228079+00:00",
      "batch": "60",
      "class": "accuracy",
      "subclass": "false-or-overstrong-title",
      "severity": "nonfatal",
      "location": "title",
      "subject": "lem-qa-36-history-path-ground-vector-monotonicity",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "source": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
      "subclass_note": "The Statement correctly restricts strict positivity to s>0 and explicitly gives e_0 at s=0, but the unqualified Positive title misdescribes the endpoint. This is nonfatal: replaced it by Nonnegative. Also corrected Proof 1.1 to state propagation diagonal entries 1/2 at endpoints and 1 internally, as follows from each h_l having factor 1/2; the former degree wording obscured that normalization. The displayed H_0 and every Statement clause remain unchanged.",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
          "note": "The Statement correctly restricts strict positivity to s>0 and explicitly gives e_0 at s=0, but the unqualified Positive title misdescribes the endpoint. This is nonfatal: replaced it by Nonnegative. Also corrected Proof 1.1 to state propagation diagonal entries 1/2 at endpoints and 1 internally, as follows from each h_l having factor 1/2; the former degree wording obscured that normalization. The displayed H_0 and every Statement clause remain unchanged."
        },
        {
          "path": "items/lem-qa-36-history-path-ground-vector-monotonicity.md",
          "anchor": "title"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
          "obligation": "lem-qa-36-history-path-ground-vector-monotonicity:gpt-6-luna:f275027e93bac0b5959481d1e4613435d53cd9569eca28d6fc35f14f8277511b"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposal",
    "row": {
      "defect_id": "qa60-step5-initial-r1-u60-propagation-diagonal",
      "run": "quantum-computing-algorithms-60-2026-10-15",
      "at": "2026-10-16T05:47:17.228079+00:00",
      "batch": "60",
      "class": "accuracy",
      "subclass": "arithmetic-error",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-qa-36-history-path-ground-vector-monotonicity",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "source": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
      "subclass_note": "Proof 1.1 used the unscaled combinatorial degrees 1 and 2 to describe the propagation diagonal. Each h_l in the actual algorithm has factor 1/2; the entries are 1/2 at path endpoints and 1 internally. Clarified those entries without changing H_0 or the Statement.",
      "evidence": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
          "note": "Proof 1.1 used the unscaled combinatorial degrees 1 and 2 to describe the propagation diagonal. Each h_l in the actual algorithm has factor 1/2; the entries are 1/2 at path endpoints and 1 internally. Clarified those entries without changing H_0 or the Statement."
        },
        {
          "path": "items/lem-qa-36-history-path-ground-vector-monotonicity.md",
          "anchor": "Proof 1.1"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u60.json",
          "obligation": "propagation-diagonal"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change_proposed",
    "reason": "No potentially defective published supplier or consumer was found in these assigned reviews. All nine direct consumers of the changed finite-path Definition are draft frozen-frontier items, and each use remains sound. The operator-norm supplier explicitly supplies the zero-domain convention; the local F3 summary was the only defect there. No published item was edited or adjudicated; no published repair or audit marker is proposed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "def-qc-controlled-unitary-access",
    "model": "gpt-6-luna",
    "context_sha256": "8923e6083a52339599547b8e2bfc8fedab871ef2d3bf8eb576d9288ccb3b5dc2",
    "outcome": "false_positive",
    "reason": "False positive: L2 separates its mathematical matrix/basis restatement from operational status notes. The supplier occurs in batch-7.pages.json and library/quantum-computing/qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates.md, whose status is draft. Those true inventory claims are not used to infer unitarity. Steps 1.1–3.1 independently give the orthogonal two-branch norm formula, norm preservation by U, and inverse diag(I,U^-1), also for the zero target. No mathematical citation or access assumption is defective.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "def-qc-cnot-and-control-target-order",
    "model": "gpt-6-luna",
    "context_sha256": "395e18c7db6ff4fd4e43d9cb061bae531dcdd848687d1b7b5c2e69051a956dc6",
    "outcome": "false_positive",
    "reason": "The closure claim is literally true: def-qc-controlled-unitary-access lists def-qc-one-qubit-gate-alphabet-and-rotations in deps, and that supplier Verification step 1.1 proves X*=X and X*X=I, hence X is unitary. CNOT itself also lists this supplier directly as L5. Step 1.1 uses L5 to meet the unitary-U hypothesis before applying L1; it does not infer X unitarity from the arbitrary-U controlled-block Definition. The four basis images and involutive permutation prove the stated XOR action and unitarity.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-fixed-metadata-defect",
    "id": "def-qc-controlled-unitary-access",
    "severity": "nonfatal",
    "disposition": "fixed",
    "path": "research/quantum-computing-algorithms-60-2026-10-15-batch-8.proof-contracts.json",
    "location": "contracts.def-qc-controlled-unitary-access.boundaries: zero and nonempty-choice",
    "reason": "The prior nonempty-choice note incorrectly said no further basis is chosen, although Verification step 1.1 explicitly chooses a target orthonormal basis using F2. It now records that finite choice, its zero-dimensional case and basis independence. The zero note formerly cited nonexistent step 1.2 and omitted H=0; it now anchors the zero branches and zero target in actual steps 1.1, 2.1 and 3.1. This repairs contract evidence only; the item remains mathematically sound and byte-unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "item": "def-qc-elementary-circuit-resources",
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "severity": "nonfatal",
    "location": "definition",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "adjudication_ref": [
      {
        "id": "def-qc-elementary-circuit-resources",
        "model": "gpt-6-luna",
        "context_sha256": "4e24e99108e0bc116044ff860d47887634b760cf7d9a55d5abfebe2f505363a1",
        "outcome": "confirmed_nonfatal"
      }
    ],
    "evidence": [
      {
        "path": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u9.json",
        "note": "Decision, repair, exact post/context hashes and focused checks; proposed update only."
      }
    ],
    "reason": "The Definition permits combined ordinary/inverse charge records, whereas the cited def-qc-inverse-unitary-access Definition and F3 require inverse availability and query or gate charges to be recorded separately from forward access, including controlled access. This is a nonfatal accounting-interface inconsistency: steps 1.1–3.1 correctly count finite occurrences and require explicit access; they prove no incorrect numerical resource bound. Removed the exception and explicitly retained separate inverse versus controlled-forward records. Equal numerical charges and explicitly reported aggregate totals remain possible.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_id": "qca60-step5-initial-r1-u9-inverse-accounting",
    "run": "quantum-computing-algorithms-60-2026-10-15",
    "at": "2026-10-16T05:47:07.722Z",
    "subject": "def-qc-elementary-circuit-resources"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "item": "def-qc-elementary-circuit-resources",
    "reason": "The assigned supplier and all 73 direct consumers are draft frozen-frontier items. No published repair or potentially defective published direct use was identified in this scoped review; draft-only findings remain in the run report.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "def-qc-clean-and-dirty-ancillas",
  "def-qc-circuit-cost-model",
  "def-qc-toffoli-and-fredkin",
  "alg-qc-reversible-embedding",
  "thm-qc-reversible-embedding-cost",
  "def-qc-coherent-function-oracle",
  "def-qa-promise-query-instance",
  "def-qc-promise-computation-model",
  "def-qc-clifford-t-gate-library",
  "def-qc-uniform-circuit-family",
  "def-qa-nonoracle-gate-cost",
  "thm-qa-bit-query-to-phase-query",
  "alg-qa-11-grover-iterate",
  "alg-qa-11-bbht-unknown-count-search",
  "prop-qa-11-known-count-preprocessing-cost",
  "alg-qa-11-known-count-grover-search",
  "prop-qa-11-known-count-random-selection-bit-cost",
  "alg-qa-11-known-count-random-iteration-search",
  "alg-qa-12-amplitude-amplification",
  "alg-qa-12-arbitrary-phase-amplification",
  "alg-qa-12-exact-success-amplification",
  "alg-qa-12-known-amplitude-amplification",
  "alg-qa-12-unknown-amplitude-search",
  "def-qa-qft-gate-cost-model",
  "alg-qa-quantum-phase-estimation",
  "def-qa-13-amplitude-estimation-task",
  "lem-qa-13-grover-eigenphase-relation",
  "lem-qa-13-real-cyclotomic-comparison",
  "lem-qa-phase-estimation-outcome-kernel",
  "thm-qa-phase-estimation-access-cost",
  "thm-qa-phase-estimation-superposition-law",
  "thm-qa-13-amplitude-estimation-guarantee",
  "alg-qa-13-phase-estimation-amplitude-estimation",
  "thm-qa-13-counting-error-guarantee",
  "alg-qa-13-counting-from-amplitude-estimation",
  "def-qa-bounded-error-promise-correctness",
  "def-qa-quantum-query-complexity",
  "thm-qa-13-iterative-likelihood-query-count",
  "alg-qa-13-iterative-likelihood-amplitude-estimation",
  "thm-qa-13-median-confidence-guarantee",
  "alg-qa-13-median-confidence-estimation",
  "lem-qa-13-certified-count-output-rounding",
  "thm-qa-13-relative-counting-success",
  "alg-qa-13-relative-approximate-counting",
  "lem-qc-positive-choi-matrix-yields-kraus-operators",
  "lem-qa-14-coherent-query-normal-form",
  "def-qa-14-boolean-search-query-model",
  "alg-qa-14-one-marked-search-with-verification",
  "def-qa-16-query-address-projectors",
  "thm-qa-16-controlled-consistency-reflection-correct",
  "alg-qa-16-controlled-consistency-reflection",
  "def-qa-16-input-mismatch-matrices",
  "lem-qa-16-general-adversary-finite-and-attained",
  "def-qa-16-general-adversary-bound",
  "thm-qa-16-dual-vector-characterization",
  "thm-qa-16-dual-evaluator-success",
  "alg-qa-16-dual-adversary-reflection-evaluator",
  "alg-qa-18-reversible-walk-finding",
  "alg-qa-18-szegedy-phase-detection",
  "def-qc-state-preparation-cost-model",
  "thm-qc-state-preparation-rotation-level-upper-bound",
  "alg-qa-22-lcu-block-encoding",
  "alg-qa-22-product-block-encoding",
  "alg-qa-23-polynomial-root-isolation",
  "def-qa-25-qubitization-access-model",
  "def-qa-21-lcu-input-and-access-model",
  "alg-qa-25-qubitized-hamiltonian-simulation",
  "def-qa-26-hhl-access-model",
  "alg-qa-26-hhl-phase-estimation",
  "def-qa-20-sparse-hamiltonian-oracle-model",
  "thm-qa-25-sparse-hamiltonian-block-encoding-correctness",
  "def-qa-27-block-encoded-qlsp",
  "thm-qa-13-amplitude-estimation-query-complexity",
  "thm-qa-relative-probability-guarantee",
  "alg-qa-relative-probability-estimation",
  "lem-qa-27-capped-lower-bound-amplification",
  "lem-qa-27-lcu-projected-block-identity",
  "lem-qa-27-low-target-amplification",
  "lem-qa-25-jacobi-anger-truncation",
  "thm-qa-25-small-time-aware-simulator-correctness",
  "thm-qa-25-qubitized-simulation-resource-bound",
  "alg-qa-27-cks-variable-time-linear-solver",
  "alg-qa-28-qsvt-matrix-function",
  "lem-qa-29-certified-natural-logarithm-series",
  "alg-qa-29-variance-aware-monte-carlo",
  "def-qa-28-spectral-estimation-access",
  "thm-qa-28-spectral-estimation-guarantee",
  "lem-qa-30-spectral-minimum-shift",
  "thm-qa-28-matrix-function-error-cost",
  "alg-qa-30-sdp-gibbs-purification",
  "lem-qa-30-sdp-trace-mean-ratio-identity",
  "lem-qa-30-mmw-to-sdp-feasibility",
  "thm-qa-30-sdp-binary-search-correctness",
  "thm-qa-30-quantum-sdp-solver-guarantee",
  "thm-qa-30-sparse-sdp-resource-substitution",
  "thm-qa-30-quantum-sdp-solver-cost",
  "alg-qa-30-quantum-sdp-solver",
  "lem-qa-33-witness-acceptance-effect",
  "def-qa-33-qma-promise-class",
  "alg-qa-33-qma-parallel-majority-amplification",
  "alg-qc-solovay-kitaev-unitary-compiler",
  "def-qa-34-output-and-cost-types",
  "thm-qc-diamond-norm-ancilla-dimension-bound",
  "alg-qa-34-error-budget-allocation",
  "def-qa-34-heralded-verification-contract"
]


