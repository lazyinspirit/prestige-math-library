# Step 3a reader report — batch 37

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Batch: `37`

## Opened inventory

Assigned pages:

- `library/advanced-qft-and-supersymmetry/qftx-p-form-symmetries.md`
- `library/advanced-qft-and-supersymmetry/qftx-p-form-symmetries-examples.md`

Assigned items, read in prerequisite order:

- `items/def-aqft-p-form-global-symmetry.md`
- `items/pthm-aqft-p-form-charge-characters.md`
- `items/ex-aqft-maxwell-magnetic-one-form-charge.md`
- `items/ex-aqft-s3-zero-form-representation-labels.md`

Direct item suppliers opened:

- `items/def-aqft-topological-defect.md`
- `items/def-countable-choice.md` (pinned imported mathematics)
- `items/def-qftx-principal-connection-form.md`
- `items/lem-qftx-principal-curvature-cartan-bianchi.md`
- `items/thm-stokes-theorem-for-smooth-singular-chains.md` (pinned published mathematics)

Mathematical support statements opened for the connection and curvature derivations:
`items/def-qftx-lie-algebra-valued-form-bracket.md`,
`items/def-principal-connection-and-vertical-curvature.md`,
`items/def-smooth-principal-g-bundle.md`,
`items/def-lie-group.md`,
`items/thm-the-tangent-space-at-the-identity-is-a-lie-algebra.md`,
`items/def-exponential-map-of-a-lie-group.md`,
`items/thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields.md`,
`items/def-conjugation-and-the-adjoint-representation-of-a-lie-group.md`,
`items/prop-adjoint-is-a-smooth-lie-group-representation.md`,
`items/def-differential-of-a-smooth-map.md`,
`items/thm-chain-rule-for-differentials-of-smooth-maps.md`,
`items/thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism.md`,
`items/thm-the-differential-of-adjoint-is-ad.md`,
`items/def-adjoint-representation-of-a-lie-algebra.md`,
`items/def-left-maurer-cartan-form.md`,
`items/def-lie-derivative-of-a-tensor-field.md`,
`items/def-lie-derivative-of-a-differential-form.md`,
`items/thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket.md`,
`items/def-lie-bracket-of-smooth-vector-fields.md`,
`items/def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative.md`,
`items/thm-the-exterior-derivative-commutes-with-pullback.md`, and
`items/thm-the-exterior-derivative-squares-to-zero.md`.

Page prerequisites opened:

- `library/advanced-qft-and-supersymmetry/qftx-defects-and-topological-operators.md`
- `library/quantum-field-theory-mathematics/qftx-gauge-geometry.md`
- `library/real-analysis/countability-and-uncountability.md` (pinned published mathematics)
- `library/differential-geometry/the-de-rham-theorem-and-degree.md` (pinned published mathematics)

Run evidence opened: `research/math-imports.json`,
`research/advanced-qft-supersymmetry-build-2026-10-23-batch-37.pages.json`, and
`research/advanced-qft-supersymmetry-build-2026-10-23-batch-37.proof-contracts.json`.
The manifests and contracts were used for navigation and source-mirror checks,
not treated as proof verdicts.

Literature passages checked:

- Gaiotto, Kapustin, Seiberg, and Willett, *Generalized Global Symmetries*,
  §3, PDF pp. 11–12 (fusion and exchange argument); §4.1, PDF pp. 14–15
  (magnetic one-form surface operator and line charge); Appendix F, PDF
  pp. 70–71 (torsion-flux commutator between electric and magnetic actions).
  <https://arxiv.org/pdf/1412.5148>
- Bhardwaj et al., *Lectures on Generalized Symmetries*, §§2.2.1–2.2.2,
  PDF pp. 12–20 (exchange, charges, characters and Pontryagin dual); §2.1,
  PDF pp. 5–11 (zero-form representation-valued action).
  <https://arxiv.org/pdf/2307.07547>
- Cheeger and Simons, *Differential Characters and Geometric Invariants*,
  §I, PDF pp. 2–3 (cycle homomorphism and curvature-boundary condition,
  after the stated (2\pi) normalization).
  <https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf>

## Review and repairs

- `def-aqft-p-form-global-symmetry`: the group, support dimensions, fusion,
  crossing data, effectiveness, discrete backgrounds and differential-character
  background formulation are explicit. The topological-defect supplier provides
  the stated support and correlator-invariance convention. No defect identified.
- `pthm-aqft-p-form-charge-characters`: step 2.1 originally inferred equality
  of crossing automorphisms from equality of correlators. The p-form definition
  states these separately, and its effectiveness condition requires both action
  maps and correlator actions to agree. The local exchange alone therefore did
  not establish the exact premise used by effectiveness. I repaired the
  Statement and `[A1]` to require the model-supplied exchange transport to
  identify the composite crossing bijections and background maps on the full
  admitted domain; step 2.1 now invokes that condition for the maps and
  topologicality for correlator actions. The physical scope and the batch
  manifest mirror were updated. The exchange diagram was checked: its two
  objects, fusion arrows and correlator comparison agree with the text; the
  proof remains independent of the diagram.
- `ex-aqft-maxwell-magnetic-one-form-charge`: the fixed external line could
  have any integer charge, including zero, so the originally admitted data did
  not by themselves witness an effective (U(1)) action as required by the
  p-form definition. I made the full model's admitted probe spectrum explicit:
  it includes nonzero genuine external line probes of every integer charge,
  including a unit-charge probe, while each displayed correlator sector has
  only its one fixed external magnetic source. New step 4.2 uses the (m=1)
  case of the proved crossing formula to show that equal actions on all admitted
  observables force equal (U(1)) elements. The formula for arbitrary integer
  (m) is preserved. The batch manifest and proof contract were updated.
  The curvature argument uses (dF=0) off the line, the stated flux boundary
  condition and Stokes on the punctured track; the orientation sign in the
  boundary formula matches the ordered convention in the Example.
- `ex-aqft-s3-zero-form-representation-labels`: checked the permutation
  representation, noncommuting transpositions, invariant decomposition and
  irreducibility calculation. Its use of the charge theorem is only to note the
  (p=0) exclusion, unchanged by the theorem clarification. The corresponding
  proof-contract source quote was refreshed. No source repair was needed.

Consumer review for the edited interfaces found no outside item consumers in
the current item sources. The theorem's only item consumer is the assigned S3
example, which was checked and its contract quote refreshed. The Maxwell example
has no item consumers. Their assigned page placements were checked.

## Page verdicts

- `qftx-p-form-symmetries`: pass. The frontmatter-only A page has the expected
  two items, `compact-v1` layout, and its two prerequisite pages resolve.
- `qftx-p-form-symmetries-examples`: pass. The frontmatter-only B page has the
  expected two example placements, `compact-v1` layout, and its A-page, gauge
  geometry, countability and de Rham prerequisites resolve. The latter two are
  pinned published mathematical pages.

## Edits and validation

- Edited `items/pthm-aqft-p-form-charge-characters.md` and
  `items/ex-aqft-maxwell-magnetic-one-form-charge.md`.
- Updated the corresponding claim derivations and boundary evidence in
  `research/advanced-qft-supersymmetry-build-2026-10-23-batch-37.proof-contracts.json`;
  refreshed the assigned S3 contract's quoted theorem statement. Neither edited
  item had a stale `verification.judge` record.
- Updated the exact Statement/Definition mirrors for the two edited items in
  `research/advanced-qft-supersymmetry-build-2026-10-23-batch-37.pages.json`.
- Reflow: both items unchanged. Precheck: both passed. Final proof-layout command
  `node tools/physics-support/proof-layout.mjs items/pthm-aqft-p-form-charge-characters.md items/ex-aqft-maxwell-magnetic-one-form-charge.md`
  reported 2 items, 14 steps, 0 defects.
- Reviewed the TikZCD exchange diagram in the assigned theorem and the gauge
  covariance diagram in its curvature dependency; both match their accompanying
  maps and directions. No other assigned item contains a diagram.

## Unedited defects and blockers

No additional confirmed defect requiring an outside edit was identified. There
is no operational blocker. Coverage limitation: the full local proofs of the
draft connection and curvature suppliers and the directly relevant published
support statements were read, but I did not re-audit every further transitive
proof dependency beneath all imported Lie-group and differential-calculus
suppliers. No defect was identified in the opened material; this report is not a
whole-library mathematical audit.
