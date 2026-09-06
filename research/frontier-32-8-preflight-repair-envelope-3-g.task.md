# Exact Step-8 repair envelope — 8-preflight, round 3

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
complete relevant diagnostic records, exact current rejection tuples, and explicit run/published ownership.
The full_evidence file retains the original untruncated battery output and all ownership assignments.
Read its relevant sections if a diagnostic is ambiguous; do not infer absence from this scoped view.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-32",
  "stage": "8-preflight",
  "round": 3,
  "mode": "preflight",
  "group": "g",
  "full_evidence": "research/frontier-32-8-preflight-repair-evidence-3-62fc9959a02345adc947e2750e8eaa846c64f6873afec8b546b2c39e5575bbf0.json",
  "full_evidence_sha256": "62fc9959a02345adc947e2750e8eaa846c64f6873afec8b546b2c39e5575bbf0",
  "failures": [
    {
      "id": "risk-report",
      "stage": "8-preflight",
      "why": "ERROR risk-review-missing [lem-local-logarithmic-derivative-zeta]: lem-local-logarithmic-derivative-zeta is high risk and lacks a complete Alpha risk_review",
      "output": "CRITICAL 8 [lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property] 3:7 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 9 [thm-special-vertex-local-structural-partition-criterion-implies-property-star] 3:18 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs] 2:5 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-h-five-overlap-classes-are-connected] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-purity-on-every-h-five-propagates-along-an-overlap-class] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [lem-h-five-overlap-quotient-iteration-terminates-at-a-pure-blockade] 2:5 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-a-vertex-mixed-on-a-connected-set-mixes-on-an-edge] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 11 [lem-co-e-free-external-purity-survives-h-five-overlap-quotients] 3:13 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nMODERATE 4 [cor-the-singleton-family-containing-e-has-property-star] 3:7 declared dependencies; 1:3 cited facts\nHIGH 7 [lem-terminal-h-five-overlap-quotient-pattern-is-h-five-and-co-e-free] 2:6 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 9 [thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition] 3:11 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [ex-induced-co-e-witnesses-for-both-forbidden-path-runs] no signals\nHIGH 6 [ex-an-h-five-overlap-class-and-its-terminal-quotient] 2:4 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-a-bipartite-four-tooth-comb-has-the-co-e-structural-partition] 2:boundary-sensitive language\nrisk-report: 2 error(s), 478 item(s) routed",
      "named_ids": [
        "lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property",
        "thm-special-vertex-local-structural-partition-criterion-implies-property-star",
        "lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours",
        "lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs",
        "lem-h-five-overlap-classes-are-connected",
        "lem-purity-on-every-h-five-propagates-along-an-overlap-class",
        "lem-h-five-overlap-quotient-iteration-terminates-at-a-pure-blockade",
        "lem-a-vertex-mixed-on-a-connected-set-mixes-on-an-edge",
        "lem-co-e-free-external-purity-survives-h-five-overlap-quotients",
        "cor-the-singleton-family-containing-e-has-property-star",
        "lem-terminal-h-five-overlap-quotient-pattern-is-h-five-and-co-e-free",
        "thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition",
        "ex-induced-co-e-witnesses-for-both-forbidden-path-runs",
        "ex-an-h-five-overlap-class-and-its-terminal-quotient",
        "ex-a-bipartite-four-tooth-comb-has-the-co-e-structural-partition"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-special-vertex-local-structural-partition-criterion-implies-property-star",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-h-five-overlap-classes-are-connected",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-purity-on-every-h-five-propagates-along-an-overlap-class",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-h-five-overlap-quotient-iteration-terminates-at-a-pure-blockade",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-a-vertex-mixed-on-a-connected-set-mixes-on-an-edge",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-co-e-free-external-purity-survives-h-five-overlap-quotients",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-the-singleton-family-containing-e-has-property-star",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-terminal-h-five-overlap-quotient-pattern-is-h-five-and-co-e-free",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-induced-co-e-witnesses-for-both-forbidden-path-runs",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-an-h-five-overlap-class-and-its-terminal-quotient",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-a-bipartite-four-tooth-comb-has-the-co-e-structural-partition",
      "scope": "run",
      "owner": "g"
    }
  ],
  "assigned_items": [
    {
      "id": "lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-special-vertex-local-structural-partition-criterion-implies-property-star",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-h-five-overlap-classes-are-connected",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-purity-on-every-h-five-propagates-along-an-overlap-class",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-h-five-overlap-quotient-iteration-terminates-at-a-pure-blockade",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-a-vertex-mixed-on-a-connected-set-mixes-on-an-edge",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-co-e-free-external-purity-survives-h-five-overlap-quotients",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-the-singleton-family-containing-e-has-property-star",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-terminal-h-five-overlap-quotient-pattern-is-h-five-and-co-e-free",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-induced-co-e-witnesses-for-both-forbidden-path-runs",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-an-h-five-overlap-class-and-its-terminal-quotient",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-a-bipartite-four-tooth-comb-has-the-co-e-structural-partition",
      "scope": "run",
      "owner": "g"
    }
  ],
  "fatal_repair_licences": [
    {
      "id": "ex-an-h-five-overlap-class-and-its-terminal-quotient",
      "model": "gpt-5.6-terra",
      "context_sha256": "1848c86a2c2719f73913368859a9b7b2d7a42217f39b449b2a60b91c4182f396",
      "item_sha256": "f10a29eb0f9b84368c0fc8a0452cc0fd622828a0caac14f8e7796ed851ac3ab0",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "g",
      "at": "2026-09-06T10:31:21.000Z"
    },
    {
      "id": "ex-induced-co-e-witnesses-for-both-forbidden-path-runs",
      "model": "gpt-5.6-terra",
      "context_sha256": "fe93008e9de9970b7d3d23b68b1fc000c91f493b358dd45a99592070a78dc3eb",
      "item_sha256": "f8e7eb613f1cd8c5c9bd63aa6b07cd73d65a600bb2f9ca50830b886535f2affb",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "g",
      "at": "2026-09-06T10:31:21.000Z"
    },
    {
      "id": "lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs",
      "model": "gpt-5.6-terra",
      "context_sha256": "76a798aced76a26945aeb7b9c80d446bfbe868da53848f72ac866d7db51b1a3e",
      "item_sha256": "09e80125ec121491a955256f0e877d58a13dec4765d38aa33aefc3324988a46a",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "g",
      "at": "2026-09-06T10:31:21.000Z"
    },
    {
      "id": "lem-co-e-free-external-purity-survives-h-five-overlap-quotients",
      "model": "gpt-5.6-terra",
      "context_sha256": "1aae5d4db3acc3ee5eb7b178cff8db443d3207cc4b1f64c5e2c663238220693a",
      "item_sha256": "916f72e628bcb33870e087ab6c019616d419e6041f91e3d2aac523167a435f01",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "g",
      "at": "2026-09-06T10:31:21.000Z"
    },
    {
      "id": "lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours",
      "model": "gpt-5.6-terra",
      "context_sha256": "72e446f073a60be3ab730bb29537098a5cd626c5e32d8645e12277885b321b2e",
      "item_sha256": "f5bbddfed727c2f54928f473f0d7257490786adc51addd5d2c4165606542424e",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "g",
      "at": "2026-09-06T10:31:21.000Z"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **g**, run `frontier-32`

You are the group Alpha for batches **13**: 1 A/B pair(s), 2 page(s), 17 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-32-alpha-g-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-32-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 13 | `co-e-free-comb-structure` | A | combinatorics | 437 | `the-structural-criterion-for-property-star`, `quotient-blockades-and-mixing-relations` |
| 13 | `co-e-free-comb-structure-examples` | B | combinatorics | 438 | `co-e-free-comb-structure` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `co-e-free-comb-structure` — Comb Structure in co-E-Free Graphs (14 item(s))

- `lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property` · lemma — The family consisting of $H_5$ and co-$E$ has the Erdős–Hajnal property
- `thm-special-vertex-local-structural-partition-criterion-implies-property-star` · theorem — The special-vertex-local structural-partition criterion implies property (*)
- `lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours` · lemma — Relative to a complete nonedge pair in a co-$E$-free graph, a one-sided vertex mixed on an induced path avoids two consecutive nonneighbours and three consecutive neighbours
- `lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs` · lemma — Relative to a complete nonedge pair in a co-$E$-free graph, every one-sided vertex is pure to an induced $H_5$
- `def-h-five-overlap-chain-relation-in-a-comb-block` · definition — The $H_5$-overlap-chain relation in one comb block
- `lem-h-five-overlap-classes-are-connected` · lemma — Every $H_5$-overlap class is connected
- `lem-purity-on-every-h-five-propagates-along-an-overlap-class` · lemma — Purity on every induced $H_5$ propagates along an $H_5$-overlap class
- `def-h-five-overlap-blockade-and-iterated-mixed-quotients` · definition — The $H_5$-overlap blockade and its iterated mixed quotients
- `lem-h-five-overlap-quotient-iteration-terminates-at-a-pure-blockade` · lemma — Iterated mixed quotients of an $H_5$-overlap blockade terminate at a pure blockade
- `lem-a-vertex-mixed-on-a-connected-set-mixes-on-an-edge` · lemma — A vertex mixed on a connected set has opposite adjacency on some edge of that set
- `lem-co-e-free-external-purity-survives-h-five-overlap-quotients` · lemma — In a special-vertex comb of a co-$E$-free graph, vertices in other comb blocks remain pure to every $H_5$-overlap quotient block
- `lem-terminal-h-five-overlap-quotient-pattern-is-h-five-and-co-e-free` · lemma — The pattern of the terminal $H_5$-overlap quotient is $\{H_5,\mathrm{co}\text{-}E\}$-free
- `thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition` · theorem — A special-vertex comb in a co-$E$-free graph admits the $\{H_5,\mathrm{co}\text{-}E\}$ structural partition
- `cor-the-singleton-family-containing-e-has-property-star` · corollary — The singleton family $\{E\}$ has property (*)

### `co-e-free-comb-structure-examples` — Comb Structure in co-E-Free Graphs — Examples (3 item(s))

- `ex-induced-co-e-witnesses-for-both-forbidden-path-runs` · example — The two induced co-$E$ witnesses behind the forbidden path runs
- `ex-an-h-five-overlap-class-and-its-terminal-quotient` · example — An $H_5$-overlap class and its terminal quotient
- `ex-a-bipartite-four-tooth-comb-has-the-co-e-structural-partition` · example — A bipartite four-tooth comb has the co-$E$ structural partition

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

1 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-ea439f3710a014c12c36a164 · `lem-co-e-free-external-purity-survives-h-five-overlap-quotients`** (from group g, gap-a-reader-closes) — Proof step 4.1 says that a vertex of $A_2$ is pure to every induced $H_5$ in $A_1$ by applying [F1] with $(x',y')$. That instantiation does not meet the cited lemma's hypothesis: vertices of $A_2$ are complete to both $x'$ and $y'$. The source proof instead applies the general purity lemma with the pair $(y',u')$: $y'$ and $u'$ are nonadjacent and complete to $A_1$, while the chosen vertex of $A_2$ lies in $N(y')\setminus N(u')$. The stated result is recoverable, but the written inference is not.

Append one owning-group disposition per warning to `research/frontier-32-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-32`

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
record to match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
