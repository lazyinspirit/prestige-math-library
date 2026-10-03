# Step 5a — batch 18, frontier-38-owner-30

Scope: batch 18 only; group `batch-18`. The routed inventory owes 13 touched decisions, no pages, and no reader or flagged findings. Review follows the generated dependency order. Reader/refuter findings arrays are empty; their conclusions are evidence rather than verdicts.

Initial risk-report: exit 0, 16 items routed, 14 HIGH/CRITICAL items requiring review. All 16 current item raw SHA-256 hashes match the post-reader snapshot. The pre/post snapshots distinguish ten item-text repairs and three contract-only repairs; all manifest hashes are unchanged. Reader report gives exact locations and corrections; these are checked against current mathematics and suppliers below. No independent bytewise preimage diff is claimed.

Sources opened: [Macdonald, second edition](https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf), Chapter I (2.10)–(2.14′), printed pp. 23–25, and §7 (7.1)–(7.8), internal-product discussion and Examples 1–2, printed pp. 112–116. The full relevant arguments were read, using the PDF and its local text extraction. Macdonald uses a bilinear form; the authored complex extension is checked separately as Hermitian. James and Webb full external texts have not been independently audited in this session.

## def-frobenius-characteristic-map

Definition reviewed in full against its six direct dependency statements: complex class functions, rational power-sum basis, Hall orthogonality, cycle-type classes, centralizer cardinality and S_0 convention. Finite sum ch(f)=sum_rho f(rho)p_rho/z_rho is well typed in Lambda_C, with positive z_rho and no arbitrary choice. At n=0 it is the identity C→C; ch(0)=0 and imaginary-valued functions remain in the complex codomain. Rational/integral virtual-character assertions are explicitly deferred to the later dictionary theorem. Macdonald (7.2), printed p. 113, has the same normalization. No defect found.

No decision owed; complete risk review recorded.

## lem-complete-homogeneous-expansion-in-power-sums

Proof 1.1–5.1 and all six dependencies reviewed. The formal exponential is used in the commutative rational t-adic power-series ring, with zero-constant-term arguments and finite contributions at each coefficient; exp(A+B)=exp(A)exp(B), not additivity. Rank projections give homogeneous degree d identities; p_k has degree k. Multiplying the one-row identities and collecting multiplicity matrices gives N(lambda,rho)/z_rho, with labelled rows and distinct equal-length cycles. Each partition is reconstructed in decreasing order. Empty matrices/products give N(empty,empty)=z_empty=h_empty=1; impossible equal-size distributions give zero without extending N to unequal sizes. Macdonald (2.14′) and its full proof, printed p. 25, agree. Pre/post item and contract hashes differ, while the current item equals post. The three reported proof corrections and corrected zero-boundary contract are sound; accepted without further item edits.

Decision: `accepted_repair`; repair confidence 1. Closed defects: `frontier-38-owner-30-5a-batch-18-h-exp`, `frontier-38-owner-30-5a-batch-18-h-degree`, `frontier-38-owner-30-5a-batch-18-h-partition`, `frontier-38-owner-30-5a-batch-18-h-zero`.

## def-outer-induction-product-for-symmetric-group-characters

Full Definition checked against the graded-group definition, virtual-character definition, induced-character definition, external product, labelled Young blocks, tensor action/trace formula, and irreducible orthonormality. Pullback to S_m×S_n gives the external representation; character values are f(sigma)g(tau) at group elements, and unique irreducible coefficients give a finite bilinear extension into R(S_(m+n)). Induction stays a virtual character. For m=0 or n=0, induction from the whole remaining group and tensoring by the one-dimensional trivial module give the unit; a zero factor gives zero. Macdonald §7, printed p. 112, agrees. Current item equals post, with changed item/contract and unchanged manifest. The corrected evaluation has no change to the operation or its consumer-visible values; no downstream repair needed.

Decision: `accepted_repair`; repair confidence 1. Closed defects: `frontier-38-owner-30-5a-batch-18-outer-type`.

## lem-characteristic-of-a-young-permutation-character-is-complete

Proof 1.1–5.1 and all six direct suppliers checked. Fixed-point character counting applies to the finite tabloid set. Equality means equality at every labelled row index; invariance iff union of cycles follows in both directions by iterating the permutation on each row element. This is exactly N(lambda,rho) from the level-zero supplier, so substitution gives ch(phi^lambda)=h_lambda. Repeated row sizes do not permit row interchange; at shape (1,1) a transposition fixes neither tabloid. The empty shape has one tabloid and gives ch=1, while some nonempty-shape class values can be zero. No choice or extra prerequisite is used. Macdonald proof of (7.3), printed p. 114, agrees. Current item equals post and both item and contract changed; the local proof and boundary repairs preserve the Statement.

Decision: `accepted_repair`; repair confidence 1. Closed defects: `frontier-38-owner-30-5a-batch-18-young-rows`, `frontier-38-owner-30-5a-batch-18-young-zero`.

## lem-frobenius-characteristic-is-an-isometry

Full Statement, facts and Proof 1.1–3.1 reviewed against its eight suppliers. The Hall form extends from Q bilinearity to first-slot-linear, second-slot-conjugate-linear form, so pairing normalized basis elements gives delta/z_rho. Class sizes n!/z_rho turn both inner products into sum f(rho)conj(g(rho))/z_rho. Positive z_rho gives norm zero⇒all values zero, and f=0⇒norm zero; injectivity follows without assuming rational character values. For n=0 both forms reduce to the usual C form, and testing f=i confirms conjugation is essential. The trivial character has norm 1 by summing all class masses, not solely the identity class. Macdonald printed p. 113 supports normalization; its bilinear convention is explicitly distinguished. Item hashes are unchanged pre/post/current, while the contract repair corrects the false unit evidence and supplies both norm-zero directions.

Decision: `accepted_repair`; repair confidence 1. Closed defects: `frontier-38-owner-30-5a-batch-18-isometry-norm`.

## lem-frobenius-characteristic-preserves-outer-products

Proof 1.1–5.1 and all seven direct suppliers checked. Frobenius induction formula is applied first to honest external characters; each invariant m-subset has exactly m!n! lifts. Invariant subsets are unions of distinct cycles, giving binomial split counts, equal to z_rho/(z_mu z_nu). Coefficient comparison proves multiplicativity over C, and bilinearity extends both the identity and the value formula to virtual characters. Rational input values make the induced values rational without any premature irreducible-rationality assumption. The factors have degrees m and n; their product has degree m+n. Empty/all subsets, zero factors and m=n=0 all satisfy the formula. No choice is used. Current reader repairs are mathematically sound. Macdonald (7.1) is on printed p. 112, so I surgically corrected its locator; (7.3) and proof occupy pp. 113–114. Statement and all prerequisites remain unchanged; no affected consumer interface. Verdict amended_repair because of this additional citation repair.

Decision: `amended_repair`; repair confidence 1. Closed defects: `frontier-38-owner-30-5a-batch-18-product-degree`, `frontier-38-owner-30-5a-batch-18-product-rational`, `frontier-38-owner-30-5a-batch-18-product-locator`.

## thm-frobenius-characteristic-sends-specht-characters-to-schur-functions

Proof 1.1–5.1, all fourteen dependencies and contract derivations/boundaries reviewed. Exact Young-rule supplier gives phi=K^T chi, and exact Kostka supplier gives h=K^T s in a smaller-to-larger dominance order. Applying ch and inverting K^T gives the same Specht label s_lambda; s_lambda=sum_mu (K^-1)_(mu,lambda) h_mu has the correct indices. Substituting integral cycle-distribution coefficients proves integrality of normalized p_rho/z_rho coefficients (character values), without incorrectly asserting ordinary p_rho coefficients integral. Complete irredundant Specht classification and Schur integral basis give the two claimed Z-bases. K_empty,empty=1 treats n=0; zeros in K and repeated parts are harmless. No AC is invoked. A degree-two check with K=[[1,0],[1,1]] gives s_(1,1)=h_1^2-h_2; the inverse row would give the false expression h_1^2. Macdonald (7.5)–(7.8), printed p. 114, corroborate the dictionary and normalization. Current item equals post; repairs preserve the Statement.

Decision: `accepted_repair`; repair confidence 1. Closed defects: `frontier-38-owner-30-5a-batch-18-specht-matrix`, `frontier-38-owner-30-5a-batch-18-specht-normalization`.

## cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients

Statement and Proof 1.1–3.1 checked against all four direct suppliers. Pairing the Specht characteristic with p_rho cancels z_rho and reads the coefficient of p_rho/z_rho, rather than the ordinary power-sum coefficient. Character values are integral by the completed Specht theorem. At n=0 both pairings and the normalized coefficient are 1; zero character values give zero coefficients. The equivalent displays imply each other by power-sum orthogonality and uniqueness of basis expansion. For the trivial positive-degree character the coefficient of p_(n) is 1/n, while its normalized coefficient is 1. Macdonald (7.7) is on printed p. 114, matching the repaired locator. Pre/post item and contract hashes differ and current item equals post; the Statement is unchanged.

Decision: `accepted_repair`; repair confidence 1. Closed defects: `frontier-38-owner-30-5a-batch-18-coefficient-locator`, `frontier-38-owner-30-5a-batch-18-coefficient-one`.

## prop-regular-character-has-characteristic-p-one-to-the-n

Full Proof 1.1–3.1, facts, nine direct suppliers and contract reviewed. The finite regular-character supplier gives n! at identity and zero elsewhere, and z_(1^n)=n! yields ch(reg)=p_1^n. Maschke applies in characteristic zero to the finite-dimensional regular module; complete irredundant Specht classification and the character-inner-product multiplicity formula give m_lambda=conj(chi^lambda(1))=dim S^lambda=f^lambda. Applying the proved Specht dictionary gives the Schur expansion. Empty shape/S_0 gives p_1^0=1 and f^empty=1; n=1 gives p_1=s_(1). No unrestricted choice, circular dimension argument or RSK assumption occurs. Macdonald printed p. 114 gives the same expansion. No defect found; item and contract were untouched by the reader. No decision owed.

No decision owed; complete risk review recorded.

## prop-sign-twist-corresponds-to-the-omega-involution

Full Proof 1.1–5.1, nine dependencies and contract checked. Tensor-character multiplication by sign gives (-1)^(n-ell(rho)), exactly omega(p_rho), so normalized coefficients agree. The supplied omega statement conjugates Schur labels; injectivity of ch and the finite-dimensional complex character-isomorphism iff then give S^lambda⊗sgn≅S^(lambda-prime). Isomorphism⇒equal characters and equal characters⇒isomorphism both meet supplier hypotheses. Zero V gives zero; at n=0 V can have any finite dimension d and both characteristics equal d, while the Specht specialization has d=1. Trivial S_n has ch=h_n, and sign has e_n; only degree zero has h_0=e_0=1. No choice is used. Macdonald (2.13), printed p. 24, and §7 Example 2, printed p. 116, exactly support the repaired source locator. Current item equals post, with reader source and contract corrections; Statement unchanged.

Decision: `accepted_repair`; repair confidence 1. Closed defects: `frontier-38-owner-30-5a-batch-18-sign-empty`, `frontier-38-owner-30-5a-batch-18-sign-unit`, `frontier-38-owner-30-5a-batch-18-sign-locator`.

## thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism

Full Proof 1.1–4.1 and all fifteen dependencies reviewed. The proof establishes integral image independently of the later label theorem: phi=K^T chi gives chi^lambda=sum_mu (K^-1)_(mu,lambda) phi^mu, hence integral h-coordinates. Isometry gives degreewise injectivity; each h_mu is the characteristic of an actual Young permutation character, giving surjectivity. Finite support justifies the double sum for arbitrary elements. Multiplicativity and injectivity transport associativity, commutativity, distributivity and unit from Lambda; the Given uses a graded abelian group, without assuming the ring axioms. Tensoring a map and its inverse preserves isomorphism over Q and C; degree zero is Z→Z with 1→1 and no completion occurs. The same-degree Hermitian isometry extends to the direct sum by orthogonality of distinct degrees. No arbitrary choice is needed. Macdonald (7.3) and full proof, printed pp. 113–114, agree. Reader inverse-Kostka, premise and source corrections are accepted; Statement unchanged, current item equals post.

Decision: `accepted_repair`; repair confidence 1. Closed defects: `frontier-38-owner-30-5a-batch-18-ring-matrix`, `frontier-38-owner-30-5a-batch-18-ring-premise`, `frontier-38-owner-30-5a-batch-18-ring-locator`.

## cex-outer-induction-is-not-the-kronecker-product

Full Statement refuted, Counterexample 1.1–5.1, fifteen suppliers and contract reviewed. For the chosen two one-dimensional trivial S_1 modules, induction from H={1} to S_2 gives values (2,0), while their same-group tensor has dimension and degree 1. Normalized coefficients and Jacobi–Trudi give h_2+e_2=p_1^2=s_(2)+s_(1,1); both Specht characters (1,1) and (1,-1) yield the asserted decomposition, so the outer coefficient is a multiplicity after induction to S_2. Group domains and homogeneous degrees are kept explicit; n=0 is allowed for the family and the products then agree, without weakening the failure at n=1. No choice is used. Macdonald outer product pp. 112–114 and internal product pp. 115–116 support the source distinction. The repaired Statement qualifies the original witness without changing the commissioned counterexample; this B-page item has no dependency/reference consumer in the owned batch. Current item equals post. Reader witness, degree and locator corrections are accepted.

Decision: `accepted_repair`; repair confidence 1. Closed defects: `frontier-38-owner-30-5a-batch-18-cex-witness`, `frontier-38-owner-30-5a-batch-18-cex-degree`, `frontier-38-owner-30-5a-batch-18-cex-locator`.

## ex-frobenius-characteristic-dictionary-for-s3

Full Example, Verification 1.1–4.1, six supplier statements and contract reviewed. Jacobi–Trudi and omega give (h_3,h_2h_1-h_3,e_3) and the displayed expansions; multiplying ordinary coefficients by z=(6,2,3) gives rows (1,1,1),(2,0,-1),(1,-1,1). Standard tableaux counts are 1,2,1: the middle shape has precisely the two choices for its upper-right entry after placing 1 in the upper-left. Exact rational arithmetic independently gives weighted row Gram I_3 and column Gram diag(6,2,3), with all off-diagonals zero, and identity-column sum 6. This validates the repaired normalized-coefficient wording and each row norm, as well as the added column check. Vanishing middle transposition value is included; this fixed n=3 example asserts no empty-degree instance. Macdonald (7.5)–(7.7) gives the exact dictionary used. No AC. Item and contract changed pre/post, current item equals post; Example unchanged.

Decision: `accepted_repair`; repair confidence 1. Closed defects: `frontier-38-owner-30-5a-batch-18-s3-normalization`, `frontier-38-owner-30-5a-batch-18-s3-norm`.

## ex-sign-twist-conjugates-the-s31-character

Full Example and Verification 1.1–4.1, seven direct suppliers and changed contract reviewed. For cycle types (1^4),(2,1,1),(2,2),(3,1),(4), z=(24,4,8,3,4). Jacobi–Trudi yields s_(3,1)=h_3h_1-h_4 and the dual formula yields s_(2,1,1)=e_3e_1-e_4. Exact rational coefficient subtraction and normalization give (3,1,-1,0,-1); signs (1,-1,1,1,-1) give (3,-1,-1,0,1). Both expansions, module labels and dimensions therefore agree with the completed sign-twist supplier; the 3-cycle value remains zero. This is a fixed n=4 example, so an empty-shape instance is inapplicable. No AC. Macdonald (2.13) and (7.5)–(7.7) support the sign and normalized-coefficient rules. Item hashes pre/post/current are identical; the contract-only boundary repair is accepted.

Decision: `accepted_repair`; repair confidence 1. Closed defects: `frontier-38-owner-30-5a-batch-18-s4-boundary`.

## ex-young-permutation-characteristic-for-shape-two-one

Full Example, Verification 1.1–3.1, seven cited dependencies and contract reviewed after the S3 supplier. The three tabloids are indexed by their singleton second row. Identity fixes three, a transposition fixes one and a 3-cycle fixes none, giving (3,1,0). Explicit semistandard tableaux of content (2,1) give Kostka counts 1,1,0: repeated label 1 may share the length-two row but cannot share a column. Shape (2,1) itself has distinct parts. Young rule gives S^(3)⊕S^(2,1); the completed S3 table gives the same character and h_2h_1=s_(3)+s_(2,1) by exact polynomial arithmetic. Fixed degree n=3 has no empty-shape instance; zero 3-cycle values and one-copy multiplicities are included. No AC is used. Macdonald proof of (7.3), printed p. 114, supplies ch(phi)=h. Item pre/post/current is unchanged and contract changed; the false repeated-part boundary was corrected without editing the sound Example.

Decision: `accepted_repair`; repair confidence 1. Closed defects: `frontier-38-owner-30-5a-batch-18-two-one-parts`.

## Supplier and consumer evidence

All 16 batch carriers were reviewed. Each external direct dependency was opened at its current Statement or Definition; contract citations were checked against those exact sections, including their domains, hypotheses and normalization. This checks the interfaces used by these proofs; it does not claim a recursive audit of every published prerequisite proof. The contract citation inventory is:

- `cor-distinct-specht-modules-are-inequivalent` — current Statement.
- `cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients` — current Statement.
- `cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product` — current Statement.
- `cor-power-sums-are-orthogonal-for-the-hall-inner-product` — current Statement.
- `cor-sign-from-disjoint-cycle-structure` — current Statement.
- `cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types` — current Statement.
- `def-class-function-and-the-space-of-complex-class-functions` — current Definition.
- `def-column-antisymmetrizer-polytabloid-and-specht-module` — current Definition.
- `def-frobenius-characteristic-map` — current Definition.
- `def-graded-ordinary-representation-ring-of-symmetric-groups` — current Definition.
- `def-hall-inner-product-on-symmetric-functions` — current Definition.
- `def-outer-induction-product-for-symmetric-group-characters` — current Definition.
- `def-partition-young-diagram-and-conjugate-partition` — current Definition.
- `def-power-sum-and-complete-homogeneous-symmetric-polynomials` — current Definition.
- `def-semistandard-tableau-and-kostka-number` — current Definition.
- `def-sign-representation-and-restriction-of-a-representation` — current Definition.
- `def-stable-graded-ring-of-symmetric-functions` — current Definition.
- `def-standard-inner-product-on-complex-class-functions` — current Definition.
- `def-tensor-product-of-complex-representations` — current Definition.
- `def-virtual-character-and-character-ring-of-a-finite-group` — current Definition.
- `def-young-subgroup-tabloid-and-permutation-module` — current Definition.
- `ex-frobenius-characteristic-dictionary-for-s3` — current Statement.
- `lem-characteristic-of-a-young-permutation-character-is-complete` — current Statement.
- `lem-complete-homogeneous-expansion-in-power-sums` — current Statement.
- `lem-frobenius-characteristic-is-an-isometry` — current Statement.
- `lem-frobenius-characteristic-preserves-outer-products` — current Statement.
- `lem-kostka-change-of-basis-is-dominance-unitriangular` — current Statement.
- `lem-young-permutation-module-is-induced-from-the-trivial-character` — current Statement.
- `prop-omega-conjugates-schur-functions` — current Statement.
- `prop-power-sums-form-a-rational-not-integral-stable-basis` — current Statement.
- `prop-sign-twist-corresponds-to-the-omega-involution` — current Statement.
- `thm-centralizer-cardinality-from-cycle-type` — current Statement.
- `thm-character-of-a-permutation-representation-counts-fixed-points` — current Statement.
- `thm-character-of-the-regular-representation` — current Statement.
- `thm-characters-of-direct-sums-tensor-products-and-duals` — current Statement.
- `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules` — current Statement.
- `thm-complex-representations-are-determined-by-their-characters` — current Statement.
- `thm-conjugacy-class-cardinality` — current Statement.
- `thm-elementary-and-complete-families-freely-generate-the-stable-ring` — current Statement.
- `thm-frobenius-characteristic-sends-specht-characters-to-schur-functions` — current Statement.
- `thm-frobenius-formula-for-induced-characters` — current Statement.
- `thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions` — current Statement.
- `thm-jacobi-trudi-and-dual-jacobi-trudi-identities` — current Statement.
- `thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order` — current Statement.
- `thm-schur-functions-form-an-orthonormal-integral-basis` — current Statement.
- `thm-standard-polytabloid-basis` — current Statement.
- `thm-youngs-rule-for-permutation-modules` — current Statement.

Both current page summaries and item manifests were opened for consumer assessment. The reader’s Definition correction to the outer product is consumed only by the graded-group definition, multiplicativity lemma, ring theorem and counterexample, plus its owning A page; all use the same operation and remain sound. The counterexample’s witness qualification has only its owning B page as a reference consumer, whose summary remains sound. Repository-wide exact-ID search found no outside-batch item or page consumers of either changed interface. The adjudicator’s sole additional edit changes a source locator, with no Statement or Definition change. No cross-group impact, proposed withdrawal, unmet prerequisite or owned frontier-dependency-ledger entry requires disposition; the batch cross-dependency artifact is empty. No defective published supplier was found in the assessed uses, so no published ledger edit or lock acquisition was needed.

## Final changes and checks

Decisions: **13/13 owed obligations**, comprising **12 accepted_repair** and **1 amended_repair**. There are no reader, flagged or page obligations. Each completed repair has `repair_confidence: 1`, and the decisions reference **28 distinct closed defect rows**, all owned at `5a-adjudicate`. Contract-only repairs are tied to their actual mathematical defects rather than labelled as metadata. The only item changed during this adjudication is `items/lem-frobenius-characteristic-preserves-outer-products.md`, whose Macdonald locator now gives (7.1) on printed p. 112 separately from (7.3) and its proof on pp. 113–114. No proof, mathematical claim, dependency, manifest, provenance or verification judgment was rewritten. The owning contract changes after the reader consist solely of risk_review records; all 14 required HIGH/CRITICAL reviews are complete.

Local validation, all exit 0:

- Initial risk-report: 16 items routed, 14 requiring full review. Final `node tools/risk-report.mjs research/frontier-38-owner-30-batch-18.proof-contracts.json --require-reviewed`: 0 errors, 16 items routed.
- Citation fidelity on the owned contract with `--fail-on-missing-quote`: 109 citations across 16 items; no missing quotes and no widening candidates. This mechanical result supplements the direct statement/definition review.
- Exact rational arithmetic: S3 weighted row Gram matrix I_3, column Gram matrix diag(6,2,3); S4 coefficient normalization and sign twist give the two displayed rows. These finite checks corroborate the written derivations.
- Reflow on the sole edited item: unchanged. Precheck: 1 checked, 0 failing.
- After the final item edit and formatter, `node tools/proof-layout.mjs items/lem-frobenius-characteristic-preserves-outer-products.md`: 1 item, 6 steps, 0 defects.
- Scoped rendercheck: all 16 batch items and both pages, 18 files, no errors or warnings.
- Defect-ledger validation for this run: 50 rows at time of invocation, 0 errors (other batch writers remain active). Independent local output check: exact 13-obligation coverage, 28 unique valid closed ledger references, confidence 1 on every decision.
- Raw item hashes: all current items initially matched post-reader; at handoff only the amended locator item differs. Removing only newly recorded risk_review fields restores every contract’s post-reader canonical hash. No decision hash was stamped.

No unresolved assigned mathematical finding, published finding, prerequisite escalation or owner blocker remains. Pre-reader item bytes were not recovered for an independent historical diff; the historical corrections above rely on the reader’s durable exact-location report and the pre/post hash changes, and were independently checked mathematically against current carriers and their prerequisites. No owner-authorized current_content_review substitution is used. This report is local adjudication evidence, not a judge verdict or certification. No agents, judge cycle, gate battery, scheduling transition or publication action was initiated.

Next action: hand these artifacts to the engine for decision-hash stamping and the scheduled gate battery.
