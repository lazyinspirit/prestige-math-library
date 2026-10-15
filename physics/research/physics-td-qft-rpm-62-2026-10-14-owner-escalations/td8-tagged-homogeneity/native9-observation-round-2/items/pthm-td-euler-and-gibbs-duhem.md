---
id: pthm-td-euler-and-gibbs-duhem
kind: physics-theorem
title: Euler and Gibbs-Duhem identities under same-tag homogeneity
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Conditional local identities on a positive-temperature C2 energy-representation chart when the same fixed material tag satisfies degree-one homogeneity on that chart; the current tagged-scaling postulate alone does not provide this condition.
deps:
  - post-td-bulk-additivity
  - post-td-concave-fundamental-entropy
  - pthm-td-local-energy-representation
  - pthm-td-potential-differentials
  - lem-tdmath-euler-identity-for-degree-one-homogeneous-function
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
dependency_roles:
  post-td-bulk-additivity: physical-assumption
  post-td-concave-fundamental-entropy: physical-assumption
  pthm-td-local-energy-representation: physical-result
  pthm-td-potential-differentials: physical-result
  lem-tdmath-euler-identity-for-degree-one-homogeneous-function: mathematical-premise
  thm-chain-sum-product-and-composition-rules-for-banach-derivatives: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §2.7
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.07:_Thermodynamic_Potentials
    - title: Mehran Kardar, Statistical Mechanics I, Lecture Note 3, §I.H
      url: https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/df0c4e121858c0be246b496dd8c39d2c_MIT8_333F13_Lec3.pdf
---

## Statement

Let $\mathcal U_c(s,V,n)$ be the local C2 energy representation of a fixed material constitution $c$ on an open positive-temperature chart, with $V>0$, $n_j>0$, and conjugates $T=\mathcal U_{c,s}$, $p=-\mathcal U_{c,V}$, and $\mu_j=\mathcal U_{c,n_j}$. In addition to the framework suppliers, assume the **same-tag homogeneity hypothesis**

$$\mathcal U_c(\lambda s,\lambda V,\lambda n_1,\ldots,\lambda n_r)=\lambda\mathcal U_c(s,V,n_1,\ldots,n_r)$$

for every point in a neighborhood and every positive $\lambda$ sufficiently close to $1$ for which the scaled point remains in the chart. Then

$$\mathcal U_c=Ts-pV+\sum_{j=1}^r\mu_jn_j,$$

and on the same chart

$$s\,dT-V\,dp+\sum_{j=1}^r n_j\,d\mu_j=0.$$

These are conditional model deductions. The actual framework supplier [[post-td-concave-fundamental-entropy]] states $S_{c^{(\lambda)}}(\delta_\lambda x)=\lambda S_c(x)$ with a potentially different tag $c^{(\lambda)}$; it does not identify that tag with $c$ or state the extra hypothesis above.

## Facts & Assumptions

**Given:** The local C2 energy representation and the explicitly additional same-tag homogeneity hypothesis in the Statement. Coordinates are entropy $s$ in $\mathrm{J\,K^{-1}}$, volume $V$ in $\mathrm{m^3}$, and whole-system amounts $n_j$ in $\mathrm{mol}$.

[A1] Additional same-tag premise: $\mathcal U_c(\lambda s,\lambda V,\lambda n)=\lambda\mathcal U_c(s,V,n)$ on the stated local ray segments. No current physical supplier asserts this premise.

[F1] [[post-td-bulk-additivity]]: The scaling map may send $c$ to a different material tag $c^{(\lambda)}$; the statement explicitly does not identify those tags.

[F2] [[post-td-concave-fundamental-entropy]]: The entropy scaling statement is $S_{c^{(\lambda)}}(\delta_\lambda x)=\lambda S_c(x)$ for the tagged family; it does not state fixed-tag homogeneity of the energy representation.

[F3] [[pthm-td-local-energy-representation]]: On its local inverse chart, $\mathcal U_{c,s}=T_c$, $\mathcal U_{c,V}=-p_c$, and $\mathcal U_{c,n_j}=\mu_{c,j}$. Its proof is conditional on the unregistered batch-4 draft [[thm-tdmath-local-implicit-rank]].

[F4] [[pthm-td-potential-differentials]]: $d\mathcal U_c=T\,ds-p\,dV+\sum_j\mu_j\,dn_j$ on the same chart, conditional on [F3].

[L1] [[lem-tdmath-euler-identity-for-degree-one-homogeneous-function]]: A C1 function with degree-one homogeneity along each local ray satisfies $f(x)=Df(x)[x]$.

[L2] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: Differentiating finite scalar products obeys the product rule.

## Proof

1.1 Apply [L1] to $\mathcal U_c$ at $(s,V,n_1,\ldots,n_r)$ using [A1]. It gives $\mathcal U_c=s\mathcal U_{c,s}+V\mathcal U_{c,V}+\sum_j n_j\mathcal U_{c,n_j}$. [given, A1, L1]

1.2 Substitute the conjugate derivatives from [F3] into step 1.1 to obtain $\mathcal U_c=Ts-pV+\sum_j\mu_jn_j$. [F3, step 1.1, algebra]

2.1 Differentiate the identity in step 1.2 on the C2 chart using [L2]. The right side has differential $T\,ds+s\,dT-p\,dV-V\,dp+\sum_j(\mu_j\,dn_j+n_j\,d\mu_j)$. [given, L2, step 1.2, algebra]

2.2 By [F4], the differential of the left side is $T\,ds-p\,dV+\sum_j\mu_j\,dn_j$. Equating these differentials and cancelling the common terms yields $s\,dT-V\,dp+\sum_j n_j\,d\mu_j=0$. [F4, step 2.1, algebra]

3.1 The actual scaling premises [F1]–[F2] change the tag to $c^{(\lambda)}$ and do not identify it with $c$; therefore they do not discharge the additional same-tag hypothesis [A1]. The theorem remains conditional as stated. [given, A1, F1, F2] ∎

## Remarks

The conditional argument is complete, but readiness is escalated: [F1] is the actual current supplier and does not provide [A1]. The smallest missing input is a physical same-tag homogeneity premise or a revised exact supplier interface. Batch 8 has a separate tagged-scaling countermodel recorded as nonlogical context; it is not a logical premise here.
