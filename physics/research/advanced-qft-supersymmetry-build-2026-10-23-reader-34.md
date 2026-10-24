# Step 3a reader report — batch 34

Run: **advanced-qft-supersymmetry-build-2026-10-23**

Role: reader

## Opened inventory

Assigned pages:

- **qftx-susy-breaking-and-phenomenology** — library/advanced-qft-and-supersymmetry/qftx-susy-breaking-and-phenomenology.md
- **qftx-susy-breaking-and-phenomenology-examples** — library/advanced-qft-and-supersymmetry/qftx-susy-breaking-and-phenomenology-examples.md

Assigned items, read in dependency order:

- lem-qftx-real-part-modulus-bound-equality
- def-qftx-global-susy-vacuum-state
- pthm-qftx-global-susy-vacuum-energy
- pthm-qftx-oraifeartaigh-f-term-breaking
- exp-aqft-atlas-compressed-higgsino-search-2026
- exp-aqft-cms-boosted-susy-search-2025

Claim-relevant mathematical and physical suppliers opened:

- thm-reals-ordered-field, thm-complex-numbers-form-a-field, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, thm-every-complex-number-has-a-square-root, and def-countable-choice
- def-qftx-super-poincare-algebra-4d, lem-qftx-super-poincare-graded-jacobi, def-qftx-unitary-super-poincare-representation, def-qftx-superspace-grassmann-algebra, lem-qftx-grassmann-coefficient-calculus, def-qftx-n1-chiral-superfield, def-qftx-physical-superspace-normalization, def-qftx-n1-kahler-target-data, post-qftx-n1-wess-zumino-model, and pthm-qftx-n1-f-term-potential
- def-cm-measurement-model, def-cm-likelihood-function, def-cm-statistical-test-and-size, and def-cm-confidence-set-and-coverage

I also checked the assigned proof-contract entries, the current batch page manifest and cross-batch dependency file, the current page frontmatter for its declared prerequisites, and the pinned mathematics page frontmatter for construction-of-r-via-cauchy-sequences, countability-and-uncountability, and field-extensions-and-the-complex-numbers. The declared current-run prerequisite pages precede batch 34 (orders 957, 984, 986, and 989 versus 990).

## Page verdicts

- **qftx-susy-breaking-and-phenomenology — pass.** The frontmatter inventory agrees with the assigned manifest, library: physics is consistent, and the page is frontmatter-only with page_layout: compact-v1. The mathematical helper remains a mathematics-domain item with a purely mathematical dependency.
- **qftx-susy-breaking-and-phenomenology-examples — pass.** Its two source-backed experiments appear in examples, the required A-page and published mathematics page are declared, and the page is frontmatter-only with page_layout: compact-v1.

The cross-batch record carried an open concern about the Wess–Zumino component normalization. I checked the current ordered Grassmann and physical-normalization suppliers directly. With the stated involution, the pure auxiliary top coefficient is −|F_raw|²; multiplying by the adopted D bracket −1/4 and using F_raw=2F gives +|F|². The chiral coefficient 2FW_i under the F bracket 1/2 gives FW_i; the derivative term likewise gives the stated kinetic sign, up to the displayed compact-support divergence. I did not reproduce the recorded normalization conflict in the current authored source, so I raise no supplier finding.

## Item verdicts and repairs

- **lem-qftx-real-part-modulus-bound-equality — pass.** The ordered-field proof establishes the one-sided bound and both directions of the equality characterization. Princeton MAT330 §1.1, PDF pp. 3–4 states |Re z|≤|z|; the local proof supplies the exact equality case for the stated real-variable formulation.
- **def-qftx-global-susy-vacuum-state — pass; source locator repaired.** The definition distinguishes the normalized rest-frame ground-state vector, boundary neutrality, and supercharge invariance. The Martin citation incorrectly named §6.1 and pp. 62–64. In version 7, §6.1 is the MSSM superpotential section; the vacuum-energy norm identity is in §7.1, printed p. 72, equations (7.1.1)–(7.1.2). The frontmatter locator and following Definition reference now name the correct section and equations. Bilal §6.1, pp. 35–36, remains an accurate independent reference.
- **pthm-qftx-global-susy-vacuum-energy — pass; source locator repaired.** The trace of the mixed anticommutator gives 4N P^0 under the declared mostly-plus convention; the common product domain and actual adjoints justify the norm identity. Martin's locator was corrected to §7.1, printed p. 72, equations (7.1.1)–(7.1.2); Bilal §6.1 remains accurate. The conditional theorem does not claim vacuum or QFT existence.
- **pthm-qftx-oraifeartaigh-f-term-breaking — pass; statement made dimensionally explicit.** The two-regime minimization, equality conditions, existence and exact count of the second-branch roots, and nonzero F terms are supported by the displayed algebra. I added the real-valued function type and physical meaning of V, plus [V]=M^4, [W]=M^3, and [F^i]=M^2 in natural units. The matching formulation evidence in the batch proof contract was updated. A search of current item carriers and batch manifests found no dependent item requiring follow-up.
- **exp-aqft-atlas-compressed-higgsino-search-2026 — pass.** The report separates observed data, background fits, expected sensitivity, and model-dependent CL_s exclusions. The ATLAS paper supports the 140 fb^-1 Run-2 sample, the 0.83% luminosity uncertainty, the six pNN configurations, the reported signal-region deviations, the approximately 200 GeV displaced-track reach at 0.6 GeV, the 130 GeV 1ℓ1T reach at 2 GeV, and the combined 126 GeV exclusion over the stated 0.3–2 GeV interval. Its statement does not infer a posterior probability or a framework-wide SUSY result.
- **exp-aqft-cms-boosted-susy-search-2025 — pass.** The official CMS result and PAS support the 138 fb^-1 sample, named benchmark decays and mass assumptions, reported observed mass reaches, and stated uncertainty ranges. The item keeps those limits model-conditional, treats CL_s as the collaboration's frequentist procedure, and says no event reconstruction or independent fit was performed.

The main external sources checked were [Princeton MAT330, §1.1](https://web.math.princeton.edu/~js129/PDFs/teaching/MAT330_spring_2023/MAT330_Lecture_Notes.pdf), [Martin, A Supersymmetry Primer, version 7](https://arxiv.org/pdf/hep-ph/9709356v7), [Bilal, Introduction to Supersymmetry](https://arxiv.org/pdf/hep-th/0101055), the [ATLAS collaboration paper](https://arxiv.org/pdf/2511.20042v2), the [CMS official result page](https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SUS-23-014/index.html), and the [31-page CMS PAS](https://inspirehep.net/files/be754b4c35f11643a9b6f4cabf36deaa). I checked the cited mathematical passages and the experimental passages, tables, figures, and summary that support the item claims; I did not re-run either experiment's simulation or independently refit its likelihood.

## Checks and remaining issues

After the repairs, reflow.mts reported all three changed item files unchanged. precheck.mts passed the theorem items; the definition returned 0 checked proof steps and 0 failures. The final batched proof-layout.mjs run reported 3 items, 11 steps, and 0 defects. The edited batch proof-contract JSON parses successfully. None of the changed items had a stale verification.judge record.

No defect remained outside my edit scope. No blocker remains. No diagrams occur in the assigned carriers. No page prose or page inventory was edited.
