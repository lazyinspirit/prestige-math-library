---
id: thm-rmk-positive-functional-is-integration-against-its-representing-measure
kind: theorem
title: "Positive functionals on C_c(X) are integration against a Radon measure"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rmk-representing-measure-is-inner-regular-on-open-sets, lem-rmk-compact-set-formula-and-local-finiteness, lem-finite-lch-partition-of-unity-near-a-compact-set, thm-caratheodory-outer-measure-theorem]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Let $X$ be LCH and let $\Lambda:C_c(X;\mathbb R)\to\mathbb R$ be positive. The Radon measure $\mu$ constructed above satisfies
$$\Lambda(f)=\int_X f\,d\mu\qquad(f\in C_c(X;\mathbb R)).$$

## Facts & Assumptions

**Given:** $\mu$ is the Radon measure constructed from $\Lambda$.

[L1] The compact-set formula holds. ([[lem-rmk-compact-set-formula-and-local-finiteness]])

## Proof

**Proof technique:** direct.

1.1 Let $0\le f\in C_c(X)$ and choose $N$ with $f\le N\varepsilon$. For $1\le n\le N$ set $K_n=\{f\ge n\varepsilon\}$ and $$f_n=\min\{\varepsilon,(f-(n-1)\varepsilon)_+\}.$$ Then $f=\sum_{n=1}^Nf_n$, $\varepsilon\mathbf1_{K_n}\le f_n\le\varepsilon\mathbf1_{K_{n-1}}$, where $K_0=\operatorname{supp}f$. [given]

1.2 The upper compact estimate $0\le h\le\mathbf1_K\Rightarrow\Lambda(h)\le\mu(K)$ follows directly from [L1] by comparing $h$ with functions majorizing $\mathbf1_K$; the lower estimate $\mathbf1_K\le h\Rightarrow\mu(K)\le\Lambda(h)$ is [L1]. Applying these to $f_n/\varepsilon$ gives $$\varepsilon\mu(K_n)\le\Lambda(f_n)\le\varepsilon\mu(K_{n-1}).$$ The same inequalities hold for $\int f_n\,d\mu$. [L1]

2.1 Summing step 1.2 and using $\mu(K_0)<\infty$ shows $$\left|\Lambda(f)-\int f\,d\mu\right|\le\varepsilon\mu(K_0).$$ Letting $\varepsilon\downarrow0$ proves equality for nonnegative $f$. Applying it to $f^+$ and $f^-$ and using linearity proves the result for every real $f\in C_c(X)$. [step 1.1, step 1.2] ∎
