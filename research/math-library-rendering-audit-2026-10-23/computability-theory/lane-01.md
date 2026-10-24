# Computability Theory visual audit — lane 01

## Scope and coverage

Reviewed all 88 assigned frozen ItemBodies (title and full body) and opened all 110 assigned screenshot tiles individually at original resolution. Assignment SHA256: `1bd322b1f3e6a3837077c12902dd702ad81d17431018a29e3b18afe515b5a882`.

Current source, frozen snapshot and rendered HTML hashes match their assignment digests for all assigned items. Every screenshot digest matches its capture receipt. Exact paths, SHA256 values, dimensions and per-tile view declarations are in [lane-01.json](lane-01.json). Scratch UI disclosures were opened by the capture workflow; no Scratch section occurred in the assigned frozen bodies. No clipping was confirmed from standalone tiles. No unexpected reference-title leak or raw ASCII caret/underscore formula defect was found. Intentional uppercase technique banners and block-line wikilinks are not defects.

## Confirmed rendering defect

### `ex-p-poly-equals-p-with-polynomial-advice` — line 46

- **Kind:** raw Markdown inline-code delimiters rendered literally.
- **Source and snapshot:** `items/ex-p-poly-equals-p-with-polynomial-advice.md` and its frozen snapshot; both SHA256 `7b7be1e46a9220f91443ce3126a0d8cc27d8dc4647710b22166b7bae0fa61822`.
- **Evidence:** [the original-resolution screenshot tile](screenshots/ex-p-poly-equals-p-with-polynomial-advice--01.png), SHA256 `7997a761a975e031ec83457025c8db64c6d7b1126f23b62d3ffb51aeaf549f07` (1200×1400). The verification sentence visibly includes double-backtick delimiters around the gate list.
- **Repair direction:** change the inline delimiter to a supported single-backtick span or another clean code presentation, then recapture. The mathematical meaning of the gate list remains readable.

## Optional diagram candidate

### `thm-three-sat-reduces-to-three-colourability` — lines 52, 54 and 56

Lines 52 and 54–56 define and use a gadget graph made of variable triangles, a distinguished vertex, clause triangles and occurrence-matched edges. A small diagram could show one variable triangle with `ν` fixed to colour 2, one clause triangle, and the matching literal-occurrence edges. Indicate the opposite colours assigned to two NAE literals and colour 2 on the remaining clause vertex; retain separate position vertices for repeated literal occurrences. This is a clarity candidate only: the prose specifies the graph and both colourability directions, and no defect was found. See [tile --01](screenshots/thm-three-sat-reduces-to-three-colourability--01.png), SHA256 `33f721cf760b5c6111b00b58a76cafa5e00df613696a48f89c5f36a67da363ab`, 1200×1400.

## Existing diagram and map checks

No TikZ/MathMarkdown diagram was captured in the assigned 88 items (each receipt reports `tikz_count: 0` and no diagram failures). The NFA transition-table example `ex-epsilon-closure-and-word-transition-on-a-three-state-nfa` was checked directly: its ε-closure and reached-state sequence for `ε,a,aa,ab,b,aba` is `{p,q},{q,r},{q,r},{r},∅,∅`, matching its stated acceptance and rejection outcomes. There were no existing arrow orientations or diagram maps requiring checks.

## Optional typography observations

No separate optional typography finding. Formula rendering was legible in the inspected tiles; raw ASCII and math delimiters were checked. Block-line wikilinks and uppercase technique banners are the expected preview styles.

## Item coverage and source SHA256

All entries are published. Source and snapshot hashes match; HTML digests match the assignment. Every tile listed here was opened individually at original resolution; complete tile SHA256/dimension evidence is in the JSON.

| Item ID | Source SHA256 | Tiles viewed |
|---|---|---|
| `cex-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality` | `0f49e7b04d2dc63294192f701e68242ccd69a19b1185342b2f208ec9f676e949` | 1 |
| `cex-gadget-correctness-needs-only-one-direction` | `7074c56efd423f27d76fa7b22940a72d868ffa6c69c8da649fe75c09edcbeace` | 1 |
| `cex-polynomial-size-implies-uniform-generation` | `37d23a7b058f12b55f137baa01a15df569efece95755905677ec9ec5344c3c2f` | 1 |
| `cex-sharpp-is-a-language-class` | `aea3bf59b66ce488cdb601d81335f7357a4d59ff41fb805128144ae8fe93ba83` | 1 |
| `cor-busy-beaver-is-not-computable` | `0456e214f1900355f5c94b95002350c97ade1b825fc2da80630e730fd698de18` | 1 |
| `cor-explicit-polynomial-time-constant-degree-expanders-exist` | `a67c56a3e2c7271c95a2ca6fb1334e5a680bf8ebab1c66be20b98e4281fc5b28` | 1 |
| `cor-p-is-properly-contained-in-exp` | `def2117a10933e6004d0b8d735751beff5607306f7ef2f9234143cf2a6422143` | 1 |
| `def-alphabet-homomorphism-and-induced-word-map` | `051219c1146ee8adbbff8305cdae1ed418a81bc4d011ff8323c57aa9f35e3d38` | 1 |
| `def-boolean-formula-cnf-and-sat` | `cc707fc7b5ff65d1686aecb162ed53fa3d70aae9e9b3182cc585c63b2ceec855` | 1 |
| `def-chomsky-normal-form` | `2788c92e5abd849dee03f12013d2096c73dd92f9dfb50cdf342506b3658c28b2` | 1 |
| `def-computable-many-one-reduction` | `f4c40bfc8c5534752ee9a8c99fa745c1423e1eb1c41ef09ed3a6dbad0cacab8e` | 1 |
| `def-constraint-graph-powering` | `b25b08bda008a695998329291f39f038ba19ad06ba33b1c5f467f24111742e55` | 2 |
| `def-deterministic-pda` | `3c20dfaf2ab2af2e53df4dee38237001347952ae27ad37897f9a97ff49b786ad` | 1 |
| `def-effective-hausdorff-dimension` | `9b2f313c6154e311a5f54c9467461f41af4eec69a14edede4340e9919d98e1ec` | 1 |
| `def-formula-and-branching-program` | `56bd2b7019caebaca202d4689c4102cb7b4cb1ca6bf8fd51e369ede5fb074332` | 1 |
| `def-greibach-normal-form` | `888bfebfd3814bea301f58765c4ba7e8ad8f4f54a954ec7b96be965306d6df96` | 1 |
| `def-instance-size-under-an-encoding` | `7b6022be2b7714a6e8e90f3cd230dada42c8a8175df1341d26674e625640a829` | 1 |
| `def-language-generated-by-a-cfg` | `4741414d690f09c4ca28fc05ee701c613908c64c35e7983af66888d65bce5e29` | 1 |
| `def-lowness-and-highness` | `6f085e2be2fb262d39c6dab572f0ea41c89718fc53269dcf6588c49dc4942152` | 1 |
| `def-multilinearization-operator` | `c5753d98143c23a5f3d5f5994954d55418b9d55a86f9aba29d54cace2944513d` | 1 |
| `def-np-hard-and-np-complete` | `ac70ce383b18f3f69999b3d901caf03b12a77f19929499819f274abbcfe0fd17` | 1 |
| `def-oracle-turing-reducibility-interface` | `58780383cfba5d15822565f38bb96433904f575f453c3768d4402b885e84b13f` | 1 |
| `def-pcp-class-with-completeness-and-soundness` | `0873a864e1083349a8005a801662f950e92e67374624e52f92330ad58248953e` | 1 |
| `def-polynomial-identity-testing` | `dc55c9ca83f69d07eeda049f1a37d5fff546129a2958ff50c930608dcc20c081` | 1 |
| `def-probabilistic-polynomial-time-machine` | `45a186e40680ff4b817bf85821cbe14d7cd506c8cd20ff2616b75c26dfe352e3` | 1 |
| `def-quadratic-equation-instance-and-tensor-code-oracles` | `1f7b20479a7bab33d886ed15098a06e3fb070eefc0643bdab66f4e4b2f4491a3` | 1 |
| `def-reed-solomon-outer-code-and-binary-linear-inner-code` | `a47bca2acb8385edde4f8d864e7655515602c9c187e9373de3196ce7b1dfe940` | 1 |
| `def-robust-codeword-blocks-for-constraint-graphs` | `61fc27f6c8e3779adb8731bd8b4b64698ce31b6c7ce020fb4ebc9892d29255e1` | 1 |
| `def-stay-put-one-tape-machine-and-run-interface` | `933d3e215b84da7daa3aeb13921ce7a0970f7fd3156fd9f368cce8f4cab32418` | 3 |
| `def-turing-degree-and-degree-order` | `e98089fc54319481e3a5a5264c320b8a1e633bc7d03e56c48fc768e0e2e88bc7` | 1 |
| `def-walsh-hadamard-encoding-and-relative-distance` | `e8f3eadb1a82a7aa7b65b55198feb4dcff9c46d2f2bc59bc4c93e955f35219c6` | 1 |
| `ex-cfg-emptiness-and-finiteness-are-decidable` | `3166ad5d5f108bdef6711c668a37c17d44e9a9324e6fcb9d78f2e32bcbabdcf2` | 1 |
| `ex-degree-order-is-representative-independent` | `363c331c1258b878a9336e794363ef56be2dd664825ae1a65e11a48af8e92d65` | 1 |
| `ex-epsilon-closure-and-word-transition-on-a-three-state-nfa` | `7e219c0784731eb16e61aecc7a98b14f6650bf18d879e16e2ca2f09808b7c6c9` | 1 |
| `ex-initial-configuration-on-empty-input` | `83ae537f36b66b19995b01dd28edcfa424e4f338fe6e6cae8e8c037f308f3c80` | 1 |
| `ex-majority-error-bound-from-chebyshev` | `27cbd04be0c83a29ecb8cded714d9bff5ff7ceee097b643a521282ac61ffe8fb` | 1 |
| `ex-p-poly-equals-p-with-polynomial-advice` | `7b7be1e46a9220f91443ce3126a0d8cc27d8dc4647710b22166b7bae0fa61822` | 1 |
| `ex-qbf-reachability-recursion-space-accounting` | `392a5bf47f836c765e73bf115c7203ef369f22902c6d30fa7754397f2f2ad1b5` | 1 |
| `ex-smn-parameter-theorem` | `806f72e631896f52996e0cba3ca996cec374cdea36860c95ce8bb206831de612` | 1 |
| `ex-three-sat-reduces-to-three-colourability` | `f5bdb7484f1135c24cb32f9b75b7d21900956ffa2e35b2a8aeba57a183ea6fa0` | 1 |
| `fs-an-nfa-accepts-only-if-every-branch-accepts` | `28d7f3ae001b6fe10f6676d74d89a3db0e4b226b71bd528a602b1d30e107f690` | 1 |
| `fs-every-countable-language-is-decidable` | `9b78d1a42a4ffc82c807cb905164d9b208ae06c2623daa2ecf1575a02fb22f59` | 1 |
| `fs-limit-computable-has-a-known-stabilization-stage` | `4f43358e76fc4b891a50b88891da2f919d9908178dbaea0b33f894feb692455b` | 1 |
| `fs-pcp-allows-symbol-reordering-within-dominoes` | `7e343fa714d63b847b2476049e69a6d73bec1c233cfeabde66307914b2d01414` | 1 |
| `fs-regular-expression-syntax-is-its-denoted-language` | `6f2dde60b6e04db2f80e7dbf676e174144d340961a1d6bdee5d9160467e7e4ec` | 1 |
| `fs-soundness-quantifies-only-over-honest-provers` | `d63e04dd1b6c10e3a896a2be266006e375302738c2f0c707cc9da310a10fbe14` | 1 |
| `fs-undecidable-means-no-instance-can-be-answered` | `d1a10f3d2261ba2f2f20739d12907162894fc7fd419dcb50581e9fb8a196cb95` | 1 |
| `lem-boolean-circuits-reduce-to-quadratic-equation-systems-with-a-fixed-input-prefix` | `add71eef7a00f528febb80b17290d18d75354b9141134ce4015bf2497d3986a8` | 2 |
| `lem-chernoff-bound-for-independent-bernoulli-trials` | `dbfb889dca4548defd7be47268306a03a5919b3d598041f217694d86ce284506` | 3 |
| `lem-computation-history-domino-encoding` | `90f6dfd09977780570e27c5723a713248e3638ac5a1c9d11eb3005f28d78e9fb` | 2 |
| `lem-counting-circuits-of-bounded-size` | `94fe9a5ef741e4bf99618444d98edbdacc650fda1c33f766c73f741e94f51639` | 1 |
| `lem-dpdas-have-unique-computations` | `c1e921f5e97c3619bc38f361fe54bf0109851c3c71fb6cef830876093fb613c3` | 1 |
| `lem-expander-walk-restricted-operator` | `2a029f3233fa052495dbf04595c87309b63aa61c42edd04420bb72419fe150c7` | 1 |
| `lem-fixed-machine-history-predicate-is-primitive-recursive` | `54a4297f419db337a4da656695187eafa4ed1527074ab778d900012c5c9fe521` | 2 |
| `lem-honest-prover-maintains-the-claim-invariant` | `218399500981f7ad187075de22cdcad7c7323cecc45451e1a7423e58749609a1` | 2 |
| `lem-logspace-reductions-compose` | `3ab7d232d5f533bc3eab0dd9a27b90420114ab288d96de857fbf6d224e0c7825` | 1 |
| `lem-multilinear-extension-streaming-evaluation` | `3a20770de4e4ee78a8174789c1cda8ee4395483e3f371f925d0b7439a9994fc5` | 1 |
| `lem-one-transformation-preserves-satisfiability` | `76cfcb4ee04234c46146be594b6dbdb27831992011b82a4850ad844006b2edc5` | 2 |
| `lem-ph-circuit-matrix-final-block-encoding` | `9fa99525f68b02eea4badddfee384e0c3490706a62bde3e1da399db86eedc4f5` | 1 |
| `lem-protocol-value-is-computable-in-polynomial-space` | `3f43c37ab25d1f43af85d4a46a3e71a2d80de4a0575a55c8753e3bf6a0fa339d` | 2 |
| `lem-read-only-workspace-simulates-in-all-tapes-space` | `2fc5112ca7101e8c845dae9f3646f9086d9930e9349e12f2b65462d71e47c89b` | 1 |
| `lem-shamir-protocol-has-perfect-completeness` | `e95d50abdf9bd419ad9ceb5f361a7b5df2b1730a143855d3533a0c37b5203225` | 1 |
| `lem-stay-put-right-left-macro-simulation` | `fc4b93a871032a31f09af9d24ae833af152c651eb187dcf3143d58c9c294c3a0` | 2 |
| `lem-time-at-least-input-length-permits-complete-input-reading` | `47812723990f2dcf75b4d81102658aa0263d8907ffd00f826ee0eb9e12c507f4` | 1 |
| `lem-two-query-pcps-and-constraint-graphs-are-equivalent` | `058662f84fa2a93f59368ce2006640a1f701a71cf865b8119adda5e79c877b64` | 2 |
| `prop-deterministic-cfls-are-unambiguous` | `a994726d07475bde98eb5c765fa67e3cf2c8842d088d19987f884f6013834d0d` | 1 |
| `prop-nc-one-is-contained-in-l-and-l-in-nc-two` | `7e3066ac09fc91f7f5927983754c9872cfde7541b43c6b927e7d87a13c917a42` | 1 |
| `prop-polynomially-related-encodings-preserve-polynomial-classes` | `a997da86fdbfbc7de6650d4356f650f55bd78eef10add5a12e545d21585d2f6c` | 2 |
| `prop-truth-table-implies-turing-reduction` | `e3a4a6bbef8fd80cc8820ce111171eb8c6a7ec8d74f48af6a9615d9ed8f4919c` | 1 |
| `thm-ap-equals-pspace` | `1606482c08c65422661821aa0c612d106a936ccccf4035f10502b7f16c96d108` | 1 |
| `thm-cfg-intersection-emptiness-is-undecidable` | `edfac7b2ac89f04597c8262ef2fb9298a9c0c323e607988c2f88436380dff0be` | 1 |
| `thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible` | `ab73027adb40a4e329e7f2fff5b7ef80db5baa8c1a2009a70c4e2d62d0a7cd2f` | 1 |
| `thm-cook-levin-sat-is-np-complete` | `9cbb4a7a8219d700deef4526358aad6eda04dec49da2d93491ad82a6ee5f71a2` | 1 |
| `thm-dfa-to-regular-expression` | `3b54c03e43e79b3011c90411f96125e54438a27fd466da06442d563a8fae3d02` | 1 |
| `thm-every-ce-set-is-a-domain` | `76801f52f84c3ec18d02b9f043a7ead034dc274bbbf4a2a7f51e84ac38c79581` | 1 |
| `thm-gap-amplification-step` | `98a3e59f88b230dec8c0c9ecd7e8c6838eda00ae9bc4f6cab49148f197c8b24e` | 3 |
| `thm-infinite-ce-sets-have-computable-injective-enumerations` | `362235f0a4cd8cf27977ce4320b3dc32f9556bc1499b07756d76cb782ddaa4b5` | 1 |
| `thm-kleene-normal-form-for-the-fixed-machine-coding` | `7f15cf04d1316f6da3964213a9dc0c1407c9a7e826902b8afd194d5e90c3a7f7` | 2 |
| `thm-machine-acceptance-is-recognizable` | `b4b6044d5b9cb656d6c280a4bbe2feecfc2b7adba8c0ccf10de89d98b358a63d` | 2 |
| `thm-multitape-machines-have-one-tape-simulations` | `b23e308740b4b466713ab116ac5f8d4aedd55cf566c9f160d00dab18a2812920` | 2 |
| `thm-nonhalting-is-productive-and-halting-is-creative` | `906dbfbdac29fca72328051cdd8d71c80a66b7a853bd8e3bdb9a0a3dfff7eba9` | 1 |
| `thm-pdas-recognize-exactly-the-cfls` | `1d50a2efe3a289e69050003dbbd7f7cb4a559cdb4631dadb50e23f23fbd339f8` | 1 |
| `thm-pumping-lemma-for-context-free-languages` | `949dd168ad34e377713bb973b36a2490da099d97030b7b68aa61140ca25e71a7` | 1 |
| `thm-regular-expression-to-epsilon-nfa` | `8e9f7a4d9552400a5be33a697acb7edea7cf5032ea40e78e9e9175cff7830669` | 1 |
| `thm-shannon-almost-all-functions-require-exponential-circuits` | `6768447cf7218bbfa80d7b54074b045ce33b5df54c3d7f013ed60951c613e0e0` | 1 |
| `thm-subset-construction-reachability-invariant` | `5e9d8a0d02db4d5ccafcb1ba8846c89a0e0fb973daea8ca26ced1593fac5b5f7` | 2 |
| `thm-three-sat-reduces-to-three-colourability` | `7aa52829ad90370b2084b41aaccedead4262ec006111d7b86ba88b4d58bbdf28` | 2 |
| `thm-universal-simulation-with-logarithmic-overhead` | `99fb5a4dc26a44ad6ed0e298e100a2733fd5b7e237d247c07bb5246bb95f2919` | 2 |

The coverage JSON records each exact tile path and image SHA256, plus receipt match and original-resolution view status. No assignment item or tile is unreviewed.
