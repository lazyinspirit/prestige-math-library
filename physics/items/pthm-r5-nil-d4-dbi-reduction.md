---
id: pthm-r5-nil-d4-dbi-reduction
kind: physics-theorem
title: Wrapped Nil D4 DBI Reduction And Large Field Potential
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: physics
library: physics
deps:
  - post-type-ii-dp-brane-dbi-wz-action
  - post-r5-sw-nil-background-data
  - def-r5-nil-d4-worldvolume-embedding
  - pthm-r5-nil-d4-pullback-determinant
dependency_roles:
  post-type-ii-dp-brane-dbi-wz-action: physical-assumption
  post-r5-sw-nil-background-data: physical-assumption
  def-r5-nil-d4-worldvolume-embedding: formulation-prerequisite
  pthm-r5-nil-d4-pullback-determinant: physical-result
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "The leading two-derivative geometric DBI contribution for one Abelian probe D4 wrapped on the stated unit u2 circle, with constant dilaton, zero pulled-back B2 and F_A, fixed moduli, homogeneous u1(t), negligible backreaction, and u1 well above the asymptotic crossover. It is not the full stabilized potential or an inflationary observation."
sources:
  references:
    - title: "Eva Silverstein and Alexander Westphal, Monodromy in the CMB: Gravity Waves and String Inflation, arXiv:0803.3085v2"
      url: "https://arxiv.org/pdf/0803.3085v2"
      locator: "§2.3 equations (2.8)–(2.14), (2.26)–(2.30), PDF pp. 9–14; beta parametrization, quadratic action, canonical field, and large-u asymptotics."
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §2.5, equation (2.19), PDF p. 15; leading D4 DBI normalization."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Under the geometric DBI assumptions in [A1], integrating over the unit $u_2$-circle and expanding only for $\epsilon=\alpha'L_{u_1}^2\dot u_1^2\ll1$ gives
$$ S_{DBI}=\int d^4x\sqrt{-g_{4,s}}\left(\frac12K(u_1)\dot u_1^2-V_{DBI}(u_1)+O(\epsilon^2V_{DBI})\right), $$
$$ V_{DBI}=\frac{L_u\sqrt\beta}{(2\pi)^4g_{\mathrm{str}}\alpha'^2}\left(1+\frac{M^2L_x^2u_1^2}{\beta L_u^2}\right)^{1/2},\quad K=\frac{L_u^3}{(2\pi)^4g_{\mathrm{str}}\alpha'\sqrt\beta}\left(1+\frac{M^2L_x^2u_1^2}{\beta L_u^2}\right)^{1/2}. $$
The canonical coordinate is fixed by $\phi(0)=0$ and $\phi'(u)=\sqrt{K(u)}$. For $u\gg u_{crit}:=\sqrt\beta L_u/(ML_x)$,
$$ \phi(u)\sim\frac{M^{1/2}L_uL_x^{1/2}}{6\pi^2\sqrt{g_{\mathrm{str}}\alpha'}\,\beta^{1/2}}u^{3/2},\quad V_{DBI}(u)\sim\frac{ML_x}{(2\pi)^4g_{\mathrm{str}}\alpha'^2}u, $$
so $V_{DBI}(\phi)\sim\mu_{10/3}\phi^{2/3}$, with
$$ \mu_{10/3}=\left(\frac32\right)^{2/3}(2\pi)^{-8/3}M^{2/3}\beta^{1/3}\frac{L_x/L}{\alpha'^{5/3}g_{\mathrm{str}}^{2/3}},\qquad L_u^2L_x=L^3. $$
In these units $u_1,u_{crit},L_u,L_x,L,\beta,M,$ and $g_{\mathrm{str}}$ are dimensionless, $[\alpha']=L^2$, and $\epsilon$ is dimensionless; consequently $[V_{DBI}]=L^{-4}$, $[K]=L^{-2}$, $[\phi]=L^{-1}$, and $[\mu_{10/3}]=L^{-10/3}$.
These are the geometric DBI terms only; no claim is made about omitted Chern–Simons, stabilization, loop, higher-curvature, or backreaction contributions.

## Statement References

[Silverstein and Westphal, §2.3](https://arxiv.org/pdf/0803.3085v2)

## Facts & Assumptions

**Given:** A single Abelian D4 probe with $W_5=X_4\times S^1$, $X_4=I\times\Sigma_3$, smooth homogeneous $u_1(t)$, fixed background moduli, and the full ten-dimensional product metric in the cited input items. Write $g_{\mathrm{str}}=e^{\Phi_\infty}$ for the constant dimensionless string coupling, and take $ds_{4,s}^2=-dt^2+h_{ij}(t,x)dx^idx^j$ with smooth positive-definite $h$.

[F1] [[post-type-ii-dp-brane-dbi-wz-action]]: the leading DBI density is $-\mu_4e^{-\Phi}\sqrt{-\det(\iota^*G^{(s)}+\mathcal F)}$, with $\mu_4=(2\pi)^{-4}\alpha'^{-5/2}$, and the worldvolume combination is $\mathcal F=2\pi\alpha'F_A-\iota^*B_2$. This proof uses only the DBI clause and the explicitly assumed zero-$\mathcal F$ configuration.

[F2] [[post-r5-sw-nil-background-data]]: $L_{u_1}=L_u/\sqrt\beta$, $L_{u_2}=L_u\sqrt\beta$, $g_{\mathrm{str}}=e^{\Phi_\infty}$, and $L_u^2L_x=L^3$.

[F3] [[def-r5-nil-d4-worldvolume-embedding]]: the wrapped coordinate has period one and the worldvolume is $X_4\times S^1_{u_2}$.

[F4] [[pthm-r5-nil-d4-pullback-determinant]]: for smooth positive-definite $h_{ij}$ in $ds_{4,s}^2=-dt^2+h_{ij}dx^idx^j$, $\sqrt{-\det(\iota^*G^{(s)})}=\sqrt{-g_{4,s}}\sqrt{\alpha'(L_{u_2}^2+M^2L_x^2u_1^2)}\sqrt{1-\alpha'L_{u_1}^2\dot u_1^2}$.

[A1] Work at constant dilaton $\Phi=\Phi_\infty$ with $\iota^*B_2=0$ and $F_A=0$, in the two-derivative small-velocity regime $\alpha'L_{u_1}^2\dot u_1^2\ll1$. Use $u_1\gg u_{crit}$ only for the displayed large-$u_1$ asymptotic, and omit the separate Chern–Simons and stabilization-sector terms.

## Proof

1.1 Set $\mathcal F=0$ by [A1] and [F1]. Insert [F4] into the DBI action, use $e^{-\Phi}=g_{\mathrm{str}}^{-1}$ by [A1], and integrate $u_2\in[0,1]$, whose coordinate length is one by [F3]. The exact homogeneous density is $-\sqrt{-g_{4,s}}((2\pi)^4g_{\mathrm{str}}\alpha'^2)^{-1}\sqrt{L_{u_2}^2+M^2L_x^2u_1^2}\sqrt{1-\alpha'L_{u_1}^2\dot u_1^2}$. [given, F1, F3, F4, A1, algebra]

2.1 By [F2], $L_{u_2}^2=\beta L_u^2$ and $L_{u_1}^2=L_u^2/\beta$. Substituting these into step 1.1 gives $-\sqrt{-g_{4,s}}((2\pi)^4g_{\mathrm{str}}\alpha'^2)^{-1}\sqrt{\beta L_u^2+M^2L_x^2u_1^2}\sqrt{1-\alpha'L_u^2\dot u_1^2/\beta}$. [given, F2, step 1.1, algebra]

3.1 For $x=\alpha'L_u^2\dot u_1^2/\beta$ with $0\le x\ll1$, Taylor's formula gives $\sqrt{1-x}=1-x/2+O(x^2)$. Separating constant and quadratic terms in step 2.1 gives the stated $V_{DBI}(u_1)$, $K(u_1)$, and order-$\epsilon^2V_{DBI}$ remainder. Positivity of the moduli and $g_{\mathrm{str}}$ makes $K>0$. Since the background parameters are dimensionless and $[\alpha']=L^2$ by [F2], these formulas give $[V_{DBI}]=L^{-4}$, $[K]=L^{-2}$, and dimensionless $\epsilon$. [given, A1, F1, F2, step 2.1, algebra]

4.1 Define $\phi(u)=\int_0^u\sqrt{K(s)}\,ds$. Since $K(s)>0$, this is strictly increasing on $u\ge0$, and the chain rule yields $\dot\phi^2=K(u)\dot u^2$. Taking the square root of the displayed $K$ gives $\phi'(u)=L_u^{3/2}\beta^{-1/4}((2\pi)^2\sqrt{g_{\mathrm{str}}\alpha'})^{-1}(1+M^2L_x^2u^2/(\beta L_u^2))^{1/4}$, the exact canonical normalization in quadrature form. Since $u$ is dimensionless and $[K]=L^{-2}$ by step 3.1, $[\phi]=L^{-1}$. [given, F2, step 3.1, algebra]

5.1 For $u\gg u_{crit}=\sqrt\beta L_u/(ML_x)$, the parenthesis in step 4.1 is asymptotic to $M^2L_x^2u^2/(\beta L_u^2)$. Thus $\phi'(u)\sim M^{1/2}L_uL_x^{1/2}u^{1/2}/((2\pi)^2\sqrt{g_{\mathrm{str}}\alpha'}\beta^{1/2})$, whose integral gives the displayed $u^{3/2}$ coefficient. The potential in step 3.1 satisfies $V_{DBI}\sim ML_xu/((2\pi)^4g_{\mathrm{str}}\alpha'^2)$. [given, step 3.1, step 4.1, algebra]

6.1 Set $C=M^{1/2}L_uL_x^{1/2}/(6\pi^2\sqrt{g_{\mathrm{str}}\alpha'}\beta^{1/2})$, so step 5.1 gives $u_1\sim(\phi/C)^{2/3}$. Substitution in its potential yields coefficient $(ML_x/((2\pi)^4g_{\mathrm{str}}\alpha'^2))C^{-2/3}=(3/2)^{2/3}(2\pi)^{-8/3}M^{2/3}\beta^{1/3}(L_x/L_u)^{2/3}/(g_{\mathrm{str}}^{2/3}\alpha'^{5/3})$. By [F2], $L_u^2L_x=L^3$ implies $(L_x/L_u)^{2/3}=L_x/L$, giving the stated $\mu_{10/3}$; its units are $L^{-10/3}$, so $\mu_{10/3}\phi^{2/3}$ has the potential units $L^{-4}$. This remains only the geometric DBI term under [A1]. [given, A1, F2, step 5.1, algebra] ∎
