# Batch 27 notes — `em-electrostatic-multipoles` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09 (UTC records 2026-10-08T23:14).
Scope: exactly one A/B pair, A page order **333**, B page order **334**, category
`classical-electromagnetism`, library `physics`. Final inventory: **5 A items + 2 B items**
(the seven design items; no new prerequisite items were required). Files written by this
batch: the manifest (`research/physics-em-sr-40-2026-10-08-batch-27.pages.json`), the
coverage file (`...-batch-27.coverage.json`), the cross-batch dependency input
(`...-batch-27.cross-batch-dependencies.json`), seven `step1-<item>` readiness records, this
note, and the tool-refreshed unified ledger. No item file, page, plan, published item, engine
state or verdict was edited. The binding owner direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` was read first; its
relevant corrections are checked under "Owner-direction interfaces".

## Design vs plan

Design section `research/plan-classical-electromagnetism-track.md` L1807 ("Electrostatic
multipoles", quoting `proposed-inventory.json` and, "read together with the full required
sources", `definition-contracts.md#def-em-electric-moments`, `core-conditional-proofs.md#K4`,
`mathematical-prerequisites.md#M06` and `worked-example-verifications.md#X2`). Compared with
`research/plan-spec.json` orders 333/334: page ids, kinds, category, library `physics`,
titles, companion links, orders and the declared `requires`
(`em-boundary-and-spectral-prerequisites`, `em-electrostatics-in-vacuum`) agree exactly, and
the reserved inventories (5 A, 2 B) are preserved. **No page-metadata plan conflict.** The
design's own `dependency_level` labels were computed over a pre-run dependency set; under the
run's in-run convention the seven computed levels are 16, 17, 18, 17, 18 (A) and 18, 18 (B)
in manifest order, and `item-dependency-levels check --run` confirms them. The one
page-metadata addition this batch makes is the published `requires` entry
`darboux-lhopital-and-taylor` (finding 1); it is a manifest overlay change for the owner to
sync, exactly as batches 24-25 recorded their own additions.

## Inventory decisions (recorded, item by item)

The seven design items keep their promised content with exact statements and complete proof
strategies; no new local prerequisite item was needed because every required mathematical
input is already scaffolded in this run (batch 13/16/18 mathematics) or published on disk.
No claim was dropped and none weakened.

1. **`def-em-electric-moments`** (design item; level 16). Kept the design dep
   `def-em-sources`; added the exact formulation suppliers `def-em-lab-geometry`,
   `def-em-si-conventions`, `def-em-electrostatic-regime` (fixed-time reading and stationary
   point-charge dictionary) and the Lebesgue interface
   (`def-countable-choice`, `def-integral-over-a-measurable-set`,
   `def-integrable-real-and-complex-functions-and-their-integrals`, `def-l-one-of-a-measure`,
   `def-measure-null-set-and-almost-everywhere`, `def-metric-ball`, `def-euclidean-inner-product`,
   `def-finite-sum`, `lem-finite-sum-laws`, `thm-linearity-of-the-lebesgue-integral-on-l-one`,
   `thm-integral-triangle-inequality`, `thm-monotonicity-of-the-integral`,
   `prop-order-and-scalar-rules-for-the-nonnegative-integral`,
   `thm-the-lebesgue-integral-respects-almost-everywhere-equality`). The definition states
   the absolutely continuous branch (Q, p, Cartesian moments M^{(l)}, traceless quadrupole
   Q_ij = ∫(3y_i y_j − |y|²δ_ij)ρ, units C m^l), the general locally integrable branch with
   a finite absolute moment, and the finite stationary point-charge branch (finite sums),
   with absolute convergence and Σ_i Q_ii = 0 displayed. The finite-sum branch is required
   by both B examples, which the bare density contract of the design would not have
   covered; it is part of the same definition, not a new item.
2. **`pthm-em-moment-origin-change`** (design item; level 17). Kept the design dep
   `def-em-electric-moments`; added the polynomial-expansion and integration layer. The
   statement gives Q^{(b)}=Q, p^{(b)}=p−Qb, the full subset expansion of every Cartesian
   moment (with the l=2 instance M_ij−b_ip_j−b_jp_i+b_ib_jQ), and the exact traceless-quadrupole
   transformation with the invariance clause under Q=0, p=0 (Landau-Lifshitz §41). Both the
   density and finite-sum branches are covered, since the B examples use the latter.
3. **`pthm-em-electric-dipole-torque`** (design item; level 18). Kept the design deps
   `def-em-electric-moments` and `post-em-lorentz-coupling`; added
   `def-em-electromagnetic-tensor`, `def-em-relativistic-worldlines-frames`,
   `def-em-lab-geometry`, `def-em-si-conventions`, `def-em-fields` and the integral/cross-product
   layer. The statement makes the matter model explicit (prescribed static distribution, only
   the external field acts, no self-force/back-reaction), gives F=QE_ext(0)+R_F with
   |R_F|≤La‖ρ‖₁ and τ=p×E_ext(0)+R_τ with |R_τ|≤La²‖ρ‖₁ for a Lipschitz external field, the
   reference-point shift τ_o=τ−o×F, and the promised two-test-charge idealisation (mutual
   interaction and self-fields excluded) with p=qd, |R_F|≤2|q|La, |R_τ|≤2|q|La².
4. **`pthm-em-electric-dipole-expansion`** (design item; level 17). Kept the design deps
   `pthm-em-coulomb-solution`, `def-em-electric-moments`, `lem-em-coulomb-dipole-remainder`;
   added the potential/units/formulation items and the integration layer. The statement proves
   the uniform expansion φ(x)=Q/(4πε₀r)+p·x/(4πε₀r³)+R(x), |R(x)|≤16a²‖ρ‖₁/(4πε₀r³) for
   r≥2a, the leading-term corollary, the physical reading through the L¹ branch of the
   Coulomb solution, and the explicit exclusion (no derivative estimate for R, no field
   expansion), matching the M06 scope warning.
5. **`pthm-em-electric-general-multipoles`** (design item; level 18). Kept the design deps
   `pthm-em-electric-dipole-expansion`, `thm-em-spherical-multipole-basis`,
   `lem-em-spherical-harmonic-basis-and-addition`, `lem-em-ball-poisson-series-boundary-convergence`;
   added `lem-em-convergent-legendre-kernel` (Legendre coefficient extraction), the Taylor
   coefficient items (`def-taylor-polynomial-and-remainder`, `lem-taylor-polynomial-derivatives`),
   the potential/units/formulation items and the measure layer. The statement gives the
   exterior all-order spherical series with the spherical moments q_lm, the geometric tail
   bound, the identification of the degree-0/1 terms with the monopole and dipole terms and
   the explicit remainder, the degree-2 traceless-quadrupole term
   n_iQ_ijn_j/(8πε₀r³), and termwise differentiation/C^∞ with the field series.
6. **`ex-em-quadrupole-symmetry`** (design B item; level 18). Charges +q at ±ae₁ and −q at
   ±ae₂; verified finite sums Q=0, p=0, all odd moments 0, M^{(2)}=diag(2qa²,−2qa²,0),
   Q_ij=diag(6qa²,−6qa²,0), trace 0, reference-point independence via clause (d) of the
   origin-shift theorem — exactly the promised X2 value.
7. **`ex-em-two-charge-dipole`** (design B item; level 18). Exact two-charge potential and
   distributional equations (sum of the two point-charge identities), moments Q=0, p=qd,
   even moments 0, M^{(2k+1)}=2q(d/2)^{⊗(2k+1)}, vanishing traceless quadrupole, and the
   direct two-kernel remainder bound |R(x)|≤32|q|a²/(4πε₀r³)=8|q|a²/(πε₀r³) for r≥2a. The
   scope records explicitly that the L¹-density dipole theorem is *not* applied to the
   singular pair; the identity is proved directly, as the design's K4/X2 require.

## Dependency verification (actual transitive uses, not declared edges)

All dep targets resolve: published imported items on disk, plus the in-run suppliers
`lem-em-coulomb-dipole-remainder` (batch 13), `lem-em-spherical-harmonic-basis-and-addition`,
`lem-em-convergent-legendre-kernel`, `lem-em-ball-poisson-series-boundary-convergence`
(batch 16), `thm-em-spherical-multipole-basis` (batch 18), the batch-23 primitives
(`def-em-lab-geometry`, `def-em-si-conventions`, `def-em-sources`, `def-em-fields`,
`post-em-lorentz-coupling`, `def-em-electromagnetic-tensor`,
`def-em-relativistic-worldlines-frames`), `def-em-electrostatic-regime` and
`pthm-em-coulomb-solution` (batch 25). Interfaces were read on disk; the checks are recorded
per consumer in the cross-batch input, which carries 34 rows (2 page rows and 32 item rows),
one per declared in-run cross-batch edge, and `frontier-dependency-ledger refresh --run`
reports no orphaned review for this batch.

Points checked in particular:

- **`thm-em-spherical-multipole-basis`**: its clause (a) is the whole exterior series with the
  tail bound ‖ρ‖₁a^{N+1}/(r₀^{N+2}(1−a/r₀)) and the explicit statement that the degree-0 and
  degree-1 terms are the Coulomb and dipole terms with the remainder bound of
  `lem-em-coulomb-dipole-remainder`; its clause (b) supplies termwise differentiation. The
  scaling by (4πε₀)⁻¹ and the hypotheses (real L¹ density, real orthonormal basis with
  dσ(S²)=4π) were checked against the batch-27 statements.
- **`lem-em-coulomb-dipole-remainder`**: exact hypotheses (real L¹ density vanishing outside
  |y|≤a, r≥2a) and the constant 16 were checked; the batch-27 theorem only scales the
  identity and does not differentiate it (the design's explicit warning).
- **`pthm-em-coulomb-solution`**: clauses (a), (c), (d) read on disk; the L¹ branch supplies
  −ΔT_φ=T_{ρ/ε₀} and the point-charge branch supplies the individual distributional
  identities summed in the B example by linearity of distributional differentiation
  (`thm-distributional-differentiation-is-continuous-and-commutes`).
- **`post-em-lorentz-coupling`**: only clause (i) at zero coordinate velocity and clause (ii)
  as the external-field part of the continuum coupling are used; the self-field exclusion and
  the non-adoption of the exact nonrelativistic coordinate law are respected. The sign check
  m dU^i/dτ=q'F^{i0}U₀=q'(−E_i/c)(−c)=q'E_i uses the tensor convention F^{i0}=−E_i/c of
  `def-em-electromagnetic-tensor`.
- **`def-em-electrostatic-regime`**: the fixed-time reading (d) and the point-charge
  dictionary (e) are used throughout; no time dependence or frame change is involved.
- **Axioms.** AC_ω is declared on the two theorems and the two examples that inherit the
  Lebesgue/distribution interfaces; the moment definition declares it too. The pure finite-sum
  example `ex-em-quadrupole-symmetry` uses no Choice axiom. No use of Recorded results and no
  `deferred-set-theory-beyond-choice` path: a manual transitive closure over the seven items
  (expanding in-run manifest deps and on-disk `deps`/`justified_by` frontmatter) visited 1443
  items with 0 unresolved ids, 0 `proved_here: false` items and 0 `external_refs` carriers on
  2026-10-09.
- No missing, circular, forward or inadequate dependency was found. No design dep was removed;
  the design lists were extended only with suppliers the statements and proofs genuinely use.

## Owner-direction interfaces checked

- The fifth reconciliation's EM conventions (SI units, ε₀=(μ₀c²)⁻¹, measured μ₀) are consumed
  as stated; no numerical value of μ₀ is asserted.
- The sixth reconciliation's scope (singular sources adopted separately; no products of
  distributions; L¹-loc volume parts) is respected: the two-charge example keeps every
  distributional identity in the point-source form of the Coulomb solution and never forms a
  product of distributions; the two-test-charge clause of the torque theorem is an explicitly
  stated idealisation with mutual interaction excluded.
- The design's M06 warning ("does not justify differentiation of the remainder without a
  derivative estimate") is carried in the scope clause of `pthm-em-electric-dipole-expansion`;
  the general multipoles theorem obtains differentiability of the potential only from the
  supplier's proved termwise-differentiation clause.
- All statements are conditional on explicit matter/regime assumptions; no empirical claim,
  measurement or statistical content appears anywhere on the pair, and the examples' scope
  clauses state that no self-energy is claimed.

## Findings for owner reconciliation

1. **One page-requires addition (this batch's manifest).**
   `darboux-lhopital-and-taylor` (order 80.99 < 333, published `P` page) homes
   `def-taylor-polynomial-and-remainder` and `lem-taylor-polynomial-derivatives`, consumed by
   `pthm-em-electric-general-multipoles` to extract P₂(z)=(3z²−1)/2 from the generating
   identity of `lem-em-convergent-legendre-kernel`. `frontier-item-gate --tool validate-plan`
   reported it as an undeclared prerequisite before the addition; the manifest overlay now
   declares it and the gate passes. The owner may sync `plan-spec.json`.
2. **Finite point-charge branch added to the moment definition (recorded interface growth).**
   The design contract only described an L¹ density with compact support plus an unbounded
   absolutely integrable branch, but both B examples are finite point-charge configurations
   whose moments are finite sums. The definition now has an explicit clause (c) for a finite
   system of stationary point charges, tied to the fixed-time reading of the static regime.
   This is an addition to the definition's content (recorded here), not a change to any
   published interface.
3. **No new prerequisite pair was needed.** The pair's mathematical closure is already
   scaffolded: batches 13, 16 and 18 host the dipole remainder, spherical-harmonic basis,
   addition theorem, ball Poisson series, Legendre kernel and the exterior spherical multipole
   theorem. The 100-item A-page cap is not approached (5 A items).
4. **Design dep reconciliation (recorded).** The design's reservation for
   `pthm-em-electric-general-multipoles` lists `lem-em-ball-poisson-series-boundary-convergence`
   among its deps; that lemma is the interior/ball-boundary branch of the spherical machinery
   and is not used by the exterior expansion argument. It is retained in `deps` as the
   design requires, and the cross-batch evidence row states honestly that it is cited context,
   not a used step of the exterior proof. If the owner prefers strict minimality, the edge can
   be dropped without changing the claims.
5. **No published defects found.** The published suppliers read for this batch (Taylor
   coefficient items, Lebesgue interface, distribution interface, exterior algebra items,
   spherical-frame items) were read with their hypotheses and match this page's uses.
6. **Run-level state observed, not this batch's.** The run is concurrent; the following
   states were observed at the final rechecks (2026-10-09, while the seven batch-27 records
   were current) and are not attributable to batch 27: (a) `item-dependency-levels check --run`
   reports 14 `empty scaffold inventory` rows for the still-empty pages of batches 30,
   34-36 and 38-40; (b) `frontier-item-gate --tool extcheck -- --manifest-only` cannot start
   (`Invalid or empty current page in ...batch-30.pages.json`). Mid-run, a `validate-plan`
   re-run transiently reported 4 errors naming batch-26 pages
   (`em-electrostatic-boundaries-and-conductors[-examples]`: a b-leaf edge into published
   examples pages and the matching undeclared-prereq pair); the same gate exited 0 both
   before batch-26's items appeared and at the final recheck, in each case with 23
   `redundant-prereq` warnings, none naming a batch-27 page. These concurrent-writer
   observations belong to the owner/dispatcher for the affected batches.

## Sources (three full treatments, stamped 2026-10-09)

1. **D. J. Griffiths**, *Introduction to Electrodynamics*, 3rd edition, Prentice Hall 1999
   (textbook). Full scanned PDF (596 pp., 13484424 bytes, sha256_16 ab7b67a3f6d60049). Read:
   §3.4.1 pp. 146-149 (multipole expansion (3.91)-(3.96), Example 3.10), §3.4.2 pp. 149-151
   (monopole/dipole terms (3.97)-(3.101), point charges, physical dipole), §3.4.3 pp. 151-152
   (origin shift p→p−Qa), §4.1.3 pp. 163-165 (torque N=p×E (4.4), force (4.5) and the
   reference-point shift).
2. **D. Tong**, *Electromagnetism*, Cambridge Part II lecture notes, 2026 printing
   (lecture-notes). Author-hosted full-text PDF (236 pp., 1882418 bytes, sha256_16
   b99b41156dfe6cd9). Read: §2.2.2 pp. 18-19 (the physical dipole), §2.2.3 pp. 20-22 (far-field
   expansion (2.22), monopole/dipole, traceless quadrupole and its potential term), §2.3.2
   pp. 28-29 (force between two dipoles, disposed out of scope).
3. **L. D. Landau, E. M. Lifshitz**, *The Classical Theory of Fields*, 3rd revised English
   edition, Pergamon 1971 (monograph). Full-text PDF (387 pp., 11900733 bytes, sha256_16
   57de03326f8ebe4a). Read: §40 pp. 95-98 (dipole moment (40.3), origin independence, potential
   and field (40.7)-(40.11)), §41 pp. 97-100 (quadrupole moment (41.3)-(41.4), origin
   independence, general spherical-harmonic multipoles (41.9)-(41.13); Gaussian units
   re-expressed in SI).

All six source rows (three sources × two pages) were downloaded and stamped by
`source-fetch-check --stamp` on 2026-10-09 (6 newly stamped) and check mode passes 6/6
resolved. The three local cached full texts used for the reading have sha256_16 values
identical to the stamps (ab7b67a3f6d60049 / b99b41156dfe6cd9 / 57de03326f8ebe4a), so the
sections read are from the exact bytes the stamps certify. Coverage: 29 harvested results,
every source heading disposed (included/inline/out-of-scope with reasons); no deferrals.

## Checks run (actual results)

- `manifest-deps` over all run manifests: 399 items, 0 normalized, 0 errors.
- `content-policy --manifest-only` over all run manifests: 399 scoped items, 0 errors,
  0 warnings.
- `item-dependency-levels check --run`: the seven batch-27 items compute 16, 17, 18, 17, 18
  (A) and 18, 18 (B), matching their labels; the remaining 14 errors are `empty scaffold
  inventory` rows for the empty pages of batches 30, 34-36 and 38-40, and no error names a
  batch-27 page or item.
- `physics-check --run ... --plan research/plan-spec.json`: 0 errors, 399 items checked.
- `coverage-checklist --require-destination` on batch 27: 2 pages, 29 harvested results,
  0 errors, 0 warnings.
- `source-fetch-check --coverage ... --stamp`, then check mode: 6/6 fetch-verified (6 newly
  stamped), 6/6 resolved.
- `step1-decisions record` x7 (all `ready`), then two records refreshed after the
  clarification of `pthm-em-electric-dipole-expansion` whose bytes two items depend on;
  `check --run` reached 399 items, 399 ready with no batch-27 item unresolved (mid-run it had
  380 ready while other owners were still writing; a still later recheck showed 2 batch-37
  items transiently stale while their owner rewrote them, again none of batch 27).
- `manifest-integrity --run`: 80 pages owed, 80 in the manifests, no scope drift.
- `drift-review-check --run`: 40 pages reviewed, 0 spec edits applied, no blocked edges;
  52 same-category requires edges checked, every owed A and B page strictly above 95%
  published-or-earlier-in-run.
- `frontier-dependency-ledger refresh --run`: refreshed; the batch-27 input carries 34 rows
  (2 page rows and 32 item rows), one per declared in-run cross-batch edge (19 item edges to
  batch 23, 7 item edges to batch 25, 3 to batch 16, 1 to batch 18, 1 to batch 13, 1 to
  batch 1, plus the 2 page rows to batches 18 and 25), with no orphaned review; `--require-reviewed` still fails run-wide only because batches 26, 30,
  34-40 have supplied no input.
- `frontier-item-gate --tool validate-plan`: exit 0 immediately after the manifest overlay was
  finalised and again at the final recheck ("declared page order is acyclic and consistent;
  no item-level cycles, forward references, B-page dependencies, or unresolved ids"), with 23
  `redundant-prereq` warnings and none naming a batch-27 page (a mid-run re-run transiently
  reported the 4 batch-26 errors of finding 6).
- `frontier-item-gate --tool extcheck -- --manifest-only` and the `fwdcheck` attempt (the
  frontier wrapper accepts no `--manifest-only` flag for fwdcheck) cannot run at scaffold
  stage while batches 30 and 34-40 have empty inventories and no item files exist (run-level
  limitation, as in batches 21-25). Substitute evidence: the manual transitive closure of the
  Checks section (1443 items, 0 unresolved, 0 unproved, 0 external references).

## Honest uncertainty

- The seven items are scaffolded with complete statements and proof strategies and exact
  cited uses, but they are not authored item files and have not received independent review;
  Step 3 provides that. Delicate points to check line by line at authoring time: the subset
  expansion and termwise integration in `pthm-em-moment-origin-change`; the vector-norm
  estimates and the zero-velocity reduction in `pthm-em-electric-dipole-torque`; the scaling
  step and the use of the L¹ branch of the Coulomb solution in
  `pthm-em-electric-dipole-expansion`; the Legendre coefficient extraction (P₂ from the
  generating identity) and the addition-theorem algebra in
  `pthm-em-electric-general-multipoles`; the finite-sum moment computations and the
  two-kernel remainder estimate in the B examples.
- The design's dependency lists were written before the exterior-spherical supplier was
  scaffolded; the reconciliations recorded above are this scaffolder's reading of the actual
  uses and must be re-verified against the authored supplier texts at Step 3, not treated as
  certification.
- The point-charge moments and distributional identities are stated as facts about the
  explicitly specified point-source objects; they are not claims that the framework's
  source postulates cover singular sources beyond the declared point class.
