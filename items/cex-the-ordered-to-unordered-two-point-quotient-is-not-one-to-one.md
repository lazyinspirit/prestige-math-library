---
id: cex-the-ordered-to-unordered-two-point-quotient-is-not-one-to-one
kind: counterexample
title: "The ordered-to-unordered two-point quotient is not one-to-one"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-unordered-configuration-space, def-ordered-configuration-space,
       prop-the-symmetric-group-acts-freely-on-ordered-configurations,
       def-finite-symmetric-group-and-permutation-notation,
       def-product-topology, thm-complex-numbers-form-a-field, def-field,
       def-homeomorphism-and-open-maps,
       def-injection-surjection-bijection]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan González-Meneses, Basic results on braid groups, §§1.1–1.3 and 2.1, printed pp. 3–6, 11–13"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  precheck: pass
---

## Statement refuted

Let $F_2(\mathbb C)$ be the ordered configuration space of two points of the
plane and let

$$p:F_2(\mathbb C)\longrightarrow C_2(\mathbb C)=F_2(\mathbb C)/S_2,\qquad p(x):=S_2\cdot x=[x],$$

be the quotient map onto the unordered configuration space
([[def-unordered-configuration-space]], [[def-ordered-configuration-space]]).
**Refuted claim:** the natural quotient map $p$ is injective, hence a
homeomorphism onto $C_2(\mathbb C)$
([[def-homeomorphism-and-open-maps]]). It is not injective: for distinct points
$z_1\neq z_2$ of $\mathbb C$ the two ordered configurations $(z_1,z_2)$ and
$(z_2,z_1)$ are distinct points of $F_2(\mathbb C)$ with the same image under
$p$, because they lie in one $S_2$-orbit. **The claim refuted concerns the
natural quotient map only**: it is not asserted, and it does not follow, that
$F_2(\mathbb C)$ and $C_2(\mathbb C)$ are never abstractly homeomorphic by some
other map, and the example makes no statement about that question.

## Facts & Assumptions

**Given:** The ordered configuration space $F_2(\mathbb C)$ with $(0,1),(1,0)\in F_2(\mathbb C)$, the unordered configuration space $C_2(\mathbb C)$ with its quotient map $p$, and the nonidentity transposition $\tau\in S_2$ of the coordinate permutation action.

[F1] $F_2(\mathbb C)=\{(z_1,z_2)\in\mathbb C^2:z_1\neq z_2\}$ with the subspace topology, so $(0,1)$ and $(1,0)$ both lie in $F_2(\mathbb C)$; two tuples in $\mathbb C^2$ are equal exactly when they agree in every coordinate, so $(0,1)\neq(1,0)$ because $0\neq1$ in the field $\mathbb C$ ([[def-ordered-configuration-space]], [[def-product-topology]], [[thm-complex-numbers-form-a-field]], [[def-field]]).

[F2] The formula $(\sigma\cdot x)_i=x_{\sigma^{-1}(i-1)+1}$ defines a continuous free left action of $S_2$ on $F_2(\mathbb C)$; the nonidentity permutation $\tau$ with $\tau(0)=1$, $\tau(1)=0$ acts by $\tau\cdot(z_1,z_2)=(z_2,z_1)$ ([[prop-the-symmetric-group-acts-freely-on-ordered-configurations]], [[def-finite-symmetric-group-and-permutation-notation]]).

[F3] $C_2(\mathbb C)=F_2(\mathbb C)/S_2=\{S_2\cdot x:x\in F_2(\mathbb C)\}$ is the set of orbits with the quotient topology of $p(x)=S_2\cdot x=[x]$; $p$ is a quotient map, hence continuous and surjective, and $p(x)=p(y)$ exactly when $x$ and $y$ lie in the same orbit $S_2\cdot x=S_2\cdot y$ ([[def-unordered-configuration-space]], [[def-ordered-configuration-space]]).

[F4] A function is injective when $f(x)=f(y)$ implies $x=y$, and a homeomorphism is by definition a continuous bijection with continuous inverse; in particular a homeomorphism is injective, so a map that is not injective is not a bijection and not a homeomorphism ([[def-injection-surjection-bijection]], [[def-homeomorphism-and-open-maps]]).


## Refutation

**Proof technique:** direct.

1.1 *Two distinct ordered configurations.* The tuples $x:=(0,1)$ and $y:=(1,0)$ lie in $F_2(\mathbb C)$, since $0\neq1$; they are distinct, because they differ in the first coordinate and coordinates determine an element of the product $\mathbb C^2$; explicitly $x_1=0\neq1=y_1$. [F1]

1.2 *One orbit.* By [F2] the transposition acts by $\tau\cdot x=\tau\cdot(0,1)=(1,0)=y$, so $x$ and $y$ lie in the same $S_2$-orbit $S_2\cdot x$; note $S_2=\{\operatorname{id},\tau\}$, so this is the whole orbit of $x$. [F2]

2.1 *Equal images, unequal points.* By step 1.2 the two points $x,y$ lie in one orbit, so by [F3] their images agree: $p(x)=p(y)$; but $x\neq y$ by step 1.1. Hence $p$ is not injective, in the sense of [F4]. [step 1.1, step 1.2, F3, F4]

3.1 *The map is not a homeomorphism, and the scope of the refutation.* A homeomorphism of $C_2(\mathbb C)$ with domain $F_2(\mathbb C)$ would be a bijection and hence injective by [F4]; since $p$ is not injective by step 2.1, the natural quotient map $p$ is not a homeomorphism. This refutes only the identification of the quotient map with a homeomorphism; the abstract question whether some other continuous bijection with continuous inverse exists between $F_2(\mathbb C)$ and $C_2(\mathbb C)$ is untouched by this witness, and no assertion about it is made here. [step 2.1, F4] ∎
