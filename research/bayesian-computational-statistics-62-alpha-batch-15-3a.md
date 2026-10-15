# Batch 15 Step 3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-15`.

Scope: seven touched obligations; no reader, refuter or page obligations. Reader and refuter reports have no outstanding findings. Review follows the generated dependency order. Published carriers are read-only.

## def-borel-gaussian-random-element-on-a-separable-banach-space

Reviewed the complete definition and scalar-normal, Borel-law, dual and Polish interfaces. The domain is a probability space and the target a real separable Banach space; every continuous linear image is centered normal, including variance zero. Tightness uses compact mass >1-delta for delta>0 and makes no cylinder-process realization assertion. Zero space and proper-subspace support are admissible. AC is inherited explicitly from scalar normals.

No routed decision.

## lem-borel-map-into-separable-banach-is-strongly-measurable

Reviewed steps 1.1–3.1 and the exact simple-function, strong-measurability, separability and measure-continuity interfaces. First-hit ball preimages are measurable; finite truncations have omitted mass <=2^(-2n); countable subadditivity and continuity from above make limsup tails null. Approximation is norm convergence outside a measurable null set on a probability space, not pointwise everywhere. Zero target and repeated dense points cause no problem; no uncountable selection is used.

No routed decision.

## lem-countable-norming-family-determines-borel-laws

Reviewed steps 1.1–2.1 and the rational-density/countability, separability and pi-system uniqueness statements. The union over rational q<r of closed-coordinate intersections gives exactly each open ball; separability gives a countable ball base, avoiding an uncountable-union inference. Finite cylinders form a generating pi-system containing B with finite mass one. Reader-added F3 is the exact separability supplier and is retained as audit enrichment. Zero space and degenerate laws satisfy the argument.

Decision: `reviewed_no_defect`, `change_kind: audit_enrichment`; the valid argument has a more explicit supplier.

## lem-separable-banach-has-countable-norming-family

Reviewed steps 1.1–2.1 and relative Hahn–Banach dual norming plus countable-choice interfaces. Normalized nonzero dense vectors are dense on the sphere; HB gives individual norm-one supports and countable choice selects them. The estimate ell_j(x/||x||)>=1-||x_j-x/||x|||| proves the lower norm bound; bounded functionals give the upper bound. Zero B has the expressly stated zero-functional interpretation. No stronger choice or norm attainment for a fixed dual functional is claimed.

No routed decision.

## thm-finite-dimensional-gaussian-isoperimetric-expansion

Reviewed every step 1.1–6.1 and exact calculus, Gaussian-density, inner-regularity and mollifier suppliers. Checked II''=-1, the complete Hessian square expansion and rowwise Cauchy–Schwarz sign. Read Chafai–Lehec Theorem 4.6 and full semigroup proof, printed pp.48–50. Positive bounded-away-from-endpoints smoothing controls denominators; finite unions of equal-radius balls have null exceptional hypersurfaces, absolutely continuous cutoffs and Lipschitz neighborhood mass. Integrating (Phi inverse V)'>=1 gives expansion; compact approximation gives the stated inner measure even when the Minkowski sum is not Borel. r=0 and masses 0 or 1 are treated correctly. Reader density citation F1 is exact and accepted; no new repair.

Decision: `reviewed_no_defect`, `change_kind: audit_enrichment`; reader enrichment retained.

## thm-standard-gaussian-log-sobolev-inequality

Reviewed steps 1.1–3.1 and exact differentiation, Gaussian-density, integration-by-parts, Fubini, convergence and L2 Cauchy–Schwarz suppliers. Read Chafai–Lehec Theorem 1.18 and its complete proof, printed pp.12–13. Positive lower and finite upper bounds on g and bounded first/second derivatives justify semigroup differentiation on compact positive-time intervals and entropy endpoint limits; Gaussian decay removes boundary terms. Weighted coordinate Cauchy–Schwarz yields Fisher-information decay e^(-2t); time integration gives exactly 1/2. Constant g has zero entropy/gradient; no unsupported extension to rough g is claimed. AC/DC/countable choice are explicit. Reader density citation is retained as audit enrichment.

Decision: `reviewed_no_defect`, `change_kind: audit_enrichment`; reader enrichment retained.

## lem-uncorrelated-joint-banach-gaussians-are-independent

Reviewed both steps and exact countable-determination, Gaussian characteristic-function, product-measure and rectangle-criterion interfaces. Every finite mixed vector is jointly Gaussian by hypothesis; zero mixed covariances factor its characteristic function, including singular blocks. Finite cylinder rectangles generate the product sigma-algebra, contain the full space and have matching finite total mass, so uniqueness gives independence. Marginal Gaussianity alone is not substituted for joint Gaussianity. HB and countable choice are supplied by explicit AC; zero spaces are covered.

No routed decision.

## thm-standard-gaussian-lipschitz-concentration

Reviewed all four steps and actual log-Sobolev supplier: bounded smooth approximants have bounded derivatives, and exp(lambda f) is positive and bounded away from zero. Herbst gives lambda psi'-psi<=lambda^2 L^2/2; mean value theorem and psi'(0)=0 yield the centered mgf bound, followed by Markov with lambda=r/L^2. Gaussian-kernel smoothing of clipped f supplies the required regularity without Rademacher; linear growth and the explicit Gaussian-density majorant pass means and exponential moments to f. L=0 is handled separately; r>0 avoids the threshold-zero case. Reader F2 density citation is retained as audit enrichment.

Decision: `reviewed_no_defect`, `change_kind: audit_enrichment`; reader enrichment retained.

## thm-fernique-integrability-for-separable-banach-gaussian-law

Reviewed steps 1.1–6.1 and Gaussian/product/Borel/choice suppliers. Orthogonal rotation has matching finite covariances and zero mixed covariance, so the already reviewed norming and independence lemmas give independent Borel copies. The tail inequality p(r)q<=p((r-s)/sqrt(2))^2 has the correct direction; recursion r_(n+1)=sqrt(2)r_n+s gives double-exponential p(r_n) and Gaussian tail decay. With a<b/3 the annular expectation series converges because r_(n+1)^2/r_n^2 tends to 2. The p(r0)=0 bounded case includes W=0. Read the full Hairer Theorem 4.13 proof, printed pp.21–22; no external theorem substitutes for the local proof.

No routed decision.

## ex-cylinder-gaussian-process-is-not-banach-valued

Reviewed all three verification steps and the complete current batch-14 Gaussian-process theorem, whose Kolmogorov construction supplies only the unique cylinder law. For the identity kernel, finite distinct-coordinate marginals are independent normals; positivity of q=P(|Z|>1) and continuity from above imply infinitely many exceedances almost surely. The displayed countable union/intersection makes l2 cylinder measurable. Reader-added F5 and step 3.1 correctly compare a hypothetical l2 pushforward with the cylinder law on a generating pi-system of mass one, contradicting masses one and zero on l2. No unsupported tightness inference; accepted repair.

Decision: `reviewed_no_defect`, `change_kind: audit_enrichment`; reader enrichment retained.

## thm-borell-concentration-for-separable-banach-gaussian-law

Reviewed steps 1.1–4.1 with the reviewed Fernique, norming and Lipschitz concentration results and exact PSD square-root, characteristic-function and continuity interfaces. Fernique bounds sigma^2 and the expected norm. Each finite maximum is the maximum of absolute Gaussian rows with row norms at most sigma; no covariance invertibility is needed. EF_n<=E||W|| gives the correct event inclusion; strict-tail events increase to the target strict tail. r=0 is trivial. If sigma=0 countably many zero coordinates imply W=0, covering the zero space. No median-centered inequality is substituted.

No routed decision.

## thm-banach-gaussian-covariance-rkhs-is-well-defined

Reviewed all four steps and the actual covariance definition, Fernique, strong measurability, Bochner criterion/norm/commutation, Cauchy–Schwarz and HB dual-separation suppliers. x->ell(x)x is continuous and its norm is bounded by ||ell|| ||x||^2, so the Bochner integral exists. Scalar commutation identifies m(C ell)=Q(ell,m); Cauchy–Schwarz identifies the null radical and HB gives ker C=N. The bound ||C ell||<=sqrt(Q(ell,ell)) sqrt(E||W||^2) extends to completion. Injectivity of the extension is separately proved by m(iu)=<u,[m]> and density, avoiding the invalid inference that an injective bounded map stays injective on completion. Zero covariance yields the zero Hilbert space.

No routed decision.

## ex-finite-dimensional-gaussian-process-as-tight-banach-prior

Reviewed steps 1.1–3.1 with the explicit scalar Gaussian realization and previously opened batch-14 supplier. The rank-one matrix vv^T with v=(1,2) is PSD and all scalar linear images are Gaussian. Compact segment masses tend to one, proving tightness directly. C ell_a=(a1+2a2)v; the quotient Hilbert norm of cv is |c|, its support is exactly the line and ||X||^2=5Z^2 gives the correct exponential moment (1-10a)^(-1/2) for 0<a<1/10. No nonsingular density of X is assumed; the Gaussian integral is used only for scalar Z. Excess blank lines in Given are editorial and no routed item edit is needed.

No routed decision.

## thm-cameron-martin-translation-for-separable-banach-gaussian-law

Reviewed steps 1.1–3.1 with the actual RKHS embedding, L2 Hilbert completeness, Gaussian characteristic functions and countable-law suppliers. J([ell])=ell is an isometry on the quotient; completeness extends J and the Borel-measure-space L2 definition supplies a Borel representative. L2 convergence passes means/covariances and characteristic functions to each finite joint vector (z_h,L), giving variance ||h||_H^2 and covariance ell(h). Completing the square has the correct positive sign for the law W+h, and ED=1, D>0 give equivalence. Finite-coordinate comparison then identifies D mu with mu_h. h=0 and quotient-representative invariance are covered. Reader Borel-version and completeness repair is retained as audit enrichment. Direct references are the compact-ball lemma, support theorem, sieve theorem and owning page; the strengthened measurability formulation preserves all their uses, with the joint-law check in the sieve reviewed below.

Decision: `reviewed_no_defect`, `change_kind: audit_enrichment`; reader enrichment retained.

## lem-banach-gaussian-rkhs-unit-ball-is-compact

Reviewed both steps, Cameron–Martin density, Gaussian mgf, tightness, reflexivity and weak-subsequence suppliers with their exact choice hypotheses. For ||h||_H<=1, integral D_h^2=e^(||h||_H^2)<=e; the common compact K with mu(Kc)<1/(16e) gives mu_h(Kc)<1/4, hence positive mass K intersect (K-h), proving h in compact K-K. Weak sequential compactness of the Hilbert ball and the embedding identity identify every Banach subsequential limit as an element of H1; the Hilbert limit has norm<=1 by testing its inner product against itself. This supplies closedness as well as relative compactness. AC explicitly discharges HB, ultrafilter lemma, DC and countable choice; H={0} is included. Reader Borel-version clarification of CM leaves this use sound.

No routed decision.

## thm-support-of-banach-gaussian-is-closure-of-rkhs

Reviewed steps 1.1–3.1, exact geometric separation and product/Borel interfaces, and the reviewed CM theorem. A positive-mass compact has a positive-mass finite-cover ball; two independent copies in that ball and the finite-Gaussian identity W-Wprime law=sqrt(2)W imply every origin ball has positive mass. Equivalent translation by -h then proves H is in support, whose closedness is immediate from its open complement. For x outside closure H, separating ell vanishes on H, hence ell(C ell)=E ell(W)^2=0; a neighborhood of x misses its full-mass kernel. Both inclusions hold even for the zero law. Reader Borel-version clarification preserves the translation use; no unsupported assertion of simultaneous uncountably many null equalities occurs.

No routed decision.

## thm-borell-sudakov-tsirelson-expansion-for-banach-gaussian-law

Reviewed all six steps and every supplier interface after completion of lower-level reviews. Read Borell Theorem 3.1 and full two-step proof, printed pp.208–210. For a closed finite cylinder, the span Q of coordinate classes has a finite Gaussian representation; the map S=T i restricted to Q is injective and T(W)=S(G) a.s., even for singular covariance. The finite-dimensional result supplies a closed cylinder inside F+rH1 with the required mass; m=0 is treated separately. HB separates each outside point from a compact K using finitely many functionals; second countability and countable choice give decreasing closed finite cylinders with intersection K. Compactness of rH1 proves closedness of sums and commutation of their decreasing intersection. Continuity from above gives compact K+rH1 inside A+rH1. Endpoints mu(A)=0,1 and r=0 use inner regularity correctly. No general uncountable measure-continuity or unjustified Borelness of arbitrary A+rH1 is assumed.

No routed decision.

## thm-gaussian-concentration-sieve-bounds

Reviewed steps 1.1–3.1 and the concentration-function, CM, countable-product Borel, expansion, compact-ball and covering-number interfaces. Read van der Vaart–van Zanten Theorem 2.1 (PDF p.5) and complete proof (PDF pp.20–21); their constants and prior-only qualification agree. Borel z_h and the maximum product norm give a countable norming family on B times R; centered joint Gaussian coordinates imply simultaneous-negation symmetry, so integral over the symmetric ball of exp(-z_h) is at least p. Translation by -h has the correct sign for mu(h+ball). Infimum approximation proves shifted small-ball mass without requiring attainment. The sieve eps open ball+M H1 is open, with b=Phi inverse exp(-Ct)<0 and M=-2b. Compactness gives a maximal strictly 2eps-separated finite packing with disjoint open eps balls and admissible centers in the sieve. Markov gives b^2<=2Ct, hence entropy <=5Ct<=6Ct. p=1, zero law and singular RKHS are allowed; positive eps, C>1 and exp(-Ct)<1/2 ensure all thresholds are defined. Reader F7 enrichment is sound; no posterior contraction is asserted.

Decision: `reviewed_no_defect`, `change_kind: audit_enrichment`; the reader made explicit a valid Borel/symmetry interface.

## Dispositions and metadata reconciliation

Exactly seven `touched:15:ID` decisions are owed and supplied. Each is `reviewed_no_defect` with `change_kind: audit_enrichment` and `defect_ids: []`. The reader changes add exact citations or immediate measurability/uniqueness details to sound arguments; no fatal or nonfatal mathematical defect is independently confirmed. There are no reader/refuter findings to close, no defect-ledger rows were manufactured for citation maintenance, and no completed mathematical repair is claimed. No item source was edited by Alpha, so no judge record was invalidated.

All 20 current item raw hashes equal the frozen post-reader hashes. The seven routed item hashes differ between the pre/post snapshots; the remaining 13 do not. Six manifest dependency arrays were synchronized with reader-added source dependencies, and the Cameron–Martin manifest Statement was synchronized with its Borel-version sentence. This is metadata reconciliation of existing current sources, not an additional Statement edit. Two consumer contract F1 quotations (compact RKHS ball and support theorem) were stale after that sentence was added; they now quote the actual supplier Statement. The full-batch first strict contract check detected exactly those two mechanical mismatches. The final rerun is recorded below. All 18 HIGH/CRITICAL risk reviews are specific and complete.

## Prerequisites, consumers and published findings

The two moderate/ordinary definitions were also opened as prerequisite context: the covariance quotient is justified by its separately proved well-definedness theorem, and the concentration function has nonempty feasible set and positive origin-ball mass by the proved support result. Both keep their exact approved conventions.

Every distinct cited local dependency was opened for its actual Statement or Definition; the draft batch-14 Gaussian-process supplier was read in full. Its finite Gaussian laws, consistency and unique cylinder-law conclusion suffice for the two owned examples; no Banach realization is inferred. Published integration, Gaussian, choice, topology, measure uniqueness, reflexivity, separation and entropy suppliers were checked only at the interfaces used here, without claiming a new audit of unrelated transitive proofs.

The reader Cameron–Martin Statement enrichment was checked against every direct reference consumer: `lem-banach-gaussian-rkhs-unit-ball-is-compact` uses the L2 density moment and equivalence; `thm-support-of-banach-gaussian-is-closure-of-rkhs` uses equivalence under translation; `thm-gaussian-concentration-sieve-bounds` uses the measurable joint Gaussian pair; the owning page describes these same conclusions. All remain sound. No outside consumer requires repair, no defective published item was established, and no published-ledger change or lock was needed. Existing proposed withdrawals remain untouched.

## External source checks

- [Chafaï–Lehec lecture notes](https://djalil.chafai.net/docs/M2/chafai-lehec-m2-lsie-lecture-notes.pdf), Theorem 1.18 and full proof, printed pp.12–13; Theorem 4.6 and full semigroup interpolation proof, pp.48–50: entropy dissipation and Gaussian gradient commutation give log-Sobolev with constant one half; the Hessian square gives the sharp functional isoperimetric bound. The local finite-ball/compact approximation passage was independently checked.
- [Hairer, An Introduction to Stochastic PDEs](https://www.hairer.org/notes/SPDEs_Course.pdf), Theorem 4.13 and full proof, printed pp.21–22; Theorem 4.44 and full proof, p.31: rotation and quadratic tail recursion give exponential-square integrability; Cameron–Martin density is the exponential of the corresponding Gaussian coordinate minus half its variance. The local finite-coordinate computation independently fixes the translation sign.
- [van der Vaart–van Zanten (2008)](https://arxiv.org/pdf/0806.3024), §2 definition/RKHS construction, PDF p.4, Theorem 2.1, p.5, and complete proof, pp.20–21: the hypotheses and three prior inequalities match the local theorem. The proof here supplies the shifted-ball argument directly and uses an open sieve with admissible internal cover centers.
- [Borell (1975)](https://dornsife.usc.edu/sergey-lototsky/wp-content/uploads/sites/211/2023/06/Borell-Subspace-original.pdf), Theorem 3.1 and complete two-step proof, printed pp.208–210: enlargement uses compact inner measure and the closed RKHS unit ball. The local proof explicitly handles finite-cylinder singularity and replaces the general decreasing-family passage by a justified countable sequence.

No missing historical carrier authorization is needed: current source hashes match the reader-post snapshot. Hash snapshots are comparison evidence, not a substitute for the independent current-proof reviews above. There are no unresolved mathematical blockers or escalations.

## Pre-reader byte comparison

Six exact pre-reader raw carriers are present under `research/bayesian-computational-statistics-62-owner-step2-gate1-13-16-before/`, named by the corresponding touched IDs: the cylinder example, norming-law lemma, log-Sobolev, Lipschitz concentration, Cameron–Martin and sieve items. Their raw SHA-256 values were checked against the pre-reader snapshot before comparing their changed clauses. The deltas agree with the reader report: added exact supplier citations; explicit L2/Borel representation; countable-product Borel explanation; and an immediate cylinder-pushforward uniqueness bridge, plus whitespace reflow. No mathematical counterexample or overstrong claim was found in those changes.

The finite-dimensional isoperimetric pre-reader bytes were recovered in memory and exactly authenticated against pre-reader SHA-256 `116ec5ca9fcc16d45d994beedb79fd44dc5409a5c915310387d39e638b313956`. Starting with the unchanged current post-reader carrier, remove the dependency line `  - thm-nondegenerate-multivariate-normal-law-has-density`, replace its F1 paragraph by the F1 paragraph from the same-ID `owner-step2-gate1-13-16-before` archive (which starts “The scalar standard normal has density”), and remove `F1, ` from the final tags of step 2.1. The resulting raw hash matches the frozen pre-reader hash exactly. Thus its complete delta is the multivariate-density citation/first sentence and step tag; its argument and Statement are unchanged. No historical preimage is inferred merely from a filename or hash, and no owner-current-content authorization is being assumed.

## Local checks

- `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-15.proof-contracts.json` ran before review: 20 routed items, 18 HIGH/CRITICAL, zero tool errors. The final `--require-reviewed` run passed after all 18 complete reviews were recorded.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-15.proof-contracts.json --strict --json`: final pass on all 20 items, zero errors and zero warnings. The earlier two stale Cameron–Martin consumer quotes were refreshed before this pass.
- `node tools/tsx-run.mjs tools/precheck.mts` with all seven routed item paths and `--json`: 7 checked, 0 failed.
- `node tools/proof-layout.mjs` with all seven routed item paths in one command: 7 items, 28 steps, 0 defects. No formatter or item edit followed this check. Alpha changed no item sources.
- A focused JSON/source check confirmed exactly the seven owed decisions, 18 complete required risk reviews, exact post-reader raw hashes for all 20 item sources, and source-identical manifest Statements/Definitions and dependencies.

No engine gate, judgment, stamp, certification, publication or push was run. Engine-owned decision hashing and gate batteries remain for the normal dispatch collection.
