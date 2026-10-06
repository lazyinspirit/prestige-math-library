# Reader 24 — batch 24, frontier-39-analysis-30

Independent review completed; no judgment or certification is issued.

## Opened inventory

Pages: `library/lie-theory/primitive-ideals-and-duflo-theorem.md` (A), `library/lie-theory/primitive-ideals-and-duflo-theorem-examples.md` (B).

All 20 assigned items were read in supplier-before-consumer order:

- `items/def-annihilator-ideal-of-a-lie-algebra-module.md`
- `items/def-primitive-ideal-of-an-enveloping-algebra.md`
- `items/prop-annihilators-of-simple-highest-weight-modules-are-primitive.md`
- `items/prop-primitive-ideals-are-prime-in-the-noncommutative-sense.md`
- `items/lem-dixmiers-lemma-for-countable-dimensional-algebras.md`
- `items/prop-a-primitive-ideal-determines-a-central-character.md`
- `items/def-central-reduction-of-the-enveloping-algebra.md`
- `items/prop-verma-annihilator-contains-the-central-character-ideal.md`
- `items/lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal.md`
- `items/def-associated-graded-variety-of-a-two-sided-ideal.md`
- `items/prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant.md`
- `items/lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight.md`
- `items/cor-primitive-ideals-are-partitioned-by-dot-orbit-central-character.md`
- `items/lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters.md`
- `items/rem-highest-weights-can-have-the-same-primitive-ideal.md`
- `items/ex-primitive-ideals-of-usl2-at-a-generic-central-character.md`
- `items/ex-annihilator-of-the-trivial-sl2-module.md`
- `items/ex-associated-variety-of-a-finite-dimensional-simple-annihilator.md`
- `items/cex-an-intersection-of-two-primitive-ideals-need-not-be-primitive.md`
- `items/cex-the-central-character-does-not-determine-the-primitive-ideal.md`

External dependencies: the direct dependency definitions and statements were opened; the detailed supplier inventory below distinguishes statement inspection from proof-section reading.

## Initial obligations (closed by the repairs below)

Repair the fixed-degree symbol identity; module/ideal confusion in primeness; generic-fibre existence; unsupported noninjectivity inference in the remark and counterexample; the incorrect sl2 weight spacing in that counterexample; and the misattributed Dixon reference in Dixmier. Inspect affected contracts and preserve only supported clauses. Check the operator norm and exponential group/derivative justification in the coadjoint proof. No Duflo proof is supplied by the present inventory; assess title and prose against actual contents, independently of scaffold notes.

## Repairs completed before validation

- `def-primitive-ideal-of-an-enveloping-algebra`: the quotient admits a faithful simple module (its annihilator there is zero); qualify the Duflo comment to finite-dimensional complex semisimple Lie algebras.
- `prop-primitive-ideals-are-prime-in-the-noncommutative-sense`: restore `AB ⊆ I` to Given; replace the false assertion that module subsets are two-sided ideals by their finite-sum submodule definition and explicit stability and associativity calculations.
- `lem-dixmiers-lemma-for-countable-dimensional-algebras`: remove the misattributed J. Dixon bibliography entry: its URL is Etingof's notes, whose title page and Lemma 7.2 were read directly.
- `lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal`: use the fixed-degree quotient map `sigma_n`. With principal symbols, `x=h`, `u=h²+f` in sl2 gives `[h,u]=-2f` of degree one while `D_h sigma_2(u)=0`; this disproves the original unqualified identity. The induced degree-n identity follows from filtration preservation.
- `lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight`: explicitly define the dot action in the statement and its orbit quotient.
- `prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant`: choose an induced submultiplicative operator norm, derive the derivative identity on linear generators and extend by the polynomial product rule, and supply the exponential group/inverse identity by the absolutely convergent series and binomial formula.
- `lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters`: carry fixed-degree symbols into its fact; identify the displayed expression as the symbol of C rather than C itself; give the least-degree/division argument actually needed from polynomial Euclideanity. Its normal forms, polynomial divisibilities, finite root-chain endpoints, repeated-root case c=-1/2, and finite-dimensional obstruction were checked independently.
- `rem-highest-weights-can-have-the-same-primitive-ideal`: carry AC, semisimplicity and the actual local supplier; use weights 1/2 and -5/2 at Casimir value 5/8 to establish noninjectivity separately from the two distinct ideals over chi_0. Explain simplicity of M(-2), and replace the misleading statement about invertibility on a vector by nonzero eigenvalue.
- `ex-primitive-ideals-of-usl2-at-a-generic-central-character`: establish a weight exists by solving lambda(lambda+2)=2chi(Omega) over C, add algebraic closure to deps, and remove an irrelevant tautology from F3. This closes existence, not only uniqueness, of the primitive fibre.
- `ex-annihilator-of-the-trivial-sl2-module`: carry AC into Given, justify the augmentation kernel by killing all nonempty tensor words, and cite the lemma that actually proves Omega generates the center (rank-one polynomiality alone does not identify a specific generator).
- `ex-associated-variety-of-a-finite-dimensional-simple-annihilator`: replace the false inclusion gr I ⊆ S^d by (gr I)_d ⊆ S^d; describe vanishing at zero by zero constant term, which includes the zero polynomial. The supplied finite polarization identity was checked by expansion: only monomials using every index survive, with coefficient d!.
- `cex-the-central-character-does-not-determine-the-primitive-ideal`: correct weights to -n-2-2k; remove the unsupported and unnecessary dimension n+1; use finite spanning images instead of assigning a numerical dimension to an infinite-dimensional space; align the proof-technique label; explicitly prove the separate noninjectivity assertion using 1/2 and -5/2.

No published or other-batch carrier has been edited. No withdrawal was made.

## Local validation

- `node tools/tsx-run.mjs tools/reflow.mts items/def-primitive-ideal-of-an-enveloping-algebra.md` — exit 0: unchanged items/def-primitive-ideal-of-an-enveloping-algebra.md
- `node tools/tsx-run.mjs tools/precheck.mts items/def-primitive-ideal-of-an-enveloping-algebra.md` — exit 0: 0 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/prop-primitive-ideals-are-prime-in-the-noncommutative-sense.md` — exit 0: unchanged items/prop-primitive-ideals-are-prime-in-the-noncommutative-sense.md
- `node tools/tsx-run.mjs tools/precheck.mts items/prop-primitive-ideals-are-prime-in-the-noncommutative-sense.md` — exit 0: PASS items/prop-primitive-ideals-are-prime-in-the-noncommutative-sense.md (direct) /  / 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-dixmiers-lemma-for-countable-dimensional-algebras.md` — exit 0: unchanged items/lem-dixmiers-lemma-for-countable-dimensional-algebras.md
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-dixmiers-lemma-for-countable-dimensional-algebras.md` — exit 0: PASS items/lem-dixmiers-lemma-for-countable-dimensional-algebras.md (contradiction) /  / 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal.md` — exit 0: unchanged items/lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal.md
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal.md` — exit 0: PASS items/lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal.md (direct) /  / 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight.md` — exit 0: unchanged items/lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight.md
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight.md` — exit 0: PASS items/lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight.md (direct) /  / 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant.md` — exit 0: unchanged items/prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant.md
- `node tools/tsx-run.mjs tools/precheck.mts items/prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant.md` — exit 0: PASS items/prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant.md (direct) /  / 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters.md` — exit 0: unchanged items/lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters.md
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters.md` — exit 0: PASS items/lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters.md (direct) /  / 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/rem-highest-weights-can-have-the-same-primitive-ideal.md` — exit 0: unchanged items/rem-highest-weights-can-have-the-same-primitive-ideal.md
- `node tools/tsx-run.mjs tools/precheck.mts items/rem-highest-weights-can-have-the-same-primitive-ideal.md` — exit 0: 0 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-primitive-ideals-of-usl2-at-a-generic-central-character.md` — exit 0: unchanged items/ex-primitive-ideals-of-usl2-at-a-generic-central-character.md
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-primitive-ideals-of-usl2-at-a-generic-central-character.md` — exit 0: PASS items/ex-primitive-ideals-of-usl2-at-a-generic-central-character.md (direct) /  / 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-annihilator-of-the-trivial-sl2-module.md` — exit 0: unchanged items/ex-annihilator-of-the-trivial-sl2-module.md
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-annihilator-of-the-trivial-sl2-module.md` — exit 0: PASS items/ex-annihilator-of-the-trivial-sl2-module.md (direct) /  / 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-associated-variety-of-a-finite-dimensional-simple-annihilator.md` — exit 0: unchanged items/ex-associated-variety-of-a-finite-dimensional-simple-annihilator.md
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-associated-variety-of-a-finite-dimensional-simple-annihilator.md` — exit 0: PASS items/ex-associated-variety-of-a-finite-dimensional-simple-annihilator.md (direct) /  / 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/cex-the-central-character-does-not-determine-the-primitive-ideal.md` — exit 0: unchanged items/cex-the-central-character-does-not-determine-the-primitive-ideal.md
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-the-central-character-does-not-determine-the-primitive-ideal.md` — exit 1: FAIL items/cex-the-central-character-does-not-determine-the-primitive-ideal.md: strategy-missing(discharge-contradiction-final) /  / 1 checked, 1 failing

A-page prose repair: restrict the AC summary to Harish-Chandra parametrisation and semisimple centre structure, avoiding the original contradictory suggestion that every mention of the centre needs AC while Dixmier does not. Both titles are read as topic labels: the A summary explicitly limits supplied content to algebraic prerequisites and denies a Duflo proof. No missing Duflo result is claimed established here.

The first counterexample precheck failed because the added generic argument followed the contradiction discharge. Moved the generic argument before the contradiction branch, preserving a final discharge; rerunning its reflow and precheck is required.

## Opened external supplier inventory

The following 74 direct external suppliers were opened. All are currently published. Unless explicitly noted below, inspection was of the mathematical definition/statement used by this batch, rather than a complete independent audit of its transitive proof closure.

- `items/cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field.md`
- `items/cor-antidominant-verma-modules-are-simple.md`
- `items/cor-central-characters-are-dot-weyl-orbits.md`
- `items/cor-complex-power-series-sums-are-analytic.md`
- `items/cor-complex-power-series-sums-have-derivatives-of-all-orders.md`
- `items/cor-independent-set-is-no-larger-than-a-finite-spanning-set.md`
- `items/cor-polynomial-ring-over-a-field-is-euclidean.md`
- `items/cor-rational-function-field-as-a-fraction-field.md`
- `items/cor-the-center-is-a-polynomial-algebra-of-rank-many-generators.md`
- `items/cor-verma-irreducibility-criterion-from-shapovalov-determinants.md`
- `items/def-algebraic-and-transcendental-elements.md`
- `items/def-axiom-of-choice.md`
- `items/def-cartan-subalgebra-of-a-lie-algebra.md`
- `items/def-central-character-of-a-lie-algebra-module.md`
- `items/def-classical-affine-algebraic-set-with-empty-boundaries.md`
- `items/def-classical-affine-coordinate-ring.md`
- `items/def-classical-vanishing-ideal.md`
- `items/def-complex-numbers-and-arithmetic.md`
- `items/def-countable.md`
- `items/def-derivation-of-a-lie-algebra.md`
- `items/def-dimension.md`
- `items/def-division-ring.md`
- `items/def-endomorphism-ring-of-a-module.md`
- `items/def-field-of-fractions.md`
- `items/def-harish-chandra-projection.md`
- `items/def-highest-weight-vector-and-cyclic-highest-weight-module.md`
- `items/def-killing-form-of-a-semisimple-lie-algebra.md`
- `items/def-left-and-right-modules.md`
- `items/def-left-right-and-two-sided-ideal.md`
- `items/def-normalizer-of-a-lie-subalgebra.md`
- `items/def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra.md`
- `items/def-polynomial-evaluation-at-an-endomorphism.md`
- `items/def-prime-and-maximal-ideals.md`
- `items/def-quadratic-casimir-element.md`
- `items/def-root-and-root-space-relative-to-a-cartan-subalgebra.md`
- `items/def-root-reflections-and-the-weyl-group-action.md`
- `items/def-simple-module.md`
- `items/def-special-linear-lie-algebra-sl-two.md`
- `items/def-sum-and-product-of-ideals.md`
- `items/def-universal-enveloping-algebra-as-a-tensor-quotient.md`
- `items/def-verma-module.md`
- `items/lem-central-action-on-a-cyclic-highest-weight-module-is-scalar.md`
- `items/lem-determinant-trick-for-nakayama.md`
- `items/lem-exponential-series-has-infinite-radius.md`
- `items/lem-harish-chandra-projection-computes-highest-weight-scalars.md`
- `items/lem-subset-of-countable.md`
- `items/prop-associated-graded-of-the-pbw-filtration-is-commutative.md`
- `items/prop-casimir-eigenvalue-on-a-highest-weight-module.md`
- `items/prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra.md`
- `items/prop-weights-of-a-verma-module-lie-below-lambda.md`
- `items/thm-algebra-of-complex-derivatives.md`
- `items/thm-cayley-hamilton.md`
- `items/thm-chain-rule-for-complex-derivatives.md`
- `items/thm-chevalley-shephard-todd-for-finite-weyl-groups.md`
- `items/thm-classical-affine-zero-loci-form-zariski-closed-sets.md`
- `items/thm-complex-analytic-functions-are-holomorphic.md`
- `items/thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition.md`
- `items/thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights.md`
- `items/thm-harish-chandra-isomorphism-for-the-center.md`
- `items/thm-n-cross-n-countable.md`
- `items/thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra.md`
- `items/thm-product-of-countable.md`
- `items/thm-proper-ideal-contained-in-maximal-ideal.md`
- `items/thm-quotient-is-field-iff-ideal-maximal.md`
- `items/thm-quotient-ring-universal-property.md`
- `items/thm-r-uncountable.md`
- `items/thm-ring-homomorphism-kernel-is-an-ideal.md`
- `items/thm-schurs-lemma-for-modules.md`
- `items/thm-simple-transcendental-extension-is-rational-expressions-in-the-generator.md`
- `items/thm-sum-and-product-of-ideals-are-ideals.md`
- `items/thm-symmetric-invariants-restrict-to-weyl-invariants.md`
- `items/thm-taylor-expansion-holomorphic-function.md`
- `items/thm-the-complex-numbers-are-algebraically-closed.md`
- `items/thm-verma-module-has-a-unique-simple-quotient.md`

Proof text additionally inspected for the enveloping-action extension, ring-kernel theorem, ideal-sum/product theorem, PBW ordered-basis theorem, unique Verma quotient theorem, Schur lemma, rational-function-field corollary, simple transcendental-extension theorem, maximal-ideal/field theorem, countable-subset lemma, countable-product theorem, finite-spanning independent-set corollary, algebraic closure of C, Verma irreducibility criterion, antidominant Verma simplicity, and Verma weights. This is supplier-interface review, not a recertification of those published items.

Contract review also corrected the unique-simple-quotient boundary's fact label from F2 to F1 and replaced the partition contract's inaccurate claim of an explicit denial of equality by the actual logical limit of the statement. The repaired proof entries were regenerated from current full fact paragraphs and numbered steps; affected boundary clauses were updated. No changed carrier originally contained `verification.judge`; no judge or audit record was added.

Final counterexample reflow was unchanged and precheck passed (exit 0, 1 checked, 0 failing) after adopting the canonical phase numbering 1.1, 1.2, 1.3, 2.1, 3.1. Definitions and the remark correctly produced 0 proof checks; the ten changed proof-bearing items each passed.

`node tools/proof-layout.mjs` was run once after the final item edits and formatters on all twelve changed item paths in one command: exit 0, **12 items, 53 steps, 0 defects**.

`node tools/rendercheck.mjs` on those twelve items and both assigned pages: exit 0, **14 files**, all math spans parsed by real KaTeX and all frontmatter by the renderer's YAML parser.

## Source evidence and limitations

- Independently opened Etingof's *Representations of Lie Groups*, MIT OCW full notes: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf. The title page identifies Pavel Etingof, disproving the separate Dixon attribution. Read §7.2, Lemma 7.2 and its complete short proof, printed p.38: Schur's division ring, the independent inverses (x-a)^(-1), and injection into a cyclic countably spanned simple module. Read §25.1, Definitions 25.1–25.2 and the primeness argument, p.123; Theorem 25.4 and its nonunique-highest-weight note, p.124. The theorem uses earlier projective-functor suppliers and is not a proof supplied by this batch. Its note supports the generic same-annihilator phenomenon independently of the authored remark.
- Opened Gaddis, *The Weyl algebra and its friends*, https://arxiv.org/pdf/2305.01609. Checked the simplicity criterion in §2, printed p.2 (Joseph, no two roots with positive-integer difference), and §3.3, printed p.7, footnote 22 (repeated roots allowed). These source statements cross-check the locally verified root-chain proof and its repeated-root case; I did not read Joseph's original paper or claim to have audited its proof.
- Barbasch's cells notes and Vogan's 1986 CMS paper failed to fetch through the browser; a bounded curl attempt for Barbasch also timed out. Their precise bibliography locators were not independently checked. Block's original paper and Fadeev's thesis were not reread. No mathematical conclusion was accepted merely because those bibliography entries or prior author notes exist. The local PBW, ideal, analytic and polarization arguments and the opened supplier statements supply the reviewed algebraic claims. The broad historical comment about Joseph/Kazhdan–Lusztig theory remains contextual; no classification theorem is consumed.
- Opened the exact batch manifest, reader brief, pages, items and contract data. Some large preliminary outputs (the scaffold manifest, initial contract dump and old author notes) were truncated; required current mathematical sections were fetched separately. This review claims no full reading of those historical notes and no whole-library or whole-transitive-closure audit. The 74 original-manifest external supplier statements/definitions were inspected in their used domains; the quoted published status of the CST supplier was correctly treated as published. No in-run external supplier finding arose.

## Page verdicts and remaining obligations

- `primitive-ideals-and-duflo-theorem` (A): no remaining mathematical defect identified in the supplied algebraic prefix after the listed item and AC-prose repairs. The page openly stops before Duflo surjectivity, nilpotent-orbit classification and localization; its topic title is not used as evidence that those results were proved. No withdrawal proposed.
- `primitive-ideals-and-duflo-theorem-examples` (B): no remaining mathematical defect identified after the item repairs. The summary correctly describes the associated variety, intersection witness, multiple ideals over an integral central character, augmentation ideal, and generic singleton fibre. B-page prose was left intact.

No uneditable confirmed or suspected mathematical defect remains from this review. No operational blocker remains. Bibliographic access limits above prevent claiming a complete source-locator audit. The findings JSON therefore has an empty findings array.

Final strict contract check: `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-24.proof-contracts.json --strict` — exit 0, 0 errors, 0 warnings, 20/20 items checked. This verifies contract structure and exact citation correspondence, not mathematical acceptance.
