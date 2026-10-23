# Batch 31 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; group: `batch-31`.

Scope: exactly `reader:31:1`, a published-dependency finding, and two risk reviews. Reader pre/post item, contract and page fingerprints agree; no touched/page obligation or refuter finding is owed. No item or page edit.

## Completed level 4 review

`post-fd-ideal-gas-numerical-model`: read its complete formulation and five direct prerequisites. Differentiation gives T=e/c_v>0 and p=(gamma-1)e/v=R rho T; the fixed-entropy derivative is gamma p/rho. The energy reference, tension-positive stress, distributional initial terms, integrability through t=0 and separately adopted entropy inequality are consistent. No empirical premise or existence/uniqueness conclusion. Complete risk review recorded in the owning contract. No diagram in this carrier; the contextual shared-face diagram agrees with the update signs and face indices.

Sources opened: [Powers, Gas Dynamics](https://www.perplex.ethz.ch/thermo_course/various_thermodynamics_texts/Powers%20Lecture%20notes%20in%20Gasdynamics.pdf), §§2.3.3.4–2.3.4 and §§2.4.6–2.4.7.2 (2.73, 2.81, 2.118; printed pp. 26–27, 36–37); [Tong, Part III](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf), §4.4.2 thermodynamic passage, pp. 146–147. These support constitutive conventions; weak inequalities remain adopted premises. Relevant passages only, not full-book rereading.

Level 4 review complete before the level 5 disposition below.

## Completed level 5 review

`pthm-fd-conditional-positive-euler-update`: both steps are valid. The logarithm has positive dimensionless argument; substitution recovers the adopted energy and pressure. The local proposition matches every facewise speed, CFL, indexing and update hypothesis. Independently checked the published split-state calculation: with x=1+delta u, x>=c/a>0 and the relative internal-energy subtraction is at most (gamma-1)/(2 gamma)<1. Convexity follows by weighted Cauchy–Schwarz. The HLL middle state averages two positive split states; each half-cell average has nonnegative weights under the inclusive CFL bound. Their half-sum is the stated update. Thus strict positivity holds at speed/CFL equality and at zero time step. N=2 works; empty/N=1 cases are excluded. No choice is used. The complete risk review is in the contract.

Additional contextual sources inspected: [Zhang–Shu, §2, Remark 2.4, PDF pp. 7–8](https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf), LF split-state/convex-combination argument; [Clawpack Euler approximate solvers, HLLE section](https://www.clawpack.org/riemann_book/html/Euler_approximate.html), two-wave middle-state context. The exact facewise theorem is justified by the local supplier chain, rather than attributing that exact statement to these sources. No full-source reading is claimed.

The uniform example has equal states, hence each face flux is F(U) and every flux difference is zero. It is a symbolic example with no measurement claim. Both pages are frontmatter only, retain compact-v1, and match the declared inventory. Assigned statements have no hyperlinks; references follow complete sections. Assigned carriers have no diagrams and need none for the proofs. The only opened contextual TikZ diagram, the shared-face schematic, is correct.

## Routed finding

`reader:31:1` / `thm-hll-flux-is-consistent-and-conservative`: **confirmed_nonfatal**. Its complete current Statement never binds n as the periodic array length, yet includes “Here n>=1.” The proof uses only explicit middle-state algebra, equal-state cancellation and periodic shared-flux cancellation. The dangling symbol is not a hypothesis used by the consuming positivity proof. Current raw source SHA256: `438b33f43a1cecbb0bd8431e8606f6d7fd496c5ec1af83de0062b75fe91f9083`. Preserve the routed observed/pre fingerprints in the decision; raw source and composite routed hashes are distinct fields.

Dependency path: `pthm-fd-conditional-positive-euler-update` → `prop-fd-euler-llf-admissibility-interface` → `thm-pe03-ideal-gas-llf-branch-preserves-positivity` → `lem-pe03-hll-half-cell-riemann-averages` → `thm-hll-flux-is-consistent-and-conservative`. Read the current published carrier and both direct dependencies. Its intermediate-state/model-flux balances and consistency/conservation proof are valid independently of the fragment. Published/imported content remains read-only. Remove the fragment or explicitly index a nonempty finite periodic array by Z/nZ under mathematics-owner maintenance. The scoped finding closes as nonfatal-recorded; actual published repair remains OPEN in the published ledger. This is not a completed source repair.

## Final checks and handoff

Ran `node tools/physics-support/risk-report.mjs research/fluid-dynamics-all-47-2026-10-23-batch-31.proof-contracts.json` before recording reviews: HIGH 6 postulate, HIGH 7 theorem, MODERATE 4 example, zero errors. Reran the same command with `--require-reviewed` after both reviews: zero errors, three items routed. Contract changes are audit enrichment only; no item/manifest/provenance changes or repair confidence claim is needed.

Verified all three current raw item hashes equal both pre/post reader snapshots. Validated the decisions JSON has exactly the one owed obligation, correct batch-31 group, and exactly one matching nonfatal-recorded defect row. Both assigned pages retain exact pre/post raw hashes. The published-ledger update was serialized with the required exclusive lock, reread/merged while held, then released. The frontier ledger records the owned consumer disposition and preserves IDs and outside ownership.

No item was edited, so the mandatory post-edit proof-layout/precheck commands have no changed item paths. No judge, stamp, full gate battery, publication, commit or dispatch was run. No unresolved scientific blocker in batch 31. Published HLL editorial maintenance remains OPEN for its owner; the scoped finding is closed as nonfatal-recorded. Engine hashing and gates remain pending.
