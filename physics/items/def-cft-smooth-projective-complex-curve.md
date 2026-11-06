---
id: def-cft-smooth-projective-complex-curve
kind: definition
title: Smooth projective complex curve with formal-coordinate bundle
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - thm-taylor-expansion-holomorphic-function
  - def-cft-aut-o-formal-coordinate-group
dependency_roles:
  def-riemann-surface-and-holomorphic-atlas: mathematical-premise
  thm-taylor-expansion-holomorphic-function: mathematical-premise
  def-cft-aut-o-formal-coordinate-group: mathematical-premise
justified_by:
  - lem-cft-formal-coordinate-fibre-is-aut-o-torsor
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Bin Gui, Lectures on Vertex Operator Algebras and Conformal Blocks, arXiv:2305.03822v1, §§10.1–10.5
      url: https://arxiv.org/pdf/2305.03822v1
      locator: Formal local coordinates and coordinate changes on compact Riemann surfaces.
    - title: Beilinson and Drinfeld, Chiral Algebras, preliminary Chapter 3, §3.1
      url: https://math.uchicago.edu/~drinfeld/langlands/chiral/cha_ch3.pdf
      locator: Chiral operations on smooth algebraic curves and their diagonal.
---

## Definition

A **smooth projective complex curve with specified projective presentation** is a nonempty compact connected Riemann surface $X$, together with an integer $N\ge1$ and a holomorphic embedding $\iota:X\hookrightarrow\mathbb{CP}^N$ whose image is the common zero set in $\mathbb{CP}^N$ of a family of homogeneous polynomials on $\mathbb C^{N+1}$ and is locally the graph of a holomorphic map from an open subset of $\mathbb C$ to $\mathbb C^{N-1}$ in an affine projective chart. Here $\mathbb{CP}^N:=(\mathbb C^{N+1}\setminus\{0\})/\mathbb C^\times$ is the set of complex lines with the quotient topology; its standard complex charts are $U_i=\{[z_0:\cdots:z_N]:z_i\ne0\}$ with coordinates $z_j/z_i$ for $j\ne i$. A holomorphic embedding means an injective holomorphic map with injective differential that is a homeomorphism onto its image. The embedding is included as a presentation of the input; no algebraization or comparison theorem is asserted.

For each $p\in X$, let $\mathcal O_{X,p}$ be the ring of holomorphic germs at $p$, let $\mathfrak m_p$ be its ideal of germs vanishing at $p$, and set $\widehat{\mathcal O}_{X,p}:=\varprojlim_{k\ge1}\mathcal O_{X,p}/\mathfrak m_p^k$. The **formal-coordinate bundle** is the following inverse system of holomorphic principal bundles and its inverse limit. For $k\ge1$ let $G_k$ be the group of substitutions $a_1t+\cdots+a_kt^k$ modulo $t^{k+1}$ with $a_1\ne0$, using the right-composition product; its complex manifold is $\mathbb C^\times\times\mathbb C^{k-1}$. Put
$$\operatorname{Coord}_X^{(k)}:=\coprod_{p\in X}\operatorname{Iso}_{\mathbb C\text{-alg}}(\mathcal O_{X,p}/\mathfrak m_p^{k+1},\mathbb C[t]/(t^{k+1})).$$
A holomorphic chart $z:U\to z(U)\subseteq\mathbb C$ supplies $\tau_{z,p}^{(k)}$ by Taylor expansion at $z(p)$: a germ $f$ is sent to the degree-$k$ Taylor polynomial of $f\circ z^{-1}$ in $t$ about $z(p)$. The trivialization $U\times G_k\to\operatorname{Coord}_X^{(k)}|_U$ sends $(p,g)$ to $\phi_g^{-1}\circ\tau_{z,p}^{(k)}$. Give $\operatorname{Coord}_X^{(k)}$ the complex-manifold structure from these charts. On an overlap $w=h(z)$ put $\rho_p(u):=h(z(p)+u)-h(z(p))$ modulo $u^{k+1}$. Taylor substitution gives $\tau_{w,p}^{(k)}=\phi_{\rho_p}^{-1}\tau_{z,p}^{(k)}$, so the fiber coordinates satisfy $g_w=\rho_p^{-1}g_z$. These transition maps are holomorphic: their finite jet coefficients are holomorphic functions of $p$, and inversion uses only division by powers of the nonzero linear coefficient. Taylor substitution also gives the cocycle on triple overlaps. Right multiplication by $G_k$ in each trivialization is compatible with these transitions, and is free and transitive on each fiber.

Truncation defines holomorphic maps $\operatorname{Coord}_X^{(k+1)}\to\operatorname{Coord}_X^{(k)}$ over $X$. Define $\operatorname{Coord}_X:=\varprojlim_k\operatorname{Coord}_X^{(k)}$ with the inverse-limit topology; its specified pro-holomorphic structure means precisely this inverse system of finite-jet bundles. Locally it is $U\times\varprojlim_kG_k$, with $\varprojlim_kG_k=\operatorname{Aut}\mathcal O$. Its fiber at $p$ is $\operatorname{Iso}_{\mathbb C\text{-alg}}^{\mathrm{cont}}(\widehat{\mathcal O}_{X,p},\mathbb C\llbracket t\rrbracket)$: compatible truncated isomorphisms and their inverses pass to inverse limits in both directions. Its right action on ring isomorphisms is $\tau\cdot\rho=\phi_\rho^{-1}\circ\tau$, as defined above. No finite-dimensional manifold structure is asserted on the inverse limit, and no global coordinate section is selected.

For the family clauses, a complex manifold of dimension $m$ means a Hausdorff second-countable space equipped with a covering atlas of homeomorphisms to open subsets of $\mathbb C^m$ whose transition maps are holomorphic; a map is holomorphic when its coordinate expressions are holomorphic. Let $S$ and $\mathcal X$ be complex manifolds, $\pi:\mathcal X\to S$ a proper holomorphic submersion (inverse images of compact sets are compact, and its complex differential $d\pi$ is surjective at every point), with every fiber $X_s:=\pi^{-1}(s)$ a nonempty compact connected Hausdorff second-countable topological $2$-manifold without boundary, equipped with a holomorphic atlas to open subsets of $\mathbb C$. This family clause uses the underlying analytic curves and does not assert a relative projective embedding or an algebraization theorem. A pointed family has a finite ordered tuple of holomorphic sections $s_i:S\to\mathcal X$ of $\pi$ with pairwise disjoint images. Let $\mathcal I_i$ be the ideal sheaf of $s_i(S)$ and define the complete $\mathcal O_S$-algebra sheaf along the section by
$$\widehat{\mathcal O}_{\mathcal X,s_i(S)}:=\varprojlim_{k\ge1}s_i^{-1}(\mathcal O_{\mathcal X}/\mathcal I_i^k),$$
with augmentation ideal $\widehat{\mathcal I}_i$ the kernel of restriction to $\mathcal O_S$. For an open $W\subseteq S$, a **relative formal coordinate** is an isomorphism of complete $\mathcal O_W$-algebra sheaves $\tau_i:\widehat{\mathcal O}_{\mathcal X,s_i(W)}\xrightarrow{\sim}\mathcal O_W\llbracket t_i\rrbracket$ satisfying $\tau_i(\widehat{\mathcal I}_i)=t_i\mathcal O_W\llbracket t_i\rrbracket$. The right action is by $\operatorname{Aut}_{\mathcal O_W}\mathcal O_W\llbracket t_i\rrbracket$, the group of continuous $\mathcal O_W$-algebra substitutions with zero constant term and invertible linear coefficient, as defined by the base-algebra version of the preceding definition. If nonempty, the relative-coordinate fiber is a torsor under this group by composition; the corresponding fiber over a point $s\in S$ is a torsor under $\operatorname{Aut}\mathcal O$. No local or global nonemptiness or global-section assertion is made for a family.

This definition supplies individual curves, formal-coordinate fibers, and the disjoint-section convention for families. It does not define or assert existence of a moduli stack of stable curves or its boundary strata.

## Definition references

[[def-riemann-surface-and-holomorphic-atlas]]

[[def-cft-aut-o-formal-coordinate-group]]

[[lem-cft-formal-coordinate-fibre-is-aut-o-torsor]]

[[thm-taylor-expansion-holomorphic-function]]
