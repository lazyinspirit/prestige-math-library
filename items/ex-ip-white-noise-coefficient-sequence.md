---
id: ex-ip-white-noise-coefficient-sequence
kind: example
title: Gaussian coefficient sequence
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-isonormal-white-noise-experiment
  - thm-ip-white-noise-spectral-sequence-representation
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, Gaussian Sequence Space Model, equation (1.8), PDF pp. 21–22"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
    - title: "Ding and Mathé, Minimax rates for statistical inverse problems under general source conditions, §1, equations (1)–(3), PDF pp. 11–12"
      url: https://arxiv.org/pdf/1707.01706
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Let $H=\ell^2(\mathbb N)$ with standard basis $e_j$, take a single parameter with signal $\theta=(\theta_j)\in\ell^2(\mathbb N)$, and fix $\epsilon>0$. The coordinate statistic $Y_j=Y(e_j)=\theta_j+\epsilon Z(e_j)$ has independent coordinates with laws $N(\theta_j,\epsilon^2)$. Each finite truncation $(Y_1,\ldots,Y_N)$ therefore has the product of its $N$ scalar normal laws. The coordinate statistic takes values in $\mathbb R^{\mathbb N}$; this description does not identify the observation with an $\ell^2$-valued vector.

## Example references

[[thm-ip-white-noise-spectral-sequence-representation|White-noise spectral sequence representation]]

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, Gaussian Sequence Space Model, equation (1.8), PDF pp. 21–22](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

[Ding and Mathé, *Minimax rates for statistical inverse problems under general source conditions*, §1, equations (1)–(3), PDF pp. 11–12](https://arxiv.org/pdf/1707.01706)

## Facts & Assumptions

[F1] [[thm-ip-white-noise-spectral-sequence-representation]]: In a fixed complete finite or countable orthonormal basis, the observation coordinates are independent with laws $N(\langle Kx,u_j\rangle_H,\epsilon^2)$.

**Given:** The signal $\theta\in\ell^2(\mathbb N)$, the standard basis of $H$, and $\epsilon>0$ in the Example.

## Verification

1.1 Apply [F1] with $Kx=\theta$ and $u_j=e_j$ to obtain the independent coordinate laws $N(\theta_j,\epsilon^2)$ for every $j$. [given, F1]

2.1 Independence of every finite subfamily means that for each $N$ the joint law of $(Y_1,\ldots,Y_N)$ is the product of those $N$ marginal normal laws. The sample-space assertion is the coordinate-statistic map into $\mathbb R^{\mathbb N}$, and no step identifies it with an element of $\ell^2$. [given, F1, algebra] ∎
