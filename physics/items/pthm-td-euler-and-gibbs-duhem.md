---
id: pthm-td-euler-and-gibbs-duhem
kind: physics-theorem
title: Euler and Gibbs-Duhem identities under same-tag homogeneity
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Conditional local identities on a positive-temperature C2 energy-representation chart when the same fixed material tag satisfies degree-one homogeneity on that chart; the separately designated common-bulk constitutive-law branch supplies this condition through its entropy transport on local inverse charts with common species, intensive parameters, units and energy/entropy references. The general tagged-scaling postulate alone does not provide it.
deps:
  - post-td-bulk-additivity
  - post-td-concave-fundamental-entropy
  - post-td-common-bulk-constitutive-law
  - pthm-td-local-energy-representation
  - pthm-td-potential-differentials
  - lem-tdmath-euler-identity-for-degree-one-homogeneous-function
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
dependency_roles:
  post-td-bulk-additivity: physical-assumption
  post-td-concave-fundamental-entropy: physical-assumption
  post-td-common-bulk-constitutive-law: physical-assumption
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
    - title: Jeremy Tatum, Heat and Thermodynamics, §17.6, The Gibbs-Duhem Relation
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/17:_Chemical_Thermodynamics/17.06:_The_Gibbs-Duhem_Relation
dependency_level: 9
---

## Statement

Let $C$ be the open positive-temperature domain of a local C2 energy representation $\mathcal U_c(s,V,n)$ for a fixed material constitution $c$, with $V>0$, $n_j>0$, and conjugates $T=\mathcal U_{c,s}$, $p=-\mathcal U_{c,V}$, and $\mu_j=\mathcal U_{c,n_j}$. Let $W\subseteq C$ be open. In addition to the framework suppliers, assume the **same-tag homogeneity hypothesis**: for every $q=(s,V,n_1,\ldots,n_r)\in W$ there is an $\varepsilon_q\in(0,1)$ such that

$$\mathcal U_c(\lambda s,\lambda V,\lambda n_1,\ldots,\lambda n_r)=\lambda\mathcal U_c(s,V,n_1,\ldots,n_r)$$

for every $\lambda>0$ with $|\lambda-1|<\varepsilon_q$ and $\lambda q\in C$. Then, throughout $W$,

$$\mathcal U_c=Ts-pV+\sum_{j=1}^r\mu_jn_j,$$

and on the same chart

$$s\,dT-V\,dp+\sum_{j=1}^r n_j\,d\mu_j=0.$$

The same-tag hypothesis is supplied, in particular, when the inverse states $\Psi(q):=(\mathcal U_c(q),V,n)$ for $q\in W$ lie in the designated common-law cone of [[post-td-common-bulk-constitutive-law]], expressed in physical SI coordinate values using the fixed unit conversion. On this branch the adopted entropy transport implies the energy homogeneity locally by uniqueness of the local inverse; no global inverse or global energy-domain cone is assumed. These are conditional model deductions. The general tagged relation in [[post-td-concave-fundamental-entropy]] alone does not identify the scaled system with one fixed constitutive law.

## Facts & Assumptions

**Given:** The local C2 energy representation on $C$, the open subdomain $W$, and the same-tag homogeneity hypothesis in the Statement, either assumed independently or supplied by the designated common-law branch as specified there. Coordinates are entropy $s$ in $\mathrm{J\,K^{-1}}$, volume $V$ in $\mathrm{m^3}$, and whole-system amounts $n_j$ in $\mathrm{mol}$.

[A1] Additional same-tag premise: for each $q\in W$ there is an open interval $|\lambda-1|<\varepsilon_q$ on which $\mathcal U_c(\lambda q)=\lambda\mathcal U_c(q)$ whenever $\lambda q\in C$. The common-law branch in [A2] supplies this premise on the corresponding local inverse subdomain.

[A2] [[post-td-common-bulk-constitutive-law]]: For the supplied bulk branch, the inverse states $\Psi(W)$ lie in its designated open single-phase cone, after the fixed SI unit conversion. Coordinate-preserving entropy transport and tagged scaling give $S_c(\lambda x)=\lambda S_c(x)$ there. The material law has fixed species and intensive parameters and common units and energy/entropy reference conventions; distinct physical system tags are retained. This premise is required only for the assertion that the framework supplies [A1], not for the general implication from independently assumed [A1].

[F1] [[post-td-bulk-additivity]]: The scaling map may send $c$ to a different material tag $c^{(\lambda)}$; the statement explicitly does not identify those tags.

[F2] [[post-td-concave-fundamental-entropy]]: The entropy scaling statement is $S_{c^{(\lambda)}}(\delta_\lambda x)=\lambda S_c(x)$ for the tagged family; it does not state fixed-tag homogeneity of the energy representation.

[F3] [[pthm-td-local-energy-representation]]: On its local inverse chart, $\mathcal U_{c,s}=T_c$, $\mathcal U_{c,V}=-p_c$, and $\mathcal U_{c,n_j}=\mu_{c,j}$. It supplies a unique local C1 inverse from the draft local-rank graph interface and derives C2 regularity from the C2 entropy and its positive energy derivative; draft readiness does not constitute independent proof acceptance.

[F4] [[pthm-td-potential-differentials]]: $d\mathcal U_c=T\,ds-p\,dV+\sum_j\mu_j\,dn_j$ on the same chart, conditional on [F3].

[L1] [[lem-tdmath-euler-identity-for-degree-one-homogeneous-function]]: A C1 function with degree-one homogeneity along each local ray satisfies $f(x)=Df(x)[x]$.

[L2] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: Differentiating finite scalar products obeys the product rule.

## Proof

1.1 On the supplied branch [A2], fix $q=(s,V,n)\in W$ and $x=\Psi(q)$ in the original-coordinate uniqueness neighborhood of the local inverse [F3]. By openness, for $\lambda$ in some open interval about $1$, both $\lambda q\in W$ and $\lambda x$ remain in that uniqueness neighborhood and in the common-law entropy cone. Its fixed unit conversion commutes with multiplication by $\lambda$. Thus [A2] gives $S_c(\lambda\mathcal U_c(q),\lambda V,\lambda n)=\lambda S_c(x)=\lambda s$. By uniqueness of the inverse [F3], $\mathcal U_c(\lambda q)=\lambda\mathcal U_c(q)$ throughout this interval. Consequently [A2] supplies [A1] locally, without a global inverse claim. [given, A2, F3, construct]

2.1 For the general conclusion assume [A1], which step 1.1 supplies when [A2] applies. Since $W$ is open, at each $q\in W$ shrink the homogeneity interval so that $\lambda q\in W$ throughout it. The local-ray hypotheses of [L1] therefore apply to $\mathcal U_c$ restricted to $W$, giving $\mathcal U_c=s\mathcal U_{c,s}+V\mathcal U_{c,V}+\sum_j n_j\mathcal U_{c,n_j}$. [given, A1, L1, step 1.1]

3.1 Substitute the conjugate derivatives from [F3] into step 2.1 to obtain $\mathcal U_c=Ts-pV+\sum_j\mu_jn_j$. [F3, step 2.1, algebra]

4.1 Differentiate the identity in step 3.1 on the C2 chart using [L2]. The right side has differential $T\,ds+s\,dT-p\,dV-V\,dp+\sum_j(\mu_j\,dn_j+n_j\,d\mu_j)$. [given, L2, step 3.1, algebra]

5.1 By [F4], the differential of the left side is $T\,ds-p\,dV+\sum_j\mu_j\,dn_j$. Equating these differentials and cancelling the common terms yields $s\,dT-V\,dp+\sum_j n_j\,d\mu_j=0$. [F4, step 4.1, algebra]

6.1 The general tagged premises [F1]–[F2] alone do not discharge [A1]. On the separately designated common-law branch, [A2] and the local inverse argument in step 1.1 do discharge it, so steps 3.1–5.1 give the full Euler and Gibbs–Duhem identities there. These are identities of local state functions with the stated rest-frame SI and reference conventions; no empirical validation or exact finite-size scaling is inferred. [given, A1, A2, F1, F2, step 1.1, step 3.1, step 5.1] ∎

## Remarks

The extra common-law bulk postulate supplies the constitutive identification absent from the general tagged family. The theorem also retains its general conditional implication for any independently stipulated same-tag local energy law. The batch-8 countermodel concerns the broader tagged premises and lies outside this added branch; it remains nonlogical context. Neither local entropy inversion nor the differential identities assert global invertibility, admissibility across phase boundaries, or universal extensivity for finite, surface-sensitive, long-range or gravitating systems.
