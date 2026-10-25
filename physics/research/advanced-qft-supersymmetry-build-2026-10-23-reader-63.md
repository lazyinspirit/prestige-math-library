# Reader report — batch 63

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: Step 3a reader  
Scope: batch `63`

## Verdict

Both assigned pages pass review. The seven assigned items have sound definitions, statements, arguments, and examples after the repairs listed below. No uneditable defect remains. The findings JSON therefore has an empty `findings` array.

## Opened inventory

Assigned pages, opened in full:

- `qftx-gaga-analytic-coherence`
- `qftx-gaga-analytic-coherence-examples`

Assigned items, reviewed in dependency order:

1. `def-qftx-analytic-coherent-module`
2. `lem-qftx-analytic-coherent-matrix-kernels`
3. `lem-qftx-gaga-analytic-bounded-degree-relations`
4. `lem-qftx-coherent-analytic-module-calculus`
5. `thm-qftx-gaga-analytic-oka-coherence`
6. `ex-qftx-gaga-analytic-relation-kernel`
7. `ex-qftx-gaga-analytic-skyscraper-presentation`

Published dependency items opened for the assigned definitions and proofs:

- `def-ringed-space`
- `def-module-on-ringed-space`
- `def-kernel-cokernel-image-sheaves`
- `def-stalk-of-presheaf`
- `def-complex-manifolds-and-holomorphic-vector-bundles`
- `thm-exactness-of-sheaves-stalkwise`
- `def-exact-sequence-sheaves`
- `def-regular-holomorphic-germ`
- `def-weierstrass-polynomial`
- `thm-weierstrass-preparation-theorem`
- `thm-weierstrass-division-theorem`
- `thm-power-series-expansion-in-several-complex-variables`
- `cor-uniqueness-of-multivariable-power-series-coefficients`
- `def-axiom-of-choice`
- `thm-holomorphic-germ-ring-is-noetherian`
- `lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular`
- `thm-finite-generation-and-finite-presentation-over-a-noetherian-ring`

The batch-63 manifest and proof contracts were read as navigation and obligation evidence, not as verdicts. The two assigned page files have empty Markdown bodies, retain `page_layout: compact-v1`, and match their manifest inventories.

## Page verdicts

| Page | Verdict | Evidence |
|---|---|---|
| `qftx-gaga-analytic-coherence` | Pass | Draft mathematics A page; its five listed items and order match the batch manifest. The frontmatter-only page has no summary. |
| `qftx-gaga-analytic-coherence-examples` | Pass | Draft mathematics B page; its two example placements match the manifest. The frontmatter-only page has no summary. |

## Item review and repairs

- `def-qftx-analytic-coherent-module`: the definition gives local finite type, the relation sheaf of a finite free module map, coherence, and its analytic specialization explicitly. Its Demailly locator incorrectly named Definition 3.18, which defines an analytic sheaf. I changed it to Chapter II §3.2.1, Definitions 3.8 and 3.11, the local finite-type and coherence definitions. Wehler §4.2, Definitions 4.25–4.26, was also opened and is accurate for module sheaves and coherence on complex manifolds.

- `lem-qftx-analytic-coherent-matrix-kernels`: the target-rank induction handles target ranks zero and one, then projects from rank `q+1` to rank `q`; the scalar relation generators give local finite generation of the remaining kernel. The use of stalkwise exactness is adequate. Its `tikzcd` diagram has the stated source map, projection, and composite directions; the proof does not rely on the diagram.

- `lem-qftx-gaga-analytic-bounded-degree-relations`: the unit case, preparation and division steps, polynomial-degree estimates, and final generation argument are valid. I made the common centre explicit: `U'` and `D` are centered at zero, and every lower coefficient vanishes there, matching the exact supplied definition of a Weierstrass polynomial and Demailly’s Lemma 3.20 hypotheses. The statement still allows every point in the product polydisc. I updated its Fact F2 and the endpoint evidence in the proof contract. The Wehler locator now names the bounded-degree proof parts iii.2–iii.3 instead of inaccurate page ranges.

- `lem-qftx-coherent-analytic-module-calculus`: the local finite-presentation argument, kernel and cokernel arguments, and all three cases of the short exact sequence claim are justified. The cited Wehler propositions were wrong: Proposition 4.32 concerns open loci of morphisms and Definition 4.34 concerns higher direct images. I corrected the sources to §4.3, Proposition 4.31 for kernels/cokernels and Proposition 4.33 for short exact sequences.

- `thm-qftx-gaga-analytic-oka-coherence`: the dimension and tuple-length inductions, bounded-degree coefficient map, noetherian finite-generation step, and finite partial free-resolution construction follow from the stated suppliers. I checked it as the direct consumer of the clarified bounded-degree lemma and updated Fact F4 and its proof-contract quotation. The Wehler citation now identifies Theorem 4.28 without page ranges that did not match Release 4.3.

- `ex-qftx-gaga-analytic-relation-kernel`: away from the origin one coordinate is a unit; at the origin restriction to an axis and power-series divisibility give the generator `(-z_2,z_1)`. Coherence follows from the reviewed Oka theorem and module calculus. Both cited source sections support the contextual Oka/coherence facts; I removed mismatched Wehler page ranges.

- `ex-qftx-gaga-analytic-skyscraper-presentation`: the quotient stalks, coordinate Koszul generators, coherence conclusion, and the `N=1` empty generating family are justified. The induction on `N` restricts to `z_N=0`, removes the lower-coordinate relations, and factors the remaining coefficients by `z_N`. Both cited source sections support the contextual Oka/coherence facts; I removed mismatched Wehler page ranges.

The Demailly source was read at [Chapter II §3.2.1, Definitions 3.8 and 3.11, and §3.3, Theorem 3.19 and Lemma 3.20](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf). The Wehler Release 4.3 source was read at [§4.2, Theorem 4.28, parts ii and iii.2–iii.3, and §4.3, Propositions 4.31 and 4.33](https://www.mathematik.uni-muenchen.de/~wehler/20190530_Stein_Manifolds_script.pdf). The item’s `math.lmu.de` URL timed out in the browser; the same Release 4.3 PDF was available at the linked alternate LMU host.

The `tikzcd` diagram in `lem-qftx-coherent-analytic-module-calculus` correctly records the exact sequence with inclusion `i` and quotient `p`; its proof is independent of the diagram. No other assigned item contains a TikZ/tikzcd diagram or requires an additional diagram.

## Edits

- Corrected the Demailly definition locator in `items/def-qftx-analytic-coherent-module.md`.
- Explicitly stated the common-centre hypotheses and the coefficient form in `items/lem-qftx-gaga-analytic-bounded-degree-relations.md`; clarified Fact F2 and its proof-contract endpoint evidence.
- Corrected Wehler proposition numbers in `items/lem-qftx-coherent-analytic-module-calculus.md`.
- Updated the direct consumer’s Fact F4 and its proof-contract quotation in `items/thm-qftx-gaga-analytic-oka-coherence.md`.
- Removed inaccurate Wehler page ranges from the source labels in the theorem and both examples; their exact theorem/lemma locators remain.
- No verification judge records were present on the changed draft items, so none required removal. The two assigned pages and all other item bodies were not edited.

## Checks

- Reflow: all six changed item paths exited successfully and were unchanged by reflow.
- Precheck: the five proof-bearing changed items passed; the definition reported `0 checked, 0 failing`.
- Final proof layout: `6 items, 32 steps, 0 defects`.

## Uneditable defects and blockers

None. No blocker remains. All defects identified in this batch were within the assigned draft items and were repaired; there are no findings to route outside this write scope.
