---
id: thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence
aliases:
- nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence
kind: theorem
domain: mathematics
title: Concrete three-dimensional Cook existence
status: draft
origin: pipeline
dependency_level: 2
deps:
- lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus
- thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces
- thm-polar-coordinates-formula-for-lebesgue-measure
- thm-tonelli-and-fubini-for-completed-product-measures
- cor-cauchy-schwarz-inequality-for-l-two
- lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
- def-adjoint-of-a-densely-defined-unbounded-operator
- thm-nrqm-controlled-dynamics-cook-domain-criterion
- thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel
- thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound
- thm-plancherel
- thm-dominated-convergence
- lem-schwartz-space-is-dense-in-l-two
- def-schwartz-space-and-its-seminorms
- def-hilbert-space
- def-countable-choice
dependency_roles:
  lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  thm-nrqm-controlled-dynamics-cook-domain-criterion: mathematical-premise
  thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel: mathematical-premise
  thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  lem-schwartz-space-is-dense-in-l-two: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
      Section 12.3 pp. 253-256 (existence of wave operators for short-range potentials
      via Cook's criterion)
    url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf
  - title: 'M. Reed and B. Simon, Methods of Modern Mathematical Physics III: Scattering
      Theory, Section XI.3 (short-range potentials and asymptotic completeness; standard
      treatment of the L^2 class)'
    url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf
---


## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$V\in L^2(\mathbb R^3;\mathbb R)$ be real, let $H_0=-\Delta$ on
$D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$, and let $H=H_0+M_V$ be the
self-adjoint operator on $D(H_0)$ of
[[thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound]] (c).
Then:

(a) For every Schwartz function $\psi$
$$\int_0^\infty\bigl\|Ve^{-itH_0}\psi\bigr\|_2\,dt<\infty,\qquad \int_{-\infty}^0\bigl\|Ve^{-itH_0}\psi\bigr\|_2\,dt<\infty.$$

(b) Consequently the wave operators
$\Omega_\pm:=\operatorname*{s-lim}_{t\to\pm\infty}e^{itH}e^{-itH_0}$ exist as
bounded linear isometries on $L^2(\mathbb R^3)$ by
[[thm-nrqm-controlled-dynamics-cook-domain-criterion]], with
$\Omega_\pm e^{-isH_0}=e^{-isH}\Omega_\pm$ and
$H\Omega_\pm\psi=\Omega_\pm H_0\psi$ for $\psi\in D(H_0)$.

(c) *Free absolute continuity.* $H_0$ has purely absolutely continuous
spectrum: for every $\psi\in L^2$ the scalar spectral measure of $H_0$ is
absolutely continuous with respect to Lebesgue measure, with density
$\frac{\sqrt E}{2(2\pi)^3}\int_{S^2}|\mathcal F_2\psi(\frac{\sqrt E}{2\pi}\Omega)|^2d\sigma(\Omega)$
for almost every $E>0$, using any measurable Fourier representative. This nonnegative density lies in $L^1(0,\infty)$ with integral $\|\psi\|_2^2$, and the measure gives zero mass to $\{0\}$ and to $(-\infty,0)$.
Hence $L^2=H_{\mathrm{ac}}(H_0)$.

Assertions about the ranges of $\Omega_\pm$, asymptotic completeness or the
S-matrix are not made here; they are separate theorems
([[thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness]]).

## Facts & Assumptions

**Given:** CC, the Hilbert space $\mathcal H=L^2(\mathbb R^3;\mathbb C)$, the real potential $V\in L^2$, inner product $\langle u,v\rangle=\int u\overline v$, $q(\xi)=4\pi^2|\xi|^2$, $H_0=\mathcal F_2^*M_q\mathcal F_2$ on its maximal domain $H^2$, and $H=H_0+M_V$ on the same domain. All integrals of $L^2$ functions use measurable representatives and determine classes independent of null changes.

[F1] The actual current Gaussian supplier [[thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel]] proves the free multiplier realization directly, its explicit PVM $E_0(B)=\mathcal F_2^*M_{\mathbf1_{q\in B}}\mathcal F_2$, unitary group $U_0(t)=\mathcal F_2^*M_{e^{-itq}}\mathcal F_2$, exact domain preservation, and $\|U_0(t)\psi\|_\infty\le(4\pi|t|)^{-3/2}\|\psi\|_1$ for $t\ne0$ and $\psi\in L^1\cap L^2$. It carries CC alone and does not invoke the generic composite spectral supplier.

[F2] The Fourier characterization [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], Plancherel [[thm-plancherel]], and Cauchy–Schwarz [[cor-cauchy-schwarz-inequality-for-l-two]] identify $H^2=\{u:q\mathcal F_2u\in L^2\}$ and justify the Fourier splitting estimate proved below. The full real-$L^2$ potential and arbitrary-H Cook interfaces are [[thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound]] and [[thm-nrqm-controlled-dynamics-cook-domain-criterion]]; their needed concrete consequences are also proved locally below under CC.

[F3] On this specific $L^2$ space fix its countable dense sequence of finite box-step functions with rational endpoints and rational complex coefficients. The CC-only supplier [[lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus]] gives strongly continuous unitary groups of any self-adjoint operator on this space, preservation of exact generator domains, and differentiation $\frac{d}{dt}e^{itA}u=ie^{itA}Au$ for $u\in D(A)$. Schwartz density and Fourier invariance are [[lem-schwartz-space-is-dense-in-l-two]], [[def-schwartz-space-and-its-seminorms]], and the explicit free multiplier in [F1].

[F4] Polar integration for nonnegative Borel functions (extended to completed Lebesgue representatives in the density step below), Fubini/Tonelli, dominated convergence, and the Banach-valued fundamental theorem of calculus are [[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-dominated-convergence]], and [[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]].

## Proof

1.1 [Exact $L^2$ potential bound] For $u\in H^2$ and $R\ge1$, split the absolutely integrable Fourier inverse into $|\xi|\le R$ and $|\xi|>R$. Cauchy–Schwarz and $\int_{|\xi|>R}|\xi|^{-4}d\xi=4\pi/R$ give $\|u\|_\infty\le(4\pi/3)^{1/2}R^{3/2}\|u\|_2+(4\pi)^{1/2}R^{-1/2}\|H_0u\|_2/(4\pi^2)$. The same bounds show the inverse is absolutely convergent and continuous. Thus $Vu\in L^2$, and for every $\eta>0$ choosing a sufficiently large explicit $R$ gives $\|Vu\|_2\le\eta\|H_0u\|_2+b_\eta\|u\|_2$. Reality of $V$ gives symmetry of this multiplication pairing on $H^2$; no boundedness or compact support of $V$ is assumed. [F1, F2, F4, given, algebra]

1.2 [All-vector free density with the exact Jacobian] Fix any $\psi\in L^2$ and a Borel representative $f$ of $\mathcal F_2\psi$. Such a representative exists under CC: truncate and quantize each real and imaginary component of a Lebesgue measurable representative; each of the countably many measurable level sets differs from a Borel set by a subset of a Borel null set, by the completed Lebesgue measure definition. Choose these countably many replacements using CC. Their Borel simple functions converge to the given representative outside one Borel null set; take their pointwise limit where it exists and zero elsewhere. For every Borel $B$, the explicit free PVM gives $\mu_\psi(B)=\int_{\mathbb R^3}\mathbf1_B(4\pi^2|\xi|^2)|f(\xi)|^2d\xi$. Polar integration and the substitution $E=(2\pi r)^2$ give $r^2dr=\sqrt E\,dE/[2(2\pi)^3]$, hence $\mu_\psi(B\cap(0,\infty))=\int_{B\cap(0,\infty)}d_\psi(E)dE$, where $d_\psi(E)=\sqrt E\int_{S^2}|f(\sqrt E\,\Omega/(2\pi))|^2d\sigma(\Omega)/[2(2\pi)^3]$. Tonelli proves measurability and nonnegativity of the angular integral; the total integral is $\int|f|^2=\|\psi\|_2^2$, so it is finite for almost every $E$ and is an $L^1$ density. For any other Lebesgue measurable representative, the disagreement set lies in a Borel null set $N$. Apply the Borel polar formula and Tonelli to $\mathbf1_N$: for almost every positive energy, its spherical section has surface measure zero. On those spheres the changed representative equals the Borel one outside a subset of that null section and is measurable for completed surface measure. Thus the density is unchanged for almost every energy; exceptional energies can be assigned density zero. This justifies the formula for any measurable representative without asserting that its restriction to every sphere is measurable. This derives the displayed density for every vector directly, without only proving it on Schwartz functions or making pointwise sphere restrictions of an $L^2$ class. [F1, F2, F4, given, algebra]

2.1 [Self-adjoint common domain under CC] The free maximal multiplier is self-adjoint by [F1]. Let $R_0(z)=\mathcal F_2^*M_{(q-z)^{-1}}\mathcal F_2$. For $z=\pm i\tau$, $\|R_0(z)\|\le1/\tau$ and $\|H_0R_0(z)\|\le1$. Step 1.1 with $\eta=1/2$ and $\tau>2b_{1/2}$ gives $\|M_VR_0(z)\|<1$. The Neumann series inverts $I+M_VR_0(z)$, and the exact factorization $H-z=(I+M_VR_0(z))(H_0-z)$ on $H^2$ gives onto inverses $R_0(z)(I+M_VR_0(z))^{-1}$ at both signs. The densely defined symmetric $H$ is self-adjoint on precisely $H^2$: for $y\in D(H^*)$, solve $(H-i\tau)x=(H^*-i\tau)y$ with $x\in H^2$; then $y-x\in\ker(H^*-i\tau)=\operatorname{ran}(H+i\tau)^\perp=\{0\}$. Hence no adjoint-domain extension remains. The same Neumann argument at $z=-\kappa$, $\kappa>2b_{1/2}$, uses $\|H_0R_0(-\kappa)\|\le1$, $\|R_0(-\kappa)\|\le1/\kappa$ and shows every sufficiently negative real number is in the resolvent; the self-adjoint calculus [F3] therefore also gives a lower bound. Thus the full generic $L^2$ self-adjoint interface needed here is established under CC independently of Kato–Rellich. [step 1.1, F1, F3, algebra]

3.1 [All-time norm-continuity and integrability] For Schwartz $\psi$, put $u(t)=U_0(t)\psi$. The explicit multiplier gives continuous $u(t)$ in the free graph norm, with $\|u(t)\|_2=\|\psi\|_2$ and $\|H_0u(t)\|_2=\|H_0\psi\|_2$. Step 1.1 at $R=1$ bounds $\|Vu(t)\|_2$ by $C\|V\|_2(\|\psi\|_2+\|H_0\psi\|_2)$ uniformly on $[-1,1]$, and its relative bound applied to differences makes $Vu(t)$ norm-continuous. For $|t|\ge1$, [F1] gives $\|Vu(t)\|_2\le\|V\|_2(4\pi|t|)^{-3/2}\|\psi\|_1$. Both half-line norm integrals are finite, proving (a). This proves continuity directly in the graph norm rather than presupposing a domain product rule. [step 1.1, step 2.1, F1, F3, F4, algebra]

4.1 [Concrete moving-vector differentiation and Cook limits] Let $F(t)=e^{itH}U_0(t)$, with the CC group from [F3] and step 2.1. For fixed $t$ and $h\ne0$, the exact difference quotient equals $e^{itH}\{e^{ihH}[u(t+h)-u(t)]/h+[(e^{ihH}-I)/h]u(t)\}$. The first term tends to $-iH_0u(t)$ by the free graph-domain derivative and strong continuity of $e^{ihH}$; the second tends to $iHu(t)$ because $u(t)\in H^2=D(H)$. Thus $\frac{d}{dt}F(t)\psi=ie^{itH}Vu(t)$, continuously by step 3.1. The Banach fundamental theorem and unitarity give $\|F(t)\psi-F(s)\psi\|\le\int_s^t\|Vu(r)\|_2dr$ for every $s<t$. Both tails are Cauchy by step 3.1, so $\Omega_\pm\psi$ exist. Since every $F(t)$ is unitary, the limits preserve norms and are linear on the dense Schwartz class. For arbitrary $\eta\in L^2$ choose Schwartz $\psi_n\to\eta$ using CC; the isometry extends by completeness, and $\|F(t)(\eta-\psi_n)\|=\|\eta-\psi_n\|$ proves $F(t)\eta\to\Omega_\pm\eta$. Hence both limits are bounded linear isometries on the whole space. These are the concrete Cook consequences of the displayed hypotheses. [step 2.1, step 3.1, F1, F3, F4, algebra]

5.1 [Group and generator intertwining] For every real $s$ the operator identity $e^{-isH}F(t)e^{isH_0}=F(t-s)$ holds, so the strong limits at either sign give $e^{-isH}\Omega_\pm=\Omega_\pm e^{-isH_0}$. If $\psi\in D(H_0)$, this identity implies that the strong derivative at $s=0$ of $e^{-isH}\Omega_\pm\psi$ is $-i\Omega_\pm H_0\psi$. For an explicit domain-converse check, write this derivative as $-i\eta$ and test against any $v\in D(H)$: moving the unitary to the second slot gives $\langle\eta,v\rangle=\langle\Omega_\pm\psi,Hv\rangle$, or equivalently $\langle Hv,\Omega_\pm\psi\rangle=\langle v,\eta\rangle$. Thus $\Omega_\pm\psi\in D(H^*)=D(H)$ and $H\Omega_\pm\psi=\eta=\Omega_\pm H_0\psi$. This proves every assertion in (b), including the actual domain inclusion. [step 4.1, F1, F3, algebra]

6.1 [Zero atom and conclusion] The Fourier preimage of $\{0\}$ under $q$ is exactly the Lebesgue-null singleton $\{0\}$, so $\mu_\psi(\{0\})=\int_{\{0\}}|f|^2=0$ for every $\psi$. Also $q\ge0$ gives $\mu_\psi((-\infty,0))=0$. Combined with step 1.2, this proves absolute continuity of each entire scalar measure and $H_{\mathrm{ac}}(H_0)=L^2$, including all-vector density and direct zero exclusion, rather than inferring an atom from an arbitrary pointwise density value. Mixed scalar measures follow by polarization in the stated first-variable-linear convention if needed. Assertions (a) and (b) follow from the integrability, Cook-limit and intertwining steps above; no range equality or asymptotic completeness is used or asserted. [step 3.1, step 5.1, step 1.2, F1, F4] ∎
