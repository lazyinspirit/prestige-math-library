# Batch 73 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-73`; scope: batch 73 only.

## Review in dependency order

### def-qftx-paraxial-cone (level 3)

Verdict: accepted_repair; repair_confidence: 1. Reader changed forward-cone terminology and specified the sufficient axis regularity, preserving the packet class and finite-aperture bounds. Current item matches the post-reader raw hash `1385c6032809d04d2ba9bdb194bbc715fb89ba3e250aed3872773cacaba7d07c`; pre hash is `9c7a5aab221e91ce3508a6b9c68d045dbd0ab6154f99979dd10af2308ea68f32`. The exact pre-reader text was recovered from `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-baseline/items/def-qftx-paraxial-cone.md` by adding the current AC implication dependency/role, F4 paragraph, [F1]–[F4] Given range and current step 1.1. Its SHA256 is exactly the frozen pre hash above. This recovers the complete pre-reader argument rather than assuming that an older baseline was identical.

Independently checked Definition and all three proof steps. The cross-product convention gives h e_sigma = sigma e_sigma. The north-gauge phase rotates by exp(-i sigma t). For either nonzero winding sign the axis factor is a Cartesian polynomial; ell=0 gives 1, and smooth b(r,nz) on the specified open domain makes the coefficient smooth. This is sufficient regularity, not a necessary-form theorem. Radial lower bound excludes zero; the aperture excludes the south pole; normalized means nonzero. The limiting family does not claim a normalized zero-aperture state. No apparatus or observed angular momentum is inferred.

Read current supplier statements and arguments: `def-qftx-photon-helicity-bundle`, `prop-qftx-helicity-chern-obstruction`, `thm-qftx-photon-rotations-helicity`, `def-axiom-of-choice`, `def-countable-choice`, and `thm-choice-implies-dependent-implies-countable-choice`. Full AC supplies the countable-choice hypotheses and the Stone generator. The rotation theorem diagram has W horizontally and the weighted/unweighted actions vertically; both composites are W U_nu(R)=U_0(R) W, matching the direct formula. It requires no diagram repair.

Risk report initially routes all five items CRITICAL. Completed this item's specific risk_review in the owning contract before proceeding. Next: review packet existence, then spin error, then the two level-7 consumers and all actual uses affected by reader interface clarifications.

## Source reading limits

Independently opened Bliokh et al., https://arxiv.org/html/1006.3876v3 (primary article), and Bekshaev et al., https://arxiv.org/pdf/0801.2309. Read Bliokh I for the hbar=c=1 convention and total angular momentum, and Bekshaev section 2, PDF pages 5–9 (zero-based), for the small diffraction-angle parameter. Local Hilbert-packet derivations must stand independently; classical beam interpretations are not automatically transferred. No claim of full-book or full-transitive-library re-audit is made.

### lem-qftx-paraxial-vortex-packet-existence (level 4)

Risk-only review, no decision owed. All four steps are valid. The R3 bump restricted to a translated coordinate line gives the required one-variable envelopes. Positive radial and angular subintervals give A,B>0, and dnu=(r/2)dr sin(theta)dtheta dphi gives norm squared pi AB. Compact support inside the open intervals justifies smooth zero extension, with neither origin nor axis encountered. Integer winding is single-valued, including negative and zero winding. Rotation gives exp(-i(ell+sigma)t), and membership in D supplies the generator domain and claimed eigenvalue.

Read the exact published bump lemma (n>=1, 0<r<R), chart/polar-measure agreement (AC_omega, n>=2), and Fubini Statement (L1 on sigma-finite products); the bounded compact annular integrands meet their hypotheses. Reader cone terminology and sufficient axis clause do not alter this axis-avoiding use. Completed the specific risk_review before proceeding to level 6. No defect, interface change or choice gap found.

### prop-qftx-paraxial-spin-error (level 6)

Risk-only review, no decision owed. Independently checked all four steps, `def-qftx-photon-projected-angular` and the exact expectation statement and step 3.1 of `prop-qftx-photon-fock-angular-lift`. On helicity sigma, S_z prime=hbar sigma cos(theta), bounded on the whole Hilbert space. The probability measure |f|²dnu gives an inclusive bound hbar(1-cos theta_max), and 1-cos x=2sin²(x/2) with |sin u|<=|u| gives the quadratic bound. Read the exact Statements of the four cited trigonometric suppliers and checked the hypotheses. For the orbital identity the smooth packet lies in D(J_z); no subtraction of undefined moments occurs. Both helicity signs, negative/zero winding and aperture endpoints satisfy the claim. No empirical or apparatus interpretation is introduced. Completed specific risk_review before level 7.

### prop-qftx-spin-to-orbit-constraint (level 7)

Verdict: amended_repair; repair_confidence: 1. Accepted the reader's north-gauge input wording, and independently found two additional false assertions. The Statement called both S_z prime and L_z prime bounded: only S_z prime is bounded. Indeed the preceding packets give J_z eigenvalues (ell+sigma)hbar for arbitrary ell, and ||S_z prime||<=hbar; thus the orbital remainder cannot be bounded. The corrected Statement calls it the orbital remainder on D(J_z). In step 1.3 the swap matrix's adjoint was said to be I; in fact its adjoint is itself, and its square is I. Corrected that clause and the matching contract derivation. These are distinct nonfatal defects in a recoverable argument; the claimed balance and counterexample remain intact.

Checked all six steps. Exact domain invariance and unitarity preserve total expectation, so subtraction gives Delta L=-Delta S. The bounded self-adjoint difference U* h U-h vanishes iff all its quadratic forms vanish: x+y and x+iy recover both components, including the converse of the helicity claim. The packets (sigma,ell)=(1,0),(-1,2) are unit orthogonal vectors of opposite helicity with common J_z eigenvalue hbar. Projection onto their finite span preserves D(J_z); self-adjointness makes the domain intersection with its orthogonal complement invariant. The swap, identity on that complement, is therefore a domain-preserving unitary commuting with J_z and changing h expectation from +1 to -1.

Consumer search across items and library finds no item using this proposition; the sole library occurrence is its A-page placement. No outside consumer repair is needed. The cone definition's direct consumers are precisely the other four batch-73 items: the first two were checked above, the present proposition uses only the local packet/operators, and the example is reviewed next. No implication of cone preservation or apparatus realization is asserted. Synchronized all three reader-changed titles/public sections in the owning manifest, retaining IDs, dependencies and page inventories. Completed the current proposition risk review before proceeding.

### ex-qftx-vortex-paraxial-label (level 7)

Verdict: accepted_repair; repair_confidence: 1. Exact pre-reader source is `research/physics-non-fluid-129-2026-10-21-r2-owner-qft-tgr-boundaries/preimages/items/ex-qftx-vortex-paraxial-label.md`, SHA256 `0283dc69de29b359a743224e283f6d266807107185255c6d6f54f38c92fc0901`, matching frozen pre. Current source matches frozen post `f85f67ae10f8ccb7ccd01d32a858b2a100378d540998daf0f4490604d1ae6441`. Compared the complete delta: title qualification, precise angular surface and shell definitions, named annular intersections, integer m>=2 and countable union. The proof's substantive integral is preserved.

Verified all four steps: compact radial support and norm one give the stated finite energy functional; inverse-length wave number with c=1 gives its energy units. A fixed interior polar angle is null on each finite annulus by the theta-singleton integral; the annuli with integer m>=2 cover M. A radial singleton gives the same result for the positive-radius shell. Fubini is applied only to bounded integrable finite-annulus indicators, and the sphere has finite surface area. Thus an L2 class supported on either set is zero; the actual packet has positive widths. The spin bound with theta2 follows directly from the pointwise cosine bound already proved, even though theta2 is strictly below the cone supplier's theta_max. The north-gauge winding remains local. All direct suppliers have been inspected above. Completed risk_review. Search finds no consumer of this B-page example beyond its placement; reader interface change has no outside effect.

## Published finding reader:73:1

Verdict: confirmed_nonfatal. Current `items/def-euclidean-inner-product.md`, Definition first paragraph, still contains the malformed clause beginning “This is the same set that”. Read the complete Definition: R^n is explicitly the function space n->R, the dot product is sum_(k<n) x_k y_k, and the norm is its nonnegative square root. These formulas and the n=0 convention are unambiguous despite the broken redundant metrics sentence. The owned use is n=3 Euclidean geometry in the transverse weighted photon space, reached through `def-qftx-photon-helicity-bundle` -> `lem-qftx-photon-invariant-measure-isometry` -> `def-euclidean-inner-product`; the measure-isometry also reaches it through `def-qft-photon-transverse-space`. Read the complete isometry and transverse-space carriers and their actual declared edges. It uses those formulas, never the malformed comparison wording. This is a published editorial defect, not a failure of the cone argument.

Published/imported bytes remain read-only. Record a closed scoped nonfatal-recorded defect and keep original mathematics-owner maintenance OPEN: replace the broken comparison sentence with a grammatical reference to lem-metrics-on-rn, preserve the explicit formulas and n=0 scope, and reconcile imports after authorized mathematical review. Maintain the published classification index without duplicating its existing separate stale-status record. No source acceptance or publication certification is claimed.

## Additional source checks and history

Independently read Bliokh section II Eqs. (2)–(9), section IV Eqs. (24)–(26), and Appendix A packet/beam distinction at https://arxiv.org/html/1006.3876v3. The fixed-angle delta spectrum is distinct from a normalized weighted-L2 packet; local proofs supply finite-width results. Read Tong section 6.2.1 Eqs. (6.511)–(6.523), https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html, for transverse modes/projector. Read Palmerduca–Qin Theorem 18 and complete proof Eqs. (63)–(67), https://arxiv.org/html/2308.11147v2, matching the explicitly converted Berry/Chern signs and obstruction. These sources are contextual mathematical inputs; no experimental or apparatus claim is deduced.

Spin-constraint exact pre-reader source is `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-baseline/items/prop-qftx-spin-to-orbit-constraint.md`, SHA256 `3a320a76811bfd1f3e38863e606ee256c916d32804a5a07562fbed2277a69b8b`. Its only reader content change was north-gauge wording; the two additional defects predate the reader and are now repaired. Before Alpha editing all five raw item hashes matched the frozen post snapshot. Historical pre-reader text is recovered for all three touched items; no historical-content waiver is needed.

## Local checks and handoff

- Initial risk-report without --require-reviewed: five CRITICAL items, zero errors. Repeated with --require-reviewed after all five independent item reviews: five routed, zero errors.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-73.proof-contracts.json --strict`: 5/5 checked, zero errors and warnings.
- Reflow through the supplied tsx runner on `items/prop-qftx-spin-to-orbit-constraint.md`: unchanged. The two phrase corrections required no structural reflow.
- Precheck through the supplied tsx runner on that item: 1 checked, zero failing. A preliminary direct Node invocation of the .mts help command failed because Node does not load .mts directly; corrected to the supplied runner. No content defect or successful check was inferred from that invocation.
- Explicit rendercheck on that item: one file, zero YAML/math/render errors.
- Required final batched proof-layout command on all Alpha-changed item paths (the proposition alone): one item, six steps, zero defects. No item edit followed this check.
- Exact routed decision set: 4/4, no extras. All five confirmed defect rows appended through the ledger helper at caught_at_stage 3a-adjudicate: cone definition specificity, example surface terminology, inherited orbital boundedness and swap adjoint errors, and the nonfatal-recorded published sentence.

No diagrams occur in the assigned five items or two frontmatter-only pages. The inspected rotation supplier's commutative diagram is correct and independent of its proof; no missing diagram is necessary for these explicit constructions. Page inventories and cross-batch dependencies are unchanged. The owning manifest now mirrors all three touched public sections and titles. There is no substantial unmet prerequisite, outside consumer hold or proposed withdrawal. The published editorial maintenance remains OPEN for the mathematics owner and does not block these exact reviewed uses.

No judgment, stamps, certification, engine transition or gate battery was initiated. Engine/owner owns current decision hashing and subsequent gates. Source reading and local checks are recorded only at their actual scope.
