# Step 3a reader report — batch 6

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-6`)  
Date: 2026-10-22

## Scope and opened inventory

Reviewed the assigned manifest `research/physics-non-fluid-129-2026-10-21-r2-batch-6.pages.json`, the batch-6 reader brief, proof contracts, notes, coverage record and cross-batch dependency record. The two assigned page carriers are frontmatter-only, as required by the current statement-first workflow:

| Page | Carrier | Inventory and reader verdict |
|---|---|---|
| `emx-anisotropic-reciprocal-optics` | `library/classical-electromagnetism/emx-anisotropic-reciprocal-optics.md` | Draft A page; lists the four assigned A items and no examples. Its listed inventory matches the manifest. No page defect found. |
| `emx-anisotropic-reciprocal-optics-examples` | `library/classical-electromagnetism/emx-anisotropic-reciprocal-optics-examples.md` | Draft B page; lists the two assigned examples. Its listed inventory matches the manifest. No page defect found. |

Opened all six assigned item carriers in dependency order:

1. `def-emx-anisotropic-plane-symbol` — draft physics definition.
2. `def-emx-reciprocal-phasor-medium` — draft physics definition.
3. `pthm-emx-uniaxial-dispersion` — draft physics theorem.
4. `pthm-emx-lorentz-reciprocity` — draft physics theorem.
5. `ex-emx-extraordinary-longitudinal-e` — draft physics example.
6. `ex-emx-reciprocity-not-time-reversal` — draft physics example.

Also opened the relevant suppliers and page contexts: `post-em-material-closure`, `pthm-em-macroscopic-maxwell`, `def-em-plane-wave-definition`, `def-em-si-conventions`, `def-countable-choice`, `lem-the-divergence-and-curl-of-a-cross-product`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `post-emx-lorentz-medium`, `pthm-em-causal-dispersive-response`, and the current batch-5 `pthm-emx-lorentz-susceptibility`. The assigned pages' prerequisite pages `em-material-response`, `em-vacuum-waves-and-polarization`, `em-wave-interfaces-and-conductors`, and `emx-passive-dispersive-materials` were opened. The latter page's Lorentz-susceptibility item is an in-run dependency; I checked the exact harmonic-response and pointwise-loss clauses used by the assigned example.

The imported mathematical suppliers were confirmed in `research/math-imports.json` and left untouched.

## Findings and edit

### Repaired: `pthm-emx-uniaxial-dispersion`

In proof step 1.2, the proof showed that the extraordinary \(xz\) block was singular and hence had a nonzero kernel, but did not establish the statement's one-dimensional polarization space away from the intersection. I added the missing rank argument: on the ordinary sheet away from an intersection, the \(xz\) block is invertible; on the extraordinary sheet away from an intersection, the middle coefficient is nonzero and the singular \(xz\) block is nonzero, so its rank is one. If \(k_xk_z\ne0\), its off-diagonal entry is nonzero; on either coordinate axis its other diagonal entry is \(\omega^2\varepsilon_\parallel\) or \(\omega^2\varepsilon_\perp\), respectively, both positive.

Updated the corresponding `step 1.2` derivation claim in `research/physics-non-fluid-129-2026-10-21-r2-batch-6.proof-contracts.json`. The item had no `verification.judge` record to remove. Validation after the edit: reflow reported the file unchanged; precheck passed; proof-layout reported 1 item, 3 steps, 0 defects.

### Other assigned items

- `def-emx-anisotropic-plane-symbol`: the \(e^{-i\omega t}\) convention gives \(k\times e=\omega b\) and \(k\times h=-\omega d\); substitution yields the stated symbol and \(k\cdot d=0\). Units and the restricted real, positive lossless branch are explicit. No defect found.
- `def-emx-reciprocal-phasor-medium`: the fixed-frequency domain, coefficient regularity, phasor-field regularity, SI units, unconjugated products and pointwise transpose-symmetry convention are explicit. The definition does not infer passivity or losslessness. No defect found.
- `pthm-emx-lorentz-reciprocity`: the proof extends the real divergence-of-cross-product identity to complex-bilinear fields, cancels the constitutive terms by ordinary transpose symmetry, and applies the bounded-domain divergence theorem separately to real and imaginary parts. Its \(\Omega\), regularity, source, coefficient and `AC_omega` hypotheses match the suppliers. No defect found.
- `ex-emx-extraordinary-longitudinal-e`: the constructed \(d\) is transverse while \(e=\varepsilon^{-1}d\) has the stated nonzero longitudinal component; step 2.1 verifies the symbol equation using the extraordinary dispersion relation. No defect found.
- `ex-emx-reciprocity-not-time-reversal`: for \(\gamma,\omega>0\) the Lorentz denominator is strictly positive and \(\varepsilon\) has positive imaginary part. The unconjugated reciprocity condition is kept distinct from the conjugation used in the cycle average; the computed average has the stated positive sign. This is a conditional model calculation, not an empirical observation or a time-reversal claim. No defect found.

The sole TikZ diagram, in `pthm-emx-uniaxial-dispersion`, matches the normalized circle \(u_x^2+u_z^2=1\) and ellipse \(u_x^2/2+u_z^2=1\), with the two optic-axis intersections shown. No diagram edits were needed.

No assigned-page or other assigned-item defect remains unedited. No item Statement/Definition interface changed, so no consumer repair was triggered. No blocker remains.

## Source and coverage limits

Checked the cited source passages relevant to the local claims:

- Jin Au Kong, [*Electromagnetic Wave Theory*](https://piers.org/piers/files/BOOK_ElectromagneticWaveTheory_by_JINAUKONG_FreeRelease2021.pdf), §§3.2.E and 3.3.E (printed pp. 299–300, 315–322), including source-indexed passages for equations (3.2.15)–(3.2.26), (3.3.61)–(3.3.71), and the \(k\)-surface equations (3.3.72)–(3.3.73). These support the transpose-reciprocity and uniaxial-polarization context. The cited §3.2.A constitutive passage (printed pp. 292–294) was not independently retrieved this session; Chew §7.1.2 supplies corroborating anisotropic-tensor context. Direct PDF opening was unavailable in this session, and the local proofs do not depend on the source derivations.
- Weng Cho Chew, [*Electromagnetic Field Theory*](https://engineering.purdue.edu/wcchew/ece604f23/EMFTEDX032124R.pdf), §7.1.2 (printed pp. 83–84) and Chapter 12, §§12.1–12.1.1 and 12.2 (printed pp. 146–150). The retrieved passage gives the anisotropic constitutive model and the bilinear reciprocity derivation under transpose-symmetric tensors, including lossy media. Chew uses the opposite \(e^{+j\omega t}\) convention; the assigned items state and use their own convention.
- Niklas Beisert, [*Elektrodynamik*](https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf), §12.1 (printed pp. 12.1–12.2; PDF pp. 142–143), checked for the stated Maxwell and scalar dispersive-response context only. Its nearby group-velocity assertion is explicitly outside the assigned claims and is not used.
- MIT OpenCourseWare [6.007 Lecture 22](https://ocw.mit.edu/courses/6-007-electromagnetic-energy-from-motors-to-lasers-spring-2011/6434fa7aae0266ed6d40109d70c724f9_MIT6_007S11_lec22.pdf), slides 9–15, checked for the Lorentz-oscillator response context. Its phasor sign is opposite to the local convention; the assigned result follows the local \(e^{-i\omega t}\) convention and the current Lorentz-susceptibility supplier.

The direct physical and mathematical suppliers needed by the assigned arguments were checked at their exact relevant statements and uses. This review did not recursively re-audit every prerequisite behind those suppliers or the full source records for unrelated claims. No empirical measurements or statistical conclusions are used in batch 6.
