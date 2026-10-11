# Reader 30 — batch 30

Run: `frontier-44-special-representation-examples-28-six-step`. The current runtime state was opened and identifies stage `3a-read`; the assigned carriers are draft. Review completed for both pages and all six assigned items. All confirmed defects in that authored scope were repaired. No withdrawal or uneditable finding remains. This report assigns no judge, audit, certification or publication stamp.

## Opened inventory and reading order

The dispatch manifest `research/frontier-44-special-representation-examples-28-six-step-batch-30.pages.json`, batch proof contracts, `briefs/reader.md`, and the repository instructions were opened. The task-named batch notes were also opened; they concern analytic constructible sheaves from the predecessor inventory, and were not used as evidence for the current Hodge batch.

Assigned pages, read in full:

- `library/algebraic-geometry/mixed-hodge-structures-and-strictness.md` (A).
- `library/algebraic-geometry/mixed-hodge-structures-and-strictness-examples.md` (B).

Assigned items, read in full with local suppliers before consumers:

- `def-rational-mixed-hodge-structure`.
- `lem-deligne-splitting-of-a-mixed-hodge-structure`.
- `lem-morphisms-of-mixed-hodge-structures-are-strict`.
- `ex-a-mixed-hodge-extension-need-not-split-rationally`.
- `def-cohomological-mixed-hodge-complex`.
- `lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights`.

External published supplier files opened for the definitions, relevant statements and arguments (the first twelve are the assigned items’ direct external suppliers; the rest check the complex-field and spectral-sequence interfaces):

- `items/def-linear-basis.md`.
- `items/def-increasing-and-decreasing-filtration-of-an-object.md`.
- `items/def-associated-graded-object-of-a-filtered-object.md`.
- `items/def-internal-direct-sum.md`.
- `items/thm-modules-over-a-ring-form-an-abelian-category.md`.
- `items/def-complex-numbers-and-arithmetic.md`.
- `items/def-tensor-product-of-modules-by-generators-and-relations.md`.
- `items/def-cochain-complex-in-an-abelian-category.md`.
- `items/def-filtered-chain-complex.md`.
- `items/def-filtered-chain-map.md`.
- `items/def-quasi-isomorphism.md`.
- `items/thm-the-cohomological-filtered-complex-construction.md`.
- `items/thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology.md`.
- `items/prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences.md`.
- `items/def-cohomological-spectral-sequence.md`.
- `items/prop-e-zero-is-the-associated-graded-complex.md`.
- `items/prop-e-one-is-homology-of-the-associated-graded-complex.md`.
- `items/thm-complex-numbers-form-a-field.md`.

## Mathematical review and repairs

The mixed-Hodge definition preserves the opposition, pure-weight, Tate, tensor, dual and polarization conventions. Opposition’s spanning and vanishing forms are used together. The splitting proof’s finite correction in 2.2 establishes the graded lift; 4.1 excludes lower-weight intersection by opposition; 5.1 and 6.1 give the exact W and F sums. In 5.2, representatives of a class in the lower-weight part of W_m/W_{m-2} actually lie in W_{m-1}, which justifies the intersection calculation there. This splitting need not split the conjugate Hodge filtration by its original pieces.

The strictness proof uses the functorial splitting for W and F, rational rank descent, and conjugation on the pure graded pieces for kernels, images and cokernels. The example’s two graded lines are respectively type (-1,-1) and (0,0); a rational section would require slope i, so its nonsplitting conclusion is sound.

The mixed-Hodge-complex proof’s exact E_0, E_1 and E_2 sequences for F^aK→K→K/F^aK give the recurrent filtration. Rationality and purity force all higher differentials to vanish. The stable graded injection then makes H(F^aK)→H(K) injective and strict for the finite image weight filtration, proving that the recurrent filtration is the abutment Hodge filtration. This is a local proof of the prerequisite that the A page had still described as unavailable. The shifted index p=n-m, q=m is correct; in the nonnegative cosimplicial case p≥0 gives m≤n.

Every item edit and its evidence:

| Subject and current locator | Repair | Evidence |
| --- | --- | --- |
| `def-rational-mixed-hodge-structure`:50 | The tensor supplier constructs an abelian group, so the complex scalar action and finite coordinate interpretation are now stated explicitly. The tensor-filtration prose no longer places the rational weight sum in a complex space; W uses Q and F uses C. The Tate locator in Weber is printed p. 6, not p. 4. | The tensor balancing relations preserve c(h⊗z)=h⊗cz; a finite rational basis identifies the complexification with C^d. The tensor formulas themselves are preserved. Weber (2.1.5) is on printed p. 6. |
| `lem-deligne-splitting-of-a-mixed-hodge-structure`:77 | Replaced “pairwise independent subspaces” by summands of a finite internal direct sum, with the one-line zero-intersection argument. | The opened def-internal-direct-sum explicitly says pairwise zero intersections are insufficient for three summands; D2 is the needed joint-independence condition. No splitting statement was changed. |
| `lem-morphisms-of-mixed-hodge-structures-are-strict`:64 | Added the componentwise lift proving surjectivity, and explicit rational descent of exactness; removed the imprecise redundant characterization of strictness. Canonical phase numbering now has exactness 3.1 and kernel/image/cokernel 3.2. | A surjection on the whole complex space is not, by itself, a proof of surjectivity on each restricted piece. Decomposing a lift and using functoriality gives the required lift. Rational matrix ranks give descent, as proved in step 2.1. |
| `def-cohomological-mixed-hodge-complex`:91 | Corrected the source note that equated an abstract filtered derived-category isomorphism with a supplied chain map in the chosen direction. Corrected Weber (2.4.1) to printed p. 8. | Deligne III (8.1.5) states an isomorphism in a filtered derived category. It need not be an actual arrow between the chosen models; the application must construct a representative. The concrete definition and all its axioms are unchanged. |
| `lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights`:60 | Made the cosimplicial system’s finite Hodge filtrations and filtration/comparison-compatible structure maps explicit. Step 1.3 proves exact scalar extension without an arbitrary basis; step 5.1 applies it and spells out filtered surjectivity. Step 7.1 defines the total Hodge filtration and D=δ+(-1)^p d and checks D²=0 and preservation of F. Corrected F3: square-zero alone does not imply preservation of an arbitrary filtration. Corrected Weber (2.4.1) to printed p. 8. | Finite diagonals alone do not provide Hodge bounds on the summands, and cosimplicial identities alone do not make cofaces preserve F. Deligne III (8.1.10.1) works with cosimplicial filtered comparison data. Exact extension is needed to identify the rational pages and comparison with complex cohomology; the directed finite-dimensional argument closes that prerequisite. The retained cohomology, degeneration, functoriality and weight conclusions are unchanged. |
| `ex-a-mixed-hodge-extension-need-not-split-rationally`:63 | Corrected the rational inclusion 1↦e1 and identified C→H_C as its complexification. Corrected the Tate locator in Weber to printed p. 6. | The previous wording called a complex-domain map the rational map Q(1)→H. The corrected domains match the exact sequence. The opposition calculation and obstruction q=i are unchanged. |

A-page prose was repaired in its splitting paragraph: W and F are partial sums of I, whereas the conjugate Hodge filtration is a partial sum of the conjugate bigrading. Its final paragraph now describes the actual local recurrent-to-abutment proof instead of calling it an open obligation. The evidence is the splitting Statement and Proof 5.2/6.1, and the cohomology lemma Proof 1.2–4.1. B-page prose was reviewed and unchanged.

The affected contract derivations, fact-use step lists and exact quotations from repaired owned suppliers were synchronized in `research/frontier-44-special-representation-examples-28-six-step-batch-30.proof-contracts.json`, including the new scalar-extension step and canonical numbering. Existing historical independent boundary-review records were preserved. None of the six item frontmatters contained a `verification.judge` record; there was no stale record to remove. No verdict marker was added.

## Interface-change consumer check

The original/current dependency and alias interfaces of the changed definitions/statements have the same edges and aliases. The rational tensor sum clarification and explicit complex scalar action preserve the original mathematical convention. Part (ii)’s clarification makes explicit the structure maps of a cosimplicial object in filtered rational Hodge complexes; all result conclusions are retained.

The two direct cohomology consumers were opened for their actual constructions and applications:

- `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures`, Facts F5 and Proof 4.1–8.1: constructs the concrete comparison, strict graded differential and finite filtrations, then uses unchanged part (i). The corrected distinction between a derived comparison and an actual chain map agrees with its explicit strictification in 4.1.
- `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`, Facts F3/F7 and Proof 1.1/3.1/3.2: the Godement/de Rham construction explicitly gives nonnegative bidegrees, finite form-degree F, coface maps preserving F and comparison-compatible maps. Thus it satisfies the now explicit conditions of part (ii). Its tensor/dual use in 4.1 agrees with the rational/complex filtration clarification.

The 32 current outside consumers below were opened at their claim sections and relevant parent-interface citations for a focused impact check. Their unchanged parent conclusions remain available, so no consumer repair is required by these edits. This is not a new audit of their other proofs or prerequisites.

- `cex-specializing-v-to-one-forgets-graded-decomposition-information`.
- `cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group`.
- `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero`.
- `def-geometric-polarizable-hodge-variation`.
- `def-graded-adjustment-polynomials-in-positive-characteristic`.
- `ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class`.
- `ex-cyclic-etale-covers-give-geometric-semisimple-weight-zero-monodromy`.
- `ex-projective-perverse-decomposition-for-projective-space-to-a-point`.
- `ex-projective-versus-simple-grothendieck-classes-in-a-small-block`.
- `ex-the-logarithmic-class-of-the-punctured-line-has-weight-two`.
- `lem-cyclotomic-extension-of-scalars-respects-the-based-quotient`.
- `lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree`.
- `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`.
- `lem-reduction-of-characteristic-zero-simple-modules-modulo-p`.
- `lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations`.
- `prop-qg8-categorification-transports-across-the-hecke-klr-bridge`.
- `rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers`.
- `thm-ariki-canonical-basis-theorem-in-characteristic-zero`.
- `thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases`.
- `thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero`.
- `thm-graded-specht-classes-realize-standard-fock-vectors`.
- `thm-graded-specht-heads-classify-the-graded-simple-modules`.
- `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures`.
- `thm-mixed-hodge-weights-control-proper-cohomological-restriction-images`.
- `thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment`.
- `thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology`.
- `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`.
- `thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps`.
- `thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis`.
- `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`.
- `thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis`.
- `thm-smooth-projective-gauss-manin-local-systems-are-semisimple`.

## Authoritative source evidence

Complete relevant source passages actually consulted:

- [Deligne, Théorie de Hodge II](https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf): (1.2.3)–(1.2.13), printed pp. 9–14, including the two-filtration proof, lifting and opposed-filtration category arguments; (1.3.8)–(1.3.17), printed pp. 16–19, including the full recurrent/direct filtration comparison argument; (2.1.15)–(2.1.17), printed p. 27, polarization; (2.3.1)–(2.3.6), printed p. 30, mixed structures, morphisms and strictness; (3.2.5)–(3.2.10), printed pp. 35–37, purity and higher-differential vanishing.
- [Deligne, Théorie de Hodge III](https://www.numdam.org/item/PMIHES_1974__44__5_0.pdf): (8.1.1)–(8.1.17), printed pp. 28–34, including axioms GH1/GH2/GHM, filtered derived comparisons, Scholie (8.1.9), cosimplicial data, and the complete proof of (8.1.15) in (8.1.17). In (8.1.9), W[n] and F give the cohomology structure and the weight sequence degenerates at E_2. The filtered cosimplicial data in (8.1.10.1) explain why identity equations alone are insufficient.
- [Weber, Notes on Mixed Hodge Structures](https://www.mimuw.edu.pl/~aweber/ps/mhs.pdf): (2.1.1)–(2.1.2), printed p. 5; (2.1.5), (2.2.1)–(2.2.6), printed p. 6; (2.2.7), (2.3.1), printed p. 7; (2.4.1), printed p. 8. These give the Tate convention, splitting formula, strictness, complex axioms and shifted weights; the file states that it supplies statements rather than proofs.

The browser could read Deligne II but failed on the other PDFs; direct HTTP retrieval and PyMuPDF extraction succeeded for Deligne II/III and Weber. The El Zein URL returned HTTP 403 both through the browser and direct retrieval. Voisin, Cirici–Horel and Arapura were not independently consulted; no claim of verifying their secondary documentary locators is made. Primary-source and local arguments supplied the mathematical evidence above.

## Local validation

- Ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` for each of the six changed items.
- Ran `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` for each. Final results: four proof-bearing items pass; the two definitions have no phase proof (0 checked, 0 failing). The initial strictness-item run requested canonical renumbering, which was adopted, reflowed and rerun successfully.
- Scoped `node tools/rendercheck.mjs` over the six changed item paths and both assigned page paths: 8 files, exit 0; all math spans and YAML parse.
- `node tools/proof-contract.mjs research/frontier-44-special-representation-examples-28-six-step-batch-30.proof-contracts.json --strict --items <six assigned IDs>`: 6/6 checked, 0 errors, 0 warnings.
- Final one-command check after all item edits and formatters: `node tools/proof-layout.mjs items/def-rational-mixed-hodge-structure.md items/lem-deligne-splitting-of-a-mixed-hodge-structure.md items/lem-morphisms-of-mixed-hodge-structures-are-strict.md items/def-cohomological-mixed-hodge-complex.md items/lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights.md items/ex-a-mixed-hodge-extension-need-not-split-rationally.md`: 6 items, 28 steps, 0 defects, exit 0.

An attempted renderer `--help` invocation began an unscoped check because that tool has no help mode; it was interrupted with exit 130 and supplies no validation evidence. The successful explicit-path check above is the renderer evidence. These checks are mechanical local validation, not independent acceptance gates.

## Page verdicts, unresolved defects and limitations

| Page | Reader verdict |
| --- | --- |
| `mixed-hodge-structures-and-strictness` (A) | No confirmed defect remains after the six item repairs and two prose corrections. The full advertised structural and cohomology/weight claims are retained. |
| `mixed-hodge-structures-and-strictness-examples` (B) | Its example and summary agree after the rational-domain correction in the owned example; no page-prose repair is needed. |

Uneditable findings: none. Proposed withdrawals: none. Mathematical blocker: none in the reviewed authored scope. Documentary limitation: El Zein was inaccessible, and three secondary references were not reverified. Published suppliers were checked at the interfaces and arguments needed here, without claiming an exhaustive audit of their transitive foundations. Outside consumer reading was focused on the impact of the edits, not all unrelated mathematics.

## Before-edit fingerprints

- `def-rational-mixed-hodge-structure`: `d236a388f88705f3c02c626e4de1963261ea0cfdc9d4121421fb5ee7a481b56d`.
- `lem-deligne-splitting-of-a-mixed-hodge-structure`: `2b42283c3d8ed7700877e147dea876c5c270bd73d3875886ed5fe96afd9ad3fe`.
- `lem-morphisms-of-mixed-hodge-structures-are-strict`: `d96ff0cc475ad32f3fc66ade81f9d297fa33d24202998d56541bddb7c3a13d14`.
- `def-cohomological-mixed-hodge-complex`: `dc76c936d92b63cd862674a5284b15c2fd7053c65f2a2167d8082fe061629716`.
- `lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights`: `0de51376d535c5cc4dedb973ee918340381ae470414132ecfa36087796f3d46f`.
- `ex-a-mixed-hodge-extension-need-not-split-rationally`: `4c14658637d24ec63c13c6954366610f48c121301562f44e440faa8dd14839ab`.

## Final item fingerprints

- `def-rational-mixed-hodge-structure`: `c17ed87e9beb3a9e6ddb45b9c06ce120de91c05c5776dd1e61fb81b38dbb8636`.
- `lem-deligne-splitting-of-a-mixed-hodge-structure`: `2594f21226aa05efbdffa848eefd981de14bf0fdc4eface6d165ffc9e5f788ec`.
- `lem-morphisms-of-mixed-hodge-structures-are-strict`: `10f9ae265d00c472dfbf3df179cf3abaf4b2c661b11988886f92244a5d1e121f`.
- `def-cohomological-mixed-hodge-complex`: `e268503716e7d1740ae30abd07f7300e6546e4f49955b27482188eb0f02a7416`.
- `lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights`: `7c7edc73b8bc7a4314d04302b7081987ec95bf82b732b8ff37c21d39ef188f40`.
- `ex-a-mixed-hodge-extension-need-not-split-rationally`: `ea87a8f13c63a023b892dbeebcd030e95651202a51a9f5b85f63f0391dbe1f53`.
