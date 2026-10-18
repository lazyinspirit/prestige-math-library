---
id: ex-it-wyner-ziv-lossless-slepian-wolf-endpoint
kind: example
title: "Lossless Wyner-Ziv endpoint is the Slepian-Wolf rate"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-it-finite-conditional-entropy
  - def-it-finite-iid-multisource
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - def-it-finite-wyner-ziv-code
  - def-it-multiterminal-lossless-code
  - def-it-single-letter-distortion-and-block-distortion
  - thm-it-finite-alphabet-wyner-ziv-rate-distortion
  - thm-it-finite-conditional-mutual-information-identities-and-equality
  - thm-it-finite-entropy-chain-rule
  - thm-it-finite-kl-nonnegative-equality
  - thm-it-slepian-wolf-rate-region
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the calculation is finite and the Slepian-Wolf code theorem is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
sources:
  references:
    - title: "Aaron D. Wyner and Jacob Ziv, The Rate-Distortion Function for Source Coding with Side Information at the Decoder"
      url: "https://web.mit.edu/6.962/www/www_fall_2001/kusuma/wynerziv.pdf"
      locator: "§I, lossless endpoint discussion, pp. 2–3; §III–IV converse and direct coding arguments, pp. 6–9."
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "Chapter 15, §15.4, Slepian-Wolf rate region for two sources."
---

## Example

Let $(X,Y)$ be any finite IID source pair, let $\widehat{\mathcal X}=\mathcal X$, and use Hamming distortion $d(x,\hat x)=\mathbf1_{\{x\ne\hat x\}}$. At $D=0$, the Wyner-Ziv rate equals $H(X|Y)$, the same conditional rate as one-encoder lossless compression with decoder side information $Y$.

## Facts & Assumptions

**Given:** A finite IID pair $(X,Y)$, Hamming distortion, and target $D=0$.

[F1] [[thm-it-finite-alphabet-wyner-ziv-rate-distortion]]: the operational rate equals the minimum finite $I(X;U|Y)$ for $\widehat X=g(Y,U)$ with expected distortion at most zero.

[F2] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: $I(X;U|Y)=H(X|Y)-H(X|U,Y)$.

[F3] [[thm-it-slepian-wolf-rate-region]]: for two finite IID sources, achievable lossless rates satisfy $R_X\ge H(X|Y)$, $R_Y\ge H(Y|X)$, and $R_X+R_Y\ge H(X,Y)$, and these inequalities are sufficient.

[F4] [[def-it-finite-conditional-entropy]]: conditional entropy is the finite weighted entropy of the conditional laws on positive-mass conditioning values.

[F5] [[thm-it-finite-kl-nonnegative-equality]]: $I(X;Y)=D(P_{XY}\|P_XP_Y)\ge0$.

[F6] [[thm-it-finite-entropy-chain-rule]]: $H(Y)-H(Y|X)=I(X;Y)$ and $H(X|Y)+H(Y)=H(X,Y)$ for finite variables.

[F7] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: a point-mass probability vector has entropy zero under $0\ln0=0$.

[F8] [[def-it-multiterminal-lossless-code]]: separate finite-length encoders send indices to a common decoder, and achievable rates allow vanishing block-error probability.

## Verification

1.1 Any feasible test channel has nonnegative Hamming distortion with expectation zero, so $X=\widehat X=g(Y,U)$ almost surely. Every positive-mass conditional law of $X$ given $(U,Y)$ is therefore a point mass; [F4] and [F7] give $H(X|U,Y)=0$, and [F2] gives $I(X;U|Y)=H(X|Y)$. The admissible choice $U=X$, $g(y,u)=u$ has zero distortion and the same objective, so the Wyner-Ziv minimum is exactly $H(X|Y)$. [F1, F2, F4, F7, given, algebra]

2.1 In the two-source Slepian-Wolf region of [F3], the subset $\{X\}$ requires $R_X\ge H(X|Y)$. The rate pair $(R_X,R_Y)=(H(X|Y),H(Y))$ satisfies the other two inequalities because $H(Y)\ge H(Y|X)$ follows from [F5] and the first identity in [F6], while $H(X|Y)+H(Y)=H(X,Y)$ is the second identity in [F6]. These are the operational rates of the fixed-length code convention in [F8], so the minimum X-encoder rate with the Y-encoder sending its lossless sequence is $H(X|Y)$, matching step 1.1. [F3, F5, F6, F8, step 1.1, algebra] ∎

