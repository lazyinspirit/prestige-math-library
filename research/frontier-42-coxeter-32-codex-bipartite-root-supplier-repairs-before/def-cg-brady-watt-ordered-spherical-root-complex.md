---
id: def-cg-brady-watt-ordered-spherical-root-complex
kind: definition
title: "The Brady-Watt ordered root complex X(c), its subcomplexes X(sigma) and X(sigma,rho), and their positive-cone realizations"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 19
deps: [def-cg-bipartite-coxeter-element-and-root-recursion, lem-cg-steinberg-bipartite-root-enumeration, lem-cg-ordered-root-pairings-and-simple-systems, def-abstract-simplicial-complex]
justified_by: [thm-cg-root-complex-convex-cones-and-facet-induction]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Thomas Brady and Colum Watt, Lattices in finite real reflection groups (arXiv:math/0501502, 29-page PDF)"
      url: "https://arxiv.org/pdf/math/0501502"
      locator: "Section 4 (Definition 4.1, Note 4.2 and the A3 discussion preceding it) printed pp. 9-10, and section 5 (the definition of X(sigma), the ordering of P and the set of vertices of the Petrie polygon) printed pp. 10-11"
    - title: "Robert Steinberg, Finite reflection groups, Transactions of the American Mathematical Society 91 (1959) 493-504 (AMS free digital archive, 10-page PDF)"
      url: "https://www.ams.org/journals/tran/1959-091-03/S0002-9947-1959-0106428-2/S0002-9947-1959-0106428-2.pdf"
      locator: "Corollary 4.6, printed pp. 497-498, where the reflecting hyperplanes (equivalently the positive roots) are indexed by k = 1,...,nh/2 in the order in which a line of the Coxeter plane meets them"
    - title: "Bill Casselman, Essays on Coxeter groups: Coxeter elements in finite Coxeter groups (author-hosted PDF, 12 pages)"
      url: "https://www.math.ubc.ca/~cass/research/pdf/Element.pdf"
      locator: "Section 4 'Geometry of the Coxeter plane', printed pp. 9-10: the plane Pi, its reflection lines and the rays spanning the region between consecutive lines"
    - title: "Sergey Fomin and Nathan Reading, Root systems and generalized associahedra, IAS/Park City Mathematics Series lecture notes (arXiv:math/0505518)"
      url: "https://arxiv.org/pdf/math/0505518"
      locator: "Section 2.5, printed pp. 22-24: the Coxeter element and its plane, used for the ambient conventions"
verification:
  precheck: n/a
---

## Definition

Let $(W,S)$ be an irreducible Coxeter system of finite type with $S$ finite, $n:=|S|\ge1$, and let $\alpha_i$, $R_i$, $c$, $h$, $(\rho_i)$, $(\mu_i)$, $\mu$, $\Phi_+$, $\le_T$, $M$ and $t_\alpha$ be as in [[def-cg-bipartite-coxeter-element-and-root-recursion]], [[lem-cg-steinberg-bipartite-root-enumeration]] and [[lem-cg-ordered-root-pairings-and-simple-systems]], so $\Phi_+=\{\rho_1<\rho_2<\dots<\rho_{nh/2}\}$ in the global order. Write $R(\alpha)$ for the reflection with normal $\alpha$ and $S^{n-1}:=\{x\in V:B(x,x)=1\}$.

**(1) The complex $X(c)$.** Its vertex set is $\Phi_+$. For $1\le i<j\le nh/2$, join $\rho_i$ to $\rho_j$ by an edge exactly when $R(\rho_j)R(\rho_i)\le_Tc$. Let $X(c)$ contain the empty simplex and every finite nonempty set of vertices whose every two-element subset is an edge. Thus $X(c)$ is the abstract simplicial complex ([[def-abstract-simplicial-complex]]) determined by this ordered edge relation.

**(2) The subcomplexes $X(\sigma)$.** For $\sigma\le_Tc$, put $P_\sigma:=\{\alpha\in\Phi_+:t_\alpha\le_T\sigma\}$ and let $X(\sigma)$ be the full subcomplex of $X(c)$ on the vertex set $P_\sigma$. For a positive root $\rho$ in the global order, let $X(\sigma,\rho)$ be the full subcomplex on vertices in $P_\sigma\cap M(\sigma)$ that are less than or equal to $\rho$; thus $X(\sigma,\tau_i)$ has vertex set $\{\tau_1,\dots,\tau_i\}$ when $P_\sigma=\{\tau_1<\dots<\tau_t\}$.

**(3) Positive cones and realizations.** Every vertex is a unit vector. For a finite set $F$ of vertices define
$$c[F]:=\Bigl\{\sum_{v\in F}\lambda_vv:\lambda_v\ge0\Bigr\},\qquad c[\emptyset]:=\{0\}.$$
For a subcomplex $Y$ put $c[Y]:=\bigcup_{F\in Y}c[F]$ and $|Y|:=c[Y]\cap S^{n-1}$, its positive-cone realization in the unit sphere. For $\sigma\le_Tc$ and a positive root $\rho$, write
$$Y(\sigma,\rho):=c[\{\tau\in P_\sigma\cap M(\sigma):\tau\le\rho\}].$$

**(4) Abstentions.** This definition does not assert that $c[F]$ is nondegenerate for each simplex $F$, that $|F|$ is a spherical simplex, that the cone realization embeds $X(c)$ or any $X(\sigma)$, or that these realizations are convex or have dimension $\ell_T(\sigma)-1$. It also does not assert an equivalence between higher simplex membership and a single full-tuple product condition. No Choice is used.
