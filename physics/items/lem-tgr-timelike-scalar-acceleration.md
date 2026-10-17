---
id: lem-tgr-timelike-scalar-acceleration
kind: lemma
title: Constructed timelike smear and massless accelerated spectrum
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-countable-choice
  - def-test-function-space-d-of-an-open-set
  - def-test-function-topology
  - lem-test-function-lf-topology-universal-property
  - def-tempered-distribution
  - def-fourier-transform-of-a-tempered-distribution
  - lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous
  - thm-fourier-inversion-on-schwartz-space
  - def-qft-scalar-mass-shell
  - def-qft-fock-and-test-spaces
  - lem-qft-fock-ccr-car
  - lem-qft-smeared-free-scalar
  - lem-qft-segal-weyl-domain
  - lem-qft-mass-shell-test-range-dense
  - thm-dominated-convergence
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - lem-tgr-thermal-contour-spectrum
  - lem-tgr-exponential-current
dependency_roles:
  def-countable-choice: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-test-function-topology: mathematical-premise
  lem-test-function-lf-topology-universal-property: mathematical-premise
  def-tempered-distribution: mathematical-premise
  def-fourier-transform-of-a-tempered-distribution: mathematical-premise
  lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  def-qft-scalar-mass-shell: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
  lem-qft-smeared-free-scalar: mathematical-premise
  lem-qft-segal-weyl-domain: mathematical-premise
  lem-qft-mass-shell-test-range-dense: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  lem-tgr-thermal-contour-spectrum: mathematical-premise
  lem-tgr-exponential-current: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: John Preskill, Quantum Field Theory in Curved Spacetime, complete Caltech lecture notes
      url: https://preskill.caltech.edu/ph236c/Preskill_QFT_curved_spacetime.pdf
      locator: Complete 151-page PDF of the 149-page notes, §4.3, printed pp. 55–58, and §4.7, pp. 71–74. The point-detector response and Rindler interpretation are contextual, not substitutes for the local compact-test construction.
    - title: Robert M. Wald, The Thermodynamics of Black Holes
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: Complete 46-page review, §3, printed pp. 11–16. The general boost/KMS and Hawking discussion is not adopted as a proof of the restricted local claims.
    - title: Luís C. B. Crispino, Atsushi Higuchi, and George E. A. Matsas, The Unruh effect and its applications
      url: https://arxiv.org/pdf/0710.5373
      locator: Complete 53-page review, §III.A.1–2, PDF pp. 19–22, equations 3.1–3.28. Its point-detector and formal infinite-time rate are source context only.
---

## Statement

Assume Countable Choice [[def-countable-choice]]. Use the affine Minkowski
space, metric $\eta=\operatorname{diag}(-1,1,1,1)$, shell pairing
$p\circ x=p^0x^0-\mathbf p\cdot\mathbf x$, and massless one-particle space
of [[def-qft-scalar-mass-shell]]. Thus $x^0,\mathbf x$ have length units,
$\mathbf k$ has inverse-length units, the omitted shell apex $\mathbf k=0$
has measure zero, and
$$d\nu_0(\mathbf k)=\frac{d^3\mathbf k}{(2\pi)^3 2|\mathbf k|},\qquad \mathcal H_0=L^2(\mathbb R^3\setminus\{0\},d\nu_0;\mathbb C).$$
Let $I\subseteq\mathbb R$ be a nonempty open proper-time interval, with $\tau$ in
seconds, and let $\gamma=(\gamma^0,\boldsymbol\gamma)\in
C^\infty(I,\mathbb R^4)$ satisfy
$$\eta(\dot\gamma(\tau),\dot\gamma(\tau))=-c^2,\qquad \dot\gamma^0(\tau)>|\dot{\boldsymbol\gamma}(\tau)|$$
for all $\tau\in I$, where $c>0$ is in metres per second. This defines a
future-directed timelike curve parametrized by proper seconds. For
$f\in C_c^\infty(I;\mathbb C)$ define its curve-smearing amplitude by
$$K_\gamma f(\mathbf k)=\int_I f(\tau) e^{i(|\mathbf k|\gamma^0(\tau)-\mathbf k\cdot\boldsymbol\gamma(\tau))}\,d\tau.$$
Then $K_\gamma f\in\mathcal H_0$, and on every fixed compact support set the
map $f\mapsto K_\gamma f$ is continuous in the test-function topology. If
$f$ has units metres per second, then $K_\gamma f$ has units metres and its
$\mathcal H_0$ norm is dimensionless. For real $f$, define the actual
finite-particle-domain field
$$\Phi_\gamma(f)=a(K_\gamma f)+a^\dagger(K_\gamma f)$$
using the bosonic Fock space and creation/annihilation conventions of
[[def-qft-fock-and-test-spaces]]. It is symmetric on the finite-particle
domain and has the self-adjoint Segal closure supplied by
[[lem-qft-segal-weyl-domain]]. Its vacuum covariance on real compact tests is
the well-defined pairing $\langle K_\gamma f,K_\gamma g\rangle_2$. This
construction is an additional temporal smearing of the massless shell; it
does not define a point field or an interaction.

Use the batch-74 draft [[lem-tgr-exponential-current]]'s stated conventions
$\sinh z=(e^z-e^{-z})/2$, $\cosh z=(e^z+e^{-z})/2$, and
$\operatorname{csch}z=1/\sinh z$ where the denominator is nonzero; that item
also states $\sinh'=\cosh$ and $\cosh'=\sinh$. Define
$\coth z:=\cosh z/\sinh z$ where $\sinh z\ne0$. These formulas give
$\cosh^2z-\sinh^2z=1$ and hence $(\coth z)'=-\operatorname{csch}^2z$.

For $a>0$ in metres per second squared, put $\ell=c^2/a$ and define the
curve $\gamma_a:\mathbb R\to\mathbb R^4$ by
$$\gamma_a(\tau)=\bigl(\ell\sinh(a\tau/c),\ell\cosh(a\tau/c),0,0\bigr).$$
For this curve, its four-acceleration is the second derivative
$\ddot\gamma_a(\tau)$ with respect to the proper-second parameter $\tau$;
define its proper-acceleration magnitude by
$\alpha_a(\tau):=\sqrt{\eta(\ddot\gamma_a(\tau),\ddot\gamma_a(\tau))}$.
We call $\gamma_a$ uniformly accelerated when $\alpha_a$ is constant; the
calculation below gives $\alpha_a(\tau)=a$ for every $\tau\in\mathbb R$.
The restriction of the massless Minkowski-vacuum covariance constructed above
is stationary in proper time, meaning its two-time covariance depends on
$(\tau,\tau')$ only through $s=\tau-\tau'$, and, in the distributional
boundary-value sense on the real line, is
$$C_a(s)=-\frac{a^2}{16\pi^2c^4}\,\operatorname{csch}^2\!\left(\frac{a(s-i0)}{2c}\right).$$
The displayed expression means the limit of the smooth damped shell pairings
against compact smooth tests;
no product or pullback of point-field distributions is assumed. With the
angular-frequency convention
$$S_a(\nu)=\mathcal F_{-}C_a(\nu),\qquad \mathcal F_{-}C(\nu)=\int_{\mathbb R}e^{-i\nu s}C(s)\,ds$$
interpreted distributionally, the local conclusion about the spectrum is conditional on the current
batch-74 draft suppliers [[lem-tgr-thermal-contour-spectrum]] and its
prerequisite [[lem-tgr-exponential-current]]. Their carriers exist in the
batch-74 manifest, and both items have status `draft`. The current run's
Step-1 records report `ready` for both items; this is authoring-readiness
evidence, not proof acceptance. The contour item's actual statement uses a length
coordinate and an inverse-length parameter (renamed from its $\kappa$ to
$\alpha$ here); the proof below uses
$\alpha=a/c^2$ and $u=cs$, for which the covariance obeys
$C_a(s)=\pi^{-1}C_\alpha(cs)$. Under the contour item's exact conditional
Fourier formula and this rescaling,
$$S_a(\nu)=\frac{\nu}{2\pi c^2\bigl(e^{2\pi c\nu/a}-1\bigr)},\qquad S_a(0)=\frac{a}{4\pi^2c^3},\qquad S_a(-\nu)=e^{2\pi c\nu/a}S_a(\nu)\quad(\nu>0).$$
The continuous value at zero is the removable limit. $\nu$ has units
seconds$^{-1}$ and $S_a$ has units seconds per square metre; the spectral
claim remains conditional until both draft suppliers are accepted.

For comparison, on the inertial curve $\gamma_0(\tau)=(c\tau,0,0,0)$ the
same construction gives
$$C_0(s)=-\frac{1}{4\pi^2c^2(s-i0)^2},\qquad S_0(\nu)=\frac{\max(-\nu,0)}{2\pi c^2}.$$
These are mathematical covariance and Fourier-transform statements in the
specified representation. They do not assert a measured spectrum or a
detector transition probability.

## Facts & Assumptions

**Given:** Countable Choice; the massless future-shell measure and phase; the second-variable-linear bosonic Fock convention; an open proper-time interval $I$ and a smooth future unit-timelike curve $\gamma$ as stated. Coordinates have metres, $\tau$ seconds, $\mathbf k$ inverse metres, $c$ metres per second, $a$ metres per second squared, and all shell phases are dimensionless.

[A1] Countable Choice is the explicit choice strength used by the cited Fock and Segal-field constructions. [[def-countable-choice]]

[F1] The massless shell has $p^0=|\mathbf k|$, pairing $p\circ x=|\mathbf k|x^0-\mathbf k\cdot\mathbf x$, and measure $d^3\mathbf k/((2\pi)^3 2|\mathbf k|)$; the apex is omitted and has measure zero. [[def-qft-scalar-mass-shell]]

[F2] $C_c^\infty(I;\mathbb C)$ consists of smooth complex tests whose support is a compact subset of the open interval $I$. A tempered distribution is a continuous bilinear functional on Schwartz space; test functions are not conjugated in that pairing. [[def-test-function-space-d-of-an-open-set]] [[def-tempered-distribution]]

[F3] The Hilbert pairing is conjugate-linear in its first entry and linear in its second; creation is linear, annihilation conjugate-linear, both preserve the finite-particle subspace, and the real Segal field is $\overline{(a^\dagger(h)+a(h))/\sqrt2}$ there. [[def-qft-fock-and-test-spaces]]

[F4] For real spacetime Schwartz tests the free scalar field has the formula $a(K_0f)+a^\dagger(K_0f)$ and its vacuum covariance is the one-particle pairing. This fixes the scalar-field normalization used when defining the additional curve-smearing construction; it does not itself assert that a curve restriction exists. [[lem-qft-smeared-free-scalar]]

[F5] For every $h$ in the separable one-particle space the Segal field on the finite-particle domain is essentially self-adjoint, and the real Weyl group has that closure as generator. [[lem-qft-segal-weyl-domain]]

[F6] The massless one-particle space is separable, so it meets the explicit hypothesis of [F5]. [[lem-qft-mass-shell-test-range-dense]]

[F7] Dominated convergence applies to the radial shell norm and to the $e^{-\epsilon|\mathbf k|}$ damping limit. [[thm-dominated-convergence]]

[F8] The Fourier transform on tempered distributions is defined by bilinear transposition of the negative-sign $2\pi$ Schwartz transform. Replacing $\xi$ by $\nu/(2\pi)$ gives the angular-frequency kernel $e^{-i\nu s}$ used here; no conjugation is introduced. [[def-fourier-transform-of-a-tempered-distribution]] [[lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous]]

[F9] Absolute Fubini applies to the exponentially damped shell integral paired with two compact tests. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F10] The definition gives $a(h)\Omega=0$ and $a^\dagger(h)\Omega=h$ in the one-particle sector; the actual bosonic maps preserve the finite-particle domain and are mutual adjoints there. [[def-qft-fock-and-test-spaces]] [[lem-qft-fock-ccr-car]]

[F11] For $\widehat f(\xi)=\int f(s)e^{-2\pi i s\xi}\,ds$, Schwartz inversion is $f(s)=\int\widehat f(\xi)e^{2\pi i s\xi}\,d\xi$; setting $\nu=2\pi\xi$ gives the reciprocal $1/(2\pi)$ in the angular-frequency inverse. [[thm-fourier-inversion-on-schwartz-space]]

[F12] The Hilbert pairing satisfies Cauchy–Schwarz, $|\langle u,v\rangle_2|\le\|u\|_2\|v\|_2$. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

[F13] The test space $\mathcal D(I)=C_c^\infty(I)$ has the locally convex LF topology determined by its fixed-support stages $\mathcal D_K(I)$, whose seminorms are $p_m(f)=\max_{0\le j\le m}\sup_{\tau\in K}|f^{(j)}(\tau)|$. A linear map from $\mathcal D(I)$ to a locally convex space is continuous if its restriction to every $\mathcal D_K(I)$ is continuous. [[def-test-function-topology]] [[lem-test-function-lf-topology-universal-property]]

[L1] **Draft supplier, not an accepted proof input:** the current batch-74 item [[lem-tgr-thermal-contour-spectrum]] assumes its parameter $\kappa>0$ with units of inverse length. Renaming that parameter to $\alpha$ and its length variable $s$ to $u$, it states $C_\alpha(u)=-\alpha^2(16\pi)^{-1} \operatorname{csch}^2(\alpha(u-i0)/2)$ and $S_\alpha(\omega)=\omega/[2(e^{2\pi\omega/\alpha}-1)]$, $S_\alpha(0)=\alpha/(4\pi)$, with $S_\alpha(-\omega)=e^{2\pi\omega/\alpha}S_\alpha(\omega)$ for $\omega>0$. Its declared prerequisite [[lem-tgr-exponential-current]] is also a current batch-74 draft. Both carriers are present, and their current run Step-1 records report `ready`. Those records provide authoring-readiness evidence, not proof acceptance. We use the contour item's actual statement conditionally, after the explicit positive coordinate and amplitude rescaling in the last proof step; neither draft label is treated as proof acceptance.

## Proof

1.1 Fix a compact set $K\Subset I$ containing $\operatorname{supp}f$ and let $d=\min_{\tau\in K}(\dot\gamma^0-|\dot{\boldsymbol\gamma}|)>0$. For $\mathbf k=r\mathbf n$, $r>0$, $|\mathbf n|=1$, the phase is $r\phi_{\mathbf n}(\tau)$ with $\phi'_{\mathbf n}=\dot\gamma^0-\mathbf n\cdot\dot{\boldsymbol\gamma}\ge d$. All derivatives of $1/\phi'_{\mathbf n}$ are uniformly bounded on $K\times S^2$. Since $e^{ir\phi}=(ir\phi')^{-1}\partial_\tau e^{ir\phi}$, repeated integration by parts gives $|K_\gamma f(r\mathbf n)|\le C_N r^{-N}$ for every $N$ and $r\ge1$, with $C_N$ bounded by finitely many test-function seminorms on $K$. Boundary terms vanish because $f$ is compactly supported. For $0<r\le1$, $|K_\gamma f(r\mathbf n)|\le\|f\|_{L^1(K)}$. [A1, F1, F2, given, construct]

1.2 Put $\kappa=a/c$ and $\ell=c^2/a$. Direct differentiation gives $\dot\gamma_a=(c\cosh(\kappa\tau),c\sinh(\kappa\tau),0,0)$, $\eta(\dot\gamma_a,\dot\gamma_a)=-c^2$, and $\ddot\gamma_a=(a\sinh(\kappa\tau),a\cosh(\kappa\tau),0,0)$, $\eta(\ddot\gamma_a,\ddot\gamma_a)=a^2$. Hence the curve is future unit timelike and the defined proper-acceleration magnitude satisfies $\alpha_a(\tau)=a$ for every $\tau$. With $s=\tau-\tau'$ and $v=(\tau+\tau')/2$, the differences satisfy $$X+Y=2\ell e^{\kappa v}\sinh(\kappa s/2),\qquad X-Y=2\ell e^{-\kappa v}\sinh(\kappa s/2),$$ where $Y=\Delta x^1$. Therefore $Y^2-X^2=-4\ell^2\sinh^2(\kappa s/2)$, and the regulated denominator factors exactly as $$Y^2+(\epsilon+iX)^2=(Y-X+i\epsilon)(Y+X-i\epsilon).$$ [given, algebra]

2.1 In polar coordinates $d\nu_0=r\,dr\,d\Omega/(2(2\pi)^3)$. The low-frequency bound makes $\int_0^1r|K_\gamma f|^2dr$ finite; the estimate of 1.1 with, for example, $N=2$ makes $\int_1^\infty r|K_\gamma f|^2dr$ finite, uniformly in $\mathbf n$. The same estimates bound the norm by finitely many seminorms of $f$ on $K$, so $K_\gamma|_{\mathcal D_K(I)}$ is continuous for each compact $K\Subset I$ and $K_\gamma f\in\mathcal H_0$. Since $K_\gamma$ is complex-linear, [F13] gives its continuity from the LF test-function topology on $\mathcal D(I)$ to the norm topology of $\mathcal H_0$. The Hilbert-space vector is therefore defined before it is used in a field expression. [F1, F13, step 1.1, algebra]

3.1 The creation and annihilation formulas in [F2] define $\Phi_\gamma(f)$ on the finite-particle domain because $K_\gamma f\in\mathcal H_0$. For real $f$, it equals $\sqrt2$ times the Segal field with vector $K_\gamma f$ on that domain. Separability [F6] meets the hypothesis of [F5], which gives its self-adjoint closure. Mutual adjointness [F10] makes the finite-domain field symmetric. The vacuum is annihilated by $a(K_\gamma f)$ by [F10]. Therefore $\Phi_\gamma(g)\Omega=a^\dagger(K_\gamma g)\Omega$ and symmetry of $\Phi_\gamma(f)$ gives $\langle\Omega,\Phi_\gamma(f)\Phi_\gamma(g)\Omega\rangle_2 =\langle K_\gamma f,K_\gamma g\rangle_2$. This defines only the tested field and makes no point-field assumption. [A1, F2, F3, F4, F5, F6, F10, step 2.1, algebra]

3.2 For $\epsilon>0$ insert $e^{-\epsilon r}$ in the shell integral. With $X=\Delta x^0$ and $R=|\Delta\mathbf x|$, absolute convergence permits angular integration and Fubini [F9]: $$W_\epsilon(X,R)=\frac{1}{4\pi^2R}\int_0^\infty e^{-(\epsilon+iX)r}\sin(rR)\,dr =\frac{1}{4\pi^2\bigl(R^2+(\epsilon+iX)^2\bigr)}.$$ The value at $R=0$ is the continuous limit. The integral identity follows by writing the sine as two exponentials and integrating each, since $\operatorname{Re}(\epsilon+iX)>0$. For compact real tests $f,g$, the shell-paired expression converges to $\langle K_\gamma f,K_\gamma g\rangle_2$: $e^{-\epsilon r/2}K_\gamma f\to K_\gamma f$ in $\mathcal H_0$ by [F7], and Cauchy–Schwarz [F12] passes the inner products to the limit. Thus the damped kernel is an actual regulator for the constructed covariance, not a formal substitution of a worldline into a point field. [F1, F2, F7, F9, F12, step 2.1, given]

4.1 For compact real tests $f,g$, the linear change $v=(\tau+\tau')/2$, $s=\tau-\tau'$ has Jacobian of absolute value one and takes $f(\tau)g(\tau')$ to a compact smooth test $\varphi(v,s)$. On the compact average-time projection of its support, write $A(v)=2\ell e^{-\kappa v}>0$ and $B(v)=2\ell e^{\kappa v}>0$. The factors $Y-X+i\epsilon$ and $Y+X-i\epsilon$ are respectively $-A(v)(x-i\epsilon/A(v))$ and $B(v)(x-i\epsilon/B(v))$, where $x=\sinh(\kappa s/2)$. For positive $\alpha,\beta$ the identity $$\frac{1}{(x-i\alpha\epsilon)(x-i\beta\epsilon)} =\int_0^1\frac{dt}{(x-i((1-t)\alpha+t\beta)\epsilon)^2}$$ follows by integrating the derivative of $[x-i((1-t)\alpha+t\beta)\epsilon]^{-1}$ in $t$ and dividing by $i(\beta-\alpha)\epsilon$ when $\alpha\ne\beta$; for $\alpha=\beta$ both sides agree directly. It shows that both dampings have the same boundary. To justify that boundary, for a compact smooth test $\psi$ choose an even compact smooth $\chi$ equal to one near zero and write $\psi(x)=\psi(0)\chi(x)+x\rho(x)$, where $\rho$ is smooth and compactly supported. The constant term satisfies $$\int\frac{\chi(x)}{x-i\lambda\epsilon}\,dx =i\lambda\epsilon\int\frac{\chi(x)}{x^2+(\lambda\epsilon)^2}\,dx\longrightarrow i\pi$$ for each $\lambda>0$, since its odd real part integrates to zero. The other term is $x\rho(x)/(x-i\lambda\epsilon)=\rho(x)+ i\lambda\epsilon\rho(x)/(x-i\lambda\epsilon)$; the last integral is $O(\epsilon|\log\epsilon|)$ uniformly for $\lambda$ in a compact positive interval. Let $\delta_0$ denote evaluation at zero, $\langle\delta_0,\psi\rangle=\psi(0)$, and define the distributional derivative by $\langle T',\psi\rangle=-\langle T,\psi'\rangle$ for compact smooth tests $\psi$, so $\langle\delta_0',\psi\rangle=-\psi'(0)$. Thus $(x-i0)^{-1}=\operatorname{PV}(1/x)+i\pi\delta_0$, where $\operatorname{PV}(1/x)$ acts by $\lim_{\delta\downarrow0}\int_{|x|>\delta}\psi(x)/x\,dx$. Differentiating this distributional identity gives $(x-i0)^{-2}=\operatorname{Pf}(1/x^2)-i\pi\delta_0'$ and $$\left\langle\operatorname{Pf}(1/x^2),\psi\right\rangle =\lim_{\delta\downarrow0}\left(\int_{|x|>\delta}\frac{\psi(x)}{x^2}\,dx-\frac{2\psi(0)}{\delta}\right).$$ Integration by parts on $|x|>\delta$ identifies this finite part with $-(\operatorname{PV}(1/x))'$. The bounds are uniform when the positive damping coefficient ranges in a compact subinterval of $(0,\infty)$, as it does for $v$ in a compact set. To identify the pullback with the usual $s-i0$ boundary, note that $\sinh(bs-i\epsilon b)=\sinh(bs)-i\epsilon b\cosh(bs)+O(\epsilon^2)$. More generally, for a positive smooth regulator $\lambda(v,x)$, Taylor expand $\lambda=\lambda_0(v)+\lambda_1(v)x+x^2r(v,x)$. The linear part factors as $$x-i\epsilon(\lambda_0+\lambda_1x) =(1-i\epsilon\lambda_1)\left(x-\frac{i\epsilon\lambda_0}{1-i\epsilon\lambda_1}\right).$$ Its pole has positive imaginary part comparable to $\epsilon$ and real displacement $O(\epsilon^2)$, so the preceding test-subtraction calculation gives the same boundary. The quadratic remainder changes the inverse square by at most $C\epsilon x^2/(x^2+\epsilon^2)^{3/2}$ on a small interval; its integral is $O(\epsilon|\log\epsilon|)$. Thus the smooth positive regulator, including the one induced by $\sinh(b(s-i\epsilon))$, has the same boundary as the constant positive regulator. The change $x=\sinh(\kappa s/2)$ is orientation-preserving with positive derivative. Consequently the test-paired limit of step 3.2 is $$C_a(s)=-\frac{1}{16\pi^2\ell^2}\operatorname{csch}^2\!\left(\frac{\kappa(s-i0)}{2}\right) =-\frac{a^2}{16\pi^2c^4}\operatorname{csch}^2\!\left(\frac{a(s-i0)}{2c}\right).$$ Thus $\langle K_{\gamma_a}f,K_{\gamma_a}g\rangle_2$ equals $\left\langle C_a(s),\int f(t)g(t-s)\,dt\right\rangle$. This proves stationarity and the stated covariance boundary from ordinary regulated shell pairings. To verify temperedness explicitly, set $q=\lim_{\epsilon\downarrow0}\coth(\kappa(s-i\epsilon)/2)$ in the distribution sense and $r(s)=\coth(\kappa s/2)-2/(\kappa s)$ for $s\ne0$. The Taylor expansion of $\coth$ at zero extends $r$ smoothly there, and $r'(s)=-(\kappa/2)\operatorname{csch}^2(\kappa s/2)+2/(\kappa s^2)$ is bounded: its apparent singularity cancels at zero, and both terms are bounded at infinity. Since $1/(s-i0)=\operatorname{PV}(1/s)+i\pi\delta_0$, the decomposition is $q=(2/\kappa)\operatorname{PV}(1/s)+r+(2\pi i/\kappa)\delta_0$. By the derivative definition and $q_\epsilon\to q$ on compact smooth tests, $q_\epsilon'\to q'$. Direct differentiation of $q_\epsilon(s)=\coth(\kappa(s-i\epsilon)/2)$ then gives $C_a=(a^2/(8\pi^2c^4\kappa))q'$. For $m,n\ge0$ set $p_{m,n}(\varphi)=\sup_s(1+s^2)^{m/2}|\varphi^{(n)}(s)|$, a Schwartz seminorm. For $\varphi\in\mathcal S(\mathbb R)$, the symmetric principal-value formula gives $\left|\left\langle\operatorname{PV}(1/s),\varphi'\right\rangle\right|\le 2p_{0,2}(\varphi)+C p_{2,1}(\varphi),$ because subtracting $\varphi'(0)$ on $|s|<1$ bounds the local integral by $2\sup|\varphi''|$, while the $|s|\ge1$ integral is bounded by $p_{2,1}\int_{|s|\ge1}[|s|(1+s^2)]^{-1}ds$. Also $|\int r'(s)\varphi(s)ds|\le C p_{2,0}(\varphi)$ and $|\langle\delta_0',\varphi\rangle|\le p_{0,1}(\varphi)$. Hence $|\langle C_a,\varphi\rangle|\le C_{a,c}\bigl(p_{0,2}(\varphi)+p_{2,1}(\varphi)+p_{2,0}(\varphi)+p_{0,1}(\varphi)\bigr),$ a finite Schwartz-seminorm bound. By [F2], $C_a\in\mathcal S'(\mathbb R)$, as required for its subsequent Fourier transform. [F1, F2, step 3.2, step 1.2, algebra]

4.2 On the inertial curve, direct radial integration gives $$W_{0,\epsilon}(s)=\frac{1}{4\pi^2}\int_0^\infty r e^{-(\epsilon+ics)r}\,dr =\frac{1}{4\pi^2(\epsilon+ics)^2}.$$ Its boundary is $C_0(s)=-1/(4\pi^2c^2(s-i0)^2)$. Reparameterizing the massless shell by $\omega=cr$ gives $C_0(s)=(4\pi^2c^2)^{-1}\int_0^\infty\omega e^{-i\omega s}d\omega$ as a tempered boundary distribution. Fourier transformation with $e^{-i\nu s}$ then yields $S_0(\nu)=\max(-\nu,0)/(2\pi c^2)$, including continuous value zero at $\nu=0$. Specifically, the inverse-Fourier identity from [F11], after $\nu=2\pi\xi$, gives $\mathcal F_-(e^{-i\omega s})(\nu)=2\pi\delta_0(\nu+\omega)$; integrating this identity against $\omega\mathbf1_{\omega>0}/(4\pi^2c^2)$ yields the displayed regular density. Pairing first with a Schwartz test makes the $\omega$ integral absolutely convergent by rapid decay, so the interchange with the shell integral is justified. [F1, F2, F8, F9, F11, step 3.2, algebra]

5.1 Let $\alpha=a/c^2>0$, which has units of inverse length, and use the supplier's length coordinate $u=cs$. The supplier boundary definition in [L1] and the covariance in step 4.1 give $C_a(s)=\pi^{-1}C_\alpha(cs)$ as tempered distributions: their smooth kernels have the same hyperbolic argument and their coefficients differ by exactly $1/\pi$; the scaling is positive, so it preserves the lower-boundary orientation. By the bilinear transposed Fourier convention [F8], for each $\varphi\in\mathcal S(\mathbb R)$ the dual pairing gives $\langle\mathcal F_{-,s}[C_\alpha(c\,\cdot)],\varphi\rangle=\langle S_\alpha(\omega),\varphi(c\omega)\rangle=\langle c^{-1}S_\alpha(\nu/c),\varphi\rangle$: indeed, $\widehat\varphi(u/c)=c\,\widehat{\varphi(c\,\cdot)}(u)$ and the distribution pullback contributes $c^{-1}$ under $u=cs$. Including the covariance factor $\pi^{-1}$ therefore gives $\mathcal F_{-,s}[\pi^{-1}C_\alpha(c\,\cdot)](\nu)=\pi^{-1}c^{-1}S_\alpha(\nu/c)$. Now apply the exact conditional formula of draft supplier [L1]: $$S_a(\nu)=\frac1{\pi c}\frac{\nu/c}{2(e^{2\pi(\nu/c)/\alpha}-1)}=\frac{\nu}{2\pi c^2(e^{2\pi c\nu/a}-1)}.$$ Its zero limit is $\alpha/(4\pi^2c)=a/(4\pi^2c^3)$, and its detailed-balance relation gives $S_a(-\nu)=e^{2\pi c\nu/a}S_a(\nu)$ for $\nu>0$. The spectral conclusion remains conditional until the two batch-74 draft suppliers are accepted; the covariance construction and inertial transform above are local arguments. [F8, L1, step 4.1, algebra] ∎
