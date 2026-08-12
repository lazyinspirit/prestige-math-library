# frontier-11, batch 4 — one strict proof-contract error

You are **Beta-frontier-11-4**. `proof-contract --strict` reports exactly one
error across the whole run, and it is yours:

```
citation-uses [thm-operator-determinant-is-multiplicative]:
  L2 -> thm-operator-determinant-is-basis-independent
  needs every proof step that cites L2
```

The contract entry for `thm-operator-determinant-is-multiplicative` records the
`L2` fact but does not list **every** numbered proof step that cites it. Read the
item text on disk, find each step citing `L2`, and record them all.

If the truth is that the text cites `L2` in a step you did not intend, fix
whichever side is wrong — but do not silence the gate by deleting the fact. The
contract must describe the proof as written.

Note reader-3 changed this pair: `thm-operator-determinant-is-basis-independent`
no longer asserts a determinant of a `0 x 0` representing matrix, because the
published matrix determinant is defined only for `n >= 1`. Make sure your
contract reflects the current text, not the pre-repair text.

Verify:

```
node tools/proof-contract.mjs research/frontier-11-batch-4.proof-contracts.json --strict
```

Do not change any Statement or claim. Do not touch another batch,
`plan-spec.json`, or any normative doc. Do not run `tools/gates.mjs`.
