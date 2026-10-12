---
id: "lem-de-rham-top-integral-is-fundamental-class-evaluation"
kind: "lemma"
title: "Top de Rham integration equals fundamental-class evaluation"
status: "draft"
origin: "session"
deps: ["thm-euclidean-inverse-function-theorem", "thm-excision-for-singular-homology", "thm-monotone-convergence-for-the-integral", "def-axiom-of-choice", "thm-de-rham-theorem", "thm-smooth-singular-chains-compute-singular-homology", "def-fundamental-class-of-a-compact-oriented-manifold", "thm-morse-sard-for-euclidean-maps", "thm-change-of-variables-for-oriented-manifold-diffeomorphisms", "thm-smooth-partitions-of-unity-exist-on-manifolds"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Christian Schnell, Complex Manifolds, MAT 545, Fall 2024, classes 16–18", "url": "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"}]}
proof_strategy: direct
---

## Statement

For a compact oriented smooth boundaryless $m$-manifold $M$ and a smooth real or complex top form $\alpha$, the natural de Rham comparison satisfies $\langle J_M[\alpha],[M]\rangle=\int_M\alpha$. Thus rational cup products that become top de Rham forms integrate to their rational fundamental-class evaluation.

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.



## Proof

1.1 A smooth singular real cycle $z=\sum_{j=1}^Na_j\sigma_j$ representing $[M]$ exists by smooth-singular homology comparison. Its evaluation under $J_M$ is $\sum a_j\int_{\Delta^m}\sigma_j^*\alpha$, by the defining integration comparison. If $m=0$, this is exactly the oriented finite point sum and equals the manifold integral. Suppose $m>0$. Apply Sard in coordinate charts to each smooth extension of $\sigma_j$ to a neighborhood of its simplex. Its critical values and the images of simplex faces have measure zero, the latter because maps of $(m-1)$-dimensional faces have rank below $m$. Finite unions remain null. [given, algebra, choose]

2.1 For every point $y$ outside these null sets, each preimage in each simplex is interior and regular. There are only finitely many: otherwise compactness would give an accumulation point, which cannot lie on a face and which contradicts local injectivity at a regular point. Local inverse charts at these preimages identify the image of $z$ in $H_m(M,M\setminus\{y\};\mathbb R)$ with $\bigl(\sum_j a_j\sum_{x\in\sigma_j^{-1}(y)}\operatorname{sgn}\det D\sigma_j(x)\bigr)$ times the positive local orientation. This follows by excising disjoint small inverse-image balls: the remaining chain misses $y$, and on each ball the smooth diffeomorphism carries its local oriented fundamental class with its determinant sign. Since $z$ represents $[M]$, the defining local orientation property of that class makes the displayed weighted multiplicity exactly $1$. [step 1.1, given, algebra]

3.1 On the regular locus in each simplex choose a countable locally finite partition subordinate to precompact inverse-function neighborhoods; such neighborhoods are smooth open sets, and the partition theorem applies to their interior domain. Change of variables on each injective chart writes its pullback top-form integral as the signed integral on its image. The sum is legitimate: the absolute integrals are bounded by the pullback of the absolute density of $\alpha$, whose smooth Jacobian and coefficients are bounded on the compact simplex, so monotone convergence for the corresponding nonnegative density series proves that the sum converges absolutely. The critical set contributes zero because its pulled-back top form has zero Jacobian; simplex faces have measure zero in the domain. Therefore $\sum a_j\int\sigma_j^*\alpha=\int_M(\sum_j a_j\sum_{x\in\sigma_j^{-1}(y)}\operatorname{sgn}\det D\sigma_j(x))\alpha(y)=\int_M\alpha$ by step 2.1 and the null-set exclusion. Real and imaginary parts prove the complex statement. Cup compatibility of $J_M$ proves the last assertion. [step 1.1, step 2.1, given, algebra] ∎
