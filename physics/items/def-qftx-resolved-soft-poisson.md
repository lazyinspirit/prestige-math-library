---
id: def-qftx-resolved-soft-poisson
kind: definition
domain: mathematics
library: mathematics
title: Independent soft-radiation resolution model
status: published
origin: pipeline
dependency_level: 0
deps:
  - def-countable-choice
  - def-qft-example-data
  - def-qft-fock-and-test-spaces
  - def-qft-photon-transverse-space
  - def-qft-qed-photon-energy-multiplier
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
justified_by:
  - lem-qftx-coherent-band-poisson
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-example-data: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  def-qft-photon-transverse-space: mathematical-premise
  def-qft-qed-photon-energy-multiplier: mathematical-premise
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
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, full lecture notes"
      url: https://arxiv.org/pdf/math-ph/0511030
      locator: "§§5.3–5.6, PDF pp. 19–21; symmetric Fock sectors and the tensor product law for Fock spaces."
    - title: "Physikalisch-Technische Bundesanstalt, Quantum Optics, Lecture 5"
      url: https://www.ptb.de/cms/fileadmin/internet/institute/fpm/Quantenoptik19/lecture_5.pdf
      locator: "PDF p. 3, subsection 'Photon statistics of coherent states': Eq. (12) gives the mean photon number; the following unnumbered display gives the normalized single-mode Poisson probabilities."
---

## Definition

Assume $\mathrm{AC}_\omega$: every sequence $(X_n)_{n\in\mathbb N}$ of
nonempty sets admits a function $s$ with $s(n)\in X_n$ for every $n$.
Use the following SI constants and meanings: $c>0$ is the speed of light in
vacuum, in m s$^{-1}$; $\hbar>0$ is the reduced Planck constant, in J s;
$e>0$ is the magnitude of the elementary charge, in C; and $\mu_0>0$ is the
vacuum permeability, in H m$^{-1}$, used here as a positive parameter without
assigning it a numerical value. Set
$$g=e\sqrt{\frac{\mu_0c}{\hbar}}>0,$$
which is dimensionless. These are the adopted QFT SI conventions.

Let $I$ be a finite, possibly empty, set of leg labels. For each $i\in I$,
choose an energy $E_i>0$ in J and a physical velocity
$\mathbf v_{i,\mathrm{phys}}\in\mathbb R^3$ in m s$^{-1}$ with
$|\mathbf v_{i,\mathrm{phys}}|<c$. Write
$v_i=\mathbf v_{i,\mathrm{phys}}/c\in\mathbb R^3$, so $v_i$ is
dimensionless and $|v_i|<1$. Also choose a dimensionless charge number
$Q_i\in\mathbb R$ (the assigned physical charge is $eQ_i$ in C) and an
orientation $\eta_i\in\{-1,1\}$, where $-1$ denotes an incoming leg and
$+1$ an outgoing leg. Assume charge balance
$\sum_{i\in I}\eta_iQ_i=0$. For four-vectors
$a=(a^0,\mathbf a),b=(b^0,\mathbf b)\in\mathbb R^4$, write
$h=\operatorname{diag}(1,-1,-1,-1)$ and
$h(a,b)=a^0b^0-\mathbf a\cdot\mathbf b$ for the algebraic contraction
with signature $(+,-,-,-)$ used in this model.

For $n\in S^2=\{x\in\mathbb R^3:|x|=1\}$ and angular frequency
$\nu>0$ in s$^{-1}$, with associated model photon energy $\hbar\nu$ in J,
put $p_i=E_i(1,v_i)$ and $q=\hbar\nu(1,n)$ in $\mathbb R^4$. On
$$\mathscr Q=\{\hbar\nu(1,n):\nu>0,\ n\in S^2\}\subset\mathbb R^4,$$
define the prescribed current $J:\mathscr Q\to\mathbb R^4$ and angular
coefficient $K:S^2\to\mathbb R^4$ by
$$J(q)=\sum_{i\in I}\eta_iQ_i\frac{p_i}{h(p_i,q)},\qquad K(n)=\sum_{i\in I}\eta_iQ_i\frac{(1,v_i)}{1-v_i\cdot n}.$$
Because $|v_i\cdot n|\le |v_i|<1$, every denominator
$1-v_i\cdot n$ is strictly positive.
The data make $h(p_i,q)=E_i\hbar\nu(1-v_i\cdot n)>0$ and
$J(q)=K(n)/(\hbar\nu)$. The balance condition gives
$h(J(q),q)=0$; this is the conservation convention for this prescribed
eikonal current in the model. Here “prescribed eikonal current” means exactly
the displayed rational map $J$ on these model photon energy four-vectors; no
scattering-amplitude factorization or approximation is asserted.

Let $A\subseteq S^2$ be a Borel angular acceptance region. The sphere
$S^2\subset\mathbb R^3$ is a compact embedded smooth hypersurface, and
$d\Omega$ denotes its Euclidean chart surface measure: for a finite regular
injective $C^1$ chart cover $X_j:V_j\to S^2$, where each $V_j$ is open in
$\mathbb R^2$, with $C^1$ coordinate
transitions and a subordinate ambient partition of unity $\chi_j$ whose supports are compactly
contained in the chart neighborhoods, its integral on a nonnegative Borel
function $F$ is
$$\int_{S^2}F\,d\Omega=\sum_j\int_{V_j}(\chi_jF)(X_j(y))\sqrt{\det(DX_j(y)^TDX_j(y))}\,dy.$$
This is the chart-independent induced surface integral. Write
$K(n)=(K^0(n),\mathbf K(n))$ and define
$K_\perp(n)=(I_3-nn^T)\mathbf K(n)$, where $I_3$ is the $3\times3$
identity matrix. Put
$$b_0(n)=\frac{gK_\perp(n)}{\sqrt{2(2\pi)^3}},\qquad b(n)=\mathbf1_A(n)b_0(n),\qquad C=\int_{S^2}|b(n)|^2\,d\Omega(n).$$
The earlier current theorem proves $b_0\in L^2(S^2,d\Omega;\mathbb R^3)$
for these finite balanced subluminal legs; since $A$ is Borel,
$b\in L^2$ and $0\le C\le\int_{S^2}|b_0|^2d\Omega<\infty$.
Thus $b$ and $C$ are dimensionless.

For the one-particle space, write
$$x\cdot y=\sum_{j=1}^3x_jy_j\quad(x,y\in\mathbb R^3),\qquad a\cdot b=\sum_{j=1}^3a_jb_j\quad(a,b\in\mathbb C^3),$$
where the second dot product is the complex-bilinear extension. The fiber
Hermitian pairing is $\overline a\cdot b=\sum_j\overline{a_j}b_j$, with
norm $|a|^2=\sum_j|a_j|^2$. Set
$$\mathcal H=L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^3),\qquad \langle u,v\rangle_2=\int_{\mathbb R^3}\overline{u(\mathbf k)}\cdot v(\mathbf k)\,d^3\mathbf k,$$
Here $d^3\mathbf k$ is Lebesgue measure, and this pairing is
second-variable-linear. For $\mathbf k\ne0$,
put $\widehat{\mathbf k}=\mathbf k/|\mathbf k|$
and $P_T(\mathbf k)=I_3-\widehat{\mathbf k}\widehat{\mathbf k}^{T}$, the
Euclidean orthogonal projection onto the fiber plane perpendicular to
$\mathbf k$; assign any value at $\mathbf k=0$. Its multiplier is an
orthogonal projection on $\mathcal H$, so its range is closed. The transverse
one-particle Hilbert space
is
$$\mathcal H_T=\operatorname{Ran}M_{P_T}=\{u\in\mathcal H:\mathbf k\cdot u(\mathbf k)=0\text{ for a.e. }\mathbf k\ne0\},$$
where $M_{P_T}$ is multiplication by $P_T$, and the real Euclidean dot
product is extended complex-bilinearly in the transverse condition. This is
the transverse one-particle space used in this model.

For $m\ge1$, use the iterated Hilbert tensor completion
$\mathcal H_T^{\widehat\otimes m}$, with product pairing on elementary
tensors. Here $S_m$ is the permutation group and
$U_\pi(u_1\otimes\cdots\otimes u_m)=
u_{\pi^{-1}(1)}\otimes\cdots\otimes u_{\pi^{-1}(m)}$. Set
$$P_{s,m}=\frac1{m!}\sum_{\pi\in S_m}U_\pi,\qquad \mathcal H_s^{(m)}=\operatorname{Ran}P_{s,m};$$
put $P_{s,0}=I_{\mathbb C}$ and $\mathcal H_s^{(0)}=\mathbb C$. The
symmetric bosonic Fock space is
$$\mathcal F_s(\mathcal H_T)=\left\{(\Psi_m)_{m\ge0}:\Psi_m\in\mathcal H_s^{(m)},\ \sum_{m\ge0}\|\Psi_m\|^2<\infty\right\},$$
with componentwise pairing and vacuum $1\in\mathbb C$ in sector zero.
For $f\in\mathcal H_T$, define the exponential-vector map
$\epsilon:\mathcal H_T\to\mathcal F_s(\mathcal H_T)$ by
$$\epsilon(f)=\bigoplus_{m=0}^{\infty}\frac{P_{s,m}(f^{\otimes m})}{\sqrt{m!}}.$$
Here $f^{\otimes0}=1$ in the vacuum sector.
Since $f^{\otimes m}$ is already symmetric,
$P_{s,m}(f^{\otimes m})=f^{\otimes m}$ for $m\ge1$; write this tensor as
$f^{\otimes_s m}$.

For fixed angular-frequency cutoffs $0<\varepsilon<\Delta<\Lambda$, let
$\nu(\mathbf k)=c|\mathbf k|$ in s$^{-1}$, with $\mathbf k$ in m$^{-1}$.
The one-particle coherent displacement is the transverse mode function
$$f_{\varepsilon,\Lambda}(\mathbf k)= \mathbf1_{\{\varepsilon<\nu(\mathbf k)<\Lambda\}}|\mathbf k|^{-3/2} {}\times b\!\left(\frac{\mathbf k}{|\mathbf k|}\right) \quad(\mathbf k\ne0), \qquad f_{\varepsilon,\Lambda}(0)=0.$$
The function $f_{\varepsilon,\Lambda}$ has units m$^{3/2}$ in
$\mathcal H_T$; the associated free one-photon energy is
$\hbar\nu(\mathbf k)=\hbar c|\mathbf k|$ in J. Define its normalized
coherent vector by
$$\Psi_{\varepsilon,\Lambda}=\exp\!\left(-\frac{\|f_{\varepsilon,\Lambda}\|^2}{2}\right)\epsilon(f_{\varepsilon,\Lambda}).$$
For a finite partition
$B_1,\ldots,B_r$ of $(\varepsilon,\Lambda)$ into disjoint Borel intervals,
let
$H_j=\{u\in\mathcal H_T:u(\mathbf k)=0\text{ a.e. unless }\nu(\mathbf k)\in B_j\}$.
Let $P_j$ be multiplication on $\mathcal H_T$ by
$\mathbf1_{\{\nu(\mathbf k)\in B_j\}}$. This bounded self-adjoint idempotent
preserves transversality because it is scalar-valued, so it is an orthogonal
projection. Its range is exactly $H_j$, making $H_j$ closed. For $j\ne k$,
disjointness gives $P_jP_k=0$, hence the ranges are orthogonal.
For a tuple $(m_1,\ldots,m_r)\in\mathbb N_0^r$, put $M=\sum_jm_j$.
Its occupation subspace is the closed span in sector $\mathcal H_s^{(M)}$
of the vectors
$$P_{s,M}\left(\bigotimes_{j=1}^r\bigotimes_{\ell=1}^{m_j}u_{j,\ell}\right),\qquad u_{j,\ell}\in H_j,$$
where the empty tensor for $M=0$ is the vacuum $1\in\mathbb C$. It has
exactly $m_j$ factors in $H_j$ and no factor outside $\bigoplus_jH_j$.
Define $N(B_j)$ to have value $m_j$ on this subspace.
The model assigns the tuple
probability equal to the squared norm of the projection of
$\Psi_{\varepsilon,\Lambda}$ onto it. Its resolution parameter
$\Delta$ divides $(\varepsilon,\Lambda)$ into the unresolved band
$(\varepsilon,\Delta)$ and the resolved band $[\Delta,\Lambda)$. The
threshold frequency is assigned to the resolved band; its exact assignment
does not change any $L^2$ vector or probability because a single frequency
has zero one-particle measure.
This is a finite-cutoff free coherent-state model; it does not posit a
detector response or an interacting QED scattering law.

## Definition references

[[def-countable-choice]]

[[def-qft-example-data]]

[[def-euclidean-inner-product]]

[[def-qft-fock-and-test-spaces]]

[[def-qft-photon-transverse-space]]

[[def-qft-qed-photon-energy-multiplier]]

[[def-surface-integral-on-a-compact-c-one-hypersurface]]

[[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]

[[thm-qft-example-soft-current-angular-coherent]]

[Dereziński, §§5.3–5.6](https://arxiv.org/pdf/math-ph/0511030)

[PTB Quantum Optics, Lecture 5](https://www.ptb.de/cms/fileadmin/internet/institute/fpm/Quantenoptik19/lecture_5.pdf)

## Remarks

The well-definedness of $C$, the transverse $L^2$ vector
$f_{\varepsilon,\Lambda}$, the normalized exponential vector, and the band
counting probabilities is established in
[[lem-qftx-coherent-band-poisson]]. The exact formulas are conditional on the
stated finite leg data and cutoffs. They introduce no empirical photon counts,
no virtual corrections, and no claim of full Bloch–Nordsieck or KLN
cancellation.
