---
id: lem-complex-sample-covariance-norm-bound-from-real-edge
kind: lemma
title: "A coarse complex sample-covariance norm bound from real edge bounds"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-identically-distributed-and-iid-random-variables
  - lem-largest-sample-covariance-eigenvalue-upper-bound
  - thm-singular-value-decomposition
  - thm-operator-norm-is-the-largest-singular-value
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Yin, Bai, and Krishnaiah, Theorem 3.1 (real upper-edge result)"
      url: "https://link.springer.com/content/pdf/10.1007/BF00353874.pdf"
    - title: "Z. D. Bai, B. Q. Miao, and G. M. Pan, On Asymptotics of Eigenvectors of Large Sample Covariance Matrix"
      url: "https://arxiv.org/pdf/0708.1720"
---
## Statement

Let $(\xi_{ij})_{i,j\ge1}$ be one infinite iid array of centered complex random variables with $\mathbb E|\xi_{11}|^2=\tau^2<\infty$ and $\mathbb E|\xi_{11}|^4<\infty$. For positive integers $n$, let $N_n$ be positive with $n/N_n\to c\in(0,\infty)$, and let $X_n=(\xi_{ij})_{1\le i\le n,\,1\le j\le N_n}$. Then almost surely
$$\limsup_{n\to\infty}\frac{\|X_n\|_{\mathrm{op}}}{\sqrt{N_n}}\le(\sigma_R+\sigma_I)(1+\sqrt c),\qquad \sigma_R^2=\mathbb E(\operatorname{Re}\xi_{11})^2,\quad \sigma_I^2=\mathbb E(\operatorname{Im}\xi_{11})^2.$$
In particular, when $\tau^2=1$, the right side is at most $\sqrt2(1+\sqrt c)$.

## Statement references

Yin, Bai, and Krishnaiah, Theorem 3.1, as reconstructed in the current real finite-fourth-moment upper-edge supplier ([full paper PDF](https://link.springer.com/content/pdf/10.1007/BF00353874.pdf)).

Bai, Miao, and Pan, Section 2, printed pp. 12–16 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

## Facts & Assumptions

**Given:** The common nested complex iid array and its centered finite-fourth-moment entry law.

[F1] Iid entries are independent and share one common distribution ([[def-identically-distributed-and-iid-random-variables]]).

[F2] For a real nested iid array with mean zero, variance one and finite fourth moment, $\limsup\lambda_{\max}(Z_n^{\mathsf T}Z_n/n)\le(1+\sqrt\gamma)^2$ almost surely when the number of columns divided by the number of rows tends to $\gamma>0$ ([[lem-largest-sample-covariance-eigenvalue-upper-bound]]).

[F3] The operator norm is the largest singular value, and the largest eigenvalue of $Z^*Z$ is its square ([[thm-operator-norm-is-the-largest-singular-value]], [[thm-singular-value-decomposition]]).

[F4] The operator norm is the maximum of $\|Av\|_2$ over unit vectors in the domain ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 Write $\kappa_n=N_n/n\to1/c$, $\sigma_R^2=\mathbb E(\operatorname{Re}\xi_{11})^2$, and $\sigma_I^2=\mathbb E(\operatorname{Im}\xi_{11})^2$. Centering of $\xi_{11}$ makes both real coordinates centered, and $\sigma_R^2+\sigma_I^2=\tau^2$. If $\sigma_R>0$, the matrices $Z_n=\operatorname{Re}X_n/\sigma_R$ are upper-left blocks of one real iid array with mean zero, variance one and finite fourth moment. Applying [F2] with $\gamma=\kappa=1/c$ and then [F3] gives $$\limsup_n\frac{\|\operatorname{Re}X_n\|_{\mathrm{op}}}{\sqrt{N_n}}\le\sigma_R\frac{1+\sqrt\kappa}{\sqrt\kappa}=\sigma_R(1+\sqrt c)\quad\text{almost surely}.$$ If $\sigma_R=0$, the centered real part is zero almost surely, so the same bound holds. The identical argument for the imaginary part gives the bound with $\sigma_I$. [given, F1, F2, F3, algebra]

2.1 The complex operator norm satisfies $\|X_n\|_{\mathrm{op}}=\|\operatorname{Re}X_n+i\operatorname{Im}X_n\|_{\mathrm{op}}\le\|\operatorname{Re}X_n\|_{\mathrm{op}}+\|\operatorname{Im}X_n\|_{\mathrm{op}}$. Intersecting the two probability-one events from step 1.1 proves the asserted limsup bound. Finally, $\sigma_R+\sigma_I\le\sqrt{2(\sigma_R^2+\sigma_I^2)}=\sqrt2\tau$ by Cauchy–Schwarz, giving the unit-variance consequence. [given, F4, step 1.1, algebra] ∎

## Source notes

The real edge application uses the current local upper-edge proof for the same top-left nested blocks, finite-fourth-moment law, dimension ratio and normalization. The complex-to-real reduction and triangle bound are proved above.
