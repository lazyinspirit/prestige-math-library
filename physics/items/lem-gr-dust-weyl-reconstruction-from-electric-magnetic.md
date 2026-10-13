---
id: lem-gr-dust-weyl-reconstruction-from-electric-magnetic
kind: lemma
title: "Reconstruction of a Weyl tensor from its electric and magnetic parts: symmetries, trace-freeness and recovery"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-dust-electric-magnetic-weyl-variables-and-schouten, def-gr-dust-reduction-variables-and-gauge, def-gr-curvature-tensor-and-derived-tensors, def-gr-tensor-fields-and-components]
dependency_roles:
  def-gr-dust-electric-magnetic-weyl-variables-and-schouten: mathematical-premise
  def-gr-dust-reduction-variables-and-gauge: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Work in the frame conventions of
[[def-gr-dust-reduction-variables-and-gauge]] and let $E_{ij},B_{ij}$ be
symmetric spatial tracefree fields, that is $E_{ij}U^j=B_{ij}U^j=0$ and $h^{ij}E_{ij}=h^{ij}B_{ij}=0$. Define $C$ by the
reconstruction formula of
[[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]] clause (d). Then:

**(a)** $C_{ijkl}$ is antisymmetric in $(i,j)$ and in $(k,l)$, symmetric under
the exchange of the pairs $(ij)\leftrightarrow(kl)$, satisfies the first
Bianchi (cyclic) identity $C_{i[jkl]}=0$, and is trace-free in every pair of
contracted indices;

**(b)** the electric and magnetic parts of $C$ with respect to $U$ are
$C_{0i0j}=E_{ij}$ and $C^*{}_{0i0j}=B_{ij}$;

**(c)** consequently if $E,B$ are in addition trace-free with respect to $h$,
then $C$ is a Weyl tensor and the map $(E,B)\mapsto C$ is a bijection onto the
Weyl tensors with the given $U$-electric and $U$-magnetic parts.

## Facts & Assumptions

**Given:** the smooth unit observer and orthonormal frame, symmetric spatial tracefree fields $E,B$, and the reconstruction formula.

[L1] In the rest frame, $\gamma=\operatorname{diag}(1,-1,-1,-1)$, $U=(1,0,0,0)$, $h_{ab}=-\delta_{ab}$ and $l_{00}=-1$, $l_{0a}=0$, $l_{ab}=-\delta_{ab}$, with $\epsilon_{123}=1$ and $\epsilon^a{}_{bc}=-\epsilon_{abc}$ ([[def-gr-dust-reduction-variables-and-gauge]], [[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]]).

[L2] The positive spatial epsilon satisfies $\sum_p\epsilon_{pab}\epsilon_{pcd}=\delta_{ac}\delta_{bd}-\delta_{ad}\delta_{bc}$ and $\sum_{b,c}\epsilon_{abc}\epsilon_{dbc}=2\delta_{ad}$; these follow by checking whether the two ordered index pairs agree, reverse or differ. The right dual and index raising use $\gamma$ ([[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]], [[def-gr-tensor-fields-and-components]]).



**Proof technique:** direct.

## Proof

1.1 (All component families.) Expanding the definition with [L1] gives $C_{0a0b}=E_{ab}$, $C_{0abc}=B_{ap}\epsilon_{pbc}$, $C_{ab0c}=B_{cp}\epsilon_{pab}$ and $C_{abcd}=\delta_{ac}E_{bd}+\delta_{bd}E_{ac}-\delta_{ad}E_{bc}-\delta_{bc}E_{ad}$; components with repeated zeros follow from antisymmetry. Antisymmetry of each pair and pair interchange now follow from symmetric $E,B$. For the cyclic identity, families with two zeros cancel by symmetric $E$, while purely spatial families cancel directly in the four electric terms. For one-zero families, the only nontrivial fully alternating sum is $B_{ap}\epsilon_{pbc}+B_{bp}\epsilon_{pca}+B_{cp}\epsilon_{pab}=(\operatorname{tr}_\delta B)\epsilon_{abc}=0$; sums with repeated spatial indices cancel by symmetry of $B$. Thus the full cyclic identity holds. [given, L1, L2, algebra]

2.1 (Every trace and recovery.) The Ricci-type contraction gives $\gamma^{ac}C_{a0c0}=-\operatorname{tr}_\delta E=0$, $\gamma^{ac}C_{a0cb}=0$ by symmetric $B$ against epsilon, and $\gamma^{ac}C_{aicj}=E_{ij}-\sum_aC_{aiaj}=-(\operatorname{tr}_\delta E)\delta_{ij}=0$. Pair interchange and the two antisymmetries reduce every cross-pair trace to these, while within-pair traces vanish by antisymmetry. The electric recovery is already in step 1.1. For the magnetic recovery, raising two spatial indices introduces no sign and $C^*_{0a0b}=\tfrac12\sum_{c,d}C_{0acd}\epsilon_{0bcd}=\tfrac12 B_{ap}\epsilon_{pcd}\epsilon_{bcd}=B_{ab}$ by [L2]. This proves (a),(b). [step 1.1, L1, L2, algebra]

3.1 (Full inverse and bijection.) Conversely let $W$ have the algebraic Weyl symmetries and zero traces. Its electric parts are symmetric and tracefree by pair interchange and contraction; For the magnetic parts, $B_{ab}=\tfrac12\epsilon_{bcd}W_{0acd}$; contracting $a=b$ gives the cyclic sum $W_{0123}+W_{0231}+W_{0312}=0$, and contracting $\epsilon_{eab}B_{ab}$ gives a Ricci-type trace of $W$, hence zero. In three dimensions this latter vanishing is exactly symmetry of $B$, so $B$ is symmetric and tracefree. The epsilon inverse in [L2] recovers $W_{0abc}=B_{ap}\epsilon_{pbc}$ from $B$. Pair interchange fixes $W_{ab0c}$. The remaining spatial algebraic curvature has six independent components: identify its antisymmetric pairs with the three basis pairs $(23),(31),(12)$, giving a symmetric $3\times3$ matrix. Its spatial Ricci contraction is determined by $W_{0a0b}=E_{ab}$ because the full trace is zero. This contraction is injective on the six spatial components: in dimension three its three diagonal equations determine $W_{1212},W_{1313},W_{2323}$, and its three off-diagonal equations determine the remaining three pair-matrix entries. The explicit spatial formula in step 1.1 has that contraction, so it is the unique spatial tensor. Hence every component equals the reconstruction, which is an inverse to the electric-magnetic map. Linearity and step 2.1 prove the claimed bijection, with no additional curvature variables. [step 1.1, step 2.1, L2, algebra] ∎


## Remarks

The tracefree hypotheses are essential. For example, a symmetric spatial $E=I$ has $\gamma^{ac}C_{a0c0}=-3$, so its reconstruction is not a Weyl tensor. The lemma is purely algebraic and applies without density positivity, hypersurface orthogonality or an evolution equation.
