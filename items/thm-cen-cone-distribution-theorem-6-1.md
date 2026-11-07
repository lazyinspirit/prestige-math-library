---
id: thm-cen-cone-distribution-theorem-6-1
kind: theorem
title: "Cen Theorem 6.1 Cone-Distribution Estimate"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [thm-guth-maldague-amplitude-dependent-cone-envelope-input]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Xi Cen et al., “A New Bound for the Gauss Circle Problem”"
      url: "https://arxiv.org/pdf/2610.21730v1"
      locator: "§6, equations (6.1)–(6.2), Theorem 6.1"
    - title: "Larry Guth and Dominique Maldague, “Amplitude Dependent Wave Envelope Estimates for the Cone in ℝ³”"
      url: "https://arxiv.org/pdf/2206.01093v2"
      locator: "Theorem 2, input to Cen §6"
verification:
  precheck: n/a
---

## Statement

Let $K,L,\eta>0$ satisfy $1\le L<K\le\eta^{-1}\le KL$ and put $Z=\eta K^2$. Set
$\mathcal I_K=\{k\in\mathbb Z:K\le k<2K\}$ and
$\mathcal I_L=\{\ell\in\mathbb Z:L\le\ell<2L\}$. For a complex coefficient array
$c=(c_{k\ell})_{(k,\ell)\in\mathcal I_K\times\mathcal I_L}$ with
$|c_{k\ell}|\le1$, define
$$B=[-1,1]^2\times[-(\eta L\sqrt K)^{-1},(\eta L\sqrt K)^{-1}], \qquad e(t)=e^{2\pi i t},$$
$$F_c(x)=\sum_{k\in\mathcal I_K}\sum_{\ell\in\mathcal I_L} c_{k\ell}e(\ell x_1+k\ell x_2+\ell\sqrt{k}\,x_3) \quad (x\in\mathbb R^3),$$
and
$$D(\lambda)=\sup_{\substack{c\in\mathbb C^{\mathcal I_K\times\mathcal I_L}\\ |c_{k\ell}|\le1}} \frac{\operatorname{meas}\{x\in B:|F_c(x)|>\lambda\}}{\operatorname{meas}(B)} \quad (\lambda>0),$$
where $\operatorname{meas}$ is three-dimensional Lebesgue measure. Then for every $\varepsilon>0$ there is $C_\varepsilon>0$, independent of $K,L,\eta,\lambda$, such that
$$D(\lambda)\le C_\varepsilon(KL)^\varepsilon \left((KL)^3\lambda^{-6}+\frac{KL^2}{(L+Z)\lambda^4}\right).$$


## Statement references

[Xi Cen et al., “A New Bound for the Gauss Circle Problem”](https://arxiv.org/pdf/2610.21730v1)

[Larry Guth and Dominique Maldague, “Amplitude Dependent Wave Envelope Estimates for the Cone in ℝ³”](https://arxiv.org/pdf/2206.01093v2)

## Facts & Assumptions

**Given:** The parameter condition, exponential sum, normalized superlevel distribution and ε,λ ranges in the statement.

[L1] The required Guth–Maldague envelope input uses the squared local energy $|U|^{-1}\|S_Uf\|_{L^2}^4=|U|^{-1}(\int|S_Uf|^2)^2$, with selected envelopes defined by $C_\varepsilon R^\varepsilon|U|^{-1}\int|S_Uf|^2\ge\alpha^2/m_s(f)^2$. This is the genuine Theorem2 interface; the supplier deep proof remains unsupplied. [[thm-guth-maldague-amplitude-dependent-cone-envelope-input]]

## Proof status

The complete source proof of Cen Theorem 6.1 was inspected: it applies the Guth–Maldague wave-envelope estimate, uses a separate lattice count, sums dyadic angular scales and handles the small- and large-Δ ranges. The local Guth–Maldague theorem proof and its definitions are still unresolved, so this source argument has not been converted into a locally complete proof.
