# Step 3a reader report — batch 53

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: read-only batch reader, with repairs limited to assigned in-flight items  
Batch: `53`

## Opened inventory

### Assigned pages

- `library/advanced-qft-and-supersymmetry/qftx-bps-indices.md` — A page.
- `library/advanced-qft-and-supersymmetry/qftx-bps-indices-examples.md` — B page.

Both pages are draft, frontmatter-only, and retain `page_layout: compact-v1`.

### Assigned items, reviewed in dependency order

- `items/def-qftx-superconformal-index.md`
- `items/def-qftx-physical-bps-index.md`
- `items/pthm-qftx-superconformal-index-beta-independence.md`
- `items/pthm-qftx-physical-index-beta-independence.md`
- `items/ex-qftx-superconformal-index-free-chiral.md`
- `items/ex-qftx-witten-index-finite-superpartner-pair.md`

### Supplier context opened

- `items/def-qftx-graded-trace-class-index-data.md`
- `items/lem-qftx-supercharge-positive-energy-pairing.md`
- `items/thm-qftx-witten-index-beta-independence.md`
- `items/def-qftx-bps-state-and-saturation.md`
- `items/def-qftx-susy-background-data.md`
- `items/def-qftx-unitary-super-poincare-representation.md`
- `items/thm-qftx-n-extended-central-charge-bounds.md`
- `items/pthm-qftx-n2-bps-saturation-kernel-equivalence.md`
- Imported mathematics suppliers: `../items/def-countable-choice.md`, `../items/def-trace-class-operator.md`, `../items/def-trace-of-a-trace-class-operator.md`, `../items/def-complex-numbers-and-arithmetic.md`, `../items/thm-complex-numbers-form-a-field.md`, `../items/def-real-and-complex-inner-product-space.md`, `../items/def-hilbert-space.md`, `../items/def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis.md`, `../items/def-unbounded-linear-operator-domain-and-graph.md`, `../items/def-densely-defined-closed-and-closable-operator.md`, `../items/def-adjoint-of-a-densely-defined-unbounded-operator.md`, `../items/def-symmetric-self-adjoint-and-essentially-self-adjoint.md`, `../items/thm-of-square-roots.md`, `../items/def-real-exponential-function-and-e.md`, `../items/cor-exponential-is-a-bijection-onto-positive-reals.md`, and `../items/thm-exponential-is-strictly-increasing.md`.
- Page prerequisites opened: `library/advanced-qft-and-supersymmetry/qftx-susy-algebra-and-multiplets.md`, `library/advanced-qft-and-supersymmetry/qftx-susy-backgrounds.md`, `library/quantum-field-theory-mathematics/aqft-susy-math-foundations.md`, and the imported countability and trace-class pages under `../library/`.
- The scoped cross-batch dependency record and proof contracts were inspected as routing and contract evidence, not as verdicts.

### External source sections checked

- David Tong, *Supersymmetric Quantum Mechanics*, §§1.2.1–1.2.2, printed pp. 13–15: graded heat trace, positive-energy pairing, zero-energy contribution, and the warning against an unqualified β=0 trace. [PDF](https://www.damtp.cam.ac.uk/user/tong/susy/susyqm.pdf)
- Rastelli and Razamat, *The supersymmetric index in four dimensions*, §2.1, especially (2.1)–(2.5), and §2.3, Table 1 and (2.9)–(2.13): right-handed charge convention, chiral-letter weights, the two δ-preserving derivatives, and bosonic/fermionic symmetrization. [PDF](https://arxiv.org/pdf/1608.02965)
- Kinney et al., *An Index for 4 dimensional Super Conformal Theories*, §3.3, (3.10)–(3.12), printed pp. 16–17: right-handed Witten trace and commuting charge subalgebra. Their R-charge convention differs from the one fixed in the assigned definition. [PDF](https://arxiv.org/pdf/hep-th/0510251)

## Review and repairs

The physical Witten-index definition and theorem match the mathematical pure-point trace-class supplier: the proof uses finite-dimensional positive-energy parity pairing and absolute regrouping, and it makes no continuous-spectrum, regulator, empirical, or universal BPS-count claim. The finite-dimensional ℂ³ matrix example has the stated self-adjoint supercharge, square, heat weights, and even-minus-odd trace; the index is one for each β>0.

The superconformal definition and beta-independence theorem state the right-handed charge convention, operator domains, joint spectrum, reducing projections, and trace-class fugacity range. In the theorem, trace-class summability makes each fixed joint block finite because its diagonal weight is strictly positive; the local restriction of the supercharge is then self-adjoint on that finite block, and the supplied parity-pairing lemma applies. Absolute diagonal summability justifies regrouping even when the protected kernel and total gap eigenspaces are infinite.

The free-chiral example’s original “derivative tower” and “Fock construction” names did not specify the mode maps, Hilbert basis, or charge action used in the trace calculation. I repaired `items/ex-qftx-superconformal-index-free-chiral.md` by defining the orthonormal mode labels and shifts, their full $(E,J_1,J_2,R)$ and $(\Delta,J_+,J_-)$ charges, the finite-support occupation basis, additive charges, parity, and completeness of the protected sector as supplied model data. The positive-gap complement remains explicitly conditional. The proof contract now records the exact source support for the letter table, derivative descendants, and symmetrization. This does not assert a continuum field-operator construction.

I clarified both assigned index definitions by stating the mathematical content of “complex Hilbert space,” self-adjointness and domain equality, nonnegativity, grading and oddness, composition domains, complete orthonormal bases, and the joint orthogonal projections. Their direct consumers were checked after the clarification: `pthm-qftx-physical-index-beta-independence.md`, `ex-qftx-witten-index-finite-superpartner-pair.md`, `pthm-qftx-superconformal-index-beta-independence.md`, and `ex-qftx-superconformal-index-free-chiral.md`. No other item dependency consumer of either definition was found in the current item inventory; the existing conclusions remain valid under the explicit definitions. The corresponding definition-boundary evidence was updated in the batch proof contracts.

The Kinney source locators in the right-handed index definition, right-handed beta-independence theorem, and free-chiral example previously pointed to §3.1’s left-handed construction. I corrected them to §3.3, equations (3.10)–(3.12), and stated the source’s differing R-charge convention. The local proofs and the Rastelli–Razamat normalization remain unchanged. No stale `verification.judge` record was present on the repaired items.

## Checks

- Reflow: `unchanged` for all four changed items.
- Precheck: the two definition-only items had no proof steps (`0 checked, 0 failing`); both changed proof-bearing items passed.
- Final proof layout: `4 items, 9 steps, 0 defects`.
- No TikZ or tikzcd diagram was present in the assigned items.

## Page verdicts

- `qftx-bps-indices`: **Pass.** Draft A-page inventory matches its assigned four items; the body is empty, compact layout is set, and its prerequisites are recorded.
- `qftx-bps-indices-examples`: **Pass.** Draft B-page inventory matches its two example items; the body is empty, compact layout is set, and it requires the A page and countability prerequisite.

## Unedited defects and blocker

No confirmed defects remain outside this reader’s edit scope. No proposed withdrawal was present. Blocker: none.

## Coverage limit

The review checked the assigned carriers, their directly needed item suppliers, the exact operator definitions used by the pairing proof, and the cited source passages. It did not re-audit unrelated transitive proofs behind every imported mathematical supplier, and it makes no claim that the supplied Hilbert-space data have a continuum QFT realization or describe nature.
