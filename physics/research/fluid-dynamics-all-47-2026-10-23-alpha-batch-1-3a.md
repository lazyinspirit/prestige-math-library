# Batch 1 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`. Group: `batch-1`. Scope: batch 1 only.

## Level 0: definition decision

`touched:1:def-fdmath-finite-ensemble-and-covariance`: **accepted_repair**, repair confidence 1. The reader made positive integer dimensions m,n and the common set D explicit, with tuples in (R^m)^N and (R^n)^N and pointwise maps on D. The outer-product convention fixes every matrix component. The finite mean and covariance require no convergence, sampling, or choice assumption. Zero weights and singular/zero covariance are admissible; N=1 gives zero fluctuation, while N=0 is excluded. An empty function domain is harmless because the formulas are pointwise.

The current raw item SHA256 `e5a11f1eb987da38e6a209d35018fb98b6f0e26919e48a6c3d547211e152bc7e` equals the immutable post-reader snapshot. Substituting only the original Definition text retained in batch 1's manifest into that unchanged carrier reproduces the exact pre-reader SHA256 `86ade5cfe5ea906a1cd6c28df7573be6b7ca5600842f27d8a22be1c0b91add51`. This authenticates the complete delta, without assuming unavailable history. The changed contract fingerprint agrees with the reader's reported finite-check clarification; all other item and page snapshot fingerprints are unchanged. The nonfatal typing omission is closed by the retained reader correction and recorded as `fluid-dynamics-all-47-2026-10-23-3a-batch-1-definition-typing`.

The direct consumer `thm-fdmath-finite-reynolds-identity` uses m=n=d with positive integer d and common domain I times Omega. Its four proof steps establish finite-sum centering, product expansion, the averaged equation, positive semidefiniteness and the energy split, using exactly the revised definition. No consumer repair is necessary. As additional continuity checks, its two batch-1 consumers were read: the energy theorem uses periodic lifts on R^d; the counterexample uses constant fields 0,0 and w,-w with weights 1/2,1/2 and nonzero w. Both respect the definition, and the latter has covariances 0 and w tensor w with quadratic value |w|^4>0. Searching current items and all run batch manifests finds no other direct definition consumer. No interface change propagates beyond these unchanged consumers.

The manifest Definition mirror is now synchronized with the accepted carrier; stale definition-contract boundary excerpts were refreshed to current exact phrases. These are supporting metadata changes, not another mathematical defect. The definition's risk tier is ORDINARY; no mandatory high-risk review is owed for it.

## Level 2: energy-transfer risk review

`thm-fdmath-mean-fluctuation-energy-transfer` is HIGH (score 5). Its Statement, all four proof steps, actual prerequisite statements and proofs, and F1-F3 contract quotations were independently checked. The supplier applies with open spatial domain R^d, zero forcing, fixed normalized weights and common viscosity. On each compact time interval and periodic cell, joint continuity and the stated derivatives justify differentiating energy integrals. Coordinate endpoint cancellation proves vanishing periodic divergence integrals; integration by parts is permitted by continuous second spatial derivatives. The rowwise divergence convention gives positive integral R:grad(bar u) in the mean balance. The memberwise total balance has only negative viscous dissipation. Zero weighted gradient fluctuation removes the gradient cross terms; subtracting the mean balance gives the negative transfer term in the fluctuation balance. Both derivative right sides are continuous, so the fundamental theorem of calculus yields both endpoint identities and their transfer cancellation.

Checked N=1, zero weights, nu=0, zero/singular covariance, constant opposite members, compact endpoints strictly inside I, absence of an iff claim and absence of choice use. None defeats the written claim. No sign restriction on transfer, solution-existence claim, observed measurement or physical applicability is asserted. The complete specific `risk_review` is stored in the owning proof contract. No item decision is added for this risk-only obligation.

## Sources, evidence and boundaries

The scope, generated order, reader report, empty `reader-findings-1.json`, and `refute-1.json` (all scoped carriers opened, no flagged or unopened carriers) were read. There are no reader/refuter finding decisions or page decisions owed. Both pages retain empty Markdown bodies and `page_layout: compact-v1`. No scoped item contains TikZ/tikzcd; these algebraic identities need no added diagram. All four items are draft mathematics with exclusively mathematical prerequisites, and their proofs do not use empirical premises.

Independently retrieved [MIT OCW Chapter 3](https://ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf), section 3.2 (printed p. 5, covariance equation 3.14), sections 3.6-3.7 (printed pp. 8-10, decomposition and Reynolds equation), and [Eyink Chapter VIb](https://www.ams.jhu.edu/~eyink/Turbulence/notes/ChapterVIb.pdf), section B, printed pp. 17-19 (Reynolds averaging and energy balances). These are contextual statistical analogues; no external existence or ergodic theorem is a premise. The finite deterministic arguments were checked locally. Source reading is limited to these relevant sections; no whole-book review is claimed.

The owned cross-batch dependency input is already an empty array, correctly reflecting no item or page cross-batch edge; it requires no edit or unified-ledger refresh. No imported or published carrier was changed, and no published defect or outside affected consumer was identified. There is no escalation or unresolved scientific uncertainty in this batch review.

## Local checks

All checks below were actually executed from the physics workspace:

- `node tools/physics-support/risk-report.mjs research/fluid-dynamics-all-47-2026-10-23-batch-1.proof-contracts.json`, then the same command with `--require-reviewed`: both exit 0, four items routed, zero errors; one HIGH and no CRITICAL item.
- `node tools/physics-support/proof-contract.mjs research/fluid-dynamics-all-47-2026-10-23-batch-1.proof-contracts.json --strict`: exit 0, four of four checked, zero errors and warnings.
- `node tools/physics-support/rendercheck.mjs` with the explicit four batch-1 item paths and two page paths: exit 0, six files parse under the renderer and KaTeX.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` with the explicit four item paths: exit 0, three proof-bearing items checked and all pass.
- `node tools/physics-support/proof-layout.mjs` with the explicit four item paths, after metadata edits: exit 0, four items, eleven steps, zero defects. No item source was edited in this adjudication.
- A read-only SHA256 comparison verifies that all four current raw item hashes still equal their immutable post-reader fingerprints. A structural JSON check verifies exactly one decision with the required group and obligation.
- `node tools/physics-support/defect-ledger.mjs append --file /tmp/fluid-batch-1-defect-row.json`: exit 0, one row appended with the tool's serialized append and generated-view refresh.

One preliminary checker-discovery invocation used the nonexistent plural filename `proof-contracts.mjs`; it failed with MODULE_NOT_FOUND. The actual singular `proof-contract.mjs` command above then passed. This was an operational lookup error, not a content defect or gate failure. The unavailable `python` alias was likewise replaced by `python3` for read-only hash verification; no content action depended on the failed invocation.

No judge, stamp, dispatch, engine gate or publication action was taken. No blocker remains within this batch dispatch; engine-owned hashing and gate work remain outside this handoff.
