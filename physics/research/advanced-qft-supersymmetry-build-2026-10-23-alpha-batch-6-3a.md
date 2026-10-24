# Batch 6 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`; group: `batch-6`. No judging, stamping, publication or engine transition is performed.

## Review checkpoints in dispatched order

### `def-qftx-nonabelian-lattice-gauge-data`

Product smooth charts, identity tuple and empty-link point mass are explicit; each representation has a positive Hermitian form. The action has the correct left-action order. Supplied bi-invariant probability is data, not an asserted Haar existence theorem. The invariant L2 classes and directional derivatives are discharged by the well-definedness lemma; no disconnected-component inference is made. AC_omega is inherited only. Outside transfer lemma F3/1.1/3.1 and regulator Postulate use the same SU(2), positive form and supplied Haar probability, and remain valid.

Actual suppliers: `def-countable-choice`, `def-qftx-nonabelian-gauge-data`, `def-differential-of-a-smooth-map`, `def-lie-group`, `def-topological-manifold-without-boundary`, `def-borel-sigma-algebra`, `lem-borel-product-of-second-countable-spaces`, `def-measure`, `def-measure-space`, `def-probability-measure`, `def-left-right-and-bi-invariant-borel-measure-on-a-lie-group`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-tdmath-measure-integral`, `def-measure-with-density`, `def-complex-l-two-inner-product`, `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`.

### `def-qftx-su2-wilson-plaquette-measure`

The map S3 to the displayed SU(2) matrices is bijective by the inverse/adjugate calculation in the average lemma; its coordinate area is 2 pi^2. The normalization bound exp(-beta)<=z<=exp(beta) holds at beta=0 as well as positive beta. beta=4/g0^2 is imposed only when g0>0 is used; beta=0 remains an allowed separate finite measure. No continuum expectation is defined.

Actual suppliers: `def-countable-choice`, `def-qftx-nonabelian-lattice-gauge-data`, `ex-unitary-and-special-unitary-lie-groups`, `thm-heine-borel-rn`, `def-borel-sigma-algebra`, `def-measure`, `def-measure-space`, `def-probability-measure`, `def-polar-surface-measure-on-the-unit-sphere`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-tdmath-measure-integral`, `def-measure-with-density`.

### `def-qftx-wilson-loop`

Formal reverse edges have the required endpoint types and inverse link matrices. A length-zero loop has a chosen vertex and identity holonomy, giving W=1; positive dimension excludes division by zero. Cyclic rebasing conjugates the ordered product; reversal uses unitary inversion. All loop consumers use these conventions.

Actual suppliers: `def-countable-choice`, `def-finite-dimensional-representation-of-a-group-over-a-field`, `def-qftx-nonabelian-lattice-gauge-data`, `def-borel-sigma-algebra`, `def-probability-measure`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-tdmath-measure-integral`.

### `lem-qftx-lattice-data-well-defined`

Proof 1.1 checks composition and smooth product charts; 2.1 cancels endpoint factors and preserves rectangle measures, including the zero-edge singleton. Compactness bounds each continuous face potential and gives exp(-M)<=Z<=exp(M). Pullback is an L2 isometry because the probability is invariant; each fixed kernel is closed and their arbitrary intersection is closed. No Hilbert completeness or arbitrary choice is required.

Actual suppliers: `def-countable-choice`, `def-qftx-nonabelian-lattice-gauge-data`, `def-differential-of-a-smooth-map`, `def-lie-group`, `def-topological-manifold-without-boundary`, `def-borel-sigma-algebra`, `lem-borel-product-of-second-countable-spaces`, `def-measure`, `def-measure-space`, `def-probability-measure`, `def-left-right-and-bi-invariant-borel-measure-on-a-lie-group`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-tdmath-measure-integral`, `def-measure-with-density`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-complex-l-two-inner-product`, `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`.

### `lem-qftx-planar-plaquette-factorization`

All seven steps checked. Tree has M(N+1)+N vertices-minus-one edges and connects all rows; root fixing yields unique gauge factors. Joint product-sigma measurability is explicitly assumed in general and proved for the Lie instance using second countability. The Fubini double integral proves inversion invariance from supplied bi-invariance. Both coordinate maps are finite group words. Triangular substitutions V_(i+1)=P_i V_i on the right and V_i=P_i^-1 V_(i+1) on the left preserve Haar factors. The positive continuous weights and reciprocals are bounded by compactness, so all partition factors are positive finite. M,N>=1, a=0 and a=M, and noncommutative order checked.

Actual suppliers: `def-countable-choice`, `def-qftx-nonabelian-lattice-gauge-data`, `def-qftx-nonabelian-gauge-data`, `def-lie-group`, `def-topological-manifold-without-boundary`, `def-borel-sigma-algebra`, `lem-borel-product-of-second-countable-spaces`, `def-measure`, `def-measure-space`, `def-probability-measure`, `def-left-right-and-bi-invariant-borel-measure-on-a-lie-group`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-tdmath-measure-integral`, `def-measure-with-density`, `def-integrable-real-and-complex-functions-and-their-integrals`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`.

### `lem-qftx-su2-one-plaquette-average`

All five steps checked. Adjugates recover the S3 parametrization; Gram determinant gives sin(theta)^2 sin(phi), and chart boundary has zero area. Left/right unitary multiplication gives orthogonal R4 transformations and bi-invariance. Angular means vanish. tau sinh(beta tau) is positive on a positive-measure cap for beta>0; 1-tau is positive away from the identity, giving 0<lambda<1. Coordinate symmetry gives E[x0^2]=1/4; uniform Taylor remainders yield lambda=beta/4+O(beta^3). Amend F1: sigma3 now means unnormalized area in the reader Statement, so its pushforward formula must divide by 2 pi^2. This is a nonfatal local inconsistency; the actual integrals already use normalized measure. Statement and conclusions unchanged.

Actual suppliers: `def-countable-choice`, `def-qftx-su2-wilson-plaquette-measure`, `ex-unitary-and-special-unitary-lie-groups`, `thm-heine-borel-rn`, `def-borel-sigma-algebra`, `def-measure`, `def-measure-space`, `def-probability-measure`, `def-left-right-and-bi-invariant-borel-measure-on-a-lie-group`, `def-polar-surface-measure-on-the-unit-sphere`, `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-tdmath-measure-integral`, `def-measure-with-density`, `def-integrable-real-and-complex-functions-and-their-integrals`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`.

### `lem-qftx-wilson-loop-gauge-invariance`

All three steps checked. Telescoping is valid also on reverse edges; the zero-length case gives identity. Homomorphism, cyclic trace and unitary inverse establish gauge invariance, rebase invariance and reversal. Item bytes equal both snapshots: only the contract/manifest carrier caused touched routing; record audit enrichment without inventing a mathematical repair.

Actual suppliers: `def-countable-choice`, `def-qftx-nonabelian-lattice-gauge-data`, `def-qftx-wilson-loop`.

### `ex-qftx-su2-one-plaquette-wilson-average`

All three verification steps checked: root-fixed one-face reduction preserves the trace pointwise, tree coordinates integrate to one, and action constant exp(-beta) gives Z_square=exp(-beta) z_beta. Integrating tau gives lambda; inherited expansion is beta/4+O(beta^3). The chosen corner orientation agrees with the supplier. This is a mathematical finite model, not measured data.

Actual suppliers: `def-countable-choice`, `def-qftx-wilson-loop`, `def-qftx-su2-wilson-plaquette-measure`, `lem-qftx-planar-plaquette-factorization`, `lem-qftx-su2-one-plaquette-average`, `lem-qftx-wilson-loop-gauge-invariance`, `def-probability-measure`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-tdmath-measure-integral`, `def-measure-with-density`.

### `thm-qftx-strong-coupling-wilson-area-law`

All five steps checked. The Wilson weight satisfies positivity, continuity, conjugation and inversion invariance. Choose tree column a, giving V_bj=P_(b-1,j)...P_(a,j), so the CCW loop product contains each of A plaquettes once in the written order. Independent matrix expectations lambda I commute, but the random factors are never commuted. Bounded entries justify finite Fubini. 0<beta<=1 gives positive finite -log(lambda); beta=0 is excluded from this log assertion. Commutation with diag(i,-i) and J forces central matrices to be +/-I, proving the stated central character. No infinite-area or continuum confinement claim.

Actual suppliers: `def-countable-choice`, `def-qftx-nonabelian-lattice-gauge-data`, `def-qftx-wilson-loop`, `def-qftx-su2-wilson-plaquette-measure`, `lem-qftx-planar-plaquette-factorization`, `lem-qftx-su2-one-plaquette-average`, `lem-qftx-wilson-loop-gauge-invariance`, `def-borel-sigma-algebra`, `def-probability-measure`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-tdmath-measure-integral`, `def-measure-with-density`, `def-integrable-real-and-complex-functions-and-their-integrals`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`.

### `ex-qftx-su2-two-plaquette-wilson-loop`

Both verification steps checked: A=2 and (beta/4+r)^2=beta^2/16+O(beta^4), since r=O(beta^3). The sole TikZ diagram has east/north positive links and bottom-right-top-left CCW boundary arrows, so top and left use inverse links; face labels p00,p10 and two-cell area agree. Proof is independent of the diagram.

Actual suppliers: `def-countable-choice`, `lem-qftx-su2-one-plaquette-average`, `thm-qftx-strong-coupling-wilson-area-law`.

## Historical comparison and dispositions

All ten original carriers were recovered from `git show HEAD:physics/items/ID.md`; each raw SHA256 exactly matches the immutable pre-reader snapshot. Each initial current raw item exactly matches the immutable post-reader snapshot. The gauge-invariance item has equal pre/post raw hashes and is `reviewed_no_defect` with `change_kind: audit_enrichment`. The other nine reader formulation repairs are retained and amended by synchronization of their stale manifest claim mirrors; the SU(2) average additionally receives the F1 normalization correction. No historical preimage is missing and no owner historical override is invoked.

| Item | pre-reader raw SHA256 | post-reader raw SHA256 | final raw SHA256 |
|---|---|---|---|
| `def-qftx-nonabelian-lattice-gauge-data` | `7d5a6bbc3f363d19b11fe537b3120e29735ba7669d53d1bcc531a2bc9fb959e8` | `b23c1f913e95345433d4073fdc0cf8eeb5d3c813e12884df7c72885c9866d381` | `b23c1f913e95345433d4073fdc0cf8eeb5d3c813e12884df7c72885c9866d381` |
| `lem-qftx-lattice-data-well-defined` | `89a03a7c72d4aae3026932e57fc55e0958821354ed0296141e6d146dc4e490c4` | `2622f12b393d40203562bf9a65786e0d3fd1571dd82b3445787957f3e8b560ff` | `2622f12b393d40203562bf9a65786e0d3fd1571dd82b3445787957f3e8b560ff` |
| `def-qftx-wilson-loop` | `f447a872ad16c323abab5ba62e5119b1743c078f4cdbcb5bc1a1703075142c20` | `5289427236a6b866e71596a1e463c6cde724e1cc8fa8d2216a6a0673edcd8632` | `5289427236a6b866e71596a1e463c6cde724e1cc8fa8d2216a6a0673edcd8632` |
| `lem-qftx-wilson-loop-gauge-invariance` | `b722aa421ae3d8b11afd3e9e43b9ad0c96b791f05830b830ac1de42c368b8ed7` | `b722aa421ae3d8b11afd3e9e43b9ad0c96b791f05830b830ac1de42c368b8ed7` | `b722aa421ae3d8b11afd3e9e43b9ad0c96b791f05830b830ac1de42c368b8ed7` |
| `def-qftx-su2-wilson-plaquette-measure` | `000a25e41cd8356456cb3e0dccd67b3e631a14969ae6d8cfd9693e4370d07762` | `2ec2b759bb91c590f303b036fefd52b0b7165dc0b912787a7a0651909e731a08` | `2ec2b759bb91c590f303b036fefd52b0b7165dc0b912787a7a0651909e731a08` |
| `lem-qftx-planar-plaquette-factorization` | `a76cee02ce8eee612e67bad92f2db0fcad7458847d6054935ec4ac10d931ae9c` | `919c6abf36781e73ac754945e012e5e350123491c087e1b5e041937d9316bbe1` | `919c6abf36781e73ac754945e012e5e350123491c087e1b5e041937d9316bbe1` |
| `lem-qftx-su2-one-plaquette-average` | `8db79c4f50b4149d6f5882ec1ed1c401099d76f0c0cb5d4bb168ddb5f103e1ea` | `2b86d87ccc92aa4e8412b5993a2ffe0954b3877cfbfcceb79bfac23aa02ce5f1` | `02582f76de9b3b0586d9a1cc07ebecf916c584d3cd17cf111a7ba4fca3665ef0` |
| `thm-qftx-strong-coupling-wilson-area-law` | `062733485940708e6cd51424fa1bbc5422e73dd9bce6a34a9c8134ed105e4412` | `9f1a94880424e69a2a36d8222f1bf48aacfc45d0021404c5e994c41e73ef116f` | `9f1a94880424e69a2a36d8222f1bf48aacfc45d0021404c5e994c41e73ef116f` |
| `ex-qftx-su2-one-plaquette-wilson-average` | `228ba87dc0b99047f4b559deacfca29fe61f4f42cdf869807c033aa98ef33e89` | `d63fe950b3eeb99c275ffbb11f2176b569b7a01aa90f26b96df8a2f7f8244994` | `d63fe950b3eeb99c275ffbb11f2176b569b7a01aa90f26b96df8a2f7f8244994` |
| `ex-qftx-su2-two-plaquette-wilson-loop` | `f9292f08180946c9d8ce9bb805b741a245e4eea833d174b5d01add40b3291027` | `bc3bde86a3be9bc4ee3ebcd104d3948841c937a77fbb0a7f3b2846b51ff9a343` | `bc3bde86a3be9bc4ee3ebcd104d3948841c937a77fbb0a7f3b2846b51ff9a343` |

## Six refuter obligations

`refuter:6:1` through `refuter:6:6` are each `false_positive`, with one distinct closed ledger row per finding. Independent primary-source indexed page 22 explicitly labels “1.4.1.1 The Strong-Coupling Expansion”; Eqs. (1.104)–(1.106) concern the coupling and Haar integration. Indexed page 23 continues with (1.107)–(1.112), including leading minimal-area tiling. A contents list that omits a fourth-level subsection does not establish its absence. Direct PDF retrieval timed out, so this is bounded indexed-primary-text evidence, not a claimed full PDF read. The page range reaches the following section but still includes the correct subsection; no material locator defect is established. No citation edit is justified.

[Primary Meyer chapter, indexed printed pp. 22–23, §1.4.1.1, Eqs. (1.104)–(1.112)](https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf). Primary indexed text was retrieved by exact-URL searches for the section heading and equation (1.107). The publisher [chapter identity and page range](https://link.springer.com/chapter/10.1007/978-3-319-08022-2_1) were checked separately. The original reader and refuter artifacts remain unchanged.

## Exact mathematical suppliers and sources

Opened every distinct direct supplier Statement/Definition/Example needed by the ten current carriers (26 distinct external item suppliers), plus the smooth-map and atlas definitions behind the Lie-group convention. Product-measure uniqueness is applied only to finite products of probabilities; Tonelli uses nonnegative measurable functions and Fubini uses bounded or explicitly L1 integrands. The chart/polar measure agreement lemma was read through its proof: the annular-coordinate Jacobian identifies the chart and cone measures and proves orthogonal invariance. Countable choice is inherited as declared; no new full-choice premise is used. Imported and root mathematics remain read-only.

[Lohmayer, §§4.1–4.2.2, printed pp. 59–64](https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf) was read in the primary PDF text around Eqs. (4.1)–(4.20), and the §4.2.2 distinction between U(N) integrals and large-N SU(N) comparison was checked. His infinite-lattice temporal gauge is context; the local proof supplies its own finite tree and no limiting argument. Neither source is treated as a supplier of an unproved exact finite SU(2) statement. The SU(2) coordinate integrals, positivity and small-beta expansion are independently established in the local proof.

## Published supplier findings

All eleven reader findings are `confirmed_nonfatal` and `nonfatal-recorded`, each with exactly one closed scoped defect-ledger row. Published repair status remains OPEN with the mathematics owner; scoped adjudication closure does not claim a source repair.

| Obligation | Published item | Actual consumer | Current defect |
|---|---|---|---|
| `reader:6:1` | `def-lie-group` | `def-qftx-nonabelian-lattice-gauge-data` | The Definition section embeds prerequisite hyperlinks in the complete definition. The assigned item consumes this published definition directly. The link placement violates the uninterrupted-statement rule; the mathematical definitions remain recoverable from the text and linked targets. |
| `reader:6:2` | `def-topological-manifold-without-boundary` | `def-qftx-nonabelian-lattice-gauge-data` | The complete manifold definition is interrupted by prerequisite hyperlinks inside its numbered clauses. This published item is an assigned consumer's direct dependency. The clauses are mathematically legible, but their links belong after the complete Definition section. |
| `reader:6:3` | `def-measure-space` | `lem-qftx-lattice-data-well-defined` | The defining sentence embeds a prerequisite hyperlink within the complete Definition. The assigned lemma uses this published measure-space definition directly; the link should follow the full section. |
| `reader:6:4` | `def-left-right-and-bi-invariant-borel-measure-on-a-lie-group` | `lem-qftx-lattice-data-well-defined` | The finite Radon and invariance definition contains multiple prerequisite hyperlinks before the Definition section ends. The assigned lemma consumes this published definition for its link probability and invariance claims. |
| `reader:6:5` | `def-product-measure-on-sigma-finite-spaces` | `lem-qftx-lattice-data-well-defined` | The text reads “The two displayed integrals are well-defined by / For sigma-finite measures, the section-measure functions are measurable and equal by / For sigma-finite measures, the two section-measure integrals of a measurable set agree.” These theorem-title fragments are not integrated into grammatical definition prose. The displayed product-measure formula is still identifiable. |
| `reader:6:6` | `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique` | `lem-qftx-lattice-data-well-defined` | Item 1 reads “the set function … of / The product measure of two sigma-finite measure spaces is a measure”. The inserted theorem title breaks the grammatical statement, although items 2–4 and the intended measure conclusion remain recoverable. The assigned lemma directly consumes this theorem. |
| `reader:6:7` | `def-measure-with-density` | `lem-qftx-lattice-data-well-defined` | After “whose measure property is supplied by”, the definition continues with the unintegrated clause “The indefinite integral of a nonnegative measurable function is a measure.” The density formula itself remains explicit, but the supporting sentence is malformed. The assigned lemma cites this published definition. |
| `reader:6:8` | `def-tdmath-measure-integral` | `lem-qftx-lattice-data-well-defined` | The complete integral definition contains inline links to [[def-finite-sum]] and [[def-complete-ordered-field]]. This published dependency is used directly for density normalization and integrability; its links interrupt the Definition section. |
| `reader:6:9` | `def-complex-l-two-inner-product` | `lem-qftx-lattice-data-well-defined` | The definition embeds links to [[thm-complex-holder-minkowski-and-the-quotient-norm]] and [[def-complex-lp-and-euclidean-test-function-conventions]] before its section ends. The assigned lemma directly consumes this published pairing and norm convention. |
| `reader:6:10` | `def-finite-dimensional-representation-of-a-group-over-a-field` | `def-qftx-wilson-loop` | The representation definition embeds links to the field, vector-space, dimension, invertible-map, homomorphism, and module definitions within the complete Definition section. The assigned Wilson-loop definition directly consumes this published supplier. |
| `reader:6:11` | `def-polar-surface-measure-on-the-unit-sphere` | `def-qftx-su2-wilson-plaquette-measure` | The surface-measure definition embeds links to [[def-countable-choice]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]], and [[thm-borel-sets-are-lebesgue-measurable]] before the Definition section ends. The assigned SU(2) measure definition directly consumes this supplier. |

## Consumer and page review

The original reader Definition/Statement changes were checked against every direct dependency/reference consumer. Within batch 6, the definition, finite probability lemma, Wilson-loop definition and gauge-invariance lemma supply the factorization, average, area theorem and examples exactly as recorded above. Outside batch 6, only `lem-qftx-su2-wilson-transfer-well-defined` and `post-qftx-nonabelian-lattice-regulator` mention changed suppliers: both consume the lattice-data interface, supply compact SU(2), its smooth positive-Hermitian defining representation and normalized bi-invariant Haar probability, and define finite periodic complexes consistent with the general two-complex conventions. Their actual interface uses were opened and remain valid. No outside repair or second-hop public-interface change is needed. The alpha correction changes only F1, not any Statement/Definition.

Both owned A/B pages are frontmatter-only, retain `page_layout: compact-v1`, and list the exact eight A items and two B examples. The prerequisite `qftx-gauge-geometry` page remains draft mathematics with its five-item inventory. The compact-group/Lie-algebra/representation portion of `def-qftx-nonabelian-gauge-data` was independently read; connection and sector constructions are not invoked. All three existing batch-6 cross-batch records remain valid, with refreshed actual-use evidence. No withdrawal, new page or new item is proposed.

## Focused checks and handoff

Reflow on the sole alpha-edited item was unchanged. On all ten explicit owned item paths: precheck passed 7 proof-bearing carriers with 0 failures; rendercheck passed all 10; the required final proof-layout command passed 10 items and 29 steps with 0 defects. Risk-report was run before review, then with `--require-reviewed`: 0 errors, all nine HIGH/CRITICAL reviews complete (the moderate gauge-invariance carrier also has a review). No judge stamp was added or retained after a material rewrite; no item had a judge stamp to invalidate. No empirical input or statistical claim is introduced.

Remaining work: engine-owned decision hash stamping and gate battery. No local mathematical blocker or escalation remains. The eleven published presentation defects remain owner maintenance obligations.

Additional focused validation: the native `inspectStatement` implementation checked the ten explicit owned carriers with 0 defects; all ten manifest public-claim mirrors match their current complete sections. A local obligation/ledger consistency check confirmed exactly 27 owed decisions, no duplicate obligations, and one closed ledger row for each reader/refuter finding. The published ledger merge used the required exclusively created lock and released only that lock. The batch cross-dependency input was refreshed through `frontier-dependency-ledger.mjs refresh`, which completed successfully. The statement-check CLI has no standalone `--help` mode (that exploratory invocation rejected missing run/domain arguments); the subsequent direct native inspection above stayed within batch scope and passed. No full-frontier gate battery was initiated.
