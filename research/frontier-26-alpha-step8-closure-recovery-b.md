# Frontier-26 group b — Step-8 rejudge closure recovery round 1

## Summary

Handled all 10 exact live tuples assigned to group b: 5 `confirmed_fatal`, 5 `confirmed_nonfatal`, and 0 `false_positive`. Only the five fatal items were edited. No other-group item, published dependency, page, scope record, judge verdict, or stamp was changed.

## Exact outcomes and licensing rows

| item | context | pre-edit guard hash | outcome | rejection tested | disposition |
|---|---|---|---|---|---|
| `def-normal-and-conormal-bundles-of-an-embedded-submanifold` | `d7070c7ba603a3fb371f1b016dea40a4ae53fdd0a672209b4f8ea477813da5b2` | `fffe263acacfaa6c97723170aa3390a1aab103b2c8330d2ff158a8d8a1093ca9` | `confirmed_fatal` | The definition uses $T_pS$ and $di_p$, but its cited embedded-submanifold definition only gives slice charts and says a later lemma supplies the smooth structure on $S$. No cited fact establishes that $S$ is a smooth manifold or that $i:S\to M$ is smooth, so these symbols are unlicensed. | Added the slice-chart smooth structure and smooth-inclusion result before using tangent spaces and the differential of the inclusion. |
| `def-vector-subbundle` | `9b219eda3ebca7e7ee88ed1a72640dc4407faec6086194170409455830efa748` | `94179b38d4b660161e292ea81d6f62f09208861b1578a1485e1308db38db23e4` | `confirmed_fatal` | The parameter $k$ is never declared (in particular, not required to lie in $\mathbb N$ with $k\le r$). Thus the expressions “rank $k$” and $(s_1,\dots,s_k)$ are not well-formed for the stated data. | Declared k in N with 0 <= k <= r before rank-k and k-frame notation. |
| `ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial` | `3a0ef5bbaee7d1d6785b4e94198016b3e91f3c1fe97d879367de3d6797dae309` | `f9c5dec810309616182a909166ff46af63dd7e69a80cc947814d085ac4764b7a` | `confirmed_nonfatal` | [L1] overstates its citations: they give a smooth normal bundle and an isomorphism with $TS^n{}^\perp$, but do not say this orthogonal complement is a line bundle. Its rank-one claim is established only later in step 1.1, so it cannot appear in [L1]'s restatement. | The rank-one conclusion is proved immediately in step 1.1; the issue is only an overfull fact restatement. |
| `ex-the-tangent-bundle-of-the-circle-is-trivial` | `fca2223329039d29f502cc2ff2899477a920e7c49ce8cab90ff3f5bfda9f70c7` | `0b364f03a8eba7d69d5699a011111d5788d8b6e44ebce7d04ec04bfe31c82f77` | `confirmed_nonfatal` | Step 1.1 asserts that $(-y,x)$ is tangent to $S^1$ merely because it is orthogonal to $(x,y)$. [L1] gives only the vector-bundle structure, not the needed identification $T_{(x,y)}S^1=(x,y)^\perp$; no cited fact or argument establishes it. | The regular-level-set tangent-space calculation is immediate and does not alter the correct witness. |
| `fs-every-diagram-in-a-monoidal-category-commutes` | `473153f0582ec702c92293aa20b29be52d4510df8c907b9676d44d99bdfc4329` | `150bc9a9841ececc25d919895d2259e300ec8ea396f72f5aa7b66018ea75dff3` | `confirmed_nonfatal` | Step 1.1 wrongly says [L2] supplies a cartesian monoidal category of sets. [L2] is only conditional on a category having binary products and a terminal object; the item never establishes those hypotheses for \(\mathbf{Set}\). | Finite products and a terminal object in Set are elementary and close the conditional citation immediately. |
| `fs-every-monoidal-category-is-isomorphic-to-a-strict-one` | `bd1d9374eca7957eea7b5ccdf511b8b6c10c74f9a55816b53d7f6bcdd6bc6f8c` | `cc765f9672cc94ac8abfd98a71b88621a79afe28dccd2cd0e14d1ba40d303439` | `confirmed_nonfatal` | [L3] misstates its citation: the cited theorem only says a category with binary products and a terminal object is monoidal. It does not assert that \(\mathbf{Set}\) has those structures, so step 1.1's cartesian monoidal \(\mathbf{Set}\) is unsupported. | The cartesian structure of Set is an elementary instance of the cited conditional theorem. |
| `fs-the-mapping-cone-differential-needs-no-minus-sign` | `39611bf00d9baa72cb549fefbe38f1ac9742b989016d6d88583a9edd285a35d2` | `30d24c5590baa717b72e3c6aded2d0f80a628d76bab9a045f2c2ba9cb4b54252` | `confirmed_nonfatal` | Step 1.1 computes the modified cone differential and its square, but its tag cites only [A1] and the Given. The required original differential formula is [L2], which is not cited there; neither cited fact licenses the displayed calculation. | The missing L2 tag is an immediate local citation gap; the displayed calculation is correct. |
| `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle` | `9ccf3aa417d11ede0a5ec41ebc1057b41169994d14dd138e8c1c44e4d6eec25a` | `f514c4c18b1618a54e65dce367768d5ec723df46cf52e58cd84e612b54406337` | `confirmed_fatal` | [L0] overstates its citation. The cited proposition states only that $\nu(S)$ and $N^*S$ are smooth vector bundles; it does not state that $TM\|_S$ is a smooth vector bundle or that $TS$ is a smooth subbundle. Those extra claims are needed to apply [L1] and [L2]. | Replaced the inflated normal-bundle fact by exact tangent-atlas, induced-chart, smooth-inclusion, pullback, slice-chart, and subbundle facts. |
| `prop-cones-preserve-chain-homotopy-equivalences-of-arrows` | `a892e07bb5f9960ba9fa54cd372afb9c8fa251daf28aa6b4c2cbf15d51dce038` | `6c596a5ac00a6f415f20343d7eb4ee43b5ce4c856556b766a14ac6b272543f29` | `confirmed_fatal` | Step 2.1's formula for \(t'\) is wrong. Using \(\delta p=v'v-1\), \(\delta s=uu'-1\), \(\delta q=vv'-1\), and \(\delta t=gu-vf\), its differential is \(\delta t'=fu'-v'vv'g\), not \(fu'-v'g\). | Removed the extra qg term from t prime, giving differential t prime = fu prime - v prime g. |
| `thm-mac-lane-strictification` | `78026b5510ef2c8b5fa788dfb29940ccc06e4b9ed799a3057d9de816088871ab` | `26976f99135eee9acac6e6335fb11df9944d33db092670caecc08e0d4e8bcdd6` | `confirmed_fatal` | Step 4.1 only proves that the underlying \(L\) is an equivalence. The cited definition [L3] additionally requires a strong monoidal quasi-inverse and monoidal unit/counit isomorphisms; none are constructed or cited, so \(L\)'s monoidal equivalence is not established. | Constructed a strong monoidal quasi-inverse and monoidal unit/counit using full faithfulness and adjoint-equivalence data. |

## Licensed repairs and rejudge targets

- `def-normal-and-conormal-bundles-of-an-embedded-submanifold`: Added the slice-chart smooth structure and smooth-inclusion result before using tangent spaces and the differential of the inclusion.
- `def-vector-subbundle`: Declared k in N with 0 <= k <= r before rank-k and k-frame notation.
- `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle`: Replaced the inflated normal-bundle fact by exact tangent-atlas, induced-chart, smooth-inclusion, pullback, slice-chart, and subbundle facts.
- `prop-cones-preserve-chain-homotopy-equivalences-of-arrows`: Removed the extra qg term from t prime, giving differential t prime = fu prime - v prime g.
- `thm-mac-lane-strictification`: Constructed a strong monoidal quasi-inverse and monoidal unit/counit using full faithfulness and adjoint-equivalence data.

The five items above are the only rejudge targets. This dispatch did not initiate another judgment cycle.

## Cross-group alerts

None. The ten rejections concerned only owned items and exposed no defect in another group or published dependency.

## Changed files

- `items/def-normal-and-conormal-bundles-of-an-embedded-submanifold.md`
- `items/def-vector-subbundle.md`
- `items/prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle.md`
- `items/prop-cones-preserve-chain-homotopy-equivalences-of-arrows.md`
- `items/thm-mac-lane-strictification.md`
- `research/frontier-26-batch-6.proof-contracts.json`
- `research/frontier-26-batch-7.proof-contracts.json`
- `research/frontier-26-batch-9.proof-contracts.json`
- `research/frontier-26-proof-contracts.json`
- `research/frontier-26-judge-adjudications.jsonl`
- `research/frontier-26-alpha-b-step8-rejudge-round-1-ledger-rows.json`
- `research/defect-ledger.jsonl` and generated `research/DEFECT-LEDGER.md` through the prescribed append interface
- This report

## Targeted checks

- Focused precheck: 3/3 repaired proof-bearing items pass.
- Focused render check: 5/5 repaired items pass YAML, delimiter, wikilink-in-math, and KaTeX validation.
- Strict proof contracts: batch 6, 20/20; batch 7, 36/36; batch 9, 46/46; zero errors and warnings.
- Citation fidelity: 239 citations over 102 group-b proof-bearing items; no missing quote and no widening candidate.
- Dependency check: zero hard errors after replacing an accidental examples-page dependency; existing advisory warnings remain.
- Forward-reference and external-reference checks pass.
- Step-8 guard passes: 88/88 concurrent whole-run changes licensed.
- Step-8 scope check passes: four groups, 441 items, zero unrouted rejection and zero unresolved cross-group alert.
- Each of the five new fatal group-b adjudications has one matching defect-ledger row.

## Blockers

None within group b. The whole-run defect-ledger check currently reports fourteen missing rows, all owned by group d; this dispatch did not alter those items or fabricate their evidence. The engine owns routing that external residue and deciding whether the durable cycle budget permits rejudgment of the five targets.

