---
id: lem-stiefel-whitney-classes-of-the-tangent-bundle-of-real-projective-space
kind: lemma
title: "Stiefel-Whitney classes of the tangent bundle of real projective space"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-real-projective-bundle-and-tautological-line", "def-tautological-degree-one-class-on-a-real-projective-bundle", "thm-mod-two-real-projective-bundle-theorem", "cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms", "def-stiefel-whitney-classes-from-the-projective-bundle-relation", "thm-whitney-sum-formula-for-stiefel-whitney-classes", "thm-naturality-of-stiefel-whitney-classes", "def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles", "thm-numerable-vector-bundles-admit-bundle-metrics", "cor-short-exact-sequences-of-vector-bundles-split-over-the-base", "prop-orthogonal-complements-of-subbundles-are-smooth-subbundles", "ex-real-projective-space-from-affine-charts", "def-c-r-and-smooth-maps-between-smooth-manifolds", "def-immersion-submersion-and-constant-rank-map", "cor-every-tangent-vector-is-the-velocity-of-a-smooth-curve", "def-induced-tangent-bundle-chart", "thm-coordinate-derivations-form-a-basis-of-the-tangent-space", "def-velocity-derivation-of-a-smooth-curve", "lem-second-countable-smooth-manifolds-have-cw-homotopy-type", "def-axiom-of-choice", thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle, cor-heine-borel-in-the-product-topology, thm-compactness-under-continuous-maps]
justified_by: []
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft, complete 568-page text)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
      locator: "SS7.2, printed pp. 226-232: Whitney Theorems 7.2-7.3, the RP^{2^k} embedding obstruction (Proposition 7.4), Hirsch-Smale Theorem 7.5, Corollary 7.6 (existence of an immersion iff a k-dimensional inverse bundle exists) and Theorem 7.7"
---

## Statement

Assume AC. Let $m\ge1$, let $L\to\mathbb{RP}^m$ be the tautological line bundle, and let $a\in H^1(\mathbb{RP}^m;\mathbb F_2)$ be the nonzero degree-one class. Then there is a smooth real bundle isomorphism $$T\mathbb{RP}^m\oplus\varepsilon^1\cong(m+1)L,$$ and consequently, in $H^*(\mathbb{RP}^m;\mathbb F_2)=\mathbb F_2[a]/(a^{m+1})$, $$w(T\mathbb{RP}^m)=w(L)^{m+1}=(1+a)^{m+1},$$ where $w(L)=1+x_L=1+a$ is the rank-one case of [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]] ([[def-real-projective-bundle-and-tautological-line]], [[def-tautological-degree-one-class-on-a-real-projective-bundle]], [[thm-mod-two-real-projective-bundle-theorem]]).

## Facts & Assumptions

**Given:** An integer $m\ge1$, real projective space $\mathbb{RP}^m$ with its smooth structure from the affine charts, the tautological line $L=\gamma^1\subseteq\varepsilon^{m+1}=\mathbb{RP}^m\times\mathbb R^{m+1}$, the tangent bundle $T\mathbb{RP}^m$, and the class $a$.

[F1] The affine charts $U_i=\{[x]:x_i\ne0\}$ with coordinates $x_j/x_i$ form a smooth atlas of $\mathbb{RP}^m$ ([[ex-real-projective-space-from-affine-charts]]); the tautological line bundle is $\gamma_{\varepsilon^{m+1}}$, the subbundle $L=\{([x],v):v\in\mathbb Rx\}\subseteq\varepsilon^{m+1}$ (the case $E=\varepsilon^{m+1}$ of [[def-real-projective-bundle-and-tautological-line]]).

[F2] A smooth chart $(U,x)$ produces the induced tangent-bundle chart $v\mapsto(x(p),v^1,\dots,v^m)$ with $v=\sum_iv^i\partial_{x^i}|_p$ ([[def-induced-tangent-bundle-chart]], [[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]), and every tangent vector is the velocity $\dot\gamma(0)$ of a smooth curve ([[cor-every-tangent-vector-is-the-velocity-of-a-smooth-curve]], [[def-velocity-derivation-of-a-smooth-curve]]). Smoothness of maps between smooth manifolds is checked in charts ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-immersion-submersion-and-constant-rank-map]]).

[F3] For bundles over the same base one has the Whitney sum, tensor product, dual and Hom bundles, with $\operatorname{Hom}(E,F)\cong E^*\otimes F$ ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[F4] The standard Euclidean inner product restricts to a smooth metric on the tautological line $L\subseteq\varepsilon^{m+1}$. Its orthogonal complement $L^\perp$ is smooth, and the quotient map identifies $L^\perp$ smoothly with $\varepsilon^{m+1}/L$ ([[prop-orthogonal-complements-of-subbundles-are-smooth-subbundles]], [[thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle]]): in a smooth local frame the inverse is obtained by orthogonal projection. Thus $\varepsilon^{m+1}=L\oplus L^\perp$ smoothly, and the metric gives a smooth isomorphism $L\cong L^*$ by $v\mapsto\langle v,-\rangle$.

[F5] Closed bounded Euclidean subsets are compact, and continuous images of compact spaces are compact ([[cor-heine-borel-in-the-product-topology]], [[thm-compactness-under-continuous-maps]]). A closed smooth manifold is a paracompact Hausdorff CGWH space of CW homotopy type over which every smooth bundle is numerable ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]).

[F6] SW classes are defined by the projective-bundle relation, $w(L)=1+x_L$ for a line bundle, they are natural under bundle isomorphisms, satisfy the Whitney product formula, and satisfy $w(E\oplus\varepsilon^r)=w(E)$ ([[def-stiefel-whitney-classes-from-the-projective-bundle-relation]], [[thm-whitney-sum-formula-for-stiefel-whitney-classes]], [[thm-naturality-of-stiefel-whitney-classes]], [[def-tautological-degree-one-class-on-a-real-projective-bundle]]).

[F7] For the trivial rank-$(m+1)$ bundle $\varepsilon^{m+1}$ over the one-point base, the projective bundle is $P(\varepsilon^{m+1})=\mathbb{RP}^m$ with tautological line $L$, so the projective-bundle theorem applies with $B=\mathrm{pt}$, $n=m+1$ and $x=x_L$: $H^*(\mathbb{RP}^m;\mathbb F_2)$ is a free $\mathbb F_2$-module with basis $1,x_L,\dots,x_L^m$; the classes $c_i\in H^i(\mathrm{pt};\mathbb F_2)$ of its relation vanish for $i\ge1$ by the dimension axiom for singular cohomology, so the kernel of the algebra map $\mathbb F_2[x]\to H^*(\mathbb{RP}^m;\mathbb F_2)$, $x\mapsto x_L$, is exactly the ideal $(x_L^{m+1})$; hence $x_L^{m+1}=0$, $x_L^i\ne0$ for $0\le i\le m$, $H^*(\mathbb{RP}^m;\mathbb F_2)=\mathbb F_2[x_L]/(x_L^{m+1})$, and $H^1(\mathbb{RP}^m;\mathbb F_2)=\mathbb F_2x_L$ is one-dimensional, so $x_L$ is the unique nonzero degree-one class $a$ of the statement ([[thm-mod-two-real-projective-bundle-theorem]], [[cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms]], [[def-real-projective-bundle-and-tautological-line]]). AC is the hypothesis of the projective-bundle theorem ([[def-axiom-of-choice]]).

## Proof

1.1 The affine charts make $\mathbb{RP}^m$ a boundaryless smooth manifold. It is compact: every line has a unit representative, and the quotient projection $S^m\to\mathbb{RP}^m$ is continuous and surjective; $S^m$ is closed and bounded, hence compact, and its image is compact by [F5]. Fix a line $\ell$ and a complement $H$, and let $p:\mathbb R^{m+1}\to\ell$ be projection along $H$. The lines transverse to $H$ form an open set $U_\ell$: on every affine chart, transversality is the nonvanishing of a linear coordinate expression. Each such line is uniquely the graph of $f\in\operatorname{Hom}(\ell,H)$. In affine coordinates this graph chart and its inverse are ratios of linear expressions with nonzero denominators, so are smooth by [F1] and [F2]. Differentiating at the graph of $0$ and composing $H\cong\mathbb R^{m+1}/\ell$ gives an isomorphism $\Theta_\ell:T_\ell\mathbb{RP}^m\to\operatorname{Hom}(\ell,\mathbb R^{m+1}/\ell)$. [F1, F2, F5, given]

2.1 This tangent identification is independent of $H$. For a second complement $H^{\prime}$, write $p^{\prime},q^{\prime}$ for the projections onto $\ell,H^{\prime}$. Near $f=0$ the graph transition is $$f^{\prime}=q^{\prime} f\,(\operatorname{id}_\ell+p^{\prime} f)^{-1}.$$ Indeed, a graph vector $u+f(u)$ has $\ell$-coordinate $(\operatorname{id}_\ell+p^{\prime} f)u$ and $H^{\prime}$-coordinate $q^{\prime} f(u)$. The derivative of this transition at $0$ is $g\mapsto q^{\prime} g$, since $f=0$ there; modulo $\ell$, $q^{\prime} g(u)$ and $g(u)$ agree. Thus both differentials give the same $\Theta_\ell$. These maps define a fibrewise isomorphism $\Theta:T\mathbb{RP}^m\to\operatorname{Hom}(L,\varepsilon^{m+1}/L)$, with the quotient and Hom bundles supplied by [F3] and [F4]. [F1, F2, F3, F4, step 1.1]

3.1 The map $\Theta$ is a smooth bundle isomorphism. Over $U_\ell$, the chart differential of $\varphi_\ell$ trivializes $T\mathbb{RP}^m|_{U_\ell}\cong U_\ell\times\operatorname{Hom}(\ell,H)$, and the same graph data trivialize $\operatorname{Hom}(L,\varepsilon^{m+1}/L)|_{U_\ell}$: at $\ell'=\Gamma(f)$ the projection $\mathbb R^{m+1}\to\ell$ along $H$ restricts to a linear isomorphism $L_{\ell'}\to\ell$, while $u+g\mapsto g-f(u)$ ($u\in\ell$, $g\in H$) is a linear map killing $L_{\ell'}$ and inducing an isomorphism $\mathbb R^{m+1}/L_{\ell'}\to H$. Both depend polynomially on $f=\varphi_\ell(\ell')$, hence smoothly on $\ell'$, and relative to these two trivializations $\Theta$ is the identity map of $U_\ell\times\operatorname{Hom}(\ell,H)$: the derivative of the straight slope curve $f+tg$ is $g$, whose image under the graph trivialization of the Hom-bundle is again $g$ by the formula just displayed. A map that is the identity in local trivializations is smooth, and $\Theta$ is bijective with fibrewise-linear inverse, so it is a smooth bundle isomorphism $T\mathbb{RP}^m\cong L^*\otimes(\varepsilon^{m+1}/L)$. [F2, F3, step 1.1, step 2.1]

4.1 By [F4] the Euclidean metric gives smooth isomorphisms $\varepsilon^{m+1}=L\oplus L^\perp$, $L^\perp\cong\varepsilon^{m+1}/L$ and $L^*\cong L$. Also $\operatorname{Hom}(L,L)$ is canonically trivial, with the identity as a nowhere-zero section. Tensoring the splitting with $L^*$ and using step 3.1 yields $$T\mathbb{RP}^m\oplus\varepsilon^1\cong L^*\otimes(\varepsilon^{m+1}/L)\oplus L^*\otimes L\cong L^*\otimes\varepsilon^{m+1}\cong(m+1)L^*\cong(m+1)L.$$ All these isomorphisms are smooth; no continuous metric is substituted for a smooth one. [F3, F4, step 3.1]

5.1 Finally $\Theta$ and the splitting are used to compute the classes. The bundle $\varepsilon^{m+1}$ over the one-point base has $P(\varepsilon^{m+1})=\mathbb{RP}^m$ and tautological line $\gamma_{\varepsilon^{m+1}}=L$, so by [F7] its tautological class is $x_L=x_{\varepsilon^{m+1}}\in H^1(\mathbb{RP}^m;\mathbb F_2)$ and the projective-bundle relation is $x_L^{m+1}=0$ (all $c_i\in H^{>0}(\mathrm{pt};\mathbb F_2)$ vanish), while $1,x_L,\dots,x_L^m$ is a basis; since $H^1(\mathbb{RP}^m;\mathbb F_2)=\mathbb F_2a$ has the unique nonzero class $a$ and a basis element cannot be zero, $x_L=a$. Hence $w(L)=1+x_L=1+a$ by the rank-one case of [F6]. Applying [F6] to the stable isomorphism of step 4.1, $$w(T\mathbb{RP}^m)=w(T\mathbb{RP}^m\oplus\varepsilon^1)=w\bigl((m+1)L\bigr)=w(L)^{m+1}=(1+a)^{m+1}$$ in $H^*(\mathbb{RP}^m;\mathbb F_2)=\mathbb F_2[a]/(a^{m+1})$: the first equality is the stability clause for trivial summands, the second is invariance of the classes under bundle isomorphisms, and the third is the Whitney product formula iterated over the $(m+1)$ summands. [F5, F6, F7, step 3.1, step 4.1] ∎
