---
page: jordan-spin-factor-and-alternative-algebras
title: "Jordan Algebras, Spin Factors, and Alternative Examples"
status: draft
items: [ def-jordan-algebra, def-alternative-algebra, def-involutive-complex-associative-algebra, def-associative-jordan-product, thm-associative-symmetrization-satisfies-jordan-identity, def-real-spin-factor, thm-real-spin-factor-is-jordan, prop-real-spin-factor-maps-onto-clifford-jordan-subalgebra, def-octonion-algebra-by-cayley-dickson, lem-quaternion-conjugation-is-an-anti-involution, lem-octonion-conjugation-is-an-anti-involution, thm-octonions-are-alternative-but-not-associative, def-hermitian-three-by-three-octonion-matrix-data, thm-real-albert-algebra-is-jordan ]
examples: []
requires:
  - clifford-universal-algebras-and-pbw
  - hilbert-space-geometry-and-riesz-representation
---

This page develops three bounded constructions. A Jordan algebra is a commutative
algebra satisfying the Jordan identity, not necessarily an associative algebra.
The symmetrized product on an associative algebra supplies the basic special
example; its self-adjoint part is closed under that product. The real spin
factor is checked directly and compared with the plus-$Q$ Clifford convention.
Finally, the Cayley–Dickson octonions provide an alternative nonassociative
algebra, and their Hermitian $3\times3$ matrices give the real Albert Jordan
algebra.

## Associative algebras and Jordan products

[[def-jordan-algebra]] fixes the characteristic-not-two Jordan identity, while
[[def-alternative-algebra]] records the two alternative laws independently of
associativity. For a unital associative algebra, [[def-associative-jordan-product]]
defines $a\circ b=(ab+ba)/2$. [[thm-associative-symmetrization-satisfies-jordan-identity]]
expands both sides to verify the Jordan identity and shows that the self-adjoint
part of a complex associative algebra with involution is closed under the
symmetrized product. [[def-involutive-complex-associative-algebra]] specifies the
involution convention used there.

## Spin factors and Clifford normalization

For a real positive-definite inner-product space $V$,
[[def-real-spin-factor]] defines the product on $S(V)=V\oplus\mathbb R$.
[[thm-real-spin-factor-is-jordan]] verifies its unit and Jordan identity by
coordinate expansion. With the plus-$Q$ convention $\bar v^2=\langle v,v\rangle1$,
[[prop-real-spin-factor-maps-onto-clifford-jordan-subalgebra]] constructs the map
$(v,\alpha)\mapsto\bar v+\alpha1$, proves product preservation and injectivity
using the finite-dimensional PBW basis, and identifies the square cone with
$\alpha\geq\|v\|$; the proof uses the induced inner-product norm and real square
roots. In the induced norm product topology its null boundary is the future component
$\alpha\geq0$ of $\alpha^2-\|v\|^2=0$.

## Octonions and the Albert algebra

[[def-octonion-algebra-by-cayley-dickson]] fixes the pair multiplication and
named basis. [[lem-quaternion-conjugation-is-an-anti-involution]] and
[[lem-octonion-conjugation-is-an-anti-involution]] prove the conjugation facts
needed by [[thm-octonions-are-alternative-but-not-associative]], which verifies
both alternative laws and gives a nonzero associator. For
[[def-hermitian-three-by-three-octonion-matrix-data]], matrix multiplication is
the displayed ordered binary sum and the product is $m(X,Y)=(XY+YX)/2$.
[[thm-real-albert-algebra-is-jordan]] proves Hermitian closure and the Jordan
identity for this fixed $3\times3$ model using an exact finite coefficient
certificate. No classification theorem or claim for other matrix sizes is
included.

## Sources and scope

The definitions and conventions were checked against Jacobson’s
[lecture notes](https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf),
Baez’s [*The Octonions*](https://arxiv.org/pdf/math/0105155v4), and Petersson’s
[*Albert Algebras*](https://www.fieldsinstitute.ca/programs/scientific/11-12/exceptional/Alb.-alg.-Ottawa-2012-Vii-new.pdf).
Every nontrivial local identity used by these items has a proof in its carrier;
the source statements do not replace those arguments. General Jordan-module
identification, formally-real classification, larger $H_n(\mathbb O)$ claims,
determinant formulas, projective-plane results, and physics applications are
outside this page’s scope.
