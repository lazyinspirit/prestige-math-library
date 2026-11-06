---
id: post-free-torus-zero-mode-conformal-weights
kind: postulate
title: Free Torus Zero Mode Conformal Weights
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
- post-rns-ns-background-sigma-model
- def-st-string-tension-alpha-prime
- def-compact-free-string-circle-spectrum
dependency_roles:
  post-rns-ns-background-sigma-model: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
  def-compact-free-string-circle-spectrum: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: Adopted zero-mode conformal-weight prescription for a flat free closed-string torus with constant positive
  metric and constant two-form. It supplies no oscillator-state map, vertex-operator cocycles, OPE-locality, modular/sewing,
  or full-CFT theorem.
sources:
  references:
  - title: A. Giveon, M. Porrati, and E. Rabinovici, Target Space Duality in String Theory, arXiv:hep-th/9401139v1
    url: https://arxiv.org/pdf/hep-th/9401139v1
    locator: '§2.4, equations (2.4.11)–(2.4.24), PDF pp. 20–22: torus momentum-winding lattice and left/right zero-mode weights.'
  - title: J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2
    url: https://arxiv.org/pdf/hep-th/9602052v2
    locator: 'Lecture II §2.1, equations (2.4)–(2.8), PDF pp. 9–11: one-circle momentum/winding normalization and right-moving
      reflection.'
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Adopt the free closed-string torus zero-mode prescription in the following convention. Let $d\ge1$, use angular coordinates $y^i\sim y^i+2\pi$, and let $G=G^T>0$ and $B=-B^T$ be the constant dimensionless metric and two-form coefficients after dividing their physical coordinate components by $\alpha'>0$. Put $E=G+B$, $\eta=\begin{pmatrix}0&I_d\\I_d&0\end{pmatrix}$, and $Z=(m,n)\in\mathbb Z^d\oplus\mathbb Z^d$, where $m$ is the winding vector and $n$ the momentum vector. Define
$$\mathcal M(E)=\begin{pmatrix}G-BG^{-1}B&BG^{-1}\\-G^{-1}B&G^{-1}\end{pmatrix},\qquad h_0=\frac14\left(Z^T\mathcal M(E)Z+Z^T\eta Z\right),\qquad \bar h_0=\frac14\left(Z^T\mathcal M(E)Z-Z^T\eta Z\right).$$
These are the left/right zero-mode contributions to the conformal weights of the selected free torus sector. For $d=1$, with $G=R^2/\alpha'$ and $B=0$, they reduce to $h_0=\alpha'p_L^2/4$ and $\bar h_0=\alpha'p_R^2/4$ for $p_L=n/R+mR/\alpha'$ and $p_R=n/R-mR/\alpha'$. This is adopted free-field spectrum data, not a derivation of a global torus CFT.

## Postulate references

[Giveon, Porrati, and Rabinovici, §2.4](https://arxiv.org/pdf/hep-th/9401139v1)

[Polchinski, Chaudhuri, and Johnson, Lecture II §2.1](https://arxiv.org/pdf/hep-th/9602052v2)

## Facts & Assumptions

**Given:** The flat free closed-string sigma-model sector, $\alpha'>0$, constant $G=G^T>0$, constant $B=-B^T$, and integer momentum and winding labels.

[F1] [[post-rns-ns-background-sigma-model]]: the local Euclidean NS–NS sigma-model is an adopted action with metric, two-form, and dilaton couplings; it is local in a target chart and asserts no global measure or CFT-equivalence.

[F2] [[def-st-string-tension-alpha-prime]]: $\alpha'$ has length-squared dimension and is positive.

[F3] [[def-compact-free-string-circle-spectrum]]: at $d=1$, $p_L=n/R+mR/\alpha'$, $p_R=n/R-mR/\alpha'$, with zero-mode weights $\alpha'p_L^2/4$ and $\alpha'p_R^2/4$.

## Remarks

The postulate records the higher-rank torus normalization as sourced physical input. The local Narain theorem proves the lattice and moduli invariance of these displayed weights but does not promote this postulate to a full operator-algebra or worldsheet-equivalence theorem.
