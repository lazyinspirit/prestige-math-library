# Frontier-32 Alpha-a 6b adjudication

Run: `frontier-32`  
Group: `a`  
Dispatch: `6b-a`  
Owned batches: `1`, `2`, `19`  
Date: Sunday, September 6, 2026

## Scope and evidence

I read the exact task and all three current scope files,
`research/frontier-32-step6-scope-{1,2,19}.json`, before adjudication. For each
owned batch I checked the reader report, structured reader findings, refuter
report, current routed carriers, proof-contract entries, page manifests, and
the dependency statements used by the claims. The exhaustive machine-readable
outcome is `research/frontier-32-alpha-a-6b-decisions.json`.

The retry evidence was reconciled with the live artifacts. Batch 2's reader
recovery task corrected only the routing artifact: its final result names batch
`2` and uses the actual page carrier
`interactive-proof-systems-and-public-coins`. Its one finding is byte-for-byte
the finding collected into the current scope. Batches 1 and 19 have no reader
recovery task; their successful reader/refuter result metadata and the hashes
sealed in the scope files agree with the current reports. Dispatch logs were
not used as substitutes for mathematical evidence.

The principal source ranges checked through the current coverage records and
the reader's opened-source evidence were:

- Arora--Barak, *Computational Complexity: A Modern Approach*, Chapter 6,
  Definitions 6.1--6.3, Theorems 6.7, 6.11, 6.13, 6.15, Exercises 9 and 11,
  and the CircuitSAT material at Definition 6.30 and Lemma 6.31,
  <https://theory.cs.princeton.edu/complexity/book.pdf>.
- Arora--Barak, Chapter 8, §§8.2--8.5. The private-to-public conversion in the
  current edition is Theorem 8.8 (PDF p. 167); Theorem 8.11 is the
  pairwise-independent hash construction (PDF p. 168). Goldreich's Lecture 11,
  §§11.2--11.4, supplies an independent IP semantics and IP(r) to AM(r+2)
  reference.
- Patey, *Computability Theory*, Chapter 4 §§2--6 and Chapter 5 §5.1,
  especially Theorems 5.11--5.12 (PDF pp. 160--162),
  <https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf>. Terwijn,
  Chapter 5 §§5.1--5.3, supplies the independent oracle, degree, and jump
  conventions.

## Batch 1 outcome

Batch 1 had no touched carrier and no reader finding. Its refuter found 35
fatal defects across 28 current items. I confirmed every finding against the
then-current scaffold, its exact cited dependency, and the written claim, and
made the smallest coherent in-scope repairs. Every obligation is
`confirmed_fatal`:

| Obligations | Carrier | Resolution |
| --- | --- | --- |
| `refuter:1:1` | `def-boolean-circuit-size-depth-fanin-and-basis` | Restricted constant-overhead basis changes to fixed bounded-arity, mutually simulable bases; arbitrary finite bases need not express the same functions. |
| `refuter:1:2` | `cex-polynomial-size-implies-uniform-generation` | Defined a diagonal halting tally language, its constant circuits, and the contradiction from a uniform generator. |
| `refuter:1:3` | `cex-sharpp-is-a-language-class` | Supplied formulas with NumberSAT values `3` and `2`. |
| `refuter:1:4` | `cor-majority-sat-is-pp-complete` | Supplied membership and the exact parsimonious selector construction; normalized to `p>=1` and checked `n=0`. |
| `refuter:1:5` | `ex-cook-levin-can-be-made-parsimonious` | Supplied a two-branch machine, its two tableaux, and unique auxiliary extensions. |
| `refuter:1:6` | `ex-karp-lipton-collapse` | Supplied a concrete universally/existentially quantified identity predicate and constant circuit. |
| `refuter:1:7` | `ex-np-is-contained-in-p-sharpp` | Supplied a formula, its two witnesses, and the binary oracle answer. |
| `refuter:1:8` | `ex-p-poly-equals-p-with-polynomial-advice` | Supplied a finite advised machine, hardwired circuit, and traced inputs. |
| `refuter:1:9`--`1:10` | `fs-every-many-one-reduction-is-parsimonious` | Corrected the dependency to `def-parsimonious-reduction` and computed the factor-two witness count for a fresh unused variable. |
| `refuter:1:11` | `fs-polynomial-size-implies-uniform-generation` | Derived the contradiction from the explicit undecidable constant-circuit family. |
| `refuter:1:12` | `fs-shannon-counting-gives-an-explicit-hard-function` | Separated a nonempty set of hard truth tables from an effectively selected explicit family. |
| `refuter:1:13` | `fs-sharpp-is-a-language-class` | Exhibited the non-Boolean NumberSAT values rather than merely requesting them. |
| `refuter:1:14`--`1:15` | `lem-cook-levin-can-be-made-parsimonious` | Replaced the miscitation and proof request with clocked, one-hot tableaux, explicit choice tags, biconditional auxiliaries, and a bijection. |
| `refuter:1:16` | `lem-counting-circuits-of-bounded-size` | Counted gate types and predecessor pairs explicitly for `n,s>=1`. |
| `refuter:1:17` | `prop-fp-is-contained-in-sharpp` | Used `u<f(x)` among fixed-width guesses, including the zero-output case. |
| `refuter:1:18`--`1:19` | `prop-nc-one-is-contained-in-l-and-l-in-nc-two` | Corrected the `L` citation and supplied recomputing logspace evaluation plus logspace-uniform Boolean matrix squaring. |
| `refuter:1:20` | `prop-np-is-contained-in-p-sharpp` | Constructed the verifier witness-count function and used one binary #P oracle query. |
| `refuter:1:21` | `prop-number-sat-is-in-sharpp` | Gave the exact machine, malformed-input rejection, and the `n=0` bijection. |
| `refuter:1:22` | `prop-sharpp-is-closed-under-sum-and-product` | Gave disjoint tagged branching and sequential accepting continuations, including zero counts. |
| `refuter:1:23` | `thm-circuit-sat-is-np-complete` | Supplied the verifier and assignment-preserving gate-for-connective SAT reduction. |
| `refuter:1:24`--`1:25` | `thm-karp-lipton-collapse` | Stated `NP subseteq P/poly => PH=Sigma_2^p` and supplied the SAT self-reduction consistency check, quantifier accounting, and collapse argument. |
| `refuter:1:26`--`1:27` | `thm-number-sat-is-sharpp-complete` | Corrected the parsimonious dependency and supplied the exact accepting-path/tableau/assignment equality chain. |
| `refuter:1:28`--`1:29` | `thm-p-is-contained-in-p-poly` | Replaced the tableau miscitation and instruction with configuration layers, local transition gates, and an `O(p(n)^2)` bound. |
| `refuter:1:30`--`1:31` | `thm-p-poly-equals-p-with-polynomial-advice` | Bounded gate-list advice and evaluation, then hardwired polynomial advice into the polynomial-time pair-language circuits. |
| `refuter:1:32` | `thm-pp-is-closed-under-complement` | Constructed GapP negation and constant-one addition; `1-g>0` handles the tie `g=0`. |
| `refuter:1:33` | `thm-pp-is-sign-testing-gap-p` | Proved both directions with equal-width machines and the swapped-label construction, including the strict zero boundary. |
| `refuter:1:34` | `thm-shannon-almost-all-functions-require-exponential-circuits` | Used `s=floor(2^n/(10n))` and the fixed basis size `b`; the logarithmic count is below `2^n/3` for large `n`. |
| `refuter:1:35` | `thm-undecidable-languages-exist-in-p-poly` | Defined the tally language from diagonal halting, supplied one-gate circuits at every length, and proved undecidability. |

The new dependency `thm-halting-is-recognizable-and-undecidable` is declared
where the tally proof uses it. All 27 proof-bearing contract entries were
regenerated from the live proofs, then their boundary rows were checked and
corrected for the family, iff, empty, and strict-zero cases.

## Batch 2 outcome

The 26 routed reader changes were all real repairs. Twenty-five match the
reader result and are `accepted_repair`. The sole `amended_repair` is
`thm-invariance-theorem-for-plain-complexity`: its mathematics remains the
reader's correct self-delimiting-index repair, while Alpha's required HIGH-risk
review makes the live contract carrier differ from the post-reader snapshot.

The nine material mathematical repairs are:

- `thm-graph-nonisomorphism-is-in-ip`: two fresh conjunctive challenges give
  perfect completeness and soundness at most `1/4`.
- `thm-invariance-theorem-for-plain-complexity`: a self-delimiting machine
  index gives a fixed additive constant.
- `lem-most-strings-are-incompressible`: the claim now assumes `0<=c<=n`.
- `thm-kolmogorov-complexity-is-not-computable`: the selector searches only
  length-`n` strings and transfers its bound to the fixed optimal machine.
- `def-effective-hausdorff-dimension`: the lower-semicomputable `s`-gale
  equation, success condition, and infimum are explicit.
- `fs-kolmogorov-complexity-is-an-absolute-integer`: the witness has
  `C_U(z)>1`; the empty word is no longer used invalidly.
- `lem-hashing-commits-public-randomness`: `|U|>=2` excludes the vacuous
  singleton pairwise-independence case.
- `thm-private-coin-ip-equals-public-coin-ip`: the theorem is narrowed to the
  sourced conversion and points to Arora--Barak Theorem 8.8.
- `thm-martin-lof-randomness-implies-computable-randomness`: threshold
  crossings are strict and effectively enumerable, and zero capital is
  handled before the test is formed.

The other 17 touched Kolmogorov carriers have their parser-incompatible inline
`provenance` mappings converted to block YAML with statements, dependencies,
and mathematics unchanged:
`cex-kolmogorov-complexity-is-an-absolute-integer`,
`def-computable-martingale`, `def-conditional-kolmogorov-complexity`,
`def-effectively-open-set-in-cantor-space`, `def-incompressibility-method`,
`def-martin-lof-test-and-random-sequence`,
`def-prefix-free-machine-and-prefix-complexity`,
`ex-effective-dimension-is-liminf-prefix-complexity-rate`,
`ex-most-strings-are-incompressible`, `fs-normality-implies-algorithmic-randomness`,
`lem-basic-conditional-complexity-inequalities`,
`lem-universal-martin-lof-test-exists`,
`thm-effective-dimension-is-liminf-prefix-complexity-rate`,
`thm-invariance-for-prefix-complexity`, `thm-kraft-inequality`,
`thm-levin-schnorr-characterization`, and
`thm-symmetry-of-information-up-to-logarithmic-terms`.

I confirmed and repaired all three refuter findings as fatal:

- `refuter:2:1`: `def-interactive-proof-transcript-round-and-strategy` now
  defines the transcript as the public view and excludes hidden verifier coins
  and private work state from the prover's strategy input.
- `refuter:2:2`: `def-protocol-game-tree-and-value` now uses public-information
  states carrying conditional distributions over compatible private histories;
  one prover response is maximized per public view.
- `refuter:2:3`: `thm-ip-is-contained-in-pspace` now computes that legal
  public-information value and averages hidden histories before applying the
  `2/3` versus `1/3` gap.

The reader's page finding `reader:2:1` is `confirmed_nonfatal`. The batch-2
coverage row now says Theorem 8.8, not Theorem 8.11. This correction properly
does not mutate the published page carrier. The first append classified the
coverage disposition as carrier-fixed; the append-only recovery therefore
adds a `nonfatal-recorded` row for the routed finding and retains the original
row under the explicit supplemental `gate:` decision. No shared-ledger row was
rewritten, and all references remain unique and owned.

The reader report's note that the contract contains only eight worksheets is a
pre-existing Step-5 coverage limitation, not an undecided claim in this
dispatch: the live Step-6 scope routes exactly those contract carriers and the
strict contract and adjudication checks pass them. I did not invent or expand
the batch-2 contract scope.

## Batch 19 outcome

Both routed reader repairs are `accepted_repair`:

- `lem-total-oracle-functional-has-computable-use-bound` now permits arbitrary
  natural-number output, matching the downstream theorem; totality still makes
  the finite transcript search terminate by the infinite-path contradiction.
- `thm-computably-dominated-characterizes-truth-table-reducibility` now
  dominates the total computation-time function before truncation. In the
  reverse direction it uses the canonical function-as-oracle representation,
  the finite-use lemma, and a maximum over finitely many bounded oracle strings.

The relevant source is Patey Theorem 5.11 for total functionals/truth tables and
computable use, followed by Theorem 5.12 for the computable-domination
characterization. The set/function typing, both implication directions, finite
maximum, totality, and zero/empty transcript cases were checked. No reader or
refuter finding remains for this batch.

## Risk review

After the batch-1 contracts were regenerated, the initial owned-batch risk
reports identified thirteen HIGH or CRITICAL entries. I read each live proof
and its relevant dependency/citation evidence and recorded a specific complete
review for:

- batch 1: `thm-undecidable-languages-exist-in-p-poly`,
  `thm-circuit-sat-is-np-complete`, `thm-karp-lipton-collapse`,
  `lem-cook-levin-can-be-made-parsimonious`,
  `prop-fp-is-contained-in-sharpp`, `thm-pp-is-sign-testing-gap-p`,
  `cor-majority-sat-is-pp-complete`, `thm-pp-is-closed-under-complement`, and
  `fs-every-many-one-reduction-is-parsimonious`;
- batch 2: `thm-invariance-theorem-for-plain-complexity`;
- batch 19: `lem-degree-order-is-representative-independent`,
  `lem-jump-is-well-defined-on-degrees`, and
  `ex-degree-order-is-representative-independent`.

The reviews address the actual risks: witness choice and undecidability,
bidirectional reductions, parsimonious uniqueness, strict majority ties,
quantifier alternation, universal-machine parsing, quotient representative
independence, and jump well-definedness. All three risk reports pass with
`--require-reviewed`.

## Decisions and ledger

The decisions file contains exactly one decision for each of the 67 routed
obligations: 38 `confirmed_fatal` refuter findings, one
`confirmed_nonfatal` reader finding, 27 `accepted_repair` touched carriers,
and one `amended_repair`. It also contains the one explicit supplemental
append-only ownership record described above. All 68 decisions have distinct
ledger references and current `subject_sha256` stamps. The defect ledger has
68 new group-a rows, all closed; validation over the current 133
`frontier-32` rows reports zero errors.

## Validation

Passed focused gates:

- reflow on all 31 Alpha-materially-edited items;
- focused precheck over all reader-touched and refuter-repaired carriers:
  49 proof-bearing items checked, zero failures;
- rendercheck: 59 unique changed carriers, zero errors, with real KaTeX and
  renderer YAML parsing;
- proof-contract strict: batch 1 `27/27`, batch 2 `8/8`, batch 19 `18/18`,
  zero errors or warnings;
- citation fidelity: 56 citations checked, no missing quote and no widening;
- boundary audit with contradicted rows fatal: 424 rows, zero contradictions;
- manifest dependencies: batch 1 `39`, batch 2 `44`, batch 19 `26`, zero
  errors;
- content policy: 109 scoped items, zero errors and zero warnings;
- risk report with `--require-reviewed`: all three owned contracts pass;
- coverage checklists: 113, 80, and 41 harvested results, zero errors. Batch 1
  retains the pre-existing visible low-yield warning for
  `counting-complexity-and-sharpp`; the 35 routed refuter findings were read and
  repaired rather than treating this mechanical warning as a new defect row;
- defect-ledger validation: 133 run rows, zero errors;
- Step-6 adjudication scope: batch 1 `35`, batch 2 `30`, batch 19 `2`
  obligations, each with zero errors after stamping.

`finite-smoke` reports zero errors but also zero checks because none of these
contracts carries a finite-smoke obligation; it is not presented as a positive
mathematical stamp. No unresolved in-scope claim defect or decision obligation
remains. This report does not decide a stage transition or assert any judge
outcome.

## Gate repair cycle 1 — `step6-routing-adjudicate`

Reread the four live batch-2 items, their direct dependencies, Reader 2's
repairs, the refuter scope, the frozen post-reader carrier, and the later
contract-audit record. Their item and manifest components still exactly retain
the reader repairs; `contract-audit-8` subsequently rewrote their proof-contract
records. The four touched decisions are therefore `amended_repair`, not
`accepted_repair`. Four `route: gate` supplemental decisions and four matching
rows in `frontier-32-alpha-a-6b-gate-ledger-rows.json` record the nonfatal stale
decision classifications. No new mathematical defect was found.

The full primary gate now reports 717 routed items, 359 adjudication
obligations, and zero errors. Run-wide defect-ledger validation checks 394
`frontier-32` rows with zero errors.
