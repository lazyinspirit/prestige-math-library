---
id: ex-nrqm-coulomb-hydrogen-ground-normalization
aliases: [nrqm-coulomb-example-hydrogen-ground-normalization]
kind: example
domain: mathematics
title: "Hydrogen ground normalization"
status: draft
origin: pipeline
dependency_level: 4
deps: [thm-plancherel, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, lem-weak-derivatives-are-polynomial-fourier-multipliers, lem-nrqm-coulomb-three-dimensional-hardy-bound, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, cor-vector-forms-of-the-divergence-theorem, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-dominated-convergence, thm-orthogonal-decomposition-by-a-closed-subspace, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-sobolev-space-wkp-and-its-norm, thm-nrqm-orbital-and-spin-sphere-onb, thm-polar-coordinates-formula-for-lebesgue-measure, lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates, thm-ftc-second-part, thm-derivative-of-exponential, thm-algebra-of-derivatives, cor-cauchy-schwarz-inequality-for-l-two, def-l-p-space-as-a-quotient-by-null-functions, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-plancherel: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  lem-nrqm-coulomb-three-dimensional-hardy-bound: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  cor-vector-forms-of-the-divergence-theorem: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-orthogonal-decomposition-by-a-closed-subspace: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.4 pp. 229-235 (Theorem 10.9 and the explicit ground state R_{0,0} at p. 232)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics (Cappella Archive), Section 8.1 pp. 186-193 (radial wavefunctions, radial probability densities and expectation values of the hydrogen ground state)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\gamma>0$, $a_0:=2/\gamma$, and let
$$\psi_{100}(x):=\Bigl(\frac{\gamma^3}{8\pi}\Bigr)^{1/2}e^{-r/a_0}\qquad(x=r\Omega,\ r=|x|),$$
the ground vector of $C=-\Delta-\gamma/|x|$ on exactly
$D(C)=H^2(\mathbb R^3;\mathbb C)$, as directly proved below under CC.
This example re-verifies, by elementary one-variable integration, that:

(a) $\|\psi_{100}\|_{L^2}=1$;

(b) $\psi_{100}\in D(C)$ and $C\psi_{100}=-\frac{\gamma^2}{4}\psi_{100}$, as checked by differentiating $e^{-r/a_0}$ directly;

(c) the radial law $p(r)=4r^2a_0^{-3}e^{-2r/a_0}$ integrates to $1$ and has mean $3a_0/2$;

(d) the exact same constants arise from the closed form of the Laguerre polynomial $L_0^{(1)}=1$, so the normalization is a special case of the general polynomial-exponential solution.

## Verification


**Given:** $\gamma>0$, $\alpha=\gamma/2=1/a_0$, $\psi_{100}=N e^{-\alpha|x|}$ with $N=(\gamma^3/(8\pi))^{1/2}$, $p(r)=4r^2a_0^{-3}e^{-2r/a_0}$ and Countable Choice. Use the first-variable-linear $L^2$ inner product. Define $T=\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$ on its maximal domain; the CC Sobolev Fourier characterization identifies $D(T)=H^2$.

[F1] $Y_{00}=1/\sqrt{4\pi}$ and $\sigma(S^2)=4\pi$; the polar decomposition of Lebesgue measure holds ([[thm-nrqm-orbital-and-spin-sphere-onb]], [[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]], [[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F2] For $a>0$: $\int_0^\infty e^{-ar}dr=1/a$, $\int_0^\infty re^{-ar}dr=1/a^2$, $\int_0^\infty r^2e^{-ar}dr=2/a^3$, $\int_0^\infty r^3e^{-ar}dr=6/a^4$; each follows from the derivative of $r^ne^{-ar}$ and the fundamental theorem with vanishing boundary terms ([[thm-ftc-second-part]], [[thm-derivative-of-exponential]], [[thm-algebra-of-derivatives]]).

[F3] The unitary Fourier and exact Sobolev/domain interfaces under CC are [[thm-plancherel]], [[lem-weak-derivatives-are-polynomial-fourier-multipliers]], [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]] and [[def-sobolev-space-wkp-and-its-norm]]. Hardy gives $\|u/r\|_2\le2\|\nabla u\|_2$ on $H^1$ ([[lem-nrqm-coulomb-three-dimensional-hardy-bound]] (c)). Smooth Sobolev density, divergence, Cauchy–Schwarz, Tonelli and dominated convergence are [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[cor-vector-forms-of-the-divergence-theorem]], [[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] and [[thm-dominated-convergence]]. The exact adjoint/symmetry definitions are [[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-adjoint-of-a-densely-defined-unbounded-operator]]; CC double orthogonal complement follows from [[thm-orthogonal-decomposition-by-a-closed-subspace]]. The realization and ground domain are proved locally below, with no AC-bearing Coulomb theorem as a hidden logical premise.

1.1 [Normalization] By polar coordinates and [F2], $\|\psi_{100}\|_2^2=N^2 4\pi\int_0^\infty r^2e^{-2\alpha r}dr=(\gamma^3/2)2/\gamma^3=1$. [F1, F2, given, algebra]

1.2 [Free maximal realization without arbitrary choice] For the real multiplier $t(\xi)=4\pi^2|\xi|^2$, truncate any $g\in L^2$ to $g_n=\mathbf1_{\{t\le n\}}g$ to prove density of $D(M_t)$. It is symmetric because $t$ is real. If $g\in D(M_t^*)$ with adjoint value $h$, testing against every $L^2$ function supported in $\{t\le n\}$ gives $h=tg$ there. These sets increase to all space, so $tg=h\in L^2$ and $D(M_t^*)=D(M_t)$. Thus $M_t$ and its unitary conjugate $T$ are self-adjoint, with $D(T)=H^2$ by [F3]. For $z\notin\mathbb R$, $R_0(z)=\mathcal F_2^*M_{(t-z)^{-1}}\mathcal F_2$ is the actual two-sided inverse, since $t/(t-z)$ is bounded and $(T-z)R_0(z)=I$, $R_0(z)(T-z)=I$ on $D(T)$. [F3, given, algebra]

2.1 [Hardy relative bound and Neumann realization] Put $Bu=-\gamma u/r$ for $u\in H^2$. By [F3] and Fourier Cauchy–Schwarz, $\|Bu\|_2\le2\gamma\|\nabla u\|_2\le2\gamma\|Tu\|_2^{1/2}\|u\|_2^{1/2}\le\varepsilon\|Tu\|_2+\gamma^2\varepsilon^{-1}\|u\|_2$ for every $\varepsilon>0$. Choose $Y>16\gamma^2$ and $\varepsilon=1/4$. The exact free multipliers give $\|TR_0(\pm iY)\|\le1$, $\|R_0(\pm iY)\|\le1/Y$, and hence $\|BR_0(\pm iY)\|<1/2$. The operator series $\sum_{j\ge0}(-BR_0(\pm iY))^j$ converges in norm, and $R_0(\pm iY)(I+BR_0(\pm iY))^{-1}$ maps into $D(T)$ and is the two-sided inverse of $C\mp iY$ for $C=T+B$ on $H^2$. This proves surjectivity of both nonreal signs with the exact factor order. [step 1.2, F3, algebra]

2.2 [Radial law and moments] By [F1], $p(r)=r^2\int_{S^2}|\psi_{100}(r\Omega)|^2d\sigma=4a_0^{-3}r^2e^{-2r/a_0}$. By [F2], its integral is $4a_0^{-3}2/(2/a_0)^3=1$ and its first moment is $4a_0^{-3}6/(2/a_0)^4=3a_0/2$. [step 1.1, F1, F2, algebra]

3.1 [Exact adjoint domain] $C$ is densely defined and symmetric because both $T$ and the real multiplication $B$ are symmetric on $H^2$. Let $y\in D(C^*)$, fix $z=iY$, and let $x=(C-z)^{-1}(C^*-z)y\in D(C)$. Then $(C^*-z)(y-x)=0$. Since $\operatorname{ran}(C-\overline z)=L^2$, adjoint pairing shows $\ker(C^*-z)=\{0\}$; consequently $y=x\in D(C)$. Thus $D(C^*)=D(C)=H^2$ and $C=C^*$, not merely a formally symmetric differential expression. All constructions are explicit sequences/truncations or single-vector existential arguments under CC. [step 2.1, algebra]

4.1 [Weak $H^2$ domain of the actual exponential] On $r>0$ let $f=e^{-\alpha r}$ and $\Omega_i=x_i/r$. Its classical derivatives are $\partial_i f=-\alpha f\Omega_i$ and $\partial_j\partial_i f=\alpha^2 f\Omega_i\Omega_j-\alpha f(\delta_{ij}-\Omega_i\Omega_j)/r$. Each is in $L^2(\mathbb R^3)$: the first derivatives are bounded times an exponential and second derivatives are bounded by $2\alpha^2f+2\alpha f/r$, with $\int_0^1 r^2/r^2\,dr<\infty$ and exponential tails. These are also the weak derivatives on all space. Indeed, integrate against a compactly supported smooth test function over $r>\delta$ and let $\delta\downarrow0$; each inner-sphere boundary term has magnitude bounded by a constant times its area $4\pi\delta^2$, because $f$ and its first derivatives are bounded. It tends to zero, and the volume integrals converge since the displayed derivatives are locally integrable. Thus no origin-supported delta term is present and $f\in H^2$, even though it is not classically differentiable at zero. Summing the weak second derivatives gives $-\Delta f=(-\alpha^2+2\alpha/r)f$ almost everywhere; hence $Cf=-\alpha^2 f$ because $\gamma=2\alpha$. Multiplication by $N$ preserves the domain and gives the claimed eigenvalue $-\gamma^2/4$. [step 3.1, F1, F2, F3, algebra]

5.1 [The level is the ground level, locally] For a compactly supported smooth $v$, integrate $\operatorname{div}\Omega=2/r$ on punctured balls; the inner flux of $|v|^2\Omega$ is $O(\delta^2)$ and vanishes. Expanding the square gives $\|\nabla v+\alpha\Omega v\|_2^2=\|\nabla v\|_2^2+\alpha^2\|v\|_2^2-2\alpha\int |v|^2/r$. By $H^1$ smooth density and the Hardy inequality, all these terms extend continuously to $H^1$: for example $\int |v|^2/r\le\|v/r\|_2\|v\|_2$. For $v\in D(C)=H^2$, Fourier pairing then gives $\langle Cv,v\rangle+\alpha^2\|v\|_2^2=\|\nabla v+\alpha\Omega v\|_2^2\ge0$. Thus $C\ge-\alpha^2$. For any real $\lambda<-\alpha^2$, Cauchy–Schwarz gives $\|(C-\lambda)v\|_2\ge(-\alpha^2-\lambda)\|v\|_2$; self-adjointness makes its range closed, and the orthogonal complement of the range is $\ker(C-\lambda)=\{0\}$, so its range is all $L^2$ and its inverse is bounded. Such $\lambda$ is outside the spectrum. Step 4.1 supplies an eigenvector at the lower bound, so this is a ground vector. No negative-spectrum theorem or AC spectral calculus is needed. [step 4.1, F3, algebra]

5.2 [Degree-zero Laguerre identity without Kummer dependence] The degree-zero generalized Laguerre polynomial is $L_0^{(a)}(s)=1$: equivalently the degree-zero normalized solution of $sv''+(a+1-s)v'=0$ is $v\equiv1$. In the reduced $l=0$ equation $-u''-\gamma u/r=-\alpha^2u$, substitution $u=r e^{-\alpha r}v(2\alpha r)$ produces $s v''+(2-s)v'=0$ since $\gamma=2\alpha$. Its degree-zero normalized solution $L_0^{(1)}=1$ therefore gives exactly $u=r e^{-\alpha r}$. Normalization supplies $u_{10}=2a_0^{-3/2}r e^{-r/a_0}$ and $\psi_{100}=u_{10}Y_{00}/r$ with the same constant as step 1.1. This is the claimed special polynomial-exponential case; it does not invoke a general radial completeness theorem. [step 1.1, step 4.1, F1, F2, algebra]

6.1 [Conclusion] Steps 1.1, 4.1, 2.2 and 5.2 prove (a)–(d), and steps 1.2, 2.1 and 3.1 prove its exact self-adjoint realization, step 4.1 proves the weak ground-vector domain, and step 5.1 proves the ground lower bound under CC alone. [step 1.1, step 3.1, step 4.1, step 5.1, step 2.2, step 5.2] ∎
