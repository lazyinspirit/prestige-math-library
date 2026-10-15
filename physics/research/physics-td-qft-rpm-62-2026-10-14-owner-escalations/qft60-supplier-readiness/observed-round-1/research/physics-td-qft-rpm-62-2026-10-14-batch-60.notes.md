# Batch 60 — initial authoring notes

## Design and plan comparison

The complete QFT-IR02 design at `research/plan-quantum-field-theory-track.md` §“Finite Euclidean quartic interacting measure” matches the current `research/plan-spec.json` row: A page `qft-ir02` at order 559, B page `qft-ir02-examples` at order 560, category `quantum-field-theory-mathematics`, library `mathematics`, title, companion, and page prerequisite `qft-ir01`. There is no page-metadata conflict to resolve. The assigned five A IDs and three B IDs exactly match the proposed inventory and its QFT-IR02 reservation; no items were added or dropped.

The design’s scope is retained: finite-dimensional Euclidean probability measures with finite Gaussian covariance and nonnegative quartic interaction, Gaussian/Wick moments, covariance Wick powers, and finite-order asymptotics with explicit remainders. The finite-order expansion is not called convergent. The zero-dimensional counterexample has a genuine measure for nonnegative coupling and a zero-radius asymptotic series. No item asserts a measure on continuum fields, Osterwalder–Schrader reconstruction/reflection positivity, cutoff removal, or a physical observation.

## Dependency inventory and levels

The run dependency file places batch 60 at level 1 with `requires: ["59"]`; batch 59 is QFT-IR01 at batch level 0. Item levels were recomputed from the authored `deps` graph (external published mathematical suppliers do not add an in-run level):

| Item | In-run dependencies | Level |
|---|---|---:|
| `def-qft-finite-euclidean-interacting-measure` | none | 0 |
| `lem-qft-finite-gaussian-wick-moments` | finite-measure definition | 1 |
| `thm-qft-finite-euclidean-polynomial-measure` | finite-measure definition, Gaussian Wick lemma | 2 |
| `def-qft-finite-wick-normal-powers` | Gaussian Wick lemma | 2 |
| `thm-qft-finite-asymptotic-wick-expansion` | finite-measure theorem, Gaussian Wick lemma | 3 |
| `cex-qft-zero-dimensional-perturbation-radius-zero` | finite asymptotic theorem, Gaussian Wick lemma | 4 |
| `ex-qft-wick-quartic-coercivity` | Wick-power definition; planned QFT-IR01 lemma not yet in a current manifest | 3 current level, unresolved carrier |
| `ex-qft-finite-wick-quadratic-pair` | Wick-power definition, Gaussian Wick lemma | 3 |

The pair-level page prerequisite `qft-ir02 → qft-ir01` is recorded open in the batch cross-batch input. The only direct item-level consumer of QFT-IR01 is `ex-qft-wick-quartic-coercivity`. Its algebraic lower bound is fully proved. The final form-domain consequence is conditional on the exact planned supplier interface recorded in that item’s `[L1]` and the cross-batch row.

## Missing supplier and actual status

At authoring time, `research/physics-td-qft-rpm-62-2026-10-14-batch-59.pages.json` lists `qft-ir01` with no items, the A-page carrier `library/quantum-field-theory-mathematics/qft-ir01.md` is absent, and no `items/lem-qft-coercive-polynomial-form-domain.md` carrier exists. The current research inventory labels the planned lemma `proposed-research` with `proof_status: complete-exact-argument`; the full construction is in `research/extended-frameworks-2026-10-03/quantum-field-theory/workers/interactions-renormalization/proofs.md#ir01`. That is a complete earlier research argument, not an authored or accepted run carrier. The planned lemma itself depends on the not-yet-authored `def-qft-regulated-polynomial-hamiltonian` and the published density result `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn`; Countable Choice is stated in the consuming example. The B item therefore remains `escalated`. No QFT-IR01 item was duplicated or represented as proved.

## Mathematical conventions and Choice

The Gaussian base is the published Borel multivariate normal law with covariance matrix `C` (positive semidefinite; singular cases allowed by that supplier), and the interacting law is its nonnegative polynomial tilt normalized by `Z`. The mathematical probability construction explicitly assumes the Axiom of Choice because the exact imported multivariate-normal supplier states it. It is carried in each consuming item. The separate QFT-IR01 coercive-form interface uses Countable Choice; that assumption is also explicit in the conditional B example. No unrestricted-choice theorem is silently used.

The density notation and remainder bounds are not imported as proof shortcuts. The finite Gaussian pairing formula, normalizer positivity, polynomial moment integrability, one-sided parameter derivatives, and quotient remainder estimate are proved locally. Moshayedi’s §11.2 density display switches covariance/precision conventions across adjacent formulas; no density formula from it is used. Its finite Wick formula and §12.1 generating function are used only after translating to this page’s explicit covariance convention and supplying the complete local arguments.

## Source reading and dispositions

- David Skinner, *Advanced Quantum Field Theory*, Chapter 2 “QFT in Zero Dimensions,” complete relevant §§2.1–2.3, printed pp. 13–20. Read the real finite-dimensional configuration integral, Gaussian source integral and pairing derivation, the definition of a finite-order asymptotic expansion, and the exact quartic partition-integral coefficients and ratio/growth argument. The Cambridge web preview rejected the 18.5 MB chapter as too large; the author-hosted PDF was downloaded directly, inspected as a 29-page PDF and fully text-extracted. This was a preview-size limitation, not an unresolved source retrieval failure.
- Nima Moshayedi, *Quantum Field Theory and Functional Integrals*, complete relevant §11.2, printed pp. 44–48, including Proposition 11.2.1 and Theorem 11.2.1 (whose proof is left as an exercise), and §12.1, printed pp. 60–62, including the Wick generating function and coefficient formula. The local Wick proof is complete and does not rely on the source’s exercise or inconsistent covariance/precision density notation.

Exact URLs, source kinds, locators, harvested results and their individual dispositions are in `research/physics-td-qft-rpm-62-2026-10-14-batch-60.coverage.json`. Both are independent complete lecture-note treatments; `source-fetch-check --stamp` and the coverage checklist results are recorded below after running them.

## Readiness

Seven carriers have all current item-level mathematical inputs and complete local arguments. `ex-qft-wick-quartic-coercivity` is escalated because its declared planned QFT-IR01 supplier carrier is missing; its conditional use is complete. The page-level QFT-IR01 prerequisite remains an open page edge. Readiness hashes and examined dependency IDs are in the run’s per-item `step1` records.

## Scoped checks

Check results are appended after the final item, page, manifest and contract edits. No gate, judge verdict, shared plan, imported mathematical snapshot, or published item is changed by this batch.
