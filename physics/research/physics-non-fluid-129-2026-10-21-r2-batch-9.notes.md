# Batch 9 authoring notes — Transverse fields, helicity and angular momentum

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `9`  
Page pair: `emx-classical-helicity-angular-momentum` / `emx-classical-helicity-angular-momentum-examples`

## Plan and scope comparison

- `research/plan-spec.json`, the batch-9 manifest, the batch-9 task and the
  complete design section at L468 agree on page IDs, A/B pairing, title,
  category `classical-electromagnetism`, library `physics`, order 715/716, and
  the four A-page prerequisites: `em-energy-momentum-and-angular-balance`,
  `em-potentials-and-gauge`, `em-vacuum-waves-and-polarization`, and
  `schwartz-space-and-the-plancherel-theorem`.
- The design inventory promises four A items and two B items. All six are
  authored on their planned pages. Both pages remain below the 100-item cap.
- The run-local owner override
  `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md`
  is absent; no override was applied.
- The current `plan-spec` has empty item inventories at this pre-authoring
  stage. The authored manifests now carry the six exact item interfaces; the
  shared canonical plan was left to its owner.
- No page-level plan conflict was found. The following item-level dependency
  corrections are recorded because the complete arguments revealed inputs the
  compact design inventory did not list.

## Dependency graph and levels

The run's batch dependency record assigns batch 9 level 0 with no in-run page
suppliers. Recomputed item levels from actual `deps` are:

| Item | Level | In-run supplier(s) |
|---|---:|---|
| `def-emx-transverse-fourier-field` | 0 | none |
| `pthm-emx-helicity-projection` | 1 | `def-emx-transverse-fourier-field` |
| `def-emx-angular-momentum-split` | 1 | `def-emx-transverse-fourier-field` |
| `pthm-emx-canonical-kinetic-integral` | 2 | `def-emx-angular-momentum-split`, `def-emx-transverse-fourier-field` |
| `cex-emx-plane-wave-spin-integral-failure` | 2 | `def-emx-angular-momentum-split`, `def-emx-transverse-fourier-field` |
| `ex-emx-gauge-boundary-term` | 3 | `pthm-emx-canonical-kinetic-integral`, `def-emx-angular-momentum-split` |

The direct physical and mathematical suppliers are current local or pinned
published items. The added cross-product, complex arithmetic, SI, smooth-field,
Gauss-law, Fourier-plane-wave, field-energy, compact-cutoff and Riemann/FTC
interfaces are recorded directly in the consuming items' `deps`,
`dependency_roles` and Facts. Their actual statements and relevant proofs were
inspected. No dependency cycle or unresolved supplier is present. The batch's
cross-batch dependency array is empty because none of these logical suppliers
belongs to another batch in this run; the four declared prerequisite pages are
external page context, not cross-batch edges.

### Recorded design-interface adjustments

1. The design inventory lists `thm-fourier-inversion-on-schwartz-space` as a
   direct dependency of `def-emx-transverse-fourier-field`. Its current
   published statement explicitly assumes countable choice, and its proof uses
   the inversion interface. This definition's argument does not invert a
   Fourier transform: it starts from a smooth amplitude with compact support
   away from zero and proves regularity by differentiating the compact integral
   and integrating by parts. It instead depends on the exact Schwartz-space
   definition and the Riemann interfaces needed for the compact integrals.
   This preserves the planned claim and Fourier conventions without spending
   an unused countable-choice assumption. The page still requires the planned
   Schwartz/Plancherel supplier page.
2. The planned plane-wave counterexample's proof route invokes the positive
   period-averaged energy density and the infinite-energy conclusion. Its item
   now explicitly depends on `def-em-plane-wave-definition` and
   `pthm-em-wave-energy-average` as well as the angular-functional domain.
3. The planned charged example substitutes Gauss's law into the all-space
   identity. Its item now declares `post-em-vacuum-maxwell` as an explicit
   physical assumption; the example also constructs a smooth compactly
   supported time-slice whose charge correction is nonzero.
4. The planned `cex-` interface described a true property rather than naming a
   false universal statement. The counterexample now states the refuted claim
   that every nonzero plane wave belongs to the Schwartz Fourier-packet domain,
   then proves the planned infinite-energy example. The direct Maxwell plane
   wave result and the packet's finite-energy result are both explicit
   dependencies. Its mathematical and physical scope is unchanged.
5. The design routes the packet's Maxwell verification through
   `pthm-em-plane-wave-maxwell`. The local packet amplitude has units per
   $k$-volume, while that theorem's ordinary plane-wave amplitude convention
   assigns units to a single mode. The packet proof therefore differentiates
   the compact spectral integral and checks all four vacuum Maxwell equations
   modewise from the adopted Maxwell postulate and the transverse condition;
   no plane-wave amplitude units or theorem hypotheses are silently applied
   under the integral.
6. The sourced example explicitly depends on the divergence-of-a-curl and
   Clairaut mixed-partial results. These justify $\operatorname{div}(\operatorname{curl}A)=0$
   and the commutation of spatial curl with the time derivative in its Maxwell
   verification.

## Supplier inspection

- `def-em-gauge-transformation` defines the potential representation
  $E=-\nabla\varphi-\partial_tA$, $B=\operatorname{curl}A$, the Coulomb
  condition, the chart and units. The packet sets $\varphi=0$ and proves
  $\operatorname{div}A=0$ directly.
- `pthm-em-plane-wave-maxwell` was read with its full proof and is used by the
  B-page plane-wave counterexample with its exact hypotheses. The A-page packet
  does not apply that single-mode theorem to spectral densities: it derives
  the modewise differential coefficients directly under the compact integral
  and verifies Gauss, no magnetic charge, Faraday, and Ampère equations using
  $k\cdot a(k)=0$ and the triple-product identity.
- `def-em-vacuum-energy-flux` supplies the pointwise SI density used to prove
  finite packet energy. `pthm-em-wave-energy-average` supplies the plane-wave
  average and its separately proved infinite box-exhaustion energy; its
  model/balance interpretation is not imported into this counterexample.
- `def-em-vacuum-stress-momentum` fixes $g=\varepsilon_0E\times B$ and the
  origin-relative orbital density. The new definition uses that exact
  convention; it introduces no covariant momentum tensor.
- `post-em-vacuum-maxwell` is treated as an adopted physical postulate. The
  charged example uses only its smooth-branch Gauss equation and does not
  claim an experiment or a static solution history.
- The imported `def-schwartz-space-and-its-seminorms` is a published
  mathematical definition. Its exact definition is carried into the local
  proof. The local wave-packet and angular-functional estimates use compact
  support, coordinatewise seminorm bounds and Riemann integrability; they do
  not invoke the imported Fourier inversion or Plancherel theorem.
- The componentwise canonical/kinetic identity is proved directly. On each
  finite cube it has the explicit `div E` volume correction and outward-face
  term; only the Schwartz, source-free packet class permits those terms to
  vanish in the all-space equality.

## Source reading and harvest

Two independent treatments were retrieved as full text: Bliokh et al.'s
23-page review PDF and Beisert's 176-page ETH course script. Relevant ranges,
item support, limitations, and every harvested heading's `included`, `inline`,
`already-published`, `deferred`, or `out-of-scope` disposition are recorded in
`physics-non-fluid-129-2026-10-21-r2-batch-9.coverage.json`. The ETH angular
momentum locator was checked against the current PDF: the total field integral
is in §8.3, “Drehimpuls, Schwerpunkt,” PDF viewer page 89. The older
frontier-expansion source note labels PDF p.90/§8.4 as angular momentum, but
§8.4 is the Galilei-transformation section; this batch uses the corrected §8.3
locator and no claim from §8.4.

The optional arXiv HTML rendering returned 404. The same paper's direct `/pdf/`
URL opened as the complete paper; the PDF, not the failed HTML route, is the
cited source. This retrieval history is preserved in the coverage file. No
source result is dropped and no source-resolution escalation remains.

## Final authoring status

All four A items, both B examples, both page carriers, source harvest coverage,
proof contracts and readiness records are complete. The six Step 1 decisions
were recorded as `ready`; `step1Decision` reports each record current against
its item and dependency hashes. These records do not represent independent
proof approval.

### Final scoped checks

- `source-fetch-check --stamp` verified both independent full-text sources;
  the later stamp check reports 2/2 verified and 0 documented drops.
- `coverage-checklist` reports 15 harvested results, 0 errors and 0 warnings.
- The batch-local dependency calculation gives levels 0, 1, 1, 2, 2 and 3 in
  the table above. All six manifest items match their recorded levels; the
  cross-batch dependency array is `[]` because there are no in-run cross-batch
  edges owned by this batch.
- `content-policy --manifest-only --authored` reports 6 scoped items, 0 errors
  and 0 warnings. Focused `depcheck` covers all six items and both pages with
  0 errors and 0 warnings.
- `proof-layout` reports 6 items, 22 steps and 0 defects. Strict
  `proof-contract` reports 0 errors, 0 warnings and 6/6 items checked. Direct
  manifest-to-contract coverage is 6/6.
- `rendercheck` reports all 8 assigned item/page files valid under the renderer
  and KaTeX. Its first run found a multiline display in the finite-cube
  theorem; the display was collapsed to one source line and the final run
  passed.

The run-wide `proof-contract-coverage --run physics-non-fluid-129-2026-10-21-r2`
cannot complete because the separate frontier page `emx-paraxial-optics` has
an empty inventory (`Empty or invalid frontier page inventory emx-paraxial-optics`).
That page is outside batch 9 ownership and was left untouched. The scoped
batch-9 manifest and all its proof-bearing contracts pass the direct coverage
check above. Independent review remains a later gate.
