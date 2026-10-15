# Step 3a adjudication: batch 45

Run: `statistical-models-experiments-62`. Group: `batch-45`; original scope group `o` remains unchanged.

The scope contains no touched items, touched pages, reader findings or refuter findings. No decisions are owed; the decisions file will contain an empty array. Pre/post snapshots agree for all six items and both pages. No reader repair is present to accept, amend or revert.

Initial risk-report exited 0: five required HIGH/CRITICAL reviews and one MODERATE covariance lemma. Review follows the generated dependency order.

## Completed review: field definition (level 1)

Reviewed the complete Definition and all six direct supplier definitions. Coordinate measurability is separate from joint measurability; strict invariance is finite-tuple invariance with admissible shifts; wide stationarity requires L2 levels and constant mean on T, with covariance on T-T. Intrinsic order-two stationarity requires only finite increment moments and permits nonzero displacement-dependent means. Empty T has vacuous coordinate and tuple conditions and empty displacement functions; a singleton has only displacement zero; zero and constant fields satisfy the clauses. No equivalence or path regularity is claimed and no choice is used. Independently read Spodarev 2024 PDF pp.4-5 (Definitions 1.1-1.3, Remark 1.4 and increment convention), Spodarev 2009 PDF p.19 (Definitions 1.4.1-1.4.3, narrower zero increment mean), and Bierme 2016 PDF pp.4-5 (coordinate random variables and finite laws). The current convention is coherent; no defect found. Reader/refuter findings are empty.

No content repair, defect row, or consumer repair is required. Next: Gaussian existence, then intrinsic variogram, then Bochner representation and example.

## Completed review: Gaussian existence (level 2)

Read every proof step (1.1, 1.2, 2.1, 3.1, 4.1) and the exact direct prerequisite interfaces, including the current Gaussian-law/characteristic-function proofs and Kolmogorov extension proof. PSD finite submatrices admit singular Gaussian laws. Relabelling permutations preserve their laws; zero-padding coefficients proves all restriction marginals, including empty supports. Rational intervals give a countable base; compact intervals and the real metric establish LCH, so the standard-Borel supplier applies under AC. Kolmogorov extension supplies existence and uniqueness only on the cylinder sigma-algebra. Coordinate laws give the prescribed moments; collecting coefficients at repeated sites establishes the Gaussian definition. Checked empty T, singleton T, K=0, singular K, zero coefficients and repeated sites. AC covers simultaneous enumerations and the Gaussian/extension suppliers; no extra DC hypothesis is needed (AC already supplies sequential choices inside suppliers). No topology on T or regularity of m/K is required; no path or joint measurability claim occurs. Source context checked: Spodarev 2024 Definition 1.8, PDF p.7; Bierme 2016 Gaussian definition and Kolmogorov statement, PDF p.7. Current proof and contract are sound; reader/refuter findings are empty.

No repair required. Next: intrinsic variogram.

## Completed review: intrinsic variogram (level 2)

Independently checked all three proof steps and exact moment/covariance suppliers. Step 1.1 uses the additional L2-level and constant-mean hypotheses only for gamma=C(0)-C(h), with symmetry making C even. Steps 1.2-2.1 use L2 increments Y_i=X(s_i)-X(0), never integrability of X(0) or levels. The inequality 2|Y_iY_j|<=Y_i^2+Y_j^2 makes all expansion terms integrable; the zero-sum condition cancels both diagonal-square sums and leaves -E[(sum a_iY_i)^2]. Nonzero increment means do not alter that identity. Checked h=0, n=1, zero coefficients, repeated sites, deterministic increments and vanishing increments. Fixed basepoint 0 lies in R^d; no selection or choice is used. Only real coefficients are claimed and no converse is asserted. Read Spodarev 2009 Proposition 2.2.1(3)-(4) and proof, PDF pp.43-44: its printed unconjugated complex-weight formulation is not used; the item proves the sound real version directly. Bierme 2016 PDF pp.19-20 states the real negative-type convention, with a different variogram normalization. Spodarev 2024 PDF p.5 supplies the raw increment convention. No defect found; reader/refuter findings empty.

No repair required. Next: covariance lemma as Bochner prerequisite, then Bochner representation.

## Completed review: Bochner representation (level 3)

Reviewed every proof step and all eight direct prerequisite interfaces, including the covariance lemma and current LCA Bochner proof. The covariance lemma proves positivity by Var(sum a_i X(s_i)) with an explicit L2 bound and covariance bilinearity. Wide stationarity and symmetry make C even; hence C(h_i-h_j) is the real covariance matrix. For z=u+iv, symmetry cancels imaginary cross terms and leaves two nonnegative real forms, exactly matching the conjugated complex positive-definite definition (including empty form zero). The assumed continuity and usual LCH abelian topology give every Bochner hypothesis. Its exact character-phase representation, uniqueness, finite positive Radon conclusion and mass C(0) match this item. AC+DC are expressly inherited from that supplier. Checked d=1, repeated sites, zero coefficients, zero covariance/zero mass and constant positive covariance (an atom at the trivial character); neither a density nor path/joint regularity follows or is asserted. Read Spodarev 2024 Section 1.2 PDF p.5; located Spodarev 2009 Theorem 2.1.1 at printed p.32, actual PDF p.34, whose general-dimensional proof is referred out; Bierme PDF pp.13-14 gives spectral context but its normalized positive-variance statement omits the zero case. The item relies on the local general LCA supplier and correctly includes zero. No defect found; reader/refuter findings empty.

No repair required. Next: quadratic-variogram example and final checks.

## Completed review: quadratic variogram example (level 3)

Reviewed all five verification steps, exact seven direct supplier interfaces and contract finite checks. At sites 0 and 1, M=[[1,2],[2,1]] gives (1,-1)M(1,-1)^T=-2, refuting the covariance by the reviewed covariance lemma. Expanding (s_i-s_j)^2 with sum a_i=0 leaves -2(sum a_i s_i)^2. The explicit equal-weight two-point space has E Z=0 and E Z^2=2; each X(t)=tZ is measurable and L2, the increment hZ has mean zero and second moment 2h^2, so the half-second-moment variogram is h^2. Variance 2t^2 differs at 0 and 1, refuting wide stationarity. Checked zero displacement, zero/one coefficient cases, repeated sites, t=0 and both outcomes; no choice, Schoenberg converse or limiting argument is used. Read Spodarev 2009 Example 2.2.1(1), printed p.43/actual PDF p.45, and Spodarev 2024 Exercise 1.10(e), PDF p.8, for random-line context; the exact two-point witness and every calculation are local. No defect found; reader/refuter findings empty.

Both current page summaries agree with their items and preserve the measurability, moment, domain and axiom qualifications. No page obligation is routed. No published supplier defect or unresolved owned dependency was found. The frontier dependency ledger has no existing row matching these batch-45 consumers; no withdrawal or supplier-repair disposition is required. Published content and all ledgers remain unchanged.

## Source and evidence limits

The reader/refuter reports were evidence only. Every assigned current item and its direct cited dependency interface was opened; the Gaussian construction and LCA Bochner supplier proofs were also read. This is not a new audit of the complete transitive published prerequisite closure. All mathematical arguments above were independently checked. Source PDFs were fetched from the exact carrier URLs; web screenshots mostly failed with cache misses, so relevant PDF pages were read using local PyMuPDF extraction. No source proof was assumed to certify the local argument. Reader PDF locators for the 2009 Bochner theorem and random-line example are off by two/one pages respectively; correct physical PDF locators are recorded above, with printed page numbers distinguished.

- [Spodarev, Spatial Statistics (2024)](https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf): PDF pp.4-5, 7-8.
- [Spodarev, Random Fields I (2009)](https://www.uni-ulm.de/fileadmin/website_uni_ulm/allgemein/zuloeschen/Random_Field.pdf): PDF pp.19, 34-35, 43-45.
- [Bierme, Lecture I (2016)](https://www.lebesgue.fr/sites/default/files/attach/Bierme_Lecture1.pdf): PDF pp.4-7, 13-14, 19-20.

No item or page was edited, no mathematical repair is claimed, and no defect-ledger row is warranted. The sole contract change is the five complete risk_review records. No proof-layout or precheck is required for unchanged items. No judging, stamping, certification or engine gate was run. Final risk check and output validation remain.

## Final local checks and handoff

- Initial risk-report: exit 0, six routed items, five required reviews.
- Final `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-45.proof-contracts.json --require-reviewed`: exit 0, zero errors, all five required reviews complete.
- Raw SHA-256 comparison: all six current items and both current pages match the frozen post-reader snapshot; pre/post item and page snapshot records are identical. Contracts now contain the task-required risk enrichment; snapshots were not rewritten.
- JSON/scope validation: version, run, group and empty decisions array correct; all obligation-producing scope arrays empty; exactly five complete risk reviews present.

Completed within batch 45. Blockers, escalations, published findings and open routed obligations: none. The engine retains decision hashing, gate execution and stage transitions.
