---
page: coherent-duality-on-projective-cohen-macaulay-schemes-examples
title: "Coherent Duality on Projective Cohen-Macaulay Schemes — Examples"
status: draft
requires: [coherent-duality-on-projective-cohen-macaulay-schemes]
items: []
examples:
  - ex-serre-duality-on-a-singular-projective-cm-curve
  - ex-serre-duality-on-a-smooth-projective-surface
  - cex-serre-duality-without-properness
---

These examples and counterexamples exercise the coherent duality theorem of
[[coherent-duality-on-projective-cohen-macaulay-schemes]] on explicit schemes
and record the boundary at which its hypotheses are needed.

The first leaf,
[[ex-serre-duality-on-a-singular-projective-cm-curve]], computes the nodal
plane cubic $y^2z=x^2(x+z)$ in $\mathbb P^2_k$ over an algebraically closed
field of characteristic zero. The cubic is integral, singular exactly at its
node, and Cohen–Macaulay because it is a hypersurface; dualizing the structure
sequence into $\omega_{\mathbb P^2}=\mathcal O(-3)$ identifies the ambient
sheaf Ext with $\mathcal O_C$, so $\omega_C\cong\mathcal O_C$ even though $C$
is singular. The trace pairs the one-dimensional spaces $H^1(C,\mathcal O_C)$
and $H^0(C,\omega_C)$, and at the node the skyscraper $k_p$ satisfies
$\operatorname{Ext}_C^1(k_p,\omega_C)=k$ while
$\operatorname{Hom}_C(k_p,\omega_C)=0$. This is the case that a smooth
locally free theorem cannot reach: the dualizing sheaf is a line bundle here,
but the coherent sheaf being dualized is not locally free.

The second leaf,
[[ex-serre-duality-on-a-smooth-projective-surface]], runs the same theorem on
the smooth surface $\mathbb P^2_k$, where the smooth specialization fixes
$\omega_X=\mathcal O(-3)$. Duality pairs the binomial-dimensional space of
degree-$m$ monomials in $H^0(X,\mathcal O(m))$ with $H^2(X,\mathcal O(-m-3))$
through the Laurent coefficient of $(x_0x_1x_2)^{-1}$, and the point
skyscraper at a rational point computes
$\operatorname{Ext}_X^2(k_p,\omega_X)=k$ with
$\operatorname{Ext}_X^1(k_p,\omega_X)=\operatorname{Hom}_X(k_p,\omega_X)=0$.
The surface leaf therefore covers both the vector bundle twists and a coherent
sheaf that is not locally free.

The counterexample,
[[cex-serre-duality-without-properness]], shows that properness cannot be
dropped from the statement. On the smooth affine line
$X=\operatorname{Spec}k[t]$ with $F=\mathcal O_X$ and $\omega_X=\Omega^1_{X/k}$,
affine acyclicity gives $H^1(X,F)=0$ while
$\operatorname{Ext}_X^0(F,\omega_X)=\Gamma(X,\Omega^1)=k[t]\,dt$ is nonzero,
so the degree-one duality isomorphism fails. The scheme is smooth and pure of
dimension one; it is not proper, as the projection of $V(xt-1)$ witnesses.
Local dualizing complexes still exist on the affine line; what fails is the
global trace representation supplied by a projective embedding.
