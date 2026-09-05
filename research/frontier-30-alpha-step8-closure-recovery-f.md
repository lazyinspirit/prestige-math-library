# Frontier 30 — Step 8 group f closure recovery, rejudge round 1

## Scope and result

The authoritative recovery envelope assigned 13 current unadjudicated
rejection tuples to group `f`. I handled exactly those tuples after reading all
10 owned pages, all 117 owned items, the Step-7 digest, and the dependencies
touched by the rejections.

- `confirmed_fatal`: 8
- `confirmed_nonfatal`: 1
- `false_positive`: 4
- licensed repairs: 8
- rejudge targets: 8
- cross-group alerts: 0
- blockers: 0

The 13 exact outcomes were appended to
`research/frontier-30-judge-adjudications.jsonl` with the current pre-edit
guard hashes. The eight fatal outcomes have matching defect rows
`frontier-30-S8-f-042` through `frontier-30-S8-f-049`, appended through the
locked defect-ledger interface.

## Exact rows handled

| item | context_sha256 | outcome |
|---|---|---|
| `def-natural-and-dirichlet-density` | `d2582e0f7058465bd1cd1cc7418de009b96e2a7ea26745b662f37f80af9e7400` | `confirmed_fatal` |
| `ex-clique-is-np-complete` | `d7d7c06b81f990880fa7d035d81bab66ded0b5a081dfd227610e0e46a3ba6094` | `false_positive` |
| `ex-hasse-minkowski-for-a-quaternary-form` | `f434d2b10b3f5cd92abb157792d9c7cb3aaaa33cfc62b74fec8ac98d26121e5f` | `false_positive` |
| `ex-modified-pcp-is-undecidable` | `d9de54c197023f8864e1f2be7169b2c74ddbd36ca0275e6e1f03827cd5c42c49` | `confirmed_fatal` |
| `ex-three-sat-reduces-to-three-colourability` | `3570c5cbedf77771228cde473136cf1748987a64e9b505230922df5047591ec9` | `false_positive` |
| `lem-computation-history-domino-encoding` | `1d3ea651d3c6579c63d9f27141cf241c5f80a2738c885ae82a496e040cff8a44` | `confirmed_fatal` |
| `lem-positive-log-dirichlet-series-nonvanishing` | `25f1d37ce66106aa0cfe408d4f88cd9c133fcd0d95437ce583d7f3781c27b274` | `confirmed_fatal` |
| `thm-hasse-minkowski-for-ternary-forms-over-q` | `cbd428ff135ecbc734196fbf7ed2706980eb1d6057e575c886fb261ed0ef6252` | `confirmed_fatal` |
| `thm-hasse-minkowski-over-the-rationals` | `cc0b7515918660e68304491aa00a75d77a4f7bf3802e23d7a8317e0045cc2133` | `confirmed_fatal` |
| `thm-proper-inclusions-in-the-chomsky-hierarchy` | `63dfac3d8c6bee445b742690cfd5b31cffe14de31dd8b7f86f5820f28f9d9bae` | `false_positive` |
| `thm-three-sat-reduces-to-directed-hamiltonian-cycle` | `81bcdaa41f94eacdeea4cf758e2345a816d829289372ac2fa28329bb4b7e485d` | `confirmed_fatal` |
| `thm-three-sat-reduces-to-three-colourability` | `ba224fca34114dbd98599f4e42c3b537231c570d34d4051526faf8689b0acc62` | `confirmed_nonfatal` |
| `thm-two-adic-hilbert-symbol-formula` | `2a722270a7183ccb9b952ce9c7d630e680ea92dafe12b60bd05cdee052247da1` | `confirmed_fatal` |

## Licensed repairs

| item | defect type | repair |
|---|---|---|
| `def-natural-and-dirichlet-density` | `other` | Replaced the overly strong bounded-remainder condition by the standard limiting ratio to the full prime sum, equivalently an `o(log(1/(s-1)))` remainder. The stronger `O(1)` arithmetic-progression theorem still implies the repaired definition. |
| `ex-modified-pcp-is-undecidable` | `dependency_citation` | Specified the toy machine's clamped-left transition and displayed the exact start, transition, and separator dominoes supplied by the repaired construction. The verification now compares the two partial concatenations directly and leaves only the licensed cleanup suffix. |
| `lem-computation-history-domino-encoding` | `logic` | Removed the inconsistent replacement by a different cleanup machine. The proof now gives the finite standard domino list directly for the original machine: a marked configuration encoding, designated start tile, tape/separator copiers, right, interior-left and clamped-left transition tiles, right-boundary extension, accepting cleanup, and terminal anchor. The converse proves block-by-block that every match reaches an accepting configuration of the original machine before cleanup begins. |
| `lem-positive-log-dirichlet-series-nonvanishing` | `logic` | Replaced the invalid endpoint use of Landau's theorem. At `t=0`, the assumed logarithmic series has nonnegative real value, so `|F(sigma)| >= 1`; this directly contradicts convergence to zero if `F(1)=0`. |
| `thm-hasse-minkowski-for-ternary-forms-over-q` | `logic` | Corrected the normal-form step: diagonalize, multiply the whole form by a nonzero rational scalar, and independently rescale the remaining coordinates to squarefree integer representatives. Multiplication merely by a rational square is no longer claimed to normalize a coefficient to `1`. |
| `thm-hasse-minkowski-over-the-rationals` | `logic` | In the higher-dimensional induction, explicitly rechoose a local zero when the first binary value is zero. The first binary form is then isotropic and represents every local scalar; choosing a nonzero tail vector produces a new local zero with a nonzero matched value. |
| `thm-three-sat-reduces-to-directed-hamiltonian-cycle` | `logic` | Added the zero-clause branch: the empty conjunction maps to a one-vertex distinguished path instance, and the fresh closing vertex gives the required two-vertex directed cycle. The gadget proof now assumes a nonempty clause list only after that branch. |
| `thm-two-adic-hilbert-symbol-formula` | `logic` | Corrected the exhaustive residue list for the negative `v=-1` cases by including residue `2` modulo `8`, which is also a nonsquare. |

The corresponding derivation/citation entries were regenerated only for the
seven repaired proof-bearing items in the batch-8, batch-19, batch-20, and
merged proof-contract files. The four false-positive items and the one
nonfatal item remained byte-for-byte unchanged at the guard-hash level.

## Closed without content changes

- `ex-clique-is-np-complete` — `false_positive`. The opened theorem proof
  defines exactly the clause-occurrence graph used by the example, and the
  example independently checks its three-clique and satisfying assignment.
- `ex-hasse-minkowski-for-a-quaternary-form` — `false_positive`. The displayed
  vector `(1,1,1,0)` directly proves rational isotropy; no inference from
  unverified local hypotheses is made.
- `ex-three-sat-reduces-to-three-colourability` — `false_positive`. The opened
  theorem proof explicitly contains the NAE conversion, variable triangles,
  and position-labelled clause triangles, while the example also defines and
  colours its graph locally.
- `thm-proper-inclusions-in-the-chomsky-hierarchy` — `false_positive`. The
  opened definition fixes `A_TM` as a language of binary machine/input-pair
  codes, so its alphabet can be relabelled letter by letter by the two chosen
  symbols of `Sigma`.
- `thm-three-sat-reduces-to-three-colourability` —
  `confirmed_nonfatal`. The written construction covers all well-formed
  formulas. A total ambient-string map is obtained immediately by sending a
  malformed encoding to any fixed non-three-colourable graph; that decoder
  branch does not alter the mathematical gadget or either direction of its
  equivalence.

## Authoritative sources consulted

- [Kedlaya, Primes in arithmetic progressions](https://kskedlaya.org/ant/chap-primes-in-ap.html): Definition 4.4 defines relative Dirichlet density as the limiting ratio of the two Dirichlet sums, and Example 4.6 identifies the denominator for the primes with `log(1/(s-1)) + O(1)`.
- [Sutherland, 18.782 Lecture 10](https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf): Theorem 10.9 gives the stated two-adic Hilbert-symbol formula and reduces it to a finite primitive-solvability check modulo `8`.
- [Sutherland, 18.782 Lecture 11](https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf): Theorem 11.12 uses the ternary normal form with squarefree coefficients and, in higher dimension, chooses nonzero local common values before weak approximation.
- [Pollett, CS 154: PCP and Rice's Theorem](https://www.cs.sjsu.edu/faculty/pollett/154.13.13s/Lec01052013.html): the lecture lists the designated start, right/left transition, copier, boundary-growth, accepting-cleanup, and terminal dominoes used in the repaired computation-history construction.
- [MIT OCW, Lecture 10: Computation History Method](https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/resources/lecture-10-computation-history-method/): the course description confirms the computation-history reduction proving PCP undecidable.

## Rejudge targets

1. `def-natural-and-dirichlet-density`
2. `ex-modified-pcp-is-undecidable`
3. `lem-computation-history-domino-encoding`
4. `lem-positive-log-dirichlet-series-nonvanishing`
5. `thm-hasse-minkowski-for-ternary-forms-over-q`
6. `thm-hasse-minkowski-over-the-rationals`
7. `thm-three-sat-reduces-to-directed-hamiltonian-cycle`
8. `thm-two-adic-hilbert-symbol-formula`

No additional judge cycle was initiated; the engine owns rejudge routing.

## Checks

- focused precheck: 7 proof-bearing repaired items passed, 0 failing;
- focused rendercheck: 8 repaired item files passed with 0 errors;
- focused strict proof contract: 7/7 repaired proof-bearing items, 0 errors
  and 0 warnings;
- citation fidelity for batches 8, 19, and 20: 229 citations, no missing
  quote and no widening candidate;
- boundary audit for those three batches: 776 rows, no template reuse and no
  contradicted disposition;
- content policy for batches 8, 19, and 20: 117 scoped items, 0 errors and 0
  warnings;
- dependency check: 0 errors; standing repository advisories only;
- defect-ledger validation: 542 current-run rows checked, 0 errors;
- exact outcome join: 13 assigned tuples, 13 unique exact outcomes;
- repair integrity: all 8 fatal items changed, while all 5 nonfatal or
  false-positive items retained their pre-edit guard hashes;
- Step-8 scope check: 7 groups, 694 items, 0 open routed rejection and 0
  cross-group alert;
- Step-8 guard: 176/176 current changes licensed.

## Cross-group alerts and blockers

None. No rejection exposed a defect in another group's item or in a published
dependency, and every assigned item has group `f` ownership.
