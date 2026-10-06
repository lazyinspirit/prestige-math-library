---
id: ex-chow-ring-of-projective-space
kind: example
title: "The Chow ring of projective space and Bezout degrees"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 16
deps:
  - def-axiom-of-choice
  - def-chern-classes-of-a-vector-bundle
  - def-degree-projective-hypersurface
  - def-intersection-with-a-cartier-divisor-and-first-chern-class
  - def-twisting-sheaf-proj
  - lem-chern-class-naturality-additivity-and-splitting
  - lem-chow-groups-of-projective-space
  - thm-intersection-product-and-chow-ring-of-a-smooth-scheme
  - thm-projective-bundle-formula-for-chow-groups
  - thm-twisting-sheaf-invertible-standard-graded
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.36 and 42.60-42.62"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Section 42.36 (projective bundle formula) and Sections 42.60-42.62 (the Chow ring of projective space)"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry: Introduction to Intersection Theory, Class 2 and Class 16"
      url: "https://math.stanford.edu/~vakil/245/245class16.pdf"
      locator: "Class 2: Chow ring of projective space; Class 16: degrees of hypersurface products (Bezout)"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
smooth-immersion and homological suppliers. Let $k$ be a field and $n\ge0$. In
the Chow ring $A^*(\mathbb P^n_k)$
([[thm-intersection-product-and-chow-ring-of-a-smooth-scheme]],
[[lem-chow-groups-of-projective-space]]) put
$h:=c_1(\mathcal O_{\mathbb P^n}(1))\in A^1(\mathbb P^n)$
([[def-intersection-with-a-cartier-divisor-and-first-chern-class]],
[[def-twisting-sheaf-proj]]). Then:

1. $A^d(\mathbb P^n_k)=\mathbb Z\cdot h^d$ for $0\le d\le n$ and
   $A^d(\mathbb P^n_k)=0$ for $d>n$; under the identification
   $A^d(X)=A_{n-d}(X)$ of the intersection product with the cycle groups, the
   class $h^d$ corresponds to the class $[\Lambda^{n-d}]$ of a linear subspace
   of codimension $d$: equivalently
   $h^d\cap[\mathbb P^n]=[\Lambda^{n-d}]$. In particular
   $$A^*(\mathbb P^n_k)\;\cong\;\mathbb Z[h]/(h^{n+1}),$$
   the isomorphism sending $h$ to $c_1(\mathcal O(1))$.
2. (Degrees of products) The degree isomorphism
   $\deg:A^n(\mathbb P^n_k)\to\mathbb Z$ of
   [[lem-chow-groups-of-projective-space]] satisfies $\deg(h^n)=1$. If
   $H_1,\dots,H_n\subseteq\mathbb P^n$ are reduced hypersurfaces of degrees
   $d_1,\dots,d_n$ ([[def-degree-projective-hypersurface]]) with $H_i=V(f_i)$
   for nonconstant square-free forms $f_i$ of degree $d_i$, then
   $[H_i]=d_i\,h$ in $A^1(\mathbb P^n)$ and
   $$[H_1]\cdot[H_2]\cdots[H_n]=(d_1d_2\cdots d_n)\,h^n,\qquad \deg\bigl([H_1]\cdots[H_n]\bigr)=d_1d_2\cdots d_n.$$

**Discussion.** This is the Chow-ring form of Bezout's theorem: the degree of
the product of the hypersurface classes is the Bezout number. The identification
of this product class with the cycle of the scheme-theoretic intersection of the
$H_i$, with its local intersection multiplicities, is the classical
proper-intersection theorem and is not claimed here; for plane curves ($n=2$,
curves without common components) the corresponding local-multiplicity statement
is developed on the plane-curves page.

## Verification

**Given:** the Axiom of Choice; a field $k$; $n\ge0$; the projective space $\mathbb P^n_k$ with its ample generator $\mathcal O(1)$ and $h=c_1(\mathcal O(1))$; reduced hypersurfaces $H_1,\dots,H_n$ of degrees $d_1,\dots,d_n$.

[L1] The projective bundle formula gives, for a rank-$(n+1)$ bundle $\mathcal E$ on a scheme, the isomorphism $\bigoplus_{i=0}^{n}A_{d+i}(X)\to A_{d+n}(\mathbb P(\mathcal E))$ via $\xi$-caps ([[thm-projective-bundle-formula-for-chow-groups]]); the projective space $\mathbb P^n_k$ is the projectivization of the free rank-$(n+1)$ bundle on $\operatorname{Spec}k$ ([[def-twisting-sheaf-proj]], [[thm-twisting-sheaf-invertible-standard-graded]]).

[L2] The Chow ring structure and the identification $A^d=A_{n-d}$ are as in [[thm-intersection-product-and-chow-ring-of-a-smooth-scheme]]; the cycle groups of projective space are $\mathbb Z$ in each dimension with $\deg(h^n)=1$ ([[lem-chow-groups-of-projective-space]]).

[L3] The cap action of $c_1(\mathcal O(1))$ is cutting with a hyperplane $H$: for an integral $V\not\subseteq H$ one has $c_1(\mathcal O(1))\cap[V]=[V\cap H]$ ([[def-intersection-with-a-cartier-divisor-and-first-chern-class]]).

[L4] A reduced hypersurface $H=V(f)$ of degree $d$ has $[H]=d\,h$: $c_1(\mathcal O(1))$ is additive and normalized so that the divisor of a degree-$d$ form is $d$ times a hyperplane class ([[def-degree-projective-hypersurface]], [[def-chern-classes-of-a-vector-bundle]], [[lem-chern-class-naturality-additivity-and-splitting]]).

1.1 The ring. Apply [L1] to the free rank-$(n+1)$ bundle on $\operatorname{Spec}k$, whose projectivization is $\mathbb P^n_k$: the formula gives $A_{d+n}(\mathbb P^n)=\bigoplus_{i=0}^{n}\xi^i\cap\pi^*A_{d+i}(k)$ with $\xi=c_1(\mathcal O(1))$, so $A^d(\mathbb P^n)=\mathbb Z\cdot h^d$ for $0\le d\le n$ and $A^d=0$ for $d>n$; the relation $h^{n+1}=0$ and the absence of other relations give $A^*(\mathbb P^n_k)\cong\mathbb Z[h]/(h^{n+1})$ with $h\mapsto c_1(\mathcal O(1))$. [L1, L2, given, algebra]

1.2 Identification with linear subspaces. By induction on $d$: for a linear subspace $\Lambda^{n-d+1}$ and a general hyperplane $H$ of complementary position, $H\not\supseteq\Lambda$ and $H\cap\Lambda=\Lambda^{n-d}$ is a linear subspace, so [L3] gives $c_1(\mathcal O(1))\cap[\Lambda^{n-d+1}]=[\Lambda^{n-d}]$; starting from $h^0\cap[\mathbb P^n]=[\mathbb P^n]$ this shows $h^d\cap[\mathbb P^n]=[\Lambda^{n-d}]$ under the identification $A^d=A_{n-d}$. In particular $\deg(h^n)=\deg[\Lambda^0]=1$ by [L2]. [L2, L3, given, algebra]

2.1 Degrees of products. By [L4] each reduced hypersurface of degree $d_i$ has class $[H_i]=d_i h$; multiplicativity of the Chow ring product gives $[H_1]\cdots[H_n]=(d_1\cdots d_n)h^n$, and the degree homomorphism of [L2] sends $h^n$ to $1$, so $\deg([H_1]\cdots[H_n])=d_1d_2\cdots d_n$. This is the Bezout number in the Chow ring; the identification with the cycle of the scheme-theoretic intersection with local multiplicities is deliberately not asserted here. [L2, L4, step 1.2, algebra] ∎
