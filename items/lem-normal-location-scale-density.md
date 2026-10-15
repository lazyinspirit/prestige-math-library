---
id: lem-normal-location-scale-density
kind: lemma
title: "A positive-variance normal law has its location-scale density"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
justified_by: []
proof_strategy: direct
axiom_use: "AC is used for the library standard-normal law and implies Countable Choice, which is the hypothesis of the cited C^1 change-of-variables theorem. No further choice is used."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., §5.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 5, §5.4: normal sampling and population distributions for group effects."
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 16, §16.3"
      url: "https://www.bayesrulesbook.com/chapter-16.html"
      locator: "Chapter 16, §16.3: the normal within-group and between-group kernels."
---

## Statement

Assume AC. For $m\in\mathbb R$ and $\sigma>0$, the normal law $N(m,\sigma^2)$
of [[def-standard-normal-and-normal-laws]] has Lebesgue density
$$g_{m,\sigma}(y)=\frac1\sigma\frac{e^{-((y-m)/\sigma)^2/2}}{\sqrt{2\pi}}=\frac1{\sqrt{2\pi\sigma^2}}e^{-(y-m)^2/(2\sigma^2)}.$$

## Facts & Assumptions

**Given:** AC, the standard-normal probability law and its specified density, and $m\in\mathbb R$, $\sigma>0$.

[F1] $N(m,\sigma^2)$ is the pushforward of $N(0,1)$ by $x\mapsto m+\sigma x$, and $N(0,1)$ has density $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$. [[def-standard-normal-and-normal-laws]], [[lem-normal-density-has-total-mass-one]]

[F2] AC implies Countable Choice. [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]

[F3] Under Countable Choice, a $C^1$ diffeomorphism transforms nonnegative Lebesgue integrals by its absolute Jacobian. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[A1] AC holds; it is used in [F1] and implies the Countable Choice hypothesis of [F3]. [[def-axiom-of-choice]]

## Proof

**Proof technique:** apply the one-dimensional change-of-variables formula to the affine normal-law map.

**Given:** The hypotheses in the Statement.

1.1 By [A1] and [F2], Countable Choice holds, so the change-of-variables theorem [F3] applies. For $\sigma>0$, the map $T(x)=m+\sigma x$ is a $C^1$ diffeomorphism of $\mathbb R$ with derivative $\sigma$. [A1, F2, F3, given]

2.1 For any Borel set $B\subseteq\mathbb R$, apply [F3] to the nonnegative Borel function $y\mapsto\mathbf1_B(y)\phi((y-m)/\sigma)/\sigma$. The change of variables gives $\int_B\frac1\sigma\phi((y-m)/\sigma)\,dy=\int_{\mathbb R}\mathbf1_B(m+\sigma x)\phi(x)\,dx=N(m,\sigma^2)(B)$, where the last equality is the pushforward identity in [F1]. Therefore the displayed function is a density on every Borel set, proving the statement. [F1, F3, step 1.1] ∎
