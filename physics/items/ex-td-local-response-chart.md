---
id: ex-td-local-response-chart
kind: example
title: Response functions in a formal logarithmic entropy chart
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: A constructed fixed-composition smooth chart used only to evaluate the preceding definitions; it is not an empirical equation of state or a complete bulk model.
deps:
  - def-td-temperature-pressure-chemical-potential
  - def-td-response-functions
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
dependency_roles:
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  def-td-response-functions: formulation-prerequisite
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §1.2.4
      url: https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §2.10.5
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
dependency_level: 7
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Fix a constitution $c$ and an open dimensionless single-phase subset $O\subseteq D_c$ whose physical chart is $\Omega=\Phi_c(O)$ under [[def-td-temperature-pressure-chemical-potential]]. Fix positive amounts $n=(n_1,\ldots,n_r)$ for which the slice $\Omega_n:=\{(U,V):(U,V,n)\in\Omega\}$ is nonempty, and assume $\Omega_n\subseteq\{(U,V):U,V>0\}$. Let $a,b>0$ have units $\mathrm{J\,K^{-1}}$, with reference values $U_0>0$ joules and $V_0>0$ cubic metres. Stipulate the physical-coordinate entropy representative on $\Omega_n$ (denoted by $S_c(U,V,n)$ as in [[def-td-temperature-pressure-chemical-potential]]) by

$$S(U,V)=a\ln(U/U_0)+b\ln(V/V_0).$$

Applying the definitions on this chart gives

$$T=U/a,\qquad p=bT/V,\qquad C_V=a,\qquad C_p=a+b,\qquad \kappa_T=1/p,\qquad \alpha_p=1/T.$$

This is a formal chart calculation, not measured data and not a claim that this entropy satisfies the track's tagged bulk-scaling postulate for a fixed material type.

## Facts & Assumptions

**Given:** $U,V,U_0,V_0>0$ with units $\mathrm J,\mathrm{m^3},\mathrm J,\mathrm{m^3}$ respectively; $a,b>0$ in $\mathrm{J\,K^{-1}}$; fixed composition; the displayed function is stipulated on this chart.

[A1] [[def-td-temperature-pressure-chemical-potential]]: $T=1/S_U$ and $p=T S_V$, with $V$ held fixed in $S_U$ and $U$ held fixed in $S_V$.

[F1] [[def-td-response-functions]]: $C_V=(\partial U/\partial T)_{V,n}$, $C_p=(\partial H/\partial T)_{p,n}$ with $H=U+pV$, $\kappa_T=-V^{-1}(\partial V/\partial p)_{T,n}$, and $\alpha_p=V^{-1}(\partial V/\partial T)_{p,n}$ where the indicated local charts exist.

[F2] [[def-natural-logarithm]]: $\ln$ denotes the natural logarithm on the positive real numbers.

[L1] [[thm-logarithm-derivative-and-integral]]: For positive $x$, the natural logarithm is differentiable and $\frac{d}{dx}\ln x=1/x$.

## Verification

1.1 The positive ratios in the stipulated entropy are in the domain of [F2]. By [L1], $S_U=a/U$ and $S_V=b/V$. Substitution in [A1] gives $T=U/a>0$ and $p=bU/(aV)=bT/V$. [given, A1, F2, L1, algebra]

2.1 Solving $T=U/a$ gives $U=aT$, hence $C_V=(\partial U/\partial T)_{V,n}=a$. The natural-coordinate map $(U,V)\mapsto(T,V)$ has inverse $(T,V)\mapsto(aT,V)$. The map $(U,V)\mapsto(T,p)$ has inverse $(T,p)\mapsto(aT,bT/p)$ on the positive quadrant. By [F2] and [L1], these maps and inverses have continuous first partial derivatives for positive arguments, so their restrictions to the open slice $\Omega_n$ give the local charts required by [F1]. Solving $p=bT/V$ gives $(\partial V/\partial p)_{T,n}=-bT/p^2$ and $(\partial V/\partial T)_{p,n}=b/p$. With $V=bT/p$, [F1] yields $\kappa_T=1/p$ and $\alpha_p=1/T$. [given, A1, F1, F2, L1, step 1.1, algebra]

3.1 The enthalpy in [F1] is $H=U+pV=aT+bT=(a+b)T$, so $C_p=(\partial H/\partial T)_{p,n}=a+b$. All displayed units are consistent: $C_V,C_p$ are $\mathrm{J\,K^{-1}}$, $\kappa_T$ is $\mathrm{Pa^{-1}}$, and $\alpha_p$ is $\mathrm{K^{-1}}$. [given, F1, step 1.1, step 2.1, algebra] ∎
