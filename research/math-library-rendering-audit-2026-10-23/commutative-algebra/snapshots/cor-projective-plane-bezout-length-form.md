---
id: cor-projective-plane-bezout-length-form
kind: corollary
title: "Algebraic Bezout formula as a sum of local scheme lengths"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-projective-plane-complete-intersection-total-length, def-total-length-of-a-zero-dimensional-projective-scheme, lem-zero-dimensional-projective-scheme-has-finite-local-charts, def-algebraically-closed-field, prop-algebraically-closed-splitting-and-finite-extension-criteria, def-extension-degree-and-finite-extension, def-residue-field-scheme-point]
justified_by: []
aliases: []
landmark: false
short: "Bezout as local lengths"
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "A. Gathmann, Algebraic Geometry class notes (2002), Example 6.2.2, p. 96"
      url: "https://agag-gathmann.math.rptu.de/class/alggeom-2002/alggeom-2002.pdf"
    - title: "J. S. Milne, Algebraic Geometry v6.10, Remark 6.38, p. 153"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
pipeline_run: frontier-35-ten-categories
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and let $F,G\in k[x_0,x_1,x_2]$
be nonzero homogeneous forms of positive degrees $d$ and $e$ with no common
nonconstant factor, and put $X=\operatorname{Proj}(k[x_0,x_1,x_2]/(F,G))$. Then
$$\sum_{x\in X}\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})\,[\kappa(x):k]=de,$$
a finite sum of local lengths weighted by residue degrees. If moreover $k$ is
algebraically closed, then $[\kappa(x):k]=1$ for every $x\in X$, and therefore
$\sum_{x\in X}\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})=de$.

This is the algebraic length statement supplied to the later plane-curve page.
It asserts nothing about local equations other than the dehomogenised $F,G$,
nothing about invariance under other choices of equations for the same local
curve, and no geometric intersection formulation.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, nonzero homogeneous forms
$F,G\in k[x_0,x_1,x_2]$ of positive degrees $d,e$ with no common nonconstant
factor, the standard graded quotient $S=k[x_0,x_1,x_2]/(F,G)$, and
$X=\operatorname{Proj}S$.

[L1] Assume AC. $X$ is nonempty and finite, every chart ring is zero or of
Krull dimension $0$, and the total length satisfies
$\operatorname{len}_k(X)=de$
([[thm-projective-plane-complete-intersection-total-length]]).

[L2] Assume AC. For a zero-dimensional $X$ the total length is the finite sum
$\operatorname{len}_k(X)=\sum_{x\in X}\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})[\kappa(x):k]$
over the finitely many points, each local ring $\mathcal O_{X,x}$ being a
finite-dimensional local $k$-algebra of finite length and each residue field
$\kappa(x)$ being finite over $k$
([[def-total-length-of-a-zero-dimensional-projective-scheme]],
[[lem-zero-dimensional-projective-scheme-has-finite-local-charts]],
[[def-residue-field-scheme-point]],
[[def-extension-degree-and-finite-extension]]).

[L3] A field $F$ is algebraically closed exactly when it has no nontrivial
finite extension; equivalently $F$ is algebraically closed if and only if every
finite extension $F\subseteq K$ satisfies $K=F$
([[def-algebraically-closed-field]],
[[prop-algebraically-closed-splitting-and-finite-extension-criteria]]).

[L4] Assume AC (declared for consumers of this corollary).
[[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 By [L1] the scheme $X$ is finite, nonempty and has total length $\operatorname{len}_k(X)=de$. [L1]

1.2 By [L2] the total length of $X$ is the finite weighted sum $\operatorname{len}_k(X)=\sum_{x\in X}\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})[\kappa(x):k]$ over the finitely many points of $X$, with every residue degree $[\kappa(x):k]$ finite over $k$. [L2]

2.1 Combining steps 1.1 and 1.2 gives $\sum_{x\in X}\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})[\kappa(x):k]=\operatorname{len}_k(X)=de$, which is the displayed formula. [step 1.1, step 1.2]

3.1 Now assume that $k$ is algebraically closed; by step 1.2 each $\kappa(x)$ is a finite extension field of $k$, so [L3] gives $\kappa(x)=k$ and hence $[\kappa(x):k]=1$ for every $x\in X$; substituting into step 2.1 gives $\sum_{x\in X}\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})=de$. [L3, step 1.2, step 2.1]

4.1 The weighted sum equals $de$ over an arbitrary field by step 2.1, and over an algebraically closed field it collapses to the unweighted sum of local lengths by step 3.1; the Axiom of Choice is inherited from [L1] and [L2] and is declared here for users of the corollary as the standing assumption [L4]. [L1, L2, L4, step 2.1, step 3.1, given] ∎
