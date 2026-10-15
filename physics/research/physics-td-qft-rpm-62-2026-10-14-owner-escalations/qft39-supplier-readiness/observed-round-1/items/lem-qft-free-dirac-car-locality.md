---
id: lem-qft-free-dirac-car-locality
kind: lemma
title: Smeared free Dirac CAR fields and graded locality
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
deps:
  - def-qft-dirac-projections
  - lem-qft-dirac-projection-matrices
  - def-qft-fock-and-test-spaces
  - lem-qft-fock-ccr-car
  - def-qft-scalar-mass-shell
  - lem-qft-scalar-causal-commutator
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-sr-affine-minkowski-model
  - def-inertial-frame-and-inertial-chart
dependency_roles:
  def-qft-dirac-projections: mathematical-premise
  lem-qft-dirac-projection-matrices: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
  def-qft-scalar-mass-shell: mathematical-premise
  lem-qft-scalar-causal-commutator: mathematical-premise
  thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 5, quantizing the Dirac field
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf
      locator: Complete 155-page author-hosted notes; Chapter 5 §§5.2–5.4, mode expansion, canonical anticommutation relations, anticommutator kernel and spacelike locality.
    - title: Niklas Beisert, Quantum Field Theory I, ETH Zürich HS12 lecture notes
      url: https://edu.itp.phys.ethz.ch/hs12/qft1/QFT1HS12Notes.pdf
      locator: Complete 162-page course notes; Chapter 5 §§5.1–5.4, Clifford relation, spinor solutions and fermionic field construction.
---

## Statement

Assume Countable Choice [[def-countable-choice]], let $\mu\ge0$, and use [[def-qft-dirac-projections]], [[lem-qft-dirac-projection-matrices]], and the antisymmetric Fock and CAR conventions of [[def-qft-fock-and-test-spaces]] and [[lem-qft-fock-ccr-car]]. For $F\in\mathscr S(\mathbb R^4;\mathbb C^4)$, define
$$\widehat F(t,\mathbf k)=\int_{\mathbb R^3}e^{-i\mathbf k\cdot\mathbf x}F(t,\mathbf x)\,d^3\mathbf x,\qquad u_F(\mathbf k)=\int_{\mathbb R}e^{ih_D(\mathbf k)t}\widehat F(t,\mathbf k)\,dt.$$
Then $u_F\in\mathcal H_D$, continuously in the Schwartz topology, and
$$\Psi(F)=c(P_+u_F)+c^\dagger(\overline{P_-u_F})$$
defines a bounded operator on $\mathcal F_a(\mathcal H_+\oplus\overline{\mathcal H_-})$, antilinear in $F$. It satisfies
$$\{\Psi(F),\Psi(G)\}=0,\qquad \{\Psi(F),\Psi(G)^\dagger\}=\langle u_F,u_G\rangle_{\mathcal H_D}I.$$
Its tested free equation is $u_{(i\partial_0-h_D(-i\nabla))F}=0$. For spatial Schwartz spinors $u,v$, the equal-time field $\Psi_t(u)=c(P_+e^{ih_Dt}\widehat u)+c^\dagger(\overline{P_-e^{ih_Dt}\widehat u})$ satisfies $\{\Psi_t(u),\Psi_t(v)^\dagger\}=\int u(\mathbf x)^\dagger v(\mathbf x)\,d^3\mathbf x\,I$ and $\{\Psi_t(u),\Psi_t(v)\}=0$.

The spacetime anticommutator kernel is
$$R(\tau,\mathbf x)=\int_{\mathbb R^3}e^{-ih_D(\mathbf k)\tau}e^{i\mathbf k\cdot\mathbf x}\,\frac{d^3\mathbf k}{(2\pi)^3}=\partial_\tau\Delta_\mu(\tau,\mathbf x)I_4-i h_D(-i\nabla)\Delta_\mu(\tau,\mathbf x),$$
where $\Delta_\mu$ is the scalar causal commutator distribution of [[lem-qft-scalar-causal-commutator]]. Thus the kernel is supported in the closed causal cone. Spinor tests with compact spacelike-separated supports have vanishing anticommutators with one another and with each other's adjoints. Consequently, even polynomials in the bounded smeared fields commute across spacelike-separated regions. These are mathematical properties of the specified free-field construction.

## Facts & Assumptions

**Given:** Countable Choice, the fixed $(-,+,+,+)$ metric and Fourier conventions, the explicit Dirac matrices and projections, the CAR Fock representation, the L1/L2 Fourier agreement, and the scalar causal commutator supplier.

[A1] Countable Choice is the choice strength of the separable Fock and CAR suppliers. [[def-countable-choice]]

[F1] The second-variable-linear pairing, conjugate Hilbert space, and antisymmetric Fock conventions are those in [[def-qft-fock-and-test-spaces]].

[F2] The Pauli matrices, $h_D$, $P_\pm$, $\mathcal H_\pm$, and Clifford conventions are those in [[def-qft-dirac-projections]]; the matrices are complementary orthogonal rank-two projections and $h_D$ is self-adjoint on its maximal domain by [[lem-qft-dirac-projection-matrices]].

[F3] The fermionic creation and annihilation operators are bounded, with $\{c(h),c^\dagger(k)\}=\langle h,k\rangle I$ and same-type anticommutators zero. [[lem-qft-fock-ccr-car]]

[F4] With $\widehat u(\mathbf k)=\int e^{-i\mathbf k\cdot\mathbf x}u(\mathbf x)d^3\mathbf x$, the Fourier L2 pairing satisfies $\int\widehat u^\dagger\widehat v\,d^3\mathbf k/(2\pi)^3=\int u^\dagger v\,d^3\mathbf x$. [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]

[F5] The scalar distribution $\Delta_\mu$ is tempered, has support in $\{(t,\mathbf x):|\mathbf x|\le|t|\}$, and the scalar shell and causal conventions use $\omega^2=|\mathbf k|^2+\mu^2$. [[def-qft-scalar-mass-shell]] [[lem-qft-scalar-causal-commutator]]

[F6] In the inertial coordinates, spacelike-separated compact supports have every pairwise difference outside the closed causal cone. [[def-sr-affine-minkowski-model]] [[def-inertial-frame-and-inertial-chart]]

[F7] Absolutely integrable products may be rearranged by the sigma-finite Fubini theorem. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

## Proof

1.1 For every integer $N\ge2$, repeated integration by parts in $\mathbf x$ gives $(1+|\mathbf k|^2)^N\widehat F(t,\mathbf k)=\widehat{(1-\Delta_{\mathbf x})^NF}(t,\mathbf k)$. Since $F$ is Schwartz, the right side is bounded by a finite Schwartz seminorm times $(1+|t|)^{-2}$. Thus $|\widehat F(t,\mathbf k)|\le C_N(F)(1+|t|)^{-2}(1+|\mathbf k|)^{-2N}$. The matrix exponential is pointwise unitary by [F2]; integrating this bound in $t$ yields $|u_F(\mathbf k)|\le C'_N(F)(1+|\mathbf k|)^{-2N}$. This is square-integrable in three dimensions for $N\ge2$, with norm bounded by the displayed Schwartz seminorm, so $u_F\in\mathcal H_D$ continuously. [F2, given, algebra]

1.2 The first field term is antilinear in $F$ because $u_F$ is linear and $c$ is conjugate-linear; the second is antilinear because complex conjugation into $\overline{\mathcal H_-}$ is conjugate-linear and $c^\dagger$ is linear. Expanding the anticommutators with [F3], the only nonzero terms in $\{\Psi(F),\Psi(G)^\dagger\}$ are the particle pairing $\langle P_+u_F,P_+u_G\rangle$ and the conjugate negative-space pairing $\langle\overline{P_-u_G},\overline{P_-u_F}\rangle=\langle P_-u_F,P_-u_G\rangle$. Orthogonality and $P_++P_-=I$ make their sum $\langle u_F,u_G\rangle$. The same-type anticommutator is zero because same-type CAR vanish within each species and the two species are orthogonal. Boundedness follows from $\|\Psi(F)\|\le\|P_+u_F\|+\|P_-u_F\|\le\sqrt2\|u_F\|$. [F1, F2, F3, step 1.1, algebra]

2.1 The spatial Fourier transform of $(i\partial_0-h_D(-i\nabla))F$ is $i\partial_t\widehat F-h_D(\mathbf k)\widehat F$. Since $F$ is Schwartz, $e^{ih_Dt}\widehat F(t,\mathbf k)$ tends to zero as $t\to\pm\infty$. Integration by parts gives $\int e^{ih_Dt}i\partial_t\widehat F\,dt=\int h_D e^{ih_Dt}\widehat F\,dt$, which cancels the second term in the definition of $u$. Hence $u_{(i\partial_0-h_D(-i\nabla))F}=0$. The matrix identity in [F2] identifies this with the stated tested Dirac equation. [F2, step 1.1, given, algebra]

3.1 The equal-time CAR expansion gives $\{\Psi_t(u),\Psi_t(v)^\dagger\}=\int\widehat u(\mathbf k)^\dagger(P_++P_-)\widehat v(\mathbf k)\,d^3\mathbf k/(2\pi)^3$. By [F2] the sum is $I_4$, and [F4] turns the integral into $\int u^\dagger v\,d^3\mathbf x$. The same-type CAR vanish by [F3]. [F2, F3, F4, algebra]

3.2 The unsmeared anticommutator kernel obtained from the same CAR expansion is $\int(P_+e^{-i\omega\tau}+P_-e^{i\omega\tau})e^{i\mathbf k\cdot\mathbf x}d^3\mathbf k/(2\pi)^3=e^{-ih_D\tau}$ in Fourier form. Since $h_D^2=\omega^2I_4$, this equals $\partial_\tau\Delta_\mu I_4-i h_D(-i\nabla)\Delta_\mu$, using $\partial_\tau(\sin\omega\tau/\omega)=\cos\omega\tau$. The equality is distributional: the shell weights grow at most polynomially and the test Fourier transforms decay rapidly, so the pairings converge absolutely and Fubini [F7] applies. Differential operators do not enlarge distributional support; [F5] therefore gives $\operatorname{supp}R\subseteq\{|\mathbf x|\le|\tau|\}$. [F2, F3, F5, F7, step 1.1, algebra]

4.1 If compact supports $K,L$ are spacelike separated, [F6] places the compact difference set $K-L$ outside $\operatorname{supp}R$. Pairing $R(x-y)$ with the product of any two supported spinor tests therefore gives zero, so both the field-field and field-adjoint anticommutators vanish. For monomials of degrees $r,s$, moving each of the $r$ fermionic factors past each of the $s$ factors contributes $(-1)^{rs}$; when both monomials have even degree this sign is $+1$. Finite sums of even monomials therefore commute, and norm limits preserve commutation because the generating fields are bounded. [F3, F5, F6, step 3.2, algebra] ∎
