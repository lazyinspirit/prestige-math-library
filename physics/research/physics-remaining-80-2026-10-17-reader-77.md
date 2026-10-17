# Step 3a reader report — batch 77

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: batch `77` only

## Opened inventory

Assigned pages:

- `library/thermodynamics-and-general-relativity/tgr-phs01.md`
- `library/thermodynamics-and-general-relativity/tgr-phs01-examples.md`

Directly required page summaries opened for context:

- `library/einstein-maxwell-models/emg-s01.md`
- `library/thermodynamics-and-general-relativity/tgr-i01.md`
- `library/thermodynamics-and-general-relativity-mathematics/tgr-mhs01.md`

Assigned items, reviewed in supplier order:

1. `post-tgr-smooth-horizon-energy-condition`
2. `pthm-tgr-restricted-classical-area`
3. `pthm-tgr-kn-family-mechanics`
4. `texp-tgr-classical-schwarzschild-work`

The assigned batch manifest and its proof-contract record were used as navigation evidence, then checked against the current item and page prose. I also opened the direct suppliers and the further supplier claims used in the checked arguments. These included the Lorentzian, connection, null-screen, and area-theorem items; the Einstein–Maxwell equations, SI and geometric parameter definitions, KN data and extension, horizon formulas, and first-law proposition; the Schwarzschild horizon lemma; and the Maxwell-current identity. The exact KN rational-calculus algorithm, correctness and termination claims, certificate, and checker were reviewed for the component calculation used by the KN supplier theorem.

## Review, edits, and evidence

- `post-tgr-smooth-horizon-energy-condition`: the postulate adopts the equation-based Einstein–Maxwell law and a null energy condition for the specified generator. It requires a complete named matter-model instance and admitted configuration, states the current and stress maps, and does not present either physical assumption as a derivation or observation.
- `pthm-tgr-restricted-classical-area`: the null contraction of the Einstein equation removes both the cosmological and scalar-curvature terms because the generator is null. The adopted total-stress null energy condition then supplies the null-convergence premise of `thm-tgr-smooth-null-area`. The item matches that supplier's affine-flow, persistent compact-cut, and countable-choice hypotheses. Its conclusion is explicitly conditional and makes no general event-horizon or entropy claim.
- `pthm-tgr-kn-family-mechanics`: the physical SI conversion agrees with the mathematical KN family identities. In particular, the mass and angular-momentum parameter conversions, the electric-flux conversion, the factors of `c` in angular rate and acceleration surface gravity, and the voltage factor `c/alpha` yield the stated differential and Smarr identities. The zero-spin, zero-charge point is supplied by the separate Schwarzschild horizon lemma; extremality is excluded.
- `texp-tgr-classical-schwarzschild-work`: the explicit area and acceleration-unit surface-gravity formulas follow from the Schwarzschild supplier. Differentiating the area on `m_*>0` gives the stated work identity. It is correctly limited to a stationary-family calculation, with no process, observation, temperature, or entropy conclusion.

The exact rational KN certificate checker was run with:

`python3 research/physics-remaining-80-2026-10-17-batch-21-verify-certificate.py`

It returned `pass` for 243 exact polynomial equalities, including 64 connection entries, 16 ordered Ricci entries, 4 Maxwell residuals, and 16 Einstein residuals. The check uses exact rational coefficients and is limited to the recorded rational chart domain; it does not establish physical applicability.

No assigned item or page prose was edited. There are no repaired findings, so no proof contract, judge record, reflow, precheck, or proof-layout file selection required updating.

## Page verdicts

| Page | Verdict | Evidence |
|---|---|---|
| `tgr-phs01` | Pass | The summary matches the adopted smooth model, restricted area deduction, and SI family identities in the listed items. Its parameter-map diagram is explicitly non-load-bearing. |
| `tgr-phs01-examples` | Pass | The summary accurately describes the zero-spin, zero-charge special case and its conditional identity, without presenting a process or observation. |

## Defects not edited

None confirmed in the assigned pages or items, or in the supplier claims opened for these conclusions. No uneditable finding is returned.

## Blocker and coverage limit

There was no file-access or ownership blocker. The four assigned items have a recursively declared `deps`/`justified_by` closure of 1,930 item IDs; I did not independently audit every ancestor proof in that full closure or every transitive prerequisite page. I checked the assigned arguments against their direct suppliers and the further mathematical statements used in the reasoning, but deeper background proofs remain outside this review's coverage. In the KN calculation branch, I first opened the calculation item and then its algorithm and correctness suppliers; I reviewed those interfaces afterward and independently ran the exact certificate checker.
