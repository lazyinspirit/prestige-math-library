# Step 8 — group **d**, run `frontier-26`

You are the group Alpha for batches **8**, **10**, **11**: 5 A/B pair(s), 10 page(s), 104 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-26-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-26-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `star-expansions-and-erdos-hajnal` | A | combinatorics | 417 | `the-five-cycle-and-erdos-hajnal` |
| 8 | `star-expansions-and-erdos-hajnal-examples` | B | combinatorics | 418 | `star-expansions-and-erdos-hajnal` |
| 8 | `iterative-sparsification-and-the-five-vertex-path` | A | combinatorics | 419 | `the-five-cycle-and-erdos-hajnal` |
| 8 | `iterative-sparsification-and-the-five-vertex-path-examples` | B | combinatorics | 420 | `iterative-sparsification-and-the-five-vertex-path` |
| 10 | `regular-expressions-and-kleenes-theorem` | A | computability-theory | 587 | `nondeterministic-finite-automata-and-subset-construction` |
| 10 | `regular-expressions-and-kleenes-theorem-examples` | B | computability-theory | 588 | `regular-expressions-and-kleenes-theorem` |
| 10 | `context-free-pumping-ogden-and-parsing` | A | computability-theory | 595 | `pushdown-automata-and-context-free-languages`, `finite-counting-and-binomial-coefficients` |
| 10 | `context-free-pumping-ogden-and-parsing-examples` | B | computability-theory | 596 | `context-free-pumping-ogden-and-parsing` |
| 11 | `robust-machine-models-and-universal-computation` | A | computability-theory | 599 | `turing-machines-configurations-and-computation` |
| 11 | `robust-machine-models-and-universal-computation-examples` | B | computability-theory | 600 | `robust-machine-models-and-universal-computation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `star-expansions-and-erdos-hajnal` — Star Expansions and the Erdős–Hajnal Property (16 item(s))

- `def-star-expansion-of-a-graph` · definition — The star-expansion of a graph
- `thm-a-wide-coherent-blockade-contains-a-blockade-rainbow-copy-of-a-forest` · theorem — A wide coherent blockade contains a blockade-rainbow copy of a forest
- `cor-few-induced-copies-force-a-linearly-large-induced-subgraph-with-bounded-maximum-degree` · corollary — Few induced copies force a linearly large induced subgraph with bounded maximum degree
- `thm-a-long-blockade-without-a-large-pure-pair-contains-a-rainbow-forest-or-complement` · theorem — A long blockade without a large pure pair contains a rainbow forest or its complement
- `thm-a-long-blockade-yields-a-wide-cograph-pattern-subblockade-or-a-rainbow-forest` · theorem — A long blockade yields a wide cograph-pattern subblockade or a rainbow forest
- `thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property` · theorem — The star-expansion four-family of a forest has the Erdős–Hajnal property
- `cor-the-star-expansion-of-the-four-vertex-path-and-its-complement-have-the-erdos-hajnal-property` · corollary — The star-expansion of the four-vertex path and its complement have the Erdős–Hajnal property
- `lem-the-star-expansion-of-the-four-vertex-path-contains-induced-c-six-and-c-seven` · lemma — The star-expansion of the four-vertex path contains induced six- and seven-cycles
- `cor-the-six-cycle-and-its-complement-have-the-erdos-hajnal-property` · corollary — The six-cycle and its complement have the Erdős–Hajnal property
- `cor-the-seven-cycle-and-its-complement-have-the-erdos-hajnal-property` · corollary — The seven-cycle and its complement have the Erdős–Hajnal property
- `thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property` · theorem — A forest complement and its star-expansion have the Erdős–Hajnal property
- `lem-the-star-expansion-of-a-forest-containing-a-long-path-contains-the-corresponding-cycle` · lemma — A star-expansion of a forest containing a long path contains the corresponding cycle
- `thm-a-cycle-and-a-forest-complement-have-the-erdos-hajnal-property` · theorem — A cycle and a forest complement have the Erdős–Hajnal property
- `lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components` · lemma — A hatted-five-cycle-free rooted stable-tooth comb yields a large pure blockade of components
- `lem-the-star-expansion-of-k-three-contains-the-hatted-five-cycle` · lemma — The star-expansion of $K_3$ contains the hatted five-cycle
- `thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property` · theorem — The hatted five-cycle and its complement have the Erdős–Hajnal property

### `star-expansions-and-erdos-hajnal-examples` — Star Expansions and the Erdős–Hajnal Property — Examples (5 item(s))

- `ex-the-star-expansion-of-the-four-vertex-path` · example — The star-expansion of the four-vertex path
- `ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-five-cycle` · example — The star-expansion of the four-vertex path contains an induced five-cycle
- `ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-six-cycle` · example — The star-expansion of the four-vertex path contains an induced six-cycle
- `ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-seven-cycle` · example — The star-expansion of the four-vertex path contains an induced seven-cycle
- `ex-the-star-expansion-of-k-three-contains-the-hatted-five-cycle` · example — The star-expansion of $K_3$ contains the hatted five-cycle

### `iterative-sparsification-and-the-five-vertex-path` — Iterative Sparsification and the Five-Vertex Path (22 item(s))

- `def-nice-graph` · definition — A nice graph
- `lem-small-anticonnected-components-yield-a-complete-blockade` · lemma — Small anticonnected components yield a complete blockade
- `lem-a-dense-bipartite-side-has-a-small-hitting-set` · lemma — A dense bipartite side has a small hitting set
- `lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade` · lemma — A sparse $P_5$-free graph has an anticomplete two-blockade
- `lem-a-sparse-co-p-five-free-graph-has-a-large-nearly-covered-sparse-pair` · lemma — A sparse $\overline{P_5}$-free graph has a large nearly covered sparse pair
- `lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade` · lemma — Anticonnected block contraction turns an upside-down comb into a pure blockade
- `lem-a-sparse-co-p-five-free-graph-either-sparsifies-further-or-yields-a-pure-blockade-or-a-large-sparse-pair` · lemma — A sparse $\overline{P_5}$-free graph either sparsifies further or yields a pure blockade or a large sparse pair
- `lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade` · lemma — An $x$-sparse blockade iteration yields further sparsification or a pure blockade
- `lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs` · lemma — An iterative sparsification step for sparse $\overline{P_5}$-free graphs
- `thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade` · theorem — $\overline{P_5}$-free graphs admit a pure or $x$-sparse polynomial blockade
- `lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks` · lemma — A maximal layout has at most $\epsilon^{-1}$ blocks
- `lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse` · lemma — Refining the largest layout block forces local blockade length at least $\epsilon^{-1}$
- `thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade` · theorem — Local pure or $x$-sparse blockades yield a nice blockade
- `thm-the-five-vertex-path-is-nice` · theorem — The five-vertex path is nice
- `lem-a-semisparse-blockade-can-be-sampled-to-anticonnected-blocks-with-nearly-pure-relations` · lemma — A semisparse blockade can be sampled to anticonnected blocks with nearly pure relations
- `lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade` · lemma — No vertex is mixed on many blocks of a semisparse blockade
- `lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set` · lemma — A sparse $\overline{P_5}$-free graph yields deeper sparsification or a complete blockade or a large anticomplete set
- `lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph` · lemma — A sparse $\overline{P_5}$-free graph yields a complete or anticomplete blockade or a sparser subgraph
- `lem-the-minimal-sparsity-parameter-drops-below-the-target` · lemma — The minimal sparsity parameter drops below the target
- `thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade` · theorem — $\overline{P_5}$-free graphs yield a polynomial restricted set or a complete or anticomplete blockade
- `thm-the-five-vertex-path-has-the-polynomial-rodl-property` · theorem — The five-vertex path has the polynomial Rödl property
- `cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property` · corollary — The five-vertex path and its complement have the Erdős–Hajnal property

### `iterative-sparsification-and-the-five-vertex-path-examples` — Iterative Sparsification and the Five-Vertex Path — Examples (4 item(s))

- `ex-two-large-anticonnected-components-give-a-complete-two-blockade` · example — Two large anticonnected components give a complete two-blockade
- `ex-a-sparse-p-five-free-graph-with-an-anticomplete-two-blockade` · example — A sparse $P_5$-free graph with an anticomplete two-blockade
- `ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five` · example — An upside-down comb with anticonnected blocks creates a co-$P_5$
- `ex-a-layout-with-a-single-wrong-decided-pair` · example — A layout with a single wrong decided pair

### `regular-expressions-and-kleenes-theorem` — Regular Expressions and Kleene's Theorem (16 item(s))

- `def-regular-expression-syntax` · definition — Regular expression syntax over an alphabet
- `def-regular-expression-denotation` · definition — The language denoted by a regular expression
- `lem-denotation-is-structurally-well-defined` · lemma — Regular-expression denotation is structurally well-defined
- `thm-regular-expression-to-epsilon-nfa` · theorem — Every regular expression has an equivalent epsilon-NFA
- `def-generalized-nfa` · definition — Generalized NFA's and their accepted languages
- `def-gnfa-state-elimination` · definition — The GNFA state-elimination update
- `lem-state-elimination-preserves-path-language` · lemma — State elimination preserves the language between every surviving state pair
- `thm-dfa-to-regular-expression` · theorem — Every DFA language is denoted by a regular expression
- `thm-kleenes-theorem` · theorem — A language is regular if and only if some regular expression denotes it
- `thm-closure-under-homomorphic-image` · theorem — Regular languages are closed under homomorphic image
- `thm-closure-under-inverse-homomorphism` · theorem — Regular languages are closed under inverse homomorphism
- `thm-closure-under-left-and-right-quotient` · theorem — Regular languages are closed under left and right quotient with regular languages
- `def-regular-language-decision-problems` · definition — Membership, emptiness, finiteness, equivalence, and containment for regular languages
- `thm-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable` · theorem — DFA membership, emptiness, finiteness, equivalence, and containment are decidable
- `fs-regular-expression-syntax-is-its-denoted-language` · false-statement — FALSE: a regular expression is the same object as its denoted language
- `fs-state-elimination-has-a-unique-output-expression` · false-statement — FALSE: state elimination has a unique output expression

### `regular-expressions-and-kleenes-theorem-examples` — Regular Expressions and Kleene's Theorem: Examples and Counterexamples (3 item(s))

- `ex-regular-expression-to-epsilon-nfa` · example — Constructing an epsilon-NFA for $(a+b)^{*}abb$
- `ex-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable` · example — Running the basic regular-language decision procedures on small DFA's
- `cex-regular-expression-syntax-is-its-denoted-language` · counterexample — The expression $a+b$ is not literally the set $\{a,b\}$

### `context-free-pumping-ogden-and-parsing` — Context-Free Pumping, Ogden's Lemma, and Parsing (16 item(s))

- `lem-height-and-yield-bound-for-cnf-trees` · lemma — A Chomsky-normal-form parse tree of height $h$ has yield length at most $2^{h-1}$
- `thm-pumping-lemma-for-context-free-languages` · theorem — The pumping lemma for context-free languages
- `def-marked-position-decomposition` · definition — Marked positions and admissible Ogden decompositions
- `thm-ogdens-lemma` · theorem — Ogden's lemma
- `thm-cfls-are-not-closed-under-intersection` · theorem — Context-free languages are not closed under intersection
- `cor-cfls-are-not-closed-under-complement` · corollary — Context-free languages are not closed under complement
- `thm-cfls-are-closed-under-reversal` · theorem — Context-free languages are closed under reversal
- `def-cyk-table-and-span-variable` · definition — The CYK parsing table and span variables
- `lem-cyk-table-invariant` · lemma — A variable lies in a CYK table cell exactly when it derives that span
- `thm-cyk-membership-algorithm` · theorem — The CYK algorithm decides membership for CNF grammars
- `cor-cfl-membership-is-decidable` · corollary — Context-free-language membership is decidable
- `thm-cfg-emptiness-and-finiteness-are-decidable` · theorem — CFG emptiness and finiteness are decidable
- `def-cfg-equivalence-and-ambiguity-problems` · definition — The CFG equivalence and ambiguity problems
- `fs-the-cfl-pumping-lemma-characterizes-cfls` · false-statement — FALSE: the context-free pumping lemma characterizes the context-free languages
- `fs-cyk-needs-no-normal-form-preprocessing` · false-statement — FALSE: CYK needs no normal-form preprocessing
- `fs-cfg-equivalence-is-decidable-by-normalization` · false-statement — FALSE: CFG equivalence is decidable by normalization

### `context-free-pumping-ogden-and-parsing-examples` — Context-Free Pumping, Ogden's Lemma, and Parsing: Examples and Counterexamples (3 item(s))

- `ex-pumping-lemma-for-context-free-languages` · example — Using the CFL pumping lemma to rule out $\{a^{n}b^{n}c^{n}:n\ge 0\}$
- `ex-cfg-emptiness-and-finiteness-are-decidable` · example — Running the emptiness and finiteness tests on small grammars
- `cex-the-cfl-pumping-lemma-characterizes-cfls` · counterexample — A non-context-free language can still satisfy the Bar-Hillel pumping condition

### `robust-machine-models-and-universal-computation` — Robust Machine Models and Universal Computation (16 item(s))

- `def-effective-encoding-of-turing-machines` · definition — A fixed effective binary encoding of deterministic one-tape Turing machines
- `lem-machine-encoding-is-injective-and-decodable` · lemma — The chosen machine coding is injective and has a total decoder
- `thm-stay-put-moves-can-be-eliminated` · theorem — Stay-put moves can be eliminated from fixed-tape Turing-machine models
- `thm-one-way-and-two-way-tapes-are-equivalent` · theorem — One-way and two-way infinite tape conventions are equivalent
- `thm-multitape-machines-have-one-tape-simulations` · theorem — Every fixed multitape Turing machine has an equivalent one-tape simulation
- `lem-multitape-simulation-has-quadratic-time-overhead` · lemma — The standard one-tape simulation of a fixed multitape machine has quadratic overhead
- `thm-nondeterministic-and-deterministic-recognizability-agree` · theorem — Deterministic and nondeterministic Turing machines recognize the same languages
- `def-random-access-and-register-machine-programs` · definition — Register programs and RAM programs with unbounded natural-number memory
- `thm-ram-register-and-turing-computability-agree` · theorem — RAM/register computation and Turing computation agree
- `def-universal-turing-machine` · definition — A universal Turing machine relative to a fixed machine encoding
- `lem-step-by-step-interpreter-for-machine-codes` · lemma — A fixed interpreter can execute one encoded machine step
- `thm-existence-of-a-universal-turing-machine` · theorem — A universal Turing machine exists for the chosen coding
- `cor-effective-enumeration-of-turing-machines` · corollary — Turing machines admit an effective enumeration
- `def-church-turing-thesis` · definition — The Church-Turing thesis
- `rem-model-equivalence-supports-but-does-not-prove-the-thesis` · remark — Model-equivalence theorems support but do not prove the Church-Turing thesis
- `fs-universality-decides-halting` · false-statement — FALSE: universality decides halting

### `robust-machine-models-and-universal-computation-examples` — Robust Machine Models and Universal Computation: Examples and Counterexamples (3 item(s))

- `ex-stay-put-moves-can-be-eliminated` · example — Replacing a stay-put transition by a right-left macro
- `ex-effective-enumeration-of-turing-machines` · example — Listing the first few well-formed machine codes in shortlex order
- `cex-universality-decides-halting` · counterexample — A universal machine diverges on a looping machine/input pair

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-26-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-26`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
