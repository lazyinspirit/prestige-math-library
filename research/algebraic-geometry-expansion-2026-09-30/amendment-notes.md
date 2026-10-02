# AG/scheme prose amendment notes

Date: 2026-09-30

## Files changed

- `research/plan-algebraic-geometry-track.md`: added the current Vakil 2025
  source entry, corrected the Frontier-36 AG-LIE and AV-6 publication census,
  repaired the stale AV-1/6/12 provenance rows, reconciled AV-15/17/18/22
  supplier placement, and appended a dated source/proof audit. The four active
  scheme-pair selections and the AV-23 normalization/model repair from its
  concurrent owner were preserved.
- `research/plan-algebraic-geometry-expansion-track.md`: added a prose-only
  roadmap with current supplier census, proof routes for old `not-supplied`
  rows, dependency-ordered group/action proposals, geometry/scheme proposals,
  and explicit source-gated advanced branches.
- `research/algebraic-geometry-expansion-2026-09-30/audit-repair.md`: records
  the claim/supplier matrix, explicit local proof chains, source access log,
  exact manifest-derived counts, residual roadmap gates, and validation.
- This note records the integration and verification boundary.

No changes were made to `research/plan-spec.json`, `.autopilot/`, run artifacts,
library pages, item files, or the selected 30-pair run scope. The AV-7/8 and
AV-20/23--26 promises remain prose-only and are not added to the active run.
AV-26's plane-curve resolution claim is retained with a local proof route; the
broader AG-CRES-1 regular-surface extension remains separately gated. The new
roadmap is not a canonical plan specification.

## Four-report integration

- **Vakil 2025:** use dated section and exercise locators; the old 2011 page
  numbers remain historical. V25 supplies the imperfect-field example, curve
  Riemann--Hurwitz/high-degree exercise routes, surface intersection/Hodge
  route, projective-family examples, plane-curve resolution termination, and
  higher-dimensional duality. AV-23 retains the RH/high-degree promises and
  their setup but emits no Riemann--Hurwitz, étale-genus, basepoint-free, or
  very-ample theorem rows; the complete theorem IDs belong to AV-25 after
  AV-24, using published suppliers and explicit local routes.
  The AV-25 coefficient-trace residue formula is scoped to perfect fields or
  individual separable closed points; it is not asserted at inseparable
  points over imperfect fields. Vakil does not prove the general
  separated quasi-finite factorization, generic freeness, Hilbert scheme
  representability, or higher-dimensional resolution.
- **Stacks:** closes fpqc locality of properness [02L1], QC-ideal/closed
  subscheme correspondence [01QQ], tangent/differential routes [0B29,
  0B2C--0B2E, 02G1, 01V9], generic freeness [051T], proper-flat coherent
  perfect-complex base change [07VJ], abelian-variety projectivity [0BFA],
  and curve-on-surface resolution [0BI4, 0BI5, 0BI7, 0BI8, 0BIC]. The affine
  finite-locally-free equivalence-relation quotient [03BM] is a narrow proven
  quotient. Tag [07S6] is used only with its current scope: finite-locally-free
  source and target maps, an equivalence relation, and the condition that each
  nonempty closed subset contains a point whose equivalence class lies in an
  affine open. The 2025-07-22 comment is resolved by this strengthened
  hypothesis; [07S6] does not represent arbitrary `G/H`. Direct tag checks in
  Chapter 39 additionally verified the
  basic group-scheme route: Definition 39.4.1 [022S], Definition 39.4.3
  [047D], Lemma 39.4.4 [0G8L], and Examples 39.5.1--39.5.4 [022U, 040M,
  022V, 022W]. This independently supports group-object/subgroup definitions
  and the $G_m$, roots-of-unity, $G_a$, and $GL_n$ examples. It did not verify
  an $\alpha_p$ example or a Hopf/comodule equivalence. Lemma 39.6.3 [047I]
  gives invariant differentials and Lemma 39.6.4 [0BF5] identifies tangent
  multiplication with addition; neither supplies the Lie-bracket proof.
  Stacks does not give the whole GIT, Hilbert, or arbitrary `G/H` package in
  the reviewed material.
- **Milne, Algebraic Groups:** supplies proof-bearing field-level routes for
  group schemes, Hopf algebras, faithful representations, Lie brackets,
  smooth-affine `G/H`, Barsotti--Chevalley, multiplicative type, Borel and
  split reductive theory. It does not locally prove abelian projectivity;
  M22.8.45 states it, while Stacks supplies the proof. Steinberg Lemma 22.24
  is imported, and Milne Appendix B's general quotient proof needs a separate
  close-read before it can close the arbitrary-subgroup gate. These pair
  proposals still need independent full source treatments.
- **Brion actions:** supplies complex affine-action and invariant-theory
  proof routes with imports. Reductivity/complete reducibility is deferred;
  projective GIT is sketched; Hilbert--Mumford and Rosenlicht are not proved.
  Spherical classification has cited dependencies and Thm. 2.22 has a
  self-reference that must be repaired. The roadmap does not broaden these
  claims to arbitrary fields or group schemes.

## Historical promise crosswalk

All explicit `not-supplied` rows have an exact disposition in the main-plan
reconciliation table:

- AV-1 → published AG-P2 antiequivalence theorem.
- AV-6 tangent → published rational-point lemma
  `lem-tangent-vectors-as-dual-number-points`; the broader residue-field
  formulation is the separate published AG-P2
  `thm-tangent-vectors-dual-numbers`. The imperfect-field theorem and its
  explicit point calculation are both published.
- AV-12 QC ideal correspondence → published item and Stacks [01QP, 01QQ].
- AV-15 fpqc properness → existing published item and Stacks [02L1]; the
  duplicate zero-impact AV-15 row is deleted. AV-15 supplies quasi-finite
  fibre interfaces; published CA-20 `thm-algebraic-zariski-main-localization`
  supplies the affine localization theorem; AV-17 owns the scheme-level
  Zariski Main factorization and proper quasi-finite finiteness, after its
  étale-local decomposition.
- AV-16 relative differential-rank row → published definition, no proof
  obligation; the actual smoothness criterion belongs after AV-17 with
  flatness and finite-presentation/fibre conditions.
- AV-17 generic freeness → the published AV-17
  `lem-generic-freeness-finite-type-algebra-module`, with its AC,
  Noetherian-domain, finite-type-algebra, and finite-module hypotheses. Its
  local proof inducts on algebra generators; the base case uses a prime
  filtration, while the one-generator step stabilizes kernels in the
  `M_k=Σ_{j≤k}x^jM_0` filtration and splits the localized successive
  quotients. Stacks [051R] is the exact-statement check; [051T]/[0529] check
  the stronger generic-flatness route.
- AV-22 proper-flat cohomology/base change → planned local AV-22 supplier
  using [07VJ] under Noetherian/proper/coherent/flat hypotheses.
- AV-23 Riemann--Hurwitz and high-degree bounds remain promises recorded on
  AV-23, but AV-23 emits no theorem rows for those four results. The stable complete theorem
  IDs are on AV-25 after AV-24. Their local proof routes use the AV-16
  differential sequence, finite-flat fibre degree, AG-LIE duality, AV-24's
  point-addition Euler-characteristic proof, and AV-22 base change. V25 Thm.
  21.4.3/Ex. 21.4.D and §§19.2.5--19.2.11/Ex. 19.2.E are comparison routes,
  not proof suppliers. The coefficient-trace residue calculation is scoped
  to perfect bases or separable closed points; abstract duality and RR retain
  arbitrary-field scope through published AG-LIE and AV-24.
- AV-26 embedded plane-curve resolution is retained on AV-26. Its local
  proof uses CA-19 normalization, CA-8 DVR structure, AV-15/17 proper
  quasi-finite finiteness, AV-21/22 Euler characteristics, the published
  regular-local normal-domain intersection lemma, and explicit blowup/contact
  calculations. Stacks §54.15 tags [0BI4, 0BI5, 0BI7, 0BI8, 0BIC] were read
  as full-text proof checks. AG-CRES-1 is now a separately gated extension to
  arbitrary Noetherian regular surfaces and cannot be counted as an AV-26
  supplier.
- AV-20 requires AV-12/18/19, CA-8, and CA-10. CA-9's Dedekind ideal theory
  is optional only for a specifically stated Dedekind-domain specialization;
  it is not a general normal-scheme or Cartier/Weil supplier.

## Live publication audit

- AG-LIE A/B pages 510.0161/510.0162: both `published`; page inventories have
  39 A items and 3 B examples, all published. Git publication commit is
  `fc59133d593f6883e00f24ef5084b0dd550ff7cf` dated 2026-09-30. The page body
  still says “draft” in places; no page/item edit was authorized by this
  assignment.
- AG-P2 page: `published`, with 49 A items and 1 B example. One A item is a
  shared pre-existing published definition; do not count all 49 as newly
  commissioned.
- AV-6 A/B pages: both `published` by commit
  `fc59133d593f6883e00f24ef5084b0dd550ff7cf`; 43 A items and 17 B examples,
  all published. This corrects the earlier plan count of 42 A/17 B and
  supersedes its obsolete 27 A/9 B preview.
- AV-9--AV-13: five published scheme pairs, 162 A + 44 B = 206 direct page
  placements. The former 162 A + 47 B = 209 total was stale.
- CA-19/20/21: published suppliers.
- The independent second audit corrected the Brion GA-3 doubled-origin
  counterexample in `source-brion-actions.md` and updated the Stacks [07S6]
  note in `source-stacks.md` to record its current strengthened hypothesis
  and resolved comment.
- The old 1,083-item aggregate is no longer asserted as current. Frontier-36
  expanded AG-LIE from its earlier 17-A inventory, and AG-P2's current count
  includes a reused shared definition. A fresh deduplicated all-track recount
  was outside the assigned scope; page-level counts above were checked.
- Published AG-LIE has no published consumer; its RL-9 relationship remains a
  planned downstream edge. No active-run selection was changed.

## Coverage and remaining source obligations

The reviewed proof routes now cover the scaffold's explicit unsupplied rows
without leaving a naked theorem promise. AV-1's old object-level theorem label
is superseded by the published full AG-P2 antiequivalence; AV-6's two old
unsupplied labels map to published results; AV-12's closed-subscheme
correspondence is published under AC. The relocated AV-16 differential-rank
definition is `not-applicable` for proof and is placed after AV-17's smooth
differentials theorem. The proposed new proof-bearing core
orders group schemes → Hopf algebras → infinitesimal structure → controlled
actions/quotients → connected/nonaffine groups, tori, Borel and split reductive
theory → highest weights. It avoids duplicating AG-P2, AG-LIE, AV-4, AV-9--13,
and the finite-group invariant theorem.

Still-open source obligations are recorded in the expansion file and include:

- an independent Stacks treatment now supports AG-GS-1 basic definitions and
  standard examples, but a second treatment is still needed for its
  characteristic-$p$ infinitesimal examples, the Hopf/comodule equivalence,
  and the Lie-bracket theorem. The Milne-based higher group pairs also need a
  second independent treatment, plus an audited reconstruction of Milne
  Appendix B for general subgroup quotients and Steinberg's Lemma 22.24;
- complete source routes for reductive invariant theory and projective GIT,
  including the omitted Hilbert--Mumford criterion;
- second surface sources and completion of V25 Exercises 20.1.E and 20.2.B;
- Hilbert-scheme representability (V25 cites Mumford/FGIKNV), deformation and
  moduli theory, Chow/GRR, étale fundamental groups, higher-dimensional
  resolution, Néron/arithmetic models, and algebraic spaces/stacks/derived AG.

## Reconciled live census and proof closure (2026-09-30)

The manifest-derived Scheme Theory census is **13 published pairs** (AV-9--
AV-19 and AV-21--AV-22), with **547 A + 121 B = 668 placements**. Exact
per-pair A/B counts are: AV-9 29/9; AV-10 30/9; AV-11 30/7; AV-12 31/8;
AV-13 42/11; AV-14 29/8; AV-15 49/9; AV-16 33/9; AV-17 77/9; AV-18 40/10;
AV-19 38/10; AV-21 63/10; AV-22 56/12. AV-9--AV-13 total 162/44 = 206.
AV-20 and AV-23--AV-26 have empty planned 0/0 page slots; AV-7/8 remain
prose-only promises without pair pages. AV-23 has 33 A rows in its current
prose inventory; active batch 6 has 35 A manifest placements, a separate
count. The full manifest command, slug map,
publication check, and collision scan are in `audit-repair.md`.

AG-P2 has 49 plan-spec A IDs including one shared, pre-existing definition,
so it contains 48 newly commissioned A IDs, 1 shared A ID, and 1 new B ID.
The A frontmatter has 50 placements because the B example
`ex-classical-affine-line-coordinate-local-and-function-field-dictionary`
is repeated there; the B page has one placement. The pair therefore has 51
page placements and 50 unique IDs. AG-LIE is published with 39 A/3 B and
AV-6 with 43 A/17 B; the AV-6 counts supersede the older 42/17 preview.

Every current AV-1--AV-26 promise now has either a published exact supplier or
a complete local proof route from published prerequisites in the binding
matrix. For AV-25, abstract duality and divisor RR remain valid over arbitrary
fields through AG-LIE plus AV-24; only the coefficient-trace residue
calculation is restricted to perfect fields or separable closed points. No
current claim is declared unclosed. Future roadmap candidates with
source/proof gates remain outside the fully provable set until the exact gate
listed for each proposal is closed. AV-26's delta is the global k-dimension
of the normalization quotient sheaf, equivalently the sum of local lengths
weighted by residue degrees; its embedded support conclusion is regular
normal crossing over the regular surface, not necessarily smooth relative to
an imperfect base.

No completeness claim is made for all advanced algebraic geometry. In
particular, the four reviewed sources do not prove every branch listed in the
roadmap.
