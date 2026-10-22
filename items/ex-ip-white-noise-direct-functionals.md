---
id: ex-ip-white-noise-direct-functionals
kind: example
title: Two direct white-noise functionals
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-isonormal-white-noise-experiment
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Kretschmann and Werner, Maximum a posteriori testing in statistical inverse problems, §1.1, PDF pp. 1–2"
      url: https://arxiv.org/pdf/2402.00686
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §1.2.2, equations (1.6)–(1.8), PDF pp. 21–22"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Example

Take the single-parameter experiment with $H=\mathbb R^2$, its standard inner product, parameter set $\{x\}$, mean signal $Kx=(m_1,m_2)$, and noise level $\epsilon>0$. Let $e_1=(1,0)$, $e_2=(0,1)$, and $g=ae_1+be_2$ for $a,b\in\mathbb R$. The direct observations $Y_x(e_1)$ and $Y_x(e_2)$ are independent with laws $N(m_1,\epsilon^2)$ and $N(m_2,\epsilon^2)$. In $L^2(\mathbb P)$, $Y_x(g)=aY_x(e_1)+bY_x(e_2)$, with mean $am_1+bm_2$ and variance $\epsilon^2(a^2+b^2)$; when $a=b=0$, $Y_x(g)$ is the constant zero.

## Example references

[[def-ip-isonormal-white-noise-experiment|Isonormal white-noise inverse experiment]]

[Kretschmann and Werner, *Maximum a posteriori testing in statistical inverse problems*, §1.1, PDF pp. 1–2](https://arxiv.org/pdf/2402.00686)

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §1.2.2, equations (1.6)–(1.8), PDF pp. 21–22](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

[F1] [[def-ip-isonormal-white-noise-experiment]]: The process is linear into $L^2(\mathbb P)$, centered, has covariance $\mathbb E[Z(g)Z(h)]=\langle g,h\rangle_H$, and has independent standard-normal coordinates on finite orthonormal tuples.

**Given:** The two-dimensional experiment, $e_1,e_2$, $m_1,m_2$, $a,b$, and $\epsilon>0$ in the Example.

## Verification

1.1 Since $e_1,e_2$ are orthonormal, [F1] gives independent standard-normal noises $Z(e_1),Z(e_2)$. Each observation is an invertible affine function of its noise coordinate because $\epsilon>0$, so it has the same generated sigma-algebra; the affine-image definition of $N$ gives the two asserted laws and preserves independence. [given, F1]

2.1 Linearity of the process gives $Y_x(g)=aY_x(e_1)+bY_x(e_2)$ as an equality of its almost-sure equivalence classes. The mean is $am_1+bm_2$, and the covariance identity in [F1] gives variance $\epsilon^2\|ae_1+be_2\|^2=\epsilon^2(a^2+b^2)$. If $a=b=0$, then $g=0$ and linearity gives $Y_x(0)=0$. [given, F1, algebra] ∎
