---
id: thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint
kind: theorem
title: Exceptional inverse image as the adjoint of derived proper-support image
status: draft
origin: pipeline
deps:
- def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces
- lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions
- lem-sections-near-a-compact-set-are-sections-on-that-set
- lem-c-soft-field-sheaves-are-compact-support-acyclic
- lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions
- def-axiom-of-choice
- lem-abelian-sheaves-admit-bounded-above-flat-resolutions
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Verdier, Dualité dans la cohomologie des espaces localement compacts, exposé300
    url: https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf
  - title: Stacks Project, Cohomology of Sheaves §§16–18
    url: https://stacks.math.columbia.edu/download/cohomology.pdf
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume AC and the uniform all-fibre-open dimension bound $d$ of the bounded fibrewise-soft resolution lemma. The proper-support functor is left exact, has $(Rf_!A)_y\simeq R\Gamma_c(X_y,A|_{X_y})$, and maps bounded derived categories into bounded derived categories. Its actual candidate $f^!$ from the Definition represents the natural Hom transposition $\operatorname{Hom}(Rf_!A,B)\simeq\operatorname{Hom}(A,f^!B)$ for bounded source objects and bounded-below target objects. When the subsequent geometric theorem proves that $f^!$ preserves the bounded constructible subcategory, this is the right adjunction $Rf_!\dashv f^!$ there. It has lower cohomological bound $\inf(B)-d$. The proper-support evaluation constructs the counit directly. On the bounded constructible specialization, the adjunction unit, counit and resolution comparisons satisfy the triangle, identity and cocycle laws. The proof constructs this adjoint from a finite fibrewise-soft resolution and generator complexes, independently of Verdier biduality.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, with k-linear sheaves and the declared Axiom of Choice.

[F1] The exact supplier [[def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces]] is used with its stated hypotheses.

[F2] The exact supplier [[lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions]] is used with its stated hypotheses.

[F3] The exact supplier [[lem-sections-near-a-compact-set-are-sections-on-that-set]] is used with its stated hypotheses.

[F4] The exact supplier [[lem-c-soft-field-sheaves-are-compact-support-acyclic]] is used with its stated hypotheses.

[F5] The exact supplier [[lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions]] is used with its stated hypotheses.

[F6] The exact supplier [[def-axiom-of-choice]] is used with its stated hypotheses.

[F8] The kernel recursion in [[lem-abelian-sheaves-admit-bounded-above-flat-resolutions]] constructs bounded-above generator resolutions; it is reproduced k-linearly in the proof.

## Proof

1.1 For a sheaf A, define(f!A)(V) to be sections on f^{-1}V whose closed support is proper over V. Local properness of that support is local on the base: preimages of a compact set are covered by finitely many relatively compact base neighbourhoods; hence compactness is checked locally. This proves sheaf gluing. The functor is left exact by the sheaf kernel and its support. If f is proper, f!A=f_*A. For an open inclusion it is exact extension by zero; for a closed inclusion it is exact direct image. [given, construct, algebra]

1.2 The map (f!A)_y→Γ_c(X_y,A|X_y) restricts a representative to the fibre. It is injective: if that restriction is zero, it vanishes on a neighbourhood of every point of its fibre support. A section with support proper over a base neighbourhood has compact fibre support; remove that neighbourhood of the support and use properness/closedness of its remaining support to shrink the base neighbourhood until the section is zero. [given, construct, algebra]

1.3 For surjectivity, represent a compactly supported fibre section by ambient sections near its compact support, using B1. Choose a relatively compact ambient neighbourhood W of this support. On the compact collar closure(W)\W_0 its fibre germs are zero. The strengthened B1 gluing with the zero section gives a section near X_y∩closure(W) that is zero near this collar. The compact collar can be avoided after shrinking a neighbourhood of y: each collar point not on the fibre has a base-image neighbourhood missing y, and the finitely covered compact collar yields a single such shrink. Restrict to W, glue zero outside closure(W), and shrink the base as just described. The resulting section has support in a fixed compact set, so is proper over the base neighbourhood and represents the fibre section. This proves the stalk identity for arbitrary sheaves. Naturality is restriction of representatives. [given, construct, algebra]

1.4 For injective A the restriction to X_y is c-soft, so an injective resolution restricts to a Γ_c-acyclic resolution. Exactness of stalks yields (Rf!A)_y=RΓ_c(X_y,A|X_y). In particular the bounded fibrewise-soft resolution lemma gives finite cohomological dimension≤d and Rf!:D^b(X)→D^b(Y). A fibrewise-c-soft sheaf is f!-acyclic by the same stalk computation. Open extensions and direct sums of such sheaves remain fibrewise-c-soft, by the c-soft lemma. [given, construct, algebra]

1.5 Choose the finite fibrewise-soft resolution k_X→K of the bounded fibrewise-soft resolution lemma, in degrees0,…,d. For an open U⊂X write K_U=j_U!j_U*K. Let I be a bounded-below injective complex on Y. Set H_K(I)(U)=Hom•_Y(f!K_U,I), with signed total-Hom differential. Each degree has finitely many K-columns. A bounded-below flasque complex on X results, as follows. [given, construct, algebra]

1.6 For a cover U=⋃U_i, the augmented extension-zero Čech chain complex of K_U is exact on stalks: at a point the simplex of indices containing that point has the elementary contracting homotopy that adds a fixed containing index. Every term is a direct sum of fibrewise-soft open extensions and is f!-acyclic. Its cycles are also f!-acyclic. Indeed dimension shifting along its short exact cycle sequences identifies R^qf! of a cycle with R^{q+r}f! of an earlier cycle for arbitrarily large r; choose r>d. Therefore applying f! preserves exactness. Applying Hom_Y(-,I^q) preserves exactness by injectivity; in particular the first three terms give the sheaf equalizer for H_K(I). For V⊂U, f!K_V→f!K_U is monic because K_V→K_U is monic and f! left exact. Injectivity of each I^q gives surjective restriction on every Hom term; finite products over K-degree give surjectivity in every total degree. Thus H_K(I) is indeed a sheaf complex and termwise flasque, with lower bound inf(I)−d. [given, construct, algebra]

1.7 Let E_U=j_U!k_U. The complex K_U resolves E_U by f!-acyclic terms, so f!K_U represents Rf!E_U. Also RHom_X(E_U,H_K(I))=RΓ(U,H_K(I))=Γ(U,H_K(I)), since the bounded-below flasque complex is Γ(U)-acyclic. This is exactly Hom•_Y(f!K_U,I), representing RHom_Y(Rf!E_U,I). The comparison is evaluation, natural in U and in maps of generators. [given, construct, algebra]

1.8 Every k-sheaf is a quotient of a sum of E_U: sum over all nonzero pairs (U,s∈A(U)) and send the generator 1 to s. At a stalk any germ has such a representative; the reduced cover of the zero sheaf is zero. For a bounded-above complex A, construct M descending from its upper bound, without assuming these generators projective or lifting its differential through unrelated covers. Maintain that Z^n(M)→Z^n(A) is stalk-surjective and cohomology is already isomorphic above n. Put Q=ker(A^{n−1}⊕Z^n(M)→A^n), where the map is (a,m)↦d_Aa−ε(m), and take the reduced generator cover M^{n−1}→Q. The first projection defines ε and the second defines d_M. At a stalk a cycle a lifts using the pair (a,0), proving cycle surjectivity in the next degree. The image of d_M in Z^n(M) is exactly the ε-preimage of the A-boundaries, proving the cohomology isomorphism in degree n. The defining kernel relation proves εd_M=d_Aε and d_M²=0. Starting with zero above the bound and iterating gives a bounded-above generator complex M→A, termwise stalk-surjective and a quasi-isomorphism. This is the k-linear kernel construction of the actual bounded-above flat-resolution supplier, with j!k generators; it uses no map lifting through a nonprojective object. Direct sums of generators are acyclic against the flasque terms of H_K(I). To justify computing derived Hom using M, replace H_K(I) by injectives J. For each generator E_U the map Hom•(E_U,H_K(I))→Hom•(E_U,J) is a quasi-isomorphism by Γ(U)-acyclicity; products over the summands are exact over a field and preserve these quasi-isomorphisms. The Hom bicomplex has bounded diagonals (M is bounded above; H,J are bounded below), so row comparison proves the total comparison. Hom•(M,J) computes RHom(A,H_K(I)) by K-injectivity of J. [given, construct, algebra]

2.1 Termwise evaluation on generator summands gives the chain identity Hom•_X(M,H_K(I))=Hom•_Y(f!(K⊗M),I). The bounded K is K-flat over k, so K⊗M resolves A. Its terms are direct sums of K_U and hence f!-acyclic. Applying f! computes Rf!A even though M is bounded above rather than below: if an acyclic complex has f!-acyclic terms, dimension shift across its cycle sequences and the bound d show its f!-image is acyclic. Truncate below any prescribed degree before a comparison; the finite cohomological bound makes the omitted tail invisible in that degree. This proves the needed acyclic-resolution comparison without an unbounded-resolution assertion. Consequently the displayed chain identity proves RHom_X(A,H_K(I))=RHom_Y(Rf!A,I) for bounded A and bounded-below I. H^0 gives the natural exceptional Hom transposition for bounded A and bounded-below B, with f^!B represented by H_K(I_B). Its counit is constructed directly rather than transposing an identity of a possibly unbounded source: for each closed Q⊂f^{-1}V proper over V, the complex of Q-supported sections of H_K(I) is Hom•_Y(f_!(K|Q),I), by the exact open/closed support sequence and fibrewise acyclicity. Since Q→V is proper, f_!(K|Q)=f_*(K|Q). Precompose with k_V→f_*k_Q→f_*(K|Q), induced by the constant-section unit and K coaugmentation. This gives a map to I(V); the maps commute with support enlargement and restriction, and hence give f_!H_K(I)→I. The flasque terms of H_K(I) are f_!-acyclic, so this is a derived counit. On every generator E_U its induced Hom transposition is exactly the defining evaluation above. On the bounded constructible categories, once their geometric bounded-output theorem makes f^!B a bounded object, this Hom transposition is a genuine adjunction and its two triangle identities follow by inverse transposition. In that category the unique identity-transposition comparisons between choices of K and I satisfy identity and cocycle laws. The topological lemma does not infer an unrestricted D^+-source adjunction solely from its bounded-source generator argument. This constructs the adjoint, rather than defining it circularly as Df*D. [given, construct, algebra] ∎

