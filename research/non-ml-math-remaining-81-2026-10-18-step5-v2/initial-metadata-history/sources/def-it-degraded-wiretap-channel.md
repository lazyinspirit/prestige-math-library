---
id: def-it-degraded-wiretap-channel
kind: definition
title: "Finite degraded wiretap channel"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-it-wiretap-channel, def-finite-stochastic-kernel]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the degradation kernel and channel alphabets are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, arXiv:1001.3404v3"
      url: https://arxiv.org/pdf/1001.3404v3
      locator: "The Wiretap Channel, PDF pp. 23-9–23-10: physically degraded wiretap channels and their capacity specialization."
    - title: "Paul Cuff, Princeton ELE 538: Information Theoretic Security, Lecture 11"
      url: https://www.princeton.edu/~cuff/ele538/files/lecture_11.pdf
      locator: "PDF p. 2: degraded factorization in the broadcast-channel discussion; PDF p. 4: degraded wiretap secrecy-capacity formula."
---

## Definition

A finite wiretap channel [[def-it-wiretap-channel]] is **degraded from Bob to Eve** if there is a finite stochastic kernel $V(z\mid y)$ from Bob's output alphabet to Eve's output alphabet such that

$$W(y,z\mid x)=W_Y(y\mid x)V(z\mid y)\quad\text{for every }x,y,z.$$

Equivalently, for every input law $P_X$, the induced joint law is $P_X(x)W_Y(y\mid x)V(z\mid y)$. The requirement specifies the joint coupling of Bob's and Eve's outputs, not only their separate marginal channels.
