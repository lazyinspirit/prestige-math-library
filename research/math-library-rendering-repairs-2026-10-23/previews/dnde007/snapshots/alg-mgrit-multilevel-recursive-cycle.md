---
id: alg-mgrit-multilevel-recursive-cycle
kind: algorithm
title: "Recursive multilevel MGRIT cycles"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-linear-all-at-once-time-operator
  - alg-mgrit-two-level-cycle
  - lem-mgrit-exact-coarse-elimination
  - def-norm-and-normed-space
justified_by: [lem-mgrit-recursive-work-and-visits]
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
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

No two-grid contraction is transferred to this recursive cycle; convergence requires a bound for its actual full recursive error operator.


## Remarks

For a noncoarsest call, the arrows below show the order of residual restriction, recursive coarse correction, and prolongation. The lower-right box is repeated $\nu_\ell$ times, updating the coarse residual before each recursive call; the recursion terminates with the exact level-$L$ solve. These are procedural arrows, not an assertion that the practical coarse operator equals the exact Schur complement.

```tikz
\begin{tikzpicture}[>=stealth]
\node[draw,rounded corners,align=center,text width=4.7cm,minimum height=1.4cm] (fine) at (0,0) {Pre-relax on level $\ell$\\$r_\ell=b_\ell-A_\ell u_\ell$};
\node[draw,rounded corners,align=center,text width=4.7cm,minimum height=1.4cm] (out) at (7,0) {$u_\ell\leftarrow u_\ell+P_\ell z_{\ell+1}$\\Then post-relax and return};
\node[draw,rounded corners,align=center,text width=4.7cm,minimum height=1.8cm] (rhs) at (0,-3.1) {$r_{\ell+1}=R_\ell r_\ell$\\Initialize $z_{\ell+1}=0$};
\node[draw,rounded corners,align=center,text width=4.7cm,minimum height=1.8cm] (visit) at (7,-3.1) {$\rho_{\ell+1}=r_{\ell+1}-A_{\ell+1}z_{\ell+1}$\\Recursive call from zero gives $\delta_{\ell+1}$\\$z_{\ell+1}\leftarrow z_{\ell+1}+\delta_{\ell+1}$};
\draw[->] (fine) -- node[left] {$R_\ell$} (rhs);
\draw[->] (rhs) -- node[above] {$\nu_\ell$ visits} (visit);
\draw[->] (visit) -- node[right] {$P_\ell$} (out);
\end{tikzpicture}
```

The level-$\ell+1$ recursive call in the box uses right-hand side $\rho_{\ell+1}$ for $A_{\ell+1}\delta_{\ell+1}=\rho_{\ell+1}$. The figure only illustrates the stated procedure; all input conditions, stopping rules, and the absence of an automatic multilevel convergence guarantee remain as in the Definition.
