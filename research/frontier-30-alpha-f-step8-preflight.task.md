# Step 8 adjudication — group **f**, run `frontier-30`

You are the group Alpha for batches **8**, **19**, **20**: 5 A/B pair(s), 10 page(s), 117 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-30-alpha-f-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-30-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `dirichlet-characters-l-functions-and-primes-in-progressions` | A | number-theory | 348.009 | `dirichlet-series-and-euler-products-examples`, `characters-and-the-orthogonality-relations` |
| 8 | `dirichlet-characters-l-functions-and-primes-in-progressions-examples` | B | number-theory | 348.01 | `dirichlet-characters-l-functions-and-primes-in-progressions` |
| 8 | `hilbert-symbols-and-the-quadratic-local-global-principle` | A | number-theory | 348.017 | `absolute-values-completions-and-p-adic-numbers-examples`, `quadratic-residues-and-the-legendre-symbol`, `quadratic-reciprocity-and-the-jacobi-symbol`, `dirichlet-characters-l-functions-and-primes-in-progressions` |
| 8 | `hilbert-symbols-and-the-quadratic-local-global-principle-examples` | B | number-theory | 348.018 | `hilbert-symbols-and-the-quadratic-local-global-principle` |
| 19 | `post-correspondence-and-language-undecidability` | A | computability-theory | 607 | `computable-reductions-and-rices-theorem`, `context-free-pumping-ogden-and-parsing`, `myhill-nerode-theory-and-dfa-minimization` |
| 19 | `post-correspondence-and-language-undecidability-examples` | B | computability-theory | 608 | `post-correspondence-and-language-undecidability` |
| 19 | `acceptable-numberings-smn-and-the-recursion-theorem` | A | computability-theory | 611 | `primitive-recursive-and-partial-computable-functions`, `computable-reductions-and-rices-theorem` |
| 19 | `acceptable-numberings-smn-and-the-recursion-theorem-examples` | B | computability-theory | 612 | `acceptable-numberings-smn-and-the-recursion-theorem` |
| 20 | `classical-np-completeness-reductions` | A | computability-theory | 623 | `the-cook-levin-theorem`, `graphs-walks-and-connectivity` |
| 20 | `classical-np-completeness-reductions-examples` | B | computability-theory | 624 | `classical-np-completeness-reductions` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `dirichlet-characters-l-functions-and-primes-in-progressions` — Dirichlet Characters L Functions and Primes in Progressions (24 item(s))

- `def-dirichlet-character-modulo-q` · definition — Dirichlet characters modulo q
- `lem-dirichlet-character-extension-well-defined` · lemma — Extension by zero is well defined and periodic
- `lem-dirichlet-character-arithmetic-function-characterization` · lemma — Arithmetic characterization of Dirichlet characters modulo q
- `def-principal-dirichlet-character` · definition — The principal character modulo q
- `lem-dirichlet-character-values` · lemma — Character values on units are roots of unity
- `thm-dirichlet-character-orthogonality` · theorem — Orthogonality relations for Dirichlet characters modulo q
- `cor-dirichlet-character-residue-class-indicator` · corollary — A residue-class indicator from character sums
- `lem-nonprincipal-dirichlet-character-complete-sum` · lemma — A nonprincipal character has zero complete sum
- `lem-nonprincipal-dirichlet-character-partial-sums` · lemma — Nonprincipal Dirichlet character partial sums are bounded
- `def-dirichlet-l-function` · definition — Dirichlet L-functions
- `thm-dirichlet-l-euler-product` · theorem — Euler product for Dirichlet L-functions
- `thm-principal-dirichlet-l-factorization` · theorem — The principal Dirichlet L-function factors through zeta
- `thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane` · theorem — Nonprincipal Dirichlet L-functions are holomorphic on Re s greater than 0
- `lem-positive-log-dirichlet-series-nonvanishing` · lemma — Positive logarithmic Dirichlet series force boundary nonvanishing
- `thm-product-dirichlet-l-nonvanishing-line-one` · theorem — The full product of Dirichlet L-functions has no zero on Re s = 1
- `thm-dirichlet-l-nonvanishing-line-one` · theorem — Nonprincipal Dirichlet L-functions do not vanish on Re s = 1 away from s = 1
- `lem-nonreal-dirichlet-l-nonzero-at-one` · lemma — A nonreal Dirichlet L-function is nonzero at one
- `lem-real-dirichlet-l-nonzero-at-one` · lemma — A real nonprincipal Dirichlet L-function is nonzero at one
- `thm-dirichlet-l-nonzero-at-one` · theorem — Nonprincipal Dirichlet L-functions are nonzero at one
- `def-natural-and-dirichlet-density` · definition — Natural and Dirichlet density
- `thm-natural-density-implies-dirichlet-density` · theorem — Natural density implies Dirichlet density
- `thm-primes-residue-class-dirichlet-density` · theorem — Primes in one reduced residue class have Dirichlet density 1 over phi(q)
- `thm-mertens-primes-arithmetic-progressions` · theorem — Mertens sum for primes in an arithmetic progression
- `thm-dirichlet-primes-arithmetic-progressions` · theorem — Dirichlet's theorem on primes in arithmetic progressions

### `dirichlet-characters-l-functions-and-primes-in-progressions-examples` — Dirichlet Characters L Functions and Primes in Progressions -- Examples (8 item(s))

- `ex-dirichlet-characters-modulo-three-four-and-five` · example — Dirichlet character tables modulo 3, 4, and 5
- `ex-dirichlet-characters-modulo-eight-and-twelve` · example — Dirichlet character tables modulo 8 and 12
- `ex-dirichlet-character-orthogonality-table` · example — An orthogonality table for Dirichlet characters
- `ex-principal-dirichlet-l-missing-euler-factors` · example — Missing Euler factors for a principal Dirichlet L-function
- `ex-the-character-chi-four-and-leibniz-series` · example — The character chi_4 and the Gregory-Leibniz series
- `ex-dirichlet-density-of-primes-in-a-small-progression` · example — Dirichlet density for a small prime progression
- `cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion` · counterexample — A noncoprime residue class has no Dirichlet conclusion
- `cex-dirichlet-density-does-not-mean-integer-natural-density` · counterexample — Positive prime Dirichlet density does not give positive integer natural density

### `hilbert-symbols-and-the-quadratic-local-global-principle` — Hilbert Symbols and the Quadratic Local Global Principle (17 item(s))

- `def-rational-local-fields` · definition — The rational local fields
- `def-hilbert-symbol-over-a-rational-completion` · definition — The Hilbert symbol over a rational completion
- `lem-equivalent-definitions-of-the-hilbert-symbol` · lemma — Equivalent formulations of the Hilbert symbol
- `lem-hilbert-symbol-depends-only-on-square-classes` · lemma — The Hilbert symbol depends only on square classes
- `thm-real-hilbert-symbol-formula` · theorem — The real Hilbert symbol formula
- `thm-odd-p-hilbert-symbol-formula` · theorem — The odd-prime Hilbert symbol formula
- `thm-two-adic-hilbert-symbol-formula` · theorem — The two-adic Hilbert symbol formula
- `thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate` · theorem — The Hilbert symbol is a symmetric bilinear nondegenerate pairing
- `lem-binary-quadratic-representation-via-hilbert-symbol` · lemma — Binary quadratic representation via the Hilbert symbol
- `cor-ternary-isotropy-via-hilbert-symbol` · corollary — Ternary isotropy via the Hilbert symbol
- `lem-finite-field-quadratic-isotropy-in-dimension-at-least-three` · lemma — Quadratic forms of dimension at least three over odd finite fields are isotropic
- `thm-local-isotropy-at-almost-all-primes` · theorem — Almost all local completions are isotropic in dimension at least three
- `thm-hilbert-reciprocity-over-the-rationals` · theorem — Hilbert reciprocity over the rationals
- `cor-ternary-hilbert-one-place-principle` · corollary — One local place is determined by the others for ternary forms
- `thm-hasse-minkowski-for-ternary-forms-over-q` · theorem — Hasse-Minkowski for ternary forms over Q
- `lem-global-square-class-approximation` · lemma — Global approximation of finitely many square classes
- `thm-hasse-minkowski-over-the-rationals` · theorem — Hasse-Minkowski theorem over Q

### `hilbert-symbols-and-the-quadratic-local-global-principle-examples` — Hilbert Symbols and the Quadratic Local Global Principle -- Examples (9 item(s))

- `ex-hilbert-symbol-over-the-reals` · example — Hilbert symbols over the real numbers
- `ex-hilbert-symbol-at-an-odd-prime` · example — A Hilbert-symbol computation at an odd prime
- `ex-two-adic-hilbert-symbol` · example — The two-adic Hilbert symbol table
- `ex-local-obstruction-to-a-rational-conic` · example — A local obstruction to a rational conic
- `ex-finite-bad-place-test-for-a-ternary-form` · example — Finite bad places for a ternary form
- `ex-hilbert-one-place-principle` · example — The one-place principle in action
- `ex-hasse-minkowski-for-a-quaternary-form` · example — A quaternary Hasse-Minkowski calculation
- `cex-local-global-fails-for-a-cubic-curve` · counterexample — Selmer's cubic is locally soluble but globally insoluble
- `cex-rational-isotropy-is-not-integral-representation` · counterexample — Rational isotropy does not solve an integral representation problem

### `post-correspondence-and-language-undecidability` — Post Correspondence and Language Undecidability (15 item(s))

- `def-post-correspondence-problem` · definition — The Post correspondence problem
- `def-modified-post-correspondence-problem` · definition — The modified Post correspondence problem
- `lem-computation-history-domino-encoding` · lemma — Accepting computation histories can be encoded by modified-PCP domino matches
- `thm-modified-pcp-is-undecidable` · theorem — The modified Post correspondence problem is undecidable
- `lem-modified-pcp-reduces-to-pcp` · lemma — Modified PCP many-one reduces to PCP
- `thm-post-correspondence-is-undecidable` · theorem — The Post correspondence problem is undecidable
- `prop-post-correspondence-is-recognizable` · proposition — The Post correspondence problem is recognizable
- `thm-cfg-intersection-emptiness-is-undecidable` · theorem — Emptiness of the intersection of two CFGs is undecidable
- `thm-cfg-universality-is-undecidable` · theorem — CFG universality is undecidable
- `thm-cfg-equivalence-is-undecidable` · theorem — CFG equivalence is undecidable
- `thm-cfg-ambiguity-is-undecidable` · theorem — CFG ambiguity is undecidable
- `def-chomsky-hierarchy` · definition — The Chomsky hierarchy of regular, context-free, decidable, and computably enumerable languages
- `thm-proper-inclusions-in-the-chomsky-hierarchy` · theorem — The inclusions in the Chomsky hierarchy are proper
- `fs-pcp-allows-symbol-reordering-within-dominoes` · false-statement — FALSE: PCP permits reordering symbols inside a domino
- `fs-two-decidable-cfls-have-decidable-intersection-emptiness` · false-statement — FALSE: decidable CFLs have a decidable intersection-emptiness problem

### `post-correspondence-and-language-undecidability-examples` — Post Correspondence and Language Undecidability: Examples and Counterexamples (3 item(s))

- `ex-modified-pcp-is-undecidable` · example — A computation-history domino system whose matches spell a halting run
- `ex-proper-inclusions-in-the-chomsky-hierarchy` · example — Witness languages for the proper inclusions in the Chomsky hierarchy
- `cex-pcp-allows-symbol-reordering-within-dominoes` · counterexample — A domino family where matching fails unless one illegally permutes symbols inside a tile

### `acceptable-numberings-smn-and-the-recursion-theorem` — Acceptable Numberings, the s-m-n Theorem, and Recursion (16 item(s))

- `def-numbering-of-partial-computable-functions` · definition — Numberings of partial computable functions
- `def-universal-and-acceptable-numbering` · definition — Universal and acceptable numberings
- `prop-fixed-machine-coding-is-acceptable` · proposition — The fixed machine coding gives an acceptable numbering
- `def-parameter-specialization-function` · definition — Parameter-specialization functions
- `thm-smn-parameter-theorem` · theorem — The s-m-n theorem
- `cor-effective-program-specialization` · corollary — Effective program specialization
- `def-computable-program-transformer` · definition — Computable program transformers
- `lem-self-reference-construction-from-smn` · lemma — The diagonal self-reference construction from s-m-n
- `thm-kleenes-second-recursion-theorem` · theorem — Kleene's second recursion theorem
- `thm-recursion-theorem-with-parameters` · theorem — The recursion theorem with parameters
- `def-productive-and-creative-set` · definition — Productive and creative sets
- `thm-nonhalting-is-productive-and-halting-is-creative` · theorem — The nonhalting set is productive and the halting set is creative
- `thm-myhill-isomorphism-theorem-for-creative-sets` · theorem — Myhill's isomorphism theorem for creative sets
- `prop-acceptable-numberings-are-computably-intertranslatable` · proposition — Acceptable numberings are computably intertranslatable
- `fs-recursion-theorem-needs-source-file-access` · false-statement — FALSE: the recursion theorem requires source-code access
- `fs-program-indices-are-unique` · false-statement — FALSE: a partial computable function has a unique program index

### `acceptable-numberings-smn-and-the-recursion-theorem-examples` — Acceptable Numberings, the s-m-n Theorem, and Recursion: Examples and Counterexamples (3 item(s))

- `ex-smn-parameter-theorem` · example — Specializing a two-argument program to obtain a unary residual program
- `ex-acceptable-numberings-are-computably-intertranslatable` · example — Compiling between two acceptable numberings
- `cex-recursion-theorem-needs-source-file-access` · counterexample — A quine obtained without inspecting its own source file

### `classical-np-completeness-reductions` — Classical NP-Completeness Reductions (19 item(s))

- `def-reduction-gadget-and-interface-invariant` · definition — Reduction gadgets and interface invariants
- `def-clique-independent-set-and-vertex-cover-problems` · definition — Clique, independent set, and vertex cover decision problems
- `thm-three-sat-reduces-to-clique` · theorem — 3SAT polynomial-time many-one reduces to CLIQUE
- `cor-clique-is-np-complete` · corollary — CLIQUE is NP-complete
- `thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible` · theorem — CLIQUE, INDEPENDENT SET, and VERTEX COVER are polynomially interreducible
- `cor-independent-set-and-vertex-cover-are-np-complete` · corollary — INDEPENDENT SET and VERTEX COVER are NP-complete
- `def-directed-hamiltonian-path-and-cycle-problems` · definition — Directed and undirected Hamiltonian path and cycle decision problems
- `thm-three-sat-reduces-to-directed-hamiltonian-cycle` · theorem — 3SAT polynomial-time many-one reduces to directed Hamiltonian cycle
- `thm-directed-reduces-to-undirected-hamiltonian-cycle` · theorem — Directed Hamiltonian cycle polynomial-time many-one reduces to undirected Hamiltonian cycle
- `cor-hamiltonian-path-and-cycle-are-np-complete` · corollary — Directed and undirected Hamiltonian path and cycle are NP-complete
- `def-subset-sum-and-partition` · definition — Subset sum and partition decision problems
- `thm-three-sat-reduces-to-subset-sum` · theorem — 3SAT polynomial-time many-one reduces to subset sum
- `thm-subset-sum-reduces-to-partition` · theorem — Subset sum polynomial-time many-one reduces to partition
- `def-set-cover` · definition — The set cover decision problem
- `thm-vertex-cover-reduces-to-set-cover` · theorem — Vertex cover polynomial-time many-one reduces to set cover
- `def-three-colourability` · definition — The three-colourability decision problem
- `thm-three-sat-reduces-to-three-colourability` · theorem — 3SAT polynomial-time many-one reduces to 3-COLORABILITY
- `fs-gadget-correctness-needs-only-one-direction` · false-statement — A gadget reduction is correct as soon as every yes-instance maps to a yes-instance
- `fs-pseudopolynomial-is-polynomial-in-bit-length` · false-statement — A pseudopolynomial algorithm is polynomial in the binary input length

### `classical-np-completeness-reductions-examples` — Classical NP-Completeness Reductions: Examples and Counterexamples (3 item(s))

- `ex-clique-is-np-complete` · example — A worked clause-cluster instance witnessing that CLIQUE is NP-complete
- `ex-three-sat-reduces-to-three-colourability` · example — A small 3SAT instance and its three-colourability gadget graph
- `cex-gadget-correctness-needs-only-one-direction` · counterexample — A forward-only mapping that is not a correct many-one reduction

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
`research/frontier-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-30`

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
