# Owner residual-E adjudication report

Run: `phase-2-remaining-27`

Role: `alpha-adjudicate`

Label: `owner-residual-e`

Date: 2026-09-20

## Result

All seven assigned mathematical escalations are resolved in the owned draft
content. One necessary downstream impact repair was also made to
`thm-sigma-one-three-measurability-implies-omega-one-inaccessible-in-l` so
that it actually supplies the uniform premise of the repaired rapidity
theorem. No published item was edited, and the source review disclosed no
published defect that required an entry in the canonical published-defect
ledger.

The ordinary focused checks pass. The final Step-7 guard nevertheless has one
mechanical error: the pre-existing reader-warning decision for queue position
54 binds an earlier post-repair hash, while this owner-authorized second repair
has a new current hash. The owner-impact licence correctly binds the Step-7
baseline to the current item, but the guard still checks the historical
reader-warning row. That row, the adjudication and the terminal receipt are all
outside this dispatch's write scope and were left unchanged.

## Source review and decisive passages

The four questions in the escalation report were checked against the complete
relevant source arguments, not treated as inherited blockers.

1. **Relative constructibility complexity.** Thomas Jech, *Set Theory*,
   Chapter 25, Theorem 25.26 and Lemma 25.27, pp. 494–495,
   <https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/25-descriptive_set_theory.pdf>.
   The source says “The theorem easily generalizes to L[a]” and then gives a
   `Sigma^1_2` relation enumerating exactly the canonical predecessors of a
   constructible real. The repaired proof expands this into a relative
   well-founded countable-level certificate, including completeness of the
   predecessor enumeration, rather than citing the slogan alone.

2. **Weak-choice coin-measure construction.** Hiromi Ishii, *Regularity
   Properties and Inaccessible Cardinals*, Lemmas 3.10–3.11 and Theorem 3.12,
   pp. 47–50,
   <https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf>,
   states the capture conclusion and adds: “if M is some transitive model and
   f in M then N_f is coded in M.” Terence Tao, *An Introduction to Measure
   Theory*, Chapter 1,
   <https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf>,
   supplies the outer-measure/Carathéodory background. The item does not assume
   that general construction in ZF: it now constructs only the required coin
   content from prefix-free cylinders, with canonical finite covers and finite
   pattern counts.

3. **Good–Tree–Watson transfer.** C. Good, I. J. Tree and W. S. Watson,
   *On Stone's theorem and the axiom of choice*, Theorems 2–3 and the paragraph
   following Theorem 3, printed pp. 5–6,
   <https://web.mat.bham.ac.uk/C.Good/research/pdfs/stone.pdf>. Theorem 2 begins
   “It is consistent relative to ZF” and Theorem 3 states “Stone's Theorem
   cannot be proved from ZF+DC.” The proof of Theorem 3 derives DC from
   closure under ambient omega-sequences, while the following paragraph gives
   the regular-`lambda` replacement. This is the consistency bridge used in
   the repaired theorem; no transitive model is extracted from bare
   consistency.

4. **Shelah relative-consistency interface.** Saharon Shelah, *Can You Take
   Solovay's Inaccessible Away?*, Main Theorem 7.16, Conclusion 7.17 and the
   following remark, p. 43,
   <https://shelah.logic.at/files/95333/176.pdf>. Theorem 7.16 begins “For every
   universe V of set theory satisfying the continuum hypothesis,” and
   Conclusion 7.17 explicitly lists ZFC and ZF+DC+all-BP as equiconsistent.
   The repaired proof therefore starts with an arbitrary first-order model,
   performs the no-inaccessible reduction internally, and invokes Shelah's
   published model transformation at the semantic level.

Additional checks used Spyridon Dialiatsis and Yurii Khomskii,
*Combinatorial Properties of the Raisonnier Filter*, Theorems 2.5 and 2.8,
<https://arxiv.org/pdf/2602.23340>, for the current Raisonnier interface, and
Samuel Corson, *The Independence of Stone's Theorem from the Boolean Prime
Ideal Theorem*, Introduction and Theorem 1,
<https://arxiv.org/pdf/2001.06513>, for the BPI row of the choice ledger.

## Dispositions

### Queue 37 — `lem-measurable-null-code-orders-bound-constructible-null-unions`

**Disposition: resolved by owner prerequisite repair.** The selected claim is
retained: `A(x)` is `Sigma^1_2(x)`, and under Countable Choice its measurability
forces the ambient union of the `L[x]`-coded null Borel sets to be null.

The repair constructs a coherent relative `L[x]` order and a `Pi^1_1(x)`
certificate for an exact predecessor segment using canonical least Skolem
witnesses. The formula for `A(x)` is now explicitly strict, false off
`G times G`, and false on the diagonal. Completed Tonelli/Fubini is applied
only after measurability is assumed; the exceptional vertical sections are
not assigned a measure. The final dichotomy either has `G` inside the
exceptional null set or decomposes it into a lower section, one null layer and
one good upper section.

Dependencies and the batch-15 manifest/contract now name the canonical
well-order, Countable Choice, completed-product Fubini and the relative
constructibility definition actually used.

### Queue 38 — `lem-raisonnier-family-is-a-sigma-one-three-filter`

**Disposition: resolved by owner prerequisite repair.** The proof no longer
uses unrelativized GCH in `L` as a proxy for `L[x]`. It proves the relative
`Sigma^1_2(x)` membership certificate directly. Canonically least codes for
the `L[x]`-countable ordinals inject `omega_1^{L[x]}` into the `L[x]` reals, so
properness follows from the given equality and Countable Choice. The closed
tree-cover formulation has the advertised `Sigma^1_3(x)` complexity, and the
filter and Frechet-filter clauses are proved separately.

### Queue 46 — `lem-uniform-null-g-delta-capture-functions`

**Disposition: resolved by owner prerequisite repair.** The statement remains
a ZF statement. The former reliance on a DC-level measure supplier and on
Borel–Cantelli was replaced by a local construction:

- coin content is the sum over the prefix-free shortest cylinders;
- tail nullity follows from explicit summable open covers;
- finite independence is a finite binary-pattern count;
- zero-content traces are removed using the least coded finite covers with
  summable errors;
- the removed union is relatively open in the original closed set, so the
  remainder is closed and retains positive content; and
- the infinite slalom union is bounded through every finite subset, giving
  `|phi_U(n)| <= 2^(n+1)` without a hidden choice step.

The model-membership clause is arithmetic in `f` and the fixed block system,
matching Ishii's cited conclusion.

### Queue 51 — `thm-relative-consistency-dc-without-stone`

**Disposition: resolved by owner prerequisite repair.** The theorem now invokes
Good–Tree–Watson's published relative-consistency theorem instead of treating
`Con(ZF)` as an external transitive forcing ground. In the regular-`lambda`
presentation with `lambda=omega_1`, ambient omega-sequence closure gives DC.

For the connected-component witness, the repaired cover is exactly
`{B_X(x,1/3): x in X}`. Every ball is a proper subset of its component. A
finite boundary-avoidance argument makes every `S_xi` nonempty, and any
nonempty refinement member inside a proper component ball has nonempty
boundary because the component is connected. Hence every `S_xi` is proper,
contradicting the selector obstruction. The statement continues to distinguish
this connected witness from the source's separate zero-dimensional witness.

### Queue 54 — `rem-choice-strength-ledger-baire-urysohn-stone-tychonoff`

**Disposition: mathematical content resolved by owner impact repair; mechanical
Step-7 guard remains blocked by a stale historical reader-warning hash.** The
selected Stone claims were not dropped. Both the summary and the Stone row now
say exactly that, relative to `Con(ZF)`, ZF+DC and ZF+BPI are each consistent
with the failure of Stone's theorem. This matches the cited Good–Tree–Watson
and Corson consistency statements and preserves the ledger's distinction
between the ordinary theorem and the stronger effective refinement assertion.

The current owner licence is exact-hash valid. The sole guard error is described
under “Open question and workflow blocker” below.

### Queue 59 — `thm-raisonnier-filter-is-rapid-from-null-code-measurability`

**Disposition: resolved by owner impact repair.** The three repaired suppliers
at positions 37, 38 and 46 now support the proof. A Borel null hull for the
constructible null union is complemented, and inner regularity provides a
positive compact subset; its open complement has coin measure below one and
is the valid input to the capture lemma.

The block proof now uses the library's exact convention that `h` is a first
differing **prefix length**, one greater than the first differing coordinate.
At level `i`, realized values lie in `(n_(i-1),n_i]`; the cover proof and the
cardinality estimate use those same endpoints. The uniform measurability
hypothesis is stated for every `A(x joined with r)`.

### Queue 61 — `thm-shelah-baire-model-separates-baire-property-from-measurability`

**Disposition: resolved by owner impact repair.** Starting with an arbitrary
first-order ZFC model, its internal constructible universe is used if it has no
inaccessible; otherwise its first-inaccessible rank segment is used. The rank
segment theorem gives ZFC internally and the minimality of that inaccessible
gives a `V=L` model with no inaccessible. This establishes the reduction
without external transitivity or well-foundedness.

Shelah's transformation then gives a model of ZF+DC+all-BP. If all its real
sets were measurable, noninaccessibility in its constructible universe would
give the required real `x`; universal measurability supplies every
`A(x joined with r)`, not just `A(x)`. The repaired rapidity theorem produces
the nonmeasurable rapid filter, completing the contradiction.

### Necessary downstream impact item

`thm-sigma-one-three-measurability-implies-omega-one-inaccessible-in-l` was
repaired along the dependency path from queue 59. For each real `r`, it now
observes that `A(x joined with r)` is `Sigma^1_2(x joined with r)` and hence is
measurable by the boldface `Sigma^1_3` hypothesis. This is the exact uniform
premise the rapidity theorem requires.

## Exact hash licences

All hashes below are full `tools/item-hash.mjs` `itemHashGuard` SHA-256 values.
Each row was appended through the authorized owner prerequisite-repair ledger
and has at least two authoritative HTTPS sources. Impact rows include the
displayed dependency path.

| Item | Kind / dependency path | Pre hash | Post hash |
|---|---|---|---|
| `lem-measurable-null-code-orders-bound-constructible-null-unions` | prerequisite, found via queue 59 | `ece0d50a7e4db0d19a862061931bd83d629a0a6b81120bf4544d66f9a1f86ce2` | `158414dc616253e25916f7f2990dec206b00901636e23d1e2074d322a9616c3c` |
| `lem-raisonnier-family-is-a-sigma-one-three-filter` | prerequisite, found via queue 59 | `6adebce44ee04c9a21c80d4ac0a3a644e098081138f379b3e1a8c7acaa4609ac` | `f5ec8cbc6f78d5130e2b3e6bd26ab4b9efb956afcfb0bcd9d983b19d5e330791` |
| `lem-uniform-null-g-delta-capture-functions` | prerequisite, found via queue 59 | `e913614ae7eb535406e0534d0275ad20d31b7df9197d75cef2e78a6b28e628d8` | `95d9fc10cd163fc4b342de674ff67253a4fcf3bcf76829edf388fe30ae763063` |
| `thm-relative-consistency-dc-without-stone` | prerequisite, found via queue 54 | `78ec8cbaebc245a652fac76cbb5c880b824822644e9b52ac4053ec21d529b911` | `513830a0aaefcece3fe20b3f247f108cbd9eaf54beab4eafc51f94245848275a` |
| `rem-choice-strength-ledger-baire-urysohn-stone-tychonoff` | impact: 51 -> 54 | `2111353284f10c0193315d167a66552d68df6e4bd44b2a1eca137aabcf5496b4` | `40baafff0c5cb6a4c58a53b657c38b671208f842117e5db9d9f5e938af6003b5` |
| `thm-raisonnier-filter-is-rapid-from-null-code-measurability` | impact: 37 -> 59 | `397e91facf7ad6e75e3d1a61eb032e576ae42989853730f5c10e9faf9e1bb017` | `33316d9e8f7dd46d04d55f406512542390c143969c6c703e2633081ab423e50e` |
| `thm-sigma-one-three-measurability-implies-omega-one-inaccessible-in-l` | impact: 59 -> theorem | `87796a6278265678027ae045dc7ee21f4bee3b87ba205719a15037efa02060ab` | `d160850c58f5dee671ab885b7314dbc5f68941f9cc03288104ab8d164561c1ef` |
| `thm-shelah-baire-model-separates-baire-property-from-measurability` | impact: 59 -> 61 | `bd4a267aa31c2c98cecc0b3d21125af1556f0a22c529d7c9b7432734cf086aba` | `ec4cc1f1db28d4e8a72b69c352aa7af878cc03fd36f6ae6d9d1422e34560e349` |

Ledger:
`research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl`.

## Manifests, contracts and frontier ledger

- Batch 14 pages and proof contracts were synchronized for queue position 51.
- Batch 15 pages and proof contracts were synchronized for positions 37, 38,
  46, 54, 59 and 61 and for the necessary downstream inaccessible-in-`L`
  theorem.
- In the batch-15 cross-batch input, the stale
  `def-boldface-sigma-one-three-measurability` ->
  `lem-dependent-choice-implies-countable-choice` edge is marked `removed`:
  the current definition and manifest assume Countable Choice directly.
- `node tools/frontier-dependency-ledger.mjs refresh --run
  phase-2-remaining-27` completed successfully. The unified ledger was then
  checked at the reconciled row; it retains the removed status and its exact
  evidence from the batch-15 input.

## Validation

- Focused precheck on the eight edited items: seven proof-bearing items passed;
  the remark was correctly skipped as non-proof-bearing. Result: `7 checked,
  0 failing`.
- Strict selected proof contracts: batch 14 `1/1`, batch 15 `6/6`; zero errors
  and zero warnings.
- Manifest dependencies on batches 14 and 15: `114 item(s), 0 normalized,
  0 error(s)`.
- Focused prosecheck on all eight items: `8 file(s), 0 error(s), 0 warning(s)`.
- `node tools/depcheck.mjs`: `OK — no positional claim contradicts the spec.`
- Frontier-ledger refresh: successful and deduplicated.
- Step-7 guard: 694 changed items, all 694 licensed, zero creations, zero
  deletions, zero warnings, and the single stale-reader-warning error described
  below.
- Report prosecheck: zero errors; four heuristic `count-in-prose` warnings on
  literal batch/check counts in this validation record.
- Scoped `git diff --check`, including a no-index check of this new report:
  clean.

## Open question and workflow blocker

No mathematical question remains open in the seven assigned escalations.

The exact remaining workflow question is: **what sanctioned append-only action
supersedes a confirmed-fatal reader-warning post hash when the owner later makes
an authorized second impact repair to the same draft item?**

The guard reports:

> `reader-warning-fatal-licence-stale` for
> `rem-choice-strength-ledger-baire-urysohn-stone-tychonoff`:
> `research/phase-2-remaining-27-step7-alert-decisions.jsonl:34` does not match
> both the Step-7 baseline and the current item.

The historical decision binds baseline hash
`2111353284f10c0193315d167a66552d68df6e4bd44b2a1eca137aabcf5496b4`
to an earlier post hash, while the owner-authorized current repair has guard
hash
`40baafff0c5cb6a4c58a53b657c38b671208f842117e5db9d9f5e938af6003b5`.
The current owner-impact row binds those baseline/current endpoints and passes
its own exact-hash check. This dispatch does not authorize edits to alert
decisions, adjudications, terminal resolutions or engine state, so none was
made.
