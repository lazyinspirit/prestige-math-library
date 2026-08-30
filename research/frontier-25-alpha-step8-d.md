# Step 8 — group d adjudication

Run: `frontier-25`  
Batches: `10`, `11`  
Owned rejections: 36 exact `(id, model, context_sha256)` tuples

## Outcome summary

- `confirmed_fatal`: 11
- `confirmed_nonfatal`: 22
- `false_positive`: 3
- repaired fatal items: 10
- open fatal blockers: 1
- incoming or outgoing cross-group alerts: 0

Every exact outcome, including its pre-edit guard-form `item_sha256`, was
appended to `research/frontier-25-judge-adjudications.jsonl`. The tables below
are the group report; the shared JSONL rows are the tuple authority.

## Confirmed fatal

| item | disposition | evidence and repair |
|---|---|---|
| `def-epsilon-closure-of-a-state-set` | fixed; rejudge | The displayed chain reused the machine's fixed start-state name `q_0`, so it failed for arbitrary state sets. The chain is now indexed `r_0,\ldots,r_n`, beginning at the quantified `s`. |
| `def-extended-nfa-transition` | fixed; rejudge | Its prose excluded epsilon moves after the final letter although the recursion applies epsilon-closure there. The characterization now includes final epsilon moves. |
| `def-multitape-and-nondeterministic-machines` | fixed; rejudge | The definition did not require the blank symbol to belong to the tape alphabet. The opening data now state `\sqcup\in\Gamma`. |
| `def-nondeterministic-accepting-computation` | fixed; rejudge | Configurations and accepting configurations of a nondeterministic machine were used without definition. The item now defines the same state/head/tape triples and halting-state convention before defining a step. |
| `ex-cfg-to-pda-construction` | fixed; rejudge | The displayed run expanded a buried `S` while the top stack symbol was `a`. The repaired run interleaves each expansion with the required input-consuming pop. |
| `ex-valid-computation-histories-are-decidable` | fixed; rejudge | The first three configuration words carried noncanonical trailing blanks. The history now displays a blank only when the head reaches or must include that cell. |
| `fs-final-state-and-empty-stack-acceptance-are-literally-identical` | fixed; rejudge | Fact `[L3]` strengthened language-class equivalence into a false claim that conversion is necessary for every fixed PDA. It now states exactly the cited existence result and its limitation. |
| `lem-pda-fragment-variables-compose` | fixed; rejudge | The converse imposed an arbitrary preselected split `xy`; the judge's concrete run showed that split need not occur when `Y` is first exposed. The statement and proof now existentially choose `x,y,r` at that first exposure. |
| `prop-deterministic-cfls-are-unambiguous` | fixed by owner-authorized prerequisite repair; rejudge | Authoritative DPDA definitions confirmed that epsilon transitions must also be single-valued. The repaired definition and uniqueness lemma now support a halting post-endmarker normalization, after which every accepting computation is maximal and the unambiguous PDA-to-CFG result applies. |
| `prop-valid-computation-histories-are-decidable` | fixed; rejudge | The recursive decoder had no decreasing measure on malformed inputs. It now uses the cited explicit self-delimiting pair code, whose recovered tail is strictly shorter than the current code. |
| `thm-nfa-constructions-for-union-concatenation-and-star` | fixed; rejudge | The concatenation construction omitted its accepting set and could retain the accepting states of the first machine. All three constructions now specify their accepting sets; concatenation accepts only in the copied `K` machine. |

Matching defect-ledger rows `frontier-25-S8-d-001` through
`frontier-25-S8-d-011` were appended with exact adjudication references. All
eleven are now fixed; row `frontier-25-S8-d-009` carries the exact owner repair
receipt for its two prerequisite corrections.

## Confirmed nonfatal

These objections identify wording, citation, or one-line proof gaps that a
competent reader closes immediately; their mathematical claims and witnesses
remain correct. By the fatal-only rule, none received content, contract,
impact, or judge changes.

| item | rationale |
|---|---|
| `cex-rejection-is-divergence` | The two-term rejecting history immediately negates divergence; the missing direct citation is non-load-bearing. |
| `def-language-recognized-and-decided` | “Accepts” and “rejects” are immediate shorthand for the preceding accepting and rejecting history predicates. |
| `def-one-step-configuration-relation` | Successor, predecessor, and order notation on natural head positions are standard and locally unambiguous. |
| `def-pda-configuration-and-step` | The displayed configurations and transition-membership condition infer the omitted variable types uniquely. |
| `def-subset-construction-dfa` | A finite set has a finite power set; the omitted elementary justification does not change the construction. |
| `def-turing-machine-configuration` | The nonempty finite set `{h}\cup\operatorname{supp}(t)` has a maximum by the elementary finite-subset fact. |
| `ex-subset-construction-can-require-exponentially-many-states` | The item lists four reachable subsets and suffixes distinguishing every same-acceptance pair; deterministic future behaviour supplies the immediate lower bound. |
| `fs-nondeterministic-acceptance-requires-every-branch-to-halt` | The left-boundary clamp is already fixed by the page's machine convention; its omission from the step tag is nonfatal. |
| `fs-rejection-is-divergence` | The displayed transition and initial tape make the one-step rejection immediate; only a direct dynamics citation is omitted. |
| `fs-swapping-dpda-accept-states-complements-the-language` | Fact `[L2]` overstates what the closure proposition's statement alone says, but the explicit looping witness independently and completely refutes naive swapping. |
| `lem-acceptance-is-configuration-reachability` | Deterministic acceptance is the immediately preceding accepting-history predicate; the graph/path equivalence is otherwise definitional. |
| `lem-deterministic-nonhalting-configurations-have-unique-successors` | From “configuration,” `t:\mathbb N\to\Gamma`, so `t(h)\in\Gamma` is an immediate unpacking. |
| `lem-dpdas-have-unique-computations` | The full configuration, including the next unread symbol, determines the move; the proof's shorter phrase “state and top symbol” is nonfatal for the exact objection. The separate epsilon-branching defect in the DPDA definition is recorded as the blocker above. |
| `lem-subset-construction-state-invariant` | The standard DFA extended-transition recursion closes the induction immediately; the missing direct citation is nonfatal. |
| `prop-every-dfa-is-an-nfa` | The one-letter singleton construction extends to words by the standard recursion; no mathematical case is missing. |
| `prop-subset-construction-can-require-exponentially-many-states` | Equal DFA states have identical continuation behaviour by deterministic recursion; the proof uses this elementary consequence correctly. |
| `thm-cfg-to-pda-construction` | The published derivation/parse-tree theorem supplies a leftmost derivation for every terminal derivation; the construction itself is correct. |
| `thm-epsilon-elimination-for-nfas` | Calling the constructed machine epsilon-free determines the omitted values `\delta'(q,\varepsilon)=\varnothing`. |
| `thm-final-state-and-empty-stack-acceptance-are-equivalent` | Installing the fresh bottom marker requires the standard fresh-start epsilon move, an immediate construction detail. |
| `thm-pda-to-cfg-construction` | The two-symbol case needs `uv` rather than `u` as the unread input before the split; this is a local notation repair a reader closes immediately. |
| `thm-pdas-recognize-exactly-the-cfls` | The preceding acceptance-mode equivalence immediately reconciles the empty-stack and final-state formulations. |
| `thm-subset-construction-preserves-language` | The accepting-subset condition is the named subset construction already used by the invariant; the omitted direct dependency is nonfatal. |

## False positives

| item | rationale |
|---|---|
| `def-configuration-graph` | The item itself defines `(V,A)` and explicitly borrows only the cited ordered-pair arc convention while disclaiming finiteness. It does not assert that an infinite graph is an instance of the published finite-digraph definition. |
| `ex-every-dfa-is-an-nfa` | The cited proposition's proof explicitly gives singleton one-letter transitions and empty epsilon-transition sets, exactly as `[L1]` states. |
| `prop-pda-to-cfg-construction-preserves-unambiguity` | Steps 1.1 and 2.1 themselves prove the required computation/derivation correspondence: a production fixes the first move, and the first disappearance of each pushed symbol fixes every split state. The objection treats those proof steps as if they were unsupported assertions. |

## Sources checked

- Columbia University, [Lecture 8: Pushdown Automata](https://www.cs.columbia.edu/~aho/cs3261/Lectures/L8-PDA.html): a DPDA must have at most one transition for every input-or-epsilon symbol and must exclude simultaneous epsilon and input moves. This confirms the independently found, currently unlicensed defect in `def-deterministic-pda`.
- Columbia University, [Lecture 9: CFGs and PDAs](https://www.cs.columbia.edu/~aho/cs3261/Lectures/L9-CFGs_and_PDAs.html): the CFG-to-PDA simulation follows leftmost derivations, and the PDA-to-CFG construction uses variables `[pXq]` with intermediate states for pushed stack symbols. This supports the acceptance-mode and fragment-split adjudications.
- University of Waterloo, [Module 6: Pushdown automata](https://cs.uwaterloo.ca/~browndg/360F23/notes/module6-print.pdf): an empty-stack language of a DPDA has an unambiguous grammar, obtained by following the PDA-to-CFG conversion. This supports the theorem's intended result while confirming that the present local proof and DPDA definition cannot be left as the justification.
- Local published dependencies opened for the exact claims included `thm-derivation-parse-tree-correspondence`, `def-extended-dfa-transition-function`, `thm-existence-and-uniqueness-of-extended-dfa-transition`, and `lem-finite-tuples-admit-effective-prefix-free-encodings`.

## Rejudge targets

The engine should rejudge exactly these changed items:

1. `def-epsilon-closure-of-a-state-set`
2. `def-extended-nfa-transition`
3. `def-multitape-and-nondeterministic-machines`
4. `def-nondeterministic-accepting-computation`
5. `ex-cfg-to-pda-construction`
6. `ex-valid-computation-histories-are-decidable`
7. `fs-final-state-and-empty-stack-acceptance-are-literally-identical`
8. `lem-pda-fragment-variables-compose`
9. `prop-valid-computation-histories-are-decidable`
10. `thm-nfa-constructions-for-union-concatenation-and-star`

`prop-deterministic-cfls-are-unambiguous` and its two repaired prerequisites are
additional rejudge targets under the exact owner repair receipt.

## Checks run

- Focused precheck: 6 proof-bearing repaired items, all clean.
- Focused render check: 10 repaired items, all YAML and math clean.
- Dependency check: no errors; repository-wide pre-existing warnings remained.
- Step-8 guard: passed, with every observed Step-8 edit licensed by an exact confirmed fatal or terminal resolution.
- Step-8 scope check: passed; all four groups remained partitioned and all exact rejections were routed/adjudicated, with no cross-group alerts.
