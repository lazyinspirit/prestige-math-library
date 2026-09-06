---
id: thm-rmk-representing-measure-is-inner-regular-on-open-sets
kind: theorem
title: "The RMK representing measure is inner regular on open sets"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rmk-open-sets-are-caratheodory-measurable, lem-rmk-compact-set-formula-and-local-finiteness, def-radon-measure-on-an-lch-space]
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

For every open $U\subseteq X$,
$$\mu(U)=\sup\{\mu(K):K\subseteq U,\ K\text{ compact}\}.$$
Together with outer regularity and finiteness on compact sets, the constructed Borel measure is Radon in the convention of [[def-radon-measure-on-an-lch-space]].

## Facts & Assumptions

**Given:** The constructed measure satisfies $\mu(U)=\rho(U)$ on opens.

[L1] The compact-set formula holds and compact sets have finite measure. ([[lem-rmk-compact-set-formula-and-local-finiteness]])

## Proof

**Proof technique:** direct.

1.1 If $f\prec U$ and $K=\operatorname{supp}f$, then [L1]
$0\le f\le\mathbf1_K$. For every $h\in C_c(X)$ with
$\mathbf1_K\le h$, monotonicity gives $\Lambda(f)\le\Lambda(h)$; taking the
infimum in [L1] yields $\Lambda(f)\le\mu(K)$. Hence
$\rho(U)\le\sup_{K\Subset U}\mu(K)$. [L1]

2.1 The reverse inequality is monotonicity of the measure. Since $\mu(U)=\rho(U)$, the displayed equality follows. Outer regularity is built into $\mu^*$, and [L1] gives compact finiteness, so all Radon clauses hold. [step 1.1, L1] ∎
