---
id: thm-nrqm-coulomb-atomic-dipole-matrix-element-domain
aliases: [nrqm-coulomb-atomic-dipole-matrix-element-domain]
kind: theorem
domain: mathematics
title: "Atomic dipole matrix-element domain"
status: draft
origin: pipeline
dependency_level: 10
deps: [thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy, thm-nrqm-coulomb-kummer-recurrence-and-termination, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-angular-radial-unitary-reduction, thm-nrqm-orbital-and-spin-dipole-angular-selection-rules, thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-nrqm-oscillator-oscillator-scaling-and-exact-realization, thm-nrqm-oscillator-hermite-recurrence, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-inner-product-space, cor-cauchy-schwarz-inequality-for-l-two, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy: mathematical-premise
  thm-nrqm-coulomb-kummer-recurrence-and-termination: mathematical-premise
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  thm-nrqm-coulomb-angular-radial-unitary-reduction: mathematical-premise
  thm-nrqm-orbital-and-spin-dipole-angular-selection-rules: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-inner-product-space: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.4 pp. 231-233 (Theorem 10.9: the bound states psi_(n,l,m) = R_{n,l}Y_l^m and their exponential decay)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics (Cappella Archive), Section 9.3 pp. 213-219 (time-dependent perturbation theory; radiative transition rates in the electric dipole approximation and §9.3.3 selection rules)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\gamma>0$, let
$C=-\Delta-\gamma/|\cdot|$ on $H^2(\mathbb R^3;\mathbb C)$ be as above, let
$(\psi_{nlm})$ be the bound eigenfunctions of
[[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]], and for
$i=1,2,3$ define the coordinate multiplication operator
$$Q_i\psi:=(\xi\mapsto\xi_i\,\psi(\xi)),\qquad D(Q_i):=\{\psi\in L^2(\mathbb R^3;\mathbb C):\xi_i\psi\in L^2\}.$$
Write also $Q_0:=x_3$ and $Q_\pm:=(x_1\pm ix_2)/\sqrt2$. Then:

(a) each $Q_i$ is self-adjoint on $D(Q_i)$, the domain is a proper dense subspace of $L^2$, and every bound state satisfies $\psi_{nlm}\in D(Q_i)$, with $\|Q_i\psi_{nlm}\|_2^2=\int_0^\infty r^2|u_{nl}(r)|^2dr\cdot\int_{S^2}|\Omega_iY_{lm}(\Omega)|^2d\sigma(\Omega)<\infty$;

(b) for all labels and each $q\in\{-1,0,1\}$ the matrix element $\langle\psi_{n'l'm'},Q_q\psi_{nlm}\rangle$ is absolutely convergent and factors as
$$\langle\psi_{n'l'm'},Q_q\psi_{nlm}\rangle=\Bigl(\int_0^\infty r\,u_{n'l'}(r)\overline{u_{nl}(r)}\,dr\Bigr)\Bigl(\int_{S^2}Y_{l'm'}(\Omega)\overline{Q_q(\Omega)\,Y_{lm}(\Omega)}\,d\sigma(\Omega)\Bigr),$$
where $Q_q(\Omega)$ denotes the restriction of the polynomial $Q_q$ to $S^2$;

(c) the angular factor vanishes unless $l'=l+1,\ m'=m+q$ or $l'\ge1,\ l'=l-1,\ m'=m+q$; these are necessary conditions only: no assertion is made that an allowed pair has nonzero radial integral, and no transition probability is asserted or computed;

(d) for the oscillator: with $\omega>0$, $\ell:=\sqrt{\hbar/(m\omega)}$, the complete orthonormal family $(\psi_n^{\mathrm{osc}})$ of [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]] and the position operator $X$ (multiplication by $\ell y$ in the scaled variable) one has
$$X\psi_n^{\mathrm{osc}}=\frac{\ell}{\sqrt2}\bigl(\sqrt n\,\psi_{n-1}^{\mathrm{osc}}+\sqrt{n+1}\,\psi_{n+1}^{\mathrm{osc}}\bigr),$$
so $\langle\psi_{n'}^{\mathrm{osc}},X\psi_n^{\mathrm{osc}}\rangle$ vanishes unless $n'=n\pm1$, with the displayed coefficients; in particular the oscillator position matrix elements are supported on a single step $|\Delta n|=1$, while the Coulomb selection rules constrain only $\Delta l$ and $\Delta m$ and leave the radial integral free.

This item concerns matrix elements of multiplication operators on $L^2$ and
their finiteness and selection rules; it asserts no absorption, emission or
transition rate and no physical interpretation.

## Facts & Assumptions

**Given:** $\gamma>0$; the bound states $\psi_{nlm}=u_{nl}(r)Y_{lm}(\Omega)/r$ of the previous items; the coordinate multipliers $Q_i,Q_q$; the oscillator data.

[F1] For a real finite-valued measurable $a$ the multiplier $M_af=af$ with $D(M_a)=\{f:af\in L^2\}$ is self-adjoint ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] (a), [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]); the coordinate functions $\xi_i$ are real finite-valued.

[F2] Every bound state has $u_{nl}\in L^2(0,\infty)$, $u_{nl}(r)=c\,r^{l+1}e^{-kr}L_{n-l-1}^{(2l+1)}(2kr)$ up to a nonzero scalar with $k=\gamma/(2n)$, and $\|\psi_{nlm}\|_2=\|u_{nl}\|_2$ ([[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]], [[thm-nrqm-coulomb-kummer-recurrence-and-termination]], [[thm-nrqm-coulomb-angular-radial-unitary-reduction]]).

[F3] Dipole angular selection rules: for the spherical components $Q_0=x_3$, $Q_\pm=(x_1\pm ix_2)/\sqrt2$ and the family $(Y_{lm})$, the angular matrix element $\langle Y_{l'm'},Q_q|_{S^2}Y_{lm}\rangle$ can be nonzero only if $l'=l+1,\ m'=m+q$ or $l'\ge1,\ l'=l-1,\ m'=m+q$; the rule is a necessary condition on the angular integrals only ([[thm-nrqm-orbital-and-spin-dipole-angular-selection-rules]], [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]).

[F4] Oscillator: the scaled Hermite functions $\psi_n^{\mathrm{osc}}=\ell^{-1/2}g_n(x/\ell)$ form a complete orthonormal family of $L^2(\mathbb R,dx)$ with $x=\ell y$, and the Hermite recurrence gives $\sqrt2\,y\,g_n=\sqrt n\,g_{n-1}+\sqrt{n+1}\,g_{n+1}$ ([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]], [[thm-nrqm-oscillator-hermite-recurrence]] (d), (g), [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[F5] Cauchy-Schwarz for the $L^2$ and $L^2(S^2,\sigma)$ pairings ([[cor-cauchy-schwarz-inequality-for-l-two]], [[def-inner-product-space]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

## Proof

1.1 [The coordinate multipliers and their domains] Each $Q_i$ is the multiplier $M_{\xi_i}$ of [F1] for the real finite-valued function $\xi_i$, hence self-adjoint; the domain is dense (it contains $C_c^\infty$) and proper: with $\varphi(t):=((1+|t|)\sqrt{\log(2+|t|)})^{-1}\in L^2(\mathbb R)$ one has $t\varphi(t)\notin L^2(\mathbb R)$, so $\psi(\xi):=\varphi(\xi_1)e^{-|\xi_2|}e^{-|\xi_3|}$ satisfies $\psi\in L^2(\mathbb R^3)$ and $\xi_1\psi\notin L^2(\mathbb R^3)$, whence $D(Q_1)\ne L^2$. [F1, given, algebra]

2.1 [Bound states lie in the domain] Let $\psi=\psi_{nlm}=u(r)Y_{lm}(\Omega)/r$ and compute $Q_i\psi=u(r)\Omega_iY_{lm}(\Omega)$; by the polar decomposition the squared norm is $\|Q_i\psi\|_2^2=\int_0^\infty r^2|u(r)|^2dr\cdot\int_{S^2}|\Omega_iY_{lm}(\Omega)|^2d\sigma(\Omega)$. The first factor is finite because by [F2] $u$ is a nonzero scalar multiple of $r^{l+1}e^{-kr}L_{n-l-1}^{(2l+1)}(2kr)$, a polynomial times an exponential, and the second factor is at most $\sigma(S^2)$ because $|\Omega_i|\le1$. Hence $\psi_{nlm}\in D(Q_i)$ with the displayed identity; this completes (a). [step 1.1, F2, F5, given, algebra]

3.1 [Factorization and absolute convergence] For $Q_q$, $q\in\{-1,0,1\}$, the function $Q_q\psi_{nlm}=u_{nl}(r)Q_q(\Omega)Y_{lm}(\Omega)$ is the transported single-block function with radial factor $u_{nl}$ and angular factor $Q_qY_{lm}$; using the polar decomposition and the fact that $\int_{S^2}|Q_q(\Omega)Y_{lm}|d\sigma<\infty$ (finite sum over the sphere), the pairing with $\psi_{n'l'm'}=u_{n'l'}(r)Y_{l'm'}(\Omega)/r$ is $\int_0^\infty r\,u_{n'l'}(r)\overline{u_{nl}(r)}dr\cdot\int_{S^2}Y_{l'm'}\overline{Q_qY_{lm}}d\sigma$, the weight $r$ coming from the polar Jacobian $r^2$ together with the factor $r^{-1}$ in $\psi_{n'l'm'}$; the two factors are finite by Cauchy-Schwarz on $(0,\infty)$ and on $S^2$ (the radial functions are polynomial-exponential by [F2]): this is (b), and absolute convergence is exactly the finiteness of the integrals in the two factors. [step 2.1, F5, given, algebra]

4.1 [Selection rules] Applying [F3] to the angular factor of step 3.1 gives that it vanishes unless $l'=l+1,\ m'=m+q$ or $l'\ge1,\ l'=l-1,\ m'=m+q$; no statement is made about the radial integral $\int u_{n'l'}u_{nl}dr$, which may vanish for allowed angular pairs, and no transition probability is defined. This is (c). [step 3.1, F3]

5.1 [The oscillator comparison] In the scaled variable $x=\ell y$ multiplication by $x$ is $\ell$ times multiplication by $y$; by [F4] the Hermite recurrence gives, on the complete orthonormal family $(\psi_n^{\mathrm{osc}})$, $X\psi_n^{\mathrm{osc}}=\ell\,y\,\psi_n^{\mathrm{osc}}=\frac{\ell}{\sqrt2}(\sqrt n\psi_{n-1}^{\mathrm{osc}}+\sqrt{n+1}\psi_{n+1}^{\mathrm{osc}})$; taking pairings with $\psi_{n'}^{\mathrm{osc}}$ and using orthonormality [F4] and Cauchy-Schwarz [F5] gives $\langle\psi_{n'}^{\mathrm{osc}},X\psi_n^{\mathrm{osc}}\rangle=\frac{\ell}{\sqrt2}(\sqrt n\delta_{n',n-1}+\sqrt{n+1}\delta_{n',n+1})$, so exactly the transitions $|\Delta n|=1$ occur, with the displayed coefficients. This is (d). [step 4.1, F4, F5, algebra]

6.1 [Conclusion] Clauses (a), (b), (c), (d) are steps 1.1 and 2.1, 3.1, 4.1, and 5.1. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
