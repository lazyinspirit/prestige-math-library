# Batch 20 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`. Group: `batch-20`.

Scope has no touched/page/reader/refuter obligations; decisions will be empty. Pre/post recorded item, contract and page fingerprints agree. Reader report and findings, refuter artifact and generated order read. The initial inventory had no reader edits or closed defects. Three defects were subsequently found and repaired during the required risk reviews; see below.

## `def-qc-css-code-from-nested-binary-codes`

Reviewed Definition and Verification 1.1–3.1 against classical-code/dual definitions, register convention, computational orthonormality and finite subspace basis extension. Reindexing by c0 proves representative independence; the finite complement gives exactly 2^k labels including k=0; disjoint computational supports give unit norms and orthogonality. C2=0 and C1=C2 are admissible. No extra dual containment or AC is used. Reader and refuter report no findings; no defect established.

## `lem-qc-binary-dual-dimension`

Reviewed Proof 1.1–2.1 and exact dual-family, subspace-extension and rank-nullity statements/proofs. The coordinate dot pairing sends a basis to its dual; extending a functional by zero on an extended finite basis makes restriction onto C* surjective. The kernel is exactly C-perp, hence n=dim(C-perp)+dim(C), also for C=0 and C=F2^n. Finite existential basis choices require no AC. Reader/refuter have no findings; no defect established.

The following checkpoints record the completed item reviews in generated dependency order.

## `def-qc-square-planar-surface-code`

Reviewed exact d>=2 relative grid and Verification 1.1–2.1. The two removed vertical sides have 2d edges, leaving 2d(d+1)-2d=2d^2 physical edges. Each nonrough vertex occurs twice in a face boundary, hence partial1 partial2=0 and HX HZ^T=0. Explicit Pauli matrices give same-type commutation and one sign per overlapping X/Z factor. No rank, distance or topological-order premise is assumed here. Cited matrix, Pauli, code-space and nested-code definitions checked; no reader/refuter finding or defect established.

## `def-qc-stabilizer-syndrome-and-logical-operators`

Reviewed Definition and Verification 1.1–3.1 against phase-aware label, symplectic form, commutator and stabilizer definitions. The bit is the exact commutator exponent. Scalar phases preserve labels and syndromes. ZnS is contained in and central in the Pauli centralizer N(S), so its quotient is legitimate and identity means exactly scalar times stabilizer. Empty independent generating list gives the empty syndrome. No logical-action faithfulness is assumed by this definition; no defect established.

## `thm-qc-stabilizer-encoder-terminates-with-quadratic-gate-count`

Reviewed all four proof steps, complete encoder procedure and H/S/CNOT action proofs and exact gate definitions. H adds 2xz, S adds x, S-adjoint subtracts x, and CNOT preserves k in the X-before-Z convention. The unused-wire invariant preserves earlier +Z pivots; independence guarantees a nonzero remaining row and commutation rules out X on the new pivot before row clearing. At most one SWAP, 2n normalization gates, n-1 CNOTs and one X give 3n+1 per pivot. Tableau/G/M and indexed output storage meet the stated bound; r=0 returns empty data. No reader/refuter finding or defect established.

## `thm-qc-stabilizer-projector-and-dimension`

Reviewed Proof 1.1–3.1 and current subgroup, label-order, average-projector, rank/dimension and published orthogonal-projection suppliers. Hermitian scalars in S are only I because -I is excluded, so labels are injective and independent generators give rank r. Finite group averaging is self-adjoint/idempotent with exactly the fixed image; only the identity contributes to trace. The current rank supplier uses complex trace (no positive-characteristic ambiguity) and isotropy to prove r<=n. Endpoints r=0 and r=n give full register and a line. No defect established.

## `thm-qc-css-encoding-dimension-and-commutation`

Reviewed all seven steps and cited nested-code, dual-dimension, Pauli, Hadamard, finite-subspace and projector suppliers. Translation fixes each coset and h in C1-perp fixes every term. Independent X/Z labels number n-k; the nonzero fixed coset state excludes -I, so the projector theorem applies. Hadamard character cancellation leaves support C2-perp; regrouping normalized C1-perp cosets gives coefficient sqrt(|C2||C1-perp|/2^n)=2^(-k/2). Both representative changes preserve signs. Includes C2=0, C1=C2 and full-space endpoints; no extra dual containment or AC. No defect established.

## `thm-qc-stabilizer-encoder-correctness`

Reviewed all four steps, full encoder, termination and exact H/S/CNOT rules plus chronological circuit syntax/semantics. Row swaps and additions preserve GL(r,F2) and signed input products; circuit updates preserve D G_i D-adjoint and signs. After elimination the exact checks are +Z_i. Their fixed space has first r bits zero, and D-adjoint maps its ordered orthonormal basis isometrically onto the input fixed space. r=0 gives identity; r=n gives one encoded vector. No phase-free substitution or implicit inverse access occurs. No defect established.

## `thm-qc-stabilizer-logical-pauli-quotient-dimension`

Reviewed all three steps against quotient-isomorphism proof, isotropic label-order lemma, symplectic form, finite dual/basis-extension/rank-nullity and projector results. The kernel of the map N(S) to W-perp/W is exactly ZnS, with surjectivity from Pauli labels. Finite functional extension makes V to W* onto, yielding dim W-perp=2n-r. A complement of W in W-perp identifies quotient dimension as 2(n-r). r=n gives the trivial quotient, r=0 all 2n label dimensions. No AC or unproved logical-faithfulness premise; no defect established.

## `def-qc-stabilizer-distance`

Reviewed both verification steps and the support/weight definition and logical-quotient theorem. For k>0 the finite quotient has dimension 2k>0, so there is a nontrivial Pauli representative and an attained finite minimum in 0..n. Weight zero operators are scalar and excluded, so the finite branch is positive. For k=0 the quotient is trivial, the difference set is empty and +infinity is explicitly assigned. No representative-dependent quotient weight is used in the minimum; it ranges over operators. No defect established.

## `ex-qc-css-nested-code-parameters`

Reviewed all three verification steps and actual dual, syndrome and CSS suppliers. C1={0000,1111,1100,0011}, C1-perp has basis 1100,0011; the coset states are orthonormal, X1100 swaps them, Z1010 has eigenvalues +1,-1, and their pairing is odd. 1010 witnesses failure of extra containment. Repaired generator orientation to columns under the canonical n-by-k definition and the false within-coset translation description to exchange of the two logical coset states. These change no code, logical operator, dimension or encoding. Consumer search finds only B-page placement, with no mathematical consumer. Repair confidence 1.

## `thm-qc-css-syndrome-correction`

Reviewed all nine proof steps, including all 25 cited fact interfaces and current classical-distance and explicit KL recovery proofs. Data-to-ancilla CNOTs compute H1u; Hadamard conjugation computes H2v and returns to the original basis. Both factorized ancilla registers have a single probability-one outcome, so conditional readout leaves data intact, also for zero-bit ancillas. Equal syndromes imply differences in C1 or C2-perp; zero codes give direct uniqueness and other cases use 2t<d. Classical sentinel n+1 is distinguished from local delta(0)=infinity. Normalizer labels are C1 x C2-perp and trivial labels C2 x C1-perp; union support gives the pure-logical minimum, including k=0 and empty minima. Anticommutation yields zero compression; finite Pauli-span expansion extends KL to arbitrary stated Kraus families. No defect established.

## `thm-qc-square-planar-surface-code-distance-and-path-count`

Reviewed all 12 proof steps and current incidence, CSS, distance, quotient, rank-nullity and finite-basis suppliers. Top-row propagation proves d^2 face columns independent; extending zero row coefficients to rough vertices gives independent d^2-1 vertex rows. Thus k=1. Strip parities vanish on face boundaries and evaluate to one on a straight Z row, distinguishing the unique nonzero class and forcing d edges. The explicit even-degree graph decomposition produces a contained rough-to-rough path. Dual faces and top/bottom exterior vertices give the one-dimensional X quotient; primal horizontal-row parities force d+1 edges and a dual connecting path. Union support handles mixed XZ. Left starts number d+1 and at most 3 nonbacktracking continuations give the stated upper bound. d=2 is valid. Checked Preskill 7.18.2 equations 7.233–7.238 and Dennis et al. III.B pp.4460–4461; their grids do not replace the local d versus d+1 coordinate proof. Preskill 7.18.4 is an empty heading in the current PDF. No defect established.

## `thm-qc-stabilizer-distance-detection-and-correction`

Reviewed all three proof steps with actual distance, syndrome, support, tensor and explicit finite KL recovery suppliers. gP=Pg=P and anticommutation give PEP=0; below-distance normalizer elements lie in ZnS and give scalar compression. Pairwise products have union support of size <=2t. Explicit one-qubit and tensor matrix-unit expansions span local operators; conjugate-linearity in the first error and linearity in the second preserve scalar compression for the full stated Kraus span. KL applies to a finite channel on a nonzero code; for k=0, N(S)=ZnS and distance=infinity makes the same argument valid for all finite t. No defect established.

## `ex-qc-steane-seven-qubit-css-code`

Reviewed all six verification steps and exact classical-code, generator, weight, Pauli, syndrome, dual-dimension, CSS encoding/correction and projector suppliers. H has all seven nonzero binary columns and an identity final block, hence rank 3; displayed G has an identity initial block and HG^T=0, hence its four rows span ker H. H rows are mutually orthogonal weight-four words; C2=C1-perp and C1=C2-perp. No weight-1/2 kernel words exist; 1110000 is a weight-3 kernel word outside C2 and gives odd-pairing logical X/Z. The six labels are independent and all 21 single-site syndromes are distinct. Repaired the Example to name G^T as the canonical 7-by-4 column generator while preserving G and every existing row-space proof computation. No mathematical item consumer found; A page only places the item. Repair confidence 1.

## New defects and repair dispositions

The routed finding arrays and touched/page arrays are all empty, so the task-named decisions JSON contains exactly zero decisions. No original reader/refuter finding is fabricated. The required risk pass independently discovered three defects in owned carriers and repaired them completely:

- `qca60-b20-3a-four-qubit-generator-orientation`: `ex-qc-css-nested-code-parameters`, Example. Canonical supplier `def-qc-generator-and-parity-check-matrices` defines generators as n-by-k matrices with codewords as columns. The previous two length-four rows had the wrong shape. Changed “rows” to “columns”. Disposition: amended repair, repair confidence 1.
- `qca60-b20-3a-four-qubit-logical-translation`: the same item's Verification 3.1. The previous sentence said translation by 1100 exchanges terms within each logical coset state, but it maps 0000 to 1100 and 1111 to 0011, exchanging the two states. Corrected exactly that sentence. Disposition: amended repair, repair confidence 1.
- `qca60-b20-3a-steane-generator-orientation`: `ex-qc-steane-seven-qubit-css-code`, Example. Its displayed G is 4-by-7 with independent rows; the canonical generator is G-transpose. Explicitly named G-transpose as the generator and G as its row-basis matrix. Existing row(G) and HG-transpose proof computations remain correct. Disposition: amended repair, repair confidence 1.

Each defect has one appended closed row in `research/defect-ledger.jsonl`, caught at `3a-adjudicate`. Because these arose in risk-only obligations, there is no originally routed decision to reference them; the owner/engine must associate these new repair records with any additional route it requires. Original scopes, findings and fingerprints were not rewritten. This is a routing handoff, not an unresolved mathematical repair or a manufactured original obligation.

The batch pages manifest mirrors both corrected Example texts; the four-qubit contract mirrors the corrected derivation, and both repaired contracts record repair confidence 1. No prior judge stamp was present on either edited item. The mathematical code parameters, encodings and logical operators are preserved. Searches of current items and library pages found no item consumer of either example: only their A/B page placement lists use them. Page summaries contain no matrix-orientation claim requiring a change. No Statement or Definition supplier was changed and no outside consumer repair is needed.

## Source and prerequisite evidence

All 17 assigned carriers were opened; the 15 risk carriers were reviewed step by step, with the algorithm and code-space definition read as prerequisite context. All 40 external direct dependencies were read in their current carriers, including their actual cited statements and arguments. Selected transitive checks included the maximal-isotropic bound and the published idempotent-trace lemma. This is not a claim to have audited every transitive supplier.

For surface-code context I independently opened [Preskill, Chapter 7](https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf), §7.18.2, equations (7.233)–(7.238), printed pp.54–55 (PDF pp.60–61), which gives the two CSS logical quotients and chain commutation. The current §7.18.4 has only a heading; it supplies no planar proof. I therefore also read [Dennis–Kitaev–Landahl–Preskill](https://www.preskill.caltech.edu/pubs/preskill-2002-memory.pdf), §III.B, printed pp.4460–4461 (PDF pp.9–10), on relative cycles, rough/smooth boundaries and connecting primal/dual logical paths. Its symmetric patch differs from this item's explicit relative grid; the d and d+1 distances were checked from the local incidence and parity proof. No source diagram or blanket source endorsement substitutes for that proof. Other reviewed arguments are explicit finite linear algebra/matrix computations; no external full-text reading beyond these passages is claimed.

No defective published carrier was established; published content and the published-consumer ledger remain unchanged. No proposed withdrawal was removed. Owned consumer interfaces are recorded in `briefs/tasks/frontier-dependency-ledger.md`.

## Checks and handoff

- Initial risk-report: 15 HIGH/CRITICAL items, zero errors.
- Final risk-report with `--require-reviewed`: 15 complete reviews, zero errors, exit 0.
- Reflow on the two edited examples: exit 0.
- Scoped precheck on those examples with `--json`: two checked, two pass, zero failures, exit 0.
- Finite example checks passed: ranks, nesting, duality, classical distances, four-qubit logical translation/phase and all 21 distinct Steane syndromes; exit 0.
- Frozen pre/post item/contract and page fingerprint maps were compared programmatically and are identical.
- First batched proof-layout invocation failed when its renderer subprocess exceeded the built-in 300-second timeout. The retry on the same final item paths also exited 1 with `renderer failed (spawnSync /usr/bin/node ETIMEDOUT)`. Both invoked `node tools/proof-layout.mjs items/ex-qc-css-nested-code-parameters.md items/ex-qc-steane-seven-qubit-css-code.md` after the last item edits and reflow. This mechanical failure is not a defect-ledger entry. The owner must rerun renderer layout validation when the environment permits; no proof-layout pass is claimed.

The frozen pre/post maps contain identical item/contract/page fingerprints; there was no reader repair to accept or revert. Current content changes are the two independent risk-pass repairs described above, plus audit enrichment of all 15 risk reviews. No item/page acceptance stamps, judge calls, engine dispatches or gate battery were run.

Read-only live status reports the pre-existing batch-12 `def-qc-effective-unitary-matrix-input` scaffold-identity blocker and a batch-10 split failure. Both are outside this assignment; no run control was changed. The local mathematical review and repairs have no unresolved prerequisite escalation. New risk-discovery routing remains for the owner/engine as stated above.


## Owner followup: cycle 1 genuine ledger-reference closure

Original report and decisions exact bytes are archived in `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-ledger-repair/batches1-30/originals`. This followup records current focused review and supplemental gate decisions for existing risk-review discoveries; it does not change native reports, original observations, snapshots, source carriers or prior check results.

- `gate:qca60-b20-3a-four-qubit-generator-orientation`: Actual generator definition requires n-by-k independent columns. Current Example explicitly gives the two length-four generators as columns, agreeing with that interface; their span and the displayed cosets are unchanged. Recomputed parity equations y1=y2 and y3=y4. Generated example has no logical consumer claim.
- `gate:qca60-b20-3a-four-qubit-logical-translation`: Directly applying translation 1100 sends 0000 to 1100 and 1111 to 0011, hence exchanges the two logical states, as current Verification 3.1 now says. It does not swap the terms within each fixed coset. Z^1010 has the stated opposite coset phases and anticommutes with the logical X. Same physical defect as the existing closed row.
- `gate:qca60-b20-3a-steane-generator-orientation`: Actual generator convention requires a 7-by-4 column matrix. Current Example correctly uses G-transpose while retaining G as its displayed row-basis matrix. HG-transpose=0, G has rank four, H rank three; the seven distinct nonzero H columns prove distance three and the weight-four row code distinguishes the logical coset. No source or generated-leaf interface was changed in this followup.

Root must bind current decision subject hashes after writers freeze. No tests, validators or gates were run in this followup.
