---
id: ex-chart-gluing-recovers-euclidean-lebesgue-measure
title: "Euclidean volume from chart gluing"
kind: example
status: published
origin: pipeline
deps: ["thm-density-measure-is-independent-of-the-chart-gluing", "cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure", "thm-lebesgue-measure-of-a-box-of-every-kind"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Folland, Real Analysis, second edition, \u00a711.4 pp.361\u2013363; Theorems 2.14\u20132.15 pp.50\u201351"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
proof_strategy: direct
---

## Example

On $\mathbb R^n$ for $n\ge1$, the standard density $|dx^1\cdots dx^n|$ induces Borel Lebesgue measure. Its completion is ordinary Lebesgue measure. For a box with side lengths $b_j-a_j$, its mass is $\prod_j(b_j-a_j)$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Euclidean identity-chart instance and box calculation.

[F1] [[thm-density-measure-is-independent-of-the-chart-gluing]]: The measure of a Borel chart subset is the coordinate coefficient integral.

[F2] [[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]: Under countable choice, completing Borel Lebesgue measure gives the Lebesgue sigma-algebra and Lebesgue measure.

[F3] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: The measure of any coordinate box is the product of its side lengths.

## Verification

1.1 Take the identity chart on $\mathbb R^n$ and partition $\varphi=1$. The coefficient is one, hence for each Borel $E$, $\mu_r(E)=\int_E1\,d\lambda_n=\lambda_n(E)$. In particular $\mu_r(\prod_j[a_j,b_j])=\prod_j(b_j-a_j)$; for the unit cube the result is one, and if a side has length zero the result is zero. [F1, F3]

2.1 The equality on Borel sets identifies the completed domain and measure with those in the Lebesgue completion theorem. Thus the completion is $(\mathbb R^n,\mathcal L(\mathbb R^n),\lambda_n)$. Empty sets have zero measure in both domains; the case $n=1$ is the usual interval-length formula. [F2, step 1.1] ∎
