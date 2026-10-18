# Step 3a reader report — batch 77

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Verdict: both assigned pages pass after the listed repairs. One nonfatal citation-locator defect remains in an out-of-scope batch 28 dependency.

## Opened inventory

### Assigned pages

- A: [noninvertible-symmetries-and-anyonic-chains](../library/hall-algebras-and-tensor-categories/noninvertible-symmetries-and-anyonic-chains.md)
- B: [noninvertible-symmetries-and-anyonic-chains-examples](../library/hall-algebras-and-tensor-categories/noninvertible-symmetries-and-anyonic-chains-examples.md)

### Required reading pages

- [Temperley–Lieb Jones–Wenzl Projectors, Traces, and Quotients](../library/quantum-algebra-and-representation-theory/temperley-lieb-jones-wenzl-traces-and-quotients.md)
- [Hopf, Hecke, Quantum-Group, and Braid Interfaces](../library/hopf-hecke-algebras/hopf-hecke-and-quantum-symmetry-interfaces.md)
- [Unitary Fusion Spaces, F/R Symbols, and Anyon Models](../library/quantum-computing/unitary-fusion-spaces-f-and-r-symbols-and-anyon-models.md)

### Assigned items, reviewed in dependency order

- `def-anyonic-fusion-path-space`
- `def-categorical-object-and-operator-invertibility`
- `lem-anyonic-fusion-path-basis`
- `thm-anyonic-path-space-is-hilbert-under-unitarity`
- `def-anyonic-frobenius-schur-sign`
- `def-anyonic-local-channel-projector`
- `lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization`
- `prop-fibonacci-fusion-ring-unit-is-not-tensor-invertible`
- `thm-anyonic-channel-projectors-are-reparenthesization-independent`
- `thm-anyonic-local-channel-projectors-are-orthogonal`
- `prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb`
- `lem-ising-unitary-normal-data-and-ribbon-coherence`
- `lem-ell-four-root-ising-gauge-and-chirality-conversion`
- `thm-ising-periodic-two-sector-and-line-representation`
- `ex-multiplicity-indexed-anyonic-fusion-path`
- `ex-ising-periodic-path-space-and-two-sector-map`
- `ex-fibonacci-golden-chain-projectors-and-noninvertibility`

### Dependency item carriers opened

- Published category and coherence items: `def-monoidal-category`, `def-absolutely-simple-object`, `def-fusion-and-multifusion-category`, `def-fusion-rules`, `def-left-dual-and-right-dual-object`, `def-pivotal-structure`, `def-the-dimension-of-an-object-relative-to-a-pivotal-structure`, `def-spherical-structure`, `def-braiding`, `def-twist-and-ribbon-structure`, `thm-mac-lane-coherence-in-the-canonical-map-form`, and `def-real-and-complex-inner-product-space`.
- Fusion-space/F/R carriers: `def-qc-tqc-unitary-fusion-category`, `def-qc-tqc-fusion-multiplicity-space`, `thm-qc-tqc-fusion-multiplicity-space-is-hilbert`, `def-qc-tqc-fusion-tree-basis`, `lem-qc-tqc-fusion-tree-dimension`, `def-qc-tqc-f-symbol`, `def-qc-tqc-r-symbol`, `thm-qc-tqc-f-symbol-unitary`, and `ex-qc-tqc-fibonacci-data`.
- Root Temperley–Lieb carriers: `lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness`, `lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series`, `lem-temperley-lieb-root-fusion-paths-have-nonzero-pairings`, `thm-temperley-lieb-rank-one-pivotal-ribbon-conversion`, and `thm-temperley-lieb-root-negligible-quotient-is-semisimple`.

The batch manifest, relevant batch coverage and cross-batch dependency records, proof-contract file, reader brief, repository schema, and the applicable Step 3 workflow clauses were consulted as evidence. The evidence files were not treated as verdicts.

### Authoritative source passages checked

- EGNO, *Tensor Categories*, §§2.1, 4.1, 4.5, 9.4 Remark 9.4.7, and 9.5 Proposition 9.5.1: monoidal coherence, fusion categories and rings, and the canonical positive spherical structure for a unitary fusion category.
- Penneys, *Unitary Fusion Categories*, §§3.2–3.8, including the Fibonacci data in §3.6.4 and unitary dual/spherical material in §3.8.
- Shao, *What’s Done Cannot Be Undone: TASI Lectures on Non-Invertible Symmetries*, §§3.4.1–3.4.2: F-move channel projection, Ising alternating periodic sectors, and the two-sector spin-chain comparison.
- Nayak et al., *Non-Abelian Anyons and Topological Quantum Computation*, §II.A.1, §III.B, and §IV.B.a–b: Ising exchange/F data and Fibonacci fusion, F, and R data.
- Bernevig and Neupert, *Topological Superconductors and Category Theory*, §III.A.4, equation (113): the vacuum bend coefficient and Frobenius–Schur phase.
- Siehler, *Braided Near-Group Categories*, §§1–3: the normal associator data and hexagon pattern for the Ising near-group case.
- Chen, *The Temperley-Lieb Categories and Skein Modules*, §2.3, Theorem 2.3.2 and Proposition 2.3.6: the JW recursion and trace.

## Repairs

- [lem-anyonic-fusion-path-basis](../items/lem-anyonic-fusion-path-basis.md): restricted the displayed multiplicity sum to $n\ge1$. For $n=0$, the definition supplies one empty-path vector whenever $b\cong c$, including unequal isomorphic endpoint objects; the old endpoint-indexed sum instead forced literal equality. The $n=0$ case is now stated separately. I also expanded the split-space multiplicity derivation using the finite simple decomposition and scalar endomorphism spaces. The corresponding boundary and step rows in the proof contract were updated.
- [thm-anyonic-path-space-is-hilbert-under-unitarity](../items/thm-anyonic-path-space-is-hilbert-under-unitarity.md): made explicit that $v^\dagger v$ is a scalar because $\operatorname{End}(c)=\mathbb C\operatorname{id}_c$, that positivity and nondegeneracy force the scalar positive, and that rescaling an isomorphism to an isometry makes it unitary. Its proof-contract derivation was updated.
- [ex-multiplicity-indexed-anyonic-fusion-path](../items/ex-multiplicity-indexed-anyonic-fusion-path.md): derived the two-dimensional inclusion space directly from the $n=1$ case of the path-basis lemma. Its proof-contract row was updated.
- [ex-fibonacci-golden-chain-projectors-and-noninvertibility](../items/ex-fibonacci-golden-chain-projectors-and-noninvertibility.md): stated the canonical positive spherical pivotal structure, $d_\tau=\phi$, and the normalized vacuum cup/cap used to claim the positive FS sign. The local zig-zag coefficient is $\phi\cdot\phi^{-1}=1$. The source and contract now identify the canonical spherical structure result in EGNO §§9.4–9.5.
- [lem-ell-four-root-ising-gauge-and-chirality-conversion](../items/lem-ell-four-root-ising-gauge-and-chirality-conversion.md): corrected the F-table explanation so $(\eta,\eta,D)$ and $(D,\eta,\eta)$ are explicitly total-$D$ blocks, while the specified channels of $(\eta,D,D)$ and $(D,D,\eta)$ have total $\mathbf1$. Its proof-contract claim was aligned with the carrier.
- [def-anyonic-frobenius-schur-sign](../items/def-anyonic-frobenius-schur-sign.md) and [lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization](../items/lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization.md): corrected the bibliographic title/authors and locator for the linked PDF to Bernevig–Neupert, *Topological Superconductors and Category Theory*, §III.A.4, equation (113). The opened PDF confirms that equation gives the bend coefficient $\chi_a/d_a$ and $\chi_a\in\{\pm1\}$ for self-dual $a$.
- [ex-ising-periodic-path-space-and-two-sector-map](../items/ex-ising-periodic-path-space-and-two-sector-map.md): corrected the Nayak locator to the Ising fusion rule and exchange-phase summary in §II.A.1 and the F block in §III.B, equation (50).
- [ex-fibonacci-golden-chain-projectors-and-noninvertibility](../items/ex-fibonacci-golden-chain-projectors-and-noninvertibility.md): corrected the Nayak locator to §IV.B.a, equations (126)–(129), and §IV.B.b, equations (132)–(133).
- [prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb](../items/prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb.md): corrected the Chen locator to PDF pages 20 and 24 for Theorem 2.3.2 and Proposition 2.3.6.
- A-page prose: removed “accepted” from the ell-four root quotient route description; the cited carrier remains draft during this independent-review stage. The mathematical summary is unchanged.

No changed carrier had a `verification.judge` record, so there was no stale judge stamp to remove. The proof contracts were updated for the changed argument rows and the Ising contract’s erroneous self-reference was removed.

## Unedited finding

`ex-qc-tqc-fibonacci-data` is a draft dependency in batch 28 and outside this reader’s edit scope. Its Nayak source locator says “§IV.B.c” for the Fibonacci fusion rule, F matrix, and R phases. In the opened PDF, the fusion/F data are in §IV.B.a, equations (126)–(129), and the R phases are in §IV.B.b, equations (132)–(133); §IV.B.c is the subsequent computation subsection. The URL and mathematical data remain usable, so this is a nonfatal citation-locator defect. The current dependency bytes are bound by SHA-256 `79597e894220c8a1868a1af2fa399936e80838ab2e6f8b8ad2d1341a9c810fba`. It is routed to assigned consumer `ex-fibonacci-golden-chain-projectors-and-noninvertibility`.

## Page verdicts and validation

- A page `noninvertible-symmetries-and-anyonic-chains`: pass. The fixed-boundary, projector, Fibonacci, and Ising summaries match the reviewed claims; the reading-route pages are correctly distinguished from logical suppliers. The unsupported status word was removed.
- B page `noninvertible-symmetries-and-anyonic-chains-examples`: pass. The multiplicity, two-sector Ising, and Fibonacci examples match their reviewed domains and calculations. Its positive-FS summary is now backed by explicit spherical and normalized duality data in the example.
- Blocker: none.

Reflow and precheck were rerun on all nine changed items. Reflow reported unchanged files; all eight proof-bearing items passed precheck and the definition had zero applicable proofs. The final batched proof-layout command checked nine items and 42 steps with zero defects. A contract-step audit found zero statement/proof-row mismatches. No full re-evaluation of all 33 individual root TL F-contraction scalars was performed; the local contraction formula and table were checked for channel typing and consistency with the Ising normal-data supplier.
