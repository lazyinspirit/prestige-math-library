---
id: def-polynomial-weyl-sum
kind: definition
title: "Polynomial Weyl Sum and Leading Coefficient"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-exponential-character-e
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "N. Assing, The Circle Method and Waring's Problem (2022 lecture notes)"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§5.1, Lemma 5.1 and the polynomial exponential-sum setup, printed pp. 28–31"
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§1, equation (1.1), printed p. 1576"
---

## Definition

Let $k\ge1$ and $N\ge1$ be integers, and let
$\boldsymbol\alpha=(\alpha_1,\ldots,\alpha_k)\in\mathbb R^k$. Define
$$f_k(\boldsymbol\alpha;N) :=\sum_{n=1}^{N}e\!\left(\sum_{j=1}^k\alpha_jn^j\right),$$
where $e(t)=\exp(2\pi i t)$ for real $t$. The coefficient $\alpha_k$ is the
leading coefficient of the phase; the phase has degree exactly $k$ when
$\alpha_k\ne0$, and degree at most $k-1$ when $\alpha_k=0$. The definition
applies to every real coefficient vector, including vectors whose highest
coefficients vanish.

## Definition references

[[def-exponential-character-e]]

[Assing, §5.1, polynomial exponential-sum setup](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

[Wooley, equation (1.1)](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)
