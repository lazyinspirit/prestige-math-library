# Batch 15 authoring notes — Fusion Data for Non-Invertible Defects

## Plan and inventory reconciliation

The complete assigned design is `research/plan-advanced-qft-and-supersymmetry-track.md`, § “Fusion Data for Non-Invertible Defects” (L205 onward). The exact plan rows are `qftx-defect-fusion-mathematics` and `qftx-defect-fusion-mathematics-examples` in `research/plan-spec.json` (pages[1291–1292]). The design and current plan agree on page IDs, title, A/B pairing, order 971, category/library, empty `requires` on A, and B requiring A. No conflict found. The planned item contract is only `def-aqft-noninvertible-defect-fusion`, with `proposed_deps: []`, no declared external supplier IDs, and a construction/definition obligation; the final item adds only inspected mathematical suppliers needed for exact fusion and monoidal definitions.

Batch evidence `research/advanced-qft-supersymmetry-build-2026-10-23-batch-15.pages.json` confirms the same A/B pair and initially empty inventories. The authoritative dependency-level record assigns batch 15 level 0 with no in-run batch requirements. The A definition has no in-run suppliers and is level 0. The B examples consume that A definition and are level 1. They are authored after the A supplier.

## Completed item: `def-aqft-noninvertible-defect-fusion`

Claim: defines exact finite semisimple ordinary fusion-category data and a semistrict finite semisimple fusion-2-category presentation, including associativity/pentagon, units, rigidity/duals, simple unit, and the distinction between simple and tensor-invertible objects. It states explicitly that unitarity and physical realization are not implied. Conventions: ordinary fusion category uses the exact local finite semisimple tensor-category interface; the higher branch uses the Douglas–Reutter Gray-monoid convention and their finite semisimple 2-category/idempotent-completeness definitions. Mathematical dependencies are `def-fusion-and-multifusion-category` and `def-monoidal-category`; no physical supplier is used. `dependency_level: 0`.

Full-text sources inspected: Etingof–Gelaki–Nikshych–Ostrik, *Tensor Categories*, §§2.1–2.2, 2.10–2.11, and 4.1, author-hosted full PDF <https://math.mit.edu/~etingof/egnobookfinal.pdf>; Douglas–Reutter, *Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds*, §§1.2.2–1.4.2 and 2.1.1–2.1.6, full arXiv PDF <https://arxiv.org/pdf/1812.11933>. The first supports ordinary monoidal, rigid, finite semisimple fusion data and the ordinary examples; the second supports the exact 2-categorical coherence and fusion definition. Neither source supplies a physical QFT realization. Fetch stamps and source resolution are recorded below.

No mathematical proof is claimed for the Definition. Its source citations are construction/terminology support, not a substitute for the explicit data and coherence clauses in the carrier. The TikZ pentagon is explanatory; no argument relies on it.

## Authoring checkpoint (follow-up completed below)

Author the B examples `Rep(S_3)` with a simple non-invertible two-dimensional object, `Vec_{Z_2}` with a non-invertible direct-sum object, and the normalized `Z_2` 3-cocycle associator example. The exact supplier interface and all fusion/associator checks will be recorded in each item’s Facts, verification steps, proof contract, and manifest row.

## Completed item: `ex-aqft-noninvertible-s3-standard-object`

Claim and conventions: in the ordinary finite-dimensional complex representation category of $S_3$, the irreducibles are $\mathbf1$, sign $\varepsilon$, and the two-dimensional representation $V$ with $r=\operatorname{diag}(\zeta,\zeta^2)$ and $s$ swapping the basis. The complete local argument proves $V\otimes V\cong\mathbf1\oplus\varepsilon\oplus V$, checks that the category satisfies the finite semisimple fusion definition, and rules out a right tensor inverse for $V$. It is an abstract mathematical example only. Exact deps: `def-aqft-noninvertible-defect-fusion`, `def-finite-dimensional-representation-of-a-group-over-a-field`, `def-subrepresentation-and-irreducible-representation`, `thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order`, and `lem-qsmx-finite-group-irrep-dimension-square-sum`; `dependency_level: 1` because the A definition is its only in-run supplier.

Source context: Etingof et al., *Tensor Categories*, §4.1, Example 4.1.2, author-hosted full PDF <https://math.mit.edu/~etingof/egnobookfinal.pdf>, states the representation-category fusion context under characteristic zero. The specific $S_3$ matrices, decomposition and non-invertibility are proved locally; the book is not cited as a proof of those calculations. The Maschke and irreducible-dimension suppliers were read in full locally, with their actual hypotheses checked against $\mathbb C$ and $|S_3|=6$. Source stamps and scoped formatting checks passed; see finalization record below.

Follow-up: completed; see finalization record below.

## Completed item: `ex-aqft-noninvertible-z2-sum`

Claim: the category of finite-dimensional $\mathbb Z_2$-graded complex vector spaces is finite semisimple and rigid with simple unit; the direct-sum object $D=\delta_0\oplus\delta_1$ satisfies $D\otimes D\cong2\delta_0\oplus2\delta_1$ and has no right tensor inverse. The item explicitly says that $D$ is reducible and makes no physical-realization claim. Exact dependency: `def-aqft-noninvertible-defect-fusion`; `dependency_level: 1`.

Source context: Etingof et al., *Tensor Categories*, §2.3, group-graded vector spaces and tensor product, printed pp. 27–28, and §4.1, fusion-category examples, printed pp. 65–66, full author-hosted PDF <https://math.mit.edu/~etingof/egnobookfinal.pdf>. The grading decomposition, duality maps, direct-sum fusion calculation, and no-inverse argument are written and verified locally. No independent finite computation is needed beyond those explicit two-grade calculations. Scoped formatting and fetch stamps passed; see finalization record below.

Follow-up: completed; see finalization record below.

## Completed item: `ex-aqft-fusion-z2-twisted-associator`

Claim and conventions: for $G=\mathbb Z_2$, $\omega(a,b,c)=(-1)^{abc}$ is normalized and satisfies the multiplicative 3-cocycle identity. The associated graded-vector-space category has two simple objects, fusion $\delta_a\otimes\delta_b\cong\delta_{a+b}$, and an associator scalar $-1$ on $(\delta_1,\delta_1,\delta_1)$; the untwisted package has the same multiplicities and scalar $+1$. The item explicitly does not claim that the two categories are inequivalent. Dependencies: `def-aqft-noninvertible-defect-fusion` and `def-monoidal-category`; `dependency_level: 1`.

Source context: Etingof et al., *Tensor Categories*, Example 2.3.8 and §4.1, full author-hosted PDF <https://math.mit.edu/~etingof/egnobookfinal.pdf>. The source gives the cocycle-twisted associator construction; the $\mathbb Z_2$ exponent identity, normalization, duality, and comparison of associator components are checked locally. No continuum or physical interpretation is claimed. Scoped checks and source-fetch stamping passed; see finalization record below.

Follow-up: completed; see finalization record below.

## Completed item: `ex-aqft-fusion-z2-twisted-associator`

Claim and conventions: the normalized function $\omega(a,b,c)=(-1)^{abc}$ on additive $\mathbb Z_2$ satisfies the 3-cocycle equation. Its graded-vector-space category has fusion rule $\delta_a\otimes\delta_b\cong\delta_{a+b}$ and associator $-1$ on $(\delta_1,\delta_1,\delta_1)$; the untwisted data have identical multiplicities but associator $+1$. No monoidal inequivalence claim is made. Dependencies are `def-aqft-noninvertible-defect-fusion` and `def-monoidal-category`; `dependency_level: 1`.

Source context: Etingof et al., *Tensor Categories*, Example 2.3.8, printed pp. 27–28, and §4.1, printed pp. 65–66, full author-hosted PDF <https://math.mit.edu/~etingof/egnobookfinal.pdf>. The cocycle identity, normalization, pentagon, unit triangle, duality and comparison of fusion coefficients versus associator values are checked locally. The finite $\mathbb Z_2$ cocycle equation is an exact algebraic check on all four variables. Source-fetch stamping and final formatting checks passed; see finalization record below.

Follow-up: completed; see finalization record below.

The A/B inventory now has three B examples after the level-0 A definition: `ex-aqft-noninvertible-s3-standard-object`, `ex-aqft-noninvertible-z2-sum`, and `ex-aqft-fusion-z2-twisted-associator`, all at dependency level 1. The S3 item uses the current published local math lemma `lem-qsmx-finite-group-irrep-dimension-square-sum` (domain mathematics, `verification.verified` dated 2026-10-22) plus pinned finite-representation definitions and Maschke. The local lemma's full proof and its direct supporting statements/proofs were inspected; it applies to $S_3$ over $\mathbb C$ and its hypotheses match. Five root mathematics imports used by this pair match their `math-imports.json` pins and current original bytes: `def-fusion-and-multifusion-category`, `def-monoidal-category`, `def-finite-dimensional-representation-of-a-group-over-a-field`, `def-subrepresentation-and-irreducible-representation`, and Maschke. `lem-qsmx-finite-group-irrep-dimension-square-sum` is a local published mathematics carrier, not a root import pin.

## Finalization record — 2026-10-23

The assigned A/B pair, all four item carriers, proof contracts, coverage, cross-batch dependency array, and Step 1 records are complete. The statement-first scan found no statement/definition/example body hyperlinks; all page bodies remain empty and both inventories are in sync with the batch manifest. The planned definition was authored first; the three examples follow it at dependency level 1. Recomputed batch-15 levels are 0 (no in-run batch requirements); item levels are 0 for `def-aqft-noninvertible-defect-fusion` and 1 for each B example. No dependency cycle or cross-batch edge was found, so `batch-15.cross-batch-dependencies.json` is the JSON array `[]`.

Source coverage is complete with no failed retrievals or drops (`source_resolution: []`). The Etingof–Gelaki–Nikshych–Ostrik full PDF at <https://math.mit.edu/~etingof/egnobookfinal.pdf> was fetch-verified at 3,067,397 bytes, SHA-256 prefix `a40d076197b666d8`, 362 pages; its three uses support the A ordinary fusion definition, the `Rep(S_3)` category context and the two graded/cocycle examples. The Douglas–Reutter full PDF at <https://arxiv.org/pdf/1812.11933> was fetch-verified at 1,159,461 bytes, SHA-256 prefix `d7859172a4e02d3e`, 110 pages; it supports the A page’s finite semisimple fusion-2-category and Gray-monoid convention. The exact sections, per-item support, limitations, three retrieval timestamps, and `included` dispositions are recorded in the coverage JSON. No source claim substitutes for the local calculations or asserts a QFT realization.

Step 1 readiness was checked with `loadStep1Record` and `step1Decision` from the current support modules before recording. All four exact direct dependency lists were captured in non-owner records; each record now reports `decision: ready` and a current item/dependency-closure hash. There is no unresolved prerequisite for this batch. The S3 item’s representation, subrepresentation, Maschke and dimension-square carriers were inspected with the complex-field and finite-group hypotheses matched; the in-run definition is the exact authored A supplier for all examples.

Final scoped commands and outcomes: `content-policy.mjs` passed for 4 items with 0 errors/warnings (an initial concurrent scan encountered a transient missing file from another batch, and the immediate rerun passed); `depcheck.mjs --items-file /tmp/batch-15-items.json --json` passed the four focused items and their 791-item closure with 0 errors/warnings; `rendercheck.mjs` passed all four items and both pages; the normative `precheck.mts` passed all 3 proof-bearing examples; `proof-layout.mjs` passed all 4 items and 12 numbered steps with 0 defects; strict `proof-contract.mjs` passed 4/4 with 0 errors/warnings; `source-fetch-check.mjs` verified 3/3 sources and resolved all 3 with zero documented drops; scoped dependency-level recomputation returned no errors and levels 0/1 as above. The focused statement-first inspection reported no defects.

The run-wide proof-contract coverage helper remains blocked outside this assignment: it reported `Empty or invalid frontier page inventory aqft-susy-math-foundations`. No other batch was edited. This does not prevent the batch-scoped 4/4 strict contract check or the current batch-15 readiness records. Independent review, aggregate owner join, and later gates remain outside this authoring completion; no acceptance or publication is claimed.
