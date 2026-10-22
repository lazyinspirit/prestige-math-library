---
id: prop-qftx-photon-fock-angular-lift
kind: proposition
title: Second-quantized total rotations and helicity counts
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
deps:
- def-axiom-of-choice
- def-countable-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-qft-fock-and-test-spaces
- thm-stone-one-parameter-unitary-groups
- def-qftx-photon-helicity-bundle
- thm-qftx-photon-rotations-helicity
- def-qftx-photon-projected-angular
- thm-qftx-photon-projected-commutators
- lem-qftx-measurable-helicity-scalarization
- lem-qft-second-quantized-spectrum
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
  def-qftx-photon-helicity-bundle: mathematical-premise
  thm-qftx-photon-rotations-helicity: mathematical-premise
  def-qftx-photon-projected-angular: mathematical-premise
  thm-qftx-photon-projected-commutators: mathematical-premise
  lem-qftx-measurable-helicity-scalarization: mathematical-premise
  lem-qft-second-quantized-spectrum: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Eric Palmerduca and Hong Qin, Photon topology
    url: https://arxiv.org/pdf/2308.11147v2
    locator: Full 66-page arXiv:2308.11147v2; §V.3, equations 213–228, for the
      one-photon rotation action and helicity-projected operators. The Fock lift,
      number operators, and exact domains are established locally and by the
      mathematical supplier below.
  - title: Konstantin Y. Bliokh, Miguel A. Alonso, Elena A. Ostrovskaya, and Andrea
      Aiello, Angular Momenta and Spin-Orbit Interaction of Nonparaxial Light in Free
      Space
    url: https://arxiv.org/pdf/1006.3876
    locator: Full 8-page article; §II equations 2–5 and 22. The source uses hbar=c=1;
      only the transverse operator context is used.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Choice, $\hbar>0$, and the bosonic Fock space $\mathcal F_s(\mathcal H_T^\nu)$ of [[def-qft-fock-and-test-spaces]]. For $R\in SO(3)$ define the Fock rotation by
$$
\Gamma(U(R))=\bigoplus_{n\ge0}U(R)^{\otimes_s n},
$$
where the vacuum sector $n=0$ carries the identity. This is a strongly continuous unitary representation. For a unit axis $\mathbf a$, its Stone generator $J_{\mathbf a}^{\mathrm F}$ is self-adjoint on its exact Stone domain and on finite symmetric tensors with factors in $D(J_{\mathbf a})$ acts as the sector sum
$$
d\Gamma(J_{\mathbf a})=\sum_{r=1}^{n} I^{\otimes(r-1)}\otimes J_{\mathbf a}\otimes I^{\otimes(n-r)}.
$$
In this statement $d\Gamma(J_{\mathbf a})$ denotes that Stone generator; the formula specifies its action on the stated finite-particle domain.

Let $\mathscr D_{\rm fin}(\mathcal D)$ be the vacuum plus the finite linear span of symmetrized elementary tensors whose one-particle factors lie in $\mathcal D$. It is a dense invariant domain, and on it the Fock total generators satisfy $[J_i^{\mathrm F},J_j^{\mathrm F}]=i\hbar\sum_k\epsilon_{ijk}J_k^{\mathrm F}$.

For helicity $\sigma\in\{+1,-1\}$, define $N_\sigma$ on the $n$-particle sector by
$$
N_\sigma^{(n)}=\sum_{r=1}^n I^{\otimes(r-1)}\otimes P_\sigma\otimes I^{\otimes(n-r)}
$$
and use its maximal direct-sum domain $\{\Psi=(\Psi_n):\sum_n\|N_\sigma^{(n)}\Psi_n\|^2<\infty\}$. Define the helicity-number difference $D_h=d\Gamma(h)$ as the self-adjoint sector multiplier with $n$-particle action $\sum_{r=1}^n h^{(r)}$ and exact domain
$$
D(D_h)=\left\{\Psi=(\Psi_n):\sum_{n\ge1}\left\|\sum_{r=1}^n h^{(r)}\Psi_n\right\|^2<\infty\right\};
$$
the vacuum term is zero. On finite-particle vectors $D_h=N_+-N_-$. With the natural-unit free radial phase
$$
(V_t f)(\mathbf k)=e^{-it|\mathbf k|}f(\mathbf k),\qquad t\in\mathbb R,
$$
the Fock lift $\Gamma(V_t)$ commutes with $D_h$, so the helicity-number difference is conserved by this free isotropic propagation. If $f\in\mathcal H_T^\nu$ is a normalized one-photon helicity-$\sigma$ vector, meaning $\|f\|_\nu=1$ and $P_\sigma f=f$ almost everywhere, then
$$\langle f,S_z'f\rangle_\nu=\hbar\sigma\int_M\cos\theta(\mathbf k)\,|f(\mathbf k)|^2\,d\nu(\mathbf k),\qquad \theta(\mathbf k)=\arccos\!\left(\frac{k_z}{|\mathbf k|}\right)\in[0,\pi].$$
When $|\mathbf k|$ has inverse-length units, $t$ has length units in this $c=1$ convention. These are mathematical consequences of the specified one-photon and Fock models, not claims about a measured field or apparatus.

## Statement references

[[def-qft-fock-and-test-spaces]]

[[def-qftx-photon-helicity-bundle]]

[[def-qftx-photon-projected-angular]]

[[thm-qftx-photon-rotations-helicity]]

[[thm-qftx-photon-projected-commutators]]

[[lem-qftx-measurable-helicity-scalarization]]

[[lem-qft-second-quantized-spectrum]]

[[thm-stone-one-parameter-unitary-groups]]

## Facts & Assumptions

**Given:** The Axiom of Choice; $\hbar>0$; the transverse one-photon Hilbert space with its rotation and helicity operators; and its bosonic Fock construction.

[A1] Assume the Axiom of Choice. It supplies Countable Choice through [F1] and is the hypothesis of Stone's theorem used for the Fock rotation group. [[def-axiom-of-choice]]

[F1] $\mathrm{AC}\Rightarrow\mathrm{AC}_\omega$. [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]]

[F2] $\mathcal F_s(H)$ is the square-summable direct sum of symmetric tensor sectors, the vacuum is $\mathbb C$, and the finite-particle subspace $\mathcal D_{\rm fin}$ is dense. The pairing is linear in its second variable. [[def-qft-fock-and-test-spaces]]

[F3] $U(R)$ is a strongly continuous unitary representation on $\mathcal H_T^\nu$, the domain $\mathcal D$ is dense, and each $J_{\mathbf a}$ is its self-adjoint Stone generator with convention $U(R_{\mathbf a}(t))=e^{-itJ_{\mathbf a}/\hbar}$. On $\mathcal D$ its differential expression preserves smoothness, compact support away from $\mathbf k=0$, and transversality. [[def-qftx-photon-helicity-bundle]] [[thm-qftx-photon-rotations-helicity]]

[F4] The Borel helicity decomposition is a unitary $T:\mathcal H_T^\nu\longrightarrow L^2(M\times\{+1,-1\},d\nu\otimes\#;\mathbb C)$ under which $h$ is multiplication by $\sigma$ and $P_\sigma$ is multiplication by $\mathbf1_{\{\sigma\}}$. [[lem-qftx-measurable-helicity-scalarization]]

[F5] For a sigma-finite measured space $(X,\mathcal A,\mu)$ and finite-valued measurable $\boldsymbol\omega:X\to\mathbb R^d$, the Fock sector sum of the coordinate multipliers is self-adjoint on the exact square-integrability domain, and the joint Borel spectral measure supplies the corresponding phase groups and exact derivative domains. [[lem-qft-second-quantized-spectrum]]

[F6] $S_i'=M_{\hbar n_i h}$ and $[J_i,J_j]=i\hbar\sum_k\epsilon_{ijk}J_k$ on $\mathcal D$ are supplied by [[def-qftx-photon-projected-angular]] and [[thm-qftx-photon-projected-commutators]].

[F7] A strongly continuous one-parameter unitary group has a unique self-adjoint Stone generator, with exact domain the norm-differentiability domain. [[thm-stone-one-parameter-unitary-groups]]

## Proof

**Given:** [A1], [F1]–[F7], the one-particle space $\mathcal H_T^\nu$, and $\hbar>0$.

1.1 For $R\in SO(3)$, $U(R)^{\otimes n}$ commutes with the permutation action on $\mathcal H_T^{\widehat\otimes n}$, so it preserves the symmetric sector and is unitary there; set its vacuum-sector value to $1$. The tensor and direct-sum definitions in [F2] give $\Gamma(U(R_1))\Gamma(U(R_2))=\Gamma(U(R_1R_2))$. On an elementary tensor, the telescoping estimate $\|\bigotimes_rU(R)\psi_r-\bigotimes_rU(R_0)\psi_r\|\le\sum_j\|U(R)\psi_j-U(R_0)\psi_j\|\prod_{r\ne j}\|\psi_r\|$ shows strong continuity from that of $U$. Density extends it to each symmetric sector; finite-particle vectors are dense by [F2], and approximation by such vectors with unitarity extends continuity to the full Fock direct sum. For each axis, Stone's theorem [F7] supplies the unique self-adjoint generator $J_{\mathbf a}^{\mathrm F}$. For $\psi_1,\ldots,\psi_n\in D(J_{\mathbf a})$, differentiating the finite tensor product at $t=0$ by the product rule gives the sum of the one-particle derivatives $-iJ_{\mathbf a}\psi_r/\hbar$; symmetrization commutes with the tensor action. Hence the Stone generator acts on these finite symmetric tensors by the displayed $d\Gamma(J_{\mathbf a})$ sum. [A1, F1, F2, F3, F7, given, construct]

1.2 Apply the unitary $T$ of [F4] and its Fock lift $\Gamma(T)=\bigoplus_{n\ge0}T^{\otimes_s n}$. Each sector map is unitary because tensor powers preserve inner products and commute with permutations, so $\Gamma(T)$ is unitary. Put $X=M\times\{+1,-1\}$ and $\boldsymbol\omega(\mathbf k,\sigma)=(|\mathbf k|,\mathbf1_{\{\sigma=+1\}},\mathbf1_{\{\sigma=-1\}})$. The measure $\nu\otimes\#$ is sigma-finite by the bundle definition in [F3], and $\boldsymbol\omega$ is finite-valued and measurable. The three coordinates in [F5] therefore give the self-adjoint Fock multipliers $H_0=d\Gamma(|\mathbf k|)$, $N_+$, and $N_-$ on their exact domains; the third linear combination $H_{(0,1,-1)}$ is the self-adjoint sector multiplier $\sum_r\sigma_r=d\Gamma(h)$. On each finite-particle sector, $\mathbf1_{\{\sigma=+1\}}-\mathbf1_{\{\sigma=-1\}}=\sigma$, so this operator agrees there with the difference $N_+-N_-$. Its full domain is the exact $D(H_{(0,1,-1)})$ supplied by [F5], not an informal difference of unbounded operators. [F2, F3, F4, F5, given, construct]

2.1 The space $\mathscr D_{\rm fin}(\mathcal D)$ is dense because $\mathcal D$ is dense in $\mathcal H_T^\nu$ by [F3], algebraic tensors are dense in each Hilbert tensor completion, and finite-particle truncations are dense in the direct sum by [F2]. It is invariant under the sector sums $d\Gamma(J_i)$ because $J_i\mathcal D\subseteq\mathcal D$ by [F3]. On an elementary $n$-tensor, expanding each sector sum shows that terms acting on distinct tensor factors commute, while terms on the same factor give $[J_i,J_j]$; hence $[d\Gamma(J_i),d\Gamma(J_j)]=\sum_{r=1}^n[J_i,J_j]^{(r)}=i\hbar\sum_k\epsilon_{ijk}d\Gamma(J_k)$ on the symmetrized tensor core by [F6]. This is the asserted Fock total rotation algebra. [F2, F3, F6, step 1.1, given, algebra]

2.2 In the scalarized one-particle representation, $V_t$ is multiplication by $e^{-it|\mathbf k|}$ on both helicity components, so its Fock lift is the phase group $e^{-itH_0}$ from [F5]. The joint spectral measure in [F5] makes this group commute with every Borel function of the helicity coordinates, in particular with $H_{(0,1,-1)}=d\Gamma(h)$; the joint multiplier also preserves its exact domain. Thus $\Gamma(V_t)D_h=D_h\Gamma(V_t)$ for every real $t$, proving the conservation statement. [F4, F5, step 1.2, algebra]

3.1 If $P_\sigma f=f$, then $hf=\sigma f$ by [F4]. By [F6], $S_z'f(\mathbf k)=\hbar n_z(\mathbf k)h(\mathbf n(\mathbf k))f(\mathbf k)=\hbar\sigma\cos\theta(\mathbf k)f(\mathbf k)$. Taking the Hilbert pairing with $f$, using $\|f\|_\nu=1$ and $n_z=k_z/|\mathbf k|=\cos\theta$, gives the displayed expectation identity. The multiplier is bounded, so the integral is finite. [F4, F6, given, algebra] ∎

## Remarks

The photon angular-momentum literature uses different names for the helicity-projected vector $\hbar\mathbf n h$. This proposition fixes the operator convention and proves only its stated mathematical consequences. It does not quantize pointwise products of electromagnetic fields, prove normal ordering or renormalization statements, or identify a canonical field-theory split with a Poynting or kinetic integral.
