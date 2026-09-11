# Step 7 adjudication report — group a

Run: `phase-2-next-20`  
Owned batches: 1, 5  
Status: group a complete; level scope pending foreign-group alert dispositions

## Rejections

### `cex-chacon-correlation-subsequence-prevents-mixing`

- Tuple: `gpt-5.6-terra` / `cfcec32498b153978cd708c5472a1489936376e8155951f7e380139a4bd73c33`
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1 attributed both the fixed-set correlation estimate and `h_r -> infinity` to `lem-chacon-tower-height-correlations-obstruct-mixing`, but that supplier's Statement does not assert the latter. `def-chacon-three-cut-one-spacer-towers` directly proves `h_r=(3^(r+1)-1)/2`, which is the exact missing interface for the unbounded subsequence in step 2.1.
- Repair: added the tower definition to `deps`, cited its height formula in F1, and synchronized the batch manifest and proof contract. Pre/post guard hashes are `7546f0c33a19e6d14584dd5e53a4bd6ed70dd8261acf2462d437dcbe5d395704` / `ec97239330052749a062f2380bb3ec6dbac1da011f3e2103b0978183c2edbfdc`.
- Sources opened: the complete current Statements/Definitions and proofs of `cex-chacon-correlation-subsequence-prevents-mixing`, `lem-chacon-tower-height-correlations-obstruct-mixing`, and `def-chacon-three-cut-one-spacer-towers`. No web source was needed because the missing claim is proved exactly in the local definition.
- Checks: focused precheck pass; strict owning proof-contract pass; global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

### `def-chacon-three-cut-one-spacer-towers`

- Tuple: `gpt-5.6-terra` / `5dadde290aeb9e013c4ec1342d89f64775fa3ac6c0b05c3a01a26da6f039b936`
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: `def-lebesgue-measure-and-the-lebesgue-sigma-algebra` expressly introduces only a family of sets and restricted set function and defers completeness. `thm-lebesgue-measure-is-a-complete-measure`, under countable choice implied by the item's AC assumption, states exactly that the resulting Lebesgue measure space is complete.
- Repair: separated the definitional and completeness interfaces in the opening, added the completeness theorem to `deps`, and synchronized the batch manifest. Pre/post guard hashes are `387b32d45e0aa164e75799534ef8960c16b843fbe98c6a6d192dcb6c6c9676a5` / `36dd30ed185d2b36002b06a3b86f127037c580ec1c2651194c69a3faa2787573`.
- Sources opened: the complete local Definition of `def-lebesgue-measure-and-the-lebesgue-sigma-algebra` and Statement/proof of `thm-lebesgue-measure-is-a-complete-measure`. No web source was needed because the local supplier exactly resolves the cited-interface issue.
- Checks: definition precheck clean; strict owning proof-contract pass; global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

### `def-density-size-and-tree-count-for-carleson-tiles`

- Tuple: `gpt-5.6-terra` / `d6144307997e8997988cadfed7473328daebf2539a7d4f1a0bee5b6cb0bbb38e`
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the current definition used the reflexive order `t >= s` and explicitly included `s`. Lacey's Section 3 equation (3.5), together with the paragraph immediately after it, takes the supremum only over tiles strictly above `s`; the self term can change the value.
- Repair: changed the definition to strict ancestors `t>s`, defined strictness in the local order, proved the indexing family nonempty, synchronized the batch manifest and the affected exact contract quotations, and updated the endpoint boundary row. Pre/post guard hashes are `8325ffff81bf8d00935522489b83514dcc38f698db1db0206d971dc930c32aa8` / `0f3449dcfd77dc6cbcba18d5d1eccd15f9db737001bdf28a696d4a67fff6e413`.
- Sources opened: M. T. Lacey, *Carleson's Theorem: Proof, Complements, Variations*, [arXiv:math/0307008](https://arxiv.org/pdf/math/0307008), complete relevant Section 3 definition surrounding equations (3.4)-(3.10), especially printed pp. 11-12 and equation (3.5). It supports the strict-ancestor convention and the reason for it.
- Checks: definition precheck clean; strict proof-contract pass for the definition and four direct consumers; global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

### `fs-weak-mixing-implies-strong-mixing`

- Tuple: `gpt-5.6-terra` / `8ce6629125b43cc8c76396f425fec4604fed4b45f972f2689eaf5fb447eeff43`
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the final Chacon theorem's Statement supplies a weakly mixing but non-strongly-mixing system, but it does not state the fixed set, `2/81` gap, or the height formula used in refutation step 2.1. The local obstruction lemma and tower definition state those clauses exactly.
- Repair: retained the quantitative counterexample, introduced F4 with direct citations to the obstruction lemma and tower definition, added both direct dependencies, updated step 2.1, and synchronized the batch manifest and proof contract. Pre/post guard hashes are `f6ebe2ef48aa5fbaf6d56f9a75c6f6404aa3b2989f8a9875709bf4b3af2d3a72` / `b0013898d364ff4024faba0f6ec6af966c823cab0882d9d8a51c66bed29b5aca`.
- Sources opened: complete current local Statement/proof of `thm-chacon-transformation-is-weakly-mixing-but-not-mixing`, Statement/proof of `lem-chacon-tower-height-correlations-obstruct-mixing`, and Definition of `def-chacon-three-cut-one-spacer-towers`. No web source was needed because the direct local suppliers state the exact retained computation.
- Checks: focused precheck pass; strict owning proof-contract pass (including confirmation that an accidentally matched contract patch was removed from the unrelated invariant-subspace item); global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

### `lem-carleson-forest-summation-gives-restricted-weak-ltwo`

- Tuple: `gpt-5.6-terra` / `1aa24c7d08db660f3e7706f4374e28515665545d2d9da4485a44b71d1347bf36`
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F2 promoted the size-selection lemma's stated choice of trees and residual-size bound into a partition, while steps 4.1-5.2 require disjoint tile accounting. The supplier Statement does not assert that stronger interface.
- Repair: narrowed F2 to the supplier's deletion interface and added an elementary finite disjointification in step 4.1: replace each chosen tree by the tiles not used by earlier trees, retaining its top. Subsets remain trees, the union and remainder are unchanged, and the top-count bound cannot increase. The batch proof plan and proof contract were synchronized. Pre/post guard hashes are `8d9f0a44d2c91a2ecb72b5ee4ff587c8c7714f9421c4e7fd224a7e3b821bbbe7` / `e600ca0151add59232d1be72b0e7c6a96228a5ac21d9520b2c6b75fc2127d48e`.
- Sources opened: complete current local Statement/proof of `lem-carleson-size-selection`, including its finite selection construction, and the tree definition in `def-carleson-tiles-wave-packets-and-tile-order`. No web source was needed because the repair uses the supplier's exact stated output plus an elementary finite set argument.
- Checks: focused precheck pass; strict owning proof-contract pass; global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

### `lem-carleson-restricted-weak-interpolation`

- Tuple: `gpt-5.6-terra` / `10427f8d0454e3bc0fdc1b3827d6c8e7dfecac9e6852c2a8361dc23f218f4951`
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: step 6.1 rounded only the magnitude while retaining the input's varying complex phase, so the claimed approximants need not take finitely many values. Step 5.1 applies only to simple inputs, making this a load-bearing gap in the extension to general Lp input.
- Repair: defined explicit componentwise truncation and quantization of the real and imaginary parts. Each approximant now has a displayed finite range and finite-measure support, is dominated in modulus by the input, and converges pointwise; the existing dominated-convergence and finite-model limit argument therefore applies. The batch proof plan and proof contract were synchronized. Pre/post guard hashes are `dbe83edcfedaaa63f171f9f847d6720e90e4ffd3d3fecfbccc3273c1a8a40727` / `d8e3307d7c2d30109495597ea455d5a941c3385870c80b54111de1a3994c6b0f`.
- Sources opened: the complete current item and its exact local dominated-convergence, Hölder, and finite-model interfaces. No web source was needed because the defect and repair are elementary properties of the displayed approximants.
- Checks: focused precheck pass; strict owning proof-contract pass; global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

### `lem-carleson-signed-tree-weak-one-one-estimate`

- Tuple: `gpt-5.6-terra` / `c8f7dfeafd26049b051cf97d7c5c60ca0d30b8b22f8d11f07617443374b47b8f`
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the closing Statement equated the proved positive Schwartz weight with `L chi_{J_0}` without defining `chi_{J_0}`. Under the ordinary characteristic-function reading the equality is false. Lacey's notation is instead a normalized translate-dilate of a positive bump.
- Repair: defined Lacey's normalized bump notation explicitly at the exponent twenty used on this page and showed `chi_{J_0}=L^{-1}w_{J_0}`, so the right-hand side is exactly the source's `||f L chi_{J_0}||_1`. The batch manifest and the exact direct-consumer contract quote were synchronized. Pre/post guard hashes are `5adc1a2a76a6ce30bb6f9126349ef5705818e7693e03050eebf94bb44c46cca2` / `c1465fe1f556d621d09035b3f86f5515189a75b981318a628946140fb03231eb`.
- Sources opened: M. T. Lacey, *Carleson's Theorem: Proof, Complements, Variations*, [arXiv:math/0307008](https://arxiv.org/pdf/math/0307008), equation (3.4), which defines the normalized bump, and the complete paragraph containing equation (7.11), which uses `|I_T| chi_{I_T}` in the signed-tree weak bound.
- Checks: focused precheck pass; strict proof-contract pass for the item and its direct consumer; global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

### `lem-chacon-eigenfunctions-are-constant`

- Tuple: `gpt-5.6-terra` / `87ae1e3d3d9fadd2dc440866c376497d6a39dc1183c501f0b428ce91954883a9`
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: step 2.1 uses the stage level names, common height and width, three-way cut, one-spacer ordering, and the resulting `h_r` and `h_r+1` routes. The density lemma and limiting-map extension do not state this finite-stage geometry; `def-chacon-three-cut-one-spacer-towers` does.
- Repair: added the tower definition as a direct dependency and F7, then derived both return-time offsets explicitly from its displayed next-stage ordering before invoking the conull extension. The batch manifest and proof contract were synchronized. Pre/post guard hashes are `b2f52f7d626a599419443e368306b27c0d5ca18b0b834ec6040199f85e49f2fd` / `bce9d5543cbd82627393911058df25dd0a398e3e872c18ad0cf6bdd3ac6a8b5f`.
- Sources opened: complete current local Definition of `def-chacon-three-cut-one-spacer-towers` and Statements/proofs of the density and conull-extension lemmas. No web source was needed because the finite ordering and partial arrows are explicit locally.
- Checks: focused precheck pass; strict owning proof-contract pass; global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

### `lem-closed-l-two-subspaces-have-orthogonal-projections`

- Tuple: `gpt-5.6-terra` / `f3135e234aba12847cce48d105241d88249277e77bac64aa1c14fb2421eac51f`
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the minimizing family was defined only for integers at least one, but the repository's sequences are functions on the natural numbers including zero. There was no `g_0`, so the displayed family did not meet the cited completeness interface.
- Repair: reindexed the family by all natural numbers with error `1/(n+1)`, explicitly including `g_0`, and updated the Cauchy estimate accordingly. The batch strategy and proof contract were synchronized. Pre/post guard hashes are `2c9f336f75a947e9c771ace6459ff0244b04daab70efb0e91ff7a7ecbdb2b0a4` / `4b1094d83f6b842b4424b89ed073083ede5c069d36383db5303302535746d04b`.
- Sources opened: complete current item and the local complex-Lp completeness Statement. No web source was needed because this is an internal indexing/type defect.
- Checks: focused precheck pass; strict owning proof-contract pass; global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

### `lem-hilbert-cesaro-averages-converge-to-the-fixed-subspace`

- Tuple: `gpt-5.6-terra` / `814432d40e36db28acea3bc7177d9da13214b327b21b273d3c73d2f46b978076`
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: step 1.1 needs completeness of the closed L2 subspace `H` to recover a preimage limit, but F1's cited Statement grants projections and decompositions rather than completeness. The mathematical fact is elementary once ambient complex L2 completeness is supplied, but that supplier was only hidden upstream.
- Repair: added the complex-Lp completeness theorem as a direct dependency and F5, explicitly derived completeness of closed `H`, and then applied it to close the isometric range. The batch manifest and proof contract were synchronized. Pre/post guard hashes are `12c9fb3dad59a810aac15c68d1ad59c23c96ef79ad2891435040275446f107d3` / `e81c00856ca75f85d68b0267212256a4517211a8d8983c255ed6fe3aa6af03a7`.
- Sources opened: complete current local Statements/proofs of the projection lemma and complex-Lp completeness theorem. No web source was needed because the missing interface exists exactly in the library.
- Checks: focused precheck pass; strict owning proof-contract pass; global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

### `lem-nonzero-compact-kernel-operators-yield-nonzero-positive-compact-k-star-k`

- Tuple: `gpt-5.6-terra` / `80a7a43dc5628670e35941039c077d59f585af17d12355d8f2c94a32d6240894`
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F2 called zero marginal integrals equivalent to `K1=K*1=0` and attributed preservation and a nonzero restriction from the latter to a supplier whose Statement gives only the forward marginal implication. The consumer assumes zero images directly, so that supplier is inapplicable.
- Repair: removed the inapplicable dependency and proved both operators preserve `H_0` directly from their adjoint identities and zero images; the nonzero restriction follows by subtracting the mean. Step 3.1 now also derives Koopman invariance of `H_0` from `U1=1` and pairing preservation. Manifest deps and the proof contract were synchronized. Pre/post guard hashes are `0bd333966df257f31e506025c8ba2217d1ee10548b897db0ba423a01c2718d2f` / `f8286559315930a6f1a52cc400472fc5528a148c7efaeaa842617c90ca477038`.
- Sources opened: complete current local Statement/proof of `lem-invariant-square-integrable-kernel-produces-a-compact-intertwiner`, the adjoint supplier, and the local operator conventions. No web source was needed because the retained argument is an elementary pairing computation.
- Checks: focused precheck pass; strict owning proof-contract pass; global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

### `lem-nonzero-positive-compact-self-adjoint-operators-have-positive-finite-dimensional-eigenspaces`

- Tuple: `gpt-5.6-terra` / `9b6b74e0d63d15a728e90799e617926e344d61450b115e9975210b27d6212f1c`
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the maximizing sequence was indexed by the natural numbers but required `q(x_n)>alpha-1/n`, which is undefined at `n=0` under the repository's convention.
- Repair: replaced the error with `1/(n+1)` for every natural `n` and updated the residual estimate. The compactness proof is otherwise unchanged. The batch strategy and proof contract were synchronized. Pre/post guard hashes are `76def76eb897ac506b5c8637b286f0548678c07c37f67aa3fb2e38f546924a23` / `7cbb13b3a1da89dd16000b95cfe8da6f5b221e09c97d51a8a1ba0752cfb25653`.
- Sources opened: complete current item and its local sequence/operator conventions. No web source was needed because this is an internal indexing/type defect.
- Checks: focused precheck pass; strict owning proof-contract pass; global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

### `lem-square-integrable-kernels-define-bounded-compact-integral-operators`

- Tuple: `gpt-5.6-terra` / `d97ffba35a96582f10d7787b1707e9a4cf785619da98267a369e5f5e0e85b4db`
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1 attributed product-measurable representatives to the rectangle-density lemma's Statement, which supplies only density and the zero-pairing conclusion. Step 1.1 needs the representative to apply uncompleted Fubini and obtain an original-factor measurable output for incomplete factors.
- Repair: narrowed F1 to rectangle density, added the exact completion-measurable representative theorem as direct dependency F8, and applied it to the real and imaginary parts before Fubini. The batch manifest and proof contract were synchronized. Pre/post guard hashes are `ff4acec036fac13fc1c9ac8eca859ef491a3d1f56af409e17458e4e1750a49b8` / `eac89f01465277cc93ab78a476aaa7c377a154cfebeecf6132c667879bcd09ee`.
- Sources opened: complete local Statements/proofs of the rectangle-density lemma and `thm-completion-measurable-functions-have-base-measurable-representatives`. No web source was needed because the latter supplies the missing interface exactly.
- Checks: focused precheck pass; strict owning proof-contract pass; global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

### `thm-carleson-hunt-maximal-inequality-on-the-torus`

- Tuple: `gpt-5.6-terra` / `6d046193fd0db811f5ec67d237428bf3b19ac2523ff100dd3935e3787c97be99`
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: step 3.1 attributed an exact factor `2D_p` and the transfer mechanism to F4, but the cited transfer Statement asserts only existence of a torus maximal bound from the real-line bounds. The theorem needs only a finite exponent-dependent constant.
- Repair: replaced the unlicensed exact factor with a finite `C_p` depending only on p and the supplied real-line bound. The proof contract and its risk note were synchronized. Pre/post guard hashes are `cda6e5bb634fdcbc51ce2711e61b4920d062afae3f99390733d2ad815937e8ce` / `dc8177f6b6a82a3302d347e8eeb5ea1f40e1e519e1c28a5a0d471426ae2bf65d`.
- Sources opened: complete local Statement/proof of `lem-carleson-real-line-to-torus-transfer`; its proof does obtain a factor two, but its public interface does not state that quantitative factor. No web source was needed to narrow the consumer to the exact local interface.
- Checks: focused precheck pass; strict owning proof-contract pass; global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

### `thm-chacon-transformation-is-ergodic`

- Tuple: `gpt-5.6-terra` / `7cac937a833aee49cdb8fc50fc0f64bbed9060ee41c4a5a2bd81a619e700c504`
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1 attributed compatible level translations to the limiting-map extension, and step 1.1 used `T^(k-j)` between arbitrary stage-r levels. The extension Statement only says that the limiting map agrees with finite partial translations; the finite-stage consecutive arrows are defined elsewhere.
- Repair: added `def-chacon-three-cut-one-spacer-towers` as direct dependency F5, derived the level-to-level iterate by composing its consecutive translations, and then used F1 only for agreement with the limiting map on the invariant conull set. Manifest deps and the proof contract were synchronized. Pre/post guard hashes are `8de2606916d9025ee04f11085987f07b8e24ecda4ab50615a7f32851cce6feab` / `e344692d4ffbfe64ebf0d60569dbb3da15bb3f0ca67eba844190e8bd1b4aa983`.
- Sources opened: complete local Definition of the Chacon towers and Statement/proof of the limiting extension. No web source was needed because the exact two interfaces are explicit locally.
- Checks: focused precheck pass; strict owning proof-contract pass; global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

### `thm-weak-mixing-is-equivalent-to-absence-of-nonconstant-eigenfunctions`

- Tuple: `gpt-5.6-terra` / `7f255533da4b74856e28b17382c2b6abcf470cf625a5b3a22ab5001b58b9b34c`
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F4 attributed completed-product preservation and kernel injectivity to `lem-invariant-square-integrable-kernel-produces-a-compact-intertwiner`, but neither conclusion occurs in that supplier's Statement. Both are load-bearing: the mean-ergodic step requires the product Koopman operator to be an isometry, and the compact-intertwiner contradiction requires a nonzero kernel to define a nonzero operator.
- Repair: proved product preservation first on rectangles and extended it with the exact generating-pi-system theorem, then used the completion-domain interface and the exact Koopman-isometry theorem. Added the square-integrable-kernel theorem directly for injectivity and narrowed F4 to its stated intertwining interface. Manifest deps and the proof contract were synchronized. Pre/post guard hashes are `714e82b60f240d7e65adf7e8e6046d7f2a6f23c9da38e85b4372ad355413f0ea` / `81ffd479e5b7b67f3e1d201f249446425c3589b98870094e400e1bb3d6adea11`.
- Sources opened: complete current local Statements/Definitions and relevant proofs of `lem-invariant-square-integrable-kernel-produces-a-compact-intertwiner`, `thm-measure-preservation-on-a-generating-pi-system`, `thm-koopman-operator-is-a-linear-isometry-on-l-p`, `def-completion-of-a-measure-space`, and `lem-square-integrable-kernels-define-bounded-compact-integral-operators`. No web source was needed because the exact missing interfaces are present locally.
- Checks: focused precheck pass; strict owning proof-contract pass and strict full batch-1 proof-contract pass; global depcheck exits successfully with pre-existing warnings only.
- Rejudge target: yes.

## Reader-warning dispositions

- `s8a-9f1f4f613041edd90f79dfb2` — `nonfatal`. The two uses of `kappa` are separately and explicitly local: a positive reconstruction constant in the wave-packet lemma and the integer exponent 20 in the next definition. No interface transports one meaning into the other, so this is presentation-only and received no content edit.
- `s8a-57e1e1c2aa2b9a335a4991b3` — `nonfatal`. The two examples use mathematically valid `Proof` sections where SCHEMA prefers `Verification`; their claims, facts, calculations and deps are unaffected. Fatal-only Step 7 does not license the heading polish.
- `s8a-6889ae306bf4f2fa068e5e05` — `not_defect`. The sentence explicitly fixes this page's local meaning of “completed Lebesgue probability space”; it does not classify arbitrary probability spaces, and no proof uses a classification theorem.
- `s8a-fb25c16d6288da4c37c3dba2` — `not_defect`. The absent Parseval page is planning metadata permitted by the frontier policy. None of the eight owned item deps or proofs reaches it, and every actual citation resolves.
- `s8a-1a9341f491db4e9b962b4724` — `not_defect`. The forest lemma is a complete independent result; the later theorems use the Hunt-distribution/interpolation route, and no contract requires every page item to be a direct dependency of a later item.
- `s8a-d933b25791d97658fb3c3c7d` — `not_defect`. The single-tree proof uses the maximal theorem only in the Euclidean sigma-finite specialization. The published consumer-supplier ledger already records the upstream general Marcinkiewicz debt and expressly says this consumer is not additionally blocked.
- Sources opened: both local kappa-bearing items; both example files; the eigenfunction definition and its consumers; the complete batch-5 page manifest and all eight Kolmogorov deps; the forest item and its page-level consumer graph; the single-tree item and the exact current published-consumer-supplier ledger entries for the maximal corollary and Marcinkiewicz theorem. No new web reading was needed.
- Content changes: none licensed by these six warnings.

## Cross-group alerts

- Group b raised four seam alerts after the original task snapshot because its licensed supplier repairs made exact batch-5 proof-contract quotations stale. All four are `not_defect`: the consumers work on `R`, so they satisfy the suppliers' now-explicit `n >= 1` hypotheses with `n=1`; no item claim, proof or dependency changed.
- `s8a-f341149f71aa52b5f4799cbd` — refreshed the Plancherel Statement quotation for `lem-carleson-size-selection`.
- `s8a-5d796284787d379b227f695d` — refreshed the Plancherel Statement quotation for `lem-carleson-single-tree-estimate`.
- `s8a-2bf6ac4833f917bc29734a9b` — refreshed the Plancherel Statement quotation for `lem-carleson-signed-tree-weak-one-one-estimate`.
- `s8a-1bb5718ed8eab51da39c66ba` — refreshed the Schwartz-L2 membership-and-density Statement quotation for `thm-carleson-maximal-operator-is-strong-ltwo`.
- The same strict pass exposed one stale size-definition quotation in `lem-carleson-size-selection` from this group's earlier strict-ancestor repair; that owned evidence quote was synchronized without changing item content.
- Checks: strict proof-contract pass for all four alerted consumers.

## Final checks

- Group-a ledger audit: exactly 16 adjudications for the 16 owned rejection tuples, 16 matching Step-7 defect-ledger rows, and no duplicate tuple; all are repaired `confirmed_fatal` findings and all 16 are rejudge targets.
- Alert audit: all six owned Step-6 warnings and all four incoming group-b seam alerts have one group-a disposition, with no duplicate alert id.
- Step-7 edit guard: pass — 80/80 then-current item changes were licensed by confirmed-fatal defects.
- Strict proof contracts: pass for all 24 batch-1 items and all 27 batch-5 items.
- Global dependency check: exit 0 with 473 pre-existing warnings.
- Step-7 scope check with pending foreign alerts allowed: pass — eight groups scoped, 625 items partitioned, zero open rejections, and 37/43 reader warnings or alerts dispositioned.
- Default Step-7 scope check: blocked only by six undispositioned alerts owned by group h: `s8a-3804cf0169a47165d2120e62`, `s8a-556b2f158c0042842d3cf10f`, `s8a-4c4531c88202fc9fdf92d331`, `s8a-ada52bb597c32a51c959863c`, `s8a-47057519c08dd835e50fdc91`, and `s8a-1bce10f066b7a589c60d1229`.

## Remaining work

Group a has no remaining adjudication, repair, alert, or evidence obligation. The level-wide default scope gate remains pending the six group-h dispositions listed above; they are outside this dispatch's write ownership.
