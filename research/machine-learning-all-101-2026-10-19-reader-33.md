# Reader report — batch 33

Run: `machine-learning-all-101-2026-10-19`  
Role: reader (`reader-33`)  
Scope: batch `33`

## Inventory opened

Assigned pages:

- `library/machine-learning/convolution-and-group-equivariance.md` — draft A page; frontmatter-only, `page_layout: compact-v1`; seven assigned items and the published prerequisite page `group-actions-and-cayleys-theorem`.
- `library/machine-learning/convolution-and-group-equivariance-examples.md` — draft B page; frontmatter-only, `page_layout: compact-v1`; three assigned examples and the A page as prerequisite.

Assigned items, checked in dependency order:

1. `def-discrete-convolutional-layer`
2. `def-group-action-on-feature-maps`
3. `def-p4-p4m-lattice-symmetry-groups`
4. `def-equivariant-neural-layer`
5. `def-group-convolution`
6. `def-pointwise-nonlinearity-and-pooling-on-group-features`
7. `thm-group-convolution-equivariance`
8. `ex-translation-equivariance-and-zero-padding`
9. `ex-p4-and-p4m-orientation-indexed-features`
10. `ex-nonstrided-subgroup-and-coset-pooling`

Opened the published suppliers `def-function`, `def-group`, `def-group-action`, `def-equivariant-map-of-group-actions`, `def-subgroup`, and `def-coset`, plus `library/abstract-algebra/group-actions-and-cayleys-theorem.md` to confirm its published action suppliers. Also consulted the batch-33 proof contracts, coverage record, cross-batch-dependency record, and author notes as evidence, not as review verdicts. No batch-33 rendered evidence bundle was present in the inspected run-state or dispatch paths.

## Independent review and repair

The definitions state their domains, actions, channel conventions, finite-support or absolute-convergence conditions, and boundary choices. The feature-map action proof checks identity and composition. The p4/p4m construction verifies the finite matrix groups, affine-pair multiplication, lattice action, and infinitude from translations. The pooling definition proves representative-independence and existence of its finite maxima. The equivariance theorem's group and lattice reindexings, subgroup restriction, coset pooling, constant bias, fixed origin, and composition arguments preserve the stated hypotheses and directions. Its TikZ commutative square correctly represents `Φ ∘ T_u = T'_u ∘ Φ`; the proof does not rely on the diagram. The three examples' computations, including the zero-padding failure and fixed-filter rotation witness, are correct.

One confirmed terminology defect was repaired in the assigned source and its assigned consumer:

- In `def-p4-p4m-lattice-symmetry-groups`, the Definition called both finite matrix groups “orientation subgroups.” This is false under the standard orientation-preserving meaning: `D_4` contains the four reflections `ρ^jσ`, each with determinant `−1`; only its four rotations `ρ^j` preserve orientation. The statement now calls `C_4` and `D_4` the point groups and gives their respective orders as four and eight. Cohen and Welling, §§4.2–4.3, describe p4 and p4m with four and eight linear symmetries; the item’s determinant calculation distinguishes the orientation-preserving subgroup from the full p4m point group. [Cohen and Welling, *Group Equivariant Convolutional Networks*](https://arxiv.org/pdf/1602.07576).
- In `ex-p4-and-p4m-orientation-indexed-features`, the prerequisite fact repeated “orientation subgroups.” It now says “point groups”; the reference label was aligned to the corrected terminology. Its statement’s “orientation indices” remains accurate for the four and eight linear components.
- Updated the three proof-contract quotations that copied the corrected p4/p4m Definition: `thm-group-convolution-equivariance`, `ex-p4-and-p4m-orientation-indexed-features`, and `ex-nonstrided-subgroup-and-coset-pooling`. The source definition’s proof contract remains current because its proof claims were unchanged and already identify `C_4` and `D_4` as the finite point groups. Neither edited item had a `verification.judge` record to remove.

The cited Cohen–Welling paper was inspected at §2, Eq. (1); §§4.2–4.4, Eqs. (2)–(5); §5, Eqs. (7)–(9); §6.1, Eqs. (10)–(13); §§6.2–6.3, Eqs. (14)–(17); and Appendix A, Eq. (20). These passages support the action, correlation, fixed-filter, pointwise, pooling, and p4/p4m conventions. The official [Goodfellow–Bengio–Courville Chapter 9](https://www.deeplearningbook.org/contents/convnets.html) search extraction confirmed the cited cross-correlation convention (Eq. 9.6) and the relevant chapter sections on translation equivariance, pooling, stride, and padding. Direct opening of that large chapter returned an internal error; no proof claim relies on it in place of the local derivations.

## Item verdicts

- `def-discrete-convolutional-layer` — sound definition; cross-correlation versus mathematical convolution and boundary conventions are explicit.
- `def-group-action-on-feature-maps` — sound definition and direct action proof.
- `def-p4-p4m-lattice-symmetry-groups` — construction and proof sound; terminology corrected as above.
- `def-equivariant-neural-layer` — sound generic intertwining definition; input and output actions may differ.
- `def-group-convolution` — sound formulas, domains, channel order, and summability conditions.
- `def-pointwise-nonlinearity-and-pooling-on-group-features` — sound definitions and well-definedness proof.
- `thm-group-convolution-equivariance` — sound under its stated action and summability hypotheses; diagram correct.
- `ex-translation-equivariance-and-zero-padding` — sound full-lattice identity and explicit boundary counterexample.
- `ex-p4-and-p4m-orientation-indexed-features` — computations sound; prerequisite terminology corrected as above.
- `ex-nonstrided-subgroup-and-coset-pooling` — sound subgroup and left-coset calculations.

No other claim, proof step, witness, citation, statement-link placement, or diagram defect was confirmed. No uneditable defect remains.

## Page verdicts

- `convolution-and-group-equivariance` — passes: item inventory and required page match the manifest; body is empty and compact layout is preserved.
- `convolution-and-group-equivariance-examples` — passes: example inventory and A-page prerequisite match the manifest; body is empty and compact layout is preserved.

## Repair checks and blocker

For both changed items, reflow reported `unchanged`; precheck passed with zero failures. The required final layout check was run once for both changed paths: `proof-layout: 2 items, 6 steps, 0 defects`.

No batch-33 review blocker remains. At inspection, the run was active and status reported a separate `3a-split` blocker (`split-8 failed 3x`, covers batch 8); it is outside this assignment. The missing rendered evidence bundle and the direct-open limitation for the Goodfellow chapter are the only coverage limitations recorded above.
