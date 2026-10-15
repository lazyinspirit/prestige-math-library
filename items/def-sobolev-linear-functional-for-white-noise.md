---
id: def-sobolev-linear-functional-for-white-noise
kind: definition
title: Smooth linear functionals on the white-noise topology
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-negative-sobolev-space-for-white-noise
justified_by:
  - lem-smooth-functional-extends-to-negative-sobolev-space
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, §2.3.1"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §7.3.4"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Definition

Fix the real orthonormal wavelet basis and level weights $a_l$ of [[def-negative-sobolev-space-for-white-noise]]. For $0\le s<S$, define the basis Sobolev space
$$H^s_2=\left\{g\in L^2([0,1]):\sum_{l,k}a_l^{2s}|\langle g,\psi_{lk}\rangle|^2<\infty\right\}.$$
For $g\in H^s_2$, $s>1/2$, and $f\in L^2([0,1])$, define $L_g(f)=\langle f,g\rangle_{L^2}$. For $x=(x_{lk})\in H(\delta)$, the intended extension is the coefficient pairing $L_g(x)=\sum_{l,k}x_{lk}\langle g,\psi_{lk}\rangle$; [[lem-smooth-functional-extends-to-negative-sobolev-space]] proves that this series is absolutely convergent and defines a continuous linear functional on $H(\delta)$ for every $\delta>0$.

In the white-noise experiment $X^{(n)}=f_0+n^{-1/2}W$, fix $\delta>1/2$ so that the observation is $H(\delta)$-valued; $L_g(X^{(n)})$ means this continuous pairing with the $H(\delta)$-valued observation. It does not assert that $X^{(n)}$ is an $L^2$ function. The representer is nonzero when $g\ne0$; the corresponding white-noise variance is $\|g\|_2^2$.
