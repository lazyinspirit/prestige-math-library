# Batch 10 Step 1 scaffold — Matrix Factorizations and Khovanov–Rozansky Link Homology

Run: `frontier-40-geometry-braids-rep-27` · pair `matrix-factorizations-and-khovanov-rozansky-link-homology`
(A 763 / B 764, braid-groups). Outputs: `research/frontier-40-geometry-braids-rep-27-batch-10.pages.json`
(15 A + 4 B items), `research/frontier-40-geometry-braids-rep-27-batch-10.coverage.json`, this note,
`research/frontier-40-geometry-braids-rep-27-batch-10.cross-batch-dependencies.json`, and 19 item-readiness
records `research/frontier-40-geometry-braids-rep-27-step1-<id>.json`.

## 1. Owner direction, controlling design and plan reconciliation

- **Owner direction.** `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md` was read
  first and is binding. It preserves each pair's complete promised scope, authorizes lower-order dependencies
  on other selected pairs in this run (scaffold and certify suppliers before consumers), and keeps publication
  and pushing as owner actions. Batch 10 has exactly **one in-run supplier pair**:
  `hecke-markov-traces-and-polynomial-link-invariants` (batch 6, order 751). Batch 6's dispatch shows a
  terminal receipt (attempt 3, `1-scaffold:batch-6` ended 2026-10-04T08:09:44Z with `lastExitOk: true`) and its
  current 27-item `pages.json`, coverage, notes and cross-batch input were read at scaffold time and used; it
  is not treated as published, and every edge to it stays `open` for the Step-3 gate.
- **Controlling design.** Both listed locations are subsections of the pair's own commissioned BG-18 design in
  `research/plan-braid-groups-track.md`: L866 is the A-page heading `## BG-18 — Matrix Factorizations and
  Khovanov–Rozansky Link Homology` and controls the A inventory, route, conventions, warnings and source
  locators; L891 is `### BG-18 — … — Examples` and controls the four B rows. No other design section carries
  BG-18 item rows: L948/L972–974 are aggregate routing prose, of which the §6 sentence "BG-18 is a
  matrix-factorization branch from BG-11 that also consumes BG-12's fixed HOMFLYPT normalization" and the §7
  sentence "the corrected negative KR crossing is recorded with its source-conflict resolution, braid moves and
  both Markov shifts are separated" are the only additional binding instructions, and this scaffold follows
  both. `research/plan-spec.json` was compared entry by entry.
- **Plan comparison — no conflict.** Plan orders 763/764, page ids, kind, category, companion pointers and the
  A `requires` list (`oriented-links-braid-closures-and-markov-equivalence`,
  `graded-bimodules-and-tensor-functors`, `hecke-markov-traces-and-polynomial-link-invariants`) are identical
  to the design's pair; both plan `items` arrays are empty, so the 19-item inventory is new and displaces no
  plan row. No design-versus-plan conflict exists to record. The design's BG-18 summary sentence above also
  confirms that the in-run BG-12 (hecke-markov) normalization is the intended consumer interface, which is
  exactly what the plan's `requires` says.
- **Design item count kept exactly.** The design tables list 15 A rows and 4 B rows; the scaffold keeps exactly
  those 19 ids and **no local additions were needed**. Every promised claim is preserved. The only departures
  from the design's `deps` columns are **added direct dependencies** where the source's proof actually uses
  them (the plan controls; additions are a strengthening, not a scope change):
  `lem-koszul-…` added to `def-chi-zero-…`, `def-braid-group-by-the-artin-presentation` and
  `def-closure-of-a-geometric-braid` added to `def-khovanov-rozansky-complex-…`, `def-markov-conjugation-…`
  added to the kink lemma, `def-chi-zero-…` and the IIa theorem added to the III theorem,
  `def-axiom-of-choice`/`def-oriented-link-…`/`def-markov-conjugation-…` added to the link-invariance theorem,
  and `def-the-homflypt-coefficient-ring`/`thm-the-homflypt-skein-relation` added to the categorification
  theorem. No design dep was dropped.
- **Design locator corrections (recorded, not conflicts).** The design's KR II page locators are off by one to
  two printed pages in places versus the arXiv v2 pagination actually read: the Koszul subsection is printed
  pp. 12–14 (design says 10–13), markings §3 is pp. 17–19 (design 16–18), §4 is pp. 20–21 (design 18–19), §5 is
  pp. 21–24 (design 19–23), §6 is pp. 24–35 (design 23–35); §2 pp. 14–16, §7 pp. 35–36 and formula (7) p. 9
  match. The manifest and coverage use the corrected locators; no item, claim or route changed, so this is a
  locator erratum in the generated design, not a design conflict.

## 2. Source harvest

Four sources, three of them mutually independent treatments (Khovanov–Rozansky II, Khovanov–Rozansky I and
the Kanstrup lecture notes), all fetched as complete documents and stamped; 66 harvested headings/results,
every one disposed:

| source | kind | stamp | dispositions |
|---|---|---|---|
| Khovanov–Rozansky, *Matrix factorizations and link homology II*, arXiv:math/0505056v2 (37 pp.; published Geom. Topol. 12 (2008) 1387–1425) | paper | PDF 303442 B, 37 pp., sha16 `1b6580406c3d35b5` | 32 included/inline rows (the primary treatment; every definition, proposition, lemma and theorem used is named) |
| same paper, published version of record, MSP `gt-v12-n3-p04-p.pdf` | paper | PDF 368705 B, 40 pp., sha16 `124c65fb4c939c93` | 4 rows, read only to settle the negative-crossing display (formulas (12)–(13), Figure 6, pp. 1393–1394) |
| Khovanov–Rozansky, *Matrix factorizations and link homology*, arXiv:math/0401268 (109 pp.; published Fund. Math. 199 (2008) 1–91) | paper | PDF 776289 B, 109 pp., sha16 `37863a8d9b36098a` | 8 rows from the introduction (pp. 2–12): independent parallel treatment of factorizations, graph factorizations, χ0/χ1, the crossing complexes and the invariance statement |
| Kanstrup (notes by Keller and Yeung), *Knot homologies and matrix factorizations*, ICMS 2019 lecture notes | lecture-notes (**primary kind**) | PDF 336087 B, 11 pp., sha16 `819fa21d1b66ef29` | 11 rows: matrix-factorization definition and homotopy category, Markov theorem, triply graded invariant; rest deferred to the in-run Rouquier (761) and Hochschild (765) pairs or out of scope with stated reasons |

No source was dropped, no recovery retry was needed, and no owner escalation arises from sources. Every
`included`/`inline` disposition names a scaffolded id; every `deferred` row names a plan page; every
`out-of-scope` row carries a specific reason (reduced theory, deformations, other triply graded theories,
cobordism/TQFT structure, Hilbert-scheme/GNR geometry, equivariant matrix factorizations, dg-scheme machinery,
sl(2)/sl(3) specializations, integral refinements).

## 3. The recorded negative-crossing source conflict (verified, not inherited)

The design warned that the KR II prose before Figure 6 repeats the positive χ0 display for the negative
crossing. This was checked against the full text, the LaTeX source and the published version of record:

- the arXiv v2 prose (`hom1.tex` lines 258–261) indeed displays `0 → C(Γ0){0,−2} --χ0--> C(Γ1){0,−2} → 0`;
- Figure 6, the matrices (6), the degree typing, the section 5 IIa proof (`0 → C(Γ1) --χ1--> C(Γ0) → 0`), the
  section 4 type IA computation and formula (10) of section 3 all use χ1 : Γ1 → Γ0;
- the section 7 relation `⟨Dσ_i^{−1}⟩ = q^{−2}(⟨De_i⟩ − ⟨D⟩)` holds for the χ1-cone with C(Γ1) in
  cohomological degree 0 and C(Γ0) in degree 1, and changes sign for the printed χ0 display (verified by
  direct evaluation of the alternating sum of the two-term complex);
- the published version of record prints exactly the χ1-cone in formula (13), p. 1394.

The manifest's `def-positive-and-negative-khovanov-rozansky-crossing-complexes` records the conflict and the
resolution explicitly. This is a **source erratum**, not a published library defect; the published version is
correct.

A **second arXiv v2 erratum** was found during this scaffold and is recorded in the items: the v2 displays of
the skein relation are mutually inconsistent. Section 7's cone relations imply
`q^{-1}<D sigma_i> - q<D sigma_i^{-1}> = (q^{-1}-q)<D>` (verified here by eliminating `<De_i>` from the two
printed cone relations), whereas the v2 text prints `q^{-1}` on the second term and section 1 prints the
opposite sign on the right-hand side; formula (7) inherits the same discrepancy. The published version of
record is self-consistent (formulas (3), (4) and (28)-(30), checked by the same elimination) and adds Wu's
half-integer regrading that removes the overall shift. The scaffold's categorification theorem is therefore
stated in the published normalization, with the v2 normalization kept as the design's `Ftilde` definition and
the regrading displayed as a proof obligation; no library item depends on the inconsistent displays.

## 4. Dependency levels, local closure and cross-batch edges

- 19 items, `dependency_level` 0–11, recomputed from disk by `item-dependency-levels.mjs` after the batch's
  supplier (batch 6) was scaffolded; the tool reports no error naming any batch-10 item. The A page has 15
  items and the B page 4, both far below the 100-item cap, and no page split is needed.
- All prerequisites needed by the claimed proofs are either (a) published items on disk
  (`def-graded-ring-module-bimodule-and-internal-shift`, `def-polynomial-ring-over-a-commutative-ring`,
  `def-braid-group-by-the-artin-presentation`, `def-closure-of-a-geometric-braid`,
  `def-markov-conjugation-and-stabilization-moves`, `thm-markovs-closed-braid-equivalence-theorem`,
  `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-axiom-of-choice`), (b) earlier items of this same
  batch, or (c) batch-6 items. No prerequisite belongs to another batch, so no cross-batch **new pair** or
  split is requested.
- Cross-batch input `research/frontier-40-geometry-braids-rep-27-batch-10.cross-batch-dependencies.json` has
  one page edge (this A page consumes `hecke-markov-traces-and-polynomial-link-invariants`) and three item
  edges, all into the categorification theorem's comparison: `def-homflypt-polynomial-from-the-hecke-markov-trace`,
  `def-the-homflypt-coefficient-ring`, `thm-the-homflypt-skein-relation`. All four rows are `open` (no proof is
  authored yet), name the exact required claim and its use, and were read against the batch-6 statements.
  `tools/frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27` reports
  "refreshed and deduplicated".
- **AC.** The only choice principle on the page is the one carried by Markov's closed-braid equivalence
  theorem; it is declared in `thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift`
  (`def-axiom-of-choice` in `deps`) and its use is identified as the passage from an ambient isotopy of the
  closures to a finite sequence of Markov moves. Every other item is choice-free, including the coefficient
  comparison in the categorification theorem (which is made through the skein characterization, not through
  Markov's theorem).

## 5. Published-prerequisite inspection

The published suppliers were read at item level before use; no defect was found and none is consumed to prove
its replacement:

- `oriented-links-braid-closures-and-markov-equivalence`: `def-closure-of-a-geometric-braid`,
  `def-markov-conjugation-and-stabilization-moves`, `thm-markovs-closed-braid-equivalence-theorem` (which
  assumes the Axiom of Choice and is quoted with that assumption), `def-oriented-link-in-s-three-and-ambient-isotopy`.
  The Markov move list (a)/(b)/(c) matches exactly the moves used by the invariance proof.
- `graded-bimodules-and-tensor-functors`: `def-graded-ring-module-bimodule-and-internal-shift` fixes the
  internal shift `M{r}_d = M_{d-r}` and degree-zero maps; the batch defines its own two-parameter shift
  `M{n_1,n_2}` explicitly, so the conventions are compatible without importing an unstated identification.
- `def-polynomial-ring-over-a-commutative-ring`, `def-braid-group-by-the-artin-presentation`: statements read;
  match the uses (polynomial ground ring; Artin words and generators).

## 6. Checks actually run (with results)

| check | command | result |
|---|---|---|
| manifest dependency fields (batch 10) | `node tools/manifest-deps.mjs research/…-batch-10.pages.json` | 19 items, 0 missing, 0 errors |
| scaffold policy (scoped, batch 10 + supplier 6) | `node tools/content-policy.mjs --manifest-only …-batch-10.pages.json …-batch-6.pages.json` | 46 scoped items, 22 errors — **check-scope limitation only**: every error names a batch-6 item whose supplier is batch 2 or 5, not visible to this invocation; no error names a batch-10 item |
| scaffold policy (batch 10 + 6 + 2 + 5) | `node tools/content-policy.mjs --manifest-only …-batch-10.pages.json …-batch-6.pages.json …-batch-2.pages.json …-batch-5.pages.json` | 107 scoped items, **0 errors, 0 warnings** |
| scaffold policy (whole run) | `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json` | 673 scoped items, **0 errors, 0 warnings** (observed 2026-10-04 ~19:45 local; counts grow as sibling writers add items) |
| manifest dependencies (whole run) | `node tools/manifest-deps.mjs research/…-batch-*.pages.json` | 673 items, 0 missing, 0 errors |
| coverage (scaffold contract) | `node tools/coverage-checklist.mjs research/…-batch-10.coverage.json --require-destination` | 1 page, **66 harvested results, 0 errors, 0 warnings** |
| full-text fetch stamps | `node tools/source-fetch-check.mjs --coverage research/…-batch-10.coverage.json --stamp` | **4/4 fetch-verified** (4 newly stamped, 0 drops) |
| fetch gate | `node tools/source-fetch-check.mjs --coverage research/…-batch-10.coverage.json` | 4/4 fetch-verified, exit 0 |
| URL liveness | `node tools/url-sweep.mjs --coverage research/…-batch-10.coverage.json --out /tmp/b10/liveness.json --recover --fail-on-dead` | **4/4 live**, 0 failed |
| source backing | `node tools/source-backing.mjs --coverage research/…-batch-10.coverage.json --liveness /tmp/b10/liveness.json` | 15 authored results, every one backed by an openable source, exit 0 |
| dependency levels (whole run) | `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` | no error names a batch-10 item; levels 0–11 equal the computed values. The run-wide nonzero exit is other batches only (batch 25's stale `dependency_level` labels and the still-empty inventories of batches 11/16–20/22–26) |
| readiness records | `node tools/step1-decisions.mjs record` ×19 in level order (two re-recorded after the published-normalization correction), then `check --run …` | 673 run items, 540 ready; **no batch-10 item appears in the work list**; remaining rows are other batches' |
| external references | `node tools/extcheck.mjs` | exit 0 (only pre-existing published-remark notices) |
| plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27` | refreshed and deduplicated |

## 7. Unresolved findings, caveats and escalation status

- **No escalation is required for batch 10.** Every item has a complete proof strategy, all prerequisites are
  either published or scaffolded earlier in this run, and no cycle, forward edge, missing hypothesis or
  inadequate supplier was found. The in-run supplier batch 6 is complete and stable.
- **Two load-bearing standard facts are flagged for Step 3.** Part (3) of
  `thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial` identifies the Khovanov–Rozansky
  HOMFLYPT normalization with the in-run Hecke–Markov polynomial P. Using the published normalization, the
  comparison homomorphism φ (v ↦ q^{−2}, s ↦ q^{−1}, u ↦ t^{−1}q, z ↦ (q²−1)t²/(q²(1−t²))) was checked here to
  satisfy s² = v and vzu² = z + 1 − v, and to give φ(l) = t^{−1}, φ(m) = q^{−1}−q and
  φ(α) = δ = (t^{−1}−t)/(q−q^{−1}); it transforms the in-run skein relation into the published relation
  tF(L₊) − t^{−1}F(L₋) = −(q−q^{−1})F(L₀). The identity F = δ·φ(P) then needs two inputs: (i) P's split-union
  rule P(L₁ ⊔ L₂) = α P(L₁)P(L₂), proved from the trace tensor factorization
  tr_{n₁+n₂}(π(β₁) ⊗ π(β₂)) = tr_{n₁}(π(β₁))·tr_{n₂}(π(β₂)) (an induction with the Markov recursion of the
  in-run trace theorem), which makes the multiplicativity of the two sides match; and (ii) the standard
  normalization uniqueness of the HOMFLYPT skein invariant (an oriented-link invariant with that skein
  relation and multiplicative normalization is determined by its unknot value). The item's strategy names the
  classical descending-diagram induction as the route for (ii). Both are authoring obligations, not missing
  prerequisites: the compared objects are already constructed link invariants, and both auxiliary facts are
  recorded with their exact proof routes. If Step 3 prefers not to prove (ii) inline, it can be split into a
  helper item without changing any claim.
- **Source erratum recorded for the canonical ledger context, not as a library defect.** The arXiv v2
  negative-crossing display is a typo; the published version of record is correct and is used (Section 3
  above). No published library item is defective or repaired.
- **Conventions frozen for Step 3** (do not silently change): bigrading deg a = (2,0), deg x_i = (0,2);
  shifts {n₁,n₂}; homotopies of bidegree (−1,−1); negative crossing = cone of χ₁ with C(Γ₁) in cohomological
  degree 0 and C(Γ₀) in degree 1, overall shift {0,−2}; type IA shift {1,1}[1], type IB no shift; the v2 link
  invariant is asserted only up to an overall trigrading shift, and the categorification theorem uses the
  published half-integer normalization (Wu's regrading), in which the Euler characteristic is
  ⟨D⟩ = Σ(−1)^{j+k}t^{2k}q^{k+l} dim H^j_{k,l} and ⟨D⟩ = F(D)/(1−t²); the comparison dictionary against the
  in-run P is φ(v) = q^{−2}, φ(s) = q^{−1}, φ(u) = t^{−1}q, φ(z) = (q²−1)t²/(q²(1−t²)), with δ = φ(α) =
  (t^{−1}−t)/(q−q^{−1}).
- Owner/operator reconciliation and the full engine gate follow construction; neither this note nor the
  readiness records are independent mathematical approval. Step 3 provides that review.
