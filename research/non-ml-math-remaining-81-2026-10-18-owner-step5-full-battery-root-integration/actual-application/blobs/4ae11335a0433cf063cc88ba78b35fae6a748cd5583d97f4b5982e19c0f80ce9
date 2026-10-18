---
id: ex-it-wyner-ziv-with-no-side-information
kind: example
title: "No side information reduces Wyner-Ziv to ordinary rate distortion"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-it-finite-mutual-information
  - def-it-finite-wyner-ziv-code
  - thm-it-finite-alphabet-wyner-ziv-rate-distortion
  - thm-it-finite-markov-data-processing
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the finite rate-distortion minima and data-processing calculation use finite sums."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "Chapter 10, §10.2, finite-alphabet information rate-distortion function."
    - title: "Aaron D. Wyner and Jacob Ziv, The Rate-Distortion Function for Source Coding with Side Information at the Decoder"
      url: "https://web.mit.edu/6.962/www/www_fall_2001/kusuma/wynerziv.pdf"
      locator: "§I, decoder-only side-information model and Theorem 1, pp. 1–3."
---

## Example

Let $Y$ be a constant random variable, let $X$ have any finite law, and let $d:\mathcal X\times\widehat{\mathcal X}\to[0,d_{\max}]$ be finite. Define the ordinary finite single-letter information rate in nats by $R_{X,d}^{\rm nat}(D):=\inf_{P_{\widehat X|X}:\,\mathbb E d(X,\widehat X)\le D}I(X;\widehat X)$. Then decoder-only side information is absent and $R_{\rm WZ}(D)=R_{X,d}^{\rm nat}(D)$.

## Facts & Assumptions

**Given:** A finite source law $P_X$, a constant $Y$, finite reproduction alphabet, finite bounded distortion, and feasible $D$.

[F1] [[thm-it-finite-alphabet-wyner-ziv-rate-distortion]]: $R_{\rm WZ}(D)$ minimizes $I(X;U|Y)$ over finite $U-X-Y$ and $\widehat X=g(Y,U)$ subject to the expected distortion constraint.

[F2] [[def-it-finite-mutual-information]]: $I(X;\widehat X)$ is the finite joint-law KL in nats, so the displayed ordinary single-letter infimum uses the same units as $R_{\rm WZ}$.

[F3] [[def-it-finite-wyner-ziv-code]]: a finite auxiliary $U$ and decoder map $g(Y,U)$ define a stochastic reproduction channel from $X$; when $Y$ is constant and $U=\widehat X$, the decoder returns that reproduction letter.

[F4] [[thm-it-finite-markov-data-processing]]: for a finite Markov chain $X\to U\to\widehat X$, $I(X;\widehat X)\le I(X;U)$.

## Verification

1.1 Because $Y$ is constant, any Wyner-Ziv test channel and reconstruction induce a finite channel $P_{\widehat X|X}$ with $\widehat X=g(U)$. Its distortion is unchanged and $X-U-\widehat X$ is a Markov chain. By [F2] and [F4], $R_{X,d}^{\rm nat}(D)\le I(X;\widehat X)\le I(X;U|Y)=I(X;U)$. Taking the infimum over WZ test channels gives $R_{X,d}^{\rm nat}(D)\le R_{\rm WZ}(D)$. [F1, F2, F4, algebra]

2.1 Conversely, every finite channel $P_{\widehat X|X}$ feasible for the ordinary infimum in [F2] gives the WZ test channel $U=\widehat X$ and decoder $g(y,u)=u$. This is feasible with the same mutual information and distortion, by [F3]. Taking infima gives $R_{\rm WZ}(D)\le R_{X,d}^{\rm nat}(D)$. Together with step 1.1 this proves equality. [F1, F2, F3, step 1.1, algebra] ∎

