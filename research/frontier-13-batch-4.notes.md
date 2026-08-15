# Frontier-13 batch 4 — Beta scaffold notes

Run: `frontier-13`  
Owned pages: orders 395/396 and 399/400  
Owned artifacts: `research/frontier-13-batch-4.pages.json`, `.notes.md`, `.coverage.json`, `.proof-contracts.json`

## Outcome and split decision

The EH A page has 11 items and its B page has 8. The regularity A page has 25 items and its B page has 8. Both A pages are below the current hard ceiling of 60 items without omitting a harvested core result. **No split is proposed.** The exact cut question is therefore not applicable: the first page ends with the conjecture after the Ramsey/random baselines and invariances, while the second page closes induced removal after building ordinary and strong regularity, self-regular representatives, and induced counting.

The pairs remain mechanically independent. No item on page 395 or 396 cites pages 399/400, and no item on page 399 or 400 cites pages 395/396. The regularity pair does not use `hom(G)` or the EH definition; the EH pair does not use density, regularity, counting, or removal.

## Applyable prose-scaffold amendments

File: `research/plan-combinatorics-and-categories.md`, §16.2 table.

Exact old text:

> `| 395/396 | erdos-hajnal-property-and-homogeneous-sets | erdos-hajnal-property-and-homogeneous-sets-examples | EH constants, the conjecture, complement invariance, monotonicity and family/single-graph formulations. |`

Exact new text:

> `| 395/396 | erdos-hajnal-property-and-homogeneous-sets | erdos-hajnal-property-and-homogeneous-sets-examples | Homogeneous sets and hom(G); EH exponents and their downward closure; the Erdős–Hajnal conjecture; complement, subclass and forbidden-pattern monotonicity; equivalence of the universally quantified single-pattern and finite-family formulations; the explicit one-half-log_2 n Ramsey baseline; and a first-moment G(n,1/2) construction proving that all graphs admit no universal positive-power bound. |`

Exact old text:

> `| 399/400 | regular-pairs-and-induced-counting | regular-pairs-and-induced-counting-examples | Density, regularity, energy increment, slicing, induced counting and induced removal. |`

Exact new text:

> `| 399/400 | regular-pairs-and-induced-counting | regular-pairs-and-induced-counting-examples | Edge density; regular pairs, slicing, robustness and typical degrees; regular partitions and the energy-increment proof of Szemerédi regularity with an explicit tower recurrence; self-regular subsets; triangle, graph and induced counting; ordinary removal; strong regularity and energy approximation with wowzer growth; representative subsets regular also with themselves; and a full proof of fixed-pattern induced removal. |`

### Two-paragraph page summaries for step 4

`erdos-hajnal-property-and-homogeneous-sets`:

> A homogeneous set in a graph is either a clique or a stable set, and `hom(G)` records the larger of the two. A hereditary class has the Erdős–Hajnal property when one positive exponent forces `hom(G)` to grow as a power of the graph order. The admissible exponents are downward closed, the property passes to hereditary subclasses, and complementation preserves it because cliques and stable sets are exchanged. These facts give the correct monotonicity for forbidden induced patterns and identify the single-graph conjecture with its universally quantified finite-family form.
>
> Finite Ramsey theory guarantees only a logarithmic homogeneous set in every graph: `hom(G) ≥ (1/2) log_2 n`. A direct first-moment calculation in `G(n,1/2)` supplies graphs with `hom(G) < 3 log_2 n`, so no positive power works for the class of all graphs. The Erdős–Hajnal conjecture is precisely the assertion that forbidding any one fixed induced pattern changes this logarithmic worst case into polynomial growth.

`regular-pairs-and-induced-counting`:

> An epsilon-regular pair has nearly unchanged edge density on every sufficiently large subpair. Typical-degree, slicing, complementation and robustness lemmas make that definition usable. The mean-square density of a vertex partition is monotone under refinement, and every irregular partition has a quantified energy increment. Iteration yields an equitable Szemerédi partition after fewer than `2 epsilon^-5` rounds, with the displayed recurrence giving an honest tower-type upper bound rather than a stronger unproved estimate.
>
> Regular pairs support triangle, graph and induced counting, and ordinary removal follows by partitioning, cleaning and counting. Induced removal needs more: energy-stabilised strong regularity, large self-regular subsets, and representative subsets whose cross-pairs and self-pairs are all regular while approximating the coarse densities. That machinery licenses adding as well as deleting a small number of edges, after which any surviving induced pattern would force polynomially many induced embeddings in the original graph.

## Canonical source ledger

### Page 395 — EH property

1. Maria Chudnovsky, *The Erdős-Hajnal Conjecture—A Survey*, <https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf>. Read §1, PDF pp. 1–2, through Conjecture 1.2, and §2 on PDF p. 3 through the list of the four prime graphs on five vertices, stopping before Theorem 2.3. The extended range supplies the Ramsey positive instances, the $P_3$ square-root bound, and the classification through three vertices, while the remaining headings on that page are dispositioned in the coverage ledger.
2. Artem Chernikov, *MATH 223M: Topics in Model Theory* full course notes, <https://chernikov.umd.edu/teaching/19F-MATH223M/Notes.pdf>. Read §3.1, PDF pp. 18–19, through Theorem 3.4. This independently supplied the logarithmic Ramsey baseline, optimality, the conjecture, and the finite-family reformulation. Definition 3.3 and Theorem 3.4 were harvested but declined because they initiate the model-theoretic stability branch.
3. Target paper arXiv:2606.06258v2, <https://arxiv.org/html/2606.06258v2>. Read the opening of §1 through the family definition and complement-invariance sentence, stopping before §1.1. This fixes the block's `epsilon`-as-exponent convention and confirms where the classical and log-log improvements belong later.

### Page 399 — regularity and induced removal

1. Yufei Zhao, *Graph Theory and Additive Combinatorics*, Chapter 2, <https://yufeizhao.com/gtacbook/2.pdf>. Read the exact ranges recorded in the coverage file: §2.1 in full through Exercise 2.1.28; §2.2; §2.6 through Theorem 2.6.5; and §2.8 through the proof of Theorem 2.8.1. This is the primary full textbook treatment and supplies every proof spine used here.
2. David Conlon and Jacob Fox, *Graph removal lemmas*, <https://arxiv.org/pdf/1211.3487>. Read §2.1 through Lemma 2.4 and §3.1 in full. This independently confirms the energy-increment proof and its tower height, the ordinary counting/removal route, strong regularity and wowzer growth, representative subsets, induced counting, and induced removal.

The machine-faithful heading-by-heading dispositions are in `research/frontier-13-batch-4.coverage.json`; its final gate reports 93 harvested rows, 0 errors and 0 warnings.

### Licensing and quotation discipline

The sources above are public author-hosted notes, surveys, and an arXiv paper, but the harvested pages do not grant a project-specific license to reproduce their exposition. Step 5 should cite the URLs, restate mathematical results in the library's notation, and write fresh proofs from the recorded strategies. No source prose or figure should be copied. The arXiv/author-hosted availability is treated as access for verification, not as permission to redistribute text.

## Convention and statement ledger

- **Stable set terminology.** Chudnovsky uses stable set and Chernikov uses anti-clique. The library already publishes “stable set” with “independent set” as a synonym; the new pages use that convention.
- **EH constants.** The target paper calls the exponent an EH constant for a family. The scaffold defines it for a hereditary graph class and then specializes to `H`-free and finite-family-free classes. Only nonempty graphs are tested, so no undefined `0^epsilon` occurs.
- **Family equivalence.** The equivalence is between the two universal conjectures: every single forbidden graph versus every finite nonempty forbidden family. It is not the false claim that a fixed family-free class is equivalent to every one of its single-member classes.
- **Random-graph constant.** The target introduction quotes a sharper constant near `2 log n`. The locally proved first-moment version uses `3 log_2 n`; that weaker honest bound is sufficient to rule out every polynomial lower bound.
- **Density on overlapping sets.** Zhao and Conlon–Fox permit overlapping vertex sets and count ordered pairs. The library's existing pure-pair definition is only for disjoint sets. The new density definition extends the ordered-pair convention locally. For disjoint sets, complement density is exactly `1-d`; for overlapping sets a diagonal correction remains and the scaffold never claims otherwise.
- **Regular partitions versus self-regular sets.** The ordinary partition definition counts irregular cross-pairs. Self-regularity is built separately and is required only in the representative-subset theorem, because an induced-copy part map may repeat an index.
- **Copy counts.** `def-induced-copy-number` counts labelled induced embeddings. Sources sometimes say “copies” for images or divide by automorphisms. The induced removal statement uses the library's labelled `ind_H(G)` convention; changing between conventions only changes the fixed `delta`, but the proof will not silently switch.
- **Regularity bounds.** Ordinary regularity records the actual recurrence `m_(r+1)=ceil(epsilon^-5 m_r 2^(m_r+2))` for at most `ceil(2 epsilon^-5)` rounds. Strong regularity records the iterated-tower/wowzer bound produced by the proof. The newer tower bound for induced removal in Conlon–Fox §3.2 is not claimed because that section and its weak-cylinder machinery were not imported.
- **Refinement vocabulary.** The published `def-partition-and-refinement` concerns interval partitions and was deliberately rejected as a dependency. Vertex partitions and their refinement relation are defined afresh in `def-regular-and-equitable-vertex-partition`.
- **No applied canonical embedding.** All planned titles and strategies use ordinary numerals. No new expression of the form forbidden by `notation-iota-applied` occurs.

## Published dependency audit and confidence routes

Every external dependency below was opened from `items/<id>.md` on disk. All 35 carry explicit component provenance, so no `legacy-unclassified` dependency is load-bearing. “Exact” means the displayed Definition/Statement was checked against the planned use; “source-backed” means its recorded external references also match the convention. AI-generated proofs are never treated as source authority for a new claim: where such an item is used, only its exact published interface is used and the interface is independently source-backed or elementary.

| Published item | Confidence route and exact use |
|---|---|
| `def-finite-simple-graph` | Exact, source-backed definition of finite loopless simple graphs; ambient object for both pairs. |
| `def-standard-complete-bipartite-path-and-cycle-graphs` | Exact, source-backed conventions for empty/complete graphs, `K_{a,b}`, `P_n`, and `C_n`; examples only. |
| `def-graph-isomorphism-and-complement` | Exact complement and isomorphism clauses; used for complement invariance and examples. |
| `def-clique-stable-set-and-numbers` | Exact published maxima, including the null graph; source-backed by Diestel/Boncompagni. |
| `lem-complement-swaps-cliques-and-stable-sets` | Exact Statement checked; proof is AI-generated but the interface is elementary and independently backed by Diestel/Boncompagni/ISGCI. |
| `def-induced-embedding-and-induced-copy` | Exact injection preserving adjacency and nonadjacency; source-backed and matches later repeated-part counting. |
| `def-induced-copy-number` | Exact labelled-embedding convention; used in induced counting/removal without changing to unlabelled copies. |
| `lem-induced-embeddings-compose` | Exact transitivity Statement; proof is AI-generated but was rechecked directly from the two biconditionals. |
| `def-h-free-and-family-free-graph` | Exact induced, not ordinary, freeness convention; literature-derived. |
| `lem-forbidden-induced-subgraph-classes-are-hereditary` | Exact closure Statement; proof is AI-generated but follows directly from published freeness/transitivity and was checked. |
| `def-hereditary-graph-class` | Exact isomorphism and induced-subgraph closure clauses; literature-derived. |
| `def-complement-of-a-graph-class` | Exact class-complement convention, avoiding set-theoretic complement. |
| `thm-complementation-preserves-hereditary-classes-and-bases` | Exact heredity clause only; AI-generated proof rechecked via complement commuting with induced subgraphs. |
| `cor-h-free-complement-dictionary` | Exact `G` H-free iff complement `G` complement-H-free interface; AI-generated proof directly rechecked. |
| `def-edges-between-sets-and-pure-mixed-pairs` | Exact disjoint-set cross-edge language; the new density definition explicitly extends beyond its disjoint scope. |
| `def-binomial-coefficient` | Exact count of `k`-subsets; used for Ramsey and first-moment enumeration. |
| `thm-finite-graph-ramsey-binomial-bound` | Exact positive-parameter arrow bound; literature-derived statement and audited proof. |
| `def-erdos-renyi-random-graph` | Exact independent Bernoulli edge-coordinate model; literature-derived. |
| `lem-random-graph-fixed-pattern-probability` | Exact product probability for prescribed present/absent edges; audited, source-backed interface. |
| `thm-linearity-of-expectation` | Exact finite-family linearity without independence; literature-derived and audited. |
| `thm-first-moment-method` | Exact integer-valued `E[X]<1` avoidance clause; interface rechecked and used only in that direction. |
| `thm-markov-inequality` | Exact weak-threshold finite-space inequality; literature-derived and audited. |
| `lem-cauchy-schwarz-for-finite-random-variables` | Exact finite Cauchy–Schwarz inequality; used to license energy monotonicity. |
| `def-real-power` | Exact positive-base real powers and zero-base positive-exponent convention; EH definition tests nonempty orders only. |
| `def-logarithm-to-a-base` | Exact change from natural to binary logarithm. |
| `thm-natural-logarithm-laws` | Exact monotonicity and `log 1=0`; its proof is AI-generated but the interface is source-backed and independently elementary. |
| `thm-exponential-is-strictly-increasing` | Exact monotonicity interface, literature-derived and independently certified. |
| `thm-logarithm-change-of-base` | Exact base-change identity; AI-generated proof rechecked from the definition and log laws. |
| `thm-logarithm-slower-than-every-positive-power` | Exact asymptotic limit; proof is AI-generated but source-backed and used only to choose sufficiently large `n`. |
| `def-connected-graph-and-connected-component` | Exact path-based connectivity and component definition; used to reduce a nonclique component to two nonadjacent reachable vertices. |
| `cor-connected-components-partition-the-vertex-set` | Exact partition and maximal-connected-subgraph Statement; licenses the component decomposition in the $P_3$-free proof. |
| `def-graph-walk-trail-path-and-cycle` | Exact path convention, including distinct vertices and length; used for the first three vertices of a shortest path. |
| `def-graph-distance-and-girth` | Exact minimum-length path definition inside a component; licenses the shortest-path choice and shortcut contradiction. |
| `thm-of-square-roots` | Exact existence and uniqueness of the nonnegative square root in a complete ordered field; used after $n\le\operatorname{hom}(G)^2$. |
| `thm-real-power-agrees-with-rational-exponent` | Exact agreement of real and rational powers; identifies $\sqrt n$ with the exponent $n^{1/2}$ in the EH definition. |

## Expected component provenance, item by item

Abbreviations: `LD` = `literature-derived`, `AA` = `ai-altered`, `AG` = `ai-generated`, `NA` = `not-applicable`. “Adapted” means a sourced result restated to the library's finite/labelled conventions with a fresh proof. Generated examples and false statements are leaves and are never cited by either A page.

### Order 395 A page

| Item | Expected statement / proof | Rationale |
|---|---|---|
| `def-homogeneous-set-and-homogeneous-number` | LD / NA | Chudnovsky and Chernikov definitions, normalized to the published clique/stable-set interface. |
| `def-erdos-hajnal-property-and-constant` | LD / NA | Target-paper family definition adapted to hereditary classes and nonempty graphs. |
| `lem-erdos-hajnal-constants-are-downward-closed` | AA / AG | Direct sourced-definition consequence; the proof obligation is real-power monotonicity for integer bases at least one. |
| `thm-ramsey-logarithmic-homogeneous-set-bound` | LD / AA | Both independent treatments state the baseline; proof specialized from the published Ramsey binomial theorem. |
| `thm-complete-graph-free-classes-are-erdos-hajnal` | LD / AA | Chudnovsky §2 states the complete-pattern case; the local proof extracts a polynomial stable set from the published off-diagonal Ramsey bound and closes the finite initial range explicitly. |
| `thm-p3-free-graphs-have-square-root-homogeneous-sets` | LD / AA | Chudnovsky §2 states the two-edge-path case; the local proof expands the component argument and the inequality $n\le\alpha(G)\omega(G)$. |
| `thm-random-graph-logarithmic-homogeneous-set-upper-bound` | LD / AA | Both treatments cite Erdős random graphs; constants and first-moment calculation are made explicit locally. |
| `cor-the-class-of-all-graphs-is-not-erdos-hajnal` | AA / AG | Direct corollary of the sourced random bound and published logarithm asymptotic. |
| `prop-erdos-hajnal-property-is-complement-invariant` | LD / AA | Explicit in Chudnovsky and the target paper; proof uses published complement interfaces. |
| `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property` | LD / AA | Chudnovsky §2 states the conclusion; the local proof enumerates the isomorphism/complement types and applies the two new positive instances plus complement invariance. |
| `prop-erdos-hajnal-property-passes-to-hereditary-subclasses` | AA / AG | Immediate definition consequence used to isolate the direction of later monotonicity. |
| `prop-erdos-hajnal-property-is-monotone-under-induced-pattern-containment` | AA / AG | Standard induced-containment consequence; proof dependency direction is recorded to prevent reversal. |
| `thm-single-pattern-and-finite-family-erdos-hajnal-formulations` | LD / AA | Chernikov Remark 3.2, with the universal quantifiers made explicit. |
| `rem-the-erdos-hajnal-conjecture` | LD / NA | Chudnovsky Conjecture 1.1, Chernikov Conjecture 3.1, and target Conjecture 1. |

### Order 396 B page

| Item | Expected statement / proof | Rationale and generated-item check |
|---|---|---|
| `ex-homogeneous-number-of-complete-and-empty-graphs` | AA / AG | Checkable computation from published definitions; verify `n=0` separately. |
| `ex-homogeneous-number-of-complete-bipartite-graphs` | AA / AG | Checkable finite computation; verify both bipartition sides are positive as stated. |
| `ex-the-five-cycle-has-homogeneous-number-two` | AA / AG | Standard finite example; exhaust the ten three-subsets or give a symmetry argument. |
| `ex-complete-and-empty-hereditary-classes-have-constant-one` | AA / AG | Checkable direct application of the first example; leaf only. |
| `ex-bounded-order-graph-classes-are-erdos-hajnal` | AA / AG | Generated direct example; author must check `N=0,1` and choose a genuinely positive exponent for `N>=2`. |
| `ex-a-forbidden-pattern-and-its-complement-share-eh-status` | AA / AG | Checkable `P_3` complement computation illustrating a sourced proposition; leaf only. |
| `cex-the-logarithmic-ramsey-bound-is-not-an-erdos-hajnal-bound` | AA / AG | Direct witness extraction from the A-page theorem; verify all quantifiers in `epsilon`. |
| `fs-every-hereditary-class-is-erdos-hajnal` | AG / AG | Generated false statement, explicitly refuted by the sourced all-graphs class; counterexample search obligation is discharged by the A-page corollary. |

### Order 399 A page

| Item | Expected statement / proof | Rationale |
|---|---|---|
| `def-edge-density-between-vertex-sets` | LD / NA | Zhao Definition 2.1.1 and Conlon–Fox §2.1; overlap/diagonal convention is explicit. |
| `def-epsilon-regular-pair` | LD / NA | Zhao Definition 2.1.2 and Conlon–Fox §2.1; self-regularity added from Zhao Theorem 2.1.26. |
| `lem-complementation-preserves-disjoint-regular-pairs` | AA / AG | Direct definition consequence needed for induced counting; exact only for disjoint pairs. |
| `lem-typical-degrees-in-a-regular-pair` | LD / AA | Zhao Lemma 2.2.3 and counting proofs. |
| `lem-slicing-lemma-for-regular-pairs` | LD / AA | Zhao Exercise 2.1.4 with the standard density-shift bound restored explicitly. |
| `lem-regularity-is-robust-under-small-edits` | LD / AA | Zhao Exercise 2.1.6; proof must select and display a working delta. |
| `def-regular-and-equitable-vertex-partition` | LD / NA | Both sources; defines vertex refinement locally because the published partition item is interval-specific. |
| `def-energy-of-a-vertex-partition` | LD / NA | Zhao Definition 2.1.10 and Conlon–Fox mean-square density. |
| `lem-energy-is-monotone-under-refinement` | LD / AA | Zhao Lemmas 2.1.11–12 and Conlon–Fox Proposition 2.1. |
| `lem-energy-boost-for-an-irregular-pair` | LD / AA | Zhao Lemma 2.1.13; strict `epsilon^4` gain retained. |
| `lem-energy-increment-for-an-irregular-partition` | LD / AA | Zhao Lemma 2.1.14 / Conlon–Fox Lemma 2.2; part-count recurrence retained. |
| `thm-szemeredi-regularity-lemma-with-tower-bound` | LD / AA | Zhao Theorems 2.1.9/20 and Conlon–Fox Lemma 2.1; proof and tower recurrence both required. |
| `cor-regularity-refining-a-given-partition` | LD / AA | Zhao Theorem 2.1.19; non-equitable refinement form used by strong regularity. |
| `thm-large-self-regular-subset` | LD / AA | Zhao Theorem 2.1.26 and Exercise 2.1.27; full proof must replace the source exercise prompt. |
| `cor-partition-into-self-regular-sets` | LD / AA | Zhao Exercise 2.1.28 and Conlon–Fox Lemma 3.7; robustness closes the leftover distribution. |
| `thm-triangle-counting-lemma-for-regular-triples` | LD / AA | Zhao Theorem 2.2.1; quantitative factors retained. |
| `thm-counting-lemma-for-a-fixed-graph` | LD / AA | Zhao Theorems 2.6.2/4 and Conlon–Fox Lemma 2.4; greedy proof must include injectivity loss. |
| `thm-induced-counting-lemma-for-regular-pairs` | LD / AA | Zhao Remark 2.6.3(b) and Conlon–Fox Lemma 3.3; repeated host sets and collisions are explicit. |
| `def-graph-edit-distance-and-epsilon-far` | LD / NA | Zhao Remark 2.8.2 and Conlon–Fox introduction. |
| `thm-graph-removal-lemma` | LD / AA | Zhao Theorem 2.6.5 and Conlon–Fox Theorem 1.1 proof. |
| `thm-strong-regularity-lemma-by-energy-stabilisation` | LD / AA | Zhao Theorem 2.8.3 and Conlon–Fox Lemma 3.1; proof must show why the coarse partition is already epsilon-zero regular. |
| `lem-energy-controls-density-approximation` | LD / AA | Zhao Lemma 2.8.7 and Conlon–Fox closeness discussion. |
| `thm-self-regular-representative-subsets` | LD / AA | Zhao Theorem 2.8.9 and Conlon–Fox Lemma 3.2; source omissions around self-pairs are filled with the self-regular-subset machinery. |
| `rem-tower-and-wowzer-bounds-in-regularity` | LD / NA | Zhao Remark 2.8.5 and Conlon–Fox §§1/3.1; records only bounds produced by proofs on the page. |
| `thm-induced-graph-removal-lemma` | LD / AA | Zhao Theorem 2.8.1 and Conlon–Fox Theorem 1.3 deduction; full strong-regularity proof retained in scope. |

### Order 400 B page

| Item | Expected statement / proof | Rationale and generated-item check |
|---|---|---|
| `ex-complete-and-empty-pairs-are-zero-regular` | AA / AG | Direct, exhaustive density computation; explain the limiting `0`-regular wording. |
| `cex-half-graph-pairs-have-macroscopic-irregularity` | LD / AA | Zhao Remark/Exercise 2.1.24; retain an explicit epsilon and rounding estimate. |
| `ex-slicing-a-regular-pair-with-explicit-parameters` | AG / AG | Generated numerical substitution; leaf and mechanically checkable. |
| `ex-energy-of-trivial-and-discrete-partitions` | AA / AG | Generated computation; check ordered-pair normalization and the null graph. |
| `ex-triangle-counting-in-a-complete-tripartite-graph` | AA / AG | Standard zero-error example; direct count. |
| `ex-induced-path-counting-from-three-pure-pairs` | AG / AG | Generated pure-template example; verify every transversal triple and label. |
| `cex-positive-pair-densities-alone-do-not-force-a-triangle` | AG / AG | Generated parity construction; exhaustive bit contradiction discharges truth risk. |
| `cex-edge-deletion-alone-cannot-prove-induced-removal` | LD / AA | Zhao Remark 2.8.2 / Conlon–Fox introduction; verify uniqueness of the independent triple for `n>=3`. |

## Declines expected to be challenged

1. The tower lower bound for ordinary regularity and the wowzer lower bound for strong regularity are declined. Both harvested sources point to separate multiscale lower-bound papers/constructions and do not prove them in the read range. This page proves honest upper bounds sufficient for every theorem it uses; importing necessity would be a distinct quantitative project.
2. Chudnovsky's Strong Perfect Graph Theorem, perfect-graph square-root bound, and perfect-induced-subgraph reformulation are declined/deferred. They require the perfect-graph branch scheduled later at `cographs-perfect-patterns-and-pure-pairs`, not a missing local lemma.
3. Chernikov's order property and stable-graph theorem are declined because they require model-theoretic stability, a whole subject area absent from the declared prerequisites and from this 25-pair combinatorics schedule.
4. The classical and log-log EH lower bounds are deferred to the already scheduled `classical-and-loglog-erdos-hajnal-bounds`; no part of those bounds is silently claimed here.
5. Zhao's graphon proof of counting is declined as an alternate proof only. The finite greedy counting proof is fully scaffolded, so no result is lost.

The induced removal lemma is **not** deferred. Its missing machinery—strong regularity, energy approximation, self-regular subsets, representative selection, and induced counting—is built on page 399.

## Proof-authoring warnings for step 5

- The regularity theorem title and Statement must reproduce the recurrence actually proved. Do not replace it with a cleaner asymptotic stronger than the proof.
- The representative-subset theorem is the highest-risk proof. Cross-pair selection alone is insufficient: the `i=j` self-pairs must be supplied by `thm-large-self-regular-subset` plus slicing/robustness, because the induced-removal part map may repeat indices.
- In energy approximation, prove the conditional-expectation/Pythagorean identity before invoking Markov. Energy monotonicity alone does not imply pointwise density closeness.
- In induced counting with overlapping host sets, subtract collisions or work with disjoint replicas and then recover injective maps. Do not call a homomorphism an induced embedding.
- In the deletion-only counterexample, require `n>=3`; the selected triple remains independent after every deletion, so deletion cannot destroy that induced copy.
- In the random EH obstruction, the counted bad objects are `k`-vertex subsets, not ordered tuples. The factor `2` is for clique versus stable set, and the first moment must be strictly below one.

## Context checkpoint (60% checkpoint)

- **Owned artifacts:** the page manifest and coverage harvest are written; this notes ledger now records sources, provenance, conventions, dependencies, summaries, and the no-split decision. The proof-contract file is the remaining owned artifact.
- **Current substage:** item graph locked at 11/8 and 25/8 items; all 29 published dependencies have been opened on disk; cross-pair dependency isolation has been checked by a local closure script.
- **Checks completed:** `coverage-checklist.mjs` is green at 2 pages / 92 harvested rows / 0 errors / 0 warnings; JSON parse and duplicate-id checks are green; every current dependency resolves within its page's declared requires closure.
- **Open mathematical question:** none blocking. The highest-risk obligation is the self-pair part of representative selection, for which the scaffold now mandates self-regular extraction before the probabilistic choice.
- **Exact next action:** create `research/frontier-13-batch-4.proof-contracts.json` for every proof-bearing item, then run the individual manifest, coverage, policy, contract-shape, and live-plan gates without invoking `tools/gates.mjs`.

## Final verification after checkpoint

The proof-contract artifact is complete. A final source-range audit added Zhao's Remark 2.1.16, bringing the canonical-coverage harvest to 93 rows (61 included, 19 inline, 1 already published, 5 deferred, and 7 out of scope). The individual coverage and manifest-policy checks, proof-contract shape check, dependency-isolation check, and live `validate-plan.mjs` check are green; the historical 60% checkpoint above records the earlier 92-row state accurately.

## 2026-08-15 — Step 3 → 4 scaffold repair (F4.1–F4.4)

This repair changed only the four batch-4 artifacts and only the adjudicated findings.

- **F4.1:** Extended the Chudnovsky reading range through PDF p. 3 and added `thm-complete-graph-free-classes-are-erdos-hajnal`, `thm-p3-free-graphs-have-square-root-homogeneous-sets`, and `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property`. Their statement/proof provenances are `literature-derived` / `ai-altered`: the source states the positive instances, while the local proof plans expand them through the already-published Ramsey, connectivity, square-root, real-power, and complement interfaces. The order-395 A page consequently moves from 11 to 14 items, below the 60-item ceiling. Every newly read heading through the four prime five-vertex graphs now has a coverage disposition.
- **F4.2:** Deleted the two authored-summary drafts for the order-396 and order-400 B pages. The two A-page summary drafts remain unchanged.
- **F4.3:** Changed the regularity-bounds remark to say “tower upper bounds” and “wowzer upper bounds.” Extended the Zhao locator through all of §2.1 and added dispositions for Exercises 2.1.22–2.1.25; Exercise 2.1.24 points to the existing half-graph counterexample. Coverage now contains 107 rows: 61 included, 20 inline, 1 already published, 12 deferred, and 7 out of scope.
- **F4.4:** Populated every proof-bearing contract. The artifact now has 46 contracts and 146 citations, with 0 empty arrays. Published facts quote exact disk-checked Definition/Statement clauses; earlier pair-local facts bind the exact scaffold clause, and every citation names the derivation step that uses it.

Final item counts are 14 / 8 / 25 / 8 for orders 395 / 396 / 399 / 400.

The required commands all exited 0. Their exact summary/status output was:

```text
$ node tools/validate-plan.mjs research/plan-spec.json
plan: 1176 pages (583 A + 583 B + 5 already published), 3879 new items, 4866 existing ids available
item lists written for 244/1171 planned pages — the rest are validated at PAGE level only
3878/3879 planned items already authored into items/
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 244 page(s) with item lists.
NOTE: 927 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.

$ node tools/coverage-checklist.mjs research/frontier-13-batch-4.coverage.json
coverage-checklist: 2 page(s), 107 harvested result(s), 0 error(s), 0 warning(s)

$ node tools/content-policy.mjs research/frontier-13-batch-4.pages.json --manifest-only
content-policy: 55 scoped item(s), 0 error(s), 0 warning(s)
```

The live plan validator also printed its repository-wide reading-order table and existing `redundant-prereq` warnings before the quoted closing status.

The batch-wide dependency audit resolved each published dependency to its library home and checked that home against the source page's transitive declared `requires` closure. Its exact counts were:

```text
dependency-closure audit: 55 item(s), 4 page(s)
unresolved_ids: 0
out_of_closure_published_deps: 0
cross_pair_edges: 0
b_leaf_deps: 0
duplicate_ids: 0
unpublished_deps: 0
published_home_unresolved: 0
local_forward_edges: 0
multiple_published_homes: 0
```

The separate citation-integrity check reported `proof-contract audit: 46 contract(s), 146 citation(s), 0 error(s)`. No blocker remains.

## 2026-08-15 — Step 3 → 4 scaffold repair, second pass (F4.5)

Added the published dependency `lem-forbidden-induced-subgraph-classes-are-hereditary` to the three new order-395 items `thm-complete-graph-free-classes-are-erdos-hajnal`, `thm-p3-free-graphs-have-square-root-homogeneous-sets`, and `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property`. The same dependency was added to the order-396 example `ex-a-forbidden-pattern-and-its-complement-share-eh-status`, because that B-page item applies the hereditary-class complement-invariance theorem to the class of $P_3$-free graphs. In every case the lemma discharges the hereditary hypothesis required by `def-erdos-hajnal-property-and-constant` or by `prop-erdos-hajnal-property-is-complement-invariant`.

Each corresponding proof contract now quotes the lemma's exact published Statement — “For every family $\mathcal F$ of finite graphs, the class of all $\mathcal F$-free finite graphs is hereditary.” — and cites it at step `1.1`: as `L10`, `L11`, `L6`, and `L4`, respectively. No item was added or removed, no coverage disposition changed, and the page counts remain 14 / 8 / 25 / 8 for orders 395 / 396 / 399 / 400.

The three required gates exited 0. `validate-plan.mjs` printed the repository-wide reading-order table and existing `redundant-prereq` warnings before this exact summary/status output:

```text
$ node tools/validate-plan.mjs research/plan-spec.json
plan: 1176 pages (583 A + 583 B + 5 already published), 3879 new items, 4866 existing ids available
item lists written for 244/1171 planned pages — the rest are validated at PAGE level only
3878/3879 planned items already authored into items/
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 244 page(s) with item lists.
NOTE: 927 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.

$ node tools/coverage-checklist.mjs research/frontier-13-batch-4.coverage.json
coverage-checklist: 2 page(s), 107 harvested result(s), 0 error(s), 0 warning(s)

$ node tools/content-policy.mjs research/frontier-13-batch-4.pages.json --manifest-only
content-policy: 55 scoped item(s), 0 error(s), 0 warning(s)
```

The home-page-aware dependency-closure audit exited 0 with:

```text
dependency-closure audit: 55 item(s), 4 page(s), 76 published dep(s) checked
unresolved_ids: 0
out_of_closure_published_deps: 0
cross_pair_edges: 0
b_leaf_deps: 0
duplicate_ids: 0
unpublished_deps: 0
published_home_unresolved: 0
local_forward_edges: 0
multiple_published_homes: 0
```

No blocker remains.

## 2026-08-15 — Step 3 → 4 scaffold repair, third pass (F4.6–F4.7)

- **F4.6:** Corrected the title to “Every hereditary graph class of bounded order has the Erdős–Hajnal property.” The strategy now begins with a hereditary class $\mathcal C$ whose members have order at most $N$, and the proof-contract claim mirrors that hypothesis. This removes the false application to bounded-order classes such as $\{K_2\}$ without changing the item id, dependencies, provenance disposition, or coverage.
- **F4.7:** Added `def-erdos-hajnal-property-and-constant` and `def-h-free-and-family-free-graph` to the dependencies of `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property`. Its proof contract cites them as `L7` and `L8`, respectively, both at step `1.1`; `L8` quotes the exact published Definition, while `L7` uses the exact earlier scaffold clause for the pair-local definition. The contract total moves from 150 to 152 citations, with no empty citation arrays.

No item or coverage row was added, removed, or reclassified. Orders 399/400 were not changed. Item counts remain 14 / 8 / 25 / 8 for orders 395 / 396 / 399 / 400.

The three required gates exited 0. `validate-plan.mjs` printed its repository-wide reading-order table and existing `redundant-prereq` warnings before this exact closing status:

```text
$ node tools/validate-plan.mjs research/plan-spec.json
plan: 1176 pages (583 A + 583 B + 5 already published), 3879 new items, 4866 existing ids available
item lists written for 244/1171 planned pages — the rest are validated at PAGE level only
3878/3879 planned items already authored into items/
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 244 page(s) with item lists.
NOTE: 927 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.

$ node tools/coverage-checklist.mjs research/frontier-13-batch-4.coverage.json
coverage-checklist: 2 page(s), 107 harvested result(s), 0 error(s), 0 warning(s)

$ node tools/content-policy.mjs research/frontier-13-batch-4.pages.json --manifest-only
content-policy: 55 scoped item(s), 0 error(s), 0 warning(s)
```

The home-page-aware dependency-closure audit exited 0 with:

```text
dependency-closure audit: 55 item(s), 4 page(s), 77 published dep(s) checked
unresolved_ids: 0
out_of_closure_published_deps: 0
cross_pair_edges: 0
b_leaf_deps: 0
duplicate_ids: 0
unpublished_deps: 0
published_home_unresolved: 0
local_forward_edges: 0
multiple_published_homes: 0
```

The separate citation-integrity check reported `proof-contract audit: 46 contract(s), 152 citation(s), 0 empty citation array(s)`. No blocker remains.

## 2026-08-15 — Step 5 authoring report

All 55 spliced ids are authored with `status: draft` and `origin: session`, and none carries `verification.audited`. The authored distribution is 14 items on `erdos-hajnal-property-and-homogeneous-sets`, 8 on its examples page, 25 on `regular-pairs-and-induced-counting`, and 8 on its examples page. The two A-page bodies reproduce the splice receipt's replacement prose exactly; the two B-page bodies contain no authored summary. The item ids and page assignments are enumerated in `research/frontier-13-batch-4.pages.json`.

The Erdős–Hajnal definition's complete defining paragraph replaces the scaffold title-placeholder in all 10 proof-contract citations. Those citations have one exact quote and 18 declared step uses. The 46 authored contracts now contain 191 derivation rows, between 2 and 7 per proof, and no one-step contract. The bounded-order example states the hereditary hypothesis in its title and uses it in the proof. The three positive Erdős–Hajnal arguments retain Alpha's approved constants and boundary cases. On the regularity side, the authored chain supplies the quantitative regularity, counting, strong-regularity, representative-subset, and induced-removal steps; the unused dependency from `lem-energy-boost-for-an-irregular-pair` was removed from both the item and page manifest rather than cited artificially.

Component provenance on disk is 42 `literature-derived` and 13 `ai-altered` statements; proofs are 25 `ai-altered`, 21 `ai-generated`, and 9 `not-applicable`. Literature-derived statements are faithful local restatements of the Zhao, Conlon–Fox, Chudnovsky, and Chernikov results recorded in the canonical source ledger. Altered proofs expand those sources' strategies into the library's notation and close omitted finite, null, diagonal, injectivity, and parameter cases. Generated proofs are elementary definition consequences, examples, counterexamples, or explicit finite computations; they do not supply source authority for an invented load-bearing statement. `not-applicable` is reserved for definitions and remarks. The false statement on the examples page is a leaf, is refuted from the sourced all-graphs counterexample, and is not a dependency of either A page.

The required gates exited 0. Their closing output, verbatim, was:

```text
$ node tools/tsx-run.mjs tools/precheck.mts
3559 checked, 0 failing — all clean

$ node tools/depcheck.mjs
OK — no cycles, all references resolve, no draft items on published pages.

$ node tools/fwdcheck.mjs
fwdcheck: 4535 items, 0 open forward reference(s), 399 closed, 34 load bearing
OK — every forward reference is declared, points strictly forward, is closed by a planned later page, stays off the spine unless orientation only, and introduces no cycle.

$ node tools/extcheck.mjs
extcheck: 4535 items, 116 recorded-not-proved, 119 resting on them
OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.

$ node tools/rendercheck.mjs
OK — 4805 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's
YAML parser.

$ node tools/prosecheck.mjs
4805 file(s) checked. 0 error(s), 568 warning(s).
  library-scope-denial: 206
  count-in-prose: 189
  count-of-this-page: 173

(re-run with --warnings to list them; warnings are heuristic and have legitimate cases)

OK — no positional claim contradicts the spec.

$ node tools/content-policy.mjs research/frontier-13-batch-4.pages.json
content-policy: 55 scoped item(s), 0 error(s), 0 warning(s)

$ node tools/coverage-checklist.mjs research/frontier-13-batch-4.coverage.json
coverage-checklist: 2 page(s), 107 harvested result(s), 0 error(s), 0 warning(s)
```

The authoring-specific checks also exited 0:

```text
$ jq -r '.[].items[].id | "items/" + . + ".md"' research/frontier-13-batch-4.pages.json | xargs node tools/tsx-run.mjs tools/precheck.mts
46 checked, 0 failing — all clean

$ node tools/proof-contract.mjs research/frontier-13-batch-4.proof-contracts.json --strict
proof-contract: 0 error(s), 0 warning(s), 46/46 item(s) checked

$ jq -r '.[].items[].id | "items/" + . + ".md"' research/frontier-13-batch-4.pages.json | xargs node tools/citecheck.mjs
citecheck: 55 item(s) scanned

OK — every recognised elementary move cites a home that states it.

$ node tools/prosecheck.mjs library/combinatorics/erdos-hajnal-property-and-homogeneous-sets.md library/combinatorics/erdos-hajnal-property-and-homogeneous-sets-examples.md library/combinatorics/regular-pairs-and-induced-counting.md library/combinatorics/regular-pairs-and-induced-counting-examples.md
4 file(s) checked. 0 error(s), 0 warning(s).

OK — no positional claim contradicts the spec.
```

No blocker remains. This is an authoring handoff only; no judgment or audited-verification field was added.
