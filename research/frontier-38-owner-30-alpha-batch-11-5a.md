# Batch 11 Step 5a adjudication

Run `frontier-38-owner-30`; group `batch-11`. Independent local adjudication only; no judge cycle or engine transitions.

Conventions: AC, compact Hausdorff groups, Haar mass one, first-variable-linear inner product, finite-subset nets over arbitrary index sets. Current initial item files equal the post-reader raw hashes; pre/post snapshots distinguish 22 item edits and two contract-only touched items. No historical preimage file was supplied; specific reader repair evidence is assessed alongside current arguments, and no unobserved historical claim is reconstructed.

## def-hilbert-direct-sum-of-unitary-representations

Definition: finite-subset supremum includes empty sets. Finite Cauchy-Schwarz gives absolute scalar summability; coordinate Cauchy limits give completeness and the finite-subsums bound passes uniformly to the limit. Finite-tail continuity handles F=empty before division; the canonical orthogonal sum is surjective because its isometric image is closed and contains the summands. AC carries the countable-choice Hilbert suppliers. Reader endpoint repair accepted.

Dependencies: def-square-summable-family-on-an-arbitrary-index-set, thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set, lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums, def-strongly-continuous-unitary-representation, def-orthogonality-and-orthogonal-complement, def-hilbert-space, def-linear-isometry-and-orthogonal-or-unitary-operator, def-axiom-of-choice. Current review complete; next: remaining level-0 suppliers.

## def-representative-function-on-a-compact-group

Definition: finiteness quantifies over each function, not over a universal collection. Coefficients are continuous and linear/conjugate-linear with first-variable-linear pairing. Both inner-product coefficient spans coincide by finite basis expansion; Haar averaging supplier assumes AC, now explicit. Zero function is included; no density asserted.

Dependencies: def-axiom-of-choice, def-matrix-coefficient-of-a-unitary-representation, lem-averaging-makes-a-finite-dimensional-representation-unitary, def-strongly-continuous-unitary-representation, def-topological-group, def-compact-space, def-hausdorff-space, cor-normalized-haar-probability-on-a-compact-group, def-linear-subspace. Current review complete; next: remaining level-0 suppliers.

## def-unitary-dual-of-a-compact-group

Definition: irreducible excludes zero; published finite-dimensionality under AC realizes all classes on C^d for d>=1, giving a set quotient. Unitary equivalence preserves dimension; representative/basis selections declare AC. Trivial class exists even for the trivial group; neither topology nor countability is imposed.

Dependencies: def-strongly-continuous-unitary-representation, thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional, def-dimension, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-axiom-of-choice. Current review complete; next: remaining level-0 suppliers.

## lem-compact-convolution-operators-commute-with-right-translations

Proof 1.1 substitution yprime=yg gives xg yprime^-1 with Haar right invariance; Cauchy-Schwarz ensures sections integrable. Proof 1.2-3.1 uses continuous product-measurable kernels first and L2 density plus inversion isometry and adjoint norm continuity for general kernels. Compactness is supplied by Hilbert-Schmidt lemma; every eigenspace including zero is invariant by commutation and inverse translation. AC inherited explicitly.

Current review complete; next item follows dispatch dependency order. Exact local suppliers are the item deps and its Facts & Assumptions; no external consumer edited.

## lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations

Proof 1.1-3.1: componentwise orthogonal sum; tensor basis independence tested with bilinear coordinate functionals; unique elementary-tensor pairing, isometries and finite-sum strong continuity. J is conjugate-linear involutive isometry and sigma=J pi J gives the homomorphism in correct order. Zero-dimensional tensor/sum cases give empty bases without division; conjugation coefficient uses first-variable-linear convention. Reader reversal repair accepted.

Current review complete; next item follows dispatch dependency order. Exact local suppliers are the item deps and its Facts & Assumptions; no external consumer edited.

## lem-l1-action-of-a-unitary-representation

Proof 1.1 compact orbit has finite simple approximants and separable range; scalar simple approximants and integrable norm give Bochner integral independent of f representative. Pairings reduce multiplication and adjoint to integrable scalar kernels, continuous case then density; substitutions z=xy, z=kx, z=xk and inversion give correct convolution/covariance. Statement (3) requires integral f=1; f=0 would refute old estimate. Positive cutoff near e has positive Haar integral and normalized estimate yields nonzero image. AC supplies integrations and approximation selections; only assigned downstream use requires normalized estimate.

Current review complete; next item follows dispatch dependency order. Exact local suppliers are the item deps and its Facts & Assumptions; no external consumer edited.

## lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero

Proof 1.1-4.1: L1*C_c representative via Tonelli/norm approximation; for each fixed x translation equality for shift x is enough to make g*e_n constant, without common null set over shifts. Integrable constant on infinite-measure R vanishes; shrinking interval sequence cofinal in neighbourhood net and right approximate identity converges. L2 consequence applies to |v|^2 in L1, never |v| in L1. Zero g and v allowed. AC carries countable-choice Lebesgue suppliers and the approximate-identity choices.

Current review complete; next item follows dispatch dependency order. Exact local suppliers are the item deps and its Facts & Assumptions; no external consumer edited.

## lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients

Proof 1.1 separates n=0 before U(n) Lie supplier for n>=1. Strong continuity of finitely many basis orbits implies operator-norm continuity by Cauchy-Schwarz. Pull back NSS neighbourhood and contain a projection kernel; its subgroup image is trivial. Kernel is union of open cosets; quotient by coordinate kernel is finite image, without surjectivity of coordinate projections. Coefficients constant on open cosets. Inverse-system index is directed/nonempty; AC scope carried.

Current review complete; next item follows dispatch dependency order. Exact local suppliers are the item deps and its Facts & Assumptions; no external consumer edited.

## def-normalized-irreducible-matrix-coefficient-basis

Definition uses d>=1, AC chooses fixed models/bases. Schur orthogonality with first-variable-linear pairing gives sqrt(d) normalization and orthogonality across classes. Coordinate change is U tensor conjugate U on d^2 entries; intertwiner transport preserves block. No completeness or countability inferred. Item raw pre=post; touch is contract enrichment only.

Current review complete; next: level-2 separation. Dependencies: exact item deps/Facts, including spectral, Schur and Fourier interfaces opened at Statements.

## lem-finite-rank-spectral-pieces-of-compact-convolution

Proof 1.1-2.1 applies the compact self-adjoint spectral theorem on arbitrary Hilbert space, not a separable-space theorem. Nonzero eigenvalue set countable and finite eigenspaces; kernel may be arbitrarily large. Closed orthogonal sum equals kernel-perp, restrictions are continuous unitary representations by commutation and inherited strong continuity. Zero kernel and zero operator/empty spectrum cases are consistent; AC covers supplier choices.

Current review complete; next: level-2 separation. Dependencies: exact item deps/Facts, including spectral, Schur and Fourier interfaces opened at Statements.

## lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra

Proof 1.1-2.1 finite linear combinations, trivial coefficient 1, tensor products and J-conjugation give constants, multiplication and conjugation. Left translate transforms second vector by pi(g); right translate transforms first vector, directly checked with pairing convention. Zero coefficients pose no problem; inherited AC declared, no circular point separation or density used.

Current review complete; next: level-2 separation. Dependencies: exact item deps/Facts, including spectral, Schur and Fourier interfaces opened at Statements.

## cex-compact-peter-weyl-is-not-a-direct-sum-decomposition-for-noncompact-regular-representations

Counterexample proof 1.1-3.1: abelian operators self-intertwine; Schur makes an irreducible restriction one-dimensional even without finite-dimensional assumption. Modulus-invariance applies squared L1 class; unit vector contradiction rules out every irreducible subspace. Indicator of (0,1] makes ambient L2 nonzero, so empty decomposition impossible. Scalar integral defined as L2 sections; Fourier translation law extends by Schwartz density; dominated convergence uses 4|h|^2, characters not spatial L2. No general noncompact decomposition claim retained; AC carries suppliers.

Current review complete; next: level-2 separation. Dependencies: exact item deps/Facts, including spectral, Schur and Fourier interfaces opened at Statements.

## lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct

Proof 1.1-2.1 identifies product with compatible finite-subset tuples, including F=empty and I=empty. p_F is surjective by filling remaining coordinates with identities (no arbitrary choice). NSS factorization from reviewed profinite supplier gives finite F. Enlarge F by a finite neighbourhood control set to ensure both factorization and prescribed containment; coefficient dependence exactly finite. AC inherited.

Current review complete; next: level-2 separation. Dependencies: exact item deps/Facts, including spectral, Schur and Fourier interfaces opened at Statements.

## lem-compact-group-matrix-coefficients-separate-points

Proof 1.1 cutoff only vanishes outside symmetric U; support-closure inclusion was false (triangular cutoff on R/Z has boundary support). Amended to vanishing outside U, sufficient because nonzero integrand at g forces g in UU. Haar positivity gives psi(e)>0; spectral sum plus self-adjoint range-perp gives rho(g)psi=psi as L2 classes; continuous uniqueness then permits evaluation at e. Proof 3.1 difference equals norm square and y-translation gives correctly typed coefficient in invariant eigenspace. Trivial group makes distinct-points claim vacuous; no countability/separability used. AC supplies DC and spectral/Haar inputs. Refuter 4 confirmed fatal and completely repaired without Statement change.

Verdicts: touched amended_repair; flagged:11:4 confirmed_fatal. Statement unchanged; no consumer repair triggered. Local validation pending final batched item checks. Next: uniform density.

## thm-uniform-peter-weyl-density

Proof 1.1-2.1 verifies unital, self-adjoint algebra and point separation from earlier reviewed suppliers; compact Hausdorff K is nonempty by group identity, so complex Stone-Weierstrass unital case applies. Uniform epsilon form follows using epsilon/2 approximation if supremum strictness is needed. No L2 or arbitrary representation decomposition assumed, so chain is not circular. AC inherited.

Current review complete. Next: finite-dimensional subrepresentation lemma and L2 basis.

## lem-a-nonzero-unitary-representation-of-a-compact-group-has-a-finite-dimensional-subrepresentation

Proof 1.1 approximation error less than half nonzero pi(f)v norm yields nonzero pi(f1)v, using Haar mass one and normalized L1 supplier. F3 global-finite-span claim was false: circle has infinitely many independent characters. Corrected F3 to per-function finite linear combination. Proof 2.1 then builds E from the finitely many models occurring in f1, dimension at most sum d_j^2; covariance gives invariant finite-dimensional image F and inverse group elements give equality; closedness supplier applies. v nonzero before division. Statement unchanged. Refuter 3 confirmed fatal, fully repaired; no consumer change required.

Review complete; item edit validation pending batched final checks where applicable. Next: level-5 consumers.

## thm-l2-peter-weyl-orthonormal-basis

Proof 1.1 Schur scaling gives delta_ik delta_jl. Proof 1.2 decomposes any finite-dimensional representation orthogonally and uses typed unitary intertwiners T_m:H_pi_m -> V_m before basis expansion; repeated classes allowed and zero carrier gives empty sum. Uniform density implies L2 density because Haar mass one, together with continuous L2 density, without separability. Parseval handles arbitrary indices. Proof 3.1 Schur makes abelian irreducibles lines; characters separate via finite span. AC selects models/bases and covers supplier choices. Reader transport repair accepted.

Review complete; item edit validation pending batched final checks where applicable. Next: level-5 consumers.

## cor-parseval-and-fourier-inversion-for-compact-groups

Proof 1.1 inverse-matrix integral is well-defined for L2 subset L1 on probability Haar. Entry <pi(f)e_j,e_i>=<f,u_ij>/sqrt(d) has transpose order dictated by pairing; summing entry moduli gives d HS norm square. Parseval and finite-subset-net convergence use complete basis, no enumeration of dual. For finite coefficient sum, orthonormality gives exact pointwise identity of its continuous functions; no convergence assertion for arbitrary continuous functions. Zero f gives all zero entries; d never zero. AC inherited.

Current review complete. Next: level-6 countable support and finite-product example.

## thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely

Proof 1.1-3.1: poset is a set of collections of subspaces; union bounds chains (empty chain bounded by empty family). Zorn gives maximal orthogonal irreducibles; nonzero complement has finite invariant subspace and hence irreducible, contradicting maximality. Grouping classes gives orthogonal Hilbert sums, with possibly infinite multiplicity. To identify all copies, each projection onto selected inequivalent summand intertwines and vanishes by Schur; completeness puts any sigma-copy inside its grouped span. This avoids false inference from zero intersection to orthogonality. Published projections provide exact same isotypic ranges, not a circular completeness claim. Zero H handled explicitly; AC spent on Zorn and suppliers.

Current review complete. Next: level-6 countable support and finite-product example.

## thm-regular-representation-peter-weyl-decomposition

Proof 1.1 Schur gives d^2 independent coefficients and finite-dimensional closed blocks; complete basis gives total block span. Proof 2.1 rho acts on v, scaled v->coefficient map sqrt(d)V_j is unitary. Proof 3.1 lambda acts conjugate-linearly on w; linear basis map W_i realizes conjugate pi with correct matrix entries and norm. Jprime T J is typed linear unitary intertwiner proving model/basis independence and class involution; reindexing preserves d and multiplicity. d>=1, trivial class and zero coefficients harmless. AC inherited. Reader convention repairs accepted.

Current review complete. Next: level-6 countable support and finite-product example.

## ex-peter-weyl-for-a-profinite-group

Verification 1.1-3.1 finite quotient coefficients span pullback of finite coefficient space, dimension <=d^2 (two-dimensional trivial representation has span dimension one), equality only for irreducibles by Schur. Infinite profinite cannot be finite-dimensional Lie by NSS and open kernel basis. Irreducibility preserved in both directions by surjective quotient; finitely many coefficients share an open normal kernel intersection. Locally constant functions on compact K have finite coset subcover and common normal intersection, so factor through finite quotient. Finite group regular coefficients give point indicators, hence all quotient functions. General compact density/basis applies with AC; no countability asserted.

Current review complete. Next: level-6 countable support and finite-product example.

## ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality

Verification 1.1-2.1 Schur on abelian group forces irreducibles one-dimensional and coefficient equals character independently of model/basis. All integer characters are in Peter-Weyl basis and already complete orthonormal by published circle theorem; any extra basis vector would be orthogonal to whole L2, contradicting unit norm. Distinct n,m tested at t=1/(2(n-m)); zero character n=0 retained. Fourier series conventions normalize Haar to one; compact-open dual topology is only cited as consistency, not re-proved. AC inherited.

Current review complete. Next: level-6 countable support and finite-product example.

## cor-each-vector-in-a-compact-representation-has-countable-isotypic-support

Proof 1.1 and F2 repaired at empty finite subset: strict contribution only for nonempty F; all finite subsets satisfy |F|<=n^2 S. For S=0 all thresholds empty and bound reads 0<=0. Infinite threshold would have arbitrarily large finite subsets by finite induction, contradicting bound, so thresholds finite without choice. Positive norm belongs to some threshold; countable union finite sets uses Countable Choice supplied by AC. Isotypic component square sum is norm square by reviewed decomposition, and left regular coefficient blocks have type conjugate pi. No countability of dual or H asserted. Refuter 5 confirmed fatal, completely repaired without Statement change.

Review complete; next: page-only obligations and final local validation.

## ex-peter-weyl-for-an-infinite-product-of-finite-groups

Verification 1.1-2.1 finite-subset inverse-limit presentation and surjective projections include empty product (one-point group). Both directions of irreducible pullback tested: acting operator sets coincide. Finite linear combinations factor through union of their finite coordinate sets; R(K_F)=C(K_F) by density plus finite-dimensional closedness. Point indicator of one differing coordinate separates arbitrary tuples, even if infinitely many coordinates differ. General compact density/basis/regular decomposition then applies, with AC on compactness and model choices. Neither countability nor distinct quotient representatives are assumed; item raw pre=post and touch is contract enrichment.

Review complete; next: page-only obligations and final local validation.

## Page-only obligations

A-page final paragraph: flagged:11:1 confirmed_fatal. Trivial compact group acting on ell2(N) has one infinite-dimensional isotypic component; amended prose to possibly infinite sums of finite-dimensional irreducible copies. Page lists/order and requires retained; spectral, normalization and regular-action summary agree with checked items.

B-page final paragraph: reader:11:1 and flagged:11:2 confirm the same fatal function-space defect on the same observed carrier. L2 need not imply modulus L1 (v=(1/2)(1+|x|)^(-3/4) has norm one and nonintegrable modulus); squared modulus is integrable and translation-invariant, so vanishing lemma applies. Repaired summary uses this square and describes the explicit scalar Fourier-Plancherel integral verified in the counterexample. All seven examples retained. No published carrier edited.

## Decision inventory

Exactly 31 owed obligations: 24 touched items, one touched A-page, one reader finding, five flagged findings. Verdicts are recorded in the task-named decisions file. Completed repairs carry `repair_confidence: 1`. Twenty-three closed defect rows cover the confirmed current findings and accepted substantive reader repairs; inherited AC declarations are metadata normalization, and the normalized-family/product-example contract updates and translation proof/citation refinement are audit enrichment, with no manufactured defect rows. The reader and refuter B-page reports share one square-modulus defect row.

| Obligation | Verdict | Defect IDs |
|---|---|---|
| touched:11:cex-compact-peter-weyl-is-not-a-direct-sum-decomposition-for-noncompact-regular-representations | accepted_repair | frontier-38-owner-30-5a-batch-11-integral-scope |
| touched:11:cor-each-vector-in-a-compact-representation-has-countable-isotypic-support | amended_repair | frontier-38-owner-30-5a-batch-11-regular-block-fact |
| touched:11:cor-parseval-and-fourier-inversion-for-compact-groups | reviewed_no_defect | none |
| touched:11:def-hilbert-direct-sum-of-unitary-representations | accepted_repair | frontier-38-owner-30-5a-batch-11-empty-tail |
| touched:11:def-normalized-irreducible-matrix-coefficient-basis | reviewed_no_defect | none |
| touched:11:def-representative-function-on-a-compact-group | reviewed_no_defect | none |
| touched:11:def-unitary-dual-of-a-compact-group | reviewed_no_defect | none |
| touched:11:ex-peter-weyl-for-a-profinite-group | accepted_repair | frontier-38-owner-30-5a-batch-11-coefficient-dimension, frontier-38-owner-30-5a-batch-11-coefficient-span |
| touched:11:ex-peter-weyl-for-an-infinite-product-of-finite-groups | reviewed_no_defect | none |
| touched:11:ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality | reviewed_no_defect | none |
| touched:11:lem-a-nonzero-unitary-representation-of-a-compact-group-has-a-finite-dimensional-subrepresentation | amended_repair | frontier-38-owner-30-5a-batch-11-normalized-fact |
| touched:11:lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero | reviewed_no_defect | none |
| touched:11:lem-compact-convolution-operators-commute-with-right-translations | accepted_repair | frontier-38-owner-30-5a-batch-11-integrability, frontier-38-owner-30-5a-batch-11-product-measurable |
| touched:11:lem-compact-group-matrix-coefficients-separate-points | amended_repair | frontier-38-owner-30-5a-batch-11-continuous-evaluation |
| touched:11:lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct | reviewed_no_defect | none |
| touched:11:lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients | accepted_repair | frontier-38-owner-30-5a-batch-11-u-zero |
| touched:11:lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations | accepted_repair | frontier-38-owner-30-5a-batch-11-conjugate-order |
| touched:11:lem-finite-rank-spectral-pieces-of-compact-convolution | reviewed_no_defect | none |
| touched:11:lem-l1-action-of-a-unitary-representation | accepted_repair | frontier-38-owner-30-5a-batch-11-integral-one, frontier-38-owner-30-5a-batch-11-scalar-bound |
| touched:11:lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra | reviewed_no_defect | none |
| touched:11:thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely | accepted_repair | frontier-38-owner-30-5a-batch-11-isotypic-orthogonality |
| touched:11:thm-l2-peter-weyl-orthonormal-basis | accepted_repair | frontier-38-owner-30-5a-batch-11-coefficient-transport |
| touched:11:thm-regular-representation-peter-weyl-decomposition | accepted_repair | frontier-38-owner-30-5a-batch-11-left-block, frontier-38-owner-30-5a-batch-11-basis-invariance |
| touched:11:thm-uniform-peter-weyl-density | reviewed_no_defect | none |
| page:11:peter-weyl-theory-for-general-compact-groups | amended_repair | frontier-38-owner-30-5a-batch-11-convolution-side |
| reader:11:1 | confirmed_fatal | frontier-38-owner-30-5a-batch-11-square-modulus-page |
| flagged:11:1 | confirmed_fatal | frontier-38-owner-30-5a-batch-11-isotypic-page |
| flagged:11:2 | confirmed_fatal | frontier-38-owner-30-5a-batch-11-square-modulus-page |
| flagged:11:3 | confirmed_fatal | frontier-38-owner-30-5a-batch-11-representative-finiteness |
| flagged:11:4 | confirmed_fatal | frontier-38-owner-30-5a-batch-11-cutoff-support |
| flagged:11:5 | confirmed_fatal | frontier-38-owner-30-5a-batch-11-empty-threshold |

## Exact sources and dependency evidence

Opened current item Statements/Definitions and all authored proof steps. Checked direct supplier interfaces named in each item’s deps and Facts; foundational supplier proofs were not recursively audited. The convolution supplier’s complete Proof 1.1–7.1 was checked for its continuous-kernel product measurability, L2 extension and representative independence. The risk reviews record actual hypotheses and proof uses, not structural scores alone.

- [Tao, Notes 3](https://terrytao.wordpress.com/2011/09/27/254a-notes-3-haar-measure-and-the-peter-weyl-theorem/), Theorems 6–7 and complete proofs, web lines 313–381: compact self-adjoint spectral pieces and compact Hausdorff point separation. His right-convolution/left-action convention differs from our left-convolution/right-action convention; local substitutions were independently computed. The displayed norm-square calculation at web line 362 omits a factor of lambda in its cross term; this source typo was not imported.
- [Kowalski, representation theory](https://people.math.ethz.ch/~kowalski/representation-theory.pdf), Lemma 5.4.7 and full proof and Corollary 5.4.2 proof, printed pp. 234–235, PDF pp. 238–239, web lines 14309–14382: finite-dimensional invariant images and maximal orthogonal families. Local arguments use per-function finite coefficient spans and a set of collections of subspaces. The neighbouring remark’s separable proof restriction is avoided by the local arbitrary-Hilbert-space spectral supplier.
- [Vogan, compact-group notes](https://math.mit.edu/~dav/compactrev.pdf), Proposition 2.11, Theorem 2.13 and complete proof, Corollary 2.16, printed pp. 8–11, web lines 385–608: finite coefficient spans, block normalization and projections. His inverse-coefficient convention differs; first-variable-linear matrix entries and conjugate left-action block here were derived directly. No full-reading claim is made for other bibliography entries.

## Consumer and published dispositions

Searched item and library reference consumers of every owned item: none lies outside these two pages and the assigned 24-item inventory. Rechecked reader Statement/Definition impacts, in particular integral-one L1 action -> nonzero-subrepresentation F1; regular-action types -> countable-support F4 and product example/page summaries; profinite coefficient dimension -> example uses. My three item repairs change Proof/Facts only, so no new Statement/Definition impact window opens. Manifest and page item order are unchanged; all 24 IDs remain present and draft, with no proposed withdrawal. Four owned cross-batch dependency rows retain verified status and now record the actual current circle uses; refreshed the unified ledger with its tool. No defective published supplier/consumer was identified, so no published ledger edit or lock was needed.

## Local checks and remaining engine issue

- Reflow on the explicit three edited item paths: exit 0, all unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on those three paths: exit 0, 3 checked, 0 failing.
- `node tools/rendercheck.mjs` on the three items and two repaired pages: exit 0, five files; YAML and all math parsed.
- After final item edits/reflow, one batched `node tools/proof-layout.mjs` on the three explicit changed paths: exit 0, 3 items, 7 steps, 0 defects. No later item edit occurred.
- `node tools/risk-report.mjs research/frontier-38-owner-30-batch-11.proof-contracts.json`: exit 0, 24 HIGH/CRITICAL items routed; all specific risk reviews completed. Full `--require-reviewed` run: exit 0, 24 items, 0 errors.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`: exit 0, refreshed and deduplicated.
- `node tools/defect-ledger.mjs append --file /tmp/frontier-38-owner-30-batch-11-defect-rows.json`: exit 0, 23 closed rows appended and generated view refreshed.
- Local decision inventory/references check: exactly all 31 owed obligations, every reader/flagged decision names one closed row, 24 complete risk reviews, exactly three items differ from initial post-reader snapshot. These are local checks, not an engine gate or mathematical certification.

Mathematical blockers: none found in current owned content. Mechanical owner/engine obligation remains: `reader:11:1` classifies the B-page final paragraph as `ill-formed`, while `flagged:11:2` calls the identical error `unlicensed-inference`. Their observed carrier hashes agree. The decisions use `same_defect_as: "reader:11:1"` and durable common-carrier evidence, preserving one row per actual defect. `tools/step5-scope.mjs` lines 944–955 additionally requires literal defect-label equality for shared findings, so the supplied aliases can cause `ledger-double-owned` at the engine gate. Required owner disposition: normalize these aliases in engine-owned evidence or recognize aliases in the shared-finding rule. I did not change independent reports or engine code, duplicate the defect, stamp hashes, judge, self-certify, or run the engine gate battery.
