---
id: ex-r5-pre-big-bang-dilaton-cosmology
kind: example
title: Pre-big-bang dilaton-driven cosmology proposal
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 2
deps:
- def-r5-alternative-cosmology-model-data
dependency_roles:
  def-r5-alternative-cosmology-model-data: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: 'M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early
      Universe to Today, arXiv:2303.04819v2'
    url: https://arxiv.org/pdf/2303.04819v2
    locator: §§7.1 and 7.3, PDF pp. 133–137; HTML Eq. (337) / PDF Eq. (315) for the low-energy tree-level string-frame metric-dilaton action, HTML Eq. (340) / PDF Eq. (318) for scale-factor duality, and HTML Eqs. (341)–(342) / PDF Eqs. (319)–(320) for the isotropic branches and dilaton. The homogeneous lapse action in [A1] is the explicitly adopted toroidal reduction; §§7.3, PDF pp. 135–137, state the strong-coupling, high-curvature and graceful-exit limitations.
physical_scope: Conditional homogeneous string-frame reduced dilaton-gravity branch on a toroidal background. It derives the
  branch and its scale-factor-dual partner from the stated reduced action; it asserts no controlled high-curvature transition,
  bounce, global compactification, or observation.
---

## Example

In string units $\ell_s=\sqrt{\alpha'}=1$, use the homogeneous string-frame cosmic-time metric $ds_{\rm str}^2=-dt^2+\sum_i a_i(t)^2(dx^i)^2$, with dimensionless $t,x^i$ and radii $a_i>0$. Define scale-factor duality by $(a_i,\varphi)\mapsto(a_i^{-1},\varphi-2\sum_i\log a_i)$ and the string coupling by $g_{\rm string}=e^{\varphi/2}$. For an isotropic branch let $t_{\rm phys}=\ell_s t$ and $H_{\rm phys}:=\ell_s^{-1}\dot a/a$; acceleration means $d^2a/dt_{\rm phys}^2>0$, and deceleration means $d^2a/dt_{\rm phys}^2<0$. In cosmic gauge $N=1$, the comoving observer is $u=e_{\hat0}=\ell_s^{-1}\partial_t=\partial_{t_{\rm phys}}$, with worldlines at fixed torus coordinates, and the spatial orthonormal fields are $e_{\hat i}=(\ell_s a_i)^{-1}\partial_{x^i}$. Thus $g_{\rm str}(e_{\hat a},e_{\hat b})=\operatorname{diag}(-1,1,\ldots,1)_{ab}$. Use $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ for the metric connection and $R_{\hat a\hat b\hat c\hat d}:=g_{\rm str}(e_{\hat a},R(e_{\hat c},e_{\hat d})e_{\hat b})$. The specified comoving orthonormal curvature diagnostic is $\mathcal K_{\rm str}:=|dH_{\rm phys}/dt_{\rm phys}+H_{\rm phys}^2|$. The isotropic solution of the adopted tree-level, two-derivative model has an expanding accelerated pre-big-bang branch, but as $t\to0^-$ it reaches $g_{\rm string}\to\infty$ and $\alpha'\mathcal K_{\rm str}\to\infty$; its scale-factor-dual, time-reversed partner is $a(t)=t^{1/\sqrt d}$ for $t>0$, which is decelerating for $d>1$ and coasting for $d=1$. A transition to the post-big-bang hot phase is an additional prescription, and the reduced equations do not establish a nonsingular controlled transition.

Take $d\geq1$ and a flat torus with dimensionless coordinates $x^i$ of period $2\pi$. Let $\ell_s=\sqrt{\alpha'}$ be the string length, $\alpha'$ have units of length squared, and use the dimensionless string-unit time $t=t_{\rm phys}/\ell_s$ and dimensionless radii $a_i=R_i/\ell_s$. On the interval $I=(-\infty,0)$, the functions $a_i,\Phi,N$ are smooth and $N>0$; increasing $t$ fixes the future direction. The string-frame line element is

$$ds_{\rm str}^2=\ell_s^2\left(-N(t)^2dt^2+\sum_{i=1}^d a_i(t)^2(dx^i)^2\right),\qquad t\in(-\infty,0),\quad N(t)>0.$$

Thus $a_i$, $\lambda_i:=\log a_i$, the lapse $N$, the dilaton $\varphi:=2\Phi$, and $t$ are dimensionless numerical variables in string units; physical radii are $\ell_s a_i$, physical proper time is $\ell_s t$ after setting $N=1$, and $g_{\rm string}:=e^\Phi=e^{\varphi/2}$ is dimensionless. The metric $g_{\rm str}$ is the metric carrying the tree-level dilaton prefactor in the adopted action. Here “tree-level” means no string-loop terms are retained, and “two-derivative” means the reduced action contains no terms with more than two time derivatives. A dot in the reduced action means derivative with respect to dimensionless $t$, and $H_{\rm phys}=\ell_s^{-1}\dot a/a$ for the isotropic branch. Write the shifted dilaton as $\bar\varphi=\varphi-\sum_{i=1}^d\lambda_i$. In this example the adopted homogeneous, tree-level, two-derivative model is the lapse action in [A1], with its overall positive normalization set to one in string units; it is a reduced model input, not a derivation of a globally consistent string compactification. Its isotropic pre-big-bang branch expands from the regime $\alpha'\mathcal K_{\rm str}\ll1$, $g_{\rm string}\ll1$ as $t\to-\infty$ toward a strong-coupling, high-curvature boundary at $t\to0^-$. The branch is related by scale-factor duality followed by time reversal to an expanding branch for $t>0$, decelerating for $d>1$ and coasting for $d=1$. The transition to the hot post-big-bang phase and its perturbation-transfer rule are recorded as missing; no bounce is inferred.

## Example references

[[def-r5-alternative-cosmology-model-data]]

[M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2](https://arxiv.org/pdf/2303.04819v2)

## Facts & Assumptions

[F1] [[def-r5-alternative-cosmology-model-data]]: A datum specifies a metric frame, action and fields, background branch, initial and boundary data, sources and transitions, perturbation variables and transfer, correction-control conditions, and observable outputs; absent transition or transfer data are recorded as missing.

[A1] Adopt the homogeneous toroidal reduced string-frame action $S_{\rm red}=\int dt\,N^{-1}e^{-\bar\varphi}\left(\sum_{i=1}^d\dot\lambda_i^2-\dot{\bar\varphi}^{\,2}\right)$, where $N(t)>0$ is the lapse and dots denote $d/dt$. Vary $N$, $\bar\varphi$, and every $\lambda_i$ before setting $N=1$. There is no matter, flux, or potential in this reduced branch. The reduction is the chosen low-energy model input.

## Verification

**Given:** $d\geq1$ and the reduced model [A1] on the open branch interval $t<0$, with future direction increasing $t$.

1.1 Variation of [A1] with respect to $N$ gives $\dot{\bar\varphi}^{\,2}=\sum_i\dot\lambda_i^2$. After fixing $N=1$, variation with respect to $\lambda_i$ gives $\frac{d}{dt}(e^{-\bar\varphi}\dot\lambda_i)=0$, and variation with respect to $\bar\varphi$ gives $2\ddot{\bar\varphi}-\dot{\bar\varphi}^{\,2}-\sum_i\dot\lambda_i^2=0$. Combining the lapse constraint with the last equation yields $\ddot{\bar\varphi}=\sum_i\dot\lambda_i^2$. [given, A1, algebra]

2.1 Set $\tau=-t>0$, $\lambda_i(t)=-d^{-1/2}\log\tau$, and $\bar\varphi(t)=-\log\tau+\bar\varphi_0$. Then $\dot\lambda_i=(\sqrt d\,\tau)^{-1}$ and $\dot{\bar\varphi}=\tau^{-1}$, so the lapse constraint holds. Also $\ddot\lambda_i=\dot{\bar\varphi}\dot\lambda_i$ and $\ddot{\bar\varphi}=\tau^{-2}=\sum_i\dot\lambda_i^2$, so every reduced Euler-Lagrange equation from step 1.1 holds. [A1, step 1.1, algebra]

3.1 The isotropic scale factor is $a=e^{\lambda_i}=\tau^{-1/\sqrt d}$, and the dilaton is $\varphi=\bar\varphi+\sum_i\lambda_i=-(1+\sqrt d)\log\tau+\varphi_0$. Hence $H_{\rm phys}=1/(\sqrt d\,\ell_s\tau)>0$ and $dH_{\rm phys}/dt_{\rm phys}=1/(\sqrt d\,\ell_s^2\tau^2)>0$. Consequently $a^{-1}d^2a/dt_{\rm phys}^2=dH_{\rm phys}/dt_{\rm phys}+H_{\rm phys}^2>0$: the branch expands and accelerates in string-frame proper time as $t$ increases. [F1, step 2.1, algebra]

3.2 Scale-factor duality acts by $\lambda_i\mapsto-\lambda_i$ and $\varphi\mapsto\varphi-2\sum_i\lambda_i$. It leaves $\bar\varphi$ unchanged and reverses every $\dot\lambda_i$, so the action [A1] and equations in step 1.1 are invariant. Applied to step 2.1 and then time-reversed, it gives $t>0$, $a=t^{1/\sqrt d}$, and $\varphi=(\sqrt d-1)\log t+\mathrm{constant}$. Writing $q=1/\sqrt d$, this branch has $H_{\rm phys}=q/t_{\rm phys}>0$ and $a^{-1}d^2a/dt_{\rm phys}^2=q(q-1)/t_{\rm phys}^2$; it is therefore decelerating for $d>1$ and coasting with zero acceleration for $d=1$. [A1, step 1.1, step 2.1, algebra]

4.1 Put $b=\ell_s a$ and use coordinates $(t_{\rm phys},x^i)$ in cosmic gauge. The metric connection has $\Gamma^0{}_{ii}=b^2H_{\rm phys}$ and $\Gamma^i{}_{0i}=\Gamma^i{}_{i0}=H_{\rm phys}$ (no sum); all other coefficients vanish. The stated curvature convention gives $R^0{}_{i0i}=\partial_{t_{\rm phys}}(b^2H_{\rm phys})-b^2H_{\rm phys}^2=b^2(dH_{\rm phys}/dt_{\rm phys}+H_{\rm phys}^2)$. Lowering the time index and inserting the orthonormal fields gives $R_{\hat0\hat i\hat0\hat i}=-(dH_{\rm phys}/dt_{\rm phys}+H_{\rm phys}^2)$ for every $i$. Its magnitude is $\mathcal K_{\rm str}=|dH_{\rm phys}/dt_{\rm phys}+H_{\rm phys}^2|=(1/\sqrt d+1/d)/(\ell_s^2\tau^2)$. Since $\alpha'=\ell_s^2$, $\alpha'\mathcal K_{\rm str}=(1/\sqrt d+1/d)/\tau^2\to\infty$ as $\tau\to0^+$. Also $g_{\rm string}=e^{\varphi/2}\propto\tau^{-(1+\sqrt d)/2}\to\infty$. Hence the displayed two-derivative, weak-coupling branch exits the regime $\alpha'\mathcal K_{\rm str}\ll1$, $g_{\rm string}\ll1$ at its singular boundary. This calculation supplies neither a nonsingular transition nor perturbation transfer to a post-big-bang phase. [F1, step 3.1, algebra] ∎
