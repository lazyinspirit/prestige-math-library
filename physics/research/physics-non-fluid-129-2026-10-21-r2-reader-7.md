# Step 3a Reader Report — Batch 7

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-7`)  
Scope: batch `7`

## Inventory opened

Assigned pages:

- `emx-radiation-multipoles` — `library/classical-electromagnetism/emx-radiation-multipoles.md`
- `emx-radiation-multipoles-examples` — `library/classical-electromagnetism/emx-radiation-multipoles-examples.md`

Assigned items, reviewed in their current source form:

- `pthm-emx-retarded-history-localization`
- `def-emx-radiation-data`
- `pthm-emx-transverse-radiation-data`
- `pthm-emx-controlled-dipole-power`
- `ex-emx-retarded-versus-fixed-time`
- `ex-emx-dipole-dark-direction`

The A page declares six page prerequisites: `em-electrostatic-multipoles`, `em-primitives-and-postulates`, `em-retarded-fields-and-radiation`, `finite-counting-and-binomial-coefficients`, `banach-valued-integration-and-the-radon-nikodym-property`, and `analytic-semigroups-and-linear-evolution-equations`. I opened each page in its local or read-only mathematical-source location. The B page requires the A page. The current plan, batch manifest, and A-page frontmatter agree on this six-page list.

I checked the exact Definition or Statement interfaces of all suppliers declared in the six assigned item carriers. These include the physical definitions and postulates for the EM laboratory fields, SI conventions, sources, potentials, vacuum Maxwell system, retarded selection, energy flux, and Lorenz-gauge wave formulation; the in-flight batch-7 suppliers in the radiation chain; and the mathematical dependencies for integration and measure, polar coordinates, differentiation, vector estimates, Taylor's formula, finite sums, cutoffs, and smooth compactly supported examples. I read the full proof bodies of the retarded-wave-kernel lemma, Lorenz-gauge wave-form theorem, parameter-integral lemma, test-function cutoff lemma, sphere-moment lemma, wave Cauchy theorem used by the retarded kernel, and the smooth-bump lemma.

## Mathematical review

- `pthm-emx-retarded-history-localization`: The source hypotheses give smoothness, continuity, and a fixed spatial support ball. Localizing time near an arbitrary observation event makes the compact-history retarded-kernel supplier applicable there; the (1/|x-y|) singularity is locally integrable in three dimensions. The same localization justifies differentiation and yields the Lorenz condition from the assumed continuity equation. The Lorenz-gauge wave-form result then gives the sourced Maxwell identities. The proof does not assume compact temporal support or a global bound on the source history.
- `def-emx-radiation-data`: This is a conditional definition of the uniform limits of (rE(rn,u+r/c)) and (rB(rn,u+r/c)), on (S^2) and compact retarded-time intervals. It correctly asserts neither existence nor an empirical result; the scaled units are consistent.
- `pthm-emx-transverse-radiation-data`: The retarded-time geometry gives the stated uniform bounds for (r\ge2a); the source-time shifts remain inside (K^\sharp). Differentiation under the integral and the continuity equation produce the transverse leading fields. The uniform (O(r^{-2})) remainders justify the radiation limits and the finite-sphere flux limit, with coefficient μ₀/(16π²c).
- `pthm-emx-controlled-dipole-power`: Taylor's theorem for the finite retarded-current moment gives the stated Ρₙ(u) derivative remainder. The continuity equation and integration by parts establish (p''(u)=\int_{B_a}J_t(y,u)\,dy). Propagating the absolute vector error through the transverse field and sphere power formula gives the displayed bound; no infinite Taylor-series convergence or relative estimate at a node is claimed.
- `ex-emx-dipole-dark-direction`: The compact smooth source is conserved. Its dipole acceleration is (2F e_3), while the exact shifted-current moment has (V_1(e_3,u)=6F/c>0), with (F>0). Thus the dipole amplitude vanishes on the axis while the exact radiation amplitude does not.
- `ex-emx-retarded-versus-fixed-time`: The compact pulse is conserved and produces (V(e_1,u)=2F e_3), hence a nonzero fixed-retarded-time radiation limit. At any fixed observation time, all retarded source times are before the compact pulse for sufficiently large radius, so both fields vanish there. These are distinct paths to infinity.

All numbered proof steps have the required trailing justification tags and paragraph separation. No TikZ, tikzcd, or CD diagrams occur in the assigned items or pages. The mathematical deductions are conditional model results; the batch makes no experimental or statistical claim.

## Source review

I checked the cited locators against the referenced materials:

- Niklas Beisert, *Elektrodynamik*, ETH Zürich, §11.2 (retarded Green kernel and potentials) and §11.3 (radiation region, transverse far fields, multipole expansion, dipole angular node).
- Richard Fitzpatrick, *Classical Electromagnetism*, nodes 50 (retarded potentials), 52 (retarded fields and radiation-zone terms), and 94 (Hertzian dipole, short-source condition, axial node, and power).
- Steven Errede, UIUC Physics 436 Lecture Notes 14.5, printed pp. 6–8 (PDF pp. 5–7), for the E1 dipole angular pattern and retarded-time dipole field.

The locally proved results are stronger than the cited harmonic/short-source formulas and are not presented as deductions from those sources. The old batch notes describe a missing-page-prerequisite escalation; it is not present in the current carriers, because the current plan, manifest, and A page include the three mathematical prerequisite pages as well as the three EM pages.

## Edits, defects, verdicts, and blocker

**Edits:** none. I found no confirmed repairable defect in the assigned item or A-page prose. No item contract or verification stamp was changed. Because no content was repaired, I did not run item reflow, precheck, or proof-layout.

**Defects not editable:** none identified. There are no reader findings to route.

| Page | Verdict | Evidence |
|---|---|---|
| `emx-radiation-multipoles` | Pass | The four listed items and six page prerequisites agree with the current plan and manifest. Its body is empty, consistent with the statement-first workflow's frontmatter-only page layout. |
| `emx-radiation-multipoles-examples` | Pass | The two examples are listed, and the page requires the A page. Its body is empty, consistent with the current layout. |

**Blocker:** none.

## Coverage note

I read the six assigned carriers before opening all of their suppliers, so the file-reading order did not strictly follow the required supplier-first sequence. I subsequently checked the exact interfaces of all declared direct suppliers and the relevant proofs noted above before completing the mathematical assessment; I did not re-open the carriers because the instructions require each file to be read once. I did not independently re-audit every transitive proof body underlying the published mathematical suppliers. External-source review covered the cited relevant locators rather than every page of the cited lecture-note volumes. No coverage beyond these limits is claimed.
