---
id: post-dp-truncated-curvature-wz-factor
kind: postulate
title: Disk Level Truncated Dp Curvature WZ Factor
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: physics
library: physics
deps:
- post-type-ii-dp-brane-dbi-wz-action
dependency_roles:
  post-type-ii-dp-brane-dbi-wz-action: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: The source-reported disk-level order-alpha'^2 parity-odd Dp WZ curvature term with B=F=0, constant dilaton
  and the source's tangent/normal curvature trace; no all-orders characteristic-class or non-Abelian claim.
sources:
  references:
  - title: Constantin P. Bachas, Pascal Bain, and Michael B. Green, Curvature terms in D-brane actions and their M-theory
      origin, arXiv:hep-th/9903210v2
    url: https://arxiv.org/pdf/hep-th/9903210v2
    locator: §1 equation (1.1), §2 equation (2.15), and Appendix A; disk-level curvature-squared WZ term, trace conventions,
      and source's brane normalization.
  - title: R. Minasian and G. W. Moore, K-theory and Ramond-Ramond charge, arXiv:hep-th/9710230v2
    url: https://arxiv.org/pdf/hep-th/9710230v2
    locator: §§2–3, characteristic-class structure of D-brane RR couplings; context only, not used to assert an all-orders
      formula here.
verification:
  precheck: pending
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Let $p$ be an allowed Type II D-brane dimension with $3\le p\le9$, and let $\iota:W^{p+1}\hookrightarrow X^{10}$ be a smooth oriented timelike embedding with nondegenerate induced metric. Its normal bundle $NW$ is the spacelike orthogonal complement of $TW$ in $\iota^*TX$. Let $\nabla^T$ and $\nabla^N$ be the connections obtained by orthogonally projecting the pulled-back ambient Levi-Civita connection to $TW$ and $NW$, and let $R_T$ and $R_N$ be their endomorphism-valued curvature two-forms. Each trace is the matrix trace in the corresponding tangent or normal vector representation. At disk level and order $\alpha'^2$, with constant dilaton and $B_2=F_A=0$, adopt the source-reported parity-odd WZ expression
$$ \mu_p\int_W\left(\iota^*C_{p+1}+\frac{\pi^2\alpha'^2}{24}\iota^*C_{p-3}\wedge \left(\operatorname{tr}(R_T\wedge R_T)-\operatorname{tr}(R_N\wedge R_N)\right)\right),\qquad \mu_p=((2\pi)^p\alpha'^{(p+1)/2})^{-1}. $$
Here $C_r$ are the smooth ambient real $r$-form potentials in the democratic WZ basis of *Type II Dp Brane DBI WZ Action*, with its massless D8 restriction and separate D9 supplement. Pullback acts only on these ambient potentials; the curvature four-forms already live on $W$. To translate Bachas–Bain–Green (BBG), put $\lambda_s=g_{\mathrm{str}}=e^{\Phi_\infty}>0$, $\varphi_{\mathrm{BBG}}=\Phi-\Phi_\infty$, and $C_r^{\mathrm{BBG}}=g_{\mathrm{str}}C_r$ on this zero-$B_2$ branch. BBG footnote 5 gives $T_{(p)}^{\mathrm{BBG}}=\mu_p/g_{\mathrm{str}}$, so $T_{(p)}^{\mathrm{BBG}}C_r^{\mathrm{BBG}}=\mu_pC_r$ and $T_{(p)}^{\mathrm{BBG}}e^{-\varphi_{\mathrm{BBG}}}=\mu_pe^{-\Phi}$. This is an explicit local field normalization, not an identification $T_{(p)}^{\mathrm{BBG}}=\mu_p$ or a global charge-lattice assertion. Only the displayed curvature-squared term is adopted; no all-orders $\sqrt{\hat A}$ claim is made.

## Statement References

[[post-type-ii-dp-brane-dbi-wz-action]]

[Bachas, Bain, and Green, §§1–2 and Appendix A](https://arxiv.org/pdf/hep-th/9903210v2)
