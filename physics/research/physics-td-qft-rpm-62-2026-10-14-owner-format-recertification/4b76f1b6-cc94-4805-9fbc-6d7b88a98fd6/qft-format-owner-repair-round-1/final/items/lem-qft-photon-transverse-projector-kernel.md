---
id: lem-qft-photon-transverse-projector-kernel
kind: lemma
title: Newtonian off-diagonal kernel of the transverse projector
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-countable-choice
  - def-euclidean-inner-product
  - def-test-function-space-d-of-an-open-set
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - lem-em-sphere-zonal-moments
  - lem-qft-photon-smeared-potential
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-minus-laplacian-of-the-fundamental-solution-is-dirac
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-real-power-continuity-and-derivatives
dependency_roles:
  def-countable-choice: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  lem-em-sphere-zonal-moments: mathematical-premise
  lem-qft-photon-smeared-potential: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-minus-laplacian-of-the-fundamental-solution-is-dirac: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, §6.2.1 Coulomb Gauge
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter 6; equations 6.517–6.519 give the transverse projector commutator.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 book draft, §55 Electrodynamics in Coulomb Gauge
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page book draft; equations 55.3–55.4 and 55.20 give the transverse projector and equal-time commutator. Conventions are translated explicitly here.
---

## Statement

Assume Countable Choice. Let $G(\mathbf x)=1/(4\pi|\mathbf x|)$ on $\mathbb R^3\setminus\{0\}$, interpreted as its locally integrable distribution, and use the Fourier convention
$$\widehat f(\mathbf k)=\int_{\mathbb R^3}e^{-i\mathbf k\cdot\mathbf x}f(\mathbf x)\,d^3\mathbf x,\qquad f(\mathbf x)=(2\pi)^{-3}\int_{\mathbb R^3}e^{i\mathbf k\cdot\mathbf x}\widehat f(\mathbf k)\,d^3\mathbf k.$$
Then $\mathcal F^{-1}(|\mathbf k|^{-2})=G$ distributionally. Consequently, for $P_{T,ij}(\mathbf k)=\delta_{ij}-k_i k_j/|\mathbf k|^2$,
$$P_{T,ij}(-i\nabla)\delta^3 =\delta_{ij}\delta^3+\partial_i\partial_jG.$$
For $\mathbf x\ne0$,
$$\partial_i\partial_jG(\mathbf x) =-\frac{\delta_{ij}}{4\pi|\mathbf x|^3} +\frac{3x_ix_j}{4\pi|\mathbf x|^5}.$$
Thus the equal-time transverse-potential commutator of [[lem-qft-photon-smeared-potential]] has this off-diagonal Newtonian kernel (with its stated factor $-i$). The identity is distributional at the origin; the displayed classical derivative formula is only asserted away from it.

## Facts & Assumptions

**Given:** Countable Choice; the Fourier convention and Euclidean structure in the statement; the published Newtonian fundamental solution; polar-coordinate integration; and the equal-time commutator of the smeared transverse potential.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] In three dimensions, $G(\mathbf x)=1/(4\pi|\mathbf x|)$ is locally integrable and satisfies $-\Delta G=\delta_0$ distributionally. [[thm-minus-laplacian-of-the-fundamental-solution-is-dirac]]

[F2] The equal-time potential commutator is $[A_i(\mathbf x),E_j(\mathbf y)]=-iP_{T,ij}(-i\nabla)\delta^3(\mathbf x-\mathbf y)$. [[lem-qft-photon-smeared-potential]]

[F3] Polar coordinates decompose Lebesgue measure as $d^3\mathbf k=s^2ds\,d\sigma(\omega)$. [[thm-polar-coordinates-formula-for-lebesgue-measure]]

[F4] The zonal identity is $\int_{S^2}f(\omega\cdot e_3)d\sigma=2\pi\int_{-1}^1f(u)du$ for continuous real $f$, the sphere area is $4\pi$, and orthogonal maps preserve $d\sigma$. [[lem-em-sphere-zonal-moments]] [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]

[F5] The integral is linear and may be split into real and imaginary parts; pointwise convergence under an integrable majorant permits passage to the limit. [[thm-linearity-of-the-lebesgue-integral-on-l-one]] [[thm-dominated-convergence]]

[F6] The Euclidean norm satisfies $|\mathbf x|^2=x_1^2+x_2^2+x_3^2$. [[def-euclidean-inner-product]]

[F7] Polar integration, the power rule on $(0,\infty)$, and Fubini apply to the absolutely integrable functions in the regularization below. [[thm-polar-coordinates-formula-for-lebesgue-measure]] [[thm-real-power-continuity-and-derivatives]] [[thm-chain-rule]] [[thm-algebra-of-derivatives]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F8] $C_c^\infty(\mathbb R^3)$ is the compactly supported smooth test-function space. [[def-test-function-space-d-of-an-open-set]]

## Proof

**Given:** [A1], [F1]–[F8] and the Fourier convention in the statement.

1.1 For $\varepsilon>0$, $m_\varepsilon(\mathbf k)=e^{-\varepsilon|\mathbf k|}/|\mathbf k|^2$ is integrable: [F3] and $\sigma(S^2)=4\pi$ give $\int|m_\varepsilon|d^3\mathbf k=4\pi\int_0^\infty e^{-\varepsilon s}ds<\infty$. Its inverse Fourier integral is radial. Rotate the polar axis to $\mathbf x$ using [F4], and apply the zonal identity separately to the real and imaginary parts of $u\mapsto e^{is|\mathbf x|u}$. The polar formula [F3] is stated for nonnegative Borel functions; since this complex integrand is absolutely integrable, apply it separately to the positive and negative parts of its real and imaginary parts and recombine by [F5]. The angular integral is $4\pi\sin(s r)/(s r)$, where $r=|\mathbf x|$. Thus
$$G_\varepsilon(r)=(2\pi)^{-3}\int e^{i\mathbf k\cdot\mathbf x}m_\varepsilon(\mathbf k)d^3\mathbf k =\frac1{2\pi^2r}\int_0^\infty e^{-\varepsilon s}\frac{\sin(sr)}s\,ds.$$
Since $\sin(sr)/s=\int_0^r\cos(st)dt$ and $\int_0^r\int_0^\infty e^{-\varepsilon s}|\cos(st)|dsdt\le r/\varepsilon$, Fubini [F7] applies. The real part of $\int_0^\infty e^{-(\varepsilon-it)s}ds=(\varepsilon-it)^{-1}$ is $\varepsilon/(\varepsilon^2+t^2)$; integrating it over $t\in[0,r]$ gives $\arctan(r/\varepsilon)$. Therefore
$$G_\varepsilon(r)=\frac{\arctan(r/\varepsilon)}{2\pi^2r}.$$
[A1, F3, F4, F5, F7, given, algebra]

2.1 For every test $\varphi\in C_c^\infty(\mathbb R^3)$ [F8], the bound $|G_\varepsilon(\mathbf x)|\le(4\pi|\mathbf x|)^{-1}$ and [F3] make $G_\varepsilon\varphi$ dominated by an integrable function; [F5] gives the distributional limit $G_\varepsilon\to G$. To identify the same limit in Fourier variables, repeated integration by parts in a coordinate with $|k_j|\ge|\mathbf k|/\sqrt3$ gives $|\widehat\varphi(\mathbf k)|\le C_N(1+|\mathbf k|)^{-N}$ for every integer $N$, while $|\widehat\varphi|\le\|\varphi\|_1$ near zero. Hence $|\mathbf k|^{-2}\widehat\varphi(-\mathbf k)$ is integrable by [F3]. Fubini [F7] identifies $\int G_\varepsilon\varphi$ with $(2\pi)^{-3}\int m_\varepsilon(\mathbf k)\widehat\varphi(-\mathbf k)d^3\mathbf k$. Since $|m_\varepsilon|\le|\mathbf k|^{-2}$, [F5] shows this tends to the inverse Fourier pairing with $|\mathbf k|^{-2}$. Both limits are therefore the same distribution $G$, proving $\mathcal F^{-1}(|\mathbf k|^{-2})=G$. By [F1] this is the published normalized fundamental solution. [A1, F1, F3, F5, F7, F8, step 1.1, given]

3.1 Integration by parts against compact smooth tests gives Fourier multiplier $-k_i k_j$ for $\partial_i\partial_jG$. Step 2.1 therefore gives
$$\mathcal F^{-1}\!\left(\delta_{ij}-\frac{k_ik_j}{|\mathbf k|^2}\right) =\delta_{ij}\delta^3+\partial_i\partial_jG.$$
For $\mathbf x\ne0$, put $s=|\mathbf x|^2$ by [F6], so $G=(4\pi)^{-1}s^{-1/2}$. The power, chain and sum rules [F7] give
$$\partial_iG=-\frac{x_i}{4\pi s^{3/2}},\qquad \partial_i\partial_jG=-\frac{\delta_{ij}}{4\pi r^3}+\frac{3x_ix_j}{4\pi r^5}.$$
Substitution into [F2] proves the stated equal-time commutator kernel. [F2, F6, F7, step 2.1, given, algebra] ∎
