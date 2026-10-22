---
id: prop-qftx-soft-energy-finite
kind: proposition
domain: mathematics
library: mathematics
title: Photon number divergence can coexist with finite soft energy
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-qftx-resolved-soft-poisson
  - lem-qftx-coherent-band-poisson
  - def-countable-choice
  - def-qft-fock-and-test-spaces
  - def-qft-photon-transverse-space
  - def-qft-qed-photon-energy-multiplier
  - lem-qft-second-quantized-spectrum
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-logarithm-derivative-and-integral
  - def-complex-exponential
  - lem-complex-exponential-series-converges-everywhere
  - thm-complex-exponential-addition-and-real-extension
  - def-factorial-and-falling-factorial
  - def-integer-power
  - lem-qft-qed-coherent-ir-obstruction
dependency_roles:
  def-qftx-resolved-soft-poisson: mathematical-premise
  lem-qftx-coherent-band-poisson: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  def-qft-photon-transverse-space: mathematical-premise
  def-qft-qed-photon-energy-multiplier: mathematical-premise
  lem-qft-second-quantized-spectrum: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-integer-power: mathematical-premise
  lem-qft-qed-coherent-ir-obstruction: mathematical-premise
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, full lecture notes"
      url: https://arxiv.org/pdf/math-ph/0511030
      locator: "§§5.3–5.6, PDF pp. 19–21; bosonic Fock sectors and second quantization. The local proof derives the cutoff expectation."
    - title: "Physikalisch-Technische Bundesanstalt, Quantum Optics, Lecture 5"
      url: https://www.ptb.de/cms/fileadmin/internet/institute/fpm/Quantenoptik19/lecture_5.pdf
      locator: "PDF p. 3, subsection 'Photon statistics of coherent states': Eq. (12) gives the mean photon number; the following unnumbered display gives the normalized single-mode Poisson probabilities."
    - title: "Mark Srednicki, Quantum Field Theory, author-posted draft"
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: "Chapter 26, printed pp. 167–170; finite resolution and unresolved states in a different scalar-field calculation. No QED energy formula is imported."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

In the defined coherent model, put
$f_{\varepsilon,\Delta}
=\mathbf1_{\{\varepsilon<\nu(\mathbf k)<\Delta\}}f_{\varepsilon,\Lambda}$
and
$\Psi_{\varepsilon,\Delta}
=\exp(-\|f_{\varepsilon,\Delta}\|^2/2)\epsilon(f_{\varepsilon,\Delta})$,
the normalized coherent Fock vector on the unresolved band
$(\varepsilon,\Delta)$.
For $C\ge0$ its mean band count and free-photon energy expectation are
$$\mathbb E_{\Psi_{\varepsilon,\Delta}}N_{(\varepsilon,\Delta)} =C\log\frac{\Delta}{\varepsilon},\qquad \Psi_{\varepsilon,\Delta}\in D(H_\gamma),\qquad \langle\Psi_{\varepsilon,\Delta},H_\gamma\Psi_{\varepsilon,\Delta}\rangle =\hbar C(\Delta-\varepsilon),$$
where $H_\gamma=\hbar c\,d\Gamma(|\mathbf k|)$ and $\nu=c|\mathbf k|$ is
angular frequency. If $C>0$, the mean number diverges as
$\varepsilon\downarrow0$, while the energy expectation remains bounded by
$\hbar C\Delta$ and tends to $\hbar C\Delta$. The one-particle displacement
has $\|f_{\varepsilon,\Delta}\|^2=C\log(\Delta/\varepsilon)$; when $C>0$,
it has no limit in one-particle Hilbert norm as $\varepsilon\downarrow0$.
If $C=0$,
then $b=0$ almost everywhere and $f_{\varepsilon,\Delta}$ is the zero
one-particle vector at every cutoff, so it converges in that norm to zero.
This is an exact free coherent-state model statement; it asserts no empirical
photon statistics, no interacting QED limit, and no implication about
convergence of a different physical state.

## Statement references

[Dereziński, §§5.3–5.6](https://arxiv.org/pdf/math-ph/0511030)

[PTB Quantum Optics, Lecture 5](https://www.ptb.de/cms/fileadmin/internet/institute/fpm/Quantenoptik19/lecture_5.pdf)

[Srednicki, Chapter 26](https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf)

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, $0<\varepsilon<\Delta<\Lambda$, and the current and coherent-state data of the resolved-soft model.

[A1] [[def-countable-choice]]: assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ used by the Fock, measure, and second-quantized suppliers.

[F1] [[def-qftx-resolved-soft-poisson]]: the unresolved-band amplitude is $f_{\varepsilon,\Delta}$, with angular-frequency variable $\nu=c|\mathbf k|$ and free one-particle energy $\hbar\nu$. It defines $b\in L^2(S^2,d\Omega;\mathbb R^3)$ and $C=\int_{S^2}|b(n)|^2d\Omega=\|b\|_{L^2}^2$.

[F2] [[lem-qftx-coherent-band-poisson]]: the number of unresolved quanta is Poisson with mean $\lambda=C\log(\Delta/\varepsilon)$, and $\|f_{\varepsilon,\Delta}\|^2=\lambda$.

[F3] [[def-qft-fock-and-test-spaces]] and [[def-qft-photon-transverse-space]]: the state lies in the symmetric Fock space over the closed transverse one-particle subspace of $L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^3)$.

[F4] [[def-qft-qed-photon-energy-multiplier]]: the free one-particle energy multiplier is $\hbar c|\mathbf k|$ in J for $\mathbf k$ in m$^{-1}$.

[F5] [[lem-qft-second-quantized-spectrum]]: on an $m$-particle sector, $d\Gamma(|\mathbf k|)$ is multiplication by $\sum_{j=1}^m|\mathbf k_j|$, with its maximal square-integrability domain. Identify $L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^3)$ with scalar $L^2(\mathbb R^3\times\{1,2,3\},d^3\mathbf k\otimes\#;\mathbb C)$ by $(Uu)(\mathbf k,j)=u_j(\mathbf k)$, where $\#$ is counting measure on $\{1,2,3\}$. This is an isometry because its squared norm is $\int_{\mathbb R^3}\sum_{j=1}^3|u_j(\mathbf k)|^2d^3\mathbf k$. The scalar multiplier commutes with $P_T$, so it restricts to the transverse Fock space.

[F6] [[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], and [[thm-polar-coordinates-formula-for-lebesgue-measure]]: $d\Omega$ on $S^2$ is the finite Euclidean surface measure and $d^3\mathbf k=r^2dr\,d\Omega(n)$.

[F7] [[thm-logarithm-derivative-and-integral]]: $\log(\Delta/\varepsilon)=\int_\varepsilon^\Delta d\nu/\nu$.

[F8] [[def-complex-exponential]], [[lem-complex-exponential-series-converges-everywhere]], and [[thm-complex-exponential-addition-and-real-extension]]: $\exp(x)=\sum_{m\ge0}x^m/m!$ for real $x$, with absolute convergence and $\exp(x+y)=\exp(x)\exp(y)$.

[F9] [[def-factorial-and-falling-factorial]] and [[def-integer-power]]: $0!=1$, $m!>0$, $\lambda^0=1$, and $0^m=0$ for positive integer $m$.

[F10] [[lem-qft-qed-coherent-ir-obstruction]]: for $\kappa>0$ and a transverse $b\in L^2(S^2,d\Omega;\mathbb C^3)$ with $C_b=\int_{S^2}|b|^2d\Omega>0$, the normalized coherent vectors associated to $\mathbf1_{\{\delta<|\mathbf k|<\kappa\}}|\mathbf k|^{-3/2}b(\mathbf k/|\mathbf k|)$ have no strong Fock-space limit as $\delta\downarrow0$.

## Proof

1.1 Put $\lambda=C\log(\Delta/\varepsilon)$. By [F2], the count
distribution is $p_m=e^{-\lambda}\lambda^m/m!$. Reindexing the nonnegative
series gives
$$\mathbb E N_{(\varepsilon,\Delta)} =e^{-\lambda}\sum_{m\ge1}\frac{m\lambda^m}{m!} =\lambda e^{-\lambda}\sum_{j\ge0}\frac{\lambda^j}{j!} =\lambda.$$
This calculation also gives zero mean when $C=0$ by [F9]. [F2, F8, F9, given, algebra]

1.2 If $C>0$, fix $\Delta$ and set $\kappa=\Delta/c$ and $\delta=\varepsilon/c$. The Definition's profile $f_{\varepsilon,\Delta}$ is exactly the supplier profile with these cutoffs and the same transverse angular function $b$; its hypotheses hold because $\kappa>0$ and $C_b=C>0$. Applying [F10] shows that $\Psi_{\varepsilon,\Delta}$ has no strong Fock-space limit as $\varepsilon\downarrow0$. [A1, F1, F10, given, algebra]

2.1 If $C>0$, then for every integer $q\ge1$, whenever $\varepsilon<\Delta\,2^{-q}$, $\log(\Delta/\varepsilon)>q\log2\ge q/2$, since $\log2=\int_1^2dt/t\ge1/2$ by [F7]. Hence $C\log(\Delta/\varepsilon)\to\infty$ as $\varepsilon\downarrow0$. For $C=0$ the count and its mean remain zero. [F7, step 1.1, given, algebra]

2.2 Under the isometry in [F5], multiplication by $|\mathbf k|$ and by the
frequency-band indicator commutes pointwise with $P_T(\mathbf k)$,
so the scalar sector multiplier of [F5] restricts to the transverse Fock
space. On the support of $f_{\varepsilon,\Delta}$,
$0<\hbar c|\mathbf k|<\hbar\Delta$. By [F5], the squared norm of the
energy-operator image is bounded by
$$\|H_\gamma\Psi_{\varepsilon,\Delta}\|^2 \le(\hbar\Delta)^2e^{-\lambda} \sum_{m\ge0}\frac{m^2\lambda^m}{m!} =(\hbar\Delta)^2(\lambda^2+\lambda)<\infty.$$
The identity follows by writing $m^2=m(m-1)+m$ and shifting indices in
the two exponential series [F8], with [F9] covering $\lambda=0$.
Thus $\Psi_{\varepsilon,\Delta}\in D(H_\gamma)$. [A1, F3, F4, F5, F8, F9, step 1.1, algebra]

3.1 On sector $m$, the energy multiplier is the sum of the $m$ one-particle
energies. Product tensor pairings make each summand contribute
$\langle f_{\varepsilon,\Delta},
\hbar c|\mathbf k| f_{\varepsilon,\Delta}\rangle
\|f_{\varepsilon,\Delta}\|^{2(m-1)}$. Including the coherent-state factor
and the sector normalization gives
$$\langle\Psi_{\varepsilon,\Delta},H_\gamma\Psi_{\varepsilon,\Delta}\rangle =e^{-\lambda}\sum_{m\ge1} \frac{m\langle f_{\varepsilon,\Delta}, \hbar c|\mathbf k| f_{\varepsilon,\Delta}\rangle\lambda^{m-1}}{m!} =\langle f_{\varepsilon,\Delta}, \hbar c|\mathbf k| f_{\varepsilon,\Delta}\rangle,$$
where $e^{-\lambda}\sum_{m\ge1}m\lambda^{m-1}/m!=1$ by [F8].
Polar coordinates [F6], $\nu=cr$, and the definition of $C$ give
$$\langle f_{\varepsilon,\Delta}, \hbar c|\mathbf k| f_{\varepsilon,\Delta}\rangle =\int_A|b(n)|^2d\Omega(n) \int_{\varepsilon/c}^{\Delta/c}\hbar c\,dr =\hbar C(\Delta-\varepsilon).$$
It is bounded by $\hbar C\Delta$ and tends to that finite value as
$\varepsilon\downarrow0$. [F1, F4, F5, F6, F8, step 1.1, step 2.2, algebra]

4.1 If $C=0$, [F1] gives $\|b\|_{L^2}^2=0$, so $b$ is the zero $L^2$ equivalence class and hence $b=0$ almost everywhere. The same radial norm calculation in [F2] gives $\|f_{\varepsilon,\Delta}\|^2=C\log(\Delta/\varepsilon)$. For $C>0$ this is unbounded as $\varepsilon\downarrow0$ by step 2.1. If $f_{\varepsilon,\Delta}$ had a norm limit $f$, choose a sequence $\varepsilon_j\downarrow0$ with $\|f_{\varepsilon_j,\Delta}-f\|<1$ for all sufficiently large $j$. The Hilbert-space triangle inequality would then give $\|f_{\varepsilon_j,\Delta}\|\le\|f\|+1$, contradicting the divergence in step 2.1. For $C=0$ the displacement is the zero $L^2$ vector at every cutoff by [F2]. [F1, F2, F3, step 2.1, algebra] ∎
