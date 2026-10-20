# Batch 65 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-65`; scope: batch 65 only.

The generated order task routes one touched obligation, `touched:65:alg-adjoint-sensitivity-method`, and three risk reviews. The reader findings and refuter flagged arrays are empty; no page or foreign gate obligations are owed. No agent dispatch, judgment, stamp or workflow transition is performed.

## Completed level 1 review

`thm-neural-ode-global-smooth-flow`: all five proof steps and twelve supplier statements independently checked. The current published nonautonomous smooth-flow proof correctly applies the autonomous theorem on open domain D to (1,F), and the smooth-parameter supplier provides the common local regularity. Compact local derivative bounds establish local uniqueness. Forward and reflected Gronwall supply the finite-interval state bound, and explicit endpoint sequences permit compact-interior continuation at either end. Finite local augmented-flow compositions give joint state/parameter smoothness; uniqueness gives both inverse identities; the local variational equation and chain rule give the claimed Jacobian equation. Checked zero field, zero Lipschitz constant, scalar dimensions, s=t, both endpoints, empty parameter domain (vacuous conclusion) and empty compact K. No additional choice is used. No defect or repair is needed; complete risk review saved in the owning contract before proceeding upward.

Sources: current local dependency Statements F1–F12 and proofs of the compact-extension, smooth-parameter and nonautonomous-flow suppliers; Teschl, *Ordinary Differential Equations and Dynamical Systems*, Chapter 2 (https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf), §§2.4–2.6 consulted for the relevant local regularity/continuation statements. The exact local source hypotheses, rather than a literature citation alone, ground the review.

## Completed algorithm review

`touched:65:alg-adjoint-sensitivity-method`: **reverted_change**, `change_kind: metadata`, `repair_confidence: 1`. The reader added the two existing prerequisite theorems to `justified_by`. SCHEMA forbids overlap with `deps` and requires each justification target to depend on this algorithm; neither target does. Reverted only those additions to `justified_by: []`. The reader-post source matched the post snapshot exactly (d4fa192c2651acb3c2552835a716bfad1a8326672c3bef9dff98c552f38b3210); the resulting raw source matches the pre snapshot exactly (77bd0a566d1b2c89efe9fc1e10e9a99581100aa5cae9ed108dbc3d4d69dfb6f9). This is a mechanical metadata failure, so no defect-ledger row is created.

The full algorithm Definition and continuous adjoint theorem/proof were independently checked. The global flow gives compact trajectory images and locally smooth parameter dependence; composing with C1 initial data gives the tangent. Around each parameter, choose a relatively compact parameter ball inside Theta and a large state ball to meet the tangent supplier's convex common-tube requirement. The objective's open neighborhoods permit compact local enlargements on which the continuous first derivatives are bounded and uniformly continuous. The backward affine linear adjoint is uniquely solvable. Differentiating the objective and pairing with the tangent yields exactly the initial, terminal, running and field terms in the returned q-vector, with the displayed transpose conventions and signs. Zero objective derivatives give zero adjoint/output; the empty Omega has no executions. Exact continuous instructions assert no numerical accuracy or complexity property. The mathematical body, provenance and contracts remain unchanged; there is no judge record to invalidate or Statement/Definition consumer propagation to perform.

## Completed level 2 density review

`thm-instantaneous-change-of-variables-for-ode-flow`: independently checked both steps and the complete current four-step generic density supplier. The previous global-flow result supplies every common-flow/diffeomorphism hypothesis. Change of variables identifies the Borel pushforward density, and nonsingularity plus continuity from J(0)=I makes its determinant positive. The logarithmic derivative is along the characteristic, so continuity and positivity of p0 suffice; no spatial derivative of p0 is claimed. The sign is minus trace and the coordinate sum is exactly its diagonal expansion. The zero field, scalar case, excluded zero density, fixed-parameter requirement and both one-sided endpoints were checked. Countable Choice is stated and used through the change-of-variables theorem alone. No defect or edit is needed; complete risk review saved before moving to level 3.

## Completed level 3 example review

`ex-numerical-adjoint-error`: independently checked its four Verification steps, assumptions and all eleven cited suppliers. The explicit exponential trajectory solves the linear IVP and is unique. The polynomial Euler graph is C1 even when its multiplier vanishes; its derivative is (1+theta/N)^(N-1). For N=1 the exponent-zero expression is the constant polynomial 1. Exact evaluations at theta=-100 give -1 for N=50 and 0 for N=100, both different from positive exp(-100). The continuous adjoint has terminal value (0,1), satisfies the backward equation, and its pairing with the parameter derivative of the field integrates to exp(theta). Checked theta=0, zero running/direct parameter terms, compact parameter bounds and endpoint conditions. This finite witness asserts no general error, convergence or stability bound. No defect or edit is needed; complete risk review is saved.

## Presentation, dependencies and limitations

Both current draft pages are frontmatter only, retain compact-v1, and list exactly the five manifest items in dependency order. Every owned Statement/Definition/Example section is uninterrupted by links, with references immediately afterward in separate paragraphs. No TikZ/tikzcd or other diagram occurs, and these arguments require no missing diagram. The batch cross-batch dependency file is empty; the existing external suppliers remain ordinary prerequisite context. All assigned carrier dependencies were read at the Statement/Definition level; the nonautonomous, compact-extension, smooth-parameter, continuous-density, continuous-adjoint and discrete-adjoint proofs were additionally checked where used. This is not a recursive audit of the published library. No defective published supplier, outside affected consumer, proposed withdrawal or mathematical blocker was identified.

## Local checks

All checks below ran after the metadata reversion; all listed successful commands exited 0.

- `node tools/tsx-run.mjs tools/reflow.mts items/alg-adjoint-sensitivity-method.md`: unchanged.
- `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-65.proof-contracts.json`: identified the three reviewed HIGH/CRITICAL items; rerun with `--require-reviewed`: 0 errors, 5 items routed.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-65.proof-contracts.json --strict`: 0 errors, 0 warnings, 5/5 checked.
- `node tools/tsx-run.mjs tools/precheck.mts` on the explicit five owned item paths: 3 proofs checked, 0 failing; definition and algorithm have no phase proof.
- `node tools/rendercheck.mjs` on the explicit five owned items and two owned pages: 7 files passed real KaTeX and YAML parsing.
- `node tools/proof-layout.mjs items/alg-adjoint-sensitivity-method.md`: final changed-item layout check, 1 item, 0 steps, 0 defects. No item edit followed it.
- Supported `node tools/depcheck.mjs --items-file /tmp/ml-alpha-batch-65-item-scope.json --json`: five owned items and two pages selected; 0 errors, 0 warnings, including cycle checks through their 832-item / 290-page prerequisite closure. The selection is the exact contract scope.
- Scoped invocation of `inspectStatement` from `tools/statement-first.mjs` with the renderer YAML parser: 5 items, no statement defects.
- Exact rational smoke calculation: N=1 gives 1, N=50 gives -1, N=100 gives 0. Raw SHA256 comparison confirms all five final items match the pre-reader snapshot and only the algorithm differs from reader-post.

The first dependency invocation mistakenly used unsupported `--items` and scanned the whole corpus, exiting 1 with unrelated diagnostics; it is not a scoped pass and supplies no acceptance evidence. The corrected supported selector above passed. No repository-wide defects were edited or dispositioned from that accidental scan.

Autopilot status was read from `.autopilot/machine-learning-all-101-2026-10-19` and reports a running run with batch 65 awaiting adjudication; its collect-57 blocker is outside this scope. Git HEAD observed: `951a2e7a6d`. The engine retains all transitions, decision hashing and gate duties. No current mathematical blocker remains in this dispatch.

## Literature locators

[Teschl, Chapter 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf): Theorems 2.10–2.11 (printed pp.46–48) state local smooth initial-time/state/parameter dependence; Theorem 2.13 and Lemma 2.14 / Corollary 2.15 (pp.51–53) give maximality and compact-interior continuation. The local proofs supply the finite-interval specialization and choice accounting.

[Chen et al.](https://arxiv.org/pdf/1806.07366): section 2, equations (4)–(5) and Algorithm 1, state the continuous adjoint sign/integral conventions; section 4 and Appendix A state the density identity. Appendix B identifies the adjoint derivation. The local complete adjoint theorem supplies the additional initial, terminal and running-cost terms used here.

[Papamakarios et al.](https://www.jmlr.org/papers/volume22/19-1028/19-1028.pdf): section 4.1, equations (75)–(81), describes the flow, inverse and log-density identity; sections 4.2.1–4.2.2, equations (82) and (86), describe Euler discretization and continuous adjoints. These contextual sources do not replace the independently checked local proof or assert the authored example's numerical witness.

## Handoff

One owed decision is recorded in the companion JSON: the metadata-only reversion with confidence 1 and no defect IDs. Three complete risk reviews are recorded in the owning proof contract. Mathematical bodies, published carriers, pages and manifest inventories remain unchanged. No confirmed mathematical defect, published ledger entry, withdrawal, escalation or consumer repair is owed. The frontier dependency ledger records the current owned consumer disposition. The engine should consume these outputs and perform its ordinary stamping and gates.
