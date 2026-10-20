# Ledger fragment boundary proposal — repair cycle 1

Confirmed defect: `localRepairMarkerRecords` uses the unchanged V1 paragraph/table parser to classify foreign slices. A table ending with LF produces a final `split('\n')` element with text `''` and start=end=EOF. Appending the authorized blocks adds a blank separator, so the parser no longer emits that zero-byte phantom. Actual HEAD and index each have 16,892 original foreign records versus 16,891 after composition; the only difference is that phantom. The genuine receipts, owned projection and every original byte are sound.

Smallest missing operational prerequisite: V2 foreign classification must exclude the terminal zero-width table phantom before strict residual comparison. The proposed one-condition adapter fix does exactly that. V1/default behavior, marker namespace validation, receipt authentication, authority shape, addition-only constraints, exact foreign residual equality, exact base reconstruction, and all workflow gates remain unchanged. Nonempty whitespace/CR records are retained; a whitespace-row append that changes an actual residual still fails closed.

Proposed installation is exactly the three files under `tools/`; live sources remain untouched. No native controls, content, histories, policies, authority files, Git index or refs were edited. This proposal grants no gate/ownership/publication authority.

Validation: candidate suite32/32 passes, including the existing isolated real-Git transaction preserving separate HEAD/index/working bytes and foreign staged data. Five table EOF forms cover no terminator, LF, LF blank separator, CRLF and CRLF blank separator. A negative test retains real whitespace rows and rejects residual changes. Applying the proposed tests to original code gives30passes/2failures (no-terminator composition and LF phantom assertion).

The read-only actual-input probe reconstructs the helper's authentic265blocks/264claims and validates all recorded receipts using both original and candidate code. Both original HEAD/index composition calls reproduce the reported failure. Both candidate calls pass exact owned-target equality, foreign-residual equality, Buffer equality after inverse insertions and retry idempotence. The two actual bases are tested independently, although they currently contain identical bytes. HEAD, index ledger OID and working ledger were checked unchanged; the four helper authority/application files remain absent; the native run remains paused at5.8-gate. See actual-probe.json for exact bindings. The --apply helper was never invoked.

Reproduce from repository root:

```sh
node --experimental-loader ./research/machine-learning-all-101-2026-10-19-owner-ledger-fragment-boundary-fix/your-proposal/candidate-loader.mjs --test tools/step6-ledger-fragment.test.mjs
node research/machine-learning-all-101-2026-10-19-owner-ledger-fragment-boundary-fix/your-proposal/probe.mjs
```

The loader substitutes proposed code/tests while preserving repository-relative module resolution for the real transaction dependencies. It changes no live files. `baseline-loader.mjs` substitutes only the proposed tests, leaving original production code intact. Logs record the actual invocations' results. All proposal artifacts are immutable after manifest creation pending independent review.
