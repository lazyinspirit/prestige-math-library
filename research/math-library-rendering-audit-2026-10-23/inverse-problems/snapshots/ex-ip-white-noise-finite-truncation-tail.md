---
id: ex-ip-white-noise-finite-truncation-tail
kind: example
title: Finite truncation with its omitted white-noise tail
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
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, Gaussian Sequence Space Model, equation (1.8), PDF pp. 21–22"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, §1.2, equations (7)–(8), printed pp. 2005–2006"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
---

## Example

Let $(u_j)$ be a fixed complete orthonormal basis, $h=Kx$ a mean signal, $g\in H$ a test vector, and $N$ a positive integer. Define $P_Ng=\sum_{j\le N}\langle g,u_j\rangle_Hu_j$ and $r_N=g-P_Ng$. Then

$$Y_x(g)=\sum_{j\le N}\langle g,u_j\rangle_HY_x(u_j)+\langle h,r_N\rangle_H+\epsilon Z(r_N)$$

in $L^2(\mathbb P)$. The omitted tail has mean $\langle h,r_N\rangle_H$, variance $\epsilon^2\|r_N\|_H^2$, and is independent of the first $N$ coordinate observations. If $r_N=0$, the omitted tail vanishes.

## Example references

[[thm-ip-white-noise-spectral-sequence-representation|White-noise spectral sequence representation]]

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, Gaussian Sequence Space Model, equation (1.8), PDF pp. 21–22](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

[Castillo and Nickl, *Nonparametric Bernstein–von Mises theorems in Gaussian white noise*, §1.2, equations (7)–(8), printed pp. 2005–2006](https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf)

## Facts & Assumptions

[F1] [[def-ip-isonormal-white-noise-experiment]]: The process is linear into $L^2(\mathbb P)$, centered, has covariance $\mathbb E[Z(g)Z(h)]=\langle g,h\rangle_H$, and has independent standard-normal coordinates on every finite orthonormal tuple.

[F2] [[thm-ip-white-noise-spectral-sequence-representation]]: For every $g\in H$, the finite coordinate sums converge to $Y_x(g)$ in $L^2(\mathbb P)$.

**Given:** The complete orthonormal basis, the test vector $g$, the mean signal $h=Kx$, the cutoff $N$, and the isonormal experiment in the Example.

## Verification

1.1 Since $g=P_Ng+r_N$ and the process is linear by [F1], $Y_x(g)=Y_x(P_Ng)+Y_x(r_N)$. Applying [F2] to $P_Ng$, whose later finite projections equal $P_Ng$, gives $Y_x(P_Ng)=\sum_{j\le N}\langle g,u_j\rangle_HY_x(u_j)$; the definition gives $Y_x(r_N)=\langle h,r_N\rangle_H+\epsilon Z(r_N)$. This proves the displayed decomposition. [given, F1, F2, algebra]

2.1 The residual $r_N$ is orthogonal to $u_1,\ldots,u_N$. If $r_N\ne0$, adjoining $r_N/\|r_N\|_H$ to these vectors gives a finite orthonormal tuple, so [F1] makes $Z(r_N/\|r_N\|_H)$ independent of the first $N$ coordinate noises; linearity gives $Z(r_N)=\|r_N\|_H Z(r_N/\|r_N\|_H)$ as an equality of its almost-sure equivalence classes. Since $\epsilon>0$, this noise and the tail observation are invertible affine functions of one another, so the tail observation is independent of the first $N$ coordinates. The covariance identity gives its variance $\epsilon^2\|r_N\|_H^2$ and its mean is $\langle h,r_N\rangle_H$. If $r_N=0$, both are zero. [given, F1, algebra] ∎
