---
id: def-smooth-morphism-to-field-classical
kind: definition
title: "Smoothness over a field by geometric regularity"
status: published
origin: pipeline
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-ag-geometrically-regular-algebra-and-fibre
  - def-dual-numbers-scheme
  - def-embedding-dimension-and-regular-local-ring
  - def-finite-type-and-module-finite-algebras
  - def-locally-finite-type-and-finite-type-morphism
  - def-regular-local-ring-geometric-point
  - def-regular-noetherian-ring
  - def-ag-standard-smooth-algebra
  - def-smooth-morphism-classical
  - lem-ag-geometric-regularity-field-tests
  - thm-ag-field-extension-of-schemes
  - thm-ag-standard-smooth-geometric-regularity
  - thm-stalk-structure-sheaf-prime-localization
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Varieties, Definition 33.12.1 and Lemmas 33.12.3 and 33.12.6 (tag 038S)"
      url: "https://stacks.math.columbia.edu/tag/038S"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and
$X$ a finite-type $k$-scheme. Smoothness of $X\to\operatorname{Spec}k$ is
defined by local standard smooth presentations in
[[def-smooth-morphism-classical]]. The following is an equivalent
characterization: $X\to\operatorname{Spec}k$ is smooth if and only if, for
every field extension $K/k$, every local ring of the scheme-theoretic base
change $X_K$ is regular. Here $X_K$ is formed by tensoring affine coordinate
rings with $K$ and gluing as in
[[thm-ag-field-extension-of-schemes]]. We call this condition geometric
regularity of $X$ over $k$. It retains nilpotents in every field change.

## Facts & Assumptions

**Given:** A field $k$, a finite-type $k$-scheme $X$, the earlier local-standard-smooth definition, and the Axiom of Choice.

[F1] [[def-locally-finite-type-and-finite-type-morphism]]: a finite-type morphism is locally of finite type; hence every point has an affine neighbourhood $U=\operatorname{Spec}A$ on which the structure algebra is of finite type.

[F2] [[def-finite-type-and-module-finite-algebras]]: an $R$-algebra is of finite type when it is a finitely generated $R$-algebra.

[F3] [[def-smooth-morphism-classical]] and [[def-ag-standard-smooth-algebra]]: a morphism is smooth when every source point has affine neighbourhoods on which the induced ring map is standard smooth at the corresponding prime; standard smoothness at a prime holds after a further principal shrinking, and a standard smooth presentation is a finitely presented algebra.

[F4] [[def-ag-geometrically-regular-algebra-and-fibre]]: a finite-type $k$-algebra $A$ is geometrically regular over $k$ when $A\otimes_kK$ is a regular Noetherian ring for every finitely generated field extension $K/k$.

[F5] [[thm-ag-standard-smooth-geometric-regularity]]: for a finite-type $k$-algebra $A$, geometric regularity over $k$ is equivalent to the structure map $k\to A$ being locally standard smooth.

[F6] [[lem-ag-geometric-regularity-field-tests]]: if $A$ is geometrically regular over $k$, then $A\otimes_kK$ is a regular ring for every field extension $K/k$.

[F7] [[def-regular-noetherian-ring]]: a commutative Noetherian ring is regular when its localization at every prime is a regular local ring.

[F8] [[thm-ag-field-extension-of-schemes]]: for every affine open $U=\operatorname{Spec}A\subseteq X$, its restriction in $X_K$ is canonically $\operatorname{Spec}(A\otimes_kK)$, open in $X_K$; the theorem's AC use is only to index affine opens by points, and it notes that the set of all affine opens gives a choice-free construction.

[F9] [[def-regular-local-ring-geometric-point]]: a point $x$ of a locally Noetherian scheme is regular when $\mathcal O_{X,x}$ is a regular local ring.

[F10] [[def-embedding-dimension-and-regular-local-ring]]: a nonzero Noetherian local ring is regular local exactly when its embedding dimension equals its Krull dimension.

[F11] [[def-dual-numbers-scheme]]: for a field $k$, $D_k=\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$; its class $\epsilon$ is nilpotent.

[F12] [[thm-stalk-structure-sheaf-prime-localization]]: for a point $\mathfrak p\in\operatorname{Spec}A$, the stalk is canonically $A_{\mathfrak p}$.

[F13] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has a choice function.

## Proof

1.1 Finite-type affine charts and the assumption. The structural morphism $X\to\operatorname{Spec}k$ is of finite type, so around each $x\in X$ there is an affine open $U=\operatorname{Spec}A$ with $A$ of finite type over $k$ [F1, F2]. The field-change scheme $X_K$ and its affine restrictions are those of [F8]. AC is carried in the hypotheses of the standard-smooth equivalence [F5], the all-field field-test [F6], and the field-change construction [F8], so it is declared here [F13]. The field-change theorem says its AC use is only to index a pointwise affine cover and that the set of all affine opens also gives a choice-free construction [F8]. The proof below uses one chart at a time and makes no simultaneous choice of charts or local generators. [F1, F2, F5, F6, F8, F13, given]

2.1 Smoothness implies regularity after every field change. Assume $X\to\operatorname{Spec}k$ is smooth, fix any extension $K/k$, and let $z\in X_K$ map to $x\in X$. By [F3], there is an affine neighbourhood $V=\operatorname{Spec}C$ of $x$ on which $k\to C$ is standard smooth at the prime for $x$; shrinking further by a principal open gives $W=\operatorname{Spec}B\subseteq V$ containing $x$ with $B$ standard smooth over $k$. Thus $k\to B$ is locally standard smooth, so [F5] makes $B$ geometrically regular. By [F6], $B\otimes_kK$ is a regular ring. By [F8], $W_K=\operatorname{Spec}(B\otimes_kK)$ is an open neighbourhood of $z$ in $X_K$. If $\mathfrak q$ is the prime for $z$ in this chart, [F12] identifies its local ring with $(B\otimes_kK)_{\mathfrak q}$; this is regular by [F7], and hence the local ring of $z$ is regular in the sense of [F9]. Since $K$ and $z$ were arbitrary, every local ring of every $X_K$ is regular. [F3, F5, F6, F7, F8, F9, F12, step 1.1, given]

2.2 Regularity after every field change implies smoothness. Suppose every local ring of $X_K$ is regular for every extension $K/k$. Fix $x\in X$ and choose a finite-type affine neighbourhood $U=\operatorname{Spec}A$ as in step 1.1. For every finitely generated extension $K/k$, [F8] identifies $U_K$ with the open subscheme $\operatorname{Spec}(A\otimes_kK)\subseteq X_K$. All its local rings are regular by hypothesis and [F12], and the ring is Noetherian because it is a finite-type algebra over the field $K$ [F4]. It is therefore regular by [F7]. This holds for every finitely generated $K/k$, hence $A$ is geometrically regular by [F4]. The equivalence [F5] gives that $k\to A$ is locally standard smooth, in particular standard smooth at the prime for $x$. As this applies at every $x$, [F3] says that $X\to\operatorname{Spec}k$ is smooth. The empty scheme satisfies both conditions vacuously. [F3, F4, F5, F7, F8, F12, step 1.1, given]

3.1 Boundary calculations. For $X=\operatorname{Spec}k$, every field change is $\operatorname{Spec}K$ and its only local ring is the field $K$, so the zero-dimensional one-point case is smooth. For the nonreduced point $D_k$ of [F11], the field change has coordinate ring $K[\epsilon]/(\epsilon^2)$: the map $(a+b\epsilon)\otimes\lambda\mapsto a\lambda+b\lambda\epsilon$ is a ring isomorphism with inverse $c+d\epsilon\mapsto1\otimes c+\epsilon\otimes d$. Every prime contains the nilpotent $\epsilon$, and every element with nonzero constant term is a unit, so $(\epsilon)$ is the unique prime and maximal ideal. The ring is a two-dimensional $K$-vector space, so its ideals are finite-dimensional $K$-subspaces and it is Noetherian. Its unique local ring has dimension zero, while its maximal ideal has square zero and one-dimensional quotient by its square; it is not regular local by [F10]. Thus the criterion detects the nilpotent structure and correctly says $D_k$ is not smooth. Taking $K=k$ shows the original scheme itself is included among the required field changes; no interval or endpoint parameter occurs. [F10, F11, F12, step 2.1, step 2.2, given, algebra] ∎
