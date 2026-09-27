---
id: def-total-length-of-a-zero-dimensional-projective-scheme
kind: definition
title: "Total length of a zero-dimensional projective scheme"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-axiom-of-choice, def-projective-scheme-from-a-homogeneous-quotient, def-krull-dimension-of-a-ring, lem-zero-dimensional-projective-scheme-has-finite-local-charts, def-composition-series-and-length-of-a-module, def-residue-field-scheme-point, def-extension-degree-and-finite-extension, def-affine-scheme-spectrum, def-dimension, thm-structure-theorem-for-artinian-rings, cor-length-is-additive-in-short-exact-sequences, cor-dimension-of-a-direct-sum]
justified_by: []
aliases: []
landmark: true
short: "total length of a zero-dimensional Proj"
sources:
  scraped: []
  references:
    - title: "A. Gathmann, Algebraic Geometry class notes (2002), Lemma 6.1.4 and Example 6.1.8(i), pp. 93-95"
      url: "https://agag-gathmann.math.rptu.de/class/alggeom-2002/alggeom-2002.pdf"
    - title: "J. S. Milne, Algebraic Geometry v6.10, Remark 6.38, p. 153"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
pipeline_run: frontier-35-ten-categories
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$I\subseteq k[x_0,\ldots,x_n]$ be a homogeneous ideal, put
$S=k[x_0,\ldots,x_n]/I$ with its standard grading, and let
$X=\operatorname{Proj}S$ with standard charts $D_+(x_i)=\operatorname{Spec}(A_i)$,
$A_i=(S_{x_i})_0$ ([[def-projective-scheme-from-a-homogeneous-quotient]]).
Assume that $X$ is **zero-dimensional**, meaning that every chart ring $A_i$ is
either zero or of Krull dimension $0$ ([[def-krull-dimension-of-a-ring]]); this
is the chartwise form of zero-dimensionality used throughout this pair.

Under this hypothesis
[[lem-zero-dimensional-projective-scheme-has-finite-local-charts]] provides
exactly the data needed for a finite total sum: the point set $|X|$ is finite;
for each $x\in|X|$ the local ring $\mathcal O_{X,x}$ has finite length as a
module over itself ([[def-composition-series-and-length-of-a-module]]); and the
residue field $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$
([[def-residue-field-scheme-point]]) is a finite extension of $k$, so the
degree $[\kappa(x):k]=\dim_k\kappa(x)$ is a natural number
([[def-extension-degree-and-finite-extension]], [[def-dimension]]). The
**total length** of $X$ over $k$ is the finite sum

$$\operatorname{len}_k(X):=\sum_{x\in|X|} \ell_{\mathcal O_{X,x}}\bigl(\mathcal O_{X,x}\bigr)\cdot[\kappa(x):k]\ \in\ \mathbb N .$$

Its summands are the composition lengths of the local rings, taken as modules
over themselves, multiplied by the degrees of the residue field extensions.
The empty sum is the natural number $0$, so
$\operatorname{len}_k(\varnothing)=0$.

1. **Length taken in $X$, not in an ambient plane.** The factor
   $\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})$ is the length of the local ring
   of $X$ at $x$ as a module over itself. For $X=\operatorname{Proj}S$ this is
   the local factor of the chart ring of any standard chart containing $x$
   ([[lem-zero-dimensional-projective-scheme-has-finite-local-charts]]), so it
   is an invariant of the pair $(X,x)$; it is not the length of any ring
   attached to an ambient projective space into which $X$ might be embedded.
2. **No closedness of $k$ is assumed.** Over a general field the residue field
   $\kappa(x)$ may be a proper finite extension of $k$, and the factor
   $[\kappa(x):k]$ records that degree; over an algebraically closed field this
   factor is $1$ for every point, but no such equality is built into the
   definition.
3. **Finiteness is inherited, not assumed.** Finiteness of $|X|$, of each
   length, and of each residue degree all come from
   [[lem-zero-dimensional-projective-scheme-has-finite-local-charts]], whose
   proof uses the Axiom of Choice through the prime-lifting and
   Artinian-structure suppliers; the definition itself performs no selection
   beyond that inherited hypothesis.

**Consistency with the affine case.** Suppose
$X=\operatorname{Spec}A$ is an affine scheme whose coordinate ring $A$ is a
finite-dimensional $k$-algebra, which is the situation of a standard chart
above. Then the points of $X$ are the finitely many maximal ideals
$\mathfrak m_1,\ldots,\mathfrak m_r$ of $A$, with
$\mathcal O_{X,\mathfrak m_j}=A_{\mathfrak m_j}$ and
$\kappa(\mathfrak m_j)=A/\mathfrak m_j$, and

$$\operatorname{len}_k(X)=\dim_k A .$$

Indeed, [[thm-structure-theorem-for-artinian-rings]] writes
$A\cong\prod_{j=1}^{r}A_{\mathfrak m_j}$; additivity of the dimension over a
direct sum ([[cor-dimension-of-a-direct-sum]]) gives
$\dim_kA=\sum_{j=1}^{r}\dim_kA_{\mathfrak m_j}$. Each local factor has
nilpotent maximal ideal ([[lem-zero-dimensional-projective-scheme-has-finite-local-charts]]),
so its filtration by powers of the maximal ideal has
$\kappa(\mathfrak m_j)$-vector space factors and finite length; additivity of
length in short exact sequences
([[cor-length-is-additive-in-short-exact-sequences]]) and additivity of
dimension over such a filtration give
$\dim_kA_{\mathfrak m_j}=\ell_{A_{\mathfrak m_j}}(A_{\mathfrak m_j})\cdot[\kappa(\mathfrak m_j):k]$
for every $j$. Summing the equalities yields the displayed identity. This
computation is a consistency check on the definition and is never used in place
of the local intersection computations of this pair.
