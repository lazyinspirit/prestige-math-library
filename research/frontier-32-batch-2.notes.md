# frontier-32 · beta · batch 2 scaffold notes

## Scope and controlling design

Authorized artifacts for this task are this note, `frontier-32-batch-2.pages.json`, and `frontier-32-batch-2.coverage.json`.  No library page, item file, plan structure, workflow state, or other batch is changed.

I read both requested locations for each pair in `research/plan-computability-theory-track.md`: TC-30's A inventory at L1240 and its B inventory at L1264; TC-37's A inventory at L1501 and its B inventory at L1531.  These are complementary inventories in the same controlling track document, not competing amendments.  No later completion/expansion amendment for either page was found, so that track document controls.  Its orders and declared prerequisites agree exactly with `research/plan-spec.json` and the dispatch: IP is 639/640 and requires randomized complexity plus space complexity; Kolmogorov complexity is 653/654 and requires acceptable numberings, randomized complexity, and finite probability.  There is therefore no drift decision to make inside this batch.

The A inventories are retained exactly: 16 items for interactive proofs and 22 for Kolmogorov complexity.  Both are below the 60-item A-page ceiling, so neither is split.  The companion B pages contain the three designed leaf items each.  All 44 manifest objects carry an explicit `deps` array.

## Read sources and URL verification

All five recorded PDF URLs were opened and read as complete documents through the browser fetcher on 2026-09-06.  Step 3 also read the exact substantive section of a sixth, independent journal source for the computable-normal counterexample. The source readings, their exact section/page locators, their own result headings, and a disposition for every harvested result are in `frontier-32-batch-2.coverage.json`. The textbook/course-note requirement is met by Arora--Barak and Goldreich's lecture-note volume for IP, and by Simpson's 151-page lecture notes for Kolmogorov complexity.

| Page | Source read | HTTP(S) URL | Read range and support |
| --- | --- | --- | --- |
| Interactive proofs | Arora--Barak, *Computational Complexity: A Modern Approach* (textbook) | https://theory.cs.princeton.edu/complexity/book.pdf | Chapter 8 contents (PDF p. 7), §8.2 (printed p. 149), §8.3 (p. 150), §8.4 (p. 151), and §8.5 (p. 157): IP, graph nonisomorphism, AM/public coins, hashing, and both directions discussed under IP = PSPACE. |
| Interactive proofs | Goldreich, *Foundations of Complexity Theory*, Lecture 11 (lecture-note volume) | https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf | Contents PDF p. 17; §§11.2--11.4, printed pp. 136--146/PDF pp. 157--167: IP, graph nonisomorphism, IP in PSPACE, public coins, and explicitly scoped round-compression results. |
| Kolmogorov complexity | Shen, *Around Kolmogorov Complexity: Basic Notions and Results* (survey) | https://arxiv.org/pdf/1504.04955 | 51-page PDF: §§2--6, 12--13, 15/17, 28--29, 34--40; supports plain/prefix complexity, tests, randomness and dimension. |
| Kolmogorov complexity | Simpson, *Computability, Unsolvability, Randomness* (lecture notes) | https://sgslogic.net/t20/notes/cur.pdf | 151-page PDF: Ch. 6 §§6.1--6.3, Ch. 7 §§7.1/7.3, Ch. 8 §§8.2/8.4; supports universal machines, Kraft--Chaitin, effective Cantor-space opens, tests and the universal test. |
| Kolmogorov complexity | Franklin--Porter, *Key Developments in Algorithmic Randomness* (survey) | https://arxiv.org/pdf/2004.02851 | 43-page PDF: §§2.1--2.3 and §4.5; supplies the martingale/randomness comparison and Mayordomo's dimension characterization. |
| Kolmogorov complexity | *A zoo of computable binary normal sequences* (journal article) | https://pmc.ncbi.nlm.nih.gov/articles/PMC3511067/ | “The Peculiarity of BinChamp,” opening through Theorem 1 and its proof sketch; explicitly identifies binary Champernowne as computable and binary normal. |

The browser fetches are substantive source verification, not citations treated as unread.  A direct terminal `curl` attempt could not resolve any of these hosts in this sandbox, so it produced no durable validator stamps.  This environmental source-fetch gate is recorded again under validation; no `fetch_verified` value was invented.

## Interactive Proof Systems and Public Coins

### Conventions and dependency rationale

The verifier is a randomized polynomial-time machine with a polynomially bounded number of rounds, message lengths, and random bits; the prover is an arbitrary strategy and is deliberately not time-bounded.  A transcript records all prior messages and all verifier randomness needed to determine the next verifier action.  Completeness quantifies over the honest prover on yes inputs; soundness quantifies over **every** prover strategy on no inputs.  The first class definition uses the conventional constant gap `c >= 2/3`, `s <= 1/3`; sequential fresh-coin restarts provide the tunable gap used later. Honest successes are independent, but an adaptive cheating prover's outcomes need not be: soundness instead uses the conditional bound `Pr[X_i=1 | prior transcript] <= s` and an exponential-moment induction.

Public coin means that every random string used by the verifier before a prover move is announced to the prover; Arthur--Merlin is the named public-coin presentation.  The public-coin conversion is the Goldwasser--Sipser hashing route: the already-established pairwise-independent hash-family definition supplies the only external hashing object, and its new lemma proves the relevant acceptance-fibre size-gap commitment before the conversion theorem uses it.  This avoids importing unlisted graph or algebra pages.

For `IP ⊆ PSPACE`, the finite protocol is represented as a game tree.  An internal depth-first recursion takes a maximum at prover nodes and an exact average at verifier-coin nodes; the total number of leaves can be exponential but a path, recurrence state, numerator/denominator counters, and verifier simulation use polynomial space.  The graph-nonisomorphism definition itself defines finite adjacency encodings and isomorphism in the protocol statement, rather than taking a hidden dependency on the graph-theory page that is not one of this page's declared prerequisites.

The proof page will not claim `PSPACE ⊆ IP`.  Arithmetization, field size, polynomial degree, randomness, communication, and the per-round completeness/soundness invariant all remain prerequisites of the deferred sum-check/reverse-inclusion page.  This enforces the design warning rather than silently calling the equality established here.

### Item ledger

| Item | Intended claim / authoring route | Dependencies | Source support |
| --- | --- | --- | --- |
| `def-interactive-proof-transcript-round-and-strategy` | Define a finite-round exchange, transcript, verifier randomness, and an unrestricted prover strategy. | `def-probabilistic-polynomial-time-machine` | AB §8.2; Goldreich §11.2. |
| `def-completeness-and-soundness` | Define `c`-completeness and `s`-soundness with the required honest-prover/universal-cheating-prover quantifiers. | prior transcript definition | AB Definition 8.5. |
| `def-ip` | Define IP from uniform polynomial bounds and the `2/3,1/3` gap. | completeness/soundness; randomized machine | AB Definition 8.5; Goldreich Definition 11.2. |
| `prop-np-is-contained-in-ip` | Turn an NP verifier and witness into a one-message protocol with perfect completeness and soundness. | IP; NP verifier definition | AB §8.2. |
| `lem-sequential-repetition-amplifies-error` | Apply ordinary Chernoff to honest independent successes; for an adaptive cheating prover, derive the same upper tail from the per-history conditional success bound by an exponential-moment induction. | completeness/soundness; Bernoulli Chernoff bound | AB §8.2; Goldreich §11.2's per-history soundness argument. |
| `def-private-coin-public-coin-and-arthur-merlin-protocol` | Distinguish hidden verifier coins from announced coins and name the AM form. | IP | AB §8.4/Definition 8.7; Goldreich Definition 11.8. |
| `lem-hashing-commits-public-randomness` | State and prove the pairwise-independent hash commitment that distinguishes the required finite acceptance-fibre size cases. | public/private definition; pairwise-independent hashes | AB §8.4 hashing tool. |
| `thm-private-coin-ip-equals-public-coin-ip` | Convert private-coin polynomial-round protocols to public-coin ones with polynomial overhead; include the trivial reverse inclusion. | public/private definition; hashing lemma | AB Theorem 8.11 and §8.4.2; Goldreich Theorem 11.9. |
| `def-protocol-game-tree-and-value` | Define the alternating/maximizing, random-averaging game tree and acceptance value of a finite protocol. | transcript definition | AB §8.5. |
| `lem-optimal-prover-may-be-deterministic` | Show backward induction can choose a deterministic maximizing action at every prover node. | game-tree/value definition | AB §8.5. |
| `lem-protocol-value-is-computable-in-polynomial-space` | Give the depth-first exact-value recurrence and its polynomial-space accounting. | game-tree/value; deterministic-prover lemma; PSPACE definition | AB §8.5; Goldreich Claim 11.3.1. |
| `thm-ip-is-contained-in-pspace` | Apply the value computation to the IP completeness/soundness threshold. | IP; value lemma | AB §8.5; Goldreich §11.3.1. |
| `def-graph-nonisomorphism-protocol` | Define the verifier's randomly permuted graph challenge and the prover's bit reply, including the needed finite graph/isomorphism conventions internally. | transcript definition | AB §8.3. |
| `thm-graph-nonisomorphism-is-in-ip` | Check the protocol's perfect completeness and `1/2` soundness, then invoke repetition for the fixed IP gap. | GNI protocol; IP; repetition lemma | AB §8.3. |
| `fs-soundness-quantifies-only-over-honest-provers` | Refute the false quantifier by exhibiting why a no-instance must be protected against every cheating strategy. | completeness/soundness definition | Direct consequence of AB Definition 8.5; B counterexample is planned. |
| `fs-the-prover-must-run-in-polynomial-time` | Refute the false resource bound: efficiency is imposed on the verifier, not the prover. | transcript definition | AB §8.2/§8.4 convention. |

The companion leaves are `ex-sequential-repetition-amplifies-error`, `ex-graph-nonisomorphism-is-in-ip`, and `cex-soundness-quantifies-only-over-honest-provers`.  Each depends only on its immediately relevant A item, as the manifest records.

## Kolmogorov Complexity and Algorithmic Randomness

### Conventions and dependency rationale

Finite strings live in `{0,1}*`; an infinite sequence lives in Cantor space `2^ω`, and `X↾n` is its finite prefix.  A description machine is partial computable. Relative prefix complexity is first written `K_M`; the unqualified `K` is fixed only after the prefix invariance theorem constructs an optimal machine from the acceptable numbering. Every machine-invariance assertion names its additive constant; no finite complexity value is called machine-independent.  The symmetry item states the plain-complexity relation with its logarithmic slack, while the prefix-code machinery explains the sharper coding accounting used in its proof.

Cantor-space basic cylinders `[σ]` have fair-coin measure `2^{-|σ|}`.  An effectively open set is a uniformly c.e. union of such cylinders.  A Martin-Löf test is a uniformly effective sequence `(U_n)` with `μ(U_n) <= 2^{-n}`, and a sequence is random when it avoids the intersection of every such test.  The universal-test construction uses the already-established acceptable numbering rather than presuming an unnamed enumeration of tests.

A computable martingale is a nonnegative, total, effectively represented real-valued function on finite binary strings satisfying `d(σ) = (d(σ0)+d(σ1))/2`; success means unbounded capital along a sequence.  The proof of the implication from Martin-Löf to computable randomness must explicitly build threshold open covers from a successful martingale and give the measure bound.  The effective-dimension definition uses c.e. `s`-gales/covers, and the Mayordomo theorem's proof plan includes the internal gale-to-cover and Kraft--Chaitin coding sublemmas rather than assuming either as a library dependency.

### Item ledger

| Item | Intended claim / authoring route | Dependencies | Source support |
| --- | --- | --- | --- |
| `def-description-machine-and-plain-kolmogorov-complexity` | Define partial description machines and `C_M(x)` as a shortest program length. | partial computability; word convention | Shen §2; Simpson §6.1. |
| `def-optimal-description-machine` | Define simulation-optimality with its machine-dependent additive overhead. | plain-complexity definition | Shen §3. |
| `thm-invariance-theorem-for-plain-complexity` | Construct an optimal machine and prove `C_U(x) <= C_M(x)+c_M`. | optimal machine definition | Shen Theorem 1; Simpson §6.1. |
| `lem-most-strings-are-incompressible` | Count programs shorter than `n-c` to bound the compressible fraction of length-`n` strings. | plain complexity; finite probability | Shen §5. |
| `thm-kolmogorov-complexity-is-not-computable` | Use the first sufficiently incompressible string selected from a hypothetical complexity algorithm to obtain the contradiction. | optimal machine; partial computability | Shen §6/Theorem 3. |
| `def-conditional-kolmogorov-complexity` | Define `C(x | y)` with a computable pairing/decoding convention. | plain complexity; effective binary encoding | Shen §12. |
| `lem-basic-conditional-complexity-inequalities` | Establish conditioning and concatenation inequalities, always tracking an additive encoding term. | conditional/plain complexity | Shen §13. |
| `def-prefix-free-machine-and-prefix-complexity` | Define prefix-free domains and relative `K_M`, reserving unqualified `K` until optimality is proved. | plain complexity | Shen §34; Simpson §6.2. |
| `thm-kraft-inequality` | Prove Kraft's inequality and the effective Kraft--Chaitin allocation needed for later codes. | prefix-free definition | Shen §35; Simpson §6.3. |
| `thm-invariance-for-prefix-complexity` | Use an acceptable enumeration and self-delimiting machine-index codes to construct an optimal prefix-free machine with additive overhead, then fix unqualified `K`. | prefix-free definition; acceptable numbering | Simpson §6.2; Shen §36. |
| `thm-symmetry-of-information-up-to-logarithmic-terms` | Prove `C(x,y)=C(x|y)+C(y)+O(log(C(x)+2)+log(C(y)+2))` by Shen Theorem 11's counting/self-delimiting-index route, then swap x,y; use prefix machinery only for coding bookkeeping. | conditional complexity; prefix complexity; Kraft allocation; prefix invariance | Shen §13, Theorem 11; §37 is auxiliary prefix-pair context. |
| `def-incompressibility-method` | Package the choose-an-incompressible-object/count-descriptions method and its conditional variant. | incompressible-strings lemma; conditional complexity | Shen §§15,17. |
| `def-effectively-open-set-in-cantor-space` | Define cylinders, fair-coin measure, and c.e. unions of cylinders in `2^ω`. | partial computability; word convention | Shen §28; Simpson §7.3. |
| `def-martin-lof-test-and-random-sequence` | Define tests and passing/failing; keep finite words and infinite sequences distinct. | effective-open definition | Simpson §8.2; Franklin--Porter §2.2. |
| `lem-universal-martin-lof-test-exists` | Uniformly enumerate candidates, trim measures, and combine them to a universal test. | ML tests; acceptable numbering | Shen §29; Simpson Theorem 8.4.8. |
| `thm-levin-schnorr-characterization` | Prove `X` is ML-random iff `K(X↾n) >= n-c` for some constant `c` and all `n`. | ML tests; universal test; prefix complexity; Kraft allocation; prefix invariance | Shen §38; Franklin--Porter §2.1. |
| `def-computable-martingale` | Define effective fair betting and success along prefixes. | word convention | Franklin--Porter Definition 2.8. |
| `thm-martin-lof-randomness-implies-computable-randomness` | Turn any successful computable martingale into a Martin-Löf test of its high-capital cylinders. | ML tests; computable martingale | Franklin--Porter Theorem 2.7/Definition 2.8. |
| `def-effective-hausdorff-dimension` | Define the individual effective dimension using effective `s`-gales/covers. | effective-open definition | Shen §40; Franklin--Porter §4.5. |
| `thm-effective-dimension-is-liminf-prefix-complexity-rate` | Prove `dim(X)=liminf_n K(X↾n)/n` using the planned effective cover/gale and Kraft coding conversions. | effective dimension; prefix complexity; Kraft allocation; prefix invariance | Shen Theorem 35; Franklin--Porter Theorem 4.34. |
| `fs-kolmogorov-complexity-is-an-absolute-integer` | Refute absolute machine-independence; only additive-constant invariance is valid. | plain invariance theorem | Shen §3. |
| `fs-normality-implies-algorithmic-randomness` | Use the computable binary-normal Champernowne sequence; cover its nth prefix by one cylinder in test level n (with the index shifted if needed), proving it fails an ML test despite normality. | ML-test definition | *A zoo of computable binary normal sequences*, “The Peculiarity of BinChamp”; Shen §39 is only strong-law context. |

The three companion leaves are `ex-most-strings-are-incompressible`, `ex-effective-dimension-is-liminf-prefix-complexity-rate`, and `cex-kolmogorov-complexity-is-an-absolute-integer`.  Each points backward only to the listed A claim.

## Deferred and out-of-scope source material

The coverage file gives every source heading a disposition.  The IP reverse inclusion, #P protocol, and straightline polynomial machinery are deferred to `arithmetization-and-the-sum-check-protocol` and `the-ip-equals-pspace-theorem`, with source-specific reasons.  The Arora--Barak GI relativization discussion is deferred to `the-polynomial-hierarchy-and-relativization`.  Simpson's Solovay lemma is deliberately out of scope because no theorem in this planned pair uses its stronger effective Borel--Cantelli conclusion.  These are retained rather than deleted to clear a source gate.

## Validation and remaining obligation

- The validation totals below are the Beta checkpoint; Step 3 reruns and supersedes them in its own review report after these repairs.
- A read-only merged-spec `validate-plan` run (the batch pages substituted in memory only): pass — no unresolved IDs, cycles, forward references, B-page dependencies, or size violations.  It reports the informational page-level redundant-prerequisite notice that `kolmogorov-complexity-and-algorithmic-randomness` directly requires `finite-probability-spaces-and-random-variables` while also reaching it through `randomized-complexity-and-amplification`; both TC-37 and `plan-spec.json` declare that prerequisite, so it is retained rather than altered locally.
- Whole-run `content-policy --manifest-only` over Batch 1 and Batch 2: pass — 83 scoped items, no errors or warnings.
- A forced `source-fetch-check --stamp --force` re-fetch on 2026-09-06 was blocked by this sandbox's DNS: all six recorded URLs returned `EAI_AGAIN`.  The already recorded full-text verification records were deliberately preserved; ordinary check mode subsequently reports `6/6` fetch-verified.  Independent browser reading in this pass reached the five PDF treatments directly and the complete BinChamp section through the PMC search reader; the direct PMC endpoint showed an anti-bot interstitial, while the PNAS DOI/PDF endpoints returned 403 to that reader.  No row, locator, or harvest was deleted to conceal that transport limitation.

Known limits for Step 5: preserve the named additive constants and the finite-string/infinite-sequence distinction; retain every game-tree, hashing, measure, and coding subargument specified above; do not promote the deferred IP reverse inclusion into this page; and do not claim source-fetch stamping passed until the tool itself records it.  The next action before source-gated handoff is to rerun the same fetch validator in a runtime with working DNS; no source row should be removed or rewritten merely to clear this gate.

## Step-3 fix pass

The controlling record remains TC-30/TC-37 in `research/plan-computability-theory-track.md`; its orders and prerequisites agree with `research/plan-spec.json`.  Alpha-a's Step-3 review emits two sufficient page verdicts but no machine-readable per-finding IDs for its three prose repairs.  The locators below are therefore quoted review locations, not new or renumbered finding IDs.

| Review finding locator | Disposition | Evidence and dependency rationale | Changed scaffold record |
| --- | --- | --- | --- |
| `alpha-a-step3-review:batch-2:sequential-repetition` | Applied and retained. | The exact source checks re-read Arora--Barak §8.2 and Goldreich Claim 11.2.1.  Honest executions have fresh-coin independent Bernoulli outcomes; a dishonest adaptive prover is handled by the conditional bound `Pr[X_i=1 | transcript_{<i}] <= s` and an exponential-moment induction, not by an independence assertion. | `lem-sequential-repetition-amplifies-error` retains that route and depends explicitly on `def-completeness-and-soundness` and `lem-chernoff-bound-for-bernoulli-trials` in `frontier-32-batch-2.pages.json`. |
| `alpha-a-step3-review:batch-2:relative-prefix-complexity-and-symmetry` | Applied and retained. | Shen §13, Theorem 11 gives the plain-complexity relation with logarithmic slack; Shen §§34--37 and Simpson §6.2 support the prefix-code bookkeeping.  The route first defines relative `K_M`, then constructs an optimal prefix machine through the acceptable numbering, and only then uses the fixed `K`. | `def-prefix-free-machine-and-prefix-complexity`, `thm-invariance-for-prefix-complexity`, and `thm-symmetry-of-information-up-to-logarithmic-terms` retain their stated strategies and backward dependencies, including `def-universal-and-acceptable-numbering`, `thm-kraft-inequality`, and prefix invariance. |
| `alpha-a-step3-review:batch-2:BinChamp-normality-source` | Applied and retained. | Shen §39 is only inline strong-law context.  The read PMC section “The Peculiarity of BinChamp” states that BinChamp is binary normal and gives Theorem 1's all-prefix one-bit excess; its computable concatenation is enough to enumerate the singleton cylinder `[X↾n]` at test level `n`, establishing non-ML-randomness. | The journal-source row in `frontier-32-batch-2.coverage.json` remains mapped to `fs-normality-implies-algorithmic-randomness`; that false statement retains only `def-martin-lof-test-and-random-sequence` as a dependency. |

The following stable scope-decision findings from the same review were explicitly retained.  Each is non-load-bearing for the 16-item IP A page and its three B leaves; deferred destinations resolve in `plan-spec.json`, and the out-of-scope rows retain their source-specific reasons in the coverage harvest.

| Finding id | Disposition | Evidence | Changed scaffold record |
| --- | --- | --- | --- |
| `14465a1530e9b23dd3cd1388f6c3e0cb498cbe38bffed029b569ab756a630e21` | Stands: deferred to `arithmetization-and-the-sum-check-protocol`. | Arora--Barak §8.5.2 sum-check requires arithmetization, field, degree, and per-round soundness machinery absent from TC-30. | None; retained deferred coverage row. |
| `64ade7d9637d2fd26c62a9aa58b08a91715614f713c97ed4e75c9d8b3dfd6376` | Stands: deferred to `arithmetization-and-the-sum-check-protocol`. | Arora--Barak §8.5.1 arithmetization is a prerequisite of the same later route, not `IP ⊆ PSPACE`. | None; retained deferred coverage row. |
| `7ffb92e5c7be188692b2a4215eeeeff3f7f35da05bd35ac11507d950c45eeb19` | Stands: deferred to `arithmetization-and-the-sum-check-protocol`. | The `#SATD` protocol is not used by an assigned TC-30 item. | None; retained deferred coverage row. |
| `462fb094f8efe9e3af72207c35ab8ad5886fa62ffe84bdce9c86832dd8df1ef2` | Stands: deferred to `the-ip-equals-pspace-theorem`. | The TQBF protocol is the omitted `PSPACE ⊆ IP` direction. | None; retained deferred coverage row. |
| `61679cd10b718b26746f7e196c86b997c677b8bae60e6cca3829d852012a32ec` | Stands: deferred to `the-ip-equals-pspace-theorem`. | Goldreich §11.3.2 belongs to the omitted reverse-inclusion development. | None; retained deferred coverage row. |
| `d871a807742f8908c01ed83f67dd559f069e9616aff73a989e930eae59a301ba` | Stands: deferred to `the-ip-equals-pspace-theorem`. | Goldreich Theorem 11.4 is broader than the scoped `IP ⊆ PSPACE` theorem. | None; retained deferred coverage row. |
| `cb1d834ec99285be27487ff42613e6408c2fe9cc29760272603070f4eb0c3bb3` | Stands: deferred to `the-polynomial-hierarchy-and-relativization`. | Arora--Barak §8.4.3 is the GI-relativization discussion, not an IP/public-coin proof premise. | None; retained deferred coverage row. |
| `412a68abdfc7c2c3ad8f14b6924417f18f5c12ed0fc7b9e5fb288f96282554c1` | Stands: out of scope. | Goldreich's `BPP = IP(0)` comment is not needed by a declared item. | None; retained out-of-scope coverage row. |
| `44a08ac240b25aa9df679917a5439be33c4d83d2dd357f4c00949b3bb154560e` | Stands: out of scope. | IP round compression needs a separate round-complexity treatment and is not a lemma for the chosen conversion. | None; retained out-of-scope coverage row. |
| `70367a099e74393fc2ec7be75f17322f0cc21530a1aad15b5462ed544efcf1bc` | Stands: out of scope. | Linear speed-up is not used by the bounded-round or PSPACE simulations. | None; retained out-of-scope coverage row. |
| `c187bc4aaa1a010069026533ae415d7039bddde5b258c84045425a49d1da14af` | Stands: out of scope. | Constant-round IP collapse needs additional round-compression material and is not a premise here. | None; retained out-of-scope coverage row. |
| `d613c6204d7c04d52b1443ccee1d49c38e01325eb79a646a9168e0893f512c41` | Stands: out of scope. | Simpson's Solovay lemma is stronger effective Borel--Cantelli machinery unused by the selected ML-test, martingale, or dimension proofs. | None; retained out-of-scope coverage row. |

Validation after the retained repairs: JSON parsing and `manifest-deps` pass (`44` items, `0` errors); `coverage-checklist --require-destination` passes (`2` pages, `80` harvested results, `0` errors/warnings); whole-run `content-policy --manifest-only` passes (`676` scoped items, `0` errors/warnings); `source-fetch-check` check mode passes (`6/6` source records); and `validate-plan research/plan-spec.json` passes with no cycle, forward-reference, B-page-dependency, or unresolved-ID defect in the itemized plan.  Its informational redundant-prerequisite notice for the Kolmogorov page's finite-probability requirement is retained because it is declared by both the controlling design and plan spec.

## Step-5 authoring

Authored the 44 planned draft items and four draft pages for TC-30 and TC-37. Statements retain literature-derived provenance and the batch coverage's Arora--Barak/Goldreich and Shen/Simpson/Franklin--Porter locators; local proofs are marked ai-altered. The IP scope remains the public-coin conversion and $\mathrm{IP}\subseteq\mathrm{PSPACE}$, with arithmetization and the reverse inclusion deferred as recorded. Kolmogorov complexity retains machine-relative additive constants and distinguishes finite strings from Cantor-space sequences. No planned claim was narrowed or dropped. The proof-contract file was created but its per-proof worksheets remain an unresolved authoring obligation; consequently no truthful completion claim is made for that gate.
