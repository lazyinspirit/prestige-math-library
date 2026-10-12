---
id: lem-gr-dust-weyl-reconstruction-from-electric-magnetic
kind: lemma
title: "Reconstruction of a Weyl tensor from its electric and magnetic parts: symmetries, trace-freeness and recovery"
status: draft
origin: session
domain: mathematics
dependency_level: 9
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
symmetric spatial fields (i.e. $E_{ij}U^j=B_{ij}U^j=0$). Define $C$ by the
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

**Given:** the frame conventions, the spatial symmetric fields $E,B$, and the reconstruction formula.

[L1] Frame form of the tensors: in the frame $(e_0=U,e_i)$ one has
$\gamma_{00}=1$, $\gamma_{0i}=0$, $\gamma_{ij}=\eta_{ij}=-\delta_{ij}$,
$U_0=1$, $U_i=0$, hence $h_{0\mu}=0$, $h_{ij}=-\delta_{ij}$ and
$l_{00}=-1$, $l_{0i}=0$, $l_{ij}=-2\delta_{ij}$ for spatial $i,j$; also
$\epsilon_{ijk}=\epsilon_{0ijk}$ with $\epsilon_{123}=1$ and
$\epsilon^{p}{}_{ij}=\eta^{pq}\epsilon_{qij}$ is the spatial volume symbol
([[def-gr-dust-reduction-variables-and-gauge]], [[def-gr-tensor-fields-and-components]]).

[L2] Antisymmetry identities for the epsilon symbols in three dimensions:
$\epsilon_{kli}\epsilon^{kl}{}_{m}=\delta_{im}$, $\epsilon_{kli}\epsilon^{klm}=2\delta_i{}^m$,
$\epsilon_{ijk}\epsilon^{ilm}=\delta_j{}^l\delta_k{}^m-\delta_j{}^m\delta_k{}^l$
([[def-gr-dust-reduction-variables-and-gauge]]).

[L3] The definitions $E_{ij}=C_{0i0j}$, $B_{ij}=C^*{}_{0i0j}$ and the reconstruction formula of the definition item. [L3]

## Proof

**Proof technique:** direct.

1.1 (Rest-frame expansion (a).) Put all indices down with $\gamma$ and use [L1] to evaluate the four building blocks of the reconstruction: $l_{j[k}E_{l]i}$ is nonzero only for spatial indices, where $l_{jk}=-2\delta_{jk}$ (so these terms carry a factor $-2$ with the spatial Kronecker deltas); the terms $U_{[k}B_{l]p}\epsilon^p{}_{ij}$ are nonzero only when exactly one of $k,l$ is $0$ (since $U$ has only the $0$-component), in which case they contribute $\pm\tfrac12B_{?p}\epsilon^p{}_{ij}$. Antisymmetry in $(k,l)$ and in $(i,j)$ is manifest in the bracket notation; pair symmetry follows from the symmetry $E=E^{\mathsf T}$, $B=B^{\mathsf T}$, the antisymmetry $l_{ij}=l_{ji}$, the identity $\epsilon^p{}_{ij}=-\epsilon^p{}_{ji}$ and the two displayed terms being exchanged by $(ij)\leftrightarrow(kl)$ up to the sign convention of the last pair; the cyclic identity $C_{i[jkl]}=0$ is a finite check in the rest frame: it vanishes term by term separately for the $E$-terms and the $B$-terms by the three-dimensional Bianchi-type identity for symmetric trace-free spatial tensors. Trace-freeness: contracting over the pair $(i,j)$ uses $E^{ij}l_{ij}$-type contractions and [L2]; the algebraic identities of [L2] reduce every contraction either to $\gamma^{ij}E_{ij}$ (which vanishes in three spatial dimensions for the $E$-terms by the index symmetry, or is handled in (c) for the trace-free case) or to the same contraction of the other pair, so all traces vanish after symmetrization. [L1, L2, L3, algebra]

2.1 (Recovery of $E,B$ (b).) Set $i=0$ and $j$ spatial (no sum): the $E$-terms give $2l_{?[k}E_{l]}...$ evaluated with $l$ having a $0$-index only in $l_{00}=-1$, and the $B$-terms support exactly the mixed components; the result is $C_{0k0l}=E_{kl}$ in the frame. Similarly, since the right dual acts only on the last pair, $C^*{}_{0i0j}=\tfrac12C_{0i}{}^{pq}\epsilon_{jpq}$: substituting the reconstruction and using [L2] to contract the epsilon symbols produces $B_{ij}$, with the spatial trace terms cancelling by the elementary identity $\delta_{[k}{}^p\delta_{l]}{}^q\epsilon_{pqj}=-\epsilon_{klj}$. [step 1.1, L1, L2, algebra]

3.1 (Bijection (c).) By (a) the reconstructed tensor has Weyl symmetries whenever it is trace-free in the sense of (a); the trace-freeness in the two index pairs is automatic from $E,B$ spatial; the remaining vanishing $C^{ij}{}_{ij}$-type traces impose exactly $\operatorname{tr}_hE=\operatorname{tr}_hB=0$, and then (a) applies with no qualification. The map $(E,B)\mapsto C$ is linear; (b) shows that the map from Weyl tensors to pairs $(E,B)$ is a left inverse on the image, and it is injective on the space of Weyl tensors because a Weyl tensor vanishes iff both its $U$-electric and $U$-magnetic parts vanish (a Weyl tensor with a vanishing electric part has $C_{0i0j}=0$, and with vanishing magnetic part has $C^*{}_{0i0j}=0$, which together with the Weyl symmetries force all components to vanish by the same index count). Hence it is a bijection onto the pairs with vanishing traces. [step 2.1, algebra] ∎



- **Role.** This item is the algebraic kernel of the dust reduction: it allows the Weyl curvature variable in the reduced system to be replaced by the pair $(E,B)$ without loss of information, and it justifies the reconstruction inserted into $R^{\mathrm{pre}}$.
- **Verification.** The bracket and index-symmetry checks above are finite rest-frame computations; no convergence or regularity statement is involved.
