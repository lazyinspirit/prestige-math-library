---
id: thm-zariski-closed-sets-affine-space
kind: theorem
title: "Zero loci in affine space are the closed sets of the classical Zariski topology"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-algebraic-set, lem-zero-locus-ideal-closure]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 2c"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §1.3"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
---

## Statement

Let $k$ be an algebraically closed field and fix $n\ge 0$. The subsets
$V(S)\subseteq \mathbf A_k^n$ form the closed sets of a topology on
$\mathbf A_k^n$. More precisely:

1. arbitrary intersections of sets of the form $V(S)$ are again of that form;
2. finite unions of sets of the form $V(S)$ are again of that form;
3. $\varnothing$ and $\mathbf A_k^n$ are of that form.

For ideals $I,J\subseteq k[x_1,\ldots,x_n]$ one has
$$ V(I)\cup V(J)=V(IJ). $$

## Facts & Assumptions

**Given:** An algebraically closed field $k$ and an integer $n\ge 0$.

[L1] For any subsets $S,T\subseteq k[x_1,\ldots,x_n]$, the zero locus $V(S)$ is the set of points where every polynomial in $S$ vanishes ([[def-affine-algebraic-set]]).

[L2] Replacing a set of equations by the ideal it generates does not change the zero locus ([[lem-zero-locus-ideal-closure]]).

## Proof

**Proof technique:** direct.

1.1 If $\{S_\alpha\}_{\alpha\in A}$ is any family of subsets of $k[x_1,\ldots,x_n]$, then a point lies in every $V(S_\alpha)$ exactly when it annihilates every polynomial in every $S_\alpha$, that is, exactly when it lies in $V(\bigcup_{\alpha\in A} S_\alpha)$. Hence $$ \bigcap_{\alpha\in A}V(S_\alpha)=V\!\left(\bigcup_{\alpha\in A}S_\alpha\right). $$ [L1, given]

1.2 By definition, $V(\varnothing)=\mathbf A_k^n$ and $V(1)=\varnothing$. [L1, given]

1.3 Let $I,J\subseteq k[x_1,\ldots,x_n]$ be ideals. If $a\in V(I)\cup V(J)$, then every product $fg$ with $f\in I$ and $g\in J$ vanishes at $a$, so $a\in V(IJ)$. Conversely, if $a\in V(IJ)$ but $a\notin V(I)$ and $a\notin V(J)$, choose $f\in I$ and $g\in J$ with $f(a)\ne0$ and $g(a)\ne0$. Then $(fg)(a)\ne0$, contradicting $a\in V(IJ)$. Thus $V(I)\cup V(J)=V(IJ)$. [L1, algebra, choose]

2.1 For arbitrary subsets $S,T$, step 1.3 and [L2] give $$ V(S)\cup V(T)=V((S))\cup V((T))=V((S)(T)), $$ so finite unions of zero loci are zero loci. Repeating this argument proves the same for any finite union. [L2, step 1.3, algebra]

3.1 Steps 1.1, 1.2, and 2.1 are exactly the topology axioms for the closed subsets of $\mathbf A_k^n$, and step 1.3 gives the displayed formula $V(I)\cup V(J)=V(IJ)$. [step 1.1, step 1.2, step 2.1, step 1.3] ∎
