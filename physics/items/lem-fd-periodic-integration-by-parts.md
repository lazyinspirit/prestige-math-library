---
id: lem-fd-periodic-integration-by-parts
kind: lemma
title: Periodic integration by parts on a flat torus
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-periodic-torus-domain
  - cor-mean-value-theorem
dependency_roles:
  def-fd-periodic-torus-domain: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Stefanos Georgiadis, Energy identity for the incompressible Cahn–Hilliard/Navier–Stokes system with non-degenerate mobility"
      url: "https://d-nb.info/1352416549/34"
      locator: "§2, pp. 3–7: periodic mollification and integration-by-parts identities in the T^3 argument; the d-dimensional coordinate proof below is local."
---

## Statement

Let $d\ge 1$, let $g\in C^1_{\rm per}(\mathbb T^d;\mathbb R)$, and let $F\in C^1_{\rm per}(\mathbb T^d;\mathbb R^d)$. Then

$$\int_{\mathbb T^d}\operatorname{div}F\,dx=0,\qquad \int_{\mathbb T^d}\nabla g\cdot F\,dx=-\int_{\mathbb T^d}g\,\operatorname{div}F\,dx.$$

## Statement references

[[def-fd-periodic-torus-domain|Torus, periodic lifts, derivatives, and the Riemann integral convention]]

[[cor-mean-value-theorem|The one-dimensional mean value theorem]]

## Facts & Assumptions

**Given:** An integer $d\ge1$, a scalar field $g\in C^1_{\rm per}(\mathbb T^d;\mathbb R)$, and a vector field $F\in C^1_{\rm per}(\mathbb T^d;\mathbb R^d)$.

[F1] [[def-fd-periodic-torus-domain]]: $\mathbb T^d=\mathbb R^d/(2\pi\mathbb Z)^d$, integration is Riemann integration over $Q_d=[0,2\pi]^d$, fields are periodic lifts, and first derivatives are bounded, uniformly continuous, and Riemann integrable on $Q_d$.

[F2] [[cor-mean-value-theorem]]: if a real function is continuous on a closed interval and differentiable on its interior, some interior derivative equals its average rate of change across the interval.

## Proof

**Given:** The fields and periodic-calculus convention in [F1].

1.1 Fix $j\in\{1,\ldots,d\}$ and $h\in C^1_{\rm per}(\mathbb T^d;\mathbb R)$. Put $\ell_n:=2\pi/n$ and $x_k:=\ell_n k$ for $k\in\{0,\ldots,n-1\}^d$. The uniform-grid Riemann sum $S_n:=\ell_n^d\sum_k\partial_jh(x_k)$ converges to $\int_{\mathbb T^d}\partial_jh\,dx$: if $\omega_j(\delta)$ is the supremum oscillation of $\partial_jh$ between points of $Q_d$ at distance at most $\delta$, the upper-minus-lower Darboux sum on this grid is at most $(2\pi)^d\omega_j(\sqrt d\,\ell_n)$, which tends to $0$ by [F1], and $S_n$ lies between those Darboux sums. [given, F1, construct]

2.1 For each grid point $x_k$, apply [F2] to the one-variable restriction of $h$ along the $j$th coordinate segment of length $\ell_n$. Its difference quotient differs from $\partial_jh(x_k)$ by at most $\omega_j(\ell_n)$. The sum of these difference quotients over each complete $j$-cycle telescopes to $[h(\ldots,2\pi,\ldots)-h(\ldots,0,\ldots)]/\ell_n=0$ by periodicity; when $d=1$ the remaining-coordinate index is the single empty tuple. Hence $|S_n|\le (2\pi)^d\omega_j(\ell_n)\to0$. By step 1.1, $\int_{\mathbb T^d}\partial_jh\,dx=0$. [given, F1, F2, step 1.1, algebra]

3.1 Apply step 2.1 to each component $h=F_j$. The finite sum $\operatorname{div}F=\sum_j\partial_jF_j$ is uniformly continuous; the same Darboux-gap bound from step 1.1, with its own modulus of continuity, proves it is Riemann integrable and that its uniform-grid sums converge. Each such sum is the sum of the corresponding component sums, so taking their limits gives $\int_{\mathbb T^d}\operatorname{div}F\,dx=\sum_{j=1}^d\int_{\mathbb T^d}\partial_jF_j\,dx=0$. [given, F1, step 1.1, step 2.1, algebra]

4.1 The product field $gF$ is periodic. For each component, expanding its difference quotient as $\frac{g(x+he_j)F_j(x+he_j)-g(x)F_j(x)}{h}=\frac{g(x+he_j)-g(x)}{h}F_j(x+he_j)+g(x)\frac{F_j(x+he_j)-F_j(x)}{h}$ and taking $h\to0$ proves $\partial_j(gF_j)=(\partial_jg)F_j+g\,\partial_jF_j$. These derivatives are finite sums of products of bounded uniformly continuous fields, hence uniformly continuous; the Darboux-gap argument of step 1.1 makes them Riemann integrable, so $gF$ qualifies in step 3.1. The same argument makes $\nabla g\cdot F$ and $g\,\operatorname{div}F$ integrable, and the finite Riemann sums are linear. Applying step 3.1 to $gF$ therefore gives $0=\int_{\mathbb T^d}\nabla g\cdot F\,dx+\int_{\mathbb T^d}g\,\operatorname{div}F\,dx$. Rearranging proves the second identity. [given, F1, step 1.1, step 3.1, algebra] ∎
