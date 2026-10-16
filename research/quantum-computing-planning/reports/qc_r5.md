# QC18–QC21 research report (qc_r5)

Status: completed research synthesis, 2026-10-14. This is a proposal and source report, not a proof-acceptance receipt, a published QC item, or an autopilot/gate result. I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the QC `TEAM-BRIEF.md` before work. I changed only `reports/qc_r5.md`, `sources/qc_r5/`, `source-ledgers/qc_r5.json`, and `source-ledgers/qc_r5-coverage.json`.

The source/read receipts and fetch stamps are in [`source-ledgers/qc_r5.json`](../source-ledgers/qc_r5.json) and [`source-ledgers/qc_r5-coverage.json`](../source-ledgers/qc_r5-coverage.json). The checker reports 11/11 occurrences fetch-verified. Cleve, Preskill Ch. 7, Aharonov–Ben-Or, and Kribs–Laflamme–Poulin–Lesosky were read completely in physical page order; Preskill’s 2011 handwritten note was visually inspected on every physical page because the text extraction omits entire pages of mathematics. The full chunk ranges, source hashes, extraction lengths, failed URL attempts, and limitations are in the ledger.

## Primary source coverage and source boundaries

The Waterloo links are verified at the current author-hosted institutional site. `https://cs.uwaterloo.ca/~cleve/` returns an HTTP 200 stale profile saying the page moved; it is not the notes. Richard Cleve’s current author page `https://cleve.iqc.uwaterloo.ca/` links the official QIC710 F26 course page `https://cleve.iqc.uwaterloo.ca/qic710/index.html`, which links the complete notes PDF `https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf`. The PDF is 12,726,759 bytes, SHA-256 `f7c4ec6e644a0e39128ac73772585af61089becd85346519a94ceef1dbd07117`, and has 328 actual pages. Its extracted text has 543,694 characters and SHA-256 `0a75fe7924b342370a5f988977f0e1d720e7b0099830bf0c7534395bc95bb303`; all 328 pages were read sequentially. The assigned material is §§36–38, printed pp. 281–305 (PDF pp. 289–313): classical repetition and binary linear codes, Hamming distance, duals, generator/check matrices, syndrome decoding, Shor’s code, CSS encoding/correction and the Steane code. Section 38 is explicitly only a “very brief” rough threshold statement; it has no explicit local noise assumptions, gadget definitions, concatenation recursion, or proof.

Preskill’s official current course index `https://www.preskill.caltech.edu/ph219/` says the typeset Chapter 8 on fault-tolerant quantum computation is not yet available and links handwritten material. That index supplied the 2011 fault-tolerance note. Separately, I read all 92 actual PDF pages of Preskill Chapter 7 from qc_r2’s read-only cache, SHA-256 `ddb6901c73ca5732272164c03ef91696be01d697bc4c7c55eeeddcee7aafc8bc`; extracted text SHA-256 `09445864102f73d2d356b4416855ff68070c3e2d0cbf4359e189b951cca2a38c`. The chapter supports the full subspace Knill–Laflamme theorem and constructive recovery (§7.2, printed pp. 5–7; PDF pp. 11–13), error/environment decoupling and erasures (§§7.3.2–7.3.4 (printed pp. 9–12; PDF pp. 15–18)), quantum distance and the $d\ge 2t+1$ correction result (§7.4.1 (printed pp. 13–14; PDF pp. 19–20)), binary codes/CSS/stabilizers and the binary symplectic representation (§§7.6–7.10 (printed pp. 19–34; PDF pp. 25–40)), concatenated-code distance and a repeated-recovery numerical recursion (§7.17 (printed pp. 49–51; PDF pp. 55–57)), and an explicitly narrow planar-surface-code memory theorem (§7.18.5 (printed pp. 56–58; PDF pp. 62–64)). Section 7.18.6 (printed pp. 58–59; PDF pp. 64–65) only sketches gate- and syndrome-level threshold refinements; its quoted numerical gate thresholds are not proofs.

Preskill’s 25-page 2011 handwritten note was downloaded from the official link `https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf` (1,841,397 bytes; SHA-256 `337b09b45a3c7e0336917876ab2cdcf416a5e5f0aab1c8bdd882427f2cc90f40`). Text extraction yields 19,926 characters but has no extracted text on physical pp. 2, 5–7, 10–11, 17, 19, and 23–25. All 25 rendered pages were visually read; the handwritten equations and gadget diagrams on the blank-text pages were not counted from OCR/extraction. This note supplies a narrow toric-memory loop count (pp. 1–3), independent faulty gate/preparation/measurement locations with arbitrary faulty CPTP replacements, spread-one/recovery gadget conditions, repeated syndrome measurement, and verified cat-state/encoded-ancilla gadgets (pp. 4–10), followed by Steane transversal Clifford and magic-state injection constructions (pp. 16–25). It does not give a general circuit-level concatenation threshold proof.

Two additional full-text proof sources close the subsystem and general-threshold source gaps. Aharonov–Ben-Or, *Fault-Tolerant Quantum Computation With Constant Error*, arXiv:quant-ph/9611025v2, is the complete 18-page author paper, 257,845 bytes, SHA-256 `3588fba3cd955931381eca0b7b5c5917a8065a767039462f8214fb2a71db7761`; extracted-text SHA-256 `be0a2542ee6894e180ffa831d2596669b8c0f781ea17746125ca6275a7fc04fb`. Its Appendix C proves a concatenated threshold conditional on a fixed-size proper quantum code; Appendix D gives linear-code fault-tolerant procedures, but some universal-gate claims refer back to Shor or other sources. Kribs–Laflamme–Poulin–Lesosky, *Operator Quantum Error Correction*, arXiv:quant-ph/0504189v3, is the complete 21-page expanded paper, 244,242 bytes, SHA-256 `683f97d05477aab6703126c082847546b988e1d9590a137ebda2b09b33a043d3`; extracted-text SHA-256 `5a202f88d6a2adef8a458d5938cefd156e80de319ca4821fe99489e0e3369caa`. Its Theorems 3.2 and 3.5 give a full exact subsystem-recovery criterion and proof. Physical motivation in these sources is not a premise: proposed QC items use finite-dimensional vector spaces, tensor products, CPTP maps, finite probability spaces, and circuit/gadget combinatorics only.

## Exact local supplier audit

Reuse existing root items by exact ID when their hypotheses fit. The root has useful finite-field and linear-algebra prerequisites: `def-field`, `def-finite-cardinality`, `def-finite-field-and-its-order`, `thm-finite-fields-have-prime-power-order`, `thm-existence-of-finite-fields`; `def-vector-space`, `def-linear-subspace`, `def-linear-map`, `def-dimension`, `thm-rank-nullity`, coordinate/basis suppliers; and the finite-dimensional inner-product/adjoint/projection/positive-operator suppliers listed in the machine ledger. The root inner product is linear in its first argument, so source bra-ket formulas must be translated to that convention. Existing root finite-field and matrix facts do not define coding theory or a syndrome decoder.

A correction to the initial inventory is important: the root already has published classical binary-code construction suppliers on `computability-theory/gap-amplification-and-assignment-testing`: `def-explicit-constant-rate-constant-distance-code`, `def-reed-solomon-outer-code-and-binary-linear-inner-code`, `lem-random-linear-inner-code-has-fewer-than-one-bad-codeword-in-expectation`, `lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time`, `lem-concatenated-code-multiplies-rate-and-distance`, and `thm-explicit-code-construction-and-distance`. They prove existence/construction and parameters for a specialized binary encoder family; they do not supply general finite-field linear-code definitions, parity-check/syndrome decoding, quantum codes, or QEC. The generic explicit-code definition directly depends on `def-gap-preserving-csp-reduction`, so importing it as a foundational QC supplier also imports an unrelated CSP interface. `def-walsh-hadamard-encoding-and-relative-distance` and `lem-walsh-hadamard-code-has-distance-one-half` are another specialized binary code/distance example, tied to the linearity-test/CSP page; they do not give a generic code or decoder. Do not say “the library has no code results”; say that it lacks the generic linear-code/syndrome/QEC contracts required here.

The machine ledger records additional exact reusable root items and the forbidden-physics boundary. In particular, no `physics/items/` or `physics/library/non-relativistic-quantum-mechanics*` ID may enter a QC `deps` or `justified_by`; even mathematically pure NRQM items are only source context for a root-local proof. The proposed closures do not use physics postulates, experiments, observation claims, or physical theorems.

## QC18–QC21 proposed contracts and dependency routes

IDs below are proposed names for integration, not existing published items. Use the assigned page slugs from `pages.json`; keep each B page a logical leaf that contributes examples but no A-page prerequisites. Aim for roughly 10–16 A items/page, with separate proofs for definitions’ well-definedness and theorem claims. Shared QC01–QC05, QC07, QC09, and QC15 identifiers below use the exact interfaces listed in the companion reports; finite-dimensional inner-product and trace foundations use actual root items.

### QC18 — classical and quantum codes

A complete local sequence is:

1. <code>def-qc-classical-linear-code-over-finite-field</code>: fix a finite field $F$, length $n ≥ 1$, and a subspace $C ≤ F^n$, with dimension $k$ and a linear encoding isomorphism $F^k → C$. State whether “code” means the image subspace or encoder data; do not identify $F_q$ with $Z/qZ$.
2. <code>def-qc-hamming-weight-distance-and-linear-code-distance</code>: define Hamming weight $wt(x)=|{i : x_i ≠ 0}|$, distance $d_H(x,y)=wt(x-y)$, and $d(C)=min_{0 ≠ c ∈ C} wt(c)$ for nonzero $C$; state an explicit convention for the zero code.
3. <code>def-qc-dual-of-a-finite-field-linear-code</code>: define the standard bilinear dot product $x·y=Σ_i x_i y_i$ over $F$ and $C⊥$. It is not a positive inner product, even over $F_2$.
4. <code>def-qc-generator-and-parity-check-matrices</code>: choose column-vector convention $G ∈ F^{n×k}$, $C=im(G)$, and $H ∈ F^{(n-k)×n}$, $C=ker(H)$, with declared rank hypotheses.
5. <code>def-qc-classical-error-syndrome</code>: define $s(r)=Hr$; if $r=c+e$, prove $s(r)=He$.
6. <code>lem-qc-classical-code-distance-disjoint-error-balls</code> and <code>lem-qc-equal-syndrome-errors-differ-by-a-codeword</code>: supply finite Hamming-ball and syndrome uniqueness calculations.
7. <code>thm-qc-classical-distance-correction-and-erasure-radius</code>: minimum distance $d$ uniquely corrects $t=floor((d-1)/2)$ unknown symbol errors; distinct errors of weight at most $t$ have distinct syndromes; a known erasure support of size $s<d$ has a unique completion. State correction, detection and decoding as distinct conclusions.
8. <code>ex-qc-binary-repetition-code-syndrome-table</code>: include the $[3,1,3]_2$ generator/check matrices and every single-bit syndrome.
9. <code>def-qc-quantum-code-isometry-and-code-projector</code>: an encoding isometry $V:H_L→H_P$ and code projector $P=VV^*$; specify finite dimensions and the root first-argument-linear inner-product convention.
10. <code>def-qc-local-operator-support-and-weight</code>: with the QC02 register tensor factorization, define support $S⊆[n]$ when $E=E_S⊗I_{S^c}$; weight is the least such $|S|$.
11. <code>def-qc-quantum-code-distance-and-error-detection</code>: $E$ is detectable iff $PEP=λ_E P$; define distance as the least support weight of an undetectable operator, with an explicit convention for a one-dimensional/no-logical subsystem.
12. <code>thm-qc-quantum-distance-detects-low-weight-errors</code>: every operator of weight below distance is detectable. Leave conversion to correction of $t$ unknown errors to QC19’s proved KL criterion, avoiding a forward dependency.

The proposed QC18 A page consumes actual root finite-field/vector-space/basis/matrix suppliers, QC02 register/tensor interfaces, and root finite-dimensional inner-product/isometry/adjoint/projection items; it does not mint a duplicate Hilbert-space definition. It owns classical code and quantum subspace definitions. Its B page should calculate repetition/Hamming/short Reed–Solomon syndromes, compare known erasure with unlocated error, compute one quantum code projector, and show a low-weight undetectable-operator counterexample at the distance boundary. No asymptotic-good-code theorem is needed for these contracts; if used, prove it from the existing specialized root code items only after resolving their dependency suitability.

### QC19 — Knill–Laflamme and subsystem recovery

Do not duplicate QC05’s CPTP/Kraus definitions. Add:

1. <code>def-qc-exact-recovery-of-a-quantum-code</code>: for $V$, $P$, a channel $N(ρ)=Σ_a E_aρE_a^*$, and a CPTP recovery $R$, exact correction means $R∘N(VρV^*)=VρV^*$ for every logical density matrix, including reference-entangled inputs by linear extension.
2. `lem-qc-kraus-operators-of-the-identity-channel-are-scalars`: if Kraus operators jointly implement the identity on a space, each restricted Kraus operator is scalar; prove from pure-state outputs and linearity.
3. <code>lem-qc-knill-laflamme-coefficient-matrix-is-positive</code>: the matrix $(C_ab)$ in $P E_a^*E_b P=C_abP$ is positive semidefinite by testing $Σ_a z_aE_a$.
4. <code>thm-qc-knill-laflamme-necessity</code>: use Kraus operators $R_jE_aV=c_jaV$ of the recovered identity and trace preservation $Σ_jR_j^*R_j=I$ to obtain the scalar overlap matrix. This is a complete finite-dimensional necessity proof.
5. <code>lem-qc-knill-laflamme-orthogonal-error-basis</code>: diagonalize $C$, unitarily mix the error operators, discard zero-on-code errors, and normalize the nonzero restrictions to isometries with orthogonal ranges.
6. <code>thm-qc-knill-laflamme-explicit-recovery</code>: measure orthogonal error-subspace projectors, apply the inverse isometry on each, and send the orthogonal complement to a fixed encoded state to make recovery trace-preserving. Prove $Σ_a C_aa=1$ from trace preservation of $N$; verify recovery on all logical states and references.
7. <code>def-qc-correctable-subsystem-and-gauge-factor</code>: fix a code factorization $H_G⊗H_L↪H_P$; $L$ is protected and $G$ is gauge. State precisely that recovery preserves the logical subsystem while gauge output may change.
8. <code>thm-qc-subsystem-knill-laflamme</code>: prove exact correctability iff $P E_a^*E_bP=M_ab⊗I_L$ for gauge operators $M_ab∈B(H_G)$. Use KLP–Lesosky Theorems 3.2/3.5: the equivalent matrix-unit test $P_kk E_a^*E_bP_ll=λ_abkl P_kl$; reduce sufficiency to ordinary KL on restricted Kraus operators and explicitly construct/re-encode the protected subsystem.
9. <code>cor-qc-distance-corrects-t-errors</code>: from QC18 distance and KL, all errors supported on at most $t$ unknown sites are correctable when $2t<d$; for a known erased set, $s<d$ suffices. Keep unknown errors and located erasures distinct.

Dependencies: QC05 channels/Kraus/Stinespring and QC18 code isometries/distance, plus root adjoints, finite-dimensional projections, and positive-matrix spectral decomposition. Preskill §7.2 supplies the full subspace proof; the full KLP paper supplies the subsystem theorem. The source-varying bra/ket convention is not adopted.

### QC20 — stabilizer/CSS codes, syndromes and procedures

Reuse the exact Pauli/symplectic interfaces owned by QC15; do not redeclare Pauli multiplication or Clifford conjugation. A suitable local sequence is:

1. <code>def-qc-stabilizer-code-space</code>: an abelian subgroup $S⊆P_n$ with $-I∉S$; code space is the common $+1$ eigenspace.
2. <code>thm-qc-stabilizer-projector-and-dimension</code>: for $r$ independent commuting generators, $P=|S|^{-1}Σ_{g∈S}g$ is an orthogonal projector of rank $2^{n-r}$. Prove using trace-zero of every nonidentity Pauli and the symplectic commutation supplier.
3. <code>def-qc-stabilizer-syndrome-and-logical-operators</code>: syndrome bit $j$ is the commutation sign of an error with generator $g_j$; logical Paulis lie in the normalizer and outside $S$.
4. <code>def-qc-stabilizer-distance</code>: minimum Pauli weight in $N(S)∖S$.
5. <code>thm-qc-stabilizer-distance-detection-and-correction</code>: syndrome distinguishes errors modulo stabilizers; distance $d$ detects weight $<d$ and corrects $t$ unknown Pauli errors for $2t<d$, by QC19/KL.
6. <code>def-qc-css-code-from-nested-binary-codes</code>: choose $C_2⊂neq C_1⊆F_2^n$ with $C_2^⊥⊆C_1$; define logical coset states $|x+C_2⟩=|C_2|^{-1/2}Σ_{c∈C_2}|x+c⟩$ for $x∈C_1/C_2$. State the binary bilinear dot-product convention.
7. <code>thm-qc-css-encoding-dimension-and-commutation</code>: prove coset-state orthonormality, $k=dim(C_1)-dim(C_2)$, stabilizer generators $X^c$ ($c∈C_2$) and $Z^h$ ($h∈C_1^⊥$) commute, and Hadamard exchanges the two classical checks.
8. <code>thm-qc-css-syndrome-correction</code>: separate X/Z syndrome extraction and recovery, include $Y=iXZ$, and state the minimum-distance/error-set hypothesis used.
9. <code>alg-qc-stabilizer-encoder-by-symplectic-elimination</code> and <code>thm-qc-stabilizer-encoder-correctness</code>: specify finite row/column Clifford operations and termination, then prove the resulting circuit maps a logical computational basis to the specified code basis; a bare existence assertion is insufficient.
10. Worked checks: Steane ([[7,1,3]]) CSS generator/check matrices and Shor/5-qubit code syndrome/logical operators. These can sit on the B page if its items stay non-supplier examples.

Dependencies: QC15 exact phase-aware Pauli group, binary quotient, binary symplectic form and commutator interfaces; QC18 finite-field/classical and quantum code contracts; QC19 recovery and distance-correction result; QC07 Pauli matrices and gate alphabet for explicit encoders. Preskill §7.10 and Cleve §37 are independent full-text routes for stabilizer/CSS statements. Neither source’s physical interpretation is a premise.

### QC21 — finite fault models and thresholds

The primary full proof source is Aharonov–Ben-Or §4.1/Appendix C. It is substantially stronger than Cleve’s rough threshold remark, but its theorem is conditional on a proper code and its t=1 gate-level case is not fully proved there. Preserve both branches explicitly.

**Finite local model.** <code>def-qc-noise-channel-model</code> treats each ideal circuit location as a finite-dimensional map (gate, preparation, measurement, reset, and each idle wire-time slot). Each elementary location is independently faulty with probability $η$; conditional on a fault, replace only that location by an arbitrary CPTP map on its declared register support. All faulty maps may be selected adversarially. This is a mathematical local channel model, not a claim about physical noise. Define the fault set/path and finite product probability law; do not silently allow a shared fault channel to entangle different locations. A correlated/local-stochastic extension $Pr[S⊆F]≤η^{|S|}$ is a separate model and needs its own combinatorial proof.

**Gadget contracts.** Propose <code>def-qc-fault-location-path-and-rectangle</code>, <code>def-qc-code-deviation-and-spread</code>, <code>def-qc-ft-gadget-and-proper-code-contract</code>, and <code>def-qc-level-r-good-and-bad-rectangles</code>. A level-zero location is one declared operation/idle slot. A procedure has spread $ℓ$ if one fault changes at most $ℓ$ output coordinates per block. A code corrects $d$ located/deviated coordinates if every state agreeing with the codeword off a set of at most $d$ coordinates is recovered, including logical references. A proper code has fixed block size, finite universal logical gate set, and bounded-size/depth encoding, correction, initialization, readout and gate gadgets that all use that same set; correction maps every input state to an encoded word. For each gadget, state the ideal map, code-space input/output contract, propagation rule for good input/subrectangles, fault tolerance of one bad subrectangle, and maximum location count $a$. Include ancilla preparation/verification, syndrome interaction, classical processing and measurement/reset locations.

**Aharonov–Ben-Or conditional branch (integer-safe form).** Assume a proper code correcting $d$ located errors, with block size $m≥2d+1$, spread $ℓ$, fixed procedure-size bound $a$, and a recursively closed finite gate/procedure set. Let $q=floor(d/(2ℓ))≥1$ and $A=choose(a,q+1)$.
\[
q=\left\lfloor\frac d{2\ell}\right\rfloor\ge1,
\qquad A=\binom a{q+1}.
\]
A level-$(r+1)$ rectangle is bad only if at least $q+1$ of its at-most-$a$ level-$r$ subrectangles are bad, once the sparse-fault/deviation induction has been proved. Under independent per-location faults,
\[
p_0=\eta,\qquad p_{r+1}\le A p_r^{q+1}.
\]
Thus the exact contraction condition is $Aη^q<1$, or $η<A^{-1/q}$; with $ρ=A^{1/q}η<1$,
\[
p_r\le A^{-1/q}\rho^{(q+1)^r}.
\]
This is the integer-safe statement corresponding to the paper’s displayed condition $choose(a,d/(2ℓ)+1) η^{d/(2ℓ)}<1$. Appendix C sets $Aη^{q+1}=η^{1+ε}$, equivalent to $Aη^q=η^ε<1$. State an integer parameter; do not round the binomial index or exponent silently. The paper’s $d=1$ case is a separate “almost the same” extended-rectangle remark, not the proof above.

If the ideal circuit has $N$ output rectangles and a failure occurs only if one is bad, the union bound gives output-law total-variation error at most $Np_r$. For target $δ>0$, choose the least $r$ with $Np_r≤δ$; for fixed code and $η<A^{-1/q}$, $r=O(log log(N/δ))$. If one logical rectangle expands to at most $g$ physical locations and depth factor $h$, size/space-time overhead is at most $g^r=polylog(N/δ)$ and depth factor at most $h^r$. An ideal success probability $2/3+δ$ then remains at least $2/3$. The proof must establish: (i) sparse-fault rectangle induction from code/gadget spread and correction; (ii) the bad-rectangle recurrence; (iii) all-good gadgets exactly simulate the ideal circuit including final readout; and (iv) output-law and size/depth bounds. Aharonov–Ben-Or Appendix C supplies the route for $d≥2ℓ$; local finite-dimensional formulations and proofs remain required.

**Separate t=1 extended-rectangle branch.** Steane $[[7,1,3]]$ corrects one unknown error and does not meet $q≥1$ in the preceding $d≥2ℓ$ formula when $ℓ=1$. Aharonov–Ben-Or only remarks that a related $d=1$ result has threshold $C(b,2)η<1$, where $b$ bounds a combined computation/correction rectangle; Preskill’s handwritten notes prove t=1 memory gadget properties, not the universal gate/exRec theorem. Keep the full-circuit t=1 branch as an authoring obligation: prove extended-rectangle correctness and overlap for every gate, idle, preparation, syndrome, measurement and readout gadget; prove a higher-level rectangle is bad only if at least two of at most $b$ lower rectangles are bad; then $A_1=C(b,2)$, $p_{r+1}≤A_1p_r^2$, threshold $A_1η<1$, and $p_r≤A_1^{-1}(A_1η)^{2^r}$. This is a source-supported route plus a local proof task, not a theorem silently transferred from the memory calculation.

**Explicit-code obligation.** The Aharonov–Ben-Or threshold theorem is conditional. Its paper gives a proper-code blueprint, but parts of universal gate density and FT-Toffoli procedures cite Shor/other sources, and the t=1 Steane source is handwritten. If QC21 claims an unconditional universal-circuit threshold, add a complete root-local supplier proving a fixed code and universal closed FT gadget set satisfy every hypothesis (including ancilla verification, syndrome/readout fault paths, spread, location count, and recursive closure). If no such completed proof is being proposed, state the general theorem as conditional on the proper-code contract and retain the explicit proper-code construction as a mandatory AUTHORING obligation. This is an established theorem construction obligation, never an open problem.

**Narrow proved memory branch, retained separately.** Preskill §7.18.5 proves a useful local theorem, but it is not a substitute for circuit fault tolerance. For the square planar surface code of distance $d$, with $n=O(d^2)$ data qubits, independently occurring Z errors at rate $\epsilon$, perfect syndrome readout, and minimum-weight recovery, any logical-failure path $C_\ell$ has length $\ell\ge d$ and at least $\ell/2$ error edges. The path count is $N_\ell\le d3^\ell$; therefore
\[
P_{\rm logical}\le \sum_{\ell=d}^{n}N_\ell 2^\ell\epsilon^{\ell/2}
\le d\sum_{\ell=d}^{n}(36\epsilon)^{\ell/2}.
\]
For $ε<1/36$, the sum decays exponentially in $d$ up to a polynomial prefactor (the chapter records $O(d^3)(36ε)^{d/2}$); the handwritten toric-code proof has its own finite-size prefactor $(8/3)L^4(36ε)^{L/2}$. State the code/decoder, iid-Z, perfect-measurement, and single-memory-round hypotheses in the theorem. This route has no faulty gate gadgets or syndrome measurement, so keep it as a separate QC21 theorem/example.

## Integration dependencies and explicit limits

The proposed dependency graph is acyclic: QC18 uses exact root finite-field/linear-algebra and finite-dimensional inner-product/isometry suppliers plus QC02 register spaces; QC19 uses QC05 channels and QC18 code subspaces; QC20 uses QC15 exact phase-aware group, binary quotient, symplectic-form, commutator, and Clifford-action interfaces plus QC07 matrices/gate alphabet, QC18 classical codes, and QC19 recovery; QC21 uses QC05 channels, QC09 circuit semantics, QC18–QC20 code/recovery/gadget contracts and root finite probability suppliers. An optional output-state norm-accuracy corollary may consume QC06, but the exact event-probability threshold proof does not require a trace-distance hypothesis. QC18 should not depend forward on QC19: keep low-weight detection in QC18 and prove correction from distance only after KL appears in QC19. The inventory uses the reconciled QC01–QC17 identifiers supplied by their owners; the QC18–QC21 rows also use actual root item IDs for finite-dimensional inner-product, adjoint, projection, trace, field, matrix, and probability foundations.

The following claims must stay out of logical dependencies: Cleve’s unproved good-classical-code existence aside, physical decoherence narratives, measured/quoted numerical threshold estimates, the surface-code gate-threshold simulation, and physics-postulate language. Cleve §§36–38 has no full KL or threshold proof; Preskill Ch. 7 has the full KL route and only the iid memory proof; the handwritten note fills useful t=1 gadget details but not the full exRec theorem; Aharonov–Ben-Or supplies a conditional general threshold proof but not a self-contained universal proper-code instance. The unresolved construction/proof work above is explicit AUTHORING scope. No physical theorem, experiment, postulate, or observed noise parameter supplies any step.


## Checker-shaped QC18–QC21 item inventory

These proposed rows use the integrator’s checker fields exactly. All items remain unresolved authorship proposals; an empty `justified_by` records that no existing item is being cited as a substitute for the new proof.

```json
[
  {
    "id": "def-qc-classical-linear-code-over-finite-field",
    "kind": "definition",
    "page": "classical-and-quantum-error-correcting-codes",
    "deps": [
      "def-finite-field-and-its-order",
      "def-vector-space",
      "def-linear-subspace",
      "def-dimension"
    ],
    "justified_by": [],
    "statement_or_definition": "For a finite field F and n≥1, a classical linear code is a subspace C≤F^n, with dimension k and a declared linear encoding isomorphism F^k→C. The field is part of the data; F_q is not identified with Z/qZ.",
    "proof_obligations": [
      "Prove the image of a full-column-rank encoding matrix is a k-dimensional subspace and state the zero-code convention separately.",
      "Use the existing finite-field definition and do not duplicate field existence or uniqueness."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.1.3, printed pp.292–297; PDF pp.300–305"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.6, printed pp.19–20; PDF pp.25–26"
      }
    ]
  },
  {
    "id": "def-qc-hamming-weight-distance-and-linear-code-distance",
    "kind": "definition",
    "page": "classical-and-quantum-error-correcting-codes",
    "deps": [
      "def-qc-classical-linear-code-over-finite-field"
    ],
    "justified_by": [],
    "statement_or_definition": "Define wt(x)=|{i:x_i≠0}|, d_H(x,y)=wt(x−y), and for nonzero C define d(C)=min_{0≠c∈C}wt(c). Give parameters [n,k,d]_q and an explicit convention if C={0}.",
    "proof_obligations": [
      "Prove d_H is a metric on F^n and that linearity gives min_{x≠y∈C}d_H(x,y)=min_{0≠c∈C}wt(c)."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.1.3, printed pp.292–297; PDF pp.300–305"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.6, printed pp.19–20; PDF pp.25–26"
      }
    ]
  },
  {
    "id": "def-qc-dual-of-a-finite-field-linear-code",
    "kind": "definition",
    "page": "classical-and-quantum-error-correcting-codes",
    "deps": [
      "def-qc-classical-linear-code-over-finite-field"
    ],
    "justified_by": [],
    "statement_or_definition": "For C≤F^n, define C⊥={y∈F^n: Σ_i x_i y_i=0 for all x∈C} using the standard bilinear dot product, not a positive or Hermitian inner product.",
    "proof_obligations": [
      "Prove C⊥ is a subspace and dim(C)+dim(C⊥)=n by identifying the annihilator map with the dual-space restriction map."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.1.3, printed pp.292–297; PDF pp.300–305"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.6, printed pp.19–20; PDF pp.25–26"
      }
    ]
  },
  {
    "id": "def-qc-generator-and-parity-check-matrices",
    "kind": "definition",
    "page": "classical-and-quantum-error-correcting-codes",
    "deps": [
      "def-qc-classical-linear-code-over-finite-field",
      "def-qc-dual-of-a-finite-field-linear-code",
      "def-matrix-space",
      "def-matrix-product-and-identity-matrix"
    ],
    "justified_by": [],
    "statement_or_definition": "Fix column vectors: a generator G∈F^{n×k} has full column rank and C=im(G); a parity-check H∈F^{(n−k)×n} has full row rank and C=ker(H). Specify the associated row-space/dual convention.",
    "proof_obligations": [
      "Use rank-nullity to prove existence of H for each C and establish HG=0; state matrix shapes including k=0 and k=n."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.1.3, printed pp.292–297; PDF pp.300–305"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.6, printed pp.19–20; PDF pp.25–26"
      }
    ]
  },
  {
    "id": "def-qc-classical-error-syndrome",
    "kind": "definition",
    "page": "classical-and-quantum-error-correcting-codes",
    "deps": [
      "def-qc-generator-and-parity-check-matrices"
    ],
    "justified_by": [],
    "statement_or_definition": "For received r=c+e with c∈C, define syndrome s(r)=Hr; prove s(r)=He and specify the received-word, error-vector and syndrome domains.",
    "proof_obligations": [
      "Expand H(c+e) and use Hc=0; do not identify syndrome with a decoded error until a decoding rule is specified."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.1.3, printed pp.292–297; PDF pp.300–305"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.6, printed pp.19–20; PDF pp.25–26"
      }
    ]
  },
  {
    "id": "lem-qc-classical-code-distance-disjoint-error-balls",
    "kind": "lemma",
    "page": "classical-and-quantum-error-correcting-codes",
    "deps": [
      "def-qc-hamming-weight-distance-and-linear-code-distance"
    ],
    "justified_by": [],
    "statement_or_definition": "For code distance d, Hamming balls of radius floor((d−1)/2) around distinct codewords are disjoint.",
    "proof_obligations": [
      "Apply the triangle inequality and show an intersection would produce two codewords at distance at most 2 floor((d−1)/2)<d."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.1.3, printed pp.292–297; PDF pp.300–305"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.6, printed pp.19–20; PDF pp.25–26"
      }
    ]
  },
  {
    "id": "lem-qc-equal-syndrome-errors-differ-by-a-codeword",
    "kind": "lemma",
    "page": "classical-and-quantum-error-correcting-codes",
    "deps": [
      "def-qc-classical-error-syndrome",
      "def-qc-hamming-weight-distance-and-linear-code-distance"
    ],
    "justified_by": [],
    "statement_or_definition": "If two errors e,f have the same syndrome, then e−f∈C; if both have weight at most t with 2t<d(C), then e=f.",
    "proof_obligations": [
      "Use H(e−f)=0 and wt(e−f)≤wt(e)+wt(f)<d(C); explicitly use field subtraction, including characteristic two."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.1.3, printed pp.292–297; PDF pp.300–305"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.6, printed pp.19–20; PDF pp.25–26"
      }
    ]
  },
  {
    "id": "thm-qc-classical-distance-correction-and-erasure-radius",
    "kind": "theorem",
    "page": "classical-and-quantum-error-correcting-codes",
    "deps": [
      "lem-qc-classical-code-distance-disjoint-error-balls",
      "lem-qc-equal-syndrome-errors-differ-by-a-codeword",
      "def-qc-classical-error-syndrome"
    ],
    "justified_by": [],
    "statement_or_definition": "A code of minimum distance d uniquely corrects t=floor((d−1)/2) unknown symbol errors and uniquely recovers erasures on any known support S with |S|<d. Distinguish error detection, unique decoding and existence of an algorithm.",
    "proof_obligations": [
      "Prove unique decoding by disjoint balls and unique syndrome for errors of weight ≤t.",
      "For known erasures, show two compatible codewords would differ in a nonzero vector supported on fewer than d coordinates.",
      "Do not claim an efficient decoder unless the syndrome table/search procedure and its cost are stated."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.1.3, printed pp.292–297; PDF pp.300–305"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.6, printed pp.19–20; PDF pp.25–26"
      }
    ]
  },
  {
    "id": "ex-qc-binary-repetition-code-syndrome-table",
    "kind": "example",
    "page": "classical-and-quantum-error-correcting-codes",
    "deps": [
      "def-qc-classical-linear-code-over-finite-field",
      "def-qc-generator-and-parity-check-matrices",
      "def-qc-classical-error-syndrome",
      "thm-qc-classical-distance-correction-and-erasure-radius"
    ],
    "justified_by": [],
    "statement_or_definition": "Compute the [3,1,3]_2 repetition code generator, parity-check matrix, all four single-error-or-no-error syndromes, and the unique correction table.",
    "proof_obligations": [
      "Check the matrix convention by multiplication and verify every single-bit error has a distinct syndrome."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.1.3, printed pp.292–297; PDF pp.300–305"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.6, printed pp.19–20; PDF pp.25–26"
      }
    ]
  },
  {
    "id": "def-qc-quantum-code-isometry-and-code-projector",
    "kind": "definition",
    "page": "classical-and-quantum-error-correcting-codes",
    "deps": [
      "def-real-and-complex-inner-product-space",
      "def-qc-register-and-computational-basis",
      "def-qc-tensor-register-and-permutation",
      "def-linear-map",
      "def-dimension",
      "cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases",
      "def-linear-isometry-and-orthogonal-or-unitary-operator",
      "def-adjoint-of-a-linear-map-between-inner-product-spaces",
      "thm-adjoint-exists-and-is-unique-in-finite-dimension",
      "prop-adjoint-algebra",
      "thm-self-adjoint-idempotents-are-exactly-orthogonal-projections"
    ],
    "justified_by": [],
    "statement_or_definition": "A quantum code is an isometric encoding V:H_L→H_P into a fixed finite register tensor product; its code projector is P=VV*. State logical dimension, physical block length, and the root first-argument-linear inner-product convention.",
    "proof_obligations": [
      "Using linear-first polarization and adjoint uniqueness, prove that norm-preserving V:H_L→H_P satisfies V*V=I; then prove P*=P=P² and identify its range with the code subspace.",
      "State the one-dimensional logical-space and full-space boundary cases."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§36.1, 36.3, 37.3, printed pp.281–303; PDF pp.289–311"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.1, 7.4, 7.7, printed pp.1–2, 13–14, 21–22; PDF pp.7–8, 19–20, 27–28"
      }
    ]
  },
  {
    "id": "def-qc-local-operator-support-and-weight",
    "kind": "definition",
    "page": "classical-and-quantum-error-correcting-codes",
    "deps": [
      "def-qc-quantum-code-isometry-and-code-projector",
      "def-qc-tensor-register-and-permutation",
      "def-adjoint-of-a-linear-map-between-inner-product-spaces"
    ],
    "justified_by": [],
    "statement_or_definition": "For a fixed n-factor register, E is supported in S⊆[n] when E=E_S⊗I_{S^c}; its weight is the least |S| with this property. State the tensor ordering and permit arbitrary finite local factor dimensions.",
    "proof_obligations": [
      "Prove support is independent of a mere rebracketing only through the declared tensor-permutation isomorphism; define weight zero for scalar identities."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§36.1, 36.3, 37.3, printed pp.281–303; PDF pp.289–311"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.1, 7.4, 7.7, printed pp.1–2, 13–14, 21–22; PDF pp.7–8, 19–20, 27–28"
      }
    ]
  },
  {
    "id": "def-qc-quantum-code-distance-and-error-detection",
    "kind": "definition",
    "page": "classical-and-quantum-error-correcting-codes",
    "deps": [
      "def-qc-quantum-code-isometry-and-code-projector",
      "def-qc-local-operator-support-and-weight",
      "def-adjoint-of-a-linear-map-between-inner-product-spaces"
    ],
    "justified_by": [],
    "statement_or_definition": "An operator E is detectable by P iff PEP=λ_E P. Define quantum distance as the least support weight of an operator not satisfying this relation; specify the convention when no nontrivial logical subsystem exists.",
    "proof_obligations": [
      "Prove the condition is linear in the error span and invariant under replacing V by VU for a logical unitary U.",
      "Distinguish known-support erasure errors from unlocated errors."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§36.1, 36.3, 37.3, printed pp.281–303; PDF pp.289–311"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.1, 7.4, 7.7, printed pp.1–2, 13–14, 21–22; PDF pp.7–8, 19–20, 27–28"
      }
    ]
  },
  {
    "id": "thm-qc-quantum-distance-detects-low-weight-errors",
    "kind": "theorem",
    "page": "classical-and-quantum-error-correcting-codes",
    "deps": [
      "def-qc-quantum-code-distance-and-error-detection"
    ],
    "justified_by": [],
    "statement_or_definition": "Every operator of weight strictly below the code distance is detectable; no correction-map conclusion is asserted on this page.",
    "proof_obligations": [
      "Apply the defining minimum to each operator with support smaller than d; defer correction of products E_a*E_b to QC19 KL.",
      "Use this order to avoid a forward dependency from QC18 to QC19."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§36.1, 36.3, 37.3, printed pp.281–303; PDF pp.289–311"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.1, 7.4, 7.7, printed pp.1–2, 13–14, 21–22; PDF pp.7–8, 19–20, 27–28"
      }
    ]
  },
  {
    "id": "def-qc-exact-recovery-of-a-quantum-code",
    "kind": "definition",
    "page": "knill-laflamme-recovery-and-subsystem-codes",
    "deps": [
      "def-qc-quantum-code-isometry-and-code-projector",
      "def-qc-quantum-channel",
      "thm-qc-trace-preserving-kraus-normalization"
    ],
    "justified_by": [],
    "statement_or_definition": "For N(ρ)=Σ_a E_aρE_a*, a code is exactly correctable when a CPTP recovery R satisfies R∘N(VρV*)=VρV* for every logical state ρ; linearity gives the corresponding identity with arbitrary reference systems.",
    "proof_obligations": [
      "Specify the input/output spaces of N and R and use TP Kraus normalization.",
      "Show equality on density matrices extends to all operators and to tensoring by a finite reference identity."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.2, printed pp.5–7; PDF pp.11–13"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/0504189",
        "locator": "§1.2 and Theorems 3.2/3.5, printed pp.1–2, 10–14"
      }
    ]
  },
  {
    "id": "lem-qc-kraus-operators-of-the-identity-channel-are-scalars",
    "kind": "lemma",
    "page": "knill-laflamme-recovery-and-subsystem-codes",
    "deps": [
      "def-qc-quantum-channel"
    ],
    "justified_by": [],
    "statement_or_definition": "If a finite Kraus family {K_j} implements the identity channel on a finite-dimensional space, then each K_j=c_j I.",
    "proof_obligations": [
      "For every unit vector ψ, purity of the identity output forces each K_jψ into span{ψ}; compare two independent vectors and their sum to obtain a common scalar.",
      "Handle dimension one directly."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.2, printed pp.5–7; PDF pp.11–13"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/0504189",
        "locator": "§1.2 and Theorems 3.2/3.5, printed pp.1–2, 10–14"
      }
    ]
  },
  {
    "id": "lem-qc-knill-laflamme-coefficient-matrix-is-positive",
    "kind": "lemma",
    "page": "knill-laflamme-recovery-and-subsystem-codes",
    "deps": [
      "def-qc-quantum-code-isometry-and-code-projector",
      "def-adjoint-of-a-linear-map-between-inner-product-spaces"
    ],
    "justified_by": [],
    "statement_or_definition": "If P E_a*E_b P=C_ab P for a finite error family and nonzero code, then C=(C_ab) is Hermitian positive semidefinite.",
    "proof_obligations": [
      "Test ⟨ψ|(Σ_a z_aE_a)* (Σ_b z_bE_b)|ψ⟩ for a unit code vector ψ; obtain z*Cz≥0 and C_ba=conj(C_ab)."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.2, printed pp.5–7; PDF pp.11–13"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/0504189",
        "locator": "§1.2 and Theorems 3.2/3.5, printed pp.1–2, 10–14"
      }
    ]
  },
  {
    "id": "thm-qc-knill-laflamme-necessity",
    "kind": "theorem",
    "page": "knill-laflamme-recovery-and-subsystem-codes",
    "deps": [
      "def-qc-exact-recovery-of-a-quantum-code",
      "lem-qc-kraus-operators-of-the-identity-channel-are-scalars",
      "thm-qc-trace-preserving-kraus-normalization"
    ],
    "justified_by": [],
    "statement_or_definition": "Exact recovery of N on P is possible only if P E_a*E_b P=C_ab P for all pairs of Kraus errors.",
    "proof_obligations": [
      "Write Kraus operators R_jE_aV for the recovered identity and use the scalar-Kraus lemma to obtain R_jE_aV=c_jaV.",
      "Use Σ_j R_j*R_j=I to derive C_ab=Σ_j conjugate(c_ja)c_jb; state coefficient-index convention."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.2, printed pp.5–7; PDF pp.11–13"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/0504189",
        "locator": "§1.2 and Theorems 3.2/3.5, printed pp.1–2, 10–14"
      }
    ]
  },
  {
    "id": "lem-qc-knill-laflamme-orthogonal-error-basis",
    "kind": "lemma",
    "page": "knill-laflamme-recovery-and-subsystem-codes",
    "deps": [
      "lem-qc-knill-laflamme-coefficient-matrix-is-positive",
      "thm-complex-spectral-theorem-for-normal-endomorphisms"
    ],
    "justified_by": [],
    "statement_or_definition": "A unitary mixing of a finite error family diagonalizes its positive KL matrix; normalized nonzero restrictions to the code are isometries with mutually orthogonal ranges.",
    "proof_obligations": [
      "Check that unitary Kraus mixing leaves the channel unchanged.",
      "For diagonal entries λ_i>0 set U_i=E_iV/√λ_i; prove U_i*U_j=δ_ijI and show zero eigenvalue errors vanish on the code."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.2, printed pp.5–7; PDF pp.11–13"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/0504189",
        "locator": "§1.2 and Theorems 3.2/3.5, printed pp.1–2, 10–14"
      }
    ]
  },
  {
    "id": "lem-qc-orthogonal-error-syndrome-projectors",
    "kind": "lemma",
    "page": "knill-laflamme-recovery-and-subsystem-codes",
    "deps": [
      "lem-qc-knill-laflamme-orthogonal-error-basis",
      "thm-self-adjoint-idempotents-are-exactly-orthogonal-projections"
    ],
    "justified_by": [],
    "statement_or_definition": "The range projections P_i=U_iU_i* for orthogonal normalized error isometries are pairwise orthogonal and sum to a projection dominated by I.",
    "proof_obligations": [
      "Prove P_i*=P_i=P_i^2, P_iP_j=0, and Σ_iP_i≤I; define the residual projection for the recovery complement."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.2, printed pp.5–7; PDF pp.11–13"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/0504189",
        "locator": "§1.2 and Theorems 3.2/3.5, printed pp.1–2, 10–14"
      }
    ]
  },
  {
    "id": "thm-qc-knill-laflamme-explicit-recovery",
    "kind": "theorem",
    "page": "knill-laflamme-recovery-and-subsystem-codes",
    "deps": [
      "lem-qc-orthogonal-error-syndrome-projectors",
      "thm-qc-trace-preserving-kraus-normalization",
      "def-qc-quantum-channel"
    ],
    "justified_by": [],
    "statement_or_definition": "If P E_a*E_b P=C_abP, an explicit syndrome-measure-and-invert CPTP recovery corrects the channel on the code.",
    "proof_obligations": [
      "Diagonalize C, apply U_i* on each syndrome subspace, and map the residual complement to a fixed encoded state.",
      "Prove trace preservation using orthogonal projectors and prove Σ_i λ_i=1 from TP of N.",
      "Verify the recovery on arbitrary logical states and references, including degenerate/zero-on-code errors."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.2, printed pp.5–7; PDF pp.11–13"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/0504189",
        "locator": "§1.2 and Theorems 3.2/3.5, printed pp.1–2, 10–14"
      }
    ]
  },
  {
    "id": "def-qc-correctable-subsystem-and-gauge-factor",
    "kind": "definition",
    "page": "knill-laflamme-recovery-and-subsystem-codes",
    "deps": [
      "def-qc-quantum-code-isometry-and-code-projector"
    ],
    "justified_by": [],
    "statement_or_definition": "A code subsystem is a fixed embedding J:H_G⊗H_L→H_P; L is protected logical data and G is a gauge factor whose final state may change under recovery.",
    "proof_obligations": [
      "Define the embedded projector and the logical marginal/recovery contract for every gauge input state.",
      "Reduce the definition to ordinary subspace correction when dim(H_G)=1."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.2, printed pp.5–7; PDF pp.11–13"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/0504189",
        "locator": "§1.2 and Theorems 3.2/3.5, printed pp.1–2, 10–14"
      }
    ]
  },
  {
    "id": "thm-qc-subsystem-knill-laflamme",
    "kind": "theorem",
    "page": "knill-laflamme-recovery-and-subsystem-codes",
    "deps": [
      "def-qc-correctable-subsystem-and-gauge-factor",
      "def-qc-quantum-channel",
      "thm-qc-knill-laflamme-necessity",
      "thm-qc-knill-laflamme-explicit-recovery"
    ],
    "justified_by": [],
    "statement_or_definition": "The subsystem L is exactly correctable iff P E_a*E_b P=M_ab⊗I_L for operators M_ab on H_G. Equivalently, for matrix units P_kl on the gauge factor, P_kk E_a*E_b P_ll=λ_abkl P_kl.",
    "proof_obligations": [
      "Prove necessity via the recovered logical operator algebra and matrix-unit identities.",
      "For sufficiency, reduce to ordinary KL for restricted Kraus operators, then explicitly re-encode/reset the gauge subsystem.",
      "Keep exact subsystem correction distinct from approximate operator-QEC claims."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.2, printed pp.5–7; PDF pp.11–13"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/0504189",
        "locator": "§1.2 and Theorems 3.2/3.5, printed pp.1–2, 10–14"
      }
    ]
  },
  {
    "id": "cor-qc-distance-corrects-t-errors-and-erasures",
    "kind": "corollary",
    "page": "knill-laflamme-recovery-and-subsystem-codes",
    "deps": [
      "thm-qc-quantum-distance-detects-low-weight-errors",
      "thm-qc-knill-laflamme-explicit-recovery"
    ],
    "justified_by": [],
    "statement_or_definition": "A code of quantum distance d corrects every unknown error family supported on at most t sites when 2t<d, and corrects arbitrary errors on a known erased support S when |S|<d.",
    "proof_obligations": [
      "For unlocated errors, products E_a*E_b have support at most 2t and are detectable by the distance definition.",
      "For known erasures, products of operators supported on the same S remain supported in S."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.2, printed pp.5–7; PDF pp.11–13"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/0504189",
        "locator": "§1.2 and Theorems 3.2/3.5, printed pp.1–2, 10–14"
      }
    ]
  },
  {
    "id": "ex-qc-degenerate-code-kl-matrix",
    "kind": "example",
    "page": "knill-laflamme-recovery-and-subsystem-codes",
    "deps": [
      "thm-qc-knill-laflamme-explicit-recovery"
    ],
    "justified_by": [],
    "statement_or_definition": "Compute a finite code/error family with a non-diagonal or rank-deficient KL matrix and show the unitary error-basis change yields orthogonal syndromes.",
    "proof_obligations": [
      "Give explicit matrices, verify every P E_a*E_b P entry, and show how the recovery handles a degenerate error pair."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.2, printed pp.5–7; PDF pp.11–13"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/0504189",
        "locator": "§1.2 and Theorems 3.2/3.5, printed pp.1–2, 10–14"
      }
    ]
  },
  {
    "id": "def-qc-stabilizer-code-space",
    "kind": "definition",
    "page": "stabilizer-css-codes-syndromes-and-procedures",
    "deps": [
      "def-qc-phase-aware-n-qubit-pauli-group",
      "def-qc-binary-pauli-label-and-quotient",
      "thm-qc-pauli-commutator-is-symplectic-pairing",
      "def-qc-quantum-code-isometry-and-code-projector",
      "def-qc-binary-symplectic-form",
      "thm-qc-hermitian-pauli-phase-criterion"
    ],
    "justified_by": [],
    "statement_or_definition": "For an abelian subgroup S of Hermitian n-qubit Paulis with −I∉S, define the stabilizer code as its common +1 eigenspace.",
    "proof_obligations": [
      "Prove commutativity gives simultaneous eigenspaces and −I exclusion prevents the +1 code from being forced to zero.",
      "Distinguish full Pauli phases from binary labels."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.3, printed pp.292–303; PDF pp.300–311"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.6–7.10, printed pp.19–34; PDF pp.25–40"
      }
    ]
  },
  {
    "id": "thm-qc-stabilizer-projector-and-dimension",
    "kind": "theorem",
    "page": "stabilizer-css-codes-syndromes-and-procedures",
    "deps": [
      "def-qc-stabilizer-code-space",
      "def-trace-of-a-square-matrix",
      "thm-self-adjoint-idempotents-are-exactly-orthogonal-projections",
      "def-qc-pauli-matrices",
      "thm-trace-of-ab-equals-trace-of-ba",
      "cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases",
      "def-dimension"
    ],
    "justified_by": [],
    "statement_or_definition": "For r independent commuting stabilizer generators, P=|S|⁻¹Σ_{g∈S}g is an orthogonal projector of rank 2^{n−r}.",
    "proof_obligations": [
      "Use group multiplication to show P²=P and P*=P.",
      "Use trace-zero of every nonidentity tensor Pauli to compute Tr(P)=2^{n−r}, then identify trace of an orthogonal projection with rank."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.3, printed pp.292–303; PDF pp.300–311"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.6–7.10, printed pp.19–34; PDF pp.25–40"
      }
    ]
  },
  {
    "id": "def-qc-stabilizer-syndrome-and-logical-operators",
    "kind": "definition",
    "page": "stabilizer-css-codes-syndromes-and-procedures",
    "deps": [
      "def-qc-stabilizer-code-space",
      "def-qc-binary-pauli-label-and-quotient",
      "thm-qc-pauli-commutator-is-symplectic-pairing",
      "def-qc-binary-symplectic-form"
    ],
    "justified_by": [],
    "statement_or_definition": "For ordered commuting generators g_j, define error syndrome bit j by whether E commutes or anticommutes with g_j; define logical Pauli operators as elements of N(S)S.",
    "proof_obligations": [
      "Fix the sign-to-bit convention and prove the syndrome depends only on the Pauli coset modulo scalar phase.",
      "Distinguish a stabilizer error, which is logically trivial, from a nontrivial normalizer element."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.3, printed pp.292–303; PDF pp.300–311"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.6–7.10, printed pp.19–34; PDF pp.25–40"
      }
    ]
  },
  {
    "id": "def-qc-stabilizer-distance",
    "kind": "definition",
    "page": "stabilizer-css-codes-syndromes-and-procedures",
    "deps": [
      "def-qc-stabilizer-syndrome-and-logical-operators",
      "def-qc-local-operator-support-and-weight"
    ],
    "justified_by": [],
    "statement_or_definition": "Define stabilizer-code distance as min Pauli weight of an element of N(S)S.",
    "proof_obligations": [
      "Show the set is nonempty for a code with a nontrivial protected subsystem; state a convention for k=0."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.3, printed pp.292–303; PDF pp.300–311"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.6–7.10, printed pp.19–34; PDF pp.25–40"
      }
    ]
  },
  {
    "id": "thm-qc-stabilizer-distance-detection-and-correction",
    "kind": "theorem",
    "page": "stabilizer-css-codes-syndromes-and-procedures",
    "deps": [
      "def-qc-stabilizer-distance",
      "thm-qc-knill-laflamme-explicit-recovery"
    ],
    "justified_by": [],
    "statement_or_definition": "A stabilizer code of distance d detects Pauli errors of weight <d and corrects unknown Pauli errors of weight at most t when 2t<d.",
    "proof_obligations": [
      "Use syndrome equality to show E_a*E_b lies in the normalizer; if its weight is <d it is in S and acts as a scalar on the code.",
      "Apply the KL recovery theorem, retaining degeneracy when E_a*E_b is a nonidentity stabilizer."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.3, printed pp.292–303; PDF pp.300–311"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.6–7.10, printed pp.19–34; PDF pp.25–40"
      }
    ]
  },
  {
    "id": "def-qc-css-code-from-nested-binary-codes",
    "kind": "definition",
    "page": "stabilizer-css-codes-syndromes-and-procedures",
    "deps": [
      "def-qc-classical-linear-code-over-finite-field",
      "def-qc-dual-of-a-finite-field-linear-code"
    ],
    "justified_by": [],
    "statement_or_definition": "For C₂⊊C₁≤F₂ⁿ with C₂⊥⊆C₁, define logical basis states |x+C₂⟩=|C₂|⁻¹/²Σ_{c∈C₂}|x+c⟩ for cosets x∈C₁/C₂.",
    "proof_obligations": [
      "State the standard binary bilinear dot product; prove coset representatives give the same vector.",
      "Define the logical dimension k=dim(C₁)−dim(C₂) and show there are 2^k orthogonal coset states."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.3, printed pp.292–303; PDF pp.300–311"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.6–7.10, printed pp.19–34; PDF pp.25–40"
      }
    ]
  },
  {
    "id": "thm-qc-css-encoding-dimension-and-commutation",
    "kind": "theorem",
    "page": "stabilizer-css-codes-syndromes-and-procedures",
    "deps": [
      "def-qc-css-code-from-nested-binary-codes",
      "def-qc-pauli-matrices",
      "def-qc-phase-aware-n-qubit-pauli-group",
      "def-qc-binary-pauli-label-and-quotient",
      "def-qc-binary-symplectic-form",
      "thm-qc-pauli-commutator-is-symplectic-pairing"
    ],
    "justified_by": [],
    "statement_or_definition": "The CSS coset encoding is an isometry of k logical qubits; X^c for c∈C₂ and Z^h for h∈C₁⊥ commute and stabilize the encoded states.",
    "proof_obligations": [
      "Prove orthogonality by disjoint cosets and normalization by |C₂|.",
      "Prove commutation by c·h=0 and verify both generator families fix every coset state.",
      "Use the Hadamard/Fourier identity for subspace superpositions to obtain the dual-basis CSS encoding."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.3, printed pp.292–303; PDF pp.300–311"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.6–7.10, printed pp.19–34; PDF pp.25–40"
      }
    ]
  },
  {
    "id": "thm-qc-css-syndrome-correction",
    "kind": "theorem",
    "page": "stabilizer-css-codes-syndromes-and-procedures",
    "deps": [
      "thm-qc-css-encoding-dimension-and-commutation",
      "thm-qc-classical-distance-correction-and-erasure-radius",
      "thm-qc-knill-laflamme-explicit-recovery"
    ],
    "justified_by": [],
    "statement_or_definition": "Separate parity-check syndromes correct X-type and Z-type errors; Y=iXZ is corrected by the two component recoveries under the stated nested-code distance condition.",
    "proof_obligations": [
      "Derive each syndrome circuit’s ancilla output on a basis state and prove the syndrome is independent of the encoded logical label.",
      "Prove the X and Z corrections preserve code superpositions, then handle products and degeneracy using KL."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.3, printed pp.292–303; PDF pp.300–311"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.6–7.10, printed pp.19–34; PDF pp.25–40"
      }
    ]
  },
  {
    "id": "alg-qc-stabilizer-encoder-by-symplectic-elimination",
    "kind": "algorithm",
    "page": "stabilizer-css-codes-syndromes-and-procedures",
    "deps": [
      "def-qc-stabilizer-code-space",
      "def-qc-binary-pauli-label-and-quotient",
      "thm-qc-pauli-commutator-is-symplectic-pairing",
      "def-qc-binary-symplectic-form",
      "def-qc-pauli-matrices",
      "def-qc-one-qubit-gate-alphabet-and-rotations",
      "def-qc-circuit-syntax-and-register-order",
      "def-qc-circuit-denotational-semantics",
      "thm-qc-pauli-product-and-adjoint",
      "thm-qc-hermitian-pauli-phase-criterion",
      "def-qc-phase-aware-n-qubit-pauli-group",
      "lem-qc-hadamard-pauli-action",
      "lem-qc-phase-gate-pauli-action",
      "lem-qc-cnot-pauli-action"
    ],
    "justified_by": [],
    "statement_or_definition": "Input an ordered independent commuting stabilizer generator matrix; output a finite Clifford circuit reducing its isotropic row space to canonical Z-check form, plus a logical basis convention.",
    "proof_obligations": [
      "Give a terminating row/column elimination algorithm with exact H/S/CNOT/SWAP updates and phase tracking.",
      "For every branch, preserve commutation and row-space invariants; bound gate count and workspace."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.3, printed pp.292–303; PDF pp.300–311"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.6–7.10, printed pp.19–34; PDF pp.25–40"
      }
    ]
  },
  {
    "id": "thm-qc-stabilizer-encoder-correctness",
    "kind": "theorem",
    "page": "stabilizer-css-codes-syndromes-and-procedures",
    "deps": [
      "alg-qc-stabilizer-encoder-by-symplectic-elimination",
      "thm-qc-stabilizer-projector-and-dimension"
    ],
    "justified_by": [],
    "statement_or_definition": "The encoder from symplectic elimination maps each logical computational basis vector to the specified stabilizer code basis and conjugates canonical Z checks to the input generators.",
    "proof_obligations": [
      "Prove correctness by reversing each Clifford row/column step and checking the stabilizer eigenvalue equations.",
      "Prove the output basis is orthonormal and spans the rank-2^k code space."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.3, printed pp.292–303; PDF pp.300–311"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.6–7.10, printed pp.19–34; PDF pp.25–40"
      }
    ]
  },
  {
    "id": "ex-qc-steane-seven-qubit-css-code",
    "kind": "example",
    "page": "stabilizer-css-codes-syndromes-and-procedures",
    "deps": [
      "thm-qc-css-syndrome-correction",
      "thm-qc-stabilizer-projector-and-dimension"
    ],
    "justified_by": [],
    "statement_or_definition": "Give explicit generator/check matrices for the Steane [[7,1,3]] code, the encoded coset states, independent stabilizers, logical X/Z, and all single-qubit syndromes.",
    "proof_obligations": [
      "Compute commutation, rank, distance, code dimension and correction of each X/Y/Z single-site error from the displayed matrices."
    ],
    "sources": [
      {
        "url": "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf",
        "locator": "§§37.1–37.3, printed pp.292–303; PDF pp.300–311"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.6–7.10, printed pp.19–34; PDF pp.25–40"
      }
    ]
  },
  {
    "id": "def-qc-noise-channel-model",
    "kind": "definition",
    "page": "noise-fault-tolerance-concatenation-and-thresholds",
    "deps": [
      "def-qc-quantum-channel",
      "def-qc-circuit-syntax-and-register-order",
      "def-finite-probability-space-and-event",
      "def-independent-families-of-event-classes"
    ],
    "justified_by": [],
    "statement_or_definition": "Each declared gate, preparation, measurement/reset and idle-time location independently faults with probability η; a fault replaces that one location by an arbitrary CPTP map on its declared support. Fault maps may be chosen adversarially, but are local to their locations.",
    "proof_obligations": [
      "Define the finite location set and product Bernoulli law, including idle locations and ancillas.",
      "Prove the model composes with the denotational circuit semantics; do not silently allow joint cross-location fault maps.",
      "Treat local-stochastic correlated noise as a separate theorem with a separate proof."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9611025",
        "locator": "§4.1 and Appendix C, printed pp.8–11; PDF pp.8–15"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf",
        "locator": "2011 handwritten notes, pp.4–8 and 16–25; all 25 pages visually inspected"
      }
    ]
  },
  {
    "id": "def-qc-fault-location-path-and-rectangle",
    "kind": "definition",
    "page": "noise-fault-tolerance-concatenation-and-thresholds",
    "deps": [
      "def-qc-noise-channel-model",
      "def-qc-circuit-denotational-semantics"
    ],
    "justified_by": [],
    "statement_or_definition": "Define elementary fault locations, a fault path as a subset of those locations, and level-r rectangles as the recursively nested location sets generated by one lower-level circuit operation.",
    "proof_obligations": [
      "Specify disjointness/overlap rules for parallel gates, idle wires and extended rectangles.",
      "Bound by a the number of lower rectangles or elementary locations in every gadget."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9611025",
        "locator": "§4.1 and Appendix C, printed pp.8–11; PDF pp.8–15"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf",
        "locator": "2011 handwritten notes, pp.4–8 and 16–25; all 25 pages visually inspected"
      }
    ]
  },
  {
    "id": "def-qc-code-deviation-and-spread",
    "kind": "definition",
    "page": "noise-fault-tolerance-concatenation-and-thresholds",
    "deps": [
      "def-qc-local-operator-support-and-weight",
      "def-qc-exact-recovery-of-a-quantum-code"
    ],
    "justified_by": [],
    "statement_or_definition": "A block is s-deviated when its state differs from the target codeword only on a declared support of at most s coordinates; a procedure has spread ℓ when one fault affects at most ℓ output coordinates per block.",
    "proof_obligations": [
      "Formalize equality of reduced states outside support and ensure reference systems are retained.",
      "Prove composition bounds for supports under each gate gadget."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9611025",
        "locator": "§4.1 and Appendix C, printed pp.8–11; PDF pp.8–15"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf",
        "locator": "2011 handwritten notes, pp.4–8 and 16–25; all 25 pages visually inspected"
      }
    ]
  },
  {
    "id": "def-qc-ft-gadget-and-proper-code-contract",
    "kind": "definition",
    "page": "noise-fault-tolerance-concatenation-and-thresholds",
    "deps": [
      "def-qc-code-deviation-and-spread",
      "def-qc-circuit-denotational-semantics",
      "thm-qc-knill-laflamme-explicit-recovery",
      "thm-qc-stabilizer-distance-detection-and-correction"
    ],
    "justified_by": [],
    "statement_or_definition": "A proper FT code has fixed block size, a finite universal logical gate set, and constant-size/depth encoder, EC, initialization, readout and gate gadgets closed under recursive replacement; EC maps arbitrary states to code states. Each gadget declares its ideal action, input/output code contract, fault locations, spread and location bound a.",
    "proof_obligations": [
      "State all correctness conditions for zero-fault, one-fault and sparse multi-fault subrectangles.",
      "Include verified ancillas, syndrome measurements, classical processing, reset/readout and idle locations in the location count.",
      "Prove every replacement gadget uses only the same recursively closed gate alphabet."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9611025",
        "locator": "§4.1 and Appendix C, printed pp.8–11; PDF pp.8–15"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf",
        "locator": "2011 handwritten notes, pp.4–8 and 16–25; all 25 pages visually inspected"
      }
    ]
  },
  {
    "id": "def-qc-level-r-good-and-bad-rectangles",
    "kind": "definition",
    "page": "noise-fault-tolerance-concatenation-and-thresholds",
    "deps": [
      "def-qc-fault-location-path-and-rectangle",
      "def-qc-ft-gadget-and-proper-code-contract"
    ],
    "justified_by": [],
    "statement_or_definition": "For an integer q≥1, a level-r rectangle is q-good when its lower-level fault pattern is recursively q-sparse and its gadget contract guarantees ideal logical action; otherwise it is bad.",
    "proof_obligations": [
      "Define base level explicitly and align good/bad predicates with the deviation and correction contract.",
      "Prove a parent is q-good if at most q children are bad only under the stated spread/correctability inequalities."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9611025",
        "locator": "§4.1 and Appendix C, printed pp.8–11; PDF pp.8–15"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf",
        "locator": "2011 handwritten notes, pp.4–8 and 16–25; all 25 pages visually inspected"
      }
    ]
  },
  {
    "id": "lem-qc-sparse-fault-path-implies-code-deviation",
    "kind": "lemma",
    "page": "noise-fault-tolerance-concatenation-and-thresholds",
    "deps": [
      "def-qc-code-deviation-and-spread",
      "def-qc-level-r-good-and-bad-rectangles"
    ],
    "justified_by": [],
    "statement_or_definition": "If the code corrects d located errors, has spread ℓ, and 2qℓ≤d, then a q-sparse fault path leaves each block at most d-deviated after the correction stage.",
    "proof_obligations": [
      "Induct over computation and correction stages, including faults in the correction gadget itself.",
      "At level r prove the three source obligations: computation stage adds at most qℓ deviations; correction restores the codeword class; correction maps arbitrary states to code states.",
      "Keep any hidden measurement/ancilla branch in the channel semantics."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9611025",
        "locator": "§4.1 and Appendix C, printed pp.8–11; PDF pp.8–15"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf",
        "locator": "2011 handwritten notes, pp.4–8 and 16–25; all 25 pages visually inspected"
      }
    ]
  },
  {
    "id": "lem-qc-recursive-bad-rectangle-probability",
    "kind": "lemma",
    "page": "noise-fault-tolerance-concatenation-and-thresholds",
    "deps": [
      "def-qc-noise-channel-model",
      "def-qc-level-r-good-and-bad-rectangles"
    ],
    "justified_by": [],
    "statement_or_definition": "If each level-(r+1) rectangle contains at most a level-r subrectangles and badness requires q+1 bad children, then p₀=η and pᵣ₊₁≤A pᵣ^(q+1), with A=choose(a,q+1).",
    "proof_obligations": [
      "For independent local faults, use disjoint child rectangles and a union bound over subsets of q+1 children.",
      "Prove the closed form pᵣ≤A^(−1/q)(A^(1/q)η)^((q+1)^r) when Aη^q<1."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9611025",
        "locator": "§4.1 and Appendix C, printed pp.8–11; PDF pp.8–15"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf",
        "locator": "2011 handwritten notes, pp.4–8 and 16–25; all 25 pages visually inspected"
      }
    ]
  },
  {
    "id": "thm-qc-proper-code-concatenated-threshold",
    "kind": "theorem",
    "page": "noise-fault-tolerance-concatenation-and-thresholds",
    "deps": [
      "def-qc-ft-gadget-and-proper-code-contract",
      "def-qc-level-r-good-and-bad-rectangles",
      "lem-qc-sparse-fault-path-implies-code-deviation",
      "lem-qc-recursive-bad-rectangle-probability",
      "def-qc-circuit-denotational-semantics"
    ],
    "justified_by": [],
    "statement_or_definition": "Conditional on a proper code correcting d located errors, block size m≥2d+1, spread ℓ, procedure bound a, and q=floor(d/(2ℓ))≥1, let A=choose(a,q+1). Under independent local CPTP faults with Aη^q<1, level-r logical failure is at most A^(−1/q)(A^(1/q)η)^((q+1)^r); N output rectangles fail with probability at most N times this bound.",
    "proof_obligations": [
      "Give complete finite-dimensional rectangle induction and prove the stated hypothesis 2qℓ≤d suffices at every concatenation level.",
      "Prove that all-good top-level gadgets reproduce the ideal output law; state output total-variation error and success-probability transfer.",
      "Choose r as the least level giving Npᵣ≤δ and derive polylogarithmic size/depth overhead with constants depending on the fixed code/gadgets.",
      "This theorem is conditional; do not infer a universal threshold until a concrete proper universal code is proved."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9611025",
        "locator": "§4.1 and Appendix C, printed pp.8–11; PDF pp.8–15"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf",
        "locator": "2011 handwritten notes, pp.4–8 and 16–25; all 25 pages visually inspected"
      }
    ]
  },
  {
    "id": "thm-qc-t1-extended-rectangle-threshold",
    "kind": "theorem",
    "page": "noise-fault-tolerance-concatenation-and-thresholds",
    "deps": [
      "def-qc-ft-gadget-and-proper-code-contract",
      "def-qc-level-r-good-and-bad-rectangles",
      "def-qc-noise-channel-model"
    ],
    "justified_by": [],
    "statement_or_definition": "For a fully proved distance-3/t=1 extended-rectangle gadget family, if a bad extended rectangle requires at least two faults among at most b locations, then A₁=choose(b,2), pᵣ₊₁≤A₁pᵣ², threshold η<1/A₁, and pᵣ≤A₁⁻¹(A₁η)^(2ʳ).",
    "proof_obligations": [
      "Prove the base exRec correctness theorem and the overlapping-exRec handling for every gate, idle, preparation, syndrome, measurement and readout gadget.",
      "Prove a bad higher-level exRec requires two bad lower exRecs; state exact b and count ancilla verification and classical control locations.",
      "Preskill’s note supplies t=1 memory gadgets and Aharonov–Ben-Or only sketches the d=1 branch; this full-circuit theorem is an explicit AUTHORING obligation."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9611025",
        "locator": "§4.1 and Appendix C, printed pp.8–11; PDF pp.8–15"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf",
        "locator": "2011 handwritten notes, pp.4–8 and 16–25; all 25 pages visually inspected"
      }
    ]
  },
  {
    "id": "thm-qc-explicit-proper-code-and-universal-gadgets",
    "kind": "theorem",
    "page": "noise-fault-tolerance-concatenation-and-thresholds",
    "deps": [
      "def-qc-ft-gadget-and-proper-code-contract",
      "thm-qc-css-syndrome-correction",
      "def-qc-circuit-denotational-semantics",
      "def-qc-pauli-matrices",
      "alg-qc-stabilizer-encoder-by-symplectic-elimination"
    ],
    "justified_by": [],
    "statement_or_definition": "An explicit fixed code and finite universal logical gate set satisfy the proper-code hypotheses used by the concatenated threshold theorem. A Steane t=1 route must be paired with the separately proved extended-rectangle branch; the d≥2ℓ theorem requires a code correcting at least 2ℓ located errors.",
    "proof_obligations": [
      "Prove correction and reference preservation for the chosen base code from QC19/QC20.",
      "Give fault-tolerant initialization, verified EC, logical gate, syndrome/measurement, readout and magic-state or alternative universality gadgets.",
      "Prove spread, exact location/depth bound, recursive gate-set closure, and all zero/one-fault propagation contracts.",
      "Aharonov–Ben-Or gives a blueprint but cites external gate constructions; Preskill’s handwritten t=1 gadgets are not by themselves a full threshold proof. This is mandatory AUTHORING, not an open problem."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9611025",
        "locator": "§4.1 and Appendix C, printed pp.8–11; PDF pp.8–15"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf",
        "locator": "2011 handwritten notes, pp.4–8 and 16–25; all 25 pages visually inspected"
      }
    ]
  },
  {
    "id": "thm-qc-planar-surface-code-iid-z-memory-bound",
    "kind": "theorem",
    "page": "noise-fault-tolerance-concatenation-and-thresholds",
    "deps": [
      "def-qc-css-code-from-nested-binary-codes",
      "def-qc-stabilizer-syndrome-and-logical-operators",
      "def-qc-stabilizer-distance",
      "def-finite-probability-space-and-event",
      "thm-qc-square-planar-surface-code-distance-and-path-count"
    ],
    "justified_by": [],
    "statement_or_definition": "For a square planar surface code of distance d and n=O(d²) data qubits, iid Z errors of rate ε, perfect syndrome extraction and minimum-weight recovery satisfy P_logical≤d Σ_{ℓ=d}^n(36ε)^(ℓ/2), hence exponential decay for ε<1/36 up to a polynomial prefactor.",
    "proof_obligations": [
      "Define the planar chain/CSS code and logical-failure path mathematically without topological-order or anyon postulates.",
      "Prove every failure path of length ℓ≥d contains at least ℓ/2 actual error edges; count paths by Nℓ≤d·3^ℓ and union bound over ≤2^ℓ edge-error subsets.",
      "State the iid-Z, one-memory-round, perfect-syndrome, minimum-weight-decoder hypotheses; this does not prove circuit-level gate threshold."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§7.18.5, printed pp.56–58; PDF pp.62–64"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf",
        "locator": "toric-code recovery, handwritten pp.1–3; all pages visually inspected"
      }
    ]
  },
  {
    "id": "def-qc-square-planar-surface-code",
    "kind": "definition",
    "page": "stabilizer-css-codes-syndromes-and-procedures",
    "deps": [
      "def-qc-stabilizer-code-space",
      "def-qc-css-code-from-nested-binary-codes",
      "def-qc-register-and-computational-basis"
    ],
    "justified_by": [],
    "statement_or_definition": "Define a finite family of square planar surface-code patches as CSS stabilizer codes on an explicitly ordered square cellulation, with qubits on edges, declared rough/smooth boundary checks, and logical strings connecting opposite compatible boundaries. State the number of data qubits n=O(d²) and the candidate distance parameter d as part of the family data.",
    "proof_obligations": [
      "Specify every boundary check and prove all X/Z checks commute over F₂.",
      "Prove the chain-complex inclusion condition and identify nontrivial logical strings; do not invoke topological order or anyon postulates."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.18.1–7.18.4, printed pp.51–56; PDF pp.57–62"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf",
        "locator": "toric-code recovery, handwritten pp.1–3; all pages visually inspected"
      }
    ]
  },
  {
    "id": "thm-qc-square-planar-surface-code-distance-and-path-count",
    "kind": "theorem",
    "page": "stabilizer-css-codes-syndromes-and-procedures",
    "deps": [
      "def-qc-square-planar-surface-code",
      "def-qc-stabilizer-distance"
    ],
    "justified_by": [],
    "statement_or_definition": "For the declared square planar patch, prove one logical qubit, distance d, minimum failing logical path length d, and the path count N_ell≤d·3^ell for paths of length ell crossing the patch.",
    "proof_obligations": [
      "Compute stabilizer rank and encoded dimension from the boundary-check matrices.",
      "Prove the minimum nontrivial logical string length is d for both primal/dual types.",
      "Count possible crossing paths by d starting edges and at most three continuations per step."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf",
        "locator": "§§7.18.1–7.18.5, printed pp.51–58; PDF pp.57–64"
      }
    ]
  }
]
```

## Inherited-root-remark-repair-plan

```json
{
  "plan_id": "Inherited-root-remark-repair-plan",
  "scope": {
    "edge_registry": "research/quantum-planning-review/inherited-remark-edges.json",
    "root_prerequisite_closure": "research/quantum-planning-review/root-prerequisite-closure.json",
    "edge_registry_scope": "Only inherited root logical consumers in the two commissioned proposals prerequisite closure; no source changes",
    "closure_membership_verified": true,
    "target_direct_nonremark_consumer_count": 1,
    "target_direct_nonremark_consumer_ids": [
      "thm-arithmetic-and-lattice-operations-preserve-measurability"
    ],
    "scope_note": "Only the direct consumer named in the edge registry and confirmed in the closure was read as a consumer. Other textual hits were not audited as consumers."
  },
  "target_remark": {
    "id": "rem-zero-times-infinity-convention-for-pointwise-products",
    "path": "items/rem-zero-times-infinity-convention-for-pointwise-products.md",
    "raw_sha256": "cff1a720dc4a1b3c82af8b57a60533886c66598e839774bf92ff5af270e2cf94",
    "current_kind": "remark",
    "current_deps": [
      "def-extended-reals"
    ],
    "decision": "Supersede the remark as a logical supplier by a typed definition. The old item currently contains the actual pointwise-product convention but is only a remark.",
    "proposed_replacement_definition": {
      "id": "def-measurable-pointwise-extended-real-product",
      "kind": "definition",
      "deps": [
        "def-extended-reals",
        "def-extended-real-valued-measurable-function"
      ],
      "type": "For each measurable space (X,A), define a function-level operation ⊙_X : Meas(X,Rbar) × Meas(X,Rbar) → Rbar^X. Its codomain is all extended-real-valued functions, not a claim that the output is measurable.",
      "pointwise_value_cases": [
        "For x∈X, set (f⊙_X g)(x)=0 if f(x)=0 or g(x)=0. This includes each of 0·(+∞), 0·(−∞), (+∞)·0, and (−∞)·0.",
        "If both values are finite real numbers, set (f⊙_X g)(x)=f(x)g(x) using the real field product.",
        "Otherwise both values are nonzero and at least one is infinite: return +∞ when their signs agree and −∞ when their signs differ, with sign(+∞)=+ and sign(−∞)=−."
      ],
      "separation_from_existing_arithmetic": "This is a total operation on measurable-function inputs, written with distinct ⊙_X notation. It does not define or change a scalar multiplication on Rbar, and does not change the partial product ab of def-extended-reals, which remains undefined when one factor is zero and the other is ±∞. It is a formula convention, not a rule for limits and not a field operation.",
      "remaining_undefined_operations": "The existing pointwise sum f+g remains partial at (+∞,−∞) and (−∞,+∞); statements using it require pointwise definedness. No subtraction, division, exponentiation, or absolute-value operation on Rbar is added. Write a defined difference as u+(-v) only after proving that partial addition is defined.",
      "sources_to_carry_forward": [
        {
          "title": "Sheldon Axler, Measure, Integration and Real Analysis, Section 2B",
          "url": "https://measure.axler.net/MIRA.pdf",
          "locator": "Section 2B, cited by the existing remark for the pointwise product convention"
        },
        {
          "title": "John K. Hunter, Measure Theory, Definition 3.3",
          "url": "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf",
          "locator": "Definition 3.3, cited by the existing remark for the pointwise product convention"
        }
      ],
      "well_definedness_obligations": [
        "Prove the zero, finite-finite, and nonzero-with-an-infinite-factor cases are exhaustive and disjoint, so ⊙_X assigns exactly one value in Rbar at every x.",
        "Check symmetry, agreement with the ordinary real product on finite values, agreement with the existing partial product wherever that product is defined, and all four zero-infinity conventions explicitly.",
        "Do not invoke distributivity, cancellation, or a field law at infinite values; any product identity used by the measurability proof must be verified by a finite sign/zero case analysis."
      ]
    }
  },
  "direct_nonremark_consumer_repairs": [
    {
      "id": "thm-arithmetic-and-lattice-operations-preserve-measurability",
      "path": "items/thm-arithmetic-and-lattice-operations-preserve-measurability.md",
      "status": "published",
      "raw_sha256": "fd01ec08e512ad1ac35c89eb84839ed87d6d32c26c0eef61fbda8c848efdfaaf",
      "edge_registry_sha256_matches_current_file": true,
      "current_deps": [
        "def-positive-and-negative-parts-of-a-function",
        "rem-zero-times-infinity-convention-for-pointwise-products",
        "thm-threshold-characterisations-of-real-and-extended-real-measurability"
      ],
      "exact_proposed_replacement_deps": [
        "def-extended-reals",
        "def-extended-real-valued-measurable-function",
        "def-positive-and-negative-parts-of-a-function",
        "def-measurable-pointwise-extended-real-product",
        "thm-threshold-characterisations-of-real-and-extended-real-measurability"
      ],
      "definitions_facts_and_proof_uses": [
        {
          "location": "Statement item 1; proof 1.1",
          "use": "Scalar multiple cf, including c=0 and f=±∞; define it as the pointwise product of the constant function c with f, using ⊙_X."
        },
        {
          "location": "Statement item 2; proof 2.1",
          "use": "The statement includes |f|, while def-extended-reals explicitly declares no absolute-value operation. Replace |f| with max(f,−f), which is the order expression the proof already derives. The max/min and f± claims remain."
        },
        {
          "location": "Statement item 3; proof 3.1",
          "use": "f+g uses the existing partial extended-real addition. Preserve the hypothesis that the sum is pointwise defined; this excludes opposite-infinity summands at every x."
        },
        {
          "location": "Statement item 4; Facts & Assumptions A1",
          "use": "fg and the zero-infinity convention; link the new typed definition and write f⊙_X g."
        },
        {
          "location": "Proof 4.1",
          "use": "uv for nonnegative measurable u,v; replace by u⊙_X v and prove the threshold-set formula for this operation."
        },
        {
          "location": "Proof 5.1",
          "use": "The four sign products and h±; use ⊙_X for each product, then set h+=... and h−=... with the existing partial addition."
        },
        {
          "location": "Proof 5.1 final reconstruction",
          "use": "Replace h+−h− by h++(−h−). Prove this sum is defined because at least one of h+,h− is zero, and prove it equals f⊙_X g by sign/zero cases, including infinite magnitudes; do not cite an unqualified ‘usual sign decomposition’."
        }
      ],
      "hypotheses_to_state_or_preserve": [
        "(X,A) is a measurable space and f,g:X→Rbar are measurable.",
        "The sum f+g claim is conditional on f(x)+g(x) being defined for every x.",
        "For the nonnegative product threshold identity, u,v are measurable into [0,+∞] and each threshold a is real; split a<0 from a≥0.",
        "The four positive/negative-part products are pointwise defined by ⊙_X; the final signed sum uses only the already-defined partial extended-real addition."
      ],
      "measurability_supplier_proof_obligations": [
        "For a<0 prove {u⊙_X v>a}=X. For a≥0 prove {u⊙_X v>a}=⋃_{q∈Q,q>0}({u>q}∩{v>a/q}); verify both inclusions at u=0, v=0, u=+∞, v=+∞, and a=0 as well as finite positive values.",
        "Use threshold measurability for f± and the four nonnegative products. Prove each h± is measurable by the defined-sum part of the theorem.",
        "Prove at each x that at most one of h+(x),h−(x) is nonzero, so h++(−h−) is defined; verify equality to the typed pointwise product by the sign/zero table rather than distributivity over Rbar.",
        "Then apply the existing partial-sum measurability result to h++(−h−) and conclude the pointwise product is measurable."
      ],
      "consumer_checks_before_release": [
        "Remove every logical dependency and body link to rem-zero-times-infinity-convention-for-pointwise-products; only the new definition should supply the convention.",
        "Confirm all occurrences of cf, uv, the four f±g± terms, and fg in the product proof use the typed pointwise operation; retain real field products only for finite thresholds and finite real values.",
        "Confirm no absolute value or subtraction remains unless separately defined; addition with opposite infinities remains excluded by an explicit hypothesis or the pointwise zero-side argument.",
        "Recompute the targeted direct-edge record after the proposed edits; keep this closure hold until the definition, dependency update, proof, and supporting positive/negative-parts context edit are verified."
      ],
      "body_link_replacements": [
        {
          "location": "Statement item 4",
          "old": "[[rem-zero-times-infinity-convention-for-pointwise-products]]",
          "new": "[[def-measurable-pointwise-extended-real-product]]"
        },
        {
          "location": "Facts & Assumptions A1",
          "old": "Unlinked page convention sentence; it records 0·(±∞)=0",
          "new": "State that ⊙_X is the function-level operation from [[def-measurable-pointwise-extended-real-product]] and spell out all four zero-infinity cases"
        }
      ],
      "body_expression_replacements": [
        {
          "location": "Statement item 1 and proof 1.1",
          "old": "cf",
          "new": "the pointwise product of the constant function c with f, written c̲⊙_X f"
        },
        {
          "location": "Statement item 2 and proof 2.1",
          "old": "|f|",
          "new": "max(f,−f)"
        },
        {
          "location": "Statement item 4",
          "old": "fg",
          "new": "f⊙_X g"
        },
        {
          "location": "Proof 4.1",
          "old": "uv and {uv>a}",
          "new": "u⊙_X v and its threshold set"
        },
        {
          "location": "Proof 5.1",
          "old": "f+g+ and f−g− products, h+−h−",
          "new": "all four ⊙_X products and h++(−h−) using partial addition"
        }
      ]
    }
  ],
  "supporting_prerequisite_context_repairs_not_additional_direct_remark_edges": [
    {
      "id": "def-positive-and-negative-parts-of-a-function",
      "path": "items/def-positive-and-negative-parts-of-a-function.md",
      "raw_sha256": "4613420fd8eb37dcd396887894c0a85531f503f511c60f2b09f20e7e0a11d8ee",
      "current_deps": [
        "def-extended-reals"
      ],
      "direct_remark_edge": false,
      "reason": "The audited theorem uses this definition's formulas for f±. The current body also writes f=f+−f− and |f|=f++f−, but def-extended-reals says subtraction and absolute value are not defined on Rbar.",
      "proposed_body_edit": "Keep f+=max(f,0) and f−=max(−f,0); state f=f++(−f−) and prove this defined partial sum by finite, +∞, −∞, and zero cases, using that at least one summand is zero. Remove the |f| identity rather than introducing an absolute-value operator; the audited measurability theorem states max(f,−f) instead. Preserve the existing dependency on def-extended-reals.",
      "proof_and_context_obligations": [
        "Check every case uses only reflection, order maximum, and defined partial addition.",
        "Do not infer subtraction or absolute value from real-field notation on Rbar.",
        "No transitive consumers of this support definition were read or audited under the scoped instruction; this is a prerequisite body repair, not an additional inherited-remark consumer."
      ]
    }
  ],
  "release_status": "Planning proposal only. Do not change root items or release the currently held prerequisite closure from this report."
}
```
