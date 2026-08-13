## Spine audit — the 60 highest-blast-radius proofs

`research/frontier-12-spine-audit.json` is a generated template. Its `scope` lists
**60 proof-bearing items** selected as the proof-bearing members of the 100
largest transitive dependency cones in the library. The top entry has **3936
transitive consumers**.

This closes a specific blind spot: every reader checks that a cited *Statement*
says the right thing, and nobody necessarily reads the *proof* of the thing being
cited. These are the proofs where being wrong costs the most.

### Your job

Read each item's proof — the actual proof, on disk at `items/<id>.md` — and record
an attestation in the `attestations` array of that same file. The receipt is
hash-bound: each entry carries a `content_sha256` and stays valid only while the
item's mathematical content is unchanged.

For each of the 60:

- Does the proof establish the Statement, in full, with no gap that needs a
  reader to supply a step?
- Is every cited fact used as stated — no changed hypothesis, quantifier,
  domain, direction, or invented converse? **Open the cited item on disk.**
- Are the hypotheses complete, and the degenerate cases disposed of — empty,
  zero, one, endpoints, both directions of an iff?

Fill in `reviewer` and, per entry, whether the proof is sound and anything you
found. Preserve every `id` and `content_sha256` exactly as generated; the receipt
is void if the hashes do not match what you read.

### Standard

The 30-second rule applies: a gap a competent human reader closes in 30 seconds
is **nonfatal** — note it, do not call it a defect. Report only a concrete false
claim, an unlicensed inference, a missing hypothesis, or an inaccurate citation.

Most of these 60 are long-published items with very large cones. A defect in one
is serious precisely because so much rests on it, so do not soften a real finding
— but equally, do not manufacture one to look thorough. "Sound" is the expected
and correct verdict for most.

### You are READ-ONLY on content

Do not edit anything under `items/` or `library/`. Write only
`research/frontier-12-spine-audit.json`. If you find a real defect, record it in
your attestation and in your final report; the orchestrator routes it to Alpha,
who is the only one who may repair.

### Verify before you finish

```
node tools/spine-audit.mjs --receipt research/frontier-12-spine-audit.json
```

It must report zero pending. Report the count you attested, any defect found, and
anything you could not check.
