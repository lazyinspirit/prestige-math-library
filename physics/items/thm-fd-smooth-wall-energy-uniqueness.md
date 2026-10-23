---
id: thm-fd-smooth-wall-energy-uniqueness
kind: theorem
title: "Conditional wall energy and smooth uniqueness"
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-fd-smooth-wall-exterior-solution-domains
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-countable-choice
dependency_roles:
  def-fd-smooth-wall-exterior-solution-domains: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 2, §§3.1.1–3.1.2"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice. Let $\Omega\subset\mathbb R^3$ be a nonempty bounded connected open set with $C^2$ boundary, meaning that after a rigid coordinate change each boundary patch is the graph $z=h(y)$ of a $C^2$ function and $\Omega$ lies locally on one side. Let $n$ be the outward unit normal and let $dS$ be the chart-independent Euclidean surface measure. Fix constant density $\rho>0$, constant viscosity $\eta>0$, slip coefficient $\beta\ge0$, and a continuous force field $b:[0,T]\times\overline\Omega\to\mathbb R^3$. Suppose $u\in C^1([0,T];C^2(\overline\Omega;\mathbb R^3))$ and $p\in C([0,T];C^1(\overline\Omega))$ satisfy
$$\operatorname{div}u=0,\qquad \rho(u_t+u\cdot\nabla u)=\operatorname{div}\sigma+\rho b,\qquad \sigma=-pI+2\eta D,\qquad D=\frac{\nabla u+(\nabla u)^{\mathsf T}}2.$$
For a vector $a$, write $a_{\tan}=a-(a\cdot n)n$. Under either stationary no-slip data $u|_{\partial\Omega}=0$ or impermeable Navier-slip data $u\cdot n=0$ and $(\sigma n)_{\tan}=-\beta u_{\tan}$, define $K(t)=\frac12\rho\int_\Omega|u(t,x)|^2\,dx$. In the no-slip case,
$$K'(t)=\rho\int_\Omega b\cdot u\,dx-2\eta\int_\Omega|D|^2\,dx;$$
in the slip case,
$$K'(t)=\rho\int_\Omega b\cdot u\,dx-2\eta\int_\Omega|D|^2\,dx-\beta\int_{\partial\Omega}|u_{\tan}|^2\,dS.$$
If two smooth velocity solutions satisfy the same equation, force, initial velocity, density, viscosity, and selected wall law, then their velocities are equal on $[0,T]$. This is conditional on the given smooth solutions and asserts no wall-flow existence theorem.

## Statement references

[[def-fd-smooth-wall-exterior-solution-domains]]

[[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]

[[def-surface-integral-on-a-compact-c-one-hypersurface]]

[[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

[Tong, Fluid Mechanics, Chapter 2, §§3.1.1–3.1.2](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

## Facts & Assumptions

**Given:** Countable Choice and the smooth fields, equation, constants, and boundary data in the Statement.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[A2] Adopted mathematical hypotheses: the constant-density incompressible stress-form equation and one of the two boundary laws displayed in the Statement hold for the given smooth fields. No existence or material-law assertion is made.

[F1] [[def-fd-smooth-wall-exterior-solution-domains]]: a bounded wall domain has C2 boundary; its velocity is C1 in time and C2 in space, and its pressure is C1 in space.

[F2] [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]: a bounded C1 domain is locally a one-sided C1 graph and has the outward normal given by that graph. The stated C2 boundary charts are C1 charts of this class.

[F3] [[def-surface-integral-on-a-compact-c-one-hypersurface]]: the surface integral uses the Gram-density chart construction and its chart-independent surface measure.

[F4] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]: under Countable Choice, for a bounded C1 domain and a vector field C1 up to the boundary, $\int_\Omega\operatorname{div}F\,dx=\int_{\partial\Omega}F\cdot n\,dS$. The present C2 domain is bounded C1, and the flux fields below are C1 up to its boundary.

## Proof

1.1 Define the flux $F_c=\frac12\rho|u|^2u$. The wall-domain definition [F1] gives C2 spatial regularity for $u$, and the C2 boundary is a bounded C1 domain by [F2]; hence this flux is C1 up to the boundary and [F4] applies. The product rule gives $\operatorname{div}F_c=\rho(u\cdot\nabla u)\cdot u+\frac12\rho|u|^2\operatorname{div}u=\rho(u\cdot\nabla u)\cdot u$. The resulting boundary flux uses the surface measure [F3] and equals $\frac12\rho\int_{\partial\Omega}|u|^2u\cdot n\,dS$, which vanishes under either wall law: no-slip has $u=0$, and impermeable slip has $u\cdot n=0$. [given, A1, A2, F1, F2, F3, F4, algebra]

1.2 The tensor $\sigma$ is C1 up to the boundary by [F1] and the stated regularity of $u,p$. Applying [F4] to the vector field with components $(F_\sigma)_j=\sum_i u_i\sigma_{ij}$ yields $\int_\Omega u\cdot\operatorname{div}\sigma\,dx=\int_{\partial\Omega}u\cdot\sigma n\,dS-\int_\Omega\sigma:\nabla u\,dx$. The C1-domain and surface-measure conventions [F2], [F3] match this use. Since $\sigma=-pI+2\eta D$, $\sigma:\nabla u=-p\operatorname{div}u+2\eta D:\nabla u=2\eta|D|^2$: the pressure term vanishes, and the symmetric matrix $D$ is orthogonal to the skew-symmetric part of $\nabla u$. [given, A1, A2, F1, F2, F3, F4, algebra]

2.1 Take the inner product of the momentum equation with $u$ and integrate. The time term is $K'(t)$, the convective term vanishes by step 1.1, and step 1.2 gives the stress work. In the no-slip case the boundary work is zero. In the slip case $u\cdot n=0$ and $(\sigma n)_{\tan}=-\beta u_{\tan}$ imply $u\cdot\sigma n=-\beta|u_{\tan}|^2$. Substitution gives exactly the two stated energy balances. [given, A2, step 1.1, step 1.2, algebra]

2.2 Let $u,\widetilde u$ be two solutions with the same data and set $w=\widetilde u-u$, $q=\widetilde p-p$, and $\sigma_w=-qI+2\eta D(w)$. Subtracting their equations gives $\rho(w_t+\widetilde u\cdot\nabla w+w\cdot\nabla u)=\operatorname{div}\sigma_w$. Pair with $w$ and integrate. The transport term is zero by [F4], $\operatorname{div}\widetilde u=0$, and the common impermeable/no-slip trace. As in step 1.2, $\sigma_w:\nabla w=2\eta|D(w)|^2$. The C1 boundary and surface convention [F2], [F3] and the C1 flux regularity from [F1] justify this integration; the boundary term is zero for no-slip and is $-\beta|w_{\tan}|^2$ for the same linear slip traction law. Therefore $\frac12\frac{d}{dt}\|w\|_2^2\le\|\nabla u\|_\infty\|w\|_2^2$. [given, A1, A2, F1, F2, F3, F4, step 1.2, algebra]

3.1 Since $w(0)=0$, multiplying the inequality in step 2.2 by $\exp(-2\int_0^t\|\nabla u(s)\|_\infty ds)$ gives a nonincreasing nonnegative function initially zero. Thus $\|w(t)\|_2=0$ and the two continuous velocity fields agree everywhere on $[0,T]\times\overline\Omega$. [given, step 2.2, algebra] ∎