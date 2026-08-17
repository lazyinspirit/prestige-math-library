# Step 6c — cross-batch and cross-level citation audit, run `frontier-15`

**Role:** lead Alpha · **Lane:** `6c-lead` · Claude Opus 5, `xhigh`, 1,000,000-token window
**Date:** 2026-08-17 · **Scope:** all 7 batches, 16 pages, 392 items
**Artifacts written:** this file, `research/frontier-15-impact.json`,
`research/frontier-15-spine-audit.json`, six repaired items and their four owning
batch contracts, six rows in `research/defect-ledger.jsonl`
(`f15-6c-001` … `f15-6c-006`).

Working analysis kept for the record: `research/frontier-15-6c-edges.mjs`
(edge inventory), `research/frontier-15-6c-pairs.mjs` (citation-versus-statement
pairing), `research/frontier-15-6c-edges.json` (the computed edge set).

---

## 1. The edge inventory, computed from disk

Every `deps`, `forward_refs` and `justified_by` edge out of every one of the 392
in-flight items, classified by resolving each target through the library page
files rather than through `plan-spec.json` alone — the spec's item lists do not
cover the legacy foundational pages, and resolving against the spec first made
26 live published targets read as unresolved.

| class | edges |
|---|---|
| same page | 528 |
| same batch, A→B inside the pair | 141 |
| **cross-batch, inside the run** | **0** |
| **cross-level, into published pages** | **740** |
| unresolved / target file absent | 0 |

740 cross-level edges reach **347 distinct published items** across **75
published pages**: 139 theorems, 124 definitions, 34 corollaries, 32 lemmas, 16
propositions, 1 remark, 1 false statement.

Structural checks, all over the full 1409 edges:

- **0** dep edges whose target page is outside the citing page's `requires`
  closure.
- **0** plan-order violations (no target page has order ≥ its citing page's).
- **0** dep targets whose `provenance.statement` is `ai-generated` (19 in-run
  items carry that label; none is a dependency target).
- **0** declared forward references. `fwdcheck.mjs` passes corpus-wide.
- **1** `proved_here: false` edge, audited in §4.
- `depcheck` on the run's 392 items: **0** findings (the warnings it prints are
  all on legacy published items outside this run). `citecheck`: clean over 392.

## 2. Cross-batch citations — zero, and why that is the correct number

The brief warns that a zero cross-batch edge list is a finding rather than a
clean bill. Here it is forced by the plan, and I checked that rather than
assuming it.

**No A page in this run declares another run A page in its `requires`.** The
eight pairs sit at orders 57.005, 70, 98, 108, 288.001, 295, 309 and 365.005,
and every `requires` entry on every one of them names a *published* page. A
cross-batch citation would therefore be an undeclared-prerequisite error, not an
omission — which is what "one dependency level" means: pages sharing a level are
provably mutually independent (`LEVELS.md` §"Author the whole level at once").

So the live question is not "is a citation missing" but "does any pair duplicate
another pair's mathematics, or sit at the wrong order". I screened it: normalised
statement/definition text for all 392 items, Jaccard overlap on content words for
every cross-batch pair (about 66,000 comparisons). **The highest cross-batch
overlap in the run is 0.219** — `def-normal-closure-of-an-algebraic-extension`
against `thm-generated-sigma-algebra-exists-and-is-minimal`, which is shared
"smallest object containing" vocabulary and not shared mathematics. Nothing is
near a duplication threshold.

I also read the three specific rhymes the `2-assign` rationale named:

- **batch 4 σ-algebra generation ↔ batch 7 closure-operator monad.**
  `thm-generated-sigma-algebra-calculus` and
  `thm-monads-on-a-preorder-are-exactly-closure-operators` are the same
  monotone-extensive-idempotent shape in two categories. Neither cites the other
  and neither could; batch 7's item is proved from `def-monad` and the preorder
  proposition, batch 4's from the σ-algebra axioms. No shared lemma is being
  re-proved — the abstraction that would unify them (a closure operator on a
  powerset) is developed in batch 7 only, and batch 4 never needs it.
- **batch 5 degree map ↔ batch 6 winding.** `thm-degree-map-on-the-circle-is-a-homomorphism`
  and `cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral`
  are the homotopy-side and integration-side witnesses that the punctured plane
  is not simply connected. Batch 6's counterexample computes
  $\oint z^{-1}\,dz = 2\pi i$ from the published
  `thm-circle-integrals-of-integer-monomials`; it makes no appeal to degree, and
  a citation into batch 5 would be illegal (order 295 vs 309 is fine, but
  `goursat-…` does not declare `the-fundamental-group-of-the-circle` and should
  not: the Goursat development is genuinely independent of covering-space theory).
  Recorded as a deliberate non-edge, not a gap.
- **batch 1 unit-group / finite-field facts ↔ batches 2–3.** Batch 1 gets every
  such fact from published pages (`primitive-roots-and-unit-groups-modulo-n`,
  `congruences-and-the-chinese-remainder-theorem`,
  `cosets-and-lagranges-theorem`), never by re-deriving in prose something batch 2
  or 3 establishes. Checked item by item over batch 1's 42 non-definition
  cross-level citations.

**The seam the dispatch named — batch 2's Sylow index-$p$ existence item.**
`thm-index-p-subgroup-existence-in-finite-p-groups` is cited by nothing in
`items/`; only its own page lists it, so it does serve a future page. It **is**
stated in the existence form: title and Statement both read "Every nontrivial
finite $p$-group has a normal subgroup of index $p$", which is what a later
page will want to quote. Its route is sound (maximal proper subgroup exists by
finiteness and nontriviality; `thm-maximal-subgroups-of-finite-nilpotent-groups`
makes it normal of prime index; Lagrange forces the prime to be $p$). Two
cosmetic nits, neither repaired: the variable $M$ is used in steps 2.1 and 3.1
without being named in step 1.1, and step 1.1 lists all three facts as inputs
where it uses only finiteness.

**The seam the dispatch named — batch 3's closure machinery.** Confirmed
unreached: 0 cross-batch edges into `algebraic-closure-embeddings-and-separability`,
and no other run page declares it.

## 3. Cross-level citations — what I read

For **every one of the 448 cross-level citations whose target is a theorem,
lemma, proposition or corollary** (202 citing items), I put the citing
`[F#]`/`[A#]`/`[L#]` line beside the cited item's own statement section and read
the pair. Where the statement was long enough that my extract truncated it, I
opened the item — that mattered at least once: `thm-generalised-associativity`
looked like it was cited for a permutation law it does not state, until clause 3
of its statement turned out to be exactly that law.

For the **292 cross-level citations of definitions** I did not read all 292 pairs
in full. I screened them mechanically for the failure mode that matters — a
definition citation that carries an added inferential clause — by extracting
every fact line naming a definition target and containing *hence / therefore /
consequently / in particular / thus / it follows*. That returned **22
candidates**, and I read all 22. Every one is a faithful transcription of the
definition followed by an immediate consequence that **names its own source**
("the intersection is a submodule by `lem-submodule-criterion-sums-and-intersections`",
"each term is characteristic, hence normal, by
`thm-derived-subgroup-is-characteristic-and-abelianization-is-universal`"). That
is the correct pattern and none was a defect.

Detector sweeps over the 279 items carrying cross-level dependencies:

- `citation-faithfulness-screen.mjs` — 42 candidates over 279 items; all read.
  One was a real defect (`f15-6c-004`, below); the rest are bound-variable and
  `\mathbb{}` noise, which is what the tool's own header predicts.
- `truncated-citation.mjs` — 16 candidates in 15 items; all read. All quote the
  operative clause and stop, which is a legitimate short restatement. The one
  genuinely truncated citation in the run (`f15-6c-001`) is **not** among them,
  for the reason recorded in its ledger row: it paraphrases before truncating, so
  it is not a prefix and the ratio heuristic cannot see it.

### Defects found, all repaired

Five of the six are inflations or omissions in a Facts line that misstate what a
published item says. In every case the *item's* mathematics was sound and, in
two cases, the *contract's* recorded quote was already correct — the defect lived
only in the reader-facing fact line. No gate compares those two strings, which is
the mechanical gap all six rows record.

| id | item | defect | severity |
|---|---|---|---|
| `f15-6c-001` | `cor-classification-of-groups-of-order-one-hundred-five` | [L11] ends mid-clause at "and the resulting map." — the biconditional has no consequent, so step 3.1's $G\cong C_5\times H$ has no support | **fatal** |
| `f15-6c-002` | `thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup` | [L4] appends `\le H` to `\ker\rho=\operatorname{Core}_G(H)`, which `thm-left-coset-action-and-its-kernel` does not state; load-bearing at step 3.1 | nonfatal |
| `f15-6c-003` | `thm-one-step-simultaneous-root-extension` | [L4] reads "is finite, and therefore algebraic"; the source states finiteness only, and step 4.1 needs the algebraicity | nonfatal |
| `f15-6c-004` | `thm-monads-on-a-preorder-are-exactly-closure-operators` | [L1] attributes the natural-transformation criterion $Fp\le Gp$ to a proposition stating only that functors between preorders are monotone maps | nonfatal |
| `f15-6c-005` | `ex-the-ultrafilter-monad-on-a-finite-set` | [L3] restates `thm-ultrafilter-lemma` without its "Assume the Axiom of Choice" hypothesis | nonfatal |
| `f15-6c-006` | `cex-connected-domain-need-not-be-star-shaped` | [L1] cites `lem-punctured-rn-is-polygonally-connected` for $\mathbb R^n\setminus\{p\}$; the source states $\mathbb R^n\setminus\{0\}$. Not load-bearing (the use is $p=0$) | nonfatal |

`f15-6c-001` is the fatal one because it is the only defect where the fact line
says **less** than its source rather than more: it licenses nothing at all, and a
reader cannot close "and the resulting map." without opening the cited item. The
other five state a true extra clause that a competent reader closes in seconds
from a dependency already in scope — nonfatal under the 30-second rule, and
repaired here because at 6c a repair costs an edit and no verdict exists to void.

Every repair restores the source's wording and, where the extra clause was
load-bearing, adds the fact that actually establishes it:

- `f15-6c-002` — new `[L13]` citing the published
  `lem-core-is-largest-normal-subgroup-contained` (which states $K\le H$
  outright), added to `deps` and to step 3.1's input list.
- `f15-6c-003` — new `[L6]` citing the published
  `thm-finite-field-extensions-are-algebraic`, added to `deps`; step 4.1 now
  splits finiteness and algebraicity across [L4] and [L6].
- `f15-6c-004` — the criterion is now derived inline in step 1.1 from the
  at-most-one-morphism clause the cited proposition *does* state.

Gates re-run on all six: `precheck` 6/6 pass, `depcheck` 0 findings on the run,
`citecheck` clean, `rendercheck` clean over all 392. The four owning batch
contracts (`batch-2`, `batch-3`, `batch-6`, `batch-7`) were regenerated with
`regen-contract-entries.mjs`, not hand-edited, and the merged file was rebuilt
from the batch files afterwards. No `verification.judge` block existed on any of
them — step 7 has not run — so nothing was voided.

### Published dependencies: nothing repaired

I found no unambiguous falsehood in any published item this level cites.
`research/frontier-15-published-dependency-repairs.md` is therefore not created,
and no certification is owed.

## 4. The `proved_here: false` fallback

One edge: `fs-the-borel-hierarchy-closes-after-two-steps` →
`rem-the-borel-hierarchy-never-stabilizes` (batch 4, B page).

The `external_dependency` block is complete and concrete, not templated:
`source_url` matches one of the item's `sources.references` URLs (Marker,
*Descriptive Set Theory*, Corollary 2.38); `exact_statement` reproduces the
strictness of the Borel hierarchy for uncountable Polish spaces;
`local_proof_attempt` names the specific obstruction (the diagonal proof needs
universal Borel sets, which this level does not develop, and cardinality cannot
separate the levels); `necessity` explains that strictness is exactly the missing
premise for refuting stabilisation and that the companion page is a dependency
leaf. `deps: []` with the citation carried by the `fs-` item is the right shape —
it is a real `deps` edge from the consumer, not an `external_refs` mention.
`extcheck.mjs` passes.

## 5. Gate results

Run in the order the dispatch specifies, after the repairs:

```
merge-proof-contracts   324 scoped items from 7 batch contracts        ok
proof-contract --strict 0 errors, 0 warnings, 324/324 checked          ok
finite-smoke            0 errors, 4 checks over 4/324 carrying obligations
risk-report --require-reviewed   0 errors, 324 items routed            ok
boundary-audit --fail-on-contradicted --fail-on-template   exit 0
citation-fidelity --fail-on-missing-quote                  exit 0
gate-liveness           4 probes live, 0 skipped                       ok
spine-audit --receipt   58 items, receipt accepted                     ok
impact-audit --receipt  392 interfaces, 347 dispositions, accepted     ok
```

Two notes on those lines, because a green line that checked little is worth
saying out loud:

- **`finite-smoke` ran 4 checks over 4 of 324 items.** That is the known vacuity
  concern; it is not a failure of this stage's gate but it is not coverage
  either. It was already routed to the contract-audit Alpha earlier in the run
  (`research/frontier-15-alpha-contract-audit.md`), and I did not re-open it.
- **`gate-liveness` reports `coverage-checklist` as skipped unless the seven
  batch checklists are passed explicitly.** Bare, it exits 1 on that skip, which
  is correct behaviour. Passed the seven `--checklists`, all four probes are live
  (740 harvested results) and it exits 0. Recording the invocation because the
  bare form is the one that looks like a gate failure and is not.

I also re-ran, to confirm the repairs broke nothing outside their own items:
`validate-plan.mjs research/plan-spec.json` (acyclic, no forward references, no
unresolved ids over 300 pages with item lists), `content-policy.mjs` on the seven
manifests in its **post-authoring** mode (392 items, 0 errors — the
`--manifest-only` form is the pre-authoring shape and correctly rejects ids that
now exist; my first invocation used it by mistake and its 392 errors are an
artefact of that, not a finding), `manifest-integrity.mjs` (16 pages owed, 16
present, no scope drift), and `fwdcheck.mjs` (clean corpus-wide).

## 6. The spine receipt

`research/frontier-15-spine-audit.json`, 58 proof-bearing items among the top 100
transitive dependency cones — the ZF spine (empty set, power set, ordered pairs,
domain and range), the whole natural-number development (recursion, Peano,
addition, multiplication, order, well-ordering, pigeonhole), the integers, the
rationals, and the ordered-field basics. Cones from 5,102 transitive consumers
down to 2,535.

**I read all 58 proofs.** Every attestation is `read` with a note naming that
proof's actual route and the step I checked hardest, not a stock phrase. Nothing
in the spine is wrong. The three places I looked longest:

- `thm-recursion` — the minimal-closed-relation construction. Both minimality
  contradictions (2.2 at 0 via P1, 4.1 at $\sigma(n)$ via P2 and the inductive
  uniqueness) actually verify that the *smaller* relation is still closed, which
  is the step usually asserted.
- `lem-pigeonhole` — claim 1's transposition normalisation at 2.1 is what makes
  the restriction argument work; the single choice at 5.3 is one element from one
  nonempty set, so the proof stays in ZF, as its own text claims.
- `lem-nat-order-is-membership` — the two implications are separate inductions
  and the mixed transitivity they share is proved first from antisymmetry rather
  than assumed.

Three cosmetic observations, none a defect and none repaired: `lem-of-naturals-positive`
step 2.2 writes an induction as a one-line "iterating 1.3"; `lem-of-sign-rules`
steps 3.1 and 4.1 list `lem-of-zero-mult` as an input the written argument does
not use; `lem-of-q-embeds` overloads the name $\iota$ for the integer and
rational maps, which reads awkwardly at step 3.1 but resolves consistently.

## 7. The impact receipt

`research/frontier-15-impact.json`, generated from the engine's own snapshots,
`pre-author → post-6b`, then validated with `--receipt` against exactly that
computed scope: **392 changed interfaces, 347 required reviews, 347
dispositions, accepted.**

Every disposition names the actual changed interfaces that consumer cites, their
count and their shape (same page / same batch), and states what was verified from
disk at 6c — target resolves to a file, target page is the consumer's own page or
in its `requires` closure, target page order strictly below, no target statement
`ai-generated` — and attributes the *semantic* reading of those in-batch edges to
the 6a reader and the owning group Alpha at 6b, which is where it was actually
done. I did not claim to have re-read 347 in-batch proofs; 6c's reading is the
cross-batch and cross-level layer plus the closure check.

Five of the six items I repaired appear in the queue and carry status `repaired`
with the repair named. The sixth, `cex-connected-domain-need-not-be-star-shaped`,
is not in `required_review` (nothing in the run consumes it), so its repair is
recorded here and in its ledger row only.

342 rows are `still-licensed`, 5 are `repaired`, 0 are `not-load-bearing`, 0
pending. Five consumers cite no changed interface by a `deps` edge — they are in
the queue as interfaces changed in the window rather than as consumers — and
their notes say exactly that rather than dressing them as reviewed edges.

## 8. Page-level contracts

All eight A-page summaries are **exactly two nonempty prose paragraphs**, every
paragraph under 150 words: 75/93, 46/57, 49/60, 54/82, 66/69, 63/71, 61/67,
60/87. All eight B pages have **no authored body at all**. No summary carries a
count, a self-ranking or a claim about another page.

## 9. What I did NOT check

Stated plainly, because a receipt that hides its edges is worse than none.

1. **The 141 same-batch A→B edges and the 528 same-page edges** were not
   semantically re-read here. They are 6a/6b scope, they were read by the
   independent reader and adjudicated by the owning group Alpha, and I verified
   them only structurally (target resolves, order, closure, provenance
   eligibility).
2. **The 292 cross-level definition citations** were screened, not read pair by
   pair. The screen was aimed at the one failure mode that matters for a
   definition citation — an added inferential clause — and I read all 22
   candidates it returned. A definition citation that is simply *wrong about the
   definition*, with no inferential marker, would not have been caught by that
   screen.
3. **Proof interiors of the 392 in-flight items.** 6c reads citation edges, not
   whole proofs. Where a citation defect forced me into a proof I read that proof
   (the two order-105 items, the Artin root extension, the preorder monad, the
   finite ultrafilter monad, the star-shaped counterexample), and I read
   `thm-index-p-subgroup-existence-in-finite-p-groups` in full because the
   dispatch named it.
4. **Harvest faithfulness (6b.0)** — not re-opened at 6c. That is the group
   Alphas' step-6b check against the sources at their stated locators.
5. **`finite-smoke` coverage.** 4 of 324 items carry smoke obligations. I did not
   extend that coverage and did not re-adjudicate the earlier contract-audit
   Alpha's conclusions about it.
6. **Judge verdicts.** Step 7 has not run; there are no verdicts to compare and
   `level-coverage --verify-current-context` is not due at this stage. I did not
   run it, because it would fail on absent judge rows and that failure would say
   nothing about 6c.

## 10. Observations for the owner, not repaired

**A house-voice deviation, 90 items wide.** 90 of the run's 392 items end their
Statement/Definition with a bare pointer of the form "See [[some-id]]" — e.g.
`thm-index-p-subgroup-existence-in-finite-p-groups`: *"Every nontrivial finite
$p$-group has a normal subgroup of index $p$. See [[thm-finite-p-groups-are-nilpotent]]."*
In the published corpus that pattern appears in **9 of 4,935 items**. So this run
uses it at roughly 23% against a legacy baseline of 0.18%.

It is not a correctness defect and I did not repair it: `depcheck` reports **0**
`cited-not-in-deps` on the run, so every pointer is a properly declared citation
and renders as one. But it is a visible stylistic shift in 90 published pages'
worth of statements, applied by more than one Beta, and it is the owner's call
whether the library's Statements should carry trailing "See X" pointers at all.
Fixing it later is 90 real edits; fixing it before step 7 would cost nothing
beyond the edits themselves. Flagging it now rather than at step 10 for exactly
that reason.

**No defect-ledger row was written for it**, deliberately: it fits none of the
four defect classes, and filing it as an accuracy defect would corrupt the
statistic the ledger exists to make queryable.

## 11. Status

Step 6c is complete. Six citation defects found, six repaired, six ledger rows
written in the same act as their dispositions. Both receipts generated, filled
with real per-item content and validated against their own computed scopes. All
nine dispatch-specified gates green, plus five confirmation gates.

Nothing at 6c blocks step 7. Nothing here flips a `status` field.
