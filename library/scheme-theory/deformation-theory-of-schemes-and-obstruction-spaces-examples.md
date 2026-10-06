---
page: "deformation-theory-of-schemes-and-obstruction-spaces-examples"
title: "Deformation Theory of Schemes and Obstruction Spaces — Examples"
status: published
requires: [deformation-theory-of-schemes-and-obstruction-spaces]
items: []
examples: ["ex-first-order-deformations-of-a-hypersurface",
           "cex-vanishing-tangent-space-does-not-imply-rigidity-with-automorphisms"]
---

These examples make the deformation-theoretic calculus concrete. The plane
conic $C=Z(x_0^2-x_1x_2)\subseteq\mathbb P^2_k$ in characteristic $\ne2$ has
first-order embedded deformations $Z(f+\epsilon g)$, and the coefficient
relation $g'-g\in k\cdot f$ between normalised lifts identifies the
isomorphism classes with $(S/(f))_2$, of dimension $5$, in agreement with
$h^0(C,\mathcal N_{C/\mathbb P^2})=h^0(\mathcal O_C(2))=5$; since
$h^1(\mathcal O_C(2))=0$ the deformation functor is unobstructed and the
degree-two Hilbert component is $\mathbb P(S_2)=\mathbb P^5$. The same
computation for a smooth quadric surface in $\mathbb P^3$ gives dimension $9$,
matching the classical table $h^0(\mathcal N_Q)=9$, and for a general smooth
hypersurface of degree $d$ in $\mathbb P^n$ gives $\binom{n+d}{n}-1$.

The counterexample separates rigidity of isomorphism classes from rigidity of
the deformation groupoid. On the affine line $\mathbb A^1_k$ the deformation
tangent space vanishes, $H^1(\mathbb A^1,\mathcal O)=0$, so every deformation
class is trivial; nevertheless the trivial deformation over the dual numbers
carries the non-identity automorphism $x\mapsto x+\epsilon x^2$ with inverse
$x\mapsto x-\epsilon x^2$, corresponding to the nonzero derivation
$x^2\partial_x\in\operatorname{Der}_k(k[x],k[x])$. Vanishing of
$\operatorname{Ext}^1$ therefore forces rigidity of isomorphism classes only,
and the groupoid remains nontrivial whenever $\operatorname{Ext}^0$ does not
vanish.
