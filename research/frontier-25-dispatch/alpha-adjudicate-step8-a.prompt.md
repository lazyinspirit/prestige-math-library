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
group work, `research/frontier-25-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
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

run: frontier-25
role: alpha-adjudicate
label: step8-a
covers: 1, 4, 5

# Step 8 — group **a**, run `frontier-25`

You are the group Alpha for batches **1**, **4**, **5**: 3 A/B pair(s), 6 page(s), 82 item(s), 41 open rejection(s) over 41 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-round-annulus-is-connected-but-not-simply-connected` | `simply-connected-plane-domains-examples` | gpt-5.6-terra | `95104e9bbe621a7df4583a10613746a8fba235a8e1e7b0923e0f6959f4186426` |
| `cex-the-punctured-disc-is-connected-but-not-simply-connected` | `simply-connected-plane-domains-examples` | gpt-5.6-terra | `2cbd3b29c76580527a947eeb538f7d0ba713eba52dafe7a8384ea9dda0ace69e` |
| `cex-the-punctured-plane-separates-c-complement-from-spherical-complement` | `simply-connected-plane-domains-examples` | gpt-5.6-terra | `449b1dd1f0264e37cf2803fefe434b2c04ca73a91fb7d13766f2eb35ba315cf5` |
| `cor-prime-ideals-and-dimension-of-a-dvr` | `valuation-rings-and-discrete-valuation-rings` | gpt-5.6-terra | `b323bcc7f3a7b1a8ca7d39621da2cb5ba2c13ad7eebebbdfcf4669f76ad298f2` |
| `cor-von-mangoldt-mobius-inversion-formula` | `arithmetic-functions-and-dirichlet-convolution` | gpt-5.6-terra | `2da5f2322bc915ec0958c69177fb38a0baa4bd6eeaef9f1c12b2f6c0975f33d7` |
| `cor-winding-number-classifies-loops-in-the-punctured-plane` | `simply-connected-plane-domains` | gpt-5.6-terra | `9aa96371787a13f0202b0cba802e05f085fc5cc5239a3fe74419553c8167c8df` |
| `def-dirichlet-convolution-identity` | `arithmetic-functions-and-dirichlet-convolution` | gpt-5.6-terra | `4242f2efd9ce2e4def3bfaeaaf04741ff99fb2231a82460ade061ebf9b45562b` |
| `def-divisor-counting-function` | `arithmetic-functions-and-dirichlet-convolution` | gpt-5.6-terra | `a5ab47c8307fe40c35c4b33df9e03eaa688211505ccc3fc6db38c5af5fee09be` |
| `def-divisor-power-sum-functions` | `arithmetic-functions-and-dirichlet-convolution` | gpt-5.6-terra | `9b04b72231fc64eb915e9f2dd2f2c2817062da0197a9cd1a46199bcaa6f88cb9` |
| `def-liouville-function` | `arithmetic-functions-and-dirichlet-convolution` | gpt-5.6-terra | `09fce30d1466a9c04e6ec9e10f3dd1a5dbb22d53b39b31dfdcc5bf0ea5441866` |
| `def-mertens-function` | `arithmetic-functions-and-dirichlet-convolution` | gpt-5.6-terra | `bddbe71f7a7487679258b7f39192ca375c1fc10333b4098082001b4b27bad7c6` |
| `def-valuation-on-a-field` | `valuation-rings-and-discrete-valuation-rings` | gpt-5.6-terra | `c0d0779040a77b6a7638ca1b4ec0be5dfd5cfde76702d3285880ebac90f23396` |
| `ex-dirichlet-inverse-recursion` | `arithmetic-functions-and-dirichlet-convolution-examples` | gpt-5.6-terra | `80d1fde91818f5a76467928d5ab22e227dba9d15bc97eaf08f5af0face66e369` |
| `ex-euler-totient-as-a-mobius-convolution` | `arithmetic-functions-and-dirichlet-convolution-examples` | gpt-5.6-terra | `66801b0fbc74a02daa84037b7cfc4bd182bdebf44061e3f757fd3fa4761b232b` |
| `ex-every-convex-plane-domain-is-simply-connected` | `simply-connected-plane-domains-examples` | gpt-5.6-terra | `3cdd2bc17fe3b5e1a663b70e15bcae78c782c5135509bec7364363650b800df6` |
| `ex-every-star-shaped-plane-domain-is-simply-connected` | `simply-connected-plane-domains-examples` | gpt-5.6-terra | `9d468adac7028b2721b4240e24868aa0ec7e8e2823c2718cf21f2c290001f307` |
| `ex-liouville-square-indicator` | `arithmetic-functions-and-dirichlet-convolution-examples` | gpt-5.6-terra | `66cd8d389606462e74d05995c3e82fd31650e8e91c92ef826471cf409b6a440a` |
| `ex-localisation-of-a-pid-at-a-prime` | `valuation-rings-and-discrete-valuation-rings-examples` | gpt-5.6-terra | `7084696a56cf0ee722eb83c2b0a931c3e1de16fca7163ae50f4c74ddc50c31cc` |
| `ex-nondiscrete-ordered-subgroup-valuation` | `valuation-rings-and-discrete-valuation-rings-examples` | gpt-5.6-terra | `29cb193ee8edd62cefb3fe52d685e63c8d10f576ca87032552f9580bba5a12b3` |
| `ex-p-adic-dvr` | `valuation-rings-and-discrete-valuation-rings-examples` | gpt-5.6-terra | `348daacdbc56e3ad3c90be08d7f7fdfab4f2c3130129b77c3bf9ac5d49dc7632` |
| `ex-rank-two-valuation-ring-not-dvr` | `valuation-rings-and-discrete-valuation-rings-examples` | gpt-5.6-terra | `41c99656cbc24f2eb192c698df17cb24b3ebf8de5cf99e709167b9deac611c02` |
| `ex-the-complex-plane-satisfies-all-grand-equivalence-clauses` | `simply-connected-plane-domains-examples` | gpt-5.6-terra | `0f1752c7b4406558422372abd603e69d13be0fb8bb5455838d0551c47c79c6da` |
| `ex-the-slit-plane-is-simply-connected-by-the-principal-logarithm` | `simply-connected-plane-domains-examples` | gpt-5.6-terra | `f00c80ac90e637bc9d086d44be32f166b0dac16f3a10f442b0b65267fe5057ad` |
| `ex-the-unit-disc-satisfies-all-grand-equivalence-clauses` | `simply-connected-plane-domains-examples` | gpt-5.6-terra | `96f7c1e824cc88772e639f0054f19649619a3705464fdb0e3c6164168303b175` |
| `ex-valuation-ring-ideals-linearly-ordered` | `valuation-rings-and-discrete-valuation-rings-examples` | gpt-5.6-terra | `49b3fd685eaa17ed27dbe76d9c1cee9a2f70317d650c253e1d36296e8518a00c` |
| `ex-von-mangoldt-divisor-sum` | `arithmetic-functions-and-dirichlet-convolution-examples` | gpt-5.6-terra | `f0f7c272837f5bc977c74d4bc481c084994f4a178d051cc2c9961b74bea9046c` |
| `fs-connected-complement-in-c-implies-simple-connectivity` | `simply-connected-plane-domains-examples` | gpt-5.6-terra | `fe5e6f7ec84967a85a06ef04520f46d1f3e02492cff16e5460171333f3657bcd` |
| `fs-simply-connected-plane-domains-are-convex` | `simply-connected-plane-domains-examples` | gpt-5.6-terra | `b4dfc8f49ac2ff7d95fc4fe700121c0d6f303457ab0fb33c7bcf5ed76824a386` |
| `fs-simply-connected-plane-domains-are-star-shaped` | `simply-connected-plane-domains-examples` | gpt-5.6-terra | `08adc7a63ba4a77dd5638dfebef2b3dcf68b24652f79b1066c6030e201deb42b` |
| `lem-connected-spherical-complement-implies-null-homology` | `simply-connected-plane-domains` | gpt-5.6-terra | `cf741a47be2c75e6f63cf7c1221509783012366eb279b1deaed2f5244eced57a` |
| `lem-contractibility-implies-trivial-fundamental-group` | `simply-connected-plane-domains` | gpt-5.6-terra | `2773e79b98bc1eebb8cedc7ab343ce817009a7d830f24837afefb6b3580f1367` |
| `lem-null-homology-implies-connected-spherical-complement` | `simply-connected-plane-domains` | gpt-5.6-terra | `631ae1df2a9c07235105ce3ecfeb0ef899a902484fc86a8fe6bb254c40b341c8` |
| `lem-trivial-fundamental-group-implies-null-homology-for-plane-domains` | `simply-connected-plane-domains` | gpt-5.6-terra | `9e6aad602dc12eef0c0ef47fc8390a158e3aa4a6877496a1c8a2472bf3cfb455` |
| `prop-divisor-functions-under-dirichlet-convolution` | `arithmetic-functions-and-dirichlet-convolution` | gpt-5.6-terra | `2ec65b9f7573f944d69568c1efeae667f741a5589b68abe9ea3dfe1155a26334` |
| `rem-analytic-equivalences-from-global-cauchy-theory` | `simply-connected-plane-domains` | gpt-5.6-terra | `de8295f9407507127fee6814af110e3557e693663bbe61eafe7fcacb7ee85853` |
| `thm-dvr-ideal-and-module-length` | `valuation-rings-and-discrete-valuation-rings` | gpt-5.6-terra | `390b7101e1a39a98f79e2b27a6c3276ee21ae5b32d7c9df9ab18b730785751d3` |
| `thm-grand-equivalence-for-simply-connected-plane-domains` | `simply-connected-plane-domains` | gpt-5.6-terra | `cb1dc4f55c41373852408ca295d0f157b58547dd97986a898750dabe1403f66d` |
| `thm-homotopy-invariance-of-holomorphic-line-integrals` | `simply-connected-plane-domains` | gpt-5.6-terra | `ebfe76369e4d900effea032a60ecba777049a9217bf322abc6b64549c0bc6671` |
| `thm-noetherian-valuation-ring-characterisation` | `valuation-rings-and-discrete-valuation-rings` | gpt-5.6-terra | `181e8421e0e8f8897a949bb67bf43c9aabed7ba64597aef11a406bd11d9462b9` |
| `thm-null-homology-is-equivalent-to-global-harmonic-conjugates` | `simply-connected-plane-domains` | gpt-5.6-terra | `033715dd0a87eaaef19e21785e9a1bc7f99cb9a79e09e57d69c606608e297a40` |
| `thm-von-mangoldt-divisor-sum-identity` | `arithmetic-functions-and-dirichlet-convolution` | gpt-5.6-terra | `efad55af030a6c265b5b9af50fc86c916dd10974d41074c467fe6ac8f7d85eec` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-25`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-25-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-25-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-25-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-25-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
