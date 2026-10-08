# Batch 10 Step 1 scaffold — Parabolic Subgroups and Double Coset Geometry

Run: `frontier-42-coxeter-32` · pair `parabolic-subgroups-and-double-coset-geometry`
(A order 1736, B order 1737, `coxeter-groups`, design label CG-07). Outputs:
`research/frontier-42-coxeter-32-batch-10.pages.json` (5 A + 3 B items),
this note, `research/frontier-42-coxeter-32-batch-10.coverage.json`,
`research/frontier-42-coxeter-32-batch-10.cross-batch-dependencies.json` (37 reviewed rows),
`research/frontier-42-coxeter-32-batch-10-url-liveness.json`, and eight item-readiness
records `research/frontier-42-coxeter-32-step1-<id>.json`.

## Scope, plan and binding inputs

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md`
  (read first; binding), the design `research/plan-coxeter-groups-track.md` §CG-07
  (L227 ff.), the task file `research/frontier-42-coxeter-32-beta-10.task.md`, the binding
  proof-design inputs `research/coxeter-scaffold/inventory.json` (CG-07),
  `definition-justifications.json`, `combinatorial-source-report.md` §C2,
  `independent-audit.md` (no CG-07-specific finding), and the native A/B page prose
  `library/coxeter-groups/parabolic-subgroups-and-double-coset-geometry{,-examples}.md`.
- **Plan-spec comparison.** `research/plan-spec.json` agrees with the task on the pair ids,
  orders 1736/1737, category, companion, the A-page `requires`
  (`coxeter-presentations-exchange-and-reduced-word-theorems`,
  `canonical-roots-signs-and-faithful-reflections`) and the B page's single requirement.
  Its item arrays are empty, so no item-level plan text can conflict. **No design-versus-plan
  conflict exists**, and no plan text was changed.
- **Preserved design contracts.** The four named CG-07 supplier contracts keep their exact
  ids, kinds and roles: `def-cg-parabolic-quotient-and-two-sided-minima` (definition),
  `thm-cg-parabolic-intersections-and-coset-factorization` (theorem),
  `lem-cg-double-coset-intersection-parabolic` (lemma),
  `thm-cg-double-coset-unique-minimum-and-normal-form` (theorem), all four homed on the A
  page. The design's warnings are kept: fixed left/right conventions; general parabolics
  distinguished from reflection subgroups; `W_I∩W_J=W_{I∩J}` by deletion of a reduced word
  with forbidden letters; `Φ_I=Φ∩span{e_s:s∈I}` by root signs and parabolic descent; coset
  minima as *global* minima, not merely descent-free words; the intersection lemma's warning
  that membership must force a *simple* root; and the recorded statement that arbitrary
  `u∈W_I` destroys uniqueness of the normal form.

## Recorded route decisions (no plan conflict)

1. **One new prerequisite item was inserted before the design's lemma.**
   `lem-cg-double-coset-descent-reduction-and-minimality` (descent reduction; minimum-length
   elements of `W_I d W_J` for `d∈{}^IW^J`; the additive factorization `x=udv` for the
   minimum) is a new local item with a stable unused id. Reason: the design's lemma is to be
   proved "by conjugated positive roots **and minimality**", but the minimality of
   `d∈{}^IW^J` in its double coset is not available from any earlier item, and the design's
   own item 4 (which contains that fact) comes *after* the lemma. The new item is proved by
   descent reduction, Tits deletion (Davis's middle-block argument) and well-ordering, using
   only batch-2 HH-11/exchange suppliers; the design's item-4 contract is then discharged
   as: minimum theory in the new item, unique-minimum restated and the normal form proved in
   item 4. This is a decomposition of the declared route, not a change of claims.
2. **The design's phrase "by conjugated positive roots and minimality" is honoured, but the
   scaffolded proof is exchange-based.** The lemma is proved following Lusztig, *Hecke
   Algebras with Unequal Parameters*, Proposition 9.15(b) with proof 9.16(c),(d): strong
   exchange applied to the reduced word `(word of d)(word of ỹ)` splits into two cases, the
   first contradicting minimality of `d` and the second exhibiting `d^{-1}s_1d` as a
   `W_J`-conjugate of a letter, then a length-one argument upgrades `z∈W_J` to `z∈J`. The
   root language is kept in the statement as clause (3): `d^{-1}sd` is the reflection with
   root `ρ(d)^{-1}e_s∈Φ_+`, and the conclusion is that this conjugated root is a *simple*
   root of the parabolic system `Φ_J=Φ∩V_J` — never a non-simple positive combination such
   as `e_j+e_{j'}`. The design's explicit warning is thereby addressed in the statement, not
   merely in prose.
3. **Inventory `depends_on` lists are page-level.** The machine inventory attaches the same
   page-level dependency list to all four CG-07 contracts. Recorded `deps` are the actual
   use sets. Deviations, each recorded in the readiness reasons: the definition item does
   not declare CG-04 root items (it asserts nothing root-theoretic); the new minimality lemma
   declares HH-11, HH exchange/deletion, well-ordering and the elementary published items;
   the intersection lemma declares the definition item, the intersection/root theorem, the
   new lemma, HH-11, HH exchange/deletion, the canonical reflection homomorphism and the
   root-length/dictionary/strong-exchange items; item 4 declares the definition item, the new
   lemma, the intersection lemma, HH-11 and subadditivity. No inventory dependency was
   invented and none was dropped without recording why.
4. **Axiom of Choice.** Not needed: every construction is a subgroup or a subset of the fixed
   presented group, all minima are minima of sets of natural numbers, and no quotient,
   ultrafilter or infinite selection occurs. Each proof strategy states this explicitly.
   Choice-closure audit (2026-10-07): the transitive closure of the eight items contains no
   local choice step and no path reaches `deferred-set-theory-beyond-choice`; every one of its
   731 nodes resolves. It does contain `def-countable-choice` and `def-axiom-of-choice`,
   inherited exclusively through the published real-analysis/π foundations
   (`def-pi-via-first-positive-cosine-zero`, `thm-cosine-has-a-smallest-positive-zero`, …)
   that the batch-4 supplier `def-cg-real-coxeter-form-and-reflection` consumes. That is
   ambient ℝ infrastructure of the published library, not a choice step in any batch-10
   argument, and no batch-10 proof selects from an infinite family; Step 3 should carry the
   inherited status to consumers exactly as the batch-4 and published items do.
5. **B companion (3 items).** The design's three B tasks map to
   `ex-cg-s4-coset-minima-and-double-coset-decomposition` (left/right minima and a double
   coset decomposition in S_4),
   `ex-cg-infinite-dihedral-parabolic-double-cosets` (the infinite dihedral parabolic
   example), and `ex-cg-reflection-subgroups-parabolic-and-not` (two conjugate reflections
   generating a parabolic subgroup that is not standard, together with an infinite-dihedral
   reflection subgroup that is not parabolic at all, which is what the A-page definition
   distinguishes). The B items are self-contained: none of them depends on another B item,
   so no `ai-generated` statement is used as a dependency target.

## Dependency levels and audit

`node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` recomputes from
the ten populated batch manifests. The eight batch-10 labels were written from the tool's
computed values (none was hand-set):

| item | kind | level | in-run suppliers |
|---|---|---|---|
| `def-cg-parabolic-quotient-and-two-sided-minima` | definition | 6 | batch 2 (HH-11) |
| `thm-cg-parabolic-intersections-and-coset-factorization` | theorem | 12 | batches 2, 4, 7, own definition |
| `lem-cg-double-coset-descent-reduction-and-minimality` | lemma | 7 | batch 2 |
| `lem-cg-double-coset-intersection-parabolic` | lemma | 13 | batches 2, 4, 7, own items |
| `thm-cg-double-coset-unique-minimum-and-normal-form` | theorem | 14 | own items, batch 2 |
| `ex-cg-s4-coset-minima-and-double-coset-decomposition` | example | 15 | A page, batch 2 |
| `ex-cg-infinite-dihedral-parabolic-double-cosets` | example | 15 | A page, batches 2, 4, 7 |
| `ex-cg-reflection-subgroups-parabolic-and-not` | example | 7 | definition item, batch 2 |

The tool's own run of the check exits 1 with exactly 42 `empty scaffold inventory` errors,
all of them pages of the not-yet-scaffolded batches 11–32 (21 pairs × 2 pages); no error
names a batch-10 item or label. The user-facing dispatch command
`node tools/item-dependency-levels.mjs check --run RUN` therefore cannot return 0 while
later batches are unscaffolded; the actual output is recorded in "Checks actually run".

**Dependency audit (what was actually examined).** Every batch-10 dep resolves either to an
item of the ten populated manifests or to a proved published item on disk
(`def-generated-subgroup`, `def-coset`, `def-group`, `def-natural-numbers`,
`thm-well-ordering-principle`, `def-linear-combination-and-span`,
`def-group-homomorphism`). No missing, circular, forward or B-leaf dependency remains; this
was confirmed by `tools/content-policy.mjs --manifest-only` over all ten batch files (0
errors, 0 warnings). The 37 reviewed rows of
`research/frontier-42-coxeter-32-batch-10.cross-batch-dependencies.json` record each in-run
supplier use against the batch-2, batch-4 and batch-7 manifest statements that were read;
`node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` produced
`research/frontier-42-coxeter-32-cross-batch-dependencies.json` with all 37 batch-10 rows
matched to declared edges and with `orphaned_reviews: []`.

**Reconciliation pass (2026-10-07).** A final link-versus-declaration audit compared every
wikilink used in the eight statements and strategies against each item's
`deps ∪ justified_by ∪ forward_refs` and found exactly three linked supplier uses that were
used but not declared in `deps`: `def-group` and
`thm-hh-coxeter-exchange-deletion-and-faithfulness` in the definition item (group algebra in
the inversion identity `W^I=(^IW)^{-1}`; the `±1` length-change statement quoted in (2)), 
`def-generated-subgroup` in the intersection/root theorem (used twice in the strategy), and
`lem-cg-double-coset-intersection-parabolic` in the S_4 example (the statement that
`K={s∈I:d^{-1}sd∈J}` must be recomputed per double coset, which the example illustrates).
All three were added to the respective `deps` arrays; the three edited items had already
examined those suppliers in their earlier readiness evidence, so the additions record
existing uses rather than new mathematics. Recomputing with
`node tools/item-dependency-levels.mjs` left all eight dependency_level labels unchanged
(the added in-run supplier is batch-2 work at a level below each consumer's previous
maximum, and published out-of-run suppliers do not raise in-run levels). Because a
readiness record's hash covers the transitive closure of supplier manifest bytes, all eight
batch-10 records were re-recorded with their previous evidence plus a note on the reconciled
metadata; none is an owner record and none changed decision.

**Actual proof-dependency decisions taken while scaffolding.**

- Item 4's normal form needs `ud∈W^J` for `u∈W_I^K`. The scaffold records this as a
  consequence of the intersection lemma plus strong exchange (right-descent reflection of
  `u∈W_I` lies in `W_I`), not as an assumption; the alternative proof (Lusztig 9.16(e)-(g))
  is the one written into the strategy, and the two were reconciled case by case.
- The scan of a possible false step: conjugation by `d` does **not** preserve length in
  general (e.g. `s_1` conjugated by `s_2` in `S_4` has length 3). Every length equality used
  in the scaffolded strategies is derived from HH-11 additivity in the two transversals
  (`ℓ(ud)=ℓ(u)+ℓ(d)` for `u∈W_I`, `d∈{}^IW`; `ℓ(dv)=ℓ(d)+ℓ(v)` for `v∈W_J`, `d∈W^J`), never
  from conjugation invariance. The one place where conjugation invariance is *concluded*
  (`ℓ(z)=ℓ(z')` for `z∈W_K`) is a consequence of those two additivity statements, and the
  strategy says so.

## Sources, reading limits and evidence

Sources harvested for this pair (all seven fetch-verified with durable stamps):

1. Björner–Brenti, *Combinatorics of Coxeter Groups* (textbook), §2.4 printed pp. 38–41 and
   Exercise 15 printed p. 58 — Proposition 2.4.1, Definition 2.4.2, Lemma 2.4.3, Proposition
   2.4.4, Corollary 2.4.5(i), (2.11)–(2.12), Lemma 2.4.7, Exercise 15(a),(b).
2. Davis, *The Geometry and Topology of Coxeter Groups* (monograph), §4.3 printed pp. 47–48 —
   Lemma 4.3.1 with its complete proof, Definition 4.3.2, Lemma 4.3.3.
3. Lusztig, *Hecke Algebras with Unequal Parameters* (monograph, arXiv:math/0208154v2),
   Chapter 9: Lemma 9.7, Proposition 9.15(a)–(e) and the complete proof in 9.16(a)–(g),
   printed pp. 44–46 — the primary source of the intersection lemma, the unique minimum, the
   transversal bijection and additivity. This is the proof route scaffolded.
4. Stembridge, *On the fully commutative elements of Coxeter groups* (paper), Section 1,
   p. 6 — the definitions of `W^J`, `{}^JW`, `{}^IW^J` and the statement that they are double
   coset representatives.
5. Michel, *Lectures on Coxeter groups* (lecture notes), Lemma 5.11 and Lemma–Definition 5.12
   — I-reduced elements: the equivalence of conditions (i)–(iii) and uniqueness.
6. Billey–Konvalinka–Petersen–Slofstra–Tenner, *Parabolic double cosets in Coxeter groups*
   (paper, arXiv:1612.00736v2), §2.1–2.2 printed pp. 6–8 — Proposition 2.7(a)–(c), Corollary
   2.8, Lemma 2.9, Corollary 2.10.
7. Qi, *A Note on Parabolic Subgroups of a Coxeter Group* (paper, arXiv:math/0512408) §2–3
   — Proposition 2.2, Theorem 2.3, and **Lemma 3.1 with its complete proof**, the source of
   the parabolic root-subsystem theorem `Φ_I=Φ∩V_I` used in item 2 (2).

Independent treatments per A page: two textbooks/monographs/lecture-note sets (Björner–Brenti;
Davis; Lusztig; Michel) plus three papers (Stembridge; BKPS; Qi); at least one primary kind
(textbook/monograph/lecture-notes) is present. Every harvested heading received a disposition
in `frontier-42-coxeter-32-batch-10.coverage.json`: 43 results, of which 12 scaffolded
(`included`), 16 absorbed inline and 2 deferred (Michel Lemma 5.11 to
`canonical-roots-signs-and-faithful-reflections`; Qi Theorem 2.3(a),(b) to
`tits-cones-chambers-and-parabolic-stabilizers`), the remaining 13 declined as
out-of-scope with individual reasons. The deferred destinations are plan pages that really do carry those results
(the disjoint-chamber item on the canonical-roots page; the chamber-intersection and point-
stabilizer items on the Tits-cone page).

**Reading limits (honest).** Qi Lemma 3.1 and the surrounding definitions were read in full
and re-derived step by step (the induction on the length of the reflection `t_φ`, the norm
identity `1=B(φ,φ)=Σλ_rB(φ,e_r)`, the sign argument on the reflected root, the two length
drops). Lusztig 9.15–9.16 was read in full in the extracted text (the running pages 44–46 of
the arXiv version). Davis 4.3 was read in full. Björner–Brenti §2.4 was read through printed
p. 41 and Exercise 15 on p. 58; §2.5 (chain property) and Appendix A2 were not read and are
not cited. Stembridge was read only around Proposition 1.4–1.6 plus the definitions; §§2–6
were not read and are declined as out-of-scope rows. Michel was read at Lemmas 5.11–5.12 and
the following pages; earlier chapters were not read. BKPS §2.1–2.2 was read; §§3–5 were not.
No figure was visually inspected; all claims used are textual.

**Computational cross-checks (finite evidence only, within its scope).** Exhaustive
enumeration in `S_5` (225 subset pairs `I,J` with `|I|,|J|≤3`, all 2930 double cosets) found
no failure of: descent-freeness of the minimum; the bijection
`W_I^K×W_J→W_IdW_J`; length additivity; and, for every `y∈W_I∩dW_Jd^{-1}` and letter `s` of
a reduced expression of `y` in `W_I`, `d^{-1}sd∈J`. A separate `S_4` enumeration confirmed
the companion tables (the two double cosets for `I={s_1,s_2}`, `J={s_2,s_3}` with 18 and 6
elements and `K={s_2}`, `{s_1,s_2}`; the seven double cosets for `I={s_1}`, `J={s_3}` with
sizes 4,4,4,4,4,2,2; the normal form `2143=2134·1234·1243`) and the reflection-subgroup
example (`H={1234,1432,3214,3412}=s_2W_{\{s_1,s_3\}}s_2`, no standard parabolic equal to
`H`). These computations are evidence of consistency only; the proofs in the strategies are
mathematical, and the finite checks assert nothing infinite.

**Published defects.** None identified in this batch's scope. The seven consumed published
items (`def-generated-subgroup`, `def-coset`, `def-group`, `def-natural-numbers`,
`thm-well-ordering-principle`, `def-linear-combination-and-span`,
`def-group-homomorphism`) were read only for the interfaces used; the uses match their
statements. No published defect is recorded for the canonical ledger from this batch.

## Checks actually run

| check | command | actual result |
|---|---|---|
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 1; 38 errors at re-run time, all `empty scaffold inventory` for pairs still unscaffolded (42 on the first run; the count moves as other batches are scaffolded concurrently); no error names a batch-10 item or label, and all eight batch-10 labels equal the tool's computed values |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | exit 0; run-global count at re-run time `124 item(s), 0 normalized, 0 error(s)` (grew from 101 as other batches were scaffolded concurrently; batch-10 contributes its 8 items) |
| manifest policy | `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | exit 0; run-global count at re-run time `124 scoped item(s), 0 error(s), 0 warning(s)` (was 101 before the reconciliation) |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; declared page order acyclic and consistent, no item-level cycles/forward refs/B-page deps/unresolved ids among the 1599 pages with item lists; warnings are `redundant-prereq` notes on other pages |
| plan, run-scoped | `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan` | exit 0, but "0 page(s) with item lists": at scaffold stage the scoped front has no item files yet, so this gate is vacuous until Step 3 |
| external references probe | `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool extcheck --quiet` | standalone probe returns `[focus-item-unknown]` for scaffolded-but-unwritten ids; this is no longer a Step-1 gate after the orchestrator's correction below; manifests carry no `external_refs`/`proved_here:false` |
| later references probe | `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool fwdcheck --quiet` | exploratory standalone probe returns `focus-item-unknown`; fwdcheck is not in the Step-1 gate battery |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-10.coverage.json --require-destination` | exit 0; `1 page(s), 43 harvested result(s), 0 error(s), 1 warning(s)` — warning is `coverage-low-yield` (12/43 scaffolded), honest because several read ranges (the papers) contain much material outside this pair; unchanged at re-run |
| source full text | `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-10.coverage.json --stamp` | exit 0; `7/7 source(s) fetch-verified (7 newly stamped)`; re-run in check mode 2026-10-07: `7/7 source(s) fetch-verified`, `7/7 resolved` |
| URL liveness | `node tools/url-sweep.mjs --coverage research/frontier-42-coxeter-32-batch-10.coverage.json --out research/frontier-42-coxeter-32-batch-10-url-liveness.json --recover --fail-on-dead` | exit 0; `7/7 live; 0 failed`; re-run 2026-10-07 with the same result |
| dependency ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | exit 0; `refreshed and deduplicated`; after the reconciliation the new declared edge `def-cg-parabolic-quotient-and-two-sided-minima → thm-hh-coxeter-exchange-deletion-and-faithfulness` carries the `batch-10.pages.json#deps` declaration plus its review row; `orphaned_reviews: []` (batches still unscaffolded have unreviewed edges, which is expected) |
| readiness | `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | final re-run: all eight batch-10 items current (8/8 closed after re-recording); run-global `items 124, ready 115` at re-run time — every unclosed entry belongs to another in-flight batch or to an empty scaffold, none to batch 10 |

**Unresolved findings / escalations.** None requiring cross-batch placement. No page split is
needed (5 A items, far below the 100-item cap). No new prerequisite pair is proposed outside
this page: the one added prerequisite is homed on the same A page, which is the preferred
placement. The design has no page-level or item-id conflict with the plan.

**Hand-off.** The batch is ready for Step 2 assignment and Step 3 authoring in dependency
order: definition (level 6), minimality lemma (7), the reflection-subgroup example (7), the
intersection/root theorem (12), the intersection lemma (13), the normal-form theorem (14),
then the three S_4/infinite-dihedral examples (15). Step 3 must author the proofs exactly as
scaffolded or file an escalation; no item of this batch is claimed mathematically certified
by this scaffold, and Step 3 review remains the independent check.

## Addendum: correction pass of 2026-10-07 (attempt 2)

Attempt 1 of this dispatch produced the scaffold above but its session timed out without a
successful receipt; attempt 2 re-read the whole manifest against the binding inputs and the
cited sources and found and fixed five real defects in the drafted text. No dependency,
inventory, source, coverage or placement decision changed, so the eight `dependency_level`
labels and the 37 reviewed cross-batch rows stand. What changed:

1. **Definition item (2), transversals swapped (genuine error).** The draft stated the
   factorizations as `w=u d` with `d∈W^I` and `w=d v` with `d∈{}^IW`. With the definitions
   fixed in the same item (`W^I` = no right descent, `{}^IW` = no left descent) both are
   false: for `I={s_1}` in `S_3`, `w=s_2s_1` admits no factorization `w=u d` with `d∈W^I`,
   and `w=s_1s_2` admits none of the form `w=d v` with `d∈{}^IW`; `s_1s_2` even has two
   length-additive `u d`-decompositions with `d∈W^I`. The clauses now read `w=u d` with
   `u∈W_I`, `d∈{}^IW` (unique minimal element of the left coset `W_Iw`), `ℓ(w)=ℓ(u)+ℓ(d)`
   and `ℓ(ud)=ℓ(u)+ℓ(d)` for all `u∈W_I`, dually `w=d v` with `d∈W^I` (unique minimal
   element of `wW_I`), `ℓ(w)=ℓ(d)+ℓ(v)` and `ℓ(dv)=ℓ(d)+ℓ(v)`; this is exactly clause (3) of
   `thm-hh-parabolic-minimal-representatives-and-length-additivity`, whose statement was
   re-read. Verified exhaustively in `S_3` and `S_4` (uniqueness of the transversal element,
   its minimality and both additivity statements in every coset).
2. **Intersection/root theorem (3), wrong coset side (genuine error).** The draft said "let
   `d∈W^I` be the unique element with `w∈W_I d`" but then states the conclusion about `wW_I`;
   those are different cosets, and for `w=w_0`, `I={s_1}` in `S_3` there is no `d∈W^I` with
   `w∈W_Id` at all. The statement now asks for the unique `d∈W^I∩wW_I` (i.e. `w∈dW_I`), and
   the proof is the equality case of the right-coset additivity `ℓ(dv)=ℓ(d)+ℓ(v)` of HH-11
   (3). The mirrored `{}^IW` claim was already correct. Re-verified exhaustively (all subset
   pairs in `S_3`, `S_4`, and `S_5` for the transversals and global minimality).
3. **Intersection/root theorem (2), reflection-length step (genuine error).** The induction
   step set `ψ=-t(α_{s_r})` and claimed `t_ψ=t s_r t=s_r t s_r`, hence `ℓ(t_ψ)=ℓ(t)-2`. The
   two reflections differ in general and the length drop can fail: in `B_2` with
   `φ=√2e_1+e_2` and `r=s_1` one has `t=s_1s_2s_1`, `t s_r t=s_2s_1s_2` of length `3=ℓ(t)`.
   The step now uses `ψ=ρ(s_r)φ` (so `t_ψ=s_r t s_r` and `ℓ(t_ψ)=ℓ(t)-2`), which is Qi's own
   choice; the complete proof of Qi Lemma 3.1 was re-fetched (`https://arxiv.org/pdf/math/0512408`,
   same bytes/stamp as recorded: 102920 bytes, 7 pages) and re-read in full, and the corrected
   step reproduces its substeps (descent `ℓ(ts_r)=ℓ(t)-1` via `t(α_{s_r})∈Φ_-`; sign control of
   `ρ(s_rt)e_{s_r}` via the coefficient at `supp φ∖{r}`; criterion applied to `w=s_r t`).
4. **Infinite-dihedral example, length formula and one set-builder (genuine error).** The
   draft's `ℓ(u^k s)=2|k|+1` fails for `k≤-1` (`u^{-1}s=t` has length `1`), and the draft's
   `{}^IW` contained `u^{0}s=s`, which has a left descent. The statement now reads
   `ℓ(u^k)=2|k|`, `ℓ(u^ks)=2|k|+1` (`k≥0`), `ℓ(u^ks)=2|k|-1` (`k≤-1`), and
   `{}^IW={u^{-k}:k≥0}∪{u^{-k}s:k≥1}`; the citation now includes clause (7) (ambient
   reducedness of alternating words), the lengths of the four block elements
   (`2k,2k+1,2k+1,2k+2`, via `ℓ(u^{-(k+1)}s)=2k+1`) were re-derived, and the final
   exhaustiveness sentence was rewritten. The block identities `(ts)^k=u^{-k}`,
   `s(ts)^k=u^ks`, `(ts)^kt=u^{-(k+1)}s`, `s(ts)^kt=u^{k+1}` were re-checked by reduced-word
   arithmetic.
5. **Reflection-subgroup example, index-two description (genuine error).** `<s,tst>=<s,u²>`
   was called the kernel of `s,t↦1`, but that kernel is `⟨u⟩` (which does not contain `s`);
   the correct homomorphism sends `s↦0`, `t↦1` (the parity of the number of `t`'s). All other
   identities of the example were re-verified by exhaustive `S_4` computation and reduced-word
   arithmetic (this one is a justification error only; the enumerated subgroup and its index
   are correct).

Two cosmetic corrections accompanied them: the citation inside the unique-minimum theorem's
strategy for the transversal factorization inside `(W_I,I)` moved from HH-11 (2) to (3), and
a misspelled duplicate dependency string (`def-hh-coexeter-matrix-word-group-and-length`) was
dropped from the descent lemma's readiness record. Rows 2 and 3 of
`frontier-42-coxeter-32-batch-10.cross-batch-dependencies.json` were updated to describe the
corrected sides of the HH-11 (3) use. Nothing else in the batch was found defective; the two
other examples, the intersection lemma, the minimality lemma and the normal-form theorem were
re-read clause by clause and re-verified against exhaustive `S_3`/`S_4`/`S_5` computation and
against the cited proofs (Lusztig 9.15–9.16, Davis 4.3.1, BKPS 2.7–2.8, Björner–Brenti 2.4).

**Re-run results after the correction pass (2026-10-07).**

| check | command | actual result |
|---|---|---|
| readiness | `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | all 124 in-run items ready; the only unclosed entries are 38 empty scaffold inventories of other, still unscaffolded batches; each of the eight batch-10 records was re-recorded with its corrected evidence |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 1; only `empty scaffold inventory` errors for other batches; no label error and no cycle (batch-10 labels unchanged) |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | exit 0; `124 item(s), 0 normalized, 0 error(s)` |
| manifest policy | `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | exit 0; `124 scoped item(s), 0 error(s), 0 warning(s)` |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; acyclic and consistent; no item-level cycles, forward refs, B-page deps or unresolved ids |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-10.coverage.json --require-destination` | exit 0; `1 page(s), 43 harvested result(s), 0 error(s), 1 warning(s)` (the recorded `coverage-low-yield` warning) |
| source full text | `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-10.coverage.json` | exit 0; `7/7 source(s) fetch-verified`, `7/7 resolved` |
| URL liveness | `node tools/url-sweep.mjs --coverage research/frontier-42-coxeter-32-batch-10.coverage.json --out research/frontier-42-coxeter-32-batch-10-url-liveness.json --recover --fail-on-dead` | exit 0; `7/7 live; 0 failed` |
| dependency ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | exit 0; `refreshed and deduplicated`; all 37 batch-10 reviewed rows present, `orphaned_reviews: []`; the five unreviewed edges that mention the batch-10 A page are page-level `requires` declarations **by other batches** (12, 14, 23, 25, 26) whose own consumer-batch inputs are owed by those batches, not by batch 10 |
| link audit | every `[[…]]` in the eight items vs `deps ∪ justified_by ∪ forward_refs` | no unresolved and no undeclared link |

Qi's paper was re-downloaded during this pass and its bytes matched the recorded stamp
(102920 bytes, `sha256_16 207260f6d20b805e`), so `source_resolution` is not applicable: no
drop, no replacement source, no escalation. The correction pass changed statements and proof
strategies only; no dependency, source, coverage disposition, page placement or inventory
decision changed, and none of the corrections weakens a claim (each replaces a false or
mis-sided statement by the true statement of the same strength).

Also re-confirmed during the correction pass: standalone `extcheck` and `fwdcheck` probes
return `[focus-item-unknown]` for scaffolded-but-unwritten ids. The orchestrator has removed
the premature `extcheck` from Step 1; the manifest-only content-policy gate checks retired
external-record metadata at this boundary, and normal item-scoped `extcheck`/`fwdcheck`
remain for authored carriers. Neither exploratory probe is a current Step-1 gate failure.
The manifests carry no `external_refs` or `proved_here: false` fields.
