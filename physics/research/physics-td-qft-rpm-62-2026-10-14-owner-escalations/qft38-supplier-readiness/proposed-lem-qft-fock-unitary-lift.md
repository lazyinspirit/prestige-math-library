---
id: lem-qft-fock-unitary-lift
kind: lemma
title: Unitary lift to bosonic Fock space
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-qft-fock-and-test-spaces
  - def-countable-choice
  - lem-nrqm-composites-hilbert-tensor-construction
  - lem-nrqm-composites-permutation-sector-projections
dependency_roles:
  def-qft-fock-and-test-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, section 2.4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf
      locator: Complete 155-page lecture notes; multiparticle Fock sectors and mode transformations, printed pages 23–25. The arbitrary-unitary lift and continuity claim are proved from the exact tensor-sector definitions on this page.
---

## Statement

Assume Countable Choice [[def-countable-choice]]. Let $H$ and $K$ be complex
Hilbert spaces and let $U:H\to K$ be unitary. The sector maps
$U^{\otimes n}$ restrict to unitaries $U_s^{(n)}:H_s^{(n)}\to K_s^{(n)}$;
their direct sum
$$\Gamma_s(U)=\bigoplus_{n=0}^\infty U_s^{(n)}$$
is unitary, maps vacuum to vacuum, and maps the finite-particle domain
$\mathcal D_{\rm fin}(H)$ onto $\mathcal D_{\rm fin}(K)$. It intertwines the
creation and annihilation maps:
$$\Gamma_s(U)a_H^\dagger(h)\Gamma_s(U)^{-1}=a_K^\dagger(Uh),\qquad
\Gamma_s(U)a_H(h)\Gamma_s(U)^{-1}=a_K(Uh)$$
on the finite-particle domain. If $g\mapsto U_g$ is a strongly continuous
family of unitaries, then $g\mapsto\Gamma_s(U_g)$ is strongly continuous.

## Facts & Assumptions

**Given:** Countable Choice; the symmetric tensor-sector Fock conventions and
creation/annihilation formulas of [[def-qft-fock-and-test-spaces]].

[A1] Countable Choice is the choice assumption used for the completed tensor
and sector constructions. [[def-countable-choice]]

[F1] Fock space is the Hilbert direct sum of symmetric tensor powers, the
vacuum is the zeroth sector, finite-particle vectors are dense, and creation
and annihilation are the symmetrized tensor-insertion and contraction maps.
[[def-qft-fock-and-test-spaces]]

[F2] Hilbert tensor products are completed from elementary tensors, and
permutation averaging is the orthogonal projection onto the symmetric
subspace. [[lem-nrqm-composites-hilbert-tensor-construction]]
[[lem-nrqm-composites-permutation-sector-projections]]

## Proof

1.1 Since $U$ is unitary, $U^{\otimes n}$ is unitary on the completed tensor
power by its isometric action on elementary tensors and its inverse
$(U^{-1})^{\otimes n}$. It commutes with every tensor-factor permutation,
because both compositions send an elementary tensor to
$Uh_{\pi(1)}\otimes\cdots\otimes Uh_{\pi(n)}$. It therefore commutes with the
symmetric averaging projection of [F2] and restricts to a unitary
$U_s^{(n)}$ on its range. The zeroth sector is the identity on $\mathbb C$.
[F1, F2, given, algebra]

1.2 The direct sum of the sector unitaries preserves the sum of squared
sector norms and has inverse $\bigoplus_n(U^{-1})_s^{(n)}$, so it is unitary.
It fixes the zeroth-sector vacuum and preserves finite sums of sectors in
both directions. On an elementary symmetric tensor, applying the Fock
creation formula before or after this direct sum gives the symmetrization of
$Uh$ together with the images of the original tensor factors; hence the two
creation maps intertwine. The annihilation formula is its adjoint contraction
and the same tensor calculation replaces each contracted vector $h$ by $Uh$.
Linearity, boundedness on each fixed sector, and density of elementary
tensors extend both identities to $\mathcal D_{\rm fin}$. [F1, F2, step 1.1,
given, algebra]

2.1 Fix $n$. For an elementary tensor,
$$\|U_g^{\otimes n}(h_1\otimes\cdots\otimes h_n)
-U_{g_0}^{\otimes n}(h_1\otimes\cdots\otimes h_n)\|
\le\sum_{r=1}^n\prod_{s\ne r}\|h_s\|\,
\|(U_g-U_{g_0})h_r\|,$$
by the telescoping expansion of the tensor difference and unitary norm
preservation. Strong continuity of $U_g$ makes the right side tend to zero.
Density of elementary tensors and the uniform norm bound $1$ extend
continuity to the completed sector and its closed symmetric subspace. Finite
sector sums are dense by [F1]; approximating an arbitrary Fock vector by
such a sum and using $\|\Gamma_s(U_g)\|=1$ proves strong continuity on the
whole direct sum. [F1, step 1.1, given, algebra] ∎
