# Step 3a reader report — batch 3

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Scope: batch `3` (`fd-f01` and `fd-f01-examples`)

## Opened inventory

Assigned pages, both frontmatter-only with `page_layout: compact-v1`:

- `fd-f01` — five A-page items, no examples.
- `fd-f01-examples` — four B-page examples.

Assigned items, read in dependency order:

- `def-fd-quantity-and-frame-conventions`
- `lem-fd-c1-domain-jordan-integrals`
- `lem-fd-continuous-localization-on-c1-domains`
- `post-fd-continuum-balances`
- `pthm-fd-smooth-material-kinematics`
- `ex-fd-material-dilation`
- `cex-fd-incompressibility-not-homogeneity`
- `cex-fd-unsteady-pathlines-streamlines`
- `cex-fd-spin-sensitive-stress`

The cross-batch prerequisite page `fd-mf01` was opened at
`library/fluid-dynamics-mathematics/fd-mf01.md`; its listed mathematical motion,
transport, and observer items were reviewed as suppliers. The other opened
supplier items needed for the reviewed arguments were:

- Draft physics/mathematics suppliers: `def-fd-smooth-motion`,
  `lem-fd-transport-and-density`, `lem-fd-observer-calculus`.
- Mathematical suppliers: `thm-chain-rule-for-total-derivatives`,
  `thm-euclidean-inverse-function-theorem`,
  `cor-determinant-is-a-polynomial-in-the-matrix-entries`,
  `def-null-and-content-zero-in-rn`, `thm-heine-borel-rn`,
  `thm-graphs-of-continuous-functions-have-content-zero`,
  `thm-jordan-content-and-indicator-integrability`,
  `thm-lebesgue-criterion-in-rn`, `thm-jordan-boundary-criterion`,
  `thm-compactness-under-continuous-maps`,
  `thm-multidimensional-integral-properties`,
  `def-riemann-integral-over-a-jordan-set`,
  `lem-jordan-set-integral-well-defined`,
  `thm-continuous-functions-on-compact-jordan-sets-are-integrable`,
  `thm-change-of-variables-for-compact-jordan-sets`,
  `thm-injective-c-one-images-of-compact-jordan-sets-are-jordan`,
  `thm-mean-value-inequality-for-total-derivatives`,
  `cor-zero-total-derivative-on-a-convex-open-set-is-constant`,
  `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, and
  `def-countable-choice`.

## Review and edits

The mathematical definitions specify Newtonian spacetime, inertial charts,
worldlines, material motions, Eulerian velocity and material derivative, rigid
observer changes, tensor conventions, quantities, and SI units. The postulate
identifies the continuum balances and their smooth positive-density scope as
adopted model assumptions. The density theorem follows from the stated mass
balance, the transport/Jacobian identities, the open-to-compact Jordan bridge,
and localization of continuous residuals. The dilation example keeps its
Gibbs identity and Newtonian/Fourier closure as explicit assumptions and derives
the nonnegative residual conditionally. The three witnesses have explicit
domains and calculations; none asserts empirical fluid behavior.

Two repair groups were made within batch 3:

| Item(s) | Repair and evidence |
|---|---|
| `lem-fd-continuous-localization-on-c1-domains` | Step 1.1 now chooses a separate radial chart at each sphere point before representing the ball boundary as a local graph. This removes the ambiguity in the earlier single-rotation wording; in coordinates centered at the ball centre with axis through the selected point, the local graph is $z=\sqrt{r^2-|y|^2}$. The proof contract derivation for step 1.1 was updated to match. |
| `def-fd-quantity-and-frame-conventions`, `post-fd-continuum-balances`, `pthm-fd-smooth-material-kinematics`, `ex-fd-material-dilation`, `cex-fd-spin-sensitive-stress` | Removed stale sentences saying current Step-1 readiness records for `def-fd-smooth-motion`, `lem-fd-transport-and-density`, or `lem-fd-observer-calculus` were missing. The current run records at `research/fluid-dynamics-all-47-2026-10-23-step1-def-fd-smooth-motion.json`, `research/fluid-dynamics-all-47-2026-10-23-step1-lem-fd-transport-and-density.json`, and `research/fluid-dynamics-all-47-2026-10-23-step1-lem-fd-observer-calculus.json` each say `ready`. The wording now preserves their draft proof status and the relevant conditional premise roles; readiness is not represented as proof acceptance. The proof arguments and supplier citations were unchanged. |

No `verification.judge` record was present on any changed item. The stale
readiness prose did not alter a proof derivation or its supplier quote, so no
other proof-contract entries required change. The current contract change is the
step 1.1 derivation update noted above.

Scoped repair checks:

- `reflow.mts`: ran on all six changed items; all reported unchanged.
- `precheck.mts`: all changed items passed; the definition produced 0 proof
  items to check, and the postulate passed nonproof-structure validation.
- `proof-layout.mjs`: 6 items, 18 steps, 0 defects.

The assigned pages contain no TikZ/tikzcd diagrams. They require no page edits;
their Markdown bodies remain empty.

## Defects not editable in this assignment

Three published mathematical dependencies reached by the assigned item
`lem-fd-c1-domain-jordan-integrals` contain hyperlinks inside a complete
Definition or Statement section, contrary to the uninterrupted-statement rule.
They are recorded in
`research/fluid-dynamics-all-47-2026-10-23-reader-findings-3.json`:

- `def-null-and-content-zero-in-rn`, `## Definition`, line 33: inline
  `[[def-series]]`, `[[def-finite-sum]]`, and related supplier links.
- `def-riemann-integral-over-a-jordan-set`, `## Definition`, lines 30–37:
  inline links to the boundedness/content definitions, well-definedness lemma,
  and indicator-integrability theorem.
- `thm-compactness-under-continuous-maps`, `## Statement`, lines 40–57:
  inline links interrupt the formulation and its three claims.

All three are published suppliers and read-only here. Their exact dependency
consumer, location, defect class, evidence, and nonfatal severity are in the
findings JSON. No defect was found in the current statements or proofs of the
other assigned items or the draft suppliers needed for their uses.

## Page verdicts

- `fd-f01`: no page-local inventory, layout, or summary defect. Its five
  assigned items were reviewed; the three read-only dependency editorial
  findings above remain in its mathematical prerequisite closure.
- `fd-f01-examples`: no page-local inventory, layout, or summary defect. Its
  four examples were reviewed; no fatal defect was found in their conditional
  calculations or counterexample witnesses.

## Source review and coverage limit

Relevant source passages were checked against these exact locations:

- Ain A. Sonin, *Fundamental Laws of Motion for Particles, Material Volumes,
  and Control Volumes*, §§1.1–1.3, especially the finite-material-volume laws:
  <https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/d11fcb4ad68d875ce88a12c18c263932_MIT2_25F13_Fundam_Law-Son.pdf>.
- Andrew Hazel, *MATH45061 Continuum Mechanics*, Chapter 3 §§3.2–3.4 (continuum
  hypothesis, traction, Cauchy stress and momentum) and Chapter 4 §§4.1–4.5
  (mass, momentum, energy, entropy, and local boundary temperature):
  <https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch3.pdf>
  and <https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch4.pdf>.
- David Tong, *Fluid Mechanics*, Part I §§1.1.1–1.1.3 (pathlines,
  streamlines, material derivative, mass) and Part II §§3.1–3.1.2 (stress,
  Newtonian shear/bulk terms, dissipation):
  <https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf> and
  <https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf>.
- MIT OCW 8.01SC, Chapter 11 §§11.1–11.3, and MIT OCW 8.09, §1.1, for
  Galilean and rotating-frame conventions:
  <https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter11.pdf>
  and <https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf>.
- BIPM, *The International System of Units*, 9th edition, v4.01, §§2.2–2.3
  and Tables 4–6; NIST SP 330-2019, §§2–3 and Tables 4–6:
  <https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507?download=true&t=1780410776583&version=7.0>
  and <https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.330-2019.pdf>.

The reviewed predictions and deductions are conditional on the stated model
assumptions; no experiment or empirical fluid claim is present in this batch.
The immediate suppliers and the mathematical results needed for the displayed
uses were inspected. The complete transitive proof histories of all published
mathematics beneath those suppliers were not re-audited; this review checked the
current supplier statements and their hypotheses against the local applications.
No unresolved mathematical uncertainty or other blocker remains in the assigned
scope.
