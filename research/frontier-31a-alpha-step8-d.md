# Frontier 31a Step 8 — group d adjudication

## Result

All 31 assigned rejection tuples for batches 21 and 22 were adjudicated
against their pre-edit item bytes and the exact dependency interfaces. The
outcomes are 29 `confirmed_fatal`, one `confirmed_nonfatal`, and one
`false_positive`. Exactly the 29 items with confirmed-fatal judge rejections
were changed.

Both Step-7 reader warnings were dispositioned. The prenex warning is
`covered_by_rejection`; the simulator-space warning is an independent
`confirmed_fatal` defect on the same pre-edit bytes as the judge's distinct
time-overhead rejection. Thus 30 matching rows, `frontier-31a-S8-d-001`
through `frontier-31a-S8-d-030`, were appended to
`research/defect-ledger.jsonl`. There were no incoming Step-8 cross-group
alerts, outgoing cross-group findings, published repairs, scope changes, or
reading-order changes.

## Adjudications

| item | outcome | exact decision and disposition |
|---|---|---|
| `cex-nl-equals-conl-follows-by-state-swapping` | `confirmed_fatal` (`dependency_citation`) | The cited class definition supplied no branch semantics and the witness was not specified. Added the direct machine-model dependency and the two explicit branches; rejudge. |
| `def-arithmetical-level-completeness` | `confirmed_fatal` (`other`) | A string-language reduction was applied directly to subsets of natural numbers. Fixed a canonical binary-numeral encoding and defined the induced reduction; rejudge. |
| `def-bounded-arithmetic-formula` | `confirmed_fatal` (`other`) | The asserted equivalence between bare-language bounded formulas and arbitrary primitive-recursive predicates was false. Made the latter a separate normal-form convention; rejudge. |
| `def-efficient-universal-simulation-with-clock` | `confirmed_fatal` (`other`) | The time interface omitted decoding and failed at clocks zero and one. Replaced it by `O(n+b log(b+2))`; the independent reader repair also adds the required `O(n)` space term; rejudge. |
| `def-language-padding` | `confirmed_fatal` (`other`) | The total padding function had no typed codomain, so its exponent need not be an integer. Typed it as `N -> N` and made the nonnegative branch explicit; rejudge. |
| `def-logspace-uniform-circuit-family` | `confirmed_fatal` (`other`) | The uniform query interface did not determine the designated output gate. Added an output-gate query; rejudge. |
| `def-read-only-input-workspace-classes` | `confirmed_fatal` (`other`) | Work-space constructibility was not operationally defined. Added the unary constructor, binary output, work bound, and endmarked input-head convention; rejudge. |
| `ex-circuit-value-is-p-complete` | `confirmed_fatal` (`dependency_citation`) | L2 invented a streamed uniform-circuit reduction. It now cites the actual logspace many-one completeness statement; rejudge. |
| `ex-logspace-reductions-compose` | `confirmed_fatal` (`other`) | `g` was undefined on the empty input. Added an explicit empty-input value; rejudge. |
| `ex-time-diagonal-language-respects-its-budget` | `confirmed_fatal` (`logic`) | Parsing was absorbed without the constructibility hypothesis that gives `n <= f(n)`. Added and used constructibility; rejudge. |
| `fs-unrestricted-diagonalization-respects-any-bound` | `confirmed_fatal` (`logic`) | An upper simulator bound did not prove unavoidable failure. Replaced it by a concrete one-step machine with arbitrarily long valid pairs, forcing nonconstant decoding time; rejudge. |
| `lem-effective-enumeration-of-clocked-machines` | `confirmed_fatal` (`other`) | The proof invoked an undefined clock-constructor syntax and decoder. Replaced it by explicit integer multiples of a fixed constructible bound and padded codes; rejudge. |
| `lem-padding-transfers-time-bounds` | `confirmed_fatal` (`logic`) | The converse constructed an invalid pad when `p(n) <= n`. Added `p(n)>n` for every input length; rejudge. |
| `lem-polynomial-time-computations-have-logspace-uniform-circuits` | `confirmed_fatal` (`logic`) | A deliberately slow machine may decide a P language. The fixed machine itself must now run in polynomial time; rejudge. |
| `lem-prenex-normalization-preserves-level` | `confirmed_fatal` (`logic`) | Negation swaps Sigma and Pi and need not preserve one class. Restricted same-class closure to conjunction and disjunction and stated the effect of negation; rejudge. |
| `lem-read-only-workspace-diagonal-machine-halts` | `confirmed_fatal` (`logic`) | Its counter needs `O(s+log n)` bits. Added work-space constructibility and the logarithmic floor; rejudge. |
| `lem-read-only-workspace-simulates-in-all-tapes-space` | `confirmed_fatal` (`dependency_citation`) | The proof assumed the input head cannot enter the blank tail. The repaired local model supplies endmarkers and the bridge cites that exact restriction; rejudge. |
| `lem-read-only-workspace-universal-simulation` | `confirmed_fatal` (`logic`) | The proof silently put the program on a separate free tape and measured the cap against the wrong length. It now addresses two delimited regions of one read-only encoded input of total length `n`; rejudge. |
| `lem-space-bounded-universal-simulation` | `confirmed_fatal` (`logic`) | The proof added a configuration clock without a constructible cap. The simulation bound needs no clock, so the unsupported claim was removed; rejudge. |
| `lem-space-diagonal-machine-halts` | `confirmed_fatal` (`logic`) | `O(n+s)` is not `O(s)` without `n=O(s)`, and the cap must be constructible. Added both hypotheses and the exact counter bound; rejudge. |
| `lem-time-diagonal-language-respects-its-budget` | `confirmed_fatal` (`logic`) | A fixed-machine simulator estimate was used uniformly over varying descriptions. The repaired construction uses padded fixed candidate pairs, a uniform reserve guard, and `n<=f`; rejudge. |
| `prop-hierarchy-theorems-do-not-separate-p-from-np` | `confirmed_fatal` (`logic`) | Absence of a cross-model statement did not prove formal logical nonimplication. Narrowed the proposition to the supported claim that hierarchy conclusions alone do not constitute a P-versus-NP proof; rejudge. |
| `thm-deterministic-time-hierarchy` | `confirmed_nonfatal` | The omitted inclusion is immediate: time constructibility gives `f(n)>=n` eventually, hence `f log f=o(g)` gives `f=O(g)`. The strict witness is already proved. Fatal-only rule: no edit. |
| `thm-gap-and-union-theorems-for-complexity-bounds` | `confirmed_fatal` (`logic`) | The sketches treated the Blum predicate as deciding eventual domination and supplied no valid invariant. Replaced them by exact applications of the classical Gap and Union constructions and their actual invariants; rejudge. |
| `thm-halting-is-sigma-one-complete` | `confirmed_fatal` (`dependency_citation`) | The acceptable numbering was conflated with a separate fixed machine coding. Membership now uses universal recognizability and hardness uses acceptability's total hard-wiring map; rejudge. |
| `thm-immerman-szelepcsenyi-nl-equals-conl` | `confirmed_fatal` (`logic`) | The complement of STCON also contains malformed strings. Added a deterministic malformed-code branch and then took the inverse image of the full complement; rejudge. |
| `thm-nondeterministic-time-hierarchy` | `confirmed_fatal` (`dependency_citation`) | The alleged linear-overhead universal simulation was neither supplied nor proved. Replaced that shortcut by the exact Seiferas--Fischer--Meyer recursive-padding theorem and made the standard nondecreasing running-time convention explicit; rejudge. |
| `thm-read-only-input-savitch-simulation` | `confirmed_fatal` (`dependency_citation`) | L2 inflated a bound on reachable configurations to all graph vertices. Restored the exact citation and derived the polynomial number of syntactic encodings directly; rejudge. |
| `thm-read-only-workspace-space-hierarchy` | `confirmed_fatal` (`logic`) | The diagonalizer and its budget were merely asserted. Added the clocked enumeration, forced-halting simulation, uniform `g`-space guard, and padded self-code contradiction; rejudge. |
| `thm-shoenfield-limit-lemma` | `confirmed_fatal` (`logic`) | Simulation with a finite oracle approximation could diverge and did not define a total `g(x,s)`. Added an `s`-step cutoff and default output; rejudge. |
| `thm-totality-is-pi-two-complete` | `false_positive` | The opened definition of a parameter-specialization function explicitly makes it total computable and states the hard-wiring identity. The cited s-m-n theorem therefore supplies exactly the alleged omission. No edit. |

## Reader-warning dispositions

| alert | item | outcome | disposition |
|---|---|---|---|
| `s8a-b2ea65ee34516cd9fc3478bb` | `lem-prenex-normalization-preserves-level` | `covered_by_rejection` | Exact target: `(lem-prenex-normalization-preserves-level, gpt-5.6-terra, dbe99d93aec3c5159a6df0f96e28c257336c5838d1c09c1f7b63339d768ae43f)`. The judge and reader independently identified the same false closure under negation. |
| `s8a-0bf94c696b55731353150df2` | `def-efficient-universal-simulation-with-clock` | `confirmed_fatal` (`other`) | Guard `c4c439a7d667bedc3aa3bd4afeda1c785d3beb23871ccb63f90e7b7b446adc77` repaired to `333b765471624a356a407bd9ace189cb2aa6bdac301e61d12cae895946e3d505`. The `O(n)` all-tapes space term is a distinct defect from the judge's time-overhead objection. |

## Rejudge targets

The rejudge target set is exactly these 29 changed items:

- `cex-nl-equals-conl-follows-by-state-swapping`
- `def-arithmetical-level-completeness`
- `def-bounded-arithmetic-formula`
- `def-efficient-universal-simulation-with-clock`
- `def-language-padding`
- `def-logspace-uniform-circuit-family`
- `def-read-only-input-workspace-classes`
- `ex-circuit-value-is-p-complete`
- `ex-logspace-reductions-compose`
- `ex-time-diagonal-language-respects-its-budget`
- `fs-unrestricted-diagonalization-respects-any-bound`
- `lem-effective-enumeration-of-clocked-machines`
- `lem-padding-transfers-time-bounds`
- `lem-polynomial-time-computations-have-logspace-uniform-circuits`
- `lem-prenex-normalization-preserves-level`
- `lem-read-only-workspace-diagonal-machine-halts`
- `lem-read-only-workspace-simulates-in-all-tapes-space`
- `lem-read-only-workspace-universal-simulation`
- `lem-space-bounded-universal-simulation`
- `lem-space-diagonal-machine-halts`
- `lem-time-diagonal-language-respects-its-budget`
- `prop-hierarchy-theorems-do-not-separate-p-from-np`
- `thm-gap-and-union-theorems-for-complexity-bounds`
- `thm-halting-is-sigma-one-complete`
- `thm-immerman-szelepcsenyi-nl-equals-conl`
- `thm-nondeterministic-time-hierarchy`
- `thm-read-only-input-savitch-simulation`
- `thm-read-only-workspace-space-hierarchy`
- `thm-shoenfield-limit-lemma`

## Sources consulted

- Ludovic Patey, *Computability Theory*,
  `https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf`, section 5.1
  and Lemma 7.2: the arithmetical hierarchy's recursive-matrix convention and
  the bounded-stage construction in the limit lemma.
- Arora and Barak, *Computational Complexity: A Modern Approach*,
  `https://theory.cs.princeton.edu/complexity/book.pdf`, Chapter 3 and
  sections 3.1--3.4, 4.1, and 6: clocked universal simulation, deterministic
  and space hierarchy hypotheses, read-only input space accounting, Savitch
  reachability recursion, NL complement closure, and uniform circuits.
- Joel Seiferas, Michael Fischer, and Albert Meyer, “Separating
  Nondeterministic Time Complexity Classes,” JACM 25(1), 1978,
  `https://citeseerx.ist.psu.edu/document?doi=5a5339f901785db63330bc653ea76ea02b51d3fd&repid=rep1&type=pdf`,
  abstract and Theorem 1: if `T1(n+1)=o(T2(n))`, the multitape
  nondeterministic time classes separate by a recursive padding construction.
- Hartmanis and Hopcroft, “An Overview of the Theory of Computational
  Complexity,” JACM 18(3), 1971,
  `https://users.cs.fiu.edu/~giri/teach/5420/f01/papers/p444-hartmanis.pdf`,
  Theorem 7 and Theorem 16: the abstract-measure Gap Theorem and the exact
  recursively-enumerable-family Union Theorem, including the finite-stage
  invariants used in the repaired proof.
- Sebastiaan Terwijn, *Complexity Theory*,
  `https://www.math.ru.nl/~terwijn/teaching/complexitytheory.pdf`, sections
  2.3 and 5.6: configuration-count space diagonalization and the scope of the
  stated gap phenomenon.
- The opened library dependencies fixed the local interfaces used in the
  decisions: `def-computable-many-one-reduction` is a string-language
  reduction; `def-parameter-specialization-function` makes specialization
  total computable; `def-universal-and-acceptable-numbering` supplies total
  hard-wiring; `def-time-and-space-constructible-function` supplies the
  constructor and eventual input-length floor; and
  `lem-logspace-machines-have-polynomially-many-configurations` states its
  bound for reachable configurations.

## Checks and blockers

- Focused precheck: all 23 changed proof-bearing items passed.
- Focused rendercheck: all 29 changed items passed YAML, wikilink-in-math,
  delimiter, multiline-display, and KaTeX checks.
- `node tools/depcheck.mjs --quiet`: passed with 474 repository warnings; no
  cycles, every reference resolves, and no draft item appears on a published
  page.
- A focused exact-reference audit found all 30 group-d defect rows exactly
  once, and the reader post-hash matches the current item. A subsequent
  whole-run defect-ledger check found 32 missing rows for other groups whose
  adjudications landed after the group-d append; no group-d reference was
  missing.
- The required Step-8 scope check was run. Both group-d warnings are
  dispositioned and all 31 group-d rejection tuples are closed. The whole-run
  check remains blocked by 17 unanswered reader warnings owned by other
  groups; none was changed here.
- The required whole-level Step-8 guard was run again after concurrent rows
  landed. It saw 184 changed items and 61 licensed changes; all 29 group-d
  changes have exact fatal licences. Its 123 errors are out-of-group in-flight
  edits with no adjudication yet; those items were not modified here.
