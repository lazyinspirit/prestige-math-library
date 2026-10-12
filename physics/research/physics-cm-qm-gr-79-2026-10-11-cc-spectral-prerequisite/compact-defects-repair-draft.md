---
id: thm-nrqm-controlled-dynamics-compact-scattering-defects
aliases: [nrqm-controlled-dynamics-compact-scattering-defects]
kind: theorem
domain: mathematics
title: "Compact scattering defects and the zero-energy obstruction"
status: draft
origin: pipeline
dependency_level: 9
deps: [thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation, thm-nrqm-controlled-dynamics-cook-domain-criterion, lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact, def-nrqm-coulomb-ltwo-kernel-operators, thm-plancherel, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-dominated-convergence, thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn, def-projection-valued-measure, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice, thm-existence-of-the-lebesgue-stieltjes-measure, thm-orthogonal-decomposition-by-a-closed-subspace, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel]
dependency_roles:
  thm-existence-of-the-lebesgue-stieltjes-measure: mathematical-premise
  thm-orthogonal-decomposition-by-a-closed-subspace: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel: mathematical-premise
  thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation: mathematical-premise
  thm-nrqm-controlled-dynamics-cook-domain-criterion: mathematical-premise
  lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact: mathematical-premise
  def-nrqm-coulomb-ltwo-kernel-operators: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, retrieved edition, Lemma 12.10 printed pp.254–255: compact defects for smooth positive-energy cutoffs; the continuous extension and explicit zero-energy obstruction are proved locally"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let
$V\in L^\infty(\mathbb R^3;\mathbb R)$ have support in a bounded ball,
$\mathcal H=L^2(\mathbb R^3;\mathbb C)$, $H_0=-\Delta$ and
$H=H_0+M_V$ on $H^2(\mathbb R^3)$. Write $R_A(z)=(A-z)^{-1}$.
Use the ordinary wave convention

$$\Omega_\pm=\operatorname{s-lim}_{t\to\pm\infty}e^{itH}e^{-itH_0},$$

and the position dilation convention

$$U(s)\psi(x)=e^{-3s/2}\psi(e^{-s}x)=e^{-isD}\psi(x),\qquad P_\pm=\mathbf1_{(0,\infty)}(\pm D).$$

The wave operators exist on all of $\mathcal H$ by the Cook construction;
the dilation operator and projections are those of
[[thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation]]. Then:

**(a)** $M_VR_{H_0}(i)$ is compact.

**(b)** For every $f\in C_c(\mathbb R;\mathbb C)$ with $f(0)=0$, both
$C_\pm=(\Omega_\pm-I)f(H_0)P_\pm$ are compact. This includes the full
continuous cutoff class vanishing at zero, not only smooth positive cutoffs.

**(c)** For every $f\in C_0(\mathbb R;\mathbb C)$, $f(H)-f(H_0)$ is compact,
and $\sigma_{\mathrm{ess}}(H)=[0,\infty)$. Here essential spectrum means
the real $\lambda$ for which every spectral neighborhood has infinite rank.

**Threshold obstruction.** The hypothesis $f(0)=0$ cannot be omitted in a
uniform theorem over this potential class. For

$$V(x)=-\frac{\pi^2}{4}\mathbf1_{\{|x|<1\}},\qquad f(E)=\max(1-|E|,0),$$

the outgoing defect $C_+$ is not compact. In fact, for this potential it is
not compact for any $f\in C_c(\mathbb R)$ with $f(0)\ne0$.
This obstruction is established by an explicit weakly-null radial dilation
sequence below; no nonresonance or completeness assumption is imposed.

## Facts & Assumptions

**Given:** Countable Choice, the generic real bounded compactly supported
potential $V$, the operators and conventions above. Inner products are linear
in the first variable. All spectral calculus below is on the concrete
separable $L^2$ spaces, with their fixed countable dense families of rational
complex box-step functions; the construction used is given in step 2.1. The exact Fourier Sobolev domain, scalar Stieltjes extension and closed-subspace projection suppliers are [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], [[thm-existence-of-the-lebesgue-stieltjes-measure]] and [[thm-orthogonal-decomposition-by-a-closed-subspace]]; the latter two explicitly assume only Countable Choice.

[F1] The momentum Plancherel convention is $\mathcal F_p\psi(p)=(2\pi)^{-3/2}\int e^{-ip\cdot x}\psi(x)\,dx$; it conjugates $H_0$ to multiplication by $|p|^2$. Cauchy–Schwarz and Tonelli bound an $L^2$-kernel operator by its kernel norm. Rational rectangular kernel approximations give finite-rank approximants on $\mathbb R^3\times\mathbb R^3$ ([[thm-plancherel]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]], [[lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact]], [[def-nrqm-coulomb-ltwo-kernel-operators]]).

[F2] For $g\in C_c^\infty((0,\infty))$ supported in $(a^2,b^2)$, $0<a<b$, the momentum-log propagation argument gives $\|\mathbf1_{|x|<2at}e^{-itH_0}g(H_0)P_+\|\le C_Nt(1+t)^{-N}$ for every $N$ and $t\ge1$, with its incoming time reversal ([[thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation]]). Cook's differentiation gives the vector-valued Duhamel formula on the Hamiltonian domain ([[thm-nrqm-controlled-dynamics-cook-domain-criterion]]); the explicit free Gaussian kernel gives its Schwartz-vector dispersive estimate ([[thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel]]).

[F3] On the stated scalar measures, dominated convergence passes bounded multipliers to strong limits ([[thm-dominated-convergence]]). Closed finite-dimensional balls are compact; hence bounded finite-rank operators are compact. Composing their approximants with bounded operators preserves finite rank. A norm limit of operators with finite-rank approximants again has finite-rank approximants; finite covers of the unit-ball image show it is compact. These elementary metric facts use finite/countable approximation only and no Hilbert–Schmidt spectral or AC/DC Fredholm theorem.

## Proof

**Proof technique:** explicit free resolvent kernels, norm-integrable positive-energy Duhamel, uniform cutoff approximation and a separable Cayley calculus; an explicit radial square well proves the threshold obstruction.

1.1 The real multiplier $|p|^2$ is self-adjoint on its maximal multiplication domain: truncation to $|p|\le n$ proves density, and testing the adjoint identity on those sets identifies the adjoint vector with $|p|^2$ times the original vector. Plancherel conjugation therefore makes $H_0$ self-adjoint on $H^2$. For $\mu>\|V\|_\infty$, $R_0(\pm i\mu)=\mathcal F_p^*M_{(|p|^2\mp i\mu)^{-1}}\mathcal F_p$ has norm at most $1/\mu$. The factorization $H-z=(I+VR_0(z))(H_0-z)$ at $z=\pm i\mu$ has a norm-convergent Neumann inverse, so both $H\pm i\mu$ are onto. The symmetric densely defined $H$ is self-adjoint: if $y\in D(H^*)$, solve $(H-i\mu)x=(H^*-i\mu)y$; then $y-x\in\ker(H^*-i\mu)=\operatorname{ran}(H+i\mu)^\perp=\{0\}$, giving equality of adjoint domains. Its quadratic form is bounded below by $-\|V\|_\infty$. Thus no general Kato–Rellich theorem is required. [given, F1, algebra]

1.2 For each nonreal $z$, $m_z(p)=(|p|^2-z)^{-1}$ belongs to $L^2(\mathbb R^3)$: its denominator is bounded away from zero on bounded $p$ sets, and its squared magnitude is $O(|p|^{-4})$ at infinity. Put $g_z=(2\pi)^{-3/2}\mathcal F_p^*m_z$. The free resolvent has convolution kernel $g_z(x-y)$, since this normalization makes convolution have Fourier multiplier $m_z$. The kernel $k_z(x,y)=V(x)g_z(x-y)$ satisfies $\|k_z\|_2^2=\|V\|_2^2\|g_z\|_2^2<\infty$ by Tonelli. For a finite rectangular kernel $k_m=\sum_j a_j\mathbf1_{A_j}(x)\mathbf1_{B_j}(y)$, its action is $T_{k_m}u=\sum_j a_j\mathbf1_{A_j}\int_{B_j}u$, so its range is finite dimensional. Rational box density provides $k_m\to k_z$ in product $L^2$, and Cauchy–Schwarz gives $\|T_{k_m}-T_{k_z}\|\le\|k_m-k_z\|_2\to0$. Thus $VR_0(z)$ has actual finite-rank norm approximants and is compact, proving (a) at $z=i$. [F1, F3, algebra]

2.1 Here is the separable spectral/group construction used in this proof. For a self-adjoint $A$ on a space with the fixed dense sequence $(d_j)$, symmetry and closedness give $\|(A-z)x\|\ge|\operatorname{Im}z|\|x\|$, and $\operatorname{ran}(A-z)^\perp=\ker(A-\overline z)=0$; hence its nonreal resolvent exists with the usual bound. Its Cayley unitary is $Z=(A-i)(A+i)^{-1}$. For a vector $x$, the nonnegative densities $q_N(\theta)=\|\sum_{j=0}^Ne^{-ij\theta}Z^jx\|^2/(2\pi(N+1))$ have mass $\|x\|^2$ and moments $(1-|n|/(N+1))\langle Z^nx,x\rangle$. Their cumulative functions admit a canonically selected subsequence converging at every rational coordinate: repeatedly bisect a bounded rational interval, retain its first closed half containing infinitely many terms and select least eligible increasing indices; diagonalize this specified procedure over the fixed rational enumeration. The right-continuous envelope of the rational limits defines the scalar Lebesgue–Stieltjes circle measure under CC. At its continuity points rational squeezing gives convergence of cumulative functions; uniform-continuity step approximations give convergence of continuous integrals and thus the exact integer moments. The Fejér kernel $N^{-1}|\sum_{j=0}^{N-1}e^{ij\theta}|^2$, normalized to mass one, approximates continuous circle functions uniformly: split the integral into $|\theta|<\delta$, controlled by uniform continuity, and its complement, where the kernel is bounded by $1/(N\sin^2(\delta/2))$. For an open circle set, the canonical compact sets at distance at least $1/n$ from its complement exhaust it; for a closed set, its distance-$1/n$ neighborhoods decrease to it. Finite measure gives the corresponding inner/outer limits, and the class of sets with both approximations is closed under complements and countable unions, using CC for the countable errors; hence the finite Borel measure is regular. Fejér moment uniqueness gives equal continuous integrals; canonical distance cutoffs then recover closed-set measures, and regularity gives equality on Borel sets. The identity $\|p(Z)x\|^2=\int|p|^2d\mu_x$ for Laurent polynomials gives the cyclic multiplication representation, whose range is the cyclic closed space by regular simple approximation and Fejér density. At stage $j$ project $d_j$ off the previous finite orthogonal sum of cyclic spaces and take the cyclic space generated by that residual, allowing zero summands. Each space reduces $Z$; $d_j$ belongs to the resulting sum, so the countable orthogonal sum exhausts the Hilbert space. Closed-subspace projections use CC minimizing sequences, not a maximal-family argument. Define the PVM by indicator multiplication on this countable sum; scalar dominated convergence proves strong countable additivity. Since $\ker(I-Z)=0$ and $\operatorname{ran}(I-Z)=D(A)$, transport by $\lambda=i(1+z)/(1-z)$ identifies $A$ with multiplication by $\lambda$ on exactly $\{h:\lambda h\in L^2\}$. This gives bounded Borel calculus with $\|f(A)\|\le\|f\|_\infty$ and $e^{itA}$ by multiplication. Dominated convergence gives strong continuity and derivative $iAh$ on $D(A)$; conversely Fatou on $t=1/n$ makes existence of that derivative imply $\lambda h\in L^2$. This constructs precisely the calculus and dynamics needed here on the two concrete spaces, without a nonseparable spectral/Gelfand or arbitrary-choice theorem. [step 1.1, F1, F3, construct]

3.1 First let $g\in C_c^\infty((0,\infty))$ have support in $(a^2,b^2)$. The Duhamel integrand $F(t)=e^{itH}Ve^{-itH_0}g(H_0)P_+$ factors as $e^{itH}K B(t)$, where $K=VR_0(i)$ and $B(t)=(H_0-i)e^{-itH_0}g(H_0)P_+$. The latter is bounded and norm-continuous, because the scalar multiplier $(E-i)e^{-itE}g(E)$ has bounded compact $E$ support and its difference at $t,s$ is bounded by a constant times $|t-s|$. The map $t\mapsto e^{itH}K$ is norm-continuous: approximate $K$ by finite-rank operators; for each finite-rank summand $u\mapsto\langle u,v\rangle w$, strong group continuity gives norm continuity of $u\mapsto\langle u,v\rangle e^{itH}w$, and the approximation error is unchanged by unitarity. Consequently $F(t)$ is norm-continuous and compact for every $t$. If $\operatorname{supp}V\subseteq B_R$, [F2] gives, for $t\ge\max(1,R/(2a))$, $\|F(t)\|\le\|V\|_\infty C_Nt(1+t)^{-N}$; choose $N=3$. On the finite preceding interval its norm is bounded by $\|V\|_\infty\|g\|_\infty$. Therefore $F$ is norm-integrable. [step 2.1, step 1.2, F2, F3, algebra]

3.2 The resolvent identity gives $R_H(z)-R_0(z)=-R_H(z)VR_0(z)$, which has finite-rank norm approximants by step 1.2. Set $Z_A=(A-i)(A+i)^{-1}=I-2iR_A(-i)$ for $A=H,H_0$. Then $Z_H-Z_0$ is compact, as is its adjoint; telescoping products show the same for the difference of every Laurent polynomial in these unitaries. For $f\in C_0(\mathbb R)$, the circle function $F(z)=f(i(1+z)/(1-z))$ off $z=1$, with $F(1)=0$, is continuous. Its Fejér polynomials $p_n$ converge uniformly by the explicit kernel estimate in step 2.1. The Laurent polynomials $q_n=p_n-p_n(1)$ still converge uniformly to $F$ and vanish at $1$. Hence $q_n(Z_A)\to f(A)$ in norm by that step's multiplication calculus, and $f(H)-f(H_0)$ is a norm limit of the compact polynomial differences. This proves the functional-calculus assertion of (c) for all $C_0$, including nonzero values at zero, without Stone–Weierstrass or general Gelfand theory. [step 2.1, step 1.2, F3, algebra]

4.1 The range of $g(H_0)P_+$ lies in $D(H_0)=D(H)$ because $H_0g(H_0)$ is bounded. Differentiating $e^{itH}e^{-itH_0}g(H_0)P_+$ on each vector gives $iF(t)$, so Cook's limit yields $(\Omega_+-I)g(H_0)P_+=i\int_0^\infty F(t)\,dt$. Step 3.1 makes the integral converge in operator norm. On each finite time interval its Riemann sums are compact, and the integrable tail tends to zero in norm; [F3] therefore makes the defect compact. For the incoming sign the formula is $-i\int_{-\infty}^0e^{itH}Ve^{-itH_0}g(H_0)P_-\,dt$; the incoming bound in [F2] and the same norm-continuity argument prove compactness. Existence and the isometry property of the wave operators themselves follow independently by Cook on Schwartz vectors: for $|t|\ge1$, the explicit free Gaussian kernel gives $\|Ve^{-itH_0}\psi\|_2\le\|V\|_2(4\pi|t|)^{-3/2}\|\psi\|_1$, while for $|t|\le1$ it is bounded by $\|V\|_\infty\|\psi\|_2$. Schwartz density and unitary uniform boundedness extend both strong limits to all of $L^2$, with norm one. Thus this compactness proof assumes no completeness theorem. [step 2.1, step 3.1, F2, F3, algebra]

4.2 We prove the needed essential-spectrum comparison directly under CC. If every spectral neighborhood of $\lambda$ for a self-adjoint $A$ has infinite rank, recursively project a fixed dense sequence onto $E_A((\lambda-1/n,\lambda+1/n))\mathcal H$ intersected with the orthogonal complement of the preceding finite family, select its least nonzero member and normalize. This constructs an orthonormal sequence $u_n$ with $\|(A-\lambda)u_n\|\le1/n$; orthonormality makes it weakly null by Bessel's inequality. Conversely, a weakly-null unit sequence with $(A-\lambda)u_n\to0$ excludes a finite-rank spectral $\varepsilon$-neighborhood: its projection tends to zero, while its complementary component has norm at most $\|(A-\lambda)u_n\|/\varepsilon\to0$, a contradiction. Suppose $K=R_B(z)-R_A(z)$ is compact and use such a sequence for $A$. Put $v_n=R_B(z)(A-z)u_n=u_n+K(A-z)u_n$. Since $(A-z)u_n=(\lambda-z)u_n+o(1)$ is bounded and weakly null, $v_n-u_n\to0$. Also $(B-\lambda)v_n=(A-\lambda)u_n+(z-\lambda)(v_n-u_n)\to0$. Normalizing $v_n$ transfers the criterion to $B$; reversing roles transfers it back. The free momentum spectral projections have infinite rank near each $\lambda\ge0$, witnessed by normalized indicators of a countable sequence of disjoint rational subballs in the corresponding momentum shell, and vanish in a sufficiently small neighborhood of each $\lambda<0$. Therefore $\sigma_{\mathrm{ess}}(H_0)=[0,\infty)$ and the compact resolvent difference in step 3.2 gives $\sigma_{\mathrm{ess}}(H)=[0,\infty)$. This proves the rest of (c) without an abstract Weyl/Fredholm supplier. [step 2.1, step 3.2, F1, F3, construct]

5.1 If $f\in C_c(\mathbb R)$ and $f(0)=0$, its restriction to $[0,\infty)$ is uniformly approximated by $g_n\in C_c^\infty((0,\infty))$. Explicitly, multiply by a fixed smooth cutoff removing $[0,1/n]$ and equal to one beyond $2/n$; the error tends uniformly to zero by continuity at zero. Extend the resulting positive-half-line function by zero to negative energies and convolve with a fixed compact smooth approximate identity of width less than $1/(2n)$, taking a smaller width if required by its uniform modulus of continuity. This keeps support strictly positive and gives uniform approximation; only countably many choices are needed. Free multiplier calculus and $\|\Omega_\pm\|=1$ give $\|(\Omega_\pm-I)[f(H_0)-g_n(H_0)]P_\pm\|\le2\sup_{E\ge0}|f(E)-g_n(E)|\to0$. Thus (b) is the norm-limit consequence of step 4.1, with the whole stated continuous cutoff class. [step 2.1, step 4.1, F3, algebra]

5.2 For the threshold obstruction take $V=-\alpha^2\mathbf1_{|x|<1}$ with $\alpha=\pi/2$; its support is contained in $B_2$. The unitary radial embedding is $Ju(x)=u(|x|)/(\sqrt{4\pi}|x|)$. Radial reduction gives $h_0=-d^2/dr^2$ and $h=h_0-\alpha^2\mathbf1_{(0,1)}$ on $H^2(0,\infty)\cap H^1_0(0,\infty)$. This follows by differentiating $r\psi(r)$ on the radial smooth core; the Dirichlet operator is the odd-extension Fourier multiplier, whose quadratic form domain is $H^1_0$, and the bounded potential leaves its operator domain unchanged by the Neumann argument of step 1.1. Rotations commute with both groups, so their radial wave limits equal the half-line waves. The reduced zero-energy function $u_0(r)=\sin(\alpha r)$ for $r<1$ and $u_0(r)=1$ for $r\ge1$ has matching value and derivative at $1$; $Ju_0$ is regular at the origin and behaves as $1/r$ at infinity, so it is a locally square-integrable zero solution but not $L^2$. This permitted resonance motivates the following exact calculation. [step 1.1, step 2.1, step 4.1, F1, construct]

6.1 For $k>0$ put $q(k)=\sqrt{k^2+\alpha^2}$, $b(k)=(\sin^2q(k)+(q(k)^2/k^2)\cos^2q(k))^{1/2}$ and $\zeta(k)=e^{-ik}((q(k)/k)\cos q(k)+i\sin q(k))/b(k)$. Since sine and cosine cannot vanish simultaneously, $b>0$ and $|\zeta|=1$; all these functions are smooth on compact positive $k$ intervals. Define $s_k(r)=b(k)^{-1}\sin(q(k)r)$ for $0<r<1$, and $s_k(r)=(\zeta(k)e^{ikr}-\overline{\zeta(k)}e^{-ikr})/(2i)$ for $r\ge1$. At $r=1$ its value and derivative on both sides are $b^{-1}\sin q$ and $b^{-1}q\cos q$, respectively; it has zero trace at $0$ and satisfies $hs_k=k^2s_k$ with no distributional boundary term. Expansion of $q=\alpha+k^2/(2\alpha)+O(k^4)$ gives $\sin q\to1$, $(q/k)\cos q=-k/2+O(k^3)$, $b\to1$ and $\zeta\to i$ as $k\downarrow0$, without selecting a phase branch. [step 5.2, algebra, construct]

6.2 The position dilation generator restricts under $J$ to $D=-i(r\partial_r+1/2)$. The radial log map $u\mapsto e^{\rho/2}u(e^\rho)$ followed by the Fourier convention $e^{-i\eta\rho}$ makes it multiplication by $\eta$; there is no zero atom, and complex conjugation exchanges $P_+$ and $P_-$. Set $g(r)=e^{-r}$ and $u=P_+g$. Since $g$ is real and $\|g\|^2=1/2$, the equal positive/negative projection norms give $P_+u=u$, $\|u\|^2=1/4$ and $\langle u,g\rangle=1/4$. In particular $u$ is nonzero; it need not belong to a Hamiltonian domain because the defect acts on all of $L^2$. [step 5.2, F1, F2, construct]

7.1 Let $S$ and $C$ be the half-line sine and cosine transforms with kernels $\sqrt{2/\pi}\sin(kr)$ and $\sqrt{2/\pi}\cos(kr)$. Odd and even Fourier extensions make them unitary self-adjoint involutions, with $Sh_0S=M_{k^2}$. On each compact interval $I\Subset(0,\infty)$ define $Tv(r)=\sqrt{2/\pi}\int_I s_k(r)v(k)\,dk$. It is bounded from $L^2(I)$ into $L^2(dr)$: for $r\ge1$ it is a sum of restricted Fourier transforms of the bounded coefficients $\zeta v$ and $\overline\zeta v$; for $r<1$ its kernel is bounded on the finite rectangle and Cauchy–Schwarz applies. Twice differentiating gives $Tv\in D(h)$ and $hTv=T(k^2v)$, with the matching and Dirichlet conditions from step 6.1; outside the well the derivative estimates are Plancherel bounds for bounded powers of $k$, and inside they are bounds on a finite rectangle. Thus uniqueness of strong Schrödinger evolution gives $e^{-ith}Tv=T(e^{-itk^2}v)$ on these packets. No interacting generalized eigenfunction expansion is assumed. [step 2.1, step 6.1, F1, algebra]

8.1 For $v\in C_c^\infty(I)$ compare $Se^{-itk^2}v$ with $T\overline\zeta e^{-itk^2}v$. On $r\ge1$ their $e^{ikr}$ coefficients agree, and their difference, up to an irrelevant overall sign, is $\sqrt{2/\pi}(2i)^{-1}\int_I e^{-ikr-itk^2}(1-\overline\zeta(k)^2)v(k)\,dk$. For $t\to+\infty$ its phase derivative is $-r-2tk$, whose magnitude is at least a positive constant times $r+t$ on $I$. Repeated integration by parts, with no endpoint terms, bounds it by $C_N(r+t)^{-N}$; integration of the squared bound over $r\ge1$ tends to zero for $N\ge1$. On $0<r<1$ both packet integrals are $O(t^{-N})$ uniformly in $r$, by integrating against $-tk^2$; their amplitude derivatives are bounded uniformly on the finite rectangle. Thus $\|e^{-ith_0}Sv-e^{-ith}T\overline\zeta v\|\to0$. Multiplying by $e^{ith}$ identifies the actual Cook wave as $\Omega_+Sv=T\overline\zeta v$ on this dense packet class. This identification has used neither completeness nor a stationary/dynamical correspondence theorem. [step 4.1, step 6.1, step 7.1, algebra]

9.1 For $L>0$ let $B_Lu(r)=L^{-1/2}u(r/L)$; then $SB_L=B_{1/L}S$. For a compact positive-energy packet, the last step gives $(B_L^*\Omega_+B_LSv)(r)=\sqrt{2/\pi}\int s_{k/L}(Lr)\overline{\zeta(k/L)}v(k)\,dk$. On $r\ge1/L$ this equals $\sqrt{2/\pi}(2i)^{-1}\int(e^{ikr}-\overline{\zeta(k/L)}^2e^{-ikr})v(k)\,dk$, which converges in $L^2$ to $-iCv$: $\zeta(k/L)\to i$ uniformly on the support of $v$, and Plancherel bounds the difference by the $L^2$ norm of its Fourier coefficient. On $0<r<1/L$, $b(k/L)^{-1}$ is uniformly bounded for large $L$, $|\sin(q(k/L)Lr)|\le1$ and $v\in L^1$, so this omitted piece is uniformly bounded with norm $O(L^{-1/2})$; the cosine packet has the same bound there. Density and $\|\Omega_+\|=1$ therefore give $B_L^*\Omega_+B_L\to Q=-iCS$ strongly on all $L^2(0,\infty)$. [step 4.1, step 6.1, step 8.1, F1, algebra]

10.1 Define the Carleman operator $Au(r)=\int_0^\infty u(s)/(r+s)\,ds$. Its norm is at most $\pi$: the weighted Cauchy–Schwarz/Schur estimate uses $w(r)=r^{-1/2}$ and $\int_0^\infty s^{-1/2}/(r+s)\,ds=\pi r^{-1/2}$. For $M_\varepsilon v(k)=e^{-\varepsilon k}v(k)$, direct damped integration gives $(CM_\varepsilon S+SM_\varepsilon C)(r,s)=(2/\pi)(r+s)/((r+s)^2+\varepsilon^2)$. The left side tends strongly to $CS+SC$. Testing compact functions supported away from zero, dominated convergence on the right and the Schur bound prove the bounded-operator identity $(CS+SC)/2=A/\pi$. Moreover $\langle Au,u\rangle=\int_0^\infty|\int_0^\infty e^{-tr}u(r)\,dr|^2dt$: for compact test functions use absolute Fubini and $1/(r+s)=\int_0^\infty e^{-t(r+s)}dt$; the Schur bound extends this bounded Laplace map and its identity to all $L^2$, and each fixed-$t$ value agrees with the integral since $e^{-tr}\in L^2$. For the $u$ in step 6.2 its Laplace value at $t=1$ is $1/4$, and it is continuous for $t>0$ because $t\mapsto e^{-tr}$ is continuous in $L^2$. The quadratic form is consequently strictly positive. Thus $\operatorname{Re}\langle CSu,u\rangle=\langle Au,u\rangle/\pi>0$. If $Qu=u$, then $CSu=iu$ would make this real part zero. Therefore $(Q-I)u\ne0$. [step 7.1, step 9.1, step 6.2, F1, F3, algebra]

11.1 Put $L_n=2^n$ and $u_n=B_{L_n}u$. This bounded sequence is weakly null: for compact-annulus test functions the dilated and fixed supports eventually separate, and density and unitarity extend that conclusion to arbitrary $L^2$ pairs. Also $B_L$ commutes with $P_+$ and $B_L^*h_0B_L=L^{-2}h_0$. For any $f\in C_c(\mathbb R)$, scalar dominated convergence gives $f(L^{-2}h_0)\to f(0)I$ strongly. Consequently, for $K=(\Omega_+-I)f(h_0)P_+$, $B_{L_n}^*K B_{L_n}u=(B_{L_n}^*\Omega_+B_{L_n}-I)f(L_n^{-2}h_0)u\to f(0)(Q-I)u$. If $f(0)\ne0$, step 10.1 makes its limit nonzero, so $\|Ku_n\|\to|f(0)|\|(Q-I)u\|>0$. A compact operator sends bounded weakly-null sequences to norm-null sequences, contradicting this limit. Thus the radial defect is not compact; if the full three-dimensional defect were compact, its bounded radial compression $J^*C_+J=K$ would be compact. The displayed triangular $f$ has $f(0)=1$ and proves the explicit obstruction in the statement. [step 2.1, step 9.1, step 6.2, step 10.1, F3, algebra]

12.1 Step 1.2 proves (a), steps 3.1, 4.1 and 5.1 prove the full continuous-cutoff claim (b), and steps 3.2 and 4.2 prove (c) for every generic real bounded compact potential. Steps 5.2, 6.1, 6.2, 7.1, 8.1, 9.1, 10.1 and 11.1 prove the nonzero-threshold obstruction within that same potential class. All sequences were explicit or chosen from countable approximation families; no arbitrary-index choice, AC/DC Fredholm theorem, abstract Gelfand construction, Hilbert–Schmidt spectral theorem or completeness assumption was used. [step 1.2, step 5.1, step 3.2, step 4.2, step 11.1] ∎

## Remarks

The negative values of $f$ are irrelevant in (b), since the free spectral
measure is supported on $[0,\infty)$. A nonzero $f(0)$ is compatible with
compactness for particular potentials, for example $V=0$; the obstruction
proves why no theorem uniform in all the stated potentials can omit the
zero-value qualification. Parts (a) and (c) retain their full original scope.
