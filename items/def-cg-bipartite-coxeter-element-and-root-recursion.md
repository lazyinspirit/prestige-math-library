---
id: def-cg-bipartite-coxeter-element-and-root-recursion
kind: definition
title: "The bipartite Coxeter element, its ordered prefix roots, and the conditional vector map mu(a) = -2(c-1)^{-1}a"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 14
deps: [def-hh-coxeter-matrix-word-group-and-length, def-cg-coxeter-diagram-components-and-finite-type, lem-cg-positive-definite-diagram-exclusions, lem-cg-diagram-products-and-invariant-form-comparison, def-bipartite-graph, thm-bipartite-iff-no-odd-cycle, thm-cg-finite-type-positive-definite-criterion, def-cg-real-coxeter-form-and-reflection, def-cg-canonical-reflection-homomorphism, lem-cg-reflection-representation-descends-and-root-norms, def-linear-isomorphism-and-invertible-linear-map, def-generated-subgroup]
justified_by: [lem-cg-steinberg-bipartite-root-enumeration]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Thomas Brady and Colum Watt, Lattices in finite real reflection groups (arXiv:math/0501502, 29-page PDF)"
      url: "https://arxiv.org/pdf/math/0501502"
      locator: "Section 3 'Roots of W and vertices on the Petrie polygon', printed pp. 4-9: the two orthogonal classes and gamma=R_1...R_n (p. 4); cyclic alpha/R indexing, rho_i, the cyclic dual beta basis and mu_i (p. 4); Theorem 3.2 and Corollary 3.3 (pp. 4-5); and Lemma 3.9's map mu(sigma)=-2(gamma-I)^(-1)sigma (pp. 8-9)"
    - title: "Robert Steinberg, Finite reflection groups, Transactions of the American Mathematical Society 91 (1959) 493-504 (AMS free digital archive, 12-page PDF)"
      url: "https://www.ams.org/journals/tran/1959-091-03/S0002-9947-1959-0106428-2/S0002-9947-1959-0106428-2.pdf"
      locator: "Sections 3-5, printed pp. 495-499: the two-class ordering of the walls W_1,...,W_n of a fundamental chamber (3.1), the associated reflections R_1,...,R_n, the k-th reflecting hyperplane R_1...R_{k-1}W_k (4.7) and reflection R_1...R_{k-1}R_kR_{k-1}...R_1 (4.8) for k = 1,...,nh/2, and the Petrie polygon vertices (Theorem 5.1(1))"
    - title: "Bill Casselman, Essays on Coxeter groups: Coxeter elements in finite Coxeter groups (author-hosted PDF, 12 pages)"
      url: "https://www.math.ubc.ca/~cass/research/pdf/Element.pdf"
      locator: "Sections 1, 2 and 3.1-3.7, printed pp. 1-2 and 6-8: a finite irreducible Coxeter system whose Coxeter graph is a tree, the partition of the generators into two commuting sets, the distinguished Coxeter element, the matrices x, y, gamma in simple-root coordinates and the identity 2I + gamma + gamma^{-1} = 4(I-A)^2 (Lemma 3.3)"
    - title: "Sergey Fomin and Nathan Reading, Root systems and generalized associahedra, IAS/Park City Mathematics Series lecture notes (arXiv:math/0505518)"
      url: "https://arxiv.org/pdf/math/0505518"
      locator: "Section 2.5 'Coxeter element and Coxeter number', printed pp. 22-24 with Figures 2.5-2.7: 'The underlying graph of the Coxeter diagram for a finite Coxeter group has no cycles. Hence it is bipartite', the well-defined element c = (product over I+) (product over I-), Example 2.16 for A5 and the Coxeter plane of c"
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

For the irreducible case, let $(W,S)$ be a finite-type Coxeter system with $S$ finite of cardinality $n\ge1$, length function $\ell$, Coxeter diagram $\Gamma$ and standard parabolics $W_T=\langle s:s\in T\rangle$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-cg-coxeter-diagram-components-and-finite-type]], [[def-generated-subgroup]]); let $V=\mathbb R^S$, let $B$ be the Coxeter form with $B(e_s,e_s)=1$ ([[def-cg-real-coxeter-form-and-reflection]], [[lem-cg-reflection-representation-descends-and-root-norms]] (3)), and let $\rho:W\to\mathrm{GL}(V)$, $\Phi=\{\rho(w)e_s\}$ and $T=\{wsw^{-1}\}$ be the canonical reflection representation, the root system and the reflection set ([[def-cg-canonical-reflection-homomorphism]]); assume $\Gamma$ is connected, equivalently $(W,S)$ is irreducible ([[def-cg-coxeter-diagram-components-and-finite-type]]). The form $B$ is positive definite ([[thm-cg-finite-type-positive-definite-criterion]]). Write $\alpha_s:=e_s$ for the simple roots and $r_a$ for the reflection with normal $a$. Clause (5) separately specifies the componentwise extension to reducible finite-type systems.

**(1) The bipartition.** $\Gamma$ is connected and has no cycle, hence is a tree ([[lem-cg-positive-definite-diagram-exclusions]] (2)); a tree has a bipartition, i.e. there is a partition $S=J\sqcup K$ with $m(s,t)=2$ for all distinct $s,t$ in the same part ([[def-bipartite-graph]], [[thm-bipartite-iff-no-odd-cycle]]). Concretely, fix $s_0\in S$, let $J$ be the set of vertices at even distance from $s_0$ in $\Gamma$ and $K$ the set at odd distance, and note that the pair $\{J,K\}$ is determined up to interchanging the two classes. Choose such a bipartition and **order the simple reflections and their simple roots** as $\alpha_1,\dots,\alpha_n$, with corresponding simple reflections $s_1,\dots,s_n$ and reflections $R_i:=r_{\alpha_i}$, so that $J=\{s_1,\dots,s_r\}$ and $K=\{s_{r+1},\dots,s_n\}$ for $r:=|J|$. For distinct $s_i,s_j$ in either class, $m(s_i,s_j)=2$; the Coxeter relators $s_i^2=s_j^2=(s_is_j)^2=1$ therefore imply $s_is_j=s_js_i$ ([[def-hh-coxeter-matrix-word-group-and-length]]). Thus the products $a:=\prod_{i=1}^{r}s_i$ and $b:=\prod_{i=r+1}^{n}s_i$ do not depend on the order of their factors, and

$$c:=ab=s_1s_2\cdots s_n\in W,\qquad h:=\operatorname{ord}(c)\in\mathbb N$$

are well defined ($W$ is finite, so $h\ge1$). For $n=1$ one has $J=\{s_1\}$, $K=\emptyset$, $a=s_1$, $b=1$, $c=s_1$ and $h=2$; empty products are $1$. For $n\ge2$ both classes are nonempty because $\Gamma$ is connected.

**(2) Cyclic indexing.** Read subscripts $i$ of $s_i$, $\alpha_i$, $R_i$ and $\beta_i$ cyclically modulo $n$: $s_{i+n}:=s_i$, $\alpha_{i+n}:=\alpha_i$, $R_{i+n}:=R_i$, and $\beta_{i+n}:=\beta_i$ for the dual family below. The cyclic indexing of the $\beta_i$ is part of the convention: it is what makes the vector $\mu_i$ below well defined for every $i\ge1$ (see (3)).

**(3) Prefix roots and dual vertices.** Let $G=(B(\alpha_j,\alpha_k))_{j,k=1}^n$ be the Gram matrix. It is invertible: for $x\ne0$, the basis property gives $\sum_jx_j\alpha_j\ne0$, so $x^{\mathsf T}Gx=B(\sum_jx_j\alpha_j,\sum_jx_j\alpha_j)>0$. Set $\beta_i:=\sum_{k=1}^n(G^{-1})_{ki}\alpha_k$; symmetry of $G$ gives $B(\beta_i,\alpha_j)=\sum_kG_{jk}(G^{-1})_{ki}=\delta_{ji}$. These vectors are unique, since a vector orthogonal to every basis vector is orthogonal to itself and hence is zero by positive definiteness. Thus $(\beta_1,\dots,\beta_n)$ is the $B$-dual family of $(\alpha_1,\dots,\alpha_n)$. **Define**, for every integer $i\ge1$,

$$\rho_i:=R_1R_2\cdots R_{i-1}\,\alpha_i,\qquad \mu_i:=R_1R_2\cdots R_{i-1}\,\beta_i,$$

the empty product for $i=1$ being the identity. Put $c_V:=\rho(c)\in\mathrm{GL}(V)$. The recursions $\rho_{i+n}=c_V\rho_i$ and $\mu_{i+n}=c_V\mu_i$ (valid for all $i\ge1$) follow by separating the first $n$ factors and using cyclic indexing; they are also recorded in [[lem-cg-steinberg-bipartite-root-enumeration]].

**(4) The conditional vector map $\mu$.** For $v\in V$ put

$$\mu(v):=-2\,(c_V-\mathrm{id}_V)^{-1}v,$$

**defined only if the linear map $c_V-\mathrm{id}_V\in\mathrm{GL}(V)$ is invertible** ([[def-linear-isomorphism-and-invertible-linear-map]]). This definition asserts neither the invertibility of $c_V-\mathrm{id}_V$ nor the identity $\mu(\rho_i)=\mu_i$; both are proved in [[lem-cg-steinberg-bipartite-root-enumeration]], the recorded justifier of this definition. Once defined, $\mu$ is a linear map on all of $V$, with $\mu(\rho_i)=\mu_i$ for every $i\ge1$ and $\mu(c_V^kv)=c_V^k\mu(v)$ for all $k\in\mathbb Z$ and $v\in V$, since $c_V$ commutes with $c_V-\mathrm{id}_V$.

**(5) Reducible and empty systems.** For a finite-type system with connected components $S_1,\dots,S_m$, apply (1)--(4) to each irreducible factor $(W_i,S_i)$, where $W_i=W_{S_i}$ ([[lem-cg-diagram-products-and-invariant-form-comparison]]). With component bipartitions $S_i=J_i\sqcup K_i$, let $a_i,b_i,c_i$ be the resulting group elements and $h_i=\operatorname{ord}(c_i)$. The product $c=c_1\cdots c_m$ is a product of the simple reflections in every component. Under the direct-product decomposition, $c^k=1$ exactly when $c_i^k=1$ for every $i$, so its order is $h=\operatorname{lcm}(h_1,\dots,h_m)$. Choose a block order of the components and list the root and dual-vector families in that order. The operator $c_V=\rho(c)$ is the direct sum of $c_{V_i}=\rho(c_i)$; as in (4), the map $\mu$ is defined exactly when every $c_{V_i}-\mathrm{id}_{V_i}$ is invertible, and then is their direct sum. For $S=\emptyset$ one has $m=0$, $W=\{1\}$, $c=1$, $h=1$ (the empty lcm is $1$), $V=\{0\}$ and empty root and dual-vector families; the unique endomorphism of $V$ is invertible, so $\mu$ is that unique map. No single number $nh/2$ is claimed for reducible systems whose components have unequal Coxeter numbers.

**(6) Abstentions.** Each $\rho_i$ is a root by definition, since $R_1\cdots R_{i-1}=\rho(s_1\cdots s_{i-1})$ and $\alpha_i=e_{s_i}$. This item does not assert that the first $nh/2$ roots enumerate the positive roots, any sign pattern for $(B(\mu_i,\rho_j))$, or a spherical realization of the ordered root complex; those are proved by later items in this pair. No Choice is used.
