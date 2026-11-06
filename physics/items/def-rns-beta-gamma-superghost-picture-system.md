---
id: def-rns-beta-gamma-superghost-picture-system
kind: definition
title: RNS Beta-Gamma Superghost and Picture System
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: physics
library: physics
deps:
  - post-rns-flat-worldsheet-model
  - def-rns-spin-structures-and-sectors
dependency_roles:
  post-rns-flat-worldsheet-model: physical-assumption
  def-rns-spin-structures-and-sectors: formulation-prerequisite
physical_scope: "Local chiral commuting superconformal ghost system and picture convention for the flat RNS model; no global determinant, BRST nilpotence, or picture-changing isomorphism is asserted."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Oliver Schlotterer, Scattering amplitudes in open superstring theory"
      url: "https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf"
      locator: "§§2.3.2–2.3.6, PDF pp. 64–69, beta-gamma OPE, stress tensor, bosonization, NS/R vacua and pictures."
verification:
  precheck: pending
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
---

## Definition

For one RNS chirality, take a commuting first-order $\beta,\gamma$ system of weights $h_\beta=3/2$ and $h_\gamma=-1/2$, action $S_{\beta\gamma}=(4\pi)^{-1}\int d^2z\,\beta\bar\partial\gamma$, and ordered OPE $\gamma(z)\beta(w)\sim(z-w)^{-1}$. Its modes are
$$\beta(z)=\sum_r\beta_r z^{-r-3/2},\qquad \gamma(z)=\sum_r\gamma_r z^{-r+1/2},$$
with $r\in\mathbb Z+\tfrac12$ in NS and $r\in\mathbb Z$ in R, $[\gamma_r,\beta_s]=\delta_{r+s,0}I$, and all same-species mode commutators zero. The stress tensor is
$$T_{\beta\gamma}=-\frac32:\partial\gamma\,\beta:-\frac12:\gamma\,\partial\beta:.$$

Fix the bosonized convention $\beta=e^{-\phi}\partial\xi$, $\gamma=\eta e^\phi$, with $\phi(z)\phi(w)\sim-\log(z-w)$ and $\eta(z)\xi(w)\sim(z-w)^{-1}$. The fermionic $(\eta,\xi)$ weights are $(1,0)$ and $T_{\eta\xi}=-:\eta\partial\xi:$; the scalar stress tensor is $T_\phi=-\frac12:(\partial\phi)^2:-\partial^2\phi$, giving $h(e^{p\phi})=-p(p+2)/2$. Define ghost number by $j_{\rm gh}=-:\beta\gamma:$ and picture by $j_{\rm pic}=-\partial\phi$, so $\beta,\gamma$ have ghost numbers $-1,+1$ and $e^{p\phi}$ has picture $p$. The canonical NS and R vacua have pictures $-1$ and $-1/2$. The small Hilbert space is $\ker\eta_0$, excluding the independent $\xi_0$ zero-mode partner. Closed strings use an independent antiholomorphic copy.

## Definition references

[[post-rns-flat-worldsheet-model]]

[[def-rns-spin-structures-and-sectors]]

[Oliver Schlotterer, *Scattering amplitudes in open superstring theory*, §§2.3.2–2.3.6](https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf)

## Remarks

The displayed stress tensor and bosonization are formulation conventions. Their local central charge is calculated separately in [[pthm-rns-criticality-central-charge-cancellation]]. Nilpotence of an RNS BRST charge and equivalence of pictures at exceptional momenta are not supplied by this definition.
