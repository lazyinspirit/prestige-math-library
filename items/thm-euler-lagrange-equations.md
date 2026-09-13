---
id: thm-euler-lagrange-equations
kind: theorem
title: Euler–Lagrange equations
status: published
origin: pipeline
deps: ["def-lagrangian-action-functional-on-curves", "thm-integration-by-parts"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 19, Euler--Lagrange derivation, pp. 112--114
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

A $C^2$ fixed-endpoint curve is stationary for $\mathcal S_L$ if and only if,
in every coordinate chart along the curve,

$$\frac d{dt}\frac{\partial L}{\partial v^i}(q(t),\dot q(t))-\frac{\partial L}{\partial q^i}(q(t),\dot q(t))=0\qquad(1\le i\le\dim Q).$$

## Facts & Assumptions

**Given:** A smooth Lagrangian $L$ and a $C^2$ curve with fixed endpoints.

[F1] Stationarity is defined using all smooth fixed-endpoint variations.
[[def-lagrangian-action-functional-on-curves]].

[F2] Integration by parts moves one time derivative and exposes the endpoint
term. [[thm-integration-by-parts]].

## Proof

**Proof technique:** direct.

1.1 On a chart subinterval, a variation field $\eta^i(t)=\partial_s q_s^i|_{s=0}$ with zero endpoint values gives, by differentiation under the finite integral, $$\delta\mathcal S_L=\int_a^b\left(L_{q^i}\eta^i+L_{v^i}\dot\eta^i\right)dt.$$ [F1, given, algebra]

2.1 Apply [F2]. The boundary term $[L_{v^i}\eta^i]_a^b$ vanishes, leaving $\delta\mathcal S_L=\int_a^b(L_{q^i}-\frac d{dt}L_{v^i})\eta^i\,dt$. Thus the displayed equations imply stationarity. [F2, step 1.1]

3.1 Conversely, if one continuous coefficient $E_i=L_{q^i}-\frac d{dt}L_{v^i}$ were nonzero at an interior time, it would retain one strict sign on a smaller interval. Choosing a nonnegative smooth bump $\eta^i$ supported there and all other components zero would make the integral in step 2.1 nonzero, contradicting stationarity. Hence all $E_i$ vanish. Variations supported in chart subintervals cover the curve, proving the coordinate-independent equivalence. [F1, step 2.1, construct] ∎
