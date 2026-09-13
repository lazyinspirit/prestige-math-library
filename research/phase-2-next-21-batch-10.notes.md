# Batch 10 scaffold notes — phase-2-next-21

Role: beta  
Label: batch-10  
Coverage: two differential-geometry A/B pairs, orders 511–514

## Controlling design and plan comparison

I read the complete DG-35 section at `research/plan-differential-geometry-track.md` lines 8758–9008 and the complete DG-36 section at lines 9010–9247. The dispatch's second locator for each pair (8938 and 9179) is the B-page subsection inside the same design, not a competing design. The complete section beginning at 8758 controls the symplectic pair; the complete section beginning at 9010 controls the Hamiltonian pair, because only the complete sections contain the conventions, proof traps, choice boundary, sources, A inventory, false statements, and B inventory.

I compared both complete designs with the current `research/plan-spec.json` entries and the batch task. There is **no page-level conflict**: IDs, titles, category, orders, companions, and every ordered `requires` array agree. The plan entries intentionally carry no item inventory at this scaffold stage; that absence is not treated as a mathematical conflict, and the complete design inventory supplies the owned items. If a conflict had existed, the current plan would have controlled.

The sign conventions are preserved globally:

- `lambda` is tautological and `omega_can=-d lambda`, hence `omega_can=sum dq^i wedge dp_i`.
- `iota_(X_H) omega=dH`.
- `{F,G}=omega(X_F,X_G)=X_G(F)=-X_F(G)`.
- Consequently `[X_F,X_G]=-X_{ {F,G} }`: `H -> X_H` is an antihomomorphism.

Meinrenken uses the opposite Hamiltonian contraction sign in portions of the source. Every imported calculation was converted as a unit to the library convention; isolated formulas were not mixed.

## Inventories and placement

All 122 selected IDs were checked unused before construction. No selected pair was changed and no page split was needed.

- Symplectic A: 41 canonical items plus 6 `fs-` items = 47.
- Symplectic B: 12 examples/counterexamples.
- Hamiltonian A: 45 canonical items plus 6 `fs-` items = 51.
- Hamiltonian B: 12 examples/counterexamples.

Items occur in prerequisite order. Definitions and linear algebra precede manifold notions; cotangent and compatible-structure material precedes Moser; relative primitives precede relative Moser, Darboux, and Weinstein; Hamiltonian fields precede brackets and mechanics; regular fibres and the period lattice precede Liouville–Arnold and monodromy. No B-page item is used as a prerequisite.

## Proof-dependency audit

I read the statements and complete proofs of the load-bearing published suppliers, rather than treating page membership as proof evidence. The examined interfaces include:

- `thm-alternating-forms-have-a-symplectic-normal-form` for even dimension and standard symplectic bases.
- `thm-non-negative-square-root-exists-and-is-unique` for the polar compatible-`J` construction; the new bundle lemma supplies the missing smooth parameter step before globalization.
- `thm-fundamental-theorem-for-nonautonomous-smooth-odes`, `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators`, and `thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval` for local, compact, and compact-support Moser flows.
- `thm-de-rham-homotopy-formula-for-a-smooth-homotopy` and the star-shaped Poincaré lemma for local and relative primitives.
- `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold` for relative and neighborhood theorems.
- `thm-a-regular-level-set-is-an-embedded-submanifold` and `prop-tangent-space-of-a-regular-level-set-is-the-kernel` for the dimension and tangent-space assertions on regular common levels.
- `thm-frobenius-local-coordinate-theorem` for the characteristic foliation used by the coisotropic normal form.
- `thm-fundamental-theorem-of-riemannian-geometry` for the geodesic-flow example.
- `thm-poincare-recurrence-for-finite-measure-preserving-systems` for recurrence on an invariant finite-volume region.

The plan's transitive page path to Frobenius is
`symplectic-manifolds-moser-stability-and-darboux-weinstein-theory -> the-exterior-derivative-and-cartan-calculus -> distributions-integral-manifolds-and-the-frobenius-theorem`.
The actual item dependency is explicit on `thm-local-normal-form-near-a-coisotropic-submanifold`; no integrability conclusion is inferred from smoothness alone.

The compact parametric-primitive lemma does **not** consume the global partition-of-unity theorem. Its proof strategy extracts a finite coordinate cover from compactness, uses the compact-set bump lemma finitely many times, fixes radial homotopy operators, and performs finite Mayer–Vietoris corrections. This preserves smooth parameter dependence without making a countable family of choices.

The Liouville–Arnold strategy includes the steps that Cannas only sketches: local fibration, smoothly varying full period lattice, normalized torus action, local Lagrangian section, exact closed lattice one-forms producing action variables, angle variables, removal of base–base terms, and factorization of fibre-constant Hamiltonians. It does not claim that an arbitrary Hamiltonian depends only on actions. Meinrenken §§6.1–6.3 supplies the complete argument.

## Choice boundary

The linear symplectic algebra, local Moser equation, compact finite Moser construction, Hamiltonian mechanics, recurrence application, and Liouville–Arnold local construction add no choice axiom.

Explicit `def-countable-choice` dependencies occur exactly where the current library suppliers require them:

- `thm-every-symplectic-manifold-admits-a-compatible-almost-complex-structure`: `AC_omega` is used to obtain the global auxiliary Riemannian metric.
- `lem-relative-poincare-primitive-near-a-submanifold`, `thm-symplectic-neighborhood-theorem`, and `thm-local-normal-form-near-a-coisotropic-submanifold`: `AC_omega` is inherited from the published tubular-neighborhood construction.

The Hamiltonian pair introduces no new choice dependency. No item reaches `deferred-set-theory-beyond-choice`, and no incompatible-axiom branch is joined.

## Source harvest and fetch evidence

Two independent full treatments support each A page, with a focused research proof for the spherical-pendulum B example:

1. Ana Cannas da Silva, *Lectures on Symplectic Geometry*, archived complete monograph: <https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf>.
2. Eckhard Meinrenken, *Symplectic Geometry (Fall 2024)*, archived complete 142-page lecture notes: <https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf>.
3. Martynchuk, Broer, and Efstathiou, *Hamiltonian Monodromy and Morse Theory*, complete research paper: <https://arxiv.org/pdf/1901.00705>.

For DG-35 I inspected Cannas Lectures 1–3, 6–9, and 12–13 and Meinrenken §§2.1–2.5, 3.1–3.4, 4.3–4.6, and 5.1–5.3. For DG-36 I inspected Cannas §5.3 and Lectures 18–20 and Meinrenken §§3.2–3.4, 4.1–4.2, and 6.1–6.4. The coverage file records exact locators and dispositions. Cannas's incomplete Arnold–Liouville sketch is retained honestly; Meinrenken supplies the complete action–angle proof. Meinrenken §6.4 mentions nontrivial spherical-pendulum monodromy without proving or computing it. Martynchuk–Broer–Efstathiou §3.1 supplies the explicit Chern-jump and solid-torus gluing computation, yielding nontrivial monodromy; its Theorem 2.7 proves the required index jump. The B example cites those external results openly and explains their use.

The coverage file records full-text fetch stamps and the archive recovery evidence. The original Cannas and Meinrenken URLs became unavailable; the complete texts were recovered through Wayback, and the monodromy paper's full text was fetched directly. No source drop applies to these pages.

## Published defect/debt evidence

One published axiom-strength presentation defect was observed but is not an actual proof prerequisite of the new compact-parametric-primitive item:

- Item: `thm-smooth-partitions-of-unity-exist-on-manifolds`.
- Publication state: published.
- Evidence: its statement does not state `AC_omega`, while proof step 2.1 makes a countable family of bump-function choices. Its declared transitive path is
  `thm-smooth-partitions-of-unity-exist-on-manifolds -> lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it -> thm-second-countable-implies-lindelof -> def-countable-choice -> def-axiom-of-choice`.
- Planned supplier: none in this run.
- Repair strategy for the canonical ledger: make the `AC_omega` hypothesis explicit in the statement/frontmatter and add a choice-free compact finite-cover corollary if that branch is wanted.
- Effect here: no block. The new lemma uses a finite construction and declares `lem-manifold-bump-for-a-compact-set-inside-an-open-set` directly instead of consuming the global theorem. Unrelated published consumer debt was not allowed to block the new supplier.

No other published defect was found that makes an actual declared prerequisite inadequate.

## Cross-batch dependencies

`research/phase-2-next-21-batch-10.cross-batch-dependencies.json` is `[]`. Every external supplier is already published. The Hamiltonian A page consumes the symplectic A page inside this same batch and strictly later in order, so it is not a cross-batch ledger row. The canonical frontier ledger refresh completed successfully.

## Readiness

All 122 items have Step 1 `ready` records. Each record contains its examined dependency IDs and source/proof-strategy evidence. Records were written in manifest prerequisite order. A correction to the compact primitive's dependency boundary was re-audited before its affected Moser consumer records were finalized. The first whole-run policy pass then exposed the design's non-existent shorthand dependency `thm-regular-level-set-theorem`; after reading the complete published interfaces, I replaced it with the exact pair `thm-a-regular-level-set-is-an-embedded-submanifold` and `prop-tangent-space-of-a-regular-level-set-is-the-kernel`. I also made the nonempty regular-fibre hypothesis explicit, matching those supplier interfaces and avoiding any hidden empty-fibre convention. I refreshed only the nine affected records in dependency order; the remaining 113 ready records were preserved unchanged. No item is marked escalated.

## Gate results

Checks were rerun after the final dependency repair. Other batches were live, so whole-run item counts are a final-snapshot count rather than an invariant of this batch.

| Check | Exit | Actual result |
|---|---:|---|
| `coverage-checklist.mjs ...batch-10.coverage.json --require-destination` | 0 | 2 A pages, 187 harvested result rows, 0 errors, 0 warnings. |
| final check-only `source-fetch-check.mjs` | 0 | 4/4 source occurrences fetch-verified and 4/4 resolved; 0 documented drops. |
| whole-run `manifest-deps.mjs research/phase-2-next-21-batch-*.pages.json` | 0 | 745 items, 0 normalized, 0 errors. |
| whole-run `content-policy.mjs --manifest-only research/phase-2-next-21-batch-*.pages.json` | 0 | 745 scoped items, 0 errors, 0 warnings. The earlier owned missing-ID error is the regular-level repair described above; the final run is clean. |
| `validate-plan.mjs research/plan-spec.json` | 0 | Declared page order is acyclic and consistent; no item cycle, forward reference, B-page dependency, or unresolved ID among 1,056 pages with item lists. 563 planned pages still have no item list. |
| `manifest-integrity.mjs --run phase-2-next-21` | 0 | 42 pages owed, 42 present in manifests; no scope drift. |
| `extcheck.mjs --quiet` | 0 | 55 pre-existing published Recorded-material warnings; every recorded-not-proved statement is a cited no-proof remark and every consequence is marked. No warning names an owned item. |
| owned readiness reconciliation | 0 | 122 items: 122 ready and hash-current, 0 escalated, 0 open, 0 decision/dependency mismatches. |
| `frontier-dependency-ledger.mjs refresh --run phase-2-next-21` | 0 | Canonical frontier ledger refreshed and deduplicated from the empty batch-10 input. |

There are no unresolved owned gate findings. These readiness records are construction evidence, not independent mathematical approval; owner/operator reconciliation and Step 3 remain required.
