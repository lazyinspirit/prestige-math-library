# Step 3a reader report — batch 72

Run: physics-non-fluid-129-2026-10-21-r2  
Role: reader  
Scope: batch 72

## Disposition

The six assigned item bodies were reviewed against their current statements and the supplier material read below. One proof gap in the assigned rotation-core lemma was repaired. Five stale Palmerduca–Qin source locators were corrected. One nonfatal false claim remains in the published prerequisite page qft-mf01 and is routed below.

The batch pages have no local summary prose, consistent with the compact frontmatter-only page format. No assigned item or page contains a TikZ/tikzcd diagram. The rotation supplier thm-qftx-photon-rotations-helicity contains one commutative square; its W, Uν(R), and U0(R) arrows match the stated identity WUν(R)=U0(R)W.

## Opened inventory

Assigned pages:

- qftx-photon-angular-momentum — draft A page; frontmatter, item placement, companion, and requirements reviewed.
- qftx-photon-angular-momentum-examples — draft B page; frontmatter, example placement, companion, and requirements reviewed.

Assigned items, all opened in full:

- lem-qftx-measurable-helicity-scalarization
- def-qftx-photon-projected-angular
- lem-qftx-photon-rotation-test-core
- thm-qftx-photon-projected-commutators
- prop-qftx-photon-fock-angular-lift
- ex-qftx-nonparaxial-spin-projection

Relevant current in-run suppliers from batch 71, opened in full:

- def-qftx-photon-helicity-bundle
- thm-qftx-photon-rotations-helicity

Other opened item context:

- def-qft-fock-and-test-spaces and lem-qft-second-quantized-spectrum, both local published mathematical suppliers used by the Fock proposition.
- def-qft-photon-transverse-space, the published transverse-space definition placed on qft-mg01.
- The direct published mathematical supplier statements and hypotheses for the remaining dependencies: cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn; cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure; cor-sine-and-cosine-are-one-lipschitz; def-axiom-of-choice; def-countable-choice; def-the-standard-smooth-step-function; lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness; lem-euclidean-chart-measure-agrees-with-polar-surface-measure; lem-smooth-bump-between-concentric-euclidean-balls; prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null; thm-choice-implies-dependent-implies-countable-choice; thm-dominated-convergence; thm-fatou-lemma; thm-fourier-basis-and-parseval-on-the-n-torus; thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces; thm-kato-rellich; thm-lebesgue-measure-of-a-box-of-every-kind; thm-polar-coordinates-formula-for-lebesgue-measure; and thm-stone-one-parameter-unitary-groups.

Relevant page context opened:

- qftx-photon-helicity (draft), qft-mf01 (published), and qft-mg01 (published).
- The plan entries for integration-of-forms-and-the-general-stokes-theorem and trigonometric-and-oscillatory-examples-in-one-variable. Each is a planned P entry with no current item inventory or local page carrier; no page prose was available to review.

The batch manifest, proof contract, cross-batch dependency file, and batch notes were treated as navigation and evidence, not as proof verdicts. Current item bodies and supplier statements controlled this review.

## Repairs and evidence

### Rotation-core change of variables

In lem-qftx-photon-rotation-test-core, proof step 1.1 applied the Borel change-of-variables supplier to an arbitrary element of L²(M,dν). The supplier states its formula for nonnegative Borel integrands, so the original step did not explain how to handle completed-measurable representatives.

I added cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure as a mathematical prerequisite and recorded it as F11 in the proof. Step 1.1 now constructs Borel representatives componentwise from rational sublevel sets, using the completion result and Countable Choice. Since dν has the strictly positive finite density 1/(2|k|) relative to Lebesgue measure on M, the representatives are equal in the required ν-classes. The Borel change-of-variables result then applies, and its null-set consequence makes the pullback independent of representatives.

The proof contract now records F11 and the updated step 1.1. No verification.judge entry was present to remove. The repair changes no statement or definition interface.

### Source locator corrections

The current version of Palmerduca and Qin, arXiv:2308.11147v2, places the photon angular-momentum discussion in §V.3, not §VII. Its equations 213–228 contain the rotation action, projected vector operators, and commutators. Definition 14 and Theorem 16 on §III concern the circular-helicity line subbundles. I read those sections in the full arXiv v2 text and corrected the locators in:

- lem-qftx-measurable-helicity-scalarization
- def-qftx-photon-projected-angular
- thm-qftx-photon-projected-commutators
- prop-qftx-photon-fock-angular-lift
- ex-qftx-nonparaxial-spin-projection

The Fock proposition now states that the arXiv source supports only the underlying one-photon formulas; its Fock lift, number operators, and exact domains are proved locally or supplied mathematically.

Source checks:

- Palmerduca and Qin, arXiv:2308.11147v2, §III, Definition 14 and Theorem 16, and §V.3, equations 213–228: [full article](https://arxiv.org/pdf/2308.11147v2).
- Bliokh et al., arXiv:1006.3876v3, §II, equations 2–5: the projected spin/orbital formulas and their non-so(3) commutators, with the article's stated ℏ=c=1 convention: [full article](https://arxiv.org/html/1006.3876).
- Tong, QFT §6.2.1, equations 6.511–6.523: Coulomb-gauge transverse modes and projector: [chapter](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html).
- Kinnunen, Sobolev Spaces §1.8, Theorem 1.21 and Remark 1.22(4): compactly supported smooth functions are dense in Lp for finite p: [full notes](https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf).

These sources support the stated mathematical context. The assigned items' conditional proofs establish mathematical consequences of their stated Hilbert-space model, not empirical claims.

## Page verdicts

- qftx-photon-angular-momentum: no page-local defect found. Its five listed items match the assigned manifest, and its requirements identify qftx-photon-helicity and qft-mf01. The published qft-mf01 summary concern is routed separately because the assigned Fock proposition reaches items on that page.
- qftx-photon-angular-momentum-examples: no page-local defect found. Its one listed example matches the manifest and its primary-page requirement is correct. Its trigonometric page requirement resolves only to a planned P entry with no local page prose, so that page-level context could not be independently assessed.

## Uneditable finding

The published page qft-mf01 has status published, while its final body sentence says “The content remains draft mathematical construction.” This conflicts with the page's public status. The assigned consumer prop-qftx-photon-fock-angular-lift depends on def-qft-fock-and-test-spaces and lem-qft-second-quantized-spectrum, both listed on qft-mf01. The page is outside the authorized write scope; see the findings JSON.

## Checks and coverage limits

- Reflow and precheck were run for all six changed item paths. All six prechecks passed.
- Final proof-layout run on all six changed item paths: 6 items, 24 numbered steps, 0 defects.
- No other confirmed defect was found in the assigned item bodies or the direct supplier statements and hypotheses reviewed.
- The dependency graph calculation gives 1,664 items in the full transitive item closure. I did not read all 1,664 item bodies or every page in that closure, and I did not re-audit the full proofs of the imported published mathematical suppliers. Coverage is therefore limited to the assigned items/pages, the relevant current in-run suppliers, the page context listed above, and the exact direct-supplier statements/hypotheses and source passages listed above.
- Blocker: the repaired core lemma and its proof contract now include cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure in deps, but the batch-72 pages manifest still has its pre-reader dependency list. Manifest editing was outside this reader's authorized source scope; the owner/workflow must reconcile that metadata before dependency-closure gates.
- The transitive-closure and planned-page limitations are recorded here rather than treated as completed review.
