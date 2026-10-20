# Batch 71 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-71`; date: 2026-10-20.

## Scope and supplier checkpoint

Read the generated order and scope, reader report/findings, native `refute-71.json`, both pre/post snapshots, all three batch carriers, and the current batch-36 transformer carrier, its contract and manifest, and its three direct dependencies (including scaled attention). No touched/page obligations and no foreign gate obligations are owed. There are six finding obligations. All three owned item raw hashes equal both pre- and post-reader hashes: the reader made no item repairs. No mathematical content is edited by this adjudication.

## def-transformer-encoder-decoder-layer — reader:71:4, refuter:71:1, refuter:71:2

Current raw SHA256 is `48a140203c9256f57cf45a3477c670e6d57b6d0c3ea1df7ee5e764fa71cac543`, exactly the bound observed producer carrier. The producer is batch 36; consumer is `ex-empirical-language-model-scaling-law`. Its manifest declares MHA, positional encoding/mask and feedforward suppliers at level 2. Its definition contract contains no proof and says row attention inherits the nonempty-key domain; that review note is not an explicit hypothesis in the Definition and supplies no output-width restriction.

The width finding is valid: take n=1, d=2 and an otherwise admissible one-head MHA with d_o=3. Its supplier returns a 1-by-3 matrix whereas X is 1-by-2; the written residual addition is undefined. Each decoder attention residual has the same problem. Vaswani §3.1 explicitly gives every residual sublayer a common model width. Missing positive sequence lengths also leave empty encoder keys outside the stated MHA domain: with m=1,n=0 the cross-attention has no keys, and its softmax denominator is zero. This cannot be repaired by the causal diagonal of the separate decoder self-attention. The current carrier states neither n,m>=1 nor an empty-input branch.

All three decisions are **escalated**. Missing prerequisite: a well-typed, nonempty-sequence transformer-layer definition. Attempted local closure: checked all matrix dimensions, the inherited MHA domain, causal-mask diagonal and contract boundary explanation; the latter does not repair the actual Definition. Sources consulted: current local MHA/scaled-attention/mask/feedforward definitions, batch-36 contract and manifest, and [Vaswani §3.1](https://arxiv.org/html/1706.03762#S3.SS1). Required owner decision: have batch 36 explicitly constrain every attention output width to d and require positive integer sequence lengths (or completely define an empty-input alternative), reconcile its contract, and perform supplier-first consumer review. This dispatch cannot edit that producer. Two underlying defects remain open; no repair confidence or closure is claimed. The encoder/decoder diagram correctly directs residual inputs and encoder keys/values but inherits the same unresolved tensor typing.

The routing dependency path, producer pre-reader fingerprint and producer carrier-at-split are retained verbatim in the companion decisions. Neither registration nor old author review substitutes for the current defining-clause repair.

Next: review both HIGH owned examples; keep the scaling supplier risk open pending the owner repair.

## ex-empirical-language-model-scaling-law — HIGH risk (open)

Both Verification steps are sound positive-scalar algebra. The identity for lambda=1 gives ratio 1; lambda=2 yields the three displayed ratios, only when both scale values stay in the empirical regime. Zero or empty scales are excluded. No choice, limiting interchange or universality theorem enters. The allocation substitutions are arithmetic consequences of reported fits, not new optimization theorems. Its causal-stack supplier remains defective as described above, so the risk review is explicitly open despite the correct arithmetic. No consumer change can certify the missing supplier conditions.

Checked [Kaplan et al.](https://arxiv.org/html/2001.08361), §1.2 equations (1.1)–(1.3), §§2.1–2.3, §3, §§6.1–6.3 and Appendix A Tables 5–6: parameter/data ranges and WebText2 counts, separate fit regimes and scales, adjusted compute, allocation exponents, lower-bound qualification, and the empirical/model distinction agree. The paper's finite text-transfer observations supply no universal downstream guarantee. No item edit or corresponding proof-layout run is due. The contract now records the open supplier risk.

## ex-pretraining-adaptation-interface-limitations — HIGH risk (complete)

Every Verification step checked. The finite power-set spaces make every given g measurable. Each explicitly supplied constant kernel is a pointwise probability kernel; iterating the point-mass integrals gives exactly g(a,0) and g(b,1), even when these are infinite. The input singleton {b} has source mass zero and target mass one, disproving the local required domination condition. The supplied kernels also disagree, but no claim about uniqueness of conditional versions is needed. Sample size n>=1 and the attainment caveat avoid zero denominators and unjustified argmin existence; the construction uses no choice. The support diagram has the two correct mass-one arrows and the proof does not rely on it.

Read `def-source-target-distributions-and-shift` and all its direct suppliers. The product-rectangle preimage computation types the loss; the probability-kernel case of `thm-measurability-of-integration-against-a-kernel` is supported by its full local finite-kernel/pi-lambda, simple-approximation and monotone-convergence proof. Its exhaustion and signed branches do not enter this example. This is a focused interface review, not an audit of the entire transitive measure-theory library. The direct finite calculation is sufficient here.

Checked [Bommasani et al., §§4.10.1–4.10.3](https://arxiv.org/html/2108.07258#S4.SS10) and [CS324 Adaptation, optimization formulation and fine-tuning](https://stanford-cs324.github.io/winter2022/lectures/adaptation/). Their question concerns conditions linking the two population losses; prompting keeps model parameters fixed. The item retains the dated, conditional framing and makes no benchmark comparison. Its complete risk review is recorded in the owned contract.

## Published findings — reader:71:1–3

All three findings are **confirmed_nonfatal**, rather than the reader's fatal classification. The current Definitions still contain the reported inline links and lack immediately following Definition references sections. This violates the uninterrupted-section direction without changing any quantifier, domain or mathematical implication. Published carriers remain read-only. Existing closed `nonfatal-recorded` rows are reused for the identical defects, avoiding duplicate defect identities; closure here is the bounded finding disposition, not completed editorial repair.

| Obligation | Published item | Existing closed defect |
|---|---|---|
| reader:71:1 | def-measurable-function-between-measurable-spaces | ml101-b27-3a-published-format-1 |
| reader:71:2 | def-measure-kernel-and-probability-kernel | machine-learning-all-101-2026-10-19-3a-b26-published-format-7 |
| reader:71:3 | def-product-sigma-algebra-and-finite-product-sigma-algebras | ml101-b4-3a-published-format-6 |

The measurable-function definition gives exactly measurable inverse images; its equivalent preimage family is a sigma-algebra, since inverse images preserve complements and countable unions, also for empty spaces. Kernel evaluation measurability and pointwise normalization cover the two explicit finite kernels, including the stated empty-source/empty-target caveats. The product definition generates precisely the rectangle sigma-algebra; empty-product and one-factor conventions are stated. Read its rectangle and generated-sigma suppliers and the complete intersection/minimality proof. No mathematical supplier repair is needed for the assigned example. Owner strategy: preserve the entire Definition and its hypotheses, replace linked terms by plain terms, and relocate all links, one per paragraph, into the immediately following Definition references section; retain published status and all metadata.

Incidental outside-scope alerts while assessing these prerequisites: `def-measurable-space`, `def-measure`, `def-generated-sigma-algebra`, and `thm-generated-sigma-algebra-exists-and-is-minimal` also contain inline links in their complete Definition/Statement. These are additional nonfatal presentation alerts only; they create no extra routed decisions or whole-item audit claim. Owner relocation belongs in the same published maintenance path. The generated-sigma existence proof explicitly uses the power set to make the intersection family nonempty and handles the empty underlying set correctly.

## Pages, dependencies, and scope boundaries

Both A/B pages are frontmatter only with `page_layout: compact-v1` and unchanged inventories/status. Their raw bytes match both snapshots. Foundation-model and support diagrams separate fixed-parameter conditioning from optimization, and point-mass supports respectively; arrows and labels agree with the text. The transformer diagram is reported above. No missing diagram is required by either finite calculation. No Statement/Definition changes, new items/pages, withdrawals or published edits are made. Existing withdrawal proposals and stable IDs are preserved. Owned consumer dispositions are recorded in `briefs/tasks/frontier-dependency-ledger.md`; the canonical published ledger is updated under its lock with deduplicated index entries.

## Checks and handoff

Initial risk-report: two HIGH items and one MODERATE, zero errors. Final reviewed-required result and focused contract/precheck results are recorded below after execution. No judge, stamps, engine dispatch or full gate battery is initiated. The live disk status reports unfinished Step 3a and the pre-existing collect-57 blocker; Git HEAD was `951a2e7a6d`. Owner action remains necessary for batch-36 transformer width/domain repair, its consumer check, and completion of the scaling risk review.
