## Re-attest the spine receipt — it lapsed on count-only drift

You are an independent **GPT 5.6 Sol** reader. A previous independent Sol reader
attested `research/frontier-12-spine-audit.json`: 60 proof-bearing items among
the top 100 transitive dependency cones, all `read`, no fatal defects.

`level-coverage` now returns exactly one error:

> `spine-receipt-invalid: scope no longer matches the current high-blast-radius
> proof set`

### What actually changed — traced, not guessed

Alpha compared the receipt against a freshly generated
`spine-audit --template --top 100`:

| | result |
|---|---|
| items entering scope | **none** |
| items leaving scope | **none** — the same 60 items |
| `content_sha256` changes among the 60 | **none** — every attested proof is byte-identical |
| what moved | **7 of 60 `transitive_consumers` counts, by +1 or +2** |

The seven: `lem-a-relation-is-included-in-the-product-of-its-domain-and-range`
(3124→3126), `lem-inverse-relations-composites-and-restrictions-are-sets`
(3093→3095), `lem-nat-discrete` (3304→3305), `lem-nat-order-is-membership`
(2745→2747), `lem-nat-successor-neq-self` (2921→2923), `lem-pigeonhole`
(2629→2631), `thm-well-ordering-principle` (2652→2653).

Cause: the D10 wiring commit added `cor-rational-function-field-as-a-fraction-field`
to `ex-rational-function-field-order`'s `deps`, pulling that item and
`cex-q-not-dense-in-an-ordered-field` into seven deep foundational cones.

So the condition the gate protects — that no high-fan-out proof rests on
unreviewed text — is **intact**. What is stale is graph metadata in the
fingerprint the receipt binds to.

### Why you and not Alpha

Alpha declined to refresh it, correctly: Alpha authored the step-9 repair **and**
adjudicated it, and re-fingerprinting an independent reader's artifact on Alpha's
judgement that the drift is immaterial would make the gate's teeth Alpha's
discretion. It needs an independent reader. That is you.

### What to do

1. Regenerate the template so the fingerprint and counts are current:
   `node tools/spine-audit.mjs --template /tmp/spine-fresh.json --top 100`
2. **Verify Alpha's claim yourself**: the scope is the same 60 ids and every
   `content_sha256` is unchanged from the existing receipt. If **any** id enters
   or leaves, or **any** content hash differs, that item's proof has not been
   read — you must read it before attesting, and say so.
3. Carry the existing attestations across by id, preserving each note verbatim —
   they are the previous reader's work and you are not re-authoring them. Keep
   `reviewer` naming both reads honestly.
4. **Spot-read at least the seven items whose counts moved**, so the refreshed
   receipt is not purely mechanical. They are the highest-fan-out proofs in the
   library — 2600 to 3300 transitive consumers each. Record anything you find.
5. Verify: `node tools/spine-audit.mjs --receipt research/frontier-12-spine-audit.json`
   must report zero pending, and `level-coverage` must lose `spine-receipt-invalid`.

Write only `research/frontier-12-spine-audit.json`. Do not edit `items/` or
`library/`. If any proof is defective, report it — Alpha repairs, not you.

Report what you verified, what you spot-read, and anything you could not check.
