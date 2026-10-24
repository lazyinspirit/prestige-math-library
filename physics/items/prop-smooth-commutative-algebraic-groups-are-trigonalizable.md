---
id: prop-smooth-commutative-algebraic-groups-are-trigonalizable
kind: proposition
title: "Smooth commutative affine algebraic groups over algebraically closed fields are trigonalizable"
dependency_level: 8
deps:
  - def-affine-scheme
  - def-axiom-of-choice
  - def-group-scheme-over-a-field
  - def-rational-representation-and-comodule-of-an-affine-group-scheme
  - def-smooth-morphism-schemes
  - lem-smooth-finite-type-schemes-have-schematically-dense-rational-points
  - lem-trigonalizable-iff-invariant-flags
  - thm-simultaneous-triangularisation-of-commuting-operators
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Lemma 16.11 and Proposition 16.12, printed pp. 327-328
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Section 2.1, Proposition 37, pp. 19-20
---
## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field and let $G$ be a smooth commutative affine algebraic group of finite type over $k$ ([[def-affine-scheme]], [[def-smooth-morphism-schemes]]), together with a finite-dimensional rational representation on $V$ ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]). Then there is a basis of $V$ for which $G$ acts through upper triangular matrices. In particular every smooth commutative affine algebraic group over an algebraically closed field is trigonalizable ([[def-group-scheme-over-a-field]], [[lem-trigonalizable-iff-invariant-flags]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth commutative affine finite-type $k$-group $G$, and a finite-dimensional representation $V$ of $G$.

[F1] The images of the $k$-points $G(k)$ in $\operatorname{GL}(V)$ form a commuting family of linear operators, and the characteristic polynomial of each $g\in G(k)$ splits over the algebraically closed field $k$. ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]])

[F2] A commuting family of endomorphisms of a finite-dimensional vector space over an algebraically closed field, each of whose characteristic polynomials splits, admits a basis in which all the endomorphisms are upper triangular. ([[thm-simultaneous-triangularisation-of-commuting-operators]])

[F3] Assume AC. For a smooth finite-type $k$-scheme $G$ over an algebraically closed field, $G(k)$ is schematically dense: a closed subscheme $H\subseteq G$ with $H(k)=G(k)$ equals $G$. ([[lem-smooth-finite-type-schemes-have-schematically-dense-rational-points]])

[F4] A group $G$ is trigonalizable if every finite-dimensional representation admits a basis with $G$ acting by upper triangular matrices. ([[lem-trigonalizable-iff-invariant-flags]])

## Proof

**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth commutative affine $k$-group $G$, and a finite-dimensional representation $V$.

1.1 By [F1] the operators in the image of $G(k)$ commute pairwise and have splitting characteristic polynomials, so [F2] provides a basis of $V$ in which every $g\in G(k)$ is upper triangular. Fix such a basis and let $H=G\cap T_n$ be the closed subgroup scheme of elements acting by upper triangular matrices in this basis. [F1, F2]

2.1 By construction $G(k)\subseteq H(k)$; since $G$ is smooth over the algebraically closed field $k$, [F3] applied to the closed subscheme $H\subseteq G$ with $H(k)=G(k)$ gives $H=G$. Hence the representation of $G$ on $V$ is upper triangular in the chosen basis. Applying this to every finite-dimensional representation shows that $G$ is trigonalizable by [F4]. [F3, F4, step 1.1] ∎ 