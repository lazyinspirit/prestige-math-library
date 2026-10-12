---
id: thm-nrqm-coulomb-ground-radial-probability-and-units
aliases: [nrqm-coulomb-ground-radial-probability-and-units]
kind: theorem
domain: mathematics
title: "Ground radial probability and units"
status: draft
origin: pipeline
dependency_level: 10
deps: [thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy, thm-nrqm-coulomb-laguerre-bound-energy-exhaustion, thm-nrqm-coulomb-kummer-recurrence-and-termination, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-angular-radial-unitary-reduction, thm-nrqm-orbital-and-spin-sphere-onb, thm-polar-coordinates-formula-for-lebesgue-measure, lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates, thm-ftc-second-part, thm-derivative-of-exponential, thm-algebra-of-derivatives, cor-cauchy-schwarz-inequality-for-l-two, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy: mathematical-premise
  thm-nrqm-coulomb-laguerre-bound-energy-exhaustion: mathematical-premise
  thm-nrqm-coulomb-kummer-recurrence-and-termination: mathematical-premise
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  thm-nrqm-coulomb-angular-radial-unitary-reduction: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.4 p. 232 (the lowest eigenvalue E_0 = -gamma^2/4 is simple and psi_000(x) = sqrt{gamma^3/2},e^{-gamma r/2} is positive)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics (Cappella Archive), Section 8.1 pp. 186-193 (radial wavefunctions and radial probability densities of hydrogen, and the expectation values for powers of r)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\gamma>0$, let
$C=-\Delta-\gamma/|\cdot|$ on $D(C)=H^2(\mathbb R^3;\mathbb C)$ be as above,
and put $a_0:=2/\gamma>0$. Define
$$\psi_{100}(x):=\Bigl(\frac{\gamma^3}{8\pi}\Bigr)^{1/2}e^{-r/a_0}\quad(x=r\Omega,\ r=|x|).$$
Then:

(a) $\psi_{100}\in D(C)$, $\|\psi_{100}\|_{L^2}=1$, and $C\psi_{100}=-\frac{\gamma^2}{4}\psi_{100}$;

(b) for every Borel set $B\subseteq\mathbb R^3$, writing $dx$ for Lebesgue measure,
$$\int_B|\psi_{100}(x)|^2dx=\int_0^\infty\mathbf 1_B(r\Omega)\,\frac{\gamma^3}{2}r^2e^{-2r/a_0}\,d\sigma(\Omega)\,dr,$$
so the radial probability density $p(r):=\frac{\gamma^3}{2}r^2e^{-2r/a_0}=4r^2a_0^{-3}e^{-2r/a_0}$ is a probability density on $(0,\infty)$: $p\ge0$ and $\int_0^\infty p(r)dr=1$;

(c) the mean of $p$ is $\int_0^\infty r\,p(r)dr=3a_0/2$, and the unique maximum (mode) of $p$ is at $r=a_0$;

(d) the spatial density $|\psi_{100}(x)|^2=\frac{\gamma^3}{8\pi}e^{-2r/a_0}$ is strictly decreasing in $r$ and maximal at $x=0$, and for every $\varepsilon>0$, $\int_{|x|<\varepsilon}|\psi_{100}|^2dx=\frac16\bigl(\frac{2\varepsilon}{a_0}\bigr)^3+O(\varepsilon^4)>0$ tends to $0$ as $\varepsilon\downarrow0$: the density maximum at the origin is not an atom of probability at any point or a definite orbit;

(e) *parametrisation and dimensions.* If $\hbar,m,\kappa>0$ and $\gamma:=2m\kappa/\hbar^2$, then $a_0=\hbar^2/(m\kappa)$ and the eigenvalues of the operator $C_{\hbar,m,\kappa}:=-\frac{\hbar^2}{2m}\Delta-\frac{\kappa}{|\cdot|}$ are $-\frac{m\kappa^2}{2\hbar^2n^2}=-\frac{\gamma^2}{4n^2}$ ($n\ge1$); under the dimensional conventions $[\hbar]=\mathrm{J\,s}$, $[m]=\mathrm{kg}$, $[\kappa]=\mathrm{J\,m}$, the constants $a_0^2$ and $m\kappa^2/(2\hbar^2)$ have the dimensions of $\mathrm m^2$ and $\mathrm J$ respectively.

Clauses (a)–(d) are mathematical statements about the normalised ground vector
and its distribution; clause (e) is a dimensional-consistency statement about
the parametrisation and is not a physical claim, measurement or identification
of any quantity with nature.

## Facts & Assumptions

**Given:** $\gamma>0$, $a_0=2/\gamma$, the operator $C$ and its eigenfunctions as in the previous items of this page.

[F1] The regular solution at $k=\gamma/2$, $l=0$ is, up to a nonzero scalar, $u(r)=re^{-\gamma r/2}=re^{-r/a_0}$, and $A_0u=-(\gamma^2/4)u$ with transported function $\psi=e^{-r/a_0}Y_{00}$; the eigenvalue site is exactly the ground level of $A_0$; moreover the negative eigenvalues of $C$ are exactly $-\gamma^2/(4n^2)$, $n\ge1$, with one-dimensional eigenspaces spanned by the transported regular solutions ([[thm-nrqm-coulomb-kummer-recurrence-and-termination]] (d), (e), [[thm-nrqm-coulomb-laguerre-bound-energy-exhaustion]] (b), (c), [[thm-nrqm-coulomb-transported-radial-endpoint-realization]] (e)).

[F2] $Y_{00}=1/\sqrt{4\pi}$ and $\sigma(S^2)=4\pi$; the polar decomposition of Lebesgue measure holds ([[thm-nrqm-orbital-and-spin-sphere-onb]], [[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]], [[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F3] For $a>0$ and $n\in\{0,1,2,3\}$ one has $\int_0^\infty r^ne^{-ar}dr=n!/a^{n+1}$; this follows by induction from the derivative of $r^ne^{-ar}$ and the fundamental theorem, the boundary terms at $0$ and $+\infty$ vanishing ([[thm-ftc-second-part]], [[thm-derivative-of-exponential]], [[thm-algebra-of-derivatives]]).

[F4] The $L^2$ norm of a Borel function is computed by the polar decomposition, and $|Y_{00}|^2=1/(4\pi)$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[def-hilbert-space]]).

## Proof

1.1 [The normalized ground vector] By [F1] the ground eigenfunction of $A_0$ is $u(r)=cre^{-r/a_0}$ and the corresponding $C$-eigenvector is $c\,e^{-r/a_0}Y_{00}$, up to the scalar $c\ne0$. By [F4] and [F2], $\|e^{-r/a_0}Y_{00}\|^2_{L^2}=\frac1{4\pi}\int_0^\infty r^2e^{-2r/a_0}4\pi\,dr=\int_0^\infty r^2e^{-2r/a_0}dr=2/(2/a_0)^3=a_0^3/4$ by [F3]; hence the normalized ground vector is $\psi_{100}=(4/a_0^3)^{1/2}e^{-r/a_0}Y_{00}=(\gamma^3/(8\pi))^{1/2}e^{-r/a_0}$, since $Y_{00}=1/\sqrt{4\pi}$ and $a_0=2/\gamma$. By [F1] it lies in $D(C)$ and $C\psi_{100}=-(\gamma^2/4)\psi_{100}$. This is (a). [F1, F2, F3, F4, algebra]

2.1 [The radial law] For a Borel set $B$, [F2] and [F4] give $\int_B|\psi_{100}|^2dx=\frac{\gamma^3}{8\pi}\int_B e^{-2r/a_0}dx=\frac{\gamma^3}{8\pi}\int_0^\infty r^2e^{-2r/a_0}\int_{S^2}\mathbf 1_B(r\Omega)d\sigma(\Omega)dr$, which is the displayed identity of (b) because $\frac{\gamma^3}{8\pi}\cdot4\pi=\frac{\gamma^3}{2}$; the density $p(r)=\frac{\gamma^3}{2}r^2e^{-2r/a_0}$ is nonnegative and integrates to $1$ by the value of the integral computed in step 1.1. [step 1.1, F2, F3, F4, algebra]

3.1 [Mean and mode] By [F3] together with [F2], $\int_0^\infty r\,p(r)dr=\frac{\gamma^3}{2}\int_0^\infty r^3e^{-2r/a_0}dr=\frac{\gamma^3}{2}\cdot\frac{6}{(2/a_0)^4}=\frac{\gamma^3}{2}\cdot\frac{6a_0^4}{16}=\frac{3\gamma^3a_0^4}{16}=\frac{3a_0}{2}$ because $\gamma a_0=2$. For the mode, differentiate $q(r):=r^2e^{-2r/a_0}$ using [F3]'s ingredients: $q'(r)=2re^{-2r/a_0}-(2/a_0)r^2e^{-2r/a_0}=(2/a_0)r(a_0-r)e^{-2r/a_0}$, which is positive for $0<r<a_0$, zero at $r=a_0$ and negative for $r>a_0$; hence $q$, and with it $p$, has its unique maximum at $r=a_0$. This is (c). [step 2.1, F3, algebra]

3.2 [Density versus point probability] The spatial density $|\psi_{100}(x)|^2=\frac{\gamma^3}{8\pi}e^{-2r/a_0}$ is radial and strictly decreasing, so it is maximal at $x=0$; on the other hand, by step 2.1, $\int_{|x|<\varepsilon}|\psi_{100}|^2dx=\frac{\gamma^3}{2}\int_0^\varepsilon r^2e^{-2r/a_0}dr=\frac{\gamma^3}{2}\bigl(\frac{\varepsilon^3}{3}+O(\varepsilon^4)\bigr)=\frac{4\varepsilon^3}{3a_0^3}+O(\varepsilon^4)=\frac16\bigl(\frac{2\varepsilon}{a_0}\bigr)^3+O(\varepsilon^4)$ using $\gamma=2/a_0$, and this tends to $0$ as $\varepsilon\downarrow0$. Thus the maximum of the density at the origin is not positive probability for the singleton $\{0\}$ nor a definite orbit; this is (d). [step 2.1, F3, algebra]

4.1 [Parametrisation and dimensions] Setting $\gamma=2m\kappa/\hbar^2$ gives $a_0=2/\gamma=\hbar^2/(m\kappa)>0$, and the operator identity $C_{\hbar,m,\kappa}=\frac{\hbar^2}{2m}C$ on $H^2$ holds because $\frac{\hbar^2}{2m}\cdot\frac{2m\kappa}{\hbar^2}=\kappa$; hence the eigenvalues of $C_{\hbar,m,\kappa}$ are $\frac{\hbar^2}{2m}\cdot(-\frac{\gamma^2}{4n^2})=-\frac{m\kappa^2}{2\hbar^2n^2}$ by step 1.1 and the exhaustion of negative levels. For the dimensional statement, treating $\mathrm{J\,s}$, $\mathrm{kg}$, $\mathrm{J\,m}$ as independent base symbols and using $\mathrm J=\mathrm{kg\,m^2\,s^{-2}}$, one computes $[\hbar^2/(m\kappa)]=\mathrm{J^2s^2\,kg^{-1}J^{-1}m^{-1}}=\mathrm{J\,s^2\,kg^{-1}m^{-1}}=\mathrm m$, so $a_0^2$ has dimension $\mathrm m^2$, and $[m\kappa^2/\hbar^2]=\mathrm{kg\,J^2m^2J^{-2}s^{-2}}=\mathrm{kg\,m^2s^{-2}}=\mathrm J$. This is (e). [step 1.1, step 3.2, F1, algebra]

5.1 [Conclusion] Clauses (a), (b), (c), (d), (e) are steps 1.1, 2.1, 3.1, 3.2 and 4.1. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1] ∎
