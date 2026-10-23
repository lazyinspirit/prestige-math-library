---
id: lem-fd-2d-fourier-log-velocity-bound
kind: lemma
title: "Two-dimensional Fourier logarithmic velocity bound"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-periodic-fourier-sobolev-spaces
  - def-countable-choice
dependency_roles:
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sergei Kuksin and Armen Shirikyan, Mathematics of Two-Dimensional Turbulence, Chapter 2, §2.1.6, Theorem 2.1.18"
      url: "https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf"
      locator: "PDF pp. 45–51; the local proof here instead establishes the stated Fourier lattice estimate directly."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $Q_2=\mathbb R^2/(2\pi\mathbb Z)^2$ have normalized measure $d\mu=(2\pi)^{-2}dx$, Fourier coefficients $\widehat f(k)=\int_{Q_2}f(x)e^{-ik\cdot x}\,d\mu(x)$, weights $w_k=(1+|k|^2)^{1/2}$, and Sobolev norms $\|f\|_{H^r}^2=\sum_{k\in\mathbb Z^2}w_k^{2r}|\widehat f(k)|^2$, componentwise for vector fields. For an integer $m\ge4$ and smooth real divergence-free $u:Q_2\to\mathbb R^2$, define $\omega=\partial_1u_2-\partial_2u_1$, $Y=\|u\|_{H^m}$, $B=\|\omega\|_{H^1}$, and $S=\sum_{k\ne0}|k|\,|\widehat u(k)|$. Then $S<\infty$ and there is a constant $C_m$ depending only on $m$ such that
$$S\le C_m\left(1+B\sqrt{\log(e+Y)}\right).$$

## Statement references

[Kuksin and Shirikyan, *Mathematics of Two-Dimensional Turbulence*, Chapter 2, §2.1.6, Theorem 2.1.18](https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the normalized Fourier and Sobolev conventions in the Statement, and the smooth divergence-free field $u$.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] [[def-fd-periodic-fourier-sobolev-spaces]]: the normalized coefficients and weights in the Statement define the Fourier Sobolev norms componentwise.

## Proof

1.1 In each periodic coefficient integral, one-coordinate integration by parts has boundary term $f(x)e^{-ik_jx_j}|_{0}^{2\pi}=0$ because both factors are periodic, so $\widehat{\partial_j f}(k)=ik_j\widehat f(k)$. Thus $k\cdot\widehat u(k)=0$ for $k\ne0$ and $\widehat\omega(k)=i(k_1\widehat u_2(k)-k_2\widehat u_1(k))$. Since a vector in $\mathbb C^2$ orthogonal to the nonzero real vector $k$ is a complex multiple of $(-k_2,k_1)$, these identities imply $|\widehat\omega(k)|=|k|\,|\widehat u(k)|$. [given, A1, F1, algebra]

2.1 For $K\ge2$, Cauchy–Schwarz and the definition of $B$ give
$$\sum_{0<|k|\le K}|\widehat\omega(k)|\le B\left(\sum_{0<|k|\le K}w_k^{-2}\right)^{1/2}.$$
For each integer $j\ge1$, the unit squares centered at lattice points with $j\le|k|<j+1$ lie in an annulus of radii $\max(0,j-1)$ and $j+2$; comparing areas shows that this shell contains at most $Cj$ lattice points. Hence $\sum_{0<|k|\le K}w_k^{-2}\le C\sum_{1\le j\le K+1}j^{-1}\le C\log(e+K)$, and the low-frequency sum is at most $CB\sqrt{\log(e+K)}$. [given, F1, step 1.1, algebra]

3.1 For the high frequencies, Cauchy–Schwarz gives
$$\sum_{|k|>K}|k|\,|\widehat u(k)|\le Y\left(\sum_{|k|>K}|k|^2w_k^{-2m}\right)^{1/2}.$$
The same shell count bounds the series inside the square root by $C\sum_{j>K-1}j^{3-2m}\le C_mK^{4-2m}$, since $m\ge4$. Thus the high-frequency sum is at most $C_mYK^{2-m}$. The series is finite for every such $u$ by the same estimate and its finite low-frequency part. [given, F1, step 2.1, algebra]

4.1 Choose $K=2+(e+Y)^{1/(m-2)}$. Then $YK^{2-m}\le Y/(e+Y)\le1$, and $\log(e+K)\le C_m\log(e+Y)$ because $\log(e+Y)\ge1$ and $K\le 2+(e+Y)$. Combining the low- and high-frequency bounds from steps 2.1 and 3.1 proves the asserted estimate. [given, step 2.1, step 3.1, algebra] ∎