## Category O and Geometric Representation Theory

Completed visual review of **255 items across 24 pages**, with **603 image tiles**. Findings: 29 confirmed, 1 typography. Evidence: [manifest](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/category-review-receipt.json).

### Confirmed rendering defects

#### category-o-and-geometric-representation-theory / confirmed 001: `def-local-intersection-form-for-a-soergel-summand`

- Location: **Title**; source lines 4.
- Pages: `soergel-intersection-forms-and-hodge-theory`.
- Visible defect: The item title is displayed literally; the underscores appear as source characters rather than subscripts.
- Future repair: Use a plain-text display title, or make the title renderer support math before including TeX syntax.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/def-local-intersection-form-for-a-soergel-summand--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/def-local-intersection-form-for-a-soergel-summand.md).

Exact frozen source lines:

```text
4: title: "The local intersection form on Hom(B_y, B_x B_s)"
```

#### category-o-and-geometric-representation-theory / confirmed 002: `def-rational-cherednik-algebra`

- Location: **Title**; source lines 4.
- Pages: `rational-cherednik-algebras-and-category-o`.
- Visible defect: The title shows raw TeX braces and underscore in H_{t,c}(W,h).
- Future repair: Use a plain-text display title or render title math before including TeX syntax.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/def-rational-cherednik-algebra--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/def-rational-cherednik-algebra.md).

Exact frozen source lines:

```text
4: title: "The rational Cherednik algebra H_{t,c}(W,h)"
```

#### category-o-and-geometric-representation-theory / confirmed 003: `def-the-deformed-lefschetz-operator-on-b-x-b-s`

- Location: **Title**; source lines 4.
- Pages: `soergel-intersection-forms-and-hodge-theory`.
- Visible defect: The title shows raw TeX underscores in L_zeta and B_x B_s.
- Future repair: Use a plain-text display title or render title math before including TeX syntax.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/def-the-deformed-lefschetz-operator-on-b-x-b-s--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/def-the-deformed-lefschetz-operator-on-b-x-b-s.md).

Exact frozen source lines:

```text
4: title: "The deformed Lefschetz operator L_zeta on B_x B_s"
```

#### category-o-and-geometric-representation-theory / confirmed 004: `lem-pa36-global-section-unit`

- Location: **Title**; source lines 4.
- Pages: `beilinson-bernstein-localization-and-category-o`.
- Visible defect: The title shows raw TeX underscore in Loc_kappa(V).
- Future repair: Use a plain-text display title or render title math before including TeX syntax.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/lem-pa36-global-section-unit--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/lem-pa36-global-section-unit.md).

Exact frozen source lines:

```text
4: title: The unit V to Gamma Loc_kappa(V) is an isomorphism for antidominant twists
```

#### category-o-and-geometric-representation-theory / confirmed 005: `ex-the-coinvariant-algebra-of-s-three-as-the-longest-soergel-bimodule`

- Location: **Title**; source lines 4.
- Pages: `soergel-intersection-forms-and-hodge-theory-examples`.
- Visible defect: The item title displays S_3 with a literal underscore rather than a subscript.
- Future repair: Use a renderer-supported math title for S_3 or spell it out as “the symmetric group on three letters.”
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/ex-the-coinvariant-algebra-of-s-three-as-the-longest-soergel-bimodule--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/ex-the-coinvariant-algebra-of-s-three-as-the-longest-soergel-bimodule.md).

Exact frozen source lines:

```text
4: title: "The coinvariant algebra of S_3 as the Soergel bimodule of the longest element"
```

#### category-o-and-geometric-representation-theory / confirmed 006: `def-rational-cherednik-category-o`

- Location: **Definition / Internal reference title**; source lines 31.
- Pages: `rational-cherednik-algebras-and-category-o`.
- Visible defect: The linked supplier title displays H_{t,c}(W,h) with literal braces and underscores inside the math notation.
- Future repair: Change the referenced item title to plain-language text or renderer-supported math, so the resolved link title does not expose TeX source.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/def-rational-cherednik-category-o--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/def-rational-cherednik-category-o.md).

Exact frozen source lines:

```text
31: Fix $W,\mathfrak h,c$ as in [[def-rational-cherednik-algebra]] and consider $H_{1,c}(W,\mathfrak h)$. By [[thm-rational-cherednik-pbw-theorem]], the subalgebra generated by $\mathfrak h^*$ is the polynomial algebra $\mathbb C[\mathfrak h^*]=S(\mathfrak h^*)$, and the subalgebra generated by $\mathfrak h$ is $S(\mathfrak h)$.
```

#### category-o-and-geometric-representation-theory / confirmed 007: `ex-the-coinvariant-algebra-of-s-two-and-s-three-as-graded-regular-representations`

- Location: **frontmatter title**; source lines 4.
- Pages: `projective-functors-and-the-soergel-functor-in-category-o-examples`.
- Visible defect: The rendered title shows literal underscores in S_2 and S_3 instead of typeset subscripts.
- Future repair: Wrap the subscripted expressions in math delimiters or use readable Unicode subscripts in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/ex-the-coinvariant-algebra-of-s-two-and-s-three-as-graded-regular-representations--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/ex-the-coinvariant-algebra-of-s-two-and-s-three-as-graded-regular-representations.md).

Exact frozen source lines:

```text
4: title: The coinvariant algebra of S_2 and S_3 as graded regular representations
```

#### category-o-and-geometric-representation-theory / confirmed 008: `ex-wall-crossing-on-projectives-in-the-sl-two-block`

- Location: **frontmatter title**; source lines 4.
- Pages: `projective-functors-and-the-soergel-functor-in-category-o-examples`.
- Visible defect: The rendered title shows a literal underscore in sl_2 instead of a typeset subscript.
- Future repair: Wrap sl_2 in math delimiters or use readable Unicode subscript notation in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/ex-wall-crossing-on-projectives-in-the-sl-two-block--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/ex-wall-crossing-on-projectives-in-the-sl-two-block.md).

Exact frozen source lines:

```text
4: title: Wall-crossing on the projectives in the sl_2 block
```

#### category-o-and-geometric-representation-theory / confirmed 009: `ex-the-kl-multiplicity-matrix-for-the-sl-three-principal-block`

- Location: **frontmatter title**; source lines 4.
- Pages: `the-kazhdan-lusztig-character-and-multiplicity-theorem-examples`.
- Visible defect: The rendered title displays the underscore in sl_3 literally; the surrounding title is plain text rather than typeset math.
- Future repair: Use typographic sl₃ or math-delimited notation in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/ex-the-kl-multiplicity-matrix-for-the-sl-three-principal-block--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/ex-the-kl-multiplicity-matrix-for-the-sl-three-principal-block.md).

Exact frozen source lines:

```text
4: title: "The Kazhdan–Lusztig multiplicity matrix for the sl_3 principal block"
```

#### category-o-and-geometric-representation-theory / confirmed 010: `ex-hard-lefschetz-and-hodge-riemann-relations-for-the-coinvariant-algebra-of-s-three`

- Location: **Title**; source lines 4.
- Pages: `soergel-intersection-forms-and-hodge-theory-examples`.
- Visible defect: The title displays the subgroup as literal `S_3`, unlike the math-rendered occurrences in the body.
- Future repair: Use `S₃` in the plain-text title, or otherwise format the title so the subgroup notation is typeset.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/ex-hard-lefschetz-and-hodge-riemann-relations-for-the-coinvariant-algebra-of-s-three--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/ex-hard-lefschetz-and-hodge-riemann-relations-for-the-coinvariant-algebra-of-s-three.md).

Exact frozen source lines:

```text
4: title: "Hard Lefschetz and the Hodge-Riemann signs for the coinvariant algebra of S_3"
```

#### category-o-and-geometric-representation-theory / confirmed 011: `ex-parabolic-kl-polynomials-for-s-three-modulo-s-two`

- Location: **Title**; source lines 4.
- Pages: `singular-and-parabolic-kazhdan-lusztig-theory-examples`.
- Visible defect: The title displays both subgroup indices as literal underscores (`S_3`, `S_2`), while body occurrences are typeset.
- Future repair: Use `S₃` and `S₂` in the plain-text title, or otherwise format the title so the subgroup notation is typeset.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/ex-parabolic-kl-polynomials-for-s-three-modulo-s-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/ex-parabolic-kl-polynomials-for-s-three-modulo-s-two.md).

Exact frozen source lines:

```text
4: title: "Parabolic Kazhdan–Lusztig polynomials for S_3 modulo S_2"
```

#### category-o-and-geometric-representation-theory / confirmed 012: `lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize`

- Location: **Proof, step 4.1**; source lines 87.
- Pages: `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality`.
- Visible defect: Backslashes are missing throughout this paragraph’s TeX, so command names and relations render as ordinary italic text (for example `operatorname`, `mathfraksl`, and `mathrmGL`) rather than mathematical notation.
- Future repair: Restore the TeX command backslashes in step 4.1 (including `\operatorname`, `\to`, `\otimes`, `\ge`, `\cdot`, `\mathfrak`, `\mathrm`, `\exp`, and `\mathbb`) and re-render the equations.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize--03.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize.md).

Exact frozen source lines:

```text
87: 4.1 Equivariance of the polynomial lift. The extension $F$ on $X$ is equivariant: for every $g$, the two regular maps expressing equivariance agree on the dense orbit by step 1.3 and therefore on $X$. Let $E_K$ be the finite-dimensional rational module of polynomial maps $operatorname{End}(V)	ooperatorname{End}(V^{otimes d})$ of degree at most $K$, for $KgedegPhi$, with action $(gcdotPsi)(Y)=g^{otimes d}Psi(g^{-1}Yg)(g^{-1})^{otimes d}$. Let $I_Ksubset E_K$ consist of maps vanishing on $X$. Then $I_K$ is stable and the class of the lift from step 3.1 in $E_K/I_K$ is invariant. Scalar matrices act trivially on $E_K$: they conjugate neither the input nor the output. For $Nge2$, Weyl's theorem [F3] applied to the semisimple Lie algebra $mathfrak{sl}(V)$ gives an $mathfrak{sl}(V)$-stable complement to $I_K$. This complement is stable under $mathrm{SL}(V)$, since elementary matrices $exp(tE_{ij})$ generate that group and their rational representation acts by exponentiating the differential; together with scalar matrices they generate $mathrm{GL}(V)$ over $mathbb C$. For $N=1$ the whole group acts trivially, so any vector-space complement suffices. The quotient map restricted to this complement is thus a $mathrm{GL}(V)$-isomorphism and lifts the invariant class to an invariant $Phi'in E_K$. It agrees with $F$ on $X$ and satisfies $Phi'(e)=B$, proving (1). [F3, step 1.3, step 3.1, algebra]
```

#### category-o-and-geometric-representation-theory / confirmed 013: `thm-lifting-of-indecomposable-projectives-to-the-deformed-family`

- Location: **Proof technique**; source lines 87.
- Pages: `projective-functors-and-the-soergel-functor-in-category-o`.
- Visible defect: The proof-technique label displays the inline-math delimiters `$R$` literally in the all-caps technique line.
- Future repair: Avoid math delimiters in the plain-text proof-technique field; write `R` or use a renderer-supported inline math form there.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/thm-lifting-of-indecomposable-projectives-to-the-deformed-family--02.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/thm-lifting-of-indecomposable-projectives-to-the-deformed-family.md).

Exact frozen source lines:

```text
87: **Proof technique:** construct relative truncated weight projectives, then lift both maps of an actual split inclusion; no idempotent-lifting assumption on $R$ is used.
```

#### category-o-and-geometric-representation-theory / confirmed 014: `ex-the-rank-two-bott-samelson-bimodule-and-its-character-decomposition`

- Location: **Title**; source lines 4.
- Pages: `soergel-intersection-forms-and-hodge-theory-examples`.
- Visible defect: The rendered title displays the literal underscores in B_sB_t.
- Future repair: Typeset the bimodule symbol in inline math, for example `$B_sB_t$`, or spell it without TeX-like underscores.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/ex-the-rank-two-bott-samelson-bimodule-and-its-character-decomposition--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/ex-the-rank-two-bott-samelson-bimodule-and-its-character-decomposition.md).

Exact frozen source lines:

```text
4: title: "The rank-two Bott-Samelson bimodule B_sB_t: character, decomposition and the braid relation"
```

#### category-o-and-geometric-representation-theory / confirmed 015: `def-the-whittaker-functor-from-the-relevant-parabolic-o-summand`

- Location: **Proof**; source lines 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149.
- Pages: `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality`.
- Visible defect: Proof steps 1.1–1.8 render mathematical notation as plain text, including raw underscores, carets, and unformatted expressions such as U(m), I_chi, I^n, and E_chi. In step 1.9 the notation returns to rendered math.
- Future repair: Wrap the mathematical symbols and expressions in steps 1.1–1.8 in inline or display math delimiters, preserving the prose and equations.
- Image evidence: [tile 04](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/def-the-whittaker-functor-from-the-relevant-parabolic-o-summand--04.png), [tile 05](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/def-the-whittaker-functor-from-the-relevant-parabolic-o-summand--05.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/def-the-whittaker-functor-from-the-relevant-parabolic-o-summand.md).

Exact frozen source lines:

```text
135: 1.1 Let U=U(m), I=I_chi. Replace x by y=x−chi(x). These shifted generators have the original brackets, because chi vanishes on brackets. Choose a basis adapted to the lower-central filtration, with weight w_i the largest lower-central index containing its basis vector. PBW reordering and the commutator formula show that I^n is spanned by ordered monomials of total lower-central weight≥n: one inclusion follows from reordering n factors, while the reverse follows because each basis vector of weight w lies in I^w, being a linear combination of iterated brackets of length w. [F1, F2, F5, construct, algebra]
136: 
137: 1.2 The Rees algebra R=⊕_(n≥0) I^n t^n is generated by y_i t^r, 0≤r≤w_i. Their span is a finite-dimensional Lie algebra: a nonzero bracket component y_k has w_k≥w_i+w_j, so r+s≤w_k. PBW gives its enveloping algebra a polynomial associated graded. For any left ideal, Hilbert basis gives finitely many generators of its homogeneous leading ideal; lift them and subtract matching highest-degree terms until the nonnegative degree decreases to zero. The lifts generate the original ideal. Thus the enveloping algebra is left noetherian, and its surjection onto R makes R left noetherian. For a left ideal J⊂U, ⊕(J∩I^n)t^n is a graded left ideal of R and has finitely many homogeneous generators. For fixed k, choosing n greater than k plus their largest degrees gives J∩I^n⊂I^k J. This is the precise Artin–Rees consequence needed here. [F1, F2, F5, construct, algebra]
138: 
139: 1.3 Set E_chi=∪_(n≥0)(U/I^n)^*, with left action (x f)(r)=f(r x). To prove injectivity, take a U-linear map phi:J→E_chi. U is noetherian, so choose finitely many generators of J. A common I^k kills their images and hence all images, since I is two-sided. The scalar functional lambda(j)=phi(j)(1) kills I^k J. Choose n with J∩I^n⊂I^k J, extend lambda from J/(J∩I^n) to U/I^n, and call the extension a∈E_chi. The map U→E_chi, u↦u a, extends phi, because at r its value on j is a(rj)=phi(rj)(1)=phi(j)(r). Baer's criterion gives injectivity. This supplies the injective-continuous-dual assertion cited without proof in BK Lemma8.20. [F1, F2, F5, construct, algebra]
140: 
141: 1.4 For a U(m)-finitely generated g-module X, evaluation at1 identifies Hom_m(X,E_chi) with the scalar functionals lambda:X→C that kill I^n X for some n. Indeed, reconstruct the map by F_lambda(v)(r)=lambda(rv); finitely many generators give a common n. The right U(g)-action is (lambda·u)(v)=lambda(uv). On E-valued maps its formula is therefore [F1, F2, F5, construct, algebra]
142: 
143: 1.5 (F·u)(v)(r)=lambda(u r v), [F1, F2, F5, construct, algebra]
144: 
145: 1.6 not the generally non-m-linear expression F(uv)(r)=lambda(r u v). This distinguishes the compressed scalar-functional notation in the source from a literal E-valued composition. [F1, F2, F5, construct, algebra]
146: 
147: 1.7 The right action preserves continuity. For a fixed u∈U(g), the finite PBW subspace generated by all iterated ad m on u is finite-dimensional and its negative-column action is nilpotent; sufficiently long products of ad m vanish. Moving u past a product of sufficiently many shifted m generators therefore leaves at least n of them on the left. Equivalently u I^(n+C)⊂I^n U(g) for some C=C(u). Thus lambda u kills I^(n+C)X. On this continuous-dual module the right shifted m-action is locally nilpotent. Injectivity of E_chi makes Hom_m(−,E_chi) exact, and right Skryabin makes its Whittaker vectors exact. These Whittaker vectors are precisely Hom_m(X,C_chi). Dualizing this finite-dimensional vector space gives an exact covariant functor. [F1, F2, F5, construct, algebra]
148: 
149: 1.8 The restricted dual uses the row-sum torus a=span{Σ_(row(j)=r)E_jj}, not the full Cartan and not the column-origin vector c. Every e-adjacent pair lies in one row, so chi has a-weight0. If X is generated over U(m) by finitely many a-weight spaces, an m-linear functional into C_chi vanishes outside those finitely many weights: lambda(uv)=chi(u)lambda(v), and chi(u)=0 in every nonzero a-weight. Thus the restricted-dual definition agrees with the entire finite-dimensional Hom space. Generalized parabolic Vermas are U(m)-free on a finite-dimensional Levi module by PBW; their finite projective flags/presentations from the repaired parabolic highest-weight supplier make every genuine parabolic O object finitely generated over U(m). This establishes exactness on precisely that category. [F1, F2, F5, construct, algebra]
```

#### category-o-and-geometric-representation-theory / confirmed 016: `ex-the-soergel-functor-on-a-small-regular-block`

- Location: **Title**; source lines 4.
- Pages: `projective-functors-and-the-soergel-functor-in-category-o-examples`.
- Visible defect: The page heading displays the literal underscore in sl_2 instead of a typeset subscript.
- Future repair: Use a plain-text title such as “The Soergel functor on the small regular sl₂ block,” or spell out the Lie algebra name.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/ex-the-soergel-functor-on-a-small-regular-block--01.png), [tile 02](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/ex-the-soergel-functor-on-a-small-regular-block--02.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/ex-the-soergel-functor-on-a-small-regular-block.md).

Exact frozen source lines:

```text
4: title: The Soergel functor on the small regular sl_2 block
```

#### category-o-and-geometric-representation-theory / confirmed 017: `lem-right-descent-soergel-bimodules-descend-to-simple-invariants-under-the-character-hypothesis`

- Location: **Facts & Assumptions**; source lines 35, 39.
- Pages: `soergel-intersection-forms-and-hodge-theory`.
- Visible defect: The linked supplier title is displayed with literal TeX-style identifiers such as L_zeta and B_s rather than typeset math or prose.
- Future repair: Give the supplier a readable prose display title, or use a math-aware title renderer for linked item titles.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/lem-right-descent-soergel-bimodules-descend-to-simple-invariants-under-the-character-hypothesis--01.png), [tile 02](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/lem-right-descent-soergel-bimodules-descend-to-simple-invariants-under-the-character-hypothesis--02.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/lem-right-descent-soergel-bimodules-descend-to-simple-invariants-under-the-character-hypothesis.md).

Exact frozen source lines:

```text
35: **Given:** An element $x\in S_n$ and a simple reflection $s$ with $xs<x$ (a right descent), the indecomposable $M=B_x^R$, the generator $B_s^R=S\otimes_{S^s}S(1)$, the hypothesis $\mathrm{S}(x)$ (so $\operatorname{ch}(M)=\underline H_x$), and the deformed operator $L_\zeta$ on $MB_s$ ([[def-the-deformed-lefschetz-operator-on-b-x-b-s]]).
39: [F2] In the decomposition $S=S^s\oplus(\alpha_s/2)S^s$ the four maps $\iota_1(r)=r$, $\iota_2(r)=(\alpha_s r)/2$, $\pi_1(r)=(r+s(r))/2$, $\pi_2(r)=\partial_s(r)$ satisfy $\pi_a\circ\iota_b=\delta_{ab}$ and give the inclusions and projections of an $S^s$-bimodule decomposition of $S$; moreover $\alpha_s$ acts on $S$ by an injective map and $s(\alpha_s)=-\alpha_s$ ([[lem-type-a-soergel-generators-are-finite-free-on-both-sides]], [[def-the-deformed-lefschetz-operator-on-b-x-b-s]]).
```

#### category-o-and-geometric-representation-theory / confirmed 018: `lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands`

- Location: **Facts & Assumptions**; source lines 31.
- Pages: `soergel-intersection-forms-and-hodge-theory`.
- Visible defect: The linked supplier title is displayed with literal TeX-style identifiers such as L_zeta and B_s rather than typeset math or prose.
- Future repair: Give the supplier a readable prose display title, or use a math-aware title renderer for linked item titles.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands--01.png), [tile 02](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands--02.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands.md).

Exact frozen source lines:

```text
31: **Given:** $x,s$ with $xs>x$, the tensor product $M=B_x^RB_s^R$ with its induced form and the operators $L_\zeta$ ([[def-the-deformed-lefschetz-operator-on-b-x-b-s]]), and the assumption that $B_{xs}$ occurs as the top bimodule summand of $M$ with multiplicity one.
```

#### category-o-and-geometric-representation-theory / confirmed 019: `thm-hodge-riemann-for-indecomposable-soergel-bimodules`

- Location: **Facts & Assumptions**; source lines 34.
- Pages: `soergel-intersection-forms-and-hodge-theory`.
- Visible defect: The linked supplier titles expose raw TeX-style identifiers, including L_zeta, B_s and Hom(B_y, B_x B_s), instead of typeset math or readable prose.
- Future repair: Give the suppliers readable prose display titles, or use a math-aware title renderer for linked item titles.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/thm-hodge-riemann-for-indecomposable-soergel-bimodules--01.png), [tile 02](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/thm-hodge-riemann-for-indecomposable-soergel-bimodules--02.png), [tile 03](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/thm-hodge-riemann-for-indecomposable-soergel-bimodules--03.png), [tile 04](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/thm-hodge-riemann-for-indecomposable-soergel-bimodules--04.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/thm-hodge-riemann-for-indecomposable-soergel-bimodules.md).

Exact frozen source lines:

```text
34: **Given:** A symmetric group $S_n$, a finite Bruhat ideal $X\subseteq S_n$ (closed under $y\le x\in X$), the statements $\mathrm S(x)$, $\mathrm hL(x)$, $\mathrm{HR}(x)$ of the dictionary ([[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]), the deformed statement packages $\mathrm hL(x,s)_\zeta$, $\mathrm{HR}(x,s)_\zeta$, $\mathrm{HRbar}(x,s)_\zeta$ with lowest degree $-\ell(x)-1$ ([[def-the-deformed-lefschetz-operator-on-b-x-b-s]]), the local intersection forms $(-,-)^{x,s}_y$ and the sign hypotheses $\mathrm S^\pm(y,x,s)$ ([[def-local-intersection-form-for-a-soergel-summand]], [[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]), and a fixed strictly dominant $\rho$.
```

#### category-o-and-geometric-representation-theory / confirmed 020: `def-deformed-tensor-space-for-the-type-a-finite-w-algebra`

- Location: **Definition / Facts & Assumptions**; source lines 73, 115.
- Pages: `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality`.
- Visible defect: The linked title displays the caret notation U(g^e) as literal title text rather than typeset mathematics.
- Future repair: Format the title as supported inline mathematics, for example U(\mathfrak g^e), or use a prose title without raw caret notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/def-deformed-tensor-space-for-the-type-a-finite-w-algebra--01.png), [tile 02](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/def-deformed-tensor-space-for-the-type-a-finite-w-algebra--02.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/def-deformed-tensor-space-for-the-type-a-finite-w-algebra.md).

Exact frozen source lines:

```text
73: [[thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e]]:
115: [F2] The finite $W$ model uses $\eta(e_{a,b})=e_{a,b}+\delta_{a,b}\rho_{\operatorname{col}(a)}$ with $\rho_b=n-\sum_{h\ge b}q_h$. The canonical loop chart is the inclusion $\operatorname{gr}W\subseteq U(\mathfrak p)$ identified with $U(\mathfrak g^e)$, and its mode symbols are $(-1)^re_{i,j;r}$, without a $u^{s_{i,j}}$ multiplier ([[def-the-type-a-finite-w-algebra-and-whittaker-category]], [[thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e]], [[def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra]]).
```

#### category-o-and-geometric-representation-theory / confirmed 021: `ex-rational-cherednik-trivial-group-is-the-weyl-algebra`

- Location: **Facts & Assumptions**; source lines 41.
- Pages: `rational-cherednik-algebras-and-category-o-examples`.
- Visible defect: The linked title displays H_{t,c}(W,h) with literal braces and underscore notation.
- Future repair: Format the title as supported inline mathematics, for example $H_{t,c}(W,\mathfrak h)$, or rewrite the title in prose.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/ex-rational-cherednik-trivial-group-is-the-weyl-algebra--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/ex-rational-cherednik-trivial-group-is-the-weyl-algebra.md).

Exact frozen source lines:

```text
41: [F1] [[def-rational-cherednik-algebra]]: $H_{t,c}$ is generated by $x,y$ with $[y,x]=t x(y)-\sum_s c_s\alpha_s(y)\alpha_s^\vee(x)s$.
```

#### category-o-and-geometric-representation-theory / confirmed 022: `lem-hodge-riemann-for-large-positive-deformation`

- Location: **Facts & Assumptions**; source lines 39.
- Pages: `soergel-intersection-forms-and-hodge-theory`.
- Visible defect: The linked title displays L_zeta and B_x B_s with literal underscores instead of mathematical subscripts.
- Future repair: Format the title as supported inline mathematics, for example $L_\zeta$ on $B_xB_s$, or use plain prose for the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/lem-hodge-riemann-for-large-positive-deformation--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/lem-hodge-riemann-for-large-positive-deformation.md).

Exact frozen source lines:

```text
39: [F2] $L_\zeta=A+\zeta T$, where $T$ is middle multiplication by $\rho$; these operators commute and are symmetric. The rank-one relation is $r c_{\mathrm{id}}=c_{\mathrm{id}}s(r)+\partial_s(r)c_s$, while $r c_s=c_s r$. Thus after right reduction $T\beta(b)=0$, but $T\alpha(b)$ need not vanish ([[def-the-deformed-lefschetz-operator-on-b-x-b-s]], [[def-invariant-intersection-form-on-a-bott-samelson-bimodule]]).
```

#### category-o-and-geometric-representation-theory / confirmed 023: `lem-pa36-qcoh-filtered-union-and-cech-colimits`

- Location: **Facts & Assumptions**; source lines 63.
- Pages: `beilinson-bernstein-localization-and-category-o`.
- Visible defect: The linked title displays G/P_alpha with a literal underscore in the subscript-like part of the name.
- Future repair: Format alpha as supported inline mathematics, for example $G/P_{\alpha}$, or spell out the subgroup label in prose.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/lem-pa36-qcoh-filtered-union-and-cech-colimits--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/lem-pa36-qcoh-filtered-union-and-cech-colimits.md).

Exact frozen source lines:

```text
63: [[lem-semisimple-projective-orbit-flag-quotients]],
```

#### category-o-and-geometric-representation-theory / confirmed 024: `lem-rational-cherednik-commutator-jacobi-compatibility`

- Location: **Statement / Facts & Assumptions**; source lines 30, 42, 44.
- Pages: `rational-cherednik-algebras-and-category-o`.
- Visible defect: The linked title repeatedly displays H_{t,c}(W,h) with literal braces and underscore notation.
- Future repair: Format the title as supported inline mathematics, for example $H_{t,c}(W,\mathfrak h)$, or rewrite the title in prose.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/lem-rational-cherednik-commutator-jacobi-compatibility--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/lem-rational-cherednik-commutator-jacobi-compatibility.md).

Exact frozen source lines:

```text
30: For the reflection data of [[def-rational-cherednik-reflection-data-and-parameters]] and the quotient presentation of [[def-rational-cherednik-algebra]], let
42: [F2] [[def-rational-cherednik-algebra]]: $c$ is constant on conjugacy classes, $\omega_s$ is conjugated to $\omega_{w s w^{-1}}$ by $w$, and the commutator parameter is $\kappa(u,v)=t\omega(u,v)1-\sum_s c_s\omega_s(u,v)s$.
44: [F3] [[def-rational-cherednik-algebra]]: The smash-product relation gives $s u=s(u)s$ and hence $[u,s]=(u-s(u))s$.
```

#### category-o-and-geometric-representation-theory / confirmed 025: `thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character`

- Location: **Facts & Assumptions / Statement**; source lines 34, 40, 46.
- Pages: `soergel-intersection-forms-and-hodge-theory`.
- Visible defect: The linked title displays Hom(B_y, B_x B_s) with literal underscores instead of mathematical subscripts.
- Future repair: Format the title as supported inline mathematics, for example $\operatorname{Hom}(B_y,B_xB_s)$, or use prose that avoids raw subscript notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character--01.png), [tile 02](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character--02.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character.md).

Exact frozen source lines:

```text
34: **Given:** Elements $x,s$ with $xs>x$, the assumption $\mathrm{S}(y)$ for every $y<xs$, the module $M=B_x^RB_s^R$, the KL multiplication formula $\underline H_x\underline H_s=\underline H_{xs}+\sum_{y<xs}\mu_y\underline H_y$ with integer coefficients $\mu_y$, and for every $y<xs$ the finite-dimensional real space $E_y=\operatorname{Hom}^0(B_y^R,M)$ with its local intersection form $(-,-)^{x,s}_y$ ([[def-local-intersection-form-for-a-soergel-summand]], [[thm-kazhdan-lusztig-basis-multiplication-formula]]).
40: [F3] The local intersection form on $E_y$ is symmetric and bilinear, and it is non-degenerate if and only if the degree-zero composition pairing $E_y\times\operatorname{Hom}^0(M,B_y^R)\to\operatorname{End}^0(B_y^R)=\mathbb R$ is a perfect pairing; the adjoint identification between the two Hom spaces preserves the rank ([[def-local-intersection-form-for-a-soergel-summand]]).
46: Fix $x,s$ with $xs>x$ and assume $\mathrm{S}(y)$ for every $y<xs$. Put $M=B_x^RB_s^R$ and write the Kazhdan-Lusztig multiplication formula $\underline H_x\underline H_s=\underline H_{xs}+\sum_{y<xs}\mu_y\underline H_y$ with integer constants $\mu_y$. For each $y<xs$ let $E_y=\operatorname{Hom}^0(B_y^R,M)$ carry the local intersection form of [[def-local-intersection-form-for-a-soergel-summand]]. Then:
```

#### category-o-and-geometric-representation-theory / confirmed 026: `thm-soergels-character-conjecture`

- Location: **Facts & Assumptions**; source lines 34, 40.
- Pages: `soergel-intersection-forms-and-hodge-theory`.
- Visible defect: Both linked titles display L_zeta or B_x B_s notation with literal underscores instead of mathematical subscripts.
- Future repair: Format the notation in both linked titles with supported inline mathematics (for example $L_\zeta$, $B_xB_s$ and $(x,s)_\zeta$), or rewrite both titles in prose.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/thm-soergels-character-conjecture--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/thm-soergels-character-conjecture.md).

Exact frozen source lines:

```text
34: **Given:** A symmetric group $S_n$, the real type-$A$ Soergel category of [[def-real-type-a-soergel-category-and-scalar-extension]] with its normalized indecomposables $B_w^R$ and their characters, the type-$A$ Hecke algebra with its standard basis $H_w$ and Kazhdan-Lusztig basis $\underline H_w$ ([[lem-type-a-kazhdan-lusztig-basis-has-elementary-triangular-bar-properties]]), the statement $\mathrm S(w):\operatorname{ch}(B_w^R)=\underline H_w$ and the hypotheses $\mathrm hL(w)$, $\mathrm{HR}(w)$ of the dictionary ([[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]), and the deformed operator $L_\zeta$ on $B_x^RB_s^R$ ([[def-the-deformed-lefschetz-operator-on-b-x-b-s]]).
40: [F3] Descent: if $xs<x$ and $\mathrm S(x)$ holds, then $B_xB_s=B_x(1)\oplus B_x(-1)$ and the reduced operator is the matrix $\begin{pmatrix}\rho\cdot(-)&0\\ \zeta\rho(\alpha_s^\vee)&\rho\cdot(-)\end{pmatrix}$; if in addition $\mathrm hL(x)$ holds and $\zeta>0$ then $\mathrm hL(x,s)_\zeta$ holds, while centered hard Lefschetz fails at $\zeta=0$ ([[lem-right-descent-soergel-bimodules-descend-to-simple-invariants-under-the-character-hypothesis]], [[thm-deformed-hard-lefschetz-for-b-x-b-s]]).
```

#### category-o-and-geometric-representation-theory / confirmed 027: `thm-deformed-hard-lefschetz-for-b-x-b-s`

- Location: **Title**; source lines 4.
- Pages: `soergel-intersection-forms-and-hodge-theory`.
- Visible defect: The title displays the subscripts as literal underscores (`B_x B_s`), while the same notation is typeset in the body.
- Future repair: Use the plain-text subscripts `Bₓ Bₛ` in the title, or format the title with renderer-supported math notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/thm-deformed-hard-lefschetz-for-b-x-b-s--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/thm-deformed-hard-lefschetz-for-b-x-b-s.md).

Exact frozen source lines:

```text
4: title: "Hard Lefschetz for the deformed operator on B_x B_s, in the three cases"
```

#### category-o-and-geometric-representation-theory / confirmed 028: `ex-translation-to-a-singular-wall-in-type-a-two`

- Location: **title**; source lines 4.
- Pages: `singular-and-parabolic-kazhdan-lusztig-theory-examples`.
- Visible defect: The title renders the underscore literally in “A_2” instead of displaying the subscript 2.
- Future repair: Render A_2 as math (for example, $A_2$) in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/ex-translation-to-a-singular-wall-in-type-a-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/ex-translation-to-a-singular-wall-in-type-a-two.md).

Exact frozen source lines:

```text
4: title: "Translation to a singular wall in type A_2"
```

#### category-o-and-geometric-representation-theory / confirmed 029: `lem-tensoring-with-b-s-preserves-hodge-riemann-signs`

- Location: **title**; source lines 4.
- Pages: `soergel-intersection-forms-and-hodge-theory`.
- Visible defect: The title renders the underscore literally in “B_s” instead of displaying the subscript s.
- Future repair: Render B_s as math (for example, $B_s$) in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/lem-tensoring-with-b-s-preserves-hodge-riemann-signs--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/lem-tensoring-with-b-s-preserves-hodge-riemann-signs.md).

Exact frozen source lines:

```text
4: title: "Tensoring a direct sum of Hodge-Riemann bimodules with B_s preserves the signs"
```

### Optional typography

#### category-o-and-geometric-representation-theory / typography 001: `thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects`

- Location: **Statement**; source lines 53.
- Pages: `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality`.
- Visible defect: The rendered sentence contains the joined text “source17 symbol”, which reads as a stray number attached to “source”.
- Future repair: Check the intended wording and add the missing separator or markup around “17”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/screenshots/thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-o-and-geometric-representation-theory/snapshots/thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects.md).

Exact frozen source lines:

```text
53: The source17 symbol $K(A)$ denotes our $L(A)$, not our costandard $K(A)$.
```

