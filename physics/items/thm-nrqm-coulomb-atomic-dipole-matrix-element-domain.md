---
id: thm-nrqm-coulomb-atomic-dipole-matrix-element-domain
aliases: [nrqm-coulomb-atomic-dipole-matrix-element-domain]
kind: theorem
domain: mathematics
title: "Atomic dipole matrix-element domain"
status: draft
origin: pipeline
dependency_level: 10
deps: [thm-algebra-of-derivatives, thm-derivative-of-exponential, thm-ftc-second-part, thm-dominated-convergence, thm-tonelli-and-fubini-for-completed-product-measures, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-polar-coordinates-formula-for-lebesgue-measure, thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy, thm-nrqm-coulomb-kummer-recurrence-and-termination, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-angular-radial-unitary-reduction, thm-nrqm-orbital-and-spin-dipole-angular-selection-rules, thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-nrqm-oscillator-oscillator-scaling-and-exact-realization, thm-nrqm-oscillator-hermite-recurrence, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-inner-product-space, cor-cauchy-schwarz-inequality-for-l-two, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-algebra-of-derivatives: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
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

(c) the angular factor vanishes unless $l'=l+1,\ m'=m+q$ or $l\ge1,\ l'=l-1,\ m'=m+q$; these are necessary conditions only: no assertion is made that an allowed pair has nonzero radial integral, and no transition probability is asserted or computed;

(d) for the oscillator: fix real parameters $m>0$, $\omega>0$, $\hbar>0$ and put $\ell:=\sqrt{\hbar/(m\omega)}>0$. For the complete orthonormal family $(\psi_n^{\mathrm{osc}})$ of [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]] and the position operator $Xf(x)=xf(x)$ on $D(X)=\{f\in L^2(\mathbb R,dx):xf\in L^2\}$ (multiplication by $\ell y$ after $x=\ell y$), one has
$$X\psi_n^{\mathrm{osc}}=\frac{\ell}{\sqrt2}\bigl(\sqrt n\,\psi_{n-1}^{\mathrm{osc}}+\sqrt{n+1}\,\psi_{n+1}^{\mathrm{osc}}\bigr),$$
so $\langle\psi_{n'}^{\mathrm{osc}},X\psi_n^{\mathrm{osc}}\rangle$ vanishes unless $n'=n\pm1$, with the displayed coefficients; in particular the oscillator position matrix elements are supported on a single step $|\Delta n|=1$, while the Coulomb selection rules constrain only $\Delta l$ and $\Delta m$ and leave the radial integral free.

This item concerns matrix elements of multiplication operators on $L^2$ and
their finiteness and selection rules; it asserts no absorption, emission or
transition rate and no physical interpretation.

## Facts & Assumptions

**Given:** $\gamma>0$; the integer bound/angular labels of the stated family; maximal domains $D(Q_q)=\{f:Q_qf\in L^2\}$, so $D(Q_0)=D(Q_3)$ and $D(Q_\pm)=D(Q_1)\cap D(Q_2)$ because $|Q_\pm|^2=(x_1^2+x_2^2)/2$; the bound states $\psi_{nlm}=u_{nl}(r)Y_{lm}(\Omega)/r$ of the previous items; the coordinate multipliers $Q_i,Q_q$; the oscillator parameters $m,\omega,\hbar>0$ and $\ell=\sqrt{\hbar/(m\omega)}>0$.

[F1] For a real finite-valued measurable $a$ the multiplier $M_af=af$ with $D(M_a)=\{f:af\in L^2\}$ is self-adjoint ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] (a), [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]); the coordinate functions $\xi_i$ are real finite-valued.

[F2] Every bound state has $u_{nl}\in L^2(0,\infty)$, $u_{nl}(r)=c\,r^{l+1}e^{-kr}L_{n-l-1}^{(2l+1)}(2kr)$ up to a nonzero scalar with $k=\gamma/(2n)$, and $\|\psi_{nlm}\|_2=\|u_{nl}\|_2$ ([[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]], [[thm-nrqm-coulomb-kummer-recurrence-and-termination]], [[thm-nrqm-coulomb-angular-radial-unitary-reduction]]).

[F3] Dipole angular selection rules: for the spherical components $Q_0=x_3$, $Q_\pm=(x_1\pm ix_2)/\sqrt2$ and the family $(Y_{lm})$, the angular matrix element $\langle Y_{l'm'},Q_q|_{S^2}Y_{lm}\rangle$ can be nonzero only if $l'=l+1,\ m'=m+q$ or $l\ge1,\ l'=l-1,\ m'=m+q$; the rule is a necessary condition on the angular integrals only (degree and weight clauses (b), (c) of [[thm-nrqm-orbital-and-spin-dipole-angular-selection-rules]], [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]).

[F4] Oscillator: for real $m,\omega,\hbar>0$ and $\ell=\sqrt{\hbar/(m\omega)}>0$, the scaled Hermite functions $\psi_n^{\mathrm{osc}}=\ell^{-1/2}g_n(x/\ell)$ form a complete orthonormal family of $L^2(\mathbb R,dx)$ with $x=\ell y$, and the Hermite recurrence gives $\sqrt2\,y\,g_n=\sqrt n\,g_{n-1}+\sqrt{n+1}\,g_{n+1}$ with the lowering term omitted at $n=0$ (equivalently define $g_{-1}=0$ and $\psi_{-1}^{\mathrm{osc}}=0$) ([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]], [[thm-nrqm-oscillator-hermite-recurrence]] (d), (g), [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[F5] Polar volume integration is $dx=r^2dr\,d\sigma$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]); nonnegative product integrals use [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], and absolutely convergent product integrals use [[thm-tonelli-and-fubini-for-completed-product-measures]]. For $a>0$ and integer $p\ge0$, integration by parts starting with $p=0$ gives $\int_0^\infty r^pe^{-ar}dr=p!/a^{p+1}$; the boundary terms vanish since a sufficiently high exponential-series term bounds every fixed polynomial power ([[thm-ftc-second-part]], [[thm-derivative-of-exponential]], [[thm-algebra-of-derivatives]]). Cauchy-Schwarz for the $L^2$ and $L^2(S^2,\sigma)$ pairings ([[cor-cauchy-schwarz-inequality-for-l-two]], [[def-inner-product-space]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

## Proof

1.1 [Coordinate domains] Each real $Q_i$ is self-adjoint by [F1]. For $f\in L^2$, $f_N=\mathbf1_{|x_i|\le N}f$ lies in $D(Q_i)$ and converges in $L^2$, proving density. Put $\varphi(t)=(1+|t|)^{-1}$; it belongs to $L^2(\mathbb R)$ whereas $t^2|\varphi(t)|^2\ge1/4$ for $|t|\ge1$. For each $i$, $f_i(x)=\varphi(x_i)\prod_{j\ne i}e^{-|x_j|}$ belongs to $L^2$ but $x_if_i\notin L^2$ by nonnegative product integration. Thus every domain is proper, including $i=2,3$, not just the first-coordinate example. [F1, F5, given, algebra]

2.1 [Bound-state domain membership] By [F2], $u_{nl}$ is polynomial-exponential with positive decay rate and is $O(r^{l+1})$ at zero. Hence $\int_0^\infty r^2|u_{nl}|^2dr<\infty$: near zero the integrand is $O(r^{2l+4})$, and all polynomial-exponential moments at infinity are finite by [F5]. Polar coordinates give exactly $\|Q_i\psi_{nlm}\|^2=\int r^2|u_{nl}|^2dr\int|\Omega_iY_{lm}|^2d\sigma$, whose angular factor is at most one. Each bound state therefore lies in every $D(Q_i)$ and in the stated complex component domains. This proves (a). [step 1.1, F2, F5, algebra]

3.1 [Absolute convergence and factorization] Put $v=u_{n'l'}$, $u=u_{nl}$, $Y'=Y_{l'm'}$ and $Y=Y_{lm}$. Cauchy–Schwarz gives $\int_0^\infty r|v\overline u|dr\le\|v\|_2\|ru\|_2<\infty$ and $\int_{S^2}|Y'\overline{Q_qY}|d\sigma\le\|Y'\|_2\|Q_qY\|_2\le1$. Tonelli and Fubini in [F5] justify absolute integration of the polar product and its factorization into $(\int_0^\infty rv\overline u\,dr)(\int_{S^2}Y'\overline{Q_qY}\,d\sigma)$, exactly (b) for the linear-first pairing. Coordinate multiplication generally produces two angular blocks; no false single-block claim is used. [step 2.1, F2, F5, algebra]

4.1 [All necessary angular branches] By [F3], $Q_qh_{lm}=R_q+r^2G_q$ has harmonic degrees $l+1,l-1$, with $G_q=(\sum c_{q,i}\partial_i h_{lm})/(2l+1)$. At $l=1$ its derivative term can be a nonzero constant in $V_0$, so the downward branch $l'=0$ is retained. At $l=0$ the derivatives vanish and only the upward branch remains. Degree orthogonality and the $L_z$ eigenvalue calculation give exactly $l'=l+1,m'=m+q$, or $l\ge1,l'=l-1,m'=m+q$. These are necessary only; the radial factor is $\int_0^\infty r\,u_{n'l'}\overline{u_{nl}}dr$ and may vanish for an allowed angular pair. No transition probability is defined. This proves (c). [step 3.1, F3, algebra]

5.1 [The oscillator comparison] In the scaled variable $x=\ell y$ multiplication by $x$ is $\ell$ times multiplication by $y$; by [F4] the Hermite recurrence gives, on the complete orthonormal family $(\psi_n^{\mathrm{osc}})$, $X\psi_n^{\mathrm{osc}}=\ell\,y\,\psi_n^{\mathrm{osc}}=\frac{\ell}{\sqrt2}(\sqrt n\psi_{n-1}^{\mathrm{osc}}+\sqrt{n+1}\psi_{n+1}^{\mathrm{osc}})$; the lowering term being absent at $n=0$. The recurrence puts $X\psi_n^{\mathrm{osc}}$ in $L^2$, proving membership in the maximal position domain; taking pairings with $\psi_{n'}^{\mathrm{osc}}$ and using orthonormality [F4] and Cauchy-Schwarz [F5] gives $\langle\psi_{n'}^{\mathrm{osc}},X\psi_n^{\mathrm{osc}}\rangle=\frac{\ell}{\sqrt2}(\sqrt n\delta_{n',n-1}+\sqrt{n+1}\delta_{n',n+1})$, so exactly the transitions $|\Delta n|=1$ occur, with the displayed coefficients. This is (d). [step 4.1, F4, F5, algebra]

6.1 [Conclusion] Clauses (a), (b), (c), (d) are steps 1.1 and 2.1, 3.1, 4.1, and 5.1. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
