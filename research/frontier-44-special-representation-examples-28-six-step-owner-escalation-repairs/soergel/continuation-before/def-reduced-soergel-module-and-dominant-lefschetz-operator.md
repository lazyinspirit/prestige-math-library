---
id: def-reduced-soergel-module-and-dominant-lefschetz-operator
kind: definition
title: "The reduced Soergel module and the dominant Lefschetz operator"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [lem-normalized-type-a-soergel-bimodules-are-self-dual-and-have-length-degree-bounds, def-real-type-a-soergel-category-and-scalar-extension, def-finite-weyl-root-system-lattice-and-chamber-conventions, lem-finite-weyl-strong-exchange-and-deletion, def-bruhat-order-on-the-symmetric-group, def-graded-ring-module-bimodule-and-internal-shift]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Introduction, display of Theorems 1.3 and 1.4 and the paragraph 'We denote by B the quotient by the image of positive degree polynomials acting on the right'; Section 3.1 display (3.1); Section 3.3 (the bimodule Bbar and the reduction of forms)"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 0.2 (the properties (2) and (3) of the main theorem) and Section 2.1 (hypotheses on V and rho)"
verification:
  precheck: n/a
---

## Definition

**The reduction.** Work over the ring $S=\mathbb R[x_1,\ldots,x_n]$ of the real
scalar-extension definition ([[def-real-type-a-soergel-category-and-scalar-extension]]),
with $S_+=\bigoplus_{d>0}S_d$ the ideal of positive-degree elements; the residue
field of the right action is
$$k:=S/S_+=\mathbb R,$$
with quotient map $S\twoheadrightarrow k$, $s\mapsto \bar s$. For a graded
$(S,S)$-bimodule $M$ that is finite free as a right $S$-module put
$$\overline M:=M\otimes_Sk=M/MS_+,$$
the **reduction** of $M$: a finite-dimensional graded $k$-vector space, on which
the left $S$-action descends because $S_+\subseteq S$ is central and $MS_+$ is
stable under left multiplication. Write $\overline M^{\,i}$ for its homogeneous
component of degree $i$, $d_i(M):=\dim_{\mathbb R}\overline M^{\,i}$ for the
graded dimensions, and
$$\dim\overline M:=\sum_{i\in\mathbb Z}d_i(M)\,v^{-i}$$
for the **graded dimension** (a finite Laurent polynomial); all tensor products
below are over $S$. For a morphism $f:M\to M'$ of graded bimodules, i.e. a
degree-zero bi-$S$-linear map, the induced map
$$\overline f:\overline M\to\overline{M'},\qquad \overline f(m+MS_+):=f(m)+M'S_+ ,$$
is well defined and $k$-linear of degree zero, because $f(MS_+)\subseteq M'S_+$.
Reduction is a functor from finite right-free graded bimodules to finite
dimensional graded $k$-vector spaces; it preserves finite direct sums and
shifts, in the sense $\overline{M(d)}=\overline M(d)$ in the Elias-Williamson
shift convention $M(d)_e=M_{d+e}$.

**The dominant Lefschetz operator.** Fix a strictly dominant degree-two
element
$$\rho=\sum_{j=1}^nc_jx_j\in S_2,\qquad c_1>c_2>\cdots>c_n ,$$
which exists by [[def-real-type-a-soergel-category-and-scalar-extension]] (for
example $c_j=(n+1)/2-j$); recall that this is exactly the condition
$\rho(\alpha_i^\vee)>0$ for every simple coroot $\alpha_i^\vee$ in the
coordinate normalization of this page
([[def-finite-weyl-root-system-lattice-and-chamber-conventions]]). Let
$\rho\cdot(-):M\to M$, $m\mapsto\rho m$, denote left multiplication by $\rho$.
Since $S_+\subseteq S$ is central and $\rho\,(MS_+)\subseteq MS_+$, this
operator preserves the submodule $MS_+$ and therefore descends to a degree-two
$k$-linear endomorphism
$$L_0:=\rho\cdot(-):\overline M\longrightarrow\overline M,\qquad m+MS_+\longmapsto \rho m+MS_+,$$
called the **dominant Lefschetz operator** on $\overline M$. For rational
objects $B_x,B_s$ with real scalar extensions
$B_x^R=B_x\otimes_{\mathbb Q}\mathbb R$ and $B_s^R$, the same construction
applies to the reduced tensor product
$\overline{B_x^RB_s^R}=\overline{(B_xB_s)^R}$, where $B_xB_s$ denotes the
tensor product over the rational polynomial ring; the operator $L_0$ on it is
the value $\zeta=0$ of the deformed operator $L_\zeta$ defined later on this
page.

**Descent detection.** For every $w\in S_n$ and every simple reflection $s_i$
one has
$$(w\rho)(\alpha_i^\vee)>0\quad\Longleftrightarrow\quad \ell(s_iw)>\ell(w).$$
Indeed, $(w\rho)(\alpha_i^\vee)=c_{w^{-1}(i)}-c_{w^{-1}(i+1)}$ is positive
exactly when $w^{-1}(i)<w^{-1}(i+1)$, the left-ascent criterion for inversion
length. Thus the displayed evaluation detects left descents; applied to
$w=x^{-1}$ it detects right descents of $x$, because $\ell(s_ix^{-1})=\ell(xs_i)$.

**Grading conventions.** The reduced module $\overline{B_x^R}$ has bottom degree
$-\ell(x)$ and top degree $+\ell(x)$; the unreduced bimodule has nonzero
components in arbitrarily high degrees. On a reduced module the "centered" degree $-i$ is the
internal degree $-i$, and the Lefschetz operator raises internal degree by two.
All homological (complex) shifts are written $[\,j\,]$ and all internal shifts
$(d)$, as on the rest of this page; the Bruhat order used throughout is the
rank-inequality order of
[[def-bruhat-order-on-the-symmetric-group]].

## Remark

**The descent criterion.** Write
$\rho=\sum_jc_jx_j$; for a fixed $i$, $(w\rho)(\alpha_i^\vee)=c_{w^{-1}(i)}-c_{w^{-1}(i+1)}$,
because $w$ preserves the standard form and $w^{-1}(x_i-x_{i+1})=x_{w^{-1}(i)}-x_{w^{-1}(i+1)}$.
Hence $(w\rho)(\alpha_i^\vee)>0$ if and only if $w^{-1}(i)<w^{-1}(i+1)$. By the
deletion criterion of [[lem-finite-weyl-strong-exchange-and-deletion]], applied
to $x=w^{-1}$ and the positive root $\beta_i=x_i-x_{i+1}$ of the positive system
$\{x_a-x_b:a<b\}$ fixed on this page, one has $\ell(w^{-1}s_i)=\ell(w)-1$ if and
only if $w^{-1}\beta_i<0$, i.e. if and only if $w^{-1}(i)>w^{-1}(i+1)$; taking
inverses, $\ell(s_iw)=\ell(w)-1$ if and only if $w^{-1}(i)>w^{-1}(i+1)$.
Therefore $(w\rho)(\alpha_i^\vee)>0$ exactly when $\ell(s_iw)=\ell(w)+1$, as
claimed. No alternating-sign coroot and no chamber other than the coordinate
dominant chamber is used. The instance $w=x^{-1}$ gives that
$(x^{-1}\rho)(\alpha_s^\vee)>0$ for a right-descent test: the length
$\ell(sx^{-1})=\ell(xs)$ is larger than $\ell(x^{-1})=\ell(x)$ precisely when
$xs>x$.

The reduced length bounds and the one-dimensional extremal degrees of normalized indecomposables are proved in [[lem-normalized-type-a-soergel-bimodules-are-self-dual-and-have-length-degree-bounds]], from top-support classification and perfect word duality, without a character or Hodge assumption.
