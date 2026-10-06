# Batch 11 Step 1 scaffold — Hochschild Homology and Triply-Graded Link Homology

Run: `frontier-40-geometry-braids-rep-27` · pair `hochschild-homology-and-triply-graded-link-homology`
(A 765 / B 766, braid-groups). Outputs: `research/frontier-40-geometry-braids-rep-27-batch-11.pages.json`
(13 A + 4 B items), `research/frontier-40-geometry-braids-rep-27-batch-11.coverage.json` (4 sources,
66 harvested rows), this note, `research/frontier-40-geometry-braids-rep-27-batch-11.cross-batch-dependencies.json`
(16 open review rows), and 17 item-readiness records `research/frontier-40-geometry-braids-rep-27-step1-<id>.json`.

## 1. Owner direction, controlling design and plan reconciliation

- **Owner direction.** `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md` was read
  first and is binding. It preserves each pair's complete promised scope, authorizes lower-order dependencies
  on other selected pairs in this run (scaffold and certify suppliers before consumers), and keeps publication
  and pushing as owner actions. Batch 11's in-run suppliers are the two preceding braid-group pairs:
  `rouquier-complexes-and-categorical-braid-relations` (batch 9, order 761) and
  `matrix-factorizations-and-khovanov-rozansky-link-homology` (batch 10, order 763). Both supplier manifests,
  coverage files, notes and cross-batch inputs were read at scaffold time and used as draft suppliers; neither is
  treated as published and every edge to them stays `open` for the Step-3 gate.
- **Controlling design.** Both listed locations lie in the pair's commissioned BG-19 section of
  `research/plan-braid-groups-track.md`: L902 is the A-page heading `## BG-19 — Hochschild Homology and
  Triply-Graded Link Homology` and controls the A inventory, route, conventions, warnings and source locators;
  L926 is `### BG-19 — … — Examples` and controls the four B rows. Two further binding sentences of the same
  section were followed: §6 "Finally BG-19 joins BG-16--BG-18 with HA-22/23" (the required published
  homological-algebra pages) and §7 "the HHH comparison distinguishes termwise" (the termwise-versus-total
  distinction built into `def-termwise-hochschild-homology-complex-of-a-rouquier-complex` and the B example on
  the two grading outputs).
- **Plan comparison — no conflict.** `research/plan-spec.json` orders 765/766, page ids, kind, category,
  companion pointers and the A `requires` list (`matrix-factorizations-and-khovanov-rozansky-link-homology`,
  `rouquier-complexes-and-categorical-braid-relations`, `hochschild-homology-and-diagonal-koszul-resolutions`,
  `hochschild-hyperhomology-and-cyclic-tensor-invariance`, `bounded-bimodule-complexes-and-derived-tensor`) are
  identical to the design's pair; both plan `items` arrays are empty, so the 17-item inventory is new and
  displaces no plan row. No design-versus-plan conflict exists to record.
- **Design item count kept, with one necessary local addition.** The design tables list 12 A rows and 4 B rows;
  all 16 ids are kept with their promised claims. One local prerequisite was added:
  `def-reduced-khovanov-rozansky-homology` (order placed after `def-termwise-hochschild-homology-complex-of-a-rouquier-complex`).
  Reason: the design's theorem compares HHH with "the reduced Khovanov–Rozansky theory", but no design row
  defines that theory, while the in-run supplier `def-khovanov-rozansky-complex-and-trigraded-braid-homology`
  constructs the *unreduced* groups (its one-mark-circle computation is `Q[x]{-1,1}` with the trivial variable).
  The reduced theory is defined by Khovanov–Rozansky II, end of §1 (`H(D) ≅ Hbar(D) ⊗ Q[x]`, reduced unknot
  one-dimensional). The addition is a definition on the same A page, under the ordinary workflow rules for
  required local helpers; it weakens no design claim and no B-leaf rule is violated.
- **Dependency adjustments versus the design's columns** (the plan controls; every adjustment is a
  strengthening or an exactness repair, and the claims are unchanged):
  - added to `def-unreduced-…`: `def-type-a-soergel-bimodule-for-a-simple-reflection` (the normalization
    dictionary with the library's shifted generator);
  - added to `def-khovanovs-hhh-rouquier-generator-complexes`: the batch-9 generator and word-complex items and
    the well-definedness theorem (the letter-by-letter normalization comparison), and the signed-tensor
    totalization definition;
  - added to the `a=0` lemma: the arc/wide-edge and matrix-factorization definitions of batch 10;
  - added to the comparison lemma: the crossing-complex and trigraded-homology definitions;
  - added to `thm-hhh-…`: `def-reduced-khovanov-rozansky-homology` and the batch-10 trigraded definition;
  - `thm-hhh-…` design dep `thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift`
    **moved** to `cor-hhh-is-an-oriented-link-invariant-up-to-overall-trigrading-shift`, its actual consumer
    (the theorem now states the isomorphism; the corollary states and transports invariance), keeping the
    isomorphism statement free of a duplicate Markov hypothesis;
  - `def-termwise-hochschild-homology-complex-of-a-rouquier-complex` design dep
    `thm-hochschild-homology-is-tor-over-the-enveloping-algebra` **dropped** (see §4: it assumes AC, while the
    library's primitive HH is the choice-free chain complex; the Tor identification is recorded in the strategy
    as informational only). This keeps the whole isomorphism chain choice-free up to the diagonal-Koszul
    comparison, per the instruction to preserve choice-free branches;
  - added to the corollaries and examples: the published Markov/closure/oriented-link items (invariance), the
    normalized Euler series and categorification theorem (Euler characteristic), the diagonal Koszul
    definition (rank-one example, two-grading example), and the rank-one example as a dep of the two-strand
    example. No design dep was dropped except the two moves above.
- **Design locator corrections (recorded, not conflicts).** The design's locators for Khovanov 0510265 are
  printed-page references and match the arXiv v3 pagination read here (19 printed pages); the design's
  "BPW §3.8.6 equation (3.44), pp. 38-39" is printed p. 39 in arXiv v2 (read and stamped). The design's
  "HA-22.7--22.8, HA-23.3--23.5" refer to items of the published homological-algebra pages; the actual item
  ids used are listed in §4. No item, claim or route changed.

## 2. Source harvest

Four sources, at least two mutually independent treatments (Khovanov's paper and the IHES lecture notes are
independent; Khovanov–Rozansky II and Beliakova–Putyra–Wehrli are further independent supporting treatments),
with one full lecture-note set as the primary-kind source; all fetched as complete documents and stamped;
66 harvested headings/results, every one disposed:

| source | kind | stamp | dispositions |
|---|---|---|---|
| Khovanov, *Triply-graded link homology and Hochschild homology of Soergel bimodules*, arXiv:math/0510265v3 (19 pp.; published Internat. J. Math. 18 (2007) 869-885) | paper | PDF 190287 B, 19 pp., sha16 `548a0eece08bd967` | the primary treatment: 25 included/inline rows (every definition, lemma, theorem, trigrading sentence and example used is named), 4 already-published rows, 3 deferred rows, 2 out-of-scope rows |
| Gorsky–Kivinen–Simental, *Algebra and geometry of link homology: Lecture notes from the IHES 2021 Summer School*, Bull. LMS 55 (2023) 537-591 (author-hosted PDF of the published version) | lecture-notes (**primary kind**) | PDF 517806 B, 55 pp., sha16 `e1b3c55a5bf27090` | read §§1-3 (printed pp. 537-550): 2 already-published rows, 2 included rows, 2 inline rows, 2 deferred rows, 6 out-of-scope rows (recursion theory, parity splitting, higher torus links); §§4-7 were not read and lie outside the harvested range |
| Beliakova–Putyra–Wehrli, *Quantum link homology via trace functor I*, arXiv:1605.03523v2 (85 pp.) | paper | PDF 1033557 B, 85 pp., sha16 `3781e14d2bde557c` | read §3.8 (printed pp. 36-39): 1 included row (the componentwise construction (3.44), printed p. 39), 1 already-published row, 1 deferred row, 4 out-of-scope rows (shadow formalism, twisted and quantum deformations) |
| Khovanov–Rozansky, *Matrix factorizations and link homology II*, arXiv:math/0505056v2 (37 pp.; published Geom. Topol. 12 (2008) 1387-1425) | paper | PDF 303442 B, 37 pp., sha16 `1b6580406c3d35b5` | read §1 (printed pp. 1-12) and §7 (pp. 35-36): 3 included rows (Markov invariance; Theorem 2 and the F-normalization; the reduced-groups bullet), 1 inline row (Euler-characteristic cone relations), 4 deferred rows to the in-run matrix-factorization page, 4 out-of-scope rows (deformations/equivariant theories, Alexander specialization, GSV conjectures) |

No source was dropped, no recovery retry was needed and no owner escalation arises from sources. Every
`included`/`inline` disposition names a scaffolded id; every `deferred` row names a resolvable destination
(plan-spec page ids); every `out-of-scope` row carries a specific reason.

## 3. Source convention findings recorded for Step 3 (verified here, not inherited)

1. **The trivial polynomial factor.** Khovanov writes `R' = R ⊗ Q[x_1]`, `R'_i ≅ R_i ⊗ Q[x_1]`,
   `B'_i ≅ B_i ⊗ Q[x_1]` and induces `br_i`, `rb_i` by restriction. Read literally with the coordinate `x_1`
   this is `s_i`-equivariant only for `i ≥ 2` (the coordinate `x_1` is fixed by `s_i` exactly then); for `i = 1`
   the invariant coordinate is `t_1 = x_1 + x_2`. Checked here in the `m = 2` case:
   `R'_1 = Q[2x_1 - y, x_1(x_1-y)]` while `R_1[x_1] = Q[y^2, x_1]` is a *different* subring, whereas
   `R'_1 = R_1[x_1+x_2]` and the explicit map `r t^a ⊗ r' t^b ↦ (r⊗r') t^{a+b}` is a well-defined
   `R'`-bimodule isomorphism `B'_1 ≅ B_1 ⊗ Q[t]` (left- and right-linearity checked on generators). The
   scaffold's items therefore state the `s_i`-equivariant form with `t_i = x_i + x_{i+1}` and record the
   source's `x_1` phrasing and its range of validity. This is a source-convention correction, not a published
   library defect.
2. **Tor versus Ext Hochschild degree.** Khovanov's HHH uses `HH_i = Tor_i^{R^e}(R,-)` (source, printed
   pp. 1-3); the IHES lecture notes use `ℍ^i = Ext^i_{R-bimod}(R,-)` and their `A`-grading (printed p. 546).
   For polynomial rings the two are related by `i ↔ m - i` (source, printed pp. 2-3), which is the origin of
   the "minus sign" in the dictionary `a = -h`. The scaffold uses the source's Tor convention throughout
   (item `def-termwise-hochschild-homology-complex-of-a-rouquier-complex` defines HHH via the Hochschild chain
   complexes, so no Ext/Tor translation is needed); the lecture-note convention is recorded in the coverage
   rows and must be kept in mind when checking the constants.
3. **Draft supplier shift-sign issue (batch 10, for the batch-10 owner).** The batch-10 draft item
   `def-bigraded-matrix-factorization-with-potential` displays `M{n_1,n_2}_{(k,l)} = M_{(k+n_1,l+n_2)}`, while
   its own arc/wide-edge items require the library convention `M{r}_d = M_{d-r}` (the one under which the arc
   differentials `a` and `x_1-x_2` have bidegree `(1,1)`). This is an internal sign inconsistency of a
   *draft* (unpublished) supplier; it is recorded in the cross-batch input for batch 10 and does not change
   any batch-11 item, which uses the library convention. No published library item is defective.
4. **The trigrading dictionary.** The design's dictionary `a = -h`, `q = p - h`, `t = c` after the global
   correction `(1,-1,0)` is stated in
   `lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings`; it matches the
   source's printed p. 10 (third gradings match; Hochschild grading = Koszul grading with the minus sign;
   second grading = `deg(x_i)` grading minus the Hochschild grading) and the source's `(1,-1,0)` correction
   sentence. Its constant is anchored by two worked checks in the batch: the unknot normalization
   (trivial-braid example: HHH class `(0,0,0)`, raw reduced KR class `(-1,1,0)`) and the `(2,n)` computation.
   The exact constants remain an authoring obligation, flagged here so Step 3 verifies rather than assumes
   them.

## 4. Dependency levels, local closure and cross-batch edges

- 17 items (13 A + 4 B), `dependency_level` 0–12, recomputed from disk by the run's algorithm and checked
  with `item-dependency-levels.mjs check --run`; no error names any batch-11 item. The A page has 13 items and
  the B page 4, far below the 100-item cap; no page split is needed.
- All prerequisites needed by the claimed arguments are (a) published items on disk
  (`def-type-a-reflection-realization-and-polynomial-ring`, `def-type-a-soergel-bimodule-for-a-simple-reflection`,
  `def-polynomial-ring-over-a-commutative-ring`, `def-graded-ring-module-bimodule-and-internal-shift`,
  `def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization`,
  `def-hochschild-chain-complex-of-a-bimodule`, `def-termwise-hochschild-homology-complex-and-iterated-homology`,
  `def-hochschild-hyperhomology-of-a-bimodule-complex`, `thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex`,
  `def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring`,
  `thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex`,
  `def-regular-sequence-on-a-module`, `thm-regular-sequences-give-acyclic-koszul-complexes`,
  `cor-koszul-complex-resolves-a-regular-quotient`, `def-axiom-of-choice`, `def-markov-conjugation-and-stabilization-moves`,
  `def-closure-of-a-geometric-braid`, `def-oriented-link-in-s-three-and-ambient-isotopy`), (b) earlier items of
  this same batch, or (c) batch-9/batch-10 items (transitively, batches 5–9). No prerequisite belongs to a
  third in-run batch, so no cross-batch new pair or split is requested.
- Cross-batch input `research/frontier-40-geometry-braids-rep-27-batch-11.cross-batch-dependencies.json` has
  16 rows: 2 page edges (this A page consumes both supplier pages) and 14 item edges into batch-9 and batch-10
  items (the normalization comparison, the word-complex well-definedness, the MOY/factorization and crossing
  definitions, the trigraded homology, the invariance theorem, the categorification theorem and the Euler
  series). All rows are `open` (no proof is authored yet), name the exact required claim and its use, and were
  read against the supplier manifests. `tools/frontier-dependency-ledger.mjs refresh --run
  frontier-40-geometry-braids-rep-27` reports "refreshed and deduplicated"; batch 11 is now among the reviewed
  batches, with no orphaned reviews.
- **AC.** The Axiom of Choice is declared in `lem-the-remaining-closure-koszul-complex-is-the-diagonal-hochschild-complex`
  (used only to identify the Koszul homology of the diagonal sequence with `HH_*(R',B'(D))` through
  `thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex`), and is carried to its
  consumers `lem-a-closed-moy-…`, `thm-hhh-…`, `cor-hhh-…`, `cor-the-graded-euler-characteristic-…`. The
  invariance corollary also carries AC through the batch-10 Khovanov–Rozansky invariance theorem (Markov's
  theorem). All other items are choice-free, including the termwise-HHH definition (design dep on the AC
  Tor theorem deliberately dropped) and all four examples except the trivial-braid example, whose AC is
  inherited through the theorem. No incompatible-axiom branch is consumed; the page's category is
  `braid-groups`, not `foundations`, so the deferred-set-theory constraint does not apply.

## 5. Published-prerequisite inspection

The published suppliers were read at item level before use; no defect was found and none is consumed to prove
its replacement:

- `hochschild-homology-and-diagonal-koszul-resolutions`: `def-hochschild-chain-complex-of-a-bimodule`,
  `thm-hochschild-homology-is-tor-over-the-enveloping-algebra` (AC), `def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring`,
  `thm-the-diagonal-koszul-complex-resolves-the-polynomial-ring`,
  `thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex` (AC) and
  `lem-polynomial-diagonal-differences-form-a-regular-sequence`. The diagonal complex is exactly the sequence
  of closure differences used in the HHH proof; the AC hypothesis is declared where consumed.
- `hochschild-hyperhomology-and-cyclic-tensor-invariance`: `def-hochschild-hyperhomology-of-a-bimodule-complex`,
  `def-termwise-hochschild-homology-complex-and-iterated-homology`,
  `thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex` (all choice-free). The termwise
  complex and the `E_2` identification match the HHH definition and the two-grading example.
- `bounded-bimodule-complexes-and-derived-tensor`: `def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization`
  (the tensor-totalization convention used for `F(σ)`).
- `type-a-soergel-bimodules-and-hecke-categorification`: `def-type-a-reflection-realization-and-polynomial-ring`,
  `def-type-a-soergel-bimodule-for-a-simple-reflection` (with the `(1)`-shift normalization dictionary
  recorded), `lem-the-rank-one-soergel-bimodule-square-splits` (already-published disposition of the lecture
  notes' Lemma 3.4).
- `oriented-links-braid-closures-and-markov-equivalence`: `def-markov-conjugation-and-stabilization-moves`,
  `def-closure-of-a-geometric-braid`, `def-oriented-link-in-s-three-and-ambient-isotopy` (statements read; the
  Markov move list matches the moves transported in the invariance corollary).
- No new published defect was found; the two `extcheck` `unproved-on-published` notices are pre-existing and
  unrelated to this pair.

## 6. Checks actually run (with results)

| check | command | result |
|---|---|---|
| manifest dependency fields (batch 11) | `node tools/manifest-deps.mjs research/…-batch-11.pages.json` | 17 items, 0 missing, 0 errors |
| manifest dependencies (whole run) | `node tools/manifest-deps.mjs research/…-batch-*.pages.json` | 733 items, 0 missing, 0 errors |
| scaffold policy (scoped, batch 11 + suppliers 9/10) | `node tools/content-policy.mjs --manifest-only …-batch-11.pages.json …-batch-10.pages.json …-batch-9.pages.json` | 55 scoped items, 4 errors — **check-scope limitation only**: every error names a batch-9/10 item whose supplier is batch 2/5/6, not visible to this invocation; no error names a batch-11 item |
| scaffold policy (whole run) | `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json` | 733 scoped items, **0 errors, 0 warnings** |
| coverage (scaffold contract) | `node tools/coverage-checklist.mjs research/…-batch-11.coverage.json --require-destination` | 1 page, **66 harvested results, 0 errors, 0 warnings** |
| full-text fetch stamps | `node tools/source-fetch-check.mjs --coverage research/…-batch-11.coverage.json --stamp` | **4/4 fetch-verified** (4 newly stamped, 0 drops); stamps match the PDFs actually read (Khovanov 548a0eece08bd967, GKS e1b3c55a5bf27090, BPW 3781e14d2bde557c, KR II 1b6580406c3d35b5) |
| fetch gate | `node tools/source-fetch-check.mjs --coverage research/…-batch-11.coverage.json` | 4/4 fetch-verified, exit 0 |
| URL liveness | `node tools/url-sweep.mjs --coverage research/…-batch-11.coverage.json --out /tmp/b11/liveness.json --recover --fail-on-dead` | **4/4 live**, 0 failed |
| source backing | `node tools/source-backing.mjs --coverage research/…-batch-11.coverage.json --liveness /tmp/b11/liveness.json` | 15 authored results, every one backed by an openable source, exit 0 |
| dependency levels (whole run) | `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` | no error names a batch-11 item; levels 0–12 equal the computed values. The run-wide nonzero exit is other batches only (empty inventories of batches 17/19/20/24/26) |
| readiness records | `node tools/step1-decisions.mjs record` ×17 in level order, then `check --run …` | 733 run items, 692 ready; **no batch-11 item appears in the work list**; remaining rows are other batches' |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27` | refreshed and deduplicated; 16 batch-11 edges all with `open` reviews, 0 orphaned reviews |
| external references | `node tools/extcheck.mjs` | exit 0 (only two pre-existing published-remark notices) |
| plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 (247 planned pages still carry empty item lists — normal for the run) |

## 7. Unresolved findings, caveats and escalation status

- **No escalation is required for batch 11.** Every item has a complete proof strategy, all prerequisites are
  either published or scaffolded earlier in this run, and no cycle, forward edge, missing hypothesis or
  inadequate supplier was found beyond the items recorded below.
- **Load-bearing checks flagged for Step 3** (not missing prerequisites; the constructions exist and the
  routes are recorded):
  1. the trigrading constants `a = -h`, `q = p - h`, `t = c` and the global `(1,-1,0)` correction
     (§3 item 4); the verification must reproduce the source's unknot and `(2,n)` normalizations and the
     batch-11 anchors on the B page;
  2. the trivial-factor bookkeeping: the source's `Q[x_1]` form is used in the corrected `s_i`-equivariant
     form (§3 item 1), and the `a=0` doubling (“two copies of the reduced theory”) must be split explicitly
     in `lem-a-closed-moy-…` before the reduced summand is matched with `def-reduced-khovanov-rozansky-homology`;
  3. the normalization comparison of the generator complexes with the batch-9 Rouquier complexes
     (`F(σ_i) = F_i^{-1}{1}`, `F(σ_i^{-1}) = F_i{-1}`, generator-inverted word plus writhe shift), including
     the balanced-root sign and the unit factor `2` in `rb_i`;
  4. the corrected negative crossing (the `\chi_1`-cone) in the local intertwining, per batch 10's recorded
     source-conflict resolution;
  5. the draft batch-10 shift-sign inconsistency of §3 item 3, to be reconciled by the batch-10 owner; it does
     not block batch 11 because all batch-11 uses are stated in the library's convention.
- **Deliberate deviations recorded** (§1): the added reduced-KR definition; the moved invariance-theorem
  dependency; the dropped AC Tor-theorem dependency of the termwise definition. None weakens a promised claim.
- Owner/operator reconciliation and the full engine gate follow construction; neither this note nor the
  readiness records are independent mathematical approval. Step 3 provides that review.
