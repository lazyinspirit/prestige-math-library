# Collector Revision 2 — root review/application only

V1 is preserved unchanged and must not be applied. Root caught 178 checked rows without evidence; applying native boundary validation to V1 additionally found 558 unanchored evidence strings and three missing not-applicable reasons. `v1-rejection-witness.json` records those 739 format failures. Original readers supplied immutable supplements; no new mathematical review or gate credit is claimed.

`packet-selections.json` explicitly selects the genuine author indexes and immutable replacement packets. It selects Wasserstein V3, spectral V3, reverse `version-2-final`, and the other readers' V2 supplements; unchanged packets retain their genuine original read evidence/current guards. Earlier versions of superseded packets are never appended or silently substituted. The selection manifest and every authority index/packet are hashed as seal inputs.

Revision2 imports `numberedProofSteps` and `splitFrontmatter` from actual `tools/facts-block.mjs`. It duplicates exactly the checked/NA boundary-field validation in `tools/proof-contract.mjs`: checked rows need nonempty evidence, a native-recognized numbered proof reference or Statement/Definition/Example/Counterexample keyword, and existing referenced native proof steps; NA rows need a nonempty reason. It validates complete projected boundary arrays for all910 affected items, every projected row in the101-contract global analysis, and again during apply before archives/writes. Both native source files are guarded inputs. This is boundary-field validation, not the whole proof-contract gate and not mathematical acceptance.

Focused tests compare the staged checker against the actual native `validateBoundaries` function extracted without running its CLI:15 row fixtures,5 array fixtures, native proof-section exclusions, and the existing910-item synthetic preservation/CAS tests. The latter cover foreign finite-smoke bytes including JSON escaping and number spellings. V1 seals and prospective plans are rejected by the Revision2 apply driver.

Root sequence (the collector author has not sealed/applied anything):

```sh
node research/machine-learning-all-101-2026-10-19-owner-boundary-root-integration/your-proposal/revision-2/collect-v2.mjs inspect --reviews research/machine-learning-all-101-2026-10-19-owner-boundary-reader-registry.json
node research/machine-learning-all-101-2026-10-19-owner-boundary-root-integration/your-proposal/revision-2/collect-v2.mjs analyze --reviews research/machine-learning-all-101-2026-10-19-owner-boundary-reader-registry.json --output /tmp/boundary-v2-global-NEW.json
node research/machine-learning-all-101-2026-10-19-owner-boundary-root-integration/your-proposal/revision-2/collect-v2.mjs seal --reviews research/machine-learning-all-101-2026-10-19-owner-boundary-reader-registry.json --output /tmp/boundary-v2-seal-NEW.json
```

The default selection file is adjacent `packet-selections.json`; an explicit alternative may be passed with `--selections`. Output/archive files use exclusive creation. The seal requires all910 items/3,876 axes, known actual readers/read claims, exact source and before-boundary CAS, resolved root requirements including52, zero strict boundary-field errors, and zero unbound global template/repeated review-reason candidates. It binds all101 global contract inputs and current source hashes used by global template checks.

After root reviews the exact seal, root creates authorization `{actor:"/root",run:"machine-learning-all-101-2026-10-19",action:"apply-boundary-field-cas",seal_sha256:"RAW-SEAL-SHA256"}` and may run:

```sh
node research/machine-learning-all-101-2026-10-19-owner-boundary-root-integration/your-proposal/revision-2/collect-v2.mjs apply --seal /tmp/boundary-v2-seal-NEW.json --authorization /tmp/boundary-v2-root-authorization.json --archive research/ROOT-CHOSEN-NEW-V2-ARCHIVE
```

Apply starts from current contracts. Raw JSON span replacement changes only selected boundary objects, preserving every other byte, including all current foreign finite-smoke arrays and root's unflagged batch53 singleton evidence correction. Unknown boundary keys are preserved. Each contract is archived exactly and replaced with an adjacent temp file plus atomic rename. Multi-file atomicity is not claimed: the exclusive archive transaction manifest provides recovery evidence if interrupted. No item/source/tool/runtime/metadata/gate changes are made by generating this proposal.

`normalized-plan-v2.json` is a prospective plan, not an applyable root seal. `global-prospective-final-v2.json` and `final-report-v2.json` record the current staged results and exact artifact hashes. Root owns actual integration, current checks, rehashing and gates.
