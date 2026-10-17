# Step 3a reader report — batch 52

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Scope: batch `52`

## Opened inventory

Assigned pages:

- `tgr-mi03` — `library/thermodynamics-and-general-relativity-mathematics/tgr-mi03.md`
- `tgr-mi03-examples` — `library/thermodynamics-and-general-relativity-mathematics/tgr-mi03-examples.md`

Assigned items, reviewed in supplier-before-consumer order:

- `lem-tgr-killing-energy-normalization`
- `cor-tgr-killing-no-work-support`
- `ex-tgr-reference-wall-normalization`

The batch-52 manifest and proof contracts were read. For the finite-slab prerequisite I also opened the dependency page `tgr-mi01` and its mathematical inputs:

- Current-run batch 50: `lem-tgr-coordinate-boxes-are-compact-jordan`, `lem-tgr-c1-current-density-divergence`, `def-tgr-spacelike-current-slab`, `lem-tgr-normal-flux-coordinate-density`, and `thm-tgr-finite-current-production-balance`.
- Published geometry and tensor suppliers: `def-gr-smooth-lorentzian-objects`, `def-gr-inverse-metric-and-musical-isomorphisms`, `def-gr-tensor-fields-and-components`, `def-gr-killing-field`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `thm-gr-killing-and-on-shell-matter-identities`, `def-countable-choice`, `def-oriented-smooth-manifold-and-oriented-chart`, and `def-gr-metric-volume-form-and-current-flux`.
- Published density and integration suppliers: `lem-gr-metric-divergence-and-density-formula`, `def-riemann-integral-over-a-jordan-set`, `def-multidimensional-rectangle-and-volume`, `def-jordan-inner-and-outer-content`, `thm-jordan-boundary-criterion`, `def-null-and-content-zero-in-rn`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `thm-lebesgue-criterion-in-rn`, `def-multidimensional-darboux-sums`, `def-multidimensional-darboux-integral`, `thm-ftc-second-part`, and `thm-jordan-fubini-by-sections`.

For the lemma's changed interface, I traced its current-run dependency closure: 76 item consumers reach it. The two assigned consumers are above. The only other direct item consumer is batch-54 `def-tgr-framework-units`; the remaining 73 item consumers reach the lemma through that definition. I read the definition and its page `tgr-i01` (`library/thermodynamics-and-general-relativity/tgr-i01.md`). The definition already states the same length-coordinate, temperature, covector-unit, and horizon conventions; its interface is unchanged. `tgr-i01` remains accurate about the conditional draft MI01 balance and finite-slab flux requirement.

## Repairs

- In `lem-tgr-killing-energy-normalization`, the opening tuple used an undefined field name `V` for the time orientation; the cited definition names the smooth timelike field `N`. The statement now identifies `N` and states the unique torsion-free, metric-compatible connection supplied by its dependency. The SI clause now gives the domains/types of the pointwise covectors, the flow-parameter and unit conventions, and the supplied constant's unit. The static temperature and horizon coefficient are given as functions with explicit domains. These changes clarify the existing claims without changing their hypotheses or conclusions.
- In `cor-tgr-killing-no-work-support`, the title described an undefined “external support” and could suggest unconditional endpoint-charge conservation. It now names the proved local conclusion: zero Killing contraction makes the sourced current divergence-free. The finite balance and its zero-net-side-flux qualification remain in the statement.
- In `ex-tgr-reference-wall-normalization`, the statement now explicitly inherits the lemma's SI convention, identifies the reference lapse as dimensionless, gives the domains and types of the supplied temperature and momentum fields, and states the pointwise particle-energy pairing. The proof contract records the exact SI supplier clause.
- Updated the batch-52 proof contract for the changed local claims; no changed item had a `verification.judge` record to remove.

The title and statement claims on the assigned pages required no edits.

## Source and proof review

The local current-divergence argument follows from the stated symmetry, Killing equation, and product rule. The finite-slab theorem's endpoint, side-face, and production terms match the exact open-rectangle/compact-closure interface of `def-tgr-spacelike-current-slab`; the FTC and Jordan-Fubini hypotheses apply to the continuous densities on the compact coordinate closure. The block determinant calculation in the normal-flux lemma gives the stated lapse-density identity. The explicit flat-current examples in the balance theorem verify the signed outward-flux convention and the nonimplication claims.

I checked the cited authoritative passages:

- Reall, *Part III General Relativity*, §5.3, PDF pp. 56–57: Killing equation and the symmetric conserved-current calculation; §8.7, PDF pp. 109–110: pullback integration and Stokes flux. [Source](https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf)
- Tong, *General Relativity*, §4.5.5, “Conserved Energy from a Killing Vector”: current construction, divergence, hypersurface charge, and the side-flux qualification. [Source](https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html)
- Carroll, *Lecture Notes on General Relativity*, ch. 5, equations (5.41)–(5.43), printed pp. 140–141: the Lie-derivative and covariant Killing equations and the geodesic contraction. [Source](https://arxiv.org/pdf/gr-qc/9712019)

These passages support the cited standard identities; the finite rectangular (C^1) balance and the normalization calculations are proved locally. No experiment, measurement, or statistical inference is claimed in this batch.

## Page verdicts

- `tgr-mi03`: pass after the item clarification. Its summary accurately keeps the MI01 balance conditional and draft, distinguishes matter charge from general gravitational energy, and retains the net-side-flux qualification.
- `tgr-mi03-examples`: pass. Its summary accurately limits the calculation to algebraic reference normalization and makes no equilibrium claim.
- Dependency page `tgr-mi01`: its balance and boundary-flux summary agree with the opened theorem. No edit was in scope or needed.
- Downstream page `tgr-i01`: its conventions and proof-status summary agree with the unchanged batch-54 definition and the draft MI01 balance supplier.

## Unedited defects and blockers

None found in the assigned pages or items. No dependency defect requiring an outside finding was confirmed. No blocker remains.

Coverage limitation: I traced the complete current-run item closure and checked the shared batch-54 interface through which the indirect consumers reach the lemma; I did not independently re-audit the full proofs of those 73 indirect consumers because their supplier definition and the relevant lemma conclusions are unchanged.

Scoped validation after the final edits:

- `reflow.mts`: unchanged for all three changed items.
- `precheck.mts`: pass for all three changed items.
- `proof-layout.mjs items/lem-tgr-killing-energy-normalization.md items/cor-tgr-killing-no-work-support.md items/ex-tgr-reference-wall-normalization.md`: 3 items, 15 steps, 0 defects.
