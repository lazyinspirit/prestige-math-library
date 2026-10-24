---
id: def-haar-covering-ratio-of-test-functions
kind: definition
title: Haar covering ratio of test functions
deps: [def-left-haar-integral-and-left-haar-measure, lem-translations-preserve-compactly-supported-continuous-functions]
provenance:
  statement: literature-derived
  proof: not-applicable
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Pedersen, Haar integral, p.2 definitions and lemma; p.3 Theorem 1; pp.4–5 second proof and Remark 2
      url: https://home.agh.edu.pl/~rudol/Paradoxes/haarintegral.pdf
---

## Definition

Use $C_c(G)^+=\{f\in C_c(G;\mathbb R):f\ge0\}$ and translations from [[def-left-haar-integral-and-left-haar-measure]], which preserve $C_c$ by [[lem-translations-preserve-compactly-supported-continuous-functions]]. For $f\in C_c(G)^+$ and $0\ne\phi\in C_c(G)^+$ put
$$ (f:\phi)=\inf\left\{\sum_{j=1}^n c_j:f\le\sum_{j=1}^n c_jL_{x_j}\phi,\ n\ge0,\ c_j>0,\ x_j\in G\right\}. $$
The empty sum is zero and $\inf\varnothing=+\infty$; thus $(0:\phi)=0$. Fix $0\ne f_0\in C_c(G)^+$. Once finiteness and strict positivity of $(f_0:\phi)$ have been proved, write $I_\phi(f)=(f:\phi)/(f_0:\phi)$. The definition does not assume those properties before the following lemma proves them.

## Sources

Pedersen, Haar integral, p.2 definitions and lemma; p.3 Theorem 1; pp.4–5 second proof and Remark 2. Local argument and conventions as displayed above.
