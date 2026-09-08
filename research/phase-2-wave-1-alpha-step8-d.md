# Phase 2 Wave 1 Step 8 adjudication — group d

## Scope and result

I read all four assigned pages, all 21 owned items, and every direct item dependency cited by those items. I also read the generated Step-8 scope, the Step-7 context, the exact judge-ledger rejection, and the two complete item files involved in the rejection.

Group d has one rejection and no Step-7 reader warnings or incoming alerts. The rejection is a `false_positive`. No mathematical content, contract, impact, manifest, verification, or judge record was changed. There are no repair or rejudge targets and no outgoing cross-group alerts.

## Exact adjudication

| item | model | context SHA-256 | pre-edit `itemHashGuard` | outcome |
|---|---|---|---|---|
| `lem-a-descended-galois-orbit-idempotent-is-primitive` | `gpt-5.6-terra` | `8d5aaac63b1cbad97bc69d07a3c2fb7edf4a0f957828c7017c6a587749bd5e17` | `0fc09df861769372d754e62ddc8cea452b14d115c7c75572932a253eae3097a0` | `false_positive` |

The rejection says that fact F1 attributes an unstated claim to `lem-galois-orbit-sums-of-split-central-idempotents-descend`: namely, that every central idempotent of the split scalar extension is a unique subset sum of its split factors. The complete cited dependency supplies exactly that result in proof step 1.1. It identifies central elements coordinatewise in the split product, uses idempotence to force every coordinate scalar to be either zero or one, and concludes that all central idempotents are unique subset sums of the coordinate identities. It also proves that the nonzero primitive central idempotents are precisely the singleton sums. The target's proof step 1.1 therefore uses a proved result from the exact cited item; the objection results from treating the dependency's compact statement as its entire interface.

The decisive local sources were:

- `items/lem-a-descended-galois-orbit-idempotent-is-primitive.md`, fact F1 and proof step 1.1: the consumer and the precise use under objection.
- `items/lem-galois-orbit-sums-of-split-central-idempotents-descend.md`, proof step 1.1: the exact subset-sum classification and its uniqueness proof; proof steps 2.1–4.1: permutation by the Galois action and descent of orbit sums.

No external source was needed because the complete current cited dependency resolves the issue directly.

## Repairs, alerts, and rejudge targets

- Repairs: none.
- Step-7 warning decisions: none required.
- Cross-group alerts: none.
- Published repairs: none.
- Rejudge targets: none.

## Validation

- The adjudication ledger is valid JSONL and contains exactly one row for the assigned `(id, model, context_sha256)` tuple. Its guard hash and `false_positive` outcome match the decision above.
- The current target hashes remain `itemHashGuard = 0fc09df861769372d754e62ddc8cea452b14d115c7c75572932a253eae3097a0` and `itemHashJudge = 63f5dd577717b5affcb0afcb1bb6021aa303ad5c67b869f85f7518c619658632`, confirming that group d made no mathematical edit.
- Both group-written files end with a newline and contain no trailing whitespace; the shared ledger currently has three valid JSONL rows, with the assigned tuple occurring exactly once.
- `node tools/step8-scope.mjs check --run phase-2-wave-1` ran and reported two unresolved level-wide alert dispositions, both outside group d: `lem-finite-lower-central-coordinate-systems-exist` belongs to group a and `ex-a-compact-set-in-an-infinite-non-locally-finite-realization-still-meets-finitely-many-cells` belongs to group f.
- The prescribed `tools/step8-guard.mjs` command ran and reported four unlicensed level-wide edits, all outside group d and all owned by group g: `def-qid-restricted-blockade-with-empty-blocks`, `lem-local-special-copy-trichotomy`, `lem-qid-logarithmic-and-constant-divisibility`, and `lem-subreciprocal-functions-close-under-the-density-recursion`.

These level-wide failures are other groups' in-flight obligations. Group d has no unresolved rejection, warning, alert, repair, or rejudge obligation.
