# Step 3a scope review — pair `quantum-affine-type-a-and-level-one-fock-space` / `…-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha / `step3a-pair-quantum-affine-type-a-and-level-one-fock-space-cea6f82979958e36`
- Batch: 9. A page `quantum-affine-type-a-and-level-one-fock-space` (order 1534,
  24 items); B page `quantum-affine-type-a-and-level-one-fock-space-examples`
  (order 1535, 5 items).
- Date: 2026-10-10
- **Decision: `sufficient`** — scope only; this is not item approval, proof
  certification, a scaffold edit or an owner record.

## Inputs read

- Manifests `research/frontier-44-special-representation-examples-28-batch-9.pages.json`
  (24 A + 5 B items with `deps`), `.coverage.json` (A 7 sources/57 rows,
  B 5 sources/41 rows), `.notes.md`, `.cross-batch-dependencies.json`;
  `research/frontier-44-special-representation-examples-28-scope-ledger.json`
  and `research/plan-spec.json` carry both pages at orders 1534/1535 with empty
  item arrays, so the batch-9 manifest is the current inventory.
- Prose design: `research/plan-quantum-groups-track.md` QG-6 (L199–L232: the
  24 planned A items with their exact proof joints and the level-one seam
  contract), summary row L45 ("cyclic Cartan datum, partition Fock action,
  Misra--Miwa crystal"), and section 2 QG-6 examples (L330–L336: the 5 planned
  B ids). Design requires are QG-4, QG-5 and
  `young-diagrams-tableaux-and-permutation-modules`, matching the manifest.
- Owner decisions: `…-owner-authoring-direction.md` §"Final level-one Fock and
  modular interface direction — 2026-10-08" (batches 9/23 retain all 35 native
  ids and 37 current subjects, 24A+5B, with only the finite-residue-node-cube
  and integrable-rank-one Serre suppliers added; p(k) decomposition; exactly
  e-regular empty component; degree-4 D boundary; preserve every original
  example), together with `…-owner-quantum-fock-repair.md` and the
  final-interface proposal it points to.
- Drift review `…-alpha-step1-drift.md` §`quantum-affine-type-a-and-level-one-fock-space`:
  `no-drift` (QG-6 requires QG-4, QG-5 and Young-diagram theory as declared).
- Published suppliers `items/<id>.md` and the scaffolded batch-5–8 suppliers
  whose statements the pair's items consume.

## A-page scope — matches the QG-6 design item for item

The 24-item inventory is exactly the current QG-6 design table, in the design's
order: `def-cyclic-affine-type-a-cartan-datum`;
`def-the-level-one-vector-representation-its-affinization-and-energy-function`;
`def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation`;
`lem-integrable-rank-one-actions-force-the-quantum-serre-relations`;
`lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel`;
`lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis`;
`def-finite-q-wedge-space-and-normal-ordering-relations`;
`lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel`;
`thm-normally-ordered-q-wedges-form-a-basis`;
`def-semi-infinite-q-wedge-fock-space-and-q-adic-topology`;
`lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness`;
`lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas`;
`def-level-one-partition-fock-space-and-node-residues`;
`lem-the-node-count-is-the-level-one-cartan-pairing`;
`def-the-node-order-and-n-i-exponents-for-fock-space`;
`lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices`;
`def-good-and-cogood-nodes-by-residue-signature-reduction`;
`thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations`;
`prop-the-empty-partition-generates-an-integrable-highest-weight-submodule`;
`thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph`;
`thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable`;
`thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero`;
`def-regular-partition-label-convention-and-mullineux-crystal-involution`;
`thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis`.
The design originally had 16 rows; the six Hecke/wedge/tail/count suppliers and
the two finite-residue-cube/rank-one-Serre suppliers are the owner-sanctioned
additions (24A+5B currently retained), and no design id is dropped, renamed or
weakened.

Together the items cover the intended subject completely: the cyclic affine
Cartan datum with the e=2 double edge; the level-zero vector module, its
affinization and energy/ground-state conventions; the affine Hecke action and
q-antisymmetrizer; finite q-wedges with the normal-ordered A-basis; the
semi-infinite Fock space with its separated q-adic topology; tail/vanishing
estimates; the partition indexing and explicit addable/removable node formulas;
the level-one Cartan pairing; node order and signed exponents; finite
same-residue cubes as actual Kashiwara strings; good/cogood signature
reduction; the quantum affine relations and integrability of the Fock action;
the highest-weight submodule at the vacuum; the crystal of the whole Fock space
as the good-node graph on all partitions; the empty component as B(Λ0) with the
e-regular labels and the p(k) decomposition F=⊕_k V(Λ0−kδ)^{⊕p(k)}; the
regular/Mullineux label conventions; and the unitriangular global basis of the
basic representation with its stated limits (transpose-conjugation symmetry
false, ambient basis not component-compatible). Excluded material has an
explicit disposition and a scaffolded destination: higher-level Fock spaces,
boson/vertex operators and other affine types are out of scope with reasons;
decomposition numbers/Lusztig character formula go to
`ariki-categorification-and-graded-decomposition-numbers`, level-k Fock spaces
to `cyclotomic-hecke-and-quiver-hecke-algebras`, and the DJKM path comparison
to `level-one-fock-space-and-residue-crystals` — all pages that exist in this
frontier. No topic of the intended subject is missing without a named home.

## B-page scope — 5 design examples/counterexample, all concept-covering

`ex-level-one-fock-node-actions-for-partitions-up-to-three` (complete e=2 and
e=3 node/Cartan tables on all shapes of size ≤3, plus the Leclerc Exercise 15
calibration); `ex-the-affine-a-one-double-edge-serre-cancellation-on-partitions`
(the explicit cubic [3]=q²+1+q^{-2} ordinary E/F chains, including the
nontrivial rank-3 and rank-4 cancellations); `ex-good-node-crystal-component-for-equals-three`
(the e=3 empty component through size 3 with its exact arrows and the
non-regular 111 boundary); `cex-the-whole-partition-fock-space-is-not-the-basic-representation`
(F strictly larger than M=U_q|empty>, raw and lower-lift exclusions); and
`ex-unitriangular-global-basis-elements-in-small-rank` (small-degree G's and
the degree-4 transition matrix with its false transpose-conjugation witness).
These are exactly the design's five examples, they are computational/diagnostic
as plan section 2 requires, they depend only on the A page and published items,
and the page is a leaf: a scan of all 50 batch manifests finds no consumer of
any of its 5 items.

## Prerequisite closure — no unmet prerequisites found

- Transitive walk from the 29 pair items over the 50 batch manifests and the
  published `items/*.md`: 113 distinct ids = 29 pair items (batch 9) + 48
  in-run suppliers (batches 5/6/7/8: 17/13/7/11) + 36 published items;
  **0 missing, 0 plan-only**.
  Every `[[id]]` citation in the pair resolves to a published or in-run item
  (the only unresolved citation strings are the literal rings `Q[[q]]`,
  `Z[q]` etc., not item references).
- All 17 published dependencies carry `status: published`
  (`def-axiom-of-choice`, the Young-diagram/nodes/dominance items, the
  Cartan-datum and Drinfeld–Jimbo items, the q-integer/pascal/binomial items,
  `thm-quantized-sl-two-string-formulas`, `thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra`).
- The in-run suppliers consumed here carry current `ready` records and their
  statements match the uses at statement/hypothesis level: batch-6
  `def-crystal-lattice-and-crystal-basis`, `def-kashiwara-crystal-operators`,
  `def-crystal-graph-epsilon-phi-and-weight`,
  `thm-unique-kashiwara-i-string-decomposition`; batch-7
  `thm-crystal-basis-tensor-product-rule`,
  `thm-the-highest-weight-crystal-b-lambda-exists`,
  `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals`
  (AC declared, hypotheses P-graded/integrable/locally weight-finite/bounded
  above — all satisfied by F with wt(λ)=Λ0−Σ m_iα_i, m_i≥0, plus the in-page
  crystal basis); batch-5 `def-quantum-weight-module-and-integrability`,
  `thm-integrable-quantum-highest-weight-module-exists-and-is-unique`,
  `prop-integrable-quantum-highest-weight-modules-are-semisimple` (AC
  declared); batch-8 `def-lower-global-basis-of-a-quantum-highest-weight-module`,
  `thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis`.
- `node tools/step1-decisions.mjs check --run …` reports 858/858 items with
  current ready records and a closed graph; `content-policy --manifest-only`
  over all 50 manifests reports 858 scoped items, 0 errors. This is mechanical
  readiness, not acceptance. No prerequisite is absent from both the published
  library and the current scaffold, so there is no unmet-prerequisite flag to
  raise; no potentially missing item was identified.

## Source coverage

Seven distinct works back the pair: Leclerc's author-hosted notes (302817 B,
sha256-16 `32da60cfed68246e`, 38 pages); KMPY (551775 B, `99bb8974806e51be`);
KMS (197161 B, `1ae829b5d8ce41f3`); Stern (196333 B, `d22bbf0e0bb69b52`);
Misra–Miwa (809059 B, `905b5f37555717bf`); Leclerc–Thibon (145252 B,
`289637f0f37050c7`); Fayers (262474 B, `afea008b148b9600`). I re-downloaded all
seven on 2026-10-10 and every byte count, page count and sha256-16 reproduces
the recorded stamps exactly (Misra–Miwa needs a browser user-agent at the
Project Euclid URL; without one the site returns an Incapsula HTML page).

Scope-critical statements were re-read at the cited locations: KMS §1.4/§2
Prop. 1.4 and (54) F(m)≃V_{Λ_m}⊗C[H^-] with the remark that |m⟩ is not the only
highest vector; Leclerc §3.7 Theorem 2 (unitriangular G^±), §3.11 Prop. 12
(F≅V(Λ0)⊗C[H^-]), §3.13 Exercise 17 (D_4) and §3.14 Prop. 14 (n-regular
G(λ) = global basis of V(Λ0)); Leclerc–Thibon §4 Theorem 4.1 (d_{λμ}∈Z[q], same
n-core support, dominance support, n-regular subset = lower crystal basis of
M(Λ0)) and §5 D_4; Misra–Miwa Thm. 3.2, Prop. 4.3, Prop. 4.4, Lemma 4.5,
Thm. 4.7 (the basic representation crystal base, with the paper's own
transposed-convention remark); Fayers §2 Theorem 2.1 [MM Thm. 4.7] with the
n-regular counterpart via Mullineux. KMPY §5.2.1/Prop. 5.2.1 and the ground
state passage were spot-read; Stern was re-fetched but only spot-read, and its
role in the pair is inline context. Honest limitations: the Misra–Miwa PDF text
layer is poor (the batch notes already record this) and its statements are
corroborated here by Fayers and Leclerc; I verified theorem-level statements,
not every displayed formula or every per-item locator.

Dispositions: A page 13 inline/32 included/8 out-of-scope/4 deferred, B page
11/23/4/3. Every out-of-scope row carries a reason and every deferred row a
destination that exists in the frontier; `coverage-checklist
--require-destination` passes.

## B-page mathematical spot checks (scope sanity, not proof approval)

- The e=2 table is consistent with the page's own node conventions: (1) has
  N=(−1,2) from N_i=δ_{i0}−Σ_j a_ij m_j, F_1(2) coefficient q^{−1} matches
  q^{−N_1^l} with N_1^l=1 in λ=(1), and E_1(2)=q^{−1}(1) matches N_1^l=1;
  the E_0(3)/F_0(31) rows reproduce Leclerc's Exercise 15 calibration
  (F_0|31⟩=q^{−1}|32⟩+|311⟩, E_0|31⟩=q^{−2}|21⟩).
- The e=3 empty-component arrows ∅→1, 1→2, 1→11, 2→3, 11→21 match the
  signature-reduction definition, and its shapes are exactly the 3-regular
  shapes through size 3; 111 is correctly a highest crystal vertex (its
  residue-1 signature −+ cancels, and it has no removable nodes of other
  residues), not a member of the empty component.
- The degree-4 matrix printed in `ex-unitriangular-global-basis-elements-in-small-rank`
  is verbatim Leclerc Exercise 17 / Leclerc–Thibon §5 D_4, and the degree-2/3
  rows (G2=|2⟩+q|11⟩, G3=|3⟩+q|111⟩) match the same tables.

## Intended role and consumers

Page-level consumers of the A page in the current frontier are batches 11
(`cyclotomic-klr-algebras-and-highest-weight-categorification`), 23
(`level-one-fock-space-and-residue-crystals`, which itself requires this page
and supplies the symmetric-group convention translation), 24
(`cyclotomic-hecke-and-quiver-hecke-algebras`) and 25
(`ariki-categorification-and-graded-decomposition-numbers`), plus the B
companion. There are also 25 item-level dependencies from items of batches 11,
23, 24 and 25 on this pair's items: `def-cyclic-affine-type-a-cartan-datum`
(7 items in batches 23/24/25), `def-level-one-partition-fock-space-and-node-residues`
(23/25), `def-the-node-order-and-n-i-exponents-for-fock-space` (23),
`def-good-and-cogood-nodes-by-residue-signature-reduction` (23),
`thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph` (23),
`thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero` (23),
`thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis`
(23/25), `thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations`
(23/25), `lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas`
(25) and `lem-integrable-rank-one-actions-force-the-quantum-serre-relations`
(batch 11). I checked the three most load-bearing seams at statement level:
batch 25's upper-global-basis expansion needs the dominance-unitriangular D and
the field-inverse upper coordinates, both stated in the global-basis item;
batch 23's restricted-component theorem needs the e-regular B(Λ0) component and
brings its own convention dictionary; batch 11's integrable-action lemma needs
the rank-one Serre engine. Each dependency has a matching statement interface
in this pair; the exact generality/transfer match (e.g., batch 11's "every real
symmetrizable datum") is a proof-level obligation of the consumer pages, not a
scope defect found here. No published page or item references the pair, and
the B page is a leaf.

## Checks re-run during this review (current bytes, 2026-10-10)

| Check | Result |
|---|---|
| `node tools/manifest-deps.mjs …batch-9.pages.json` | 29 items, 0 errors |
| `node tools/content-policy.mjs --manifest-only` (all 50 manifests) | 858 items, 0 errors, 0 warnings |
| `node tools/coverage-checklist.mjs …batch-9.coverage.json --require-destination` | 2 pages, 98 rows, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage …batch-9.coverage.json` | 12/12 fetch-verified, 12/12 resolved, 0 drops |
| `node tools/url-sweep.mjs --coverage …batch-9.coverage.json` | 8/8 live, 0 failed, 0 blocking |
| `node tools/source-backing.mjs --coverage …batch-9.coverage.json --liveness …url-liveness.json` | 35 authored results, all backed |
| `node tools/step1-decisions.mjs check --run …` | 858/858 current ready, closed |
| Independent re-fetch of all 7 cited works | hash-identical to recorded stamps |

## Uncertainty and considered-and-declined additions

1. Scope only, not proof validity. The batch notes' recorded residual authoring
   risks remain live as 3b/5 obligations, not scope defects: the explicit
   bridge from the KMPY R−1/energy language to the Hecke q-antisymmetrizer
   quotient (including the z-normalization of R~ against T_i), re-derivation of
   the KMPY tail estimates in the library's c−r residue convention, and
   keeping the A vs A_0 vs Z[q] charts separate in the global-basis theorem.
   I found no missing item behind any of these.
2. The p(k) decomposition and the multiplicity-one Λ0 component are
   source-matched to KMS (54)/Leclerc Prop. 12 as U-module consequences; I
   checked the hypotheses of the batch-7 decomposition theorem against F
   (P-graded, integrable, locally weight-finite, wt(F)⊆Λ0−Q_+, in-page crystal
   basis) and found no unmet interface.
3. The near-twin counterexamples `cex-the-whole-partition-fock-space-is-not-the-basic-representation`
   (this B page) and `cex-the-full-fock-space-is-not-automatically-the-irreducible-basic-module`
   (batch 23's B page) serve different convention contexts and different
   consumers by design (batch 23 requires this A page); recorded as an
   observation, not a scope defect. No merger is recommended.
4. Misra–Miwa's text layer required correction-by-corroboration; Fayers
   Theorem 2.1 and Leclerc Prop. 14 carry the same statements in readable form.
   Unresolved uncertainty is low and confined to display-level detail that is
   an authoring obligation.

## Decision

`sufficient` for `quantum-affine-type-a-and-level-one-fock-space`: the planned
definitions, results and examples exactly match the current QG-6 prose design
and the owner's binding 24A+5B interface direction, cover the intended subject
(cyclic Cartan datum, partition Fock action, Misra–Miwa crystal, and the basic
representation global basis) including all explicitly designed examples, rest
on source coverage that re-verifies hash-identical at the cited statements, and
leave no prerequisite unmet in either the published library or the current
scaffold. Recorded with `tools/step3-decisions.mjs record-scope` (non-owner
review); no scaffold, manifest, coverage or library file was edited.
