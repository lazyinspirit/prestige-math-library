# Step 8 adjudication — group **a**, run `frontier-32`

You are the group Alpha for batches **1**, **2**, **19**: 5 A/B pair(s), 10 page(s), 109 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-32-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-32-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `boolean-circuits-and-nonuniform-complexity` | A | computability-theory | 631 | `the-cook-levin-theorem`, `finite-counting-and-binomial-coefficients`, `logarithmic-space-nl-and-reachability` |
| 1 | `boolean-circuits-and-nonuniform-complexity-examples` | B | computability-theory | 632 | `boolean-circuits-and-nonuniform-complexity` |
| 1 | `counting-complexity-and-sharpp` | A | computability-theory | 637 | `randomized-complexity-and-amplification`, `the-cook-levin-theorem` |
| 1 | `counting-complexity-and-sharpp-examples` | B | computability-theory | 638 | `counting-complexity-and-sharpp` |
| 2 | `interactive-proof-systems-and-public-coins` | A | computability-theory | 639 | `randomized-complexity-and-amplification`, `space-complexity-savitch-and-tqbf` |
| 2 | `interactive-proof-systems-and-public-coins-examples` | B | computability-theory | 640 | `interactive-proof-systems-and-public-coins` |
| 2 | `kolmogorov-complexity-and-algorithmic-randomness` | A | computability-theory | 653 | `acceptable-numberings-smn-and-the-recursion-theorem`, `randomized-complexity-and-amplification`, `finite-probability-spaces-and-random-variables` |
| 2 | `kolmogorov-complexity-and-algorithmic-randomness-examples` | B | computability-theory | 654 | `kolmogorov-complexity-and-algorithmic-randomness` |
| 19 | `oracle-computability-the-jump-and-turing-degrees` | A | computability-theory | 615 | `the-arithmetical-hierarchy-and-posts-theorem` |
| 19 | `oracle-computability-the-jump-and-turing-degrees-examples` | B | computability-theory | 616 | `oracle-computability-the-jump-and-turing-degrees` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `boolean-circuits-and-nonuniform-complexity` — Boolean Circuits and Nonuniform Complexity (16 item(s))

- `def-boolean-circuit-size-depth-fanin-and-basis` · definition — Boolean circuits: basis, fan-in, size, and depth
- `def-circuit-family-and-p-poly` · definition — Circuit families and P/poly
- `thm-p-is-contained-in-p-poly` · theorem — Every polynomial-time language has polynomial-size circuits
- `def-polynomial-advice-machine` · definition — Polynomial advice for a deterministic machine
- `thm-p-poly-equals-p-with-polynomial-advice` · theorem — P/poly equals polynomial time with polynomial advice
- `thm-undecidable-languages-exist-in-p-poly` · theorem — Some undecidable languages have polynomial-size circuits
- `def-formula-and-branching-program` · definition — Boolean formulas and deterministic branching programs
- `def-ac-zero-nc-one-and-nc` · definition — AC0, NC1, and NC under a stated uniformity convention
- `prop-nc-one-is-contained-in-l-and-l-in-nc-two` · proposition — NC1 is contained in L, and L is contained in NC2
- `lem-counting-circuits-of-bounded-size` · lemma — Counting bounded-size Boolean circuits
- `thm-shannon-almost-all-functions-require-exponential-circuits` · theorem — Almost all Boolean functions require exponential circuit size
- `def-circuit-sat` · definition — Circuit satisfiability
- `thm-circuit-sat-is-np-complete` · theorem — CircuitSAT is NP-complete
- `thm-karp-lipton-collapse` · theorem — The Karp--Lipton collapse
- `fs-polynomial-size-implies-uniform-generation` · false-statement — Polynomial-size circuits imply a uniform polynomial-time generator
- `fs-shannon-counting-gives-an-explicit-hard-function` · false-statement — Shannon counting gives an explicit circuit-hard function

### `boolean-circuits-and-nonuniform-complexity-examples` — Boolean Circuits and Nonuniform Complexity: Examples and Counterexamples (3 item(s))

- `ex-p-poly-equals-p-with-polynomial-advice` · example — Hardwiring a length-indexed advice string
- `ex-karp-lipton-collapse` · example — A Sigma_2 verification of a candidate SAT circuit
- `cex-polynomial-size-implies-uniform-generation` · counterexample — Unary circuits for an undecidable language are not uniformly generated

### `counting-complexity-and-sharpp` — Counting Complexity and Sharp-P (17 item(s))

- `def-sharpp-and-gap-p-functions` · definition — Sharp-P and Gap-P functions
- `def-number-sat` · definition — NumberSAT
- `prop-number-sat-is-in-sharpp` · proposition — NumberSAT belongs to Sharp-P
- `def-parsimonious-reduction` · definition — Parsimonious reductions between counting functions
- `lem-cook-levin-can-be-made-parsimonious` · lemma — The Cook--Levin construction can be made parsimonious
- `thm-number-sat-is-sharpp-complete` · theorem — NumberSAT is Sharp-P-complete under parsimonious reductions
- `def-fp-function-class` · definition — The nonnegative function class FP
- `prop-fp-is-contained-in-sharpp` · proposition — FP is contained in Sharp-P
- `prop-sharpp-is-closed-under-sum-and-product` · proposition — Sharp-P is closed under sum and product
- `def-majority-sat` · definition — MajoritySAT
- `thm-pp-is-sign-testing-gap-p` · theorem — PP is strict sign testing for Gap-P
- `cor-majority-sat-is-pp-complete` · corollary — MajoritySAT is PP-complete
- `thm-pp-is-closed-under-complement` · theorem — PP is closed under complement
- `def-p-with-a-sharpp-oracle` · definition — Polynomial time with a Sharp-P oracle
- `prop-np-is-contained-in-p-sharpp` · proposition — NP is contained in P with a Sharp-P oracle
- `fs-sharpp-is-a-language-class` · false-statement — Sharp-P is a language class
- `fs-every-many-one-reduction-is-parsimonious` · false-statement — Every decision many-one reduction is parsimonious

### `counting-complexity-and-sharpp-examples` — Counting Complexity and Sharp-P: Examples and Counterexamples (3 item(s))

- `ex-cook-levin-can-be-made-parsimonious` · example — A two-branch computation and its parsimonious tableau formula
- `ex-np-is-contained-in-p-sharpp` · example — Deciding satisfiability by a NumberSAT oracle query
- `cex-sharpp-is-a-language-class` · counterexample — NumberSAT is not a Boolean membership predicate

### `interactive-proof-systems-and-public-coins` — Interactive Proof Systems and Public Coins (16 item(s))

- `def-interactive-proof-transcript-round-and-strategy` · definition — Interactive-proof transcripts, rounds, and prover strategies
- `def-completeness-and-soundness` · definition — Completeness and soundness of an interactive protocol
- `def-ip` · definition — The class IP
- `prop-np-is-contained-in-ip` · proposition — NP is contained in IP
- `lem-sequential-repetition-amplifies-error` · lemma — Sequential repetition amplifies completeness and soundness gaps
- `def-private-coin-public-coin-and-arthur-merlin-protocol` · definition — Private-coin, public-coin, and Arthur--Merlin protocols
- `lem-hashing-commits-public-randomness` · lemma — Pairwise-independent hashing controls fibre size
- `thm-private-coin-ip-equals-public-coin-ip` · theorem — Private-coin IP equals public-coin IP
- `def-protocol-game-tree-and-value` · definition — Protocol game trees and their values
- `lem-optimal-prover-may-be-deterministic` · lemma — An optimal prover may be deterministic
- `lem-protocol-value-is-computable-in-polynomial-space` · lemma — A polynomial-round protocol value is computable in polynomial space
- `thm-ip-is-contained-in-pspace` · theorem — IP is contained in PSPACE
- `def-graph-nonisomorphism-protocol` · definition — The graph-nonisomorphism interactive protocol
- `thm-graph-nonisomorphism-is-in-ip` · theorem — Graph nonisomorphism is in IP
- `fs-soundness-quantifies-only-over-honest-provers` · false-statement — False: soundness quantifies only over honest provers
- `fs-the-prover-must-run-in-polynomial-time` · false-statement — False: the prover must run in polynomial time

### `interactive-proof-systems-and-public-coins-examples` — Interactive Proof Systems and Public Coins: Examples and Counterexamples (3 item(s))

- `ex-sequential-repetition-amplifies-error` · example — Sequential repetition of a constant-gap protocol
- `ex-graph-nonisomorphism-is-in-ip` · example — The graph-nonisomorphism protocol on a graph pair
- `cex-soundness-quantifies-only-over-honest-provers` · counterexample — A cheating-prover witness to the soundness quantifier

### `kolmogorov-complexity-and-algorithmic-randomness` — Kolmogorov Complexity and Algorithmic Randomness (22 item(s))

- `def-description-machine-and-plain-kolmogorov-complexity` · definition — Description machines and plain Kolmogorov complexity
- `def-optimal-description-machine` · definition — Optimal description machines
- `thm-invariance-theorem-for-plain-complexity` · theorem — Invariance theorem for plain Kolmogorov complexity
- `lem-most-strings-are-incompressible` · lemma — Most finite strings are incompressible
- `thm-kolmogorov-complexity-is-not-computable` · theorem — Kolmogorov complexity is not computable
- `def-conditional-kolmogorov-complexity` · definition — Conditional Kolmogorov complexity
- `lem-basic-conditional-complexity-inequalities` · lemma — Basic conditional-complexity inequalities
- `def-prefix-free-machine-and-prefix-complexity` · definition — Prefix-free machines and prefix complexity
- `thm-kraft-inequality` · theorem — Kraft inequality and effective prefix-code allocation
- `thm-invariance-for-prefix-complexity` · theorem — Invariance theorem for prefix complexity
- `thm-symmetry-of-information-up-to-logarithmic-terms` · theorem — Symmetry of information up to logarithmic terms
- `def-incompressibility-method` · definition — The incompressibility method
- `def-effectively-open-set-in-cantor-space` · definition — Effectively open sets in Cantor space
- `def-martin-lof-test-and-random-sequence` · definition — Martin-Löf tests and random sequences
- `lem-universal-martin-lof-test-exists` · lemma — A universal Martin-Löf test exists
- `thm-levin-schnorr-characterization` · theorem — Levin--Schnorr characterization of Martin-Löf randomness
- `def-computable-martingale` · definition — Computable martingales on binary strings
- `thm-martin-lof-randomness-implies-computable-randomness` · theorem — Martin-Löf randomness implies computable randomness
- `def-effective-hausdorff-dimension` · definition — Effective Hausdorff dimension
- `thm-effective-dimension-is-liminf-prefix-complexity-rate` · theorem — Effective dimension is the liminf prefix-complexity rate
- `fs-kolmogorov-complexity-is-an-absolute-integer` · false-statement — False: Kolmogorov complexity is an absolute integer
- `fs-normality-implies-algorithmic-randomness` · false-statement — False: normality implies algorithmic randomness

### `kolmogorov-complexity-and-algorithmic-randomness-examples` — Kolmogorov Complexity and Algorithmic Randomness: Examples and Counterexamples (3 item(s))

- `ex-most-strings-are-incompressible` · example — Counting incompressible strings of a fixed length
- `ex-effective-dimension-is-liminf-prefix-complexity-rate` · example — An effective-dimension calculation from prefix complexity
- `cex-kolmogorov-complexity-is-an-absolute-integer` · counterexample — Changing an optimal machine changes finite-string complexity

### `oracle-computability-the-jump-and-turing-degrees` — Oracle Computability, the Jump, and Turing Degrees (23 item(s))

- `def-oracle-turing-machine` · definition
- `def-turing-reducibility-and-equivalence` · definition
- `lem-turing-reducibility-is-a-preorder` · lemma
- `def-turing-degree-and-degree-order` · definition
- `lem-degree-order-is-representative-independent` · lemma
- `def-tagged-join-of-oracles` · definition
- `thm-turing-degrees-form-an-upper-semilattice` · theorem
- `def-turing-jump` · definition
- `lem-jump-is-well-defined-on-degrees` · lemma
- `thm-every-oracle-is-strictly-below-its-jump` · theorem
- `thm-jump-is-monotone` · theorem
- `def-oracle-ce-completeness` · definition
- `thm-relative-halting-is-oracle-ce-complete` · theorem
- `cor-finite-jumps-match-arithmetical-levels` · corollary
- `def-truth-table-reduction` · definition
- `lem-total-oracle-functional-has-computable-use-bound` · lemma
- `prop-truth-table-implies-turing-reduction` · proposition
- `def-computably-dominated-oracle` · definition
- `lem-halting-oracle-is-not-computably-dominated` · lemma
- `thm-computably-dominated-characterizes-truth-table-reducibility` · theorem
- `thm-some-turing-reductions-are-not-truth-table-reductions` · theorem
- `fs-an-oracle-machine-reads-the-infinite-oracle-at-once` · false-statement
- `fs-degree-join-is-set-union` · false-statement

### `oracle-computability-the-jump-and-turing-degrees-examples` — Oracle Computability, the Jump, and Turing Degrees: Examples and Counterexamples (3 item(s))

- `ex-degree-order-is-representative-independent` · example
- `ex-some-turing-reductions-are-not-truth-table-reductions` · example
- `cex-an-oracle-machine-reads-the-infinite-oracle-at-once` · counterexample

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

2 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-24fff07f65ed1393974a6566 · `thm-levin-schnorr-characterization`** (from group a, would-be-fatal) — Proof step 1.1 says that K(X↾n)<n-c for infinitely many n, for one fixed c, yields a Martin-Löf test witnessing nonrandomness. A fixed deficiency only supplies a cover with one fixed measure scale; the Levin--Schnorr contrapositive needs unbounded deficiencies (with correctly shifted test levels). As written, the two proof directions do not establish the stated iff.
- **s8a-c8e9361232de61bf9cbc2169 · `thm-computably-dominated-characterizes-truth-table-reducibility`** (from group a, would-be-fatal) — In reverse-direction step 1.2, the hypothesis and def-truth-table-reduction yield a bit-valued functional for a set Y, but the proof immediately asserts an everywhere-total natural-valued functional Ψ computing an arbitrary X-computable function f on every oracle. Under the stated definition this does not follow without the canonical coding/time-bound construction; naively searching a coded graph may fail to halt on other oracles. The cited source's proof uses a bounded computation theorem at this point, which is absent here.

Append one owning-group disposition per warning to `research/frontier-32-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-32`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Work only on `assigned_items`, using the live tuples
and retained fatal repair licences as evidence. Rerun focused checks where supported.

Resolve every assigned finding in this pass, keeping the existing mathematics
and detail except where an exact fatal licence requires correction. A serial
reviewer must establish ownership before editing an ambiguous record. If the
detector or repair authority is wrong, report the cause; unchanged retries stop.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
including the envelope's `fatal_repair_licences`. These bind validated original
rejections to the pre-Step-8 baseline even after a repair makes their verdicts
stale. Empty `live_tuples` does not revoke these licences. Use them only to
complete the assigned repair; do not readjudicate settled findings.
You may also correct a documentary contract, manifest, impact or verification
record to match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
