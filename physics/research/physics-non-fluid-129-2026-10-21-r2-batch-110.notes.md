# Batch 110 authoring evidence

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: beta  
Pair: `qsmx-transport-and-drude` / `qsmx-transport-and-drude-examples`

## Plan and design reconciliation

The assigned design, inventory, and `research/plan-spec.json` agree on the A/B IDs, title, category, library, companion, order (917/918), and the A page prerequisites `qsm-dt-response`, `qsmx-integrable-transfer`, and `qsmx-lieb-robinson-spectral-flow`. The plan-spec item arrays are empty planning placeholders; the design inventory names three planned A items and the B counterexample. No owner authoring-direction file was present.

The A page includes the three designed items plus `lem-qsmx-lattice-current-continuity`, added locally because the definition's continuity statement is a derived claim requiring its own complete proof. The B page contains the designed finite-volume counterexample. This is the only inventory expansion.

The design's classical Green–Kubo proof route suggests dominated convergence. The authored proof instead gives an explicit absolute-tail estimate under the same absolute-integrability hypothesis. This avoids importing a stronger Lebesgue/choice dependency and proves the same conditional limit. The proof uses the imported first and second fundamental theorems of calculus explicitly; `thm-ftc-first-part` was added as a direct mathematical dependency because the proof differentiates the covariance integral. No claim was weakened to fit the page.

The prose scaffold's source mapping `faddeev-3` does not support current continuity or Green–Kubo claims; the inspected Faddeev section covers Bethe/transfer material. The current page uses Sirker, MIT OpenCourseWare, and Naaijkens, with the exact disposition recorded in coverage.

## Authored items and dependency order

All five items have `domain: mathematics`, `library: physics`, mathematical-premise dependency roles, and no physical-scope claim. The order and calculated in-run levels are:

| Item | Level | Direct dependencies |
| --- | ---: | --- |
| `def-qsmx-lattice-current-and-limits` | 0 | `thm-qsm-dt-finite-kubo` |
| `lem-qsmx-lattice-current-continuity` | 1 | `def-qsmx-lattice-current-and-limits` |
| `thm-qsmx-finite-mazur-bound` | 2 | definition, continuity lemma, `thm-qsm-dt-cesaro-dephasing`, `lem-qsm-matrix-state-calculus` |
| `thm-qsmx-conditional-diffusive-green-kubo` | 1 | definition, `thm-qsm-dt-variance-green-kubo`, `thm-riemann-fubini-on-product-rectangles`, `thm-substitution`, `thm-ftc-second-part`, `thm-ftc-first-part`, `lem-cm-integral-and-ftc-for-continuous-normed-space-curves` |
| `cex-qsmx-dc-order-of-limits` | 3 | definition, continuity lemma, finite Mazur bound |

The definition distinguishes finite open chains from periodic rings, fixes bond orientation and SI units, defines the centered finite-temperature correlation, and requires any later volume/time/regulator order to be stated. The continuity lemma proves the local commutator identity and both open-boundary cancellation and periodic wrap cancellation.

The Mazur theorem assumes a finite-dimensional Hilbert space, faithful stationary density, centered self-adjoint current, and a finite linearly independent conserved family. It proves only a finite Cesàro correlation bound; it does not infer a thermodynamic Drude weight. Its proof uses the imported state-dephasing result only for its exact density-matrix statement; the observable block average is separately derived by the displayed finite spectral expansion.

The conditional Green–Kubo theorem has separate classical and quantum alternatives. The classical process is centered, second-order stationary, norm-continuous in $L^2$, and has an absolutely convergent improper Riemann correlation integral. The quantum branch uses the exact finite-range variance supplier, Countable Choice, and its finite-matrix $C^*$-identity hypothesis; it does not invoke the full Axiom of Choice. In both branches the spatial normalization, convergence from finite volume, and order of limits are assumptions. The theorem is a conditional variance identity, not an empirical diffusion law or conductivity claim.

The counterexample is an explicit three-site periodic one-particle ring at finite positive inverse temperature. Its exact thermal current is centered, conserved, and has strictly positive variance, so the finite connected correlation is a positive constant and its unregulated integral diverges. It makes no thermodynamic-limit claim.

## Sources and retrieval record

- J. Sirker, full 19-page lecture notes, §2 current conventions, §2.1 finite Mazur projection, and §2.2 Drude/regular correlation discussion.
- MIT OpenCourseWare 22.103 Lecture 3, complete four-page note, equations (3.1)–(3.8). This is classical-fluid linear-response context; no experimental or quantum theorem is imported from it.
- Pieter Naaijkens, complete 157-page notes, §§3.3.11–3.3.12, for the finite-range spin-dynamics context. The authored quantum theorem takes the exact variance supplier as its input and does not infer a spatial limit from locality.

`source-fetch-check --stamp` verified all five coverage source entries (three unique URLs): 5/5 verified, 0 newly stamped, 0 drops, and no unresolved selected retrievals. The coverage file has eight harvested results, each with an item destination and disposition; `source_resolution` is empty because no selected source remains unresolved or dropped.

During inherited supplier reading, the old Kubo host URL timed out; a search found an accessible mirror. The current pair does not rely on that PDF, and the current local Kubo supplier's exact statement and complete proof were inspected. No source was dropped from this batch.

## Cross-batch and prerequisite interfaces

The A page has two declared in-run page edges. `qsmx-integrable-transfer` (batch 106) is verified: fresh `loadStep1Record`/`step1Decision` checks show all seven carriers ready and current. The current commuting-transfer and Heisenberg-charge interfaces were inspected; they give candidate conserved operators, not a Drude conclusion or an overlap with the current.

`qsmx-lieb-robinson-spectral-flow` (batch 102) is verified: the same fresh check shows all eight carriers ready and current. The weighted Lieb–Robinson theorem and gapped spectral-flow theorem, including their complete current proofs, were inspected. They give finite-volume locality estimates and transport of limiting band-state sets under their explicit finite-range, uniform-gap, Countable Choice, and finite-matrix $C^*$-identity hypotheses. This batch does not use them as proved premises; the conditional theorem assumes the normalized spatial correlation and limit order. The scoped edge check is not independent proof approval.

`qsm-dt-response` is an earlier page outside this run. Its directly used finite-Kubo theorem statement and complete proof were inspected. The cross-batch JSON contains one row per in-run page edge and no unsupported review rows.

The batch-110 cross-edge structure check confirms exactly two page edges, both `verified`, with no open or orphaned batch-110 reviews. The full run-level `frontier-dependency-ledger collect` could not complete because batch 105 contains an invalid cross-batch review/consumer ownership row; batch 105 was not edited.

## Finite checks

The proof contracts record these checks as diagnostics, not as substitutes for proof or as empirical observations:

- Exact three-site matrix check for the finite Mazur equality case: with $g=\hbar=1$ and $\rho=I/3$, $[H,J]=0$, $\operatorname{Tr}(J^2)=6$, and both the Cesàro value and one-charge lower bound are $2$. A preliminary harness had an incoming/outgoing convention wiring error; the corrected current convention gives zero commutator and continuity residuals.
- Exact thermal counterexample: $[H_3,J_3]=0$, $\omega(J_3)=0$, $c=6g^2/(\hbar^2(e^{3\beta g}+2))>0$, and $C_3(t)=c/3$.
- Classical exponential-covariance check with $C(t)=e^{-\lambda t}$, $\lambda>0$: $\operatorname{Var}(X_T)/(2T)=1/\lambda-(1-e^{-\lambda T})/(\lambda^2T)$ and the limit is $1/\lambda$.

## Scoped checks and readiness

- `precheck`: four proof-bearing items pass; the definition is not applicable.
- `proof-layout`: 5 items, 17 numbered steps, 0 defects.
- `rendercheck`: all five items and both pages pass (7 files checked).
- `content-policy`: 5 items, 0 errors and 0 warnings.
- Focused `depcheck`: 5 selected items; 1,391-item and 493-page prerequisite closure, 0 errors and 0 warnings.
- Focused `fwdcheck`: 0 open forward references, 0 errors and 0 warnings.
- Focused `extcheck`: 5 checked items, 0 errors and 0 warnings.
- Focused `citecheck`: 5 items, 0 warnings.
- Strict proof contracts: 5/5 items, 0 errors and 0 warnings; exact supplier statements, step inputs, boundary cases, and finite checks are recorded.
- Coverage checklist: 2 pages, 8 harvested results, 0 errors and 0 warnings.
- `manifest-integrity`: 258/258 current plan pages present, no missing or added pages.
- Scoped item dependency levels pass with levels 0, 1, 2, 1, 3 and no cycle.
- `source-fetch-check --stamp`: 5/5 sources verified, 0 newly stamped, 0 documented drops.
- `step1Decision` confirms all five assigned item records current and `ready`. These records certify authoring readiness only, not independent review or proof approval.

The run-level batch dependency snapshot originally records batch 110 at level 2 with prerequisites 102 and 106. Its input hash became stale when the authored batch manifest changed; it was left untouched for the owner to refresh. A whole-run dependency-level recomputation is blocked by the unrelated incomplete batch-89 string-only inventory (`csm-frontier-critical-gaussian-rg`); the scoped batch-110 level check passes. No other-batch files, shared plan, engine state, published item, or verdict were edited.
