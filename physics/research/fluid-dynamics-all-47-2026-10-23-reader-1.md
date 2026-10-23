# Step 3a reader report — batch 1

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: independent reader (`reader-1`)  
Scope: batch `1` only

## Opened inventory

- Assignment: `research/fluid-dynamics-all-47-2026-10-23-batch-1.pages.json`.
- Role instructions: `briefs/reader.md`; workspace instructions and content rules: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, and `../PHYSICS-CONTENT-MODEL.md`.
- Batch evidence inspected as context, not as verdict: `research/fluid-dynamics-all-47-2026-10-23-batch-1.proof-contracts.json`, `research/fluid-dynamics-all-47-2026-10-23-batch-1.notes.md`, `research/fluid-dynamics-all-47-2026-10-23-batch-1.coverage.json`, and `research/fluid-dynamics-all-47-2026-10-23-batch-1.cross-batch-dependencies.json` (empty array).
- Pages opened:
  - `library/fluid-dynamics-mathematics/fd-c01.md` (`fd-c01`, draft A page, mathematics). Its inventory is the finite-ensemble definition and two theorems. The body is empty and `page_layout: compact-v1` is retained.
  - `library/fluid-dynamics-mathematics/fd-c01-examples.md` (`fd-c01-examples`, draft B page, mathematics). Its inventory is the assigned counterexample and its prerequisite is `fd-c01`. The body is empty and `page_layout: compact-v1` is retained.
- Items opened in dependency order:
  1. `items/def-fdmath-finite-ensemble-and-covariance.md` — definition, no dependencies.
  2. `items/thm-fdmath-finite-reynolds-identity.md` — theorem, depends on the definition.
  3. `items/thm-fdmath-mean-fluctuation-energy-transfer.md` — theorem, depends on the finite Reynolds identity.
  4. `items/cex-fdmath-mean-does-not-determine-covariance.md` — counterexample, depends on the finite Reynolds identity.

No TikZ/tikzcd diagrams occur in the assigned items. The claims are mathematical identities and a mathematical counterexample; no empirical result or statistical inference is asserted.

## Independent review and repair

The finite-ensemble definition correctly fixes nonnegative normalized weights, means, fluctuations, and the outer-product covariance, without imposing a probability or sampling interpretation. I repaired one typing omission: the original Definition used `m` and `n` in `R^m` and `R^n` without declaring their range, and its pointwise function version did not name the common domain. The revised Definition declares integers `m,n >= 1`, places the tuples in `(R^m)^N` and `(R^n)^N`, and states the pointwise version for functions on a set `D` using the same fixed weights. This makes the existing intended domain explicit.

I checked the definition's complete current dependency closure after that clarification. The direct consumer `thm-fdmath-finite-reynolds-identity` uses the same convention with positive integer dimension `d`; its direct consumers `thm-fdmath-mean-fluctuation-energy-transfer` and `cex-fdmath-mean-does-not-determine-covariance` were also reviewed. The periodic consumers use periodic lifts on `R^d`, which satisfy the finite Reynolds theorem's open-domain hypotheses with `Omega = R^d`. A search of current items and current run batch manifests found no additional use of the definition ID. No consumer repair was needed.

The finite Reynolds theorem's finite-sum centering, product/covariance decomposition, averaged equation, positive-semidefinite covariance, and energy split follow from its stated fixed weights and regularity. Its argument uses pointwise algebra and linearity; it makes no existence or physical-applicability claim.

The mean/fluctuation energy theorem's mean balance has the stated positive covariance-work sign after periodic integration by parts. The memberwise total-energy identity has vanishing periodic flux integrals and the nonpositive viscous term. The zero weighted fluctuation gradient then yields the opposite transfer sign in the fluctuation balance; the time-integrated identities follow by the fundamental theorem of calculus. The regularity and periodicity hypotheses support the differentiations and integrations used.

The counterexample's two-member constant fields satisfy the unforced equation for every stated `nu`, are divergence-free and periodic, and have equal zero mean velocity and pressure. Their covariance tensors are respectively zero and `w ⊗ w`, which is nonzero for `w != 0`. The conclusion is properly limited to universal determination from the means; it does not reject restricted closure relations.

The contracts' supplier excerpts and proof-step mappings match the reviewed arguments. I updated the definition contract's finite-check disposition to record the now-explicit positive integer dimensions. The referenced sources were opened: MIT OCW Chapter 3 §3.2 defines covariance through joint statistical moments, while §§3.6–3.7 discuss closure and averaged Reynolds equations; Eyink Chapter VIb §(B), printed pp. 17–19, treats statistical Reynolds averaging and mean/fluctuation energy balances. These sources provide contextual analogues, not proofs of the finite deterministic identities; the local proofs correctly supply those arguments. The cited locations are accurate, and no cited result is silently used as an unstated premise.

Required repair checks on the changed definition:

- Reflow: `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/def-fdmath-finite-ensemble-and-covariance.md` — unchanged.
- Precheck: `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-fdmath-finite-ensemble-and-covariance.md` — 0 proof-bearing items checked, 0 failing.
- Final proof-layout: `node tools/physics-support/proof-layout.mjs items/def-fdmath-finite-ensemble-and-covariance.md` — 1 item, 0 steps, 0 defects.

## Page verdicts

- `fd-c01`: pass. Page identity, draft status, mathematics classification, item inventory, empty body, and compact layout are consistent with the assigned items. No page prose repair is applicable.
- `fd-c01-examples`: pass. Page identity, draft status, mathematics classification, counterexample inventory, prerequisite to `fd-c01`, empty body, and compact layout are consistent. No page prose repair is applicable.

## Uneditable defects and blockers

No confirmed defect remains outside this reader's write scope. No batch-1 blocker was identified. I did not audit other batches or determine the current run-wide gate state.

## Sources inspected

- Glenn Flierl and Raffaele Ferrari, MIT OpenCourseWare 12.820, *Turbulence in the Ocean and Atmosphere*, Chapter 3, §§3.2, 3.6–3.7: <https://ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf>.
- Gregory L. Eyink, Johns Hopkins University, *Turbulence Notes*, Chapter VIb §(B), printed pp. 17–19: <https://www.ams.jhu.edu/~eyink/Turbulence/notes/ChapterVIb.pdf>.
