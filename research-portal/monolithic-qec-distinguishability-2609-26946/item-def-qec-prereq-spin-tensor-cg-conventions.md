---
title: Finite spin blocks, spherical tensors and Clebsch–Gordan phases
status: published
research_item: def-qec-prereq-spin-tensor-cg-conventions
dependency_level: 0
---

## Prerequisites

- [physics:prop-nrqm-orbital-and-spin-finite-spin-matrices](https://alphabetamath.cc/physics/item/prop-nrqm-orbital-and-spin-finite-spin-matrices)
- [physics:thm-nrqm-orbital-and-spin-tensor-spin-composition](https://alphabetamath.cc/physics/item/thm-nrqm-orbital-and-spin-tensor-spin-composition)
- [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)
- [math:def-direct-sum-of-a-family-of-modules](https://alphabetamath.cc/item/def-direct-sum-of-a-family-of-modules)
- [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)


## Definition

A **spin label** is $j\in\{0,\tfrac12,1,\tfrac32,\ldots\}$. Its magnetic labels are $m=-j,-j+1,\ldots,j$. The **spin-$j$ block** is $V_j=\mathbb C^{2j+1}$ with orthonormal basis $e_{j,m}$ and operators $J_z^{(j)}e_{j,m}=m e_{j,m}$ and $J_\pm^{(j)}e_{j,m}=\sqrt{(j\mp m)(j\pm m+1)}e_{j,m\pm1}$, with the out-of-range endpoint vector interpreted as zero. Put $J_x^{(j)}=(J_+^{(j)}+J_-^{(j)})/2$, $J_y^{(j)}=(J_+^{(j)}-J_-^{(j)})/(2i)$ and $J^{(j)2}=(J_x^{(j)})^2+(J_y^{(j)})^2+(J_z^{(j)})^2$.

For an **ordered coupling** of spin labels $s,t$, use the ordered tensor product $V_s\otimes V_t$, its orthonormal product basis $e_{s,m}\otimes e_{t,n}$, and total operators $J_a^{\mathrm{tot}}=J_a^{(s)}\otimes I+I\otimes J_a^{(t)}$ for $a=x,y,z$, with $J_\pm^{\mathrm{tot}}=J_x^{\mathrm{tot}}\pm iJ_y^{\mathrm{tot}}$. For each $j=|s-t|,|s-t|+1,\ldots,s+t$, choose and record a unit highest-weight vector $u_j$ in the spin-$j$ summand: it has $J_z^{\mathrm{tot}}u_j=ju_j$ and $J_+^{\mathrm{tot}}u_j=0$. Set $v_{j,M}=(r!(2j)(2j-1)\cdots(2j-r+1))^{-1/2}(J_-^{\mathrm{tot}})^r u_j$ for $M=j-r$ and $r=0,1,\ldots,2j$, using the empty product $1$ for $r=0$.

The **Clebsch–Gordan coefficient** $C^{j,M}_{s,m;t,n}$ is the coefficient of $e_{s,m}\otimes e_{t,n}$ in $v_{j,M}$, so $v_{j,M}=\sum_{m,n}C^{j,M}_{s,m;t,n}e_{s,m}\otimes e_{t,n}$. Equivalently, with the supplier's inner product linear in its first argument, $C^{j,M}_{s,m;t,n}=\langle v_{j,M},e_{s,m}\otimes e_{t,n}\rangle$. The coupling order and the choice of each $u_j$ are part of this convention. Replacing $u_j$ by $e^{i\theta_j}u_j$ multiplies every coefficient for that $j$ by $e^{i\theta_j}$; comparison with a table therefore requires matching its order and phases.

Let $H=\bigoplus_{\alpha\in A}V_{j_\alpha}$ and $K=\bigoplus_{\beta\in B}V_{\ell_\beta}$ be finite direct sums of specified spin blocks over $\mathbb C$, with finite copy-index sets $A,B$; repeated spin labels designate distinct copies. The vector operations are coordinatewise, and the inner products are the sums of the block inner products. For $a=x,y,z$, define $J_a^H(h_\alpha)_{\alpha\in A}=(J_a^{(j_\alpha)}h_\alpha)_{\alpha\in A}$ and $J_a^K(g_\beta)_{\beta\in B}=(J_a^{(\ell_\beta)}g_\beta)_{\beta\in B}$. Set $J_\pm^H=J_x^H\pm iJ_y^H$ and $J_\pm^K=J_x^K\pm iJ_y^K$. For an integer $k\geq0$, a **rank-$k$ spherical tensor family from $H$ to $K$** is a family of linear maps $T_q:H\to K$ indexed by $q=-k,-k+1,\ldots,k$ satisfying $J_z^K T_q-T_qJ_z^H=qT_q$ and $J_\pm^K T_q-T_qJ_\pm^H=\sqrt{(k\mp q)(k\pm q+1)}T_{q\pm1}$. Here $T_{k+1}=T_{-k-1}=0$. When $H=K$, these differences are ordinary commutators. No nonzero reduced matrix element or physical interpretation is included in this definition.

## Justification

The finite-spin supplier constructs the stated matrices on each block and proves their ladder relations and $J^{(j)2}=j(j+1)I$. The ordered-register supplier supplies the product inner product and basis. The tensor-spin composition supplier gives one invariant spin-$j$ summand for each listed $j$ and a normalized ladder basis from a chosen unit highest-weight vector. Thus the finite choices and displayed positive normalization factors define every $v_{j,M}$ and its unique product-basis coefficients. Multiplying the chosen highest-weight vector by a unit complex scalar gives the stated phase change by linearity. The direct-sum supplier gives coordinatewise vector operations by taking $R=\mathbb C$ and the indicated finite families, while the linear-map supplier defines the maps $T_q$. The blockwise operators preserve each coordinate space and are linear because the spin-block operators are linear; therefore $J_a^KT_q$ and $T_qJ_a^H$ are linear maps from $H$ to $K$, so each tensor-family equation is well typed. The sum of the block inner products is sesquilinear and positive definite because it is a finite sum of such pairings and is positive on every nonzero tuple. The zero family satisfies the equations, including at the endpoints. [physics:prop-nrqm-orbital-and-spin-finite-spin-matrices](https://alphabetamath.cc/physics/item/prop-nrqm-orbital-and-spin-finite-spin-matrices) [physics:thm-nrqm-orbital-and-spin-tensor-spin-composition](https://alphabetamath.cc/physics/item/thm-nrqm-orbital-and-spin-tensor-spin-composition) [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation) [math:def-direct-sum-of-a-family-of-modules](https://alphabetamath.cc/item/def-direct-sum-of-a-family-of-modules) [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)
