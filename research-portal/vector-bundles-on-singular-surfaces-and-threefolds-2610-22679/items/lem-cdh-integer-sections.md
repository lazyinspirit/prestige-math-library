---
id: lem-cdh-integer-sections
kind: lemma
title: Integer cdh sections on seminormal schemes
status: draft
domain: mathematics
deps:
  - lem-finite-constant-cdh-sections
  - prop-cdh-cover-refinement
  - def-scheme-sites-and-sheafification
  - lem-clopen-finite-constant-maps
  - math:def-axiom-of-choice
dependency_roles:
  lem-finite-constant-cdh-sections: mathematical-premise
  prop-cdh-cover-refinement: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  lem-clopen-finite-constant-maps: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF page 5, Lemma 2.4 and its proof
      reading_limits: The lemma and its proof were read in the supplied extracted
        article text; the proof below uses the completed local suppliers for the
        two substantive inputs.
dependency_level: 14
---

## Statement
Assume the Axiom of Choice. Let $k$ be an algebraically closed field and $X$ a separated seminormal scheme of finite type over $k$. Then there is a canonical isomorphism of abelian groups $H^0_{\mathrm{cdh}}(X,\mathbb Z)\cong\mathbb Z^{\pi_0(X)}$. In particular, if $X$ is nonempty and connected, this group is canonically $\mathbb Z$.

Here $\pi_0(X)$ is the set of connected components of the underlying topological space: a connected component is a maximal nonempty connected subset, and connected means that the subset has no partition into two nonempty relatively open subsets. In particular, $\pi_0(\varnothing)=\varnothing$. The group $\mathbb Z^{\pi_0(X)}$ consists of all functions from that set to $\mathbb Z$, with pointwise addition; for the empty set it is the zero group. The cdh site used here is the big site of separated finite-type $k$-schemes with the cdh topology. The constant integer cdh sheaf is the sheafification of the constant presheaf with value $\mathbb Z$, and $H^0_{\mathrm{cdh}}(X,\mathbb Z)$ is its group of sections over $X$. Seminormality means that each point has an affine neighbourhood whose coordinate ring $R$ has the property that each pair $x,y\in R$ satisfying $x^3=y^2$ has a unique $a\in R$ with $a^2=x$ and $a^3=y$.

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraically closed field $k$, and a separated seminormal finite-type $k$-scheme $X$.

**Goal:** Construct the stated canonical group isomorphism, including the empty-scheme case.

[F1] For every finite set $A$, the constant cdh sheaf $\underline A$ has a natural bijection $\underline A(X)\cong\operatorname{Map}(\pi_0(X),A)$ under these hypotheses and the Axiom of Choice. This bijection is natural in maps of finite sets. [[lem-finite-constant-cdh-sections]]

[F2] Every section of the constant integer cdh sheaf over $X$ factors through $\underline A(X)$ for some finite subset $A\subseteq\mathbb Z$. [[prop-cdh-cover-refinement]]

[F3] Sheafification of a set-valued presheaf is the twofold plus construction: a plus section is represented by a matching family on a covering sieve, and two families represent the same section when they agree on a common covering subsieve. Restriction uses pullback of sieves. The sheafification is functorial and left adjoint to inclusion of sheaves. [[def-scheme-sites-and-sheafification]]

[F4] A finite-type scheme over a field is Noetherian, and under the Axiom of Choice its connected components are finite in number and clopen. In particular every integer-valued function on $\pi_0(X)$ has finite image. [[lem-clopen-finite-constant-maps]] [[math:def-axiom-of-choice]]

## Proof

**Proof technique:** Pass from finite constant sets to integers, using finite local values and the natural finite-set identifications.

1.1 A pointwise injective map of presheaves $F\to G$ induces a pointwise injective map $F^+\to G^+$. Indeed, if two matching families from $F$ have equal images in $G^+(T)$, their images agree on some common covering subsieve by [F3]. Pointwise injectivity makes the original families agree there, so they represent the same element of $F^+(T)$. Applying the same argument again shows that sheafification preserves such injections. In particular, for every inclusion of sets $A\subseteq B$, the induced map $\underline A\to\underline B$ is pointwise injective. [F3, construct]

2.1 For finite $A\subseteq\mathbb Z$, [F1] identifies $\underline A(X)$ with functions $\pi_0(X)\to A$. By naturality, whenever $A\subseteq B$ are finite subsets of $\mathbb Z$, the map between these section sets corresponds to inclusion of the corresponding function sets. By step 1.1, the map from each $\underline A(X)$ into $\underline{\mathbb Z}(X)$ is injective. Moreover, the images for two finite subsets $A,B$ are both contained in the image for the finite union $A\cup B$. [F1, step 1.1]

3.1 By [F2], the images in step 2.1 cover $\underline{\mathbb Z}(X)$. They therefore give a well-defined bijection from $\underline{\mathbb Z}(X)$ to the set of finite-image functions $\pi_0(X)\to\mathbb Z$: if a section is represented using two finite subsets, injectivity into the integer sheaf and passage to their union show that the two representations coincide there, and [F1] then gives the same function. Conversely every finite-image function is obtained from [F1] using its finite image as $A$. This also handles an empty image and an empty scheme. [F1, F2, step 2.1]

4.1 The bijection respects addition. If sections are represented by finite-value functions with values in $A$ and $B$, their sum is represented by the induced map of sheaves $\underline A\times\underline B\to\underline C$, where $C=\{a+b:a\in A,b\in B\}$, followed by $\underline C\to\underline{\mathbb Z}$. This follows locally from the addition map of constant presheaves and the sheaf axiom; its value on each component is the sum of the two values. Thus the bijection is a group isomorphism onto the finite-image functions. [F1, F3, step 3.1, construct]

5.1 By [F4], $\pi_0(X)$ is finite, so every function on it has finite image. Step 4.1 is consequently the claimed isomorphism to $\mathbb Z^{\pi_0(X)}$. The construction uses natural sheaf maps and the natural bijections in [F1], so it is canonical. If $X$ is nonempty and connected, it has exactly one connected component and the target is $\mathbb Z$; if $X$ is empty, the target is the zero group. [F4, step 4.1] ∎
