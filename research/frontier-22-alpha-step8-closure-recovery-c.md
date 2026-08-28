# Frontier-22 Step-8 closure recovery — group c, round 1

## Outcome

Handled all five exact current rejudge tuples owned by group c: two
`confirmed_fatal`, two `confirmed_nonfatal`, and one `false_positive`. The two
fatal items were repaired narrowly, recorded as distinct defects, and are the
complete group-c rejudge target set from this recovery dispatch. No other
group's row or item was changed.

## Exact rows handled

| item | context SHA-256 | pre-edit guard SHA-256 | outcome | evidence and action |
|---|---|---|---|---|
| `def-algebraic-connectivity-of-a-graph` | `0bed17ddc01711e56e2a6dc625038609a5b8cccf7d5e01c7b6915e197e3ccdb4` | `35995a5fe99678562868dde2f74072d6faa9fe5ade60f4efd27163c8222cb275` | `confirmed_fatal` | The kernel theorem supplies a zero eigenvalue but does not exclude negative eigenvalues. Added the exact Laplacian-positive-semidefinite dependency and separated its role from the kernel theorem. Current guard hash: `bdd6f1fe06728139f1188e20faae65caeb7a4eb456d71516af5d325020ba46bf`. Defect row: `frontier-22-S8-c-r1-001`. |
| `lem-basic-bull-free-hole-with-a-complete-outside-vertex` | `3ec50aefeca6fb186b8213fef98d46605170e18e9f02cfa27a35a084606d2549` | `61eb5b9365ba6fc2bec10cdcd5cd2a940d17523dc69d1d4ba98f17eee1f010f5` | `confirmed_nonfatal` | No edit. The omitted bull-pattern citation is an immediately closable local citation gap: the item already fixes a basic bull-free graph and every displayed five-vertex check is a direct edge/nonedge inspection. |
| `thm-binet-cauchy-formula` | `2870dad27d26aae477bc954fb7de8a55abe6ba7d5a527f66e03628ee9b76581c` | `cd5a22fa703498ebeae09e37c120024b2ece03af7c9d0782a537c8965246f4a3` | `confirmed_fatal` | Step 3.1 falsely called every distinct-index term nonzero. Replaced that equivalence by the exact statement that repeated-index terms vanish and the sum may therefore be restricted to all distinct-index tuples, whether or not an individual remaining term vanishes. Current guard hash: `22833ff6ee90652a1041913399e1dfb490566191c12981706c52badef9ec44b5`. Defect row: `frontier-22-S8-c-r1-002`. |
| `thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module` | `2f895f99cdbe1cd3be404498f7039dad8e33c77bbdee666d750a6be22ccdaf26` | `7703ae9db98275a3d11b742dd3d21af73317730cad5ab3e22655d64a5f23bb11` | `false_positive` | No edit. Fact F2 cites the full module definition, whose Definition section explicitly states that a finite module is nontrivial exactly when `2 <= \|M\| <= \|V(G)\|-1`; step 3.1 verifies those two inequalities. |
| `thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations` | `5c720cb569130dd9d3ccb1cfe9df86200aff206ac585248484a1b71b8fd8baba` | `727234da6895252f7edf92af72cf733d9a4f1216c615037eb68c242666fb4e78` | `confirmed_nonfatal` | No edit. Since the graph is nonempty, its finite order is positive; positivity of a positive-base real power is immediate from the displayed real-power definition through the positive exponential. The omitted citation does not invalidate the equivalence. |

## Licensed repairs and rejudge targets

| item | repair | defect row |
|---|---|---|
| `def-algebraic-connectivity-of-a-graph` | Added positive semidefiniteness to exclude negative eigenvalues and retained the kernel theorem only for existence of the zero eigenvalue. | `frontier-22-S8-c-r1-001` |
| `thm-binet-cauchy-formula` | Replaced the false nonzero-term equivalence by the correct restriction to distinct-index tuples after repeated-index terms vanish. | `frontier-22-S8-c-r1-002` |

These are second-cycle Step-8 repair targets. The engine owns the durable cycle
limit; no extra judge cycle was initiated here.

## Documentary synchronization

- Regenerated the current batch-4 proof-contract entries for Binet–Cauchy and
  the two direct consumers of the repaired algebraic-connectivity definition.
- Preserved Binet–Cauchy's complete Alpha risk review.
- Rebuilt `research/frontier-22-proof-contracts.json` from all nine per-batch
  contract sources.

## Changed files and ledgers

- `items/def-algebraic-connectivity-of-a-graph.md`
- `items/thm-binet-cauchy-formula.md`
- `research/frontier-22-batch-4.proof-contracts.json`
- `research/frontier-22-proof-contracts.json`
- Appended five rows to `research/frontier-22-judge-adjudications.jsonl`.
- Appended two rows through `tools/defect-ledger.mjs`, which refreshed
  `research/defect-ledger.jsonl` and `research/DEFECT-LEDGER.md`.
- Added this closure-recovery report.

## Checks

- Exact tuple join: five assigned current tuples, five unique exact
  adjudications, with two fatal, two nonfatal, and one false positive.
- Focused precheck: the repaired Binet–Cauchy proof passes in stored phase
  order.
- Focused render check: both repaired items pass YAML, delimiter, wikilink, and
  KaTeX checks.
- Focused strict proof contract: 3/3 synchronized entries pass with zero error
  or warning.
- Focused reviewed risk report: Binet–Cauchy remains high risk with a complete
  Alpha review and zero missing-review error.
- Batch-4 citation fidelity: 145 citations, no missing quote and no widening
  candidate.
- Dependency check: zero errors; 238 existing corpus warnings.
- Defect-ledger validation: 307 frontier-22 rows checked with zero shape error;
  both new fatal tuples have one matching defect row.
- Step-8 guard: all 56 current changes are licensed by exact confirmed-fatal
  adjudications or terminal resolutions.
- Step-8 scope check: 425 items partitioned, three remaining open rejections
  routed outside group c, and zero cross-group alert.

## Alerts and blockers

No cross-group alert was raised and no group-c blocker remains. The three open
rejections reported by the scope check belong to other groups; the engine owns
their routing and final closure.
