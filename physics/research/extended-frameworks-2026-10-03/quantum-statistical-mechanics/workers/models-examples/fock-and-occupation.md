# Identical-particle Fock spaces and countable occupation traces

This is a mathematical construction for a specified finite or countable set of
one-particle modes. Choosing its symmetric or antisymmetric sector for a
physical species is a separate postulate; no nonrelativistic spin-statistics
theorem is claimed. Inner products are linear in the first argument. All
occupation labels are dimensionless.

<a id="F0"></a>
## F0. Symmetric and antisymmetric Fock spaces

Let $I$ be a specified finite or countably infinite set, with a fixed ordering
(a chosen finite order, or a fixed enumeration when $I$ is countably infinite),
and let $\mathfrak h=\ell^2(I)$ with its coordinate orthonormal basis
$(e_j)_{j\in I}$.
For $n\ge1$, use the Hilbert tensor product $\mathfrak h^{\otimes n}$ formed
from the algebraic tensor product and its product inner product, completed in
its induced norm. The countable product basis is
$(e_{j_1}\otimes\cdots\otimes e_{j_n})_{(j_1,\ldots,j_n)\in I^n}$; its density
follows from the exact Hilbert tensor construction in NRQM M1. Put
$\mathfrak h^{\otimes0}=\mathbb C$.

For $\pi\in S_n$ define
$$U_\pi(e_{j_1}\otimes\cdots\otimes e_{j_n})
=e_{j_{\pi^{-1}(1)}}\otimes\cdots\otimes e_{j_{\pi^{-1}(n)}}.$$
This permutes an orthonormal product basis, so it extends uniquely to a unitary
operator; $U_\pi U_\sigma=U_{\pi\sigma}$ follows on that dense basis and hence
on the completion. Define
$$P_+^{(n)}=\frac1{n!}\sum_{\pi\in S_n}U_\pi,
\qquad P_-^{(n)}=\frac1{n!}\sum_{\pi\in S_n}\operatorname{sgn}(\pi)U_\pi.$$
For $n=0$ both maps are the identity on $\mathbb C$. In the finite sums,
reindexing $(\pi,\sigma)$ by their product gives $(P_\pm^{(n)})^2=P_\pm^{(n)}$;
replacing each $\pi$ by $\pi^{-1}$ gives $(P_\pm^{(n)})^*=P_\pm^{(n)}$.
Thus they are orthogonal projections. Their ranges are exactly the vectors
satisfying $U_\pi\psi=\psi$ for all $\pi$ (the symmetric sector) and
$U_\pi\psi=\operatorname{sgn}(\pi)\psi$ for all $\pi$ (the antisymmetric
sector), as follows by applying each average and by multiplying the average
by a fixed group element.

Define
$$\mathcal F_\pm(\mathfrak h)=\bigoplus_{n=0}^{\infty}
P_\pm^{(n)}\mathfrak h^{\otimes n},$$
with squared norm $\sum_n\|\psi_n\|^2$. This Hilbert direct sum is complete:
coordinate limits of a Cauchy sequence exist in each closed sector, and the
uniform square-summable tail bound gives convergence in the direct-sum norm.
Finite-particle vectors are dense by truncating that same tail. These are the
bosonic/symmetric and fermionic/antisymmetric Fock spaces of the chosen mode
space. This definition is mathematical. A physical identification with
identical bosons or fermions, their species, and the model's particle sectors
must be adopted separately.

<a id="F1"></a>
## F1. Occupation bases and the CCR/CAR operators

Let $\Omega_B$ be the set of finitely supported functions
$m:I\to\mathbb N_0$ and $\Omega_F$ the set of finitely supported functions
$m:I\to\{0,1\}$. For $m\in\Omega_B$ write
$|m|=\sum_jm_j$ and, for a list containing $m_j$ copies of each $j$, let $x_m$
be the corresponding ordered elementary tensor in
$\mathfrak h^{\otimes |m|}$. Put
$$|m\rangle_B=\sqrt{\frac{|m|!}{\prod_jm_j!}}\,P_+^{(|m|)}x_m.$$
The product in the denominator is finite because $m$ has finite support.
For $m\in\Omega_F$, list its occupied modes increasingly in the fixed
enumeration of $I$ and let $x_m$ be their elementary tensor; put
$$|m\rangle_F=\sqrt{|m|!}\,P_-^{(|m|)}x_m.$$

These are orthonormal bases of the Fock sectors. Indeed, in the bosonic case
the product-basis expansion of $P_+x_m$ contains each distinct word with
multiplicities $m$ exactly $\prod_jm_j!$ times, so
$$P_+x_m=\frac{\prod_jm_j!}{|m|!}\sum_{w\in\mathcal W(m)}|w\rangle,
\qquad |\mathcal W(m)|=\frac{|m|!}{\prod_jm_j!}.$$
The normalized orbit sums for different $m$ have disjoint word supports.
Every symmetric vector is in the range of $P_+$, and the images under $P_+$
of the product basis span a dense subspace of that range; hence these orbit
sums are complete. In the fermionic case repeated labels cancel in pairs in
$P_-x$, while distinct-label permutations are distinct product basis vectors
with coefficients $\pm1/|m|!$. The factor $\sqrt{|m|!}$ therefore normalizes
the alternating sum. Distinct occupied subsets have disjoint supports, and the
images of the product basis under $P_-$ span a dense subspace of its range.
This gives unitary identifications
$$\mathcal F_+(\mathfrak h)\cong\ell^2(\Omega_B),\qquad
\mathcal F_-(\mathfrak h)\cong\ell^2(\Omega_F).$$
Both configuration sets are countable: each is the countable union over finite
mode supports of countable finite-coordinate label sets.

On the finite-support span of the bosonic basis define
$$a_j|m\rangle_B=\sqrt{m_j}|m-\mathbf1_j\rangle_B,\qquad
a_j^*|m\rangle_B=\sqrt{m_j+1}|m+\mathbf1_j\rangle_B,$$
where the annihilation term is zero when $m_j=0$. Their maximal closed
extensions have domains
$$D(a_j)=\left\{c:\sum_{m\in\Omega_B}m_j|c_m|^2<\infty\right\},\quad
D(a_j^*)=\left\{c:\sum_{m\in\Omega_B}(m_j+1)|c_m|^2<\infty\right\}.$$
To see the domains, the squared output norms are the displayed weighted sums
after shifting the occupation index. Testing the adjoint identity against each
occupation basis vector forces exactly the reverse shift and this
square-summability condition; the finite-support span is a graph core by
truncation to finite subsets with finite weighted tail. Thus the symbols
$a_j^*$ are the actual Hilbert-space adjoints of $a_j$, not only formal
transposes. On the common finite-support core, direct action on $|m\rangle_B$
gives
$$[a_i,a_j^*]=\delta_{ij}I,\qquad [a_i,a_j]=[a_i^*,a_j^*]=0.$$
These are the canonical commutation relations (CCR) on that core. No claim is
made that products or commutators of these unbounded operators are defined on
all of Fock space.

On the fermionic basis put
$$a_j|m\rangle_F=(-1)^{\sum_{i<j}m_i}m_j|m-\mathbf1_j\rangle_F,
\qquad a_j^*|m\rangle_F=(-1)^{\sum_{i<j}m_i}(1-m_j)|m+\mathbf1_j\rangle_F.$$
These shifts have norm at most one, so they extend boundedly to all of
$\mathcal F_-(\mathfrak h)$. If $i\ne j$, applying the two shifts in either
order changes the number of occupied modes preceding the later index by one
exactly when the earlier mode is toggled; the resulting signs are opposite.
For $i=j$, the two compositions are respectively multiplication by $1-m_j$
and by $m_j$. Hence on each basis vector, and by continuity on the whole
fermionic Fock space,
$$\{a_i,a_j^*\}=\delta_{ij}I,\qquad
\{a_i,a_j\}=\{a_i^*,a_j^*\}=0.$$
These are the canonical anticommutation relations (CAR). They imply
$a_j^*a_j|m\rangle_F=m_j|m\rangle_F$, so each fermionic mode is occupied by
at most one particle.

<a id="F2"></a>
## F2. Diagonal Hamiltonians and the exact occupation trace

The occupation-basis realizations above identify the finite/countable-mode
space $\ell^2(\Omega)$ in the original model construction with the appropriate
bosonic or fermionic Fock space, by the physical statistics choice. In either
case, for real mode energies $\epsilon_j$ the free energy and total-number
operators are diagonal multiplication by
$$E(m)=\sum_j\epsilon_jm_j,\qquad N(m)=\sum_jm_j,$$
with their own exact dense domains
$$D(H)=\left\{c:\sum_mE(m)^2|c_m|^2<\infty\right\},\qquad
D(N)=\left\{c:\sum_m|m|^2|c_m|^2<\infty\right\}.$$
Finite-support sequences are dense. For a real diagonal multiplier $D_\lambda$
on a specified countable orthonormal basis, testing the adjoint identity on
each basis vector forces coefficients $\lambda_mc_m$; the adjoint domain is
therefore exactly $\sum_m\lambda_m^2|c_m|^2<\infty$. This proves both
self-adjointness statements. The grand multiplier $K_\mu=H-\mu N$ has its
own domain $D(K_\mu)=\{c:\sum_m|E(m)-\mu|m||^2|c_m|^2<\infty\}$; it is
self-adjoint by the same coefficient test. An equality such as
$D(K_\mu)=D(H)\cap D(N)$ is not presumed. Each energy $E(m)$ is a finite sum
because $m$ has finite support.

For $\beta>0$ and real chemical potential $\mu$, put
$$q_j=\exp[-\beta(\epsilon_j-\mu)].$$
In the bosonic case require $0<q_j<1$, $\sup_jq_j\le q_*<1$, and
$\sum_jq_j<\infty$. In the fermionic case require $\sum_jq_j<\infty$ and that
only finitely many $j$ have $\epsilon_j-\mu<0$. These are sufficient actual
trace hypotheses, not consequences of a lower energy bound. Summing the
positive diagonal trace weights first over configurations supported in a finite
mode set $I_M$ gives
$$\Xi_{B,M}=\prod_{j\in I_M}(1-q_j)^{-1},\qquad
\Xi_{F,M}=\prod_{j\in I_M}(1+q_j).$$
As $I_M$ increases through the enumeration, these configuration sets increase
to $\Omega$; monotone convergence identifies the full trace with the limit of
these finite products. For bosons,
$$-\log(1-q_j)=\int_0^{q_j}\frac{du}{1-u}
\le\frac{q_j}{1-q_*},$$
and for fermions $\log(1+q_j)\le q_j$. Thus both products converge to finite
positive limits under the stated hypotheses. The diagonal operator
$e^{-\beta(H-\mu N)}$ has summable nonnegative eigenvalues, so it is trace
class and $\rho=\Xi^{-1}e^{-\beta(H-\mu N)}$ is a normal density. For each
mode, direct factorization of the positive trace sums gives independent
geometric boson occupations with mean $q_j/(1-q_j)$ and variance
$q_j/(1-q_j)^2$, and Bernoulli fermion occupations with mean $q_j/(1+q_j)$
and variance $q_j/(1+q_j)^2$. Independence is a property of this diagonal
grand preparation only. For a finite mode set $J$, introduce a formal variable
$z$ and sum by total occupation:
$$\prod_{j\in J}(1-zq_j)^{-1}
 =\sum_{N\ge0}Z_{B,N}(J)z^N,\qquad
 Z_{B,N}(J)=\sum_{\substack{m\in\Omega_B(J)\\|m|=N}}\prod_{j\in J}q_j^{m_j},$$
$$\prod_{j\in J}(1+zq_j)
 =\sum_{N=0}^{|J|}Z_{F,N}(J)z^N,\qquad
 Z_{F,N}(J)=\sum_{\substack{m\in\Omega_F(J)\\|m|=N}}\prod_{j\in J}q_j^{m_j}.$$
These identities follow by multiplying the geometric series (bosons) or the
two-term polynomials (fermions) and collecting the coefficient of $z^N$;
each summand is exactly the diagonal Boltzmann weight in that number sector.
Whenever $Z_{\pm,N}(J)>0$, division by this coefficient normalizes the
canonical number-$N$ preparation. For a countable mode set the same coefficient
is the increasing limit of the finite-mode sums, by monotone convergence of
nonnegative terms; it is finite under the trace hypotheses already imposed,
and the canonical preparation exists only when this coefficient is nonzero.
Conditioning the grand configuration law on $|m|=N$ inserts the constraint
$\mathbf1_{\{|m|=N\}}$, which couples occupations and so does not yield the
independent geometric/Bernoulli law derived above (except in degenerate cases).
The finite-mode generating identities do not by themselves justify continuum
integrals, thermodynamic limits, or interchange of limits.

The implications are exactly the countable diagonal model above. Replacing
the sums by continuum momentum integrals, removing a regulator, claiming a
global infinite-volume density matrix, or asserting thermalization requires
separate hypotheses and arguments. The Fock construction itself does not
choose the Bose/Fermi statistics of any measured species.
