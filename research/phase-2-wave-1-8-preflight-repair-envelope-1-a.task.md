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
  "group": "a",
  "full_evidence": "research/phase-2-wave-1-8-preflight-repair-evidence-1-e9337a6b68f654e350c05c1214979af4333ebf254eb5b6ed84008ef14ef467c7.json",
  "full_evidence_sha256": "e9337a6b68f654e350c05c1214979af4333ebf254eb5b6ed84008ef14ef467c7",
  "failures": [
    {
      "id": "proof-contract",
      "stage": "8-preflight",
      "why": "ERROR citation-quote-mismatch [lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree]: F1 quote does not occur in def-free-presentation-lyndon-bar-bicomplex-and-edge-maps's Definition",
      "output": "proof-contract: 15 error(s), 0 warning(s), 402/402 item(s) checked\nERROR citation-quote-mismatch [lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree]: F1 quote does not occur in def-free-presentation-lyndon-bar-bicomplex-and-edge-maps's Definition\nERROR citation-quote-mismatch [lem-hall-malcev-finite-collection-alphabets-include-torsion-carries]: F1 quote does not occur in lem-finite-lower-central-coordinate-systems-exist's Statement\nERROR citation-quote-mismatch [lem-weighted-collection-in-lower-central-coordinates]: F4 quote does not occur in lem-finite-lower-central-coordinate-systems-exist's Statement\nERROR citation-quote-mismatch [lem-weighted-coordinate-boxes-give-matching-growth-bounds]: F1 quote does not occur in lem-finite-lower-central-coordinate-systems-exist's Statement\nERROR citation-quote-mismatch [cex-torsion-free-nilpotent-group-with-torsion-in-abelianization]: F2 quote does not occur in lem-finite-lower-central-coordinate-systems-exist's Statement",
      "named_ids": [
        "lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree",
        "lem-hall-malcev-finite-collection-alphabets-include-torsion-carries",
        "lem-weighted-collection-in-lower-central-coordinates",
        "lem-weighted-coordinate-boxes-give-matching-growth-bounds",
        "cex-torsion-free-nilpotent-group-with-torsion-in-abelianization"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-hall-malcev-finite-collection-alphabets-include-torsion-carries",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-weighted-collection-in-lower-central-coordinates",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-weighted-coordinate-boxes-give-matching-growth-bounds",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-torsion-free-nilpotent-group-with-torsion-in-abelianization",
      "scope": "run",
      "owner": "a"
    }
  ],
  "assigned_items": [
    {
      "id": "lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-hall-malcev-finite-collection-alphabets-include-torsion-carries",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-weighted-collection-in-lower-central-coordinates",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-weighted-coordinate-boxes-give-matching-growth-bounds",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-torsion-free-nilpotent-group-with-torsion-in-abelianization",
      "scope": "run",
      "owner": "a"
    }
  ],
  "fatal_repair_licences": [],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **a**, run `phase-2-wave-1`

You are the group Alpha for batches **1**, **3**, **6**: 4 A/B pair(s), 8 page(s), 82 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/phase-2-wave-1-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 1 | `small-cancellation-disc-diagrams-and-torsion-toolkit` | A | group-theory | 71.0142 | `free-groups-and-presentations`, `free-products-and-amalgamation`, `hnn-extensions-and-brittons-lemma` |
| 1 | `small-cancellation-disc-diagrams-and-torsion-toolkit-examples` | B | group-theory | 71.0144 | `small-cancellation-disc-diagrams-and-torsion-toolkit` |
| 3 | `modular-traces-and-brauer-character-independence` | A | group-theory | 150.0021 | `modular-representations-and-projective-covers`, `the-group-algebra-and-representations`, `chain-conditions-and-semisimple-modules` |
| 3 | `modular-traces-and-brauer-character-independence-examples` | B | group-theory | 150.0022 | `modular-traces-and-brauer-character-independence` |
| 3 | `group-homology-transfer-and-low-degree-exact-sequences` | A | group-theory | 365.0721 | `chain-complexes-and-homology`, `group-cohomology-as-a-derived-functor`, `free-groups-and-presentations`, `group-extensions-complements-and-schur-zassenhaus` |
| 3 | `group-homology-transfer-and-low-degree-exact-sequences-examples` | B | group-theory | 365.0722 | `group-homology-transfer-and-low-degree-exact-sequences` |
| 6 | `hall-malcev-coordinates-and-bass-guivarch-growth` | A | group-theory | 302.0022 | `cayley-graphs-word-metrics-and-quasi-isometry`, `composition-series-and-solvable-groups`, `modules-over-a-pid-and-canonical-forms` |
| 6 | `hall-malcev-coordinates-and-bass-guivarch-growth-examples` | B | group-theory | 302.0024 | `hall-malcev-coordinates-and-bass-guivarch-growth` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `small-cancellation-disc-diagrams-and-torsion-toolkit` — Small-Cancellation Disc Diagrams and the Torsion Toolkit (17 item(s))

- `def-sc-toolkit-symmetrised-relators-and-pieces` · definition — Sc toolkit symmetrised relators and pieces
- `def-sc-toolkit-labelled-planar-disc-diagram` · definition — Sc toolkit labelled planar disc diagram
- `thm-sc-toolkit-van-kampen-existence` · theorem — Sc toolkit van kampen existence
- `lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction` · lemma — Sc toolkit minimal diagrams and cut vertex reduction
- `def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram` · definition — Arc reduction and combinatorial curvature of a disc diagram
- `lem-internal-arcs-of-a-reduced-small-cancellation-diagram-are-pieces` · lemma — Internal arcs of a reduced small cancellation diagram are pieces
- `lem-c-prime-one-sixth-interior-faces-have-at-least-seven-arcs` · lemma — C prime one sixth interior faces have at least seven arcs
- `lem-euler-curvature-identity-for-an-arc-reduced-disc-diagram` · lemma — Euler curvature identity for an arc reduced disc diagram
- `lem-boundary-spur-or-at-most-three-shell-from-curvature` · lemma — Boundary spur or at most three shell from curvature
- `thm-greendlinger-shell-existence-from-the-curvature-count` · theorem — Greendlinger shell existence from the curvature count
- `def-minimal-cyclic-power-diagram-and-relator-root` · definition — Minimal cyclic power diagram and relator root
- `lem-sc-toolkit-commuting-positive-words-have-a-common-root` · lemma — Sc toolkit commuting positive words have a common root
- `lem-sc-toolkit-periodic-relator-overlap-is-a-piece` · lemma — Sc toolkit periodic relator overlap is a piece
- `def-sc-toolkit-cyclically-dehn-reduced-word` · definition — Cyclically Dehn-reduced words
- `lem-sc-toolkit-periodic-word-square-alternative` · lemma — Periodic words: a relator root or Dehn-reduced powers
- `lem-minimal-power-diagram-has-a-periodic-boundary-shell` · lemma — A shortest finite-order representative shares a word root with a relator
- `thm-c-prime-one-sixth-torsion-elements-come-from-relator-roots` · theorem — C prime one sixth torsion elements come from relator roots

### `small-cancellation-disc-diagrams-and-torsion-toolkit-examples` — Small-Cancellation Disc Diagrams and the Torsion Toolkit: Examples (4 item(s))

- `ex-curvature-ledger-for-a-two-cell-diagram` · example — Curvature ledger for a two cell diagram
- `ex-a-three-shell-after-arc-reduction` · example — A three shell after arc reduction
- `ex-relator-root-versus-proper-power` · example — Relator root versus proper power
- `cex-a-boundary-spur-when-free-reduction-is-omitted` · counterexample — A boundary spur when free reduction is omitted

### `modular-traces-and-brauer-character-independence` — Modular Traces and Brauer-Character Independence (7 item(s))

- `lem-a-finite-dimensional-algebra-separates-its-simple-modules` · lemma
- `lem-modular-trace-functions-of-simple-modules-are-linearly-independent` · lemma
- `lem-modular-trace-depends-only-on-the-p-regular-part` · lemma
- `lem-prime-to-p-roots-lift-uniquely-in-a-complete-discrete-valuation-ring` · lemma
- `def-lifted-modular-trace-on-p-regular-elements` · definition
- `lem-reduction-of-teichmuller-lifted-traces-recovers-modular-traces` · lemma
- `thm-irreducible-brauer-characters-are-linearly-independent-on-p-regular-elements` · theorem

### `modular-traces-and-brauer-character-independence-examples` — Modular Traces and Brauer-Character Independence: Examples (3 item(s))

- `ex-modular-traces-for-a-cyclic-p-prime-group` · example
- `ex-brauer-character-independence-for-s-three-in-characteristic-two` · example
- `cex-ordinary-traces-on-p-singular-elements-do-not-define-brauer-characters` · counterexample

### `group-homology-transfer-and-low-degree-exact-sequences` — Group Homology Transfer and Low-Degree Exact Sequences (21 item(s))

- `lem-diagonal-bar-coinvariants-compute-group-homology` · lemma
- `def-finite-index-transfer-on-normalized-bar-chains` · definition
- `lem-bar-transfer-is-a-chain-map-and-choice-independent-up-to-chain-homotopy` · lemma
- `lem-corestriction-after-bar-transfer-is-index-multiplication-on-homology` · lemma
- `thm-positive-degree-integral-homology-of-a-finite-group-is-annihilated-by-its-order` · theorem
- `lem-bar-first-integral-homology-is-the-abelianization` · lemma
- `lem-free-group-augmentation-ideal-has-the-generator-difference-basis` · lemma
- `lem-low-degree-filtration-sequence-for-a-first-quadrant-bicomplex` · lemma
- `def-free-presentation-lyndon-bar-bicomplex-and-edge-maps` · definition
- `lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree` · lemma
- `thm-free-presentation-homology-five-term-sequence` · theorem
- `def-crossed-homomorphisms-principal-coboundaries-and-first-cohomology` · definition
- `def-degree-one-restriction-inflation-and-quotient-action` · definition
- `lem-degree-one-maps-and-quotient-action-are-well-defined` · lemma
- `thm-degree-one-inflation-restriction-exact-sequence` · theorem
- `lem-bar-two-cocycles-classify-abelian-kernel-extensions` · lemma
- `lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps` · lemma
- `def-low-degree-transgression-for-a-group-extension` · definition
- `lem-transgression-kernel-is-the-image-of-restriction` · lemma
- `lem-kernel-of-degree-two-inflation-is-the-transgression-image` · lemma
- `thm-inflation-restriction-transgression-five-term-sequence` · theorem

### `group-homology-transfer-and-low-degree-exact-sequences-examples` — Group Homology Transfer and Low-Degree Exact Sequences: Examples (3 item(s))

- `ex-transfer-annihilation-for-a-cyclic-group` · example
- `ex-free-presentation-five-term-sequence-for-a-cyclic-group` · example
- `ex-transgression-for-the-integral-heisenberg-extension` · example

### `hall-malcev-coordinates-and-bass-guivarch-growth` — Hall–Mal’cev Coordinates and Bass–Guivarc’h Growth (20 item(s))

- `lem-hall-malcev-integer-abelian-structure-and-rank` · lemma — Integer abelian structure and rank by finite reduction
- `lem-hall-malcev-commutator-product-identities` · lemma — Commutator product identities in the fixed convention
- `lem-hall-malcev-three-subgroup-containment` · lemma — The three-subgroup containment for normal subgroups
- `lem-hall-malcev-lower-central-commutators-add-weights` · lemma — Lower-central commutators add weights
- `lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian` · lemma — Finite generation of lower-central factors
- `lem-hall-malcev-subgroups-of-finitely-generated-nilpotent-groups-are-finitely-generated` · lemma — Subgroups of finitely generated nilpotent groups are finitely generated
- `lem-hall-malcev-torsion-is-a-finite-characteristic-subgroup` · lemma — Finite torsion and the torsion-free quotient
- `lem-hall-malcev-upper-central-factors-are-torsion-free` · lemma — Upper-central factors of a torsion-free nilpotent group
- `lem-hall-malcev-integral-coordinates-from-a-central-cyclic-refinement` · lemma — Integral coordinates from a central cyclic refinement
- `def-bass-guivarch-dimension` · definition — Bass–Guivarc’h dimension and nilpotent Hirsch length
- `def-lower-central-generators-and-weighted-coordinate-length` · definition — Lower-central generators, residue coordinates and weighted length
- `lem-hall-malcev-finite-normal-quotients-preserve-lower-central-ranks` · lemma — Finite normal quotients preserve lower-central ranks
- `lem-growth-is-unchanged-by-quotienting-a-finite-normal-subgroup` · lemma — Finite normal quotients preserve ball growth
- `lem-finite-lower-central-coordinate-systems-exist` · lemma — Finite lower-central coordinate systems with torsion accounted for
- `lem-hall-malcev-finite-collection-alphabets-include-torsion-carries` · lemma — Finite collection alphabets include commutators and torsion carries
- `lem-weighted-collection-in-lower-central-coordinates` · lemma — Weighted collection with finite-order carries
- `lem-hall-malcev-powers-in-the-last-central-term-have-short-words` · lemma — Power compression in the last lower-central term
- `thm-last-lower-central-term-has-exact-weighted-distortion` · theorem — Both bounds for last-term weighted distortion
- `lem-weighted-coordinate-boxes-give-matching-growth-bounds` · lemma — Coordinate boxes and word balls have matching size
- `thm-bass-guivarch-growth-degree-formula-with-proof` · theorem — The Bass–Guivarc’h growth degree formula

### `hall-malcev-coordinates-and-bass-guivarch-growth-examples` — Hall–Mal’cev Coordinates and Bass–Guivarc’h Growth: Examples (7 item(s))

- `ex-bass-dimension-of-a-free-abelian-group` · example — Free abelian groups have degree equal to rank
- `ex-bass-dimension-of-the-discrete-heisenberg-group` · example — The discrete Heisenberg group has growth degree four
- `ex-central-distortion-in-the-discrete-heisenberg-group` · example — The Heisenberg center is quadratically distorted
- `ex-bass-dimension-of-unitriangular-four-by-four-integers` · example — UT_4(Z) has ranks three, two, one and growth degree ten
- `ex-hirsch-length-and-growth-degree-need-not-agree` · example — Hirsch length and growth degree differ
- `cex-counting-every-lower-central-generator-with-weight-one` · counterexample — Weight-one counting misses Heisenberg growth
- `cex-torsion-free-nilpotent-group-with-torsion-in-abelianization` · counterexample — Torsion-free does not mean torsion-free lower-central factors

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

1 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-8cc9b3d3c663bb3f07065c8e · `lem-finite-lower-central-coordinate-systems-exist`** (from group a, gap-a-reader-closes) — The final membership assertion, “an element belongs to γ_k iff all coordinates in layers strictly before k vanish,” is used downstream but is not explicitly proved. Steps 1.2–2.1 establish the normal form; the missing immediate argument is that later-layer lifts lie in γ_i≤γ_k, while projection through the earlier lower-central quotients forces vanishing in the other direction.

Append one owning-group disposition per warning to `research/phase-2-wave-1-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

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
