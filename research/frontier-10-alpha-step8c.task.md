# This dispatch — step 8, round 3: close or PARK. This is the last round.

Round 2's eight repairs were rejudged. **Three are now fully clear on both
lanes.** Five remain:

| item | rejecting lane(s) |
|---|---|
| `ex-row-echelon-form-is-not-unique-but-rref-is` | **both** |
| `prop-maximal-plane-triangulation-characterisation` | **both** |
| `cor-planar-simple-graph-edge-bound` | Terra |
| `thm-dirichlet-test-for-improper-integrals` | Terra |
| `lem-colour-focussing-for-arithmetic-progressions` | DeepSeek |

## The rule for this round

Fatal repairs are uncapped **on a defect**, not on a loop. Every one of these has
now been repaired two or three times and keeps drawing findings. So for each
item, choose exactly one of:

1. **Close it.** `confirmed_nonfatal` or `false_positive` — no mutation, no
   rejudge, done. If the judge is repeating a citation-precision complaint that
   the 30-second rule disposes of, this is the honest answer and you should not
   hesitate to give it.
2. **Repair it once more** — only if you can state the concrete fatal defect and
   are confident the repair closes it rather than moving it.
3. **PARK it.** If the item cannot be honestly closed or repaired this round, say
   so. A parked item is **dropped from this run's publish scope** and reported to
   the owner with what it would take to finish. Parking is a legitimate,
   preferred outcome — better than a fourth patch, and far better than shipping a
   proof neither lane accepts.

**Do not open a fourth repair round.** If your round-3 repair is rejected again,
that item parks automatically.

## The question you have not fully answered

Two of these are the planar cluster whose root cause you named:
`lem-plane-face-handshake-by-girth` exports an inequality while proving an
identity, and states itself for connected graphs while consumers drop the word.
You correctly withheld the root fix under R1 because no rejection licenses
editing that lemma.

**If the consumers cannot be closed without the root fix, park them and say
so.** That is a far more useful result for the owner than three more consumer
patches: it converts an unfixable-under-R1 situation into one concrete
next-unfrozen-moment action.

## Mechanics

Baseline `pre-step8c`. Every adjudication row still needs `item_sha256` at
pre-edit state; append to `research/frontier-10-judge-adjudications.jsonl`.
Step 8's gate table now also runs `proof-contract`, `finite-smoke` and
`risk-report` — the gap you identified — so leave the merged contract valid.

Report per item: closed, repaired, or parked, and for each parked item exactly
what would finish it.
