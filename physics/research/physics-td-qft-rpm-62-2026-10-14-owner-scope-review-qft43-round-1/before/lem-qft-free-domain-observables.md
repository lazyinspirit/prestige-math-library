---
id: lem-qft-free-domain-observables
kind: lemma
title: Domain-qualified free observables and point-field obstruction
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - def-countable-choice
  - def-qft-dirac-projections
  - def-qft-fock-and-test-spaces
  - def-qft-scalar-mass-shell
  - lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound
  - lem-qft-dirac-fermionic-translation-spectrum
  - lem-qft-dirac-projection-matrices
  - lem-qft-fock-ccr-car
  - lem-qft-free-dirac-car-locality
  - lem-qft-mass-shell-measure-invariant
  - lem-qft-mass-shell-test-range-dense
  - lem-qft-second-quantized-spectrum
  - lem-qft-segal-weyl-domain
  - lem-qft-smeared-free-scalar
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-dominated-convergence
  - thm-fatou-lemma
  - thm-p-series-real-exponents
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-dirac-projections: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  def-qft-scalar-mass-shell: mathematical-premise
  lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound: mathematical-premise
  lem-qft-dirac-fermionic-translation-spectrum: mathematical-premise
  lem-qft-dirac-projection-matrices: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
  lem-qft-free-dirac-car-locality: mathematical-premise
  lem-qft-mass-shell-measure-invariant: mathematical-premise
  lem-qft-mass-shell-test-range-dense: mathematical-premise
  lem-qft-second-quantized-spectrum: mathematical-premise
  lem-qft-segal-weyl-domain: mathematical-premise
  lem-qft-smeared-free-scalar: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fatou-lemma: mathematical-premise
  thm-p-series-real-exponents: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, author-hosted complete lecture notes, Chapter 2, §§2.2 and 2.7
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html
      locator: Complete HTML Chapter 2; bosonic Fock sectors and number operator, the formal point-field warning, and free scalar two-point function, equations 2.123–2.127 and 2.165–2.170.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft, §§3, 8, and 36
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page draft; §3 canonical scalar mode expansion, §8 free propagator, and §36 spinor-field Lagrangian. The spinor discussion uses anticommuting fields. Its formal field notation is contextual; exact domains and point-limit conclusions below follow from the stated Fock suppliers and local norm arguments.
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and use the scalar and Dirac free-field constructions of [[lem-qft-smeared-free-scalar]] and [[lem-qft-free-dirac-car-locality]] with their current draft hypotheses, including the Dirac projection and CAR inputs in [[lem-qft-dirac-projection-matrices]] and [[lem-qft-fock-ccr-car]]. For a real scalar test $f\in\mathcal S(\mathbb R^4)$, $\overline{\Phi_\mu(f)}=\sqrt2\,\Phi_{\rm Segal}(K_\mu f)$ is self-adjoint on the exact domain given by [[lem-qft-segal-weyl-domain]]. On scalar bosonic Fock space, $N_s=d\Gamma(1)$, $H_s=d\Gamma(\omega_\mu)$, and $P_{s,j}=d\Gamma(-k_j)$ are the maximal real multipliers of [[lem-qft-second-quantized-spectrum]]; in particular,
$$D(N_s)=\left\{\Psi=(\Psi_n):\sum_{n\ge1}n^2\|\Psi_n\|^2<\infty\right\},$$
and the Hamiltonian and momentum domains are exactly the square-integrability domains of the sums of their one-particle multipliers.

On the specified Dirac Fock space, spacetime-smeared fields $\Psi(F)$ are bounded, while the translation generators $H_D,P_{D,j}$ have the exact maximal domains and joint PVM stated in [[lem-qft-dirac-fermionic-translation-spectrum]]. For any one of these self-adjoint real-multiplier operators $A$, a normalized $\Psi\in D(A)$ has finite mean $\langle\Psi,A\Psi\rangle$ and finite variance
$$\operatorname{Var}_\Psi(A)=\|(A-\langle\Psi,A\Psi\rangle)\Psi\|^2.$$
Membership in $D(A)$ suffices for finite variance and does not require $\Psi\in D(A^2)$. A product $AB\Psi$ is defined only when $\Psi\in D(B)$ and $B\Psi\in D(A)$, as specified in [[lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound]].

For the scalar field, smooth spacetime tests approximating a point mass produce vacuum vectors with norms diverging to infinity. For the equal-time Dirac CAR field, spatial tests approximating a point mass produce bounded smeared operators whose operator norms diverge. Thus neither construction gives a point-field value in the indicated norm topology. The supplied free-field results define only smeared fields and do not define coincident diagonal products.

## Facts & Assumptions

**Given:** Countable Choice; the QFT-MF01 Fock conventions; the QFT-MF02 shell, scalar field, and measure interfaces; the QFT-MF03 Dirac matrices, translation representation, and equal-time CAR; and the current draft status of those in-run suppliers.

[A1] Countable Choice is assumed by the Fock and free-field supplier arguments. [[def-countable-choice]]

[F1] Bosonic and fermionic Fock spaces are square-summable direct sums of symmetric or antisymmetric sectors with vacuum $\Omega$ and dense finite-particle subspace. [[def-qft-fock-and-test-spaces]]

[F2] The scalar shell has $\omega_\mu(\mathbf k)=\sqrt{|\mathbf k|^2+\mu^2}$, density $d\nu_\mu=d^3\mathbf k/((2\pi)^3 2\omega_\mu)$, and restriction $K_\mu f(p)=\int f(x)e^{ip\circ x}d^4x$. [[def-qft-scalar-mass-shell]]

[F3] The scalar field is $\Phi_\mu(f)=a(K_\mu\overline f)+a^\dagger(K_\mu f)$ on $\mathcal D_{\rm fin}$, and its vacuum two-point function is $\langle K_\mu\overline f,K_\mu g\rangle$. [[lem-qft-smeared-free-scalar]]

[F4] The Segal field $\Phi(h)$ is self-adjoint with the exact multiplication domain $\sum_j\int(1+\|h\|^2x^2)|f_j(x)|^2dx<\infty$ in its stated Fock decomposition. [[lem-qft-segal-weyl-domain]]

[F5] On bosonic Fock space, a measurable finite real multiplier $\boldsymbol\omega$ gives self-adjoint sector multipliers by $s_n=\sum_{r=1}^n\boldsymbol\omega(x_r)$, with exact square-integrability domains and the corresponding joint PVM. Taking $\boldsymbol\omega=(1,\omega_\mu,-k_1,-k_2,-k_3)$ gives $N_s,H_s,P_{s,j}$. [[lem-qft-second-quantized-spectrum]]

[F6] The Dirac matrices fix $\omega(\mathbf k)$, $h_D$, $P_\pm$, the particle and antiparticle one-particle spaces, and their Hilbert measures. [[def-qft-dirac-projections]]

[F7] The Dirac translation carrier assigns $q(+,\mathbf k)=(\omega(\mathbf k),\mathbf k)$ and $q(-,\mathbf k)=(\omega(\mathbf k),-\mathbf k)$; the sector sums have joint PVM and exact maximal generator domains. [[lem-qft-dirac-fermionic-translation-spectrum]]

[F8] Under the fixed Dirac projections and antisymmetric Fock CAR conventions, the Dirac locality carrier gives the equal-time CAR and bounded spacetime-smearing map. [[lem-qft-free-dirac-car-locality]]

[F9] The scalar shell measure is locally finite and sigma-finite, including the massless case off the omitted apex. [[lem-qft-mass-shell-measure-invariant]]

[F10] Dominated convergence applies to the test-function approximations below. [[thm-dominated-convergence]]

[F11] Fatou's lemma applies to the nonnegative shell norm integrands. [[thm-fatou-lemma]]

[F12] In a real or complex inner-product space, $|\langle u,v\rangle|\le\|u\|\|v\|$. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

[F13] The scalar shell Hilbert space $H_\mu$ is separable for every $\mu\ge0$. [[lem-qft-mass-shell-test-range-dense]]

[F14] For symmetric operators $A,B$, $\Psi\in D(AB)$ means $\Psi\in D(B)$ and $B\Psi\in D(A)$. [[lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound]]

[F15] The series $\sum_{n\ge1}n^{-p}$ converges for $p>1$ and diverges for $p\le0$. [[thm-p-series-real-exponents]]

[F16] The Dirac projection matrix lemma establishes complementary orthogonal projections and closed separable ranges for the two Dirac energy subspaces. [[lem-qft-dirac-projection-matrices]]

[F17] For a separable one-particle Hilbert space, the fermionic creation and annihilation maps are bounded and satisfy the canonical anticommutation relations. [[lem-qft-fock-ccr-car]]

[F18] For $d\in\{3,4\}$, define $\rho_d:\mathbb R^d\to(0,\infty)$ by $\rho_d(x)=(2\pi)^{-d/2}e^{-|x|^2/2}$. This is a Schwartz function with $\int_{\mathbb R^d}\rho_d(x)\,d^dx=1$; with $\widehat\rho_d(\xi):=\int_{\mathbb R^d}e^{-i\xi\cdot x}\rho_d(x)\,d^dx$, the Gaussian integral gives $\widehat\rho_d(\xi)=e^{-|\xi|^2/2}$ and hence $|\widehat\rho_d(\xi)|\le1$ for every $\xi\in\mathbb R^d$.

## Proof

**Given:** [A1] and [F1]–[F17].

1.1 The measure $d\nu_\mu$ is sigma-finite by [F9], and $\omega_\mu$ and $k_j$ are finite measurable multipliers by [F2]. Applying [F5] with one-particle multiplier vector $(1,\omega_\mu,-k_1,-k_2,-k_3)$ gives the self-adjoint scalar operators $N_s,H_s,P_{s,j}$. On sector $n$, their multipliers are $n$, $\sum_{r=1}^n\omega_\mu(\mathbf k_r)$, and $-\sum_{r=1}^n k_{r,j}$. Squaring these multipliers and integrating against the completed product measure yields exactly the stated domains. [A1, F1, F2, F5, F9, given]

1.2 The Dirac data in [F6] satisfy the measurable, finite-multiplier hypotheses of [F7], and [F16] supplies the complementary orthogonal projections and closed ranges required by that carrier. The one-particle measure is sigma-finite: each of the two species copies of R^3 is the countable union of bounded balls with finite Lebesgue measure. Let Y_m be the two species copies restricted to the ball of radius m; each Y_m has finite measure. For fixed n, the product sets Y_m^n have finite product measure and cover X^n as m grows. Their countable union over n and m is a sigma-finite cover of the Fock direct-sum measure. The particle and antiparticle sector multipliers are therefore self-adjoint on the maximal domains in [F7], which are the displayed square-integrability conditions for $H_D$ and each $P_{D,j}$. The field boundedness and equal-time CAR are exactly the inspected interfaces in [F8]. [A1, F1, F6, F7, F8, F16, given]

2.1 For real $f$, [F3] identifies the scalar field on $\mathcal D_{\rm fin}$ with $\sqrt2\,\Phi_{\rm Segal}(K_\mu f)$. The Hilbert space $H_\mu$ is separable by [F13], so the hypothesis of the Segal-domain result [F4] holds. Multiplication by the nonzero scalar $\sqrt2$ does not change an operator domain; hence the closure is self-adjoint on the domain in [F4] with $h=K_\mu f$. If $K_\mu f=0$, both operators are zero on all Fock space. [F1, F3, F4, F13, step 1.1, algebra]

2.2 For a normalized $\Psi\in D(A)$, Cauchy–Schwarz [F12] gives $|\langle\Psi,A\Psi\rangle|\le\|A\Psi\|<\infty$. Since $A$ is self-adjoint, this expectation is real. The vector $A\Psi-\langle A\rangle_\Psi\Psi$ belongs to the Hilbert space because both terms do, so its norm and the stated variance are finite without requiring $\Psi\in D(A^2)$. By [F14], a product $AB$ acts only on vectors $\Psi\in D(B)$ for which $B\Psi\in D(A)$; it is not defined merely because both $A$ and $B$ separately exist on a common dense core. [F1, F12, F14, step 1.1, step 1.2, given]

2.3 Set $\rho=\rho_4$ and, for $\varepsilon>0$, define $\rho_{\varepsilon,x_0}(x)=\varepsilon^{-4}\rho_4((x-x_0)/\varepsilon)$. For every Schwartz test $\phi$, change of variables and dominated convergence [F10], with majorant $\|\phi\|_\infty\rho_4(y)$, give $\int\rho_{\varepsilon,x_0}(x)\phi(x)\,d^4x\to\phi(x_0)$, so this is a point-mass approximation. For $p=(p^0,\mathbf p)\in H_\mu^+$ the same change of variables gives
$$K_\mu\rho_{\varepsilon,x_0}(p)=e^{ip\circ x_0}\widehat\rho_4\bigl(\varepsilon(-p^0,\mathbf p)\bigr)=e^{ip\circ x_0}\exp\!\left(-\frac{\varepsilon^2}{2}\bigl((p^0)^2+|\mathbf p|^2\bigr)\right).$$
Thus $K_\mu\rho_{\varepsilon,x_0}(p)\to e^{ip\circ x_0}$ for every fixed shell momentum and $|K_\mu\rho_{\varepsilon,x_0}(p)|\le1$. The shell measure has infinite total mass: in radial coordinates, for $r\ge\max(1,\mu)$, $\omega_\mu(r)\le\sqrt2\,r$, so its radial density is bounded below by a positive constant times $r\,dr$, whose integral diverges. Fatou's lemma [F11] therefore gives $\liminf_{\varepsilon_m\downarrow0}\|K_\mu\rho_{\varepsilon_m,x_0}\|^2\ge\int_{H_\mu^+}1\,d\nu_\mu=\infty$. By [F1, F3] and the creation formula on the vacuum, $\|\Phi_\mu(\rho_{\varepsilon_m,x_0})\Omega\|=\|K_\mu\rho_{\varepsilon_m,x_0}\|$, so these vacuum vectors have no finite-norm point-field limit. [F1, F2, F3, F9, F10, F11, F18, step 1.1, algebra]

3.1 The scalar one-particle space contains a unit vector $e$, for example a normalized indicator of an annulus $1<|\mathbf k|<2$, whose shell measure is finite and positive by [F2]. The symmetric vectors $e^{\otimes n}$ are unit vectors in mutually orthogonal sectors. Put $C=(\sum_{n\ge1}n^{-4})^{-1/2}$ and $\Psi_n=Cn^{-2}e^{\otimes n}$. By [F15], $\sum n^{-4}$ converges and is positive, so $C$ is well-defined and $\Psi$ is normalized. Also by [F15], $\sum n^{-2}<\infty$, so $\Psi\in D(N_s)$ and $N_s\Psi=(Cn^{-1}e^{\otimes n})_{n\ge1}$ is a Fock vector. Its image under one more application of $N_s$ would have squared norm $C^2\sum_{n\ge1}1=\infty$, so $N_s\Psi\notin D(N_s)$. By the composition-domain rule [F14] with $A=B=N_s$, $\Psi\notin D(N_s^2)$. Its mean and variance are finite by 2.2. [F1, F2, F5, F14, F15, step 2.2, construct, algebra]

4.1 Fix a unit spinor $z\in\mathbb C^4$ and, for $\varepsilon>0$, define $u_\varepsilon(\mathbf x)=\varepsilon^{-3}\rho_3((\mathbf x-\mathbf x_0)/\varepsilon)z$. For every spatial Schwartz test, change of variables and [F10] show that its pairing with $u_\varepsilon$ tends to the test's value at $\mathbf x_0$ times $z$, while $\|u_\varepsilon\|_2=\varepsilon^{-3/2}\|\rho_3\|_2\to\infty$. By [F16], choose countable dense sets in the two Dirac energy ranges. Conjugating the negative-range dense set preserves density, and the Cartesian product of the two dense sets is countable and dense in the Hilbert direct sum. Therefore the one-particle space for the CAR Fock representation is separable and [F17] applies. For $A_\varepsilon=\Psi_t(u_\varepsilon)$, [F8] gives $A_\varepsilon A_\varepsilon^\dagger+A_\varepsilon^\dagger A_\varepsilon=\|u_\varepsilon\|_2^2I$. By [F17], the creation and annihilation terms are bounded, hence so is their sum. Cauchy–Schwarz [F12] gives $\sup_{\|x\|=\|y\|=1}|\langle A_\varepsilon x,y\rangle|\le\|A_\varepsilon\|$, while choosing $y=A_\varepsilon x/\|A_\varepsilon x\|$ for each unit $x$ with $A_\varepsilon x\ne0$ gives equality after taking the supremum over $x$. The adjoint identity swaps $x$ and $y$, so the same two-vector supremum equals $\|A_\varepsilon^\dagger\|$. For bounded operators $X,Y$, each unit $\xi$ satisfies $\|XY\xi\|\le\|X\|\,\|Y\xi\|\le\|X\|\,\|Y\|$ and $\|(X+Y)\xi\|\le\|X\xi\|+\|Y\xi\|\le\|X\|+\|Y\|$; taking suprema gives product submultiplicativity and the triangle inequality. Applying these inequalities to the CAR identity yields $\|u_\varepsilon\|_2^2=\|A_\varepsilon A_\varepsilon^\dagger+A_\varepsilon^\dagger A_\varepsilon\|\le2\|A_\varepsilon\|^2$. Thus $\|A_\varepsilon\|\ge\|u_\varepsilon\|_2/\sqrt2\to\infty$, excluding a bounded equal-time point-field norm limit. [F8, F10, F12, F16, F17, F18, given, algebra] ∎
## Remarks

The two point-limit conclusions concern the specific free representations and norm topologies stated above; they do not rule out other distributional or renormalized constructions. The supplied scalar and Dirac lemmas define fields after test smearing. They do not define a restriction of a product such as $\Phi(x)\Phi(y)$ or $\bar\Psi(x)\Psi(y)$ to the diagonal $x=y$.
