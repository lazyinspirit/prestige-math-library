# Step 8 — group **d**, run `frontier-28`

You are the group Alpha for batches **9**, **11**: 3 A/B pair(s), 6 page(s), 47 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-28-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-28-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 9 | `leaf-reducibility-and-wonderful-families` | A | combinatorics | 425 | `small-graph-erdos-hajnal-consequences`, `iterative-restriction-and-comb-extraction-lemmas` |
| 9 | `leaf-reducibility-and-wonderful-families-examples` | B | combinatorics | 426 | `leaf-reducibility-and-wonderful-families` |
| 11 | `diagonalization-and-the-halting-problem` | A | computability-theory | 603 | `decidable-recognizable-and-enumerable-languages` |
| 11 | `diagonalization-and-the-halting-problem-examples` | B | computability-theory | 604 | `diagonalization-and-the-halting-problem` |
| 11 | `p-np-conp-and-polynomial-reductions` | A | computability-theory | 619 | `resource-bounds-and-machine-invariance` |
| 11 | `p-np-conp-and-polynomial-reductions-examples` | B | computability-theory | 620 | `p-np-conp-and-polynomial-reductions` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `leaf-reducibility-and-wonderful-families` — Leaf Reducibility and Wonderful Families (7 item(s))

- `def-wonderful-finite-family` · definition — Wonderful finite graph families
- `lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge` · lemma — A vertex mixed on an anticonnected set yields opposite adjacency on a nonedge
- `lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph` · lemma — Mixed anticonnected blocks lift pattern obstructions to the ambient graph
- `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses` · lemma — The auxiliary pattern then has a polynomial-size clique or stable set
- `lem-a-polynomial-homogeneous-set-in-the-auxiliary-pattern-yields-a-y-four-restricted-union` · lemma — A polynomial homogeneous set in the auxiliary pattern yields a $y^4$-restricted union
- `lem-star-or-special-vertex-obstructions-force-wonderfulness` · lemma — Star and special-vertex obstructions force wonderfulness
- `lem-the-e-graph-and-the-bird-graph-are-wonderful` · lemma — The $E$-graph and the Bird graph are wonderful

### `leaf-reducibility-and-wonderful-families-examples` — Leaf Reducibility and Wonderful Families — Examples (2 item(s))

- `ex-the-e-graph-sits-inside-a-one-subdivided-star-and-deletes-to-the-five-vertex-path` · example — The $E$-graph sits inside a one-subdivided star and deletes to the five-vertex path
- `ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit` · example — A six-vertex witness graph makes the Bird criterion explicit

### `diagonalization-and-the-halting-problem` — Diagonalization and the Halting Problem (15 item(s))

- `def-turing-machine-acceptance-problem` · definition — The Turing-machine acceptance problem $A_{TM}$
- `thm-machine-acceptance-is-recognizable` · theorem — The Turing-machine acceptance problem is recognizable
- `lem-diagonal-self-application-machine` · lemma — A hypothetical decider for $A_{TM}$ yields a diagonal self-application machine
- `thm-machine-acceptance-is-undecidable` · theorem — The Turing-machine acceptance problem is undecidable
- `def-halting-problem` · definition — The halting problem $HALT_{TM}$
- `thm-halting-is-recognizable-and-undecidable` · theorem — The halting problem is recognizable and undecidable
- `cor-nonhalting-is-not-recognizable` · corollary — The complement of the halting problem is not recognizable
- `thm-an-unrecognizable-language-exists` · theorem — There exists a language that is not recognizable
- `def-busy-beaver-function` · definition — The step-count busy beaver function relative to the chosen machine coding
- `thm-busy-beaver-dominates-every-total-computable-function` · theorem — The busy beaver function eventually dominates every total computable function
- `cor-busy-beaver-is-not-computable` · corollary — The busy beaver function is not computable
- `thm-totality-is-not-recognizable` · theorem — Halting on every input is not recognizable
- `thm-machine-equivalence-is-undecidable` · theorem — Language equivalence of Turing machines is undecidable
- `fs-undecidable-means-no-instance-can-be-answered` · false-statement — FALSE: undecidable means no individual instance can be answered
- `fs-diagonalization-needs-literal-source-self-reading` · false-statement — FALSE: diagonalization requires a machine to read its physical source text

### `diagonalization-and-the-halting-problem-examples` — Diagonalization and the Halting Problem: Examples and Counterexamples (3 item(s))

- `ex-diagonal-self-application-machine` · example — Building the diagonal machine against a hypothetical acceptance decider
- `ex-machine-equivalence-is-undecidable` · example — Reducing halting to language equivalence by a machine that either accepts everything or loops forever
- `cex-undecidable-means-no-instance-can-be-answered` · counterexample — An immediate-accept machine gives an easy yes-instance inside an undecidable language

### `p-np-conp-and-polynomial-reductions` — P, NP, coNP, and Polynomial Reductions (17 item(s))

- `def-p` · definition — The class P
- `def-polynomially-balanced-verifier` · definition — Polynomial-time verifiers with polynomially bounded certificates
- `def-np-by-verifiers` · definition — The class NP via polynomial-time verifiers
- `thm-verifier-and-nondeterministic-definitions-of-np-agree` · theorem — The verifier and nondeterministic definitions of NP agree
- `def-conp` · definition — The class coNP
- `prop-p-is-contained-in-np-intersection-conp` · proposition — $P \subseteq NP \cap coNP$
- `def-polynomial-time-many-one-reduction` · definition — Polynomial-time many-one reductions
- `lem-polynomial-reductions-compose` · lemma — Polynomial-time many-one reductions compose
- `thm-polynomial-reductions-transfer-p-np-and-conp-membership` · theorem — Polynomial-time many-one reductions transfer P-, NP-, and coNP-membership
- `def-np-hard-and-np-complete` · definition — NP-hard and NP-complete languages
- `prop-an-np-complete-language-in-p-implies-p-equals-np` · proposition — An NP-complete language in P forces $P=NP$
- `def-search-version-of-an-np-relation` · definition — The search problem attached to an NP verifier
- `thm-sat-search-reduces-to-sat-decision` · theorem — SAT search polynomial-time Turing reduces to SAT decision
- `def-exp-and-nexp` · definition — The classes EXP and NEXP
- `prop-np-is-contained-in-pspace-and-pspace-in-exp` · proposition — $NP \subseteq PSPACE \subseteq EXP$
- `fs-np-means-not-polynomial` · false-statement — FALSE: NP means not polynomial-time solvable
- `fs-np-complete-means-known-not-in-p` · false-statement — FALSE: NP-complete means proven not to lie in P

### `p-np-conp-and-polynomial-reductions-examples` — P, NP, coNP, and Polynomial Reductions: Examples and Counterexamples (3 item(s))

- `ex-p-is-contained-in-np-intersection-conp` · example — An even-length language sits in P, hence also in NP and coNP
- `ex-np-is-contained-in-pspace-and-pspace-in-exp` · example — Lexicographic certificate search uses polynomial space and exponential time
- `cex-np-means-not-polynomial` · counterexample — A regular parity language refutes 'NP means not polynomial'

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
`research/frontier-28-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-28`

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
