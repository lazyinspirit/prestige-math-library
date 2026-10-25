---
id: ex-pontryagin-numbers-of-complex-projective-two-space
kind: example
title: "Pontryagin numbers of the complex projective plane"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes, def-pontryagin-number-of-a-closed-oriented-manifold, prop-oriented-boundaries-have-zero-pontryagin-numbers, def-null-cobordant-closed-manifold, def-unoriented-and-oriented-bordism-groups, prop-zero-dimensional-bordism-groups, def-kronecker-evaluation-pairing, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Section 15, Example 15.6, printed pp. 177-178: the projective-space Pontryagin classes; Section 16, printed pp. 185-186: the Pontryagin-number normalization and boundary obstruction."
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Proposition 7.51, printed pp. 63-64, and definition (7.68), printed p. 65: the Chern computation and Pontryagin normalization for $\\mathbb{CP}^2$"
dependency_level: 1
---

## Example

Assume AC ([[def-axiom-of-choice]]), inherited from the tangent-bundle and
Pontryagin-number suppliers. For $\mathbb{CP}^2$ with its complex orientation,
$H^*(\mathbb{CP}^2;\mathbb Z)=\mathbb Z[x]/(x^3)$ with $x=c_1(\gamma^*)$ and
$\langle x^2,[\mathbb{CP}^2]\rangle=1$. Its total Pontryagin class is
$(1+x^2)^3=1+3x^2$ in this truncated ring. Its unique degree-four Pontryagin
number is therefore $p_1[\mathbb{CP}^2]=3$. Consequently it is not an oriented
boundary and represents a nonzero class of $\Omega_4^{SO}$. This supplies the
degree-four numerical normalization for later signature computations without
assuming that the test manifold is already known to generate integral bordism.

## Facts & Assumptions

**Given:** The complex projective plane $\mathbb{CP}^2$ with its complex orientation and the tautological complex line $\gamma$ with dual $\gamma^*$, and $x=c_1(\gamma^*)$.

[F1] [[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]] gives the Euler sequence, the splitting, and the computations $H^*(\mathbb{CP}^2;\mathbb Z)=\mathbb Z[x]/(x^3)$, $\langle x^2,[\mathbb{CP}^2]\rangle=1$, $c(T\mathbb{CP}^2)=(1+x)^3$ and $p(T\mathbb{CP}^2)=(1+x^2)^3$, hence $p_1(T\mathbb{CP}^2)=3x^2$ and $p_k(T\mathbb{CP}^2)=\binom{3}{k}x^{2k}$.

[F2] [[def-pontryagin-number-of-a-closed-oriented-manifold]] defines $p_J[\mathbb{CP}^2]=\langle p_{j_1}\cdots p_{j_r},[\mathbb{CP}^2]\rangle$ for a partition $J$ of the dimension divided by four, here the single partition $(1)$ of $1$, with the Kronecker pairing of [[def-kronecker-evaluation-pairing]].

[F3] [[prop-oriented-boundaries-have-zero-pontryagin-numbers]]: a closed oriented $4k$-manifold with a nonzero Pontryagin number is not an oriented boundary, and [[def-null-cobordant-closed-manifold]], [[def-unoriented-and-oriented-bordism-groups]] identify the oriented boundary classes with the zero class of $\Omega_4^{SO}$.

[F4] [[prop-zero-dimensional-bordism-groups]] identifies $\Omega_0^{SO}\cong\mathbb Z$ through the signed count and its positive point generator; no assertion about $\Omega_4^{SO}$ is part of that result.

## Verification

1.1 By [F1] the truncated ring is $\mathbb Z[x]/(x^3)$, so $x^3=0$ and $x^2\ne0$ with $\langle x^2,[\mathbb{CP}^2]\rangle=1$. The total Pontryagin class is $p(T\mathbb{CP}^2)=(1+x^2)^3=1+3x^2+3x^4+x^6$, and all powers of $x$ with exponent at least three vanish in the truncated ring, so $p(T\mathbb{CP}^2)=1+3x^2$. Thus $p_1=3x^2$ and $p_2=0$, the latter by the cohomological dimension, not the rank cutoff: the real tangent rank is $4$ and $2\cdot2=4$ does not exceed it. [F1]

1.2 The only partition of $1$ is $(1)$, so by [F2] the unique degree-four Pontryagin number is
$$p_1[\mathbb{CP}^2]=\langle3x^2,[\mathbb{CP}^2]\rangle=3\langle x^2,[\mathbb{CP}^2]\rangle=3,$$
where the evaluation uses the normalization of step 1.1 and the linearity of the Kronecker pairing on classes [F2]. No other partition contributes, and classes of the wrong degree evaluate to zero by the conventions of [F2]. [F2, step 1.1]

2.1 Since $p_1[\mathbb{CP}^2]=3\ne0$, the manifold is not an oriented boundary by [F3], so its class in $\Omega_4^{SO}$ is nonzero: a boundary class has all Pontryagin numbers zero, and here $p_1$ does not vanish. The empty manifold and the zero class are excluded by [F3]; in particular $[\mathbb{CP}^2]\ne0$ without any appeal to a classification of $\Omega_4^{SO}$. [F3, step 1.2]

3.1 Normalization and boundary cases. The degree-zero oriented bordism group is $\Omega_0^{SO}\cong\mathbb Z$ generated by the positively oriented point [F4], whose only number is $p_{\varnothing}=\langle1,[\mathrm{pt}]\rangle=1$; this identifies the degree-zero normalization but makes no claim about $\Omega_4^{SO}$, and in particular no generator or rank statement for degree four is asserted here. For dimension zero the example reduces to that point computation, and the empty manifold has value $0$. The formulas of step 1.1 include the degenerate case $x^3=0$ through the truncation, and the cited suppliers carry their own choice declarations, so the verification adds no choice. [F1, F2, F4, step 1.1, step 2.1] ∎
