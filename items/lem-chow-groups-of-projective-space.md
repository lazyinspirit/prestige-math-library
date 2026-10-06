---
id: lem-chow-groups-of-projective-space
kind: lemma
title: "Chow groups of projective space"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps:
  - def-algebraic-cycle-and-cycle-group
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-chow-group-of-cycles-mod-rational-equivalence
  - def-intersection-with-a-cartier-divisor-and-first-chern-class
  - def-relative-projective-space-standard-charts
  - def-twisting-sheaf-proj
  - lem-chow-localization-and-vector-bundle-homotopy
  - lem-flat-pullback-chow-groups
  - lem-proper-pushforward-of-cycles-well-defined
  - thm-projective-space-as-proj
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
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.19 and 42.32 (localization and homotopy invariance)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.19 and 42.32: the localization sequence and the Chow groups of affine and projective space"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry: Introduction to Intersection Theory, Class 2 and Class 6"
      url: "https://math.stanford.edu/~vakil/245/245class2.pdf"
      locator: "Class 2: Chow group of projective space; Class 6: homotopy invariance"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
proper/quasi-finite and scheme base-change suppliers. Let $k$ be a field and
$n\ge0$. Then for every $d$:
$$A_d(\mathbb P^n_k)=\begin{cases}\mathbb Z\cdot[\mathbb P^d], & 0\le d\le n,\\ 0, & \text{otherwise},\end{cases}$$
where $\mathbb P^d\subseteq\mathbb P^n$ is a $d$-dimensional linear subspace and
$[\mathbb P^d]$ its class
([[def-chow-group-of-cycles-mod-rational-equivalence]],
[[def-algebraic-cycle-and-cycle-group]]). In particular the degree homomorphism
$$\deg:A_0(\mathbb P^n_k)\xrightarrow{\ \cong\ }\mathbb Z,\qquad \sum_x m_x[x]\longmapsto\sum_x m_x[\kappa(x):k],$$
is an isomorphism; its inverse sends $1$ to $[\mathbb P^0]$ for any $k$-rational
point, and every $0$-cycle whose support consists of $k$-rational points has
class $(\sum_x m_x)\,[\mathbb P^0]$. For $k=\mathbb C$ this is the classical
cellular decomposition. More generally,
$A_d(\mathbb A^n_k)=\mathbb Z$ for $d=n$ and $A_d(\mathbb A^n_k)=0$ otherwise:
homotopy invariance shifts degrees by $n$, and $A_*(\operatorname{Spec}k)$ is
$\mathbb Z$ in degree $0$, so every cycle on affine space of dimension less than $n$ is rationally
equivalent to zero. For $n=1$, a closed point of degree greater than one is
the principal divisor of its monic irreducible polynomial; linear polynomials
suffice for rational points.

## Facts & Assumptions

**Given:** the Axiom of Choice; a field $k$ and $n\ge0$; the linear subspaces $\mathbb P^d\subseteq\mathbb P^n$.

[L1] The localization sequence $A_m(Z)\xrightarrow{i_*}A_m(T)\xrightarrow{j^*}A_m(U)\to0$ is exact for a closed immersion $i:Z\hookrightarrow T$ with open complement $U$, and the projection $T\times\mathbb A^r\to T$ induces $A_m(T)\cong A_{m+r}(T\times\mathbb A^r)$ ([[lem-chow-localization-and-vector-bundle-homotopy]]).

[L2] First Chern classes of invertible sheaves define graded cap operations $c_1(L)\cap-:A_m(X)\to A_{m-1}(X)$ which are additive and commute with proper pushforward and flat pullback; on an integral $W$ with a rational section $s$ not vanishing identically, $c_1(L)\cap[W]=[\operatorname{div}_L(s)]$ ([[def-intersection-with-a-cartier-divisor-and-first-chern-class]]).

[L3] Proper pushforward of a closed point $x$ to $\operatorname{Spec}k$ is $[\kappa(x):k]$ times the fundamental class of the point, by the norm-degree definition ([[lem-proper-pushforward-of-cycles-well-defined]], [[def-chow-group-of-cycles-mod-rational-equivalence]]).

[L4] The standard affine charts of $\mathbb P^n_k$ are affine $n$-space, and $\mathbb P^n_k\setminus H\cong\mathbb A^n_k$ for a coordinate hyperplane $H$ ([[def-relative-projective-space-standard-charts]], [[thm-projective-space-as-proj]], [[def-twisting-sheaf-proj]]).

## Proof

**Proof technique:** direct; use localization and homotopy invariance for the affine and projective decompositions, and the cap operation of $\mathcal O(1)$ followed by degree for independence.

1.1 Affine space. Applying homotopy invariance [L1] successively in the $n$ coordinates gives $A_d(\mathbb A^n_k)\cong A_{d-n}(\operatorname{Spec}k)$, which is $\mathbb Z$ for $d=n$ and $0$ otherwise; the top class is $[\mathbb A^n]$ and for $n=1$ every closed point is the principal divisor of its monic irreducible polynomial in $k[t]$, which is linear precisely for a rational point. [L1, L4, given, algebra]

2.1 Generation of the Chow groups of projective space. For $n=0$, projective space is $\operatorname{Spec}k$ and the assertion is immediate. Assume $n\ge1$. Let $H=\mathbb P^{n-1}\subseteq\mathbb P^n$ be a coordinate hyperplane with complement $\mathbb A^n$. Localization [L1] gives the exact sequence $A_d(\mathbb P^{n-1})\xrightarrow{i_*}A_d(\mathbb P^n)\xrightarrow{j^*}A_d(\mathbb A^n)\to0$. For $d<n$ the group $A_d(\mathbb A^n)$ vanishes by step 1.1, so $i_*$ is surjective, and induction on $n$ proves that $A_d(\mathbb P^n)$ is generated by the class $[\mathbb P^d]$ of a $d$-dimensional linear subspace: in the hyperplane the class of a $d$-dimensional linear subspace generates by induction, and its pushforward is the class of the corresponding linear subspace of $\mathbb P^n$; the induction starts at $n=d$, where $\mathbb P^d$ has no hyperplane below it. For $d=n$ the same exact sequence reads $0=A_n(\mathbb P^{n-1})\to A_n(\mathbb P^n)\to A_n(\mathbb A^n)\cong\mathbb Z\to0$ by step 1.1, so $A_n(\mathbb P^n)=\mathbb Z[\mathbb P^n]$ is generated by the top class, and the cycle group $Z_n(\mathbb P^n)=\mathbb Z[\mathbb P^n]$ admits no nonzero rational equivalences because none of its subvarieties has dimension $n+1$. For $d<0$ or $d>n$ there are no integral closed subschemes of dimension $d$, so $A_d(\mathbb P^n)=0$. [L1, step 1.1, given, algebra]

3.1 Independence. Fix $d$ with $0\le d\le n$ and let $c_1=c_1(\mathcal O(1))\cap-$; by [L2] the iterated cap $c_1^d$ maps $A_m(\mathbb P^n)$ to $A_{m-d}(\mathbb P^n)$, is additive, and is defined by cutting with $d$ coordinate hyperplanes in general position. On the linear subspace $\mathbb P^d$, the $d$ coordinate hyperplanes cut it in a single $k$-rational point, so $c_1^d[\mathbb P^d]=[\mathbb P^0]$, and the degree homomorphism $\deg:A_0(\mathbb P^n)\to\mathbb Z$ of [L3] sends $[\mathbb P^0]$ to $1$; hence $\deg\circ c_1^d$ is a homomorphism $A_d(\mathbb P^n)\to\mathbb Z$ sending the generator $[\mathbb P^d]$ of step 2.1 to $1$. A cyclic group admitting a homomorphism onto $\mathbb Z$ with generator mapping to $1$ is infinite cyclic, so $A_d(\mathbb P^n)=\mathbb Z\cdot[\mathbb P^d]$. [L2, L3, step 2.1, algebra]

4.1 The degree isomorphism and closed points. By steps 2.1 and 3.1, $A_0(\mathbb P^n)$ is generated by $[\mathbb P^0]$ for a $k$-rational point; for a closed point $x$ with residue field $\kappa(x)$, proper pushforward to $\operatorname{Spec}k$ is multiplication by $[\kappa(x):k]$ by [L3], so $[x]=[\kappa(x):k][\mathbb P^0]$ and $\deg$ is the stated isomorphism; a $0$-cycle supported on $k$-rational points has class $(\sum_xm_x)[\mathbb P^0]$. The computation over $\mathbb C$ is the classical cellular decomposition under the same identification. [L3, step 3.1, given, algebra] ∎ 