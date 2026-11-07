---
id: thm-liu-su-sun-principal-series-rankin-selberg-local-functional-equation
kind: theorem
title: "Liu–Su–Sun Local Rankin–Selberg Identity for GL(n) Principal Series"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - lem-archimedean-tate-zeta-integral-and-fourier-functional-equation
  - lem-nonarchimedean-tate-zeta-integral-and-fourier-functional-equation
  - def-local-rankin-selberg-integral-for-gln-times-glm
dependency_level: 4
sources:
  scraped: []
  references:
    - title: "Dongwen Liu, Feng Su, and Binyong Sun, Rankin-Selberg Integrals for Principal Series Representations of GL(n), arXiv:2109.05271v1, §§1–4"
      url: "https://arxiv.org/pdf/2109.05271v1"
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §2"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $K$ be a local field, $n\geq2$, $G=\mathrm{GL}_n(K)$, $B=AN$ the upper Borel subgroup, and $\bar B=A\bar N$ the lower Borel subgroup. Fix a nontrivial unitary additive character $\psi:K\to\mathbb C^\times$, and put $\psi_N(u)=\psi(\sum_{i=1}^{n-1}u_{i,i+1})$ for $u=(u_{ij})\in N$. Let $\sigma_1,\ldots,\sigma_n$ be characters of $K^\times$, write $|\sigma_i|=|\cdot|_K^{\nu_i}$ with $\nu_i\in\mathbb R$, and define $\sigma(\bar b)=\prod_{i=1}^n\sigma_i(\bar b_{ii})$ for $\bar b\in\bar B$, extended trivially to $\bar N$. Let $I(\sigma)$ be the normalized principal series of $G$, whose smooth sections satisfy

$$f(\bar b g)=\sigma(\bar b)\bar\rho(\bar b)f(g),\qquad \bar\rho=(|\cdot|_K^{(1-n)/2},|\cdot|_K^{(3-n)/2},\ldots,|\cdot|_K^{(n-1)/2}).$$

Assume

$$\max\{\nu_1,\nu_2\}<\nu_3<\cdots<\nu_n,\qquad \nu_1<\nu_2+1,$$

and set $\Omega_\sigma=\{s\in\mathbb C:-\nu_2<\operatorname{Re}(s)<1-\nu_1\}$. Let $\lambda_\sigma(f)=\int_{N}f(u)\psi_N(u)^{-1}\,du$ for sections whose restriction to $N$ is Schwartz–Bruhat, and use its continuous extension to $I(\sigma)$. Put $[a]=\operatorname{diag}(a,1,\ldots,1)$, $d^\times a=|a|_K^{-1}da$, and

$$Z_s(f)=\int_{K^\times}\lambda_\sigma([a]\cdot f)|a|_K^{s-(n-1)/2}\,d^\times a,$$

where $[a]\cdot f$ is right translation. Define $R\subset G$ to consist of matrices $g=\begin{pmatrix}a&u\\0&h\end{pmatrix}$ with $a\in K^\times$, $h\in N_{n-1}(K)$, and $u=(0,u_2,\ldots,u_n)$. Put $N'=R\cap N$, $A'=\{[a]:a\in K^\times\}$, and $w_1=\operatorname{diag}(\begin{pmatrix}1&1\\0&1\end{pmatrix},I_{n-2})$. For $g=u'[a]\in N'A'$, set $\psi_s(g)=\psi_N(u')|a|_K^{(n-1)/2-s}$. Give $R$ the product-coordinate Haar measure $d^\times g_{11}\prod_{1\leq i<j\leq n,\ j\ne2}dg_{ij}$, where the additive coordinate measures are self-dual for $\psi$, and define

$$\Lambda_s(f)=\int_R f(w_1g)\psi_s(g)^{-1}\,dg.$$

For a character $\chi$ of $K^\times$, let $L(s,\chi)$ be its Tate local factor. For a Schwartz–Bruhat function $\phi$, set $Z(s,\chi,\phi)=\int_{K^\times}\phi(a)\chi(a)|a|_K^s\,d^\times a$ and $\widehat\phi(x)=\int_K\phi(y)\psi(xy)\,dy$, with self-dual additive measure. Define $\epsilon(s,\chi,\psi)$ by Tate's local functional equation

$$\frac{Z(1-s,\chi^{-1},\widehat\phi)}{L(1-s,\chi^{-1})} =\epsilon(s,\chi,\psi)\frac{Z(s,\chi,\phi)}{L(s,\chi)},$$

and put $\gamma(s,\chi,\psi)=\epsilon(s,\chi,\psi)L(1-s,\chi^{-1})/L(s,\chi)$. Then for every $f\in I(\sigma)$ and $s\in\Omega_\sigma$,

$$\Lambda_s(f)=\gamma(s,\sigma_1,\psi)Z_s(f).$$

## Statement references

[Dongwen Liu, Feng Su, and Binyong Sun, *Rankin-Selberg Integrals for Principal Series Representations of GL(n)*, arXiv:2109.05271v1, §§1–4](https://arxiv.org/pdf/2109.05271v1)

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §2](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

## Analytic prerequisite and remaining proof

[[lem-archimedean-tate-zeta-integral-and-fourier-functional-equation]] supplies a separate local proof of the archimedean scalar Tate equation for every continuous quasicharacter, with the positive Fourier kernel used here. Its real sign-character multiplier is $+i$ for $\psi(x)=e^{2\pi ix}$; Jacquet's negative-kernel scalar convention has multiplier $-i$. The helper treats both signs explicitly. The nonarchimedean scalar equation is now proved for every Schwartz–Bruhat function and continuous quasicharacter by [[lem-nonarchimedean-tate-zeta-integral-and-fourier-functional-equation]], with the same positive Fourier kernel and invariance under constant multiplicative-measure rescaling. The continuous principal-series Whittaker extension, convergence domains and higher-rank open-orbit/Rankin integral comparison remain separate proof obligations. Neither scalar theorem alone proves the full principal-series identity.
