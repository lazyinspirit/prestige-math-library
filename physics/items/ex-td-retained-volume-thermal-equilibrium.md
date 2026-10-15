---
id: ex-td-retained-volume-thermal-equilibrium
kind: example
title: Stable equilibrium with retained unequal volumes
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: A constructed two-subsystem entropy-maximization example with fixed volumes; it illustrates the effect of retained constraints and is not an empirical model of a named substance.
deps:
  - def-td-isolated-compound-feasible-set
  - def-td-temperature-pressure-chemical-potential
  - pthm-td-interior-exchange-equilibrium
  - post-td-bulk-additivity
  - post-td-concave-fundamental-entropy
  - post-td-entropy-maximum
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
dependency_roles:
  def-td-isolated-compound-feasible-set: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  pthm-td-interior-exchange-equilibrium: physical-result
  post-td-bulk-additivity: physical-assumption
  post-td-concave-fundamental-entropy: physical-assumption
  post-td-entropy-maximum: physical-assumption
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
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §2.9.1
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
dependency_level: 8
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

For each of two separated fixed-composition subsystems $i\in\{A,B\}$, let $O_i\subseteq D_{c_i}$ be an open dimensionless single-phase subset with physical chart $\Omega_i=\Phi_{c_i}(O_i)$ as in [[def-td-temperature-pressure-chemical-potential]]. Fix positive amounts $n_i$ with nonempty physical slices $\Omega_{i,n_i}:=\{(U_i,V_i):(U_i,V_i,n_i)\in\Omega_i\}$. Fix $U_0>0$ joules and $V_0>0$ cubic metres, and set $V_A=V_0$ and $V_B=2V_0$. Assume $\Omega_{i,n_i}\subseteq(0,2U_0)\times(0,\infty)$ and $(U,V_i)\in\Omega_{i,n_i}$ for every $0<U<2U_0$ and each $i$. Let each physical-coordinate entropy representative be $S_i(U_i,V_i)=a\ln(U_i/U_0)+b\ln(V_i/V_0)$ on its slice, where $a,b>0$ are in $\mathrm{J\,K^{-1}}$. The isolated compound permits energy exchange but retains the volume and mole partitions, and its adopted total entropy is $S_A+S_B$. For total energy $2U_0$, stipulate that every split $0<U_A<2U_0$, $U_B=2U_0-U_A$ with these retained volumes and amounts is admitted, and that these are exactly the feasible endpoints. As additional model input, designate the split $U_A=U_B=U_0$ as a stable equilibrium. This designation must satisfy [[post-td-entropy-maximum]], which supplies a necessary maximum criterion rather than a converse. The unique entropy-maximizing energy split is $U_A=U_B=U_0$, so $T_A=T_B=U_0/a$, while $p_A=bT_A/V_0$ and $p_B=bT_B/(2V_0)=p_A/2$. Thus this model's stable equilibrium under energy exchange does not imply pressure equality when volume exchange is retained.

## Facts & Assumptions

**Given:** $a,b>0$ in $\mathrm{J\,K^{-1}}$, $U_0>0$ in joules, $V_0>0$ in cubic metres, two independent separated subsystems, $U_A+U_B=2U_0$, retained $V_A=V_0$, $V_B=2V_0$ and mole amounts, the stated physical-slice restrictions and exact feasible endpoints, and the additional model designation of the equal-energy split as stable equilibrium.

[A1] [[post-td-entropy-maximum]]: The adopted postulate requires every designated stable equilibrium to be an attained global maximum of the summed entropy over the exact feasible set; attainment is assumed, and no uniqueness is supplied.

[F1] [[def-td-isolated-compound-feasible-set]]: The feasible set fixes the declared totals and retained partitions; an exchange is allowed only when the protocol permits it.

[F2] [[post-td-bulk-additivity]] and [[post-td-concave-fundamental-entropy]]: The separated compound uses additive total energy and the sum of the constituent entropies. These postulates do not assert an empirical equation of state.

[F3] [[def-td-temperature-pressure-chemical-potential]]: $T=1/S_U$ and $p=T S_V$ on the smooth positive-temperature chart.

[F4] [[def-natural-logarithm]]: $\ln$ is the natural logarithm on the positive reals.

[F5] [[pthm-td-interior-exchange-equilibrium]]: Pressure equality follows from entropy maximization only when the corresponding volume exchange is locally permitted (and thermal exchange supplies equal temperatures).

[L1] [[thm-logarithm-derivative-and-integral]]: For positive $x$, $\frac{d}{dx}\ln x=1/x$.

## Verification

1.1 The stipulated feasible-set model, slice restrictions and total-energy constraint make the feasible energy splits exactly $u=U_A\in(0,2U_0)$ and $U_B=2U_0-u$. The ratios in $f(u)=a\ln(u/U_0)+a\ln((2U_0-u)/U_0)$ are positive, so [F4] applies. By [L1], $f'(u)=a(1/u-1/(2U_0-u))$ and $f''(u)=-a/u^2-a/(2U_0-u)^2<0$. The derivative is positive for $u<U_0$, zero at $U_0$, and negative for $u>U_0$; hence $u=U_0$ is the unique global maximizer on the exact feasible set, so the additional stable-equilibrium designation satisfies the necessary criterion in [A1]. The entropy tends to $-\infty$ at both excluded endpoints. [given, A1, F1, F2, F4, L1, algebra]

2.1 At the maximizing split, [F3] gives $T_A=U_A/a=U_0/a=T_B$. It gives $p_A=bT_A/V_0$ and $p_B=bT_B/(2V_0)$, hence $p_B=p_A/2\ne p_A$ since $b,T_A,V_0>0$. The volume partition is retained by [F1], so no volume-exchange equality is implied by [F5]. [given, F1, F3, F5, step 1.1, algebra] ∎
