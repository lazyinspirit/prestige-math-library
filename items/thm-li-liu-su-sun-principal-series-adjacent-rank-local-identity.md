---
id: thm-li-liu-su-sun-principal-series-adjacent-rank-local-identity
kind: theorem
title: "Li–Liu–Su–Sun Adjacent-Rank Local Identity for Principal Series"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - lem-archimedean-tate-zeta-integral-and-fourier-functional-equation
  - def-local-rankin-selberg-integral-for-gln-times-glm
  - thm-jacquet-archimedean-local-rankin-selberg-functional-equation-and-test-vectors
  - thm-jacquet-archimedean-local-equal-rank-rankin-selberg-functional-equation
dependency_level: 5
sources:
  scraped: []
  references:
    - title: "J.-S. Li, Dongwen Liu, Feng Su, and Binyong Sun, Rankin-Selberg Convolutions for GL(n)×GL(n) and GL(n)×GL(n−1) for Principal Series Representations, arXiv:2109.05272v2, §§1–5"
      url: "https://arxiv.org/pdf/2109.05272v2"
    - title: "Hervé Jacquet, Archimedean Rankin-Selberg Integrals, §8.1 and §11"
      url: "https://www.math.columbia.edu/~hj/PerfectRankinSelberg.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $K$ be a local field, $n\geq2$, and $n'=n$ or $n-1$. Let $\nu=(\nu_1,\ldots,\nu_n)$ and $\nu'=(\nu'_1,\ldots,\nu'_{n'})$ be tuples of characters of $K^\times$, and let $I_\nu,I_{\nu'}$ be the normalized principal series representations of $\mathrm{GL}_n(K)$ and $\mathrm{GL}_{n'}(K)$, induced from their lower Borel subgroups. Thus $I_\nu$ consists of smooth functions $f$ satisfying $f(\bar b g)=\nu(\bar b)\bar\rho_n(\bar b)f(g)$, where $\bar\rho_n=(|\cdot|_K^{(1-n)/2},|\cdot|_K^{(3-n)/2},\ldots,|\cdot|_K^{(n-1)/2})$, with right translation action; define $I_{\nu'}$ in the same way. Let $\operatorname{ex}(\chi)$ be the real number such that $|\chi(a)|=|a|_K^{\operatorname{ex}(\chi)}$. Define

$$\Omega_{\nu,\nu'}=\left\{s\in\mathbb C: \begin{array}{ll} \operatorname{ex}(\nu_i)+\operatorname{ex}(\nu'_j)+\operatorname{Re}(s)<1&\text{if }i+j\leq n,\\ \operatorname{ex}(\nu_i)+\operatorname{ex}(\nu'_j)+\operatorname{Re}(s)>0&\text{if }i+j>n \end{array} \text{ for all }1\leq i\leq n,\ 1\leq j\leq n' \right\}.$$

Let $W_f,W'_{f'}$ be the Whittaker functions of the two principal-series sections, with characters $\psi_N,\psi_N^{-1}$. In the equal-rank case, for $\Phi$ in the Schwartz–Bruhat space of locally constant compactly supported functions when $K$ is nonarchimedean and smooth rapidly decreasing functions when $K$ is archimedean, set

$$Z(s,f,f',\Phi)=\int_{N_n(K)\backslash\mathrm{GL}_n(K)}W_f(g)W'_{f'}(g)\Phi(e_ng)|\det g|_K^s\,dg.$$

In the adjacent-rank case, set

$$Z(s,f,f')=\int_{N_{n-1}(K)\backslash\mathrm{GL}_{n-1}(K)}W_f\!\left(\begin{pmatrix}g&0\\0&1\end{pmatrix}\right)W'_{f'}(g)|\det g|_K^{s-1/2}\,dg.$$

Use the local Haar measures specified by the self-dual additive measure for a fixed nontrivial continuous unitary additive character $\psi$. Define matrices $z_k$ recursively by $z_0$ empty, $z_1=[1]$, and, for $k\geq2$,

$$z_k= \begin{pmatrix}w_{k-1}&0\\0&1\end{pmatrix} \begin{pmatrix}z_{k-2}^{\iota}&0\\0&I_2\end{pmatrix} \begin{pmatrix}{}^t z_{k-1}w_{k-1}z_{k-1}&{}^t e_{k-1}\\0&1\end{pmatrix},$$

where $w_{k-1}$ is the anti-diagonal permutation matrix, $z^\iota={}^tz^{-1}$, and $e_{k-1}=(0,\ldots,0,1)$. The source's open-orbit integrals are

$$\Lambda(s,f,f',\Phi)=\int_{\mathrm{GL}_n(K)}f(z_ng)f'\!\left(\begin{pmatrix}z_{n-1}&0\\0&1\end{pmatrix}g\right)\Phi(e_ng)|\det g|_K^s\,dg\quad(n'=n),$$

and

$$\Lambda(s,f,f')=\int_{\mathrm{GL}_{n-1}(K)}f\!\left(z_n\begin{pmatrix}h&0\\0&1\end{pmatrix}\right)f'(z_{n-1}h)|\det h|_K^{s-1/2}\,dh\quad(n'=n-1).$$

For $\chi\in\widehat{K^\times}$, let $\gamma(s,\chi,\psi)$ be the Tate local gamma factor, and put

$$\operatorname{sgn}(\nu;\nu')=\prod_{\substack{j<i\\i+j\leq n}}(\nu_i\nu'_j)(-1),\qquad \Gamma_\psi(s;\nu;\nu')=\operatorname{sgn}(\nu;\nu')\prod_{\substack{i+j\leq n\\1\leq i\leq n,\ 1\leq j\leq n'}}\gamma(s,\nu_i\nu'_j,\psi),$$

with the empty sign product equal to $1$. Then for $s\in\Omega_{\nu,\nu'}$, $f\in I_\nu$, and $f'\in I_{\nu'}$, the following identities hold:

$$\Lambda(s,f,f',\Phi)=\Gamma_\psi(s;\nu;\nu')Z(s,f,f',\Phi)\quad(n'=n),$$

$$\Lambda(s,f,f')=\Gamma_\psi(s;\nu;\nu')Z(s,f,f')\quad(n'=n-1).$$

## Statement references

[J.-S. Li, Dongwen Liu, Feng Su, and Binyong Sun, *Rankin-Selberg Convolutions for GL(n)×GL(n) and GL(n)×GL(n−1) for Principal Series Representations*, arXiv:2109.05272v2, §§1–5](https://arxiv.org/pdf/2109.05272v2)

[Hervé Jacquet, *Archimedean Rankin-Selberg Integrals*, §8.1 and §11](https://www.math.columbia.edu/~hj/PerfectRankinSelberg.pdf)

## Analytic prerequisite and remaining proof

[[lem-archimedean-tate-zeta-integral-and-fourier-functional-equation]] supplies a separate local proof of the archimedean scalar Tate equation for every continuous quasicharacter, with the positive Fourier kernel used here. Its real sign-character multiplier is $+i$ for $\psi(x)=e^{2\pi ix}$; Jacquet's negative-kernel scalar convention has multiplier $-i$. The helper treats both signs explicitly. The nonarchimedean scalar input, continuous principal-series Whittaker extension, convergence domains and higher-rank open-orbit/Rankin integral comparison remain separate proof obligations. No full principal-series identity is proved by the scalar prerequisite.
