---
id: def-qftx-scattering-approximant-contract
kind: definition
title: Massive scattering packets and Cook approximant contract
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-bochner-integrable-function
  - def-countable-choice
  - def-qft-involutive-algebra-state
  - def-qft-fock-and-test-spaces
  - def-qft-scalar-mass-shell
  - def-qftx-joint-spectrum-input
  - def-strongly-measurable-banach-valued-function
  - lem-bochner-integral-norm-inequality
  - lem-scalar-and-complex-measures-from-a-pvm
  - thm-bochner-integrability-criterion
  - thm-bounded-borel-pvm-integral
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-fourier-inversion-on-schwartz-space
dependency_roles:
  def-bochner-integrable-function: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qft-involutive-algebra-state: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  def-qft-scalar-mass-shell: mathematical-premise
  def-qftx-joint-spectrum-input: mathematical-premise
  def-strongly-measurable-banach-valued-function: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  lem-scalar-and-complex-measures-from-a-pvm: mathematical-premise
  thm-bochner-integrability-criterion: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Detlev Buchholz and Wojciech Dybalski, Scattering in relativistic quantum field theory: basic concepts, tools, and results"
      url: https://arxiv.org/pdf/math-ph/0509047
      locator: "Version 3, revised 2024-11-03; §2, PDF pp. 3–5: isolated massive one-particle shell, local interpolating operators, compact momentum packets, the Cook derivative estimate and its additional stability/locality inputs."
    - title: "Klaus Fredenhagen, Quantum Field Theory, lecture notes, Wintersemester 2009/10 and Sommersemester 2010"
      url: https://www.physik.uni-hamburg.de/th2/ag-fredenhagen/dokumente/qft09-10.pdf
      locator: "Chapter IV §3, PDF pp. 82–85: upper mass gap, almost-local generators, velocity support, the two-particle Haag–Ruelle approximant and its stated proof limitation."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Assume Countable Choice. Use the positive-energy joint spectral input: a
nonzero complex Hilbert space
$\mathcal H$, a strongly continuous translation representation
$U:\mathbb R^4\to\mathcal B(\mathcal H)$, a projection-valued measure $E$ on
$\mathbb R^4$ with $U(a)=\int e^{ip\cdot a}\,dE(p)$ and
$E(\mathbb R^4\setminus\overline V_+)=0$, and an invariant unit cyclic vacuum
$\Omega$ for a specified unital complex $*$-subalgebra
$\mathfrak A\subseteq\mathcal B(\mathcal H)$. By
the unital star-algebra definition listed below, a unital complex $*$-algebra has a
complex-bilinear associative product, a specified unit, and a conjugate-linear
involution reversing products, squaring to the identity, and fixing the unit;
$\mathfrak A$ inherits these operations and contains $I$. Cyclicity means
$\overline{\{B\Omega:B\in\mathfrak A\}}=\mathcal H$. The pairing is
$p\cdot a=p^0a^0-\mathbf p\cdot\mathbf a$.
Use the shell coordinates and signature of the scalar future mass shell
definition: for $m>0$ and $\mathbf k\in\mathbb R^3$,
$\omega_m(\mathbf k)=\sqrt{|\mathbf k|^2+m^2}$ and
$p_m(\mathbf k)=(\omega_m(\mathbf k),\mathbf k)$. Here $m$ is the positive
inverse-length mathematical shell parameter called $\mu$ in that supplier;
it is not identified with a measured rest mass. The coordinates have length
units, $\mathbf k$ and $\omega_m$ have inverse-length units, and
$\mathbf k/\omega_m(\mathbf k)$ is dimensionless.

$\mathcal M_m=\{(p^0,\mathbf p):(p^0)^2-|\mathbf p|^2=m^2,\ p^0>0\}$
is the positive mass shell; it is closed and hence Borel. Its equivalent
parameterization is $\mathcal M_m=\{p_m(\mathbf k):\mathbf k\in\mathbb R^3\}$.
It is an isolated massive shell input when $P_m:=E(\mathcal M_m)\ne0$ and some
$0<\delta<m$ satisfies
$$E\bigl(\{p\in\overline V_+:|\sqrt{(p^0)^2-|\mathbf p|^2}-m|<\delta\}\setminus\mathcal M_m\bigr)=0.$$
The corresponding one-particle space in this contract is the closed subspace
$\mathcal H_m=P_m\mathcal H$. This is an adopted spectral hypothesis and
subspace designation; the definition does not infer particle stability from a
formal two-point-function pole.

A translation-covariant local net is an assignment
$O\mapsto\mathfrak A(O)$ of unital $*$-subalgebras of
$\mathcal B(\mathcal H)$ to bounded open $O\subseteq\mathbb R^4$, with
$\mathfrak A(O)\subseteq\mathfrak A$, such that $O_1\subseteq O_2$ implies
$\mathfrak A(O_1)\subseteq\mathfrak A(O_2)$,
$U(a)\mathfrak A(O)U(a)^*=\mathfrak A(O+a)$, and
$A_1A_2=A_2A_1$ for every $A_i\in\mathfrak A(O_i)$ when the regions are
spacelike separated. Spacelike separation means
$(x^0-y^0)^2-|\mathbf x-\mathbf y|^2<0$ for every
$x\in O_1,y\in O_2$. An operator $A$ is local if it belongs to
$\mathfrak A(O)$ for some bounded open $O$. A bounded operator $A$ is
norm-almost-local if, for every integer $N\ge1$, there is a constant
$C_N<\infty$ and operators $A_R\in\mathfrak A(O_R)$ for all $R\ge1$, where
$O_R=\{x:|x^0|+|\mathbf x|<R\}$, such that
$\|A-A_R\|\le C_N(1+R)^{-N}$. The domain version of almost locality uses a
common dense translation-invariant domain $\mathscr D\subseteq\mathcal H$ with
$\Omega\in\mathscr D$: $A$ and each local approximant $A_R$ act on
$\mathscr D$, and for every $\xi\in\mathscr D$ and integer $N\ge1$ there is
$C_{N,\xi}<\infty$ such that
$\|(A-A_R)\xi\|\le C_{N,\xi}(1+R)^{-N}$ for all $R\ge1$. A local or
almost-local operator is an interpolator for $f$ if $A\Omega$ is defined and
the vector below is nonzero.

For fermionic fields, the corresponding operator net is a $\mathbb Z_2$-graded
field net: each local algebra splits as
$\mathfrak F(O)=\mathfrak F_0(O)\oplus\mathfrak F_1(O)\subseteq\mathcal B(\mathcal H)$
and has a grading
automorphism $\gamma$ with $\gamma(A)=(-1)^aA$ for homogeneous
$A\in\mathfrak F_a(O)$, $a\in\{0,1\}$. Graded locality means
$AB=(-1)^{ab}BA$ for homogeneous $A\in\mathfrak F_a(O_1)$ and
$B\in\mathfrak F_b(O_2)$ in spacelike separated regions. The graded net has
the same isotony and translation covariance conditions. The local or
almost-local interpolators used in that branch, their grading, and the
statistics assignment are construction inputs.

$\ell_0>0$ denotes the fixed length represented by one numerical unit of the
time parameter. A smooth compact momentum packet is a smooth compactly supported function
$f\in C_c^\infty(\mathbb R^3;\mathbb C)$; its support is the closure of
$\{\mathbf k:f(\mathbf k)\ne0\}$. Extend it to the bounded Borel function
$\widehat f(p^0,\mathbf p)=f(\mathbf p)$ on $\mathbb R^4$ and write
$\Phi_E(\widehat f)=\int\widehat f\,dE$ for its bounded PVM integral.
For a bounded interpolating operator $A$, define the one-particle packet
vector
$$\psi(A,f)=\Phi_E(\widehat f)P_mA\Omega\in\mathcal H_m.$$
The integral is a bounded operator by the bounded Borel PVM integral theorem;
it commutes with $P_m$ because both are functions of the same PVM. Its shell
support lies in the compact Borel set
$S_{m,f}=\{p_m(\mathbf k):\mathbf k\in\operatorname{supp}f\}$, so the
equivalent projection form is $E(S_{m,f})\Phi_E(\widehat f)A\Omega$.
The velocity support is
$V_m(f)=\{\mathbf k/\omega_m(\mathbf k):\mathbf k\in\operatorname{supp}f\}$.
Packets have disjoint velocity supports when these sets are pairwise
disjoint.

The associated scalar positive-energy packet solution, with fixed Fourier
normalization, is
$$u_{m,f}^\eta(t,\mathbf x)=(2\pi)^{-3}\int_{\mathbb R^3}f(\mathbf k)e^{i\mathbf k\cdot\mathbf x-i\eta\ell_0t\omega_m(\mathbf k)}\,d^3\mathbf k.$$
For each fixed $t$, this is smooth in $\mathbf x$ and rapidly decreasing
together with all spatial derivatives, meaning that for every
$\alpha=(\alpha_1,\alpha_2,\alpha_3)\in\mathbb N_0^3$ and integer $N\ge0$,
where $\partial_{\mathbf x}^\alpha:=\prod_{j=1}^3
\partial_{x_j}^{\alpha_j}$,
$\sup_{\mathbf x}(1+|\mathbf x|)^N|\partial_{\mathbf x}^{\alpha}
u_{m,f}^\eta(t,\mathbf x)|<\infty$. Indeed, the momentum integrand and all
its derivatives are smooth and compactly supported, so repeated integration
by parts in $\mathbf k$ gives these bounds. Let
$\alpha_a(A)=U(a)AU(a)^*$ for $a\in\mathbb R^4$. For bounded local or
almost-local $A$, define the candidate smeared operator by the strong operator
integral
$$A_t^\eta(f)=\mathrm{s}\!\!\int_{\mathbb R^3}u_{m,f}^\eta(t,\mathbf x)\,\alpha_{(\eta\ell_0t,\mathbf x)}(A)\,d^3\mathbf x.$$
The rapid-decay estimate with $N=4$ is integrable on $\mathbb R^3$, since in
spherical coordinates $\int_0^\infty r^2(1+r)^{-4}\,dr<\infty$. For $\xi\in\mathcal H$
put
$$g_\xi(\mathbf x):=u_{m,f}^\eta(t,\mathbf x) U(\eta\ell_0t,\mathbf x)A U(\eta\ell_0t,\mathbf x)^*\xi.$$
Strong continuity of $U$ and boundedness of $A$ make $g_\xi$ continuous, with
$$\|g_\xi(\mathbf x)\|\le |u_{m,f}^\eta(t,\mathbf x)|\,\|A\|\,\|\xi\|.$$
It is strongly measurable: on each $[-n,n)^3$, partition into finitely many
half-open cubes of side $1/n$, use the value of $g_\xi$ at each cube's lower
corner, and set the simple function to zero outside the box. These simple
functions converge pointwise to $g_\xi$. The displayed majorant is integrable;
the Bochner-integrability criterion therefore gives a Bochner integral for
each $g_\xi$. By the Bochner-integrable-function definition listed below, this integral is the
norm limit of integrals of integrable simple approximants. Define
$A_t^\eta(f)\xi:=\int g_\xi(\mathbf x)\,d^3\mathbf x$.
Linearity and the Bochner integral norm inequality give
$$\|A_t^\eta(f)\xi\|\le\|A\|\,\|\xi\|\,\|u_{m,f}^\eta(t,\cdot)\|_{L^1},$$
so this strong integral defines a bounded operator and
$$\|A_t^\eta(f)\|\le\|A\|\|u_{m,f}^\eta(t,\cdot)\|_{L^1}.$$

With the stated translation and Fourier conventions, its mass-shell component
on $\Omega$ is exactly $\psi(A,f)$. In fact, invariance of $\Omega$ gives
$\alpha_{(\eta\ell_0t,\mathbf x)}(A)\Omega
=U(\eta\ell_0t,\mathbf x)A\Omega$. For $\xi=A\Omega$ and any $y\in\mathcal H$,
the bounded linear functional $v\mapsto(v,y)$ passes through the Bochner
integral by its simple-function definition. The spectral representation of
$U$, the polarization formula
$E_{\xi,y}=\frac14\sum_{k=0}^3 i^k E_{\xi+i^ky}$, and Fubini's theorem yield
$$\bigl(A_t^\eta(f)\Omega,y\bigr) =\int_{\mathbb R^4}G(p)\,dE_{\xi,y}(p) =\bigl(\Phi_E(G)\xi,y\bigr),\qquad G(p):=\int_{\mathbb R^3}u_{m,f}^\eta(t,\mathbf x) e^{i\eta\ell_0tp^0-i\mathbf p\cdot\mathbf x}\,d^3\mathbf x.$$
For each $z=\xi+i^ky$, use the finite positive scalar measure $E_z$ from
the scalar and complex PVM-measures lemma listed below, which has total mass
$\|z\|^2$, and apply
the sigma-finite Fubini theorem listed below to Lebesgue
measure on $\mathbb R^3$ and the finite positive Borel measure $E_z$ on
$\mathbb R^4$. The product integrand
$F(\mathbf x,p):=u_{m,f}^\eta(t,\mathbf x)e^{i\eta\ell_0tp^0-i\mathbf p\cdot\mathbf x}$
is continuous and has absolute integral
$\|u_{m,f}^\eta(t,\cdot)\|_{L^1}\,\|z\|^2<\infty$.
Thus $G$ is bounded, and dominated convergence with majorant
$|u_{m,f}^\eta(t,\cdot)|$ makes it continuous, hence Borel. Fourier inversion in the convention
of the supplier listed under Definition references, after rescaling
$\mathbf k=2\pi\boldsymbol\xi$, gives
$$\int_{\mathbb R^3}u_{m,f}^\eta(t,\mathbf x)e^{-i\mathbf p\cdot\mathbf x}\,d^3\mathbf x=f(\mathbf p)e^{-i\eta\ell_0t\omega_m(\mathbf p)}.$$
Hence $G(p)=e^{i\eta\ell_0tp^0}f(\mathbf p)e^{-i\eta\ell_0t\omega_m(\mathbf p)}$;
on $\mathcal M_m$ this is $f(\mathbf p)=\widehat f(p)$. The PVM product
identity $E(M)\Phi_E(G)=\Phi_E(\mathbf1_MG)$ follows first for simple
functions and then by uniform approximation. Since
$\mathbf1_MG=\mathbf1_M\widehat f$, $M=\mathcal M_m$, and
$P_m=E(\mathcal M_m)$, the same identity gives
$$P_mA_t^\eta(f)\Omega=\Phi_E(\widehat f)P_mA\Omega.$$
Convergence of the full vector $A_t^\eta(f)\Omega$ to that component is a
separate construction obligation.
For a domain-valued variant, the corresponding integrals and all products
must instead be defined on the common invariant domain. Use the completed Hilbert tensor powers and their unitary
permutation action: $S_n$ is the permutation group of $\{1,\ldots,n\}$ and
$U_\pi(v_1\otimes\cdots\otimes v_n)
=v_{\pi^{-1}(1)}\otimes\cdots\otimes v_{\pi^{-1}(n)}$ on elementary tensors.
The sign $\operatorname{sgn}(\pi)$ is $+1$ for an even permutation and $-1$
for an odd permutation. The orthogonal symmetrizing and antisymmetrizing
projections are $P_{s,n}=n!^{-1}\sum_{\pi\in S_n}U_\pi$ and
$P_{a,n}=n!^{-1}\sum_{\pi\in S_n}\operatorname{sgn}(\pi)U_\pi$. For
$\sigma\in\{s,a\}$, the Fock space
$\mathcal F_\sigma(\mathcal H_m)$ is the square-summable direct sum of the
ranges of these projections for $n\ge1$, together with vacuum sector
$\mathbb C$ at $n=0$; use the componentwise second-variable-linear inner
product and vacuum
conventions of the previously defined QFT Fock spaces, with
$P_{\sigma,n}=P_{s,n}$ for $\sigma=s$ and $P_{\sigma,n}=P_{a,n}$ for
$\sigma=a$. The finite packet
domain $\mathcal D_\sigma$ is the linear span of the vacuum and the
$P_{\sigma,n}$-projections of elementary tensors built from
$\psi(A_j,f_j)$ with pairwise disjoint velocity supports. The selected value
of $\sigma$ and, for fermionic fields, any required graded locality are
construction inputs.

For such a finite packet family $(A_j,f_j)_{j=1}^n$, a candidate
Haag–Ruelle approximant is
$\Psi_t^\eta=A_{1,t}^\eta(f_1)\cdots A_{n,t}^\eta(f_n)\Omega$, where
$t\ge1$ is the dimensionless positive-time parameter, physical coordinate
time is $\eta\ell_0t$, and $\eta\in\{+1,-1\}$ labels outgoing ($+1$) or
incoming ($-1$) scattering. The operators
$A_{j,t}^\eta(f_j)$ act on a common dense domain $\mathscr D$ invariant under
translations and these operators, with $\Omega\in\mathscr D$; every displayed
product is required to be defined there. Bounded operator families are the
special case $\mathscr D=\mathcal H$.
The operator families are supplied by the chosen construction. The one-particle limit condition is
$A_{j,t}^\eta(f_j)\Omega\to\psi(A_j,f_j)$ in norm as $t\to\infty$.
On the zero-particle vacuum label $1\in\mathbb C$, set
$\Psi_t^\eta(1)=\Omega$ for every $t$.
For each $f\in\mathcal D_\sigma$, the construction supplies a linear map
$\Psi_t^\eta:\mathcal D_\sigma\to\mathcal H$ whose values on elementary
packet tensors are these operator products; the assignment must be
well-defined independently of a tensor presentation. The Cook condition is
that $t\mapsto\Psi_t^\eta(f)$ is norm-$C^1$ on
$[1,\infty)$ and, for constants $C_{\eta,f}\ge0$ and
$\epsilon_{\eta,f}>0$,
$$\left\|\frac{d}{dt}\Psi_t^\eta(f)\right\|\le C_{\eta,f}(1+t)^{-1-\epsilon_{\eta,f}}\qquad(t\ge1).$$
Norm-$C^1$ means that the norm derivative exists for each $t>1$, has the
corresponding one-sided derivative at $t=1$, and is norm-continuous on
$[1,\infty)$.
The parameter $t$ is the dimensionless numerical time in the fixed coordinate
unit; changing that unit changes $C_{\eta,f}$ but not integrability. A construction
must also establish any required convergence of approximant inner products to
the specified $\mathcal F_\sigma(\mathcal H_m)$ inner products. The joint
spectral input states cyclicity but not uniqueness of the invariant vacuum;
any vacuum uniqueness or clustering hypothesis needed for this convergence
must be stated or proved separately.

This is a contract for a proof, not an existence theorem. It does not derive
the Cook bound, the one-particle limits, or the Fock inner-product limits from
locality and shell isolation. An actual construction must also record uniform
bounds on the vector approximants; those bounds are distinct from bounds on
the operator factors $A_{j,t}^\eta(f_j)$.

## Definition references

[[def-countable-choice]]

[[def-qft-involutive-algebra-state]]

[[def-qftx-joint-spectrum-input]]

[[def-qft-scalar-mass-shell]]

[[def-qft-fock-and-test-spaces]]

[[thm-bounded-borel-pvm-integral]]

[[def-strongly-measurable-banach-valued-function]]

[[def-bochner-integrable-function]]

[[thm-bochner-integrability-criterion]]

[[thm-dominated-convergence]]

[[lem-bochner-integral-norm-inequality]]

[[lem-scalar-and-complex-measures-from-a-pvm]]

[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[[thm-fourier-inversion-on-schwartz-space]]

## Remarks

Charged quantum electrodynamics is outside this isolated massive charged-shell
contract: massless photons and infraparticle sectors can invalidate its shell
hypothesis. An infraparticle here means a charged excitation whose mass
distribution has no isolated mass-shell eigen-subspace because of arbitrarily
soft massless radiation. Lehmann–Symanzik–Zimmermann reduction (LSZ) is a
separate route from distributional asymptotic fields and pole residues; this
contract does not supply those fields, residues, or their domain arguments.
Haag's no-go theorem concerns an exact unitary interaction-picture
identification under its own hypotheses; it is a separate theorem obligation
and is not a conclusion about finite-regulator Dyson evolution here.
