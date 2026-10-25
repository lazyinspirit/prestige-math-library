---
id: lem-quasi-finite-morphism-fibre-characterization
kind: lemma
title: "Finite-fibre and pointwise characterizations of quasi-finiteness"
status: published
origin: pipeline
deps:
  - def-quasi-finite-morphism-schemes
  - def-quasi-finite-at-a-prime-for-finite-type-algebras
  - def-locally-finite-type-and-finite-type-morphism
  - def-scheme-theoretic-fibre
  - def-finite-morphism-schemes
  - cor-base-change-finite-type-and-products
proof_strategy: direct
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
  references:
    - title: "Stacks Project, Morphisms of Schemes, §29.21 Definition 29.21.1 and Lemmas 29.21.3, 29.21.5–7, 29.21.10"
      url: "https://stacks.math.columbia.edu/tag/01TC"
    - title: "Stacks Project, Commutative Algebra, Lemma 10.122.1"
      url: "https://stacks.math.columbia.edu/tag/00PJ"
    - title: "Stacks Project, Commutative Algebra, Lemma 10.122.2"
      url: "https://stacks.math.columbia.edu/tag/00PK"
    - title: "Stacks Project, Commutative Algebra, Definition 10.122.3"
      url: "https://stacks.math.columbia.edu/tag/00PL"
    - title: "Stacks Project, Varieties, Lemma 33.20.2"
      url: "https://stacks.math.columbia.edu/tag/06LH"
---

## Statement

Let $f:X\to S$ be a finite-type morphism, with quasi-finiteness as defined on
this page. The following are equivalent: (1) $f$ is quasi-finite; (2) every
$x\in X$ is isolated in the fibre $X_{f(x)}$ and
$\kappa(x)/\kappa(f(x))$ is finite; (3) for every $s\in S$ the fibre morphism
$X_s\to\operatorname{Spec}\kappa(s)$ is finite.

## Facts & Assumptions

**Given:** A finite-type morphism $f:X\to S$, a point $x\in X$ with image $s=f(x)$, and the definitions of quasi-finiteness and scheme-theoretic fibre.

[F1] A scheme morphism is quasi-finite when it is finite type and each point has compatible affine neighbourhoods on which the ring map is quasi-finite at the corresponding prime; the local fibre algebra is $B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}$ ([[def-quasi-finite-morphism-schemes]]).

[F2] For a finite-type ring map $A\to B$ and $\mathfrak q$ over $\mathfrak p$, quasi-finiteness at $\mathfrak q$ means that $B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}$ is finite-dimensional over $\kappa(\mathfrak p)$ ([[def-quasi-finite-at-a-prime-for-finite-type-algebras]]).

[F3] A morphism is of finite type when it is locally of finite type and quasi-compact ([[def-locally-finite-type-and-finite-type-morphism]]).

[F4] The scheme-theoretic fibre is $X_s=X\times_S\operatorname{Spec}\kappa(s)$ ([[def-scheme-theoretic-fibre]]).

[F5] A morphism to an affine target is finite when its inverse image is affine and its coordinate algebra is a finite module over the target ring ([[def-finite-morphism-schemes]]).

[F6] Arbitrary base change preserves finite-type morphisms ([[cor-base-change-finite-type-and-products]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$ and $s=f(x)$. If (1) holds, take compatible affine neighbourhoods $U=\operatorname{Spec}B$ and $V=\operatorname{Spec}A$ from [F1], with $f(U)\subseteq V$, and let $\mathfrak q$ and $\mathfrak p=\mathfrak q\cap A$ correspond to $x$ and $s$. The local ring of $X_s$ at $x$ is $B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}$ by [F1] and [F4]. The witnessing map is finite type, so [F2] says this local fibre algebra is finite-dimensional over $\kappa(s)$. For the reverse implication, choose a compatible affine pair witnessing that $f$ is locally of finite type, as provided by [F3]. Its fibre chart $U_s=U\times_V\operatorname{Spec}\kappa(s)$ is open in $X_s$, so isolatedness restricts to $U_s$. The same local-ring identification and the same criterion then apply. Stacks Commutative Algebra tag 00PK, whose proof reduces to tag 00PJ proves that finite-dimensionality of this local fibre algebra is equivalent to $x$ being isolated in $X_s$. Its equivalent residue-field condition, and directly the quotient map from the finite-dimensional local algebra to $\kappa(x)=B_{\mathfrak q}/\mathfrak qB_{\mathfrak q}$, give that $\kappa(x)/\kappa(s)$ is finite. Thus (1) and (2) are equivalent pointwise; the same scheme-level isolated-point and residue-field arguments are recorded in Stacks Morphisms tag 01TC. [F1, F2, F3, F4, given, algebra]

1.2 Suppose the fibre morphism $X_s\to\operatorname{Spec}\kappa(s)$ is finite. By [F5], $X_s=\operatorname{Spec}C$ with $C$ finite-dimensional over $\kappa(s)$. Such a ring is Artinian and is a finite product of local Artinian rings. Its spectrum is therefore a finite discrete space, and each residue field is a quotient of a finite-dimensional $\kappa(s)$-vector space. Hence every point of this fibre is isolated and has finite residue extension. The argument includes nilpotents; for example, $\kappa(s)[\epsilon]/(\epsilon^2)$ has one isolated point with residue field $\kappa(s)$. If $X_s$ is empty then $C=0$ and the pointwise conclusions are vacuous. Thus (3) implies (2). [F4, F5, algebra]

2.1 Assume (1). By step 1.1 every point of each fibre is isolated, so each fibre is zero-dimensional. Fix $s\in S$. The base change $X_s\to\operatorname{Spec}\kappa(s)$ is finite type by [F6], and it is quasi-compact because $f$ is finite type by [F3] and quasi-compactness survives base change by [F6]. Let $W=\operatorname{Spec}D$ be any affine open of $X_s$. Its finite-type $\kappa(s)$-algebra $D$ has dimension zero. As in the complete proof at Stacks Varieties tag 06LH, Noether normalization makes $D$ finite-dimensional over $\kappa(s)$; therefore $D$ is Artinian and decomposes into finitely many local Artinian factors. Each such factor gives an open singleton in $W$, hence in $X_s$. These singleton opens cover $X_s$. Quasi-compactness gives a finite subcover, so $X_s$ is a finite disjoint union of spectra of finite-dimensional local Artinian $\kappa(s)$-algebras. Their finite product is a finite-dimensional coordinate algebra, and [F5] says the resulting morphism to $\operatorname{Spec}\kappa(s)$ is finite. The empty fibre is $\operatorname{Spec}(0)$ and is finite as well. This proves (1) implies (3), including the one-point case $\operatorname{Spec}\kappa(s)$. [F3, F4, F5, F6, step 1.1, algebra]

3.1 Step 1.1 proves (1)$\Longleftrightarrow$(2), step 2.1 proves (1)$\Longrightarrow$(3), and step 1.2 proves (3)$\Longrightarrow$(2). These three implications give all directions among the stated conditions. The proof makes no AC assumption: for each fixed fibre its quasi-compactness supplies a finite subcover, and no family of choices is assembled. [step 1.1, step 1.2, step 2.1, algebra] ∎
