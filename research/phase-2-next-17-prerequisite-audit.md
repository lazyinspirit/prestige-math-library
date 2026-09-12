# Prerequisite audit for the conditional 17-pair frontier

Date: 2026-09-12

Owner condition: add AT-8 and RL-13 only if neither has a substantial unmet
prerequisite, then integrate both into the active Phase-2 frontier.

## AT-8 — orientations, duality, and separation

`orientations-poincare-lefschetz-and-alexander-duality` requires exactly:

- published `relative-homology-excision-and-mayer-vietoris`; and
- `cup-cap-cross-products-and-cohomology-rings` (AT-7), already selected and
  ordered earlier in the same frontier.

Its planned 28 A items and 10 B items build the topological-manifold,
orientation, compact-support, duality, degree, separation, simplicial
approximation, and Lefschetz interfaces on those inputs. No later smooth
manifold page is used. The only unpublished prerequisite is therefore an
earlier selected pair, not an additional unmet build.

Decision: **eligible for the expanded frontier**, with in-run dependencies
enabled and AT-7 preceding AT-8. AT-8 then supplies the three exact degree
interfaces required by `the-de-rham-theorem-and-degree`.

## RL-13 — affine Lie algebras and loop extensions

The old page requirements named two empty DG pages. They are stale after the
completed Lie-owned finite supplier expansion. Exact interface inspection
shows RL-13 needs:

- the GCM realization, Serre presentation, real-root conventions, and
  invariant symmetrizable form from published
  `kac-moody-algebras-from-generalized-cartan-matrices`; and
- finite-dimensional semisimple Lie algebras, Killing-form invariance and
  nondegeneracy, Cartan/root/string structure, positive/simple roots, finite
  Weyl data, and normalized root vectors from published
  `finite-weyl-invariants-bruhat-and-kostant-harmonics`.

The latter pair's 29 item files had retained draft metadata after its completed
run; the separate state-repair receipt records their evidence-backed restoration
to published. Its page requirements were also reconciled to the actual eight
published owners of its external item dependencies, removing the obsolete DG
labels.

The highest root used in
`lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root` does
not require a new page: the finite positive-root set and supplied root-string
argument give its existence and uniqueness locally in that lemma. This is a
bounded local proof obligation inside RL-13, not a substantial prerequisite.
Kleshchev §§6–8 and Perrin §§12 and 14 are already fetch-stamped full
treatments for the 15 A and 6 B planned items.

Decision: **eligible for the expanded frontier**. Its canonical A-page
requirements are now the two published Lie suppliers above. RL-13 is ordered
before `the-weyl-kac-character-formula`, whose A page now requires RL-13 for
the affine root list, multiplicities, loop/GCM comparison, and affine Weyl
semidirect product.

## Integrated frontier rule

The expanded run must use a fresh run namespace with in-run dependencies
enabled. Its ordering must include

`AT-7 -> AT-8 -> de Rham` and
`RL-13 -> Weyl–Kac`.

Existing scaffolds are imported unchanged into the fresh run; only the two new
pairs are newly scaffolded. Run-specific readiness and hashes must be recorded
afresh rather than treating old receipts as aliases.

