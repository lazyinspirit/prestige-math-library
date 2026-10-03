---
page: classical-complex-algebraic-actions-and-affine-embeddings-examples
title: "Classical Complex Algebraic Actions and Affine Embeddings — Examples"
status: draft
requires: [classical-complex-algebraic-actions-and-affine-embeddings]
items: []
examples: [ex-torus-weights-and-affine-action,
           cex-abstract-group-action-is-not-algebraic-action,
           ex-additive-translation-equivariant-parabola-embedding]
---

The torus example computes a grading in full. For $T=\mathbb C^*$ acting on
$\mathbb A^2$ by $t(x,y)=(tx,t^{-1}y)$, inverse pullback sends $x$ to
$t^{-1}x$ and $y$ to $ty$, so the coordinate ring is graded by the degree
$\deg(x^ay^b)=b-a$, the degree-zero part is $A_0=\mathbb C[xy]$, and the
two-dimensional generating submodule $W=\mathbb Cx+\mathbb Cy$ realizes the
identity embedding of the plane into its dual, whose weights $(1,-1)$ are the
opposites of the coordinate degrees. This makes the general dictionary
concrete in the simplest nontrivial case.

The counterexample separates algebraic actions from abstract ones. The group
$G=(\mathbb C,+)$ acts on $\mathbb A^1$ by $g\cdot x=x+\overline g$. This is a
genuine abstract action by polynomials in $x$ for each fixed $g$, but the
joint map is not a morphism: its restriction along $g\mapsto(g,0)$ would have
to be a polynomial in $g$ that equals the identity on $\mathbb R$, hence the
identity polynomial, and it would then take $i$ to $i$ instead of $-i$.
Correspondingly, the stable coordinate subspace $\operatorname{span}(1,z)$
has the nonregular matrix coefficient $-\overline g$, and no
finite-dimensional stable subspace containing $z$ can be algebraic, so the
coordinate representation is not rational. Thus an abstract action of the
group of complex points by individual polynomial maps need not be an
algebraic action.

The parabola example runs the embedding construction explicitly. For
$G=(\mathbb C,+)$ acting on $\mathbb A^1$ by $g\cdot x=x+g$, the subspace
$W=\operatorname{span}(1,z,z^2)$ is a generating rational submodule on which
inverse pullback acts by $1\mapsto1$, $z\mapsto z-g$, $z^2\mapsto z^2-2gz+g^2$.
Evaluation sends $x$ to $(1,x,x^2)\in W^*\cong\mathbb A^3$, with closed image
the parabola $a=1$, $c=b^2$ and regular inverse $x=b$, and the dual action is
the linear map $g(a,b,c)=(a,b+ga,c+2gb+g^2a)$, which sends
$(1,b,b^2)$ to $(1,b+g,(b+g)^2)$.
