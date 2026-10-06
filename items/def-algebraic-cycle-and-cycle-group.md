---
id: def-algebraic-cycle-and-cycle-group
kind: definition
title: "Algebraic cycles and the cycle group of a scheme of finite type over a field"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - def-closed-immersion-schemes
  - def-dimension-noetherian-topological-space
  - def-free-abelian-group
  - def-integral-scheme
  - def-locally-finite-type-and-finite-type-morphism
  - def-noetherian-topological-space
  - def-scheme-over-base
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.7-42.8 (cycles and cycle of a closed subscheme, tags 02QY-02R4)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.7-42.8; Definition 42.8.1 and the cycles-with-support convention 42.8.3"
    - title: "The Stacks Project, Definition 5.10.1: Krull dimension of a topological space"
      url: "https://stacks.math.columbia.edu/tag/0054"
      locator: "Definition 5.10.1"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry: Introduction to Intersection Theory, Class 2"
      url: "https://math.stanford.edu/~vakil/245/245class2.pdf"
      locator: "Class 2, definition of cycles and rational equivalence (read in full)"
---

## Definition

Let $k$ be a field and let $X$ be a scheme locally of finite type over $k$
([[def-locally-finite-type-and-finite-type-morphism]], [[def-scheme-over-base]]).
An **algebraic cycle** on $X$ is a formal $\mathbb Z$-linear combination of
integral closed subschemes of $X$ ([[def-integral-scheme]],
[[def-closed-immersion-schemes]]); it is **finite** when the combination is
finite. For an integer $d$, the **group of $d$-cycles** is the free abelian
group

$$Z_d(X):=\bigoplus_{V} \mathbb Z\cdot[V],$$

Here the dimension of any scheme is the supremum of lengths of strict chains
of nonempty irreducible closed subsets of its underlying space, with
$\dim\varnothing=-\infty$. This extends the Noetherian convention
[[def-dimension-noetherian-topological-space]] without requiring
quasi-compactness. The direct sum runs over the integral closed subschemes $V\subseteq X$ of
dimension $d$ ([[def-dimension-noetherian-topological-space]],
[[def-noetherian-topological-space]], [[def-free-abelian-group]]); for finite type $X$ one writes
$Z_*(X)=\bigoplus_{d\in\mathbb Z}Z_d(X)$. The **support** $|\alpha|$ of a cycle
$\alpha=\sum_i n_i[V_i]$ is the union of the $V_i$ with $n_i\ne0$, a closed
subset of $X$; a cycle is **effective** if all $n_i\ge0$.

**Conventions.** (i) A cycle class may be represented by a locally finite sum
in the situations below; finite sums suffice for the schemes of finite type
over a field used in this pair. (ii) All integral closed subschemes are taken
with the reduced structure, and $[V]$ denotes the associated basis element;
the fundamental cycle of an integral $X$ of dimension $n$ is $[X]\in Z_n(X)$.
(iii) For $X$ equidimensional of pure dimension $n$ one writes
$A^p(X):=A_{n-p}(X)$ for the codimension-$p$ Chow group once $A_*$ is
available (def-chow-group-of-cycles-mod-rational-equivalence). (iv) No choice
is used in this definition beyond the free abelian group on the set of
subvarieties ([[def-free-abelian-group]]). For a locally finite type scheme
not assumed quasi-compact, the locally finite cycle group consists instead of
formal sums whose component supports meet each quasi-compact open in only
finitely many terms. Its restriction to every such open is a finite cycle. The
displayed free direct sum is the finite-cycle group; throughout assertions on
merely locally finite type schemes use the locally finite group. For finite
type schemes the two groups coincide. For general locally finite type $X$,
$Z_*(X)$ denotes locally finite sums over all dimensions; it need not be the
direct sum of the $Z_d(X)$ when component dimensions are unbounded. Every
fixed-dimensional operation below is defined degreewise.
