# Frontier 37 owner 30, batch 7: Step 1 construction notes

Owned pair: `riemann-roch-for-curves-via-euler-characteristics` (A page,
order 366.087) and `riemann-roch-for-curves-via-euler-characteristics-examples`
(B page, order 366.088), both `scheme-theory`. The binding
`research/frontier-37-owner-30-owner-authoring-direction.md` does not exist
(checked before construction), so the design section and the current plan
govern. No published item, shared plan, engine state, verdict, or other
batch's file was edited. Only the batch-7 manifest, coverage, cross-batch
input, this note, and the 44 batch-7 Step-1 readiness records were written.

## Construction history and scope

- Design section AV-24 of `research/plan-algebraic-geometry-track.md` occupies
  lines 1716–1775 (the dispatch's L1698 pointer lands inside AV-23's B list;
  the AV-24 heading is at line 1716). The design lists 31 A items and 10 B
  items and fixes the proof route: the Euler-characteristic form without Serre
  duality, with the symmetric form deferred to the local residue-duality chain
  of AV-25. `research/plan-spec.json` carries the pair at order 366.087 with
  the identical four `requires` and an empty item list, so the plan fixes the
  page contract and the design governs the inventory; no plan/design item
  conflict arises. (Checked in this dispatch.)
- The delivered manifest has 34 A items and 10 B items (44 total): on the A
  page 4 definitions, 14 lemmas, 6 theorems, 9 corollaries and 1 remark; on
  the B page 7 examples and 3 counterexamples. The three B `ai-generated`
  statements (`ex-adding-point-section-dimension-jump`,
  `ex-nonspecial-large-divisor`, `ex-empty-divisor-euler-characteristic`)
  carry `generation.role: example` and are not dependency targets of any
  item in the run. The B inventory is exactly the design list.
- Three necessary local A lemmas were added because no item on disk provides
  them (checked by id and by content search): 
  `lem-projective-line-divisors-classified-by-degree` (the degree
  isomorphism CaDiv(P^1)/Prin → Z, needed both for
  `cor-picard-projective-line-integers` and as the rank-one base case of
  Birkhoff–Grothendieck), 
  `lem-smooth-curve-coherent-torsion-free-locally-free` (coherent
  torsion-free ⟹ locally free on a smooth curve, with the "has a nonzero
  global section" form used by the maximal-line-quotient step), and
  `lem-nonzero-map-invertible-to-locally-free-injective` (a nonzero map from
  an invertible sheaf into a finite locally free sheaf is injective;
  projectivity is not needed, so the lemma is stated for integral schemes).
  All three resolve entirely to published or earlier-in-run suppliers.
- Listing-order deviation, recorded not escalated: the manifest orders the
  construction as cor-existence-rational-function-bounded-pole →
  cor-smooth-proper-curve-finite-map-projective-line →
  thm-h1-line-bundle-vanishes-sufficiently-high-degree →
  cor-riemann-theorem-large-degree → thm-genus-zero-point-implies-projective-line,
  while the design table lists the vanishing theorem before the two
  corollaries that build its input morphism; the delivered order is the
  prerequisite order the proofs require.
- Route deviations from the design text, all within scope, recorded here:
  (i) `thm-h1-line-bundle-vanishes-sufficiently-high-degree` is proved by the
  projectivity route — a finite φ: C → P^1_k gives an effective A with
  O_C(A) ≅ φ*O(1); pullback of the ample O(1) along a finite morphism is
  ample (`lem-ample-pullback-finite-morphism`), so a power is very ample
  (`thm-ample-powers-very-ample-proper-base`), and `thm-serre-vanishing`
  produces n_0; monotonicity of h^1 (`lem-h1-stabilizes-downward-point-removal`)
  then covers every effective E. The theorem is deliberately fixed-direction:
  n_0 may depend on D_0 and φ, and no 2g−2-type threshold is claimed.
  (ii) The universal thresholds (deg K = 2g−2, h^0(K) = g, vanishing above
  2g−2, base-point-freeness at 2g, very ampleness at 2g+1) are explicitly
  deferred to the duality pair in
  `rem-sharp-degree-thresholds-wait-for-duality`; nothing on this page quotes
  them.
  (iii) `cor-picard-projective-line-integers` is proved directly through the
  new divisor-classification lemma rather than through any published Picard
  computation; the Birkhoff–Grothendieck chain uses it only as the rank-one
  base case, so no circularity arises (`item-dependency-levels` reports no
  cycle).
- Strategy repair made during this construction attempt:
  `lem-divisor-order-monotonicity-sections` had a garbled sentence in its
  strategy field; it was rewritten to state the subsheaf injection, the
  evaluation-kernel identification, and the bound dim L(D+p)/L(D) ≤ [κ(p):k].

## Repairs made in this dispatch (post-audit)

- Three missing dependency declarations were added, each verified as a real
  use before adding:
  - `def-little-l-divisor` → `lem-riemann-roch-space-finite-dimensional`
    (the statement's own well-definedness clause "finite by
    lem-riemann-roch-space-finite-dimensional" was not declared; the sibling
    definition `def-index-speciality-divisor` declares the same supplier for
    the same reason).
  - `cor-nontrivial-degree-zero-line-bundle-no-sections` →
    `lem-projective-line-divisors-classified-by-degree` (its proof of the
    plane-cubic instance uses g(P^1_k) = 0, computed by that lemma).
  - `ex-degree-zero-principal-divisor` → `cor-picard-projective-line-integers`
    (the statement cites it for "degree zero on P^1 forces the class to be
    trivial").
  After the additions `dependency_level` was recomputed for all 44 items with
  `item-dependency-levels.mjs` (levels: 0:2, 1:1, 2:1, 3:2, 4:1, 10:1, 11:3,
  12:6, 13:3, 14:1, 15:1, 16:1, 17:2, 18:4, 19:4, 20:4, 21:5, 22:2; 94
  intra-batch edges). `def-little-l-divisor` moved 11 → 12 and
  `def-index-speciality-divisor` 12 → 13; no consumer level changed.
- Four harvest dispositions in the batch-7 coverage file were corrected from
  included/inline to `deferred` with destination
  `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`,
  because they claimed absorption into batch-7 items that do not use them:
  - Fulton Ch. 8 §8.4 Proposition 6 (Ω_k(K) one-dimensional) had been mapped
    inline to `lem-smooth-curve-coherent-torsion-free-locally-free`, which
    does not use it; the torsion-free lemma is backed by Artin Lemma 8.1.1.
  - Fulton Ch. 8 §8.6 Riemann–Roch in the form l(D) = deg D + 1 − g + l(W−D):
    this page proves the Euler-characteristic form only; the l(W−D) statement
    is the Serre-duality identification.
  - Fulton Ch. 8 §8.6 Proposition 9 (δ(D) = l(W−D)) and Corollary 1
    (l(W) = g): both are duality statements; `def-index-speciality-divisor`
    explicitly refuses the identification and the genus definition uses only
    1 − g = χ(O_C).
  The two rows the fix script initially over-matched (Fulton's
  "Euler-characteristic content" row and the "§8.2 Proposition 3(2) and §8.3
  Corollary 1-3" row) were restored exactly; all 69 rows now differ from the
  first-pass file only in these four dispositions, and the four fetch stamps
  are preserved. The remaining `inline` rows were re-checked against their
  targets one by one and are genuine absorptions.

## Choice and dependency audit

- 24 of 44 items declare `def-axiom-of-choice`, each naming its use in the
  statement or strategy. The five proof-bearing items without a choice
  declaration have choice-free proofs (pure divisor/monotonicity and
  DVR/coherence arguments): `lem-divisor-order-monotonicity-sections`,
  `lem-divisor-decomposition-positive-negative-points`,
  `cor-negative-degree-no-sections-rr`,
  `lem-nonzero-map-invertible-to-locally-free-injective`,
  `lem-degree-zero-effective-divisor-empty`. This matches published practice
  (2,634 of 21,782 items on disk declare AC — the library declares it where a
  proof uses it, not for every transitive consequence). No
  `def-dependent-choice` or countable-choice declaration is needed beyond
  what the published suppliers already carry.
- Transitive closure audit of all 44 items: 2,165 externally reached suppliers,
  0 unresolved ids (every supplier is published or scaffolded in this run),
  0 published `proved_here: false` suppliers, no cycle, and no path to
  `deferred-set-theory-beyond-choice` (checked explicitly; the Foundations
  boundary is untouched). Choice nodes reached are AC, DC and countable
  choice, all through published scheme infrastructure.
- Implicit-use scan: every item-id token occurring in a statement or strategy
  was compared against that item's `deps`. Apart from the three declarations
  added above, the only remaining named-but-undeclared token is the batch-6
  counterexample `cex-degree-zero-line-bundle-no-section` in the statement of
  `cor-nontrivial-degree-zero-line-bundle-no-sections`; that mention is
  bookkeeping about the design promise (see Unresolved findings), not a proof
  use, so no cross-batch edge is declared for it.
- Hypothesis/direction checks against the suppliers actually used (statements
  read on disk or in the run manifests): `thm-serre-vanishing` (proper over a
  Noetherian base, ample invertible sheaf, coherent module),
  `thm-ample-powers-very-ample-proper-base` (proper + finite type over
  Noetherian base), `lem-ample-pullback-finite-morphism` (finite morphism),
  `cor-projective-cohomology-finite-dimensional-field` (proper over a field),
  `thm-local-ring-smooth-curve-dvr` + `cor-dvr-is-a-pid` +
  `cor-finitely-generated-torsion-free-modules-over-a-pid-are-free`
  (the locally-free criterion), `ex-cohomology-o-d-projective-line-all-d`
  (h^0(O(d)) = max(d+1,0), h^1(O(d)) = max(−d−1,0), and H^1(O(k)) = 0 for
  k ≥ −1 used for the splitting lemma),
  `thm-line-bundle-rational-section-cartier-divisor` and
  `lem-effective-divisors-sections-mod-scalars` (section↔divisor dictionary),
  `thm-plane-curve-arithmetic-genus` (smooth plane cubic has p_a = 1). The
  Birkhoff–Grothendieck induction was checked end to end: maximal b with
  H^0(E(−b)) ≠ 0 and H^0(E(−b−1)) = 0, injectivity of the inclusion
  O(b) → E, F = E/O(b) locally free of rank r−1, the twisted sequence giving
  H^0(F(−b−1)) = 0 hence all summand degrees ≤ b, and splitting by
  H^1 of twists with nonnegative degrees.

## Sources and harvest

- Four independent treatments back the A page, each with a recorded full-text
  fetch stamp in `research/frontier-37-owner-30-batch-7.coverage.json`:
  Fulton, *Algebraic Curves* (706,612 bytes, SHA-256 prefix `937a5c2a962b5de1`,
  129 PDF pages, Ch. 8 §§8.1–8.6, printed pp. 97–108); Artin, MIT 18.721
  (3,056,656 bytes, `c81f79d211aa4d49`, 189 pages, Ch. 8 §§8.1–8.4, PDF
  pp. 160–171); Vakil, *The Rising Sea* (Oct 21 2025, 9,643,655 bytes,
  `d07177aa0317c134`, 852 pages, §18.4 and §18.5.3–18.5.7 with Exercises,
  printed pp. 506–517); Stacks, *Algebraic Curves* tag 0BRV (745,082 bytes,
  `c4e3d4c0fc533a3d`, 71 pages, standalone sections 3, 5–8). Batch 7 alone:
  4/4 fetch-verified, 4/4 resolved, zero drops or owner escalations; the
  stamps were re-verified in check mode in this dispatch.
- Locator drift, recorded not escalated: the design cites "Vakil Ch. 21
  §§21.5–21.9, pp. 444–460", which belongs to an earlier edition; the
  accessible 2025 PDF places the same material at §18.4 and §18.5.3–18.5.7,
  printed pp. 506–517, and the coverage locator says so. The design's Stacks
  "§§53.3, 53.5–53.8" is the book chapter numbering and corresponds exactly
  to the standalone PDF's sections 3, 5–8; the coverage locator records both
  conventions. Fulton and Artin locators match the design as given.
- Harvest: 69 named results, each with one disposition — 13 included, 24
  inline, 24 deferred, 8 out-of-scope. All deferred destinations resolve
  (mostly `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`,
  with plane-curve and Cartier items to the batch-5/batch-6 pages). The
  coverage gate emits its advisory `coverage-low-yield` warning (13/69
  scaffolded); the declines are documented per row with specific reasons, and
  Alpha should confirm the 24 inline absorptions against the four sources at
  Step 5. A reading of the extracted source texts in this dispatch confirmed
  the Fulton §8.4/§8.6 mappings adjusted above and the Vakil §18.4.1
  (Exercise 18.4.B) Euler-characteristic form.

## Cross-batch input

`research/frontier-37-owner-30-batch-7.cross-batch-dependencies.json` reviews
all 118 declared cross-batch edges whose consumer is in batch 7: 116 item
edges and 2 page edges. 59 item edges and one page edge point at batch 5,
57 item edges and one page edge at batch 6; every row is `open` with the exact
required claim and the draft-supplier evidence, since both batches are draft
suppliers of this run. After the final dependency edit the unified ledger was
refreshed (`node tools/frontier-dependency-ledger.mjs refresh --run
frontier-37-owner-30`): 195 edges total, all 118 batch-7 edges carry reviews,
0 orphaned reviews. `--require-reviewed` still fails only for input batch 8
(2 unreviewed edges, consumers in batch 8) — another owner's open work.

## Unresolved findings (routed to owner / Step 3)

- Batch-6 consumer expectation. Design AV-23 records
  `cex-degree-zero-line-bundle-no-section` as "stored for post-RR proof" and
  AV-24 requires `cor-nontrivial-degree-zero-line-bundle-no-sections` to
  "supply the promised proof". The frozen batch-6 manifest instead gives the
  counterexample an independent local proof route (deps
  `cor-degree-descends-picard-curve`, `thm-degree-positive-line-bundle-sections-zero-bound`,
  `thm-plane-curve-arithmetic-genus`, `lem-function-with-poles-defines-map-p1`
  and friends) with no `forward_refs` and no dependency on any batch-7 item;
  batch-6's cross-batch input contains no row with consumer
  `cex-degree-zero-line-bundle-no-section` and supplier
  `cor-nontrivial-degree-zero-line-bundle-no-sections`. Batch 7 supplies the
  promised corollary regardless (it is a leaf in this manifest). Owner /
  Step-3 reconciliation: either accept the independent batch-6 proof and
  record no edge, or, if the post-RR proof is still wanted as the cex's
  supplier, add exactly one row to
  `research/frontier-37-owner-30-batch-6.cross-batch-dependencies.json`
  (kind `item`, consumer `cex-degree-zero-line-bundle-no-section`, supplier
  `cor-nontrivial-degree-zero-line-bundle-no-sections`, status `open` with the
  post-RR proof evidence) and refresh the ledger. This batch cannot edit
  another batch's input file.
- Whole-run blockers remaining after this batch, both owned by batch 8:
  the two empty scaffold inventories
  (`residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` and
  its B companion) and batch 8's missing cross-batch input (2 unreviewed
  edges). Everything batch 7 owns is closed.
- Plan-level advisory, recorded not escalated: `validate-plan.mjs` exits 0
  and emits four `redundant-prereq` warnings naming this A page's plan-level
  `requires` entries (e.g. `cartier-and-weil-divisors-line-bundles-and-picard-groups`
  is already reached through `smooth-proper-curves-divisors-genus-and-ramification`).
  These are advisories on `research/plan-spec.json`, which this batch must not
  edit; no manifest change can remove them.

## Readiness records

All 44 items carry current `research/frontier-37-owner-30-step1-<id>.json`
records: 44/44 `ready`, none `escalated`, each hash matching the frozen
manifest, recorded in prerequisite (`dependency_level`) order, each naming
the examined dependency ids and the closure/coverage evidence. No record was
overwritten. `node tools/step1-decisions.mjs check --run
frontier-37-owner-30` returns 719/719 run items ready, with open work only for
batch 8's two empty inventories.

## Validation snapshot

| Check | Result |
| --- | --- |
| `coverage-checklist.mjs` batch 7 (`--require-destination`) | 1 page, 69 harvest rows, 0 errors, 1 advisory `coverage-low-yield` warning |
| `source-fetch-check.mjs` batch 7 (check mode) | 4/4 sources fetch-verified, 4/4 resolved, 0 documented drops |
| `url-sweep.mjs --coverage` batch 7 | 4/4 URLs live, 0 failed, 0 suspect; 4 citation decisions, 0 documented drops |
| `source-backing.mjs` batch 7 | 10 authored (included) results, every one backed by an openable source |
| `manifest-deps.mjs` (all 30 manifests) | 719 items, 0 errors |
| `content-policy.mjs --manifest-only` (all 30 manifests) | 719 scoped items, 0 errors, 0 warnings |
| `item-dependency-levels.mjs check --run` | batch 7 clean; the only errors are batch 8's two empty inventories |
| `step1-decisions.mjs check --run` | 719/719 items ready; open work only batch 8's two empty inventories |
| `validate-plan.mjs research/plan-spec.json` | exit 0; advisory `redundant-prereq` warnings include four naming this A page (plan-level, not editable here) |
| `fwdcheck.mjs` | exit 0 — every forward reference declared, strictly forward, closed by a planned later page |
| `extcheck.mjs` | exit 0 — no new external-reference findings in this batch's closure |
| `manifest-integrity.mjs --run` | 60 pages owed, 60 in the manifests, no scope drift |
| `drift-review-check.mjs --run` | 30 pages reviewed, 0 blocked edges, every owed A/B page above the 95% published-or-earlier-in-run threshold |
| `frontier-dependency-ledger.mjs refresh --run` | 195 edges, batch-7 input complete (118/118 reviewed), no orphaned reviews; `--require-reviewed` fails only on batch 8 |

Owner/operator reconciliation and the full engine gate follow construction;
neither a worker exit nor a readiness record is independent mathematical
approval. Step 3 provides that review.
