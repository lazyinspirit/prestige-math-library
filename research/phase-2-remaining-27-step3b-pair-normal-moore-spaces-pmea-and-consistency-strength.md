# Step 3b authoring report — Normal Moore Spaces, PMEA, and Consistency Strength

Run: `phase-2-remaining-27`
Role: `alpha-high`
Pair: `normal-moore-spaces-pmea-and-consistency-strength` /
`normal-moore-spaces-pmea-and-consistency-strength-examples`
Batch: 14 (shared with `choice-strength-in-baire-urysohn-stone-and-tychonoff`,
whose rows, manifest entries, contracts, coverage and decisions are untouched by
this lane).

**Status of this lane (2026-09-17, third reopen). COMPLETE.** The seven
owner-reopened items listed in the dispatch are authored in full with proof
contracts, plus the one local supplier the construction needs. All batch-14
author gates pass. The operator's third update of
`research/phase-2-remaining-27-normal-moore-recovery-direction.md` was followed
as binding: the (12\*) reading, the conflict-witness derivation of (17)+(18)
and the printed closing chain of §7 were verified by independent derivation,
the trace-domain obligation was discharged (both the §6 and the §7 parts), and
no settled reading was re-litigated.

## 1. Files written by this lane

- `items/thm-fleissner-normal-moore-space-construction.md` — **new local
  supplier**: the source's §§5–7 construction from the level data.
- `items/thm-ch-normal-nonmetrizable-moore-space.md`
- `items/thm-fleissner-hyp-normal-nonmetrizable-moore-space.md`
- `items/cor-v-equals-l-refutes-normal-moore-space-conjecture.md`
- `items/thm-normal-moore-implies-inner-model-measurable.md`
- `items/thm-formal-nmsc-consistency-lower-bound.md`
- `items/thm-normal-moore-consistency-strength-sandwich.md`
- `items/fs-zfc-proves-normal-moore-space-conjecture.md` (B page)
- `research/phase-2-remaining-27-batch-14.pages.json` (page-709 rows updated:
  the seven rows' `deps`/`proof_plan` and the new supplier's row; statements
  kept; the sibling pair preserved),
  `research/phase-2-remaining-27-batch-14.coverage.json`,
  `research/phase-2-remaining-27-batch-14.proof-contracts.json` (8 new
  contracts, scope 80),
  `research/phase-2-remaining-27-batch-14.notes.md` (appended checkpoint),
  the A page item list and closing paragraph, and the B page list and prose.
- The seven item decisions recorded with `--decision accept --confidence 1`
  and examined dependency IDs; the pair's review scope decision refreshed as
  `sufficient` (the previous receipt's `sha256`
  `b143dd4550800449ba102c0569dd3c5bc053aeb9fe7474e33bcb7a65b12ebeee` and its
  reason are superseded by the additions; no owner receipt was touched).

## 2. The mathematics actually authored

**The construction (new supplier, 35 canonical proof steps).** Fix an
enumeration `{Z_α}` of `𝒵 = {Z ⊆ Σ : card Z ≤ κ, Z ⊆ Σ_k for some k}` with
`Z_0 = ∅`; set `F_σ := 𝒵(σ*) ∩ {level < |σ|}` and, for `σ ≠ ∅`, `m ≥ 1`,
`R(σ,m) := {Z ∈ F_σ : level(Z) < m}`, `A(σ,m)` its padding to a list of length
`κ_m` (with `A(σ,0) := ∅` and the harmless re-indexing `κ_0 := 0`). Then (5)
holds because every member of `F_σ` has finite level, and (6) holds in the
printed strict form because `F_σ ⊆ F_{σ'}` and the level bound loosens; the
non-strict instance `R(σ,m) ⊆ R(σ,m+1)` needed for (15) holds by construction.
The triples `Q_k` are (7)–(9), and `C(σ)` uses (10), (11) and (12) with the
bound `ρ(m)` for a level-`m` set, restricted to traces in
`dom(g) = 𝒵(ρ*)`. The space `X = F ∪ Q` is `T_1` and regular, the basis axiom
follows from the transfer `C(σ'') ⊆ C(σ)` for `σ ⊆ σ''`, and
`G_n = {B(σ) : σ ∈ Σ_n} ∪ {{q} : q ∈ Q_k, k ≤ n}` is a development (at `F`
by the transfer, at `Q_k` because no `B(σ)` with `|σ| = n > k` contains the
point); the family `⋃_n G_n` is a uniform base in the source's sense, so the
space is a Moore space. Normality runs through the club `C` of (14), the strict
choice of `j(σ)` satisfying (15)–(16), Case 1 (`1 = g(Z ∩ Σ^{ρ(n)}) = 0`) and
Case 2 (the chain `ν(n) < σ(n+1) < ν(n+1) < σ(n+2) ≤ γ(ν(n))` puts both
`σ(n+1)` and `ν(n+1)` in a C-gap, so `γ(σ(n+1)) = γ(ν(n+1))`, and the strict
`j`'s give the disagreement with (11)). Non-metrizability runs through
Lemma 3(a) (the acceptability recursion: a prefix `ρ` is acceptable when every
nonempty piece of `T` above it has a member with a non-stationary branching set
at an intermediate level; the successor chooses `v ∉ B_1 ∪ B_2`, where the
countable-cover argument for `B_1` and the `n = i+1` instance for `B_2` each
contradict acceptability of `ρ`), the Fodor instance of Lemma 3(b), the level
recursion of Lemma 3(c), the Erős–Rado/Ramsey colouring of the least conflict
witness (colour set `κ_n × κ_n × {m < n} × 2` of size `κ_n`, so Ramsey in the
`κ = ω` case and `(2^{κ_n})⁺ → (κ_n⁺)²_{κ_n}` otherwise), and the printed
four-term chain. The contradiction closes under both alternatives of (18).

**The CH instance.** `κ = ω`, `κ_n = n`, `E =` nonzero limits below `ω₁`;
clauses (1a), (1b), (2), (3a) hold literally (`2^n` is a finite ordinal, so
`2^n < ω`), the κ = ω ladder separation is proved from countability, and the
construction applies.

**The consistency chain.** `V = L` ⟹ AC+GCH ⟹ CH ⟹ ¬NMSC; contraposition
gives NMSC ⟹ inner model with a measurable cardinal; the inner-model
relativization plus the verified proof-reduction compiler give the formal
`Con(ZFC+NMSC) → Con(ZFC+measurable)`; with the published strongly compact
upper bound this is the sandwich; and the false statement
"ZFC proves NMSC" is refuted relative to `Con(ZFC)`.

## 3. Documented readings and local repairs (recorded in the items)

1. **(12) bound.** Used as `g(Z ∩ Σ^{ρ(m)})` for a level-`m` set, matching the
   printed Case 1 display (`1 = g(Z ∩ Σ^{ρ(n)}) = 0` for a level-`n` set,
   p. 370); the printed notation sentence after (12) is off by one restriction
   step. Local repair, not a source attribution.
2. **(17) trace form.** Used as
   `Z(ρ,δ) ∩ Σ^{ρ(m)} = Z(τ,η) ∩ Σ^{ρ(m)}`, which is what the printed
   four-term chain displays; the printed display's left side is its bounded
   special case.
3. **Trace-domain.** (12) is imposed only at traces in `𝒵(ρ*)`; the §6
   instance is *proved* from the club `C` (with the Case-1 hypothesis giving
   `index(Z ∩ Σ^{σ(n)}) < γ(σ(n)) ≤ γ(ν(n)) < σ(n+2) ≤ ρ*`), and the §7
   instances are the applicable ones by definition, so nothing outside
   `𝒵(ρ*)` is evaluated. This is the operator's one obligation, discharged.
4. **`j(σ)` strictness.** The printed (16) (`j(σ) ≥ m_{γ(σ(n+1))}(σ(0))`) is
   satisfied by choosing `j(σ)` strictly larger; without strictness the
   printed Case 2 does not close. Local repair.
5. **Entry level.** `j(σ)` is chosen one step above the entry level of
   `Z ∩ Σ^{σ(n)}` in the A-lists so that the application at index `ρ'` of level
   `j(σ)` is legitimate (via (6) with `j(σ)-1 < j(σ)`).
6. **(13) reading.** `G_n = {B(σ) : σ ∈ Σ_n} ∪ {{q} : q ∈ Q_k, k ≤ n}`; the
   ABBYY text layer renders `≤` as `<`, and with `k < n` the family fails to
   cover `Q_k` for `n ≤ k`. The development proof is given in full.
7. **CH instance vs (3b).** For `E =` nonzero limits below `ω₁`, the all-`β`
   reading of (3b) fails at `β = ω²`: `{ω·n : 1 ≤ n}` is a club in `ω²`
   contained in `E ∩ ω²`. The CH item therefore proves the κ = ω ladder
   separation directly (as the source's own parenthetical suggests) and uses no
   instance of (3b); the convention is stated in the item. This is a documented
   deviation from the printed claim that (3) is automatic in the CH case, with
   its proof.

## 4. Checks actually run (batch 14, exact results)

- `node tools/tsx-run.mjs tools/author-check.mts phase-2-remaining-27 14`:
  **ok: true** — `precheck` ok, `rendercheck` ok, `content-policy-items` ok,
  `proof-contract` ok. Result:
  `research/phase-2-remaining-27-author-check-14.json`
  (fingerprint `54d6a537984eba4d` at the time of the final run).
- Explicit-path `precheck` on the eight authored items: 8 checked, 0 failing.
- Explicit-path `rendercheck` on the eight items and the two page files: OK,
  every math span parses under KaTeX and every frontmatter block parses.
- `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-14.proof-contracts.json --strict`:
  0 errors, 0 warnings, 80/80 items checked.
- `node tools/depcheck.mjs`: no cycles, all references resolve, no draft items
  on published pages; the pair reports 31 A items and 3 B items. No warning
  concerns this pair.
- `node tools/validate-plan.mjs research/plan-spec.json`: exits 0.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`:
  refreshed and deduplicated (the pair's existing verified page row for
  `shelahs-baire-property-model-and-inner-model-lower-bounds` is preserved;
  the authored items add no new cross-batch edge: all their suppliers are
  published items or items of this pair).
- Item decisions: `tools/step3-decisions.mjs record-item` with
  `--decision accept --confidence 1`, the examined dependency IDs of §5, and
  concrete evidence reasons for the seven reopened items. The new supplier
  item is an addition of this dispatch and is left to the engine's
  post-author inventory certification, as the dispatch instructs.
- Pair review scope decision refreshed as `sufficient` for the current scope
  (previous `sha256` `b143dd…12ebeee`, `at` 2026-09-16T17:10:13Z).

## 5. Decisions recorded (accept, confidence 1, examined dependencies)

- `thm-ch-normal-nonmetrizable-moore-space`: `def-fleissner-hyp-covering-interface`,
  `def-moore-spaces-and-developments`,
  `def-normalized-families-and-collectionwise-normality`,
  `lem-metrizable-spaces-are-collectionwise-normal`, `rem-continuum-hypothesis`,
  `thm-fleissner-normal-moore-space-construction`, `def-natural-numbers`,
  `def-cardinal`, `def-club-subsets-of-ordinals`,
  `prop-basic-stationary-set-calculus`, `def-axiom-of-choice`, `def-function`.
- `thm-fleissner-hyp-normal-nonmetrizable-moore-space`:
  `def-fleissner-hyp-covering-interface`, `lem-ladder-separation-from-hyp`,
  `thm-fleissner-normal-moore-space-construction`,
  `def-moore-spaces-and-developments`,
  `def-normalized-families-and-collectionwise-normality`,
  `lem-metrizable-spaces-are-collectionwise-normal`, `def-cardinal`,
  `def-axiom-of-choice`.
- `cor-v-equals-l-refutes-normal-moore-space-conjecture`:
  `thm-generalized-continuum-hypothesis-in-l`,
  `thm-ch-normal-nonmetrizable-moore-space`,
  `def-fleissner-hyp-covering-interface`, `def-moore-spaces-and-developments`,
  `thm-cantor-powerset`.
- `thm-normal-moore-implies-inner-model-measurable`:
  `thm-no-inner-model-measurable-implies-fleissner-hyp`,
  `thm-fleissner-hyp-normal-nonmetrizable-moore-space`,
  `def-fleissner-hyp-covering-interface`, `def-moore-spaces-and-developments`,
  `thm-constructible-inner-model-semantic-and-formal-schema`.
- `thm-formal-nmsc-consistency-lower-bound`:
  `thm-normal-moore-implies-inner-model-measurable`,
  `lem-interpretation-translates-finite-derivations`,
  `thm-formal-relative-consistency-from-verified-proof-reduction`,
  `thm-finite-fragment-relative-consistency-transfer`,
  `def-arithmetic-provability-and-consistency`, `def-axiom-of-choice`.
- `thm-normal-moore-consistency-strength-sandwich`:
  `thm-strongly-compact-relative-consistency-normal-moore`,
  `thm-normal-moore-implies-inner-model-measurable`,
  `thm-formal-nmsc-consistency-lower-bound`,
  `def-moore-spaces-and-developments`.
- `fs-zfc-proves-normal-moore-space-conjecture`:
  `thm-ch-normal-nonmetrizable-moore-space`,
  `thm-formal-consistency-of-zfc-plus-gch-from-zf`,
  `thm-formal-relative-consistency-from-verified-proof-reduction`,
  `def-moore-spaces-and-developments`,
  `def-arithmetic-provability-and-consistency`.

## 6. Local suppliers added

- `thm-fleissner-normal-moore-space-construction` (kind theorem, page 709):
  the Sections 5–7 construction from the level data. Registered in the batch-14
  manifest (page 709 now lists 31 items), in the coverage canonical rows and
  source contents, in the proof contracts (scope 80) and on the A page.

## 7. Published concerns and open obligations

- **Published concern (suspicion, not a confirmed defect; no published content
  edited):** `rem-normal-moore-space-conjecture` (published, home
  `library/not-proved-here/deferred-set-theory-beyond-choice.md`) states that
  none of (a) the CH counterexample, (b) the PMEA positive result, (c) the
  inner-model lower bound is proved in this library. Clause (b) is already a
  proved local theorem (`thm-pmea-implies-normal-moore-space-conjecture`), and
  clauses (a) and (c) become local theorems at publication of this batch.
  Required suppliers: the pair's published PMEA items and the seven items above;
  repair strategy: update the remark's status sentences for the serial
  reconciler. Recorded here for `research/published-consumer-supplier-ledger.md`;
  this lane did not edit the ledger.
- **Step-4 plan splice:** page 709's plan row is unchanged from scaffolding
  while the batch-14 manifest now registers 31 items (26 planned + the four
  2026-09-16 suppliers + this lane's construction supplier). This pre-splice
  mismatch is reported, not hidden.
- **No open item obligations remain** for the seven dispatched items or the new
  supplier: all eight have complete statements, arguments and contracts, and
  the batch-14 author checks pass.

## Appendix A — the 2026-09-16 lane's record of the 26 completed items (preserved)

This appendix preserves the item record of the 2026-09-16 report at this path.
The items themselves, their manifest rows, contracts and decisions are
unchanged. Source locators are the ones that lane actually used.

1. `def-moore-spaces-and-developments` — development, stars, Moore space,
   decreasing normalization, first countability. Burke, Definitions 1.1–1.2.
2. `def-normalized-families-and-collectionwise-normality` — normalized,
   separated, collectionwise normal. Bagaria–da Silva 2.2–2.3; Fremlin 8D–8F.
3. `lem-metrizable-spaces-are-collectionwise-normal` — ZF; distance-neighbourhood
   construction with empty-member and empty-complement cases.
4. `thm-moore-spaces-are-subparacompact` — ZFC; Burke Theorem 2.4 with the
   closedness and discreteness arguments; AC spent on the well-order of the cover.
5. `lem-collectionwise-normal-moore-spaces-are-screenable` — Bing Theorem 9 and
   the first half of Theorem 10.
6. `thm-normal-screenable-moore-spaces-are-metrizable` — screening a development
   gives a σ-cellular base; the local level-metric lemma metrizes it.
7. `thm-collectionwise-normal-moore-spaces-are-metrizable` — cwn implies normal,
   then items 5 and 6.
8. `def-q-sets-and-heath-moore-space-interface` — Q-sets and the tangent-disk
   space with basic neighbourhoods. Burke Example 4.1; Bing Example E.
9. `lem-solovay-almost-disjoint-extension-under-ma` (local supplier) — ccc poset,
   σ-centered form, dense sets, generic set.
10. `lem-ma-produces-an-uncountable-q-set` — MA + ¬CH; dyadic base with the
    finite-overlap property, Solovay's lemma, tail-union identity.
11. `thm-bing-q-set-moore-space-is-normal-and-nonmetrizable` — separability,
    closed discrete axis, countable-base injection, normality construction.
12. `thm-ma-not-ch-normal-nonmetrizable-moore-space` — composition of 10 and 11.
13. `def-product-measure-extension-axioms-pmea-and-pmea-sigma` — fair-coin
    product measure, full extensions, PMEA and PMEA-σ. Fremlin 8A–8C; Bagaria–da
    Silva 2.1, 2.6.
14. `lem-pmea-three-quarter-separation-estimate` — Fremlin Lemma 8E.
15. `thm-pmea-normal-low-character-spaces-are-collectionwise-normal` — Fremlin
    Theorem 8F.
16. `thm-pmea-implies-normal-moore-space-conjecture` — first countability plus
    item 7.
17. `thm-strongly-compact-relative-consistency-normal-moore` — published
    random-algebra interface plus the formal proof-reduction compiler.
18. `def-fleissner-hyp-covering-interface` — HYP clauses (1a)–(3b) and the locked
    ladder convention (its CH-instance remark is the one gap G1's CH instance
    touches).
19. `lem-ladder-separation-from-hyp` (local supplier) — induction on β with the
    successor adjustment and the club-gap argument; the strengthened level
    property (used in this report's §2.2 and needed by the source's Case 2).
20. `def-dodd-jensen-covering-and-square-package` (local supplier) — covering,
    GCH, square, weak diamond, nonreflecting set, with exact citations.
21. `thm-dodd-jensen-covering-supplies-fleissner-hyp-data` — clauses (2), (1a),
    (1b), (3a) and square-forces-nonreflection for (3b).
22. `thm-no-inner-model-measurable-implies-fleissner-hyp` — repackaging item 21.
23. `rem-omega-one-strongly-compact-normal-moore-refinement` — orientation; the
    Solovay-measure input and PMEA-σ modification are stated as omitted in the
    source.
24. `ex-development-stars-form-a-countable-local-base` (B) — metric ball covers
    and the two star inclusions.
25. `ex-pmea-three-quarter-event-calculation` (B) — the 3/4 overlap and the
    triple-intersection computation.

The four local suppliers added by that lane
(`lem-sigma-cellular-base-yields-a-compatible-metric`,
`lem-solovay-almost-disjoint-extension-under-ma`,
`def-dodd-jensen-covering-and-square-package`,
`lem-ladder-separation-from-hyp`) are registered in the batch-14 manifest,
coverage and proof contracts and remain unchanged.

## Operator addendum — repair and recertification (2026-09-17, after the lane closed)

Reading the finished item, the operator found one load-bearing defect and one
mechanical one in the new supplier, and repaired both; nothing else in the
pair was touched.

1. **Step 1.2 of `thm-fleissner-normal-moore-space-construction`.** The
   authored text built `A(σ,m)` by "repeating the least-indexed element of
   `R(σ,m)`", so its entry set would be a singleton and could support neither
   the source's (5) nor the uses of (5) in steps 3.1, 7.1 and 8.2 (where
   `Z ∩ Σ^{σ(n)} ∈ A(σ,j(σ))` is needed). The operator rewrote the step with an
   explicit construction: `S(σ,m)` is the union, over all `σ'' ⊆ σ`, of the set
   of the first `κ_m` elements of `F_{σ''}` in the fixed enumeration, and
   `A(σ,m)` lists the members of `S(σ,m)` with repetitions to length `κ_m`.
   The step now proves `card S(σ,m) ≤ 2^{|σ|}·κ_m = κ_m`, `⋃_m S(σ,m) = F_σ`
   (every member of `F_σ` enters once `κ_m` passes its position, and positions
   are below `κ` because `|F_σ| ≤ |σ*| ≤ κ`), and monotonicity in `σ` and `m` —
   i.e. the source's (4)–(6) with `S(σ,m)` as the entry set.
2. **Checker canonical form.** The operator's first draft of the repair cited
   step 1.1 by number, which the normative precheck's layer rule moves to layer
   2 and renumbers; the step now references the enumeration as "fixed above"
   with its original `[given, F1, F2]` citation, so the item is canonical:
   `tools/precheck.mts` reports `PASS` and `tools/proof-contract.mjs --strict`
   reports 0 errors over 80 items.
3. **Recertification.** The construction item had no item decision (the lane
   recorded seven, not eight); the operator recorded `accept` with confidence 1
   and the item's 25 declared dependencies. The repair changed the supplier's
   hash and so invalidated the seven dependents' receipts; the operator
   re-recorded `accept` for all seven with their existing examined-dependency
   lists. `step3-decisions.mjs check --phase final` now reports all eight
   closed, and `author-check.mts phase-2-remaining-27 14` is `ok: true`
   (precheck, rendercheck, content-policy-items and strict proof-contract).
4. **Open handoffs, unchanged by this addendum.** Step 4 must splice page 709
   (the manifest registers 31 items against the 26-row plan, including the new
   supplier and its `requires` edge to `set-theoretic-trees-delta-systems-and-diamond`
   for `thm-general-cardinal-erdos-rado`); the published-consumer suspicion
   about `rem-normal-moore-space-conjecture` clause (b) still awaits the serial
   reconciler in `research/published-consumer-supplier-ledger.md`; and the
   stage's remaining open item decisions elsewhere in the run are the ordinary
   owner-held recertification backlog.
