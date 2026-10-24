# Step 3a Reader Report — Batch 51

Run: advanced-qft-supersymmetry-build-2026-10-23  
Role: reader  
Batch: 51

## Scope and opened inventory

Assigned pages:

- `qftx-instanton-localization-physics` at `library/advanced-qft-and-supersymmetry/qftx-instanton-localization-physics.md`.
- `qftx-instanton-localization-physics-examples` at `library/advanced-qft-and-supersymmetry/qftx-instanton-localization-physics-examples.md`.

Both assigned page files are frontmatter-only with `page_layout: compact-v1`. Their titles, category, library, status, item/example inventories, and page requirements match the batch-51 manifest.

Assigned items, read in dependency order:

1. `def-qftx-instanton-equivariant-partition-series`.
2. `lem-qftx-u1-one-instanton-adhm-space`.
3. `pthm-qftx-omega-background-fixed-point-expansion`.
4. `ex-qftx-omega-u1-one-instanton-factor`.
5. `ex-qftx-omega-u2-one-instanton-factor`.

I also opened the batch-51 proof-contract file. Its derivation and boundary records for all five items match the current proof-step numbering and scope; I found no stale or missing step mapping.

For dependency context, I opened the three required prerequisite pages: `qftx-s4-partition-functions`, `qftx-adhm-moduli`, and `qftx-noncompact-equivariant-borel-moore-localization`. I also opened all 31 current-run items in the assigned items' transitive `deps` closure. Those include the relevant suppliers from batches 2, 5, 8, 12, 47, 50, 59, and 61, as well as the five assigned items. The exact published supplier statements used in the reviewed arguments were opened for the classical geometric quotient, equivariant vector bundle, Chern classes, Euler class, top Chern/Euler identity, Chern Whitney sum, Euler naturality/Whitney product, equivariant Borel–Moore homology, constructible six-functor localization, linearly reductive fixed loci, and Thom-class products.

## Review findings

- `def-qftx-instanton-equivariant-partition-series`: the positive-FI stable quotient, Borel-descended tangent bundle, inverse-flavor twist, top Chern insertion, localized proper trace, and coefficientwise formal series are stated conditionally. The weight shift is `w - m̃`; the physical application is expressly limited to the source-qualified U(2) S4 model and does not assert a continuum measure or regulator removal. No defect found.
- `lem-qftx-u1-one-instanton-adhm-space`: the scalar stable locus has `j = 0`, its geometric quotient is C², the quotient torus action has one fixed point with weights ε₁ and ε₂, and the localized coefficient is the displayed shifted numerator over ε₁ε₂. The quotient, top-Chern, and localization arguments check. No defect found.
- `pthm-qftx-omega-background-fixed-point-expansion`: the proof applies the finite-proper-fixed-locus Borel–Moore localization formula to the mass-twisted tangent top Chern class. The conclusion remains conditional on the stated positive-FI geometry, localized trace, source mass convention, and adopted S4 regulator assumption. It does not claim a full S4 path integral or regulator construction. No defect found.
- `ex-qftx-omega-u1-one-instanton-factor`: the one-box calculation and diagram agree with the rank-one quotient. One statement qualification is missing: the first paragraph assigns mass dimension one to ε₁, ε₂, and m̃ without specifying the unit convention. Its sole dependency defines these as equivariant character classes, not as physical quantities with a stated unit system. This is an ill-formed but nonfatal statement gap. I was assigned as a read-only reader and made no edit.
- `ex-qftx-omega-u2-one-instanton-factor`: both one-box tangent characters, Euler denominators, shifted numerators, and the generic rational simplification check algebraically. The S4 specialization is separated from the generic rational-function calculation, and the massless claim is restricted to the degree-one coefficient away from excluded poles. The two-color diagram matches the stated tuples. No defect found.

## Source checks

- Pestun, [Localization of Gauge Theory on a Four-Sphere and Supersymmetric Wilson Loops](https://arxiv.org/pdf/0712.2824): §1 equations (1.3)–(1.4) and the following explicit noncommutative-regulator caveat; §2 equations (2.24)–(2.30) for the N=2* mass deformation and selected off-shell generator; §5 equations (5.11)–(5.12) for the shifted tangent numerator, m̃ = m + (ε₁ + ε₂)/2, and the U(2) charge-one factor. The source states that it does not construct the S4 noncommutative deformation and assumes agreement with the flat-space regulator near the poles.
- Nekrasov, [Seiberg–Witten Prepotential from Instanton Counting](https://arxiv.org/pdf/hep-th/0206161): §3.3 equation (3.9) identifies the nonzero moment-map-level U(N) quotient as the smooth resolution associated with the noncommutative deformation; §3.6 identifies the rotation-fixed instanton configurations with colored partitions.
- Nakajima and Yoshioka, [Lectures on Instanton Counting](https://arxiv.org/pdf/math/0311058): §3.1, printed pp. 17–19, Theorem 3.2 gives the framed-sheaf partition fixed points and tangent representation. The assigned theorem relies on the local stable-matrix-quotient proof and does not infer a sheaf/ASD identification from that source.

The U(2) algebra was checked directly from the two listed terms. With A = (ε₁ − m̃)(ε₂ − m̃) and C = m̃² − m̃s − d², their sum reduces to `2A(C + s²)/(ε₁ε₂(s² − d²))`; the cancellation of d is performed only in the generic rational function field.

## Edits and unresolved defects

No content edits were licensed or made. The nonfatal unit-convention gap in `ex-qftx-omega-u1-one-instanton-factor`, Example, first paragraph, is recorded in the findings JSON. No formatter, reflow, precheck, or proof-layout command was run because no item was edited.

## Page verdicts

- `qftx-instanton-localization-physics`: pass for the reviewed page interface and inventory. It is frontmatter-only, matches the manifest, and requires the S4 model, ADHM moduli, and noncompact Borel–Moore localization context used by its items.
- `qftx-instanton-localization-physics-examples`: pass for the reviewed page interface and inventory. It is frontmatter-only, matches the manifest, and requires its A page and the S4 model context.

## Blocker and coverage limit

No blocker prevents completion of the batch-51 review. I did not independently re-audit the full transitive proof trees of the published mathematics suppliers, nor every source-dependent gauge-fixing detail in the upstream S4 postulate that batch 51 does not consume. The source review above is limited to the interfaces and qualifications used by the assigned claims.
