# Phase 2 next 17 — Step 3a scope review, group f

Run: `phase-2-next-17`  
Dispatch: `step3a-f-36e8bfef53e56ac2`  
Batch: 10  
Review type: scope only; no item or proof approvals

## Decisions

| A page | A/B inventory | Scope decision |
| --- | ---: | --- |
| `sat-tableaux-and-quantified-space-completeness` | 9 / 3 | `sufficient` |
| `nondeterministic-recursive-padding-and-time-separation` | 7 / 2 | `sufficient` |

### SAT tableaux and quantified-space completeness

The pair adequately supplies the two completeness interfaces promised by its
title and its downstream role. The A page fixes encoded Boolean, CNF, SAT, and
3-SAT syntax; builds bounded local computation tableaux with boundary and
halting normalization; proves tableau correctness and polynomial CNF/Tseitin
construction; and obtains Cook--Levin and 3-SAT completeness. Its space block
then defines PSPACE/NPSPACE, counts bounded-space configurations, and proves
both membership and hardness for TQBF by the single-copy quantified
reachability recurrence. The three examples exercise a concrete tableau, the
equisatisfiable-versus-equivalent distinction in Tseitin conversion, and the
formula-size/workspace accounting that is the delicate part of TQBF hardness.

This is enough for the pair's library role: the new completeness items replace
the old draft SAT/3-SAT/TQBF interfaces and supply the identified circuit,
classical-reduction, and polynomial-hierarchy consumers. Savitch's theorem,
Immerman--Szelepcsényi, coNP/TAUT, NAE-SAT, Ladner's theorem, PCP, and
interactive proofs are coherent exclusions because they are neither needed by
these proofs nor promised by this focused pair, and they have separate pages or
later homes. The owner-retained prerequisite
`resource-bounds-and-machine-invariance` closes the PSPACE/space-measure branch
that the original prose prerequisite list omitted.

### Nondeterministic recursive padding and time separation

The pair covers the full identity-padding specialization commissioned by the
prose, rather than merely stating a hierarchy corollary. It distinguishes
shortest accepting-branch time from all-branch halting and exact clocks, then
supplies the linear two-tape verifier, concrete prefix universal simulation,
quantitative fixed-point interface, cutoff/finite-union machinery, and the
recursive-unary diagonal bound needed before the final recursive-padding
separation. The theorem has the strong single-language conclusion outside the
union of all recursive lower bounds satisfying
`a(n+1) = o(T(n))`, and explicitly returns to the library's all-branch NTIME
convention. The B page tests both the polynomial/logarithmic specialization and
the convention-changing clock construction.

That scope is sufficient for its intended role as the missing internal
supplier for `thm-nondeterministic-time-hierarchy`. The paper's nonidentity
padding theorems, unary-language refinements, and broader speedup results are
not required for that consumer and are outside the design. The pair has no
same-run or cross-batch supplier edge; all three A-page prerequisites are
earlier published machine, resource, encoding, and recursion infrastructure.

## Evidence and uncertainty

I compared the current four-page manifest, 49-result coverage ledger, batch
notes, complete prose sections at `research/plan-computability-theory-track.md`
§53.1, canonical plan records, scope ledger, drift report, all 21 Step-1
readiness records, and both dependency ledgers. The manifest preserves all
9/3 and 7/2 designed items; coverage assigns every harvested result to an
item, inline treatment, a named later destination, or a justified exclusion.
There is no current owner Step-3a decision for either page. The only applicable
owner record drops the inaccessible Seiferas--Fischer--Meyer URL as mechanical
fetch backing while retaining every mathematical obligation and the complete
local alternative routes.

For independent scope confirmation, I read the complete relevant Cook--Levin
and TQBF arguments in Arora--Barak, §§2.3 and 4.3
(https://theory.cs.princeton.edu/complexity/book.pdf), and the complete short
Kabanets lectures 7, 8, 12, and 13
(https://www2.cs.sfu.ca/~kabanets/710_2007/). I also read the complete Kabanets
Lecture 10 and Vadhan Lecture 6 hierarchy treatments
(https://people.seas.harvard.edu/~salil/cs221/fall02/scribenotes/oct2.pdf),
plus the relevant full
browser text of Seiferas--Fischer--Meyer through Lemmas 1--6, Theorem 4, and
Corollary 4.1
(https://www.researchgate.net/publication/220430544_Separating_Nondeterministic_Time_Complexity_Classes).
Corollary 4.1 states exactly the uniform set-difference shape used here; the
supporting lemmas explain why simulation, padding, cutoff, self-reference, and
the gross unary diagonal result all belong in the scaffold. The lecture proofs
independently confirm the shifted `f(n+1)` gap and the need for lazy rather than
complement diagonalization.

The original SFM URL still lacks a reproducible byte/hash fetch receipt, so
source availability remains a documented limitation. It is not a scope
omission: the manifest retains every selected claim and local construction.
The transposed shorthand in the Step-1 reason for the polynomial/logarithmic
example is also already corrected by the batch notes; the controlling manifest
statement and strategy have the intended functions. Neither observation is a
proof approval, and this review makes no claim about final proof correctness.
