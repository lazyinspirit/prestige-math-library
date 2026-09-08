# Phase 2 wave 1 — Step 8 group b adjudication

Run: `phase-2-wave-1`  
Role: `alpha-adjudicate`  
Group: `b`  
Batches: `14`, `15`

## Result

All 15 exact judge rejections assigned to group b were adjudicated against the current item, its complete cited dependencies, and the pre-Step-8 guard state. Outcomes are 3 `confirmed_fatal`, 7 `confirmed_nonfatal`, and 5 `false_positive`.

The three fatal items were repaired and are the only group-b rejudge targets:

- `def-aronszajn-suslin-and-special-tree`
- `def-coded-first-order-zf-theory`
- `thm-special-aronszajn-tree-construction`

The twelve nonfatal or false-positive items were not edited. Every fatal has one exact guard-bound adjudication and one matching defect-ledger row. Group b had no Step-7 reader warning, incoming alert, outgoing cross-group finding, published-item repair, new lemma, or blocker.

## Scope read and evidence

All 100 items on the six owned A/B pages were read in full. Rejection-bearing dependencies were also opened in full, including the following decisive interfaces:

- `def-first-uncountable-ordinal`, `thm-omega-one-is-the-least-uncountable-ordinal`, and `def-kappa-tree-and-tree-property` for the typing of the Aronszajn-tree definition;
- `def-club-subsets-of-ordinals` and `def-club-filter-and-nonstationary-ideal` for the stationarity scope at `omega_1`;
- `def-set-signature-and-finite-syntax-strings` and `def-set-structures-and-variable-assignments` for the strictly positive finite-arity convention;
- `def-set-coded-formal-derivation` and `lem-hilbert-propositional-and-equality-rules` for axiom/rule classification, `not bottom`, and restricted existential elimination;
- `lem-bounded-rational-tree-limit-extension` and `thm-special-aronszajn-tree-construction` for the limit-level construction and rational-label data;
- `lem-prescribed-start-and-starting-point-free-serial-choice-are-equivalent-in-zf` and `thm-complete-metric-baire-principle-implies-dependent-choice-over-zf` for both DC start conventions;
- `def-henkin-closed-term-model` for literal equality and the seed requirement;
- `def-finite-support-poset-product` for the greatest-element boundary.

No external web source was needed: every disputed point was resolved from the exact on-disk definitions, statements, proofs, and elementary finite-syntax or set-coding derivations. No mathematical uncertainty remained.

## Exact adjudications

Each row below has the exact model recorded in `research/phase-2-wave-1-judge.jsonl`; the full tuple is completed by the listed item and `context_sha256`. `item_sha256` is the full pre-edit `itemHashGuard` digest.

| item | `context_sha256` | `item_sha256` | outcome | evidence and disposition |
|---|---|---|---|---|
| `def-aronszajn-suslin-and-special-tree` | `15093ab0d961de5ec49904d3313ad5973d4c6e8a487fd05cf66bc65777ec3da6` | `896833dce8ec0032e37663bcd558306fd1f3c6c5795a6176b7589943b055091b` | `confirmed_fatal` / `dependency_citation` | The definition invoked the `kappa`-tree interface at `omega_1` before its declared dependencies established the infinite-cardinal premise. Repaired by stating height `omega_1`, countable levels, and absence of a cofinal branch directly. |
| `def-coded-first-order-zf-theory` | `aa63d7ddf6c97b29be392a455080aea1d360fdfe99886252f1884fb5a92bbccd` | `cace7d8e041fc2594c1140c2bc971a8301b2de2e03076606e2a2b20f6b8878c4` | `confirmed_fatal` / `logic` | The uniqueness macro could choose its comparison variable equal to the bound witness variable, causing shadowing and corrupting allowed Replacement instances. Repaired by requiring the comparison variable to be distinct from the witness variable as well as absent from the matrix. |
| `def-diamond-on-omega-one` | `ef57afa47a800917014cdfec5c4ba291afa01b24df5416eee1731c3a88e6ad7c` | `63d4a8cb84ebab17481a98808d5eb9307df949c10877fab28cba559d3d02dd09` | `confirmed_nonfatal` | The club-filter dependency has narrower cofinality scope, but this item immediately defines stationary to mean meeting every club and expands the exact club quantifier. The definition is correct; the citation-scope imprecision is local. No edit. |
| `ex-first-order-sentence-deduction` | `2276064f8204c0f35600165cc756c07d984bcb4e16105adabb0c3b4fc35b0f2d` | `e020070d30863445347b918a888cb661ca02ff20634e8db150f9aa9fe764655c` | `confirmed_nonfatal` | Lines 1 and 4 are universal-instantiation axiom instances, not inference-rule applications. The formulas and derivation are valid after that immediate label correction, so this is a local proof-annotation gap. No edit. |
| `fs-every-omega-one-tree-has-a-cofinal-branch` | `616ae24af9d65cc617529a7fc9a798a1ca979d668cac8a8c2fac2bd8dffd0b79` | `a16a50a2d07b7dbf65055b0dc7ec8d9c66c475df1e0c38e1ecbaee3d50435d50` | `confirmed_nonfatal` | The theorem surface supplies the specialness map actually used. Its proof, rather than its statement, explains that map by rational labels; that explanatory sentence is not load-bearing. No edit. |
| `lem-consistent-sentence-decision` | `f6eae6af0c6fe3e3264f0df1865bb5b4d7a1153a241fa502a404dd8b08093d5a` | `db51af9abfbcbe066142efe017473178c6c4ee057936815343cf2c62d88bcff4` | `confirmed_nonfatal` | The cited statement does not list `not bottom` separately, but its proof derives it immediately from equality reflexivity and generalization. The result is correct and the surface-restatement omission is elementary. No edit. |
| `lem-finite-knaster-poset-products` | `a806b3d2d75ad4f188a32a91134bade4cbd13126affccac852391c1e610ec9f4` | `badeba51e04e83a3813f850b85299746c1c82734964fcd92a029a17560b4ac2c` | `false_positive` | The finite-support-product dependency is unused. The item directly treats the ordinary finite Cartesian product, proves coordinatewise compatibility, includes the empty product, and never needs greatest elements. No edit. |
| `lem-fresh-henkin-axiom-preserves-consistency` | `08a3eabe27375007cbfa5139d77e98f1cd4bddfdaee5ea1cd82e68cf9cf52f46` | `d4732063296874963dd929d028bd512bb4513586cec6ca380c817a5a30506741` | `confirmed_nonfatal` | Restricted existential elimination is a primitive rule in the fixed calculus and is used in the cited derived-rules proof, although that lemma's statement does not re-export it. The inference is valid; the attribution gap is local. No edit. |
| `thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf` | `312e42afe121b49d11f45bf3bedd55c87b1c2706dee645cef19e8c052aaf4e0b` | `425d1f7060877044bb1eda6ea58b79d52f4a91cd65fc079b54a1dbcd7fb5776f` | `false_positive` | F2's exact cited statement supplies both starting-point-free and prescribed-start DC, and that theorem directly depends on the lemma proving their ZF equivalence. No edit. |
| `thm-elementary-ordinal-chain-union` | `1296a6ca4d34526b8a742805373300fec8940c79295e3f302de8659bad6211f1` | `187bf09f8c4b1865269af0f15e5e3ff41e8f757fb863d527cd7d41a6952c6ea9` | `false_positive` | The foundational signature definition maps arities into `omega` minus `{0}`. Nullary function and relation symbols are not permitted, so the positive-arity proof covers the full stated domain. No edit. |
| `thm-henkin-closed-term-truth-lemma` | `1e657d8caf7788360c040f7fbbb22c423d14f85495edd067834087d2f66eeff9` | `35f02d798d2781b807ecdb0b2d3f07ff38ceec75b03106dd3edcd4af10d50c06` | `confirmed_nonfatal` | F1 compresses the quotient interface imprecisely, but step 2.1 uses literal equality of quotient classes exactly as the dependency requires. The truth lemma is unaffected. No edit. |
| `thm-special-aronszajn-tree-construction` | `1bb4357dc19217820c770dbd12b322010e4f1f9b5cf9271f0eef86c18268c351` | `946acb3f6e93e4066aabab412525df0a1def3568a6ae9e951781216a076e8531` | `confirmed_fatal` / `dependency_citation` | The limit-extension statement exports existence but not the deterministic construction F1 claimed, while transfinite recursion needs a functional rule. Repaired by fixing one ambient well-order of candidate codes and selecting its least eligible limit extension. |
| `thm-tarski-vaught-set-structure-test` | `dca5bbbb71acbc27b9c871b9753c3f861380ada67a81eea9f2311b682f50e657` | `b054ed17e998bb2d63ea72728eba461154c0b6c3cf9bf788631a90f0caf3795e` | `false_positive` | The foundational signature definition requires strictly positive finite arities, so there is no omitted nullary relation case. No edit. |
| `thm-upward-lowenheim-skolem-with-choice` | `5ae6f66e90fe0caf873515a1f9d7704f6231d4ab9341a1cbd5e4752413a0c9be` | `c46c8285866f14064a738fdc9de6d015f70cce587141fde2dd3a3c0cf9d62daa` | `false_positive` | In this library every set signature is finite-arity by definition; “arbitrary” concerns the set size, not infinitary symbol arities. F2 and F3 apply throughout the stated domain. No edit. |
| `thm-well-ordered-language-henkin-completeness` | `b9e8ac3a2b64d61cf46dae9d9c729b5082e2420c4f69e75954b3502736459b87` | `3d1f145fcdaa3893af54a08a096a7a556abfc65657ca247c25ad5f7c896089d3` | `confirmed_nonfatal` | F4 omits the seed hypothesis in its restatement, but the construction explicitly starts with a seed and step 5 uses it to make the quotient nonempty. The actual application satisfies the hypothesis. No edit. |

## Fatal repairs and rejudge targets

| item | repair | post-edit `itemHashGuard` | defect row | rejudge |
|---|---|---|---|---|
| `def-aronszajn-suslin-and-special-tree` | Replaced the prematurely typed `omega_1`-tree shorthand by the direct height/countable-level/no-cofinal-branch definition. | `0f77ad2bb02454c26e24c0201480f37a3e34a0cbc5e757c60696b9bf82dd447d` | `phase-2-wave-1-A8-b-001` | yes |
| `def-coded-first-order-zf-theory` | Added `v` distinct from `w` to the uniqueness-macro freshness convention. | `496df579c616f313b5c650f5794204d3166bef8d4865331feb6c25252d887d5d` | `phase-2-wave-1-A8-b-002` | yes |
| `thm-special-aronszajn-tree-construction` | Removed the inflated F1 interface and made the limit-stage choice functional using a single AC well-order of set-coded candidates. | `f2f6e29dad5afe9bff57e263fb55c7dde81d62c709399f21415a21aa1a2acf14` | `phase-2-wave-1-A8-b-003` | yes |

No dependency edge, page placement, item id, or reading order changed. The repairs introduced no cross-batch dependency, so no batch frontier input or unified frontier-ledger refresh was required in this group dispatch.

## Alerts and shared-ledger disposition

- Step-7 reader warnings owned by group b: none; no row was due in `research/phase-2-wave-1-step8-alert-decisions.jsonl`.
- Incoming cross-group alerts owned by group b: none.
- Outgoing cross-group findings: none; `research/phase-2-wave-1-step8-cross-group.jsonl` was not changed by group b.
- Published-item repairs: none.

## Validation

- `node tools/tsx-run.mjs tools/precheck.mts items/def-aronszajn-suslin-and-special-tree.md items/def-coded-first-order-zf-theory.md items/thm-special-aronszajn-tree-construction.md`: passed the one proof-bearing target checked, 0 failures. The two definition items have no proof block and were not selected by precheck.
- `node tools/depcheck.mjs --quiet`: passed (`OK — no cycles, all references resolve, no draft items on published pages`); it also printed 473 pre-existing repository warnings.
- `node tools/defect-ledger.mjs validate --run phase-2-wave-1`: 64 run rows checked on the final rerun, 0 errors.
- Exact local ledger audit: 15 group-b adjudications, with 3 fatal, 7 nonfatal, 5 false positives, no duplicate or unmatched tuple, all pre-edit guard hashes matching the `pre-step8` snapshot, and no nonfatal/false-positive content edit.
- `node tools/step8-scope.mjs check --run phase-2-wave-1`: passed on the final rerun; 7 groups, 402 items, 0 open rejections routed, and 2/2 reader warnings/alerts dispositioned.
- `node tools/step8-guard.mjs ... --baseline pre-step8`: passed on the final rerun; all 26/26 Step-8 item changes were licensed by exact fatal authority.
- Additional whole-run diagnostic `node tools/defect-ledger.mjs check ...`: did not pass because eight confirmed-fatal adjudications owned by group a did not yet have matching defect rows. All three group-b fatal adjudications matched exactly; group b did not alter group a's ledger obligations.

The first concurrent whole-run check briefly observed group-f work still in flight; no group-b item appeared in its errors. The final rerun above is green. Group b's owned adjudications, repairs, hashes, and defect rows are complete, with no unresolved obligation or blocker.
