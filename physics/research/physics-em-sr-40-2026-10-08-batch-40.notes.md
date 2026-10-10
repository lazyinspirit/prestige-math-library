# Batch 40 notes — `em-scattering-and-scalar-diffraction`

Run `physics-em-sr-40-2026-10-08`; batch 40; one A/B pair, order 359/360,
category `classical-electromagnetism`, library `physics`, title *Vector PEC
scattering, dipole limits and controlled scalar diffraction*. Declared `requires`
of the A page: `em-lorentz-covariant-formulation`, `em-material-response`,
`em-retarded-fields-and-radiation`; the B page requires its A page.

Status: scaffold complete; authoring and independent review pending. The
inventory has 9 A items and 1 B item. All ten items are recorded `ready` with
complete statement/strategy contracts and met scaffolded prerequisites. This
is not an authored-proof audit, source-book acceptance, publication or native
gate acceptance.

## Design and plan comparison

The design reservation (`research/plan-classical-electromagnetism-track.md`
L2228 ff., order 359) and the current `research/plan-spec.json` entries 359/360
agree exactly on page ids, kind, order, category, library, titles, companion
links and declared `requires`. No page-metadata conflict and no selected-pair
change was made. Two recorded deviations, both within this batch's own pair:

1. **A/B counts.** The reservation promised A 5 / B 1. The scaffold keeps all
   six promised item IDs and adds four necessary local prerequisites on the
   same A page (below), for A 9 / B 1. The page cap of 100 items is far from
   binding and no promised claim was trimmed or narrowed.
2. **Declared dependency levels.** The reservation's labels (postulate 2,
   diffraction 3, PEC 7, dipole 11, Thomson 12) were computed against the
   design's local subset. The whole-run tool labels are 17, 18, 17, 22, 23
   (and 9/0/0/21 for the four added prerequisites; B example 19). The tool's
   current labels are recorded in the manifest, as in sibling batches.

The design's proof route is preserved: the aperture items adopt the P3 scalar
source integral and inherit its explicit Fresnel/Fraunhofer error terms and the
F6 trace distinction; the vector PEC theorem instantiates the F4 vector
Helmholtz boundary-existence lemma and the F5 phasor argument; the dipole and
Thomson items follow P1/P2 with the A2 far-field interface.

## Inventory (all IDs stable; `dependency_level` = whole-run label)

| item | kind | level | role in the pair |
|---|---|---|---|
| `def-em-monochromatic-source-free-phasors` | definition (physics) | 9 | new prerequisite: precise frequency-ω source-free vacuum phasor class and real-field encoding for F5 |
| `lem-em-phasor-real-part-calculus-and-equivalence` | lemma (mathematics) | 0 | new prerequisite: Re-calculus, injectivity and phasor/real-system equivalence used by F5(a) |
| `lem-em-harmonic-forcing-periodic-response` | lemma (mathematics) | 0 | new prerequisite: all solutions and the periodic solutions of `z''=Re(w e^{-iωt})` for P2 |
| `def-em-ideal-harmonic-dipole-model` | definition (physics) | 21 | new prerequisite: precise ideal harmonic dipole model (far-zone field, declared multipole exclusion, fidelity status) for P1/P2 |
| `post-em-scalar-aperture-model` | postulate | 17 | promised: adopted scalar aperture model (P3 source integral, polarization-insensitive regime, trace caveat) |
| `pthm-em-scalar-aperture-diffraction` | physics-theorem | 18 | promised: Fresnel/Fraunhofer estimates and intensity-error transfer for the model |
| `pthm-em-pec-monochromatic-exterior-scattering` | physics-theorem | 17 | promised: vector PEC exterior scattering, phasor Maxwell, `n×E=0`, uniqueness |
| `pthm-em-dipole-scattering-cross-section` | physics-theorem | 22 | promised: differential/total cross section of the ideal harmonic dipole in a plane wave |
| `pthm-em-weak-field-thomson-limit` | physics-theorem | 23 | promised: controlled first variation of the SR force law and the leading Thomson cross section |
| `ex-em-rectangular-aperture` (B) | example | 19 | promised: uniform rectangular aperture, sinc-squared Fraunhofer pattern |

### Why the four added prerequisites are necessary (recorded, not silent)

- **F5 names an object it must define.** The design's PEC theorem assumes a
  "smooth incident source-free Maxwell phasor near O". The framework had no
  general monochromatic phasor class (only plane-wave and guide-specific
  encodings), so `def-em-monochromatic-source-free-phasors` fixes the class and
  `lem-em-phasor-real-part-calculus-and-equivalence` supplies the exact
  Re-calculus/injectivity needed to deduce the smooth-branch real Maxwell
  equations from the phasor system. Both are used only by this pair.
- **P1/P2 adopt a model that must be stated precisely.** The design says "adopt
  a prescribed monochromatic electric dipole in vacuum, no independent
  magnetic/higher multipole radiation"; the retarded-fields companion adopted a
  similar idealization inline in an example that cannot be consumed across
  pages. `def-em-ideal-harmonic-dipole-model` makes the model explicit and
  reusable, including its exact leading-term relation to
  `pthm-em-dipole-radiation`, the multipole exclusion and the no-exact-Maxwell
  status.
- **P2 classifies the periodic first-order response.** The recorded argument
  needs "z1 is the periodic solution up to a constant", which follows from the
  affine classification of the solutions of `z''=Re(w e^{-iωt})`
  (`lem-em-harmonic-forcing-periodic-response`); no earlier item supplied it.

No other ID was added, renamed or re-homed, and no promised item was dropped.

## Dependency verification

Actual supplier interfaces were read and checked (hypotheses, direction,
conventions, axiom strength) against each consumer before recording readiness.
Key examined suppliers include: `lem-em-outgoing-source-helmholtz-and-diffraction`
(finite complex measure α, kernel, Fraunhofer/Fresnel error terms, outgoing
residual; Countable Choice as stated); `lem-em-helmholtz-boundary-representation`
(actual-trace Green formula and the overdetermined-trace caveat);
`lem-em-exterior-vector-helmholtz-mixed-boundary-existence` (smooth bounded C∞
obstacle, connected exterior, prescribed smooth tangential data, modal outgoing
class, full Axiom of Choice, `div E=0`); `pthm-em-dipole-radiation` (leading
fields, absolute `D(u)`, Γ_E/Γ_B bounds, ACω); `pthm-em-wave-energy-average`
(incident intensity ε0c|e|²/2); `pthm-em-plane-wave-maxwell` (amplitude
equations and dispersion); `pthm-em-relativistic-lorentz-force` (four-force
setting and controlled low-speed expansion); `def-em-si-conventions`,
`def-em-fields`, `def-em-lab-geometry`, `def-em-sources` (objects, constants,
units); `post-em-vacuum-maxwell` and `post-em-material-closure` (the
formulative/material context the PEC model is *not* derived from);
`pthm-em-material-stationary-jumps` (stationary interface idealization context);
`thm-the-divergence-of-a-curl-vanishes`, `cor-the-curl-of-a-curl-of-a-c2-field`,
`lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules` (the
phasor-to-curl-curl algebra); `lem-em-period-average` and
`lem-em-sphere-zonal-moments` (period averages and the 8π/3 moment).

Every manifest item's wikilinks were checked to lie in its own `deps`; no
item has `justified_by`, `forward_refs` or `external_refs`, and no item uses a
recorded-not-proved statement. No dependency cycle or forward dependency
exists. Tool-computed levels equal the recorded labels:
9, 0, 0, 21, 17, 18, 17, 22, 23, 19.

Cross-batch input: `research/physics-em-sr-40-2026-10-08-batch-40.cross-batch-dependencies.json`
contains 45 rows (42 item rows and 3 page rows). `frontier-dependency-ledger
refresh --run` reports all 45 batch-40 edges carry review rows, 0 orphaned
reviews and batch 40 reviewed.

## Axiom of choice declarations and exact uses

- `pthm-em-pec-monochromatic-exterior-scattering` assumes the full Axiom of
  Choice exactly as carried by `lem-em-exterior-vector-helmholtz-mixed-boundary-existence`
  (its coercive-solver, compactness and compact-spectral steps) and lists
  `def-axiom-of-choice`; the phasor algebra adds no choice.
- `post-em-scalar-aperture-model`, `pthm-em-scalar-aperture-diffraction` and
  `ex-em-rectangular-aperture` assume Countable Choice as carried by
  `lem-em-outgoing-source-helmholtz-and-diffraction` /
  `lem-em-helmholtz-boundary-representation` and by the Riemann–Lebesgue and
  Fubini interfaces, and list `def-countable-choice`. The full-Choice modal
  branch of the boundary-representation lemma is explicitly not used.
- `pthm-em-dipole-scattering-cross-section` assumes Countable Choice as carried
  by `pthm-em-dipole-radiation` and `lem-em-sphere-zonal-moments`;
  `pthm-em-weak-field-thomson-limit` inherits it through the cross-section
  theorem. The two new mathematical items and the two new definitions use no
  choice principle.

No item uses or reaches `deferred-set-theory-beyond-choice`.

## Escalation — plan-context declaration gap (owner action)

`validate-plan --run` reports exactly two errors, both on this pair:

```
[undeclared-prereq] page em-scattering-and-scalar-diffraction has an item depending on
  signed-and-complex-measures-hahn-and-jordan, which is NOT in the closure of its declared requires
[undeclared-prereq] page em-scattering-and-scalar-diffraction-examples has an item depending on
  signed-and-complex-measures-hahn-and-jordan, which is NOT in the closure of its declared requires
```

Three genuinely used published supplier items of this pair are homed on the
published measure-theory page `signed-and-complex-measures-hahn-and-jordan`
(P entry, order 80.9969512195122): `def-complex-measure`,
`def-total-variation-of-a-signed-or-complex-measure` and
`def-integration-against-a-signed-or-complex-measure`. The last is the pairing
∫ f dα used by the aperture model, and ‖α‖_TV in the Fraunhofer/Fresnel error
terms is the total variation of that page's development. Consumers:
`post-em-scalar-aperture-model`, `pthm-em-scalar-aperture-diffraction` (A) and
`ex-em-rectangular-aperture` (B; resolved through its A-page `requires` edge).

This is a plan-metadata declaration gap, not an item defect: every supplier
resolves on disk, was read, and its use is recorded in the consumers' statements
and strategies. Per the owner direction ("declare any additional genuinely used
published supplier homes through the ordinary escalation path") neither the
plan nor any `requires` field was edited by this worker. Requested repair:
declare `signed-and-complex-measures-hahn-and-jordan` as prerequisite context
of `em-scattering-and-scalar-diffraction` (one `requires` entry; the B page then
resolves through its own `requires` edge). The same class of gap was previously
resolved by the owner's published-context reconciliation.

## Source harvest

Six complete treatments were fetched, read and stamped; every named heading in
the read range has a disposition in the coverage file (37 harvested results,
0 errors, 0 warnings).

| source | kind | read range |
|---|---|---|
| D. Tong, Electromagnetism (236 pp.) | lecture-notes | §6.2–§6.3, printed pp. 143–157 (dipole radiation, Larmor, multipoles, Thomson, Rayleigh); §6.1.1 inspected |
| R. Fitzpatrick, Classical Electromagnetism | course-notes | nodes 94–95 (Hertzian/electric dipole radiation), node 96 (Thomson scattering) |
| N. Beisert, Elektrodynamik (ETH, 176 pp.) | lecture-notes | §12.3 scattering, §13.1 ideal-conductor phasor setting, §14.1–14.3 Kirchhoff/Fraunhofer/Fresnel |
| J. Peatross, M. Ware, Physics of Light and Optics (348 pp.) | textbook | chapter 10 §§10.1–10.4 and Example 10.4; §10.5 and App. 10.A inspected |
| A. Moiola, Scattering of time-harmonic acoustic waves (78 pp.) | lecture-notes | chapter 4: Def. 4.15–4.16, Thm. 4.22 and uniqueness discussion |

Fetch stamps (2026-10-09, `source-fetch-check --stamp` 6/6):
Tong `electro.pdf` 1 882 418 bytes, 236 pp., sha256_16 `b99b41156dfe6cd9`;
Fitzpatrick `node94.html` 42 723 bytes (8 220 text chars), sha256_16 `021f6d7f6ed247ed`;
Fitzpatrick `node96.html` 18 346 bytes (5 541 text chars), sha256_16 `f3c0946db2f607cb`;
Beisert `ED-24FS-Skript.pdf` 1 354 282 bytes, 176 pp., sha256_16 `a85f21ce710b509d`;
Peatross–Ware `OpticsBook.pdf` 8 885 663 bytes, 348 pp., sha256_16 `893975eb0e67c2e1`;
Moiola `MNAPDE2022.pdf` 5 554 431 bytes, 78 pp., sha256_16 `a00fb322723446e7`.
All six were fetched on the first attempt; a first `node95.html` entry was
replaced by the fuller `node94.html` (nodes 94–95 read together) because the
node-95 page carries under 2 kB of extractable text; the substitution is
recorded in the coverage locator.

Convention dictionary and source qualifications (also in the coverage note):
Tong's printed incident plane-wave flux carries a c-factor inconsistency
relative to E×B/μ0 in the same notes — the framework uses only its own
`pthm-em-wave-energy-average` result `I=ε0c|e|²/2=|e|²/(2μ0c)` (the historical
scaffold note records this repair); Beisert's constants are rederived in the
framework's SI dictionary; Peatross–Ware's diffraction prefactor −i/λ belongs
to the Kirchhoff ansatz that this pair deliberately replaces by an adopted
scalar source datum plus the F6 trace caveat; sinc is normalised identically
(`sinξ/ξ`, value 1 at 0). Rayleigh, dielectric-sphere and inhomogeneity
scattering, the astrophysical applications and circular-aperture diffraction
are declined as out of the declared scope; no measured value, precision or
empirical claim is harvested.

## Checks run (actual results, 2026-10-09)

- `manifest-deps.mjs` batch-40: 10 items, 0 errors.
- `content-policy.mjs --manifest-only` all run manifests: 471 scoped items,
  0 errors, 0 warnings.
- `item-dependency-levels.mjs check --run`: 471 items across 80 pages, no
  errors; recorded batch-40 labels equal computed labels.
- `validate-plan.mjs research/plan-spec.json --run`: **FAIL**, exactly the two
  `undeclared-prereq` errors escalated above; no other error or warning names
  this pair.
- `manifest-integrity.mjs --run`: 80 pages owed, 80 in the manifests, no scope
  drift.
- `physics-check.mjs --plan research/plan-spec.json --run`: 0 errors,
  471 items checked.
- `extcheck.mjs`: 26 654 items, 0 recorded-not-proved, 0 resting on them —
  vacuous for this batch (no `proved_here: false`, `external_refs`,
  `forward_refs`).
- `coverage-checklist.mjs ... --require-destination`: 1 page, 37 harvested
  results, 0 errors, 0 warnings.
- `source-fetch-check.mjs --coverage ... --stamp`: 6/6 fetch-verified (stamps
  above); check mode 6/6 resolved, 0 drops.
- `url-sweep.mjs`: 5/6 live, 1 failed but non-blocking — the BYU textbook URL
  answers 404 to HEAD while GET returns the complete 8.9 MB PDF that is stamped
  above; recorded as a link-maintenance finding, not a missing document.
- `frontier-dependency-ledger.mjs refresh --run`: refreshed and deduplicated;
  45/45 batch-40 edges carry review rows, 0 orphaned reviews, batch 40
  reviewed.
- `fwdcheck.mjs`: **FAIL**, with `forward-undeclared` rows only inside imported
  published mathematical items (e.g. `thm-zero-weak-gradient-implies-componentwise-constancy`)
  whose wikilinks point to later plan-numbered pages. Pre-existing import
  context; no batch-40 item is named. Reported, not repaired.

## Unresolved findings

1. **Plan-context declaration gap** (above): the owner must declare
   `signed-and-complex-measures-hahn-and-jordan` on
   `em-scattering-and-scalar-diffraction` before `validate-plan` can pass for
   this pair. The suppliers resolve and were read; this is metadata, not an
   item defect.
2. **BYU textbook link-maintenance** (above): HEAD 404 / GET 200; full text
   fetched and stamped. Owner may want a mirror or a refreshed URL.
3. **Pre-existing `fwdcheck` rows** in imported mathematical items (above),
   unrelated to this batch.
4. No published defect was found in any examined supplier. Owner/operator
   reconciliation and the full engine gate follow construction; Step 3 provides
   the independent mathematical review.
