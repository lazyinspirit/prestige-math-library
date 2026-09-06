# Exact Step-8 repair envelope — 8-close, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
complete relevant diagnostic records, exact current rejection tuples, and explicit run/published ownership.
The full_evidence file retains the original untruncated battery output and all ownership assignments.
Read its relevant sections if a diagnostic is ambiguous; do not infer absence from this scoped view.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-31a",
  "stage": "8-close",
  "round": 1,
  "mode": "close",
  "group": "h",
  "full_evidence": "research/frontier-31a-8-close-repair-evidence-1-1b833b433a6c0ebbe749a69ebb079d43e7e81752b8295b5177ea847b52741790.json",
  "full_evidence_sha256": "1b833b433a6c0ebbe749a69ebb079d43e7e81752b8295b5177ea847b52741790",
  "failures": [
    {
      "id": "boundary-audit",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 5632 rows over 1 contract file(s); 4631 marked not_applicable\n\nTEMPLATE REUSE — 7 cluster(s) at or above 3 members.\nA rationale shared across many items is not a determination about any of them.\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution calculation in 1.1; right exactness and H0 in 1.2; horseshoe kernel and converse in 2.1–3.1. Zero tensor functors are exact. DC and supplied res…\"\n    items: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution forward argument in 1.1, natural Tor0 and cokernel calculation in 1.2, left-variable LES and converse in 2.1–3.1. Zero tensor functors are exact…\"\n    items: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes\n\n  5 rows · axes: degenerate, empty, endpoints, iff-forward, iff-reverse\n    \"This explicit positive-integer finite-complex calculation has no additional empty branch.\"\n    items: ex-the-tensor-double-complex-in-low-degrees\n\n  3 rows · axes: endpoints, one, zero\n    \"All eight zero/positive degree patterns are checked in 1.2 and 2.1–2.3; the short-extension pullback/pushout case uses the short five lemma; degree-zero composi…\"\n    items: thm-yoneda-product-is-associative-and-unital\n\n  3 rows · axes: degenerate, nonempty-choice, zero\n    \"The finite elimination in 2.1–2.2 handles degree zero and zero complexes; step 4.1 uses DC for comparisons and explicit signed total homotopies for independence…\"\n    items: thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic\n\n  3 rows · axes: degenerate, nonempty-choice, zero\n    \"Step 1.1 licenses the projection using AC and projectivity; sigma(f)=[f q pi] in 2.1–3.1 is linear and a section, including G=0, C=0 and zero cycle/boundary gro…\"\n    items: thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally\n\n  3 rows · axes: degenerate, empty, zero\n    \"Step 5.1 includes empty sums and zero modules; the LES and free kernel computation remain valid.\"\n    items: lem-the-kunneth-tor-map\n\nCONTRADICTED DISPOSITIONS — none found by the three detectors.\n\nUPHELD BY REVIEW — 7 row(s) an Alpha read and kept, with reasons on the record:\n  cor-countable-independent-copies-exist  [empty]  by alpha-contract-audit-8: The independent family is a sequence indexed by the natural numbers, so its index set is fixed and nonempty; no empty-fa\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": [
        "cor-countable-independent-copies-exist"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "cor-countable-independent-copies-exist",
      "scope": "run",
      "owner": "h"
    }
  ],
  "assigned_items": [
    {
      "id": "cor-countable-independent-copies-exist",
      "scope": "run",
      "owner": "h"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **h**, run `frontier-31a`

You are the group Alpha for batches **4**, **15**: 2 A/B pair(s), 4 page(s), 43 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-h-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-31a-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `infinite-product-measures-and-kolmogorov-extension` | A | probability | 288.101 | `independence-borel-cantelli-and-zero-one-laws-examples`, `complete-metrizability-and-baire` |
| 4 | `infinite-product-measures-and-kolmogorov-extension-examples` | B | probability | 288.102 | `infinite-product-measures-and-kolmogorov-extension` |
| 15 | `the-structural-criterion-for-property-star` | A | combinatorics | 433 | `property-star-and-comb-outcomes` |
| 15 | `the-structural-criterion-for-property-star-examples` | B | combinatorics | 434 | `the-structural-criterion-for-property-star` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `infinite-product-measures-and-kolmogorov-extension` — Infinite Product Measures and Kolmogorov Extension (21 item(s))

- `def-coordinate-maps-and-cylinder-sigma-algebra` · definition — Coordinate maps, finite-coordinate cylinders, and the cylinder $\sigma$-algebra
- `lem-finite-coordinate-cylinders-form-a-pi-system` · lemma — Finite-coordinate cylinders form a $\pi$-system
- `lem-finite-coordinate-cylinder-sets-form-an-algebra` · lemma — Finite-coordinate cylinder sets form an algebra
- `def-consistent-family-of-finite-dimensional-distributions` · definition — A consistent family of finite-dimensional distributions
- `lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined` · lemma — Consistent finite-dimensional laws define a well-defined finitely additive cylinder law
- `lem-countable-product-cylinder-premeasure-is-countably-additive` · lemma — The countable-product cylinder premeasure is countably additive
- `thm-countable-product-of-probability-spaces` · theorem — Assuming countable and dependent choice, countable products of arbitrary probability spaces
- `cor-coordinate-random-elements-on-a-countable-product-are-independent` · corollary — Coordinate random elements of a countable product are independent
- `cor-countable-independent-copies-exist` · corollary — Countably many independent copies of a prescribed law exist
- `def-stochastic-process-and-finite-dimensional-distributions` · definition — Stochastic processes and their finite-dimensional distributions
- `def-law-modification-and-indistinguishability-of-processes` · definition — Process law, modification, and indistinguishability
- `def-standard-borel-space` · definition — Standard Borel spaces
- `lem-finite-products-of-standard-borel-spaces-are-standard-borel` · lemma — Finite products of standard Borel spaces are standard Borel
- `thm-borel-probability-measures-on-polish-spaces-are-inner-regular` · theorem — Assuming countable choice, Borel probability measures on Polish spaces are inner regular
- `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces` · theorem — Assuming the Axiom of Choice, Kolmogorov extension for arbitrary families of standard Borel coordinate spaces
- `cor-arbitrary-product-measure-for-standard-borel-probability-spaces` · corollary — Arbitrary products of standard Borel probability spaces
- `cor-canonical-process-realizes-consistent-finite-dimensional-laws` · corollary — The canonical coordinate process realizes consistent finite-dimensional laws
- `thm-a-process-law-on-cylinder-space-is-determined-by-finite-dimensional-distributions` · theorem — Finite-dimensional distributions determine a process law on the cylinder sigma-algebra
- `lem-cylinder-sigma-events-depend-on-countably-many-coordinates` · lemma — Assuming countable choice, cylinder-measurable events depend on only countably many coordinates
- `rem-cylinder-sigma-algebra-versus-full-product-power-set` · remark — The cylinder sigma-algebra need not be the full path-space power set
- `rem-kolmogorov-extension-state-space-boundary` · remark — State-space and index-set boundaries of the two extension routes

### `infinite-product-measures-and-kolmogorov-extension-examples` — Infinite Product Measures and Kolmogorov Extension — Examples (8 item(s))

- `ex-infinite-coin-toss-space` · example — The infinite fair-coin-toss space
- `ex-iid-sequence-with-a-prescribed-law` · example — An i.i.d. sequence with a prescribed law
- `ex-independent-but-not-identically-distributed-coordinate-sequence` · example — Independent but non-identically distributed coordinates
- `ex-canonical-random-walk-from-product-increments` · example — A canonical random walk from product increments
- `ex-uncountable-bernoulli-coordinate-process` · example — An uncountable Bernoulli coordinate process
- `cex-modification-need-not-be-indistinguishable` · counterexample — A modification need not be indistinguishable
- `cex-consistent-marginals-alone-do-not-specify-joint-laws` · counterexample — One-dimensional marginals alone do not specify a joint law
- `cex-a-noncylinder-path-functional-may-fail-measurability` · counterexample — A noncylinder path functional may fail to be measurable

### `the-structural-criterion-for-property-star` — The Structural Criterion for Property (*) (10 item(s))

- `def-structural-comb-partition-hypothesis` · definition — The structural comb-partition hypothesis
- `lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set` · lemma — A large Y-part in a structural comb partition yields the clique-or-stable-set outcome
- `lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade` · lemma — A transversal of wide structural blocks yields the pure blockade outcome
- `lem-no-property-star-outcome-forces-a-small-structural-block-partition` · lemma — Failure of the first and third property-(*) outcomes forces one small-block structural partition
- `def-integral-geometric-layers-of-a-decreasing-block-partition` · definition — Integral geometric layers of a decreasing block partition
- `lem-integral-geometric-layers-have-rounded-cutoff-bounds` · lemma — Integral geometric layers exist, cover the partition, and retain the required cutoff bounds
- `lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades` · lemma — Homogeneous sets in pure-blockade patterns lift to complete or anticomplete blockades
- `lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade` · lemma — A wide integral geometric layer forces the complete-or-anticomplete property-(*) blockade
- `lem-successive-small-integral-geometric-layers-contradict-a-large-x-part` · lemma — Successive small integral geometric layers contradict a large X-part
- `thm-the-structural-comb-partition-criterion-implies-property-star` · theorem — The structural comb-partition criterion implies property (*)

### `the-structural-criterion-for-property-star-examples` — The Structural Criterion for Property (*) — Examples (4 item(s))

- `ex-a-large-y-part-in-a-structural-comb-partition` · example — A large Y-part in a structural comb partition
- `ex-a-wide-transversal-in-four-structural-comb-partitions` · example — A wide transversal in four structural comb partitions
- `ex-integral-geometric-layers-for-fourteen-ordered-blocks` · example — Integral geometric layers for fourteen ordered blocks
- `cex-omitting-cross-block-purity-breaks-the-transversal-conclusion` · counterexample — Omitting cross-block purity breaks the transversal conclusion

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

3 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-35bd272d56c5d8470dbbb80f · `thm-borel-probability-measures-on-polish-spaces-are-inner-regular`** (from group h, gap-a-reader-closes) — Proof 2.1 says that, after replacing each nonempty closed-ball cover member by a point of K_0 and “doubling the radius,” it obtains a finite net. If y and the selected centre p both lie in a closed ball of radius delta, the triangle inequality gives d(y,p)<=2 delta, whereas a net uses an open ball and requires a strict bound. Choosing the original scale strictly below the requested net radius, or using a larger radius, closes this, but the written inference is not valid as stated.
- **s8a-9bc2614340836ba932fd9836 · `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`** (from group h, gap-a-reader-closes) — Proof 2.1 invokes successive convergent-subsequence extraction and a diagonal limit from the compact finite-coordinate bases, but its cited facts establish only finite products being standard Borel and inner regularity. It does not state or cite the needed compact-metric sequential compactness/diagonal argument, nor explicitly transport those compact bases to compatible Polish product presentations. This is the central compactness step in the asserted continuity-at-empty-set proof.
- **s8a-7ee11d610f1a1f5ac356d7f1 · `ex-a-large-y-part-in-a-structural-comb-partition`** (from group h, gap-a-reader-closes) — Verification 1.1 says [F1] yields a clique or stable set of size at least (16/2)^(1/2)=sqrt(8). But [F1] cites the large-Y lemma whose stated conclusion is only at least w^(c/2), which here is 2. The stronger sqrt(8) bound appears in that lemma's proof, not its Statement, and this example supplies no separate Erdős–Hajnal fact from which to derive it.

Append one owning-group disposition per warning to `research/frontier-31a-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-31a-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-31a`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
