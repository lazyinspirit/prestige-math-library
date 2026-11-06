---
id: cex-cmp-interacting-kaluza-klein-truncation-sources-omitted-mode
kind: counterexample
title: Interactions source an omitted Kaluza–Klein harmonic
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
page: cmp-kaluza-klein-reduction-and-effective-theory
dependency_level: 8
physical_scope: "A five-dimensional classical real scalar toy model on a bounded flat four-dimensional Lorentzian domain times a compact spacelike circle. This counterexample demonstrates mode sourcing and is not a string compactification, stability result, or claim about gravitational backreaction."
deps:
  - def-cmp-kaluza-klein-reduction-ansatz-and-frames
  - def-cmp-consistent-truncation
dependency_roles:
  def-cmp-kaluza-klein-reduction-ansatz-and-frames: formulation-prerequisite
  def-cmp-consistent-truncation: formulation-prerequisite
aliases: []
generation:
  role: counterexample
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
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Josep M. Pons and Pere Talavera, Consistent and Inconsistent Truncations: Some Results and the Issue of the Correct Uplifting of Solutions, arXiv:hep-th/0309079v2"
      url: "https://arxiv.org/pdf/hep-th/0309079v2"
      locator: "Introduction and §2, PDF pp. 3–11; omitted equations and the difference between restricted stationarity and solution uplift"
---

## Statement refuted

For this interacting model, the one-harmonic ansatz $\Phi(x,y)=u(x)\cos(y/R)$ is a consistent truncation of the full five-dimensional scalar equation.

## Facts & Assumptions

**Given:** Let $\Omega\subset\mathbb R^{1,3}$ be a bounded domain with smooth boundary and flat metric of signature $(-,+,+,+)$. On $\Omega\times S^1_R$, with $y\sim y+2\pi R$ and $R>0$, take a real periodic scalar and the action
$$S=-\int_\Omega d^4x\int_0^{2\pi R}dy\left[\frac12\partial_M\Phi\partial^M\Phi+\frac12m_0^2\Phi^2+\frac\lambda4\Phi^4\right],\qquad \lambda>0,$$
with $m_0^2=-(R^{-2}+\mu^2)$ for fixed $\mu>0$. Use $\hbar=c=1$: $[R]=\mathrm{length}$, $[m_0^2]=[\mu^2]=(\mathrm{length})^{-2}$, $[\mu]=(\mathrm{length})^{-1}$, $[\lambda]=\mathrm{length}$, and $[\Phi]=[u]=(\mathrm{length})^{-3/2}$. These dimensions make the five-dimensional action dimensionless.

[F1] [[def-cmp-kaluza-klein-reduction-ansatz-and-frames]]: the flat product circle and its mode restriction are an explicit ansatz specialization.

[F2] [[def-cmp-consistent-truncation]]: consistency requires every reduced solution to satisfy every full equation, including omitted harmonics.

[A1] Impose fixed boundary values on $\partial\Omega$ and define the variational equations using smooth variations compactly supported in the interior of $\Omega\times S^1_R$; periodicity removes the circle boundary term. The retained field profile is exactly $u(x)\cos(y/R)$, and the action has no other fields or interactions. The interior Euler–Lagrange equations are local; for either constant solution below, choose matching constant boundary data.

## Counterexample

1.1  The circle integrals are $\int_0^{2\pi R}\cos^2(y/R)dy=\pi R$, $\int_0^{2\pi R}\sin^2(y/R)dy=\pi R$, and $\int_0^{2\pi R}\cos^4(y/R)dy=3\pi R/4$. Substituting the ansatz into [A1] therefore gives
$$S_r=-\pi R\int_\Omega d^4x\left[\frac12(\partial u)^2-\frac12\mu^2u^2+\frac{3\lambda}{16}u^4\right].$$
The quartic coefficient follows from $(\lambda/4)(3\pi R/4)=3\lambda\pi R/16$. [given, A1, F1, algebra]

2.1  Varying $S_r$ yields $\Box_4u+\mu^2u-(3\lambda/4)u^3=0$. Its constant solutions include $u=0$ and $u=u_0$ with $u_0^2=4\mu^2/(3\lambda)$, which is real and nonzero since $\mu,\lambda>0$. The reduced potential grows as $+3\lambda u^4/16$ at large $|u|$, so this stationary point is not an artifact of an unbounded quartic action. [given, A1, step 1.1, algebra]

3.1  Varying the full action gives $\Box_4\Phi+\partial_y^2\Phi-m_0^2\Phi-\lambda\Phi^3=0$. At $u=u_0$,
$$\Box_4\Phi+\partial_y^2\Phi-m_0^2\Phi-\lambda\Phi^3 =\mu^2u_0\cos(y/R)-\lambda u_0^3\cos^3(y/R) =-\frac{\lambda u_0^3}{4}\cos(3y/R),$$
using $\cos^3z=(3\cos z+\cos3z)/4$ and $\lambda u_0^2=4\mu^2/3$. This residual is not identically zero, so the reduced solution fails the full equation in the omitted third harmonic. [given, F2, A1, step 2.1, algebra]

4.1  By [F2], one reduced solution that does not uplift refutes the asserted consistent-truncation claim. The interaction creates the omitted harmonic even though the quadratic circle modes are orthogonal; this example establishes no general impossibility theorem for nonlinear or symmetry-protected truncations. [given, F2, step 3.1, algebra] ∎

## Remarks

The mass parameter is deliberately tachyonic in this toy scalar model, while the positive quartic makes the reduced potential bounded below. No stability, vacuum, or string-theoretic interpretation is claimed.
