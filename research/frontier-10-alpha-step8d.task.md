# This dispatch — adjudicate and repair 2 items. Everything else is done.

The owner has authorised publication and wants this closed. **These two items are
the only thing blocking it.** Three of the five touched items came back clear.

## 1. `cor-planar-simple-graph-edge-bound` — both lanes

- **DeepSeek:** *"Step 2.1 claims placing components into disjoint discs makes
  each meet the unbounded face, which is false; the construction does not achieve
  the required property."* Read this as a **false construction**, not a citation
  quibble.
- **Terra:** *"Step 1.2 applies double counting to a relation indexed by faces
  without establishing that the face set is finite."*

Terra's is **the same defect Beta-6 just repaired in
`lem-plane-face-handshake-by-girth`**, which now carries
`[L3] Every plane graph has finitely many faces, exactly one of which is
unbounded ([[lem-plane-graph-faces-are-finite-with-one-unbounded-face]])` and
opens step 1.1 with "By [L3], $F(G)$ is finite." The same fix applies here; that
lemma sits at #7 on the page, well before this corollary.

Note this item was **narrowed and then re-widened today** at the owner's
direction: it now claims equality for every plane triangulation of order ≥ 3,
resting on the new `lem-plane-triangulation-is-connected` (which cleared both
lanes). If the disconnected-case argument in step 2.1 is what is false, consider
whether that branch is still needed at all now that connectedness is a lemma.

## 2. `rem-riemann-stieltjes-conventions-and-scope` — both lanes

- **DeepSeek:** the forward reference to `[[thm-holder-finite-real-exponents]]`
  is claimed to supply broader exponent theory for Young's theorem, but that item
  states Hölder's inequality for finite exponents — an **inaccurate citation**.
- **Terra:** the Darboux summary **omits the hypothesis $a<b$**. On a singleton
  every bounded integrand is integrable by convention but no partition exists.

This item was repaired at step 9 as scope-denial D12, so its current text is
recent.

## Rules

R1 still applies: `confirmed_fatal` licenses a repair, `confirmed_nonfatal` and
`false_positive` close with **no mutation**. Baseline is `pre-step8d`; every row
needs `item_sha256` at pre-edit state; append to
`research/frontier-10-judge-adjudications.jsonl`.

All four findings look fatal to me on their face — a false construction, a
missing finiteness hypothesis, an inaccurate citation, a missing $a<b$ — but that
is your call, not mine.

Report the changed items so I can rejudge exactly those and nothing else.
