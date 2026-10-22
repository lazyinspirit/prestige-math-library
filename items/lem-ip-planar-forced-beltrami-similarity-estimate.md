---
id: lem-ip-planar-forced-beltrami-similarity-estimate
kind: lemma
title: Quantitative forced similarity estimate for real-linear Beltrami equations
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ip-planar-cauchy-beurling-and-near-two-inversion
  - lem-ip-planar-measurable-beltrami-cgo-solutions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Barceló, Faraco and Ruiz, Stability of Calderón inverse conductivity problem in the plane"
      url: "https://www.mis.mpg.de/preprints/2006/preprint2006_5.pdf"
      locator: "Complete proof of Theorem 2.1, preprint printed pp. 8–10 (PDF pp. 10–12)."
dependency_level: 3
---

## Statement

Assume the Axiom of Choice and Countable Choice. Fix $0\le\kappa<1$ and $2<r\le p_\kappa$. Let $\nu,\alpha,E$ be measurable and supported in $D_1$, with $\|\nu\|_\infty\le\kappa$, $\|\alpha\|_\infty\le B$ and $E\in L^r$. If $F\in W^{1,r}(\mathbb C)$ is continuous, tends to zero at infinity, and satisfies
$$\bar\partial F=\nu\overline{\partial F}+\alpha\overline F+E,$$
then
$$\|F\|_{W^{1,r}(\mathbb C)}+\|F\|_\infty\le C_{\kappa,r}e^{C_{\kappa,r}(1+B)}\|E\|_r.$$
The constants do not depend on the measurable coefficients or on the particular solution.

## Statement references

[[lem-ip-planar-cauchy-beurling-and-near-two-inversion|The near-two inverse and Cauchy bounds.]]

[[lem-ip-planar-measurable-beltrami-cgo-solutions|The local Stoilow and similarity factorization proof.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice and the functions and parameters in the statement.

[F1] The complex-linear equation $\bar\partial a-\eta\partial a=h$ with $|\eta|\le\kappa$ and both data supported in $D_1$ has the solution $a=\mathcal C(I-\eta\mathcal B)^{-1}h$, with $\|a\|_{W^{1,r}}+\|a\|_\infty\le C_{\kappa,r}\|h\|_r$ and $a\to0$ at infinity. ([[lem-ip-planar-cauchy-beurling-and-near-two-inversion]])

[F2] A continuous locally $H^1$ solution of $\bar\partial G=\eta\partial G$, with $|\eta|\le\kappa$ and compact support of $\eta$, factors through the principal quasiconformal coordinate as an entire holomorphic function; hence a bounded solution tending to zero is zero. This factorization is proved locally in the CGO construction. ([[lem-ip-planar-measurable-beltrami-cgo-solutions]])

[A1] The Axiom of Choice and Countable Choice are used at [F1]–[F2]. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Define $a=\nu\overline{\partial F}/\partial F$ where $\partial F\ne0$ and $a=0$ otherwise, and define $b=\alpha\overline F/F$ where $F\ne0$ and $b=0$ otherwise. Then $a,b$ are measurable, supported in $D_1$, satisfy $|a|\le\kappa$, $|b|\le B$, and the equation becomes $\bar\partial F=a\partial F+bF+E$. The identities also hold on the zero denominator sets, because the corresponding original terms are zero there. Let $s=\mathcal C(I-a\mathcal B)^{-1}b$. By [F1], $\bar\partial s-a\partial s=b$, $s\to0$ at infinity, and $\|s\|_{W^{1,r}}+\|s\|_\infty\le C B$. [A1, F1, given, algebra]

2.1 Put $G=e^{-s}F$. The weak product and composition rules follow by local smooth approximation, since both factors are continuous and bounded on compact sets and their derivatives are in $L^r$. The equation in step 1.1 gives $\bar\partial G-a\partial G=e^{-s}E$. The particular solution $G_0=\mathcal C(I-a\mathcal B)^{-1}(e^{-s}E)$ obeys $\|G_0\|_{W^{1,r}}+\|G_0\|_\infty\le C e^{CB}\|E\|_r$, by [F1]. Both $G$ and $G_0$ are continuous and tend to zero at infinity; their difference is bounded and solves the homogeneous equation. By [F2], $G=G_0$. Finally $F=e^sG_0$, so the product rule gives $\|F\|_{W^{1,r}}+\|F\|_\infty\le C e^{CB}(1+\|\nabla s\|_r)(\|G_0\|_{W^{1,r}}+\|G_0\|_\infty)\le C e^{C(1+B)}\|E\|_r$. This proves the estimate. [F1, F2, step 1.1, algebra] ∎
