# Batch 22 Step 5a adjudication

Scope: batch 22 only; group batch-22. No agents, judging, stamps, or engine transitions. Current carriers and exact dependency claims are reviewed in the generated dependency order. Pre/post snapshots distinguish mathematical reader repairs from contract-only audit enrichment. Sources are consulted independently; local checks do not certify mathematics.

## touched:22:def-minuscule-weight

Verdict: `reviewed_no_defect`. The pre/post item and manifest hashes agree; only boundary evidence changed. Definition checked against Etingof Definition 30.1, printed p.158, and the exact root, coroot, lattice, reflection and fundamental-weight definitions. Dominance makes positive-root pairings nonnegative integral, and negation gives both directions of the absolute-value formulation. Zero is included; simple rank is positive. AC is inherited from stated suppliers, with no new choice operation.

Defect rows: none (contract audit enrichment). Risk review complete.

## touched:22:def-polynomial-glr-highest-weights-as-partitions

Verdict: `reviewed_no_defect`. Pre/post item and manifest hashes agree; contract boundaries are audit enrichment. Polynomiality survives basis changes by constant linear substitutions and conjugations; torus weights are nonnegative integer exponents. Schur-Weyl claims (1)-(5) give the exact Hom module, nonzero irreducibility, highest weight and polynomial degree. Converse classification is the explicit type-A source input, Etingof §27.3 and Goodman-Wallach Theorem 5.5.22, pp.274-275. Rank r>=1, zero module, r=1 and empty partition conventions checked. Corrected contract wording to distinguish zero-padded weight coordinates from positive partition parts. AC is inherited classification scope.

Defect rows: none (contract audit enrichment). Risk review complete.

## touched:22:def-tensor-product-multiplicity-for-highest-weight-modules

Verdict: `reviewed_no_defect`. Only the contract changed across pre/post snapshots. Exact complete-reducibility, highest-weight-classification, tensor-action, weights-below-top and scalar Schur-lemma statements justify the finite decomposition, highest-weight bound and intrinsic Hom-space dimension. All modules are finite-dimensional over C; nonzero tensor factors give a nonempty decomposition, while V=0 has all multiplicities zero and L(0) is the tensor unit. No infinite choice or convergence inference is introduced; AC follows the classification suppliers.

Defect rows: none (contract audit enrichment). Risk review complete.

## touched:22:lem-bender-knuth-involutions-on-semistandard-tableaux

Verdict: `amended_repair`. Read all six steps and both tableau definitions. Reader's rectangle-completion repair is sound: lambda and nu decrease along rows, giving both displayed inequalities in Step 1.1. Non-free k entries form an initial row block and non-free k+1 entries a final block; each column has at most one free cell, so changing its value preserves strictness. Step 4.1 needed the additional correction that a free cell remains free, since complementary row counts need not change every cell's value (e.g. a free row 1,2 is fixed). The preserved free positions and twice-swapped counts give the involution; paired non-free counts give weight transposition. Empty shapes, no free cells and zero letter counts work; r=1 has no admissible k and constant symmetry. Stembridge p.2 construction read in full. Choice-free; Statement unchanged, no consumer propagation required.

Defect rows: f39-b22-5a-lem-bender-knuth-involutions-on-semistandard-tableaux-1, f39-b22-5a-lem-bender-knuth-involutions-on-semistandard-tableaux-2. Risk review complete.

## touched:22:lem-minuscule-weights-are-the-weyl-orbit

Verdict: `amended_repair`. Read all nine proof steps and the exact 23 supplier definitions/statements. F1 now proves full support of the dominant highest root by connectedness and nonpositive off-diagonal inner products, then uses the integral simple-coroot basis to obtain strictly positive integral coefficients of its coroot. This is the coroot of the highest root, distinguished from Etingof's highest coroot in footnote 15, p.158. Rank induction splits the deleted-vertex subsystem orthogonally; components away from i vanish by positive definiteness, including the rank-one base. The bounded root-lattice lemma decreases the integral coefficient norm under a reflection. Root-sl2 lowering/raising proves weight-set invariance and provides the weight omega-alpha for the norm contradiction. Both directions through condition (3), zero weight, and orbit multiplicity one are justified. Etingof pp.158-160 relevant complete proofs read; no arbitrary new choice beyond supplier AC. Reader support repair accepted; Statement unchanged. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-lem-minuscule-weights-are-the-weyl-orbit-1. Risk review complete.

## touched:22:cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr

Verdict: `reviewed_no_defect`. Only contract evidence changed across snapshots. Directly checked the three cells, distinct contents and reading order: rows 1,3 / 2 give 3,1,2 and fail at the single-letter prefix for i=2. The other possible tableau is 1,2 / 3 and fails at i=1. Enumerating the two placements with top-left 1 proves the LR count zero independently of character identities; the displayed seven monomials give the rank-three (2,1) Schur polynomial and coefficient 2 on x1*x2*x3. Exact LR, skew, Kostka, partition, bialternant and Jacobi-Trudi supplier claims read. No hypotheses of the refuted universal assertion fail, and no AC is needed.

Defect rows: none (contract audit enrichment). Risk review complete.

## touched:22:prop-semistandard-tableaux-expand-schur-characters

Verdict: `amended_repair`. All five steps checked against exact Schur-Weyl, partition-only Young's rule, Specht classification, tableau and character suppliers. The repair first applies Young's rule to sorted partition content nu, identifies its tensor basis as the transitive Young permutation module, then transports arbitrary composition weights by permutation matrices and Bender-Knuth bijections. This resolves the original domain mismatch. F5 explicitly proves scalarity over C by an eigenvalue and irreducible kernel, supplementing the group Schur supplier's division-ring statement. Highest weight, character and tableau degrees agree; empty n=0, r=1, zero components and ell(lambda)>r are consistent, and row i filled by i establishes the nonzero direction. Jacobi-Trudi at empty inner shape matches the bialternant convention; no new AC use. Reader repair accepted without Statement change. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-prop-semistandard-tableaux-expand-schur-characters-1, f39-b22-5a-prop-semistandard-tableaux-expand-schur-characters-2. Risk review complete.

## touched:22:lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux

Verdict: `amended_repair`. Read all six steps, exact dependencies and Stembridge pp.2-3 plus complete Macdonald §I.9 pp.142-148, equations (9.1)-(9.7) and recording/inverse algorithms. F1's false general nonpartition alternant assertion is removed: e.g. (0,3)+rho_2=(1,3) has distinct exponents. Current cancellation uses only the exact wall equality at the maximal bad column. Removing columns >=j preserves full remaining columns; column j has k+1 but no k, so the boundary-row inequality remains valid. Selected (k,j) persists under the involution and fixed points have zero alternant. F3 proves tensor-power retractions, semisimplicity via isotypic idempotents, scalarity and finite Schur-character independence by the strictly decreasing exponent. F4 imports the source's lattice-word coefficient theorem, with the same reading convention; comparison needs no invented bijection. Empty shapes, rank one, zero counts and output row bounds checked. AC inherited from representation suppliers. Reader repairs accepted; claim and exact external-input caveat retained. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux-1, f39-b22-5a-lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux-2, f39-b22-5a-lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux-3. Risk review complete.

## touched:22:prop-determinant-twists-translate-glr-highest-weights

Verdict: `amended_repair`. All three proof steps and exact top-exterior, determinant, Schur, partition and bialternant claims read. Factoring x_i^k from determinant rows proves the character shift also for negative k in the Laurent ring; k>=-lambda_r makes the output nonnegative. Tensoring by a one-dimensional character preserves invariant subspaces and shifts highest weight. Goodman-Wallach §5.5.4 Theorem 5.5.22 complete proof (p.274), Etingof §27.3 pp.146-147 and Seynnaeve Proposition 12.1 pp.59-60 explicitly support rational classification. The repaired final step correctly makes only lambda_r=0 parametrisation unique; e.g. det can be labelled (1^r,0) or (empty,1), so unrestricted pairs are redundant. r>=1 is inherited; empty lambda, k=0, negative admissible k and r=1 checked. AC inherited, no new choice. Statement unchanged. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-prop-determinant-twists-translate-glr-highest-weights-1. Risk review complete.

## touched:22:prop-tensor-product-multiplicities-are-character-structure-constants

Verdict: `reviewed_no_defect`. Pre/post carrier and manifest agree and only contract boundaries changed. All four proof steps traced to exact finite weight decompositions, additivity/multiplicativity, highest-weight classification and weights-below-top; complete reducibility is inherited from the multiplicity definition. Coefficient comparison uses a maximal member of a finite discrepancy set, so incomparable weights and non-total root order cause no issue. Highest weight coefficient one removes that discrepancy and proves finite linear independence. Tensor weight pairs form a finite sum; V=0, the trivial module, absent weights, and rank-zero semisimple case all satisfy the identities. Completed-ring notation makes no convergence assertion; AC is inherited classification scope.

Defect rows: none (contract audit enrichment). Risk review complete.

## touched:22:thm-littlewood-richardson-tensor-product-rule

Verdict: `amended_repair`. All three steps and exact supplier claims checked. Current Step 1.1 invokes the admissible-count supplier's actual tensor-power retraction and isotypic splitting, rather than inferring complete reducibility from finite dimension. Fixed total size gives finitely many partitions, including the unique empty partition at size zero. The LR coefficient's tableau definition is independent of rank, while output modules above rank vanish and are excluded from nonzero constituents. Character equality and module decomposition agree by the finite Schur-character independence already proved. r>=1 and input row bounds apply; empty input is the tensor unit and each product of nonzero inputs is nonzero. AC inherited. Reader's semisimplicity and finiteness repairs accepted; statement retained. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-thm-littlewood-richardson-tensor-product-rule-1, f39-b22-5a-thm-littlewood-richardson-tensor-product-rule-2. Risk review complete.

## touched:22:cor-horizontal-pieri-rule

Verdict: `amended_repair`. All three proof steps and exact quotient symmetric-power, Specht and LR/tableau suppliers checked. F1's averaging d!^-1 sum sigma annihilates coinvariance relations, and qP=q, so invariants and quotient symmetric powers are inverse equivariant images. One-row Specht is trivial. All-one content is semistandard exactly for a horizontal strip and its word is lattice; empty content supplies d=0. One-row expansion gives h_d, and finite Schur-character independence converts characters back to the already semisimple tensor decomposition. Empty lambda, r=1, full-length lambda and arbitrarily large d work; there is no output bound on columns. AC inherited. Source Etingof Example 27.2 p.146 is symmetric powers, not Proposition 27.1 as formerly cited. Reader repairs accepted. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-cor-horizontal-pieri-rule-1, f39-b22-5a-cor-horizontal-pieri-rule-2. Risk review complete.

## touched:22:cor-vertical-pieri-rule

Verdict: `amended_repair`. Three proof steps and exact exterior-quotient, sign Specht, LR and vanishing claims checked. Signed averaging kills repeated inputs by permutation pairing; quotienting the average returns the wedge after antisymmetry is derived from repeated u+v inputs. The reverse average fixes alternating tensors. d=0 uses the empty partition; d>r is handled first by exterior vanishing and the impossible size of a vertical strip in <=r rows, avoiding an out-of-domain LR invocation. For d<=r a lattice permutation of distinct letters is precisely 1,...,d; semistandardness allows this exactly for a vertical strip, uniquely. Empty lambda, full-length lambda, d=r and d=r+1 checked. Reader mathematical repairs are sound. Independently read Etingof printed pp.160-161 and corrected the remaining locator to §30.2 Example 30.8(2), not the nonexistent §30.3.1 Proposition 30.8; mirrored metadata in the owning manifest. Statement unchanged, no consumer propagation. AC inherited.

Defect rows: f39-b22-5a-cor-vertical-pieri-rule-1, f39-b22-5a-cor-vertical-pieri-rule-2, f39-b22-5a-cor-vertical-pieri-rule-3. Risk review complete.

## touched:22:prop-littlewood-richardson-coefficients-stabilize-with-rank

Verdict: `amended_repair`. All four steps and nine exact supplier claims checked. First nonempty top row starts with the largest entry there; if it exceeded 1, the prefix would fail at its immediate predecessor, forcing every top-row entry to be 1 and bounding nu_1-lambda_1 by mu_1. Empty top row is treated directly with padded zero coordinates. All new rows below ell(lambda) contain column-1 skew cells; their strictly increasing labels are bounded by ell(mu), proving the sum-of-lengths bound. F2 no longer falsely locates every skew cell at lambda_i+1. r>=max(1,input lengths) preserves the LR supplier domain, including both empty inputs; the sum-of-lengths bound is sufficient for visibility of all nonzero coefficients, not a claim of optimality. Rank-independent tableau counts are compared, not literally identical polynomials in different variable sets. AC inherited. Reader repairs accepted; changed rank hypothesis and padding are reflected in current contract citations and manifest Statement; consumer uses will be checked in scope and recorded for Step 5b. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-prop-littlewood-richardson-coefficients-stabilize-with-rank-1, f39-b22-5a-prop-littlewood-richardson-coefficients-stabilize-with-rank-2, f39-b22-5a-prop-littlewood-richardson-coefficients-stabilize-with-rank-3. Risk review complete.

## touched:22:ex-a-littlewood-richardson-coefficient-greater-than-one

Verdict: `amended_repair`. Read all four verification steps and supplier claims. The three skew cells occupy distinct rows/columns; exactly 112 and 121 are lattice, while 211 fails. Independently enumerated the nine size-six partitions containing (2,1): counts 0,1,1,1,2,1,1,1,0 match the displayed stable product; two other partitions lack containment. The interlacing-shape double sum in F3 evaluates to (a-b+1)(b-c+1)(a-c+2)/2, giving 27,10,10,8,1,8. Shape (2,2,2) has two full columns, not three. Rank-six invocation covers every candidate, rank-three and rank-two vanishing conventions are correct, and 64 is only a consistency check. Source Stembridge confirms the coefficient-count convention; direct finite enumeration proves this example. AC inherited from tensor theorem. Reader repairs accepted; the clarified output-rank caveat is consistent with all actual consumers. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-ex-a-littlewood-richardson-coefficient-greater-than-one-1, f39-b22-5a-ex-a-littlewood-richardson-coefficient-greater-than-one-2. Risk review complete.

## touched:22:cor-minuscule-tensor-product-rule

Verdict: `amended_repair`. All four steps and exact orbit-character, finite-support alternation, Weyl formula, denominator invertibility and multiplicity suppliers checked; Etingof Corollary 30.7 p.160 complete proof agrees. Reindexing the finite orbit for each w gives the shifted alternants. Every non-dominant translate has a simple-coroot pairing exactly -1, so adding rho puts it on that simple wall and its alternant vanishes. Dominant translates use the Weyl formula and invertible denominator; character independence and complete reducibility identify module multiplicities. Distinct gamma give distinct lambda+gamma. omega=0 is the tensor unit; lambda=0 leaves precisely omega as dominant orbit representative; singular lambda still has regular lambda+rho. AC inherited, no action on infinite-support completed series is used. Reader removed Step 2.1's self-citation; no other mathematical change is needed. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-cor-minuscule-tensor-product-rule-1. Risk review complete.

## touched:22:lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient

Verdict: `amended_repair`. All three steps and exact suppliers checked. Multiplication by A(rho) converts each finite simple character to its numerator. For w(mu+rho)=nu+rho, uniqueness of the closed-dominant orbit representative first gives mu=nu, and the trivial stabilizer of a strictly dominant point then gives w=1; these are distinct necessary conclusions. Current F3 states both and invokes the positive-root-pairing supplier. Extraction therefore gives the Kronecker delta and multiplicity. V=0, trivial V, singular mu/nu before the rho shift and empty root system are consistent. All operations are finite, with no Weyl action on arbitrary completed support. Goodman-Wallach Corollaries 7.1.4 and 7.1.6 pp.333-334 complete arguments read. AC inherited. Reader repair accepted. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient-1. Risk review complete.

## touched:22:cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank

Verdict: `amended_repair`. All four counterexample steps and exact Schur, exterior, rank, bialternant and tableau suppliers checked. The single-cell shape (1,1,1)/(1,1) has LR count 1, but its column Schur module in C^2 vanishes; C^3 has a one-dimensional top wedge. F2 now cites both top-exterior dimension/determinant and the vertical-Pieri column identification, rather than treating exterior vanishing as dimension evidence. The two-letter tableau counts are 1 and 2, proving the dimension consistency. The refuted statement is precisely that each nonzero LR coefficient yields a nonzero constituent; a direct sum retaining zero modules remains a valid identity. This caveat is essential and will repair the routed examples-page prose. AC inherited. Reader repairs and current-content clarification accepted; rank-stability use is at positive ranks 2 and 3. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank-1, f39-b22-5a-cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank-2. Risk review complete.

## touched:22:ex-littlewood-richardson-product-s21-times-s1

Verdict: `amended_repair`. All three verification steps and exact suppliers checked. Adding one box legally to (2,1) gives only (3,1),(2,2),(2,1,1), each with unique one-letter LR filling. Rank-three interlacing-shape sum gives 15,6,3,8,3; rank-two column constraints give 3,1,2, while the three-row module vanishes. Thus 24=15+6+3 and 4=3+1 check an already established decomposition, rather than establishing it by dimensions. Input r>=2 covers its two-row supplier; the corrected prose distinguishes coefficient one from nonzero multiplicity at r=2. AC inherited; direct tableau arithmetic is finite. Reader's dimension derivation and row-bound clarification accepted. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-ex-littlewood-richardson-product-s21-times-s1-1. Risk review complete.

## touched:22:thm-steinberg-tensor-product-multiplicity-formula

Verdict: `amended_repair`. All three steps and 15 exact supplier claims checked. The repaired Step 1.1 reindexes sigma=w*tau for each fixed w and invokes Weyl-invariant weight multiplicities; linearity alone cannot pull a general character into an alternant. Extraction solves w(lambda+rho+sigma)=nu+rho for sigma, and w inversion plus sign parity gives the first formula. Weyl invariance and a second inversion give the equivalent form with nu+rho-w(lambda+rho). W and all weight sets are finite; nu absent yields the cancellation zero, and trivial factors and the empty root-system case are consistent. Exact sign-multiplicativity supplier yields sign(w^-1)=sign(w), without needing length equality. Goodman-Wallach Corollary 7.1.7 p.334 complete derivation read; variable relabelling matches both displayed formulas. AC inherited, no infinite-support Weyl action. Reader repair accepted. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-thm-steinberg-tensor-product-multiplicity-formula-1. Risk review complete.

## touched:22:ex-three-tensor-three-for-sl3

Verdict: `amended_repair`. All three verification steps and exact type-A root, matrix, fundamental-weight, minuscule, tensor-action, classification and complete-reducibility suppliers checked. Coordinate weights epsilon1,epsilon2,epsilon3 have the displayed fundamental coordinates; positive-coroot pairings of omega1 are 1,0,1. Reflections permute coordinates, so the three-element orbit and its two dominant translates are correct. Matrix units establish simplicity of C^3 and e1 its highest vector. Flip projections identify quotient squares with subspaces; basis counts give 6 and 3, and nonzero killed-by-raising vectors give inclusions of the two simple modules by complete reducibility. The already proved multiplicity-free decomposition forces these inclusions to exhaust the subspaces. Zero highest weight is absent; no inference from non-dominance of an individual weight is needed. Etingof pp.146 and 160 read for standard module and minuscule rule. AC inherited; reader computation repairs accepted. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-ex-three-tensor-three-for-sl3-1. Risk review complete.

## touched:22:cor-racah-speiser-tensor-product-algorithm

Verdict: `amended_repair`. All four steps and exact Steinberg, real Weyl-chamber, stabilizer, shifted-positivity and sign suppliers checked. Weight integrality puts psi+rho in the real root span. A regular orbit has a unique strictly dominant representative and transporter, and positive integral simple pairings minus rho's pairings 1 are nonnegative integral. Regrouping uses w^-1(nu+rho)=psi+rho, so w is exactly u(phi), not u(phi)^-1. Irregular groups pair under right multiplication by a fixing reflection with opposite signs (in fact conjugacy to regular nu+rho already makes those groups empty). All sums are finite; nonzero coefficient requires at least one regular witness. Singular input highest weights and trivial modules are admitted, while relative regularity is always tested after adding lambda+rho. Goodman-Wallach p.334 formula matches the regrouped input. AC inherited. Reader's restricted chamber/transport assertions and inverse correction accepted. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-cor-racah-speiser-tensor-product-algorithm-1, f39-b22-5a-cor-racah-speiser-tensor-product-algorithm-2. Risk review complete.

## touched:22:ex-clebsch-gordan-decomposition-for-sl2

Verdict: `amended_repair`. All five verification steps and exact sl2, rank-one roots, rho, classification and Racah-Speiser suppliers checked. Shift t=a+b+1-2j vanishes exactly for j=(a+b+1)/2 within 0..b, equivalent to a<b and a+b odd. Negative shifts start at floor((a+b+1)/2)+1, excluding the wall in odd parity. Positive outputs and reflected negative outputs have the same parity, and their overlap below b-a cancels when b>a; when b<=a no reflected family exists. Survivors are |a-b|..a+b in steps of two; arithmetic progression dimensions sum to (a+1)(b+1). Zero factors, a=b=0, a=b, b=a+1, and both parity cases checked. Parameters and output labels are integers; AC inherited. Reader index/domain/existence repairs accepted; the page's unconditional wall assertion is separately confirmed and repaired below. The carrier verdict is amended for the current-content manifest reconciliation.

Defect rows: f39-b22-5a-ex-clebsch-gordan-decomposition-for-sl2-1, f39-b22-5a-ex-clebsch-gordan-decomposition-for-sl2-2. Risk review complete.

## page:22:tensor-product-multiplicities-and-littlewood-richardson

Verdict: `amended_repair`. Read both frontmatter lists and the entire A-page summary, checked against all reviewed item claims. Reader's replacement of 'completing the square' by Weyl numerator coefficient extraction is correct. The tableau paragraph accurately distinguishes the locally proved admissible expansion from the imported complete Macdonald §I.9 lattice-word theorem, and the zero/minuscule/AC descriptions agree with supplier conventions. Reconciled the page requires with its existing four-prerequisite manifest, adding the symmetric-function and branching/Young-graph supplier pages; their Schur/tableau and Young-rule items are actual proof inputs. Item order remains the collected scope anchor, with no page/item additions. Manifest mirrors for touched carriers now match current Statements, deps, titles, provenance and sources. Untouched definition mirrors are preserved for the Step 5b lead. No additional mathematical page defect remains.

Defect rows: f39-b22-5a-tensor-product-multiplicities-and-littlewood-richardson-1, f39-b22-5a-tensor-product-multiplicities-and-littlewood-richardson-2, f39-b22-5a-tensor-product-multiplicities-and-littlewood-richardson-3. Risk review not applicable (page).

## reader:22:1

Verdict: `confirmed_fatal`. Current pre-Alpha page exactly matched the post-reader raw hash f8e2495a2b0e3ab8f691ad63d72ee6f18a8bbe6b3e8aa7453911f4baea393bea. Its unconditional 'unique irregular weight' assertion fails at a=b=0. Independently reviewed Clebsch-Gordan F3 and Steps 1.2-3.1: the wall is present exactly when a<b and a+b is odd. Repaired the summary by adding 'when present', preserving all computation and references. Same underlying defect as refuter:22:1, bound to the same observed carrier; both obligations share one closed row.

Defect rows: f39-b22-5a-tensor-product-multiplicities-and-littlewood-richardson-examples-1. Risk review not applicable (page).

## reader:22:2

Verdict: `confirmed_fatal`. Independently reviewed the rank counterexample, LR theorem and Schur zero-module convention. The coefficient c^(1,1,1)_(1,1),(1)=1 is a one-box count but S_(1,1,1)(C^2)=0. Including zero summands preserves a direct-sum identity, so the page's stronger unconditional row-bound assertion is false. Repaired the summary to require the bound for nonzero constituents and explicitly allow zero modules above rank. Same observed carrier and same underlying defect as refuter:22:2; both obligations share one closed row.

Defect rows: f39-b22-5a-tensor-product-multiplicities-and-littlewood-richardson-examples-2. Risk review not applicable (page).

## refuter:22:1

Verdict: `confirmed_fatal`. Independent current-page and exact Clebsch-Gordan review confirms the original missing wall-existence hypothesis: a=b=0 has no irregular weight, while a<b and odd a+b is exactly the existence condition. The repaired page says 'when present'. This is the identical finding and observed carrier as reader:22:1; share its one closed defect row, retaining both routed obligations.

Defect rows: f39-b22-5a-tensor-product-multiplicities-and-littlewood-richardson-examples-1. Risk review not applicable (page).

## refuter:22:2

Verdict: `confirmed_fatal`. Exact current Schur zero-module definition and the independently checked one-box LR count confirm the original overstrong page assertion. The rank bound selects nonzero constituents; zero-module terms may remain in the identity. Current prose states both. This is the same original defect and observed carrier as reader:22:2 and shares its one closed defect row; it is not rendered false-positive by the repair.

Defect rows: f39-b22-5a-tensor-product-multiplicities-and-littlewood-richardson-examples-2. Risk review not applicable (page).

## Sources independently consulted

- [Etingof, MIT 18.755](https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf): printed pp.146-147 (standard, exterior, symmetric representations and polynomial/rational highest weights), pp.158-160 (Definition 30.1, Lemma 30.3, Proposition 30.4 and Corollaries 30.5/30.7, including complete relevant proofs), p.161 (Example 30.8(2), exterior Pieri). Footnote 15 distinguishes the highest coroot from the coroot of the highest root.
- [Stembridge, A Concise Proof of the Littlewood–Richardson Rule](https://www.combinatorics.org/ojs/index.php/eljc/article/download/v9i1n5/pdf): printed pp.2-3, complete free-cell construction, maximal-column involution, alternant cancellation and corollaries. Its comparison with lattice-word counts is stated as an exercise; the local carrier does not invent that bijection.
- [Macdonald, Symmetric Functions and Hall Polynomials](https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf): complete §I.9, printed pp.142-148 (PDF indices 152-158), equations (9.1)-(9.7), compatibility and recording-tableau/inverse arguments. The exact imported assertion is that the coefficient of s_nu in s_lambda*s_mu is the LR lattice-word count with rows read right to left from the top.
- [Goodman–Wallach, Symmetry, Representations, and Invariants](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/goodwallx.pdf): §5.5.4, printed p.274, Theorem 5.5.22 and complete proof (PDF index 292); §7.1, printed pp.333-334, Corollaries 7.1.4/7.1.6/7.1.7 and complete coefficient-extraction/tensor arguments (PDF indices 351-352).
- [Seynnaeve, Representation Theory](https://timseynnaeve.github.io/misc/Rep_Theory_Notes.pdf): §12.1, printed pp.59-60, Proposition 12.1 and proof sketch. The source acknowledges omitted classification proofs; Goodman–Wallach supplies the independent exact rational-classification input.
- [Knapp, Lie Groups Beyond an Introduction](https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf): §IX.8 Problem 17, printed pp.611-612 and its complete printed solution on p.747; adjacent solutions through p.748 were read. The signed shifted-dominant regrouping matches Racah–Speiser and the local rank-one specialization. Supporting bibliography locators beyond these passages were not exhaustively audited.

Source PDFs were fetched independently and relevant text read using the PDF parser. No complete source book was claimed read. Exact dependency claim sections were checked for all current batch item links/deps (85 distinct IDs including the 25 owned carriers); this is a consumer-use review, not a recursive audit of every published supplier proof.


## Snapshot comparison and final carrier changes

Pre/post snapshots show 18 item-byte repairs, five contract-only routed changes, and the A-page prose change. Before Alpha edits, current raw item hashes matched the post-reader snapshot. Only two item files were amended here: Bender–Knuth Proof 4.1 and the vertical-Pieri source locator. Neither changes a Statement or Definition. Both have ai-altered proof provenance already; neither has a verification.judge record to invalidate. Current owning manifest mirrors for all touched carriers were synchronized to their independently reviewed Statements, deps, sources, provenance and titles. This metadata reconciliation makes 16 otherwise accepted reader-result carrier verdicts amended_repair; it does not assert additional mathematical changes. Metadata-only touched carriers use reviewed_no_defect/audit_enrichment with empty defect_ids.

The A-page requires now agrees with its existing manifest, and both examples-page defects are surgically repaired. Collected item ordering anchors, stable IDs, scope files and pre/post snapshots were preserved.

| Carrier edited here | Final raw SHA-256 |
|---|---|

| `items/lem-bender-knuth-involutions-on-semistandard-tableaux.md` | `2a12e5235339339a5c3bb5d4cabaf781b626c66407e81291de8f40b05e6b691e` |

| `items/cor-vertical-pieri-rule.md` | `539a5e3fd37eea98b2cd7d6b189dffbc9c128f4ef43c4e39bf46520a35a10e2f` |

| `library/lie-theory/tensor-product-multiplicities-and-littlewood-richardson.md` | `307fb98908b11b37da6d3eb44d5afa19d02de49521581099b9a5f0ae73b4df89` |

| `library/lie-theory/tensor-product-multiplicities-and-littlewood-richardson-examples.md` | `6b671e71971b2bb45a7ac14327064e37d38ef0f39f760ae5d2a8cdba07337e00` |


The decisions intentionally have no subject_sha256 stamps: the engine owns stamping and current carrier gates. Raw file hashes above are audit evidence only.


## Consumer impacts, published findings and Step 5b alerts

Direct dependency and reference search for every touched supplier found no outside-batch consumer. The positive-rank/padding correction to rank stability is used by the owned rank counterexample at ranks 2 and 3. The example/output-rank and Clebsch–Gordan existence clarifications are used only by the owned companion page; its corrected prose uses their actual current claims. The admissible-count lemma still supplies exactly the coefficient/multiplicity statements used by the owned LR theorem. No consumer needed a further Statement/Definition repair, so no extra hop was opened.

The owned cross-batch input preserves all 23 prior rows, corrects obsolete descriptions that confused multiplying by A(rho) with alternation of ch V, records current supplier-use evidence, and adds the two existing page prerequisites (25 records total). The canonical dependency ledger note is maintained; refresh succeeded. No proposed withdrawal was removed or added. Step 5b impact-window and cross-group verdict work remains engine/lead-owned.

No defective published item was identified. Published content and the published-consumer ledger were left unchanged, so no published-ledger lock was needed.

Two untouched item manifest mirrors remain outside the routed item obligations: `def-schur-module-and-schur-polynomial-character` has an older abbreviated mirror, while `def-littlewood-richardson-tableau-and-coefficient` still has an unbound nu and incorrect empty coefficient c^nu_{lambda,lambda}=1 rather than current c^lambda_{lambda,empty}=1. The current item definitions and contracts are sound and their pre/post fingerprints are unchanged. Alert for the Step 5b lead: normalize those manifest mirrors to the current definitions without changing item bytes or inventing a mathematical item repair.


## Local validation and handoff

- Initial `node tools/risk-report.mjs research/frontier-39-analysis-30-batch-22.proof-contracts.json`: exit 0; 23 HIGH/CRITICAL items routed. Each received a specific complete risk_review before moving higher in dependency order. Final rerun with `--require-reviewed`: exit 0, all required reviews complete.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-22.proof-contracts.json --strict`: exit 0; 25/25 entries, zero errors/warnings. An initial unanchored boundary-evidence sentence was mechanically corrected to name the Definition; no defect row was created for that format failure.
- Reflow on the two edited item paths: exit 0, both unchanged by formatter. `node tools/tsx-run.mjs tools/precheck.mts` on those same paths: exit 0, 2/2 passing.
- `node tools/rendercheck.mjs` on both edited items and both edited pages: exit 0, four files, all frontmatter/math parsed.
- Final batched command after all item edits and reflow: `node tools/proof-layout.mjs items/lem-bender-knuth-involutions-on-semistandard-tableaux.md items/cor-vertical-pieri-rule.md`: exit 0; two items, nine numbered steps, zero defects.
- Independently computed signed rank-one contributions for all 169 pairs 0<=a,b<=12 and their dimension sums; all matched the general formula. Direct enumeration of the nine containing size-six skew shapes gave LR counts 0,1,1,1,2,1,1,1,0. These finite checks corroborate the proofs.
- Exact local obligation accounting: 28 decisions (23 touched, one page, two reader and two refuter finding obligations), 37 distinct closed defect rows, complete repair confidence 1. Refuter decisions retain scope-named refuter:22:K obligations with route flagged; each explicitly identifies the matching reader obligation and shares exactly its single underlying defect row. All owed obligations are decided, without additional decisions for untouched items.
- The defect-ledger append validator accepted every batch-22 row. A temporary filtered copy of all 37 owned rows validated with exit 0 and zero errors. The generated view was refreshed successfully. Run-wide validation was attempted honestly and failed with TypeError row.evidence.some is not a function on outside batch-11 rows using string evidence; it is not a batch-22 mathematical blocker, and those rows were not edited. No mechanical defect row was manufactured.

External mechanical alert for the engine owner: normalize the following existing ledger rows to evidence arrays of path-bearing objects, preserving their mathematical ownership. At the validation attempt these exact rows blocked run-wide validation:


- `frontier-39-analysis-30-5a-b11-lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set` (subject `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`).

- `frontier-39-analysis-30-5a-b11-ex-coercive-nonsymmetric-form-can-have-nonreal-galerkin-eigenvalues` (subject `ex-coercive-nonsymmetric-form-can-have-nonreal-galerkin-eigenvalues`).

- `frontier-39-analysis-30-5a-b11-thm-garding-inequality-for-a-divergence-form-elliptic-operator` (subject `thm-garding-inequality-for-a-divergence-form-elliptic-operator`).

- `frontier-39-analysis-30-5a-b11-cor-a-sufficiently-large-shift-is-coercive` (subject `cor-a-sufficiently-large-shift-is-coercive`).

- `frontier-39-analysis-30-5a-b11-def-formal-adjoint-and-adjoint-weak-dirichlet-problem` (subject `def-formal-adjoint-and-adjoint-weak-dirichlet-problem`).

- `frontier-39-analysis-30-5a-b11-thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation` (subject `thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation`).

- `frontier-39-analysis-30-5a-b11-def-shifted-elliptic-solution-operator` (subject `def-shifted-elliptic-solution-operator`).

- `frontier-39-analysis-30-5a-b11-lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem` (subject `lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem`).

- `frontier-39-analysis-30-5a-b11-thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent` (subject `thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent`).

- `frontier-39-analysis-30-5a-b11-thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems` (subject `thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems`).

- `frontier-39-analysis-30-5a-b11-cor-elliptic-kernel-and-cokernel-are-finite-dimensional` (subject `cor-elliptic-kernel-and-cokernel-are-finite-dimensional`).

- `frontier-39-analysis-30-5a-b11-lem-eigenbasis-expansion-in-the-form-norm` (subject `lem-eigenbasis-expansion-in-the-form-norm`).

- `frontier-39-analysis-30-5a-b11-rem-a-repeated-eigenvalue-has-no-canonical-eigenfunction-basis` (subject `rem-a-repeated-eigenvalue-has-no-canonical-eigenfunction-basis`).

- `frontier-39-analysis-30-5a-b11-cor-noninvertible-elliptic-shifts-form-a-discrete-set-in-the-self-adjoint-case` (subject `cor-noninvertible-elliptic-shifts-form-a-discrete-set-in-the-self-adjoint-case`).

- `frontier-39-analysis-30-5a-b11-cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem` (subject `cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem`).

- `frontier-39-analysis-30-5a-b11-thm-courant-fischer-minimax-for-elliptic-eigenvalues` (subject `thm-courant-fischer-minimax-for-elliptic-eigenvalues`).

- `frontier-39-analysis-30-5a-b11-lem-elliptic-resolvent-identity` (subject `lem-elliptic-resolvent-identity`).

- `frontier-39-analysis-30-5a-b11-ex-dirichlet-laplacian-eigenpairs-on-an-interval` (subject `ex-dirichlet-laplacian-eigenpairs-on-an-interval`).

- `frontier-39-analysis-30-5a-b11-cex-elliptic-eigenvalues-need-not-be-simple` (subject `cex-elliptic-eigenvalues-need-not-be-simple`).

- `frontier-39-analysis-30-5a-b11-ex-resolvent-norm-blows-up-when-a-real-parameter-approaches-an-eigenvalue` (subject `ex-resolvent-norm-blows-up-when-a-real-parameter-approaches-an-eigenvalue`).

- `frontier-39-analysis-30-5a-b11-cex-elliptic-fredholm-solvability-can-fail-at-an-eigenvalue` (subject `cex-elliptic-fredholm-solvability-can-fail-at-an-eigenvalue`).

- `frontier-39-analysis-30-5a-b11-ex-neumann-laplacian-has-a-zero-constant-mode` (subject `ex-neumann-laplacian-has-a-zero-constant-mode`).

- `frontier-39-analysis-30-5a-b11-ex-shift-removes-a-negative-zero-order-obstruction` (subject `ex-shift-removes-a-negative-zero-order-obstruction`).

- `frontier-39-analysis-30-5a-b11-rem-neumann-spectrum-and-the-constant-zero-mode` (subject `rem-neumann-spectrum-and-the-constant-zero-mode`).


Batch-22 mathematical adjudication is complete with no escalation or unresolved local risk review. Remaining lead work is the two unrouted manifest mirrors and the outside ledger-schema failure. No judging, stamping, gate battery, agent dispatch, stage transition, publication, commit or push was performed.

