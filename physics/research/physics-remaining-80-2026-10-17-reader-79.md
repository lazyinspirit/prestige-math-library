# Step 3a independent reader report — batch 79

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Scope: batch `79`

## Inventory opened

Assigned pages:

- `library/thermodynamics-and-general-relativity/tgr-phs03.md` (A page)
- `library/thermodynamics-and-general-relativity/tgr-phs03-examples.md` (B page)

Page prerequisites opened for context:

- `library/thermodynamics-and-general-relativity/tgr-phs01.md`
- `library/thermodynamics-and-general-relativity/tgr-phs02.md`

Assigned items, read in dependency order:

1. `items/post-tgr-thermodynamic-horizon-identification.md`
2. `items/pthm-tgr-area-entropy-calibration.md`
3. `items/texp-tgr-horizon-entropy-difference.md`

Dependency items opened to check the claims and calculations:

- `items/def-tgr-framework-units.md`
- `items/def-countable-choice.md`
- `items/pthm-tgr-kn-family-mechanics.md`
- `items/prop-tgr-kn-first-law-smarr.md`
- `items/pthm-tgr-reduced-horizon-temperature.md`
- `items/post-tgr-exponential-current-and-spectral-thermometer.md`
- `items/lem-tgr-thermal-contour-spectrum.md`
- `items/lem-tgr-exponential-current.md`
- `items/lem-tgr-first-law-calibration-freedom.md`
- `items/thm-chain-rule-for-total-derivatives.md`
- `items/cor-mean-value-theorem.md`
- `items/def-tgr-horizon-screen-family.md`
- `items/prop-emg-xs-kn-horizon-data.md`
- `items/pthm-emg-xs-kn-horizons.md`
- `items/lem-tgr-schwarzschild-horizon-data.md`
- `items/thm-emg-xs-kn-extension.md`

I also inspected the assigned batch manifest and proof contracts as navigation and review evidence, not as verdicts. Source passages checked were Wald, *The Thermodynamics of Black Holes*, §2, PDF pp. 6–10 and §3, PDF pp. 10–16 (`https://arxiv.org/pdf/gr-qc/9912119`), and Benetti Genolini, *Introduction to Black Hole Thermodynamics*, §1.3, PDF pp. 14–16 and §2.1, PDF pp. 18–20 (`https://arxiv.org/pdf/2512.24929v1`). These passages accurately provide context for the stationary mechanical law, the additional thermodynamic identification, and an initially unspecified area-entropy coefficient; they do not prove the local adopted assumptions or the reduced spectral model.

## Review and verdicts

### `tgr-phs03` — pass

The page summary accurately distinguishes the selected stationary-family identity, the additional reversible heat/entropy assumption, and the matched reduced-model reference temperature. It does not present the resulting area coefficient as a general Hawking or KMS theorem, measurement, microstate count, or fixed entropy zero.

The postulate defines its parameter domain, SI quantities, work-subtracted one-form, (C^1) state function, member-specific horizon generator and geometric surface-gravity coefficient, and the member-wise reduced branch matching. The reduced-temperature supplier's assumptions include a positive gap, positive rate parameter, and its adopted two-state rate equation. The postulate labels the heat/entropy relation as an additional physical assumption and does not claim that geometry or the reduced rate model proves it.

For the theorem, the SI family differential cancels the angular and electric work terms in the postulate's definition of \(\delta Q_{\rm rev}\). The rate-ratio calculation gives \(T_K=\hbar c\kappa_{\rm geom}/(2\pi k_B)>0\), so division yields \(dS_H=(k_Bc^3/(4G_N\hbar))dA_H\). The stated coefficient has the required entropy-per-area units. The strict family \(m>\sqrt{a^2+q^2}\) is convex: the triangle inequality and the strict endpoint inequalities show each line segment between admitted points remains in the domain. The chain rule and mean value theorem then imply one constant offset on the whole family. No inference fixes an absolute entropy zero.

The exact spectrum ratio is supported by the local contour-spectrum proof and the tested-current covariance construction; the reduced-temperature theorem solves the specified two-state rate equation and expressly limits the result to the adopted effective model. These are conditional mathematical/model deductions, not empirical observations.

### `tgr-phs03-examples` — pass

The page summary accurately presents the thought experiment as a conditional two-state calculation under the area theorem and its assumptions. For positive SI masses, setting spin and charge to zero gives \(a=q=0\), \(r_+=2G_Nm_*/c^2\), and \(A_H=16\pi G_N^2m_*^2/c^4\). Substitution into the calibrated area formula gives the displayed coefficient \(4\pi k_BG_N/(\hbar c)\) times the squared-mass difference. The units reduce to entropy, equal masses give zero, and the common entropy offset cancels. The item does not report a measurement or claim a microscopic state count.

## Edits and uneditable defects

No item or page prose was edited. I found no confirmed defect in the assigned carriers or in the inspected dependency interfaces that would require an uneditable finding. No formatter or precheck was run because no item was changed.

## Blocker and coverage limit

No blocker prevents the scoped batch verdicts. I did not independently re-audit every transitive mathematical foundation in the full dependency closure, including the complete QFT and GR prerequisite chains. The review checked the assigned arguments against the exact direct interfaces and the key local spectral, family-identity, and horizon-data proofs listed above; it does not certify that entire transitive foundation.
