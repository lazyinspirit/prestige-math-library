# Step 3a reader report — batch 128

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `128`

Batch evidence opened: `research/physics-non-fluid-129-2026-10-21-r2-batch-128.pages.json`, `research/physics-non-fluid-129-2026-10-21-r2-batch-128.proof-contracts.json`, and `research/math-imports.json`.

## Opened inventory

Assigned pages:

- `library/thermodynamics-and-general-relativity/tgrx-jt-disk-model.md`
- `library/thermodynamics-and-general-relativity/tgrx-jt-disk-model-examples.md`

Assigned items:

- `items/post-tgrx-jt-disk-spectral-model.md`
- `items/pthm-tgrx-jt-disk-laplace.md`
- `items/rem-tgrx-jt-completion-notunique.md`

Dependency and context pages/items opened:

- `library/thermodynamics-and-general-relativity/tgrx-ads-effective-boundaries.md`
- `items/post-tgrx-semiclassical-ads-dictionary.md` (background context only; not a declared prerequisite of the JT postulate)
- `../library/real-analysis/improper-and-parameter-dependent-multiple-integrals.md`
- `../library/real-analysis/improper-integrals.md`
- Imported published mathematics: `items/thm-gaussian-integral.md`, `items/thm-differentiation-under-dominated-improper-multiple-integrals.md`, and `items/thm-substitution-for-improper-integrals.md`.

The three mathematical snapshots' SHA-256 hashes match their entries in `research/math-imports.json`: `452a312708264d603c610ec1b5ef078060b3a727c532bff7e37f7f31ca54bfc9`, `508b4d37e21c83e3c00f4a2fa875b72b3992ca402bf1b26c4e5f8428ffe65e5c`, and `d578d1d7a3fb888ae668e31153d9b5c5a3a8caafa9816f755e058ee10b3a0295`, respectively. The exact statements and complete proofs of the three direct mathematical suppliers were inspected.

## Review and page verdicts

### `tgrx-jt-disk-model` — no remaining page defect

The page places the adopted disk density before its conditional Laplace calculation. The cited mathematical prerequisite page supplies the improper-integral differentiation tools. Review of the calculation also required the published substitution supplier on `improper-integrals`; that page is now included in this A-page's `requires` and in its batch-manifest mirror.

The postulate is an explicitly adopted continuous disk-level model input, not an empirical observation or claim that JT gravity describes nature. Its density and $C,S_0$ convention agree with [Saad, Shenker, and Stanford](https://arxiv.org/html/1903.11115), §3.5, equation (144), after identifying their $\gamma$ with $C$, setting $\alpha$ to one, and restoring the separate $e^{S_0}$ topological factor; [Mertens and Turiaci](https://arxiv.org/html/2210.10846), §3.1, equation (3.10), gives the same density. Saad et al., §3.3.5, equation (125), and Mertens and Turiaci, §3.1, equation (3.7), support the disk thermal factor used as a convention check, not as a substitute for the local proof. The title and body retain the single-disk and nonperturbative limits.

The source locator for [Sárosi](https://arxiv.org/html/1711.08482) was corrected: equation (47) is in §3.3, and equations (54)–(55) are in §3.3.1. The lecture notes do not state the postulate's `c=hbar=k_B=1` convention; that convention is adopted locally in the postulate.

### `tgrx-jt-disk-model-examples` — no remaining page defect

The B page places only the completion-limit remark and requires the A page. Its title now matches the scoped JT nonperturbative-completion claim. The abstract/Introduction and §6 of [Saad et al.](https://arxiv.org/html/1903.11115) state that the matrix integral gives a non-unique completion of the genus expansion and discuss ensemble averages of quantum systems. [Mertens and Turiaci](https://arxiv.org/html/2210.10846), §§4.3.1–4.4 and §5.2, discuss the double-scaled matrix model, nonperturbative limits, discreteness, and ensemble averaging. The item does not generalize those sources to every microscopic realization or to nature.

The source checks were limited to the cited sections and equations, not to every argument in the papers. No TikZ or tikzcd diagrams occur in the assigned pages or items.

## Repairs

- **`pthm-tgrx-jt-disk-laplace`:** the original proof used affine rescaling/translation of an improper Gaussian integral and the substitution `E=x^2` without declaring a supplier for improper change of variables. Added the imported published theorem `thm-substitution-for-improper-integrals` as a mathematical premise and recorded its exact hypotheses in Fact [F3]. Steps 1.1, 2.1, and 3.1 now state the maps, domains, regularity, positive derivatives, compact-truncation change-of-variable conditions, and convergence uses. Updated the theorem's dependency and role in `research/physics-non-fluid-129-2026-10-21-r2-batch-128.pages.json`, and added the home page to `requires` in both that manifest and `library/thermodynamics-and-general-relativity/tgrx-jt-disk-model.md`. Updated `research/physics-non-fluid-129-2026-10-21-r2-batch-128.proof-contracts.json` with the F3 citation, affected derivations, exact supplier excerpt, and repair note.
- **`post-tgrx-jt-disk-spectral-model`:** corrected the Sárosi section/equation locator and removed the unsupported attribution of the natural-unit convention to those notes. The postulate continues to adopt the convention explicitly. Corrected its source-review evidence in `research/physics-non-fluid-129-2026-10-21-r2-batch-128.proof-contracts.json`.
- **`rem-tgrx-jt-completion-notunique`:** narrowed the title from a generic quantum-gravity claim to “The JT disk density does not determine a unique nonperturbative completion,” matching the item's scoped statement and the cited sources. Recorded the correction in the risk note for this item in `research/physics-non-fluid-129-2026-10-21-r2-batch-128.proof-contracts.json`.

No changed item contained a `verification.judge` record to remove. No source, mathematical original, B-page prose, or other-batch carrier was edited.

## Required checks

- Reflow: unchanged for all three changed items.
- Precheck: `pthm-tgrx-jt-disk-laplace` passed (`direct`); `post-tgrx-jt-disk-spectral-model` passed (`nonproof structure`); the remark produced `0 checked, 0 failing` because it is nonproof prose.
- Final proof-layout command on all three changed item paths: `proof-layout: 3 items, 5 steps, 0 defects`.

## Unedited evidence-record discrepancy and blocker

No unresolved mathematical defect remains in the assigned item/page prose. The out-of-scope support files `research/physics-non-fluid-129-2026-10-21-r2-batch-128.coverage.json` and `research/physics-non-fluid-129-2026-10-21-r2-batch-128-sources/source-reading.md` still say that the Sárosi notes state the natural-unit convention (including `c` and `k_B`). The inspected [lecture text](https://arxiv.org/html/1711.08482) does not support that attribution. I corrected the assigned item and its proof-contract evidence but did not edit these research support files, which are outside the authorized item/A-page repair scope. They need owner maintenance before being reused as source evidence.

Blocker: none for the assigned content review; the source-support record discrepancy remains open as noted above.
