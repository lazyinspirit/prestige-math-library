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
group work, `research/frontier-30-alpha-groups.json` is the assignment: it permits at
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

run: frontier-30
role: alpha-adjudicate
label: step8-f
covers: 8, 19, 20

# Step 8 adjudication — group **f**, run `frontier-30`

You are the group Alpha for batches **8**, **19**, **20**: 5 A/B pair(s), 10 page(s), 117 item(s), 51 open rejection(s) over 51 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-dirichlet-density-does-not-mean-integer-natural-density` | `dirichlet-characters-l-functions-and-primes-in-progressions-examples` | gpt-5.6-terra | `96a60ca63262bd0fec67e71081301f1f4fdf70e76c5b1d5e9fc38000a6f51092` |
| `cex-local-global-fails-for-a-cubic-curve` | `hilbert-symbols-and-the-quadratic-local-global-principle-examples` | gpt-5.6-terra | `e8239608dcbaabd2b1bbe06d0e675130a2b1dfa3181cbc1f7ae82e1160f4f457` |
| `cex-recursion-theorem-needs-source-file-access` | `acceptable-numberings-smn-and-the-recursion-theorem-examples` | gpt-5.6-terra | `e098987b4c60767c9545854fd5ef6a99140a90e5018a3e9aa03113f112beeaec` |
| `cor-effective-program-specialization` | `acceptable-numberings-smn-and-the-recursion-theorem` | gpt-5.6-terra | `2ff18b69ef41cfd2dcc2acb5abaaf75ed4477d6ad99a88124bc7187c2a48cdaa` |
| `cor-hamiltonian-path-and-cycle-are-np-complete` | `classical-np-completeness-reductions` | gpt-5.6-terra | `23a40f061fa6681dca1aa26e971ce606f16eec7ad4548205ca1d671687d90a64` |
| `def-chomsky-hierarchy` | `post-correspondence-and-language-undecidability` | gpt-5.6-terra | `6b1edd70ab8c7a21bab1abafa4e4252bf5e7ae3ab98e368503253bd368deaee4` |
| `def-hilbert-symbol-over-a-rational-completion` | `hilbert-symbols-and-the-quadratic-local-global-principle` | gpt-5.6-terra | `ac362a7d7887d97d4a9561084cabbca09be7ed1917e152555b9ae440149abe2e` |
| `def-natural-and-dirichlet-density` | `dirichlet-characters-l-functions-and-primes-in-progressions` | gpt-5.6-terra | `b5789eb9fa282399ee19d3c04a9ebc47b02235812c9deef1a3316c529f75f4d0` |
| `def-numbering-of-partial-computable-functions` | `acceptable-numberings-smn-and-the-recursion-theorem` | gpt-5.6-terra | `7679bafd07d58a4bd22ad41eed525b6ec384db9223463631ddeee6cf5c277155` |
| `def-parameter-specialization-function` | `acceptable-numberings-smn-and-the-recursion-theorem` | gpt-5.6-terra | `4360f8c47b0513ae57268279520596620449c29b7c734537227d270cdd4cb6ff` |
| `def-productive-and-creative-set` | `acceptable-numberings-smn-and-the-recursion-theorem` | gpt-5.6-terra | `fa8ba3eb71e542911c9e7895c30dcc887797a27acf9dadc57188478eee9a9364` |
| `def-rational-local-fields` | `hilbert-symbols-and-the-quadratic-local-global-principle` | gpt-5.6-terra | `2aefa3583f76c305e206f15dcfc6a85a6084e90431a96c0c09470ced6e0af9ff` |
| `def-reduction-gadget-and-interface-invariant` | `classical-np-completeness-reductions` | gpt-5.6-terra | `de32bacb4dfe88bb7d854fa65119fea4135ac1fa3db54438e8a3299653b83ec5` |
| `ex-clique-is-np-complete` | `classical-np-completeness-reductions-examples` | gpt-5.6-terra | `da0b49b665eb2eb5585219b85c509fc3407744e1704c4baf699730c845f1d436` |
| `ex-finite-bad-place-test-for-a-ternary-form` | `hilbert-symbols-and-the-quadratic-local-global-principle-examples` | gpt-5.6-terra | `5b673cf1c7ddbf942d73b657849f44c8a5657c6f0624763430095b8ad97c5ede` |
| `ex-hasse-minkowski-for-a-quaternary-form` | `hilbert-symbols-and-the-quadratic-local-global-principle-examples` | gpt-5.6-terra | `298b15881521f9c4e3d1b5209748da0128f0c63335eca882391f58f5a70a682e` |
| `ex-hilbert-one-place-principle` | `hilbert-symbols-and-the-quadratic-local-global-principle-examples` | gpt-5.6-terra | `e28a6eb92f948a064108873ab6b6b3c89bbde32922463ea756a6d076d70af60f` |
| `ex-modified-pcp-is-undecidable` | `post-correspondence-and-language-undecidability-examples` | gpt-5.6-terra | `d2141c2b4bfcad09721ba4fa3dc48147a775785db9a362306658a72fb7952dfb` |
| `ex-smn-parameter-theorem` | `acceptable-numberings-smn-and-the-recursion-theorem-examples` | gpt-5.6-terra | `f8299bdf94c1d4e3d379a2507538649742b3629cb7682be7cd2609a5ad613b98` |
| `ex-the-character-chi-four-and-leibniz-series` | `dirichlet-characters-l-functions-and-primes-in-progressions-examples` | gpt-5.6-terra | `7f13b38c168631c04d41160aea209e6130a891bd8b8510d030e1aba7edc55e51` |
| `ex-three-sat-reduces-to-three-colourability` | `classical-np-completeness-reductions-examples` | gpt-5.6-terra | `69b72bb98eda1a1818fa6b83033fa81ae6f7e826012b0eca3f61605d1e4f18e6` |
| `lem-binary-quadratic-representation-via-hilbert-symbol` | `hilbert-symbols-and-the-quadratic-local-global-principle` | gpt-5.6-terra | `d994708aed3fb9e06d9cf3db7896e10b7fd4952b3642d87cc2a9a91082a56feb` |
| `lem-computation-history-domino-encoding` | `post-correspondence-and-language-undecidability` | gpt-5.6-terra | `6df2423eb5177922893f763d7723684eee4dbf81f60b5c232c1311fd584ba99e` |
| `lem-equivalent-definitions-of-the-hilbert-symbol` | `hilbert-symbols-and-the-quadratic-local-global-principle` | gpt-5.6-terra | `5f4e956687940047112a7da645d62cd610a992b874c4db5ea390718c3400d30a` |
| `lem-finite-field-quadratic-isotropy-in-dimension-at-least-three` | `hilbert-symbols-and-the-quadratic-local-global-principle` | gpt-5.6-terra | `5feb16aba712ca3160e5ef9f16ecd06e01a5a01977bc75ab6826a37029c132ec` |
| `lem-modified-pcp-reduces-to-pcp` | `post-correspondence-and-language-undecidability` | gpt-5.6-terra | `e23ae6d0149b3eae44522a2371729c1ebe32c9a3424012e75d578b30e9a08ab2` |
| `lem-positive-log-dirichlet-series-nonvanishing` | `dirichlet-characters-l-functions-and-primes-in-progressions` | gpt-5.6-terra | `b6f312ac7877e798d14a1b9b3c79efc676f8c776babf19b4fe8e548aeceecd50` |
| `lem-real-dirichlet-l-nonzero-at-one` | `dirichlet-characters-l-functions-and-primes-in-progressions` | gpt-5.6-terra | `d4aba34d693a4dccf491bc6b1593ee190b0aecbc7a9cd7c49eea51b7c4f43055` |
| `prop-fixed-machine-coding-is-acceptable` | `acceptable-numberings-smn-and-the-recursion-theorem` | gpt-5.6-terra | `6159f55228e3d79425569321713a0cbd8e18886352cc86c6e5bd57fc1e7d544a` |
| `thm-cfg-ambiguity-is-undecidable` | `post-correspondence-and-language-undecidability` | gpt-5.6-terra | `1bb61af7a85f23de9d96c59ec8607fe172ed8276d5432cf88342a5a6f8e88c53` |
| `thm-cfg-intersection-emptiness-is-undecidable` | `post-correspondence-and-language-undecidability` | gpt-5.6-terra | `67854e1608216eb6629fe30ec05b318a4e5662e5d1a5ab736131857bead87985` |
| `thm-cfg-universality-is-undecidable` | `post-correspondence-and-language-undecidability` | gpt-5.6-terra | `39eb8a9a008208488a29cf9dec064d2926050ebf6a7153987bcdd89d39ed6c72` |
| `thm-dirichlet-character-orthogonality` | `dirichlet-characters-l-functions-and-primes-in-progressions` | gpt-5.6-terra | `dfaeae28b72325890799f92fb0892d28594b528ad977a452567b4c8067526463` |
| `thm-hasse-minkowski-for-ternary-forms-over-q` | `hilbert-symbols-and-the-quadratic-local-global-principle` | gpt-5.6-terra | `6d29a29af3014f090b95bd5c8f71f5d79b020ea6e50ab3052c3bb395db47334d` |
| `thm-hasse-minkowski-over-the-rationals` | `hilbert-symbols-and-the-quadratic-local-global-principle` | gpt-5.6-terra | `551068f457fcbdb78465ec725b3b8bfde1b8ef4839b0bddefc2b88328552aa87` |
| `thm-hilbert-reciprocity-over-the-rationals` | `hilbert-symbols-and-the-quadratic-local-global-principle` | gpt-5.6-terra | `1fe6f87cfdc15852e1979734036330648a32806e7cb5157b20b06dfadfe77b5e` |
| `thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate` | `hilbert-symbols-and-the-quadratic-local-global-principle` | gpt-5.6-terra | `fea99eb59b452fc9629f410004977af04cbf363a5f04ef71bc745fda8bafc380` |
| `thm-mertens-primes-arithmetic-progressions` | `dirichlet-characters-l-functions-and-primes-in-progressions` | gpt-5.6-terra | `6843241b36d2b08f8169a3548c544f67058df396596c9cc27d980fcb6a0ff929` |
| `thm-modified-pcp-is-undecidable` | `post-correspondence-and-language-undecidability` | gpt-5.6-terra | `908ce8e872d9ff23f8b456bf6ec677fb8da70bf9a31b474ec25a4c5329d37994` |
| `thm-myhill-isomorphism-theorem-for-creative-sets` | `acceptable-numberings-smn-and-the-recursion-theorem` | gpt-5.6-terra | `a32a128aa031240d5517efd0e33fafbd4e32b05a2e7ff7bbbeb1a693c9fd90ba` |
| `thm-natural-density-implies-dirichlet-density` | `dirichlet-characters-l-functions-and-primes-in-progressions` | gpt-5.6-terra | `9e07cb8c6799b1e8fcce442f0f9f30af0693f9b1f3130d319d25451fde2172d7` |
| `thm-nonhalting-is-productive-and-halting-is-creative` | `acceptable-numberings-smn-and-the-recursion-theorem` | gpt-5.6-terra | `d917ec1aa6ad8a72f2f28e7aba53f0e6b00bf6826b1c5d444fc7fbe89db7b38c` |
| `thm-odd-p-hilbert-symbol-formula` | `hilbert-symbols-and-the-quadratic-local-global-principle` | gpt-5.6-terra | `13927fc89036ee489c83a3da2ed95162bfcf1a2a9e3591f0a9f7aa42778b1089` |
| `thm-primes-residue-class-dirichlet-density` | `dirichlet-characters-l-functions-and-primes-in-progressions` | gpt-5.6-terra | `ecc2f662cac115444612427a6b75794188e395fedc195bda83651aaaeb3c1d88` |
| `thm-proper-inclusions-in-the-chomsky-hierarchy` | `post-correspondence-and-language-undecidability` | gpt-5.6-terra | `1cbeb77ae1c4428a5f0e85c821b82fcdb4f47ce615fa3632752c222176842907` |
| `thm-three-sat-reduces-to-clique` | `classical-np-completeness-reductions` | gpt-5.6-terra | `e4d12cdeda7935195c402c33c7961d02179d3b95132e37db88f8d1261603b654` |
| `thm-three-sat-reduces-to-directed-hamiltonian-cycle` | `classical-np-completeness-reductions` | gpt-5.6-terra | `fe462d5474e63dc21f1af96a77c0a6d4d6b11a52cc30d56a5f947e475e1751c3` |
| `thm-three-sat-reduces-to-subset-sum` | `classical-np-completeness-reductions` | gpt-5.6-terra | `83a625c0f6f8fdf796d2953d30e39f2d7daeac18ad5733387c02b82ee54f918f` |
| `thm-three-sat-reduces-to-three-colourability` | `classical-np-completeness-reductions` | gpt-5.6-terra | `bb9deddccd205af36507f796b74afd50c7e7f6bfc1ba4b98d8bb531612ac65e8` |
| `thm-two-adic-hilbert-symbol-formula` | `hilbert-symbols-and-the-quadratic-local-global-principle` | gpt-5.6-terra | `467bc6fbc64230adcc554a626f218713291f9a591946abb88e10f090f085f0db` |
| `thm-vertex-cover-reduces-to-set-cover` | `classical-np-completeness-reductions` | gpt-5.6-terra | `2053ad35f8438f90a41248adbe717b7664d312ea40af0c383a00db89b7c58f64` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-30`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-30-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For an incoming alert, append the owning-group disposition to
`research/frontier-30-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-30-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-30-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
