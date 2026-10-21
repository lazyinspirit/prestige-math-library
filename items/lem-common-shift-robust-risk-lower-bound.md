---
id: lem-common-shift-robust-risk-lower-bound
kind: lemma
title: Common shifts force binary robust risk at least one half
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk
dependency_level: 1
deps:
  - def-adversarial-threat-set-and-robust-risk
  - def-independent-random-elements
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
justified_by: []
axiom_use: "Choice-free: the argument uses one explicit label-dependent perturbation, finite label averaging, and monotonicity of the nonnegative integral."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Adversarially Robust Generalization Requires More Data, arXiv:1804.11285v2, Appendix A.2, proof of Theorem 11, PDF pp. 27–30"
      url: "https://arxiv.org/pdf/1804.11285v2"
    - title: "Muni Sreenivas Pydi, Adversarial Robustness in Machine Learning: An Optimal Transport Perspective, Chapter 2 §§2.2–2.3"
      url: "https://asset.library.wisc.edu/1711.dl/DSDFVG7WD5MMJ8R/R/file-7fb2d.pdf"
---

## Statement

Let $d\ge1$ be an integer, let $\epsilon\ge0$, let $\mu\in\mathbb R^d$ satisfy $\|\mu\|_\infty\le\epsilon$, and let $Y$ be uniform on $\{-1,+1\}$ and independent of an arbitrary Borel random vector $Z\in\mathbb R^d$. Set $X=Y\mu+Z$, let $P$ be the joint law of $(X,Y)$, and let $f:\mathbb R^d\to\{-1,+1\}$ be any Borel classifier. For the closed $\ell_\infty$ threat $\Delta_\epsilon(x)=\{x+\delta:\|\delta\|_\infty\le\epsilon\}$ and robust zero-one risk defined by outer expectation, $R^{\mathrm{rob}}_{P,\Delta_\epsilon}(f)\ge1/2$.

## Statement references

[Schmidt et al., Appendix A.2, proof of Theorem 11, PDF pp. 27–30](https://arxiv.org/pdf/1804.11285v2).

[Pydi, Chapter 2 §§2.2–2.3, outer-expectation convention and robust risk](https://asset.library.wisc.edu/1711.dl/DSDFVG7WD5MMJ8R/R/file-7fb2d.pdf).

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[A1] The center satisfies $\|\mu\|_\infty\le\epsilon$.

[F1] Robust risk is the infimum of expectations of nonnegative measurable majorants of the pointwise robust loss; the $\ell_\infty$ threat includes every $x+\delta$ with $\|\delta\|_\infty\le\epsilon$. [[def-adversarial-threat-set-and-robust-risk]].

[F2] If nonnegative measurable functions $g,h$ satisfy $h\le g$, then $\mathbb E[h]\le\mathbb E[g]$. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]].

[F3] Independence of $Y$ and $Z$ means their generated sigma-algebras are independent. [[def-independent-random-elements]].

## Proof

1.1 Since $f$ is Borel, the event $A:=\{f(Z)=+1\}$ belongs to $\sigma(Z)$, which is independent of $\sigma(Y)$ by [F3]. Thus $\mathbb P(f(Z)\ne Y)=\mathbb P(A)\mathbb P(Y=-1)+\mathbb P(A^c)\mathbb P(Y=+1)=\frac12\mathbb P(A)+\frac12\mathbb P(A^c)=1/2$. [given, F3, algebra]

1.2 For each outcome, the perturbation $\delta=-Y\mu$ satisfies $\|\delta\|_\infty\le\epsilon$ by [A1], and $X+\delta=Z$. Hence the pointwise robust loss is at least $\mathbf1\{f(Z)\ne Y\}$. This indicator is measurable because $f$ and the coordinate variables are measurable. [given, A1, F1]

2.1 Every measurable nonnegative majorant $g$ in the definition of robust risk therefore satisfies $g(X,Y)\ge\mathbf1\{f(Z)\ne Y\}$. By [F2] and step 1.1, its expectation is at least $1/2$. Taking the infimum over all such majorants gives $R^{\mathrm{rob}}_{P,\Delta_\epsilon}(f)\ge1/2$. [step 1.1, step 1.2, F1, F2] ∎

## References

[[def-adversarial-threat-set-and-robust-risk]]: the robust loss is bounded below pointwise by the loss at any one admissible perturbation, and risk uses outer expectation.

[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: transfers a pointwise measurable lower bound to every measurable majorant's expectation.
