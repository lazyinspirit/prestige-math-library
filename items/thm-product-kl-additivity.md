---
id: thm-product-kl-additivity
kind: theorem
title: "Additivity of KL divergence for finite product laws"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-finite-sigma-finite-and-semifinite-measures
  - def-kullback-leibler-divergence
  - def-measure-with-density
  - def-probability-measure
  - def-product-measure-on-sigma-finite-spaces
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-radon-nikodym-derivative
  - thm-natural-logarithm-laws
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4, Proposition 4.6"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 8, §8.2.2, equation (8.2.3)"
      url: "https://stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement

Assume AC. Let $n\in\mathbb N$ with $n\ge1$. For each $i<n$, let
$(X_i,\mathcal A_i)$ be a measurable space and let $P_i,Q_i$ be probability
measures on it. On the finite product measurable space set
$$P=\bigotimes_{i<n}P_i,\qquad Q=\bigotimes_{i<n}Q_i.$$
With the KL convention of [[def-kullback-leibler-divergence]],
$$D(P\|Q)=\sum_{i<n}D(P_i\|Q_i),$$
where a sum with an infinite term is $+\infty$.

## Facts & Assumptions

**Given:** AC, a natural number $n\ge1$, measurable spaces $(X_i,\mathcal A_i)$ for $i<n$, probability laws $P_i,Q_i$, and their finite product measures $P,Q$.

[A1] [[def-axiom-of-choice]]: AC is assumed by the Radon–Nikodym suppliers in the KL definition.

[F1] [[def-kullback-leibler-divergence]] and [[def-radon-nikodym-derivative]]: if $P_i\ll Q_i$, its density is an almost-everywhere class $r_i$ satisfying $P_i(A)=\int_A r_i\,dQ_i$, and $D(P_i\|Q_i)=\int\log r_i\,dP_i$; the negative part is finite.

[F2] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]] and [[def-product-measure-on-sigma-finite-spaces]]: finite products use the iterated product sigma-algebra and product measures whose rectangle values are the products of factor measures.

[F3] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] and [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]: product measures have the rectangle formula and are determined by it on the generating rectangles.

[F4] [[def-measure-with-density]] and [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]: a nonnegative measurable density $r$ defines the measure $r\,dQ$ by $(r\,dQ)(E)=\int_E r\,dQ$.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: nonnegative product integrals factor by Tonelli, and integrable product functions may be integrated sectionwise by Fubini.

[F6] [[thm-natural-logarithm-laws]]: for positive $x_1,\ldots,x_n$, $\log(\prod_i x_i)=\sum_i\log x_i$.

## Proof

1.1 If $P_i\not\ll Q_i$ for some $i<n$, choose $A_i\in\mathcal A_i$ with $Q_i(A_i)=0<P_i(A_i)$. Let $E=\prod_{j<n}E_j$, where $E_i=A_i$ and $E_j=X_j$ for $j\ne i$. The product rectangle has $Q(E)=0$ and $P(E)=P_i(A_i)>0$ by [F2, F3]. Hence $P\not\ll Q$, so the left side is $+\infty$; the corresponding term on the right is also $+\infty$ and the equality holds. [A1, F2, F3, given]

1.2 Now suppose $P_i\ll Q_i$ for every $i<n$, and choose nonnegative representatives $r_i=dP_i/dQ_i$. Define $r(x_0,\ldots,x_{n-1})=\prod_{i<n}r_i(x_i)$. Each coordinate function $x\mapsto r_i(x_i)$ is measurable by the finite product sigma-algebra definition: its level-set preimages are measurable rectangles. Hence the vector of coordinate values is measurable, since rectangles generate the Borel sigma-algebra of $\mathbb R^n$; composing with the continuous multiplication map gives measurable $r$. Repeated Tonelli and the rectangle formulas give $\int_E r\,dQ=\prod_{i<n}\int_{A_i}r_i\,dQ_i=\prod_{i<n}P_i(A_i)=P(E)$ for every measurable rectangle $E=\prod_{i<n}A_i$; applying the same calculation to the full space gives $\int r\,dQ=1$. [A1, F1, F2, F3, F5, given]

2.1 The measure $r\,dQ$ is a probability measure by [F4] and step 1.2. The product rectangles form a generating pi-system and the finite product spaces are sigma-finite, so [F3] and the rectangle identity in step 1.2 imply $r\,dQ=P$ on the entire product sigma-algebra. Therefore $r=dP/dQ$ as a Radon–Nikodym class. [A1, F3, F4, step 1.2]

3.1 Each $r_i$ is finite $Q_i$-almost everywhere because $\int r_i\,dQ_i=1$, and $P_i(\{r_i=0\})=\int_{\{r_i=0\}}r_i\,dQ_i=0$; thus $0<r_i<\infty$ $P_i$-almost everywhere. Therefore [F6] gives $\log r=\sum_{i<n}\log r_i(x_i)$ $P$-almost everywhere. Each $\log r_i$ has integrable negative part by [F1], and the negative part of their finite sum is bounded by the sum of those negative parts. Split each summand into positive and negative parts: Tonelli factors each nonnegative part through the product law, and Fubini applies to the negative parts, which are integrable. Hence, allowing $+\infty$ for positive parts, $\int\log r\,dP=\sum_{i<n}\int\log r_i\,dP_i=\sum_{i<n}D(P_i\|Q_i).$ By [F1] and step 2.1 the left side is $D(P\|Q)$, proving the claim. [A1, F1, F5, F6, step 2.1, algebra] ∎
