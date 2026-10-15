# Batch 11 Step 3a adjudication

Run `hopf-hecke-unfinished-15-2026-10-15`; group `batch-11`. Only batch 11 is editable. Four obligations are owed.

## Level 0 — regular-trace definition

The current source initially matched the raw reader-post hash 3fc255b2d6ac41665e5bc0a6c8efb2b130a64a0dd9c539d86dcf8756c0f92755. The archived pre-reader source in `hopf-hecke-unfinished-15-2026-10-15-owner/authoring-readiness-escalation/hecke11/current-inputs/` matches pre hash 7e6ce1143cf449be56ae06f232fa6d87ba65dc46db4bad2dd08653ce31c00faf. Its exact diff is the reader’s explicit universal-ring trace/Gram/determinant construction. Retain it; amend only the unrelated justified_by link (refuter:11:1). The nonvanishing theorem consumes the determinant and does not establish its well-definedness; the earlier standard-basis, Laurent-ring and base-change suppliers already do. This is a confirmed nonfatal metadata defect, repaired by clearing that link and its manifest mirror. No statement, definition text or logical deps changed. Repair confidence 1.

Reviewed every Definition and Remarks construction: finite W has identity, so the standard basis has positive finite size even for S empty. The Laurent ring is commutative; standard-basis and base-change suppliers give finite free modules in every fiber. Diagonal-sum trace and Leibniz determinant are defined even when the Gram determinant is zero; multiplication matrices specialize entrywise and a field basis change gives P^t G P and det(P)^2. Removed the irrelevant justified_by nonvanishing theorem: well-definedness already follows from the declared earlier suppliers. No Definition/body changed in this adjudication; the reader universal-ring construction is retained. No arbitrary Choice or splitness is assumed.

Sources independently opened: Geck §§4–4.1, PDF 15–16 (finite-Weyl restriction precedes Theorem 4.2); Solleveld §1.1, equations (1.3)–(1.6), PDF 5. Their parameter normalizations differ from the local normalized generators; only contextual attribution is used.

Next: finish formal-series risk review, then level 1.

## Level 0 — formal series

`lem-hh-one-parameter-formal-series-local-ring`: Reviewed steps 1.1–2.1 and exact formal-series/domain/fraction-field/free-basis suppliers. Constant coefficient is a split surjection with kernel hR by shifting; least nonzero coefficients multiply nontrivially. Cauchy coefficients stabilize uniquely, giving a choice-free limit and intersection h^nR=0. Finite coordinate products include rank zero. Fraction-field injection follows only after the domain proof. Sambale Definition 2.1/Lemma 2.2 and their complete convolution/leading-term argument agree; the item explicitly records the unavailable Wilf pages and does not use them as proof.

Next: complete level-1 risk reviews and the regular-trace citation finding.

## Level 1

`lem-hh-finite-direct-summands-over-khh-are-free`: Reviewed all five steps against formal-series, free-module and field suppliers. p(e_i) gives finite generation, the reduction basis has finitely many lifts, Q=hQ is killed by the convergent geometric inverse of I-hC, and repeated h-division of a relation is valid in the torsion-free ambient R^n. Separatedness forces every coefficient to vanish. This covers n=0, r=0 and any characteristic, with finite choices only. Etingof Theorem 7.1/Definition 7.2 is context; no field-algebra projectivity result is substituted for the local formal-ring proof.

`lem-hh-idempotents-lift-over-formal-power-series-rings`: Reviewed steps 1.1–5.1, completeness/central-scalar suppliers and Etingof Proposition 7.3/Corollary 7.5. Corners are closed retracts, and qAq intersect h^nA equals h^n(qAq); their induced topology is complete. u=2a-q has square q+4delta; its geometric inverse exists without dividing by 2, including characteristic two. Newton errors square and corrections preserve reduction. Corner induction preserves both-sided orthogonality and sum one. Empty complete reduction forces A=0 (and in any complete separated corner B=hB forces B=0). Only finitely many initial lifts are chosen.

`lem-hh-regular-trace-criterion-in-characteristic-zero`: Reviewed all six proof steps and actual finite-length, simple-module, semisimple-module and nilpotent-trace suppliers. The annihilator intersection equals the maximal-left-ideal intersection by the cyclic maps H to S. A finite composition series gives J^r=0; finite dimension yields a finite maximal-ideal intersection and an embedding of H/J into a finite direct sum of simples. Each jb is nilpotent, so its left-multiplication trace is zero; nondegeneracy forces J=0. This is a sufficient criterion over every field, with no converse or arbitrary Choice. Ram Lecture 5 gives complex-algebra context, not a general-field premise. Confirmed refuter:11:2 as a nonfatal incorrect source locator: the local proof is complete; Solleveld radical passage is section 1.3, PDF 10, not section 1.1, PDF 5.

`cex-hh-nondegenerate-symmetrizing-trace-does-not-imply-semisimplicity`: Reviewed all five steps against normalized relation, specialized standard basis, regular trace and simple/semisimple definitions. At v=i the polynomial is (T-i)^2 and epsilon=T-i is nonzero square-zero. It kills every simple module and cannot kill the regular module. Direct matrices give regular Gram [[2,2i],[2i,-2]] of determinant zero and symmetrizing Gram identity of determinant one. Solleveld section 1.1 rank-one q=-1 matches unnormalized q=v^2, not q=v. Complex characteristic zero and invertibility of i are explicit. No use of this generated counterexample as a logical supplier.

Next: finish level-2 reviews.

## Level 2

`lem-hh-formal-deformation-matrix-unit-lifting`: Reviewed every step and complete earlier lifting/freeness suppliers plus the unit criterion. Projected corners reduce correctly via the direct-sum splitting; dimensions are one within a block and zero across blocks. e_i is a basis of its diagonal corner. Normalize y_a x_a=c_a e_1 using c_a congruent 1 modulo h; x_a y_a=d_a e_a is idempotent with d_a a unit, forcing d_a=1. Orthogonality gives all matrix-unit products, including cross-block zeros. Their coordinate matrix reduces to an invertible constant matrix; a convergent geometric inverse proves they form a basis. Empty product forces rank zero. Central block sums are derived, never assumed. Etingof nilpotent-ideal results provide context only; no arbitrary Choice.

`thm-hh-generic-finite-hecke-semisimplicity`: Reviewed all six steps against actual Coxeter presentation, base-change/standard-basis, Laurent-domain and trace-criterion suppliers. Odd and even braid calculations with involutions give exactly the Coxeter relators; inverse algebra maps identify the all-one fiber with kW. Group left multiplication has trace |W| at identity and zero otherwise. Its Gram determinant is plus/minus |W|^|W|, nonzero in characteristic zero, including W={1}. Hence the universal determinant and its image in the fraction field are nonzero. Other fibers require only determinant nonvanishing, with no converse or splitness claim. Reader Geck restriction correction agrees with section 4.1 before Theorem 4.2 and is retained. Corrected the ill-typed phrase field homomorphism with nonfield Laurent source to ring homomorphism to a field in Statement and step 1.2; no intended hypotheses or conclusion are lost. Direct consumer split-label theorem already uses coefficient ring homomorphisms in its intended field-specialization clause and needs no repair.

Exact archived pre-reader theorem hash d544395db4d85c398049b209df49406f775548fd5a67dac07897df36c3ef4f2e and initial current reader-post hash e3a08e536562d5ca00df906719d1e75437441942a97ff9c0810b724b52f015b2 were checked. The reader delta is the Geck locator qualification plus a final newline. Verdict amended_repair because of the additional coefficient-map typing and source-page corrections.

Next: finish split labels, then rank-two example.

## Level 3

`thm-hh-split-deformation-labels-and-exceptional-parameters`: Reviewed all four steps against the now-reviewed matrix-unit lifting theorem, residue/fraction-field lemma and actual module definitions. A finite product of full matrix rings is carried to both fibers on the lifted basis. The natural L^d is simple via matrix units; any simple module is its image under e_j -> E_ji s and this map is injective by simplicity. Central block identities force exactly one factor to act, including absence of simples for the empty product. Dimensions and labels are attached to the specified lifted blocks; no canonical arbitrary-specialization labels are claimed. The separate determinant clause is only sufficient and gives no claim at D_W=0. Its actual use of the generic theorem is a coefficient-ring specialization into a field, so the supplier typing clarification needs no consumer edit. Geck finite-Weyl character context and Etingof nilpotent-lifting context do not replace the local complete-ring argument.

## Level 4

`ex-hh-two-dimensional-formal-split-deformation`: Reviewed every Verification step against quotient, polynomial, principal-ideal, rational-field, formal-unit and module suppliers. Monic reduction terminates and a nonzero multiple of the monic quadratic has degree at least two, proving the exact rank-two basis. The special idempotents give Q times Q. The alternating coefficients are the inverse of S=1+h; u=S^-1 x squares to one, so (1 plus/minus u)/2 are orthogonal idempotents. Invertibility of 2 and S gives an inverse coordinate change and an R-algebra product decomposition; base change gives K times K. The direct field-module argument proves exactly two one-dimensional simple labels. No arbitrary Choice and no characteristic-two extrapolation; Q is essential.

## Sources, additional corrections and consumer dispositions

All numbered proof steps of all ten owned carriers were independently reviewed in the dependency order above. Earlier item statements actually used were opened: the Hecke presentation and standard-basis/base-change statements, finite-matrix/module preliminaries (including its complete finite-length, complement and nilpotent-trace proof), Laurent-ring constructions, formal-series/unit/fraction-field statements, and the algebra/module/simple/semisimple/free-module, polynomial, ideal, quotient and rational-field definitions/results. Their actual hypotheses suffice. No substantial prerequisite is missing.

Sources retrieved and relevant complete arguments read on 2026-10-15:

- [Solleveld survey](https://www.math.ru.nl/~solleveld/surveyHecke.pdf), §1.1 PDF 4–6: presentation and normalization, finite-family context, Theorem 1.1 and rank-one equation (1.7); §1.3 PDF 10 immediately before Lemma 1.7: radical characterization. The source's complex coefficients are contextual; the general-field implication is proved locally. The refuter correctly identifies the misplaced radical passage, although Theorem 1.1 itself is on PDF 6 rather than the refuter's PDF 5. Corrected both locations in the regular-trace lemma.
- [Geck notes](https://arxiv.org/pdf/math/0511548), §4.1 PDF 15–16: the finite-Weyl restriction occurs before Theorem 4.2; Theorems 4.3–4.4 have that scope. Retained the reader's accurate qualification; none of these theorems is a premise of the broader local trace proof.
- [Sambale](https://benjaminsambale.github.io/pdfs/fopose.pdf), Definition 2.1 and full Lemma 2.2 proof, printed 2–3 / PDF 3–4; Theorem 2.9 and full coefficient-stabilization proof, printed 5 / PDF 6. Corrected the printed/PDF pagination distinction in the series item. The unavailable Wilf source is explicitly qualified in the carrier; no assertion of having retrieved its pages is made here.
- [Etingof Chapter 7](https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/70961c084499052681efb7485af37858_MIT18_712F10_ch7.pdf), Theorem 7.1/Definition 7.2 PDF 1; complete Proposition 7.3 proof and Corollary 7.5 corner induction PDF 1–2; Theorem 7.6 PDF 2. The nilpotent-ideal hypothesis is distinct from h-adic completeness, which the owned items prove locally. Corrected Corollary 7.5's PDF page in the idempotent lemma and example.
- [Ram Lecture 5](https://soimeme.org/~arunram/Notes/LIRTLecture5.html), Theorem 1.41, Definitions 1.42/1.44 and Proposition 1.45: complex-algebra trace/Gram context. The assigned lemma proves its own sufficient criterion and does not import a converse over arbitrary fields.

Related nonfatal locator defects found in these same owned reviews were repaired: Solleveld's rank-one example and Theorem 1.1 occur on PDF 6 (counterexample and generic theorem), not within PDF 4–5; the rank-two example's Geck label context spans PDF 15–16. Each affected manifest source mirror was synchronized. Source corrections do not alter statements or arguments. Repair confidence is 1 for all completed corrections.

The only Statement edit is the generic theorem's replacement of “field homomorphism” from the nonfield Laurent ring by “ring homomorphism to a field”; step 1.2 and the two contract copies' exact excerpts are synchronized, and statement provenance is ai-altered. A direct dependency/reference search of all item carriers finds only the owned split-label theorem as a consumer of that theorem (the definition's irrelevant justified_by link was removed). Its F2 and final step use exactly a coefficient map into a field, so they remain sound. No necessary consumer Statement edit and no next-hop repair arise. The reader's explicit universal-ring Definition clarification was checked against the regular-trace lemma, generic theorem, split-label theorem and counterexample, which are all its actual item consumers; each uses exactly the diagonal-sum Gram construction. The rank-two example uses their unchanged conclusions.

No published defect, outside-batch affected consumer, proposed withdrawal or mathematical escalation was found. Published content remains read-only. Existing frontier dependency records and proposed withdrawals are preserved. No judge, stamp, gate battery or dispatch was initiated. The independently recomputed live run is running at Step 3a; its batch-10 split failure is outside this dispatch and is not a mathematical blocker for batch 11.

## Checks

Final focused checks (all exit 0):

- `node tools/tsx-run.mjs tools/reflow.mts` on the seven changed item paths: all unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on those seven paths: six proof sections checked, zero failing; the definition has no phase proof.
- `node tools/rendercheck.mjs` on those seven paths with `--quiet`: all seven frontmatters and all math spans parse under the actual renderer/KaTeX.
- `node tools/proof-contract.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-11.proof-contracts.json --strict`: 10/10 items checked, zero errors or warnings. The first local run exposed five stale supplier excerpts (four from the reader Definition clarification and one from the coefficient-map wording); these exact excerpts were refreshed in both contract copies before the successful rerun. No defect-ledger row was created for this mechanical synchronization.
- `node tools/risk-report.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-11.proof-contracts.json`, first without and then with `--require-reviewed`: zero errors, all ten required reviews complete. The initial routing run before review also reported ten HIGH/CRITICAL items.
- Final required single batched `node tools/proof-layout.mjs` invocation on all seven changed item paths: **7 items, 30 steps, 0 defects**. No item edits followed it.
- A focused JSON/source consistency check confirms exactly four owed decisions, ten identical batch/run contract entries, matching manifest dependency/provenance mirrors, repair confidence 1, and no engine-owned subject stamps.

The seven explicit item paths supplied to reflow, precheck, rendercheck and final proof-layout were:

```
items/def-hh-specialization-and-regular-trace-determinant.md
items/lem-hh-one-parameter-formal-series-local-ring.md
items/lem-hh-idempotents-lift-over-formal-power-series-rings.md
items/lem-hh-regular-trace-criterion-in-characteristic-zero.md
items/thm-hh-generic-finite-hecke-semisimplicity.md
items/cex-hh-nondegenerate-symmetrizing-trace-does-not-imply-semisimplicity.md
items/ex-hh-two-dimensional-formal-split-deformation.md
```

## Dispositions and handoff

The decisions file contains exactly:

| Obligation | Verdict |
|---|---|
| touched:11:def-hh-specialization-and-regular-trace-determinant | amended_repair |
| refuter:11:1 | confirmed_nonfatal |
| refuter:11:2 | confirmed_nonfatal |
| touched:11:thm-hh-generic-finite-hecke-semisimplicity | amended_repair |

Both reported fatal severities were independently reduced to nonfatal because the inaccurate metadata/source locator is real, but the current constructions and complete local proofs do not depend on it. The original reports remain untouched. No observation is unbound and no historical-preimage exception is invoked: both touched pre-reader source preimages were recovered with exact raw hash matches, and all ten initial current carriers matched the reader-post raw hashes.

Nine distinct confirmed nonfatal defects are closed in `research/defect-ledger.jsonl`, appended through the serialized ledger tool at `caught_at_stage: 3a-adjudicate`; its generated view was updated by that tool. The definition touched obligation and refuter:11:1 explicitly share the single metadata defect row. The four pagination corrections on otherwise untouched risk-review carriers have report references rather than invented routed obligations. There are no duplicate rows for mechanical contract synchronization.

Closed defect IDs:

- `hh15-b11-3a-unrelated-definition-discharge`
- `hh15-b11-3a-radical-source-locator`
- `hh15-b11-3a-geck-finite-weyl-scope`
- `hh15-b11-3a-coefficient-map-typing`
- `hh15-b11-3a-generic-solleveld-pagination`
- `hh15-b11-3a-series-pagination`
- `hh15-b11-3a-idempotent-pagination`
- `hh15-b11-3a-counterexample-pagination`
- `hh15-b11-3a-example-pagination`

No mathematical blocker or unresolved risk review remains in batch 11. The engine owns decision hashing, gate checks and further transitions.
