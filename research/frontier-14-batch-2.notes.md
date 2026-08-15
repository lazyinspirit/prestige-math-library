# Frontier 14 batch 2 — Beta scaffold notes

## Context checkpoint (source harvest and design, 2026-08-16)

- **Owned artifacts:** `research/frontier-14-batch-2.pages.json`, `research/frontier-14-batch-2.notes.md`, `research/frontier-14-batch-2.coverage.json`, and `research/frontier-14-batch-2.proof-contracts.json`. No other path is in scope for this Beta.
- **Current substage:** required repository reading and the independent-source harvest are complete; the item graph and proof-contract decomposition are being serialized.
- **Checks completed:** read `CLAUDE.md`, the active audit resume, `SCHEMA.md`, `README.md`, the Beta brief, the exemplar, the prior-run output pair, step-0 batching, preventions, and T10; inspected the live plan entries and all three published prerequisite pages; confirmed the two target A pages are siblings with no dependency path between them; checked existing item ids for collisions and for B-page results that must remain leaf-locked.
- **Source work completed:** read MIT Press *Topology: A Categorical Approach*, Chapter 5, §§5.6.1–5.6.2; Shapiro's *The Arzelà–Ascoli Theorem* notes, §§1–2; Erdman's *A Companion to Real Analysis*, §§21.2.1–21.2.7 and §§21.2.13–21.2.15; Berkeley Math 205B notes, Theorem 9.3 through Theorem 9.6; and Rutgers topology notes, §1.6, Theorems 1.26–1.30 and the intervening complex counterexample. The browser's PDF text extraction was used to read the actual PDF contents. A local `pypdf` venv installation could not reach PyPI because shell DNS is disabled; this did not block reading or locator verification.
- **Open mathematical question:** finalize the most economical lemma boundary for the general Ascoli theorem—especially the explicit Choice-bearing product-compactness direction—while keeping every citation at its published statement's actual domain.
- **Exact next action:** open the exact on-disk Statements of the small published dependency set chosen by the item graph, then write the four page manifests and the source-by-source coverage dispositions.

## Design decisions in force

The Ascoli–Arzelà A page will take the general route. It will define the compact-open topology for an arbitrary topological domain and topological-domain equicontinuity into a metric target, then prove agreement with the metric-domain definitions on their overlap. Page 283 will be cited only for its genuinely metric statements. General evaluation continuity and the general locally compact Hausdorff Ascoli theorem will be proved on page 285 using page 255's compactness/local-compactness machinery. The sufficiency direction will state its Choice use explicitly through Tychonoff's theorem. For an arbitrary metric target, the correct hypothesis is pointwise relative compactness, not pointwise boundedness; boundedness is retained only in specializations where bounded subsets have compact closure.

The Stone–Weierstrass A page will develop the compact-Hausdorff lattice theorem, derive the real algebra form, and then derive the complex form under the indispensable self-adjointness hypothesis. Its B page will include the closed-disc polynomial algebra as the standard failure without self-adjointness, proved directly by a roots-of-unity averaging obstruction so that no unbuilt holomorphic-uniform-limit theorem is smuggled into the argument. The two A pages will not cite or depend on each other, and no A item will depend on either B page.

No A-page split is presently indicated: the source-faithful developments are well below the 60-item ceiling without dropping canonical results.

## Source ledger and locator verification

The following are the ranges actually read. Each PDF was opened as text and checked for the named headings; an HTTP success response was not treated as evidence of contents.

| Pair | Source and exact range | Role |
|---|---|---|
| Ascoli–Arzelà | Bradley–Bryson–Terilla, *Topology: A Categorical Approach*, Chapter 5, §5.6.1 Definition 5.4–Theorem 5.6 and §5.6.2 Theorem 5.8–Arzela's Theorem, `https://assets.pubpub.org/6d1dqgg9/51597355090422.pdf` | Primary textbook; supplies the general compact-open/evaluation/Ascoli spine. |
| Ascoli–Arzelà | Shapiro, *The Arzelà–Ascoli Theorem*, complete §§1–2, `https://users.math.msu.edu/users/shapiro/Pubvit/Downloads/ArzNotes/ArzNotes.pdf` | Independent lecture-note proof of the compact-metric sequential form and compact-family criterion. |
| Stone–Weierstrass | Erdman, *A Companion to Real Analysis*, §21.2.1–21.2.7 and §21.2.13–21.2.15, `https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf` | Primary textbook; supplies lattice, real, complex, and quotient forms. |
| Stone–Weierstrass | Berkeley Math 205B notes, Theorem 9.3–Theorem 9.6 and the intervening complex remark, `https://math.berkeley.edu/~moorxu/oldsite/notes/205b/205bmain.pdf` | Independent lecture-note treatment of algebra and Kakutani–Krein lattice forms. |
| Stone–Weierstrass | Carlen, Rutgers topology notes, §1.6, Theorems 1.26–1.30 and the intervening disc counterexample, `https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf` | Independent treatment of the nowhere-vanishing and complex forms and the required counterexample. |

### Convention disagreements and corrections

1. Bradley–Bryson–Terilla's printed Arzela theorem uses pointwise **boundedness** for maps into an arbitrary metric target. That is false without a properness or relative-compactness condition: on a one-point domain, all maps into an infinite discrete metric space of diameter one are equicontinuous and bounded, while their pointwise image is noncompact. The general scaffold uses pointwise relative compactness; boundedness appears only for a proper metric target. The coverage ledger declines the false printed formulation and names no licensing page because no page can license it.
2. Page `function-space-topologies` defines both compact-open topology and equicontinuity with a metric domain. Those Statements were opened and are not widened. Page 285 therefore redefines both notions for a topological domain and proves explicit agreement propositions on metric domains before using the general forms.
3. Carlen's PDF has a typographical real codomain at the conclusion of the complex Theorem 1.29. Its hypotheses, proof, and surrounding text are the complex theorem. The scaffold states the corrected complex codomain and cross-checks it against Erdman 21.2.14 and the Berkeley complex remark.
4. The live closure of page 287 does not contain `field-extensions-and-the-complex-numbers`, even though T10 mandates the complex theorem. Depending on the published complex items would be an `undeclared-prereq`. Rather than silently cite them or drop the complex landmark, the scaffold locally constructs real coordinate-pair scalars, proves the field/conjugation facts it consumes, and then builds the self-adjoint theorem. This is a deliberate closure-local re-mint, not a claim that the published construction is defective.
5. Gelfand duality is licensed by `gelfand-theory-and-commutative-c-star-algebras`, the concrete FA-18 page id found in `research/plan-functional-analysis-track.md`. It is not a consequence placed on page 287.

## Published dependency ledger and confidence routes

Every item below was opened from `items/<id>.md` on disk. “Exact clause” means the Definition or Statement was read and its domain, hypotheses, direction, and choice charge were retained. “Independent source” means the component is also supported by the harvested textbook/notes. None of these routes infers that `legacy-unclassified` means AI-generated.

| Published id | Confidence route used |
|---|---|
| `cor-weierstrass-approximation-on-a-closed-interval` | Exact published Statement plus Erdman 21.2.7; used only for real polynomials on a closed interval. |
| `def-compact-open-topology` | Exact published metric-domain Definition; MIT Definition 5.4 confirms the general convention. |
| `def-compact-space` | Exact audited Definition, including intrinsic compact subsets and the empty-space convention. |
| `def-continuous-map-top` | Exact audited Definition and its open-neighbourhood equivalent. |
| `def-equicontinuity` | Exact literature-derived metric-domain Definition; not stretched to a topological domain. |
| `def-function-space` | Exact published pointwise vector-space construction; component provenance is AI-altered, and only its displayed operations are consumed. |
| `def-interior-closure-boundary-top` | Exact published closure Definition; only closure of coordinate sets/families is consumed. |
| `def-metric-space` | Exact published metric axioms; only separation, symmetry, and triangle inequality are consumed. |
| `def-neighbourhood-top` | Exact audited convention that a neighbourhood need not be open. |
| `def-product-topology` | Exact audited product-set and finite-coordinate-basis Definition, including the empty product. |
| `def-quotient-topology` | Exact audited quotient-by-equivalence Definition and final-topology criterion. |
| `def-standard-topologies` | Exact published discrete-topology clauses, used for finite/one-point examples. |
| `def-topology-basis-subbasis` | Exact published generated-topology and finite-intersection clauses. |
| `def-topology-of-compact-convergence` | Exact literature-derived metric-domain Definition, including the empty-compact-set case. |
| `def-topology-of-pointwise-convergence` | Exact literature-derived product-topology Definition on $Y^X$. |
| `def-topology-of-uniform-convergence` | Exact literature-derived nonempty-domain uniform-metric Definition. |
| `def-unital-separating-real-function-algebra` | Exact literature-derived nonempty compact-metric Definition; used only in the agreement proposition. |
| `lem-compactness-of-a-subspace-is-ambient` | Exact audited ambient-cover equivalence; finite-subcover conclusions are not widened. |
| `lem-metric-ball-neighbourhood-base` | Exact published ball-neighbourhood-base Statement; used only for the metric/topological equicontinuity dictionary. |
| `lem-metrics-on-rn` | Exact published coordinate-space metric Statement; used to metrize the local real-pair scalar construction. |
| `lem-of-square-monotone` | Exact ordered-field nonnegative squaring clause, confirmed directly from its Statement. |
| `lem-of-square-positive` | Exact literature-derived ordered-field positivity clause. |
| `thm-closed-subspace-of-a-compact-space-is-compact` | Exact audited topological Statement, including empty and finite-union cases. |
| `thm-compact-open-equals-compact-convergence` | Exact published theorem for **metric domain and metric target**; never cited for a general domain. |
| `thm-compact-subset-of-a-hausdorff-space-is-closed` | Exact audited clauses 3–4; used only with an explicitly Hausdorff ambient space. |
| `thm-compactness-agrees-with-metric-compactness` | Exact audited two-clause dictionary for metric topologies and their subsets. |
| `thm-compactness-under-continuous-maps` | Exact audited clauses for continuous images, real extreme values, and compact-to-Hausdorff maps; each use names its clause. |
| `thm-function-space-is-complete-for-a-complete-target` | Exact literature-derived complete-target Statement; the nonempty-domain requirement of its uniform metric is retained. |
| `thm-heine-borel-rn` | Exact published closed-and-bounded iff compact clauses for $\mathbb R^n$ and $\mathbb R$; no arbitrary metric target is inferred. |
| `thm-locally-compact-hausdorff-basics` | Exact audited clause 3 supplies an open neighbourhood with compact closure inside a prescribed open set. |
| `thm-metric-compactness-equivalences` | Exact Statement with Countable Choice and Dependent Choice; its sequential-compactness implication is charged accordingly. |
| `thm-of-archimedean` | Exact literature-derived Archimedean Statement for complete ordered fields. |
| `thm-of-square-roots` | Exact published existence/uniqueness of nonnegative square roots. |
| `thm-reals-ordered-field` | Exact published totally ordered field Statement; used only for coordinate algebra. |
| `thm-recursion` | Exact literature-derived recursion theorem; used to define the finite dyadic root chain. |
| `thm-tychonoff` | Exact audited theorem with its explicit full Axiom of Choice hypothesis. |
| `thm-uniform-limit-theorem` | Exact literature-derived arbitrary-topological-domain Statement; only its metric-target conclusions are used. |

## Planned component provenance

Tags below are the expected item-frontmatter components for step 5. An `ai-generated` Statement appears only on a B leaf or a non-load-bearing example/counterexample; every item cited by another planned proof has a literature-derived or AI-altered Statement.

### `ascoli-arzela`

| Item | Statement / proof | Rationale |
|---|---|---|
| `def-compact-open-topology-for-topological-domains` | literature-derived / not-applicable | MIT Definition 5.4, with page-255 compactness terminology. |
| `prop-general-compact-open-topology-agrees-with-the-metric-definition` | ai-altered / ai-generated | Dictionary statement obtained by substituting the published compactness-agreement theorem; exact equality is mechanically checkable. |
| `def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness` | literature-derived / not-applicable | MIT Definition 5.5 and standard Ascoli terminology. |
| `prop-topological-domain-equicontinuity-agrees-with-metric-equicontinuity` | ai-altered / ai-generated | Direct ball/neighbourhood dictionary; made load-bearing only with an AI-altered, not AI-generated, Statement. |
| `thm-evaluation-is-continuous-for-a-locally-compact-hausdorff-domain` | literature-derived / ai-altered | MIT Theorem 5.6; proof adapted to the library's exact LCH shrinking clause. |
| `thm-pointwise-compactness-criterion-for-function-families` | literature-derived / ai-altered | MIT Theorem 5.8, with Choice and Hausdorff-closedness made explicit. |
| `lem-pointwise-closure-preserves-equicontinuity` | literature-derived / ai-altered | MIT Lemma 5.6; finite-coordinate proof retained. |
| `lem-compact-open-and-pointwise-topologies-agree-on-an-equicontinuous-family` | literature-derived / ai-altered | MIT Lemma 5.5; proof rewritten against the library's compactness convention. |
| `thm-ascoli-arzela-sufficiency` | literature-derived / ai-altered | Sufficiency half of MIT Ascoli, decomposed to expose Tychonoff. |
| `thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain` | literature-derived / ai-altered | Necessity half of MIT Ascoli through continuous evaluation. |
| `prop-compact-function-families-are-pointwise-relatively-compact` | literature-derived / ai-altered | Coordinate-projection necessity in MIT Ascoli. |
| `thm-ascoli-arzela-general` | literature-derived / ai-altered | MIT Ascoli theorem with its logical halves and Choice cost explicit. |
| `cor-ascoli-arzela-for-compact-hausdorff-domains` | ai-altered / ai-generated | Immediate sourced specialization; the Statement is a faithful restriction of the general theorem. |
| `prop-compact-open-is-uniform-on-a-compact-metric-domain` | literature-derived / ai-altered | MIT Theorem 5.4 cross-checked with page 283 definitions. |
| `cor-ascoli-arzela-for-compact-metric-domains` | literature-derived / ai-altered | Standard metric form requested by T10. |
| `cor-compact-subsets-of-cx-for-a-proper-metric-target` | ai-altered / ai-altered | Shapiro §1.2 generalized only by replacing scalar Heine–Borel with the defining proper-target property. |
| `cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets` | ai-altered / ai-altered | Shapiro §§1–2 generalized to the exact property used by the diagonal proof. |
| `cor-equicontinuous-families-into-a-compact-metric-target` | ai-altered / ai-generated | Immediate sourced sufficiency corollary; its Statement is a specialization, not a novel load-bearing conjecture. |

### `ascoli-arzela-examples`

| Item | Statement / proof | Rationale |
|---|---|---|
| `ex-ascoli-on-a-finite-discrete-domain` | literature-derived / ai-altered | Shapiro §1.3, expanded to arbitrary compact metric target and empty domain. |
| `ex-compact-families-of-constant-maps` | literature-derived / ai-altered | Standard Ascoli test family; also cross-checks continuous evaluation. |
| `cex-boundedness-does-not-replace-pointwise-relative-compactness` | ai-generated / ai-generated | Direct one-point/infinite-discrete witness; B leaf and never a dependency. Truth-risk search obligation: check boundedness of the diameter-one metric and the singleton-cover noncompactness explicitly. |
| `ex-translated-tent-functions-converge-in-the-compact-open-topology` | ai-altered / ai-generated | Standard translated-bump family, repurposed to distinguish compact-open from uniform convergence. |
| `ex-compact-affine-interpolation-family` | ai-generated / ai-generated | Direct finite-parameter example; B leaf. Truth-risk obligation: verify the common Lipschitz bound from the compact rectangle and both degenerate intervals. |

### `stone-weierstrass-general`

| Item | Statement / proof | Rationale |
|---|---|---|
| `def-separating-real-function-lattice` | literature-derived / not-applicable | Berkeley Definition 9.4 and Erdman 21.2.3. |
| `def-unital-separating-real-function-algebra-general` | literature-derived / not-applicable | Erdman 21.2 and Carlen Theorem 1.26 conventions. |
| `def-complex-scalar-pairs-for-stone-weierstrass` | literature-derived / not-applicable | Standard real-coordinate construction, included locally solely to close the declared prerequisites. |
| `thm-complex-scalar-pair-field-and-conjugation-laws` | literature-derived / ai-altered | Standard coordinate proof independently confirmed against the opened published complex construction, without citing it across the closure boundary. |
| `def-self-adjoint-complex-function-algebra` | literature-derived / not-applicable | Erdman 21.2.13 and Carlen's pre-Theorem-1.29 definition. |
| `prop-general-real-function-algebra-agrees-with-the-metric-definition` | ai-altered / ai-generated | Clause-for-clause dictionary with the published metric definition. |
| `lem-two-point-interpolation-for-a-separating-real-function-lattice` | literature-derived / ai-altered | Erdman Proposition 21.2.5 and the standard affine normalization. |
| `lem-two-compact-cover-sweeps-for-function-lattices` | literature-derived / ai-altered | Carlen Lemma 1.27 and the proof of Erdman Theorem 21.2.3. |
| `thm-lattice-stone-weierstrass` | literature-derived / ai-altered | Erdman 21.2.3 and Berkeley 9.6. |
| `lem-uniform-closure-of-a-general-real-function-algebra-is-a-lattice` | literature-derived / ai-altered | Erdman 21.2.4, Berkeley 9.5, and Carlen 1.28. |
| `thm-real-stone-weierstrass-general` | literature-derived / ai-altered | Erdman 21.2.6, Berkeley 9.3, and Carlen 1.26. |
| `lem-nowhere-vanishing-algebras-approximate-the-constant-one` | literature-derived / ai-altered | The standard lemma inside Carlen's nowhere-vanishing form, with the reciprocal-polynomial argument exposed. |
| `cor-real-stone-weierstrass-nowhere-vanishing-form` | literature-derived / ai-altered | Carlen Theorem 1.26. |
| `lem-real-part-of-a-self-adjoint-complex-function-algebra` | literature-derived / ai-altered | Standard reduction in Erdman 21.2.14 and Carlen 1.29. |
| `thm-complex-stone-weierstrass-self-adjoint` | literature-derived / ai-altered | Erdman 21.2.14, Berkeley's complex remark, and Carlen 1.29. |
| `cor-self-adjoint-algebra-generated-by-a-separating-family-is-dense` | ai-altered / ai-generated | Immediate closure-under-conjugation corollary of the sourced complex theorem. |
| `lem-dyadic-root-of-unity-filter` | literature-derived / ai-altered | Standard finite roots-of-unity filter used to make Carlen's disc counterexample elementary and closure-legal. |
| `def-function-algebra-indistinguishability-quotient` | literature-derived / not-applicable | Erdman 21.2.2 and 21.2.15. |
| `thm-closed-real-function-algebras-are-function-spaces-on-their-quotients` | literature-derived / ai-altered | Erdman Theorem 21.2.15. |

### `stone-weierstrass-general-examples`

| Item | Statement / proof | Rationale |
|---|---|---|
| `cex-disc-algebra-is-not-dense-without-self-adjointness` | literature-derived / ai-altered | Carlen's explicit disc counterexample; proof replaced by a finite roots-of-unity filter to avoid undeclared holomorphic machinery. |
| `ex-trigonometric-polynomials-are-dense-on-the-circle` | literature-derived / ai-altered | Carlen Theorem 1.30. |
| `ex-distance-function-lattice-is-dense-on-a-compact-metric-space` | literature-derived / ai-altered | Standard Kakutani–Krein application; the separating distance function is written explicitly. |
| `ex-finite-space-function-algebras-interpolate-exactly` | ai-generated / ai-generated | Direct finite-product interpolation; B leaf. Truth-risk obligation: treat empty and singleton spaces before forming products over other points. |
| `ex-two-point-duplication-algebra-and-its-quotient` | literature-derived / ai-altered | Erdman 21.2.2 and 21.2.15. |
| `ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval` | literature-derived / ai-altered | Erdman 21.2.1 and 21.2.7. |

## Split and licensing decisions

No split is proposed. Page 285 has 18 items and page 287 has 19 items, each with a coherent theorem spine and each below the binding 60-item split threshold. The B pages have 5 and 6 items respectively. No result has been removed to reach those sizes.

The only declined mathematical heading expected to draw challenge is the printed arbitrary-metric boundedness form of Arzela's theorem, declined because it is false and accompanied by a scaffolded counterexample. The two exponential-law clauses are topic-owned by `function-space-topologies`; the present page builds the general evaluation theorem it actually consumes. Gelfand duality is licensed by `gelfand-theory-and-commutative-c-star-algebras`.

## Final Beta report

### Pages and item counts

| Page | Kind | Items |
|---|---:|---:|
| `ascoli-arzela` | A | 18 |
| `ascoli-arzela-examples` | B | 5 |
| `stone-weierstrass-general` | A | 19 |
| `stone-weierstrass-general-examples` | B | 6 |
| **Batch total** |  | **48** |

The proof-contract file contains an entry for every proof-bearing item: 41 contracts, each with the eight required boundary axes. The remaining items are definitions with no proof body. No A page approaches the 60-item split threshold, so no split is proposed.

### Harvest yield

The coverage harvest contains 47 source or canonical headings: 37 are scaffolded as items, 5 are absorbed inline, 1 is already published, and 4 are out of scope. There are no `deferred` dispositions.

The declines are:

- MIT Theorem 5.5's splitting/exponential clause and the exponential part of Theorem 5.6: licensed by `function-space-topologies`, whose topic ownership T10 explicitly preserves.
- MIT's printed arbitrary-metric boundedness form of Arzela's theorem: expected to be challenged, but false as printed; no planned page licenses it. The corrected proper-target theorem and infinite-discrete-target counterexample are both scaffolded.
- Gelfand duality: licensed by `gelfand-theory-and-commutative-c-star-algebras`.

### Dependency and convention outcome

All 37 published dependencies used by the manifest were opened on disk; their individual exact-clause confidence routes are recorded in the dependency ledger above. No published dependency was found unambiguously false. The metric-domain restrictions of `def-compact-open-topology`, `def-equicontinuity`, and `thm-compact-open-equals-compact-convergence` are real and are respected rather than widened.

The important convention findings are the false bounded-target wording in the MIT source, the metric/general domain seam with page 283, Carlen's codomain typo in the complex theorem, and the absence of the published complex-number page from order 287's closure. The last was resolved inside the scaffold by a coordinate-pair scalar definition, its field/conjugation theorem, and a dyadic roots-of-unity filter. No undeclared edge to `field-extensions-and-the-complex-numbers` or `the-complex-exponential-and-eulers-formula` remains.

The two target A pages remain siblings: no Ascoli item depends on a Stone–Weierstrass item, no Stone–Weierstrass item depends on an Ascoli item, and no item depends on either B page.

### Checks completed

- `node tools/validate-plan.mjs research/plan-spec.json` — green.
- `node tools/coverage-checklist.mjs research/frontier-14-batch-2.coverage.json` — 2 pages, 47 harvested headings, 0 errors, 0 warnings.
- The same plan validator run against a process-substitution overlay with these four page objects spliced into the live plan — green, with no item-level cycle, forward reference, B-page dependency, unresolved id, or undeclared prerequisite.
- `node tools/content-policy.mjs research/frontier-14-batch-2.pages.json --manifest-only` — 48 scoped items, 0 errors, 0 warnings.
- `node tools/boundary-audit.mjs research/frontier-14-batch-2.proof-contracts.json --min-cluster 3` — no template-reuse cluster and no contradicted disposition; authored-item contradiction detectors correctly report that step-5 item bodies do not yet exist.
- Exact-quote verification over every published citation in the prospective contracts — every recorded quote occurs in the cited on-disk Definition or Statement.
- Applied canonical-embedding notation scan over all four owned artifacts — no embedding is applied to a natural number.
- `prosecheck --warnings` over the pages and notes — 0 errors. Its warnings are source-heading numbers and the item/harvest counts required by this dispatch's report, not unsupported claims about library size or page position.

### Blockers and work not performed

There is no mathematical or dependency blocker. Shell DNS prevented `pip` from installing `pypdf` in `/tmp`; the actual PDFs were nevertheless read and locator-checked through the browser's PDF text extraction, so this did not become a source-verification blocker. `tools/gates.mjs` was not run, exactly as the dispatch instructed. Strict authored-item proof-contract and citation-fidelity gates cannot inspect bodies that step 5 has not created; the prospective contract shape, all external exact quotes, all boundary rows, and manifest closure were checked instead.
