---
id: alg-fas-two-grid-cycle
kind: algorithm
title: "Finite-budget nonlinear FAS two-grid cycle"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "William L. Briggs, Van Emden Henson, and Steve F. McCormick, A Multigrid Tutorial, 2nd ed., Chapter 6"
      url: "https://amath.colorado.edu/~stevem/appm6640/mgtut13notes.pdf"
    - title: "Harald van Brummelen, Basics of Multigrid Methods, SINTEF winter-school lecture notes"
      url: "https://www.sintef.no/globalassets/project/evitameeting/2011/lecture1.pdf"
    - title: "Van Emden Henson, Multigrid Methods for Nonlinear Problems: An Overview, UCRL-JC-150259"
      url: "https://digital.library.unt.edu/ark%3A/67531/metadc1402426/m2/1/high_res_d/15002749.pdf"
---

## Definition

Let $U_h\subseteq\mathbb R^{n_h}$ and $U_H\subseteq\mathbb R^{n_H}$ be open,
with $n_h,n_H\ge1$. Let $F_h:U_h\to\mathbb R^{n_h}$ and
$F_H:U_H\to\mathbb R^{n_H}$ be residual maps, and let $f_h\in\mathbb R^{n_h}$.
The equation on the fine level is $F_h(u)=f_h$. Choose linear maps
$I: \mathbb R^{n_h}\to\mathbb R^{n_H}$ (iterate restriction),
$R: \mathbb R^{n_h}\to\mathbb R^{n_H}$ (residual restriction), and
$P: \mathbb R^{n_H}\to\mathbb R^{n_h}$ (prolongation). No equality among
$I$, $R$, and $P$ is imposed by this definition. Choose positive diagonal
matrices $D^{\rm pre}$ and $D^{\rm post}$, damping factors
$0<\omega_{\rm pre},\omega_{\rm post}\le1$, finite sweep counts
$\nu_{\rm pre},\nu_{\rm post}\in\mathbb N_0$, a finite positive coarse-solver
operation budget $B_H$, and a positive integer $\gamma$.

A **coarse-solver call** with target $g\in\mathbb R^{n_H}$ and initial value
$z\in U_H$ must return within $B_H$ declared operations either an exact selected
root $(v,\texttt{exact-root},0)$ with $F_H(v)=g$, an inexact value
$(v,\texttt{inexact-root},\eta)$ with the explicitly computed residual
$\eta=\|F_H(v)-g\|_2>0$, or one of
$\texttt{branch-failure}$, $\texttt{domain-failure}$, and
$\texttt{budget-exhausted}$. The solver contract requires it to return the
initial value unchanged as `exact-root` when $F_H(z)=g$ and $z$ is the selected
root. A direct formula, an exact local branch, or a finite iterative solver may
be supplied; the definition makes no claim that any solver finds a root from an
arbitrary initial value.

For a starting fine iterate $u\in U_h$, do the following in exact real
arithmetic.

1. Perform $\nu_{\rm pre}$ nonlinear damped-Jacobi sweeps. In each sweep,
form the trial value
$$\widetilde u:=u-\omega_{\rm pre}(D^{\rm pre})^{-1}(F_h(u)-f_h).$$
If $\widetilde u\notin U_h$, return the current valid fine iterate $u$ with
status `domain-failure`; otherwise set $u:=\widetilde u$.

2. Set $u_H=Iu$. If $u_H\notin U_H$, return the last valid fine iterate
with status `domain-failure`. Otherwise set $r_h=f_h-F_h(u)$ and
$$g_H=F_H(u_H)+Rr_h=Rf_h+\tau(u),\qquad \tau(u):=F_H(Iu)-RF_h(u).$$

3. Set $z=u_H$ and initialize a finite diagnostic list $\Delta=()$. For
$t=1,\ldots,\gamma$, call the declared coarse solver on $(g_H,z,B_H)$. On
`branch-failure`, `domain-failure`, or `budget-exhausted`, return the last
valid fine iterate with that status and the diagnostics accumulated so far.
On `exact-root` or `inexact-root`, append the returned status and residual to
$\Delta$, replace $z$ by the returned value, and append any nested diagnostics
returned by the coarse call. Reusing $g_H$ while starting at the current $z$
makes repeated coarse calls a bounded V/W-style cycle.

4. Form the trial correction
$$\widetilde u:=u+P(z-Iu).$$
If $\widetilde u\notin U_h$, return the current valid fine iterate $u$ with
status `domain-failure` and $\Delta$; otherwise set $u:=\widetilde u$.

5. Perform $\nu_{\rm post}$ nonlinear damped-Jacobi sweeps. In each sweep,
form the trial value
$$\widetilde u:=u-\omega_{\rm post}(D^{\rm post})^{-1}(F_h(u)-f_h).$$
If $\widetilde u\notin U_h$, return the current valid fine iterate $u$ with
status `domain-failure` and $\Delta$; otherwise set $u:=\widetilde u$.
Compute the final fine residual
$\eta_h:=\|F_h(u)-f_h\|_2$. Return the resulting iterate with status
`exact-root` and residual $0$ if $\eta_h=0$, and with status `inexact-root`
and residual $\eta_h$ if $\eta_h>0$, together with $\Delta$. Thus the status
used when this procedure is called recursively
always certifies the residual for its own level equation; zero residuals
reported by inner coarse calls do not by themselves certify that the returned
fine iterate is a root.

Every loop count and solver budget is finite. `V` and `W` refer to the cases
$\gamma=1$ and $\gamma=2$. A multi-level cycle uses this two-grid procedure at
each level, with the next-level cycle supplied as the coarse solver and a
finite level cap. Fixed-point consistency, linear reduction, local convergence,
and work bounds are separate claims.

