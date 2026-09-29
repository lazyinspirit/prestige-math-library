---
id: lem-ample-pullback-finite-morphism
kind: lemma
title: "Finite pullback preserves absolute ampleness"
status: published
origin: pipeline
deps:
  - def-ample-invertible-sheaf
  - lem-finite-morphism-affine
  - def-finite-morphism-schemes
  - def-axiom-of-choice
  - def-invertible-sheaf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Properties of Schemes, Section 28.27 (Tag 01PS)"
      url: https://stacks.math.columbia.edu/tag/01PS
    - title: "Ravi Vakil, The Rising Sea, August 2022 draft, Section 17.6"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice as inherited from the finite-morphism affineness
interface ([[def-axiom-of-choice]]). Let $g:Y\to X$ be a finite morphism of
schemes ([[def-finite-morphism-schemes]]) and let $L$ be an ample invertible
$\mathcal O_X$-module ([[def-ample-invertible-sheaf]]). Then the pullback
$g^*L$ is an ample invertible $\mathcal O_Y$-module. The empty case is
included: if $X=\varnothing$ then $Y=\varnothing$ and $g^*L$ is the (unique)
invertible sheaf on the empty scheme, which is ample.

## Facts & Assumptions

**Given:** A finite morphism $g:Y\to X$, an ample invertible sheaf $L$ on $X$, and the Axiom of Choice.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] A morphism $g:Y\to X$ is finite if for every affine open $U=\operatorname{Spec}A\subseteq X$ its inverse image is affine, $g^{-1}(U)=\operatorname{Spec}B$, with $B$ module-finite over $A$; the zero ring is allowed, so an empty inverse image satisfies the condition. ([[def-finite-morphism-schemes]])

[F2] Every finite morphism is affine: for every affine open $U\subseteq X$ the inverse image $g^{-1}(U)$ is affine. ([[lem-finite-morphism-affine]])

[F3] An invertible sheaf $L$ on $X$ is ample when $X$ is quasi-compact and for every $x\in X$ there are $n\ge1$ and $s\in\Gamma(X,L^n)$ with $x\in X_s=\{\text{image of }s\text{ nonzero at }x\}$ and $X_s$ affine; the empty quasi-compact scheme is allowed, and $X_s$ is open. ([[def-ample-invertible-sheaf]])

[F4] An invertible $\mathcal O_X$-module is a locally free sheaf of rank exactly one. ([[def-invertible-sheaf]])

## Proof

**Proof technique:** direct: pull back the affine nonvanishing loci of the ampleness witness and use that a finite morphism onto an affine target has affine source.

1.1 $Y$ is quasi-compact. By [F1] the morphism $g$ is affine, hence quasi-compact: for an affine (therefore quasi-compact) open $U\subseteq X$, the inverse image $g^{-1}(U)$ is affine by [F2], hence quasi-compact. Since $L$ is ample, $X$ is quasi-compact by [F3]; the inverse image $Y=g^{-1}(X)$ of the quasi-compact target $X$ is quasi-compact, by quasi-compactness of $g$. [F1, F2, F3, given]

1.2 Pullback of twists and of nonvanishing loci. The pullback $g^*L$ is invertible: over an open $V\subseteq X$ on which $L$ is trivial, $g^*L$ restricts to the trivial invertible sheaf on $g^{-1}(V)$, and these trivialisations are compatible on overlaps by [F4]. For $n\ge1$ the canonical map $g^*(L^n)\to(g^*L)^n$ is an isomorphism, since pullback of modules commutes with tensor products. For $s\in\Gamma(X,L^n)$ with pullback $g^*s\in\Gamma(Y,(g^*L)^n)$ one has
$$Y_{g^*s}=g^{-1}(X_s),$$
because at $y\in Y$ with $x=g(y)$ the fibre of $(g^*L)^n$ at $y$ is $L^n(x)\otimes_{\kappa(x)}\kappa(y)$, and the image of $g^*s$ is the scalar extension of the image of $s$; a vector in a one-dimensional space is nonzero exactly when its scalar extension to the field $\kappa(y)$ is nonzero. [F3, F4, algebra]

2.1 Pulled-back loci over affine witnesses are affine. Let $n\ge1$, $s\in\Gamma(X,L^n)$ and suppose $X_s$ is affine. The restriction $g^{-1}(X_s)\to X_s$ of $g$ is finite as a base change of the finite morphism $g$, and its target $X_s$ is affine; by [F1] applied to the affine open $X_s\subseteq X_s$ of the target, the source $g^{-1}(X_s)$ is affine. By step 1.2 it equals $Y_{g^*s}$. [F1, F2, step 1.2]

3.1 The pulled-back witnesses cover $Y$. Let $y\in Y$ and put $x=g(y)$. By ampleness of $L$ there are $n\ge1$ and $s\in\Gamma(X,L^n)$ with $x\in X_s$ and $X_s$ affine. Then $y\in g^{-1}(X_s)=Y_{g^*s}$ by step 1.2, and $Y_{g^*s}$ is affine by step 2.1. [F3, step 1.2, step 2.1]

4.1 Conclusion. By step 1.1 the scheme $Y$ is quasi-compact, and by step 3.1 every point of $Y$ lies in an affine nonvanishing locus of a global section of a positive power of the invertible sheaf $g^*L$ of step 1.2. Hence $g^*L$ is ample by [F3]. If $X=\varnothing$ then $Y=\varnothing$ since $g$ is a morphism, and the condition is vacuous; the Axiom of Choice [A1] is inherited only through the affineness interface of [F1], no choice being made here. [A1, F3, step 1.1, step 1.2, step 3.1]
\qed
