# Step 3a scope review — `modular-branching-and-the-good-node-crystal` (A) / `modular-branching-and-the-good-node-crystal-examples` (B)

- Run: `frontier-44-special-representation-examples-28` (batch 22; both pages of
  the pair; A order 1573, 13 items; B order 1574, 2 items).
- Reviewer role: alpha, Step 3a scope (non-owner). Scope only — not proof
  review, not item approval, no scaffold edit, no owner record.
- Date: 2026-10-10.
- Decision: **`sufficient`** (scope only), with one confirmed B-page statement
  defect and two interface notes reported to the owner (§8); no enrichment or
  merger is proposed.
- Receipt: `research/frontier-44-special-representation-examples-28-step3a-review-modular-branching-and-the-good-node-crystal.json`
  (written by `node tools/step3-decisions.mjs record-scope`, non-owner).

## 1. Inputs read

- Manifests/coverage: `research/frontier-44-special-representation-examples-28-batch-22.pages.json`
  (13 A + 2 B items), `...-batch-22.coverage.json` (29 harvested source
  results, all disposed), `...-batch-22.cross-batch-dependencies.json`
  (5 item rows + 2 page rows), `...-batch-22.notes.md`, and the run-wide
  `...-cross-batch-dependencies.json` ledger rows that consume this pair.
- Prose design: `research/plan-symmetric-group-representations-track.md`
  (SYMR-9 row L44 "exact modular restriction/induction and good nodes"; §7
  proof-dependency plan), `research/symmetric-group-planning/proposed-inventory.md`
  §SYMR-9 (binding 13 A + 2 B item table with exact claims, deps, proof routes
  and locators), `research/plan-spec.json` (page shells, orders 1573/1574,
  empty `items` arrays).
- Owner decisions: `...-owner-authoring-direction.md` (build all 24 planned
  pairs retaining planned claims, sources and proof obligations; suppliers
  before consumers; no new pairs), `...-owner-step3-prestart-restart-verification.json`
  and `...-20261010T0900.json` (restart before the revised Step 3; scope =
  original 50-pair frontier), the run scope ledger. No owner scope record
  exists for this pair.
- Deferrals pointing at this A page: batch-20 coverage defers survey
  §§11.1–11.5 ("modular branching, good nodes and crystals") here; batch-21
  coverage defers Tomczak §4.2 onwards (quotient towers, Theorems 4.13/4.16,
  cores of the irreducible `S_n`-modules, `e`-adic expansion) here.
- Consumer interface: batch-23 `level-one-fock-space-and-residue-crystals`
  consumes `def-residue-signature-normal-good-conormal-and-cogood-nodes`,
  `def-good-node-and-cogood-node-crystal-operators`,
  `prop-every-p-restricted-partition-is-reached-by-cogood-node-additions` and
  `thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction`
  (confirmed in the run-wide cross-batch ledger); no other consumer.
- Sources re-fetched for this review, complete files, recorded stamps
  reproduced exactly: Kleshchev 1997 author manuscript
  `https://darkwing.uoregon.edu/~klesh/BrIV.ps` (616 248 bytes, `sha256_16`
  `0bbf3d69ddf20940`); Kleshchev survey `https://arxiv.org/pdf/0909.4844`
  (746 493 bytes, `8685199608967fa7`, 66 pp.); Brundan
  `https://pages.uoregon.edu/brundan/papers/quantum.pdf` (321 117 bytes,
  `c9739b545e24407f`, 34 pp.). Local cache copy of Kleshchev II (1995)
  verified byte-identical to the source manifest (`6a7a7856d3eb8c81`); it has
  no text layer and was not relied on for any statement (§4).

## 2. Scaffold vs. prose design

All 13 design A items and 2 design B items are scaffolded with their design
scope and identical IDs; no design item was dropped, narrowed or added:

| design item (SYMR-9) | scaffold id | design scope retained |
|---|---|---|
| residue signature, normal/good/conormal/cogood nodes | `def-residue-signature-normal-good-conormal-and-cogood-nodes` | yes (residue `c-r mod p`, order, `-+` cancellation, good = leftmost `-`, cogood = rightmost `+`, transposed-dictionary warning) |
| modular JM primary idempotents and `E_i,F_i` | `def-generalized-jm-primary-idempotents-and-residue-summand-functors` | yes (primary decomposition, block idempotents by content, `Res = ⊕ E_i`, `Ind = ⊕ F_i`, exactness, `p=2` included) |
| Kleshchev first-level multiplicity | `thm-kleshchev-first-level-branching-multiplicity` | yes (1997 Thm. 1.4 in the p-regular convention plus the in-words reformulation) |
| q-Schur first-level comparison | `prop-schur-functor-compares-first-level-branching-with-hecke-restriction` | yes (Brundan §5.5–5.7 replacement for Kleshchev I §2.12(v)) |
| normal-node multiplicities | `thm-normal-node-composition-multiplicities-under-residue-restriction` | yes (count of normal `i`-nodes weakly below `A`; Hom criterion marked distinct) |
| finite-group biadjunction | `lem-finite-group-induction-is-coinduction-and-thus-biadjoint` | yes (relative Frobenius isomorphism, any field) |
| conormal-node multiplicities | `thm-conormal-node-composition-multiplicities-under-residue-induction` | yes (count of conormal `i`-nodes weakly above `B`; no character reciprocity) |
| good-node socle/head | `thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction` | yes (simple socle and head `D(μ\A)`, total multiplicity `ε_i`) |
| cogood-node socle/head | `thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction` | yes (dual statement, multiplicity `φ_i`) |
| uncoloured socle corollary | `cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues` | yes (multiplicity-free sum over good residues; semisimple case only named) |
| good/cogood crystal operators | `def-good-node-and-cogood-node-crystal-operators` | yes (partial operators, mutual inverses, rank behaviour; combinatorics only) |
| reachability of restricted partitions | `prop-every-p-restricted-partition-is-reached-by-cogood-node-additions` | yes (induction via nonzero restrictions; `∅` unique rank-0 vertex) |
| Ariki boundary remark | `rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels` | yes (survey (11.1) boundary; no circular labelling proof) |
| B: Brundan Example 2.8 stress test | `ex-normal-and-good-nodes-for-a-large-partition` | yes, but one derived label is wrong — see §5/§8 |
| B: full cogood-addition path at `p=3` | `ex-good-node-path-from-empty-to-a-p-restricted-partition` | yes ((3,1,1) path; independently recomputed, §5) |

The batch-22 notes' recorded reconciliations (item 3/4 dependency reversal,
explicit convention fixes, the five added genuine dependencies) were checked
against the design table: every change stays inside the SYMR-9 subject, and
no claim was weakened. The page-level `requires` chain and companion pointers
match `plan-spec.json` verbatim.

## 3. Intended subject, library role and deferral reconciliation

SYMR-9 is "exact modular restriction/induction and good nodes": the pair
carries the residue signature, the modular Jucys–Murphy primary idempotents
and residue functors, Kleshchev's first-level multiplicity with the Brundan
q-Schur comparison, the normal/conormal multiplicity theorems, the
good/cogood socle–head theorems, the uncoloured socle corollary, the
combinatorial good/cogood operators with reachability, and the Ariki boundary
remark; the B leaf carries one Brundan convention stress test and one full
cogood-addition path. The affine/Fock crystal identification is deliberately
not on this page (design: "The affine-crystal identification itself remains
in SYMR-10"; the Fock page consumes the four items listed in §1), and the
Mullineux involution/algorithm is disposed out-of-scope with reasons in the
coverage and notes. That matches the design's declared role.

Deferral reconciliation (requested by the sibling reviews):
- batch-20 (survey §§11.1–11.5 "modular branching, good nodes and crystals"):
  carried here for §§11.1–11.4 (first-level branching, normal/good nodes,
  socle, reachability, boundary remark); §11.5 (Mullineux) is consciously
  not carried — the coverage disposes it out-of-scope with a reason and no
  run consumer exists. The batch-20 deferral is therefore answered, not
  silently dropped.
- batch-21 (Tomczak §4.2 onwards: quotient towers, Theorems 4.13/4.16, cores
  of the irreducible `S_n`-modules, `e`-adic expansion): **not carried by
  this pair.** No item of either page uses cores/quotients beyond
  `def-p-regular-and-p-restricted-partitions` (not a cores item), and the
  SYMR-9 design table contains no such item; the residue-signature route of
  Kleshchev 1997/survey/Brundan does not consume the quotient-tower
  recursion. Recommendation to the owner: drop or re-home that deferral; it
  is not an omission of this pair's declared subject (recorded, not
  actioned, by this review).
- the declared page require `cores-quotients-and-blocks-of-symmetric-groups`
  is unreferenced at item level (already recorded in the batch-22 notes and
  the run cross-batch ledger); the block theory actually used by the JM item
  is the published `def-p-blocks-by-primitive-central-idempotents`. Shared
  plan/owner reconciliation, not a scope hole.

## 4. Source-statement verification (read in the re-fetched files)

- Kleshchev survey §3.4 (printed pp. 18–19): the signature definition — `i`-nodes
  ordered top-to-bottom, `-+` cancellation, normal `=` surviving `-`, good
  `=` leftmost `-`, cogood `=` rightmost `+`, `ε_i,φ_i` counts, involution
  (3.13), restricted multipartitions (3.14) and Example 3.2(i) (`e>0, l=1`:
  `e`-restricted partitions). This is exactly the pair's definition item.
- Kleshchev survey §11.2 (printed p. 52): `(11.1)` `Ḋ(μ) ≅ D(μ)` as the
  Ariki/graded theorem — the pair's boundary remark; §11.4 (pp. 53–54):
  normal/good/conormal/cogood naming and Theorems 11.6/11.7 with the
  "weakly below / weakly above" multiplicity counts — the pair's normal and
  conormal multiplicity theorems (with the Hom criteria correctly excluded).
- Kleshchev 1997 author manuscript, printed p. 5: Theorem 1.4, the reformulation
  "`1 + #` normal nodes above `A` of the same residue, `0` otherwise", the
  residue `s-r (mod p)`, and the worked example `p=3`, `λ=(5,3,2)` with
  composition factors `(4,3,2)`, `(5,2,2)`, `(5,3,1)` of multiplicities
  `1,2,1`, indecomposable, self-dual, simple socle and head `D^{(5,2,2)}`.
  The pair's first-level theorem and its transfer are stated in exactly this
  p-regular convention.
- Brundan 1998 author manuscript: §2.2–2.4 (pp. 3–4) — residues `i-j`,
  `B_{i,j}(λ)`, `C_{i,j}(λ)`, lattice orders, `R_normal`, `R_good`, and
  Remark 2.4(II) (the transposed-node dictionary); Theorem 2.5/2.6 (pp. 4–5)
  — Hom criterion and the multiplicity-free socle `⊕_{i∈R_good} D^{λ(i)}`;
  Remark 2.7 — at most one good node per residue and the good-node factors
  lie in pairwise different blocks of `H(r−1)`; Example 2.8 (p. 5) — the
  printed table for `λ=(6,4,4,3,2)`, `ℓ=3,4` reproduced in the B item,
  including `R_good={1,5}` at `ℓ=3` and `R_good={1}` at `ℓ=4`.
- Kleshchev II (1995) GDZ scan: hash verified against the source manifest;
  the scan has no text layer (I could not re-read Theorems 0.4–0.6, and the
  batch notes record the same limitation). The pair cites it only for
  explicitly excluded statements (the Specht-to-restriction Hom criterion and
  the completely reducible case), so nothing asserted here depends on it.

## 5. Independent recomputations (scope-relevant checks)

- **Signature convention.** I implemented the A-page definition verbatim
  (residue `c-r mod p`; nodes ordered by increasing row, then column;
  repeated `-+` cancellation; normal `=` surviving `-`, good `=` leftmost,
  cogood `=` rightmost `+`) and compared it with Brundan's `B↓C` criterion
  via the dictionary `D(μ) ≅ D^{μ′} ⊗ sgn` (Brundan's `D_λ` is James's
  `D^{λ′}`, so the pair's `D(μ)` corresponds to Brundan's partition `μ`
  itself, with good nodes `{(i, μ_i) : i ∈ R_good(μ)}`). Over all `p`-restricted
  `μ` with `|μ| ≤ 10` and `p ∈ {2,3,5}` (288 cases) the page-convention
  normal and good nodes agree with Brundan's in **288/288** cases. The
  convention fixed in the scaffold definition is therefore the one required
  by the cited theories, including at `p=2` and in the transposed dictionary
  used by the A-page's transfer arguments.
- **Brundan's Example 2.8 table** (B item): I recomputed `B_{i,n}∩R` and
  `C_{i,n}∩R` for both characteristics from the definitions; both printed
  tables, `R_normal` and `R_good` sets, and the decomposability conclusion
  reproduce exactly.
- **Kleshchev 1997 worked example**: for `μ=(3,3,2,1,1)` (transpose of
  `(5,3,2)`, `p=3`) the page convention gives normals `{(3,2),(5,1)}`, good
  node `(3,2)`, `ε_2=2`, and the good-node factor `D(μ\(3,2)) = D((3,3,1,1,1))`,
  whose James label is `D^{(5,2,2)}` — matching the source's socle and its
  multiplicity `2`. The first-level multiplicity counts through the transfer
  also reproduce the source's `1,2,1`.
- **B item path** (`p=3`): the five cogood additions and the five good
  deletions of `∅→(1)→(1,1)→(1,1,1)→(2,1,1)→(3,1,1)` all check out with the
  added-node residues `0,2,1,1,2`, and the listed reduced signatures
  `(-), (-), (+,-), (-,-), (-)` are exactly what the definition produces.
- **Confirmed defect in the B stress-test item (statement and strategy).**
  The item claims that at `ℓ=4` "the restriction ... is ... indecomposable
  ... (socle `D^{(6,4,4,2,2)}`)". With `R_good(λ)={1}` and Brundan Theorem 2.6
  the simple socle is `D^{λ(1)} = D^{(5,4,4,3,2)}` (and by self-duality the
  head too); `(6,4,4,2,2) = λ(4)` comes from row 4, which the item itself
  calls normal-refuted. The correct clause is
  "indecomposable for `ℓ=4` (socle `D^{(5,4,4,3,2)}`)". The same wrong label
  recurs in the strategy, together with a loose citation "(Brundan (2.9))"
  (the socle is Theorem 2.6; self-duality is the §2.10 statement
  `D_λ^*≅D_λ`; (2.9) is the `#`-involution used in §5.7). `D^{λ(4)}` is not
  even a composition factor at `ℓ=4` (Theorem 2.5/2.6, equivalently survey
  Theorem 11.6(ii): row 4 is not normal). This is a statement defect, not a
  scope omission; it does not change the scope verdict (§9) but must be
  corrected during Step 3b authoring or by owner direction.

## 6. Prerequisites

All 24 distinct item references appearing in the pair's `deps` arrays and in
the item statements/strategies resolve: 11 are published items in `items/`
(`def-jucys-murphy-elements-of-the-symmetric-group-algebra`,
`def-restriction-induction-and-coinduction-for-group-modules`,
`thm-chinese-remainder-theorem-for-comaximal-ideals`,
`def-p-blocks-by-primitive-central-idempotents`,
`def-p-regular-and-p-restricted-partitions`,
`def-removable-and-addable-nodes-of-a-partition`,
`thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads`,
`prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`,
`lem-the-group-ring-is-free-over-a-subgroup-ring`,
`thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction`,
`def-module-radical-socle-head-and-loewy-series`), 5 are the batch-20
q-Schur/Schur-functor suppliers scaffolded in this run with the required
claims recorded in the cross-batch input
(`def-type-a-q-schur-algebra-and-weyl-modules`,
`def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras`,
`thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules`,
`def-quantum-characteristic-of-an-invertible-hecke-parameter`,
`prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`), and
the rest are in-pair scaffold items. The page-level `requires` resolve to
four published pages and the two in-run scaffolds
`type-a-hecke-specht-modules-and-cellular-bases` and
`cores-quotients-and-blocks-of-symmetric-groups`. **No prerequisite is
absent from both the published library and the current scaffold.**

Interface notes (for Step 3b; not unmet prerequisites):
1. The pair's items are stated over an arbitrary field `k` of characteristic
   `p` and appeal to "every field is splitting for symmetric groups", while
   the declared suppliers `thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads`
   and `prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`
   carry a splitting `p`-modular-system hypothesis. The arbitrary-field
   claims exist in the published library
   (`thm-james-submodule-theorem-over-an-arbitrary-field`,
   `thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions`,
   `lem-conjugate-specht-sign-duality-over-fields`), so this is a
   declaration/bridging obligation — Step 3b should either declare those
   suppliers (with the one-line spanning argument) or state the affected
   theorems under the splitting hypothesis.
2. The JM idempotent item uses pairwise commutativity of the JM elements,
   which is the published `cor-jucys-murphy-elements-commute-pairwise`, but
   the corollary is not declared in that item's `deps`.
3. `prop-every-p-restricted-partition-is-reached-by-cogood-node-additions`
   uses the term "modular branching graph", which is not defined anywhere in
   the library or this run's scaffold; the objects are covered by the
   operator definition and the reachability statement, but Step 3b should add
   a one-sentence definition (or rephrase) so the statement is well formed.

## 7. Mechanical checks (re-run on the current disk state)

| check | command | result |
|---|---|---|
| manifest deps | `node tools/manifest-deps.mjs research/frontier-44-…-batch-*.pages.json` | 858 items, 0 normalized, **0 errors** |
| manifest policy | `node tools/content-policy.mjs --manifest-only research/frontier-44-…-batch-*.pages.json` | 858 scoped items, **0 errors, 0 warnings** |
| coverage | `node tools/coverage-checklist.mjs research/frontier-44-…-batch-22.coverage.json --require-destination` | 2 pages, 29 harvested results, **0 errors, 0 warnings** |
| source fetch | `node tools/source-fetch-check.mjs --coverage research/frontier-44-…-batch-22.coverage.json` | **5/5 fetch-verified**, 5/5 resolved |
| plan | `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-…` | **OK**; only shared plan `redundant-prereq` advisories remain |
| Step 3 loader | `loadStep3` on the run | 50 pairs, 13+2 items for this pair; this pair's `scopeHash` `49b4eb991b226737…e5c16020`; decision pending review before this record |

The run is live and sibling batches are still being edited (861 items at
record time); batch 22 contains only this pair and was unchanged between the
reads above and the scope record.

## 8. Findings reported to the owner

1. **Confirmed defect (must be corrected before authoring closeout):**
   `ex-normal-and-good-nodes-for-a-large-partition` — for `ℓ=4` the simple
   socle of `D^λ↓H(r−1)` is `D^{(5,4,4,3,2)}`, not `D^{(6,4,4,2,2)}`;
   correct the statement and the strategy, and re-cite Brundan Theorem 2.6 /
   §2.10 instead of "(2.9)". Evidence: Brundan manuscript pp. 4–5 (Example
   2.8 table, `R_good={1}` at `ℓ=4`; Theorem 2.6), recomputed in §5.
   Correcting the statement changes this pair's `scopeHash`, so after the
   edit the owner (or a fresh review) must record the amended scope again.
2. **Interface notes** (arbitrary-field suppliers; undeclared JM
   commutativity corollary; undefined "modular branching graph" term) — see
   §6, recommended as Step 3b obligations.
3. **Deferral disposition** — the batch-21 Tomczak §4.2+ deferral is not
   carried by this pair's design; the owner may drop or re-home it (§3).
4. **Uncertainty** — the Kleshchev II (1995) scan has no text layer; no
   asserted claim of this pair depends on it (§4).

## 9. Decision

`sufficient` (scope only). The planned definitions, results and examples
adequately cover the intended subject "exact modular restriction/induction
and good nodes": all 13 + 2 design items are scaffolded with their design
scope and sources, the three sources were re-fetched byte-identically and
read at the cited locators, the central signature convention was
independently validated against Brundan's criterion in 288/288 cases and on
the pair's worked examples, all dependencies resolve to published or
scaffolded suppliers, and the intended downstream interface (the Fock-space
pair) is present. The one confirmed defect is a local label error in the B
stress-test example reported in §8; it is not an omitted topic or result, so
the scope verdict stands, but the label must be corrected and the amended
scope re-recorded. No scaffold file was edited and no item approval is
implied.
