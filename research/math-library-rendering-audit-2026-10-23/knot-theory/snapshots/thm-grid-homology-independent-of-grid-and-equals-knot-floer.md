---
id: thm-grid-homology-independent-of-grid-and-equals-knot-floer
kind: theorem
title: "Grid homology is independent of the grid and computes knot Floer homology"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - def-admissible-pointed-heegaard-floer-data
  - alg-grid-knot-floer-complex
  - lem-grid-rectangle-differential-squares-to-zero
  - lem-grid-diagram-is-admissible
  - thm-grid-commutation-stabilization-invariance-proof
  - thm-grid-moves-generate-oriented-knot-isotopy
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization
  - def-oriented-seifert-surface-and-knot-genus
  - def-countable-choice
  - lem-grid-marking-variables-chain-homotopic
  - thm-realized-grid-whitney-classes-have-the-full-relative-grading-formula
  - lem-realized-flat-grid-index-one-positive-domains-are-empty-rectangles
  - thm-integrable-flat-grid-rectangle-counts-equal-the-full-filtered-grid-differential
  - thm-balanced-knot-full-minus-auxiliary-continuations-are-filtered-equivalences
  - lem-pointed-basepoint-cone-and-variable-collapse
  - lem-relative-s-three-maslov-gradings-have-a-unique-hat-homology-normalization
  - lem-knot-floer-duality-and-filtration-swap
  - lem-doubly-pointed-knot-morse-fields-have-a-zero-framed-seifert-extension
  - lem-grid-alexander-grading-integral
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, §§1–3"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Proposition 2.3 and equations (5)–(9), printed pp.7–10, and §§1–3, printed pp.1–18; multipointed complex, collapsed-complex independence, stable V factor, grid comparison, and the proof's analytic boundary"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Chapters 5 and 13"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Combinatorial invariance, filtered complex, and stable basepoint-factor arguments"
    - title: "Ciprian Manolescu, An Introduction to Knot Floer Homology, §§3.3–4.3"
      url: "https://web.stanford.edu/~cm5/hfk.pdf"
      locator: "Printed pp.12–18; multipointed comparison, grid rectangles, and the stable V tensor factor"
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "§2.6, printed pp.15–17; the generator-to-Spin^c assignment via homology classes of nowhere-vanishing vector fields and the first Chern class"
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and knot invariants"
      url: "https://arxiv.org/pdf/math/0209056"
      locator: "§3.4, printed p.18; the Alexander summand indexed by half the first-Chern-class pairing with the capped-off Seifert surface"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume countable choice. Let $K$ be an oriented knot in $S^3$, and let $F$ be a compact connected oriented surface embedded in $S^3$ with boundary $K$ and minimum possible genus; write $g(K)=\operatorname{genus}(F)$. Let $G$ be any toroidal grid diagram for $K$ with grid number $n$. Let $C^-_{\mathrm{grid}}(G)$ be the full filtered minus complex produced by the grid-complex algorithm, and let $C^-_U(G)$ denote this same complex regarded over $\mathbb F_2[U]$ by letting $U$ act as one chosen $U_i$, with the other variables retained independently. For an admissible $2n$-pointed Heegaard diagram $\mathcal H$ compatible with $(K,F)$, define $C^-_U(\mathcal H)$ by the same restriction to a single variable action. Write $CFK^-(K)$ for the full filtered complex of an admissible doubly-pointed diagram. The ordinary fully collapsed quotient, obtained instead by setting all $U_i=U$, has type $CFK^-(K)\otimes V^{\otimes(n-1)}$; the restriction of scalars $C^-_U$ has type $CFK^-(K)$.

For the absolute Alexander normalization, let $\mathcal H_1$ be an admissible doubly-pointed Heegaard diagram for $(K,F)$. For a generator $\mathbf x$ of $\mathcal H_1$, set
$$A_F(\mathbf x)=\frac12\left\langle c_1(\mathfrak s_{w,z}(\mathbf x)),[\widehat F]\right\rangle,$$
where $\mathfrak s_{w,z}(\mathbf x)$ is the relative $\operatorname{Spin}^c$ structure assigned to this generator by the pointed Heegaard construction: it is the homology class of the nowhere-vanishing vector field obtained from the gradient trajectories through $\mathbf x$ and the chosen basepoint pair, after extending the field across small balls around the critical points. Its first Chern class is that of the oriented plane field orthogonal to this vector field. The surface $\widehat F$ is obtained by removing a tubular neighborhood $N(K)$ from $F$ and capping the resulting longitude with the meridian disk of the solid torus attached in zero-framed surgery on $K$. Let $\widehat{HFK}(K)$ be the homology of the Alexander-associated-graded complex obtained from the doubly-pointed complex $C^-_U(\mathcal H_1)$ by quotienting by its sole variable $U$, with this $A_F$ normalization.

Then $C^-_U(G)$ and $C^-_U(\mathcal H)$ are filtered chain homotopy equivalent, preserving relative Maslov grading and the $A_F$ filtration, and their Alexander-associated-graded minus complexes are chain homotopy equivalent. For any two grids of $K$, the resulting normalized filtered complexes are filtered chain homotopy equivalent. If $\widetilde{GH}(G)$ denotes the homology of the tilde grid complex over $\mathbb F_2$, then
$$\widetilde{GH}(G)\cong\widehat{HFK}(K)\otimes V^{\otimes(n-1)},$$
where $V$ is the two-dimensional bigraded vector space with one generator in bidegree $(0,0)$ and one in bidegree $(-1,-1)$.
## Statement references

[[def-grid-diagram-for-an-oriented-knot|Toroidal grids and their orientation convention]]

[[def-admissible-pointed-heegaard-floer-data|The pointed analytic knot Floer complex]]

[[def-oriented-seifert-surface-and-knot-genus|The minimum-genus normalization convention]]

[[lem-grid-marking-variables-chain-homotopic|Identification of the basepoint-variable actions]]

[[thm-grid-commutation-stabilization-invariance-proof|Grid-move invariance]]

[[thm-grid-moves-generate-oriented-knot-isotopy|Generation of oriented knot isotopy by grid moves]]

[[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing|Regularity, compactness, and gluing]]

[[thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization|Analytic Heegaard-move invariance]]

[Manolescu, Ozsvath, and Sarkar, “A combinatorial description of knot Floer homology,” §§1–3](https://arxiv.org/pdf/math/0607691)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Chapters 5 and 13](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

[Manolescu, *An Introduction to Knot Floer Homology*, §§3.3–4.3](https://web.stanford.edu/~cm5/hfk.pdf)

[Ozsvath and Szabo, *Holomorphic disks and topological invariants for closed three-manifolds*, §2.6](https://arxiv.org/pdf/math/0101206)

[Ozsvath and Szabo, *Holomorphic disks and knot invariants*, §3.4](https://arxiv.org/pdf/math/0209056)

## Facts & Assumptions

**Given:** The oriented knot, its minimum-genus Seifert surface, the grid and the analytic diagrams in the Statement. All polynomial variables remain independent until a quotient is explicitly taken.

[F1] The grid grading formulas are integral, and every realized flat-grid Whitney class satisfies the full relative Maslov and Alexander formulas, including positive X multiplicity. Its index is $n_x(D)+n_y(D)$, and its local domain equation is $\Delta D=1_x-1_y$. Actual integrable full disk counts are precisely the finitely many regular empty-state rectangles, with all individual O weights. ([[lem-grid-alexander-grading-integral]], [[thm-realized-grid-whitney-classes-have-the-full-relative-grading-formula]], [[lem-realized-flat-grid-index-one-positive-domains-are-empty-rectangles]], [[thm-integrable-flat-grid-rectangle-counts-equal-the-full-filtered-grid-differential]])

[F2] The purely combinatorial grid maps and inverse homotopies preserve the stated J-formula Maslov grading and Alexander filtration. Commutation preserves tilde homology; stabilization adds the zero-differential factor V of degrees (0,0),(-1,-1). Over one chosen variable action they are actual filtered equivalences with independent variables retained. Grid moves generate oriented knot isotopy. These results concern finite grid domains and do not invoke the grid-to-analytic identification proved here. ([[thm-grid-commutation-stabilization-invariance-proof]], [[thm-grid-moves-generate-oriented-knot-isotopy]])

[F3] The analytic full-minus auxiliary comparisons apply to any finite square-zero count endpoints with no nonconstant nonpositive-index strips and regular index-one strips. The actual balanced-knot diagram comparison, ordinary target-neck stabilization and marked-pair cone then give equivalence over one chosen action with a normalized doubly pointed complex. Ordinary collapse instead gives its tensor product with V to the number of extra pairs. All these comparisons retain positive z terms. The multipointed relative origins are fixed by transport from the doubly pointed Seifert-Chern and total-hat normalizations, with source cone shift (-1,-1). ([[thm-balanced-knot-full-minus-auxiliary-continuations-are-filtered-equivalences]], [[thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization]], [[lem-pointed-basepoint-cone-and-variable-collapse]])

[F4] The normalized doubly pointed total zero-w hat homology is one-dimensional in Maslov degree zero. Analytic conjugation identifies its Alexander-associated-graded homology in degrees (m,a) and (m-2a,-a), independently of any grid comparison. Its Alexander origin is the negative modified-Morse field with zero-relative-Euler Seifert cap, hence the stated half-Chern pairing. ([[lem-relative-s-three-maslov-gradings-have-a-unique-hat-homology-normalization]], [[lem-knot-floer-duality-and-filtration-swap]], [[lem-doubly-pointed-knot-morse-fields-have-a-zero-framed-seifert-extension]])

[F5] The grid is admissible. The grid algorithm's full and associated-graded rectangle matrices square to zero and have the stated variable actions. ([[lem-grid-diagram-is-admissible]], [[lem-grid-rectangle-differential-squares-to-zero]], [[alg-grid-knot-floer-complex]])

## Proof

1.1 Use the standard genus-one splitting of the oriented three-sphere: the horizontal circles bound parallel meridian disks in one solid torus, and the vertical circles bound parallel meridian disks in the other; their primitive meridians meet once. Taking all n parallel disks cuts each side into n balls. The row and column marking condition puts one O and one X in every corresponding cut ball. Push the horizontal O-to-X segments into the lower side and the vertical X-to-O segments into the upper side, using their evident rectangular bridge disks. These simultaneous arcs give exactly the oriented knot of the grid, since every vertical segment passes over every horizontal segment. Thus this is an actual balanced 2n-pointed diagram of K, not only an abstract torus count. Its analytic symmetric rank is $1+n-1=n$, and w=O,z=X. Give it the actual flat integrable data of [F1]. The identity on states identifies its full polynomial count matrix with the algorithmic one. [F1, F5, given, construct]

2.1 Check the remaining good-endpoint condition before applying [F3]. Positivity gives a nonnegative domain D for every actual integrable strip. Its index $n_x(D)+n_y(D)$ is nonnegative. If it is zero, every cell touching either state has coefficient zero. The local equation $\Delta D=1_x-1_y$ then forces x=y, since at any changed vertex the four coefficients would have nonzero alternating sum. Consequently $\Delta D=0$, and telescoping its row and column differences gives $D_{ij}=a_i+b_j$. Because x is one point in every row and column, the n cells immediately northeast of its state points have total coefficient $\sum_i a_i+\sum_j b_j=0$. The sum of ALL cell coefficients is n times that sum, hence zero. Nonnegativity gives D=0. The actual ordered-root energy bound is then zero, so the strip is constant. Therefore no nonconstant index-at-most-zero strip exists. Finiteness, index-one regularity and square zero were already supplied by [F1,F5]; no index-two regularity of this special integrable path is assumed. The precise endpoint hypotheses of [F3] hold. [F1, F3, F5, step 1.1, construct, algebra]

3.1 Apply the actual full-minus auxiliary and diagram equivalences of [F3] to this endpoint. They identify its chosen-action restriction with a doubly pointed full complex, and identify its ordinary collapse with that complex tensor $V^{\otimes(n-1)}$. They also give the quotient-by-all-variables and associated-graded identities by specializing the actual finite maps and homotopies. At this stage use ONLY the relative formulas of [F1]: on the connected state set, its numerical J-gradings differ from the transported normalized analytic origins by one integer Maslov constant b and one integer Alexander constant c. In particular, if H denotes normalized doubly pointed associated-graded zero-U homology, the grid tilde homology has the relative identification $H\otimes V^{\otimes(n-1)}$ with common shifts (b,c). This constructs the comparison before determining either shift; no assertion of the theorem under proof is a premise. [F1, F3, step 1.1, step 2.1, construct, algebra]

4.1 Fix b without using Alexander centering. List the O markings in order of increasing row, with distinct column indices $o_0,\ldots,o_{n-1}$. Replace X by $X^*$ having in row i the column $o_{i+1}$, with cyclic indices. This is disjoint from O and is a one-component grid: its marking permutation sends row i to row i+1. Its vertical segments join successive row heights, except for the one segment from the last row to the first. The short vertical segments meet no other horizontal height, so every crossing lies on that sole long vertical segment, which passes OVER the complementary embedded planar arc. This is an unknot: raise the long segment into an upper ball and lower the complementary planar arc into a lower ball; both are boundary-parallel arcs, with the rectangular upper bridge disk and the planar lower bridge disk. Match their boundary chords on the separating plane and join the two disks along that chord to obtain an embedded spanning disk, rounding its finite corners. The FULL unfiltered rectangle matrix and M_O do not depend on X, so replacing X by $X^*$ changes neither this matrix nor its Maslov grading. By the purely combinatorial graded chosen-action equivalences and move generation in [F2], this same unfiltered complex is graded equivalent to a size-two unknot grid. In that grid the two states have M_O=0,-1; direct rectangle enumeration gives the cone $\mathbb F_2[U_1,U_2]\xrightarrow{U_1+U_2}\mathbb F_2[U_1,U_2]$ with source degree -1 and target degree zero. The monic polynomial retraction in [F3] evaluates the other variable at the chosen one, so after quotienting that chosen U its total homology is one-dimensional in M_O degree zero. The combinatorial inverse homotopies specialize too, so this is true for the original grid's chosen-action total zero-U complex. Step 3.1 compares it to the analytic total hat homology, whose normalized degree is zero by [F4]. Its common Maslov shift is therefore b=0. This also proves nontriviality without treating the Alexander-associated-graded complex as total hat homology. [F2, F3, F4, step 3.1, construct, algebra]

5.1 Fix c by a finite reciprocal symmetry. Define the finite Laurent polynomial $P_G(t)=\sum_x(-1)^{M_O(x)}t^{A_G(x)}$ and put $D_n(t)=(1-t^{-1})^{n-1}$. The Euler characteristic of a finite bigraded complex equals that of its homology degree by degree: split each finite degree into boundaries, a homology complement and a complement mapped isomorphically to boundaries; the latter pairs cancel with opposite Maslov signs. Thus [F2] implies that $Q_G=P_G/D_n$ is unchanged by every grid move, as a rational function: commutation preserves P and stabilization multiplies P by $1-t^{-1}$, precisely the Euler polynomial of V. Construct $G^T$ by transposing the square and INTERCHANGING O and X. The ambient rotation $(x,y,z)\mapsto(y,x,-z)$ has determinant plus one and changes old vertical overpasses to new horizontal underpasses. An old horizontal O-to-X arc becomes a new vertical X-to-O arc; an old vertical X-to-O arc becomes a new horizontal O-to-X arc. Hence it carries the SAME oriented knot to $G^T$, rather than a mirror or assumed orientation reversal. Both grids have size n, so [F2] gives $P_{G^T}=P_G$. Transposition preserves the strict pair relation defining J, while mark exchange swaps M_O and M_X. The literal formulas are therefore $A_{G^T}(x^T)=-A_G(x)-(n-1)$ and $M_{O^T}(x^T)=M_O(x)-2A_G(x)-(n-1)$. Since A_G is integral, their signs give $P_G(t)=(-1)^{n-1}t^{-(n-1)}P_G(t^{-1})$. Using $D_n(t^{-1})=(-1)^{n-1}t^{n-1}D_n(t)$ yields $Q_G(t)=Q_G(t^{-1})$. This derives reciprocity from actual J formulas and purely combinatorial moves; no analytic grading identification or unproved Alexander determinant formula has been used. [F1, F2, step 4.1, construct, algebra]

6.1 Write $Q_H(t)=\sum_{m,a}(-1)^m\dim H_{m,a}\,t^a$. This is a finite Laurent polynomial. By [F4]'s ACTUAL conjugation, $H_{m,a}$ is isomorphic to $H_{m-2a,-a}$. The degree difference is even, hence $Q_H(t)=Q_H(t^{-1})$. For clarity, this symmetry is supplied by the normalized analytic coordinate-swap map: on the vertical corner $(i,j)=(0,a)$ it lands on the horizontal corner $(a,0)$, and multiplying by $U^a$ identifies that corner with $(0,-a)$ and lowers Maslov degree by 2a. It is a map of the corner subquotients, not a declaration that the full positive-z hat differential preserves A. Moreover $Q_H(1)=1$. Indeed the associated graded and total zero-U doubly pointed complexes have the same finite chain groups with their Maslov degrees, so their ordinary Euler characteristics coincide; the latter has exactly one homology class of normalized degree zero. Therefore Q_H is NONZERO. The relative comparison in step 3.1 and b=0 now give $P_G=t^c D_n Q_H$, or $Q_G=t^c Q_H$. Substituting the two reciprocal identities yields $(t^c-t^{-c})Q_H=0$ in the Laurent polynomial domain $\mathbb Z[t,t^{-1}]$. Since Q_H is nonzero, c=0. This is precisely the missing absolute combinatorial Alexander anchor, with no appeal to grid equality to establish its own shift. [F3, F4, step 3.1, step 4.1, step 5.1, construct, algebra]

7.1 The identity in step 1.1 and the actual analytic equivalences in step 3.1 consequently preserve both normalized origins, by steps 4.1 and 5.1. Compose with [F3]'s normalized comparison to the diagram H in the Statement; its inverse and inverse homotopies remain finite and filtered. Taking the Alexander associated graded of these identities gives the claimed associated-graded minus equivalences. Each term retains every individual O weight until the explicitly stated restriction or quotient. The ordinary collapse and all-variable-zero associated-graded specialization are exactly the two actual constructions of [F3], yielding respectively $CFK^-(K)\otimes V^{\otimes(n-1)}$ and $\widehat{HFK}(K)\otimes V^{\otimes(n-1)}$, with the displayed bidegrees now absolutely centered. The chosen-action restriction yields $CFK^-(K)$ instead. Composing the comparisons for two grids gives their normalized filtered equivalence and inverse homotopies. Finally [F4] identifies the preserved Alexander origin with the zero-framed capped-Seifert half-Chern expression of the Statement. Its cap and negative-Morse convention are inherited from that supplier, not replaced by a winding-number convention. Every original conclusion follows with all positive z terms and all stated scalar distinctions retained. [F1, F3, F4, step 1.1, step 3.1, step 4.1, step 6.1, construct, algebra] ∎
