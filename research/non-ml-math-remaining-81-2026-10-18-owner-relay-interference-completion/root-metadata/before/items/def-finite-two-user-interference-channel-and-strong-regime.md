---
id: def-finite-two-user-interference-channel-and-strong-regime
kind: definition
title: Finite two-user interference channel and strong-interference regime
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-finite-discrete-memoryless-network-and-code]
aliases: []
axiom_use: No choice axiom is used; the channel alphabets are finite.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 6, §§6.1–6.2, discrete memoryless interference channel and strong-interference conditions, printed pp. 112–118.
    - title: M. H. M. Costa and Abbas A. El Gamal, The Capacity Region of the Discrete Memoryless Interference Channel with Strong Interference, IEEE Transactions on Information Theory 33(5), 1987
      url: https://isl.stanford.edu/groups/elgamal/abbas_publications/J022.pdf
      locator: Theorem 1, printed pp. 710–711.
---

## Definition

A **finite two-user interference channel** is the two-sender, two-receiver memoryless channel with finite input alphabets $\mathcal X_1,\mathcal X_2$, output alphabets $\mathcal Y_1,\mathcal Y_2$, and transition law $W(y_1,y_2|x_1,x_2)$. Independent uniform messages $M_1,M_2$ are encoded separately as $X_1^n=f_1(M_1)$ and $X_2^n=f_2(M_2)$; receiver $i$ estimates $M_i$ from $Y_i^n$. The **strong-interference regime** means that, for every product law $P_{X_1}P_{X_2}$,
$$I(X_1;Y_1|X_2)\le I(X_1;Y_2|X_2),\qquad I(X_2;Y_2|X_1)\le I(X_2;Y_1|X_1).$$
The inequalities are evaluated under the stated product law and the channel. They are universal hypotheses over input laws, not just inequalities at a chosen optimizing distribution.
