---
id: thm-quarter-turn-values-and-shift-formulas
kind: theorem
title: "Quarter-turn values and shifts by pi/2 and pi"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pi-via-first-positive-cosine-zero, thm-cosine-has-a-smallest-positive-zero, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, lem-sine-positive-and-cosine-decreasing-on-zero-two]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
    - title: "C. Schmeiser, Introduction to Analysis"
      url: "https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf"
pipeline_run: null
---

## Statement

For every real $x$,
$$\sin(x+\pi/2)=\cos x,\quad\cos(x+\pi/2)=-\sin x,\quad\sin(x+\pi)=-\sin x,\quad\cos(x+\pi)=-\cos x.$$
In particular,
$$\sin(\pi/2)=1,\quad\cos(\pi/2)=0,\quad\sin\pi=0,\quad\cos\pi=-1.$$

## Facts & Assumptions

**Given:** A real $x$ and $\gamma=\pi/2$.

[L1] $\cos\gamma=0$ and $\sin\gamma>0$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]], [[lem-sine-positive-and-cosine-decreasing-on-zero-two]]).

[L2] The addition formulas and Pythagorean identity hold ([[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]]).



## Proof

**Proof technique:** direct.

1.1 From $\cos^2\gamma+\sin^2\gamma=1$, $\cos\gamma=0$, and $\sin\gamma>0$, one gets $\sin\gamma=1$. [L1, L2]

2.1 Substituting $\gamma$ into the addition formulas gives $\sin(x+\gamma)=\cos x$ and $\cos(x+\gamma)=-\sin x$. [step 1.1, L2]

3.1 Applying step 2.1 twice gives the shifts by $2\gamma=\pi$ and the listed special values. [step 2.1, L1] ∎
