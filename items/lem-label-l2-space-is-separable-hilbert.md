---
id: lem-label-l2-space-is-separable-hilbert
kind: lemma
title: A Euclidean probability label space gives a separable Hilbert L2 space
status: draft
dependency_level: 0
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-l-p-space-as-a-quotient-by-null-functions, thm-riesz-fischer-completeness-of-l-p, thm-cauchy-schwarz-in-an-inner-product-space, def-real-and-complex-inner-product-space, def-hilbert-space, def-countable-choice, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p, lem-countable-generators-yield-countable-set-algebras, lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra, thm-lebesgue-measure-of-a-box-of-every-kind, thm-finite-and-countable-subadditivity-of-measures]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies Countable Choice for the countable generating algebra and the dense simple-function approximations; no uncountable selection is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Assume the Axiom of Choice. Let $(S,\Sigma,\sigma)$ be any probability space and let $d\ge1$. Set $K=L^2(\sigma;\mathbb R^d)$ be the space of measurable vector fields modulo equality $\sigma$-almost everywhere with finite squared norm. With
$$\langle X,Y\rangle_K=\int_SX(s)\cdot Y(s)\,d\sigma(s),\qquad \|X\|_K^2=\int_S|X(s)|^2\,d\sigma(s),$$
$K$ is a real Hilbert space. If $\Sigma$ is countably generated, then $K$ is separable. In particular this applies to every Borel probability on $S\subseteq\mathbb R^k$ with its relative Borel sigma-algebra, for any $k\ge1$ independent of the output dimension $d$, and to every finite label space. No separability claim is made for an arbitrary probability sigma-algebra.

## Statement references

[[def-l-p-space-as-a-quotient-by-null-functions]]

[[thm-riesz-fischer-completeness-of-l-p]]

[[thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p]]

[[lem-countable-generators-yield-countable-set-algebras]]

[[lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra]]

[Ambrosio, Gigli, and Savaré, Chapter 4](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Chizat and Bach, Assumptions 2.1](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC, the probability space $(S,\Sigma,\sigma)$, and $d\ge1$.

[F1] Scalar $L^2(\sigma)$ is the quotient of square-integrable measurable functions by equality almost everywhere, and its norm is complete by the Riesz–Fischer theorem. [[def-l-p-space-as-a-quotient-by-null-functions]] [[thm-riesz-fischer-completeness-of-l-p]]

[F2] Finite-measure simple functions are dense in scalar $L^2$. [[thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p]]

[F3] AC implies Countable Choice. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]]

[F4] Finite-measure sets in a sigma-finite countably generated space can be approximated in symmetric-difference measure by a countable generating algebra. [[lem-countable-generators-yield-countable-set-algebras]] [[lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra]]

[F5] Pointwise Euclidean Cauchy–Schwarz gives $|X(s)\cdot Y(s)|\le |X(s)||Y(s)|$. The real inner-product axioms specify bilinearity, symmetry and positive definiteness. [[thm-cauchy-schwarz-in-an-inner-product-space]] [[def-real-and-complex-inner-product-space]]

## Proof


**Given:** AC and $(S,\Sigma,\sigma)$ as in the Statement.

1.1 First assume that $\Sigma$ is countably generated. By [F3] and [F4], its countable generating family generates a countable algebra $\mathcal A_0$ such that each $E\in\Sigma$ and each $\varepsilon>0$ admit $A\in\mathcal A_0$ with $\sigma(E\triangle A)<\varepsilon$. Relative Borel spaces $S\subseteq\mathbb R^k$ have countable generators obtained by intersecting $S$ with rational open boxes; every relative open set is a union of members of this countable base. Finite sigma-algebras are countably generated as well. These observations do not identify the label dimension $k$ with the output dimension $d$. [given, F3, F4]

2.1 The functions $\sum_{j=1}^m q_j\mathbf1_{A_j}$, with $q_j\in\mathbb Q$ and $A_j\in\mathcal A_0$, form a countable subset of scalar $L^2(\sigma)$. It is dense: by [F2], approximate any $f$ by a finite-measure simple function $\sum_j c_j\mathbf1_{E_j}$; approximate each $E_j$ in measure using [F4], then approximate each coefficient by a rational. The error satisfies $\|c\mathbf1_E-q\mathbf1_A\|_2\le |c-q|\sqrt{\sigma(E)}+|q|\sqrt{\sigma(E\triangle A)}$, so the finitely many choices make the total error arbitrarily small. [F2, F4, step 1.1, choose]

3.1 The vector space $K$ is the finite product of $d$ copies of scalar $L^2(\sigma)$. By pointwise [F5], $2|X\cdot Y|\le |X|^2+|Y|^2$, so its displayed pairing is integrable and independent of representatives. Linearity of the integral and the Euclidean dot product give bilinearity and symmetry. Its value on $(X,X)$ is $\int|X|^2\ge0$, and equality forces $|X|=0$ almost everywhere, precisely the zero class. Thus it is an inner product, with the stated norm. A Cauchy sequence for that norm is Cauchy in each of the finitely many scalar coordinates; [F1] gives coordinate limits, and the sum of their squared errors tends to zero. This proves completeness for every probability space, without a countable-generation hypothesis. When $\Sigma$ is countably generated, the finite product of the countable dense scalar sets from step 2.1 is countable and dense in $K$, proving separability. [F1, F5, step 2.1] ∎
