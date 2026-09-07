---
id: "prop-cohomology-of-derived-hom-is-ext"
kind: "proposition"
title: "Cohomology of derived hom is ext"
deps: ["def-derived-hom-in-the-bounded-setting", "thm-ext-is-hom-in-the-derived-category"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.7.2–10.7.5 and Exercise 10.7.1, pp. 399–400"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In the mixed bounded range of derived Hom, $H^n\mathbf R\operatorname{Hom}(M,N)\cong\operatorname{Hom}_{D(\mathcal A)}(M,N[n])$ for every integer $n$. For objects $M,N$ in degree zero and $n\geq0$ this is classical $\operatorname{Ext}^n(M,N)$ under the supplied one-sided resolution hypothesis.

## Facts & Assumptions

**Given:** In the mixed bounded range of derived Hom, $H^n\mathbf R\operatorname{Hom}(M,N)\cong\operatorname{Hom}_{D(\mathcal A)}(M,N[n])$ for every integer $n$. For objects $M,N$ in degree zero and $n\geq0$ this is classical $\operatorname{Ext}^n(M,N)$ under the supplied one-sided resolution hypothesis.

[F1] Derived Hom in the mixed bounded range uses a projective source or injective target, with no-roof cohomology comparisons and a mixed comparison zigzag ([[def-derived-hom-in-the-bounded-setting]]).

[F2] Classical Ext identifies with derived Hom from $M[0]$ to $N[n]$ for $n\geq0$ ([[thm-ext-is-hom-in-the-derived-category]]).

## Proof

1.1 In the projective construction, cycles of degree $n$ in $\underline{\operatorname{Hom}}(P_M,N)$ are chain maps $P_M\to N[n]$. Boundaries are their nullhomotopies, since multiplying a homotopy by $(-1)^n$ converts the shifted homotopy formula into $du=d_Nu-(-1)^{n-1}u d_P$. Hence the cohomology is $\operatorname{Hom}_K(P_M,N[n])$. The no-roof comparison built into the derived Hom construction identifies it with $\operatorname{Hom}_D(M,N[n])$. The same calculation for $\underline{\operatorname{Hom}}(M,I_N)$ uses the injective no-roof comparison. Zero objects and every integer $n$ are allowed. [F1, algebra]

2.1 For degree-zero inputs, the classical Ext comparison identifies the last Hom group with the supplied resolution Ext for $n\geq0$. The identifications use the same cocycles and comparison maps, so they are natural in both variables. The mixed Hom zigzag makes the two one-sided descriptions agree when both are available. [F2, step 1.1] ∎
