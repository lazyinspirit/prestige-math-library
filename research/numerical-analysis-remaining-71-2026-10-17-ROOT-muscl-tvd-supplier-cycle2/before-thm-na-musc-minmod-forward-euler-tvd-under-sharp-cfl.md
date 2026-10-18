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
      locator: "§§3.1–3.3, PDF pp. 31–35: equation (3.1.2) is the direct MUSCL update, equation (3.3.1) is minmod, and equation (3.3.8) gives the sufficient CFL restriction. The variation estimate, signed-velocity reduction and sharpness are proved locally."
verification:
  precheck: pass
---

## Statement

Let $h>0$, $\Delta t\ge0$, $a\in\mathbb R$, and $\mu=|a|\Delta t/h$. Use the direct reconstructed-upwind forward-Euler update for scalar linear advection from [[def-na-high-resolution-reconstruction]], with the stated MUSCL/minmod reconstruction and no time predictor; write $U^+$ for the sequence after one such update. The data are either a real bi-infinite sequence with finite discrete total variation
$$\operatorname{TV}(U)=\sum_{i\in\mathbb Z}|U_i-U_{i-1}|<\infty,$$
or a real $N$-periodic sequence, for an integer $N\ge1$, with
$$\operatorname{TV}_N(U)=\sum_{i=0}^{N-1}|U_i-U_{i-1}|,$$
where periodic indices are taken modulo $N$. If $0\le\mu\le2/3$, one update satisfies $\operatorname{TV}(U^+)\le\operatorname{TV}(U)$ in the bi-infinite case and $\operatorname{TV}_N(U^+)\le\operatorname{TV}_N(U)$ in the periodic case.

The constant $2/3$ is sharp within the original range $0\le\mu\le1$: for every $2/3<\mu\le1$ there are finite-support data of variation $2$ whose updated variation is $3\mu>2$. For every period $N\ge7$, the same witness periodized with period $N$ has the same strict increase.

## Facts & Assumptions

**Given:** $h>0$, $\Delta t\ge0$, $a\in\mathbb R$, the direct forward-Euler MUSCL/minmod update for scalar linear advection, and either a bi-infinite real sequence of finite discrete total variation or an $N$-periodic real sequence with $N\ge1$.

[F1] [[def-na-high-resolution-reconstruction]]: the MUSCL/minmod slope is $s_i=h^{-1}\operatorname{minmod}(U_i-U_{i-1},U_{i+1}-U_i)$, with face states $U_i\pm hs_i/2$. Minmod vanishes when either argument is zero or their signs differ, and otherwise has their common sign and magnitude no larger than either argument's magnitude.

[F2] [[def-na-high-resolution-reconstruction]]: for $a>0$, the direct update is $U_i^+=U_i-\mu[d_i+(m_i-m_{i-1})/2]$, where $d_i=U_i-U_{i-1}$ and $m_i=hs_i$. For $a<0$, the fluxes are $F_{i+1/2}=a(U_{i+1}-m_{i+1}/2)$ and $F_{i-1/2}=a(U_i-m_i/2)$.

## Proof

1.1 First suppose $a>0$. If $d_i\ne0$, then $m_i/d_i$ and $m_{i-1}/d_i$ lie in $[0,1]$: in each minmod, $d_i$ is one argument, so a nonzero output has the sign of $d_i$ and magnitude at most $|d_i|$. Set
$$C_i=\mu\left[1+\frac{m_i/d_i-m_{i-1}/d_i}{2}\right]$$
in this case. If $d_i=0$, then $m_i=m_{i-1}=0$; set $C_i=\mu$. In either case $\mu/2\le C_i\le3\mu/2$, and the exact update satisfies $U_i^+=U_i-C_id_i=(1-C_i)U_i+C_iU_{i-1}$. Thus $0\le C_i\le1$ when $\mu\le2/3$, including equality. [given, F1, F2, algebra]

2.1 Subtract the identity for $U_{i-1}^+$ in step 1.1 from that for $U_i^+$ to obtain $d_i^+=(1-C_i)d_i+C_{i-1}d_{i-1}$. The coefficients are nonnegative, so $|d_i^+|\le(1-C_i)|d_i|+C_{i-1}|d_{i-1}|$. For periodic data, $C_i$ is $N$-periodic because it is defined from shifts of $U$; summing over one period and cyclically reindexing gives $\operatorname{TV}_N(U^+)\le\sum_{i=0}^{N-1}[(1-C_i)+C_i]|d_i|=\operatorname{TV}_N(U)$. This also covers $N=1$, when every $d_i=0$. For bi-infinite data, both nonnegative series on the right are bounded by $\sum_i|d_i|<\infty$. Reindexing the absolutely convergent second series gives $\operatorname{TV}(U^+)\le\sum_i[(1-C_i)+C_i]|d_i|=\operatorname{TV}(U)$, so the updated sequence still has finite variation. [step 1.1, algebra]

3.1 Now suppose $a<0$. At face $i+1/2$, [F2] gives $F_{i+1/2}=a(U_{i+1}-m_{i+1}/2)$ and $F_{i-1/2}=a(U_i-m_i/2)$, hence $U_i^+=U_i+\mu[(U_{i+1}-U_i)-(m_{i+1}-m_i)/2]$. Reflect the data by $V_j=U_{-j}$. Its minmod increments obey $m_j^V=-m_{-j}$, because reflection reverses each adjacent difference and minmod is odd under simultaneous sign reversal. With $i=-j$, the positive-speed expression for $V_j$ is $V_j-\mu[(V_j-V_{j-1})+(m_j^V-m_{j-1}^V)/2]=U_i+\mu[(U_{i+1}-U_i)-(m_{i+1}-m_i)/2]$, exactly the negative-speed update just computed. Also $V_j-V_{j-1}=-(U_{-j+1}-U_{-j})$, so reflection only reindexes the absolute increments and preserves both the bi-infinite and periodic variation sums. Step 2.1 therefore proves the claim for negative velocity. If $a=0$ or $\Delta t=0$, the flux difference is zero and the update is the identity, covering $\mu=0$. [F1, F2, step 2.1, algebra]

4.1 Fix $2/3<\mu\le1$, any $h>0$ and any $a\ne0$, and take $\Delta t=\mu h/|a|$. For positive velocity choose $U_{-1}=U_1=1/2$, $U_0=1$, and $U_i=0$ otherwise; its initial variation is $|1/2|+|1/2|+|{-1/2}|+|{-1/2}|=2$. The only nonzero differences are $d_{-1}=d_0=1/2$ and $d_1=d_2=-1/2$, so the only nonzero minmod increments are $m_{-1}=1/2$ and $m_1=-1/2$. Substituting these in [F2], the four affected updates are $U_{-1}^+=1/2-\mu(1/2+1/4)=A$, $U_0^+=1-\mu(1/2-1/4)=B$, $U_1^+=1/2-\mu(-1/2-1/4)=C$, and $U_2^+=0-\mu(-1/2+1/4)=D$, where $A=1/2-3\mu/4$, $B=1-\mu/4$, $C=1/2+3\mu/4$, and $D=\mu/4$; every other update is zero because its state and all adjacent minmod increments are zero. Here $A<0$, $B\ge3/4>0$, $C-B=\mu-1/2>0$, $D>0$, and $C-D=1/2+\mu/2>0$, so $A<0<B<C$ and $0<D<C$. Hence $\operatorname{TV}(U^+)= -A+(B-A)+(C-B)+(C-D)+D=2(C-A)=3\mu>2$. For negative velocity reflect this witness; step 3.1 preserves its updated variation. Periodizing the data with any $N\ge7$ leaves at least four zero initial cells between successive three-cell supports and at least three zero updated entries between the four affected entries; since each update uses only cells $i-2,\ldots,i+1$, no stencil meets another copy, and the periodic variation is the same $3\mu$. At $\mu=2/3$, the coefficient argument in steps 1.1–2.1 still proves TVD, and the witness updates to $(0,5/6,1,1/6)$ with variation $2$; every larger CFL number through one fails. [F1, F2, step 2.1, step 3.1, algebra] ∎
