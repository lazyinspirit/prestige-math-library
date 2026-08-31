# Step 8 — group d adjudication

Run: `frontier-26`  
Batches: `8`, `10`, `11`  
Owned rejections: 72 exact `(id, model, context_sha256)` tuples

## Outcome summary

- `confirmed_fatal`: 40
- `confirmed_nonfatal`: 21
- `false_positive`: 11
- repaired fatal items: 40
- incoming or outgoing cross-group alerts: 0

Every exact outcome was appended to
`research/frontier-26-judge-adjudications.jsonl` with its pre-edit guard-form
`item_sha256`. Matching defect rows `frontier-26-S8-d-001` through
`frontier-26-S8-d-040` were appended through the defect-ledger interface.
A concurrent append also recorded 24 duplicate fatal outcomes against already
repaired bytes. Because both shared ledgers are append-only, the duplicate
outcomes were retained and linked by 24 namespaced mirror rows with
`recurrence_of` pointing to the original group-d defect rows; no additional
content edit was made for those duplicate records.

## Confirmed fatal repairs

| item | repair |
|---|---|
| `cex-the-cfl-pumping-lemma-characterizes-cfls` | Replaced the unnamed batch-trail assertions by an exact statement of the cited classical Wise example and its two required properties. |
| `fs-cfg-equivalence-is-decidable-by-normalization` | Named the exact undecidability statement in the cited university lecture. |
| `fs-the-cfl-pumping-lemma-characterizes-cfls` | Replaced the unnamed source-trail assertion by the exact Wise-example result recorded by the cited source. |
| `def-nice-graph` | Replaced the nonintegral blockade length parameter by `ceil(epsilon^-1)`. |
| `ex-a-layout-with-a-single-wrong-decided-pair` | Defined layout, decided pair, predicted adjacency, and wrong pair locally before using them. |
| `lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks` | Restated the counterexample setting and used the exact conclusion of source Claim 6.1.1. |
| `lem-a-sparse-co-p-five-free-graph-either-sparsifies-further-or-yields-a-pure-blockade-or-a-large-sparse-pair` | Required the blockade length witness `k` to be an integer. |
| `lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph` | Replaced the unverified induced-subgraph normalization by the fully quantified source Lemma 7.2 argument. |
| `lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set` | Restored the complete-blockade branch omitted from fact `[L1]`. |
| `lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade` | Removed the false largest-component inference and translated the source's repeated large-component proof. |
| `lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs` | Corrected `[L1]` to the actual sparser-last-block or pure-blockade conclusion. |
| `lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade` | Removed the reversed sparse orientation and used the correctly oriented source Lemma 5.3 extension. |
| `lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade` | Restored the order, integer, size, length, and width hypotheses omitted from `[L1]`. |
| `lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade` | Defined vertex-on-block mixedness through the published mixed-pair definition and added that dependency. |
| `lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse` | Removed the misuse of the existence theorem and used the exact substitution conclusion of source Claim 6.1.2. |
| `lem-small-anticonnected-components-yield-a-complete-blockade` | Replaced arbitrary consecutive greedy packing by a minimum ordered partition, which proves the claimed width. |
| `lem-the-minimal-sparsity-parameter-drops-below-the-target` | Replaced the unverified application to a merely `y`-sparse graph by the fully quantified source Claim 7.3.1. |
| `thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade` | Required `k` to be an integer. |
| `thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade` | Replaced the uncited blockade branch by the exact source Lemma 7.3 alternative. |
| `thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade` | Restored integral length parameters and translated source Theorem 6.1, including its missing layout size condition. |
| `thm-the-five-vertex-path-has-the-polynomial-rodl-property` | Applied the blockade alternative to every sufficiently large induced subgraph before invoking the published local-to-global theorem. |
| `def-generalized-nfa` | Made the no-incoming-to-start and no-outgoing-from-accept conditions actual requirements on `lambda`. |
| `fs-state-elimination-has-a-unique-output-expression` | Recomputed both elimination orders without silently simplifying formal expressions. |
| `thm-regular-expression-to-epsilon-nfa` | Specified the accepting set in every inductive gadget and made the first machine's accept state nonaccepting in concatenation. |
| `def-church-turing-thesis` | Required finite encodings of both domain and codomain in the formal paraphrase. |
| `def-effective-encoding-of-turing-machines` | Defined one explicit unary-arity, self-delimiting encoder valid across all description lengths. |
| `def-universal-turing-machine` | Required the universal machine's input alphabet to be binary. |
| `ex-effective-enumeration-of-turing-machines` | Bound the shortlex claim to the new explicit encoder and proved the first three codes from its header and field order. |
| `lem-machine-encoding-is-injective-and-decodable` | Used the global arity parser, checked canonical binary numerals, and established cross-arity injectivity. |
| `lem-step-by-step-interpreter-for-machine-codes` | Defined the binary pair encoding parsed by the interpreter. |
| `thm-existence-of-a-universal-turing-machine` | Detects halting from the represented state rather than equality of consecutive configuration codes. |
| `thm-multitape-machines-have-one-tape-simulations` | Added finite input initialization and final output decoding around the marked-block simulation. |
| `thm-one-way-and-two-way-tapes-are-equivalent` | Added finite folding of the ordinary input and unfolding of the halting output. |
| `thm-ram-register-and-turing-computability-agree` | Defined recognition and partial-function computation for RAM/register programs before comparing models. |
| `thm-stay-put-moves-can-be-eliminated` | Added finite even-cell preprocessing and output compaction before entering a halting state. |
| `def-star-expansion-of-a-graph` | Added and cited the actual graph-isomorphism dependency. |
| `ex-the-star-expansion-of-the-four-vertex-path` | Corrected `[L1]`: each tooth is adjacent to both its matched base vertex and the root. |
| `thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property` | Replaced the invalid appeal to the four-family theorem by an exact translation of primary-source Theorem 7.2. |
| `thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property` | Restored the quantitative component-width and stable-pattern bounds from primary-source Theorem 8.1. |
| `thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property` | Restored the source's parameter order and the missing width inequality needed for the criticality contradiction. |

## Confirmed nonfatal

These objections concern elementary consequences, transitive citations, or
local proof generalizations a competent reader closes immediately. Under the
fatal-only rule, no item in this table was edited.

| item | rationale |
|---|---|
| `cex-regular-expression-syntax-is-its-denoted-language` | Syntax and denotation are immediate from the preceding false-statement item and its direct dependencies. |
| `cex-universality-decides-halting` | The universality clause is transitively cited and repeated in the counterexample statement. |
| `cor-cfls-are-not-closed-under-complement` | Choosing the same-alphabet witnesses from the preceding intersection theorem closes the De Morgan argument immediately. |
| `cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property` | Complementing every graph preserves cliques, stable sets, and restrictedness by an elementary involution. |
| `def-gnfa-state-elimination` | Closure of regular-expression syntax under the displayed constructors is the immediately preceding syntax definition. |
| `ex-regular-expression-to-epsilon-nfa` | An ordinary NFA is immediately an epsilon-NFA with empty epsilon-transition sets. |
| `ex-stay-put-moves-can-be-eliminated` | The displayed macro is a local transition replacement; completing irrelevant transitions is immediate. |
| `ex-the-star-expansion-of-k-three-contains-the-hatted-five-cycle` | The existential six-vertex witness supplied by `[L1]` is the “chosen” subgraph in the next step. |
| `fs-universality-decides-halting` | The displayed transition tuple directly gives the perpetual run; only a direct dynamics tag is omitted. |
| `lem-a-dense-bipartite-side-has-a-small-hitting-set` | The avoidance estimate, linearity of expectation, and probabilistic existence are elementary finite calculations already stated in `[L1]`. |
| `lem-cyk-table-invariant` | The terminal-span base converse follows immediately from the CNF forms inherited through the CYK definition. |
| `lem-height-and-yield-bound-for-cnf-trees` | Generalizing the induction predicate from start-rooted trees to variable-rooted subtrees is immediate. |
| `lem-state-elimination-preserves-path-language` | The denotation clauses are a transitive dependency and immediately interpret the syntactic update. |
| `thm-closure-under-homomorphic-image` | Structural substitution is defined recursively on the already fixed free syntax tree. |
| `thm-closure-under-inverse-homomorphism` | Existence of the standard extended transition is the immediately following published theorem. |
| `thm-cyk-membership-algorithm` | The exceptional epsilon rule is part of the inherited CNF definition. |
| `thm-dfa-to-regular-expression` | The DFA run/labelled-path correspondence and finite-union denotation are immediate inductions. |
| `thm-nondeterministic-and-deterministic-recognizability-agree` | Nondeterministic recognition is fixed by the existential accepting-branch definition used in `[L1]`. |
| `thm-ogdens-lemma` | Replacing the intermediate `2^|V|` estimate by the already chosen `p=2^(|V|+1)` fixes the one-off count immediately. |
| `thm-pumping-lemma-for-context-free-languages` | Choosing the displayed path globally longest supplies the omitted subtree-height bound immediately. |
| `thm-the-five-vertex-path-is-nice` | The preceding blockade theorem gives the stronger bound `k<=x^-1`; the displayed weaker exponent is a local arithmetic transcription. |

## False positives

| item | rationale |
|---|---|
| `cor-cfl-membership-is-decidable` | The cited CNF theorem's proof is an explicit finite construction, so conversion is effective. |
| `cor-few-induced-copies-force-a-linearly-large-induced-subgraph-with-bounded-maximum-degree` | “Restricted” is defined to mean that the graph or its complement is sparse; step 1.1 merely unpacks that definition. |
| `def-cyk-table-and-span-variable` | The local declaration `w=a_1...a_n` explicitly introduces a one-based presentation; it does not claim to reuse the dependency's symbols. |
| `def-marked-position-decomposition` | The local declaration likewise explicitly reindexes the displayed word from one through `n`. |
| `def-regular-expression-denotation` | Structural recursion on a finite freely generated syntax tree is a valid recursive definition, and the next lemma proves uniqueness. |
| `ex-cfg-emptiness-and-finiteness-are-decidable` | The cited theorem's proof explicitly supplies the generating-variable and dependency-graph tests. |
| `lem-multitape-simulation-has-quadratic-time-overhead` | The cited simulator theorem's proof defines the marked blocks, sweeps, and shifts used by `[L1]`. |
| `thm-a-long-blockade-without-a-large-pure-pair-contains-a-rainbow-forest-or-complement` | The proof explicitly invokes primary-source Theorem 6.6, whose exact constants and conclusion match the statement. |
| `thm-cfg-emptiness-and-finiteness-are-decidable` | The cited normalization theorems give explicit finite transformations, not bare nonconstructive existence. |
| `thm-cfls-are-closed-under-reversal` | `[L1]` states only the relevant production-shape clause and does not deny the other CFG data. |
| `thm-closure-under-left-and-right-quotient` | The cited product theorem's proof gives the exact product state set and transition used from arbitrary starting pairs. |

## Sources checked

- Nguyen, Scott, and Seymour, [Induced subgraph density. VII. The five-vertex path](https://arxiv.org/html/2312.15333v2): Lemmas 4.1, 4.4, 5.2–5.5, Theorem 6.1 and Claims 6.1.1–6.1.2, Claims 7.1.1–7.1.2, and Lemmas 7.2–7.3 support the repaired blockade statements, parameter normalizations, and iterative arguments.
- Chudnovsky, Scott, Seymour, and Spirkl, [Erdős-Hajnal for graphs with no 5-hole](https://arxiv.org/html/2102.04994v1): Theorems 6.6–6.8, 7.2, and 8.1 support the repaired star-expansion and hatted-cycle conclusions and their quantitative width bounds.
- Aho, [Lecture 11: Properties of CFLs](https://www.cs.columbia.edu/~aho/cs3261/Lectures/L11-Properties_of_CFLs.html): explicitly lists CFG language equivalence as undecidable and supplies the same-alphabet complement/intersection argument.
- Wise, [A Strong Pumping Lemma for Context-Free Languages](https://scholarworks.iu.edu/dspace/items/1b886507-5079-4ba7-af17-958f3cf99a1a): the original technical-report record identifies the necessary-and-sufficient pumping result and the classical language not separable by the ordinary pumping lemma; the item’s existing cited discussion identifies the exact pairwise-distinct language and the Ogden argument.

## Rejudge targets

The engine should rejudge exactly the 40 items in the confirmed-fatal table.
No nonfatal or false-positive item was changed.

## Checks run

- Focused precheck: 34 repaired proof-bearing items, all clean; the other six repaired items are definitions.
- Focused render check: all 40 repaired files pass YAML, delimiter, and KaTeX validation.
- Step-8 scope check: four groups, 441 items, zero open rejection, and zero unresolved cross-group alert.
- Defect-ledger validation for `frontier-26`: 311 rows, zero schema errors.
- Defect-ledger exact linkage: every group-d fatal adjudication row, including
  the 24 concurrent duplicates, has a matching exact-hash row; the whole-run
  linkage check passes with zero errors.
- Step-8 guard: all 88 current whole-level changes are licensed by exact
  confirmed-fatal pre-edit hashes or terminal resolutions, with zero errors.

## Blockers

None.

## Step-8 preflight repair-integrity round 1

### Assigned gate residue

- `proof-contract`: regenerated the citations and derivations of all 86
  parseable proof-bearing entries in owned batches 8, 10, and 11, preserving
  boundaries, finite smoke, and existing risk reviews. Three batch-8 examples
  have no labelled facts and were correctly left unchanged by the generator.
- `citation-fidelity`: the regenerated group-d contracts now report 157
  checked citations, zero quote mismatches, and zero widening candidates.
- `risk-report`: added the required complete review for
  `lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade`; the focused
  reviewed-risk check now passes.

### Licensed completion edits

The contract parser interpreted source labels such as “Theorem 7.2” inside a
numbered proof step as references to nonexistent proof steps. Nine already
licensed fatal repairs were completed by replacing those in-step source
numbers with unambiguous phrases such as “the cited source theorem.” In
`lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse`,
the same completion also removed an unused old fact and renumbered the actual
source claim from `L2` to `L1`.

| item | rejection context | pre-edit guard hash |
|---|---|---|
| `lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade` | `3de2918b3e998a20878c3bb70084da22f580eeb407fa10466280e6fa30984d15` | `20ec0e5fbb9ec088b98e9efc0221ac96dfb0940669eec1166c827182c8bd4a8b` |
| `lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade` | `3cc207430e98d34bb92d7c8809468e59a903ff748af9c17deee1d2c01d151821` | `c59d724f01cd07197c70e14c3a6acb8e7c486c45eb9d7120d7187bfe442593ba` |
| `thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property` | `158992981079492befda974f415c24fabdfa0fca23ea233384fe6d812af162a7` | `ca525c4dbae79c1ff40b65ecd2d288c05da48bf3c3554e004da0ada12696d60e` |
| `lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse` | `cc40868a4aaae350ee1dfe7ace01bf91168840c5fe0b06a60b186e9b234c154c` | `0ef4a7721f70e6b7e6523929ac141219e1e7d446273663d5e74b4b5251338f61` |
| `thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade` | `548c9e1f037df0d8298fc8f4d60bbb3677587b7204f85dd68a73ef7d7943f9d0` | `3187c2aef8c1a9aba89916bb5617ee91138eab6167d25de25855c32ecbb85ad1` |
| `thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property` | `b4272304637bfd9b89fc91f7d877ad77e762eb6b8c8643b9f37d1887fc2e482d` | `328bb7e53400c766a9e8eeba78ba50ecacd2042e00d35ef74a49ec208a77f30f` |
| `lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph` | `1392c4b8471503c3ecc3ad91081daf38e39c62d310656d78fc0732d13530076e` | `1394f3713b15cb7bfe262157f61dc454e018cc572bac3283e81e7f9163e4322c` |
| `lem-the-minimal-sparsity-parameter-drops-below-the-target` | `ab8359a2ee78d8da0e77e8a3cedc2a9f8a716ff0862146894e971954aaa376e4` | `a67f6936f3249f3de68e501bc826e79c8d2fe169a9052ac9ff818c8e1fdcd69a` |
| `thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade` | `d130d7f6b25a6cd492551984f494bb71a90d61d3c30b829379e95514a0977720` | `4188c79261ee63e80736c4f8b1e6b0d9f1a2f663e73456b65589041fe802d2c6` |

`live_tuples` was empty, so no new adjudication was created and no judge sweep
was started.

### Changed files

- The nine licensed item files in the table above.
- `research/frontier-26-batch-8.proof-contracts.json`
- `research/frontier-26-batch-10.proof-contracts.json`
- `research/frontier-26-batch-11.proof-contracts.json`
- `research/frontier-26-proof-contracts.json`
- `research/frontier-26-alpha-d-step8-preflight-risk-reviews.json`
- This group report.

### Targeted checks

- Strict proof contract over all 89 owned contract entries: pass, zero errors
  and zero warnings.
- Focused citation fidelity over batches 8, 10, and 11: 157 citations checked,
  zero quote mismatch, widening, or upheld-review residue.
- Focused reviewed risk report: pass for the newly high-risk mixed-block lemma.
- Focused precheck and render check: all nine completion-edited items pass.
- Group content policy: 104 scoped items, zero errors and zero warnings.
- Step-8 scope check: four groups, 441 partitioned items, zero open rejection,
  zero unresolved cross-group alert.
- Step-8 guard: 88 current changes, all licensed, zero errors and zero warnings.

### Blocker

None.
