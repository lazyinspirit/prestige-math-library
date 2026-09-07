# frontier-33 — group Alpha `b`, Step 3 scaffold review

This review covers batches `2` and `12`. I read both A/B manifests, both
coverage files, both notes files, the FA-7 and PDE-4 design sections (including
their additions), and the current `research/plan-spec.json`. I checked the
claims as written against the complete relevant source passages and exact
published dependency statements. The review changed only this group's
in-flight scaffold, decisions, and required report/verdict artifacts.

## Verdicts

| Batch | A page | B page | Inventory | Verdict |
| ---: | --- | --- | ---: | --- |
| 2 | `dual-spaces-adjoint-operators-and-annihilators` | `dual-spaces-adjoint-operators-and-annihilators-examples` | 31 A + 10 B | `insufficient` |
| 12 | `maximum-principles-harnack-and-liouville-in-rn` | `maximum-principles-harnack-and-liouville-in-rn-examples` | 26 A + 10 B | `sufficient` |

## Batch 2 — dual spaces, transposes, and annihilators

The mathematical route is coherent apart from one published-home contract
defect. The A page runs from the continuous dual and annihilators through
quotient/subspace duality, the Banach transpose, exact kernel/range identities,
the closed-range theorem, biduality/reflexivity, and the classical sequence
duals. The repaired local weak-star definition, finite-coordinate separation
lemma, and bipolar-closure theorem now precede the kernel/range theorem, so
the identity
`(ker T)^perp = closure_sigma(X*,X)(ran T*)` does not use FA-8 forward and is
not incorrectly strengthened to norm closure. The closed-range proof retains
the Banach and dependent-choice hypotheses used by the Baire/open-mapping
route, and the quotient zero-subspace cases and real/complex pairing
conventions are explicit.

The source route is complete: Bühler--Salamon §§1.3.1--1.3.2,
Corollaries 2.57--2.58, §§4.1.1--4.1.3, and the weak-star repair passages
(Lemma 3.6, Example 3.9, Theorem 3.12, Lemmas 3.13--3.14, and
Corollaries 3.25--3.26), together with Brezis §§1.3 and 2.5--2.7. The coverage
records full-fetch hashes for both PDFs.

Step 3 made the licensed backward-prerequisite repair for the MT-20 seam:
the B page now directly requires the earlier published page
`radon-measures-and-the-riesz-markov-kakutani-theorem` (order `288.039`). This
supplies the RMK dependency used by `ex-evaluation-functionals-and-point-masses`
and `rem-riesz-representation-name-split`; no RMK result was duplicated.

The pair is nevertheless not authorable under the current dependency policy.
The exact missing admissible prerequisites are:

1. The real/complex definitions of `c_0` and `ell-infinity`, needed by
   `lem-finite-truncations-are-dense-in-c0-and-ell-one`,
   `thm-dual-of-c0-is-ell-one`, and
   `thm-complex-dual-of-ell-one-is-ell-infinity`. The exact existing result is
   `def-c-zero-and-ell-infinity`, sourced to Hajlasz, *Functional Analysis*,
   §10.5, but its published home is the B page
   `geometric-hahn-banach-and-convex-separation-examples`.
2. Norm closedness of `c_0` in `ell-infinity`, needed by
   `cex-transpose-range-need-not-be-norm-dense`. The exact existing result is
   `lem-c-zero-is-a-closed-subspace-of-ell-infinity`, from the same Hajlasz
   section and the same published B home.

Because B pages must be leaves, the populated-plan validator reports three
forbidden edges to the definition and one to the closedness lemma. Cloning
either published item would violate the no-duplicate contract. Rehoming the
published items, or an explicitly adjudicated equivalent contract repair, is
therefore required before authoring. This is the exact reason for the
`insufficient` verdict; no mathematical claim is being discarded to clear the
gate.

The deferred and out-of-scope harvest is otherwise sufficient. Weak/weak-star
comparison goes to FA-8, Hilbert adjoints to FA-13, Banach-space dual
pathologies to FA-11, and unbounded adjoints to FA-21; the general two-operator
factorization and sum/intersection annihilator variants are not premises of an
assigned item.

## Batch 12 — maximum principles, Harnack, and Liouville

The PDE-4 pair is sufficient. Its dependency order supports the classical
sub/superharmonic definitions, weak and strong comparison principles, Hopf's
lemma with the interior-sphere and strict-extremum hypotheses, local and
compact Harnack inequalities, monotone Harnack convergence, one-sided
Liouville, the bounded isolated-singularity theorem, and the unbounded-domain
limsup principle. The B page tests all material boundaries: sign direction,
boundedness/infinity control, connectedness, Hopf geometry and strictness,
one-sided boundedness, and removability.

The proof routes preserve the stated domains and endpoints. The Poisson
replacement uses only smooth sphere data and an explicit kernel; the removable
singularity proof treats `n=2` logarithmically and `n>=3` by the Newtonian
radial barrier; compact Harnack uses a finite interior-ball chain; and the
infinity principle applies the bounded theorem to truncations. Hunter
§§2.1.1--2.4, Gantumur §§5--6, §8, and §11, and Schmidt §2.4 provide the exact
source support, and all three PDFs have current full-fetch hashes.

The open-mapping disposition was corrected in the Step-3 recheck. Hunter's
unnumbered claim that a nonconstant harmonic function is open is, under the
source's connected-domain hypotheses, a direct consequence of the strong
maximum principle; it does not need an additional
unique-continuation or analyticity input. The assigned remark does not state
the claim, and no assigned item uses it, so coverage deliberately defers its
later treatment to `poisson-problems-and-interior-harmonic-estimates`.

## Scope decisions

After the final refresh there are `27` current declines. Twenty-six are
`stands`: every deferred result has a present destination and is not used by
an assigned item, while each out-of-scope result is unnecessary for the chosen
route. One row is `owner-decision`: Gantumur Theorem 28 was assigned by the
design to the already-published PDE-3 predecessor
`harmonic-functions-and-mean-values-in-rn` (order `458.003`), where it is
absent. Batch 12 does not use that normal-family theorem, but adding it to a
published page is outside this group's authority. The exact decision and
evidence are recorded in
`research/frontier-33-alpha-b-scope-decisions.json`; its required check passes
with `27` current declines and `0` errors.

## Checks

- `manifest-deps` reports `77` assigned items, `0` normalized, and `0` errors.
- `coverage-checklist --require-destination` reports `88` batch-2 and `57`
  batch-12 harvested results, with `0` errors and `0` warnings.
- `source-fetch-check --coverage` reports both coverage files fetch-verified;
  their five source records carry current hashes.
- `content-policy --manifest-only` reports `77` scoped items, `0` errors, and
  `0` warnings.
- `splice-plan --dry-run` splices batch 12 with `36` new items. Batch 2 is
  withheld only because its newly declared backward RMK edge awaits the
  engine's accepted-requires splice protocol; this report does not take over
  that transition.
- A temporary populated copy of the current plan, containing both assigned
  manifests and the licensed RMK edge, reports exactly the four batch-2
  B-leaf errors named above. It reports no missing, forward, cyclic, or
  undeclared prerequisite in either assigned pair; batch 12 introduces no
  error.
- `scope-decisions check --run frontier-33 --group b` reports `27` current
  declines and `0` errors.

The next action is engine routing: batch 12 is ready for authoring, while batch
2 needs the recorded published-home/contract decision before authoring can
begin. No gate is claimed passed where its command failed or withheld.
