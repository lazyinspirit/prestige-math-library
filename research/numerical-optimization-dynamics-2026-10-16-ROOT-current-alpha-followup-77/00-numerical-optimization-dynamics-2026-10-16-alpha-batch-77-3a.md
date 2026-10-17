# Batch 77 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`. Group: `batch-77`. Scope: batch 77 only. Five routed obligations: four refuter findings and one touched lemma; no reader findings or page obligations. The engine retains scheduling, stamping and gates.

## Completed review, in prescribed order

### Level 2 — def-parareal-propagator-pair

Reviewed its full Definition and the Definitions of `def-explicit-runge-kutta-tableau-and-stage-map` and `def-backward-euler-step-equation`. Deterministic partial maps, successful finite composition, and an input branch selector make the construction sound without a root-existence theorem or AC. Empty admitted sets, d=N=1, zero states and identical maps are allowed. Fine/coarse labels assert no accuracy. Complete specific Alpha risk review recorded in the owning contract. No routed decision is owed.

Source context checked: Falgout et al., *Parallel Time Integration with Multigrid*, §§2.1–2.4, printed pp. 3–7, https://www.math.mun.ca/smaclachlan/research/mgrit.pdf (all-at-once recurrence, ideal transfers and recursive cycle). This source includes the initial state as an unknown; the local convention absorbs it into b_1, so the boundary call count must be checked locally. Gander chapter PDF fetch failed; no argument is accepted on that fetch.

### Level 3 — alg-parareal-correction-sweeps

`refuter:77:3` and `refuter:77:4`: confirmed nonfatal. The cost formula was an unproved property embedded in an algorithm Definition. It is retained, with explicit excluded overhead and a complete two-step counting proof, in new `lem-parareal-sweep-work-and-span` on the existing A page. The vague certificate is now typed input data (certificate space, supplied certificate, declared row predicate and terminating deterministic Boolean verifier whose soundness is an admissibility condition). The final branch calls that verifier exactly once after all requested sweeps. Absence of a certificate means false. Propagation failure and time expiry keep precedence, and initialization failure has an explicit empty-table/no-endpoint output. No general analytic convergence is asserted by an arbitrary user predicate. Statement provenance updated to ai-altered; there was no judge record.

No numerical recurrence changed. Direct consumers identified by current item search: the first-k lemma, binomial theorem, and three Parareal examples. Their actual recurrence uses will be checked before handoff; none relies on the old certificate ambiguity or cost paragraph. The new cost lemma has a contract and manifest/page placement; it needs ordinary engine authoring-origin handling and later independent review, with no self-certification claimed here.


### Level 4 — lem-parareal-first-k-nodes-are-fine-exact

`touched:77:lem-parareal-first-k-nodes-are-fine-exact`: amended repair (reader mathematical repair accepted; carrier contract amended). The current raw source SHA-256 is the frozen reader-post hash `e60a62831dcd78dfdf15f1c721793402855801c038790a9b751a413a0184d814`, whereas the pre-reader hash is `286815fa1182f9e53993f44a6a0f2658e2c00859c6ab5683389a7cd21c68555c`. The reader report identifies the completion-condition change; independently checked the complete current three-step proof and F1/F2. The nested induction cancels G only at equal admitted inputs, and all earlier rows exist for a completed sweep. K>=N is used only after completion of row K; failure or time expiry supplies no such row. Its oscillatory example consumer uses the completed-sweep assertion with total maps and remains sound. No further item edit is needed. The F2 contract quote now mirrors the current algorithm Definition, with unchanged recurrence and completion rule. The focused contract check also exposed the reader’s omitted F2 use at step 2.1 and stale oscillatory-consumer Statement quote; both metadata records are now synchronized. These additional contract edits make the final carrier verdict amended_repair.

### Level 4 — thm-parareal-binomial-error-bound

Complete independent risk review: subtracting the fine recurrence gives E(n+1,k+1)<=a E(n,k+1)+b E(n,k). Simultaneous induction on nodes, with E(0,k)=0, the k=0 envelope and Pascal partition identity, proves the binomial estimate including k>n, b=0 and M=0. A=max(1,a) avoids division and covers a=0. Every actual comparison is in the common domain; no unjustified tube invariance is assumed. For fixed T>0 and k, A^N<=exp(C_a T), binomial(N,k)<=N^k and b<=C_b H^(q+1) give the stated H^(qk) bound with uniform M. Checked exact cited exponential Definition, dominance lemma and addition theorem, and norm Definition. No repair or decision owed.

### Level 4 — ex-parareal-dissipative-scalar-heat-mode

Complete independent risk review: Euler microstep multiplier 3/4 gives F=9/16; backward Euler solves (3/2)z=x giving G=2/3 on all real states. Direct fractions give x_2=81/256, U_2^0=4/9, U_2^1=11/36 and errors 295/2304 and 25/2304. N=3 permits the displayed t=1 node, with no hidden endpoint issue. All calls are total and the comparison is to the fine trajectory, not the exact exponential solution. Read Euler tableau and backward-Euler Definitions and current recurrence. No repair or decision owed.


### Level 5 — alg-mgrit-two-level-cycle

`refuter:77:2`: confirmed nonfatal. Moved the Work model to separate proved `lem-mgrit-two-level-call-counts`, preserving the boundary exception, C/FCF counts, literal zero-input coarse call and accounting for residuals/transfers/communication. The Definition retains the identical cycle, relaxation and stopping instructions. Independently checked the all-at-once and exact-elimination suppliers: identity diagonal blocks make A_t, A_FF and A_c invertible without invertibility of Phi/Psi. P has Nd by N_cd dimensions, R has N_cd by Nd, and R A_t P is the coarse Schur matrix. With m>=2, C predecessors are F indices and F updates separate by coarse interval. Initial residual check, zero cycle budget, zero tolerance and N=m=2 are specified. The error product follows by subtracting the fixed solution through pre-relaxation, correction and post-relaxation. Provenance updated; no judge stamp existed.

Direct consumers are the recursive algorithm, contraction theorem and scalar diffusion example (plus the newly authored cost lemma). Their uses of the unchanged procedure and transfers are reviewed next. No outside consumer was found by item-reference search.


### Level 6 — alg-mgrit-multilevel-recursive-cycle

`refuter:77:1`: confirmed nonfatal. Relocated cost properties to separate proved `lem-mgrit-recursive-work-and-visits` on the same A page. Its downward induction establishes finite recursion (assuming terminating primitive operations); counting children gives v_(ell+1)=nu_ell v_ell. Partitioning actual operations by executing visit proves the work formula, explicitly excluding children from parent local work to avoid double counting and accounting for repeated coarse residuals and outer checks. Inherited relaxation counts come from the separately proved two-level count lemma. Fixed per-visit costs are explicit, with actual-visit summation when costs vary. No speedup/contraction guarantee is added. The recursive procedure and updated-residual ordering remain unchanged; cost-only relocation affects no numerical consumer. All direct suppliers and norm Definition were read. Complete specific risk review recorded before advancing.


### Level 6 — thm-mgrit-contraction-implies-residual-and-error-decay

Reviewed every proof step and exact suppliers. With e=u_*-u, r=A_t e, pre/coarse/post operations yield E=S_post(I-P A_c^(-1) R A_t)S_pre. The induced-norm definition, including separate zero-vector cases, gives the q^r estimate by induction. q>=0 follows from ||E||<=q, and q=0, r=0 (q^0=1), zero initial error and singular individual step propagators cause no exception. A_t is invertible by the local forward-substitution lemma; explicit finite ||A_t|| and ||A_t^(-1)|| give both residual/error comparisons. Norm separation is the only iff claim. No spectral assumption or unproved two-grid rate is imported from Dobrev/Southworth. Complete risk review recorded; no repair or decision owed.


### Level 7 — ex-mgrit-scalar-diffusion-two-grid-contraction

Reviewed all five steps and seven exact supplier sections. In the local convention A_t has first row (1,0,0,0); F=(1,3), C=(2,4) gives A_FF=I and S=[[1,0],[-alpha^2,1]]. Pre-F error is (0,e_2,alpha e_2,e_4). Ideal restriction of its residual and the practical coarse solve leave only (alpha^2-psi)e_2 at node 4 after correction; post-F leaves it unchanged. With alpha=3/4 and psi=2/3, E_42=-5/48. The witness (0,1,0,0) attains the infinity-norm bound. Explicit inverse row sums give ||A_t||<=7/4 and ||A_t^(-1)||<=175/64; the infinity norm axioms are proved in step 5.1. All contraction-theorem premises hold. Complete risk review recorded; no repair or decision owed.

## Consumer and source dispositions

Read the actual uses in every direct reference consumer of the changed algorithms and reader-repaired lemma. Parareal consumers use only successful exact recurrence rows: first-k lemma, binomial estimate, dissipative example, oscillatory example, nonlinear-tube example. The oscillatory maps I and -I are total and its given two completed sweeps give the stated exactness; the tube example computes -1/8 from admitted inputs and correctly forbids applying the common-set bound afterwards. MGRIT consumers are the recursive procedure, contraction theorem and scalar diffusion example, all reviewed above. No consumer uses the relocated cost paragraphs or ambiguous certificate branch. No necessary consumer Statement/Definition change, further-hop repair or outside-batch consumer escalation resulted. Current-reference item search found no outside direct consumers. All original IDs and any proposed withdrawals remain present; none is proposed here.

Falgout §§2.1–2.4, printed pp. 3–7, was read as context for the procedures and transfers. Local induction, counting, elimination and explicit scalar arithmetic establish the reviewed results independently. The Gander chapter fetch returned an internal error; no claim of reading its full argument is made. Dobrev and Southworth parameter-dependent convergence theorems are not premises of the local conditional contraction theorem; no uninspected theorem from them is substituted. No defective published prerequisite was found, and no published carrier was edited.


## Final routed decisions

| Obligation | Verdict | Closed defect |
|---|---|---|
| refuter:77:3 | confirmed_nonfatal | nod-b77-3a-refuter-3 |
| refuter:77:4 | confirmed_nonfatal | nod-b77-3a-refuter-4 |
| touched:77:lem-parareal-first-k-nodes-are-fine-exact | amended_repair | nod-b77-3a-completed-sweeps |
| refuter:77:2 | confirmed_nonfatal | nod-b77-3a-refuter-2 |
| refuter:77:1 | confirmed_nonfatal | nod-b77-3a-refuter-1 |

Every repair has repair_confidence 1. Each finding maps to exactly one closed ledger row owned at 3a-adjudicate. The reader’s omitted completion hypothesis is fatal to its old unconditional returned-row consequence; its current proof is sound. The four refuter issues are nonfatal procedure/property presentation defects. No false positive, escalation or withdrawal is claimed. Original immutable pre/post snapshots and scope were not modified. Decisions are unstamped for the engine.

## New local suppliers and ownership handoff

Three necessary proved lemmas preserve the cost claims while satisfying the algorithm rule. They are authored only on the assigned existing A page, listed after their suppliers, integrated into its manifest, proof contracts, canonical coverage and source-coverage records. Their statement provenance is ai-altered with the Falgout procedure-context URL; exact accounting is established locally. No AC is used, and each has two complete tagged proof paragraphs. No prior judge record existed on the changed carriers. The reader’s lemma source remains exactly the frozen post-reader bytes.

- `lem-parareal-sweep-work-and-span`: level 4; deps `alg-parareal-correction-sweeps`; current raw SHA-256 `3eaecff86d682fadbb00caea273401872cc17a3baff902452e20e29a9a832149`.
- `lem-mgrit-two-level-call-counts`: level 6; deps `alg-mgrit-two-level-cycle`; current raw SHA-256 `5bb5a2c5634631adac1670f6974fd54a7136812858f98f289d8f68ea9ab6236d`.
- `lem-mgrit-recursive-work-and-visits`: level 7; deps `alg-mgrit-multilevel-recursive-cycle`, `lem-mgrit-two-level-call-counts`; current raw SHA-256 `0461f12c67a82d271d46fa901615d899f10e6e905bd23550a257d7b1570551b4`.

The owner/engine must apply its ordinary new-authoring origin/independent-review handling for these added draft suppliers before downstream acceptance. This report grants no origin certification, judge coverage or gate waiver. New suppliers are not invented additional decisions in the frozen five-obligation dispatch. Existing page identities and all original item identities remain stable.

## Local validation

All commands were scoped local checks, not a judge cycle or the engine gate battery.

- `node tools/tsx-run.mjs tools/reflow.mts` on the six edited/new items: all unchanged on the final formatter pass.
- `node tools/tsx-run.mjs tools/precheck.mts ... --json` on those six plus the touched reader lemma: 7 files, 4 proof-bearing files passed, 3 algorithms not applicable, 0 failures. The first check requested two-phase numbering for the three new two-step proofs; adopted it and synchronized contracts before the successful run.
- Final `node tools/proof-layout.mjs` with all six changed item paths and the reader lemma in one command: 7 items, 9 steps, 0 defects. This ran after final item edits and formatter; no subsequent item edit occurred.
- `node tools/rendercheck.mjs` on six changed items and the edited A page: 7 files, all YAML and actual KaTeX checks passed.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-77.proof-contracts.json --strict`: 18/18 checked, 0 errors, 0 warnings after the two stale reader citation records were synchronized.
- `node tools/finite-smoke.mjs research/numerical-optimization-dynamics-2026-10-16-batch-77.proof-contracts.json`: all 4 prescribed finite example fixtures passed, 0 errors. These bounded computations supply no general theorem coverage.
- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-77.proof-contracts.json`, then the same command with `--require-reviewed`: 18 items, 0 errors. Complete specific Alpha reviews cover all six initially routed HIGH/CRITICAL subjects and both newly triggered HIGH subjects (the amended Parareal algorithm and new recursive accounting lemma).
- Closed ledger rows appended through the serialized `tools/defect-ledger.mjs append` interface; the generated view was refreshed in each append transaction. No defect row was created for a mechanical failure.
- Scoped `git diff --check`: exit 0.

## Outside-scope mechanical blocker and next action

`node tools/frontier-dependency-ledger.mjs refresh --run numerical-optimization-dynamics-2026-10-16` failed twice with exit 1 while parsing a foreign item: invalid YAML escape `\k` in the double-quoted source locator of `items/thm-cir-lamperti-scheme-converges-in-probability.md:33` (parser reports frontmatter-relative line 32, column 76). Its owner is batch 76, page `stable-sde-schemes-for-superlinear-drift`. The line contains raw TeX escapes in the double-quoted locator, including kappa/lambda/theta. The smallest correction is valid YAML quoting/escaping that preserves the locator text. No mathematical review of that foreign theorem is claimed and its source was not edited. Route this exact metadata obstruction to batch 76’s owner, then rerun the ledger refresh. Batch 77’s owned input and its brief record are updated, but the unified derived ledger has not been refreshed successfully by this dispatch.

There is no unresolved mathematical prerequisite in the five adjudicated obligations. Remaining owner/engine actions are the foreign metadata correction, derived-ledger refresh, ordinary handling of the three new authored suppliers, decision hash stamping and the engine’s full gate battery. No publishing, commit, dispatch or run transition was performed.
