# Frontier 14 batch 2 — Beta scaffold notes

## Context checkpoint (source harvest and design, 2026-08-16)

- **Owned artifacts:** `research/frontier-14-batch-2.pages.json`, `research/frontier-14-batch-2.notes.md`, `research/frontier-14-batch-2.coverage.json`, and `research/frontier-14-batch-2.proof-contracts.json`. No other path is in scope for this Beta.
- **Current substage:** required repository reading and the independent-source harvest are complete; the item graph and proof-contract decomposition are being serialized.
- **Checks completed:** read `CLAUDE.md`, the active audit resume, `SCHEMA.md`, `README.md`, the Beta brief, the exemplar, the prior-run output pair, step-0 batching, preventions, and T10; inspected the live plan entries and all three published prerequisite pages; confirmed the two target A pages are siblings with no dependency path between them; checked existing item ids for collisions and for B-page results that must remain leaf-locked.
- **Source work completed:** read MIT Press *Topology: A Categorical Approach*, Chapter 5, §§5.6.1–5.6.2; Shapiro's *The Arzelà–Ascoli Theorem* notes, §§1–2; Munkres, *Topology*, second edition, Chapter 7, the specified main-text ranges in §§45–47; Erdman's *A Companion to Real Analysis*, §§21.2.1–21.2.7 and §§21.2.13–21.2.15; Berkeley Math 205B notes, Theorem 9.3 through Theorem 9.6; and Rutgers topology notes, §1.6, Theorems 1.26–1.30 and the intervening complex counterexample. The browser's document-text extraction was used to read the actual contents. A local `pypdf` venv installation could not reach PyPI because shell DNS is disabled; this did not block reading or locator verification.
- **Open mathematical question:** finalize the most economical lemma boundary for the general Ascoli theorem—especially the explicit Choice-bearing product-compactness direction—while keeping every citation at its published statement's actual domain.
- **Exact next action:** open the exact on-disk Statements of the small published dependency set chosen by the item graph, then write the four page manifests and the source-by-source coverage dispositions.

## Design decisions in force

The Ascoli–Arzelà A page will take the general route. It will define the compact-open topology for an arbitrary topological domain and topological-domain equicontinuity into a metric target, then prove agreement with the metric-domain definitions on their overlap. Page 283 will be cited only for its genuinely metric statements. General evaluation continuity and the general locally compact Hausdorff Ascoli theorem will be proved on page 285 using page 255's compactness/local-compactness machinery. The sufficiency direction will state its Choice use explicitly through Tychonoff's theorem. For an arbitrary metric target, the correct hypothesis is pointwise relative compactness, not pointwise boundedness; boundedness is retained only in specializations where bounded subsets have compact closure.

The Stone–Weierstrass A page will develop the compact-Hausdorff lattice theorem, derive the real algebra form, and then derive the complex form under the indispensable self-adjointness hypothesis. Its B page will include the closed-disc polynomial algebra as the standard failure without self-adjointness, proved directly by a roots-of-unity averaging obstruction so that no unbuilt holomorphic-uniform-limit theorem is smuggled into the argument. The two A pages will not cite or depend on each other, and no A item will depend on either B page.

No A-page split is presently indicated: the source-faithful developments are well below the 60-item ceiling without dropping canonical results.

## Source ledger and locator verification

The following are the ranges actually read. Each document was opened as text and checked for the named headings; an HTTP success response was not treated as evidence of contents.

| Pair | Source and exact range | Role |
|---|---|---|
| Ascoli–Arzelà | Bradley–Bryson–Terilla, *Topology: A Categorical Approach*, Chapter 5, §5.6.1 Definition 5.4–Theorem 5.6 and §5.6.2 Theorem 5.8–Arzela's Theorem, `https://assets.pubpub.org/6d1dqgg9/51597355090422.pdf` | Primary textbook; supplies the general compact-open/evaluation/Ascoli spine. |
| Ascoli–Arzelà | Munkres, *Topology*, second edition, Chapter 7, §45 main text through Corollary 45.5, §46 main text through Theorem 46.10, and §47 Theorem 47.1 with proof, `https://djvu.online/file/7PTGeGhMkCAAK` | Independent textbook check of the general compact-open, evaluation, and locally compact Hausdorff Ascoli spine, plus the Euclidean specializations. |
| Ascoli–Arzelà | Shapiro, *The Arzelà–Ascoli Theorem*, complete §§1–2, `https://web.archive.org/web/20141114064305if_/http://www.mth.msu.edu/~shapiro/pubvit/Downloads/ArzNotes/ArzNotes.pdf` | Independent lecture-note proof of the compact-metric sequential form and compact-family criterion; this recovered 2014 capture replaces the live 212-byte Imperva challenge while preserving the same source. |
| Stone–Weierstrass | Erdman, *A Companion to Real Analysis*, §21.2.1–21.2.7 and §21.2.13–21.2.15, `https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf` | Primary textbook; supplies lattice, real, complex, and quotient forms. |
| Stone–Weierstrass | Berkeley Math 205B notes, Theorem 9.3–Theorem 9.6 and the intervening complex remark, `https://math.berkeley.edu/~moorxu/oldsite/notes/205b/205bmain.pdf` | Independent lecture-note treatment of algebra and Kakutani–Krein lattice forms. |
| Stone–Weierstrass | Carlen, Rutgers topology notes, §1.6, Theorems 1.26–1.30 and the intervening disc counterexample, `https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf` | Independent treatment of the nowhere-vanishing and complex forms and the required counterexample. |

### Convention disagreements and corrections

1. Bradley–Bryson–Terilla's printed Arzela theorem uses pointwise **boundedness** for maps into an arbitrary metric target. That is false without a properness or relative-compactness condition: on a one-point domain, all maps into an infinite discrete metric space of diameter one are equicontinuous and bounded, while their pointwise image is noncompact. The general scaffold uses pointwise relative compactness; boundedness appears only for a proper metric target. The coverage ledger declines the false printed formulation and names no licensing page because no page can license it.
2. Page `function-space-topologies` defines both compact-open topology and equicontinuity with a metric domain. Those Statements were opened and are not widened. Page 285 therefore redefines both notions for a topological domain and proves explicit agreement propositions on metric domains before using the general forms.
3. Carlen's PDF has a typographical real codomain at the conclusion of the complex Theorem 1.29. Its hypotheses, proof, and surrounding text are the complex theorem. The scaffold states the corrected complex codomain and cross-checks it against Erdman 21.2.14 and the Berkeley complex remark.
4. The live closure of page 287 does not contain `field-extensions-and-the-complex-numbers`, even though T10 mandates the complex theorem. Depending on the published complex items would be an `undeclared-prereq`. The scaffold's coordinate-pair fallback remains only because Alpha finding D1 requires an orchestrator-owned backward-edge decision; this Beta cannot add either edge to `plan-spec.json`. If the edges are approved, the local scalar items must be removed and consumers re-pointed before splice. If they are declined, Alpha expressly found the fallback mathematically legitimate.
5. Gelfand duality is licensed by `gelfand-theory-and-commutative-c-star-algebras`, the concrete FA-18 page id found in `research/plan-functional-analysis-track.md`. It is not a consequence placed on page 287.
6. Shapiro §1.1 uses one bound uniform in both function and point, and uniform equicontinuity. The scaffold uses pointwise boundedness and pointwise equicontinuity. These are not citation restatements: the step-5 proof must cite `lem-equicontinuity-on-a-compact-domain-is-uniform` and `lem-equicontinuity-and-pointwise-boundedness-give-uniform-boundedness` before using Shapiro's scalar proof.
7. The statement that the real case awaited properness was false of disk. `thm-heine-borel-rn` is already in page 285's closure, and the closure also contains the exact published scalar results `thm-arzela-ascoli-for-real-ck` and `cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence`. The new joint corollary cites those items for the real clause and uses Heine–Borel plus the proper-target results only for the genuinely new $\mathbb R^n$ clause.

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
| `thm-arzela-ascoli-for-real-ck` | Exact published real $C(K)$ Statement, including nonempty compact metric $K$, Countable Choice and Dependent Choice, compact closure, equicontinuity, and pointwise boundedness. It is cited rather than re-minted. |
| `cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence` | Exact published real-valued subsequence Statement, retaining its nonempty domain and Countable Choice/Dependent Choice hypotheses. |
| `lem-equicontinuity-on-a-compact-domain-is-uniform` | Exact published compact-domain quantifier bridge from pointwise family equicontinuity to one uniform $\delta$; used only to reconcile Shapiro's convention. |
| `lem-equicontinuity-and-pointwise-boundedness-give-uniform-boundedness` | Exact published real-valued bridge to one bound uniform over the family and domain; used before citing Shapiro's stronger-looking hypothesis. |
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
| `cor-real-and-euclidean-vector-valued-ascoli-arzela` | literature-derived / ai-altered | Munkres Theorem 45.4 and Corollary 45.5 plus Shapiro §§1.1–1.2; the real clause cites the already-published scalar theorem and subsequence corollary, while the $\mathbb R^n$ clause specializes the proper-target results using published Heine–Borel. |
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

No split is proposed. Page 285 has 19 items and page 287 has 19 items, each with a coherent theorem spine and each below the binding 60-item split threshold. The B pages have 5 and 6 items respectively. No result has been removed to reach those sizes.

The only declined mathematical heading expected to draw challenge is the printed arbitrary-metric boundedness form of Arzela's theorem, declined because it is false and accompanied by a scaffolded counterexample. The two exponential-law clauses are topic-owned by `function-space-topologies`; the present page builds the general evaluation theorem it actually consumes. Gelfand duality is licensed by `gelfand-theory-and-commutative-c-star-algebras`.

## Final Beta report

### Pages and item counts

| Page | Kind | Items |
|---|---:|---:|
| `ascoli-arzela` | A | 19 |
| `ascoli-arzela-examples` | B | 5 |
| `stone-weierstrass-general` | A | 19 |
| `stone-weierstrass-general-examples` | B | 6 |
| **Batch total** |  | **49** |

The proof-contract file contains an entry for every proof-bearing item: 42 contracts, each with the eight required boundary axes. The remaining items are definitions with no proof body. No A page approaches the 60-item split threshold, so no split is proposed.

### Harvest yield

The coverage harvest contains 74 source or canonical headings: 43 are scaffolded as items, 8 are absorbed inline, 6 are already published, and 17 are out of scope. There are no `deferred` dispositions.

The declines are:

- MIT Theorem 5.5's splitting/exponential clause and the exponential part of Theorem 5.6: licensed by `function-space-topologies`, whose topic ownership T10 explicitly preserves.
- MIT's printed arbitrary-metric boundedness form of Arzela's theorem: expected to be challenged, but false as printed; no planned page licenses it. The corrected proper-target theorem and infinite-discrete-target counterexample are both scaffolded.
- Munkres's ten general function-space infrastructure headings in §46: licensed by `function-space-topologies`. Five develop compactly generated spaces; the other five state compact-convergence definitions/comparisons for arbitrary topological domains, while the published page-283 versions are metric-domain only. Page 285 neither opens the k-space development nor widens the narrower published statements.
- Munkres's three motivating examples on total boundedness and discontinuous pointwise limits: licensed by `compactness-in-metric-spaces` or `function-space-topologies-examples`; they are source-specific witnesses for results already developed elsewhere, not missing Ascoli theorems.
- Gelfand duality: licensed by `gelfand-theory-and-commutative-c-star-algebras`.

### Dependency and convention outcome

All 41 published dependencies used by the manifest were opened on disk; their individual exact-clause confidence routes are recorded in the dependency ledger above. No published dependency was found unambiguously false. The metric-domain restrictions of `def-compact-open-topology`, `def-equicontinuity`, and `thm-compact-open-equals-compact-convergence` are real and are respected rather than widened.

The important convention findings are the false bounded-target wording in the MIT source, the metric/general domain seam with page 283, Carlen's codomain typo in the complex theorem, Shapiro's uniform boundedness/equicontinuity conventions, and the absence of the published complex-number page from order 287's closure. The current coordinate-pair scalar definition and roots-of-unity filter are a closure-legal fallback, but Alpha finding D1 correctly identifies the duplicate-construction risk and leaves the preferred backward-edge remedy to the orchestrator. No undeclared edge to `field-extensions-and-the-complex-numbers` or `the-complex-exponential-and-eulers-formula` has been introduced.

The two target A pages remain siblings: no Ascoli item depends on a Stone–Weierstrass item, no Stone–Weierstrass item depends on an Ascoli item, and no item depends on either B page.

### Checks completed

- `node tools/validate-plan.mjs research/plan-spec.json` — green.
- `node tools/coverage-checklist.mjs research/frontier-14-batch-2.coverage.json` — 2 pages, 74 harvested headings, 0 errors, 0 warnings.
- The same plan validator run against a process-substitution overlay with these four page objects spliced into the live plan — green, with no item-level cycle, forward reference, B-page dependency, unresolved id, or undeclared prerequisite.
- `node tools/content-policy.mjs --manifest-only research/frontier-14-batch-2.pages.json` — 49 scoped items, 0 errors, 0 warnings.
- `node tools/boundary-audit.mjs research/frontier-14-batch-2.proof-contracts.json --min-cluster 3` — no template-reuse cluster and no contradicted disposition; authored-item contradiction detectors correctly report that step-5 item bodies do not yet exist.
- Exact-quote verification over every published citation in the prospective contracts — every recorded quote occurs in the cited on-disk Definition or Statement.
- Applied canonical-embedding notation scan over all four owned artifacts — no embedding is applied to a natural number.
- `prosecheck --warnings` over the pages and notes — 0 errors. Its warnings are source-heading numbers and the item/harvest counts required by this dispatch's report, not unsupported claims about library size or page position.

### Blockers and work not performed

One orchestrator-owned dependency decision remains: Alpha finding D1 blocks a final `sufficient` ruling until the orchestrator either approves the two backward complex-number edges or expressly declines them and accepts the closure-local fallback. Shell DNS prevented `pip` from installing `pypdf` in `/tmp`; the actual source contents were nevertheless read through document-text extraction, and Alpha independently verified the recovered Shapiro PDF, so this did not become a source-content blocker. `tools/gates.mjs` was not run, exactly as the dispatch instructed. Strict authored-item proof-contract and citation-fidelity gates cannot inspect bodies that step 5 has not created; the prospective contract shape, all 61 external exact quotes, all 336 boundary rows, and the spliced manifest closure were checked instead.

## Step-3 fix pass

The dispatch says to select `B2-*` findings, but the authoritative Alpha report's routing addendum says that prefix is a template defect and maps batch 2 to stable ids `C1`, `C2`, `C3`, `C4`, and `D1`. I used those ids exactly and did not renumber them.

### Finding dispositions

- **C1 — applied.** Added Munkres, *Topology*, second edition, Chapter 7 §§45–47 as a third independent Ascoli treatment. The exact main-text ranges read are recorded in the source ledger, and all 26 named definitions, examples, and results in those ranges now have dispositions. Munkres independently backs the general compact-open definition, evaluation continuity, the locally compact Hausdorff Ascoli theorem, and the Euclidean form.
- **C2 — applied.** Replaced the 212-byte bot-wall URL with Alpha's verified recovery URL, `https://web.archive.org/web/20141114064305if_/http://www.mth.msu.edu/~shapiro/pubvit/Downloads/ArzNotes/ArzNotes.pdf`, in both the coverage artifact and source ledger. This is recovery of the same three-page source, not re-sourcing, so the existing faithful harvest remains valid.
- **C3 — applied.** Corrected the false strategy sentence: only the complex specialization lacks a licensing page. Added `cor-real-and-euclidean-vector-valued-ascoli-arzela`. Disk checking found that the real compact-closure theorem and real subsequence theorem were already published in this page's closure, so the new corollary cites them instead of rebuilding them; the genuinely new $\mathbb R^n$ clause specializes the two proper-target results using clauses 2–3 of `thm-heine-borel-rn`.
- **C4 — applied.** Recorded the quantifier mismatch as an explicit step-5 proof obligation and made the new corollary depend on the exact published bridges `lem-equicontinuity-on-a-compact-domain-is-uniform` and `lem-equicontinuity-and-pointwise-boundedness-give-uniform-boundedness`. Shapiro's one uniform bound and uniform $\delta$ must be obtained through those lemmas before the source is cited; neither may be restated as pointwise.
- **D1 — pushed back.** The recommended edits require adding `field-extensions-and-the-complex-numbers` and optionally `the-complex-exponential-and-eulers-formula` to page 287's declared `requires`. No such decision appears in `research/frontier-14-step3-decisions.md`, the live `plan-spec.json` still has neither edge, this Beta is forbidden to edit that file, and applying the item deletions without the edges would create undeclared prerequisites. I therefore retained the closure-legal coordinate-pair fallback. Alpha expressly says that fallback is mathematically legitimate if the orchestrator declines both edges, but D1 still blocks a final `sufficient` ruling until that approval/decline is recorded.

### Step-3 report

The four pages now contain 49 items: `ascoli-arzela` 19, `ascoli-arzela-examples` 5, `stone-weierstrass-general` 19, and `stone-weierstrass-general-examples` 6. There are 42 prospective proof contracts, each with all eight boundary axes. No split is proposed; both A pages have 19 items, far below the 60-item ceiling.

The coverage harvest now has 74 headings: 43 `included`, 8 `inline`, 6 `already-published`, 17 `out-of-scope`, and no `deferred` rows. The declines most likely to be challenged are the false arbitrary-metric boundedness version printed by Bradley–Bryson–Terilla, for which no page can license a false statement, and Munkres's ten §46 function-space infrastructure results. Five develop compactly generated spaces; five use arbitrary topological domains where page 283's published compact-convergence items are metric-domain only. All ten are individually licensed by `function-space-topologies` rather than falsely mapped to narrower Statements. Three Munkres examples are separately licensed by `compactness-in-metric-spaces` or `function-space-topologies-examples`. The other declines remain the two exponential-law clauses licensed by `function-space-topologies` and Gelfand duality licensed by `gelfand-theory-and-commutative-c-star-algebras`.

All 41 published dependencies in the amended manifest were opened on disk. The four newly consumed exact statements are `thm-arzela-ascoli-for-real-ck`, `cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence`, `lem-equicontinuity-on-a-compact-domain-is-uniform`, and `lem-equicontinuity-and-pointwise-boundedness-give-uniform-boundedness`; their confidence routes are recorded in the published-dependency ledger. Exact-quote verification found all 61 published citation strings in the cited Definition or Statement.

The convention disagreements now recorded are: Bradley–Bryson–Terilla's false arbitrary-target boundedness wording; page 283's metric-domain restriction; Carlen's real-codomain typo in the complex theorem; Shapiro's uniform rather than pointwise boundedness/equicontinuity; and the page-287 complex-number closure gap. The only blocker is D1's orchestrator-owned edge decision. The current environment could not directly re-fetch the Wayback URL through shell DNS or the browser's safe-URL filter; Alpha's report records a successful valid-PDF fetch and digest check, and the source had already been harvested, so nothing was inferred from an HTTP status alone.

### Gates rerun

- `node tools/coverage-checklist.mjs research/frontier-14-batch-2.coverage.json` — green: 2 pages, 74 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-14-batch-2.pages.json` — green: 49 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — green: declared page order acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among pages carrying item lists.
- Process-substitution overlay with all four amended batch pages spliced into the live plan — green, including the new item and all seven of its dependencies.
- `node tools/boundary-audit.mjs research/frontier-14-batch-2.proof-contracts.json --min-cluster 3` — 336 rows, no template-reuse cluster, no contradicted disposition.
- Prospective published-citation scan — 61 quotes checked, 0 mismatches.

`tools/gates.mjs` was not run, as instructed. No file outside the four batch-2 scaffold artifacts was edited.

## Continuity checkpoint

Step 5 is authoring only the 24 ids actually listed in `research/frontier-14-splice-2.json`: the 19-item `ascoli-arzela` A page and its 5-item B companion. The two Stone–Weierstrass pages remain held and unspliced under the receipt's D1 blocker, so their item files and pages have not been created. The batch manifest, coverage artifact, and proof-contract scope have been narrowed to this spliced pair; `research/plan-spec.json` has not been edited.

All 24 item files and both page files now exist with `status: draft` and `origin: session`; the B page has no body after frontmatter. Targeted precheck is clean after adopting its canonical stratification. The 22 proof-bearing items have regenerated contracts from their actual Facts and numbered steps, plus 176 item-specific boundary dispositions. Content policy, strict proof-contract checking, coverage checking, and plan validation are clean at this checkpoint. The remaining work is the full Step-5 gate suite, any repairs it identifies, and the final `## Step-5 authoring` report with verbatim output.

## Step-5 authoring

### Authored scope

I authored exactly the 24 immutable ids in `research/frontier-14-splice-2.json`, and no held id:

- A page `ascoli-arzela` (19): `def-compact-open-topology-for-topological-domains`, `prop-general-compact-open-topology-agrees-with-the-metric-definition`, `def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness`, `prop-topological-domain-equicontinuity-agrees-with-metric-equicontinuity`, `thm-evaluation-is-continuous-for-a-locally-compact-hausdorff-domain`, `thm-pointwise-compactness-criterion-for-function-families`, `lem-pointwise-closure-preserves-equicontinuity`, `lem-compact-open-and-pointwise-topologies-agree-on-an-equicontinuous-family`, `thm-ascoli-arzela-sufficiency`, `thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain`, `prop-compact-function-families-are-pointwise-relatively-compact`, `thm-ascoli-arzela-general`, `cor-ascoli-arzela-for-compact-hausdorff-domains`, `prop-compact-open-is-uniform-on-a-compact-metric-domain`, `cor-ascoli-arzela-for-compact-metric-domains`, `cor-compact-subsets-of-cx-for-a-proper-metric-target`, `cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets`, `cor-real-and-euclidean-vector-valued-ascoli-arzela`, and `cor-equicontinuous-families-into-a-compact-metric-target`.
- B page `ascoli-arzela-examples` (5): `ex-ascoli-on-a-finite-discrete-domain`, `ex-compact-families-of-constant-maps`, `cex-boundedness-does-not-replace-pointwise-relative-compactness`, `ex-translated-tent-functions-converge-in-the-compact-open-topology`, and `ex-compact-affine-interpolation-family`.

Both page files and all 24 item files have `status: draft` and `origin: session`; no file sets `verification.audited`. The B page has zero body bytes after frontmatter. The splice receipt has no `summary_corrections` key: its keys are `baseline_snapshot`, `batch`, `held_pages`, `id_clash_check`, `item_count`, `item_ids_spliced`, `pages`, `requires_disagreements`, `run`, `size_check`, `spliced_by`, `status`, `step`, and `validate_plan`. With no replacement prose supplied, I used the proposed A-page summary from these notes and did not create a B-page summary.

The two Stone–Weierstrass pages remain held and unspliced under D1. Their files were not authored, the four owned artifacts were narrowed to the spliced Ascoli pair, and `research/plan-spec.json` was not edited. No judging was performed.

### Final provenance by component

| Item | Statement / proof | Rationale |
|---|---|---|
| `def-compact-open-topology-for-topological-domains` | literature-derived / not-applicable | Faithful Definition 5.4 compact-open subbasis, with the library's compactness terminology. |
| `prop-general-compact-open-topology-agrees-with-the-metric-definition` | ai-altered / ai-generated | Direct dictionary proof using the published equivalence of topological and metric compactness. |
| `def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness` | literature-derived / not-applicable | Faithful Definition 5.5 plus the standard coordinate-closure formulation of pointwise relative compactness. |
| `prop-topological-domain-equicontinuity-agrees-with-metric-equicontinuity` | ai-altered / ai-generated | Direct ball/neighbourhood translation with the common-family quantifier preserved. |
| `thm-evaluation-is-continuous-for-a-locally-compact-hausdorff-domain` | literature-derived / ai-altered | MIT Theorem 5.6 adapted only to the exact published local compactness shrinking clause. |
| `thm-pointwise-compactness-criterion-for-function-families` | literature-derived / ai-altered | MIT Theorem 5.8 with Choice, Hausdorff closedness, and ambient-versus-relative closure made explicit. |
| `lem-pointwise-closure-preserves-equicontinuity` | literature-derived / ai-altered | MIT Lemma 5.6 rewritten as an explicit two-coordinate, three-epsilon transfer. |
| `lem-compact-open-and-pointwise-topologies-agree-on-an-equicontinuous-family` | literature-derived / ai-altered | MIT Lemma 5.5 rewritten against the library's compactness convention, including empty subbasic cases. |
| `thm-ascoli-arzela-sufficiency` | literature-derived / ai-altered | Sufficiency half of MIT Ascoli, decomposed through pointwise compactness, closure preservation, and topology agreement. |
| `thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain` | literature-derived / ai-altered | Necessity half of MIT Ascoli, using continuous evaluation and a finite compactness subcover. |
| `prop-compact-function-families-are-pointwise-relatively-compact` | literature-derived / ai-altered | Coordinate-evaluation necessity from MIT Ascoli, with metric Hausdorff closedness explicit. |
| `thm-ascoli-arzela-general` | literature-derived / ai-altered | MIT Ascoli with the two logical directions separated and the Choice cost stated. |
| `cor-ascoli-arzela-for-compact-hausdorff-domains` | ai-altered / ai-generated | Immediate specialization of the general theorem using the published locally compact definition. |
| `prop-compact-open-is-uniform-on-a-compact-metric-domain` | literature-derived / ai-altered | Published compact-open/compact-convergence equality combined with the published uniform-topology definition. |
| `cor-ascoli-arzela-for-compact-metric-domains` | literature-derived / ai-altered | Standard metric form obtained only through the authored dictionary and topology-agreement results. |
| `cor-compact-subsets-of-cx-for-a-proper-metric-target` | ai-altered / ai-altered | Shapiro's scalar criterion generalized only by replacing Heine–Borel with the defining proper-target property. |
| `cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets` | ai-altered / ai-altered | Shapiro's sequential consequence generalized through compact uniform closure and published sequential compactness. |
| `cor-real-and-euclidean-vector-valued-ascoli-arzela` | literature-derived / ai-altered | Published real criteria plus the proper-target specialization through Euclidean Heine–Borel; the supremum/uniform topology bridge is proved explicitly. |
| `cor-equicontinuous-families-into-a-compact-metric-target` | ai-altered / ai-generated | Immediate sufficiency specialization because every coordinate closure is closed in the compact target. |
| `ex-ascoli-on-a-finite-discrete-domain` | literature-derived / ai-altered | Shapiro's finite-domain example expanded to arbitrary compact metric targets and the empty product. |
| `ex-compact-families-of-constant-maps` | literature-derived / ai-altered | Standard Ascoli test family proved directly as a continuous compact image. |
| `cex-boundedness-does-not-replace-pointwise-relative-compactness` | ai-generated / ai-generated | Direct one-point/infinite-discrete B-leaf witness; boundedness and noncompactness are verified explicitly. |
| `ex-translated-tent-functions-converge-in-the-compact-open-topology` | ai-altered / ai-generated | Standard translated tent family used to separate compact-open from uniform convergence. |
| `ex-compact-affine-interpolation-family` | ai-generated / ai-generated | Direct compact-parameter B-leaf example with endpoint, degeneracy, and Lipschitz checks. |

No authored mathematical claim was dropped. The final Statements retain the spliced claims, but the following obligations and proof strategies changed while preserving them:

- Removed an unused compact-image dependency from the compact-open dictionary; the proof uses only equality of the two compact-set classes.
- Replaced the subsequence scaffold's diagonal outline by compact uniform closure plus the published compact-metric sequential compactness implication. The Shapiro Steps I–III coverage rows therefore became individually licensed out-of-scope proof internals rather than falsely marked inline.
- Used direct finite-product and compact-image arguments for the finite-discrete, constant-map, and affine examples, avoiding hidden Choice assumptions and preserving their unconditional titles.
- Added the exact Hausdorff/closed-subspace dependencies where relative closure is identified with ambient closure.
- Added the explicit identity between the bounded supremum metric and the uniform topology before invoking the published scalar Ascoli theorem.
- Clarified that the empty coordinate-value set is bounded, and wrote concrete boundary dispositions for empty, zero, one, degenerate, endpoint, nonempty-choice, and both iff directions. No templated disposition was copied across items.

### Gate output

Targeted canonical precheck:

```text
PASS items/prop-general-compact-open-topology-agrees-with-the-metric-definition.md (direct)
PASS items/prop-topological-domain-equicontinuity-agrees-with-metric-equicontinuity.md (direct)
PASS items/thm-evaluation-is-continuous-for-a-locally-compact-hausdorff-domain.md (direct)
PASS items/thm-pointwise-compactness-criterion-for-function-families.md (direct)
PASS items/lem-pointwise-closure-preserves-equicontinuity.md (direct)
PASS items/lem-compact-open-and-pointwise-topologies-agree-on-an-equicontinuous-family.md (direct)
PASS items/thm-ascoli-arzela-sufficiency.md (direct)
PASS items/thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain.md (direct)
PASS items/prop-compact-function-families-are-pointwise-relatively-compact.md (direct)
PASS items/thm-ascoli-arzela-general.md (direct)
PASS items/cor-ascoli-arzela-for-compact-hausdorff-domains.md (direct)
PASS items/prop-compact-open-is-uniform-on-a-compact-metric-domain.md (direct)
PASS items/cor-ascoli-arzela-for-compact-metric-domains.md (direct)
PASS items/cor-compact-subsets-of-cx-for-a-proper-metric-target.md (direct)
PASS items/cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets.md (direct)
PASS items/cor-real-and-euclidean-vector-valued-ascoli-arzela.md (direct)
PASS items/cor-equicontinuous-families-into-a-compact-metric-target.md (direct)
PASS items/ex-ascoli-on-a-finite-discrete-domain.md (direct)
PASS items/ex-compact-families-of-constant-maps.md (direct)
PASS items/cex-boundedness-does-not-replace-pointwise-relative-compactness.md (direct)
PASS items/ex-translated-tent-functions-converge-in-the-compact-open-topology.md (direct)
PASS items/ex-compact-affine-interpolation-family.md (direct)

22 checked, 0 failing — all clean
```

Bare precheck:

```text
3876 checked, 0 failing — all clean
```

Plan validation:

```text
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 282 page(s) with item lists.
NOTE: 889 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.
```

Content policy, proof contracts, coverage, citation fidelity, boundary audit, and citation-home checking:

```text
content-policy: 24 scoped item(s), 0 error(s), 0 warning(s)
proof-contract: 0 error(s), 0 warning(s), 22/22 item(s) checked
coverage-checklist: 1 page(s), 49 harvested result(s), 0 error(s), 0 warning(s)
citation-fidelity: 88 citation(s) over 22 authored item(s)

QUOTE NOT FOUND — none; every recorded quote appears in its cited item.

WIDENING CANDIDATES — none found by the three detectors.

Every line above is a candidate for a human read, not a verdict.
boundary-audit: 176 rows over 1 contract file(s); 59 marked not_applicable

TEMPLATE REUSE — none at or above 3 members.

CONTRADICTED DISPOSITIONS — none found by the three detectors.

Every line above is a candidate for a human read, not a verdict.
citecheck: 24 item(s) scanned

OK — every recognised elementary move cites a home that states it.
```

Targeted rendering and prose:

```text
OK — 26 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's
YAML parser.

26 file(s) checked. 0 error(s), 0 warning(s).

OK — no positional claim contradicts the spec.
```

Whole-repository forward-reference, external-statement, rendering, and prose gates:

```text
OK — every forward reference is declared, points strictly forward, is closed by a planned later page, stays off the spine unless orientation only, and introduces no cycle.

OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.

OK — 5205 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's
YAML parser.

5205 file(s) checked. 0 error(s), 569 warning(s).
  library-scope-denial: 206
  count-in-prose: 189
  count-of-this-page: 174

(re-run with --warnings to list them; warnings are heuristic and have legitimate cases)

OK — no positional claim contradicts the spec.
```

`depcheck` is the only required whole-repository gate that is not green. Its final rerun output is:

```text
8 ERROR(s):
  [dep-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: deps entry "thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object" resolves to nothing
  [dep-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: deps entry "thm-general-adjoint-functor-theorem-objectwise-form" resolves to nothing
  [dep-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: deps entry "thm-general-adjoint-functor-theorem-functor-form" resolves to nothing
  [dep-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: deps entry "thm-special-adjoint-functor-theorem-objectwise-form" resolves to nothing
  [dep-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: deps entry "thm-special-adjoint-functor-theorem-functor-form" resolves to nothing
  [link-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: wikilink [[thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object]] resolves to nothing
  [link-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: wikilink [[thm-general-adjoint-functor-theorem-objectwise-form]] resolves to nothing
  [link-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: wikilink [[thm-special-adjoint-functor-theorem-objectwise-form]] resolves to nothing

FAIL
```

That file does not belong to batch 2, so the authoring write-scope rule forbids repairing it here. This is a whole-repository blocker, not a batch-2 dependency defect.

Finite-smoke and liveness output:

```text
finite-smoke: 0 error(s), 0 check(s)
gate-liveness [frontier-14] — a gate that checked nothing is not a gate that passed

  VACUOUS   finite-smoke         0 checks (exit 0)
            a contract may reference a check the registry does not define; those resolve to nothing
  live      proof-contract       22 items checked
  live      coverage-checklist   49 harvested results
  live      precheck             3876 items checked

1 gate(s) reported a result over an empty scope. Fix the scope, not the gate.
```

The scaffold named `affine-endpoints`, but `tools/finite-smoke.mjs` has no such registered checker and says registry extension is orchestrator-owned. I removed that unsupported name rather than attach an unrelated finite checker. The resulting liveness failure is recorded as an orchestrator blocker: batch 2 has no applicable registered finite-model check, while all three applicable counted gates are demonstrably live.

### Blockers

- Whole-repository `depcheck` remains red because of the 8 unresolved references above in one file outside this batch's write scope. Batch 2 contributes none of those rows.
- `gate-liveness` correctly rejects the empty finite-smoke scope; adding a relevant analysis checker requires an orchestrator-owned registry change outside this author's write scope.
- The Stone–Weierstrass pair remains held and unspliced under the receipt's D1 decision. This authoring pass did not recreate it.

There is no mathematical, provenance, rendering, coverage, proof-contract, citation-fidelity, boundary, or targeted-precheck blocker in the 24 authored batch-2 items. `tools/gates.mjs` was not run, as instructed.
