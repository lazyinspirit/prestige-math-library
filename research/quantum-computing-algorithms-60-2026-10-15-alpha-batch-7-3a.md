# Batch 7 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-7`.

Scope has no touched/page/reader/refuter obligations; the decisions array is empty. Reader report and findings and `refute-7.json` have no findings. Risk reviews proceed in generated dependency order. No historical repair acceptance is inferred.

## Level 5: exact one-qubit gates

Reviewed the current Definition and Verification 1.1–2.1 and each cited prerequisite. Found a concrete false displayed computation in Verification 1.1: its first Y*Y factor was -Y, so that displayed product equalled -I. Replaced only that factor by the displayed Hermitian Y. The claim Y*=Y and Y*Y=I is correct by conjugate transpose and direct multiplication. Synchronized the exact derivation in the proof contract. Confirmed nonfatal local computation defect `qca60-b7-3a-y-adjoint-sign`; repair_confidence: 1. Definition, title, dependencies, manifest, source attribution and consumer interfaces are unchanged; proof provenance remains ai-generated. No judge record was present. Finite-dimensional completeness and boundedness meet the exponential-series lemma at parameter 1; fixed gates have exact phases and are unitary. No choice or quotient is used. Risk review complete.

Coordinate review follows below.

## Level 5: coordinate existence and uniqueness

Read Proof 1.1, 1.2, 2.1 and actual cited definitions/theorems. For Hermitian trace-one [[a,z],[conj(z),1-a]], a is real and (2 Re z,-2 Im z,2a-1) gives the exact inverse. Direct trace multiplication has the correct Y sign; Pauli trace orthogonality gives uniqueness for every real candidate, without positivity. Density operators are Hermitian trace one by definition. r=0 gives I/2; no zero-dimensional, empty-coordinate, choice or nonunique cases are suppressed. No defect found. Dependencies: Bloch/Pauli/qubit definitions, computational-basis orthonormality, density/nonnegative/self-adjoint definitions, conjugate transpose, and both trace definitions. Risk review complete; no item edit. Next: axis rotations.

## Level 6: axis rotations

Reviewed Proof 1.1–3.1 and all cited suppliers. Real unit n gives Hermitian Sigma and Sigma squared I by pairwise anticommutation. Finite-dimensional Banach/boundedness hypotheses apply to B=-i theta Sigma/2; absolute operator-norm convergence permits even/odd grouping, and the exact sine/cosine series give the stated negative-i half-angle formula. Multiplication with its adjoint cancels cross terms; the real Pythagorean identity yields I and the finite-dimensional isometry theorem gives unitarity. theta=0 gives I, negative theta is allowed, n=0 is excluded. No defect or choice use. Risk review complete; no item edit.

## Level 6: positivity ball

Reviewed Proof 1.1–2.1 and all seven cited suppliers, including the actual finite-dimensional nonnegative-operator criterion. The displayed two-by-two matrix has characteristic polynomial lambda squared minus t squared; for t>0 both eigenvalues occur, and for t=0 Sigma=0. Hence rho has both eigenvalues (1 plus/minus t)/2 with multiplicities. Every real candidate is Hermitian trace one by the previous theorem, so the cited nonnegative-eigenvalue criterion applies in both directions. t=0 gives I/2; t=1 permits the zero eigenvalue; t>1 has a negative eigenvalue and is excluded. No defect or choice use. Risk review complete; no item edit.

## Level 6: Hadamard conjugation

Reviewed Proof 1.1–2.1 and the actual H/Pauli definitions, multiplication table and computational basis theorem. Recomputed HXH=Z, HZH=X and HYH=-Y with the fixed Y sign. The two columns are normalized orthogonal plus/minus eigenvectors of X with eigenvalues +1 and -1 in the root inner-product convention. Fixed dimension two has no empty basis case. No choice, defect or interface change. Risk review complete.

## Level 7: purity sphere

Reviewed Proof 1.1–2.1, all cited suppliers and the actual ray-projector bijection proof under the root convention. Sigma squared equals radius squared times I, yielding tr(rho squared)=(1+radius squared)/2. Positivity and trace one make the two eigenvalues a probability pair; square-sum one forces (1,0) and the orthonormal eigenbasis makes rho the rank-one orthogonal projection, to which ray-projector surjectivity applies. Conversely a ray projector is idempotent of trace one. Both iff directions hold; radius zero gives purity 1/2 and radius one gives a pure state. A unit vector in one fixed line requires no AC. No defect. Risk review complete; next is the example.

## Level 8: zero and plus example

Reviewed Verification 1.1–2.1 and all fourteen actual prerequisite interfaces. The root-linear-first outer product has matrix u u-dagger in the ordered orthonormal basis. e0 and (e0+e1)/sqrt(2) are unit, so the ray-projector theorem supplies density operators before invoking Bloch purity. Direct products give trace vectors (0,0,1) and (1,0,0), both radius one; H e0 is exactly plus, and both projectors are idempotent of trace one. Bloch uniqueness and purity apply with all hypotheses met. This generated example is a logical leaf. No defect or choice use. Risk review complete.

## Sources and historical comparison

Opened and independently checked each current cited local dependency in the routed proofs, including the choice-free ray-projector proof and the operator-exponential convergence argument. Source confirmation: [Harrow, Lecture 1](https://web.mit.edu/8.371/www/lectures/lect01.pdf), §1.2.1, p.2, Eqs. (1.1)–(1.3), gives the real Hermitian coordinates, eigenvalues, ball, pure sphere and zero/plus examples. [Preskill, Chapter 2](https://www.preskill.caltech.edu/ph219/chap2_15.pdf), §2.2.1, printed p.11, Eqs. (2.29)–(2.31), fixes the Pauli signs, anticommutation and negative-i half-angle rotation; §2.3.2, printed pp.21–22, gives the Bloch expansion and pure projectors. These support the conventions; local arguments supply the proofs. No claim of checking de Wolf's complete text is made.

The immutable pre/post snapshots have identical item/contract/manifest projections and page projections. All eleven current item raw hashes still match post-reader except the one-factor Alpha correction. The corrected item's raw SHA256 is `aece0eeb0a300f64a56808b3e6ad966b00952ab82503c2e78bc01d35d0268eb2`. No reader repair was accepted, amended or reverted. Scope owes zero decisions; the newly found risk-review defect is recorded in this report and the closed ledger row, without inventing an additional routed obligation.

Three computational-basis citation quotes in the coordinate, Hadamard and example contracts were stale relative to the current supplier Statement. Refreshed those exact mirrors after independently checking the current positive-dimension orthonormal-basis claim at d=2. This is metadata maintenance, not a mathematical defect or new carrier decision. No ledger row was created for the mechanical diagnostic.

## Consumer and published dispositions

All Statement/Definition text and supplier interfaces remain unchanged. No consumer source repair is needed. The existing cross-batch supplier records and proposed removals remain present. Added the owned-consumer disposition to `briefs/tasks/frontier-dependency-ledger.md`; no stable ID or withdrawal was removed. No defective published item or outside-owner claim was found; no published ledger mutation was necessary.

## Local checks and limits

Initial risk-report: seven HIGH/CRITICAL items and one MODERATE, zero errors. All seven required risk reviews are complete in the owning contract. Reflow on the single edited item reported unchanged; precheck passed (1 checked, zero failing); rendercheck passed (1 file); final explicit proof-layout passed (1 item, 4 steps, zero defects). The first strict batch contract check found only the three stale computational-basis quote mirrors noted above, now refreshed. Initial tool discovery attempts using `precheck --help`, nonexistent `proof-contracts.mjs` and `reflow-proofs.mjs` failed; these were invocation mistakes and supply no validation evidence. Actual checks use the repository's existing tools.

No unresolved mathematical blocker or escalation. No judge, stamp, dispatch, state transition, certification or gate battery was initiated. Engine-owned hash stamping and full gates remain outstanding by design.

After quote synchronization: `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-7.proof-contracts.json --strict` passed with 0 errors, 0 warnings, 8/8 items checked. The final `risk-report.mjs` invocation on that same contract with `--require-reviewed` passed with 0 errors. Decisions JSON has version 1, the exact run and group `batch-7`, and `decisions: []`. Work complete for this dispatch.
