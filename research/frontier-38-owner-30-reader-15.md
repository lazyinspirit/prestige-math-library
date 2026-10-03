# Reader 15 — batch 15, frontier-38-owner-30

## Scope and evidence

The live engine status was checked from `.autopilot/frontier-38-owner-30`: the run is running at Step 5a, with Step 3 authoring and Step 4 splice complete. All assigned items carry draft status and this run's pipeline identifier. Scope came from `research/frontier-38-owner-30-batch-15.pages.json`, not earlier author decisions.

Opened `CLAUDE.md`, `README.md`, `briefs/reader.md`, the relevant schema and Step-5 workflow clauses, the manifest's page/item/dependency inventory, both assigned page files, all 28 assigned item files in full, and the supplier sections listed below. The mathematical review worked through the free-basis and compact-cut suppliers, arc and point-pushing chains, algebraic construction, cancellation suppliers, and their consumers. The batch contracts were inspected by comparing all quoted supplier passages and derivation claims with their current carriers and reading all boundary dispositions. The consolidated contract file was accessed only for the batch-owned entries updated below.

## Repairs and evidence

1. **`def-standard-meridians-of-a-punctured-disk`, Definition, “Frozen conventions”.** Replaced ambiguous “left-to-right” action prose with ordinary function composition, leftmost factor outermost and rightmost factor evaluated first. This agrees with functoriality, the representation definition, and every actual composite computation. The geometric meridians, indexing, and boundary-product convention are unchanged.

2. **`def-artin-automorphisms-of-the-free-group`, Definition, convention following the inverse formulas.** Made the same evaluation-order clarification. Both inverse substitutions were checked by substitution and free reduction. This clarifies the existing maps rather than reversing their action.

3. **`def-peripheral-boundary-preserving-automorphism-of-f-n`, Remarks.** Qualified independence by `n>=2` and supplied the missing reverse witness. The involution `x_1 -> x_1^{-1}`, `x_2 -> x_1^2 x_2`, fixing other generators, fixes the ordered product but is not peripheral: its first image has abelianised class `-e_1`. The transposition gives the other direction. In ranks zero and one the conditions are not independent.

4. **`lem-artin-automorphisms-satisfy-the-braid-relations`, Proof 1.1 and 2.1; first Remark.** Corrected the false assertion that the far composites fix every basis letter: they agree on every basis letter and generally move the two affected pairs. Corrected the adjacent substitution explanation, which wrongly attributed the conjugation formula to `x_{i+2}` instead of `x_{i+1}`. Removed the false assertion that swapping the outer letters interchanges the displayed output triples. The actual relation and output words were already correct.

5. **`lem-artins-product-cancellation-dichotomy`, Statement and Proof.** Distinguished deletion of a middle letter from merely exposing it, and replaced the unsupported order-independent “first middle letter” with the least qualifying adjacent junction and its first middle deletion. Proved that a first global middle deletion must come from original neighbouring factors because no factor can have vanished earlier. At that junction the reduced-word forms are explicitly `V=R a U` when the left middle letter is deleted, or `U=R b^{-1} V` when the right one is deleted. The no-deletion case forces all conjugators empty and the identity permutation. This supplies a precise version of Artin's cancellation split.

6. **`lem-an-extremal-cancellation-shortens-an-artin-substitution`, Statement, Facts, Proof, Remarks.** Repaired the erroneous precomposition in the right-middle alternative: both operations are postcomposition on source generators. For the left case, `A'=A o rho(sigma_i)` has conjugators `red(RU), U`; their pair length is at most `|R|+2|U|`, versus the original `|R|+1+2|U|`. For the right case, `A'=A o rho(sigma_i)^{-1}` has conjugators `V, red(RV)`, with the corresponding strict inequality. Gave both inverse recovery formulas, checked the peripheral permutation and exact boundary product, and removed the vague “more than half” argument and the undeclared later-lemma appeal. Evidence is elementary free reduction and Artin's two alternatives, printed pp. 114–115.

7. **`thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism`, Facts F2–F3, Proof 1.3–3.1, last Remark.** Reconciled the consuming induction with the corrected dichotomy and postcomposition formulas. Minimal total length decreases by at least one, and `A=rho(beta' sigma_i^epsilon)` closes the induction. Qualified the source's subset variant: it requires the corresponding generators for the retained ends, rather than the original adjacent generators for potentially nonconsecutive labels. Its main Statement and choice-free conclusion are unchanged.

8. **`lem-a-standard-stem-arc-system-can-be-straightened-by-boundary-and-puncture-fixed-ambient-isotopy`, Proof 3.1.** The completed partial-cut surface `Y` contains earlier puncture tips, so its quotient is not a map into the punctured target `X` at those tips. Repaired the domain bookkeeping: delete the finitely many boundary tips to form `Y_0`, use boundary collar pushes fixing the basepoint and remaining punctures to obtain `pi_1(Y_0) = pi_1(Y)`, and restrict the cut quotient to `Y_0 -> X`. The remaining meridian basis then proves injection and transports the peripheral path relation. The claimed straightening statement is unchanged.

9. **`thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n`, first Remark.** Restricted independence of the two conditions to `n>=2`, consistent with its small-rank cases and the explicit witnesses in the definition. The characterization and uniqueness statement are unchanged.

10. **Assigned A-page prose, `library/braid-groups/the-artin-action-on-a-free-group.md`.** Replaced stale descriptions of the faithfulness route and Choice costs with the current point-pushing induction and compact tether-square argument. The general arc-isotopy lemma assumes AC; the free-basis and boundary-word arguments are choice-free. Clarified composition order, the inverse generator convention relative to Artin, the actual postcomposition shortening proof, and the full-twist conjugation sign. Kept the page's existing item placement and prerequisite metadata.

11. **Proof contracts.** Updated affected definitions, exact citation quotes, derivations, proof uses, and boundary evidence in `research/frontier-38-owner-30-batch-15.proof-contracts.json` and the corresponding batch-owned entries of `research/frontier-38-owner-30-proof-contracts.json` (18 affected item entries). Also corrected stale smooth-extension boundary evidence referring to nonexistent added endpoint segments: its current proof uses extension of the track velocity and a smooth cutoff. Corrected the characterization contract's claim that its uniqueness step was choice-free; that step uses AC through faithfulness. Final checker repairs added required step inputs and distinguished nonapplicable boundary reasons from checked evidence.

All nine edited items lacked a `verification.judge` record when checked, so there was no stale judge record to remove. No judgment, certification, withdrawal, publication, or engine transition was performed. No B-page prose or published item was edited.

## Source sections actually read

- **Emil Artin, *Theory of Braids* (1947)**, https://webhomes.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf, printed pp. 113–115 (PDF pages 14–16), retrieved and extracted with PyMuPDF. Read equations (14)–(15), the exact ordered-product condition (16), the complete two-case length argument, its two alternatives, the subset qualification, and Theorem 16. Its generator convention is the inverse of the authored substitution. The local calculations above supply the explicit prefix/length details omitted in the source's prose.
- **Juan Gonzalez-Meneses, *Basic results on braid groups***, https://arxiv.org/pdf/1010.0321, section 1.6 and 1.6.1, printed pp. 8–10. Read the free meridian basis, generator substitutions, invariance conditions, Theorem 1.3 (an automorphism is in the braid image exactly when every basis image is conjugate to a positive generator and the ordered product itself is fixed), and the basis-image word-problem criterion. This source also uses the inverse generator convention.
- **Farb–Margalit, *A Primer on Mapping Class Groups*, author draft v5.0**, https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf, printed pp. 31–38 (PDF pages 41–48), retrieved and extracted with PyMuPDF. Read the complete proof of Lemma 1.8, both proofs of the bigon criterion, Proposition 1.10 and its proof, smooth isotopy extension discussion, and the full arc modifications. Section 1.2.7 defines proper arcs in the filled marked surface, treats images as unoriented, distinguishes endpoint-fixed homotopies, excludes removal of the depicted boundary half-bigon under that convention, and says homotopy versus isotopy also holds for arcs. This resolves the relevant conventions of the authored arc lemma. Its longer arbitrary-plane-arc construction was checked from the local proof and its declared supplier statements, not inferred merely from the source's smooth extension discussion.

Initial web-tool attempts at the Artin and archived Primer PDFs failed; both complete relevant sections were subsequently obtained by direct retrieval. No failed fetch was treated as mathematical evidence.

## Opened inventory

### Assigned pages and items

- `library/braid-groups/the-artin-action-on-a-free-group.md` (A).
  - `items/def-standard-meridians-of-a-punctured-disk.md` — full item.
  - `items/lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis.md` — full item.
  - `items/thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians.md` — full item.
  - `items/lem-the-standard-stem-system-cuts-the-punctured-disk-open-to-a-disk.md` — full item.
  - `items/lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians.md` — full item.
  - `items/lem-a-based-self-map-of-the-punctured-disk-inducing-the-identity-on-pi-one-is-based-homotopic-to-the-identity.md` — full item.
  - `items/lem-a-plane-arc-has-a-rectangular-neighborhood-by-schoenflies.md` — full item.
  - `items/lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints.md` — full item.
  - `items/lem-smooth-relative-isotopy-extension-for-disk-arcs-with-puncture-endpoints.md` — full item.
  - `items/lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy.md` — full item.
  - `items/lem-a-standard-stem-arc-system-can-be-straightened-by-boundary-and-puncture-fixed-ambient-isotopy.md` — full item.
  - `items/lem-a-boundary-fixed-punctured-disk-map-acting-trivially-on-pi-one-is-isotopic-to-the-identity.md` — full item.
  - `items/def-artin-automorphisms-of-the-free-group.md` — full item.
  - `items/lem-artin-automorphisms-satisfy-the-braid-relations.md` — full item.
  - `items/def-the-artin-representation-on-a-free-group.md` — full item.
  - `items/prop-the-geometric-action-on-meridians-is-the-artin-representation.md` — full item.
  - `items/thm-the-artin-representation-is-faithful.md` — full item.
  - `items/lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word.md` — full item.
  - `items/def-peripheral-boundary-preserving-automorphism-of-f-n.md` — full item.
  - `items/lem-artins-product-cancellation-dichotomy.md` — full item.
  - `items/lem-an-extremal-cancellation-shortens-an-artin-substitution.md` — full item.
  - `items/thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism.md` — full item.
  - `items/thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n.md` — full item.
  - `items/cor-the-artin-action-solves-the-braid-word-problem.md` — full item.
- `library/braid-groups/the-artin-action-on-a-free-group-examples.md` (B).
  - `items/ex-the-artin-action-of-the-b-three-generators.md` — full item.
  - `items/ex-the-full-twist-acts-by-boundary-conjugation.md` — full item.
  - `items/cex-permuting-meridian-conjugacy-classes-without-fixing-the-boundary-word-is-not-artin.md` — full item.
  - `items/cex-the-induced-permutation-does-not-determine-a-braid.md` — full item.

### Direct suppliers

The following 51 supplier files were opened for their actual Statement, Definition, or Example sections. Relevant proof clauses were additionally opened in the polygonal surgery, mapping-class/half-rotation, point-pushing, and Choice-implication suppliers. This is not a whole-item audit of every published supplier.

- `items/cor-homology-of-spheres.md`.
- `items/cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-based-loops-and-fundamental-group.md`.
- `items/def-boundary-fixed-mapping-class-group-of-a-punctured-disk.md`.
- `items/def-braid-group-by-the-artin-presentation.md`.
- `items/def-countable-choice.md`.
- `items/def-elementary-geometric-half-twist.md`.
- `items/def-embedded-submanifold-and-slice-chart.md`.
- `items/def-free-group.md`.
- `items/def-group-isomorphism-and-automorphism.md`.
- `items/def-homeomorphism-and-open-maps.md`.
- `items/def-homotopy-relative-and-path-homotopy.md`.
- `items/def-path-connected.md`.
- `items/def-point-pushing-homomorphism-for-a-puncture.md`.
- `items/def-retraction-and-deformation-retract.md`.
- `items/def-time-dependent-vector-field-and-evolution-operator.md`.
- `items/def-wedge-of-pointed-spaces.md`.
- `items/ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds.md`.
- `items/lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed.md`.
- `items/lem-cw-quotients-and-collapse-of-a-contractible-subcomplex.md`.
- `items/lem-finite-plane-graph-ear-and-face-facts.md`.
- `items/lem-finite-polygonal-disk-and-collar-surgery.md`.
- `items/lem-jordan-schoenflies-extension-for-plane-curves.md`.
- `items/lem-plane-arc-complements-and-accessible-jordan-points.md`.
- `items/lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies.md`.
- `items/prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant.md`.
- `items/prop-retracts-inject-fundamental-groups.md`.
- `items/prop-the-artin-presentation-surjects-onto-geometric-braids.md`.
- `items/thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group.md`.
- `items/thm-banach-fixed-point.md`.
- `items/thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk.md`.
- `items/thm-brouwer-fixed-point-theorem.md`.
- `items/thm-choice-implies-dependent-implies-countable-choice.md`.
- `items/thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval.md`.
- `items/thm-covering-space-lifting-criterion.md`.
- `items/thm-euclidean-space-complete.md`.
- `items/thm-free-groups-unique-up-to-unique-isomorphism.md`.
- `items/thm-fundamental-group-laws.md`.
- `items/thm-fundamental-group-of-finite-wedge-of-circles.md`.
- `items/thm-higher-dimensional-spheres-are-simply-connected.md`.
- `items/thm-induced-fundamental-group-map-functoriality.md`.
- `items/thm-point-pushing-is-the-kernel-of-forgetting-a-puncture.md`.
- `items/thm-reduced-words-form-the-free-group.md`.
- `items/thm-singular-homology-satisfies-homotopy-exactness-and-excision.md`.
- `items/thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set.md`.
- `items/thm-the-artin-presentation-is-complete-for-geometric-braids.md`.
- `items/thm-the-braid-group-surjects-onto-the-symmetric-group.md`.
- `items/thm-time-dependent-vector-fields-have-local-smooth-evolution-operators.md`.
- `items/thm-von-dyck.md`.
- `items/thm-word-problem-for-free-groups.md`.

## Validation

- Ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and then `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` for each of the nine edited items. Every command exited zero. The three definitions had no numbered proof sections for precheck; the six proof-bearing items each passed.
- After the last item edit and formatter, ran one final batched `node tools/proof-layout.mjs` command on all nine explicit changed paths: **9 items, 29 steps, 0 defects**, exit zero. An earlier eight-item pass preceded the final small-rank remark repair and was superseded by this complete final batch.
- `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-15.proof-contracts.json --strict`: **0 errors, 0 warnings, 28/28 items checked**, exit zero. An initial run found eight contract anchoring/input/reason errors; these were corrected before the successful final run.
- `node tools/boundary-audit.mjs research/frontier-38-owner-30-batch-15.proof-contracts.json --fail-on-contradicted`: exit zero, 224 boundary rows, no detected contradictory dispositions or template-reuse clusters. Its candidate detection is not mathematical acceptance.
- Independently computed and freely reduced **1,927** braid substitutions at ranks 2–4 with word lengths 0–4. The selected junctions exercised **1,109 left** and **695 right** shortening cases; the actual composite had strictly smaller minimal conjugator length in every such case, and preserved the boundary word. Checked the full-twist conjugation images at ranks 1–6. These are bounded smoke computations; the proofs above establish the general statements.
- All 28 contract citation quotes and derivation claims were compared with the current item text; no stale quote or claim remained. Consolidated updates were limited to batch-owned entries.

## Page verdicts and unresolved defects

| Page | Reader verdict |
|---|---|
| `the-artin-action-on-a-free-group` | Repaired the defects above. No remaining confirmed mathematical defect found in the reviewed page and item arguments. The faithfulness chain uses the independent point-pushing route; general arc results remain separately available under AC. |
| `the-artin-action-on-a-free-group-examples` | No repair required. The B_3 tables, both relation composites, full-twist sign and induction, transposition counterexample, and pure-square computation agree with the authored substitutions and ordinary composition. No confirmed defect found in its prose or four items. |

**Uneditable findings:** none. **Blocker:** none. No proposed withdrawal was needed.

**Coverage limitation:** this was an independent review of the two assigned pages, all 28 assigned items, their direct supplier statements, selected supplier proof clauses, and the source sections listed above. It was not an exhaustive independent re-audit of the entire published transitive dependency graph, nor a check of every bibliographic reference in full. Local validators and finite computations do not certify mathematical correctness or replace Step 5b review.
