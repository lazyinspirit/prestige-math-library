---
id: ex-it-berger-tung-lossless-slepian-wolf-special-case
kind: example
title: "Berger-Tung inner bound contains the Slepian-Wolf region"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - def-it-finite-conditional-entropy
  - def-it-finite-iid-multisource
  - def-it-finite-multiterminal-lossy-code
  - def-it-multiterminal-lossless-code
  - thm-it-berger-tung-finite-multiterminal-inner-bound
  - thm-it-finite-conditional-mutual-information-identities-and-equality
  - thm-it-slepian-wolf-rate-region
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the auxiliary choice is deterministic and the region comparison is a finite entropy calculation."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, author lecture notes"
      url: "https://arxiv.org/pdf/1001.3404v3"
      locator: "Lecture 13, finite-alphabet Berger-Tung inner bound, pp. 3–5; Slepian-Wolf special case, p. 4."
    - title: "João Barros, Reachback Communication in Wireless Sensor Networks, doctoral dissertation"
      url: "https://mediatum.ub.tum.de/doc/601579/601579.pdf"
      locator: "Chapter 4, §4.2.1, printed pp. 66–72; finite multiterminal inner-bound proof."
---

## Example

For a finite IID $k$-source, take $\widehat{\mathcal X}_i=\mathcal X_i$ and Hamming distortion at $D_i=0$. Choosing $U_i=X_i$ in the Berger-Tung test-channel construction makes its subset inequalities the Slepian-Wolf inequalities. This is a lossless special case where the inner bound matches the exact rate region; no such equality is asserted for general multiterminal lossy coding.

## Facts & Assumptions

**Given:** A finite IID $k$-source, identity auxiliary channels $U_i=X_i$, and zero Hamming distortions.

[F1] [[thm-it-berger-tung-finite-multiterminal-inner-bound]]: the finite test-channel subset constraints are $\sum_{i\in S}R_i\ge I(X_S;U_S|U_{S^c})$ for every nonempty $S$.

[F2] [[thm-it-slepian-wolf-rate-region]]: the exact finite-IID lossless rate region is $\sum_{i\in S}R_i\ge H(X_S|X_{S^c})$ for every nonempty $S$.

[F3] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: $I(A;B|C)=H(A|C)+H(B|C)-H(A,B|C)$ for finite variables.

[F4] [[def-it-finite-conditional-entropy]]: conditional entropy averages the entropies of the conditional laws over positive-mass conditioning values.

[F5] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(p)=-\sum_xp(x)\ln p(x)$, with $0\ln0=0$.

[F6] [[def-it-multiterminal-lossless-code]]: separate finite-length encoders send indices to a common decoder, and achievable rates allow vanishing block-error probability.

## Verification

1.1 With $U_i=X_i$, every $U_i-X_i$ test channel is the identity and the product factorization is satisfied. The decoder sets $\widehat X_i=U_i$, so all Hamming distortions vanish. The subset right-hand side in [F1] becomes $I(X_S;X_S|X_{S^c})$. [F1, given, construct]

2.1 For each positive-mass value $c$ of $X_{S^c}$, the conditional law of $(X_S,X_S)$ has mass $p_{X_S|c}(x)$ at $(x,x)$ and zero off the diagonal. Its entropy therefore equals that of $X_S$ given $c$ by [F5]. Averaging over $c$ using [F4] gives $H(X_S,X_S|X_{S^c})=H(X_S|X_{S^c})$, so [F3] yields $I(X_S;X_S|X_{S^c})=2H(X_S|X_{S^c})-H(X_S,X_S|X_{S^c})=H(X_S|X_{S^c})$. This also covers $S=[k]$, whose complement is a singleton. These are exactly the inequalities in [F2], under the lossless fixed-length common-decoder convention [F6]; lossless block-error achievability is supplied by [F2]. Therefore the Berger-Tung inner bound contains the exact Slepian-Wolf region for this zero-distortion special case, while its statement remains only an inner bound for general distortions. [F1, F2, F3, F4, F5, F6, step 1.1, algebra] ∎

