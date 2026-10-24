# Step 3a reader report — batch 6

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Scope: batch `6`

## Opened inventory

### Assigned pages

- `library/quantum-field-theory-mathematics/qftx-nonabelian-lattice-mathematics.md` — A page; draft, mathematics, compact layout, eight listed items, empty body.
- `library/quantum-field-theory-mathematics/qftx-nonabelian-lattice-mathematics-examples.md` — B page; draft, mathematics, compact layout, two listed examples, empty body.
- `library/quantum-field-theory-mathematics/qftx-gauge-geometry.md` — the A page's batch-2 prerequisite page; draft, mathematics, five listed items, empty body.

### Assigned items, reviewed in supplier-before-consumer order

1. `def-qftx-nonabelian-lattice-gauge-data`
2. `lem-qftx-lattice-data-well-defined`
3. `def-qftx-wilson-loop`
4. `lem-qftx-wilson-loop-gauge-invariance`
5. `def-qftx-su2-wilson-plaquette-measure`
6. `lem-qftx-planar-plaquette-factorization`
7. `lem-qftx-su2-one-plaquette-average`
8. `thm-qftx-strong-coupling-wilson-area-law`
9. `ex-qftx-su2-one-plaquette-wilson-average`
10. `ex-qftx-su2-two-plaquette-wilson-loop`

The unique direct item suppliers opened were `def-countable-choice`, `def-qftx-nonabelian-gauge-data` (current draft supplier in batch 2), `def-differential-of-a-smooth-map`, `def-lie-group`, `def-topological-manifold-without-boundary`, `def-borel-sigma-algebra`, `lem-borel-product-of-second-countable-spaces`, `def-measure`, `def-measure-space`, `def-probability-measure`, `def-left-right-and-bi-invariant-borel-measure-on-a-lie-group`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-tdmath-measure-integral`, `def-measure-with-density`, `def-complex-l-two-inner-product`, `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-finite-dimensional-representation-of-a-group-over-a-field`, `ex-unitary-and-special-unitary-lie-groups`, `thm-heine-borel-rn`, `def-polar-surface-measure-on-the-unit-sphere`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, and `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`.

I also opened `def-smooth-map-between-manifolds-with-boundary` and `def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary` to check the smooth-manifold supplier used by the Lie-group definition. The batch manifest, cross-batch dependency ledger, proof contracts, and batch notes were treated as navigation and evidence, not as verdicts.

## Repairs and evidence

| Assigned item | Repair | Evidence and consumer review |
|---|---|---|
| `def-qftx-nonabelian-lattice-gauge-data` | Stated the finite-product smooth structure, including the empty product; made the representation type, positive Hermitian form, bi-invariance, Radon measure convention, empty product measure, and empty sum explicit. | These conventions supply the smoothness domain and zero-edge probability used by the well-definedness lemma. |
| `lem-qftx-lattice-data-well-defined` | Made its finite lattice input and product conventions explicit; proved the action smooth using the supplied product charts and handled the empty-edge case in measure invariance. | The proof now covers all finite edge sets admitted by the definition, including the zero-edge singleton. |
| `def-qftx-wilson-loop` | Specified the oriented edge set, endpoint maps, formal reverse edges, inverse link variables, and positive Hermitian form in the defining input. | The loop word and representation now have explicit domains and types. |
| `def-qftx-su2-wilson-plaquette-measure` | Replaced “standard Lie-group structure” with the embedded matrix-manifold structure; stated the normalized sphere-area measure and face-holonomy convention; proved (z_\beta\) finite and positive for every stated \(\beta\geq0\). | The bound \(e^{-\beta}\leq z_\beta\leq e^\beta\) closes definition-level normalization at \(\beta=0\) as well as for positive \(\beta\). |
| `lem-qftx-planar-plaquette-factorization` | Defined the topological group and compactness hypotheses in the statement and wrote the conjugation-invariance identity for each face weight. | The stated general-group hypotheses now match the measurability and invariance steps in the proof. |
| `lem-qftx-su2-one-plaquette-average` | Restated the normalized \(S^3\)-pushforward and trace variable in the uninterrupted statement. | This makes the integral symbols and coefficient independent of an unexplained name. |
| `thm-qftx-strong-coupling-wilson-area-law` | Specified grid vertices, oriented edges, face words, link products, and the normalized \(S^3\)-pushforward in the statement; defined the center and central character; added a direct matrix proof that \(Z(SU(2))=\{\pm I_2\}\). | The added step uses two explicit elements of \(SU(2)\) and elementary commutation equations. Existing consumers, including the two examples, were reviewed against the clarified interface. |
| `ex-qftx-su2-one-plaquette-wilson-average` | Defined the face-loop observable and identified the normalized round measure and trace convention in the example description. | Its integration and partition-factor claims follow from the assigned one-face factorization and matrix-average suppliers. |
| `ex-qftx-su2-two-plaquette-wilson-loop` | Defined the ordered loop observable and gave the exact one-plaquette coefficient in the example description. | Its \(O(\beta^4)\) remainder follows from squaring \(\lambda=\beta/4+O(\beta^3)\). The TikZ diagram's positive link arrows and counterclockwise boundary arrows agree with the two-plaquette text; the proof is independent of the diagram. |

The affected proof-contract excerpts and derivations were refreshed. The boundary records now cover the empty-product convention and \(\beta=0\). None of the nine repaired items had a stale `verification.judge` record.

For the lattice factorization and area-law mechanism, I read Lohmayer, *Eigenvalue Distributions of Wilson Loops*, §§3.5.5 and 4.1–4.2.2 (printed pp. 48–64), [full PDF](https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf). Its lattice Wilson loop is an ordered product along oriented links; §4.1 gives plaquette factorization and §4.2 gives rectangular area dependence. That source uses an infinite-lattice gauge choice; the assigned proof supplies its own finite root-fixed tree change of variables. The separate Meyer PDF request timed out, so I did not claim to have read Meyer. No assigned mathematical conclusion relies on that unavailable source text.

## Defects not licensed for repair

The following findings concern published mathematical suppliers, which are outside the batch-6 write scope. They are listed in the JSON findings file as nonfatal presentation defects; their underlying mathematical uses were recoverable from the surrounding formulas and definitions.

| Published subject | Assigned consumer | Location and defect |
|---|---|---|
| `def-lie-group` | `def-qftx-nonabelian-lattice-gauge-data` | `Definition`, first paragraph: `[[def-group]]` and `[[def-smooth-map-between-manifolds-with-boundary]]` interrupt the definition. |
| `def-topological-manifold-without-boundary` | `def-qftx-nonabelian-lattice-gauge-data` | `Definition`, numbered clauses 1–3: hyperlinks to the Hausdorff, second-countability, and chart definitions occur inside the complete definition. |
| `def-measure-space` | `lem-qftx-lattice-data-well-defined` | `Definition`, first sentence: inline `[[def-measure]]`. |
| `def-left-right-and-bi-invariant-borel-measure-on-a-lie-group` | `lem-qftx-lattice-data-well-defined` | `Definition`, opening and closing paragraphs: multiple supplier links occur inside the definition. |
| `def-product-measure-on-sigma-finite-spaces` | `lem-qftx-lattice-data-well-defined` | `Definition`, after the displayed section-integral formula: theorem titles are inserted as broken prose (“well-defined by / For sigma-finite measures…”). |
| `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique` | `lem-qftx-lattice-data-well-defined` | `Statement`, item 1: “the set function … of / The product measure … is a measure” is grammatically ill-formed. |
| `def-measure-with-density` | `lem-qftx-lattice-data-well-defined` | `Definition`, final sentence: “whose measure property is supplied by / The indefinite integral … is a measure” is not integrated into the definition prose. |
| `def-tdmath-measure-integral` | `lem-qftx-lattice-data-well-defined` | `Definition`, integral construction paragraph: links to `def-finite-sum` and `def-complete-ordered-field` occur inside the definition. |
| `def-complex-l-two-inner-product` | `lem-qftx-lattice-data-well-defined` | `Definition`, explanatory paragraph after the pairing formula: prerequisite links occur inside the definition. |
| `def-finite-dimensional-representation-of-a-group-over-a-field` | `def-qftx-wilson-loop` | `Definition`, first three paragraphs: links to field, vector-space, dimension, invertible-map, homomorphism, and module definitions occur inside the definition. |
| `def-polar-surface-measure-on-the-unit-sphere` | `def-qftx-su2-wilson-plaquette-measure` | `Definition`, opening paragraph: theorem links interrupt the measure definition. |

## Page verdicts

- `qftx-nonabelian-lattice-mathematics`: **pass for the assigned page carrier**. The draft mathematics page has an empty body, the eight A-item placements match the manifest, the compact layout flag is present, and its batch-2 prerequisite page exists with matching mathematics classification.
- `qftx-nonabelian-lattice-mathematics-examples`: **pass for the assigned page carrier**. The draft B page has an empty body, its two examples are in the examples inventory, its companion is the A page, and the compact layout flag is present. The assigned TikZ diagram is consistent with the stated orientation and face labels.

## Validation and blocker

Reflow reported unchanged for all nine repaired item files. Precheck passed on the six changed proof-bearing files and returned zero checked, zero failing for the three changed definitions. The unmodified gauge-invariance lemma was reviewed mathematically but not rerun through precheck. The required final proof-layout command checked 9 items and 26 steps with 0 defects. No assigned page or item remains an unresolved blocker. The published-supplier findings remain for owner disposition.

Coverage is limited to the assigned items, their 26 distinct direct item suppliers, the two smooth-manifold definitions needed for the Lie-group interface, and the required batch-2 page. I checked the supplier statements and the portions needed by batch 6; I did not independently re-audit every published supplier's full transitive proof closure. The Meyer direct-PDF fetch timed out. The assigned claims are mathematical finite-model deductions, not reported experiments or empirical conclusions.
