# Step 8 — group **d**, run `frontier-27`

You are the group Alpha for batches **7**, **9**, **10**: 6 A/B pair(s), 12 page(s), 101 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-27-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-27-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `small-graph-erdos-hajnal-consequences` | A | combinatorics | 421 | `star-expansions-and-erdos-hajnal`, `iterative-sparsification-and-the-five-vertex-path` |
| 7 | `small-graph-erdos-hajnal-consequences-examples` | B | combinatorics | 422 | `small-graph-erdos-hajnal-consequences` |
| 7 | `iterative-restriction-and-comb-extraction-lemmas` | A | combinatorics | 423 | `iterative-sparsification-and-the-five-vertex-path` |
| 7 | `iterative-restriction-and-comb-extraction-lemmas-examples` | B | combinatorics | 424 | `iterative-restriction-and-comb-extraction-lemmas` |
| 9 | `myhill-nerode-theory-and-dfa-minimization` | A | computability-theory | 589 | `regular-expressions-and-kleenes-theorem`, `relations-functions-and-quotients` |
| 9 | `myhill-nerode-theory-and-dfa-minimization-examples` | B | computability-theory | 590 | `myhill-nerode-theory-and-dfa-minimization` |
| 9 | `decidable-recognizable-and-enumerable-languages` | A | computability-theory | 601 | `robust-machine-models-and-universal-computation`, `countability-and-uncountability` |
| 9 | `decidable-recognizable-and-enumerable-languages-examples` | B | computability-theory | 602 | `decidable-recognizable-and-enumerable-languages` |
| 10 | `primitive-recursive-and-partial-computable-functions` | A | computability-theory | 609 | `robust-machine-models-and-universal-computation`, `construction-of-the-natural-numbers` |
| 10 | `primitive-recursive-and-partial-computable-functions-examples` | B | computability-theory | 610 | `primitive-recursive-and-partial-computable-functions` |
| 10 | `resource-bounds-and-machine-invariance` | A | computability-theory | 617 | `robust-machine-models-and-universal-computation`, `the-logarithm-and-general-powers` |
| 10 | `resource-bounds-and-machine-invariance-examples` | B | computability-theory | 618 | `resource-bounds-and-machine-invariance` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `small-graph-erdos-hajnal-consequences` — Small-Graph Erdős–Hajnal Consequences (13 item(s))

- `cor-the-four-vertex-path-has-the-erdos-hajnal-property` · corollary — The four-vertex path has the Erdős–Hajnal property
- `thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property` · theorem — Every graph on at most four vertices has the Erdős–Hajnal property
- `cor-the-bull-graph-has-the-erdos-hajnal-property` · corollary — The bull graph has the Erdős–Hajnal property
- `lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement` · lemma — The prime five-vertex graphs are exactly the bull, $C_5$, $P_5$, and $\overline{P_5}$
- `thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property` · theorem — Every graph on at most five vertices has the Erdős–Hajnal property
- `def-left-six-vertex-prime-h-graph` · definition — The left six-vertex prime $\mathcal H$-graph
- `def-right-six-vertex-prime-h-graph` · definition — The right six-vertex prime $\mathcal H$-graph
- `cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property` · corollary — The two six-vertex prime $\mathcal H$-graphs have the Erdős–Hajnal property
- `def-e-graph-and-co-e-graph` · definition — The $E$-graph and co-$E$
- `def-bird-graph-and-co-bird-graph` · definition — The Bird graph and co-Bird
- `def-h-plus-and-h-minus-for-two-special-vertices` · definition — The graphs $H^+$ and $H^-$ for two distinguished vertices
- `def-h-zero-through-h-five` · definition — The graphs $H_0,H_1,\ldots,H_5$
- `cor-the-h-zero-graph-has-the-erdos-hajnal-property` · corollary — The graph $H_0$ has the Erdős–Hajnal property

### `small-graph-erdos-hajnal-consequences-examples` — Small-Graph Erdős–Hajnal Consequences — Examples (6 item(s))

- `ex-the-left-six-vertex-prime-h-graph-is-prime-and-leaf-deletes-to-the-bull` · example — The left six-vertex prime $\mathcal H$-graph is prime, and deleting any pendant leaf gives the bull
- `ex-the-right-six-vertex-prime-h-graph-is-the-complement-of-the-left-one-and-is-prime` · example — The right six-vertex prime $\mathcal H$-graph is the complement of the left one, and is prime
- `ex-the-e-graph-and-co-e-graph-by-adjacency` · example — The $E$-graph and co-$E$ by finite adjacency data
- `ex-the-bird-graph-and-co-bird-graph-by-adjacency` · example — The Bird graph and co-Bird by finite adjacency data
- `ex-h-zero-is-the-five-wheel` · example — $H_0$ is the five-wheel
- `ex-h-one-and-h-five-arise-by-the-prescribed-leaf-attachments` · example — $H_1$ and $H_5$ arise by the stated labelled leaf attachments

### `iterative-restriction-and-comb-extraction-lemmas` — Iterative Restriction and Comb-Extraction Lemmas (5 item(s))

- `def-leaf-reducible-finite-family` · definition — Leaf-reducible finite graph families
- `lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair` · lemma — A sparse graph without a large sparse pair has a large nearly covered sparse pair
- `lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph` · lemma — Leaf-reducible families yield a large anticomplete pair or a deeper restricted induced subgraph
- `lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold` · lemma — Iterated sparse restriction reaches the target sparsity threshold
- `lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair` · lemma — A sparse graph either sparsifies further or yields a comb or a large sparse pair

### `iterative-restriction-and-comb-extraction-lemmas-examples` — Iterative Restriction and Comb-Extraction Lemmas — Examples (4 item(s))

- `ex-the-five-vertex-path-is-leaf-reducible` · example — The five-vertex path is leaf-reducible
- `ex-a-nearly-covered-sparse-pair-at-small-parameters` · example — A nearly covered sparse pair at small parameters
- `ex-a-numeric-run-of-the-lemma-two-nine-iteration` · example — A numeric run of the multiplicative iteration in Lemma 2.9
- `ex-a-four-tooth-comb-with-an-external-complete-vertex` · example — A four-tooth comb with an external complete vertex

### `myhill-nerode-theory-and-dfa-minimization` — Myhill--Nerode Theory and DFA Minimization (16 item(s))

- `def-right-language-and-equivalent-dfa-states` · definition — The right language of a DFA state and state equivalence
- `lem-state-equivalence-is-a-right-congruence` · lemma — State-equivalent DFA states stay equivalent after every input word
- `def-quotient-dfa-by-state-equivalence` · definition — The quotient DFA by state equivalence
- `lem-quotient-dfa-is-well-defined-and-equivalent` · lemma — The quotient by state equivalence is a well-defined equivalent DFA
- `def-nerode-equivalence` · definition — Nerode equivalence of words
- `lem-nerode-equivalence-is-a-right-congruence` · lemma — Nerode-equivalent words stay equivalent after right concatenation
- `lem-dfa-states-refine-nerode-classes` · lemma — A DFA can realize at most one Nerode class per reachable state
- `thm-myhill-nerode-characterization` · theorem — A language is regular if and only if its Nerode equivalence has finite index
- `cor-nerode-classes-give-the-canonical-minimal-dfa` · corollary — Nerode classes form the canonical minimal DFA
- `thm-minimal-dfa-is-unique-up-to-pointed-isomorphism` · theorem — Minimal DFAs are unique up to start-state-preserving isomorphism
- `def-distinguishing-word` · definition — Distinguishing words for states and for prefixes
- `thm-table-filling-minimization-algorithm` · theorem — The table-filling algorithm computes state equivalence and DFA minimization
- `thm-pumping-lemma-for-regular-languages` · theorem — The pumping lemma for regular languages
- `cor-distinguishable-prefix-nonregularity-criterion` · corollary — Infinitely many pairwise distinguishable prefixes force nonregularity
- `fs-the-pumping-lemma-characterizes-regular-languages` · false-statement — FALSE: the pumping lemma characterizes the regular languages
- `fs-pumping-quantifiers-may-be-reordered` · false-statement — FALSE: the pumping lemma still works if its quantifiers are reordered

### `myhill-nerode-theory-and-dfa-minimization-examples` — Myhill--Nerode Theory and DFA Minimization: Examples and Counterexamples (3 item(s))

- `ex-quotient-dfa-is-well-defined-and-equivalent` · example — Merging equivalent sink-like states in a small DFA
- `ex-distinguishable-prefix-nonregularity-criterion` · example — The prefixes 0^n distinguish the language {0^n1^n : n >= 0}
- `cex-the-pumping-lemma-characterizes-regular-languages` · counterexample — A nonregular language can still satisfy the regular pumping lemma

### `decidable-recognizable-and-enumerable-languages` — Decidable, Recognizable, and Enumerable Languages (15 item(s))

- `def-computable-and-partial-computable-function` · definition — Computable and partial computable functions
- `def-decidable-and-recognizable-language` · definition — Decidable and recognizable languages
- `def-computably-enumerable-set` · definition — Computably enumerable sets and languages
- `thm-recognizable-iff-enumerable` · theorem — A binary language is recognizable if and only if it is computably enumerable
- `thm-decidable-iff-language-and-complement-are-recognizable` · theorem — A language is decidable if and only if it and its complement are recognizable
- `thm-recognizable-languages-are-closed-under-union-and-intersection` · theorem — Recognizable languages are closed under union and intersection
- `thm-decidable-languages-are-closed-under-boolean-operations` · theorem — Decidable languages are closed under the Boolean operations
- `def-dovetailing-schedule` · definition — A dovetailing schedule
- `lem-dovetailing-reaches-every-finite-stage` · lemma — A dovetailing schedule reaches every finite simulation stage
- `thm-domains-and-ranges-of-partial-computable-functions-are-ce` · theorem — Domains and ranges of partial computable functions are computably enumerable
- `thm-every-ce-set-is-a-domain` · theorem — Every computably enumerable set is the domain of a partial computable function
- `thm-infinite-ce-sets-have-computable-injective-enumerations` · theorem — Infinite computably enumerable sets have computable injective enumerations
- `prop-machine-descriptions-form-a-decidable-language` · proposition — Well-formed deterministic one-tape Turing machine descriptions form a decidable language
- `fs-recognizable-means-total` · false-statement — FALSE: recognizable means total halting
- `fs-every-countable-language-is-decidable` · false-statement — FALSE: every countable language is decidable

### `decidable-recognizable-and-enumerable-languages-examples` — Decidable, Recognizable, and Enumerable Languages: Examples and Counterexamples (3 item(s))

- `ex-decidable-iff-language-and-complement-are-recognizable` · example — Recognizers for strings containing a 1 and for all-zero strings
- `ex-machine-descriptions-form-a-decidable-language` · example — Testing a few short binary strings for machine-code well-formedness
- `cex-recognizable-means-total` · counterexample — A recognizer for {0} that loops on every nonmember

### `primitive-recursive-and-partial-computable-functions` — Primitive Recursive and Partial Computable Functions (16 item(s))

- `def-initial-arithmetic-functions` · definition — The zero, successor, and projection functions on the natural numbers
- `def-composition-and-primitive-recursion-schemes` · definition — Composition and primitive recursion as closure schemes on arithmetic functions
- `def-primitive-recursive-function` · definition — Primitive recursive functions
- `prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive` · proposition — Basic arithmetic operations and bounded quantification are primitive recursive
- `def-natural-number-coding-of-finite-sequences` · definition — A natural-number coding of finite sequences
- `thm-sequence-length-and-coordinate-functions-are-primitive-recursive` · theorem — The sequence-length and coordinate-reading functions are primitive recursive
- `def-mu-minimization-and-partial-recursive-function` · definition — Unbounded minimization and partial recursive functions
- `prop-ackermann-is-total-computable-but-not-primitive-recursive` · proposition — The Ackermann function is total computable but not primitive recursive
- `lem-turing-step-coding-is-primitive-recursive` · lemma — The one-step update on coded Turing configurations is primitive recursive
- `def-kleene-t-predicate-and-output-function` · definition — Kleene's T-predicate and output function
- `thm-kleene-normal-form` · theorem — Kleene normal form for partial recursive functions
- `thm-partial-recursive-iff-turing-computable` · theorem — A partial function is partial recursive if and only if it is Turing computable
- `def-lambda-term-beta-reduction-and-represented-function` · definition — Lambda terms, beta reduction, and the partial functions they represent
- `thm-lambda-definable-iff-partial-recursive` · theorem — A partial function is lambda-definable if and only if it is partial recursive
- `fs-every-total-computable-function-is-primitive-recursive` · false-statement — FALSE: every total computable function is primitive recursive
- `fs-mu-minimization-is-always-total` · false-statement — FALSE: applying mu-minimization to a computable search predicate always yields a total function

### `primitive-recursive-and-partial-computable-functions-examples` — Primitive Recursive and Partial Computable Functions: Examples and Counterexamples (3 item(s))

- `ex-sequence-length-and-coordinate-functions-are-primitive-recursive` · example — Reading the length and third coordinate of a coded finite sequence
- `ex-lambda-definable-iff-partial-recursive` · example — Factorial is both lambda-definable and partial recursive
- `cex-every-total-computable-function-is-primitive-recursive` · counterexample — The Ackermann function refutes the claim that all total computable functions are primitive recursive

### `resource-bounds-and-machine-invariance` — Resource Bounds and Machine Invariance (14 item(s))

- `def-worst-case-time-and-space-complexity` · definition — Worst-case time and space complexity of a machine
- `def-asymptotic-resource-comparison` · definition — Asymptotic comparison of resource bounds
- `def-time-and-space-constructible-function` · definition — Time-constructible and space-constructible functions
- `def-dtime-ntime-dspace-and-nspace` · definition — The classes DTIME, NTIME, DSPACE, and NSPACE
- `lem-time-at-least-input-length-permits-complete-input-reading` · lemma — Any machine that fully reads every input of length n needs at least linear time
- `lem-time-bounds-imply-space-bounds` · lemma — A time bound always yields the same-order space bound
- `thm-multitape-to-single-tape-time-simulation` · theorem — Every multitape time-T computation has a single-tape simulation in O((n+T(n))^2) time
- `thm-multitape-to-single-tape-space-simulation` · theorem — Every multitape space-S computation has a single-tape simulation in O(n+S(n)) space
- `thm-universal-simulation-with-logarithmic-overhead` · theorem — A universal simulator can realize T steps with only O(T log T) overhead
- `prop-polynomial-time-and-space-are-model-invariant` · proposition — Polynomial-time and polynomial-space computation are invariant across standard machine models
- `lem-clocked-machine-construction` · lemma — A constructible time bound yields a uniformly clocked simulator
- `prop-polynomially-related-encodings-preserve-polynomial-classes` · proposition — Polynomially related encodings preserve polynomial-time and polynomial-space classes
- `fs-model-invariance-means-equal-step-counts` · false-statement — FALSE: machine invariance means equivalent models perform exactly the same number of steps
- `fs-time-bounds-never-need-constructibility` · false-statement — FALSE: clocked-simulation and time-hierarchy arguments never need constructibility hypotheses

### `resource-bounds-and-machine-invariance-examples` — Resource Bounds and Machine Invariance: Examples and Counterexamples (3 item(s))

- `ex-time-bounds-imply-space-bounds` · example — A machine that runs in O(n^2) time necessarily uses at most O(n^2) space
- `ex-polynomially-related-encodings-preserve-polynomial-classes` · example — Changing between two polynomially related tuple encodings preserves polynomial complexity
- `cex-model-invariance-means-equal-step-counts` · counterexample — A linear-time multitape computation can require quadratic time on one tape

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
`research/frontier-27-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — group reading digest, `frontier-27`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
