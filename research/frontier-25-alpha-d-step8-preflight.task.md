# Step 8 — group **d**, run `frontier-25`

You are the group Alpha for batches **10**, **11**: 3 A/B pair(s), 6 page(s), 57 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-25-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-25-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 10 | `nondeterministic-finite-automata-and-subset-construction` | A | computability-theory | 585 | `deterministic-finite-automata-and-regular-languages`, `the-zfc-axioms-and-basic-set-constructions` |
| 10 | `nondeterministic-finite-automata-and-subset-construction-examples` | B | computability-theory | 586 | `nondeterministic-finite-automata-and-subset-construction` |
| 10 | `pushdown-automata-and-context-free-languages` | A | computability-theory | 593 | `context-free-grammars-and-normal-forms`, `deterministic-finite-automata-and-regular-languages` |
| 10 | `pushdown-automata-and-context-free-languages-examples` | B | computability-theory | 594 | `pushdown-automata-and-context-free-languages` |
| 11 | `turing-machines-configurations-and-computation` | A | computability-theory | 597 | `formal-languages-encodings-and-decision-problems`, `graphs-walks-and-connectivity`, `eulerian-and-hamiltonian-graphs` |
| 11 | `turing-machines-configurations-and-computation-examples` | B | computability-theory | 598 | `turing-machines-configurations-and-computation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `nondeterministic-finite-automata-and-subset-construction` — Nondeterministic Finite Automata and Subset Construction (15 item(s))

- `def-nfa-with-epsilon-moves` · definition — Nondeterministic finite automata with epsilon-moves
- `def-epsilon-closure-of-a-state-set` · definition — The epsilon-closure of a set of NFA states
- `lem-epsilon-closure-is-a-closure-operator` · lemma — Epsilon-closure is a closure operator
- `def-extended-nfa-transition` · definition — The extended transition function of an NFA
- `def-nfa-acceptance-and-recognized-language` · definition — Acceptance of a word by an NFA and the recognized language
- `prop-every-dfa-is-an-nfa` · proposition — Every DFA is an NFA
- `def-subset-construction-dfa` · definition — The subset-construction DFA
- `lem-subset-construction-state-invariant` · lemma — Subset construction tracks exactly the reachable NFA state set
- `thm-subset-construction-preserves-language` · theorem — The subset construction preserves the recognized language
- `cor-dfas-and-nfas-recognize-the-same-languages` · corollary — DFAs and NFAs recognize the same languages
- `thm-epsilon-elimination-for-nfas` · theorem — Epsilon-moves can be eliminated from NFAs
- `thm-nfa-constructions-for-union-concatenation-and-star` · theorem — NFAs can be constructed for union, concatenation, and Kleene star
- `prop-subset-construction-can-require-exponentially-many-states` · proposition — The subset construction can require exponentially many states
- `fs-an-nfa-accepts-only-if-every-branch-accepts` · false-statement — FALSE: an NFA accepts only if every branch accepts
- `fs-epsilon-is-an-input-symbol` · false-statement — FALSE: epsilon is an input symbol

### `nondeterministic-finite-automata-and-subset-construction-examples` — Nondeterministic Finite Automata and Subset Construction: Examples and Counterexamples (3 item(s))

- `ex-every-dfa-is-an-nfa` · example — Viewing a small DFA as an NFA with singleton transitions
- `ex-subset-construction-can-require-exponentially-many-states` · example — A three-state NFA whose equivalent DFA needs four states
- `cex-an-nfa-accepts-only-if-every-branch-accepts` · counterexample — One accepting branch is enough for an NFA to accept

### `pushdown-automata-and-context-free-languages` — Pushdown Automata and Context-Free Languages (17 item(s))

- `def-nondeterministic-pushdown-automaton` · definition — Nondeterministic pushdown automata
- `def-pda-configuration-and-step` · definition — PDA configurations and one-step moves
- `def-pda-acceptance-by-final-state` · definition — Acceptance by final state for a PDA
- `def-pda-acceptance-by-empty-stack` · definition — Acceptance by empty stack for a PDA
- `thm-final-state-and-empty-stack-acceptance-are-equivalent` · theorem — Acceptance by final state and by empty stack are equivalent for PDAs
- `thm-cfg-to-pda-construction` · theorem — Every context-free grammar has an equivalent PDA
- `def-pda-computation-fragment-variable` · definition — The PDA fragment variable $[p,Z,q]$
- `lem-pda-fragment-variables-compose` · lemma — PDA fragment variables compose
- `thm-pda-to-cfg-construction` · theorem — Every PDA has an equivalent context-free grammar
- `thm-pdas-recognize-exactly-the-cfls` · theorem — PDAs recognize exactly the context-free languages
- `def-deterministic-pda` · definition — Deterministic pushdown automata and deterministic context-free languages
- `lem-dpdas-have-unique-computations` · lemma — A DPDA has at most one computation on each input
- `prop-pda-to-cfg-construction-preserves-unambiguity` · proposition — If a PDA has at most one accepting computation on each word, the standard PDA-to-CFG construction is unambiguous
- `prop-deterministic-cfls-are-unambiguous` · proposition — Deterministic context-free languages are unambiguous
- `prop-deterministic-cfls-are-closed-under-complement` · proposition — Deterministic context-free languages are closed under complement
- `fs-swapping-dpda-accept-states-complements-the-language` · false-statement — FALSE: swapping the accepting states of a DPDA automatically complements its language
- `fs-final-state-and-empty-stack-acceptance-are-literally-identical` · false-statement — FALSE: acceptance by final state and by empty stack are literally identical

### `pushdown-automata-and-context-free-languages-examples` — Pushdown Automata and Context-Free Languages: Examples and Counterexamples (3 item(s))

- `ex-cfg-to-pda-construction` · example — Building a PDA for $\{a^n b^n : n \ge 0\}$ from the standard grammar
- `ex-a-n-b-n-is-deterministic-context-free-and-unambiguous` · example — The language $\{a^n b^n : n \ge 0\}$ is deterministic context-free and unambiguous
- `cex-swapping-dpda-accept-states-complements-the-language` · counterexample — A looping DPDA shows naive final-state complementation can fail

### `turing-machines-configurations-and-computation` — Turing Machines, Configurations, and Computation (16 item(s))

- `def-deterministic-one-tape-turing-machine` · definition — Deterministic one-tape Turing machines with designated accept and reject states
- `def-tape-finite-support-convention` · definition — Right-infinite tapes as finite-support functions
- `def-turing-machine-configuration` · definition — Configurations of a deterministic one-tape Turing machine
- `def-one-step-configuration-relation` · definition — The one-step configuration relation
- `lem-deterministic-nonhalting-configurations-have-unique-successors` · lemma — Every nonhalting deterministic configuration has a unique successor
- `def-initial-accepting-and-rejecting-configurations` · definition — Initial, accepting, and rejecting configurations
- `def-halting-computation-and-divergence` · definition — Finite computation histories, halting computations, and divergence
- `def-language-recognized-and-decided` · definition — Languages recognized and decided by a Turing machine
- `def-partial-function-computed-by-a-machine` · definition — Partial functions computed by a machine under fixed encodings
- `def-multitape-and-nondeterministic-machines` · definition — Multitape and nondeterministic Turing machine variants
- `def-nondeterministic-accepting-computation` · definition — Accepting computations of a nondeterministic machine
- `prop-valid-computation-histories-are-decidable` · proposition — For a fixed machine and input, valid accepting computation histories form a decidable language
- `def-configuration-graph` · definition — The configuration graph of a machine on an input
- `lem-acceptance-is-configuration-reachability` · lemma — Acceptance is reachability of an accepting configuration
- `fs-rejection-is-divergence` · false-statement — FALSE: rejection is divergence
- `fs-nondeterministic-acceptance-requires-every-branch-to-halt` · false-statement — FALSE: nondeterministic acceptance requires every branch to halt

### `turing-machines-configurations-and-computation-examples` — Turing Machines, Configurations, and Computation: Examples and Counterexamples (3 item(s))

- `ex-valid-computation-histories-are-decidable` · example — Checking a short accepting history for a unary increment machine
- `ex-acceptance-is-configuration-reachability` · example — A branching configuration graph with one accepting path and one looping path
- `cex-rejection-is-divergence` · counterexample — Immediate rejection is a halting computation, not a divergence

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
`research/frontier-25-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-25`

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
