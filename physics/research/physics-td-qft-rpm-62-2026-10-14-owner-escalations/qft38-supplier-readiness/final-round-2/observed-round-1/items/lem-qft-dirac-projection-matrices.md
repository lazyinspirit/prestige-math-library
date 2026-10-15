---
id: lem-qft-dirac-projection-matrices
kind: lemma
title: Dirac matrix identities and orthogonal energy projections
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qft-dirac-projections
  - def-countable-choice
  - lem-qft-lorentz-boost-rotation-factorization
  - def-unbounded-linear-operator-domain-and-graph
  - def-densely-defined-closed-and-closable-operator
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-euclidean-inner-product
  - def-cross-product-in-r3
  - def-sine-and-cosine-by-power-series
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-and-cosine-derivatives
  - thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn
dependency_roles:
  def-qft-dirac-projections: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qft-lorentz-boost-rotation-factorization: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 4, the Dirac equation and plane-wave solutions
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf
      locator: Complete 155-page author-hosted notes; Chapter 4, Clifford algebra, explicit Dirac matrices and on-shell spinor solutions.
    - title: Niklas Beisert, Quantum Field Theory I, ETH Zürich HS12 lecture notes
      url: https://edu.itp.phys.ethz.ch/hs12/qft1/QFT1HS12Notes.pdf
      locator: Complete 162-page course notes; Chapter 5 §5.1, equations (5.1)–(5.15), Clifford relation and rank-two mass-shell projectors.
---

## Statement

Assume Countable Choice [[def-countable-choice]] and use the definitions in [[def-qft-dirac-projections]]. For every $\mu\ge0$ and almost every $\mathbf k$, the displayed Pauli blocks satisfy $h_D(\mathbf k)^\dagger=h_D(\mathbf k)$, $h_D(\mathbf k)^2=\omega(\mathbf k)^2I_4$, and $P_\pm(\mathbf k)$ are complementary orthogonal projections of rank two. The ranges $\mathcal H_\pm$ are closed separable Hilbert subspaces of $\mathcal H_D$, and $h_D$ is self-adjoint on $D(h_D)=\{u:\omega u\in\mathcal H_D\}$. The matrices also satisfy $\{\gamma^a,\gamma^b\}=-2\eta^{ab}I_4$ and $\gamma^{0\dagger}=\gamma^0$, $\gamma^{j\dagger}=-\gamma^j$.

For a unit spatial vector $\mathbf n$, put $\Sigma_{\mathbf n}=\operatorname{diag}(\boldsymbol\sigma\cdot\mathbf n,\boldsymbol\sigma\cdot\mathbf n)$, $S_R(\theta)=\cos(\theta/2)I_4-i\sin(\theta/2)\Sigma_{\mathbf n}$, and $S_B(\chi)=\cosh(\chi/2)I_4+\sinh(\chi/2)\boldsymbol\alpha\cdot\mathbf n$. With $R_{\mathbf n}(\theta)$ the rotation $\mathbf v_\parallel+\cos\theta\,\mathbf v_\perp+\sin\theta\,\mathbf n\times\mathbf v_\perp$ using [[def-cross-product-in-r3]], with $\mathbf v_\parallel=(\mathbf v\cdot\mathbf n)\mathbf n$ and $\mathbf v_\perp=\mathbf v-\mathbf v_\parallel$, and $B_{\mathbf n}(\chi)$ the boost defined in [[lem-qft-lorentz-boost-rotation-factorization]], these matrices satisfy $S_R\Gamma(p)S_R^{-1}=\Gamma(R_{\mathbf n}(\theta)p)$, $S_B\Gamma(p)S_B^{-1}=\Gamma(B_{\mathbf n}(\chi)p)$, and $S_R\beta S_R^\dagger=S_B\beta S_B^\dagger=\beta$.

For each real $t$, $W_D(t,\mathbf k)$ of [[def-qft-dirac-projections]] is unitary, satisfies $W_D(t+s,\mathbf k)=W_D(t,\mathbf k)W_D(s,\mathbf k)$, and obeys $\partial_tW_D(t,\mathbf k)=i h_D(\mathbf k)W_D(t,\mathbf k)$.

## Facts & Assumptions

**Given:** Countable Choice, the explicit matrices and domains in [[def-qft-dirac-projections]], and the maximal-domain and adjoint definitions cited below.

[A1] Countable Choice is the choice strength used for the countable dense $L^2$ family and the completed Fock-space supplier chain. [[def-countable-choice]]

[F1] The Pauli blocks, $\beta$, $h_D$, $\omega$, the massless-apex convention, and the componentwise second-variable-linear pairing are exactly those in [[def-qft-dirac-projections]].

[F2] The maximal multiplication domain, operator adjoint, and self-adjointness terms have the definitions in [[def-unbounded-linear-operator-domain-and-graph]], [[def-densely-defined-closed-and-closable-operator]], [[def-adjoint-of-a-densely-defined-unbounded-operator]], and [[def-symmetric-self-adjoint-and-essentially-self-adjoint]].

[F3] Rational-box step functions form a countable dense family in scalar $L^2(\mathbb R^3)$; the finite four-component direct sum uses the componentwise norm. [[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]

[F4] A boost $B_{\mathbf n}(\chi)$ and spatial rotation $R_{\mathbf n}(\theta)$ act on the selected inertial coordinates by the stated hyperbolic block and spatial rotation. [[lem-qft-lorentz-boost-rotation-factorization]]

[F5] Sine and cosine are defined by their power series; they satisfy the Pythagorean identity, addition formulas and derivative formulas. [[def-sine-and-cosine-by-power-series]] [[cor-trigonometric-parity-and-pythagorean-identity]] [[thm-sine-and-cosine-addition-formulas]] [[thm-sine-and-cosine-derivatives]]

[F6] Spatial vectors use the standard Euclidean inner product and oriented cross product. [[def-euclidean-inner-product]] [[def-cross-product-in-r3]]

## Proof



1.1 Direct multiplication gives $\sigma_j^\dagger=\sigma_j$, $\sigma_j^2=I_2$, $\sigma_1\sigma_2=i\sigma_3$, $\sigma_2\sigma_3=i\sigma_1$, and $\sigma_3\sigma_1=i\sigma_2$; reversing each distinct pair changes the sign. Thus $\sigma_i\sigma_j+\sigma_j\sigma_i=2\delta_{ij}I_2$. The block formulas then give $\alpha_i^\dagger=\alpha_i$, $\beta^\dagger=\beta$, $\alpha_i\alpha_j+\alpha_j\alpha_i=2\delta_{ij}I_4$, and $\alpha_i\beta+\beta\alpha_i=0$. Consequently $h_D^\dagger=h_D$ and $h_D^2=(|\mathbf k|^2+\mu^2)I_4=\omega^2I_4$. [F1, algebra]

2.1 Where $\omega>0$, the self-adjoint matrix $h_D/\omega$ squares to $I_4$. Hence $P_\pm^\dagger=P_\pm$, $P_\pm^2=P_\pm$, $P_+P_-=0$, and $P_++P_-=I_4$. Since $\operatorname{tr}(h_D)=0$, $\operatorname{tr}(P_\pm)=2$; a finite-dimensional orthogonal projection has eigenvalues only $0,1$, so its trace equals its rank and each rank is two. The chosen values at the massless apex have the same projection and rank properties. The matrix fields are measurable and have operator norm at most one, so their multiplication operators are bounded everywhere-defined projections; their ranges are closed and give $\mathcal H_D=\mathcal H_+\oplus\mathcal H_-$. [F1, step 1.1, algebra]

2.2 The block products also give $\gamma^0=\beta$, $\gamma^{j\dagger}=-\gamma^j$, $\{\gamma^0,\gamma^j\}=0$, and $\{\gamma^i,\gamma^j\}=-2\delta_{ij}I_4$. With $\eta=\operatorname{diag}(-1,1,1,1)$ these are exactly $\{\gamma^a,\gamma^b\}=-2\eta^{ab}I_4$. Moreover $i\gamma^a\partial_a-\mu=0$ is equivalent, after multiplication by the invertible $\beta$, to $i\partial_0=(-i\sum_j\alpha_j\partial_j+\beta\mu)$; for the Fourier convention $\widehat F(\mathbf k)=\int e^{-i\mathbf k\cdot\mathbf x}F(\mathbf x)\,d^3\mathbf x$, the right side has multiplier $h_D(\mathbf k)$. [F1, step 1.1, algebra]

2.3 Put $k_\parallel=\mathbf n\cdot\mathbf k$ and $\mathbf k_\perp=\mathbf k-k_\parallel\mathbf n$, so $\mathbf k_\perp\perp\mathbf n$. The Pauli products in step 1.1 give $\sigma_i\sigma_j=\delta_{ij}I+i\sum_k\epsilon_{ijk}\sigma_k$, where $\epsilon$ is the alternating symbol with $\epsilon_{123}=1$; by [F6] this implies $\Sigma_{\mathbf n}\alpha_{\mathbf n}=\alpha_{\mathbf n}\Sigma_{\mathbf n}$ and $\Sigma_{\mathbf n}(\boldsymbol\alpha\cdot\mathbf k_\perp)=i\boldsymbol\alpha\cdot(\mathbf n\times\mathbf k_\perp)$. Expanding with $S_R=cI-is\Sigma_{\mathbf n}$ and $S_R^{-1}=cI+is\Sigma_{\mathbf n}$ gives $S_R\alpha_{\mathbf n}S_R^{-1}=\alpha_{\mathbf n}$ and $S_R(\boldsymbol\alpha\cdot\mathbf k_\perp)S_R^{-1}=(c^2-s^2)\boldsymbol\alpha\cdot\mathbf k_\perp+2cs\boldsymbol\alpha\cdot(\mathbf n\times\mathbf k_\perp)=\boldsymbol\alpha\cdot(\cos\theta\,\mathbf k_\perp+\sin\theta\,\mathbf n\times\mathbf k_\perp)$. This is exactly the rotation action in the Statement. Since $\Sigma_{\mathbf n}$ is Hermitian with square $I$, $S_R$ is unitary; it commutes with $\beta$, so $S_R\beta S_R^{-1}=S_R\beta S_R^\dagger=\beta$. Therefore $S_R\Gamma(p)S_R^{-1}=\Gamma(R_{\mathbf n}(\theta)p)$. [F1, F4, F5, F6, step 1.1, algebra]

2.4 Put $\alpha_{\mathbf n}=\boldsymbol\alpha\cdot\mathbf n$ and, for each spatial $\mathbf v$, $\gamma_{\mathbf v}=\beta(\boldsymbol\alpha\cdot\mathbf v)$. Then $\alpha_{\mathbf n}^2=I$, $\{\alpha_{\mathbf n},\beta\}=0$, $[\alpha_{\mathbf n},\gamma_{\mathbf m}]=0$ for $\mathbf m\perp\mathbf n$, and $[\alpha_{\mathbf n},\beta]=-2\gamma_{\mathbf n}$, $[\alpha_{\mathbf n},\gamma_{\mathbf n}]=-2\beta$. Expanding $S_B=\cosh(\chi/2)I+\sinh(\chi/2)\alpha_{\mathbf n}$ and its inverse gives $S_B\beta S_B^{-1}=\beta\cosh\chi-\gamma_{\mathbf n}\sinh\chi$ and $S_B\gamma_{\mathbf n}S_B^{-1}=\gamma_{\mathbf n}\cosh\chi-\beta\sinh\chi$, while perpendicular $\gamma$ components are unchanged. Therefore $S_B\Gamma(p)S_B^{-1}=\beta(p^0\cosh\chi+p_\parallel\sinh\chi)-\gamma_{\mathbf n}(p^0\sinh\chi+p_\parallel\cosh\chi)-\gamma_{\mathbf p_\perp}=\Gamma(B_{\mathbf n}(\chi)p)$. Since $\beta S_B=S_B^{-1}\beta$ and $S_B^\dagger=S_B$, $S_B\beta S_B^\dagger=\beta$. [F1, F4, F6, step 1.1, algebra]

3.1 Under Countable Choice, the rational-box family of [F3] is countable and dense in scalar $L^2(\mathbb R^3)$. Taking four componentwise copies gives a countable dense family for $\mathcal H_D$, so it is separable. A closed subspace of a separable Hilbert space is separable: intersect a countable base of open balls with the subspace and choose one point from each nonempty intersection; Countable Choice supplies these choices. Thus $\mathcal H_+$ and $\mathcal H_-$ are separable. [A1, F3, step 2.1, choose]

3.2 The pointwise orthogonal decomposition of [step 2.1] gives $h_D=\omega I$ on $\mathcal H_+$ and $h_D=-\omega I$ on $\mathcal H_-$. Also [step 1.1] gives $h_D^\dagger h_D=\omega^2I_4$ pointwise, so $|h_Du|=\omega|u|$ almost everywhere and the multiplication domain defined by $h_Du\in\mathcal H_D$ is exactly $\{u:\omega u\in\mathcal H_D\}$. For either subspace, multiplication by the real function $\omega$ on its maximal domain is symmetric. If $g$ belongs to its adjoint domain with adjoint value $q$, then for each integer $N\ge1$ the vector $v_N=(\omega g-q)\mathbf1_{\{\omega\le N\}}$ lies in that same subspace and in the maximal domain. The adjoint identity gives $0=\langle \omega v_N,g\rangle-\langle v_N,q\rangle=\int_{\{\omega\le N\}}|\omega g-q|^2d^3\mathbf k/(2\pi)^3$. Since $\omega$ is finite everywhere, these sets increase to $\mathbb R^3$, so $q=\omega g$ almost everywhere and $\omega g\in L^2$. Conversely every vector in the maximal domain satisfies the adjoint identity because $\omega$ is real. Thus both $\omega$ and $-\omega$ are self-adjoint on their maximal domains, and their direct sum is self-adjoint on $\{u:\omega u\in\mathcal H_D\}=D(h_D)$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 For $\omega>0$, write $W_D(t)=\cos(\omega t)I+i\sin(\omega t)h_D/\omega$. Using $h_D^2=\omega^2I$ and $h_D^\dagger=h_D$ from step 1.1, the product $W_D(t)^\dagger W_D(t)=(\cos^2(\omega t)+\sin^2(\omega t))I=I$. The sine and cosine addition formulas give $W_D(t+s)=W_D(t)W_D(s)$, and differentiating gives $\partial_t W_D=i h_D W_D$. At the massless apex the assigned value is the identity and does not affect the multiplication operator. [F1, F5, step 1.1, algebra] ∎
