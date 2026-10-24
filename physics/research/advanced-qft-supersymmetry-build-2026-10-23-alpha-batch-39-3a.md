# Batch 39 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`; group: `batch-39`.

The scope owes exactly two touched-carrier decisions; reader findings and refuter findings are empty. No page decision is owed. Review proceeds in the generated dependency order.

## Coherence lemma — completed

`lem-aqft-ising-fusion-data-coherence`: accepted reader repair, confidence 1. Git HEAD reproduces the exact pre-reader raw SHA256 `adcf1d3540570d7464febd8271e9999e9a38db0b4c6f70b0f7b48a7b9901e993`; current bytes reproduce post-reader `ca8b0db152f386f97e59252cea3d8878d278dfb6f0fd586f0e28a64f8596eb2d`. The sole delta replaces the last pentagon arrow direction `ur` with `rr`. Its source is a tensor ((b tensor c) tensor d) and its target is a tensor (b tensor (c tensor d)), exactly the type of identity tensor alpha. Both paths now terminate at the same object. Statement and proof are unchanged; no consumer propagation is triggered.

Independently checked all five proof steps: split abelian triple category and simple unit; positive weighted trace, dagger and tensor compatibility; associator naturality and unitarity; pentagon; canonical-unit triangle; simple and general-object duality. The exact checker uses pairs of rationals for Q(sqrt(2)), explicitly zeroes forbidden vertices, and implements the displayed two pentagon paths. Actual run: `PASS: 19683 exact channel assignments; 132 nonzero; 0 failures`. Zero spaces and empty sums give the zero object and zero Hom spaces; all duality constructions are finite and require no arbitrary choice. Risk review completed in the owning contract before moving to level 3.

Exact suppliers read: `def-aqft-ising-fusion-data`, ordinary fusion-category clauses and duality equations of `def-aqft-noninvertible-defect-fusion`, `def-monoidal-category`, and relevant imported `def-fusion-and-multifusion-category` / `def-tensor-and-multitensor-category` Definitions. No imported source was changed.

Next: complete the level-3 example risk review, then adjudicate the lattice theorem and its consumer uses.

## Abstract example — completed

`ex-aqft-ising-fusion-object-noninvertible`: risk-only obligation, no decision owed. Reviewed both Verification steps using the now-reviewed coherence result. For every finite candidate E, the unit and psi multiplicities of sigma tensor E are the same nonnegative integer. They cannot equal respectively 1 and 0. This covers the zero object and every simple candidate, excludes a right inverse and therefore a two-sided inverse, and invokes no converse or physical assumption. Its block description also establishes simplicity directly. Specific HIGH risk review completed in the owning contract.

Next: finish the finite-lattice theorem, exact changed-interface consumer search, manifest reconciliation and final focused checks.

## Finite-lattice theorem — completed

`pthm-aqft-noninvertible-defect-realization`: accepted reader repair, confidence 1. Git HEAD raw hash `e7ea8cbdf7b3d96fecb683249151ea399f2509ac2abc3d4736ea1f1b21a07584` equals the pre-reader snapshot; current raw hash `52b407d2774aff0cd824301b1f6b653844d3105a8db839682698d1cb964d0f6a` equals post. The exact diff adds the dual Hamiltonian definition and replaces the proof's generic reflection sentence by its two indexed actions. Both actions follow directly from r_j = hat h_(1/2-j). The cyclic sums are therefore equal for every L >= 2, including repeated nearest-neighbor bonds at L=2.

Independently reviewed every current step: character orthogonality gives typed K-adjoint K = I+P and KK-adjoint = I+hat P; the reflection gives a real symmetric D; global flips fix both kernel sides; absolute matrix-exponential convergence and its semigroup law give all declared insertion-free gap slides, including inside arbitrary fixed finite external contractions; local delta, shift and sign contractions give the unit, Hadamard and mixed recouplings, with site factors counted once; the coherence lemma supplies the abstract category's duals and unitarity. DP=D with nonidentity P excludes even a left inverse. No general continuum isotopy, infinite-volume limit, measured input or empirical conclusion is inferred. Time has inverse-energy units with hbar=1 and J>0. The intertwiner square in Remarks has the correct domains, arrow directions and commuting operators.

Consumer search over all current item and library Markdown returned only the theorem itself, its A-page inventory, and `ex-aqft-ising-chain-three-site-noninvertible-defect`. Read the complete example: its explicit parity vector is nonzero, D_3 squared annihilates it, and the unchanged gap-slide consequence applies. No further hop is triggered because the example's interface needs no correction. The reader's added definition changes the theorem interface, so the manifest statement and the example contract's exact F1 quotation were reconciled to that current section. No outside consumer repair is necessary. The theorem's own derivation already matches the reader repair. The CRITICAL risk review is complete in the owning contract.

## Source reading and limits

Primary source [Aasen, Mong and Fendley](https://arxiv.org/pdf/1601.07185), section 3.2, equations (3.21)-(3.22), provides the original/dual kernel and local intertwiners. Section 4.1, equations (4.3)-(4.6), specifies site-normalized quadrilaterals and oriented triangles; section 4.2, (4.14)-(4.15), and section 4.3, (4.19)-(4.21), give local recouplings and F coefficients. Read the relevant text and inspected rendered pages 19, 20 and 22 (one-based PDF pagination) for the height and leg conventions. These agree with the finite data; the reflected identification is checked locally rather than attributed to the source. [Simon](https://www-thphys.physics.ox.ac.uk/people/SteveSimon/topological2020/TopoBookSep12.pdf), section 9.2, PDF page 120, equations (9.4)-(9.6), gives the Hadamard and exceptional signs; adjacent section 9.3 explains pentagon consistency. The finite check independently supplies the entire local pentagon verification.

The theorem's Froehlich et al. and Carqueville references are contextual accounts, not load-bearing imports for this finite calculation; their full articles were not independently reread here. The exact current `def-aqft-topological-defect` Definition was read as context; this theorem expressly declares the restricted lattice-slide property it proves and asserts no unrestricted smooth deformation result. No draft or planned theorem is treated as proved merely because a source or readiness record exists.

## Ledger and final focused checks

Appended exactly two fixed nonfatal defect rows, owned at `3a-adjudicate`: `advanced-qft-supersymmetry-build-2026-10-23-batch-39-pentagon-arrow` and `advanced-qft-supersymmetry-build-2026-10-23-batch-39-dual-hamiltonian`. Each points to its distinct touched obligation in the task-named decisions file. Canonical append plus generated ledger rendering succeeded. The frontier dependency ledger has an owned batch-39 record; no published defect was found, so the published-consumer ledger was not edited.

Actual local checks:

- `python3 research/advanced-qft-supersymmetry-build-2026-10-23-batch-39-ising-pentagon-check.py`: PASS, 19,683 exact assignments, 132 nonzero, zero failures.
- Risk report on the owning contract ran first without `--require-reviewed`, then with it after all three specific Alpha HIGH/CRITICAL reviews: 5 items, zero errors.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts` on the two touched items and both proof-bearing examples: 4 checked, zero failing.
- `node tools/physics-support/rendercheck.mjs` on both touched items: 2 files, no YAML, delimiter, wikilink-in-math or real-KaTeX errors. This check does not claim production TikZ compilation.
- Final `node tools/physics-support/proof-layout.mjs items/lem-aqft-ising-fusion-data-coherence.md items/pthm-aqft-noninvertible-defect-realization.md`: 2 items, 14 steps, zero defects; no later item edits.
- Independent bounded integer-matrix computation of the displayed reflected kernel at every L=2,3,4,5,6: symmetric kernel, scaled square equal to I+P and commutator with H zero in every case. This supplements the general symbolic proof, without replacing it.
- Strict owning `proof-contract.mjs`: initial check identified three outdated full-Definition quotations of `def-aqft-noninvertible-defect-fusion` containing its old diagram. Replaced them by exact current relevant ordinary-category / invertibility passages after checking their actual uses. Final result: zero errors, zero warnings, 5/5 items checked. This is mechanical citation synchronization, not a new mathematical defect; no additional ledger row or decision was created.

The statement mirror and example quote now equal the complete current theorem Statement. Item raw hashes remain exactly the post-reader snapshot. Both pages remain unchanged frontmatter-only carriers with `page_layout: compact-v1`; every assigned claim section is uninterrupted by hyperlinks, with reference paragraphs following it. No item was edited by Alpha, no judge record invalidated, no status changed and no new item/page created. There are exactly two decisions, both `accepted_repair` with confidence 1, and no reader/refuter/page obligation exists. No scientific or historical blocker remains. The engine owns stamping, current hash validation and its full gate battery; those operations were not performed here.
