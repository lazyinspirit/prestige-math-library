# Step 3a adjudication — batch 2

Run: `inverse-problems-knot-theory-all-109-2026-10-19`. Group: `batch-2`.

The scope and generated order owe no carrier, page, reader, refuter or foreign-gate decisions: touched and finding arrays are empty. Pre/post item, contract and page fingerprints agree. Five CRITICAL risk reviews remain independently required.

## Completed review in dependency order

### def-ip-unbounded-hilbert-moore-penrose-inverse (level 0)

Reviewed Definition and steps 1.1–4.1 against current bounded-operator, inner-product, orthogonality, metric-closure, Pythagoras and orthogonal-decomposition suppliers. The kernel contains zero; its closure argument is pointwise in epsilon and requires no uncountable simultaneous selection. Countable Choice is explicitly assumed for projection in step 2.1. The restriction is onto R(K), injective on N(K)^perp, and Pythagoras gives the unique minimum-norm preimage. The algebraic domain R(K) plus R(K)^perp is direct without assuming closed range or all-data solvability; K=0 and zero-dimensional spaces are valid. Linear extension and annihilation of R(K)^perp follow by uniqueness. Clason arXiv:2001.00617v2, Theorem 3.3, printed p.17 (PDF p.19), statement and proof read; real-source convention is extended locally using conjugate-symmetric Pythagoras. Reader/refuter findings empty. No diagram or defect; no edit needed.

Current dependencies: `def-bounded-linear-operator`, `def-countable-choice`, `def-hilbert-space`, `def-real-and-complex-inner-product-space`, `def-orthogonality-and-orthogonal-complement`, `lem-pythagorean-theorem-and-finite-orthogonal-sums`, `thm-metric-closure-characterisation`, `thm-orthogonal-decomposition-by-a-closed-subspace`. Contextual finite-matrix definition also checked. Statement is uninterrupted with separate references.

### thm-ip-closed-range-pseudoinverse-stability (level 2)

Independently checked all four proof steps and all thirteen declared supplier statements, including the complete SVD proof and its singular-value definition for s_j tending to zero. For finite positive rank the displayed inverse is the unique N(K)^perp preimage, Bessel and Pythagoras give the 1/s_r bound; rank zero is handled before division. For infinite rank, least-index recursion (encoded on pairs (k,n) under the autonomous recursion theorem) gives n_k strictly increasing with s_nk<2^-k without dependent choice. The geometric tail bound is 4^-N/3, completeness gives y, and continuous coordinate evaluation plus the adjoint identity forces infinitely many coefficients equal to one if y were in the range, contradicting finite Bessel and the Archimedean reciprocal. The same vectors give unbounded inverse ratios. The exhaustive finite/infinite alternative proves both iff directions. Countable Choice is inherited by SVD and the pseudoinverse; real and complex conventions agree. Clason Theorem 3.7/Corollary 3.8 statements and proofs read (printed pp.20–21); local proof avoids the closed graph theorem. Empty findings; no defect, diagram or repair.

Also checked `def-ip-compact-linear-inverse-model` against `def-ip-forward-map-and-solution-classes`: U=X contains zero, and neither model assumes solvability for every datum. Inspected the SVD transitive singular-value and spectral statements for the null-sequence claim. All defining/statement sections in the batch read so far are uninterrupted.

### thm-ip-picard-range-criterion-for-compact-operators (level 2)

Reviewed Statement, all five proof steps, the singular-system diagram and all fourteen prerequisite statements, with the full current SVD, kernel/range and Fourier arguments. Necessity uses the linear-first adjoint identity (s_j positive real) and finite Bessel; sufficiency uses the exact squared coefficient tails and Hilbert completeness, then boundedness of K and Fourier expansion in closure R(K). N(K)^perp is closed, so the norm limit stays there and is the minimum-norm preimage. For arbitrary data the projection is onto closure R(K), never the possibly nonclosed algebraic range; its coefficients coincide with those of y. This proves both domain-inclusion directions, while exact solvability separately requires zero left-null component. Empty J gives K=0, domain Y, inverse zero and exact solvability only at y=0; finite J uses finite sums without zero denominators. Countable Choice is stated for SVD, Fourier and projection. Diagram arrows have matching types F,F,X,Y and both paths send lambda to lambda*s_j*u_j; no proof uses it. Clason Theorem 3.10 complete proof (printed pp.23–24), Scherzer–Mindrinos 6.6–6.7 statements (printed pp.86–87), and Kaarnioja PDF pp.10–12 theorem/proof read. The latter uses separable real spaces and writes Ran(A) as projection target; local closure projection avoids that source imprecision and handles complex/nonseparable spaces through local suppliers. Reader/refuter findings empty; no defect or repair.

### cex-ip-picard-orthogonality-clause-essential (level 2)

Checked the full Statement refuted and steps 1.1, 1.2, 2.1 against all five exact suppliers. Coordinatewise real completeness makes R and R^2 Hilbert without choice; K is an isometry onto the explicitly ordered rank-one range, so finite-rank compactness applies. The displayed K* satisfies the adjoint identity directly and has kernel the vertical axis; the only positive singular value is one with complete input/range unit vectors. For y=(0,1), the Picard sum is zero while the second coordinate excludes membership in R(K). The datum is nonzero in N(K*), hence fails orthogonality to that kernel by positive definiteness. This proves exactly the claimed counterexample and does not confuse the pseudoinverse domain with exact range. Scherzer–Mindrinos 6.7 (printed p.87) and Kaarnioja PDF pp.10–12 read as criterion context, not as sources of the authored coordinate computation. No division by zero, selection, missing diagram or defect; findings empty and no repair.

The complete counterexample description is uninterrupted and the references follow separately.

### ex-ip-dense-nonclosed-diagonal-range (level 3)

Read the complete Example and all four proof steps against all twelve exact dependency statements. K is defined on every ell^2 vector by the norm bound. Each K_N has the explicit ordered basis e_0,...,e_N and norm error exactly 1/(N+2), attained at e_(N+1); its codomain is Banach and Countable Choice is explicitly carried for norm-limit compactness and adjoints. Finitely supported preimages are in ell^2 and finite tail-control sets lie in an initial segment (take N=0 for the empty set), proving density. The p=2 series makes y square summable, but its only possible preimage is the constant-one sequence, whose finite square sums are unbounded by the exact Archimedean reciprocal statement. Coordinate truncation proves completeness of the singular family, the adjoint identity gives K*=K and both kernels vanish. Positive indexing j=n+1 yields s_j=1/j, no zero denominator and each Picard summand exactly one; divergence matches the already reviewed criterion. Clason 3.9–3.10 statements/proofs and Kaarnioja PDF pp.10–12 provide context only; the diagonal estimates are checked locally. No diagram required, findings empty, no defect or repair.

The Example is uninterrupted with separate references. No unresolved mathematical obligation remains.

## Sources and reading limits

- [Clason, arXiv:2001.00617v2](https://arxiv.org/pdf/2001.00617): §3.1 Theorem 3.3 (printed p.17), Theorem 3.7 and Corollary 3.8 (pp.20–21), §3.2 Theorems 3.9–3.10 (pp.21–24), including their relevant complete proofs. The source initially restricts to real scalars; the local proofs and exact local real/complex suppliers justify the wider scalar scope. No external result replaces a local argument.
- [Scherzer–Mindrinos lecture notes](https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf): Definition 6.5 and Theorems 6.6–6.7, printed pp.86–87 (zero-based PDF pages 85–86). These pages give statement-level singular-system and orthogonality/series evidence; no claim to a source proof of 6.7 is made.
- [Kaarnioja, Fourth Lecture](https://vkaarnioja.github.io/ip23/week4.pdf): PDF pp.10–12, solvability theorem, proof and projected-equation discussion; separable real Hilbert setting. The projection target notation in the slides is read with the closure qualification required by the actual Fourier series. The local item explicitly supplies that qualification.

Only the named source sections were read, not whole texts. Local supplier statements were checked against the actual uses; complete SVD, orthogonal-decomposition, finite Bessel, Pythagoras, metric-closure, Fourier and kernel/range arguments were also inspected. This is no whole-library or transitive published-supplier audit. The failed local text-extraction attempt (`pdftotext` unavailable) supplied no evidence; the source passages were read through the web PDF extraction.

## Pages, scope, and consumer disposition

Both batch pages were inspected and match their manifest inventories and order. They remain draft, frontmatter-only and `page_layout: compact-v1`. No page decision is owed. All six current item carriers and both pages match their frozen pre/post raw SHA256 fingerprints; all frozen item, contract and manifest pre/post fingerprints agree. Only five `risk_review` mappings were added to the task-named dot-style contract. No item, statement, definition, proof, diagram, page, manifest or provenance was changed, so no supplier-interface propagation or repair acceptance is claimed. The companion hyphen-style historical contracts were not edited.

Owned consumer interfaces remain sound: the two theorems consume the compact model and Hilbert inverse under explicit Countable Choice; the rank-one counterexample uses only its concrete compact model and finite coordinate prerequisites; the diagonal example satisfies the full corrected Picard hypotheses. The model consumes batch 1's current forward-map interface with nonempty U=X. The frontier dependency ledger records this review. No withdrawal, new helper, outside-scope repair, defective published supplier, or published-ledger update was needed.

## Checks and outcome

- Initial `node tools/risk-report.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-2.proof-contracts.json`: exit 0; five CRITICAL items and one ORDINARY item, 0 errors.
- After sequential completion of all five risk reviews, the same command with `--require-reviewed`: exit 0; 0 errors, 6 items routed.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-2.proof-contracts.json --strict`: exit 0; 0 errors, 0 warnings, 6/6 items checked. Citation quotations, uses, derivations and boundary worksheets were compared with the current arguments; no mathematical mismatch found.
- Direct SHA256 comparison: all six current item files and both current page files equal frozen pre/post source fingerprints.
- Native status recomputation against `.autopilot/inverse-problems-knot-theory-all-109-2026-10-19` succeeded and reported the run at Step 3a; Git HEAD observed as `ace06e03bc`. No historical resume handoff was used as authority.

No item was edited, so reflow, precheck and proof-layout on changed items are not applicable. No gate battery, judging, stamping, certification, commit, scheduling or stage transition was initiated. No confirmed defect means no defect-ledger row. The decisions companion has exactly `decisions: []`. No blocker remains in this dispatch; engine collection and gates remain owed.
