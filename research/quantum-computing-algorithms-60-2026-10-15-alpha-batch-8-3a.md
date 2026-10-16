# Step 3a adjudication — batch 8

Run: quantum-computing-algorithms-60-2026-10-15; group: batch-8.

Scope: three finding obligations, no touched or page obligations. Pre/post reader item/contract/manifest and page hashes are identical; the reader made no repairs. No judge or engine transition is authorized.

## Level 1: unit-vector projector

Reviewed `thm-qc-unit-vector-projector-is-density`, every numbered proof step and all ten cited supplier interfaces. The root pairing is linear first; hence Pz=<z,u>u is linear, self-adjoint, idempotent and positive, fixes the nonzero unit vector, and has trace one by finite Parseval. Zero dimension and zero u are excluded. Finite orthonormal basis requires no AC. No defect; risk review complete. Sources: current local Definition/Statement sections named in F1–F9/L1; external citations are provenance, not missing proof suppliers.

Next: level 3 entanglement definition and suppliers.

## Level 3: pure-state entanglement

`def-qc-pure-state-entanglement`: Reviewed all four Verification steps and nine supplier interfaces, including complete tensor and Schmidt proofs. Under root-linear-first coordinates C changes to A* C conjugate(B); invertible factors preserve rank. U D V^T has rank r since U injective and V^T conjugate(V)=I. Nonzero coefficient matrices have rank >=1; product rays exactly rank 1; scaling by nonzero scalar and normalization do not affect rank. Nonzero factors exclude empty states; one-dimensional factor gives no entanglement. No AC or defect. Current local supplier sections F1–F5/L1–L3 support the argument; no external theorem is substituted. No decision owed. Next: standalone global phase.

## thm-qc-standalone-global-phase-invariance

Read every proof step and all eight current local supplier interfaces, including the POVM normalization proof. Nonzero x has positive norm; root conjugate-linearity cancels the unit phase in its outer product. Equality of operators gives equality for each finite POVM effect, including zero effects; the nonempty finite POVM law is normalized. Scaling the projector by norm(x)^2 gives the stated trace and excludes nonunit unnormalized density operators. No defect, missing hypothesis or choice use; risk complete.

## Level 5: routed batch-7 supplier findings

`reader:8:1` and `refuter:8:1`: confirmed_nonfatal, one shared closed defect `qca60-b7-3a-y-adjoint-sign` (owned at 3a-adjudicate). The original displayed first factor was -Y and its product with Y is -I. This concrete false equality merits correction but does not invalidate the true unitary Definition: the immediately preceding Y*=Y and elementary Y²=I close the local computation. Current Verification 1.1 has both factors Y. Independently checked all four current steps and every cited interface, including operator exponential convergence on finite-dimensional Banach Q2 at parameter 1; read current producer contract and manifest. No unresolved producer defect, no source edit by batch 8. The existing producer report supplies repair history, not a substitute for this proof review. The decisions preserve original producer_batch 7, consumer_id, dependency paths, pre-reader fingerprints, routing carrier bindings and original observed digests verbatim. The refuter artifact appears to report the old expression even though its routing digest equals the producer-repaired raw hash recorded by batch 7: this evidence inconsistency is preserved, and no claim is made that the corrected bytes contain that old expression. The exact original reader digest and explicit producer repair record substantiate the historical error. Next: level 6 access and phase.

## def-qc-controlled-unitary-access

Reviewed Definition and all three Verification steps with all four supplier interfaces. The unique two-control-coordinate expansion has norm squared ||v0||²+||v1||²; block action preserves it and diag(I,U^-1) is a two-sided inverse. Target dimension zero is allowed and produces the unique unitary on the zero space. Basis choice is finite and pairing basis-independent. Controlled access is explicitly additional model input; no ordinary-black-box access or cost is inferred. No defect; risk complete.

## def-qc-relative-phase

Reviewed Definition, all three Verification steps and five supplier interfaces. Nonzero alpha,beta make beta/alpha and its positive modulus denominator defined; common nonzero scalar cancels. For any unit eta the normalized two-coordinate vector has projector entries (1,conj(eta);eta,1)/2 on its span, by the root Dirac coordinate rule. Different eta gives different matrices and rays; zero coordinates explicitly have undefined phase. No claim that every phase change is visible under every POVM. No defect or AC; risk complete.

## def-qc-cnot-and-control-target-order

Read Definition and all three Verification steps with five exact local supplier interfaces. All four basis actions match |a,t xor a>, giving columns e00,e01,e11,e10 in control-first order. The involutive basis permutation is an invertible isometry; X unitarity is proved in the corrected current batch-7 supplier. CNOT fixes |00> and cannot alone entangle it. Fixed two-qubit dimensions remove empty-space cases; no choice or defect. Risk complete.

## def-qc-controlled-phase-rotation

Read all three Verification steps and all six current suppliers, including full axis-rotation proof and corrected gate Definition/Verification. For every real theta, modulus-one diagonal phases make Ptheta and its controlled block unitary; computational basis order gives diag(1,1,1,exp(i theta)). The negative-i half-angle Pauli formula and exponential addition give Ptheta=exp(i theta/2)Rz(theta); its scalar remains on the active control block. theta=0 gives I; theta=pi gives CZ. No implementation/cost inference, missing prerequisite, AC or current defect. Historical Y computation resolved by producer row qca60-b7-3a-y-adjoint-sign. Risk complete.

## def-qc-inverse-unitary-access

Read Definition and all four Verification steps, adjoint algebra and finite-dimensional isometry interfaces. For compatible endomorphism gates chronological U1 then Uk yields Uk...U1; taking adjoints reverses factors and applying right-to-left reverses execution chronology. k=0 is explicitly identity with no calls. Unitarity gives adjoint=inverse; model availability and charges are independent declared inputs. No claim that forward black-box access grants inverse access, no choice or defect. Risk complete.

## def-qc-multicontrol-activation

Reviewed Definition and all three Verification steps, full tensor-map proof and all five current supplier interfaces. Unique block expansion over the finite computational control basis defines the linear operator. Bitmask n has ones exactly where s has zeros, so x xor n=all-ones iff x=s; conjugating by X_N restores controls and activates precisely the specified block. N empty and N all-controls both work; m=1 agrees with the one-control rule and m=0 is excluded. Orthogonal block norms and the U^-1 active block prove unitarity. No implementation/cost assumption, AC or defect. Risk complete.

## thm-qc-controlled-global-phase-is-relative-phase

Reviewed all eight proof steps and 22 original current supplier interfaces plus the added exact exponential-addition Statement. A unitary on nonzero complex finite H has a unit eigenvector with |mu|=1; conjugate(mu) control preparation cancels its eigenphase. The plus/minus projections are self-adjoint nonnegative and sum to identity. Root-first trace/Parseval gives plus probability |1+exp(i theta)|²/4=cos²(theta/2), strictly below 1 exactly off 2pi Z. At multiples of 2pi the block maps coincide; H=0 is excluded. Fixed two citation errors: basis existence now cites L8, and exponential multiplication now cites newly declared F12, not the isometry theorem F2. Claim unchanged; no AC or free preparation/access assumption. Repair confidence 1; defect qca60-b8-3a-witness-citation-labels. Risk complete.

## def-qc-controlled-z-and-swap

Read Definition and all three Verification steps with four exact current supplier interfaces. exp(i pi)=-1 gives CZ=CP(pi) with diagonal (1,1,1,-1). SWAP fixes 00 and 11 and exchanges 01/10, defining a unique involutive permutation of the orthonormal product basis and thus a unitary. Its state action retains ordered wire identities. Fixed qubit domain excludes empty factor ambiguity; no choice or defect. Risk complete.

## thm-qc-cnot-creates-bell-entanglement

Read Statement, all three proof steps and five actual local suppliers. H first prepares plus on control; CNOT sends 00 to 00 and 10 to 11, yielding normalized Bell vector. Its coefficient matrix has determinant 1/2 and rank 2, whereas every nonzero product ray has rank 1; entanglement follows in the stated cut. The original title falsely omitted H preparation from 00, since CNOT alone fixes 00. Corrected only title and manifest title; Statement/Proof unchanged. refuter:8:2 confirmed_fatal, defect qca60-b8-3a-bell-preparation-title, repair confidence 1. No AC, missing supplier or remaining defect. Risk complete.

## ex-qc-controlled-global-phase-witness

Read Example, all three Verification steps and all nine current supplier interfaces. Specializing the general witness to U=I, phi=|0>, mu=1 meets every hypothesis. The two granted controlled matrices are I4 and diag(1,1,exp(i theta),exp(i theta)); both outputs are unit and hence have density projectors. Root Dirac plus amplitude is (1+exp(i theta))/2, giving cos²(theta/2). At 0 and pi, plus probabilities are 1 and 0, minus their complements by POVM normalization. No free access/cost assumption or logical use of this generated leaf, no AC or defect. Risk complete.

## thm-qc-reflection-unitary-involution

Read Statement, all four proof steps and all eight supplier interfaces, including reflection Definition and orthogonal-projection equivalence. Pi*=Pi and Pi²=Pi give Hermitian reflections whose squares are I; finite-dimensional isometry criterion proves unitarity. Range/kernel split yields both stated signs; exact block multiplication gives C(S)=diag(I,-I)C(R). Pi=0, Pi=I and H=0 all satisfy the identities, with any vacuous subspace action interpreted on its actual domain. No control availability or cost is inferred. No defect or choice use; risk complete.

## thm-qc-rank-one-reflection-phase-and-control-sign

Read all six proof steps and fifteen exact current supplier interfaces. Root-first rank-one action is self-adjoint/idempotent with range span(psi); unit psi excludes H=0. A second unit representative has scalar modulus 1, which cancels in the outer product, so both reflection signs are ray-invariant. Their controlled blocks differ by control Z; on plus tensor psi the outputs plus/minus tensor psi are orthogonal unit vectors and distinct rays, including dimension-one H. The adjoint identity and conjugate symmetry give U|a><a|Udagger=|Ua><Ua| and both conjugated reflection signs. Inverse and control access remain separately supplied. Finite bases require no AC, no hidden projector-bijection assumption or circular dependency; no defect. Risk complete.

## Repairs, sources and consumer dispositions

Two owned defects are closed with repair_confidence 1: `qca60-b8-3a-witness-citation-labels` (nonfatal citation misattributions, Proof 1.2 and 4.1) and `qca60-b8-3a-bell-preparation-title` (fatal overstrong title). The first is a new risk-review finding, not a newly invented routed obligation. The second closes `refuter:8:2`. Existing producer row `qca60-b7-3a-y-adjoint-sign` closes the two routed observations of that single earlier computation defect; it is reused without duplication. All three decisions preserve the distinction between historical findings and current corrected content.

Only two item carriers were edited. No Statement or Definition changed, so no consumer interface propagation was triggered. The general witness keeps its conclusions, and the owned example still meets its hypotheses. No material proof rewrite or pre-existing judge record occurred. Existing provenance remains appropriate: AI-generated proofs, source-backed AI-altered statements. No item or page was added, removed, withdrawn, or published. Published suppliers remained read-only; no defective published carrier was found in the reviewed interfaces and no published-ledger edit was needed.

Authoritative source cross-check: [Preskill, Chapter 2](https://www.preskill.caltech.edu/ph219/chap2_15.pdf), §2.1, printed pp.3–4, gives rays under nonzero scalar multiplication and distinguishes overall from relative phase. §§2.4–2.4.1, printed pp.23–26, Eqs. (2.79)–(2.96), gives the bipartite Schmidt expansion, coefficient-matrix singular values, and product-state/entanglement distinction. The finite nonzero spaces and unit vectors in the owned claims meet these hypotheses. The repository reverses Preskill's Dirac pairing into the root linear-first convention through its explicit conversion definition; all coordinate calculations above respect that conversion. Local supplied proofs, rather than external references, establish the reviewed conclusions. No claim of reading the complete de Wolf or Preskill Chapter 6 texts is made.

All 54 existing cross-batch rows are preserved. Current item supplier uses were independently checked; their evidence now links this report. Five page-prerequisite rows retain their existing status/evidence without asserting a new page audit. The added exponential-addition dependency is a published supplier, not a same-frontier cross-batch edge. The native frontier-dependency refresh succeeded and deduplicated the shared view. Stable IDs and proposed withdrawals elsewhere remain untouched.

## Checks and limits

Initial risk-report routed 15 HIGH/CRITICAL items with zero errors; all 15 current risk reviews are complete. Reflow on the two edited items reported unchanged. Precheck passed both proofs (2 checked, 0 failing). Rendercheck passed both files. The first strict contract check found seven stale computational-basis Statement quotes; refreshed only these quote mirrors after checking the current d>=1 theorem at d=2. This mechanical metadata repair creates no mathematical defect row or extra routed decision. The subsequent strict check passed: 0 errors, 0 warnings, 15/15 items. Required risk-report with --require-reviewed passed: 0 errors, 15 items. Final batched proof-layout passed on both edited items: 2 items, 11 steps, 0 defects.

Autopilot status was read only: the run is at Step 3 with no worker in flight and outside-scope blockers for the batch-12 scheduling identity and split-10 failures. These are engine/owner obligations; no local mathematical escalation remains. No judge, stamp, self-certification, agent dispatch, gate battery, state transition or commit was initiated. Engine decision hashing and gate execution remain outstanding by design.

Final bookkeeping checks confirm exactly three decisions matching all owed findings, with one closed defect reference each. Current raw item hashes match the immutable reader-post snapshot for every batch-8 item except the two explicitly repaired carriers. The added exponential-addition supplier is published and unchanged. Final required risk-report again passes all 15 items after quote synchronization.

Outside-scope mechanical alert: `node tools/defect-ledger.mjs validate --run quantum-computing-algorithms-60-2026-10-15` checked 12 current run rows and failed solely on batch-2 row `qca60-b2-3a-zero-qubit-identification`: subclass `unjustified-identification` is outside the closed enum. Neither new batch-8 row nor the reused batch-7 row had a reported error. The owner/batch-2 writer must normalize that row's taxonomy; this is not a mathematical defect or authorization for batch 8 to change another owner's row. No defect-ledger row was created for this mechanical failure. Local mathematical work and all routed decisions are complete; this outside validation blocker is preserved for engine handoff.


## Owner followup: cycle 1 historical shared-defect evidence

Original exact current report/decisions bytes were archived under `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-ledger-repair/batches1-30/originals` before this append. Recomputed the current Y adjoint product using the actual Pauli matrix Definition: Y is Hermitian and Y squared is I. The original batch7 report records a single first-factor sign correction; the archived original batch8 decision JSON contains both before and after raw digests. The refuter observation already names the corrected carrier and therefore cannot be treated as proof that those corrected bytes still contain -Y. Its historical finding remains confirmed_nonfatal, with root asked to use the existing prior_applied_repairs path only if reversing the proposed unique literal reproduces the original digest. Both native observations remain untouched; no fake prior carrier was created. No tests, gates or hash computation was performed. Root owns the final byte bindings.
