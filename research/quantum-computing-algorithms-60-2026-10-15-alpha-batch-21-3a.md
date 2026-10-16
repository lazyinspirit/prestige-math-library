# Batch 21 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-21`. Local work complete; native engine closure pending.

## Final disposition

Exactly three obligations are decided in the companion decisions JSON (group `batch-21`; original scope group `s` preserved):

| Obligation | Verdict | Closed defect |
|---|---|---|
| refuter:21:1 — four-round Shor correction | confirmed_nonfatal | qc60-b21-3a-controlled-z-compilation |
| touched:21:lem-qc-verified-steane-magic-state-and-injection | amended_repair | qc60-b21-3a-factory-decoder-attribution |
| touched:21:lem-qc-verified-steane-initialization-and-readout | accepted_repair | none additional |

All completed repairs have `repair_confidence: 1`. The initialization carrier is unchanged from the reader-post snapshot. The two Alpha item edits are proof-only: explicit controlled-Z compilation and removal of a wrong decoder attribution. No Statement or Definition changed. Reviewed the actual supplier contracts used by higher items; those uses retain the same mathematical interfaces, so no consumer repair or outside-batch supplier alert is necessary. There are no page-only or reader-finding obligations, no proposed withdrawal, no new page or algorithm, and no new choice assumption.

The focused contract check initially found stale derivation inputs following the reader's insertion/renumbering. Both reader-touched derivation tables were synchronized with current proof claims, trailing tags and explicit prose step citations, in the owning and aggregate contracts. This is mechanical audit synchronization; no defect-ledger row was created for it. The Shor correction derivation and two edited items' manifest provenance were also synchronized. No judge record was present on either edited carrier; no judge or acceptance stamp was created.

## Mathematical evidence and sources

The review used current carriers, their complete authored arguments, the reader report/findings and refuter artifact, both hash snapshots, batch contract and manifest, and the actual cited local dependency statements. The scope was the routed items and their prerequisite interfaces, rather than an audit of all transitive library content. Exact local source IDs are retained in each carrier's facts and in the contract citation rows. The detailed risk reviews below preserve the checked hypotheses, boundaries and inference chains.

External source passages consulted:

- [Aliferis–Gottesman–Preskill, quant-ph/0504218v3](https://arxiv.org/pdf/quant-ph/0504218), §5.2.1–§5.2.2, PDF pp.15–17: nested elementary-location truncation and invertible syndrome-retaining decoders. The local proof additionally checks its actual port boundaries and induction domains; source assertions were not treated as verdicts.
- Aharonov–Ben-Or, quant-ph/9611025, local authoritative extraction `research/quantum-computing-planning/sources/qc_r5/aaronov-ben-or-9611025.txt`, lines 150–167 and Appendix Lemma 2, lines 845–947 (printed pp.13–14): recursive alphabet closure, arbitrary-input correction and simultaneous computation/correction/attraction induction. The current hierarchical-sector proof is reviewed on its own terms.
- Preskill, *Fault-tolerant recovery and fault-tolerant gates* (2011), local extraction `research/quantum-computing-planning/sources/qc_r5/preskill-fault-tolerance-2011.txt`, lines 134–158: cat preparation/verification and the five-stage correction construction. The present four-round, private-control circuit is checked directly; the source does not substitute for its explicit one-fault case analysis.

No defective published supplier was found in these actual uses. Published content stayed read-only; no published-ledger change or lock was needed. Owned cross-batch interfaces remain in the existing batch-21 dependency records, and a run-specific maintenance note was appended to `briefs/tasks/frontier-dependency-ledger.md`.

## Completed risk reviews, in dependency order

### `def-qc-finite-channel-location-schedule`

Checked Definition and both verification steps against quantum-channel, local-support, and composition suppliers. Full-register typing, declared ancillary/classical factors, chronological order and empty M=0 identity are sound; no implicit idle or cross-slot operation is inferred.

### `def-qc-noise-channel-model`

Checked both verification steps: finite Bernoulli product mass normalizes by splitting one coordinate, including eta=0,1 and empty L; atom summation proves event-class independence. Pattern-dependent CPTP replacements preserve declared support; no independence of replacement maps is asserted.

### `lem-qc-noise-channel-model-composes-with-circuit-semantics`

Checked all four steps against finite probability, schedule and composition suppliers. Each conditional composition is CPTP, including empty schedule via supplier verification; finite convex averaging is CP on every reference and TP on all operators. Correlated laws require no independence.

### `lem-qc-scalar-phase-completes-clifford-t-universality`

Read all six proof steps and actual projective-density, irrational-circle, gate-matrix, operator-norm and deviation suppliers. Open quotient-ball argument supplies a phase-adjusted word and irrational scalar powers give the missing phase; epsilon/2 triangle bound is valid. m=1 and s=q=0 covered. Tensor scalar gadget is exact on every encoding; support union gives s+q with arbitrary joint Kraus terms/reference. Recursion leaves exactly one phased descendant and counts idles explicitly. No full proper-code contract is inferred.

### `lem-qc-t1-truncated-exrec-witness-reduction`

Read Statement, A1/A2, boundary identity, all 13 proof steps and repair history; compared AGP quant-ph/0504218 sections 5.2.1-5.2.2 (PDF pp.15-17). Complete Pauli recovery gives invertible syndrome coordinates; proof contracts actual ported physical owners before coordinate changes, rather than commuting lossy recovery through bad maps. Collar transfer follows terminal EC edges, virtual collars are wholly ideal, and simultaneous input-sector/EC induction descends strictly in scale. Unitary factors use pure Choi marginal; destructive measurements use their full instrument hypotheses. Fixed template addresses give 2^r distinct leaves and A^(2^r-1) labelings independent of truncation; union bound uses only fixed-leaf probabilities. r=0, k=0, eta endpoints and finite choices are covered. This is conditional on all stated elementary gadget identities, not an unconditional construction.

### `lem-qc-disjoint-fault-location-events-are-independent`

Read all three steps and actual indicator law, rectangle and independence definitions. Expanding disjoint restrictions into atoms and distributing finite sums proves every subfamily product identity, including empty coordinate sets and eta endpoints. Only events determined by disjoint elementary indicator sets are included; no independence claim is made for overlapping or selected truncated exRecs.

### `lem-qc-concatenated-steane-distance-and-transversal-cliffords`

Read all eight steps and exact CSS Hadamard, stabilizer dimension/distance/recovery, Pauli and ordered CNOT supplier statements. Checked B rank/self-orthogonality, x coset/parity, weight-four row code, and distance-three quotient. 42 inner plus six independent outer checks give dimension two; outer nontrivial centralizer needs three weight-three blocks, with a weight-nine witness. S gives S dagger at one layer and S exactly at two. Recovery of uniform Pauli mixture forces scalar Kraus identities on the whole error span. Transversal CNOT uses union A cup B, never max input weight; all reference and fault-support claims follow these identities.

### `lem-qc-planar-mw-recovery-failure-yields-half-error-path`

Read all three steps and actual relative patch, syndrome, Pauli and path-count/distance statements. Syndrome equality makes C=E triangle R a relative cycle; nontriviality supplies a left-right path. Loop deletion preserves containment/endpoints; d<=length<=n. Toggling the relative path preserves syndrome, and minimality gives |R intersect P|<=|E intersect P|, including ties and odd length. No faulty-syndrome assumption is introduced.

### `lem-qc-encoded-error-instrument-and-cptp-distinction`

Read all seven proof steps against deviation/error-sector definition, actual 49-qubit code and exact-recovery supplier. No weight-one/two stabilizer plus distance nine makes phase-free weight-one error embeddings orthogonal and restriction injective. B=(I+X1)/sqrt(2) restricts to an isometry but every hypothetical extension Kraus is c_j B; adjoint-square normalization is impossible on X1 minus eigenspace. Fixed recovery of Pauli mixture forces scalar logical Kraus actions, extending to joint spans and memory-valued coefficients with correct subnormalized branch probabilities. Only the memory-traced logical/reference marginal is preserved; no identity memory output asserted.

### `lem-qc-four-round-verified-shor-correction`

Read Statement and all 15 proof steps against current 49-qubit code, sector, Pauli and instrument suppliers; consulted Preskill 2011 notes cat-verification and repeated-syndrome discussion (local text lines 134-158). Checked syndrome surjectivity and weight-eight compression; exact cat Kraus coefficient; two candidates, tripled verification, private coordinate enables and decoder workspaces isolate a sole fault. Four rounds force an adjacent valid pair even across old/new syndrome; raw-copy corruption affects at most one bit outside the target workspace. Arbitrary incoming weight-two plus one error stays weight-three, within recovery capacity four; arbitrary-input attraction has no logical-preservation claim. Kraus/memory expansion retains subnormalization and unchanged reference. Serial workspace and huge finite bounds remain valid after explicit H-CNOT-H controlled-Z compilation at step 2.2; no alphabet closure under recursive Toffoli asserted. Refuter finding confirmed nonfatal and repaired without Statement change.

### `thm-qc-planar-surface-code-iid-z-memory-bound`

Read all three proof steps and every current cited supplier statement. For fixed length l path, union over ceil(l/2)-subsets gives <=2^l epsilon^(l/2), including epsilon=0,1 and odd l. Combine exact (d+1)3^l count and half-error witness, sum d through n=2d^2, then geometric tail with ratio 6 sqrt(epsilon)<1. Recovery ties are harmless; perfect syndrome, iid Z noise and d>=2 retained. This proves a memory bound only.

### `lem-qc-verified-steane-magic-state-and-injection`

Read all 13 steps and complete actual code, Shor correction, exact gate and joint sector suppliers. Verified bare encoder size, M=e^-i pi/4 SX eigenstate, controlled-S phase polynomial, cat coefficient 2^-25, tripled checks and independent selector fallback. Distance-nine coset separation uniquely labels all strings within four errors. Injection amplitudes and conditional S phases are exact; incoming one error plus one fault gives two-coordinate support. Reader-added 8.1 validly expands arbitrary destructive measurement Kraus rows, including memory-valued entries: ideal and reported strings differ at one coordinate and therefore share the logical label and correction. No normalized-branch CPTP extension is inferred. Removed erroneous attribution of decoder to F3 (gate matrices); exact decoder remains cited to step 2.2. Finite schedule bounds and zero-fault s<=4 clause checked.

### `lem-qc-verified-steane-initialization-and-readout`

Read all seven proof steps and current factory/code/correction/sector suppliers. Zero preparation replaces M by logical Z rank-one verification; transversal H gives plus. Protected readout emits a new encoded classical block rather than an unprotected final bit. Distance-nine coset separation makes a physical string within three changes determine one common logical bra, including coherent weight-two inputs. Reader-added 3.1 correctly expands arbitrary faulty destructive measurement rows (memory-valued entries allowed); ideal and reported strings differ in one position and all terms have the same logical label and encoded output. Trace preservation restores the exact logical instrument weights. Sole preparation, data, record-copy, private decoder, final control and idle fault cases covered with at most one fresh-block error. Reset discards then prepares; reference/memory distinction and finite bounds preserved. Current bytes match reader-post fc533952eed70a719949b5d175eea375aceade44835253ad55837d61dbcb3c53. Accept reader repair without further edit.

### `lem-qc-recursive-bad-rectangle-probability`

Read all four steps, full-depth/disjoint hierarchy Definition and disjoint-event supplier. Every bad parent contains q+1 bad child subset; locality of recursive badness and disjoint sets justify independence, then finite union bound and induction give A^(-1/q)(A^(1/q) eta)^((q+1)^r). q>=1, q<a, a>=2 ensure A>=1; full depth supplies uniform exponent. r=0, eta=0 and A=1 valid. p_r is the uniform recursively propagated probability bound, rather than a claim of independence for overlapping exRecs.

### `lem-qc-sparse-fault-path-implies-code-deviation`

Read all four steps and actual proper-code, joint encoded-sector and recursive-goodness definitions. Initial budget zero satisfies q ell; computation contract supplies 2q ell<=d; actual noisy correction returns q ell without inserting ideal recovery physically. Joint support-span multiplication is valid termwise for coherent/correlated errors. Finite stage induction and recursively imposed substitution contract preserve full instrument normalization and the external reference; no unsupported full-space CPTP extension of a branch is used.

### `thm-qc-explicit-proper-code-and-universal-gadgets`

Read all 15 numbered steps and all actual cited local supplier statements/proofs as needed, including code, four-round correction, factories/readout, scalar density and contract. ABO quant-ph/9611025 introduction closure/properness paragraphs and Appendix Lemma 2 (local text 845-947, printed pp.13-14) supply comparison, not a substitute proof. m=49, distance nine, capacity d=2, ell=1 leaves exactly q=1. Input refresh prevents simultaneous two-block incoming errors from exceeding weight-four recovery even at a faulty CNOT; exact parity-phase Toffoli decomposition has 27 gates and fixed scratch. Hierarchical E_{r;s} sectors permit unrestricted bad children; recovery retains syndromes and corrects at most four unrestricted outer coordinates. Actual ports/private workspaces and first-use local refresh in 5.2 justify absorption without new shared bath. Simultaneous correction/computation/idle-attraction induction descends levels and uses prefix idles; bad residual coordinate is retained in hierarchical budget. Protected public classical records and branch probabilities survive substitution. Padding occurs once after complete template, on retained registers, so a padding fault adds one error; a, depth, workspace constants are width independent. Unknown-input encoding is only zero-fault; full U(2) density includes explicit scalar phases. Supplier correction compilation repair leaves all used contracts unchanged.

### `thm-qc-local-stochastic-concatenated-threshold`

Read all six steps and all eleven cited current supplier interfaces, including full witness lemma proof and finite channel/noise definitions. Local-stochastic law bounds fixed subsets; no child-event independence is used. Full-depth tree yields exponent (q+1)^r and A>=1. q=floor(d/(2 ell)) ensures 2q ell<=d. Good top roots imply admitted stage contracts, so every good-pattern decoded output equals ideal even for entangled inputs. Bad-pattern normalized mixture exists for alpha>0; alpha=0 chooses any state. Trace-distance homogeneity and range bound give alpha, finite POVM TV and event bounds have correct factor one. eta=0 uses finite union of zero-mass fault events; logarithmic condition handles r=0 before loglog. Finite padded gadgets give constant kappa size/depth overhead; fixed parameters and N/delta asymptotic retained. Unknown unencoded inputs and cross-slot shared operations remain excluded by hypotheses.

### `thm-qc-proper-code-concatenated-threshold`

Read all seven steps and all ten cited current supplier interfaces. Independent recurrence applies only to ordinary disjoint/full-depth child hierarchies; no selected-overlap independence asserted. q>=1 and 2q ell<=d ensure nonvacuous sparse contracts; eta=0, r=0, A=1 and alpha=0 cases checked. Conditional finite schedule outputs are density operators with reference; good paths decode exactly, yielding output mixture with bad weight alpha<=Np_r. Half trace norm, TV and success-event estimates have correct normalization. Log inequality yields least r=O(loglog(N/delta)) for fixed code/noise parameters and kappa^r gives polylog size/depth including counted idles. Claim remains conditional on closed gadgets, encoded/protected initialization boundary and declared final decoded recovery.

## Local checks and blockers

- Initial `node tools/risk-report.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-21.proof-contracts.json`: 21 routed entries, 18 HIGH/CRITICAL; no mechanical errors. All 18 now have complete specific risk reviews. Rerun with `--require-reviewed` passed with zero errors.
- Reflow on the two Alpha-edited items: Shor carrier reflowed; factory carrier unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts --json` on Shor correction, factory/injection and initialization/readout: 3 checked, 0 failed.
- `node tools/rendercheck.mjs` on those same three explicit paths: 3 checked, 0 errors, 0 warnings.
- `node tools/proof-layout.mjs items/lem-qc-four-round-verified-shor-correction.md items/lem-qc-verified-steane-magic-state-and-injection.md items/lem-qc-verified-steane-initialization-and-readout.md`, after final item edits and reflow: 3 items, 35 steps, 0 defects.
- Focused `tools/proof-contract.mjs` with `--strict --items` selecting those three IDs: final result `ok: true`, 0 errors, 0 warnings after synchronizing stale reader-renumbered inputs.
- Two confirmed nonfatal defects have closed `3a-adjudicate` rows in `research/defect-ledger.jsonl`; the generated view was refreshed. Decision coverage checked against scope: exactly 2 touched + 1 refuter obligations, no extra decisions.

No local mathematical escalation remains. Native status recomputed from `.autopilot/quantum-computing-algorithms-60-2026-10-15` reports the run in Step 3a, with unrelated existing batch-12 construction-identity and collect-36 blockers. These are retained for the owner; this dispatch does not control scheduling or resolve another batch's files. Engine stamping, coverage, gate battery and transitions remain outstanding engine work. No judging, self-certification, publication, push or commit was performed.

Final Alpha-edited raw carrier fingerprints (informational, not decision stamps):

- `lem-qc-four-round-verified-shor-correction`: `81fc4b2328afb4ba470164dea1bf5bd40a8020a54a3db1712f7a916cb557b8da`.
- `lem-qc-verified-steane-magic-state-and-injection`: `20a334d741f3e9cbe342af51e4e5a8f4e697ec512841ce7fd9279dce0e4566e5`.


## Owner followup: cycle 1 current-content historical disposition

Exact original report/decisions bytes are archived in `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-ledger-repair/batches1-30/originals`. The owner explicitly authorizes current_content_review for historical-only touched obligations with unreconstructed original source bytes.

- `touched:21:lem-qc-verified-steane-initialization-and-readout`: Reviewed all current initialization/readout proof steps and full actual code-distance/transversal, Shor correction, factory/injection and error-sector suppliers. The two-candidate zero factory replaces M by logical Z and transversal H gives plus. Disjoint private decoder workspaces restrict a copying or control fault to one output coordinate. Coset distance nine makes all strings within three changes share one logical bra; arbitrary destructive-measurement Kraus rows expand into ideal strings differing only at that coordinate, including memory-valued coefficients. Full-instrument trace preservation yields exact logical readout weights, with external reference retained. Finite tables and serialized idles fit the factory bounds. This is current mathematical review only; the unreconstructed historical delta remains unknown and no defect row is manufactured. Owner-authorized current-content review: the immutable snapshots identify prior carrier digests but do not reconstruct the exact original source delta. Preserve that historical uncertainty. I independently reviewed the full current argument and its actual prerequisites; current soundness does not assert a defect or repair on unknown historical bytes.

This followup does not certify old byte history or rewrite native evidence. Root retains hash binding after freeze. No tests or gates were run.
