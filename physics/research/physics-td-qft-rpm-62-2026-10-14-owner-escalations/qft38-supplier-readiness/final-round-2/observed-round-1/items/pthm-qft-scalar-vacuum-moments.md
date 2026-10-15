---
id: pthm-qft-scalar-vacuum-moments
kind: physics-theorem
title: Gaussian free vacuum and time-ordered carrier
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: physics
library: physics
dependency_level: 6
deps:
  - post-qft-free-field-model
  - def-qft-free-scalar-model
  - def-countable-choice
  - lem-qft-smeared-free-scalar
  - lem-qft-segal-weyl-domain
  - lem-qft-free-time-ordered-kernel
dependency_roles:
  post-qft-free-field-model: physical-assumption
  def-qft-free-scalar-model: formulation-prerequisite
  def-countable-choice: mathematical-premise
  lem-qft-smeared-free-scalar: mathematical-premise
  lem-qft-segal-weyl-domain: mathematical-premise
  lem-qft-free-time-ordered-kernel: mathematical-premise
physical_scope: "Conditional vacuum, smeared-field moments, bounded Weyl expectations and the exact distributional time-ordered two-point carrier for the selected real scalar free Fock model. No interacting convergence or renormalized local product is claimed."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, University of Cambridge Part III lecture notes, Chapter 2, §§2.2–2.4, 2.6.1 and 2.7.1"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf"
      locator: "Complete 155-page author-hosted lecture notes; printed pp. 23–32 and 35–40."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft, §3 Canonical Quantization of Scalar Fields"
      url: "https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "Complete 616-page book draft; printed pp. 36–42, scalar action, mass-shell measure, mode normalization, canonical commutators and Hamiltonian."
---

## Statement

Assume the scalar model adoption planned in
[[post-qft-free-field-model]], Countable Choice
[[def-countable-choice]], and the exact model of
[[def-qft-free-scalar-model]]. For real Schwartz tests $f_1,\ldots,f_n$,
the vacuum expectation of the ordered product of smeared fields is zero
when $n$ is odd. When $n$ is even, it is the sum over pairings of products
of the corresponding two-point functions
$\langle K_\mu f_r,K_\mu f_s\rangle_2$ for $r<s$ in each pair. For a real
Schwartz test $f$, the bounded Weyl operator has vacuum expectation
$\langle\Omega,W_\mu(f)\Omega\rangle
=\exp(-\|K_\mu f\|_2^2/2)$.

The time-ordered two-point carrier is the tempered distribution $H_\mu$
defined by the partial spatial Fourier formula of
[[lem-qft-free-time-ordered-kernel]]. It agrees with the ordered Wightman
distributions away from equal-time coincidence and satisfies
$(\Box-\mu^2)H_\mu=i\delta_0$. The formula fixes its extension at coincidence
and includes no additional prefactor $i$. These are conditional deductions
for the selected free model.

## Facts & Assumptions

**Given:** The planned physical model adoption and the current mathematical
field, Weyl, and time-kernel interfaces.

[A1] Planned physical premise [[post-qft-free-field-model]]: the selected
real spin-zero scalar branch uses the adopted canonical free-field model and
bosonic representation. The item carrier is absent from the current
qft-f01 manifest; the proof remains conditional on this planned interface.

[F1] [[def-qft-free-scalar-model]]: the one-particle shell, symmetric Fock
space, vacuum, finite-particle domain, and scalar field formula are fixed.

[F2] [[lem-qft-smeared-free-scalar]]: real smeared fields satisfy the bosonic
CCR on the finite-particle domain; the vacuum two-point form is
$\langle K_\mu\overline f,K_\mu g\rangle_2$, and ordered vacuum moments obey
the CCR pairing recursion.

[F3] [[lem-qft-segal-weyl-domain]]: the Segal Weyl operators are bounded
unitaries with
$\langle\Omega,W(h)\Omega\rangle_2=e^{-\|h\|_2^2/4}$.

[F4] [[lem-qft-free-time-ordered-kernel]]: the partial Fourier formula
defines a tempered time-ordered scalar two-point distribution, including
its equal-time extension, and
$(\Box-\mu^2)H_\mu=i\delta_0$.

## Proof

**Given:** [A1] and [F1]–[F4].

1.1 The physical field in the selected model is the map in [F1], and its
action on the common finite-particle domain is supplied by the mathematical
construction [F2]. The vacuum $\Omega$ is the zero-particle vector in that
definition. [A1, F1, F2, given]

1.2 For real $f$, [F2] identifies the physical Weyl operator as
$W_\mu(f)=W_{\mathrm{Segal}}(\sqrt2K_\mu f)$. Substituting
$h=\sqrt2K_\mu f$ into [F3] gives
$\langle\Omega,W_\mu(f)\Omega\rangle_2
=\exp(-\|\sqrt2K_\mu f\|_2^2/4)
=\exp(-\|K_\mu f\|_2^2/2)$. [F1, F2, F3, algebra]

2.1 For an ordered product, write its first field as creation plus
annihilation. The creation term has zero pairing against the left vacuum.
Commute the annihilation term through the later fields using the CCR in
[F2]; each commutator is the associated two-point pairing, and the final
annihilator kills the right vacuum. Thus the $n$-point moment is the sum,
over the possible partner of the first field, of that two-point pairing
times the $(n-2)$-point moment of the remaining ordered fields. Starting
with vacuum moment $1$ at $n=0$, induction gives zero for odd $n$ and the
sum over pairings for even $n$. [F1, F2, step 1.1, given, algebra]

3.1 The distribution $H_\mu$ is defined by the exact partial spatial
Fourier formula and extension in [F4]. That supplier proves its
temperedness, the ordered Wightman restrictions off coincidence, and the
Green equation with the stated $(-+++)$ convention. Therefore these
properties hold for the selected scalar model, with no extra factor $i$ in
the definition. [F1, F4, given] ∎
