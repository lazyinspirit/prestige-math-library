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
group work, `research/frontier-29-alpha-groups.json` is the assignment: it permits at
most eight groups of at most three batches, and a group writes only its own
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

run: frontier-29
role: alpha-group-read
label: g
covers: g

# Step 7 whole-group reading — group **g**, run `frontier-29`

You are the group Alpha for batches **18**, **19**: 4 A/B pair(s), 8 page(s), 78 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-8 adjudicator. No judge verdict is supplied here.
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
| 18 | `computable-reductions-and-rices-theorem` | A | computability-theory | 605 | `diagonalization-and-the-halting-problem` |
| 18 | `computable-reductions-and-rices-theorem-examples` | B | computability-theory | 606 | `computable-reductions-and-rices-theorem` |
| 18 | `the-cook-levin-theorem` | A | computability-theory | 621 | `p-np-conp-and-polynomial-reductions` |
| 18 | `the-cook-levin-theorem-examples` | B | computability-theory | 622 | `the-cook-levin-theorem` |
| 19 | `space-complexity-savitch-and-tqbf` | A | computability-theory | 625 | `p-np-conp-and-polynomial-reductions`, `graphs-walks-and-connectivity` |
| 19 | `space-complexity-savitch-and-tqbf-examples` | B | computability-theory | 626 | `space-complexity-savitch-and-tqbf` |
| 19 | `randomized-complexity-and-amplification` | A | computability-theory | 635 | `p-np-conp-and-polynomial-reductions`, `finite-probability-spaces-and-random-variables` |
| 19 | `randomized-complexity-and-amplification-examples` | B | computability-theory | 636 | `randomized-complexity-and-amplification` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `computable-reductions-and-rices-theorem` — Computable Reductions and Rice's Theorem (16 item(s))

- `def-computable-many-one-reduction` · definition — Computable many-one reductions between languages
- `lem-many-one-reducibility-is-a-preorder` · lemma — Computable many-one reducibility is reflexive and transitive
- `thm-many-one-reductions-transfer-decidability-and-recognizability` · theorem — Computable many-one reductions transfer decidability and recognizability backward
- `def-ce-hardness-and-completeness` · definition — Computably enumerable hardness and completeness under computable many-one reductions
- `thm-machine-acceptance-is-ce-complete` · theorem — The Turing-machine acceptance problem is computably enumerable complete
- `def-turing-reduction` · definition — Turing reductions via oracle deciders
- `lem-many-one-implies-turing-reduction` · lemma — Every computable many-one reduction induces a Turing reduction
- `prop-the-converse-fails` · proposition — Turing reducibility is strictly weaker than computable many-one reducibility
- `def-index-set-and-extensional-machine-property` · definition — Index sets and extensional properties of Turing-machine languages
- `lem-rice-witness-machine-construction` · lemma — A nontrivial extensional property admits a uniform witness machine construction
- `thm-rices-theorem` · theorem — Every nontrivial extensional property of Turing-machine languages is undecidable
- `cor-standard-semantic-machine-properties-are-undecidable` · corollary — Standard semantic properties such as emptiness, finiteness, regularity, and context-freedom are undecidable
- `thm-rice-shapiro-positive-information-direction` · theorem — Recognizable extensional properties are positively witnessed by finite information
- `prop-syntactic-properties-lie-outside-rices-theorem` · proposition — Syntactic machine properties lie outside the scope of Rice's theorem
- `fs-reductions-may-reverse-yes-and-no` · false-statement — FALSE: a valid many-one reduction may reverse yes-instances and no-instances
- `fs-rices-theorem-applies-to-state-count` · false-statement — FALSE: Rice's theorem applies to having at most a fixed number of states

### `computable-reductions-and-rices-theorem-examples` — Computable Reductions and Rice's Theorem: Examples and Counterexamples (3 item(s))

- `ex-many-one-reductions-transfer-decidability-and-recognizability` · example — Using A_TM ≤m E_TM^c to transfer undecidability and recognizability information
- `ex-syntactic-properties-lie-outside-rices-theorem` · example — Adding an unreachable state changes syntax without changing the recognized language
- `cex-reductions-may-reverse-yes-and-no` · counterexample — A reduction to the complement is not a reduction to the original target

### `the-cook-levin-theorem` — The Cook--Levin Theorem (16 item(s))

- `def-boolean-formula-cnf-and-sat` · definition — Boolean formulas, conjunctive normal form, and the satisfiability language SAT
- `prop-sat-is-in-np` · proposition — SAT lies in NP
- `def-bounded-computation-tableau` · definition — A bounded computation tableau for a nondeterministic Turing-machine run
- `lem-tableau-cell-alphabet-is-constant` · lemma — For a fixed machine, each tableau cell ranges over a constant-size extended alphabet
- `def-local-tableau-window` · definition — Local 2×3 tableau windows and legality
- `lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal` · lemma — A tableau is legal exactly when every local window and boundary condition is legal
- `lem-exactly-one-symbol-constraints-have-polynomial-size` · lemma — The exactly-one-symbol constraints have polynomial size
- `lem-start-accept-and-transition-constraints-have-polynomial-size` · lemma — The start, accept, and transition constraints have polynomial size
- `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs` · lemma — The Cook--Levin formula is satisfiable if and only if an accepting bounded tableau exists
- `lem-cook-levin-map-is-polynomial-time` · lemma — The Cook--Levin reduction map is computable in polynomial time
- `thm-cook-levin-sat-is-np-complete` · theorem — SAT is NP-complete
- `def-tseitin-extension-variable` · definition — Tseitin extension variables for subformulas
- `lem-tseitin-transformation-is-linear-size-and-equisatisfiable` · lemma — The Tseitin transformation has linear size and preserves satisfiability
- `thm-three-sat-is-np-complete` · theorem — 3-SAT is NP-complete
- `fs-cook-levin-enumerates-all-branches` · false-statement — FALSE: the Cook--Levin reduction enumerates all nondeterministic branches
- `fs-naive-distribution-to-cnf-is-always-polynomial` · false-statement — FALSE: distributing an arbitrary formula into CNF always has polynomial size

### `the-cook-levin-theorem-examples` — The Cook--Levin Theorem: Examples and Counterexamples (3 item(s))

- `ex-tableau-cell-alphabet-is-constant` · example — Counting the constant-size extended alphabet for a fixed nondeterministic machine
- `ex-three-sat-is-np-complete` · example — Converting a small Boolean formula to equisatisfiable 3-CNF with extension variables
- `cex-cook-levin-enumerates-all-branches` · counterexample — A machine with two branches shows that one satisfying tableau need not encode every branch

### `space-complexity-savitch-and-tqbf` — Space Complexity, Savitch's Theorem, and TQBF (17 item(s))

- `def-pspace-and-npspace` · definition — The classes PSPACE and NPSPACE
- `lem-space-bounded-machines-have-exponentially-many-configurations` · lemma — A machine using space s(n) has at most exponentially many configurations
- `def-bounded-reachability-recursion` · definition — The bounded reachability recursion for directed paths of length at most 2^i
- `lem-bounded-reachability-recursion-is-correct` · lemma — The bounded reachability recursion is correct
- `lem-bounded-reachability-uses-logarithmic-recursion-depth` · lemma — The bounded reachability recursion uses logarithmic recursion depth
- `thm-savitchs-theorem` · theorem — Savitch's theorem: NSPACE(s(n)) is contained in DSPACE(s(n)^2)
- `cor-pspace-equals-npspace-and-is-closed-under-complement` · corollary — PSPACE equals NPSPACE and is closed under complement
- `def-quantified-boolean-formula-and-tqbf` · definition — Quantified Boolean formulas and the language TQBF
- `prop-tqbf-is-in-pspace` · proposition — TQBF is in PSPACE
- `def-reachable-configuration-formula` · definition — The quantified formula expressing reachability between two configurations
- `lem-quantifier-reuse-keeps-reachability-formulas-polynomial` · lemma — Quantifier reuse keeps the reachability formulas polynomial in size
- `thm-tqbf-is-pspace-complete` · theorem — TQBF is PSPACE-complete
- `def-quantified-formula-game` · definition — The quantified formula game for a quantified Boolean formula
- `thm-tqbf-truth-iff-existential-player-has-a-winning-strategy` · theorem — A quantified Boolean formula is true if and only if the existential player has a winning strategy in its game
- `def-alternating-polynomial-time` · definition — Alternating polynomial time and the class AP
- `thm-ap-equals-pspace` · theorem — AP equals PSPACE
- `fs-savitch-stores-the-whole-configuration-graph` · false-statement — FALSE: Savitch's algorithm stores the whole configuration graph

### `space-complexity-savitch-and-tqbf-examples` — Space Complexity, Savitch's Theorem, and TQBF: Examples and Counterexamples (3 item(s))

- `ex-bounded-reachability-recursion-is-correct` · example — A four-vertex digraph where the bounded reachability recursion finds a path via a midpoint
- `ex-ap-equals-pspace` · example — An alternating machine for a quantified Boolean formula
- `cex-savitch-stores-the-whole-configuration-graph` · counterexample — A Savitch recursion that never materializes the full configuration graph

### `randomized-complexity-and-amplification` — Randomized Complexity and Amplification (17 item(s))

- `def-probabilistic-polynomial-time-machine` · definition — Probabilistic polynomial-time Turing machines
- `def-rp-corp-zpp-bpp-and-pp` · definition — The classes RP, coRP, ZPP, BPP, and PP
- `thm-zpp-equals-rp-intersection-corp` · theorem — ZPP equals RP intersection coRP
- `lem-majority-error-bound-from-chebyshev` · lemma — Chebyshev bounds the majority error of repeated Bernoulli trials
- `thm-bpp-amplification-to-inverse-polynomial-error` · theorem — BPP amplification to inverse-polynomial error
- `lem-chernoff-bound-for-bernoulli-trials` · lemma — A Chernoff bound for sums of independent Bernoulli trials
- `thm-bpp-amplification-to-exponentially-small-error` · theorem — BPP amplification to exponentially small error
- `thm-rp-one-sided-amplification` · theorem — RP admits one-sided amplification to exponentially small error
- `thm-adleman-bpp-is-contained-in-p-poly` · theorem — Adleman's theorem: BPP is contained in P/poly
- `def-pairwise-independent-hash-family` · definition — Pairwise independent hash families
- `lem-affine-finite-field-hashes-are-pairwise-independent` · lemma — Affine maps over a finite field form a pairwise independent hash family
- `thm-freivalds-matrix-product-verification` · theorem — Freivalds' algorithm verifies a matrix product in randomized polynomial time with one-sided error
- `def-polynomial-identity-testing` · definition — Polynomial identity testing
- `thm-schwartz-zippel-lemma` · theorem — The Schwartz-Zippel lemma
- `cor-pit-is-in-corp` · corollary — Polynomial identity testing is in coRP
- `fs-reusing-random-bits-amplifies-success` · false-statement — FALSE: reusing the same random bits amplifies success
- `fs-pp-has-bounded-error-away-from-one-half` · false-statement — FALSE: every PP algorithm has bounded error separated from one half by a fixed constant

### `randomized-complexity-and-amplification-examples` — Randomized Complexity and Amplification: Examples and Counterexamples (3 item(s))

- `ex-majority-error-bound-from-chebyshev` · example — A concrete majority-vote error estimate from Chebyshev's inequality
- `ex-pit-is-in-corp` · example — A random evaluation test that separates the zero polynomial from x^2-y^2
- `cex-reusing-random-bits-amplifies-success` · counterexample — Repeating a randomized test with the same coin string gives no amplification

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 7 — group reading digest, `frontier-29`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
