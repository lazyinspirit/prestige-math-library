# Batch 45 Step 3a adjudication

Run: quantum-computing-algorithms-60-2026-10-15. Group: batch-45.

Scope: four touched obligations; no page, reader or refuter findings. Review proceeds in the generated dependency order. No judge or engine transition is requested.

## Level 2: pure-state trace distance

`lem-qa-21-pure-state-trace-distance-from-vector-error`: Read all three proof steps and all six cited suppliers. Dirac c=<u|v> is linear in v; v=cu+se gives the displayed Hermitian matrix with eigenvalues +/-s. Equal rays (including nontrivial phase) give s=0; orthogonal vectors give s=1. The scalar inequality s^2 <= 2(1-|c|) <= ||u-v||^2 has the required direction. A zero-dimensional space has no unit-vector instance. Finite spectral decomposition needs no AC. Reader/refuter findings are empty; no defect found. Sources: current items/ carrier, its six deps, and batch-45 reader/refuter reports. Claim and conventions remain unchanged. Contract risk review completed. Next: partial-trace contraction.

## Level 4: partial trace

`lem-qa-21-partial-trace-contracts-trace-norm-on-hermitians`: Checked each of three steps and all thirteen actual supplier statements/definitions. Spectral diagonalization gives real eigenvalues and Hermitian trace-norm duality, with sign(0)=0. Product-coordinate computation makes both partial trace and Y tensor I Hermitian; its norm is <=1 by the sum of squared column norms, with no dimension factor. Trace pairing then gives the inequality. Either zero-dimensional factor gives both sides zero. Only finite bases are chosen; no AC. Watrous section 1.1.3 (1.181)-(1.186), cached text lines 2743-2814, confirms the conventions (the local distance includes the explicit factor 1/2). No reader/refuter finding or mathematical defect. Current carrier and cited prerequisites read; claim unchanged. Risk review complete.

## Level 5: branch weights

`thm-qa-21-clean-ancilla-postselection-probability-law`: Checked three steps, the clean-ancilla definition and its actual finite-register, basis, tensor, isometry, adjoint, norm and encoding-projector suppliers. Product norms make J isometric and J-dagger J=I; Pi and I-Pi are orthogonal complementary projections. Thus squared weights sum to one. Positive branch weight alone permits normalization; weight zero means q=0 and no conditional vector. Weight one and a trivial one-dimensional ancilla satisfy the same identity; a zero system has no unit input. Mathematical branch rule only, with no physical realization assumed. No AC, findings or defect. Current carrier and cited prerequisites read; claim unchanged. Risk review complete.

## Level 14: inverse access

`alg-qa-21-lcu-block-encoding`: Current raw source equals reader-post bc63cd8ba988950f0f5c798f598a18b67145e3ff8a9b98a371f6a8d2e2f3f628. Recovered the exact original numbered carrier from reader attempt-3 log lines 10028 onward; after removing displayed line numbers its raw SHA256 equals immutable pre 25dc441a1c509be6fc88c9e4908b140d48e57a563e0d40e59436f4a6e1a47e17. The sole substantive delta explicitly requires and charges the inverse call already used by the procedure. The access-model Definition explicitly disallows implied inverse access. Three chronological calls produce P-dagger SELECT P; work and invalid indices remain specified. Accept repair, confidence 1; missing access was a genuine admissibility defect. Both direct algorithm consumers (one-step OAA and block correctness) supply inverse access or the complete W; further segmented composition explicitly supplies PREPARE/inverse interfaces. No outside repair needed.

## Level 15: block correctness

`thm-qa-21-lcu-block-correctness`: Read each of three steps and all six cited direct suppliers. Coefficient weights beta_j^2 omega_j=c_j/alpha, with omega_j=1 when c_j=0; PREPARE phase cancels with its adjoint, unused labels have zero amplitude, and all PREPARE-work wires are projected. Thus compression is M/alpha, with correct squared norm probability and conditional vector only for positive weight. m=1, zero coefficients, cancellation M=0, and trivial work are covered; alpha=0 is excluded. The current raw item matches reader-post b66e6e9dde7b8f3a5307af1141757130f317741afbc2d1181a53616923aa0139. Exact original recovered from attempt-3 log line 10151, matching pre 646e7d9559e72ca448f153892343575ec3776f1f7159d9583c4b20a64c85d445; only Given gains explicit inverse access/cost. Accept repair, confidence 1. Mathematical Statement unchanged and consumer uses remain valid. No AC or remaining finding.

## Level 15: Taylor tail

`thm-qa-21-taylor-tail-bound`: Read all four steps, Taylor-list definition and all twelve cited suppliers. Hermitian eigenvalues obey |lambda|<=Lambda by finite triangle inequality; absolute convergence and (n+j)!>=n!j! give the scalar remainder. Finite diagonal operator norm supplies the claimed bound for both signs of h. x=0 and K=0 work; x<=ln2 makes s_K<=2. Independently checked 2<e<3, ln z<=sqrt(z) via its minimum at 4, n=ceil(16eL/ln(e+L)), and the integral factorial estimate. The L<1 choice n=10 and the conversion to the stated larger logarithmic denominator order are valid. Only elementary scalar calculus is used in that estimate. Childs (28.5)-(28.14) confirms the Taylor setup; no AC or defect.

## Level 15: unknown program

`cex-qa-21-unknown-input-reflection`: Read all three contradiction steps and all ten cited dependencies. With program 0 versus + and common target 0, input overlap is 1/sqrt(2); demanded target outputs are -0 and -1, making joint output overlap zero. This contradicts the exact fixed-unitary isometry interface even though both individual reflections are valid unitary operations. The claim is correctly limited to an unchanged program qubit and makes no claim about supplied circuit/oracle access. Root-linear-first and Dirac conventions agree on these real vectors. No AC, findings or defect.

## Level 15: padding historical hold

`ex-qa-21-cancelling-normalization-padding`: Current mathematics is sound: s_K is explicitly sum (Lambda |h|)^k/k!, q>=0, qI-qI=0 and s_K+2q=2, including q=0. The concrete H=1 Z is Hermitian/unitary with Lambda=1; K=0 gives M_0=I, s_0=1, q=1/2. All three cited dependencies were read. Current raw hash equals frozen reader-post 9d4e8dff36da09a010aee2061ef6d4a7dc3acdc44ff7b835913ba8213eb11bad; immutable pre is 6898b871c196ae12273ac877a0736444abfcfcb5d7b6f6b9fc220db617aca9a4. Unlike the other three touched items, no matching preimage was recovered from HEAD/index, current owned archives or the available reader attempts. The first reader attempt shows an older manifest formula using x and an older singleton dependency list, but this is not an authenticated pre-reader source. The current reader report omits this fourth delta. Do not infer the original source from stale manifests or candidate reversals (no candidate hash matched). Escalated historical review: owner must provide the exact preimage or explicitly authorize current-content resolution under the dispatch rule. No mathematical repair is required or claimed; no mechanical-history defect ledger row is manufactured.

## Level 16: OAA identity

`thm-qa-21-oblivious-amplification-block-identity`: Read three proof steps and all nine cited dependencies, including the actual chronological OAA procedure and both reflection signs. Expanding W(I-2Pi)W-dagger(I-2Pi)W and compressing with J gives B-2B-2B+4BB-dagger B. B=M/2 yields -3M/2+MM-dagger M/2. If M is unitary this is -M; the algorithm separately applies -1, restoring +M. No leakage estimate is inferred for nonunitary M. Complete coefficient/work register is reflected, the system is not. Trivial/zero-dimensional spaces satisfy the algebra; no AC, findings or defect.

## Level 16: two-term example

`ex-qa-21-two-term-lcu-postselection`: Read all three verification steps and all eight cited dependencies. The displayed P has real orthonormal columns; explicit P-dagger access satisfies the corrected LCU algorithm. SELECT has unitary I and Z blocks. M=diag(3,-1), alpha=3, so the branch is (a,-b/3), with weight 1-8|b|^2/9. It is always positive, minimum 1/9 at a=0 and maximum 1 at b=0, making conditional normalization legitimate. Exact preimage recovered from reader attempt-3 log line 10826 matches 8e4e9a1bb1d18a75ff58944632f1721cab9a6dc118497f41ade4ef664cd4c4db; current equals frozen reader-post c02e7f58e144efcc92f2930fe201c72fc9e112412f6f37e066674b425397ff99. The substantive delta promotes the full P and its supplied inverse to the example interface, then checks them in step 1.1; other proof reflow is mechanical. Accept repair, confidence 1. No logical item consumers or outside affected repairs; no AC or residual defect.

## Level 17: robust isometry

`lem-qa-21-robust-one-step-oaa-isometry`: Read all six proof steps and all sixteen cited suppliers. C is unitary with D=3M/2-MM-dagger M/2. The telescoping cubic difference bounds ||D-V|| by 4 eta for eta<=.01. Orthogonality gives L-dagger L=I-D-dagger D; ||L||^2<=delta(2+delta)<=9 eta and hence total error <=4 eta+3 sqrt(eta)<=10 sqrt(eta). This treats eta=0 without division, giving exact clean action then. Adjoint norm equality is derived with the first-linear pairing; finite reference extension is the sum-of-squares tensor argument, valid for entangled vectors. Only finite bases are chosen, no AC. No findings or defect.

## Level 19: segmented error and resources

`thm-qa-21-taylor-simulation-error-and-cost`: Read all eight proof steps, full segmented procedure and all seventeen cited dependencies. Certified epsilon enclosure yields epsilon/2<=epsilon_-<=epsilon; S=0 reaches the identity branch, and its S/(1-S)<=epsilon/3 estimate is valid through epsilon=1. The q enclosure gives integer r>=q and r<q+2 even at integer q; negative t enters only h and |t|. Factorial doubling uses positive rational eta_-, terminates, and loses at most factor two in the order bound; eta/4<=eta_-<=eta. Padded normalization gives block M_K/2 with tail <=eta and eta<=1/1600, so the robust lemma applies. Fresh retained ancillas allow isometric telescoping at epsilon/(4r) per segment without assuming cleanup. Full compiled-call hybrid error adds <=epsilon/2, hence 3epsilon/4<=epsilon. Finite-reference extension and explicit spectral purification followed by Hermitian partial trace prove the mixed-state distance guarantee. Rechecked 3r each PREPARE/inverse, 2r SELECT, r inverse SELECT, 2r reflections, reverse-order tuple products, and the distinction 3rK coherent indexed versus 3rmK individual queries. All internal/table/control/phase costs stay separate; fresh index widths use N_K+2 labels. No zero-dimensional density input exists; no AC or mathematical defect. Reader/refuter findings are empty.

## Sources and review limits

Opened the authoritative PDFs online and read the relevant complete cached text sections: Childs, https://www.cs.umd.edu/~amchilds/qa/qa.pdf, chapter 28 section 28.3, (28.5)-(28.25), printed pp.140-142 (cache `research/quantum-computing-planning/sources/qc_r6/childs-lecture-notes.txt`, lines 12414-12700); de Wolf, https://arxiv.org/pdf/1907.09415, sections 9.3-9.3.1, (9.3)-(9.5), cached lines 4720-4922 (printed pp.74-76), plus Exercise 9 (printed pp.80-81); Watrous, https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf, section 1.1.3, (1.181)-(1.186), printed p.34, cached lines 2743-2814. The local robust-isometry, exact resource and trace-distance extensions were checked from their authored proofs; citations are context, not substitutes for proofs. Childs uses an uncorrected OAA sign and Watrous calls the full trace norm the trace distance; the local items explicitly fix their own minus correction and half-norm convention. Childs final generic complexity sentence is not used as a supplier. No full audit of unrelated supplier proofs or published pages is claimed.

No published defect or withdrawal was found; published content stayed read-only. All current mathematical risk reviews are complete. The only unresolved obligation is the padding example historical preimage/owner-disposition hold, independent of its sound current mathematics.

## Decisions and defect accounting

Exactly four touched obligations are recorded in the companion decisions JSON. Three reader repairs are accepted with confidence 1, with individual closed ledger rows `quantum-computing-algorithms-60-2026-10-15-3a-batch-45-D001`, `D002`, and `D003`. The theorem hypothesis clarification is nonfatal; the procedure and example originally failed to supply used inverse access. Padding remains `escalated` solely because its historical delta cannot be authenticated and explicit owner current-content authorization is absent. No acceptance or historical owner resolution is invented. No new item edits, manifest changes, provenance changes or judge stamps were made. Ten complete risk reviews were added to the owning contract.

## Local checks and handoff

- `node tools/risk-report.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-45.proof-contracts.json`: exit 0; ten HIGH/CRITICAL items identified and individually reviewed (eleven items routed including the moderate padding example).
- Same command with `--require-reviewed`: exit 0, zero errors; ten required reviews complete.
- `node tools/tsx-run.mjs tools/precheck.mts` on the four touched item paths: exit 0; three proof bodies checked, zero failures; the algorithm has no phase proof.
- `node tools/proof-layout.mjs` on all four touched item paths: exit 0, four items, nine steps, zero defects. No item was edited in adjudication.
- `node tools/rendercheck.mjs` on the same four paths: exit 0; all YAML and math parse.
- Local read-only consistency check: exactly four owed decisions, all eighteen raw item hashes still equal frozen reader-post, ten complete required risk reviews. This is not an engine gate or a decision stamp.
- `node tools/defect-ledger.mjs append --file /tmp/qa21-batch45-closed-rows.json`: exit 0; three closed rows appended through the serialized native append/render tool.
- Frontier dependency ledger updated with owned consumer dispositions; batch cross-dependency records preserved.

The live native status command recomputed run state successfully: batch 45 was awaiting 3a-adjudicate; it also retained an unrelated batch-12 construction-identity spec blocker. No control/state mutation or gate battery was attempted.

Required owner action: recover the padding example pre-reader carrier matching SHA256 `6898b871c196ae12273ac877a0736444abfcfcb5d7b6f6b9fc220db617aca9a4`, or explicitly authorize current-content resolution with durable evidence. Its current complete mathematical review above is available for that resolution. The escalation remains open; historical uncertainty has not been cleared. The engine owns stamping, gates, routing and transitions.
