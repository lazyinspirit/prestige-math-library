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
$$g_j(\mathbf k)=\frac{1}{(2\pi)^{3/2}(2\omega)^{1/2}}\, P_T(\mathbf k)\int_{\mathbb R^4}j(x)e^{i\omega x^0-i\mathbf k\cdot\mathbf x}\,d^4x.$$
Then $g_j\in\mathcal H_T$. On the finite-particle domain $\mathcal D_{\rm fin}$ of the bosonic Fock space $\mathcal F_s(\mathcal H_T)$, the smeared transverse potential is
$$A_T(j)=a(g_j)+a^\dagger(g_j).$$
Its matrix elements are continuous in the test-function topology; it is an operator-valued distribution and does not assign a pointwise operator to $A_i(x)$. With $E_i=-\partial_0A_i$, the equal-time canonical commutator is the distribution
$$[A_i(0,\mathbf x),E_j(0,\mathbf y)] =-i\,P_{T,ij}(-i\nabla_{\mathbf x})\delta^3(\mathbf x-\mathbf y).$$

## Facts & Assumptions

**Given:** Countable Choice; compact smooth real vector tests; the transverse projection; and the bosonic Fock CCR on $\mathcal D_{\rm fin}$.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] $P_T$ is an orthogonal projection of norm at most one and $\mathcal H_T$ is its closed range. [[def-qft-photon-transverse-space]]

[F2] On finite-particle vectors, $[a(h),a^\dagger(k)]=\langle h,k\rangle_2I$ and the sector maps have bounds $\|a_n(h)\|\le\sqrt n\|h\|$, $\|a_n^\dagger(h)\|\le\sqrt{n+1}\|h\|$. [[lem-qft-fock-ccr-car]]

[F3] Bosonic Fock space is the square-summable direct sum of symmetric particle sectors, $\mathcal D_{\rm fin}$ consists of vectors with only finitely many nonzero sectors, and the test class $C_c^\infty$ has its locally convex LF topology. [[def-qft-fock-and-test-spaces]]

## Proof

**Given:** [A1], [F1]–[F3], and the test $j$ in the statement.

1.1 The integral in $g_j$ is the spacetime Fourier transform of a compactly supported smooth function, hence decreases faster than every inverse power of $|(\omega,\mathbf k)|$ by repeated integration by parts. Near $\mathbf k=0$, it is bounded by $\int|j|$, while the squared prefactor is $1/(2\omega)=1/(2|\mathbf k|)$. The radial integral of this bound is a constant times $\int_0^1r^2/r\,dr<\infty$. At infinity the rapid Fourier decay and $\|P_T\|\le1$ make the squared norm integrable. Also $P_Tg_j=g_j$ almost everywhere. Therefore $g_j\in\mathcal H_T$. [A1, F1, given, algebra]

2.1 By [F3], a vector in $\mathcal D_{\rm fin}$ has only finitely many nonzero sectors. On each such sector [F2] bounds creation and annihilation by the corresponding square-root particle number times $\|g_j\|\|\Psi_n\|$. Thus both maps and their sum are defined on $\mathcal D_{\rm fin}$. The same estimates bound every matrix element between fixed finite-particle vectors by a constant times $\|g_j\|$. On each fixed compact support, repeated integration by parts in step 1.1 bounds $\|g_j\|$ by finitely many smooth-test seminorms, so these matrix elements are continuous in the test-function topology. This proves the asserted distributional smearing without defining a point field. [F2, F3, step 1.1, given]

3.1 Write $\omega=|\mathbf k|$, and use the Fourier convention $\widehat f(\mathbf k)=\int_{\mathbb R^3}f(\mathbf x)e^{-i\mathbf k\cdot\mathbf x}\,d^3\mathbf x$. The expansion implied by the definition of $g_j$ is
$$A_i(x^0,\mathbf x)=\int_{\mathbb R^3}\frac{d^3\mathbf k}{(2\pi)^{3/2}(2\omega)^{1/2}}\left(a_i(\mathbf k)e^{-i\omega x^0+i\mathbf k\cdot\mathbf x}+a_i^\dagger(\mathbf k)e^{i\omega x^0-i\mathbf k\cdot\mathbf x}\right),$$
$$E_i(x^0,\mathbf x)=-\partial_0A_i(x^0,\mathbf x)=\int_{\mathbb R^3}\frac{d^3\mathbf k}{(2\pi)^{3/2}}\left(\frac{\omega}{2}\right)^{1/2}\left(ia_i(\mathbf k)e^{-i\omega x^0+i\mathbf k\cdot\mathbf x}-ia_i^\dagger(\mathbf k)e^{i\omega x^0-i\mathbf k\cdot\mathbf x}\right).$$
Smearing the first line with $j\in C_c^\infty(\mathbb R^4;\mathbb R^3)$ gives exactly $a(g_j)+a^\dagger(g_j)$: the annihilation term uses conjugate-linearity of $a$, while the creation term is linear in its argument.
Here the formula is for $\mathbf k\ne0$; values at $\mathbf k=0$ are irrelevant to the integrals. The symbols $a_i(\mathbf k)$ and $a_i^\dagger(\mathbf k)$ are distributional notation for the Fock maps: for Schwartz vectors $u,v:\mathbb R^3\to\mathbb C^3$ set $a(u):=a(P_Tu)$ and $a^\dagger(v):=a^\dagger(P_Tv)$. Then [F2] gives $[a(u),a^\dagger(v)]=\int\overline{u_i(\mathbf k)}P_{T,ij}(\mathbf k)v_j(\mathbf k)\,d^3\mathbf k\,I$, equivalently the kernel notation $[a_i(\mathbf k),a_j^\dagger(\mathbf q)]=P_{T,ij}(\mathbf k)\delta^3(\mathbf k-\mathbf q)I$. The mode integrals are understood after test smearing; near $\mathbf k=0$ their squared one-particle weights behave respectively as $1/\omega$ and $\omega$, both locally integrable against $d^3\mathbf k$, and at infinity the Fourier transforms of the spatial tests decrease rapidly.

3.2 For real $f,h\in\mathcal S(\mathbb R^3;\mathbb R^3)$, define the equal-time spatial smearings by pairing the mode distributions with the spatial tests, $A(f):=\sum_i\int_{\mathbb R^3}f_i(\mathbf x)A_i(0,\mathbf x)\,d^3\mathbf x$ and $E(h):=\sum_j\int_{\mathbb R^3}h_j(\mathbf y)E_j(0,\mathbf y)\,d^3\mathbf y$. The one-particle vectors in these definitions are
$$g_f(\mathbf k)=\frac{P_T(\mathbf k)\widehat f(\mathbf k)}{(2\pi)^{3/2}(2\omega)^{1/2}},\qquad e_h(\mathbf k)=-i\frac{\omega^{1/2}P_T(\mathbf k)\widehat h(\mathbf k)}{(2\pi)^{3/2}2^{1/2}}.$$
These belong to $\mathcal H_T$ by the preceding bounds, and $A(f)=a(g_f)+a^\dagger(g_f)$, $E(h)=a(e_h)+a^\dagger(e_h)$. The CCR [F2] gives
$$[A(f),E(h)]=-i\int_{\mathbb R^3}\frac{d^3\mathbf k}{(2\pi)^3}\,\overline{\widehat f_i(\mathbf k)}P_{T,ij}(\mathbf k)\widehat h_j(\mathbf k)\,I.$$
For real $f,h$, this Fourier integral is real because $P_T$ is real and even and $\widehat f(-\mathbf k)=\overline{\widehat f(\mathbf k)}$, $\widehat h(-\mathbf k)=\overline{\widehat h(\mathbf k)}$.
Equivalently, as a tempered distribution in $\mathbf z=\mathbf x-\mathbf y$,
$$[A_i(0,\mathbf x),E_j(0,\mathbf y)]=-iK_{ij}(\mathbf x-\mathbf y),\qquad K_{ij}(\mathbf z)=(2\pi)^{-3}\int_{\mathbb R^3}P_{T,ij}(\mathbf k)e^{i\mathbf k\cdot\mathbf z}\,d^3\mathbf k.$$
The last integral defines a tempered distribution because $P_T$ is measurable and bounded: for $\varphi\in\mathcal S(\mathbb R^3)$ its pairing is $(2\pi)^{-3}\int P_{T,ij}(\mathbf k)\widehat\varphi(-\mathbf k)\,d^3\mathbf k$, which is absolutely convergent. Since the Fourier symbol of $P_{T,ij}(-i\nabla)$ is $P_{T,ij}(\mathbf k)$, this distribution is exactly $P_{T,ij}(-i\nabla_{\mathbf x})\delta^3(\mathbf x-\mathbf y)$. The sign is negative because $E=-\partial_0A$: the annihilation/creation cross terms contribute $-i/2$ each at equal time. Thus the stated equal-time commutator holds distributionally after smearing, with its stated sign. [F1, F2, F3, step 2.1, given] ∎
