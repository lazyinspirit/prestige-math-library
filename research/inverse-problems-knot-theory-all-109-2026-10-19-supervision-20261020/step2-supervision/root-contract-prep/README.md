# Current proof-contract preparation

`prepare-current-contracts.mjs` defaults to READONLY for canonical inputs. It enumerates the actual109 batch manifests and requires exactly1471 unique frontier IDs. It writes only a research proposal and summary. It does not invoke a gate or validator, calculate hashes, mutate item sources/metadata, infer mathematical acceptance or create missing proof contracts.

The source grammar and quote convention match `tools/regen-contract-entries.mjs`: full Facts paragraphs, full numbered proof blocks, every actual linked Fact target, and that target's entire actual citable Statement/Definition section. Citations/uses and claim/input mirrors are regenerated. Existing strategy/risk/boundaries/history remain exact. Existing derivation IDs and surviving routine classifications/additional fields are retained. New source rows are derivations as in native regeneration. Deleted routine rows require exact explicit root approval and full preimage archive; none occur in this snapshot.

The preliminary `snapshot-current/summary.json` records800 changed entries in108 files:47 new numbered rows,7 deleted derivation rows,944 changed existing derivation mirrors,2 changed routine mirrors, and779 changed citation collections. These are metadata differences, not800 new mathematical reviews. `snapshot-before-drain/` is an earlier development snapshot using native ID normalization; use `snapshot-current/` for the implemented ID-preserving policy. Native writers may still change inputs, so root must regenerate after drain.

Two decisions are deliberately withheld: `alg-ip-basis-pursuit-denoising` (batch34) and `alg-knot-wirtinger-presentation-from-code` (batch56) have old proof rows but no current numbered proof. No automatic deletion or proof-status decision is made. Ten entries have possible numeric-source-reference/step-token collisions; `parser-warning-contexts.json` gives only the exact relevant text windows and whether the input was already in the old contract. These are parser decisions, not new mathematical circularity verdicts. The script refuses to apply warned entries without a concrete root disposition.

After all actual writers drain, root can run from the repository root:

```sh
node research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step2-supervision/root-contract-prep/prepare-current-contracts.mjs --output-dir research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step2-supervision/root-contract-prep/AFTER_DRAIN_PLAN
```

Root must fill a separate decision file based on `root-decision-template.json`: actual authority, true writer-drain assertion, frozen approved-proposal path, positive selected-ID list, exact stale routine removal lists if any, concrete warning dispositions if selected, and a fresh archive directory inside this preparation folder. The template is intentionally unauthorized and nonexecutable as approval.

A root-only application then supplies `--apply-decisions ROOT_DECISION_PATH` and a NEW `--output-dir` distinct from the approved frozen snapshot. Before writing any contract, application recomputes the proposal and requires exact full before/after JSON equality against root's selected approved entries. It archives complete original documents in a new directory and changes only selected citation/derivation/routine mirrors. Missing contracts, removed-proof cases and unapproved IDs are never automatically repaired. It does not modify scope lists, strategy, risk, boundaries or provenance, and grants no review/gate credit.

Carrier enclosure owns the disjoint metadata/levels/coverage proposal under `root-metadata-prep/`; contract mutations were removed from that lane. Root owns ordering, native final bindings and the ordinary gates.
