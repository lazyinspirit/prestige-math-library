---
id: thm-moser-stability-theorem
kind: theorem
title: Moser stability theorem
status: published
origin: pipeline
deps: ["def-countable-choice", "lem-moser-pullback-differentiation-equation", "lem-smooth-parametric-primitives-for-a-smooth-exact-family-on-a-compact-manifold", "thm-time-dependent-vector-fields-have-local-smooth-evolution-operators", "def-the-standard-smooth-step-function"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 7, Theorem 7.3 and proof, pp. 44--45
verification:
  audited: 2026-09-14
  precheck: pass
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be compact and let
$(\omega_t)_{0\le t\le1}$ be a smooth path of symplectic forms whose de Rham
class is independent of $t$. Then there is a smooth isotopy
$\phi_t:M\to M$, $\phi_0=\operatorname{id}_M$, such that
$\phi_t^*\omega_t=\omega_0$ for every $t\in[0,1]$.
Here smoothness on the closed interval has its usual up-to-the-boundary
meaning: in local coordinates the family is locally the restriction of a
jointly smooth family on an open time neighbourhood. No symplectic or
cohomology condition is imposed on such local extensions.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, compact $M$, and the path in the statement.

[F1] A smooth exact family on compact $M$ has jointly smooth primitives.
[[lem-smooth-parametric-primitives-for-a-smooth-exact-family-on-a-compact-manifold]].

[F2] The Moser contraction equation uniquely determines a smooth field and
makes the pulled-back form constant.
[[lem-moser-pullback-differentiation-equation]].

[F3] Smooth time-dependent fields have unique local smooth evolutions.
[[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]].

[F4] The standard smooth step $\tau:\mathbb R\to[0,1]$ is smooth, equals
$0$ on $(-\infty,0]$, equals $1$ on $[1,\infty)$, and is flat at both
endpoints. [[def-the-standard-smooth-step-function]].

## Proof

**Proof technique:** direct.

1.1 Put $\alpha_t=\omega_t-\omega_0$. Constancy of the de Rham class says each $\alpha_t$ is exact. Although $[0,1]$ is not a boundaryless parameter manifold, the *proof* of [F1] constructs one fixed linear primitive operator from a finite good cover, finite spatial homotopy integrals, a finite-dimensional linear solver, and a fixed partition of unity. Apply that same operator pointwise to $\alpha_t$. Every one of its finite operations preserves all one-sided time derivatives and joint spatial smoothness at the closed endpoints, so $\lambda_t=R\alpha_t$ is smooth up to $t=0,1$ and satisfies $d\lambda_t=\alpha_t$. Put $\sigma_t=\dot\lambda_t$; differentiating gives $d\sigma_t=\dot\omega_t$. By [F2], the equations $\iota_{X_t}\omega_t=-\sigma_t$ have a unique jointly smooth solution $X_t$ up to both endpoints. [F1, F2, given, construct]

2.1 We first put the field on a genuinely open time interval without assuming an extension of the forms. Take the step $\tau$ from [F4]. On $0<s<1$ its defining quotient has positive derivative, since $\frac d{ds}\log(\beta(s)/\beta(1-s))=s^{-2}+(1-s)^{-2}>0$; hence it maps $(0,1)$ diffeomorphically onto $(0,1)$. Define $Y_s=\tau'(s)X_{\tau(s)}$ for $0<s<1$ and $Y_s=0$ outside. Every derivative of $\tau$ is flat at $0,1$ by [F4], while all one-sided mixed derivatives of $X_t$ from step 1.1 are continuous on compact $[0,1]\times M$. The product rule therefore shows that $Y_s$ is a smooth time-dependent field on the *open* interval $\mathbb R$. Apply [F3] to $Y$. Fix the Riemannian metric used in [F1]'s construction; $\lVert Y_s\rVert$ is bounded on $[0,1]\times M$. The distance along a trajectory between times $r,s$ is at most its length and at most $C|r-s|$, so a finite-time maximal trajectory is Cauchy. Compactness gives its limit, and [F3] at that interior time extends it. Thus the evolution $\psi_s$ exists through $s=1$, with inverse given by reverse evolution. For $0<t<1$ set $\phi_t=\psi_{\tau^{-1}(t)}$, with $\phi_0=\operatorname{id}$ and $\phi_1=\psi_1$. Changing variables in the coordinate integral equation for $\psi$ shows that, on each short time interval whose trajectory lies in one chart, $\phi_t(p)=\phi_{t_0}(p)+\int_{t_0}^t X_u(\phi_u(p))\,du$ in that chart. The integral equation and the up-to-endpoint smoothness of $X_t$ bootstrap $\phi_t$ and its spatial derivatives to joint smoothness in $(t,p)$ through both endpoints, despite the nonsmooth inverse of $\tau$ there. Each $\phi_t$ is a diffeomorphism, with inverse from the reverse evolution. [F1, F3, F4, step 1.1, given, construct, algebra]

3.1 The curve $\phi_t$ from step 2.1 is the evolution of $X_t$ in the original time parameter. The pullback equation in [F2] and step 1.1 give $\frac d{dt}(\phi_t^*\omega_t)=0$, hence $\phi_t^*\omega_t=\phi_0^*\omega_0=\omega_0$ for the entire closed interval. Empty $M$ uses the empty isotopy. [F2, step 1.1, step 2.1] ∎
