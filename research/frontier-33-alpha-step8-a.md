# Frontier 33 — Step 8 group a adjudication

Run: `frontier-33`  
Role: `alpha-adjudicate`  
Group: `a`  
Batches: `1`, `3`, `4`

## Scope and result

The rejection-blind Step-7 reading covered all six assigned pages and all 96 owned items. In this fresh adjudication context I reopened the six current page files, all seven rejected items, and every dependency needed to check the rejected inference or citation. No dependency edge or defect crossed the group boundary.

The seven exact rejection tuples resolve to two `confirmed_fatal` defects, two `confirmed_nonfatal` omissions that a competent reader closes immediately, and three `false_positive` objections. The two fatal items are the only group-a rejudge targets. There are no Step-7 reader warnings for this group and no cross-group alert.

## Sources consulted

- Rick Durrett, [*Probability: Theory and Examples*, fifth edition](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf), §1.2, PDF p. 17: identifies the indicator of an event in the sigma-field as a random variable. This supports the elementary missing line in `def-truncation-at-a-fixed-level`; the opened local arithmetic theorem then applies to the product.
- Christopher Bishop and Yuval Peres, [*Fractals in Probability and Analysis*](https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf), §1.2, book pp. 4–6, especially Proposition 1.2.6: defines unrestricted content and scale-restricted content by nested cover families, states `H^alpha(E) >= H^alpha_infinity(E)`, and proves that their null sets agree. This confirms that the missing cover-family inclusion in `prop-hausdorff-content-and-measure-have-the-same-null-sets` is an immediate definition-level derivation.
- D. H. Fremlin, [*Measure Theory*, Chapter 26](https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf), 264F(c), PDF pp. 37–38: states the Borel inner/outer sandwich for sigma-finite Hausdorff-measurable sets. Section 264J, PDF pp. 40–42, states `H^s(C)=1` for `s=log 2/log 3` and supplies the cover and sharp interval-count estimates. These passages support the Borel-core theorem and exact Cantor computation, but the local mass-distribution proof still needs an exact local statement that the chosen Cantor measure is a probability concentrated on `C`.
- Michael Lacey, [“Carleson's Theorem: Proof, Complements, Variations”](https://arxiv.org/pdf/math/0307008), §3, equations (3.13)–(3.16), PDF pp. 12–13: after an initial nonnegative size decomposition, explicitly decomposes into `S_n` for `n in Z`, obtains the `min(2^{-n},2^n)` bound, and says it is summable over `Z`. This directly contradicts the rejection of `rem-proof-cost-of-the-carleson-hunt-theorem`.
- Loukas Grafakos, [*Classical Fourier Analysis*, third edition](https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf), §4.2.1, Theorem 4.2.1, book p. 255: states existence of an integrable function whose Fourier series diverges almost everywhere. It does not say that the particular witness diverges at an externally prescribed point, which is the distinction repaired in the B-page remark.

## Rejection dispositions

Every tuple below has model `gpt-5.6-terra`; each hash is the full pre-edit `itemHashGuard` digest.

### `def-truncation-at-a-fixed-level`

- Context: `5855b3f2125637bea2d1ffec060377957ef97b57ebbd6be2cfb1de91e6af3f8d`
- Pre-edit guard: `5eec22d179f68f5f9511d0c26d2f9c551b64d5166d487c14e2004592c29356cb`
- Outcome: `confirmed_nonfatal`.
- Decision: the cited arithmetic theorem does not itself establish measurability of an event indicator. Once `E={|X|<=A}` is known measurable, however, `1_E` is measurable because the inverse image of any Borel subset of the real line is one of `empty`, `E`, `E^c`, or `Omega`; the cited theorem then makes `X 1_E` measurable. This is one immediate elementary proof line, not a defective definition or conclusion. No content, contract, impact, or judge data changed; rejudge target: no.

### `ex-three-series-with-rare-large-jumps`

- Context: `c5c09957a2e4850a82cca6714cc9c9d5813aa8f1adda1d99acf1815885968fb6`
- Pre-edit guard: `b78f8e6356135ff8a7b53f2aaca1410aeffb22df48883748e0481297369b3117`
- Outcome: `false_positive`.
- Decision: the page prose fixes all sums to start at one, and Fact F1 explicitly quantifies `(X_n)_{n>=1}`. The construction defines `X_1=0` and then `X_n` for every `n>=2`; neither `X_0` nor a zero-indexed random series is used. The product-space dependency's own coordinate convention can be shifted by one and does not change the example's declared sequence index. No files changed; rejudge target: no.

### `prop-finite-hausdorff-measurable-sets-have-borel-cores`

- Context: `5a61bfeacb8fc2f22c5653d2a3856270e37d9ce4bf4388c6dca47847df199f13`
- Pre-edit guard: `2a729e1823fde326d9bcbf6a25316aaf64676b6a6aac107b1e03c753b501977a`
- Outcome: `false_positive`.
- Decision: the item never quantifies the exhaustion index `j` or the final approximation index `k` over the library's zero-based `N`. The formulas `1/j` and `1/k`, together with “increasing closed exhaustion” and “apply this for epsilon=1/k”, unambiguously use positive integers. The judge's insertion of `j=0` and `k=0` is not a case admitted by the proof. The source theorem and the local argument agree. No files changed; rejudge target: no.

### `prop-hausdorff-content-and-measure-have-the-same-null-sets`

- Context: `6e67309293525a56b6373ce96cd04f30aa661c9c21cdb5a8b67f7f4f7e9d35b8`
- Pre-edit guard: `2c2e38f9874e24b2baa7a6b59ac1da882cb74286b093ae7e385ff7da8b2c1582`
- Outcome: `confirmed_nonfatal`.
- Decision: `def-hausdorff-measure` states the supremum formula but does not itself state `H^s_delta(A) >= H^s_infinity(A)`. The latter is immediate from the already fixed scale definition: every finite-`delta` cover is also an unrestricted cover, so infimizing over the smaller family cannot decrease the infimum. The proposition's statement and both directions are correct, including `s=0`; the thin F1 citation is nonfatal polish. No content, contract, impact, or judge data changed; rejudge target: no.

### `rem-lone-fourier-series-can-diverge-almost-everywhere`

- Context: `cf1d6da45c7721f02154859183ca07980cd551773923ac91fe4eeb9cdaae82a0`
- Pre-edit guard: `6da7b77beee7a9c76e25b3be1a222bc67ffe2d007964ef07fd5304d335c2fd43`
- Outcome: `confirmed_fatal` (`logic`).
- Decision: almost-everywhere divergence of a particular witness does not imply divergence at an externally prescribed point, which may lie in its exceptional null set. The final comparison was false as written.
- Repair: replaced the false strength comparison by the exact statement that the a.e. conclusion does not assert divergence at any particular prescribed point, while retaining the separate distinction from `L^1`-norm divergence.
- Post-edit guard: `47ed14bd14cdfc60e686165c8764a29800ecd0dec01610f69b4f02c326bf48ba`.
- Focused checks: the proof precheck correctly selected zero proof-bearing items; rendercheck passed; citecheck passed; and `content-policy --audit --manifest-only` passed for batch 4 with 14 scoped items, zero errors, and zero warnings.
- Rejudge target: yes.

### `rem-proof-cost-of-the-carleson-hunt-theorem`

- Context: `d34f11333caace12806d8fa098e0a3088910772815ceaeed48d147ad857ad2cb`
- Pre-edit guard: `8961dde7796f68897d6717815cec4f3d2c806e636602ca16c5e66df0bba31195`
- Outcome: `false_positive`.
- Decision: Lacey first obtains an auxiliary `n>=0` size decomposition, but then explicitly balances density with squared size and decomposes into `S_n` for `n in Z`. Equations (3.13)–(3.16) yield the displayed `min(2^{-n},2^n)` contribution and the source explicitly says this is summable over `Z`. The remark is an accurate roadmap. No files changed; rejudge target: no.

### `thm-cantor-set-hausdorff-dimension-and-exact-measure`

- Context: `07723436a58c7bb74bcf060b9ff333625a754ef5fd9415528039b725fdb854e6`
- Pre-edit guard: `ba2268079d6b9087dafeb3b367306c3583d89ee79212e0e3dad46c38eab439d4`
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Decision: the exact Statement of `lem-sharp-cantor-interval-mass-bound` supplies only the diameter bound. It does not supply the Borel-probability and concentration hypotheses needed to apply the mass-distribution theorem with outer mass one.
- Repair: added `prop-cantor-measure-is-a-singular-atomless-probability-measure` as a direct dependency and Fact F6, then cited F6 in step 2.1. The proposition's exact published Statement supplies probability and concentration on `C`. The batch-1 manifest and proof-contract citation/derivation entry were synchronized.
- Post-edit guard: `1cebdde28fec4a10c53b2a0f158dc93199214bb9537878d49a0382ac73d42835`.
- Focused checks: precheck passed; rendercheck passed; citecheck passed; the strict batch-1 proof-contract check passed for this item; `content-policy --audit --manifest-only` passed with 46 scoped items, zero errors, and zero warnings. An earlier non-audit content-policy invocation was inapplicable to an already-authored batch and produced only the expected `batch-item-already-exists` diagnostics; the audit-mode check is the applicable result.
- Rejudge target: yes.

## Reader warnings and cross-group alerts

- Step-7 reader warnings: none, so no row is owed in `research/frontier-33-step8-alert-decisions.jsonl` by group a.
- Cross-group alerts: none; `research/frontier-33-step8-cross-group.jsonl` was not changed by group a.

## Ledgers, validation, and gates

- `research/frontier-33-judge-adjudications.jsonl`: seven exact group-a rows appended atomically after checking the live judge ledger, tuple uniqueness, and current guard state. Counts are two `confirmed_fatal`, two `confirmed_nonfatal`, and three `false_positive`.
- `research/defect-ledger.jsonl`: `frontier-33-A8-a-001` and `frontier-33-A8-a-002` appended through `tools/defect-ledger.mjs append`; the interface also refreshed the generated ledger view. `node tools/defect-ledger.mjs validate --run frontier-33` checked the final live 610 run rows with zero errors.
- Exact group-a reconciliation: 96 owned items, seven unique adjudication tuples, exactly the two fatal items changed from the pre-Step-8 baseline, every closed item still at its adjudicated guard, and exactly one matching defect row for each fatal tuple; zero errors.
- Focused item validation: precheck passed the one proof-bearing repaired item; the remark correctly selected no proof body. Rendercheck and citecheck passed both repaired items. The strict proof-contract check passed the Cantor theorem with zero errors and warnings. Audit-mode content policy passed batches 1 and 4 together with 60 scoped items, zero errors, and zero warnings.
- Repository dependency check: `node tools/depcheck.mjs --quiet` resolved the new edge and found no group-a error, but exited red on the unrelated currently published item `def-tensor-product-total-complex-of-chain-complexes`, whose independent in-flight edit lacks an audit stamp; it also printed the repository's existing 475 warnings. Group a did not alter that item.
- Defect-ledger reconciliation: the final live run-wide `check` invocation checked all 610 run rows with zero errors.
- Step-8 scope check: passed, reporting eight groups, 923 partitioned items, 77 routed rejections, and no reader warnings or alerts.
- Step-8 guard: run with the prescribed pre-Step-8 baseline, live judge/adjudication ledgers, scope, terminal-resolution, published-repair, and owner-prerequisite-repair inputs. The final live run observed 41 changed items and licensed 12, including both group-a changes. The run-wide invocation exited red on 29 still-unadjudicated changes owned by other groups; none is in batches 1, 3, or 4. The exact group-a projection independently passed with only the two licensed rejudge targets changed.

## Rejudge targets

| Item | Post-edit guard |
|---|---|
| `thm-cantor-set-hausdorff-dimension-and-exact-measure` | `1cebdde28fec4a10c53b2a0f158dc93199214bb9537878d49a0382ac73d42835` |
| `rem-lone-fourier-series-can-diverge-almost-everywhere` | `47ed14bd14cdfc60e686165c8764a29800ecd0dec01610f69b4f02c326bf48ba` |

No group-a blocker remains. The engine owns the targeted rejudge and the other groups' outstanding gate work.
