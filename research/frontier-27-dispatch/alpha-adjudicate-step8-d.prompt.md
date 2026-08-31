# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-27-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-27
role: alpha-adjudicate
label: step8-d
covers: 7, 9, 10

# Step 8 — group **d**, run `frontier-27`

You are the group Alpha for batches **7**, **9**, **10**: 6 A/B pair(s), 12 page(s), 101 item(s), 58 open rejection(s) over 58 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-model-invariance-means-equal-step-counts` | `resource-bounds-and-machine-invariance-examples` | gpt-5.6-terra | `dcc68f5976e42d223e093078396a7da55ded4a7ded0fb19b9cbdcf2b0cea592c` |
| `cex-recognizable-means-total` | `decidable-recognizable-and-enumerable-languages-examples` | gpt-5.6-terra | `e8850056400d75da56af897e4d017e394114599afbdee7ecf82c2bd0b6a3d7c1` |
| `cex-the-pumping-lemma-characterizes-regular-languages` | `myhill-nerode-theory-and-dfa-minimization-examples` | gpt-5.6-terra | `94d208614b537aee1a21f60a1ba6a8f05b4721bd6db17f3299a001c4c67b0cee` |
| `cor-the-four-vertex-path-has-the-erdos-hajnal-property` | `small-graph-erdos-hajnal-consequences` | gpt-5.6-terra | `4fd1232e96477f60ff83f53438cd9e18193ea2aaf608e81ebd212a23d51e81c8` |
| `def-asymptotic-resource-comparison` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `fba617336da2f05cb9a26e3a289adecb97509fb6e72a09820550a5a47b27b64c` |
| `def-composition-and-primitive-recursion-schemes` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `4f7cc9a916e4727d3a420c1a6b355689cdacb6c70a605842ff0bf84ce7f3f896` |
| `def-decidable-and-recognizable-language` | `decidable-recognizable-and-enumerable-languages` | gpt-5.6-terra | `500ba51e90ec83cea2997f39622fe548e9d92ad9c235de385aacb2ca8e7e0cb5` |
| `def-distinguishing-word` | `myhill-nerode-theory-and-dfa-minimization` | gpt-5.6-terra | `98e3f738e73b093d38d9a201ddfb9c57011a7f2076da60ce3c86c271335721f6` |
| `def-dtime-ntime-dspace-and-nspace` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `fd53a5c88afe3493114b251832d09339bd802e3ccfcb7aabe5cfc1804b109e04` |
| `def-initial-arithmetic-functions` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `e9e9a6743c2ab810d6b3b1bdcdfbb424ce0c38485b76bcf0320576b2cf080008` |
| `def-kleene-t-predicate-and-output-function` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `340a6538bdd9ebf0764d4f7d2cba9f88e44f9e15e67ee8e975dc6dff82af0cb2` |
| `def-lambda-term-beta-reduction-and-represented-function` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `c0ee5f5e2d64945e45a213da75f2cabd07a010e89aebe76132a0281171ceb7f5` |
| `def-mu-minimization-and-partial-recursive-function` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `ecf9f0423daeca06d8a57723610a288e7fe6c75b0191f74070deeb77bae63484` |
| `def-natural-number-coding-of-finite-sequences` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `a7cea01ddd5644604e807de975700069e240b82e3cfd18fe2f7d0999ed9b7292` |
| `def-quotient-dfa-by-state-equivalence` | `myhill-nerode-theory-and-dfa-minimization` | gpt-5.6-terra | `2c916284fa2a6bfc9a93583b5323664bc7f872a267bf94c5df9f048bf07bbeda` |
| `def-time-and-space-constructible-function` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `8a77e7abdd58cc918d398dba4f96ae2f7602ae94052b1438d5d6ba59c125769f` |
| `ex-a-four-tooth-comb-with-an-external-complete-vertex` | `iterative-restriction-and-comb-extraction-lemmas-examples` | gpt-5.6-terra | `969faef02499c5d071e60580360ad248ac8431d73ea1135295fe6ad795e90d69` |
| `ex-a-nearly-covered-sparse-pair-at-small-parameters` | `iterative-restriction-and-comb-extraction-lemmas-examples` | gpt-5.6-terra | `df620e544fef889487a886e0f31716c5c65bd5443e2bf3a9eee8ae91b11f45f5` |
| `ex-distinguishable-prefix-nonregularity-criterion` | `myhill-nerode-theory-and-dfa-minimization-examples` | gpt-5.6-terra | `676e2e179148845c19026aca7d38c1d2eea596dac0e599b40f344d88e9872c77` |
| `ex-h-one-and-h-five-arise-by-the-prescribed-leaf-attachments` | `small-graph-erdos-hajnal-consequences-examples` | gpt-5.6-terra | `dd01ff4f0e33c9c15ee80e1b07afa1034235b3a99b2563fd60e35748329e5d73` |
| `ex-lambda-definable-iff-partial-recursive` | `primitive-recursive-and-partial-computable-functions-examples` | gpt-5.6-terra | `53d9b9bdeadb96ea8200c65b2eea752881649698d70f6e56b96f91e32915d63f` |
| `ex-machine-descriptions-form-a-decidable-language` | `decidable-recognizable-and-enumerable-languages-examples` | gpt-5.6-terra | `8b87c92d8fa6f1a483e867ff862346440f7365e76bcb1edc82d9c187353adc65` |
| `ex-polynomially-related-encodings-preserve-polynomial-classes` | `resource-bounds-and-machine-invariance-examples` | gpt-5.6-terra | `e3927d4262041f6662a8cec3efba2293a24bffd725b7aaf939262ebd0f9ee44d` |
| `ex-quotient-dfa-is-well-defined-and-equivalent` | `myhill-nerode-theory-and-dfa-minimization-examples` | gpt-5.6-terra | `6193e33d4c9d07c44671113987554b334bc1fffc28d6eff16f0f83e1ba161479` |
| `ex-the-left-six-vertex-prime-h-graph-is-prime-and-leaf-deletes-to-the-bull` | `small-graph-erdos-hajnal-consequences-examples` | gpt-5.6-terra | `af7492d3d015ab6c50d13562a3c1daa0e6e4ca88d1b0951724dcabd93e8c853e` |
| `fs-every-countable-language-is-decidable` | `decidable-recognizable-and-enumerable-languages` | gpt-5.6-terra | `27c00258c7776faa75d9ff23e623d37e8d5d2fecff2f9dcac48de33de8a9eec5` |
| `fs-every-total-computable-function-is-primitive-recursive` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `4e7c4632ba109af906e76d174eaa5ff80e58dad61e1eb4bff401819121202ee1` |
| `fs-model-invariance-means-equal-step-counts` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `98cf22e99511da02c933af4f737d8e0b7baaed04e64374d7b9962d3d9b512e83` |
| `fs-recognizable-means-total` | `decidable-recognizable-and-enumerable-languages` | gpt-5.6-terra | `59a28dfe6df4e296a0719ad5397abe724a600c7bf01ffa04f2e184048b3a6bc5` |
| `fs-the-pumping-lemma-characterizes-regular-languages` | `myhill-nerode-theory-and-dfa-minimization` | gpt-5.6-terra | `7ccaed1ff332a297fadad11ef07bfa9005beda04aaffd26627546cee62c8470a` |
| `fs-time-bounds-never-need-constructibility` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `04d4186c61e31b8ad3db194e8dfec0fa10bda51c531792b2cc770319a4a0b42e` |
| `lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair` | `iterative-restriction-and-comb-extraction-lemmas` | gpt-5.6-terra | `d552ac6a2f9cc167ba9696e399f0e31bf5974330b287749a5099db89287a1d21` |
| `lem-clocked-machine-construction` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `959382f2c8fb4c03bbca9d5480c3cbff227529b34b345efad191c9a68ad28c4e` |
| `lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold` | `iterative-restriction-and-comb-extraction-lemmas` | gpt-5.6-terra | `011549c1c3b46755ab2282f3d87720150857af4be54f3c3dc607af8b553a467f` |
| `lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph` | `iterative-restriction-and-comb-extraction-lemmas` | gpt-5.6-terra | `bd509bb7ab8d90fc33be2e1bb52ed2d769994171d9eae1c1a3a351ac3adfdee6` |
| `lem-quotient-dfa-is-well-defined-and-equivalent` | `myhill-nerode-theory-and-dfa-minimization` | gpt-5.6-terra | `89b8263f3ce277c8d8c62859e6ec33f14b0d0915b9bca541ef1749fea13a9a12` |
| `lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement` | `small-graph-erdos-hajnal-consequences` | gpt-5.6-terra | `2395b70305730634aec674c4d50db1f3780f009949148f2297373c6c3c6619ed` |
| `lem-time-at-least-input-length-permits-complete-input-reading` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `25e36c19f717ebe943b8dd2a2522c21d79a75d98bac4b14cd2cd91d1c792cdba` |
| `lem-time-bounds-imply-space-bounds` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `698c9a9a1dd5dffb1ac7319dec9a9195fd905644fd846fc3f34a8ab4b61023b7` |
| `lem-turing-step-coding-is-primitive-recursive` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `4b2f3503053d72d505a66b4cc583d46bfd1e5e7307fb984a9c583e1bcb2d857c` |
| `prop-ackermann-is-total-computable-but-not-primitive-recursive` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `70eaff6654f8855ba4a64199b3c03d50facfb2a646b68e887fe0c2397226bb7e` |
| `prop-machine-descriptions-form-a-decidable-language` | `decidable-recognizable-and-enumerable-languages` | gpt-5.6-terra | `8d12b6a4f269c2580a578dc91c912be1c54f192009044c02af1fd73e06364e0d` |
| `prop-polynomial-time-and-space-are-model-invariant` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `bfdb3e743b322c7ab36ff815f48cf07b2dfa12e347747cb8df1cc7ed692af2dd` |
| `thm-decidable-iff-language-and-complement-are-recognizable` | `decidable-recognizable-and-enumerable-languages` | gpt-5.6-terra | `37ebd28e59fa2f3a6739a643aa2873f07bc136bf4ea75c72a2be9a14c9d77221` |
| `thm-every-ce-set-is-a-domain` | `decidable-recognizable-and-enumerable-languages` | gpt-5.6-terra | `4c5c60e00893b1bfa794098989c5ff14a92791bddf535b1f49b87a01e0de51d2` |
| `thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property` | `small-graph-erdos-hajnal-consequences` | gpt-5.6-terra | `7a05976284d7793ad870969a1ac19733ff69453e9910bddfd594096ec8fa7ab4` |
| `thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property` | `small-graph-erdos-hajnal-consequences` | gpt-5.6-terra | `c87a3c23de7bf93ffee48d753313a24dc093ad581c87a8c0bc551ee182db0907` |
| `thm-kleene-normal-form` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `7d7e8f16a2bf391b6fd654a11eb6d16d6adc82d37204aa9b49581f4f36d853ab` |
| `thm-lambda-definable-iff-partial-recursive` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `9cd428884ce2a237d88a6beeacc1981e83f9a36de519ea1a8e717295ca12453d` |
| `thm-minimal-dfa-is-unique-up-to-pointed-isomorphism` | `myhill-nerode-theory-and-dfa-minimization` | gpt-5.6-terra | `58b68cddd12cfc1bb9c6657a871b65ea0cae38cc9fb99309b8ae5b3d5134dec6` |
| `thm-multitape-to-single-tape-space-simulation` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `675b0c8a623cf3f8343ee1ed071d986af35d4bb1914b10a226856abf12885228` |
| `thm-multitape-to-single-tape-time-simulation` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `a9f163ca8a6b74be9dd7a269ebd2f2bb16254062d2a258259dd74b2628ee4e20` |
| `thm-myhill-nerode-characterization` | `myhill-nerode-theory-and-dfa-minimization` | gpt-5.6-terra | `38fcf4a2b0d15fdf3303ce4e2975879e005f64ec207dc97ceac71071e9f3c889` |
| `thm-partial-recursive-iff-turing-computable` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `e4d4c7199b579c036a5db9ea9f2b78d9f2dbb982dfc9bfac4c44240a2966399f` |
| `thm-pumping-lemma-for-regular-languages` | `myhill-nerode-theory-and-dfa-minimization` | gpt-5.6-terra | `d2b58c4b6268754c1b6dfee8391879c47b7008760b0e3083b1aca0048e2469d3` |
| `thm-sequence-length-and-coordinate-functions-are-primitive-recursive` | `primitive-recursive-and-partial-computable-functions` | gpt-5.6-terra | `3c38d28a693ce27abf50043c314105045d74dd140fce715d020fbceacd48c64a` |
| `thm-table-filling-minimization-algorithm` | `myhill-nerode-theory-and-dfa-minimization` | gpt-5.6-terra | `b933d7ad142c9f3387bfb30740023b210dcf5c723d5fad1717f207ca81d2c1ab` |
| `thm-universal-simulation-with-logarithmic-overhead` | `resource-bounds-and-machine-invariance` | gpt-5.6-terra | `706b99bbc2daa71dfa04d96a0f6842ae8df7843bba50b27742eb3b5827a9efe5` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-27`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-27-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For an incoming alert, append the owning-group disposition to
`research/frontier-27-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-27-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-27-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
