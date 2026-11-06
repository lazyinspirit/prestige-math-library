---
id: def-cft-supermoduli-interpolation-system
kind: definition
title: Admissible paired supermanifold interpolation over a cell decomposition
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
deps:
  - def-cft-complex-supermanifold
  - def-cft-super-riemann-surface
justified_by: []
domain: mathematics
library: physics
dependency_roles:
  def-cft-complex-supermanifold: mathematical-premise
  def-cft-super-riemann-surface: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Charles Wang and Xi Yin, On the Equivalence between SRS and PCO Formulations of Superstring Perturbation Theory, arXiv:2205.01106v2"
      url: https://arxiv.org/pdf/2205.01106v2
      locator: "§4.2, equations (4.17)–(4.19), for source reparameterizations; §4.4, equations (4.29)–(4.31), PDF pp. 16–17, for paired face maps and boundary matching."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $d,r\geq0$ and let $M$ be an oriented smooth real manifold of dimension $2d$. A finite face-regular decomposition of $M$ here means a finite cover by compact embedded codimension-zero submanifolds with corners $D_\alpha$ whose interiors are disjoint, with specified compatible face identifications, such that each nonempty intersection of $p+1$ distinct cells is a common embedded face $D_I$ of real codimension $p$. If an intersection has several components, treat its components as separate faces. Orient each cell by $M$, each simplex by its ordered vertices, and each product by the product orientation; use the induced boundary orientations. Thus $\dim_{\mathbb R}D_I=2d-p$ and $\Delta^p\times D_I$ has real dimension $2d$.

Supply two complex supermanifolds $\mathfrak M_L,\mathfrak M_R$, each of complex dimension $d|r$, with their reduced spaces $M_L=(\mathfrak M_L)_{\rm red}$ and $M_R=(\mathfrak M_R)_{\rm red}$ identified smoothly with $M$ by specified embeddings $\iota_L:M\to M_L$ and $\iota_R:M\to M_R$. These data determine the diagonal map $\iota:M\to M_L\times M_R$, $x\mapsto(\iota_L(x),\iota_R(x))$. For each cell choose an open set $U_\alpha\subset M$ containing $D_\alpha$ and open subsuperdomains $\mathscr U^L_\alpha\subset\mathfrak M_L$, $\mathscr U^R_\alpha\subset\mathfrak M_R$ whose reduced spaces contain $\iota_L(U_\alpha)$ and $\iota_R(U_\alpha)$. For a face $D_I$, write $U_I=\bigcap_{\alpha\in I}U_\alpha$ and $\mathscr U_I^\ell=\bigcap_{\alpha\in I}\mathscr U_\alpha^\ell$ for $\ell=L,R$.

The parameter superspace $\Pi\mathbb C^r_\ell$ has one-point body and structure algebra $\Lambda_{\mathbb C}(\nu^1_\ell,\ldots,\nu^r_\ell)$, with independent odd generators for each sector. A smooth parity-preserving map on a real manifold with corners times $\Pi\mathbb C^r_\ell$ has local even and odd coordinate functions that are finite Grassmann polynomials with smooth complex-valued coefficients. For every cell, supply local lifts
$$\phi^\ell_\alpha:U_\alpha\times\Pi\mathbb C^r_\ell\longrightarrow\mathscr U^\ell_\alpha,\qquad \ell=L,R,$$
whose reduced maps are $\iota_\ell|_{U_\alpha}$.

An admissible paired interpolation system consists, for each nonempty ordered label set $I=(\alpha_0,\ldots,\alpha_p)$, of smooth parity-preserving component maps
$$I_I^\ell:\Delta^p\times D_I\times\Pi\mathbb C^r_\ell\longrightarrow\mathscr U_I^\ell,\qquad \ell=L,R,$$
whose reduction is $\iota_\ell\circ\operatorname{pr}_{D_I}:\Delta^p\times D_I\to M_\ell$ and with $I^\ell_{(\alpha)}=\phi^\ell_\alpha|_{D_\alpha\times\Pi\mathbb C^r_\ell}$. They share the same real simplex and face parameter, and their product is the map
$$I_I=(I_I^L,I_I^R):\Delta^p\times D_I\times\Pi\mathbb C^r_L\times\Pi\mathbb C^r_R\longrightarrow\mathscr U_I^L\times\mathscr U_I^R.$$
The left and right odd generators are independent. A barred or unbarred sector label imposes no complex-conjugation relation on odd generators.

In source coordinates on the real body $\Delta^p\times D_I$ and odd coordinates $(\nu_L,\nu_R)$, the even body has real dimension $2d$ and the target product has complex even dimension $2d$; the paired odd block has size $2r\times2r$. Write the even super-Jacobian in blocks as $J=\begin{pmatrix}A&B\\ C&D\end{pmatrix}$, where $D=\partial_{(\nu_L,\nu_R)}(\eta_L,\eta_R)$. Require the body of $D$ (obtained by setting all odd generators to zero) to be invertible at every source point. Then the integral-form pullback is defined by $\operatorname{Ber}(J)=\det(A-BD^{-1}C)/\det D$ in each such square coordinate presentation; the even Schur numerator may vanish or be nilpotent on a vertical patch.

For each codimension-one simplex face $\sigma_j:\Delta^{p-1}\to\partial_j\Delta^p$, let $\iota_j:D_I\to D_{I\setminus\{\alpha_j\}}$ be the specified common-face inclusion. Require in each sector the matching equation
$$I_I^\ell\circ(\sigma_j\times\operatorname{id}_{D_I}\times\operatorname{id})=I_{I\setminus\{\alpha_j\}}^\ell\circ R_I^{j,\ell}\circ(\operatorname{id}_{\Delta^{p-1}}\times\iota_j\times\operatorname{id}),$$
where, writing $J=I\setminus\{\alpha_j\}$, the specified map $R_I^{j,\ell}$ is a smooth invertible parity-preserving reparameterization of $\Delta^{p-1}\times D_J\times\Pi\mathbb C^r_\ell$ of the form $R_I^{j,\ell}(s,x,\nu_\ell)=(s,x,r_I^{j,\ell}(s,x,\nu_\ell))$. Here $r_I^{j,\ell}$ is an odd Grassmann-polynomial vector with smooth coefficients and invertible linear coefficient matrix at every $(s,x)$; the inverse is of the same form. Thus $R_I^{j,\ell}$ fixes the even parameters exactly and acts on the source of the lower interpolation, preserving its boundary strata and their even orientations. Both sides of the matching equation are maps into the same target supermanifold, with image in $\mathscr U_I^\ell$; no active target transformation is applied. Higher-codimension restrictions must satisfy the resulting compatible face equations.

In the intended cellwise construction, a face map is assembled from elementary merger cells and cubes of distinguished marked-point data. A $q$-dimensional cube moves $q$ distinct odd labels independently; a higher merger may have several homotopy directions associated with the same label. Thus an arbitrary codimension-$p$ face is not required to have $p$ distinct odd coordinates. The codimension-one homotopy uses two endpoint gluings, and higher cells have the corresponding matching boundary faces. The paired system may equivalently be represented by a finite oriented sum of parameterized product-cell pieces with cancelling internal boundaries; the matching conditions are then equalities of the resulting chains. Triangulating each product cell restricts its map to simplex pieces without changing that chain or its integral. The single-simplex presentation above is the special case with one piece. This definition gives the required data and matching conditions but does not assert that such maps exist for a given cover.

## Definition references

[[def-cft-complex-supermanifold]]

[[def-cft-super-riemann-surface]]

[Wang–Yin, *On the Equivalence between SRS and PCO Formulations*, §4.4](https://arxiv.org/pdf/2205.01106v2)

## Remarks

The invertible odd block makes the denominator in the integral-form pullback well-defined. A vertical patch need not be a local super-diffeomorphism: its reduced transverse even map may be constant. In Wang–Yin Appendix A, $t=s r(\nu)$ with $r$ nilpotent illustrates why requiring the full Berezinian to be an invertible supernumber would incorrectly exclude the intended vertical term. Existence of compatible maps in every codimension is a separate theorem obligation, not part of this definition.
