# Step 7 whole-group reading — group **g**, run `phase-2-wave-1`

You are the group Alpha for batches **9**, **13**: 3 A/B pair(s), 6 page(s), 31 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-8 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 9 | `quantitative-induced-density-and-the-loglog-step` | A | combinatorics | 408.1 | `induced-subgraphs-and-hereditary-graph-classes`, `regular-pairs-and-induced-counting`, `sparse-restricted-subgraphs-and-rodl-nikiforov`, `blockades-combs-and-pattern-graphs`, `the-logarithm-and-general-powers`, `finite-counting-and-binomial-coefficients` |
| 9 | `quantitative-induced-density-and-the-loglog-step-examples` | B | combinatorics | 408.2 | `quantitative-induced-density-and-the-loglog-step` |
| 13 | `finite-automata-transition-and-determinisation-interfaces` | A | computability-theory | 584.2 | `deterministic-finite-automata-and-regular-languages` |
| 13 | `finite-automata-transition-and-determinisation-interfaces-examples` | B | computability-theory | 584.4 | `finite-automata-transition-and-determinisation-interfaces` |
| 13 | `turing-machine-configuration-boundary-interface` | A | computability-theory | 596.2 | `formal-languages-encodings-and-decision-problems` |
| 13 | `turing-machine-configuration-boundary-interface-examples` | B | computability-theory | 596.4 | `turing-machine-configuration-boundary-interface` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `quantitative-induced-density-and-the-loglog-step` — Quantitative Induced Density and the Log-Log Step (18 item(s))

- `def-induced-copy-density-and-homogeneous-restriction-parameter` · definition — Induced copy density and homogeneous restriction parameter
- `def-qid-restricted-blockade-with-empty-blocks` · definition — Qid restricted blockade with empty blocks
- `def-labelled-blowup-and-good-induced-copy` · definition — Labelled blowup and good induced copy
- `lem-good-copy-extension-count` · lemma — Good copy extension count
- `lem-few-induced-copies-exclude-a-fixed-labelled-blowup` · lemma — Few induced copies exclude a fixed labelled blowup
- `lem-qid-bipartite-density-trimming` · lemma — Qid bipartite density trimming
- `lem-qid-fixed-size-density-selection` · lemma — Qid fixed size density selection
- `lem-local-special-copy-trichotomy` · lemma — Local special copy trichotomy
- `lem-qid-maximal-blowup-trichotomy` · lemma — Qid maximal blowup trichotomy
- `lem-special-copy-trichotomy-produces-a-restricted-blockade` · lemma — Special copy trichotomy produces a restricted blockade
- `def-subreciprocal-function-and-ell-divisibility` · definition — Subreciprocal function and ell divisibility
- `lem-subreciprocal-functions-close-under-the-density-recursion` · lemma — Admissible parameters for the density recursion
- `def-qid-finite-density-recursion-profile` · definition — Qid finite density recursion profile
- `lem-qid-logarithmic-and-constant-divisibility` · lemma — Qid logarithmic and constant divisibility
- `lem-ell-divisibility-amplifies-through-a-blockade` · lemma — Ell divisibility amplifies through a blockade
- `thm-quantitative-density-theorem-for-ell-divisive-graphs` · theorem — Quantitative density theorem for ell divisive graphs
- `cor-fox-sudakov-quantitative-induced-density-bound` · corollary — Fox sudakov quantitative induced density bound
- `thm-loglog-quantitative-induced-density-bound` · theorem — Loglog quantitative induced density bound

### `quantitative-induced-density-and-the-loglog-step-examples` — Quantitative Induced Density and the Log-Log Step: Examples (4 item(s))

- `ex-a-labelled-blowup-and-its-good-copies` · example — A labelled blowup and its good copies
- `ex-checking-the-subreciprocal-condition-for-the-quadratic-log-bound` · example — Checking the subreciprocal condition for the quadratic log bound
- `ex-checking-the-subreciprocal-condition-for-the-loglog-bound` · example — Checking the subreciprocal condition for the loglog bound
- `ex-comparing-the-two-quantitative-density-scales` · example — Comparing the two quantitative density scales

### `finite-automata-transition-and-determinisation-interfaces` — Finite-Automata Transition and Determinisation Interfaces (3 item(s))

- `def-epsilon-nfa-word-transition` · definition — Epsilon-NFAs, finite epsilon closure, and extended word transition
- `thm-subset-construction-reachability-invariant` · theorem — Subset construction and its exact reachability invariant
- `prop-deterministic-automata-are-special-nondeterministic-automata` · proposition — A DFA embeds as an epsilon-free NFA

### `finite-automata-transition-and-determinisation-interfaces-examples` — Finite-Automata Transition and Determinisation Interfaces: Examples (3 item(s))

- `ex-epsilon-closure-and-word-transition-on-a-three-state-nfa` · example — Epsilon closure and word transitions on three states
- `ex-subset-construction-for-an-epsilon-nfa` · example — A complete determinisation table for a three-state epsilon-NFA
- `cex-omitting-epsilon-closure-breaks-determinisation` · counterexample — Dropping epsilon closure changes the accepted language

### `turing-machine-configuration-boundary-interface` — Turing-Machine Configuration Boundary Interface (1 item(s))

- `def-turing-machine-initial-and-halting-configuration-interface` · definition — Initial tapes and machine-relative halting configurations

### `turing-machine-configuration-boundary-interface-examples` — Turing-Machine Configuration Boundary Interface: Examples (2 item(s))

- `ex-initial-configuration-on-empty-input` · example — The empty-input initial configuration
- `ex-accepting-and-rejecting-configurations-are-machine-relative` · example — The same triple can accept for one machine and reject for another

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 7 — group reading digest, `phase-2-wave-1`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
