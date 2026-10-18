---
id: def-absolutely-simple-object
kind: definition
title: "Absolutely simple objects"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [def-k-linear-category-and-k-linear-functor, def-simple-object, def-locally-finite-k-linear-abelian-category]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§1.5 Lemma 1.5.2 and §1.8 Definition 1.8.1, Proposition 1.8.4, printed pp. 5 and 9"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $k$ be a field and let $\mathcal C$ be a $k$-linear category
([[def-k-linear-category-and-k-linear-functor]]). Since composition in
$\mathcal C$ is $k$-bilinear, $\operatorname{End}_{\mathcal C}(X)$ is a
$k$-algebra with unit $\operatorname{id}_X$ for every object $X$.

An object $X$ of $\mathcal C$ is **absolutely simple** when the $k$-algebra
$\operatorname{End}_{\mathcal C}(X)$ is one-dimensional over $k$, that is,

$$\operatorname{End}_{\mathcal C}(X)=k\cdot\operatorname{id}_X,\qquad \operatorname{id}_X\ne0 .$$

Equivalently, the evaluation map

$$k\longrightarrow\operatorname{End}_{\mathcal C}(X),\qquad \lambda\longmapsto\lambda\operatorname{id}_X ,$$

is an isomorphism of $k$-algebras. These two formulations agree: the evaluation
map is $k$-linear and multiplicative with $1\mapsto\operatorname{id}_X$, and it
is injective because $\lambda\operatorname{id}_X=0$ with $\operatorname{id}_X\ne0$ forces
$\lambda=0$; surjectivity is exactly
$\operatorname{End}_{\mathcal C}(X)=k\cdot\operatorname{id}_X$. In particular a
nonzero endomorphism space $k\cdot\operatorname{id}_X$ has dimension one, so an
absolutely simple object is not a zero object; if $\mathcal C$ has a zero object
then $X\ne0$ automatically.

In a $k$-linear abelian category, a simple object with
$\operatorname{End}(X)=k$ satisfies this condition ([[def-simple-object]]).
The converse need not hold: the representation $k\xrightarrow{1}k$ of the
two-vertex quiver has only scalar endomorphisms but has the proper nonzero
subrepresentation $0\to k$. Thus the definition records the scalar
endomorphism condition without asserting simplicity in an arbitrary abelian
category.
Every simple object of a locally finite $k$-linear abelian category over an
algebraically closed field $k$ is absolutely simple. Indeed, a nonzero
endomorphism of a simple object has zero kernel and full image, hence is
an isomorphism; its endomorphism algebra $D$ is therefore a division algebra.
Local finiteness makes $D$ finite-dimensional
([[def-locally-finite-k-linear-abelian-category]]). For $a\in D$, a polynomial
over $k$ annihilates $a$ by linear dependence of its powers; it splits into
linear factors, and a division algebra has no zero divisors, so one factor
$a-\lambda\operatorname{id}_X$ vanishes. Thus $D=k$. This definition
fixes no semisimplicity and no algebraic-closedness hypothesis; it records them
only as the standard situation in which absolute simplicity is automatic.

If $X$ is absolutely simple, every automorphism of $X$ is a scalar
$\lambda\operatorname{id}_X$ with $\lambda\in k^{\times}$: it is an invertible
endomorphism, hence by absolute simplicity equals some
$\lambda\operatorname{id}_X$, and $\lambda$ is invertible with inverse
$\lambda^{-1}$ because $\lambda\operatorname{id}_X$ is invertible.
