# Step 8 — group **a**, run `frontier-25`

You are the group Alpha for batches **1**, **4**, **5**: 3 A/B pair(s), 6 page(s), 82 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-25-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-25-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `valuation-rings-and-discrete-valuation-rings` | A | commutative-algebra | 111.015 | `noether-normalisation-and-nullstellensatz-examples` |
| 1 | `valuation-rings-and-discrete-valuation-rings-examples` | B | commutative-algebra | 111.016 | `valuation-rings-and-discrete-valuation-rings` |
| 4 | `simply-connected-plane-domains` | A | complex-analysis | 335 | `the-riemann-mapping-theorem`, `the-fundamental-group`, `covering-spaces-and-lifting`, `the-fundamental-group-of-the-circle` |
| 4 | `simply-connected-plane-domains-examples` | B | complex-analysis | 336 | `simply-connected-plane-domains` |
| 5 | `arithmetic-functions-and-dirichlet-convolution` | A | number-theory | 348.001 | `bloch-schottky-and-picard-examples`, `incidence-algebras-and-mobius-inversion`, `finite-fields-and-cyclotomic-extensions` |
| 5 | `arithmetic-functions-and-dirichlet-convolution-examples` | B | number-theory | 348.002 | `arithmetic-functions-and-dirichlet-convolution` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `valuation-rings-and-discrete-valuation-rings` — Valuation Rings and Discrete Valuation Rings (19 item(s))

- `def-totally-ordered-abelian-group` · definition — Totally ordered abelian groups
- `def-valuation-on-a-field` · definition — Valuations on a field
- `def-valuation-ring` · definition — Valuation rings
- `lem-valuation-ring-is-local` · lemma — A valuation ring is local
- `thm-valuation-ring-characterisations` · theorem — Characterizations of valuation rings
- `def-value-group-of-a-valuation-ring` · definition — The value group of a valuation ring
- `thm-every-valuation-ring-arises-from-its-value-group` · theorem — A valuation ring is recovered from its value group
- `thm-valuation-ring-is-integrally-closed` · theorem — Valuation rings are integrally closed
- `def-discrete-valuation` · definition — Discrete valuations
- `def-discrete-valuation-ring` · definition — Discrete valuation rings
- `def-uniformising-parameter` · definition — Uniformising parameters
- `thm-dvr-element-normal-form` · theorem — Every nonzero fraction is a unit times a power of a uniformiser
- `thm-ideals-in-a-dvr` · theorem — Ideals in a DVR are powers of the maximal ideal
- `cor-prime-ideals-and-dimension-of-a-dvr` · corollary — Prime ideals and dimension of a DVR
- `thm-equivalent-characterisations-of-a-dvr` · theorem — Equivalent characterizations of a DVR
- `thm-noetherian-valuation-ring-characterisation` · theorem — A Noetherian valuation ring is a field or a DVR
- `thm-dvr-ideal-and-module-length` · theorem — Length and valuation in a DVR
- `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr` · theorem — Height-one localizations of normal Noetherian domains are DVRs
- `cor-dvr-is-a-pid` · corollary — Every DVR is a PID

### `valuation-rings-and-discrete-valuation-rings-examples` — Valuation Rings and Discrete Valuation Rings — Examples (8 item(s))

- `ex-p-adic-dvr` · example — The p-adic valuation ring
- `ex-localisation-of-a-pid-at-a-prime` · example — Localizing a PID at a nonzero prime
- `ex-plane-curve-local-ring-not-dvr` · example — A cusp local ring is not a DVR
- `ex-rank-two-valuation-ring-not-dvr` · example — A rank-two valuation ring that is not a DVR
- `ex-nondiscrete-ordered-subgroup-valuation` · example — A nondiscrete rank-one valuation from incommensurate values
- `ex-dvr-length-computation` · example — Computing the length of R/(pi^n)
- `ex-uniformisers-and-dvr-ideal-arithmetic` · example — Uniformisers and ideal arithmetic in a DVR
- `ex-valuation-ring-ideals-linearly-ordered` · example — Ideals in a valuation ring are linearly ordered

### `simply-connected-plane-domains` — Simply Connected Plane Domains: the Grand Equivalence (16 item(s))

- `thm-homotopy-invariance-of-holomorphic-line-integrals` · theorem — Endpoint-fixed homotopic paths have equal holomorphic line integrals
- `cor-cauchy-theorem-for-null-homotopic-loops` · corollary — A closed contour path-homotopic to a constant loop has zero integral against every holomorphic function
- `thm-winding-number-equals-circle-degree` · theorem — For loops in C times, the winding number about 0 equals the circle degree
- `lem-trivial-fundamental-group-implies-null-homology-for-plane-domains` · lemma — A plane domain with trivial fundamental group is homologically simply connected
- `lem-connected-spherical-complement-implies-null-homology` · lemma — A connected spherical complement forces every cycle in the domain to be null-homologous
- `lem-null-homology-implies-connected-spherical-complement` · lemma — A homologically simply connected plane domain has connected spherical complement
- `rem-analytic-equivalences-from-global-cauchy-theory` · remark — The global Cauchy page already equates homological simple connectivity with primitives, zero periods, holomorphic logarithms, and holomorphic roots
- `thm-null-homology-is-equivalent-to-global-harmonic-conjugates` · theorem — A plane domain is homologically simply connected exactly when every harmonic function has a global conjugate
- `lem-null-homology-gives-the-plane-or-disc-alternative` · lemma — A homologically simply connected plane domain is either the plane or conformally equivalent to the disc
- `lem-the-plane-or-disc-alternative-gives-contractibility` · lemma — A plane domain homeomorphic to the plane or to the disc is contractible
- `lem-contractibility-implies-trivial-fundamental-group` · lemma — A contractible space has trivial fundamental group
- `thm-grand-equivalence-for-simply-connected-plane-domains` · theorem — For a plane domain, the complement, homology, primitive, logarithm, conjugate, conformal, homotopy, and contractibility conditions are equivalent
- `rem-simply-connected-convention-for-plane-domains` · remark — Under the grand theorem's Choice hypothesis, plane-domain simple connectivity means any grand-equivalent clause
- `cor-spherical-complement-characterization-of-plane-simple-connectivity` · corollary — Assuming the Axiom of Choice, a plane domain is simply connected exactly when its spherical complement is connected
- `cor-winding-number-classifies-loops-in-the-punctured-plane` · corollary — Winding number identifies the fundamental group of C times with the integers
- `rem-choice-strength-of-the-grand-equivalence` · remark — Once the cited Riemann mapping theorem is granted, the new implications in the grand equivalence are choice-free

### `simply-connected-plane-domains-examples` — Simply Connected Plane Domains: the Grand Equivalence — Examples (12 item(s))

- `ex-the-unit-disc-satisfies-all-grand-equivalence-clauses` · example — The unit disc satisfies all of the grand-equivalent simple connectivity clauses
- `ex-the-complex-plane-satisfies-all-grand-equivalence-clauses` · example — The complex plane satisfies all of the grand-equivalent simple connectivity clauses
- `ex-the-slit-plane-is-simply-connected-by-the-principal-logarithm` · example — Assuming the Axiom of Choice, the slit plane is simply connected
- `ex-every-convex-plane-domain-is-simply-connected` · example — Every convex plane domain is simply connected
- `ex-every-star-shaped-plane-domain-is-simply-connected` · example — Every star-shaped plane domain is simply connected
- `ex-a-dumbbell-domain-is-simply-connected-but-not-star-shaped` · example — A dumbbell-shaped plane domain can be simply connected without being star-shaped
- `cex-the-punctured-plane-separates-c-complement-from-spherical-complement` · counterexample — The punctured plane has connected complement in C but disconnected spherical complement
- `cex-a-round-annulus-is-connected-but-not-simply-connected` · counterexample — A round annulus is connected but not simply connected
- `cex-the-punctured-disc-is-connected-but-not-simply-connected` · counterexample — The punctured disc is connected but not simply connected
- `fs-connected-complement-in-c-implies-simple-connectivity` · false-statement — FALSE: a connected plane-domain complement in C already implies simple connectivity
- `fs-simply-connected-plane-domains-are-convex` · false-statement — FALSE: every simply connected plane domain is convex
- `fs-simply-connected-plane-domains-are-star-shaped` · false-statement — FALSE: every simply connected plane domain is star-shaped

### `arithmetic-functions-and-dirichlet-convolution` — Arithmetic Functions and Dirichlet Convolution (19 item(s))

- `def-arithmetic-function` · definition — Arithmetic functions on the positive integers
- `def-multiplicative-arithmetic-function` · definition — Multiplicative arithmetic functions
- `def-completely-multiplicative-arithmetic-function` · definition — Completely multiplicative arithmetic functions
- `def-dirichlet-convolution` · definition — Dirichlet convolution of arithmetic functions
- `def-dirichlet-convolution-identity` · definition — The Dirichlet-convolution identity and the constant-one function
- `thm-dirichlet-convolution-commutative-ring` · theorem — Arithmetic functions form a commutative ring under pointwise addition and Dirichlet convolution
- `thm-dirichlet-convolution-invertibility-criterion` · theorem — An arithmetic function has a Dirichlet inverse exactly when its value at 1 is nonzero
- `thm-dirichlet-convolution-preserves-multiplicativity` · theorem — Dirichlet convolution preserves multiplicativity, and multiplicative inverses stay multiplicative
- `thm-multiplicative-functions-determined-by-prime-powers` · theorem — Multiplicative functions are determined by their prime-power values
- `def-divisor-counting-function` · definition — The divisor-counting function tau
- `def-divisor-power-sum-functions` · definition — The power functions id_k and the divisor-power-sum functions sigma_k
- `def-liouville-function` · definition — Liouville's function
- `def-von-mangoldt-function` · definition — The von Mangoldt function
- `prop-divisor-functions-under-dirichlet-convolution` · proposition — The divisor functions arise by Dirichlet convolution
- `thm-von-mangoldt-divisor-sum-identity` · theorem — The divisor sum of von Mangoldt is the arithmetic-function logarithm
- `cor-von-mangoldt-mobius-inversion-formula` · corollary — Möbius inversion gives Lambda = mu * log
- `cor-number-of-monic-irreducible-polynomials-over-a-finite-field` · corollary — Möbius inversion gives the closed formula for the number of monic irreducibles over F_q
- `prop-liouville-convolution-square-indicator` · proposition — The convolution 1 * lambda detects perfect squares
- `def-mertens-function` · definition — The Mertens function M(x)

### `arithmetic-functions-and-dirichlet-convolution-examples` — Arithmetic Functions and Dirichlet Convolution — Examples (8 item(s))

- `ex-dirichlet-convolution-table-through-twelve` · example — A Dirichlet-convolution table through 12
- `ex-dirichlet-inverse-recursion` · example — Computing a Dirichlet inverse recursively
- `ex-divisor-counting-and-sum-prime-power-formulas` · example — Prime-power formulas for tau and sigma_k in concrete cases
- `ex-euler-totient-as-a-mobius-convolution` · example — Euler's totient as the convolution mu * id_1
- `ex-von-mangoldt-divisor-sum` · example — Checking the von Mangoldt divisor-sum identity on sample integers
- `ex-liouville-square-indicator` · example — Working out the square-indicator convolution for prime powers
- `cex-multiplicative-does-not-mean-completely-multiplicative` · counterexample — Tau is multiplicative but not completely multiplicative
- `cex-the-mertens-conjecture-is-false` · counterexample — The Mertens conjecture is false

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
`research/frontier-25-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — exact closure recovery, `frontier-25`

Read `research/frontier-25-judge-closure.json`,
`research/frontier-25-judge.jsonl`,
`research/frontier-25-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-25-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-25-step8-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/frontier-25-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
