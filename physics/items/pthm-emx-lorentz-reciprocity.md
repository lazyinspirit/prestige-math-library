---
id: pthm-emx-lorentz-reciprocity
kind: physics-theorem
title: "Reciprocity in reciprocal linear media"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 1
proof_strategy: direct
deps:
  - def-emx-anisotropic-plane-symbol
  - def-emx-reciprocal-phasor-medium
  - def-countable-choice
  - lem-the-divergence-and-curl-of-a-cross-product
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
dependency_roles:
  def-emx-anisotropic-plane-symbol: formulation-prerequisite
  def-emx-reciprocal-phasor-medium: formulation-prerequisite
  def-countable-choice: mathematical-premise
  lem-the-divergence-and-curl-of-a-cross-product: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional fixed-frequency reciprocity identity in the local linear macroscopic phasor model on a bounded C1 Euclidean domain, for C1 phasor solutions, continuous sources and pointwise transpose-symmetric possibly complex constitutive tensors. The result requires no passivity or losslessness and asserts no field existence, uniqueness, causal material response or empirical validity."
sources:
  references:
    - title: "Jin Au Kong, Electromagnetic Wave Theory, last edition 2008, PIERS free release 2021"
      url: "https://piers.org/piers/files/BOOK_ElectromagneticWaveTheory_by_JINAUKONG_FreeRelease2021.pdf"
      locator: "Chapter 3, §3.2.E, printed pp. 299–300, equations (3.2.15)–(3.2.26): reciprocal source identity and the transpose, not Hermitian, symmetry conditions for complex constitutive tensors."
    - title: "Weng Cho Chew, Electromagnetic Field Theory, Purdue ECE 604 lecture notes, 2023–2024 revision"
      url: "https://engineering.purdue.edu/wcchew/ece604f23/EMFTEDX032124R.pdf"
      locator: "Chapter 12, §12.1–§12.1.1, printed pp. 146–148: derivation for general linear anisotropic inhomogeneous tensor media and the boundary identity; §12.2, printed p. 149: symmetric tensors can be lossy and reciprocal. The source uses exp(+jωt), opposite to the exp(−iωt) convention fixed here."
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $\Omega\subset\mathbb R^3$ be a bounded domain with $C^1$ boundary and outward unit normal $n$. Fix a real angular frequency $\omega$ in $\mathrm{s^{-1}}$. Let $E_j,H_j\in C^1(\overline\Omega;\mathbb C^3)$ and $J_j\in C^0(\overline\Omega;\mathbb C^3)$, for $j=1,2$, be phasor fields and electric-current densities in $\mathrm{V\,m^{-1}}$, $\mathrm{A\,m^{-1}}$, and $\mathrm{A\,m^{-2}}$, respectively. Suppose both pairs solve the fixed-frequency Maxwell equations there with the same continuous coefficient maps $\varepsilon,\mu:\overline\Omega\to\mathbb C^{3\times3}$ and $\varepsilon(x)^T=\varepsilon(x)$, $\mu(x)^T=\mu(x)$ at every $x$. Use Euclidean volume measure $dV$ and boundary area measure $dS$. Then

$$\int_{\partial\Omega}n\cdot(E_1\times H_2-E_2\times H_1)\,dS=\int_\Omega(E_2\cdot J_1-E_1\cdot J_2)\,dV.$$

The dot and cross products in this identity are the complex-bilinear products defined in the reciprocal phasor model; no complex conjugation occurs. Both integrals have units W. In particular, the real symmetric positive permittivity tensor and positive scalar permeability of the lossless anisotropic plane-wave model satisfy these reciprocal-coefficient hypotheses, so the algebraic identity applies to any two such phasor solutions restricted to a bounded $C^1$ subdomain. Physical use of that anisotropic branch is restricted to its declared finite positive-frequency band $I_\omega=[\omega_-,\omega_+]$, $0<\omega_-<\omega_+<\infty$; the reciprocity identity itself asserts no broadband material response.

## Statement references

[[def-emx-reciprocal-phasor-medium]]

[[def-emx-anisotropic-plane-symbol]]

[[def-countable-choice]]

[[lem-the-divergence-and-curl-of-a-cross-product]]

[[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the bounded $C^1$ domain, the real frequency, C1 phasor fields, continuous sources, common complex constitutive tensors and their pointwise transpose symmetry stated above.

[A1] $\mathrm{AC}_\omega$ is the axiom that every countable family of nonempty sets has a choice function; it is assumed by the divergence-theorem supplier used here ([[def-countable-choice]]).

[F1] For real C1 vector fields $F,G$, $\operatorname{div}(F\times G)=G\cdot\operatorname{curl}F-F\cdot\operatorname{curl}G$ ([[lem-the-divergence-and-curl-of-a-cross-product]]).

[F2] For a bounded C1 domain and $F\in C^1(\overline\Omega;\mathbb R^3)$, $\int_\Omega\operatorname{div}F\,dV=\int_{\partial\Omega}F\cdot n\,dS$, under $\mathrm{AC}_\omega$ ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[L1] In the reciprocal phasor model, $D_j=\varepsilon E_j$, $B_j=\mu H_j$, $\operatorname{curl}E_j=i\omega B_j$, and $\operatorname{curl}H_j=J_j-i\omega D_j$; reciprocal coefficients mean the ordinary pointwise transpose equalities $\varepsilon^T=\varepsilon$ and $\mu^T=\mu$, even when the entries are complex ([[def-emx-reciprocal-phasor-medium]]).

[L2] In the lossless anisotropic plane-wave branch, $\varepsilon$ is real symmetric positive definite and $\mu$ is a positive real scalar; its physical phase-response interpretation is restricted to the declared finite band $I_\omega$ ([[def-emx-anisotropic-plane-symbol]]).

## Proof

1.1 Put $X=E_1\times H_2-E_2\times H_1$. For the first product write $E_1=U+iV$ and $H_2=W+iZ$ with real C1 fields. The complex-bilinear product is $E_1\times H_2=(U\times W-V\times Z)+i(U\times Z+V\times W)$; applying [F1] to each real pair and using the componentwise real-linearity of curl and divergence gives $\operatorname{div}(E_1\times H_2)=H_2\cdot\operatorname{curl}E_1-E_1\cdot\operatorname{curl}H_2$. The same expansion for $E_2\times H_1$ yields $\operatorname{div}X=H_2\cdot\operatorname{curl}E_1-E_1\cdot\operatorname{curl}H_2-H_1\cdot\operatorname{curl}E_2+E_2\cdot\operatorname{curl}H_1$. Substituting [L1] yields $E_2\cdot J_1-E_1\cdot J_2+i\omega(H_2\cdot\mu H_1-H_1\cdot\mu H_2+E_1\cdot\varepsilon E_2-E_2\cdot\varepsilon E_1)$. For any complex vectors $u,v$, $u\cdot\varepsilon v=\sum_{r,s}u_r\varepsilon_{rs}v_s=v\cdot\varepsilon u$ by swapping $r,s$ and using $\varepsilon_{rs}=\varepsilon_{sr}$; the same calculation applies to $\mu$. Thus the tensor terms cancel without conjugation and $\operatorname{div}X=E_2\cdot J_1-E_1\cdot J_2$. [given, F1, L1, algebra]

2.1 The field $X$ is C1 on $\overline\Omega$. Apply [F2] separately to its real and imaginary parts, which satisfy the theorem's real-valued hypotheses, and combine the two identities complex-linearly. Substituting step 1.1 into the resulting equality gives the displayed boundary identity. [given, A1, F2, step 1.1, algebra]

3.1 By [L2], the lossless anisotropic plane-wave branch has a real symmetric tensor $\varepsilon$ and scalar $\mu$; therefore its ordinary transposes equal themselves, so it is a subcase of the coefficient class in [L1]. Applying step 2.1 to any two C1 phasor solutions in that subcase proves the anisotropic specialization, with its physical use restricted to the finite band in [L2]. [given, L1, L2, step 2.1] ∎

## Remarks

The symmetric conditions use transpose, not conjugate transpose. Positive absorption can therefore coexist with this reciprocity identity; the identity alone asserts neither losslessness nor time-reversal invariance.
