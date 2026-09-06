# Frontier 32 Step 8 — group a adjudication

## Scope and result

The complete 109-item group and all 30 recorded published dependencies have
been read. All 44 exact rejection tuples have one disposition: 31
`confirmed_fatal`, 4 `confirmed_nonfatal`, and 9 `false_positive`. The 31
licensed repairs are complete on their recorded pre-edit bytes. Both Step-7
reader warnings are independently corroborated by an exact fatal rejection and
are recorded as `covered_by_rejection`. No defect or dependency edge crossed
the group boundary.

| item | pre-edit `item_sha256` | decision and current action |
|---|---|---|
| `def-boolean-circuit-size-depth-fanin-and-basis` | `3c6bec2fc3d265d4007ab7f44fdf9184f6129ffd44e4527ac9bfffc317ae0f16` | `confirmed_fatal` (`other`): designated the output and made value/depth well-defined. |
| `def-ac-zero-nc-one-and-nc` | `2339d134e7c2ca4cdf7c88c1f04dea25c1a1c48067d2e3ba7364b77e128046d5` | `confirmed_fatal` (`other`): supplied the unbounded-fan-in extension of the uniform query encoding. |
| `def-formula-and-branching-program` | `6671c32ffb95e5dd99804d3448434ece2b6b3927c80d21add1384b5bb3548432` | `confirmed_fatal` (`other`): labelled the two outgoing edges by their queried bit values. |
| `ex-p-poly-equals-p-with-polynomial-advice` | `520f17624315ca84c347b288bfb6335516fd10a9c57ee72dc43c87591221a53a` | `confirmed_fatal` (`other`): restored the unused declared input `x_2` to the encoded two-input circuit. |
| `fs-shannon-counting-gives-an-explicit-hard-function` | `2ad451a58e6aafcf302fc1f2e860b6b2515d9c69d021e6cd88753cf59bec95b3` | `confirmed_fatal` (`logic`): narrowed explicitness to polynomial-time evaluability and accounted for the brute-force computable choice. |
| `thm-p-poly-equals-p-with-polynomial-advice` | `c03527bc6b32dcdf586ddb3a9dcc55a009813ab157693d8098af8d66c7812c27` | `confirmed_fatal` (`logic`): hardwired the original, unpadded advice in the circuit for its actual encoded pair length. |
| `thm-karp-lipton-collapse` | `c7c00238fe45ffff819149367b39a39d20ef998bdf9a8e38416a5670f391cbea` | `confirmed_fatal` (`logic`): built search circuits for the prefix-extension language, avoiding the false witness-preservation inference. |
| `lem-hashing-commits-public-randomness` | `dfb7f59fcf91699eb7c1a7f4114089721c14eedda3bfa521446d7c03f480f670` | `confirmed_fatal` (`other`): aligned the title with the fibre-size statement actually proved. |
| `def-number-sat` | `e02b5b910caee0edb6f7e86adcc3e229f80a44c1aa4fbdce77a3058cfd3556a5` | `confirmed_fatal` (`other`): made well-formedness require a distinct declared list containing every occurring variable. |
| `def-p-with-a-sharpp-oracle` | `e8044bddf026560809c5b1057867dcaf0b9e00df5b60f1e4f286a0726ca6b5c9` | `confirmed_fatal` (`other`): fixed the oracle to the complete function `NumberSAT` and stated oracle-choice invariance. |
| `lem-cook-levin-can-be-made-parsimonious` | `918f374a37d3f431b417c8f3950a6e9fcfc08c2a261f5d5fe9fbfcbbf8f610ca` | `confirmed_fatal` (`logic`): inserted a path-bijective one-tape normalization and a clock satisfying every bounded-tableau hypothesis. |
| `cex-soundness-quantifies-only-over-honest-provers` | `9801e51331c7a2da21a459d77a1073700b7fc6933a0a3eeb51910fa24860ec57` | `confirmed_fatal` (`logic`): specified that the verifier rejects the honest message while accepting the cheating message. |
| `def-graph-nonisomorphism-protocol` | `a9f25e4514a318498a6c5a12c9f0014bd7b1b7b57ba9b4e78d3be8daab7f4027` | `confirmed_fatal` (`other`): made the vertex permutation uniform and independent of the challenge bit. |
| `lem-protocol-value-is-computable-in-polynomial-space` | `6be298dc32a0d29daaebfcec45eb97bc06f303f7692ecc606636daade59b2d0e` | `confirmed_fatal` (`logic`): explicitly enumerated compatible private histories and computed their conditional terminal and transition probabilities in polynomial space. |
| `lem-sequential-repetition-amplifies-error` | `2eb67abff800ffad14c37b884d12d153409a909a86adb3b2f519bedfae6e3c20` | `confirmed_fatal` (`dependency_citation`): applied the cited lower-tail bound to success indicators, not failure indicators. |
| `def-computable-martingale` | `efcd6fbd1f3155cfeb40bb78221786b9c341a340af2daf7724af7facace317ad` | `confirmed_fatal` (`other`): quantified the success target as an infinite binary sequence. |
| `def-conditional-kolmogorov-complexity` | `231af3599d9b5c991f47a557cdee4dd77b07bc9cfd0cf7cf4ce97132f5dece82` | `confirmed_fatal` (`other`): typed conditional machines, defined optimality, and supplied universal dispatch. |
| `def-effectively-open-set-in-cantor-space` | `29273b37cd0428edde5dfca60ea4d228eeec98bb73919f0dc8f12d352bf6ed71` | `confirmed_fatal` (`dependency_citation`): defined c.e. string sets through the cited partial-computability interface. |
| `def-incompressibility-method` | `049029a9adf34f03076beb9877e2d86c3f5dba5fc293f477193e3de1b8e559a2` | `confirmed_fatal` (`logic`): added a fixed injective encoding and the cardinality threshold needed for selection. |
| `def-martin-lof-test-and-random-sequence` | `16e206d3ab05315ba42f7a8fc917923a46b56340b959a947da8ad5aaf0a590d4` | `confirmed_fatal` (`other`): defined uniform openness by one c.e. relation over levels and cylinders. |
| `ex-most-strings-are-incompressible` | `fa1bcd15e76eea1d8f422f372784ff5f6eaea6749c6fc80098db4c8c0de7627a` | `confirmed_fatal` (`other`): qualified complexity by an arbitrary fixed description machine and stated the exact count. |
| `lem-basic-conditional-complexity-inequalities` | `ce4dce30f257d944403d8db343b3581244a9f24fa3f6c7395ebd28ec0fdcb301` | `confirmed_fatal` (`dependency_citation`): fixed optimal machines and used plain invariance to transfer both decoder bounds. |
| `lem-universal-martin-lof-test-exists` | `0938aa3b78083645ea6de859082e3365fa126fb62b39c730b8f577a5d9a4bf42` | `confirmed_fatal` (`logic`): derived c.e. candidate relations from the ordinary numbering and supplied effective measure trimming. |
| `thm-invariance-for-prefix-complexity` | `6e5b54f8177a18f75d4c6d7eb3ce17716ba55a530a1fd01047a24fd1178f444b` | `confirmed_fatal` (`logic`): effectively pruned arbitrary machines to prefix-free ones while preserving every genuinely prefix-free machine. |
| `thm-levin-schnorr-characterization` | `b821e081841a1931cc2abf14a897d722e1afdd553567e4ea816abfc591096032` | `confirmed_fatal` (`logic`): replaced fixed-deficiency and unsupported-index claims by the two exact Kraft-bounded constructions. |
| `thm-symmetry-of-information-up-to-logarithmic-terms` | `93c393274a09c7966af5d8e03149f4940f8fc9df6d3641651bbfede6e65a24b8` | `confirmed_fatal` (`dependency_citation`): replaced prefix-complexity bookkeeping by the plain optimality and finite-fibre counting proof. |
| `def-turing-jump` | `cff592423ca54244dfb750e175e5e126f9dc9b334536a87d6287467befd84057` | `confirmed_fatal` (`other`): defined an effective oracle-program enumeration and its uniform hardwiring compiler. |
| `ex-degree-order-is-representative-independent` | `ee7eb5d587cb63cfe39d717303346210adf1b17e42b0561749cd66c463c8f8a1` | `confirmed_fatal` (`other`): replaced the conflicting jump notation by `\widetilde A,\widetilde B`. |
| `thm-computably-dominated-characterizes-truth-table-reducibility` | `33a9002629f387d7783504a63df3e58c673f5a811d73cbdda65c07b707d51efc` | `confirmed_fatal` (`dependency_citation`): replaced the invalid set-to-function upgrade by an explicit diagonal `X`-computable set using uniform finite-oracle bounds; retained the finite-maximum consequence after domination. |
| `thm-every-oracle-is-strictly-below-its-jump` | `eba0c2be99033e63202fabcdc0ad8d6fdd03ac1df065a0349f2944dd155d4aef` | `confirmed_fatal` (`dependency_citation`): replaced unsupported relativized s-m-n by the explicit oracle compiler and a full diagonal program. |
| `thm-relative-halting-is-oracle-ce-complete` | `c45463ecfa4577b62e03654750af0fb3d091a8e5bfb2d8738c33b24b68395f2a` | `confirmed_fatal` (`dependency_citation`): used the oracle syntax's total hardwiring compiler and proved the exact reduction equivalence. |

## Confirmed nonfatal

- `fs-sharpp-is-a-language-class` — The omitted membership proof for
  `NumberSAT` is supplied by the adjacent proposition and the immediate
  nondeterministic assignment enumeration.
- `prop-np-is-contained-in-p-sharpp` — Exact-length witness padding is omitted,
  but follows immediately by normalizing the polynomial witness bound.
- `thm-circuit-sat-is-np-complete` — The malformed-input branch is omitted, but
  closes immediately by mapping malformed strings to one fixed unsatisfiable
  circuit.
- `thm-graph-nonisomorphism-is-in-ip` — The unequal-cardinality branch is
  omitted, but closes immediately by deterministic acceptance before the
  equal-size protocol.

No content, contract, impact, or judge record was changed for these items.

## False positives

- `cex-polynomial-size-implies-uniform-generation` — The rejection treats a
  false-statement item as an asserted dependency. The counterexample and opened
  theorem give the exact undecidable unary tally language.
- `ex-cook-levin-can-be-made-parsimonious` — The full lemma supplies the
  one-hot and biconditional auxiliary constraints used by the example.
- `ex-graph-nonisomorphism-is-in-ip` — The full theorem proof supplies the
  exact graph-nonisomorphism protocol used by the example.
- `ex-karp-lipton-collapse` — The full theorem proof supplies the search-circuit
  mechanism invoked by the example.
- `ex-sequential-repetition-amplifies-error` — The full lemma derives the
  exponential error bound invoked by the example.
- `ex-some-turing-reductions-are-not-truth-table-reductions` — The full theorem
  fixes the halting-set witness and proves the separation used by the example.
- `fs-polynomial-size-implies-uniform-generation` — The full theorem constructs
  the undecidable length language that refutes this displayed false statement.
- `lem-counting-circuits-of-bounded-size` — Constant gates are included among
  the at most `s` gates, so the proof's source count `n+r <= n+s` is correct.
- `thm-shannon-almost-all-functions-require-exponential-circuits` — The full
  counting lemma contains the explicit gate-record enumeration needed by the
  theorem.

No content, contract, impact, or judge record was changed for these items.

## Reader-warning dispositions

- `s8a-24fff07f65ed1393974a6566` on
  `thm-levin-schnorr-characterization`: `covered_by_rejection`. The exact judge
  rejection independently identifies the same fixed-deficiency error and
  licenses the repaired Kraft-bounded proof in both directions.
- `s8a-c8e9361232de61bf9cbc2169` on
  `thm-computably-dominated-characterizes-truth-table-reducibility`:
  `covered_by_rejection`. The exact judge rejection independently identifies
  the same missing bounded-computation bridge and licenses the repaired
  explicit diagonal-set construction and compactness bound.

## Post-edit guards and rejudge targets

Every item below is a rejudge target. Its current guard hash differs from the
pre-edit guard in the fatal table.

| item | post-edit `item_sha256` |
|---|---|
| `cex-soundness-quantifies-only-over-honest-provers` | `955ab183652c4c6f1b4aa9a1c88900cf644fd67fabf04422cdf5b464db4e7a71` |
| `def-ac-zero-nc-one-and-nc` | `df4098b17ee49ee61f536c876faf21a3e717b3d6e179943e700ea2a8b319463f` |
| `def-boolean-circuit-size-depth-fanin-and-basis` | `dca244bfb889f45ad4d31d8096cd4afcde87d28634cf413a2993479045993f6b` |
| `def-computable-martingale` | `aa5d25e6bb505f702ff0db0a4731669efd6ca40c7077c897bf19cf0e60e264d1` |
| `def-conditional-kolmogorov-complexity` | `87558c079aceaf7c7a49c1acf4c4b555cf342ddbc5a1f987f4904b49b47f5d57` |
| `def-effectively-open-set-in-cantor-space` | `891759f2f94ddbb29b5b4f3e94ca3391104bc360d91154caa93eacb34b2f2d82` |
| `def-formula-and-branching-program` | `d8365848ca062a6c2e28fd2dea2ff51064c96ef958a290583d2c0160d8f5f357` |
| `def-graph-nonisomorphism-protocol` | `032ecd1f46a6e9e59111ac82efa20bff5ee2c61e3d4c3b728c51195cf0759840` |
| `def-incompressibility-method` | `96cecde74c73033100dba34d0ad462f8f9876a7ec3b7ff1f2ee6e60b4e615757` |
| `def-martin-lof-test-and-random-sequence` | `5b9f4ff7cee4a94da825d04a25ad932e8d1e037009c6e3eba3c10b1e11a7e7e8` |
| `def-number-sat` | `52bc0ef03ac3e7e888dadcadf1039e7e1ca8148085e7c92cdc88c072c7a38da8` |
| `def-p-with-a-sharpp-oracle` | `d47af6b3230d909676611488f51cd6038f14fea1fca49868896d6169947d6177` |
| `def-turing-jump` | `2919ad88c48da7c6e62e016e91e91c83079995c7fa001632e3b254b83b94e9d9` |
| `ex-degree-order-is-representative-independent` | `8da8fb4ae7114f4786a36510982293a64442aaccf595bca1a0761ee1194ceba4` |
| `ex-most-strings-are-incompressible` | `755f22b5c1165a11002ee70320a01672b4c888e259ee98d3e1cdbc210685757f` |
| `ex-p-poly-equals-p-with-polynomial-advice` | `1f85adac5ef3918f5a6db8e97d0b615993da9208cfad8fc6511dd9011cc8b790` |
| `fs-shannon-counting-gives-an-explicit-hard-function` | `0dfe16c0c8dc2c116af9cbfc204966d21f84a22eeb758670aaf20f91a6f15e86` |
| `lem-basic-conditional-complexity-inequalities` | `954d118d4217fb8da9114256e70677242239706741cacf872eb636b28301aa55` |
| `lem-cook-levin-can-be-made-parsimonious` | `a2402da26d2805c6fccddc0e3d142b36feb7cc1d27dec2a9cdf437fd04f33938` |
| `lem-hashing-commits-public-randomness` | `f7a8b9b4604a45117c200a230c444b4c915a1bdd7dae43506bbefe39d6aa3e54` |
| `lem-protocol-value-is-computable-in-polynomial-space` | `7c4ac8ad30c3f663fe6cef37376d1f7d3a4345861947381159b800a84329e89b` |
| `lem-sequential-repetition-amplifies-error` | `b7faf04bcb85c86563090cfecdd89799bd69c05914e328bfa305cbf6dca8337d` |
| `lem-universal-martin-lof-test-exists` | `367b9b1d0ad00be18ddbdaf41f77a7014b9b694247e496c38cdda3fbdc396231` |
| `thm-computably-dominated-characterizes-truth-table-reducibility` | `300d600c86206c36f207cad11d00f3538f702aa78d17cec63bee30f8b4daf8da` |
| `thm-every-oracle-is-strictly-below-its-jump` | `de3806cf5e810811b9b0b6aafc827108dab84978701fe8cc619f1725f2f52a85` |
| `thm-invariance-for-prefix-complexity` | `d08414de75145fd512f782dfda9d309139a25f1790cf66b1faf0c7ebe6c150f4` |
| `thm-karp-lipton-collapse` | `93a17ddeb3eb7c55cbc62691d9a8ab587ddf20898caf03fbb50dd40a1e47794c` |
| `thm-levin-schnorr-characterization` | `8be0cf5eb3f06cc7e016a5cc9d4bd3dfecac11cf3fc5e3fffb1cb84d701f755e` |
| `thm-p-poly-equals-p-with-polynomial-advice` | `ee2d4f042f11cdcf6889b3b8b433bf874806b14a8396c8899545a1ebbcc1858a` |
| `thm-relative-halting-is-oracle-ce-complete` | `fa7d46c24415a283e8856e4bdf429f1743522462a28ce3a0f2305ccbf34bb57d` |
| `thm-symmetry-of-information-up-to-logarithmic-terms` | `4bd41e03acb717b9a57cda37ddb39fe2603c4addff900acd030240b8388cc0aa` |

## Sources consulted

- Arora and Barak, *Computational Complexity: A Modern Approach*,
  `https://theory.cs.princeton.edu/complexity/book.pdf`, Theorem 6.11 and
  Theorem 6.13: hardwiring the actual advice string and the search-circuit
  form of the Karp--Lipton argument.
- Alexander Shen, *Around Kolmogorov Complexity: Basic Notions and Results*,
  `https://arxiv.org/pdf/1504.04955`, Theorems 9, 26, and 31: optimal
  conditional decompressors, effective pruning to enumerate prefix
  decompressors, and the unbounded-deficiency form of Levin--Schnorr.
- Ludovic Patey, *Computability Theory*,
  `https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf`, Theorems 5.11
  and 5.12: bounded-time characterization of truth-table reducibility and the
  computably-dominated equivalence.

## Durable records

- `research/frontier-32-judge-adjudications.jsonl`: 44 exact group-a rows.
- `research/frontier-32-step8-alert-decisions.jsonl`: both owning-group warning
  dispositions.
- `research/defect-ledger.jsonl`: 31 matching `frontier-32-A8-a-*` fatal-defect
  rows, appended through `tools/defect-ledger.mjs`; the generated view was
  refreshed in the same transaction.
- No cross-group alert, published repair, owner-prerequisite repair, scope
  change, deletion, or reading-order change was made.

## Validation and blockers

- Targeted precheck: 19 repaired proof-bearing items checked, 0 failures.
- Rendercheck: all 31 repaired items checked, 0 failures.
- Content policy: batches 1, 2, and 19; 109 scoped items, 0 errors, 0 warnings.
- Dependency check: no cycles, every reference resolves, and no draft item is
  on a published page. It also printed 475 repository-wide legacy warnings.
- Defect-ledger validation and completeness check: 598 `frontier-32` rows
  checked, 0 errors at the final observation point.
- Exact group-a audit: 44/44 assigned tuples occur once; 31/31 group changes
  have exact fatal licences and matching defect rows; 0 missing or surplus
  adjudications; 0 unlicensed changes; both reader warnings have one decision.
- The required repository-wide Step-8 scope check was run. It remains red only
  on external page warning `s8a-27abc7a018265ebf06ec2b1a`: its owning group
  confirmed a fatal defect in
  `presheaves-sheaves-stalks-and-sheafification`, but no targeted rejection
  licenses a repair. No group-a warning is missing.
- The required repository-wide Step-8 guard passed against the `pre-step8`
  baseline: all 192 current edits are licensed, including all 31 group-a
  edits; no item was created or deleted in the Step-8 window.
- The repository-wide defect completeness check passed; all 31 group-a fatal
  adjudications have matching rows.

There is no unresolved group-a blocker. Whole-run closure awaits the other
groups and the engine-owned rejudge and stage transitions.

## Step-8 preflight round 2

- `thm-karp-lipton-collapse`: the retained `confirmed_fatal` row with context
  `8ab1ede83b7997b6ea413aeff3a7751567957cee4c89388b9937a1257fc19bc5`
  and pre-Step-8 item hash
  `c7c00238fe45ffff819149367b39a39d20ef998bdf9a8e38416a5670f391cbea`
  licenses completion of the repair. The claim remains
  `NP subset P/poly` implies `PH = Sigma_2^p`, under the item’s stated
  quantifier convention. The proof uses only
  `def-circuit-family-and-p-poly`: the NP prefix-extension language gives the
  length-indexed decision circuits composed into a search circuit. The unused
  CircuitSAT and advice-equivalence facts, dependencies, manifest edges, and
  contract entries were removed. The relevant source remains Arora--Barak,
  Theorems 6.11 and 6.13 at
  `https://theory.cs.princeton.edu/complexity/book.pdf`.
- `thm-computably-dominated-characterizes-truth-table-reducibility`: the
  retained `confirmed_fatal` row with context
  `95e392b19db158897965f04a0e356b0da7b00b49d6a41ad941c11702ea4eca96`
  and pre-Step-8 item hash
  `33a9002629f387d7783504a63df3e58c673f5a811d73cbdda65c07b707d51efc`
  licenses completion of the repair. The iff and its set-valued truth-table
  convention are unchanged, with dependencies
  `def-computably-dominated-oracle`, `def-truth-table-reduction`,
  `def-turing-reducibility-and-equivalence`, and
  `lem-total-oracle-functional-has-computable-use-bound`. The exact source
  locator remains Patey, Theorems 5.11--5.12 at
  `https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf`. Proof step 5.1
  now calls this the cited source theorem instead of spelling the decimal
  theorem number that the contract parser mistook for a local step.
- Validation: strict proof contract passed 2/2 in the focused run and 478/478
  in the merged run; both items passed phase-format precheck and renderer
  checks; both batch contracts passed citation fidelity; dependency resolution
  and the Step-8 exact-hash guard passed. The merged contract, batch-1 page
  manifest, group-owned audit-manifest edges, and this report are synchronized.
  No warning disposition or append-only ledger changed. There is no group-a
  blocker; the engine owns rejudge and all stage transitions.
