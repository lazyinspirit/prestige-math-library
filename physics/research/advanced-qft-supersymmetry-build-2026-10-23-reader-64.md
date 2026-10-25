# Independent Step 3a Reader Report — Batch 64

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: read-only-independent reader with repair authority for in-flight batch-64 items and its A page.

## Opened inventory

### Assigned pages

| Page | Carrier | Inventory and review |
|---|---|---|
| `qftx-gaga-local-analytic-flatness` | `library/quantum-field-theory-mathematics/qftx-gaga-local-analytic-flatness.md` | Draft mathematics A page; frontmatter only; `page_layout: compact-v1`; lists the completion lemma and faithful-flatness theorem. Its 14 required mathematical pages were opened as published frontmatter: `relations-functions-and-quotients`, `analytic-continuation-and-monodromy`, `holomorphic-functions-of-several-variables`, `holomorphic-inverse-and-weierstrass-preparation`, `noetherian-rings-and-hilbert-basis`, `inverse-limits-and-noetherian-completion`, `tensor-products-of-modules`, `flatness-and-faithful-flatness`, `tor-flatness-and-global-dimension`, `schemes-subschemes-and-morphisms-locally-of-finite-type`, `the-field-of-fractions-and-localisation`, `construction-of-the-natural-numbers`, `free-modules-and-exact-sequences`, and `field-extensions-and-the-complex-numbers`. |
| `qftx-gaga-local-analytic-flatness-examples` | `library/quantum-field-theory-mathematics/qftx-gaga-local-analytic-flatness-examples.md` | Draft mathematics B page; frontmatter only; `page_layout: compact-v1`; lists the two examples and requires the A page plus `relations-functions-and-quotients`, `the-field-of-fractions-and-localisation`, and `holomorphic-functions-of-several-variables`. |

Both page bodies are empty as required. Neither page contains a summary. No page prose was changed.

### Assigned items, read in dependency order

1. `lem-qftx-gaga-algebraic-analytic-local-completions`: opened its current statement, references, Facts & Assumptions, proof, remark and `tikzcd` square. Its direct suppliers were opened at the relevant Definition or Statement sections: `def-axiom-of-choice`, `def-multiplicative-subset-and-localisation`, `def-holomorphic-germ-ring-and-its-maximal-ideal`, `prop-units-in-the-holomorphic-germ-ring`, `thm-holomorphic-germs-at-a-point-form-a-local-ring`, `thm-holomorphic-germ-ring-is-noetherian`, `thm-complex-numbers-form-a-field`, `thm-noetherian-ring-ideal-characterisations`, `thm-power-series-expansion-in-several-complex-variables`, `cor-uniqueness-of-multivariable-power-series-coefficients`, `thm-recursion`, `cor-finite-variable-polynomial-ring-noetherian`, `thm-noetherian-ring-quotients-and-localisations`, and `cor-completion-commutes-with-finite-quotients-and-submodules`.
2. `thm-qftx-gaga-analytic-local-ring-flatness`: opened its full current item. In addition to the lemma and shared suppliers above, opened the relevant supplier definitions/statements for `def-scheme`, `def-locally-finite-type-and-finite-type-morphism`, `def-finite-type-and-module-finite-algebras`, `def-flat-and-faithfully-flat-modules-and-ring-maps`, `thm-completion-of-a-noetherian-local-ring`, `thm-flatness-of-noetherian-completion`, `thm-flatness-criteria-by-injections-and-ideals`, `thm-faithfully-flat-ring-map-characterisations`, `thm-long-exact-tor-sequence-in-the-right-module-variable`, `thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes`, `def-free-module-on-a-set-and-standard-basis`, and `thm-universal-property-of-free-modules`.
3. `ex-qftx-gaga-analytic-equal-completions`: opened the full current example and its proof; its supplier chain includes the assigned theorem, `def-axiom-of-choice`, `def-multiplicative-subset-and-localisation`, `thm-power-series-define-holomorphic-functions-in-several-variables`, and `cor-uniqueness-of-multivariable-power-series-coefficients`.
4. `ex-qftx-gaga-analytic-nonreduced-quotient`: opened the full current example and its proof; its suppliers are the assigned lemma, assigned theorem and `def-axiom-of-choice`.

Also opened the exact current batch-64 dependency manifest, pages, notes, proof contracts, coverage record and empty cross-batch dependency record. Those records were treated as navigation/evidence, not as mathematical verdicts.

## Mathematical and source review

The completion lemma's finite-jet construction is coherent: localization at polynomials nonzero at the origin does not change the quotients modulo powers of the origin ideal; the holomorphic germ ring has the same truncated quotients; their inverse limits identify with the coefficient-array formal-series ring. The finite quotient step uses the same finitely generated ideal on both sides, so it does not radicalize the defining ideal. The theorem's conditional argument then establishes injectivity, descends flatness through the common faithfully flat completion, proves faithful flatness from the local-map criterion, proves tensor-unit injectivity, and applies the Tor sequence to establish flatness of `B/A`. The two examples' local coefficient arguments are correct conditional on their listed suppliers.

The source sections were inspected directly:

- Serre, *Géométrie algébrique et géométrie analytique*, §2, no. 6, Proposition 3 and Corollary 1, printed pp. 9–11, and Appendix §22, Definition 4 and Propositions 22, 27–29, printed pp. 36–40: [full paper](https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf). These give common local completions and the flat-pair characterization. Serre's variety argument is not used as a substitute for the in-run proof that quotients by the same possibly nonradical ideal retain nilpotents.
- Anschütz, *Lecture Notes on Étale Cohomology*, §§3.24–3.26, Theorems 3.25 and 3.26(1)–(3), PDF pp. 12–14: [full notes](https://janschuetz.perso.math.cnrs.fr/skripte/lecture_notes_etale_cohomology.pdf). Theorem 3.25 gives the analytification construction; its closed-subscheme property extends the ideal to the analytic structure sheaf. Theorem 3.26(2) gives the local completion isomorphism and faithful flatness, with the local affine-quotient reduction in its proof.
- Kedlaya, MIT OCW 18.726, Lecture 22, §2 local-stalk flatness lemma, PDF pp. 2–3, and §6, PDF pp. 8–9: [lecture PDF](https://ocw.mit.edu/courses/18-726-algebraic-geometry-spring-2009/1329d3923b9f2d55ec7a9ec8e9cb63e9_MIT18_726s09_lec22_gaga.pdf). The local lemma gives the ambient common-completion flatness route; the authored argument supplies its quotient details.
- Lebl, *Tasty Bits of Several Complex Variables*, §1.2, Theorem 1.2.1, PDF pp. 18–21: [full text](https://www.jirka.org/scv/scv.pdf). This supports the power-series convergence/holomorphy convention used by the examples. The derivative-coefficient argument relevant to the external finding below is independently checked algebraically against the current published supplier carrier.

## Edit and verification

I repaired a short proof omission in `lem-qftx-gaga-algebraic-analytic-local-completions`, Proof step 2.1. The item already established the local rings and quotient ideals but did not show that the polynomial-to-germ map is local, which the downstream theorem uses in step 4.1. The added argument extends `P→H` because every denominator nonzero at the origin maps to a unit, compares the evaluation kernels `m A0` and `n`, and checks that the induced quotient map has maximal-ideal preimage `m A0/IA0`. The proof contract's step-2.1 derivation and risk note were updated. No `verification.judge` record was present to remove; the Statement/Definition interface was unchanged, so no consumer propagation was triggered.

Checks after the edit:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-qftx-gaga-algebraic-analytic-local-completions.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-qftx-gaga-algebraic-analytic-local-completions.md` — pass, 1 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/lem-qftx-gaga-algebraic-analytic-local-completions.md` — 1 item, 7 steps, 0 defects.

Diagram review: the lemma's only diagram is the ambient square `A0→H`, `A0→T`, `H→T`, with identity on the formal-series ring after the stated completion identifications. Its labels, arrow directions and commutativity agree with the text. The quotient square is described by applying the same ideal to the four corners; no proof relies on the diagram. The theorem and examples contain no TikZ/tikzcd diagrams.

## Uneditable finding

The published root mathematical supplier `thm-power-series-define-holomorphic-functions-in-several-variables` has a false intermediate bound in Proof step 7.1 (current root carrier `../items/thm-power-series-define-holomorphic-functions-in-several-variables.md`, line 108). From its hypothesis,
`(β_k+1)|c_{β+e_k}| ≤ M(β_k+1) r_k^{-1} ∏_l r_l^{-β_l}`. The displayed right side in step 7.1 equals this bound multiplied by `θ`, since `θ^{|β|+1}∏_l(θr_l)^{-β_l}=θ∏_l r_l^{-β_l}`. For `0<θ<1` it is therefore too small; with one variable, `β=0`, `c_1=M/r` and all other coefficients zero, the claimed bound fails. The step feeds the induction for the supplier's higher derivative coefficient statement. The assigned lemma uses the published uniqueness corollary, whose Fact L1 invokes that derivative-coefficient statement, in Proof step 2.2; the theorem and nonreduced example depend on the lemma, and the exponential example uses the same uniqueness corollary directly. This is reported as a fatal published-dependency finding for owner disposition. The source is outside this reader's write scope.

## Page verdicts and blocker

- `qftx-gaga-local-analytic-flatness`: the page carrier, title, frontmatter-only presentation, prerequisite inventory and item inventory are sound. Mathematical disposition is held by the published dependency finding reaching the completion lemma.
- `qftx-gaga-local-analytic-flatness-examples`: the page carrier, title, frontmatter-only presentation, prerequisite inventory and example inventory are sound. Mathematical disposition is held by the same published dependency finding through the assigned example dependency closure.

Blocker: owner disposition is required for the published mathematical supplier finding. No other defect requiring an outside repair was identified. The direct dependency statements and the exact portions needed for these arguments were reviewed; the complete 1,290-item transitive mathematical closure was not independently re-proved. No page summaries, imported sources, published originals or other batches were edited.
