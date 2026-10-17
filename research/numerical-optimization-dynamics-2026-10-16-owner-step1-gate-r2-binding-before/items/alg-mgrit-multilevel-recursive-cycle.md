---
id: alg-mgrit-multilevel-recursive-cycle
kind: algorithm
title: "Recursive multilevel MGRIT cycles"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-linear-all-at-once-time-operator
  - alg-mgrit-two-level-cycle
  - lem-mgrit-exact-coarse-elimination
  - def-norm-and-normed-space
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "R. D. Falgout, S. Friedhoff, Tz. V. Kolev, S. P. MacLachlan, and J. B. Schroder, Parallel Time Integration with Multigrid"
      url: "https://www.math.mun.ca/smaclachlan/research/mgrit.pdf"
      locator: "§2.4, PDF pp. 6–7: recursive MGRIT V-cycle and exact coarsest solve."
    - title: "Martin J. Gander, Time Parallel Time Integration, Chapter 4: Space-Time Multigrid Methods"
      url: "https://conferences.math.mtu.edu/wp-content/uploads/2022/08/cbms-pint-day-4.pdf"
      locator: "Full lecture notes, slides 57–60: multilevel MGRIT context and FCF relaxation."
---

## Definition

Input: levels $\ell=0,\ldots,L$ with $L\ge1$; fine-grid systems $A_\ell u_\ell=b_\ell$ of the form in [[def-linear-all-at-once-time-operator]]; coarsening factors $m_\ell\ge2$ dividing $N_\ell$ with $N_{\ell+1}=N_\ell/m_\ell$; transfers $P_\ell,R_\ell$ from the F/C construction in [[alg-mgrit-two-level-cycle]]; and pre/post-relaxations selected from its F- and FCF-relaxations. At each level $\ell<L$, form the practical coarse matrix $A_{\ell+1}$ with identity diagonal blocks and subdiagonal blocks $-\Psi_{\ell,j}$ as in [[alg-mgrit-two-level-cycle]]. Each noncoarsest level has a positive integer recursive visit count $\nu_\ell$. Also supply an initial fine-level iterate, a chosen norm on the fine-level residual space as in [[def-norm-and-normed-space]], outer cycle budget $J_{\rm out}\ge0$, and residual tolerance $\varepsilon\ge0$. The hierarchy must provide a nonsingular coarse system at every level and an exact solve on level $L$. V-cycles use $\nu_\ell=1$ and W-cycles use $\nu_\ell=2$. This algorithm gives no existence or convergence claim for a hierarchy that fails these input conditions.

For a recursive call at level $\ell$, perform the following operations on an initial guess $u_\ell$:
1. If $\ell=L$, solve $A_Lu_L=b_L$ exactly by forward substitution and return.
2. Apply the selected pre-relaxation to $A_\ell u_\ell=b_\ell$; compute $r_\ell=b_\ell-A_\ell u_\ell$ and restrict it to $r_{\ell+1}=R_\ell r_\ell$.
3. Set the coarse correction $z_{\ell+1}=0$. Repeat $\nu_\ell$ times: form $\rho_{\ell+1}=r_{\ell+1}-A_{\ell+1}z_{\ell+1}$; recursively apply the level $\ell+1$ cycle to $A_{\ell+1}\delta_{\ell+1}=\rho_{\ell+1}$ from zero initial correction; then set $z_{\ell+1}\leftarrow z_{\ell+1}+\delta_{\ell+1}$.
4. Correct $u_\ell\leftarrow u_\ell+P_\ell z_{\ell+1}$ and apply the selected post-relaxation.

Return the updated fine-level vector when the call completes. At level $0$, check the residual before the first outer cycle and after every completed cycle; return status converged only when the residual tolerance is met. After $J_{\rm out}$ cycles without a verified residual certificate, return the last iterate with status budget-exhausted. Inexact level solves contribute explicit update defects; no such defect is hidden in the exact-arithmetic cycle.

**Cost model.** Let $v_\ell$ be the total number of visits to level $\ell$ in the chosen recursion. At level $\ell$, put $N_c=N_{\ell+1}$ and $N_f=N_\ell$. One F-relaxation makes $N_f-N_c$ fine-propagator calls; one C-relaxation makes $N_c$; one FCF-relaxation makes $2(N_f-N_c)+N_c$. Residual formation and interpolation add their actual propagator applications and communication, which may be cached but are counted if recomputed. If the level-$\ell$ fine/coarse call costs are $c_{\Phi,\ell},c_{\Psi,\ell}$, and synchronization cost is $\kappa_\ell$, the work is $\sum_{\ell=0}^{L-1}v_\ell(n_{\Phi,\ell}c_{\Phi,\ell}+n_{\Psi,\ell}c_{\Psi,\ell}+\kappa_\ell)$ plus the coarsest exact-solve work, where $n_{\Phi,\ell},n_{\Psi,\ell}$ count the calls made by the declared operations. Parallel span also includes the sequential F-points within each coarse interval, coarse solves, communication, and synchronization. No two-grid contraction is transferred to this recursive cycle; convergence requires a bound for its actual full recursive error operator.

