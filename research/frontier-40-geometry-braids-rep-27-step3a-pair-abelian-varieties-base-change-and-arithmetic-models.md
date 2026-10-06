# Step 3a dispatch report — `abelian-varieties-base-change-and-arithmetic-models`

- Run: `frontier-40-geometry-braids-rep-27`, batch 27, orders 917/918, category
  `algebraic-geometry`.
- A page: `abelian-varieties-base-change-and-arithmetic-models` (67 items, levels 0–15).
  B page: `abelian-varieties-base-change-and-arithmetic-models-examples` (2 items).
- Role: alpha scope review of this pair only. No scaffold was edited; this report and the
  `record-scope` receipt are the only outputs. This step decides scope, not proof correctness,
  and is not an item approval or an owner record.
- **Decision: `sufficient`** — AG-ARITH-1's four A commissions and both B examples are present,
  the planned definitions/results/examples cover the promised subject with the design's
  item-by-item hypothesis discipline, source coverage reaches every commission, and no
  prerequisite claim is absent from the published library plus this scaffold. Two confirmed
  scaffold-level findings (§5) need owner/authoring reconciliation but are not subject omissions.

## 1. Inputs read

- Design/prose: `research/plan-algebraic-geometry-expansion-track.md` — AG-ARITH-1 table row
  (line 273) and the breadth-roadmap context; `research/plan-spec.json` rows 917/918 (empty item
  lists; the manifest is the item inventory for this run).
- Current manifest: `research/frontier-40-geometry-braids-rep-27-batch-27.pages.json` (both pages,
  all 69 items with statements, strategies, deps, sources, levels).
- Coverage: `research/frontier-40-geometry-braids-rep-27-batch-27.coverage.json` (9 stamped
  sources, 113 harvested rows; every decline read).
- Dependency/run records: `…-batch-27.notes.md`, `…-batch-27.cross-batch-dependencies.json` (`[]`),
  `…-scope-ledger.json`, `…-planning-notes.md` (batch-27 row), `…-selection.json`,
  `…-alpha-step1-drift.md` (this page: VERDICT `no-drift`), `…-run-record.md` (the recorded root
  scope ruling of 2026-10-04).
- Owner decisions/repair: `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`;
  `research/frontier-40-geometry-braids-rep-27-owner-arithmetic-models/initial-notes.md`
  (original 28-item scaffold and its three superseded escalations), `resumed-review.md`
  (resumed Step-1 owner repair to 69 items, the scope closure and the recorded limits),
  `readiness-refresh.json`, and the dual/neron/etale closure packets in that directory.
- Published library: page homes of all 257 declared suppliers, and statement-level reads of the
  load-bearing suppliers listed in §4; `items/` (23 441 items) for existence and `status:
  published`. Historical `research/*RESUME.md` files were not used.

## 2. Design ∶ scaffold comparison (scope only)

AG-ARITH-1 promises exactly four A results — `thm-abelian-variety-dual-and-polarization`,
`thm-good-reduction-and-smooth-proper-base-change`, `def-neron-model-and-mapping-property`,
`thm-neron-model-existence-in-stated-class` — plus two B items
(`ex-elliptic-curve-good-and-bad-reduction`,
`cex-abelian-variety-does-not-have-good-model-over-every-base`), with the instruction to "state
base, finite type, smoothness, and residue-characteristic restrictions item by item".

| design promise | delivered scaffold |
|---|---|
| `thm-abelian-variety-dual-and-polarization` | present (level 12): (a) representable degree-zero Picard functor, dual abelian variety, Poincaré sheaf, biduality; (b) functoriality and Cartier-dual isogeny kernels; (c) Mumford maps and finiteness of `K(L)`; (d) polarizations, existence, square degree, projectivity; over arbitrary fields, char 2 handled |
| `thm-good-reduction-and-smooth-proper-base-change` | present (level 15): (a) good reduction with unique abelian-scheme model = Néron model; (b) base change of models; (c) coherent cohomology-and-base-change with exact surjectivity hypotheses; (d) explicit residue hypotheses; (e) prime-to-residue-characteristic NOS clause |
| `def-neron-model-and-mapping-property` | present (level 0): Néron model, mapping property, weak model, local model, uniqueness; no existence asserted |
| `thm-neron-model-existence-in-stated-class` | present (level 13): existence and uniqueness for every DVR, abelian variety over the fraction field, no excellence/completeness/perfect-residue/reduction-type hypothesis |
| `ex-elliptic-curve-good-and-bad-reduction` | present (B, level 7): constant good-reduction model; bad reduction of `Y²Z = X³ + tZ³`; potential good reduction after a ramified extension |
| `cex-abelian-variety-does-not-have-good-model-over-every-base` | present (B, level 8): same curve, independent counterexample that no abelian-scheme model exists |

The remaining 63 A items are the ordered local closure the owner repair requires and the owner
direction permits: projective plane-cubic/2-torsion inputs for the B example (5–6, 13), strict
henselization/smooth-section and defect-of-smoothness helpers (7, 15–18, 24–25), the
projective-weak-model → smoothening → invariant-volume minimal-model → strict-law completion →
ample-pair descent chain (30, 35–36, 40–41, 45, 47, 49, 51, 53, 57, 60, 63), the coherent/dual
packet (23, 31–37, 42, 48, 50, 52, 54–56, 58–59, 61), and the NOS/Tate packet (14, 29, 46, 65).
No commissioned claim is dropped, weakened, converted to a remark, or moved off the pair; the
separate `thm-arith-neron-ogg-shafarevich-prime-to-residue-characteristic` is an addition that
strengthens the pair's arithmetic content.

Hypothesis discipline (spot-checked against every promised item's statement): base scheme (arbitrary
field; Dedekind scheme; arbitrary DVR), finite type/smoothness/properness, and residue restrictions
are explicit; the NOS and torsion clauses require `ℓ ≠ char k`; the short-cubic B examples require
`k` of characteristic ≠ 2, 3; clause (d) of the good-reduction theorem states that no residue
restriction is imposed in (a)–(c) and explains why the finite-flatness clauses carry the exact
surjectivity hypotheses. No uncommissioned claim is present.

Interpretive point, recorded not concealed: the design's source note mentions "étale-cohomological
good-reduction theorems". The run-record root scope ruling (2026-10-04) preserves the coherent
structure-sheaf base change and the full NOS conclusion via finite-étale torsion, and explicitly
does not add general all-degree étale cohomology, `H¹_ét`/Tate identification or lisse higher
direct images. The scaffold matches that ruling exactly (item 66 clauses (c) and (e)), so the
promised item inventory is intact; the broader étale foundation would be a separate future pair,
not a missing claim of this pair.

## 3. Source coverage

- `node tools/source-fetch-check.mjs --coverage …-batch-27.coverage.json` → 9/9 fetch-verified,
  0 documented drops (run today).
- Independent live re-fetch today of the two load-bearing texts, byte-identical to the recorded
  stamps: BLR *Néron Models* (7 932 081 B, sha256 prefix `16d0701b4192ae9d`) and Milne *Abelian
  Varieties* v2.00 (1 291 594 B, sha256 prefix `f5ca4e63e5092a4b`). Direct reads from the
  re-fetched PDFs: BLR 1.3/1 with Corollary 2 (Néron model existence iff bounded `K^sh`-points;
  abelian varieties therefore admit Néron models over every DVR — no excellence hypothesis);
  BLR 7.4/5 Theorem 5 (the four equivalent conditions: abelian reduction, `A` an abelian scheme,
  inertia acting trivially on every `ℓᵛ`-torsion, unramified Tate module — the exact model of
  `thm-arith-neron-ogg-shafarevich-prime-to-residue-characteristic`); Milne I.17.1–17.2 (Néron's
  representability theorem defining the Néron model; good/multiplicative/additive reduction).
- `coverage-checklist --require-destination` → 2 pages, 113 harvested rows, 0 errors, 1 advisory
  `coverage-low-yield` (18/104 A-page rows included). Alpha confirmation requested by the advisory:
  the declines are legitimate for AG-ARITH-1 — they are the general nonproper-group
  boundedness/Artin-approximation branches (BLR 1.3/1 general clause, 3.5 optional branches,
  Ch. 10.2), semistable reduction and Raynaud monodromy (Milne I.17.3, Lombardo 4.11/9.1),
  EGM cohomological/theta applications beyond the contract, and the unused weak-model converse
  1.2/9. Each carries an individual reason; the commissioned abelian/NOS clauses are split out from
  the declined aggregates.
- Source-treatment note (honest limit): a complete proof source was read for the Néron existence
  theorem only in BLR (Chapters 1–6 targeted reads); Milne I.17 and Lombardo 4.3 corroborate the
  statement. The dual/polarization packet is corroborated by EGM, Kleiman and Milne AV; coherent
  base change by EGA III/IV extracts and the published cohomology-and-base-change carrier. Proof
  adequacy of the local closure remains Step 3b/Step 5 work.

## 4. Prerequisite audit

Mechanical resolution of the pair's declared graph (script over the current manifest): 257 distinct
direct suppliers = 66 own-pair + 191 published; 0 missing; 0 suppliers from other in-run batches;
0 unresolved. All 191 published suppliers carry `status: published`; the own-pair graph is acyclic
and levels 0–15. A reverse scan of all 26 other batch manifests finds no consumer of any batch-27
item (cross-batch record `[]` confirmed). Page `requires`: the A page declares five published pages
(orders 885, 887, 903, 366.083, 905, all before 917; the last is the Hilbert supplier genuinely
used by `lem-arith-hilbert-divisor-charts-and-picard-diagonal`, five item-level deps), the B page
requires the A page, and the B items have no external consumers (leaf page; the counterexample uses
the earlier B example on its own page — legal).

Statement-level spot checks of load-bearing published suppliers (statements read on disk, not full
proofs): `thm-cohomology-and-base-change` (proper finite-presentation, flat coherent `F`; clauses
(a)–(c) match item 66(c) exactly), `lem-cohomology-base-change-finite-free-criterion`,
`lem-proper-flat-fp-cohomology-perfect-complex`, `thm-hilbert-scheme-represents-projective-flat-families`,
`lem-hilbert-regularity-propagation`, `thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation`,
`thm-nonaffine-group-scheme-normal-subgroup-quotient`,
`thm-nonaffine-abelian-multiplication-finite-faithfully-flat`,
`lem-nonaffine-finite-field-descent-scheme-with-affine-orbits`,
`lem-nonaffine-effective-affine-algebra-descent`, `thm-serre-criterion-ampleness`,
`lem-ample-stable-positive-power`, `thm-nonaffine-regular-local-ring-is-ufd`,
`thm-valuative-criterion-properness`.

**Finding P1 (confirmed, structural — non-scope).** The B item
`ex-elliptic-curve-good-and-bad-reduction` declares the supplier
`ex-elliptic-curve-as-nonaffine-algebraic-group`, whose only page home is
`nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties-examples` (a B/examples page of
a different pair). SCHEMA.md ("An item homed only on a B/examples page cannot be another page's
dependency; earlier items on that same page are allowed") and `tools/depcheck.mjs`'s
`b-leaf-content` rule will reject this edge once the item file is authored; the manifest-only
`content-policy` gate passed only because out-of-batch targets are existence-checked there. The
required claim is available from A-homed published items (`thm-elliptic-cubic-chord-tangent-group-law`,
`thm-complex-torus-weierstrass-cubic-isomorphism`, `def-abelian-variety-over-a-field` on the
published `complex-analysis/elliptic-functions-and-complex-tori` and AG-GRP-1 pages), so the repair
is a dependency/route change during authoring, or an owner re-home of the example — no scope
enrichment is needed. This is the only B-leaf edge in the pair (scan of all 257 deps).

**Finding P2 (confirmed, declaration gap — non-scope).** `def-abelian-scheme`'s Statement cites
`[[def-abelian-variety-over-a-field]]` but does not list it in `deps`; the post-authoring
`cited-not-in-deps` check will flag it. Recommended scaffold addition: declare that dependency (or
drop the wikilink). No other statement or strategy wikilink is undeclared or unresolved.

## 5. Intended role and consumers

- The A page is the library's arithmetic-geometry spine for abelian varieties at order 917, after
  the AG-GS/AG-GRP sequence and the Hilbert pair; the B companion is a leaf. The four promised
  items are the advertised interface (dual/polarization, coherent base change with good reduction
  and NOS, Néron definition, arbitrary-DVR existence).
- No consumer in the current run's other 26 batch manifests uses any batch-27 id; the pair's
  external role is future (reduction/moduli-style content). The page `requires` are the declared
  reading-order edges, all published and earlier.

## 6. Mechanical checks (observed today)

| Check | Result |
|---|---|
| `node tools/manifest-deps.mjs …-batch-27.pages.json` | exit 0; 69 items, 0 errors |
| `node tools/coverage-checklist.mjs …-batch-27.coverage.json --require-destination` | exit 0; 2 pages, 113 rows, 0 errors, 1 advisory (confirmed above) |
| `node tools/source-fetch-check.mjs --coverage …-batch-27.coverage.json` | 9/9 fetch-verified, 0 drops |
| `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` | exit 0; 892 items, 54 pages, no errors (max level 39 run-wide; this pair ≤ 15) |
| local closure script over the 69 items | 257 direct deps = 66 own + 191 published; 0 missing; 0 other-batch; reverse scan: no external consumers |
| live re-fetch of BLR and Milne AV | byte sizes and sha256 prefixes exactly match the coverage stamps |

These are local structural and source-stamp checks on the current tree, not engine acceptance and
not a proof-correctness verdict.

## 7. Decision and recording

`sufficient` — the planned definitions, results and examples adequately cover AG-ARITH-1's
promised subject (dual/Poincaré/biduality/polarization; coherent base change, good reduction and
prime-to-residue-characteristic NOS; Néron definition and mapping property; arbitrary-DVR Néron
existence), with the design's item-by-item hypothesis and residue-characteristic discipline and
the recorded root scope ruling on étale technology. No omitted topic or result was found, so no
merger or enrichment is recommended. Findings P1 (B-homed supplier edge that the post-authoring
dependency gate cannot accept) and P2 (undeclared wikilink in `def-abelian-scheme`) are confirmed
scaffold-level defects with concrete repairs; they do not change the pair's subject coverage and
are referred to the owner/Step 3b. Non-blocking bookkeeping observations: the BLR "Chapters 5–6"
aggregate decline coexists with used 5.1–5.3/6.x sub-rows (planned-local closure), and several
recently published frontier-38 suppliers carry judge passes without audited/verified stamps (the
owner has already recorded this; root publication-evidence reconciliation remains).

Recorded with `node tools/step3-decisions.mjs record-scope --run
frontier-40-geometry-braids-rep-27 --page abelian-varieties-base-change-and-arithmetic-models
--decision sufficient`, whose `sha256` covers the pair's current manifest bytes at review time.
