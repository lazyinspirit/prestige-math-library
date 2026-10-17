# Step 3a reader report — batch 63

Run: `physics-remaining-80-2026-10-17`  
Scope: `tgr-et02` and `tgr-et02-examples`  
Reviewer role: independent reader

## Review inventory

The batch manifest, current batch 63 proof contracts and cross-batch dependency
record were read as navigation and evidence, not as verdicts. Both assigned
pages and all six assigned items were reviewed independently.

| Carrier | Verdict |
|---|---|
| `library/thermodynamics-and-general-relativity-mathematics/tgr-et02.md` (A page) | Pass. The summary matches the conditional charged-particle results and the separate finite-dimensional entropy-exchange theorem. It claims no physical realization. |
| `library/thermodynamics-and-general-relativity-mathematics/tgr-et02-examples.md` (B page) | Pass. The summary accurately describes the nonzero-period obstruction on a periodic spatial direction. |
| `thm-tgr-finite-entropy-exchange-equilibrium` | Pass. The rank-two constraint map, multiplier equivalence, concavity maximum and strict-concavity uniqueness arguments are sound. Feasibility and the positive energy derivatives are stated; no existence or boundary claim is made. |
| `def-tgr-charged-liouville-data` | Repaired. The charged field and gauge definitions now specify global one-form data and verify their chart transformations. |
| `lem-tgr-charged-liouville-preserves-mass-shell` | Pass. Since $M>0$, the constraint gradient in the fiber is nonzero. The regular-level argument and antisymmetry calculation prove smoothness and tangency on the future shell. No trajectory-existence or measure claim is made. |
| `lem-tgr-gauge-killing-energy` | Pass. The coordinate calculation gives $\iota_\xi F=-d\Psi_\xi$ with the stated sign; metric compatibility and the Killing equation cancel the force contribution in $H_\xi$. Conservation is conditional on a curve satisfying the stated Lorentz equation. Gauge and reference shifts are handled consistently. |
| `thm-tgr-electrochemical-stationarity` | Pass. The transport derivative has the stated quadratic-plus-linear form. The massive-shell rigidity lemma yields the local criterion, and the global compensator plus connectedness yield the constants. The exponent identity is algebraically correct. |
| `ex-tgr-electric-circulation-obstruction` | Pass. The globally defined potential gives an exact stationary field, while $\iota_\xi F$ has nonzero period. The whole-shell stationarity criterion would make a global $\zeta$ have nonzero integral around a closed loop, a contradiction. |

## Supplier review

The current prerequisite page `tgr-et01` and the exact statements used from its
draft suppliers were opened: `def-tgr-stationary-thermal-carriers`,
`lem-tgr-killing-thermal-normalization`, and
`lem-tgr-mass-shell-polynomial-rigidity`. Their hypotheses match the assigned
uses; the normalization proof and massive-shell polynomial argument are
complete. The GR interfaces used by the thermal carrier were checked in
`def-gr-smooth-lorentzian-objects`, `def-gr-killing-field`,
`thm-gr-killing-and-on-shell-matter-identities`, and
`thm-gr-nondegenerate-levi-civita-and-tensor-derivative`. The other exact
mathematical suppliers opened were `def-countable-choice`,
`lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`,
`cor-zero-derivative-implies-constant`,
`cor-zero-total-derivative-on-a-convex-open-set-is-constant`,
`thm-mean-value-inequality-for-total-derivatives`, `cor-mean-value-theorem`,
`def-lorentz-form-and-inertia`,
`def-causal-classification-of-lorentz-vectors`,
`def-time-orientation-and-future-causal-sets`,
`lem-lorentz-form-has-orthonormal-basis`, and
`lem-timelike-cone-has-two-convex-components`.

The item-level sources were checked at the locators relevant to their claims:
[Tong, *Statistical Physics*, §§1.2.2 and 1.4](https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html)
supports the entropy-derivative conventions for temperature and chemical
potential; [Schaich, *Statistical Physics* notes, Unit 6, pp. 80–90](https://davidschaich.net/teaching/2122S_StatPhys/lecture.pdf)
supports the chemical-potential convention. Those sources do not state the
full arbitrary finite-cell multiplier theorem; its proof is local.
[Rueda, Ruffini and Xue, §4](https://arxiv.org/html/1104.4062) and
[Shi et al., §§2–3](https://arxiv.org/pdf/2108.08729) treat narrower charged
fluid equilibrium settings. [Tong, *General Relativity*, §4.3.2](https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html)
derives the uncharged Killing contraction for geodesics, while
[Bogush, Kobialko and Gal’tsov, §II](https://arxiv.org/html/2402.03266)
provides static charged-particle context. These references do not replace the
assigned items’ local proofs or establish their broader conditional claims.
No assigned item reports experimental data or uses an empirical premise.

## Repair and consumer check

The original `def-tgr-charged-liouville-data` named a smooth one-form and used
the coordinate formulas for $dA$ and $\mathcal L_\xi A$ without establishing
that the formulas define global covariant fields. The Definition now specifies
the fiberwise-linear one-form and its covector transformation law, derives the
two-form transformation for $F_{ab}=\partial_aA_b-\partial_bA_a$, and checks
the Lie-derivative transformation using the inverse-Jacobian identity and
commutation of mixed partials. The direct dependency list is unchanged because
these checks are now supplied in the Definition itself, so the assigned
manifest dependency graph remains current.

The four batch 63 proof-contract citations that quote this Definition were
updated: `lem-tgr-charged-liouville-preserves-mass-shell`,
`lem-tgr-gauge-killing-energy`, `thm-tgr-electrochemical-stationarity`, and
`ex-tgr-electric-circulation-obstruction`. No `verification.judge` record was
present on the repaired definition. Its assigned consumers and the current-run
consumers `post-tgr-equilibrium-particle-exchange`,
`pthm-tgr-tolman-klein`, and `ex-tgr-independent-redshifted-cells` were
reviewed; their uses remain valid and need no content repair. No page prose was
changed. The batch 67 contract excerpt for this supplier still matches the
unchanged geometry paragraph; batch 66 has no contract excerpt for it.

Checks after the final item edit:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/def-tgr-charged-liouville-data.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-tgr-charged-liouville-data.md` — 0 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/def-tgr-charged-liouville-data.md` — 1 item, 0 steps, 0 defects.
- The four refreshed dependency excerpts match the current Definition text.

## Uneditable findings and blockers

No confirmed or suspected defect remains outside the authorized repair. No
blocker remains.

## Coverage note

All six assigned items, both assigned pages, the relevant TGR-ET01 suppliers,
and current-run consumers of the repaired Definition were inspected. I did not
audit every unrelated transitive prerequisite in the published GR geometry
dependency graph. The assigned conclusions are mathematical deductions under
their stated assumptions; no empirical certainty or physical realization is
claimed.
