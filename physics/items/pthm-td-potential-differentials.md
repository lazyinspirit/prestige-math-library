---
id: pthm-td-potential-differentials
kind: physics-theorem
title: Differentials of the thermodynamic potentials
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Exact local differential identities on positive-temperature, C2, single-phase energy-representation charts with the stated Legendre coordinate maps invertible; no identity is asserted at singular response charts or phase boundaries.
deps:
  - pthm-td-local-energy-representation
  - def-td-legendre-potentials
  - lem-tdmath-smooth-partial-legendre-transform-differential
dependency_roles:
  pthm-td-local-energy-representation: physical-result
  def-td-legendre-potentials: formulation-prerequisite
  lem-tdmath-smooth-partial-legendre-transform-differential: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §2.7
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.07:_Thermodynamic_Potentials
    - title: Jeremy Tatum, Heat and Thermodynamics, §12.5, Summary, Maxwell Relations, and Gibbs-Helmholtz Relations
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/12:_Free_Energy/12.05:_Summary_the_Maxwell_Relations_and_the_Gibbs-Helmholtz_Relations
dependency_level: 8
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

On a valid local energy-representation chart from [[pthm-td-local-energy-representation]], let $s,V,n_j,U,T,p,\mu_j$ and the potentials $H,F,G,\Omega$ be as defined in [[def-td-legendre-potentials]]. On every open neighborhood where the corresponding natural-coordinate maps have their stated $C^1$ inverses, the potentials are C2 and their differentials are

$$dU=T\,ds-p\,dV+\sum_{j=1}^r\mu_j\,dn_j,\qquad dH=T\,ds+V\,dp+\sum_{j=1}^r\mu_j\,dn_j,$$

$$dF=-s\,dT-p\,dV+\sum_{j=1}^r\mu_j\,dn_j,\qquad dG=-s\,dT+V\,dp+\sum_{j=1}^r\mu_j\,dn_j,$$

$$d\Omega=-s\,dT-p\,dV-\sum_{j=1}^r n_j\,d\mu_j.$$

All differentials are local state-function differentials. They do not assert that heat or work is an exact differential on process space.

## Facts & Assumptions

**Given:** A fixed constitution $c$, an open C2 single-phase chart in coordinates $(s,V,n_1,\ldots,n_r)$, the local energy representation, and the valid natural-coordinate inverse charts named in the Statement. Use SI units: $U,H,F,G,\Omega$ in joules; $s$ in $\mathrm{J\,K^{-1}}$; $T$ in kelvins; $V$ in $\mathrm{m^3}$; $p$ in pascals; $n_j$ in moles; and $\mu_j$ in $\mathrm{J\,mol^{-1}}$.

[F1] [[pthm-td-local-energy-representation]]: Its Statement gives $U_{c,s}=T_c$, $U_{c,V}=-p_c$, and $U_{c,n_j}=\mu_{c,j}$ on a local C2 chart. The carrier is registered in batch 8; its current proof uses the C1 graph interface of the batch-4 draft `thm-tdmath-local-implicit-rank`. That supplier's Step 1 readiness record is authoring status, not independent proof acceptance, so this use remains conditional on its mathematical review.

[F2] [[def-td-legendre-potentials]]: $H=U+pV$, $F=U-Ts$, $G=F+pV$, and $\Omega=F-\sum_j\mu_jn_j$ on the stated inverse charts.

[F3] [[lem-tdmath-smooth-partial-legendre-transform-differential]]: For a C2 scalar function and an assumed C1 local inverse of its conjugate-coordinate map, the partial Legendre transform has differential $-u\cdot dx+D_zf\cdot dz$.

## Proof

1.1 By [F1], the coordinate derivative of $U$ is $dU=U_s\,ds+U_V\,dV+\sum_jU_{n_j}\,dn_j=T\,ds-p\,dV+\sum_j\mu_j\,dn_j$. This step is conditional on the actual supplier interface and proof status recorded in [F1]. [given, F1, algebra]

2.1 Apply [F3] to the $V$ transform with conjugate coordinate $-p=U_V$ and to the $s$ transform with conjugate coordinate $T=U_s$. With the signs fixed in [F2], this gives $dH=T\,ds+V\,dp+\sum_j\mu_j\,dn_j$ and $dF=-s\,dT-p\,dV+\sum_j\mu_j\,dn_j$. [F2, F3, step 1.1]

2.2 Apply [F3] to the joint $(s,V)$ transform with conjugates $(T,-p)$. The definition [F2] has $G=U-Ts+pV$, so the transform differential is $dG=-s\,dT+V\,dp+\sum_j\mu_j\,dn_j$. [F2, F3, step 1.1]

3.1 Apply [F3] to the joint $(s,n)$ transform with conjugates $(T,\mu)$. The definition [F2] has $\Omega=U-Ts-\sum_j\mu_jn_j$, so the transform differential is $d\Omega=-s\,dT-p\,dV-\sum_jn_j\,d\mu_j$. [F2, F3, step 1.1] ∎

## Remarks

The argument is a complete conditional deduction from the current local-energy statement. Its chart and derivative interface match the use. The supplier's proof remains a draft conditional on the registered batch-4 implicit-rank theorem; neither supplier readiness record is independent proof acceptance. This proof-status gap is recorded in batch 9 readiness evidence.
