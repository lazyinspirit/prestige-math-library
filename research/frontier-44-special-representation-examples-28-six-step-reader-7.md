# Reader 7 — batch 7

Independent Step 3a review completed with the residual findings below. No judge or acceptance stamp is supplied.

## Assigned inventory

- `library/special-topics-in-representation-theory/tensor-product-crystals-and-highest-weight-crystal-uniqueness.md` (A).
- `library/special-topics-in-representation-theory/tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples.md` (B).
- `items/lem-tensor-products-of-integrable-weight-modules-are-integrable.md`: opened in full.
- `items/def-tensor-product-of-crystals.md`: opened in full.
- `items/lem-i-string-components-of-a-crystal-lattice.md`: opened in full.
- `items/def-highest-weight-element-and-connected-highest-weight-crystal.md`: opened in full.
- `items/thm-crystal-basis-tensor-product-rule.md`: opened in full.
- `items/lem-crystal-tensor-product-weight-epsilon-and-phi-formulas.md`: opened in full.
- `items/thm-the-highest-weight-crystal-b-lambda-exists.md`: opened in full.
- `items/prop-dual-crystal-and-reversal-conventions.md`: opened in full.
- `items/thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals.md`: opened in full.
- `items/thm-highest-weight-components-in-a-tensor-product-crystal.md`: opened in full.
- `items/cex-changing-the-tensor-equality-convention-changes-the-crystal.md`: opened in full.
- `items/ex-tensor-crystal-b-one-tensor-b-one-for-sl-two.md`: opened in full.
- `items/ex-highest-components-in-a-small-type-a-two-tensor-crystal.md`: opened in full.
- `items/ex-dual-crystal-reverses-arrows-and-weights.md`: opened in full.

## Observed supplier bytes

- `thm-grand-loop-existence-of-highest-weight-crystal-bases`: raw SHA-256 `cc5689924c668d740e4ace7eed2a10a4c36979e266a1cf238cc25c845f508e2b`.
- `def-quantum-weight-module-and-integrability`: raw SHA-256 `293cc61e6eed60345506a3b896b3e155cf0f25af847cd2e557b422e8831353c6`.
- `def-quantum-verma-module-and-simple-highest-weight-quotient`: raw SHA-256 `57ead89af5f12116e4f218b702fd378803ce2a2467049f9578639a9b0930af1f`.
- `lem-rank-one-tensor-strings-have-the-crystal-limit-rule`: raw SHA-256 `ed555f14a82a960ffc241dab053152722dfc3a30c84667f2a935b76173ab8c5c`.
- `def-crystal-graph-epsilon-phi-and-weight`: raw SHA-256 `b18e3bccd4b8ab820b9aa5cf1d4aa7e02eda8b5b5f354ea321876f9d98d7d0eb`.
- `def-the-local-ring-at-q-zero`: raw SHA-256 `4b5e23e7634cb4504342596077b773381f4c83b6c85548d6ddbb745280473883`.

## Opened prerequisite inventory

Full direct-supplier carriers and extra prerequisite carriers (bounded chunks were completed where tool output truncated):

- `items/def-axiom-of-choice.md`.
- `items/def-crystal-graph-epsilon-phi-and-weight.md`.
- `items/def-crystal-lattice-and-crystal-basis.md`.
- `items/def-kac-moody-integral-and-dominant-integral-weights.md`.
- `items/def-kashiwara-crystal-operators.md`.
- `items/def-kashiwara-lattices-lambda-and-infinity.md`.
- `items/def-quantum-integers-factorials-and-divided-powers-at-q-i.md`.
- `items/def-quantum-verma-module-and-simple-highest-weight-quotient.md`.
- `items/def-quantum-weight-module-and-integrability.md`.
- `items/def-symmetrizable-cartan-datum-for-a-quantum-group.md`.
- `items/def-tensor-product-of-modules-by-generators-and-relations.md`.
- `items/lem-q-binomial-expansion-for-q-commuting-elements.md`.
- `items/lem-rank-one-tensor-strings-have-the-crystal-limit-rule.md`.
- `items/prop-integrable-quantum-highest-weight-modules-are-semisimple.md`.
- `items/thm-grand-loop-existence-of-highest-weight-crystal-bases.md`.
- `items/thm-integrable-quantum-highest-weight-module-exists-and-is-unique.md`.
- `items/thm-quantized-sl-two-string-formulas.md`.
- `items/thm-tensor-products-commute-with-arbitrary-direct-sums.md`.
- `items/thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra.md`.
- `items/thm-unique-kashiwara-i-string-decomposition.md`.
- `items/thm-universal-property-of-module-tensor-products.md`.
- `items/lem-cartan-projection-constructs-the-quantum-verma-contravariant-form.md`.
- `items/def-the-local-ring-at-q-zero.md`.
- `items/def-contravariant-form-on-an-integrable-quantum-highest-weight-module.md`.
- `items/lem-quantum-pascal-recurrence-and-gaussian-integrality.md`.
- `items/lem-highest-weight-tensor-maps-and-their-adjunction.md`.

Additional exact interfaces opened, without claiming full proof audits:

- `items/def-drinfeld-jimbo-quantized-enveloping-algebra.md`: Definition or Statement.
- `items/thm-triangular-decomposition-of-a-quantized-enveloping-algebra.md`: Definition or Statement.
- `items/lem-finite-support-regularization-of-quantum-label-weight-modules.md`: Definition or Statement.
- `items/lem-local-q-one-deformation-proves-integrable-highest-weight-universality.md`: Definition or Statement.
- `items/lem-quantum-highest-weight-serre-quotient-is-integrable.md`: Definition or Statement.


The current batch-7 manifest, cross-batch dependency evidence, author notes and proof contracts were opened. Earlier author readiness claims were treated as historical evidence. I inspected the current run state directory and latest commit identity; I did not use a RESUME file or run any engine transition. No rendered reader bundle was found among the exact current-run bundle paths searched, so actual carriers and their contracts were used.

## Repairs and mathematical evidence

| Edited item | Defect and repair |
| --- | --- |
| `lem-tensor-products-of-integrable-weight-modules-are-integrable` | Proof 1.3 used the wrong inverse-parameter Gaussian coefficient; it is now q_i^(-2r(n-r)) B(n,r;q_i^2). Proof 2.2 put K_i^(-r) on the wrong tensor factor; it now reads E_i^r tensor K_i^(-r) E_i^(n-r). Explicit toral commutation explains why these factors preserve vanishing. The opened Hopf and q-binomial suppliers give both corrections. |
| `lem-i-string-components-of-a-crystal-lattice` | The original 3.2 said lowering kills a highest vector. Replaced its residue induction with u_n=e_i^n u-f_i e_i^(n+1)u. Partial inversion makes precisely n=epsilon_i(b) survive. The argument handles zero residues and endpoints without the erroneous claim or the premature cancellation of u_0. Final numbering adopted the precheck proposal. |
| `thm-crystal-basis-tensor-product-rule` | F4 now says stability of the given factor lattices, avoiding an ambiguous premise about the tensor lattice, whose stability is proved in 4.1. The whole full-string argument was checked against the rank-one supplier and the repaired component lemma. |
| `lem-crystal-tensor-product-weight-epsilon-and-phi-formulas` | Raising ends at the top, not the bottom. Lowering the first factor increases its epsilon a; a is not fixed. Corrected these two intermediate descriptions without changing any formula or branch. |
| `prop-dual-crystal-and-reversal-conventions` | Original 3.1 equated a dual input with a flipped tensor before applying the swap, even reversing the unflipped input factor order in its first case. Replaced it with S f=f S and S e=e S, separately for p>=s/p<s and p>s/p<=s, including zero endpoints and weights. The finite inequalities independently establish the same statement. |
| `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals` | Original 5.1 assumed the complement of a basis of one direct summand lies in the other summand, which is false for an arbitrary vector-space basis. Added the essential raising induction: a basis vertex with nonzero top-isotypic residue component raises nontrivially to that component, then partial inversion returns it to the standard basis. Removed infinite-cardinal subtraction. In 3.1 the standard-lattice inclusion now directly gives field generation, avoiding unproved generator stability of an arbitrary operator-stable subspace. In 6.1 a finite-level depth D(nu) rigorously orders all peelings, while finitely many constituent tops above each mu exhaust that weight. The original locally weight-finite, possibly infinite conclusion is retained. |
| `cex-changing-the-tensor-equality-convention-changes-the-crystal` | The refuted prose called opposite comparisons the same comparison. Corrected the refuted prescription, supplied explicit strict-both/non-strict-both witnesses in 4.1, and distinguished a lowering-chain length from a connected crystal component. The final clause no longer falsely suggests the strict-both variant changes lowering-chain sizes; it fails partial inversion. |
| `ex-tensor-crystal-b-one-tensor-b-one-for-sl-two` | Corrected the false dimension equation 3=2+1 to 4=3+1. The verification now proves the quantum direct sum with t=v_0 tensor v_0 and s=v_0 tensor v_1-q_1 v_1 tensor v_0; the weight-zero determinant is 1+q_1^2. This supplies the previously uncited module comparison. |
| `ex-highest-components-in-a-small-type-a-two-tensor-crystal` | The original F1 cited abstract existence/definitions for an unexplained concrete standard crystal, and 3.1 used the unexplained count 9=6+3. Added the actual three-dimensional generator action and relation checks, then enumerated every component vertex and all eight nonzero lowering arrows. The multiplicity theorem gives the quantum module decomposition. The classical symmetric/alternating count is separately explained. |
| `ex-dual-crystal-reverses-arrows-and-weights` | Supplied the reversed three-dimensional action identifying the canonical lambda_2 crystal without the general AC-dependent component theorem. Original 3.1 said “both are fixed” after mentioning the lowest chain vertex and the isolated vertex; only the isolated vertex is fixed. The repaired tensor calculation explicitly gives the three-element chain and checks both zero operators on the isolated vertex. Final numbering adopted the precheck proposal. |

The assigned A-page first-item summary now makes finite weight dimensions and upper-cone support conditional on the extra hypotheses. Its choice summary distinguishes the semisimplicity maximal-family selection and simultaneous top lifts instead of claiming exactly one selection.

Affected derivations and citation uses were synchronized in the batch-7 proof contract. Three stale quote rows for the current highest-module supplier were replaced by its exact current Statement. Boundary evidence was corrected where it falsely said the zero module lacks a crystal basis, the Cartan index set can be empty, the standard A2 module has a zero middle weight, a=b=2 is the smallest equality witness, or finite/infinite basis complements need a cardinal subtraction. Other inaccurate step anchors were repaired. Historical independent `template_review` records were preserved, without recertification. No changed item had a `verification.judge` record to retain; no judge, audit, acceptance or publication stamp was added.

Only the two finite leaf/example claim sections were corrected; no theory Statement or Definition changed. The equality counterexample has no consumers. A targeted item-link search and current-run manifest scan found `ex-dual-crystal-reverses-arrows-and-weights` as the sole consumer of the corrected sl2 example, and that consumer was opened and repaired here. All assigned consumers of the repaired proof-only theory were checked in supplier order; no consumer required a change of its theory claim.

## Authoritative sources actually consulted

- [Kashiwara91](https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf): §2.3 Proposition 2.3.2(ii), printed pp.474-475; §2.4 Theorem 1, p.475; §2.6 Theorem 3 and complete Lemmas 2.6.1-2.6.3, pp.478-479. The last two pages were visually inspected from the downloaded PDF as well as reading their text. Lemma 2.6.3 includes the crucial residue-basis raising induction missing from the authored uniqueness proof; Lemma 2.6.1 gives pole descent away from the top. These arguments were reproduced in the repaired proof with its multiple-copy and infinite-family conventions.
- [Jeong–Kang–Kashiwara math/0305390](https://arxiv.org/pdf/math/0305390): §4 Theorem 4.7 and §5 Theorem 5.2/its actual real-root qualification; §7 complete Lemmas 7.7-7.10, printed pp.30-33; Corollary 7.14 and equation (7.6), p.35; complete Lemmas 7.15-7.16 and Proposition 7.17, pp.36-38. Lemma 7.8 has the first-top boundary term, not the authored second-top term. The source's uniform pole estimate requires a finite T plus a negative-half bound, then separate tensor-bound and improvement arguments. This resolves the direction of the confirmed counterexample and identifies what the compressed 5.2 has yet to establish locally.

No claim is made that every literature reference in the frontmatter or either entire source paper was read. The finite crystal tables, Gaussian factors, module generator actions, and dual-swap inequalities were checked directly rather than inferred from a literature title.

## Uneditable defects

All findings below concern unedited carriers in batches 5/6 or B-page prose. The producer ownership was checked in exact current-run manifests. These paragraphs retain the original observed claims. Concurrent producer repairs changed every stored baseline source; the stored baseline fingerprints do not bind an immutable pre-reader snapshot that I can identify as the exact observed defect. Historical observations therefore carry no observed_source binding. The current residual findings below use separately reobserved current bytes.

### `thm-grand-loop-existence-of-highest-weight-crystal-bases` — Proof 4.1: tensor-lattice decomposition and the boundary term

Class: `false-claim`; severity: `fatal`. Assigned consumer: `thm-the-highest-weight-crystal-b-lambda-exists`.

Historical observation before concurrent producer edits. The displayed span uses L(lambda)_(lambda-alpha) tensor A_0 v_mu as its boundary. For sl_2, lambda=mu=1 and alpha=alpha_1, its reduction is spanned only by v_1 tensor v_0: lowering the previous top residue gives that same vertex. It misses the independent highest singlet residue v_0 tensor v_1. JKK math/0305390, Lemma 7.8, printed p.31, has the opposite boundary v_lambda tensor L(mu)_(mu-alpha), and proves the equality using lower-height interior strings, a top-second congruence, and Nakayama. I read that complete proof. Replace the boundary and reproduce that argument; recheck downstream pole improvement, dual transfer, and F/G clauses, which invoke 4.1.

### `thm-grand-loop-existence-of-highest-weight-crystal-bases` — Proof 5.2: common pole bound and one-power improvement

Class: `unlicensed-inference`; severity: `fatal`. Assigned consumer: `thm-the-highest-weight-crystal-b-lambda-exists`.

Historical observation before concurrent producer edits. The paragraph asserts that a pole bound chosen on a finite set also bounds every sufficiently large highest weight, and that raising a last-color split improves it by one. It supplies neither the uniform inequality nor the separate large-weight, fixed-weight and negative-half estimates needed for this induction. F2 gives finite generation only at an individual label and does not supply uniform bounds over infinitely many dominant weights; F4 is field adjunction. JKK printed pp.35-38, equation (7.6) and complete Lemmas 7.15-7.16/Proposition 7.17, establish these estimates by first bounding the finite set T and the fixed negative-half component, transferring via the large-weight lattice isomorphism, extracting positive string components, and separately applying lower-height F and E. I read these relevant sections. Reproduce the quantified bounds and three improvements locally, with the corrected 4.1, rather than using the prose assertion as the prerequisite. This is an unresolved proof-completion finding, not a counterexample to existence.

### `def-quantum-weight-module-and-integrability` — Verification 3.1: last sentence about pairwise distinct one-dimensional modules

Class: `false-claim`; severity: `fatal`. Assigned consumer: `lem-tensor-products-of-integrable-weight-modules-are-integrable`.

Historical observation before concurrent producer edits. The proposed witness says a direct sum of infinitely many pairwise distinct one-dimensional modules has infinite-dimensional label spaces unless the labels are separated. For the permitted rank-one datum P=Z alpha plus Z delta, <alpha,h>=2 and <delta,h>=0, take one trivial-action graded module at each label k delta. They are distinct graded modules with equal toral character, yet their direct sum has dimension one in each label space. Conversely infinitely many copies of the weight-zero trivial module have infinite-dimensional weight zero even for a separating torus. Replace the witness with that explicit direct sum of copies; distinguish chosen label spaces from merged toral eigenspaces. The defining grading consumed by batch 7 is sound; this defective remark is not used in its repaired proof.

### `def-quantum-verma-module-and-simple-highest-weight-quotient` — Facts & Assumptions F4: both assertions about E_i U_q^- inside the algebra

Class: `false-claim`; severity: `fatal`. Assigned consumer: `thm-the-highest-weight-crystal-b-lambda-exists`.

Historical observation before concurrent producer edits. F4 omits the unreordered positive-generator term w E_i. With w=F_j and i != j, E_i F_j=F_j E_i is nonzero by triangular decomposition, and cannot lie in the asserted sum of negative-half/toral components. Moreover nu-alpha_i=alpha_j-alpha_i is not in Q_+, so the final asserted inclusion in U_q^-[-(nu-alpha_i)] U_q^{>=0} would make this product zero. The opened Drinfeld-Jimbo Definition and triangular-decomposition Statement establish this counterexample. The desired label shift is true after applying to v_lambda, since E_i v_lambda=0. Replace the algebra inclusion by the actual commutator identity plus its action on the highest vector, then update the associated Verification 2.1.

### `lem-rank-one-tensor-strings-have-the-crystal-limit-rule` — Proof 7.1: inverse position n for a rectangle cell

Class: `false-claim`; severity: `fatal`. Assigned consumer: `thm-crystal-basis-tensor-product-rule`.

Historical observation before concurrent producer edits. The proof assigns n=j whenever j<=a-t and also assigns n=a-t+k-t when j=a-t. The vertical arm has j=a-t and k>t, so these prescriptions conflict. For a=0,b=1 and cell (j,k)=(0,1), t=min(k,a-j)=0: the first prescription gives n=0, whereas the actual position is n=1. Step 6.1 and the stated chain require n=j on the horizontal arm k=t, and n=a-t+k-t on the vertical arm j=a-t. Correct those conditions, retaining their agreement only at the corner.

### `lem-highest-weight-tensor-maps-and-their-adjunction` — Proof 1.2: AB=z^2 BA for A=E_i tensor K_i^-1 and B=1 tensor E_i

Class: `false-claim`; severity: `fatal`. Assigned consumer: `thm-the-highest-weight-crystal-b-lambda-exists`.

The opened Hopf coproduct and rank-one relations give K_i^-1 E_i=z^-2 E_i K_i^-1. Thus AB=z^-2 BA, equivalently BA=z^2 AB, the inverse of the equality printed in 1.2. Local nilpotence still follows from a q-binomial expansion with the correct parameter. Correct the displayed commutation before treating this supplier proof as established; its product-form computation in F4/1.3 is a separate valid generator calculation.

### `def-crystal-graph-epsilon-phi-and-weight` — Verification 3.1: nonzero string positions versus nonzero residue classes

Class: `unlicensed-inference`; severity: `nonfatal`. Assigned consumer: `def-tensor-product-of-crystals`.

Historical observation before concurrent producer edits. The step infers the residue-chain length a+1 from nonvanishing of F_i^(n)h over Q(q). Field nonvanishing alone does not exclude membership in qL. The immediately available repair is to use lattice stability and tilde e_i^n F_i^(n)h=h for 0<=n<=a: if any position lay in qL, then h would lie in qL, contradicting its nonzero top residue. Add this argument before identifying all a+1 vertices. This is a short omission a competent reader closes immediately.

### `def-the-local-ring-at-q-zero` — Verification 4.1: normalizing v/k while claiming value group Z

Class: `unlicensed-inference`; severity: `nonfatal`. Assigned consumer: `lem-tensor-products-of-integrable-weight-modules-are-integrable`.

Historical observation before concurrent producer edits. From surjectivity of v and k=v(q)>=1 alone, v/k has value group (1/k)Z, not automatically Z. Establish k=1 first: choose x with v(x)=1; since q generates the maximal ideal, x=q y with y in A_0, so 1=k+v(y)>=k. Therefore k=1. The preceding proof that q generates the maximal ideal supplies this immediate argument, but 4.1 does not state it.

### `lem-rank-one-tensor-strings-have-the-crystal-limit-rule` — Sources references: Kashiwara91/JKK locators; Facts F6 product-form citation

Class: `citation-inaccurate`; severity: `fatal`. Assigned consumer: `thm-crystal-basis-tensor-product-rule`.

Historical observation before concurrent producer edits. The JKK locator attributes a rank-one tensor residue calculation to section 4, pp.18-20, (4.2)-(4.5) and Proposition 4.8; the opened source has its tensor theorem in section 5, Theorem 5.2, pp.20-21, and refers the real-root proof to earlier literature. Kashiwara91 section 4.1-4.2, pp.480-484, treats the negative-half and its loop preparation rather than the stated standalone finite tensor coefficient calculation; its tensor theorem is section 2.4, Theorem 1, p.475. Also the opened Cartan-projection lemma cited in F6 supplies rank-one norms but does not prove Delta sigma=(sigma tensor sigma)Delta or tensor product contravariance. That compatibility is explicitly computed in lem-highest-weight-tensor-maps-and-their-adjunction F4/Proof 1.3, or can be proved locally on generators. Correct the actual source locations and provide/cite the product-form calculation instead of attributing it to the norm supplier.

### `tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples` — Objective: sentence "Every item is a dependency leaf"

Class: `false-claim`; severity: `fatal`. Assigned consumer: `None`.

The current page has internal consumers: ex-dual-crystal-reverses-arrows-and-weights lists both ex-tensor-crystal-b-one-tensor-b-one-for-sl-two and ex-highest-components-in-a-small-type-a-two-tensor-crystal in deps. Those two items are not graph leaves. The intended external-boundary claim can be stated as no item on this examples page is used outside the page, while acknowledging the internal supplier order. B-page prose is outside reader edit scope.


## Concurrent supplier updates and final residual set

Before final handoff, hash comparison showed that the batch-5/6 writers had changed the original supplier observations. I reopened the affected clauses, then read the complete replacement grand-loop Proof at raw hash `091c4ac9a117dbeb01e73a7e85488ed69c5b1aa9265977a455c9aaf6ee70c281`. Its new 5.2/6.1 give the first-top boundary and Nakayama equality; 6.2 supplies the finite set of weights, the half bound, large-weight transfer, and three separate one-power improvements. New 3.2 and 5.1 establish the finite-degree field/lattice isomorphism used in those transfers. The new 9.1 gives an additional finite argument for negative-half form nondegeneracy. I checked these replacements for their assigned consumers, preserving the original theory Statements. No new assigned-item repair was required.

The concurrently corrected weight-module remark now uses countably many copies of the trivial weight-zero module and a separate unbounded-support rank-one example. The Verma F4 now retains u E_i and gives the actual skew commutator. The rank-one inverse-cell map now branches on k=t versus k>t, and its external source locators were corrected. The graph proof now proves residue nonvanishing by applying raising; the local-ring proof now proves v(q)=1 before normalization. These focused corrections close the original historical observations, which are retained above with their evidence rather than presented as current defective claims.

Under the brief, these current computation, citation and page-claim defects are routed as fatal; immediate closure of the underlying elementary mathematics does not excuse an inaccurate citation or false claim. The final JSON contains only three residual findings: the still incorrect tensor-map AB coefficient (fatal computation), the rank-one F6 product-form attribution (citation defect), and the B-page blanket graph-leaf wording (false page claim). In the last two cases the mathematics of the displayed rule is sound; the source attribution and page description need correction. Current-byte bindings apply only to the reobserved residual item defects, never to a corrected historical source.

## Page verdicts and blockers

- **A — tensor-product-crystals-and-highest-weight-crystal-uniqueness:** local repairs completed; the historically defective grand-loop boundary and pole-bound proof have now been rebuilt by the producer and checked against the relevant source argument. Remaining supplier issues are the tensor-map commutation error and the rank-one product-form attribution. Their carriers remain outside reader edit scope and are routed. No whole-closure theorem acceptance or publication judgment is supplied.
- **B — tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples:** the four finite computations were checked and repaired where necessary. The A2 canonical component identification consumes the grand-loop branch, whose revised argument was rechecked; its deeper algebraic prerequisites remain outside any claimed full transitive audit. The inaccurate blanket “every item is a dependency leaf” claim remains in uneditable B-page prose and is routed as a false page claim. Other B-page summaries agree with the repaired computations.

The remaining outside-scope computation and attribution must be corrected by their owners. The historical supplier issues below were corrected by those writers, not by this reader; they are omitted from the final residual findings array. No item was withdrawn or deleted. No other-batch item, B-page prose, published content, shared plan or engine state was edited.

## Validation actually run

- For each of the ten changed item paths, `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`: final pass; reflow reported unchanged. The two initial precheck numbering proposals were adopted and their contracts refreshed before the final passes.
- `node tools/proof-contract.mjs research/frontier-44-special-representation-examples-28-six-step-batch-7.proof-contracts.json --strict`: final result **0 errors, 0 warnings, 14/14 items checked**. Initial contract failures identified stale quotes/step anchors and were resolved; these checks establish contract consistency, not mathematical certification.
- After all final item edits and formatters, one batched `node tools/proof-layout.mjs` command on all ten changed item paths: **10 items, 63 steps, 0 defects**, exit 0.
- An inline exhaustive finite A2 tensor calculation produced exactly the eight nonzero lowering arrows listed in the repaired example and confirmed the raising inverse at each edge. An inline integer calculation also checked the external rank-one second distinguished-coefficient valuation identity for a,b≤5; this finite check is corroboration, not a general proof.

## Coverage limitations

Both assigned pages and all 14 items were checked; ten item repairs, their contracts, and A-page corrections passed reflow/precheck, strict contracts (14/14), and final layout (10 items, 63 steps, zero defects). Concurrent batches 5/6 corrected several observed supplier defects before handoff; their original claims and missing-byte limits are retained in the report. I read the replacement grand-loop proof and checked its boundary and pole-bound repairs. This is not a full audit of every transitive algebraic foundation or either entire source paper. Some supplier definitions were opened during citation discovery before their upstream files; substantive assigned-item inference checks followed supplier order. Only remaining defects are routed here; current source hashes bind the bytes reobserved at handoff.
