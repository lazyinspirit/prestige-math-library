# Step 3a reader report — batch 22

Run: fluid-dynamics-all-47-2026-10-23
Role: reader-22
Scope: batch 22 only

## Opened inventory

Assigned pages:

- fd-w01 — A page, Periodic solenoidal Fourier spaces.
- fd-w01-examples — B page, Periodic solenoidal Fourier spaces — Examples.

Both current page carriers are frontmatter-only, draft mathematics pages with page_layout compact-v1 and empty bodies. fd-w01 has the 15 assigned A-page items in manifest order. fd-w01-examples has no ordinary items and lists the two assigned examples. Neither page contains a summary.

Assigned items, read in dependency order:

- Level 0: def-fd-bounded-solenoidal-spaces; def-fd-periodic-solenoidal-spaces; lem-fd-bounded-dual-separability.
- Level 1: lem-fd-bounded-solenoidal-basis; lem-fd-negative-space-nonlinear-bound; cex-fd-weak-products.
- Level 2: def-fd-weak-time-continuity; lem-fd-bounded-compactness.
- Level 3: def-fd-periodic-leray-hopf; lem-fd-finite-mode-compactness; lem-fd-no-slip-lsix.
- Level 4: thm-fd-periodic-global-weak-existence; thm-fd-bounded-global-weak-existence.
- Level 5: prop-fd-pressure-reconstruction; thm-fd-weak-smooth-uniqueness; prop-fd-bounded-evolving-pressure.
- Level 6: rem-fd-weak-regularity-status.

The fd-w01 prerequisite page fd-s01 was also opened. Its frontmatter and compact layout are consistent; the relevant overlapping definitions were checked, including def-fd-periodic-fourier-sobolev-spaces, def-fd-periodic-leray-pressure-maps, and def-fd-projected-no-slip-stokes-space. The assigned bounded closure-space definition does not identify its V with every divergence-free member of H0^1, so it does not import the different projected-Stokes definition.

Proof-critical mathematical suppliers were inspected at their exact statements and relevant proofs: the choice principles; Sobolev, weak-derivative, zero-boundary closure, and zero-extension definitions; Fourier basis and Parseval; Holder, Fubini, Tonelli, and Lp completeness; Picard–Lindelof; the L1 and absolutely-continuous fundamental theorems; distribution and test-function topology definitions; and the current batch-17 supplier lem-fd-rectangular-test-divergence-inverse. The review also checked the direct-to-transitive supplier path giving L6 completeness through the bounded basis and Sobolev completeness results.

## Repairs

| Item | Repair and evidence |
|---|---|
| def-fd-periodic-solenoidal-spaces | Defined the periodic test-function topology, periodic distributions, transpose derivatives, and distributional divergence for L2 fields. Expanded the proof of equivalence with the Fourier constraint using character tests and smooth Fourier convergence. This preserves the existing H and V claims and their unrestricted mean mode. |
| prop-fd-pressure-reconstruction | Defined the periodic spacetime test space and its inductive-limit topology in the Statement. Added continuity estimates for the regular velocity/tensor pairings and for the Fourier-constructed pressure, so their distribution status follows from the stated topology. |
| prop-fd-bounded-evolving-pressure | Added the test-function-topology supplier to deps and dependency_roles, mirrored it in the batch-22 manifest, and proved continuity of the residual distribution by compact-support estimates. Replaced the unsupported appeal to fixed-interval formulas for R with the consequence of its stated linearity and fixed-support continuity. |

Updated the corresponding rows in both batch-22 and run-wide proof-contract files. No edited item had an existing verification.judge record, so none was removed or added. The assigned page carriers and statement-reference sections were not changed.

The periodic-definition interface clarification was checked against its full 18-item current manifest dependency closure: cex-fd-weak-products; def-fd-periodic-leray-hopf; def-fd-weak-time-continuity; lem-fd-finite-mode-compactness; lem-fd-negative-space-nonlinear-bound; lem-fd-no-slip-lsix; post-fd-periodic-newtonian; prop-fd-bounded-evolving-pressure; prop-fd-pressure-reconstruction; pthm-fd-bounded-weak-continuation; pthm-fd-periodic-weak-continuation; pthm-fd-rectangular-weak-pressure; pthm-fd-smooth-consistency; rem-fd-thermal-coupling; rem-fd-weak-regularity-status; thm-fd-bounded-global-weak-existence; thm-fd-periodic-global-weak-existence; and thm-fd-weak-smooth-uniqueness. Their uses remain valid under the now-explicit periodic convention; no consumer repair was needed. No item consumer of prop-fd-pressure-reconstruction was found. The proof-only repair to prop-fd-bounded-evolving-pressure changes no public interface.

Reflow reported all three edited items unchanged. Precheck passed for each edited item. The final proof-layout check covered the three paths: 3 items, 8 proof steps, 0 defects. A targeted scan found no TikZ or tikzcd diagrams in the 17 assigned items.

## Remaining finding outside edit scope

In the current batch-17 supplier lem-fd-rectangular-test-divergence-inverse, Facts & Assumptions [A2] asserts Fubini and differentiation under finite integrals without a supplier citation or local derivation. Proof steps 1.1, 2.1, and 3.1 use these facts for the recursive construction and derivative seminorm bounds. For the stated smooth compactly supported integrands on finite intervals, a short elementary justification closes the gap, so this is nonfatal. The assigned consumer is prop-fd-bounded-evolving-pressure. The current supplier bytes were bound in the findings JSON.

## Page verdicts

- fd-w01: pass. Draft mathematics A-page, exact 15-item manifest inventory, frontmatter-only compact layout, no summary.
- fd-w01-examples: pass. Draft mathematics companion page, exact two-example inventory, frontmatter-only compact layout, no summary.

## Blocker and coverage note

No blocker for the assigned batch review. One nonfatal supplier proof omission remains for its owning batch to disposition. I reviewed every assigned page and item, the full current dependency closure of the edited periodic definition, and the suppliers needed for the assigned proofs. I did not audit the full bodies of unrelated pages in the plan-level requires chains or independently retrieve the cited literature URLs; no literature citation defect is asserted.
