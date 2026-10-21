# Step 3a reader report — batch 1

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Assigned pages: `inverse-problems-identifiability-and-stability`, `inverse-problems-identifiability-and-stability-examples`

## Opened inventory

- Assignment manifest: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-1.pages.json`; reader instructions: `briefs/reader.md`.
- Assigned A page: `library/inverse-problems/inverse-problems-identifiability-and-stability.md`.
- Assigned B page: `library/inverse-problems/inverse-problems-identifiability-and-stability-examples.md`.
- Assigned items: `def-ip-forward-map-and-solution-classes`, `def-ip-identifiability-and-stability-modulus`, `thm-ip-kernel-directions-preclude-unrestricted-recovery`, and `ex-ip-01-scope-and-boundary-cases`.
- Direct item suppliers: `def-metric-space`, `lem-metric-nonnegativity`, `lem-metrics-on-rn`, `def-euclidean-inner-product`, `def-linear-map`, `def-square-summable-family-on-an-arbitrary-index-set`, `def-hilbert-space`, `lem-square-summable-sequences-form-a-hilbert-space`, `lem-power-monotone`, and `lem-geometric-sequence-null`. The supplier statements and the relevant supplier proofs were opened.
- Batch evidence reviewed: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-1.proof-contracts.json` (the theorem and example citation/derivation maps), `...batch-1.coverage.json` (source locators and dispositions), `...batch-1.cross-batch-dependencies.json`, and `...batch-1.notes.md`. These were treated as evidence and checked against the current items.
- Current run status was checked with the autopilot status command: the run is at `3a-read`; no worker is in flight.

## Independent mathematical review

- `def-ip-forward-map-and-solution-classes`: the exact solution set, solvability condition, equivalence-class target, metric loss, and identity-target special case are well-defined under the stated inputs. The metric-space supplier supplies the required metric interface.
- `def-ip-identifiability-and-stability-modulus`: the distinction between exact-data identifiability, a total deterministic estimator, exactness, and a uniform modulus is mathematically consistent. The nonnegative distance codomains are supplied by the metric definition and `lem-metric-nonnegativity`. Its TikZ commutative diagram has objects `U`, `Y`, and `Q`, arrows `F`, `q`, and `qhat`, and correctly expresses `q = qhat ∘ F` exactly when the estimator is exact; the prose does not use the diagram as proof.
- `thm-ip-kernel-directions-preclude-unrestricted-recovery`: at one common datum, the estimator has one output. The target-metric triangle inequality bounds the target separation by the sum of the two losses, so their maximum is at least half the separation. Metric separation and nonnegativity justify the exact-data corollary. The proof contract's F1–F4 citations and steps 1.1–3.1 match the current proof. The noise-ball hypothesis is preserved as a common observed datum, and no linearity, compactness, or regularization hypothesis is silently used.
- `ex-ip-01-scope-and-boundary-cases`: the `d₁` metric and zero-based coordinate convention are supplied by the opened ℝⁿ and Euclidean suppliers. The projection calculation gives the stated kernel and separation. For `D`, the finite-subsum bound proves `Dx ∈ ℓ²`; coordinatewise calculation proves linearity; positive diagonal coefficients prove injectivity; and the unit vectors give the contradiction to any modulus tending to zero. The shared-datum theorem gives both lower bounds. On `U₀`, the inverse is onto the data space and preserves `d₁`, so `ω(t) = t` is valid. The example contract's F1–F12 sources and steps 1.1–3.1 match these calculations.
- The assigned statements and definitions are uninterrupted by hyperlinks. Their references occur after the complete sections; proof/fact supplier citations remain in the allowed proof areas. The theorem and example proof steps are separated into paragraphs, carry tags, and end with `[tags] ∎`.
- The external citations were checked for the cited context, not used as proof suppliers: Clason, *Regularization of Inverse Problems* (arXiv:2001.00617v2), Chapter 3 opening on Hadamard existence/uniqueness/stability and Chapter 4 §4.1 on noisy data and regularization; van Leeuwen and Brune, *10 Lectures on Inverse Problems and Imaging*, Lecture 1 §1.2 and §1.3.2 on the forward equation, well-posedness/noise, and matrix conditioning; and Daras et al., *A Survey on Diffusion Models for Inverse Problems*, §1.2, PDF p. 3, on specifying recovery targets. These passages support the stated background and scope; the theorem and example calculations are proved locally.

## Edits and defects

- No item or page edits were needed. No proof contract changed, no `verification.judge` record was removed, and no item validation or proof-layout command was run because no item path changed.
- No confirmed or suspected defect remained in an assigned item, assigned page, or reviewed direct supplier. There are no uneditable findings.

## Page verdicts

- `inverse-problems-identifiability-and-stability`: acceptable. The page is YAML frontmatter only, preserves its three-item inventory, has `page_layout: compact-v1`, and contains no summary body. Its required Hilbert-space page exists under `library/functional-analysis/`.
- `inverse-problems-identifiability-and-stability-examples`: acceptable. The page is YAML frontmatter only, lists the assigned example, has `page_layout: compact-v1`, and contains no summary body. Its required A page, orthonormal-bases page, and spectral-regularization page exist in their respective categories.

## Blocker and coverage limits

No batch-level blocker was found. The autopilot run remains at the active `3a-read` stage. Prior batch notes mention unrelated run-wide gate issues; they were not re-run or treated as batch-1 findings.

The complete assigned item texts were first surfaced before their supplier files in my tool sequence. After opening the suppliers, I re-evaluated the assigned claims against them without rereading the item files; strict supplier-first viewing was therefore not achieved. I checked the direct suppliers used by these claims but did not audit every foundational proof in the published suppliers' deeper dependency trees. No finding depends on those deeper proofs.
