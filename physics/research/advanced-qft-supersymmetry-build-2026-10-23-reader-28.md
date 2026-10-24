# Reader report — batch 28

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Date: 2026-10-25  
Role: independent reader

## Reader verdicts

- **`aqft-eft-amplitudes` (A): No remaining confirmed page-local defect.** Its required items and prerequisites match the current page carrier. The page body is empty, as required by the compact-page policy.
- **`aqft-eft-amplitudes-examples` (B): No confirmed page-local defect.** Its example follows from the theorem under the stated `Delta_match = 0` condition. The diagram shows the necessary inequality `C8 >= 0`, includes the equality boundary, and is not used as proof. The page body is empty.
- **Blocker:** None for the batch-28 reader handoff. One nonfatal prose defect in a published mathematical dependency is reported below; it was outside this reader's write scope.

## Opened inventory

Assigned pages opened: `aqft-eft-amplitudes` and `aqft-eft-amplitudes-examples`. Both are draft physics pages with empty bodies. I also opened their required pages `aqft-eft-foundations`, `aqft-eft-operators`, `qftx-eft-dispersion-and-bootstrap`, and `qftx-eft-operator-quotients`; these are likewise frontmatter-only.

Assigned items opened in supplier-before-consumer order:

1. `def-aqft-eft-scattering-channel` — full definition, verification, sources, and contract.
2. `pthm-aqft-forward-positivity-wilson-coefficient` — full statement, proof, remarks, sources, and contract.
3. `ex-aqft-eft-positivity-application` — full example, verification, remarks, and TikZ diagram.

In-run suppliers opened:

- Batch 16: `def-aqft-local-operator-and-dimension`, `lem-aqft-finite-order-local-operator-space-finite-dimensional`, and `def-aqft-operator-basis-quotient`.
- Batch 18: `def-aqft-scattering-amplitude-input`, `lem-aqft-crossing-even-forward-amplitude`, `thm-aqft-gapped-scalar-forward-positivity`, `def-aqft-truncated-amplitude-bootstrap-problem`, and `prop-aqft-quartic-contact-jet-matching`.

Published mathematical suppliers opened for the dependency arguments included `def-reductive-and-linearly-reductive-over-c`, the star-shaped and improper-integral definitions and results cited by the dispersion theorem, the Cauchy integral formula and its exceptional-point/helper results, the circle-monomial integral, uniform-limit passage, geometric-sequence limit, and `fs-nonnegative-integrable-with-zero-integral-vanishes`. I read the batch-28 manifest, proof contracts, notes, and current cross-batch dependency file as navigation/evidence, not as acceptance.

## Mathematical review

The channel definition specifies natural units, the mostly-plus Minkowski metric, the real scalar field and its finite-jet/Lorentz action, dimensions, physical kinematic region, partial-wave normalization, the adopted optical-theorem sign, pole subtraction, analytic domain, compact cut-bank continuity, high-energy bound, spectral moment, and exact matching datum. It presents these as stipulated amplitude/model data; it constructs no S-matrix or empirical result. The definition's verification correctly checks the Lorentz contraction and crossing-symmetric pole subtraction.

The batch-18 dispersion theorem's local proof derives the positive moment from its explicit two-cut, crossing, real-analyticity, uniform high-energy, compact-bank continuity, endpoint-arc, and Riemann-integrability hypotheses. The contact-jet proposition independently computes the finite polynomial `t_O8(v) = 8m^4 + 4v^2` under its stated finite-jet convention. Combining `c1 >= 0` with the separate exact matching identity yields `C8 + Lambda^4 Delta_match/4 >= 0`; `C8 >= 0` follows only when `Delta_match = 0`. The example arithmetic gives `c1 = +/-1/(128m^4)` for its two candidates, and correctly says passing the necessary bound does not establish amplitude existence.

For the unfamiliar positivity conventions I checked de Rham et al., *Positivity Bounds for Scalar Theories*, §2 and equations (1)–(15), PDF pp. 1–3. Equations (1)–(2) give the partial-wave normalization and unitarity inequality; the dispersion derivation and pole subtraction are at equations (6)–(11); the forward derivative positivity is at equations (12)–(15). The authored batch-18 proof adds and proves the specific boundary regularity and convergence conditions it needs rather than treating the cited paper as a substitute for those steps. No reported experiment, measured input, statistical estimate, or empirical certainty is asserted in this batch.

## Edit and validation

I repaired `pthm-aqft-forward-positivity-wilson-coefficient`:

- Made the threshold-arc condition explicit for the same integrand whose upper/lower bank integrals are required in the statement.
- Replaced proof step 1.2's unsupported identification of a formal `i∫` interaction insertion with a scattering amplitude. It now uses [F2] only for the finite-jet contact polynomial with the explicitly selected zero relation space; it states that this algebraic calculation is not identified with the exact amplitude. The exact matching identity remains the supplied premise [A1], and `Delta_match` retains the other contributions.
- Updated the corresponding step-1.2 derivation in `advanced-qft-supersymmetry-build-2026-10-23-batch-28.proof-contracts.json`. The item had no `verification.judge` record to remove.

The direct consumer `ex-aqft-eft-positivity-application` was checked against the clarified theorem hypotheses; its statement, arithmetic, and diagram remain sound and needed no edit. No other current-run manifest listed a consumer of this theorem.

Required checks after the edit:

- `reflow.mts items/pthm-aqft-forward-positivity-wilson-coefficient.md`: unchanged.
- `precheck.mts items/pthm-aqft-forward-positivity-wilson-coefficient.md`: pass, 1 checked, 0 failing.
- `proof-layout.mjs items/pthm-aqft-forward-positivity-wilson-coefficient.md`: 1 item, 4 steps, 0 defects.

## Uneditable finding

The published mathematical dependency `thm-monotonicity-of-the-integral`, Statement lines 52–56, has an ambiguous/ill-formed equality discussion: after correctly saying a nonnegative zero-integral function may be positive at infinitely many points, it says “that is FALSE” and then gives the false claim that the function is identically zero. The linked published counterexample `fs-nonnegative-integrable-with-zero-integral-vanishes` explicitly uses Thomae's function, which has integral zero and is positive at every rational point. The assigned theorem reaches this published item through `thm-aqft-gapped-scalar-forward-positivity` → `thm-comparison-test-for-improper-integrals` → `thm-monotonicity-of-the-integral`. The only part used in the assigned proof is the nonnegative-integral subclaim, whose statement and proof are sound; the prose issue is nonfatal and not editable in this batch. Its current raw SHA-256 is `8995be01407f4fbafd66b40b67187a5692fd338b82f12ff7f8034a1630599c08`.

## Coverage limitation

I inspected the relevant de Rham source argument and the local suppliers listed above. I did not independently re-audit the entire transitive proof foundations of the imported published complex-analysis/real-analysis items or re-read every bibliography entry in full; I used their exact published supplier statements for those foundational steps. No unresolved gap was found in the assigned argument beyond the reported published prose defect.
