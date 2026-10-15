---
id: lem-qft-qed-coherent-ir-obstruction
kind: lemma
title: "Logarithmic coherent infrared tail: finite energy, no Fock limit"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-qft-qed-photon-energy-multiplier
  - def-qft-fock-and-test-spaces
  - lem-complex-exponential-series-converges-everywhere
  - lem-qft-second-quantized-spectrum
  - def-countable-choice
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
dependency_roles:
  def-qft-qed-photon-energy-multiplier: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  lem-qft-second-quantized-spectrum: mathematical-premise
  def-countable-choice: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§5.2–5.5 and 6.1–6.2
      url: https://arxiv.org/html/math-ph/0511030
      locator: Complete author lecture-note HTML; full Fock direct sum and second quantization, symmetric Fock space, and bosonic Fock representation of the CCR.
    - title: David Tong, Quantum Field Theory, §6.2.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted Chapter 6 HTML; Coulomb-gauge transverse one-particle modes and the free-photon Hamiltonian.
---

## Statement

Use the transverse one-particle space $\mathcal H_T$ and multiplier $\omega(\mathbf k)$ of [[def-qft-qed-photon-energy-multiplier]], and form its symmetric Fock space $\mathcal F_s(\mathcal H_T)$. Let $H_{\rm ph}:=\hbar c\,d\Gamma(\omega)$, with $\hbar,c>0$ and $d\Gamma(\omega)$ acting on the $n$-particle sector as multiplication by $\sum_{j=1}^n|\mathbf k_j|$, as in [[lem-qft-second-quantized-spectrum]]. For a coherent vector use
$$ \epsilon(f):=\bigoplus_{n=0}^{\infty}\frac{f^{\otimes n}}{\sqrt{n!}},\qquad C(f):=e^{-\|f\|^2/2}\epsilon(f), $$
using the tensor and direct-sum conventions of [[def-qft-fock-and-test-spaces]].

Let $\kappa>0$. Let $b:S^2\to\mathbb C^3$ be measurable with $b\in L^2(S^2,d\Omega;\mathbb C^3)$, $\mathbf n\cdot b(\mathbf n)=0$ for a.e. $\mathbf n$, and
$$ C_b:=\int_{S^2}|b(\mathbf n)|^2\,d\Omega>0. $$
Take $\mathbf k,\kappa,\epsilon$ in inverse metres and $b$ dimensionless; then $f_\epsilon$ has momentum-wavefunction units $\mathrm m^{3/2}$, $C_b$ is dimensionless, and $\hbar c(\kappa-\epsilon)$ has energy units.
For $0<\epsilon<\kappa$, define $f_\epsilon(0)=0$ and
$$ f_\epsilon(\mathbf k):=\mathbf1_{\{\epsilon<|\mathbf k|<\kappa\}}|\mathbf k|^{-3/2}b\!\left(\frac{\mathbf k}{|\mathbf k|}\right). $$
Then
$$ \|f_\epsilon\|^2=C_b\log\frac{\kappa}{\epsilon},\qquad \langle C(f_\epsilon),H_{\rm ph}C(f_\epsilon)\rangle =\hbar c\,C_b(\kappa-\epsilon). $$
Each $C(f_\epsilon)$ is a unit vector in $D(H_{\rm ph})$. As $\epsilon\downarrow0$, $C(f_\epsilon)\rightharpoonup0$ weakly, but the family has no strong Fock-space limit. The statement is an exact free transverse-mode construction; it asserts no interacting charged sector, continuum QED limit, or empirical observation.

## Facts & Assumptions

**Given:** Countable Choice; the transverse-space and multiplier definition cited below; and the coherent-vector and second-quantized multiplier interfaces stated below.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, is assumed as in the Fock and multiplier suppliers. [[def-countable-choice]]

[A2] $\hbar,c>0$, $\kappa>0$, $b\in L^2(S^2,d\Omega;\mathbb C^3)$, $\mathbf n\cdot b(\mathbf n)=0$ a.e., and $C_b=\int_{S^2}|b|^2d\Omega>0$; each cutoff satisfies $0<\epsilon<\kappa$. In the QFT length convention $\mathbf k,\kappa,\epsilon$ have units m$^{-1}$ and $b$ is dimensionless. These are the explicit data hypotheses of the Statement.

[F1] [[def-qft-qed-photon-energy-multiplier]]: $\mathcal H_T=\operatorname{Ran}M_{P_T}\subset L^2(\mathbb R^3,d^3k;\mathbb C^3)$, $P_T(\mathbf k)=I-\mathbf n\mathbf n^T$, and the nonnegative maximal multiplication operator $M_\omega$ with $\omega(\mathbf k)=|\mathbf k|$. This local definition uses the exact QFT-MG01 transverse-space draft registered in the completed batch-44 manifest; the definition and this theorem remain conditional on that mathematical supplier, with native readiness and independent review separate.

[F2] [[def-qft-fock-and-test-spaces]]: symmetric tensor sectors have the product inner pairing on elementary tensors, and bosonic Fock space is their square-summable direct sum with componentwise pairing.

[F3] [[lem-qft-second-quantized-spectrum]]: for a real measurable one-particle multiplier $\omega$, its second quantization acts on sector $n$ by $\sum_{j=1}^n\omega(\mathbf k_j)$ with the maximal square-integrability domain. The draft statement and full proof were inspected; it assumes Countable Choice. For the vector-valued transverse space, identify $L^2(\mathbb R^3;\mathbb C^3)$ with scalar $L^2(\mathbb R^3\times\{1,2,3\})$ before restricting to the transverse range.

[F4] [[def-surface-integral-on-a-compact-c-one-hypersurface]]: under $\mathrm{AC}_\omega$, surface integration on $S^2$ is the Euclidean chart integral using the induced metric Jacobian.

[F5] [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]: under $\mathrm{AC}_\omega$, this chart surface measure on $S^2$ equals the polar measure $\sigma$.

[F6] [[thm-polar-coordinates-formula-for-lebesgue-measure]]: under $\mathrm{AC}_\omega$, every nonnegative Borel function on $\mathbb R^3$ integrates as $\int_0^\infty\int_{S^2}F(rn)r^2\,d\sigma(n)\,dr$.

[F7] [[def-complex-exponential]] defines $\exp z=\sum_{n\ge0}z^n/n!$; [[lem-complex-exponential-series-converges-everywhere]] supplies absolute convergence for every $z\in\mathbb C$.

[F8] [[thm-complex-exponential-addition-and-real-extension]]: $\exp(z+w)=\exp z\exp w$, and $\exp(x+0i)=e^x$ for real $x$.

[F9] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $|\exp z|=e^{\operatorname{Re}z}$.

## Proof

1.1 For $\mathbf n\in S^2$, $P_T(\mathbf n)=I-\mathbf n\mathbf n^\top$ is an orthogonal projection and [A2] gives $\mathbf n\cdot b(\mathbf n)=0$; hence $\mathbf k\cdot f_\epsilon(\mathbf k)=0$ a.e. Since $\epsilon<|\mathbf k|<\kappa$ on the support, the radial norm integrals in [F4]–[F6] are finite on these strictly positive finite bounds, so both $f_\epsilon$ and $\omega f_\epsilon$ are square-integrable. [A1, A2, F1, F4, F5, F6, algebra]

1.2 By [F4]–[F6], spherical coordinates give $d^3k=r^2dr\,d\Omega$, so $\|f_\epsilon\|^2=C_b\int_\epsilon^\kappa r^{-1}dr=C_b\log(\kappa/\epsilon)$, $\langle f_\epsilon,\omega f_\epsilon\rangle=C_b(\kappa-\epsilon)$, and $\|\omega f_\epsilon\|^2=C_b(\kappa^2-\epsilon^2)/2$. [A1, A2, F1, F4, F5, F6, algebra]

2.1 For any $u,v\in\mathcal H_T$, [F2] gives $\langle u^{\otimes n},v^{\otimes n}\rangle=\langle u,v\rangle^n$ and $\|u^{\otimes n}\|^2=\|u\|^{2n}$. By [F7]–[F8], $\sum_{n\ge0}\|u\|^{2n}/n!=e^{\|u\|^2}<\infty$, so the displayed $\epsilon(u)$ belongs to symmetric Fock space. Its direct-sum pairing with $\epsilon(v)$ is the absolutely convergent series $\sum_{n\ge0}\langle u,v\rangle^n/n!=e^{\langle u,v\rangle}$, by [F7]. The addition and modulus laws [F8]–[F9] therefore give that $C(u)$ has norm one and $|\langle C(u),C(v)\rangle|=e^{-\|u-v\|^2/2}$. This direct tensor calculation requires no separability hypothesis on $\mathcal H_T$. On the full vector space $L^2(\mathbb R^3;\mathbb C^3)$, multiplication by $\omega$ commutes with the multiplier $P_T$. Its tensor-power projections therefore commute with the sector multiplier $\sum_j|\mathbf k_j|$; the transverse symmetric Fock space is a reducing subspace for the second-quantized multiplier of [F3]. If $r=\|f_\epsilon\|^2$, $q=\langle f_\epsilon,\omega f_\epsilon\rangle$, and $s=\|\omega f_\epsilon\|^2$, the sector formulas give
$$ \|d\Gamma(\omega)C(f_\epsilon)\|^2 =e^{-r}\sum_{n\ge1}\frac{n s r^{n-1}+n(n-1)q^2r^{n-2}}{n!} =s+q^2<\infty. $$
The same sector sum with one multiplier gives $\langle C(f_\epsilon),d\Gamma(\omega)C(f_\epsilon)\rangle=q$; [F2] gives $\|C(f_\epsilon)\|=1$. Multiplying by $\hbar c$ and substituting [step 1.2] proves the stated domain and energy claims. [F2, F3, F7, F8, F9, step 1.1, step 1.2, algebra]

3.1 Put $\epsilon_j=\kappa e^{-j}$ for $j\ge1$. The difference $f_{\epsilon_{j+1}}-f_{\epsilon_j}$ is supported on the shell $(\epsilon_{j+1},\epsilon_j)$, so its squared norm is $C_b\int_{\epsilon_{j+1}}^{\epsilon_j}r^{-1}dr=C_b$. From the pairing identity in step 2.1,
$$ |\langle C(f_{\epsilon_j}),C(f_{\epsilon_{j+1}})\rangle| =e^{-\|f_{\epsilon_{j+1}}-f_{\epsilon_j}\|^2/2}=e^{-C_b/2}<1. $$
Thus $\|C(f_{\epsilon_j})-C(f_{\epsilon_{j+1}})\|^2\ge2(1-e^{-C_b/2})>0$, and this sequence is not Cauchy. [A1, A2, F2, F4, F5, F6, step 1.2, step 2.1, algebra]

4.1 Let $\Psi$ have only sectors $0,\ldots,N$. Then
$$ |\langle\Psi,C(f_\epsilon)\rangle| \le e^{-\|f_\epsilon\|^2/2}\sum_{n=0}^{N}\frac{\|\Psi_n\|\|f_\epsilon\|^n}{\sqrt{n!}}\longrightarrow0 $$
as $\epsilon\downarrow0$, because [step 1.2] gives $\|f_\epsilon\|\to\infty$ and the exponential dominates this fixed polynomial. Finite-sector vectors are dense: for any Fock vector $\Psi=(\Psi_n)_{n\ge0}$, the truncations $\sum_{n=0}^N\Psi_n$ converge in norm because $\sum_n\|\Psi_n\|^2<\infty$. Since $\|C(f_\epsilon)\|=1$, approximation gives weak convergence to zero for every Fock vector. A norm limit would have to equal the weak limit zero, contradicting the unit norms. [A2, F2, F7, step 1.2, step 2.1, step 3.1, algebra] ∎
