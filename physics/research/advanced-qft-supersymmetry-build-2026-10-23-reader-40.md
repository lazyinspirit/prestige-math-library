# Step 3a reader report — batch 40

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Batch: `40`  
Role: read-only reader, with repair authority for confirmed defects in assigned in-flight items and assigned A-page prose.

## Opened inventory

### Assigned pages

- `library/advanced-qft-and-supersymmetry/qftx-finite-symmetry-gauging-physics.md`
- `library/advanced-qft-and-supersymmetry/qftx-finite-symmetry-gauging-physics-examples.md`

Both pages are frontmatter-only, retain their draft metadata and inventories, and have no summary body.

### Direct A-page prerequisite pages

- `library/advanced-qft-and-supersymmetry/qftx-two-group-symmetry-backgrounds.md`
- `library/quantum-field-theory-mathematics/qftx-finite-symmetry-gauging.md`

Their inventories contain the reviewed two-group model-data definition and the finite background-gauging definition/theorem, respectively; both direct page prerequisites are present with compatible library classifications.

### Assigned items

- `items/def-aqft-finite-two-group-state-sum.md`
- `items/post-aqft-finite-gauging-model.md`
- `items/pthm-aqft-finite-gauging-gluing.md`
- `items/ex-aqft-finite-two-group-point-normalization.md`
- `items/ex-aqft-finite-two-group-interval-gluing.md`

### Dependency items opened to verify the assigned claims

- `items/def-aqft-two-group-background.md`
- `items/thm-aqft-two-group-background-consistency.md`
- `items/def-aqft-finite-background-two-groupoid.md`
- `items/thm-aqft-finite-background-two-groupoid-coherence.md`
- `items/def-qftx-finite-groupoid-integration.md` (published mathematical supplier)
- `items/def-aqft-background-gauging-data.md`
- `items/def-aqft-topological-defect.md`
- `items/def-aqft-p-form-global-symmetry.md`
- `items/def-aqft-two-group-symmetry-realization.md`
- `items/thm-aqft-finite-two-group-gauging-gluing.md` (draft mathematical supplier owned by batch 14)

I also inspected the batch-40 manifest, cross-batch dependency ledger, notes, proof-contract excerpts relevant to the assigned claims, source-resolution record, and Step-2 review result. Those records were treated as evidence rather than acceptance.

## Review and repair

The selected model is consistently specialized to finite $G=\mathbb Z/2$, trivial $A=\{0\}$, $\beta=0$, zero action, uniform normalized spin measure, and unit background weight. The explicit vertex-spin configuration set has $2^{V_K}$ configurations, so its per-background partition weight is $1$. Vertex translations give bijections of configurations; pullback transports observables, and the finite sums are gauge invariant. With trivial $A$, the higher groupoid has no nonidentity 2-gauge labels, so the higher mass reduces to the reciprocal order of the ordinary gauge stabilizer.

The batch-14 mathematical supplier `thm-aqft-finite-two-group-gauging-gluing` was read in full. Its finite-group, normalized-cocycle, invariant-scalar-weight, exact-relative-restriction, and factorization hypotheses hold in this specialization. Substitution gives $c(K)=2^{-V_K}$ and $c(K)/c(L)=2^{-(V_K-V_L)}$. The point and interval counts agree with these formulas: one vertex has one background orbit and gauge mass $1/2$; each one-edge piece has two flat edge assignments, absolute amplitude $1/2$, and relative amplitude $1$ at a fixed shared-point background; the full two-edge path has four assignments and amplitude $1/2$. The seam point contributes $1/2$.

One confirmed statement ambiguity was repaired in `items/pthm-aqft-finite-gauging-gluing.md`. After defining both absolute and relative amplitudes, the sentence “For a one-vertex boundary complex the amplitude is $1/2$” did not specify which amplitude was intended. In the relative pair $K=L$ equal to a point, the relative formula gives $1$, whereas the absolute normalized gauging amplitude of the one-vertex complex is $1/2$. The sentence now explicitly states the latter. The mathematical claim and proof are unchanged. I checked both assigned examples as direct consumers: the point example uses the absolute formula, while the interval example uses the relative edge amplitudes and the seam gauge-volume factor. Neither consumer required a change.

The affected proof contract `research/advanced-qft-supersymmetry-build-2026-10-23-batch-40.proof-contracts.json` now mirrors the clarified Statement in both consumer citation excerpts and identifies the one-vertex contract check as the absolute background-gauging amplitude. The item had no `verification.judge` record to remove.

Required item checks after the edit:

- Reflow: `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/pthm-aqft-finite-gauging-gluing.md` — unchanged.
- Precheck: `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/pthm-aqft-finite-gauging-gluing.md` — pass, 1 checked, 0 failing.
- Final proof layout: `node tools/physics-support/proof-layout.mjs items/pthm-aqft-finite-gauging-gluing.md` — 1 item, 4 proof steps, 0 defects.

The TikZ interval diagram agrees with the stated ordered path: the arrows point $0\to1\to2$, the pieces are $K_1$ and $K_2$, and the shared point is $\Sigma=\{1\}$. The proof's count is independent of the diagram.

## Source checks and limits

I checked Benini, Córdova, and Hsin, *On 2-Group Global Symmetries and Their Anomalies*, §2.3, PDF pp. 18–19, equations (2.14)–(2.20): the ordered flat edge data, twisted face-cochain constraint, and gauge transformations match the local conventions. I inspected Baez and Lauda, *Higher-Dimensional Algebra V: 2-Groups*, §8.3, PDF pp. 54–56, for the skeletal data $(G,A,\rho,\beta)$ and the normalized 3-cocycle/pentagon convention. I inspected Freed and Quinn, *Chern-Simons Theory with Finite Gauge Group*, §2, PDF pp. 8–11, including the automorphism-weighted measure, Lemma 2.4, and Theorem 2.13 gluing statement; it supports the ordinary finite-group context, not the local two-group proof.

The web reader could not fetch the 42.8 MB Moore–Saxena PDF. The batch source-resolution record documents the authors' full-PDF retrieval and the exact §23.3 pages/equations; the web search excerpt exposed the cited homotopy-cardinality pushforward and partition formulas, but I did not independently retrieve the complete PDF. I therefore relied on the locally opened and checked finite two-group theorem for the assigned proof, not on Moore–Saxena as a proof supplier. This is the sole source-reading limitation.

Process-order limitation: I initially opened `items/def-aqft-background-gauging-data.md` before its direct and transitive dependencies. I opened those suppliers afterward and assessed its finiteness, representative-invariance, and relative-sum claims against their exact definitions and proofs before relying on it. The mathematical disposition therefore uses the supplier content, but the initial file-open order was not fully supplier-first.

## Unedited findings and page verdicts

No confirmed or suspected defects remain in unedited assigned items, pages, or dependencies. No finding is routed for an outside draft or published supplier.

- `qftx-finite-symmetry-gauging-physics`: pass. The A page has the assigned items in supplier order, its prerequisites are present, and its body is empty.
- `qftx-finite-symmetry-gauging-physics-examples`: pass. The B page has the two assigned examples, requires its companion A page, and its body is empty.

Blocker: none.
