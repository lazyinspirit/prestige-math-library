---
id: def-chern-classes-of-a-vector-bundle
kind: definition
title: "Chern classes of a vector bundle on a smooth scheme"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 14
deps:
  - def-axiom-of-choice
  - def-intersection-with-a-cartier-divisor-and-first-chern-class
  - def-locally-free-sheaf-finite-rank
  - def-relative-dimension-smooth-morphism
  - def-smooth-morphism-schemes
  - lem-chow-ring-naturality-and-projection-formula
  - lem-operational-chern-classes-and-whitney-formula
  - thm-intersection-product-and-chow-ring-of-a-smooth-scheme
  - thm-projective-bundle-formula-for-chow-groups
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.37-42.45 (Chern classes, tags 02UK, 0FA8)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.37-42.45: Chern classes of vector bundles, the projective bundle relation and the section formula"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry: Introduction to Intersection Theory, Class 16"
      url: "https://math.stanford.edu/~vakil/245/245class16.pdf"
      locator: "Class 16, Sections 2-3: Chern classes and their basic properties"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
smooth-immersion and homological suppliers. Let $k$ be a field and let $X$ be a
smooth equidimensional scheme of finite type over $k$ of dimension $n$
([[def-smooth-morphism-schemes]], [[def-relative-dimension-smooth-morphism]]),
with Chow ring $A^*(X)$
([[thm-intersection-product-and-chow-ring-of-a-smooth-scheme]]). Let $\mathcal E$
be a finite locally free $\mathcal O_X$-module of rank $r\ge1$
([[def-locally-free-sheaf-finite-rank]]), with projective bundle
$\pi:\mathbb P(\mathcal E)\to X$ and $\xi=c_1(\mathcal O(1))$
([[thm-projective-bundle-formula-for-chow-groups]]).

**Definition.** By the projective bundle formula, $\xi^r\in A^r(\mathbb P(\mathcal E))$
has a unique expression
$$\xi^r+\sum_{i=1}^{r}(-1)^i c_i(\mathcal E)\,\xi^{r-i}=0\qquad\text{in }A^*(\mathbb P(\mathcal E)),$$
with $c_i(\mathcal E)\in A^i(X)$ pulled back from $X$; the classes $c_i(\mathcal E)$
are the **Chern classes** of $\mathcal E$. Set $c_0(\mathcal E):=1\in A^0(X)$,
$c_i(\mathcal E):=0$ for $i>r$, and call
$c(\mathcal E):=1+c_1(\mathcal E)+\dots+c_r(\mathcal E)$ the **total Chern class**.

For the zero bundle define $c(0)=1$ and $c_i(0)=0$ for $i>0$, as for the rank-zero operational classes; no projective bundle of rank zero is used.

**Basic properties.** (i) (Normalization) For an invertible sheaf $\mathcal L$:
$c(\mathcal L)=1+c_1(\mathcal L)$ with $c_1(\mathcal L)\in A^1(X)$ the first Chern
class of [[def-intersection-with-a-cartier-divisor-and-first-chern-class]]; in
particular $c_1(\mathcal O_X(D))=[D]$ for an effective Cartier divisor $D$.
(ii) (Naturality) For a morphism $f:X'\to X$ of smooth equidimensional
$k$-schemes, $c_i(f^*\mathcal E)=f^*c_i(\mathcal E)$. (iii) (Vanishing)
$c_i(\mathcal E)=0$ for $i>\operatorname{rank}\mathcal E$ and
$c_i(\mathcal E)\in A^i(X)$. (iv) (Direct sums of line bundles) If
$\mathcal E\cong\mathcal L_1\oplus\dots\oplus\mathcal L_r$ then
$c(\mathcal E)=\prod_{i=1}^r(1+c_1(\mathcal L_i))$. (v) (Top class)
$c_r(\mathcal E)\cap[X]=[Z(s)]$ for a regular section $s$ of $\mathcal E$ with
$\dim Z(s)=n-r$; in particular $c_r(\mathcal E)$ is the class of the zero locus
of a regular section.

**Well-definedness.** The classes are defined by applying the operational Chern
operators of [[lem-operational-chern-classes-and-whitney-formula]] to the
fundamental class $[X]$ and using the operational-ring isomorphism of
[[thm-intersection-product-and-chow-ring-of-a-smooth-scheme]], which identifies
the operational action with multiplication: their defining projective bundle
relation is exactly the displayed relation, and the basis part of
[[thm-projective-bundle-formula-for-chow-groups]] gives existence and uniqueness
of the coefficients. Normalization, naturality under arbitrary morphisms of
smooth schemes, rank vanishing, the Whitney and line-summand formulas and the
regular-section formula (including its generic multiplicities and the case of a
non-reduced zero scheme) are already established for the operational classes;
restriction of operational classes is the graph pullback under the operational
isomorphism, by
[[lem-chow-ring-naturality-and-projection-formula]], so they become the claimed
ring identities. Only the injectivity of projective-bundle pullback is used, not
injectivity of arbitrary $f^*$.
