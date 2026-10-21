# Step 3a reader report — batch 7

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `7`

## Opened inventory

### Assigned pages

| Page | Path | Inspection |
|---|---|---|
| `statistical-inverse-experiments-and-white-noise` | `library/inverse-problems/statistical-inverse-experiments-and-white-noise.md` | Frontmatter, inventory, requirements, status, and layout flag; body is empty. |
| `statistical-inverse-experiments-and-white-noise-examples` | `library/inverse-problems/statistical-inverse-experiments-and-white-noise-examples.md` | Frontmatter, inventory, requirements, status, and layout flag; body is empty. |

### Assigned items, in dependency-level order

| Item | Path | Direct item dependencies opened |
|---|---|---|
| `def-ip-isonormal-white-noise-experiment` | `items/def-ip-isonormal-white-noise-experiment.md` | `def-statistical-experiment`, `def-hilbert-space`, `def-random-element-and-real-random-variable`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-independent-random-elements`, `lem-law-of-a-random-element-is-a-probability-measure` |
| `thm-ip-white-noise-spectral-sequence-representation` | `items/thm-ip-white-noise-spectral-sequence-representation.md` | The assigned definition; `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`, `thm-cauchy-schwarz-in-an-inner-product-space`, `def-negative-sobolev-space-for-white-noise`, `lem-white-noise-is-borel-gaussian-on-negative-sobolev-space`, `def-countable-choice`, `thm-chebyshev-markov-inequality-for-the-integral`, `thm-first-borel-cantelli`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`, `lem-finite-measure-uniqueness-on-a-pi-system`, `lem-law-of-a-random-element-is-a-probability-measure` |
| `ex-ip-white-noise-direct-functionals` | `items/ex-ip-white-noise-direct-functionals.md` | The assigned definition |
| `ex-ip-white-noise-coefficient-sequence` | `items/ex-ip-white-noise-coefficient-sequence.md` | The assigned definition and theorem |
| `ex-ip-white-noise-finite-truncation-tail` | `items/ex-ip-white-noise-finite-truncation-tail.md` | The assigned definition and theorem |

For the negative-Sobolev realization clause, I also opened `thm-continuity-from-above-for-measures`, `thm-monotone-convergence-for-the-integral`, and `lem-density-normal-laws-and-square-summable-gaussian-series`, which support the white-noise carrier supplier. The batch proof-contract file and its citations/derivations, the empty `batch-7.cross-batch-dependencies.json`, `batch-7.coverage.json`, and `batch-7.notes.md` were consulted as evidence, not verdicts. The A-page requirements were also checked against `library/mathematical-statistics/statistical-experiments-models-and-identifiability.md` and `library/bayesian-computational-statistics/weak-nonparametric-bernstein-von-mises.md`.

## Review findings

- The definition correctly specifies an isonormal process, its finite-dimensional Gaussian laws, the functional observation field, and its cylinder experiment. Coordinate measurability gives the stated field law; the zero-space case is deterministic up to almost-sure equality.
- The theorem's basis projections converge in norm; finite coordinates have the stated independent normal laws; the partial sums converge in mean square. For each fixed test vector, the least-tail indices exist; the resulting evaluation maps of `T` are measurable. Chebyshev and the first Borel–Cantelli lemma give reconstruction almost surely for each fixed finite list, and finite-cylinder uniqueness proves equality of field laws without an uncountable intersection. The pointwise identity `S ∘ T = id` holds for all coefficient sequences, including finite and zero-dimensional cases.
- The negative-Sobolev clause retains its necessary qualifications: the specified (L^2([0,1])) bases, countable choice, and δ > 1/2. The supplied carrier result supports the Borel Gaussian realization and the non-(L^2) conclusion; the local theorem supplies the shift by (Kx) and scale ε.
- The three examples' means, variances, finite product laws, residual decomposition, and residual independence follow from the definition and theorem with the hypotheses stated.
- All five item statements/descriptions are complete and free of hyperlinks; their links follow in the corresponding references sections. Proof steps have blank-line separation, valid trailing tags, and terminal QED tags. The sole TikZCD diagram in the theorem correctly represents the finite-coordinate maps and their commutative identity, as established by finite linearity; it is outside the proof, which does not rely on it. No further diagram is required by the exposition.
- The cited passages were checked at their stated locators: Kretschmann–Werner, §1.1, PDF pp. 1–2; Giné–Nickl, §1.2.2, equations (1.6)–(1.8), PDF pp. 21–22, and the isonormal construction, PDF pp. 483–484; Castillo–Nickl, §1.2, equations (7)–(8), printed pp. 2005–2006; Ding–Mathé, §1, equations (1)–(3), PDF pp. 11–12. They accurately support the model, coordinate, or carrier context cited. The stronger measurable inverse-map construction is proved locally; the compact-operator and kernel-orthogonality conditions in Ding–Mathé are not imported.

## Edits and uneditable defects

No item or page was edited. No proof contract or judge record was changed. No confirmed defect remains, including none outside this reader's write scope. Since no item was edited, the post-edit proof-layout, reflow, and precheck commands were not run by this reader.

## Page verdicts

- `statistical-inverse-experiments-and-white-noise`: no page defect found. Its draft inventory and two requirements match the manifest; its body is empty and `page_layout: compact-v1` is present.
- `statistical-inverse-experiments-and-white-noise-examples`: no page defect found. Its three examples and requirement match the manifest; its body is empty and `page_layout: compact-v1` is present.

## Blocker and coverage limitation

Blocker: none. I opened the assigned definition before its direct suppliers, so the required supplier-first order was not fully achieved for that item; I subsequently checked all six direct dependencies and their relevant interfaces. I did not audit every transitive dependency behind the published suppliers. Source review covered the cited sections and pages rather than the full books and papers.
