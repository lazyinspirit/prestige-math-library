---
id: prop-finite-type-cartan-matrix-properties
kind: proposition
title: Properties of finite-type Cartan matrices
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cartan-matrix-of-a-based-root-system, prop-distinct-simple-roots-have-nonpositive-inner-product, thm-rank-two-root-system-classification, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-reduced-crystallographic-euclidean-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §5, Proposition 2.52, printed pp. 157-158"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Let $A=(a_{ij})$ be the Cartan matrix of a reduced crystallographic root
system $\Phi$ relative to a base
([[def-cartan-matrix-of-a-based-root-system]]). Then:
1. $a_{ii}=2$ for all $i$, and $a_{ij}$ is a nonpositive integer for $i\ne j$;
2. $a_{ij}=0$ if and only if $a_{ji}=0$;
3. $a_{ij}a_{ji}\in\{0,1,2,3\}$ for $i\ne j$;
4. there is a diagonal matrix $D$ with positive diagonal entries such that
   $DAD^{-1}$ is symmetric and positive definite.

## Facts & Assumptions

**Given:** A reduced crystallographic root system $\Phi$ with base $\Delta=\{\alpha_1,\dots,\alpha_r\}$, base entries $a_{ij}=2(\alpha_j,\alpha_i)/(\alpha_i,\alpha_i)$, and the inner product $(\,\cdot\,,\,\cdot\,)$ on $E$.

[L1] $a_{ii}=2$ and $a_{ij}=2(\alpha_j,\alpha_i)/(\alpha_i,\alpha_i)$ is an integer ([[def-cartan-matrix-of-a-based-root-system]], [[def-reduced-crystallographic-euclidean-root-system]]).

[L2] For distinct simple roots, $(\alpha_i,\alpha_j)\le0$ ([[prop-distinct-simple-roots-have-nonpositive-inner-product]]).

[L3] For nonproportional roots $\alpha,\beta$ the product of Cartan integers is $4\cos^{2}\theta\in\{0,1,2,3\}$ and the angle is $90^{\circ}$, $60^{\circ}/120^{\circ}$, $45^{\circ}/135^{\circ}$ or $30^{\circ}/150^{\circ}$ ([[thm-rank-two-root-system-classification]]).

[L4] The simple roots form a basis of $E$, so their Gram matrix $G=((\alpha_i,\alpha_j))$ is symmetric and positive definite, and any symmetric matrix representing the inner product in a basis is positive definite ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

## Proof

**Proof technique:** direct.

1.1 $a_{ii}=2(\alpha_i,\alpha_i)/(\alpha_i,\alpha_i)=2$ and $a_{ij}\in\mathbb Z$; for $i\ne j$ one has $a_{ij}\le0$ because $(\alpha_i,\alpha_j)\le0$ by [L2] and $(\alpha_i,\alpha_i)>0$. [L1, L2, algebra]

1.2 $a_{ij}=0$ if and only if $a_{ji}=0$: both entries are nonzero exactly when $(\alpha_i,\alpha_j)\ne0$, since the denominators $(\alpha_i,\alpha_i),(\alpha_j,\alpha_j)$ are positive. [L1, algebra]

1.3 For $i\ne j$, the simple roots $\alpha_i,\alpha_j$ are nonproportional, so $a_{ij}a_{ji}=4\cos^{2}\theta\in\{0,1,2,3\}$ by [L3], giving the third assertion. [L3, algebra]

1.4 Let $D=\operatorname{diag}(|\alpha_1|,\dots,|\alpha_r|)$; then $DAD^{-1}$ has entries $|\alpha_i|a_{ij}|\alpha_j|^{-1}=2(\alpha_j,\alpha_i)/(|\alpha_i||\alpha_j|)$, which is symmetric in $i,j$ because the inner product is symmetric. [L1, algebra]

2.1 The matrix in step 1.4 is positive definite: it is twice the Gram matrix $((\alpha_i/|\alpha_i|,\alpha_j/|\alpha_j|))$ of the normalized simple roots, and those vectors are a basis of $E$, so their Gram matrix is positive definite by [L4]. Discarding the factor $2$ preserves positive definiteness. [L4, step 1.4, algebra] ∎
