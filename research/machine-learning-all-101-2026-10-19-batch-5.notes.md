# Batch 5 authoring notes

Run: machine-learning-all-101-2026-10-19  
Pair: rademacher-complexity-and-generalization  
Current scheduling input: c50e15a536f4f5705ece38529e7fce7c1a084944aece5c1f2cf9ac4f468f12d4

## Plan comparison and authority

- Read the complete ML-04 section in research/plan-machine-learning-track.md: the Definition 3.1 / 3.2 normalization, one-sided and two-sided bounds, AC branch, contraction convention, ERM consequence, proposed item interfaces, proof route, examples, requirements and sources.
- Compared the complete ML-04 entry and both page rows in research/plan-spec.json with the track design. The mathematical statements, constants, hypotheses, source locators, item interfaces and page requirements agree. No mathematical plan conflict found.
- The design lists ML-01 as a prerequisite while the assigned page rows name ML-02 and the two published empirical-process / concentration pages. ML-01 is a transitive page prerequisite through ML-02; the A page keeps the task's exact requires list and the ERM corollary declares the ML-01 item suppliers it uses.
- The design's conceptual contraction supplier name differs from the actual published carrier. The current carrier is thm-one-sided-coordinate-rademacher-contraction; it has the planned one-sided, nonabsolute normalization, finite/countable scope and no zero-at-zero requirement. The new assigned interface thm-rademacher-contraction-inequality extends that actual theorem to a specified countable subclass giving the same sign suprema. No absent supplier statement or excerpt is assumed.

## Active-run evidence

- Recomputed status with the ordinary autopilot status command. The run was running at stage 1-scaffold, with no in-flight workers; the engine reported an existing owner-held Step-1 blocker and incomplete batch coverage. This did not prevent assigned source authoring. All eight assigned readiness records were subsequently written through the ordinary recorder and hash-checked against current manifests.
- The run dependency artifact lists batch 5 at level 2 with prerequisite batch 3, matching the dispatch. Batch 5's page requirements and the ML-04 design are preserved in the authored manifest.
- The owner's current direction permits draft suppliers from this run only after their actual bodies and current readiness have been checked. ML-02's current A page and all four A items were read. Its page is still draft; current readiness inspection found two items ready/current and two with stale ready hashes. The exact open page-context edge is recorded below and in the cross-batch file.

## Item inventory, dependencies and levels

Inventory and direct dependencies were fixed in the batch manifest before item carriers were written. Levels are computed from actual in-run item edges; published suppliers do not raise an item level.

| Item | Direct in-run suppliers | Level |
|---|---|---:|
| def-rademacher-complexity | none | 0 |
| thm-rademacher-contraction-inequality | none | 0 |
| thm-rademacher-symmetrization-bound | def-rademacher-complexity | 1 |
| thm-rademacher-uniform-generalization | def-rademacher-complexity, thm-rademacher-symmetrization-bound | 2 |
| cor-erm-excess-risk-from-uniform-deviation | def-empirical-risk-minimizer, def-population-and-empirical-risk, def-supervised-learning-problem, lem-population-and-empirical-risk-are-measurable, def-rademacher-complexity, thm-rademacher-uniform-generalization | 3 |
| ex-finite-class-rademacher-complexity | def-rademacher-complexity | 1 |
| ex-bounded-linear-predictor-rademacher-bound | def-rademacher-complexity | 1 |
| ex-clipped-linear-class-shows-loose-radius-bound | def-rademacher-complexity, thm-rademacher-contraction-inequality | 1 |

The item graph is acyclic by construction. Fubini for the bounded measurable ghost-sample supremum is a direct external dependency of the symmetrization theorem; it does not change the in-run level. The empirical-risk definitions and IID definition in the corollary are included because its prediction-class formulation uses those ML-01 interfaces. No choice axiom is used for the definition, symmetrization or contraction items. The uniform concentration theorem assumes AC because the current McDiarmid supplier states and uses AC; the ERM corollary carries that same branch.

During uniform-theorem preparation, def-natural-logarithm and thm-natural-logarithm-laws were added for the confidence expressions, and lem-probability-measure-basic-identities was added for union bounds. These suppliers are external to the run, so all computed item levels remain unchanged.

## Supplier reading and mathematical decisions

- items/def-empirical-process-and-rademacher-process.md: read complete definition. It defines Pg, P_n g, the scaled centered process and Rademacher process; for uncountable classes it requires a countable subclass giving the same suprema or outer probability.
- items/def-one-sided-empirical-rademacher-complexity.md: read complete definition. The empirical complexity is the one-sided sign supremum, without absolute values and without requiring zero in the class.
- items/thm-independent-process-symmetrization.md: read full statement and proof. It is an expectation result with an absolute supremum and factor 2 inside the convex function. It does not by itself yield the plan's sharp factor-2 bound in one-sided complexity; ML-04 proves that one-sided inequality directly by ghost sample, exchangeability and supremum subadditivity.
- items/thm-one-sided-coordinate-rademacher-contraction.md: read complete statement and proof. It proves the exact finite/countable fixed-sample inequality with factor L and no zero-at-zero condition. The new theorem adds only the explicit countable-subclass transfer.
- items/thm-mcdiarmid-bounded-differences.md: read complete statement, AC hypothesis, facts and proof. Replacing one observation in the bounded loss supremum or empirical complexity changes the statistic by at most 1/m; hence sum c_i^2 = 1/m.
- items/thm-finite-class-uniform-deviation.md: read complete statement and proof. It is choice-free and has a different role from the concentration-based ML-04 theorem; it is not substituted for McDiarmid.
- library/mathematical-statistics/concentration-inequalities-and-tail-bounds.md and library/mathematical-statistics/symmetrization-rademacher-complexity-and-covering-entropy.md: read complete page frontmatter and current body. Both are published. Relevant supplier statements and complete proofs above were checked.
- library/machine-learning/finite-class-pac-learning-and-erm.md: read current A-page inventory and all four item bodies, including complete proofs. Its finite-class definitions, exact/approximate ERM claims and realizable/agnostic split are preserved. items/def-supervised-learning-problem.md, items/def-population-and-empirical-risk.md and items/def-empirical-risk-minimizer.md were also read before the corollary uses their interfaces.
- items/thm-independent-random-elements-have-product-joint-law.md, items/thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique.md, items/thm-change-of-variables-for-expectation.md, items/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces.md, items/def-identically-distributed-and-iid-random-variables.md, items/def-probability-measure.md, items/def-axiom-of-choice.md, items/lem-cauchy-schwarz-for-finite-random-variables.md and items/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces.md: inspected the actual statements and proofs/definitions used by the assigned proof arguments. Fubini's sigma-finite/integrable hypotheses are verified by the probability factors and bounded measurable supremum. No AC is introduced into the finite-product symmetrization or examples.
- items/lem-population-and-empirical-risk-are-measurable.md: read its complete statement and proof before using its measurability of the induced loss functions and fixed-predictor empirical risks. The corollary separately assumes measurability of the selected predictor's population risk as a sample function; the lemma does not establish that stronger parameter-integral claim.
- Exact Rademacher normalization is Mohri et al.'s one-sided 1/m convention. Bartlett–Mendelson's paper uses an absolute supremum and a 2/m normalization; its bounds are comparison only. Its Theorem 1 introductory display omits a confidence term and is excluded. No margin theorem, VC-rate result or experimental claim is used.

## Source locators read

- Mohri, Rostamizadeh and Talwalkar, Foundations of Machine Learning, 2nd ed., complete PDF, 505 pages: Chapter 3 §3.1, Definition 3.1, Definition 3.2, Theorem 3.3 and complete proof, printed / PDF pp. 30–33; Chapter 5 §5.4, Lemma 5.7 and complete proof, printed pp. 93–94. The local proof's sigma-swap and one-sided factors were checked against the complete source argument.
- Bartlett and Mendelson, “Rademacher and Gaussian Complexities: Risk Bounds and Structural Results,” complete JMLR 3 (2002) paper, pp. 463–482: Definition 2, Theorem 5 and Appendix B proof (printed pp. 464 and 479–480); Theorem 8 and proof (pp. 466–467); Theorem 9 (p. 467); Theorem 12 and proof (pp. 468–469). Theorem 7's margin statement was inspected but is outside this pair's claims. Appendix A, proof of Lemma 3, and Appendix B were read; Theorem 1's confidence-omitting display and the paper's separate normalization are not used.
- Mohri retrieval history: official author page located the full PDF. The web PDF redirect failed; the author's official HTML preview timed out. A search located a mirror, which was not used. A direct full-body fetch of the author's linked PDF succeeded and the downloaded file was inspected at the locators above. Exact attempts, searches and mechanical fetch stamps are recorded in batch-5.coverage.json and batch-5.source-evidence.json.
- Bartlett–Mendelson retrieval: the official JMLR article page and complete PDF were opened and the cited sections inspected. The source-fetch stamp is recorded after the final coverage file is prepared.
- Actual source-fetch result: node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-5.source-coverage.json --stamp exited 0; 2/2 sources fetch-verified, 2 newly stamped, 0 documented drops. Mohri PDF: 6,224,448 bytes, 505 pages, SHA-256 prefix 1a986e0040287866; JMLR PDF: 285,321 bytes, 20 pages, SHA-256 prefix 157a952bc8499feb. Coverage, source-coverage and source-evidence now bind these results.

## Final item checkpoints

### def-rademacher-complexity — ready, level 0

- Defines empirical and expected Rademacher complexity for nonempty measurable $[0,1]$-valued loss classes using the one-sided $1/m$ normalization, with explicit IID and supremum-measurability assumptions.
- Direct dependencies: `def-probability-measure`, `def-empirical-process-and-rademacher-process`, `def-one-sided-empirical-rademacher-complexity`, `def-identically-distributed-and-iid-random-variables`. No in-run suppliers.
- Mohri et al., Definitions 3.1–3.2, printed pp. 30–31; Bartlett–Mendelson, Definition 2, p. 464, with its absolute/$2/m$ convention recorded only as comparison.

### thm-rademacher-contraction-inequality — ready, level 0

- Extends the published fixed-sample one-sided factor-$L$ inequality to an explicitly nonempty countable subclass when both signwise suprema agree. No $Phi_i(0)=0$ assumption is added.
- Direct dependencies: `def-one-sided-empirical-rademacher-complexity`, `thm-one-sided-coordinate-rademacher-contraction`. No in-run suppliers.
- Mohri et al., Lemma 5.7 and complete sign-by-sign proof, printed pp. 93–94. Bartlett–Mendelson, Theorem 12(4), p. 469, is recorded only as the separate absolute/factor-$2L$/zero-at-zero convention.

### thm-rademacher-symmetrization-bound — ready, level 1

- Proves the choice-free one-sided expectation inequality $mathbb Esup_g(Pg-P_mg)le2mathfrak R_m(mathcal G)$ by ghost sample, conditional supremum inequality, Fubini, coordinate-pair swaps, and subadditivity.
- Direct dependencies: `def-rademacher-complexity`, `def-identically-distributed-and-iid-random-variables`, `thm-independent-random-elements-have-product-joint-law`, `thm-change-of-variables-for-expectation`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`. Its in-run definition supplier is current-ready. Fubini applies because the sample-copy supremum is product-measurable, bounded, and integrated over probability factors, which are sigma-finite.
- Mohri et al., Theorem 3.3 proof, printed pp. 31–33; Bartlett–Mendelson, Theorem 8 proof, pp. 466–467, with its alternate normalization.

### thm-rademacher-uniform-generalization — ready, level 2

- Proves the expected and empirical one-sided deviation bounds and the two two-sided bounds by complementing $[0,1]$-valued losses. Each is a separate $1-delta$ guarantee. AC is declared and used only through the McDiarmid supplier.
- Direct dependencies: `def-axiom-of-choice`, `def-identically-distributed-and-iid-random-variables`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `lem-probability-measure-basic-identities`, `thm-mcdiarmid-bounded-differences`, `def-rademacher-complexity`, `thm-rademacher-symmetrization-bound`. Its two in-run suppliers are current-ready.
- Mohri et al., Theorem 3.3 and complete proof, printed pp. 31–33; Bartlett–Mendelson, Theorems 5/8 and Appendix B proof, pp. 464–467 and 479–480, comparison only.

### cor-erm-excess-risk-from-uniform-deviation — ready, level 3

- Proves both separate approximate-ERM excess-risk bounds from the two-sided uniform deviations. It assumes an existing measurable finite-$eta$ rule and measurability of its selected population risk; it does not assert a selector exists.
- Direct dependencies: `def-axiom-of-choice`, `def-empirical-risk-minimizer`, `def-identically-distributed-and-iid-random-variables`, `def-natural-logarithm`, `def-population-and-empirical-risk`, `def-rademacher-complexity`, `def-supervised-learning-problem`, `lem-population-and-empirical-risk-are-measurable`, `thm-rademacher-uniform-generalization`. All four direct ML-01 supplier records are current-ready. The complementary-class, independent-copy, and sign-supremum measurability hypotheses match the uniform theorem.
- Mohri et al., Theorem 3.3, printed pp. 31–33; Bartlett–Mendelson, Theorem 8 and proof, pp. 466–467. The approximate-ERM comparison is proved locally.

### ex-finite-class-rademacher-complexity — ready, level 1

- Enumerates both signs and both sample outcomes for a two-function class, obtaining empirical values $1/2$ and $0$ and expected complexity $p/2$, including $p=0,1$.
- Direct dependency: `def-rademacher-complexity`; its in-run supplier is current-ready. The result is a local finite sign calculation.

### ex-bounded-linear-predictor-rademacher-bound — ready, level 1

- Uses Cauchy–Schwarz to put affine half-scaled predictors in $[0,1]$, maximizes on the radius-$B$ ball, and bounds the sign-sum second moment to obtain $BR/(2sqrt m)$.
- Direct dependencies: `def-rademacher-complexity`, `lem-cauchy-schwarz-for-finite-random-variables`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`. Both published Cauchy–Schwarz supplier bodies were checked.

### ex-clipped-linear-class-shows-loose-radius-bound — ready, level 1

- Computes the clipped class sign supremum exactly, proves clipping is 1-Lipschitz, uses the endpoint subclass for the countable-subclass contraction hypothesis, and contrasts the $B$-dependent radius estimate with the actual $B$-independent bound.
- Direct dependencies: `def-rademacher-complexity`, `lem-cauchy-schwarz-for-finite-random-variables`, `thm-rademacher-contraction-inequality`. Both in-run suppliers have current-ready records; the Cauchy–Schwarz body was inspected.

## A/B pages and source evidence

- Both assigned pages have YAML frontmatter only, correct inventories/status/category/companion metadata, and empty Markdown bodies. No summary text or engine-managed compact layout was authored.
- The A page source coverage contains two independent full-text treatments: the complete 505-page Mohri book and complete 20-page Bartlett–Mendelson JMLR paper. The B examples are local finite sign and Cauchy–Schwarz calculations using the A definition and contraction result.
- Source history preserves the official Dropbox web-reader redirect failure, the author HTML preview timeout, the unused mirror search result, and the successful first direct full-body fetch of the author-linked PDF. No source was dropped and no alternative-proof waiver was needed. The initial stamped check fetched 2/2 sources and stamped both; the final `source-fetch-check --stamp` recheck reports 2/2 fetch-verified, 0 newly stamped, 0 drops.
- Source locators and each harvested result disposition are in `batch-5.coverage.json`; complete locators, supplier readings, and fetch hashes are in `batch-5.source-evidence.json`. The scoped source coverage checklist reports 1 A page, 15 harvested results, 0 errors, and 0 warnings.

## Final validation results

- `node tools/tsx-run.mjs tools/precheck.mts <8 assigned item files>`: 7 numbered items checked, 0 failures; the definition has no numbered proof.
- `node tools/proof-layout.mjs <8 assigned item files>`: 8 items, 23 proof steps, 0 defects.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-5.proof-contracts.json --strict --json`: all 8 items checked, 0 errors, 0 warnings.
- `node tools/rendercheck.mjs <8 assigned item files> <2 assigned page files> --json`: 10 checked, 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/machine-learning-all-101-2026-10-19-batch-5.pages.json --json`: 8 items in scope, 0 errors, 0 warnings.
- `node tools/depcheck.mjs --items-file /tmp/prestige-batch5-item-selection.json --json`: 647-item/274-page dependency closure, no errors or warnings.
- `node tools/coverage-checklist.mjs research/machine-learning-all-101-2026-10-19-batch-5.coverage.json --json`: 1 page, 15 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-5.source-coverage.json --stamp`: 2/2 fetch-verified, 0 newly stamped, 0 documented drops.
- Full-run `node tools/item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` remains blocked by 78 empty scaffold inventories in other planned pages; the run log contains 0 nonempty dependency-level errors, and none for this batch.
- Full-run `node tools/proof-contract-coverage.mjs --run machine-learning-all-101-2026-10-19 --contracts research/machine-learning-all-101-2026-10-19-batch-5.proof-contracts.json --json` stops on the unrelated empty/invalid frontier inventory `distribution-shift-and-domain-adaptation`. No other batch or shared plan was edited.

## Cross-batch supplier status and readiness

- ML-01 page `prediction-problems-risks-and-empirical-minimization`: all 9 current item Step-1 records are ready and hash-current. The four direct corollary suppliers and their complete bodies were inspected. The cross-batch page and item edges are marked `verified`; this does not mean acceptance or publication.
- ML-02 page `finite-class-pac-learning-and-erm`: all four A bodies/proofs were inspected. `def-realizable-and-agnostic-pac` and `thm-finite-class-realizable-pac-bound` have current ready records; `thm-finite-class-agnostic-erm-bound` and `thm-finite-class-sample-complexity` retain ready decisions with stale hashes (“Item or dependency changed; record current readiness”). The required page-context edge remains `open` for reconciliation. No ML-04 proof uses those finite-class conclusions.
- The eight assigned items were recorded through `node tools/step1-decisions.mjs record` in ascending in-run dependency level, with their exact direct dependency IDs and `owner: false`. A current native helper audit confirms 8/8 decisions are ready and hash-current. These are author-readiness records, not independent proof approval, acceptance, or publication.

## Remaining reconciliation

There is no unresolved mathematical proof gap within the assigned batch. The ML-02 page-context edge remains open solely because two supplier readiness hashes are stale, although the actual bodies were checked and none of the assigned proof claims relies on their conclusions. Whole-run dependency-level and proof-contract-coverage commands remain blocked by other incomplete frontier inventories as recorded above. This batch’s scoped source, proof, layout, content, dependency, and Step-1 checks are complete.
