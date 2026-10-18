---
id: def-it-finite-wyner-ziv-code
kind: definition
title: "Finite-alphabet lossy source coding with decoder-only side information"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-it-finite-conditional-mutual-information
  - def-it-finite-iid-multisource
  - def-it-information-units-and-logarithm-base
  - def-it-single-letter-distortion-and-block-distortion
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; all alphabets, kernels, code maps, and sums are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Aaron D. Wyner and Jacob Ziv, The Rate-Distortion Function for Source Coding with Side Information at the Decoder"
      url: "https://web.mit.edu/6.962/www/www_fall_2001/kusuma/wynerziv.pdf"
      locator: "§I, formal problem and main theorem, pp. 1–3."
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, author lecture notes"
      url: "https://arxiv.org/pdf/1001.3404v3"
      locator: "Lecture 12, noncausal side information at the decoder, pp. 16–17."
---

## Definition

Let $(X_t,Y_t)_{t\ge1}$ be an IID pair with joint pmf $P_{XY}$ on finite nonempty alphabets $\mathcal X\times\mathcal Y$, as the $k=2$ instance of [[def-it-finite-iid-multisource]]. Let $\widehat{\mathcal X}$ be finite nonempty and $d:\mathcal X\times\widehat{\mathcal X}\to[0,d_{\max}]$ be a finite bounded distortion, with normalized block distortion $d_n$ from [[def-it-single-letter-distortion-and-block-distortion]].

A length-$n$, $M$-message Wyner-Ziv code consists of a deterministic encoder $f_n:\mathcal X^n\to[M]$ and deterministic decoder $g_n:[M]\times\mathcal Y^n\to\widehat{\mathcal X}^n$. The encoder observes only $X^n$; the decoder observes both the message and $Y^n$. Its rate is $n^{-1}\ln M$ nats per source symbol, and its expected distortion is $\mathbb E[d_n(X^n,g_n(f_n(X^n),Y^n))]$.

A pair $(R,D)$ is operationally achievable if there are increasing blocklengths $n_j\to\infty$ and such codes with $\limsup_j n_j^{-1}\ln M_j\le R$ and $\limsup_j\mathbb E[d_{n_j}]\le D$. Define $R_{\rm WZ}^{\rm op}(D)$ as the infimum of achievable rates.

For a finite auxiliary alphabet $\mathcal U$, a test channel is a stochastic kernel $P_{U|X}$ together with a deterministic map $g:\mathcal Y\times\mathcal U\to\widehat{\mathcal X}$, under the joint law $P_{XYU}=P_{XY}P_{U|X}$. It has $U-X-Y$, expected distortion $\mathbb E[d(X,g(Y,U))]$, and conditional mutual information $I(X;U|Y)$ from [[def-it-finite-conditional-mutual-information]]. Define the single-letter candidate
$$R_{\rm WZ}(D):=\inf_{\substack{\mathcal U\ {\rm finite},\,P_{U|X},\,g\\\mathbb E[d(X,g(Y,U))]\le D}} I(X;U|Y),$$
with value $+\infty$ if the feasible set is empty. This definition alone makes no operational equality claim; the following theorem proves it and the cardinality lemma makes the finite minimum explicit.

## Remarks

Every reproduction has distortion at least $D_{\min}:=\mathbb E[\min_{\hat x\in\widehat{\mathcal X}}d(X,\hat x)]$, and the finite alphabet allows $U=X$ with a fixed pointwise minimizer to attain it. The zero-rate distortion is $D_{\max}:=\min_{h:\mathcal Y\to\widehat{\mathcal X}}\mathbb E[d(X,h(Y))]$; there are finitely many maps $h$, and a constant auxiliary with a minimizing $h$ attains it. The block code has only the encoder and decoder interfaces displayed in the statement; there is no encoder-side observation of $Y^n$.
