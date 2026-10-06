---
id: lem-pullback-of-a-trivial-smooth-vector-bundle-is-canonically-trivial
kind: lemma
title: "The pullback of a trivial smooth vector bundle is canonically trivial"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-smooth-vector-bundle-rank-fibre-and-trivial-bundle", "def-pullback-vector-bundle-as-a-fibre-product", "thm-the-pullback-fibre-product-is-a-smooth-vector-bundle", "def-local-frame-and-global-frame-of-a-vector-bundle", "cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame", "def-c-r-and-smooth-maps-between-smooth-manifolds"]
justified_by: []
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft, complete 568-page text)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
      locator: "SS7.2, printed pp. 226-232: Whitney Theorems 7.2-7.3, the RP^{2^k} embedding obstruction (Proposition 7.4), Hirsch-Smale Theorem 7.5, Corollary 7.6 (existence of an immersion iff a k-dimensional inverse bundle exists) and Theorem 7.7"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
---

## Statement

Let $f:N\to M$ be a smooth map and let $\varepsilon^r_M=M\times\mathbb R^r$ be the trivial smooth real rank-$r$ bundle over $M$. Then the pullback $f^*\varepsilon^r_M$ is canonically isomorphic to the trivial bundle $\varepsilon^r_N=N\times\mathbb R^r$: the constant frame $e_1,\dots,e_r$ of $\varepsilon^r_M$ pulls back to the nowhere-zero global frame $x\mapsto(x,e_j)$ of $f^*\varepsilon^r_M$, and the isomorphism is the one determined by that frame ([[def-local-frame-and-global-frame-of-a-vector-bundle]], [[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]]). This product-bundle assertion is choice-free.

## Facts & Assumptions

**Given:** A smooth map $f:N\to M$ and the trivial smooth rank-$r$ real bundle $\varepsilon^r_M=M\times\mathbb R^r\to M$.

[F1] The pullback set is $f^*\varepsilon^r_M=\{(q,e)\in N\times(M\times\mathbb R^r):f(q)=\operatorname{pr}_1(e)\}=\{(q,(f(q),v)):q\in N,\ v\in\mathbb R^r\}$, with projection $(q,(f(q),v))\mapsto q$ and fibrewise vector-space operations inherited from $\varepsilon^r_M$ ([[def-pullback-vector-bundle-as-a-fibre-product]], [[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[F2] The pullback carries the smooth rank-$r$ vector-bundle structure constructed in [[thm-the-pullback-fibre-product-is-a-smooth-vector-bundle]]: for a bundle chart $\Phi_\alpha:E|_{U_\alpha}\to U_\alpha\times\mathbb R^r$ of a bundle $E$, the map $(q,e)\mapsto(q,v)$ with $\Phi_\alpha(e)=(f(q),v)$ is a bundle chart over $f^{-1}(U_\alpha)$; the trivial bundle $\varepsilon^r_M$ has the single global bundle chart $\Phi(p,v)=(p,v)$ over $M$.

[F3] A smooth rank-$r$ vector bundle is trivial if and only if it has a global frame ([[def-local-frame-and-global-frame-of-a-vector-bundle]], [[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]]); a global frame $(s_1,\dots,s_r)$ determines the bundle isomorphism $N\times\mathbb R^r\to E$, $(q,(\lambda_1,\dots,\lambda_r))\mapsto\sum_j\lambda_js_j(q)$.

[F4] Maps into a product of smooth manifolds are smooth exactly when their components are, and smooth maps are continuous ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

## Proof

1.1 Define $\Phi:f^*\varepsilon^r_M\to N\times\mathbb R^r$ by $\Phi(q,(f(q),v))=(q,v)$, using the description [F1]. Then $\Phi$ is well defined, and its inverse is $(q,v)\mapsto(q,(f(q),v))$. On each fibre it is the linear isomorphism onto $\{q\}\times\mathbb R^r$ inverse to $v\mapsto(f(q),v)$, and $\Phi$ lies over $\operatorname{id}_N$. So $\Phi$ is a fibrewise-linear bijection over the base. [F1, F4]

2.1 $\Phi$ is smooth with smooth inverse. Indeed, in the global pullback chart of [F2] coming from the global chart $\Phi(p,v)=(p,v)$ of $\varepsilon^r_M$, the chart map is exactly $\Phi$, i.e. the identity identification of $N\times\mathbb R^r$; and the inverse $(q,v)\mapsto(q,(f(q),v))$ has components $q\mapsto q$, $q\mapsto f(q)$ and $v\mapsto v$, which are smooth by [F4] since $f$ is smooth. Hence $\Phi$ is a diffeomorphism, and consequently a smooth bundle isomorphism over $N$. [F2, F4, step 1.1]

3.1 Therefore $f^*\varepsilon^r_M\cong\varepsilon^r_N$ as smooth vector bundles over $N$, by the isomorphism $\Phi$, which was defined by an explicit formula using only $f$ and hence is canonical. Equivalently, the constant sections $s_j(p)=(p,e_j)$ of $\varepsilon^r_M$ pull back to the sections $f^*s_j(q)=(q,(f(q),e_j))$ of $f^*\varepsilon^r_M$, none of whose values is the zero vector; these pullbacks are smooth because in the global pullback chart of step 2.1 the section $f^*s_j$ reads as the constant map $q\mapsto e_j$, and they form a global frame of $f^*\varepsilon^r_M$ that $\Phi$ converts into the standard frame of $N\times\mathbb R^r$. No selection of local trivializations, complements or representatives has been made: the chart of [F2] used above is the single global chart of the product bundle, so the argument uses no choice principle. The case $r=0$ gives the zero bundle over $N$, and the empty or disconnected base is covered verbatim. [F2, F3, step 1.1, step 2.1] ∎
