---
id: lem-qftx-coherent-band-poisson
kind: lemma
domain: mathematics
library: mathematics
title: Orthogonal frequency bands in the coherent soft model have independent Poisson counts
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-qftx-resolved-soft-poisson
  - def-countable-choice
  - def-qft-fock-and-test-spaces
  - def-qft-photon-transverse-space
  - thm-qft-example-soft-current-angular-coherent
  - def-euclidean-inner-product
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-logarithm-derivative-and-integral
  - def-complex-exponential
  - lem-complex-exponential-series-converges-everywhere
  - thm-complex-exponential-addition-and-real-extension
  - def-factorial-and-falling-factorial
  - def-integer-power
dependency_roles:
  def-qftx-resolved-soft-poisson: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  def-qft-photon-transverse-space: mathematical-premise
  thm-qft-example-soft-current-angular-coherent: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-integer-power: mathematical-premise
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, full lecture notes"
      url: https://arxiv.org/pdf/math-ph/0511030
      locator: "§§5.3–5.6, PDF pp. 19–21; symmetric Fock sectors and the tensor product law for Fock spaces. The local proof gives the exact band-occupancy calculation."
    - title: "Physikalisch-Technische Bundesanstalt, Quantum Optics, Lecture 5"
      url: https://www.ptb.de/cms/fileadmin/internet/institute/fpm/Quantenoptik19/lecture_5.pdf
      locator: "PDF p. 3, subsection 'Photon statistics of coherent states': Eq. (12) gives the mean photon number; the following unnumbered display gives the normalized single-mode Poisson probabilities."
verification:
  precheck: pass
---

## Statement

Fix the finite-leg current data and cutoffs of the resolved-soft model. For every
finite partition $B_1,\ldots,B_r$ of $(\varepsilon,\Lambda)$ into disjoint
Borel frequency intervals, the coherent state
$\Psi_{\varepsilon,\Lambda}$ has independent band counts. For each $j$,
$N(B_j)$ has Poisson distribution with mean
$$\lambda_j=C\int_{B_j}\frac{d\nu}{\nu},$$
where $\nu$ is angular frequency in s$^{-1}$. Thus
$\lambda_j=C\log(b_j/a_j)$ for an interval with endpoints
$0<a_j<b_j$; endpoint conventions do not matter because $d\nu/\nu$
assigns a singleton zero measure. For $C=0$ every band count is zero.
The model's marked frequency density is the one-particle coherent
intensity $|b(n)|^2\,d\Omega(n)\,d\nu/\nu$.

## Statement references

[Dereziński, §§5.3–5.6](https://arxiv.org/pdf/math-ph/0511030)

[PTB Quantum Optics, Lecture 5](https://www.ptb.de/cms/fileadmin/internet/institute/fpm/Quantenoptik19/lecture_5.pdf)

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$ and fix a finite current, a Borel angular region $A$, and cutoffs $0<\varepsilon<\Delta<\Lambda$ as in the model definition.

[A1] [[def-countable-choice]]: assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ used by the Fock and polar-integration suppliers.

[F1] [[def-qftx-resolved-soft-poisson]]: $f_{\varepsilon,\Lambda}$ is the transverse mode function with angular coefficient $b(n)=\mathbf1_A(n)gK_\perp(n)/\sqrt{2(2\pi)^3}$; its proposed coherent vector is $\exp(-\|f\|^2/2)\epsilon(f)$, and band counts are the squared norms of the orthogonal occupation-sector projections.

[F2] [[def-qft-fock-and-test-spaces]]: bosonic Fock space is the square-summable direct sum of symmetric tensor sectors, with vacuum sector $\mathbb C$ and symmetrizer $P_{s,N}=N!^{-1}\sum_{\pi\in S_N}U_\pi$ on the $N$-particle tensor power.

[F3] [[def-qft-photon-transverse-space]]: $\mathcal H_T$ is the closed subspace of $L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^3)$ consisting of $u$ with $\mathbf k\cdot u(\mathbf k)=0$ a.e.; its projection is $P_T(\mathbf k)=I-\widehat{\mathbf k}\widehat{\mathbf k}^{\,T}$ away from $\mathbf k=0$.

[F4] [[def-euclidean-inner-product]] and [[def-surface-integral-on-a-compact-c-one-hypersurface]]: on $\mathbb R^3$, $x\cdot y=\sum_{j=1}^3x_jy_j$; $d\Omega$ on $S^2$ is the Euclidean chart surface measure.

[F5] [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]: the chart measure $d\Omega$ on $S^2$ equals the finite polar measure $d\sigma$.

[F6] [[thm-polar-coordinates-formula-for-lebesgue-measure]]: for every nonnegative Borel $G$ on $\mathbb R^3$, $\int G(\mathbf k)d^3\mathbf k =\int_{S^2}\int_0^\infty G(rn)r^2\,dr\,d\sigma(n)$.

[F7] [[thm-logarithm-derivative-and-integral]]: $\log(b/a)=\int_a^b d\nu/\nu$ for $0<a<b$.

[F8] [[def-complex-exponential]], [[lem-complex-exponential-series-converges-everywhere]], and [[thm-complex-exponential-addition-and-real-extension]]: $\exp z=\sum_{m\ge0}z^m/m!$ for every complex $z$; the series converges absolutely and the complex exponential is multiplicative under addition.

[F9] [[def-factorial-and-falling-factorial]] and [[def-integer-power]]: $0!=1$, $m!>0$, $\lambda^0=1$, and $0^m=0$ for positive integer $m$.

[F10] [[thm-qft-example-soft-current-angular-coherent]]: for the same finite balanced subluminal legs, the published current theorem uses $K_\perp$ and $g$ to define a full-sphere angular coefficient $C_0<\infty$ and a length-coordinate profile $|\mathbf k|^{-3/2}b_0(n)$ with energy cutoffs converted by $\omega=\hbar\nu$. Multiplication by the Borel indicator $\mathbf1_A$ preserves transversality and has coefficient $C=\int_A|b_0|^2d\Omega\le C_0$.

## Proof

1.1 For every leg and every $n\in S^2$, $1-v_i\cdot n\ge1-|v_i|>0$. The finite sum defining $K(n)$ is therefore continuous and bounded on $S^2$. Charge balance gives $h(K(n),(1,n))=\sum_i\eta_iQ_i=0$, so $K^0(n)=n\cdot\mathbf K(n)$ and $K_\perp(n)$ is the transverse component. The current theorem [F10] uses the same $K_\perp$, $g$, and $d\Omega$ with energy variable $\omega=\hbar\nu$ and proves that the full-sphere coefficient $C_0$ is finite. Here $b=\mathbf1_A b_0$, so $C=\int_A|b_0|^2d\Omega\le C_0$; the Borel restriction remains transverse. Thus the angular coefficient is square-integrable and $C$ is finite and nonnegative. [given, A1, F1, F4, F5, F10, algebra]

2.1 For $\mathbf k=rn\ne0$, the coefficient $b(n)$ is perpendicular to
$n$, so $\mathbf k\cdot f_{\varepsilon,\Lambda}(\mathbf k)=0$; hence
$f_{\varepsilon,\Lambda}\in\mathcal H_T$ once its $L^2$ norm is finite.
The Borel cutoff and Borel angular coefficient make the squared norm
integrand nonnegative and Borel. Applying [F6] and then $\nu=cr$ gives
$$\|f_{\varepsilon,\Lambda}\|^2 =\int_A|b(n)|^2\,d\Omega(n) \int_{\varepsilon/c}^{\Lambda/c}\frac{dr}{r} =C\int_\varepsilon^\Lambda\frac{d\nu}{\nu} =C\log\frac{\Lambda}{\varepsilon}<\infty.$$
For each band define
$f_j(\mathbf k)=\mathbf1_{\{\nu(\mathbf k)\in B_j\}}
f_{\varepsilon,\Lambda}(\mathbf k)$. The same change of variables gives
$\|f_j\|^2=C\int_{B_j}d\nu/\nu=\lambda_j$. A singleton endpoint has zero
one-dimensional Lebesgue measure, since it is covered by intervals of
arbitrarily small length; therefore any endpoint convention gives the same
integral. Thus the band components belong to
pairwise orthogonal closed subspaces of $\mathcal H_T$, and their squared
norms sum to $\lambda=C\log(\Lambda/\varepsilon)$. [F1, F3, F5, F6, F7, step 1.1, algebra]

3.1 In the $m$-particle sector, $\|f^{\otimes_s m}/\sqrt{m!}\|^2=\lambda^m/m!$. By [F8] and [F9], their sum over $m\ge0$ is $\exp(\lambda)<\infty$. Therefore $\epsilon(f_{\varepsilon,\Lambda})$ is a Fock vector of squared norm $\exp(\lambda)$, and the prescribed scalar $\exp(-\lambda/2)$ normalizes $\Psi_{\varepsilon,\Lambda}$ to norm one. [F1, F2, F8, F9, step 2.1, algebra]

3.2 Put $M=\sum_jm_j$. The symmetrized tensors with different band
occupancy tuples are orthogonal because some tensor factor then lies in
orthogonal frequency subspaces. For
$x=f_1^{\otimes m_1}\otimes\cdots\otimes f_r^{\otimes m_r}$, the projection
formula [F2] gives
$$\|P_{s,M}x\|^2 =\langle x,P_{s,M}x\rangle =\frac{\prod_jm_j!}{M!}\prod_j\|f_j\|^{2m_j}.$$
Indeed, in the permutation sum only permutations within each band block
have nonzero inner product with $x$; there are $\prod_jm_j!$ such
permutations, each contributing $\prod_j\|f_j\|^{2m_j}$. Expanding
$f^{\otimes M}=(\sum_j f_j)^{\otimes M}$, the component with occupancy
$(m_1,\ldots,m_r)$ is
$\frac{M!}{\prod_jm_j!}P_{s,M}x$. [F2, step 2.1, construct, algebra]

4.1 The squared norm of the normalized coherent-state projection onto
occupancy $(m_1,\ldots,m_r)$ is consequently
$$\exp(-\lambda)\frac{M!}{\prod_jm_j!^2}\|P_{s,M}x\|^2 =\exp\!\left(-\sum_j\lambda_j\right) \prod_j\frac{\lambda_j^{m_j}}{m_j!} =\prod_j\left(\exp(-\lambda_j)\frac{\lambda_j^{m_j}}{m_j!}\right).$$
Each factor sums to one by [F8], so this is a joint probability law that
factors into Poisson distributions of means $\lambda_j$. If $C=0$, all
$\lambda_j=0$; [F9] makes the only nonzero outcome the all-zero tuple.
The marked frequency intensity is $|b(n)|^2d\Omega(n)d\nu/\nu$ because
$|f(rn)|^2d^3\mathbf k=|b(n)|^2d\Omega(n)d\nu/\nu$ under $\nu=cr$.
[F1, F2, F8, F9, step 2.1, step 3.1, step 3.2, algebra] ∎
