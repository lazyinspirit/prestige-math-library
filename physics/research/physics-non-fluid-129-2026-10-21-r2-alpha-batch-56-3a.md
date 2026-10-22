# Batch 56 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-56`; role: alpha.

## Algorithm checkpoint

Reviewed the current algorithm and its finite-dimensional spectral supplier, the reader/refuter findings, pre/post snapshots, and the actual consumer search in items/ and library/. All six current item raw hashes matched identical pre/post snapshots before repair; the reader made no carrier edits. There are exactly six finding obligations, no touched or page obligations.

`reader:56:1` and `refuter:56:1`: confirmed_fatal under the explicit-definition rule. The Definition now states conjugate linearity in the second argument, Hermitian symmetry, and real diagonal values. This fixes the convention needed by the semibound and Hermitian matrix construction.

`reader:56:2` and `refuter:56:2`: confirmed_fatal under the algorithm schema. Removed the unsupported post-procedure correctness sentence. The exact generalized eigenvalue and Gram-orthonormality calculation will be supplied in the existing consumer theorem, not presumed as a definition. The procedure and its admissible inputs are retained. Completion of this repair awaits that theorem proof below.

Consumer search: the only item consumer of the algorithm is `thm-nrqmx-ritz-upper-bounds` in this batch. Its q_A is explicitly Hermitian by its inner-product formula. The A page merely lists the algorithm. No outside consumer repair is indicated. Algorithm manifest formulation updated; mathematical provenance and the exact-entry/no numerical-enclosure qualifications retained. No diagram is needed for the finite matrix construction.

Next: finish level-zero residual risk reviews, then complete the existing Ritz theorem matrix derivation and its contract, then review the oscillator consumer and run focused local checks.

## Level-zero risk reviews completed

`thm-nrqmx-schrodinger-residual-bound`: Independently checked steps 1.1–2.1 against the current unitary-generation lemma, Stone theorem, spectral/Borel domains, Banach-valued FTC (Countable Choice, compact nondegenerate intervals), and Bochner norm inequality. Difference quotient splits using the group law with v(s) fixed in D(T); the other term converges by unitarity and strong continuity. Continuous v prime and Tv make w prime continuous. Sign is -i/hbar times the interaction-picture residual. Forward/backward integrals use correct orientation; t=t0 is the zero identity without invoking FTC on a degenerate interval. Zero residual gives exact propagation and no approximation or empirical claim. Reader/refuter reported no defect here; none found.

`thm-nrqmx-spectral-residual-certificate`: Independently checked steps 1.1–3.1 against current unbounded PVM norm identity, finite positive scalar-measure lemma (Countable Choice), spectral theorem (Choice), and Borel spectrum/support clause. Normalization gives total mass one; support and unit mass ensure nonempty spectrum. u in D(T) makes the shifted residual square integrable. Integrating the squared distance yields the first bound, and integrating on the spectral complement of a Borel Delta yields the second. Strict g>0 licenses division; equality at the gap endpoint is permitted. Empty complement gives zero projection; zero residual need not select a ground-state index. Scalar and repeated-eigenvalue cases satisfy the same measure argument. Reader/refuter reported no defect here; none found.

Sources opened: current items for all directly cited suppliers, using their Statement/Definition sections; also the spectral-support proof of `thm-unbounded-borel-functional-calculus`. The risk report run without `--require-reviewed` classified these three theorems CRITICAL and the oscillator example HIGH. No mathematical uncertainty requiring a web source arose. Book source locators are retained context, not a claim of new full-text retrieval.

## Ritz theorem and algorithm repair completed

`reader:56:3` and `refuter:56:3`: confirmed_nonfatal. F6 now records the procedure, without assuming its correctness. Proof 1.1 explicitly proves positive Gram normalization, both returned-vector identities and the inverse transformation from the generalized problem to B. The same paragraph then proves the variational identification by the dimension-intersection argument. This completes the relocated correctness argument requested by findings 2, in a separate existing theorem with the algorithm in its deps; no new lemma or prerequisite edge is needed. All three repairs have confidence 1.

The operator A and its finite form matrix M are now distinct symbols. Hermitian symmetry and graph-norm completeness verify the algorithm's exact inputs. The remaining proof is unchanged: subfamily restriction gives the upper bound; form-density supplies simultaneous independent eigenvector approximants and uniform quotient convergence, including negative eigenvalues and multiplicities. The strict lambda_k<alpha excludes missing finite-dimensional eigenvalues and the essential threshold. Contract F6 quotation, F3 uses and derivation 1.1 match the repaired text. The theorem Statement is unchanged, so interface propagation stops here; the oscillator example is independently reviewed below under its risk obligation.

## Oscillator risk review completed

Independently checked all three proof steps and cited current coefficient-domain oscillator realization Statement (a)–(d). Positive real hbar and omega give strict ordering; finite Hermite combinations lie in D(Hosc), hence in the square-root form domain by x<=1+x squared. The Borel product domain gives S squared=Hosc, and self-adjointness transfers S between the two inner-product slots. Thus Gram=I and M=diag(E0,...,E[n-1]); the repaired Ritz theorem proof 1.1 identifies these with the variational values. Direct eigenvector substitution yields exactly zero continuum residuals, including n=1. Completeness is supplied by the exact realization, not presumed from formal ladder operations. AC/CC are explicit; no measurements, physical parameter identification, approximate quadrature, or numerical-solver error bound are claimed. Reader/refuter reported no defect here; none found.

No diagrams occur in the owned items/pages and none is needed for these spectral and norm arguments. No published supplier defect was found. No published content or imported snapshot was edited.

## Decisions and closed defects

- `reader:56:1` / `refuter:56:1`: confirmed_fatal; closed fixed ledger row `physics-non-fluid-129-2026-10-21-r2-3a-batch-56-hermitian-form-convention`; repair_confidence 1. The complex form convention was not explicit. Definition now states conjugate linearity, q(u,v)=conjugate(q(v,u)) for all u,v in Q, and real diagonal values. The matrix and lower-bound conventions are thereby defined; the only direct consumer has the required Hermitian q_A.
- `reader:56:2` / `refuter:56:2`: confirmed_fatal; closed fixed ledger row `physics-non-fluid-129-2026-10-21-r2-3a-batch-56-algorithm-correctness-placement`; repair_confidence 1. Removed the unproved correctness assertion from the algorithm Definition. The separate existing Ritz theorem proof 1.1, which depends on the algorithm, now derives Mc_j=rho_j Gc_j and c_j*Gc_l=delta_jl explicitly from B y_j=rho_j y_j and c_j=G^(-1/2)y_j, with the inverse generalized-eigenvalue transformation. Procedure, exact inputs and numerical limitations retained.
- `reader:56:3` / `refuter:56:3`: confirmed_nonfatal; closed fixed ledger row `physics-non-fluid-129-2026-10-21-r2-3a-batch-56-ritz-gram-normalization-gap`; repair_confidence 1. The original short matrix derivation was missing. F6 now states only procedure instructions, and proof 1.1 establishes positive Gram normalization, generalized eigenvector equations, orthonormal trial-space vectors and the dimension-intersection min–max identity. The omitted algebra was immediate and the Statement is unchanged.

Exactly six decisions are present. Matching reader/refuter observations share one row for each underlying defect. Immutable reports, scopes and snapshots remain untouched. No escalation or outside repair is pending.

## Dependency and source limits

Current direct supplier Statements/Definitions were checked for exact hypotheses and uses, including AC/CC, spectral/Borel domains, scalar PVM norm identities, the finite spectral theorem, Cauchy–Schwarz, Banach FTC/norm inequality and the coefficient-domain oscillator realization. The Borel support argument (proof 6.1) and current form-min–max complete proof were inspected. This does not re-prove the entire published transitive supplier graph or attest new retrieval of cited textbooks. Cross-batch rows retain planned page context and current min–max use; two stale representation-theorem use rows are marked removed because the actual owned proofs now supply their own spectral/form identities. The frontier ledger refresh completed successfully.

## Final local checks and handoff

All commands below exited 0:

- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-56.proof-contracts.json` — three CRITICAL theorems, one HIGH example, one MODERATE counterexample; no errors. After the item-specific Alpha reviews, the same command with `--require-reviewed` passed.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/alg-nrqmx-rayleigh-ritz-procedure.md items/thm-nrqmx-ritz-upper-bounds.md` — both unchanged by reflow.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/alg-nrqmx-rayleigh-ritz-procedure.md items/thm-nrqmx-ritz-upper-bounds.md` — one proof checked, zero failing; algorithm has no proof body.
- `node tools/physics-support/rendercheck.mjs items/alg-nrqmx-rayleigh-ritz-procedure.md items/thm-nrqmx-ritz-upper-bounds.md` — two files pass YAML and real KaTeX parsing.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-56.proof-contracts.json --strict` — 5/5 contracts, zero errors or warnings.
- `node tools/physics-support/proof-layout.mjs items/alg-nrqmx-rayleigh-ritz-procedure.md items/thm-nrqmx-ritz-upper-bounds.md` — two items, seven proof steps, zero defects. Run once after final item edits and reflow.
- Exact JSON obligation coverage and fixed-ledger-reference checks — six unique decisions, exactly the six routed reader/refuter obligations, each referencing its closed row.

Only two item carriers changed. All four required risk reviews, the algorithm manifest convention, the Ritz contract derivation and source quotation, the owned dependency input and the frontier notes are current. No prior judge record was present in either edited item. No pending scientific blocker, outside affected consumer, withdrawal or published finding remains from this dispatch. Decision stamping, independent judgment and the engine gate battery were not run by this worker and remain engine responsibilities.
