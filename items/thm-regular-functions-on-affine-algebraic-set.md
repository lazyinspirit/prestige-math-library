---
id: thm-regular-functions-on-affine-algebraic-set
kind: theorem
title: "Polynomial functions on an affine algebraic set are exactly its coordinate ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coordinate-ring-affine-algebraic-set, def-vanishing-ideal-affine-set]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 2i"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §1.5"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
---

## Statement

Let $k$ be an algebraically closed field and let $X\subseteq \mathbf A_k^n$ be
an affine algebraic set. Evaluation induces a bijection
$$ k[X]\longrightarrow \{\,\varphi:X\to k : \varphi \text{ is the restriction of a polynomial on }\mathbf A_k^n\,\}. $$
Equivalently, two polynomials define the same polynomial function on $X$ if and
only if their difference lies in $I(X)$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$ and an affine algebraic set $X\subseteq \mathbf A_k^n$.

[L1] The coordinate ring of $X$ is the quotient $k[x_1,\ldots,x_n]/I(X)$ ([[def-coordinate-ring-affine-algebraic-set]]).

[L2] A polynomial lies in $I(X)$ exactly when it vanishes at every point of $X$ ([[def-vanishing-ideal-affine-set]]).

## Proof

**Proof technique:** direct.

1.1 Let $\overline f\in k[X]$, represented by a polynomial $f$. Define $\Phi(\overline f):X\to k$ by $\Phi(\overline f)(x)=f(x)$. If $\overline f=\overline g$ in $k[X]$, then $f-g\in I(X)$ by [L1], so [L2] says $f(x)=g(x)$ for every $x\in X$. Thus $\Phi$ is well defined. [L1, L2, given]

1.2 If $\Phi(\overline f)=\Phi(\overline g)$, then $f(x)=g(x)$ for every $x\in X$, so $f-g\in I(X)$ by [L2]. Hence $\overline f=\overline g$ by [L1]. Therefore $\Phi$ is injective. [L1, L2]

1.3 Every polynomial function on $X$ is, by definition, the restriction of some polynomial $f\in k[x_1,\ldots,x_n]$, and that function is exactly $\Phi(\overline f)$. Hence $\Phi$ is surjective. [given]

2.1 Steps 1.1, 1.2, and 1.3 give the stated bijection, and step 1.2 is precisely the criterion that two polynomials define the same function on $X$ if and only if their difference lies in $I(X)$. [step 1.1, step 1.2, step 1.3] ∎
