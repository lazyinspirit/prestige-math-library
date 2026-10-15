---
id: lem-qft-photon-smeared-potential
kind: lemma
title: Smeared Coulomb photon operator distribution
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-countable-choice
  - def-qft-fock-and-test-spaces
  - def-qft-photon-transverse-space
  - lem-qft-fock-ccr-car
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  def-qft-photon-transverse-space: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, §§6.2.1–6.2.2
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter 6; transverse mode expansion and Coulomb-gauge photon field.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 book draft, §§54–56
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page book draft; canonical transverse photon modes and Coulomb gauge.
---

## Statement

Assume Countable Choice. Let $j=(j_1,j_2,j_3)\in C_c^\infty(\mathbb R^4;\mathbb R^3)$ and use $\mathcal H_T$ and $P_T$ from [[def-qft-photon-transverse-space]]. For $\omega=|\mathbf k|$ and $\mathbf k\ne0$, define
$$g_j(\mathbf k)=\frac{1}{(2\pi)^{3/2}(2\omega)^{1/2}}\,
P_T(\mathbf k)\int_{\mathbb R^4}j(x)e^{i\omega x^0-i\mathbf k\cdot\mathbf x}\,d^4x.$$
Then $g_j\in\mathcal H_T$. On the finite-particle domain $\mathcal D_{\rm fin}$ of the bosonic Fock space $\mathcal F_s(\mathcal H_T)$, the smeared transverse potential is
$$A_T(j)=a(g_j)+a^\dagger(g_j).$$
Its matrix elements are continuous in the test-function topology; it is an operator-valued distribution and does not assign a pointwise operator to $A_i(x)$. With $E_i=-\partial_0A_i$, the equal-time canonical commutator is the distribution
$$[A_i(0,\mathbf x),E_j(0,\mathbf y)]
=-i\,P_{T,ij}(-i\nabla_{\mathbf x})\delta^3(\mathbf x-\mathbf y).$$

## Facts & Assumptions

**Given:** Countable Choice; compact smooth real vector tests; the transverse projection; and the bosonic Fock CCR on $\mathcal D_{\rm fin}$.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] $P_T$ is an orthogonal projection of norm at most one and $\mathcal H_T$ is its closed range. [[def-qft-photon-transverse-space]]

[F2] On finite-particle vectors, $[a(h),a^\dagger(k)]=\langle h,k\rangle_2I$ and the sector maps have bounds $\|a_n(h)\|\le\sqrt n\|h\|$, $\|a_n^\dagger(h)\|\le\sqrt{n+1}\|h\|$. [[lem-qft-fock-ccr-car]]

[F3] Bosonic Fock space is the square-summable direct sum of symmetric particle sectors, $\mathcal D_{\rm fin}$ consists of vectors with only finitely many nonzero sectors, and the test class $C_c^\infty$ has its locally convex LF topology. [[def-qft-fock-and-test-spaces]]

## Proof

**Given:** [A1], [F1]–[F3], and the test $j$ in the statement.

1.1 The integral in $g_j$ is the spacetime Fourier transform of a compactly supported smooth function, hence decreases faster than every inverse power of $|(\omega,\mathbf k)|$ by repeated integration by parts. Near $\mathbf k=0$, it is bounded by $\int|j|$, while the squared prefactor is $1/(2\omega)=1/(2|\mathbf k|)$. The radial integral of this bound is a constant times $\int_0^1r^2/r\,dr<\infty$. At infinity the rapid Fourier decay and $\|P_T\|\le1$ make the squared norm integrable. Also $P_Tg_j=g_j$ almost everywhere. Therefore $g_j\in\mathcal H_T$. [A1, F1, given, algebra]

1.2 By [F3], a vector in $\mathcal D_{\rm fin}$ has only finitely many nonzero sectors. On each such sector [F2] bounds creation and annihilation by the corresponding square-root particle number times $\|g_j\|\|\Psi_n\|$. Thus both maps and their sum are defined on $\mathcal D_{\rm fin}$. The same estimates bound every matrix element between fixed finite-particle vectors by a constant times $\|g_j\|$. On each fixed compact support, repeated integration by parts in step 1.1 bounds $\|g_j\|$ by finitely many smooth-test seminorms, so these matrix elements are continuous in the test-function topology. This proves the asserted distributional smearing without defining a point field. [F2, F3, step 1.1, given]

2.1 Apply the CCR [F2] to the positive- and negative-frequency terms of the mode expansion and use $E=-\partial_0A$. At equal time the two cross terms combine to
$$-i\int_{\mathbb R^3}\frac{d^3\mathbf k}{(2\pi)^3}
\left(\delta_{ij}-\frac{k_i k_j}{|\mathbf k|^2}\right)e^{i\mathbf k\cdot(\mathbf x-\mathbf y)}.$$
This is the distributional Fourier multiplier $-iP_{T,ij}(-i\nabla_{\mathbf x})\delta^3(\mathbf x-\mathbf y)$; its action is defined by pairing the bounded multiplier against Schwartz tests. Thus the equal-time commutator holds after smearing, as claimed. [F1, F2, step 1.2, given] ∎
