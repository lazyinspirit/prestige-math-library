---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-mgrit-two-level-cycle.json
  precheck: n/a
id: alg-mgrit-two-level-cycle
kind: algorithm
title: "A declared two-level MGRIT coarse-correction cycle"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-linear-all-at-once-time-operator
  - lem-mgrit-exact-coarse-elimination
  - def-norm-and-normed-space
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "R. D. Falgout, S. Friedhoff, Tz. V. Kolev, S. P. MacLachlan, and J. B. Schroder, Parallel Time Integration with Multigrid"
      url: "https://www.math.mun.ca/smaclachlan/research/mgrit.pdf"
      locator: "§2.1–2.4, PDF pp. 3–7: all-at-once system, F/C splitting, Parareal connection, and MGRIT V-cycle."
    - title: "Martin J. Gander, Time Parallel Time Integration, Chapter 4: Space-Time Multigrid Methods"
      url: "https://conferences.math.mtu.edu/wp-content/uploads/2022/08/cbms-pint-day-4.pdf"
      locator: "Full 68-slide lecture deck, slides 57–60: ideal coarse correction and FCF relaxation."
    - title: "V. A. Dobrev, Tz. Kolev, N. A. Petersson, and J. B. Schroder, Two-Level Convergence Theory for Multigrid Reduction in Time"
      url: "https://www.unm.edu/~jbschroder/docs/DoKoPeSc2015.pdf"
      locator: "§2 and §3.1–3.2, PDF pp. 4–10: two-level MGRIT and its error-propagation matrix."
---

## Definition

Input: a linear fine-grid system $A_tu=b$ with $N\ge1$ fine intervals as in [[def-linear-all-at-once-time-operator]], a coarsening factor $m\ge2$ dividing $N$ and its C/F partition as in [[lem-mgrit-exact-coarse-elimination]], practical coarse propagators $\Psi_j\in\mathbb R^{d\times d}$ for $1\le j\le N_c:=N/m$, an initial fine-grid iterate $u_{\rm in}$, pre- and post-relaxation choices from $\{F,FCF\}$, a real-valued norm on the fine-grid residual space as in [[def-norm-and-normed-space]], a nonnegative integer cycle budget $J_{\rm cyc}$, and a residual tolerance $\varepsilon\ge0$. The symbol $J_{\rm cyc}$ is the number of permitted cycles; the coarse-interval count is $N_c$ (the letter $J$ in [[lem-mgrit-exact-coarse-elimination]] denotes that lemma's coarse-interval count). The output is the last iterate, its residual norm, the number of completed cycles, and status `converged` or `budget-exhausted`.

In F/C ordering define ideal interpolation $P$ and restriction $R$ by
$$P=\begin{bmatrix}-A_{FF}^{-1}A_{FC}\\ I_C\end{bmatrix}, \qquad R=\begin{bmatrix}-A_{CF}A_{FF}^{-1}&I_C\end{bmatrix}.$$

The exact coarse operator is the Schur complement $RA_tP=A_{CC}-A_{CF}A_{FF}^{-1}A_{FC}$ from [[lem-mgrit-exact-coarse-elimination]]. The practical correction matrix $A_c$ has identity diagonal blocks and subdiagonal blocks $-\Psi_j$ for $2\le j\le N_c$; its first row corresponds to the fixed zero initial correction $z_0=0$. For any right-hand side $\rho$, forward substitution uniquely solves $A_cz=\rho$ by setting $z_0=0$ and, in increasing order for $j=1,\ldots,N_c$, setting $z_j=\rho_j+\Psi_jz_{j-1}$. Thus $A_c$ is invertible even when an individual $\Psi_j$ is singular.

Define the relaxations on $A_tu=b$ as follows. An F-relaxation holds every C-value fixed and, for each coarse interval $j=1,\ldots,N_c$, updates its F-indices $i=(j-1)m+1,\ldots,jm-1$ in increasing order: set $u_1=b_1$ if $i=1$, and otherwise set $u_i=b_i+\Phi_i u_{i-1}$. Different coarse intervals have independent F-updates and may be processed in parallel. A C-relaxation holds every F-value fixed and, for $j=1,\ldots,N_c$ in increasing order, sets $u_{jm}=b_{jm}+\Phi_{jm}u_{jm-1}$; these C-updates are independent because $m\ge2$ and each predecessor is an F-index. An FCF-relaxation applies F-relaxation, then C-relaxation, then F-relaxation. Each relaxation is a finite linear update; write $S_{\rm pre}$ and $S_{\rm post}$ for the error maps of the selected pre- and post-relaxations.

For one cycle from a current iterate $u$, apply the selected pre-relaxation; form $r=b-A_tu$ and $\rho=Rr$; solve $A_cz=\rho$ by the forward substitution above; correct $u\leftarrow u+Pz$; then apply the selected post-relaxation. The exact error-propagation matrix of this fixed cycle is
$$E=S_{\rm post}(I-PA_c^{-1}RA_t)S_{\rm pre}.$$

Initialize $u^{(0)}=u_{\rm in}$ and compute $\|b-A_tu^{(0)}\|$. If this is at most $\varepsilon$, return $u^{(0)}$, zero completed cycles, and status `converged`. Otherwise, for $j_{\rm cyc}=1,\ldots,J_{\rm cyc}$, perform one cycle, call the resulting iterate $u^{(j_{\rm cyc})}$, and compute $\|b-A_tu^{(j_{\rm cyc})}\|$. If this norm is at most $\varepsilon$, return that iterate, $j_{\rm cyc}$ completed cycles, and status `converged`; if not, continue. If all $J_{\rm cyc}$ cycles finish without this condition (including when $J_{\rm cyc}=0$), return the last iterate, its residual norm, and status `budget-exhausted`. The matrix $E$ describes exact arithmetic and exact coarse solves; inexact solves contribute an update defect that needs its own bound.


## Remarks

The first illustration shows the C/F partition for $m=3$ and $N=6$. Index $0$ is prescribed initial data, not an unknown. The C unknowns are at indices $3$ and $6$; the remaining unknowns are F-points.

```tikz
\begin{tikzpicture}[x=1.1cm,y=1cm,every node/.style={font=\small}]
\draw (0,0)--(6,0);
\draw (0,-0.07) rectangle (0.14,0.07);
\node[above] at (0,0.12) {$0$};
\node[below] at (0,-0.18) {fixed};
\foreach \i in {1,2,3,4,5,6} {
  \fill (\i,0) circle (2pt);
  \node[above] at (\i,0.12) {\i};
}
\foreach \i in {1,2,4,5} {\node[below] at (\i,-0.18) {F};}
\foreach \i in {3,6} {\node[below] at (\i,-0.18) {C};}
\draw[<->] (0,0.8)--node[above] {$m=3$} (3,0.8);
\draw[<->] (3,0.8)--node[above] {$m=3$} (6,0.8);
\end{tikzpicture}
```

The second illustration records the order of one cycle. Here $R:(\mathbb R^d)^N\to(\mathbb R^d)^{N_c}$ restricts the residual and $P:(\mathbb R^d)^{N_c}\to(\mathbb R^d)^N$ interpolates the correction, in the F/C ordering above. The solve uses the practical $A_c$; the exact Schur operator remains $RA_tP=A_{CC}-A_{CF}A_{FF}^{-1}A_{FC}$ and is not identified with $A_c$.

```tikz
\begin{tikzpicture}[every node/.style={font=\small},cyclebox/.style={draw,rounded corners,minimum width=7cm,minimum height=0.8cm,align=center}]
\node[cyclebox] (pre) at (0,0) {Selected pre-relaxation};
\node[cyclebox] (res) at (0,-1.3) {Fine residual $r=b-A_tu$; coarse residual $\rho=Rr$};
\node[cyclebox] (solve) at (0,-2.8) {Solve $A_cz=\rho$ with $z_0=0$\\
  $z_j=\rho_j+\Psi_jz_{j-1}$, $j=1,\ldots,N_c$};
\node[cyclebox] (corr) at (0,-4.3) {Fine-grid correction $u\leftarrow u+Pz$};
\node[cyclebox] (post) at (0,-5.6) {Selected post-relaxation};
\draw[->] (pre)--(res);
\draw[->] (res)--(solve);
\draw[->] (solve)--(corr);
\draw[->] (corr)--(post);
\end{tikzpicture}
```

Both figures illustrate the definition; all update rules and the error-propagation formula are specified independently above.
