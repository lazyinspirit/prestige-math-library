---
id: ex-compressible-entropy-variable-blowup-near-vacuum
kind: example
title: Entropy variables leave compact positive-state tubes near vacuum
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps:
  - def-compressible-navier-stokes-fourier-model
  - lem-compressible-ideal-gas-entropy-pair-and-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "F. Ismail and P. L. Roe, Affordable, entropy-consistent Euler flux functions II: Entropy production at shocks, Journal of Computational Physics 228 (2009), 5410–5436, complete paper"
      url: "https://www.math.umd.edu/~tadmor/references/files/Ismail%20and%20Roe%20affordable%20fluxes%20JCP2009.pdf"
      locator: "PDF pp. 8–9, printed pp. 5417–5418, equation (40): ideal-gas entropy variables."
---

## Example

Take $R=1$, $\gamma=2$, $c_v=1$, and $s_0=0$ in one dimension. For each integer $n\ge1$, let $U_n=(\rho_n,m_n,E_n)=(1/n,0,1/n)$. Every state is admissible and has $p_n=1/n$, $T_n=1$, and $s_n=\log n$. Its density entropy variable is $v_{\rho,n}=2-\log n$, which tends to $-\infty$ as the positive density and pressure tend to zero. The sequence approaches the excluded vacuum state $(0,0,0)$, so no compact set $\mathcal C\Subset\mathcal G$ contains all $U_n$.

## Verification


**Given:** The model and entropy-variable formulas with $R=1$, $\gamma=2$, $c_v=1$, $s_0=0$, and $U_n=(1/n,0,1/n)$.

[F1] [[def-compressible-navier-stokes-fourier-model]]: $\mathcal G=\{\rho>0,E>|m|^2/(2\rho)\}$, $p=(\gamma-1)(E-|m|^2/(2\rho))$, $T=p/(R\rho)$, and $s=c_v\log(p/\rho^\gamma)+s_0$.

[F2] [[lem-compressible-ideal-gas-entropy-pair-and-variables]]: $v_\rho=c_v\gamma-s-\beta|u|^2/2$, $v_E=-\beta$, and $\beta=1/T$.

1.1 For $U_n$, $\rho_n>0$, $\varepsilon_n=E_n=1/n>|0|^2/(2\rho_n)$, so $U_n\in\mathcal G$. The formulas [F1] give $p_n=1/n$, $T_n=1$, and $s_n=\log((1/n)/(1/n)^2)=\log n$. [F1, given, algebra]

2.1 Here $u_n=0$ and $\beta_n=1$. Substitution into [F2] gives $v_{\rho,n}=2-\log n$ and $v_{E,n}=-1$, hence $|v_{\rho,n}|\to\infty$. [F2, step 1.1, algebra]

3.1 The states satisfy $U_n\to(0,0,0)$, which is outside $\mathcal G$ because its density is zero. Every compact subset of Euclidean state space is closed, so a compact $\mathcal C\Subset\mathcal G$ containing every $U_n$ would also contain their limit, a contradiction. [F1, step 1.1, step 2.1, algebra] ∎
