---
id: thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations
kind: theorem
title: "The tensor-product bar on the Fock module and its truncation compatibility"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 19
deps: [thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis,
       def-higher-level-wedge-tensor-fock-module,
       def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules,
       thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules,
       def-the-bar-lattice-and-integral-lattice-of-a-based-module,
       def-balanced-triple-and-globalization-map,
       def-lower-global-basis-of-a-quantum-highest-weight-module,
       lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations,
       lem-quasi-r-divided-power-integrality-on-based-lattices]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 2.3 and Lemma 2.1 (printed pp. 8-9): the compatible bar on $F(\\Lambda)$, the triangular property of $\\overline{M_A}$, the compatibility $\\iota_k(\\overline L_A)=\\overline L_{A\\sqcup(k-1)^l}$ and the lemma that bar commutes with $\\iota_k$; complete passage read."
    - title: "Jonathan Brundan, Dual canonical bases and Kazhdan-Lusztig polynomials, J. Algebra 306 (2006) 17-46 (complete 29-page arXiv v2 article)"
      url: "https://arxiv.org/pdf/math/0509700"
      locator: "Sections 3-4, formulas (3.2)-(3.3) and (4.4)-(4.7) (printed pp. 7-13): the quasi-$R$-matrix tensor-product bar, its quadratic relation and the induced Hecke action on tensor space; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Section 4.5 (printed pp. 22-23): divided power modules and the integral lattice used for the integral form of the Fock truncations; complete passage read."
---

## Statement

Work in the conventions of
[[def-higher-level-wedge-tensor-fock-module]] and
[[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]], with
source parameter $s$ and the ordered column-monomial basis
$\{M_A:A\in\mathrm{Col}^\Lambda\}$ of
[[thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis]].

(1) On every finite interval the Fock module carries an **ordinary compatible
bar** $\psi$, the tensor-product quasi-$R$ bar built from the factors' own
normalized bars on the finite-product based integrable modules of
[[thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules]].
It is involutive (semilinear with $s\mapsto s^{-1}$) and independent of the
parenthesization of the tensor factors.

(2) It is **triangular** on the monomial basis:
$$\psi M_A=M_A+\sum_{B<A}\mathbb Z[s^{\pm1}]\,M_B$$
in the Bruhat order of the Definition; it fixes each ordered fundamental wedge,
and it preserves the integral monomial lattice
$\bigoplus_A\mathbb Z[s^{\pm1}]M_A$.

(3) Both kinds of truncation commute with $\psi$ and preserve the actual
charts and bases: an upper-cut embedding that forgets entries above a bound,
and the common-bottom-tail embedding
$\iota_k(M_A)=M_{A\sqcup(k-1)^l}$, satisfy
$\psi\iota_k=\iota_k\psi$ and map bar-fixed/chart vectors to bar-fixed/chart
vectors. Hence $\psi$ induces a well-defined bar on the full direct limit of
[[thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis]],
including the semi-infinite columns.

Its finite products are used only on actual finite-Cartan based fundamental
factors; no universal two-sided-unbounded tensor theorem and no arbitrary
integral quasi-$R$ action claim is imported.

## Facts & Assumptions

**Given:** A finite interval $[k,r]$, its Fock module $F(\Lambda)$ on that cut with ordered column monomials $M_A$, and the reduced finite products of fundamental factors with their own normalized bars and integral lattices.

[F1] Finite-product tensor bars ([[thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules]], [[def-the-bar-lattice-and-integral-lattice-of-a-based-module]], [[lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations]], [[lem-quasi-r-divided-power-integrality-on-based-lattices]]): on finite products of based integrable modules, the quasi-$R$ construction defines an involutive tensor bar compatible with the factors' bars, with the inverse and coproduct factorizations determined by the intertwining data, integrality on based lattices controlled by divided powers, and the stated admissible finite-product scope.

[F2] Monomial basis and weights ([[thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis]], [[def-higher-level-wedge-tensor-fock-module]]): the ordered wedges and their tensor products form the integral monomial basis; generators act by finitely many box moves, shift weights, and the Bruhat order compares the prefix weights of tableaux.

[F3] Conventions ([[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]]): bar fixes the divided generators, inverts $D$, and sends $s\mapsto s^{-1}$; the fundamental factors are based with their own highest-vector-normalized bars.

[F4] Global bases and balanced triples ([[def-balanced-triple-and-globalization-map]], [[def-lower-global-basis-of-a-quantum-highest-weight-module]]): the finite-interval comparison interfaces for lower global bases and their bar-fixed lifts.

## Proof

**Proof technique:** direct.

1.1 **The bar on a finite cut.** On a finite cut take the reduced finite product of the tensor factors $V(\Lambda_{m_j})$ and equip each factor with its own normalized bar of [F3]. The finite-product theorem [F1] produces an involutive semilinear bar on the tensor product, compatible with the factor bars; by [F2] the basis of this module is the set of column monomials $M_A$ of the cut. This defines $\psi$ on each finite cut. [F1, F2, F3, construct]

2.1 **Triangularity.** Expand $\psi M_A$ in the monomial basis. A quasi-$R$ correction term moves at least one letter in the direction opposite to the ordered reading, i.e. it transposes a letter into a strictly smaller position in the column reading; by the prefix-weight definition of the Bruhat order of [F2], every such term has label $B<A$. Conversely $M_A$ itself occurs with coefficient $1$, because the bar fixes the ordered product of the bar-fixed factor vectors. The coefficients lie in $\mathbb Z[s^{\pm1}]$: each interchange contributes a monomial in $s$, and the divided-power integrality of [F1] makes the accumulated coefficient integral. [F1, F2, step 1.1, algebra]

2.2 **Involution and parenthesization independence.** Both properties are inherited from the finite-product theorem [F1]: applying the tensor bar twice returns the original element because each factor bar is involutive and the quasi-$R$ twist is inverted by the inverse factorization; reassociating the tensor factors replaces the product of quasi-$R$ twists by its twisted product, and the intertwining relations [F1] identify the corresponding bars. [F1, F4, step 1.1]

3.1 **Integral monomial lattice.** Since $\psi M_A$ differs from $M_A$ by integral combinations of lower monomials (step 2.1), the $\mathbb Z[s^{\pm1}]$-span of the $M_A$ is stable under $\psi$; the same holds for $\psi^{-1}=\psi$. [step 2.1]

3.2 **Upper cuts.** Let $r$ be an upper bound and suppose a term of the quasi-$R$ expansion of $\psi M_A$ would require creating an entry above $r$. Every monomial in the expansion is obtained from $A$ by applying the factor bars, whose divided lowering actions move letters downward in the reading; a positive operator cannot create an entry absent from the finite prefix, so every such term kills the prefix, and the expansion computed in the larger cut agrees with the expansion in the smaller cut on the images of its vectors. [F1, F2, step 2.1]

4.1 **Common lower tails.** Let $k-1$ be a common bottom entry appended by the embedding $\iota_k$ of the monomial-basis theorem. Every wedge of the image contains $k-1$ as its smallest entry. The factor bars act by replacing letters; a positive operator cannot remove the smallest entry, and correction terms that do not involve the tail preserve it, so every term of $\psi\iota_k(M_A)$ still contains the appended tail $k-1$ in each column. Hence $\psi\iota_k(M_A)=\iota_k(\psi M_A)$ and chart/basis vectors are carried to chart/basis vectors. The upper and lower statements are exactly the compatibility assertions of [F2] for the embeddings of the monomial-basis theorem. [F1, F2, step 2.1, step 3.2]

5.1 **The direct limit.** Every vector of the full Fock module lies in the image of some finite double cut, and every calculation in the expansion of $\psi$ is finite and stabilizes in a cut containing the residue and the input and output supports by steps 3.1, 3.2. Hence the compatible family of bars defines a bar on the direct limit, still involutive and triangular, and it fixes each ordered fundamental wedge. No infinite series is taken. [F1, F2, step 2.2, step 3.2, step 4.1]

6.1 **Conclusion.** On every finite cut the Fock module has the ordinary compatible bar $\psi$ of (1)-(2); the upper-cut and common-tail embeddings commute with it by (3), so it descends to the full bounded or semi-infinite module. All uses are confined to actual finite-Cartan based fundamental factors; neither a universal two-sided-unbounded tensor-bar theorem nor an arbitrary integral quasi-$R$ action is asserted. [step 1.1, step 2.1, step 2.2, step 3.1, step 3.2, step 4.1, step 5.1] ∎
