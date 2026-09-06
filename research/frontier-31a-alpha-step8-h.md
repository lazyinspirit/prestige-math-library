# Frontier 31a Step 8 — group h adjudication

## Result

I read all 43 items on the four owned pages, all direct cited dependencies, and the relevant transitive probability and compactness dependencies. All 17 group-h rejection tuples are now present in the append-only adjudication ledger. The outcomes are 15 `confirmed_fatal`, one `confirmed_nonfatal`, and one `false_positive`. This recovery dispatch closed the two tuples still open on disk: `def-structural-comb-partition-hypothesis` and `thm-borel-probability-measures-on-polish-spaces-are-inner-regular`.

Only the 15 confirmed-fatal items were changed. They are the exact group-h rejudge targets, and each has one matching defect-ledger row. Neither item adjudicated in this recovery dispatch was changed. The three Step-7 warnings have owning-group dispositions. No cross-group defect or published-item repair was found.

## Exact adjudications

The append-only adjudication ledger preserves the complete tuple, including its configured judge field. This table records each owned rejection's context digest, pre-edit `itemHashGuard` digest, outcome, and disposition.

| item | context SHA-256 | pre-edit guard SHA-256 | outcome | disposition |
|---|---|---|---|---|
| `def-coordinate-maps-and-cylinder-sigma-algebra` | `4341f3fa4e17c2260b76a1e92afcb7cb0ff7236812e329c050bead8806a7454c` | `d3752e8e86f4d453eef98f009b2b97d3cb206305e7982f1dad8388f57028ec71` | `confirmed_fatal` | Defined unordered finite product sigma-algebras by coordinate generators and proved enumeration independence. |
| `cor-coordinate-random-elements-on-a-countable-product-are-independent` | `209cfcb4b407e395b473debcf68b2ffb7f92c247b873e19f08e73bb20862abeb` | `f3797f084bf4b1812dc90868a92e98becfc3953d8e23755cfff060603e51d5d0` | `confirmed_fatal` | Restricted the finite intersection formula to distinct coordinate indices. |
| `thm-countable-product-of-probability-spaces` | `eddaabc7e6f57d3dce25aca65eac7d9b06c4d77a95a532cf13b234c2b2e88c97` | `c1d4536c1487fdff426f1b8e3a806d400440cc66aba5a0bdd313101a7c9e5fd1` | `confirmed_fatal` | Replaced the overstated Dynkin citation by the equality-lambda-system argument required for uniqueness of probability measures. |
| `def-consistent-family-of-finite-dimensional-distributions` | `c11957eb2af718c57dee5934374df6a2bef77d9e4a5387bae9055d234984d298` | `b64d096637b2d801b4858751646cb7538df12187e82e5ec7097ac0548437ae1a` | `confirmed_fatal` | Quantified finite supports as `F subset G subset I` and tied the laws to the now-defined unordered product sigma-algebras. |
| `cor-countable-independent-copies-exist` | `24368d517942568f7b6065905966d853258645e8ec7847137d86850f8d77e8b5` | `ceb516d0ee7d1b6bc97c14447d69508b500b53e17451bf6fd804f4c39815b2b0` | `confirmed_fatal` | Added the product-existence theorem and separated existence from the coordinate-independence conclusion. |
| `def-law-modification-and-indistinguishability-of-processes` | `a33396c881ce54346771bf2c5010dcd5a9947938c4a919134f50e2c3b8871969` | `48e527b3a20b4664bf16a0a52543e8a92a12a4090897e5ade9ef2e8495000cf3` | `confirmed_fatal` | Required a common source probability space for modification and indistinguishability while allowing same-law comparison across sources. |
| `def-structural-comb-partition-hypothesis` | `75950332dbdac469e16a213e9da71a9912fe6a4d94f90415f2c6a1e99d56489b` | `29a9a4ee5e37d6064df1c301b845ee1098fd9f50bac284c73f4f59bcb52adf05` | `false_positive` | The primary paper explicitly restates its structural criterion as Lemma 5.1 with the same hypotheses and conclusion; the source locator is valid. No edit. |
| `ex-a-large-y-part-in-a-structural-comb-partition` | `334987e3ac92b1f58bc14548625e706602a9381d2bea428afc97eecad2cb3b87` | `1dc34a1b4e3176fae8ddd640a24364f88dcac6f2f3a21e16d8edb413878e9f75` | `confirmed_fatal` | Narrowed the unsupported `sqrt(8)` conclusion to the cited lemma's stated lower bound 2. |
| `ex-a-wide-transversal-in-four-structural-comb-partitions` | `8466b025d3652006d26b27f8c7ffa31bb773fae16af88181356f1b41d3a8f7b4` | `9fb41a19b457b8ab7961926a6caadded931a14349b05c5a91a1d1ee6f679bd4a` | `confirmed_fatal` | Added the structural-partition premise required by the transversal lemma. |
| `ex-canonical-random-walk-from-product-increments` | `6ecd7d003b84cd38cfd024c4660eb773cd2caddc384210aed1ba1053e25def74` | `06211266a18877503f93d4463f7da59d7c7cf54d6a0e4851620469306faa1011` | `confirmed_fatal` | Restricted the uniform sign-vector law to distinct increment times. |
| `ex-iid-sequence-with-a-prescribed-law` | `3f1f0b355f84ecc97102f43b90395d9ecb7722e6441f2bcdc43f99138af7769f` | `4baefafcd6b2b40cf1bacbbca72658ea757ec540bad63cc8cd0fcd341afe8180` | `confirmed_fatal` | Added the choice scope and the direct product-existence dependency. |
| `ex-infinite-coin-toss-space` | `8d70ed0639b6c50b45e1c757177783c1ad32cb419c5d881b79bd93f87a43f048` | `bbac9126957945abaab209f7ba1cdbc8d3d21f68e58f0a8b292e8f8179e4ee25` | `confirmed_fatal` | Added the countable-choice and dependent-choice assumptions used by the countable-product construction. |
| `lem-countable-product-cylinder-premeasure-is-countably-additive` | `08ce64a7560045d45fa69fc4754a653d205f93fcf68e67e1eccb0b2ac83c77c3` | `db32b5037c7e0eb968ce06ec56064680b228b44399bead1931950557aceb22cf` | `confirmed_fatal` | Added the precise section-measurability and section-integral dependencies for the finite-stage recursion. |
| `lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades` | `a701645c85aa8d1eaf0db61f142a58e1a5adb92621094e3c71022fb8668dc449` | `c41e14223ee1f71779da7dcb3b275be286d0cbf1fe8b14e08744b90ae254455f` | `confirmed_fatal` | Required the pattern clique or stable set to be nonempty, preserving the blockade-length domain. |
| `rem-cylinder-sigma-algebra-versus-full-product-power-set` | `ffd7fe83e484550f0e238ccc8c197e9371d53f45bb9b5e1af10f844f99e9de46` | `f07189770e4b565f98519164ae50496eae10ca1721e8035d4f677b26ac3728c1` | `confirmed_fatal` | Qualified proper inclusion and recorded both the singleton-coordinate equality boundary and the uncountable Bernoulli strict-inclusion case. |
| `thm-borel-probability-measures-on-polish-spaces-are-inner-regular` | `2bba05b38d38e9d2811435c944ff67eaafe118e0b71a4954f617067f01ff79af` | `e6e588e057c5212fa02870ff12c4a9d11914d77c65c5b14af574e43bbbf03825` | `confirmed_nonfatal` | The displayed `1/n` exhaustion is conventionally indexed by positive integers; if `0` belongs to the library's naturals, replace it by the identical reindexing `1/(m+1)`. This is an immediate indexing clarification, so no edit is licensed. |
| `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces` | `e40f2eb919d644d551421eed058fc1ec0761397219811fa7c0aaf6a9f028426d` | `a9ead688118beb1ea1119fd74b8c2b7dc6aa982847f44d30c46d282e16efbfa2` | `confirmed_fatal` | Globally fixed compatible coordinate Polish presentations and cited compact-metric sequential compactness for the diagonal extraction. |

## Repairs and rejudge targets

| item | post-edit guard SHA-256 | defect row |
|---|---|---|
| `def-coordinate-maps-and-cylinder-sigma-algebra` | `930f5e8fc7472eb919dee1128b9b299853f48fb061c9816105b8b177e5e0bc8d` | `frontier-31a-A8-h-001` |
| `cor-coordinate-random-elements-on-a-countable-product-are-independent` | `11d32369ac5d079945c4ebfd7df9522dff4bd2e84000aef03d16fa862b2ca799` | `frontier-31a-A8-h-002` |
| `thm-countable-product-of-probability-spaces` | `e96da97e686b639f8b07592439ba05ea5ad6c47ecaa30a0a5cb8a00f1b452cc4` | `frontier-31a-A8-h-003` |
| `def-consistent-family-of-finite-dimensional-distributions` | `b6efe0d17eb078b5cb21f1b4fe51b74590f9a5e0672de17f99dfa78777cbafbe` | `frontier-31a-A8-h-004` |
| `cor-countable-independent-copies-exist` | `3245422a8391a4e77bc62c98d0525f03f589da4b76f8a83f7c8f4cede280cb93` | `frontier-31a-A8-h-005` |
| `def-law-modification-and-indistinguishability-of-processes` | `bbe4848b77b77a9fb73635fd852d90bcf8c492f10cefb2340eea1a7088d1254f` | `frontier-31a-A8-h-006` |
| `ex-a-large-y-part-in-a-structural-comb-partition` | `21957fbd29e6e85034da6a114f05a99f26e1cb34956d72f0b5d217990cc1b936` | `frontier-31a-A8-h-007` |
| `ex-a-wide-transversal-in-four-structural-comb-partitions` | `1225dcf75d9b4264c90c31490d9ec0d0ce4e91207efc7f52a061b495f547dbf0` | `frontier-31a-A8-h-008` |
| `ex-canonical-random-walk-from-product-increments` | `2f6389b9b397d3fc837e6d7959cbc1107ebe58ad0311ffea7af13d910d12d247` | `frontier-31a-A8-h-009` |
| `ex-iid-sequence-with-a-prescribed-law` | `add1ad5df46379356c88cdb34747aa132272ecdbdd6495a52a09575d045f2899` | `frontier-31a-A8-h-010` |
| `ex-infinite-coin-toss-space` | `daca54a1c3f6a2b9efbfe4ab15cfb8d35fcb5358d2f1b87d008be3aee793489c` | `frontier-31a-A8-h-011` |
| `lem-countable-product-cylinder-premeasure-is-countably-additive` | `da4e94113742c8bcd124092b72ce4fc7543a7ff0e5d112702b3f6b478ca86a46` | `frontier-31a-A8-h-012` |
| `lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades` | `af1e111447b8803358c8b14b011e59264cb7c13dff74cc4b61515ef09612a69f` | `frontier-31a-A8-h-013` |
| `rem-cylinder-sigma-algebra-versus-full-product-power-set` | `d91fad456dfdf9bd369b058c0527c97d7ff457563bc2bae8d6a8be51152bb654` | `frontier-31a-A8-h-014` |
| `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces` | `6b025f7e49593da2d7efe92e20982f09c73833fc6e640041fd19ccc60594af1e` | `frontier-31a-A8-h-015` |

These 15 items, and no nonfatal or false-positive item, are the group-h rejudge targets.

## Step-7 warnings and cross-group findings

- `s8a-35bd272d56c5d8470dbbb80f` — `nonfatal`: use a closed-ball scale strictly below half the requested open-net radius; no theorem or boundary case changes.
- `s8a-9bc2614340836ba932fd9836` — `covered_by_rejection`: the exact Kolmogorov rejection licensed the compatible-topology and sequential-compactness repair.
- `s8a-7ee11d610f1a1f5ac356d7f1` — `covered_by_rejection`: the exact large-Y example rejection licensed the numerical narrowing.

No reading path exposed a defect in another group or in published content, so no cross-group or published-repair row was appended.

## Sources consulted

- Huang, Ju, and Zhou, arXiv `2606.06258v2`, `https://arxiv.org/html/2606.06258v2`: introductory Lemma 1.14 states the structural comb-partition criterion; the opening of Section 5 says that Lemma 1.14 is being restated, and the following Lemma 5.1 gives that same criterion. This directly resolves the source-locator rejection as a false positive.
- Marek Biskup, *MATH 275D notes, Chapter 2*, `https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf`: Lemma 2.7 states inner regularity for finite measures on standard Borel spaces. It supports the theorem statement; its proof is left as an exercise, so the indexing and finite-net objections were decided from the written local argument rather than attributed to this source.
- Naotaka Kajino, *Probability Theory*, `https://www.kurims.kyoto-u.ac.jp/~nkajino/lectures/2011/Prob2011/Prob2011.pdf`: Theorem 3.65 and Proposition 3.67 support product-measure existence and iterated-section integration for the finite-stage construction.
- Cosma Shalizi, *Building Infinite Processes from Finite-Dimensional Distributions*, `https://www.stat.cmu.edu/~cshalizi/754/notes/lecture-02.pdf`: Theorem 29 supports uniqueness from finite-dimensional distributions through the cylinder generating class.
- Local published dependencies `def-product-measure-on-sigma-finite-spaces`, `prop-sigma-finite-section-measure-functions-are-measurable`, and `thm-compact-implies-the-other-compactness-forms` supply the exact library interfaces used in the repaired finite-product recursion and compact subsequence extraction.

## Checks

- Focused precheck on all 11 repaired proof/verification-bearing items: 11 checked, 0 failing.
- Focused rendercheck on all 15 repaired items: 15 checked, 0 failures.
- `manifest-deps` and `content-policy` on batches 4 and 15: 43 scoped items total, 0 errors, 0 warnings.
- JSONL parse: the shared adjudication ledger has 294 valid rows and the alert-decision ledger has 20 valid rows; group h contributes exactly 17 and 3 rows respectively.
- Group-local hash/bijection audit: 17 unique adjudications; 15 licensed changed items with 15 matching defect rows; two unedited closures; three alert decisions — passed.
- `node tools/defect-ledger.mjs validate --run frontier-31a`: 708 defect rows checked, 0 errors.
- The required Step-8 guard was run against `pre-step8`: 228 changed items, all 228 licensed, 0 creations, 0 deletions, 0 errors, and 0 warnings.
- `node tools/step8-scope.mjs check --run frontier-31a`: 8 groups scoped, 910 items partitioned, 0 open rejections, and 20/20 reader warnings or alerts dispositioned.

Group h has no unresolved mathematical or artifact blocker, and no out-of-scope file was repaired here.
