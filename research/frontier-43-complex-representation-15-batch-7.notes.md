# Batch 7 notes — `kazhdan-lusztig-bases-polynomials-and-cells`

Run `frontier-43-complex-representation-15`, role beta (Step 1 scaffold), batch 7,
attempt 2 (continued). Pair: `kazhdan-lusztig-bases-polynomials-and-cells` (A,
order 1540, `special-topics-in-representation-theory`) and
`kazhdan-lusztig-bases-polynomials-and-cells-examples` (B, order 1541).
Outputs written by this attempt: `research/frontier-43-complex-representation-15-batch-7.pages.json`
(21 A items, 3 B items), `research/frontier-43-complex-representation-15-batch-7.coverage.json`
(6 A-page sources, 5 B-page sources, 56 harvested results, fetch-stamped),
`research/frontier-43-complex-representation-15-batch-7.cross-batch-dependencies.json`
(empty), this file, and 24 item-readiness receipts
`research/frontier-43-complex-representation-15-step1-<item>.json`.
A readiness record is not mathematical approval: Step 3 authors the proofs and Step 5 reviews them.

## Inputs read

- `CLAUDE.md`, `SCHEMA.md` (item, source, provenance, verification, page and B-leaf rules), `WORKFLOW.md`,
  `briefs/beta-scaffold.md`.
- `research/frontier-43-complex-representation-15-owner-authoring-direction.md`, read in full. It is
  binding and **does not concern batch 7**: it addresses batches 13, 14, 1, 5 and 4 only (Beltrami
  regularity, RG-26/RG-30 representation drills, RG-29 property (T)). Its standing rules are followed:
  no `proved_here: false`, no `external_refs`, carry actual AC assumptions (none is needed here — every
  argument on the pair is finite and combinatorial, so all items are choice-free).
- Design `research/plan-kazhdan-lusztig-track.md` §1 KL-1 (L46 region), read completely, together with
  its pages table and the KL-2 consumer interface.
- `research/plan-spec.json` orders 1540/1541 (`id`, `title`, `kind`, `category`, `companion`, `requires`),
  `research/frontier-43-complex-representation-15-alpha-step1-drift.md` (VERDICT: no-drift for this page),
  `research/kazhdan-lusztig-planning/proposed-items.json`, and the batch-7 task file.
- The published suppliers actually consumed: `def-generic-type-a-hecke-algebra`,
  `thm-standard-basis-of-the-generic-type-a-hecke-algebra`, `def-symmetric-group`,
  `def-weyl-group-and-length-for-finite-gl-n`, `def-finite-symmetric-group-and-permutation-notation`,
  `def-bruhat-order-on-the-symmetric-group`, `def-bruhat-order-on-a-finite-weyl-group`,
  `lem-bruhat-covers-are-reflection-covers`, `thm-robinson-schensted-correspondence`,
  `cor-rsk-symmetry-under-inversion`, `def-row-insertion-and-bumping-route`,
  `def-young-tableau-standard-tableau-and-shape`, `def-partition-young-diagram-and-conjugate-partition`.
  All are on disk with `status: published`; none is an unproved archive record.

### Design vs plan

No conflict between the design's KL-1 table and `plan-spec.json`: the four declared page `requires`
match the design's prose exactly, and the design item ids used as suppliers are all published.
Two recorded observations:

1. **Planning record vs design, B page.** The design's B companion is "complete `S_2`, `S_3`, a singular
   interval, and RSK cell computations"; the supporting planning record
   `research/kazhdan-lusztig-planning/proposed-items.json` additionally proposed a fourth B item
   `cex-kl-positivity-does-not-follow-from-triangular-existence`. That counterexample is **not
   scaffolded**: refuting "positivity follows from triangular existence" needs a Hecke-theoretic setting
   where the triangular basis exists but a coefficient is negative, and the only such examples are in the
   unequal-parameter theory (affine Hecke algebras), whose definitions, sources and local closure are
   outside this pair's scope and sources. It is recorded here as an owner decision for a later pair
   (KL-8) or removal; the three design-mandated examples are built in full.
2. **Design wording vs source route.** The design says the last cell lemma uses "the lexicographically
   last descent set in a Knuth class". The published proof route that actually exists (Ariki §3.4) uses
   the column-superstandard tableaux and the comparison of column lengths, which is what the strategy
   states; the distinguished block-decreasing elements it compares are exactly the ones determined by
   their (lexicographically extreme) descent sets. No claim was weakened.

### Conventions fixed by the page

The page uses the `H_s^2 = 1 + (v^{-1}-v)H_s` normalization of Elias–Williamson §3.2, with
`q = v^{-2}` for the classical Kazhdan–Lusztig polynomials `P_{y,w}(q)`, and `H_w = v^{l(w)}T_w` with
`T_s^2 = (q-1)T_s + q` for the published RG-13 standard basis. The classical R-polynomial of the
literature is deliberately **not** restated in a separate variable: the printed normalizations differ
across sources (their `q`, sign and multiplication-side conventions), so all R-statements are given for
the coefficients `r_{y,w} ∈ Z[v^{±1}]` of `bar(H_w)` in the standard basis. This was checked to be the
version that satisfies the recursion/support/degree/inversion statements in the page's own variable.

## Inventory

A page (21 items; 14 are the design's proposed items, 7 are prerequisites the design's items need):

| # | item | level | role |
|---|---|---|---|
| 1 | `def-normalized-type-a-hecke-algebra-and-its-bar-involution` | 0 | design |
| 2 | `lem-the-hecke-bar-involution-is-well-defined` | 1 | design |
| 3 | `lem-bruhat-order-basic-properties-for-permutations` | 0 | added: subword/lifting/interval facts the R-induction and definition items use; upstream items supply only the definition and the Weyl-group form |
| 4 | `def-bruhat-interval-and-r-polynomials` | 2 | design |
| 5 | `thm-r-polynomial-recursion-and-degree-bounds` | 3 | design |
| 6 | `lem-verma-sign-sum-over-bruhat-intervals` | 4 | added: the leading-coefficient input of the existence theorem (Lusztig Proposition 4.8) |
| 7 | `thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis` | 5 | design |
| 8 | `def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization` | 6 | design |
| 9 | `thm-kazhdan-lusztig-basis-multiplication-formula` | 7 | added: the multiplication formula the recursion and the cell preorders are generated from (Lusztig §6, EW) |
| 10 | `thm-kazhdan-lusztig-polynomial-recursion` | 8 | design |
| 11 | `def-inverse-kazhdan-lusztig-polynomials` | 7 | design |
| 12 | `thm-kazhdan-lusztig-inversion-formula` | 8 | design |
| 13 | `def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells` | 9 | design |
| 14 | `def-knuth-and-dual-knuth-equivalence-for-permutations` | 0 | added: the Knuth relations the star lemmas are proved from (Knuth 1970) |
| 15 | `thm-knuth-equivalence-classes-are-insertion-tableau-fibers` | 1 | added: Knuth's theorem, needed for the extension of cell equivalence along Knuth classes |
| 16 | `def-star-operations-on-the-symmetric-group` | 1 | added: the star operation of Jensen Definition 5.1 / Ariki §3.2 |
| 17 | `lem-dual-knuth-star-operations-give-antiparallel-kazhdan-lusztig-graph-edges` | 10 | design |
| 18 | `lem-kazhdan-lusztig-mu-edges-and-left-cells-are-transported-by-star-operations` | 11 | design |
| 19 | `prop-same-insertion-or-recording-tableaux-imply-cell-equivalence` | 11 | added: the "easy" inclusion (Ariki Proposition 3.8), consumed by the classification |
| 20 | `lem-left-cell-equivalence-forces-equality-of-recording-tableaux-in-type-a` | 12 | design |
| 21 | `thm-type-a-kazhdan-lusztig-cells-are-classified-by-rsk-tableaux` | 13 | design |

B page (3 items): `ex-kazhdan-lusztig-bases-for-s-two-and-s-three` (level 8),
`ex-r-polynomial-and-kl-recursions-on-a-small-bruhat-interval` (level 9, the design's "singular
interval" — an interval carrying the nonconstant polynomial `1+q` and a non-cover μ-pair), and
`ex-rsk-left-right-and-two-sided-cells-in-s-three` (level 14, including the `S_4` left-cell table and
the same-descent-set caveat). B items are leaves: nothing depends on them.

## Mathematical verification performed in this attempt

Every claim the scaffolding asserts was checked by exact arithmetic in `/tmp/kl-src` (integer/Laurent
polynomial computations, no floating point), against the source texts downloaded and read:

- `reccheck.py`: the descent recursion of `thm-kazhdan-lusztig-polynomial-recursion` (Ariki Definition
  2.4, with `q = v^{-2}` and `c = 1` iff `s_i y < y`) holds for all `y ≤ w`, all descents, for `S_3`,
  `S_4`, `S_5` (24 + 388 + 8920 cases, 0 mismatches).
- `rcheck.py`: the R-recursion `r_{y,w} = r_{sy,sw}` if `sy<y`, `r_{y,w} = r_{sy,sw} + (v-v^{-1})r_{y,sw}`
  if `sy>y` (for `sw<w`) holds for `S_3`, `S_4` (0 mismatches).
- `degcheck.py`: support, `v`-parity, top coefficient 1, bottom coefficient `sgn(y)sgn(w)`, `p ∈ vZ[v]`
  and nonnegativity of the `p_{y,w}` all hold for `S_3`, `S_4`, `S_5`.
- `final_checks.py`: the multiplication formula of `thm-kazhdan-lusztig-basis-multiplication-formula`
  (both the left and the right version, including the `(v+v^{-1})` descent case) holds for `S_4`
  (0 failures); the star operation is exactly an elementary Knuth move on positions `i,i+1,i+2`
  (32 cases); the star preserves the insertion tableau `P`; the left star preserves the recording
  tableau `Q`.
- `starcheck3/4/5.py` and `preorder.py`: with the one-sided domains
  `D_ij = {w : ws_i<w, ws_{i+1}>w}` and the map `K_ij` of Ariki §3.2, the μ-transport holds for `S_3`,
  `S_4`, `S_5` (736 pairs, 0 failures) **in the `mu(·|·)` bar convention**, with equality of the
  transported leading coefficients; the left/right preorders are transported (`S_4`, `S_5`, 0 failures);
  `Q`-fiber transport (Ariki Proposition 3.7) holds for `S_3`, `S_4`, `S_5`.
- `intdata.py`: on `[s_2, s_2s_1s_3s_2] ⊂ S_4` (10 elements) the only nonconstant KL polynomial is
  `P_{1324,3412} = 1+q`, `mu(1324,3412) = 1` with length difference 3, the descent recursion at `s_2`
  reproduces `1+q`, `q'_{1324,3412} = -v-v^3` and `Q'P = 1` holds on the interval.
- `bdata.py`, `bdata2.py`, `cells4.py`: the `S_2`/`S_3` standard-basis, bar-image and KL-basis tables,
  the cover = μ-pair list in `S_3`, the `S_3` and `S_4` RSK tableaux and the cell partitions
  (left cells = `Q`-fibers, right cells = `P`-fibers, two-sided = shape fibers) — all as stated on the B
  page; and the descent caveat (1324 vs 2413).

Two corrections of the first attempt's draft came out of this verification and are reflected in the
manifest: (i) the μ-transport lemma is stated on the **one-sided** domains `D_ij` with Ariki's bar
convention `mu(·|·)` — the earlier `D_i`-wide directional statement is false (counterexample found at
`n = 5` for `S_{i} = {s_3,s_4}`), while the corrected statement holds; (ii) the classical R-polynomial
dictionary was removed because no single printed convention could be verified to match the page's
recursion (see "Conventions fixed by the page" above).

## Sources

Six independent treatments back the A page (well above the two-treatment minimum; two monographs and
one lecture-note set are among them): Elias–Williamson arXiv:1212.0791 §3.2 (the chosen normalization
and the KL basis characterization); Lusztig, *Hecke Algebras with Unequal Parameters*, arXiv:math/0208154v2
(§2, 4, 5, 6, 7.3, 8, 10 — the split case, translated); Ariki arXiv:math/9910117 (§2–3, including the
complete proof of Theorem A); Jensen, *p-Kazhdan–Lusztig Theory* (bonn dissertation, §2.2, §5 — the
star operations and the cell/RSK route); Knuth, Pacific J. Math. 34 (1970) §5–6 (the Knuth moves and
Theorem 6); Ram, *Notes on Schubert Polynomials* Ch. 1 (1.12)–(1.19) (the cover and tableau forms of the
Bruhat order). All six were fetched in full and fetch-stamped; the earlier Soergel-1997 retrieval
failure (Cloudflare interstitial) is history only — the Soergel paper is not needed by this pair and no
`source_resolution` is invoked. Ram's chapter already backs the published
`def-bruhat-order-on-the-symmetric-group`; that harvested heading is disposed `already-published`.

Harvest: 56 results, almost all `included`/`inline`. Two declines with specific reasons: the
`S`-trace/bilinear-form paragraphs of EW §3.2 (used on the later Soergel pages, not here) and Lusztig's
§6.8 negative-parameter sign convention (unequal parameters, outside this pair).

## Checks run (actual results)

| command | result |
|---|---|
| `node tools/item-dependency-levels.mjs check --run frontier-43-complex-representation-15` | FAIL at run level only from `empty scaffold inventory` for the seven pairs other batches have not scaffolded (batches 2, 4, 5, 10, 11, 13, 14). No error names a batch-7 item. |
| focused `dependencyLevels` on the batch-7 manifest (node import) | 24 items, maximum level 14, 0 errors — all `dependency_level` labels match the computed values |
| `node tools/manifest-deps.mjs <all 15 manifests>` | `196 item(s), 0 normalized, 0 error(s)` |
| `node tools/content-policy.mjs --manifest-only <all 15 manifests>` | `196 scoped item(s), 0 error(s), 0 warning(s)` |
| `node tools/frontier-item-gate.mjs --run ... --tool validate-plan` | OK; only unrelated warnings (`redundant-prereq` on `bergman-and-szego-kernels`) and the NOTE that 30 planned pages carry no item list yet |
| `node tools/coverage-checklist.mjs research/...-batch-7.coverage.json --require-destination` | `2 page(s), 56 harvested result(s), 0 error(s), 0 warning(s)` |
| `node tools/source-fetch-check.mjs --coverage research/...-batch-7.coverage.json --stamp` | `11/11 source(s) fetch-verified (11 newly stamped)`; check mode later: `11/11 fetch-verified`, `11/11 resolved` |
| `node tools/url-sweep.mjs --coverage research/...-batch-7.coverage.json --out /tmp/kl-src/b7-url-sweep.json` | `6/6 live; 0 failed; 0 suspect`, 6 citation decisions, 0 documented drops |
| `node tools/source-backing.mjs --coverage ... --liveness /tmp/kl-src/b7-url-sweep.json` | `22 authored result(s) across 1 file(s), every one still backed by an openable source` |
| `node tools/frontier-item-gate.mjs --run ... --tool extcheck` | FAIL, `focus-item-unknown` for manifest items with no authored carrier yet (including this batch's ids). This is the documented Step-1 state — items are scaffolded, not authored — and is re-checked at Step 3. |
| `node tools/frontier-dependency-ledger.mjs refresh --run ...` | `refreshed and deduplicated`; batch-7 consumer input is `[]` (no cross-batch in-run dependencies) |
| `node tools/step1-decisions.mjs check --run ...` | `items: 217, ready: 191, closed: false`; all 38 remaining work rows are page-level `Empty scaffold inventory` rows for other batches — **0 work rows name a batch-7 item**, so all 24 readiness records are present and current against the final manifest bytes |

## Cross-batch record

Batch 7 has **no cross-batch in-run dependencies**: every item dependency is either in this batch or a
published item on disk (`def-*.md` / `thm-*.md` with `status: published`), and the four A-page
`requires` are published pages. The consumer input
`research/frontier-43-complex-representation-15-batch-7.cross-batch-dependencies.json` is therefore
`[]`, which is valid for this batch.

## Unresolved findings and owner notes

1. The planned B counterexample `cex-kl-positivity-does-not-follow-from-triangular-existence` is not
   built; see "Design vs plan" above. Owner decision requested: defer to the unequal-parameter pair
   (KL-8) or drop.
2. No published-item defect was found in the suppliers consumed. The R-polynomial normalization
   warning is recorded above as a convention choice, not a defect in any published item.
3. Step-1 only scaffolds: no item file exists yet for any of the 24 ids, so `extcheck` in the
   whole-run gate reports the expected `focus-item-unknown` failures until Step 3 authors them.
4. Run-level state (not this batch's): batches 2, 4, 5, 10, 11, 13 and 14 still carry empty scaffold
   inventories, which is why the run-level `item-dependency-levels` and `step1-decisions` checks do not
   close; every batch-7 item label and record is current.
