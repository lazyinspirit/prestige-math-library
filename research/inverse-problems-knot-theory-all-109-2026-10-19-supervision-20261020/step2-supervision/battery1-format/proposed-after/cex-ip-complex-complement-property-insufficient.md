---
id: cex-ip-complex-complement-property-insufficient
kind: counterexample
title: The complement property is not sufficient for complex phase retrieval
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - thm-ip-real-phase-retrieval-complement-property
  - cor-ip-full-spark-sharp-real-phase-measurement-count
  - thm-complex-numbers-form-a-field
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - def-linear-combination-and-span
  - def-linear-subspace
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Philipp Grohs, Sarah Koppensteiner, and Martin Rathmair, Phase Retrieval: Uniqueness and Stability, arXiv:1901.07911v2, complex-field discussion in §2.1"
      url: "https://arxiv.org/pdf/1901.07911v2"
    - title: "Radu Balan, Pete Casazza, and Dan Edidin, On signal reconstruction without phase, Applied and Computational Harmonic Analysis 20(3) (2006), discussion following Theorem 2.8"
      url: "https://arxiv.org/pdf/math/0412411"
---

## Statement refuted

In $\mathbb C^2$ use $a_1=(1,0)$, $a_2=(0,1)$, and $a_3=(1,1)$, and define $\langle a,x\rangle=\overline{a^{(1)}}x_1+\overline{a^{(2)}}x_2$ for $a=(a^{(1)},a^{(2)})$. Identify signals by global phase, $x\approx z$ when $z=\lambda x$ for some $\lambda\in\mathbb C$ with $|\lambda|=1$, and use intensity data $(|\langle a_j,x\rangle|^2)_{j=1}^3$. Here the complex complement property means that every subset of the three labels or its complement spans $\mathbb C^2$. Each pair spans $\mathbb C^2$, so the family has this property; nevertheless, $x=(1,i)$ and $z=(1,-i)$ have equal intensity data and are not related by a global phase. Thus the real complement-property criterion and its real full-spark count cannot be transferred to complex phase retrieval.

## Statement references

[[thm-ip-real-phase-retrieval-complement-property|The complement-property theorem is stated for real measurements and a global sign]]

[[cor-ip-full-spark-sharp-real-phase-measurement-count|The sharp full-spark count is a real-field result]]

[Philipp Grohs, Sarah Koppensteiner, and Martin Rathmair, real/complex distinction in phase retrieval, §2.1](https://arxiv.org/pdf/1901.07911v2)

[Radu Balan, Pete Casazza, and Dan Edidin, discussion of the real-field hypothesis after Theorem 2.8](https://arxiv.org/pdf/math/0412411)

## Facts & Assumptions

**Given:** The three vectors in $\mathbb C^2$, the Hermitian pairing and global-phase relation defined in the counterexample, and the real-field scope of the cited theorem.

[F1] [[thm-ip-real-phase-retrieval-complement-property]]: the complement-property equivalence proved here has hypotheses over $\mathbb R^d$ and identifies only the pair $x,-x$.

[F2] [[cor-ip-full-spark-sharp-real-phase-measurement-count]]: the $2d-1$ full-spark sufficiency statement is for finite real measurement families.

[F3] [[thm-complex-numbers-form-a-field]]: $\mathbb C$ is a field with imaginary unit $i$ satisfying $i^2=-1$.

[F4] [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]: $|a+bi|=\sqrt{a^2+b^2}$ and $|z|^2=z\overline z$.

[F5] [[def-linear-combination-and-span]], [[def-linear-subspace]]: each span is a complex linear subspace containing its generators, so every displayed linear combination belongs to that span.

## Counterexample


1.1 For arbitrary $(u,v)\in\mathbb C^2$, the three identities $$ (u,v)=u a_1+v a_2=(u-v)a_1+v a_3=u a_3+(v-u)a_2 $$ show that each of the pairs $\{a_1,a_2\}$, $\{a_1,a_3\}$, and $\{a_2,a_3\}$ spans $\mathbb C^2$: the span is a subspace containing the pair, so it contains the corresponding displayed combination for every $(u,v)$. Any partition of three labels has at least two labels on one side, and a set containing a spanning pair also spans; hence the complex complement property holds. [given, F3, F5, algebra]

1.2 The measurements of $x=(1,i)$ are $(1,i,1+i)$ and those of $z=(1,-i)$ are $(1,-i,1-i)$. By [F3] and [F4], their squared moduli are $(1,1,2)$ in both cases. [given, F3, F4, algebra]

2.1 If $z=\lambda x$ with $|\lambda|=1$, the first coordinate forces $\lambda=1$, while the second would then force $-i=i$, which is false in the field [F3]. Thus $x\not\approx z$, and step 1.2 proves noninjectivity despite step 1.1. By [F1] and [F2], this does not contradict either real-field result: the ambient field, phase relation, and measurements differ. [step 1.1, step 1.2, F1, F2, F3, algebra] ∎

