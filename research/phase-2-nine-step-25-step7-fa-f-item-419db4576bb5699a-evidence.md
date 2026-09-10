# Final adjudication evidence — group f, queue position 1 of 1

Run: `phase-2-nine-step-25`. Item: `thm-novikov-boone-undecidability-of-the-word-problem`.
Disposition: `repaired`. Source status: `familiar`.

## Review and exact defect

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the exact queue, current item, every direct dependency in full, and the full normalization lemma subsequently added as a direct supplier. Read both current A/B pages, the batch-13 manifest entry, complete item proof contract including its risk review and boundaries, relevant coverage entries, Alpha's Step-7 report and adjudication row, and both Terra rejection rows. The live state reports this run active; Git HEAD was `df6550aff`. Historical resume claims were not used.

The initial rejection in `research/phase-2-nine-step-25-judge.jsonl` has context `4920c28b84ddfffa064c3f3671299d2931b8f35acb3e4ea3ed4788102a8a4e06`: the group definition did not introduce the initial-configuration notation. Alpha correctly added the semigroup definition and separated its interface as F5. The sole paid rejudge, context `ce361d2fe7e86b3f03767c58bdf08080174dde42bb6c20e3f6b5c0f81e02e494`, identifies a remaining gap: that definition does not specify the effective encoding or its empty-input value. I independently confirm this interface defect. Merely naming a fixed encoding does not establish its computability.

The current normalization lemma already states exactly `v(epsilon)=s_0` and `v(w)=w` for nonempty binary words. Its proof 5.1 explicitly describes the empty-input test. Its full compiler proof fixes the table independently of the input, marks cell zero, simulates each source step by two instructions, sends rejection into a loop, and handles the empty input by scanning blank. No change to that supplier is needed.

## Independent mathematical basis

The claim remains existence, assuming AC, of one fixed finite presentation with an undecidable identity language. The semigroup theorem supplies undecidability of the binary-input language defined by `C(w)=q`; its statement and complete proof distinguish this from merely varying the presentation. The semigroup definition supplies `C(w)=h q_start v(w) h`, the start state, and `h` in the tape alphabet. The normalization lemma supplies the explicit positive input encoding. Testing emptiness and copying a finite binary string gives a terminating transducer; the blank symbol is written as a symbol of the finite-word encoding, not confused with absence of a word.

With `X=h` and `Y=v(w)h`, the group definition gives the special spelling `Sigma=h^-1 q_start v(w)h` and exactly `Sigma*=C(w)`. Both contexts are positive, including the empty binary input, when `Y=s_0 h`. This satisfies the domain of the special-word equivalence. Its two implication proof uses pushing in one direction and extraction followed by reconstruction in the other. Applying that established interface gives `W(Sigma(w))=1` if and only if `C(w)=q`.

The full commutator has the four copies `Sigma^-1, Sigma, Sigma^-1, Sigma`, separated by `k,t,k^-1,t^-1` in the displayed order. Reverse scanning and finite sign lookup compute inverse copies; sharp only changes tape signs in place and is not substituted for inversion. Every copying loop has a finite source and reduces the number of uncopied positions. Finite delimiters and a fixed enlarged workspace alphabet allow the procedure on one tape. After clearing workspace and positioning the output, a putative total group decider can run on it. The composition terminates on every binary input and answers precisely the forbidden semigroup input language. Neither generator nor relation lists depend on that input. AC enters solely through the group equivalence, consistently with the page and published AC definition. The published fixed-presentation word-problem definition has exactly this signed-word input domain.

The mathematics needed for this terminal reduction and its encoding repair is familiar enough that external verification was not required. No web source was consulted in this FA review, and no claim is made to have reread Rotman or Simpson. The inherited coverage/source locators (Rotman Theorem 12.8 and Simpson Theorem 8) and prior risk review were read as context, not substituted for the local proof. This is a consumer proof and dependency-interface review, not a fresh certification of every transitive HNN lemma.

## Exact repair and scope accounting

- Added only `lem-normalized-fixed-halting-machine-for-boone-simulation` to this consumer's `deps` and as F6. Step 1.1 now states both branches of its terminating encoding and cites F6. F5 no longer attributes the encoding definition to the semigroup construction.
- Synchronized this item's dependency list in `research/phase-2-nine-step-25-batch-13.pages.json` and regenerated only its citations/derivations in `research/phase-2-nine-step-25-batch-13.proof-contracts.json`; preserved the independent risk review and boundary records.
- Reconciled and atomically rewrote the owning consumer-batch record `research/phase-2-nine-step-25-batch-13.cross-batch-dependencies.json` as `[]`, following `briefs/tasks/frontier-dependency-ledger.md`. The new supplier is already first on the same A page in batch 13, so there is no cross-batch row to add. Refreshed the unified ledger using its tool.
- No existing dependency was edited, no new lemma was introduced, and no page ordering or Step-7 item inventory changed. No prerequisite-repair licence is needed. No unrelated item or published content was edited.

Pre-repair itemHashGuard: `1b416b1ed023dfeab09d87da3b3ecc9a4bc047b7aa948ac66d9dfaad644dcedf`.
Post-repair itemHashGuard: `f6293031287ce17f9bec9478a0dd187940bd21d18b2e6dc74a0333de83a8a058`.

## Focused checks and handoff

All completed successfully:

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-novikov-boone-undecidability-of-the-word-problem.md`: 1 checked, 0 failing.
- `node tools/proof-contract.mjs research/phase-2-nine-step-25-batch-13.proof-contracts.json --strict --items thm-novikov-boone-undecidability-of-the-word-problem`: 0 errors, 0 warnings, 1/1 checked.
- `node tools/rendercheck.mjs items/thm-novikov-boone-undecidability-of-the-word-problem.md`: real KaTeX and renderer YAML checks passed.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-nine-step-25`: refreshed and deduplicated.
- Focused graph/manifest assertions: exact dependency-list agreement, all direct target files exist, new supplier precedes consumer on its existing page, and following its dependency closure does not return to the consumer.

These are focused mechanical checks accompanying the mathematical review, not an independent judge verdict. No third consumer judgment or pass stamp was requested or created. No mathematical obligation remains unresolved within this queue. Next action: record `repaired` through the prescribed terminal-resolution recorder; the owning Alpha/engine then resumes normal closure.

Recorder completion: the prescribed command succeeded with disposition `repaired`, source status `familiar`, and current context `2991c1dd405231f1f42b17d163a6642e81fb4f811a0fcdeb7540998a8d734803`. Queue position 1 of 1 is terminally resolved. The owning Alpha may resume; there is no unresolved blocker for this dispatch.
