---
id: def-gts-mum-quintic-degeneration-and-normalized-metrics
kind: definition
title: MUM quintic degeneration and normalized Ricci-flat metrics
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-gts-compact-calabiyau-manifold-conventions
dependency_roles:
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Yang Li, SYZ Conjecture for Calabi-Yau Hypersurfaces in Fermat Family
      url: https://arxiv.org/pdf/1912.02360v1
      locator: §1, maximally unipotent degeneration and Fermat quintic family
    - title: Yang Li, Valuative Independence and Metric SYZ Conjecture
      url: https://arxiv.org/pdf/2605.00516v1
      locator: §1, polarized maximal degeneration and normalized Ricci-flat metrics
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

A one-parameter quintic degeneration is a proper holomorphic map $f:\mathcal X\to\Delta$ from a complex analytic space, where $\Delta=\{t\in\mathbb C:|t|<\varepsilon\}$ and $\Delta^*=\Delta\setminus\{0\}$. Require $f^{-1}(\Delta^*)$ to be a complex manifold and $f|_{f^{-1}(\Delta^*)}:f^{-1}(\Delta^*)\to\Delta^*$ to be a holomorphic submersion. For every $t\in\Delta^*$, require $X_t=f^{-1}(t)$ to be biholomorphic to a smooth degree-five hypersurface in $\mathbb P^4_{\mathbb C}$; here smooth means the defining homogeneous polynomial has no singular point on its zero locus. Fix $t_0\in\Delta^*$. Proper smoothness makes $R^3f_*\mathbb Z$ a local system on $\Delta^*$; its monodromy $T:H^3(X_{t_0};\mathbb Z)\to H^3(X_{t_0};\mathbb Z)$ is parallel transport around the positively oriented generator of $\pi_1(\Delta^*,t_0)$. It is maximally unipotent (MUM) when $T$ is unipotent and $N=\log T:=\sum_{j=1}^{s-1}(-1)^{j+1}(T-\operatorname{id})^j/j$ satisfies $N^4=0$ and $N^3\ne0$, where $s$ is any positive integer with $(T-\operatorname{id})^s=0$.

A normalized Ricci-flat metric family is a smooth family of real vertical two-forms $\omega_t$ on the fibres $X_t$. More precisely, put $V=\ker(d f_{\mathbb R}:T_{\mathbb R}f^{-1}(\Delta^*)\to f^*T_{\mathbb R}\Delta^*)$, the real vertical tangent bundle, and take a smooth section of $\Lambda^2_{\mathbb R}V^*_{\mathbb R}$ whose restriction to $X_t$ is $\omega_t$. Require each $\omega_t$ to be closed, of type $(1,1)$, and positive, hence to define a Kähler metric $g_t$ by $\omega_t(v,w)=g_t(J_tv,w)$. Ricci-flat means that in every holomorphic coordinate chart on $X_t$, if $\omega_t=i g_{j\bar k}dz^j\wedge d\bar z^k$, its Ricci form $\rho_t=-i\partial\bar\partial\log\det(g_{j\bar k})$ vanishes. Require
$$\int_{X_t}\frac{\omega_t^3}{3!}=1.$$
The Kähler classes and the scale normalization are part of the data. This definition does not prove that the family exists; existence is conditional on the precise Calabi–Yau metric inputs.

## Definition references

[[def-gts-compact-calabiyau-manifold-conventions]]
