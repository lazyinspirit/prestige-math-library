# Frontier 29 — Step 8 adjudication, group g

## Outcome

Adjudicated all 33 exact rejection tuples owned by batches 18 and 19: 12
`confirmed_fatal`, 17 `confirmed_nonfatal`, and 4 `false_positive`. The twelve
fatal outcomes licensed twelve item repairs and twelve matching defect-ledger
rows. No nonfatal or false-positive item was edited. There were no incoming
alerts, outgoing cross-group findings, or published-item repairs.

## Rejections and dispositions

| item | outcome | disposition |
|---|---|---|
| `cex-cook-levin-enumerates-all-branches` | `confirmed_fatal` | Replaced the true statement-refuted sentence by the actual enumeration slogan; the repaired proof now derives branch-free formula construction from the fixed local constraint families and uses the two-branch machine to show that one satisfying assignment records only one branch. |
| `cex-reductions-may-reverse-yes-and-no` | `confirmed_fatal` | Replaced the preserving example by an actually answer-reversing map, showed directly that it fails the reduction criterion to `B`, and showed that it is instead a reduction to the complement of `B`. |
| `def-bounded-computation-tableau` | `confirmed_fatal` | Restricted the tableau to a nondeterministic one-tape machine and imposed `T >= |w|`; one state tag now records the unique head and the initial row has room for the input. |
| `def-polynomial-identity-testing` | `false_positive` | The definition makes no unconditional coRP claim. Its later corollary separately assumes a polynomial-time constructible sample set whose size dominates the degree, so finite fields with larger degree bounds do not contradict this definition. No edit. |
| `def-probabilistic-polynomial-time-machine` | `confirmed_fatal` | Defined acceptance probability over a fixed valid random-prefix length and proved its invariance under larger padding. |
| `def-reachable-configuration-formula` | `confirmed_fatal` | Recast the recursion as an open prenex formula: the freshly renamed previous quantifier prefix is moved before a quantifier-free matrix, and endpoint substitution produces a closed QBF. Pair-equality blocks also make the two-comparison description exact. |
| `def-rp-corp-zpp-bpp-and-pp` | `confirmed_fatal` | Each of RP, coRP, BPP, and PP now explicitly quantifies the existence of a probabilistic polynomial-time witness machine satisfying its probability conditions. |
| `def-tseitin-extension-variable` | `confirmed_fatal` | Added the missing atomic-variable and constant constraints and stated the child-variable form of each composite constraint, covering atomic and constant roots. |
| `ex-ap-equals-pspace` | `confirmed_nonfatal` | The alternating prefix machine is an immediate construction from the quantified-game definition; the theorem citation is broader than needed. No edit. |
| `ex-many-one-reductions-transfer-decidability-and-recognizability` | `confirmed_fatal` | Corrected the false direction: target recognizability pulls backward, while source nonrecognizability pushes forward by contrapositive. |
| `ex-pit-is-in-corp` | `false_positive` | The exact computation gives error `1/3` directly and hence the asserted one-sided behavior; it does not rely on the general corollary's sufficient sample-size bound. No edit. |
| `fs-cook-levin-enumerates-all-branches` | `confirmed_nonfatal` | The omitted bridge is the immediately preceding local-constraint construction; the false slogan and conclusion are correct. No edit. |
| `fs-reusing-random-bits-amplifies-success` | `confirmed_nonfatal` | Fresh independence is explicit in the cited theorem's construction, and perfect correlation under bit reuse is elementary. No edit. |
| `fs-rices-theorem-applies-to-state-count` | `false_positive` | The item uses Rice's theorem's stated scope condition; it does not infer the converse that every nonextensional property is decidable. No edit. |
| `lem-chernoff-bound-for-bernoulli-trials` | `confirmed_nonfatal` | The Bernoulli mass function is the standard definition and appears in the cited lemma's immediate dependency; the expectation calculation is correct. No edit. |
| `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs` | `confirmed_fatal` | Added the one-tape, halting, tape-position, and input-width hypotheses required for the bounded-tableau term in both the statement and Given block. |
| `lem-cook-levin-map-is-polynomial-time` | `confirmed_nonfatal` | Choosing `T=max(p(n),n)` is an immediate local proof-step closure and leaves the theorem unchanged. No edit. |
| `lem-majority-error-bound-from-chebyshev` | `confirmed_fatal` | Added `k >= 1` to the statement and Given block, making both `9/k` and the positive Chebyshev threshold defined. |
| `lem-many-one-reducibility-is-a-preorder` | `confirmed_nonfatal` | Closure of total computable functions under composition is the elementary machine that runs the first computation and then the second. No edit. |
| `lem-quantifier-reuse-keeps-reachability-formulas-polynomial` | `confirmed_nonfatal` | The recurrence has two guarded pair-comparison blocks, containing four component equalities; either count gives `O(m)` new symbols and the conclusion is unchanged. No edit. |
| `lem-rice-witness-machine-construction` | `confirmed_nonfatal` | Sending malformed strings to a fixed empty-language machine is an immediate total extension of the displayed coded-pair construction. No edit. |
| `lem-space-bounded-machines-have-exponentially-many-configurations` | `confirmed_nonfatal` | The nondeterministic multitape model is defined on the prerequisite complexity page and is the immediate finite-valued extension of the cited deterministic model; the count is correct. No edit. |
| `lem-start-accept-and-transition-constraints-have-polynomial-size` | `false_positive` | “Allowed local update” names the complete local row-to-row rule, including unchanged off-head cells and repeated halting rows. No edit. |
| `prop-sat-is-in-np` | `confirmed_nonfatal` | Rejecting malformed encodings is an immediate verifier case; the proposition and certificate construction remain correct. No edit. |
| `prop-syntactic-properties-lie-outside-rices-theorem` | `confirmed_fatal` | Replaced the invalid arbitrary-machine witness by two explicit extensionally equivalent pairs, one crossing the ten-state threshold and one crossing the unreachable-state truth value. |
| `thm-adleman-bpp-is-contained-in-p-poly` | `confirmed_nonfatal` | Choosing once the single amplified machine supplied by the cited theorem makes its length restrictions uniform; this is an immediate proof closure. No edit. |
| `thm-bpp-amplification-to-exponentially-small-error` | `confirmed_nonfatal` | Any fixed tie rule makes the repeated machine total, and treating a tie as a bad event preserves the displayed upper bound. No edit. |
| `thm-freivalds-matrix-product-verification` | `confirmed_nonfatal` | Identifying a vector with an `n`-by-1 matrix types every product under the cited rectangular matrix-product definition. No edit. |
| `thm-rice-shapiro-positive-information-direction` | `confirmed_fatal` | Removed the invalid partial-function-class application. A direct two-part reduction from the nonrecognizable complement of `A_TM` now proves existence of a finite member of the property and upward closure above it. |
| `thm-rices-theorem` | `confirmed_nonfatal` | Rejecting malformed pair encodings before invoking the witness map immediately completes the decider on all binary words. No edit. |
| `thm-rp-one-sided-amplification` | `confirmed_nonfatal` | At `k=0`, the always-reject machine has false-negative probability `1=2^0`; the omitted boundary case is immediate and the statement is true. No edit. |
| `thm-three-sat-is-np-complete` | `confirmed_nonfatal` | The cited Tseitin proof supplies explicit constant templates during one parse-tree traversal, immediately giving polynomial-time computability. No edit. |
| `thm-zpp-equals-rp-intersection-corp` | `confirmed_nonfatal` | Markov's inequality at the finite cutoff follows by applying the finite-space result to the bounded random prefix; the theorem remains correct. No edit. |

The exact `(id, model, context_sha256)` tuples, pre-edit guard hashes, notes,
and outcomes are appended to `research/frontier-29-judge-adjudications.jsonl`.
The twelve fatal rows are recorded as `frontier-29-A8-g-001` through
`frontier-29-A8-g-012` in `research/defect-ledger.jsonl`; their append input is
`research/frontier-29-alpha-g-step8-defect-rows.json`.

## Sources consulted

- H. G. Rice, *Classes of Recursively Enumerable Sets and Their Decision
  Problems* (1953), original paper text:
  <https://www.scribd.com/document/692967974/S0002-9947-1953-0053041-6>.
  Theorem 4 rules out a completely recursively enumerable class containing
  only infinite sets; Theorem 6 and Corollary A state that such a class which
  contains a finite set must contain every recursively enumerable superset.
  These are exactly the finite-witness and upward-closure claims established
  constructively in the repaired Rice--Shapiro item.
- L. J. Stockmeyer and A. R. Meyer, *Word Problems Requiring Exponential
  Time* (1973), original paper:
  <https://people.csail.mit.edu/meyer/meyer-stockmeyer-word-probs.pdf>.
  Theorem 4.3 and its proof construct polynomial-size quantified reachability
  formulas by carrying one recursive copy under fresh quantified variables;
  the displayed recurrence has size at most `(k+1) poly(n)`. This supports the
  repaired one-copy prenex recurrence.
- S. Cook, *The Complexity of Theorem-Proving Procedures* (1971), original
  paper transcription:
  <https://www.cs.cmu.edu/~15455/resources/Cook1971-complx-thm-proof.pdf>.
  The proof reduces to a one-tape machine, constructs a polynomial-size formula
  from bounded local computation data, and states polynomial-time
  constructibility. This supports the repaired one-tape tableau scope and the
  branch-free local-constraint construction.
- S. Arora and B. Barak, *Computational Complexity: A Modern Approach*, draft:
  <https://theory.cs.princeton.edu/complexity/book.pdf>. Section 4.3 states the
  single-copy selector construction, its additive `O(m)` size recurrence, and
  polynomial-time conversion of the final formula to prenex form. It was used
  to type-check the exact repaired syntax against the page's prenex convention.

## Alerts and rejudge targets

There were no incoming alerts and no cross-group defect was discovered. The
rejudge targets are exactly:

- `cex-cook-levin-enumerates-all-branches`
- `cex-reductions-may-reverse-yes-and-no`
- `def-bounded-computation-tableau`
- `def-probabilistic-polynomial-time-machine`
- `def-reachable-configuration-formula`
- `def-rp-corp-zpp-bpp-and-pp`
- `def-tseitin-extension-variable`
- `ex-many-one-reductions-transfer-decidability-and-recognizability`
- `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs`
- `lem-majority-error-bound-from-chebyshev`
- `prop-syntactic-properties-lie-outside-rices-theorem`
- `thm-rice-shapiro-positive-information-direction`

## Checks

- Focused `precheck`: 7 proof-bearing repaired items checked, 0 failing.
- Focused `rendercheck`: 12 repaired items checked; frontmatter and all math
  spans parsed successfully.
- Repository `depcheck --quiet`: no cycles, all references resolve, and no
  draft item appears on a published page; the command retained 375 pre-existing
  warnings outside this repair set.
- Batch-18 and batch-19 strict proof-contract checks: 30/30 items in each
  contract, 0 errors and 0 warnings. Their citation-fidelity checks found all
  72 and 68 recorded quotes respectively, with no widening candidate.
- `defect-ledger validate --run frontier-29`: 476 rows checked, 0 errors.
- Exact defect/adjudication coverage check: 476 frontier-29 defect rows checked,
  0 errors; every confirmed-fatal adjudication has exactly one owning row and
  the generated view is current.
- Final `step8-scope check --run frontier-29`: passed with 7 groups, 755
  partitioned items, 0 open rejection rows, and no cross-group alerts.
- Final Step-8 guard: 126/126 whole-run changes licensed; passed with no
  unlicensed edit.

## Blockers

No group-g mathematical, ownership, alert, validation, or evidence blocker
remains.
