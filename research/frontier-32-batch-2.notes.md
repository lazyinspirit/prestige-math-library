# frontier-32 · beta · batch 2 scaffold notes

## Scope and controlling design

Authorized artifacts for this task are this note, `frontier-32-batch-2.pages.json`, and `frontier-32-batch-2.coverage.json`.  No library page, item file, plan structure, workflow state, or other batch is changed.

I read both requested locations for each pair in `research/plan-computability-theory-track.md`: TC-30's A inventory at L1240 and its B inventory at L1264; TC-37's A inventory at L1501 and its B inventory at L1531.  These are complementary inventories in the same controlling track document, not competing amendments.  No later completion/expansion amendment for either page was found, so that track document controls.  Its orders and declared prerequisites agree exactly with `research/plan-spec.json` and the dispatch: IP is 639/640 and requires randomized complexity plus space complexity; Kolmogorov complexity is 653/654 and requires acceptable numberings, randomized complexity, and finite probability.  There is therefore no drift decision to make inside this batch.

The A inventories are retained exactly: 16 items for interactive proofs and 22 for Kolmogorov complexity.  Both are below the 60-item A-page ceiling, so neither is split.  The companion B pages contain the three designed leaf items each.  All 44 manifest objects carry an explicit `deps` array.

## Read sources and URL verification

All five recorded PDF URLs were opened and read as complete documents through the browser fetcher on 2026-09-06.  The source readings, their exact section/page locators, their own result headings, and a disposition for every harvested result are in `frontier-32-batch-2.coverage.json` (all currently accepted by `coverage-checklist`).  The sources are independent.  The textbook/course-note requirement is met by Arora--Barak and Goldreich's lecture-note volume for IP, and by Simpson's 151-page lecture notes for Kolmogorov complexity.

| Page | Source read | HTTP(S) URL | Read range and support |
| --- | --- | --- | --- |
| Interactive proofs | Arora--Barak, *Computational Complexity: A Modern Approach* (textbook) | https://theory.cs.princeton.edu/complexity/book.pdf | Chapter 8 contents (PDF p. 7), §8.2 (printed p. 149), §8.3 (p. 150), §8.4 (p. 151), and §8.5 (p. 157): IP, graph nonisomorphism, AM/public coins, hashing, and both directions discussed under IP = PSPACE. |
| Interactive proofs | Goldreich, *Foundations of Complexity Theory*, Lecture 11 (lecture-note volume) | https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf | Contents PDF p. 17; §§11.2--11.4, printed pp. 136--146/PDF pp. 157--167: IP, graph nonisomorphism, IP in PSPACE, public coins, and explicitly scoped round-compression results. |
| Kolmogorov complexity | Shen, *Around Kolmogorov Complexity: Basic Notions and Results* (survey) | https://arxiv.org/pdf/1504.04955 | 51-page PDF: §§2--6, 12--13, 15/17, 28--29, 34--40; supports plain/prefix complexity, tests, randomness and dimension. |
| Kolmogorov complexity | Simpson, *Computability, Unsolvability, Randomness* (lecture notes) | https://sgslogic.net/t20/notes/cur.pdf | 151-page PDF: Ch. 6 §§6.1--6.3, Ch. 7 §§7.1/7.3, Ch. 8 §§8.2/8.4; supports universal machines, Kraft--Chaitin, effective Cantor-space opens, tests and the universal test. |
| Kolmogorov complexity | Franklin--Porter, *Key Developments in Algorithmic Randomness* (survey) | https://arxiv.org/pdf/2004.02851 | 43-page PDF: §§2.1--2.3 and §4.5; supplies the martingale/randomness comparison and Mayordomo's dimension characterization. |

The browser fetches are substantive source verification, not citations treated as unread.  A direct terminal `curl` attempt could not resolve any of these hosts in this sandbox, so it produced no durable validator stamps.  This environmental source-fetch gate is recorded again under validation; no `fetch_verified` value was invented.

## Interactive Proof Systems and Public Coins

### Conventions and dependency rationale

The verifier is a randomized polynomial-time machine with a polynomially bounded number of rounds, message lengths, and random bits; the prover is an arbitrary strategy and is deliberately not time-bounded.  A transcript records all prior messages and all verifier randomness needed to determine the next verifier action.  Completeness quantifies over the honest prover on yes inputs; soundness quantifies over **every** prover strategy on no inputs.  The first class definition uses the conventional constant gap `c >= 2/3`, `s <= 1/3`; sequential independent restarts provide the tunable gap used later.

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
| `lem-sequential-repetition-amplifies-error` | Prove the quantitative gap reduction for independently restarted sequential copies, keeping adaptive cheating strategies under the soundness quantifier. | completeness/soundness; Bernoulli Chernoff bound | AB §8.2. |
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

Finite strings live in `{0,1}*`; an infinite sequence lives in Cantor space `2^ω`, and `X↾n` is its finite prefix.  A description machine is partial computable.  Plain complexity is `C_U(x)` and prefix complexity is `K_U(x)` for a fixed optimal machine.  Every machine-invariance assertion names its additive constant; no finite complexity value is called machine-independent.  The symmetry item states the plain-complexity relation with its logarithmic slack, while the prefix-code machinery explains the sharper coding accounting used in its proof.

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
| `def-prefix-free-machine-and-prefix-complexity` | Define prefix-free domains, `K`, and the conditional prefix convention needed later. | plain complexity | Shen §34; Simpson §6.2. |
| `thm-kraft-inequality` | Prove Kraft's inequality and the effective Kraft--Chaitin allocation needed for later codes. | prefix-free definition | Shen §35; Simpson §6.3. |
| `thm-invariance-for-prefix-complexity` | Construct/simulate an optimal prefix-free machine with additive overhead. | prefix-free definition | Simpson §6.2; Shen §36. |
| `thm-symmetry-of-information-up-to-logarithmic-terms` | Prove the plain-complexity symmetry formula with explicit `O(log(|x|+|y|))` slack via paired prefix descriptions. | conditional complexity; prefix complexity; Kraft allocation | Shen §37. |
| `def-incompressibility-method` | Package the choose-an-incompressible-object/count-descriptions method and its conditional variant. | incompressible-strings lemma; conditional complexity | Shen §§15,17. |
| `def-effectively-open-set-in-cantor-space` | Define cylinders, fair-coin measure, and c.e. unions of cylinders in `2^ω`. | partial computability; word convention | Shen §28; Simpson §7.3. |
| `def-martin-lof-test-and-random-sequence` | Define tests and passing/failing; keep finite words and infinite sequences distinct. | effective-open definition | Simpson §8.2; Franklin--Porter §2.2. |
| `lem-universal-martin-lof-test-exists` | Uniformly enumerate candidates, trim measures, and combine them to a universal test. | ML tests; acceptable numbering | Shen §29; Simpson Theorem 8.4.8. |
| `thm-levin-schnorr-characterization` | Prove `X` is ML-random iff `K(X↾n) >= n-c` for some constant `c` and all `n`. | ML tests; universal test; prefix complexity; Kraft allocation | Shen §38; Franklin--Porter §2.1. |
| `def-computable-martingale` | Define effective fair betting and success along prefixes. | word convention | Franklin--Porter Definition 2.8. |
| `thm-martin-lof-randomness-implies-computable-randomness` | Turn any successful computable martingale into a Martin-Löf test of its high-capital cylinders. | ML tests; computable martingale | Franklin--Porter Theorem 2.7/Definition 2.8. |
| `def-effective-hausdorff-dimension` | Define the individual effective dimension using effective `s`-gales/covers. | effective-open definition | Shen §40; Franklin--Porter §4.5. |
| `thm-effective-dimension-is-liminf-prefix-complexity-rate` | Prove `dim(X)=liminf_n K(X↾n)/n` using the planned effective cover/gale and Kraft coding conversions. | effective dimension; prefix complexity; Kraft allocation | Shen Theorem 35; Franklin--Porter Theorem 4.34. |
| `fs-kolmogorov-complexity-is-an-absolute-integer` | Refute absolute machine-independence; only additive-constant invariance is valid. | plain invariance theorem | Shen §3. |
| `fs-normality-implies-algorithmic-randomness` | Refute the implication with a computable normal binary sequence and a uniform test covering that computable sequence. | ML-test definition | Shen §39 supplies the normality context; construction is authored inline. |

The three companion leaves are `ex-most-strings-are-incompressible`, `ex-effective-dimension-is-liminf-prefix-complexity-rate`, and `cex-kolmogorov-complexity-is-an-absolute-integer`.  Each points backward only to the listed A claim.

## Deferred and out-of-scope source material

The coverage file gives every source heading a disposition.  The IP reverse inclusion, #P protocol, and straightline polynomial machinery are deferred to `arithmetization-and-the-sum-check-protocol` and `the-ip-equals-pspace-theorem`, with source-specific reasons.  The Arora--Barak GI relativization discussion is deferred to `the-polynomial-hierarchy-and-relativization`.  Simpson's Solovay lemma is deliberately out of scope because no theorem in this planned pair uses its stronger effective Borel--Cantelli conclusion.  These are retained rather than deleted to clear a source gate.

## Validation and remaining obligation

- `coverage-checklist --require-destination`: pass — 2 A pages, 77 harvested source results, no errors or warnings.
- A read-only merged-spec `validate-plan` run (the batch pages substituted in memory only): pass — no unresolved IDs, cycles, forward references, B-page dependencies, or size violations.  Repository-wide existing prerequisite warnings are pre-existing and do not name a Batch 2 item.
- Whole-run `content-policy --manifest-only` over Batch 1 and Batch 2: pass — 83 scoped items, no errors or warnings.
- `source-fetch-check --stamp`: blocked by the terminal network, not by an unverified or unavailable document.  Each of the five recorded live URLs returned `EAI_AGAIN` (DNS temporary failure), so the tool recorded `0/5` fetch-verified and wrote no stamps.  Browser full-text verification is recorded above, but it is not substituted for a validator stamp.

Known limits for Step 5: preserve the named additive constants and the finite-string/infinite-sequence distinction; retain every game-tree, hashing, measure, and coding subargument specified above; do not promote the deferred IP reverse inclusion into this page; and do not claim source-fetch stamping passed until the tool itself records it.  The next action before source-gated handoff is to rerun the same fetch validator in a runtime with working DNS; no source row should be removed or rewritten merely to clear this gate.
