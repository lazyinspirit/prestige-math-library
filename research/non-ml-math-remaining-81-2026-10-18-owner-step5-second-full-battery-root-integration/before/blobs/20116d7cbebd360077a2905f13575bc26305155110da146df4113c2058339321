---
id: def-it-two-correlated-iid-sources-over-dm-mac-code
kind: definition
title: Lossless transmission of two correlated IID sources over a DM-MAC
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-it-finite-conditional-entropy, def-it-finite-iid-multisource, def-it-two-user-discrete-memoryless-mac]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; source and channel alphabets and all block maps are finite.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 15, Joint Source–Channel Coding
      url: https://arxiv.org/pdf/1001.3404v3
    - title: Abbas El Gamal and Thomas M. Cover, Multiple User Information Theory, Proceedings of the IEEE 68 (1980), §VII
      url: https://isl.stanford.edu/~cover/papers/paper51.pdf
---

## Definition

Let $(S_{1t},S_{2t})_{t\ge1}$ be the $k=2$ case of the finite IID multisource in [[def-it-finite-iid-multisource]], with finite nonempty component alphabets and common joint law $P_{S_1S_2}$. A length-$n$ lossless source-channel code over a DM-MAC as in [[def-it-two-user-discrete-memoryless-mac]] has separate deterministic encoders $f_j:\mathcal S_j^n\to\mathcal X_j^n$ and one decoder $g:\mathcal Y^n\to\mathcal S_1^n\times\mathcal S_2^n$. Its error is $\Pr[g(Y^n)\ne(S_1^n,S_2^n)]$. Reliable transmission means a sequence of such codes with error tending to zero. All source entropies are in nats and use [[def-it-finite-conditional-entropy]].

## Facts & Assumptions

**Given:** A finite IID source pair and the finite DM-MAC.

[F1] [[def-it-two-user-discrete-memoryless-mac]]: the channel block law is $\prod_iW(y_i\mid x_{1i},x_{2i})$.

[F2] [[def-it-finite-conditional-entropy]]: finite conditional entropy omits zero-mass conditioning values and is a finite weighted sum.

[F3] [[def-it-finite-iid-multisource]]: the source pair has block law $P_{S_1S_2}^{\otimes n}$ and the component sequences are the separate terminal observations.

## Proof

1.1 The finite IID source law [F3] and deterministic encoders assign a finite input pair to each source pair; [F1] then gives a normalized conditional distribution of $Y^n$. [given, F1, F3]

2.1 The decoder error event is a subset of a finite source-output space, so its probability and the vanishing-error reliability convention are well-defined; the entropy convention in [F2] is finite. [given, F2, step 1.1, algebra] ∎

