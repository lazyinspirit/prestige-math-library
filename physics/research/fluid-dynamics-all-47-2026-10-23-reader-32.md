# Step 3a reader report — batch 32

Run: fluid-dynamics-all-47-2026-10-23  
Role: reader-32

## Inventory opened

Assigned pages, both draft mathematics pages with empty bodies and compact-v1 layout:

- fd-st01 — Random fields and dependent fluid statistics.
- fd-st01-examples — Random fields and dependent fluid statistics — Examples.

Assigned items, in the intended supplier-to-consumer review order:

- def-fd-random-velocity-sensor-law
- lem-fd-sensor-pairing-is-well-defined
- lem-fd-velocity-tensor-is-bochner-integrable
- thm-fd-expected-weak-reynolds
- prop-fd-sensor-long-run-clt
- ex-fd-ar1-long-run-variance

The batch manifest declares 40 unique direct dependency/discharge items; I opened all 40, including the same-batch suppliers listed above and these 37 external direct suppliers:

def-l-p-space-as-a-quotient-by-null-functions; thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space; thm-minkowski-inequality-for-integrals; thm-linearity-of-the-lebesgue-integral-on-l-one; def-probability-measure; def-strongly-measurable-banach-valued-function; thm-holder-inequality-for-integrals; thm-bochner-integrability-criterion; thm-bounded-linear-maps-commute-with-bochner-integration; def-countable-choice; thm-riesz-fischer-completeness-of-l-p; def-product-sigma-algebra-and-finite-product-sigma-algebras; thm-tonelli-theorem-for-sigma-finite-product-spaces; thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces; thm-rationals-countable; lem-q-and-irrationals-dense-r; def-axiom-of-choice; thm-mcmc-clt-sufficient-regimes; def-long-run-variance-for-stationary-markov-chain; def-measure-kernel-and-probability-kernel; def-time-homogeneous-markov-chain-with-transition-kernel; def-invariant-and-stationary-distribution-for-a-markov-kernel; def-phi-irreducible-chain; def-general-state-aperiodic-markov-chain; def-harris-recurrent-markov-chain; def-geometric-and-uniform-ergodicity-for-mcmc-clt; def-polynomial-ergodicity-with-integrable-rate-envelope; def-general-state-reversibility-by-symmetric-flow-measure; def-total-variation-distance-for-probability-laws; def-ergodic-measure-preserving-system; def-measure-preserving-transformation-and-system; thm-strong-mixing-clt-with-moment-conditions; def-mixing-coefficients-for-stationary-markov-chain; def-moments-variance-and-covariance; thm-geometric-series; def-weak-convergence-of-borel-probability-measures; thm-dominated-convergence.

Additional relevant suppliers opened: def-banach-valued-simple-function-and-integral; def-banach-space; def-separable-space; def-dense-top; lem-zero-long-run-variance-gives-degenerate-clt. The batch-32 proof contracts and cross-batch dependency file were inspected; the cross-batch dependency file is empty. Both assigned pages, all six assigned item sources, all direct dependency sources, and the relevant contract rows were checked. No TikZ or tikzcd diagrams occur in the assigned carriers, and none is needed for these arguments.

## Source checks and mathematical review

- Jones, “On the Markov Chain Central Limit Theorem,” arXiv:math/0409112v2, https://arxiv.org/pdf/math/0409112: Section 4.1, Theorems 5–6 and Theorem 9, PDF pp. 9–12. Theorem 5 supports the bounded and 2+delta strong-mixing regimes, Theorem 6 the exponential/logarithmic-moment regime, and Theorem 9 the six Markov-chain regimes. The local zero-variance lemma supplies the degenerate case not stated in Theorem 5/6 as a positive-variance CLT.
- Geyer, Markov Chain Monte Carlo Lecture Notes, https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf, §§4.8.1–4.8.2, printed pp. 132–135. The autocovariance variance identity and geometric-ergodicity context match the stated conventions. The local AR(1) calculation is proved in the example.
- Tao, An Introduction to Measure Theory, https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf, §1.7, Theorem 1.7.15 and proof (PDF pp. 200–201), and Theorem 1.7.21 and proof (PDF pp. 204–205). These give the nonnegative product-integral exchange and the absolutely integrable Fubini interchange used by the weak Reynolds argument. Tao states completeness for Fubini; the local Fubini supplier proves the sigma-finite measurable version used here.
- Teschl, Topics in Real and Functional Analysis, https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07%2110_23_44_AM.pdf, §11.6, Lemma 11.31 and Theorem 11.32, printed pp. 334–335. The integrability criterion and bounded-linear-map interchange match the local suppliers.
- Terquem, Fluids, https://www.physics.ox.ac.uk/system/files/file_attachments/notes.pdf, §6.3.1, PDF pp. 117–120. The notes use Reynolds decomposition in a constant-density incompressible turbulence derivation. The assigned theorem imports terminology only and explicitly does not import that derivation or its assumptions.

The expected weak Reynolds proof's product measurability, Tonelli/Fubini hypotheses, finite second-moment bounds, and covariance positivity are supplied locally and by the named mathematical dependencies. The MCMC proposition's six regimes match the Jones Theorem 9 hypotheses; the general stationary branch matches the strong-mixing suppliers. The AR(1) example's covariance and weak-limit calculations are mathematically valid under its stated recursion, independence, stationarity, and Gaussian assumptions.

## Edits and validation

- def-fd-random-velocity-sensor-law, Definition: stated the norm axioms, completeness, and countable-density criterion for its separable real Banach input space; defined scalar expectation as integration against P. These make the existing hypotheses explicit and preserve the prior interface.
- ex-fd-ar1-long-run-variance, Example: stated centered as E[X_n]=0 for every n; defined L(X_0) as the pushforward law, allowed degenerate N(m,0) laws in the jointly Gaussian definition, fixed the recursion quantifier to n >= 0, and stated eta's velocity units. The covariance and CLT proof is unchanged.
- Updated the two affected batch-32 contract risk-review notes to record these wording clarifications. Neither item had a stale verification.judge record.

Checks after final edits:

- Reflow: unchanged for both edited items.
- Precheck: the definition has no proof-bearing rows; the example passed, 1 checked and 0 failing.
- Proof layout: 2 items, 7 steps, 0 defects.

## Defects not editable in this assignment

All remaining findings concern published mathematical suppliers, which are read-only. Exact subjects, assigned consumers, locations, defect classes and evidence are recorded in research/fluid-dynamics-all-47-2026-10-23-reader-findings-32.json. The main blocking dependency is the malformed published Lp norm theorem statement used by the assigned sensor-law definition. Other findings concern inline statement links or citation-title remnants that remain in published supplier statements/definitions. No published or imported source was edited.

The exact uneditable defects are:

- thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space — Statement item 3, lines 36–38 — ill-formed, fatal. Its quotient-operation and normed-space clauses contain unresolved title fragments.
- def-banach-space — Definition opening sentence — ill-formed, nonfatal. Inline wikilinks interrupt the definition used through the Banach-valued supplier chain.
- def-l-p-space-as-a-quotient-by-null-functions — Definition paragraphs 3–4, lines 46–53 — ill-formed, nonfatal. Quotient-definition title fragments remain embedded in the formulation.
- def-probability-measure — Definition first paragraph, line 32 — citation-inaccurate, nonfatal. Title-only parentheticals remain inside the definition.
- def-product-sigma-algebra-and-finite-product-sigma-algebras — Definition first paragraph, line 32 — ill-formed, nonfatal. “Measurable rectangles” title text is embedded after the formal display.
- def-weak-convergence-of-borel-probability-measures — Definition first paragraph, line 26 — ill-formed, nonfatal. “Continuity is Continuity...” and “integrals are finite in Integrable...” are malformed title substitutions.
- thm-geometric-series — Statement opening and item 1, lines 32–35 — citation-inaccurate, nonfatal. Two title-only parentheticals remain in the statement.
- lem-q-and-irrationals-dense-r — Statement, lines 44–52 — citation-inaccurate, nonfatal. Title-only parentheticals remain after the rational embedding, closure, and countability claims.
- thm-rationals-countable — Statement, lines 46–56 — ill-formed, nonfatal. Inline wikilinks interrupt the theorem statement.
- def-invariant-and-stationary-distribution-for-a-markov-kernel — Definition, lines 35–60 — ill-formed, nonfatal. Inline links interrupt the definition.
- def-phi-irreducible-chain — Definition opening, line 30 — ill-formed, nonfatal. Inline links interrupt the definition.
- def-general-state-aperiodic-markov-chain — Definition opening, line 25 — ill-formed, nonfatal. Inline links interrupt the definition.
- def-general-state-reversibility-by-symmetric-flow-measure — Definition, lines 39–52 — ill-formed, nonfatal. Inline links interrupt the definition.
- def-ergodic-measure-preserving-system — Definition, line 26 — ill-formed, nonfatal. An inline link interrupts the definition.
- def-measure-preserving-transformation-and-system — Definition, line 26 — ill-formed, nonfatal. Inline links interrupt the definition.
- def-total-variation-distance-for-probability-laws — Definition first sentence, line 32 — citation-inaccurate, nonfatal. A title-only parenthetical remains in the definition.
- def-mixing-coefficients-for-stationary-markov-chain — Definition paragraph defining rho_Y, line 39 — ill-formed, nonfatal. An inline link interrupts the coefficient definition.
- thm-strong-mixing-clt-with-moment-conditions — Statement final paragraph, line 53 — ill-formed, nonfatal. Inline links interrupt the concluding statement.
- thm-mcmc-clt-sufficient-regimes — Statement, lines 58–97 — ill-formed, nonfatal. Inline links interrupt multiple hypotheses and conclusions.
- lem-zero-long-run-variance-gives-degenerate-clt — Statement first sentence, line 33 — ill-formed, nonfatal. An inline link interrupts the square-integrability hypothesis.

## Page verdicts

- fd-st01: The five assigned items were reviewed; the sensor-law definition received an explicitness repair, and the sensor, tensor, expected weak Reynolds, and sensor CLT arguments are sound under their stated mathematical hypotheses. The page remains draft and has unresolved published-dependency findings, including the Lp norm theorem statement needed by its sensor-law definition.
- fd-st01-examples: The assigned AR(1) example received explicit centering, law, and degenerate-Gaussian conventions; its covariance, summability, variance-limit, and distribution-limit calculations are sound. The page remains draft with uneditable published-definition/statement defects in its weak-convergence and geometric-series suppliers.

## Blocker and coverage limits

No execution or write-scope blocker remains. Published dependency repairs are outside reader-32 authority and are routed in the findings file for owner disposition. I opened every assigned page/item and every unique direct dependency listed by the six assigned items, plus the identified transitive suppliers used in the arguments. I did not audit the full transitive closure of roughly 1,500 mathematical carriers; published suppliers beyond the exact statements/proofs and source passages listed above remain outside this batch review. Some direct suppliers were opened after their consumer during the initial pass; all direct dependency claims were subsequently checked before final disposition. No whole-library or full-transitive-closure audit is claimed.
