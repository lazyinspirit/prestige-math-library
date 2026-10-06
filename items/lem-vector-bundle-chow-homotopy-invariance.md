---
id: lem-vector-bundle-chow-homotopy-invariance
kind: lemma
title: "Homotopy invariance for vector bundles"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-intersection-with-a-cartier-divisor-and-first-chern-class
  - lem-chow-localization-and-vector-bundle-homotopy
  - thm-projective-bundle-formula-for-chow-groups
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Section 42.36, Lemma 42.36.3 (tag 02TX)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Lemma 42.36.3 (tag 02TX): homotopy invariance for vector bundles via the projective completion"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry, Class 6"
      url: "https://math.stanford.edu/~vakil/245/245class6.pdf"
      locator: "Class 6, Section 3: vector bundle homotopy invariance"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
proper/quasi-finite and scheme base-change suppliers. Fix a field $k$ and
let $T$ be locally of finite type over $k$. For any rank-$r$ vector bundle $p:E\to T$, flat pullback $p^*:A_m(T)\to A_{m+r}(E)$ is bijective,
including after every $k$-base change $T'\to T$ with $T'$ locally of finite
type over $k$. Its inverse is denoted $s_E^!$.

## Facts & Assumptions

**Given:** the Axiom of Choice; a field $k$; a scheme $T$ locally of finite type over $k$ and a rank-$r$ vector bundle $p:E\to T$.

[L1] The projective bundle $q:\mathbb P(E^\vee\oplus1)\to T$ in the quotient convention has tautological quotient $\mathcal O(1)$ with $\xi=c_1(\mathcal O(1))$; the complement of the infinity divisor $j:\mathbb P(E^\vee)\hookrightarrow\mathbb P(E^\vee\oplus1)$, cut out by the section of $\mathcal O(1)$ coming from the trivial summand, is canonically $E$, and $q|_E=p$ ([[thm-projective-bundle-formula-for-chow-groups]], [[def-intersection-with-a-cartier-divisor-and-first-chern-class]]).

[L2] Localization sequence and affine-space homotopy invariance ([[lem-chow-localization-and-vector-bundle-homotopy]]).

[L3] Projective bundle formula on $\mathbb P(E^\vee)$ and $\mathbb P(E^\vee\oplus1)$: the classes $1,\xi,\dots$ form a basis over the corresponding Chow groups, and caps by $\xi$ commute with proper pushforward ([[thm-projective-bundle-formula-for-chow-groups]], [[def-intersection-with-a-cartier-divisor-and-first-chern-class]]).

## Proof

**Proof technique:** direct; compactify the bundle by the projective completion, identify the image of the infinity pushforward inside the projective bundle basis by means of the trivial-summand section, and read off the quotient.

1.1 Compactification and localization. If $r=0$, $E=T$ and $p=\operatorname{id}$, so pullback and its inverse are the identity after every base change. Assume $r\ge1$ for the compactification argument. Let $q:\mathbb P(E^\vee\oplus1)\to T$ be the projective completion with $\mathcal O(1)$ and $\xi=c_1(\mathcal O(1))$, and let $j:\mathbb P(E^\vee)\hookrightarrow\mathbb P(E^\vee\oplus1)$ be the infinity divisor, the zero scheme of the section of $\mathcal O(1)$ induced by the direct-summand $1\subseteq E^\vee\oplus1$. Its complement is $E$, and the restriction of $q$ to $E$ is $p$; hence the localization sequence of [L2] gives the exact sequence $A_m(\mathbb P(E^\vee))\xrightarrow{j_*}A_m(\mathbb P(E^\vee\oplus1))\xrightarrow{}A_m(E)\to0$. [L1, L2, given, algebra]

2.1 The image of the infinity pushforward. Write $\pi=q\circ j$. For an integral cycle $[V]$ on $T$, the trivial-summand section cuts the relative hyperplane $\mathbb P(E^\vee|_V)$ in the projective completion, with multiplicity one. The Cartier formula therefore gives $j_*\pi^*[V]=\xi\cap q^*[V]$, and linearity gives this identity for all classes $\beta$ on $T$. Compatibility of the first Chern cap with proper pushforward then yields $j_*(\xi^a\cap\pi^*\beta)=\xi^{a+1}\cap q^*\beta$. Consequently, on the basis $1,\xi,\dots,\xi^{r-1}$ over $A_*(T)$ of the source and $1,\xi,\dots,\xi^{r}$ of the target supplied by [L3], the image of $j_*$ is exactly the span of the positive powers $\xi^{1},\dots,\xi^{r}$. [L3, step 1.1, algebra]

3.1 Conclusion. By step 2.1 the quotient of $A_*(\mathbb P(E^\vee\oplus1))$ by the image of $j_*$ is the direct summand $q^*A_*(T)$ spanned by $1$, and by step 1.1 this quotient is exactly $A_*(E)$; since $q|_E=p$, the induced map is the flat pullback $p^*$, which is therefore an isomorphism onto the summand spanned by the classes $q^*\alpha$ with $m$ shifted by $r$. Both bundles and both bases pull back along any $k$-base change $T'\to T$ with $T'$ locally of finite type over $k$, so the same computation applies verbatim after base change; the inverse of $p^*$ is by definition $s_E^!$. [L1, L3, step 1.1, step 2.1, algebra] ∎ 