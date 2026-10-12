---
page: ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison
title: "Ordinary Hecke Specht Polytabloids and Signed Murphy Comparison"
status: draft
requires: [principal-series-representations-of-gl-n-over-a-finite-field,
           young-diagrams-tableaux-and-permutation-modules,
           integral-specht-modules-and-modular-simple-modules,
           free-modules-and-exact-sequences,
           noetherian-rings-and-hilbert-basis,
           the-hook-length-formula-and-rsk-correspondence,
           modular-representations-and-projective-covers]
items: [def-dj-bridge-row-column-permutation-modules-and-polytabloids,
        lem-dj-bridge-row-permutation-module-standard-action,
        lem-dj-bridge-permutation-form-invariance-and-restriction,
        lem-dj-bridge-sign-automorphism-and-star-dual,
        lem-dj-bridge-parabolic-double-coset-annihilation,
        lem-dj-bridge-murphy-cellular-basis-and-cell-form,
        lem-dj-bridge-integral-murphy-and-polytabloid-straightening,
        lem-dj-bridge-theta-transport-of-the-cellular-structure,
        thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual,
        thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell,
        cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]
examples: []
---

**Objective.** This page builds the integral comparison between the ordinary
Dipper-James polytabloid module $P(\lambda)=z_\lambda H$ and the sign-twisted
Murphy cell $C_{\mathrm M}(\lambda')^\theta$ over the generic type-$A$ Hecke
algebra, with every unit, ideal and form tracked exactly over
$A=\mathbb Z[q^{\pm1}]$ and after every base change to a commutative ring $R$
with $q\in R^\times$. All modules are right modules; the normalization is
$(T_i-q)(T_i+1)=0$, $x_\lambda=\sum_{w\in S_\lambda}T_w$,
$y_\lambda=\sum_{w\in S_\lambda}(-q)^{-\ell(w)}T_w$ and
$z_\lambda=x_\lambda T_{w_\lambda}y_{\lambda'}$. The integral module constructions precede the generic semisimplicity argument,
which is used only for form uniqueness before specialization. The unavailable
primary sources are never invoked, and no choice principle is used.

## The row module, its form and the sign automorphism

[[def-dj-bridge-row-column-permutation-modules-and-polytabloids]] fixes the
objects: the Hecke algebra $H$, the star anti-involution $T_i^*=T_i$, the row
permutation module $M(\lambda)=x_\lambda H$, the ordinary Dipper-James
polytabloid module $P(\lambda)=z_\lambda H$, the distinguished coset set
$D_\lambda$ of row-standard right coset representatives, and the permutation
form $\beta$ with diagonal values $\beta(x_\lambda T_d,x_\lambda T_e)=
\delta_{d,e}q^{\ell(d)}$.
[[lem-dj-bridge-row-permutation-module-standard-action]] proves that
$\{x_\lambda T_d:d\in D_\lambda\}$ is a basis of $M(\lambda)$, computes the
three-case action of a generator, and shows that all of this survives base
change, and
[[lem-dj-bridge-permutation-form-invariance-and-restriction]] proves that
$\beta$ is $H$-contravariant, symmetric and well defined and that its
restriction to $P(\lambda)$ — the DJ form — inherits the same identity.
[[lem-dj-bridge-sign-automorphism-and-star-dual]] constructs the involutive
sign automorphism $\theta$ with $\theta(T_i)=(q-1)-T_i=-qT_i^{-1}$,
$\theta(x_\lambda)=q^{\ell(w_0(S_\lambda))}y_\lambda$, its exact action on
modules and on the star-contragredient, and the base-change compatibility that
every later unit is measured against.

## The vanishing lemma and the Murphy cellular structure

[[lem-dj-bridge-parabolic-double-coset-annihilation]] proves the annihilation
identity that all later integral arguments consume: if
$\sum_{i\le k}\alpha_i>\sum_{i\le k}\nu'_i$ for some $k$, then
$x_\alpha Hy_\nu=0$, by an explicit sorting of minimal parabolic double cosets
and the exact quadratic zero product $(1+T_i)(1-q^{-1}T_i)=0$ — no cancellation
of $q+1$ and no division anywhere.
[[lem-dj-bridge-murphy-cellular-basis-and-cell-form]] then rebuilds the
Murphy theory locally: the Murphy basis $m^\rho_{st}=T_{d(s)}^*x_\rho T_{d(t)}$
of $H$, the dominance ideals $I^{\rhd\rho}$ and $I^{\unrhd\rho}$, the cell
module $C_{\mathrm M}(\rho)=M(\rho)/(M(\rho)\cap I^{\rhd\rho})$ with its
first-index-independent cell law, and the Murphy form $G_\rho$, all over
every coefficient ring and with the form allowed to degenerate.

## The integral polytabloid basis and the two bridge theorems

[[lem-dj-bridge-integral-murphy-and-polytabloid-straightening]] is the
integral heart of the page: it proves that $P(\lambda)$ is free with basis
$e_t=z_\lambda T_{d_{\lambda'}(t)}$ indexed by the standard tableaux of the
conjugate shape, exhibits the unit-triangular embedding minor
$e_t=q^{\ell(d_\mu(t))}b_{t'}+\text{(strictly lower terms)}$, derives the exact
signed Garnir relations $z_\lambda\sum_{d\in D}\theta(T_d)=0$, records the
Gram matrix of the restricted DJ form through the embedding (which need not be
nonsingular), and proves the split inclusion without any generic dimension
count.
[[lem-dj-bridge-theta-transport-of-the-cellular-structure]] transports the
Murphy cellular structure along $\theta$: the transported basis, the image
ideals $\theta(I^{\rhd\lambda})$ and $\theta(I^{\unrhd\lambda})$ (which are
generally different subspaces from the originals — over the generic Laurent ring, already for $n=2$ and
$\lambda=(2)$ one has $\theta(x_{(2)})=q-T_1\notin R(1+T_1)$), the module
isomorphism $C_{\mathrm M}(\lambda)^\theta\cong
\theta(M(\lambda))/\theta(M(\lambda)\cap I^{\rhd\lambda})$, and the
transported form.

[[thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual]] proves the
same-shape perfect cross-pairing $C_{\mathrm M}(\lambda)\times P(\lambda)\to R$
with determinant a unit, identifies $C_{\mathrm M}(\lambda)$ with
$P(\lambda)^\circ$ and pins the kernel of the row quotient to the orthogonal
complement of $P(\lambda)$ — without ever inverting the DJ form.
[[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]] is the
main theorem: a base-change compatible isomorphism
$\Phi_\lambda:P(\lambda)\to C_{\mathrm M}(\lambda')^\theta$ with the exact
unit $u_\lambda(q)=q^{\ell(w_0(S_{\lambda'}))-\ell(w_\lambda)}$ relating the
DJ form to the transported Murphy form. Its generic uniqueness step is the
only place where the regular trace and Jacobson nilpotence enter;
[[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]] supplies
nilpotence, and the semisimplicity and nondegeneracy conclusions are drawn
over $\mathbb Q(q)$ before the already-integral identity is specialized.

## Specialization and the dictionary

[[cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]]
collects the consequences: at $q=1$ over every field the module and its form
specialize to the ordinary integral Specht lattice and the standard tabloid
form with $\theta$ becoming the sign twist; for an arbitrary unit over a field
the composition multiplicities match between $P(\lambda)$ and the conjugate
Murphy cell; and a Schur corner already proved to attach
$W(\lambda)\mapsto C_{\mathrm M}(\lambda)$ and
$L(\lambda)\mapsto D^\lambda_{\mathrm M}$ gives the $\theta$-twisted
dictionary $F(W(\lambda'))\cong P(\lambda)^\theta$ and
$F(L(\lambda'))\cong(D^\lambda_{\mathrm{DJ}})^\theta$, including the zero
case. The companion
[[ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison-examples]]
works the rank-three instances, the singular two-tableau shape and the
untwisted-conjugation counterexample.
