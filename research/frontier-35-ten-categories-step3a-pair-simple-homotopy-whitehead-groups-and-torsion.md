# Step 3a scope review — pair `simple-homotopy-whitehead-groups-and-torsion`

- Run: `frontier-35-ten-categories` (stage `3a-scope`), dispatch label
  `step3a-pair-simple-homotopy-whitehead-groups-and-torsion-8240f45b89c7e1ae`
- Role: alpha (scope reviewer, not owner, not item author)
- A page: `simple-homotopy-whitehead-groups-and-torsion` (batch 2, order
  366.0401, 27 items: 7 definitions, 16 lemmas, 4 theorems)
- B page: `simple-homotopy-whitehead-groups-and-torsion-examples` (batch 2,
  order 366.0402, 4 items: 3 examples, 1 counterexample)
- Decision: **`sufficient`**, recorded through
  `node tools/step3-decisions.mjs record-scope --run frontier-35-ten-categories
  --page simple-homotopy-whitehead-groups-and-torsion --decision sufficient`.
- Date: 2026-09-24.

This review decides scope only. It is not an item approval, not a proof
judgment, and not an owner record.

## 1. Intended subject and role in the library

The controlling prose design is AT-22 in
`research/plan-algebraic-topology-track.md` lines 2320–2394, reinforced by the
DT plan's DT-24 section (lines 1250–1294) and AT-22 interface note (lines
2118–2123) of
`research/plan-differential-topology-track.md`. AT owns the *algebraic*
simple-homotopy theory: elementary expansions/collapses, the stable
general-linear and Whitehead-group algebra, contraction torsion, Whitehead
torsion of a finite CW homotopy equivalence, its independence and additivity,
simple ⇒ zero, the hard converse, realization of every class, and the
if-and-only-if obstruction theorem. DT-24
(`whitehead-torsion-and-the-s-cobordism-theorem`, still unscaffolded) retains
handles, group-labelled Whitney realization and the smooth s-cobordism theorem
and is the consumer of this supplier.

Consumer check. `grep` over `items/` and `library/` finds **no published item
or page** that references this pair, its page id, or
`def-simple-homotopy-equivalence`; the DT-24 plan rows that consume AT-22
(its A items 1, 2, 3, 5, 8 and its B items 1–5 in
`plan-differential-topology-track.md` lines 1256–1293) resolve against this
scaffold's `def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group`,
`def-based-cellular-chain-complex-of-a-universal-cover`,
`lem-a-lifted-cellular-homotopy-equivalence-has-a-contractible-algebraic-mapping-cone`,
`def-finite-based-free-chain-complex-and-its-contraction-torsion`,
`def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence`,
`thm-whitehead-torsion-is-independent-...`,
`lem-cell-slides-and-stabilizations-...` and
`thm-a-finite-cw-homotopy-equivalence-is-simple-if-and-only-if-...`. The
design's required interface ("Whitehead group, based universal-cover complexes,
and torsion ... right-module, lift, orientation, and path conventions") is
present, including the explicit right action `c·g = T_g^{-1}c`.

## 2. Design-to-manifest mapping

All 18 designed A ids (design items 1–18) and all 4 designed B ids are present
in `research/frontier-35-ten-categories-batch-2.pages.json`, with the designed
kinds and roles; the pair's orders, both companion pointers, the eleven
declared A prerequisites and the B page's single prerequisite match the
manifest and the run scope ledger's 26 active pairs.

The scaffold adds nine support lemmas beyond the design list. Each is an
internal step of an already-designed claim, not new subject matter:

| added item | designed claim it closes | source section |
| --- | --- | --- |
| `lem-group-rings-have-invariant-basis-number-via-augmentation` | parity map is a square matrix in displayed bases over `Z[π]` | Lück §2.2 setup |
| `lem-parity-map-of-a-finite-contracted-complex-is-invertible` | `τ_s(C)` is defined by an invertible `(d+s)_odd` | Lück (2.7) |
| `lem-basis-change-and-direct-sum-formulas-for-chain-torsion` | design items 8 and 14–16 (basis signs, additivity) | Lück Lemma 2.9, (2.11) |
| `lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear` | design items 10–11 (chain map, chain homotopy) | Lück §2.2 |
| `lem-the-target-inclusion-in-a-cellular-mapping-cylinder-is-simple` | converse reduction to an inclusion | Lück Lemmas 2.19–2.20 |
| `lem-cell-trading-reduces-a-finite-relative-equivalence-to-two-high-cell-degrees` | hard converse, step 1 | Cohen §§7.3–7.4; Lurie Thm 8 sketch |
| `lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases` | hard converse, step 2 | Cohen §8.1 |
| `lem-cell-slides-and-stabilizations-realize-elementary-group-ring-matrices` | hard converse, step 3 | Cohen §§8.3–8.4; Lurie Ex 11 (with the required homotopy hypothesis) |
| `lem-an-identity-relative-boundary-matrix-allows-cell-cancellation` | hard converse, step 4 | Cohen §8.2 |
| `lem-every-whitehead-class-is-realized-by-a-finite-cw-homotopy-equivalence` | design item 12's converse and the B counterexample's geometric example | Lück Lemma 2.18(2); Lurie Rmk 6 |

No designed item is dropped or weakened, and the hard converse is not hidden:
`lem-zero-torsion-is-realized-by-elementary-expansions-collapses-and-cellular-basis-moves`
(design item 17) stands on its own and is consumed by the final theorem.

## 3. Source coverage

`research/frontier-35-ten-categories-batch-2.coverage.json` has one entry for
the single A page of this batch, five independent treatments and 43 harvested
headings with included/inline/out-of-scope dispositions;
`node tools/coverage-checklist.mjs ... --json` rerun 2026-09-24 reports
43 harvested, 0 errors, 0 warnings. Every one of the 31 items carries at least
one source reference.

I independently re-fetched all five cited full texts and reproduced the
recorded stamps exactly (bytes / sha256-16): Cohen 7,712,182 /
`f873683972591bae`; Lück 1,474,199 / `ff8ccb8809443404`; Davis–Kirk
1,794,704 / `0441b5c1059cac27`; Casson 254,915 / `877922ec6b2e3cc6`; Lurie
183,275 / `ab06d122df0aadb9`.

What I read directly, in the fetched files:

- Lück, §2.1–§2.3: Lemma 2.2 (`E(R)=[GL(R),GL(R)]`, `K₁=GL/E`), Definition
  2.6 with (2.7)–(2.8) (contraction torsion in `K̃₁`, cone torsion), Lemma 2.9
  (based-exact additivity, chain-homotopy invariance, composition), Definition
  2.13 (componentwise `Wh(π(Y))` and basepoint transport), Lemma 2.18(1)–(2),
  Lemmas 2.19–2.20 (mapping-cylinder inclusions are simple), Theorem 2.21
  (vanishing criterion plus `Wh_geo(X) ≅ Wh(X)`).
- Davis–Kirk §11.4, pp. 343–345: Theorem 11.31(1)–(3), with complete proofs of
  parts 1–2 and the cell-trading/cell-sliding/cell-cancellation sketch citing
  Cohen [7, 7.3], [7, 8.2], [7, 8.3]; Theorem 11.32 (Chapman), which the
  coverage declines.
- Casson, Chapter 4, Theorem 4.7 and its **complete** proof (pp. 32–34 of the
  PDF): reduce to an inclusion, trade cells up, realise elementary basis
  changes `1+ae_ij` by expansion/collapse, reduce the matrix to the identity,
  then cancel cell pairs. This is one fully independent verification of the
  hard converse's route.
- Lurie, Lecture 4 in full: Proposition 1, Lemma 2, Proposition 4, Corollary 5,
  Remark 6 (realization), Example 7 (the `Z[C₅]` unit), Theorem 8, Example 9
  (`Wh(1)=0`), Example 11, Remark 12. Lurie's Example 11 needs the explicit
  hypothesis that the attaching maps are homotopic; the manifest/coverage
  supplies it and leans on Cohen/Casson for the geometric step.

Direct arithmetic check of the B counterexample: in `Z[t]/(t⁵−1)`,
`(1−t²−t³)(1−t−t⁴) = 1`, and `1−t²−t³` is not `±t^k`, so its class survives
`R^×/⟨±t^k⟩`; the determinant argument on the commutative ring `Z[C₅]` is
therefore valid, and the two-term complex `0→R --u→R→0` is contractible.
Parity check: the scaffold's convention (`τ = [u]` for the upper degree odd,
`−[u]` for even) agrees with Lück's (2.7) computation of `[A] = −[B]` and with
the B page's `(−1)^{q+1}[u]`.

Declined harvest rows all concern genuinely separate results: Chapman
homeomorphism invariance, the product formula, the projective-module
presentation of `K₁` (Lück Remark 2.5), h-cobordism gluing/duality (Lemma
2.16), Bass–Heller–Swan `Wh(Z^d)=0`, Cohen §7.2 simplicial models, Lück §2.4
Reidemeister torsion/lens spaces and Davis–Kirk §11.5. None is consumed by a
designed claim of this pair or by the DT-24 plan rows that consume AT-22.

## 4. Dependency, integrity and consumer checks (rerun 2026-09-24)

- `node tools/manifest-deps.mjs research/frontier-35-ten-categories-batch-2.pages.json`:
  31 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only ...`: 31 scoped items,
  0 errors, 0 warnings.
- Every dependency id of the 31 items resolves to another manifest item or to
  an existing `items/*.md` (0 missing). Every external direct dependency lies
  on one of the eleven declared prerequisite pages or on a page inside their
  transitive plan closure (144 pages). Ten of the eleven declared
  prerequisites are exercised: nine directly and `the-fundamental-group`
  through five closure items. `classification-of-covering-spaces` contributes
  **no** item to the closure — the universal-cover existence and deck-group
  identification actually used (`thm-universal-cover-existence`,
  `thm-deck-group-of-a-universal-cover-is-the-fundamental-group`,
  `thm-covering-space-lifting-criterion`) are items of
  `covering-spaces-and-lifting`. That is a redundant page prerequisite, not a
  scope omission: every used claim is supplied. Recorded for the owner's
  awareness; no scaffold edit was made.
- The full transitive closure of the 31 items is 981 published ids; every file
  exists, every item has `status: published`, and none carries
  `proved_here: false` — in particular there is no path to the deferred
  Set-Theory-Beyond-Choice catalogue, and no local item declares or uses AC.
- `cross-batch-dependencies` for batch 2 is `[]`, and no other current batch
  manifest or published page references this pair; there is no duplicate id in
  `items/` and no competing published `def-simple-homotopy-equivalence`.
- The ten published items with repository-wide `extcheck` errors are all
  outside the 981-id closure (checked by id).

## 5. Uncertainty and considered-and-declined additions

- The Cohen scan is image-only (no text layer) and this environment could not
  render it for me, so I could not independently read Cohen §§7.3–8.5 and
  §§19–23; I verified only that the recorded file is byte-identical to the
  cited full text, and I corroborated the section roles against the four
  text-extractable treatments, including one complete independent converse
  proof (Casson 4.7) and Davis–Kirk's explicit citations to Cohen §§7.3, 8.2,
  8.3. The coverage record's claim of a visual Cohen read is therefore
  **unverified by me**, but the scope conclusion does not rest on it alone.
- Two closers of the pair's own theorem are outside the design and have no
  consumer: the isomorphism `Wh_geo(X) ≅ Wh(X)` (Lück Thm 2.21(1)) and
  Reidemeister torsion/lens-space classification (Lück §2.4, Davis–Kirk
  §11.5); no page in the AT or DT tracks owns them, so their absence is not an
  omission of this pair.
- Design-locator corrections already recorded by the scaffolder and confirmed
  here: the design's "Cohen, Chapters 1–7" locator does not reach the
  algebraic torsion (§§19–23) or the converse (§§7.3–8.5); the coverage's
  corrected locators (printed pp. 24–33 and 62–77) are the right ones. AT-22's
  "before an algebraic-geometry page at 366.041" is stale; the current plan
  places the pair before commutative-algebra order 366.0601.
- This review does not judge proof correctness, and no statement above should
  be read as an item approval.

## 6. Decision

Scope decision for the A page (and hence the pair): **`sufficient`** — the
planned definitions, results and examples cover the intended subject, match
the prose design item-for-item, are backed by five verified full treatments,
and introduce no unowned subject matter. Receipt:
`research/frontier-35-ten-categories-step3a-review-simple-homotopy-whitehead-groups-and-torsion.json`.
