# Exact Step-8 repair envelope — 8-preflight, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
complete relevant diagnostic records, exact current rejection tuples, and explicit run/published ownership.
The full_evidence file retains the original untruncated battery output and all ownership assignments.
Read its relevant sections if a diagnostic is ambiguous; do not infer absence from this scoped view.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "phase-2-wave-1",
  "stage": "8-preflight",
  "round": 1,
  "mode": "preflight",
  "group": "b",
  "full_evidence": "research/phase-2-wave-1-8-preflight-repair-evidence-1-e9337a6b68f654e350c05c1214979af4333ebf254eb5b6ed84008ef14ef467c7.json",
  "full_evidence_sha256": "e9337a6b68f654e350c05c1214979af4333ebf254eb5b6ed84008ef14ef467c7",
  "failures": [
    {
      "id": "proof-contract",
      "stage": "8-preflight",
      "why": "ERROR citation-quote-mismatch [lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree]: F1 quote does not occur in def-free-presentation-lyndon-bar-bicomplex-and-edge-maps's Definition",
      "output": "proof-contract: 15 error(s), 0 warning(s), 402/402 item(s) checked\nERROR citation-quote-mismatch [lem-models-of-coded-zf-are-infinite]: F1 quote does not occur in def-coded-first-order-zf-theory's Definition\nERROR citation-quote-mismatch [fs-categorical-first-order-zf]: F1 quote does not occur in def-coded-first-order-zf-theory's Definition\nERROR citation-quote-mismatch [thm-special-aronszajn-tree-construction]: F8 quote does not occur in def-aronszajn-suslin-and-special-tree's Definition\nERROR citation-use-unmapped [thm-special-aronszajn-tree-construction]: A1 is cited by 4.1 but the contract omits it\nERROR step-entry-input-omitted [thm-special-aronszajn-tree-construction]: limit-level omits A1, cited by 4.1\nERROR citation-quote-mismatch [lem-aronszajn-finite-petals-incomparability]: F1 quote does not occur in def-aronszajn-suslin-and-special-tree's Definition\nERROR citation-quote-mismatch [lem-specialization-dense-domains-and-union]: F2 quote does not occur in def-aronszajn-suslin-and-special-tree's Definition\nERROR citation-quote-mismatch [thm-diamond-constructs-normal-suslin-tree]: F10 quote does not occur in def-aronszajn-suslin-and-special-tree's Definition\nERROR citation-quote-mismatch [thm-splitting-suslin-tree-poset-square-not-ccc]: F4 quote does not occur in def-aronszajn-suslin-and-special-tree's Definition\nERROR citation-quote-mismatch [fs-every-omega-one-tree-has-a-cofinal-branch]: F3 quote does not occur in def-aronszajn-suslin-and-special-tree's Definition\n",
      "named_ids": [
        "lem-models-of-coded-zf-are-infinite",
        "fs-categorical-first-order-zf",
        "thm-special-aronszajn-tree-construction",
        "lem-aronszajn-finite-petals-incomparability",
        "lem-specialization-dense-domains-and-union",
        "thm-diamond-constructs-normal-suslin-tree",
        "thm-splitting-suslin-tree-poset-square-not-ccc",
        "fs-every-omega-one-tree-has-a-cofinal-branch"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "lem-models-of-coded-zf-are-infinite",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-categorical-first-order-zf",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-special-aronszajn-tree-construction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-aronszajn-finite-petals-incomparability",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-specialization-dense-domains-and-union",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-diamond-constructs-normal-suslin-tree",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-splitting-suslin-tree-poset-square-not-ccc",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-omega-one-tree-has-a-cofinal-branch",
      "scope": "run",
      "owner": "b"
    }
  ],
  "assigned_items": [
    {
      "id": "lem-models-of-coded-zf-are-infinite",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-categorical-first-order-zf",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-special-aronszajn-tree-construction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-aronszajn-finite-petals-incomparability",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-specialization-dense-domains-and-union",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-diamond-constructs-normal-suslin-tree",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-splitting-suslin-tree-poset-square-not-ccc",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-omega-one-tree-has-a-cofinal-branch",
      "scope": "run",
      "owner": "b"
    }
  ],
  "fatal_repair_licences": [
    {
      "id": "thm-special-aronszajn-tree-construction",
      "model": "gpt-5.6-terra",
      "context_sha256": "1bb4357dc19217820c770dbd12b322010e4f1f9b5cf9271f0eef86c18268c351",
      "item_sha256": "946acb3f6e93e4066aabab412525df0a1def3568a6ae9e951781216a076e8531",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "b",
      "at": "2026-09-09T02:17:09+10:00",
      "reason": "The limit-extension statement guarantees existence but does not export the deterministic construction that F1 claimed, while step 5 needs a genuine functional rule for transfinite recursion. The repair fixes one ambient well-order of candidate codes and chooses the least eligible limit extension."
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **b**, run `phase-2-wave-1`

You are the group Alpha for batches **14**, **15**: 3 A/B pair(s), 6 page(s), 100 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/phase-2-wave-1-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-wave-1-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 14 | `deduction-soundness-completeness-and-compactness` | A | foundations | 657 | `formal-set-theoretic-syntax-structures-and-satisfaction`, `countability-and-uncountability`, `cardinal-arithmetic-and-cofinality` |
| 14 | `deduction-soundness-completeness-and-compactness-examples` | B | foundations | 658 | `deduction-soundness-completeness-and-compactness` |
| 14 | `set-theoretic-trees-delta-systems-and-diamond` | A | foundations | 671 | `club-stationary-sets-and-pressing-down`, `filters-and-ultrafilters` |
| 14 | `set-theoretic-trees-delta-systems-and-diamond-examples` | B | foundations | 672 | `set-theoretic-trees-delta-systems-and-diamond` |
| 15 | `dependent-choice-and-the-complete-metric-baire-theorem` | A | foundations | 664.1 | `relations-functions-and-quotients`, `completeness-and-uniform-continuity` |
| 15 | `dependent-choice-and-the-complete-metric-baire-theorem-examples` | B | foundations | 664.2 | `dependent-choice-and-the-complete-metric-baire-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `deduction-soundness-completeness-and-compactness` — Deduction, Soundness, Completeness, and Compactness (35 item(s))

- `def-set-coded-formal-derivation` · definition — Formal proofs from sentence theories
- `def-first-order-syntactic-consistency` · definition — Consistency and syntactic completeness
- `lem-derivation-finite-support-and-concatenation` · lemma — Finite support, weakening, and composition of derivations
- `lem-hilbert-propositional-and-equality-rules` · lemma — Derived propositional, quantifier and equality rules
- `thm-first-order-sentence-deduction` · theorem — Deduction theorem for sentence assumptions
- `thm-set-language-first-order-soundness` · theorem — Soundness for arbitrary set signatures
- `lem-proof-fresh-constant-elimination` · lemma — Fresh constants may be eliminated from a finite proof
- `lem-consistent-sentence-decision` · lemma — A consistent theory can decide one sentence
- `def-henkin-witness-extension` · definition — Witness constants and Henkin theories
- `lem-fresh-henkin-axiom-preserves-consistency` · lemma — Adding one fresh witness preserves consistency
- `lem-countable-henkin-syntax-coding` · lemma — Canonical natural-number codes for countable Henkin syntax
- `thm-countable-lindenbaum-henkin-completion` · theorem — Canonical countable Lindenbaum–Henkin construction
- `lem-complete-henkin-theory-truth-rules` · lemma — Boolean and witness closure of a complete Henkin theory
- `lem-henkin-term-equality-congruence` · lemma — Provable equality is a congruence on closed terms
- `def-henkin-closed-term-model` · definition — The closed-term quotient structure
- `thm-henkin-closed-term-truth-lemma` · theorem — Truth lemma for the term quotient
- `thm-countable-first-order-completeness` · theorem — Completeness for explicitly countable set languages
- `thm-countable-first-order-compactness` · theorem — Compactness for explicitly countable languages
- `def-elementary-set-structure-embedding` · definition — Elementary embeddings, substructures and chains
- `thm-tarski-vaught-set-structure-test` · theorem — Tarski–Vaught witness test
- `def-skolem-witness-hull` · definition — Witness functions and their hulls
- `lem-skolem-hull-size-and-elementarity` · lemma — Skolem hulls are small elementary substructures
- `thm-downward-lowenheim-skolem-with-parameters` · theorem — Downward Löwenheim–Skolem with parameters
- `thm-elementary-ordinal-chain-union` · theorem — Unions of nonempty elementary chains
- `thm-well-ordered-language-henkin-completeness` · theorem — Well-ordered language completeness with a size bound
- `def-elementary-diagram-of-set-structure` · definition — Elementary diagrams
- `lem-elementary-diagram-embedding` · lemma — Models of the elementary diagram yield elementary embeddings
- `thm-upward-lowenheim-skolem-with-choice` · theorem — Upward Löwenheim–Skolem, including elementary extensions
- `cor-arbitrarily-large-finite-models-give-infinite-model` · corollary — Arbitrarily large finite models imply an infinite model
- `def-nonstandard-natural-number-structure` · definition — Nonstandard models of the complete natural-number theory
- `thm-nonstandard-natural-number-model-exists` · theorem — A countable nonstandard model has an element above all numerals
- `cor-countable-los-vaught-test` · corollary — The infinite-model categoricity test for completeness
- `def-coded-first-order-zf-theory` · definition — The set of first-order ZF axiom sentences
- `lem-models-of-coded-zf-are-infinite` · lemma — Every set model of first-order ZF has infinitely many elements
- `rem-first-order-choice-strength-boundary` · remark — Choice ledger and arbitrary-language boundary

### `deduction-soundness-completeness-and-compactness-examples` — Deduction, Soundness, Completeness, and Compactness: Examples and Counterexamples (6 item(s))

- `ex-first-order-sentence-deduction` · example — A two-premise formal deduction
- `cex-generalization-after-open-assumption` · counterexample — The deduction theorem needs its free-variable restriction
- `ex-seed-constant-for-empty-signature` · example — The empty signature still needs a nonempty term domain
- `cex-isomorphic-inclusion-need-not-be-elementary` · counterexample — Isomorphism does not make an inclusion elementary
- `ex-nonstandard-element-above-every-numeral` · example — Compactness produces a genuinely nonstandard element
- `fs-categorical-first-order-zf` · false-statement — FALSE: consistent first-order ZF has a unique model up to isomorphism

### `set-theoretic-trees-delta-systems-and-diamond` — Set-Theoretic Trees, Delta Systems, and Diamond (42 item(s))

- `def-set-theoretic-tree-and-levels` · definition — Set-theoretic trees, heights, levels, branches and antichains
- `lem-tree-predecessors-and-common-extensions` · lemma — Tree predecessors and compatibility
- `def-kappa-tree-and-tree-property` · definition — κ-trees and the tree property
- `def-normal-splitting-set-theoretic-tree` · definition — Normal and splitting trees
- `lem-normal-set-theoretic-tree-sequence-representation` · lemma — Normal trees have faithful sequence representations
- `def-aronszajn-suslin-and-special-tree` · definition — Aronszajn, Suslin and special trees
- `thm-konig-finite-level-tree` · theorem — König’s lemma for finite levels
- `lem-countable-normal-tree-cofinal-branch` · lemma — Branches through countable normal trees of limit height
- `lem-splitting-cofinal-branch-gives-antichain` · lemma — Splitting turns an uncountable branch into an antichain
- `lem-bounded-rational-tree-limit-extension` · lemma — Rational bounds at countable limit levels
- `thm-special-aronszajn-tree-construction` · theorem — A special Aronszajn tree exists
- `def-finite-delta-system` · definition — Delta systems and roots
- `thm-regular-uncountable-finite-delta-system` · theorem — The finite delta-system lemma at a regular uncountable cardinal
- `cor-indexed-omega-one-delta-system` · corollary — The indexed delta-system lemma
- `def-poset-ccc-and-knaster-property` · definition — Compatibility, ccc and Knaster for posets
- `def-finite-support-poset-product` · definition — Finite-support products
- `lem-finite-knaster-poset-products` · lemma — Finite products preserve Knaster
- `thm-finite-support-knaster-poset-products` · theorem — Finite-support products of Knaster posets are Knaster
- `lem-cocountable-ultrafilter-on-uncountable-set` · lemma — An ultrafilter containing all cocountable subsets
- `lem-aronszajn-finite-petals-incomparability` · lemma — Two finite disjoint petals can be made cross-incomparable
- `def-finite-aronszajn-specialization-poset` · definition — Finite specializing conditions
- `thm-aronszajn-specialization-poset-ccc` · theorem — Finite specialization of an Aronszajn tree is ccc
- `lem-specialization-dense-domains-and-union` · lemma — Dense domains and directed unions of specializing conditions
- `def-diamond-on-omega-one` · definition — Diamond on ω1
- `prop-diamond-implies-continuum-hypothesis` · proposition — Diamond implies CH
- `def-ostaszewski-club-principle` · definition — The Ostaszewski club principle
- `prop-diamond-implies-ostaszewski-club` · proposition — Diamond implies clubsuit
- `def-jensen-square-sequence` · definition — Jensen’s square principle with its order-type bound
- `lem-countable-tree-antichain-sealing` · lemma — Seal a maximal antichain at a countable limit level
- `lem-club-tree-coding-antichain-reflection` · lemma — A club of correctly coded maximal-antichain restrictions
- `thm-diamond-constructs-normal-suslin-tree` · theorem — Diamond constructs a normal splitting Suslin tree
- `thm-splitting-suslin-tree-poset-square-not-ccc` · theorem — A ccc tree poset whose square is not ccc
- `def-suslin-line-order-interface` · definition — Suslin lines in order language
- `rem-kurepa-suslin-line-tree-interface` · remark — Kurepa’s line/tree correspondence: downstream proof contract
- `def-partition-arrow-notation` · definition — Partition arrows and homogeneous sets
- `thm-infinite-ramsey-finite-colors` · theorem — Infinite Ramsey theorem for fixed finite arity and colors
- `def-finite-beth-iteration-above-a-cardinal` · definition — Finite beth iteration above an infinite cardinal
- `lem-erdos-rado-pattern-closure-and-end-homogeneity` · lemma — Pattern closure yields an end-homogeneous sequence
- `thm-general-cardinal-erdos-rado` · theorem — Erdős–Rado for arbitrary infinite cardinals and finite arity
- `rem-ramsey-and-erdos-rado-orientation` · remark — Ramsey and Erdős–Rado: exact orientation obligations
- `def-pruned-tree-products-and-dense-matrices` · definition — Finite products of pruned trees and dense matrices
- `rem-halpern-lauchli-finite-tree-statement` · remark — Halpern–Läuchli matrix statement and proof destination

### `set-theoretic-trees-delta-systems-and-diamond-examples` — Set-Theoretic Trees, Delta Systems, and Diamond: Examples and Counterexamples (7 item(s))

- `ex-binary-tree-and-konig-branch` · example — The binary tree and a cofinal branch
- `cex-countable-levels-do-not-suffice-for-konig` · counterexample — Countable levels do not suffice for König’s lemma
- `ex-uncountable-delta-system-with-one-point-root` · example — An explicit uncountable delta system
- `cex-infinite-sets-delta-system-hypothesis` · counterexample — Finite sets cannot be replaced by arbitrary countable sets
- `ex-finite-specialization-compatibility` · example — Agreement on overlap is insufficient for specialization compatibility
- `ex-diamond-suslin-ccc-square` · example — Under diamond, ccc fails to survive a square
- `fs-every-omega-one-tree-has-a-cofinal-branch` · false-statement — FALSE: every ω1-tree has a cofinal branch

### `dependent-choice-and-the-complete-metric-baire-theorem` — Dependent Choice and the Complete-Metric Baire Theorem (9 item(s))

- `def-serial-relation-dependent-choice-principle-over-zf` · definition — The serial-relation Dependent Choice principle over ZF
- `lem-prescribed-start-and-starting-point-free-serial-choice-are-equivalent-in-zf` · lemma — Prescribed-start and starting-point-free serial choice are equivalent in ZF
- `def-complete-metric-baire-principle-over-zf` · definition — The complete-metric Baire principle over ZF
- `lem-open-dense-and-closed-nowhere-dense-baire-forms-are-equivalent-in-zf` · lemma — Open-dense and closed-nowhere-dense Baire forms are equivalent in ZF
- `thm-serial-dependent-choice-implies-complete-metric-baire-over-zf` · theorem — Serial Dependent Choice implies the complete-metric Baire principle over ZF
- `lem-discrete-sequence-spaces-are-complete-in-zf` · lemma — Discrete sequence spaces are complete in ZF
- `lem-serial-relation-successor-sets-are-open-dense` · lemma — Successor-occurrence sets of a serial relation are open and dense
- `thm-complete-metric-baire-principle-implies-dependent-choice-over-zf` · theorem — The complete-metric Baire principle implies Dependent Choice over ZF
- `thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf` · theorem — Dependent Choice is equivalent to the complete-metric Baire principle over ZF

### `dependent-choice-and-the-complete-metric-baire-theorem-examples` — Dependent Choice and the Complete-Metric Baire Theorem — Examples (1 item(s))

- `ex-blair-sequence-space-for-a-serial-relation` · example — Blair's sequence space for a serial relation

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

None. No Step-7 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-wave-1-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `phase-2-wave-1`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Work only on `assigned_items`, using the live tuples
and retained fatal repair licences as evidence. Rerun focused checks where supported.

Resolve every assigned finding in this pass, keeping the existing mathematics
and detail except where an exact fatal licence requires correction. A serial
reviewer must establish ownership before editing an ambiguous record. If the
detector or repair authority is wrong, report the cause; unchanged retries stop.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
including the envelope's `fatal_repair_licences`. These bind validated original
rejections to the pre-Step-8 baseline even after a repair makes their verdicts
stale. Empty `live_tuples` does not revoke these licences. Use them only to
complete the assigned repair; do not readjudicate settled findings.
You may also correct a documentary contract, manifest, impact or verification
record to match the current proof. A licensed fatal repair may add fully proved
missing-dependency lemmas under the Step-8 adjudication instructions, including
their page, manifest, contract, and scope registrations. Do not otherwise
broaden scope, edit a nonfatal or false-positive item, run a judge sweep, or run
a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
