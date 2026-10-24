## Algebraic Topology

Completed visual review of **917 items across 52 pages**, with **1523 image tiles**. Findings: 55 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/algebraic-topology/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/algebraic-topology/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/algebraic-topology/category-review-receipt.json).

### Confirmed rendering defects

#### algebraic-topology / confirmed 001: `def-orthogonal-clifford-families-and-centrioles`

- Location: **Definition**; source lines 32.
- Pages: `real-clifford-modules-ko-and-abs-orientations`.
- Visible defect: The rendered Definition displays mathematical notation as plain text, including literal underscores and caret-like subscript notation such as J_i², J_iJ_j, and C_l; there are no rendered math expressions in this item.
- Future repair: Wrap the mathematical expressions in supported inline math delimiters and render again so subscripts, superscripts, and operators are typeset.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/def-orthogonal-clifford-families-and-centrioles--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/def-orthogonal-clifford-families-and-centrioles.md).

Exact frozen source lines:

```text
32: Let p be a positive even integer and define SO(p)={J∈M_p(ℝ):JᵀJ=I, det J=1}. Its trace metric is the left-invariant Riemannian metric whose inner product at the identity is ⟨A,B⟩=−(1/p)tr(AB) for skew-symmetric A,B; at J its value on tangent vectors JA,JB is the same. An orthogonal negative-square Clifford family of length l is a list J₁,…,J_l∈SO(p) with J_i²=−I and J_iJ_j=−J_jJ_i for i≠j, equivalently a representation of C_l=Cl(ℝ^l,−‖·‖²) by these matrices. For a Riemannian manifold P and points x,y, its midpoint set is {γ(1/2): γ:[0,1]→P is a length-minimizing geodesic from x to y}; a centriole is a connected component of such a midpoint set. Put P₀=SO(p), J₀=I, and for 1≤j≤l define P̂_j={J∈SO(p):J²=−I and JJ_i=−J_iJ for 1≤i<j}; let P_j be the connected component of P̂_j containing J_j. A compatible family also satisfies J_j∈P_(j−1). The geometric midpoint interpretation of this algebraic component is the claim of the next lemma.
```

#### algebraic-topology / confirmed 002: `def-right-group-ring-action-on-the-chains-of-a-universal-cover`

- Location: **Definition**; source lines 36.
- Pages: `local-coefficients-twisted-homology-and-duality`.
- Visible defect: The internal reference markup is printed literally around the group-ring expression (`[[def-group-ring|...]]`) instead of rendering as the intended linked title and formula.
- Future repair: Use the renderer-supported internal-reference syntax for the group-ring link, with the formula supplied as its displayed link text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/def-right-group-ring-action-on-the-chains-of-a-universal-cover--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/def-right-group-ring-action-on-the-chains-of-a-universal-cover.md).

Exact frozen source lines:

```text
36: extended additively and $R$-linearly to [[def-group-ring|$R[\pi]$]]. It is a
```

#### algebraic-topology / confirmed 003: `lem-stable-thom-cohomology-is-a-square-module-coalgebra`

- Location: **Statement**; source lines 37.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement’s equation is rendered as plain text with literal underscores in Δ_M and Δ_A rather than typeset mathematical notation.
- Future repair: Mark the statement’s mathematical notation as math using the supported delimiters, then render again.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-stable-thom-cohomology-is-a-square-module-coalgebra--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-stable-thom-cohomology-is-a-square-module-coalgebra.md).

Exact frozen source lines:

```text
37: Assume AC. For a∈A and m∈M, the stable Steenrod action and Whitney-sum coproduct satisfy Δ_M(a·m)=Δ_A(a)·Δ_M(m), where A acts diagonally on M⊗M. The counit is compatible with the action, so M is an A-module coalgebra.
```

#### algebraic-topology / confirmed 004: `thm-unoriented-thom-cohomology-away-from-two-below-2r`

- Location: **Statement**; source lines 41.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement is displayed as unformatted plain text: exponent/caret and indexed formula notation (for example H^i, H^{i−r}, and p_1) appears literally rather than being typeset.
- Future repair: Wrap the mathematical expressions throughout the Statement in supported math delimiters and render again.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-unoriented-thom-cohomology-away-from-two-below-2r--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-unoriented-thom-cohomology-away-from-two-below-2r.md).

Exact frozen source lines:

```text
41: Assume AC. Let R be a nonzero commutative unital ring with 2 invertible, r>0, MO(r)=Th(γ_r), and MSO(r)=Th(γ_r⁺). Then reduced H^i(MO(r);R)=H^{i−r}(BO(r);O_R(γ_r)). For odd r this is zero in every degree. For r=2m it is the shifted module u e R[p₁,…,p_m], with |u|=r, |e|=r and |p_i|=4i, interpreted through the oriented cover, not as a global unoriented R-Thom class. In particular reduced H^i(MO(r);R)=0 for i<2r, whereas reduced H^{2r}(MO(2m);R)=R. For MSO(r), reduced H^i(MSO(r);R)=H^{i−r}(BSO(r);R).
```

#### algebraic-topology / confirmed 005: `ex-adem-relation-sq-one-sq-one-equals-zero`

- Location: **Title**; source lines 4.
- Pages: `bocksteins-steenrod-squares-and-cohomology-operations-examples`.
- Visible defect: The rendered title displays the caret exponent notation literally as “Sq^1Sq^1=0” instead of typesetting the exponents.
- Future repair: Use superscript characters in the title or a title-safe math rendering form.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/ex-adem-relation-sq-one-sq-one-equals-zero--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/ex-adem-relation-sq-one-sq-one-equals-zero.md).

Exact frozen source lines:

```text
4: title: The relation Sq^1Sq^1=0
```

#### algebraic-topology / confirmed 006: `ex-rational-hurewicz-range-for-the-four-sphere`

- Location: **Example**; source lines 33.
- Pages: `thom-spectra-and-unoriented-bordism-detection-examples`.
- Visible defect: The statement shows the subscript markup `_i` literally in the rendered mathematical notation.
- Future repair: Wrap these expressions in math delimiters or use typographic subscripts consistently.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/ex-rational-hurewicz-range-for-the-four-sphere--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/ex-rational-hurewicz-range-for-the-four-sphere.md).

Exact frozen source lines:

```text
33: Assume AC. For S⁴, the rational Hurewicz map is an isomorphism in degrees 4, 5, and 6: π₄(S⁴)⊗Q≅H₄(S⁴;Q)≅Q, and both π_i(S⁴)⊗Q and H_i(S⁴;Q) vanish for i=5,6.
```

#### algebraic-topology / confirmed 007: `lem-finite-products-and-comparison-cones-have-finite-type`

- Location: **Statement**; source lines 45.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement renders formula notation as ordinary text, leaving carets and underscores literal throughout the homology and cone expressions.
- Future repair: Set the mathematical expressions in the statement in inline math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-finite-products-and-comparison-cones-have-finite-type--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-finite-products-and-comparison-cones-have-finite-type.md).

Exact frozen source lines:

```text
45: Assume AC. Let Y be a finite product of CW K(Z/2,q) models with q≥1, including the empty product *. Then every H_n(Y;Z) is finitely generated and H^*(Y;F)=F in degree zero only for every field F of characteristic different from two. For any continuous f:X→Z between arbitrary spaces, the integral chain cone has an exact sequence 0→coker(H_nX→H_nZ)→H_n(Cone(C_*(f;Z)))→ker(H_{n−1}X→H_{n−1}Z)→0. If H_nZ and H_{n−1}X are finitely generated, its middle group is finitely generated. In particular this holds in every degree for X=MO(r) or MSO(r) and Z=Y a finite product as above. The raw cone is nonnegative and degreewise free, without any finite-rank assertion or topological-cone identification.
```

#### algebraic-topology / confirmed 008: `lem-rationalization-is-exact-and-commutes-with-singular-homology`

- Location: **Statement**; source lines 36.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement leaves subscript markup `_j` literal and shows the equations as untypeset body text.
- Future repair: Wrap the equations and indexed homology groups in inline math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-rationalization-is-exact-and-commutes-with-singular-homology--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-rationalization-is-exact-and-commutes-with-singular-homology.md).

Exact frozen source lines:

```text
36: Assume AC. For every abelian group A, A⊗_Z Q is its positive-integer localization: every element is a/s and a/s=0 iff a is killed by some positive integer. Thus A⊗Q=0 iff A is torsion. Rationalization is exact and commutes with direct sums. Naturally for every space Y, H_j(Y;Z)⊗Q≅H_j(Y;Q); for every rational vector space V, H_j(Y;V)≅H_j(Y;Q)⊗_Q V.
```

#### algebraic-topology / confirmed 009: `thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage`

- Location: **Proof**; source lines 61.
- Pages: `obstruction-theory-postnikov-towers-and-classifying-spaces`.
- Visible defect: A standalone `[F3]` reference marker is rendered on its own line after the preceding displayed equation, before proof step 2.1.
- Future repair: Remove the redundant standalone marker or incorporate the reference into the preceding sentence.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage.md).

Exact frozen source lines:

```text
61: [F3]
```

#### algebraic-topology / confirmed 010: `lem-stable-thom-detector-coordinates-commute-with-suspension`

- Location: **Statement**; source lines 42, 58, 60.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: Statement and proof display formula notation literally in ordinary text (for example V_n, D_{r,n}, π_{r+n}, F₂^{B_n}, and π_{r+n}(P_r)); these are not rendered as formatted mathematics. The assumptions section does render the analogous formulas, so this is visible within the same item.
- Future repair: Wrap the formula-bearing notation in supported inline or display math delimiters, then rerender and confirm the notation is typeset.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-stable-thom-detector-coordinates-commute-with-suspension--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-stable-thom-detector-coordinates-commute-with-suspension--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-stable-thom-detector-coordinates-commute-with-suspension.md).

Exact frozen source lines:

```text
42: Assume AC. Fix n≥0 and V_n=F₂^{B_n}. For every r≥n+2 let D_{r,n}:π_{r+n}(T_r)→V_n pair a sphere class with the rank-r stable-coordinate classes m_{r,b}, b∈B_n. If β_r:S¹∧T_r→T_{r+1} is the prespectrum structure map, then D_{r+1,n}∘(β_r)_*=D_{r,n} under suspension of representatives.
58: 1.1 Fix n≥0 and the degree-n part B_n of the single global basis fixed in the detector definition. For every r≥n+2, define D_{r,n}:π_{r+n}(T_r)→V_n, V_n=F₂^{B_n}, by pairing with the stable coordinates m_{r,b}, b∈B_n. The finite-range theorem says D_{r,n} is an isomorphism. This is the same map as the π_{r+n} map of f_r after identifying π_{r+n}(P_r) with V_n by its normalized Eilenberg–Mac Lane fundamental classes. [given, F1]
60: 2.1 Let β_r:S¹∧T_r→T_{r+1} be the prespectrum structure map, and let b_{r,n} be its induced stabilization map on π_{r+n}. Since m_b is an inverse-limit element, its coordinates satisfy σ⁻¹β_r^* m_{r+1,b}=m_{r,b}. For a based representative α:S^{r+n}→T_r, naturality of the Kronecker pairing gives ⟨m_{r+1,b}, (β_r∘(1∧α))_*[S¹∧S^{r+n}]_{F₂}⟩ =⟨β_r^* m_{r+1,b}, (1∧α)_*[S¹∧S^{r+n}]_{F₂}⟩ =⟨m_{r,b}, α_*[S^{r+n}]_{F₂}⟩. All sphere classes in these pairings are mod-two fundamental classes, not unreduced integral classes. For the second equality, represent the cohomology suspension of m_{r,b} by its external product with the degree-one generator of S¹. Under S¹∧S^{r+n}≅S^{r+n+1}, the mod-two sphere fundamental class is the external product of the two mod-two fundamental classes. Evaluation of external products on product chains is the product of the two evaluations; the S¹ factor evaluates to 1. Naturality of the Kronecker pairing then gives exactly the displayed equality. These are the published suspension, external-product/Künneth, and Kronecker naturality interfaces; coefficients are F₂, so there is no sign ambiguity. Thus $D_{r+1,n}b_{r,n}=D_{r,n}$ coordinate by coordinate, proving the claimed suspension compatibility. [step 1.1, F1, F2, F3] ∎
```

#### algebraic-topology / confirmed 011: `thm-bo-bso-cohomology-away-from-two`

- Location: **Statement and Proof**; source lines 43, 63, 65.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement and Gysin calculation in the proof display raw formula notation in ordinary text, including H*, p_i, p_m=e² and source-style arrows, unlike the math-rendered formulas in the Given section.
- Future repair: Wrap the formula-bearing notation in supported inline or display math delimiters, then rerender and confirm the notation is typeset.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-bo-bso-cohomology-away-from-two--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-bo-bso-cohomology-away-from-two--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-bo-bso-cohomology-away-from-two.md).

Exact frozen source lines:

```text
43: Assume AC. Let R be a nonzero commutative unital ring with 2 invertible. For m≥1, H*(BSO(2m+1);R)=R[p₁,…,p_m], H*(BSO(2m);R)=R[p₁,…,p_{m−1},e] with p_m=e², and H*(BO(2m);R)=H*(BO(2m+1);R)=R[p₁,…,p_m]. The indicated generators are the actual universal Euler and Pontryagin classes, |e|=2m and |p_i|=4i. Orientation reversal fixes p_i and negates e. BSO(1) has cohomology R in degree zero only, BO(1) likewise, and rank zero is a point. The chosen BSO(r) is the lifted Schubert CW model.
63: 2.1 If n=2m, induction computes the preceding rank as R[p₁,…,p_{m-1}]. All those generators lift, so j* is surjective degreewise. In the published rank-2m Gysin sequence the actual maps, after identifying the sphere total space with BSO(2m−1), are H^{k−2m}(BSO(2m);R) --·e--> H^k(BSO(2m);R) --j*--> H^k(BSO(2m−1);R) --p_!--> H^{k−2m+1}(BSO(2m);R) --·e--> H^{k+1}(BSO(2m);R). Surjectivity of j* in degree k makes every class in its target a pullback. Exactness gives p_!j*=0, so p_! vanishes in degree k. At the following term, exactness therefore makes multiplication by e injective on H^{k−2m+1}(BSO(2m);R). Taking k=a+2m−1 for every integer a proves that e is a non-zero-divisor in each degree a. Exactness at H^k(BSO(2m);R) independently gives ker(j*:H^k(BSO(2m);R)→H^k(BSO(2m−1);R)) =eH^{k−2m}(BSO(2m);R). Negative-degree groups are zero, so the same statement includes the initial degrees. For a class of degree d subtract a polynomial lift of its restriction, then divide the remainder by e; the resulting class has degree d−2m. Induction on d proves polynomial generation. For a polynomial relation Σ_{a=0}^N e^a P_a(p)=0, restriction gives P₀=0 by the preceding rank's polynomial independence. Injectivity of multiplication by e then repeats the argument to show every P_a=0. The published top-class identity gives p_m=e². This proves the even-rank presentation over R. [step 1.1, F2, algebra]
65: 2.2 If n=2m+1, the odd-rank Euler class vanishes over R because its integral class is killed by two. Gysin makes j* injective. Its image contains R[p₁,…,p_m]=R[p₁,…,p_{m-1},e²] in the preceding even-rank ring. To prove equality, use the actual sphere-bundle involution τ(V,o,v)=(V,o,−v). It fixes p and reverses the orientation of the complement plane: the ordered first vector v changes sign while the orientation o stays fixed. Thus cτ=σc, with σ orientation reversal on BSO(2m). Since τ*p*=p*, the image of j* is σ-invariant. The Euler sign formula gives σ*e=−e and σ*p_i=p_i. Every element of the already computed even-rank polynomial ring has a unique expansion Σ e^a P_a(p₁,…,p_{m-1}); since 2 is invertible, its invariants are exactly the polynomials with even a. This proves the odd-rank presentation. No rank/dimension/saturation assertion is needed here. [step 1.1, F2, algebra]
```

#### algebraic-topology / confirmed 012: `thm-rational-hurewicz-for-highly-connected-cw-complexes`

- Location: **Statement**; source lines 42, 64.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement and final proof comparison display formula notation literally in ordinary text (π_i(X)⊗_Z Q, H_i(X;Q), and a source-typed arrow diagram), while analogous formulas in the Given section render in math styling.
- Future repair: Wrap the formula-bearing notation in supported inline or display math delimiters, then rerender and confirm the notation is typeset.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-rational-hurewicz-for-highly-connected-cw-complexes--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-rational-hurewicz-for-highly-connected-cw-complexes--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-rational-hurewicz-for-highly-connected-cw-complexes.md).

Exact frozen source lines:

```text
42: Assume AC. If a based CW complex X is (c−1)-connected with c≥2, the natural actual rationalized Hurewicz map π_i(X)⊗_Z Q→H_i(X;Q) is an isomorphism for c≤i≤2c−2. Lower positive rational homology vanishes. No finite-type, countability or finite-CW hypothesis is imposed, and no injectivity at 2c−1 is claimed.
64: 3.1 The rational homotopy-to-homology comparison gives H_i(f;Q) an isomorphism through D. By the wedge Hurewicz lemma the Hurewicz map on W is an isomorphism in that same range. For each c≤i≤D the naturality square π_i(W)⊗Q --π_i(f)⊗Q--> π_i(X)⊗Q | h_W | h_X v v H_i(W;Q) ----H_i(f;Q)----> H_i(X;Q) commutes. The left, upper and lower arrows are isomorphisms, so h_X is an isomorphism. This proves the specified map, not merely equality of dimensions of two vector spaces. [step 2.1, F2]
```

#### algebraic-topology / confirmed 013: `thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison`

- Location: **Statement**; source lines 37.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement displays the entire formula-heavy claim as plain text, including x₀/y₀, f_*, H_i and π_i with literal underscores and stars; analogous formulas in the Given section render in math styling.
- Future repair: Wrap the formula-bearing notation in supported inline or display math delimiters, then rerender and confirm the notation is typeset.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison.md).

Exact frozen source lines:

```text
37: Assume AC. Let N≥2 and let f:(X,x₀)→(Y,y₀) be a based continuous map between nonempty path-connected simply connected CW complexes. Suppose f_*:H_i(X;Z)→H_i(Y;Z) is an isomorphism for 0≤i<N and a surjection for i=N. Then f_*:π_i(X,x₀)→π_i(Y,y₀) is an isomorphism for 1≤i<N and a surjection for i=N. No conclusion about π_{N+1} or homotopy equivalence of the spaces is included.
```

#### algebraic-topology / confirmed 014: `thm-stable-unoriented-thom-homotopy-is-injectively-detected`

- Location: **Statement**; source lines 34.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement displays formula notation literally in ordinary text (π_n, colim_r, π_{r+n}, T_r, F₂^{B_n}, and D_{r,n}) rather than formatted mathematics; the corresponding assumptions formulas render in math styling.
- Future repair: Wrap the formula-bearing notation in supported inline or display math delimiters, then rerender and confirm the notation is typeset.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-stable-unoriented-thom-homotopy-is-injectively-detected--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-stable-unoriented-thom-homotopy-is-injectively-detected.md).

Exact frozen source lines:

```text
34: Assume AC. For each n≥0, the stable group π_n(MO)=colim_r π_{r+n}(T_r) maps injectively to V_n=F₂^{B_n} by the compatible detector coordinates D_{r,n}, using the cofinal tail r≥n+2.
```

#### algebraic-topology / confirmed 015: `thm-admissible-square-algebra-is-a-connected-bialgebra`

- Location: **Statement and Proof**; source lines 43, 59, 63.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement and proof print formula notation literally in ordinary text, including Σ_{i+j=n}, s_n, Δ̃(s_n), and F₂, rather than typesetting it as mathematics. The Given section typesets analogous notation.
- Future repair: Wrap the formula-bearing notation in supported inline or display math delimiters, then rerender and confirm the notation is typeset.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-admissible-square-algebra-is-a-connected-bialgebra--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-admissible-square-algebra-is-a-connected-bialgebra--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-admissible-square-algebra-is-a-connected-bialgebra.md).

Exact frozen source lines:

```text
43: Assume AC. The mod-two algebra A generated by the Steenrod squares is a connected nonnegatively graded bialgebra. Its coproduct is the algebra homomorphism Δ(Sqⁿ)=Σ_{i+j=n}Sqⁱ⊗Sqʲ, with counit ε(Sq⁰)=1 and ε(Sqⁿ)=0 for n>0.
59: 1.1 Let T be the free associative graded algebra on symbols s_n, n>0, with s₀=1. Define an algebra homomorphism Δ̃:T→T⊗T, Δ̃(s_n)=Σ_{i+j=n}s_i⊗s_j, using the graded tensor-product multiplication; over F₂ all Koszul signs equal 1. Define ε̃(s₀)=1 and ε̃(s_n)=0 for n>0, extending multiplicatively. On generators, Δ̃ is coassociative because both iterates sum once over triples i+j+k=n. The two counit identities also hold on generators. Since all maps in these identities are algebra homomorphisms, the identities hold on T. [given, F2]
63: 3.1 The map q⊗q kills the first three summands and restricts to the isomorphism C⊗C→(T/I)⊗(T/I) on the last. Hence ker(q⊗q)=I⊗T+T⊗I; write J for this kernel. Since I is a two-sided ideal, J is a two-sided ideal in T⊗T. We have Δ̃(R)∈J for each R∈R₀. Every element of I is a finite sum of terms xRy with x,y∈T and R∈R₀, so multiplicativity gives Δ̃(xRy)=Δ̃(x)Δ̃(R)Δ̃(y)∈J. Therefore Δ̃(I)⊂J, and Δ̃ descends to Δ_A:A→A⊗A. Also ε̃(R)=0 for every R∈R₀ because each generator is homogeneous of positive degree. Since ε̃ is multiplicative, it vanishes on all of I and descends to A. The descended maps remain algebra homomorphisms, coassociative and counital. The basis theorem gives A₀=F₂·1 and A_d=0 for d<0. Thus A is a connected nonnegatively graded bialgebra, with Δ_A(Sqⁿ)=Σᵢ₌₀ⁿ Sqⁱ⊗Sqⁿ⁻ⁱ. No antipode is required by the Hopf-freeness supplier. [step 2.1, F1, F3] ∎
```

#### algebraic-topology / confirmed 016: `thm-finite-generation-cohomological-uct-gives-integral-cone-comparison`

- Location: **Statement**; source lines 40.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: Mathematical notation is displayed as ordinary text, with literal underscore/caret and function notation instead of typeset formulas.
- Future repair: Wrap the mathematical expressions in the statement in inline math delimiters so the indices, Hom notation, and induced maps render as formulas.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-finite-generation-cohomological-uct-gives-integral-cone-comparison--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-finite-generation-cohomological-uct-gives-integral-cone-comparison.md).

Exact frozen source lines:

```text
40: Assume AC. Let D≥0 and let C be a nonnegative free integral chain complex whose H_i(C) are finitely generated for 0≤i≤D. If H^i(Hom_Z(C,Q))=0 and H^i(Hom_Z(C,F_p))=0 for every prime p in those degrees, then H_i(C)=0 for 0≤i≤D. Consequently, for a continuous map f:X→Y with degreewise finitely generated integral homology, field cohomology isomorphisms f*:H^i(Y;F)→H^i(X;F) for F=Q and every F_p and 0≤i≤D imply integral homology isomorphisms f_* for i<D and surjectivity for i=D. No degree-D injectivity or degree-D+1 field hypothesis is asserted.
```

#### algebraic-topology / confirmed 017: `thm-finite-generation-cohomological-uct-gives-integral-cone-comparison`

- Location: **Proof**; source lines 56, 58, 60.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: Mathematical notation is displayed as ordinary text with literal indices and operator expressions rather than typeset formulas.
- Future repair: Wrap the mathematical expressions in the proof in inline math delimiters, matching the rendered notation used in the surrounding items.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-finite-generation-cohomological-uct-gives-integral-cone-comparison--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-finite-generation-cohomological-uct-gives-integral-cone-comparison--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-finite-generation-cohomological-uct-gives-integral-cone-comparison.md).

Exact frozen source lines:

```text
56: 1.1 Cohomology UCT surjects the displayed degree-i cohomology onto Hom(H_i(C),Q), respectively Hom(H_i(C),F_p). In the finite abelian-group decomposition, a nonzero free summand has a nonzero map to Q; any nonzero p-primary summand has a nonzero map to F_p. Thus the vanishing of all these Hom groups forces H_i(C)=0. No H^{i+1} vanishing is used, and the Ext term is not mistaken for the Hom term. In fact all prime fields alone detect a finitely generated nonzero abelian group; Q is included to match the topological coefficient comparisons. [given, F1]
58: 2.1 Apply this to C_f. The degreewise split cone sequence, dualized to any coefficient field, gives H^{i-1}(Y;F)→H^{i-1}(X;F)→H^i(Hom(C_f,F)) →H^i(Y;F)→H^i(X;F). This follows from the inspected long exact sequence of complexes after reindexing cochains; degreewise splitting ensures Hom remains exact. Therefore field isomorphisms f*:H^i(Y;F)→H^i(X;F) for 0≤i≤D imply cone cohomology vanishing for 0≤i≤D, including degree zero with the negative groups zero. The previous lemma and finite generation then give H_i(C_f;Z)=0 for i≤D. The integral cone long exact sequence yields the stated isomorphism below $D$ and surjection at $D$. [step 1.1, F1, F2]
60: 3.1 f_*:H_i(X;Z)→H_i(Y;Z) is an isomorphism for i<D, f_*:H_D(X;Z)→H_D(Y;Z) is surjective. Claiming injectivity in degree D would require H_{D+1}(C_f)=0 and is not a consequence of these hypotheses. For the actual Thom comparison take D=2r−1. Items 2 and 4 give the rational and odd-prime field isomorphisms through D, since both reduced cohomologies vanish there. The **separate mod-two metastable comparison** must give f* isomorphisms through D. If it does, the argument proves integral homology isomorphisms through 2r−2 and surjectivity at 2r−1. Neither odd-primary vanishing nor a mod-two comparison at 2r is required. For a later degree n+r in the isomorphism range choose r≥n+2. [step 2.1, F2, F3] ∎
```

#### algebraic-topology / confirmed 018: `def-finite-dimensional-gapped-free-hamiltonian-and-stable-equivalence`

- Location: **Definition**; source lines 34.
- Pages: `real-clifford-modules-ko-and-abs-orientations`.
- Visible defect: The relation is displayed with literal baseline caret and underscore notation (S H S^{-1}=σH), rather than as a typeset formula; the surrounding prose and other math render normally.
- Future repair: Set the relation as inline math, for example $S H S^{-1}=\sigma H$, or rewrite the formula in words.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/def-finite-dimensional-gapped-free-hamiltonian-and-stable-equivalence--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/def-finite-dimensional-gapped-free-hamiltonian-and-stable-equivalence.md).

Exact frozen source lines:

```text
34: Class A has no additional antiunitary constraint. A symmetry is unitary or antiunitary and its relation is recorded as S H S^{-1}=σH, σ∈{+1,−1}; any additional square relation is part of the declared model data.
```

#### algebraic-topology / confirmed 019: `lem-external-evaluation-detects-tensor-square-operations`

- Location: **Statement**; source lines 36.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The displayed statement prints formula notation as ordinary text, including raw carets, underscores, and an unformatted product and map, rather than typeset mathematics.
- Future repair: Wrap the mathematical expressions in valid inline or display math delimiters so the statement renders as mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-external-evaluation-detects-tensor-square-operations--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-external-evaluation-detects-tensor-square-operations.md).

Exact frozen source lines:

```text
36: Assume AC. For every d,e≥0, let X_d=(RP^L)^(d+1), X_e=(RP^L)^(e+1), with L≥max(d,e)+1 and P_d=∏x_i, P_e=∏y_j. The map A^d⊗A^e→H*(X_d;F₂)⊗H*(X_e;F₂), a⊗b↦a(P_d)⊗b(P_e), is injective; under Künneth, external products jointly detect every homogeneous tensor of square operations.
```

#### algebraic-topology / confirmed 020: `lem-finite-thom-classifying-detector-map-exists-and-is-continuous`

- Location: **Statement**; source lines 37.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement displays raw formula syntax and underscores inline with prose (for example B_d, r+d_b, and f_r:T_r→P_r) instead of typeset math.
- Future repair: Put the formula notation in valid LaTeX math delimiters throughout the statement.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-finite-thom-classifying-detector-map-exists-and-is-continuous--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-finite-thom-classifying-detector-map-exists-and-is-continuous.md).

Exact frozen source lines:

```text
37: Assume AC and the construction of [[def-finite-thom-classifying-detector-map]], using the single global basis B=⋃_{d≥0}B_d and section fixed there. For every r≥2, the initial segment B(r)=⋃_{0≤d<r}B_d is finite; for each b∈B_d with d_b=d, the coordinate class m̄_{b,r}∈H̃^{r+d_b}(T_r;F₂) has a based representative f_{r,b}:T_r→K(F₂,r+d_b) representing that class; and the coordinate family uniquely defines a continuous based map f_r:T_r→P_r.
```

#### algebraic-topology / confirmed 021: `lem-finite-thom-classifying-detector-map-exists-and-is-continuous`

- Location: **Proof**; source lines 53.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: Most mathematical notation in the proof step is rendered as literal baseline characters, including underscores and arrow notation.
- Future repair: Wrap the inline formulas in valid LaTeX math delimiters so subscripts, arrows, and symbols are typeset.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-finite-thom-classifying-detector-map-exists-and-is-continuous--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-finite-thom-classifying-detector-map-exists-and-is-continuous.md).

Exact frozen source lines:

```text
53: 1.1 This initial segment is finite: each Q^d is a quotient of the finite-dimensional M^d, and there are only r degrees in the union. For b∈B_d, the stable coordinate isomorphism M^d→H̃^{r+d}(T_r;F₂) supplies the rank-r class m_{r,b} from the same fixed stable element m_b. Let f_{r,b}:T_r→K(F₂,r+d) classify m_{r,b}, using the published Eilenberg–Mac Lane representability theorem. Set $P_r=\prod_{b\in B(r)}K(\mathbb F_2,r+d_b)$ and $f_r=(f_{r,b})_{b\in B(r)}$. [given, F1, F2, F3]
```

#### algebraic-topology / confirmed 022: `lem-graded-c-n-modules-equivalent-to-ungraded-c-n-1-modules`

- Location: **Title**; source lines 4.
- Pages: `real-clifford-modules-ko-and-abs-orientations`.
- Visible defect: The item title visibly prints literal underscores in C_n and C_(n−1).
- Future repair: Format the Clifford algebra symbols as math in the rendered title, or spell them out in plain text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-graded-c-n-modules-equivalent-to-ungraded-c-n-1-modules--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-graded-c-n-modules-equivalent-to-ungraded-c-n-1-modules.md).

Exact frozen source lines:

```text
4: title: "Graded C_n modules and ungraded C_(n−1) modules"
```

#### algebraic-topology / confirmed 023: `lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy`

- Location: **Statement**; source lines 46.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement's formulas appear as ordinary text, with raw subscripts and tensor/map notation rather than typeset mathematics.
- Future repair: Wrap the mathematical expressions in valid inline math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy.md).

Exact frozen source lines:

```text
46: Assume AC. Let Y be a simply connected space and n≥2. If π_j(Y) is torsion for 2≤j<n, then H_j(Y;Q)=0 for 0<j<n and actual Hurewicz induces an isomorphism π_n(Y)⊗Q→H_n(Y;Q). CW type is not required.
```

#### algebraic-topology / confirmed 024: `lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy`

- Location: **Proof**; source lines 64.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The proof step prints subscripts and group notation as raw baseline text (such as Y_2, Y_j, and π_i), not typeset mathematical expressions.
- Future repair: Wrap the inline mathematical notation in valid math delimiters so subscripts and symbols render correctly.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy.md).

Exact frozen source lines:

```text
64: 1.1 A based weak CW approximation L→Y induces isomorphisms on homotopy, integral homology and rational homology. Hurewicz naturality therefore reduces the claim to L. Choose its prescribed vertex as basepoint. It is simply connected. We describe a finite sequence of CW spaces Y_2=L, Y_3,...,Y_n with Y_j (j−1)-connected, and maps Y_{j+1}→Y_j inducing isomorphisms on π_i for i>j and on rational homology in every degree. [given, F1, F4]
```

#### algebraic-topology / confirmed 025: `thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber`

- Location: **Proof technique**; source lines 48.
- Pages: `the-serre-spectral-sequence-and-applications`.
- Visible defect: The proof-technique label visibly includes literal dollar delimiters around E_2.
- Future repair: Remove the dollar characters or encode the formula using the renderer's supported math markup.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber.md).

Exact frozen source lines:

```text
48: **Proof technique:** finite-generation control on the $E_2$ page followed by Noetherian subquotients and finite extensions.
```

#### algebraic-topology / confirmed 026: `lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q`

- Location: **Statement**; source lines 55.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The mathematical statement appears as plain text: expressions such as K_q=K(Z/2,q) and H_n(K_q;Z) are not typeset, leaving subscripts and formula syntax visible.
- Future repair: Wrap the mathematical expressions in inline or display math delimiters so the statement renders with mathematical notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q.md).

Exact frozen source lines:

```text
55: Assume AC. For every q≥1 and every CW model K_q=K(Z/2,q), H_n(K_q;Z) is finitely generated for every n; for n>0 it is a finite 2-primary group. For every field F of characteristic different from two, H_n(K_q;F)=H^n(K_q;F)=0 for n>0 and H_0=H^0=F. The F₂ homology and cohomology are finite-dimensional degreewise, with H^i=0 for 0<i<q and H^q=F₂ with its normalized fundamental class. Positive integral cohomology is finite 2-primary. These are homological finite-type assertions, not finite-cell claims about arbitrary CW models.
```

#### algebraic-topology / confirmed 027: `lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q`

- Location: **Proof**; source lines 75.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The proof’s mathematical notation is plain text, including K_1, RP∞, BSO(1), π₁, and F-cohomology expressions, rather than rendered formulas.
- Future repair: Add math delimiters around formula expressions throughout the proof while preserving the prose.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q.md).

Exact frozen source lines:

```text
75: 1.1 Proof of the base case. Take K_1=BO(1)=RP∞. Its orientation double cover is BSO(1)=V_1(R∞), contractible by the published stable-Stiefel theorem. The oriented-Grassmannian definition supplies this literal double cover. The covering homotopy lifting and fibration long exact sequence give π₁=Z/2 and no higher homotopy groups. The Schubert CW construction has one cell in each nonnegative degree (rank-one symbol a₁=d+1); thus its integral cellular chains are finite free in each degree. Cellular homology and Noetherian submodules give integral finite generation. The finite-cover transfer, with $d=2$, identifies its F-cohomology with that of its contractible cover, hence it vanishes in positive degrees. Field evaluation UCT identifies cohomology with the dual of homology; a nonzero vector has a nonzero functional under AC, so field homology also vanishes. Marked homotopy uniqueness transports all these facts to any chosen CW model. [given, F1, F5]
```

#### algebraic-topology / confirmed 028: `lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms`

- Location: **Statement**; source lines 33.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The entire statement’s formulas are displayed as ordinary text, including f:W→X, π_i(f)⊗Q, and H_i(f;Q).
- Future repair: Use inline math delimiters for the mathematical expressions in the statement.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms.md).

Exact frozen source lines:

```text
33: Assume AC. Let f:W→X be a based map of 2-connected CW complexes and let D≥2. If π_i(f)⊗Q is an isomorphism for 2≤i≤D and a surjection for i=D+1, then H_i(f;Q) is an isomorphism for 0≤i≤D.
```

#### algebraic-topology / confirmed 029: `lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms`

- Location: **Proof**; source lines 49, 51.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: Proof formulas are shown as plain text, including the mapping-path fibration and homotopy groups, so indices and mathematical structure are not typeset.
- Future repair: Wrap the formula expressions in math delimiters throughout the proof.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms.md).

Exact frozen source lines:

```text
49: 1.1 Let F→E_f→X be the actual mapping-path fibration. The fiber exact sequence gives F path-connected and simply connected, because π_1(W)=π_1(X)=π_2(X)=0. All groups in its relevant higher exact segments are abelian. Exactness of rationalization from the rationalization lemma gives, for 2≤j≤D, zero π_j(F)⊗Q: the adjacent map π_{j+1}(W)⊗Q→π_{j+1}(X)⊗Q is surjective, and π_j(W)⊗Q→π_j(X)⊗Q is injective. The endpoint j=D uses precisely the stipulated surjection. [given, F1, F2]
51: 2.1 Inductively apply the rational first-Hurewicz lemma to F for j=2,...,D. Its lower homotopy groups are torsion, so H_j(F;Q)=0 in that range; H_1(F;Q)=0 by simple connectivity. In the rational Serre sequence over X, every term with 0<b≤D is zero. For a≤D the bottom-row term E^2_{a,0}=H_a(X;Q) has no incoming differential and no nonzero outgoing differential: each outgoing target has fiber degree r−1≤a−1≤D−1. There are no other nonzero stable filtration terms of total degree at most D. The base edge p_*:H_i(E_f;Q)→H_i(X;Q) is therefore an isomorphism through D. The inclusion j_f:W→E_f is a homotopy equivalence and p_f j_f=f, so the asserted isomorphism is H_i(f;Q). This proves the limited comparison locally; it does not invoke a mod-torsion Whitehead theorem. [step 1.1, F2, F3] ∎
```

#### algebraic-topology / confirmed 030: `lem-oriented-grassmannian-has-two-lifted-schubert-cells`

- Location: **Statement**; source lines 37.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement presents its formulas literally as text (for example Gr⁺_n(R∞), BSO(n), and RP∞) rather than rendered mathematical notation.
- Future repair: Add inline math delimiters around mathematical expressions in the statement.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-oriented-grassmannian-has-two-lifted-schubert-cells--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-oriented-grassmannian-has-two-lifted-schubert-cells--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-oriented-grassmannian-has-two-lifted-schubert-cells.md).

Exact frozen source lines:

```text
37: Assume AC, inherited from the cited bundle, cohomology, or operation suppliers. For n≥1, the forgetful map Gr⁺_n(R∞)=BSO(n)→Gr_n(R∞)=BO(n) is a two-sheeted cover, including n=1, where it is S∞→RP∞. Each Schubert cell has exactly two lifted cells, and these cells give BSO(n) the CW weak topology with finite boundary support. Set BSO(0) to the point.
```

#### algebraic-topology / confirmed 031: `lem-oriented-grassmannian-has-two-lifted-schubert-cells`

- Location: **Proof**; source lines 55, 57, 59.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The proof uses unformatted formula text for key names and maps, including BSO(n), Gr⁺_n(R∞), and v↦Rv.
- Future repair: Wrap mathematical expressions in inline math delimiters throughout the proof.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-oriented-grassmannian-has-two-lifted-schubert-cells--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-oriented-grassmannian-has-two-lifted-schubert-cells--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-oriented-grassmannian-has-two-lifted-schubert-cells.md).

Exact frozen source lines:

```text
55: 1.1 For n≥1, forgetting orientation is genuinely a two-sheeted cover BSO(n)=Gr⁺_n(R∞)→BO(n)=Gr_n(R∞) in the chosen model. On a base graph chart, Gram–Schmidt supplies a continuous orthonormal frame of the tautological bundle. Its two possible orientations give two disjoint open subsets of the oriented chart, each mapped homeomorphically to the base chart. These charts cover BO(n). This includes n=1: SO(1) is trivial, Gr⁺_1(R∞)=S∞, and forgetting orientation is v↦Rv from the unit sphere to RP∞; over a chart with a chosen unit representative it has the two sections v and −v. Rank zero is excluded here and treated as a point below. [given, F1]
57: 2.1 Lift each Schubert characteristic disk D^d→BO(n) to its two sheets; this is possible because the disk is contractible, and the two lifts restrict to the two lifts over every boundary cell. Choose a label for the two lifts of each cell using AC. Their open interiors map homeomorphically to the underlying Schubert open cell, and the lifted boundary maps into the inverse image of the lower Schubert skeleton. Thus these disks supply attaching maps with finite boundary support. Each finite Schubert skeleton is compact Hausdorff with finitely many cells; its two-sheeted preimage is compact Hausdorff, and the finite attaching quotient maps continuously and bijectively onto that preimage. It is therefore a homeomorphism. [step 1.1, F2, F4]
59: 3.1 The infinite topology is the weak topology of these lifted cells. To check the nontrivial direction, let C be a subset whose inverse image in every lifted characteristic disk is closed. Over any evenly covered open set U of BO(n), restrict to one sheet U⁺. On each base characteristic disk, the preimage of U splits into relatively open-and-closed pieces on which a chosen lift lies in U⁺; the lifted-cell test makes the preimage of C∩U⁺ closed on each such piece, hence on the preimage of U. Therefore the preimage of U⁺\C is open relative to the preimage of U. Since that preimage of U is open in each characteristic disk, this restricted preimage is open in the full disk. The base CW weak-topology test makes U⁺\C open in U⁺, hence C∩U⁺ closed there. The same holds on the other sheet, and these sheets cover BSO(n), so C is closed upstairs. Conversely a closed subset has closed inverse image under each characteristic map by continuity. The lift topology is therefore exactly the CW weak topology. Finite cell counts in each dimension and closure finiteness are inherited from the Schubert structure, with two lifts per cell. For n=0, BSO(0) is a point by the published definition. This is the lifted-cover CW prerequisite of the shared MSO prespectrum definition. [step 2.1, F2, F3] ∎
```

#### algebraic-topology / confirmed 032: `lem-weak-join-classifying-model-is-a-cw-k-g-one`

- Location: **Statement**; source lines 40.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The weak-join notation is rendered as ordinary text, e.g. B_wG, J(G), and K(G,1), exposing the underscore and untypeset formulas.
- Future repair: Typeset the model names and other mathematical notation using inline math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-weak-join-classifying-model-is-a-cw-k-g-one--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-weak-join-classifying-model-is-a-cw-k-g-one--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-weak-join-classifying-model-is-a-cw-k-g-one.md).

Exact frozen source lines:

```text
40: Assume AC. For every discrete group G, J(G) and B_wG are CW complexes; J(G) is path-connected and weakly contractible, and J(G)→B_wG is a covering with fiber G. Therefore B_wG is a marked K(G,1), with the marking that sends a loop whose lift from the vertex $(0,1_G)$ ends at $(0,g)$ to $g^{-1}$, using left-to-right loop concatenation. For H≤G, B_wH embeds as a CW subcomplex of B_wG. Every finite set of cells of B_wG lies in B_wH for a finitely generated subgroup H≤G.
```

#### algebraic-topology / confirmed 033: `lem-weak-join-classifying-model-is-a-cw-k-g-one`

- Location: **Proof**; source lines 60, 62, 66.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The proof likewise leaves mathematical notation such as J(G), B_wG, U_s, and t_s in plain text; formula typography is inconsistent with the rendered Facts section.
- Future repair: Apply inline math delimiters consistently to formula expressions throughout the proof.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-weak-join-classifying-model-is-a-cw-k-g-one--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-weak-join-classifying-model-is-a-cw-k-g-one--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-weak-join-classifying-model-is-a-cw-k-g-one.md).

Exact frozen source lines:

```text
60: 1.1 Each simplex is a closed finite-dimensional disk with its usual faces, attached to the previously constructed skeleton. Its boundary has finitely many faces. The finite-boundary-support CW construction gives J(G) and its weak topology, with disjoint simplex interiors. The action preserves faces and their slot ordering, and is free: any occupied slot has label g, and gh=g forces h=1. Distinct vertices of a simplex have different slots, so no nonidentity action identifies two points within one simplex. For B_wG choose one representative for each orbit of simplices, oriented in increasing slot order. Their disks attach by their face orbits, with finite boundary support and disjoint interiors. A set is closed in this cell construction exactly when its inverse image is closed on each simplex of J(G); that is also the orbit-quotient closed-set criterion. Thus the constructed CW topology is exactly the orbit topology. [given, F1, F2, F5]
62: 2.1 Let t_s be the weight in slot s. It is continuous by the map-out criterion on each characteristic simplex. On its positive locus the label g_s is continuous into discrete G: the open star of (s,g) is the locus t_s>0, g_s=g, checked on each simplex. Let U_s⊂B_wG be t_s>0. Normalizing a representative by right multiplication by g_s^{-1} defines a section on U_s, since (x h)(g_s h)^{-1}=x g_s^{-1}. On the corresponding open sets the normalizing map is continuous, as is seen on every characteristic simplex with its fixed slot labels. Its descended section is continuous by the quotient criterion restricted to the saturated open preimage. The maps (b,h)↦s_s(b)h and x↦(p(x),g_s(x)) are continuous inverses between U_s×G and p^{-1}U_s. These are ordinary covering charts because G is discrete. The charts cover B_wG. [step 1.1, F1]
66: 4.1 The covering is a fibration by the published covering-lifting lemma. Fix the vertex $(0,1_G)$ upstairs and its image downstairs. Lifting a loop gives a unique endpoint $(0,g)$; the marking is $[\alpha]\mapsto g^{-1}$. For successive loops with endpoints $a$ and $b$, the second lift starting at $(0,a)$ is the right translate by $a$ of its lift from $(0,1_G)$, so the concatenated endpoint is $ba$. Taking inverses makes the marking a homomorphism for left-to-right loop concatenation. It is surjective because the total space is path connected; its kernel is zero because a closed lifted loop is nullhomotopic in the simply connected total space and its nullhomotopy projects downstairs. The fibration exact sequence and the discrete fiber give $\pi_i(B_wG)=0$ for $i>1$. Hence this is the stated marked CW $K(G,1)$. [step 3.1, F3]
```

#### algebraic-topology / confirmed 034: `thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2`

- Location: **Statement**; source lines 39.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement formulas appear as plain text, including π_i(T_r), f_r, and F₂^{B_n}; the target and index notation is not mathematically typeset.
- Future repair: Wrap the displayed mathematical expressions in inline math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2.md).

Exact frozen source lines:

```text
39: Assume AC. For r≥2, f_r induces π_i(T_r)≅π_i(P_r) for 1≤i≤2r−2. On π_{r+n}, for 0≤n≤r−2, the target is F₂^{B_n} and its coordinates are evaluation on the chosen stable Thom classes.
```

#### algebraic-topology / confirmed 035: `thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2`

- Location: **Proof**; source lines 55, 57.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The proof contains extensive unformatted formula text (including T_r, P_r, K(F₂,q), and π_i), visible as literal underscores and baseline indices.
- Future repair: Add math delimiters around formula expressions in the proof, including formulas in later proof steps.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2.md).

Exact frozen source lines:

```text
55: 1.1 By the connectivity lemma, $T_r$ is a simply connected CW complex. The target P_r is a finite product of K(F₂,q) with q≥r≥2, hence path-connected and simply connected; we do not assume its ordinary product topology is a CW topology. Apply the arbitrary-target extension by relative CW approximation to replace $f_r$ by a CW extension pair, then the integral homology-to-homotopy comparison theorem with $N=2r-1$. The integral comparison supplies the exact homology hypotheses, so $f_r$ induces $\pi_i$ isomorphisms for $1\le i<N$, namely through $2r-2$. The same comparison also gives surjectivity at $\pi_{2r-1}$; only the isomorphisms through $2r-2$ are needed here, and no conclusion at $\pi_{2r}$ is supplied. [given, F1, F2]
57: 2.1 A factor K(F₂,r+d_b) has its only nonzero positive homotopy group F₂ in degree r+d_b. Coordinatewise homotopy groups of a finite product are the products of the factor groups, as proved in the finite-product homotopy computation. Hence at i=r+n the target is F₂^{B_n}. The induced coordinate on a sphere class [α:S^{r+n}→T_r] is ⟨m_{r,b}, α_*[S^{r+n}]_{F₂}⟩ = ⟨α^*m_{r,b},[S^{r+n}]_{F₂}⟩, by representability and the normalized fundamental class. The cutoff i≤2r−2 is equivalent to r≥n+2. [step 1.1, F1, F3] ∎
```

#### algebraic-topology / confirmed 036: `lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree`

- Location: **Statement**; source lines 43.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The homotopy and rational coefficient formulas appear as plain ASCII-style notation (including π_i and S^m) instead of typeset mathematics.
- Future repair: Wrap the mathematical expressions in supported math delimiters so the statement formulas render as mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree.md).

Exact frozen source lines:

```text
43: Assume AC. For m≥2 and 1≤i≤2m−2, π_i(S^m)⊗Q is Q if i=m and zero otherwise. Hurewicz after tensoring with Q is an isomorphism in all these degrees; in degree m its integral version is the standard orientation-generator isomorphism; no finiteness of the torsion groups is asserted.
```

#### algebraic-topology / confirmed 037: `lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree`

- Location: **Proof**; source lines 63.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The proof mixes rendered inline math with plain formula strings such as H^a(K(Z,m);Q)=0 and 0<a<2m, leaving the formula syntax visibly untypeset.
- Future repair: Put the formula strings in supported math delimiters and use consistent mathematical notation throughout the proof paragraph.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree.md).

Exact frozen source lines:

```text
63: 1.1 Give $S^m$ its CW structure with a basepoint vertex and one $m$-cell. The high-relative-cells lemma applied to $(S^m,*)$ makes it $(m-1)$-connected, so the absolute first-Hurewicz theorem applies in degree $m$. Represent the integral orientation class of S^m by a based map f:S^m→K(Z,m). Universal evaluation and first Hurewicz make its degree-m homotopy map an isomorphism. Let F be its strict homotopy fiber. The exact sequence shows F is m-connected. The locally rederived rational cohomology calculation in the rational $K(\mathbb Z,n)$ calculation gives H^a(K(Z,m);Q)=0 for 0<a<2m, a≠m. Its full algebraic-dual identification with homology implies H_a(K(Z,m);Q)=0 in those degrees: a nonzero vector would have a nonzero detecting functional under AC. H_m(K(Z,m);Q)=Q also follows directly from integral first Hurewicz and the rationalization lemma. No finite-dimensional hypothesis is being inferred without proof. In particular H_{d+1}(K(Z,m);Q)=0 for m+1≤d≤2m−2. [given, F1, F2]
```

#### algebraic-topology / confirmed 038: `lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology`

- Location: **Statement**; source lines 45.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The displayed algebra identification is emitted as baseline text (M=F₂[w₁,w₂,…]U) rather than typeset mathematics.
- Future repair: Wrap the algebra identification in supported math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology.md).

Exact frozen source lines:

```text
45: Assume AC, inherited from the cited bundle, cohomology, or operation suppliers. Assume the displayed identification M=F₂[w₁,w₂,…]U and the formulas of [[def-whitney-sum-coalgebra-on-stable-unoriented-thom-cohomology]]. Then Δ_M:M→M⊗M is a degree-preserving coassociative coproduct, ε_M is a counit, and η(1)=U is a coaugmentation. M is connected and nonnegatively graded. For each p,q, the rankwise Thom pullback induced by γ_p⊕γ_q agrees with Δ_M under the Thom isomorphisms, commutes with the fixed-coordinate stabilization in each factor, and therefore induces the stated map on the degreewise inverse-limit invariant.
```

#### algebraic-topology / confirmed 039: `lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology`

- Location: **Proof**; source lines 63.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: Displayed coproduct formulas in the proof are plain text with literal indices and operators; the same untypeset notation continues in the rank-transition formulas and the next proof step.
- Future repair: Wrap the coproduct formulas and indexed expressions in supported math delimiters, and format the displayed stabilization square as mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology.md).

Exact frozen source lines:

```text
63: 2.1 w_k U ↦ Σ_{i+j=k}(w_iU)⊗(w_jU), U ↦ U⊗U. Indeed, the base class pulls back by w_k(E⊕F)=Σw_i(E)w_j(F), and the Thom class pulls back to the external product of the two normalized Thom classes. This formula is independent of the chosen classifying maps. In the following square, μ_{p,q} also denotes the induced based Thom multiplication T_p∧T_q→T_{p+q}; its cohomology pullback is the rankwise map just computed. Compatibility with rank transitions is the cohomological commutativity of this square for stabilization of the first factor: H̃^{p+q+1+d}(T_{p+q+1}) --μ_{p+1,q}^*--> H̃^{p+q+1+d}(T_{p+1}∧T_q) | ρ_{p+q}(d) | ρ_p(a)⊗id v v H̃^{p+q+d}(T_{p+q}) --μ_{p,q}^*----> H̃^{p+q+d}(T_p∧T_q), where on a Künneth summand a+b=d, the right vertical map applies ρ_p(a) to the first factor and the identity to the second. On bundles, the two composites classify respectively (ε¹⊕γ_p)⊕γ_q and ε¹⊕(γ_p⊕γ_q); associativity and the coordinate permutation of the ordered direct sum give the bundle isomorphism over fixed-coordinate stabilization. It preserves mod-two Thom normalization, and the Whitney formula leaves each w_i unchanged under adjoining the trivial line (with indices above a finite rank truncated to zero). Naturality and homotopy uniqueness of the classifying maps therefore make the square commute. The same argument stabilizes the second factor. Consequently the rankwise pullbacks define a map Δ_M:M^d→⊕_{a+b=d}M^a⊗M^b. [step 1.1, F1, F2]
```

#### algebraic-topology / confirmed 040: `thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r`

- Location: **Statement**; source lines 40.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The main map and cohomology groups are displayed as baseline formula notation (for example f_r and H̃ᵏ) instead of typeset mathematics.
- Future repair: Wrap the detector and cohomology expressions in supported math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r.md).

Exact frozen source lines:

```text
40: Assume AC. For the detector f_r:T_r→P_r, the pullback f_r*:H̃ᵏ(P_r;F₂)→H̃ᵏ(T_r;F₂) is an isomorphism for every k<2r. No comparison is asserted at k=2r.
```

#### algebraic-topology / confirmed 041: `thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r`

- Location: **Proof**; source lines 56, 58, 60, 62, 64.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: Proof formulas and indexed cohomology expressions throughout steps 1.1–5.1 are rendered as plain text, including H̃^k(T_r)=0 and K(F₂,r+d_b), with no mathematical typesetting.
- Future repair: Wrap all proof formulas in supported math delimiters and use consistent mathematical notation for indexed spaces and cohomology groups.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r.md).

Exact frozen source lines:

```text
56: 1.1 For k<r, the Thom-cell description gives H̃^k(T_r)=0. Every factor K(F₂,r+d_b) is (r−1)-connected, so the finite product has zero reduced cohomology in degrees below r. Thus f_r^* is an isomorphism in this range. [given, F1]
58: 2.1 Now let r≤k<2r and put e=k−r, so 0≤e≤r−1. The stable-coordinate isomorphism gives H̃^k(T_r;F₂) ≅ M^e = ⊕_{b∈B(r), d_b≤e} A^{e−d_b}m_b. The last equality is the graded free-module decomposition; generators with d_b>e cannot contribute because A has no negative degrees. [step 1.1, F2, F3]
60: 3.1 The strict metastable theorem gives, strictly for 0≤i<q, H̃^{q+i}(K(F₂,q);F₂) ≅ A^i, a ↦ a(ι_q). For a factor indexed by b∈B_d, q=r+d. In total degree k<2r, its operation degree is i=k−q=e−d. When i≥0, i ≤ r−d−1 < r+d=q, so the strict Eilenberg–Mac Lane theorem applies. A product of two positive-degree polynomial generators, whether in one factor or in two factors, has degree at least 2r because every q≥r. Hence below 2r the cohomology of the finite product P_r is the direct sum of the single-factor operation classes $\widetilde H^k(P_r;\mathbb F_2)\cong\bigoplus_{b\in B(r),\,d_b\le e}\mathcal A^{e-d_b}$. [step 2.1, F2]
62: 4.1 H̃^k(P_r;F₂) ≅ ⊕_{b∈B(r), d_b≤e} A^{e−d_b}. Here finite-product Künneth applies: each factor has finite-dimensional F₂ homology in every degree by the finite-type lemma, hence finite-free homology over F₂; the polynomial presentation of the Eilenberg–Mac Lane cohomology gives the stated cohomology basis. The classifying-map evaluation identity gives $f_r^*(a(\iota_{r+d_b}))=a(m_{r,b})$. [step 3.1, F2, F3]
64: 5.1 Under the stable-coordinate identification, the right side is exactly a·m_b. The free-module decomposition above says these classes form a basis of H̃^k(T_r). Thus f_r^* is an isomorphism for every k<2r. The endpoint is intentionally excluded. At degree 2r, products of two degree-r classes can occur in P_r, and the strict Eilenberg–Mac Lane computation does not identify them by the argument above. No claim at 2r is used. [step 4.1, F3] ∎
```

#### algebraic-topology / confirmed 042: `def-abs-cokernel-and-clifford-symbol`

- Location: **Definition**; source lines 32.
- Pages: `real-clifford-modules-ko-and-abs-orientations`.
- Visible defect: The screenshot renders the formula notation as ordinary ASCII text (including C_n, M^0, π^*, c(v), and C_(n+1)) rather than typeset mathematics throughout the definition.
- Future repair: Wrap the mathematical expressions in supported math delimiters and use renderer-compatible subscripts, superscripts, and operators.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/def-abs-cokernel-and-clifford-symbol--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/def-abs-cokernel-and-clifford-symbol.md).

Exact frozen source lines:

```text
32: For C_n=Cl(ℝ^n,−‖·‖²), a finite-dimensional graded real module M=M^0⊕M^1 determines the ABS symbol triple (π^*M^0,π^*M^1,c(v)) on the disk/sphere pair of ℝ^n: over a nonzero vector v, Clifford multiplication c(v) is an isomorphism because c(v)^2=−‖v‖²I. Its relative KO class is the candidate symbol. The separate theorem proves that the symbol vanishes on restrictions from C_(n+1), descends to A_n, and is an isomorphism.
```

#### algebraic-topology / confirmed 043: `def-clifford-module-restriction-cokernel-a-n`

- Location: **Definition**; source lines 32.
- Pages: `real-clifford-modules-ko-and-abs-orientations`.
- Visible defect: The screenshot shows the notation in the entire definition as plain ASCII (for example C_n, r_n, M_{n+1}, and A_n=coker(r_n)) rather than typeset mathematics.
- Future repair: Set the mathematical expressions in supported math delimiters with proper subscripts, superscripts, and operator formatting.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/def-clifford-module-restriction-cokernel-a-n--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/def-clifford-module-restriction-cokernel-a-n.md).

Exact frozen source lines:

```text
32: For n≥0 put C_n=Cl(ℝ^n,−‖·‖²). Let M_n be the Grothendieck group of finite-dimensional real Z/2-graded left C_n-modules and let r_n:M_{n+1}→M_n be restriction along the standard inclusion of the first n Clifford generators. Define A_n=coker(r_n). For n=0 the grading is retained, so M_0≅Z⊕Z from even and odd dimensions; no parity type is identified with a volume-element eigenspace.
```

#### algebraic-topology / confirmed 044: `ex-the-zero-stem-is-the-integers`

- Location: **Verification**; source lines 48.
- Pages: `spectra-and-stable-homotopy-groups-examples`.
- Visible defect: The rendered verification shows the entire inline \begin{CD} diagram as literal red LaTeX on its own line instead of a commutative square.
- Future repair: Replace the CD environment with a renderer-supported display (for example, a supported aligned array) and verify the diagram renders.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/ex-the-zero-stem-is-the-integers--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/ex-the-zero-stem-is-the-integers.md).

Exact frozen source lines:

```text
48: $$ \begin{CD} \pi_n(S^n) @>E>> \pi_{n+1}(S^{n+1})\\ @V\deg VV @VV\deg V\\ \mathbb Z @= \mathbb Z \end{CD} $$
```

#### algebraic-topology / confirmed 045: `lem-rational-hurewicz-for-arbitrary-wedges-of-high-dimensional-spheres`

- Location: **Statement**; source lines 37.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The screenshot displays the statement’s mathematical notation as plain text (e.g. π_i(W)⊗Q, H_i(W;Q), and the range 1≤i≤2c−2), without mathematical typesetting.
- Future repair: Wrap the mathematical notation in supported math delimiters and render the range and groups as typeset formulas.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-rational-hurewicz-for-arbitrary-wedges-of-high-dimensional-spheres--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-rational-hurewicz-for-arbitrary-wedges-of-high-dimensional-spheres--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-rational-hurewicz-for-arbitrary-wedges-of-high-dimensional-spheres.md).

Exact frozen source lines:

```text
37: Assume AC. Let W be the CW wedge of any set of spheres of dimensions at least c≥2. For 1≤i≤2c−2, π_i(W)⊗Q and H_i(W;Q) are the direct sum of Q indexed by spheres of dimension i, and actual Hurewicz identifies their orientation generators.
```

#### algebraic-topology / confirmed 046: `thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1`

- Location: **Statement**; source lines 40.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The screenshot renders the statement formulas as unstyled literal text, including f_r, f_{r*}, H_i, and the endpoint range, rather than typeset mathematics.
- Future repair: Put the mathematical expressions in supported math delimiters with proper subscripts and superscripts.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1.md).

Exact frozen source lines:

```text
40: Assume AC. For f_r:T_r→P_r, f_{r*}:H_i(T_r;Z)→H_i(P_r;Z) is an isomorphism for i<2r−1 and a surjection for i=2r−1. No endpoint injectivity is asserted.
```

#### algebraic-topology / confirmed 047: `thm-integral-finite-generation-of-mo-and-mso-homology`

- Location: **Statement**; source lines 53.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The screenshot shows the statement’s formula-heavy notation as ordinary unformatted characters, including H_i, MO(r), MSO(r), γ_r, and O_Z(γ_r).
- Future repair: Wrap mathematical notation in supported math delimiters and use typeset subscripts, superscripts, and symbols.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-integral-finite-generation-of-mo-and-mso-homology--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-integral-finite-generation-of-mo-and-mso-homology--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-integral-finite-generation-of-mo-and-mso-homology--03.png), [tile 04](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/thm-integral-finite-generation-of-mo-and-mso-homology--04.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/thm-integral-finite-generation-of-mo-and-mso-homology.md).

Exact frozen source lines:

```text
53: Assume AC. For every r≥0 and every i≥0, H_i(MO(r);Z) and H_i(MSO(r);Z) are finitely generated. For positive rank the locally constructed homological Thom comparison is H_i(D(γ_r),S(γ_r);Z)=H_{i−r}(BO(r);O_Z(γ_r)), and likewise for γ_r⁺ with the constant orientation system. The disk/sphere quotient identifies these groups with reduced Thom homology. At rank zero the based quotient is B₊; BO(0)=BSO(0)=* gives S⁰ and is handled separately.
```

#### algebraic-topology / confirmed 048: `ex-universal-thom-class-steenrod-operation`

- Location: **Verification**; source lines 41.
- Pages: `thom-spectra-and-unoriented-bordism-detection-examples`.
- Visible defect: Carets and underscores in the mathematical notation appear literally in the rendered verification text, while nearby formulas in the item are typeset.
- Future repair: Put the formulas in inline math, for example `$Sq^i(U)$`, `$w_i(\gamma_r)u_r$`, and `$w_3(\gamma_2)=0$`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/ex-universal-thom-class-steenrod-operation--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/ex-universal-thom-class-steenrod-operation.md).

Exact frozen source lines:

```text
41: 1.1 The stable-square supplier identifies every component of Sq^i(U) with w_i(γ_r)u_r and proves compatibility under the inverse-system maps. The rank bound makes w₃(γ₂)=0; instability kills Sq³ on the degree-2 class u₂. [given, F1]
```

#### algebraic-topology / confirmed 049: `lem-eilenberg-maclane-spaces-of-torsion-abelian-groups-are-rationally-acyclic`

- Location: **Statement**; source lines 47.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement displays mathematical subscripts and the coefficient field as literal baseline text (`H_0`, `H_j`, `K(T,n);Q`) instead of typeset notation.
- Future repair: Typeset the mathematical expressions with inline math delimiters, including `$H_0(K(T,n);\mathbb Q)$` and `$H_j(K(T,n);\mathbb Q)$`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-eilenberg-maclane-spaces-of-torsion-abelian-groups-are-rationally-acyclic--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-eilenberg-maclane-spaces-of-torsion-abelian-groups-are-rationally-acyclic.md).

Exact frozen source lines:

```text
47: Assume AC. If T is any torsion abelian group and n≥1, every CW K(T,n) has H_0(K(T,n);Q)=Q and H_j(K(T,n);Q)=0 for j>0. No cardinality or finite-type restriction is imposed.
```

#### algebraic-topology / confirmed 050: `lem-eilenberg-maclane-spaces-of-torsion-abelian-groups-are-rationally-acyclic`

- Location: **Proof**; source lines 67.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: Proof formulas appear as literal baseline text with underscores and unformatted notation (for example `d_1,...,d_r` and `B_wF`); the issue recurs in the following proof step.
- Future repair: Put variables and formulas in inline math, including `$d_1,\ldots,d_r$` and `$B_wF$`.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-eilenberg-maclane-spaces-of-torsion-abelian-groups-are-rationally-acyclic--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-eilenberg-maclane-spaces-of-torsion-abelian-groups-are-rationally-acyclic.md).

Exact frozen source lines:

```text
67: 1.1 A finitely generated subgroup F of T is finite: if its generators have orders d_1,...,d_r, the product of those cyclic groups surjects onto F. For finite F, the covering J(F)→B_wF has |F| sheets. For each singular simplex, sum all its lifts to obtain a chain map τ. Existence and uniqueness of based lifts apply because a simplex is simply connected; restriction to a face bijects its lift set with that face's lift set. Thus ∂τ=τ∂ and p_#τ=|F| id, including degree zero. These are exactly the lift-sum identities proved in the published transfer supplier. On rational homology, τ_* is injective because p_*τ_*=|F| id. The map J(F)→* is a weak equivalence by the weak-join $K(G,1)$ lemma; the published weak-equivalence/homology lemma and the rationalization lemma give zero positive rational homology of J(F). Therefore B_wF has zero positive rational homology. A rational cellular cycle in B_wT has finite support. Row 3 places all its cells in B_wF for one finitely generated, hence finite, subgroup F. The cellular differential agrees with that in B_wF, and the inclusion of cellular chain groups is injective, so the same chain is a cycle in B_wF. It bounds there by the preceding paragraph, hence bounds in B_wT. Cellular/singular comparison proves positive rational acyclicity. Marked CW uniqueness identifies B_wT with every chosen K(T,1), and homotopy invariance transfers the result. [given, F1, F2, F5]
```

#### algebraic-topology / confirmed 051: `lem-rational-k-z-n-calculation-through-weak-cw-fiber-comparison`

- Location: **Statement**; source lines 47.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement displays symbols such as `K(Z,n)`, `Q[x_n]`, `Λ_Q(x_n)`, and `|x_n|` as unformatted baseline text rather than typeset formulas.
- Future repair: Typeset the mathematical expressions with inline math delimiters, for example `$K(\mathbb Z,n)$`, `$\mathbb Q[x_n]$`, and `$|x_n|=n$`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-rational-k-z-n-calculation-through-weak-cw-fiber-comparison--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-rational-k-z-n-calculation-through-weak-cw-fiber-comparison.md).

Exact frozen source lines:

```text
47: Assume AC. For each marked CW K(Z,n), n≥1, rational cohomology is Q[x_n] when n is even and Λ_Q(x_n) when n is odd, with |x_n|=n and x_n dual to the marked generator. In particular positive rational homology below 2n vanishes except for the one-dimensional group in degree n.
```

#### algebraic-topology / confirmed 052: `lem-rational-k-z-n-calculation-through-weak-cw-fiber-comparison`

- Location: **Proof**; source lines 69.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The surrounding proof contains many unformatted mathematical expressions (including `H^*(K(Z,1);Q)=Λ(x_1)`, `A^0=Q`, and `d_n`); the notation is shown as literal caret and underscore text.
- Future repair: Wrap mathematical notation in inline math throughout the proof, for example `$H^*(K(\mathbb Z,1);\mathbb Q)=\Lambda(x_1)$` and `$d_n$`.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-rational-k-z-n-calculation-through-weak-cw-fiber-comparison--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-rational-k-z-n-calculation-through-weak-cw-fiber-comparison.md).

Exact frozen source lines:

```text
69: 2.1 Use the standard circle CW structure with one vertex and one edge. The real-line covering is a Hurewicz fibration by the covering-homotopy supplier; its contractible total, discrete fiber, and fibration exact sequence give no higher circle homotopy groups, while the published circle fundamental-group theorem marks its degree-one group as $\mathbb Z$. Thus $S^1$ is a marked CW $K(\mathbb Z,1)$. CW uniqueness, sphere homology and field duality give H^*(K(Z,1);Q)=Λ(x_1). Induct on n≥2 using the preceding loop comparison. Write A=H^*(K(Z,n);Q). First integral Hurewicz, the rationalization lemma and field duality give A^0=Q, A^p=0 for 0<p<n and A^n=Q. The rational cohomological Serre sequence of the path fibration has E_2=A⊗H^*(K(Z,n−1);Q): each nonzero fiber degree group is Q, so no infinite-dimensional constant-coefficient identification is being assumed. Its abutment is Q in degree zero and zero elsewhere. [step 1.1, F2, F3]
```

#### algebraic-topology / confirmed 053: `lem-zero-section-proves-injectivity-of-the-thom-unit-orbit`

- Location: **Proof**; source lines 59.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The proof renders formulas as literal caret and underscore notation (`A^d`, `x_i`, `(RP^L)^r`) instead of typeset mathematics; the issue continues in the next proof line.
- Future repair: Put mathematical expressions in inline math, for example `$a\in\mathcal A^d$`, `$x_i$`, and `$X=(\mathbb{RP}^L)^r$`.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-zero-section-proves-injectivity-of-the-thom-unit-orbit--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-zero-section-proves-injectivity-of-the-thom-unit-orbit.md).

Exact frozen source lines:

```text
59: 1.1 Take a nonzero homogeneous a∈A^d. Set r=d+1 and X=(RP^L)^r with L≥d+1. Let x_i be the degree-one generator from factor i and P=x₁⋯x_r. By the leading-monomial lemma, the admissible terms in a have distinct leading monomials on P, so a(P)≠0. [given, F1]
```

#### algebraic-topology / confirmed 054: `lem-universal-real-thom-spaces-are-r-minus-one-connected`

- Location: **Statement**; source lines 29.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The statement displays `T_r`, `γ_r`, and `BO(r)` as raw baseline notation without math typesetting.
- Future repair: Typeset the expression with inline math, for example `$T_r=\operatorname{Th}(\gamma_r\to BO(r))$`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-universal-real-thom-spaces-are-r-minus-one-connected--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-universal-real-thom-spaces-are-r-minus-one-connected.md).

Exact frozen source lines:

```text
29: Assume AC, inherited from the cited bundle, cohomology, or operation suppliers. For each r≥2, T_r=Th(γ_r over BO(r)) is a nonempty (r−1)-connected based CW complex.
```

#### algebraic-topology / confirmed 055: `lem-universal-real-thom-spaces-are-r-minus-one-connected`

- Location: **Proof**; source lines 45.
- Pages: `thom-spectra-and-unoriented-bordism-detection`.
- Visible defect: The proof displays `T_r`, `BO(r)`, and `d+r` as raw baseline notation without math typesetting.
- Future repair: Put the mathematical expressions in inline math, for example `$T_r$`, `$BO(r)$`, and `$d+r$`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-topology/screenshots/lem-universal-real-thom-spaces-are-r-minus-one-connected--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-topology/snapshots/lem-universal-real-thom-spaces-are-r-minus-one-connected.md).

Exact frozen source lines:

```text
45: 1.1 The prespectrum construction constructs T_r as a based CW complex. Over a d-dimensional Schubert cell of BO(r), its Thom attachment contributes cells of dimension d+r, with d≥0; hence every cell outside the basepoint has dimension at least r. Apply the published high-relative-cells lemma to the CW pair (T_r,*): it is (r−1)-connected. In particular T_r is path-connected and simply connected for r≥2. The basepoint is a vertex. [given, F1, F2]
```

