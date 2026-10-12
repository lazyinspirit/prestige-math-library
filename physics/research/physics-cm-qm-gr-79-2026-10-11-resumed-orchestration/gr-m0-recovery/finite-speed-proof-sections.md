# Finite speed: exact minimal repair sections

Replace lambda in Statement (a) by $\lambda:=\sqrt3\,b/a+1$ and propagate this same lambda into (b),(c). All claims survive with this larger safe cone. Clarify in (c) that the *entire* systems agree near D, including C, and that both solutions are C1 there. If leading coefficients agree but C differs, the independence conclusion need not hold.

Replace [L1] by the calculation below. In step 1.2 use a derivative supremum only over D (or a compact neighborhood), not all of R3: smooth coefficients on the noncompact domain need not have globally bounded derivatives. The compactness of D supplies the finite derivative constant actually required.

## Proof

**Proof technique:** direct.

1.1 (Correct symbol domination.) For every $|\xi|\le1$, $\|\sum_i\xi_iA^i\|\le\sum_i|\xi_i|\|A^i\|\le b\|\xi\|_1\le\sqrt3\,b$. Hence for every $z$ one has $z^{\mathsf T}(\lambda A^0+\xi_iA^i)z\ge(\lambda a-\sqrt3b)|z|^2=a|z|^2\ge0$. This proves (a). [given, algebra]

1.2 (Energy-current inequality on the compact cone.) Put $j^\mu=w^{\mathsf T}A^\mu w$. Symmetry and the equation give $\partial_\mu j^\mu=w^{\mathsf T}(\partial_tA^0+\sum_i\partial_iA^i-C-C^{\mathsf T})w$. On compact D let $M=\sup_D\|\partial_tA^0+\sum_i\partial_iA^i\|+2K<\infty$. Thus $\partial_\mu j^\mu\le M|w|^2\le(M/a)j^0$ throughout D. [given, algebra]

2.1 (Truncated cone flux.) For $0<\tau<t_0$, apply the divergence theorem to $D_\tau=\{(s,x):0\le s\le\tau,|x-x_0|\le\lambda(t_0-s)\}$. Base flux is $-E(0)$ and top flux is $E(\tau)$, where $E(s)=\int_{|x-x_0|\le\lambda(t_0-s)}j^0(s,x)\,dx$. The lateral outward unit normal is $(\lambda,\xi)/\sqrt{1+\lambda^2}$, so its flux is nonnegative by step 1.1. Step 1.2 gives $E(\tau)\le E(0)+(M/a)\int_0^\tau E(s)\,ds$. The domains avoid the cone vertex, so their boundaries are piecewise C1 as required. [step 1.1, step 1.2, L2, algebra]

3.1 (Vanishing and the vertex.) $E$ is continuous and nonnegative; zero initial data give $E(0)=0$. Gronwall therefore gives $E(s)=0$ for $0\le s<t_0$. Positivity of $A^0$ and continuity of w imply w vanishes on each closed top ball, since a nonzero value would give positive integral on a neighborhood. Letting s increase to t_0 and using continuity also gives $w(t_0,x_0)=0$. This proves (b). [step 2.1, L3, algebra]

4.1 (Independence.) On the common neighborhood of D, subtract the two identical linear equations. The difference $w_1-w_2$ solves the homogeneous system with the common matrices $A^\mu$ and the common zeroth-order coefficient C; it vanishes on the base. The preceding argument uses only coefficients on D and gives equality throughout D. This proves (c). [step 3.1, given, algebra] ∎

## Optional sharper public interface

A separate formulation can instead assume directly
$\sup_{|\xi|=1}\|\xi_iA^i(t,x)\|\le b$, in which case lambda=b/a+1 is correct. An even sharper invariant contract is $\lambda A^0\pm\xi_iA^i\ge0$ for unit xi, or equivalently a bound on the generalized symbol $(A^0)^{-1/2}(\xi_iA^i)(A^0)^{-1/2}$. Do not silently reinterpret the original individual bounds as a symbol bound: that is an interface change and every consumer needs verification. The sqrt3 repair is minimal under the original hypotheses; matrix scalar multiples of the identity show sqrt3 is sharp.

For quasilinear extension-independence consumers, agreement of coefficient *functions* does not make composed leading matrices equal when w1 and w2 differ. One must subtract the nonlinear equations and express the remaining terms as a bounded linear zeroth-order matrix times the difference, using a valid coefficient extension or local mean-value argument; this duty belongs to the parent consumer repair.
