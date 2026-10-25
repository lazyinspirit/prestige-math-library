---
id: ex-chart-gluing-recovers-euclidean-lebesgue-measure
title: "Euclidean volume from chart gluing"
kind: example
status: published
origin: pipeline
deps: ["def-countable-choice", "thm-density-measure-is-independent-of-the-chart-gluing", "cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure", "thm-lebesgue-measure-of-a-box-of-every-kind"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Folland, Real Analysis, second edition, \u00a711.4 pp.361\u2013363; Theorems 2.14\u20132.15 pp.50\u201351"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (ex-chart-gluing-recovers-euclidean-lebesgue-measure). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Example

Assume countable choice $\mathrm{AC}_\omega$. On $\mathbb R^n$ for $n\ge1$, the standard density $|dx^1\cdots dx^n|$ induces Borel Lebesgue measure. Its completion is ordinary Lebesgue measure. For a box with side lengths $b_j-a_j$, its mass is $\prod_j(b_j-a_j)$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Euclidean identity-chart instance and box calculation.

[A1] Countable choice is [[def-countable-choice]]; it supplies the intrinsic-density and Lebesgue-completion results below.

[F1] Under [A1], [[thm-density-measure-is-independent-of-the-chart-gluing]]: The measure of a Borel chart subset is the coordinate coefficient integral.

[F2] Under [A1], [[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]: Completing Borel Lebesgue measure gives the Lebesgue sigma-algebra and Lebesgue measure.

[F3] Under [A1], [[thm-lebesgue-measure-of-a-box-of-every-kind]]: The measure of any coordinate box is the product of its side lengths.

## Verification

1.1 Take the identity chart on $\mathbb R^n$ and partition $\varphi=1$. The coefficient is one, hence for each Borel $E$, $\mu_r(E)=\int_E1\,d\lambda_n=\lambda_n(E)$. In particular $\mu_r(\prod_j[a_j,b_j])=\prod_j(b_j-a_j)$; for the unit cube the result is one, and if a side has length zero the result is zero. [A1, F1, F3]

2.1 The equality on Borel sets identifies the completed domain and measure with those in the Lebesgue completion theorem. Thus the completion is $(\mathbb R^n,\mathcal L(\mathbb R^n),\lambda_n)$. Empty sets have zero measure in both domains; the case $n=1$ is the usual interval-length formula. [A1, F2, step 1.1] ∎
