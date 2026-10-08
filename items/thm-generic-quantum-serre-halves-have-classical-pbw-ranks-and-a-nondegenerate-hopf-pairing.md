---
id: thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing
kind: theorem
title: Generic quantum Serre halves have classical PBW ranks and a nondegenerate Hopf
  pairing
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free
- lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra
- def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum
- def-axiom-of-choice
- def-field-of-fractions
- def-restriction-and-extension-of-scalars
- lem-pbw-for-countably-presented-kac-moody-lie-algebras
- lem-quantum-pascal-recurrence-and-gaussian-integrality
- thm-right-exactness-of-tensor-products
aliases: []
dependency_level: 6
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
  - title: Benjamin Enriquez, PBW and Duality Theorems for Quantum Groups and Quantum
      Current Algebras, Journal of Lie Theory 13 (2003), 21–64
    url: https://www.heldermann-verlag.de/jlt/jlt13/enrila.pdf
    locator: '§1.1, printed pp.22–24, Theorem 1.2 and Corollaries 1.2–1.3; equation
      (3) has generator value (1/hbar)d_i^{-1}. §2.2, printed p.37: word pairing and
      annihilator argument, with the printed defects corrected in the local Serre
      supplier. The local proof supplies full braided coproduct descent and the rational
      generic normalization explicitly.'
  - title: Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for
      Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390
    url: https://arxiv.org/pdf/math/0305390
    locator: '§1, printed pp.5–6, displays (1.4)–(1.7): symmetric Serre presentation,
      full Hopf formulas and the stated triangular-decomposition interface. The braided
      half coproducts and their descents are proved locally.'
pipeline_run: frontier-43-complex-representation-15
---

## Statement

Let $R=\mathbb C\llbracket\hbar\rrbracket$, $K=\mathbb C((\hbar))$, $q=e^\hbar$, and $q_i=e^{d_i\hbar}$ for a finite symmetrizable Cartan datum. Let $H^+=U_\hbar\mathfrak n^+$, $\langle V\rangle$ and the shuffle product be as in [[def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum]], and put $H^-=T(V^*)/J_-$ using [[lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra]]. Assume AC ([[def-axiom-of-choice]]), used only through the formal embedding theorem. For an indeterminate $z$, let $H_z^\pm$ be the algebras over $\mathbb C(z)$ presented by the separate symmetric quantum Serre relations, with parameters $z_i=z^{d_i}$.

(i) Each $H^\pm[\pm\alpha]$ is finite free over $R$, and
$$\operatorname{rank}_R H^\pm[\pm\alpha]=\dim_{\mathbb C}U(\mathfrak n^\pm)[\pm\alpha]=\dim_{\mathbb C(z)}H_z^\pm[\pm\alpha].$$
Every family of homogeneous lifts of a basis of the classical component is an $R$-basis. Likewise, homogeneous word expressions with coefficients rational in $z$, regular at $z=1$, which reduce to a classical component basis form a basis of the corresponding generic component. In particular, for a supplied ordered homogeneous basis of $\mathfrak n^\pm$, ordered monomials in any such regular lifts form a generic PBW basis.

(ii) Both formal halves are graded braided Hopf algebras. Their generators are primitive, their counits kill positive height, and their tensor squares use
$$ (u\otimes v)(u'\otimes v')=q^{-\langle\deg u',\deg v\rangle}uu'\otimes vv',\qquad \langle\epsilon_i,\epsilon_j\rangle=d_i a_{ij},$$
with negative degrees for $H^-$. The word pairing restricts and descends to a nondegenerate $K$-valued pairing $H^+\times H^-$ with $\langle e_i,f_j\rangle=\delta_{ij}/(\hbar d_i)$ and $\langle1,1\rangle=1$. It is zero on unequal opposite degrees and satisfies the braided Hopf adjunctions
$$\langle x,yy'\rangle=\sum\langle x_{(1)},y\rangle\langle x_{(2)},y'\rangle,\qquad\langle xx',y\rangle=\sum\langle x,y_{(1)}\rangle\langle x',y_{(2)}\rangle.$$
The generic halves have the same braided Hopf structures and a nondegenerate $\mathbb C(z)$-valued pairing normalized by $\langle e_i,f_j\rangle_z=\delta_{ij}/(z_i-z_i^{-1})$. Thus opposite graded components are dual. All generic assertions also hold for the corresponding $\mathbb Q(z)$-presentations and their rational pairing, with the PBW lift clause using bases of the rational classical Serre form.

## Facts & Assumptions

**Given:** The finite symmetrizable datum, its formal and generic Serre presentations and the formal parameter.

[F1] The positive formal half is isomorphic to $\langle V\rangle$, its intrinsic reduction is $U(\mathfrak n^+)$, and its finite free components have the stated classical and generic ranks; AC enters only in its coideal argument ([[thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free]], [[def-axiom-of-choice]]).

[F2] The negative Serre ideal annihilates $\langle V\rangle$ under the diagonal pairing of word bases with value $\hbar^{-k}\prod_t d_{i_t}^{-1}$ on matching length-$k$ words. The cut coproduct is an algebra map to the scalar-braided tensor square and preserves the generated half ([[lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra]]).

[F3] The formal word space is degreewise finite free, its scalar form is symmetric, and the Serre coefficients are symmetric Gaussian Laurent polynomials ([[def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum]], [[lem-quantum-pascal-recurrence-and-gaussian-integrality]]).

[F4] The classical half admits an ordered homogeneous basis obtained by enumerating its finite bracket words, and ordered monomials in that basis form its enveloping-algebra basis ([[lem-pbw-for-countably-presented-kac-moody-lie-algebras]]).

[F5] Tensoring is right exact, so the tensor quotient kernel is the sum of the two factor kernels; over a field every injection remains injective after scalar extension ([[thm-right-exactness-of-tensor-products]], [[def-restriction-and-extension-of-scalars]]).

[F6] The fraction field of $R$ is $K$, and a domain embedding into a field extends to its fraction field ([[def-field-of-fractions]]).

## Proof

1.1 The identification of free generators $e_i\mapsto f_i$ carries the positive Serre presentation onto the negative one, reversing degrees; the same holds classically and generically. Thus [F1] gives all three rank equalities and finite freeness on both sides. In a fixed finite free component, lifts of a classical basis have a coordinate matrix whose reduction is invertible over $\mathbb C$, so its determinant has nonzero constant term and is an $R$-unit. The adjugate identity makes this matrix invertible over $R$, proving the formal lift assertion. [F1, F3, algebra]

1.2 Give the free positive tensor algebra the primitive-generator coproduct into its scalar-braided tensor square. Its map to $\langle V\rangle$ commutes with the cut coproduct: both are algebra maps by [F2] and agree on each letter. By [F1] its kernel is precisely the positive Serre ideal. Hence the composite of the tensor coproduct with the two quotient maps kills that ideal, and [F5] gives its coideal inclusion and descended coproduct. The same presentation identification gives the negative coproduct. Coassociativity and counit follow on primitive generators and hence on the generated algebras. The color-height grading is connected, so the reduced coproduct of a positive-height homogeneous element has both factors of strictly smaller height. The recursion $S(x)=-x-\sum S(x')x''$ and its right-handed counterpart provide left and right convolution inverses by height induction; associativity of convolution makes them equal. Thus both quotients are braided Hopf algebras. [F1, F2, F3, F5, algebra]

2.1 The substitution $z\mapsto e^\hbar$ embeds $\mathbb C(z)$ into $K$: a nonzero polynomial is $(z-1)^m p(z)$ with $p(1)\ne0$, and its value is the nonzero product $(e^\hbar-1)^m p(e^\hbar)$ in the domain $R$; fractions then embed by [F6]. In each color degree the generic and formal quotients after extension to $K$ have the same finite word presentation, since the Serre coefficients specialize as in [F3]. A regular rational lift of a classical component basis therefore gives the formal basis of step 1.1 and, after field extension, a generic basis. Applying this degree by degree to the ordered monomials of [F4] proves the PBW monomial clause. [F1, F3, F4, F5, F6, step 1.1, algebra]

2.2 By [F2], the diagonal pairing restricts to $\langle V\rangle\times H^-$, and [F1] identifies the first factor with $H^+$. The cut adjunction is the wordwise concatenation identity. For the other adjunction, the coefficient of a word $w$ in a shuffle $u*v$ equals the coefficient of $u\otimes v$ in the primitive braided tensor coproduct of $w$: both sum over the assignments of letters to the two blocks with inversion scalar $q^{-\langle\deg u',\deg v\rangle}$. The degree form is symmetric by [F3], and the diagonal generator weights multiply in the same way on both sides. Thus both adjunctions hold on free representatives, and step 1.2 and the descended pairing make them adjunctions on the quotient coproducts themselves. The empty word gives $\langle1,1\rangle=1$ and all positive-degree counit pairings vanish. [F1, F2, F3, step 1.2, algebra]

2.3 Fix $\alpha\in Q_+$. If an element of $H^+[\alpha]\otimes_R K$ pairs to zero with every negative class, its realization in the shuffle word space pairs to zero with every negative tensor word, since all those words map to quotient classes. The diagonal word pairing has zero left annihilator, so that realization is zero. The realization remains injective after extension to $K$ by [F1] and [F5]. The opposite components have equal finite dimension by step 1.1; an injective map from one into the other's dual is consequently bijective. Thus both annihilators vanish. For nonhomogeneous elements, separate the finitely many homogeneous components, proving the asserted nondegeneracy. [F1, F2, F5, step 1.1, algebra]

3.1 Define the generic word pairing using shuffle coefficients and matching-word weights $\prod_t(z_{i_t}-z_{i_t}^{-1})^{-1}$. These are rational functions, and under $z=e^\hbar$ their ratio to the formal pairing in a fixed color degree $\alpha$ is $\prod_i u_i^{\alpha_i}$, where $u_i=\hbar d_i/(e^{d_i\hbar}-e^{-d_i\hbar})$ is an $R$-unit with constant term $1/2$. This color-multiplicative rescaling preserves the two adjunctions and nondegeneracy. The specialized generic pairing therefore kills the Serre ideals and is nondegenerate by steps 2.2–2.3; the field embedding of step 2.1 implies the same descent and invertible pairing matrices over $\mathbb C(z)$. Likewise, coassociativity, coideal inclusions and the coproduct formulas descend generically: in each finite degree their errors vanish after the injective field extension, and the antipode recursion applies there as well. All generic presentations and word pairing coefficients lie in $\mathbb Q(z)$, so the same injective extension to $K$ proves the statements over that field. This establishes the full braided Hopf pairing with the rational normalization needed for the Drinfeld–Jimbo commutator. [F3, F5, step 2.1, step 1.2, step 2.2, step 2.3, algebra] ∎
