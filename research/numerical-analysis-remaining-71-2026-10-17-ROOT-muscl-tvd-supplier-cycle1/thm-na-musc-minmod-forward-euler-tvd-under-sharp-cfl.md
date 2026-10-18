---
id: thm-na-musc-minmod-forward-euler-tvd-under-sharp-cfl
kind: theorem
title: Direct forward-Euler MUSCL/minmod is TVD under the sharp two-thirds CFL bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps:
  - def-na-high-resolution-reconstruction
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jérôme Droniou, A Beginner’s Course in Finite Volume Approximation of Scalar Conservation Laws, complete lecture notes"
      url: "https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf"
      locator: "§§3.1–3.3, PDF pp. 31–35: (3.1.2), (3.3.1), and (3.3.8) give exactly this direct reconstruction/update and its sufficient linear-advection CFL bound. The TVD summation and sharpness witness are proved locally below."
verification:
  precheck: pending
---

## Statement

Let $h>0$, $\Delta t\ge0$, $a\in\mathbb R$, and $\mu=|a|\Delta t/h$. Use the direct reconstructed-upwind forward-Euler MUSCL/minmod update of [[def-na-high-resolution-reconstruction]], with no time predictor. The data are either a real bi-infinite sequence with $\operatorname{TV}(U)=\sum_{i\in\mathbb Z}|U_i-U_{i-1}|<\infty$, or a real $N$-periodic sequence, $N\ge1$, with $\operatorname{TV}_N(U)=\sum_{i=0}^{N-1}|U_i-U_{i-1}|$ and indices taken modulo $N$. If $0\le\mu\le2/3$, one update satisfies $\operatorname{TV}(U^+)\le\operatorname{TV}(U)$, respectively $\operatorname{TV}_N(U^+)\le\operatorname{TV}_N(U)$.

The constant $2/3$ is sharp within the original range $0\le\mu\le1$: for every $2/3<\mu\le1$ there are finite-support data of initial variation $2$ whose updated variation is $3\mu>2$. The same witness can be made periodic with period at least seven.

## Facts & Assumptions

**Given:** The stated mesh, time step, velocity, data class and direct forward-Euler update.

[F1] [[def-na-high-resolution-reconstruction]]: put $d_i=U_i-U_{i-1}$ and $m_i=hs_i=\operatorname{minmod}(d_i,d_{i+1})$. For $a>0$, the update is $U_i^+=U_i-\mu[d_i+(m_i-m_{i-1})/2]$; for $a<0$, the upwind trace at the right face is $U_{i+1}-m_{i+1}/2$. Minmod vanishes when either argument is zero or their signs differ, and otherwise has their common sign and magnitude no larger than either argument's magnitude.

## Proof

1.1 First let $a>0$. Whenever $d_i\ne0$, both $m_i/d_i$ and $m_{i-1}/d_i$ lie in $[0,1]$ by [F1], since $d_i$ is an argument of each minmod. Define $C_i=\mu[1+(m_i/d_i-m_{i-1}/d_i)/2]$ in this case. If $d_i=0$, both $m_i$ and $m_{i-1}$ vanish, and define $C_i=\mu$. Thus $\mu/2\le C_i\le3\mu/2$ and, in every case including $d_i=0$, the exact update is $U_i^+=U_i-C_id_i=(1-C_i)U_i+C_iU_{i-1}$. Consequently $0\le C_i\le1$ when $\mu\le2/3$. [given, F1, algebra]

1.2 Subtract the formula in step 1.1 at indices $i$ and $i-1$ to obtain $d_i^+=(1-C_i)d_i+C_{i-1}d_{i-1}$. Its coefficients are nonnegative, so $|d_i^+|\le(1-C_i)|d_i|+C_{i-1}|d_{i-1}|$. For periodic data, sum over one complete period and shift the second finite sum by one index. This gives $\sum_i|d_i^+|\le\sum_i[(1-C_i)+C_i]|d_i|=\sum_i|d_i|$. For bi-infinite data, both nonnegative sums on the right are bounded by $\sum_i|d_i|<\infty$; summing the pointwise inequality and reindexing the absolutely convergent second series gives the same conclusion. In particular the updated data still have finite variation. [step 1.1, algebra]

2.1 For $a<0$, set $V_j=U_{-j}$ and let $m^V_j=\operatorname{minmod}(V_j-V_{j-1},V_{j+1}-V_j)$. Symmetry and oddness of minmod give $m^V_j=-m_{-j}$. The negative-speed update from [F1] is $U_i^+=U_i+\mu[U_{i+1}-U_i-(m_{i+1}-m_i)/2]$. At $i=-j$ this becomes $V_j^+=V_j-\mu[V_j-V_{j-1}+(m^V_j-m^V_{j-1})/2]$, precisely the positive-speed update already treated. Reflection preserves either variation sum, so step 1.2 proves the claim for negative velocity. If $a=0$ or $\Delta t=0$, all flux increments vanish and the update is the identity, which also covers $\mu=0$. [F1, step 1.2, algebra]

3.1 For sharpness, let $a=h=1$, $\Delta t=\mu$, $U_{-1}=U_1=1/2$, $U_0=1$, and $U_i=0$ otherwise. The initial variation is $2$. The only nonzero slope increments are $m_{-1}=1/2$ and $m_1=-1/2$. By [F1], the only potentially nonzero updated entries, in index order $-1,0,1,2$, are $A=1/2-3\mu/4$, $B=1-\mu/4$, $C=1/2+3\mu/4$, and $D=\mu/4$. For $2/3<\mu\le1$, we have $A<0<B<C$ and $0<D<C$, since $C-B=\mu-1/2>0$ and $C-D=1/2+\mu/2>0$. Therefore the updated variation is $-A+(B-A)+(C-B)+(C-D)+D=2(C-A)=3\mu>2$. Periodize these data with any period $N\ge7$; the nonzero slopes and updated entries above remain separated from their periodic copies by zero entries, so the same one-period variation calculation applies. The sufficient bound includes its endpoint $\mu=2/3$, where this witness has variation $2$, while every larger value in the original range fails. [F1, step 1.2, step 2.1, algebra] ∎
