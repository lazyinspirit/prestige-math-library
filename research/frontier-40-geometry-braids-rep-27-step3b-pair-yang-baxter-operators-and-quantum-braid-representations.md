# Step 3b — pair `yang-baxter-operators-and-quantum-braid-representations` (dispatch report)

- Run: `frontier-40-geometry-braids-rep-27`
- Dispatch label: `step3b-pair-yang-baxter-operators-and-quantum-braid-representations-f530467eb333b313`
- Role: alpha-high scaffold auditor and item author
- A page: `yang-baxter-operators-and-quantum-braid-representations` (order 753, category `braid-groups`, 18 items)
- B page: `yang-baxter-operators-and-quantum-braid-representations-examples` (order 754, 7 items)
- Batch: 7; manifest `research/frontier-40-geometry-braids-rep-27-batch-7.pages.json`;
  coverage `research/frontier-40-geometry-braids-rep-27-batch-7.coverage.json`;
  cross-batch input `research/frontier-40-geometry-braids-rep-27-batch-7.cross-batch-dependencies.json` = `[]`.
- Owned IDs (25, one pair only; no sibling pair shares batch 7):
  A: `def-absolutely-simple-object`, `def-exponent-sum-and-writhe-of-a-braid`,
  `def-the-framed-oriented-tangle-category`, `def-yang-baxter-operator-on-an-object`,
  `def-local-yang-baxter-operators-on-tensor-powers`,
  `lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation`,
  `lem-local-yang-baxter-operators-satisfy-the-artin-relations`,
  `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor`,
  `thm-a-yang-baxter-operator-gives-braid-group-representations`,
  `cor-an-object-of-a-braided-category-carries-canonical-braid-actions`,
  `prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group`,
  `def-braided-monoidal-functor-induced-intertwiner`,
  `def-ribbon-evaluation-of-an-x-colored-closed-braid`,
  `lem-ribbon-trace-equals-the-framed-closure-evaluation`,
  `thm-braided-functors-intertwine-canonical-braid-actions`,
  `thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links`,
  `lem-scalar-twist-controls-the-two-markov-stabilizations`,
  `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant`.
  B: `cex-a-solution-of-yang-baxter-without-invertibility-does-not-represent-the-braid-group`,
  `ex-a-diagonal-yang-baxter-operator-on-graded-vector-spaces`,
  `ex-a-noninvolutive-one-dimensional-yang-baxter-operator`,
  `ex-the-flip-operator-gives-the-permutation-representation`,
  `cex-a-braiding-alone-does-not-define-a-link-trace`,
  `cex-unnormalized-ribbon-trace-is-not-unframed-markov-invariant`,
  `ex-writhe-normalization-cancels-a-ribbon-kink`.

## Status of this report

Final for Step 3b (author handoff). All 25 owned item files and both pages are
authored on disk; every check listed under "Checks actually run" was executed
on the current content; the 25 Step-3b item decisions are recorded (13 `accept`,
12 `repaired`, confidence 1, explicit dependency lists) together with a
refreshed `sufficient` scope decision for the pair. Nothing in this report is
independent review; Steps 5–8 follow. One authoring-time correction of the
Step-1 notes' choice ledger (AC_ω propagation) and one arithmetic correction
(the sVect dimension sign) are recorded below with their exact items.

## Inputs read before writing

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md` (Step-3 controls), `briefs/group-author.md`,
  `briefs/tasks/frontier-dependency-ledger.md`.
- Owner direction `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`
  (27 pairs; lower-order in-run dependencies permitted; publication stays owner-held).
- Design `research/plan-braid-groups-track.md` L640–L678 (BG-13 A/B pages), batch-7 notes
  `research/frontier-40-geometry-braids-rep-27-batch-7.notes.md` (inventory, dependency
  repairs, convention hazards, AC discipline, source stamps), the batch-7 manifest and
  coverage.
- Published suppliers read at their Statements and, where the used clause is inside the
  proof, at their proofs: `def-braiding`, `def-braided-monoidal-category`,
  `thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation`,
  `thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one`,
  `thm-mac-lane-strictification`, `thm-mac-lane-coherence-in-the-canonical-map-form`,
  `thm-braided-coherence-via-underlying-braids`,
  `thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator`,
  `def-braided-monoidal-functor`, `def-braid-group-by-the-artin-presentation`, `thm-von-dyck`,
  `thm-the-symmetric-group-has-the-coxeter-presentation`,
  `thm-the-braid-group-surjects-onto-the-symmetric-group`,
  `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-oriented-reidemeister-moves`,
  `thm-oriented-reidemeister-equivalence-theorem`, `def-closure-of-a-geometric-braid`,
  `def-markov-conjugation-and-stabilization-moves`, `thm-markovs-closed-braid-equivalence-theorem`,
  `def-left-dual-and-right-dual-object`, `def-rigid-object-and-rigid-monoidal-category`,
  `def-the-dual-of-a-morphism`, `def-twist-and-ribbon-structure`,
  `thm-a-braided-rigid-category-has-a-drinfeld-morphism`,
  `def-the-categorical-trace-of-a-morphism-into-the-double-dual`,
  `thm-basic-properties-of-the-categorical-trace`, `fs-a-braiding-suffices-to-define-a-trace`,
  `def-k-linear-category-and-k-linear-functor`, `def-simple-object`, `def-axiom-of-choice`,
  `def-countable-choice`.
- Sources read in the fetched full texts for this dispatch: EGNO §8.1–§8.2 (printed
  pp. 194–198), §8.9–§8.10 (pp. 213–219); Turaev Chapter I §1.3–§1.6 (pp. 20–26), §2.3,
  §2.5–§2.7 (pp. 36–44), §3.1–§3.3 (pp. 49–53), §4.1–§4.5 (pp. 57–63).

## Open obligations at entry

1. Heavy geometric input: the completeness half of
   `lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation`
   (Turaev Lemma 3.3, proved in his §§4.1–4.9) and the relation checks of
   `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor` (Turaev
   Theorem I.2.5). Status tracked per item below.
2. Convention hazard: the plus/minus signs in
   `lem-scalar-twist-controls-the-two-markov-stabilizations` are fixed by the declared
   positive-curl convention; the item states the convention and warns that the opposite
   drawing convention exchanges the two scalars.
3. AC_ω is used only in
   `lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation`
   (general-position input); full AC only in
   `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant` and its B-page
   consumer `ex-writhe-normalization-cancels-a-ribbon-kink` (through Markov's theorem).
   All other items are choice-free.

## Per-item checkpoint

Entries follow the dispatch's authoring order (ascending `dependency_level`,
ties by page and item ID). "Sources" gives the primary locators; the complete
reference lists, including the EGNO §4.7/§8.9–8.10 trace conventions, are in
each item's frontmatter. All items carry `status: draft`, `origin: pipeline`,
`pipeline_run: frontier-40-geometry-braids-rep-27` and `verification.precheck`
`pass` (`n/a` for definitions).

### Level 0

- `def-absolutely-simple-object` — `End(X) = k·id_X` for a `k`-linear category
  ([[def-k-linear-category-and-k-linear-functor]], [[def-simple-object]]);
  excludes the zero object; semisimple locally finite categories are the
  standard case. Sources EGNO §1.5/§1.8 (pp. 9 ff.). Decision `accept`;
  choice-free. No open gap.
- `def-exponent-sum-and-writhe-of-a-braid` — the homomorphism
  `w: B_n → Z`, well defined by von Dyck ([[def-braid-group-by-the-artin-presentation]],
  [[thm-von-dyck]]); conjugation-invariant and `w(ι_n(β)σ_n^{±1}) = w(β) ± 1`.
  Sources Turaev Chapter I §§1.2, 1.5 (pp. 12–22). Decision `repaired`: the
  scaffold sentence claiming invariance under stabilization was replaced by the
  conjugation statement plus the separate shift. Choice-free.
- `def-the-framed-oriented-tangle-category` — the slab category of framed
  oriented tangles: objects signed sequences, crossings
  `(ε,ε′) → (ε′,ε)`, cap source `(−ε,ε)`, blackboard framing fixed; elementary
  tangles `X^{±}`, cups, caps, twists. Sources Turaev §2.2–2.3 (pp. 34–38).
  Decision `repaired`: crossing/sign conventions, crossed inverses and the
  blackboard framing were fixed and made explicit. Choice-free.
- `def-yang-baxter-operator-on-an-object` — invertible `R: X⊗X → X⊗X` with the
  cubic equation read in a strict model ([[thm-mac-lane-strictification]]);
  invertibility is part of the data; `c_{X,X}` is the basic example. Sources
  EGNO 8.1.1, 8.2.5 (pp. 194, 198). Decision `accept`; choice-free.

### Level 1

- `def-local-yang-baxter-operators-on-tensor-powers` — the bracket-corrected
  local operators `R_i = 1^{⊗(i−1)}⊗R⊗1^{⊗(n−i−1)}` for non-strict categories,
  canonical by Mac Lane strictification and coherence (not braided
  strictification; scaffold substitution preserved). Sources EGNO 8.2.5
  (p. 198). Decision `accept`; choice-free.
- `lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation`
  — states `AC_ω` ([[def-countable-choice]]); in `𝒯` the elementary tangles
  generate every morphism (i) and relations (3.2.a)–(3.2.h) are complete (ii).
  Sources Turaev Lemma 3.1.1, relations pp. 49–51, Lemma 3.3 with proof in
  §§4.1–4.9 (pp. 57–70); EGNO 8.10.3 (pp. 216–217). Deps
  ([[def-the-framed-oriented-tangle-category]],
  [[thm-oriented-reidemeister-equivalence-theorem]], [[def-countable-choice]]).
  Decision `accept`; step 4.1 localises `AC_ω` to the general-position
  classification input of step 2.1. **Heavy item flagged for Steps 5–8.**
- `cex-a-solution-of-yang-baxter-without-invertibility-does-not-represent-the-braid-group`
  (B) — `R = 0` on a one-dimensional space solves the cubic equation but is not
  invertible, so it defines no braid-group representation. Source EGNO 8.2.5
  (p. 198). Decision `accept`; choice-free.

### Level 2

- `lem-local-yang-baxter-operators-satisfy-the-artin-relations` — in the strict
  model `R_i R_{i+1} R_i = R_{i+1} R_i R_{i+1}` and distant `R_i R_j = R_j R_i`,
  transported by the bracket correction. Sources EGNO 8.2.5 and proof of
  8.1.10 (pp. 196–198). Decision `accept`; choice-free.
- `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor` —
  states `AC_ω`; for a ribbon category with chosen left duals and `X` there is a
  unique strict monoidal `F_X: 𝒯 → 𝒞` in a strict model with
  `F_X(±) = X, X^∨`, crossings `↦ c^{±1}`, cup/cap `↦ coev/ev`, twist
  `↦ θ^{±1}`; uniqueness is choice-free. Sources Turaev Theorem I.2.5 and
  §§3.5, 4.8 (pp. 39–40, 53–70); EGNO 8.9.1, 8.10.1/8.10.3 (pp. 214, 216–217).
  Decision `repaired`: the `AC_ω` hypothesis was added because existence of
  `F_X` consumes the `AC_ω`-conditional completeness half of the tangle lemma;
  step 3.1 localises the use. **Heavy item flagged for Steps 5–8.**

### Level 3

- `thm-a-yang-baxter-operator-gives-braid-group-representations` — a
  Yang–Baxter operator `R` on `X` yields, for each `n ≥ 2`, a unique
  `ρ_n: B_n → Aut(X^{⊗n})` with `ρ_n(σ_i)` the local operator, compatible with
  the inclusions. Sources EGNO 8.2.5 (p. 198);
  [[def-braid-group-by-the-artin-presentation]], [[thm-von-dyck]]. Decision
  `accept`; choice-free.

### Level 4

- `cor-an-object-of-a-braided-category-carries-canonical-braid-actions` — every
  object of a braided monoidal category carries canonical `ρ_n`, characterized
  by the local braiding, with `ρ_{n+1}(ι_n β) = ρ_n(β)⊗1`; independence of
  brackets by [[thm-braided-coherence-via-underlying-braids]]. Sources EGNO
  8.2.4/8.2.5/8.2.7 (pp. 197–198). Decision `accept`; explicitly choice-free.
- `prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group`
  — `R² = 1` makes every `ρ_n` factor through `S_n`; conversely `ρ_2` factors
  through `π_2` exactly when `R² = 1` (the two-strand statement is the only
  unconditional converse). Sources EGNO 8.1.12, 8.2.5 (pp. 197–198). Decision
  `repaired`: no false general converse. Choice-free.
- `ex-a-diagonal-yang-baxter-operator-on-graded-vector-spaces` (B) — the
  diagonal `R(e_g⊗e_h) = χ(g,h)e_h⊗e_g` is an invertible Yang–Baxter operator
  for every coefficient function, involutive iff `χ(g,h)χ(h,g) = 1`. Sources
  EGNO 8.2.3, §8.4 (pp. 197 ff.). Decision `accept`; choice-free.

### Level 5

- `def-braided-monoidal-functor-induced-intertwiner` — the canonical composite
  `J_n: F(X)^{⊗n} → F(X^{⊗n})` of the strong monoidal structure, an
  isomorphism natural in the braid action. Sources EGNO 8.1.7/8.1.8 and (8.5)
  (pp. 195–196). Decision `accept`; choice-free.
- `def-ribbon-evaluation-of-an-x-colored-closed-braid` — `j_X := u_Xθ_X` and
  `t_n(β) := Tr_L(j_{X^{⊗n}} ρ_n(β)) ∈ End_𝒞(1)` (a scalar when
  `End_𝒞(1) = k`), with the closure comparison explicitly *not* assumed; the
  definition is choice-free, while the comparison functor `F_X` is constructed
  under `AC_ω` ([[def-countable-choice]]) — recorded so the pointer does not
  silently import choice. Sources EGNO (8.30), 8.9.3, 8.10.6, (8.35)
  (pp. 213–218). Decision `repaired` (typing, pointer, choice cost).
- `ex-a-noninvolutive-one-dimensional-yang-baxter-operator` (B) — `R = 2·id` on
  a one-dimensional space gives braid characters `2^{w(β)}` that do not factor
  through `S_n`. Sources EGNO 8.2.5, 8.1.12 (pp. 197–198). Decision `accept`;
  choice-free.
- `ex-the-flip-operator-gives-the-permutation-representation` (B) — the flip is
  an involutive Yang–Baxter operator whose actions are the place-permutation
  representations pulled back along `B_m → S_m`. Sources EGNO 8.2.1, 8.2.5
  (pp. 197–198). Decision `accept`; choice-free.

### Level 6

- `lem-ribbon-trace-equals-the-framed-closure-evaluation` — states `AC_ω`;
  `t_n(β) = F_X(β̂^{fr})`, so `t_n` depends only on the framed isotopy class;
  the positive stabilization adds the positive curl `φ_X` with
  `F_X(φ_X) = θ_X`. Sources Turaev Corollaries 2.7.1–2.7.2, (1.5.a) and
  Theorem I.2.5 (pp. 21–22, 42–44); EGNO (8.35), (8.40) (pp. 216–218).
  Decision `repaired`: `AC_ω` stated and declared, use localised to `F_X`.
  **Trace/closure identification flagged for Steps 5–8.**
- `thm-braided-functors-intertwine-canonical-braid-actions` — a braided
  monoidal functor `F` intertwines `ρ^𝒞_n` and `ρ^𝒟_n` through `J_n`. Sources
  EGNO (8.5), 8.1.7, 8.2.7 (pp. 195–196, 198). Decision `accept`; choice-free.
- `cex-a-braiding-alone-does-not-define-a-link-trace` (B) — a braiding alone
  gives the actions but no link trace: `k[x] ∈ Vect_k` has no dual, and even for
  dualizable objects the trace needs the pivotal comparison `j_X = u_Xθ_X`,
  which a braiding does not supply. Sources EGNO §4.7, §8.9–8.10
  (pp. 73–75, 213–218); published [[fs-a-braiding-suffices-to-define-a-trace]].
  Decision `repaired` (sharpened refutation). The refutation is choice-free and
  no `AC_ω` is assumed: nothing in it uses `F_X` or the classification.

### Level 7

- `thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links` — states
  `AC_ω`; braids with isotopic blackboard-framed closures have equal `t_n`;
  ordinary Markov stabilization is *not* a framed isotopy. Source Turaev
  Theorem I.2.5 and isotopy invariance (pp. 39–40); EGNO 8.10.3 (pp. 216–217).
  Decision `repaired`: `AC_ω` stated and declared, consumed through the closure
  comparison and `F_X`.
- `lem-scalar-twist-controls-the-two-markov-stabilizations` — states `AC_ω`;
  for absolutely simple `X` with `θ_X = λ id_X`,
  `t_{n+1}(ι_n(β)σ_n^{±1}) = λ^{±1} t_n(β)`, with the positive-curl
  convention fixed and the warning that the opposite drawing convention
  exchanges `λ` and `λ^{−1}`. Sources Turaev §§1.5–1.6, Figures 2.3/2.6, and
  relations (3.2.f)/(3.2.h) (pp. 21–26, 34–38, 50–51). Decision `repaired`
  (`AC_ω`, convention stated). **Step 1.2 (curl-to-scalar slide) flagged for
  Steps 5–8.**

### Level 8

- `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant` — assumes
  AC; `J_X(β̂) := λ^{−w(β)}t_n(β)` is invariant under conjugation and both
  stabilizations, hence an invariant of oriented unframed closures by Markov's
  theorem; `d_X^{−1}J_X` normalizes the unknot when `d_X` is a unit. Source
  EGNO 8.10.3/(8.35) (pp. 216–218); Turaev 1.5.1, 2.7.2 (pp. 21–22, 43–44).
  Decision `repaired`: choice ledger corrected — AC enters through Markov's
  theorem and supplies `AC_ω` for the stabilization lemma via the published
  [[thm-choice-implies-dependent-implies-countable-choice]]; the invariant
  statement is unchanged.
- `cex-unnormalized-ribbon-trace-is-not-unframed-markov-invariant` (B) — in
  sVect (`char k ≠ 2`) with the sign braiding and parity twist, the odd line has
  `u_X = −id`, `θ_X = −id`, `j_X = id`, `d_X = 1`, so `t_1(e) = 1` while
  `t_2(σ_1) = λt_1(e) = −1` although the closures are both the unknot.
  Sources EGNO 8.2.2, 8.10.1/8.10.4 (pp. 197, 216–218). Decision `repaired`:
  the computation was corrected from the stale `d_X = −1` to `d_X = 1` (this
  dispatch re-derived `u_X = −id`, `θ_X = −id`, `j_X = id`, `Tr_L(id) = ev∘coev = 1`
  independently and confirms the corrected values); the item now states
  `AC_ω`, consumed through the stabilization lemma. **Flagged for Steps 5–8.**

### Level 9

- `ex-writhe-normalization-cancels-a-ribbon-kink` (B) — same sVect model:
  `t_1(e) = 1`, `t_2(σ_1) = −1`, `w(e) = 0`, `w(σ_1) = 1`, so
  `J(e) = J(σ_1) = 1` and the writhe factor cancels the kink; `d_X = 1` makes
  the further normalization trivial. Sources EGNO 8.10.4 (pp. 216–218).
  Decision `repaired`: the stale sign values were corrected to the same
  `d_X = 1` computation, and the item records that AC supplies the `AC_ω`
  hypothesis of the stabilization lemma.

## Authoring-time repairs and record corrections

1. **AC_ω propagation (this dispatch).** The Step-1 notes' choice ledger listed
   `AC_ω` only in `lem-framed-oriented-tangles-…` and claimed the remaining
   ribbon-evaluation items choice-free, with AC in the writhe theorem "only
   through Markov's theorem". The authored proofs do not support that ledger:
   existence of `F_X` consumes the `AC_ω`-conditional completeness half of the
   tangle lemma, and the closure comparison, framed-invariance theorem,
   stabilization lemma and sVect counterexample all invoke `F_X` (directly or
   through the stabilization lemma). The ledger was repaired, not the
   mathematics:
   - stated `AC_ω` + declared [[def-countable-choice]]:
     `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor`,
     `lem-ribbon-trace-equals-the-framed-closure-evaluation`,
     `thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links`,
     `lem-scalar-twist-controls-the-two-markov-stabilizations`,
     `cex-unnormalized-ribbon-trace-is-not-unframed-markov-invariant`;
   - full-AC items now also declare
     [[thm-choice-implies-dependent-implies-countable-choice]] and state that AC
     supplies `AC_ω` for the stabilization lemma:
     `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant`,
     `ex-writhe-normalization-cancels-a-ribbon-kink`;
   - left choice-free (17 items in all): `def-ribbon-evaluation-of-an-x-colored-closed-braid`,
     which records the cost of the *comparison* (not of the definition) in a
     pointer to `F_X`, `cex-a-braiding-alone-does-not-define-a-link-trace`, and
     the remaining fifteen (all local prerequisites and definitions, the
     strictification/coherence/von Dyck/Coxeter items, the local-operator and
     intertwiner items, and the B-page linear examples and non-invertible
     counterexample).
   No item states a choice principle it does not spend, and no statement was
   weakened where the authored argument is finite and choice-free.
2. **sVect dimension sign (this dispatch).** `cex-unnormalized-…` and
   `ex-writhe-normalization-…` initially had `d_X = −1` (the value obtained
   from `ψ = u`, i.e. the trivial twist). For the *declared* parity twist
   `θ_X = −id`, `j_X = u_Xθ_X = id` and `d_X = 1`. Both the item files and the
   manifest `statement` fields now carry the corrected values; the manifest
   fields were stale and were synced for all eight edited items.
3. **Manifest consistency.** `deps` in `…-batch-7.pages.json` now equal the
   authored frontmatter for all 25 rows (set equality; `cor-an-object-…` keeps
   the manifest's row order). Statements in the manifest were refreshed for the
   AC and sign edits so the Step-1 record remains a faithful description.
4. **Step-3 decisions.** The scope receipt was re-recorded `sufficient`
   (refresh after the statement edits changed the scope hash; scope itself
   unchanged), and all 25 item receipts were recorded with their declared
   dependency lists. See "Step-3 decision receipts" below.

No new item IDs, pages, prose sections or scope changes were introduced by
these repairs; no Recorded/unproved result is consumed anywhere on the pair
(all dependencies are published proved items, published definitions, or
batch-7 items).

**Added suppliers (this dispatch): none.** The three local prerequisites
(`def-absolutely-simple-object`, `def-exponent-sum-and-writhe-of-a-braid`,
`lem-ribbon-trace-equals-the-framed-closure-evaluation`) were scaffolded at
Step 1 and registered then; this dispatch minted no new ID, page or pair.

## Checks actually run (final content)

All commands were run from the repository root on the current files:

- `node tools/proof-layout.mjs items/…` on all 25 owned item paths in one
  command — `25 items, 82 steps, 0 defects` (post-edit handoff run).
- `node tools/tsx-run.mjs tools/precheck.mts items/…` (25 explicit paths) —
  `18 checked, 0 failing — all clean` (the 7 definitions are `n/a`).
- `node tools/rendercheck.mjs items/…` + the two page files — `OK — 27 file(s)`:
  YAML, math delimiters and KaTeX all parse.
- `node tools/proof-contract.mjs …-batch-7.proof-contracts.json --strict` —
  `0 error(s), 0 warning(s), 25/25 item(s) checked` (contracts regenerated from
  the current items and the updated boundary worksheet).
- `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template` —
  no template reuse, no contradicted dispositions (200 boundary rows read).
- `node tools/citation-fidelity.mjs … --fail-on-missing-quote` — `89 citation(s)
  over 25 authored item(s)`: `QUOTE NOT FOUND — none`, `WIDENING CANDIDATES —
  none`.
- `node tools/content-policy.mjs …-batch-7.pages.json` — `25 scoped item(s),
  0 error(s), 0 warning(s)`.
- `node tools/manifest-deps.mjs …-batch-7.pages.json` — `25 item(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs …-batch-7.coverage.json --require-destination`
  — `2 page(s), 53 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json` — `OK` (order acyclic and
  consistent; the pre-splice NOTE still lists 257 pages without item lists,
  including orders 753/754 — see open obligations).
- `node tools/tsx-run.mjs tools/item-dependency-levels.mjs check --run
  frontier-40-geometry-braids-rep-27` — an early pass over the run reported
  `894 item(s) checked across 54 page(s); maximum level 39`, no errors. The
  final run-level pass now reports 8 `dependency_level` mismatches, **all on
  other groups' in-flight Burau/Khovanov-Seidel items** (concern 6 below); no
  batch-7 id appears in any error. A batch-7-scoped pass over the two batch-7
  pages (`dependencyLevels` over `runPages(...).batch === 7`) reports
  `items 25, pages 2, errors 0` with levels exactly the dispatch's
  0,0,0,0,1,1,1,2,2,3,4,4,4,5,5,5,5,6,6,6,7,7,8,8,9; the declared
  `dependency_level` values match the computed ones.
- `node tools/source-fetch-check.mjs --coverage …-batch-7.coverage.json` —
  `4/4 source(s) fetch-verified`, `4/4 resolved`.
- `node tools/extcheck.mjs` — exit 0 (one pre-existing warning on
  `items/thm-urysohn-lemma.md`, outside this pair's scope).
- `node tools/depcheck.mjs --json` — run-wide `895 error(s), 632 warning(s)` at
  the time of the run, with **zero** lines mentioning any batch-7 item or page
  (filtered by id and by file path). The errors are other groups' in-flight
  publication evidence (833 `published-unaudited`), unresolved links/deps in
  other collections, and the sibling YAML break below; this is reported
  honestly as *not* a scoped pass, and no batch-7 defect was found.
- `node tools/tsx-run.mjs tools/step3-decisions.mjs record-scope …` and
  `record-item …` for the 25 owned ids — scope refreshed to `sufficient`; 13
  `accept`, 12 `repaired`, confidence 1, declared dependency lists hashed.
  `check --phase final` reports `0` open rows for this pair and its 25 items
  (run-wide the check is not closed: other pairs were still authoring,
  `269/894` accepted at the moment of the check).
- `node tools/frontier-dependency-ledger.mjs refresh --run
  frontier-40-geometry-braids-rep-27` — **blocked by a sibling file** (see
  published concerns). The owned batch-7 input
  `research/…-batch-7.cross-batch-dependencies.json` remains `[]`, which is
  valid: every declared dependency is published or local to batch 7, and the
  refresh cannot produce a cross-batch row for it.

## Step-3 decision receipts

- `repaired` (12): `def-exponent-sum-and-writhe-of-a-braid`,
  `def-the-framed-oriented-tangle-category`,
  `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor`,
  `prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group`,
  `def-ribbon-evaluation-of-an-x-colored-closed-braid`,
  `lem-ribbon-trace-equals-the-framed-closure-evaluation`,
  `thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links`,
  `lem-scalar-twist-controls-the-two-markov-stabilizations`,
  `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant`,
  `cex-a-braiding-alone-does-not-define-a-link-trace`,
  `cex-unnormalized-ribbon-trace-is-not-unframed-markov-invariant`,
  `ex-writhe-normalization-cancels-a-ribbon-kink`.
- `accept` (13): `def-absolutely-simple-object`,
  `def-yang-baxter-operator-on-an-object`,
  `def-local-yang-baxter-operators-on-tensor-powers`,
  `lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation`,
  `lem-local-yang-baxter-operators-satisfy-the-artin-relations`,
  `thm-a-yang-baxter-operator-gives-braid-group-representations`,
  `cor-an-object-of-a-braided-category-carries-canonical-braid-actions`,
  `def-braided-monoidal-functor-induced-intertwiner`,
  `thm-braided-functors-intertwine-canonical-braid-actions`,
  `cex-a-solution-of-yang-baxter-without-invertibility-does-not-represent-the-braid-group`,
  `ex-a-diagonal-yang-baxter-operator-on-graded-vector-spaces`,
  `ex-a-noninvolutive-one-dimensional-yang-baxter-operator`,
  `ex-the-flip-operator-gives-the-permutation-representation`.

## Published concerns

1. **Sibling YAML break blocks the run-level ledger refresh (confirmed).**
   `items/lem-upper-unitriangular-coordinate-ring-is-coconnected.md` has the
   unquoted title `Coconnected Hopf algebras: the coordinate ring of U_n and
   passage to quotients`; `tools/frontier-dependency-ledger.mjs refresh` fails
   with `Nested mappings are not allowed in compact mappings at line 3, column
   8`. Exact remedy: quote the title (`title: "Coconnected Hopf algebras: …"`)
   in that sibling item (owner of that pair; not edited here). The break does
   not touch batch 7, but it prevents the derived ledger from refreshing for the
   whole run until repaired; retry the refresh after the fix.
2. **Published suppliers used by this page lack publication stamps
   (confirmed mechanical, bookkeeping only).** `depcheck` reports
   `published-unaudited` for `def-closure-of-a-geometric-braid`,
   `def-markov-conjugation-and-stabilization-moves` and
   `lem-markov-moves-preserve-oriented-closure-isotopy` (all used by the B-page
   sVect counterexample) among 833 such rows in the run. These are published
   items of the braid/closures collection whose audit stamps have not been
   applied yet; no mathematical defect is asserted. Repair strategy: the owning
   group records the owed `verification.audited`/`verified` stamps. Unrelated
   published debt does not block this draft work.
3. **Unrelated `extcheck` warning** on `items/thm-urysohn-lemma.md` (pre-existing,
   outside this pair).
4. **Step-1 notes' choice ledger superseded (record correction, not a defect in
   a published item).** The batch-7 notes' Axiom-of-choice discipline and its
   "every other item is choice-free" sentence are corrected by the authoring
   evidence in "Authoring-time repairs" above. Step 4/5 should read the item
   statements and this report, not the earlier ledger, for the choice cost.
5. **Pre-splice plan mismatch (known, Step-4 obligation).** `plan-spec.json`
   records pages 753/754 with empty item lists; the batch-7 manifest rows are
   the proposal for the Step-4 splice. No action for Step 3b.
6. **Run-level dependency-level mismatches in another pair's in-flight items
   (confirmed mechanical, out of scope).** The final
   `item-dependency-levels check --run frontier-40-geometry-braids-rep-27`
   reports 8 errors: `def-coloured-reduced-burau-matrix` (5 vs computed 6),
   `thm-the-burau-determinant-formula-for-a-closed-braid-and-its-axis` (6 vs 7),
   `prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid`
   (7 vs 8), `ex-the-burau-determinant-for-a-two-strand-torus-link` (8 vs 9),
   `prop-khovanov-seidel-decategorification-is-the-unreduced-burau-action`
   (5 vs 6), `lem-a-nontrivial-five-strand-braid-lies-in-the-burau-kernel`
   (10 vs 11), `ex-decategorifying-a-khovanov-seidel-generator` (6 vs 7) and
   `cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences`
   (11 vs 12). Evidence: the tool compares each stored label against the level
   computed from the current dependency edges in the run's batch manifests, and
   the mismatches are exactly one level in each case, as expected when a
   dependency edge was added after the label was written; the underlying edge
   change was made by that pair's own writer (I did not trace each edge).
   Repair: the owning writer recomputes and updates `dependency_level` in each
   item's frontmatter and manifest row. No batch-7 item or page is involved.

## Open obligations and residual risk at handoff

- **Independent verification of the heavy steps (Steps 5–8):** (i) the
  completeness half of `lem-framed-oriented-tangles-…` (Turaev Lemma 3.3,
  §§4.1–4.9) — in particular the reduction of an arbitrary boundary-relative
  isotopy to the listed local moves; (ii) the trace/closure identification of
  `lem-ribbon-trace-equals-…` steps 1.1–2.1, including the passage between
  Turaev's trace formula (1.5.a) and `Tr_L` via EGNO (8.40); (iii) the
  curl-to-scalar slide of `lem-scalar-twist-…` step 1.2 and its declared
  positive-curl convention (the opposite convention exchanges `λ` and
  `λ^{−1}`); (iv) the sVect computation of
  `cex-unnormalized-…` step 1.2, re-derived here (`u_X = −id`, `θ_X = −id`,
  `j_X = id`, `d_X = 1`) but still owed a source-convention check.
- **AC_ω ledger maintenance:** if a later repair removes the `AC_ω` assumption
  from the tangle-presentation lemma, the five items carrying `AC_ω` plus the
  two full-AC items supplying it can be relaxed; until then the hypotheses are
  load-bearing and steps 3.1/4.1 of the items record the exact use.
- **Receipt freshness:** each Step-3b receipt hashes the item's transitive
  dependency closure (item bodies and the batch manifest). Any later edit by
  another writer to a supplier in that closure invalidates the receipt and it
  must be re-recorded; `check --phase final` is the detector.
- **Run-level ledger refresh** stays blocked until concern 1 above is repaired.
- No escalation is open for this pair: no unmet prerequisite, no unresolved
  source question, no owner-held decision, and no `--owner` receipt was used.

## Completed IDs (25)

A (18): `def-absolutely-simple-object`,
`def-exponent-sum-and-writhe-of-a-braid`,
`def-the-framed-oriented-tangle-category`,
`def-yang-baxter-operator-on-an-object`,
`def-local-yang-baxter-operators-on-tensor-powers`,
`lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation`,
`lem-local-yang-baxter-operators-satisfy-the-artin-relations`,
`thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor`,
`thm-a-yang-baxter-operator-gives-braid-group-representations`,
`cor-an-object-of-a-braided-category-carries-canonical-braid-actions`,
`prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group`,
`def-braided-monoidal-functor-induced-intertwiner`,
`def-ribbon-evaluation-of-an-x-colored-closed-braid`,
`lem-ribbon-trace-equals-the-framed-closure-evaluation`,
`thm-braided-functors-intertwine-canonical-braid-actions`,
`thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links`,
`lem-scalar-twist-controls-the-two-markov-stabilizations`,
`thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant`.

B (7): `cex-a-solution-of-yang-baxter-without-invertibility-does-not-represent-the-braid-group`,
`ex-a-diagonal-yang-baxter-operator-on-graded-vector-spaces`,
`ex-a-noninvolutive-one-dimensional-yang-baxter-operator`,
`ex-the-flip-operator-gives-the-permutation-representation`,
`cex-a-braiding-alone-does-not-define-a-link-trace`,
`cex-unnormalized-ribbon-trace-is-not-unframed-markov-invariant`,
`ex-writhe-normalization-cancels-a-ribbon-kink`.

Both pages (`yang-baxter-operators-and-quantum-braid-representations`,
`…-examples`, `status: draft`) are written and list exactly these ids. No new
item ID was created by this dispatch.
