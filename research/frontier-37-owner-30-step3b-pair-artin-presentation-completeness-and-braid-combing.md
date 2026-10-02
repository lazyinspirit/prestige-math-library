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
