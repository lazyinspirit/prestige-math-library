---
id: def-local-rankin-selberg-integral-for-gln-times-glm
kind: definition
title: "Local Rankin–Selberg Integrals for GL(r) × GL(t), 1 ≤ t ≤ r"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-gln-generic-whittaker-model
dependency_level: 3
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §2"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
    - title: "Hervé Jacquet, Archimedean Rankin-Selberg Integrals, §§3–5 and §11"
      url: "https://www.math.columbia.edu/~hj/PerfectRankinSelberg.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Definition

Let $K$ be a place completion of a number field, $r\geq t\geq1$, and $\psi:K\to\mathbb C^\times$ a fixed nontrivial continuous unitary additive character. Let $\pi$ and $\pi'$ be locally generic representations of $\mathrm{GL}_r(K)$ and $\mathrm{GL}_t(K)$, with Whittaker models for $\psi$ and $\psi^{-1}$. Fix a quotient Haar measure $dg$ on $N_t(K)\backslash\mathrm{GL}_t(K)$, meaning a translation-invariant regular measure on this locally compact quotient. Use the normalized local absolute value, with $|\varpi|_K=q_K^{-1}$ for a nonarchimedean uniformizer $\varpi$, with $|x|_{\mathbb R}=|x|$ and $|z|_{\mathbb C}=z\overline z$ at archimedean places. When Fourier transforms occur, take the additive measure self-dual for $\psi$, meaning that Fourier transform squared is reflection. If $t=r$, for $\Phi\in\mathcal S(K^r)$, the Schwartz–Bruhat space of locally constant compactly supported functions when $K$ is nonarchimedean and smooth rapidly decreasing functions when $K$ is archimedean, define on the domain of absolute convergence

$$Z(s,W,W',\Phi)=\int_{N_r(K)\backslash\mathrm{GL}_r(K)}W(g)W'(g)\Phi(e_rg)|\det g|_K^s\,dg,$$

where $e_r=(0,\ldots,0,1)$. If $t<r$, for $0\leq j\leq r-t-1$ put $k=r-t-j$ and define on the domain of absolute convergence

$$Z_j(s,W,W')=\int_{N_t(K)\backslash\mathrm{GL}_t(K)}\int_{\mathrm{Mat}_{j\times t}(K)}W\!\left(\begin{smallmatrix}g&0&0\\x&I_j&0\\0&0&I_k\end{smallmatrix}\right)W'(g)|\det g|_K^{s-(r-t)/2}\,dx\,dg.$$

Here $\mathrm{Mat}_{j\times t}(K)$ is the additive group of $j$-by-$t$ matrices with additive Haar measure, the one-point space is used when $j=0$, and $I_j,I_k$ are identity matrices of the indicated sizes. When $t=r-1$, the sole integral $Z_0$ is the usual adjacent-rank integral. These integrals are defined only where they converge absolutely; the definition asserts neither meromorphic continuation nor identification with a local $L$-factor.

## Definition references

[[def-gln-generic-whittaker-model]]

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §§0–2](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

[Hervé Jacquet, *Archimedean Rankin-Selberg Integrals*, §§3–5 and §11](https://www.math.columbia.edu/~hj/PerfectRankinSelberg.pdf)
