---
id: thm-nrqmx-gaussian-covariance-uncertainty
kind: theorem
domain: mathematics
title: Gaussian covariance and uncertainty
status: draft
origin: pipeline
dependency_level: 5
deps: [def-nrqmx-finite-mode-symplectic-data, thm-nrqmx-finite-mode-bogoliubov, thm-nrqmx-finite-metaplectic-construction, lem-nrqmx-finite-mode-fock-schr-identification, lem-nrqm-fock-and-equilibrium-creation-contraction-bounds, lem-nrqmx-williamson-normal-form, lem-nrqmx-schwartz-joint-quadrature-graph-core, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, thm-exponential-beats-every-polynomial, def-polar-surface-measure-on-the-unit-sphere, thm-polar-coordinates-formula-for-lebesgue-measure, thm-linear-change-of-variables-for-lebesgue-measure, cor-volume-of-the-unit-n-ball, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-dominated-convergence, thm-stone-one-parameter-unitary-groups, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqmx-finite-mode-symplectic-data: mathematical-premise
  thm-nrqmx-finite-mode-bogoliubov: mathematical-premise
  lem-nrqmx-williamson-normal-form: mathematical-premise
  lem-nrqmx-schwartz-joint-quadrature-graph-core: mathematical-premise
  thm-nrqmx-finite-metaplectic-construction: mathematical-premise
  lem-nrqmx-finite-mode-fock-schr-identification: mathematical-premise
  lem-nrqm-fock-and-equilibrium-creation-contraction-bounds: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  lem-complex-integration-by-parts-on-intervals-and-decaying-lines: mathematical-premise
  thm-exponential-beats-every-polynomial: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  cor-volume-of-the-unit-n-ball: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Weedbrook et al., Gaussian Quantum Information, §§II.A and II.C.1, pp. 4–9"
      url: "https://arxiv.org/pdf/1110.3234"
    - title: "Phan Thành Nam, Mathematical Quantum Mechanics II, §§5.4 and 6.5, pp. 128–131, 166–169"
      url: "https://www.math.lmu.de/~nam/LectureNotesMQM2020.pdf"
---

## Statement

Assume AC, $r\ge1$, $\hbar>0$, and the quadrature, density-operator,
characteristic-function, and covariance definitions of
[[def-nrqmx-finite-mode-symplectic-data]]. For every density operator with
finite quadrature second moments,
$$V+i\hbar J/2\succeq0.$$
If $S$ is symplectic and $M_S$ is any individual implementer with
$M_S^*RM_S=SR$ on the quadrature domains, then for
$\rho_S=M_S\rho M_S^*$ its mean and covariance are
$$d_S=Sd,\qquad V_S=SVS^T,$$
and $\chi_{\rho_S}(z)=\chi_\rho(S^Tz)$. Conversely, for every real vector
$d\in\mathbb R^{2r}$ and real symmetric matrix $V$, the function
$$\chi(z)=\exp\!\left(i z^Td-\tfrac12z^TVz\right)$$
is the Weyl characteristic function of a finite-mode density operator if
and only if $V+i\hbar J/2\succeq0$. This is a conditional mathematical
existence result for the stated finite-mode model; it is not an experimental
claim.

## Facts & Assumptions

**Given:** AC, finite $r\ge1$, $\hbar>0$, the self-adjoint quadratures and
Weyl system, and a density operator with the finite second-moment condition.
Inner products are linear in the first argument as in
[[def-nrqmx-finite-mode-symplectic-data]].

[A1] AC is adopted for the density spectral expansion and the
finite-dimensional Stone–von Neumann interface; it supplies the Countable
Choice hypothesis of the spectral expansion
([[def-axiom-of-choice]], [[def-countable-choice]]).

[A2] The input density operator has finite quadrature second moments in the
definition [[def-nrqmx-finite-mode-symplectic-data]].

[F1] A density operator has an orthonormal eigen-expansion
$\rho=\sum_nw_n|\psi_n\rangle\langle\psi_n|$ with $w_n>0$ and
$\sum_nw_n=1$; the definitions of $d,V$ are the convergent weighted
quadrature forms in that expansion
([[lem-nrqm-composites-density-and-scalar-spectral-probability]],
[[def-nrqmx-finite-mode-symplectic-data]]).

[F2] Schwartz functions are dense in the joint quadrature graph norm
$\|f\|_2+\sum_j(\|x_jf\|_2+\|\partial_jf\|_2)$
([[lem-nrqmx-schwartz-joint-quadrature-graph-core]]); the quadrature CCR hold
on this core ([[def-nrqmx-finite-mode-symplectic-data]]).

[F3] Every finite symplectic map has an individual unitary implementer,
Schwartz space is invariant under its quadratic generator factors, and the
bounded Weyl covariance holds everywhere
([[thm-nrqmx-finite-metaplectic-construction]]).

[F4] The finite Bogoliubov theorem supplies the same Weyl and quadrature
covariance for transformations expressed by finite matrices $U,V$ obeying
the displayed CCR identities
([[thm-nrqmx-finite-mode-bogoliubov]]).

[F5] Every real symmetric positive definite $V$ has a symplectic Williamson
factorization $V=SD S^T$, and $V+i\hbar J/2\succeq0$ is equivalent to all
diagonal entries $\nu_j$ of $D$ being at least $\hbar/2$
([[lem-nrqmx-williamson-normal-form]]).

[F6] Dominated convergence applies to bounded pointwise-convergent functions
on a probability space ([[thm-dominated-convergence]]).

[F7] Every strongly continuous one-parameter unitary group has a unique
self-adjoint generator, characterized by differentiability at zero
([[thm-stone-one-parameter-unitary-groups]]).

[F8] On one-mode Fock space, $a|m\rangle=\sqrt m\,|m-1\rangle$,
$a^*|m\rangle=\sqrt{m+1}\,|m+1\rangle$, and
$Q=\sqrt{\hbar/2}(a+a^*)$, $P=-i\sqrt{\hbar/2}(a-a^*)$
([[lem-nrqmx-finite-mode-fock-schr-identification]],
[[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]],
[[def-nrqmx-finite-mode-symplectic-data]]).

[F9] For $t>0$ and $\xi\in\mathbb R$, the imported $2\pi$-frequency
Fourier transform satisfies
$$\int_{\mathbb R}e^{-\pi t y^2}e^{-2\pi i y\xi}\,dy=t^{-1/2}e^{-\pi\xi^2/t},$$
and every polynomial times a positive real Gaussian is integrable
([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).
Consequently, for $\alpha>0$ and $\beta\in\mathbb R$, setting
$t=\alpha/\pi$ and $\xi=-\beta/(2\pi)$ gives
$$\int_{\mathbb R}e^{-\alpha y^2+i\beta y}\,dy=\sqrt{\frac\pi\alpha}\,e^{-\beta^2/(4\alpha)}.$$

[F10] Integration by parts holds on finite intervals and on the real line when
the derivative products are integrable and the boundary product vanishes;
$x^m e^{-a x}\to0$ as $x\to+\infty$ for every fixed integer $m\ge0$ and
$a>0$ ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]],
[[thm-exponential-beats-every-polynomial]]).

[F11] For Borel $g:\mathbb R^2\to[0,\infty]$, planar Lebesgue measure in
polar coordinates is $r\,dr\,d\sigma(\omega)$ on $S^1$; the measure is
defined by $\sigma(E)=2\lambda_2(\{r\omega:\omega\in E,0<r\le1\})$.
For every planar rotation $R_\theta$, this definition and
$|\det R_\theta|=1$ give $\sigma(R_\theta E)=\sigma(E)$ by the linear
change-of-variables theorem. Also $\sigma(S^1)=2\lambda_2(\{x:0<|x|\le1\})
=2\pi$: the omitted origin is null, and the closed unit disk has area
$V_2(1)=\pi$
([[def-polar-surface-measure-on-the-unit-sphere]],
[[thm-polar-coordinates-formula-for-lebesgue-measure]],
[[thm-linear-change-of-variables-for-lebesgue-measure]],
[[cor-volume-of-the-unit-n-ball]]).

[F12] Absolutely integrable functions on the Euclidean product $\mathbb R^2$
may be integrated in either coordinate order; the product Gaussian integrands
below are absolutely integrable by [F9]
([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

1.1 Write $X_j=R_j-d_jI$ and
$G_{jk}=\sum_nw_n\langle X_j\psi_n,X_k\psi_n\rangle$. The series converge
absolutely by Cauchy–Schwarz and the second-moment bounds. On compactly
supported smooth functions, integration by parts gives
$$\langle R_jf,R_kf\rangle-\langle R_kf,R_jf\rangle =-i\hbar J_{jk}\|f\|^2.$$
For the same-mode $Q_j,P_j$ pair, this is
$i\hbar\int x_j\partial_j|f|^2=-i\hbar\|f\|^2$ after the vanishing
boundary term; distinct coordinate pairs and equal-type pairs give zero.
The joint graph-norm density in [F2] extends the identity to each
$\psi_n$ in the common domain. Centering by the real scalars $d_j$ does not
change the antisymmetric difference. Summing with weights yields
$G-G^T=-i\hbar J$, while $\operatorname{Re}G=V$ by definition; hence
$G=V-i\hbar J/2$. For any $c\in\mathbb C^{2r}$,
$$\sum_nw_n\left\|\sum_jc_jX_j\psi_n\right\|^2 =\overline c^{\,T}G^Tc\ge0.$$
Since $G^T=V+i\hbar J/2$, the uncertainty matrix is positive
semidefinite. [A1, A2, F1, F2, algebra]

1.2 Now suppose the target $V+i\hbar J/2$ is positive semidefinite. For real
$x$, $x^TVx=x^*(V+i\hbar J/2)x\ge0$, so $V$ is nonnegative. If a nonzero
real $x$ had $x^TVx=0$, put $H=V+i\hbar J/2$. For every complex $y$ and
real $t$, positivity gives
$(x+ty)^*H(x+ty)=2t\operatorname{Re}(y^*Hx)+t^2y^*Hy\ge0$. Allowing both
signs of $t$ forces $\operatorname{Re}(y^*Hx)=0$; replacing $y$ by $iy$
forces the imaginary part to vanish as well. This holds for every $y$, so
take $y=Hx$ to obtain $\|Hx\|^2=0$ and hence $Hx=0$. Its real and imaginary
parts give $Vx=0$ and
$Jx=0$, contradicting invertibility of $J$. Thus $V$ is positive definite.
Apply [F5] to obtain $V=SD S^T$ with
$D=\operatorname{diag}(\nu_1,\nu_1,\ldots,\nu_r,\nu_r)$ and
$\nu_j\ge\hbar/2$. [F5, algebra]

1.3 For one mode and $\bar n\ge0$, set
$$\eta=\frac{\bar n}{1+\bar n},\qquad \rho_{\bar n}=(1-\eta)\sum_{m=0}^\infty \eta^m|m\rangle\langle m|,$$
with $\rho_0=|0\rangle\langle0|$. The geometric series makes this a
positive trace-class operator of trace one. For $\bar n>0$, define
$$|\alpha\rangle=e^{- |\alpha|^2/2}\sum_{m=0}^\infty \frac{\alpha^m}{\sqrt{m!}}|m\rangle.$$
Its norm is one by the exponential series. The vector
$\psi_\alpha:=W(q_0,p_0)g_0$, with
$\alpha=\sqrt{\hbar/2}(-p_0+iq_0)$, is a scalar phase times $|\alpha\rangle$:
the differential formula gives $a\psi=\alpha\psi$, and comparing
coefficients in the complete number basis gives the displayed series up to
one constant phase. In Schrödinger coordinates
$$\psi_\alpha(x)=\pi^{-1/4} e^{i\sqrt\hbar q_0(x+\sqrt\hbar p_0/2)} e^{-(x+\sqrt\hbar p_0)^2/2}.$$
Set $y=x+\sqrt\hbar p_0+\sqrt\hbar p/2$. In
$\langle W(q,p)\psi_\alpha,\psi_\alpha\rangle$, the Gaussian factor is
$e^{-y^2-\hbar p^2/4}$ and the phase is
$\sqrt\hbar qy-\hbar q p_0+\hbar q_0p$. For $\alpha_0>0$ and real
$\beta$, [F9] gives
$$\int_{\mathbb R}e^{-\alpha_0 y^2+i\beta y}\,dy=\sqrt{\frac\pi{\alpha_0}}e^{-\beta^2/(4\alpha_0)}$$
by the explicit substitutions $t=\alpha_0/\pi$ and $\xi=-\beta/(2\pi)$
in the supplier's $2\pi$-frequency formula. Taking $\alpha_0=1$ and
$\beta=\sqrt\hbar q$ gives the normalized factor
$\pi^{-1/2}\int e^{-y^2+i\sqrt\hbar qy}\,dy=e^{-\hbar q^2/4}$.
Therefore, for $u=\operatorname{Re}\alpha$ and $v=\operatorname{Im}\alpha$,
$$\langle W(q,p)\psi_\alpha,\psi_\alpha\rangle =\exp\!\left(i\sqrt{2\hbar}(qu+pv) -\frac{\hbar}{4}(q^2+p^2)\right).$$
The phase is the mean $d=(\sqrt{2\hbar}u,\sqrt{2\hbar}v)$. The geometric
weights have mean occupation
$\sum_m m(1-\eta)\eta^m=\eta/(1-\eta)=\bar n$. For a number vector,
$$Q|m\rangle=\sqrt{\hbar/2}\big(\sqrt{m+1}|m+1\rangle+\sqrt m|m-1\rangle\big),$$
and $P|m\rangle=-i\sqrt{\hbar/2}(\sqrt m|m-1\rangle-\sqrt{m+1}|m+1\rangle)$
by [F8]. Orthogonality of number vectors gives zero means and
$\langle m,Q^2m\rangle=\langle m,P^2m\rangle=\hbar(m+1/2)$. Also
$QP+PQ=-i\hbar(a^2-(a^*)^2)$, whose diagonal matrix entries vanish because
$a^2$ and $(a^*)^2$ change number by two. Thus the diagonal state has zero
symmetrized cross covariance. Summing against the geometric weights gives
$$\langle Q^2\rangle=\langle P^2\rangle =\frac{\hbar}{2}(2\bar n+1)=\nu.$$
Thus its quadrature second moments are finite and its covariance is $\nu I_2$.
The probability density $(\pi\bar n)^{-1}e^{-(u^2+v^2)/\bar n}$ on the
complex plane is normalized because [F9] at zero frequency gives
$\int_{\mathbb R}e^{-u^2/\bar n}du=\sqrt{\pi\bar n}$ in each coordinate,
and [F12] factors the absolutely integrable product integral.
By [F12] and two applications of [F9] with $\alpha_0=1/\bar n$,
$\beta_u=\sqrt{2\hbar}q$ and $\beta_v=\sqrt{2\hbar}p$, its characteristic
factor is
$$\int_{\mathbb C}\frac{e^{-|\alpha|^2/\bar n}}{\pi\bar n}e^{i\sqrt{2\hbar}(qu+pv)}\,du\,dv=e^{-\hbar\bar n(q^2+p^2)/2}.$$
To identify the mixture with $\rho_{\bar n}$, the $(m,n)$ matrix entry of
$|\alpha\rangle\langle\alpha|$ is
$e^{-|\alpha|^2}\alpha^m\bar\alpha^n/\sqrt{m!n!}$ by the coherent-state
series. Under a planar rotation $\alpha\mapsto e^{i\theta}\alpha$,
Lebesgue measure and the radial density are invariant by [F11], while
$\alpha^m\bar\alpha^n$ gains the factor $e^{i(m-n)\theta}$; choosing
$\theta$ with this factor unequal to $1$ shows that every off-diagonal entry
vanishes. For $m=n$, the polar formula [F11] and $\sigma(S^1)=2\pi$ give
$$\int_{\mathbb C}|\alpha|^{2m}e^{-a|\alpha|^2}\,du\,dv=2\pi\int_0^\infty r^{2m+1}e^{-ar^2}\,dr=\pi\int_0^\infty x^me^{-ax}\,dx,$$
where $x=r^2$. For $a>0$, the last integral is $m!/a^{m+1}$: its value
at $m=0$ is $1/a$, and integration by parts on $[0,R]$ followed by
$R\to\infty$ gives $I_m(a)=(m/a)I_{m-1}(a)$; the boundary term vanishes
by [F10]. Thus the $m$th diagonal entry of the mixture is
$$\frac{1}{\pi\bar n m!}\int_{\mathbb C}|\alpha|^{2m}e^{-(1+1/\bar n)|\alpha|^2}\,du\,dv=\frac{\bar n^m}{(1+\bar n)^{m+1}}=(1-\eta)\eta^m.$$
Let
$P_K=\sum_{m=0}^K|m\rangle\langle m|$ and integrate the finite-rank operators
$P_K|\alpha\rangle\langle\alpha|P_K$. Their diagonal entries just computed
give $\sum_{m=0}^K(1-\eta)\eta^m|m\rangle\langle m|$, which converges in trace norm
to $\rho_{\bar n}$. Also $P_K|\alpha\rangle\to|\alpha\rangle$ in norm for
each $\alpha$, and
$|\langle W(q,p)P_K\alpha,P_K\alpha\rangle|\le1$. Dominated convergence
[F6] therefore passes the characteristic function through the mixture.
Multiplying the two scaled Gaussian Fourier factors just computed by the
vacuum factor in the coherent formula gives
$$\operatorname{tr}(\rho_{\bar n}W(q,p)) =e^{-\hbar(2\bar n+1)(q^2+p^2)/4} =e^{-\nu(q^2+p^2)/2},\qquad \nu=\hbar(\bar n+1/2).$$
For $\bar n=0$, the same formula and covariance follow from [F9] with
$\alpha_0=1$ and $\beta=\sqrt\hbar q$ (and the $p$ coordinate). [F6, F8,
F9, F10, F11, F12, algebra]

2.1 Let $M_S$ be an implementer from [F3] and set $\rho_S=M_S\rho M_S^*$.
The Weyl identity and cyclicity of trace against a bounded operator give
$$\chi_{\rho_S}(z)=\operatorname{tr}(\rho M_S^*W(z)M_S) =\chi_\rho(S^Tz).$$
For a coordinate vector $e_j$, the explicit Weyl formula gives
$W(te_j)=e^{itR_j}$. Therefore
$M_S^*e^{itR_j}M_S=W(tS^Te_j)$; its derivative on Schwartz functions at zero
is $i\sum_kS_{jk}R_k$. By [F7], the two strongly continuous groups have
unique self-adjoint generators, so
$M_S^*R_jM_S=\overline{\sum_kS_{jk}R_k}$. The left side has Schwartz as a
core because every generator unitary in [F3] preserves Schwartz. By [F2],
Schwartz is dense in the joint quadrature graph norm, so every vector with all
quadrature second moments lies in the domain of these finite sums and the
identity acts there as written. Applying it to the eigenvectors of $\rho$
and using the absolutely convergent form sums in [F1] gives $d_S=Sd$ and
$V_S=SVS^T$. For transformations arising from finite Bogoliubov matrices,
these are exactly the core and Weyl interfaces of [F4]. [F1, F2, F3, F4,
F7, step 1.1, algebra]

3.1 Put $\bar n_j=\nu_j/\hbar-1/2\ge0$ and take the finite tensor product
of the one-mode states $\rho_{\bar n_j}$. In the occupation basis it is
positive trace class with trace one, and its characteristic function is the
product of the one-mode functions from step 1.3, namely
$\exp(-z^TDz/2)$. Conjugate this product state by an implementer $M_S$ from
[F3]; step 2.1 gives characteristic function
$\exp(-z^TSDS^Tz/2)=\exp(-z^TVz/2)$. Finally set
$z_0=Jd/\hbar$ and conjugate by the Weyl unitary $W(z_0)$. The Weyl
commutation relation yields
$$W(z_0)^*W(z)W(z_0) =e^{i\hbar z_0^TJz}W(z)=e^{iz^Td}W(z),$$
because $d=-\hbar Jz_0$. The resulting unitary conjugate of the product
thermal state is positive, trace class and trace one, and has exactly the
target characteristic function. This proves sufficiency and completes the
finite-mode equivalence. No infinite-mode inference is used. [F3, F5, F6,
step 2.1, step 1.2, step 1.3, algebra] ∎
