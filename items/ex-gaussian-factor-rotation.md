---
id: ex-gaussian-factor-rotation
kind: example
title: "Two Gaussian latent factors admit a nontrivial orthogonal rotation"
status: published
dependency_level: 2
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-covariance-factor-model, prop-covariance-factor-model-rotation-ambiguity]
justified_by: []
generation:
  role: example
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  scraped: []
  references: []
---

## Example

Let $p=3$, $q=2$,

$$A=\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix}, \qquad D=I_3, \qquad R=\frac1{\sqrt2}\begin{pmatrix}1&-1\\1&1\end{pmatrix}.$$

Let $S$ have density $(2\pi)^{-1}\exp(-\lVert s\rVert^2/2)$ on $\mathbb R^2$, and let $\varepsilon$ be independent of $S$ with density $(2\pi)^{-3/2}\exp(-\lVert e\rVert^2/2)$ on $\mathbb R^3$. With $X=AS+\varepsilon$, the two parameterizations $(A,S)$ and $(AR^T,RS)$ have the same covariance

$$\operatorname{Cov}(X)=\begin{pmatrix}2&0&1\\0&2&1\\1&1&3\end{pmatrix}$$

and the same law of $X$. The matrix $R$ is not a signed permutation, so the Gaussian latent orientation is not uniquely determined.

## Facts & Assumptions

**Given:** The matrices and independent Gaussian random vectors in the example statement.

[F1] [[prop-covariance-factor-model-rotation-ambiguity]]: replacing $A,S$ by $AR^T,RS$ for orthogonal $R$ preserves the covariance factor model and its covariance matrix.

[F2] [[def-covariance-factor-model]]: the factor model requires centered factors with covariance identity, diagonal positive residual covariance, and zero factor-residual cross-covariance.

## Verification

1.1 The displayed densities factor as products of the one-dimensional standard Gaussian density $g(x)=(2\pi)^{-1/2}e^{-x^2/2}$, so the coordinates of $S$ and $\varepsilon$ are independent. Symmetry gives $\mathbb E Z=0$ for a coordinate $Z$, and $(xe^{-x^2/2})'=e^{-x^2/2}-x^2e^{-x^2/2}$ with vanishing boundary terms gives $\int_{\mathbb R}x^2g(x)\,dx=\int_{\mathbb R}g(x)\,dx=1$. Thus $\mathbb E S=\mathbb E\varepsilon=0$, $\operatorname{Cov}(S)=I_2$, and $\operatorname{Cov}(\varepsilon)=I_3$. The given independence of $S$ and $\varepsilon$ makes their cross-covariance zero. [given, algebra]

2.1 Direct multiplication gives $R^TR=I_2$ and $(AR^T)(RS)=AS$, so the transformed representation yields the same $X$ for every outcome. By [F1], its covariance is unchanged; here $AA^T+I_3=\begin{pmatrix}2&0&1\\0&2&1\\1&1&3\end{pmatrix}$. [F1, given, step 1.1, algebra]

3.1 The density of $RS$ is $(2\pi)^{-1}\exp(-\lVert R^Ts\rVert^2/2)|\det R|=(2\pi)^{-1}\exp(-\lVert s\rVert^2/2)$ because $R$ is orthogonal and $|\det R|=1$. Thus $RS$ again has independent standard Gaussian coordinates; it remains independent of $\varepsilon$, and [F2] together with step 1.1 shows both parameterizations satisfy the model. Since $R$ has four nonzero entries, it is not a signed permutation. [F2, step 1.1, step 2.1, algebra] ∎
