## Quantum Algorithms

Completed visual review of **720 items across 74 pages**, with **1119 image tiles**. Findings: 16 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/quantum-algorithms/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/quantum-algorithms/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/quantum-algorithms/category-review-receipt.json).

### Confirmed rendering defects

#### quantum-algorithms / confirmed 001: `def-qa-16-nonnegative-adversary-bound`

- Location: **Definition**; source lines 34.
- Pages: `adversary-methods-and-quantum-query-complexity`.
- Visible defect: In the rendered definition, the two-row constraint set beneath max collides visually with the fraction immediately following it. The matrix conditions and denominator are crowded together and difficult to parse in the standalone original tile.
- Future repair: Give the feasible-set constraints a more compact aligned presentation or move the constraints to a separate line before the ratio, then inspect the rendered definition at original size.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-16-nonnegative-adversary-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-16-nonnegative-adversary-bound.md).

Exact frozen source lines:

```text
34: $$\operatorname{Adv}(f):= \max_{\substack{\Gamma=\Gamma^{\mathsf T}\in\mathbb R^{D\times D},\ \Gamma\ne0,\ \Gamma\circ F=0\\ \Gamma_{xy}\ge0\ \forall x,y}} \frac{\|\Gamma\|}{\max_i\|\Gamma\circ\Delta_i\|}.$$
```

#### quantum-algorithms / confirmed 002: `def-qa-16-nonnegative-adversary-bound`

- Location: **Facts & Assumptions, F3 reference text**; source lines 47.
- Pages: `adversary-methods-and-quantum-query-complexity`.
- Visible defect: The linked title rendered inside this body includes the operator-norm formula as literal text `max_{||v||=1} ||Tv||`, with underscores and braces, rather than typeset mathematics.
- Future repair: Render the formula in the linked title with supported inline math delimiters or revise the linked display title to use typeset mathematical notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-16-nonnegative-adversary-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-16-nonnegative-adversary-bound.md).

Exact frozen source lines:

```text
47: [F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the norm is homogeneous.
```

#### quantum-algorithms / confirmed 003: `def-qa-24-pue-svd-data`

- Location: **ItemBody reference text**; source lines 68.
- Pages: `quantum-singular-value-transformation`.
- Visible defect: The resolved operator-norm title in this inline reference includes `max_{||v||=1} ||Tv||` as literal text with underscores and braces instead of typeset mathematics.
- Future repair: Render the formula in the linked title with supported inline math delimiters or revise the linked display title to use typeset mathematical notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-24-pue-svd-data--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-24-pue-svd-data.md).

Exact frozen source lines:

```text
68: [F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the maximum of $\|Tx\|$ over unit vectors, with norm zero on the zero domain.
```

#### quantum-algorithms / confirmed 004: `ex-qa-22-two-term-lcu`

- Location: **ItemBody reference text**; source lines 51.
- Pages: `block-encodings-examples`.
- Visible defect: The resolved operator-norm title in this inline reference includes `max_{||v||=1} ||Tv||` as literal text with underscores and braces instead of typeset mathematics.
- Future repair: Render the formula in the linked title with supported inline math delimiters or revise the linked display title to use typeset mathematical notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/ex-qa-22-two-term-lcu--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/ex-qa-22-two-term-lcu.md).

Exact frozen source lines:

```text
51: [F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the maximum norm on unit vectors.
```

#### quantum-algorithms / confirmed 005: `lem-qa-18-symmetric-compressed-walk-bound`

- Location: **ItemBody reference text**; source lines 57.
- Pages: `quantum-walk-search-and-element-distinctness`.
- Visible defect: The resolved operator-norm title in this inline reference includes `max_{||v||=1} ||Tv||` as literal text with underscores and braces instead of typeset mathematics.
- Future repair: Render the formula in the linked title with supported inline math delimiters or revise the linked display title to use typeset mathematical notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-18-symmetric-compressed-walk-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-18-symmetric-compressed-walk-bound.md).

Exact frozen source lines:

```text
57: [F5] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: on a nonzero domain, $\|T\|=\max_{\|z\|=1}\|Tz\|$; the zero-domain norm is $0$.
```

#### quantum-algorithms / confirmed 006: `lem-qa-27-supported-pseudoinverse-target`

- Location: **ItemBody reference text**; source lines 52.
- Pages: `block-encoding-linear-systems-and-variable-time-amplification`.
- Visible defect: The resolved operator-norm title in this inline reference includes `max_{||v||=1} ||Tv||` as literal text with underscores and braces instead of typeset mathematics.
- Future repair: Render the formula in the linked title with supported inline math delimiters or revise the linked display title to use typeset mathematical notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-27-supported-pseudoinverse-target--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-27-supported-pseudoinverse-target.md).

Exact frozen source lines:

```text
52: [F5] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: on a nonzero finite-dimensional domain, $\|A\|_{\rm op}$ is the maximum of $\|Av\|$ over unit vectors $v$.
```

#### quantum-algorithms / confirmed 007: `lem-qa-36-jrs-finite-band-estimates`

- Location: **ItemBody reference text**; source lines 53.
- Pages: `adiabatic-computation-and-circuit-equivalence`.
- Visible defect: The resolved operator-norm title in this inline reference includes `max_{||v||=1} ||Tv||` as literal text with underscores and braces instead of typeset mathematics.
- Future repair: Render the formula in the linked title with supported inline math delimiters or revise the linked display title to use typeset mathematical notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-36-jrs-finite-band-estimates--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-36-jrs-finite-band-estimates.md).

Exact frozen source lines:

```text
53: [F3] On a nonzero domain the operator norm is defined by its maximum on unit vectors; on the zero domain it is zero. It is submultiplicative ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).
```

#### quantum-algorithms / confirmed 008: `thm-qa-23-certified-phase-approximation-correctness`

- Location: **ItemBody reference text**; source lines 75.
- Pages: `quantum-signal-processing`.
- Visible defect: The resolved operator-norm title in this inline reference includes `max_{||v||=1} ||Tv||` as literal text with underscores and braces instead of typeset mathematics.
- Future repair: Render the formula in the linked title with supported inline math delimiters or revise the linked display title to use typeset mathematical notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-23-certified-phase-approximation-correctness--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-23-certified-phase-approximation-correctness.md).

Exact frozen source lines:

```text
75: [F6] [[def-qa-23-qsp-signal-sequence]] defines $Z(t)$ as the diagonal with entries $e^{it},e^{-it}$. [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[def-inner-product-norm]], and [[thm-qc-computational-basis-orthonormal]] fix the operator norm and the orthonormal signal basis.
```

#### quantum-algorithms / confirmed 009: `thm-qa-26-hhl-query-cost`

- Location: **ItemBody reference text**; source lines 62.
- Pages: `hhl-phase-estimation-linear-systems`.
- Visible defect: The resolved operator-norm title in this inline reference includes `max_{||v||=1} ||Tv||` as literal text with underscores and braces instead of typeset mathematics.
- Future repair: Render the formula in the linked title with supported inline math delimiters or revise the linked display title to use typeset mathematical notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-26-hhl-query-cost--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-26-hhl-query-cost.md).

Exact frozen source lines:

```text
62: [F7] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|H\|\le1$ bounds $\|H\psi\|$ for every unit vector $\psi$.
```

#### quantum-algorithms / confirmed 010: `lem-qa-35-smp-prior-message-decomposition`

- Location: **Statement**; source lines 30.
- Pages: `quantum-communication-and-fingerprinting`.
- Visible defect: The statement displays its matrix, vector, transpose, norm, summation, and inequality notation as literal ASCII/Unicode text rather than typeset mathematics. The Facts and proof later use math delimiters, confirming this is isolated to the Statement.
- Future repair: Typeset the mathematical clauses and expressions with math delimiters while preserving the full statement.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-35-smp-prior-message-decomposition--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-35-smp-prior-message-decomposition.md).

Exact frozen source lines:

```text
30: Let A,B be N×m row-stochastic matrices, M∈[0,1]^{m×m}, and let C=AMBᵀ satisfy C_xx≥0.99 and C_xy≤0.01 for x≠y. For every probability row vector D with ||D||₂²≤0.01 there are weights q_j and probability rows D_j with D=Σ_jq_jD_j such that, for rows X_j=(M_ij)_{i=1}^m (the transposes of the columns of M), Σ_j q_j(DA)X_jᵀ≤0.02 and Σ_jq_j(D_jA)X_jᵀ≥0.99.
```

#### quantum-algorithms / confirmed 011: `thm-qa-16-adversary-composition-lower-bound`

- Location: **Facts & Assumptions and Proof**; source lines 40, 58, 59, 60, 62, 64, 66, 68.
- Pages: `adversary-methods-and-quantum-query-complexity`.
- Visible defect: The Facts & Assumptions and complete proof render mathematical notation literally in the prose. The Statement is correctly typeset, but the proof’s matrix construction and norm relations lose subscripts, superscripts, and mathematical spacing.
- Future repair: Typeset mathematical expressions throughout lines 40 and 58–68, keeping the proof content and argument unchanged.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-16-adversary-composition-lower-bound--01.png), [tile 02](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-16-adversary-composition-lower-bound--02.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-16-adversary-composition-lower-bound.md).

Exact frozen source lines:

```text
40: **Given:** Finite partial Boolean functions f and g with disjoint input blocks in the composition h=f∘g^N.
58: 1.1 Let f:D_f→{0,1} be a nonconstant Boolean function on N bits and g:D_g→{0,1} a nonconstant Boolean function on m bits. The composed partial function h=f∘g^N has domain D_h={ (x_1,…,x_N)∈D_g^N : (g(x_1),…,g(x_N))∈D_f }. This domain is nonempty: choose one z∈D_f and fixed preimages in D_g of 0 and 1, which exist because g is nonconstant, then lift the coordinates of z blockwise. Choose optimal matrices Γ_f,Γ_g normalized so max_i||Γ_f∘Δ_i||=max_j||Γ_g∘Δ_j||=1; write a=||Γ_g||=Adv±(g). [given, F1, F2, F3, F6]
59: 
60: 1.2 Decompose each adversary matrix by output classes, Γ_g=[[0,B_g],[B_g^T,0]]. For a,b∈{0,1}, let G^{ab} be the (a,b) block of Γ_g when a≠b and let G^{aa}=a I on D_g^a. For x,y∈D_h put \tilde x=(g(x_1),…,g(x_N)) and define (Γ_h)_{xy}=(Γ_f)_{\tilde x,\tilde y}\prod_{j=1}^N G^{\tilde x_j,\tilde y_j}_{x_j,y_j}. This matrix is real symmetric and vanishes whenever h(x)=h(y); if Γ_f,Γ_g are entrywise nonnegative, so is Γ_h. [given, F1, F2, F3, construct]
62: 2.1 By [F4,F5], choose a singular-vector basis of the cross block B_g. Pair its positive singular vectors across the two output classes, and pair equal numbers of left and right null vectors with singular value zero. If the null-space dimensions differ, each leftover null vector is a one-dimensional component supported on just one output class; its equal-output patch is aI and its cross-output action is zero. For a paired singular value s≤a, the four restrictions G^{00},G^{01},G^{10},G^{11} act as a times C_s=[[1,s/a],[s/a,1]], which is positive semidefinite with unit diagonal. A leftover singleton is represented by C_0=diag(1,0) or diag(0,1), a positive semidefinite matrix with diagonal entries at most one. For each tuple of child components, the corresponding invariant subspace is indexed by the compatible outer output labels b∈D_f, and the restriction of Γ_h is a^N times the compression of Γ_f∘C, where C_{b,b′} is the product of the selected two-output factors. The tensor-product factor C is positive semidefinite with diagonal entries at most one. Write C_{b,b′}=⟨c_b|c_{b′}⟩ with ||c_b||≤1; then V|b⟩=|b⟩⊗|c_b⟩ is a contraction and V^*(Γ_f⊗I)V=Γ_f∘C, so ||Γ_f∘C||≤||Γ_f||. The SVD components span every child input space, proving ||Γ_h||≤||Γ_f||a^N. [given, F4, F5, step 1.2, algebra]
64: 3.1 Choose top singular pairs (u_f,v_f) and (u_g,v_g) for the cross blocks of Γ_f and Γ_g. The bipartite block form makes α_f=(u_f,v_f)/√2 and α_g=(u_g,v_g)/√2 eigenvectors with eigenvalues ||Γ_f|| and a. For a fixed outer output tuple b, each child factor G^{b_j,b′_j} sends the restricted α_g component in class b′_j to a times the corresponding component in class b_j, whether b_j=b′_j (the patched aI block) or b_j≠b′_j (the singular-vector equation for B_g). Substitution in the definition of Γ_h therefore shows α_h(x)=α_f(tilde x)∏_jα_g(x_j) is an eigenvector with eigenvalue ||Γ_f||a^N. Together with step 2.1 this gives ||Γ_h||=||Γ_f||a^N. [given, F1, F4, F5, step 1.2, step 2.1, algebra]
66: 3.2 Fix an input bit q in block j and put d=||Γ_g∘Δ_q||. If d=0, then every entry of Γ_g∘Δ_q is zero, the equal-output patch dI is zero, and the masked composed block is zero. Suppose d>0. In Γ_h∘Δ_{j,q}, if the outer block outputs agree at j, its factor Γ_f∘Δ_j is zero; equivalently, the patched equal-output child block is diagonal in x_j and is killed by the inner mismatch Δ_q. If the outer outputs differ at j, the child cross block is exactly the corresponding block of Γ_g∘Δ_q. Thus the masked composite has the same entrywise construction as step 1.2 with outer matrix Γ_f∘Δ_j, child j cross block from Γ_g∘Δ_q patched by dI on equal-output blocks, and every other child patched by aI. Repeating the invariant-subspace and correlation-compression argument of step 2.1 bounds its norm by ||Γ_f∘Δ_j|| d a^{N−1}. The paired, zero-singular, and singleton components are handled as in step 2.1; the outer and inner filtered norms are at most one by normalization, so ||Γ_h∘Δ_{j,q}||≤a^{N−1}. [given, F3, F4, F5, step 1.2, step 2.1]
68: 4.1 Therefore max_{j,q}||Γ_h∘Δ_{j,q}||≤a^{N-1}, while ||Γ_h||=Adv±(f)a^N by step 3.1. Its ratio is at least Adv±(f)a, proving Adv±(f∘g^N)≥Adv±(f)Adv±(g). If Γ_f and Γ_g are nonnegative, step 1.2 makes Γ_h nonnegative, so the identical argument proves Adv(f∘g^N)≥Adv(f)Adv(g). If either function is constant, the asserted lower bound is the trivial zero bound. [given, F1, F2, step 1.2, step 3.1, step 3.2] ∎
```

#### quantum-algorithms / confirmed 012: `thm-qa-16-controlled-consistency-reflection-correct`

- Location: **Proof**; source lines 61, 62, 63, 64, 65.
- Pages: `adversary-methods-and-quantum-query-complexity`.
- Visible defect: The proof’s mathematical notation is emitted as literal plain text instead of typeset math (for example H=span..., C^N, |start><start|, |i>=e..., and O_x²=I). The surrounding statement and other lane formulas use formatted TeX, so the proof is visually inconsistent and some indices/operators are harder to parse.
- Future repair: Typeset the inline mathematical expressions in proof steps 1.1–3.1 with inline math delimiters, preserving the stated register order, plus-on-range sign, and oracle-reset sequence.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-16-controlled-consistency-reflection-correct--01.png), [tile 02](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-16-controlled-consistency-reflection-correct--02.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-16-controlled-consistency-reflection-correct.md).

Exact frozen source lines:

```text
61: 1.1 Let H=span{|start⟩}⊕(C^N⊗K⊗C²). The algorithm input requires |start⟩ to be unit and orthogonal to every query mode; hence |start⟩⟨start| is the orthogonal projection onto its span. It also labels the standard address basis by |i⟩=e_{i−1}, i∈[N]. Under the standard coordinate pairing in [F25], ⟨e_j,e_k⟩=Σ_rδ_{rj}δ_{rk}=δ_{jk}, so these address vectors and the response basis vectors are orthonormal. Therefore the query summands |i⟩⟨i|⊗I_K⊗|x_i⟩⟨x_i| are mutually orthogonal projections and are orthogonal to the start projection. Thus Π_x is an orthogonal projection. [given, F25, algebra]
62: 
63: 2.1 Append a clean scratch bit u=0. In query mode, call O_x at address i to write u=x_i. In start mode route the oracle address to a fixed i_0∈[N] and apply H to u so the target is |+⟩; since X^{x_{i_0}}|+⟩=|+⟩, the unconditional oracle call leaves start unchanged. Apply a fixed phase −1 exactly when c=1, the mode is a query state, and z≠u; apply +1 on the start mode and when c=0. On query basis states this phase is +1 exactly when z=x_i, and −1 otherwise. [given, F21, F22, F23, step 1.1, algebra]
64: 
65: 3.1 Call O_x again at the same address to reset u to 0 in query mode, using O_x²=I from [F22]. In start mode the second call again fixes |+⟩, and the final controlled H returns u to |0⟩. For c=1 the induced operator on H is 2Π_x-I; for c=0 it is I. Thus this fixed circuit realizes controlled R_{Π_x} with the plus-on-range sign specified in [F24], without a controlled unknown-oracle call. By linearity the same control/data action holds for arbitrary superpositions with the scratch returned clean. [given, F22, F23, F24, step 1.1, step 2.1, algebra] ∎
```

#### quantum-algorithms / confirmed 013: `thm-qa-35-private-coin-equality-lower-bound`

- Location: **Statement**; source lines 34.
- Pages: `quantum-communication-and-fingerprinting`.
- Visible defect: The displayed lower-bound expression uses raw ASCII `sqrt(n/(60 ln 2))/t` in the statement; the corresponding rearranged inequality in proof line 50 is typeset. The notation is legible but inconsistent with the proof and the mathematical title.
- Future repair: Format the bound as inline math, e.g. `$c+1\ge\frac{1}{t}\sqrt{\frac{n}{60\ln 2}}$`, keeping the fixed odd t condition.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-35-private-coin-equality-lower-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-35-private-coin-equality-lower-bound.md).

Exact frozen source lines:

```text
34: For a classical simultaneous-message Equality protocol on n-bit inputs, with independent private randomness, no shared resource, and worst-case error at most 1/3, let c be the maximum of the two senders’ worst-case message lengths. For the fixed odd t used in the proof, c+1≥sqrt(n/(60 ln 2))/t; consequently the total communication is Ω(√n).
```

#### quantum-algorithms / confirmed 014: `lem-qa-16-effective-spectral-gap`

- Location: **Statement**; source lines 37.
- Pages: `adversary-methods-and-quantum-query-complexity`.
- Visible defect: The original screenshot displays the underscores, braces, and operator formulas as ordinary text; the equations are not rendered as math. The following bound at line 38 is rendered, so this is a localized source-markup omission rather than a KaTeX failure.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-16-effective-spectral-gap--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-16-effective-spectral-gap.md).

Exact frozen source lines:

```text
37: Let H be a finite-dimensional complex inner-product space, Π and Δ orthogonal projections on H, R_Π=2Π-I and R_Δ=2Δ-I, and U=R_ΠR_Δ. For 0≤ω≤π, let E_ω be the spectral projection of U onto eigenvalues e^{iφ} whose principal arguments satisfy |φ|≤ω. If Δw=0, then
```

#### quantum-algorithms / confirmed 015: `thm-qa-35-quantum-fingerprint-message-lower-bound`

- Location: **Statement**; source lines 34.
- Pages: `quantum-communication-and-fingerprinting`.
- Visible defect: In the original screenshot those expressions appear as ordinary text with caret exponents and unformatted subscripts rather than typeset mathematics. The corresponding Facts & Assumptions and proof use proper math delimiters, so this is a localized statement-formatting omission, not a renderer/receipt error.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-35-quantum-fingerprint-message-lower-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-35-quantum-fingerprint-message-lower-bound.md).

Exact frozen source lines:

```text
34: In an SMP Equality protocol on n≥2 bits with worst-case error at most 1/3, no shared randomness or entanglement, and fixed q-qubit messages, each sender must transmit Ω(log n) qubits. For fixed Bob input y, the referee’s equality POVM separates ρ_y from each ρ_x, x≠y, by trace distance at least 1/3; packing d×d density matrices in trace distance yields 2ⁿ≤(26d^(3/2))^(d²), d=2^q, and hence q=Ω(log n).
```

#### quantum-algorithms / confirmed 016: `lem-qa-35-identity-matrix-packing`

- Location: **Statement**; source lines 27.
- Pages: `quantum-communication-and-fingerprinting`.
- Visible defect: The complete formal statement is rendered as ordinary text. The multiplication dimensions, matrix entries, indexed products, inequalities, and logarithmic exponent use raw Unicode/ASCII notation rather than typeset math; adjacent assumptions at line 31 typeset the same notation. This is legible, but the statement has visibly inconsistent mathematical formatting.
- Future repair: Wrap the mathematical expressions in supported inline MathMarkdown delimiters while preserving the exact claim.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-algorithms/research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-35-identity-matrix-packing--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-35-identity-matrix-packing.md).

Exact frozen source lines:

```text
27: If A,B are N×m row-stochastic matrices and M∈[0,1]^{m×m} satisfies (AMBᵀ)_xx≥0.99 and (AMBᵀ)_xy≤0.01 for x≠y, then for every m≥2, N≤exp(60(ln m)²).
```

