# Frontier 17 — step 6c, cross-batch and cross-level citation audit

**Dispatch:** `6c-lead` · **Role:** lead Alpha · **Covers:** all nine batches, 26 pages, 440 items
**Frozen text:** no. Step 7 has not run; nothing in this run carries a judge verdict, so every
repair below cost an edit and voided nothing.

The three group Alphas saw at most three batches each. This stage is the only read of the run
as a whole, and the findings below are the ones that are invisible from inside a single batch:
two of them are about a *published* item no group had in scope, and one is about a whole group's
receipt rather than about any one item.

---

## 1. Scope actually read

| edge class | count | how it was covered |
|---|---|---|
| cross-batch dependency edges | **4** | all four read in full — source proof step and target Statement on disk |
| cross-level (published-backward) citations | **775** over 372 distinct published targets | mechanically classified, then read by exception (below) |
| same-batch citations | 531 | group Alphas' scope; **not** re-read here |
| declared forward references | **0** | verified: every `forward_refs` in the run is `[]` |
| `external_refs` mentions | **0** | verified: the one item with the key declares `[]` |
| `proved_here: false` / `external_dependency` | **0** | the run takes no documented external fallback |
| choice-principle invocations | 18 items | every one declares its principle in its own title/Statement |

`audit-manifest` enumerates **1948 relationships over 440 items in 9 batches, 0 defects**:
1234 published-backward, 710 same-batch, 4 cross-batch.

### The cross-batch edge list is 4, and that is a finding in its own right

All four lie inside group a's own cohort (batches 2, 4, 5). Batches 1, 3, 6, 7, 8 and 9 have
**no** cross-batch edge at all. I checked that this is real separation rather than duplication
or prose-instead-of-citation, by a statement-level similarity scan of every in-run item against
the whole 6514-file corpus (§4). The categories genuinely do not meet: number theory/group
theory, abstract algebra, measure theory, topology, complex analysis and category theory each
build on their own published prerequisites. The one place two batches *should* have met —
batch 7's fundamental-group proof of the FTA and the published complex-analysis proofs — is
handled correctly, and is discussed in §4.

---

## 2. The four cross-batch edges, read in full

| # | source (batch) | target (batch) | verdict |
|---|---|---|---|
| 1 | `ex-volume-of-the-sine-solid-of-revolution` (2) | `thm-volume-of-a-solid-of-revolution-by-discs` (5) | clean |
| 2 | `ex-surface-area-of-the-sine-solid-of-revolution` (2) | `cor-surface-area-of-revolution-formula` (4) | clean |
| 3 | `ex-surface-area-of-the-sine-solid-of-revolution` (2) | `thm-scalar-surface-integrals-on-a-surface-of-revolution` (4) | clean |
| 4 | `fs-finite-volume-implies-finite-lateral-surface-area` (4) | `thm-volume-of-a-solid-of-revolution-by-discs` (5) | **two defects, both repaired** |

**Edges 1–3.** Edge 1's `[F1]` reproduces the target Statement's hypotheses exactly (`a ≤ b`,
`f : [a,b] → [0,∞)` continuous) and step 1.1 discharges them for `sin` on `[0,π]` from `[L1]`,
`[L2]`, `[L3]`. The arithmetic closes: `∫₀^π sin²= π/2` via `G(x)=½sin 2x`, giving `V=π²/2`.

Edges 2–3 are the one place a hypothesis could have been widened and was not. The sine profile
**vanishes at both endpoints**, which is exactly where a regular-surface parametrisation
degenerates. `[F2]` quotes the target's allowance verbatim — `a<b`, `r` is `C¹` on a
neighbourhood, positive on `(a,b)`, "allowed to vanish only at the endpoints" — and `r=sin` on
`[0,π]` meets it. I verified the area independently: `A = 2π∫₀^π sin x √(1+cos²x) dx`, and with
`G(x) = −½(arsinh(cos x) + cos x √(1+cos²x))` one gets `G′ = sin x √(1+cos²x)` and
`G(π)−G(0) = √2 + arsinh 1`, so `A = 2π(√2 + log(1+√2))`. Correct as stated.

**Edge 4 — repaired.** Two citation-fidelity defects, neither a mathematical error:

- `[L1]` restated the batch-5 target as "The solid of revolution over a compact interval is
  Jordan measurable and has volume `π∫ₐᵇ f(x)²dx`" — dropping **both** hypotheses the target
  states. A hypothesis-free restatement is strictly stronger than the theorem cited. The batch-4
  contract quotes the target Statement *in full*, so `citation-fidelity` saw nothing: it checks
  the contract quote against the cited item and never compares that quote with the reader-facing
  `[L#]` line. Ledger row `f17-6c-1`.
- A single `[L3]` cited three results as "The surface-of-revolution formula and derivative
  algebra **give** the compact-truncation lateral areas, while integral monotonicity **preserves
  lower bounds**" — a description of what three results are *for*, which `CLAUDE.md` bans in
  terms. Ledger row `f17-6c-2`.

Repaired: `[L1]` now carries the target's exact hypotheses; the old `[L3]` is split into `[L3]`
(area formula, four hypotheses), `[L4]` (derivative algebra) and `[L5]` (integral monotonicity),
each stating its own proposition. Steps 1.1 and 1.2 now discharge those hypotheses explicitly for
`r(x)=1/x` on `[1,T]`, `T>1`. Step 2.1 previously asserted the `T=1` truncation as a checked
boundary case; `[L1]` needs `a ≤ b` and `[L3]` needs `a < b`, so at `T=1` the *area* theorem does
not apply at all. It now excludes `T=1` and says why — the refutation never needed it. The batch-4
contract was updated in the same act: three derivation claims, the `L4`/`L5` relabelling, the two
`uses` lists, and four boundary-row evidence strings.

The refutation itself is unchanged and correct: `V(T)=π∫₁ᵀx⁻²dx → π` by the p-test at `p=2`, and
`A(T) ≥ 2π∫₁ᵀdx/x → ∞` since `√(1+x⁻⁴) ≥ 1`.

---

## 3. The 775 cross-level citations

Read by exception, because 775 full reads at equal depth would have been shallower than four
targeted screens. Each screen is mechanical and its residue was read by hand.

1. **Every quote resolves inside the cited item's own Statement/Definition.** 931 Statement,
   350 Definition, 18 Example, 7 Statement-refuted; **zero** citations quote a target's *Proof*
   or *Facts* block. That closes the whole class "cites a fact the target itself imported".
2. **496 of 775 quote the target's entire section**; 279 are proper excerpts, 208 dropping more
   than 40% of it. Restricting to theorem-type targets whose *hypothesis preamble* lost
   vocabulary left 129 candidates, all read.
3. **Reader-facing `[F#]`/`[L#]` lines** compared against their targets' hypothesis preambles
   across the whole run: 386 flagged, 260 after tightening, all read. The overwhelming majority
   are the permitted "smallest faithful shortening" — e.g. `thm-chain-rule` cited as
   `(f∘g)′(c) = f′(g(c))g′(c)` inside an item whose Given already fixes differentiability.
4. **A prose screen for "description instead of proposition"** over every Facts line in the run:
   10 candidates, all read. One was a genuine defect (`f17-6c-2`, above); the rest state their
   propositions using an ordinary verb.

Four candidates looked like real hypothesis drops and were each resolved by opening the target:

- `prop-frattini-subgroup-monotonicity-for-subgroups-of-finite-p-groups` `[L2]` claims
  `H′ ≤ P′` for `H ≤ P` from a lemma whose headline is `f(G⁽ʳ⁾) ≤ f(G)⁽ʳ⁾` — which for an
  inclusion is a tautology. **Not a defect:** the target's Statement ends "In particular,
  `K⁽ʳ⁾ ≤ G⁽ʳ⁾` for every subgroup `K ≤ G`", which is exactly the clause used.
- `thm-galois-group-embeds-in-the-symmetric-group-on-the-roots` `[L1]` drops "splitting field"
  from the target's hypothesis. **Not a defect:** the citing item's own Statement binds `L` to be
  the splitting field of `f`.
- `thm-relative-automorphism-group-and-separable-degree-bound` `[A1]` cites `def-separable-degree`
  without its finiteness hypothesis. **Not a defect:** the Given restricts the inequalities to a
  finite extension and step 1.2 opens with "For finite `K/F`".
- `thm-the-contravariant-power-set-functor-is-monadic` `[L1]` drops "locally small" from the
  hom-set-bijection clause. **Not a defect** and a 30-second gap: the categories are `Set` and
  `Set`ᵒᵖ.

**Provenance eligibility, mechanically over all 1948 edges:** 1242 targets `literature-derived`,
706 `ai-altered`, **0 `ai-generated`**. No dependency in this run rests on an AI-generated
statement.

---

## 4. Cross-level duplication — the screen only 6c can run

Every published item is outside all three group Alphas' scope by construction, so a level item
that silently re-proves published content cannot be seen from inside a batch. I ran a title-token
and a Statement-token similarity scan of all 440 in-run items against all 6514 corpus items.

**Two findings, both repaired; two clean results worth recording.**

- **`fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability` (batch 5)**
  reproduces the published `cex-one-existing-iterated-integral-does-not-give-riemann-integrability`:
  same false claim, same witness on the same rectangle, same two dependencies, same three-step
  route, same envelope integrals `−1/2` and `1/2`. Statement-token Jaccard **1.00**. This is not
  the owner's second-proof allowance, which excludes "a restatement carrying the same proof".
  The batch-5 notes show the duplication was deliberate and reasoned: the published item lives on
  an examples page, **B pages are leaves**, so it cannot be cited, and the witness was reproduced
  from Lebl instead. Adjudicated **nonfatal** — the B-leaf rule genuinely forbids the citation and
  the item has a real role marking the boundary of the volumes page's slicing theorems. What was
  missing was the cross-reference, and batch 3 had already set the house pattern for exactly this
  situation. Repaired with a Remark naming the published counterexample. Ledger row `f17-6c-3`.
- **`cor-finite-galois-extension-has-finitely-many-intermediate-fields` (batch 3)** is a weaker
  special case of the published `cor-finite-separable-extension-has-finitely-many-intermediate-fields`,
  reached by a genuinely different route (the correspondence, versus Steinitz). It carried **no
  Remarks section at all**, so a reader met the weaker statement with no sign the library proves
  the stronger one. Repaired with a Remark naming it and the route difference. Ledger row `f17-6c-4`.
- **Clean: the third FTA proof.** Batch 7 adds `thm-fundamental-theorem-of-algebra-via-the-fundamental-group`
  to a corpus that already publishes the minimum-modulus and Liouville proofs. The Beta authored
  `rem-fundamental-theorem-of-algebra-proof-routes` naming the minimum-modulus proof and
  contrasting the routes, and the published `rem-fundamental-theorem-of-algebra-via-liouville`
  already links Liouville to minimum-modulus — so all three routes are reachable through
  minimum-modulus as the hub. The owner's second-proof rule is satisfied.
- **Clean: batch 3's other two duplications** are correctly cross-referenced already.
  `thm-cayley-hamilton-from-pid-module-structure` names the published `thm-cayley-hamilton` and
  the adjugate route; `fs-characteristic-and-minimal-polynomials-determine-similarity` names the
  published `fs-equal-characteristic-and-minimal-polynomials-imply-similarity` and explains the
  B-leaf reproduction. Different routes in both cases (module-theoretic vs adjugate; invariant
  factors vs Jordan multisets).

---

## 5. The risk-review receipt — the largest finding of this stage

`risk-report --require-reviewed` binds at 6c and nowhere earlier. It is green. The receipt behind
it is, for one group, hollow.

**All 100 of group Alpha b's `risk_review` notes — 57 HIGH and 43 CRITICAL, the entirety of its
batch 3, 7 and 9 cohort — are one sentence pattern whose only per-item content is the tier word
and the risk-report's own tier-reason string**, closing with "B*n*-F1–F*k* were repaired where
applicable; no unresolved defect remains on this item." Eleven distinct texts are shared by two to
six items each. The note restates the risk *score*; it does not record an adjudicated disposition
about that item's mathematics, which is what `briefs/alpha.md` §6b.1 requires. Groups a and c wrote
item-specific dispositions naming the actual risk — 0 of their 171 notes match the pattern — so
this is one group's practice, not the run's.

`tools/risk-report.mjs` line 64 checks only that `reviewer` and `notes` are nonempty strings. This
is the exact failure shape `boundary-audit --fail-on-template` exists to catch for boundary rows,
in a field that has no such detector.

**I did not overwrite the 100 notes**, because replacing them with fresh generic text is the same
defect wearing my name. Instead I tested whether they hide anything.

The underlying work is evidenced: group b's 6b report records that read-only refuters read every
proof-bearing item and every current high/critical item in its batches, and it adjudicates 13
refuter findings `B3-F1`…`B9-F8` with named defects, 8 confirmed fatal and repaired. On top of
that I read **seven of the 100 in full**, across all three of its batches, checking every numbered
step and cited clause:

| item | batch | what I checked | result |
|---|---|---|---|
| `lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor` | 9 | `U`-splitness of `F(TA) ⇉ F(A)`; both natural isomorphisms; that transporting a split fork along creation's isomorphism preserves splitness | sound |
| `thm-becks-monadicity-theorem` | 9 | `U = U^T K`; creation transported along the equivalence; the data-supplied converse | sound |
| `thm-the-contravariant-power-set-functor-is-monadic` | 9 | self-adjointness via relations; conservativity incl. the empty case; the uniform equalizer `E={a : f(a)=g(a)}`; Beck–Chevalley and the factorisation `H̄e⁻¹ = H` | sound |
| `fs-becks-theorem-characterises-strict-monadicity` | 9 | the tagged-set witness; that `K` is an equivalence but not bijective on objects; that exactly one direction is refuted | sound |
| `thm-galois-group-of-an-irreducible-quartic-by-its-resolvent` | 3 | all five rows; that the branches are exhaustive; `D₄ ∩ V₄ = V₄` transitive vs `C₄ ∩ V₄` of order 2 with two orbits | sound |
| `thm-borsuk-ulam-in-dimension-two` | 7 | the odd map `g`, the antipodal equator map, and the contradiction against `π₁(S²)=1` | sound |
| `cor-three-closed-sets-covering-s2-contain-an-antipodal-pair` | 7 | zero sets of `d(·,Aᵢ)`; the empty-`Aᵢ` case; the "both positive ⇒ both in `A₃`" step | sound |

**Disposition: `confirmed_nonfatal`, an audit-artifact defect, recorded not repaired.** The
finding is that 100 receipts do not say what they are required to say. On the 7 I sampled they are
mathematically sound; the other 93 rest on group b's refuter coverage, not on a per-item
disposition anyone can read. Ledger row `f17-6c-5`.

---

## 6. A defect I introduced at 6c, recorded rather than hidden

Repairing edge 4 meant rewriting `fs-finite-volume-implies-finite-lateral-surface-area`'s contract
entry, and my script **assigned a whole new `risk_review` object over the existing one** instead of
extending it. That item is CRITICAL and had a group-a 6b review. The prior text is not recoverable:
`research/frontier-17-batch-4.proof-contracts.json` is untracked so git holds no earlier copy, and
the `alpha-6b-a` dispatch log does not quote it. **Group a's independent 6b reading of that one item
is gone from the record.**

Mitigated, not undone. The replacement carries a full fresh 6c reading — both p-test applications,
the `√(1+x⁻⁴) ≥ 1` bound, the `T=1` exclusion, and the compact-truncation scope limit — and its
`supersedes` field states plainly that a prior review was overwritten and lost. No other
`risk_review` was touched: group a held 82 before 6c and holds 81 now — the single missing one is
this item — and group c's 89 and group b's 100 are untouched. Ledger row `f17-6c-6`.

---

## 7. Other cross-cutting checks

**Choice scope.** 18 items invoke a choice principle and every one declares it in its own title and
Statement: batch 6 carries countable choice through the entire Carathéodory development (11 items,
each titled "Assuming countable choice, …"), batch 9 carries dependent choice through the finitary-monad
cocompleteness chain (3 items) and BPI through `def-ultrafilter-extension-principle`. Two items make
the *negative* declaration explicitly — `lem-induced-outer-measure-agrees-with-premeasure` ("No choice
principle is used here") and `thm-becks-monadicity-theorem` ("The supplied family in the converse is
data; it is not manufactured by global choice"). `thm-relative-automorphism-group-and-separable-degree-bound`
states AC in its Given and `[A1]` and inherits the cost through `thm-algebraic-embedding-extension`,
which declares it in its own Statement. Nothing spends choice silently.

**Well-definedness discharges.** `boundary-audit --fail-on-contradicted --fail-on-template` over
3048 rows: no template cluster at or above 3 members, no contradicted disposition. The
`nonempty-choice` and existence/uniqueness rows on the items I read at §5 were checked against the
proofs rather than against the row text.

**The batch-2 thin A page.** `trigonometric-and-oscillatory-examples-in-several-variables` has one
item on its A page and nine on its B page, and it is the only page carrying a `coverage-low-yield`
warning (7/25 harvested results scaffolded). This is owned and closed upstream, not a 6c finding:
group a returned `insufficient` for the pair at step 3, named the missing sine surface-area result,
the `3-fix` round added it, and the two sine solid examples that resulted are cross-batch edges 1–3
above, which I read in full.

---

## 8. Gate results

Every 6c gate is green. Run after the repairs, not before.

| gate | result |
|---|---|
| `precheck` | 4921 checked, 0 failing |
| `depcheck` · `fwdcheck` · `extcheck` · `rendercheck` | OK (6514 files render; no cycles; every forward ref and not-proved-here mark valid) |
| `prosecheck` · `depsource` · `pathcheck` | OK; 28307 deps resolve; 10 pathway files, 0 errors, 13 draft-unplaced warnings that `pathway-sync` closes at step 10 |
| `manifest-integrity` | 26 owed, 26 in the manifests, no scope drift |
| `splice-verify` | 26 pages across 9 manifests — plan and manifests agree |
| `coverage-1…9` | 710 harvested results, 0 errors, 1 warning (batch 2 low-yield, §7) |
| `content-policy` (item mode) | 440 scoped items, 0 errors, 0 warnings |
| `url-liveness` | 40/40 live, 0 dead, 0 recovered |
| `merge-proof-contracts` | 381 scoped items from 9 batch contracts |
| `proof-contract --strict` | 0 errors, 1 warning |
| `finite-smoke` | 0 errors, 3 checks over the 3 items carrying obligations |
| `risk-report --require-reviewed` | 0 errors, 381 items routed — **see §5 for what this gate cannot see** |
| `boundary-audit --fail-on-contradicted --fail-on-template` | 3048 rows, no template reuse, no contradiction |
| `citation-fidelity --fail-on-missing-quote` | 1306 citations, every recorded quote present, no widening candidate |
| `gate-liveness` | all four live: precheck 4921, proof-contract 381, coverage 710, finite-smoke 3 |
| `impact-audit` | receipt accepted (§9) |
| `audit-manifest` | 1948 relationships over 440 items, 0 defects |
| `defect-ledger validate` | 181 frontier-17 rows, 0 errors |

The single `proof-contract` warning is `shotgun-bracket` on
`lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor`: step 3.3 cites
4 of 5 declared facts while two steps cite none. I read that step (§5) and it is correct; it is a
decomposition preference — the step is an intermediate-lemma candidate — not a defect, and I left it
rather than restructure a proof that is right.

---

## 9. The two receipts

**`research/frontier-17-impact.json` — accepted.** Generated from the engine's own
`pre-author → post-6b` window, `reviewer` set, all **368** consumers given a `still-licensed`
disposition with a per-item note naming which changed interfaces that consumer takes as logical
dependencies and which by direct citation, and on what basis it stays licensed. No note is
interchangeable with another; each names its own page, batch and interfaces.

The substantive result is worth stating plainly, because it bounds the whole blast radius:
**all 440 changed interfaces and all 368 consumers are inside this run.** No item existed at the
`pre-author` snapshot (0 of 440 present), so every "changed interface" is a first authoring, and
**no published item's interface changed and no published item consumes one**. Only 3 consumers take
a cross-batch interface at all, matching the 4 edges of §2.

**`research/frontier-17-spine-audit.json` — accepted.** 58 proof-bearing items among the top 100
transitive dependency cones, all `read`.

- **57 carried forward at byte-identical `content_sha256`** from the frontier-16 6c spine reading.
  The hash equality was checked mechanically, not asserted: 57 identical, **0 changed**. Each note
  records the carry and quotes the original reading in full.
- **1 read personally.** `lem-inverse-unique` is new to this run's top-100 cone (3117 transitive
  consumers) and absent from frontier-16's scope. It was read at this identical hash in frontier-15,
  but I read it in full rather than carry it: both directions of the identity clause `[L2]` are
  genuinely used (right identity at 1.1, left at 1.2), associativity `[L1]` is used exactly once at
  1.3, and steps 3.1–3.3 derive all three claims from 2.1 without further input. No defect.

`scope_sha256` moved from frontier-16 only because transitive-consumer counts shifted as this run
added 440 items. No attested proof's content changed, and no attested proof was edited during
frontier-17.

---

## 10. What I did **not** check

Stated explicitly, because a receipt that implies more coverage than it has is worse than none.

1. **The 531 same-batch citations.** They are the group Alphas' scope and their readers'; I did not
   re-read them. 6c read the seams.
2. **Every one of the 775 cross-level citations at equal depth.** I read the four screens of §3 and
   their entire residue — 129 hypothesis-preamble candidates, 260 reader-facing-line candidates,
   10 prose candidates, and every citation to a non-Statement section (there are none). The 496
   citations that quote a target's whole Statement were **not** individually re-read for
   applicability; the risk they carry is "the hypotheses do not hold here", which is what the 6b
   readers and the step-7 judges read the surrounding proof for, and the target's full text is in
   front of the reader by construction.
3. **93 of group b's 100 high/critical items.** I read 7 (§5). The other 93 are attested only by
   group b's refuter coverage and a note that restates their risk score. This is the honest residue
   of finding `f17-6c-5` and I have not closed it.
4. **The internal correctness of batches 1–9 item by item.** 6c is the seams; 6a/6b own the interiors.
   Where I read an interior — the 7 items of §5, and the four cross-batch sources and targets of §2 —
   I have said so.
5. **The harvest faithfulness re-check.** Each group Alpha did this at 6b.0 against the primary
   sources for its own batches; I did not re-open the 40 source URLs, only confirmed all 40 are live.
6. **No published-dependency repair was made or needed.** No cross-level citation resolved to a
   published statement that was unambiguously false, so the obvious-repair delegation was not
   exercised and `research/frontier-17-published-dependency-repairs.md` is untouched by 6c.

---

## 11. Defect-ledger rows written in this act

Six rows, `research/defect-ledger.jsonl`, all `caught_at_stage: 6c-cross`, `caught_by_role: lead-alpha`.
**None is `confirmed_fatal`** — 6c found no publish-blocking mathematical error.

| id | subject | class / subclass | disposition |
|---|---|---|---|
| `f17-6c-1` | `fs-finite-volume-implies-finite-lateral-surface-area` `[L1]` | accuracy / citation-inflated | fixed |
| `f17-6c-2` | `fs-finite-volume-implies-finite-lateral-surface-area` `[L3]` | accuracy / citation-truncated | fixed |
| `f17-6c-3` | `fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability` | richness / published-duplicate-without-cross-reference | fixed |
| `f17-6c-4` | `cor-finite-galois-extension-has-finitely-many-intermediate-fields` | richness / published-stronger-result-not-cross-referenced | fixed |
| `f17-6c-5` | group b's 100 `risk_review` notes, batches 3/7/9 | silent-runtime / gate-vacuous | nonfatal-recorded |
| `f17-6c-6` | the `risk_review` 6c itself overwrote | silent-runtime / artifact-overwritten | nonfatal-recorded |

Run totals after this append: 181 frontier-17 rows — 120 fatal, 53 nonfatal, 8 polish, of which
6a-read caught 123, 6b-adjudicate 52 and 6c-cross 6.

---

## 12. Items and pages changed at 6c

Three item files and one batch contract. Every change is a step-6 repair on unfrozen text; none
voided a judge verdict, because none exists yet.

- `items/fs-finite-volume-implies-finite-lateral-surface-area.md` — `[L1]` restated with its
  hypotheses; `[L3]` split into `[L3]`/`[L4]`/`[L5]`; steps 1.1, 1.2, 2.1 rewritten to discharge
  them and to exclude `T=1` correctly.
- `items/fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability.md` — Remark added.
- `items/cor-finite-galois-extension-has-finitely-many-intermediate-fields.md` — Remark added.
- `research/frontier-17-batch-4.proof-contracts.json` — derivations, citation labels and `uses`,
  four boundary-evidence strings, and the `risk_review` for the repaired item.

**No item was added or deleted, no id renamed, no page reading order changed, no published item
touched, and nothing was judged.** I authored no new mathematical result at 6c, so there is no new
proof of mine for a reader to certify.

---

## 13. Standing state for step 7

Every 6c gate is green and both whole-level receipts are accepted. The mathematics I read — the
four cross-batch edges, the residue of four cross-level screens, and seven of group b's
high/critical items — carries no unrepaired defect.

Two things are open and belong to the owner's step-10 view rather than to a gate:

1. **93 high/critical items in batches 3, 7 and 9 have a `risk_review` that restates their risk
   score instead of disposing of their mathematics** (`f17-6c-5`). The gate that binds here cannot
   see it, and no group Alpha will return. Closing it honestly means reading those 93 items; the
   cheaper and more durable fix is a template detector on `risk_review` notes, modelled on
   `boundary-audit --fail-on-template`, which would have flagged all eleven clusters here.
2. **One group-a 6b risk review was destroyed by my own repair and cannot be restored**
   (`f17-6c-6`). The item is covered by a fresh 6c reading; the loss is of an independent second
   reading, not of coverage.
