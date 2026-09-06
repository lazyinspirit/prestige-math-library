# frontier-32 — group Alpha `a`, Step 3 scaffold review

This review covers batches `1`, `2`, and `19`. For every assigned A/B pair I
read the current manifest, coverage, notes, controlling design record, and
`research/plan-spec.json`, then checked the exact dependency statements and
the complete source portions needed by the load-bearing routes. The review
made only licensed repairs to this group's in-flight scaffold artifacts; it
did not add a page or item, change reading order, edit published content, or
alter workflow state.

## Verdicts

| Batch | A page | B page | Verdict |
| ---: | --- | --- | --- |
| 1 | `boolean-circuits-and-nonuniform-complexity` | `boolean-circuits-and-nonuniform-complexity-examples` | `sufficient` |
| 1 | `counting-complexity-and-sharpp` | `counting-complexity-and-sharpp-examples` | `sufficient` |
| 2 | `interactive-proof-systems-and-public-coins` | `interactive-proof-systems-and-public-coins-examples` | `sufficient` |
| 2 | `kolmogorov-complexity-and-algorithmic-randomness` | `kolmogorov-complexity-and-algorithmic-randomness-examples` | `sufficient` |
| 19 | `oracle-computability-the-jump-and-turing-degrees` | `oracle-computability-the-jump-and-turing-degrees-examples` | `sufficient` |

The A/B inventories are respectively `16+3`, `17+3`, `16+3`, `22+3`, and
`23+3`; none approaches the 60-item split threshold. After the corrections
below, every declared claim has an authorable route, exact backward
dependencies, and source or elementary-derivation support. There is no missing
result or source and no owner decision is required.

## Batch 1 — circuits and counting complexity

The two pairs implement TC-26 and TC-29 in
`research/plan-computability-theory-track.md` and retain plan orders
`631/632` and `637/638`. Their original page prerequisites agree with the
current plan. Direct item dependencies reach Cook--Levin, finite counting,
randomized complexity, the existing logspace uniformity and L/NL definitions,
and all named reduction and tableau facts before use.

The circuit source route is Arora--Barak Chapter 6 plus Katz Lecture 10. Exact
review found that Katz's four-page note defines NC/AC but does not state
`NC1 ⊆ L ⊆ NC2`. The false coverage row was removed; the coverage now records
Arora--Barak Exercises 9 and 11 on PDF p. 129. The proposition's proof route
stores one logarithmic child-choice path and recomputes gate addresses for
`NC1 ⊆ L`, avoiding a logarithmic stack of logarithmic addresses; repeated
squaring of logspace configurations supplies `L ⊆ NC2`.

Three further circuit sketches were corrected without changing their claims.
The undecidable P/poly witness is now the binary length language
`L={x : 1^{|x|}∈U}` induced by an undecidable tally language `U`, so its
constant length circuits really decide every binary input at that length. The
advice equivalence now depends explicitly on the preceding machine-unrolling
containment. Karp--Lipton now converts SAT decision circuits to search circuits
by self-reducibility and verifies each returned satisfying assignment locally;
it no longer proposes the impossible deterministic test that a candidate
circuit globally agrees with satisfiability. The companion examples were
updated to preserve both corrections.

The counting route uses Arora--Barak Chapter 9 and Fortnow §§2--4.1. The prior
MajoritySAT hardness sketch incorrectly assumed that a parsimonious
Cook--Levin map preserves the satisfying *fraction* after auxiliary variables
are introduced. The repaired route normalizes a PP machine to `2^p` paths,
obtains a parsimonious formula with `a` satisfiers on `q≥p` variables, and adds
a selector branch whose comparison formula has exactly
`2^q-2^{p-1}` satisfiers. The resulting formula has a strict majority exactly
when `a>2^{p-1}`. PP complement is stated exactly through the integer GapP
witness `1-g`, including the zero case.

The broad Fortnow harvest still produces the expected low-yield warning:
`19/49` results support scaffold items. All declined Fortnow and
Arora--Barak rows were reviewed individually and are among the current scope
decisions; permanent, RAB/isolation, Toda--Ogihara, auxiliary counting-class,
and stronger oracle results are not premises of an assigned item.

## Batch 2 — interactive proofs and algorithmic randomness

The pairs implement TC-30 and TC-37 at plan orders `639/640` and `653/654`.
The IP page retains only the public-coin conversion and the `IP ⊆ PSPACE`
direction. Arithmetization, sum-check, and the reverse containment remain
assigned to their recorded destination pages.

Arora--Barak Chapter 8 and Goldreich Lecture 11 support the IP route. The
sequential-repetition lemma now distinguishes honest independent successes
from an adaptive cheating prover's correlated outcomes. Completeness uses the
published Bernoulli Chernoff lemma; soundness uses the source's per-history
bound `Pr[X_i=1 | prior transcript]≤s` and an exponential-moment induction to
obtain the same binomial upper-tail bound. Thus the universal soundness
quantifier is preserved rather than silently replaced by independence.

For Kolmogorov complexity, Shen §§2--6, 12--13, 15/17, 28--29, and 34--40,
Simpson Chapters 6--8, and Franklin--Porter §§2.1--2.3 and 4.5 support the
finite-string, prefix-code, Martin-Löf, martingale, and effective-dimension
routes. Prefix complexity is now defined first as relative `K_M`; the
acceptable-numbering dependency and a prefix-preserving universal-machine
construction precede fixing unqualified `K`. The symmetry route cites Shen
§13, Theorem 11 for the plain-complexity formula and uses §37 only as auxiliary
prefix-pair context. Prefix invariance is an explicit dependency of symmetry,
Levin--Schnorr, and the effective-dimension characterization.

Shen §39 proves a strong-law result, not the existence of a computable normal
sequence. Its former load-bearing normality attribution was corrected. The
coverage now includes the exact “Peculiarity of BinChamp” section of
*A zoo of computable binary normal sequences*, which identifies the computable
binary Champernowne sequence as binary normal. The false-statement route then
covers its computable prefix at test level `n` by one cylinder of measure
`2^{-n}`, proving that the same sequence is not Martin-Löf random.

## Batch 19 — oracle computability, jumps, and degrees

This pair implements TC-18 at orders `615/616`. Its 23-item A route proceeds
from oracle-machine configurations and relative computability through finite
query use, reducibilities, degree quotient/order/join, relativized halting and
jump completeness, finite-jump strictness, and the truth-table versus Turing
separation. The three B leaves depend only on their corresponding A results.

The current prerequisites reach relative computability/enumerability,
acceptable numberings, `s`-`m`-`n`, recursion, and computable many-one
reduction. Patey's notes give the exact finite-query and truth-table material,
including Theorems 5.11 and 5.12; Terwijn independently supports oracle
reducibility, degrees, jumps, and strictness. Definitions of numerical use,
finite-variation invariance, complete-degree terminology, incomparable-degree
priority construction, and the source's broader use calculus are not needed by
any assigned proof and remain honestly out of scope.

## Scope decisions

After refreshing against the corrected manifests and coverage, the group has
`53` current declines: batch 1 has `35` out-of-scope rows, batch 2 has `5`
out-of-scope and `7` deferred rows, and batch 19 has `6` out-of-scope rows.
Every row is recorded as `stands` in
`research/frontier-32-alpha-a-scope-decisions.json` with current design,
manifest, dependency, and destination evidence. The three deferred destination
pages exist in the current plan: `the-polynomial-hierarchy-and-relativization`
at order 633, `arithmetization-and-the-sum-check-protocol` at 641, and
`the-ip-equals-pspace-theorem` at 643. No declined result is load-bearing for
the assigned scaffold, and no row requires `owner-decision`.

## Checks

- `manifest-deps` reports `39`, `44`, and `26` items for batches 1, 2, and 19,
  with `0` missing and `0` errors.
- `coverage-checklist --require-destination` reports `113`, `80`, and `41`
  harvested results with `0` errors. Batch 1 has the one reviewed low-yield
  warning described above; batches 2 and 19 have no warnings.
- `source-fetch-check --coverage` reports `12/12` source records
  fetch-verified.
- `content-policy --manifest-only` reports `109` scoped items, `0` errors, and
  `0` warnings.
- `splice-plan --dry-run` succeeds for all three batches, splicing `39`, `44`,
  and `26` items without a withheld edge.
- `validate-plan research/plan-spec.json` reports the declared order acyclic
  and consistent, with no item-level cycles, forward references, B-page
  dependencies, or unresolved IDs among itemized pages. Its repository-wide
  redundant-prerequisite notices are informational and do not identify an
  owned defect.
- `scope-decisions check --run frontier-32 --group a` reports `53` current
  declines and `0` errors.
- JSON parsing and `git diff --check` pass for every changed owned artifact.

There are no blockers. The next action is the engine-owned Step-3 closure and
stage transition for these five sufficient A/B pairs.
