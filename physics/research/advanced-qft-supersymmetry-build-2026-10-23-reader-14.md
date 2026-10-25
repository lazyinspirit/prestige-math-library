# Step 3a reader report — batch 14

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Batch: `14`

## Scope and opened inventory

Assigned pages:

- `library/quantum-field-theory-mathematics/qftx-finite-symmetry-gauging.md`
- `library/quantum-field-theory-mathematics/qftx-finite-symmetry-gauging-examples.md`

Page prerequisites opened for metadata and edge review:

- `library/quantum-field-theory-mathematics/qftx-two-group-cochains.md`
- `library/quantum-field-theory-mathematics/qftx-finite-group-bf.md`

All nine assigned items were opened and reviewed:

- `items/def-aqft-background-gauging-data.md`
- `items/thm-aqft-finite-group-gauging.md`
- `items/thm-aqft-finite-two-group-gauging-gluing.md`
- `items/ex-aqft-finite-groupoid-point-normalization.md`
- `items/ex-aqft-finite-z2-cocycle-circle.md`
- `items/ex-aqft-finite-c2-gluing-identity.md`
- `items/ex-aqft-two-group-point-higher-normalization.md`
- `items/ex-aqft-split-two-group-interval-gluing.md`
- `items/ex-aqft-postnikov-two-group-tetrahedron-gauging.md`

Dependency items opened:

- `items/def-aqft-two-group-background.md`
- `items/thm-aqft-two-group-background-consistency.md`
- `items/def-aqft-finite-background-two-groupoid.md`
- `items/thm-aqft-finite-background-two-groupoid-coherence.md`
- Published: `items/def-qftx-finite-groupoid-integration.md`
- Published: `items/def-qftx-finite-homotopy-pullback.md`

The dependency closure was reviewed before adjudicating the assigned claims. The initial file-opening sequence placed `thm-aqft-two-group-background-consistency` after the finite-background-2-groupoid definition and coherence theorem that depend on it; the consistency theorem was opened and used before any assigned item was judged.

## Item review

| Item | Reader verdict and evidence |
|---|---|
| `def-aqft-background-gauging-data` | The ordinary groupoid sum retains automorphisms; the higher sum retains raw 1-arrows and the `pi2/pi1` factor. Its representative-independence and point normalization follow from the opened coherence and finite-integration suppliers. The scalar-weight and boundary-line caveats are appropriately explicit. |
| `thm-aqft-finite-group-gauging` | The equivalence, homotopy-fiber, and orbit-stabilizer proof gives the stated finite weighted gluing formula under its invariance and factorization hypotheses. The homotopy-pullback diagram matches the functors and the stated pullback order. |
| `thm-aqft-finite-two-group-gauging-gluing` | The raw-parameter and kernel/image counts give the absolute and relative normalizers; simplexwise gluing and vertex/edge inclusion-exclusion give the stated boundary contraction. The hypotheses retain scalar invariance and weight factorization. |
| `ex-aqft-finite-groupoid-point-normalization` | One isomorphism class with automorphism group of order two has normalized sum `1/2`. |
| `ex-aqft-finite-z2-cocycle-circle` | For the conjugation groupoid of abelian `C2`, both classes have automorphism group `C2`; the weights `1` and `-1` sum to zero. The missing coefficient action was repaired as described below. |
| `ex-aqft-finite-c2-gluing-identity` | The homotopy pullback has two isomorphic objects and automorphism group `C2`; each identity homotopy fiber has cardinality one, so both sides of the gluing formula are `1/2`. The missing explicit description of `BG` was repaired below. |
| `ex-aqft-two-group-point-higher-normalization` | At one vertex there are two raw 1-automorphisms and three 2-automorphisms of each; the higher mass is `3/2`. The ordinary truncation and induced-object-action quotient values are computed distinctly. |
| `ex-aqft-split-two-group-interval-gluing` | The edge and interval counts give `3/2`; each relative edge amplitude is one and the shared point contributes the `3/2` boundary mass. The sign action is retained in the supplied general theorem. |
| `ex-aqft-postnikov-two-group-tetrahedron-gauging` | The cocycle identity, non-coboundary check, 64-object count, transitivity, and `pi1=pi2=C2` stabilizers support the stated higher sum `1`. |

No other proof gaps, false claims, overstrong titles, broken citations, or missing diagrams were found in the assigned items. The sole TikZ diagram is in `thm-aqft-finite-group-gauging`; its object and arrow directions agree with the text. The examples do not require diagrams for their arguments.

## Repairs

1. In `items/ex-aqft-finite-z2-cocycle-circle.md`, the Example called `chi` a group 1-cocycle into `U(1)` without specifying the coefficient action. The Example now states the trivial `C2` action and the corresponding cocycle equation. Its proof contract's steps 1.1 and 1.2 now match the explicit arrow and coefficient data.
2. In `items/ex-aqft-finite-c2-gluing-identity.md`, the Example used `BG` without specifying its morphism set. It now defines the one-object category with `Hom(*,*)=C2` and multiplication composition. Its proof contract's step 1.1 now records the same structure.

Neither changed item had a `verification.judge` record to remove. No other item consumes either example; the assigned B page remains consistent with the same six example IDs. Reflow reported both items unchanged. Precheck passed for both items (`direct`), and the final proof-layout command reported `2 items, 6 steps, 0 defects`.

## Page verdicts

- `qftx-finite-symmetry-gauging`: pass for page metadata and presentation. It is a draft mathematics A page, has no body summary, its three items match the manifest, and its two required page IDs resolve.
- `qftx-finite-symmetry-gauging-examples`: pass for page metadata and presentation. It is a draft mathematics B page, has no body summary, its six examples match the manifest, and its two required page IDs resolve.

## Sources and limitations

- Benini, Córdova, and Hsin, [*On 2-Group Global Symmetries and Their Anomalies*](https://arxiv.org/pdf/1803.09336), §2.3, equations (2.14)–(2.20), gives the flat-edge/twisted-face equation and the scope of the 0-form and 1-form gauge transformations. The explicit `zeta` representative and cochain coherence used here are established by the local suppliers and proofs.
- Baez and Lauda, [*Higher-Dimensional Algebra V: 2-Groups*](https://arxiv.org/pdf/math/0307200), §8.3, PDF pp. 55–63, supplies the skeletal `(G,H,action,3-cocycle)` description and pentagon-to-cocycle relation. The text leaves the reverse construction as an exercise; the batch's finite cochain coherence theorem supplies its own detailed construction and proof.
- Freed and Quinn, [*Chern-Simons Theory with Finite Gauge Group*](https://www.math.ru.nl/~mueger/TQFT/FQ.pdf), §2, PDF pp. 8–11, gives the `1/|Aut|` measure and its cutting/gluing behavior for finite-group bundles with cocycle action. Its boundary action is line-valued; the assigned definition correctly does not treat that as an arbitrary scalar boundary weight.
- Dijkgraaf and Witten, [*Topological Gauge Theories and Group Cohomology*](https://www.ias.edu/sites/default/files/sns/%5B126%5DCommMathPhys129-1990.pdf), §§6.2 and 6.4–6.5, PDF pp. 22–29, describes finite flat-group bundle sums, ordered-simplex cocycle weights, and the stated closed-manifold gauge-invariance scope.
- The cited Moore–Saxena PDF, [*TASI Lectures on Topological Field Theories and Differential Cohomology*](https://arxiv.org/pdf/2510.07408), §23.3, equations (23.34)–(23.38), could not be fetched by the web tool because the PDF exceeded its content-size limit. I therefore do not claim independent source verification of that locator. The local finite-count proof supplies the assigned higher normalization and gluing results without using the citation as a proof of the cochain formula.

No mathematical blocker remains. No uneditable defect remains, so the findings array is empty.
