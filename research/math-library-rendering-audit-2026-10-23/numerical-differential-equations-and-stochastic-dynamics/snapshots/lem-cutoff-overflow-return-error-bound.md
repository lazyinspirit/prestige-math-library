---
id: lem-cutoff-overflow-return-error-bound
kind: lemma
title: Finite cutoff differs from the unbounded pivot model by a controlled return error
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-finite-sectional-coagulation-fragmentation-balance
  - def-infinite-fixed-pivot-sectional-dynamics
  - thm-finite-sectional-global-ode-and-moment-bounds
  - thm-infinite-fixed-pivot-sectional-global-wellposedness-and-bl-stability
  - lem-second-moment-controls-tail-mass-and-number
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the cutoff residual and Gronwall estimate use finite event sums and explicit tail inequalities.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jitendra Kumar, Numerical approximations of population balance equations in particulate systems, Chapter 2, §2.2
      url: https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §§1–2
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
---

## Statement

Let $G$ be a semi-infinite pivot grid and $R\in G$. Let $\eta_0$ be a positive grid measure in $\mathcal M_w(E)$ and let $\eta_t$ solve the no-cutoff dynamics of [[def-infinite-fixed-pivot-sectional-dynamics]]. Let $\nu_t$ be the finite sectional solution on the initial grid segment $G\cap[a,R]$ from $\nu_0=\eta_0|_{[a,R]}$, extended by zero to $G$. Initialize the finite model's reported reservoir with $L_0=\int_{(R,\infty)}x\,\eta_0(dx)$. If $M_1=M_1(\eta_0)$, then for $0\le t\le T$,
$$d_{BL}(\nu_t,\eta_t)\le e^{C_Tt}\left[\frac{M_1}{R}+\frac{2K_*M_1^2t}{aR}\right],$$
where $C_T$ is the bounded-number stability constant from [[thm-infinite-fixed-pivot-sectional-global-wellposedness-and-bl-stability]]. The reservoir records the finite model's overflow mass exactly; the estimate allows the unbounded model's above-cutoff particles to coagulate or fragment and return mass to the retained range.

## Facts & Assumptions

**Given:** The finite cutoff and unbounded pivot systems share the same grid, kernels and rates below $R$.

[F1] [[alg-finite-sectional-coagulation-fragmentation-balance]]: a product above $R$ is omitted from retained bins and its mass is added to the reservoir; parents are still removed.

[F2] [[thm-finite-sectional-global-ode-and-moment-bounds]]: the finite solution is positive and its retained mass is bounded by the conserved augmented mass $M_1$.

[F3] [[thm-infinite-fixed-pivot-sectional-global-wellposedness-and-bl-stability]]: unbounded-grid solutions conserve first moment, have number at most $M_1/a$, and their vector field is bounded-Lipschitz on number-bounded sets with constant $C_T$.

[F4] [[lem-second-moment-controls-tail-mass-and-number]]: the number in a tail above $r$ is at most its first moment divided by $r$.

## Proof

1.1 At time zero, $\eta_0-\nu_0$ is the restriction of $\eta_0$ to $(R,\infty)$. Since every admissible bounded-Lipschitz test has supremum norm at most $1$, $d_{BL}(\eta_0,\nu_0)\le\eta_0((R,\infty))\le M_1/R$ by [F4]. [given, F3, F4]

1.2 At any finite-cutoff state, the fragmentation gains and all parent-loss terms in $F_\Delta$ agree with those of the no-cutoff field. The only omitted retained-measure gain is $P_\Delta(x+y)$ for parent pairs with $x+y>R$. Their ordered event rate is at most $$\frac{K_*}{2}\iint_{x+y>R}\nu_t(dx)\nu_t(dy)\le K_*M_0(\nu_t)\nu_t((R/2,\infty)).$$ The finite mass bound gives $M_0(\nu_t)\le M_1/a$, while [F4] gives $\nu_t((R/2,\infty))\le2M_1/R$. Each omitted gain pairs with a bounded test by at most its event rate, so $\|F_R(\nu_t)-F_\Delta(\nu_t)\|_{BL}\le2K_*M_1^2/(aR)$. [F1, F2, F4, algebra]

2.1 Write $F_R$ for the retained-measure field of the finite algorithm [F1], and $F_\Delta$ for the no-cutoff field. Subtract the equations for $\nu_t$ and $\eta_t$, add and subtract $F_\Delta(\nu_t)$, and test against any admissible bounded-Lipschitz function. By [F3] the vector-field difference contributes at most $C_Td_{BL}(\nu_t,\eta_t)$; step 1.2 contributes at most $r:=2K_*M_1^2/(aR)$. Taking the supremum and integrating yields $$d(t)\le d(0)+C_T\int_0^td(s)ds+\frac{2K_*M_1^2t}{aR}.$$ Let $g(t)=d(0)+rt+C_T\int_0^td(s)ds$. Then $d\le g$ and $g'\le r+C_Tg$ almost everywhere. If $C_T>0$, multiplying by $e^{-C_Tt}$ and integrating gives $g(t)\le d(0)e^{C_Tt}+r(e^{C_Tt}-1)/C_T\le e^{C_Tt}(d(0)+rt)$; if $C_T=0$, $g(t)=d(0)+rt$. Substituting $d(0)\le M_1/R$ from step 1.1 proves the bound. [F1, F2, F3, step 1.1, step 1.2, algebra] ∎

