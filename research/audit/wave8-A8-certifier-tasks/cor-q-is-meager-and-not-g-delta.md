## Assigned A8 fatal repair — `cor-q-is-meager-and-not-g-delta`

Item path: `items/cor-q-is-meager-and-not-g-delta.md`

Normalized exact-final SHA-256 at dispatch:
`8ccbe550554ceb11584e492815c66fea1521c2d5b8a3383e4b16f4421a6769ba`

Audit-Alpha confirmed Terra's A7 finding against the pre-edit normalized hash
`0c233b550b97c24e0a2260aee6c6a5567188595839a2ca772764d23f3c2b61f5`,
recorded with the exact A7 context and verdict attestation in
`research/audit/wave8-judge-adjudications.jsonl`.

The old L1 appended the general assertion that every at-most-countable family
can be presented by an N-indexed sequence. That is false for the empty family:
there is no function from N to the empty set. The assertion was unused because
step 1.2 invokes the preceding exact theorem `Q approximately N` to choose the
specific bijection needed by the proof. Alpha deleted only the false clause,
removed its now-unused `def-countable` dependency and proof-contract citation,
and removed the stale A6 `verification.verified` block.

A first exact-final Terra reading at normalized hash
`c96ab3f27d07d81e8b0d702d01867c4b868b7739d0e01647af8126cc95975324`
correctly refused because the first Remark still generalized claim 1 to “any
countable space.” A nonempty countable discrete space is a counterexample: its
only nowhere-dense subset is empty. Alpha replaced only that false Remark
clause with the exact local explanation that step 1.2 lists
$\mathbb{Q}_{\mathbb{R}}$ and step 1.1 proves each real singleton nowhere
dense. The Statement, all numbered proof steps, provenance, and every remaining
dependency are unchanged. This must be a fresh current-text reading; the prior
refusal is not a certification of the new hash.

Read the current item from disk in full. Read at least
`items/thm-rationals-countable.md`, `items/def-equinumerous.md`,
`items/lem-rat-embeds-dense.md`,
`items/def-injection-surjection-bijection.md`, `items/def-countable.md`, and
`items/lem-countable-iff-surjection-from-n.md`, plus any other dependency needed
to check the proof. Inspect the current contract entry in
`research/audit/wave8-real-analysis-cantor-continuity.proof-contracts.json`.
Recompute the verification-stripped hash or otherwise compare the exact disk
text to the hash above. This is a fresh current-text A8 certification; do not
reuse the earlier A6 certification, the refusal against the superseded hash, or
rely on this summary as evidence. Re-read every Remark with the same care as a
numbered proof step.
