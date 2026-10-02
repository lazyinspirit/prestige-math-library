# Step 3b — scaffold audit and authoring: artin-presentation-completeness-and-braid-combing

- Run `frontier-37-owner-30`, batch 22, role alpha-high, dispatch
  `step3b-pair-artin-presentation-completeness-and-braid-combing-27c6b9d4297896dd`.
  This is the resumed retry of dispatch `…-1fbdb8c00a8e5a51`, which exited 1
  after authoring every assigned item, both pages and the contracts and
  writing this report. The resumed session finished the contract repair,
  re-ran every gate on the current files, repaired two factual defects found
  during the re-audit, refreshed the pair's Step-3a scope receipt, and
  rewrote this report. Item/page IDs, the promised claims and the authoring
  order are unchanged.
- A page `artin-presentation-completeness-and-braid-combing` (order 739,
  category `braid-groups`, 8 items), B page
  `artin-presentation-completeness-and-braid-combing-examples` (order 740,
  3 items). Both pages are drafts. No other pair is edited.
- **No new item IDs were created in this dispatch**: all 11 IDs are original
  scaffold IDs. Local suppliers added: **none**. The only inventory-level
  change is the removal of one declared consumer use
  (`cor-the-pure-braid-extension-splits`), recorded in the batch's own
  cross-batch input; no shared plan or prose amendment is required.
- Both items and pages exist at `items/<id>.md` and
  `library/braid-groups/<page-id>.md`; the batch record is
  `research/frontier-37-owner-30-batch-22.pages.json` (with `.coverage.json`,
  `.notes.md`, `.cross-batch-dependencies.json`,
  `.proof-contracts.json`).

## Inputs read

`CLAUDE.md`, `SCHEMA.md`, both BG-6 design sections of
`research/plan-braid-groups-track.md` (L375–402), the batch-22
manifest/coverage/notes/cross-batch input, the Step-3a scope review
(`research/frontier-37-owner-30-step3a-pair-artin-presentation-completeness-and-braid-combing.md`,
decision `sufficient`), the published suppliers named by the items (Artin
presentation, surjection proposition, geometric relation lemmas, stacking,
half twist and support discs, endpoint-permutation identity, configuration
isomorphism, von Dyck, modular arithmetic, AC items), and the batch-20/21
in-run suppliers actually consumed:
`thm-pure-braid-forgetting-a-strand-short-exact-sequence`,
`lem-standard-pure-braids-generate-each-free-kernel`,
`def-standard-pure-braid-generators`,
`thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`,
`def-boundary-fixed-mapping-class-group-of-a-punctured-disk`.
`research/frontier-37-owner-30-owner-authoring-direction.md` does not exist
(re-checked), and `…-pre-splice-plan-findings.json` has no row naming this
pair (0 of 67 rows). Primary source read at authoring time: González-Meneses,
*Basic results on braid groups*, arXiv:1010.0321 §3.1 (printed pp. 19–22) and
§2.1 (printed pp. 11–13). Fox–Neuwirth mirror caveat preserved: its OCR text
layer garbles the general `r_{i,k}` display; no statement or proof step in
this pair uses it.

## Resumption — repairs and re-audit in this session

1. **Proof-contract quote refresh (gate-critical).** Two batch-21 suppliers
   were rewritten by their owner after the contracts were written at 22:00
   (`def-standard-pure-braid-generators` at 22:26 and
   `lem-standard-pure-braids-generate-each-free-kernel` at 22:32), which
   broke four citation quotes guarded by `citation-quote-mismatch`:
   A6 F2 and A7 F4 (both → `lem-standard-…` Statement), B2 F2
   (→ `def-standard-…` Definition) and B2 F3 (→ `lem-standard-…` Statement).
   The four quotes were re-copied verbatim from the current
   `## Statement`/`## Definition` sections (the substantive change was the
   supplier's meridian sign, now stated as
   `Ψ([A_{in}])=(κ_*[γ_i])^{-1}` with `γ_i` the counterclockwise class).
   `proof-contract --strict` is now **0 errors, 0 warnings, 11/11 items**.
   The A6/A7/B2 uses were re-read against the rewritten statements and still
   match fact-for-fact and step-for-step.
2. **B2 orientation defect repaired.** The scaffold/earlier draft stated that
   under the fibre identification the two bases are "the positively oriented
   based meridians around the two punctures" — this contradicts the supplier
   it cites, whose formula makes the A-basis the *clockwise* meridians
   (inverses of the positively oriented classes). Verified independently in
   this session: the coordinate loop of `σ_i^2` was computed from the
   published stacking and half-twist definitions, and the explicit homotopy
   `H_s(t)=(u_s(t), u_s(t)+(Γ(t+1/2)-Γ(t)))`, `u_s=(1-s)Γ+s q_1`, carries it
   inside `F_2(D°)` (max norm 1/4 < 1, minimum pair separation
   `h≈0.0833 > 0`) to the counterclockwise point-push loop about `q_1`
   (winding +1, checked numerically to 200k samples). Since `Ψ` contains the
   inverse sign, `Ψ(A_{in})` is the clockwise class — the supplier is right
   and the earlier B2 wording was wrong. Repaired in the item statement,
   step 4.1 and remarks, and in the manifest statement, which now reads
   "the clockwise based meridian classes of the two punctures, the inverses
   of their positively oriented meridian classes". B2's design row promises
   only "match them to the two meridians", so the promised claim is
   preserved; the repair was applied after the escalation was recorded, so
   that owner-held receipt now reports changed inputs (see below).
3. **Stale-prose repairs (local, factually wrong text).**
   - A6 remarks: "step 3.3 in particular uses …" — there is no step 3.3
     (the proof steps are 1.1–4.1). Now names steps 2.1 and 2.2, the steps
     that actually use the coordinate-projection realization, and records
     that the current supplier statement does assert it.
   - B2 remarks: "The two free-cancellation displays of step 1.3" → step 2.1;
     "The free-basis argument of step 2.1" → step 3.1; and the claim that
     the suppliers "were not yet authored when this example was written"
     is now false — they are in-run drafts authored during this run, read
     during this dispatch, and their certification (in particular the
     meridian clause) remains the owner's obligation.
   - A8 remarks: "precheck pending at authoring time" was stale; the
     batch-20 supplier now records `precheck: pass`. Rewritten as
     "in-run batch-20 draft … precheck PASS; not a published supplier".
4. **Scope refresh after the manifest repair.** Correcting B2's manifest
   statement changed the pair's Step-3a scope hash, so the `sufficient`
   review receipt no longer matched (`current scope review required`). Per
   the dispatch, a refreshed `sufficient` review was recorded
   (`research/frontier-37-owner-30-step3a-review-artin-presentation-completeness-and-braid-combing.json`,
   sha256 prefix `6471e12cab482b55`, 2026-09-30T12:43Z) after re-checking the
   new hash against the same Step-3a evidence: 11/11 designed ids present
   in design order and kinds, `requires` unchanged (design L378–380,
   plan-spec 739, manifest), the other ten statements unchanged, coverage
   and readiness unchanged, and no new claim beyond the design row. The
   Step-3a report remains untouched as the scope evidence; only the scope
   hash in the receipt is refreshed.
5. **Decision-state consequence (honest record).** The three repaired
   escalated items (A6, A8, B2) and the two items whose transitive closure
   includes a repaired escalated item (A7 through A6, B3 through A7) now
   report `changed inputs require a current owner decision` — still
   owner-held, and deliberately not re-recorded: `step3-decisions.mjs`
   refuses a non-owner re-record over an escalation ("The owner must resolve
   this item decision"). The six accept/repaired receipts (A1–A5, B1) were
   re-verified as hash-current against the edited tree. No closed item's
   inputs were touched by this session's repairs.

## Checkpoints (authoring order per the dispatch; recomputed levels)

Levels: `def-…` = 0; `lem-lower-rank-…` = 1 and `lem-prefix-…` = 1 (ID order
puts lower-rank first, but the algebraic reading order used is A1 → A2 → A4 →
A3 → A5 → A6 → A7 → A8; no item uses a later item to justify an earlier one);
`lem-each-combing-factor-…` = 2; `lem-every-trivial-…` = 3;
`lem-the-combed-…` = 4 and `ex-combing-a-four-strand-braid-word` = 4;
`thm-the-artin-presentation-…` = 5 and `ex-the-free-kernel-…` = 5;
`cor-all-four-…` = 6 and `cex-visible-…` = 6.

- [A1 `def-zariski-braid-combing-words-alpha-and-x`, level 0, accept]
  Definition of `alpha_i`, `x_i` and the reading convention; no relation
  used; deps on the Artin presentation, stacking, geometric group and the
  published surjection. Precheck `n/a`; rendercheck OK.
- [A2 `lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors`, level 1, repaired]
  Prefix insertions of `alpha_j alpha_j^{-1}` produce the combing factors,
  with the position recursion `j_k = s_{i_k}(j_{k-1})`, `j_0 = j_m = n`,
  matching the library's first-letter-topmost stacking convention. Two
  wording repairs applied; precheck PASS.
- [A4 `lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel`, level 1, repaired]
  The conjugation table in both orientations; the scaffold's false claim
  that `sigma_i` commutes with every letter of `x_j` for `j<i` was replaced
  by the mixed-relation slide in step 1.1. Precheck PASS.
- [A3 `lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter`, level 2, repaired]
  Six cases (a)–(f); the slide identity `sigma_k alpha_j = alpha_j sigma_{k-1}`
  for `k>j` proved in step 1.3 from the braid relation plus far
  commutation; geometric transfer step 2.1. Precheck PASS; the [F3]
  citation was attached to step 1.1 during contract construction.
- [A5 `lem-every-trivial-braid-word-combs-as-w-one-w-two`, level 3, repaired]
  Collection with a termination measure that is not the naive inversion
  count (recorded in the item's remarks). Precheck PASS.
- [A6 `lem-the-combed-geometric-decomposition-is-unique`, level 4, escalate]
  Authoring repairs: the scaffold's false free reduction `P_i ≡ δ_{i+1}γ_i`
  replaced by the downward induction `Q_j ≡ δ_j σ_j^2 γ_j` giving
  `P_i^{-1}A_{in}P_i ≡ x_i` by free cancellation; the radial-projection
  retraction (not injective, induces no map of configuration spaces)
  replaced by the dilation homotopy
  `F_t(w) = -1/4 + s_t(w+1/4)`, `s_t=(1-t)+ta ∈ (0,1]`, injective at every
  time, with the published moving-homotopy transport giving
  `id_* = β_η ∘ F_{n-1}(A)_*` and hence injectivity. The uniqueness clause
  `Ψ_n(im ŝ) ∩ ker ρ = {1}` is what makes the split argument work (Step-3a
  observation (a)/(c) obligation; present, supplier certification open).
  Precheck PASS. This session additionally re-verified the A6 step-1.2
  arithmetic `A(q'_j)=q_j`, `A∘ρ'=ρ`, `A(D°) ⊂ D°`.
- [B1 `ex-combing-a-four-strand-braid-word`, level 4, accept]
  The twelve-letter `B_4` word, position sequence
  `4,3,2,2,3,4,4,4,4,4,4,4,4`, the twelve factor reductions,
  `W ≡ W_1W_2` with `W_1` freely trivial and `W_2` trivial in `B_3`.
  All twelve reductions re-verified numerically. Choice-free. Precheck PASS.
- [A7 `thm-the-artin-presentation-is-complete-for-geometric-braids`, level 5, escalate]
  Induction on `n`, base `n=1`; comb `W ≡ W_1W_2` by A5; split by A6;
  free reduction of `W_1` in the basis `φ(x_1),…,φ(x_{n-1})`; rank `n-1`
  induction for `W_2`. No injectivity of any Artin presentation is assumed
  anywhere. Precheck PASS (`∎` repaired).
- [B2 `ex-the-free-kernel-words-for-three-strand-braid-combing`, level 5, escalate]
  `x_2 = σ_2^2 = A_{23}`, `x_1 = σ_2^{-1}σ_1^2σ_2 = A_{23}^{-1}A_{13}A_{23}`
  by free cancellation, and the `n=3` left-inverse free-group argument
  showing `{x_1,x_2}` is again a free basis. The meridian/orientation
  clause was corrected this session as described above (clockwise, inverse
  of the positively oriented classes); the clause itself remains the
  supplier's certification obligation. Precheck PASS; AC declared for the
  free-kernel basis; the two free-cancellation computations are choice-free.
- [A8 `cor-all-four-classical-braid-models-realize-the-artin-presentation`, level 6, escalate]
  Composes A7 with the published configuration isomorphism and the batch-20
  mapping-class draft, then transports `⟨X|R⟩` along each isomorphism via
  the first isomorphism theorem; the generator is tracked to the half
  twist, the loop of monodromy `(i i+1)` and the supported half twist
  `[H_i]`. Precheck PASS; the n=1 vacuous branch is handled. The batch-20
  consumer step is 2.2/4.1; remarks refreshed this session.
- [B3 `cex-visible-artin-relations-alone-do-not-prove-presentation-completeness`, level 6, escalate]
  Von Dyck applied twice to `P = ⟨x | x^4=1⟩`: the surjection
  `φ: P → G = ⟨g | g^2=1⟩` and `ψ: P → Z/4` with `ψ(x^2)=[2]_4 ≠ [0]_4`,
  so `x^2 ≠ 1_P` while `φ(x^2)=1_G`; the cardinality count `|P|=4, |G|=2`
  shows the presentation does not present `G`. Choice-free arithmetic,
  complete; escalated only as a consequence of the escalated A7 it
  contrasts with. Precheck PASS.

## Checks actually run (all on the current, post-repair contents)

| Check | Command | Actual result |
| --- | --- | --- |
| explicit-path precheck | `node tools/tsx-run.mjs tools/precheck.mts <11 item files>` | PASS on the 10 proof items, `n/a` for the definition; 10 checked, 0 failing |
| rendering | `node tools/rendercheck.mjs <11 items> <2 pages>` | OK — 13 files; no wikilink-in-math, no multiline display, KaTeX and YAML clean |
| content policy | `node tools/content-policy.mjs research/frontier-37-owner-30-batch-22.pages.json` | 11 scoped items, 0 errors, 0 warnings |
| manifest deps | `node tools/manifest-deps.mjs …batch-22.pages.json` | 11 items, 0 normalized, 0 errors |
| strict proof contracts | `node tools/proof-contract.mjs …batch-22.proof-contracts.json --strict` | 0 errors, 0 warnings, 11/11 items (was 4 `citation-quote-mismatch` before the refresh) |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` | exit 0 — 812 items across 60 pages; all 11 batch-22 labels equal the computed levels |
| manifest integrity | `node tools/manifest-integrity.mjs --run frontier-37-owner-30` | 60/60 owed pages present, no scope drift |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 — acyclic and consistent; no finding for this pair |
| coverage | `node tools/coverage-checklist.mjs …batch-22.coverage.json --require-destination` | 1 page, 29 rows, 0 errors, 1 explained `coverage-low-yield` warning (8/29) |
| manifest sync | `node /tmp/sync-batch22.mjs` | dep fields changed 0, level fields changed 0 |
| repo-wide depcheck | `node tools/depcheck.mjs --json` | run-wide 139 errors / 293 warnings elsewhere; **0 touching any batch-22 id** |
| repo-wide fwdcheck | `node tools/fwdcheck.mjs --json` | run-wide 75 errors elsewhere, 0 open forward refs; **0 touching batch 22** |
| repo-wide extcheck | `node tools/extcheck.mjs --json` | 0 errors; 40 `unproved-on-published` consequences elsewhere; **0 mentioning batch 22** |
| Step-3 decisions | `node tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase final` | run-wide invocation currently blocked by another group's malformed item YAML (below); re-run in a virtualized copy (below): pair scope **closed** (refreshed), **6 items closed** (A1–A5, B1), **5 owner-held** (A6, A7, A8, B2, B3) with `changed inputs require a current owner decision` |
| dependency ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30` | **exit 1, blocked**: `items/lem-roots-of-unity-in-a-number-field-are-finite.md: justified_by must be an array` (another group's in-flight file; not edited here) |

Method note for the decision check (recorded honestly): the real command
aborts while parsing `items/thm-hochschild-hyperhomology-is-resolution-independent.md`
— its frontmatter line 30 carries the double-quoted scalar
`locator: "§3.8.6, … $\mathrm{CH}_\bullet…"` with single-backslash LaTeX, an
invalid YAML escape (`\m`) under the renderer's parser — and every run-wide
tool that loads all run items fails there. For verification only, the check
was re-run with `process.cwd()` in a virtualized copy of the run in which
that one file's frontmatter quoted scalars were backslash-escaped (same
parsed values; identical item bodies); no other file differed and the real
file was not modified. Under that virtualization the results above were
obtained; the real command will pass unchanged once that file is repaired.

## Flags, escalations and published concerns

Open escalations (owner-resolved; exact suppliers and consuming steps, from
the strict-checked contracts):

1. **A6 `lem-the-combed-geometric-decomposition-is-unique`** — consumes
   `thm-pure-braid-forgetting-a-strand-short-exact-sequence` and
   `lem-standard-pure-braids-generate-each-free-kernel` at F2 (steps 2.1,
   2.2, 3.1, 4.1) and `def-standard-pure-braid-generators` at F1 (steps
   1.1, 2.1) and F2 (steps 2.1–4.1). All three are batch-21 in-run drafts,
   read this session; statements match the uses. Receipt: escalate.
2. **A7 `thm-the-artin-presentation-is-complete-for-geometric-braids`** —
   the same three batch-21 drafts at F4, step 3.1. Receipt: escalate.
3. **B2 `ex-the-free-kernel-words-for-three-strand-braid-combing`** —
   `def-standard-…` at F2 (steps 1.2, 2.1); `thm-pure-braid-forgetting-…`
   and `lem-standard-…` at F3 (steps 3.1, 4.1); the escalated in-pair A6 at
   F4 (steps 3.1, 4.1). The meridian-orientation clause is the supplier's
   obligation; its wording in B2 was corrected this session. Receipt:
   escalate (now with changed inputs).
4. **A8 `cor-all-four-classical-braid-models-realize-the-artin-presentation`**
   — `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`
   and `def-boundary-fixed-mapping-class-group-of-a-punctured-disk` at F3
   (steps 2.2, 4.1), plus the escalated in-pair A7 at F1 (steps 1.1, 2.1,
   4.1). Receipt: escalate.
5. **B3 `cex-visible-artin-relations-alone-do-not-prove-presentation-completeness`**
   — the escalated in-pair A7 at F6 (steps 3.1, 4.1). Its own von
   Dyck/Z/4 arithmetic is complete and choice-free. Receipt: escalate.

No supplier in this pair's closure is unauthored: all batch-20/21 supplier
drafts exist and were read; the escalations concern their certification (AC
hypothesis, standard-generator convention, meridian orientation,
mapping-class convention), not missing or contradictory statements. Because
the A6/A8/B2 repairs postdate the escalation receipts, those five decisions
are now hash-stale and must be resolved by the owner against the current
text; the pair's scope is current.

Potentially defective published items: **none confirmed** by this dispatch.
Pre-existing recorded debt inside the transitive closure (batch-21 findings,
not re-opened here): `cor-metric-spaces-admit-subordinate-partitions-of-unity`
states AC and DC without declaring the axiom dependencies, and
`def-time-dependent-vector-field-and-evolution-operator` assumes
`AC_ω` without declaring `def-countable-choice`. Both are reached only
through the batch-20/21 pages this pair's escalated items consume; the
canonical ledger entries remain batch 21's.

Other groups' blockers found while running the required tools (reported, not
edited): `items/thm-hochschild-hyperhomology-is-resolution-independent.md`
frontmatter line 30 — invalid YAML escape in a double-quoted `locator`
scalar (blocks run-wide `step3-decisions`); and
`items/lem-roots-of-unity-in-a-number-field-are-finite.md` line 24 —
`justified_by:` with an empty value parses to null, failing
`frontier-dependency-ledger refresh --run frontier-37-owner-30`. Separately,
the stage gate `step3-auditor-items.mjs certify --run frontier-37-owner-30`
currently exits 1 on another group's unfinished pair
(`def-support-of-a-borel-measure: no successful Step 3 auditor/author result
covers batch 24 or pair logarithmic-potential-capacity-and-riesz-decomposition`),
not on batch 22.

## Open obligations carried to Step 4

- Resolve the five owner-held item escalations once the batch-20/21 suppliers
  are certified (the owner must record against the current, repaired text).
  The consumers are fully authored and their proof obligations on the
  suppliers are stated in place (facts, steps, strict-checked contract rows).
- Re-run `frontier-dependency-ledger refresh --run frontier-37-owner-30` once
  `items/lem-roots-of-unity-in-a-number-field-are-finite.md` is repaired; the
  batch-22 input (`…batch-22.cross-batch-dependencies.json`) is reconciled to
  the authored state (14 rows: 13 open, 1 removed) and needs no further edit
  for this dispatch.
- Re-run the run-wide `step3-decisions check` once
  `items/thm-hochschild-hyperhomology-is-resolution-independent.md` is
  repaired; on the batch-22 side the state is already the expected one
  (scope closed; 6 closed items; 5 owner-held escalations).
- No shared plan/prose amendment is required from this pair: the pre-splice
  findings JSON has no row naming it, `validate-plan` raises no finding for
  it, and the only inventory change is the removal of one declared consumer
  use (`cor-the-pure-braid-extension-splits`), recorded in the batch's own
  cross-batch input.
- AC bookkeeping to preserve: A6, A7, A8, B2, B3 state AC and declare
  `def-axiom-of-choice` and
  `thm-choice-implies-dependent-implies-countable-choice` in `deps`; the
  assumption enters only through the batch-20/21 suppliers. A1–A5 and B1 are
  choice-free word / free-cancellation / explicit-example arguments (also
  recorded in each contract's `nonempty-choice` boundary row). No
  incompatible-axiom branch is consumed.
- Fox–Neuwirth caveat to preserve: the mirror's OCR text layer garbles the
  general `r_{i,k}` display; no statement or proof step in this pair uses it.

## Handoff summary

Completed IDs (11/11 authored): `def-zariski-braid-combing-words-alpha-and-x`,
`lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel`,
`lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors`,
`lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter`,
`lem-every-trivial-braid-word-combs-as-w-one-w-two`,
`lem-the-combed-geometric-decomposition-is-unique`,
`ex-combing-a-four-strand-braid-word`,
`thm-the-artin-presentation-is-complete-for-geometric-braids`,
`ex-the-free-kernel-words-for-three-strand-braid-combing`,
`cor-all-four-classical-braid-models-realize-the-artin-presentation`,
`cex-visible-artin-relations-alone-do-not-prove-presentation-completeness`;
pages `artin-presentation-completeness-and-braid-combing` and
`artin-presentation-completeness-and-braid-combing-examples` (drafts).
Current decisions: 6 accept/repaired (A1–A5, B1), 5 owner-held escalations
(A6, A7, A8, B2, B3). Local suppliers added: none. Published concerns: none
confirmed. No unresolved supplier is missing; all are authored drafts pending
certification. The proof-contract, precheck, rendering, content-policy,
dependency-level, plan and coverage gates are green on the current content.

## Root combing rewrite correction (2026-09-30)

After author drain root read the combing proof and its actual conjugation Fact. Step1.3 and its remark incorrectly wrote sx -> wx; the supplier and the subsequent induction require sx -> ws. Corrected these two literal substitutions and the contract derivation direction (the sigma letter moves right across the following x-word). Statement and all dependencies are unchanged. No receipt was refreshed: root has not yet independently completed the full eleven-item/supplier audit, and live batch21 inputs remain unstable.


## Independent mathematical audit of the five braid-combing suppliers (2026-10-01)

The final audit covered the batch-21 free-kernel basis item and these four batch-22 items: prefix insertion, the six combing-factor reductions, lower-rank conjugation of x-letters, and uniqueness of the combed decomposition. I reread their current complete bodies and exact used supplier statements. No remaining mathematical gap was found; all five promised claims remain in place.

The B21 point-push route now computes the local positive relative winding and the inverse-endpoint sign, conjugates using the correct first-under-second order, inductively constructs one coherent noncrossing fan by puncture-avoiding lens homotopies, and proves that the selected meridians are a basis by explicit inner/outer collar retractions and tree collapse. In batch 22, the prefix positions and below/above labels agree; the six cases have correct signs and endpoint bounds; the lower-rank conjugation retains its intervening `σ_{i+1}`; and A6 distinguishes Artin lifts from geometric generators, proves injectivity for its radial straight-strand extension, and derives the kernel basis and uniqueness by the descending left-inverse argument.

A6 clause (iii) is phrased as triviality of the geometric image in `G_{n−1}`, namely `φ_{n−1}(W₂)=1`; it does not claim that `W₂` is already the identity in the abstract Artin group. The `E` map is called an extension rather than a section because forgetting it induces `E_*`, not the identity. The batch-22 coverage now attributes the standalone split extension to the earlier batch-21 corollary, not to A6. Step-number and selected quote mappings are synchronized in the selected manifests/contracts and pair-local cross-batch input. The full route, actual supplier map, current hashes and focused check results are in `research/frontier-37-owner-30-artin-completeness-audit.md`.

No engine decision, receipt, shared dependency-ledger refresh, gate, or commit was made. The direct in-run batch-21 suppliers remain un-certified drafts for root’s review; the report does not treat local checks as proof acceptance.

## Final focused recheck and artifact hashes (2026-10-01)

After refreshing four batch-21 literal citation quotes from the current
free-kernel supplier Statement and explicitly typing the rank-$(n-1)$
geometric map in A6 clause (iii), the focused checks were rerun on stable
contents:

- Five authorized item proofs: precheck **5/5 pass**; rendercheck **5/5
  pass**; scoped `git diff --check` clean.
- Strict proof contracts: batch 21 **16/16, zero errors/warnings**; batch 22
  **11/11, zero errors/warnings**.
- Manifest dependencies: batch 21 **16 items, zero errors**; batch 22
  **11 items, zero errors**. Content policy: both batches **zero
  errors/warnings**.
- Coverage: each batch **30 harvested results, zero errors**, with one
  low-yield warning (batch 21: 10/30; batch 22: 8/30). These are the
  coverage-checklist warnings to confirm with Alpha, not proof or manifest
  failures.
- Every manifest item has a selected proof-contract entry; all five
  authorized items remain in their original manifests. No item ID, title,
  declared dependency, or promised mathematical claim changed.

SHA-256 (full current files):

| Artifact | SHA-256 |
| --- | --- |
| `items/lem-standard-pure-braids-generate-each-free-kernel.md` | `8f59c39f945a15a2872834043afd87275023a2f89bbf376c1b4c1992d0095151` |
| `items/lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors.md` | `b68132da8c43553ad233b398599dd3a8f3c66d95b456a9cb97f548e21c5060d4` |
| `items/lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter.md` | `903c1963ea4c9d69e0b6e894d476ea06b4f13c3df9399cd131fd8d7c78c7ed10` |
| `items/lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel.md` | `6f87c26e076b88ca1ca1a252be94cf27416ca66050d9f1e5daeed4ed2db8dcef` |
| `items/lem-the-combed-geometric-decomposition-is-unique.md` | `96a8b4ba69187e30662e7ea03131286f406574f79aaf3a1c05af9352818ec09e` |
| `research/frontier-37-owner-30-batch-21.pages.json` | `298e9ac9c63b21fc1599a772a6675801c3b7c3c1b9c8aef14b80e69a333e8ab0` |
| `research/frontier-37-owner-30-batch-21.proof-contracts.json` | `5641467854f4bf5f6015089c48894512c6a1cdf05d615884778ef4435fb04a08` |
| `research/frontier-37-owner-30-batch-21.coverage.json` | `89ead5476b5bf93f79d118b3c51fb9b562d581c9faa9294c5401025a616bb066` |
| `research/frontier-37-owner-30-batch-22.pages.json` | `bad2da23b2e71b2d89d9ab3fa146a463561b9de315f00da1035679aa4caf8489` |
| `research/frontier-37-owner-30-batch-22.proof-contracts.json` | `2c8ea4ff7be20343db657b8f811dbb2d32dd8ad73491193bfbedb38de8452673` |
| `research/frontier-37-owner-30-batch-22.coverage.json` | `d4c75c5757a38cc72404317250929e481360a33b5b8c8de6b983b8a371225008` |
| `research/frontier-37-owner-30-batch-22.cross-batch-dependencies.json` | `0d5f00125cde8385648f1aa3596d296fa9c061d2bd3b58af1a865b57a5ce09be` |

The run status still shows only the unrelated pair
`hormander-estimates-and-the-levi-problem` in flight; batch 21 and batch 22
are not listed as active authors. The direct in-run batch-21 suppliers used
by A6 remain draft items for owner certification. No mathematical gap was
found in the five audited claims. Choice cost is unchanged: the B21 free
kernel basis and A6 uniqueness route use AC through the in-run
Fadell–Neuwirth/forgetting-sequence suppliers; the prefix, six-case, and
lower-rank rewriting arguments are choice-free. This report records local
proof and carrier readiness only; root owns scope-hash integration and any
ordinary decision receipts.

A6 clause (iii) now names the rank-$(n-1)$ geometric surjection explicitly
as $\varphi_{n-1}\colon B_{n-1}\to G_{n-1}$. Its claim is that the image
$\varphi_{n-1}(W_2)$ is trivial in $G_{n-1}$; it does not claim that the
Artin word $W_2$ is trivial in $B_{n-1}$. The exact word-level combing
identity in clause (i) is unchanged.

## Current B21/B22 claim and supplier readiness (2026-10-01)

This section records the post-integration audit. It supersedes the historical
open-escalation and stale-receipt status recorded above; it does not alter the
item texts, manifests, contracts, scope, or shared gates.

Root integrated the two approved scopes after reviewing their 27 claim rows:

| Pair | Selected claim inventory | Current owner scope decision |
| --- | --- | --- |
| `pure-braids-fadell-neuwirth-and-asphericity` (batch 21) | 16 item claims | `proceed`, scope hash `352e145f2ca084a3dd43f46c4289a391dd49d47bdbad47fe7447d300e30b41f2` |
| `artin-presentation-completeness-and-braid-combing` (batch 22) | 11 item claims | `proceed`, scope hash `37296038f75db49fd1ff2190f34d59ae785f544ba495662d96fe201cbce0e87a` |

The 12 already-current ordinary closures were reused unchanged: batch 21
`lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles`,
`lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction`,
`thm-pure-braid-forgetting-a-strand-short-exact-sequence`,
`thm-point-pushing-is-the-kernel-of-forgetting-a-puncture`,
`lem-the-planar-forgetful-map-has-a-continuous-section`,
`cor-the-pure-braid-extension-splits`,
`thm-ordered-planar-configuration-spaces-are-aspherical`,
`cor-unordered-planar-configuration-spaces-are-aspherical`,
`def-standard-pure-braid-generators`,
`thm-pure-braid-groups-are-torsion-free`, and
`cex-the-short-exact-sequence-to-s-n-does-not-prove-b-n-torsion-free`; batch
22 `def-zariski-braid-combing-words-alpha-and-x`. Their current decisions are,
respectively, `repaired`, `accept`, `accept`, `repaired`, `repaired`,
`accept`, `accept`, `repaired`, `repaired`, `accept`, `repaired`, and
`accept`. I did not rewrite those receipts.

I independently audited and recorded ordinary confidence-1 decisions for the
remaining 15 rows. The exact current item hashes are included so the audit
snapshot is reproducible.

| Pair | Item | Current decision | Item SHA-256 |
| --- | --- | --- | --- |
| B21 | `lem-standard-pure-braids-generate-each-free-kernel` | repaired | `8f59c39f945a15a2872834043afd87275023a2f89bbf376c1b4c1992d0095151` |
| B21 | `thm-standard-pure-braids-generate-the-pure-braid-group` | accept | `6ee549d9164a79b9399d544cbe41596a8b12e51aece341f2f12c74976fe91949` |
| B21 | `ex-the-pure-two-strand-braid-group-is-infinite-cyclic` | accept | `29d25c5213e642e92fc656a175203e431c795cf683c322948f442bae1f78b4ec` |
| B21 | `ex-the-pure-three-strand-group-as-a-split-free-by-cyclic-extension` | accept | `ee759942b19f18c9d856ccf486cc1cbefed70daee9c6765379e3d7aefbeefad7` |
| B21 | `ex-pure-braid-generators-as-point-pushes` | accept | `1027d8f187a80470fb0aaa9e18f0522a528644d48bd8136c036f46daa843f804` |
| B22 | `lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors` | repaired | `b68132da8c43553ad233b398599dd3a8f3c66d95b456a9cb97f548e21c5060d4` |
| B22 | `lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter` | repaired | `903c1963ea4c9d69e0b6e894d476ea06b4f13c3df9399cd131fd8d7c78c7ed10` |
| B22 | `lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel` | repaired | `6f87c26e076b88ca1ca1a252be94cf27416ca66050d9f1e5daeed4ed2db8dcef` |
| B22 | `lem-every-trivial-braid-word-combs-as-w-one-w-two` | accept | `096e5e9d46f01791c456d321bb7d370ef53201313f7f88df2dc3d159085472f1` |
| B22 | `lem-the-combed-geometric-decomposition-is-unique` | repaired | `96a8b4ba69187e30662e7ea03131286f406574f79aaf3a1c05af9352818ec09e` |
| B22 | `thm-the-artin-presentation-is-complete-for-geometric-braids` | accept | `4068f983e432f7722b2d74a187c21a5e7d9cce93411f18d15b34eeb4398baf6e` |
| B22 | `cor-all-four-classical-braid-models-realize-the-artin-presentation` | accept | `4cb582d475a8272d7572e017aaa094ddafcdd004c1efec0968415db91b3f7026` |
| B22 | `ex-combing-a-four-strand-braid-word` | accept | `b3064fa98485c0a5583c4fd0b1fb60dae7666e946cbe7f9d933d8f7be02c04d3` |
| B22 | `ex-the-free-kernel-words-for-three-strand-braid-combing` | repaired | `ca833b20eacdbf98edb99cd555e40a7d2e8f229d088f5b4f149c7aa5d15a30dc` |
| B22 | `cex-visible-artin-relations-alone-do-not-prove-presentation-completeness` | accept | `6cd9a094db97318bf94b71bef589671ab3ece07787a393424aebd87a9dbe84cd` |

All 27 selected item rows now report current and closed under `itemDecision`:
15 fresh ordinary decisions above and the 12 reused current closures. The old
B21 and B22 evidence was stale because the kernel-basis proof and selected
combing interfaces had changed, or because the five B22 rows had been
explicitly reopened for a post-reopen audit. Those are evidence invalidations,
not unresolved supplier gaps. The reopened A6, A7, A8, B2, and B3 claims all
passed their fresh audits. No item ID, title, or promised result changed in this
final audit pass; the later point-push repair adds four direct dependencies,
listed below.

### Supplier routes and mathematical findings

- **B21 kernel basis and its consumers.** The current exact-sequence theorem
  identifies the fibre inclusion with the kernel of the last-strand map. The
  repaired B21 lemma proves the local relative winding of $\sigma_i^2$,
  carries the inverse-loop and inverse-endpoint signs through the point-push
  map, transports stems by the correctly ordered composition
  $H_{n-1}\circ\cdots\circ H_{i+1}$, and builds a compatible fan by
  puncture-avoiding lens homotopies. Its regular-neighborhood and collar
  retractions show that the selected meridians are a free basis. I also read
  the cited Gonzalez-Meneses full text, section 2.1, for the free-kernel
  sequence; the local sign and stem compatibility are carried by the current
  library proof rather than inferred from a citation.
- **B21 group-generation and small-rank consumers.** The pure-group generation
  induction has the standard generators generating the quotient and the
  last-column generators generating the kernel. The PB2 example gets an
  infinite cyclic group and winding $-1$ from the rank-one fibre basis. The
  PB3 example proves centrality of $(\sigma_1\sigma_2)^3$, computes the
  chosen section action, and supplies a separated-coordinate homotopy showing
  that this normalized far-right section sends $A_{12}$ to itself. Its
  semidirect-product conclusion is section-specific and makes no direct
  product claim.
- **B21 point-push example.** The conclusion is proved through the current
  local two-point winding and the kernel lemma's explicit conjugation
  naturality: if $g=\sigma_{j-1}\cdots\sigma_{i+1}$ and
  $h=H_{j-1}\circ\cdots\circ H_{i+1}$, then $h(q_{i+1})=q_j$, fixes the
  $q_i$ meridian circle, and transports its stem to a meridian in the
  complement of the other punctures. The inverse-endpoint map identifies the
  single-coordinate $j$-motion with that point push; the coordinate
  permutation then gives the stated terminal-fiber form. This route respects
  the first-under-second product and clockwise-positive generator convention.
  The item's collar-slide Step 1.4 is not the route relied on for this
  decision; the audited local-winding/conjugation route supplies the claim
  from its declared dependencies without changing the interface.
- **B22 combing chain.** Prefix insertion uses the bottom-to-top tracked
  position update and inserts the corresponding $\alpha$-connectors. The six
  factor cases have the stated signs and boundary indices. The lower-rank
  conjugation table retains the intervening $\sigma_{i+1}$ in its adjacent
  case. Collection processes the rightmost $\sigma$ first; every
  $\sigma x\mapsto w\sigma$ rewrite shortens the suffix after that letter,
  then induction on the number of $\sigma$ letters terminates. A6 proves the
  exact combing identity, injectivity of its straight-strand embedding, and
  the free basis by a left inverse. Its clause (iii) is precisely the
  geometric statement $\varphi_{n-1}(W_2)=1\in G_{n-1}$, not triviality of
  $W_2$ in the abstract Artin group. These facts make the induction in A7
  valid.
- **Downstream B22 rows.** A7 applies the geometric-image uniqueness result
  and induction to prove injectivity of the Artin surjection. A8 transports
  that isomorphism through the published geometric/configuration isomorphism,
  the published open-to-closed configuration map, and the current accepted
  batch-20 braid/mapping-class isomorphism, tracking the half-twist
  generators and endpoint transpositions. B1's 12 combing factors and final
  $W_1W_2$ identity were checked by direct substitution. In B2,
  $x_1=A_{23}^{-1}A_{13}A_{23}$ and $x_2=A_{23}$ form a free basis; $x_1$ is
  a clockwise meridian about the first puncture with a conjugated stem, so
  the item does not require it to equal the original standard-stem class.
  B3's $C_4\twoheadrightarrow C_2$ example has nontrivial kernel and
  correctly shows that checking relators and generation alone does not prove
  completeness.

The direct source interfaces are available and match their uses: the B21
Fadell--Neuwirth/forgetting and point-pushing suppliers are current repaired
or accepted in-run items; the braid/configuration and local half-twist
foundations used here are published; A8's mapping-class isomorphism is the
current accepted batch-20 draft and is correctly identified as in-run rather
than published. The B22 word-rewriting suppliers are now current in this
pair, and the geometric braid relation/surjection used by the examples are
published. No dependency is missing and no supplier writer remains on either
pair. A current autopilot status read showed only the unrelated
`hormander-estimates-and-the-levi-problem` pair in flight.

### Choice costs and final disposition

AC enters the B21 forgetting sequence/free-kernel and point-pushing
identifications through AC implying DC and the evaluation/Fadell--Neuwirth
fibrations. The PB2/PB3 examples carry that assumption through those
suppliers. A6/A7 and the B2 free-kernel example inherit the same cost; A8
also uses the AC-dependent batch-20 mapping-class isomorphism. B3's finite
cyclic counterexample arithmetic is choice-free, while its comparison with
the Artin theorem carries AC because that supplier does. The prefix,
six-case,
conjugation, collection, and B4 word calculations are choice-free. No
incompatible-axiom branch is consumed.

No unresolved mathematical or supplier gap remains among these 27 claims.
This pass wrote only the 15 authorized ordinary item decision receipts and
this report append. It did not edit item bodies, pages, manifests, contracts,
coverage, owner scopes, engine state, or gates; it did not rerun the already
passing content and contract checks or attempt a shared gate.

### Point-push example proof repair (supersedes the earlier item-specific route note)

The current body of `ex-pure-braid-generators-as-point-pushes` was repaired
after a full reread exposed unsupported collar-slide prose in its former Step
1.4. The replacement proves the statement through the actual local relative-
winding calculation and typed conjugation naturality in steps 1.2 and 2.1 of
`lem-standard-pure-braids-generate-each-free-kernel`. The adjacent square
`sigma_i^2` has relative winding `+1`; the inverse-endpoint map makes it the
clockwise positive point push. For arbitrary `i<j`, the braid word factors as
`g sigma_i^2 g^{-1}`, with `g=sigma_{j-1}...sigma_{i+1}` and mapping class
`h=H_{j-1} o ... o H_{i+1}` (rightmost first). This `h` sends `q_{i+1}` to
`q_j`, fixes `q_i` and `C_i` pointwise by the support-distance estimates,
transports the declared adjacent stem to the stated meridian stem, and the
supplier's typed point-push naturality gives the conjugated push. The item's
separate inverse-braid calculation identifies a one-coordinate motion at
`q_j` with its point push; equality is then compared using the isomorphism
`Theta_n`. The relabeled closed-disc conclusion follows from the commuting
open-to-closed coordinate-permutation square and asserts no fibre-inclusion
injectivity.

The item now (a) keeps `A_in` in `PB_n` and applies `Psi_conf` only to the
geometric class `[W_in]`; (b) states the exact supplier Statement interface
and distinguishes the geometric class `[A_in]=[W_in]` from its configuration
image; (c) distinguishes the open terminal-coordinate map from its closed
composite; and (d) derives the raw counterclockwise slice and final clockwise
sign explicitly by equating and inverting the two supplier formulas. The
stem family is explicitly the compatible family constructed in the supplier
proof, so this item does not claim the result for arbitrary winding stem
choices. All three Example claims, the positive-generator convention, IDs,
titles, and declared codomains are retained. Direct-link comparison found
four omitted supplier declarations, now added using the exact current item
IDs `lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent`,
`thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`,
`def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes`, and
`prop-stacking-of-geometric-braids-is-well-defined`. The geometric-braid group
theorem cited in F5 was already declared. The four additions resolve to item files and their
transitive dependency routes do not return to this example. The former item receipt was stale with the changed proof body. At the time this
proof-repair note was first appended, the selected carrier was still pending
root integration. The later carrier synchronization is recorded below; no
receipt, scope, page, or gate was edited.

### Selected B21 point-push carrier synchronization

The selected manifest row for `ex-pure-braid-generators-as-point-pushes` now
summarizes all three current claims: the one-coordinate clockwise motion for
every `i<j` along the stem transported by `H_{j-1}∘…∘H_{i+1}`, the terminal-
coordinate form after the coordinate permutation, and the `A_in` terminal
mapping-class sign. This replaces the stale basepoint-transport wording. Its
title and ID are unchanged.

The manifest dependency array now exactly matches the item's 23 declared
frontmatter dependencies:

- `def-standard-pure-braid-generators`
- `lem-standard-pure-braids-generate-each-free-kernel`
- `def-point-pushing-homomorphism-for-a-puncture`
- `thm-point-pushing-is-the-kernel-of-forgetting-a-puncture`
- `def-axiom-of-choice`
- `thm-choice-implies-dependent-implies-countable-choice`
- `cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations`
- `def-elementary-geometric-half-twist`
- `def-geometric-braid-with-setwise-endpoints`
- `def-ordered-configuration-space`
- `def-based-loops-and-fundamental-group`
- `thm-fundamental-group-laws`
- `prop-the-symmetric-group-acts-freely-on-ordered-configurations`
- `lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent`
- `thm-geometric-braids-form-a-group`
- `prop-stacking-of-geometric-braids-is-well-defined`
- `def-pure-braid-group-from-ordered-configurations`
- `def-boundary-fixed-mapping-class-group-of-a-punctured-disk`
- `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`
- `def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes`
- `ex-point-pushing-one-puncture-around-another`
- `lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles`
- `thm-ordered-configurations-cover-unordered-configurations-regularly`

The four omitted direct links named in the proof-repair section are now in the
manifest array. The whole-run dependency DAG was computed against the item's
current dependency list: this row remains at level 10 (the maximum graph level
is 28), with no missing target dependency or cycle. Its existing level was
therefore retained; no global labels or other manifest rows changed.

The selected proof-contract entry now has 19 exact fact/source pairs and maps
all seven parsed proof blocks (`1.1`, `2.1`, `2.2`, `2.3`, `3.1`, `4.1`, `5.1`).
Fact-use lists and derivation inputs follow the parser's full numbered-block
boundaries, including the within-block references to earlier conclusions.
The eight standard boundary cases were synchronized to the current step IDs;
no claim or supplier citation was added beyond the item's current facts.

The selected strict proof-contract check passed: 1/1 selected item, zero errors,
zero warnings. The item itself was not changed during this carrier pass; its
SHA-256 remains `60d8eb676451fce095c39905ebec6ed78b438d19e6603b2a6f69fbb08f7d6f42`.
The manifest SHA-256 is
`a073123b266612a81d076df3c79851d6ba8d621f52eea68ba02998646aa1a3a5`, and the
proof-contract file SHA-256 is
`44a4add1b09052d94ed2854cfe0d10bdb16e8ad6fded76cebffe805c2cad4eca`.
No item decision receipt, page, coverage record, owner scope, engine state,
shared ledger, or gate was edited.

The selected contract quotes only sections supported by the proof-contract
schema. In particular, `F11` quotes the kernel-basis lemma's Statement for the
clockwise terminal-fibre formula; the target proof's adjacent local winding and
typed conjugation naturality are taken from that lemma's Proof section, which
the checker does not permit as a `source_section`. Likewise, the exact
`Theta_n`/fibre compatibility used by `F9` is established in the point-pushing
theorem's proof (step 1.3), while the contract quote records its Statement's
Birman sequence interface. These proof-level routes were read and audited in
the item review; the contract does not mislabel either as a Statement quote.
