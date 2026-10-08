# Batch28 taxonomy repair review

Read CLAUDE.md and SCHEMA.md fully, the relevant WORKFLOW append-only policy,
the closed ledger taxonomy, append API and `activeOwnershipRows`, the native
Alpha28 report/current decisions and reader report, the three actual ledger
rows, and their precise current Example/Proof/Verification loci. Native Alpha28
completed and drained before assignment; native30 remains outside this scope.

Exactly three invalid taxonomy rows have supported canonical successors:

| Original ID | Canonical subclass | Canonical location | Precise evidence |
| --- | --- | --- | --- |
| `f42-b28-5a-a3-word-class-typing` | `ill-typed-claim` | `statement` | Example (3) declaratively asserts a word commutation class; the reader and Alpha identify the repaired group-element argument. |
| `f42-b28-5a-interval-prefix-justification` | `unsupported-inference` | `proof-step 2.3` | The native evidence identifies omitted immediate support for reduced prefixes, supplied by the full-reading equality and shorter-prefix contradiction; nonfatal severity remains unchanged. |
| `f42-b28-5a-distributive-word-class-typing` | `ill-typed-claim` | `proof-steps 1.1-1.2` | Both numbered Verification paragraphs used group-element arguments of the word-based commutation-class operator. |

Each new ID is its exact old ID plus `-taxonomy-v1`, with `supersedes: [old_id]`.
The originals' complete raw lines are archived in
`frontier-42-coxeter-32-codex-ledger28-taxonomy-before.jsonl`; exact mappings and
raw-line hashes are in `frontier-42-coxeter-32-codex-ledger28-taxonomy-plan.json`.
All mathematical classification except the noncanonical subclass spelling,
severity, disposition, reason, detection timestamps/roles/stages and evidence
remain identical. Each successor adds its actual exact decision obligation in
`adjudication_ref`; no new verdict, finding or confidence is created.

Canonical append API is `node tools/defect-ledger.mjs append --file
research/frontier-42-coxeter-32-codex-ledger28-taxonomy-successors.json`, which
serializes append/view refresh under its supported lock. Active ownership keeps
originals as history, exempts only retired subclass/location labels and requires
exact active decision IDs. Therefore the three actual native decision
`defect_ids` strings need authorized reference-only replacement after append;
there is no old-ID alias. Preserve every other decision byte and first archive
the genuine complete current decision bytes. The current decision raw SHA256 is
`4a39315a6d115dd08a36be8e0bfcb260c46bee9abd52bbf4c90f333ea9d24fdd`.

Dry-run validation via the supported `--ledger` option on exactly the three
original rows followed by three proposed successors: `defect-ledger: 6 defect
row(s) checked, 0 error(s)`, exit 0. This is temporary-fixture validation.
Canonical ledger, native decisions, all item/contract/manifest content, native
reports/results/stamps and controls remain unchanged pending Root's exact grant.

Root granted the exact three appends and pointer updates. The first fresh guard
properly stopped before any canonical write: native post-DONE mechanical
stamping had changed the initial decision bytes. Root confirmed the genuine
all-batch stamp and authorized the actual new guard
`75f2766d6c662292aad7541749820c819b788d3a23c6d74869193ef86b4ad930`.
That guard passed; the genuine complete stamped bytes are archived in
`frontier-42-coxeter-32-codex-ledger28-taxonomy-decisions-stamped-before.json`.
The locked append API added three successors and refreshed the generated view.
Exactly three quoted ID strings changed in the current decision file; inverse
replacement recovers the entire stamped original byte for byte, including all
subject hashes, targets, evidence, verdicts and confidences. All three original
ledger lines retain their exact recorded hashes. Current run active ownership
has zero linkage errors, selects the three successors and retires the three
old IDs, with each successor referenced exactly once by its actual decision.
Selected actual six-row validation passes with zero errors. Decision after hash:
`63d643f8596cd01730ac80f874666db93a1c59b9f0a30f9c86aea6385eb66298`.

## Exact three contract-input gate repairs

Root additionally authorized three confirmed strict proof-contract input errors.
Reviewed each actual proof paragraph and its named local premise independently:
heap-classification 6.1 explicitly invokes 4.1's labeled-isomorphism conclusion;
forbidden-chain 2.1 explicitly invokes F1's fully-commutative equality; and the
distributive example's Verification 3.1 explicitly illustrates F4's interval
lattice clauses. Those prerequisites are actually available and support the
uses. Added only `step 4.1`, `F1`, and `F4` to the respective derivation `inputs`
arrays in batch28's proof contracts. Claims, quotations, suppliers, risk fields,
all item bytes and all manifests are unchanged. Removing those exact three
new array values recovers the complete original JSON structure.

Genuine original contract bytes are archived in
`frontier-42-coxeter-32-codex-ledger28-contract-inputs-before.json`; exact field
changes, before/after hashes and three current item raw hashes are recorded in
`frontier-42-coxeter-32-codex-ledger28-contract-inputs-repair.json`.
Strict proof-contract check explicitly selected all three subjects:
`proof-contract: 0 error(s), 0 warning(s), 3/3 item(s) checked`, exit 0.
No mathematical interface changed and no downstream mathematical repair is
induced. The changed contracts invalidate the corresponding earlier native
carrier stamps; ordinary fresh native evidence stamping and the full gate pass
remain Root-owned after every helper drains. No stamp or native gate was run
by this helper. All authorized writes are complete and drained.

## Fresh routing gate case after the contract amendment

Root's actual 23:49:57.368Z full Step5a gate battery passed forward checks and
299 merged proof contracts, with zero errors and two existing advisory warnings.
Routing fell from 132 errors to two errors belonging to one case: the
distributive interval example's `accepted_repair` no longer matched the complete
reader-post carrier, and its genuine taxonomy successor consequently appeared
unowned. This was an actual metadata-amendment predicate failure, not a new
mathematical defect.

Independently verified the exact current complete carrier and checker predicate.
The item raw hash remains reader-post
`4491ace8db50f3bf22b72ab289bb362174fa6566fc8d4993f024f62cd2d1296b`;
the manifest carrier also equals reader-post. Removing the actual Alpha
`risk_review` from the archived pre-amendment contract reproduces the canonical
reader-post contract hash. Removing only the newly authorized `F4` input from
current derivation 3.1 recovers that complete pre-amendment contract. Thus the
new nonrisk delta is precisely this recorded input addition; the native original
proof review and confidence 1 remain valid. The current complete carrier differs
from both reader-pre and reader-post and equals the genuine current native stamp.

Under Root's exact conditional grant, archived complete genuine current stamped
decision bytes in
`frontier-42-coxeter-32-codex-ledger28-routing-amendment-decisions-before.json`
(SHA256 `bccec792ec459a026545a131146d85051def4efb48de98f8f6d9b82b1c7725a3`).
Changed only this one verdict from `accepted_repair` to `amended_repair` and
appended a specific evidence suffix identifying the actual authorized F4
contract-input amendment. No new proof or review claim was added. Inverting
exactly those two field replacements recovers the entire archived raw bytes;
every other decision, confidence, successor ID, original evidence prefix,
subject stamp and target remains identical. Result decision SHA256 is
`bb7f734f1a3e353065efe440bab829af5928940620997995a47ce6e848818af9`.

Fresh explicitly scoped routing diagnostic:
`node tools/step5-scope.mjs check --run frontier-42-coxeter-32 --batch 28 --phase adjudicate --json`
reports `11 item(s) routed, 9 adjudication obligation(s), 0 error(s)`, exit 0.
This closes this actual case locally; no claim of full-run gate success is made.
No code, ledger, contract, item, manifest, native finding/report/result, stamp,
snapshot or control was changed in this cycle. Writer drained; Root retains the
ordinary fresh native stamping and same-gate retry.
