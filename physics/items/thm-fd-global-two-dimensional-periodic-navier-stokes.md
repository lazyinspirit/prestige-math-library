---
id: thm-fd-global-two-dimensional-periodic-navier-stokes
kind: theorem
title: "Global smooth two-dimensional periodic Navier–Stokes"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - thm-fd-smooth-periodic-incompressible-ivp
  - thm-fd-smooth-vorticity-identities
  - thm-fd-smooth-sobolev-continuation
  - lem-fd-2d-fourier-log-velocity-bound
  - lem-fd-2d-transport-commutator-l1-bound
  - def-fd-periodic-fourier-sobolev-spaces
  - def-countable-choice
dependency_roles:
  thm-fd-smooth-periodic-incompressible-ivp: mathematical-premise
  thm-fd-smooth-vorticity-identities: mathematical-premise
  thm-fd-smooth-sobolev-continuation: mathematical-premise
  lem-fd-2d-fourier-log-velocity-bound: mathematical-premise
  lem-fd-2d-transport-commutator-l1-bound: mathematical-premise
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sergei Kuksin and Armen Shirikyan, Mathematics of Two-Dimensional Turbulence, Chapter 2, §§2.1.5–2.1.6"
      url: "https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf"
      locator: "PDF pp. 35–51; Theorem 2.1.13 and its complete Galerkin proof, and Theorem 2.1.18. The present proof gives a separate Fourier-log continuation argument."
    - title: "Thomas Y. Hou, Blow-up or no blow-up?, lecture notes, §3"
      url: "https://math.stanford.edu/~ryzhik/SCHOOL-13/hou_notes.pdf"
      locator: "PDF pp. 99–101, equations (3.1)–(3.4), for the energy and vorticity identities in their strong 3D context; the global conclusion here is proved only in 2D."
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

Assume Countable Choice. Let $\nu>0$ and let $u_0:Q_2\to\mathbb R^2$ be a smooth real divergence-free field on $Q_2=\mathbb R^2/(2\pi\mathbb Z)^2$. Use normalized measure $d\mu=(2\pi)^{-2}dx$, coefficients $\widehat f(k)=\int_{Q_2}f(x)e^{-ik\cdot x}\,d\mu(x)$, weights $w_k=(1+|k|^2)^{1/2}$, and componentwise norms $\|f\|_{H^m}^2=\sum_{k\in\mathbb Z^2}w_k^{2m}|\widehat f(k)|^2$. The unique maximal smooth periodic solution supplied by the local incompressible theorem,
$$u_t+(u\cdot\nabla)u=-\nabla\pi+\nu\Delta u,\qquad \operatorname{div}u=0,\qquad u(0)=u_0,$$
exists for all $t\ge0$ and is unique among smooth solutions with these data. For each integer $m\ge4$ there is a constant $C_m$ depending only on $m$ such that
$$\sqrt{\log(e+\|u(t)\|_{H^m})}\le \sqrt{\log(e+\|u_0\|_{H^m})}+C_m\left[t+\|\omega_0\|_{L^2}\sqrt{t\left(t+\frac1{2\nu}\right)}\right],\qquad \omega_0=\partial_1(u_0)_2-\partial_2(u_0)_1.$$
This is a theorem for positive viscosity on the two-dimensional periodic domain; it asserts no global regularity for three-dimensional Navier–Stokes or for inviscid Euler.

## Statement references

[[thm-fd-smooth-periodic-incompressible-ivp]]

[[thm-fd-smooth-vorticity-identities]]

[[thm-fd-smooth-sobolev-continuation]]

[[lem-fd-2d-fourier-log-velocity-bound]]

[[lem-fd-2d-transport-commutator-l1-bound]]

[Kuksin and Shirikyan, *Mathematics of Two-Dimensional Turbulence*, Chapter 2, §§2.1.5–2.1.6](https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf)

[Hou, *Blow-up or no blow-up?*, §3](https://math.stanford.edu/~ryzhik/SCHOOL-13/hou_notes.pdf)

## Facts & Assumptions

**Given:** Countable Choice, $\nu>0$, the normalized Fourier conventions and smooth divergence-free data in the Statement.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] [[thm-fd-smooth-periodic-incompressible-ivp]]: for smooth real divergence-free data, $d=2$, integer $s\ge4$, and fixed $\nu\ge0$, the normalized periodic full incompressible system has a unique local smooth solution. Its local lifespan is positive.

[F2] [[thm-fd-smooth-vorticity-identities]]: on every interval of a given smooth two-dimensional solution, $\omega=\partial_1u_2-\partial_2u_1$ satisfies $\omega_t+u\cdot\nabla\omega=\nu\Delta\omega$ and $\frac12\frac{d}{dt}\|\omega\|_2^2=-\nu\|\nabla\omega\|_2^2$.

[F3] [[lem-fd-2d-fourier-log-velocity-bound]]: for every smooth divergence-free field and integer $m\ge4$, $S(u)=\sum_{k\ne0}|k||\widehat u(k)|\le C_m(1+\|\omega\|_{H^1}\sqrt{\log(e+\|u\|_{H^m})})$.

[F4] [[lem-fd-2d-transport-commutator-l1-bound]]: for smooth divergence-free $u$ on the normalized two-torus and integer $m\ge4$, $\|[\Lambda^m,u\cdot\nabla]u\|_2\le C_m S(u)\|u\|_{H^m}$, where $S(u)=\sum_{k\ne0}|k||\widehat u(k)|$.

[F5] [[thm-fd-smooth-sobolev-continuation]]: if a maximal smooth periodic incompressible solution has finite maximal time and bounded $H^4$ norm up to that time, it extends smoothly beyond it.

[F6] [[def-fd-periodic-fourier-sobolev-spaces]]: $\Lambda^m$ is the self-adjoint Fourier multiplier $\widehat{\Lambda^m f}(k)=w_k^m\widehat f(k)$, commutes with spatial derivatives, and defines the stated $H^m$ norm.

## Proof

**Proof technique:** Derive a logarithmic-in-$H^m$ differential estimate from the 2D enstrophy balance, the proved lattice bound, and the Fourier commutator estimate; then apply the local continuation criterion.

1.1 By [F1], local smooth solutions exist and are unique for every smooth restart datum. Uniqueness makes solutions with the same data agree on overlaps, so their union defines a unique maximal smooth solution $u$ on an interval $[0,T^*)$, where $T^*$ is the supremum of its right endpoints. [given, A1, F1]

1.2 For $0\le t<T^*$, [F2] and integration from $0$ to $t$ give $\|\omega(t)\|_2^2+2\nu\int_0^t\|\nabla\omega(s)\|_2^2\,ds=\|\omega_0\|_2^2$. Therefore, with $B(t)=\|\omega(t)\|_{H^1}$, $\int_0^tB(s)^2\,ds\le\|\omega_0\|_2^2(t+(2\nu)^{-1})$. [given, F2, algebra]

1.3 Fix an integer $m\ge4$ and put $Y(t)=\|u(t)\|_{H^m}$ and $S(t)=\sum_{k\ne0}|k||\widehat u(t,k)|$. Pair the full equation after applying $\Lambda^m$ with $\Lambda^m u$. The pressure term vanishes because $\operatorname{div}\Lambda^mu=0$ and periodic integration by parts applies. Writing $\Lambda^m(u\cdot\nabla u)=u\cdot\nabla\Lambda^m u+[\Lambda^m,u\cdot\nabla]u$, the first term has integral $\frac12\int u\cdot\nabla|\Lambda^mu|^2d\mu=0$ by incompressibility and periodicity. The viscous term is $-\nu\|\nabla u\|_{H^m}^2\le0$, while [F4] and Cauchy–Schwarz bound the remaining commutator pairing by $C_mSY^2$. Hence $\frac12(Y^2)'\le C_mSY^2$. For $Y_\epsilon=(Y^2+\epsilon^2)^{1/2}$ with $\epsilon>0$, differentiation gives $Y_\epsilon'\le C_mSY^2/Y_\epsilon\le C_mSY_\epsilon$. [given, F4, F6, algebra]

2.1 Set $Z_\epsilon=\log(e+Y_\epsilon)\ge1$. By [F3], $S\le C_m(1+B\sqrt{\log(e+Y)})\le C_m(1+B\sqrt{Z_\epsilon})$. Step 1.3 therefore gives $Z_\epsilon'\le C_m(1+B\sqrt{Z_\epsilon})$ and $(\sqrt{Z_\epsilon})'\le C_m(1+B)$, since $Z_\epsilon\ge1$. [given, F3, step 1.3, algebra]

3.1 Integrating step 2.1 and applying Cauchy–Schwarz in time with step 1.2 yields
$$\sqrt{Z_\epsilon(t)}\le\sqrt{Z_\epsilon(0)}+C_m\left[t+\|\omega_0\|_2\sqrt{t\left(t+\frac1{2\nu}\right)}\right].$$
Letting $\epsilon\downarrow0$ proves the displayed estimate in the Statement for each $m\ge4$ and every $t<T^*$. [given, step 1.2, step 2.1, algebra]

4.1 If $T^*<\infty$, step 3.1 with $m=4$ and $t<T^*$ has a finite right-hand side bounded uniformly by replacing $t$ with $T^*$. Thus $\sup_{t<T^*}\|u(t)\|_{H^4}<\infty$. By [F5], the solution extends smoothly past $T^*$, contradicting maximality. Hence $T^*=\infty$. [given, F5, step 3.1]

5.1 The local theorem [F1] gives smoothness and uniqueness on every restart interval, so the maximal solution is smooth on each compact time interval. Fix any $T>0$ and let $\tau$ be the supremum of times through which two global smooth solutions agree on $[0,\tau]$. They agree at $\tau$ by continuity. Starting [F1] from their common value at $\tau$ gives a positive local interval on which uniqueness extends their agreement; therefore $\tau$ cannot be less than $T$. As $T$ is arbitrary, they agree for all time. Since $T^*=\infty$, step 3.1 supplies the asserted bound for every finite $t$ and every integer $m\ge4$. [given, F1, step 3.1, step 4.1] ∎
