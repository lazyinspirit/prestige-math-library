---
id: lem-multiplicative-type-groups-split-separably
kind: lemma
title: "Multiplicative type groups split over a finite Galois extension"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups, corrected 2022 edition"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "SGA 3, Expose VIII, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp8-8nov09.pdf
    - title: "SGA 3, Expose X, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Expo10-8nov09.pdf
deps: ["def-group-of-multiplicative-type-and-torus", "lem-multiplicative-type-affineness-by-field-descent", "def-axiom-of-choice", "lem-finite-subcoalgebras-in-multiplicative-coordinate-algebras", "lem-diagonalizable-character-antiequivalence", "thm-finite-galois-extension-characterizations"]
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $k_s$ be a separable closure of an arbitrary field $k$. Every finite-type group of multiplicative type over $k$ is diagonalizable over $k_s$, and over a finite Galois subextension $L/k$ of $k_s/k$.

## Facts & Assumptions

[F1] Multiplicative type has the full fpqc group-scheme convention of [[def-group-of-multiplicative-type-and-torus]]. Assuming AC, [[lem-multiplicative-type-affineness-by-field-descent]] proves affineness and splitting over a field.

[A1] Assume [[def-axiom-of-choice]]; its use is precisely the affine field-descent interface in F1.

[F2] Finite coalgebra pieces and their split duals are supplied by [[lem-finite-subcoalgebras-in-multiplicative-coordinate-algebras]].

[F3] Monomials are all characters, and finite algebra generation is equivalent to finite group generation: [[lem-diagonalizable-character-antiequivalence]].

[F4] Normal separable finite extensions are Galois: [[thm-finite-galois-extension-characterizations]]. The separable closure $k_s$ is fixed as part of the given data; this item does not construct it.

## Proof

**Given:** AC and a finite-type group scheme $G$ of multiplicative type. By F1 write $G=\operatorname{Spec}A$ and choose a field extension $K/k$ splitting it.

1.1 The affineness and splitting data supplied by F1 give $A$ and the extension $K$, so the calculation below takes place in the coordinate algebra of $G$ over the splitting field. For a finite subcoalgebra $C\subset A$, the finite algebra $E=C^*$ is commutative (commutators vanish after the faithful extension to $K$) and satisfies $E\otimes K\cong K^d$ by F2. For each $a\in E$, let $f_a$ be its minimal polynomial over $k$. The independent powers preceding its degree stay independent under extension, so $f_a$ is also the minimal polynomial over $K$. In $K^d$, that polynomial is the product of the distinct linear factors associated to the coordinate values of $a$. Thus $f_a$ is separable over $k$. Choose a finite algebra generating set of $E$, for example a vector-space basis. Over $k_s$, each generator has a split squarefree minimal polynomial, whose Lagrange interpolation idempotents decompose the algebra into factors on which that generator is a scalar. Repeating with the finitely many generators decomposes $E\otimes k_s$ into factors generated only by scalars, hence copies of $k_s$. Dualizing shows that $C\otimes k_s$ is spanned by group-like elements. Every element of $A$ belongs to a finite subcoalgebra by F2, so $A\otimes k_s$ is spanned by its group-like elements. [F1, A1, F2, F4, algebra]

2.1 Distinct group-like elements in any coalgebra are linearly independent. Otherwise take a shortest relation, write one as $g=\sum_{i=1}^r a_i g_i$ with the $g_i$ independent and all $a_i\ne0$, and compare $\Delta(g)$ with $g\otimes g$. In the independent tensor family $g_i\otimes g_j$, the off-diagonal coefficients give $a_i a_j=0$ for $i\ne j$, so $r=1$; the diagonal and counit then give $a_1=1$, contrary to distinctness. In a Hopf algebra the group-like elements form an abelian group under multiplication with inverse $S$. Therefore their spanning and independence identify $A\otimes k_s$ with $k_s[M]$ as a Hopf algebra. F3 implies that $M$ is finitely generated. [step 1.1, F3, algebra]

3.1 Choose finite generators $m_1,\ldots,m_r$ of $M$. Their corresponding group-like elements are finite sums of tensors, so all their coefficients lie in a finite separable extension of $k$. Enlarge it inside $k_s$ by adjoining all roots of the finitely many separable minimal polynomials of its generators. This gives a finite normal separable extension $L$, which is Galois by F4. The corresponding group-like elements and their inverses define a Hopf map $L[M]\to A\otimes L$ which becomes the isomorphism of step 2.1 after extension to $k_s$. A map of vector spaces is injective and surjective if it becomes so after field extension: kernels and cokernels tensor exactly, and a nonzero vector stays nonzero. Thus the map is already an isomorphism over $L$. [F3, F4, step 2.1, algebra] ∎
