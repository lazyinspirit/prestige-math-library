---
id: thm-triangular-decomposition-of-a-quantized-enveloping-algebra
kind: theorem
title: Triangular decomposition of a quantized enveloping algebra
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double
- thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing
- def-positive-negative-and-toral-quantum-subalgebras
- def-axiom-of-choice
aliases: []
dependency_level: 7
proof_strategy: direct
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
  - title: Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin
      and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length
      lecture notes, last updated 18 January 2024)
    url: https://categorified.net/LieQuantumGroups.pdf
    locator: Ch. 13, §13.1.3, Theorem 13.1.3.22 (Quantum triangular decomposition)
      with its proof by the commuting square and the ideal identity (13.1.3.23), printed
      pp. 309-310; Lemma 13.1.3.21 is the annihilation input.
  - title: Benjamin Enriquez, PBW and Duality Theorems for Quantum Groups and Quantum
      Current Algebras, Journal of Lie Theory 13 (2003), 21-64
    url: https://www.heldermann-verlag.de/jlt/jlt13/enrila.pdf
    locator: '§2.1-2.3, printed pp. 30-41: the shuffle realization of the Serre-free
      crossed product, the identification $U_\hbar\mathfrak n^+/\hbar U_\hbar\mathfrak
      n^+\cong U\mathfrak n^+$, and the double presentation used for the triangular
      decomposition.'
pipeline_run: frontier-43-complex-representation-15
---

## Statement

Let $U_q(\mathfrak g)$ be the Drinfeld–Jimbo algebra of a finite symmetrizable Cartan datum, over $k=\mathbb Q(q)$, and let $U_q^-,U_q^0,U_q^+$ be its generated subalgebras of [[def-positive-negative-and-toral-quantum-subalgebras]].

(i) Multiplication is a vector-space isomorphism
$$m:U_q^-\otimes_k U_q^0\otimes_k U_q^+\longrightarrow U_q(\mathfrak g),\qquad x_-\otimes x_0\otimes x_+\longmapsto x_-x_0x_+.$$
Products $b_-K_h b_+$, with $b_\pm$ ranging over supplied bases of the two halves and $h\in P^\vee$, form a basis of $U_q(\mathfrak g)$. Arbitrary simple-generator words span the halves; their Serre relations preclude claiming their independence.

(ii) The halves are exactly the algebras presented by their separate Serre relations, and $U_q^0\cong k[P^\vee]$. Thus all three abstract factor maps are injective and the $K_h$ are linearly independent.

(iii) For every $\beta\in Q$, the total root grading satisfies
$$U_q(\mathfrak g)[\beta]\cong\bigoplus_{\alpha,\gamma\in Q_+,\,\alpha-\gamma=\beta} U_q^-[-\gamma]\otimes_k U_q^0\otimes_k U_q^+[\alpha].$$
In particular degree zero contains all equal-positive/negative-degree summands, including $F_iE_i$; it is not just the toral subalgebra. As a left $U_q^0$-module this component is free, with rank equal to the possibly infinite sum of the products of the two half-component dimensions. Under AC ([[def-axiom-of-choice]]), the half-component dimensions are their classical PBW ranks, and products of the generic PBW bases of [[thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing]] with the toral basis give a PBW basis of the whole algebra. AC enters only through that supplier's formal-embedding proof; (i), (ii) and the graded tensor decomposition are choice-free.

## Facts & Assumptions

**Given:** The datum, its Drinfeld–Jimbo algebra and its generated subalgebras.

[F1] The independently presented halves $A^\pm$ and free toral algebra $C=k[P^\vee]$ form an associative algebra on $A^-\otimes C\otimes A^+$; its normal-factor multiplication to $U_q(\mathfrak g)$ is an isomorphism and identifies the factor images with the generated subalgebras. This follows from the locally proved Serre-free normal forms, opposite Serre commutators and factor-ideal identity ([[lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double]]).

[F2] The generated subalgebras are root-graded with $\deg F_i=-\alpha_i$, $\deg E_i=\alpha_i$, $\deg K_h=0$, and toral conjugation on a homogeneous element is given by its additive weight ([[def-positive-negative-and-toral-quantum-subalgebras]]).

[F3] Under AC, both separately presented generic halves have classical PBW ranks and their regular lifts of ordered classical PBW monomials are generic bases, including over $\mathbb Q(q)$ ([[thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing]], [[def-axiom-of-choice]]).

## Proof

1.1 By [F1], the algebra $U_q(\mathfrak g)$ is identified with the tensor space of the independently presented factors, and their injective images are $U_q^-,U_q^0,U_q^+$. Under these identifications the multiplication map $m$ is exactly the normal-factor isomorphism in [F1]. This proves (i) and (ii) without any additional assumption about a quotient presentation's freeness. For supplied factor bases, finite bilinear expansions show that their pure tensors span the tensor product; coordinate functionals on the supplied bases separate the coefficients of every finite sum of those tensors. Thus their pure tensors, and hence their images $b_-K_hb_+$, are a basis. [F1, algebra]

2.1 The normal-factor isomorphism preserves total root degree by [F2], so the degree-$\beta$ tensor subspace is precisely the direct sum over $\alpha-\gamma=\beta$ displayed in (iii). Every algebra element uses finitely many such summands. The equal-degree summands at $\beta=0$ include $F_i\otimes1\otimes E_i$; both factors are nonzero because their simple-root component presentations have no Serre relations. Their independence from $1\otimes C\otimes1$ follows from the tensor decomposition. Hence $U_q(\mathfrak g)[0]$ contains these additional summands and is not just $U_q^0$. [F1, F2, step 1.1, algebra]

3.1 Homogeneous bases of the halves can be obtained by enumerating their words and retaining the first vectors outside the previous span, without choice. For homogeneous half basis vectors $b_-$ of degree $-\gamma$ and $b_+$ of degree $\alpha$, the map $C\to U_q(\mathfrak g)$ sending $c$ to $cb_-b_+$ identifies a free left toral copy: moving $K_h$ past $b_-$ multiplies $b_-K_hb_+$ by the nonzero scalar $q^{-\gamma(h)}$. Step 1.1 therefore identifies the fixed total-degree component with the direct sum of these free left toral copies. Its rank is the sum of the products of the two component dimensions, which may be infinite. With the stated AC hypothesis, [F3] identifies those finite half dimensions with the classical PBW ranks and supplies the generic ordered-monomial bases; inserting their products into step 1.1 gives the asserted full PBW basis. This completes all claims with the exact total grading. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎
