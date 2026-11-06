---
id: post-r5-sw-nil-background-data
kind: postulate
title: Silverstein Westphal Nil Background Data For Wrapped D4 Reduction
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: physics
library: physics
deps:
  - def-st-string-tension-alpha-prime
  - def-string-coupling-genus-weight
dependency_roles:
  def-st-string-tension-alpha-prime: formulation-prerequisite
  def-string-coupling-genus-weight: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The local Nil metric and lattice on two isomorphic compact three-manifolds, constant-dilaton, and vanishing worldvolume NS/Abelian-flux data used for the geometric DBI contribution in Silverstein–Westphal §§2.2–2.3; not a complete stabilized ten-dimensional solution."
sources:
  references:
    - title: "Eva Silverstein and Alexander Westphal, Monodromy in the CMB: Gravity Waves and String Inflation, arXiv:0803.3085v2"
      url: "https://arxiv.org/pdf/0803.3085v2"
      locator: "§2.2–§2.3, equations (2.4)–(2.10), PDF pp. 7–10; metric, moduli, D4 probe action, and two-derivative expansion."
    - title: "Eva Silverstein and Alexander Westphal, Monodromy in the CMB: Gravity Waves and String Inflation, arXiv:0803.3085v2"
      url: "https://arxiv.org/pdf/0803.3085v2"
      locator: "§3.1.1–§3.1.2, PDF pp. 17–19; distinction between the main φ^(2/3) orientation and the charged φ~^(2/5) variant."
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Take dimensionless coordinates $(u_1,u_2,x')\in\mathbb R^3$, integer $M\ge1$, and quotient by the lattice transformations
$$ \tau_1(u_1,u_2,x')=(u_1+1,u_2,x'-Mu_2),\quad \tau_2(u_1,u_2,x')=(u_1,u_2+1,x'),\quad \tau_x(u_1,u_2,x')=(u_1,u_2,x'+1). $$
The adopted Nil metric block is
$$ ds^2_{N^3}=\alpha'\!\left(L_{u_1}^2du_1^2+L_{u_2}^2du_2^2+L_x^2(dx'+Mu_1du_2)^2\right), $$
with $L_{u_1},L_{u_2},L_x>0$ dimensionless and $[\alpha']=\mathrm{length}^2$. Define $L_u^2=L_{u_1}L_{u_2}$, $\beta=L_{u_2}/L_{u_1}>0$, so $L_{u_1}=L_u/\sqrt\beta$, $L_{u_2}=L_u\sqrt\beta$, and $L^3=L_u^2L_x$. Define the second factor $\widetilde N^3$ as an isomorphic copy of $N^3$ with dimensionless coordinates $(\widetilde u_1,\widetilde u_2,\widetilde x')\in\mathbb R^3$, quotient transformations $\widetilde\tau_1(\widetilde u_1,\widetilde u_2,\widetilde x')=(\widetilde u_1+1,\widetilde u_2,\widetilde x'-M\widetilde u_2)$, $\widetilde\tau_2(\widetilde u_1,\widetilde u_2,\widetilde x')=(\widetilde u_1,\widetilde u_2+1,\widetilde x')$, and $\widetilde\tau_x(\widetilde u_1,\widetilde u_2,\widetilde x')=(\widetilde u_1,\widetilde u_2,\widetilde x'+1)$, and metric
$$ ds^2_{\widetilde N^3}=\alpha'\!\left(L_{u_1}^2d\widetilde u_1^2+L_{u_2}^2d\widetilde u_2^2+L_x^2(d\widetilde x'+M\widetilde u_1d\widetilde u_2)^2\right). $$
Let $X_4$ be a smooth oriented boundaryless four-manifold with a smooth Lorentzian string-frame metric $g_{4,s}\in\Gamma(\operatorname{Sym}^2T^*X_4)$ of signature $(-,+,+,+)$; write $ds_{4,s}^2$ for its local line element, with units of length squared. On $X^{10}:=X_4\times N^3\times\widetilde N^3$, take the smooth product metric $G^{(s)}:=\pi_4^*g_{4,s}+\pi_N^*g_N+\pi_{\widetilde N}^*g_{\widetilde N}$ of signature $(-,+,\ldots,+)$, where the $\pi$ are the three projections and $g_N,g_{\widetilde N}$ are the metric tensors just specified. Thus $ds^2_{10,s}=ds_{4,s}^2+ds^2_{N^3}+ds^2_{\widetilde N^3}$. The dilaton is the constant field $\Phi=\Phi_\infty$, and the dimensionless string coupling is $g_{\mathrm{str}}:=e^{\Phi_\infty}>0$. For the DBI contribution isolated in the cited calculation, set the pulled-back $B_2$ and $F_A$ to zero and keep Chern–Simons, stabilization, loop, and higher-$\alpha'$ contributions separate. These are adopted background data for a probe calculation, not proof that the compactification equations have a global solution.

## Statement References

[Silverstein and Westphal, §2.2–§2.3](https://arxiv.org/pdf/0803.3085v2)

## Remarks

Silverstein–Westphal §2.3, equation (2.6), describes the second Nil factor as isometric to the first; the tilded metric and quotient above make that adopted copy explicit. The lattice preserves $dx'+Mu_1du_2$: under $\tau_1$, $dx'\mapsto dx'-Mdu_2$ and $u_1\mapsto u_1+1$, so the added terms cancel. The same calculation holds in the tilded copy. This local metric postulate does not specify the global orientifold image or the net D4 charge.
