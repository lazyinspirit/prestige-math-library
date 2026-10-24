---
id: ex-it-shared-random-binning-collision-probability
kind: example
title: "Shared random bins do not factor across encoders"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - thm-it-slepian-wolf-rate-region
  - def-it-finite-iid-multisource
  - def-it-multiterminal-lossless-code
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all random maps have finite domains and ranges."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 15"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "§15.4.1, random bin assignments and the Slepian–Wolf collision events, printed pp. 551–554."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Chapter 11, §11.6, multi-terminal source coding, printed pp. 224–226."
---

## Example

Take independent uniform binary sources $X,Y$ and two encoders with $M\ge2$ bins each. Each distinct random map assigns independent uniform labels in $[M]$ to its two input symbols. For one source symbol, compare the possible source pairs $(0,0)$ and $(1,1)$. If the two encoders use independent random maps, the probability that both pairs have the same message vector is $M^{-2}$. If both use one shared random map, that probability is $M^{-1}$ instead. Thus the product collision probability used in independent random binning depends on independence across encoders.

## Facts & Assumptions

**Given:** The independent fair binary source, integer $M\ge2$, and the two random-map ensembles in the Example.

[F1] [[def-it-finite-iid-multisource]]: the independent fair pair has all four binary pairs in its support.

[F2] [[def-it-multiterminal-lossless-code]]: each terminal sends its own finite message index to the common decoder.

[F3] [[thm-it-slepian-wolf-rate-region]]: the achievability proof assigns uniform bin labels to source words independently across words and encoders.

## Verification

1.1 Under [F1], each of the pairs $(0,0)$ and $(1,1)$ has source probability $1/4$. Under independent maps $F_X,F_Y:\{0,1\}\to[M]$, each equality $F_X(0)=F_X(1)$ and $F_Y(0)=F_Y(1)$ has probability $1/M$, because the two labels in each map are independent and uniform. The two equalities are independent across encoders, so both competing pairs collide in both message coordinates with probability $M^{-2}$. [F1, F2, F3, algebra]

1.2 Under a shared map $F_X=F_Y=F$, both message-coordinate collision conditions are the same event $F(0)=F(1)$. Its probability is $1/M$, not $1/M^2$. At $M=2$, the two probabilities are $1/4$ and $1/2$. [F2, algebra]

2.1 The calculation identifies why the independent-map hypothesis in [F3] permits multiplication of per-encoder collision probabilities. It does not claim that every shared-map code is poor; it shows that this particular product bound cannot be used for the shared ensemble. [F3, step 1.1, step 1.2] ∎
